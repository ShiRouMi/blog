
# demo

## [长列表性能优化](./长列表性能优化/index.js)
```
  只渲染页面用户能看到的部分，并且在不断滚动的过程中去除不在屏幕的元素，不再渲染，从而实现高性能的列表渲染
  当列表不断往下拉时，web中的dom元素就越多，即使这些dom元素已经离开了这个屏幕，不被用户所看到了，这些dom元素依然存在在那里。导致浏览器在渲染时需要不断去考虑这些dom元素的存在，造成web浏览器的长列表渲染非常低效。因此，实现的做法就是捕捉scroll事件，当dom离开屏幕，用户不再看到时，就将其移出dom tree。
```
## [加载 10W 条数据]
- [方式一](https://juejin.im/post/5ae17a386fb9a07abc299cdd)
- [方式二](./长列表性能优化/10Wdatabetter.html)
- [方式三](./长列表性能优化/10WdataBetter2.html)

## [sso单点登录](./sso单点登录/sso.js)
备注：有些属性已被 web 标准废除

## [Vue 中 nextTick 实现](./vue实现/nextTick.js)
待修改

## [函数柯里化](./函数柯里化/currying.js)
待修改
## [防抖](./防抖debounce/debounce.js)
## [节流](./节流throttle/throttle.js)