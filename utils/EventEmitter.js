class Event {
  constructor(props) {
    this.listeners = {}
  }
  on (evtName, listener) {
    this.add(evtName, listener)
  }
  fire (evtName, ...args) {
    if (typeof evtName !== 'string') {
      return
    }
    const listeners = this.listeners[evtName]
    if (!listeners || listeners.length === 0) {
      return
    }
    listeners.forEach((listener, index, arr) => {
      listener.listener.apply(listener.context, args)
      if (listener.once) {
        arr.splice(index, 1)
      }
    })
  }
  remove (evtName) {
    // pop
    if (typeof evtName !== 'string') {
      return
    }
    const listeners = this.listeners[evtName] || []
    listeners.pop()
  }
  once (evtName, listener) {
    this.add(evtName, listener, true)
  }
  add (evtName, listener, once) {
    if (typeof evtName !== 'string') {
      throw new Error('the first arg must be a string')
    }
    if (typeof listener !== 'function') {
      throw new Error('the second arg must be a function')
    }
    let listeners = this.listeners[evtName] || []
    listeners.push({
      listener,
      context: this,
      once
    })
    this.listeners[evtName] = listeners
  }
}

export default new Event()

export {Event}
