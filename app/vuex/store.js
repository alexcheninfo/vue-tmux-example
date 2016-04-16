import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const state = {
  apps: [],
  openApps: [],
  activeApp: [],
  menuItems: [],
  wallpaper: {},
  selectedApp: {},
  isMenuVisible: false,
  menu: {
    x: 0,
    y: 0
  }
}

const mutations = {
  FETCH_APPS (state, apps) {
    state.apps = apps
  },

  FETCH_MENU_ITEMS (state, menuItems) {
    state.menuItems = menuItems
  },

  FETCH_WALLPAPER (state, wallpaper) {
    state.wallpaper = wallpaper
  },

  SET_SELECTED_APP (state, app) {
    state.selectedApp = app
  },

  SET_ACTIVE_APP (state, app) {
    state.activeApp = app
  },

  OPEN_MENU (state) {
    state.isMenuVisible = true
  },

  CLOSE_MENU (state) {
    state.isMenuVisible = false
  },

  SET_MENU_COORS (state, x, y) {
    state.menu.x = x
    state.menu.y = y
  },

  OPEN_APP (state, app, direction) {
    // console.log(state.activeApp)
    // console.log(state.apps.children)

    console.log(direction)
    const activeAppIndex = state.apps.children.indexOf(state.activeApp)
    // const mockApp = {
    //   name: 'black',
    //   color: 'black',
    //   path: 'writer'
    // }
    const container = {
      name: 'container',
      color: 'purple',
      direction: 'row',
      children: [
        { name: 'cyan', color: 'cyan', path: 'writer' }
      ]
    }

    container.children.push(state.activeApp)

    // INSERT LEFT OR RIGHT

    state.apps.children.splice(activeAppIndex, 0, container)
    // needs the + 1 because the activeApp goes down a position
    state.apps.children.splice(activeAppIndex + 1, 1)

    // INSERT UP AND DOWN

    // Insert before active app
    // state.apps.children.splice(activeAppIndex, 0, mockApp)

    // Insert after active app
    // state.apps.children.splice(activeAppIndex + 1, 0, mockApp)

    // search active app in apps
    // insert app below active app
    // state.openApps.push(app)
  },

  UPDATE_DATA (state, data) {
    state.activeApp.data = data
  }
}

export default new Vuex.Store({
  state,
  mutations,
  strict: true
})
