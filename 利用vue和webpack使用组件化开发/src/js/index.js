import './../css/index.css'
// 在node中导入Vue
import Vue from 'vue'

// 导入vue的模板
import App from './../vue/App.vue'


// 创建v实例，template的内容将会填充到#app控制的标签里面
new Vue({
  el:'#app',
  template:`<App></App>`,
  components:{
    App
  }
})