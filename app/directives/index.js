import $ from 'jquery'
import 'jquery-ui'

export const draggable = {
  bind () {
    const $el = $(this.el)
    $el.draggable({ drag: dragListener })

    function dragListener () {
      // const thisPos = $(this).position()
      // const parentPos = $(this).parent().position()
      // const x = thisPos.left - parentPos.left
      // const y = thisPos.top - parentPos.top
    }
  },

  update (value) {
    // some code
  }
}
