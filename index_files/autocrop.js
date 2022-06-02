"use strict";function ownKeys(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);e&&(o=o.filter(function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})),r.push.apply(r,o)}return r}function _objectSpread(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?ownKeys(r,!0).forEach(function(e){_defineProperty(t,e,r[e])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):ownKeys(r).forEach(function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))})}return t}function _defineProperty(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function _slicedToArray(t,e){return _arrayWithHoles(t)||_iterableToArrayLimit(t,e)||_nonIterableRest()}function _nonIterableRest(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}function _iterableToArrayLimit(t,e){if(Symbol.iterator in Object(t)||"[object Arguments]"===Object.prototype.toString.call(t)){var r=[],o=!0,n=!1,a=void 0;try{for(var c,i=t[Symbol.iterator]();!(o=(c=i.next()).done)&&(r.push(c.value),!e||r.length!==e);o=!0);}catch(u){n=!0,a=u}finally{try{o||null==i["return"]||i["return"]()}finally{if(n)throw a}}return r}}function _arrayWithHoles(t){return Array.isArray(t)?t:void 0}function _typeof(t){return(_typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}!function(t){if("function"==typeof define&&define.amd)define("autocrop-decorator",["_"],t);else{if("object"!==("undefined"==typeof exports?"undefined":_typeof(exports)))throw new Error("Unexpected environment");var e=require("lodash");module.exports=t(e)}}(function(t){return function(e){var r=function(t){var e=t.split(";")||[],r={};return e.forEach(function(t){if(t.length>0){t=t.replace(/\s/g,"");var e=t.split(":");r[e[0]]=e[1]}}),r},o=function(t){return Object.entries(t).map(function(t){var e=_slicedToArray(t,2),r=e[0],o=e[1];return"".concat(r,'="').concat(o,'"')}).join(" ")},n=function(){return"autocrop-img-".concat(Math.floor(9999*Math.random())+1)},a=function(t){return t.cutData&&"undefined"!==t.cutData?t.cutData:t.usercrop},c=function(t){return t.usercrop&&"undefined"!==t.usercrop?t.usercrop:t.cutData},i=e.getPicture;return e.getPicture=function(u){var s=u.data,f=u.opts,p=u.imageAttributes,l=u.columnCount,y=u.maxColumnCount,d=u.manualImageHeight,b=u.setProportions,m=s.originalImg,g=s.cutData,v=s.usercrop,h=s.autocrop,O=s.parentStyle,j=f.proportion,_="original",w=m;g&&g.src&&(_="cut",w=g.src),v&&v.src&&(_="usercrop",w=v.src);var P=a(s),S=c(s),A={"class":"ul-autocrop",style:"display: none","data-cutData":"".concat(t.escape(JSON.stringify(P))),"data-usercrop":"".concat(t.escape(JSON.stringify(S))),"data-autocrop":"".concat(t.escape(JSON.stringify(h))),"data-original":"".concat(m),"data-loadedFrom":"".concat(_)};if(j){A.zoomaway="";var D=parseInt(r(O).height);D&&(A.useHeight=D)}for(var I=n(),x={id:I,onload:"loadImg('".concat(I,"')")},C=p||{},T=0,E=Object.entries(C);T<E.length;T++){var H=_slicedToArray(E[T],2),J=H[0],K=H[1];C[J]=t.escape(K)}var N=i.bind(e)({imagePath:w,imageAttributes:_objectSpread({},C,{},x),columnCount:l,maxColumnCount:y,manualImageHeight:d,setProportions:b});return"<div ".concat(o(A),">").concat(N,"</div>")},e}});
//# sourceMappingURL=autocrop.js.map

//# sourceMappingURL=autocrop.js.map

//# sourceMappingURL=autocrop.js.map

//# sourceMappingURL=autocrop.js.map

//# sourceMappingURL=autocrop.js.map

//# sourceMappingURL=autocrop.js.map

//# sourceMappingURL=autocrop.js.map

//# sourceMappingURL=autocrop.js.map

//# sourceMappingURL=autocrop.js.map

//# sourceMappingURL=autocrop.js.map

//# sourceMappingURL=autocrop.js.map

//# sourceMappingURL=autocrop.js.map

//# sourceMappingURL=autocrop.js.map

//# sourceMappingURL=autocrop.js.map

//# sourceMappingURL=autocrop.js.map

//# sourceMappingURL=autocrop.js.map

//# sourceMappingURL=autocrop.js.map

//# sourceMappingURL=autocrop.js.map

//# sourceMappingURL=autocrop.js.map

//# sourceMappingURL=autocrop.js.map

//# sourceMappingURL=autocrop.js.map

//# sourceMappingURL=autocrop.js.map

//# sourceMappingURL=autocrop.js.map

//# sourceMappingURL=autocrop.js.map

//# sourceMappingURL=autocrop.js.map

//# sourceMappingURL=autocrop.js.map

//# sourceMappingURL=autocrop.js.map

//# sourceMappingURL=autocrop.js.map

//# sourceMappingURL=autocrop.js.map

//# sourceMappingURL=autocrop.js.map

//# sourceMappingURL=autocrop.js.map

//# sourceMappingURL=autocrop.js.map

//# sourceMappingURL=autocrop.js.map

//# sourceMappingURL=autocrop.js.map

//# sourceMappingURL=autocrop.js.map

//# sourceMappingURL=autocrop.js.map

//# sourceMappingURL=autocrop.js.map

//# sourceMappingURL=autocrop.js.map

//# sourceMappingURL=autocrop.js.map

//# sourceMappingURL=autocrop.js.map

//# sourceMappingURL=autocrop.js.map

//# sourceMappingURL=autocrop.js.map

//# sourceMappingURL=autocrop.js.map

//# sourceMappingURL=autocrop.js.map

//# sourceMappingURL=autocrop.js.map

//# sourceMappingURL=autocrop.js.map

//# sourceMappingURL=autocrop.js.map

//# sourceMappingURL=autocrop.js.map

//# sourceMappingURL=autocrop.js.map

//# sourceMappingURL=autocrop.js.map

//# sourceMappingURL=autocrop.js.map

//# sourceMappingURL=autocrop.js.map

//# sourceMappingURL=autocrop.js.map

//# sourceMappingURL=autocrop.js.map

//# sourceMappingURL=autocrop.js.map

//# sourceMappingURL=autocrop.js.map

//# sourceMappingURL=autocrop.js.map

//# sourceMappingURL=autocrop.js.map

//# sourceMappingURL=autocrop.js.map

//# sourceMappingURL=autocrop.js.map

//# sourceMappingURL=autocrop.js.map

//# sourceMappingURL=autocrop.js.map

//# sourceMappingURL=autocrop.js.map

//# sourceMappingURL=autocrop.js.map

//# sourceMappingURL=autocrop.js.map

//# sourceMappingURL=autocrop.js.map

//# sourceMappingURL=autocrop.js.map

//# sourceMappingURL=autocrop.js.map

//# sourceMappingURL=autocrop.js.map

//# sourceMappingURL=autocrop.js.map

//# sourceMappingURL=autocrop.js.map

//# sourceMappingURL=autocrop.js.map

//# sourceMappingURL=autocrop.js.map

//# sourceMappingURL=autocrop.js.map

//# sourceMappingURL=autocrop.js.map

//# sourceMappingURL=autocrop.js.map

//# sourceMappingURL=autocrop.js.map

//# sourceMappingURL=autocrop.js.map

//# sourceMappingURL=autocrop.js.map

//# sourceMappingURL=autocrop.js.map

//# sourceMappingURL=autocrop.js.map

//# sourceMappingURL=autocrop.js.map

//# sourceMappingURL=autocrop.js.map

//# sourceMappingURL=autocrop.js.map

//# sourceMappingURL=autocrop.js.map

//# sourceMappingURL=autocrop.js.map

//# sourceMappingURL=autocrop.js.map

//# sourceMappingURL=autocrop.js.map

//# sourceMappingURL=autocrop.js.map

//# sourceMappingURL=autocrop.js.map

//# sourceMappingURL=autocrop.js.map

//# sourceMappingURL=autocrop.js.map

//# sourceMappingURL=autocrop.js.map

//# sourceMappingURL=autocrop.js.map

//# sourceMappingURL=autocrop.js.map

//# sourceMappingURL=autocrop.js.map

//# sourceMappingURL=autocrop.js.map

//# sourceMappingURL=autocrop.js.map

//# sourceMappingURL=autocrop.js.map

//# sourceMappingURL=autocrop.js.map

//# sourceMappingURL=autocrop.js.map

//# sourceMappingURL=autocrop.js.map

//# sourceMappingURL=autocrop.js.map

//# sourceMappingURL=autocrop.js.map

//# sourceMappingURL=autocrop.js.map

//# sourceMappingURL=autocrop.js.map

//# sourceMappingURL=autocrop.js.map

//# sourceMappingURL=autocrop.js.map

//# sourceMappingURL=autocrop.js.map

//# sourceMappingURL=autocrop.js.map

//# sourceMappingURL=autocrop.js.map

//# sourceMappingURL=autocrop.js.map

//# sourceMappingURL=autocrop.js.map

//# sourceMappingURL=autocrop.js.map

//# sourceMappingURL=autocrop.js.map

//# sourceMappingURL=autocrop.js.map

//# sourceMappingURL=autocrop.js.map

//# sourceMappingURL=autocrop.js.map

//# sourceMappingURL=autocrop.js.map

//# sourceMappingURL=autocrop.js.map

//# sourceMappingURL=autocrop.js.map

//# sourceMappingURL=autocrop.js.map

//# sourceMappingURL=autocrop.js.map

//# sourceMappingURL=autocrop.js.map

//# sourceMappingURL=autocrop.js.map

//# sourceMappingURL=autocrop.js.map

//# sourceMappingURL=autocrop.js.map

//# sourceMappingURL=autocrop.js.map

//# sourceMappingURL=autocrop.js.map

//# sourceMappingURL=autocrop.js.map

//# sourceMappingURL=autocrop.js.map

//# sourceMappingURL=autocrop.js.map

//# sourceMappingURL=autocrop.js.map

//# sourceMappingURL=autocrop.js.map

//# sourceMappingURL=autocrop.js.map

//# sourceMappingURL=autocrop.js.map

//# sourceMappingURL=autocrop.js.map

//# sourceMappingURL=autocrop.js.map

//# sourceMappingURL=autocrop.js.map

//# sourceMappingURL=autocrop.js.map

//# sourceMappingURL=autocrop.js.map

//# sourceMappingURL=autocrop.js.map

//# sourceMappingURL=autocrop.js.map

//# sourceMappingURL=autocrop.js.map

//# sourceMappingURL=autocrop.js.map

//# sourceMappingURL=autocrop.js.map

//# sourceMappingURL=autocrop.js.map

//# sourceMappingURL=autocrop.js.map

//# sourceMappingURL=autocrop.js.map

//# sourceMappingURL=autocrop.js.map

//# sourceMappingURL=autocrop.js.map

//# sourceMappingURL=autocrop.js.map

//# sourceMappingURL=autocrop.js.map

//# sourceMappingURL=autocrop.js.map

//# sourceMappingURL=autocrop.js.map

//# sourceMappingURL=autocrop.js.map

//# sourceMappingURL=autocrop.js.map

//# sourceMappingURL=autocrop.js.map

//# sourceMappingURL=autocrop.js.map

//# sourceMappingURL=autocrop.js.map

//# sourceMappingURL=autocrop.js.map

//# sourceMappingURL=autocrop.js.map
