// ドットインストール：URLによって処理を変えてみよう
// アクセスしてきたURLによって処理を変える
// ファイルを読み込むためのモジュールは、fs
var http = require('http'),
    fs = require('fs');
var settings = require('./settings');
var server = http.createServer();
var msg;
server.on('request', function(req,res){
    // ファイルを読み込む
    // __dirnameは今のディレクトリ名
    // ファイルの読み込みには時間がかかるので、コールバック関数を使用する→function
    fs.readFile(__dirname + '/public_html/hello.html', 'utf-8', function(err,data){
        if(err) {
            // エラーが起きたら404を返す
            res.writeHead(404, {'Content-Type':'text/plain'});
            // res.write('hello from' + req.url);
            res.write('not found');
            // 処理を終了させるには、returnをかく（次に処理が行かない）
            return res.end();
        }
        // 実行するのは、テキストではなく、htmlなので、text/htmlにする
        res.writeHead(200, {'Content-Type':'text/html'});
        // リクエストしてきたURLが「req.url」で取ることができる
        // res.write('hello from' + req.url);
        // 表示させるのは、data
        res.write(data);
        res.end();
    });
    /*
    switch(req.url) {
        case '/about':
            msg = "about this page";
            break;
        case '/profile':
            msg = "about me";
            break;
        default:

            msg ='wrong page';
            break;
    }
    */
});
server.listen(settings.port, settings.host);
console.log("server listening...");