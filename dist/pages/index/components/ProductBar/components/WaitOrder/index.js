(wx.webpackJsonp=wx.webpackJsonp||[]).push([[24],{"143":function(t,e,r){"use strict";r.r(e);r(144);var n=r(54);for(var o in n)"default"!==o&&function(t){r.d(e,t,function(){return n[t]})}(o)},"144":function(t,e,r){"use strict";r(77)},"145":function(t,e,r){},"29":function(t,e,r){"use strict";Object.defineProperty(e,"__esModule",{"value":!0});var x=_interopRequireDefault(r(3)),C=function(t,e){if(Array.isArray(t))return t;if(Symbol.iterator in Object(t))return function sliceIterator(t,e){var r=[],n=!0,o=!1,a=void 0;try{for(var i,u=t[Symbol.iterator]();!(n=(i=u.next()).done)&&(r.push(i.value),!e||r.length!==e);n=!0);}catch(t){o=!0,a=t}finally{try{!n&&u.return&&u.return()}finally{if(o)throw a}}return r}(t,e);throw new TypeError("Invalid attempt to destructure non-iterable instance")},n=function(t,e,r){return e&&defineProperties(t.prototype,e),r&&defineProperties(t,r),t};function defineProperties(t,e){for(var r=0;r<e.length;r++){var n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}var o,a,$=r(0),i=_interopRequireDefault($);r(145);var A=function _interopRequireWildcard(t){{if(t&&t.__esModule)return t;var e={};if(null!=t)for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r]);return e.default=t,e}}(r(62)),j=r(7);function _interopRequireDefault(t){return t&&t.__esModule?t:{"default":t}}function _asyncToGenerator(t){return function(){var i=t.apply(this,arguments);return new Promise(function(o,a){return function step(t,e){try{var r=i[t](e),n=r.value}catch(t){return void a(t)}if(!r.done)return Promise.resolve(n).then(function(t){step("next",t)},function(t){step("throw",t)});o(n)}("next")})}}function _possibleConstructorReturn(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}var u=(function _inherits(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{"constructor":{"value":t,"enumerable":!1,"writable":!0,"configurable":!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}(WaitOrder,i.default.Component),n(WaitOrder,[{"key":"_constructor","value":function _constructor(t){(function get(t,e,r){null===t&&(t=Function.prototype);var n=Object.getOwnPropertyDescriptor(t,e);if(void 0===n){var o=Object.getPrototypeOf(t);return null===o?void 0:get(o,e,r)}if("value"in n)return n.value;var a=n.get;return void 0!==a?a.call(r):void 0})(WaitOrder.prototype.__proto__||Object.getPrototypeOf(WaitOrder.prototype),"_constructor",this).call(this,t),this.$$refs=new i.default.RefsArray}},{"key":"_createData","value":function _createData(t,e,r){var n=this;this.__state=t||this.state||{},this.__props=e||this.props||{};var o,a,i=this.$prefix,u=(0,$.genCompid)(i+"$compid__61"),c=C(u,2),s=c[0],l=c[1],p=(0,$.genCompid)(i+"$compid__62"),f=C(p,2),d=f[0],_=f[1],y=this.__props,m=y.waitOrderVisible,v=(y.onClose,y.waitOrderData),h=void 0===v?{}:v,O=(o=_asyncToGenerator(x.default.mark(function _callee(){return x.default.wrap(function _callee$(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,A.cancelOrder(h.yqqNo);case 2:n.__props.onClose();case 3:case"end":return t.stop()}},_callee,n)})),function closeOrder(){return o.apply(this,arguments)}),b=(a=_asyncToGenerator(x.default.mark(function _callee2(){var e,r;return x.default.wrap(function _callee2$(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,A.orderPayAgain(h.yqqNo);case 2:e=t.sent,r=e.result,(0,j.wechatPay)(r||{},h.yqqNo);case 5:case"end":return t.stop()}},_callee2,n)})),function payAgain(){return a.apply(this,arguments)}),w=(h.totalAmount/100).toFixed(2),P=h.totalAmount-h.payPrice!=0?((h.totalAmount-h.payPrice)/100).toFixed(2):null,g=(h.payPrice/100).toFixed(2);return this.anonymousFunc0=O,this.anonymousFunc1=b,$.propsManager.set({"isOpened":m,"onClose":this.__props.onClose},l,s),$.propsManager.set({"className":"waitOrder-title"},_,d),Object.assign(this.__state,{"anonymousState__temp":w,"anonymousState__temp2":P,"anonymousState__temp3":g,"$compid__61":l,"$compid__62":_,"waitOrderData":h}),this.__state}},{"key":"anonymousFunc0","value":function anonymousFunc0(){}},{"key":"anonymousFunc1","value":function anonymousFunc1(){}}]),a=o=WaitOrder,o.$$events=["anonymousFunc0","anonymousFunc1"],o.$$componentPath="pages/index/components/ProductBar/components/WaitOrder/index",a);function WaitOrder(){var t,e,r;!function _classCallCheck(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,WaitOrder);for(var n=arguments.length,o=Array(n),a=0;a<n;a++)o[a]=arguments[a];return(e=r=_possibleConstructorReturn(this,(t=WaitOrder.__proto__||Object.getPrototypeOf(WaitOrder)).call.apply(t,[this].concat(o)))).$usedState=["anonymousState__temp","anonymousState__temp2","anonymousState__temp3","$compid__61","$compid__62","waitOrderData","waitOrderVisible"],r.customComponents=["AtModal","AtModalHeader","AtModalContent","AtModalAction"],_possibleConstructorReturn(r,e)}e.default=u,Component(r(0).default.createComponent(u))},"54":function(t,e,r){"use strict";r.r(e);var n=r(29),o=r.n(n);for(var a in n)"default"!==a&&function(t){r.d(e,t,function(){return n[t]})}(a);e.default=o.a},"77":function(t,e,r){t.exports=r.p+"pages/index/components/ProductBar/components/WaitOrder/index.wxml"}},[[143,0,1,2]]]);