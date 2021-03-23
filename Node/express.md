# express

## Get 请求传参

```js
// test.js
const express = require('express')
const app = express()

app.get('/index', (req, res) => {
    // 通过 req.query 获取参数
    console.log(req.query.test)
    const json = { 
        name: 'jack',
        age: 10
    }

    res.send(json)
})

app.listen(3000, () => console.log('服务器已经启动'))
```

