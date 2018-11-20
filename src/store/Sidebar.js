export default {
  state: {
    isExpanded: true
  },

  mutations: {
    isExpanded (state, value) {
      state.isExpanded = value
    }
  },

  actions: {
    toggleSidebar ({ state, commit }) {
      commit('isExpanded', !state.isExpanded)
    }
  },

  namespaced: true
}
