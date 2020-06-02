(wx["webpackJsonp"] = wx["webpackJsonp"] || []).push([["pages/index/components/ProductBar/components/Order/index"],{

/***/ "./node_modules/@tarojs/mini-runner/dist/loaders/wxTransformerLoader.js?!./src/pages/index/components/ProductBar/components/Order/index.jsx?taro&type=script&parse=COMPONENT&":
/*!*********************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@tarojs/mini-runner/dist/loaders/wxTransformerLoader.js??ref--6-0!./src/pages/index/components/ProductBar/components/Order/index.jsx?taro&type=script&parse=COMPONENT& ***!
  \*********************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _regenerator = __webpack_require__(/*! babel-runtime/regenerator */ "./node_modules/babel-runtime/regenerator/index.js");

var _regenerator2 = _interopRequireDefault(_regenerator);

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _class, _temp2;

var _taroWeapp = __webpack_require__(/*! @tarojs/taro-weapp */ "./node_modules/@tarojs/taro-weapp/index.js");

var _taroWeapp2 = _interopRequireDefault(_taroWeapp);

__webpack_require__(/*! ./index.scss */ "./src/pages/index/components/ProductBar/components/Order/index.scss");

var _api = __webpack_require__(/*! ./api */ "./src/pages/index/components/ProductBar/components/Order/api.js");

var api = _interopRequireWildcard(_api);

var _wechat = __webpack_require__(/*! ../../../../../../utils/wechat */ "./src/utils/wechat.js");

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Order = (_temp2 = _class = function (_Taro$Component) {
  _inherits(Order, _Taro$Component);

  function Order() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, Order);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Order.__proto__ || Object.getPrototypeOf(Order)).call.apply(_ref, [this].concat(args))), _this), _this.$usedState = ["anonymousState__temp", "anonymousState__temp2", "$compid__54", "$compid__55", "$compid__56", "$compid__57", "$compid__58", "discountVisible", "discountRadio", "displayOrderData", "orderData", "discountPrice", "payAmount", "orderVisible"], _this.customComponents = ["AtFloatLayout", "AtIcon", "CouponList"], _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Order, [{
    key: '_constructor',
    value: function _constructor(props) {
      _get(Order.prototype.__proto__ || Object.getPrototypeOf(Order.prototype), '_constructor', this).call(this, props);

      this.$$refs = new _taroWeapp2.default.RefsArray();
    }
  }, {
    key: '_createData',
    value: function _createData() {
      var _this2 = this;

      this.__state = arguments[0] || this.state || {};
      this.__props = arguments[1] || this.props || {};
      var __isRunloopRef = arguments[2];
      var __prefix = this.$prefix;
      ;

      var _genCompid = (0, _taroWeapp.genCompid)(__prefix + "$compid__54"),
          _genCompid2 = _slicedToArray(_genCompid, 2),
          $prevCompid__54 = _genCompid2[0],
          $compid__54 = _genCompid2[1];

      var _genCompid3 = (0, _taroWeapp.genCompid)(__prefix + "$compid__55"),
          _genCompid4 = _slicedToArray(_genCompid3, 2),
          $prevCompid__55 = _genCompid4[0],
          $compid__55 = _genCompid4[1];

      var _genCompid5 = (0, _taroWeapp.genCompid)(__prefix + "$compid__56"),
          _genCompid6 = _slicedToArray(_genCompid5, 2),
          $prevCompid__56 = _genCompid6[0],
          $compid__56 = _genCompid6[1];

      var _genCompid7 = (0, _taroWeapp.genCompid)(__prefix + "$compid__57"),
          _genCompid8 = _slicedToArray(_genCompid7, 2),
          $prevCompid__57 = _genCompid8[0],
          $compid__57 = _genCompid8[1];

      var _genCompid9 = (0, _taroWeapp.genCompid)(__prefix + "$compid__58"),
          _genCompid10 = _slicedToArray(_genCompid9, 2),
          $prevCompid__58 = _genCompid10[0],
          $compid__58 = _genCompid10[1];

      var _props = this.__props,
          orderVisible = _props.orderVisible,
          onClose = _props.onClose,
          _props$orderData = _props.orderData,
          orderData = _props$orderData === undefined ? {} : _props$orderData;

      var _useState = (0, _taroWeapp.useState)(false),
          _useState2 = _slicedToArray(_useState, 2),
          couponListVisible = _useState2[0],
          setCouponListVisible = _useState2[1];

      var _useState3 = (0, _taroWeapp.useState)(null),
          _useState4 = _slicedToArray(_useState3, 2),
          discountRadio = _useState4[0],
          setDiscountRadio = _useState4[1];

      var discountVisible = (0, _taroWeapp.useMemo)(function () {
        return orderData.countryCode !== 'CN' && _taroWeapp2.default.getStorageSync('isSubscribe');
      }, [orderData]);
      var displayOrderData = (0, _taroWeapp.useMemo)(function () {
        var cname = orderData.cname,
            carrier = orderData.carrier,
            name = orderData.name,
            point = orderData.point,
            price = orderData.price,
            couponList = orderData.couponList,
            uuid = orderData.uuid,
            selection = orderData.selection;

        return {
          selection: selection,
          name: cname + " " + carrier + ' \u8FD0\u8425\u5546 ' + name,
          point: discountVisible ? point >= price * 100 ? price * 100 - 1 : point : 0,
          coupon: discountVisible ? couponList && (couponList.filter(function (v) {
            return v.uuid === uuid;
          })[0] || (couponList.length === 0 ? {} : { name: couponList.length + '\u5F20\u53EF\u7528' })) : {}
        };
      }, [orderData]);
      var choosePointRadio = function choosePointRadio() {
        if (displayOrderData.point === 0) {
          _taroWeapp2.default.showToast({ title: '暂无积分可用', icon: 'none', duration: 2000, mask: true });
          return;
        }
        setDiscountRadio('point');
      };
      var chooseCouponRadio = function chooseCouponRadio() {
        if (orderData.couponList && orderData.couponList.length === 0) {
          _taroWeapp2.default.showToast({ title: '暂无优惠券可用', icon: 'none', duration: 2000, mask: true });
          return;
        }
        setDiscountRadio('coupon');
        setCouponListVisible(true);
      };
      (0, _taroWeapp.useEffect)(function () {
        setDiscountRadio(orderData.selection);
      }, [orderData]);
      var discountPrice = (0, _taroWeapp.useMemo)(function () {
        if (discountRadio === 'point' && displayOrderData.point) {
          return (displayOrderData.point / 100).toFixed(2) * 1;
        } else if (discountRadio === 'coupon' && displayOrderData.coupon.value) {
          return displayOrderData.coupon.value.toFixed(2) * 1;
        } else {
          return 0;
        }
      }, [discountRadio, orderData]);
      var payAmount = (0, _taroWeapp.useMemo)(function () {
        var payAmount = (orderData.price - discountPrice).toFixed(2) * 1;
        if (Number.isNaN(payAmount)) {
          return orderData.price;
        } // 防御
        return payAmount > 0 ? payAmount : 0.01;
      }, [discountRadio, orderData]);
      var payNow = function () {
        var _ref2 = _asyncToGenerator( /*#__PURE__*/_regenerator2.default.mark(function _callee() {
          var _ref3, result, info;

          return _regenerator2.default.wrap(function _callee$(_context) {
            while (1) {
              switch (_context.prev = _context.next) {
                case 0:
                  if (!(payAmount <= 0)) {
                    _context.next = 3;
                    break;
                  }

                  // 防御
                  _taroWeapp2.default.showModal({ title: '提示', content: '系统异常，请联系管理官+v：yqq-NO2' });
                  return _context.abrupt('return', true);

                case 3:
                  _context.next = 5;
                  return api.orderPay(_extends({}, orderData, { pageUrl: encodeURIComponent('https://wechat.globalcharge.cn/home'), payment: 'wc_pay', tradeType: 'JSAPI', originalPayAmount: orderData.price, payAmount: payAmount, uuid: displayOrderData.coupon.uuid, point: displayOrderData.point, selection: discountVisible ? discountRadio : null, appid: "7487be7c3e180189a492caad3b0d8acd", paySource: 'MINI_PROGRAM' }));

                case 5:
                  _ref3 = _context.sent;
                  result = _ref3.result;
                  _context.next = 9;
                  return (0, _wechat.wechatPay)(result.payInfo || {}, result.orderCode);

                case 9:
                  info = _context.sent;

                  if (info === 'paySuccess') {
                    _this2.__props.onClose();
                  }

                case 11:
                case 'end':
                  return _context.stop();
              }
            }
          }, _callee, _this2);
        }));

        return function payNow() {
          return _ref2.apply(this, arguments);
        };
      }();
      var anonymousState__temp = orderData.price && orderData.price.toFixed(2);
      this.anonymousFunc0 = choosePointRadio;
      var anonymousState__temp2 = discountVisible ? displayOrderData.point && (displayOrderData.point / 100).toFixed(2) : null;
      this.anonymousFunc1 = chooseCouponRadio;

      this.anonymousFunc2 = function () {
        return setDiscountRadio(null);
      };

      this.anonymousFunc3 = payNow;

      this.anonymousFunc4 = function () {
        return setCouponListVisible(false);
      };

      _taroWeapp.propsManager.set({
        "className": "myOrder",
        "isOpened": orderVisible,
        "title": '\u786E\u8BA4\u4ED8\u6B3E',
        "onClose": this.__props.onClose
      }, $compid__54, $prevCompid__54);
      discountVisible && _taroWeapp.propsManager.set({
        "value": "check",
        "size": "18",
        "color": "#fff"
      }, $compid__55, $prevCompid__55);
      discountVisible && _taroWeapp.propsManager.set({
        "value": "check",
        "size": "18",
        "color": "#fff"
      }, $compid__56, $prevCompid__56);
      discountVisible && _taroWeapp.propsManager.set({
        "value": "check",
        "size": "18",
        "color": "#fff"
      }, $compid__57, $prevCompid__57);
      _taroWeapp.propsManager.set({
        "couponListVisible": couponListVisible,
        "onClose": this.anonymousFunc4
      }, $compid__58, $prevCompid__58);
      Object.assign(this.__state, {
        anonymousState__temp: anonymousState__temp,
        anonymousState__temp2: anonymousState__temp2,
        $compid__54: $compid__54,
        $compid__55: $compid__55,
        $compid__56: $compid__56,
        $compid__57: $compid__57,
        $compid__58: $compid__58,
        discountVisible: discountVisible,
        discountRadio: discountRadio,
        displayOrderData: displayOrderData,
        orderData: orderData,
        discountPrice: discountPrice,
        payAmount: payAmount
      });
      return this.__state;
    }
  }, {
    key: 'anonymousFunc0',
    value: function anonymousFunc0(e) {
      ;
    }
  }, {
    key: 'anonymousFunc1',
    value: function anonymousFunc1(e) {
      ;
    }
  }, {
    key: 'anonymousFunc2',
    value: function anonymousFunc2(e) {
      ;
    }
  }, {
    key: 'anonymousFunc3',
    value: function anonymousFunc3(e) {
      ;
    }
  }, {
    key: 'anonymousFunc4',
    value: function anonymousFunc4(e) {
      ;
    }
  }]);

  return Order;
}(_taroWeapp2.default.Component), _class.$$events = ["anonymousFunc0", "anonymousFunc1", "anonymousFunc2", "anonymousFunc3"], _class.$$componentPath = "pages/index/components/ProductBar/components/Order/index", _temp2);
exports.default = Order;

Component(__webpack_require__(/*! @tarojs/taro-weapp */ "./node_modules/@tarojs/taro-weapp/index.js").default.createComponent(Order));

/***/ }),

/***/ "./node_modules/file-loader/dist/cjs.js?name=[path][name].wxml&context=E:\\Users\\小胖友\\Desktop\\company-coding\\myApp\\src!./node_modules/@tarojs/mini-runner/dist/loaders/miniTemplateLoader.js!./node_modules/@tarojs/mini-runner/dist/loaders/wxTransformerLoader.js?!./src/pages/index/components/ProductBar/components/Order/index.jsx?taro&type=template&parse=COMPONENT&":
/*!*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/file-loader/dist/cjs.js?name=[path][name].wxml&context=E:/Users/小胖友/Desktop/company-coding/myApp/src!./node_modules/@tarojs/mini-runner/dist/loaders/miniTemplateLoader.js!./node_modules/@tarojs/mini-runner/dist/loaders/wxTransformerLoader.js??ref--6-0!./src/pages/index/components/ProductBar/components/Order/index.jsx?taro&type=template&parse=COMPONENT& ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "pages/index/components/ProductBar/components/Order/index.wxml";

/***/ }),

/***/ "./src/pages/index/components/ProductBar/components/Order/api.js":
/*!***********************************************************************!*\
  !*** ./src/pages/index/components/ProductBar/components/Order/api.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.orderPay = orderPay;

var _request = __webpack_require__(/*! ../../../../../../utils/request */ "./src/utils/request.js");

var _request2 = _interopRequireDefault(_request);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function orderPay(data) {
  return (0, _request2.default)('/wx/charge/order', data);
}

/***/ }),

/***/ "./src/pages/index/components/ProductBar/components/Order/index.jsx":
/*!**************************************************************************!*\
  !*** ./src/pages/index/components/ProductBar/components/Order/index.jsx ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _index_jsx_taro_type_template_parse_COMPONENT___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.jsx?taro&type=template&parse=COMPONENT& */ "./src/pages/index/components/ProductBar/components/Order/index.jsx?taro&type=template&parse=COMPONENT&");
/* harmony import */ var _index_jsx_taro_type_script_parse_COMPONENT___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index.jsx?taro&type=script&parse=COMPONENT& */ "./src/pages/index/components/ProductBar/components/Order/index.jsx?taro&type=script&parse=COMPONENT&");
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _index_jsx_taro_type_script_parse_COMPONENT___WEBPACK_IMPORTED_MODULE_1__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _index_jsx_taro_type_script_parse_COMPONENT___WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));




/***/ }),

/***/ "./src/pages/index/components/ProductBar/components/Order/index.jsx?taro&type=script&parse=COMPONENT&":
/*!************************************************************************************************************!*\
  !*** ./src/pages/index/components/ProductBar/components/Order/index.jsx?taro&type=script&parse=COMPONENT& ***!
  \************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_tarojs_mini_runner_dist_loaders_wxTransformerLoader_js_ref_6_0_index_jsx_taro_type_script_parse_COMPONENT___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/@tarojs/mini-runner/dist/loaders/wxTransformerLoader.js??ref--6-0!./index.jsx?taro&type=script&parse=COMPONENT& */ "./node_modules/@tarojs/mini-runner/dist/loaders/wxTransformerLoader.js?!./src/pages/index/components/ProductBar/components/Order/index.jsx?taro&type=script&parse=COMPONENT&");
/* harmony import */ var _node_modules_tarojs_mini_runner_dist_loaders_wxTransformerLoader_js_ref_6_0_index_jsx_taro_type_script_parse_COMPONENT___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_tarojs_mini_runner_dist_loaders_wxTransformerLoader_js_ref_6_0_index_jsx_taro_type_script_parse_COMPONENT___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_tarojs_mini_runner_dist_loaders_wxTransformerLoader_js_ref_6_0_index_jsx_taro_type_script_parse_COMPONENT___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_tarojs_mini_runner_dist_loaders_wxTransformerLoader_js_ref_6_0_index_jsx_taro_type_script_parse_COMPONENT___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_tarojs_mini_runner_dist_loaders_wxTransformerLoader_js_ref_6_0_index_jsx_taro_type_script_parse_COMPONENT___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./src/pages/index/components/ProductBar/components/Order/index.jsx?taro&type=template&parse=COMPONENT&":
/*!**************************************************************************************************************!*\
  !*** ./src/pages/index/components/ProductBar/components/Order/index.jsx?taro&type=template&parse=COMPONENT& ***!
  \**************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _file_loader_name_path_name_wxml_context_E_Users_Desktop_company_coding_myApp_src_node_modules_tarojs_mini_runner_dist_loaders_miniTemplateLoader_js_node_modules_tarojs_mini_runner_dist_loaders_wxTransformerLoader_js_ref_6_0_index_jsx_taro_type_template_parse_COMPONENT___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!file-loader?name=[path][name].wxml&context=E:/Users/小胖友/Desktop/company-coding/myApp/src!../../../../../../../node_modules/@tarojs/mini-runner/dist/loaders/miniTemplateLoader.js!../../../../../../../node_modules/@tarojs/mini-runner/dist/loaders/wxTransformerLoader.js??ref--6-0!./index.jsx?taro&type=template&parse=COMPONENT& */ "./node_modules/file-loader/dist/cjs.js?name=[path][name].wxml&context=E:\\Users\\小胖友\\Desktop\\company-coding\\myApp\\src!./node_modules/@tarojs/mini-runner/dist/loaders/miniTemplateLoader.js!./node_modules/@tarojs/mini-runner/dist/loaders/wxTransformerLoader.js?!./src/pages/index/components/ProductBar/components/Order/index.jsx?taro&type=template&parse=COMPONENT&");
/* harmony import */ var _file_loader_name_path_name_wxml_context_E_Users_Desktop_company_coding_myApp_src_node_modules_tarojs_mini_runner_dist_loaders_miniTemplateLoader_js_node_modules_tarojs_mini_runner_dist_loaders_wxTransformerLoader_js_ref_6_0_index_jsx_taro_type_template_parse_COMPONENT___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_file_loader_name_path_name_wxml_context_E_Users_Desktop_company_coding_myApp_src_node_modules_tarojs_mini_runner_dist_loaders_miniTemplateLoader_js_node_modules_tarojs_mini_runner_dist_loaders_wxTransformerLoader_js_ref_6_0_index_jsx_taro_type_template_parse_COMPONENT___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _file_loader_name_path_name_wxml_context_E_Users_Desktop_company_coding_myApp_src_node_modules_tarojs_mini_runner_dist_loaders_miniTemplateLoader_js_node_modules_tarojs_mini_runner_dist_loaders_wxTransformerLoader_js_ref_6_0_index_jsx_taro_type_template_parse_COMPONENT___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _file_loader_name_path_name_wxml_context_E_Users_Desktop_company_coding_myApp_src_node_modules_tarojs_mini_runner_dist_loaders_miniTemplateLoader_js_node_modules_tarojs_mini_runner_dist_loaders_wxTransformerLoader_js_ref_6_0_index_jsx_taro_type_template_parse_COMPONENT___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ "./src/pages/index/components/ProductBar/components/Order/index.scss":
/*!***************************************************************************!*\
  !*** ./src/pages/index/components/ProductBar/components/Order/index.scss ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ })

},[["./src/pages/index/components/ProductBar/components/Order/index.jsx","runtime","vendors","common"]]]);