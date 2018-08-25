export class Event {
  constructor (props) {
    this.listeners = {}
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
  on (evtName, listener) {
    this.add(evtName, listener)
  }
  emit (evtName, ...args) {
    this.fire(evtName, ...args)
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
    })
    this.listeners[evtName] = listeners.filter(listener => !listener.once)
  }
  remove (evtName, listener) {
    if (typeof evtName !== 'string') {
      return
    }
    var listeners = this.listeners[evtName] || []
    this.listeners[evtName] = listeners.filter(obj => obj.listener !== listener)
  }
  once (evtName, listener) {
    this.add(evtName, listener, true)
  }
}

export default new Event()
