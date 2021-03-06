"use strict";define("aDialog",["U","jquery","_","asyncjs","text!./html/aDialog/layout.html"],function(a,e,o,t,l){var i={$appendTo:e(e("#body-fict").length?"#body-fict":"body"),curForm:null,defaults:{wide:!1,data:"<h2>Empty data!</h2>",context:null,required:null,templateData:null,templateUrl:null,templateCss:null,specialModeOverlay:!1,extendClass:"",noBorderRadius:!1,handler:!1,eventHandlerClass:"",afterOpen:function(){},beforeClose:function(){},dataChanged:function(){}},open:function(t){var i=this;i.opt=e.extend({},i.defaults,t),e(".ul-widget-backCall").addClass("hide"),i.$aDialog=e(o.template(l,{handler:i.opt.handler,__:i.opt.__||function(){},eventHandlerClass:i.opt.eventHandlerClass,extendClass:i.opt.extendClass||""})).appendTo(i.$appendTo),i.opt.wide&&i.$aDialog.addClass("aDialog-wide"),i.opt.specialModeOverlay&&i.$aDialog.addClass("aDialog-special-overlay"),i.opt.noBorderRadius&&i.$aDialog.addClass("aDialog-no-border-radius"),setTimeout(function(){i.$aDialog.addClass("ul-js-aDialog-visible")},10),i.$body=i.$aDialog.find("#aDialog-data"),a.layers.on(0,function(){i.hide()}),e("body").addClass("js-aDialogOpened"),i._addEvents(),e("body").on("changePreviewDevise.aDialog",function(){i.hide()}),i._loadTemplate(),i.opened=!0},setNoClose:function(a){this.noClose=a,this.$aDialog.removeClass("noClose"),a&&this.$aDialog.addClass("noClose")},changeData:function(a){return this.opened&&this.$body?(this.$body.html(a),this.opt.dataChanged(),this.$body):void 0},hide:function(){var a=this,o=null,t=window.scrollX,l=window.scrollY;a.curForm&&(o=a.curForm.getResult(),a.curForm.destroy(),a.curForm=null),e("body").removeClass("js-aDialogOpened"),a.$aDialog&&a.$aDialog.off(".aDialog"),e("body").off("changePreviewDevise.aDialog"),a.opt.beforeClose(this.$body,o),a.$aDialog&&(a.$aDialog.remove(),setTimeout(function(){return window.scroll(t,l)},0),a.$aDialog=null),a.$body=null,setTimeout(function(){a.opened=!1},500)},_hide:function(){a.layers.off(!0)},_addEvents:function(){var o=this;o.$aDialog.on("click.aDialog, touchend.aDialog",function(o){var t=e(o.target).closest(".ul-js-aDialog-visible");t.length&&t.hasClass("noClose")||e(o.target).closest("#aDialog-content").length&&!e(o.target).hasClass("js-aDialog-close")||(e(".ul-widget-backCall").removeClass("hide"),a.layers.off(!0),o.preventDefault(),o.stopPropagation())})},msg:{show:function(a){var o=this;this.hide(),a=e.extend({loading:!1,text:"",headerOverlap:!1,autoHide:0,clickClose:!1},a);var t=this._getStructure(a);a.headerOverlap&&t.css("top",i.$body.find("h2").outerHeight()||0),t=t.appendTo(i.$body),a.clickClose&&t.on("click.aDialog",function(a){o.hide(),a.stopPropagation()}),setTimeout(function(){t.addClass("aDialog-msg-visible")},10),a.autoHide&&(this.timer=setInterval(function(){o.hide()},a.autoHide))},_getStructure:function(a){var o=e('<div class="aDialog-msg normal"></div>');return a.loading&&o.append('<span class="aDialog-msg-loading-icon"></span>'),o.append('<p class="aDialog-msg-text normal">'+a.text+"</p>"),o},hide:function(){this.timer&&clearInterval(this.timer),null!==i.$body&&i.$body.find(".aDialog-msg").off(".aDialog").remove()},changeText:function(a){if(null!==i.$body){var e=i.$body.find(".aDialog-msg-text");e.length&&e.html(a)}}},_loadTemplate:function(){var a=this,t=[];t.push(a.opt.required),t.push(a.opt.templateUrl),t.push(a.opt.templateCss),a.opt.templateUrl?require(t,function(t,l){a._renderFromData(o.template(l,a.opt.templateData)),t&&(a.curForm=e.extend({init:function(){},getResult:function(){},destroy:function(){}},t),a.curForm.init(a.$body,a._hide,a.opt.context))}):a._renderFromData(a.opt.data)},_renderFromData:function(a){this.$body.html(a).removeClass("ul-loading-indicator"),this.opt.afterOpen(this.$body,this._hide)}};return i});
//# sourceMappingURL=aDialog.js.map

//# sourceMappingURL=aDialog.js.map

//# sourceMappingURL=aDialog.js.map

//# sourceMappingURL=aDialog.js.map

//# sourceMappingURL=aDialog.js.map

//# sourceMappingURL=aDialog.js.map

//# sourceMappingURL=aDialog.js.map

//# sourceMappingURL=aDialog.js.map

//# sourceMappingURL=aDialog.js.map

//# sourceMappingURL=aDialog.js.map

//# sourceMappingURL=aDialog.js.map

//# sourceMappingURL=aDialog.js.map

//# sourceMappingURL=aDialog.js.map

//# sourceMappingURL=aDialog.js.map

//# sourceMappingURL=aDialog.js.map

//# sourceMappingURL=aDialog.js.map

//# sourceMappingURL=aDialog.js.map

//# sourceMappingURL=aDialog.js.map

//# sourceMappingURL=aDialog.js.map

//# sourceMappingURL=aDialog.js.map

//# sourceMappingURL=aDialog.js.map

//# sourceMappingURL=aDialog.js.map

//# sourceMappingURL=aDialog.js.map

//# sourceMappingURL=aDialog.js.map

//# sourceMappingURL=aDialog.js.map

//# sourceMappingURL=aDialog.js.map

//# sourceMappingURL=aDialog.js.map

//# sourceMappingURL=aDialog.js.map

//# sourceMappingURL=aDialog.js.map

//# sourceMappingURL=aDialog.js.map

//# sourceMappingURL=aDialog.js.map

//# sourceMappingURL=aDialog.js.map

//# sourceMappingURL=aDialog.js.map

//# sourceMappingURL=aDialog.js.map

//# sourceMappingURL=aDialog.js.map

//# sourceMappingURL=aDialog.js.map

//# sourceMappingURL=aDialog.js.map

//# sourceMappingURL=aDialog.js.map

//# sourceMappingURL=aDialog.js.map

//# sourceMappingURL=aDialog.js.map

//# sourceMappingURL=aDialog.js.map

//# sourceMappingURL=aDialog.js.map

//# sourceMappingURL=aDialog.js.map

//# sourceMappingURL=aDialog.js.map

//# sourceMappingURL=aDialog.js.map

//# sourceMappingURL=aDialog.js.map

//# sourceMappingURL=aDialog.js.map

//# sourceMappingURL=aDialog.js.map

//# sourceMappingURL=aDialog.js.map

//# sourceMappingURL=aDialog.js.map

//# sourceMappingURL=aDialog.js.map

//# sourceMappingURL=aDialog.js.map

//# sourceMappingURL=aDialog.js.map

//# sourceMappingURL=aDialog.js.map

//# sourceMappingURL=aDialog.js.map

//# sourceMappingURL=aDialog.js.map

//# sourceMappingURL=aDialog.js.map

//# sourceMappingURL=aDialog.js.map

//# sourceMappingURL=aDialog.js.map

//# sourceMappingURL=aDialog.js.map

//# sourceMappingURL=aDialog.js.map

//# sourceMappingURL=aDialog.js.map

//# sourceMappingURL=aDialog.js.map

//# sourceMappingURL=aDialog.js.map

//# sourceMappingURL=aDialog.js.map

//# sourceMappingURL=aDialog.js.map

//# sourceMappingURL=aDialog.js.map

//# sourceMappingURL=aDialog.js.map

//# sourceMappingURL=aDialog.js.map

//# sourceMappingURL=aDialog.js.map

//# sourceMappingURL=aDialog.js.map

//# sourceMappingURL=aDialog.js.map

//# sourceMappingURL=aDialog.js.map

//# sourceMappingURL=aDialog.js.map

//# sourceMappingURL=aDialog.js.map

//# sourceMappingURL=aDialog.js.map

//# sourceMappingURL=aDialog.js.map

//# sourceMappingURL=aDialog.js.map

//# sourceMappingURL=aDialog.js.map

//# sourceMappingURL=aDialog.js.map

//# sourceMappingURL=aDialog.js.map

//# sourceMappingURL=aDialog.js.map

//# sourceMappingURL=aDialog.js.map

//# sourceMappingURL=aDialog.js.map

//# sourceMappingURL=aDialog.js.map

//# sourceMappingURL=aDialog.js.map

//# sourceMappingURL=aDialog.js.map

//# sourceMappingURL=aDialog.js.map

//# sourceMappingURL=aDialog.js.map

//# sourceMappingURL=aDialog.js.map

//# sourceMappingURL=aDialog.js.map

//# sourceMappingURL=aDialog.js.map

//# sourceMappingURL=aDialog.js.map

//# sourceMappingURL=aDialog.js.map

//# sourceMappingURL=aDialog.js.map

//# sourceMappingURL=aDialog.js.map

//# sourceMappingURL=aDialog.js.map

//# sourceMappingURL=aDialog.js.map

//# sourceMappingURL=aDialog.js.map

//# sourceMappingURL=aDialog.js.map

//# sourceMappingURL=aDialog.js.map

//# sourceMappingURL=aDialog.js.map

//# sourceMappingURL=aDialog.js.map

//# sourceMappingURL=aDialog.js.map

//# sourceMappingURL=aDialog.js.map

//# sourceMappingURL=aDialog.js.map

//# sourceMappingURL=aDialog.js.map

//# sourceMappingURL=aDialog.js.map

//# sourceMappingURL=aDialog.js.map

//# sourceMappingURL=aDialog.js.map

//# sourceMappingURL=aDialog.js.map

//# sourceMappingURL=aDialog.js.map

//# sourceMappingURL=aDialog.js.map

//# sourceMappingURL=aDialog.js.map

//# sourceMappingURL=aDialog.js.map

//# sourceMappingURL=aDialog.js.map

//# sourceMappingURL=aDialog.js.map

//# sourceMappingURL=aDialog.js.map

//# sourceMappingURL=aDialog.js.map

//# sourceMappingURL=aDialog.js.map

//# sourceMappingURL=aDialog.js.map

//# sourceMappingURL=aDialog.js.map

//# sourceMappingURL=aDialog.js.map

//# sourceMappingURL=aDialog.js.map

//# sourceMappingURL=aDialog.js.map

//# sourceMappingURL=aDialog.js.map

//# sourceMappingURL=aDialog.js.map

//# sourceMappingURL=aDialog.js.map

//# sourceMappingURL=aDialog.js.map

//# sourceMappingURL=aDialog.js.map

//# sourceMappingURL=aDialog.js.map

//# sourceMappingURL=aDialog.js.map

//# sourceMappingURL=aDialog.js.map

//# sourceMappingURL=aDialog.js.map

//# sourceMappingURL=aDialog.js.map

//# sourceMappingURL=aDialog.js.map

//# sourceMappingURL=aDialog.js.map

//# sourceMappingURL=aDialog.js.map

//# sourceMappingURL=aDialog.js.map

//# sourceMappingURL=aDialog.js.map

//# sourceMappingURL=aDialog.js.map

//# sourceMappingURL=aDialog.js.map

//# sourceMappingURL=aDialog.js.map

//# sourceMappingURL=aDialog.js.map

//# sourceMappingURL=aDialog.js.map

//# sourceMappingURL=aDialog.js.map

//# sourceMappingURL=aDialog.js.map

//# sourceMappingURL=aDialog.js.map

//# sourceMappingURL=aDialog.js.map

//# sourceMappingURL=aDialog.js.map

//# sourceMappingURL=aDialog.js.map

//# sourceMappingURL=aDialog.js.map

//# sourceMappingURL=aDialog.js.map

//# sourceMappingURL=aDialog.js.map

//# sourceMappingURL=aDialog.js.map

//# sourceMappingURL=aDialog.js.map

//# sourceMappingURL=aDialog.js.map

//# sourceMappingURL=aDialog.js.map

//# sourceMappingURL=aDialog.js.map

//# sourceMappingURL=aDialog.js.map

//# sourceMappingURL=aDialog.js.map

//# sourceMappingURL=aDialog.js.map

//# sourceMappingURL=aDialog.js.map

//# sourceMappingURL=aDialog.js.map

//# sourceMappingURL=aDialog.js.map

//# sourceMappingURL=aDialog.js.map

//# sourceMappingURL=aDialog.js.map

//# sourceMappingURL=aDialog.js.map

//# sourceMappingURL=aDialog.js.map

//# sourceMappingURL=aDialog.js.map

//# sourceMappingURL=aDialog.js.map

//# sourceMappingURL=aDialog.js.map

//# sourceMappingURL=aDialog.js.map

//# sourceMappingURL=aDialog.js.map

//# sourceMappingURL=aDialog.js.map

//# sourceMappingURL=aDialog.js.map

//# sourceMappingURL=aDialog.js.map

//# sourceMappingURL=aDialog.js.map

//# sourceMappingURL=aDialog.js.map

//# sourceMappingURL=aDialog.js.map

//# sourceMappingURL=aDialog.js.map

//# sourceMappingURL=aDialog.js.map

//# sourceMappingURL=aDialog.js.map

//# sourceMappingURL=aDialog.js.map

//# sourceMappingURL=aDialog.js.map

//# sourceMappingURL=aDialog.js.map

//# sourceMappingURL=aDialog.js.map

//# sourceMappingURL=aDialog.js.map

//# sourceMappingURL=aDialog.js.map

//# sourceMappingURL=aDialog.js.map

//# sourceMappingURL=aDialog.js.map

//# sourceMappingURL=aDialog.js.map

//# sourceMappingURL=aDialog.js.map

//# sourceMappingURL=aDialog.js.map

//# sourceMappingURL=aDialog.js.map

//# sourceMappingURL=aDialog.js.map

//# sourceMappingURL=aDialog.js.map

//# sourceMappingURL=aDialog.js.map

//# sourceMappingURL=aDialog.js.map
