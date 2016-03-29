const store = {}

store.state = {
  windows: [],
  selectedApp: {},
  isMenuVisible: false,
  menu: {
    x: 0,
    y: 0
  }
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
  },

  setSelectedIcon (app) {
    store.state.selectedApp = app
  },

  setMenuCoors (x, y) {
    store.state.menu.x = x
    store.state.menu.y = y
  }
}

export default store
