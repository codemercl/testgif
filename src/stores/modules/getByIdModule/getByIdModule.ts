import { type Commit } from 'vuex'
import type { CartData, IState } from './types'
import { searchGifData } from './search.service'

interface State extends IState {}

const state: State = {
  getById: null,
  paramId: ""
}

const mutations = {
  setDataCart(state: State, data: CartData) {
    state.getById = data
  },
  setParamId(state: State, text: string) {
    state.paramId = text
  }
}

const actions = {
  async fetchDataCart({ commit, state }: { commit: Commit; state: State }) {
    const apiKey = 'W5HfWlXXw0pSVTK70QSw0dpmemKJmsWh'
    const rating = 'g'

    try {
      const data = await searchGifData( apiKey, rating, state.paramId)
      commit('setDataCart', data)
    } catch (error) {
      // ('An error occurred while executing the request:', error)
    }
  }
}

export default {
  state,
  mutations,
  actions
}