import {
  newApps,
  newConts,
  mockApps,
  menuItems,
  mockWallpaper
} from '../api/app'

export const fetchApps = ({ dispatch }) => {
  dispatch('FETCH_APPS', mockApps)
}

export const fetchMenuItems = ({ dispatch }) => {
  dispatch('FETCH_MENU_ITEMS', menuItems)
}

export const fetchWallpaper = ({ dispatch }) => {
  dispatch('FETCH_WALLPAPER', mockWallpaper)
}

export const setSelectedApp = ({ dispatch }, app) => {
  dispatch('SET_SELECTED_APP', app)
}

export const setFocusedApp = ({ dispatch }, app) => {
  dispatch('SET_FOCUSED_APP', app)
}

export const unsetSelectedApp = ({ dispatch, state }) => {
  if (!state.isMenuVisible) {
    dispatch('SET_SELECTED_APP', {})
  }
}

export const openMenu = ({ dispatch }) => {
  dispatch('OPEN_MENU')
}

export const closeMenu = ({ dispatch }) => {
  dispatch('CLOSE_MENU')
  dispatch('SET_SELECTED_APP', {})
}

export const setMenuCoors = ({ dispatch }, x, y) => {
  dispatch('SET_MENU_COORS', x, y)
}

export const openApp = ({ dispatch, state }, app, direction) => {
  const newApp = newApps[Math.floor(Math.random() * newApps.length)]
  const newCont = newConts[Math.floor(Math.random() * newConts.length)]
  dispatch('OPEN_APP', app, newApp, direction, newCont)
  dispatch('SET_ACTIVE_APP', newApp)
  dispatch('CLOSE_MENU')
}

export const setActiveApp = ({ dispatch, state }, app) => {
  dispatch('SET_ACTIVE_APP', app)
}

export const updateData = ({ dispatch }, e) => {
  dispatch('UPDATE_DATA', e.target.value)
}
