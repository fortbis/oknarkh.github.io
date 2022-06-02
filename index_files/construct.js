"use strict";define("constructor/construct",["jquery"],function(t){var o={REG_ID:/^ul\-id\-\d{1,5}\-\d{1,5}(-symbol)?$/,REG_ID_ABS:/^ul\-id\-(.+?)\-\d{1,5}$/,REG_CLASS_MD:/col\-md\-(\d{1,2})/i,REG_CLASS_XS:/col\-xs\-(\d{1,2})/i,REG_CLASS_SM:/col\-sm\-(\d{1,2})/i,_addBlock:function(o,i,e){var l=this,r=t(o);this._dropPosition(r,e,i);var n=r.attr("id");return window.dispatch(window.actions.createBlock({id:n,params:{}})),r.find(".ul-col").each(function(){var o=t(this),i=o.attr("id"),e=o.closest(".ul-row").attr("id");try{var r=parseInt(o[0].className.match(/col-md-(\d+)/)[1]);window.dispatch(window.actions.createRow({id:e})),l.sendDispatchColAddReact(i,o.index(),r,e)}catch(n){console.error(n)}}),r},sendDispatchColAddReact:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",o=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:12,e=arguments.length>3&&void 0!==arguments[3]?arguments[3]:"";window.dispatch(window.actions.createCol({id:t,mediaParams:{desktop:{size:i},tablet:{size:12},mobile:{size:12}},index:o,rowId:e}))},_addCol:function(o,i,e,l){var r=this;if(!r.REG_ID.test(o))throw{msg:"id not matched REG_ID"};var n;n=i.hasClass("ul-row")?i.children(".ul-col").size():i.parent().children(".ul-col").size();var s=t("<div>",{id:o,"class":"ul-col col-md-12 col-xs-12 col-sm-12"});if(0==n)r.sendDispatchColAddReact(o,e,12,i.closest(".ul-row").attr("id")),i.removeClass("ul-empty"),s.addClass("ul-col col-md-12 col-xs-12 col-sm-12");else{if(n==r.COLS_LIMIT&&!l)return!1;var d=Math.floor(12/(n+1));r.sendDispatchColAddReact(o,e,d,i.closest(".ul-row").attr("id"));var a=d,c=i.closest(".ul-row").children(".ul-col"),u=d*(n+1);12>u&&(d+=12-u),s=r._setColSize(s,c,d,a)}return this._dropPosition(s,e,i),window.dispatch(window.actions.linkColRow(s.closest(".ul-col").attr("id"),i.closest(".ul-row").attr("id"))),s},_addRow:function(o,i,e){var l=this;if(!l.REG_ID.test(o))throw{msg:"id not matched REG_ID"};return window.dispatch(window.actions.createRow({id:o})),this._dropPosition(t("<div>",{id:o,"class":"row ul-row"}),e,i)},_addWidget:function(o,i,e,l){var r=arguments.length>4&&void 0!==arguments[4]?arguments[4]:"";if(!this.REG_ID.test(o)&&!this.REG_ID_ABS.test(o))throw new Error("id not matched REG_ID");var n=t("<div>",{id:o,"class":"ul-widget ul-widget-"+i,"data-widget":i,"data-controls":"mer","data-anchor":r});e.closest(".ul-container").length&&(window.dispatch(window.actions.linkWidgetBlock(o,e.closest(".ul-container").attr("id"))),window.dispatch(window.actions.linkWidgetCol(o,e.closest(".ul-col").attr("id"))));var s=this._dropPosition(n,l,e);return n&&0!==n.length?s:"not exist"},_addReactWidget:function(o,i,e,l){if(!this.REG_ID.test(o)&&!this.REG_ID_ABS.test(o))throw new Error("id not matched REG_ID");var r=t("<div>",{id:o,"class":"ul-widget",type:i});if(e.closest(".ul-container").length){var n=e.closest(".ul-container").attr("data-auto_height");n&&"uCard"===i&&r.attr("style","height: 100%"),window.dispatch(window.actions.linkWidgetBlock(o,e.closest(".ul-container").attr("id"))),window.dispatch(window.actions.linkWidgetCol(o,e.closest(".ul-col").attr("id")))}var s=this._dropPosition(r,l,e);return r&&0!=r.length?s:"not exist"},getColSize:function(t){var o=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"desktop";if(!(t>12)){if("desktop"===o)return"col-xs-12 col-sm-12 col-md-"+t+" ul-col";var i={phone:"col-xs-"+t,tablet:"col-sm-"+t,desktop:"col-md-"+t};return i[o]+" ul-col"}},_moveEl:function(t,o){var i=this,e=o.hasClass("ul-col")?o.closest(".ul-row"):o;if(!t.hasClass("ul-row")&&t.hasClass("ul-col")){var l;l=t.parent().attr("id")===e.attr("id")?0:1;var r=e.children(".ul-col").size();if(r==i.COLS_LIMIT)return null;var n=Math.floor(12/(r+l)),s=n,d=e.children(".ul-col"),a=n*(r+l);12>a&&(n+=12-a),t=i._setColSize(t,d,n,s)}throw new Error("WRONG!")},_moveTo:function(t,o){if(o>t.parent().children().length||0>o||o==t.index())throw{msg:"uncorrect index"};var i=t.parent().children().eq(o);return t.index()>i.index()?t.insertBefore(i):t.insertAfter(i),!0},_moveWidget:function(t,o,i){return this._dropPosition(t,i,o)},removeColSize:function(o){var i=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"desktop",e=this;return null!=o&&o.each(function(o,l){var r=t(l),n=r.attr("class"),s="";if("desktop"===i){var d=e.REG_CLASS_MD.exec(n),a=e.REG_CLASS_XS.exec(n),c=e.REG_CLASS_SM.exec(n);d&&(s+=d[0]+" "),a&&(s+=a[0]+" "),c&&(s+=c[0]+" ")}else{var u=e.REG_CLASS_XS.exec(n),w=e.REG_CLASS_SM.exec(n);"phone"===i&&(s+=u[0]+" "),"tablet"===i&&(s+=w[0]+" ")}r.removeClass(s)}),o},_removeCol:function(t){var o=this,i=t.closest(".ul-row"),e=t.attr("id");window.dispatch(window.actions.destroyCol(e,i.attr("id"))),t.remove();var l=i.children(".ul-col").size(),r=Math.floor(12/l),n=r*l;if(0!==l)if(12>n){var s=r+(12-n),d=i.children(".ul-col").last().removeClass();o._setColSize(d,i.children(".ul-col"),s,r)}else o._setColSize(null,i.children(".ul-col"),null,r);window.dispatch(window.actions.linkColRow(t.closest(".ul-col").attr("id"),i.closest(".ul-row").attr("id")))},_removeRow:function(t){window.dispatch(window.actions.destroyRow(t.attr("id"))),t.remove()},_removeBlock:function(t){window.dispatch(window.actions.destroyBlock(t.attr("id"))),t.remove()},_removeWidget:function(t){t.remove()},_setColSize:function(o,i,e,l,r){var n=this;return null!=o&&(o=n.removeColSize(o,r),o.removeAttr("style").addClass(n.getColSize(e,r)),window.dispatch(window.actions.updateCol(o.attr("id"),{size:e,device:r}))),null!=i&&(i=n.removeColSize(i,r),i.removeAttr("style").addClass(n.getColSize(l,r)),i.each(function(){window.dispatch(window.actions.updateCol(t(this).attr("id"),{size:l,device:r}))})),o},_dropPosition:function(t,o,i){var e,l=/ul\-col|ul\-row|ul\-widget|ul\-container/gi;if(e=l.exec(t.attr("class"))[0],null==e)return null;e="."+e;var r;return 0==o?r="prependTo":o==i.children(e).length?r="appendTo":(i=i.children(e).eq(o-1),r="insertAfter"),t[r](i)}};return o});
//# sourceMappingURL=construct.js.map

//# sourceMappingURL=construct.js.map

//# sourceMappingURL=construct.js.map

//# sourceMappingURL=construct.js.map

//# sourceMappingURL=construct.js.map

//# sourceMappingURL=construct.js.map

//# sourceMappingURL=construct.js.map

//# sourceMappingURL=construct.js.map

//# sourceMappingURL=construct.js.map

//# sourceMappingURL=construct.js.map

//# sourceMappingURL=construct.js.map

//# sourceMappingURL=construct.js.map

//# sourceMappingURL=construct.js.map

//# sourceMappingURL=construct.js.map

//# sourceMappingURL=construct.js.map

//# sourceMappingURL=construct.js.map

//# sourceMappingURL=construct.js.map

//# sourceMappingURL=construct.js.map

//# sourceMappingURL=construct.js.map

//# sourceMappingURL=construct.js.map

//# sourceMappingURL=construct.js.map

//# sourceMappingURL=construct.js.map

//# sourceMappingURL=construct.js.map

//# sourceMappingURL=construct.js.map

//# sourceMappingURL=construct.js.map

//# sourceMappingURL=construct.js.map

//# sourceMappingURL=construct.js.map

//# sourceMappingURL=construct.js.map

//# sourceMappingURL=construct.js.map

//# sourceMappingURL=construct.js.map

//# sourceMappingURL=construct.js.map

//# sourceMappingURL=construct.js.map

//# sourceMappingURL=construct.js.map

//# sourceMappingURL=construct.js.map

//# sourceMappingURL=construct.js.map

//# sourceMappingURL=construct.js.map

//# sourceMappingURL=construct.js.map

//# sourceMappingURL=construct.js.map

//# sourceMappingURL=construct.js.map

//# sourceMappingURL=construct.js.map

//# sourceMappingURL=construct.js.map

//# sourceMappingURL=construct.js.map

//# sourceMappingURL=construct.js.map
