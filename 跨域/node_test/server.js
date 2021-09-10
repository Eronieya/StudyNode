const express = require('express');
const app = express();

// 允许跨域访问
app.all('*', function (req, res, next) {
    res.header("Access-Control-Allow-Origin", req.headers.origin || "*");
    res.header("Access-Control-Allow-Headers", "Content-Type, Authorization, X-Requested-With");
    res.header("Access-Control-Allow-Methods", "PUT,POST,GET,DELETE,OPTIONS");
    res.header("Content-Type", "application/json;charset=utf-8");
    if (req.method == 'OPTIONS') {
        res.sendStatus(200);
    } else {
        next();
    }
});

app.get('/index', (req, res) => {
    const json = {
        name: 'jack',
        age: 10
    }

    res.send(json);
})

app.use(express.static('public'));
app.listen(3000, () => console.log('服务器已启动'));