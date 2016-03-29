<template>
  <main>
    <launcher></launcher>
    <window v-for="window in windows" :window="window">
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
    </window>
  </main>
</template>

<script>
import store from './store'
import Launcher from './components/Launcher'
import Window from './components/Window'

// Define Electron objects like this:
// const BrowserWindow = remote.BrowserWindow
// const Menu = remote.require('menu')
// const ipc = window.electron.ipcRenderer

export default {
  components: {
    Launcher,
    Window
  },

  data () {
    return {
      state: store.state
    }
  },

  ready () {
    store.actions.fetchApps()
  },

  computed: {
    windows () {
      return this.state.windows
    }
  }
}
</script>

<style lang="stylus">
@import './variables'
@import './global'

body {
  background-color: $dark-brown
  color: $black
  font-size: 16px
  line-height: 1.4
}
</style>
