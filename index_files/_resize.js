"use strict";define("js/ulib/crop/usercrop/_resize",["jquery","U","_","popover","text!html/crop/usercrop/_resize.html"],function(e,t,i,o,s){var n=function(e){return function(){if(this.opts.showTootlip){for(var t=arguments.length,i=new Array(t),o=0;t>o;o++)i[o]=arguments[o];e.apply(this,i)}}};return{stickSize:7,add:function(e){var t=this;this.opts=e,this._addResizable(),this._addResizePopover(),this.me.events.on("resizeAttach._zoom",function(){t._addResizable(),t._addResizePopover()}).on("resizeDetach._zoom",function(){t._removeResizePopover(),t._removeResizable()}).on("disableControl._zoom",function(){t.remove()})},position:function(){var i=this.me.elOffsets,o=e("#body").get(0).getBoundingClientRect(),s=this.me.$el.get(0).getBoundingClientRect(),n={desktop:i.left,tablet:s.left-o.left,phone:s.left-o.left};this.$fakeResize.css({width:this.me.$el.width(),height:this.me.$el.height(),top:i.top+this.me.scroll,left:n[t.constructor.deviceMode.device]||n.desktop,position:"absolute"})},remove:function(){this._removeResizable(),this._removeResizePopover(),this.me.events.off("._zoom")},_removeResizable:function(){this.me.$el.hasClass("ui-resizable")&&this.me.$el.resizable("destroy"),this.$fakeResize.remove()},_addResizable:function(){var t=this;this.$fakeResize=e(i.template(s,{})).appendTo(this.me.$root),this.position();var o=document.querySelector(".js-main"),n=this.me.$el,r=n.get(0);this.$fakeResize.resizableBootstrap({handles:{s:"#ul-crop-fake-custom-handler"},minHeight:20,alsoResize:n,start:function(){t._showResizePopover(),t.me.events.dispatch("resizeStart")},resize:function(e,i){var s=i.size,h=t._getAlignCoords(),a=r.getBoundingClientRect().top;if(t._updateResizePopover(),h.stickCoords){var c=h.cur-n.height();n.css("height",h.stickCoords-c),h.$stickTo.addClass("lightBottom"),setTimeout(function(){h.$stickTo.removeClass("lightBottom")},500)}n.css("width",""),t.me._position(),t.me._proxy("_setParams",n),t.me.events.dispatch("resizing",{$target:n,height:s.height});var l=r.getBoundingClientRect().top;o.scrollTop-=a-l},stop:function(e,i){var o=i.size;t._hideResizePopover(),t.me.events.dispatch("resizeStop",{$target:n,height:o.height})}})},_getAlignCoords:function(){var t=this,i={cur:this.me.$el.offset().top+this.me.$el.height()+this.me.scroll,$stickTo:null,stickCoords:0};return this.me.$el.closest(".ul-row").find(".ul-widget").each(function(o,s){var n=e(s);if(!n.find(t.me.$el).length){var r=n.offset().top+n.height()+t.me.scroll;Math.abs(i.cur-r)<t.stickSize&&(i.$stickTo=n,i.stickCoords=r)}}),i},_addResizePopover:n(function(){this.heightPopover=new o({gravity:["top"],animation:!1,html:'<p class="simple-text js-resize-text"></p>',$target:this.$fakeResize.find(".icon-content-special-resize"),templateData:{},onAfterOpen:function(){},onBeforeClose:function(){}})}),_removeResizePopover:n(function(){this.heightPopover&&(this.heightPopover.detach(),delete this.heightPopover)}),_showResizePopover:n(function(){this.heightPopover.show()}),_updateResizePopover:n(function(){var e=this;requestAnimationFrame(function(){var t="";if("%"===e.opts.units){var i=Math.round(e.me.$el.innerHeight()/e.me.$el.innerWidth()*100);t="".concat(i,"% ширины")}else"px"===e.opts.units&&(t="".concat(e.me.$el.innerHeight(),"px"));e.heightPopover.html('<p class="simple-text js-resize-text">'.concat(t,"</p>"))})}),_hideResizePopover:n(function(){this.heightPopover.hide()})}});
//# sourceMappingURL=_resize.js.map

//# sourceMappingURL=_resize.js.map

//# sourceMappingURL=_resize.js.map

//# sourceMappingURL=_resize.js.map

//# sourceMappingURL=_resize.js.map

//# sourceMappingURL=_resize.js.map

//# sourceMappingURL=_resize.js.map

//# sourceMappingURL=_resize.js.map

//# sourceMappingURL=_resize.js.map

//# sourceMappingURL=_resize.js.map

//# sourceMappingURL=_resize.js.map

//# sourceMappingURL=_resize.js.map

//# sourceMappingURL=_resize.js.map

//# sourceMappingURL=_resize.js.map

//# sourceMappingURL=_resize.js.map

//# sourceMappingURL=_resize.js.map

//# sourceMappingURL=_resize.js.map

//# sourceMappingURL=_resize.js.map

//# sourceMappingURL=_resize.js.map

//# sourceMappingURL=_resize.js.map

//# sourceMappingURL=_resize.js.map

//# sourceMappingURL=_resize.js.map

//# sourceMappingURL=_resize.js.map

//# sourceMappingURL=_resize.js.map

//# sourceMappingURL=_resize.js.map

//# sourceMappingURL=_resize.js.map

//# sourceMappingURL=_resize.js.map

//# sourceMappingURL=_resize.js.map

//# sourceMappingURL=_resize.js.map

//# sourceMappingURL=_resize.js.map

//# sourceMappingURL=_resize.js.map

//# sourceMappingURL=_resize.js.map

//# sourceMappingURL=_resize.js.map

//# sourceMappingURL=_resize.js.map

//# sourceMappingURL=_resize.js.map

//# sourceMappingURL=_resize.js.map

//# sourceMappingURL=_resize.js.map

//# sourceMappingURL=_resize.js.map

//# sourceMappingURL=_resize.js.map

//# sourceMappingURL=_resize.js.map

//# sourceMappingURL=_resize.js.map

//# sourceMappingURL=_resize.js.map

//# sourceMappingURL=_resize.js.map

//# sourceMappingURL=_resize.js.map

//# sourceMappingURL=_resize.js.map

//# sourceMappingURL=_resize.js.map

//# sourceMappingURL=_resize.js.map

//# sourceMappingURL=_resize.js.map

//# sourceMappingURL=_resize.js.map

//# sourceMappingURL=_resize.js.map

//# sourceMappingURL=_resize.js.map

//# sourceMappingURL=_resize.js.map

//# sourceMappingURL=_resize.js.map

//# sourceMappingURL=_resize.js.map

//# sourceMappingURL=_resize.js.map

//# sourceMappingURL=_resize.js.map

//# sourceMappingURL=_resize.js.map

//# sourceMappingURL=_resize.js.map

//# sourceMappingURL=_resize.js.map

//# sourceMappingURL=_resize.js.map

//# sourceMappingURL=_resize.js.map

//# sourceMappingURL=_resize.js.map

//# sourceMappingURL=_resize.js.map

//# sourceMappingURL=_resize.js.map

//# sourceMappingURL=_resize.js.map

//# sourceMappingURL=_resize.js.map

//# sourceMappingURL=_resize.js.map

//# sourceMappingURL=_resize.js.map

//# sourceMappingURL=_resize.js.map

//# sourceMappingURL=_resize.js.map

//# sourceMappingURL=_resize.js.map

//# sourceMappingURL=_resize.js.map

//# sourceMappingURL=_resize.js.map

//# sourceMappingURL=_resize.js.map

//# sourceMappingURL=_resize.js.map

//# sourceMappingURL=_resize.js.map

//# sourceMappingURL=_resize.js.map

//# sourceMappingURL=_resize.js.map

//# sourceMappingURL=_resize.js.map

//# sourceMappingURL=_resize.js.map

//# sourceMappingURL=_resize.js.map

//# sourceMappingURL=_resize.js.map

//# sourceMappingURL=_resize.js.map

//# sourceMappingURL=_resize.js.map

//# sourceMappingURL=_resize.js.map

//# sourceMappingURL=_resize.js.map

//# sourceMappingURL=_resize.js.map

//# sourceMappingURL=_resize.js.map

//# sourceMappingURL=_resize.js.map

//# sourceMappingURL=_resize.js.map

//# sourceMappingURL=_resize.js.map

//# sourceMappingURL=_resize.js.map

//# sourceMappingURL=_resize.js.map

//# sourceMappingURL=_resize.js.map

//# sourceMappingURL=_resize.js.map

//# sourceMappingURL=_resize.js.map

//# sourceMappingURL=_resize.js.map

//# sourceMappingURL=_resize.js.map

//# sourceMappingURL=_resize.js.map

//# sourceMappingURL=_resize.js.map

//# sourceMappingURL=_resize.js.map

//# sourceMappingURL=_resize.js.map

//# sourceMappingURL=_resize.js.map

//# sourceMappingURL=_resize.js.map

//# sourceMappingURL=_resize.js.map

//# sourceMappingURL=_resize.js.map

//# sourceMappingURL=_resize.js.map

//# sourceMappingURL=_resize.js.map

//# sourceMappingURL=_resize.js.map

//# sourceMappingURL=_resize.js.map

//# sourceMappingURL=_resize.js.map

//# sourceMappingURL=_resize.js.map

//# sourceMappingURL=_resize.js.map

//# sourceMappingURL=_resize.js.map

//# sourceMappingURL=_resize.js.map

//# sourceMappingURL=_resize.js.map

//# sourceMappingURL=_resize.js.map

//# sourceMappingURL=_resize.js.map

//# sourceMappingURL=_resize.js.map

//# sourceMappingURL=_resize.js.map

//# sourceMappingURL=_resize.js.map

//# sourceMappingURL=_resize.js.map

//# sourceMappingURL=_resize.js.map

//# sourceMappingURL=_resize.js.map

//# sourceMappingURL=_resize.js.map

//# sourceMappingURL=_resize.js.map

//# sourceMappingURL=_resize.js.map

//# sourceMappingURL=_resize.js.map

//# sourceMappingURL=_resize.js.map

//# sourceMappingURL=_resize.js.map

//# sourceMappingURL=_resize.js.map

//# sourceMappingURL=_resize.js.map

//# sourceMappingURL=_resize.js.map

//# sourceMappingURL=_resize.js.map

//# sourceMappingURL=_resize.js.map

//# sourceMappingURL=_resize.js.map

//# sourceMappingURL=_resize.js.map

//# sourceMappingURL=_resize.js.map

//# sourceMappingURL=_resize.js.map

//# sourceMappingURL=_resize.js.map

//# sourceMappingURL=_resize.js.map

//# sourceMappingURL=_resize.js.map

//# sourceMappingURL=_resize.js.map

//# sourceMappingURL=_resize.js.map

//# sourceMappingURL=_resize.js.map

//# sourceMappingURL=_resize.js.map

//# sourceMappingURL=_resize.js.map

//# sourceMappingURL=_resize.js.map

//# sourceMappingURL=_resize.js.map

//# sourceMappingURL=_resize.js.map

//# sourceMappingURL=_resize.js.map

//# sourceMappingURL=_resize.js.map

//# sourceMappingURL=_resize.js.map

//# sourceMappingURL=_resize.js.map

//# sourceMappingURL=_resize.js.map

//# sourceMappingURL=_resize.js.map

//# sourceMappingURL=_resize.js.map

//# sourceMappingURL=_resize.js.map

//# sourceMappingURL=_resize.js.map

//# sourceMappingURL=_resize.js.map

//# sourceMappingURL=_resize.js.map

//# sourceMappingURL=_resize.js.map

//# sourceMappingURL=_resize.js.map

//# sourceMappingURL=_resize.js.map

//# sourceMappingURL=_resize.js.map

//# sourceMappingURL=_resize.js.map

//# sourceMappingURL=_resize.js.map

//# sourceMappingURL=_resize.js.map

//# sourceMappingURL=_resize.js.map

//# sourceMappingURL=_resize.js.map

//# sourceMappingURL=_resize.js.map

//# sourceMappingURL=_resize.js.map

//# sourceMappingURL=_resize.js.map

//# sourceMappingURL=_resize.js.map

//# sourceMappingURL=_resize.js.map

//# sourceMappingURL=_resize.js.map

//# sourceMappingURL=_resize.js.map

//# sourceMappingURL=_resize.js.map

//# sourceMappingURL=_resize.js.map

//# sourceMappingURL=_resize.js.map

//# sourceMappingURL=_resize.js.map

//# sourceMappingURL=_resize.js.map

//# sourceMappingURL=_resize.js.map

//# sourceMappingURL=_resize.js.map

//# sourceMappingURL=_resize.js.map

//# sourceMappingURL=_resize.js.map

//# sourceMappingURL=_resize.js.map

//# sourceMappingURL=_resize.js.map

//# sourceMappingURL=_resize.js.map

//# sourceMappingURL=_resize.js.map

//# sourceMappingURL=_resize.js.map

//# sourceMappingURL=_resize.js.map

//# sourceMappingURL=_resize.js.map

//# sourceMappingURL=_resize.js.map

//# sourceMappingURL=_resize.js.map

//# sourceMappingURL=_resize.js.map

//# sourceMappingURL=_resize.js.map

//# sourceMappingURL=_resize.js.map

//# sourceMappingURL=_resize.js.map

//# sourceMappingURL=_resize.js.map

//# sourceMappingURL=_resize.js.map

//# sourceMappingURL=_resize.js.map

//# sourceMappingURL=_resize.js.map

//# sourceMappingURL=_resize.js.map

//# sourceMappingURL=_resize.js.map

//# sourceMappingURL=_resize.js.map

//# sourceMappingURL=_resize.js.map

//# sourceMappingURL=_resize.js.map

//# sourceMappingURL=_resize.js.map

//# sourceMappingURL=_resize.js.map

//# sourceMappingURL=_resize.js.map

//# sourceMappingURL=_resize.js.map

//# sourceMappingURL=_resize.js.map

//# sourceMappingURL=_resize.js.map

//# sourceMappingURL=_resize.js.map

//# sourceMappingURL=_resize.js.map

//# sourceMappingURL=_resize.js.map

//# sourceMappingURL=_resize.js.map

//# sourceMappingURL=_resize.js.map

//# sourceMappingURL=_resize.js.map

//# sourceMappingURL=_resize.js.map

//# sourceMappingURL=_resize.js.map

//# sourceMappingURL=_resize.js.map

//# sourceMappingURL=_resize.js.map

//# sourceMappingURL=_resize.js.map

//# sourceMappingURL=_resize.js.map

//# sourceMappingURL=_resize.js.map

//# sourceMappingURL=_resize.js.map

//# sourceMappingURL=_resize.js.map

//# sourceMappingURL=_resize.js.map

//# sourceMappingURL=_resize.js.map

//# sourceMappingURL=_resize.js.map

//# sourceMappingURL=_resize.js.map

//# sourceMappingURL=_resize.js.map

//# sourceMappingURL=_resize.js.map

//# sourceMappingURL=_resize.js.map

//# sourceMappingURL=_resize.js.map

//# sourceMappingURL=_resize.js.map

//# sourceMappingURL=_resize.js.map

//# sourceMappingURL=_resize.js.map

//# sourceMappingURL=_resize.js.map

//# sourceMappingURL=_resize.js.map

//# sourceMappingURL=_resize.js.map

//# sourceMappingURL=_resize.js.map

//# sourceMappingURL=_resize.js.map

//# sourceMappingURL=_resize.js.map

//# sourceMappingURL=_resize.js.map

//# sourceMappingURL=_resize.js.map

//# sourceMappingURL=_resize.js.map

//# sourceMappingURL=_resize.js.map

//# sourceMappingURL=_resize.js.map

//# sourceMappingURL=_resize.js.map

//# sourceMappingURL=_resize.js.map

//# sourceMappingURL=_resize.js.map

//# sourceMappingURL=_resize.js.map

//# sourceMappingURL=_resize.js.map

//# sourceMappingURL=_resize.js.map

//# sourceMappingURL=_resize.js.map

//# sourceMappingURL=_resize.js.map

//# sourceMappingURL=_resize.js.map

//# sourceMappingURL=_resize.js.map

//# sourceMappingURL=_resize.js.map

//# sourceMappingURL=_resize.js.map

//# sourceMappingURL=_resize.js.map

//# sourceMappingURL=_resize.js.map

//# sourceMappingURL=_resize.js.map

//# sourceMappingURL=_resize.js.map

//# sourceMappingURL=_resize.js.map

//# sourceMappingURL=_resize.js.map

//# sourceMappingURL=_resize.js.map

//# sourceMappingURL=_resize.js.map

//# sourceMappingURL=_resize.js.map

//# sourceMappingURL=_resize.js.map

//# sourceMappingURL=_resize.js.map

//# sourceMappingURL=_resize.js.map

//# sourceMappingURL=_resize.js.map

//# sourceMappingURL=_resize.js.map

//# sourceMappingURL=_resize.js.map

//# sourceMappingURL=_resize.js.map

//# sourceMappingURL=_resize.js.map

//# sourceMappingURL=_resize.js.map

//# sourceMappingURL=_resize.js.map

//# sourceMappingURL=_resize.js.map

//# sourceMappingURL=_resize.js.map

//# sourceMappingURL=_resize.js.map

//# sourceMappingURL=_resize.js.map

//# sourceMappingURL=_resize.js.map

//# sourceMappingURL=_resize.js.map

//# sourceMappingURL=_resize.js.map

//# sourceMappingURL=_resize.js.map

//# sourceMappingURL=_resize.js.map

//# sourceMappingURL=_resize.js.map

//# sourceMappingURL=_resize.js.map

//# sourceMappingURL=_resize.js.map

//# sourceMappingURL=_resize.js.map

//# sourceMappingURL=_resize.js.map

//# sourceMappingURL=_resize.js.map

//# sourceMappingURL=_resize.js.map

//# sourceMappingURL=_resize.js.map

//# sourceMappingURL=_resize.js.map

//# sourceMappingURL=_resize.js.map

//# sourceMappingURL=_resize.js.map

//# sourceMappingURL=_resize.js.map
