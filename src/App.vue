<template>
  <v-app>
    <v-app-bar app>
      <v-btn text class="mx-4" @click="$router.push('/sikdang')"> 식당</v-btn>
      <v-btn text class="mx-4" @click="$router.push('/about')"> About us</v-btn>

      <v-spacer></v-spacer>
      <div v-if="$store.getters.token">
        <v-avatar color="primary" @click="$router.push('/user')">
          <v-icon dark> mdi-account-circle </v-icon>
        </v-avatar>
      </div>
      <div v-else>
        <LoginDialog />
      </div>
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
  created() {
    this.$store.dispatch("tryLogin");
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
