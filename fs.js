/**
 * Created by heyangjie on 2018/6/4.
 */
var fs = require('fs');
fs.readFile('test.txt',function (err,data) {
    if(err) return console.error(err);
    console.log(data.toString())
});