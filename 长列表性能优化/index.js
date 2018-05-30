var ul = document.getElementById('long-list')
var liNode = document.createElement('li')
var count = 1
var txtNode = document.createTextNode(count)
liNode.appendChild(txtNode)
ul.appendChild(liNode)

function createLi() {
  var li = document.createElement('li')
  count++
  var text = document.createTextNode(count)
  li.appendChild(text)
  ul.appendChild(li)
}

function removeLi(li) {
  ul.removeChild(li)
}

function checkIsBottom(target) {
  var winHeight = window.innerHeight
  var scrollY = window.scrollY
  var targetBottom = target.offsetHeight + target.offsetTop
  return targetBottom > winHeight + scrollY
}

function checkIsTop(target) {
  var scrollY = window.scroll
  var targetBottom = target.offsetHeight + target.offsetTop
  return targetBottom > scrollY
}

function addTopData() {
  var topLi = ul.firstChild
  var topNextLi = topLi.nextSibling
  while(true) {
    var newFirstLi = createLi()
    var newLiText = document.createTextNode(topNextLi.textContent - 1)
    newFirstLi.appendChild(newLiText)
    ul.insertBefore(newFirstLi, topNextLi);
    if (!checkIsTop(prefixLi)) {
      break;
    }
    topNextLi = newFirstLi;
  }
}

function delTopData(li) {
  var nextLi = li.nextSibling
  while(true) {
    removeLi(li)
    if (checkIsTop(nextLi)) {
      break
    }
    li = nextLi
  }
}

function addBottomData() {
  while (true) {
    var lastLi = ul.lastChild
    if (checkIsBottom(lastLi)) {
      break
    }
    createLi()
  }
}

function delBottomData() {
  var lastLi = ul.lastChild
  var prevLi = lastLi.previousSibling
  while(true) {
    removeLi(lastLi)
    lastLi = prevLi
    prevLi = prevLi.previousSibling
    if(!checkIsBottom(prevLi)) {
      break
    }
  }
}

addBottomData()

window.onscroll = function () {
  // 头部移除节点
  var topDelLi = ul.firstChild.nextSibling
  if (!checkIsTop(topDelLi)) {
    delTopData(topDelLi)
  }
  // 头部添加节点
  var topAddLi = ul.firstChild
  if (checkIsTop(topAddLi)) {
    addTopData()
  }

  // 尾部移除节点
  var btmDelLi = ul.lastChild.previousSibling
  if (checkIsBottom(btmDelLi)) {
    delBottomData()
  }

  // 尾部添加节点
  var btmAddLi = ul.lastChild
  if (!checkIsBottom(btmAddLi)) {
    addBottomData()
  }
}