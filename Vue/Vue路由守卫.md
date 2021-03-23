# 路由守卫

## 完整的导航解析流程

1. 导航被触发
2. 在失活的组件里调用离开守卫。
3. 调用全局的 `beforeEach` 守卫
4. 在重用的组件里调用 `beforeRouteUpdate` 守卫
5. 在路由配置里调用 `beforeEnter`
6. 解析异步路由组件
7. 在被激活的组件里调用 `beforeRouteEnter`
8. 调用全局的 `beforeResolve` 守卫
9. 导航被确定
10. 调用全局的 `afterEach` 钩子
11. 触发 DOM 更新
12. 用创建好的实例调用 `beforeRouteEnter` 守卫中传给 `next` 的回调函数



## 全局守卫

使用 `router.beforeEach` 注册一个全局前置守卫

```javascript
const router = new VueRouter({ ... })

router.beforeEach((to, from, next) => {
    // ...
})
```



## 组件内部守卫

- `beforeRouteEnter`
- `beforeRouteUpdate`
- `beforeRouteLeave`



## 数据获取

- 导航完成之后获取：先完成导航，然后再接下来的组件生命周期钩子中获取数据。在数据获取区间显示"加载中"之类的指示
- 导航完成之前获取：导航完成前，在路由进入的守卫中获取数据，在数据获取成功后执行导航。