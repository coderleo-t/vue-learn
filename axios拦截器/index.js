import axios from 'axios'

// 局部配置axios
const instance = axios.create({
  baseURL: 'http://123.207.32.32:8000',
  timeout: 5000
})


// 请求拦截
instance.interceptors.request.use(config => {
  return config   //将拦截的请求返回出去让它继续请求
}, err => {
  console.log(err)
})

// 响应拦截
instance.interceptors.response.use(res => {
  console.log(res)
}, err => {
  console.log(err)
})
