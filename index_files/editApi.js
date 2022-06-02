"use strict";define("editApi",["_","classapplier","editApiApplier","editApiCleaner","editApiSelection","editApiWhite","jquery-ui-resizable-bootstrap","jquery-ui-sortable"],function(e,t,i,n,o,a){t.init();var l,s={text:!1,image:!1},r={_enableApiEvents:!0,init:function(){return function(i){this.inited&&this.deinit(),this.inited=!0,this.opt=$.extend({useEnter:!0,defaultTag:"p",placeholder:"start typing..",cbMouseUp:function(){return function(){}}(),cbKeyDown:function(){return function(){}}()},i),this.$el=this.opt.$el;var n=this;n.colors=[];var o=$('<span class="g-color-text-1">&nbsp</span><span class="g-color-text-2">&nbsp</span><span class="g-color-text-3">&nbsp</span>').appendTo(this.$el);o.each(function(){n.colors.push($(this).css("color"))}),o.remove(),this.$el.attr("contenteditable",!0).attr("spellcheck",!1),document.execCommand("defaultParagraphSeparator",!1,"p"),document.execCommand("enableObjectResizing",!1,!1),document.execCommand("styleWithCSS",!1,!0),n.colorsClassApplier=[];for(var a=1;a<n.colors.length+1;a++)n.colorsClassApplier.push(t.createClassApplier("g-color-text-"+a));n.rangeCache=null,n._checkEmpty(),setTimeout(function(){n._cleaner(!0,"init")},10);var l=!0;$(n.$el).on("dblclick.api","a",function(e){r._selection.selectNode($(this).get(0)),n.opt.cbMouseDown&&n.opt.cbBeforeMouseDown($(e.target))}).on("mousedown.api",function(e){n.inited&&($(e.target).closest(r.$el).length?(n.opt.cbMouseDown&&n.opt.cbBeforeMouseDown($(e.target)),n._checkImg(e.target),setTimeout(function(){n.opt.cbMouseDown($(e.target))},0),l=!0):(l=!1,n._enableApiEvents&&!n._activeImg&&!n._activeReadMore&&$(e.target).closest(".js-editableWithEditor").length&&e.preventDefault()),n._enableApiEvents&&(n._cleaner(!0,"mousedown"),$(e.target).closest(r.$el).length&&!$(e.target).text().replace(/\s/g,"").length&&(r._selection.selectNode(e.target),n.rangeCache=r._selection.getCaret(),setTimeout(function(){n.rangeCache&&r._selection.setCaret([n.rangeCache[0],n.rangeCache[0]])},0))))}).on("mouseup.api",function(e){l?($(e.target).closest(r.$el).length&&e.target!=r.$el.get(0)&&n._checkImg(e.target),setTimeout(function(){n.opt&&n.opt.cbMouseUp($(e.target),window.getSelection().isCollapsed,r._selection.selectionRect)},0)):e.preventDefault(),n._enableApiEvents&&(n._checkEmpty(),n.rangeCache=null,n._cleaner(!0,"mouseup"),l&&setTimeout(function(){null==window.getSelection().focusNode||r.activeStyles()},0),l=!1)}).on("mousemove.api",function(){!n._enableApiEvents||n._activeImg||n._activeReadMore||null!=n.rangeCache}).on("keydown.api",function(e){n._enableApiEvents&&(n._activeImg||n._activeReadMore||(13==e.keyCode&&(n.opt&&!n.opt.useEnter?e.preventDefault():(e.shiftKey||e.altKey||e.ctrlKey||e.metaKey)&&(r._selection.insertHtml("<br>"),e.preventDefault())),27==e.keyCode||13!==e.keyCode&&setTimeout(function(){if(n.opt&&n.opt.cbKeyDown(window.getSelection().isCollapsed,r._selection.selectionRect),n._checkEmpty(),r.activeStyles(),(8==e.keyCode||46==e.keyCode)&&r._selection.getSelectedBlocks().forEach(function(t){var i=$(t).find("img"),n=r._selection.getCaret(),o=window.getSelection(),a=function(){return function(){return o.anchorNode.textContent.length===o.getRangeAt(0).endOffset}}();a($(t))&&!i.length&&(46==e.keyCode||"Delete"===e.originalEvent.code)&&$(t).next().find("img").length&&(i=$(t).next().find("img")),i.length&&(i.remove(),r._selection.setCaret([n[1],n[1]]))}),n._cleaner(!0,"keyDown sync"),!e.shiftKey){var t,i=window.getSelection();if(1==i.anchorNode.nodeType?t=i.anchorNode:3==i.anchorNode.nodeType&&(t=i.anchorNode.parentNode),n._checkImg(t),!$(t).text().replace(/\s/g,"").length&&!$(t).find("img").length){"SPAN"==t.tagName&&(t=t.parentNode),r._selection.selectNode(t);var o=r._selection.getCaret();r._selection.setCaret([o[0],o[0]]),$(t).html("<br>")}}},0)))}),r.$el.on("paste.api",function(t){t.preventDefault();var i="";if(null==t.originalEvent.clipboardData?null!=window.clipboardData&&(i=window.clipboardData.getData("text")):i=t.originalEvent.clipboardData.getData("text/plain"),0<i.length){i=e.escape(i),r._selection.insertHtml('<span rel="js-pasted-text">'+i+"</span>"),r._selection.selectNode($('[rel="js-pasted-text"]',r.$el));var o=r._selection.getCaret();r._selection.setCaret([o[1],o[1]]),setTimeout(function(){n._cleaner(!1,"paste")},0)}return!1}).on("cut.api",function(){setTimeout(function(){n._cleaner(!1,"cut"),n._checkEmpty()},0)}),s.text=!0}}(),setFocusToEnd:function(){return function(){var e=this.$el.text().length;this._selection.setCaret([e,e])}}(),activeStyles:function(){return function(){var e=this;if(!r._activeImg&&!r._activeReadMore){var t={color:"color",list:"list",format:"format",align:"align",alignList:"alignList",link:"link",bold:"bold",italic:"italic",underline:"underline",strike:"strike"},i=function(){return function(e,i){null!=t[e]&&(t[e]==e?t[e]=i:t[e]!=i&&delete t[e])}}();r._selection.getSelectedBlocks().forEach(function(e){var t=$(e).closest("ul, ol");if(t.length){var n="UL"==t.get(0).tagName?"unordered":"ordered",o=t.attr("class")?t.attr("class"):"p";i("list",n),i("format",o)}else i("format",e.tagName.toLowerCase());var a=r._getElementCss($(e))["text-align"]||"left";i("align",a)});var n=[];r._selection.getSelectedNodes().forEach(function(o){if(3==o.nodeType&&(o=o.parentNode),-1==$.inArray(o,n)){var a="1",l="link",s="bold",c="italic";"SPAN"==o.tagName&&null!=$(o).attr("class")&&$(o).attr("class").indexOf("g-color-text-")+1&&(a=$(o).attr("class").replace("g-color-text-","")),i("color",a);var u=$(o).closest('[style*="font-weight"]');s=u.length&&u.closest(r.$el).length?"":"bold",i("bold",s);var g=$(o).closest('[style*="font-style"]');c=g.length&&g.closest(r.$el).length?"":"italic",i("italic",c);var p=$(o).closest('[style*="text-decoration"]'),h=e._getElementCss(p),d=h["text-decoration-line"]||h["text-decoration"];p.length&&p.closest(r.$el).length&&("line-through"===d?i("strike",""):i("strike","strike"),"underline"===d?i("underline",""):i("underline","underline")),$(o).closest("a").length?l="":delete t.link,i("link",l),n.push(o)}}),Object.keys(t).forEach(function(e){t[e]==e&&delete t[e]}),$(document).trigger("apiLightControls",t)}}}(),_checkImg:function(){return function(e){if("IMG"==e.tagName||e!=r.$el.get(0)&&$(e).find("img").length){var t=$(e).find("img").length?$(e).find("img"):$(e),i=null,n=t.closest("p");"A"==t.parent().get(0).tagName&&(i=t.parent()),r._activeImg?(null==l.imgData||l.imgData.$img.get(0)!=t.get(0))&&(l.deinit(),l.init(t,i,n)):(this.stop(),l.init(t,i,n),r._activeImg=!0)}else{if(!r._activeImg)return;this["continue"](),l.deinit(),r._activeImg=!1}}}(),_checkReadmore:function(){return function(){}}(),_checkEmpty:function(){return function(){if(0!=this.$el.children().length){var e=this.$el.children().first().get(0).tagName.toLowerCase();"br"!=e&&(this.firstNode=this.$el.children().first().get(0).tagName.toLowerCase())}else if(!this.opt.simpleText){var t=null==this.firstNode?this.opt.defaultTag:this.firstNode;document.execCommand("formatblock",!1,t),r._selection.setCaret([1,1]),this.firstNode=t}r.$el.find(".js-editor-empty-placeholder").remove(),0==this.$el.text().replace(/\s/g,"").length&&0==this.$el.find("img").length&&($.inArray(this.firstNode,!1)&&(this.firstNode=this.opt.defaultTag),this.opt.simpleText?setTimeout(function(){r.$el.html("&nbsp;"),r.$el.focus(),r._selection.setCaret([0,0])}):(this.$el.html("<"+this.firstNode+">&nbsp;</"+this.firstNode+">"),r.$el.focus(),r._selection.setCaret([0,0]))),this.opt.changeHtml()}}(),insertPlaceholder:function(){return function(e){null==e&&(e={$el:r.$el,placeholder:this.opt.placeholder.length?this.opt.placeholder:r.$el.attr("placeholder"),tag:this.opt.defaultTag}),e.$el.find(".js-editor-empty-placeholder").remove(),0==e.$el.text().replace(/\s/g,"").length&&0==e.$el.find("img").length&&e.$el.html("<"+e.tag+' class="js-editor-empty-placeholder">'+e.placeholder+"</"+e.tag+">")}}(),stop:function(){return function(){this.stopped||(s.text=!1,this._enableApiEvents=!1,this.$el.attr("contenteditable",!1).blur(),this.stopped=!0,this._selection.clear())}}(),"continue":function(){return function(){this.stopped&&(s.text=!0,this._enableApiEvents=!0,this.$el.attr("contenteditable",!0),this.stopped=!1,document.execCommand("defaultParagraphSeparator",!1,"p"),document.execCommand("enableObjectResizing",!1,!1),document.execCommand("styleWithCSS",!1,!0))}}(),deinit:function(){return function(){$(document).off(".api"),r.$el.removeAttr("contenteditable").removeAttr("spellcheck").off(".api").blur(),this._enableApiEvents=!0,this.inited=!1,l.deinit(),this.opt.deinitInsertPlaceholder&&this.insertPlaceholder(),this.opt.$el.hasClass("ui-sortable")&&this.opt.$el.sortable("destroy"),$(".edditing-readmore").removeClass("edditing-readmore").html(""),r._activeReadMore=!1,this.opt=null}}(),getData:function(){return function(){return null!==this.opt&&this.$el.length?this.opt.simpleText?this.opt.inlineControls?this.$el.html():0<this.$el.text().replace(/\s/g,"").length?this.$el.text():"":this.$el.html():void 0}}(),_prepare:{link:{open:function(){return function(){r._selection.save(),r._selection.restore(),r._enableApiEvents=!1;var e=r._selection.linkPreapplier();return window.getSelection().isCollapsed&&(r._selection.insertHtml('<span class="js-link"></span>'),/firefox/.test(navigator.userAgent.toLowerCase())&&r._selection.selectNode($(".js-link",r.opt.$el).get(0))),r._selection._addFakeSelection(),r.stop(),{$link:e,$target:null==e?$(".js-link",r.$el):e}}}(),close:function(){return function(){r["continue"](),r._selection._removeFakeSelection()}}()},image:{open:function(){return function(){r._selection.save(),r._enableApiEvents=!1}}(),close:function(){return function(){r._selection.restore(),r._enableApiEvents=!0}}()}},apply:function(){return function(e,t){if(this.inited)if(this.opt.cbApplyProp&&this.opt.cbApplyProp(),"history"==e)this.history[t]();else if(null==this._applier[e])console.info('command "'+e+'" not found');else{r._selection.save(),r._selection.restore(),this.history.push(e,t);var i=this._applier[e](t);"function"==typeof i?(this._cleaner(!0,"apply cmd: "+e+"; val: "+t+"; res type == function"),i()):this._cleaner(i,"apply cmd: "+e+"; val: "+t+";"),r.activeStyles()}}}(),history:{stack:[],undo:function(){return function(){var e=this.stack[this.stack.length-1];r.$el.html(e.html),r._selection.setCaret(e.sel),this.stack.splice(this.stack.length-1,1)}}(),redo:function(){return function(){}}(),push:function(){return function(e,t){this.stack.push({cmd:e,value:t,html:r.$el.html(),sel:r._selection.getCaret()})}}(),get:function(){return function(){}}()}};l={init:function(){return function(e,t,i){var n=this;r.stop(),r._activeImg=!0,s.image=!0,this.imgData={$img:e,$link:t,$parent:i},this.imgData.$parent.addClass("js-img-edit"),$(document).on("keyup.imgApi",function(e){e.stopPropagation(),(8==e.keyCode||46==e.keyCode)&&n.apply("remove","")}),$(document).on("keydown.imgApi",function(){}),null!=this.imgData&&null!=this.imgData.$img&&$(document).trigger("apiImgShowControls",this.imgData),this.activeStyles(),n.insertControlResize(),n.position(),n.setResize(),r._selection.clear(),e.one("load",function(){e.data("loaded",!0),n.position(),n.setResize(),r._selection.clear()})}}(),insertControlResize:function(){return function(){var e=this;$("#ul-main").append('<div id="ul-editor-image-resize" class="js-editableWithEditor"><span class="editor-img-resize-tl ui-resizable-handle ui-resizable-nw"></span><span class="editor-img-resize-tr ui-resizable-handle ui-resizable-ne"></span><span class="editor-img-resize-bl ui-resizable-handle ui-resizable-sw"></span><span class="editor-img-resize-br ui-resizable-handle ui-resizable-se"></span></div>'),e.$resize=$("#ul-editor-image-resize")}}(),deinit:function(){return function(){s.image=!1,$(document).off(".imgApi"),$(document).trigger("apiImgHideControls"),this.imgData=null,this.destroyResize(),r["continue"](),r._activeImg=!1,r._selection.clear()}}(),apply:function(){return function(e,t){var i=this;if(null!=this.imgData&&this._applier[e]){var n=i._applier[e](t);1==n||(i.activeStyles(),null!=l.imgData&&null!=l.imgData.$img&&$(document).trigger("apiImgShowControls",l.imgData),i.position())}}}(),_applier:{image:function(){return function(e){l.imgData.$img.attr("src",e).css("max-height",""),l.imgData.$img.one("load",function(){l.destroyResize(function(){l.insertControlResize(),l.position(),l.setResize()})})}}(),align:function(){return function(e){"justify"!=e&&l.imgData.$img.attr("align",e)}}(),link:function(){return function(e){if(null!=l.imgData.$link&&l.imgData.$img.unwrap(),e.href.length){var t=e.newWindow?' target="_blank"':"";l.imgData.$link=l.imgData.$img.wrap('<a href="'+e.href+'"'+t+"></a>").parent()}}}(),remove:function(){return function(){var e=l.imgData.$parent.prev(),t=!1;if(e.length||(e=l.imgData.$parent.next(),t=!0),l.imgData.$parent.remove(),l.deinit(),r.$el.focus(),e.length){r._selection.selectNode(e.get(0));var i=r._selection.getCaret();t?r._selection.setCaret([i[0],i[0]]):r._selection.setCaret([i[1],i[1]])}else r._selection.setCaret([0,0]);return!0}}()},activeStyles:function(){return function(){var e=this,t={};null!=e.imgData.$link&&(t.link=""),t.align=null==e.imgData.$img.attr("align")?"center":"left"==e.imgData.$img.attr("align")||"right"==e.imgData.$img.attr("align")?e.imgData.$img.attr("align"):"center",$(document).trigger("apiLightControls",t)}}(),_prepare:{link:{open:function(){return function(){return{$link:l.imgData.$link,$target:l.imgData.$img}}}(),close:function(){return function(){null!=l.imgData&&null!=l.imgData.$img&&$(document).trigger("apiImgShowControls",l.imgData)}}()},image:{close:function(){return function(){null!=l.imgData&&null!=l.imgData.$img&&$(document).trigger("apiImgShowControls",l.imgData)}}()}},destroyResize:function(){return function(e){var t=this;e||(e=function(){return function(){}}()),t.$resize&&t.$resize.hasClass("ui-resizable")&&(t.$resize.resizableBootstrap("destroy"),null!=t.$resize&&(t.$resize.remove(),t.$resize=null)),e()}}(),setResize:function(){return function(){var e=this;return 0===e.imgData.$img.width()&&0===e.imgData.$img.height()?!1:(e.$resize.resizableBootstrap({handles:{nw:".editor-img-resize-tl",ne:".editor-img-resize-tr",sw:".editor-img-resize-bl",se:".editor-img-resize-br"},maxWidth:r.$el.width(),aspectRatio:e.imgData.$img.width()/e.imgData.$img.height(),start:function(){return function(){e.imgData.$img.css({"max-height":"100%","max-width":"100%"})}}(),stop:function(){return function(t,i){e.imgData.$img.css({height:"100%",width:"100%","max-height":i.size.height,"max-width":i.size.width}),e.position()}}(),resize:function(){return function(){e.position()}}(),alsoResize:e.imgData.$img}),void(this.setResizing=!0))}}(),position:function(){return function(){var e=this;e.$resize.css({height:e.imgData.$img.height(),width:e.imgData.$img.width(),top:e.imgData.$img.offset().top+$("#ul-main").scrollTop(),left:e.imgData.$img.offset().left}),null!=l.imgData&&null!=l.imgData.$img&&$(document).trigger("apiImgShowControls",l.imgData)}}()};var c=function(){return function(){var e=null;return Object.keys(s).some(function(t){return s[t]?(e=t,!0):void 0}),e}}(),u=function(){return function(e,t){var i=c();null==i||this[i].apply(e,t)}}(),g=function(){return function(e){var t=this,i=c();if(e=$.extend({type:null,open:function(){return function(){}}(),close:function(){return function(){}}()},e),null!=i&&null!=e.type){var n=$.extend({open:function(){return function(){}}(),close:function(){return function(){}}()},this[i]._prepare[e.type]),o=n.open(),a=function(){return function(i){e.close(),n.close(),t.apply(e.type,i)}}(),l=function(){return function(){e.close(),n.close()}}();e.open(a,l,o)}}}(),p={currentEdit:s,text:r,image:l,apply:u,insert:g};return $.extend(r,i._init(p.text)),$.extend(r,o._init(p)),$.extend(r,n),$.extend(r,a),p});
//# sourceMappingURL=editApi.js.map

//# sourceMappingURL=editApi.js.map

//# sourceMappingURL=editApi.js.map

//# sourceMappingURL=editApi.js.map

//# sourceMappingURL=editApi.js.map

//# sourceMappingURL=editApi.js.map

//# sourceMappingURL=editApi.js.map

//# sourceMappingURL=editApi.js.map

//# sourceMappingURL=editApi.js.map

//# sourceMappingURL=editApi.js.map

//# sourceMappingURL=editApi.js.map

//# sourceMappingURL=editApi.js.map

//# sourceMappingURL=editApi.js.map

//# sourceMappingURL=editApi.js.map

//# sourceMappingURL=editApi.js.map

//# sourceMappingURL=editApi.js.map

//# sourceMappingURL=editApi.js.map

//# sourceMappingURL=editApi.js.map

//# sourceMappingURL=editApi.js.map

//# sourceMappingURL=editApi.js.map

//# sourceMappingURL=editApi.js.map

//# sourceMappingURL=editApi.js.map

//# sourceMappingURL=editApi.js.map

//# sourceMappingURL=editApi.js.map

//# sourceMappingURL=editApi.js.map

//# sourceMappingURL=editApi.js.map

//# sourceMappingURL=editApi.js.map

//# sourceMappingURL=editApi.js.map

//# sourceMappingURL=editApi.js.map

//# sourceMappingURL=editApi.js.map

//# sourceMappingURL=editApi.js.map

//# sourceMappingURL=editApi.js.map

//# sourceMappingURL=editApi.js.map

//# sourceMappingURL=editApi.js.map

//# sourceMappingURL=editApi.js.map

//# sourceMappingURL=editApi.js.map

//# sourceMappingURL=editApi.js.map

//# sourceMappingURL=editApi.js.map

//# sourceMappingURL=editApi.js.map

//# sourceMappingURL=editApi.js.map

//# sourceMappingURL=editApi.js.map

//# sourceMappingURL=editApi.js.map

//# sourceMappingURL=editApi.js.map

//# sourceMappingURL=editApi.js.map

//# sourceMappingURL=editApi.js.map

//# sourceMappingURL=editApi.js.map

//# sourceMappingURL=editApi.js.map

//# sourceMappingURL=editApi.js.map

//# sourceMappingURL=editApi.js.map

//# sourceMappingURL=editApi.js.map

//# sourceMappingURL=editApi.js.map

//# sourceMappingURL=editApi.js.map

//# sourceMappingURL=editApi.js.map

//# sourceMappingURL=editApi.js.map

//# sourceMappingURL=editApi.js.map

//# sourceMappingURL=editApi.js.map

//# sourceMappingURL=editApi.js.map

//# sourceMappingURL=editApi.js.map

//# sourceMappingURL=editApi.js.map

//# sourceMappingURL=editApi.js.map

//# sourceMappingURL=editApi.js.map

//# sourceMappingURL=editApi.js.map

//# sourceMappingURL=editApi.js.map

//# sourceMappingURL=editApi.js.map

//# sourceMappingURL=editApi.js.map

//# sourceMappingURL=editApi.js.map

//# sourceMappingURL=editApi.js.map

//# sourceMappingURL=editApi.js.map

//# sourceMappingURL=editApi.js.map

//# sourceMappingURL=editApi.js.map

//# sourceMappingURL=editApi.js.map

//# sourceMappingURL=editApi.js.map

//# sourceMappingURL=editApi.js.map

//# sourceMappingURL=editApi.js.map

//# sourceMappingURL=editApi.js.map

//# sourceMappingURL=editApi.js.map

//# sourceMappingURL=editApi.js.map

//# sourceMappingURL=editApi.js.map

//# sourceMappingURL=editApi.js.map

//# sourceMappingURL=editApi.js.map

//# sourceMappingURL=editApi.js.map

//# sourceMappingURL=editApi.js.map

//# sourceMappingURL=editApi.js.map

//# sourceMappingURL=editApi.js.map

//# sourceMappingURL=editApi.js.map

//# sourceMappingURL=editApi.js.map

//# sourceMappingURL=editApi.js.map

//# sourceMappingURL=editApi.js.map

//# sourceMappingURL=editApi.js.map

//# sourceMappingURL=editApi.js.map

//# sourceMappingURL=editApi.js.map

//# sourceMappingURL=editApi.js.map

//# sourceMappingURL=editApi.js.map

//# sourceMappingURL=editApi.js.map

//# sourceMappingURL=editApi.js.map

//# sourceMappingURL=editApi.js.map

//# sourceMappingURL=editApi.js.map

//# sourceMappingURL=editApi.js.map

//# sourceMappingURL=editApi.js.map

//# sourceMappingURL=editApi.js.map

//# sourceMappingURL=editApi.js.map

//# sourceMappingURL=editApi.js.map

//# sourceMappingURL=editApi.js.map

//# sourceMappingURL=editApi.js.map

//# sourceMappingURL=editApi.js.map

//# sourceMappingURL=editApi.js.map

//# sourceMappingURL=editApi.js.map

//# sourceMappingURL=editApi.js.map

//# sourceMappingURL=editApi.js.map

//# sourceMappingURL=editApi.js.map

//# sourceMappingURL=editApi.js.map

//# sourceMappingURL=editApi.js.map

//# sourceMappingURL=editApi.js.map

//# sourceMappingURL=editApi.js.map

//# sourceMappingURL=editApi.js.map

//# sourceMappingURL=editApi.js.map

//# sourceMappingURL=editApi.js.map

//# sourceMappingURL=editApi.js.map

//# sourceMappingURL=editApi.js.map

//# sourceMappingURL=editApi.js.map

//# sourceMappingURL=editApi.js.map

//# sourceMappingURL=editApi.js.map

//# sourceMappingURL=editApi.js.map

//# sourceMappingURL=editApi.js.map

//# sourceMappingURL=editApi.js.map

//# sourceMappingURL=editApi.js.map

//# sourceMappingURL=editApi.js.map

//# sourceMappingURL=editApi.js.map

//# sourceMappingURL=editApi.js.map

//# sourceMappingURL=editApi.js.map

//# sourceMappingURL=editApi.js.map

//# sourceMappingURL=editApi.js.map

//# sourceMappingURL=editApi.js.map

//# sourceMappingURL=editApi.js.map

//# sourceMappingURL=editApi.js.map

//# sourceMappingURL=editApi.js.map

//# sourceMappingURL=editApi.js.map

//# sourceMappingURL=editApi.js.map

//# sourceMappingURL=editApi.js.map

//# sourceMappingURL=editApi.js.map

//# sourceMappingURL=editApi.js.map

//# sourceMappingURL=editApi.js.map

//# sourceMappingURL=editApi.js.map

//# sourceMappingURL=editApi.js.map

//# sourceMappingURL=editApi.js.map

//# sourceMappingURL=editApi.js.map

//# sourceMappingURL=editApi.js.map

//# sourceMappingURL=editApi.js.map

//# sourceMappingURL=editApi.js.map

//# sourceMappingURL=editApi.js.map

//# sourceMappingURL=editApi.js.map

//# sourceMappingURL=editApi.js.map

//# sourceMappingURL=editApi.js.map

//# sourceMappingURL=editApi.js.map

//# sourceMappingURL=editApi.js.map

//# sourceMappingURL=editApi.js.map

//# sourceMappingURL=editApi.js.map

//# sourceMappingURL=editApi.js.map

//# sourceMappingURL=editApi.js.map

//# sourceMappingURL=editApi.js.map

//# sourceMappingURL=editApi.js.map

//# sourceMappingURL=editApi.js.map

//# sourceMappingURL=editApi.js.map

//# sourceMappingURL=editApi.js.map

//# sourceMappingURL=editApi.js.map

//# sourceMappingURL=editApi.js.map

//# sourceMappingURL=editApi.js.map

//# sourceMappingURL=editApi.js.map

//# sourceMappingURL=editApi.js.map

//# sourceMappingURL=editApi.js.map

//# sourceMappingURL=editApi.js.map

//# sourceMappingURL=editApi.js.map

//# sourceMappingURL=editApi.js.map

//# sourceMappingURL=editApi.js.map

//# sourceMappingURL=editApi.js.map

//# sourceMappingURL=editApi.js.map

//# sourceMappingURL=editApi.js.map

//# sourceMappingURL=editApi.js.map

//# sourceMappingURL=editApi.js.map

//# sourceMappingURL=editApi.js.map

//# sourceMappingURL=editApi.js.map

//# sourceMappingURL=editApi.js.map

//# sourceMappingURL=editApi.js.map

//# sourceMappingURL=editApi.js.map

//# sourceMappingURL=editApi.js.map

//# sourceMappingURL=editApi.js.map

//# sourceMappingURL=editApi.js.map

//# sourceMappingURL=editApi.js.map

//# sourceMappingURL=editApi.js.map

//# sourceMappingURL=editApi.js.map

//# sourceMappingURL=editApi.js.map

//# sourceMappingURL=editApi.js.map

//# sourceMappingURL=editApi.js.map

//# sourceMappingURL=editApi.js.map

//# sourceMappingURL=editApi.js.map

//# sourceMappingURL=editApi.js.map

//# sourceMappingURL=editApi.js.map

//# sourceMappingURL=editApi.js.map

//# sourceMappingURL=editApi.js.map

//# sourceMappingURL=editApi.js.map

//# sourceMappingURL=editApi.js.map

//# sourceMappingURL=editApi.js.map

//# sourceMappingURL=editApi.js.map

//# sourceMappingURL=editApi.js.map

//# sourceMappingURL=editApi.js.map

//# sourceMappingURL=editApi.js.map

//# sourceMappingURL=editApi.js.map

//# sourceMappingURL=editApi.js.map

//# sourceMappingURL=editApi.js.map

//# sourceMappingURL=editApi.js.map

//# sourceMappingURL=editApi.js.map

//# sourceMappingURL=editApi.js.map

//# sourceMappingURL=editApi.js.map

//# sourceMappingURL=editApi.js.map

//# sourceMappingURL=editApi.js.map

//# sourceMappingURL=editApi.js.map

//# sourceMappingURL=editApi.js.map

//# sourceMappingURL=editApi.js.map

//# sourceMappingURL=editApi.js.map

//# sourceMappingURL=editApi.js.map

//# sourceMappingURL=editApi.js.map

//# sourceMappingURL=editApi.js.map

//# sourceMappingURL=editApi.js.map

//# sourceMappingURL=editApi.js.map

//# sourceMappingURL=editApi.js.map

//# sourceMappingURL=editApi.js.map

//# sourceMappingURL=editApi.js.map

//# sourceMappingURL=editApi.js.map

//# sourceMappingURL=editApi.js.map

//# sourceMappingURL=editApi.js.map

//# sourceMappingURL=editApi.js.map

//# sourceMappingURL=editApi.js.map

//# sourceMappingURL=editApi.js.map

//# sourceMappingURL=editApi.js.map

//# sourceMappingURL=editApi.js.map

//# sourceMappingURL=editApi.js.map

//# sourceMappingURL=editApi.js.map

//# sourceMappingURL=editApi.js.map

//# sourceMappingURL=editApi.js.map

//# sourceMappingURL=editApi.js.map

//# sourceMappingURL=editApi.js.map

//# sourceMappingURL=editApi.js.map

//# sourceMappingURL=editApi.js.map

//# sourceMappingURL=editApi.js.map

//# sourceMappingURL=editApi.js.map

//# sourceMappingURL=editApi.js.map

//# sourceMappingURL=editApi.js.map

//# sourceMappingURL=editApi.js.map

//# sourceMappingURL=editApi.js.map

//# sourceMappingURL=editApi.js.map

//# sourceMappingURL=editApi.js.map

//# sourceMappingURL=editApi.js.map

//# sourceMappingURL=editApi.js.map

//# sourceMappingURL=editApi.js.map

//# sourceMappingURL=editApi.js.map

//# sourceMappingURL=editApi.js.map

//# sourceMappingURL=editApi.js.map

//# sourceMappingURL=editApi.js.map

//# sourceMappingURL=editApi.js.map

//# sourceMappingURL=editApi.js.map

//# sourceMappingURL=editApi.js.map

//# sourceMappingURL=editApi.js.map

//# sourceMappingURL=editApi.js.map

//# sourceMappingURL=editApi.js.map

//# sourceMappingURL=editApi.js.map

//# sourceMappingURL=editApi.js.map

//# sourceMappingURL=editApi.js.map

//# sourceMappingURL=editApi.js.map

//# sourceMappingURL=editApi.js.map

//# sourceMappingURL=editApi.js.map

//# sourceMappingURL=editApi.js.map

//# sourceMappingURL=editApi.js.map

//# sourceMappingURL=editApi.js.map

//# sourceMappingURL=editApi.js.map

//# sourceMappingURL=editApi.js.map

//# sourceMappingURL=editApi.js.map

//# sourceMappingURL=editApi.js.map

//# sourceMappingURL=editApi.js.map

//# sourceMappingURL=editApi.js.map

//# sourceMappingURL=editApi.js.map

//# sourceMappingURL=editApi.js.map

//# sourceMappingURL=editApi.js.map

//# sourceMappingURL=editApi.js.map

//# sourceMappingURL=editApi.js.map

//# sourceMappingURL=editApi.js.map

//# sourceMappingURL=editApi.js.map

//# sourceMappingURL=editApi.js.map

//# sourceMappingURL=editApi.js.map

//# sourceMappingURL=editApi.js.map

//# sourceMappingURL=editApi.js.map

//# sourceMappingURL=editApi.js.map

//# sourceMappingURL=editApi.js.map

//# sourceMappingURL=editApi.js.map

//# sourceMappingURL=editApi.js.map

//# sourceMappingURL=editApi.js.map

//# sourceMappingURL=editApi.js.map

//# sourceMappingURL=editApi.js.map

//# sourceMappingURL=editApi.js.map

//# sourceMappingURL=editApi.js.map

//# sourceMappingURL=editApi.js.map

//# sourceMappingURL=editApi.js.map

//# sourceMappingURL=editApi.js.map

//# sourceMappingURL=editApi.js.map

//# sourceMappingURL=editApi.js.map

//# sourceMappingURL=editApi.js.map

//# sourceMappingURL=editApi.js.map

//# sourceMappingURL=editApi.js.map

//# sourceMappingURL=editApi.js.map

//# sourceMappingURL=editApi.js.map

//# sourceMappingURL=editApi.js.map

//# sourceMappingURL=editApi.js.map

//# sourceMappingURL=editApi.js.map

//# sourceMappingURL=editApi.js.map

//# sourceMappingURL=editApi.js.map

//# sourceMappingURL=editApi.js.map

//# sourceMappingURL=editApi.js.map

//# sourceMappingURL=editApi.js.map

//# sourceMappingURL=editApi.js.map

//# sourceMappingURL=editApi.js.map

//# sourceMappingURL=editApi.js.map

//# sourceMappingURL=editApi.js.map

//# sourceMappingURL=editApi.js.map

//# sourceMappingURL=editApi.js.map

//# sourceMappingURL=editApi.js.map

//# sourceMappingURL=editApi.js.map

//# sourceMappingURL=editApi.js.map

//# sourceMappingURL=editApi.js.map

//# sourceMappingURL=editApi.js.map

//# sourceMappingURL=editApi.js.map

//# sourceMappingURL=editApi.js.map

//# sourceMappingURL=editApi.js.map

//# sourceMappingURL=editApi.js.map

//# sourceMappingURL=editApi.js.map

//# sourceMappingURL=editApi.js.map

//# sourceMappingURL=editApi.js.map

//# sourceMappingURL=editApi.js.map

//# sourceMappingURL=editApi.js.map

//# sourceMappingURL=editApi.js.map

//# sourceMappingURL=editApi.js.map

//# sourceMappingURL=editApi.js.map

//# sourceMappingURL=editApi.js.map

//# sourceMappingURL=editApi.js.map

//# sourceMappingURL=editApi.js.map

//# sourceMappingURL=editApi.js.map

//# sourceMappingURL=editApi.js.map

//# sourceMappingURL=editApi.js.map

//# sourceMappingURL=editApi.js.map

//# sourceMappingURL=editApi.js.map

//# sourceMappingURL=editApi.js.map

//# sourceMappingURL=editApi.js.map

//# sourceMappingURL=editApi.js.map

//# sourceMappingURL=editApi.js.map

//# sourceMappingURL=editApi.js.map

//# sourceMappingURL=editApi.js.map

//# sourceMappingURL=editApi.js.map

//# sourceMappingURL=editApi.js.map

//# sourceMappingURL=editApi.js.map

//# sourceMappingURL=editApi.js.map

//# sourceMappingURL=editApi.js.map

//# sourceMappingURL=editApi.js.map

//# sourceMappingURL=editApi.js.map

//# sourceMappingURL=editApi.js.map

//# sourceMappingURL=editApi.js.map

//# sourceMappingURL=editApi.js.map

//# sourceMappingURL=editApi.js.map

//# sourceMappingURL=editApi.js.map

//# sourceMappingURL=editApi.js.map

//# sourceMappingURL=editApi.js.map

//# sourceMappingURL=editApi.js.map

//# sourceMappingURL=editApi.js.map

//# sourceMappingURL=editApi.js.map

//# sourceMappingURL=editApi.js.map

//# sourceMappingURL=editApi.js.map

//# sourceMappingURL=editApi.js.map

//# sourceMappingURL=editApi.js.map

//# sourceMappingURL=editApi.js.map

//# sourceMappingURL=editApi.js.map

//# sourceMappingURL=editApi.js.map

//# sourceMappingURL=editApi.js.map

//# sourceMappingURL=editApi.js.map

//# sourceMappingURL=editApi.js.map

//# sourceMappingURL=editApi.js.map

//# sourceMappingURL=editApi.js.map

//# sourceMappingURL=editApi.js.map

//# sourceMappingURL=editApi.js.map

//# sourceMappingURL=editApi.js.map

//# sourceMappingURL=editApi.js.map

//# sourceMappingURL=editApi.js.map

//# sourceMappingURL=editApi.js.map

//# sourceMappingURL=editApi.js.map

//# sourceMappingURL=editApi.js.map

//# sourceMappingURL=editApi.js.map

//# sourceMappingURL=editApi.js.map

//# sourceMappingURL=editApi.js.map

//# sourceMappingURL=editApi.js.map

//# sourceMappingURL=editApi.js.map

//# sourceMappingURL=editApi.js.map

//# sourceMappingURL=editApi.js.map

//# sourceMappingURL=editApi.js.map

//# sourceMappingURL=editApi.js.map

//# sourceMappingURL=editApi.js.map

//# sourceMappingURL=editApi.js.map

//# sourceMappingURL=editApi.js.map

//# sourceMappingURL=editApi.js.map

//# sourceMappingURL=editApi.js.map

//# sourceMappingURL=editApi.js.map

//# sourceMappingURL=editApi.js.map

//# sourceMappingURL=editApi.js.map

//# sourceMappingURL=editApi.js.map

//# sourceMappingURL=editApi.js.map

//# sourceMappingURL=editApi.js.map

//# sourceMappingURL=editApi.js.map

//# sourceMappingURL=editApi.js.map

//# sourceMappingURL=editApi.js.map

//# sourceMappingURL=editApi.js.map

//# sourceMappingURL=editApi.js.map

//# sourceMappingURL=editApi.js.map

//# sourceMappingURL=editApi.js.map

//# sourceMappingURL=editApi.js.map

//# sourceMappingURL=editApi.js.map

//# sourceMappingURL=editApi.js.map

//# sourceMappingURL=editApi.js.map

//# sourceMappingURL=editApi.js.map

//# sourceMappingURL=editApi.js.map

//# sourceMappingURL=editApi.js.map

//# sourceMappingURL=editApi.js.map

//# sourceMappingURL=editApi.js.map

//# sourceMappingURL=editApi.js.map

//# sourceMappingURL=editApi.js.map

//# sourceMappingURL=editApi.js.map

//# sourceMappingURL=editApi.js.map

//# sourceMappingURL=editApi.js.map

//# sourceMappingURL=editApi.js.map

//# sourceMappingURL=editApi.js.map

//# sourceMappingURL=editApi.js.map

//# sourceMappingURL=editApi.js.map

//# sourceMappingURL=editApi.js.map

//# sourceMappingURL=editApi.js.map

//# sourceMappingURL=editApi.js.map
