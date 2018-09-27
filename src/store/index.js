import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const state = {
  storefrontPreview: false,
  landings: []
}

const getters = {
  storefrontPreview: (state) => {
    return state.storefrontPreview
  }
}

const actions = {
  /**
   * === Place fetch API method here ===
   * @param state
   * @param commit
   * @returns {*}
   */
  fetchLandings ({ state, commit }) {
    const presets = [
      {
        slug: 'Layout1',
        theme: {
          name: 'Layout 1',
          title: 'Awesome title',
          sections: ['Layout1']
        }
      },
      {
        slug: 'Layout2',
        theme: {
          name: 'Layout 2',
          sections: ['Layout2', 'Gallery1']
        }
      },
      {
        slug: 'Gallery1',
        theme: {
          name: 'Gallery 1',
          sections: ['Gallery1']
        }
      },
      {
        slug: 'Gallery2',
        theme: {
          name: 'Gallery 2',
          sections: ['Gallery2']
        }
      },
      {
        slug: 'Buttons',
        theme: {
          name: 'Buttons',
          sections: ['Buttons']
        }
      }
    ]
    return commit('updateLandings', presets)
  }
}

const mutations = {
  storefrontPreview (state, status) {
    state.storefrontPreview = status
  },

  updateLandings (state, data) {
    state.landings = data
  }
}

export default new Vuex.Store({
  state,
  getters,
  actions,
  mutations
})
