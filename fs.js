/**
 * Created by heyangjie on 2018/6/4.
 */
var fs = require('fs');
var buf = new Buffer(1024)
fs.open("test.txt","r+",function (err,fd) {
    if(err) return console.error(err);
    console.log("文件打开成功！");
    fs.ftruncate(fd,100,function (err) {
        if(err) return console.error(err);
        fs.read(fd,buf,0,buf.length,0,function (err,bytes) {
            if(err) return console.error(err);
            console.log(bytes + "  字节被读取");
            // 仅输出读取的字节
            if(bytes > 0){
                console.log(buf.slice(0, bytes).toString());
            }
            fs.close(fd, function (err) {
                if (err){
                    console.log(err);
                }
                console.log("文件关闭成功");
            })
        });
    })
});

fs.stat("test.txt",function (err,fd) {
    if(err) return console.error(err);
    console.log(fd);
});
return
//异步读取
fs.readFile('test.txt',function (err,data) {
    if(err) return console.error(err);
    console.log(data.toString())
});
// 同步读取
var data = fs.readFileSync('test.txt');