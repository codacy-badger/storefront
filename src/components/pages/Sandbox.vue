<template>
  <div>
    <h1>A page for components preview and testing</h1>
    <hr>

    BaseLoading
    <BaseLoading/>
    <hr>

    BaseTimeout
    <BaseTimeout/>
    <hr>

    BaseButton
    <BaseButton
      :variant="'black'"
      >
      Button
    </BaseButton>
    <BaseButton
      :variant="'gray'"
      :transparent="true"
      >
      Button
    </BaseButton>
    <BaseButton
      :variant="'light-gray'"
      :transparent="false"
      >
      Button
    </BaseButton>
    <hr>
    Icons
    <div class="b-icons">
      <icon-base name="left" iconColor="red"><icon-align-left></icon-align-left></icon-base>
      <icon-base name="center" iconColor="green"><icon-align-center></icon-align-center></icon-base>
      <icon-base name="right" iconColor="magenta"><icon-align-right></icon-align-right></icon-base>
      <icon-base name="down" viewBox="0 0 6 4" width="6"><icon-arrow-drop-down></icon-arrow-drop-down></icon-base>
      <icon-base name="close" viewBox="0 0 8 8"><icon-close></icon-close></icon-base>
      <icon-base name="fill" viewBox="0 0 15 18"><icon-color-fill></icon-color-fill></icon-base>
      <icon-base name="drag" viewBox="0 0 3 21"><icon-drag></icon-drag></icon-base>
      <icon-base name="equalizer" viewBox="0 0 18 16"><icon-equalizer></icon-equalizer></icon-base>
      <icon-base name="bold" viewBox="0 0 11 14"><icon-font-bold></icon-font-bold></icon-base>
      <icon-base name="family" viewBox="0 0 15 17"><icon-font-family></icon-font-family></icon-base>
      <icon-base name="italic" viewBox="0 0 12 14"><icon-font-italic></icon-font-italic></icon-base>
      <icon-base name="size" viewBox="0 0 20 17"><icon-font-size></icon-font-size></icon-base>
      <icon-base name="underline" viewBox="0 0 12 15"><icon-font-underline></icon-font-underline></icon-base>
      <icon-base name="menu" viewBox="0 0 16 16"><icon-menu></icon-menu></icon-base>
      <icon-base name="plus" viewBox="0 0 16 16"><icon-plus></icon-plus></icon-base>
      <icon-base name="desktop" viewBox="0 0 16 14"><icon-platform-desktop></icon-platform-desktop></icon-base>
      <icon-base name="laptop" viewBox="0 0 22 16"><icon-platform-laptop></icon-platform-laptop></icon-base>
      <icon-base name="mobile" viewBox="0 0 10 14"><icon-platform-mobile></icon-platform-mobile></icon-base>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Sandbox'
}
</script>

<style lang="sass" scoped>
.b-icons
  width: 70rem
  display: flex
  align-items: center
  justify-content: space-between
  margin: 1rem
</style>
