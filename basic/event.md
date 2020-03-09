# event

## addEventListener

`EventTarget.addEventListener() ` 将监听器注册到 EventTarget 上，当该对象触发指定的事件时，指定的回调函数就会被执行。事件目标可以是 `Element Document Window` 或者任何其他支持事件的对象。

```js
target.addEventListener(type, listener[, options]);
target.addEventListener(type, listener[, useCapture]);
```

### 常见事件类型
```js
load
focus
blur
open
message
error
close
popstate
submit
resize
scroll
keydown keypress keyup
mouseenter mouseover mousemove mousedown mouseup
click
drag drop
...
// 参考：https://developer.mozilla.org/zh-CN/docs/Web/Events

```
当然，也可以自定义事件
```js
let myEvent = new Event('event_name')
window.addEventListener('event_name', function() {

})
if (window.dispatchEvent) {  
  window.dispatchEvent(myEvent);
} else {
  window.fireEvent(myEvent);
}
```

### 区别 window.XX 与 window.addEventListener('xxx', () =>{})

```js
window.addEventListener('popstate', (event) => {
  console.log("location: " + document.location + ", state: " + JSON.stringify(event.state));
});

window.onpopstate = function(event) {
  console.log("location: " + document.location + ", state: " + JSON.stringify(event.state));
};

// click
window.addEventListener('click', () => {}));
window.onclick = function() {}
```