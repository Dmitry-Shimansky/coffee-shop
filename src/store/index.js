import Vue from 'vue';
import Vuex from 'vuex';

import links from './links';
import bestesellers from './bestsellers';
import goods from './goods';
import coffee from './coffee';

Vue.use(Vuex);

const store = new Vuex.Store({
  modules: {
    links, bestesellers, goods, coffee
  }
});

export default store;