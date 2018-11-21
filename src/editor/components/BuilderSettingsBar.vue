<template>
  <div class="builder-settings-bar">
    <button class="builder-settings-bar__closer" @click="$emit('requestClose')">
      <!-- @todo move to icons -->
      <svg width="8" height="8" viewBox="0 0 8 8" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M6.82118 0.202253C7.09085 -0.0674173 7.52808 -0.0674171 7.79775 0.202253C8.06742 0.471924 8.06742 0.909146 7.79775 1.17882L1.17882 7.79775C0.909146 8.06742 0.471923 8.06742 0.202253 7.79775C-0.0674175 7.52808 -0.0674177 7.09085 0.202253 6.82118L6.82118 0.202253Z" fill="#888888" fill-opacity="0.5"/>
        <path d="M7.79775 6.82118C8.06742 7.09085 8.06742 7.52808 7.79775 7.79775C7.52808 8.06742 7.09085 8.06742 6.82118 7.79775L0.202254 1.17882C-0.0674168 0.909146 -0.0674165 0.471923 0.202254 0.202253C0.471925 -0.0674177 0.909147 -0.0674176 1.17882 0.202253L7.79775 6.82118Z" fill="#888888" fill-opacity="0.5"/>
      </svg>
    </button>
    <h6 class="builder-settings-bar__title">
      {{title}}
    </h6>
    <div class="builder-settings-bar__contents" v-if="title">
      <component :is="'BuilderSettingsBar' + title"></component>
    </div>
  </div>
</template>

<script>
import BuilderSettingsBarSection from './BuilderSettingsBarSection'
export default {
  name: 'BuilderSettingsBar',

  props: {
    title: {
      required: true,
      type: String
    }
  },

  components: {
    BuilderSettingsBarSection
  }
}
</script>

<style lang="sass" scoped>
.builder-settings-bar
  width: 240px
  background: #F5F5F5
  padding: 28px 32px

  &__title
    margin: 0 0 28px 0
    color: #272727
    font-size: 18px
    font-weight: bold

  &__closer
    position: absolute
    right: 10px
    top: 10px
    padding: 6px 10px;
    border: 0
    background: transparent
    cursor: pointer;

  &__contents

</style>
