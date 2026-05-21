import React from 'react';
import { Volume2 } from 'lucide-react';
import { Role, VoiceSettings } from '../types';
import { speak } from './speech';

export function BigButton(props: React.ButtonHTMLAttributes<HTMLButtonElement>) {
  const { className = '', children, ...rest } = props;
  return (
    <button
      {...rest}
      className={`rounded-3xl px-8 py-5 text-2xl font-bold shadow-xl transition-all active:scale-95 ${className}`}
    >
      {children}
    </button>
  );
}

export function SpeakButton({ text, settings }: { text: string; settings: VoiceSettings }) {
  return (
    <button
      type="button"
      onClick={() => speak(text, settings)}
      className="inline-flex items-center gap-2 rounded-full bg-white px-5 py-3 text-lg font-bold text-slate-600 shadow-md border-2 border-slate-100 active:scale-95"
      aria-label={`Ascolta ${text}`}
    >
      <Volume2 size={24} />
      ASCOLTA
    </button>
  );
}

export function RoleBadge({ role }: { role: Role }) {
  const isSubject = role === Role.SUBJECT;
  return (
    <div
      className={`inline-flex items-center justify-center px-6 py-4 text-2xl font-bold text-white shadow-lg ${
        isSubject ? 'bg-role-subject shape-subject' : 'bg-role-object shape-object'
      }`}
    >
      {role}
    </div>
  );
}
