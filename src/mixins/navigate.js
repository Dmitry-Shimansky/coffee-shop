export const navigate = {
  methods: {
    navigate(id) {
      console.log(id);
      this.$router.push({name: this.name, params: {id: id}});
    }
  }
};