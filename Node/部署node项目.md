# 部署 node 项目

## 1. 初始化 node 项目

`npm init`

## 2. 安装 express

`npm install express`

## 3. 创建 server.js 文件

引入 `express` 模块

```js
const express = require('express')
const app = express()

// 配置
app.get('/index', (req, res) => {
    const json = { 
        name: 'jack',
        age: 10
    }

    res.send(json)
})
```

## 4. 部署服务器

部署 静态文件 到服务器并且监听端口

```js
// 部署静态文件到服务器 将 public 文件夹部署到服务器
// 把 html 文件放到 public 文件夹下
app.use(express.static('public'))
// 添加监听端口
app.listen(3000, () => console.log('服务器已经启动'))
```

## 5. 启动服务器

在 server.js 所在目录下 运行终端 `node server.js` 便可以启动服务器了

