const coffee = {
  state: {
    coffee: [],
    searchValue: '',
    sortValue: ''
  },
  mutations: {
    setCoffeeData(state, data) {
      state.coffee = data;
    },
    setSearchValue(state, value) {
      state.searchValue = value;
    },
    setSortValue(state, value) {
      console.log(value);
      state.sortValue = value;
    },
  },
  actions: {
    setCoffeeData({commit}, data) {
      console.log(data);
      commit('setCoffeeData', data);
    },
    setSearchValue({commit}, value) {
      console.log(value);
      commit('setSearchValue', value);
    },
    setSortValue({commit}, value) {
      console.log(value);
      commit('setSortValue', value);
    },
  },
  getters: {
    getCoffee(state) {
      return state.coffee
          // .filter(item => item.name
          //     .toLowerCase()
          //     .includes(state.searchValue.toLowerCase()))
          // .filter(item => item.country
          //     .toLowerCase()
          //     .includes(state.sortValue.toLowerCase()));
    },
    getProductById(state) {
      return (id) => {
        return state.coffee.find((card) => card.id === +id);
      };
    },
    getSearchValue(state) {
      return state.searchValue;
    }
  }
};

export default coffee;