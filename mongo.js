// mongoが使えるようにする（モジュールを読み込む）
var MongoClient = require('mongodb').MongoClient,
    settings = require('./settings');
// DBに接続する
// コールバック関数（もしエラーだったら→console.dir(err)でエラー内容を表示してくれる）
// console.dir(object{, option})とは、オブジェクトの内容を見やすく表示することができる
// 参考：https://qiita.com/tadnakam/items/dda690bb184fdc74851f
MongoClient.connect("mongodb://"+settings.host+"/"+settings.db, function(err, db){
    if(err) { return console.dir(err); };
    console.log("connected to db");
});