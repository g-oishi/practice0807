<template>
  <v-app>
    <v-navigation-drawer app :value="drawer" clipped width=290px>
      <v-container>
        <v-list-item>
          <v-list-item-content>
            <v-list-item-title class="title blue--text text--darken-4">
              Contents
            </v-list-item-title>
          </v-list-item-content>
        </v-list-item>

        <v-divider></v-divider>

        <v-list nav>
          <v-list-item
            v-for="navList in navLists"
            :key="navList.name"
            :to="{path: navList.link, hash: navList.hash}"
            color="blue accent-3"
          >
            <v-list-item-content>
              <v-list-item-title>{{ navList.name }}</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-list>
      </v-container>
    </v-navigation-drawer>

    <v-app-bar dark app clipped-left dense src="../img/Starry-night-stars-nature_1920x1080.jpg">
      <v-toolbar-title>自作Webサイト公開までの手引（Vue.js）</v-toolbar-title>
      <template v-slot:extension>
        <v-tabs color="yellow">
          <v-tab
            style="text-transform: none"
            to="/"
          >Home</v-tab>
          <v-tab
            style="text-transform: none"
            to="/raspios"
          >Raspberry Pi</v-tab>
          <v-tab
            style="text-transform: none"
            to="/nginx"
          >Nginx</v-tab>
          <v-tab
            style="text-transform: none"
            to="/release"
          >Webサイト公開</v-tab>
        </v-tabs>
      </template>
    </v-app-bar>
    <v-content>
      <router-view></router-view>
    </v-content>
    <v-footer color="deep-purple darken-4" dark app>
      <v-row justify=end>
        <v-card color="deep-purple darken-4" flat>
          written by g.oishi
        </v-card>
      </v-row>
    </v-footer>
  </v-app>
</template>

<script>
export default {
  computed: {
    drawer () {
      return this.$store.getters.drawer
    },
    navLists () {
      return this.$store.getters.navLists
    }
  }
}
</script>
