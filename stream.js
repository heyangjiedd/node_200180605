var fs = require('fs');
var data = '';
// 创建可读流
var readStream = fs.createReadStream('test.txt');
//设置编码
readStream.setEncoding('UTF8');
// 处理流事件
readStream.on('data',function (chuck) {
    data += chuck;
});
readStream.on('end',function () {
    console.log(data)
});
readStream.on('error',function (err) {
    console.log(err.stack)
});
console.log('read over')

var writeData = 'cesihyixia';
// 创建一个写入流，写入到文件中
var writeStream = fs.createWriteStream('test.txt');
// 写入数据格式
writeStream.write(writeData,'UTF8');
//标记文件末尾
writeStream.end();
writeStream.on('finish',function () {
   console.log('写入完成。。。');
});
writeStream.on('error',function (err) {
    console.log(err.stack)
});
console.log('write over');

// 管道读写操作
var read = fs.createReadStream('test.txt');
var write = fs.createWriteStream('test1.txt');
read.pipe(write);
//文件压缩
var zlib = require('zlib');
fs.createReadStream('test.txt').pipe(zlib.createGzip()).pipe(fs.createWriteStream('text.txt.gz'))
//解压文件
fs.createReadStream('text.txt.gz').pipe(zlib.createGunzip()).pipe(fs.createWriteStream('text_new.txt'))
