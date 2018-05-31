var ul = document.getElementById('long-list')
var preliNode = document.createElement('li')
var count = 0
var cacheKeg = []
// var txtNode = document.createTextNode(count)
// preliNode.appendChild(txtNode)
preliNode.style.height = 0 + 'px'
preliNode.style.border = 0 + 'px'
ul.appendChild(preliNode)

function createLi() {
  var li
  
  if (cacheKeg.length === 0) {
    li = document.createElement('li')
    count++
  } else {
    li = cacheKeg.pop()
  }
  return li
}

function removeLi(li) {
  ul.removeChild(li)
  cacheKeg.push(li)
}

function checkIsBottom(target) {
  var winHeight = window.innerHeight
  var scrollY = window.scrollY
  var targetBottom = target.offsetHeight + target.offsetTop
  return targetBottom > winHeight + scrollY
}

function checkIsTop(target) {
  var scrollY = window.scrollY
  var targetBottom = target.offsetHeight + target.offsetTop
  return targetBottom > scrollY
}

function addTopData() {
  
  var prefixLi = ul.firstChild
  var firstLi = prefixLi.nextSibling
  while(true) {
    var newFirstLi = createLi()
    var newLiText = document.createTextNode(firstLi.textContent - 1)
    var preliNodeHeight = preliNode.offsetHeight
    // newFirstLi.removeChild(newFirstLi.childNodes[0])
    newFirstLi.replaceChild(newLiText, newFirstLi.childNodes[0])
    ul.insertBefore(newFirstLi, firstLi)
    preliNode.style.height = preliNodeHeight - newFirstLi.offsetHeight
    if (preliNode.offsetHeight === 0 && !checkIsTop(prefixLi)) {
      break;
    }
    firstLi = newFirstLi;
  }
}

function delTopData(li) {
  var nextLi = li.nextSibling
  while(true) {
    var preliNodeHeight = preliNode.offsetHeight
    preliNode.style.height = preliNodeHeight + li.offsetHeight
    
    removeLi(li)
    if (checkIsTop(nextLi)) {
      break
    }
    li = nextLi
  }
}

function addBottomData() {
  var lastLi = ul.lastChild
  var lastCount = parseInt(lastLi.innerHTML) || 0
  while (true) {
    var li = document.createElement('li') ////////////////？？？？？？ 考虑到第一个元素
    var text = document.createTextNode(++lastCount)
    li.appendChild(text)
    ul.appendChild(li)
    if (checkIsBottom(li)) {
      break
    }
  }
}

function delBottomData() {
  var prefixLi = ul.firstChild
  var lastLi = ul.lastChild
  var prevLi = lastLi.previousSibling
  while(true) {
    removeLi(lastLi)
    lastLi = prevLi
    prevLi = lastLi.previousSibling
    if (prevLi.previousSibling === prefixLi && !checkIsBottom(prevLi)) {
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
  if (topAddLi.offsetHeight != 0 && checkIsTop(topAddLi)) {
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