var express = require('express');
const path = require('path')
var app = express();
// 静态资源获取
//访问 localhost:8888/qq.png
//如果静态资源和api重命名，静态资源优先
app.use(express.static('public'));

// 路由
app.get('/get',function (req,res) {
    res.send('hello world');
});
app.post('/post',function (req,res) {
    res.send('hello world');
});
var server = app.listen(8888,function () {
    var host = server.address().address;
    var port = server.address().port;
    console.log("应用实例，访问地址为 http:",host,port);
});


