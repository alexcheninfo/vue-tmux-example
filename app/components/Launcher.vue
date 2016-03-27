<template>
  <nav>
    <ul>
      <li v-for="app in apps">
        <a @click="openWindow(app)" @contextmenu="openMenu">
          <img :src="app.icon">
        </a>
        <menu @focusout="closeMenu"></menu>
      </li>
    </ul>
  </nav>
</template>

<script>
import $ from 'jquery'
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
      menuToggled: false,
      state: store.state
    }
  },

  computed: {
    windows () {
      return this.state.windows
    }
  },

  methods: {
    openWindow (app) {
      const window = {
        title: app.name,
        color: app.color
      }

      this.windows.push(window)
    },

    openMenu (ev) {
      ev.preventDefault()
      const $icon = $(ev.currentTarget)
      const $menu = $icon.next()
      const mouseX = ev.offsetX
      const mouseY = ev.offsetY
      $menu.css('top', mouseY + 'px')
      $menu.css('left', mouseX + 'px')
      $menu.show()
      $menu.focus()
    },

    closeMenu (ev) {
      const $menu = $(ev.currentTarget)
      $menu.hide()
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
    box-shadow($shadow-size 0, $shadow-blur, $shadow-color)

    li {
      display: block
      margin: 0 0 8px
      text-align: center
      position: relative
      transition($transition-duration)
      bob-hover($transition-position, 0)

      &:last-child {
        margin: 0
      }

      img {
        filter-drop-shadow(0 $shadow-size, $shadow-blur, $shadow-color)
      }
    }
  }
}
</style>
