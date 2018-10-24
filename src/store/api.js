/**
 * Mock for API
 */
import axios from 'axios'

export default {
  getLandingsList () {
    return new Promise((resolve) => {
      resolve([
        {
          slug: 'Landing1',
          theme: {
            name: 'Layout 1',
            title: 'Awesome title',
            sections: ['Logo', 'Delimiter', 'Title1', 'Description', 'Button1', 'Delimiter', 'Title1', 'Description', 'Gallery1', 'Button1', 'Delimiter', 'Title1', 'Gallery2', 'Button1', 'Delimiter', 'Footer']
          }
        },
        {
          slug: 'Landing2',
          theme: {
            name: 'Layout 2',
            sections: ['Logo', 'Title1', 'Description', 'Button1', 'Available', 'Delimiter', 'Gallery2', 'Delimiter', 'Title1', 'Description', 'Picture', 'Description', 'Delimiter', 'Gallery3', 'Delimiter', 'System', 'Logo', 'Button1', 'Title1', 'Social', 'Logo', 'Restrictions']
          }
        }
      ])
    })
  },

  saveLanding (slug, data) {
    return new Promise((resolve) => {
      localStorage.removeItem(slug)
      localStorage.setItem(slug, data)
      resolve(true)
    })
  },

  getLanding (slug) {
    return new Promise((resolve) => {
      let landing = {}

      if (localStorage.getItem(slug) !== null) {
        landing = localStorage.getItem(slug)
        resolve(JSON.parse(landing))
      } else {
        return this.getLandingsList().then((data) => {
          resolve(data.filter(item => item.slug === slug)[0])
        })
      }
    })
  },

  /**
   * upload image to gamenet cdn
   * @param request FormData
   * @returns {Promise.<TResult>|Promise<any>}
   */
  uploadFile (request) {
    return axios.post('http://images.stg.gamenet.ru/restapi', request)
      .then(function (response) {
        if (!response.hasOwnProperty('data') || !response['data'].hasOwnProperty('response') ||
          !response['data']['response'].hasOwnProperty('data') ||
          !Array.isArray(response['data']['response']['data'])) {
          return
        }

        return response['data']['response']['data'][0]
      })
  }

}
