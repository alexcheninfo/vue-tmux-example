<template>
  <section :style="{ backgroundImage: 'url(' + wallpaper[0].file + ')' }">
    <window
      v-for="window in windows"
      :item="window"
      :class="{ 'active': activeWindow === window }"
      :actions="{ click: setActiveWindow }">
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborumLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
    </window>
  </section>
</template>

<script>
import Window from '../components/Window'
import { setActiveWindow } from '../vuex/actions'

export default {
  vuex: {
    getters: {
      windows: state => state.windows,
      activeWindow: state => state.activeWindow,
      wallpaper: state => state.wallpaper
    },
    actions: {
      setActiveWindow
    }
  },

  components: {
    Window
  }
}
</script>

<style lang="stylus" scoped>
section {
  background-repeat: no-repeat
  background-position: center
  background-attachment: fixed
  -webkit-background-size: cover
  -moz-background-size: cover
  -o-background-size: cover
  background-size: cover
  display: flex
  flex-direction: column
  padding-bottom: 15px
  position: absolute
  top: 0
  left: 0
  right: 0
  bottom: 0
}
</style>
