import Vue from 'vue'
import App from './App.vue'
import { toggle, draggable, selectable } from './directives'

// const mainWindow = window.remote.require('./').mainWindow
Vue.directive('toggle', toggle)
Vue.directive('draggable', draggable)
Vue.directive('selectable', selectable)

new Vue({
  el: 'body',
  components: { App }
})
