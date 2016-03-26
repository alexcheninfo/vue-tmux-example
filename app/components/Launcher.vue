<template>
  <ul>
    <li v-for="icon in icons">
      <a href="#"><img :src="icon.image"></a>
    </li>
  </ul>
</template>

<script>
export default {
  data () {
    return {
      icons: [
        { image: require('../assets/images/icon-1.png') },
        { image: require('../assets/images/icon-2.png') },
        { image: require('../assets/images/icon-3.png') }
      ]
    }
  }
}
</script>

<style lang="stylus" scoped>
@import '../variables'
@import '../mixins'

ul {
  background: $dark-gray
  margin: 0
  padding: 10px
  position: absolute
  top: 0
  left: 0
  height: 100%
  z-index: 9999
  box-shadow($shadow-size 0, $shadow-blur, $shadow-color)

  li {
    display: block
    margin: 0 0 8px
    text-align: center

    &:last-child {
      margin: 0
    }

    img {
      filter-drop-shadow(0 $shadow-size, $shadow-blur, $shadow-color)

      &:hover {
        filter-drop-shadow(0 $shadow-size, $shadow-blur, $shadow-color)
      }
    }
  }
}
</style>
