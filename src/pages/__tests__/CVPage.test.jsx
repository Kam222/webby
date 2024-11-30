import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import CVPage from '../CVPage';

// Suppress warnings
beforeAll(() => {
  jest.spyOn(console, 'warn').mockImplementation((message) => {
    if (message.includes('React Router') || message.includes('useScroll')) {
      return;
    }
    console.warn(message);
  });
});

afterAll(() => {
  jest.restoreAllMocks();
});

const renderWithProviders = (ui) => {
  return render(
    <BrowserRouter>
      {ui}
    </BrowserRouter>
  );
};

describe('CVPage', () => {
  beforeEach(() => {
    renderWithProviders(<CVPage />);
  });

  test('renders header information', () => {
    expect(screen.getByRole('heading', { name: /Khalid Ali/i })).toBeInTheDocument();
    expect(screen.getByText('maham089@umn.edu')).toBeInTheDocument();
    expect(screen.getByText('763-327-8945')).toBeInTheDocument();
  });

  test('renders citizenship information', () => {
    expect(screen.getByText('Citizenship')).toBeInTheDocument();
    expect(screen.getByText('USA • Australia • Kenya')).toBeInTheDocument();
  });

  test('renders document metadata', () => {
    expect(screen.getByText('Document')).toBeInTheDocument();
    expect(screen.getByText('Curriculum Vitae')).toBeInTheDocument();
    expect(screen.getByText('Version')).toBeInTheDocument();
    expect(screen.getByText('3.2.1')).toBeInTheDocument();
  });

  test('renders contact links correctly', () => {
    const emailLink = screen.getByText('maham089@umn.edu').closest('a');
    const phoneLink = screen.getByText('763-327-8945').closest('a');
    
    expect(emailLink).toHaveAttribute('href', 'mailto:maham089@umn.edu');
    expect(phoneLink).toHaveAttribute('href', 'tel:7633278945');
  });

  test('renders experience section', () => {
    expect(screen.getByText('Experience')).toBeInTheDocument();
    expect(screen.getByText('Office of the Special Presidential Envoy for Climate Change')).toBeInTheDocument();
    expect(screen.getByText('MIT Governance Lab')).toBeInTheDocument();
  });

  test('renders technical competencies section', () => {
    expect(screen.getByText('Technical Competencies')).toBeInTheDocument();
    expect(screen.getByText('Computational Methods')).toBeInTheDocument();
    expect(screen.getByText('Python')).toBeInTheDocument();
    expect(screen.getByText('R')).toBeInTheDocument();
  });

  test('renders education section', () => {
    expect(screen.getByText('Education')).toBeInTheDocument();
    expect(screen.getByText('University of Minnesota')).toBeInTheDocument();
    expect(screen.getByText('Philosophy, Politics & Economics')).toBeInTheDocument();
  });

  test('renders document version information', () => {
    expect(screen.getByText('Version')).toBeInTheDocument();
    expect(screen.getByText('3.2.1')).toBeInTheDocument();
    expect(screen.getByText('Last Updated')).toBeInTheDocument();
    expect(screen.getByText('2024-03-15')).toBeInTheDocument();
  });

  describe('Interactive Elements', () => {
    test('email link has correct mailto behavior', () => {
      const emailLink = screen.getByText('maham089@umn.edu').closest('a');
      expect(emailLink).toHaveAttribute('href', 'mailto:maham089@umn.edu');
    });

    test('phone link has correct tel behavior', () => {
      const phoneLink = screen.getByText('763-327-8945').closest('a');
      expect(phoneLink).toHaveAttribute('href', 'tel:7633278945');
    });
  });

  describe('Experience Timeline', () => {
    test('renders experience items in chronological order', () => {
      const dates = screen.getAllByText(/\d{4}/);
      const years = dates.map(date => {
        const match = date.textContent.match(/\d{4}/);
        return match ? parseInt(match[0]) : null;
      }).filter(Boolean);
      
      // Verify years are in descending order
      expect(years).toEqual([...years].sort((a, b) => b - a));
    });

    test('displays location for each experience', () => {
      expect(screen.getByText('Nairobi, KE')).toBeInTheDocument();
      expect(screen.getByText('Cambridge, MA')).toBeInTheDocument();
      expect(screen.getByText('Minneapolis, MN')).toBeInTheDocument();
    });
  });

  describe('Technical Competencies Section', () => {
    test('renders all technical skill categories', () => {
      const categories = [
        'Computational Methods',
        'Statistical Computing',
        'Quantitative Methods',
        'Natural Language Processing',
        'Research Infrastructure'
      ];
      
      categories.forEach(category => {
        expect(screen.getByText(category)).toBeInTheDocument();
      });
    });

    test('displays programming languages with their contexts', () => {
      const pythonElement = screen.getByText('Python');
      const rElement = screen.getByText('R');
      
      expect(pythonElement).toBeInTheDocument();
      expect(screen.getByText('Primary Development Environment')).toBeInTheDocument();
      expect(rElement).toBeInTheDocument();
      expect(screen.getByText('Statistical Analysis & Visualization')).toBeInTheDocument();
    });
  });

  describe('Education Section', () => {
    test('renders education details with emphasis', () => {
      expect(screen.getByText('University of Minnesota')).toBeInTheDocument();
      expect(screen.getByText('Philosophy, Politics & Economics')).toBeInTheDocument();
      expect(screen.getByText('Emphasis: Logic & Quantitative Methods')).toBeInTheDocument();
    });

    test('displays education timeline correctly', () => {
      expect(screen.getByText('2020 – 2024')).toBeInTheDocument();
    });
  });

  describe('Document Metadata', () => {
    test('renders all metadata fields', () => {
      const metadataFields = [
        'Document',
        'Version',
        'Last Updated',
        'Status'
      ];
      
      metadataFields.forEach(field => {
        expect(screen.getByText(field)).toBeInTheDocument();
      });
    });

    test('displays current document status', () => {
      expect(screen.getByText('Live Document')).toBeInTheDocument();
    });
  });
}); 