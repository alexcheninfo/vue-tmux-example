<template>
  <!-- <article v-draggable> -->
  <article
    @click="actions && actions.click ? actions.click(item) : null"
    transition>
    <header>
      <h4>
        <i class="fa fa-circle" :style="'color:' + item.color"></i>
        {{ item.title }}
      </h4>
    </header>
    <section>
      <slot></slot>
    </section>
  </article>
</template>

<script>
export default {
  props: {
    item: {
      type: Object,
      required: true
    },
    actions: {
      click: {
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

article {
  background-color: $white
  display: flex
  flex-direction: column
  flex: 1 1
  margin-top: 15px
  margin-right: 15px
  /*margin-bottom: 15px*/
  margin-left: 68px + 15px // Launcher's width plus margin
  /*position: absolute*/
  /*top: 0
  bottom: 0*/
  border-radius($radius-size + 2) // two more pixels to hide the top border
  box-shadow(0 $shadow-size)

  header {
    background-color: $dark-gray
    flex: 0 0
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
    flex: 1 1
    padding: 10px
    overflow-y: scroll

    &::-webkit-scrollbar {
      width: 10px
      background: #ddd

      &-track {
        background-color: #ddd
      }

      &-thumb {
        background-color: #bbb
        border-radius: 50px
      }
    }
  }

  v-transition($transition-duration)
  v-scale-transition($transition-size)
}
</style>
