import Vue from 'vue'
import Vuex from 'vuex'
import api from '@store/api'
import Sidebar from './Sidebar'

Vue.use(Vuex)

const state = {
  storefrontPreview: false,
  landings: [],
  currentLanding: {}
}

const getters = {
  storefrontPreview: (state) => {
    return state.storefrontPreview
  }
}

const actions = {
  /**
   * Get a list of saved landings
   * @param state
   * @param commit
   * @returns {*}
   */
  fetchLandings ({ state, commit }) {
    return api.getLandingsList()
      .then((presets) => {
        commit('updateLandings', presets)
        return presets
      })
  },

  /**
   * Get current landing data
   * @param state
   * @param commit
   * @param slug
   */
  getLandingData ({ state, commit }, slug) {
    return api.getLanding(slug)
      .then((landing) => {
        commit('updateCurrentLanding', landing)
        return landing
      })
  },

  /**
   * Save landing data
   * @param state
   * @param commit
   * @param data - JSON representation of the builder
   */
  saveLanding ({ state, commit }, data) {
    return api.saveLanding(state.currentLanding.slug, data)
      .then(() => {
        return commit('updateCurrentLanding', Object.assign(state.currentLanding, { saved: true }))
      })
  }
}

const mutations = {
  storefrontPreview (state, status) {
    state.storefrontPreview = status
  },

  updateLandings (state, data) {
    state.landings = data
  },

  updateCurrentLanding (state, data) {
    state.currentLanding = data
  }
}

const modules = {
  Sidebar
}

export default new Vuex.Store({
  state,
  getters,
  actions,
  mutations,
  modules
})
