<template>
  <div>
    <launcher></launcher>
  </div>
</template>

<script>
import Launcher from './components/Launcher'

// Define Electron objects like this:
// const BrowserWindow = remote.BrowserWindow
// const Menu = remote.require('menu')
// const ipc = window.electron.ipcRenderer

export default {
  components: {
    Launcher
  }
}
</script>

<style lang="stylus">
@import './variables'
@import './global'

body {
  background-color: $dark-brown
}
</style>
