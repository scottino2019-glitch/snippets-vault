import React, { useState, useMemo } from 'react';
import {
  X,
  Copy,
  Check,
  RotateCcw,
  Monitor,
  Tablet,
  Smartphone,
  Folder,
  Sun,
  Moon,
  Grid,
} from 'lucide-react';
import { Snippet, CategoryInfo, ThemeMode, DeviceMode } from '../types';

interface SnippetPreviewModalProps {
  snippet: Snippet | null;
  category?: CategoryInfo;
  theme: ThemeMode;
  onClose: () => void;
}

export const SnippetPreviewModal: React.FC<SnippetPreviewModalProps> = ({
  snippet,
  category,
  theme,
  onClose,
}) => {
  const [device, setDevice] = useState<DeviceMode>('desktop');
  const [previewBg, setPreviewBg] = useState<'white' | 'dark' | 'grid'>('white');
  const [copied, setCopied] = useState(false);
  const [iframeKey, setIframeKey] = useState(0);

  // Inject background style dynamically into snippet HTML
  const processedCode = useMemo(() => {
    if (!snippet) return '';
    let bgRule = '';
    if (previewBg === 'dark') {
      bgRule = `body { background-color: #0f172a !important; background-image: none !important; color: #f8fafc; }`;
    } else if (previewBg === 'grid') {
      bgRule = `body { background-color: #f8fafc !important; background-image: radial-gradient(#cbd5e1 1.5px, transparent 1.5px) !important; background-size: 16px 16px !important; color: #0f172a; }`;
    } else {
      bgRule = `body { background-color: #ffffff !important; background-image: none !important; color: #0f172a; }`;
    }

    const overrideTag = `<style id="modal-bg-override">${bgRule}</style>`;
    if (snippet.code.includes('</head>')) {
      return snippet.code.replace('</head>', `${overrideTag}</head>`);
    }
    return `${overrideTag}${snippet.code}`;
  }, [snippet, previewBg]);

  if (!snippet) return null;

  const handleCopy = async () => {
    try {
      if (navigator.clipboard && navigator.clipboard.writeText) {
        await navigator.clipboard.writeText(snippet.code);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
        return;
      }
    } catch (e) {
      console.warn('Fallback clipboard:', e);
    }

    try {
      const ta = document.createElement('textarea');
      ta.value = snippet.code;
      ta.style.position = 'fixed';
      ta.style.left = '-9999px';
      document.body.appendChild(ta);
      ta.focus();
      ta.select();
      document.execCommand('copy');
      document.body.removeChild(ta);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error('Copia fallita:', err);
    }
  };

  const getDeviceWidth = () => {
    switch (device) {
      case 'mobile':
        return 'max-w-[390px]';
      case 'tablet':
        return 'max-w-[768px]';
      case 'desktop':
      default:
        return 'w-full';
    }
  };

  const getPreviewWrapperBg = () => {
    switch (previewBg) {
      case 'dark':
        return 'bg-[#0f172a]';
      case 'grid':
        return 'bg-[#f8fafc] bg-[radial-gradient(#cbd5e1_1.5px,transparent_1.5px)] [background-size:16px_16px]';
      case 'white':
      default:
        return 'bg-white';
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-slate-900/60 backdrop-blur-xs animate-in fade-in duration-150">
      <div className="w-full max-w-5xl h-[92vh] rounded-2xl border border-slate-200 bg-white shadow-2xl flex flex-col overflow-hidden text-slate-900">
        {/* Modal Header */}
        <div
          className="px-5 py-3 border-b flex flex-wrap items-center justify-between gap-3 shrink-0 transition-colors"
          style={{
            backgroundColor: category?.headerHex || '#0f766e',
            borderColor: category?.headerHex || '#0f766e',
          }}
        >
          <div className="flex items-center gap-3">
            {category && (
              <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-bold bg-white text-slate-900 shadow-xs border border-white/40">
                <span
                  className="w-2 h-2 rounded-full"
                  style={{ backgroundColor: category.headerHex || category.color }}
                />
                {category.name}
              </span>
            )}
            <div>
              <h3 className="text-base font-bold text-white tracking-tight">{snippet.title}</h3>
              <p className="text-xs font-mono text-white/80 flex items-center gap-1">
                <Folder size={12} className="opacity-80 text-white" />
                {snippet.filePath || `public/snippets/${snippet.category}/${snippet.id}.html`}
              </p>
            </div>
          </div>

          {/* Controls: Device toggle, background switcher, reload, copy, close */}
          <div className="flex items-center gap-2">
            {/* Background Switcher */}
            <div
              className="flex items-center rounded-lg p-0.5 bg-black/25 backdrop-blur-xs border border-white/20 text-xs shadow-inner"
              title="Cambia sfondo anteprima"
            >
              <button
                onClick={() => setPreviewBg('white')}
                className={`flex items-center gap-1 px-2 py-1 rounded text-[11px] transition-all ${
                  previewBg === 'white'
                    ? 'bg-white font-bold text-slate-950 shadow-xs'
                    : 'text-white/85 hover:text-white hover:bg-white/10'
                }`}
                title="Sfondo Bianco"
              >
                <Sun size={12} className={previewBg === 'white' ? 'text-amber-500' : 'text-white'} />
                <span className="hidden md:inline">Bianco</span>
              </button>
              <button
                onClick={() => setPreviewBg('dark')}
                className={`flex items-center gap-1 px-2 py-1 rounded text-[11px] transition-all ${
                  previewBg === 'dark'
                    ? 'bg-slate-950 font-bold text-white shadow-xs border border-white/20'
                    : 'text-white/85 hover:text-white hover:bg-white/10'
                }`}
                title="Sfondo Scuro"
              >
                <Moon size={12} className={previewBg === 'dark' ? 'text-cyan-400' : 'text-white'} />
                <span className="hidden md:inline">Scuro</span>
              </button>
              <button
                onClick={() => setPreviewBg('grid')}
                className={`flex items-center gap-1 px-2 py-1 rounded text-[11px] transition-all ${
                  previewBg === 'grid'
                    ? 'bg-white font-bold text-slate-950 shadow-xs'
                    : 'text-white/85 hover:text-white hover:bg-white/10'
                }`}
                title="Sfondo Griglia"
              >
                <Grid size={12} className={previewBg === 'grid' ? 'text-indigo-600' : 'text-white'} />
                <span className="hidden md:inline">Griglia</span>
              </button>
            </div>

            {/* Device Switcher */}
            <div className="flex items-center rounded-lg p-0.5 bg-black/25 backdrop-blur-xs border border-white/20 text-xs shadow-inner">
              <button
                onClick={() => setDevice('desktop')}
                className={`px-2 py-1 rounded flex items-center gap-1 text-[11px] transition-all ${
                  device === 'desktop'
                    ? 'bg-white font-bold text-slate-950 shadow-xs'
                    : 'text-white/85 hover:text-white hover:bg-white/10'
                }`}
                title="Desktop"
              >
                <Monitor size={12} />
                <span className="hidden sm:inline">Desktop</span>
              </button>
              <button
                onClick={() => setDevice('tablet')}
                className={`px-2 py-1 rounded flex items-center gap-1 text-[11px] transition-all ${
                  device === 'tablet'
                    ? 'bg-white font-bold text-slate-950 shadow-xs'
                    : 'text-white/85 hover:text-white hover:bg-white/10'
                }`}
                title="Tablet"
              >
                <Tablet size={12} />
                <span className="hidden sm:inline">Tablet</span>
              </button>
              <button
                onClick={() => setDevice('mobile')}
                className={`px-2 py-1 rounded flex items-center gap-1 text-[11px] transition-all ${
                  device === 'mobile'
                    ? 'bg-white font-bold text-slate-950 shadow-xs'
                    : 'text-white/85 hover:text-white hover:bg-white/10'
                }`}
                title="Mobile"
              >
                <Smartphone size={12} />
                <span className="hidden sm:inline">Mobile</span>
              </button>
            </div>

            {/* Ricarica */}
            <button
              onClick={() => setIframeKey((prev) => prev + 1)}
              className="p-1.5 rounded-lg border border-white/25 bg-white/15 hover:bg-white/30 text-white transition-colors backdrop-blur-xs shadow-xs"
              title="Ricarica anteprima"
            >
              <RotateCcw size={14} />
            </button>

            {/* Copia */}
            <button
              onClick={handleCopy}
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-bold border transition-all ${
                copied
                  ? 'bg-white text-emerald-700 border-white shadow-md'
                  : 'bg-white text-slate-900 border-white hover:bg-slate-100 shadow-xs'
              }`}
            >
              {copied ? <Check size={13} className="stroke-[2.5]" /> : <Copy size={13} />}
              <span>{copied ? 'Copiato!' : 'Copia HTML'}</span>
            </button>

            {/* Chiudi */}
            <button
              onClick={onClose}
              className="p-1.5 rounded-lg border border-white/25 bg-white/15 hover:bg-rose-600 hover:border-rose-500 text-white transition-colors backdrop-blur-xs shadow-xs ml-1"
              title="Chiudi anteprima"
            >
              <X size={16} />
            </button>
          </div>
        </div>

        {/* Modal Body: Centered Device Screen */}
        <div className="flex-1 p-4 sm:p-6 flex items-center justify-center overflow-auto bg-slate-100">
          <div
            className={`h-full transition-all duration-300 rounded-xl overflow-hidden shadow-md border border-slate-200 ${getPreviewWrapperBg()} ${getDeviceWidth()}`}
          >
            <iframe
              key={`${snippet.id}-${iframeKey}-${previewBg}`}
              title={`Anteprima espansa ${snippet.title}`}
              srcDoc={processedCode}
              sandbox="allow-scripts allow-modals allow-same-origin allow-forms"
              className="w-full h-full border-0 block pointer-events-auto"
            />
          </div>
        </div>
      </div>
    </div>
  );
};
