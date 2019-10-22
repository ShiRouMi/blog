# checkbox 多选框组件
首先看调用方式，当单独使用的时候:
```html
<checkbox v-model="val"></checkbox>
```
当组合使用的时候
```html
<checkbox-group v-model="arr">
  <checkbox value="aaa"></checkbox>
  <checkbox value="bbb"></checkbox>
  <checkbox value="ccc"></checkbox>
</checkbox-group>
```

## 单独使用的 checkbox

组件的设计: 
- 因为要在组件上使用 v-model，所以必须会有一个 value prop 和 event input
- disabled prop 用于表示是否禁用
- onChange event，选中/取消选中事件时触发，用于通知父组件
- slot 插槽用于设置文本

## 注意点
设计 checkbox 的时候，将 input 与 slot 插槽放在 label 标签下，这样才能使得点击文字的时候也会 选中/取消选中 选择框，增强用户体验。*不过为什么只能放在 label 标签下？*

除了 `disabled` 状态下，无论 checkbox 当前值是 `true/false`，点击 checkbox 都会修改选择框的状态。而当用户想手动修改 value prop，比如设置 `value = false`，希望状态一直处于未选中状态，这样的需求只能通过设计模拟 checkbox 实现。

### 单独使用的 checkbox
```vue
<template>
  <label class="fe-checkbox">
    <span 
      class="checkbox__input"
      :class="{
        'is-checked': isChecked,
        'is-disabled': isDisabled,
        'is-focus': focus
      }">
      <span class="checkbox__inner"></span>
      <input
        class="checkbox__original"
        type="checkbox"
        :disabled="disabled"
        v-model="model"
        @change="change"
        @focus="focus=true"
        @blur="focus=false" />

    </span>
    <span class="checkbox__label">
      <slot></slot>
    </span>
  </label>
</template>
<script>
export default {
  name: 'fCheckbox',
  props: {
    disabled: {
      type: Boolean,
      default: false
    },
    value: {
      type: [String, Number, Boolean],
      default: false
    }
  },
  data: function() {
    return {
      selfModel: false,
      focus: false
    }
  },
  computed: {
    model: {
      get() {
        return this.value !== undefined 
          ? this.value 
          : this.selfModel
      },
      set(val) {
        this.$emit('input', val)
        this.selfModel = val
      }
    },
    isChecked() {
      return this.model
    },
    isDisabled() {
      return this.disabled
    }
  },
  methods: {
    change(event) {
      if(this.disabled) return false

      let checked = event.target.checked
  
      this.$emit('on-change', checked)
    }
  }
}
</script>
```
使用 span 模拟实现 checkbox，通过 isChecked class 来设置选中/未选中状态。
而真实的 checkbox 复选框使用 v-model 双向绑定数据。

绑定 v-model 为计算属性 model，设置 getter/setter，value prop 存在的话，getter 依赖 value prop 响应式更新，否则依赖内部属性 selfModel 响应式更新，setter 设置内部属性 selfModel。

点击复选框，触发 change 事件，发布`on-change` 事件，传递当前的真实的复选框状态。
实际上真实的 checkbox 复选框的状态会随着点击事件改变，无法固定为某一值。