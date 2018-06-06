var express = require('express');
var app = express();
// 静态资源获取
app.use(express.static('public'));
// 路由
app.get('/',function (req,res) {
    res.send('hello world');
});
var server = app.listen(8888,function () {
    var host = server.address().address;
    var port = server.address().port;
    console.log("应用实例，访问地址为 http:",host,port);
});


