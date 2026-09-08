import React, { useState } from 'react';
import {
  Copy,
  Check,
  Download,
  Edit3,
  CheckCheck,
  RotateCcw,
  FileCode,
} from 'lucide-react';
import { ThemeMode } from '../types';
import { HtmlSyntaxViewer } from './HtmlSyntaxViewer';

interface CodePaneProps {
  code: string;
  originalCode: string;
  title: string;
  theme: ThemeMode;
  onCodeChange: (newCode: string) => void;
  onResetCode: () => void;
  onSaveCode?: () => void;
}

export const CodePane: React.FC<CodePaneProps> = ({
  code,
  originalCode,
  title,
  theme,
  onCodeChange,
  onResetCode,
  onSaveCode,
}) => {
  const isSlate = theme === 'slate';
  const [copied, setCopied] = useState(false);
  const [isEditing, setIsEditing] = useState(false);

  const isModified = code !== originalCode;
  const lineCount = code.split('\n').length;
  const charCount = code.length;
  const kbSize = (new Blob([code]).size / 1024).toFixed(1);

  const handleCopy = () => {
    navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleDownload = () => {
    const filename = `${title.toLowerCase().replace(/[^a-z0-9]/g, '-') || 'snippet'}.html`;
    const blob = new Blob([code], { type: 'text/html;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = filename;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  };

  return (
    <div
      id="code-pane-container"
      className="flex flex-col h-full overflow-hidden"
      style={{
        backgroundColor: isSlate ? '#181d24' : '#ded8ce',
      }}
    >
      {/* Code Toolbar */}
      <div
        className={`px-3 py-2 border-b flex flex-wrap items-center justify-between gap-2 shrink-0 select-none ${
          isSlate
            ? 'bg-[#222933] border-[#364150] text-slate-300'
            : 'bg-[#f0ebe3] border-[#cbcfd8] text-stone-700'
        }`}
      >
        {/* Left info */}
        <div className="flex items-center gap-2 text-xs">
          <FileCode size={14} className="text-teal-400" />
          <span className="font-mono text-xs font-semibold">Codice HTML</span>
          <span
            className={`text-[11px] font-mono px-1.5 py-0.5 rounded ${
              isSlate ? 'bg-slate-800 text-slate-400' : 'bg-stone-200 text-stone-600'
            }`}
          >
            {lineCount} righe • {charCount} car. • {kbSize} KB
          </span>
          {isModified && (
            <span className="text-[10px] text-amber-400 font-semibold px-1.5 py-0.5 rounded bg-amber-950/40 border border-amber-800/50">
              Modificato
            </span>
          )}
        </div>

        {/* Right actions */}
        <div className="flex items-center gap-1.5 text-xs">
          {isModified && (
            <button
              onClick={onResetCode}
              className={`px-2 py-1 rounded flex items-center gap-1 transition-colors ${
                isSlate
                  ? 'hover:bg-slate-700/70 text-slate-400 hover:text-slate-200'
                  : 'hover:bg-stone-300 text-stone-600 hover:text-stone-900'
              }`}
              title="Ripristina codice originale"
            >
              <RotateCcw size={13} />
              <span>Ripristina</span>
            </button>
          )}

          {/* Toggle Edit */}
          <button
            onClick={() => {
              if (isEditing && onSaveCode) {
                onSaveCode();
              }
              setIsEditing(!isEditing);
            }}
            className={`px-2.5 py-1 rounded font-medium flex items-center gap-1.5 transition-colors border ${
              isEditing
                ? 'bg-teal-600 border-teal-500 text-slate-950 font-semibold shadow-xs'
                : isSlate
                ? 'bg-[#1a2029] hover:bg-slate-700 border-[#364150] text-slate-300'
                : 'bg-[#ded8ce] hover:bg-[#d6d0c4] border-[#cbcfd8] text-stone-800'
            }`}
          >
            {isEditing ? (
              <>
                <CheckCheck size={13} />
                <span>Salva</span>
              </>
            ) : (
              <>
                <Edit3 size={13} />
                <span>Modifica Live</span>
              </>
            )}
          </button>

          {/* Copy */}
          <button
            onClick={handleCopy}
            className={`px-2.5 py-1 rounded font-medium flex items-center gap-1.5 transition-colors border ${
              copied
                ? 'bg-teal-600 border-teal-500 text-slate-950 font-semibold'
                : isSlate
                ? 'bg-[#1a2029] hover:bg-slate-700 border-[#364150] text-slate-300'
                : 'bg-[#ded8ce] hover:bg-[#d6d0c4] border-[#cbcfd8] text-stone-800'
            }`}
            title="Copia tutto il codice negli appunti"
          >
            {copied ? <Check size={13} /> : <Copy size={13} />}
            <span>{copied ? 'Copiato!' : 'Copia'}</span>
          </button>

          {/* Download */}
          <button
            onClick={handleDownload}
            className={`p-1.5 rounded transition-colors ${
              isSlate
                ? 'hover:bg-slate-700 text-slate-400 hover:text-slate-200'
                : 'hover:bg-stone-300 text-stone-600 hover:text-stone-900'
            }`}
            title="Scarica file .html"
          >
            <Download size={14} />
          </button>
        </div>
      </div>

      {/* Code syntax viewer or editor */}
      <div className="flex-1 overflow-hidden relative">
        <HtmlSyntaxViewer
          code={code}
          theme={theme}
          isEditing={isEditing}
          onCodeChange={onCodeChange}
        />
      </div>
    </div>
  );
};
