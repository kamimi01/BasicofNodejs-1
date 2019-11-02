// console.log("hello world");

// non blocking
// 次の処理をブロックしない書き方のこと
// タイマー処理が終わった後に実行する処理を記載する必要がある
// 実行結果：最初にworldで、1秒後にhello
//　これをコールバック関数と呼ぶ
//　使い道：時間がかかりそうな処理はコールバック関数で実行する
/*
setTimeout(function() {
    console.log("hello");
}, 1000);
console.log("world");
*/

//　blocking
// 時間がかかる
var start = new Date().getTime();
while(new Date().getTime()<start + 1000);
console.log("world");