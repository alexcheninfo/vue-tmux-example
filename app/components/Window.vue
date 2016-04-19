<template>
  <div
    :class="{ 'container': isContainer, 'active': isActive }"
    :style="itemStyle">
    <header v-if="!model.children">
      <h4>
        <i class="fa fa-circle" :style="'color:' + model.color"></i>
        {{ model.name }} {{ model.id }}
      </h4>
    </header>
    <!-- <slot v-if="!model.children"></slot> -->
    <component
      v-if="!model.children"
      :is="model.path"
      :data="model.data">
    </component>
    <!-- <iframe v-if="!model.children" :src="model.path"></iframe> -->
    <window
      v-for="model in model.children"
      :model="model"
      :active-model="activeModel"
      @click.stop="onClick(model)"
      @contextmenu.stop.prevent="onContextmenu(model, $event)">
      <!-- <slot></slot> -->
    </window>
  </div>
</template>

<script>
export default {
  name: 'Window',
  props: {
    model: Object,
    activeModel: Object
  },

  data () {
    return {
      itemStyle: {
        flexDirection: this.model.direction,
        background: this.model.color
      }
    }
  },

  computed: {
    isContainer () {
      return this.model.direction
    },

    isActive () {
      return this.model.id === this.activeModel.id
    }
  },

  methods: {
    onClick (item) {
      this.$dispatch('on-click', item)
    },

    onContextmenu (item, event) {
      this.$dispatch('on-contextmenu', item, event)
      this.$dispatch('on-click', item)
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

  header {
    border-bottom: 1px solid $gray
    flex: 0 0 // to prevent shrinking when high number of items
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

  &.active {
    h4 {
      opacity: 1
    }
  }

  &.container {
    display: flex
    margin: 0
  }

  &:not(.container) {
    border-radius($radius-size + 2) // two more pixels to hide the top border
    box-shadow(0 $shadow-size)
  }
}
</style>
