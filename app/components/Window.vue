<template>
  <div :class="{ 'flex': model.direction }" :style="itemStyle">
    <header v-if="!model.children">
      <h4>
        <i class="fa fa-circle" :style="'color:' + model.color"></i>
        {{ model.name }}
      </h4>
    </header>
    <!-- <slot v-if="!model.children"></slot> -->
    <component v-if="!model.children" :is="model.path"></component>
    <!-- <iframe v-if="!model.children" :src="model.path"></iframe> -->
    <window
      v-for="model in model.children"
      :model="model">
      <!-- <slot></slot> -->
    </window>
  </div>
</template>

<script>
export default {
  name: 'Window',
  props: {
    model: Object
  },

  data () {
    return {
      itemStyle: {
        flexDirection: this.model.direction,
        background: this.model.color
      }
    }
  }
}
</script>

<style lang="stylus" scoped>
@import '../variables'
@import '../mixins'

div {
  display: flex
  flex: 1
  flex-direction: column
  margin: 5px
  border-radius($radius-size + 2) // two more pixels to hide the top border
  box-shadow(0 $shadow-size)

  header {
    border-bottom: 1px solid $gray
    flex: 0
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
}

.flex {
  display: flex
  margin: 0
}
</style>
