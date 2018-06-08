var mongoClient = require('mongodb').MongoClient;
var url = 'mongodb://localhost:27017/runoob';
mongoClient.connect(url, function (err, db) {
    if (err) throw err;
    console.log('数据库已创建');
    var dbo = db.db('runoob');
    var myobj = [
        {name: '菜鸟工具', url: 'https://c.runoob.com', type: 'cn'},
        {name: 'Google', url: 'https://www.google.com', type: 'en'},
        {name: 'Facebook', url: 'https://www.google.com', type: 'en'}
    ];
    dbo.collection("site").insertMany(myobj, function (err, res) {
        if (err) throw err;
        console.log("文档插入成功");
        db.close();
    });
});