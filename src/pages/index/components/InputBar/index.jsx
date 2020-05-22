import Taro, { useReducer } from '@tarojs/taro'
import { View, Image } from '@tarojs/components'
import './index.scss'
import { AtInput } from 'taro-ui'
import CountryList from './components/CountryList/index'

const initialState = {
  rechargePhone: '',
  countryListVisible: false,
};
const reducer = (state, { type, payload }) => {
  const typeMap = {
    setRechargePhone: () => ({ ...state, rechargePhone: payload }),
    setCountryListVisible: () => ({ ...state, countryListVisible: payload })
  };
  return typeMap[type]() || state;
};
export default function OverHeader ()  {
  const [state, setState] = useReducer(reducer, initialState);
  const phoneInput = value => {
    setState({ type: 'setRechargePhone', payload: value })
  }
  const selectCountry = () => {
    console.log(12312)
  }

  return (
    <View className="InputBar">
      <View className="InputBar-top">
        <View className='view-image'><Image className='image' onClick={() => setState({ type: 'setCountryListVisible', payload: true })} mode='widthFix' src='https://oss.globalcharge.cn/prod/wechat/countryFlags/China.svg' /></View>
        <View className='phoneInputBar'>
          <View className='areaNumber'>+86</View>
          <View className='phoneInput'>
            <AtInput
              className='myPhoneInput'
              name='value'
              type='text'
              border={false}
              placeholder='请输入手机号'
              value={state.rechargePhone}
              onChange={phoneInput}
            />
          </View>
        </View>
      </View>
      <View className='InputBar-bottom'>
        <View className='countryName'>中国</View>
        <View className='carrierName'>中国移动</View>
      </View>
      <CountryList
        listVisible={state.countryListVisible}
        onConfirm={() => setState({ type: 'setCountryListVisible', payload: false })}
        onClose={() => setState({ type: 'setCountryListVisible', payload: false })}
      />
    </View>
  )
}
