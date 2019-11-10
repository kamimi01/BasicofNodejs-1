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
        /*
        // コレクションにデータを入れる
        // insertOneメソッド：１つのドキュメントを挿入する
        collection.insertOne(docs, function(err, result) {
            console.dir(result);
        });
        */
       // finderを使ってみる
       // 全てのドキュメントを表示する方法（toArrayで抽出結果を、配列にする）
       // 結果がitemsで帰ってくる
       // findの中身にかくと、抽出条件を指定することができる
       // 注意点：全ての抽出結果を配列にするので、データが多いと、メモリを圧迫してしまう
       /*
       collection.find({name: "mizu"}).toArray(function(err, items) {
           console.log(items);
       });
       */
      // 大量のデータを返したい時には、streamを使うのが一般的
      // streamに対して、イベントを設定できる
      var stream = collection.find().stream();
      // データが来た時のイベント：data
      stream.on("data", function(item) {
          console.log(item);
      });
      // データの受信が終わった時のイベント：end
      stream.on("end", function() {
          console.log("finished");
      });
    })
});