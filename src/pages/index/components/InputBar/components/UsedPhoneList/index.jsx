import Taro from '@tarojs/taro'
import { View, Text } from '@tarojs/components'
import './index.scss'

export default function UsedPhoneList ({ visible, onConfirm, usedPhoneList = [] })  {
  return (
    <View className={`phoneList ${visible && usedPhoneList.length && 'active'}`}>
      {
        usedPhoneList.map(phone => (
          <View key={phone.msisdn} className="phoneList-item" onClick={() => onConfirm(phone)}>
            <View className='areaNumber'>{ phone.areaNumber }</View>
            <Text className='phone'>{ phone.msisdn }</Text>
            <Text className='name'>{ phone.cname }（{ phone.carrierName }）</Text>
          </View>
        ))
      }
    </View>
  )
}
