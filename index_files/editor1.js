"use strict";function _typeof(e){return(_typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}define("editor1",["U","i18n","editApi","panelDialog","imagelib","popover","link","linkPopover","stickyPopup","dynamicText"],function(e,t,o,i,n,r,l,a,s,p){var d={opt:null,initedNamespace:null,_formats:{h1:{tag:"h1",title:t("constructor.editor.header1")},h2:{tag:"h2",title:t("constructor.editor.header2")},h3:{tag:"h3",title:t("constructor.editor.header3")},h4:{tag:"h4",title:t("constructor.editor.header4")},p:{tag:"p",title:t("constructor.editor.normal")},h5:{tag:"h5",title:t("constructor.editor.important")},h6:{tag:"h6",title:t("constructor.editor.note")}},_initOptions:function(o){var i="",n=o.colorsInheritFromWrapper;if(n)i=o.$el.closest(n).attr("class");else{var r=o.$el.closest(".ul-container").attr("data-theme");i="g-theme-block-0"===r?$("#body-fict").attr("class"):r}var l=["bold","italic","underline","strike","link"],a=e.params.siteCustomField;e.params.isULanding&&a&&a.dynamicText&&l.push("dynamictext"),this.opt=$.extend({$el:null,btnDebbuger:!1,image:o.$el.closest("footer, header").length?!1:Boolean(o.$el.closest("[data-image]").attr("data-image"))||!1,links:!0,leftPanelControls:["format","colors","bold","italic","underline","strike","link","align","alignFull","lists"],formats:[this._formats.h2,this._formats.h3,this._formats.h4,this._formats.p,this._formats.h5,this._formats.h6],inlineControls:l,imageControls:["imgEdit","link","separator","align","separator","remove"],blockTheme:null==i?$("#body-fict").attr("class"):i,siteTheme:$("#body").attr("class"),useEnter:!0,defaultTag:"p",placeholder:t("constructor.begin write"),widgetName:t("widgets.wysiwyg.name"),autosave:1e4,simpleText:!1,deinitInsertPlaceholder:!0,initForEls:"",textlimit:100,linkTypes:["outer","inner"],save:function(){},linkPopoverShow:function(){},linkPopoverHide:function(){},beforeOpen:function(){},afterOpen:function(){},beforeClose:function(){},afterClose:function(){},onKeydown:function(){},changeHtml:function(){},_setOptions:function(e){return e},siteCustomFields:a},o)},on:function(e){var t=this;if(e.initForEls&&e.initForEls.length){e.eventsNamespace||(e.eventsNamespace="editorInit");var o=e.eventsNamespace;$(document).off("mousedown.editorEv-"+o).on("mousedown.editorEv-"+o,function(i){var n=$(i.target);if(!(e.ignoredElements&&n.closest(e.ignoredElements).length||n.closest(".js-editableWithEditor").length)){var r=n.closest(e.initForEls);if(r.length){if(!r.hasClass("ul-editableWithEditor")){t.opt&&t.opt.$el&&null!=t.initedNamespace&&t.deinit(),e.$el=r;var l=null;"placeholder"!==r.attr("placeholder")&&(l=r.attr("placeholder")),e.placeholder=l||e.placeholder,t.init(e),t.initedNamespace=o}}else o==t.initedNamespace&&(t.initedNamespace=null,t.deinit())}})}},off:function(e){var t=this;$(document).off("mousedown.editorEv-"+e),t.deinit()},init:function(t){var i=this;if(t.$el.closest(".ul-widget").length&&t.$el.closest(".ul-widget").hasClass("js-w-remove"))return!1;i._initOptions(t),i._initOptions(i.opt._setOptions(t)),i.opt.beforeOpen(),i._createPanelsPopovers(),i._addEvents(),i._initApi(),i.opt.$el.addClass("ul-editableWithEditor"),i.oldData=o.text.getData(),i.opt.autosave&&(i.autosaveTimer=setInterval(function(){if(!o.text.stopped){var e=o.text.getData();e!==i.oldData&&(i.oldData=e,i.opt.save(e))}},i.opt.autosave));var n=e.params.siteCustomField;e.params.isULanding&&n&&n.dynamicText&&p.init(i.opt.$el,i.popover),i.opt.afterOpen.call(window,i.opt.$el)},setFocusToEnd:function(){o.text.setFocusToEnd()},_initApi:function(){var e=this;o.text.init({$el:e.opt.$el,useEnter:e.opt.useEnter,defaultTag:e.opt.defaultTag,placeholder:e.opt.placeholder,deinitInsertPlaceholder:e.opt.deinitInsertPlaceholder,textlimit:e.opt.textlimit,simpleText:e.opt.simpleText,changeHtml:e.opt.changeHtml,inlineControls:!("object"!==_typeof(e.opt.imageControls)||!e.opt.imageControls.length),cbApplyProp:function(){e.linkPopover&&e.linkPopover.hide()},cbBeforeMouseDown:function(){e.linkPopover&&e.linkPopover.hide()},cbMouseDown:function(){e.popover&&e.popover.hide(),e.linkPopover&&e.linkPopover.hide()},cbMouseUp:function(t,i,n){if(i){var r=t.closest("a");r.length&&!r.find("img").length&&e.linkPopover&&(e.linkPopover.show({$target:r,onAfterOpen:function(){setTimeout(function(){window.getSelection().isCollapsed||e.linkPopover.hide()},0)}}),e.linkPopover.setCurrent({url:null==r?"":r.attr("href"),newWindow:null==r||"_blank"==r.attr("target")},!0))}else{var l=o.text._selection.getSelectedNodes().some(function(e){return e&&1==e.nodeType&&"IMG"===e.nodeName});if(l)return;e.popover&&e.popover.show({position:n,onAfterOpen:function(){e.linkPopover&&e.linkPopover.hide()}})}},cbKeyDown:function(t,i){var n=o.text._selection.getSelectedNodes().some(function(e){return e&&1==e.nodeType&&"IMG"===e.nodeName});e.linkPopover&&e.linkPopover.hide(),n||(e.opt.onKeydown(t),e.popover&&(t?e.popover.hide():e.popover.show({position:i})))}})},_addEvents:function(){var e=this;$(document).on("apiImgShowControls.editor",function(t,o){e.imgPopover&&e.imgPopover.show({$target:o.$img}),e.popover&&e.popover.hide()}).on("apiImgHideControls.editor",function(){e.imgPopover&&e.imgPopover.hide()}).on("click.editor",".js-editor-controls [data-cmd]",function(t){var i=!1;return e.linkPopoverVisible?(t.preventDefault(),!1):(1!=o.currentEdit.image&&(i=o.text._selection.getSelectedNodes().some(function(e){return e&&1==e.nodeType&&"IMG"===e.nodeName})),i?!1:(e.apply($(this).attr("data-cmd"),$(this).attr("data-val")),void setTimeout(function(){e.popover&&(window.getSelection().isCollapsed?e.popover.hide():e.popover.show({position:o.text._selection.selectionRect}))},0)))}).on("apiLightControls.editor",function(e,t){var o=$(".js-editor-controls");$("[data-cmd]",o).removeClass("active").removeAttr("checked"),Object.keys(t).forEach(function(e){var i=$();i=t[e].length?$('[data-cmd="'+e+'"][data-val="'+t[e]+'"]',o):$('[data-cmd="'+e+'"]',o),i.each(function(){"INPUT"==this.tagName?$(this).prop("checked",!0):$(this).addClass("active")})})}).on("click.editor",".js-header-tag",function(){var i=$(this),n=e.opt.$el.closest(".ul-widget");i.addClass("edit"),s.open({title:t("constructor.thin settings"),templateUrl:"text!/widgets/wysiwyg/additionalEditorTag.html",templateData:{tag:n.attr("data-tag")||"h1",__:t},$targetEl:i,wide:!1,saveBtn:!1,afterOpen:function(){s.$container.addClass("js-editableWithEditor"),o.text._selection.save(),o.text.stop(),this.$radio=$('.js-editor-replaceTag input[type="radio"]'),this.$radio.on("change.additional",function(){n.attr("data-tag",$(this).val())}),e.popover.hide(),e.linkPopover.hide()},close:function(){s.$container.removeClass("js-editableWithEditor"),o.text["continue"](),o.text._selection.restore(),i.removeClass("edit"),this.$radio.off(".additional")}})})},_createPanelsPopovers:function(){var e=this;"object"===_typeof(e.opt.leftPanelControls)&&e.opt.leftPanelControls.length&&(i.show({required:[""],templateUrl:"/widgets/wysiwyg/additionalEditor1.html",templateCss:["/css/require/widgets/editorAdditional1.css"],templateData:{__:t,opts:e.opt},afterOpen:e.opt.leftPanelAfterOpen}),$("#ul-left-menu").addClass("js-editableWithEditor")),"object"===_typeof(e.opt.inlineControls)&&e.opt.inlineControls.length&&(e.popover=new r({screen:e.opt.$el,gravity:["top","bottom"],templateData:{controls:e.opt.inlineControls},templateUrl:"/widgets/wysiwyg/editorControls1.html",onAfterOpen:function(){e.linkPopover&&e.linkPopover.hide()}}),e.popover.$el.addClass("js-editableWithEditor")),"object"===_typeof(e.opt.imageControls)&&e.opt.imageControls.length&&e.opt.image&&(e.imgPopover=new r({screen:e.opt.$el,gravity:["top","bottom"],templateData:{controls:e.opt.imageControls},templateUrl:"/widgets/wysiwyg/editorControls1.html",onAfterOpen:function(){e.linkPopover&&e.linkPopover.hide()}}),e.imgPopover.$el.addClass("js-editableWithEditor")),e.opt.links&&(e.linkPopover=new a({screen:d.opt.$el,types:e.opt.linkTypes,removeBtn:!0,customEvents:!0,onEdit:function(){e.apply("link","dialog")},onRemove:function(){e.apply("link","dialog"),$(document).trigger("editorSetLink",{href:""})},apply:function(e){$(document).trigger("editorSetLink",e)},cbHide:function(){e.linkPopoverVisible&&(e.linkPopoverInsertCbClose&&e.linkPopoverInsertCbClose(),e.linkPopoverVisible=!1,e.opt.linkPopoverHide())},cbShow:function(){e.opt.linkPopoverShow(),e.linkPopoverVisible=!0,e.linkPopover.popover.$el.addClass("js-editableWithEditor")}}))},apply:function(e,t){"dialog"==t?(this._insert[e](),this.popover&&this.popover.hide(),this.imgPopover&&this.imgPopover.hide()):o.apply(e,t)},_insert:{link:function(){o.insert({type:"link",open:function(e,t,o){d.popover&&d.popover.hide(),d.imgPopover&&d.imgPopover.hide(),null==o.$link?(d.linkPopover.setCurrent({url:null,newWindow:!1},!0),d.linkPopover._switchPage("edit","inner")):(d.linkPopover.setCurrent({url:o.$link.attr("href"),newWindow:"_blank"==o.$link.attr("target")},!0),d.linkPopover._switchPage("edit")),d.linkPopover.show({$target:o.$target}),d.linkPopoverInsertCbClose=t,$(document).one("editorSetLink.insert",function(t,o){e(o)})},close:function(){$(document).off(".insert"),d.linkPopoverInsertCbClose=null}})},image:function(){o.insert({type:"image",open:function(e,t){return d.popover&&d.popover.hide(),d.imgPopover&&d.imgPopover.hide(),n.open({multiSelect:!1,apply:function(t){e(t[0].origin)},close:function(){t()}}),$("#ul-imagelib").addClass("js-editableWithEditor"),$("#ul-imagelib")}})}},insertPlaceholder:function(e){o.text.insertPlaceholder(e)},save:function(){var e=this;e.opt.save(o.text.getData())},deinit:function(){var t=this;if(t.opt&&null!=t.opt){var n=e.params.siteCustomField;e.params.isULanding&&n&&n.dynamicText&&p.deinit();var r=o.text.getData();t.opt.beforeClose(t.opt.$el,r),t.opt.$el.removeClass("ul-editableWithEditor"),$(document).off(".editor"),$(document).off("apiLightControls.editor"),t.linkPopover&&t.opt.links&&(t.linkPopover.destroy(),t.linkPopover=null),"object"===_typeof(t.opt.leftPanelControls)&&t.opt.leftPanelControls.length&&i.hide(),t.imgPopover&&(t.imgPopover.hide(),t.imgPopover=null),t.popover&&(t.popover.hide(),t.popover=null),$("#ul-left-menu").removeClass("js-editableWithEditor");var l=o.text.getData();clearInterval(t.autosaveTimer),t.opt.save(l),t.opt.afterClose(),t.opt=null,o.text.deinit()}}};return d});
//# sourceMappingURL=editor1.js.map

//# sourceMappingURL=editor1.js.map

//# sourceMappingURL=editor1.js.map

//# sourceMappingURL=editor1.js.map

//# sourceMappingURL=editor1.js.map

//# sourceMappingURL=editor1.js.map

//# sourceMappingURL=editor1.js.map

//# sourceMappingURL=editor1.js.map

//# sourceMappingURL=editor1.js.map

//# sourceMappingURL=editor1.js.map

//# sourceMappingURL=editor1.js.map

//# sourceMappingURL=editor1.js.map

//# sourceMappingURL=editor1.js.map

//# sourceMappingURL=editor1.js.map

//# sourceMappingURL=editor1.js.map

//# sourceMappingURL=editor1.js.map

//# sourceMappingURL=editor1.js.map

//# sourceMappingURL=editor1.js.map

//# sourceMappingURL=editor1.js.map

//# sourceMappingURL=editor1.js.map

//# sourceMappingURL=editor1.js.map

//# sourceMappingURL=editor1.js.map

//# sourceMappingURL=editor1.js.map

//# sourceMappingURL=editor1.js.map

//# sourceMappingURL=editor1.js.map

//# sourceMappingURL=editor1.js.map

//# sourceMappingURL=editor1.js.map

//# sourceMappingURL=editor1.js.map

//# sourceMappingURL=editor1.js.map

//# sourceMappingURL=editor1.js.map

//# sourceMappingURL=editor1.js.map

//# sourceMappingURL=editor1.js.map

//# sourceMappingURL=editor1.js.map

//# sourceMappingURL=editor1.js.map

//# sourceMappingURL=editor1.js.map

//# sourceMappingURL=editor1.js.map

//# sourceMappingURL=editor1.js.map

//# sourceMappingURL=editor1.js.map

//# sourceMappingURL=editor1.js.map

//# sourceMappingURL=editor1.js.map

//# sourceMappingURL=editor1.js.map

//# sourceMappingURL=editor1.js.map

//# sourceMappingURL=editor1.js.map

//# sourceMappingURL=editor1.js.map

//# sourceMappingURL=editor1.js.map

//# sourceMappingURL=editor1.js.map

//# sourceMappingURL=editor1.js.map

//# sourceMappingURL=editor1.js.map

//# sourceMappingURL=editor1.js.map

//# sourceMappingURL=editor1.js.map

//# sourceMappingURL=editor1.js.map

//# sourceMappingURL=editor1.js.map

//# sourceMappingURL=editor1.js.map

//# sourceMappingURL=editor1.js.map

//# sourceMappingURL=editor1.js.map

//# sourceMappingURL=editor1.js.map

//# sourceMappingURL=editor1.js.map

//# sourceMappingURL=editor1.js.map

//# sourceMappingURL=editor1.js.map

//# sourceMappingURL=editor1.js.map

//# sourceMappingURL=editor1.js.map

//# sourceMappingURL=editor1.js.map

//# sourceMappingURL=editor1.js.map

//# sourceMappingURL=editor1.js.map

//# sourceMappingURL=editor1.js.map

//# sourceMappingURL=editor1.js.map

//# sourceMappingURL=editor1.js.map

//# sourceMappingURL=editor1.js.map

//# sourceMappingURL=editor1.js.map

//# sourceMappingURL=editor1.js.map

//# sourceMappingURL=editor1.js.map

//# sourceMappingURL=editor1.js.map

//# sourceMappingURL=editor1.js.map

//# sourceMappingURL=editor1.js.map

//# sourceMappingURL=editor1.js.map

//# sourceMappingURL=editor1.js.map

//# sourceMappingURL=editor1.js.map

//# sourceMappingURL=editor1.js.map

//# sourceMappingURL=editor1.js.map

//# sourceMappingURL=editor1.js.map

//# sourceMappingURL=editor1.js.map

//# sourceMappingURL=editor1.js.map

//# sourceMappingURL=editor1.js.map

//# sourceMappingURL=editor1.js.map

//# sourceMappingURL=editor1.js.map

//# sourceMappingURL=editor1.js.map

//# sourceMappingURL=editor1.js.map

//# sourceMappingURL=editor1.js.map

//# sourceMappingURL=editor1.js.map

//# sourceMappingURL=editor1.js.map

//# sourceMappingURL=editor1.js.map

//# sourceMappingURL=editor1.js.map

//# sourceMappingURL=editor1.js.map

//# sourceMappingURL=editor1.js.map

//# sourceMappingURL=editor1.js.map

//# sourceMappingURL=editor1.js.map

//# sourceMappingURL=editor1.js.map

//# sourceMappingURL=editor1.js.map

//# sourceMappingURL=editor1.js.map

//# sourceMappingURL=editor1.js.map

//# sourceMappingURL=editor1.js.map

//# sourceMappingURL=editor1.js.map

//# sourceMappingURL=editor1.js.map

//# sourceMappingURL=editor1.js.map

//# sourceMappingURL=editor1.js.map

//# sourceMappingURL=editor1.js.map

//# sourceMappingURL=editor1.js.map

//# sourceMappingURL=editor1.js.map

//# sourceMappingURL=editor1.js.map

//# sourceMappingURL=editor1.js.map

//# sourceMappingURL=editor1.js.map

//# sourceMappingURL=editor1.js.map

//# sourceMappingURL=editor1.js.map

//# sourceMappingURL=editor1.js.map

//# sourceMappingURL=editor1.js.map

//# sourceMappingURL=editor1.js.map

//# sourceMappingURL=editor1.js.map

//# sourceMappingURL=editor1.js.map

//# sourceMappingURL=editor1.js.map

//# sourceMappingURL=editor1.js.map

//# sourceMappingURL=editor1.js.map

//# sourceMappingURL=editor1.js.map

//# sourceMappingURL=editor1.js.map

//# sourceMappingURL=editor1.js.map

//# sourceMappingURL=editor1.js.map

//# sourceMappingURL=editor1.js.map

//# sourceMappingURL=editor1.js.map

//# sourceMappingURL=editor1.js.map

//# sourceMappingURL=editor1.js.map

//# sourceMappingURL=editor1.js.map

//# sourceMappingURL=editor1.js.map

//# sourceMappingURL=editor1.js.map

//# sourceMappingURL=editor1.js.map

//# sourceMappingURL=editor1.js.map

//# sourceMappingURL=editor1.js.map

//# sourceMappingURL=editor1.js.map

//# sourceMappingURL=editor1.js.map

//# sourceMappingURL=editor1.js.map

//# sourceMappingURL=editor1.js.map

//# sourceMappingURL=editor1.js.map

//# sourceMappingURL=editor1.js.map

//# sourceMappingURL=editor1.js.map

//# sourceMappingURL=editor1.js.map

//# sourceMappingURL=editor1.js.map

//# sourceMappingURL=editor1.js.map

//# sourceMappingURL=editor1.js.map

//# sourceMappingURL=editor1.js.map

//# sourceMappingURL=editor1.js.map

//# sourceMappingURL=editor1.js.map

//# sourceMappingURL=editor1.js.map

//# sourceMappingURL=editor1.js.map

//# sourceMappingURL=editor1.js.map

//# sourceMappingURL=editor1.js.map

//# sourceMappingURL=editor1.js.map

//# sourceMappingURL=editor1.js.map

//# sourceMappingURL=editor1.js.map

//# sourceMappingURL=editor1.js.map

//# sourceMappingURL=editor1.js.map

//# sourceMappingURL=editor1.js.map

//# sourceMappingURL=editor1.js.map

//# sourceMappingURL=editor1.js.map

//# sourceMappingURL=editor1.js.map

//# sourceMappingURL=editor1.js.map

//# sourceMappingURL=editor1.js.map

//# sourceMappingURL=editor1.js.map

//# sourceMappingURL=editor1.js.map

//# sourceMappingURL=editor1.js.map

//# sourceMappingURL=editor1.js.map

//# sourceMappingURL=editor1.js.map

//# sourceMappingURL=editor1.js.map

//# sourceMappingURL=editor1.js.map

//# sourceMappingURL=editor1.js.map

//# sourceMappingURL=editor1.js.map

//# sourceMappingURL=editor1.js.map

//# sourceMappingURL=editor1.js.map

//# sourceMappingURL=editor1.js.map

//# sourceMappingURL=editor1.js.map

//# sourceMappingURL=editor1.js.map

//# sourceMappingURL=editor1.js.map

//# sourceMappingURL=editor1.js.map

//# sourceMappingURL=editor1.js.map

//# sourceMappingURL=editor1.js.map

//# sourceMappingURL=editor1.js.map

//# sourceMappingURL=editor1.js.map

//# sourceMappingURL=editor1.js.map

//# sourceMappingURL=editor1.js.map

//# sourceMappingURL=editor1.js.map

//# sourceMappingURL=editor1.js.map

//# sourceMappingURL=editor1.js.map

//# sourceMappingURL=editor1.js.map

//# sourceMappingURL=editor1.js.map

//# sourceMappingURL=editor1.js.map

//# sourceMappingURL=editor1.js.map

//# sourceMappingURL=editor1.js.map

//# sourceMappingURL=editor1.js.map

//# sourceMappingURL=editor1.js.map

//# sourceMappingURL=editor1.js.map

//# sourceMappingURL=editor1.js.map

//# sourceMappingURL=editor1.js.map

//# sourceMappingURL=editor1.js.map

//# sourceMappingURL=editor1.js.map

//# sourceMappingURL=editor1.js.map

//# sourceMappingURL=editor1.js.map

//# sourceMappingURL=editor1.js.map

//# sourceMappingURL=editor1.js.map

//# sourceMappingURL=editor1.js.map

//# sourceMappingURL=editor1.js.map

//# sourceMappingURL=editor1.js.map

//# sourceMappingURL=editor1.js.map

//# sourceMappingURL=editor1.js.map

//# sourceMappingURL=editor1.js.map

//# sourceMappingURL=editor1.js.map

//# sourceMappingURL=editor1.js.map

//# sourceMappingURL=editor1.js.map

//# sourceMappingURL=editor1.js.map

//# sourceMappingURL=editor1.js.map

//# sourceMappingURL=editor1.js.map

//# sourceMappingURL=editor1.js.map
