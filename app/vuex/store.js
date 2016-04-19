import Vue from 'vue'
import Vuex from 'vuex'
import _ from '../util'

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

  OPEN_APP (state, app, newApp, direction, newCont) {
    // const things = ['violet', 'maroon', 'fuchsia', 'pink']
    // const thing = things[Math.floor(Math.random() * things.length)]
    // const things2 = ['cyan', 'darkblue']
    // const thing2 = things2[Math.floor(Math.random() * things2.length)]
    // function makeid () {
    //   return Math.random().toString(36).slice(-5)
    // }

    // const container = {
    //   id: makeid(),
    //   name: 'container',
    //   color: thing,
    //   direction: 'row',
    //   children: [
    //     {
    //       id: makeid(),
    //       name: 'container',
    //       color: thing2,
    //       direction: 'column',
    //       children: []
    //     },
    //     {
    //       id: makeid(),
    //       name: 'container',
    //       color: 'black',
    //       direction: 'column',
    //       children: []
    //     }
    //   ]
    // }
    if (direction === 'up') {
      _.insertUpDeep(state.apps.children, state.activeApp, newApp)
    }
    if (direction === 'down') {
      _.insertDownDeep(state.apps.children, state.activeApp, newApp)
    }
    if (direction === 'left') {
      _.insertLeftDeep(state.apps.children, state.activeApp, newApp, newCont)
    }
    if (direction === 'right') {
      _.insertRightDeep(state.apps.children, state.activeApp, newApp, newCont)
    }
  },

  UPDATE_DATA (state, data) {
    state.activeApp.data = data
  }
}

export default new Vuex.Store({
  state,
  mutations
  // strict: true
})
