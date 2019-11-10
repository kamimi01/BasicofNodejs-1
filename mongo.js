// mongoが使えるようにする（モジュールを読み込む）
var MongoClient = require('mongodb').MongoClient,
    settings = require('./settings');

// dbへの接続オプションを追加
const connectOption = {
    useUnifiedTopology: true
};
// DBに接続する
// コールバック関数（もしエラーだったら→console.dir(err)でエラー内容を表示してくれる）
// console.dir(object{, option})とは、オブジェクトの内容を見やすく表示することができる
// 参考：https://qiita.com/tadnakam/items/dda690bb184fdc74851f
MongoClient.connect("mongodb://"+settings.host+"/"+settings.db, connectOption, function(err, client){
    // mongodb3以降は、 dbを一度定義しないといけなくなった
    // 公式参考：https://github.com/mongodb/node-mongodb-native/blob/3.0/CHANGES_3.0.0.md
    // DB名「test」なので、「use test」でコレクションの中身を見ることができる
    var db = client.db('test');
    if(err) { return console.dir(err); };
    console.log("connected to db");
    // コレクションを作って、データを入れていく
    db.collection('users', function(err, collection) {
        var docs = [
            {name: "mizu", score: 40},
            {name: "kami", score: 80},
            {name: "yuji", socre: 60}
        ];
        // コレクションにデータを入れる
        collection.insertOne(docs, function(err, result) {
            console.dir(result);
        });
    })
});