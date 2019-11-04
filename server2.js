// ドットインストール：URLによって処理を変えてみよう
// アクセスしてきたURLによって処理を変える
// ファイルを読み込むためのモジュールは、fs
// ejsのモジューるの読み込み
var http = require('http'),
    fs = require('fs'),
    ejs = require('ejs');
var settings = require('./settings');
var server = http.createServer();
// リクエストが来る前にテンプレートファイルを読み込む
// 第一引数：ファイル名、第二引数：文字コード
// readFileSyncは、ブロッキングな命令（これが終わるまで次の処理がされない）
var template = fs.readFileSync(__dirname + '/public_html/hello.ejs', 'utf-8');
// ビュー数（初期化）
var n = 0;
server.on('request', function(req,res){
    // テンプレートの中にデータを入れ込む
    n ++;
    var data = ejs.render(template,{
        title:"hello",
        content:"<strong>World!</strong>",
        n : n
    })
    // 実行するのは、テキストではなく、htmlなので、text/htmlにする
    res.writeHead(200, {'Content-Type':'text/html'});
    // リクエストしてきたURLが「req.url」で取ることができる
    // res.write('hello from' + req.url);
    // 表示させるのは、data
    res.write(data);
    res.end();
});
server.listen(settings.port, settings.host);
console.log("server listening...");