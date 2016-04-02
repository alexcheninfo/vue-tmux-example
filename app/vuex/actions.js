import { mockApps, menuItems } from '../api/app'

export const fetchApps = ({ dispatch }) => {
  dispatch('FETCH_APPS', mockApps)
}

export const fetchMenuItems = ({ dispatch }) => {
  dispatch('FETCH_MENU_ITEMS', menuItems)
}

export const setSelectedApp = ({ dispatch }, app) => {
  dispatch('SET_SELECTED_APP', app)
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

export const openWindow = ({ dispatch }, app, direction) => {
  dispatch('OPEN_WINDOW', app, direction)
}

export const splitWindow = ({ dispatch }, app, direction) => {
  dispatch('OPEN_WINDOW', app, direction)
  dispatch('CLOSE_MENU')
}
