"use strict";define(["require","jquery","_","U","nf","i18n","js/edit/constructorHelpers"],function(t,o,e,n,a,r,s){var i={start:function(t,e){var n=o("#"+e),a=n.find(".ul-widget").map(function(){return o(this).attr("id")}).get();return a.length?void window.dispatch(window.actions.addBlockToFavorites(a,arguments)):this._realStart([],t,e)},_realStart:function(t,o,e){var a=this,r=o.closest(".ul-block-controls").addClass("ul-block-controls-visible--forced");s.lockConstructor();var i=setTimeout(function(){o.attr("data-status","in-progress")},1e3);s.getBlockJSON(e,t,function(t){t.params.floating.enabled=!1,t.params.anchor=null,t.params.symbol={enabled:!1,forAllPages:!1,sourceBlockId:"",linkedPages:[],symbolBlockPosition:"header"},a._saveFavorite(t,function(t){if(n.menu.panels.panelConstructor.addBlockToMenu("Favorite",t),a._showFlyingStar(o.offset()),clearTimeout(i),s.unlockConstructor(),o.removeAttr("data-status"),r.removeClass("ul-block-controls-visible--forced"),a._getScreenshot(t._id,function(o){n.menu.panels.panelConstructor.updateScreenshotBlock("favorites",{id:t._id,screenshotUrl:o})}),!localStorage.ukitFavoriteBlockHintWasShown){n.menu.setPanel("panelConstructor"),n.menu.panels.panelConstructor.tabs.activateTab(n.menu.$content.find('.js-panel-constructor-nav [data-content="blocks"]'));var e=n.menu.$content.find('.js-foldable[data-is-folded="true"][data-id="favorites"]');e.length&&n.menu.panels.panelConstructor.foldable.toggleFolding(e),a._showHint()}})})},_saveFavorite:function(t,e){o.ajax({url:n.sprintf("/sites/url/{siteUrl}/favoriteBlocks",[n.params.site]),method:"post",data:{content:JSON.stringify(t)},api:!0,ok:function(t){e(t)}})},_showFlyingStar:function(t){var e=o("<div>",{"class":"ul-favorite-block-animated-tip"}).css({top:t.top,left:t.left}).append('<img src="/img/special-star-stroke-shadow.svg">').appendTo("body");setTimeout(function(){e.attr("data-animate","true").css({left:124,top:160}),setTimeout(function(){e.remove()},1200)},50)},_showHint:function(){try{localStorage.ukitFavoriteBlockHintWasShown="true"}catch(n){}t(["tpl!constructor/favoriteBlocksHint","css!/css/require/favoriteBlocksHint.css","jquery-ui-position"],function(t){var n=e.template(t,{__fav:r("constructor.favorite-blocks")}),a=o("#ul-main"),s=o(n).appendTo(a).position({my:"left top",at:"left+280 top",of:a});setTimeout(function(){s.attr("data-status","visible"),o(document).one("mousedown click",function(){s.removeAttr("data-status"),setTimeout(function(){s.remove()},500)})},50)})},_getScreenshot:function(t,e){o.ajax({url:n.sprintf("/sites/url/{siteUrl}/favoriteBlocks/{id}/screenshot",[n.params.site,t]),method:"get",doNotShowAjaxError:!0,api:!0,ok:function(t){e(t)},error:function(t,o,e){throw new Error(e)}})}};return window.signals.addBlockToFavorites.listen(function(t,o){return new Promise(function(e){i._realStart.bind(i,o).apply(null,t),e()})}),i.start.bind(i)});
//# sourceMappingURL=addBlockToFavorites.js.map

//# sourceMappingURL=addBlockToFavorites.js.map

//# sourceMappingURL=addBlockToFavorites.js.map

//# sourceMappingURL=addBlockToFavorites.js.map

//# sourceMappingURL=addBlockToFavorites.js.map

//# sourceMappingURL=addBlockToFavorites.js.map

//# sourceMappingURL=addBlockToFavorites.js.map

//# sourceMappingURL=addBlockToFavorites.js.map

//# sourceMappingURL=addBlockToFavorites.js.map

//# sourceMappingURL=addBlockToFavorites.js.map

//# sourceMappingURL=addBlockToFavorites.js.map

//# sourceMappingURL=addBlockToFavorites.js.map

//# sourceMappingURL=addBlockToFavorites.js.map

//# sourceMappingURL=addBlockToFavorites.js.map

//# sourceMappingURL=addBlockToFavorites.js.map

//# sourceMappingURL=addBlockToFavorites.js.map

//# sourceMappingURL=addBlockToFavorites.js.map

//# sourceMappingURL=addBlockToFavorites.js.map

//# sourceMappingURL=addBlockToFavorites.js.map

//# sourceMappingURL=addBlockToFavorites.js.map

//# sourceMappingURL=addBlockToFavorites.js.map

//# sourceMappingURL=addBlockToFavorites.js.map

//# sourceMappingURL=addBlockToFavorites.js.map

//# sourceMappingURL=addBlockToFavorites.js.map

//# sourceMappingURL=addBlockToFavorites.js.map

//# sourceMappingURL=addBlockToFavorites.js.map

//# sourceMappingURL=addBlockToFavorites.js.map

//# sourceMappingURL=addBlockToFavorites.js.map

//# sourceMappingURL=addBlockToFavorites.js.map

//# sourceMappingURL=addBlockToFavorites.js.map

//# sourceMappingURL=addBlockToFavorites.js.map
