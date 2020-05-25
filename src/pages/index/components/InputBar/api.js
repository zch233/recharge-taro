import request from '@/utils/request'

export function getPageData () {
  return request('/wx/country/getAll', null, 'GET')
}

export function getUsedPhoneList () {
  return request('/wx/user/msisdnList', null, 'GET')
}

export function getCarrierInfo ({ account, countryCode }) {
  return request(`/wx/carrier/getCarrierInfo/${countryCode}`, account)
}

export function getCarrierList (countryCode) {
  return request( `/wx/carrier/getCarriers/${countryCode}`, null, 'GET')
}
