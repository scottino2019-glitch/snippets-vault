import React, { useState } from 'react';
import { Download, Smartphone, X } from 'lucide-react';
import { usePWAInstall } from '../hooks/usePWAInstall';

export const PWAInstallButton: React.FC = () => {
  const { isInstallable, isInstalled, isIOS, install } = usePWAInstall();
  const [showIOSGuide, setShowIOSGuide] = useState(false);

  // Hide when already installed in standalone mode
  if (isInstalled) {
    return null;
  }

  // Chromium / Android / Desktop prompt
  if (isInstallable) {
    return (
      <button
        onClick={install}
        className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-bold text-teal-800 bg-teal-50 hover:bg-teal-100 border border-teal-200 shadow-xs transition-colors"
        title="Installa applicazione sul tuo dispositivo"
      >
        <Download size={14} className="stroke-[2.5] text-teal-600" />
        <span className="hidden xs:inline sm:inline">Installa App</span>
      </button>
    );
  }

  // iOS Safari flow
  if (isIOS) {
    return (
      <>
        <button
          onClick={() => setShowIOSGuide(true)}
          className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-semibold text-teal-800 bg-teal-50 hover:bg-teal-100 border border-teal-200 transition-colors shadow-xs"
          title="Istruzioni per installare su iPhone o iPad"
        >
          <Smartphone size={14} className="text-teal-600" />
          <span className="hidden xs:inline sm:inline">Installa PWA</span>
        </button>

        {showIOSGuide && (
          <div
            onClick={(e) => {
              if (e.target === e.currentTarget) setShowIOSGuide(false);
            }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-xs"
          >
            <div className="w-full max-w-sm rounded-2xl bg-white p-5 shadow-2xl border border-slate-200 text-slate-900">
              <div className="flex items-center justify-between mb-3 pb-2 border-b border-slate-100">
                <h3 className="text-sm font-bold text-slate-900">Installa su iPhone o iPad</h3>
                <button
                  onClick={() => setShowIOSGuide(false)}
                  className="p-1 text-slate-400 hover:text-slate-700 rounded-lg"
                >
                  <X size={16} />
                </button>
              </div>
              <p className="text-xs text-slate-600 leading-relaxed space-y-2">
                1. Premi il pulsante <strong>Condividi</strong> (icona quadrato con freccia in alto) nella barra di Safari.<br />
                2. Scorri in basso e tocca <strong>Aggiungi alla schermata Home</strong>.<br />
                3. Conferma con <strong>Aggiungi</strong> per avere l'app sul telefono a tutto schermo.
              </p>
              <button
                onClick={() => setShowIOSGuide(false)}
                className="mt-4 w-full py-2 rounded-xl bg-teal-600 text-white text-xs font-bold hover:bg-teal-700 transition-colors"
              >
                Ho capito
              </button>
            </div>
          </div>
        )}
      </>
    );
  }

  return null;
};
