"use strict";function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function _defineProperties(e,t){for(var a=0;a<t.length;a++){var s=t[a];s.enumerable=s.enumerable||!1,s.configurable=!0,"value"in s&&(s.writable=!0),Object.defineProperty(e,s.key,s)}}function _createClass(e,t,a){return t&&_defineProperties(e.prototype,t),a&&_defineProperties(e,a),e}define(["U","i18n","jquery","lodash","imagelib","uform","settingBackground","stickyPopup","text!html/share/constructor/panels/background.html","imageLibOpener"],function(e,t,a,s,n,i,o,r,g,c){var l=function(){function n(e){var t=e.$el,s=e.colorSettings;_classCallCheck(this,n),this.$el=t,this.$body=a("#body"),this.colorSettings=s,this.params=s.params,this.updatePanelSiteSetting(this.params),this._render(),this._addEvents()}return _createClass(n,[{key:"updateSettings",value:function(e){this.colorSettings.updateSettings(e)}},{key:"_render",value:function(){var a=s.template(g,{__:t,siteTheme:e.params.siteTheme,pageTheme:e.params.pageTheme});this.$el.append(a)}},{key:"drawBgColors",value:function(e){var t=this;a(".js-background-settings-color",t.$el).removeClass(function(e,t){return(t.match(/g-theme-site-\d/)||[]).join(" ")}).addClass(e.theme)}},{key:"eventHoverImg",value:function(e){var t=e.data.constructor;t.params.background.image.length&&a(this).addClass("hovered")}},{key:"eventLeaveImg",value:function(){a(this).removeClass("hovered")}},{key:"_addEvents",value:function(){var e=this,n=this;a(".ul-background-type-switcher",n.$el).on("change.backgroundSetting",function(e){var t=e.target.dataset.bgtype,s="g-theme-block-".concat("color"===t?1:5);a(".js-tab-"+t).addClass("active").siblings().removeClass("active"),n.params.bgtype=t,"color"!==t&&a(".js-image-lib-open",n.$el).hasClass("empty")||(n.params.bgtheme=s,n.colorSettings.setBgColors(".js-background-settings-color > li",".js-site-settings-palette"),n.saveParams())}),a(".js-background-settings-color > li",n.$el).on("click.backgroundSetting",function(){var e=a(this);return e.hasClass("active")?!1:(e.parent().children("li").removeClass("active"),e.addClass("active"),n.params.bgtheme=e.attr("data-themeBlock"),n.colorSettings.setBgColors(".js-background-settings-color > li",".js-site-settings-palette"),void n.saveParams())}),a(".js-image-lib-open",n.$el).on("click.backgroundSetting",function(){var e=a(this);c.open({onApply:function(t){n.params.background.image!==t.origin&&(n.params.background.image=t.origin,e.hasClass("empty")&&(e.removeClass("empty"),e.parent().find(".ul-noActive").removeClass("ul-noActive"),e.parent().find(".js-ul-site-styles-image-settings").show()),n.params.bgtype="image",n.params.bgtheme="g-theme-block-5",e.css("background-image","url("+n.params.background.image+")"),n.saveParams())}})}),a(".js-this_page input",n.$el).on("change.backgroundSetting",function(){n.params.backgroundInherit=!a(this).is(":checked"),n.saveParams()}),a(".ul-background-image",n.$el).on("mouseover.backgroundSetting",{constructor:n},n.eventHoverImg).on("mouseout.backgroundSetting",n.eventLeaveImg),a(".js-ul-site-styles-image-settings",n.$el).on("click.backgroundSetting",function(e){var s={params:a.extend(!0,{},n.params)},o=a(this),g=a(this).closest(".ul-background-image");a(".ul-background-image",n.$form).off("mouseover.backgroundSetting",n.eventHoverImg).off("mouseout.backgroundSetting",n.eventLeaveImg);var c=a(this).closest(".ul-background-image").find(".js-image-lib-open").hasClass("empty");return c?!1:(r.open({context:n,title:t("constructor.thin settings"),required:"settingBackground",templateUrl:"text!./html/constructor/backgroundSettings.html",templateData:{params:n.params,__:t},$targetEl:a(this),saveBtn:!1,wide:!1,afterOpen:function(){g.addClass("hovered"),o.addClass("active")},beforeApply:function(){},close:function(){o.removeClass("active");var e=i.formParse(a(".ul-block-styles-image")),t=/^#(?:[a-fA-F0-9]{6})$/i;t.test(e.params.background.color)||(e.params.background.color=s.params.background.color),n.updateSettings(e.params),n.saveParams(),s=null,g.removeClass("hovered"),o.removeClass("active"),a(".ul-background-image",n.$form).on("mouseover.backgroundSetting",{constructor:n},n.eventHoverImg).on("mouseout.backgroundSetting",n.eventLeaveImg)},apply:function(){o.removeClass("active");var e=i.formParse(a(".ul-block-styles-image")),t=/^#(?:[a-fA-F0-9]{6})$/i;t.test(e.params.background.color)||(e.params.background.color=s.params.background.color),n.updateSettings(e.params),n.saveParams(),s=null}}),void e.stopPropagation())}),a(document).on("updatePanelSiteSetting.backgroundSetting",function(t,a){e.updateSettings(a.data),e.updatePanelSiteSetting(a.data)}),a(document).on("siteChanged.siteSetting",function(e,t){n.updatePanelSiteSetting(t),t&&"undefined"!=typeof t.customColorScheme&&n.drawBgColors(s.pick(t,["theme"]))})}},{key:"updatePanelSiteSetting",value:function(t){var s=this;t&&(a.extend(!0,e.params.pageTheme,t),a('li[data-themeblock="'+t.bgtheme+'"]',s.$el).hasClass("active")||(a(".js-background-settings-color",s.$el).find(".active").removeClass("active"),a('li[data-themeblock="'+t.bgtheme+'"]',s.$el).addClass("active"),"g-theme-block-5"==t.bgtheme?(a(".js-image-background-setting",s.$el).css({"min-width":a(".js-image-background-setting",s.$el).width()}),a(".js-image-background-setting",s.$el).show(),a(".js-image-background-setting",s.$el).css({"min-width":""})):(a(".js-image-background-setting",s.$el).css({"min-width":a(".js-image-background-setting",s.$el).width()}),a(".js-image-background-setting",s.$el).hide(),a(".js-image-background-setting",s.$el).css({"min-width":""}))),!a(".js-this_page",s.$el).find("input").is(":checked")&&t.backgroundInherit?a(".js-this_page",s.$el).find("input").prop("checked",!0):a(".js-this_page",s.$el).find("input").is(":checked")&&t.backgroundInherit&&a(".js-this_page",s.$el).find("input").removeAttr("checked"))}},{key:"saveParams",value:function(){var e=this;e.$body.trigger("saveSiteSettings",{id:null,settings:e.colorSettings.getSettings()})}},{key:"setParams",value:function(){var e=this;e.$body.trigger("setSiteSettings",{id:null,settings:e.colorSettings.getSettings()})}},{key:"destroy",value:function(){a(this.$el).off(".backgroundSetting"),this.$el.remove()}}]),n}();return l});
//# sourceMappingURL=background.js.map

//# sourceMappingURL=background.js.map

//# sourceMappingURL=background.js.map

//# sourceMappingURL=background.js.map

//# sourceMappingURL=background.js.map

//# sourceMappingURL=background.js.map

//# sourceMappingURL=background.js.map

//# sourceMappingURL=background.js.map

//# sourceMappingURL=background.js.map

//# sourceMappingURL=background.js.map

//# sourceMappingURL=background.js.map

//# sourceMappingURL=background.js.map

//# sourceMappingURL=background.js.map

//# sourceMappingURL=background.js.map

//# sourceMappingURL=background.js.map

//# sourceMappingURL=background.js.map

//# sourceMappingURL=background.js.map

//# sourceMappingURL=background.js.map

//# sourceMappingURL=background.js.map

//# sourceMappingURL=background.js.map

//# sourceMappingURL=background.js.map

//# sourceMappingURL=background.js.map

//# sourceMappingURL=background.js.map

//# sourceMappingURL=background.js.map

//# sourceMappingURL=background.js.map

//# sourceMappingURL=background.js.map

//# sourceMappingURL=background.js.map

//# sourceMappingURL=background.js.map

//# sourceMappingURL=background.js.map

//# sourceMappingURL=background.js.map

//# sourceMappingURL=background.js.map

//# sourceMappingURL=background.js.map

//# sourceMappingURL=background.js.map

//# sourceMappingURL=background.js.map

//# sourceMappingURL=background.js.map

//# sourceMappingURL=background.js.map

//# sourceMappingURL=background.js.map

//# sourceMappingURL=background.js.map

//# sourceMappingURL=background.js.map

//# sourceMappingURL=background.js.map

//# sourceMappingURL=background.js.map

//# sourceMappingURL=background.js.map

//# sourceMappingURL=background.js.map

//# sourceMappingURL=background.js.map

//# sourceMappingURL=background.js.map

//# sourceMappingURL=background.js.map
