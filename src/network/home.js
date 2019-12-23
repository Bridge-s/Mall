import {request} from './request'

export function getHomeMultidata() {
  // 请求数据
  return request({
    url: '/home/multidata'
  })
}

export function getHomeGoodsdata(type, page) {
  // 请求数据
  return request({
    url: '/home/data',
    params: {
      type,
      page
    }
  })
}
