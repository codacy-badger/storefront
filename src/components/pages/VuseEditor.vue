<template>
    <VuseBuilder @saved="onSave" @preview="onPreview" />
</template>

<script>
import Vue from 'vue'
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

Vuse.mix({
  components: {
    Uploader
  }
})

Vuse.component(section1)
Vuse.component(section2)
Vuse.component(newsletter)
Vuse.component(hero1)
Vuse.component(hero2)
Vuse.component(social1)
Vuse.component(social2)
Vuse.component(social3)
Vuse.component(social4)
Vuse.component(layout1)
Vuse.component(layout2)
Vuse.component(gallery1)
Vuse.component(gallery2)

Vuse.use(pwa)

Vue.use(Vuse, {
  css: 'css/app.css',
  js: 'js/cjs.js',
  themes: [
    {
      name: 'Layout 1',
      sections: [layout1]
    },
    {
      name: 'Layout 2',
      sections: [layout2, gallery1]
    },
    {
      name: 'Gallery 1',
      sections: [gallery1]
    },
    {
      name: 'Gallery 2',
      sections: [gallery2]
    }
  ]
})

export default {
  methods: {
    onSave (builder) {
      builder.export('pwa')
    },
    onPreview: function (builder) {
      builder.export('preview-devices')
    }
  }
}
</script>
