/*
 * @Author: xin.chen
 * @Date: 2020-08-05 17:42:33
 * @LastEditors: xin.chen
 * @LastEditTime: 2020-08-06 08:52:24
 * @Description: 
 */
import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
// elementUI导入
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'  // 注意样式文件需要单独引入

// 调用插件
Vue.use(ElementUI);
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: function (h) { return h(App) }
}).$mount('#app')
