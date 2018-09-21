<template>
    <div class="uploader">
        <img v-bind:src="src" />
        <form>
            <input
                class="uploader-input"
                type="file"
                ref="uploader"
                @change="uploadImg"
                v-if="$builder.isEditing && mode === 'input'" />
        </form>
    </div>
</template>

<script>
export default {
  name: 'Uploader',
  inject: ['$builder', '$section'],
  props: {
    path: {
      type: String,
      required: true
    },
    mode: {
      default: 'input',
      type: String
    }
  },
  data: () => ({
    src: ''
  }),
  created () {
    this.src = this.$section.get(this.path)
  },
  methods: {
    uploadImg: function (event) {
      let file = event.target.files || event.dataTransfer.files
      let self = this

      if (!file) {
        return
      }

      let request = new FormData()
      let $form = window.$(event.target).parent()

      request.append('file[]', file[0])
      request.append('method', 'storefront.upload')
      request.append('format', 'json')

      $form[0].reset()

      window.axios.post('http://images.stg.gamenet.ru/restapi', request)
        .then(function (response) {
          if (!response.hasOwnProperty('data') || !response['data'].hasOwnProperty('response') ||
                    !response['data']['response'].hasOwnProperty('data') ||
                    !Array.isArray(response['data']['response']['data'])) {
            return
          }

          const data = response['data']['response']['data'][0]

          self.$section.set(self.path, data['src'])
          self.src = data['src']
        }).catch(function (e) {
          console.warn(e)
        })
    }
  }
}
</script>
