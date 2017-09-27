/*
usage: v-upload='"url"'
 */

export default {
  name: 'upload',
  inserted (el, binding, vnode) {
    let label = document.createElement('label')
    let input = document.createElement('input')
    const {height, width} = el.getBoundingClientRect()
    label.style.height = height + 'px'
    label.style.width = width + 'px'
    label.style.position = 'absolute'
    label.style.left = 0
    label.style.backgroundColor = 'rgba(0,0,0,0)'
    el.style.position = 'relative'
    input.type = 'file'
    input.style.position = 'fixed'
    input.style.top = '10000px'

    input.addEventListener('change', e => {
      const file = e.target.files[0]
      e.target.value = ''
      let form = new window.FormData()
      form.append('file', file)
      // TODO
    })

    label.appendChild(input)
    el.appendChild(label)
  }
}
