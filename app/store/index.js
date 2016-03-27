// import $ from 'jquery'

const store = {}

store.state = {
  windows: [],
  currentApp: {},
  isMenuVisible: false
}

store.actions = {
  openWindow (app) {
    const window = {
      title: app.name,
      color: app.color
    }
    store.state.windows.push(window)
  },

  openMenu () {
    store.state.isMenuVisible = true
  },

  closeMenu () {
    store.state.isMenuVisible = false
  },

  setSelectedApp (app) {
    store.state.selectedApp = app
  }
}

export default store
