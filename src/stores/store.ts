import { createStore } from 'vuex';
import searchModule from '@/stores/modules/searchModule/searchModule';
import getByIdModule from '@/stores/modules/getByIdModule/getByIdModule';

export const store = createStore({
  modules: {
    searchList: searchModule,
    getById: getByIdModule,
  },
});
