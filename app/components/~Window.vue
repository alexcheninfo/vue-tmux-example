<template>
  <!-- <article v-draggable> -->
  <article @click="onClick(item)" transition>
    <header>
      <h4>
        <i class="fa fa-circle" :style="'color:' + item.color"></i>
        {{ item.name }}
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
    }
  },

  methods: {
    onClick (item) {
      this.$dispatch('on-click', item)
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
  margin: 6px // Launcher's width plus margin
  /*position: absolute*/
  /*top: 0
  bottom: 0*/
  border-radius($radius-size + 2) // two more pixels to hide the top border
  box-shadow(0 $shadow-size)

  header {
    border-bottom: 1px solid $gray
    flex: 0 0
    padding: 6px 0
    border-radius($radius-size $radius-size 0 0)

    h4 {
      color: $purple
      margin: 0
      opacity: 0.5
      text-align: center

      i {
        margin: 0 5px 0 0
      }

    }
  }

  section {
    flex: 1 1
    padding: 10px
    overflow: scroll

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

  &.active {
    h4 {
      opacity: 1
    }
  }

  v-transition($transition-duration)
  v-scale-transition($transition-size)
}
</style>
