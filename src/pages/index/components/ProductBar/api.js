import request from '@/utils/request'

export function getPreOrderInfo (data) {
  return request('/wx/charge/preOrder', data)
}
