<template>
  <nav>
    <ul>
      <icon
        v-for="app in apps"
        :item="app"
        :selected="selectedApp"
        @on-click="openApp"
        @on-mouseover="setSelectedApp"
        @on-mouseout="unsetSelectedApp"
        @on-contextmenu="openMenuStart">
      </icon>
      <menu
        v-el:menu
        :show="isMenuVisible"
        :position="menuPosition"
        @on-focusout="closeMenu">
        <menu-item v-for="menuItem in menuItems" :menu-item="menuItem">
        </menu-item>
      </menu>
    </ul>
  </nav>
</template>

<script>
import Icon from '../components/Icon'
import Menu from '../components/Menu'
import MenuItem from '../components/MenuItem'
import {
  apps,
  menuPosition,
  isMenuVisible,
  selectedApp
} from '../vuex/getters'
import {
  setSelectedApp,
  unsetSelectedApp,
  openMenu,
  openApp,
  closeMenu,
  setMenuCoors
} from '../vuex/actions'

export default {
  vuex: {
    getters: {
      apps: apps,
      menuPosition: menuPosition,
      isMenuVisible: isMenuVisible,
      selectedApp: selectedApp
    },
    actions: {
      setSelectedApp,
      unsetSelectedApp,
      openMenu,
      openApp,
      closeMenu,
      setMenuCoors
    }
  },

  components: {
    Icon,
    Menu,
    MenuItem
  },

  data () {
    return {
      menuItems: [
        {
          name: 'Split up',
          action: () => { return this.openApp(this.selectedApp, 'up') }
        },
        {
          name: 'Split down',
          action: () => { return this.openApp(this.selectedApp, 'down') }
        },
        {
          name: 'Split left',
          action: () => { return this.openApp(this.selectedApp, 'left') }
        },
        {
          name: 'Split right',
          action: () => { return this.openApp(this.selectedApp, 'right') }
        }
      ]
    }
  },

  methods: {
    // TODO turn this into smaller functions or Vuex action
    openMenuStart (app, ev) {
      const menu = this.$els.menu
      const x = ev.clientX
      const y = ev.clientY
      this.setMenuCoors(x, y)
      this.openMenu()
      // $nextTick is needed to make focus() work
      this.$nextTick(() => {
        menu.focus()
      })
      this.setSelectedApp(app)
    }
  }
}
</script>

<style lang="stylus" scoped>
@import '../variables'
@import '../mixins'

nav {
  background: $alpha-purple
  border-right: 1px solid $alpha-white
  padding: $padding-size
  position: absolute
  top: 0
  left: 0
  height: 100%
  z-index: 9999
  /*box-shadow($shadow-size 0)*/

  ul {
    padding: 0
    list-style($style-type)
  }
}
</style>
