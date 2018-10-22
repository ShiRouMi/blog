> 为什么 SFC 中的 data 必须是一个函数返回的对象？不能直接是一个对象吗

## data

类型：Object | Function

限制：组件的定义只接受 function。

- 当一个组件被定义，data 必须声明为返回一个初始数据对象的函数，因为**组件可能被用来创建多个实例**
- 如果 data 仍然是一个纯粹的对象，则所有的实例将共享引用同一个数据对象！
- 通过提供 data 函数，每次创建一个新实例后，我们能够调用 data 函数，从而**返回初始数据的一个全新副本数据对象**。

这样每个实例之间不会相互受影响，每个实例可以维护一份被返回对象的独立的拷贝

[组件的data必须是一个函数](https://cn.vuejs.org/v2/guide/components.html#data-%E5%BF%85%E9%A1%BB%E6%98%AF%E4%B8%80%E4%B8%AA%E5%87%BD%E6%95%B0)

> vue computed 和 data methods watch 的异同  

## computed

类型： `{ [key: string]: Function | { get: Function, set: Function } }`

计算属性将被混入到 Vue 实例中。所有 getter 和 setter 的 this 上下文自动地绑定为 Vue 实例。
(尽量别用箭头函数，因为this不会指向这个组件的实例)
- **计算属性的结果会被缓存，除非依赖的响应式属性变化才会重新计算**。
- 如果某个依赖 (比如非响应式属性) 在该实例范畴之外，则计算属性是不会被更新的。

## methods 

类型： `{ [key: string]: Function }`

methods 将被混入到 Vue 实例中。可以直接通过 VM 实例访问这些方法，或者在指令表达式中使用。方法中的 this 自动绑定为 Vue 实例 （不应该使用箭头函数来定义 method 函数）

## watch

类型：`{ [key: string]: string | Function | Object | Array }`

一个对象，键是需要观察的表达式，值是对应回调函数。值也可以是方法名，或者包含选项的对象。
(不应该使用箭头函数来定义 watcher 函数)

## computed vs watch
- computed 为计算属性，所以计算属性的属性不会和data的属性共存
- watch 侦听器，在数据变化时执行异步或开销较大的操作时，使用watch。

## computed vs methods 
- 计算属性是基于它们的依赖进行缓存的,只在相关依赖发生改变时它们才会重新求值
- 如果不希望有缓存，请用方法来替代。

## computed vs data
- computed 	对数据进行复杂的操作转换
- data 是Vue 实例的数据对象。Vue 将会递归将 data 的属性转换为 getter/setter，从而让 data 的属性能够响应数据变化。
- data对象必须是纯粹的对象 (含有零个或多个的 key/value 对)
- 计算属性将被混入到 Vue 实例中。

> vue 生命周期钩子

- beforeCreate | created
- beforeMount | mounted
- beforeUpdate | updated
- activated | deactivated 
- beforeDestroy | destroyed
- errorCaptured