// ドットインストール：URLによって処理を変えてみよう
// アクセスしてきたURLによって処理を変える
var http = require('http');
var settings = require('./settings');
var server = http.createServer();
var msg;
server.on('request', function(req,res){
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
    res.writeHead(200, {'Content-Type':'text/plain'});
    // リクエストしてきたURLが「req.url」で取ることができる
    // res.write('hello from' + req.url);
    res.write(msg);
    res.end();
});
server.listen(settings.port, settings.host);
console.log("server listening...");