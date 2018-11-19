
Map 能接受的参数
```js
const map = new Map([
  ['name', 'fyflying'],
  ['job', 'engineer']
])
```
等同于
```
const items = [
  ['name', 'fyflying'],
  ['job', 'engineer']
]
const map = new Map()
items.forEach(
  ([key, value]) => map.set(key, value)
)
```

demo: // 
```js
var _arr = [{ 'area': '北京', 'name': '刘德华' }, { 'area': '西安', 'name': '小明' }, { 'area': '德国', 'name': '小红' }, { 'area': '德国', 'name': '小李' }, { 'area': '东北', 'name': '小赵' }, { 'area': '东北', 'name': '小华' }];
let m = {}
for (let i = 0; i < _arr.length; i++) {
  let t = _arr[i]
  if (!m[t.area]) {
    m[t.area] = []
  }
  m[t.area].push(t.name)
}

let arr = []
for (let key in m) {
  arr.push({ area: key, name: m[key] })
}
console.log(arr)
// var _arr = [{'area':'北京','name':['刘德华']},{'area':'西安','name':['小明']},{'area':'德国','name':['小红','小李']},{'area':'东北','name':['小赵','小华']}];
```
