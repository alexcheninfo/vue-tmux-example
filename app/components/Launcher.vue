<template>
  <nav>
    <ul>
      <li
        v-for="app in apps"
        :class="{'selected': selectedApp === app}">
        <a
          @mouseover="setSelectedApp(app)"
          @mouseout="unsetSelectedApp()"
          @click="openWindow(app)"
          @contextmenu.prevent="openMenuStart(app, $event)">
          <img :src="app.icon">
        </a>
      </li>
      <menu
        v-el:menu
        v-show="isMenuVisible"
        @focusout="closeMenu">
      </menu>
    </ul>
  </nav>
</template>

<script>
import Menu from '../components/Menu'
import {
  setSelectedApp,
  unsetSelectedApp,
  openMenu,
  closeMenu,
  setMenuCoors,
  openWindow
} from '../vuex/actions'

export default {
  vuex: {
    getters: {
      apps: state => state.apps,
      isMenuVisible: state => state.isMenuVisible,
      selectedApp: state => state.selectedApp
    },
    actions: {
      setSelectedApp,
      unsetSelectedApp,
      openMenu,
      closeMenu,
      setMenuCoors,
      openWindow
    }
  },

  components: {
    Menu
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
  > ul {
    background: $dark-gray
    padding: $padding-size
    position: absolute
    top: 0
    left: 0
    height: 100%
    list-style($style-type)
    box-shadow($shadow-size 0)

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
  }
}
</style>
