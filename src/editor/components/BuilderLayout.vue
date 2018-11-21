<template>
  <div class="builder-layout">
    <div class="builder-layout__top-bar">
    </div>
    <div class="builder-layout-content">
      <main class="builder-layout-content__main">
        <slot></slot>
      </main>
      <aside
        class="builder-layout-content__sidebar"
        :class="{'_expanded': isExpanded}">

        <BuilderSidebar
          :builder="builder"
          :isExpanded="isExpanded"
          @toggleSidebar="toggleSidebar"
          ></BuilderSidebar>
      </aside>
    </div>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex'
import BuilderSidebar from './BuilderSidebar.vue'

export default {
  name: 'BuilderLayout',

  props: {
    builder: {
      required: true
    }
  },

  components: {
    BuilderSidebar
  },

  computed: {
    ...mapState('Sidebar', ['isExpanded'])
  },

  methods: {
    ...mapActions('Sidebar', ['toggleSidebar'])
  }
}
</script>

<style lang="sass" scoped>
.builder-layout
  &__top-bar
    height: 64px

.builder-layout-content
  display: flex
  flex-wrap: wrap
  align-items: stretch

  &__sidebar
    order: 1
    width: 20px
    min-height: 50px
    position: relative
    z-index: 20
    transition: width 0.3s ease-in-out

    &._expanded
      width: 240px

  &__main
    order: 2
    flex-grow: 1
    min-height: 50px
    position: relative
    z-index: 10
</style>
