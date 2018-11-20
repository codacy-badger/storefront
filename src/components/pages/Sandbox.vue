<template>
  <div>
    <h1>A page for components preview and testing</h1>
    <hr>
    BaseDropdown <button @click="ddOpen = !ddOpen">toggle</button>
    <div style="width: 246px;">
      <BaseDropdown :isOpened="ddOpen">
        <BaseDropdownItem>Section</BaseDropdownItem>
        <BaseDropdownItem :isSelected="true">Gallery</BaseDropdownItem>
        <BaseDropdownItem>Cover</BaseDropdownItem>
        <BaseDropdownItem>Image</BaseDropdownItem>
        <BaseDropdownItem>Form</BaseDropdownItem>
        <BaseDropdownItem>Image</BaseDropdownItem>
      </BaseDropdown>
    </div>
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
    <div class="icons">
      <icon-base name="alignLeft" color="red"></icon-base>
      <icon-base name="alignRight" color="green"></icon-base>
      <icon-base name="alignCenter" color="magenta"></icon-base>
      <icon-base name="arrowDropDown" width="6" color="black"></icon-base>
      <icon-base name="close"></icon-base>
      <icon-base name="colorFill"></icon-base>
      <icon-base name="drag"></icon-base>
      <icon-base name="equalizer"></icon-base>
      <icon-base name="fontBold"></icon-base>
      <icon-base name="fontFamily"></icon-base>
      <icon-base name="fontItalic"></icon-base>
      <icon-base name="fontSize"></icon-base>
      <icon-base name="fontUnderline"></icon-base>
      <icon-base name="menu"></icon-base>
      <icon-base name="platformDesktop"></icon-base>
      <icon-base name="platformLaptop"></icon-base>
      <icon-base name="platformMobile"></icon-base>
      <icon-base name="plus"></icon-base>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Sandbox',

  data () {
    return {
      ddOpen: true
    }
  }
}
</script>

<style lang="sass" scoped>
.icons
  width: 700px
  display: flex
  align-items: center
  justify-content: space-between
  margin: 1rem
</style>
