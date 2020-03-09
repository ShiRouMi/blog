# element 对象

## client​Height
这个属性是**只读**属性，对于没有定义CSS或者内联布局盒子的元素为0，否则，它是元素内部的高度(单位像素)，包含内边距，但不包括水平滚动条、边框和外边距。

`clientHeight` 可以通过 CSS `height + CSS padding - 水平滚动条高度` (如果存在)来计算.

## scrollHeight
只读属性，是一个元素内容高度的度量，包括由于溢出导致的视图中不可见内容。

没有垂直滚动条的情况下, `scrollHeight` 值等于 `clientHeight`。

包括元素的 `padding`，但不包括元素的 `border` 和 `margin` 。`scrollHeight` 也包括 `::before` 和 `::after`这样的伪元素。

## scrollTop
获取或设置一个元素的内容垂直滚动的像素数。
一个元素的 `scrollTop` 值是这个元素的顶部到视口可见内容（的顶部）的距离的度量

