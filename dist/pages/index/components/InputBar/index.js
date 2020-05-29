(wx["webpackJsonp"] = wx["webpackJsonp"] || []).push([["pages/index/components/InputBar/index"],{

/***/ "./node_modules/@tarojs/mini-runner/dist/loaders/wxTransformerLoader.js?!./src/pages/index/components/InputBar/index.jsx?taro&type=script&parse=COMPONENT&":
/*!**************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@tarojs/mini-runner/dist/loaders/wxTransformerLoader.js??ref--6-0!./src/pages/index/components/InputBar/index.jsx?taro&type=script&parse=COMPONENT& ***!
  \**************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _regenerator = __webpack_require__(/*! babel-runtime/regenerator */ "./node_modules/babel-runtime/regenerator/index.js");

var _regenerator2 = _interopRequireDefault(_regenerator);

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _class, _temp2;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _taroWeapp = __webpack_require__(/*! @tarojs/taro-weapp */ "./node_modules/@tarojs/taro-weapp/index.js");

var _taroWeapp2 = _interopRequireDefault(_taroWeapp);

__webpack_require__(/*! ./index.scss */ "./src/pages/index/components/InputBar/index.scss");

var _api = __webpack_require__(/*! ./api */ "./src/pages/index/components/InputBar/api.js");

var api = _interopRequireWildcard(_api);

var _countryMap = __webpack_require__(/*! ../../../../utils/countryMap */ "./src/utils/countryMap.js");

var _countryMap2 = _interopRequireDefault(_countryMap);

var _mtaWechatAnalysis = __webpack_require__(/*! mta-wechat-analysis */ "./node_modules/mta-wechat-analysis/index.js");

var _mtaWechatAnalysis2 = _interopRequireDefault(_mtaWechatAnalysis);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var initialState = {
  rechargePhone: '',
  countryList: [],
  carrierList: [],
  usedPhoneList: [],
  currentCountry: {},
  currentCarrier: {},
  countryListVisible: false,
  carrierListVisible: false,
  phoneInputHighLight: false
};
var reducer = function reducer(state, _ref) {
  var type = _ref.type,
      payload = _ref.payload;

  var typeMap = {
    setRechargePhone: function setRechargePhone() {
      return _extends({}, state, { rechargePhone: payload });
    },
    setCarrierList: function setCarrierList() {
      return _extends({}, state, { carrierList: payload });
    },
    setCountryList: function setCountryList() {
      return _extends({}, state, { countryList: payload });
    },
    setUsedPhoneList: function setUsedPhoneList() {
      return _extends({}, state, { usedPhoneList: payload });
    },
    setCurrentCountry: function setCurrentCountry() {
      return _extends({}, state, { currentCountry: payload });
    },
    setCurrentCarrier: function setCurrentCarrier() {
      return _extends({}, state, { currentCarrier: payload });
    },
    setCountryListVisible: function setCountryListVisible() {
      return _extends({}, state, { countryListVisible: payload });
    },
    setCarrierListVisible: function setCarrierListVisible() {
      return _extends({}, state, { carrierListVisible: payload });
    },
    setPhoneInputHighLight: function setPhoneInputHighLight() {
      return _extends({}, state, { phoneInputHighLight: payload });
    }
  };
  return typeMap[type]() || state;
};
var checkPhoneNumber = function checkPhoneNumber(phone) {
  if (!phone) {
    return false;
  } else if (!/\d{8}/.test(phone)) {
    _taroWeapp2.default.showToast({
      title: '号码不能小于8位',
      icon: 'none',
      mask: true,
      duration: 2000
    });
    return false;
  } else if (/\d{16,}/.test(phone)) {
    _taroWeapp2.default.showToast({
      title: '号码不能大于15位',
      icon: 'none',
      mask: true,
      duration: 2000
    });
    return false;
  } else {
    return true;
  }
};

var InputBar = (_temp2 = _class = function (_Taro$Component) {
  _inherits(InputBar, _Taro$Component);

  function InputBar() {
    var _ref2;

    var _temp, _this, _ret;

    _classCallCheck(this, InputBar);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref2 = InputBar.__proto__ || Object.getPrototypeOf(InputBar)).call.apply(_ref2, [this].concat(args))), _this), _this.$usedState = ["$compid__34", "$compid__35", "$compid__36", "$compid__37", "$compid__38", "state", "setRequestProductData", "setInitTips", "setProductDisabled", "setBalanceQuery"], _this.customComponents = ["AtInput", "UsedPhoneList", "AtIcon", "CountryList", "CarrierList"], _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(InputBar, [{
    key: '_constructor',
    value: function _constructor(props) {
      _get(InputBar.prototype.__proto__ || Object.getPrototypeOf(InputBar.prototype), '_constructor', this).call(this, props);

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

      var _genCompid = (0, _taroWeapp.genCompid)(__prefix + "$compid__34"),
          _genCompid2 = _slicedToArray(_genCompid, 2),
          $prevCompid__34 = _genCompid2[0],
          $compid__34 = _genCompid2[1];

      var _genCompid3 = (0, _taroWeapp.genCompid)(__prefix + "$compid__35"),
          _genCompid4 = _slicedToArray(_genCompid3, 2),
          $prevCompid__35 = _genCompid4[0],
          $compid__35 = _genCompid4[1];

      var _genCompid5 = (0, _taroWeapp.genCompid)(__prefix + "$compid__36"),
          _genCompid6 = _slicedToArray(_genCompid5, 2),
          $prevCompid__36 = _genCompid6[0],
          $compid__36 = _genCompid6[1];

      var _genCompid7 = (0, _taroWeapp.genCompid)(__prefix + "$compid__37"),
          _genCompid8 = _slicedToArray(_genCompid7, 2),
          $prevCompid__37 = _genCompid8[0],
          $compid__37 = _genCompid8[1];

      var _genCompid9 = (0, _taroWeapp.genCompid)(__prefix + "$compid__38"),
          _genCompid10 = _slicedToArray(_genCompid9, 2),
          $prevCompid__38 = _genCompid10[0],
          $compid__38 = _genCompid10[1];

      var _props = this.__props,
          setRequestProductData = _props.setRequestProductData,
          setInitTips = _props.setInitTips,
          setProductDisabled = _props.setProductDisabled,
          setBalanceQuery = _props.setBalanceQuery;

      var _useReducer = (0, _taroWeapp.useReducer)(reducer, initialState),
          _useReducer2 = _slicedToArray(_useReducer, 2),
          state = _useReducer2[0],
          setState = _useReducer2[1];

      var initProductData = function initProductData() {
        setInitTips('请选择国家输入号码');
        setRequestProductData({});
      };
      var initPageState = function initPageState() {
        setState({ type: 'setRechargePhone', payload: '' });
        setState({ type: 'setCurrentCarrier', payload: {} });
        initProductData();
      };
      var phoneInputChange = function phoneInputChange(value) {
        var phone = value.replace(/[^0-9]+/g, '');
        setState({ type: 'setRechargePhone', payload: phone });
        setState({ type: 'setCurrentCarrier', payload: {} });
        setProductDisabled(true);
        if (phone === '') {
          initProductData();
        }return phone;
      };
      var selectCountry = function selectCountry(country) {
        console.log(country);
        setState({ type: 'setCountryListVisible', payload: false });
        if (country.countryCode === state.currentCountry.countryCode) {
          return;
        }setState({ type: 'setCurrentCountry', payload: country });
        setBalanceQuery(country.balanceQueryUrl);
        initPageState();
      };
      var getCarrierList = function () {
        var _ref3 = _asyncToGenerator( /*#__PURE__*/_regenerator2.default.mark(function _callee(countryCode) {
          var _ref4, result;

          return _regenerator2.default.wrap(function _callee$(_context) {
            while (1) {
              switch (_context.prev = _context.next) {
                case 0:
                  _context.next = 2;
                  return api.getCarrierList(countryCode);

                case 2:
                  _ref4 = _context.sent;
                  result = _ref4.result;

                  setState({ type: 'setCarrierList', payload: result || [] });

                case 5:
                case 'end':
                  return _context.stop();
              }
            }
          }, _callee, _this2);
        }));

        return function getCarrierList(_x) {
          return _ref3.apply(this, arguments);
        };
      }();
      var showCarrierList = function () {
        var _ref5 = _asyncToGenerator( /*#__PURE__*/_regenerator2.default.mark(function _callee2() {
          return _regenerator2.default.wrap(function _callee2$(_context2) {
            while (1) {
              switch (_context2.prev = _context2.next) {
                case 0:
                  if (!(state.carrierList.length === 0)) {
                    _context2.next = 3;
                    break;
                  }

                  _context2.next = 3;
                  return getCarrierList(state.currentCountry.countryCode);

                case 3:
                  setState({ type: 'setCarrierListVisible', payload: true });

                case 4:
                case 'end':
                  return _context2.stop();
              }
            }
          }, _callee2, _this2);
        }));

        return function showCarrierList() {
          return _ref5.apply(this, arguments);
        };
      }();
      var selectCarrier = function selectCarrier(carrier) {
        setState({ type: 'setCurrentCarrier', payload: carrier });
        setState({ type: 'setCarrierListVisible', payload: false });
        setProductDisabled(false);
        setRequestProductData({
          cname: state.currentCountry.cname,
          account: state.rechargePhone,
          carrier: carrier.carrierName,
          countryCode: state.currentCountry.countryCode
        });
      };
      var getProductListOrCarrierListWithCarrierInfo = function () {
        var _ref6 = _asyncToGenerator( /*#__PURE__*/_regenerator2.default.mark(function _callee3(country, carrierName, account) {
          return _regenerator2.default.wrap(function _callee3$(_context3) {
            while (1) {
              switch (_context3.prev = _context3.next) {
                case 0:
                  if (!carrierName) {
                    _context3.next = 6;
                    break;
                  }

                  setState({ type: 'setCurrentCarrier', payload: { carrierName: carrierName } });
                  setProductDisabled(false);
                  setRequestProductData({
                    cname: country.cname,
                    account: account,
                    carrier: carrierName,
                    countryCode: country.countryCode
                  });
                  _context3.next = 10;
                  break;

                case 6:
                  setState({ type: 'setCurrentCarrier', payload: { carrierName: '请选择运营商' } });
                  _context3.next = 9;
                  return getCarrierList(state.currentCountry.countryCode);

                case 9:
                  setState({ type: 'setCarrierListVisible', payload: true });

                case 10:
                case 'end':
                  return _context3.stop();
              }
            }
          }, _callee3, _this2);
        }));

        return function getProductListOrCarrierListWithCarrierInfo(_x2, _x3, _x4) {
          return _ref6.apply(this, arguments);
        };
      }();
      var getCarrierInfo = function () {
        var _ref7 = _asyncToGenerator( /*#__PURE__*/_regenerator2.default.mark(function _callee5(country, account) {
          return _regenerator2.default.wrap(function _callee5$(_context5) {
            while (1) {
              switch (_context5.prev = _context5.next) {
                case 0:
                  if (checkPhoneNumber(account)) {
                    _context5.next = 5;
                    break;
                  }

                  setInitTips('请选择国家输入号码');
                  return _context5.abrupt('return');

                case 5:
                  setInitTips('请选择运营商');

                case 6:
                  setTimeout(_asyncToGenerator( /*#__PURE__*/_regenerator2.default.mark(function _callee4() {
                    var _ref9, carrierName;

                    return _regenerator2.default.wrap(function _callee4$(_context4) {
                      while (1) {
                        switch (_context4.prev = _context4.next) {
                          case 0:
                            _context4.next = 2;
                            return api.getCarrierInfo({ countryCode: country.countryCode, account: account });

                          case 2:
                            _ref9 = _context4.sent;
                            carrierName = _ref9.result;

                            getProductListOrCarrierListWithCarrierInfo(country, carrierName, account);

                          case 5:
                          case 'end':
                            return _context4.stop();
                        }
                      }
                    }, _callee4, _this2);
                  })));

                case 7:
                case 'end':
                  return _context5.stop();
              }
            }
          }, _callee5, _this2);
        }));

        return function getCarrierInfo(_x5, _x6) {
          return _ref7.apply(this, arguments);
        };
      }();
      var getSelectedCountryFromCountryMap = function getSelectedCountryFromCountryMap(countryCode, countryList) {
        var selectedCountry = {};
        countryList.map(function (v) {
          if (v.countryCode === countryCode) {
            selectedCountry = v;
          }
        });
        return Object.keys(selectedCountry).length === 0 ? countryList[0] : selectedCountry;
      };
      var getUsedPhoneList = function () {
        var _ref10 = _asyncToGenerator( /*#__PURE__*/_regenerator2.default.mark(function _callee6() {
          var _ref11, result;

          return _regenerator2.default.wrap(function _callee6$(_context6) {
            while (1) {
              switch (_context6.prev = _context6.next) {
                case 0:
                  _context6.next = 2;
                  return api.getUsedPhoneList();

                case 2:
                  _ref11 = _context6.sent;
                  result = _ref11.result;

                  result.map(function (v) {
                    _countryMap2.default.map(function (v2) {
                      if (v.countryCode === v2.ab) {
                        v.cname = v2.country_name_cn;
                        v.areaNumber = v2.country_code;
                      }
                    });
                  });
                  setState({ type: 'setUsedPhoneList', payload: result });

                case 6:
                case 'end':
                  return _context6.stop();
              }
            }
          }, _callee6, _this2);
        }));

        return function getUsedPhoneList() {
          return _ref10.apply(this, arguments);
        };
      }();
      var chooseUsedPhoneNumber = function chooseUsedPhoneNumber(data) {
        console.log(data);
        setState({ type: 'setPhoneInputHighLight', payload: false });
      };
      var handleInputBlur = function handleInputBlur() {
        setState({ type: 'setPhoneInputHighLight', payload: false });
        if (!checkPhoneNumber(state.rechargePhone)) {
          return;
        }getCarrierInfo(state.currentCountry, state.rechargePhone);
        _mtaWechatAnalysis2.default.Event.stat("10000", { phone: state.rechargePhone });
      };
      var getPageData = function () {
        var _ref12 = _asyncToGenerator( /*#__PURE__*/_regenerator2.default.mark(function _callee7() {
          var _ref13, result, countryList, currentCountry;

          return _regenerator2.default.wrap(function _callee7$(_context7) {
            while (1) {
              switch (_context7.prev = _context7.next) {
                case 0:
                  _context7.next = 2;
                  return api.getPageData();

                case 2:
                  _ref13 = _context7.sent;
                  result = _ref13.result;
                  countryList = result.countryList.map(function (v) {
                    return (v.searchKeyword = ('+' + v.areaNumber + v.cname + v.countryCode + v.currencyCode + v.ename).toLowerCase()) && v;
                  });

                  setState({ type: 'setCountryList', payload: countryList });
                  currentCountry = getSelectedCountryFromCountryMap(result.nowCountry, countryList);

                  setState({ type: 'setCurrentCountry', payload: currentCountry });
                  setBalanceQuery(currentCountry.balanceQueryUrl);
                  if (result.lastMsisdn && result.nowCountry === result.lastMsisdn.countryCode && Object.keys(currentCountry).length >= 0) {
                    setState({ type: 'setRechargePhone', payload: result.lastMsisdn.msisdn });
                    getCarrierInfo(currentCountry, result.lastMsisdn.msisdn);
                    _mtaWechatAnalysis2.default.Event.stat("10000", { phone: result.lastMsisdn.msisdn });
                  }

                case 10:
                case 'end':
                  return _context7.stop();
              }
            }
          }, _callee7, _this2);
        }));

        return function getPageData() {
          return _ref12.apply(this, arguments);
        };
      }();

      (0, _taroWeapp.useEffect)(function () {
        getPageData();
        getUsedPhoneList();
      }, []);

      this.anonymousFunc0 = function () {
        return setState({ type: 'setCountryListVisible', payload: true });
      };

      this.anonymousFunc1 = phoneInputChange;

      this.anonymousFunc2 = function () {
        return setState({ type: 'setPhoneInputHighLight', payload: true });
      };

      this.anonymousFunc3 = handleInputBlur;
      this.anonymousFunc4 = chooseUsedPhoneNumber;
      this.anonymousFunc5 = showCarrierList;
      this.anonymousFunc6 = selectCountry;

      this.anonymousFunc7 = function () {
        return setState({ type: 'setCountryListVisible', payload: false });
      };

      this.anonymousFunc8 = selectCarrier;

      this.anonymousFunc9 = function () {
        return setState({ type: 'setCarrierListVisible', payload: false });
      };

      _taroWeapp.propsManager.set({
        "className": "myPhoneInput",
        "name": "value",
        "type": "number",
        "border": false,
        "placeholder": '\u8BF7\u8F93\u5165\u624B\u673A\u53F7',
        "maxLength": 15,
        "value": state.rechargePhone,
        "onChange": this.anonymousFunc1,
        "onFocus": this.anonymousFunc2,
        "onBlur": this.anonymousFunc3
      }, $compid__34, $prevCompid__34);
      _taroWeapp.propsManager.set({
        "usedPhoneList": state.usedPhoneList,
        "onConfirm": this.anonymousFunc4,
        "visible": state.phoneInputHighLight
      }, $compid__35, $prevCompid__35);
      state.currentCarrier.carrierName && _taroWeapp.propsManager.set({
        "value": "alert-circle",
        "size": "13",
        "color": "#25a8f5"
      }, $compid__36, $prevCompid__36);
      _taroWeapp.propsManager.set({
        "currentCountry": state.currentCountry,
        "countryList": state.countryList,
        "listVisible": state.countryListVisible,
        "onConfirm": this.anonymousFunc6,
        "onClose": this.anonymousFunc7
      }, $compid__37, $prevCompid__37);
      _taroWeapp.propsManager.set({
        "currentCarrier": state.currentCarrier,
        "listVisible": state.carrierListVisible,
        "carrierList": state.carrierList,
        "onConfirm": this.anonymousFunc8,
        "onClose": this.anonymousFunc9
      }, $compid__38, $prevCompid__38);
      Object.assign(this.__state, {
        $compid__34: $compid__34,
        $compid__35: $compid__35,
        $compid__36: $compid__36,
        $compid__37: $compid__37,
        $compid__38: $compid__38,
        state: state
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
  }, {
    key: 'anonymousFunc5',
    value: function anonymousFunc5(e) {
      ;
    }
  }, {
    key: 'anonymousFunc6',
    value: function anonymousFunc6(e) {
      ;
    }
  }, {
    key: 'anonymousFunc7',
    value: function anonymousFunc7(e) {
      ;
    }
  }, {
    key: 'anonymousFunc8',
    value: function anonymousFunc8(e) {
      ;
    }
  }, {
    key: 'anonymousFunc9',
    value: function anonymousFunc9(e) {
      ;
    }
  }]);

  return InputBar;
}(_taroWeapp2.default.Component), _class.$$events = ["anonymousFunc0", "anonymousFunc5"], _class.$$componentPath = "pages/index/components/InputBar/index", _temp2);
exports.default = InputBar;

Component(__webpack_require__(/*! @tarojs/taro-weapp */ "./node_modules/@tarojs/taro-weapp/index.js").default.createComponent(InputBar));

/***/ }),

/***/ "./node_modules/file-loader/dist/cjs.js?name=[path][name].wxml&context=E:\\Users\\小胖友\\Desktop\\company-coding\\myApp\\src!./node_modules/@tarojs/mini-runner/dist/loaders/miniTemplateLoader.js!./node_modules/@tarojs/mini-runner/dist/loaders/wxTransformerLoader.js?!./src/pages/index/components/InputBar/index.jsx?taro&type=template&parse=COMPONENT&":
/*!**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/file-loader/dist/cjs.js?name=[path][name].wxml&context=E:/Users/小胖友/Desktop/company-coding/myApp/src!./node_modules/@tarojs/mini-runner/dist/loaders/miniTemplateLoader.js!./node_modules/@tarojs/mini-runner/dist/loaders/wxTransformerLoader.js??ref--6-0!./src/pages/index/components/InputBar/index.jsx?taro&type=template&parse=COMPONENT& ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "pages/index/components/InputBar/index.wxml";

/***/ }),

/***/ "./src/pages/index/components/InputBar/api.js":
/*!****************************************************!*\
  !*** ./src/pages/index/components/InputBar/api.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getPageData = getPageData;
exports.getUsedPhoneList = getUsedPhoneList;
exports.getCarrierInfo = getCarrierInfo;
exports.getCarrierList = getCarrierList;

var _request = __webpack_require__(/*! ../../../../utils/request */ "./src/utils/request.js");

var _request2 = _interopRequireDefault(_request);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function getPageData() {
  return (0, _request2.default)('/wx/country/getAll', null, 'GET');
}

function getUsedPhoneList() {
  return (0, _request2.default)('/wx/user/msisdnList', null, 'GET');
}

function getCarrierInfo(_ref) {
  var account = _ref.account,
      countryCode = _ref.countryCode;

  return (0, _request2.default)('/wx/carrier/getCarrierInfo/' + countryCode, account);
}

function getCarrierList(countryCode) {
  return (0, _request2.default)('/wx/carrier/getCarriers/' + countryCode, null, 'GET');
}

/***/ }),

/***/ "./src/pages/index/components/InputBar/index.jsx":
/*!*******************************************************!*\
  !*** ./src/pages/index/components/InputBar/index.jsx ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _index_jsx_taro_type_template_parse_COMPONENT___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.jsx?taro&type=template&parse=COMPONENT& */ "./src/pages/index/components/InputBar/index.jsx?taro&type=template&parse=COMPONENT&");
/* harmony import */ var _index_jsx_taro_type_script_parse_COMPONENT___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index.jsx?taro&type=script&parse=COMPONENT& */ "./src/pages/index/components/InputBar/index.jsx?taro&type=script&parse=COMPONENT&");
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _index_jsx_taro_type_script_parse_COMPONENT___WEBPACK_IMPORTED_MODULE_1__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _index_jsx_taro_type_script_parse_COMPONENT___WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));




/***/ }),

/***/ "./src/pages/index/components/InputBar/index.jsx?taro&type=script&parse=COMPONENT&":
/*!*****************************************************************************************!*\
  !*** ./src/pages/index/components/InputBar/index.jsx?taro&type=script&parse=COMPONENT& ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_tarojs_mini_runner_dist_loaders_wxTransformerLoader_js_ref_6_0_index_jsx_taro_type_script_parse_COMPONENT___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/@tarojs/mini-runner/dist/loaders/wxTransformerLoader.js??ref--6-0!./index.jsx?taro&type=script&parse=COMPONENT& */ "./node_modules/@tarojs/mini-runner/dist/loaders/wxTransformerLoader.js?!./src/pages/index/components/InputBar/index.jsx?taro&type=script&parse=COMPONENT&");
/* harmony import */ var _node_modules_tarojs_mini_runner_dist_loaders_wxTransformerLoader_js_ref_6_0_index_jsx_taro_type_script_parse_COMPONENT___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_tarojs_mini_runner_dist_loaders_wxTransformerLoader_js_ref_6_0_index_jsx_taro_type_script_parse_COMPONENT___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_tarojs_mini_runner_dist_loaders_wxTransformerLoader_js_ref_6_0_index_jsx_taro_type_script_parse_COMPONENT___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_tarojs_mini_runner_dist_loaders_wxTransformerLoader_js_ref_6_0_index_jsx_taro_type_script_parse_COMPONENT___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_tarojs_mini_runner_dist_loaders_wxTransformerLoader_js_ref_6_0_index_jsx_taro_type_script_parse_COMPONENT___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./src/pages/index/components/InputBar/index.jsx?taro&type=template&parse=COMPONENT&":
/*!*******************************************************************************************!*\
  !*** ./src/pages/index/components/InputBar/index.jsx?taro&type=template&parse=COMPONENT& ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _file_loader_name_path_name_wxml_context_E_Users_Desktop_company_coding_myApp_src_node_modules_tarojs_mini_runner_dist_loaders_miniTemplateLoader_js_node_modules_tarojs_mini_runner_dist_loaders_wxTransformerLoader_js_ref_6_0_index_jsx_taro_type_template_parse_COMPONENT___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!file-loader?name=[path][name].wxml&context=E:/Users/小胖友/Desktop/company-coding/myApp/src!../../../../../node_modules/@tarojs/mini-runner/dist/loaders/miniTemplateLoader.js!../../../../../node_modules/@tarojs/mini-runner/dist/loaders/wxTransformerLoader.js??ref--6-0!./index.jsx?taro&type=template&parse=COMPONENT& */ "./node_modules/file-loader/dist/cjs.js?name=[path][name].wxml&context=E:\\Users\\小胖友\\Desktop\\company-coding\\myApp\\src!./node_modules/@tarojs/mini-runner/dist/loaders/miniTemplateLoader.js!./node_modules/@tarojs/mini-runner/dist/loaders/wxTransformerLoader.js?!./src/pages/index/components/InputBar/index.jsx?taro&type=template&parse=COMPONENT&");
/* harmony import */ var _file_loader_name_path_name_wxml_context_E_Users_Desktop_company_coding_myApp_src_node_modules_tarojs_mini_runner_dist_loaders_miniTemplateLoader_js_node_modules_tarojs_mini_runner_dist_loaders_wxTransformerLoader_js_ref_6_0_index_jsx_taro_type_template_parse_COMPONENT___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_file_loader_name_path_name_wxml_context_E_Users_Desktop_company_coding_myApp_src_node_modules_tarojs_mini_runner_dist_loaders_miniTemplateLoader_js_node_modules_tarojs_mini_runner_dist_loaders_wxTransformerLoader_js_ref_6_0_index_jsx_taro_type_template_parse_COMPONENT___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _file_loader_name_path_name_wxml_context_E_Users_Desktop_company_coding_myApp_src_node_modules_tarojs_mini_runner_dist_loaders_miniTemplateLoader_js_node_modules_tarojs_mini_runner_dist_loaders_wxTransformerLoader_js_ref_6_0_index_jsx_taro_type_template_parse_COMPONENT___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _file_loader_name_path_name_wxml_context_E_Users_Desktop_company_coding_myApp_src_node_modules_tarojs_mini_runner_dist_loaders_miniTemplateLoader_js_node_modules_tarojs_mini_runner_dist_loaders_wxTransformerLoader_js_ref_6_0_index_jsx_taro_type_template_parse_COMPONENT___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ "./src/pages/index/components/InputBar/index.scss":
/*!********************************************************!*\
  !*** ./src/pages/index/components/InputBar/index.scss ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/utils/countryMap.js":
/*!*********************************!*\
  !*** ./src/utils/countryMap.js ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = [{
  "country_id": 100007,
  "country_code": "+93",
  "country_name_en": "Afghanistan",
  "country_name_cn": "阿富汗",
  "ab": "AF"
}, {
  "country_id": '100007.1',
  "country_code": "+248",
  "country_name_en": "land Islands",
  "country_name_cn": "奥兰",
  "ab": "AX"
}, {
  "country_id": 100008,
  "country_code": "+355",
  "country_name_en": "Albania",
  "country_name_cn": "阿尔巴尼亚",
  "ab": "AL"
}, {
  "country_id": 100009,
  "country_code": "+213",
  "country_name_en": "Algeria",
  "country_name_cn": "阿尔及利亚",
  "ab": "DZ"
}, {
  "country_id": 100006,
  "country_code": "+244",
  "country_name_en": "Angola",
  "country_name_cn": "安哥拉",
  "ab": "AO"
}, {
  "country_id": 100010,
  "country_code": "+376",
  "country_name_en": "Andorra",
  "country_name_cn": "安道尔共和国",
  "ab": "AD"
}, {
  "country_id": 100011,
  "country_code": "+1264",
  "country_name_en": "Anguilla",
  "country_name_cn": "安圭拉岛",
  "ab": "AI"
}, {
  "country_id": 100012,
  "country_code": "+1268",
  "country_name_en": "Antigua and Barbuda",
  "country_name_cn": "安提瓜和巴布达",
  "ab": "AG"
}, {
  "country_id": 100013,
  "country_code": "+54",
  "country_name_en": "Argentina",
  "country_name_cn": "阿根廷",
  "ab": "AR"
}, {
  "country_id": 100014,
  "country_code": "+374",
  "country_name_en": "Armenia",
  "country_name_cn": "亚美尼亚",
  "ab": "AM"
}, {
  "country_id": 100015,
  "country_code": "+247",
  "country_name_en": "Ascension",
  "country_name_cn": "阿森松",
  "ab": ""
}, {
  "country_id": 100016,
  "country_code": "+61",
  "country_name_en": "Australia",
  "country_name_cn": "澳大利亚",
  "ab": "AU"
}, {
  "country_id": 100017,
  "country_code": "+43",
  "country_name_en": "Austria",
  "country_name_cn": "奥地利",
  "ab": "AT"
}, {
  "country_id": 100018,
  "country_code": "+994",
  "country_name_en": "Azerbaijan",
  "country_name_cn": "阿塞拜疆",
  "ab": "AZ"
}, {
  "country_id": 100019,
  "country_code": "+1242",
  "country_name_en": "Bahamas",
  "country_name_cn": "巴哈马",
  "ab": "BS"
}, {
  "country_id": 100020,
  "country_code": "+973",
  "country_name_en": "Bahrain",
  "country_name_cn": "巴林",
  "ab": "BH"
}, {
  "country_id": 100021,
  "country_code": "+880",
  "country_name_en": "Bangladesh",
  "country_name_cn": "孟加拉国",
  "ab": "BD"
}, {
  "country_id": 100022,
  "country_code": "+1246",
  "country_name_en": "Barbados",
  "country_name_cn": "巴巴多斯",
  "ab": "BB"
}, {
  "country_id": 100023,
  "country_code": "+375",
  "country_name_en": "Belarus",
  "country_name_cn": "白俄罗斯",
  "ab": "BY"
}, {
  "country_id": 100024,
  "country_code": "+32",
  "country_name_en": "Belgium",
  "country_name_cn": "比利时",
  "ab": "BE"
}, {
  "country_id": 100025,
  "country_code": "+501",
  "country_name_en": "Belize",
  "country_name_cn": "伯利兹",
  "ab": "BZ"
}, {
  "country_id": 100026,
  "country_code": "+229",
  "country_name_en": "Benin",
  "country_name_cn": "贝宁",
  "ab": "BJ"
}, {
  "country_id": 100027,
  "country_code": "+1441",
  "country_name_en": "Bermuda Is.",
  "country_name_cn": "百慕大群岛",
  "ab": "BM"
}, {
  "country_id": 100028,
  "country_code": "+591",
  "country_name_en": "Bolivia",
  "country_name_cn": "玻利维亚",
  "ab": "BO"
}, {
  "country_id": 100029,
  "country_code": "+267",
  "country_name_en": "Botswana",
  "country_name_cn": "博茨瓦纳",
  "ab": "BW"
}, {
  "country_id": 100030,
  "country_code": "+55",
  "country_name_en": "Brazil",
  "country_name_cn": "巴西",
  "ab": "BR"
}, {
  "country_id": 100031,
  "country_code": "+673",
  "country_name_en": "Brunei",
  "country_name_cn": "文莱",
  "ab": "BN"
}, {
  "country_id": 100032,
  "country_code": "+359",
  "country_name_en": "Bulgaria",
  "country_name_cn": "保加利亚",
  "ab": "BG"
}, {
  "country_id": 100033,
  "country_code": "+226",
  "country_name_en": "Burkina-faso",
  "country_name_cn": "布基纳法索",
  "ab": "BF"
}, {
  "country_id": 100034,
  "country_code": "+95",
  "country_name_en": "Burma",
  "country_name_cn": "缅甸",
  "ab": "MM"
}, {
  "country_id": 100035,
  "country_code": "+257",
  "country_name_en": "Burundi",
  "country_name_cn": "布隆迪",
  "ab": "BI"
}, {
  "country_id": 100036,
  "country_code": "+237",
  "country_name_en": "Cameroon",
  "country_name_cn": "喀麦隆",
  "ab": "CM"
}, {
  "country_id": 100037,
  "country_code": "+1",
  "country_name_en": "Canada",
  "country_name_cn": "加拿大",
  "ab": "CA"
}, {
  "country_id": 100038,
  "country_code": "+1345",
  "country_name_en": "Cayman Is.",
  "country_name_cn": "开曼群岛",
  "ab": ""
}, {
  "country_id": 100039,
  "country_code": "+236",
  "country_name_en": "Central African Republic",
  "country_name_cn": "中非共和国",
  "ab": "CF"
}, {
  "country_id": 100040,
  "country_code": "+235",
  "country_name_en": "Chad",
  "country_name_cn": "乍得",
  "ab": "TD"
}, {
  "country_id": 100041,
  "country_code": "+56",
  "country_name_en": "Chile",
  "country_name_cn": "智利",
  "ab": "CL"
}, {
  "country_id": 100042,
  "country_code": "+86",
  "country_name_en": "China",
  "country_name_cn": "中国",
  "ab": "CN"
}, {
  "country_id": 100043,
  "country_code": "+57",
  "country_name_en": "Colombia",
  "country_name_cn": "哥伦比亚",
  "ab": "CO"
}, {
  "country_id": 100044,
  "country_code": "+242",
  "country_name_en": "Congo",
  "country_name_cn": "刚果",
  "ab": "CG"
}, {
  "country_id": 100045,
  "country_code": "+682",
  "country_name_en": "Cook Is.",
  "country_name_cn": "库克群岛",
  "ab": "CK"
}, {
  "country_id": 100046,
  "country_code": "+506",
  "country_name_en": "Costa Rica",
  "country_name_cn": "哥斯达黎加",
  "ab": "CR"
}, {
  "country_id": 100047,
  "country_code": "+53",
  "country_name_en": "Cuba",
  "country_name_cn": "古巴",
  "ab": "CU"
}, {
  "country_id": 100048,
  "country_code": "+357",
  "country_name_en": "Cyprus",
  "country_name_cn": "塞浦路斯",
  "ab": "CY"
}, {
  "country_id": 100049,
  "country_code": "+420",
  "country_name_en": "Czech Republic",
  "country_name_cn": "捷克",
  "ab": "CZ"
}, {
  "country_id": 100050,
  "country_code": "+45",
  "country_name_en": "Denmark",
  "country_name_cn": "丹麦",
  "ab": "DK"
}, {
  "country_id": 100051,
  "country_code": "+253",
  "country_name_en": "Djibouti",
  "country_name_cn": "吉布提",
  "ab": "DJ"
}, {
  "country_id": 100052,
  "country_code": "+1890",
  "country_name_en": "Dominica Rep.",
  "country_name_cn": "多米尼加共和国",
  "ab": "DO"
}, {
  "country_id": 100053,
  "country_code": "+593",
  "country_name_en": "Ecuador",
  "country_name_cn": "厄瓜多尔",
  "ab": "EC"
}, {
  "country_id": 100054,
  "country_code": "+20",
  "country_name_en": "Egypt",
  "country_name_cn": "埃及",
  "ab": "EG"
}, {
  "country_id": 100055,
  "country_code": "+503",
  "country_name_en": "EI Salvador",
  "country_name_cn": "萨尔瓦多",
  "ab": "SV"
}, {
  "country_id": 100056,
  "country_code": "+372",
  "country_name_en": "Estonia",
  "country_name_cn": "爱沙尼亚",
  "ab": "EE"
}, {
  "country_id": 100057,
  "country_code": "+251",
  "country_name_en": "Ethiopia",
  "country_name_cn": "埃塞俄比亚",
  "ab": "ET"
}, {
  "country_id": 100058,
  "country_code": "+679",
  "country_name_en": "Fiji",
  "country_name_cn": "斐济",
  "ab": "FJ"
}, {
  "country_id": 100059,
  "country_code": "+358",
  "country_name_en": "Finland",
  "country_name_cn": "芬兰",
  "ab": "FI"
}, {
  "country_id": 100060,
  "country_code": "+33",
  "country_name_en": "France",
  "country_name_cn": "法国",
  "ab": "FR"
}, {
  "country_id": 100061,
  "country_code": "+594",
  "country_name_en": "French Guiana",
  "country_name_cn": "法属圭亚那",
  "ab": "GF"
}, {
  "country_id": 100062,
  "country_code": "+241",
  "country_name_en": "Gabon",
  "country_name_cn": "加蓬",
  "ab": "GA"
}, {
  "country_id": 100063,
  "country_code": "+220",
  "country_name_en": "Gambia",
  "country_name_cn": "冈比亚",
  "ab": "GM"
}, {
  "country_id": 100064,
  "country_code": "+995",
  "country_name_en": "Georgia",
  "country_name_cn": "格鲁吉亚",
  "ab": "GE"
}, {
  "country_id": 100065,
  "country_code": "+49",
  "country_name_en": "Germany",
  "country_name_cn": "德国",
  "ab": "DE"
}, {
  "country_id": 100066,
  "country_code": "+233",
  "country_name_en": "Ghana",
  "country_name_cn": "加纳",
  "ab": "GH"
}, {
  "country_id": 100067,
  "country_code": "+350",
  "country_name_en": "Gibraltar",
  "country_name_cn": "直布罗陀",
  "ab": "GI"
}, {
  "country_id": 100068,
  "country_code": "+30",
  "country_name_en": "Greece",
  "country_name_cn": "希腊",
  "ab": "GR"
}, {
  "country_id": 100069,
  "country_code": "+1809",
  "country_name_en": "Grenada",
  "country_name_cn": "格林纳达",
  "ab": "GD"
}, {
  "country_id": 100070,
  "country_code": "+1671",
  "country_name_en": "Guam",
  "country_name_cn": "关岛",
  "ab": "GU"
}, {
  "country_id": 100071,
  "country_code": "+502",
  "country_name_en": "Guatemala",
  "country_name_cn": "危地马拉",
  "ab": "GT"
}, {
  "country_id": 100072,
  "country_code": "+224",
  "country_name_en": "Guinea",
  "country_name_cn": "几内亚",
  "ab": "GN"
}, {
  "country_id": 100073,
  "country_code": "+592",
  "country_name_en": "Guyana",
  "country_name_cn": "圭亚那",
  "ab": "GY"
}, {
  "country_id": 100074,
  "country_code": "+509",
  "country_name_en": "Haiti",
  "country_name_cn": "海地",
  "ab": "HT"
}, {
  "country_id": 100075,
  "country_code": "+504",
  "country_name_en": "Honduras",
  "country_name_cn": "洪都拉斯",
  "ab": "HN"
}, {
  "country_id": 100076,
  "country_code": "+852",
  "country_name_en": "Hongkong",
  "country_name_cn": "香港",
  "ab": "HK"
}, {
  "country_id": 100077,
  "country_code": "+36",
  "country_name_en": "Hungary",
  "country_name_cn": "匈牙利",
  "ab": "HU"
}, {
  "country_id": 100078,
  "country_code": "+354",
  "country_name_en": "Iceland",
  "country_name_cn": "冰岛",
  "ab": "IS"
}, {
  "country_id": 100079,
  "country_code": "+91",
  "country_name_en": "India",
  "country_name_cn": "印度",
  "ab": "IN"
}, {
  "country_id": 100080,
  "country_code": "+62",
  "country_name_en": "Indonesia",
  "country_name_cn": "印度尼西亚",
  "ab": "ID"
}, {
  "country_id": 100081,
  "country_code": "+98",
  "country_name_en": "Iran",
  "country_name_cn": "伊朗",
  "ab": "IR"
}, {
  "country_id": 100082,
  "country_code": "+964",
  "country_name_en": "Iraq",
  "country_name_cn": "伊拉克",
  "ab": "IQ"
}, {
  "country_id": 100083,
  "country_code": "+353",
  "country_name_en": "Ireland",
  "country_name_cn": "爱尔兰",
  "ab": "IE"
}, {
  "country_id": 100084,
  "country_code": "+972",
  "country_name_en": "Israel",
  "country_name_cn": "以色列",
  "ab": "IL"
}, {
  "country_id": 100085,
  "country_code": "+39",
  "country_name_en": "Italy",
  "country_name_cn": "意大利",
  "ab": "IT"
}, {
  "country_id": 100086,
  "country_code": "+225",
  "country_name_en": "Ivory Coast",
  "country_name_cn": "科特迪瓦",
  "ab": ""
}, {
  "country_id": 100087,
  "country_code": "+1876",
  "country_name_en": "Jamaica",
  "country_name_cn": "牙买加",
  "ab": "JM"
}, {
  "country_id": 100088,
  "country_code": "+81",
  "country_name_en": "Japan",
  "country_name_cn": "日本",
  "ab": "JP"
}, {
  "country_id": 100089,
  "country_code": "+962",
  "country_name_en": "Jordan",
  "country_name_cn": "约旦",
  "ab": "JO"
}, {
  "country_id": 100090,
  "country_code": "+855",
  "country_name_en": "Kampuchea (Cambodia )",
  "country_name_cn": "柬埔寨",
  "ab": "KH"
}, {
  "country_id": 100091,
  "country_code": "+327",
  "country_name_en": "Kazakstan",
  "country_name_cn": "哈萨克斯坦",
  "ab": "KZ"
}, {
  "country_id": 100092,
  "country_code": "+254",
  "country_name_en": "Kenya",
  "country_name_cn": "肯尼亚",
  "ab": "KE"
}, {
  "country_id": 100093,
  "country_code": "+82",
  "country_name_en": "Korea",
  "country_name_cn": "韩国",
  "ab": "KR"
}, {
  "country_id": 100094,
  "country_code": "+965",
  "country_name_en": "Kuwait",
  "country_name_cn": "科威特",
  "ab": "KW"
}, {
  "country_id": 100095,
  "country_code": "+331",
  "country_name_en": "Kyrgyzstan",
  "country_name_cn": "吉尔吉斯坦",
  "ab": "KG"
}, {
  "country_id": 100096,
  "country_code": "+856",
  "country_name_en": "Laos",
  "country_name_cn": "老挝",
  "ab": "LA"
}, {
  "country_id": 100097,
  "country_code": "+371",
  "country_name_en": "Latvia",
  "country_name_cn": "拉脱维亚",
  "ab": "LV"
}, {
  "country_id": 100098,
  "country_code": "+961",
  "country_name_en": "Lebanon",
  "country_name_cn": "黎巴嫩",
  "ab": "LB"
}, {
  "country_id": 100099,
  "country_code": "+266",
  "country_name_en": "Lesotho",
  "country_name_cn": "莱索托",
  "ab": "LS"
}, {
  "country_id": 100100,
  "country_code": "+231",
  "country_name_en": "Liberia",
  "country_name_cn": "利比里亚",
  "ab": "LR"
}, {
  "country_id": 100101,
  "country_code": "+218",
  "country_name_en": "Libya",
  "country_name_cn": "利比亚",
  "ab": "LY"
}, {
  "country_id": 100102,
  "country_code": "+423",
  "country_name_en": "Liechtenstein",
  "country_name_cn": "列支敦士登",
  "ab": "LI"
}, {
  "country_id": 100103,
  "country_code": "+370",
  "country_name_en": "Lithuania",
  "country_name_cn": "立陶宛",
  "ab": "LT"
}, {
  "country_id": 100104,
  "country_code": "+352",
  "country_name_en": "Luxembourg",
  "country_name_cn": "卢森堡",
  "ab": "LU"
}, {
  "country_id": 100105,
  "country_code": "+853",
  "country_name_en": "Macao",
  "country_name_cn": "澳门",
  "ab": "MO"
}, {
  "country_id": 100106,
  "country_code": "+261",
  "country_name_en": "Madagascar",
  "country_name_cn": "马达加斯加",
  "ab": "MG"
}, {
  "country_id": 100107,
  "country_code": "+265",
  "country_name_en": "Malawi",
  "country_name_cn": "马拉维",
  "ab": "MW"
}, {
  "country_id": 100108,
  "country_code": "+60",
  "country_name_en": "Malaysia",
  "country_name_cn": "马来西亚",
  "ab": "MY"
}, {
  "country_id": 100109,
  "country_code": "+960",
  "country_name_en": "Maldives",
  "country_name_cn": "马尔代夫",
  "ab": "MV"
}, {
  "country_id": 100110,
  "country_code": "+223",
  "country_name_en": "Mali",
  "country_name_cn": "马里",
  "ab": "ML"
}, {
  "country_id": 100111,
  "country_code": "+356",
  "country_name_en": "Malta",
  "country_name_cn": "马耳他",
  "ab": "MT"
}, {
  "country_id": 100112,
  "country_code": "+1670",
  "country_name_en": "Mariana Is",
  "country_name_cn": "马里亚那群岛",
  "ab": ""
}, {
  "country_id": 100113,
  "country_code": "+596",
  "country_name_en": "Martinique",
  "country_name_cn": "马提尼克",
  "ab": ""
}, {
  "country_id": 100114,
  "country_code": "+230",
  "country_name_en": "Mauritius",
  "country_name_cn": "毛里求斯",
  "ab": "MU"
}, {
  "country_id": 100115,
  "country_code": "+52",
  "country_name_en": "Mexico",
  "country_name_cn": "墨西哥",
  "ab": "MX"
}, {
  "country_id": 100116,
  "country_code": "+373",
  "country_name_en": "Moldova, Republic of",
  "country_name_cn": "摩尔多瓦",
  "ab": "MD"
}, {
  "country_id": 100117,
  "country_code": "+377",
  "country_name_en": "Monaco",
  "country_name_cn": "摩纳哥",
  "ab": "MC"
}, {
  "country_id": 100118,
  "country_code": "+976",
  "country_name_en": "Mongolia",
  "country_name_cn": "蒙古",
  "ab": "MN"
}, {
  "country_id": 100119,
  "country_code": "+1664",
  "country_name_en": "Montserrat Is",
  "country_name_cn": "蒙特塞拉特岛",
  "ab": "MS"
}, {
  "country_id": 100120,
  "country_code": "+212",
  "country_name_en": "Morocco",
  "country_name_cn": "摩洛哥",
  "ab": "MA"
}, {
  "country_id": 100121,
  "country_code": "+258",
  "country_name_en": "Mozambique",
  "country_name_cn": "莫桑比克",
  "ab": "MZ"
}, {
  "country_id": 100122,
  "country_code": "+264",
  "country_name_en": "Namibia",
  "country_name_cn": "纳米比亚",
  "ab": "NA"
}, {
  "country_id": 100123,
  "country_code": "+674",
  "country_name_en": "Nauru",
  "country_name_cn": "瑙鲁",
  "ab": "NR"
}, {
  "country_id": 100124,
  "country_code": "+977",
  "country_name_en": "Nepal",
  "country_name_cn": "尼泊尔",
  "ab": "NP"
}, {
  "country_id": 100125,
  "country_code": "+599",
  "country_name_en": "Netheriands Antilles",
  "country_name_cn": "荷属安的列斯",
  "ab": ""
}, {
  "country_id": 100126,
  "country_code": "+31",
  "country_name_en": "Netherlands",
  "country_name_cn": "荷兰",
  "ab": "NL"
}, {
  "country_id": 100127,
  "country_code": "+64",
  "country_name_en": "New Zealand",
  "country_name_cn": "新西兰",
  "ab": "NZ"
}, {
  "country_id": 100128,
  "country_code": "+505",
  "country_name_en": "Nicaragua",
  "country_name_cn": "尼加拉瓜",
  "ab": "NI"
}, {
  "country_id": 100129,
  "country_code": "+227",
  "country_name_en": "Niger",
  "country_name_cn": "尼日尔",
  "ab": "NE"
}, {
  "country_id": 100130,
  "country_code": "+234",
  "country_name_en": "Nigeria",
  "country_name_cn": "尼日利亚",
  "ab": "NG"
}, {
  "country_id": 100131,
  "country_code": "+850",
  "country_name_en": "North Korea",
  "country_name_cn": "朝鲜",
  "ab": "KP"
}, {
  "country_id": 100132,
  "country_code": "+47",
  "country_name_en": "Norway",
  "country_name_cn": "挪威",
  "ab": "NO"
}, {
  "country_id": 100133,
  "country_code": "+968",
  "country_name_en": "Oman",
  "country_name_cn": "阿曼",
  "ab": "OM"
}, {
  "country_id": 100134,
  "country_code": "+92",
  "country_name_en": "Pakistan",
  "country_name_cn": "巴基斯坦",
  "ab": "PK"
}, {
  "country_id": '100134.1',
  "country_code": "+585",
  "country_name_en": "Palau",
  "country_name_cn": "帛琉",
  "ab": "PW"
}, {
  "country_id": '100134.2',
  "country_code": "+275",
  "country_name_en": "Palestine, State of",
  "country_name_cn": "巴勒斯坦",
  "ab": "PS"
}, {
  "country_id": 100135,
  "country_code": "+507",
  "country_name_en": "Panama",
  "country_name_cn": "巴拿马",
  "ab": "PA"
}, {
  "country_id": 100136,
  "country_code": "+675",
  "country_name_en": "Papua New Cuinea",
  "country_name_cn": "巴布亚新几内亚",
  "ab": "PG"
}, {
  "country_id": 100137,
  "country_code": "+595",
  "country_name_en": "Paraguay",
  "country_name_cn": "巴拉圭",
  "ab": "PY"
}, {
  "country_id": 100138,
  "country_code": "+51",
  "country_name_en": "Peru",
  "country_name_cn": "秘鲁",
  "ab": "PE"
}, {
  "country_id": 100139,
  "country_code": "+63",
  "country_name_en": "Philippines",
  "country_name_cn": "菲律宾",
  "ab": "PH"
}, {
  "country_id": 100140,
  "country_code": "+48",
  "country_name_en": "Poland",
  "country_name_cn": "波兰",
  "ab": "PL"
}, {
  "country_id": 100141,
  "country_code": "+689",
  "country_name_en": "French Polynesia",
  "country_name_cn": "法属玻利尼西亚",
  "ab": "PF"
}, {
  "country_id": 100142,
  "country_code": "+351",
  "country_name_en": "Portugal",
  "country_name_cn": "葡萄牙",
  "ab": "PT"
}, {
  "country_id": 100143,
  "country_code": "+1787",
  "country_name_en": "Puerto Rico",
  "country_name_cn": "波多黎各",
  "ab": "PR"
}, {
  "country_id": 100144,
  "country_code": "+974",
  "country_name_en": "Qatar",
  "country_name_cn": "卡塔尔",
  "ab": "QA"
}, {
  "country_id": 100145,
  "country_code": "+262",
  "country_name_en": "Reunion",
  "country_name_cn": "留尼旺",
  "ab": ""
}, {
  "country_id": 100146,
  "country_code": "+40",
  "country_name_en": "Romania",
  "country_name_cn": "罗马尼亚",
  "ab": "RO"
}, {
  "country_id": 100147,
  "country_code": "+7",
  "country_name_en": "Russia",
  "country_name_cn": "俄罗斯",
  "ab": "RU"
}, {
  "country_id": 100148,
  "country_code": "+1758",
  "country_name_en": "Saint Lueia",
  "country_name_cn": "圣卢西亚",
  "ab": "LC"
}, {
  "country_id": 100149,
  "country_code": "+1784",
  "country_name_en": "Saint Vincent",
  "country_name_cn": "圣文森特岛",
  "ab": "VC"
}, {
  "country_id": 100150,
  "country_code": "+684",
  "country_name_en": "Samoa Eastern",
  "country_name_cn": "东萨摩亚(美)",
  "ab": ""
}, {
  "country_id": 100151,
  "country_code": "+685",
  "country_name_en": "Samoa Western",
  "country_name_cn": "西萨摩亚",
  "ab": ""
}, {
  "country_id": 100152,
  "country_code": "+378",
  "country_name_en": "San Marino",
  "country_name_cn": "圣马力诺",
  "ab": "SM"
}, {
  "country_id": 100153,
  "country_code": "+239",
  "country_name_en": "Sao Tome and Principe",
  "country_name_cn": "圣多美和普林西比",
  "ab": "ST"
}, {
  "country_id": 100154,
  "country_code": "+966",
  "country_name_en": "Saudi Arabia",
  "country_name_cn": "沙特阿拉伯",
  "ab": "SA"
}, {
  "country_id": 100155,
  "country_code": "+221",
  "country_name_en": "Senegal",
  "country_name_cn": "塞内加尔",
  "ab": "SN"
}, {
  "country_id": 100156,
  "country_code": "+248",
  "country_name_en": "Seychelles",
  "country_name_cn": "塞舌尔",
  "ab": "SC"
}, {
  "country_id": 100157,
  "country_code": "+232",
  "country_name_en": "Sierra Leone",
  "country_name_cn": "塞拉利昂",
  "ab": "SL"
}, {
  "country_id": 100158,
  "country_code": "+65",
  "country_name_en": "Singapore",
  "country_name_cn": "新加坡",
  "ab": "SG"
}, {
  "country_id": 100159,
  "country_code": "+421",
  "country_name_en": "Slovakia",
  "country_name_cn": "斯洛伐克",
  "ab": "SK"
}, {
  "country_id": 100160,
  "country_code": "+386",
  "country_name_en": "Slovenia",
  "country_name_cn": "斯洛文尼亚",
  "ab": "SI"
}, {
  "country_id": 100161,
  "country_code": "+677",
  "country_name_en": "Solomon Is",
  "country_name_cn": "所罗门群岛",
  "ab": "SB"
}, {
  "country_id": 100162,
  "country_code": "+252",
  "country_name_en": "Somali",
  "country_name_cn": "索马里",
  "ab": "SO"
}, {
  "country_id": 100163,
  "country_code": "+27",
  "country_name_en": "South Africa",
  "country_name_cn": "南非",
  "ab": "ZA"
}, {
  "country_id": 100164,
  "country_code": "+34",
  "country_name_en": "Spain",
  "country_name_cn": "西班牙",
  "ab": "ES"
}, {
  "country_id": 100165,
  "country_code": "+94",
  "country_name_en": "Sri Lanka",
  "country_name_cn": "斯里兰卡",
  "ab": "LK"
}, {
  "country_id": 100166,
  "country_code": "+1758",
  "country_name_en": "St.Lucia",
  "country_name_cn": "圣卢西亚",
  "ab": "LC"
}, {
  "country_id": 100167,
  "country_code": "+1784",
  "country_name_en": "St.Vincent",
  "country_name_cn": "圣文森特",
  "ab": "VC"
}, {
  "country_id": 100168,
  "country_code": "+249",
  "country_name_en": "Sudan",
  "country_name_cn": "苏丹",
  "ab": "SD"
}, {
  "country_id": 100169,
  "country_code": "+597",
  "country_name_en": "Suriname",
  "country_name_cn": "苏里南",
  "ab": "SR"
}, {
  "country_id": 100170,
  "country_code": "+268",
  "country_name_en": "Swaziland",
  "country_name_cn": "斯威士兰",
  "ab": "SZ"
}, {
  "country_id": 100171,
  "country_code": "+46",
  "country_name_en": "Sweden",
  "country_name_cn": "瑞典",
  "ab": "SE"
}, {
  "country_id": 100172,
  "country_code": "+41",
  "country_name_en": "Switzerland",
  "country_name_cn": "瑞士",
  "ab": "CH"
}, {
  "country_id": 100173,
  "country_code": "+963",
  "country_name_en": "Syria",
  "country_name_cn": "叙利亚",
  "ab": "SY"
}, {
  "country_id": 100174,
  "country_code": "+886",
  "country_name_en": "Taiwan",
  "country_name_cn": "台湾省",
  "ab": "TW"
}, {
  "country_id": 100175,
  "country_code": "+992",
  "country_name_en": "Tajikstan",
  "country_name_cn": "塔吉克斯坦",
  "ab": "TJ"
}, {
  "country_id": 100176,
  "country_code": "+255",
  "country_name_en": "Tanzania",
  "country_name_cn": "坦桑尼亚",
  "ab": "TZ"
}, {
  "country_id": 100177,
  "country_code": "+66",
  "country_name_en": "Thailand",
  "country_name_cn": "泰国",
  "ab": "TH"
}, {
  "country_id": 100178,
  "country_code": "+228",
  "country_name_en": "Togo",
  "country_name_cn": "多哥",
  "ab": "TG"
}, {
  "country_id": 100179,
  "country_code": "+676",
  "country_name_en": "Tonga",
  "country_name_cn": "汤加",
  "ab": "TO"
}, {
  "country_id": 100180,
  "country_code": "+1809",
  "country_name_en": "Trinidad and Tobago",
  "country_name_cn": "特立尼达和多巴哥",
  "ab": "TT"
}, {
  "country_id": 100181,
  "country_code": "+216",
  "country_name_en": "Tunisia",
  "country_name_cn": "突尼斯",
  "ab": "TN"
}, {
  "country_id": 100182,
  "country_code": "+90",
  "country_name_en": "Turkey",
  "country_name_cn": "土耳其",
  "ab": "TR"
}, {
  "country_id": 100183,
  "country_code": "+993",
  "country_name_en": "Turkmenistan",
  "country_name_cn": "土库曼斯坦",
  "ab": "TM"
}, {
  "country_id": 100184,
  "country_code": "+256",
  "country_name_en": "Uganda",
  "country_name_cn": "乌干达",
  "ab": "UG"
}, {
  "country_id": 100185,
  "country_code": "+380",
  "country_name_en": "Ukraine",
  "country_name_cn": "乌克兰",
  "ab": "UA"
}, {
  "country_id": 100186,
  "country_code": "+971",
  "country_name_en": "United Arab Emirates",
  "country_name_cn": "阿拉伯联合酋长国",
  "ab": "AE"
}, {
  "country_id": 100187,
  "country_code": "+44",
  "country_name_en": "United Kiongdom",
  "country_name_cn": "英国",
  "ab": "GB"
}, {
  "country_id": 100188,
  "country_code": "+1",
  "country_name_en": "United States of America",
  "country_name_cn": "美国",
  "ab": "US"
}, {
  "country_id": 100189,
  "country_code": "+598",
  "country_name_en": "Uruguay",
  "country_name_cn": "乌拉圭",
  "ab": "UY"
}, {
  "country_id": 100190,
  "country_code": "+998",
  "country_name_en": "Uzbekistan",
  "country_name_cn": "乌兹别克斯坦",
  "ab": "UZ"
}, {
  "country_id": 100191,
  "country_code": "+58",
  "country_name_en": "Venezuela",
  "country_name_cn": "委内瑞拉",
  "ab": "VE"
}, {
  "country_id": 100192,
  "country_code": "+84",
  "country_name_en": "Vietnam",
  "country_name_cn": "越南",
  "ab": "VN"
}, {
  "country_id": 100193,
  "country_code": "+967",
  "country_name_en": "Yemen",
  "country_name_cn": "也门",
  "ab": "YE"
}, {
  "country_id": 100194,
  "country_code": "+381",
  "country_name_en": "Yugoslavia",
  "country_name_cn": "南斯拉夫",
  "ab": "YU"
}, {
  "country_id": 100195,
  "country_code": "+263",
  "country_name_en": "Zimbabwe",
  "country_name_cn": "津巴布韦",
  "ab": "ZW"
}, {
  "country_id": 100196,
  "country_code": "+243",
  "country_name_en": "Zaire",
  "country_name_cn": "扎伊尔",
  "ab": "ZR"
}, {
  "country_id": 100197,
  "country_code": "+260",
  "country_name_en": "Zambia",
  "country_name_cn": "赞比亚",
  "ab": "ZM"
}];

/***/ })

},[["./src/pages/index/components/InputBar/index.jsx","runtime","vendors","common"]]]);