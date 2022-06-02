"use strict";define(["require","model/pages","page","popover","U","i18n","nf","asyncjs","jquery","widget","js/edit/constructorHelpers"],function(o,e,r,t,c,a,s,i,n,l,p){var u=c.params.site,d=null;o(["constructor"],function(o){d=o});var v={init:function(o){var r=this;if(r._popover&&r.closePopover(r._popover),!o||!o.blockId||!o.$btnClicked)return void console.error("Error! Wrong opts!");var i=o.$btnClicked.closest(".ul-block-controls").addClass("ul-block-controls-visible--forced");e.load(u,function(e){var n=e.filter(function(o){return o.id!==c.params.page&&o.isEditable});if(0===n.length)return void s.notify(a("constructor.copy to page.errors.no pages for copy"),"info");var l=new t({$target:o.$btnClicked,gravity:["top","bottom"],templateUrl:"html/constructor/copyBlockToPagePopover.html",templateCss:"/css/require/pagesList.css",templateData:{pages:n,i18n:a},onAfterOpen:function(){l.$root.addClass("ul-popover-wrap--with-overlay"),l.$el.addClass("ul-popover-opacity"),r.addPopoverListeners(l,o.blockId)},onBeforeClose:function(){r.removePopoverListeners(l),i.removeClass("ul-block-controls-visible--forced")}});l.show()})},addPopoverListeners:function(o,e){var r=this;r._popover=o,o.$root.on("click.copyBlock",function(e){n(e.target).hasClass("ul-popover-wrap")&&r.closePopover(o)}),o.$el.on("click.copyBlock",".js-copy-block-popover__close",function(){r.closePopover(o)}).on("click.copyBlock",'.js-copy-block-popover__page[data-is-active="false"]',function(){n(this).attr("data-is-active","true").siblings().attr("data-is-active","false")}).on("click.copyBlock",".js-copy-block-popover__submit",function(){var t=o.$el.find('.js-copy-block-popover__page[data-is-active="true"]').attr("data-page-id");if(r.closePopover(o),t){var a=c.params.hasHeader?1:0;r.copyBlockToPage(t,e,a)}})},closePopover:function(o){var e=this;e.removePopoverListeners(o),o.hide()},removePopoverListeners:function(o){o.$root.off(".copyBlock"),o.$el.off(".copyBlock"),this._popover=null},copyBlockToPage:function(o,e,r){var t=n("#"+e),c=t.find(".ul-widget").map(function(){return n(this).attr("id")}).get();return c.length?void window.dispatch(window.actions.copyBlockToPage(c,[o,e,r])):this._realCopyBlockToPage([],o,e,r)},_realCopyBlockToPage:function(o,e,t,a){var s=this;d&&(p.lockConstructor(),p.getBlockJSON(t,o,function(o){var i="/sites/url/"+u+"/pages/id/"+e+"/edit",n=0,l=null;if(o.params.floating.enabled=!1,o.params.anchor=null,o.params.symbol={enabled:!1,forAllPages:!1,sourceBlockId:"",linkedPages:[],symbolBlockPosition:"header"},e===c.params.page)s.insertBlockToPage({sourcePageId:c.params.pageId,sourceBlockId:t,block:o,indexDrop:a});else{var p=function(){++n<2||s.insertBlockToPage({sourcePageId:c.params.pageId,sourceBlockId:t,block:o,indexDrop:a})};r.setPage(i,function(o){l=o,p()},p),c.hist.pushState({data:{url:i},title:"title",url:"/sites/url/"+u+"/pages/id/"+e+"/constructor"}),d.actionsPopover&&d.actionsPopover.hide()}}))},insertBlockToPage:function(o){d.createBlockFromBlockJSON({sourcePageId:o.sourcePageId,sourceBlockId:o.sourceBlockId,block:o.block,index:o.indexDrop},function(){}),p.unlockConstructor()}};return window.signals.copyBlockToPage.listen(function(o,e){return new Promise(function(r){v._realCopyBlockToPage.bind(v,e).apply(null,o),r()})}),{init:v.init.bind(v),copy:v.copyBlockToPage.bind(v)}});
//# sourceMappingURL=copyBlockToPage.js.map

//# sourceMappingURL=copyBlockToPage.js.map

//# sourceMappingURL=copyBlockToPage.js.map

//# sourceMappingURL=copyBlockToPage.js.map

//# sourceMappingURL=copyBlockToPage.js.map

//# sourceMappingURL=copyBlockToPage.js.map

//# sourceMappingURL=copyBlockToPage.js.map

//# sourceMappingURL=copyBlockToPage.js.map

//# sourceMappingURL=copyBlockToPage.js.map

//# sourceMappingURL=copyBlockToPage.js.map

//# sourceMappingURL=copyBlockToPage.js.map

//# sourceMappingURL=copyBlockToPage.js.map

//# sourceMappingURL=copyBlockToPage.js.map

//# sourceMappingURL=copyBlockToPage.js.map

//# sourceMappingURL=copyBlockToPage.js.map

//# sourceMappingURL=copyBlockToPage.js.map

//# sourceMappingURL=copyBlockToPage.js.map

//# sourceMappingURL=copyBlockToPage.js.map

//# sourceMappingURL=copyBlockToPage.js.map

//# sourceMappingURL=copyBlockToPage.js.map

//# sourceMappingURL=copyBlockToPage.js.map

//# sourceMappingURL=copyBlockToPage.js.map

//# sourceMappingURL=copyBlockToPage.js.map

//# sourceMappingURL=copyBlockToPage.js.map

//# sourceMappingURL=copyBlockToPage.js.map

//# sourceMappingURL=copyBlockToPage.js.map

//# sourceMappingURL=copyBlockToPage.js.map

//# sourceMappingURL=copyBlockToPage.js.map

//# sourceMappingURL=copyBlockToPage.js.map

//# sourceMappingURL=copyBlockToPage.js.map

//# sourceMappingURL=copyBlockToPage.js.map
