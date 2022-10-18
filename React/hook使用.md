#### useEffect

使用 `useEffect` 调度的 effect 不会阻塞浏览器更新屏幕，这让你的应用看起来响应更快。
React 会等待浏览器完成画面渲染之后才会延迟调用 `useEffect`，因此会使得额外操作很方便。

可以把 `useEffect` Hook 看做 `componentDidMount`，`componentDidUpdate` 和 `componentWillUnmount` 这三个函数的组合。

1. 如果你的 effect 返回一个函数，React 将会在执行清除操作时调用它。

2. React 将按照 effect 声明的顺序依次调用组件中的每一个 effect。

3. 跳过对effect的调用(性能优化)

   ```js
   // 非 effect 做法
   componentDidUpdate(prevProps, prevState) {
     if (prevState.count !== this.state.count) {
       document.title = `You clicked ${this.state.count} times`;
     }
   }
   
   // effct 做法
   useEffect(() => {
     document.title = `You clicked ${count} times`;
   }, [count]); // 仅在 count 更改时更新
   ```

4. 如果想执行只运行一次的 effect（仅在组件挂载和卸载时执行），可以传递一个空数组（`[]`）作为第二个参数。