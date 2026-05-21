import React, { useState } from 'react';
import { QuizItem, VoiceSettings } from '../types';
import { BigButton, RoleBadge, SpeakButton } from './Shared';

export function Phase2_Discrimination({
  items,
  voiceSettings,
  onActionSuccess,
  onComplete,
}: {
  items: QuizItem[];
  voiceSettings: VoiceSettings;
  onActionSuccess: () => void;
  onComplete: () => void;
}) {
  const [index, setIndex] = useState(0);
  const [feedback, setFeedback] = useState('');
  const item = items[index];
  const options = index % 2 === 0 ? [item.correctForm, item.wrongForm] : [item.wrongForm, item.correctForm];

  const choose = (answer: string) => {
    if (answer === item.correctForm) {
      setFeedback('ESATTO!');
      onActionSuccess();
      setTimeout(() => {
        setFeedback('');
        if (index === items.length - 1) onComplete();
        else setIndex(index + 1);
      }, 700);
    } else {
      setFeedback('GUARDA IL RUOLO E RIPROVA');
    }
  };

  return (
    <section className="space-y-8 text-center">
      <h2 className="text-5xl font-bold text-slate-800">SCEGLI LA FORMA</h2>
      <div className="rounded-[3rem] bg-white p-8 shadow-xl">
        <RoleBadge role={item.role} />
        <div className="mt-6 text-2xl text-slate-500">{item.italianContext}</div>
        <div className="mt-4 text-4xl font-bold text-slate-800">
          {item.latinContextPre} <span className="rounded-2xl bg-yellow-100 px-6 py-2">?</span> {item.latinContextPost}
        </div>
        <div className="mt-5">
          <SpeakButton text={item.italianContext} settings={voiceSettings} />
        </div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        {options.map((option) => (
          <BigButton key={option} onClick={() => choose(option)} className="bg-action-blue text-white">
            {option}
          </BigButton>
        ))}
      </div>
      {feedback && <div className="text-3xl font-bold text-action-blue animate-pop">{feedback}</div>}
    </section>
  );
}
