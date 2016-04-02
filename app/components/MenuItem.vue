<template>
  <li>
    <a @click="item.action">{{ item.name }}</a>
  </li>
</template>

<script>
export default {
  props: {
    item: {
      type: Object,
      required: true
    }
  }
}
</script>

<style lang="stylus" scoped>
@import '../variables'
@import '../mixins'

li {
  a {
    display: block
    padding: 2px 15px

    &:hover {
      background: $dark-green
    }
  }
}
</style>
