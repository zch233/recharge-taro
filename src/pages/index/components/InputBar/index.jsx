import Taro, { useReducer } from '@tarojs/taro'
import { View, Image } from '@tarojs/components'
import './index.scss'
import { AtInput } from 'taro-ui'
import CountryList from './components/CountryList/index'

const initialState = {
  rechargePhone: '',
  carrierName: '',
  currentCountry: {},
  countryListVisible: false,
  phoneInputHighLight: false,
};
const reducer = (state, { type, payload }) => {
  const typeMap = {
    setRechargePhone: () => ({ ...state, rechargePhone: payload }),
    setCurrentCountry: () => ({ ...state, currentCountry: payload }),
    setCarrierName: () => ({ ...state, carrierName: payload }),
    setCountryListVisible: () => ({ ...state, countryListVisible: payload }),
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
export default function OverHeader ()  {
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
    if (country.id === state.currentCountry.id) return
    setState({ type: 'setRechargePhone', payload: '' })
  }

  return (
    <View className="InputBar">
      <View className="InputBar-top">
        <View className='view-image'><Image className='image' onClick={() => setState({ type: 'setCountryListVisible', payload: true })} mode='widthFix' src='https://oss.globalcharge.cn/prod/wechat/countryFlags/China.svg' /></View>
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
      </View>
      <View className={`${state.phoneInputHighLight && 'active'} phoneInputBg`} />
      <View className='InputBar-bottom'>
        <View className='countryName'>{state.currentCountry.cname}</View>
        <View className='carrierName'>{state.carrierName}</View>
      </View>
      <CountryList
        listVisible={state.countryListVisible}
        onConfirm={selectCountry}
        onClose={() => setState({ type: 'setCountryListVisible', payload: false })}
      />
    </View>
  )
}
