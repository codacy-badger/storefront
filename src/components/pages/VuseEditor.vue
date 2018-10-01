<template>
    <VuseBuilder @saved="onSave" @preview="onPreview" />
</template>

<script>
import Vue from 'vue'
import { mapActions, mapState } from 'vuex'

import Vuse from '@plugins/Vuse'
import pwa from '@plugins/Vuse/plugins/pwa'
import Uploader from '@plugins/Vuse/plugins/Uploader.vue'

import section1 from '@components/landings/sections/section1.vue'
import section2 from '@components/landings/sections/section2.vue'
import newsletter from '@components/landings/forms/newsletter.vue'
import hero1 from '@components/landings/hero/hero1.vue'
import hero2 from '@components/landings/hero/hero2.vue'
import social1 from '@components/landings/social/social1.vue'
import social2 from '@components/landings/social/social2.vue'
import social3 from '@components/landings/social/social3.vue'
import social4 from '@components/landings/social/social4.vue'
import layout1 from '@components/landings/layouts/layout1.vue'
import layout2 from '@components/landings/layouts/layout2.vue'
import gallery1 from '@components/landings/galleries/gallery1.vue'
import gallery2 from '@components/landings/galleries/gallery2.vue'
import gallery3 from '@components/landings/galleries/gallery3.vue'
import button1 from '@components/landings/elements/button1'
import button2 from '@components/landings/elements/button2'
import buttons from '@components/landings/elements/buttons'

Vuse.mix({
  components: {
    Uploader
  }
})

Vuse.component('Section1', section1)
Vuse.component('Section2', section2)
Vuse.component('Newsletter', newsletter)
Vuse.component('Hero1', hero1)
Vuse.component('Hero2', hero2)
Vuse.component('Social1', social1)
Vuse.component('Social2', social2)
Vuse.component('Social3', social3)
Vuse.component('Social4', social4)
Vuse.component('Layout1', layout1)
Vuse.component('Layout2', layout2)
Vuse.component('Gallery1', gallery1)
Vuse.component('Gallery2', gallery2)
Vuse.component('Gallery3', gallery3)
Vuse.component('Button1', button1)
Vuse.component('Button2', button2)
Vuse.component('Buttons', buttons)

Vuse.use(pwa)

export default {
  methods: {
    ...mapActions([
      'fetchLandings'
    ]),
    onSave (builder) {
      builder.export('pwa')
    },
    onPreview: function (builder) {
      builder.export('preview-devices')
    }
  },
  created () {
    if (!this.landings.length) this.fetchLandings()

    const themes = this.landings.map((item) => item.theme)

    Vue.use(Vuse, {
      js: 'js/cjs.js',
      themes: themes
    })
  },
  computed: {
    ...mapState([
      'landings'
    ])
  }
}
</script>
