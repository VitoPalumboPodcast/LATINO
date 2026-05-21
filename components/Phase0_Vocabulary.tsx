import React from 'react';
import { WordConfig, VoiceSettings } from '../types';
import { BigButton, SpeakButton } from './Shared';

export function Phase0_Vocabulary({
  data,
  voiceSettings,
  onActionSuccess,
  onComplete,
}: {
  data: WordConfig[];
  voiceSettings: VoiceSettings;
  onActionSuccess: () => void;
  onComplete: () => void;
}) {
  return (
    <section className="space-y-8">
      <div className="text-center">
        <h2 className="text-5xl font-bold text-slate-800 mb-3">CONOSCIAMO LE PAROLE</h2>
        <p className="text-2xl text-slate-500">GUARDA, LEGGI E ASCOLTA.</p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        {data.map((word) => (
          <article key={word.id} className={`rounded-[2rem] bg-white p-5 shadow-xl border-b-8 ${word.shadow}`}>
            <div className="flex items-center gap-5">
              <span className="text-6xl">{word.emoji}</span>
              <div className="flex-1">
                <h3 className="text-3xl font-bold text-slate-800">{word.italian}</h3>
                <div className="mt-3 grid grid-cols-2 gap-3 text-center">
                  <div className="rounded-2xl bg-green-50 p-3">
                    <div className="text-sm font-bold text-green-700">CHI FA?</div>
                    <div className="text-2xl font-bold text-green-800">{word.latinNom}</div>
                  </div>
                  <div className="rounded-2xl bg-orange-50 p-3">
                    <div className="text-sm font-bold text-orange-700">CHI SUBISCE?</div>
                    <div className="text-2xl font-bold text-orange-800">{word.latinAcc}</div>
                  </div>
                </div>
              </div>
            </div>
            <div className="mt-4">
              <SpeakButton text={`${word.italian}. ${word.latinNom}. ${word.latinAcc}`} settings={voiceSettings} />
            </div>
          </article>
        ))}
      </div>

      <div className="text-center">
        <BigButton
          onClick={() => {
            onActionSuccess();
            onComplete();
          }}
          className="bg-action-blue text-white"
        >
          CONTINUA
        </BigButton>
      </div>
    </section>
  );
}
