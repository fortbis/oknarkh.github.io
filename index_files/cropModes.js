"use strict";!function(){var t=document.createElement("link");t.href="/css/require/autocrop.css",t.type="text/css",t.rel="stylesheet",t.media="screen,print",document.getElementsByTagName("head")[0].appendChild(t);var e={autocropClass:"ul-autocrop",autocropImgClass:"ul-autocrop-img",autocropLoadClass:"js-autocrop-load",usercropClass:"ul-usercrop",usercropImgClass:"ul-usercrop-img",usercropLoadClass:"js-usercrop-load",useHeightAttrName:"use-height",containerAR:"container-aspect-ratio",useAutoHeightAttrName:"use-auto-height",closestEl:function(t,e){for(var a=t.matches||t.webkitMatchesSelector||t.mozMatchesSelector||t.msMatchesSelector;t&&!a.call(t,e);)t=t.parentElement;return t},recalcAll:function(){this._checkMode(document.getElementById("body").getElementsByClassName(this.autocropClass),"resize"),this._checkMode(document.getElementById("body").getElementsByClassName(this.usercropClass),"resize")},_checkMode:function(t,e){for(var a=this,r=function(t,e){for(var a=t;a&&a.className;){if(-1!==a.className.indexOf(e))return!0;a=a.parentNode}return!1},i=0;i<t.length;i++)r(t[i],"ul-el-drag-mask")||(-1===t[i].className.indexOf(a.usercropLoadClass)&&-1===t[i].className.indexOf(a.usercropClass)?a._ACM(t[i]):a._UCM(t[i],e))},_UCM:function(t,e){this.usercropCBs.load&&"load"===e&&this.usercropCBs.load(t),this.usercropCBs.resize&&"resize"===e&&this.usercropCBs.resize(t)},_ACM:function(t){var e=this;t.style.display="";var a=e._getImageParams(t);if(a.zoomaway){var r=a.img.style,i=a.data.autocrop.width,s=a.data.autocrop.height,o=parseInt(t.getAttribute(this.useHeightAttrName));if(o)t.removeAttribute(this.useHeightAttrName),t.setAttribute(this.containerAR,o/a.data.container.width);else{var u=parseFloat(t.getAttribute(this.containerAR));o=u?u*a.data.container.width:a.data.container.width*(s/i)}var c=a.img.naturalWidth,d=a.img.naturalHeight,h=o*Math.max(1,d/s),n=h/d,l=c*n,g=d*n,m=l*Math.min(1,s/a.data.usercrop.height);a.el.style.height=o+"px",a.data.usercrop.cutOrig?(r.minWidth=a.data.autocrop.width+"px",r.maxWidth=a.data.autocrop.width+"px",r.maxHeight=a.data.autocrop.height+"px"):(r.minWidth=m+"px",r.maxWidth=l+"px",r.maxHeight=g+"px")}else{var p=parseInt(t.getAttribute(this.useHeightAttrName));p?t.removeAttribute(this.useHeightAttrName):p=a.data.container.width/(a.data.autocrop.width/a.data.autocrop.height),t.getAttribute(this.useAutoHeightAttrName)&&t.removeAttribute(this.useAutoHeightAttrName),a.el.style.height=p+"px",a.img.style.minHeight="100%",a.img.style.minWidth=p/(a.data.usercrop.height/a.data.usercrop.width)+"px"}e.closestEl(t,".ul-widget").style.height=""},_getRealImageParams:function(t){var e=t.getElementsByTagName("img")[0],a=t.getBoundingClientRect(),r=e.getBoundingClientRect();return{el:t,loadedfrom:t.getAttribute("data-loadedfrom"),img:e,src:e.getAttribute("src"),originalSrc:t.getAttribute("data-original"),zoomaway:null!==t.getAttribute("zoomaway"),data:{cutData:t.getAttribute("data-cutData")?JSON.parse(t.getAttribute("data-cutData")):null,usercrop:JSON.parse(t.getAttribute("data-usercrop")),autocrop:JSON.parse(t.getAttribute("data-autocrop")),container:{height:a.height,width:a.width},img:{height:r.height,width:r.width}}}},_getImageParams:function(t){var e=this._getRealImageParams(t);return"cut"===e.loadedfrom&&e.data.cutData.src.length&&(e.data.cutData={src:e.data.cutData.src,height:e.img.naturalHeight,width:e.img.naturalWidth,resizeWidth:0,x:null,y:null,orig:!0}),(null===e.data.cutData||0===e.data.cutData.height&&0===e.data.cutData.width&&!e.data.cutData.src.length)&&(e.data.cutData={src:e.originalSrc,height:e.img.naturalHeight,width:e.img.naturalWidth,resizeWidth:0,x:0,y:0,orig:!0}),0!==e.data.usercrop.height||0!==e.data.usercrop.width||e.data.usercrop.src.length||(e.data.usercrop={src:e.data.cutData.src,height:e.data.cutData.height,width:e.data.cutData.width,resizeWidth:0,x:0,y:0,cutOrig:e.data.cutData.orig||!1,useNatural:!0}),0!==e.data.autocrop.height||0!==e.data.autocrop.width||e.data.autocrop.src.length||(e.data.autocrop=JSON.parse(JSON.stringify(e.data.usercrop)),e.data.autocrop.src=""),e},_setCBtoUCM:function(t){this.usercropCBs=t},_unsetCBtoUCM:function(){this.usercropCBs={}}};window.loadImg=function(t){var a=document.getElementById(t);a&&(a.removeAttribute("onload"),a.removeAttribute("id"),e._checkMode([a.parentNode],"load"))},window.onload=function(){e.recalcAll()},window.addEventListener("resize",function(){e.recalcAll()}),"function"==typeof define&&define("cropModes",[],function(){return e})}();
//# sourceMappingURL=cropModes.js.map

//# sourceMappingURL=cropModes.js.map

//# sourceMappingURL=cropModes.js.map

//# sourceMappingURL=cropModes.js.map

//# sourceMappingURL=cropModes.js.map

//# sourceMappingURL=cropModes.js.map

//# sourceMappingURL=cropModes.js.map

//# sourceMappingURL=cropModes.js.map

//# sourceMappingURL=cropModes.js.map

//# sourceMappingURL=cropModes.js.map

//# sourceMappingURL=cropModes.js.map

//# sourceMappingURL=cropModes.js.map

//# sourceMappingURL=cropModes.js.map

//# sourceMappingURL=cropModes.js.map

//# sourceMappingURL=cropModes.js.map

//# sourceMappingURL=cropModes.js.map

//# sourceMappingURL=cropModes.js.map

//# sourceMappingURL=cropModes.js.map

//# sourceMappingURL=cropModes.js.map

//# sourceMappingURL=cropModes.js.map

//# sourceMappingURL=cropModes.js.map

//# sourceMappingURL=cropModes.js.map

//# sourceMappingURL=cropModes.js.map

//# sourceMappingURL=cropModes.js.map

//# sourceMappingURL=cropModes.js.map

//# sourceMappingURL=cropModes.js.map

//# sourceMappingURL=cropModes.js.map

//# sourceMappingURL=cropModes.js.map

//# sourceMappingURL=cropModes.js.map

//# sourceMappingURL=cropModes.js.map

//# sourceMappingURL=cropModes.js.map

//# sourceMappingURL=cropModes.js.map

//# sourceMappingURL=cropModes.js.map

//# sourceMappingURL=cropModes.js.map

//# sourceMappingURL=cropModes.js.map

//# sourceMappingURL=cropModes.js.map

//# sourceMappingURL=cropModes.js.map

//# sourceMappingURL=cropModes.js.map

//# sourceMappingURL=cropModes.js.map

//# sourceMappingURL=cropModes.js.map

//# sourceMappingURL=cropModes.js.map

//# sourceMappingURL=cropModes.js.map

//# sourceMappingURL=cropModes.js.map

//# sourceMappingURL=cropModes.js.map

//# sourceMappingURL=cropModes.js.map

//# sourceMappingURL=cropModes.js.map

//# sourceMappingURL=cropModes.js.map

//# sourceMappingURL=cropModes.js.map

//# sourceMappingURL=cropModes.js.map

//# sourceMappingURL=cropModes.js.map

//# sourceMappingURL=cropModes.js.map

//# sourceMappingURL=cropModes.js.map

//# sourceMappingURL=cropModes.js.map

//# sourceMappingURL=cropModes.js.map

//# sourceMappingURL=cropModes.js.map

//# sourceMappingURL=cropModes.js.map

//# sourceMappingURL=cropModes.js.map

//# sourceMappingURL=cropModes.js.map

//# sourceMappingURL=cropModes.js.map

//# sourceMappingURL=cropModes.js.map

//# sourceMappingURL=cropModes.js.map

//# sourceMappingURL=cropModes.js.map

//# sourceMappingURL=cropModes.js.map

//# sourceMappingURL=cropModes.js.map

//# sourceMappingURL=cropModes.js.map

//# sourceMappingURL=cropModes.js.map

//# sourceMappingURL=cropModes.js.map

//# sourceMappingURL=cropModes.js.map

//# sourceMappingURL=cropModes.js.map

//# sourceMappingURL=cropModes.js.map

//# sourceMappingURL=cropModes.js.map

//# sourceMappingURL=cropModes.js.map

//# sourceMappingURL=cropModes.js.map

//# sourceMappingURL=cropModes.js.map

//# sourceMappingURL=cropModes.js.map

//# sourceMappingURL=cropModes.js.map

//# sourceMappingURL=cropModes.js.map

//# sourceMappingURL=cropModes.js.map

//# sourceMappingURL=cropModes.js.map

//# sourceMappingURL=cropModes.js.map

//# sourceMappingURL=cropModes.js.map

//# sourceMappingURL=cropModes.js.map

//# sourceMappingURL=cropModes.js.map

//# sourceMappingURL=cropModes.js.map

//# sourceMappingURL=cropModes.js.map

//# sourceMappingURL=cropModes.js.map

//# sourceMappingURL=cropModes.js.map

//# sourceMappingURL=cropModes.js.map

//# sourceMappingURL=cropModes.js.map

//# sourceMappingURL=cropModes.js.map

//# sourceMappingURL=cropModes.js.map

//# sourceMappingURL=cropModes.js.map

//# sourceMappingURL=cropModes.js.map

//# sourceMappingURL=cropModes.js.map

//# sourceMappingURL=cropModes.js.map

//# sourceMappingURL=cropModes.js.map

//# sourceMappingURL=cropModes.js.map

//# sourceMappingURL=cropModes.js.map

//# sourceMappingURL=cropModes.js.map

//# sourceMappingURL=cropModes.js.map

//# sourceMappingURL=cropModes.js.map

//# sourceMappingURL=cropModes.js.map

//# sourceMappingURL=cropModes.js.map
