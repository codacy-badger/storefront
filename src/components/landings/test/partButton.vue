<template>
  <a class="ptah-button">Action</a>
</template>

<script>
export default {
  name: 'PartButton'
}
</script>

<style lang="sass">
  .ptah-button
    position: relative
    font-size: 3rem
    font-family: 'Open Sans'
    line-height: 1
    width: 20rem
    min-width: 10rem
    min-height: 5rem
    margin: 2rem
    color: #000
    background-color: #a7a1a1
    border: transparent solid  0.2rem
    display: flex
    align-items: center
    justify-content: center
    flex-direction: column
    user-select: none
    cursor: pointer
    &:hover
      filter: brightness(120%)
</style>
