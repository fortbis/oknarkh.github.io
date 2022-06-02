"use strict";define(["jquery","widget","asyncjs","_","U"],function(t,o,e,n,c){var a=null;require(["constructor"],function(t){a=t});var i={generateBlockIds:function(t){return a.generateBlockIds(t)},getBlockJSON:function(t,o,c){var i=this;e.parallel({blockSettings:function(o){a.getBlockSettings(t,function(t){o(null,t)})},blockJSON:function(e){e(null,i._getBlockJSON(t,o))}},function(t,o){var e=n.extend({},o.blockJSON,{params:o.blockSettings});c(e)})},getBlockJSONAsync:function(t,o){var e=this;return new Promise(function(n){e.getBlockJSON(t,o,n)})},_getBlockJSON:function(e,n){var c=t("#"+e);if(!c.length)return{};var a={id:"UL_ID",type:"container",classes:[],rows:[]};return c.find(".ul-row").each(function(){var e=t(this),c={id:"UL_ID",cols:[]};e.find(".ul-col").each(function(){var e=t(this),a=e.attr("class").match(/col-md-\d*/gi)[0].match(/\d*$/)[0],i={id:"UL_ID",size:parseInt(a,10),widgets:[]};e.find(".ul-widget").each(function(){var e=t(this),c={id:"UL_ID",type:e.attr("data-widget")},a=e.attr("id"),r=o.get(a)||n[a]||{};r.data?(c.data=r.data,c.opts=r.options||r.opts):(r.data={},r.options={},c.type="spacer"),r.mediaParams&&(c.mediaParams=r.mediaParams);var s=o.isHiddenDeviceWidget(e);if(s){var l=t.extend(!0,{},r.mediaParams,s);c.mediaParams=l}c.type=c.type||r.type,i.widgets.push(c)}),c.cols.push(i)}),a.rows.push(c)}),a},lockConstructor:function(){var o=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1e4;t("<div>",{"class":"js-constructor-lock",style:"position: fixed; z-index: ".concat(o,"; top: 0; left: 0; right: 0; bottom: 0;")}).appendTo("body")},unlockConstructor:function(){t(".js-constructor-lock").remove()},softReload:function(o){var e="/sites/url/".concat(c.params.site,"/pages/id/").concat(c.params.page);c.page.setPage("".concat(e,"/edit"),function(){c.hist.pushState({data:{url:"".concat(e,"/edit")},title:"title",url:"".concat(e,"/constructor")}),t(document).trigger("closeSpecialModal"),o&&o()})}};return{getBlockJSON:i.getBlockJSON.bind(i),getBlockJSONAsync:i.getBlockJSONAsync.bind(i),lockConstructor:i.lockConstructor.bind(i),unlockConstructor:i.unlockConstructor.bind(i),generateBlockIds:i.generateBlockIds.bind(i),softReload:i.softReload.bind(i)}});
//# sourceMappingURL=constructorHelpers.js.map

//# sourceMappingURL=constructorHelpers.js.map

//# sourceMappingURL=constructorHelpers.js.map

//# sourceMappingURL=constructorHelpers.js.map

//# sourceMappingURL=constructorHelpers.js.map

//# sourceMappingURL=constructorHelpers.js.map

//# sourceMappingURL=constructorHelpers.js.map

//# sourceMappingURL=constructorHelpers.js.map

//# sourceMappingURL=constructorHelpers.js.map

//# sourceMappingURL=constructorHelpers.js.map

//# sourceMappingURL=constructorHelpers.js.map

//# sourceMappingURL=constructorHelpers.js.map

//# sourceMappingURL=constructorHelpers.js.map

//# sourceMappingURL=constructorHelpers.js.map

//# sourceMappingURL=constructorHelpers.js.map

//# sourceMappingURL=constructorHelpers.js.map

//# sourceMappingURL=constructorHelpers.js.map

//# sourceMappingURL=constructorHelpers.js.map

//# sourceMappingURL=constructorHelpers.js.map

//# sourceMappingURL=constructorHelpers.js.map

//# sourceMappingURL=constructorHelpers.js.map

//# sourceMappingURL=constructorHelpers.js.map

//# sourceMappingURL=constructorHelpers.js.map

//# sourceMappingURL=constructorHelpers.js.map

//# sourceMappingURL=constructorHelpers.js.map

//# sourceMappingURL=constructorHelpers.js.map

//# sourceMappingURL=constructorHelpers.js.map

//# sourceMappingURL=constructorHelpers.js.map

//# sourceMappingURL=constructorHelpers.js.map

//# sourceMappingURL=constructorHelpers.js.map

//# sourceMappingURL=constructorHelpers.js.map
