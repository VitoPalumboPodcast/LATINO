import React, { useState } from 'react';
import { COMPARISON_DATA } from '../constants';
import { WordConfig, VoiceSettings } from '../types';
import { BigButton, RoleBadge, SpeakButton } from './Shared';

export function Phase1_Comparison({
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
  const examples = COMPARISON_DATA[word.id];

  return (
    <section className="space-y-8 text-center">
      <h2 className="text-5xl font-bold text-slate-800">CONFRONTA LE FORME</h2>
      <div className="text-7xl">{word.emoji}</div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        {examples.map((example) => (
          <article key={example.role} className="rounded-[3rem] bg-white p-6 shadow-xl">
            <RoleBadge role={example.role} />
            <div className="mt-5 text-4xl font-bold text-slate-800">{example.focusWord}</div>
            <div className="mt-3 text-2xl text-slate-500">{example.latinSentence}</div>
            <div className="text-xl text-slate-400">{example.italianSentence}</div>
            <div className="mt-4">
              <SpeakButton text={`${example.latinSentence}. ${example.italianSentence}`} settings={voiceSettings} />
            </div>
          </article>
        ))}
      </div>
      <BigButton
        onClick={() => {
          onActionSuccess();
          if (index === words.length - 1) onComplete();
          else setIndex(index + 1);
        }}
        className="bg-action-blue text-white"
      >
        {index === words.length - 1 ? 'FACCIAMO IL QUIZ' : 'AVANTI'}
      </BigButton>
    </section>
  );
}
