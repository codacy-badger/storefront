<template>
    <VuseBuilder v-bind:show-intro="showIntro" @saved="onSave" @preview="onPreview" />
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
import button3 from '@components/landings/elements/button3'
import button4 from '@components/landings/elements/button4'
import button5 from '@components/landings/elements/button5'
import button6 from '@components/landings/elements/button6'
import title1 from '@components/landings/titles/title1'
import title2 from '@components/landings/titles/title2'
import delimiter from '@components/landings/elements/delimiter'
import logo from '@components/landings/elements/logo'
import footer from '@components/landings/elements/footer'

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
Vuse.component('Button3', button3)
Vuse.component('Button4', button4)
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
      js: './../js/cjs.js',
      themes: themes
    })
  },
  computed: {
    ...mapState([
      'landings'
    ]),
    // TODO: delete this when CRUD UI is complete
    showIntro: function () {
      return this.$route.params.slug === 'new'
    }
  }
}
</script>
