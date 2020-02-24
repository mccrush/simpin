<template>
  <div class="row justify-content-center">
    <div v-if="user" class="col-12 col-sm-8 col-md-6 col-xl-4 text-left">
      <h5>Вы уже авторизированы</h5>
      <hr />
      <button class="nav-link d-sm-inline btn btn-block btn-light border" title="Выйти" @click="logOut">Выйти из аккаунта</button>
      <router-link to="/" class="btn btn-block btn-light border">К списку инструкций</router-link>
    </div>
    <div v-else class="col-12 col-sm-8 col-md-6 col-xl-4 text-left">
      <h5 v-if="status === 'auth'">Вход</h5>
      <h5 v-if="status === 'reg'">Регистрация</h5>
      <h5 v-if="status === 'restor'">Сброс пароля</h5>
      <hr />
      <label for="email">Email</label>
      <br />
      <input type="text" class="form-control" id="email" v-model="email" />
      <br />
      <label v-if="status !== 'restor'" for="password">Password</label>
      <input v-if="status !== 'restor'" type="password" class="form-control" id="password" v-model="password" />
      <br />

      <button v-if="status === 'auth'" class="btn btn-success btn-block" @click="login">Войти</button>
      <button v-if="status === 'reg'" class="btn btn-success btn-block" @click="signin">Зарегистрироваться</button>
      <button v-if="status === 'restor'" class="btn btn-success btn-block" @click="restor">Сбросить пароль</button>

      <div class="btn-group btn-block" role="group" aria-label="Basic example">
        <button v-if="status !== 'auth'" class="btn btn-light border" type="button" @click="status = 'auth'">Вход</button>
        <button v-if="status !== 'reg'" class="btn btn-light border" type="button" @click="status = 'reg'">Регистрация</button>
        <button v-if="status !== 'restor'" class="btn btn-light border disabled" type="button">Сброс пароля</button>
      </div>
    </div>
  </div>
</template>

<script>
import { auth } from "@/main.js";
export default {
  name: "login",
  data() {
    return {
      email: "",
      password: "",
      status: "auth"
    };
  },
  computed: {
    user() {
      return this.$store.getters.user;
    }
  },
  created() {
    if (this.$route.query) {
      if (this.$route.query.status === "reg") {
        this.status = "reg";
      }
    } else {
      this.status = "auth";
    }
  },
  methods: {
    login() {
      auth
        .signInWithEmailAndPassword(this.email, this.password)
        .then(user => {
          this.$store.dispatch("logIn");
          this.$router.push("/");
        })
        .catch(function(error) {
          var errorCode = error.code;
          var errorMessage = error.message;
          alert("Login: errors:", errorCode, "& ", errorMessage);
        });
    },
    signin() {
      auth
        .createUserWithEmailAndPassword(this.email, this.password)
        .then(() => {
          this.$store.dispatch("logIn");
          this.$router.push("/");
        })
        .catch(function(error) {
          var errorCode = error.code;
          var errorMessage = error.message;
          alert("Signin: errors:", errorCode, "& ", errorMessage);
        });
    },
    logOut() {
      auth
        .signOut()
        .then(() => {
          this.$store.dispatch("logOut");
          this.status = "auth";
        })
        .catch(function(error) {
          console.error(error);
        });
    },
    restor() {}
  }
};
</script>
