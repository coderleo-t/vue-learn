import Toast from './Toast.vue'

const obj = {}

// 在vue执行install方法时会传入Vue实例进来
obj.install = function(Vue) {
  // 创建组件构造器
  const toastConstructor = Vue.extend(Toast)

  // 创建组件对象
  const toast = new toastConstructor()

  toast.$mount(document.createElement('div'))

  document.body.appendChild(toast.$el)

  // 以后要想显示Toast组件只用调用组件里面的方法就可以了
  Vue.prototype.$toast = toast
}

export default obj