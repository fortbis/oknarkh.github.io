"use strict";define("js/ulib/crop/usercrop/_buttons",["jquery","U","_","text!html/crop/usercrop/_buttons.html"],function(t,e,n,o){return{add:function(e){this.$buttons=t(n.template(o,t.extend({__:this.me.context.__},e))),this.me.$root.append(this.$buttons),this.$buttonUpload=this.$buttons.find(".js-upload"),this.$buttonTitle=this.$buttons.find(".js-title"),this.$buttonSeo=this.$buttons.find(".js-seo"),this.$buttonCut=this.$buttons.find(".js-cut"),this.$buttonLink=this.$buttons.find(".js-link"),this._addEvents(),this.position(),this.setActive()},position:function(){var n=this.me.elOffsets,o=this.me.$root.width()-this.$buttons.width(),s=t("#body").get(0).getBoundingClientRect(),i=this.me.$el.get(0).getBoundingClientRect(),u=this.me.$el.width()/2-this.$buttons.width()/2,l={desktop:n.left+u,tablet:i.left-s.left+u,phone:i.left-s.left+u},c={top:this.me.scroll,left:l[e.constructor.deviceMode.device]||l.desktop};n.top-this.$buttons.height()>0&&(c.top=n.top-this.$buttons.height()+this.me.scroll),this.me.$el.height()+n.top<0&&(c.top=n.top+this.me.scroll+this.me.$el.height()),c.left=c.left<0?0:c.left,c.left=c.left>o?o:c.left,c.top=Math.round(c.top),c.left=Math.round(c.left),this.$buttons.css(c)},remove:function(){this.$buttons.off("._buttons").remove(),this.me.$scrollRoot.off("._buttons"),this.me.events.off("._buttons")},setActive:function(){var t=this;this.me.context.opt.linkSettings.setData(function(e){e.click&&e.click.link&&t.$buttonLink.addClass("active")},this.me.$el)},_addEvents:function(){var e=this;this.$buttons.on("click._buttons",".js-action",function(n){var o=t(n.currentTarget);o.closest(e.$buttonUpload).length&&e.me.events.dispatch("uploadBtn"),o.closest(e.$buttonTitle).length&&(e.me.events.dispatch("titleBtn"),e.me.events.dispatch("openTitlePopup")),o.closest(e.$buttonSeo).length&&(e.me.events.dispatch("seoBtn"),e.me.events.dispatch("openSeoPopup")),o.closest(e.$buttonCut).length&&(e.me.events.dispatch("cutBtn"),e.me.events.dispatch("openCut")),o.closest(e.$buttonLink).length&&(e.me.events.dispatch("linkBtn"),e.me.events.dispatch("openLinkPopup"))}),this.me.$scrollRoot.on("scroll._buttons",function(){e.position()}),this.me.events.on("activateTitleBtn._buttons",function(){e.$buttonTitle.addClass("active")}).on("deactivateTitleBtn._buttons",function(){e.$buttonTitle.removeClass("active")}).on("activateSeoBtn._buttons",function(){e.$buttonSeo.addClass("active")}).on("deactivateSeoBtn._buttons",function(){e.$buttonSeo.removeClass("active")}).on("activateLinkBtn._buttons",function(){e.$buttonLink.addClass("active")}).on("deactivateLinkBtn._buttons",function(){e.$buttonLink.removeClass("active")}).on("openOldCrop._buttons",function(){e.$buttonCut.addClass("active")}).on("closeOldCrop._buttons",function(){e.$buttonCut.removeClass("active")}).on("disableControl._buttons",function(){e.remove()})}}});
//# sourceMappingURL=_buttons.js.map

//# sourceMappingURL=_buttons.js.map

//# sourceMappingURL=_buttons.js.map

//# sourceMappingURL=_buttons.js.map

//# sourceMappingURL=_buttons.js.map

//# sourceMappingURL=_buttons.js.map

//# sourceMappingURL=_buttons.js.map

//# sourceMappingURL=_buttons.js.map

//# sourceMappingURL=_buttons.js.map

//# sourceMappingURL=_buttons.js.map

//# sourceMappingURL=_buttons.js.map

//# sourceMappingURL=_buttons.js.map

//# sourceMappingURL=_buttons.js.map

//# sourceMappingURL=_buttons.js.map

//# sourceMappingURL=_buttons.js.map

//# sourceMappingURL=_buttons.js.map

//# sourceMappingURL=_buttons.js.map

//# sourceMappingURL=_buttons.js.map

//# sourceMappingURL=_buttons.js.map

//# sourceMappingURL=_buttons.js.map

//# sourceMappingURL=_buttons.js.map

//# sourceMappingURL=_buttons.js.map

//# sourceMappingURL=_buttons.js.map

//# sourceMappingURL=_buttons.js.map

//# sourceMappingURL=_buttons.js.map

//# sourceMappingURL=_buttons.js.map

//# sourceMappingURL=_buttons.js.map

//# sourceMappingURL=_buttons.js.map

//# sourceMappingURL=_buttons.js.map

//# sourceMappingURL=_buttons.js.map

//# sourceMappingURL=_buttons.js.map

//# sourceMappingURL=_buttons.js.map

//# sourceMappingURL=_buttons.js.map

//# sourceMappingURL=_buttons.js.map

//# sourceMappingURL=_buttons.js.map

//# sourceMappingURL=_buttons.js.map

//# sourceMappingURL=_buttons.js.map

//# sourceMappingURL=_buttons.js.map

//# sourceMappingURL=_buttons.js.map

//# sourceMappingURL=_buttons.js.map

//# sourceMappingURL=_buttons.js.map

//# sourceMappingURL=_buttons.js.map

//# sourceMappingURL=_buttons.js.map

//# sourceMappingURL=_buttons.js.map

//# sourceMappingURL=_buttons.js.map

//# sourceMappingURL=_buttons.js.map

//# sourceMappingURL=_buttons.js.map

//# sourceMappingURL=_buttons.js.map

//# sourceMappingURL=_buttons.js.map

//# sourceMappingURL=_buttons.js.map

//# sourceMappingURL=_buttons.js.map

//# sourceMappingURL=_buttons.js.map

//# sourceMappingURL=_buttons.js.map

//# sourceMappingURL=_buttons.js.map

//# sourceMappingURL=_buttons.js.map

//# sourceMappingURL=_buttons.js.map

//# sourceMappingURL=_buttons.js.map

//# sourceMappingURL=_buttons.js.map

//# sourceMappingURL=_buttons.js.map

//# sourceMappingURL=_buttons.js.map

//# sourceMappingURL=_buttons.js.map

//# sourceMappingURL=_buttons.js.map

//# sourceMappingURL=_buttons.js.map

//# sourceMappingURL=_buttons.js.map

//# sourceMappingURL=_buttons.js.map

//# sourceMappingURL=_buttons.js.map

//# sourceMappingURL=_buttons.js.map

//# sourceMappingURL=_buttons.js.map

//# sourceMappingURL=_buttons.js.map

//# sourceMappingURL=_buttons.js.map

//# sourceMappingURL=_buttons.js.map

//# sourceMappingURL=_buttons.js.map

//# sourceMappingURL=_buttons.js.map

//# sourceMappingURL=_buttons.js.map

//# sourceMappingURL=_buttons.js.map

//# sourceMappingURL=_buttons.js.map

//# sourceMappingURL=_buttons.js.map

//# sourceMappingURL=_buttons.js.map

//# sourceMappingURL=_buttons.js.map

//# sourceMappingURL=_buttons.js.map

//# sourceMappingURL=_buttons.js.map

//# sourceMappingURL=_buttons.js.map

//# sourceMappingURL=_buttons.js.map

//# sourceMappingURL=_buttons.js.map

//# sourceMappingURL=_buttons.js.map

//# sourceMappingURL=_buttons.js.map

//# sourceMappingURL=_buttons.js.map

//# sourceMappingURL=_buttons.js.map

//# sourceMappingURL=_buttons.js.map

//# sourceMappingURL=_buttons.js.map

//# sourceMappingURL=_buttons.js.map

//# sourceMappingURL=_buttons.js.map

//# sourceMappingURL=_buttons.js.map

//# sourceMappingURL=_buttons.js.map

//# sourceMappingURL=_buttons.js.map

//# sourceMappingURL=_buttons.js.map

//# sourceMappingURL=_buttons.js.map

//# sourceMappingURL=_buttons.js.map

//# sourceMappingURL=_buttons.js.map

//# sourceMappingURL=_buttons.js.map

//# sourceMappingURL=_buttons.js.map

//# sourceMappingURL=_buttons.js.map

//# sourceMappingURL=_buttons.js.map

//# sourceMappingURL=_buttons.js.map

//# sourceMappingURL=_buttons.js.map

//# sourceMappingURL=_buttons.js.map

//# sourceMappingURL=_buttons.js.map

//# sourceMappingURL=_buttons.js.map

//# sourceMappingURL=_buttons.js.map

//# sourceMappingURL=_buttons.js.map

//# sourceMappingURL=_buttons.js.map

//# sourceMappingURL=_buttons.js.map

//# sourceMappingURL=_buttons.js.map

//# sourceMappingURL=_buttons.js.map

//# sourceMappingURL=_buttons.js.map

//# sourceMappingURL=_buttons.js.map

//# sourceMappingURL=_buttons.js.map

//# sourceMappingURL=_buttons.js.map

//# sourceMappingURL=_buttons.js.map

//# sourceMappingURL=_buttons.js.map

//# sourceMappingURL=_buttons.js.map

//# sourceMappingURL=_buttons.js.map

//# sourceMappingURL=_buttons.js.map

//# sourceMappingURL=_buttons.js.map

//# sourceMappingURL=_buttons.js.map

//# sourceMappingURL=_buttons.js.map

//# sourceMappingURL=_buttons.js.map

//# sourceMappingURL=_buttons.js.map

//# sourceMappingURL=_buttons.js.map

//# sourceMappingURL=_buttons.js.map

//# sourceMappingURL=_buttons.js.map

//# sourceMappingURL=_buttons.js.map

//# sourceMappingURL=_buttons.js.map

//# sourceMappingURL=_buttons.js.map

//# sourceMappingURL=_buttons.js.map

//# sourceMappingURL=_buttons.js.map

//# sourceMappingURL=_buttons.js.map

//# sourceMappingURL=_buttons.js.map

//# sourceMappingURL=_buttons.js.map

//# sourceMappingURL=_buttons.js.map

//# sourceMappingURL=_buttons.js.map

//# sourceMappingURL=_buttons.js.map

//# sourceMappingURL=_buttons.js.map

//# sourceMappingURL=_buttons.js.map

//# sourceMappingURL=_buttons.js.map

//# sourceMappingURL=_buttons.js.map

//# sourceMappingURL=_buttons.js.map

//# sourceMappingURL=_buttons.js.map

//# sourceMappingURL=_buttons.js.map

//# sourceMappingURL=_buttons.js.map

//# sourceMappingURL=_buttons.js.map

//# sourceMappingURL=_buttons.js.map

//# sourceMappingURL=_buttons.js.map

//# sourceMappingURL=_buttons.js.map

//# sourceMappingURL=_buttons.js.map

//# sourceMappingURL=_buttons.js.map

//# sourceMappingURL=_buttons.js.map

//# sourceMappingURL=_buttons.js.map

//# sourceMappingURL=_buttons.js.map

//# sourceMappingURL=_buttons.js.map

//# sourceMappingURL=_buttons.js.map

//# sourceMappingURL=_buttons.js.map

//# sourceMappingURL=_buttons.js.map

//# sourceMappingURL=_buttons.js.map

//# sourceMappingURL=_buttons.js.map

//# sourceMappingURL=_buttons.js.map

//# sourceMappingURL=_buttons.js.map

//# sourceMappingURL=_buttons.js.map

//# sourceMappingURL=_buttons.js.map

//# sourceMappingURL=_buttons.js.map

//# sourceMappingURL=_buttons.js.map

//# sourceMappingURL=_buttons.js.map

//# sourceMappingURL=_buttons.js.map

//# sourceMappingURL=_buttons.js.map

//# sourceMappingURL=_buttons.js.map

//# sourceMappingURL=_buttons.js.map

//# sourceMappingURL=_buttons.js.map

//# sourceMappingURL=_buttons.js.map

//# sourceMappingURL=_buttons.js.map

//# sourceMappingURL=_buttons.js.map

//# sourceMappingURL=_buttons.js.map

//# sourceMappingURL=_buttons.js.map

//# sourceMappingURL=_buttons.js.map

//# sourceMappingURL=_buttons.js.map

//# sourceMappingURL=_buttons.js.map

//# sourceMappingURL=_buttons.js.map

//# sourceMappingURL=_buttons.js.map

//# sourceMappingURL=_buttons.js.map

//# sourceMappingURL=_buttons.js.map

//# sourceMappingURL=_buttons.js.map

//# sourceMappingURL=_buttons.js.map

//# sourceMappingURL=_buttons.js.map

//# sourceMappingURL=_buttons.js.map

//# sourceMappingURL=_buttons.js.map

//# sourceMappingURL=_buttons.js.map

//# sourceMappingURL=_buttons.js.map

//# sourceMappingURL=_buttons.js.map

//# sourceMappingURL=_buttons.js.map

//# sourceMappingURL=_buttons.js.map

//# sourceMappingURL=_buttons.js.map

//# sourceMappingURL=_buttons.js.map

//# sourceMappingURL=_buttons.js.map

//# sourceMappingURL=_buttons.js.map

//# sourceMappingURL=_buttons.js.map

//# sourceMappingURL=_buttons.js.map

//# sourceMappingURL=_buttons.js.map

//# sourceMappingURL=_buttons.js.map

//# sourceMappingURL=_buttons.js.map

//# sourceMappingURL=_buttons.js.map

//# sourceMappingURL=_buttons.js.map

//# sourceMappingURL=_buttons.js.map

//# sourceMappingURL=_buttons.js.map

//# sourceMappingURL=_buttons.js.map

//# sourceMappingURL=_buttons.js.map

//# sourceMappingURL=_buttons.js.map

//# sourceMappingURL=_buttons.js.map

//# sourceMappingURL=_buttons.js.map

//# sourceMappingURL=_buttons.js.map

//# sourceMappingURL=_buttons.js.map

//# sourceMappingURL=_buttons.js.map

//# sourceMappingURL=_buttons.js.map

//# sourceMappingURL=_buttons.js.map

//# sourceMappingURL=_buttons.js.map

//# sourceMappingURL=_buttons.js.map

//# sourceMappingURL=_buttons.js.map

//# sourceMappingURL=_buttons.js.map

//# sourceMappingURL=_buttons.js.map

//# sourceMappingURL=_buttons.js.map

//# sourceMappingURL=_buttons.js.map

//# sourceMappingURL=_buttons.js.map

//# sourceMappingURL=_buttons.js.map

//# sourceMappingURL=_buttons.js.map

//# sourceMappingURL=_buttons.js.map

//# sourceMappingURL=_buttons.js.map

//# sourceMappingURL=_buttons.js.map

//# sourceMappingURL=_buttons.js.map

//# sourceMappingURL=_buttons.js.map

//# sourceMappingURL=_buttons.js.map

//# sourceMappingURL=_buttons.js.map

//# sourceMappingURL=_buttons.js.map

//# sourceMappingURL=_buttons.js.map

//# sourceMappingURL=_buttons.js.map

//# sourceMappingURL=_buttons.js.map

//# sourceMappingURL=_buttons.js.map

//# sourceMappingURL=_buttons.js.map

//# sourceMappingURL=_buttons.js.map

//# sourceMappingURL=_buttons.js.map

//# sourceMappingURL=_buttons.js.map

//# sourceMappingURL=_buttons.js.map

//# sourceMappingURL=_buttons.js.map

//# sourceMappingURL=_buttons.js.map

//# sourceMappingURL=_buttons.js.map

//# sourceMappingURL=_buttons.js.map

//# sourceMappingURL=_buttons.js.map

//# sourceMappingURL=_buttons.js.map

//# sourceMappingURL=_buttons.js.map

//# sourceMappingURL=_buttons.js.map

//# sourceMappingURL=_buttons.js.map

//# sourceMappingURL=_buttons.js.map

//# sourceMappingURL=_buttons.js.map

//# sourceMappingURL=_buttons.js.map

//# sourceMappingURL=_buttons.js.map

//# sourceMappingURL=_buttons.js.map

//# sourceMappingURL=_buttons.js.map

//# sourceMappingURL=_buttons.js.map

//# sourceMappingURL=_buttons.js.map

//# sourceMappingURL=_buttons.js.map

//# sourceMappingURL=_buttons.js.map

//# sourceMappingURL=_buttons.js.map

//# sourceMappingURL=_buttons.js.map

//# sourceMappingURL=_buttons.js.map

//# sourceMappingURL=_buttons.js.map

//# sourceMappingURL=_buttons.js.map

//# sourceMappingURL=_buttons.js.map

//# sourceMappingURL=_buttons.js.map

//# sourceMappingURL=_buttons.js.map

//# sourceMappingURL=_buttons.js.map

//# sourceMappingURL=_buttons.js.map

//# sourceMappingURL=_buttons.js.map

//# sourceMappingURL=_buttons.js.map

//# sourceMappingURL=_buttons.js.map

//# sourceMappingURL=_buttons.js.map

//# sourceMappingURL=_buttons.js.map

//# sourceMappingURL=_buttons.js.map

//# sourceMappingURL=_buttons.js.map

//# sourceMappingURL=_buttons.js.map

//# sourceMappingURL=_buttons.js.map

//# sourceMappingURL=_buttons.js.map

//# sourceMappingURL=_buttons.js.map

//# sourceMappingURL=_buttons.js.map

//# sourceMappingURL=_buttons.js.map

//# sourceMappingURL=_buttons.js.map

//# sourceMappingURL=_buttons.js.map

//# sourceMappingURL=_buttons.js.map

//# sourceMappingURL=_buttons.js.map

//# sourceMappingURL=_buttons.js.map

//# sourceMappingURL=_buttons.js.map

//# sourceMappingURL=_buttons.js.map

//# sourceMappingURL=_buttons.js.map

//# sourceMappingURL=_buttons.js.map

//# sourceMappingURL=_buttons.js.map

//# sourceMappingURL=_buttons.js.map

//# sourceMappingURL=_buttons.js.map

//# sourceMappingURL=_buttons.js.map

//# sourceMappingURL=_buttons.js.map

//# sourceMappingURL=_buttons.js.map

//# sourceMappingURL=_buttons.js.map

//# sourceMappingURL=_buttons.js.map

//# sourceMappingURL=_buttons.js.map

//# sourceMappingURL=_buttons.js.map

//# sourceMappingURL=_buttons.js.map

//# sourceMappingURL=_buttons.js.map

//# sourceMappingURL=_buttons.js.map

//# sourceMappingURL=_buttons.js.map
