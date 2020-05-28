import request from '@/utils/request'

export function getRechargeRecord (data) {
  return request('/wx/order/user', data)
}

export function orderPayAgain (data) {
  return request('/wx/charge/again/pay', data)
}

export function cancelOrder (data) {
  return request('/wx/charge/cancelOrder', data)
}