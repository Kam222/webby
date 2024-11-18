import { Info, Calendar, GitBranch } from 'lucide-react';

export const MetadataPanel = () => {
  return (
    <div className="space-y-4 border-t border-gray-100 dark:border-gray-800 pt-4">
      <div className="space-y-2">
        <div className="font-['Berkeley_Mono'] text-[10px] uppercase tracking-wider text-gray-400">
          last updated
        </div>
        <div className="flex items-center gap-2 text-sm text-gray-600">
          <Calendar className="w-3 h-3" />
          <span>March 2024</span>
        </div>
      </div>

      <div className="space-y-2">
        <div className="font-['Berkeley_Mono'] text-[10px] uppercase tracking-wider text-gray-400">
          version
        </div>
        <div className="flex items-center gap-2 text-sm text-gray-600">
          <GitBranch className="w-3 h-3" />
          <span>2.1.0</span>
        </div>
      </div>
    </div>
  );
}; 