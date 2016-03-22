<template>
<launcher></launcher>
</template>

<script>
import Launcher from './components/Launcher'

// Define Electron objects like this:
// const BrowserWindow = remote.BrowserWindow
// const Menu = remote.require('menu')

export default {
  components: {
    Launcher
  }
}
</script>

<style lang="stylus">
@import './global'
</style>
