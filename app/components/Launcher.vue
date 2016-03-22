<template>
  <div id="hello">
    <h1>Hello {{ msg }}</h1>
    <p>We are using node {{ versions.node }}, Chrome {{ versions.chrome }} and Electron {{ versions.electron }}.</p>
    <button @click="submit">Submit</button>
  </div>
</template>

<script>
// Define Electron objects like this:
// const BrowserWindow = remote.BrowserWindow
// const Menu = remote.require('menu')
const ipc = window.electron.ipcRenderer

export default {
  data () {
    return {
      msg: 'Vue + Electron!',
      versions: {
        node: window.remote.process.versions.node,
        chrome: window.remote.process.versions.chrome,
        electron: window.remote.process.versions.electron
      }
    }
  },

  methods: {
    submit () {
      ipc.send('submit')
    }
  }
}
</script>
