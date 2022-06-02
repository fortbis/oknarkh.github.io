"use strict";define("js/ulib/crop/usercrop/_overlay",["jquery"],function(e){var s=e("<div></div>");return s.css({display:"block",position:"absolute",top:0,left:0,width:"100%",height:"100%","z-index":1,"background-color":"transparent"}),{classes:{widgetClass:"ul-widget",croppingEl:"cropping",widgetNoShadow:"no-shadow",overlay:"ul-cropping-overlay",overlayImg:"ul-cropping-overlayImg"},$widgetOverlay:e(".ul-disabled-overlay"),$insideWidgetOverlay:s,add:function(s){var i=this;this.selector=s&&s.selector||null,this._addElementShadow(),this.me.$el.closest(".ul-widget").prepend(this.$insideWidgetOverlay),this.$widgetOverlay.hide(),this.$overlay=e('<div style="min-height: '.concat(e("#body-fict").height(),'px;"></div>')).addClass(this.classes.overlay),this.$overlayImg=e("<img>").addClass(this.classes.overlayImg).attr("src",this.me.src).hide(),this.me.$root.append(this.$overlay).append(this.$overlayImg),this._addEvents(),this.$overlayImg.one("load",function(s){e(s.currentTarget).show(),i.position()})},remove:function(){this._removeElementShadow(),this.$widgetOverlay.show(),this.$overlay.off("click._overlay").remove(),this.$insideWidgetOverlay.off("click._overlay").remove(),e(".js-main").off(".overlayEventsCrop"),this.$overlayImg.remove(),this.me.events.off("._overlay")},positionImmediate:function(){this.position()},position:function(){var e=this.me.imgOffsets;this.$overlayImg.css({height:e.height,top:e.top+this.me.scroll,left:e.left})},_addEvents:function(){var s=this;this.$overlay.on("click._overlay",function(){s.me.events.dispatch("overlayClick",s.$overlay)}),this.$insideWidgetOverlay.on("click._overlay",function(){s.me.events.dispatch("overlayClick",s.$insideWidgetOverlay)}),e(".js-main").on("click.overlayEventsCrop",function(i){e(i.target).hasClass("js-main")&&s.me.events.dispatch("overlayClick",s.$insideWidgetOverlay)}),this.me.events.on("overlayDetach._overlay",function(){s.$overlayImg.addClass("hiddenImg"),s._removeElementShadow()}).on("overlayAttach._overlay",function(){s.$overlayImg.removeClass("hiddenImg"),s._addElementShadow()}).on("disableControl._overlay",function(){s.$overlayImg.hide()})},_addElementShadow:function(){this.me.$el.closest(".".concat(this.classes.widgetClass)).addClass(this.classes.widgetNoShadow),this.selector?this.me.$el.closest(this.selector).addClass(this.classes.croppingEl):this.me.$el.addClass(this.classes.croppingEl)},_removeElementShadow:function(){this.me.$el.closest(".".concat(this.classes.widgetClass)).removeClass(this.classes.widgetNoShadow),this.selector?this.me.$el.closest(this.selector).removeClass(this.classes.croppingEl):this.me.$el.removeClass(this.classes.croppingEl)}}});
//# sourceMappingURL=_overlay.js.map

//# sourceMappingURL=_overlay.js.map

//# sourceMappingURL=_overlay.js.map

//# sourceMappingURL=_overlay.js.map

//# sourceMappingURL=_overlay.js.map

//# sourceMappingURL=_overlay.js.map

//# sourceMappingURL=_overlay.js.map

//# sourceMappingURL=_overlay.js.map

//# sourceMappingURL=_overlay.js.map

//# sourceMappingURL=_overlay.js.map

//# sourceMappingURL=_overlay.js.map

//# sourceMappingURL=_overlay.js.map

//# sourceMappingURL=_overlay.js.map

//# sourceMappingURL=_overlay.js.map

//# sourceMappingURL=_overlay.js.map

//# sourceMappingURL=_overlay.js.map

//# sourceMappingURL=_overlay.js.map

//# sourceMappingURL=_overlay.js.map

//# sourceMappingURL=_overlay.js.map

//# sourceMappingURL=_overlay.js.map

//# sourceMappingURL=_overlay.js.map

//# sourceMappingURL=_overlay.js.map

//# sourceMappingURL=_overlay.js.map

//# sourceMappingURL=_overlay.js.map

//# sourceMappingURL=_overlay.js.map

//# sourceMappingURL=_overlay.js.map

//# sourceMappingURL=_overlay.js.map

//# sourceMappingURL=_overlay.js.map

//# sourceMappingURL=_overlay.js.map

//# sourceMappingURL=_overlay.js.map

//# sourceMappingURL=_overlay.js.map

//# sourceMappingURL=_overlay.js.map

//# sourceMappingURL=_overlay.js.map

//# sourceMappingURL=_overlay.js.map

//# sourceMappingURL=_overlay.js.map

//# sourceMappingURL=_overlay.js.map

//# sourceMappingURL=_overlay.js.map

//# sourceMappingURL=_overlay.js.map

//# sourceMappingURL=_overlay.js.map

//# sourceMappingURL=_overlay.js.map

//# sourceMappingURL=_overlay.js.map

//# sourceMappingURL=_overlay.js.map

//# sourceMappingURL=_overlay.js.map

//# sourceMappingURL=_overlay.js.map

//# sourceMappingURL=_overlay.js.map

//# sourceMappingURL=_overlay.js.map

//# sourceMappingURL=_overlay.js.map

//# sourceMappingURL=_overlay.js.map

//# sourceMappingURL=_overlay.js.map

//# sourceMappingURL=_overlay.js.map

//# sourceMappingURL=_overlay.js.map

//# sourceMappingURL=_overlay.js.map

//# sourceMappingURL=_overlay.js.map

//# sourceMappingURL=_overlay.js.map

//# sourceMappingURL=_overlay.js.map

//# sourceMappingURL=_overlay.js.map

//# sourceMappingURL=_overlay.js.map

//# sourceMappingURL=_overlay.js.map

//# sourceMappingURL=_overlay.js.map

//# sourceMappingURL=_overlay.js.map

//# sourceMappingURL=_overlay.js.map

//# sourceMappingURL=_overlay.js.map

//# sourceMappingURL=_overlay.js.map

//# sourceMappingURL=_overlay.js.map

//# sourceMappingURL=_overlay.js.map

//# sourceMappingURL=_overlay.js.map

//# sourceMappingURL=_overlay.js.map

//# sourceMappingURL=_overlay.js.map

//# sourceMappingURL=_overlay.js.map

//# sourceMappingURL=_overlay.js.map

//# sourceMappingURL=_overlay.js.map

//# sourceMappingURL=_overlay.js.map

//# sourceMappingURL=_overlay.js.map

//# sourceMappingURL=_overlay.js.map

//# sourceMappingURL=_overlay.js.map

//# sourceMappingURL=_overlay.js.map

//# sourceMappingURL=_overlay.js.map

//# sourceMappingURL=_overlay.js.map

//# sourceMappingURL=_overlay.js.map

//# sourceMappingURL=_overlay.js.map

//# sourceMappingURL=_overlay.js.map

//# sourceMappingURL=_overlay.js.map

//# sourceMappingURL=_overlay.js.map

//# sourceMappingURL=_overlay.js.map

//# sourceMappingURL=_overlay.js.map

//# sourceMappingURL=_overlay.js.map

//# sourceMappingURL=_overlay.js.map

//# sourceMappingURL=_overlay.js.map

//# sourceMappingURL=_overlay.js.map

//# sourceMappingURL=_overlay.js.map

//# sourceMappingURL=_overlay.js.map

//# sourceMappingURL=_overlay.js.map

//# sourceMappingURL=_overlay.js.map

//# sourceMappingURL=_overlay.js.map

//# sourceMappingURL=_overlay.js.map

//# sourceMappingURL=_overlay.js.map

//# sourceMappingURL=_overlay.js.map

//# sourceMappingURL=_overlay.js.map

//# sourceMappingURL=_overlay.js.map

//# sourceMappingURL=_overlay.js.map

//# sourceMappingURL=_overlay.js.map

//# sourceMappingURL=_overlay.js.map

//# sourceMappingURL=_overlay.js.map

//# sourceMappingURL=_overlay.js.map

//# sourceMappingURL=_overlay.js.map

//# sourceMappingURL=_overlay.js.map

//# sourceMappingURL=_overlay.js.map

//# sourceMappingURL=_overlay.js.map

//# sourceMappingURL=_overlay.js.map

//# sourceMappingURL=_overlay.js.map

//# sourceMappingURL=_overlay.js.map

//# sourceMappingURL=_overlay.js.map

//# sourceMappingURL=_overlay.js.map

//# sourceMappingURL=_overlay.js.map

//# sourceMappingURL=_overlay.js.map

//# sourceMappingURL=_overlay.js.map

//# sourceMappingURL=_overlay.js.map

//# sourceMappingURL=_overlay.js.map

//# sourceMappingURL=_overlay.js.map

//# sourceMappingURL=_overlay.js.map

//# sourceMappingURL=_overlay.js.map

//# sourceMappingURL=_overlay.js.map

//# sourceMappingURL=_overlay.js.map

//# sourceMappingURL=_overlay.js.map

//# sourceMappingURL=_overlay.js.map

//# sourceMappingURL=_overlay.js.map

//# sourceMappingURL=_overlay.js.map

//# sourceMappingURL=_overlay.js.map

//# sourceMappingURL=_overlay.js.map

//# sourceMappingURL=_overlay.js.map

//# sourceMappingURL=_overlay.js.map

//# sourceMappingURL=_overlay.js.map

//# sourceMappingURL=_overlay.js.map

//# sourceMappingURL=_overlay.js.map

//# sourceMappingURL=_overlay.js.map

//# sourceMappingURL=_overlay.js.map

//# sourceMappingURL=_overlay.js.map

//# sourceMappingURL=_overlay.js.map

//# sourceMappingURL=_overlay.js.map

//# sourceMappingURL=_overlay.js.map

//# sourceMappingURL=_overlay.js.map

//# sourceMappingURL=_overlay.js.map

//# sourceMappingURL=_overlay.js.map

//# sourceMappingURL=_overlay.js.map

//# sourceMappingURL=_overlay.js.map

//# sourceMappingURL=_overlay.js.map

//# sourceMappingURL=_overlay.js.map

//# sourceMappingURL=_overlay.js.map

//# sourceMappingURL=_overlay.js.map

//# sourceMappingURL=_overlay.js.map

//# sourceMappingURL=_overlay.js.map

//# sourceMappingURL=_overlay.js.map

//# sourceMappingURL=_overlay.js.map

//# sourceMappingURL=_overlay.js.map

//# sourceMappingURL=_overlay.js.map

//# sourceMappingURL=_overlay.js.map

//# sourceMappingURL=_overlay.js.map

//# sourceMappingURL=_overlay.js.map

//# sourceMappingURL=_overlay.js.map

//# sourceMappingURL=_overlay.js.map

//# sourceMappingURL=_overlay.js.map

//# sourceMappingURL=_overlay.js.map

//# sourceMappingURL=_overlay.js.map

//# sourceMappingURL=_overlay.js.map

//# sourceMappingURL=_overlay.js.map

//# sourceMappingURL=_overlay.js.map

//# sourceMappingURL=_overlay.js.map

//# sourceMappingURL=_overlay.js.map

//# sourceMappingURL=_overlay.js.map

//# sourceMappingURL=_overlay.js.map

//# sourceMappingURL=_overlay.js.map

//# sourceMappingURL=_overlay.js.map

//# sourceMappingURL=_overlay.js.map

//# sourceMappingURL=_overlay.js.map

//# sourceMappingURL=_overlay.js.map

//# sourceMappingURL=_overlay.js.map

//# sourceMappingURL=_overlay.js.map

//# sourceMappingURL=_overlay.js.map

//# sourceMappingURL=_overlay.js.map

//# sourceMappingURL=_overlay.js.map

//# sourceMappingURL=_overlay.js.map

//# sourceMappingURL=_overlay.js.map

//# sourceMappingURL=_overlay.js.map

//# sourceMappingURL=_overlay.js.map

//# sourceMappingURL=_overlay.js.map

//# sourceMappingURL=_overlay.js.map

//# sourceMappingURL=_overlay.js.map

//# sourceMappingURL=_overlay.js.map

//# sourceMappingURL=_overlay.js.map

//# sourceMappingURL=_overlay.js.map

//# sourceMappingURL=_overlay.js.map

//# sourceMappingURL=_overlay.js.map

//# sourceMappingURL=_overlay.js.map

//# sourceMappingURL=_overlay.js.map

//# sourceMappingURL=_overlay.js.map

//# sourceMappingURL=_overlay.js.map

//# sourceMappingURL=_overlay.js.map

//# sourceMappingURL=_overlay.js.map

//# sourceMappingURL=_overlay.js.map

//# sourceMappingURL=_overlay.js.map

//# sourceMappingURL=_overlay.js.map

//# sourceMappingURL=_overlay.js.map

//# sourceMappingURL=_overlay.js.map

//# sourceMappingURL=_overlay.js.map

//# sourceMappingURL=_overlay.js.map

//# sourceMappingURL=_overlay.js.map

//# sourceMappingURL=_overlay.js.map

//# sourceMappingURL=_overlay.js.map

//# sourceMappingURL=_overlay.js.map

//# sourceMappingURL=_overlay.js.map

//# sourceMappingURL=_overlay.js.map

//# sourceMappingURL=_overlay.js.map

//# sourceMappingURL=_overlay.js.map

//# sourceMappingURL=_overlay.js.map

//# sourceMappingURL=_overlay.js.map

//# sourceMappingURL=_overlay.js.map

//# sourceMappingURL=_overlay.js.map

//# sourceMappingURL=_overlay.js.map

//# sourceMappingURL=_overlay.js.map

//# sourceMappingURL=_overlay.js.map

//# sourceMappingURL=_overlay.js.map

//# sourceMappingURL=_overlay.js.map

//# sourceMappingURL=_overlay.js.map

//# sourceMappingURL=_overlay.js.map

//# sourceMappingURL=_overlay.js.map

//# sourceMappingURL=_overlay.js.map

//# sourceMappingURL=_overlay.js.map

//# sourceMappingURL=_overlay.js.map

//# sourceMappingURL=_overlay.js.map

//# sourceMappingURL=_overlay.js.map

//# sourceMappingURL=_overlay.js.map

//# sourceMappingURL=_overlay.js.map

//# sourceMappingURL=_overlay.js.map

//# sourceMappingURL=_overlay.js.map

//# sourceMappingURL=_overlay.js.map

//# sourceMappingURL=_overlay.js.map

//# sourceMappingURL=_overlay.js.map

//# sourceMappingURL=_overlay.js.map

//# sourceMappingURL=_overlay.js.map

//# sourceMappingURL=_overlay.js.map

//# sourceMappingURL=_overlay.js.map

//# sourceMappingURL=_overlay.js.map

//# sourceMappingURL=_overlay.js.map

//# sourceMappingURL=_overlay.js.map

//# sourceMappingURL=_overlay.js.map

//# sourceMappingURL=_overlay.js.map

//# sourceMappingURL=_overlay.js.map

//# sourceMappingURL=_overlay.js.map

//# sourceMappingURL=_overlay.js.map

//# sourceMappingURL=_overlay.js.map

//# sourceMappingURL=_overlay.js.map

//# sourceMappingURL=_overlay.js.map

//# sourceMappingURL=_overlay.js.map

//# sourceMappingURL=_overlay.js.map

//# sourceMappingURL=_overlay.js.map

//# sourceMappingURL=_overlay.js.map

//# sourceMappingURL=_overlay.js.map

//# sourceMappingURL=_overlay.js.map

//# sourceMappingURL=_overlay.js.map

//# sourceMappingURL=_overlay.js.map

//# sourceMappingURL=_overlay.js.map

//# sourceMappingURL=_overlay.js.map

//# sourceMappingURL=_overlay.js.map

//# sourceMappingURL=_overlay.js.map

//# sourceMappingURL=_overlay.js.map

//# sourceMappingURL=_overlay.js.map

//# sourceMappingURL=_overlay.js.map

//# sourceMappingURL=_overlay.js.map

//# sourceMappingURL=_overlay.js.map

//# sourceMappingURL=_overlay.js.map

//# sourceMappingURL=_overlay.js.map

//# sourceMappingURL=_overlay.js.map

//# sourceMappingURL=_overlay.js.map

//# sourceMappingURL=_overlay.js.map

//# sourceMappingURL=_overlay.js.map

//# sourceMappingURL=_overlay.js.map

//# sourceMappingURL=_overlay.js.map

//# sourceMappingURL=_overlay.js.map

//# sourceMappingURL=_overlay.js.map

//# sourceMappingURL=_overlay.js.map

//# sourceMappingURL=_overlay.js.map

//# sourceMappingURL=_overlay.js.map

//# sourceMappingURL=_overlay.js.map

//# sourceMappingURL=_overlay.js.map

//# sourceMappingURL=_overlay.js.map

//# sourceMappingURL=_overlay.js.map

//# sourceMappingURL=_overlay.js.map

//# sourceMappingURL=_overlay.js.map

//# sourceMappingURL=_overlay.js.map

//# sourceMappingURL=_overlay.js.map

//# sourceMappingURL=_overlay.js.map

//# sourceMappingURL=_overlay.js.map

//# sourceMappingURL=_overlay.js.map

//# sourceMappingURL=_overlay.js.map

//# sourceMappingURL=_overlay.js.map

//# sourceMappingURL=_overlay.js.map

//# sourceMappingURL=_overlay.js.map

//# sourceMappingURL=_overlay.js.map

//# sourceMappingURL=_overlay.js.map

//# sourceMappingURL=_overlay.js.map

//# sourceMappingURL=_overlay.js.map

//# sourceMappingURL=_overlay.js.map

//# sourceMappingURL=_overlay.js.map

//# sourceMappingURL=_overlay.js.map

//# sourceMappingURL=_overlay.js.map

//# sourceMappingURL=_overlay.js.map

//# sourceMappingURL=_overlay.js.map

//# sourceMappingURL=_overlay.js.map

//# sourceMappingURL=_overlay.js.map

//# sourceMappingURL=_overlay.js.map

//# sourceMappingURL=_overlay.js.map

//# sourceMappingURL=_overlay.js.map

//# sourceMappingURL=_overlay.js.map

//# sourceMappingURL=_overlay.js.map
