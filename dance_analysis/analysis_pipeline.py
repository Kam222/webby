import pandas as pd
import numpy as np
from pathlib import Path
import seaborn as sns
import matplotlib.pyplot as plt
from sqlalchemy import create_engine, text
from datetime import datetime

class DanceAnalytics:
    def __init__(self, db_path='sqlite:///data/dance_competition.db'):
        self.engine = create_engine(db_path)
        self._init_database()
        
    def _init_database(self):
        """Initialize database with required tables"""
        with self.engine.connect() as conn:
            conn.execute(text('''
                CREATE TABLE IF NOT EXISTS competitions (
                    id INTEGER PRIMARY KEY,
                    name TEXT NOT NULL,
                    date DATE NOT NULL,
                    location TEXT,
                    level TEXT,
                    style TEXT,
                    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
                )
            '''))
            
            conn.execute(text('''
                CREATE TABLE IF NOT EXISTS performances (
                    id INTEGER PRIMARY KEY,
                    competition_id INTEGER,
                    dance TEXT NOT NULL,
                    placement INTEGER,
                    score REAL,
                    notes TEXT,
                    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
                    FOREIGN KEY (competition_id) 
                        REFERENCES competitions(id)
                )
            '''))
            conn.commit()

    def add_competition(self, name, date, location, level, style):
        """Add new competition entry"""
        with self.engine.connect() as conn:
            result = conn.execute(text('''
                INSERT INTO competitions (name, date, location, level, style)
                VALUES (:name, :date, :location, :level, :style)
                RETURNING id
            '''), {
                'name': name,
                'date': date,
                'location': location,
                'level': level,
                'style': style
            })
            conn.commit()
            return result.scalar()

    def add_performance(self, competition_id, dance, placement, score, notes=''):
        """Add new performance entry"""
        with self.engine.connect() as conn:
            conn.execute(text('''
                INSERT INTO performances 
                (competition_id, dance, placement, score, notes)
                VALUES (:comp_id, :dance, :placement, :score, :notes)
            '''), {
                'comp_id': competition_id,
                'dance': dance,
                'placement': placement,
                'score': score,
                'notes': notes
            })
            conn.commit()

    def get_performance_trends(self):
        """Analyze performance trends over time"""
        query = text('''
            SELECT 
                c.date,
                c.level,
                p.dance,
                AVG(p.placement) as avg_placement,
                AVG(p.score) as avg_score
            FROM competitions c
            JOIN performances p ON c.id = p.competition_id
            GROUP BY c.date, c.level, p.dance
            ORDER BY c.date
        ''')
        
        with self.engine.connect() as conn:
            return pd.read_sql_query(query, conn)

    def visualize_progress(self, save_path='visualizations/progress.png'):
        """Generate visualization of progress over time"""
        df = self.get_performance_trends()
        
        plt.figure(figsize=(12, 6))
        sns.lineplot(data=df, x='date', y='avg_score', 
                    hue='dance', style='level')
        plt.title('Dance Performance Progress Over Time')
        plt.xticks(rotation=45)
        plt.tight_layout()
        
        # Ensure directory exists
        Path(save_path).parent.mkdir(parents=True, exist_ok=True)
        plt.savefig(save_path)
        plt.close()

    def analyze_improvement_rate(self):
        """Calculate rate of improvement across different dances"""
        df = self.get_performance_trends()
        
        # Convert date to datetime if it isn't already
        df['date'] = pd.to_datetime(df['date'])
        
        # Calculate improvement rates
        results = []
        for dance in df['dance'].unique():
            dance_data = df[df['dance'] == dance].copy()
            if len(dance_data) >= 2:
                # Calculate time difference in days
                time_diff = (dance_data['date'].max() - dance_data['date'].min()).days
                # Calculate score improvement
                score_diff = dance_data['avg_score'].iloc[-1] - dance_data['avg_score'].iloc[0]
                # Calculate daily improvement rate
                improvement_rate = score_diff / time_diff if time_diff > 0 else 0
                
                results.append({
                    'dance': dance,
                    'improvement_rate': improvement_rate,
                    'total_improvement': score_diff,
                    'days_tracked': time_diff
                })
        
        return pd.DataFrame(results)

if __name__ == '__main__':
    # Example usage
    analytics = DanceAnalytics()
    
    # Add sample data
    comp_id = analytics.add_competition(
        name='Test Competition',
        date='2024-01-15',
        location='Minneapolis, MN',
        level='Gold',
        style='Smooth'
    )
    
    analytics.add_performance(
        competition_id=comp_id,
        dance='Waltz',
        placement=1,
        score=95.5,
        notes='Strong frame, good timing'
    )
    
    # Generate visualizations
    analytics.visualize_progress() 