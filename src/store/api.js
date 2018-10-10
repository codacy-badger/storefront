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
            sections: ['Logo', 'Delimiter', 'Title1', 'Title1', 'Button1', 'Delimiter', 'Title1', 'Title1', 'Gallery1', 'Button1', 'Delimiter', 'Title1', 'Gallery2', 'Button1', 'Footer']
          }
        },
        {
          slug: 'Layout2',
          theme: {
            name: 'Layout 2',
            sections: ['Logo', 'Delimiter', 'Title1', 'Title1', 'Button1']
          }
        },
        {
          slug: 'Gallery1',
          theme: {
            name: 'Gallery 1',
            sections: ['Title1', 'Title1', 'Gallery1', 'Button1']
          }
        },
        {
          slug: 'Gallery2',
          theme: {
            name: 'Gallery 2',
            sections: ['Title1', 'Title1', 'Gallery2', 'Button1']
          }
        },
        {
          slug: 'Gallery3',
          theme: {
            name: 'Gallery 3',
            sections: ['Title1', 'Title1', 'Gallery3', 'Button1']
          }
        },
        {
          slug: 'Footer',
          theme: {
            name: 'Footer',
            sections: ['Footer']
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
  }
}
