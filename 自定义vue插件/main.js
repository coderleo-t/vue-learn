import ProductPlugin from './ProductPlugin'
import Vue from 'vue'

// 当执行这行时会执行ProductPlugin的install方法
Vue.use(ProductPlugin)

const vue = new Vue({

}).$mount('#app')