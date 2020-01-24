<template>
  <div class="row home justify-content-center">
    <div class="col-12 col-sm-8 col-md-6 col-xl-4 text-left mt-4">
      <h4 class="text-center">Авторизуйтесь</h4>
      <label for="email">Email:</label>
      <br />
      <input type="text" class="form-control" id="email" v-model="email" />
      <br />
      <label for="password">Password:</label>
      <input type="password" class="form-control" id="password" v-model="password" />
      <br />
      <div class="row">
        <div class="col-6 d-none">
          <button class="btn btn-success btn-block">Регистрация</button>
        </div>
        <div class="col-12">
          <button class="btn btn-success btn-block" @click="login">Вход</button>
        </div>
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
    }
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
  }
};
</script>
