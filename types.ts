import { LucideIcon } from 'lucide-react';

export enum Role {
  SUBJECT = 'CHI FA?',
  OBJECT = 'CHI SUBISCE?'
}

export interface VoiceSettings {
  voiceURI: string | null;
  rate: number;
  pitch: number;
}

export interface WordConfig {
  id: string;
  italian: string;
  latinNom: string;
  latinAcc: string;
  emoji: string;
  color: string;
  gradient: string;
  shadow: string;
  stem: string;
  endingNom: string;
  endingAcc: string;
}

export interface SentenceExample {
  role: Role;
  latinSentence: string;
  italianSentence: string;
  focusWord: string;
}

export interface QuizItem {
  italianContext: string;
  latinContextPre: string;
  latinContextPost: string;
  correctForm: string;
  wrongForm: string;
  role: Role;
}

export interface IdentificationItem {
  sentence: string;
  translation: string;
  optionA: string;
  optionB: string;
  correctAnswer: string;
}

export enum AppPhase {
  VOCABULARY = 0,
  FLASHCARDS = 1,
  IDENTIFICATION = 2,
  COMPARISON = 3,
  DISCRIMINATION = 4,
  COMPLETED = 5
}