import React, { useState, useEffect, useCallback } from 'react';
import { AppPhase, VoiceSettings } from './types';
import { VOCABULARY_DATA, QUIZ_DATA, IDENTIFICATION_DATA } from './constants';
import { Phase0_Vocabulary } from './components/Phase0_Vocabulary';
import { Phase_Flashcards } from './components/Phase_Flashcards';
import { Phase_Identification } from './components/Phase_Identification';
import { Phase1_Comparison } from './components/Phase1_Comparison';
import { Phase2_Discrimination } from './components/Phase2_Discrimination';
import { AdminPanel } from './components/AdminPanel';
import { Trophy, RefreshCcw, Settings, Star } from 'lucide-react';

const STORAGE_KEY = 'latin_inclusivo_voice_v1';
const STARS_KEY = 'latin_inclusivo_stars';

export default function App() {
  const [phase, setPhase] = useState<AppPhase>(AppPhase.VOCABULARY);
  const [isAdminOpen, setIsAdminOpen] = useState(false);
  const [stars, setStars] = useState(() => Number(localStorage.getItem(STARS_KEY)) || 0);
  const [voiceSettings, setVoiceSettings] = useState<VoiceSettings>(() => {
    const saved = localStorage.getItem(STORAGE_KEY);
    return saved ? JSON.parse(saved) : { voiceURI: null, rate: 0.65, pitch: 1.0 };
  });

  const addStar = () => {
    const newStars = stars + 1;
    setStars(newStars);
    localStorage.setItem(STARS_KEY, newStars.toString());
  };

  const autoSelectBestVoice = useCallback(() => {
    const allVoices = window.speechSynthesis.getVoices();
    if (allVoices.length === 0) return;
    const savedVoiceExists = voiceSettings.voiceURI && allVoices.some(v => v.voiceURI === voiceSettings.voiceURI);
    if (voiceSettings.voiceURI && savedVoiceExists) return;

    const itVoices = allVoices.filter(v => v.lang.toLowerCase().includes('it'));
    let bestVoice = itVoices.find(v => v.name.toLowerCase().includes('elisa'));
    if (!bestVoice) {
      bestVoice = itVoices.find(v => {
        const n = v.name.toLowerCase();
        return !v.localService || n.includes('online') || n.includes('natural') || n.includes('neural');
      });
    }
    if (!bestVoice && itVoices.length > 0) bestVoice = itVoices[0];
    if (bestVoice) setVoiceSettings(prev => ({ ...prev, voiceURI: bestVoice!.voiceURI }));
  }, [voiceSettings.voiceURI]);

  useEffect(() => {
    autoSelectBestVoice();
    window.speechSynthesis.onvoiceschanged = autoSelectBestVoice;
  }, [autoSelectBestVoice]);

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(voiceSettings));
  }, [voiceSettings]);

  const handleRestart = () => {
    setPhase(AppPhase.VOCABULARY);
    setStars(0);
    localStorage.setItem(STARS_KEY, '0');
  };

  const renderContent = () => {
    const props = { voiceSettings, onActionSuccess: addStar };
    switch (phase) {
      case AppPhase.VOCABULARY:
        return <Phase0_Vocabulary data={VOCABULARY_DATA} onComplete={() => setPhase(AppPhase.FLASHCARDS)} {...props} />;
      case AppPhase.FLASHCARDS:
        return <Phase_Flashcards words={VOCABULARY_DATA} onComplete={() => setPhase(AppPhase.IDENTIFICATION)} {...props} />;
      case AppPhase.IDENTIFICATION:
        return <Phase_Identification data={IDENTIFICATION_DATA} onComplete={() => setPhase(AppPhase.COMPARISON)} {...props} />;
      case AppPhase.COMPARISON:
        return <Phase1_Comparison words={VOCABULARY_DATA} onComplete={() => setPhase(AppPhase.DISCRIMINATION)} {...props} />;
      case AppPhase.DISCRIMINATION:
        return <Phase2_Discrimination items={QUIZ_DATA} onComplete={() => setPhase(AppPhase.COMPLETED)} {...props} />;
      case AppPhase.COMPLETED:
        return (
          <div className="flex flex-col items-center justify-center h-full p-8 text-center animate-in zoom-in duration-500">
            <Trophy size={140} className="text-yellow-400 mb-6 drop-shadow-lg" />
            <h1 className="text-6xl font-display font-bold text-slate-800 mb-4">OTTIMO LAVORO!</h1>
            <p className="text-3xl text-slate-500 mb-12">HAI VINTO {stars} STELLE!</p>
            <button
              onClick={handleRestart}
              className="flex items-center gap-3 bg-action-blue text-white px-10 py-6 rounded-full text-2xl font-bold shadow-2xl hover:bg-sky-600 transition-all active:scale-90"
            >
              <RefreshCcw size={32} /> GIOCA ANCORA
            </button>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col font-sans">
      <header className="bg-white border-b-4 border-slate-200 p-4 shadow-md sticky top-0 z-10">
        <div className="max-w-4xl mx-auto flex justify-between items-center">
          <div className="flex items-center gap-4">
            <div className="bg-yellow-400 text-white p-2 rounded-2xl shadow-lg animate-pop">
              <Star size={32} fill="white" />
            </div>
            <span className="text-4xl font-bold text-slate-800">{stars}</span>
          </div>

          <div className="text-center flex-grow mx-4">
            <h1 className="text-2xl font-bold text-slate-400">LATINO FACILE</h1>
          </div>

          <button
            onClick={() => setIsAdminOpen(true)}
            className="p-3 bg-slate-100 text-slate-400 rounded-2xl hover:text-slate-800 transition-all border-2 border-slate-200"
            aria-label="Apri impostazioni voce"
          >
            <Settings size={28} />
          </button>
        </div>
      </header>

      {isAdminOpen && (
        <AdminPanel settings={voiceSettings} onSettingsChange={setVoiceSettings} onClose={() => setIsAdminOpen(false)} />
      )}

      <main className="flex-grow w-full max-w-4xl mx-auto py-8 px-4">
        {renderContent()}
      </main>
    </div>
  );
}
