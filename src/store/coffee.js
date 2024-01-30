const coffee = {
  state: {
    coffee: [
      
    ],
  },
  mutations: {
    setCoffeeData(state, data) {
      state.coffee = data;
    }
  },
  actions: {
    setCoffeeData({commit}, data) {
      console.log(data);
      commit('setCoffeeData', data);
    }
  },
  getters: {
    getCoffee(state) {
      return state.coffee;
    },
    getProductById(state) {
      return (id) => {
        return state.coffee.find((card) => card.id === +id);
      };
    }
  }
}

export default coffee;