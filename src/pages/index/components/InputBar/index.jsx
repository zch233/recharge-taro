import Taro, { useReducer, useEffect } from '@tarojs/taro'
import { View, Image } from '@tarojs/components'
import './index.scss'
import { AtInput } from 'taro-ui'
import CountryList from './components/CountryList/index'
import CarrierList from './components/CarrierList/index'
import UsedPhoneList from './components/UsedPhoneList/index'
import * as api from './api'
import countryMap from '@/utils/countryMap'
import JWT from 'jsonwebtoken'

const userInfo = JWT.decode(Taro.getStorageSync('token'))
const initialState = {
  rechargePhone: '',
  carrierName: '',
  carrierName: '',
  countryList: [],
  carrierList: [],
  usedPhoneList: [],
  currentCountry: {},
  currentCarrier: {},
  countryListVisible: false,
  carrierListVisible: false,
  phoneInputHighLight: false,
};
const reducer = (state, { type, payload }) => {
  const typeMap = {
    setRechargePhone: () => ({ ...state, rechargePhone: payload }),
    setCarrierName: () => ({ ...state, carrierName: payload }),
    setCarrierList: () => ({ ...state, carrierList: payload }),
    setCountryList: () => ({ ...state, countryList: payload }),
    setUsedPhoneList: () => ({ ...state, usedPhoneList: payload }),
    setCurrentCountry: () => ({ ...state, currentCountry: payload }),
    setCurrentCarrier: () => ({ ...state, currentCarrier: payload }),
    setCountryListVisible: () => ({ ...state, countryListVisible: payload }),
    setCarrierListVisible: () => ({ ...state, carrierListVisible: payload }),
    setPhoneInputHighLight: () => ({ ...state, phoneInputHighLight: payload }),
  };
  return typeMap[type]() || state;
};
const checkPhoneNumber = phone => {
  if (!phone) {
    return false
  } else if (!/\d{8}/.test(phone)) {
    Taro.showToast({
      title: '号码不能小于8位',
      icon: 'none',
      mask: true,
      duration: 2000,
    })
    return false
  } else if (/\d{16,}/.test(phone)) {
    Taro.showToast({
      title: '号码不能大于15位',
      icon: 'none',
      mask: true,
      duration: 2000,
    })
    return false
  } else {
    return true
  }
}
export default function InputBar ()  {
  const [state, setState] = useReducer(reducer, initialState);
  const phoneInputChange = value => {
    setState({ type: 'setRechargePhone', payload: value })
  }
  const handleInputBlur = () => {
    setState({ type: 'setPhoneInputHighLight', payload: false })
    if (!checkPhoneNumber(state.rechargePhone)) return
  }
  const selectCountry = country => {
    console.log(country)
    setState({ type: 'setCountryListVisible', payload: false })
    if (country.countryCode === state.currentCountry.countryCode) return
    setState({ type: 'setCurrentCountry', payload: country })
    setState({ type: 'setRechargePhone', payload: '' })
  }
  const getCarrierList = async countryCode => {
    const { result } = await api.getCarrierList(countryCode)
      setState({ type: 'setCarrierList', payload: result || [] })
  }
  const selectCarrier = carrier => {
    setState({ type: 'setCurrentCarrier', payload: carrier })
  }
  const getProductListOrCarrierListWithCarrierInfo = async carrierInfo => {
    if (carrierInfo) {
      setState({ type: 'setCurrentCarrier', payload: carrierInfo })
    } else {
      await getCarrierList(this.displayCountryCode)
      setState({ type: 'setCarrierVisible', payload: true })
    }
  }
  const getCarrierInfo = async (countryCode, account) => {
    if (!this.checkPhoneNumber()) {
      this.emptyTips = '请选择国家输入号码'
      return
    } else {
      this.emptyTips = '请选择运营商'
    }
    const { result: carrierInfo } = await api.getCarrierInfo({ countryCode, account })
    getProductListOrCarrierListWithCarrierInfo(carrierInfo)
  }
  const getSelectedCountryFromCountryMap = (countryCode, countryList) => {
    let selectedCountry = {}
    countryList.map(v => {
      if (v.countryCode === countryCode) {
        selectedCountry = v
      }
    })
    return Object.keys(selectedCountry).length === 0 ? countryList[0] : selectedCountry
  }
  const getUsedPhoneList = async () => {
    const { result } = await api.getUsedPhoneList()
    result.map(v => {
      countryMap.map(v2 => {
        if (v.countryCode === v2.ab) {
          v.cname = v2.country_name_cn
          v.areaNumber = v2.country_code
        }
      })
    })
    setState({ type: 'setUsedPhoneList', payload: result })
  }
  const chooseUsedPhoneNumber = data => {
    console.log(data)
    setState({ type: 'setPhoneInputHighLight', payload: false })
  }
  const getPageData = async () => {
    const { result } = await api.getPageData()
    const countryList = result.countryList.map(v => (v.searchKeyword = ('+' + v.areaNumber + v.cname + v.countryCode + v.currencyCode + v.ename).toLowerCase()) && v)
    setState({ type: 'setCountryList', payload: countryList })
    const currentCountry = getSelectedCountryFromCountryMap(result.nowCountry, countryList)
    setState({ type: 'setCurrentCountry', payload: currentCountry })
    if (result.lastMsisdn && result.nowCountry === result.lastMsisdn.countryCode && Object.keys(currentCountry).length >= 0) {
      setState({ type: 'setRechargePhone', payload: result.lastMsisdn.msisdn })
      getCarrierInfo()
    }
  }

  useEffect(() => {
    getPageData()
    userInfo.role !== 'BASE' && getUsedPhoneList()
  }, [])

  return (
    <View className="InputBar">
      <View className="InputBar-top">
        <View className='view-image'><Image className='image' onClick={() => setState({ type: 'setCountryListVisible', payload: true })} mode='widthFix' src={`${IMAGE_URL}countryFlags/${state.currentCountry.ename || 'China'}.svg`} /></View>
        <View className='phoneInputBar'>
          <View className='areaNumber'>+{state.currentCountry.areaNumber}</View>
          <View className='phoneInput'>
            <AtInput
              className='myPhoneInput'
              name='value'
              type='phone'
              border={false}
              placeholder='请输入手机号'
              maxLength={15}
              value={state.rechargePhone}
              onChange={phoneInputChange}
              onConfirm={() => setState({ type: 'setPhoneInputHighLight', payload: true })}
              onFocus={() => setState({ type: 'setPhoneInputHighLight', payload: true })}
              onBlur={handleInputBlur}
            />
          </View>
        </View>
        <UsedPhoneList usedPhoneList={state.usedPhoneList} onConfirm={chooseUsedPhoneNumber} visible={state.phoneInputHighLight} />
      </View>
      <View className={`${state.phoneInputHighLight && 'active'} phoneInputBg`} />
      <View className='InputBar-bottom'>
        <View className={`countryName ${state.currentCountry.cname.length > 4 && 'long'}`}>{state.currentCountry.cname}</View>
        <View className='carrierName'>{state.carrierName}</View>
      </View>
      <CountryList
        countryList={state.countryList}
        listVisible={state.countryListVisible}
        onConfirm={selectCountry}
        onClose={() => setState({ type: 'setCountryListVisible', payload: false })}
      />
      <CarrierList
        currentCarrier={state.currentCarrier}
        listVisible={state.carrierListVisible}
        carrierList={state.carrierList}
        onConfirm={selectCarrier}
        onClose={() => setState({ type: 'setCarrierListVisible', payload: false })}
      />
    </View>
  )
}
