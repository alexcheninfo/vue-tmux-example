// const store = {}
//
// store.state = {
//   apps: [],
//   selectedApp: {},
//   windows: [],
//   isMenuVisible: false,
//   menu: {
//     x: 0,
//     y: 0
//   }
// }
//
// store.actions = {
//   fetchApps () {
//     const apps = [
//       {
//         icon: require('../assets/images/icon-1.png'),
//         name: 'App 1',
//         color: '#687d77'
//       },
//       {
//         icon: require('../assets/images/icon-2.png'),
//         name: 'App 2',
//         color: '#a4b765'
//       },
//       {
//         icon: require('../assets/images/icon-3.png'),
//         name: 'App 3',
//         color: '#6e716d'
//       }
//     ]
//     store.state.apps = apps
//   },
//
//   openWindow (app, direction) {
//     const window = {
//       title: app.name,
//       color: app.color
//     }
//     console.log(direction)
//     store.state.windows.push(window)
//   },
//
//   openMenu () {
//     store.state.isMenuVisible = true
//   },
//
//   closeMenu () {
//     store.state.isMenuVisible = false
//   },
//
//   setSelectedApp (app) {
//     store.state.selectedApp = app
//   },
//
//   setSelectedIcon (app) {
//     store.state.selectedApp = app
//   },
//
//   setMenuCoors (x, y) {
//     store.state.menu.x = x
//     store.state.menu.y = y
//   }
// }
//
// export default store
