<template>
  <main>
    <launcher></launcher>
    <desktop></desktop>
  </main>
</template>

<script>
import { fetchApps, fetchMenuItems } from './vuex/actions'
import Launcher from './sections/Launcher'
import Desktop from './sections/Desktop'

// Define Electron objects like this:
// const BrowserWindow = remote.BrowserWindow
// const Menu = remote.require('menu')
// const ipc = window.electron.ipcRenderer

export default {
  vuex: {
    actions: {
      fetchApps,
      fetchMenuItems
    }
  },

  components: {
    Launcher,
    Desktop
  },

  created () {
    this.fetchApps()
    this.fetchMenuItems()
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
