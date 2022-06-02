"use strict";define("widget-mainmenu-edit",["jquery","U","_","i18n","nf","lodash","widget","ul-framework","widget-mainmenu-view","text!/widgets/mainmenu/html/mainmenu.html","css!/css/require/widgets/mainmenu-edit.css"],function(e,t,n,a,i,o,r,u,d,s){return{minCols:12,firstView:!0,changeDinamicPage:function(n,a){a||(a=function(){});var i=n.split("#")[1];n=n.split("#").shift();var o="/"!==n?n:"/index";n="/sites/url/"+window.cache.site+"/pages/id"+o+"/edit";var r=function(t){if(t||(t=function(){}),i){e("html, body, #ul-main").scrollTop(0).trigger("scroll");var n=e("#"+i),a=n.offset().top,o=e("header .ul-menu-fixed"),r=e("header .ul-w-mainmenu"),u=e(".ul-w-mainmenu").outerHeight(!0);o.length&&r.attr("data-fixed")&&"true"===r.attr("data-fixed")&&(a=n.offset().top-u),!o.length&&r.attr("data-fixed")&&"true"===r.attr("data-fixed")&&(a=n.offset().top-u),e("html, body, #ul-main").animate({scrollTop:a},500,function(){t()})}else t()};return o==="/"+t.params.page?void r():void t.page.setPage(n,function(n){t.hist.pushState({data:{url:"/sites/url/"+t.params.site+"/pages/id"+o+"/edit"},title:"title",url:"/sites/url/"+t.params.site+"/pages/id"+o+"/constructor"}),t.menu.panels.current!==t.params.panelDefault&&t.menu.setPanel(t.params.panelDefault),e(window).off("widgetsCollectionFull.mainMenuTrigger"),e(window).on("widgetsCollectionFull.mainMenuTrigger",function(){r(function(){a(n)})})})},init:function(){var n=this,a=function(e){var t=new RegExp("^(http|https)://","i");return t.test(e)};e(document).on("click.mainmenu",".js-w-mainmenu",function(i){if("none"!==e(this).data("type")){i.preventDefault();var o=e(this).attr("href");"external"===e(this).data("type")||a(o)||n.changeDinamicPage(o,function(){localStorage.previousPageId=t.params.pageIsEditable?t.params.pageId:localStorage.previousPageId})}}).on("pageRemoved",function(){var n=r.getWidgetsByField("menu");n.forEach(function(n){var a="/sites/url/"+t.params.site+"/pages/id/"+t.params.pageId+"/widgets/"+n.id+"/getData";e.ajax({url:a,type:"GET",data:{widgetId:n.id},api:!0,ok:function(e){n.data=e,n.save(function(){n.render()})},noOk:function(e){i.notify("Произошла ошибка",e)},error:function(e){i.notify("Произошла ошибка",e)}})})}),e(window).on("resizeAllWidgets.mainmenu",function(){d.setSizeByDevice({$fixedContainer:e(".ul-menu-fixed"),device:t.constructor.deviceMode.device}),e(window).off(".mainmenuResize"),e.each(e('[data-widget="mainmenu"]'),function(t,n){var a=r.get(e(n).attr("id"));a&&"mainmenu"==a.type&&a.render()})})},destroy:function(){},getPageMap:function(e){require(["model/pages"],function(n){n.load(t.params.site,function(t){var n={};t.forEach(function(e){n[e._id]=e.id}),e&&e(n)})})},edit:function(){var e=this;require(["panelDialog"],function(t){e.getPageMap(function(n){e.pageMap=n,t.show({context:e,templateUrl:"/widgets/mainmenu/html/form.html",required:["widget-mainmenu-form"],templateCss:["/css/require/widgets/mainmenu-edit.css"],templateData:{data:e.data},close:function(){e.save(function(){e.render()})}}),e.overlay.show({$el:e.$el,autohide:!0,close:function(){t.hide()}})})})},_checkPosConst:function(n,a){var i=n.isAbsolute;return n.headerHeight-n.top<=n.menuHeight&&!i&&!e(".ul-menu-fixed").length&&n.$bodyFict.innerWidth()>=375?(d.setSizeByDevice({$fixedContainer:a.addFixedContainer(n),device:t.constructor.deviceMode.device}),n.$bodyFict.innerWidth()>=992&&n.$menuParent.css("height",n.menuHeight),a.fireResize(),i=!0):n.top<=n.headerHeight-n.menuHeight&&(e("header .ul-w-mainmenu").length||(n.$menu.appendTo(n.$menuParent),n.$menuParent.css("height","")),a.removeFixedContainer(n),i&&(i=!1,a.fireResize())),a.fixedContainerColors(n),i},initView:function(n){var a=this;e(window).on("changeDeviceMode",function(t,a){e("#".concat(n," .ul-w-mainmenu-nav")).attr("data-device",a)}),"desktop"!==t.constructor.deviceMode.device&&e("#".concat(n," .ul-w-mainmenu-nav")).removeClass("desktop"),d.open(n),e("#".concat(n," .ul-w-mainmenu-nav")).attr("data-device",t.constructor.deviceMode.device);var i=d;a.firstView&&(a.firstView=!1,window.constructorMode||("true"===e("header .ul-w-mainmenu").attr("data-fixed")&&(i.isAbsolute=a._checkPosConst({isAbsolute:i.isAbsolute,$menu:e("header .ul-w-mainmenu"),top:e("#ul-main").scrollTop(),headerHeight:i.headerHeight,menuHeight:i.menuHeight,$menuParent:i.$menuParent,$bodyFict:i.$bodyFict,bgcolor:e("header .ul-w-mainmenu").attr("data-bgcolor"),bgtransparent:e("header .ul-w-mainmenu").attr("data-bgtransparent")},i)),e("#ul-main").on("scroll.mainmenu",function(){"true"===e("header .ul-w-mainmenu").attr("data-fixed")&&(i.isAbsolute=a._checkPosConst({isAbsolute:i.isAbsolute,$menu:e("header .ul-w-mainmenu"),top:e("#ul-main").scrollTop(),headerHeight:i.headerHeight,menuHeight:i.menuHeight,$menuParent:i.$menuParent,$bodyFict:i.$bodyFict,bgcolor:e("header .ul-w-mainmenu").attr("data-bgcolor"),bgtransparent:e("header .ul-w-mainmenu").attr("data-bgtransparent")},i))})),e(document).on("changeImmediate.mainmenu, click.mainmenu",".js-fm-colors, .js-fm-opacity",function(){var t=e(".js-fm-colors .active",this.$el),n=e(".js-fm-colors > li",this.$el).index(t),o=u.range.getVal(e(".js-fm-opacity",this.$el));e("header .ul-w-mainmenu").attr("data-bgcolor",n),e("header .ul-w-mainmenu").attr("data-bgtransparent",o),window.constructorMode||(i.isAbsolute=a._checkPosConst({isAbsolute:i.isAbsolute,$menu:e("header .ul-w-mainmenu"),top:e("#ul-main").scrollTop(),headerHeight:i.headerHeight,menuHeight:i.menuHeight,$menuParent:i.$menuParent,$bodyFict:i.$bodyFict,bgcolor:n,bgtransparent:o},i))}),e(document).on("click.mainmenu",".js-panel-action",function(){"panelPreview"===e(this).data("panel")&&e(".ul-menu-fixed").length&&(i.removeFixedContainerEXP({isAbsolute:i.isAbsolute,$menu:e("header .ul-w-mainmenu"),top:e(document).scrollTop(),headerHeight:i.headerHeight,menuHeight:i.menuHeight,$menuParent:i.$menuParent,$bodyFict:i.$bodyFict,bgcolor:e("header .ul-w-mainmenu").attr("data-bgcolor"),bgtransparent:e("header .ul-w-mainmenu").attr("data-bgtransparent")}),i.isAbsolute=!1)}),e(document).on("change.mainmenu",".js-fm-switcher",function(){i.isAbsolute=i.checkPosStop({isAbsolute:i.isAbsolute,$menu:e("header .ul-w-mainmenu"),top:e("#ul-main").scrollTop(),headerHeight:i.headerHeight,menuHeight:i.menuHeight,$menuParent:i.$menuParent,$bodyFict:i.$bodyFict,bgcolor:e("header .ul-w-mainmenu").attr("data-bgcolor"),bgtransparent:e("header .ul-w-mainmenu").attr("data-bgtransparent"),isFixed:e("header .ul-w-mainmenu").attr("data-fixed")})}))}}});
//# sourceMappingURL=edit.js.map

//# sourceMappingURL=edit.js.map

//# sourceMappingURL=edit.js.map

//# sourceMappingURL=edit.js.map

//# sourceMappingURL=edit.js.map

//# sourceMappingURL=edit.js.map

//# sourceMappingURL=edit.js.map

//# sourceMappingURL=edit.js.map

//# sourceMappingURL=edit.js.map

//# sourceMappingURL=edit.js.map

//# sourceMappingURL=edit.js.map

//# sourceMappingURL=edit.js.map

//# sourceMappingURL=edit.js.map

//# sourceMappingURL=edit.js.map

//# sourceMappingURL=edit.js.map

//# sourceMappingURL=edit.js.map

//# sourceMappingURL=edit.js.map

//# sourceMappingURL=edit.js.map

//# sourceMappingURL=edit.js.map

//# sourceMappingURL=edit.js.map

//# sourceMappingURL=edit.js.map

//# sourceMappingURL=edit.js.map

//# sourceMappingURL=edit.js.map

//# sourceMappingURL=edit.js.map

//# sourceMappingURL=edit.js.map

//# sourceMappingURL=edit.js.map

//# sourceMappingURL=edit.js.map

//# sourceMappingURL=edit.js.map

//# sourceMappingURL=edit.js.map

//# sourceMappingURL=edit.js.map

//# sourceMappingURL=edit.js.map

//# sourceMappingURL=edit.js.map

//# sourceMappingURL=edit.js.map

//# sourceMappingURL=edit.js.map

//# sourceMappingURL=edit.js.map

//# sourceMappingURL=edit.js.map

//# sourceMappingURL=edit.js.map

//# sourceMappingURL=edit.js.map

//# sourceMappingURL=edit.js.map

//# sourceMappingURL=edit.js.map

//# sourceMappingURL=edit.js.map

//# sourceMappingURL=edit.js.map

//# sourceMappingURL=edit.js.map

//# sourceMappingURL=edit.js.map

//# sourceMappingURL=edit.js.map

//# sourceMappingURL=edit.js.map

//# sourceMappingURL=edit.js.map

//# sourceMappingURL=edit.js.map

//# sourceMappingURL=edit.js.map

//# sourceMappingURL=edit.js.map

//# sourceMappingURL=edit.js.map

//# sourceMappingURL=edit.js.map

//# sourceMappingURL=edit.js.map

//# sourceMappingURL=edit.js.map

//# sourceMappingURL=edit.js.map

//# sourceMappingURL=edit.js.map

//# sourceMappingURL=edit.js.map

//# sourceMappingURL=edit.js.map

//# sourceMappingURL=edit.js.map

//# sourceMappingURL=edit.js.map

//# sourceMappingURL=edit.js.map

//# sourceMappingURL=edit.js.map

//# sourceMappingURL=edit.js.map

//# sourceMappingURL=edit.js.map

//# sourceMappingURL=edit.js.map

//# sourceMappingURL=edit.js.map

//# sourceMappingURL=edit.js.map

//# sourceMappingURL=edit.js.map

//# sourceMappingURL=edit.js.map

//# sourceMappingURL=edit.js.map

//# sourceMappingURL=edit.js.map

//# sourceMappingURL=edit.js.map

//# sourceMappingURL=edit.js.map

//# sourceMappingURL=edit.js.map

//# sourceMappingURL=edit.js.map

//# sourceMappingURL=edit.js.map

//# sourceMappingURL=edit.js.map

//# sourceMappingURL=edit.js.map

//# sourceMappingURL=edit.js.map

//# sourceMappingURL=edit.js.map

//# sourceMappingURL=edit.js.map

//# sourceMappingURL=edit.js.map

//# sourceMappingURL=edit.js.map

//# sourceMappingURL=edit.js.map

//# sourceMappingURL=edit.js.map

//# sourceMappingURL=edit.js.map

//# sourceMappingURL=edit.js.map

//# sourceMappingURL=edit.js.map

//# sourceMappingURL=edit.js.map

//# sourceMappingURL=edit.js.map

//# sourceMappingURL=edit.js.map

//# sourceMappingURL=edit.js.map

//# sourceMappingURL=edit.js.map

//# sourceMappingURL=edit.js.map

//# sourceMappingURL=edit.js.map

//# sourceMappingURL=edit.js.map

//# sourceMappingURL=edit.js.map

//# sourceMappingURL=edit.js.map

//# sourceMappingURL=edit.js.map

//# sourceMappingURL=edit.js.map

//# sourceMappingURL=edit.js.map

//# sourceMappingURL=edit.js.map

//# sourceMappingURL=edit.js.map

//# sourceMappingURL=edit.js.map

//# sourceMappingURL=edit.js.map

//# sourceMappingURL=edit.js.map

//# sourceMappingURL=edit.js.map

//# sourceMappingURL=edit.js.map

//# sourceMappingURL=edit.js.map

//# sourceMappingURL=edit.js.map

//# sourceMappingURL=edit.js.map

//# sourceMappingURL=edit.js.map

//# sourceMappingURL=edit.js.map

//# sourceMappingURL=edit.js.map

//# sourceMappingURL=edit.js.map

//# sourceMappingURL=edit.js.map

//# sourceMappingURL=edit.js.map

//# sourceMappingURL=edit.js.map

//# sourceMappingURL=edit.js.map

//# sourceMappingURL=edit.js.map

//# sourceMappingURL=edit.js.map

//# sourceMappingURL=edit.js.map

//# sourceMappingURL=edit.js.map

//# sourceMappingURL=edit.js.map

//# sourceMappingURL=edit.js.map

//# sourceMappingURL=edit.js.map

//# sourceMappingURL=edit.js.map

//# sourceMappingURL=edit.js.map

//# sourceMappingURL=edit.js.map

//# sourceMappingURL=edit.js.map

//# sourceMappingURL=edit.js.map

//# sourceMappingURL=edit.js.map

//# sourceMappingURL=edit.js.map

//# sourceMappingURL=edit.js.map

//# sourceMappingURL=edit.js.map

//# sourceMappingURL=edit.js.map

//# sourceMappingURL=edit.js.map

//# sourceMappingURL=edit.js.map

//# sourceMappingURL=edit.js.map

//# sourceMappingURL=edit.js.map

//# sourceMappingURL=edit.js.map

//# sourceMappingURL=edit.js.map

//# sourceMappingURL=edit.js.map

//# sourceMappingURL=edit.js.map

//# sourceMappingURL=edit.js.map

//# sourceMappingURL=edit.js.map

//# sourceMappingURL=edit.js.map

//# sourceMappingURL=edit.js.map

//# sourceMappingURL=edit.js.map

//# sourceMappingURL=edit.js.map

//# sourceMappingURL=edit.js.map

//# sourceMappingURL=edit.js.map

//# sourceMappingURL=edit.js.map

//# sourceMappingURL=edit.js.map

//# sourceMappingURL=edit.js.map

//# sourceMappingURL=edit.js.map

//# sourceMappingURL=edit.js.map

//# sourceMappingURL=edit.js.map

//# sourceMappingURL=edit.js.map

//# sourceMappingURL=edit.js.map

//# sourceMappingURL=edit.js.map

//# sourceMappingURL=edit.js.map

//# sourceMappingURL=edit.js.map

//# sourceMappingURL=edit.js.map

//# sourceMappingURL=edit.js.map

//# sourceMappingURL=edit.js.map

//# sourceMappingURL=edit.js.map

//# sourceMappingURL=edit.js.map

//# sourceMappingURL=edit.js.map

//# sourceMappingURL=edit.js.map

//# sourceMappingURL=edit.js.map

//# sourceMappingURL=edit.js.map

//# sourceMappingURL=edit.js.map

//# sourceMappingURL=edit.js.map

//# sourceMappingURL=edit.js.map

//# sourceMappingURL=edit.js.map

//# sourceMappingURL=edit.js.map

//# sourceMappingURL=edit.js.map

//# sourceMappingURL=edit.js.map

//# sourceMappingURL=edit.js.map

//# sourceMappingURL=edit.js.map

//# sourceMappingURL=edit.js.map

//# sourceMappingURL=edit.js.map

//# sourceMappingURL=edit.js.map

//# sourceMappingURL=edit.js.map

//# sourceMappingURL=edit.js.map

//# sourceMappingURL=edit.js.map

//# sourceMappingURL=edit.js.map

//# sourceMappingURL=edit.js.map

//# sourceMappingURL=edit.js.map

//# sourceMappingURL=edit.js.map

//# sourceMappingURL=edit.js.map

//# sourceMappingURL=edit.js.map

//# sourceMappingURL=edit.js.map

//# sourceMappingURL=edit.js.map

//# sourceMappingURL=edit.js.map

//# sourceMappingURL=edit.js.map

//# sourceMappingURL=edit.js.map

//# sourceMappingURL=edit.js.map

//# sourceMappingURL=edit.js.map

//# sourceMappingURL=edit.js.map

//# sourceMappingURL=edit.js.map

//# sourceMappingURL=edit.js.map

//# sourceMappingURL=edit.js.map

//# sourceMappingURL=edit.js.map

//# sourceMappingURL=edit.js.map

//# sourceMappingURL=edit.js.map

//# sourceMappingURL=edit.js.map

//# sourceMappingURL=edit.js.map

//# sourceMappingURL=edit.js.map

//# sourceMappingURL=edit.js.map

//# sourceMappingURL=edit.js.map

//# sourceMappingURL=edit.js.map

//# sourceMappingURL=edit.js.map

//# sourceMappingURL=edit.js.map

//# sourceMappingURL=edit.js.map

//# sourceMappingURL=edit.js.map

//# sourceMappingURL=edit.js.map

//# sourceMappingURL=edit.js.map

//# sourceMappingURL=edit.js.map

//# sourceMappingURL=edit.js.map

//# sourceMappingURL=edit.js.map

//# sourceMappingURL=edit.js.map

//# sourceMappingURL=edit.js.map

//# sourceMappingURL=edit.js.map

//# sourceMappingURL=edit.js.map

//# sourceMappingURL=edit.js.map

//# sourceMappingURL=edit.js.map

//# sourceMappingURL=edit.js.map

//# sourceMappingURL=edit.js.map

//# sourceMappingURL=edit.js.map

//# sourceMappingURL=edit.js.map

//# sourceMappingURL=edit.js.map

//# sourceMappingURL=edit.js.map

//# sourceMappingURL=edit.js.map

//# sourceMappingURL=edit.js.map

//# sourceMappingURL=edit.js.map

//# sourceMappingURL=edit.js.map

//# sourceMappingURL=edit.js.map

//# sourceMappingURL=edit.js.map

//# sourceMappingURL=edit.js.map

//# sourceMappingURL=edit.js.map

//# sourceMappingURL=edit.js.map

//# sourceMappingURL=edit.js.map

//# sourceMappingURL=edit.js.map

//# sourceMappingURL=edit.js.map

//# sourceMappingURL=edit.js.map

//# sourceMappingURL=edit.js.map

//# sourceMappingURL=edit.js.map

//# sourceMappingURL=edit.js.map

//# sourceMappingURL=edit.js.map

//# sourceMappingURL=edit.js.map

//# sourceMappingURL=edit.js.map

//# sourceMappingURL=edit.js.map

//# sourceMappingURL=edit.js.map

//# sourceMappingURL=edit.js.map

//# sourceMappingURL=edit.js.map

//# sourceMappingURL=edit.js.map

//# sourceMappingURL=edit.js.map

//# sourceMappingURL=edit.js.map

//# sourceMappingURL=edit.js.map

//# sourceMappingURL=edit.js.map

//# sourceMappingURL=edit.js.map

//# sourceMappingURL=edit.js.map

//# sourceMappingURL=edit.js.map

//# sourceMappingURL=edit.js.map

//# sourceMappingURL=edit.js.map

//# sourceMappingURL=edit.js.map

//# sourceMappingURL=edit.js.map

//# sourceMappingURL=edit.js.map

//# sourceMappingURL=edit.js.map

//# sourceMappingURL=edit.js.map

//# sourceMappingURL=edit.js.map

//# sourceMappingURL=edit.js.map

//# sourceMappingURL=edit.js.map

//# sourceMappingURL=edit.js.map

//# sourceMappingURL=edit.js.map

//# sourceMappingURL=edit.js.map

//# sourceMappingURL=edit.js.map

//# sourceMappingURL=edit.js.map

//# sourceMappingURL=edit.js.map

//# sourceMappingURL=edit.js.map

//# sourceMappingURL=edit.js.map

//# sourceMappingURL=edit.js.map

//# sourceMappingURL=edit.js.map

//# sourceMappingURL=edit.js.map

//# sourceMappingURL=edit.js.map

//# sourceMappingURL=edit.js.map

//# sourceMappingURL=edit.js.map

//# sourceMappingURL=edit.js.map

//# sourceMappingURL=edit.js.map

//# sourceMappingURL=edit.js.map

//# sourceMappingURL=edit.js.map

//# sourceMappingURL=edit.js.map

//# sourceMappingURL=edit.js.map

//# sourceMappingURL=edit.js.map

//# sourceMappingURL=edit.js.map

//# sourceMappingURL=edit.js.map

//# sourceMappingURL=edit.js.map

//# sourceMappingURL=edit.js.map

//# sourceMappingURL=edit.js.map

//# sourceMappingURL=edit.js.map

//# sourceMappingURL=edit.js.map

//# sourceMappingURL=edit.js.map

//# sourceMappingURL=edit.js.map

//# sourceMappingURL=edit.js.map

//# sourceMappingURL=edit.js.map

//# sourceMappingURL=edit.js.map
