<template>
  <nav class="navbar navbar-expand-sm navbar-light bg-light">
    <div class="container">
      <router-link class="navbar-brand" to="/">Simpin</router-link>
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>

      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav mr-auto">
          <router-link to="/" tag="li" class="nav-item d-sm-none" data-toggle="collapse" aria-controls="navbarSupportedContent" data-target="#navbarSupportedContent" aria-expanded="false">
            <a class="nav-link" href="#">Инструкции</a>
          </router-link>

          <router-link to="/" tag="li" class="nav-item d-none d-sm-inline">
            <a class="nav-link" href="#">Инструкции</a>
          </router-link>

          <router-link to="/about" tag="li" class="nav-item d-sm-none" data-toggle="collapse" aria-controls="navbarSupportedContent" data-target="#navbarSupportedContent" aria-expanded="false">
            <a class="nav-link" href="#">О приложении</a>
          </router-link>

          <router-link to="/about" tag="li" class="nav-item d-none d-sm-inline">
            <a class="nav-link" href="#">О приложении</a>
          </router-link>
        </ul>

        <button v-if="user" class="nav-link d-sm-none btn btn-sm btn-light border text-muted" title="Выйти" @click="logOut" data-toggle="collapse" aria-controls="navbarSupportedContent" data-target="#navbarSupportedContent" aria-expanded="false">Выйти</button>

        <router-link v-else to="/login" tag="button" class="nav-link d-sm-none btn btn-sm btn-light border text-muted" title="Войти" data-toggle="collapse" aria-controls="navbarSupportedContent" data-target="#navbarSupportedContent" aria-expanded="false">Войти</router-link>

        <button v-if="user" class="nav-link d-none d-sm-inline btn btn-sm btn-light border text-muted" title="Выйти" @click="logOut">Выйти</button>

        <router-link v-else to="/login" tag="button" class="nav-link d-none d-sm-inline btn btn-sm btn-light border text-muted" title="Войти">Войти</router-link>
      </div>
    </div>
  </nav>
</template>

<script>
import { auth } from "@/main.js";

export default {
  computed: {
    user() {
      return this.$store.getters.user;
    }
  },
  methods: {
    logOut() {
      auth
        .signOut()
        .then(() => {
          this.$store.dispatch("logOut");
        })
        .catch(function(error) {
          console.error(error);
        });
    }
  }
};
</script>
<style scoped>
.container {
  max-width: 720px;
}
</style>

