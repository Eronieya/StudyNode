# Vue3

## ref 和 reactive

ref 包装对象

1. 原始数据类型：包装成一个对象，通过 `refVarName.value` 的方式来访问其值。
2. 引用数据类型：`refVarName.value` 的引用与原对象的引用相同。

```js
// ref 
const list = [1, 2, 3];
const listRef = ref(list);

/**
* 当 listRef.value 改变的时候, list同时改变
* 即 listRef.value 和 list 引用同一块内容地址
* 修改 list 的时候，不触发 watch
*/
```





## setup的两种方式

### 函数方式

```vue
<script>
import { reactive } from "@vue/reactivity";
export default {
  setup() {
    const state = reactive({ count: 1 });

    return {
      state,
    };
  }
};
</script>
```



### 标签方式

 不可以在该标签里export操作，否则会报错

```vue
<script setup>
import { reactive } from "@vue/reactivity";
const state = reactive({ count: 1 });
</script>
```

