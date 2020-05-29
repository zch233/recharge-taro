import Taro, { Component } from '@tarojs/taro'
import Index from './pages/index'
import * as wechat from '@/utils/wechat'
import './app.scss'
import 'taro-ui/dist/style/index.scss'
import MTA from 'mta-wechat-analysis'

// 如果需要在 h5 环境中开启 React Devtools
// 取消以下注释：
// if (process.env.NODE_ENV !== 'production' && process.env.TARO_ENV === 'h5')  {
//   require('nerv-devtools')
// }

class App extends Component {

  componentWillMount () {}

  componentDidMount () {
    MTA.App.init({
      "appID":"500720694",
      "eventID": "500720783",
      "autoReport": true,
      "statParam": true,
      "ignoreParams": [],
    });
    MTA.Event.stat("99999", {});
  }

  componentDidShow () {}

  componentDidHide () {}

  componentDidCatchError () {}

  config = {
    pages: [
      'pages/vip/vip',
      'pages/index/index',
      'pages/record/record',
      'pages/frame/frame',
    ],
    window: {
      backgroundTextStyle: 'light',
      navigationBarBackgroundColor: '#fff',
      navigationBarTitleText: 'WeChat',
      navigationBarTextStyle: 'black'
    }
  }

  // 在 App 类中的 render() 函数没有实际作用
  // 请勿修改此函数
  render () {
    return (
      <Index />
    )
  }
}

Taro.render(<App />, document.getElementById('app'))
