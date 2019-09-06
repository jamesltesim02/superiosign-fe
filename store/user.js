export const state = () => ({
  isLoged: false,
  user: null,
})

export const mutations = {
  setLogedUser(state, user) {
    state.isLoged = true;
    state.user = user;
  }
}
