var http = require('http');
var url = require('url');
var util = require('util');
var querystring = require('querystring');

http.createServer(function (req,res) {
    res.writeHead(200,{'Content-Type':'text/plain'});
    var params = url.parse(req.url,true).query;
    res.write("aaa:"+params.name);
    res.write('\n');
    res.write('url:'+params.url);
    res.end();
}).listen(8888);

var postHTML =
    '<html><head><meta charset="utf-8"><title>菜鸟教程 Node.js 实例</title></head>' +
    '<body>' +
    '<form method="post">' +
    '网站名： <input name="name"><br>' +
    '网站 URL： <input name="url"><br>' +
    '<input type="submit">' +
    '</form>' +
    '</body></html>';
http.createServer(function (req,res) {
    var body = '';
    req.on('data',function (chuck) {
        body += chuck;
    });
    req.on('end',function () {
        body = querystring.parse(body);
        res.writeHead(200,{'Content-Type':'text/html;charset=utf8'});
        if(body.name && body.url){
            res.write("网站名：" + body.name);
            res.write("<br>");
            res.write("网站 URL：" + body.url);
        }else{
            res.write(postHTML);
        }
        res.end();
    })
}).listen(8887);