import type { GifData } from '@/stores/modules/searchModule/types';
import { onBeforeUnmount, onMounted } from 'vue';

type SearchGifDataFunction = (
  searchText: string,
  apiKey: string,
  lang: string,
  rating: string,
  offset: number,
  limit: number
) => Promise<GifData[]>;

type GetRandomWordFunction = () => string;

export function useScroll(
  searchList: { value: GifData[] },
  searchGifData: SearchGifDataFunction,
  getRandomWord: GetRandomWordFunction
): void {
  const handleScroll = async () => {
    const scrollY = window.scrollY;
    const windowHeight = window.innerHeight;
    const documentHeight = document.documentElement.scrollHeight;

    if (scrollY + windowHeight >= documentHeight) {
      console.log('Достигнут конец страницы');

      const apiKey = 'W5HfWlXXw0pSVTK70QSw0dpmemKJmsWh';
      const lang = 'en';
      const rating = 'pg';
      const offset = searchList.value.length;
      const limit = 25;

      try {
        const searchText = getRandomWord();
        const data = await searchGifData(searchText, apiKey, lang, rating, offset, limit);
        searchList?.value?.push(...data);
      } catch (error) {
        console.error('Error executing request:', error);
      }
    }
  };

  onMounted(() => {
    window.addEventListener('scroll', handleScroll);
  });

  onBeforeUnmount(() => {
    window.removeEventListener('scroll', handleScroll);
  });
}