<template>
  <div class="raspios">
    <h1 class="raspi_h01">概要</h1>
    <p>
      Raspberry PiのOSセットアップからSSH接続までの手順を説明します。
    </p>
    <div style="height:40px"></div>

    <h2 class="raspi_h02" id="content01">{{ navListsRaspi[0].name }}</h2>
    <li>Raspberry Pi（今回は<b>Raspberry Pi 4B (4GB) </b>を用いた例を紹介します）</li>
    <li>microSDカード</li>
    <li>電源アダプター</li>
    <li>ディスプレイ（接続用のHDMIケーブル含む）</li>
    <li>USBマウス</li>
    <li>USBキーボード</li>
    <li>LANケーブル（今回は有線でネットワークに接続します）</li>
    <li>PC（インターネットに接続できるもの）</li>
    <li>microSDカードをPCに接続するためのアダプター</li>
    <div style="height:60px"></div>

    <h2 class="raspi_h02" id="content02">{{ navListsRaspi[1].name }}</h2>
    <p>
      PCにmicroSDカードを接続して、フォーマットを実行します。<br>
    </p>
    <p>
      フォーマット形式を選択できるソフトを使用して<b><font color="red">FAT32形式</font></b>で実行してください。<br>
      私はSDメモリカードフォーマッターを使用しました。
    </p>
    <a href="https://www.sdcard.org/jp/downloads/formatter/" target="_blank">SDメモリカードフォーマッター – SD Association</a>
    <div style="height:60px"></div>

    <h2 class="raspi_h02" id="content03">{{ navListsRaspi[2].name }}</h2>
    <p>
      OSのインストーラー「NOOBS」をダウンロードします。
    </p>
    <p>
      以下のリンク先で<b><font color="red">NOOBS Lite</font></b>のZipファイルをダウンロードしてください。
    </p>
    <a href="https://www.raspberrypi.org/downloads/noobs/" target="_blank">NOOBS ダウンロード</a>
    <div style="height:60px"></div>

    <h2 class="raspi_h02" id="content04">{{ navListsRaspi[3].name }}</h2>
    <p>
      microSDカードにNOOBS Liteを書き込みます。
    </p>
    <p>
      ダウンロードしたNOOBS LiteのZipファイルを解凍してください。<br>
      その後、解凍後フォルダの<b><font color="red">中身のみを</font></b>microSDカードのルート直下にコピーしてください。
    </p>
    <div style="height:60px"></div>

    <h2 class="raspi_h02" id="content05">{{ navListsRaspi[4].name }}</h2>
    <p>
      Raspberry Piを起動します。
    </p>
    <p>
      NOOBS Liteを書き込んだmicroSDカードをPCから取り出し、Raspberry Piに差し込んでください。<br>
      その後、Raspberry Piの各端子にディスプレイ・マウス・キーボード・LANケーブルを接続してください。<br>
      最後に電源アダプターを接続すると自動的に起動します。
    </p>
    <p>
      起動してしばらくディスプレイにカラフルな画面が表示され、その後OSのインストーラー画面が表示されたら成功です。
    </p>
    <div style="height:60px"></div>

    <h2 class="raspi_h02" id="content06">{{ navListsRaspi[5].name }}</h2>
    <p>
      Raspberry PiにOSをインストールします。
    </p>
    <p>
      起動直後はインストーラー画面の言語が英語になっていると思います。<br>
      この場合、画面下部のLanguageをEnglishから日本語に切り替えてください。
    </p>
    <p>
      画面に表示されているリストの中から<b><font color="red">「Raspberry Pi OS Lite (32-bit)」</font></b>にチェックを入れ、画面左上の「インストール」ボタンを押してOSのインストールを実行してください。
    </p>
    <p>
      「OSのインストールに成功しました」のメッセージが表示されたら成功です。<br>
      「OK」を押すとRaspberry Piが再起動します。<br>
      もし再起動しない場合は、一度電源アダプタを抜いた後に再度差し込んで電源を入れ直してください。
    </p>
    <div style="height:60px"></div>

    <h2 class="raspi_h02" id="content07">{{ navListsRaspi[6].name }}</h2>
    <p>
      Raspberry Piに固定のIPアドレスを設定します。
    </p>
    <p>
      Raspberry Piのターミナルにて以下のコマンドを入力し、IPアドレス設定を行うファイルを開いてください。
    </p>
    <div class="raspi_box01">
      <h3 class="ttl">ターミナル</h3>
      <p>
        $ sudo vi /etc/dhcpcd.conf
      </p>
    </div>
    <p>
      <br>
      開いたファイルの末尾に以下の内容を追加し、上書き保存してください。<br>
      ファイルの編集や保存の操作については、<a href="https://eng-entrance.com/linux-command-vi" target="_blank">こちらのサイト</a>などを参考にしてください。
    </p>
    <div class="raspi_box01">
      <h3 class="ttl">/etc/dhcpcd.conf の末尾</h3>
      <p>
        interface eth0<br>
        static ip_address=192.168.xxx.xxx<br>
        static routers=192.168.xxx.xxx<br>
        static domain_name_servers=192.168.xxx.xxx
      </p>
    </div>
    <p>
      ip_addressには設定する固定IPアドレスを、routersとdomain_name_serversにはルーターのIPアドレスを入力します。
    </p>
    <p>
      <br>
      上書き保存後、設定を反映させるために以下のコマンドで再起動を実行してください。
    </p>
    <div class="raspi_box01">
      <h3 class="ttl">ターミナル</h3>
      <p>
        $ sudo shutdown -r now
      </p>
    </div>
    <p>
      <br>
      再起動後、以下のコマンドで固定IPアドレスが正しく設定されていることを確認してください。
    </p>
    <div class="raspi_box01">
      <h3 class="ttl">ターミナル</h3>
      <p>
        $ ifconfig
      </p>
    </div>
    <div style="height:60px"></div>

    <h2 class="raspi_h02" id="content08">{{ navListsRaspi[7].name }}</h2>
    <p>
      Raspberry PiのSSH設定を行います。
    </p>
    <p>
      Raspberry Piのターミナルにて以下のコマンドを入力し、設定メニューを開いてください。
    </p>
    <div class="raspi_box01">
      <h3 class="ttl">ターミナル</h3>
      <p>
        $ sudo raspi-config
      </p>
    </div>
    <p>
      <br>
      開いた設定メニューにて、"5 Interfacing Options"→"P2 SSH"の順で選択してください。<br>
      すると"Would you like the SSH server to be enabled?"と聞かれるので、"はい”を選んでください。
    </p>
    <p>
      "The SSH server is enabled"というメッセージが表示されたら、SSHの設定は完了です。
    </p>
    <div style="height:60px"></div>

    <h2 class="raspi_h02" id="content09">{{ navListsRaspi[8].name }}</h2>
    <p>
      Raspberry PiへのSSH接続テストを行います。
    </p>
    <p>
      Raspberry Piと同じネットワーク上のPCにて、ターミナルに以下のコマンドを入力してください。
    </p>
    <div class="raspi_box01">
      <h3 class="ttl">ターミナル（SSH接続用PC）</h3>
      <p>
        $ ssh pi@192.168.xxx.xxx
      </p>
    </div>
    <p>
      IPアドレスはRaspberry Piに設定した固定IPアドレスです。<br>
      上記コマンド入力により、SSH通信でユーザー名"Pi"としてRaspberry Piにログインを試みます。
    </p>
    <p>
      パスワードを要求されるので、"raspberry"と入力してください（規定のパスワード）。<br>
      接続に成功すると、ターミナルの現在行には
    </p>
    <div class="raspi_box01">
      <h3 class="ttl">ターミナル（SSH接続用PC）</h3>
      <p>
        pi@raspberrypi ~ $
      </p>
    </div>
    <p>
      といったように表示されます。
    </p>
    <p>
      以後はPCからRaspberry Piの操作が出来るため、Raspberry Piに接続しているディスプレイやマウス、キーボードは<br>
      外してもらっても構いません。
    </p>
    <div style="height:60px"></div>

    <h2 class="raspi_h02" id="content10">{{ navListsRaspi[9].name }}</h2>
    <p>
      Raspberry PiへのSSH接続を終了します。
    </p>
    <p>
      Raspberry PiはそのままでSSH通信のみ終了する場合は、PCのターミナルに以下のコマンドを入力してください。
    </p>
    <div class="raspi_box01">
      <h3 class="ttl">ターミナル（SSH接続用PC）</h3>
      <p>
        $ exit
      </p>
    </div>
    <p>
      <br>
      Raspberry Piをシャットダウンする場合は、以下のコマンドを入力してください。
    </p>
    <div class="raspi_box01">
      <h3 class="ttl">ターミナル（SSH接続用PC）</h3>
      <p>
        $ sudo shutdown -h now
      </p>
    </div>
    <div style="height:30px"></div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      navListsRaspi: [
        {
          name: '準備するもの',
          link: '/raspios',
          hash: '#content01'
        },
        {
          name: 'microSDカードのフォーマット',
          link: '/raspios',
          hash: '#content02'
        },
        {
          name: 'NOOBSダウンロード',
          link: '/raspios',
          hash: '#content03'
        },
        {
          name: 'NOOBS書き込み',
          link: '/raspios',
          hash: '#content04'
        },
        {
          name: 'Raspberry Piの起動',
          link: '/raspios',
          hash: '#content05'
        },
        {
          name: 'OSインストール',
          link: '/raspios',
          hash: '#content06'
        },
        {
          name: '固定IPアドレスの設定',
          link: '/raspios',
          hash: '#content07'
        },
        {
          name: 'SSH設定',
          link: '/raspios',
          hash: '#content08'
        },
        {
          name: 'SSH接続テスト',
          link: '/raspios',
          hash: '#content09'
        },
        {
          name: 'SSH接続終了',
          link: '/raspios',
          hash: '#content10'
        }
      ]
    }
  },
  methods: {
    setRaspiLists () {
      this.$store.commit('setDrawer', true)
      this.$store.commit('setNavLists', this.navListsRaspi)
    }
  },
  created: function () {
    this.setRaspiLists()
  }
}
</script>

<style scoped>
  .raspios {
    font-size: 16px;
    padding: 15px 15px 0 15px;
  }
  .raspi_h01 {
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
  .raspi_h02 {
    border-bottom:1px solid #999999;
    color: #333;
    font-size: 20px;
    margin: 0 0 20px;
    padding: 0 0 8px;
  }
  .raspi_box01 {
    background-color: #1B73BA;
    width: auto;
  }
  .raspi_box01 p {
    background-color: #333333;
    color: white;
    font-size: 16px;
    line-height: 1.6;
    padding: 8px;
  }
  .raspi_box01 .ttl {
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
  .raspi_box01 .ttl:before {
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
