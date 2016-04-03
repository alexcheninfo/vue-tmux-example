<template>
  <li>
    <a><img :src="app.icon"></a>
  </li>
</template>

<script>
export default {
  props: {
    app: {
      type: Object,
      required: true
    }
  }
}
</script>

<style lang="stylus" scoped>
@import '../variables'
@import '../mixins'

li {
  display: block
  margin: 0 0 8px
  text-align: center
  position: relative
  transition($transition-duration)
  /*bob-hover($transition-position, 0)*/

  &.selected {
    -webkit-transform: translate($transition-position)
    transform: translate($transition-position)
  }

  &:last-child {
    margin: 0
  }

  a {
    display: block
  }

  img {
    filter-drop-shadow(0 $shadow-size)
  }
}
</style>
