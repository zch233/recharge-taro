(wx["webpackJsonp"] = wx["webpackJsonp"] || []).push([["common"],{

/***/ "./src/pages/index/components/ProductBar/components/ProductTab/index.scss":
/*!********************************************************************************!*\
  !*** ./src/pages/index/components/ProductBar/components/ProductTab/index.scss ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/pages/record/api.js":
/*!*********************************!*\
  !*** ./src/pages/record/api.js ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getRechargeRecord = getRechargeRecord;
exports.orderPayAgain = orderPayAgain;
exports.cancelOrder = cancelOrder;

var _request = __webpack_require__(/*! ../../utils/request */ "./src/utils/request.js");

var _request2 = _interopRequireDefault(_request);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function getRechargeRecord(data) {
  return (0, _request2.default)('/wx/order/user', data);
}

function orderPayAgain(data) {
  return (0, _request2.default)('/wx/charge/again/pay', data);
}

function cancelOrder(data) {
  return (0, _request2.default)('/wx/charge/cancelOrder', data);
}

/***/ }),

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
exports.subscribe = subscribe;

var _request = __webpack_require__(/*! ./request */ "./src/utils/request.js");

var _request2 = _interopRequireDefault(_request);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function login(jscode) {
  return (0, _request2.default)("/wx/user/miniLogin?code=" + jscode);
}

function subscribe(yqqNo) {
  return (0, _request2.default)("/wechat/mini/subscription/" + yqqNo, null, 'GET');
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
exports.wechatPay = wechatPay;

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
        var _ref2, isSubscribe;

        return _regenerator2.default.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                if (!res.code) {
                  _context.next = 9;
                  break;
                }

                _context.next = 3;
                return api.login(res.code);

              case 3:
                _ref2 = _context.sent;
                isSubscribe = _ref2.result;

                _taroWeapp2.default.setStorageSync('isSubscribe', isSubscribe);
                _taroWeapp2.default.reLaunch({ url: '/pages/index/index' });
                _context.next = 10;
                break;

              case 9:
                console.log('登录失败！' + res.errMsg);

              case 10:
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

function wechatPay(_ref3, orderCode) {
  var nonceStr = _ref3.nonceStr,
      paySign = _ref3.paySign,
      signType = _ref3.signType,
      payPackage = _ref3.payPackage,
      timeStamp = _ref3.timeStamp;

  return new Promise(function (resolve, reject) {
    _taroWeapp2.default.requestPayment({
      timeStamp: timeStamp,
      nonceStr: nonceStr,
      package: payPackage,
      signType: signType,
      paySign: paySign,
      success: function success() {
        if (!_taroWeapp2.default.getStorageSync('isSubscribe')) {
          var tmplIds = '8Q9-cY0jD1FTK59AqcDcGSKj5ZBC5uw1zdDcglsqyRA';
          _taroWeapp2.default.requestSubscribeMessage({
            tmplIds: [tmplIds],
            success: function () {
              var _ref4 = _asyncToGenerator( /*#__PURE__*/_regenerator2.default.mark(function _callee2(res) {
                return _regenerator2.default.wrap(function _callee2$(_context2) {
                  while (1) {
                    switch (_context2.prev = _context2.next) {
                      case 0:
                        if (!(res[tmplIds] === 'accept')) {
                          _context2.next = 4;
                          break;
                        }

                        _context2.next = 3;
                        return api.subscribe(orderCode);

                      case 3:
                        resolve('paySuccess');

                      case 4:
                        _taroWeapp2.default[_taroWeapp2.default.getCurrentPages()[_taroWeapp2.default.getCurrentPages().length - 1].route === 'pages/record/record' ? 'redirectTo' : 'navigateTo']({ url: '/pages/record/record' });

                      case 5:
                      case "end":
                        return _context2.stop();
                    }
                  }
                }, _callee2, this);
              }));

              function success(_x2) {
                return _ref4.apply(this, arguments);
              }

              return success;
            }(),
            fail: function fail(err) {
              reject(err);
              _taroWeapp2.default.navigateTo({ url: '/pages/record/record' });
            }
          });
        } else {
          _taroWeapp2.default.navigateTo({ url: '/pages/record/record' });
          resolve('paySuccess');
        }
      },
      fail: function fail(err) {
        console.log('fail');
        reject(err);
      }
    });
  });
}

/***/ })

}]);