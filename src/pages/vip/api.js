import request from '@/utils/request'

export function getUserInfo () {
  return request('/wx/user/info', null, 'GET')
}
