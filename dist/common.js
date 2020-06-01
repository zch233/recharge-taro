(wx.webpackJsonp=wx.webpackJsonp||[]).push([[2],{"5":function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{"value":!0}),t.default=function(a,n){var o=2<arguments.length&&void 0!==arguments[2]?arguments[2]:"POST";return new Promise(function(r){u.default.showLoading({"title":"加载中","mask":!0});var e=u.default.request({"url":i+a,"data":{"timestamp":Date.now(),"value":n},"method":o,"timeout":6e4,"header":{"token":u.default.getStorageSync("token")},"success":function success(e){var t=e.data;if("00"!==t.code){if(l[t.code])return void("JU402"===t.code?((0,c.getGlobalData)("requestList")&&(0,c.getGlobalData)("requestList").map(function(e){return e.abort()}),s.login()):u.default.showToast({"title":l[t.code].message,"icon":"none","duration":2e3,"mask":!0}).then(function(){u.default.reLaunch({"url":"/pages/frame/frame?href="+l[t.code].href})}));throw t.message?u.default.showToast({"title":t.message,"icon":"none","duration":2e3,"mask":!0}):u.default.showToast({"title":"网络异常","icon":"none","duration":2e3,"mask":!0}),Error(t.message)}u.default.setStorageSync("token",e.header.token),r(t)},"fail":function fail(e){throw console.log(e,"请求失败"),u.default.showToast({"title":e.errMsg,"icon":"none","duration":2e3,"mask":!0}),Error(e.errMsg)},"complete":function complete(){u.default.hideLoading()}}),t=(0,c.getGlobalData)("requestList")||[];(0,c.setGlobalData)("requestList",[].concat(function _toConsumableArray(e){{if(Array.isArray(e)){for(var t=0,r=Array(e.length);t<e.length;t++)r[t]=e[t];return r}return Array.from(e)}}(t),[e]))})};var u=function _interopRequireDefault(e){return e&&e.__esModule?e:{"default":e}}(r(0)),s=function _interopRequireWildcard(e){{if(e&&e.__esModule)return e;var t={};if(null!=e)for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&(t[r]=e[r]);return t.default=e,t}}(r(7)),c=r(94);var i="https://wechat-api.globalcharge.cn",l={"JU402":{"message":"当前用户不在线","href":""},"JU403":{"message":"对不起，您无权限访问该页面！","href":"403"},"JU404":{"message":"找不到该页面啦！","href":"404"},"WX0005":{"message":"请先关注公众号在访问哦！","href":"leadFollow"},"JU302":{"message":"对不起，服务器正在维护！","href":"serveDead"},"JU430":{"message":"网络异常，请稍候再试！","href":"networkError"}}},"62":function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{"value":!0}),t.getRechargeRecord=function getRechargeRecord(e){return(0,a.default)("/wx/order/user",e)},t.orderPayAgain=function orderPayAgain(e){return(0,a.default)("/wx/charge/again/pay",e)},t.cancelOrder=function cancelOrder(e){return(0,a.default)("/wx/charge/cancelOrder",e)};var a=function _interopRequireDefault(e){return e&&e.__esModule?e:{"default":e}}(r(5))},"7":function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{"value":!0});var i=_interopRequireDefault(r(3));t.login=function login(){l.default.login({"success":function(){var t=_asyncToGenerator(i.default.mark(function _callee(t){var r,a;return i.default.wrap(function _callee$(e){for(;;)switch(e.prev=e.next){case 0:if(t.code)return e.next=3,f.login(t.code);e.next=9;break;case 3:r=e.sent,a=r.result,l.default.setStorageSync("isSubscribe",a),l.default.reLaunch({"url":"/pages/index/index"}),e.next=10;break;case 9:console.log("登录失败！"+t.errMsg);case 10:case"end":return e.stop()}},_callee,this)}));return function success(e){return t.apply(this,arguments)}}()})},t.wechatPay=function wechatPay(e,o){var t=e.nonceStr,r=e.paySign,u=e.signType,s=e.payPackage,c=e.timeStamp;return a.default.Event.stat("10002",{"order":o}),new Promise(function(a,n){l.default.requestPayment({"timeStamp":c,"nonceStr":t,"package":s,"signType":u,"paySign":r,"success":function success(){var r,t;l.default.getStorageSync("isSubscribe")?(l.default.navigateTo({"url":"/pages/record/record"}),a("paySuccess")):(r="8Q9-cY0jD1FTK59AqcDcGSKj5ZBC5uw1zdDcglsqyRA",l.default.requestSubscribeMessage({"tmplIds":[r],"success":(t=_asyncToGenerator(i.default.mark(function _callee2(t){return i.default.wrap(function _callee2$(e){for(;;)switch(e.prev=e.next){case 0:if("accept"===t[r])return e.next=3,f.subscribe(o);e.next=4;break;case 3:a("paySuccess");case 4:l.default["pages/record/record"===l.default.getCurrentPages()[l.default.getCurrentPages().length-1].route?"redirectTo":"navigateTo"]({"url":"/pages/record/record"});case 5:case"end":return e.stop()}},_callee2,this)})),function success(e){return t.apply(this,arguments)}),"fail":function fail(e){n(e),l.default.navigateTo({"url":"/pages/record/record"})}}))},"fail":function fail(e){console.log("fail"),n(e)}})})};var l=_interopRequireDefault(r(0)),f=function _interopRequireWildcard(e){{if(e&&e.__esModule)return e;var t={};if(null!=e)for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&(t[r]=e[r]);return t.default=e,t}}(r(93)),a=_interopRequireDefault(r(6));function _interopRequireDefault(e){return e&&e.__esModule?e:{"default":e}}function _asyncToGenerator(e){return function(){var u=e.apply(this,arguments);return new Promise(function(n,o){return function step(e,t){try{var r=u[e](t),a=r.value}catch(e){return void o(e)}if(!r.done)return Promise.resolve(a).then(function(e){step("next",e)},function(e){step("throw",e)});n(a)}("next")})}}},"72":function(e,t,r){},"93":function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{"value":!0}),t.login=function login(e){return(0,a.default)("/wx/user/miniLogin?code="+e)},t.subscribe=function subscribe(e){return(0,a.default)("/wechat/mini/subscription/"+e,null,"GET")};var a=function _interopRequireDefault(e){return e&&e.__esModule?e:{"default":e}}(r(5))},"94":function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{"value":!0}),t.setGlobalData=function setGlobalData(e,t){a[e]=t},t.getGlobalData=function getGlobalData(e){return a[e]};var a={}}}]);