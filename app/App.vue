<template>
  <main>
    <!-- <launcher></launcher> -->
    <desktop></desktop>
  </main>
</template>

<script>
import Launcher from './sections/Launcher'
import Desktop from './sections/Desktop'
import {
  fetchApps,
  fetchMenuItems,
  fetchWallpaper
} from './vuex/actions'

// Define Electron objects like this:
// const BrowserWindow = remote.BrowserWindow
// const Menu = remote.require('menu')
// const ipc = window.electron.ipcRenderer

export default {
  vuex: {
    actions: {
      fetchApps,
      fetchMenuItems,
      fetchWallpaper
    }
  },

  components: {
    Launcher,
    Desktop
  },

  created () {
    this.fetchApps()
    this.fetchMenuItems()
    this.fetchWallpaper()
  }
}
</script>

<style lang="stylus">
@import './variables'
@import './global'

body {
  color: $black
  font-size: 16px
  line-height: 1.4
}

</style>
