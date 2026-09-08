import React, { useState, useRef, useEffect } from 'react';
import {
  RotateCw,
  ExternalLink,
  Monitor,
  Tablet,
  Smartphone,
  Maximize2,
  Minimize2,
  Check,
} from 'lucide-react';
import { DeviceMode, ThemeMode } from '../types';

interface PreviewPaneProps {
  code: string;
  title: string;
  theme: ThemeMode;
}

export const PreviewPane: React.FC<PreviewPaneProps> = ({ code, title, theme }) => {
  const isSlate = theme === 'slate';
  const [device, setDevice] = useState<DeviceMode>('desktop');
  const [canvasBg, setCanvasBg] = useState<'slate' | 'ivory' | 'checker'>('slate');
  const [key, setKey] = useState(0);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  // Sync canvas background with default theme if user hasn't explicitly set it
  useEffect(() => {
    setCanvasBg(theme === 'slate' ? 'slate' : 'ivory');
  }, [theme]);

  const handleRefresh = () => {
    setKey((prev) => prev + 1);
  };

  const handleOpenExternal = () => {
    const blob = new Blob([code], { type: 'text/html;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    window.open(url, '_blank');
  };

  const toggleFullscreen = () => {
    setIsFullscreen(!isFullscreen);
  };

  const getDeviceWidth = () => {
    switch (device) {
      case 'mobile':
        return '375px';
      case 'tablet':
        return '768px';
      case 'desktop':
      default:
        return '100%';
    }
  };

  const getCanvasBackgroundClass = () => {
    switch (canvasBg) {
      case 'slate':
        return 'bg-[#1c222a]';
      case 'ivory':
        return 'bg-[#ebe6dd]';
      case 'checker':
        return 'bg-[radial-gradient(#384353_1px,transparent_1px)] [background-size:16px_16px] bg-[#1a1f26]';
      default:
        return 'bg-[#1c222a]';
    }
  };

  return (
    <div
      ref={containerRef}
      id="preview-pane-container"
      className={`flex flex-col h-full ${
        isFullscreen ? 'fixed inset-0 z-50 p-4 bg-slate-950/80 backdrop-blur-md' : 'relative'
      }`}
    >
      {/* Preview toolbar */}
      <div
        className={`px-3 py-2 border-b flex flex-wrap items-center justify-between gap-2 shrink-0 select-none ${
          isSlate
            ? 'bg-[#222933] border-[#364150] text-slate-300'
            : 'bg-[#f0ebe3] border-[#cbcfd8] text-stone-700'
        }`}
      >
        {/* Left: Title & Status */}
        <div className="flex items-center gap-2 min-w-0">
          <span
            className="w-2 h-2 rounded-full bg-teal-400 shrink-0"
            title="Anteprima isolata attiva"
          />
          <span className="text-xs font-semibold truncate max-w-[180px] md:max-w-xs">
            Anteprima: {title}
          </span>
        </div>

        {/* Center: Device size selector */}
        <div
          className={`flex items-center p-0.5 rounded-lg border text-xs ${
            isSlate
              ? 'bg-[#181d24] border-[#364150]'
              : 'bg-[#ded8ce] border-[#cbcfd8]'
          }`}
        >
          <button
            onClick={() => setDevice('desktop')}
            className={`p-1.5 rounded transition-colors ${
              device === 'desktop'
                ? isSlate
                  ? 'bg-slate-700 text-teal-300'
                  : 'bg-[#faf6ee] text-stone-900 font-semibold'
                : 'text-slate-400 hover:text-slate-200'
            }`}
            title="Vista Desktop (100%)"
          >
            <Monitor size={14} />
          </button>
          <button
            onClick={() => setDevice('tablet')}
            className={`p-1.5 rounded transition-colors ${
              device === 'tablet'
                ? isSlate
                  ? 'bg-slate-700 text-teal-300'
                  : 'bg-[#faf6ee] text-stone-900 font-semibold'
                : 'text-slate-400 hover:text-slate-200'
            }`}
            title="Vista Tablet (768px)"
          >
            <Tablet size={14} />
          </button>
          <button
            onClick={() => setDevice('mobile')}
            className={`p-1.5 rounded transition-colors ${
              device === 'mobile'
                ? isSlate
                  ? 'bg-slate-700 text-teal-300'
                  : 'bg-[#faf6ee] text-stone-900 font-semibold'
                : 'text-slate-400 hover:text-slate-200'
            }`}
            title="Vista Mobile (375px)"
          >
            <Smartphone size={14} />
          </button>
        </div>

        {/* Right: Canvas background, reload, external, fullscreen */}
        <div className="flex items-center gap-1.5 text-xs">
          {/* Background selector */}
          <div
            className={`flex items-center p-0.5 rounded border ${
              isSlate ? 'border-[#364150] bg-[#181d24]' : 'border-[#cbcfd8] bg-[#ded8ce]'
            }`}
            title="Sfondo area di rendering"
          >
            <button
              onClick={() => setCanvasBg('slate')}
              className={`w-4 h-4 rounded-sm border mr-1 ${
                canvasBg === 'slate'
                  ? 'ring-1 ring-teal-400 border-teal-400'
                  : 'border-slate-600'
              } bg-[#1e242c]`}
              title="Sfondo Ardesia Neutro"
            />
            <button
              onClick={() => setCanvasBg('ivory')}
              className={`w-4 h-4 rounded-sm border mr-1 ${
                canvasBg === 'ivory'
                  ? 'ring-1 ring-amber-600 border-amber-600'
                  : 'border-stone-400'
              } bg-[#ebe6dd]`}
              title="Sfondo Avorio Neutro"
            />
            <button
              onClick={() => setCanvasBg('checker')}
              className={`w-4 h-4 rounded-sm border text-[9px] font-mono leading-none flex items-center justify-center ${
                canvasBg === 'checker'
                  ? 'ring-1 ring-teal-400 border-teal-400 text-teal-300'
                  : 'border-slate-600 text-slate-400'
              } bg-[#232932]`}
              title="Sfondo a Griglia Scacchi"
            >
              ☷
            </button>
          </div>

          <button
            onClick={handleRefresh}
            className={`p-1.5 rounded transition-colors ${
              isSlate
                ? 'hover:bg-slate-700/60 text-slate-300'
                : 'hover:bg-stone-300 text-stone-700'
            }`}
            title="Ricarica anteprima"
          >
            <RotateCw size={14} />
          </button>

          <button
            onClick={handleOpenExternal}
            className={`p-1.5 rounded transition-colors ${
              isSlate
                ? 'hover:bg-slate-700/60 text-slate-300'
                : 'hover:bg-stone-300 text-stone-700'
            }`}
            title="Apri anteprima a pagina intera"
          >
            <ExternalLink size={14} />
          </button>

          <button
            onClick={toggleFullscreen}
            className={`p-1.5 rounded transition-colors ${
              isSlate
                ? 'hover:bg-slate-700/60 text-slate-300'
                : 'hover:bg-stone-300 text-stone-700'
            }`}
            title={isFullscreen ? 'Riduci anteprima' : 'Massimizza anteprima'}
          >
            {isFullscreen ? <Minimize2 size={14} /> : <Maximize2 size={14} />}
          </button>
        </div>
      </div>

      {/* Render Canvas Container */}
      <div
        className={`flex-1 overflow-auto p-3 md:p-6 flex items-center justify-center transition-colors ${getCanvasBackgroundClass()}`}
      >
        <div
          className="h-full flex flex-col transition-all duration-200 shadow-lg rounded-lg overflow-hidden border"
          style={{
            width: getDeviceWidth(),
            maxWidth: '100%',
            borderColor: isSlate ? '#384353' : '#cbcfd8',
            backgroundColor: isSlate ? '#1e242c' : '#ffffff',
          }}
        >
          {device !== 'desktop' && (
            <div
              className={`px-3 py-1 text-[11px] font-mono flex items-center justify-between border-b ${
                isSlate
                  ? 'bg-[#222933] text-slate-400 border-slate-700'
                  : 'bg-[#f0ebe3] text-stone-600 border-stone-300'
              }`}
            >
              <span>{device === 'tablet' ? 'Simulazione Tablet (768px)' : 'Simulazione Mobile (375px)'}</span>
              <span>100% zoom</span>
            </div>
          )}

          <iframe
            key={key}
            id="snippet-preview-iframe"
            title="Anteprima Snippet"
            srcDoc={code}
            sandbox="allow-scripts allow-modals"
            className="w-full flex-1 border-0 bg-transparent"
          />
        </div>
      </div>
    </div>
  );
};
