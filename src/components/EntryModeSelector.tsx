import { FileText, Zap } from 'lucide-react';

interface EntryModeSelectorProps {
  mode: 'manual' | 'auto';
  onChange: (mode: 'manual' | 'auto') => void;
}

export default function EntryModeSelector({ mode, onChange }: EntryModeSelectorProps) {
  return (
    <div className="flex gap-3">
      <button
        onClick={() => onChange('manual')}
        className={`flex items-center gap-2 px-4 py-2 rounded-lg font-medium transition-colors ${
          mode === 'manual'
            ? 'bg-slate-800 text-white shadow-sm'
            : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
        }`}
      >
        <FileText className="w-4 h-4" />
        Manual Entry
      </button>
      <button
        onClick={() => onChange('auto')}
        className={`flex items-center gap-2 px-4 py-2 rounded-lg font-medium transition-colors ${
          mode === 'auto'
            ? 'bg-slate-800 text-white shadow-sm'
            : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
        }`}
      >
        <Zap className="w-4 h-4" />
        Auto Parse
      </button>
    </div>
  );
}
