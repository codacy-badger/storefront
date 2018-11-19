<script>
export default {
  data: () => ({
    device: null,
    colorDesktop: null,
    colorLaptop: null,
    colorMobile: null
  }),
  watch: {
    device: function (val) {
      console.log(val)
      val === 'is-desktop' ? this.colorDesktop = '#fff' : this.colorDesktop = '#000'
      val === 'is-laptop' ? this.colorLaptop = '#fff' : this.colorLaptop = '#000'
      val === 'is-mobile' ? this.colorMobile = '#fff' : this.colorMobile = '#000'
    }
  },
  methods: {
    setDevice (type) {
      console.log(type)
      this.device = type
      this.$emit('setDevice', this.device)
    }
  },
  mounted () {
    this.device = 'is-desktop'
  }
}
</script>

<template>
  <section class="b-menu-platforms">
    <button class="b-menu-platforms__button"
            tooltip-position="top"
            tooltip="on desktop"
            @click="setDevice('is-desktop')"
      >
      <icon-base :iconColor="`${colorDesktop}`" name="desktop" viewBox="0 0 16 14">
        <icon-platform-desktop></icon-platform-desktop>
      </icon-base>
    </button>
    <button class="b-menu-platforms__button"
            tooltip-position="top"
            tooltip="on laptop"
            @click="setDevice('is-laptop')">
      <icon-base :iconColor="`${colorLaptop}`" name="laptop" viewBox="0 0 22 16">
        <icon-platform-laptop></icon-platform-laptop>
      </icon-base>
    </button>
    <button class="b-menu-platforms__button"
            tooltip-position="top"
            tooltip="on mobile"
            @click="setDevice('is-mobile')">
      <icon-base :iconColor="`${colorMobile}`" name="mobile" viewBox="0 0 10 14">
        <icon-platform-mobile></icon-platform-mobile>
      </icon-base>
    </button>
  </section>
</template>

<style lang="sass">
.b-menu-platforms

</style>
