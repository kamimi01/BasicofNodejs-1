// mongoが使えるようにする（モジュールを読み込む）
var MongoClient = require('mongodb').MongoClient,
    settings = require('./settings');
// DBに接続する
// コールバック関数（もしエラーだったら→console.dir(err)でエラー内容を表示してくれる）
MongoClient.connect("mongodb://"+settings.host+"/"+settings.db, function(err, db){
    if(err) { return console.dir(err); };
    console.log("connected to db");
});