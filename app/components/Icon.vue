<template>
  <li :class="{ 'selected': selected === item }">
    <a
      @click="actions && actions.click ? actions.click(item) : null"
      @mouseover="actions && actions.mouseover ? actions.mouseover(item) : null"
      @mouseout="actions && actions.mouseout ? actions.mouseout() : null"
      @contextmenu.prevent="actions && actions.contextmenu
        ? actions.contextmenu(item, $event)
        : null">
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
    },
    actions: {
      click: {
        type: Function,
        required: false
      },
      mouseover: {
        type: Function,
        required: false
      },
      mouseout: {
        type: Function,
        required: false
      },
      contextmenu: {
        type: Function,
        required: false
      }
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
