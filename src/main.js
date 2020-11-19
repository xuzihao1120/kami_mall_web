// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
//引入 element-ui
import ElementUi from 'element-ui'
//引入element-ui 的css文件
import 'element-ui/lib/theme-chalk/index.css';
//声明使用 element-ui
Vue.use(ElementUi)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
