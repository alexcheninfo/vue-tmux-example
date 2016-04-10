<template>
  <nav>
    <ul>
      <icon
        v-for="app in apps"
        @event-name="openApp"
        :item="app"
        :selected="selectedApp"
        :actions="appActions">
      </icon>
      <menu
        v-el:menu
        :show="isMenuVisible"
        :position="menuPosition"
        :actions="{ focusout: closeMenu }">
        <menu-item v-for="menuItem in menuItems" :menu-item="menuItem">
        </menu-item>
      </menu>
    </ul>
  </nav>
  <pre>{{ openApps | json }}</pre>
</template>

<script>
import Icon from '../components/Icon'
import Menu from '../components/Menu'
import MenuItem from '../components/MenuItem'
import {
  setSelectedApp,
  unsetSelectedApp,
  openMenu,
  openApp,
  closeMenu,
  setMenuCoors,
  splitApp
} from '../vuex/actions'

export default {
  vuex: {
    getters: {
      apps: state => state.apps,
      openApps: state => {
        return state.apps.find(app => app.state === 'open')
      },
      activeApps: state => state.activeApps,
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
      openApp,
      closeMenu,
      setMenuCoors,
      splitApp
    }
  },

  components: {
    Icon,
    Menu,
    MenuItem
  },

  data () {
    return {
      appActions: {
        mouseover: this.setSelectedApp,
        mouseout: this.unsetSelectedApp,
        contextmenu: this.openMenuStart
      },
      menuItems: [
        {
          name: 'Split up',
          action: () => { return this.splitApp(this.selectedApp, 'up') }
        },
        {
          name: 'Split down',
          action: () => { return this.splitApp(this.selectedApp, 'down') }
        },
        {
          name: 'Split left',
          action: () => { return this.splitApp(this.selectedApp, 'left') }
        },
        {
          name: 'Split right',
          action: () => { return this.splitApp(this.selectedApp, 'right') }
        }
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
