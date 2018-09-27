<script>
import { mapActions, mapState } from 'vuex'

export default {
  computed: {
    ...mapState([
      'landings'
    ])
  },
  methods: {
    ...mapActions([
      'fetchLandings'
    ]),
    openLanding (item) {
      // add log
      this.$router.push({ path: `/editor/${item.slug}` })
    }
  },
  created () {
    this.fetchLandings()
  }
}
</script>

<template>
  <div class="b-page__content dashboard">
      <figure v-for="(item, index) in landings" :key="index" class="dashboard__item" @click="openLanding(item)">
        {{item.slug}}
      </figure>
  </div>
</template>

<style lang="sass">
.dashboard
  width: 1000px
  padding: 40px
  display: flex
  font-family: Helvetica Neue, Helvetica, Arial
  &__item
    width: 200px
    height: 100px
    display: flex
    cursor: pointer
    background: $dark
    color: $green
    font-size: 30px
    justify-content: center
    align-items: center
    margin: 10px
    &:hover
      background: $color-blue-bg
</style>
