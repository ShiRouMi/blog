## HTML5 DOM
1. getElementsByClassName
2. ele.scrollIntoView()
调用 `ele.scrollIntoView()`, ele 元素顶端会移动到可视区域的顶端; 若传入参数 `alignToTop: false`, 则 ele 移到屏幕底部;

## HTML5 事件
1. contextmenu
2. DOMContentLoaded
优于 window.onload 执行
3. readystatechange
可用来判断动态载入的 script、link 标签是否加载完成
4. hashchange

## HTML5 表单
- input/textarea 里新增 autoFocus() 字段
- 表单校验 api
使用 checkValidate() 校验 required、pattern="\d+" 属性

## HTML5 脚本
- 跨文档消息传输(XDM), 核心是 postMessage
- 拖放 api

## HTML5 存储
- sessionStorage: 大小上限为 2.5Mb(不同浏览器会有差异), 页面关闭时便清空;
- localStorage: 大小上限为 2.5Mb(不同浏览器会有差异), 页面关闭时不会清空;

## HTML5 JavaScript Api
### requestAnimationFrame(callback)
表示在下次重绘前执行指定的回调函数

### Web Worker
JavaScript 是一门单线程的语言, 借助 Web Worker 能在浏览器上模拟线程的概念。

### Service Worker
基于 Web Worker 的 api 来处理网络请求以及缓存, 可以将其理解为是 Web Worker + cache storage 的组合。同时其也是 PWA 依赖的最为重要的技术。