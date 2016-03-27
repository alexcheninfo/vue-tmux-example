import Vue from 'vue'
import App from './App.vue'
import { draggable } from './directives'

// const mainWindow = window.remote.require('./').mainWindow
Vue.directive('draggable', draggable)

new Vue({
  el: 'body',
  components: { App }
})
