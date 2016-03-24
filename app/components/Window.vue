<template>
  <article>
    <header>
      <h4><i class="fa fa-circle"></i>Hardcoded Title</h4>
    </header>
    <section>
      <slot></slot>
    </section>
  </article>
</template>

<style lang="stylus" scoped>
@import '../variables'
@import '../mixins'

article {
  background-color: $white
  position: absolute
  top: 30px
  left: 80px
  width: 600px
  height: 400px
  border-radius($radius-size)
  box-shadow(0 $shadow-size, 0 0, $shadow-color)

  header {
    background-color: $dark-gray
    margin-top: -1px // to cover the top border of article
    padding: 5px 0
    border-radius($radius-size $radius-size 0 0)

    h4 {
      color: $white
      margin: 0
      text-align: center

      i {
        color: $green // temporary
        margin: 0 5px 0 0
      }
    }
  }

  section {
    margin: 10px
  }
}
</style>
