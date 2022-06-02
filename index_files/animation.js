"use strict";function _classCallCheck(a,e){if(!(a instanceof e))throw new TypeError("Cannot call a class as a function")}function _defineProperties(a,e){for(var n=0;n<e.length;n++){var t=e[n];t.enumerable=t.enumerable||!1,t.configurable=!0,"value"in t&&(t.writable=!0),Object.defineProperty(a,t.key,t)}}function _createClass(a,e,n){return e&&_defineProperties(a.prototype,e),n&&_defineProperties(a,n),a}define(["U","i18n","jquery","lodash","colorSettings","text!html/share/constructor/panels/animation.html","locale","model/pages","stickyPopup","css!animate","css!/css/lib/animate.min.css"],function(a,e,n,t,i,s,o,c,r){var l=null,m=function(){function m(e){_classCallCheck(this,m),this.$el=e,this.$form=this.$el.closest(".js-panelDesign-parent"),this.$body=n("#body"),this.animation=a.params.pageTheme.animation,this.locale=o.get(),this.classPrefix="animate__",this.speedValues=["1x","2x","3x"],this.speedClasses=["".concat(this.classPrefix,"slow"),"","".concat(this.classPrefix,"fast")],this.classPrefix="animate__",this.animateParamsClassShow="animation__parameters--show",this._=t,this.render(),this.addListeners(this.$form),this.$animatedLogo=this.$form.find(".animation__decor"),this.$animateParams=n(".animation__parameters")}return _createClass(m,[{key:"render",value:function(){var n=t.template(s,{___:e("constructor"),params:a.params,speedValues:this.speedValues,speedClasses:this.speedClasses,animation:a.params.pageTheme.animation,locale:o});this.$el.append(n)}},{key:"addListeners",value:function(a){var e=this;a.on("change.animationFormEvents",".js-animation__selector",function(a){var t=n(a.target).find("option:selected")[0],s=t.value;"without animation"===s?e.animation.isEnabled=!1:(e.animation.kind=s,e.animation.isEnabled=!0),e.changeAnimationKind(s),i.updateSettings({animation:e.animation}),e.save()}),a.on("change.animationFormEvents",".animation__speed-item",function(a){var n=a.target.value;e.changeAnimationSpeed(n),e.animation.speed=parseInt(n,10),i.updateSettings({animation:e.animation}),e.save()}),a.on("click.animationFormEvents",".js-site-animation-settings",function(){e.settingsPopup(n(".js-site-animation-settings"))}),a.on("click.animationFormEvents",".js-button-play-animation",function(){var a=e.animation.kind,n="".concat(e.classPrefix).concat(a);e.$animatedLogo.addClass(n),e.playAnimation(a)}),n(document).on("updatePanelSiteSetting",function(a,n){var t=n.data,i=t.animation,s=i.kind,o=i.speed,c=i.isEnabled,r=i.excludedPages,l=e._.isEqual(r,e.animation.excludedPages);if(o!==e.animation.speed){var m=e.$el.find(".animation__speed-switcher").find("input");m[o].checked=!0,m[e.animation.speed].checked=!1,e.animation.speed=o}e.animation.isEnabled!==c&&("without animation"===e.$el.find(".js-animation__selector").val()?(e.$el.find(".js-animation__selector").val(s),e.$animateParams.addClass("".concat(e.animateParamsClassShow)),e.animation.kind=s):(e.$el.find(".js-animation__selector").val("without animation"),e.$animateParams.removeClass("".concat(e.animateParamsClassShow)),e.animation.isEnabled=c)),s!==e.animation.kind&&c&&(e.$animateParams.hasClass("".concat(e.animateParamsClassShow))||e.$animateParams.addClass("".concat(e.animateParamsClassShow)),e.$el.find(".js-animation__selector").val(s),e.animation.kind=s),l||(e.animation.excludedPages=r)})}},{key:"save",value:function(){var a=this;l&&clearTimeout(l),l=setTimeout(function(){return a.$body.trigger("saveSiteSettings",{id:null,settings:i.getSettings()})},1e3)}},{key:"changeAnimationKind",value:function(a){"without animation"===a?this.$animateParams.removeClass("".concat(this.animateParamsClassShow)):(this.$animatedLogo.addClass("".concat(this.classPrefix).concat(a)),this.$animateParams.addClass("".concat(this.animateParamsClassShow)),this.playAnimation(a))}},{key:"changeAnimationSpeed",value:function(e){var n=a.params.pageTheme.animation.speed,t=this.speedClasses[n],i=this.speedClasses[e];this.$animatedLogo.removeClass(t),this.$animatedLogo.addClass(i),this.playAnimation()}},{key:"updateActiveStatusForSpeedBtns",value:function(a){var e=n(".animation__speed-item");e.each(function(){var e=n(this);e.attr("disabled",a)})}},{key:"playAnimation",value:function(e){var n=this,t=e||a.params.pageTheme.animation.kind;this.$animatedLogo.addClass("".concat(this.classPrefix).concat(t)),this.updateActiveStatusForSpeedBtns(!0),this.$animatedLogo.on("animationend",function(){n.$animatedLogo.removeClass("".concat(n.classPrefix).concat(t)),n.updateActiveStatusForSpeedBtns(!1),n.$animatedLogo.off("animationend")})}},{key:"settingsPopup",value:function(s){var o=this,l=a.params.site;c.load(l,function(a){var c={onOpen:function(a){s.addClass("edit"),c.addPopupListeners(a)},onSave:function(a,e){var s=[];n(".js-page-switcher",a).each(function(){var a=n(this);a.prop("checked")||s.push(a.attr("data-page-id"))});var c=t.isEqual(s,o.animation.excludedPages);c||(o.animation.excludedPages=s,i.updateSettings({animation:o.animation}),o.save()),e(!0)},onClose:function(a){a.off("change"),s.removeClass("edit")},onPageSwitcherChange:function(a,e){var t=n(".js-all-pages-switcher",e);if(!a.prop("checked"))return void t.prop("checked",!1);var i=!0;n(".js-page-switcher",e).each(function(){return n(this).prop("checked")?void 0:(i=!1,!1)}),t.prop("checked",i)},onAllPagesSwicherChange:function(a,e){var t=n(".js-page-switcher",e),i=a.prop("checked");t.prop("checked",i)},addPopupListeners:function(a){a.on("change",".js-page-switcher",function(){c.onPageSwitcherChange(n(".js-page-switcher"),a)}).on("change",".js-all-pages-switcher",function(){c.onAllPagesSwicherChange(n(".js-all-pages-switcher"),a)})}},l=a.filter(function(a){return!["special","shop","infoPage"].includes(a._type)});r.open({title:e("constructor.animate.page selection"),$targetEl:s,saveBtn:!1,wide:!1,templateUrl:"text!html/constructor/pageList-settings-popup.html",templateData:{__a:e("constructor.animate"),pages:l,isAllPagesEnabled:l.every(function(a){return-1===o.animation.excludedPages.indexOf(a._id)}),excludedPages:o.animation.excludedPages},afterOpenThis:function(){c.onOpen(r.$el)},afterClose:c.onSave,close:c.onClose})})}},{key:"destroy",value:function(){this.$form.off(".animationFormEvents"),this.$el.remove()}}]),m}();return m});
//# sourceMappingURL=animation.js.map

//# sourceMappingURL=animation.js.map

//# sourceMappingURL=animation.js.map

//# sourceMappingURL=animation.js.map

//# sourceMappingURL=animation.js.map

//# sourceMappingURL=animation.js.map

//# sourceMappingURL=animation.js.map

//# sourceMappingURL=animation.js.map

//# sourceMappingURL=animation.js.map

//# sourceMappingURL=animation.js.map

//# sourceMappingURL=animation.js.map

//# sourceMappingURL=animation.js.map

//# sourceMappingURL=animation.js.map

//# sourceMappingURL=animation.js.map

//# sourceMappingURL=animation.js.map

//# sourceMappingURL=animation.js.map

//# sourceMappingURL=animation.js.map

//# sourceMappingURL=animation.js.map

//# sourceMappingURL=animation.js.map

//# sourceMappingURL=animation.js.map

//# sourceMappingURL=animation.js.map

//# sourceMappingURL=animation.js.map

//# sourceMappingURL=animation.js.map

//# sourceMappingURL=animation.js.map

//# sourceMappingURL=animation.js.map

//# sourceMappingURL=animation.js.map

//# sourceMappingURL=animation.js.map

//# sourceMappingURL=animation.js.map

//# sourceMappingURL=animation.js.map

//# sourceMappingURL=animation.js.map

//# sourceMappingURL=animation.js.map

//# sourceMappingURL=animation.js.map

//# sourceMappingURL=animation.js.map

//# sourceMappingURL=animation.js.map

//# sourceMappingURL=animation.js.map

//# sourceMappingURL=animation.js.map

//# sourceMappingURL=animation.js.map

//# sourceMappingURL=animation.js.map

//# sourceMappingURL=animation.js.map

//# sourceMappingURL=animation.js.map

//# sourceMappingURL=animation.js.map

//# sourceMappingURL=animation.js.map

//# sourceMappingURL=animation.js.map

//# sourceMappingURL=animation.js.map

//# sourceMappingURL=animation.js.map

//# sourceMappingURL=animation.js.map

//# sourceMappingURL=animation.js.map

//# sourceMappingURL=animation.js.map

//# sourceMappingURL=animation.js.map

//# sourceMappingURL=animation.js.map

//# sourceMappingURL=animation.js.map

//# sourceMappingURL=animation.js.map

//# sourceMappingURL=animation.js.map

//# sourceMappingURL=animation.js.map

//# sourceMappingURL=animation.js.map

//# sourceMappingURL=animation.js.map

//# sourceMappingURL=animation.js.map

//# sourceMappingURL=animation.js.map

//# sourceMappingURL=animation.js.map

//# sourceMappingURL=animation.js.map

//# sourceMappingURL=animation.js.map

//# sourceMappingURL=animation.js.map

//# sourceMappingURL=animation.js.map

//# sourceMappingURL=animation.js.map

//# sourceMappingURL=animation.js.map

//# sourceMappingURL=animation.js.map

//# sourceMappingURL=animation.js.map

//# sourceMappingURL=animation.js.map

//# sourceMappingURL=animation.js.map

//# sourceMappingURL=animation.js.map

//# sourceMappingURL=animation.js.map

//# sourceMappingURL=animation.js.map

//# sourceMappingURL=animation.js.map

//# sourceMappingURL=animation.js.map

//# sourceMappingURL=animation.js.map
