<template>
  <li :class="{ 'selected': selected === item }">
    <a
      @click="onClick(item)"
      @mouseover="onMouseover(item)"
      @mouseout="onMouseout()"
      @contextmenu.prevent="onContextmenu(item, $event)">
      <img :src="item.icon">
    </a>
  </li>
</template>

<script>
export default {
  props: {
    item: {
      type: Object,
      required: true
    },
    selected: {
      type: Object,
      required: false
    }
  },

  methods: {
    onClick (item) {
      this.$dispatch('on-click', item)
    },
    onMouseover (item) {
      this.$dispatch('on-mouseover', item)
    },
    onMouseout (item) {
      this.$dispatch('on-mouseout', item)
    },
    onContextmenu (item, event) {
      this.$dispatch('on-contextmenu', item, event)
    }
  }
}
</script>

<style lang="stylus" scoped>
@import '../variables'
@import '../mixins'

li {
  display: block
  margin: 0 0 8px
  text-align: center
  position: relative
  transition($transition-duration)
  /*bob-hover($transition-position, 0)*/

  &.selected {
    -webkit-transform: translate($transition-position)
    transform: translate($transition-position)
  }

  &:last-child {
    margin: 0
  }

  a {
    display: block
  }

  img {
    filter-drop-shadow(0 $shadow-size)
  }
}
</style>
