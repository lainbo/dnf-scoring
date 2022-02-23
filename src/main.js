import Vue from 'vue'
import App from './App.vue'
import ElementUI from 'element-ui'
import './plugins/lodash'
import 'element-ui/lib/theme-chalk/index.css'
import 'windi.css'
import './styles/global.scss'
Vue.config.productionTip = false
Vue.use(ElementUI)
new Vue({
  render: h => h(App)
}).$mount('#app')
