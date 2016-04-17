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
    // const activeAppIndex = state.apps.children.indexOf(state.activeApp)
    const mockApp = {
      name: 'black',
      color: 'black',
      path: 'writer'
    }
    // const container = {
    //   name: 'container',
    //   color: 'purple',
    //   direction: 'row',
    //   children: [
    //     state.activeApp
    //   ]
    // }

    // search recursively in the object
    // insert new object up or below that object
    // state.apps.children[1].children[0].children[0]
    function findDeep (arr, obj) {
      return arr.map(item => {
        const key = Object.keys(obj)[0]
        if (item[key] === obj[key]) {
          return arr
        } else if (item.children) {
          return findDeep(item.children, obj)
        } else {
          return undefined
        }
      }).reduce((prev, curr) => {
        return prev || curr
      })
    }

    function appendDeep (arr, color, newColor) {
      let found = findDeep(arr, color)
      if (found) {
        found.splice(found.indexOf(color) + 1, 0, newColor)
      }
      return arr
    }

    appendDeep(state.apps.children, state.activeApp, mockApp)
    // function findDeep (arr, obj) {
      // if (arr.indexOf(obj) !== -1) {
      //   // arr.splice(arr.indexOf(obj), 0, mockApp)
      //   // console.log(arr)
      //   return arr
      // } else {
      //   arr.forEach(item => {
      //     if (item.children) {
      //       findDeep(item.children, obj)
      //     }
      //   })
      // }
    // }

    // const arrOfActiveApp = findDeep(state.apps.children, state.activeApp)
    // console.log(arrOfActiveApp)
    // arrOfActiveApp.splice(arrOfActiveApp.indexOf(state.activeApp) + 1, 0, mockApp)

    // // Open up and down
    // if (direction === 'up') {
    //   state.apps.children.splice(activeAppIndex, 0, mockApp)
    // }
    // if (direction === 'down') {
    //   state.apps.children.splice(activeAppIndex + 1, 0, mockApp)
    // }
    // // Open left or right
    // if (direction === 'left') {
    //   container.children.unshift(mockApp)
    //   state.apps.children.splice(activeAppIndex, 0, container)
    //   // needs the + 1 because the activeApp goes down a position
    //   state.apps.children.splice(activeAppIndex + 1, 1)
    // }
    // if (direction === 'right') {
    //   container.children.push(mockApp)
    //   state.apps.children.splice(activeAppIndex, 0, container)
    //   // needs the + 1 because the activeApp goes down a position
    //   state.apps.children.splice(activeAppIndex + 1, 1)
    // }
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
