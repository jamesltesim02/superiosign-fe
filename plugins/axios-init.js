import axios from 'axios'
import Config from '@/config/system.config'

console.log(axios.defaults)

axios.defaults.baseURL = Config.API_BASE_URL
axios.defaults.headers.post['Content-Type'] = 'application/json; charset=utf-8'

/**
 * 响应结果拦截器
 */
axios.interceptors.response.use(
  ({ data }) => {
    console.log(data)
    // 操作成功
    if (data.code === 200) {
      return data.data
    }

    return Promise.reject(data)
  },
  (e) => {
    console.log('network error.', e)
    return Promise.reject(e)
  }
)
