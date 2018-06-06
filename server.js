var http = require('http');
var url = require('url');
function start(route) {
    function onRequest(request,response) {
        var pathname = url.parse(request.url).pathname;
        console.log("Request for"+pathname);

        route(pathname);

        response.writeHead(200,{"Content-type":"text/plain"});
        response.write("hello world");
        response.end();
    }
    http.createServer(onRequest).listen(8888);
    console.log("start")
}
exports.start = start;