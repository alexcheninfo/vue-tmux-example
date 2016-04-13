import Vue from 'vue'
import App from './App.vue'
import store from './vuex/store'
import { toggle, draggable, selectable } from './directives'
// Components for the windows
import Commander from './apps/Commander'
import Writer from './apps/Writer'

Vue.component('commander', Commander)
Vue.component('writer', Writer)
// const mainWindow = window.remote.require('./').mainWindow
Vue.directive('toggle', toggle)
Vue.directive('draggable', draggable)
Vue.directive('selectable', selectable)

Vue.config.debug = true

new Vue({
  el: 'body',
  store,
  components: { App }
})
