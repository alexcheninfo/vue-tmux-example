<template>
  <section :style="{ backgroundImage: 'url(' + wallpaper[0].file + ')' }">
    <window
      v-for="window in windows"
      :item="window"
      :class="{ 'active': activeWindow === window }"
      :actions="{ click: setActiveWindow }">
      <component
        :is="window.path">
      </component>
      <pre>{{ selectedAppIndex }}</pre>
    </window>
  </section>
</template>

<script>
import Window from '../components/Window'
import Commander from '../apps/Commander'
import Writer from '../apps/Writer'
import {
  setActiveWindow,
  setSelectedApp,
  splitWindow
} from '../vuex/actions'

export default {
  vuex: {
    getters: {
      windows: state => state.windows,
      activeWindow: state => state.activeWindow,
      wallpaper: state => state.wallpaper,
      apps: state => state.apps,
      selectedApp: state => state.selectedApp,
      activeApps: state => state.activeApps
    },
    actions: {
      setActiveWindow,
      setSelectedApp,
      splitWindow
    }
  },

  components: {
    Window,
    Commander,
    Writer
  },

  created () {
    const selectedApp = this.apps[0]
    this.setSelectedApp(selectedApp)
    this.splitWindow(this.selectedApp, 'up')
  }
}
</script>

<style lang="stylus" scoped>
@import '../mixins'

section {
  background-repeat: no-repeat
  background-position: center
  background-attachment: fixed
  display: flex
  flex-direction: column
  padding-bottom: 15px
  position: absolute
  top: 0
  left: 0
  right: 0
  bottom: 0
  background-size(cover)
}
</style>
