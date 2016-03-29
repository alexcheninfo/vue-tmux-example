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
          @contextmenu.prevent="openMenu(app, $event)">
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
import store from '../store'
import Menu from '../components/Menu'

export default {
  components: {
    Menu
  },

  data () {
    return {
      apps: [
        {
          icon: require('../assets/images/icon-1.png'),
          name: 'App 1',
          color: '#687d77'
        },
        {
          icon: require('../assets/images/icon-2.png'),
          name: 'App 2',
          color: '#a4b765'
        },
        {
          icon: require('../assets/images/icon-3.png'),
          name: 'App 3',
          color: '#6e716d'
        }
      ],
      state: store.state
    }
  },

  computed: {
    isMenuVisible () {
      return this.state.isMenuVisible
    },

    selectedApp () {
      return this.state.selectedApp
    }
  },

  methods: {
    openWindow (app) {
      store.actions.openWindow(app)
    },

    openMenu (app, ev) {
      const menu = this.$els.menu
      const x = ev.clientX
      const y = ev.clientY
      store.actions.setMenuCoors(x, y)
      store.actions.openMenu()
      // $nextTick is needed to make focus() work
      this.$nextTick(() => {
        menu.focus()
      })
      store.actions.setSelectedApp(app)
    },

    closeMenu (ev) {
      store.actions.closeMenu()
      store.actions.setSelectedApp({})
    },

    setSelectedApp (app) {
      store.actions.setSelectedApp(app)
    },

    unsetSelectedApp () {
      if (!this.isMenuVisible) {
        store.actions.setSelectedApp({})
      }
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
