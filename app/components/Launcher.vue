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
  border-right: $border-size solid darken($dark-brown, $shadow-normal)
  margin: 0
  padding: 10px
  position: absolute
  top: 0
  left: 0
  height: 100%

  li {
    display: block
    margin: 0 0 5px
    text-align: center
  }

  img {
    filter-drop-shadow(0, $border-size, 0, darken($dark-gray, $shadow-normal))

    &:hover {
      filter-drop-shadow(0, $border-size, 0, darken($dark-gray, $shadow-active))
    }

  }
}
</style>
