(wx["webpackJsonp"] = wx["webpackJsonp"] || []).push([["common"],{

/***/ "./src/utils/request.js":
/*!******************************!*\
  !*** ./src/utils/request.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (url, data) {
  var method = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 'POST';

  return new Promise(function (resolve) {
    _taroWeapp2.default.showLoading({ title: '加载中', mask: true });
    _taroWeapp2.default.request({
      url: baseURL + url,
      data: {
        timestamp: Date.now(),
        value: data
      },
      method: method,
      timeout: 60000,
      header: {
        'token': _taroWeapp2.default.getStorageSync('token')
      },
      success: function success(res) {
        var result = res.data;
        if (result.code !== '00') {
          if (error[result.code]) {
            _taroWeapp2.default.showToast({ title: error[result.code].message, icon: 'none', duration: 2000 }).then(function () {
              _taroWeapp2.default.reLaunch({ url: "/pages/frame/frame?href=" + error[result.code].href });
            });
            return;
          }
          if (result.message) {
            _taroWeapp2.default.showToast({ title: result.message, icon: 'none', duration: 2000 });
          } else {
            _taroWeapp2.default.showToast({ title: '网络异常', icon: 'none', duration: 2000 });
          }
          throw Error(result.message);
        } else {
          _taroWeapp2.default.setStorageSync('token', res.header.token);
          resolve(result);
        }
      },
      fail: function fail(err) {
        console.log(err, '请求失败');
        throw Error(err);
      },
      complete: function complete() {
        _taroWeapp2.default.hideLoading();
      }
    });
  });
};

var _taroWeapp = __webpack_require__(/*! @tarojs/taro-weapp */ "./node_modules/@tarojs/taro-weapp/index.js");

var _taroWeapp2 = _interopRequireDefault(_taroWeapp);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var baseURL = "https://shopping.kqlink.com/global-charge-wechat-api";
var error = {
  'JU403': { message: '对不起，您无权限访问该页面！', href: '403' },
  'JU404': { message: '找不到该页面啦！', href: '404' },
  'WX0005': { message: '请先关注公众号在访问哦！', href: 'leadFollow' },
  'JU302': { message: '对不起，服务器正在维护！', href: 'serveDead' },
  'JU430': { message: '网络异常，请稍候再试！', href: 'networkError' }
};
_taroWeapp2.default.setStorageSync('token', 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiLorr_lrqLnlKjmiLciLCJhdWQiOiJrdW1xdWF0IiwidW5pb25JZCI6Imt1bXF1YXRfdW5pb25faWQiLCJyb2xlIjoiQkFTRSIsIm9wZW5JZCI6Imt1bXF1YXRfb3BlbmlkIiwiaXNzIjoidG9ueSIsImV4cCI6MTU5MDQwMjA5NiwiaWF0IjoxNTkwMzk4NDk2LCJqdGkiOiIyMTQ3NDgzNjQ3In0.fXEoymGHsmP3syN8MImBxRLultRKx1lWe7rFquS73V8');

/***/ })

}]);