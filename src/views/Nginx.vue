<template>
  <div class="nginx">
    <h1 class="nginx_h01">概要</h1>
    <p>
      Raspberry PiにNginx（Webサーバー）をインストールする手順を説明します。
    </p>
    <div style="height:40px"></div>

    <h2 class="nginx_h02" id="content01">{{ navListsNginx[0].name }}</h2>
    <p>
      ユーザーをrootに切り替えます。
    </p>
    <p>
      Raspberry PiのターミナルあるいはRaspberry PiにSSH接続中のPCのターミナルにて以下のコマンドを入力し、rootのパスワードを設定してください。
    </p>
    <div class="nginx_box01">
      <h3 class="ttl">ターミナル</h3>
      <p>
        $ sudo passwd root
      </p>
    </div>
    <p>
      <br>
      rootパスワードを変更した後、以下のコマンドでrootユーザーに切り替えてください。
    </p>
    <div class="nginx_box01">
      <h3 class="ttl">ターミナル</h3>
      <p>
        $ su
      </p>
    </div>
    <p>
      このときパスワードを要求されるので、先ほど設定したパスワードを入力します。
    </p>
    <div style="height:60px"></div>

    <h2 class="nginx_h02" id="content02">{{ navListsNginx[1].name }}</h2>
    <p>
      Nginxのソースパッケージをビルドするのに必要なツールをインストールします。
    </p>
    <p>
      以下のコマンドでツールパッケージ"build essential"をインストールしてください。
    </p>
    <div class="nginx_box01">
      <h3 class="ttl">ターミナル</h3>
      <p>
        $ apt install build-essential
      </p>
    </div>
    <div style="height:60px"></div>

    <h2 class="nginx_h02" id="content03">{{ navListsNginx[2].name }}</h2>
    <p>
      Nginxの前提条件パッケージをインストールします。
    </p>
    <p>
      以下のコマンドでパッケージ"gnupg2"をインストールしてください。
    </p>
    <div class="nginx_box01">
      <h3 class="ttl">ターミナル</h3>
      <p>
        $ apt install curl gnupg2 ca-certificates lsb-release
      </p>
    </div>
    <div style="height:60px"></div>

    <h2 class="nginx_h02" id="content04">{{ navListsNginx[3].name }}</h2>
    <p>
      Nginx公式サイトのリポジトリ情報を追加します。
    </p>
    <p>
      初めに、以下のコマンドで公式サイトのPGP公開鍵を登録してください。
    </p>
    <div class="nginx_box01">
      <h3 class="ttl">ターミナル</h3>
      <p>
        $ wget -O - http://nginx.org/keys/nginx_signing.key | apt-key add -
      </p>
    </div>
    <p>
      <br>
      次に、Nginxソースパッケージのリポジトリ情報を追加してください。
    </p>
    <div class="nginx_box01">
      <h3 class="ttl">ターミナル</h3>
      <p>
        $ echo "deb-src http://nginx.org/packages/mainline/debian `lsb_release -cs` nginx" >> /etc/apt/sources.list.d/nginx.list
      </p>
    </div>
    <p>
      <br>
      最後に、パッケージリストの更新を行ってください。
    </p>
    <div class="nginx_box01">
      <h3 class="ttl">ターミナル</h3>
      <p>
        $ apt update
      </p>
    </div>
    <div style="height:60px"></div>

    <h2 class="nginx_h02" id="content05">{{ navListsNginx[4].name }}</h2>
    <p>
      Nginxのソースパッケージをビルドする際に必要な依存パッケージをインストールします。
    </p>
    <p>
      以下のコマンドでインストールを実行してください。
    </p>
    <div class="nginx_box01">
      <h3 class="ttl">ターミナル</h3>
      <p>
        $ apt build-dep nginx
      </p>
    </div>
    <div style="height:60px"></div>

    <h2 class="nginx_h02" id="content06">{{ navListsNginx[5].name }}</h2>
    <p>
      Nginxのソースパッケージをダウンロード・インストールします。
    </p>
    <p>
      ソースパッケージのダウンロード及びビルド作業を行うためのディレクトリを作成して、ここに移動します。<br>
      初めに、以下のリンク先で最新（Mainline version）の版数を確認してください（2020/07/28時点では1.19.1）。
    </p>
    <a href="https://nginx.org/en/download.html" target="_blank">Nginx Version リスト</a>
    <p>
      <br>
      以下のコマンドを順番に実行して、ディレクトリの作成及び移動を行ってください。<br>
      下記の版数は2020/07/28時点の最新になっていますが、この値は上記で確認した最新の版数に変更して実行してください。
    </p>
    <div class="nginx_box01">
      <h3 class="ttl">ターミナル</h3>
      <p>
        $ mkdir /usr/local/src/nginx<br>
        $ mkdir /usr/local/src/nginx/1.19.1<br>
        $ chmod 777 /usr/local/src/nginx/1.19.1<br>
        $ cd /usr/local/src/nginx/1.19.1
      </p>
    </div>
    <p>
      <br>
      次に、Nginxのソースパッケージをダウンロードしてください。
    </p>
    <div class="nginx_box01">
      <h3 class="ttl">ターミナル</h3>
      <p>
        $ apt source nginx
      </p>
    </div>
    <p>
      <br>
      ダウンロード後、ビルド作業を行うためにダウンロードしたソースパッケージのディレクトリに移動してください。
    </p>
    <div class="nginx_box01">
      <h3 class="ttl">ターミナル</h3>
      <p>
        $ cd nginx-1.19.1
      </p>
    </div>
    <p>
      <br>
      ビルドコマンドを実行してください。
    </p>
    <div class="nginx_box01">
      <h3 class="ttl">ターミナル</h3>
      <p>
        $ dpkg-buildpackage -uc -b
      </p>
    </div>
    <p>
      <br>
      ビルド実行後、親ディレクトリにDebパッケージファイルが作成されていることを確認してください。
    </p>
    <div class="nginx_box01">
      <h3 class="ttl">ターミナル</h3>
      <p>
        $ cd..<br>
        $ ls
      </p>
    </div>
    <p>
      <b><font color="red">"nginx_1.19.1-1~buster_armhf.deb"</font></b>という名称のファイルが確認できればOKです（版数は作業時点の最新）。
    </p>
    <div style="height:60px"></div>

    <h2 class="nginx_h02" id="content07">{{ navListsNginx[6].name }}</h2>
    <p>
      前回の手順で作成されたDebパッケージファイルをインストールします。
    </p>
    <p>
      以下のコマンドでインストールを実行してください。
    </p>
    <div class="nginx_box01">
      <h3 class="ttl">ターミナル</h3>
      <p>
        $ apt install ./nginx_1.19.1-1~buster_armhf.deb
      </p>
    </div>
    <div style="height:60px"></div>

    <h2 class="nginx_h02" id="content08">{{ navListsNginx[7].name }}</h2>
    <p>
      インストールされたNginxのバージョンと、その起動設定を確認します。
    </p>
    <p>
      以下のコマンドでバージョン確認を行ってください。
    </p>
    <div class="nginx_box01">
      <h3 class="ttl">ターミナル</h3>
      <p>
        $ nginx -V
      </p>
    </div>
    <p>
      <br>
      次に、Nginxの起動状態を確認するために以下のコマンドを実行してください。
    </p>
    <div class="nginx_box01">
      <h3 class="ttl">ターミナル</h3>
      <p>
        $ systemctl status nginx
      </p>
    </div>
    <p>
      <b><font color="red">"Active: active (running)"</font></b>と表示されていれば起動状態です。
    </p>
    <p>
      <br>
      起動していない場合は、以下のコマンドで起動してください。
    </p>
    <div class="nginx_box01">
      <h3 class="ttl">ターミナル</h3>
      <p>
        $ systemctl start nginx
      </p>
    </div>
    <p>
      <br>
      続けて、Nginxの自動起動設定を確認するために以下のコマンドを実行してください。
    </p>
    <div class="nginx_box01">
      <h3 class="ttl">ターミナル</h3>
      <p>
        $ systemctl is-enabled nginx
      </p>
    </div>
    <p>
      <b><font color="red">"enabled"</font></b>と表示されていれば自動起動が設定されている状態です。
    </p>
    <p>
      <br>
      自動起動が設定されていない場合は、以下のコマンドで起動してください。
    </p>
    <div class="nginx_box01">
      <h3 class="ttl">ターミナル</h3>
      <p>
        $ systemctl enable nginx
      </p>
    </div>
    <div style="height:60px"></div>

    <h2 class="nginx_h02" id="content09">{{ navListsNginx[8].name }}</h2>
    <p>
      最後に動作確認を行います。
    </p>
    <p>
      Raspberry Piと同じネットワーク上のPCにてブラウザを起動し、Raspberry PiのIPアドレスを指定してアクセスしてください。<br>
      <b>"Welcome to nginx!"</b>と書いてあるページ（初期画面）が表示されたら確認完了です。
    </p>
    <div style="height:30px"></div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      navListsNginx: [
        {
          name: 'rootユーザーへの切り替え',
          link: '/nginx',
          hash: '#content01'
        },
        {
          name: 'パッケージ構築の必須ツール',
          link: '/nginx',
          hash: '#content02'
        },
        {
          name: '前提条件パッケージ',
          link: '/nginx',
          hash: '#content03'
        },
        {
          name: 'リポジトリ情報追加',
          link: '/nginx',
          hash: '#content04'
        },
        {
          name: '依存パッケージ',
          link: '/nginx',
          hash: '#content05'
        },
        {
          name: 'ソースパッケージ',
          link: '/nginx',
          hash: '#content06'
        },
        {
          name: 'Debパッケージ',
          link: '/nginx',
          hash: '#content07'
        },
        {
          name: 'バージョン及び起動設定の確認',
          link: '/nginx',
          hash: '#content08'
        },
        {
          name: '動作確認',
          link: '/nginx',
          hash: '#content09'
        }
      ]
    }
  },
  methods: {
    setNginxLists () {
      this.$store.commit('setDrawer', true)
      this.$store.commit('setNavLists', this.navListsNginx)
    }
  },
  created: function () {
    this.setNginxLists()
  }
}
</script>

<style scoped>
  .nginx {
    font-size: 16px;
    padding: 15px 15px 0 15px;
  }
  .nginx_h01 {
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
  .nginx_h02 {
    border-bottom:1px solid #999999;
    color: #333;
    font-size: 20px;
    margin: 0 0 20px;
    padding: 0 0 8px;
  }
  .nginx_box01 {
    background-color: #1B73BA;
    width: auto;
  }
  .nginx_box01 p {
    background-color: #333333;
    color: white;
    font-size: 16px;
    line-height: 1.6;
    padding: 8px;
  }
  .nginx_box01 .ttl {
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
  .nginx_box01 .ttl:before {
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
