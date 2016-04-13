<template>
  <section :style="{ backgroundImage: 'url(' + wallpaper[0].file + ')' }">
    <!-- <window
      v-for="openApp in openApps"
      track-by="$index"
      :item="openApp"
      :class="{ 'active': activeApp === openApp }"
      @on-click="setActiveApp">
      <component :is="openApp.path"></component>
    </window> -->
    <window :model="tree">
      <!-- <component v-for="item in tree.children[1].children" :is="item.path"></component> -->
    </window>
    <!-- <pre>{{ tree | json }}</pre> -->
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

  data () {
    return {
      tree: {
        name: 'orange',
        color: 'none',
        direction: 'column',
        path: 'commander',
        children: [
          { name: 'red', color: 'white', path: 'writer' },
          {
            name: 'blue',
            color: 'none',
            direction: 'row',
            path: 'writer',
            children: [
              {
                name: 'green',
                color: 'none',
                direction: 'column',
                path: 'writer',
                children: [
                  { name: 'black', color: 'white', path: 'writer' },
                  { name: 'white', color: 'white', path: 'commander' }
                ]
              },
              { name: 'yellow', color: 'white', path: 'commander' }
            ]
          }
        ]
      }
    }
  },

  computed: {
    isFolder: function () {
      return this.tree.children && this.tree.children.length
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

article {
  flex: 1 1
}

section {
  background-repeat: no-repeat
  background-position: center
  background-attachment: fixed
  display: flex // see if can make things work without this
  padding: 5px
  position: absolute
  top: 0
  left: 0
  right: 0
  bottom: 0
  background-size(cover)
}

div {
  display: flex
  margin: 5px
  flex: 1
}

.f-c {
  display: flex
  flex-direction: column
  margin: 0
}

.f-r {
  display: flex
  flex-direction: row
  margin: 0
}
</style>
