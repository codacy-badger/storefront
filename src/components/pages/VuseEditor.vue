<template>
    <VuseBuilder v-bind:show-intro="showIntro" @saved="onDownload" @preview="onPreview" @save="onSave" />
</template>

<script>
import Vue from 'vue'
import { mapState, mapActions } from 'vuex'
import Vuse from '@plugins/Vuse'
import pwa from '@plugins/Vuse/plugins/pwa'
import Uploader from '@plugins/Vuse/plugins/Uploader.vue'

import gallery1 from '@components/landings/galleries/gallery1.vue'
import gallery2 from '@components/landings/galleries/gallery2.vue'
import gallery3 from '@components/landings/galleries/gallery3.vue'
import button1 from '@components/landings/buttons/button1'
import button5 from '@components/landings/buttons/button5'
import button6 from '@components/landings/buttons/button6'
import title1 from '@components/landings/titles/title1'
import title2 from '@components/landings/titles/title2'
import delimiter from '@components/landings/delimiters/delimiter'
import logo from '@components/landings/logos/logo'
import footer from '@components/landings/footers/footer'

Vuse.mix({
  components: {
    Uploader
  }
})

Vuse.component('Gallery1', gallery1)
Vuse.component('Gallery2', gallery2)
Vuse.component('Gallery3', gallery3)
Vuse.component('Button1', button1)
Vuse.component('Button5', button5)
Vuse.component('Button6', button6)
Vuse.component('Footer', footer)
Vuse.component('Title1', title1)
Vuse.component('Title2', title2)
Vuse.component('Title2', title2)
Vuse.component('Delimiter', delimiter)
Vuse.component('Logo', logo)

Vuse.use(pwa)

export default {
  methods: {
    ...mapActions([
      'saveLanding'
    ]),
    onDownload (builder) {
      builder.export('pwa')
    },
    onPreview: function (builder) {
      builder.export('preview')
    },
    onSave (builder) {
      this.saveLanding(builder.export('json'))
    }
  },
  created () {
    let themes = []

    Vue.use(Vuse, {
      js: './../js/cjs.js',
      themes: themes
    })
  },
  computed: {
    ...mapState([
      'currentLanding'
    ]),
    // TODO: delete this when CRUD UI is complete
    showIntro: function () {
      return this.$route.params.slug === 'new'
    }
  }
}
</script>
