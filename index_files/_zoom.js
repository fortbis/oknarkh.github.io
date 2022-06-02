"use strict";define("js/ulib/crop/usercrop/_zoom",["jquery","U","_","ul-framework","text!html/crop/usercrop/_zoom.html"],function(t,e,o,i,n){return{_posType:0,maxImgValue:1.2,buttonStepUp:1.05,buttonStepDown:.95,diffError:20,add:function(){var e=this._getRangeVals();this.$rangeContainer=t(o.template(n,{val:e.val,min:e.min,max:e.max,step:1,dotted:!1,valTitle:"",accurate:!1,title:"",designWhite:!0,showVal:!1})).appendTo(this.me.$root),this.$range=t(".ul-range-vertical",this.$rangeContainer),i.rangeVertical.init(),this.position(),this._addEvents()},remove:function(){this.$rangeContainer.off(".usercrop").remove(),this.me.events.off("._zoom")},position:function(){var o=this.me.elOffsets,i=o.left+this.me.$el.width(),n=o.top+this.me.$el.height()/2+this.me.scroll-this.$rangeContainer.height()/2;t(".ul-crop-zoom-sub",this.$rangeContainer).hide(),this._posType=1,o.left+this.me.$el.width()+this.$rangeContainer.outerWidth(!0)>this.me.$root.width()&&(t(".ul-crop-zoom-sub",this.$rangeContainer).show(),i-=this.$rangeContainer.outerWidth(!0),this._posType=2,this.me.$root.width()-this.me.$el.width()-this.$rangeContainer.outerWidth(!0)>this.$rangeContainer.outerWidth(!0)&&(t(".ul-crop-zoom-sub",this.$rangeContainer).hide(),this._posType=3,i=o.left-this.$rangeContainer.outerWidth(!0))),n<o.top+this.me.scroll&&(n=o.top+this.me.scroll);var a=t("#body").get(0).getBoundingClientRect(),r=this.me.$el.get(0).getBoundingClientRect(),s={desktop:i,tablet:r.left-a.left+this.me.$el.outerWidth(!0),phone:r.left-a.left+this.me.$el.outerWidth(!0)};this.$rangeContainer.css({top:n,left:s[e.constructor.deviceMode.device]||s.desktop})},positionImmediate:function(){this.position()},_update:function(t){var e=this._getRangeVals();e.val=t?Math.round(e.val*=t):e.val,i.rangeVertical.customUpdate?i.rangeVertical.customUpdate(this.$range,e):(this.remove(),this.add())},_addEvents:function(){var e=this;e.$rangeContainer.on("changeImmediate.usercrop",function(t,o){var i=e.me.$img.width();e.me.$img.css("min-width",o.val-1),e.me.$img.css("max-width",o.val+1),e.me._position(null,i),e.me.events.dispatch("zooming")}).on("change.usercrop",function(){e.me._proxy("_setParams",e.me.$el),e.me.events.dispatch("zoomStop")}).on("click.usercrop",".js-btn-zoom",function(){var o=t(this).attr("data-action"),i={minus:function(){return e.buttonStepDown},plus:function(){return e.buttonStepUp}};i[o]&&(e._update(i[o]()),e.me.events.dispatch("zoomBtn",i[o]()))}),e.me.events.on("update._zoom",function(){var t=Math.abs(e.me.$img.height()-e.me.$el.height()),o=Math.abs(e.me.$img.width()-e.me.$el.width());t<=e.diffError&&o<=e.diffError&&e._update(e.buttonStepUp)}).on("resizing._zoom",function(){e._update()}).on("zoomDetach._zoom",function(){e.$rangeContainer.hide()}).on("zoomAttach._zoom",function(){e.$rangeContainer.show()}).on("disableControl._zoom",function(){e.remove()})},_getRangeVals:function(){var t=this.me.$el.width(),e=this.me.$el.height();if(this.me.context.opt.zoom.restrictCover)var o=Math.max(t,e/this.me.aspectRatio);else var o=e/this.me.aspectRatio;var i=this.me.$img.width(),n=Math.max(i,Math.max(o,this.me.$img.get(0).naturalWidth,t)*this.maxImgValue);return{min:Math.floor(o),max:Math.floor(n),val:Math.floor(i)}}}});
//# sourceMappingURL=_zoom.js.map

//# sourceMappingURL=_zoom.js.map

//# sourceMappingURL=_zoom.js.map

//# sourceMappingURL=_zoom.js.map

//# sourceMappingURL=_zoom.js.map

//# sourceMappingURL=_zoom.js.map

//# sourceMappingURL=_zoom.js.map

//# sourceMappingURL=_zoom.js.map

//# sourceMappingURL=_zoom.js.map

//# sourceMappingURL=_zoom.js.map

//# sourceMappingURL=_zoom.js.map

//# sourceMappingURL=_zoom.js.map

//# sourceMappingURL=_zoom.js.map

//# sourceMappingURL=_zoom.js.map

//# sourceMappingURL=_zoom.js.map

//# sourceMappingURL=_zoom.js.map

//# sourceMappingURL=_zoom.js.map

//# sourceMappingURL=_zoom.js.map

//# sourceMappingURL=_zoom.js.map

//# sourceMappingURL=_zoom.js.map

//# sourceMappingURL=_zoom.js.map

//# sourceMappingURL=_zoom.js.map

//# sourceMappingURL=_zoom.js.map

//# sourceMappingURL=_zoom.js.map

//# sourceMappingURL=_zoom.js.map

//# sourceMappingURL=_zoom.js.map

//# sourceMappingURL=_zoom.js.map

//# sourceMappingURL=_zoom.js.map

//# sourceMappingURL=_zoom.js.map

//# sourceMappingURL=_zoom.js.map

//# sourceMappingURL=_zoom.js.map

//# sourceMappingURL=_zoom.js.map

//# sourceMappingURL=_zoom.js.map

//# sourceMappingURL=_zoom.js.map

//# sourceMappingURL=_zoom.js.map

//# sourceMappingURL=_zoom.js.map

//# sourceMappingURL=_zoom.js.map

//# sourceMappingURL=_zoom.js.map

//# sourceMappingURL=_zoom.js.map

//# sourceMappingURL=_zoom.js.map

//# sourceMappingURL=_zoom.js.map

//# sourceMappingURL=_zoom.js.map

//# sourceMappingURL=_zoom.js.map

//# sourceMappingURL=_zoom.js.map

//# sourceMappingURL=_zoom.js.map

//# sourceMappingURL=_zoom.js.map

//# sourceMappingURL=_zoom.js.map

//# sourceMappingURL=_zoom.js.map

//# sourceMappingURL=_zoom.js.map

//# sourceMappingURL=_zoom.js.map

//# sourceMappingURL=_zoom.js.map

//# sourceMappingURL=_zoom.js.map

//# sourceMappingURL=_zoom.js.map

//# sourceMappingURL=_zoom.js.map

//# sourceMappingURL=_zoom.js.map

//# sourceMappingURL=_zoom.js.map

//# sourceMappingURL=_zoom.js.map

//# sourceMappingURL=_zoom.js.map

//# sourceMappingURL=_zoom.js.map

//# sourceMappingURL=_zoom.js.map

//# sourceMappingURL=_zoom.js.map

//# sourceMappingURL=_zoom.js.map

//# sourceMappingURL=_zoom.js.map

//# sourceMappingURL=_zoom.js.map

//# sourceMappingURL=_zoom.js.map

//# sourceMappingURL=_zoom.js.map

//# sourceMappingURL=_zoom.js.map

//# sourceMappingURL=_zoom.js.map

//# sourceMappingURL=_zoom.js.map

//# sourceMappingURL=_zoom.js.map

//# sourceMappingURL=_zoom.js.map

//# sourceMappingURL=_zoom.js.map

//# sourceMappingURL=_zoom.js.map

//# sourceMappingURL=_zoom.js.map

//# sourceMappingURL=_zoom.js.map

//# sourceMappingURL=_zoom.js.map

//# sourceMappingURL=_zoom.js.map

//# sourceMappingURL=_zoom.js.map

//# sourceMappingURL=_zoom.js.map

//# sourceMappingURL=_zoom.js.map

//# sourceMappingURL=_zoom.js.map

//# sourceMappingURL=_zoom.js.map

//# sourceMappingURL=_zoom.js.map

//# sourceMappingURL=_zoom.js.map

//# sourceMappingURL=_zoom.js.map

//# sourceMappingURL=_zoom.js.map

//# sourceMappingURL=_zoom.js.map

//# sourceMappingURL=_zoom.js.map

//# sourceMappingURL=_zoom.js.map

//# sourceMappingURL=_zoom.js.map

//# sourceMappingURL=_zoom.js.map

//# sourceMappingURL=_zoom.js.map

//# sourceMappingURL=_zoom.js.map

//# sourceMappingURL=_zoom.js.map

//# sourceMappingURL=_zoom.js.map

//# sourceMappingURL=_zoom.js.map

//# sourceMappingURL=_zoom.js.map

//# sourceMappingURL=_zoom.js.map

//# sourceMappingURL=_zoom.js.map

//# sourceMappingURL=_zoom.js.map

//# sourceMappingURL=_zoom.js.map

//# sourceMappingURL=_zoom.js.map

//# sourceMappingURL=_zoom.js.map

//# sourceMappingURL=_zoom.js.map

//# sourceMappingURL=_zoom.js.map

//# sourceMappingURL=_zoom.js.map

//# sourceMappingURL=_zoom.js.map

//# sourceMappingURL=_zoom.js.map

//# sourceMappingURL=_zoom.js.map

//# sourceMappingURL=_zoom.js.map

//# sourceMappingURL=_zoom.js.map

//# sourceMappingURL=_zoom.js.map

//# sourceMappingURL=_zoom.js.map

//# sourceMappingURL=_zoom.js.map

//# sourceMappingURL=_zoom.js.map

//# sourceMappingURL=_zoom.js.map

//# sourceMappingURL=_zoom.js.map

//# sourceMappingURL=_zoom.js.map

//# sourceMappingURL=_zoom.js.map

//# sourceMappingURL=_zoom.js.map

//# sourceMappingURL=_zoom.js.map

//# sourceMappingURL=_zoom.js.map

//# sourceMappingURL=_zoom.js.map

//# sourceMappingURL=_zoom.js.map

//# sourceMappingURL=_zoom.js.map

//# sourceMappingURL=_zoom.js.map

//# sourceMappingURL=_zoom.js.map

//# sourceMappingURL=_zoom.js.map

//# sourceMappingURL=_zoom.js.map

//# sourceMappingURL=_zoom.js.map

//# sourceMappingURL=_zoom.js.map

//# sourceMappingURL=_zoom.js.map

//# sourceMappingURL=_zoom.js.map

//# sourceMappingURL=_zoom.js.map

//# sourceMappingURL=_zoom.js.map

//# sourceMappingURL=_zoom.js.map

//# sourceMappingURL=_zoom.js.map

//# sourceMappingURL=_zoom.js.map

//# sourceMappingURL=_zoom.js.map

//# sourceMappingURL=_zoom.js.map

//# sourceMappingURL=_zoom.js.map

//# sourceMappingURL=_zoom.js.map

//# sourceMappingURL=_zoom.js.map

//# sourceMappingURL=_zoom.js.map

//# sourceMappingURL=_zoom.js.map

//# sourceMappingURL=_zoom.js.map

//# sourceMappingURL=_zoom.js.map

//# sourceMappingURL=_zoom.js.map

//# sourceMappingURL=_zoom.js.map

//# sourceMappingURL=_zoom.js.map

//# sourceMappingURL=_zoom.js.map

//# sourceMappingURL=_zoom.js.map

//# sourceMappingURL=_zoom.js.map

//# sourceMappingURL=_zoom.js.map

//# sourceMappingURL=_zoom.js.map

//# sourceMappingURL=_zoom.js.map

//# sourceMappingURL=_zoom.js.map

//# sourceMappingURL=_zoom.js.map

//# sourceMappingURL=_zoom.js.map

//# sourceMappingURL=_zoom.js.map

//# sourceMappingURL=_zoom.js.map

//# sourceMappingURL=_zoom.js.map

//# sourceMappingURL=_zoom.js.map

//# sourceMappingURL=_zoom.js.map

//# sourceMappingURL=_zoom.js.map

//# sourceMappingURL=_zoom.js.map

//# sourceMappingURL=_zoom.js.map

//# sourceMappingURL=_zoom.js.map

//# sourceMappingURL=_zoom.js.map

//# sourceMappingURL=_zoom.js.map

//# sourceMappingURL=_zoom.js.map

//# sourceMappingURL=_zoom.js.map

//# sourceMappingURL=_zoom.js.map

//# sourceMappingURL=_zoom.js.map

//# sourceMappingURL=_zoom.js.map

//# sourceMappingURL=_zoom.js.map

//# sourceMappingURL=_zoom.js.map

//# sourceMappingURL=_zoom.js.map

//# sourceMappingURL=_zoom.js.map

//# sourceMappingURL=_zoom.js.map

//# sourceMappingURL=_zoom.js.map

//# sourceMappingURL=_zoom.js.map

//# sourceMappingURL=_zoom.js.map

//# sourceMappingURL=_zoom.js.map

//# sourceMappingURL=_zoom.js.map

//# sourceMappingURL=_zoom.js.map

//# sourceMappingURL=_zoom.js.map

//# sourceMappingURL=_zoom.js.map

//# sourceMappingURL=_zoom.js.map

//# sourceMappingURL=_zoom.js.map

//# sourceMappingURL=_zoom.js.map

//# sourceMappingURL=_zoom.js.map

//# sourceMappingURL=_zoom.js.map

//# sourceMappingURL=_zoom.js.map

//# sourceMappingURL=_zoom.js.map

//# sourceMappingURL=_zoom.js.map

//# sourceMappingURL=_zoom.js.map

//# sourceMappingURL=_zoom.js.map

//# sourceMappingURL=_zoom.js.map

//# sourceMappingURL=_zoom.js.map

//# sourceMappingURL=_zoom.js.map

//# sourceMappingURL=_zoom.js.map

//# sourceMappingURL=_zoom.js.map

//# sourceMappingURL=_zoom.js.map

//# sourceMappingURL=_zoom.js.map

//# sourceMappingURL=_zoom.js.map

//# sourceMappingURL=_zoom.js.map

//# sourceMappingURL=_zoom.js.map

//# sourceMappingURL=_zoom.js.map

//# sourceMappingURL=_zoom.js.map

//# sourceMappingURL=_zoom.js.map

//# sourceMappingURL=_zoom.js.map

//# sourceMappingURL=_zoom.js.map

//# sourceMappingURL=_zoom.js.map

//# sourceMappingURL=_zoom.js.map

//# sourceMappingURL=_zoom.js.map

//# sourceMappingURL=_zoom.js.map

//# sourceMappingURL=_zoom.js.map

//# sourceMappingURL=_zoom.js.map

//# sourceMappingURL=_zoom.js.map

//# sourceMappingURL=_zoom.js.map

//# sourceMappingURL=_zoom.js.map

//# sourceMappingURL=_zoom.js.map

//# sourceMappingURL=_zoom.js.map

//# sourceMappingURL=_zoom.js.map

//# sourceMappingURL=_zoom.js.map

//# sourceMappingURL=_zoom.js.map

//# sourceMappingURL=_zoom.js.map

//# sourceMappingURL=_zoom.js.map

//# sourceMappingURL=_zoom.js.map

//# sourceMappingURL=_zoom.js.map

//# sourceMappingURL=_zoom.js.map

//# sourceMappingURL=_zoom.js.map

//# sourceMappingURL=_zoom.js.map

//# sourceMappingURL=_zoom.js.map

//# sourceMappingURL=_zoom.js.map

//# sourceMappingURL=_zoom.js.map

//# sourceMappingURL=_zoom.js.map

//# sourceMappingURL=_zoom.js.map

//# sourceMappingURL=_zoom.js.map

//# sourceMappingURL=_zoom.js.map

//# sourceMappingURL=_zoom.js.map

//# sourceMappingURL=_zoom.js.map

//# sourceMappingURL=_zoom.js.map

//# sourceMappingURL=_zoom.js.map

//# sourceMappingURL=_zoom.js.map

//# sourceMappingURL=_zoom.js.map

//# sourceMappingURL=_zoom.js.map

//# sourceMappingURL=_zoom.js.map

//# sourceMappingURL=_zoom.js.map

//# sourceMappingURL=_zoom.js.map

//# sourceMappingURL=_zoom.js.map

//# sourceMappingURL=_zoom.js.map

//# sourceMappingURL=_zoom.js.map

//# sourceMappingURL=_zoom.js.map

//# sourceMappingURL=_zoom.js.map

//# sourceMappingURL=_zoom.js.map

//# sourceMappingURL=_zoom.js.map

//# sourceMappingURL=_zoom.js.map

//# sourceMappingURL=_zoom.js.map

//# sourceMappingURL=_zoom.js.map

//# sourceMappingURL=_zoom.js.map

//# sourceMappingURL=_zoom.js.map

//# sourceMappingURL=_zoom.js.map

//# sourceMappingURL=_zoom.js.map

//# sourceMappingURL=_zoom.js.map

//# sourceMappingURL=_zoom.js.map

//# sourceMappingURL=_zoom.js.map

//# sourceMappingURL=_zoom.js.map

//# sourceMappingURL=_zoom.js.map

//# sourceMappingURL=_zoom.js.map

//# sourceMappingURL=_zoom.js.map

//# sourceMappingURL=_zoom.js.map

//# sourceMappingURL=_zoom.js.map

//# sourceMappingURL=_zoom.js.map

//# sourceMappingURL=_zoom.js.map

//# sourceMappingURL=_zoom.js.map

//# sourceMappingURL=_zoom.js.map

//# sourceMappingURL=_zoom.js.map

//# sourceMappingURL=_zoom.js.map

//# sourceMappingURL=_zoom.js.map

//# sourceMappingURL=_zoom.js.map

//# sourceMappingURL=_zoom.js.map

//# sourceMappingURL=_zoom.js.map

//# sourceMappingURL=_zoom.js.map

//# sourceMappingURL=_zoom.js.map

//# sourceMappingURL=_zoom.js.map

//# sourceMappingURL=_zoom.js.map

//# sourceMappingURL=_zoom.js.map

//# sourceMappingURL=_zoom.js.map

//# sourceMappingURL=_zoom.js.map

//# sourceMappingURL=_zoom.js.map

//# sourceMappingURL=_zoom.js.map

//# sourceMappingURL=_zoom.js.map

//# sourceMappingURL=_zoom.js.map

//# sourceMappingURL=_zoom.js.map

//# sourceMappingURL=_zoom.js.map

//# sourceMappingURL=_zoom.js.map

//# sourceMappingURL=_zoom.js.map

//# sourceMappingURL=_zoom.js.map

//# sourceMappingURL=_zoom.js.map

//# sourceMappingURL=_zoom.js.map

//# sourceMappingURL=_zoom.js.map

//# sourceMappingURL=_zoom.js.map

//# sourceMappingURL=_zoom.js.map

//# sourceMappingURL=_zoom.js.map

//# sourceMappingURL=_zoom.js.map

//# sourceMappingURL=_zoom.js.map

//# sourceMappingURL=_zoom.js.map

//# sourceMappingURL=_zoom.js.map

//# sourceMappingURL=_zoom.js.map

//# sourceMappingURL=_zoom.js.map

//# sourceMappingURL=_zoom.js.map

//# sourceMappingURL=_zoom.js.map
