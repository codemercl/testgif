import { wordsConfig } from '@/utils/wordsConfig';

export function getRandomWord() {
  const randomIndex = Math.floor(Math.random() * wordsConfig.length);
  return wordsConfig[randomIndex];
}