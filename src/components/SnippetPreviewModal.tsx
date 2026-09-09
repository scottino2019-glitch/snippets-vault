import React, { useState, useMemo, useEffect } from 'react';
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
  theme: _theme,
  onClose,
}) => {
  const [device, setDevice] = useState<DeviceMode>('desktop');
  const [previewBg, setPreviewBg] = useState<'white' | 'dark' | 'grid'>('white');
  const [copied, setCopied] = useState(false);
  const [iframeKey, setIframeKey] = useState(0);

  // Close on Escape key press
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose]);

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
    <div
      id="snippet-preview-modal-backdrop"
      onClick={(e) => {
        if (e.target === e.currentTarget) {
          onClose();
        }
      }}
      className="fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-4 md:p-6 bg-slate-900/60 backdrop-blur-xs animate-in fade-in duration-150"
    >
      <div
        id="snippet-preview-modal-card"
        className="w-full max-w-5xl h-[95dvh] sm:h-[90vh] rounded-2xl border border-slate-200 bg-white shadow-2xl flex flex-col overflow-hidden text-slate-900"
      >
        {/* Modal Header: Two cleanly separated responsive sections */}
        <div
          className="border-b shrink-0 transition-colors shadow-xs"
          style={{
            backgroundColor: category?.headerHex || '#0f766e',
            borderColor: category?.headerHex || '#0f766e',
          }}
        >
          {/* Top Row: Title, Category Pill and ALWAYS-VISIBLE Close & Copy actions */}
          <div className="px-3 sm:px-5 py-2.5 sm:py-3 flex items-center justify-between gap-2 border-b border-white/15">
            <div className="flex items-center gap-2 sm:gap-3 min-w-0 pr-1">
              {category && (
                <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-bold bg-white text-slate-900 shadow-xs border border-white/40 shrink-0">
                  <span
                    className="w-2 h-2 rounded-full shrink-0"
                    style={{ backgroundColor: category.headerHex || category.color }}
                  />
                  <span className="max-w-[90px] sm:max-w-none truncate">{category.name}</span>
                </span>
              )}
              <div className="min-w-0">
                <h3
                  className="text-sm sm:text-base font-bold text-white tracking-tight truncate"
                  title={snippet.title}
                >
                  {snippet.title}
                </h3>
                <p
                  className="text-[11px] font-mono text-white/80 hidden sm:flex items-center gap-1 truncate"
                  title={snippet.filePath}
                >
                  <Folder size={11} className="opacity-80 text-white shrink-0" />
                  <span className="truncate">
                    {snippet.filePath || `public/snippets/${snippet.category}/${snippet.id}.html`}
                  </span>
                </p>
              </div>
            </div>

            {/* Right side: Copia + Chiudi (ALWAYS pinned here, never hidden, never pushed out) */}
            <div className="flex items-center gap-1.5 shrink-0">
              {/* Quick Copy */}
              <button
                onClick={handleCopy}
                className={`flex items-center gap-1 sm:gap-1.5 px-2.5 sm:px-3 py-1.5 rounded-lg text-xs font-bold border transition-all ${
                  copied
                    ? 'bg-white text-emerald-700 border-white shadow-md'
                    : 'bg-white text-slate-900 border-white hover:bg-slate-100 shadow-xs'
                }`}
                title="Copia codice HTML"
              >
                {copied ? <Check size={14} className="stroke-[2.5]" /> : <Copy size={13} />}
                <span className="hidden xs:inline sm:inline">{copied ? 'Copiato!' : 'Copia HTML'}</span>
              </button>

              {/* Close Button: Prominent, high contrast, easy touch target */}
              <button
                onClick={onClose}
                className="p-1.5 sm:p-2 rounded-lg border border-white/30 bg-white/20 hover:bg-rose-600 hover:border-rose-500 text-white transition-colors shadow-xs active:scale-95 flex items-center justify-center min-w-[34px] min-h-[34px]"
                title="Chiudi anteprima (Esc)"
                aria-label="Chiudi finestra modale"
              >
                <X size={18} className="stroke-[2.5]" />
              </button>
            </div>
          </div>

          {/* Bottom Row: Control Toolbar (Background switcher, Device toggle, Reload) */}
          <div className="px-3 sm:px-5 py-2 bg-black/15 flex items-center justify-between gap-2 overflow-x-auto scrollbar-none text-xs">
            <div className="flex items-center gap-2 flex-nowrap shrink-0">
              {/* Background Switcher */}
              <div
                className="flex items-center rounded-lg p-0.5 bg-black/25 backdrop-blur-xs border border-white/20 text-xs shadow-inner shrink-0"
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
                  <span className="hidden sm:inline">Bianco</span>
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
                  <span className="hidden sm:inline">Scuro</span>
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
                  <span className="hidden sm:inline">Griglia</span>
                </button>
              </div>

              {/* Device Switcher */}
              <div className="flex items-center rounded-lg p-0.5 bg-black/25 backdrop-blur-xs border border-white/20 text-xs shadow-inner shrink-0">
                <button
                  onClick={() => setDevice('desktop')}
                  className={`px-2 py-1 rounded flex items-center gap-1 text-[11px] transition-all ${
                    device === 'desktop'
                      ? 'bg-white font-bold text-slate-950 shadow-xs'
                      : 'text-white/85 hover:text-white hover:bg-white/10'
                  }`}
                  title="Vista Desktop (100%)"
                >
                  <Monitor size={12} />
                  <span className="hidden md:inline">Desktop</span>
                </button>
                <button
                  onClick={() => setDevice('tablet')}
                  className={`px-2 py-1 rounded flex items-center gap-1 text-[11px] transition-all ${
                    device === 'tablet'
                      ? 'bg-white font-bold text-slate-950 shadow-xs'
                      : 'text-white/85 hover:text-white hover:bg-white/10'
                  }`}
                  title="Vista Tablet (768px)"
                >
                  <Tablet size={12} />
                  <span className="hidden md:inline">Tablet</span>
                </button>
                <button
                  onClick={() => setDevice('mobile')}
                  className={`px-2 py-1 rounded flex items-center gap-1 text-[11px] transition-all ${
                    device === 'mobile'
                      ? 'bg-white font-bold text-slate-950 shadow-xs'
                      : 'text-white/85 hover:text-white hover:bg-white/10'
                  }`}
                  title="Vista Mobile (390px)"
                >
                  <Smartphone size={12} />
                  <span className="hidden md:inline">Mobile</span>
                </button>
              </div>

              {/* Reload Button */}
              <button
                onClick={() => setIframeKey((prev) => prev + 1)}
                className="p-1.5 rounded-lg border border-white/25 bg-white/15 hover:bg-white/30 text-white transition-colors backdrop-blur-xs shadow-xs shrink-0 flex items-center gap-1 text-[11px]"
                title="Ricarica anteprima"
              >
                <RotateCcw size={13} />
                <span className="hidden lg:inline">Ricarica</span>
              </button>
            </div>

            {/* Mobile Path hint */}
            <div className="text-[10px] text-white/75 font-mono truncate max-w-[150px] shrink-0 sm:hidden">
              {snippet.filePath?.replace('public/snippets/', '') || `${snippet.category}.html`}
            </div>
          </div>
        </div>

        {/* Modal Body: Centered Device Screen */}
        <div className="flex-1 p-2 sm:p-4 md:p-6 flex items-center justify-center overflow-auto bg-slate-100">
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
