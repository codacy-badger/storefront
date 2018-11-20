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
      val === 'is-desktop' ? this.colorDesktop = '#474747' : this.colorDesktop = '#fff'
      val === 'is-laptop' ? this.colorLaptop = '#474747' : this.colorLaptop = '#fff'
      val === 'is-mobile' ? this.colorMobile = '#474747' : this.colorMobile = '#fff'
    }
  },
  methods: {
    setDevice (type) {
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
  <div class="b-menu-platforms">
    <button class="b-menu-platforms__button b-menu-platforms__button_mobile"
            :class="{ 'b-menu-platforms__button_active': device === 'is-mobile' }"
            tooltip-position="bottom"
            tooltip="on mobile"
            @click="setDevice('is-mobile')">
      <icon-base :iconColor="`${colorMobile}`" width="10" height="17" name="mobile" viewBox="0 0 10 17">
        <icon-platform-mobile></icon-platform-mobile>
      </icon-base>
    </button>
    <button class="b-menu-platforms__button b-menu-platforms__button_laptop"
            :class="{ 'b-menu-platforms__button_active': device === 'is-laptop' }"
            tooltip-position="bottom"
            tooltip="on laptop"
            @click="setDevice('is-laptop')">
      <icon-base :iconColor="`${colorLaptop}`" width="20.5" height="13.7" name="laptop" viewBox="0 0 22 16">
        <icon-platform-laptop></icon-platform-laptop>
      </icon-base>
    </button>
    <button class="b-menu-platforms__button b-menu-platforms__button_desktop"
            :class="{ 'b-menu-platforms__button_active': device === 'is-desktop' }"
            tooltip-position="bottom"
            tooltip="on desktop"
            @click="setDevice('is-desktop')"
      >
      <icon-base :iconColor="`${colorDesktop}`" width="16" height="12.5" name="desktop" viewBox="0 0 16 14">
        <icon-platform-desktop></icon-platform-desktop>
      </icon-base>
    </button>
  </div>
</template>

<style lang="sass">
.b-menu-platforms
  width: 14rem
  height: 5.6rem
  background: #9E9E9E
  border-radius: 0.2rem
  border:
  padding: 1rem
  display: flex
  align-items: center
  justify-content: center
  &__button
    background: #9E9E9E
    border: none
    outline: none
    cursor: pointer
    padding: 0
    width: 4rem
    height: 4rem
    display: flex
    align-items: center
    justify-content: center
    border: #fff 0.1rem solid
    &_active
      background: rgba(255, 255, 255, 0.5)
    &_mobile
      border-right: none
      border-radius: 0.5rem 0 0 0.5rem
    &_laptop
    &_desktop
      border-left: none
      border-radius: 0 0.5rem 0.5rem 0

</style>
