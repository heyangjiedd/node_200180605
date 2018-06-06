// process.on('exit',function (code) {
//    setTimeout(function () {
//        console.log('buhuizixing')
//    },0);
//    console.log(''+code)
// });
process.stdout.write("aaaa"+"\n");
process.argv.forEach(function (val,index,array) {
   console.log(index+":"+val);
});
// 获取执行路径
console.log(process.execPath);
// 平台信息
console.log(process.platform);