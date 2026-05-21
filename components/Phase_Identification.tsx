import React, { useState } from 'react';
import { IdentificationItem, VoiceSettings } from '../types';
import { BigButton, SpeakButton } from './Shared';

export function Phase_Identification({
  data,
  voiceSettings,
  onActionSuccess,
  onComplete,
}: {
  data: (IdentificationItem & { optionAEmoji?: string; optionBEmoji?: string; sentenceEmojis?: string[] })[];
  voiceSettings: VoiceSettings;
  onActionSuccess: () => void;
  onComplete: () => void;
}) {
  const [index, setIndex] = useState(0);
  const [feedback, setFeedback] = useState('');
  const item = data[index];

  const choose = (answer: string) => {
    if (answer === item.correctAnswer) {
      setFeedback('GIUSTO!');
      onActionSuccess();
      setTimeout(() => {
        setFeedback('');
        if (index === data.length - 1) onComplete();
        else setIndex(index + 1);
      }, 700);
    } else {
      setFeedback('RIPROVA');
    }
  };

  return (
    <section className="space-y-8 text-center">
      <h2 className="text-5xl font-bold text-slate-800">CHI FA L'AZIONE?</h2>
      <div className="rounded-[3rem] bg-white p-8 shadow-xl">
        <div className="mb-4 text-5xl">{item.sentenceEmojis?.join(' ')}</div>
        <div className="text-5xl font-bold text-slate-800">{item.sentence}</div>
        <div className="mt-4 text-2xl text-slate-500">{item.translation}</div>
        <div className="mt-5">
          <SpeakButton text={`${item.sentence}. ${item.translation}`} settings={voiceSettings} />
        </div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <BigButton onClick={() => choose(item.optionA)} className="bg-green-500 text-white">
          <span className="block text-5xl">{item.optionAEmoji}</span>
          {item.optionA}
        </BigButton>
        <BigButton onClick={() => choose(item.optionB)} className="bg-orange-500 text-white">
          <span className="block text-5xl">{item.optionBEmoji}</span>
          {item.optionB}
        </BigButton>
      </div>
      {feedback && <div className="text-4xl font-bold text-action-blue animate-pop">{feedback}</div>}
    </section>
  );
}
