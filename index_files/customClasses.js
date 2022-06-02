"use strict";define("customClasses",["U","jquery","_","i18n","ul-framework","billing/feature-availability","tpl!customClasses/edit","tpl!customClasses/input","tpl!customClasses/not-available"],function(s,t,e,o,a,l,i,r,n){var u=function(s){var u=o("constructor.customClass"),c=3;this.destroy=function(){this.notAvailableDeinit&&this.notAvailableDeinit(),this.isAvailable&&(this.groupFold&&(t(".js-customClasses-groupFold").remove(),this.groupFold.destroy()),"widget"===this.type&&this.object.handlerRender(),this.$target=null,this.afterSave=null,this.beforeSave=null,this.object=null,this.getCustomClasses=null,this.setCustomClasses=null)},this.save=function(){var s=this,e=this.getCustomClasses();s.beforeSave&&s.beforeSave(e),e.length=0,t(".js-customClass-input",s.$target).each(function(o,a){var l=t(a);s.validate(l)&&e.push(l.val())}),s.afterSave&&s.afterSave(e)},this.existsErrors=function(){return t(".js-customClasses-wrapper").find(".error").length},this.validate=function(s){var t,e=s.closest(".ul-customClasses-item").find(".js-wrong-link"),o=s.val();return o.length?(o.toLowerCase().startsWith("ul-")&&(t=u("error ul prefix is not allowed")),/^\d/.test(o)&&(t=u("error only numbers or start with a number")),o.includes(" ")&&(t=u("error more than one expression")),/^[\dA-Za-z\-_]+$/gi.test(o)||(t=u("error forbidden symbols")),t?(s.addClass("error"),e.addClass("show").text(t),!1):(s.removeClass("error"),e.removeClass("show").text(),!0)):!1},this.renderAddButton=function(){var s=this,e=t(".ul-customClasses-item");return s.existsErrors()||e.length>=c?void s.$addButton.hide():void s.$addButton.show()},this.open=function(s){var o=this,l=this,n=u("type your class"),d=u("remove class"),m=e.template(i);l.$target=s.$target,l.afterSave=s.afterSave,l.beforeSave=s.beforeSave,s.$target.append('<div class="js-customClasses-groupFold ul-customClasses-form-wrapper"></div>'),a.folds.init();var C="block";s.widget?(C="widget",this.object=s.widget,t(".js-customClasses-groupFold").addClass("ul-customClasses-form-wrapper-widget"),this.setCustomClasses=function(s){o.object.data.customClasses=s},this.getCustomClasses=function(){return o.object.data.customClasses}):(this.object=s.block,this.setCustomClasses=function(s){o.object.customClasses=s},this.getCustomClasses=function(){return o.object.customClasses}),l.type=C;var h=this.getCustomClasses();h||(this.setCustomClasses([]),h=this.getCustomClasses());var p=e.template(r,{customClass:"",placeholder:n,removeClassTitle:d});h&&h.length&&(p=h.map(function(s){return e.template(r,{customClass:s,placeholder:n,removeClassTitle:d})}).join("")),this.groupFold=a.groupFold({$el:t(".js-customClasses-groupFold"),titleStyle:"h2",titleDivider:{isWide:!0},items:[{title:u("class for ".concat(C)),contentHTML:m({i18n:u,customClasses:l.customClasses,type:C,fieldsTmpl:p}),isFolded:!(h&&h.length),isDisabled:!1,help:{isEnabled:!0,title:u("custom class hint"),onClick:function(){}}}]}),this.$addButton=t("#add-customClass"),s.$target.on("keydown keypress keyup",".js-customClass-input",function(s){var e=s.type,o=s.key,a=s.currentTarget;"keydown"===e&&"Enter"===o&&t(a).blur(),s.stopImmediatePropagation()}).on("change.eventCustomClasses",".js-customClass-input",function(s){var e=t(s.target);l.validate(e),l.renderAddButton(),l.existsErrors()||l.save()}).on("click.eventCustomClasses","#add-customClass",function(){var s=t(".js-customClass-input",l.$target);s.length>=c-1&&l.$addButton.hide(),t(".js-customClasses-wrapper",l.$target).append(e.template(r,{customClass:"",placeholder:n,removeClassTitle:d}))}).on("blur.eventCustomClasses",".js-customClass-input",function(s){var e=t(s.target);l.validate(e),l.renderAddButton()}).on("click.eventCustomClasses",".js-customClass-remove-item",function(){t(this).closest(".ul-customClasses-item").remove(),l.renderAddButton(),l.save()}),l.renderAddButton()},this.openNotAvailable=function(s){var o=this,i=u(s.widget?"class for widget":"class for block"),r=u("customClass.custom class hint"),c=e.template(n,{title:i,helpTitle:r});s.$target.append(c);var d=new a.tooltip;d.init(".js-customClasses__help",{attr:"title",delay:300}),s.$target.on("click.eventCustomClassesNotAvailable",".js-customClasses__title",e.throttle(function(){return l.showNotAvailablePopup("customClasses",{$popupTargetEl:t(o),utm:"?utm_source=ukit&utm_medium=constructor&utm_campaign=pro_tariff_paywall_"})},500)),this.notAvailableDeinit=function(){s.$target.off("click.eventCustomClassesNotAvailable")}},this.init=function(s){var t=this;(s.widget||s.block)&&l.check("customClasses",{showPopupIfNotAvailable:!1},function(e){return t.isAvailable=e,e?t.open(s):t.openNotAvailable(s)})}};return new u});
//# sourceMappingURL=customClasses.js.map

//# sourceMappingURL=customClasses.js.map

//# sourceMappingURL=customClasses.js.map

//# sourceMappingURL=customClasses.js.map

//# sourceMappingURL=customClasses.js.map

//# sourceMappingURL=customClasses.js.map

//# sourceMappingURL=customClasses.js.map

//# sourceMappingURL=customClasses.js.map

//# sourceMappingURL=customClasses.js.map

//# sourceMappingURL=customClasses.js.map

//# sourceMappingURL=customClasses.js.map

//# sourceMappingURL=customClasses.js.map

//# sourceMappingURL=customClasses.js.map

//# sourceMappingURL=customClasses.js.map

//# sourceMappingURL=customClasses.js.map

//# sourceMappingURL=customClasses.js.map

//# sourceMappingURL=customClasses.js.map

//# sourceMappingURL=customClasses.js.map

//# sourceMappingURL=customClasses.js.map

//# sourceMappingURL=customClasses.js.map

//# sourceMappingURL=customClasses.js.map

//# sourceMappingURL=customClasses.js.map

//# sourceMappingURL=customClasses.js.map

//# sourceMappingURL=customClasses.js.map

//# sourceMappingURL=customClasses.js.map

//# sourceMappingURL=customClasses.js.map

//# sourceMappingURL=customClasses.js.map

//# sourceMappingURL=customClasses.js.map

//# sourceMappingURL=customClasses.js.map

//# sourceMappingURL=customClasses.js.map

//# sourceMappingURL=customClasses.js.map

//# sourceMappingURL=customClasses.js.map

//# sourceMappingURL=customClasses.js.map

//# sourceMappingURL=customClasses.js.map

//# sourceMappingURL=customClasses.js.map

//# sourceMappingURL=customClasses.js.map

//# sourceMappingURL=customClasses.js.map

//# sourceMappingURL=customClasses.js.map

//# sourceMappingURL=customClasses.js.map

//# sourceMappingURL=customClasses.js.map

//# sourceMappingURL=customClasses.js.map

//# sourceMappingURL=customClasses.js.map

//# sourceMappingURL=customClasses.js.map

//# sourceMappingURL=customClasses.js.map

//# sourceMappingURL=customClasses.js.map

//# sourceMappingURL=customClasses.js.map

//# sourceMappingURL=customClasses.js.map

//# sourceMappingURL=customClasses.js.map

//# sourceMappingURL=customClasses.js.map

//# sourceMappingURL=customClasses.js.map

//# sourceMappingURL=customClasses.js.map

//# sourceMappingURL=customClasses.js.map

//# sourceMappingURL=customClasses.js.map

//# sourceMappingURL=customClasses.js.map

//# sourceMappingURL=customClasses.js.map

//# sourceMappingURL=customClasses.js.map

//# sourceMappingURL=customClasses.js.map

//# sourceMappingURL=customClasses.js.map

//# sourceMappingURL=customClasses.js.map

//# sourceMappingURL=customClasses.js.map

//# sourceMappingURL=customClasses.js.map

//# sourceMappingURL=customClasses.js.map

//# sourceMappingURL=customClasses.js.map

//# sourceMappingURL=customClasses.js.map

//# sourceMappingURL=customClasses.js.map

//# sourceMappingURL=customClasses.js.map

//# sourceMappingURL=customClasses.js.map

//# sourceMappingURL=customClasses.js.map

//# sourceMappingURL=customClasses.js.map

//# sourceMappingURL=customClasses.js.map

//# sourceMappingURL=customClasses.js.map

//# sourceMappingURL=customClasses.js.map

//# sourceMappingURL=customClasses.js.map

//# sourceMappingURL=customClasses.js.map

//# sourceMappingURL=customClasses.js.map

//# sourceMappingURL=customClasses.js.map

//# sourceMappingURL=customClasses.js.map

//# sourceMappingURL=customClasses.js.map

//# sourceMappingURL=customClasses.js.map

//# sourceMappingURL=customClasses.js.map

//# sourceMappingURL=customClasses.js.map

//# sourceMappingURL=customClasses.js.map

//# sourceMappingURL=customClasses.js.map

//# sourceMappingURL=customClasses.js.map

//# sourceMappingURL=customClasses.js.map

//# sourceMappingURL=customClasses.js.map

//# sourceMappingURL=customClasses.js.map

//# sourceMappingURL=customClasses.js.map

//# sourceMappingURL=customClasses.js.map

//# sourceMappingURL=customClasses.js.map

//# sourceMappingURL=customClasses.js.map

//# sourceMappingURL=customClasses.js.map

//# sourceMappingURL=customClasses.js.map

//# sourceMappingURL=customClasses.js.map

//# sourceMappingURL=customClasses.js.map
