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
  </div>
</template>

<script>
export default {
  name: 'Sandbox'
}
</script>

<style lang="sass" scoped>

</style>
