import request from '@/utils/request'

export function getProductList (data) {
  return request('/wx/product/getProduct', data)
}

export function getPreOrderInfo (data) {
  return request('/wx/charge/preOrder', data)
}
