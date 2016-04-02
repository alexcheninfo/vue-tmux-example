<template>
  <!-- tabindex needed to make the focusout work -->
  <ul
    tabindex="-1"
    :style="{top: menu.y + 'px', left: menu.x + 'px'}">
    <li v-for="menuItem in menuItems">
      <a @click="menuItem.action">{{ menuItem.name }}</a>
    </li>
  </ul>
</template>

<script>
import { closeMenu, openWindow } from '../vuex/actions'

export default {
  vuex: {
    getters: {
      menu: state => state.menu,
      selectedApp: state => state.selectedApp,
      windows: state => state.windows
    },
    actions: {
      closeMenu,
      openWindow
    }
  },

  data () {
    return {
      menuItems: [
        { name: 'Split up', action: () => { return this.split('up') } },
        { name: 'Split down', action: () => { return this.split('down') } },
        { name: 'Split left', action: () => { return this.split('left') } },
        { name: 'Split right', action: () => { return this.split('right') } }
      ]
    }
  },

  methods: {
    split (direction) {
      this.openWindow(this.selectedApp, direction)
      this.closeMenu()
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
