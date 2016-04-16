<template>
  <div>
    <!-- <input type="text"> -->
    <input type="text" v-model="model">
    {{ model | json }}
  </div>
</template>

<script>
export default {
  data () {
    return {
      model: ''
    }
  }
}
</script>

<style lang="stylus" scoped>
 div {
   margin: 0 // see if can remove this
   padding: 10px
   overflow-y: scroll
 }
</style>
