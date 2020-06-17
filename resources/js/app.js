 import Vue from 'vue'
 import router from './router.js'
 import SocialSharing from 'vue-social-sharing'
 import axios from 'axios' // 追加
 
 Vue.prototype.$http = axios; // 追加
 
 Vue.use(SocialSharing);
 
 new Vue({
   router: router,
  }).$mount('#app')
