import { type Commit } from 'vuex'
import { searchGifData, getRandomGifData } from './search.service' 
import type { GifData, IState } from './types'

interface State extends IState {}

const state: State = {
  searchList: [],
  searchObject: null,
  searchText: ''
}

const mutations = {
  setDataList(state: State, data: GifData[]) {
    state.searchList = data;
  },
  setDataObject(state: State, data: GifData) {
    state.searchObject = data;
  },
  setSearchText(state: State, text: string) {
    state.searchText = text
  }
}

const actions = {
  async fetchDataList({ commit, state }: { commit: Commit; state: State }) {
    const apiKey = 'W5HfWlXXw0pSVTK70QSw0dpmemKJmsWh'
    const lang = 'en'
    const rating = 'pg'
    const offset = 0
    const limit = 16

    try {
      const data = await searchGifData(state.searchText, apiKey, lang, rating, offset, limit)
      commit('setDataList', data)
      const tag = "Not Found"
      if (data.length === 0) {
        const randomData = await getRandomGifData(apiKey,tag, rating );
        commit('setDataObject', randomData);
      }
    } catch (error) {
      // console.error('An error occurred while executing the request:', error)
    }
  }
}

const getters = {
  isSearchListEmpty: (state: State) => {
    return state.searchList.length === 0;
  }
}

export default {
  state,
  mutations,
  actions,
  getters 
}
