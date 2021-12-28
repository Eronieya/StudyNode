#### Redux基础配置

1. 安装依赖

   ```bash
   npm i react-redux -D
   ```

2. 在 `index.js` 里引入 redux,并根据reducers创建store对象

   ```js
   import {createStore} from 'redux';
   import reducers from './reducers';
   
   let store = createStore(reducers);
   ```

3. 使用 `react-redux` 里的 `Provider` 方法避免每一个组件都需要传递 store 对象

   ```jsx
   import {Provider} from 'react-redux';
   import App from 'App';
   
   ReactDOM.render(
     <Provider store={store}>
       <App />
     </Provider>,
     document.getElementById('root')
   );
   ```

4. 配置 `reducers` 

   ```js
   // [reducers/index.js]
   import {combineReducers} from 'redux';
   import app from './app';
   // import ... 
   
   // 使用 combineReducers 导出所有的 reducers
   export default combineReducers({app});
   ```

   ```js
   // [reducers/app.js]
   const app = (state = [], action) => {
       switch (action.type) {
           case 'TEST':
               console.log('[reducers app.js CASE]', action.type, state);
               return [
                   ...state,
                   {msg: action.msg}
               ];
           default:
               return state
       }
   }
   
   export default app;
   ```

5. 配置 `actions`

   ```js
   // [actions/index.js]
   export const testAction = msg => {
       return {
           type: 'TEST',
           msg
       }
   }
   ```

6. 配置`containers`

   ```js
   // [containers/counterBtn.js]
   
   // 引入 react-redux 的 connect 来将组件和状态绑定起来
   import {connect} from 'react-redux';
   import AddBtn from '../components/addBtn/addBtn';
   import { addCount } from '../actions';
   
   const mapStateToProps = state => ({
       count: state.count
   })
   
   const mapDispatchToProps = dispatch => ({
       addCount: () => {dispatch(addCount())}
   })
   
   // 将 states、reducers 与 组件AddBtn 绑定起来
   export default connect(mapStateToProps, mapDispatchToProps)(AddBtn);
   ```

7. 新建一个组件 `addBtn`

   ```js
   // [components/addBtn.js]
   import React from 'react';
   
   export default class AddBtn extends React.Component{
       constructor(props) {
           super(props);
           console.log(props);
       }
   
       render(){
           let addCount = this.props.addCount;
           let count = this.props.count;
           console.log('状态改变了!');
           return (
               <div>
                   <span>{count}</span>
                   <button onClick={addCount}>ADD</button>
               </div>
           )
       }
   }
   ```

   

```jsx
// [./index.js]

import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app/App';
import {createStore} from 'redux';
import {Provider} from 'react-redux';
import reducers from './reducers';

let store = createStore(reducers);

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

```



```js
// [reducers/index.js]
import {combineReducers} from 'redux';
import app from './app';

export default combineReducers({app});
```

```js
// [reducers/app.js]
const app = (state = [], action) => {
    switch (action.type) {
        case 'TEST':
            console.log('[reducers app.js CASE]', action.type, state);
            return [
                ...state,
                {msg: action.msg}
            ];
        default:
            return state
    }
}

export default app;
```



```js
// [actions/index.js]
export const app = (state = [], action) => {
    switch (action.type) {
        case 'TEST':
            console.log('[reducers app.js CASE]', action.type, state);
            return [
                ...state,
                {msg: action.msg}
            ];
        default:
            return state
    }
}

export const addCount = () => {
    return {
        type: 'ADD'
    }
}
```



#### 目录分析

```
- actions 
- reducers
- containers
```



#### 使用分析

1. 在 `containers` 里面使用 `connect` 链接store和组件。
2. `containers` 里面指定的 `state` 属性会绑定到组件的 `prpos` 里。
3. 如果是需要动态修改的属性值，则

