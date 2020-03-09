function createFragment(node) {
  let fragment = document.createDocumentFragment()
  let child = node
  while (child) {
    fragment.appendChild(child)
    child = child.firstChild
  }
  return fragment
}