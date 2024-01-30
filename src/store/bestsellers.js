const bestsellers = {
  state: {
    bestsellers: [
      
    ],
  },
  mutations: {
    setBestsellersData(state, data) {
      state.bestsellers = data;
    }
  },
  actions: {
    setBestsellersData({commit}, data) {
      console.log(data);
      commit('setBestsellersData', data);
    }
  },
  getters: {
    getBestsellers(state) {
      return state.bestsellers;
    }
  }
};

export default bestsellers;