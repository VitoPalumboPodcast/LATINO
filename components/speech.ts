import { VoiceSettings } from '../types';

export function speak(text: string, settings: VoiceSettings) {
  if (!('speechSynthesis' in window)) return;
  window.speechSynthesis.cancel();
  const utterance = new SpeechSynthesisUtterance(text);
  utterance.lang = 'it-IT';
  utterance.rate = settings.rate;
  utterance.pitch = settings.pitch;
  const voices = window.speechSynthesis.getVoices();
  const selected = voices.find((voice) => voice.voiceURI === settings.voiceURI);
  if (selected) utterance.voice = selected;
  window.speechSynthesis.speak(utterance);
}
