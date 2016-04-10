export function wallpaper (state) {
  return state.wallpaper
}

export function apps (state) {
  return state.apps
}

export function openApps (state) {
  return state.openApps
}

export function selectedApp (state) {
  return state.selectedApp
}

export function activeApp (state) {
  return state.activeApp
}

export function menuPosition (state) {
  return {
    x: state.menu.x,
    y: state.menu.y
  }
}

export function isMenuVisible (state) {
  return state.isMenuVisible
}
