<template>
  <!-- tabindex needed to make focusout work -->
  <ul
    v-show="show"
    tabindex="-1"
    :style="{ top: position.y + 'px', left: position.x + 'px' }"
    @focusout="actions && actions.focusout ? actions.focusout() : null">
    <slot></slot>
  </ul>
</template>

<script>
export default {
  props: {
    show: {
      type: Boolean,
      default: false
    },
    position: {
      x: {
        type: Number,
        default: 0
      },
      y: {
        type: Number,
        default: 0
      }
    },
    actions: {
      focusout: Function,
      required: false
    }
  }
}
</script>

<style lang="stylus" scoped>
@import '../variables'
@import '../mixins'

ul {
  background: $dark-gray
  padding: 0
  outline: none // to remove focus glow
  overflow: hidden // to preserve border radius on hover
  position: absolute
  white-space: nowrap
  z-index: 9999
  list-style($style-type)
  border-radius($radius-size)
  box-shadow(0 $shadow-size)
}
</style>
