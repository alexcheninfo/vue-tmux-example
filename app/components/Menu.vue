<template>
  <!-- tabindex needed to make the focusout work -->
  <ul
    tabindex="-1"
    :style="{top: y + 'px', left: x + 'px'}">
    <li v-for="menuItem in menuItems">
      <a @click="menuItem.action">{{ menuItem.name }}</a>
    </li>
  </ul>
</template>

<script>
export default {
  props: {
    x: {
      type: Number,
      default: 0
    },
    y: {
      type: Number,
      default: 0
    },
    menuItems: {
      type: Array,
      required: true
    }
  }
}
</script>

<style lang="stylus" scoped>
@import '../variables'
@import '../mixins'

ul {
  background: $dark-gray
  padding: 0
  outline: none // to remove focus glow
  overflow: hidden // to preserve border radius on hover
  position: absolute
  white-space: nowrap
  z-index: 9999
  list-style($style-type)
  border-radius($radius-size)
  box-shadow(0 $shadow-size)

  li {
    a {
      display: block
      padding: 2px 15px

      &:hover {
        background: $dark-green
      }
    }
  }
}
</style>
