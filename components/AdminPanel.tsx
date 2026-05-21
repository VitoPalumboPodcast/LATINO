import React from 'react';
import { X } from 'lucide-react';
import { VoiceSettings } from '../types';

export function AdminPanel({
  settings,
  onSettingsChange,
  onClose,
}: {
  settings: VoiceSettings;
  onSettingsChange: (settings: VoiceSettings) => void;
  onClose: () => void;
}) {
  const voices = 'speechSynthesis' in window ? window.speechSynthesis.getVoices() : [];

  return (
    <div className="fixed inset-0 z-50 bg-slate-900/40 flex items-center justify-center p-4">
      <section className="w-full max-w-xl rounded-[2rem] bg-white p-6 shadow-2xl">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-3xl font-bold text-slate-800">IMPOSTAZIONI VOCE</h2>
          <button onClick={onClose} className="rounded-full bg-slate-100 p-3 text-slate-600">
            <X />
          </button>
        </div>

        <label className="block text-lg font-bold text-slate-500 mb-2">VOCE</label>
        <select
          className="w-full rounded-2xl border-2 border-slate-200 p-4 text-lg"
          value={settings.voiceURI || ''}
          onChange={(event) => onSettingsChange({ ...settings, voiceURI: event.target.value || null })}
        >
          <option value="">AUTOMATICA</option>
          {voices.map((voice) => (
            <option key={voice.voiceURI} value={voice.voiceURI}>
              {voice.name} - {voice.lang}
            </option>
          ))}
        </select>

        <label className="mt-5 block text-lg font-bold text-slate-500">VELOCITA</label>
        <input
          type="range"
          min="0.45"
          max="1.2"
          step="0.05"
          value={settings.rate}
          onChange={(event) => onSettingsChange({ ...settings, rate: Number(event.target.value) })}
          className="w-full"
        />

        <label className="mt-5 block text-lg font-bold text-slate-500">TONO</label>
        <input
          type="range"
          min="0.7"
          max="1.4"
          step="0.05"
          value={settings.pitch}
          onChange={(event) => onSettingsChange({ ...settings, pitch: Number(event.target.value) })}
          className="w-full"
        />
      </section>
    </div>
  );
}
