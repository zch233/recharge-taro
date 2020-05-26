import request from '@/utils/request'

export function orderPayAgain (data) {
  return request('/wx/charge/again/pay', data)
}

export function cancelOrder (data) {
  return request('/wx/charge/cancelOrder', data)
}
