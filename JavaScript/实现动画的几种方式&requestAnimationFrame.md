<meta http-equiv="Content-Type" content="text/html; charset=utf-8">
## 实现动画的几种方式
- CSS 实现
- setTimeout/setInterval 实现
- requestAnimationFrame

### CSS 实现
关键词：transition、animation

> 区别 transition animation

- transition 注重的是 css 属性的改变，而 animation 作用域元素本身
- transition 需要事件触发，无法在页面渲染后自动执行动画；而 animation 可以自动执行
- transition 需要知道起始和终止的状态具体数值，进而计算出中间状态，无法设置中间状态
- transition 是一次性的，无法重复发送，除非再次触发
- animation 提供的 keyframe 方法，可以让你手动去指定每个阶段的属性; animation 封装了循环次数，动画延迟
- transition 过渡的速度进行了封装，可以控制是匀速改变还是贝塞尔曲线之类的
- ...

举例：css 实现一个小球从左到右自动滚动

[代码实现](./code/moveLeftToRight.html)

### setTimeout/setInterval 实现
一般屏幕的刷新频率为 60HZ，意味着每秒屏幕刷新60次，每次屏幕刷新时间为 `1000/60 = 16.67ms`。利用人眼的视觉停留和电脑屏幕的刷新，让元素以平滑的方式移动改变位置。
setTimeout|setInterval 的执行时间不是确定的。使用 setTimeout/setInterval 执行动画是一个异步行为会被放入异步队列里。当当前执行栈中的同步任务执行完后，才会执行异步队列里的任务。所以真实的动画执行时间要比设定的值晚一些。
不同设备的刷新频率不一样，当动画的执行频率与显示屏的刷新频率不一致的情况下，会出现卡顿现象。
当动画的执行频率与显示屏的刷新频率不一致的情况下，会出现卡顿现象。

举例：setTimeout/setInterval 实现一个小球从左到右自动滚动

- [setTimeout 实现](./code/setTimeoutMove.html)
- [setInterval 实现](./code/setIntervalMove.html)

### requestAnimationFrame 
requestAnimationFrame 区别于 setTimeout、setInval，是它由系统自己的刷新频率来决定什么时候调用动画，开发者只需要定义好动画，这个函数会在浏览器重绘前调用。
所以动画不会出现卡顿现象。

举例：css 实现一个小球从左到右自动滚动
- [requestAnimationFrameMove 实现](./code/requestAnimationFrameMove.html)

## requestAnimationFrame

> 是什么？

requestAnimationFrame 告诉浏览器：你希望执行一个动画，并且要求浏览器在下次重绘前调用指定的回调函数更新动画。该方法需要传入一个回调函数作为参数，该回调函数会在浏览器下一次重绘之前执行

> 怎么用？

当你准备更新动画时你应该调用此方法。
这将使浏览器在下一次重绘之前调用你传入给该方法的动画函数(即你的回调函数)。回调函数执行次数通常是每秒60次。。。

> 优势

- 精准控制调用时机
- 当页面处理未激活的状态下，该页面的屏幕绘制任务也会被系统暂停，因此跟着系统步伐走的 rAF 也会停止渲染
- 函数节流，在高频率事件中（resize rescoll)，为了防止在一个刷新周期内函数多次执行，使用 rAF 可以保证每个刷新周期内，函数只执行一次