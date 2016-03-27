<template>
  <!-- <article v-draggable> -->
  <article class="modal" transition>
    <header>
      <h4><i class="fa fa-circle" :style="'color:' + color"></i>{{ title }}</h4>
    </header>
    <section>
      <slot></slot>
    </section>
  </article>
</template>

<script>
export default {
  props: {
    title: String,
    color: String
  }
}
</script>

<style lang="stylus" scoped>
@import '../variables'
@import '../mixins'

article {
  background-color: $white
  /*position: absolute
  top: 15px
  left: 82px
  right: 12px*/
  margin-top: 15px
  margin-right: 15px
  margin-bottom: 15px
  margin-left: 68px + 15px // Launcher's width plus margin
  height: 400px
  border-radius($radius-size + 2) // two more pixels to hide the top border
  box-shadow(0 $shadow-size, $shadow-blur, $shadow-color)

  header {
    background-color: $dark-gray
    padding: 5px 0
    border-radius($radius-size $radius-size 0 0)

    h4 {
      color: $white
      margin: 0
      text-align: center

      i {
        margin: 0 5px 0 0
      }
    }
  }

  section {
    margin: 10px
  }

  v-transition($transition-duration)
  v-scale-transition($transition-size)
}
</style>
