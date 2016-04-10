<template>
  <section :style="{ backgroundImage: 'url(' + wallpaper[0].file + ')' }">
    <window
      v-for="openApp in openApps"
      track-by="$index"
      :item="openApp"
      :class="{ 'active': activeApp === openApp }"
      @on-click="setActiveApp">
      <component :is="openApp.path"></component>
    </window>
  </section>
</template>

<script>
import Window from '../components/Window'
import Commander from '../apps/Commander'
import Writer from '../apps/Writer'
import {
  wallpaper,
  apps,
  openApps,
  selectedApp,
  activeApp
} from '../vuex/getters'
import { setSelectedApp, openApp, setActiveApp } from '../vuex/actions'

export default {
  vuex: {
    getters: {
      wallpaper: wallpaper,
      apps: apps,
      openApps: openApps,
      selectedApp: selectedApp,
      activeApp: activeApp
    },
    actions: {
      setSelectedApp,
      openApp,
      setActiveApp
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
    this.openApp(this.selectedApp)
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
