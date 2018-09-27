<template>
    <div class="artboard" id="artboard">
        <component v-for="section in $builder.sections" :is="section.name" :key="section.id" :id="section.id"></component>
    </div>
</template>

<script>
export default {
  name: 'VuseRenderer',
  props: {
    data: {
      type: Object,
      default: () => ({
        title: '',
        sections: []
      })
    }
  },
  created () {
    this.$builder.set(this.data)
    this.$builder.isEditing = false
    this.$builder.isRendered = true
  }
}
</script>
