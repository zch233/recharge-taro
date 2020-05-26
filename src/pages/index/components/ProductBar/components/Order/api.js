import request from '@/utils/request'

export function orderPay (data) {
  return request('/wx/charge/order', data)
}
