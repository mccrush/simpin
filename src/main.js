import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'

import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'

import { apiKey } from '../apiKey'

import * as firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore"; // DB
import "firebase/storage"; // File


const firebaseConfig = {
  apiKey: apiKey,
  authDomain: "simpin-36cfc.firebaseapp.com",
  databaseURL: "https://simpin-36cfc.firebaseio.com",
  projectId: "simpin-36cfc",
  storageBucket: "simpin-36cfc.appspot.com",
  messagingSenderId: "994085733543",
  appId: "1:994085733543:web:3b082ee16c56d21c9e4782",
  measurementId: "G-DREGKW123K"
};

firebase.initializeApp(firebaseConfig);
export const db = firebase.firestore();
export const auth = firebase.auth();
export const storage = firebase.storage();

Vue.config.productionTip = false

// new Vue({
//   router,
//   store,
//   render: function (h) { return h(App) }
// }).$mount('#app')

let app = "";

firebase.auth().onAuthStateChanged((user) => {
  if (!app) {
    app = new Vue({
      router,
      store,
      render: function (h) { return h(App) }
    }).$mount('#app')
  }
  if (user) {
    store.dispatch("logIn");
  }
})