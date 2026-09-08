import React from 'react';
import { ThemeMode } from '../types';

interface HtmlSyntaxViewerProps {
  code: string;
  theme: ThemeMode;
}

export const HtmlSyntaxViewer: React.FC<HtmlSyntaxViewerProps> = ({
  code,
}) => {
  const lines = code.split('\n');

  // Helper to colorize HTML line with high-contrast, clean modern colors
  const highlightLine = (line: string): React.ReactNode => {
    if (!line) return <span>&nbsp;</span>;

    // Comments <!-- ... -->
    if (line.trim().startsWith('<!--')) {
      return <span className="text-slate-500 italic">{line}</span>;
    }

    const parts: React.ReactNode[] = [];
    let key = 0;

    const regex = /(<\/?[a-zA-Z0-9\-]+)|(\s+[a-zA-Z0-9\-]+(?==))|(=["'][^"']*["'])|(>|\/>)/g;
    let match: RegExpExecArray | null;
    let lastIndex = 0;

    while ((match = regex.exec(line)) !== null) {
      if (match.index > lastIndex) {
        parts.push(
          <span key={`txt-${key++}`} className="text-slate-700">
            {line.substring(lastIndex, match.index)}
          </span>
        );
      }

      if (match[1]) {
        // Tag name: <div or </button
        parts.push(
          <span key={`tag-${key++}`} className="text-blue-700 font-semibold">
            {match[1]}
          </span>
        );
      } else if (match[2]) {
        // Attribute name: class=, style=
        parts.push(
          <span key={`attr-${key++}`} className="text-amber-800 font-medium">
            {match[2]}
          </span>
        );
      } else if (match[3]) {
        // Attribute value: ="something"
        parts.push(
          <span key={`val-${key++}`} className="text-emerald-700">
            {match[3]}
          </span>
        );
      } else if (match[4]) {
        // Closing bracket: > or />
        parts.push(
          <span key={`close-${key++}`} className="text-blue-700">
            {match[4]}
          </span>
        );
      }

      lastIndex = regex.lastIndex;
    }

    if (lastIndex < line.length) {
      parts.push(
        <span key={`end-${key++}`} className="text-slate-700">
          {line.substring(lastIndex)}
        </span>
      );
    }

    return <>{parts}</>;
  };

  return (
    <div className="relative w-full max-h-96 overflow-auto font-mono text-xs select-text rounded-xl border border-slate-200 bg-white shadow-xs">
      <div className="min-w-full inline-block py-3">
        {lines.map((line, i) => (
          <div
            key={i}
            className="flex items-start hover:bg-slate-50 px-3 transition-colors"
          >
            <span className="w-8 select-none text-right pr-3 text-[11px] font-mono shrink-0 text-slate-400">
              {i + 1}
            </span>
            <pre className="m-0 font-mono whitespace-pre text-left leading-relaxed flex-1">
              {highlightLine(line)}
            </pre>
          </div>
        ))}
      </div>
    </div>
  );
};
