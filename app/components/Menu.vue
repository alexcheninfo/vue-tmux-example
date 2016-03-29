<template>
  <!-- tabindex needed to make the focusout work -->
  <ul
    tabindex="-1"
    :style="{top: menu.y + 'px', left: menu.x + 'px'}">
    <li><a @click="split('up')">Split up</a></li>
    <li><a @click="split('down')">Split down</a></li>
    <li><a @click="split('left')">Split left</a></li>
    <li><a @click="split('right')">Split right</a></li>
  </ul>
</template>

<script>
import store from '../store'

export default {
  data () {
    return {
      state: store.state
    }
  },

  computed: {
    selectedApp () {
      return this.state.selectedApp
    },

    menu () {
      return this.state.menu
    }
  },

  methods: {
    split (direction) {
      store.actions.openWindow(this.selectedApp)
      store.actions.closeMenu()
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
      padding: 2px 10px

      &:hover {
        background: $dark-green
      }
    }
  }
}
</style>
