// nodeが用意しているhttpモジュール
var http = require('http');
// 別のファイルの設定を読み込む（用途の例：外部ファイルに設定を書き込んで、読み込みしたい場合）
// .jsは省略できる（./は同じディレクトリの意味）
var settings = require('./settings.js');
// ファイルが読み込まれていることを確認する
console.log(settings);
// サーバーを作る
var server = http.createServer();
// リクエストが飛んできたらxxしなさい
// イベントの種類とその後に何をするかを記載する
// responseのヘッダーを記載する
server.on('request', function(req,res){
    res.writeHead(200, {'Content-Type':'text/plain'});
    // 好きなものを渡す
    res.write('hello world!!!');
    // レスポンスは必ず最後にendにする
    res.end();
});
// サーバーを必ず待ち受け状態にする（ポート番号とIPアドレスを記載する）
// ターミナルで「ifconfig」すると最初の方の「inet」にIPアドレスが書いてある
// server.listen(1337, '127.0.0.1');
server.listen(settings.port, settings.host);
console.log("server listening....");
// ターミナルで「node server.js」で起動
// ブラウザで「IPアドレス:ポート番号」にアクセス
// 注意：メッセージなどを変更した場合は、「ctrl+c」で止めて、再度起動する。その後にブラウザをリフレッシュする