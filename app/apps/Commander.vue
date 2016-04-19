<template>
  <div>
    <input type="text" :value="data" @input="updateData">
    {{ model | json }}
  </div>
</template>

<script>
import {
  updateData
} from '../vuex/actions'

export default {
  vuex: {
    actions: {
      updateData
    }
  },

  props: {
    data: String
  }
}
</script>

<style lang="stylus" scoped>
@import '../variables'

div {
  color: $white
  margin: 0 // see if can remove this
  padding: 10px
  overflow-y: scroll

  input[type='text'] {
    background: none
    border-color: transparent
    outline: none
  }
}
</style>
