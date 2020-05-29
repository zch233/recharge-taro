(wx["webpackJsonp"] = wx["webpackJsonp"] || []).push([["pages/index/components/ProductBar/components/ProductTab/index"],{

/***/ "./node_modules/@tarojs/mini-runner/dist/loaders/wxTransformerLoader.js?!./src/pages/index/components/ProductBar/components/ProductTab/index.jsx?taro&type=script&parse=COMPONENT&":
/*!**************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@tarojs/mini-runner/dist/loaders/wxTransformerLoader.js??ref--6-0!./src/pages/index/components/ProductBar/components/ProductTab/index.jsx?taro&type=script&parse=COMPONENT& ***!
  \**************************************************************************************************************************************************************************************************/
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

__webpack_require__(/*! ./index.scss */ "./src/pages/index/components/ProductBar/components/ProductTab/index.scss");

var _api = __webpack_require__(/*! ./api */ "./src/pages/index/components/ProductBar/components/ProductTab/api.js");

var api = _interopRequireWildcard(_api);

var _mtaWechatAnalysis = __webpack_require__(/*! mta-wechat-analysis */ "./node_modules/mta-wechat-analysis/index.js");

var _mtaWechatAnalysis2 = _interopRequireDefault(_mtaWechatAnalysis);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ProductTab = (_temp2 = _class = function (_Taro$Component) {
  _inherits(ProductTab, _Taro$Component);

  function ProductTab() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, ProductTab);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = ProductTab.__proto__ || Object.getPrototypeOf(ProductTab)).call.apply(_ref, [this].concat(args))), _this), _this.$usedState = ["anonymousState__temp", "anonymousState__temp2", "anonymousState__temp3", "loopArray11", "$compid__45", "$compid__46", "list", "currentProduct", "initTips", "requestProductData", "current", "index", "handleBuyClick", "productDisabled"], _this.customComponents = ["AtTabsPane", "ProductItem", "ProductEmpty"], _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(ProductTab, [{
    key: '_constructor',
    value: function _constructor(props) {
      _get(ProductTab.prototype.__proto__ || Object.getPrototypeOf(ProductTab.prototype), '_constructor', this).call(this, props);

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

      var _genCompid = (0, _taroWeapp.genCompid)(__prefix + "$compid__45"),
          _genCompid2 = _slicedToArray(_genCompid, 2),
          $prevCompid__45 = _genCompid2[0],
          $compid__45 = _genCompid2[1];

      var _genCompid3 = (0, _taroWeapp.genCompid)(__prefix + "$compid__46"),
          _genCompid4 = _slicedToArray(_genCompid3, 2),
          $prevCompid__46 = _genCompid4[0],
          $compid__46 = _genCompid4[1];

      var _props = this.__props,
          _props$requestProduct = _props.requestProductData,
          requestProductData = _props$requestProduct === undefined ? {} : _props$requestProduct,
          current = _props.current,
          index = _props.index,
          handleBuyClick = _props.handleBuyClick,
          initTips = _props.initTips,
          productDisabled = _props.productDisabled;

      var _useState = (0, _taroWeapp.useState)([]),
          _useState2 = _slicedToArray(_useState, 2),
          list = _useState2[0],
          setList = _useState2[1];

      var _useState3 = (0, _taroWeapp.useState)({}),
          _useState4 = _slicedToArray(_useState3, 2),
          currentProduct = _useState4[0],
          setCurrentProduct = _useState4[1];

      var requested = (0, _taroWeapp.useRef)();
      var getProductList = function () {
        var _ref2 = _asyncToGenerator( /*#__PURE__*/_regenerator2.default.mark(function _callee(requestProductData) {
          var _ref3, result;

          return _regenerator2.default.wrap(function _callee$(_context) {
            while (1) {
              switch (_context.prev = _context.next) {
                case 0:
                  _context.next = 2;
                  return api.getProductList(requestProductData);

                case 2:
                  _ref3 = _context.sent;
                  result = _ref3.result;

                  setCurrentProduct({});
                  requested.current = true;
                  setList(result || []);

                case 7:
                case 'end':
                  return _context.stop();
              }
            }
          }, _callee, _this2);
        }));

        return function getProductList(_x) {
          return _ref2.apply(this, arguments);
        };
      }();
      var handleProductClick = function handleProductClick(product) {
        _mtaWechatAnalysis2.default.Event.stat("10001", { product: product.code });
        setCurrentProduct(product);
        if (index === 0) {
          handleBuyClick(product);
        } else if (index === 1) {
          setTimeout(function () {
            _taroWeapp2.default.pageScrollTo({
              duration: 300,
              scrollTop: 300
            });
          });
        }
      };
      (0, _taroWeapp.useEffect)(function () {
        if (current === index && !requested.current && Object.keys(requestProductData).length > 0) {
          console.log('请求数据');
          getProductList(_extends({}, requestProductData, { type: index === 0 ? 'HF' : 'LL' }));
        }
      }, [current]);
      (0, _taroWeapp.useEffect)(function () {
        if (Object.keys(requestProductData).length > 0) {
          requested.current = false;
          current === index && getProductList(_extends({}, requestProductData, { type: index === 0 ? 'HF' : 'LL' }));
        } else {
          setList([]);
        }
      }, [requestProductData]);

      this.anonymousFunc0 = function () {
        return handleBuyClick(currentProduct);
      };

      var anonymousState__temp = Object.keys(requestProductData).length > 0;
      var anonymousState__temp2 = Object.keys(requestProductData).length === 0;
      var anonymousState__temp3 = index === 1 && Object.keys(currentProduct).length;
      var loopArray11 = list.length ? list.map(function (product, _anonIdx) {
        product = {
          $original: (0, _taroWeapp.internal_get_original)(product)
        };

        var _genCompid5 = (0, _taroWeapp.genCompid)(__prefix + 'bizzzzzzzz' + _anonIdx, true),
            _genCompid6 = _slicedToArray(_genCompid5, 2),
            $prevCompid__44 = _genCompid6[0],
            $compid__44 = _genCompid6[1];

        anonymousState__temp && list.length && _taroWeapp.propsManager.set({
          "currentProduct": currentProduct,
          "productDisabled": productDisabled,
          "index": index,
          "productInfo": product.$original,
          "handleProductClick": handleProductClick
        }, $compid__44, $prevCompid__44);
        return {
          $compid__44: $compid__44,
          $original: product.$original
        };
      }) : [];
      _taroWeapp.propsManager.set({
        "current": current,
        "index": index
      }, $compid__45, $prevCompid__45);
      anonymousState__temp && !list.length && _taroWeapp.propsManager.set({
        "emptyTips": '\u4EA7\u54C1\u7EF4\u62A4\u4E2D\uFF0C\u5982\u9700\u5145\u503C\u8BF7\u8054\u7CFB\u5BA2\u670D'
      }, $compid__46, $prevCompid__46);
      Object.assign(this.__state, {
        anonymousState__temp: anonymousState__temp,
        anonymousState__temp2: anonymousState__temp2,
        anonymousState__temp3: anonymousState__temp3,
        loopArray11: loopArray11,
        $compid__45: $compid__45,
        $compid__46: $compid__46,
        list: list,
        currentProduct: currentProduct,
        initTips: initTips
      });
      return this.__state;
    }
  }, {
    key: 'anonymousFunc0',
    value: function anonymousFunc0(e) {
      ;
    }
  }]);

  return ProductTab;
}(_taroWeapp2.default.Component), _class.$$events = ["anonymousFunc0"], _class.$$componentPath = "pages/index/components/ProductBar/components/ProductTab/index", _temp2);
exports.default = ProductTab;

Component(__webpack_require__(/*! @tarojs/taro-weapp */ "./node_modules/@tarojs/taro-weapp/index.js").default.createComponent(ProductTab));

/***/ }),

/***/ "./node_modules/file-loader/dist/cjs.js?name=[path][name].wxml&context=E:\\Users\\小胖友\\Desktop\\company-coding\\myApp\\src!./node_modules/@tarojs/mini-runner/dist/loaders/miniTemplateLoader.js!./node_modules/@tarojs/mini-runner/dist/loaders/wxTransformerLoader.js?!./src/pages/index/components/ProductBar/components/ProductTab/index.jsx?taro&type=template&parse=COMPONENT&":
/*!**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/file-loader/dist/cjs.js?name=[path][name].wxml&context=E:/Users/小胖友/Desktop/company-coding/myApp/src!./node_modules/@tarojs/mini-runner/dist/loaders/miniTemplateLoader.js!./node_modules/@tarojs/mini-runner/dist/loaders/wxTransformerLoader.js??ref--6-0!./src/pages/index/components/ProductBar/components/ProductTab/index.jsx?taro&type=template&parse=COMPONENT& ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "pages/index/components/ProductBar/components/ProductTab/index.wxml";

/***/ }),

/***/ "./src/pages/index/components/ProductBar/components/ProductTab/api.js":
/*!****************************************************************************!*\
  !*** ./src/pages/index/components/ProductBar/components/ProductTab/api.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getProductList = getProductList;

var _request = __webpack_require__(/*! ../../../../../../utils/request */ "./src/utils/request.js");

var _request2 = _interopRequireDefault(_request);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function getProductList(data) {
  return (0, _request2.default)('/wx/product/getProduct', data);
}

/***/ }),

/***/ "./src/pages/index/components/ProductBar/components/ProductTab/index.jsx":
/*!*******************************************************************************!*\
  !*** ./src/pages/index/components/ProductBar/components/ProductTab/index.jsx ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _index_jsx_taro_type_template_parse_COMPONENT___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.jsx?taro&type=template&parse=COMPONENT& */ "./src/pages/index/components/ProductBar/components/ProductTab/index.jsx?taro&type=template&parse=COMPONENT&");
/* harmony import */ var _index_jsx_taro_type_script_parse_COMPONENT___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index.jsx?taro&type=script&parse=COMPONENT& */ "./src/pages/index/components/ProductBar/components/ProductTab/index.jsx?taro&type=script&parse=COMPONENT&");
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _index_jsx_taro_type_script_parse_COMPONENT___WEBPACK_IMPORTED_MODULE_1__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _index_jsx_taro_type_script_parse_COMPONENT___WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));




/***/ }),

/***/ "./src/pages/index/components/ProductBar/components/ProductTab/index.jsx?taro&type=script&parse=COMPONENT&":
/*!*****************************************************************************************************************!*\
  !*** ./src/pages/index/components/ProductBar/components/ProductTab/index.jsx?taro&type=script&parse=COMPONENT& ***!
  \*****************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_tarojs_mini_runner_dist_loaders_wxTransformerLoader_js_ref_6_0_index_jsx_taro_type_script_parse_COMPONENT___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/@tarojs/mini-runner/dist/loaders/wxTransformerLoader.js??ref--6-0!./index.jsx?taro&type=script&parse=COMPONENT& */ "./node_modules/@tarojs/mini-runner/dist/loaders/wxTransformerLoader.js?!./src/pages/index/components/ProductBar/components/ProductTab/index.jsx?taro&type=script&parse=COMPONENT&");
/* harmony import */ var _node_modules_tarojs_mini_runner_dist_loaders_wxTransformerLoader_js_ref_6_0_index_jsx_taro_type_script_parse_COMPONENT___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_tarojs_mini_runner_dist_loaders_wxTransformerLoader_js_ref_6_0_index_jsx_taro_type_script_parse_COMPONENT___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_tarojs_mini_runner_dist_loaders_wxTransformerLoader_js_ref_6_0_index_jsx_taro_type_script_parse_COMPONENT___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_tarojs_mini_runner_dist_loaders_wxTransformerLoader_js_ref_6_0_index_jsx_taro_type_script_parse_COMPONENT___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_tarojs_mini_runner_dist_loaders_wxTransformerLoader_js_ref_6_0_index_jsx_taro_type_script_parse_COMPONENT___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./src/pages/index/components/ProductBar/components/ProductTab/index.jsx?taro&type=template&parse=COMPONENT&":
/*!*******************************************************************************************************************!*\
  !*** ./src/pages/index/components/ProductBar/components/ProductTab/index.jsx?taro&type=template&parse=COMPONENT& ***!
  \*******************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _file_loader_name_path_name_wxml_context_E_Users_Desktop_company_coding_myApp_src_node_modules_tarojs_mini_runner_dist_loaders_miniTemplateLoader_js_node_modules_tarojs_mini_runner_dist_loaders_wxTransformerLoader_js_ref_6_0_index_jsx_taro_type_template_parse_COMPONENT___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!file-loader?name=[path][name].wxml&context=E:/Users/小胖友/Desktop/company-coding/myApp/src!../../../../../../../node_modules/@tarojs/mini-runner/dist/loaders/miniTemplateLoader.js!../../../../../../../node_modules/@tarojs/mini-runner/dist/loaders/wxTransformerLoader.js??ref--6-0!./index.jsx?taro&type=template&parse=COMPONENT& */ "./node_modules/file-loader/dist/cjs.js?name=[path][name].wxml&context=E:\\Users\\小胖友\\Desktop\\company-coding\\myApp\\src!./node_modules/@tarojs/mini-runner/dist/loaders/miniTemplateLoader.js!./node_modules/@tarojs/mini-runner/dist/loaders/wxTransformerLoader.js?!./src/pages/index/components/ProductBar/components/ProductTab/index.jsx?taro&type=template&parse=COMPONENT&");
/* harmony import */ var _file_loader_name_path_name_wxml_context_E_Users_Desktop_company_coding_myApp_src_node_modules_tarojs_mini_runner_dist_loaders_miniTemplateLoader_js_node_modules_tarojs_mini_runner_dist_loaders_wxTransformerLoader_js_ref_6_0_index_jsx_taro_type_template_parse_COMPONENT___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_file_loader_name_path_name_wxml_context_E_Users_Desktop_company_coding_myApp_src_node_modules_tarojs_mini_runner_dist_loaders_miniTemplateLoader_js_node_modules_tarojs_mini_runner_dist_loaders_wxTransformerLoader_js_ref_6_0_index_jsx_taro_type_template_parse_COMPONENT___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _file_loader_name_path_name_wxml_context_E_Users_Desktop_company_coding_myApp_src_node_modules_tarojs_mini_runner_dist_loaders_miniTemplateLoader_js_node_modules_tarojs_mini_runner_dist_loaders_wxTransformerLoader_js_ref_6_0_index_jsx_taro_type_template_parse_COMPONENT___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _file_loader_name_path_name_wxml_context_E_Users_Desktop_company_coding_myApp_src_node_modules_tarojs_mini_runner_dist_loaders_miniTemplateLoader_js_node_modules_tarojs_mini_runner_dist_loaders_wxTransformerLoader_js_ref_6_0_index_jsx_taro_type_template_parse_COMPONENT___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ })

},[["./src/pages/index/components/ProductBar/components/ProductTab/index.jsx","runtime","vendors","common"]]]);