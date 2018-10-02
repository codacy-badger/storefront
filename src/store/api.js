/**
 * Mock for API
 */

export default {
  getLandingsList () {
    return new Promise((resolve) => {
      resolve([
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
      ])
    })
  },

  saveLanding (slug, data) {
    return new Promise((resolve) => {
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
  }
}
