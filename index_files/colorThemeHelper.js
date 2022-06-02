"use strict";function _defineProperty(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function _typeof(e){"@babel/helpers - typeof";return(_typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}!function(e){if("function"==typeof define&&define.amd)define("colorThemeHelper",["jquery"],e);else{if("object"!==("undefined"==typeof exports?"undefined":_typeof(exports)))throw new Error("Unexpected environment");module.exports=e()}}(function(e){var t={defaultBlockTheme:"g-theme-block-0",getBlockTheme:function(e,t){return e||(e=this.defaultBlockTheme),"g-theme-block-0"===e&&/g-theme-block-[1-4]/.test(t)&&(e+=" ".concat(t)),e},getStyle:function(e){var t={color:{},image:{},shadow:""},o=Object.freeze({L:"0",C:"50%",R:"100%",T:"0",B:"100%"}),r=Object.freeze({LT:"repeat repeat",CT:"repeat no-repeat",LC:"no-repeat repeat",C:"no-repeat"});return e.background.overlay&&(t.color=e.background.overlay),"image"==e.bgtype&&(e.background.color&&(t.image["background-color"]=e.background.color),t.image["background-image"]="url("+("none"==e.background.image?"":e.background.image)+")","stretch"==e.background.justify?(t.image["background-size"]="cover","parallax"==e.background.parallax?t.image["background-repeat"]="repeat":t.image["background-repeat"]="no-repeat",t.image["background-position"]=function(e){return 1==e.length?o.C+" "+o.C:o[e[0]]+" "+o[e[1]]}(e.background.position)):"tile"==e.background.justify&&(t.image["background-position"]=function(e){return 1==e.length?o.C+" "+o.C:o[e[0]]+" "+o[e[1]]}(e.background.position),t.image["background-repeat"]=r[e.background.repeat])),t.shadow=this.getShadowStyle(e),t.blockStyles=this.getBlockStyle(e),t},getShadowStyle:function(e){var t=e.blockShadow;if(!t||!t.length)return"";var o=t.reduce(function(e,t){var o="".concat(t.x,"px ").concat(t.y,"px ").concat(t.blur,"px ").concat(t.spread,"px"),r="inner"===t.type?"inset ":"";return"".concat(e).concat(""!==e?",":""," ").concat(r," ").concat(o," rgba(").concat(t.rgba,")")},"");return"z-index: 1; box-shadow: ".concat(o,";")},getBlockStyle:function(e){var t=e.blockShadow;if(!t||!t.length)return{};var o=t.filter(function(e){return e&&"outer"===e.type}).length;return{edit:"z-index: ".concat(o?"202 !important":"initial",";"),pub:"z-index: ".concat(o?"1":"initial",";")}},toString:function(e){return Object.keys(e).reduce(function(t,o){return void 0===e[o]?t:t+(o+": "+e[o]+"; ")},"")},convertFrom:function(e){return Object.keys(e).reduce(function(t,o){return["position","justify","repeat"].indexOf(o)>=0?t.background[o]=e["bg"+o]:["parallax","image","color"].indexOf(o)>=0?t.background[o]=e[o]:t[o]=e[o],t},{background:{parallax:"none",image:"",color:""}})},setSiteTheme:function(t){var o=t.context?e("#body",t.context):e("#body"),r=t.theme;o.length>0&&r?o.removeClass(function(e,t){return(t.match(/g-theme-site-\d/)||[]).join(" ")}).addClass(t.theme):console.error("colorThemeHelper invalid params",t)},setColorAttrbute:function(t,o){var r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"desktop",a={},n=_defineProperty({},r,o[0]);if(t.is("header")||t.is("footer")){n={desktop:o[0],tablet:o[0],phone:o[0]};var c=e('[class*="g-theme-block-"]',t);c.length&&e.each(c,function(t,o){var r=e(o),a=/g-theme-block-\d/.exec(r.attr("class"))[0];a&&r.attr("data-theme-block",'{"desktop":"'.concat(a,'", "tablet":"').concat(a,'", "phone":"').concat(a,'"}'))})}o.includes("g-theme-block-0")&&(n=_defineProperty({},r,o[1]),"g-theme-block-5"!==e("#body-fict").attr("data-block_theme")||o[1]||(n=_defineProperty({},r,o[0])),(t.is("header")||t.is("footer"))&&(n={desktop:o[1],tablet:o[1],phone:o[1]},"g-theme-block-5"!==e("#body-fict").attr("data-block_theme")||o[1]||(n={desktop:o[0],tablet:o[0],phone:o[0]})));var i=t.attr("data-theme-block")?t.attr("data-theme-block"):'{"desktop":"'.concat(o[0],'", "tablet":"').concat(o[0],'", "phone":"').concat(o[0],'"}');try{a=JSON.parse(i)}catch(l){console.error("data-theme-block JSON parse failed")}e.extend(a,n),t.attr("data-theme-block",JSON.stringify(a))},setBlocksTheme:function(o,r){var a=this,n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"desktop",c=null;if(r instanceof e?c=r.toArray():r instanceof Array?c=r:"object"===_typeof(r)&&null!==r&&(c=[r]),!c)throw new Error("Unexpected type of 'blocks' argument");c.forEach(function(c){var i=e(c),l=i.attr("id"),d=i.attr("data-theme");if(i){var u=d;if(r.backgroundBlockParams&&r.backgroundBlockParams[l])u=r.backgroundBlockParams[l][n].theme;else try{u=JSON.parse(i.attr("data-theme-block"))[n]}catch(s){console.log("data-theme-block JSON parse failed")}var b=t.getBlockTheme(u,o);a.setColorAttrbute(i,[u],n),i.removeClass(function(e,t){return(t.match(/g-theme-block-\d/g)||[]).join(" ")}).addClass(b)}})},updateHeaderFooterColorThemes:function(t,o){var r=this;e.each(e("header, footer, #js-blogTheme",t.context),function(a,n){var c=t.className.split(" ");r.setColorAttrbute(e(n),c,o)}),e("header, footer, #js-blogTheme",t.context).removeClass(function(e,t){return(t.match(/g-theme-block-\d/g)||[]).join(" ")}).addClass(t.className)},updateBodyFictColorThemes:function(t,o){var r=e(t.bodyFict);r.removeClass(function(e,t){return(t.match(/g-theme-block-\d/)||[]).join(" ")}).addClass(t.className).attr("data-block_theme",t.className),this.setColorAttrbute(r,t.className.split(" "),o)}};return t});
//# sourceMappingURL=colorThemeHelper.js.map

//# sourceMappingURL=colorThemeHelper.js.map

//# sourceMappingURL=colorThemeHelper.js.map

//# sourceMappingURL=colorThemeHelper.js.map

//# sourceMappingURL=colorThemeHelper.js.map

//# sourceMappingURL=colorThemeHelper.js.map

//# sourceMappingURL=colorThemeHelper.js.map

//# sourceMappingURL=colorThemeHelper.js.map

//# sourceMappingURL=colorThemeHelper.js.map

//# sourceMappingURL=colorThemeHelper.js.map

//# sourceMappingURL=colorThemeHelper.js.map

//# sourceMappingURL=colorThemeHelper.js.map

//# sourceMappingURL=colorThemeHelper.js.map

//# sourceMappingURL=colorThemeHelper.js.map

//# sourceMappingURL=colorThemeHelper.js.map

//# sourceMappingURL=colorThemeHelper.js.map

//# sourceMappingURL=colorThemeHelper.js.map

//# sourceMappingURL=colorThemeHelper.js.map

//# sourceMappingURL=colorThemeHelper.js.map

//# sourceMappingURL=colorThemeHelper.js.map

//# sourceMappingURL=colorThemeHelper.js.map

//# sourceMappingURL=colorThemeHelper.js.map

//# sourceMappingURL=colorThemeHelper.js.map

//# sourceMappingURL=colorThemeHelper.js.map

//# sourceMappingURL=colorThemeHelper.js.map

//# sourceMappingURL=colorThemeHelper.js.map

//# sourceMappingURL=colorThemeHelper.js.map

//# sourceMappingURL=colorThemeHelper.js.map

//# sourceMappingURL=colorThemeHelper.js.map

//# sourceMappingURL=colorThemeHelper.js.map

//# sourceMappingURL=colorThemeHelper.js.map

//# sourceMappingURL=colorThemeHelper.js.map

//# sourceMappingURL=colorThemeHelper.js.map

//# sourceMappingURL=colorThemeHelper.js.map

//# sourceMappingURL=colorThemeHelper.js.map

//# sourceMappingURL=colorThemeHelper.js.map

//# sourceMappingURL=colorThemeHelper.js.map

//# sourceMappingURL=colorThemeHelper.js.map

//# sourceMappingURL=colorThemeHelper.js.map

//# sourceMappingURL=colorThemeHelper.js.map

//# sourceMappingURL=colorThemeHelper.js.map

//# sourceMappingURL=colorThemeHelper.js.map

//# sourceMappingURL=colorThemeHelper.js.map

//# sourceMappingURL=colorThemeHelper.js.map

//# sourceMappingURL=colorThemeHelper.js.map

//# sourceMappingURL=colorThemeHelper.js.map

//# sourceMappingURL=colorThemeHelper.js.map

//# sourceMappingURL=colorThemeHelper.js.map

//# sourceMappingURL=colorThemeHelper.js.map

//# sourceMappingURL=colorThemeHelper.js.map

//# sourceMappingURL=colorThemeHelper.js.map

//# sourceMappingURL=colorThemeHelper.js.map

//# sourceMappingURL=colorThemeHelper.js.map

//# sourceMappingURL=colorThemeHelper.js.map

//# sourceMappingURL=colorThemeHelper.js.map

//# sourceMappingURL=colorThemeHelper.js.map

//# sourceMappingURL=colorThemeHelper.js.map

//# sourceMappingURL=colorThemeHelper.js.map

//# sourceMappingURL=colorThemeHelper.js.map

//# sourceMappingURL=colorThemeHelper.js.map

//# sourceMappingURL=colorThemeHelper.js.map

//# sourceMappingURL=colorThemeHelper.js.map

//# sourceMappingURL=colorThemeHelper.js.map
