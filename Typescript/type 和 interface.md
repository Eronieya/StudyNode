# Type 和 Interface

## Type



## Interface



## 共同点

> An interface can be named in an extends or implements clause, but a type alias for an object type literal cannot.
>
> An interface can have multiple merged declarations, but a type alias for an object type literal cannot.

1. type 和 interface 都可以声明类型并复用；

## 不同点

|          |             interface              |            type            |
| :------: | :--------------------------------: | :------------------------: |
| 重复声明 | 会合并两次声明, 得到一个 interface | 编辑器会报错, 不能重复声明 |

