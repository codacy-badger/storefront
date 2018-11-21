<script>
export default {
  data: () => ({
    device: '',
    activeColor: '#474747',
    inactiveColor: '#fff',
    items: [
      {
        name: 'mobile',
        icon: {
          name: 'platformMobile',
          width: 10,
          height: 17
        }
      },
      {
        name: 'laptop',
        icon: {
          name: 'platformLaptop',
          width: 20.5,
          height: 13.7
        }
      },
      {
        name: 'desktop',
        icon: {
          name: 'platformDesktop',
          width: 16,
          height: 12.5
        }
      }
    ]
  }),
  methods: {
    setDevice (type) {
      this.device = type
      this.$emit('setDevice', 'is-' + this.device)
    }
  },
  mounted () {
    this.device = 'desktop'
  }
}
</script>

<template>
  <div class="b-menu-platforms">
    <button
      v-for="(item, index) in items"
      class="b-menu-platforms__button"
      tooltip-position="bottom"
      :key="index"
      :tooltip="`on ${item.name}`"
      :class="[
        `b-menu-platforms__button_${item.name}`,
        {'b-menu-platforms__button_active': device === item.name}
      ]"
      @click="setDevice(item.name)">
      <icon-base
        :name="item.icon.name"
        :width="item.icon.width"
        :height="item.icon.height"
        :color="device === item.name ? activeColor : inactiveColor">
      </icon-base>
    </button>
  </div>
</template>

<style lang="sass" scoped>
.b-menu-platforms
  width: 14rem
  height: 5.6rem
  background: #CDCDCD
  border-radius: 0.2rem
  border:
  padding: 1rem
  display: flex
  align-items: center
  justify-content: center
  &__button
    background-color: transparent
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
      background-color: rgba(255, 255, 255, 0.5)
    &_mobile
      border-right: none
      border-radius: 0.5rem 0 0 0.5rem
    &_laptop
    &_desktop
      border-left: none
      border-radius: 0 0.5rem 0.5rem 0

</style>
