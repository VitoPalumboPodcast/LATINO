import React, { useState } from 'react';
import { WordConfig, VoiceSettings } from '../types';
import { BigButton, SpeakButton } from './Shared';

export function Phase_Flashcards({
  words,
  voiceSettings,
  onActionSuccess,
  onComplete,
}: {
  words: WordConfig[];
  voiceSettings: VoiceSettings;
  onActionSuccess: () => void;
  onComplete: () => void;
}) {
  const [index, setIndex] = useState(0);
  const word = words[index];
  const isLast = index === words.length - 1;

  return (
    <section className="flex flex-col items-center gap-8 text-center">
      <h2 className="text-5xl font-bold text-slate-800">FLASHCARD</h2>
      <article className={`w-full max-w-2xl rounded-[3rem] bg-gradient-to-br ${word.gradient} p-8 text-white shadow-2xl`}>
        <div className="text-8xl mb-4">{word.emoji}</div>
        <h3 className="text-5xl font-bold mb-5">{word.italian}</h3>
        <div className="grid grid-cols-2 gap-4">
          <div className="rounded-3xl bg-white/90 p-5 text-green-700">
            <div className="text-lg font-bold">CHI FA?</div>
            <div className="text-4xl font-bold">{word.latinNom}</div>
          </div>
          <div className="rounded-3xl bg-white/90 p-5 text-orange-700">
            <div className="text-lg font-bold">CHI SUBISCE?</div>
            <div className="text-4xl font-bold">{word.latinAcc}</div>
          </div>
        </div>
      </article>
      <SpeakButton text={`${word.italian}. ${word.latinNom}. ${word.latinAcc}`} settings={voiceSettings} />
      <BigButton
        onClick={() => {
          onActionSuccess();
          if (isLast) onComplete();
          else setIndex(index + 1);
        }}
        className="bg-action-blue text-white"
      >
        {isLast ? 'PASSA AGLI ESERCIZI' : 'AVANTI'}
      </BigButton>
    </section>
  );
}
