import { WordConfig, SentenceExample, QuizItem, Role, IdentificationItem } from './types';

export const VOCABULARY_DATA: WordConfig[] = [
  {
    id: 'boy',
    italian: 'IL RAGAZZO',
    latinNom: 'PUER',
    latinAcc: 'PUERUM',
    emoji: '👦',
    stem: 'PUER',
    endingNom: '',
    endingAcc: 'UM',
    color: 'text-blue-600',
    gradient: 'from-blue-400 to-blue-600',
    shadow: 'shadow-blue-200'
  },
  {
    id: 'girl',
    italian: 'LA RAGAZZA',
    latinNom: 'PUELLA',
    latinAcc: 'PUELLAM',
    emoji: '👧',
    stem: 'PUELL',
    endingNom: 'A',
    endingAcc: 'AM',
    color: 'text-purple-600',
    gradient: 'from-purple-400 to-purple-600',
    shadow: 'shadow-purple-200'
  },
  {
    id: 'apple',
    italian: 'LA MELA',
    latinNom: 'MALUM',
    latinAcc: 'MALUM',
    emoji: '🍎',
    stem: 'MAL',
    endingNom: 'UM',
    endingAcc: 'UM',
    color: 'text-red-600',
    gradient: 'from-red-400 to-red-600',
    shadow: 'shadow-red-200'
  },
  {
    id: 'water',
    italian: "L'ACQUA",
    latinNom: 'AQUA',
    latinAcc: 'AQUAM',
    emoji: '💧',
    stem: 'AQU',
    endingNom: 'A',
    endingAcc: 'AM',
    color: 'text-cyan-500',
    gradient: 'from-cyan-300 to-cyan-500',
    shadow: 'shadow-cyan-100'
  },
  {
    id: 'cat',
    italian: 'IL GATTO',
    latinNom: 'FELES',
    latinAcc: 'FELEM',
    emoji: '🐱',
    stem: 'FEL',
    endingNom: 'ES',
    endingAcc: 'EM',
    color: 'text-orange-500',
    gradient: 'from-orange-300 to-orange-500',
    shadow: 'shadow-orange-100'
  },
  {
    id: 'rose',
    italian: 'LA ROSA',
    latinNom: 'ROSA',
    latinAcc: 'ROSAM',
    emoji: '🌹',
    stem: 'ROS',
    endingNom: 'A',
    endingAcc: 'AM',
    color: 'text-rose-600',
    gradient: 'from-pink-400 to-rose-600',
    shadow: 'shadow-rose-200'
  },
  {
    id: 'dog',
    italian: 'IL CANE',
    latinNom: 'CANIS',
    latinAcc: 'CANEM',
    emoji: '🐶',
    stem: 'CAN',
    endingNom: 'IS',
    endingAcc: 'EM',
    color: 'text-amber-700',
    gradient: 'from-amber-400 to-orange-700',
    shadow: 'shadow-amber-200'
  }
];

export const IDENTIFICATION_DATA: (IdentificationItem & { optionAEmoji: string; optionBEmoji: string; sentenceEmojis: string[] })[] = [
  {
    sentence: "PUER MALUM EDIT",
    translation: "IL RAGAZZO MANGIA LA MELA",
    optionA: "PUER",
    optionAEmoji: "👦",
    optionB: "MALUM",
    optionBEmoji: "🍎",
    correctAnswer: "PUER",
    sentenceEmojis: ["👦", "🍎", "🍽️"]
  },
  {
    sentence: "PUELLA AQUAM BIBIT",
    translation: "LA RAGAZZA BEVE L'ACQUA",
    optionA: "PUELLA",
    optionAEmoji: "👧",
    optionB: "AQUAM",
    optionBEmoji: "💧",
    correctAnswer: "PUELLA",
    sentenceEmojis: ["👧", "💧", "🥤"]
  },
  {
    sentence: "MATTEUS PUERUM SALUTAT",
    translation: "MATTEO SALUTA IL RAGAZZO",
    optionA: "MATTEUS",
    optionAEmoji: "🙋‍♂️",
    optionB: "PUERUM",
    optionBEmoji: "👦",
    correctAnswer: "MATTEUS",
    sentenceEmojis: ["🙋‍♂️", "👦", "👋"]
  },
  {
    sentence: "FELES MATTEUM VIDET",
    translation: "IL GATTO VEDE MATTEO",
    optionA: "FELES",
    optionAEmoji: "🐱",
    optionB: "MATTEUM",
    optionBEmoji: "🙋‍♂️",
    correctAnswer: "FELES",
    sentenceEmojis: ["🐱", "🙋‍♂️", "👁️"]
  },
  {
    sentence: "JULIA ROSAM VIDET",
    translation: "GIULIA VEDE LA ROSA",
    optionA: "ROSAM",
    optionAEmoji: "🌹",
    optionB: "JULIA",
    optionBEmoji: "👩",
    correctAnswer: "JULIA",
    sentenceEmojis: ["👩", "🌹", "👁️"]
  },
  {
    sentence: "CANIS MALUM VIDET",
    translation: "IL CANE VEDE LA MELA",
    optionA: "CANIS",
    optionAEmoji: "🐶",
    optionB: "MALUM",
    optionBEmoji: "🍎",
    correctAnswer: "CANIS",
    sentenceEmojis: ["🐶", "🍎", "👁️"]
  },
  {
    sentence: "MATTEUS FELEM AMAT",
    translation: "MATTEO AMA IL GATTO",
    optionA: "MATTEUS",
    optionAEmoji: "🙋‍♂️",
    optionB: "FELEM",
    optionBEmoji: "🐱",
    correctAnswer: "MATTEUS",
    sentenceEmojis: ["🙋‍♂️", "🐱", "❤️"]
  }
];

export const COMPARISON_DATA: Record<string, [SentenceExample, SentenceExample]> = {
  'boy': [
    {
      role: Role.SUBJECT,
      latinSentence: "PUER RIDET",
      italianSentence: "IL RAGAZZO RIDE",
      focusWord: "PUER"
    },
    {
      role: Role.OBJECT,
      latinSentence: "MATTEUS PUERUM SALUTAT",
      italianSentence: "MATTEO SALUTA IL RAGAZZO",
      focusWord: "PUERUM"
    }
  ],
  'girl': [
    {
      role: Role.SUBJECT,
      latinSentence: "PUELLA CANTAT",
      italianSentence: "LA RAGAZZA CANTA",
      focusWord: "PUELLA"
    },
    {
      role: Role.OBJECT,
      latinSentence: "MATTEUS PUELLAM AUDIT",
      italianSentence: "MATTEO SENTE LA RAGAZZA",
      focusWord: "PUELLAM"
    }
  ],
  'apple': [
    {
      role: Role.SUBJECT,
      latinSentence: "MALUM CADIT",
      italianSentence: "LA MELA CADE",
      focusWord: "MALUM"
    },
    {
      role: Role.OBJECT,
      latinSentence: "PUER MALUM EDIT",
      italianSentence: "IL RAGAZZO MANGIA LA MELA",
      focusWord: "MALUM"
    }
  ],
  'water': [
    {
      role: Role.SUBJECT,
      latinSentence: "AQUA FLUIT",
      italianSentence: "L'ACQUA SCORRE",
      focusWord: "AQUA"
    },
    {
      role: Role.OBJECT,
      latinSentence: "PUELLA AQUAM BIBIT",
      italianSentence: "LA RAGAZZA BEVE L'ACQUA",
      focusWord: "AQUAM"
    }
  ],
  'cat': [
    {
      role: Role.SUBJECT,
      latinSentence: "FELES DORMIT",
      italianSentence: "IL GATTO DORME",
      focusWord: "FELES"
    },
    {
      role: Role.OBJECT,
      latinSentence: "MATTEUS FELEM AMAT",
      italianSentence: "MATTEO AMA IL GATTO",
      focusWord: "FELEM"
    }
  ],
  'rose': [
    {
      role: Role.SUBJECT,
      latinSentence: "ROSA FLORET",
      italianSentence: "LA ROSA FIORISCE",
      focusWord: "ROSA"
    },
    {
      role: Role.OBJECT,
      latinSentence: "MATTEUS ROSAM VIDET",
      italianSentence: "MATTEO VEDE LA ROSA",
      focusWord: "ROSAM"
    }
  ],
  'dog': [
    {
      role: Role.SUBJECT,
      latinSentence: "CANIS CURRIT",
      italianSentence: "IL CANE CORRE",
      focusWord: "CANIS"
    },
    {
      role: Role.OBJECT,
      latinSentence: "MATTEUS CANEM AUDIT",
      italianSentence: "MATTEO SENTE IL CANE",
      focusWord: "CANEM"
    }
  ]
};

export const QUIZ_DATA: QuizItem[] = [
  {
    italianContext: "IL RAGAZZO MANGIA LA MELA",
    latinContextPre: "",
    latinContextPost: "MALUM EDIT",
    correctForm: "PUER",
    wrongForm: "PUERUM",
    role: Role.SUBJECT
  },
  {
    italianContext: "MATTEO SALUTA IL RAGAZZO",
    latinContextPre: "MATTEUS SALUTAT",
    latinContextPost: "",
    correctForm: "PUERUM",
    wrongForm: "PUER",
    role: Role.OBJECT
  },
  {
    italianContext: "LA RAGAZZA BEVE L'ACQUA",
    latinContextPre: "",
    latinContextPost: "AQUAM BIBIT",
    correctForm: "PUELLA",
    wrongForm: "PUELLAM",
    role: Role.SUBJECT
  },
  {
    italianContext: "IL RAGAZZO BEVE L'ACQUA",
    latinContextPre: "PUER BIBIT",
    latinContextPost: "",
    correctForm: "AQUAM",
    wrongForm: "AQUA",
    role: Role.OBJECT
  },
  {
    italianContext: "IL GATTO VEDE MATTEO",
    latinContextPre: "",
    latinContextPost: "MATTEUM VIDET",
    correctForm: "FELES",
    wrongForm: "FELEM",
    role: Role.SUBJECT
  },
  {
    italianContext: "MATTEO AMA IL GATTO",
    latinContextPre: "MATTEUS AMAT",
    latinContextPost: "",
    correctForm: "FELEM",
    wrongForm: "FELES",
    role: Role.OBJECT
  },
  {
    italianContext: "IL CANE CORRE",
    latinContextPre: "",
    latinContextPost: "CURRIT",
    correctForm: "CANIS",
    wrongForm: "CANEM",
    role: Role.SUBJECT
  },
  {
    italianContext: "MATTEO SENTE IL CANE",
    latinContextPre: "MATTEUS AUDIT",
    latinContextPost: "",
    correctForm: "CANEM",
    wrongForm: "CANIS",
    role: Role.OBJECT
  }
];