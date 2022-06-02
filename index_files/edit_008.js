"use strict";define("steps-edit",["jquery","U","_","i18n","popover","popup","ul-framework/range","ukit-colorpicker","tpl!share/widgets/steps/steps","tpl!share/widgets/steps/change-icon-popover","tpl!share/widgets/steps/decor-and-alignment-popover","tpl!share/widgets/steps/alignment-popover","uform","editor1","steps-view","jquery-ui-sortable","css!/css/require/widgets/stepsEdit.css"],function(e,t,s,o,n,a,i,l,r,p,d,c,h,u,v){var g=100,f=50,m=99,w={itemselector:".js-steps-elem",edit:function(){var e=this;require(["panelDialog"],function(t){e.addPlaceholders(),e.initWysiwyg(e.$el),t.show({context:e,title:e.name,templateUrl:"html/widgets/stepsForm.html",required:["steps-form"],templateData:{__:o,name:e.name,data:e.data,opts:e.options},afterOpen:function(){e.$el.addClass("edit"),e.addHandlersControls().handlersListenerEvent()},close:function(){e.$el.removeClass("edit"),e.save(function(){e.render(function(){e.$el.off(".stageHandlerEvents"),e.removeHandler(),e.popoverOpened&&(e.popoverOpened=!1,e.popover.hide())})})}}),e.overlay.show({$el:e.$el,autohide:!0,close:function(){t.hide()}})}),this.popover=new n({html:c,animation:!1,gravity:["top","bottom"]})},addPlaceholders:function(){return e(".js-editable",this.$el).each(function(){var t="title"===e(this).data("db")?"h3":"p";u.insertPlaceholder({$el:e(this),placeholder:o("constructor.begin write"),tag:t})}),this},initWysiwyg:function(t){var s="",o=this,n={initForEls:e(".js-editable",t),eventsNamespace:"widgetSteps",image:!1,useEnter:!1,defaultTag:"p",leftPanelControls:[],inlineControls:["bold","italic","link"],simpleText:!0,autosave:null,beforeClose:function(e,t){t=t.trim().replace(/&nbsp;/g,""),!t.replace(/\s/g,"").length&&s&&(t="");var n=e.attr("data-db"),a=500;"description"===n&&(a=2e3),o.data.steps[e.closest(o.itemselector).index()][n]=t.slice(0,a)}};u.on(n)},getHandlerAddSteps:function(){return'<span class="js-add-steps ul-add-steps" data-position="first"></span><span class="js-add-steps ul-add-steps" data-position="last"></span>'},handlerEditSteps:function(){return'<span class="ul-w-step-handler js-step-handler"><span class="js-w-step-drag ul-w-step-drag ul-w-step-icon"><span class="icon-content-special-dotted-2"></span><span class="icon-content-special-dotted-2"></span><span class="icon-content-special-dotted-2"></span></span> <span class="icon-content-special-remove js-step-remove ul-w-step-remove ul-w-step-icon"></span></span>'},removeHandler:function(){var e=this;e.$handlerAdd&&e.$handlerAdd.remove(),e.$handlerWidget&&e.$handlerWidget.remove(),e.$handlerSteps&&e.$handlerSteps.remove(),e.$handlerSteps=null,e.$handlerSteps=null,e.$handlerAdd=null},addHandlersControls:function(){var t=this;return this.$handlerAdd=e(this.getHandlerAddSteps()).appendTo(this.$el),this.redrawHandlerAddSteps(),this.$handlerWidget=e(d).appendTo(this.$el),this.redrawHandlerWidget(),this.$handlerSteps=e(),1!==this.data.steps.length&&e(this.itemselector).each(function(s,o){t.$handlerSteps.push(e(t.handlerEditSteps()).appendTo(e(o)))}),this.handlersListenerEvent(),this},redrawHandlerWidget:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:!1,s=this;s.$handlerWidget.find(".js-w-steps-align span").removeClass().addClass("icon-content-special-align"+s.options.alignment.slice(0,1));var o=e('.js-add-steps[data-position="first"]',s.$el),n=o.position().left,a=s.$handlerWidget.position().left,i=n+o.width(),l=a+s.$handlerWidget.width(),r=17;if(i>a&&l>n){var p=n+(l-n)+r;p&&o.css({left:p})}t&&this.$handlerWidget.find(".js-w-steps-align").addClass("active")},_getHelperSortable:function(t){var s=t.outerWidth(!0),o=t.clone(!0).addClass("start-sortable");o.css({width:s,margin:0}),this._slicedText(o);var n=e('<div class="ul-w-sort-helper js-sort-helper"></div>');return n.append(o),n.css({"background-color":"rgba(128, 128, 128, .2)",width:"auto",height:"auto","z-index":9999,position:"fixed"}),n},_slicedText:function(t){var s=e(".c-steps__elem-col__text",t),o=e(".c-steps__elem-col__title",t),n=s.html()||"",a=s.text().slice(0,g),i=o.html()||"",l=o.text().slice(0,f);return n.length>a.length&&(a+="..."),i.length>l.length&&(l+="..."),s.text(a),o.text(l),{description:n,title:i}},addSortable:function(){var s,o=this,n=e(".js-sort-steps",o.$el),a=null,i=null,l={},r={helper:function(t){return o._getHelperSortable(e(t.target).closest(o.itemselector))},handle:".js-w-step-drag",tolerance:"pointer",scroll:!1,sort:function(e){t.page.autoScrollIframeDrag(e,10,10)},start:function(t,l){n.addClass("sortable"),a=l.item.index(),i=l.placeholder.position(),s=l.placeholder.index();var r=e(".js-sort-steps",o.$el).clone(!0),p=r.addClass("c-steps-fake js-fake").empty().insertAfter(e(".js-sort-steps",o.$el));e(".js-sort-steps .js-steps-elem:not(.start-sortable, .ui-sortable-placeholder)",o.$el).each(function(){var t=e(this),s=t.clone(!0).css({left:t.position().left,top:t.position().top});t.data("clone",s).css("visibility","hidden"),"timeline"===o.name&&s.css({left:0,"padding-left":t.css("padding-left"),"padding-right":t.outerWidth(!0)-t.width()+t.position().left}),p.append(s)})},placeholder:{element:function(e){return l=o._slicedText(e),e=e.clone(!0).html(),'<div class="ul-placeholder c-steps__elem js-steps-elem">'.concat(e,"</div>")},update:function(){}},change:function(t,s){var n=e(s.placeholder);"stages"===this.name&&n.css("height",n.prev().innerHeight()),e(".js-sort-steps .js-steps-elem:not(.start-sortable, .ui-sortable-placeholder)",o.$el).each(function(){var t=e(this),s=t.position(),n="timeline"===o.name?0:s.left;e(t.data("clone")).stop(!0,!1).animate({left:n,top:s.top},300)})},stop:function(s,i){var r=e(".c-steps__elem-col__text",i.item),p=e(".c-steps__elem-col__title",i.item);l.description&&r.html(l.description),l.title&&p.html(l.title),e(".js-fake",o.$el).remove(),n.removeClass("sortable"),t.page.stopAutoscroll(),null!==a&&(o.data.steps.splice(i.item.index(),0,o.data.steps.splice(a,1)[0]),e(".js-sort-steps .js-steps-elem:not(.start-sortable, .ui-sortable-placeholder)",o.$el).each(function(t){e(this).css("visibility","visible"),e(this).find(".c-steps__elem-col__number").attr("data-count",t+1)}),o.save())}};e(".js-sort-steps",o.$el).sortable(r)},popupAddEvents:function(t){var s=this;t.$el.on("click.stageHandlerEventsPopup",".js-color-picker__pipette",function(){e(".active",e(this).parent()).removeClass("active"),e(this).addClass("active"),s.initPipette(e(this))}).on("click.stageHandlerEventsPopup",".js-color-theme",function(){var t=e(this),o=t.attr("data-type"),n=t.attr("data-option");e(".active",t.parent()).removeClass("active"),t.addClass("active"),s.options.color[o][n]=t.attr("data-val"),"text"!==o&&(s.options.color.background.customColor=""),s.redraw()}).on("change.stageHandlerEventsPopup","[ul-model]",function(){e.extend(!0,s.options,h.formParse(t.$el)),s.redraw()})},popupRemoveEvents:function(e){e&&e.$el&&e.$el.off(".stageHandlerEventsPopup"),this.redraw()},popupSetting:function(s){var n=this,l=e(s.target).closest(".js-w-edit-handler"),r=null,p=n.$el.closest(".ul-container").attr("data-theme"),d=p&&"g-theme-block-0"!==p?p:t.params.pageTheme.bgtheme;a.open({context:n,title:o("widgets.steps.decor"),wide:!1,saveBtn:!1,required:"",templateUrl:"text!html/widgets/stepsPopup.html",templateData:{__:o,siteTheme:t.params.siteTheme,blockTheme:d,data:n.data,opts:n.options,device:t.constructor.deviceMode.device,isBright:n.isBrightColor(t.hexToRgb(n.options.color.background.customColor))},$targetEl:l,afterOpenThis:function(){var e=this;i.init(),r=this,n.popoverOpened&&(n.popoverOpened=!1,n.popover.hide()),setTimeout(function(){e.$el.css("left",e.$el.position().left+24+"px")},0),n.popupAddEvents(r)},beforeClose:function(){n.popupRemoveEvents(r)}})},popoverShow:function(){var t=this;t.popoverOpened?(t.popoverOpened=!1,t.popover.hide()):(e(this).addClass("active"),t.popoverOpened=!0,t.popover.show({$target:e(".align-popover-helper"),onAfterOpen:function(){t.popover.$root.find(".js-popup-align").removeClass("active").end().find('.js-popup-align[data-align="'+t.options.alignment+'"]').addClass("active").end().on("click.popupAlign",".js-popup-align",function(){t.options.alignment=e(this).data("align"),t.popover.$root.find(".js-popup-align").removeClass("active"),e(this).addClass("active"),t.redraw(function(){t.redrawHandlerWidget(!0)})})},onBeforeClose:function(){t.popover.$root.off(".popupAlign"),e(".js-w-steps-align").removeClass("active")}}))},handlersListenerEvent:function(){var t=this;return t.addSortable(),t.$el.off(".stageHandlerEvents").on("mouseover.stageHandlerEvents",".js-steps-elem",function(){e(".js-step-handler",e(this)).addClass("hover"),t.popoverOpened&&(t.popoverOpened=!1,t.popover.hide())}).on("mouseout.stageHandlerEvents",".js-steps-elem",function(){e(".js-step-handler",e(this)).removeClass("hover")}).on("click.stageHandlerEvents",".js-w-steps-design-settings",function(s){e(this).addClass("active"),t.popupSetting(s)}).on("click.stageHandlerEvents",".js-w-steps-align",function(s){e(this).addClass("active"),t.popoverShow(s)}).on("click.stageHandlerEvents",".js-step-remove",function(){t.removeStep(e(this).closest(".js-steps-elem").index())}).on("click.stageHandlerEvents",".js-add-steps",function(){t.addNewStep(e(this).attr("data-position"))}).on("mouseover.stageHandlerEvents",".js-number--type-icon",function(){return clearTimeout(t.changeIconPopoverTimeout),t.changeIconPopover?void t.changeIconPopover.show():(t.changeIconPopover=new n({gravity:["bottom"],$target:e(this),$parent:e(this),html:p,templateData:{i18n:o}}),void t.changeIconPopover.show())}).on("click.stageHandlerEvents",".js-change-icon",function(){var s=e(this).closest(".js-steps-elem"),o=s.index();require(["widget-icon-dialog"],function(n){n.open({context:t,iconData:{iconSet:t.options.icon.iconSet},$targetEl:e(".js-number--type-icon",s),targetSelector:".js-number--type-icon",showUpload:!0,getIcon:function(e,s,n,a,i){"class"===i?(t.data.steps[o].icon["class"]=a+" "+e,t.data.steps[o].icon.content=""):"content"===i&&(t.data.steps[o].icon["class"]=a,t.data.steps[o].icon.content=e),"image-icon"!==s||i.length||(n.length||(n="custom-icon"),t.data.steps[o].icon.content=e,t.data.steps[o].icon["class"]=""),t.data.steps[o].icon.set=n,t.redraw()}})})}).on("mouseout.stageHandlerEvents",".js-number--type-icon",function(){t.changeIconPopoverTimeout=setTimeout(function(){t.changeIconPopover&&(t.changeIconPopover.hide(),t.changeIconPopover=null)},100)}),this},initPipette:function(s){var o=this,n=s.offset(),a=n.top+s.outerHeight()+12,i=n.left-10,l=e('<div class="ul-colorpicker-layout"><div class="ul-colorpicker"></div></div>').appendTo("body"),r=e(".ul-colorpicker",l).css({top:a,left:i});r.ColorPicker({color:s.attr("data-color"),flat:!0,onHide:function(){setTimeout(function(){l.remove()},0)},onChange:t.limiter(function(e,t,n){o.options.color.background.customColor="#"+t,s.css("background",o.options.color.background.customColor).attr("data-color",o.options.color.background.customColor).find("span").css("color",o.isBrightColor(n.r,n.g,n.b)?"#000":"#fff"),o.save(o.render())},100)}),r.offset().top+r.outerHeight()>e(window).height()&&r.css({top:n.top-r.outerHeight()-12}).attr("data-position","top"),r.ColorPickerShow()},removeStep:function(t){var s=this;s.data.steps.length<2||(e(".js-add-steps",s.$el).show(),s.data.steps.splice(t,1),s.redraw())},addNewStep:function(e){var t=this;if(!(t.data.steps.length>=m)){var s={title:o("widgets.steps.defaults.title"),description:o("widgets.steps.defaults.description"),time:o("widgets.steps.defaults.time"),icon:{"class":"icmn icmn-sun",content:"",set:"icoMoon"}};"last"===e?t.data.steps.push(s):t.data.steps.unshift(s),t.redraw()}},redraw:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:function(){},t=this;t.save(function(){u.off("widgetSteps"),t.render(function(){t.$el.addClass("edit"),t.addHandlersControls(),t.initWysiwyg(t.$el),e()})})},isBrightColor:function(e,t,s){return(.299*e+.587*t+.114*s)/255>.5},_getRenderParams:function(e){var t=this;e(null,{contentHtml:s.template(r,t)})},initView:function(e){v.open(e)}};return w});
//# sourceMappingURL=edit.js.map

//# sourceMappingURL=edit.js.map

//# sourceMappingURL=edit.js.map

//# sourceMappingURL=edit.js.map

//# sourceMappingURL=edit.js.map

//# sourceMappingURL=edit.js.map

//# sourceMappingURL=edit.js.map

//# sourceMappingURL=edit.js.map

//# sourceMappingURL=edit.js.map

//# sourceMappingURL=edit.js.map

//# sourceMappingURL=edit.js.map

//# sourceMappingURL=edit.js.map

//# sourceMappingURL=edit.js.map

//# sourceMappingURL=edit.js.map

//# sourceMappingURL=edit.js.map

//# sourceMappingURL=edit.js.map

//# sourceMappingURL=edit.js.map

//# sourceMappingURL=edit.js.map

//# sourceMappingURL=edit.js.map

//# sourceMappingURL=edit.js.map

//# sourceMappingURL=edit.js.map

//# sourceMappingURL=edit.js.map

//# sourceMappingURL=edit.js.map

//# sourceMappingURL=edit.js.map

//# sourceMappingURL=edit.js.map

//# sourceMappingURL=edit.js.map

//# sourceMappingURL=edit.js.map

//# sourceMappingURL=edit.js.map

//# sourceMappingURL=edit.js.map

//# sourceMappingURL=edit.js.map

//# sourceMappingURL=edit.js.map

//# sourceMappingURL=edit.js.map

//# sourceMappingURL=edit.js.map

//# sourceMappingURL=edit.js.map

//# sourceMappingURL=edit.js.map

//# sourceMappingURL=edit.js.map

//# sourceMappingURL=edit.js.map

//# sourceMappingURL=edit.js.map

//# sourceMappingURL=edit.js.map

//# sourceMappingURL=edit.js.map

//# sourceMappingURL=edit.js.map

//# sourceMappingURL=edit.js.map

//# sourceMappingURL=edit.js.map

//# sourceMappingURL=edit.js.map

//# sourceMappingURL=edit.js.map

//# sourceMappingURL=edit.js.map

//# sourceMappingURL=edit.js.map

//# sourceMappingURL=edit.js.map

//# sourceMappingURL=edit.js.map

//# sourceMappingURL=edit.js.map

//# sourceMappingURL=edit.js.map

//# sourceMappingURL=edit.js.map

//# sourceMappingURL=edit.js.map

//# sourceMappingURL=edit.js.map

//# sourceMappingURL=edit.js.map

//# sourceMappingURL=edit.js.map

//# sourceMappingURL=edit.js.map

//# sourceMappingURL=edit.js.map

//# sourceMappingURL=edit.js.map

//# sourceMappingURL=edit.js.map

//# sourceMappingURL=edit.js.map

//# sourceMappingURL=edit.js.map

//# sourceMappingURL=edit.js.map

//# sourceMappingURL=edit.js.map

//# sourceMappingURL=edit.js.map

//# sourceMappingURL=edit.js.map

//# sourceMappingURL=edit.js.map

//# sourceMappingURL=edit.js.map

//# sourceMappingURL=edit.js.map

//# sourceMappingURL=edit.js.map

//# sourceMappingURL=edit.js.map

//# sourceMappingURL=edit.js.map

//# sourceMappingURL=edit.js.map

//# sourceMappingURL=edit.js.map

//# sourceMappingURL=edit.js.map

//# sourceMappingURL=edit.js.map

//# sourceMappingURL=edit.js.map

//# sourceMappingURL=edit.js.map

//# sourceMappingURL=edit.js.map

//# sourceMappingURL=edit.js.map

//# sourceMappingURL=edit.js.map

//# sourceMappingURL=edit.js.map

//# sourceMappingURL=edit.js.map

//# sourceMappingURL=edit.js.map

//# sourceMappingURL=edit.js.map

//# sourceMappingURL=edit.js.map

//# sourceMappingURL=edit.js.map

//# sourceMappingURL=edit.js.map

//# sourceMappingURL=edit.js.map

//# sourceMappingURL=edit.js.map

//# sourceMappingURL=edit.js.map

//# sourceMappingURL=edit.js.map

//# sourceMappingURL=edit.js.map

//# sourceMappingURL=edit.js.map

//# sourceMappingURL=edit.js.map

//# sourceMappingURL=edit.js.map

//# sourceMappingURL=edit.js.map

//# sourceMappingURL=edit.js.map

//# sourceMappingURL=edit.js.map

//# sourceMappingURL=edit.js.map

//# sourceMappingURL=edit.js.map

//# sourceMappingURL=edit.js.map

//# sourceMappingURL=edit.js.map

//# sourceMappingURL=edit.js.map

//# sourceMappingURL=edit.js.map

//# sourceMappingURL=edit.js.map

//# sourceMappingURL=edit.js.map

//# sourceMappingURL=edit.js.map

//# sourceMappingURL=edit.js.map

//# sourceMappingURL=edit.js.map

//# sourceMappingURL=edit.js.map

//# sourceMappingURL=edit.js.map

//# sourceMappingURL=edit.js.map

//# sourceMappingURL=edit.js.map

//# sourceMappingURL=edit.js.map

//# sourceMappingURL=edit.js.map

//# sourceMappingURL=edit.js.map

//# sourceMappingURL=edit.js.map

//# sourceMappingURL=edit.js.map

//# sourceMappingURL=edit.js.map

//# sourceMappingURL=edit.js.map

//# sourceMappingURL=edit.js.map

//# sourceMappingURL=edit.js.map

//# sourceMappingURL=edit.js.map

//# sourceMappingURL=edit.js.map

//# sourceMappingURL=edit.js.map

//# sourceMappingURL=edit.js.map

//# sourceMappingURL=edit.js.map

//# sourceMappingURL=edit.js.map

//# sourceMappingURL=edit.js.map

//# sourceMappingURL=edit.js.map

//# sourceMappingURL=edit.js.map

//# sourceMappingURL=edit.js.map

//# sourceMappingURL=edit.js.map

//# sourceMappingURL=edit.js.map

//# sourceMappingURL=edit.js.map

//# sourceMappingURL=edit.js.map

//# sourceMappingURL=edit.js.map

//# sourceMappingURL=edit.js.map

//# sourceMappingURL=edit.js.map

//# sourceMappingURL=edit.js.map

//# sourceMappingURL=edit.js.map

//# sourceMappingURL=edit.js.map

//# sourceMappingURL=edit.js.map

//# sourceMappingURL=edit.js.map

//# sourceMappingURL=edit.js.map

//# sourceMappingURL=edit.js.map

//# sourceMappingURL=edit.js.map

//# sourceMappingURL=edit.js.map

//# sourceMappingURL=edit.js.map

//# sourceMappingURL=edit.js.map

//# sourceMappingURL=edit.js.map

//# sourceMappingURL=edit.js.map

//# sourceMappingURL=edit.js.map

//# sourceMappingURL=edit.js.map

//# sourceMappingURL=edit.js.map

//# sourceMappingURL=edit.js.map

//# sourceMappingURL=edit.js.map

//# sourceMappingURL=edit.js.map

//# sourceMappingURL=edit.js.map

//# sourceMappingURL=edit.js.map

//# sourceMappingURL=edit.js.map

//# sourceMappingURL=edit.js.map

//# sourceMappingURL=edit.js.map

//# sourceMappingURL=edit.js.map

//# sourceMappingURL=edit.js.map

//# sourceMappingURL=edit.js.map

//# sourceMappingURL=edit.js.map

//# sourceMappingURL=edit.js.map

//# sourceMappingURL=edit.js.map

//# sourceMappingURL=edit.js.map

//# sourceMappingURL=edit.js.map

//# sourceMappingURL=edit.js.map

//# sourceMappingURL=edit.js.map

//# sourceMappingURL=edit.js.map

//# sourceMappingURL=edit.js.map

//# sourceMappingURL=edit.js.map

//# sourceMappingURL=edit.js.map

//# sourceMappingURL=edit.js.map

//# sourceMappingURL=edit.js.map

//# sourceMappingURL=edit.js.map

//# sourceMappingURL=edit.js.map

//# sourceMappingURL=edit.js.map

//# sourceMappingURL=edit.js.map

//# sourceMappingURL=edit.js.map

//# sourceMappingURL=edit.js.map

//# sourceMappingURL=edit.js.map

//# sourceMappingURL=edit.js.map

//# sourceMappingURL=edit.js.map

//# sourceMappingURL=edit.js.map

//# sourceMappingURL=edit.js.map

//# sourceMappingURL=edit.js.map

//# sourceMappingURL=edit.js.map

//# sourceMappingURL=edit.js.map

//# sourceMappingURL=edit.js.map

//# sourceMappingURL=edit.js.map

//# sourceMappingURL=edit.js.map

//# sourceMappingURL=edit.js.map

//# sourceMappingURL=edit.js.map

//# sourceMappingURL=edit.js.map

//# sourceMappingURL=edit.js.map

//# sourceMappingURL=edit.js.map

//# sourceMappingURL=edit.js.map

//# sourceMappingURL=edit.js.map

//# sourceMappingURL=edit.js.map

//# sourceMappingURL=edit.js.map

//# sourceMappingURL=edit.js.map

//# sourceMappingURL=edit.js.map

//# sourceMappingURL=edit.js.map

//# sourceMappingURL=edit.js.map

//# sourceMappingURL=edit.js.map

//# sourceMappingURL=edit.js.map

//# sourceMappingURL=edit.js.map

//# sourceMappingURL=edit.js.map

//# sourceMappingURL=edit.js.map

//# sourceMappingURL=edit.js.map

//# sourceMappingURL=edit.js.map

//# sourceMappingURL=edit.js.map

//# sourceMappingURL=edit.js.map

//# sourceMappingURL=edit.js.map

//# sourceMappingURL=edit.js.map

//# sourceMappingURL=edit.js.map

//# sourceMappingURL=edit.js.map

//# sourceMappingURL=edit.js.map

//# sourceMappingURL=edit.js.map

//# sourceMappingURL=edit.js.map

//# sourceMappingURL=edit.js.map

//# sourceMappingURL=edit.js.map

//# sourceMappingURL=edit.js.map

//# sourceMappingURL=edit.js.map

//# sourceMappingURL=edit.js.map

//# sourceMappingURL=edit.js.map

//# sourceMappingURL=edit.js.map

//# sourceMappingURL=edit.js.map

//# sourceMappingURL=edit.js.map

//# sourceMappingURL=edit.js.map

//# sourceMappingURL=edit.js.map

//# sourceMappingURL=edit.js.map

//# sourceMappingURL=edit.js.map

//# sourceMappingURL=edit.js.map

//# sourceMappingURL=edit.js.map

//# sourceMappingURL=edit.js.map

//# sourceMappingURL=edit.js.map

//# sourceMappingURL=edit.js.map

//# sourceMappingURL=edit.js.map

//# sourceMappingURL=edit.js.map

//# sourceMappingURL=edit.js.map

//# sourceMappingURL=edit.js.map

//# sourceMappingURL=edit.js.map

//# sourceMappingURL=edit.js.map

//# sourceMappingURL=edit.js.map

//# sourceMappingURL=edit.js.map

//# sourceMappingURL=edit.js.map

//# sourceMappingURL=edit.js.map

//# sourceMappingURL=edit.js.map

//# sourceMappingURL=edit.js.map
