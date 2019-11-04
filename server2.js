// ドットインストール：URLによって処理を変えてみよう
// アクセスしてきたURLによって処理を変える
// ファイルを読み込むためのモジュールは、fs
// ejsのモジューるの読み込み
// フォームからの投稿を処理する、querystring
var http = require('http'),
    fs = require('fs'),
    ejs = require('ejs'),
    qs = require('querystring');
var settings = require('./settings');
var server = http.createServer();
// リクエストが来る前にテンプレートファイルを読み込む
// 第一引数：ファイル名、第二引数：文字コード
// readFileSyncは、ブロッキングな命令（これが終わるまで次の処理がされない）
var template = fs.readFileSync(__dirname + '/public_html/bbs.ejs', 'utf-8');
// 投稿を保持する配列
var posts = [];
function renderForm(posts, res) {
    var data = ejs.render(template, {
        // 投稿の内容
        posts: posts
    });
    res.writeHead(200, {'Content-Type':'text/html'});
    res.write(data);
    res.end();
};
server.on('request', function(req,res){
    // そのフォームが投稿されたかどうかの場合分け
    // フォームが投稿された時の方は、ほぼ決まり文句
    if (req.method === 'POST') {
        // dataの初期化
        req.data = "";
        // フォームからデータが送られてくる時はreadableと言うイベントで取ることができる
        req.on("readable", function(){
            // その間に、req.dataに読みこんだデータを追加していく
            req.data += req.read();
        });
        // 全てのデータの受信が終わったら、endと言うイベントにする
        req.on("end", function() {
        // 
        })
    } else {
        // 投稿されていない時はフォームを表示する必要がある
        // 長くなるので別関数にする
        renderForm(posts,res);
    }
});
server.listen(settings.port, settings.host);
console.log("server listening...");