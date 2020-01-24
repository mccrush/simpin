<template>
  <div class="row justify-content-center">
    <div class="col-12 col-sm-8 col-md-6 col-xl-4 text-left">
      <h5 v-if="this.$store.state.authType == 'login'" class="mt-2 text-left">Вход</h5>
      <h5 v-if="this.$store.state.authType == 'signin'" class="mt-2 text-left">Регистрация</h5>
      <h5 v-if="this.$store.state.authType == 'restor'" class="mt-2 text-left">Восстановление пароля</h5>
      <hr />
      <label for="email">Email</label>
      <br />
      <input type="text" class="form-control" id="email" v-model="email" />
      <br />
      <label v-if="this.$store.state.authType !== 'restor'" for="password">Password</label>
      <input v-if="this.$store.state.authType !== 'restor'" type="password" class="form-control" id="password" v-model="password" />
      <br />

      <button v-if="this.$store.state.authType == 'login'" class="btn btn-success btn-block" @click="login">Войти</button>
      <button v-if="this.$store.state.authType == 'signin'" class="btn btn-success btn-block" @click="signin">Зарегистрироваться</button>
      <button v-if="this.$store.state.authType == 'restor'" class="btn btn-success btn-block" @click="restor">Восстановить пароль</button>

      <p class="text-center mt-2 text-small">
        <button v-if="this.$store.state.authType !== 'login'" class="btn btn-link d-inline" type="button" @click="showLoginForm">Вход</button>
        <span v-if="this.$store.state.authType !== 'login'">|</span>
        <button v-if="this.$store.state.authType !== 'signin'" class="btn btn-link d-inline" type="button" @click="showRegForm">Регистрация</button>
        <span v-if="this.$store.state.authType !== 'signin' && this.$store.state.authType !== 'restor'">|</span>
        <button v-if="this.$store.state.authType !== 'restor'" class="btn btn-link d-inline" type="button" @click="showRestorForm">Восстановление пароля</button>
      </p>
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
      password: ""
    };
  },
  methods: {
    login() {
      auth
        .signInWithEmailAndPassword(this.email, this.password)
        .then(user => {
          //this.$store.commit("setUser", user.user.uid);
          this.$router.push("/create/1");
        })
        .catch(function(error) {
          var errorCode = error.code;
          var errorMessage = error.message;
          alert("Login: errors:", errorCode, "& ", errorMessage);
        });
    },
    // signin() {
    //   auth
    //     .createUserWithEmailAndPassword(this.email, this.password)
    //     .then(() => {
    //       this.$store.commit("setUser");
    //       this.$router.push("/about");
    //     })
    //     .catch(function(error) {
    //       var errorCode = error.code;
    //       var errorMessage = error.message;
    //       alert("Signin: errors:", errorCode, "& ", errorMessage);
    //     });
    // }
    signin() {},
    restor() {},
    showLoginForm() {
      this.$store.commit("setAuthType", { type: "login" });
    },
    showRegForm() {
      this.$store.commit("setAuthType", { type: "signin" });
    },
    showRestorForm() {
      this.$store.commit("setAuthType", { type: "restor" });
    }
  }
};
</script>
