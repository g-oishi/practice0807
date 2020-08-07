<template>
  <div class="home">
    <!-- <img alt="Vue logo" src="../assets/logo.png"> -->
    <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
    <h1 class="home_h01">サイト概要</h1>
    <p>
      Raspberry Piを用いたWebサーバー構築の手順を紹介します。<br>
      画面上部のタブを切り替えて、各手順をご覧ください。
    </p>
    <li>Raspberry Pi： Raspberry PiのOSセットアップや各種設定の方法</li>
    <li>Nginx： Raspberry PiでのNginx（Webサーバー）セットアップ方法</li>
    <li>Webサイト公開： 自作したWebサイトを公開する方法</li>
    <div style="height:30px"></div>
    <h1 class="home_h01">更新履歴</h1>
    <ul class="home_newslist01">
      <li>
        <div style="padding: 10px 10px 10px 10px">
          <time datetime="2020-7-15">2020.07.15</time>
          <p class="cat01">新規</p>
        </div>
        <p>g.oishi：Webサイト作成開始</p>
      </li>
      <li>
        <div style="padding: 10px 10px 10px 10px">
          <time datetime="2020-7-31">2020.07.31</time>
          <p class="cat02">公開</p>
        </div>
        <p>g.oishi：Webサイト公開テスト</p>
      </li>
    </ul>
  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'

export default {
  // name: 'Home',
  // components: {
  //   HelloWorld
  // },
  methods: {
    setHomeLists () {
      this.$store.commit('setDrawer', false)
      this.$store.commit('setNavLists', null)
    }
  },
  created: function () {
    this.setHomeLists()
  }
}
</script>

<style scoped>
  .home {
    font-size: 16px;
    padding: 15px 15px 0 15px;
  }
  .home_h01 {
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
  .home_newslist01 {
    width: 98%;
    list-style: none;
  }
  .home_newslist01 li {
    font-size: 16px;
    background-color: #F3F3F3;
  }
  .home_newslist01 li:nth-child(odd) {
    background-color: #E6E6E6;
  }
  .home_newslist01 li a {
    box-sizing: border-box;
    color: #000000;
    display: table;
    padding: 10px;
    text-decoration: none;
    transition: 0.2s ease-in-out;
    -o-transition: 0.2s ease-in-out;
    -moz-transition: 0.2s ease-in-out;
    -webkit-transition: 0.2s ease-in-out;
    width: 100%;
  }
  .home_newslist01 li a:hover {
    text-decoration: none;
    background-color: #FDFDFD;
  }

  .home_newslist01 li div {
    display: table-cell;
    width: 144px;
  }
  .home_newslist01 li p {
    display: table-cell;
    padding-left: 20px;
    vertical-align: middle;
  }

  /* 時間の設定 */
  .home_newslist01 li time {
    display: table-cell;
    vertical-align: top;
    width: 90px;
  }

  /* カテゴリの設定 */
  .home_newslist01 li .cat01,
  .home_newslist01 li .cat02 {
    background-color: #1B73BA;
    border-radius: 1px;
    color: #FFFFFF;
    font-size: 12px;
    padding: 0 2px;
    text-align: center;
    width: 60px;
  }
  .home_newslist01 li .cat02 {
    background-color: #0E3A5F;
  }
</style>
