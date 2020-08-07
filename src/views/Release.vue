<template>
  <div class="release">
    <h1 class="rel_h01">概要</h1>
    <p>
      Vue CLIを用いて作成したWebサイトを公開するまでの手順を説明します。<br>
      ここでの公開とは、同一ネットワーク上での公開（言わば内部公開）を意味します。
    </p>
    <div style="height:40px"></div>

    <h2 class="rel_h02" id="content01">{{ navListsRelease[0].name }}</h2>
    <ol>
      <li>公開したいWebサイトが <b>Vue CLI</b> で作成されている（プロジェクト作成済みである）</li>
      <li>Webサイトを作成したPCがRaspberry Piと同じネットワーク上に存在し、且つSSH接続可能</li>
      <li>Raspberry PiにNginxがインストール済み</li>
    </ol>
    <p>
      <br>
      ※ 2と3については、本サイトの"Raspberry Pi"と"Nginx"で紹介している内容が完了していればOKです。
    </p>
    <div style="height:60px"></div>

    <h2 class="rel_h02" id="content02">{{ navListsRelease[1].name }}</h2>
    <p>
      Vue CLIで作成したプロジェクトのビルドを実行します。
    </p>
    <p>
      Webサイトを作成したPCにてターミナルを起動し、Vue CLIで作成したプロジェクトフォルダに移動してください。<br>
      その後、以下のコマンドを入力してビルドを実行してください。
    </p>
    <div class="rel_box01">
      <h3 class="ttl">ターミナル</h3>
      <p>
        $ npm run build
      </p>
    </div>
    <p>プロジェクトフォルダ内に<b><font color="red">"dist"</font></b>という名称のフォルダが作成されていれば成功です。</p>
    <div style="height:60px"></div>

    <h2 class="rel_h02" id="content03">{{ navListsRelease[2].name }}</h2>
    <p>
      ビルド実行により作成されたdistフォルダの中身をRaspberry Piに送信する必要がありますが、前段階としてRaspberry Piのどの階層に送信したら良いのかを確認します。
    </p>
    <p>
      まずはPCにてターミナルを起動し、Raspberry Piに対してSSH接続を行ってください（user:piでログイン）。<br>
      接続後、以下のコマンドを実行して設定内容が記述されたファイルを確認してください。
    </p>
    <div class="rel_box01">
      <h3 class="ttl">ターミナル</h3>
      <p>
        $ cat /etc/nginx/conf.d/default.conf
      </p>
    </div>
    <p>
      <br>
      実行すると、ファイルの上部に以下のような内容が記述されていることが確認できます。
    </p>
    <div class="rel_box01">
      <h3 class="ttl">/etc/nginx/conf.d/default.conf（上部）</h3>
      <pre>
server {
    listen       80;
    server_name  localhost;

    #charset koi8-r;
    #access_log  /var/log/nginx/host.access.log  main;
    location / {
        root   /usr/share/nginx/html;
        index  index.html index.htm;
    }</pre>
    </div>
    <p>
      <br>
      location内のrootに記述されている階層が、distフォルダの中身の送信先となります。<br>
      上記の例だと<b><font color="red">"/usr/share/nginx/html"</font></b>となっている為、以後の説明ではこれを用います。
    </p>
    <p>
      次に、確認した階層の中身を確認するために以下のコマンドを順番に実行してください。
    </p>
    <div class="rel_box01">
      <h3 class="ttl">ターミナル</h3>
      <p>
        $ cd /usr/share/nginx/html<br>
        $ ls
      </p>
    </div>
    <p>
      Nginxのインストール後から何もしていなければ、<b>"index.html"</b>と<b>"50x.html"</b>というファイルが入っていることが確認できます。
    </p>
    <p>
      この後の作業でdistフォルダ内にあるindex.htmlファイルをここに置くことになるため、元々存在するindex.htmlファイルを先に削除しておいても構いません。<br>
      削除する場合は以下のコマンドを実行してください。
    </p>
    <div class="rel_box01">
      <h3 class="ttl">ターミナル</h3>
      <p>
        $ sudo rm index.html
      </p>
    </div>
    <p>
      ちなみにですが、ここで削除しているのはNginxインストール後の動作確認時にブラウザで開いたページ（"Welcome to nginx!"と書いてあるページ）を表示するhtmlファイルです。
    </p>
    <div style="height:60px"></div>

    <h2 class="rel_h02" id="content04">{{ navListsRelease[3].name }}</h2>
    <p>
      distフォルダの中身をRaspberry Piに送信するためのSFTPソフトをダウンロードします。<br>
      各自好みのソフトを使ってもらって構いませんが、私の場合はFileZillaを使用したのでこちらにご紹介しておきます。
    </p>
    <p>
      以下のダウンロードサイトを開き、"FileZilla_Client"の中から各自のPC環境に適したものをダウンロード・インストールしてください。
    </p>
    <a href="https://ja.osdn.net/projects/filezilla/releases/" target="_blank">FileZilla ダウンロード</a>
    <div style="height:60px"></div>

    <h2 class="rel_h02" id="content05">{{ navListsRelease[4].name }}</h2>
    <p>
      distフォルダの中身をRaspberry Piに送信します。<br>
      FileZillaを使用した例を紹介しますが、もし他のソフトを使用する場合は各自でやり方を調べていただくようお願いします。
    </p>
    <p>
      まずはFileZillaを起動して、サイトマネージャーを開いてください。<br>
      サイトマネージャーは、画面の一番左上のアイコン（サーバーのようなもの？が複数表示されている）を押すと開きます。
    </p>
    <p>
      サイトマネージャー画面が開いたら、左下にある "新しいサイト" ボタンを押してください。<br>
      その後、画面右側の各入力欄に以下の内容を入力してください。
    </p>
    <li>プロトコル：SFTP - SSH File Transfer Protocol</li>
    <li>ホスト：raspberry piのIPアドレス</li>
    <li>ログオン タイプ：通常</li>
    <li>ユーザー：pi</li>
    <li>パスワード：raspberry（パスワードを変更したならそのパスワードを入力）</li>
    <p>
      <br>
      ここまでの入力が完了したら、 "接続" ボタンを押して接続してください。
    </p>
    <p>
      最初の画面に戻って接続成功していれば、続けてファイル転送を実行します。<br>
      画面左側のローカルサイトでは、PCのdistフォルダを開きます。<br>
      画面右側のリモートサイトでは、転送先の階層を開きます（今回の例だと "/usr/share/nginx/html"）。
    </p>
    <p>
      画面左側のdistフォルダの<b><font color="red">中身全て</font></b>を、画面右側にドラッグ＆ドロップして送信してください。<br>
      送信成功していれば、公開の準備は以上です。
    </p>
    <p>
      送信の際、<b><font color="red">permissionの関係でエラーとなり送信できない</font></b>場合があります。<br>
      その場合、次の項目「ファイル転送②」に移ってください。
    </p>
    <div style="height:60px"></div>

    <h2 class="rel_h02" id="content06">{{ navListsRelease[5].name }}</h2>
    <p>
      ファイル転送①にて、permissionが原因で送信できなかった場合（というか私がそうでした）の対処を紹介します。<br>
      前提として、ファイル転送①でRaspberry Piへの接続までは出来たとします。
    </p>
    <p>
      接続設定後のFileZillaの画面（起動後の最初の画面）で、右側のリモートサイトの指定先を変更します。<br>
      指定先を <b><font color="red">"/home/pi"</font></b> に変更してください（user:piのホームディレクトリにあたる）。<br>
      変更した後、ファイル転送①で説明したのと同様にdistフォルダの中身をドラッグ＆ドロップしてください。
    </p>
    <p>
      送信できたら、SSH接続中（user:piでログイン中）のPCのターミナルにて、送信したファイルやディレクトリの移動を行います。<br>
      ホームディレクトリに移動して、先ほど送信したものを "/usr/share/nginx/html" へ移しましょう。<br>
      以下のコマンドを順番に実行してください。
    </p>
    <div class="rel_box01">
      <h3 class="ttl">ターミナル</h3>
      <p>
        $ cd<br>
        $ sudo mv index.html css js /usr/share/nginx/html
      </p>
    </div>
    <p>
      この例では "index.html"ファイル、"css"ディレクトリ、"js"ディレクトリの3種を "/usr/share/nginx/html"に移動させています。<br>
      送信対象の部分は、distファイルから送信したものに応じて各自変更して実行してください。
    </p>
    <p>
      対処方法は以上となりますが、この方法でも失敗してしまう場合はお手数ですが各自で調べていただくようお願いします。
    </p>
    <div style="height:60px"></div>

    <h2 class="rel_h02" id="content07">{{ navListsRelease[6].name }}</h2>
    <p>
      最後に動作確認を行います。
    </p>
    <p>
      Raspberry Piと同じネットワーク上に存在するPCでブラウザを起動してください。<br>
      Raspberry PiのIPアドレス指定（http://192.168.xxx.xxx）でアクセスして、作成したWebサイトが表示されていればOKです。
    </p>
    <div style="height:30px"></div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      navListsRelease: [
        {
          name: '前提条件',
          link: '/release',
          hash: '#content01'
        },
        {
          name: 'Vueプロジェクトのビルド',
          link: '/release',
          hash: '#content02'
        },
        {
          name: 'Nginxの設定確認',
          link: '/release',
          hash: '#content03'
        },
        {
          name: 'SFTPソフト',
          link: '/release',
          hash: '#content04'
        },
        {
          name: 'ファイル転送①',
          link: '/release',
          hash: '#content05'
        },
        {
          name: 'ファイル転送②',
          link: '/release',
          hash: '#content06'
        },
        {
          name: '動作確認',
          link: '/release',
          hash: '#content07'
        }
      ]
    }
  },
  methods: {
    setReleaseLists () {
      this.$store.commit('setDrawer', true)
      this.$store.commit('setNavLists', this.navListsRelease)
    }
  },
  created: function () {
    this.setReleaseLists()
  }
}
</script>

<style scoped>
  .release {
    font-size: 16px;
    padding: 15px 15px 0 15px;
  }
  .rel_h01 {
    background: linear-gradient(#F3F5F5, #fff);
    background: -o-linear-gradient(#F3F5F5, #fff);
    background: -ms-linear-gradient(#F3F5F5, #fff);
    background: -moz-linear-gradient(#F3F5F5, #fff);
    background: -webkit-linear-gradient(#F3F5F5, #fff);
    background: -webkit-gradient(linear, left top, left bottom, color-stop(1.00, #fff), color-stop(0.00, #F3F5F5));
    border-bottom: 2px solid #1B73BA;
    box-sizing: border-box;
    font-size: 22px;
    margin: 0 0 15px;
    padding: 7px 0 5px 5px;
  }
  .rel_h02 {
    border-bottom:1px solid #999999;
    color: #333;
    font-size: 20px;
    margin: 0 0 20px;
    padding: 0 0 8px;
  }
  .rel_box01 {
    background-color: #1B73BA;
    width: auto;
  }
  .rel_box01 p {
    background-color: #333333;
    color: white;
    font-size: 16px;
    line-height: 1.6;
    padding: 8px;
  }
  .rel_box01 pre {
    background-color: #333333;
    color: white;
    font-size: 16px;
    line-height: 1.6;
    padding: 8px;
  }
  .rel_box01 .ttl {
    background-color: #017a07;
    box-shadow: 0px 2px 2px rgba(0,0,0,0.2);
    -moz-box-shadow: 0px 2px 2px rgba(0,0,0,0.2);
    -webkit-box-shadow: 0px 2px 2px rgba(0,0,0,0.2);
    color: #FFFFFF;
    font-size: 16px;
    line-height: 1.0;
    padding: 8px;
    position: relative;
  }

  /* 三角形 */
  .rel_box01 .ttl:before {
    border: 7px solid transparent;
    border-top: 7px solid #017a07;
    box-sizing: border-box;
    content: "";
    height: 7px;
    left: 50%;
    margin:0 0 0 -7px;
    position: absolute;
    top: 100%;
    width: 14px;
  }
</style>
