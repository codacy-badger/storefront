<template>
    <VuseBuilder v-bind:show-intro="showIntro" @saved="onDownload" @preview="onPreview" @save="onSave" />
</template>

<script>
import Vue from 'vue'
import { mapState, mapActions } from 'vuex'
import Vuse from '@editor/vuse'
import pwa from '@editor/plugins/pwa'
import Uploader from '@editor/plugins/Uploader.vue'

import gallery1 from '@components/landings/galleries/gallery1.vue'
import gallery2 from '@components/landings/galleries/gallery2.vue'
import gallery3 from '@components/landings/galleries/gallery3.vue'
import button1 from '@components/landings/buttons/button1'
import button5 from '@components/landings/buttons/button5'
import button6 from '@components/landings/buttons/button6'
import title1 from '@components/landings/texts/title1'
import delimiter from '@components/landings/delimiters/delimiter'
import logo from '@components/landings/logos/logo'
import footer from '@components/landings/footers/footer'
import system from '@components/landings/elements/system'
import social from '@components/landings/elements/social'
import available from '@components/landings/elements/available'
import restrictions from '@components/landings/elements/restrictions'
import image from '@components/landings/images/image'
import description from '@components/landings/texts/description'
import bob from '@components/landings/test/slots'
import bbb from '@components/landings/test/bbb'
import Sandbox from '@components/landings/test/sandbox'

Vuse.mix({
  components: {
    Uploader,
    Sandbox,
    bbb
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
Vuse.component('Delimiter', delimiter)
Vuse.component('Logo', logo)
Vuse.component('System', system)
Vuse.component('Social', social)
Vuse.component('Available', available)
Vuse.component('Restrictions', restrictions)
Vuse.component('Picture', image)
Vuse.component('Description', description)
Vuse.component('Bob', bob)

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
