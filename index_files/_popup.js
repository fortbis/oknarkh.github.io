"use strict";define("js/ulib/crop/usercrop/_popup",["jquery","_","popup","uform","js/ulib/crop/usercrop/__popupEvents"],function(e,t,o,p,n){return{opened:!1,add:function(){n(this)},open:function(t){var n=this,s=null;this.opts=e.extend(!0,{title:"",template:"",html:"",data:{},onOpen:function(){},onChange:function(){},onClose:function(){}},t),o.open({$targetEl:n.me._controls._buttons.$buttons,hideOverlay:!0,afterClose:!1,wide:!1,saveBtn:!1,title:n.opts.title,templateUrl:n.opts.template,templateData:e.extend({__:n.me.context.__},n.opts.data),close:function(){n.me.events.dispatch("popupClose",{type:n.opts.type}),n.opts.onClose(),n.opened=!1,s.find(["ul-model"]).off("change._popup"),n.me.events.off("._popup_opened")},afterOpenThis:function(){s=this.$body.find(".ul-sp")||this.$body,s.append(n.opts.html),p.formFill(s,n.opts.data),n.opened=!0,n.me.events.dispatch("popupOpen"),n.opts.onOpen(),s.find("[ul-model]").on("change._popup",function(){var e=p.formParse(s,n.opts.data);n.me.events.dispatch("popupChange",{type:n.opts.type,data:e}),n.opts.onChange(e,s)}),n.me.events.on("overlayClick._popup_opened",function(e){n.opened&&(n.close(),e.stopPropagation())})}})},close:function(){this.opened&&o.hide()},remove:function(){this.close(),this.linkPopover&&this.linkPopover.destroy(),this.me.events.off("._popup")}}});
//# sourceMappingURL=_popup.js.map

//# sourceMappingURL=_popup.js.map

//# sourceMappingURL=_popup.js.map

//# sourceMappingURL=_popup.js.map

//# sourceMappingURL=_popup.js.map

//# sourceMappingURL=_popup.js.map

//# sourceMappingURL=_popup.js.map

//# sourceMappingURL=_popup.js.map

//# sourceMappingURL=_popup.js.map

//# sourceMappingURL=_popup.js.map

//# sourceMappingURL=_popup.js.map

//# sourceMappingURL=_popup.js.map

//# sourceMappingURL=_popup.js.map

//# sourceMappingURL=_popup.js.map

//# sourceMappingURL=_popup.js.map

//# sourceMappingURL=_popup.js.map

//# sourceMappingURL=_popup.js.map

//# sourceMappingURL=_popup.js.map

//# sourceMappingURL=_popup.js.map

//# sourceMappingURL=_popup.js.map

//# sourceMappingURL=_popup.js.map

//# sourceMappingURL=_popup.js.map

//# sourceMappingURL=_popup.js.map

//# sourceMappingURL=_popup.js.map

//# sourceMappingURL=_popup.js.map

//# sourceMappingURL=_popup.js.map

//# sourceMappingURL=_popup.js.map

//# sourceMappingURL=_popup.js.map

//# sourceMappingURL=_popup.js.map

//# sourceMappingURL=_popup.js.map

//# sourceMappingURL=_popup.js.map

//# sourceMappingURL=_popup.js.map

//# sourceMappingURL=_popup.js.map

//# sourceMappingURL=_popup.js.map

//# sourceMappingURL=_popup.js.map

//# sourceMappingURL=_popup.js.map

//# sourceMappingURL=_popup.js.map

//# sourceMappingURL=_popup.js.map

//# sourceMappingURL=_popup.js.map

//# sourceMappingURL=_popup.js.map

//# sourceMappingURL=_popup.js.map

//# sourceMappingURL=_popup.js.map

//# sourceMappingURL=_popup.js.map

//# sourceMappingURL=_popup.js.map

//# sourceMappingURL=_popup.js.map

//# sourceMappingURL=_popup.js.map

//# sourceMappingURL=_popup.js.map

//# sourceMappingURL=_popup.js.map

//# sourceMappingURL=_popup.js.map

//# sourceMappingURL=_popup.js.map

//# sourceMappingURL=_popup.js.map

//# sourceMappingURL=_popup.js.map

//# sourceMappingURL=_popup.js.map

//# sourceMappingURL=_popup.js.map

//# sourceMappingURL=_popup.js.map

//# sourceMappingURL=_popup.js.map

//# sourceMappingURL=_popup.js.map

//# sourceMappingURL=_popup.js.map

//# sourceMappingURL=_popup.js.map

//# sourceMappingURL=_popup.js.map

//# sourceMappingURL=_popup.js.map

//# sourceMappingURL=_popup.js.map

//# sourceMappingURL=_popup.js.map

//# sourceMappingURL=_popup.js.map

//# sourceMappingURL=_popup.js.map

//# sourceMappingURL=_popup.js.map

//# sourceMappingURL=_popup.js.map

//# sourceMappingURL=_popup.js.map

//# sourceMappingURL=_popup.js.map

//# sourceMappingURL=_popup.js.map

//# sourceMappingURL=_popup.js.map

//# sourceMappingURL=_popup.js.map

//# sourceMappingURL=_popup.js.map

//# sourceMappingURL=_popup.js.map

//# sourceMappingURL=_popup.js.map

//# sourceMappingURL=_popup.js.map

//# sourceMappingURL=_popup.js.map

//# sourceMappingURL=_popup.js.map

//# sourceMappingURL=_popup.js.map

//# sourceMappingURL=_popup.js.map

//# sourceMappingURL=_popup.js.map

//# sourceMappingURL=_popup.js.map

//# sourceMappingURL=_popup.js.map

//# sourceMappingURL=_popup.js.map

//# sourceMappingURL=_popup.js.map

//# sourceMappingURL=_popup.js.map

//# sourceMappingURL=_popup.js.map

//# sourceMappingURL=_popup.js.map

//# sourceMappingURL=_popup.js.map

//# sourceMappingURL=_popup.js.map

//# sourceMappingURL=_popup.js.map

//# sourceMappingURL=_popup.js.map

//# sourceMappingURL=_popup.js.map

//# sourceMappingURL=_popup.js.map

//# sourceMappingURL=_popup.js.map

//# sourceMappingURL=_popup.js.map

//# sourceMappingURL=_popup.js.map

//# sourceMappingURL=_popup.js.map

//# sourceMappingURL=_popup.js.map

//# sourceMappingURL=_popup.js.map

//# sourceMappingURL=_popup.js.map

//# sourceMappingURL=_popup.js.map

//# sourceMappingURL=_popup.js.map

//# sourceMappingURL=_popup.js.map

//# sourceMappingURL=_popup.js.map

//# sourceMappingURL=_popup.js.map

//# sourceMappingURL=_popup.js.map

//# sourceMappingURL=_popup.js.map

//# sourceMappingURL=_popup.js.map

//# sourceMappingURL=_popup.js.map

//# sourceMappingURL=_popup.js.map

//# sourceMappingURL=_popup.js.map

//# sourceMappingURL=_popup.js.map

//# sourceMappingURL=_popup.js.map

//# sourceMappingURL=_popup.js.map

//# sourceMappingURL=_popup.js.map

//# sourceMappingURL=_popup.js.map

//# sourceMappingURL=_popup.js.map

//# sourceMappingURL=_popup.js.map

//# sourceMappingURL=_popup.js.map

//# sourceMappingURL=_popup.js.map

//# sourceMappingURL=_popup.js.map

//# sourceMappingURL=_popup.js.map

//# sourceMappingURL=_popup.js.map

//# sourceMappingURL=_popup.js.map

//# sourceMappingURL=_popup.js.map

//# sourceMappingURL=_popup.js.map

//# sourceMappingURL=_popup.js.map

//# sourceMappingURL=_popup.js.map

//# sourceMappingURL=_popup.js.map

//# sourceMappingURL=_popup.js.map

//# sourceMappingURL=_popup.js.map

//# sourceMappingURL=_popup.js.map

//# sourceMappingURL=_popup.js.map

//# sourceMappingURL=_popup.js.map

//# sourceMappingURL=_popup.js.map

//# sourceMappingURL=_popup.js.map

//# sourceMappingURL=_popup.js.map

//# sourceMappingURL=_popup.js.map

//# sourceMappingURL=_popup.js.map

//# sourceMappingURL=_popup.js.map

//# sourceMappingURL=_popup.js.map

//# sourceMappingURL=_popup.js.map

//# sourceMappingURL=_popup.js.map

//# sourceMappingURL=_popup.js.map

//# sourceMappingURL=_popup.js.map

//# sourceMappingURL=_popup.js.map

//# sourceMappingURL=_popup.js.map

//# sourceMappingURL=_popup.js.map

//# sourceMappingURL=_popup.js.map

//# sourceMappingURL=_popup.js.map

//# sourceMappingURL=_popup.js.map

//# sourceMappingURL=_popup.js.map

//# sourceMappingURL=_popup.js.map

//# sourceMappingURL=_popup.js.map

//# sourceMappingURL=_popup.js.map

//# sourceMappingURL=_popup.js.map

//# sourceMappingURL=_popup.js.map

//# sourceMappingURL=_popup.js.map

//# sourceMappingURL=_popup.js.map

//# sourceMappingURL=_popup.js.map

//# sourceMappingURL=_popup.js.map

//# sourceMappingURL=_popup.js.map

//# sourceMappingURL=_popup.js.map

//# sourceMappingURL=_popup.js.map

//# sourceMappingURL=_popup.js.map

//# sourceMappingURL=_popup.js.map

//# sourceMappingURL=_popup.js.map

//# sourceMappingURL=_popup.js.map

//# sourceMappingURL=_popup.js.map

//# sourceMappingURL=_popup.js.map

//# sourceMappingURL=_popup.js.map

//# sourceMappingURL=_popup.js.map

//# sourceMappingURL=_popup.js.map

//# sourceMappingURL=_popup.js.map

//# sourceMappingURL=_popup.js.map

//# sourceMappingURL=_popup.js.map

//# sourceMappingURL=_popup.js.map

//# sourceMappingURL=_popup.js.map

//# sourceMappingURL=_popup.js.map

//# sourceMappingURL=_popup.js.map

//# sourceMappingURL=_popup.js.map

//# sourceMappingURL=_popup.js.map

//# sourceMappingURL=_popup.js.map

//# sourceMappingURL=_popup.js.map

//# sourceMappingURL=_popup.js.map

//# sourceMappingURL=_popup.js.map

//# sourceMappingURL=_popup.js.map

//# sourceMappingURL=_popup.js.map

//# sourceMappingURL=_popup.js.map

//# sourceMappingURL=_popup.js.map

//# sourceMappingURL=_popup.js.map

//# sourceMappingURL=_popup.js.map

//# sourceMappingURL=_popup.js.map

//# sourceMappingURL=_popup.js.map

//# sourceMappingURL=_popup.js.map

//# sourceMappingURL=_popup.js.map

//# sourceMappingURL=_popup.js.map

//# sourceMappingURL=_popup.js.map

//# sourceMappingURL=_popup.js.map

//# sourceMappingURL=_popup.js.map

//# sourceMappingURL=_popup.js.map

//# sourceMappingURL=_popup.js.map

//# sourceMappingURL=_popup.js.map

//# sourceMappingURL=_popup.js.map

//# sourceMappingURL=_popup.js.map

//# sourceMappingURL=_popup.js.map

//# sourceMappingURL=_popup.js.map

//# sourceMappingURL=_popup.js.map

//# sourceMappingURL=_popup.js.map

//# sourceMappingURL=_popup.js.map

//# sourceMappingURL=_popup.js.map

//# sourceMappingURL=_popup.js.map

//# sourceMappingURL=_popup.js.map

//# sourceMappingURL=_popup.js.map

//# sourceMappingURL=_popup.js.map

//# sourceMappingURL=_popup.js.map

//# sourceMappingURL=_popup.js.map

//# sourceMappingURL=_popup.js.map

//# sourceMappingURL=_popup.js.map

//# sourceMappingURL=_popup.js.map

//# sourceMappingURL=_popup.js.map

//# sourceMappingURL=_popup.js.map

//# sourceMappingURL=_popup.js.map

//# sourceMappingURL=_popup.js.map

//# sourceMappingURL=_popup.js.map

//# sourceMappingURL=_popup.js.map

//# sourceMappingURL=_popup.js.map

//# sourceMappingURL=_popup.js.map

//# sourceMappingURL=_popup.js.map

//# sourceMappingURL=_popup.js.map

//# sourceMappingURL=_popup.js.map

//# sourceMappingURL=_popup.js.map

//# sourceMappingURL=_popup.js.map

//# sourceMappingURL=_popup.js.map

//# sourceMappingURL=_popup.js.map

//# sourceMappingURL=_popup.js.map

//# sourceMappingURL=_popup.js.map

//# sourceMappingURL=_popup.js.map

//# sourceMappingURL=_popup.js.map

//# sourceMappingURL=_popup.js.map

//# sourceMappingURL=_popup.js.map

//# sourceMappingURL=_popup.js.map

//# sourceMappingURL=_popup.js.map

//# sourceMappingURL=_popup.js.map

//# sourceMappingURL=_popup.js.map

//# sourceMappingURL=_popup.js.map

//# sourceMappingURL=_popup.js.map

//# sourceMappingURL=_popup.js.map

//# sourceMappingURL=_popup.js.map

//# sourceMappingURL=_popup.js.map

//# sourceMappingURL=_popup.js.map

//# sourceMappingURL=_popup.js.map

//# sourceMappingURL=_popup.js.map

//# sourceMappingURL=_popup.js.map

//# sourceMappingURL=_popup.js.map

//# sourceMappingURL=_popup.js.map

//# sourceMappingURL=_popup.js.map

//# sourceMappingURL=_popup.js.map

//# sourceMappingURL=_popup.js.map

//# sourceMappingURL=_popup.js.map

//# sourceMappingURL=_popup.js.map

//# sourceMappingURL=_popup.js.map

//# sourceMappingURL=_popup.js.map

//# sourceMappingURL=_popup.js.map

//# sourceMappingURL=_popup.js.map

//# sourceMappingURL=_popup.js.map

//# sourceMappingURL=_popup.js.map

//# sourceMappingURL=_popup.js.map

//# sourceMappingURL=_popup.js.map

//# sourceMappingURL=_popup.js.map

//# sourceMappingURL=_popup.js.map

//# sourceMappingURL=_popup.js.map

//# sourceMappingURL=_popup.js.map

//# sourceMappingURL=_popup.js.map

//# sourceMappingURL=_popup.js.map

//# sourceMappingURL=_popup.js.map

//# sourceMappingURL=_popup.js.map

//# sourceMappingURL=_popup.js.map

//# sourceMappingURL=_popup.js.map

//# sourceMappingURL=_popup.js.map

//# sourceMappingURL=_popup.js.map

//# sourceMappingURL=_popup.js.map

//# sourceMappingURL=_popup.js.map

//# sourceMappingURL=_popup.js.map

//# sourceMappingURL=_popup.js.map

//# sourceMappingURL=_popup.js.map

//# sourceMappingURL=_popup.js.map

//# sourceMappingURL=_popup.js.map

//# sourceMappingURL=_popup.js.map

//# sourceMappingURL=_popup.js.map

//# sourceMappingURL=_popup.js.map

//# sourceMappingURL=_popup.js.map

//# sourceMappingURL=_popup.js.map

//# sourceMappingURL=_popup.js.map

//# sourceMappingURL=_popup.js.map

//# sourceMappingURL=_popup.js.map

//# sourceMappingURL=_popup.js.map

//# sourceMappingURL=_popup.js.map

//# sourceMappingURL=_popup.js.map

//# sourceMappingURL=_popup.js.map

//# sourceMappingURL=_popup.js.map

//# sourceMappingURL=_popup.js.map

//# sourceMappingURL=_popup.js.map

//# sourceMappingURL=_popup.js.map

//# sourceMappingURL=_popup.js.map

//# sourceMappingURL=_popup.js.map

//# sourceMappingURL=_popup.js.map

//# sourceMappingURL=_popup.js.map

//# sourceMappingURL=_popup.js.map

//# sourceMappingURL=_popup.js.map

//# sourceMappingURL=_popup.js.map

//# sourceMappingURL=_popup.js.map

//# sourceMappingURL=_popup.js.map
