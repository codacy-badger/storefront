<script>
import VuseIcon from '../VuseIcon'

export default {
  components: {
    VuseIcon
  },
  props: {
    url: {
      type: String,
      required: true
    },
    target: {
      type: String,
      required: true
    },
    isBox: {
      type: Boolean,
      required: true
    }
  },
  data: () => ({
    u: null,
    t: true
  }),
  created () {
    this.u = this.url,
    this.t = this.getTarget(this.target)
  },
  methods: {
    /**
     * Set link
     * @param value {string}
    */
    setUrl () {
      let s

      s = this.setTarget(this.t)
      this.$emit('setUrl', { u: this.u, t: s })

      console.log('setLink')
    },
    getTarget (target) {
      return target === '_blank' ? true : false
    },
    setTarget (target) {
      return target ? '_blank' : '_top'
    },
    labelClick () {
      this.t = !this.t
      this.setUrl()
    }
  }
}
</script>

<template>
  <div>
    <div class="b-styler__bg_options_container">
      <div class="b-styler__bg_options__item flex flex_center">
        <div class="input-group is-rounded is-primary">
          <input class="input" type="text" @change="setUrl" placeholder="Enter link" v-model="u"/>
        </div>
      </div><!--/b-styler__bg_options__item-->
      <div v-if="false === isBox" class="b-styler__bg_options__item flex flex_center">
        <div class="input-checkbox">
          <input type="checkbox" @change="setUrl" placeholder="Enter link" v-model="t"/>
          <label class="b-control-set-url__label" @click="labelClick">open new window</label>
        </div>
      </div><!--/b-styler__bg_options__item-->
    </div><!--/b-styler__bg_options_container-->
  </div>
</template>

<style lang="sass">
@import '../../../../assets/sass/_colors.sass'

.b-control-set-url
  &__label
    color: $white
    -webkit-user-select: none
    cursor: pointer
</style>
