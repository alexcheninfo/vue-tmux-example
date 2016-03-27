import Vue from 'vue'
import App from './App.vue'
import { draggable } from './directives'
import { fade } from './transitions'

// const mainWindow = window.remote.require('./').mainWindow
Vue.directive('draggable', draggable)
Vue.transition('fade', fade)

new Vue({
  el: 'body',
  components: { App }
})
