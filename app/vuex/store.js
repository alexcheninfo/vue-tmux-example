import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const state = {
  apps: [],
  menuItems: [],
  wallpaper: {},
  selectedApp: {},
  activeWindow: {},
  isMenuVisible: false,
  menu: {
    x: 0,
    y: 0
  },
  windows: []
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

  SET_ACTIVE_WINDOW (state, win) {
    state.activeWindow = win
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

  OPEN_WINDOW (state, app, direction) {
    const window = {
      title: app.name,
      color: app.color
    }
    state.windows.push(window)
  }
}

export default new Vuex.Store({
  state,
  mutations
})
