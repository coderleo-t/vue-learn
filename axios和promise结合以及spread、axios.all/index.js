import axios from 'axios'

// 全局配置：
// axios.defaults.baseURL = 'http://123.207.32.32:8000'
// axios.defaults.timeout = 5

// 局部配置
const instance = axios.create({
	baseURL: 'http://123.207.32.32:8000',
	timeout: 1000
})
// 普通get请求
axios({
	url:'http://123.207.32.32:8000/home/multidata',
	method: 'get'
  }).then(res => {

	})

// 当全部响应完后再执行then
axios.all([
	axios({
		url:'/home/multidata',
	}),
	axios({
		url:'/home/data',

		// 发送请求传递的参数
		params: {
			type: 'sell',
			page: 5
		}
	})
])//.then(result => {  //result是一个数组保存两次请求后返回的值

//}) 
// 也可以手动使这个数组分一为二
.then(axios.spread((res1, res2) => {  
   
}))
