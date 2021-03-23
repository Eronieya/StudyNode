# Set 和 Map

Set 和 Map 主要的应用场景在于 **数据重组** 和 **数据存储**

Set 是一种叫做 集合 的数据结构， Map 是一种叫做 字典 的数据结构

## 1. 集合 (Set)

ES6 新增的一种新的数据结构，类似于数组，但成员事唯一且无序的，没有重复的值。

Set 本身是一个构造函数，用来生成 Set 数据结构

可以用作 **数组去重**

```javascript
var arr = [1, 4, 6 ,8 ,5]
const s = new Set(arr)
```

Set 对象允许存储任何类型的唯一值，无论是原始值或者是对象引用

### Set 实例属性

- constructor: 构造函数
- size: 元素数量

### Set 实例方法

#### 操作方法

- add(value) 新增，相当于 array里的push
- delete(value) 存在即删除集合中value
- has(value) 判断集合中是否存在 value
- clear() 清空集合

#### 遍历方法 

- keys() 返回一个包含集合中所有键的迭代器
- values() 返回一个包含集合中所有值得迭代器
- entries() 返回一个包含Set对象中所有元素得键值对迭代器
- forEach()

## 2. 字典 (Map)

### Map 实例属性

- constructor: 构造函数
- size: 元素数量

### Map 实例方法

#### 操作方法

- set(key, value) 向字典中添加新元素
- get(key) 通过键查找特定的数值并返回
- has(key) 判断字典中是否存在键key
- delete(key) 通过键 key 从字典中移除对应的数据
- clear() 将这个字典中的所有元素删除

#### 遍历方法

- Keys() 将字典中包含的所有键名以迭代器形式返回
- values() 将字典中包含的所有数值以迭代器形式返回
- entries() 返回所有成员的迭代器
- forEach() 遍历字典的所有成员