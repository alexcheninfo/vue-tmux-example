<template>
  <nav>
    <ul>
      <icon
        v-for="app in apps"
        :class="{'selected': selectedApp === app }"
        :app="app"
        @mouseover="setSelectedApp(app)"
        @mouseout="unsetSelectedApp()"
        @click="openWindow(app)"
        @contextmenu.prevent="openMenuStart(app, $event)">
      </icon>
      <menu
        v-el:menu
        v-show="isMenuVisible"
        :position="menuPosition"
        @focusout="closeMenu">
        <menu-item v-for="menuItem in menuItems" :menu-item="menuItem"></menu-item>
      </menu>
    </ul>
  </nav>
</template>

<script>
import Icon from '../components/Icon'
import Menu from '../components/Menu'
import MenuItem from '../components/MenuItem'
import {
  setSelectedApp,
  unsetSelectedApp,
  openMenu,
  closeMenu,
  setMenuCoors,
  openWindow,
  splitWindow
} from '../vuex/actions'

export default {
  vuex: {
    getters: {
      apps: state => state.apps,
      menuPosition: state => {
        return {
          x: state.menu.x,
          y: state.menu.y
        }
      },
      // menuItems: state => state.menuItems,
      isMenuVisible: state => state.isMenuVisible,
      selectedApp: state => state.selectedApp
    },
    actions: {
      setSelectedApp,
      unsetSelectedApp,
      openMenu,
      closeMenu,
      setMenuCoors,
      openWindow,
      splitWindow
    }
  },

  components: {
    Icon,
    Menu,
    MenuItem
  },

  computed: {
    menuItems () {
      return [
        { name: 'Split up', action: () => { return this.splitWindow(this.selectedApp, 'up') } },
        { name: 'Split down', action: () => { return this.splitWindow(this.selectedApp, 'down') } },
        { name: 'Split left', action: () => { return this.splitWindow(this.selectedApp, 'left') } },
        { name: 'Split right', action: () => { return this.splitWindow(this.selectedApp, 'right') } }
      ]
    }
  },

  methods: {
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
  background: $dark-gray
  padding: $padding-size
  position: absolute
  top: 0
  left: 0
  height: 100%
  box-shadow($shadow-size 0)

  ul {
    padding: 0
    list-style($style-type)
  }
}
</style>
