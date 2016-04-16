<template>
  <section :style="{ backgroundImage: 'url(' + wallpaper[0].file + ')' }">
    <!-- <window
      v-for="openApp in openApps"
      track-by="$index"
      :item="openApp"
      :class="{ 'active': activeApp === openApp }"
      @on-click="setActiveApp">
      <component :is="openApp.path"></component>
    </window> -->
    <window
      :model="apps"
      :active-model="activeApp"
      @on-click="setActiveApp"
      @on-contextmenu="openMenuStart">
      <!-- <component v-for="item in tree.children[1].children" :is="item.path"></component> -->
    </window>
    <menu
      v-el:menu
      :show="isMenuVisible"
      :position="menuPosition"
      @on-focusout="closeMenu">
      <menu-item v-for="menuItem in menuItems" :menu-item="menuItem">
      </menu-item>
    </menu>
  </section>
</template>

<script>
import Window from '../components/Window'
import Menu from '../components/Menu'
import MenuItem from '../components/MenuItem'
import {
  wallpaper,
  apps,
  openApps,
  selectedApp,
  activeApp,
  isMenuVisible,
  menuPosition
} from '../vuex/getters'

import {
  setSelectedApp,
  openApp,
  setActiveApp,
  openMenu,
  closeMenu,
  setMenuCoors
} from '../vuex/actions'

export default {
  vuex: {
    getters: {
      wallpaper,
      apps,
      openApps,
      selectedApp,
      activeApp,
      isMenuVisible,
      menuPosition
    },
    actions: {
      setSelectedApp,
      openApp,
      setActiveApp,
      openMenu,
      closeMenu,
      setMenuCoors
    }
  },

  components: {
    Window,
    Menu,
    MenuItem
  },

  data () {
    return {
      menuItems: [
        {
          name: 'Split up',
          action: () => { return this.openApp(this.activeApp, 'up') }
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

  created () {
    const activeApp = this.apps.children[0]
    this.setActiveApp(activeApp)
    // this.openApp(this.selectedApp)
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
@import '../mixins'

article {
  flex: 1 1
}

section {
  background-repeat: no-repeat
  background-position: center
  background-attachment: fixed
  display: flex // see if can make things work without this
  padding: 5px
  position: absolute
  top: 0
  left: 0
  right: 0
  bottom: 0
  background-size(cover)
}

div {
  display: flex
  margin: 5px
  flex: 1
}

.f-c {
  display: flex
  flex-direction: column
  margin: 0
}

.f-r {
  display: flex
  flex-direction: row
  margin: 0
}
</style>
