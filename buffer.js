const buf = Buffer.alloc(10);
console.time("写入数据");
var len = buf.write('123456789123456');
console.log(buf.toJSON());
console.log(buf.toString());
console.log(__dirname);
console.log(__filename);
console.timeEnd("写入数据");