
引っかかったこと
* MongoDBのインストール
    * 問題：多くのサイトに記載がある「brew install mongodb」の方法ではインストールができなかった
    * 対処方法：formulaとして認識されていなかったため、githubに記載の方法で、「mongodb-community4.0」をインストールした
    * 参考：https://github.com/mongodb/homebrew-brew
*   Gitにプッシュができなかった
    * 問題：ssh接続の問題で、gitプッシュの際に、yes/noの確認があった
    * 詳細メッセージ：「The authenticity of host 'github.com (52.69.186.44)' can't be established.RSA key fingerprint is SHA256:nThbg6kXUpJWGl7E1IGOCspRomTxdCARLviKw6E5SY8.Are you sure you want to continue connecting (yes/no)?」
    * 対処方法：ssh keyを作成して、githubに登録をした
    * 参考：https://qiita.com/takayamag/items/9818f9b5cb1fad77e583
