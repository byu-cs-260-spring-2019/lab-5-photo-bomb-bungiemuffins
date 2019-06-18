import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from "./store";
import firebase from 'firebase';
//maybe fix
import axios from 'axios';

Vue.config.productionTip = false;

//maybe fix
Vue.prototype.$http = axios;

var firebaseConfig = {
  apiKey: "AIzaSyBKjMKzjSyNZVE-oCQbRY60wwgq83yC9Xk",
  authDomain: "cs260-other-kimball.firebaseapp.com",
  databaseURL: "https://cs260-other-kimball.firebaseio.com",
  projectId: "cs260-other-kimball",
  storageBucket: "cs260-other-kimball.appspot.com",
  messagingSenderId: "1028671439542",
  appId: "1:1028671439542:web:d9acb7492fbb3609"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

new Vue({
  router,
  store,
  render: function (h) { return h(App) }
}).$mount('#app')

firebase.auth().onAuthStateChanged(user => {
  if(user){
    store.commit('setUser',user);
  }
  else {
    store.commit('setUser',null);
  }
});

