import request from '@/utils/request'

export function login (jscode) {
  return request(`/wx/user/miniLogin?code=${jscode}`)
}

export function subscribe (yqqNo) {
  return request(`/wechat/mini/subscription/${yqqNo}`, null , 'GET')
}
