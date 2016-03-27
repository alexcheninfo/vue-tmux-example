<template>
  <ul>
    <li v-for="app in apps">
      <a @click="openWindow(app)"><img :src="app.icon"></a>
    </li>
  </ul>
</template>

<script>
import store from '../store'

export default {
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
    }
  }
}
</script>

<style lang="stylus" scoped>
@import '../variables'
@import '../mixins'

ul {
  background: $dark-gray
  margin: 0
  padding: 10px
  position: absolute
  top: 0
  left: 0
  height: 100%
  z-index: 9999
  box-shadow($shadow-size 0, $shadow-blur, $shadow-color)

  li {
    display: block
    margin: 0 0 8px
    text-align: center

    &:last-child {
      margin: 0
    }

    img {
      filter-drop-shadow(0 $shadow-size, $shadow-blur, $shadow-color)
      bob-hover($transition-duration, $transition-position, 0)
    }
  }
}
</style>
