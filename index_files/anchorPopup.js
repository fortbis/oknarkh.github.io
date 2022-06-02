"use strict";function ownKeys(e,r){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter(function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable})),o.push.apply(o,n)}return o}function _objectSpread(e){for(var r=1;r<arguments.length;r++){var o=null!=arguments[r]?arguments[r]:{};r%2?ownKeys(o,!0).forEach(function(r){_defineProperty(e,r,o[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):ownKeys(o).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(o,r))})}return e}function _defineProperty(e,r,o){return r in e?Object.defineProperty(e,r,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[r]=o,e}define("anchorPopup",["jquery","U","popup","i18n","anchorValidation"],function(e,r,o,n,t){var a={$popup:null,opts:{$target:null,afterOpen:function(){},afterAddingAnchor:function(){},anchor:null}},p=n("constructor.anchorPopup"),c=function(e){var r=a.opts,n=a.$popup,t=n.find(".js-anchor-add");t.attr("disabled",!0),r.afterAddingAnchor(e),o.hide()},s=function(e,r){var o=a.$popup,n=o.find(".js-anchor-input"),t=o.find(".js-anchor-message");r?"valid name"===e?(t.removeClass("error"),n.removeClass("error").addClass("success")):(t.addClass("error"),n.removeClass("success").addClass("error")):(t.removeClass("error"),n.removeClass("error").removeClass("success")),t.text(p(e))},i=function(e,r){var o=a.$popup,n=a.opts,t=o.find(".js-anchor-add"),c=o.find(".js-anchor-delete");n.anchor?t.text(p("rename anchor")):t.text(p("add anchor")),r&&e?t.attr("disabled",!1):t.attr("disabled",!0),e&&e===n.anchor?(c.show(),t.hide()):(c.hide(),t.show())},u=function(){var e=a.$popup,r=e.find(".js-anchor-input").val(),o=t.getError(r),n="valid name"===o.text;s(o.text,r),i(r,n)},l=function(){var o=a.$popup,n=o.find(".js-anchor-input").val(),p=t.getError(n);"valid name"===p.text&&e.ajax({url:"/sites/url/".concat(r.params.site,"/pages/id/").concat(r.params.pageId,"/validateAnchor"),api:!0,data:{anchor:n},ok:function(){c(n)},noOk:function(){s("duplicate anchor",n),i(n,!1)}})},d=function(){var e=a.$popup;e.find(".js-anchor-input").val(""),c(null)},h=function(){var e=a.$popup,r=a.opts;e.find(".js-anchor-input").val("").focus().val(r.anchor),e.on("keydown.anchorPopup",".js-anchor-input",function(e){13===e.keyCode&&l()}).on("input.anchorPopup",".js-anchor-input",u).on("click.anchorPopup",".js-anchor-add",l).on("click.anchorPopup",".js-anchor-delete",d)},f={show:function(e){o.open({title:p("title"),$targetEl:e.$target,titleShow:!0,showCloseBtn:!1,showApplyBtn:!1,saveBtn:!1,draggable:!0,reopenMode:!0,positionTarget:"right",wide:!1,templateData:{t:p,anchor:e.anchor||""},templateUrl:"text!/html/constructor/anchorTemplate.html",afterOpenThis:function(){a.$popup=this.$el,a.opts=_objectSpread({},a.opts,{},e),h(),i(a.opts.anchor),a.opts.afterOpen()},beforeClose:function(){a.$popup.off(".anchorPopup")}})}};return f});
//# sourceMappingURL=anchorPopup.js.map

//# sourceMappingURL=anchorPopup.js.map

//# sourceMappingURL=anchorPopup.js.map

//# sourceMappingURL=anchorPopup.js.map

//# sourceMappingURL=anchorPopup.js.map

//# sourceMappingURL=anchorPopup.js.map

//# sourceMappingURL=anchorPopup.js.map

//# sourceMappingURL=anchorPopup.js.map

//# sourceMappingURL=anchorPopup.js.map

//# sourceMappingURL=anchorPopup.js.map

//# sourceMappingURL=anchorPopup.js.map

//# sourceMappingURL=anchorPopup.js.map

//# sourceMappingURL=anchorPopup.js.map

//# sourceMappingURL=anchorPopup.js.map

//# sourceMappingURL=anchorPopup.js.map

//# sourceMappingURL=anchorPopup.js.map

//# sourceMappingURL=anchorPopup.js.map

//# sourceMappingURL=anchorPopup.js.map

//# sourceMappingURL=anchorPopup.js.map

//# sourceMappingURL=anchorPopup.js.map

//# sourceMappingURL=anchorPopup.js.map

//# sourceMappingURL=anchorPopup.js.map

//# sourceMappingURL=anchorPopup.js.map

//# sourceMappingURL=anchorPopup.js.map

//# sourceMappingURL=anchorPopup.js.map

//# sourceMappingURL=anchorPopup.js.map

//# sourceMappingURL=anchorPopup.js.map

//# sourceMappingURL=anchorPopup.js.map

//# sourceMappingURL=anchorPopup.js.map

//# sourceMappingURL=anchorPopup.js.map

//# sourceMappingURL=anchorPopup.js.map

//# sourceMappingURL=anchorPopup.js.map

//# sourceMappingURL=anchorPopup.js.map

//# sourceMappingURL=anchorPopup.js.map

//# sourceMappingURL=anchorPopup.js.map

//# sourceMappingURL=anchorPopup.js.map

//# sourceMappingURL=anchorPopup.js.map

//# sourceMappingURL=anchorPopup.js.map

//# sourceMappingURL=anchorPopup.js.map

//# sourceMappingURL=anchorPopup.js.map

//# sourceMappingURL=anchorPopup.js.map

//# sourceMappingURL=anchorPopup.js.map

//# sourceMappingURL=anchorPopup.js.map

//# sourceMappingURL=anchorPopup.js.map

//# sourceMappingURL=anchorPopup.js.map

//# sourceMappingURL=anchorPopup.js.map

//# sourceMappingURL=anchorPopup.js.map

//# sourceMappingURL=anchorPopup.js.map

//# sourceMappingURL=anchorPopup.js.map

//# sourceMappingURL=anchorPopup.js.map

//# sourceMappingURL=anchorPopup.js.map

//# sourceMappingURL=anchorPopup.js.map

//# sourceMappingURL=anchorPopup.js.map

//# sourceMappingURL=anchorPopup.js.map

//# sourceMappingURL=anchorPopup.js.map

//# sourceMappingURL=anchorPopup.js.map

//# sourceMappingURL=anchorPopup.js.map

//# sourceMappingURL=anchorPopup.js.map

//# sourceMappingURL=anchorPopup.js.map

//# sourceMappingURL=anchorPopup.js.map

//# sourceMappingURL=anchorPopup.js.map

//# sourceMappingURL=anchorPopup.js.map

//# sourceMappingURL=anchorPopup.js.map

//# sourceMappingURL=anchorPopup.js.map

//# sourceMappingURL=anchorPopup.js.map

//# sourceMappingURL=anchorPopup.js.map

//# sourceMappingURL=anchorPopup.js.map

//# sourceMappingURL=anchorPopup.js.map

//# sourceMappingURL=anchorPopup.js.map

//# sourceMappingURL=anchorPopup.js.map

//# sourceMappingURL=anchorPopup.js.map

//# sourceMappingURL=anchorPopup.js.map

//# sourceMappingURL=anchorPopup.js.map

//# sourceMappingURL=anchorPopup.js.map

//# sourceMappingURL=anchorPopup.js.map

//# sourceMappingURL=anchorPopup.js.map

//# sourceMappingURL=anchorPopup.js.map

//# sourceMappingURL=anchorPopup.js.map

//# sourceMappingURL=anchorPopup.js.map

//# sourceMappingURL=anchorPopup.js.map

//# sourceMappingURL=anchorPopup.js.map

//# sourceMappingURL=anchorPopup.js.map

//# sourceMappingURL=anchorPopup.js.map

//# sourceMappingURL=anchorPopup.js.map

//# sourceMappingURL=anchorPopup.js.map

//# sourceMappingURL=anchorPopup.js.map

//# sourceMappingURL=anchorPopup.js.map

//# sourceMappingURL=anchorPopup.js.map

//# sourceMappingURL=anchorPopup.js.map

//# sourceMappingURL=anchorPopup.js.map

//# sourceMappingURL=anchorPopup.js.map

//# sourceMappingURL=anchorPopup.js.map

//# sourceMappingURL=anchorPopup.js.map

//# sourceMappingURL=anchorPopup.js.map

//# sourceMappingURL=anchorPopup.js.map

//# sourceMappingURL=anchorPopup.js.map

//# sourceMappingURL=anchorPopup.js.map

//# sourceMappingURL=anchorPopup.js.map

//# sourceMappingURL=anchorPopup.js.map

//# sourceMappingURL=anchorPopup.js.map

//# sourceMappingURL=anchorPopup.js.map

//# sourceMappingURL=anchorPopup.js.map

//# sourceMappingURL=anchorPopup.js.map

//# sourceMappingURL=anchorPopup.js.map

//# sourceMappingURL=anchorPopup.js.map

//# sourceMappingURL=anchorPopup.js.map

//# sourceMappingURL=anchorPopup.js.map

//# sourceMappingURL=anchorPopup.js.map

//# sourceMappingURL=anchorPopup.js.map

//# sourceMappingURL=anchorPopup.js.map

//# sourceMappingURL=anchorPopup.js.map

//# sourceMappingURL=anchorPopup.js.map

//# sourceMappingURL=anchorPopup.js.map

//# sourceMappingURL=anchorPopup.js.map

//# sourceMappingURL=anchorPopup.js.map

//# sourceMappingURL=anchorPopup.js.map

//# sourceMappingURL=anchorPopup.js.map

//# sourceMappingURL=anchorPopup.js.map

//# sourceMappingURL=anchorPopup.js.map

//# sourceMappingURL=anchorPopup.js.map

//# sourceMappingURL=anchorPopup.js.map

//# sourceMappingURL=anchorPopup.js.map

//# sourceMappingURL=anchorPopup.js.map

//# sourceMappingURL=anchorPopup.js.map

//# sourceMappingURL=anchorPopup.js.map

//# sourceMappingURL=anchorPopup.js.map

//# sourceMappingURL=anchorPopup.js.map

//# sourceMappingURL=anchorPopup.js.map

//# sourceMappingURL=anchorPopup.js.map

//# sourceMappingURL=anchorPopup.js.map

//# sourceMappingURL=anchorPopup.js.map

//# sourceMappingURL=anchorPopup.js.map

//# sourceMappingURL=anchorPopup.js.map

//# sourceMappingURL=anchorPopup.js.map

//# sourceMappingURL=anchorPopup.js.map

//# sourceMappingURL=anchorPopup.js.map

//# sourceMappingURL=anchorPopup.js.map

//# sourceMappingURL=anchorPopup.js.map

//# sourceMappingURL=anchorPopup.js.map

//# sourceMappingURL=anchorPopup.js.map

//# sourceMappingURL=anchorPopup.js.map

//# sourceMappingURL=anchorPopup.js.map

//# sourceMappingURL=anchorPopup.js.map

//# sourceMappingURL=anchorPopup.js.map

//# sourceMappingURL=anchorPopup.js.map

//# sourceMappingURL=anchorPopup.js.map

//# sourceMappingURL=anchorPopup.js.map

//# sourceMappingURL=anchorPopup.js.map

//# sourceMappingURL=anchorPopup.js.map

//# sourceMappingURL=anchorPopup.js.map

//# sourceMappingURL=anchorPopup.js.map

//# sourceMappingURL=anchorPopup.js.map

//# sourceMappingURL=anchorPopup.js.map

//# sourceMappingURL=anchorPopup.js.map

//# sourceMappingURL=anchorPopup.js.map

//# sourceMappingURL=anchorPopup.js.map

//# sourceMappingURL=anchorPopup.js.map

//# sourceMappingURL=anchorPopup.js.map

//# sourceMappingURL=anchorPopup.js.map

//# sourceMappingURL=anchorPopup.js.map

//# sourceMappingURL=anchorPopup.js.map

//# sourceMappingURL=anchorPopup.js.map

//# sourceMappingURL=anchorPopup.js.map

//# sourceMappingURL=anchorPopup.js.map

//# sourceMappingURL=anchorPopup.js.map

//# sourceMappingURL=anchorPopup.js.map

//# sourceMappingURL=anchorPopup.js.map

//# sourceMappingURL=anchorPopup.js.map

//# sourceMappingURL=anchorPopup.js.map

//# sourceMappingURL=anchorPopup.js.map

//# sourceMappingURL=anchorPopup.js.map

//# sourceMappingURL=anchorPopup.js.map

//# sourceMappingURL=anchorPopup.js.map

//# sourceMappingURL=anchorPopup.js.map

//# sourceMappingURL=anchorPopup.js.map

//# sourceMappingURL=anchorPopup.js.map

//# sourceMappingURL=anchorPopup.js.map

//# sourceMappingURL=anchorPopup.js.map

//# sourceMappingURL=anchorPopup.js.map

//# sourceMappingURL=anchorPopup.js.map

//# sourceMappingURL=anchorPopup.js.map

//# sourceMappingURL=anchorPopup.js.map

//# sourceMappingURL=anchorPopup.js.map

//# sourceMappingURL=anchorPopup.js.map

//# sourceMappingURL=anchorPopup.js.map

//# sourceMappingURL=anchorPopup.js.map

//# sourceMappingURL=anchorPopup.js.map

//# sourceMappingURL=anchorPopup.js.map

//# sourceMappingURL=anchorPopup.js.map

//# sourceMappingURL=anchorPopup.js.map

//# sourceMappingURL=anchorPopup.js.map

//# sourceMappingURL=anchorPopup.js.map

//# sourceMappingURL=anchorPopup.js.map

//# sourceMappingURL=anchorPopup.js.map

//# sourceMappingURL=anchorPopup.js.map

//# sourceMappingURL=anchorPopup.js.map

//# sourceMappingURL=anchorPopup.js.map

//# sourceMappingURL=anchorPopup.js.map

//# sourceMappingURL=anchorPopup.js.map

//# sourceMappingURL=anchorPopup.js.map

//# sourceMappingURL=anchorPopup.js.map

//# sourceMappingURL=anchorPopup.js.map

//# sourceMappingURL=anchorPopup.js.map

//# sourceMappingURL=anchorPopup.js.map

//# sourceMappingURL=anchorPopup.js.map

//# sourceMappingURL=anchorPopup.js.map

//# sourceMappingURL=anchorPopup.js.map

//# sourceMappingURL=anchorPopup.js.map

//# sourceMappingURL=anchorPopup.js.map

//# sourceMappingURL=anchorPopup.js.map

//# sourceMappingURL=anchorPopup.js.map

//# sourceMappingURL=anchorPopup.js.map

//# sourceMappingURL=anchorPopup.js.map

//# sourceMappingURL=anchorPopup.js.map

//# sourceMappingURL=anchorPopup.js.map

//# sourceMappingURL=anchorPopup.js.map

//# sourceMappingURL=anchorPopup.js.map

//# sourceMappingURL=anchorPopup.js.map

//# sourceMappingURL=anchorPopup.js.map

//# sourceMappingURL=anchorPopup.js.map

//# sourceMappingURL=anchorPopup.js.map

//# sourceMappingURL=anchorPopup.js.map

//# sourceMappingURL=anchorPopup.js.map

//# sourceMappingURL=anchorPopup.js.map

//# sourceMappingURL=anchorPopup.js.map

//# sourceMappingURL=anchorPopup.js.map

//# sourceMappingURL=anchorPopup.js.map

//# sourceMappingURL=anchorPopup.js.map

//# sourceMappingURL=anchorPopup.js.map

//# sourceMappingURL=anchorPopup.js.map

//# sourceMappingURL=anchorPopup.js.map

//# sourceMappingURL=anchorPopup.js.map

//# sourceMappingURL=anchorPopup.js.map

//# sourceMappingURL=anchorPopup.js.map

//# sourceMappingURL=anchorPopup.js.map

//# sourceMappingURL=anchorPopup.js.map

//# sourceMappingURL=anchorPopup.js.map

//# sourceMappingURL=anchorPopup.js.map

//# sourceMappingURL=anchorPopup.js.map

//# sourceMappingURL=anchorPopup.js.map

//# sourceMappingURL=anchorPopup.js.map

//# sourceMappingURL=anchorPopup.js.map

//# sourceMappingURL=anchorPopup.js.map

//# sourceMappingURL=anchorPopup.js.map

//# sourceMappingURL=anchorPopup.js.map

//# sourceMappingURL=anchorPopup.js.map

//# sourceMappingURL=anchorPopup.js.map

//# sourceMappingURL=anchorPopup.js.map

//# sourceMappingURL=anchorPopup.js.map

//# sourceMappingURL=anchorPopup.js.map

//# sourceMappingURL=anchorPopup.js.map

//# sourceMappingURL=anchorPopup.js.map

//# sourceMappingURL=anchorPopup.js.map

//# sourceMappingURL=anchorPopup.js.map

//# sourceMappingURL=anchorPopup.js.map

//# sourceMappingURL=anchorPopup.js.map

//# sourceMappingURL=anchorPopup.js.map

//# sourceMappingURL=anchorPopup.js.map

//# sourceMappingURL=anchorPopup.js.map

//# sourceMappingURL=anchorPopup.js.map

//# sourceMappingURL=anchorPopup.js.map

//# sourceMappingURL=anchorPopup.js.map

//# sourceMappingURL=anchorPopup.js.map

//# sourceMappingURL=anchorPopup.js.map

//# sourceMappingURL=anchorPopup.js.map

//# sourceMappingURL=anchorPopup.js.map

//# sourceMappingURL=anchorPopup.js.map

//# sourceMappingURL=anchorPopup.js.map

//# sourceMappingURL=anchorPopup.js.map

//# sourceMappingURL=anchorPopup.js.map

//# sourceMappingURL=anchorPopup.js.map

//# sourceMappingURL=anchorPopup.js.map

//# sourceMappingURL=anchorPopup.js.map

//# sourceMappingURL=anchorPopup.js.map

//# sourceMappingURL=anchorPopup.js.map

//# sourceMappingURL=anchorPopup.js.map

//# sourceMappingURL=anchorPopup.js.map

//# sourceMappingURL=anchorPopup.js.map

//# sourceMappingURL=anchorPopup.js.map

//# sourceMappingURL=anchorPopup.js.map

//# sourceMappingURL=anchorPopup.js.map

//# sourceMappingURL=anchorPopup.js.map

//# sourceMappingURL=anchorPopup.js.map

//# sourceMappingURL=anchorPopup.js.map

//# sourceMappingURL=anchorPopup.js.map

//# sourceMappingURL=anchorPopup.js.map

//# sourceMappingURL=anchorPopup.js.map

//# sourceMappingURL=anchorPopup.js.map

//# sourceMappingURL=anchorPopup.js.map

//# sourceMappingURL=anchorPopup.js.map

//# sourceMappingURL=anchorPopup.js.map

//# sourceMappingURL=anchorPopup.js.map

//# sourceMappingURL=anchorPopup.js.map

//# sourceMappingURL=anchorPopup.js.map

//# sourceMappingURL=anchorPopup.js.map

//# sourceMappingURL=anchorPopup.js.map

//# sourceMappingURL=anchorPopup.js.map

//# sourceMappingURL=anchorPopup.js.map

//# sourceMappingURL=anchorPopup.js.map

//# sourceMappingURL=anchorPopup.js.map

//# sourceMappingURL=anchorPopup.js.map

//# sourceMappingURL=anchorPopup.js.map

//# sourceMappingURL=anchorPopup.js.map

//# sourceMappingURL=anchorPopup.js.map
