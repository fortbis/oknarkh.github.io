"use strict";define("autocrop",["jquery","U","widget","cropMixins","cropModes","logActions"],function(t,a,e,i,o,r){var c={autocrop:!0,stop:function(a,c){var n=this,u={};this.stopImmediate(),a.find(".".concat(o.autocropClass)).each(function(a,e){var r={},h=t(e);if(!c)return void o._ACM(e);if("true"===h.attr(o.useAutoHeightAttrName)&&o._ACM(e),r=n._getCoords(h),i.checkDiff(r.cropData,r._autocrop)){var d=r.$el.attr("data-autocrop",JSON.stringify(r.cropData)).closest(".ul-widget").attr("id");t(r.$el).removeAttr(o.containerAR),u[d]||(u[d]=[]),u[d].push({autocrop:r.cropData,$el:r.$el})}}),Object.keys(u).forEach(function(t){var a=e.get(t);a&&a.autocrop&&(r.add({fromFile:"js/ulib/crop/autocrop.js",title:"autocrop ready",desc:"widgetId: ".concat(t)}),a.autocrop(u[t]))})},setHeight:function(a,e){var i=a.find(".".concat(o.autocropClass));return"number"==typeof e?i.each(function(a,i){t(i).attr(o.useHeightAttrName,e)}):"string"==typeof e&&"auto"===e?i.each(function(a,e){t(e).show().attr(o.useAutoHeightAttrName,!0);var i=o._getImageParams(e);i.zoomaway&&t(i.img).css("max-width",i.data.container.width*(i.img.naturalWidth/i.data.autocrop.width))}):e.is(t)&&e.find(".".concat(o.autocropClass)).each(function(a,e){i.eq(a).attr(o.useHeightAttrName,t(e).height())}),i},setImmediate:function(t){var a=this;a.autocrop=!1,requestAnimationFrame(function e(){var i=t.find(".".concat(o.autocropClass));o._ACM(i.get(0));var r=o._getRealImageParams(i.get(0));r.data.container.height==i.data("immediateHeight")?i.data("dublicateHeight",parseInt(i.data("dublicateHeight"))+1):(i.data("immediateHeight",r.data.container.height),i.data("dublicateHeight",0)),parseInt(i.data("dublicateHeight"))>5&&a.stopImmediate(),a.autocrop||requestAnimationFrame(e)})},stopImmediate:function(){this.autocrop=!0},_getCoords:function(a){var e=o._getImageParams(a.get(0)),r=e.data,c=r.container.width*(e.img.naturalWidth/r.img.width),n=r.container.height*(e.img.naturalHeight/r.img.height),u={cropData:{x:(r.img.width-r.container.width)/2*(e.img.naturalWidth/r.img.width),y:r.usercrop.y+(r.img.height-r.container.height)/2*(e.img.naturalHeight/r.img.height),height:n,width:c,resizeWidth:e.zoomaway?r.img.width:i.getContainerWidth(e.el,c),src:""},_autocrop:r.autocrop,$el:t(e.el)};return e.zoomaway||(u.cropData.x+=r.usercrop.x),r.container.width-r.img.width>1&&(u.cropData.x=r.usercrop.x-(c-r.usercrop.width)/2),e.data.usercrop.cutOrig&&e.zoomaway&&(u.cropData=r.autocrop),u}};return c});
//# sourceMappingURL=autocrop.js.map

//# sourceMappingURL=autocrop.js.map

//# sourceMappingURL=autocrop.js.map

//# sourceMappingURL=autocrop.js.map

//# sourceMappingURL=autocrop.js.map

//# sourceMappingURL=autocrop.js.map

//# sourceMappingURL=autocrop.js.map

//# sourceMappingURL=autocrop.js.map

//# sourceMappingURL=autocrop.js.map

//# sourceMappingURL=autocrop.js.map

//# sourceMappingURL=autocrop.js.map

//# sourceMappingURL=autocrop.js.map

//# sourceMappingURL=autocrop.js.map

//# sourceMappingURL=autocrop.js.map

//# sourceMappingURL=autocrop.js.map

//# sourceMappingURL=autocrop.js.map

//# sourceMappingURL=autocrop.js.map

//# sourceMappingURL=autocrop.js.map

//# sourceMappingURL=autocrop.js.map

//# sourceMappingURL=autocrop.js.map

//# sourceMappingURL=autocrop.js.map

//# sourceMappingURL=autocrop.js.map

//# sourceMappingURL=autocrop.js.map

//# sourceMappingURL=autocrop.js.map

//# sourceMappingURL=autocrop.js.map

//# sourceMappingURL=autocrop.js.map

//# sourceMappingURL=autocrop.js.map

//# sourceMappingURL=autocrop.js.map

//# sourceMappingURL=autocrop.js.map

//# sourceMappingURL=autocrop.js.map

//# sourceMappingURL=autocrop.js.map

//# sourceMappingURL=autocrop.js.map

//# sourceMappingURL=autocrop.js.map

//# sourceMappingURL=autocrop.js.map

//# sourceMappingURL=autocrop.js.map

//# sourceMappingURL=autocrop.js.map

//# sourceMappingURL=autocrop.js.map

//# sourceMappingURL=autocrop.js.map

//# sourceMappingURL=autocrop.js.map

//# sourceMappingURL=autocrop.js.map

//# sourceMappingURL=autocrop.js.map

//# sourceMappingURL=autocrop.js.map

//# sourceMappingURL=autocrop.js.map

//# sourceMappingURL=autocrop.js.map

//# sourceMappingURL=autocrop.js.map

//# sourceMappingURL=autocrop.js.map

//# sourceMappingURL=autocrop.js.map

//# sourceMappingURL=autocrop.js.map

//# sourceMappingURL=autocrop.js.map

//# sourceMappingURL=autocrop.js.map

//# sourceMappingURL=autocrop.js.map

//# sourceMappingURL=autocrop.js.map

//# sourceMappingURL=autocrop.js.map

//# sourceMappingURL=autocrop.js.map

//# sourceMappingURL=autocrop.js.map

//# sourceMappingURL=autocrop.js.map

//# sourceMappingURL=autocrop.js.map

//# sourceMappingURL=autocrop.js.map

//# sourceMappingURL=autocrop.js.map

//# sourceMappingURL=autocrop.js.map

//# sourceMappingURL=autocrop.js.map

//# sourceMappingURL=autocrop.js.map

//# sourceMappingURL=autocrop.js.map

//# sourceMappingURL=autocrop.js.map

//# sourceMappingURL=autocrop.js.map

//# sourceMappingURL=autocrop.js.map

//# sourceMappingURL=autocrop.js.map

//# sourceMappingURL=autocrop.js.map

//# sourceMappingURL=autocrop.js.map

//# sourceMappingURL=autocrop.js.map

//# sourceMappingURL=autocrop.js.map

//# sourceMappingURL=autocrop.js.map

//# sourceMappingURL=autocrop.js.map

//# sourceMappingURL=autocrop.js.map

//# sourceMappingURL=autocrop.js.map

//# sourceMappingURL=autocrop.js.map

//# sourceMappingURL=autocrop.js.map

//# sourceMappingURL=autocrop.js.map

//# sourceMappingURL=autocrop.js.map

//# sourceMappingURL=autocrop.js.map

//# sourceMappingURL=autocrop.js.map

//# sourceMappingURL=autocrop.js.map

//# sourceMappingURL=autocrop.js.map

//# sourceMappingURL=autocrop.js.map

//# sourceMappingURL=autocrop.js.map

//# sourceMappingURL=autocrop.js.map

//# sourceMappingURL=autocrop.js.map

//# sourceMappingURL=autocrop.js.map

//# sourceMappingURL=autocrop.js.map

//# sourceMappingURL=autocrop.js.map

//# sourceMappingURL=autocrop.js.map

//# sourceMappingURL=autocrop.js.map

//# sourceMappingURL=autocrop.js.map

//# sourceMappingURL=autocrop.js.map

//# sourceMappingURL=autocrop.js.map

//# sourceMappingURL=autocrop.js.map

//# sourceMappingURL=autocrop.js.map

//# sourceMappingURL=autocrop.js.map

//# sourceMappingURL=autocrop.js.map

//# sourceMappingURL=autocrop.js.map

//# sourceMappingURL=autocrop.js.map

//# sourceMappingURL=autocrop.js.map

//# sourceMappingURL=autocrop.js.map

//# sourceMappingURL=autocrop.js.map

//# sourceMappingURL=autocrop.js.map

//# sourceMappingURL=autocrop.js.map

//# sourceMappingURL=autocrop.js.map

//# sourceMappingURL=autocrop.js.map

//# sourceMappingURL=autocrop.js.map

//# sourceMappingURL=autocrop.js.map

//# sourceMappingURL=autocrop.js.map

//# sourceMappingURL=autocrop.js.map

//# sourceMappingURL=autocrop.js.map

//# sourceMappingURL=autocrop.js.map

//# sourceMappingURL=autocrop.js.map

//# sourceMappingURL=autocrop.js.map

//# sourceMappingURL=autocrop.js.map

//# sourceMappingURL=autocrop.js.map

//# sourceMappingURL=autocrop.js.map

//# sourceMappingURL=autocrop.js.map

//# sourceMappingURL=autocrop.js.map

//# sourceMappingURL=autocrop.js.map

//# sourceMappingURL=autocrop.js.map

//# sourceMappingURL=autocrop.js.map

//# sourceMappingURL=autocrop.js.map

//# sourceMappingURL=autocrop.js.map

//# sourceMappingURL=autocrop.js.map

//# sourceMappingURL=autocrop.js.map

//# sourceMappingURL=autocrop.js.map

//# sourceMappingURL=autocrop.js.map

//# sourceMappingURL=autocrop.js.map

//# sourceMappingURL=autocrop.js.map

//# sourceMappingURL=autocrop.js.map

//# sourceMappingURL=autocrop.js.map

//# sourceMappingURL=autocrop.js.map

//# sourceMappingURL=autocrop.js.map

//# sourceMappingURL=autocrop.js.map

//# sourceMappingURL=autocrop.js.map

//# sourceMappingURL=autocrop.js.map

//# sourceMappingURL=autocrop.js.map

//# sourceMappingURL=autocrop.js.map

//# sourceMappingURL=autocrop.js.map

//# sourceMappingURL=autocrop.js.map

//# sourceMappingURL=autocrop.js.map

//# sourceMappingURL=autocrop.js.map

//# sourceMappingURL=autocrop.js.map

//# sourceMappingURL=autocrop.js.map

//# sourceMappingURL=autocrop.js.map

//# sourceMappingURL=autocrop.js.map

//# sourceMappingURL=autocrop.js.map

//# sourceMappingURL=autocrop.js.map

//# sourceMappingURL=autocrop.js.map

//# sourceMappingURL=autocrop.js.map

//# sourceMappingURL=autocrop.js.map

//# sourceMappingURL=autocrop.js.map

//# sourceMappingURL=autocrop.js.map

//# sourceMappingURL=autocrop.js.map

//# sourceMappingURL=autocrop.js.map

//# sourceMappingURL=autocrop.js.map

//# sourceMappingURL=autocrop.js.map

//# sourceMappingURL=autocrop.js.map

//# sourceMappingURL=autocrop.js.map

//# sourceMappingURL=autocrop.js.map

//# sourceMappingURL=autocrop.js.map

//# sourceMappingURL=autocrop.js.map

//# sourceMappingURL=autocrop.js.map

//# sourceMappingURL=autocrop.js.map

//# sourceMappingURL=autocrop.js.map

//# sourceMappingURL=autocrop.js.map

//# sourceMappingURL=autocrop.js.map

//# sourceMappingURL=autocrop.js.map

//# sourceMappingURL=autocrop.js.map

//# sourceMappingURL=autocrop.js.map

//# sourceMappingURL=autocrop.js.map

//# sourceMappingURL=autocrop.js.map

//# sourceMappingURL=autocrop.js.map

//# sourceMappingURL=autocrop.js.map

//# sourceMappingURL=autocrop.js.map

//# sourceMappingURL=autocrop.js.map

//# sourceMappingURL=autocrop.js.map

//# sourceMappingURL=autocrop.js.map

//# sourceMappingURL=autocrop.js.map

//# sourceMappingURL=autocrop.js.map

//# sourceMappingURL=autocrop.js.map

//# sourceMappingURL=autocrop.js.map

//# sourceMappingURL=autocrop.js.map

//# sourceMappingURL=autocrop.js.map

//# sourceMappingURL=autocrop.js.map

//# sourceMappingURL=autocrop.js.map

//# sourceMappingURL=autocrop.js.map

//# sourceMappingURL=autocrop.js.map

//# sourceMappingURL=autocrop.js.map

//# sourceMappingURL=autocrop.js.map

//# sourceMappingURL=autocrop.js.map

//# sourceMappingURL=autocrop.js.map

//# sourceMappingURL=autocrop.js.map

//# sourceMappingURL=autocrop.js.map

//# sourceMappingURL=autocrop.js.map

//# sourceMappingURL=autocrop.js.map

//# sourceMappingURL=autocrop.js.map

//# sourceMappingURL=autocrop.js.map

//# sourceMappingURL=autocrop.js.map

//# sourceMappingURL=autocrop.js.map

//# sourceMappingURL=autocrop.js.map

//# sourceMappingURL=autocrop.js.map

//# sourceMappingURL=autocrop.js.map

//# sourceMappingURL=autocrop.js.map

//# sourceMappingURL=autocrop.js.map

//# sourceMappingURL=autocrop.js.map

//# sourceMappingURL=autocrop.js.map

//# sourceMappingURL=autocrop.js.map

//# sourceMappingURL=autocrop.js.map

//# sourceMappingURL=autocrop.js.map

//# sourceMappingURL=autocrop.js.map

//# sourceMappingURL=autocrop.js.map

//# sourceMappingURL=autocrop.js.map

//# sourceMappingURL=autocrop.js.map

//# sourceMappingURL=autocrop.js.map

//# sourceMappingURL=autocrop.js.map

//# sourceMappingURL=autocrop.js.map

//# sourceMappingURL=autocrop.js.map

//# sourceMappingURL=autocrop.js.map

//# sourceMappingURL=autocrop.js.map

//# sourceMappingURL=autocrop.js.map

//# sourceMappingURL=autocrop.js.map

//# sourceMappingURL=autocrop.js.map

//# sourceMappingURL=autocrop.js.map

//# sourceMappingURL=autocrop.js.map

//# sourceMappingURL=autocrop.js.map

//# sourceMappingURL=autocrop.js.map

//# sourceMappingURL=autocrop.js.map

//# sourceMappingURL=autocrop.js.map

//# sourceMappingURL=autocrop.js.map

//# sourceMappingURL=autocrop.js.map

//# sourceMappingURL=autocrop.js.map

//# sourceMappingURL=autocrop.js.map

//# sourceMappingURL=autocrop.js.map

//# sourceMappingURL=autocrop.js.map

//# sourceMappingURL=autocrop.js.map

//# sourceMappingURL=autocrop.js.map

//# sourceMappingURL=autocrop.js.map

//# sourceMappingURL=autocrop.js.map

//# sourceMappingURL=autocrop.js.map

//# sourceMappingURL=autocrop.js.map

//# sourceMappingURL=autocrop.js.map

//# sourceMappingURL=autocrop.js.map

//# sourceMappingURL=autocrop.js.map

//# sourceMappingURL=autocrop.js.map

//# sourceMappingURL=autocrop.js.map

//# sourceMappingURL=autocrop.js.map

//# sourceMappingURL=autocrop.js.map

//# sourceMappingURL=autocrop.js.map

//# sourceMappingURL=autocrop.js.map

//# sourceMappingURL=autocrop.js.map

//# sourceMappingURL=autocrop.js.map

//# sourceMappingURL=autocrop.js.map

//# sourceMappingURL=autocrop.js.map

//# sourceMappingURL=autocrop.js.map

//# sourceMappingURL=autocrop.js.map

//# sourceMappingURL=autocrop.js.map

//# sourceMappingURL=autocrop.js.map

//# sourceMappingURL=autocrop.js.map

//# sourceMappingURL=autocrop.js.map

//# sourceMappingURL=autocrop.js.map

//# sourceMappingURL=autocrop.js.map

//# sourceMappingURL=autocrop.js.map

//# sourceMappingURL=autocrop.js.map

//# sourceMappingURL=autocrop.js.map

//# sourceMappingURL=autocrop.js.map

//# sourceMappingURL=autocrop.js.map

//# sourceMappingURL=autocrop.js.map

//# sourceMappingURL=autocrop.js.map

//# sourceMappingURL=autocrop.js.map

//# sourceMappingURL=autocrop.js.map

//# sourceMappingURL=autocrop.js.map

//# sourceMappingURL=autocrop.js.map

//# sourceMappingURL=autocrop.js.map

//# sourceMappingURL=autocrop.js.map

//# sourceMappingURL=autocrop.js.map

//# sourceMappingURL=autocrop.js.map

//# sourceMappingURL=autocrop.js.map

//# sourceMappingURL=autocrop.js.map

//# sourceMappingURL=autocrop.js.map

//# sourceMappingURL=autocrop.js.map

//# sourceMappingURL=autocrop.js.map

//# sourceMappingURL=autocrop.js.map

//# sourceMappingURL=autocrop.js.map

//# sourceMappingURL=autocrop.js.map

//# sourceMappingURL=autocrop.js.map

//# sourceMappingURL=autocrop.js.map

//# sourceMappingURL=autocrop.js.map

//# sourceMappingURL=autocrop.js.map

//# sourceMappingURL=autocrop.js.map

//# sourceMappingURL=autocrop.js.map

//# sourceMappingURL=autocrop.js.map

//# sourceMappingURL=autocrop.js.map

//# sourceMappingURL=autocrop.js.map

//# sourceMappingURL=autocrop.js.map

//# sourceMappingURL=autocrop.js.map

//# sourceMappingURL=autocrop.js.map

//# sourceMappingURL=autocrop.js.map

//# sourceMappingURL=autocrop.js.map

//# sourceMappingURL=autocrop.js.map

//# sourceMappingURL=autocrop.js.map

//# sourceMappingURL=autocrop.js.map

//# sourceMappingURL=autocrop.js.map

//# sourceMappingURL=autocrop.js.map

//# sourceMappingURL=autocrop.js.map

//# sourceMappingURL=autocrop.js.map

//# sourceMappingURL=autocrop.js.map

//# sourceMappingURL=autocrop.js.map

//# sourceMappingURL=autocrop.js.map

//# sourceMappingURL=autocrop.js.map

//# sourceMappingURL=autocrop.js.map
