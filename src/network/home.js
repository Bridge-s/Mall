import {request} from './request'

export function getHomeMultidata() {
  // 请求数据
  return request({
    url: '/home/multidata'
  })
}


