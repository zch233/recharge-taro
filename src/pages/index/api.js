import request from '@/utils/request'

export function login (jscode) {
  return request(`/wx/user/miniLogin?code=${jscode}`)
}
