Babel 是下一代 JavaScript 编译器。并不是所有平台都支持最新的 JS 语法。当我们使用最新的语法编写 JS 代码的时候，并不能在所有环境下执行。所以依托 Babel，将 ES6+ 版本的代码转换为向后兼容的代码，使得能够运行在当前和旧版本的浏览器或者其他环境中。

## 实战
- 第一步是设置配置文件是 `.babelrc` ，Babel 工具和模块的时候，都需要先配置好这个文件

该文件用来设置转码规则和插件：
```js
{
  "presets": [],
  "plugins": []
}
```

- 第二步进行转码，转码有以下几种方式
  - 使用命令行转码 `babel-cli`
  - 使用 `babel-node` 直接运行 ES6 文件
  - 由于 Babel 默认只转码新的 JS 语法，不转换新的 API，所以需要按照 `babel-polyfill` ，为当前环境提供一个垫片
  - REPL 在线转换器 ： [https://babeljs.io/repl/](https://babeljs.io/repl/)

## babel 执行三部曲
- 解析
 使用 `babel-parse` 将 JS 代码解析成 AST 树

- 转换
  配合 `babel-traverse` 进行 AST 树的遍历, 同时使用 `babel-core` 对外暴露的 `transform` 来调用相应插件来转化 AST 树
```js
babal.transform(code, {
  plugins: { pluginA, pluginB }
})
```
- 生成
使用 `babel-generator` 将 AST 树转换回 JS 代码