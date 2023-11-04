import { ref, onMounted, watch } from 'vue'
import { useStore } from 'vuex'
import { getRandomWord } from '../utils/randomWord'
import { searchGifData } from '@/stores/modules/searchModule/search.service'
import type { GifData } from '@/stores/modules/searchModule/types'

export function useDataList() {
  const store = useStore()
  const searchList = ref<GifData[]>([])

  watch(
    () => store.state.searchList.searchList,
    (newDataList: GifData[]) => {
      searchList.value = newDataList
    }
  )

  onMounted(async () => {
    const apiKey = 'W5HfWlXXw0pSVTK70QSw0dpmemKJmsWh'
    const lang = 'en'
    const rating = 'pg'
    const offset = 0
    const limit = 25

      try {
        const searchText = getRandomWord();
        const data = await searchGifData(searchText, apiKey, lang, rating, offset, limit);
        store.commit('setDataList', data);
      } catch (error) {
        // console.error('Error executing request:', error);
      }
    });

  return {
    searchList
  }
}
