"use strict";define("js/ulib/crop/usercrop/__popupEvents",["linkPopover"],function(e){return function(t){t.me.events.on("openTitlePopup._popup",function(e){t.linkPopover&&t.linkPopover.visible&&t.linkPopover.hide(),t.opened&&(t.close(),e.stopPropagation(),"title"===t.opts.type)||t.me.context.opt.titleSettings.setData(function(e){t.open({type:"title",data:e,template:t.me.context.opt.titleSettings.template,title:t.me.context.opt.titleSettings.title,html:t.me.context.opt.titleSettings.html,onOpen:function(e){t.me.events.on("dragging._popupOpened",function(){t.close()}).on("zooming._popupOpened",function(){t.close()}).on("resizing._popupOpened",function(){t.close()}).dispatch("activateTitleBtn").dispatch("overlayDetach").dispatch("resizeDetach").dispatch("zoomDetach"),t.me.context.opt.titleSettings.onOpen(e)},onClose:function(e){t.me.context.opt.titleSettings.onClose(e),t.me.events.dispatch("deactivateTitleBtn").dispatch("overlayAttach").dispatch("resizeAttach").dispatch("zoomAttach").off("._popupOpened")},onChange:function(e,o){t.me.context.opt.titleSettings.onChange(e,o)}})},t.me.$el)}).on("openSeoPopup._popup",function(e){t.linkPopover&&t.linkPopover.visible&&t.linkPopover.hide(),t.opened&&(t.close(),e.stopPropagation(),"seo"===t.opts.type)||t.me.context.opt.seoSettings.setData(function(e){e=$.extend({alt:"",altPlaceholder:"",title:"",titlePlaceholder:""},e),t.open({type:"seo",data:e,template:t.me.context.opt.seoSettings.template,title:t.me.context.opt.seoSettings.title,onOpen:function(e){t.me.events.dispatch("activateSeoBtn"),t.me.context.opt.seoSettings.onOpen(e)},onClose:function(e){t.me.context.opt.seoSettings.onClose(e),t.me.events.dispatch("deactivateSeoBtn")},onChange:function(e){t.me.context.opt.seoSettings.onChange(e,t.me.$el)}})},t.me.$el)}).on("openLinkPopup._popup",function(o){return t.linkPopover&&t.linkPopover.visible?(t.linkPopover.hide(),void(t.opened=!1)):void(t.opened&&(t.close(),o.stopPropagation(),"link"===t.opts.type)||t.me.context.opt.linkSettings.setData(function(o){t.linkPopover=new e({$target:t.me._controls._buttons.$buttons.find(".js-link"),href:o.click.link,gravity:["bottom"],types:["outer","inner","orderForm"],newWindow:"_blank"===o.click.target,removeBtn:!0,overlayClass:"ul-popover-wrap--with-overlay-fixed",onClick:function(e){e.stopPropagation()},onOverlayClick:function(){t.linkPopover.hide()},cbHide:function(){t.opened=!1,o.click.link||t.me.events.dispatch("deactivateLinkBtn")},apply:function(e){o.click.link=e.href,o.click.target=e.newWindow?"_blank":"_self",this.$target.addClass("highlighted"),e.newWindow?o.click.target="_blank":o.click.target="_self","inner"===e.type||"anchor"===e.type?o.click.hrefType="page":"orderForm"===e.type?o.click.hrefType="orderForm":o.click.hrefType="external",t.me.context.opt.linkSettings.onChange(o,t.me.$el)}}),t.linkPopover.show(),t.opened=!0,t.opts={type:"link"},t.me.events.dispatch("activateLinkBtn")},t.me.$el))})}});
//# sourceMappingURL=__popupEvents.js.map

//# sourceMappingURL=__popupEvents.js.map

//# sourceMappingURL=__popupEvents.js.map

//# sourceMappingURL=__popupEvents.js.map

//# sourceMappingURL=__popupEvents.js.map

//# sourceMappingURL=__popupEvents.js.map

//# sourceMappingURL=__popupEvents.js.map

//# sourceMappingURL=__popupEvents.js.map

//# sourceMappingURL=__popupEvents.js.map

//# sourceMappingURL=__popupEvents.js.map

//# sourceMappingURL=__popupEvents.js.map

//# sourceMappingURL=__popupEvents.js.map

//# sourceMappingURL=__popupEvents.js.map

//# sourceMappingURL=__popupEvents.js.map

//# sourceMappingURL=__popupEvents.js.map

//# sourceMappingURL=__popupEvents.js.map

//# sourceMappingURL=__popupEvents.js.map

//# sourceMappingURL=__popupEvents.js.map

//# sourceMappingURL=__popupEvents.js.map

//# sourceMappingURL=__popupEvents.js.map

//# sourceMappingURL=__popupEvents.js.map

//# sourceMappingURL=__popupEvents.js.map

//# sourceMappingURL=__popupEvents.js.map

//# sourceMappingURL=__popupEvents.js.map

//# sourceMappingURL=__popupEvents.js.map

//# sourceMappingURL=__popupEvents.js.map

//# sourceMappingURL=__popupEvents.js.map

//# sourceMappingURL=__popupEvents.js.map

//# sourceMappingURL=__popupEvents.js.map

//# sourceMappingURL=__popupEvents.js.map

//# sourceMappingURL=__popupEvents.js.map

//# sourceMappingURL=__popupEvents.js.map

//# sourceMappingURL=__popupEvents.js.map

//# sourceMappingURL=__popupEvents.js.map

//# sourceMappingURL=__popupEvents.js.map

//# sourceMappingURL=__popupEvents.js.map

//# sourceMappingURL=__popupEvents.js.map

//# sourceMappingURL=__popupEvents.js.map

//# sourceMappingURL=__popupEvents.js.map

//# sourceMappingURL=__popupEvents.js.map

//# sourceMappingURL=__popupEvents.js.map

//# sourceMappingURL=__popupEvents.js.map

//# sourceMappingURL=__popupEvents.js.map

//# sourceMappingURL=__popupEvents.js.map

//# sourceMappingURL=__popupEvents.js.map

//# sourceMappingURL=__popupEvents.js.map

//# sourceMappingURL=__popupEvents.js.map

//# sourceMappingURL=__popupEvents.js.map

//# sourceMappingURL=__popupEvents.js.map

//# sourceMappingURL=__popupEvents.js.map

//# sourceMappingURL=__popupEvents.js.map

//# sourceMappingURL=__popupEvents.js.map

//# sourceMappingURL=__popupEvents.js.map

//# sourceMappingURL=__popupEvents.js.map

//# sourceMappingURL=__popupEvents.js.map

//# sourceMappingURL=__popupEvents.js.map

//# sourceMappingURL=__popupEvents.js.map

//# sourceMappingURL=__popupEvents.js.map

//# sourceMappingURL=__popupEvents.js.map

//# sourceMappingURL=__popupEvents.js.map

//# sourceMappingURL=__popupEvents.js.map

//# sourceMappingURL=__popupEvents.js.map

//# sourceMappingURL=__popupEvents.js.map

//# sourceMappingURL=__popupEvents.js.map

//# sourceMappingURL=__popupEvents.js.map

//# sourceMappingURL=__popupEvents.js.map

//# sourceMappingURL=__popupEvents.js.map

//# sourceMappingURL=__popupEvents.js.map

//# sourceMappingURL=__popupEvents.js.map

//# sourceMappingURL=__popupEvents.js.map

//# sourceMappingURL=__popupEvents.js.map

//# sourceMappingURL=__popupEvents.js.map

//# sourceMappingURL=__popupEvents.js.map

//# sourceMappingURL=__popupEvents.js.map

//# sourceMappingURL=__popupEvents.js.map

//# sourceMappingURL=__popupEvents.js.map

//# sourceMappingURL=__popupEvents.js.map

//# sourceMappingURL=__popupEvents.js.map

//# sourceMappingURL=__popupEvents.js.map

//# sourceMappingURL=__popupEvents.js.map

//# sourceMappingURL=__popupEvents.js.map

//# sourceMappingURL=__popupEvents.js.map

//# sourceMappingURL=__popupEvents.js.map

//# sourceMappingURL=__popupEvents.js.map

//# sourceMappingURL=__popupEvents.js.map

//# sourceMappingURL=__popupEvents.js.map

//# sourceMappingURL=__popupEvents.js.map

//# sourceMappingURL=__popupEvents.js.map

//# sourceMappingURL=__popupEvents.js.map

//# sourceMappingURL=__popupEvents.js.map

//# sourceMappingURL=__popupEvents.js.map

//# sourceMappingURL=__popupEvents.js.map

//# sourceMappingURL=__popupEvents.js.map

//# sourceMappingURL=__popupEvents.js.map

//# sourceMappingURL=__popupEvents.js.map

//# sourceMappingURL=__popupEvents.js.map

//# sourceMappingURL=__popupEvents.js.map

//# sourceMappingURL=__popupEvents.js.map

//# sourceMappingURL=__popupEvents.js.map

//# sourceMappingURL=__popupEvents.js.map

//# sourceMappingURL=__popupEvents.js.map

//# sourceMappingURL=__popupEvents.js.map

//# sourceMappingURL=__popupEvents.js.map

//# sourceMappingURL=__popupEvents.js.map

//# sourceMappingURL=__popupEvents.js.map

//# sourceMappingURL=__popupEvents.js.map

//# sourceMappingURL=__popupEvents.js.map

//# sourceMappingURL=__popupEvents.js.map

//# sourceMappingURL=__popupEvents.js.map

//# sourceMappingURL=__popupEvents.js.map

//# sourceMappingURL=__popupEvents.js.map

//# sourceMappingURL=__popupEvents.js.map

//# sourceMappingURL=__popupEvents.js.map

//# sourceMappingURL=__popupEvents.js.map

//# sourceMappingURL=__popupEvents.js.map

//# sourceMappingURL=__popupEvents.js.map

//# sourceMappingURL=__popupEvents.js.map

//# sourceMappingURL=__popupEvents.js.map

//# sourceMappingURL=__popupEvents.js.map

//# sourceMappingURL=__popupEvents.js.map

//# sourceMappingURL=__popupEvents.js.map

//# sourceMappingURL=__popupEvents.js.map

//# sourceMappingURL=__popupEvents.js.map

//# sourceMappingURL=__popupEvents.js.map

//# sourceMappingURL=__popupEvents.js.map

//# sourceMappingURL=__popupEvents.js.map

//# sourceMappingURL=__popupEvents.js.map

//# sourceMappingURL=__popupEvents.js.map

//# sourceMappingURL=__popupEvents.js.map

//# sourceMappingURL=__popupEvents.js.map

//# sourceMappingURL=__popupEvents.js.map

//# sourceMappingURL=__popupEvents.js.map

//# sourceMappingURL=__popupEvents.js.map

//# sourceMappingURL=__popupEvents.js.map

//# sourceMappingURL=__popupEvents.js.map

//# sourceMappingURL=__popupEvents.js.map

//# sourceMappingURL=__popupEvents.js.map

//# sourceMappingURL=__popupEvents.js.map

//# sourceMappingURL=__popupEvents.js.map

//# sourceMappingURL=__popupEvents.js.map

//# sourceMappingURL=__popupEvents.js.map

//# sourceMappingURL=__popupEvents.js.map

//# sourceMappingURL=__popupEvents.js.map

//# sourceMappingURL=__popupEvents.js.map

//# sourceMappingURL=__popupEvents.js.map

//# sourceMappingURL=__popupEvents.js.map

//# sourceMappingURL=__popupEvents.js.map

//# sourceMappingURL=__popupEvents.js.map

//# sourceMappingURL=__popupEvents.js.map

//# sourceMappingURL=__popupEvents.js.map

//# sourceMappingURL=__popupEvents.js.map

//# sourceMappingURL=__popupEvents.js.map

//# sourceMappingURL=__popupEvents.js.map

//# sourceMappingURL=__popupEvents.js.map

//# sourceMappingURL=__popupEvents.js.map

//# sourceMappingURL=__popupEvents.js.map

//# sourceMappingURL=__popupEvents.js.map

//# sourceMappingURL=__popupEvents.js.map

//# sourceMappingURL=__popupEvents.js.map

//# sourceMappingURL=__popupEvents.js.map

//# sourceMappingURL=__popupEvents.js.map

//# sourceMappingURL=__popupEvents.js.map

//# sourceMappingURL=__popupEvents.js.map

//# sourceMappingURL=__popupEvents.js.map

//# sourceMappingURL=__popupEvents.js.map

//# sourceMappingURL=__popupEvents.js.map

//# sourceMappingURL=__popupEvents.js.map

//# sourceMappingURL=__popupEvents.js.map

//# sourceMappingURL=__popupEvents.js.map

//# sourceMappingURL=__popupEvents.js.map

//# sourceMappingURL=__popupEvents.js.map

//# sourceMappingURL=__popupEvents.js.map

//# sourceMappingURL=__popupEvents.js.map

//# sourceMappingURL=__popupEvents.js.map

//# sourceMappingURL=__popupEvents.js.map

//# sourceMappingURL=__popupEvents.js.map

//# sourceMappingURL=__popupEvents.js.map

//# sourceMappingURL=__popupEvents.js.map

//# sourceMappingURL=__popupEvents.js.map

//# sourceMappingURL=__popupEvents.js.map

//# sourceMappingURL=__popupEvents.js.map

//# sourceMappingURL=__popupEvents.js.map

//# sourceMappingURL=__popupEvents.js.map

//# sourceMappingURL=__popupEvents.js.map

//# sourceMappingURL=__popupEvents.js.map

//# sourceMappingURL=__popupEvents.js.map

//# sourceMappingURL=__popupEvents.js.map

//# sourceMappingURL=__popupEvents.js.map

//# sourceMappingURL=__popupEvents.js.map

//# sourceMappingURL=__popupEvents.js.map

//# sourceMappingURL=__popupEvents.js.map

//# sourceMappingURL=__popupEvents.js.map

//# sourceMappingURL=__popupEvents.js.map

//# sourceMappingURL=__popupEvents.js.map

//# sourceMappingURL=__popupEvents.js.map

//# sourceMappingURL=__popupEvents.js.map

//# sourceMappingURL=__popupEvents.js.map

//# sourceMappingURL=__popupEvents.js.map

//# sourceMappingURL=__popupEvents.js.map

//# sourceMappingURL=__popupEvents.js.map

//# sourceMappingURL=__popupEvents.js.map

//# sourceMappingURL=__popupEvents.js.map

//# sourceMappingURL=__popupEvents.js.map

//# sourceMappingURL=__popupEvents.js.map

//# sourceMappingURL=__popupEvents.js.map

//# sourceMappingURL=__popupEvents.js.map

//# sourceMappingURL=__popupEvents.js.map

//# sourceMappingURL=__popupEvents.js.map

//# sourceMappingURL=__popupEvents.js.map

//# sourceMappingURL=__popupEvents.js.map

//# sourceMappingURL=__popupEvents.js.map

//# sourceMappingURL=__popupEvents.js.map

//# sourceMappingURL=__popupEvents.js.map

//# sourceMappingURL=__popupEvents.js.map

//# sourceMappingURL=__popupEvents.js.map

//# sourceMappingURL=__popupEvents.js.map

//# sourceMappingURL=__popupEvents.js.map

//# sourceMappingURL=__popupEvents.js.map

//# sourceMappingURL=__popupEvents.js.map

//# sourceMappingURL=__popupEvents.js.map

//# sourceMappingURL=__popupEvents.js.map

//# sourceMappingURL=__popupEvents.js.map

//# sourceMappingURL=__popupEvents.js.map

//# sourceMappingURL=__popupEvents.js.map

//# sourceMappingURL=__popupEvents.js.map

//# sourceMappingURL=__popupEvents.js.map

//# sourceMappingURL=__popupEvents.js.map

//# sourceMappingURL=__popupEvents.js.map

//# sourceMappingURL=__popupEvents.js.map

//# sourceMappingURL=__popupEvents.js.map

//# sourceMappingURL=__popupEvents.js.map

//# sourceMappingURL=__popupEvents.js.map

//# sourceMappingURL=__popupEvents.js.map

//# sourceMappingURL=__popupEvents.js.map

//# sourceMappingURL=__popupEvents.js.map

//# sourceMappingURL=__popupEvents.js.map

//# sourceMappingURL=__popupEvents.js.map

//# sourceMappingURL=__popupEvents.js.map

//# sourceMappingURL=__popupEvents.js.map

//# sourceMappingURL=__popupEvents.js.map

//# sourceMappingURL=__popupEvents.js.map

//# sourceMappingURL=__popupEvents.js.map

//# sourceMappingURL=__popupEvents.js.map

//# sourceMappingURL=__popupEvents.js.map

//# sourceMappingURL=__popupEvents.js.map

//# sourceMappingURL=__popupEvents.js.map

//# sourceMappingURL=__popupEvents.js.map

//# sourceMappingURL=__popupEvents.js.map

//# sourceMappingURL=__popupEvents.js.map

//# sourceMappingURL=__popupEvents.js.map

//# sourceMappingURL=__popupEvents.js.map

//# sourceMappingURL=__popupEvents.js.map

//# sourceMappingURL=__popupEvents.js.map

//# sourceMappingURL=__popupEvents.js.map

//# sourceMappingURL=__popupEvents.js.map

//# sourceMappingURL=__popupEvents.js.map

//# sourceMappingURL=__popupEvents.js.map

//# sourceMappingURL=__popupEvents.js.map

//# sourceMappingURL=__popupEvents.js.map

//# sourceMappingURL=__popupEvents.js.map

//# sourceMappingURL=__popupEvents.js.map

//# sourceMappingURL=__popupEvents.js.map

//# sourceMappingURL=__popupEvents.js.map

//# sourceMappingURL=__popupEvents.js.map

//# sourceMappingURL=__popupEvents.js.map

//# sourceMappingURL=__popupEvents.js.map

//# sourceMappingURL=__popupEvents.js.map

//# sourceMappingURL=__popupEvents.js.map

//# sourceMappingURL=__popupEvents.js.map

//# sourceMappingURL=__popupEvents.js.map

//# sourceMappingURL=__popupEvents.js.map

//# sourceMappingURL=__popupEvents.js.map

//# sourceMappingURL=__popupEvents.js.map

//# sourceMappingURL=__popupEvents.js.map

//# sourceMappingURL=__popupEvents.js.map

//# sourceMappingURL=__popupEvents.js.map

//# sourceMappingURL=__popupEvents.js.map

//# sourceMappingURL=__popupEvents.js.map

//# sourceMappingURL=__popupEvents.js.map

//# sourceMappingURL=__popupEvents.js.map

//# sourceMappingURL=__popupEvents.js.map

//# sourceMappingURL=__popupEvents.js.map

//# sourceMappingURL=__popupEvents.js.map

//# sourceMappingURL=__popupEvents.js.map

//# sourceMappingURL=__popupEvents.js.map

//# sourceMappingURL=__popupEvents.js.map

//# sourceMappingURL=__popupEvents.js.map

//# sourceMappingURL=__popupEvents.js.map

//# sourceMappingURL=__popupEvents.js.map

//# sourceMappingURL=__popupEvents.js.map

//# sourceMappingURL=__popupEvents.js.map

//# sourceMappingURL=__popupEvents.js.map

//# sourceMappingURL=__popupEvents.js.map

//# sourceMappingURL=__popupEvents.js.map

//# sourceMappingURL=__popupEvents.js.map

//# sourceMappingURL=__popupEvents.js.map

//# sourceMappingURL=__popupEvents.js.map

//# sourceMappingURL=__popupEvents.js.map

//# sourceMappingURL=__popupEvents.js.map

//# sourceMappingURL=__popupEvents.js.map

//# sourceMappingURL=__popupEvents.js.map

//# sourceMappingURL=__popupEvents.js.map

//# sourceMappingURL=__popupEvents.js.map

//# sourceMappingURL=__popupEvents.js.map

//# sourceMappingURL=__popupEvents.js.map

//# sourceMappingURL=__popupEvents.js.map

//# sourceMappingURL=__popupEvents.js.map

//# sourceMappingURL=__popupEvents.js.map

//# sourceMappingURL=__popupEvents.js.map

//# sourceMappingURL=__popupEvents.js.map

//# sourceMappingURL=__popupEvents.js.map

//# sourceMappingURL=__popupEvents.js.map

//# sourceMappingURL=__popupEvents.js.map

//# sourceMappingURL=__popupEvents.js.map
