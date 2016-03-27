<template>
   <!-- tabindex needed to make the focusout work -->
  <ul tabindex="-1">
    <li><a href="#">Split up</a></li>
    <li><a href="#">Split down</a></li>
    <li><a href="#">Split left</a></li>
    <li><a href="#">Split right</a></li>
  </ul>
</template>

<style lang="stylus" scoped>
@import '../variables'
@import '../mixins'

ul {
  background: $dark-gray
  display: none
  padding: 0
  outline: none // remove focus glow
  overflow: hidden // to preserve border radius on hover
  position: absolute
  white-space: nowrap
  z-index: 9999
  list-style($style-type)
  border-radius($radius-size)
  box-shadow(0 $shadow-size, $shadow-blur, $shadow-color)

  li {
    a {
      display: block
      padding: 2px 10px
      /*border-radius($radius-size)*/

      &:hover {
        background: $dark-green
      }
    }
  }
}
</style>
