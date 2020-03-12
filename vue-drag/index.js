class DragData {
  constructor() {
    this.data = {}
  }

  set() {
    if (!Object.keys(this.data).length) {
      this.data = {
        list: [],
        KEY_MAP: {}
      }
    }
    return this.data
  }

}
const _ = {
  on(el, type, fn) {
    el.addEventListener(type, fn)
  },
  off(el, type, fn) {
    el.removeEventListener(type, fn)
  },
  addClass(el, cls) {
    if(arguments.length < 2) {
      el.classList.add(cls)
    } else {
      for(let i=1,len=arguments.length; i<len; i++) {
        el.classList.add(arguments[i])
      }
    }
  },
  removeClass(el, cls) {
    if (arguments.length < 2) {
      el.classList.remove(cls)
    } else {
      for (let i = 1, len = arguments.length; i < len; i++) {
        el.classList.remove(arguments[i])
      }
    }
  }
}

export default function (Vue, options) {
  let Current = null

  let dragData = new DragData()

  function onDragStart(e) {
    const el = e.target // TODO:
    const dragKey = el.getAttribute("drag_key")
    const DDD = dragData.set()
    const item = DDD.KEY_MAP[dragKey]
    const index = DDD.list.indexOf(item)

    _.addClass(el, 'dragging')

    if(e.dataTransfer) {
      e.dataTransfer.effectAllowed = 'move'
    }

    Current = {
      index,
      item,
      el
    }
  }

  function onDragOver(e) {
    if(e.preventDefault) {
      e.preventDefault()
    }
    return false
  }

  function onDrag() {}

  function onDragEnd(e) {
    let el = e.target
    _.removeClass(el, "dragging")
    Current = null
  }

  function onDragEnter(e) {
    let el = e.target
    if(!el || !Current) return 
    // 值更新的时候 item 可能会 undefined
    if (el === Current.el || !Current.item || !Current.el) return 

    const DDD = dragData.set()
    const dragKey = el.getAttribute("drag_key")
    const item = DDD.KEY_MAP[dragKey]

    if(item === Current.item) return 

    const indexTo = DDD.list.indexOf(item)
    const indexFrom = DDD.list.indexOf(Current.item)

    swapElements(DDD.list, indexTo, indexFrom)

    Current.index = indexTo
  }
  function onDragLeave() {}
  
  function onDrop(e) {
    e.preventDefault()
    if(e.stopPropagation) {
      e.stopPropagation()
    }
    return false
  }

  function addDragItems(el, binding, vnode) {
    const dragKey = vnode.key
    const list = binding.value.list
    const item = binding.value.item
    
    let DDD = dragData.set()
    DDD.list = list
    DDD.KEY_MAP[dragKey] = item
    
    el.setAttribute("draggable", true)
    el.setAttribute("drag_key", dragKey)

    _.on(el, "dragstart", onDragStart)
    _.on(el, "drag", onDrag)
    _.on(el, "dragend", onDragEnd)
    _.on(el, "dragover", onDragOver)
    _.on(el, "dragenter", onDragEnter)
    _.on(el, "dragleave", onDragLeave)
    _.on(el, "drop", onDrop)
  }

  function swapElements(list, from, to) {
    const itemFrom = list[from]
    const itemTo = list[to]
    Vue.set(list, from, itemTo)
    Vue.set(list, to, itemFrom)
  }

  function removeDragItems(el, binding, vnode) {
    const dragKey = vnode.key
    const DDD = dragData.set()
    DDD.KEY_MAP[dragKey] = undefined
    _.off(el, "dragstart", onDragStart)
    _.off(el, "drag", onDrag)
    _.off(el, "dragend", onDragEnd)
    _.off(el, "dragover", onDragOver)
    _.off(el, "dragenter", onDragEnter)
    _.off(el, "dragleave", onDragLeave)
    _.off(el, "drop", onDrop)
  }

  function updateDragItems(el, binding, vnode) {

    const dragKey = vnode.key
    const DDD = dragData.set()
    const item = binding.value.item
    const oldItem = DDD.KEY_MAP[dragKey]
    const list = binding.value.list
    if (item && item !== oldItem) {
      DDD.KEY_MAP[dragKey] = item
    }
    if(list && list !== DDD.list) {
      DDD.list = list
    }
  }

  Vue.directive("dragging", {
    bind: addDragItems,
    update: updateDragItems,
    unbind: removeDragItems
  })
}