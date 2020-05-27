(wx["webpackJsonp"] = wx["webpackJsonp"] || []).push([["common"],{

/***/ "./src/utils/api.js":
/*!**************************!*\
  !*** ./src/utils/api.js ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.login = login;

var _request = __webpack_require__(/*! ./request */ "./src/utils/request.js");

var _request2 = _interopRequireDefault(_request);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function login(jscode) {
  return (0, _request2.default)("/wx/user/miniLogin?code=" + jscode);
}

/***/ }),

/***/ "./src/utils/globalData.js":
/*!*********************************!*\
  !*** ./src/utils/globalData.js ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.setGlobalData = setGlobalData;
exports.getGlobalData = getGlobalData;
var globalData = {};

function setGlobalData(key, val) {
  globalData[key] = val;
}

function getGlobalData(key) {
  return globalData[key];
}

/***/ }),

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
    var request = _taroWeapp2.default.request({
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
            if (result.code === 'JU402') {
              (0, _globalData.getGlobalData)('requestList') && (0, _globalData.getGlobalData)('requestList').map(function (v) {
                return v.abort();
              }); // 可能会有取消不掉的情况
              wechat.login();
            } else {
              _taroWeapp2.default.showToast({ title: error[result.code].message, icon: 'none', duration: 2000, mask: true }).then(function () {
                _taroWeapp2.default.reLaunch({ url: '/pages/frame/frame?href=' + error[result.code].href });
              });
            }
            return;
          }
          if (result.message) {
            _taroWeapp2.default.showToast({ title: result.message, icon: 'none', duration: 2000, mask: true });
          } else {
            _taroWeapp2.default.showToast({ title: '网络异常', icon: 'none', duration: 2000, mask: true });
          }
          throw Error(result.message);
        } else {
          _taroWeapp2.default.setStorageSync('token', res.header.token);
          resolve(result);
        }
      },
      fail: function fail(err) {
        console.log(err, '请求失败');
        _taroWeapp2.default.showToast({ title: err.errMsg, icon: 'none', duration: 2000, mask: true });
        throw Error(err.errMsg);
      },
      complete: function complete() {
        _taroWeapp2.default.hideLoading();
      }
    });
    var requestList = (0, _globalData.getGlobalData)('requestList') || [];
    (0, _globalData.setGlobalData)('requestList', [].concat(_toConsumableArray(requestList), [request]));
  });
};

var _taroWeapp = __webpack_require__(/*! @tarojs/taro-weapp */ "./node_modules/@tarojs/taro-weapp/index.js");

var _taroWeapp2 = _interopRequireDefault(_taroWeapp);

var _wechat = __webpack_require__(/*! ./wechat */ "./src/utils/wechat.js");

var wechat = _interopRequireWildcard(_wechat);

var _globalData = __webpack_require__(/*! ./globalData */ "./src/utils/globalData.js");

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

var baseURL = "https://shopping.kqlink.com/global-charge-wechat-api";
var error = {
  'JU402': { message: '当前用户不在线', href: '' },
  'JU403': { message: '对不起，您无权限访问该页面！', href: '403' },
  'JU404': { message: '找不到该页面啦！', href: '404' },
  'WX0005': { message: '请先关注公众号在访问哦！', href: 'leadFollow' },
  'JU302': { message: '对不起，服务器正在维护！', href: 'serveDead' },
  'JU430': { message: '网络异常，请稍候再试！', href: 'networkError' }
};
_taroWeapp2.default.setStorageSync('token', 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ6Y2jwn42DICAgICAgICAgIOC8vSIsImF1ZCI6Imt1bXF1YXQiLCJ1bmlvbklkIjoib1BVaFdzOFh0S3p4aWVjd19icWM3eFhoOE52cyIsInJvbGUiOiJBVFRFTlRJT04iLCJvcGVuSWQiOiJvR1BUaXYtTzVETEZlaC1MRG1EajRfSE1GblNVIiwiaXNzIjoidG9ueSIsImV4cCI6MTU5MDQ5MjQ5MCwiaWF0IjoxNTkwNDg4ODkwLCJqdGkiOiI5NzMifQ.5WgdgtA06q8v1xjf6D2MP85CbLOXoIFGlfPkdupLB4g');

/***/ }),

/***/ "./src/utils/wechat.js":
/*!*****************************!*\
  !*** ./src/utils/wechat.js ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _regenerator = __webpack_require__(/*! babel-runtime/regenerator */ "./node_modules/babel-runtime/regenerator/index.js");

var _regenerator2 = _interopRequireDefault(_regenerator);

exports.login = login;

var _taroWeapp = __webpack_require__(/*! @tarojs/taro-weapp */ "./node_modules/@tarojs/taro-weapp/index.js");

var _taroWeapp2 = _interopRequireDefault(_taroWeapp);

var _api = __webpack_require__(/*! ./api */ "./src/utils/api.js");

var api = _interopRequireWildcard(_api);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

function login() {
  _taroWeapp2.default.login({
    success: function () {
      var _ref = _asyncToGenerator( /*#__PURE__*/_regenerator2.default.mark(function _callee(res) {
        return _regenerator2.default.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                if (!res.code) {
                  _context.next = 6;
                  break;
                }

                _context.next = 3;
                return api.login(res.code);

              case 3:
                _taroWeapp2.default.reLaunch({ url: '/pages/index/index' });
                _context.next = 7;
                break;

              case 6:
                console.log('登录失败！' + res.errMsg);

              case 7:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function success(_x) {
        return _ref.apply(this, arguments);
      }

      return success;
    }()
  });
}

/***/ })

}]);