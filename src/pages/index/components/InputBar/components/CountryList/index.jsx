import Taro, { useState } from '@tarojs/taro'
import { View, ScrollView } from '@tarojs/components'
import './index.scss'
import { AtFloatLayout, AtIcon, AtInput } from "taro-ui"

export default function CountryList ({ listVisible, onClose })  {
  const [searchValue, setSearchValue] = useState('')
  const handleSearch = value => {
    setSearchValue(value)
  }

  return (
    <AtFloatLayout className='myCountryList' isOpened={listVisible} title="请选择您要充值的国家或地区" onClose={onClose}>
      <View className='searchBar'>
        <AtIcon value='search' size='23' color='rgb(150, 150, 150)'></AtIcon>
        <View className='searchInput'>
          <AtInput
            className='mySearchInput'
            name='value'
            type='text'
            border={false}
            placeholder='请输入你想要充值的国家或地区'
            value={searchValue}
            onChange={handleSearch}
          />
        </View>
      </View>
      <ScrollView className='countryList' scroll-y>
        {
          '11111111111111111111111'.split('').map((v, i) => (
            <View key={i} className='countryList-item'>
              <View className='view-image'><Image className='image' mode='widthFix' src='https://oss.globalcharge.cn/prod/wechat/countryFlags/China.svg' /></View>
              <View className='areaNumber'>+62</View>
              <View className='countryName'>印度尼西亚</View>
            </View>
          ))
        }
      </ScrollView>
    </AtFloatLayout>
  )
}
