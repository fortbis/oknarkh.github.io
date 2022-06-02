"use strict";define("enqueueAjax",["ul-error","nf","i18n"],function(e,u,t){var n=[],s={},r=!1,i=function o(){if(!r&&n.length)if($(document).trigger("siteChanged"),"get"==n[0].comand)n.shift().callback([]);else if(s.queues){if(s.queuesSuccessively.length){var e=s.queuesSuccessively.filter(function(e){return e.cb}).map(function(e){return e.cb});s.queues.push({url:s.queuesSuccessively[0].url,data:{queries:JSON.stringify(s.queuesSuccessively.map(function(e){return e.data}))},symbol:s.queuesSuccessively[0].symbol,cb:function(){e.forEach(function(e){return e()})}})}n.shift().callback(s.queues.reverse()),s={},o()}},c=function(n){n.stack=[{fileName:"ajaxEnqueue"}],e.sendErrorOnServer(n),u.confirm({title:t("all.timeoutError")("title"),text:t("all.timeoutError")("text"),ok:t("all.timeoutError")("okBtnText"),okCb:function(){window.location.reload()}})};return function(e,u){if(u)switch(u.action){case"beginAtomic":return r&&console.error("[History] Second begin without end"),r&&c({msg:"[History] Second begin without end",historyQueues:s}),s.queues=[],s.queuesSuccessively=[],void(r=!0);case"endAtomic":return r||console.error("[History] End without begin"),r||c({msg:"[History] End without begin",historyQueues:s}),r=!1,i();case"setCallBack":return n.push({callback:u.callBack,comand:u.comand}),n.length>2&&console.error("[History] Callback length qt 3",n),n.length>2&&c({msg:"[History] Callback length qt 3",length:n.length,historyQueues:s}),i()}return s.queues||s.queuesSuccessively?void(e.parallel?s.queues.push(e):s.queuesSuccessively.push(e)):void(e.cb&&e.cb(null,[null]))}});
//# sourceMappingURL=ajaxEnqueue.js.map

//# sourceMappingURL=ajaxEnqueue.js.map

//# sourceMappingURL=ajaxEnqueue.js.map

//# sourceMappingURL=ajaxEnqueue.js.map

//# sourceMappingURL=ajaxEnqueue.js.map

//# sourceMappingURL=ajaxEnqueue.js.map

//# sourceMappingURL=ajaxEnqueue.js.map

//# sourceMappingURL=ajaxEnqueue.js.map

//# sourceMappingURL=ajaxEnqueue.js.map

//# sourceMappingURL=ajaxEnqueue.js.map

//# sourceMappingURL=ajaxEnqueue.js.map

//# sourceMappingURL=ajaxEnqueue.js.map

//# sourceMappingURL=ajaxEnqueue.js.map

//# sourceMappingURL=ajaxEnqueue.js.map

//# sourceMappingURL=ajaxEnqueue.js.map

//# sourceMappingURL=ajaxEnqueue.js.map

//# sourceMappingURL=ajaxEnqueue.js.map

//# sourceMappingURL=ajaxEnqueue.js.map

//# sourceMappingURL=ajaxEnqueue.js.map

//# sourceMappingURL=ajaxEnqueue.js.map

//# sourceMappingURL=ajaxEnqueue.js.map

//# sourceMappingURL=ajaxEnqueue.js.map

//# sourceMappingURL=ajaxEnqueue.js.map

//# sourceMappingURL=ajaxEnqueue.js.map

//# sourceMappingURL=ajaxEnqueue.js.map

//# sourceMappingURL=ajaxEnqueue.js.map

//# sourceMappingURL=ajaxEnqueue.js.map

//# sourceMappingURL=ajaxEnqueue.js.map

//# sourceMappingURL=ajaxEnqueue.js.map

//# sourceMappingURL=ajaxEnqueue.js.map

//# sourceMappingURL=ajaxEnqueue.js.map

//# sourceMappingURL=ajaxEnqueue.js.map

//# sourceMappingURL=ajaxEnqueue.js.map

//# sourceMappingURL=ajaxEnqueue.js.map

//# sourceMappingURL=ajaxEnqueue.js.map

//# sourceMappingURL=ajaxEnqueue.js.map

//# sourceMappingURL=ajaxEnqueue.js.map

//# sourceMappingURL=ajaxEnqueue.js.map

//# sourceMappingURL=ajaxEnqueue.js.map

//# sourceMappingURL=ajaxEnqueue.js.map

//# sourceMappingURL=ajaxEnqueue.js.map

//# sourceMappingURL=ajaxEnqueue.js.map

//# sourceMappingURL=ajaxEnqueue.js.map

//# sourceMappingURL=ajaxEnqueue.js.map

//# sourceMappingURL=ajaxEnqueue.js.map

//# sourceMappingURL=ajaxEnqueue.js.map

//# sourceMappingURL=ajaxEnqueue.js.map

//# sourceMappingURL=ajaxEnqueue.js.map

//# sourceMappingURL=ajaxEnqueue.js.map

//# sourceMappingURL=ajaxEnqueue.js.map

//# sourceMappingURL=ajaxEnqueue.js.map

//# sourceMappingURL=ajaxEnqueue.js.map

//# sourceMappingURL=ajaxEnqueue.js.map

//# sourceMappingURL=ajaxEnqueue.js.map

//# sourceMappingURL=ajaxEnqueue.js.map

//# sourceMappingURL=ajaxEnqueue.js.map

//# sourceMappingURL=ajaxEnqueue.js.map

//# sourceMappingURL=ajaxEnqueue.js.map

//# sourceMappingURL=ajaxEnqueue.js.map

//# sourceMappingURL=ajaxEnqueue.js.map

//# sourceMappingURL=ajaxEnqueue.js.map

//# sourceMappingURL=ajaxEnqueue.js.map

//# sourceMappingURL=ajaxEnqueue.js.map

//# sourceMappingURL=ajaxEnqueue.js.map

//# sourceMappingURL=ajaxEnqueue.js.map

//# sourceMappingURL=ajaxEnqueue.js.map

//# sourceMappingURL=ajaxEnqueue.js.map

//# sourceMappingURL=ajaxEnqueue.js.map

//# sourceMappingURL=ajaxEnqueue.js.map

//# sourceMappingURL=ajaxEnqueue.js.map

//# sourceMappingURL=ajaxEnqueue.js.map

//# sourceMappingURL=ajaxEnqueue.js.map

//# sourceMappingURL=ajaxEnqueue.js.map

//# sourceMappingURL=ajaxEnqueue.js.map

//# sourceMappingURL=ajaxEnqueue.js.map

//# sourceMappingURL=ajaxEnqueue.js.map

//# sourceMappingURL=ajaxEnqueue.js.map

//# sourceMappingURL=ajaxEnqueue.js.map

//# sourceMappingURL=ajaxEnqueue.js.map

//# sourceMappingURL=ajaxEnqueue.js.map

//# sourceMappingURL=ajaxEnqueue.js.map

//# sourceMappingURL=ajaxEnqueue.js.map

//# sourceMappingURL=ajaxEnqueue.js.map

//# sourceMappingURL=ajaxEnqueue.js.map

//# sourceMappingURL=ajaxEnqueue.js.map

//# sourceMappingURL=ajaxEnqueue.js.map

//# sourceMappingURL=ajaxEnqueue.js.map

//# sourceMappingURL=ajaxEnqueue.js.map

//# sourceMappingURL=ajaxEnqueue.js.map

//# sourceMappingURL=ajaxEnqueue.js.map

//# sourceMappingURL=ajaxEnqueue.js.map

//# sourceMappingURL=ajaxEnqueue.js.map

//# sourceMappingURL=ajaxEnqueue.js.map

//# sourceMappingURL=ajaxEnqueue.js.map

//# sourceMappingURL=ajaxEnqueue.js.map

//# sourceMappingURL=ajaxEnqueue.js.map

//# sourceMappingURL=ajaxEnqueue.js.map

//# sourceMappingURL=ajaxEnqueue.js.map

//# sourceMappingURL=ajaxEnqueue.js.map

//# sourceMappingURL=ajaxEnqueue.js.map

//# sourceMappingURL=ajaxEnqueue.js.map

//# sourceMappingURL=ajaxEnqueue.js.map

//# sourceMappingURL=ajaxEnqueue.js.map

//# sourceMappingURL=ajaxEnqueue.js.map

//# sourceMappingURL=ajaxEnqueue.js.map

//# sourceMappingURL=ajaxEnqueue.js.map

//# sourceMappingURL=ajaxEnqueue.js.map

//# sourceMappingURL=ajaxEnqueue.js.map

//# sourceMappingURL=ajaxEnqueue.js.map

//# sourceMappingURL=ajaxEnqueue.js.map

//# sourceMappingURL=ajaxEnqueue.js.map

//# sourceMappingURL=ajaxEnqueue.js.map

//# sourceMappingURL=ajaxEnqueue.js.map

//# sourceMappingURL=ajaxEnqueue.js.map

//# sourceMappingURL=ajaxEnqueue.js.map

//# sourceMappingURL=ajaxEnqueue.js.map

//# sourceMappingURL=ajaxEnqueue.js.map

//# sourceMappingURL=ajaxEnqueue.js.map

//# sourceMappingURL=ajaxEnqueue.js.map

//# sourceMappingURL=ajaxEnqueue.js.map

//# sourceMappingURL=ajaxEnqueue.js.map

//# sourceMappingURL=ajaxEnqueue.js.map

//# sourceMappingURL=ajaxEnqueue.js.map

//# sourceMappingURL=ajaxEnqueue.js.map

//# sourceMappingURL=ajaxEnqueue.js.map

//# sourceMappingURL=ajaxEnqueue.js.map

//# sourceMappingURL=ajaxEnqueue.js.map

//# sourceMappingURL=ajaxEnqueue.js.map

//# sourceMappingURL=ajaxEnqueue.js.map

//# sourceMappingURL=ajaxEnqueue.js.map

//# sourceMappingURL=ajaxEnqueue.js.map

//# sourceMappingURL=ajaxEnqueue.js.map

//# sourceMappingURL=ajaxEnqueue.js.map

//# sourceMappingURL=ajaxEnqueue.js.map

//# sourceMappingURL=ajaxEnqueue.js.map

//# sourceMappingURL=ajaxEnqueue.js.map

//# sourceMappingURL=ajaxEnqueue.js.map

//# sourceMappingURL=ajaxEnqueue.js.map

//# sourceMappingURL=ajaxEnqueue.js.map
