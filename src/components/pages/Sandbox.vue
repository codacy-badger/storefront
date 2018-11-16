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
      :variant="buttons[0].variant"
      >
      Button
    </BaseButton>
    <BaseButton
      :variant="buttons[1].variant"
      :transparent="buttons[1].transparent"
      >
      Button
    </BaseButton>
    <BaseButton
      :variant="buttons[2].variant"
      :transparent="buttons[2].transparent"
      >
      Button
    </BaseButton>
    <hr>
  </div>
</template>

<script>
export default {
  name: 'Sandbox',
  data () {
    return {
      buttons: [
        { variant: 'black', transparent: false },
        { variant: 'gray', transparent: true },
        { variant: 'light-gray', transparent: false }
      ]
    }
  }
}
</script>

<style lang="sass" scoped>

</style>
