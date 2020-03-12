class DragData {
  constructor() {
    this.data = {}
  }

  new() {
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
    const DDD = dragData.new()
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
    if(el === Current.el) return 

    const DDD = dragData.new()
    const dragKey = el.getAttribute("drag_key")
    const item = DDD.KEY_MAP[dragKey]

    if(item === Current.item) return 

    const indexTo = DDD.list.indexOf(item),
          indexFrom = DDD.list.indexOf(Current.item)

    swapElements(DDD.list, indexTo, indexFrom)

    Current.index = indexTo // 这里为什么只需要重新赋值index 就好
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
    let dragKey = vnode.key,
        list = binding.value.list,
        item = binding.value.item
    
    let DDD = dragData.new()
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
    const itemFrom = list[from],
          itemTo = list[to]
    Vue.set(list, from, itemTo)
    Vue.set(list, to, itemFrom)
  }

  Vue.directive("dragging", {
    bind: addDragItems
  })
}