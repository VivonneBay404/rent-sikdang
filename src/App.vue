<template>
  <v-app>
    <v-app-bar app>
      <v-row justify="space-between">
        <v-col>
          <router-link to="/sikdang">식당</router-link> |
          <router-link to="/about">About</router-link>
        </v-col>
        <v-col v-if="$store.getters.token">
          <v-avatar color="primary">
            <v-icon dark> mdi-account-circle </v-icon>
          </v-avatar>
        </v-col>
        <v-col v-else>
          <LoginDialog />
        </v-col>
      </v-row>
    </v-app-bar>

    <!-- Sizes your content based upon application components -->
    <v-main>
      <!-- Provides the application the proper gutter -->

      <!-- If using vue-router -->
      <router-view></router-view>
    </v-main>
  </v-app>
</template>

<script>
import LoginDialog from "./components/LoginDialog.vue";
export default {
  components: {
    LoginDialog,
  },
};
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
