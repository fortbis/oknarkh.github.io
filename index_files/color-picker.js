'use strict';define('ul-framework/colorPicker',['jquery','_','i18n','U','ul-framework/range','tpl!ul-framework/color-picker','ukit-colorpicker','jquery-ui-position'],function(a,c,d,f,h,i){var j=c.template(i),k={defaults:{$el:a(document.body),colors:['transparent','#ffffff','#D4D7D9','#3D424D','#000000'],activeColor:'#ffffff',isPipetteEnabled:!0,alpha:{isEnabled:!0,value:0.3},onColorSelect:function onColorSelect(){}},init:function init(l){var m=this;l.colors=l.colors||m.defaults.colors,l.alpha=a.extend({},m.defaults.alpha,l.alpha),m.opts=a.extend({},m.defaults,l),m.selectedColor={color:m.opts.activeColor,alpha:m.opts.alpha.isEnabled?m.opts.alpha.value:null},m.opts.$el.append(j(a.extend(m.opts,{__:d,isActiveColorBright:m.isBrightColor.apply(m,m.hexToRgb(m.opts.activeColor))}))),m.opts.alpha.isEnabled&&h.init(),m.addListeners()},destroy:function destroy(){var l=this;l.opts.$el.off('.ulColorPicker').find('.js-color-picker').empty()},addListeners:function addListeners(){var l=this;l.opts.$el.on('click.ulColorPicker','.js-color-picker__color:not(.active)',function(){var m=a(this);l.setElActive(m),l.selectedColor.color=m.attr('data-color'),l.onColorSelect()}).on('click.ulColorPicker','.js-color-picker__pipette',function(){var m=a(this),n=m.attr('data-color');m.hasClass('active')||!n?l.initPipette(a(this)):(l.setElActive(m),l.selectedColor.color=n,l.onColorSelect())}),l.opts.alpha.isEnabled&&l.opts.$el.on('change.ulColorPicker','.js-colorpicker__alpha',function(m,n){l.selectedColor.alpha=n.val/100,l.onColorSelect()})},setElActive:function setElActive(l){l.addClass('active').siblings('.active').removeClass('active')},initPipette:function initPipette(l){var m=this,n=l.offset(),o=n.top+l.outerHeight()+12,p=n.left-10,q=a('<div class="ul-colorpicker-layout"><div class="ul-colorpicker"></div></div>').appendTo('body'),s=a('.ul-colorpicker',q).css({top:o,left:p});s.ColorPicker({color:l.attr('data-color'),flat:!0,onHide:function onHide(){setTimeout(function(){q.remove()},0)},onChange:f.limiter(function(t,u,v){m.selectedColor.color='#'+u,m.onColorSelect(),m.setElActive(l),l.css('background',m.selectedColor.color).attr('data-color',m.selectedColor.color).find('span').css('color',m.isBrightColor(v.r,v.g,v.b)?'#000':'#fff')},100)}),s.offset().top+s.outerHeight()>a(window).height()&&s.css({top:n.top-s.outerHeight()-12}).attr('data-position','top'),s.ColorPickerShow()},onColorSelect:function onColorSelect(){var l=this;if(l.opts.alpha.isEnabled){var m='transparent'===l.selectedColor.color?'hide':'fadeIn';a('.js-colorpicker__alpha-wrapper',l.opts.$el)[m]()}l.opts.onColorSelect(l.selectedColor.color,l.selectedColor.alpha)},isBrightColor:function isBrightColor(l,m,n){return 0.5<(0.299*l+0.587*m+0.114*n)/255},hexToRgb:function hexToRgb(l){var m=l.trim().replace('#',''),n=parseInt(m.slice(0,2),16),o=parseInt(m.slice(2,4),16),p=parseInt(m.slice(4,6),16);return[n,o,p]}};return function(l){var m=Object.create(k);return m.init(l),m}});
//# sourceMappingURL=color-picker.js.map

//# sourceMappingURL=color-picker.js.map

//# sourceMappingURL=color-picker.js.map

//# sourceMappingURL=color-picker.js.map

//# sourceMappingURL=color-picker.js.map

//# sourceMappingURL=color-picker.js.map

//# sourceMappingURL=color-picker.js.map

//# sourceMappingURL=color-picker.js.map

//# sourceMappingURL=color-picker.js.map

//# sourceMappingURL=color-picker.js.map

//# sourceMappingURL=color-picker.js.map

//# sourceMappingURL=color-picker.js.map

//# sourceMappingURL=color-picker.js.map

//# sourceMappingURL=color-picker.js.map

//# sourceMappingURL=color-picker.js.map

//# sourceMappingURL=color-picker.js.map

//# sourceMappingURL=color-picker.js.map

//# sourceMappingURL=color-picker.js.map

//# sourceMappingURL=color-picker.js.map

//# sourceMappingURL=color-picker.js.map

//# sourceMappingURL=color-picker.js.map

//# sourceMappingURL=color-picker.js.map

//# sourceMappingURL=color-picker.js.map

//# sourceMappingURL=color-picker.js.map

//# sourceMappingURL=color-picker.js.map

//# sourceMappingURL=color-picker.js.map

//# sourceMappingURL=color-picker.js.map

//# sourceMappingURL=color-picker.js.map

//# sourceMappingURL=color-picker.js.map

//# sourceMappingURL=color-picker.js.map

//# sourceMappingURL=color-picker.js.map

//# sourceMappingURL=color-picker.js.map

//# sourceMappingURL=color-picker.js.map

//# sourceMappingURL=color-picker.js.map

//# sourceMappingURL=color-picker.js.map

//# sourceMappingURL=color-picker.js.map

//# sourceMappingURL=color-picker.js.map

//# sourceMappingURL=color-picker.js.map

//# sourceMappingURL=color-picker.js.map

//# sourceMappingURL=color-picker.js.map

//# sourceMappingURL=color-picker.js.map

//# sourceMappingURL=color-picker.js.map

//# sourceMappingURL=color-picker.js.map

//# sourceMappingURL=color-picker.js.map

//# sourceMappingURL=color-picker.js.map

//# sourceMappingURL=color-picker.js.map

//# sourceMappingURL=color-picker.js.map

//# sourceMappingURL=color-picker.js.map

//# sourceMappingURL=color-picker.js.map

//# sourceMappingURL=color-picker.js.map

//# sourceMappingURL=color-picker.js.map

//# sourceMappingURL=color-picker.js.map

//# sourceMappingURL=color-picker.js.map

//# sourceMappingURL=color-picker.js.map

//# sourceMappingURL=color-picker.js.map

//# sourceMappingURL=color-picker.js.map

//# sourceMappingURL=color-picker.js.map

//# sourceMappingURL=color-picker.js.map

//# sourceMappingURL=color-picker.js.map

//# sourceMappingURL=color-picker.js.map

//# sourceMappingURL=color-picker.js.map

//# sourceMappingURL=color-picker.js.map

//# sourceMappingURL=color-picker.js.map

//# sourceMappingURL=color-picker.js.map

//# sourceMappingURL=color-picker.js.map

//# sourceMappingURL=color-picker.js.map

//# sourceMappingURL=color-picker.js.map

//# sourceMappingURL=color-picker.js.map

//# sourceMappingURL=color-picker.js.map

//# sourceMappingURL=color-picker.js.map

//# sourceMappingURL=color-picker.js.map

//# sourceMappingURL=color-picker.js.map

//# sourceMappingURL=color-picker.js.map

//# sourceMappingURL=color-picker.js.map

//# sourceMappingURL=color-picker.js.map

//# sourceMappingURL=color-picker.js.map

//# sourceMappingURL=color-picker.js.map

//# sourceMappingURL=color-picker.js.map

//# sourceMappingURL=color-picker.js.map

//# sourceMappingURL=color-picker.js.map

//# sourceMappingURL=color-picker.js.map

//# sourceMappingURL=color-picker.js.map

//# sourceMappingURL=color-picker.js.map

//# sourceMappingURL=color-picker.js.map

//# sourceMappingURL=color-picker.js.map

//# sourceMappingURL=color-picker.js.map

//# sourceMappingURL=color-picker.js.map

//# sourceMappingURL=color-picker.js.map

//# sourceMappingURL=color-picker.js.map

//# sourceMappingURL=color-picker.js.map

//# sourceMappingURL=color-picker.js.map

//# sourceMappingURL=color-picker.js.map

//# sourceMappingURL=color-picker.js.map

//# sourceMappingURL=color-picker.js.map

//# sourceMappingURL=color-picker.js.map

//# sourceMappingURL=color-picker.js.map

//# sourceMappingURL=color-picker.js.map

//# sourceMappingURL=color-picker.js.map

//# sourceMappingURL=color-picker.js.map

//# sourceMappingURL=color-picker.js.map

//# sourceMappingURL=color-picker.js.map

//# sourceMappingURL=color-picker.js.map

//# sourceMappingURL=color-picker.js.map

//# sourceMappingURL=color-picker.js.map

//# sourceMappingURL=color-picker.js.map

//# sourceMappingURL=color-picker.js.map

//# sourceMappingURL=color-picker.js.map

//# sourceMappingURL=color-picker.js.map

//# sourceMappingURL=color-picker.js.map

//# sourceMappingURL=color-picker.js.map

//# sourceMappingURL=color-picker.js.map

//# sourceMappingURL=color-picker.js.map

//# sourceMappingURL=color-picker.js.map

//# sourceMappingURL=color-picker.js.map

//# sourceMappingURL=color-picker.js.map

//# sourceMappingURL=color-picker.js.map

//# sourceMappingURL=color-picker.js.map

//# sourceMappingURL=color-picker.js.map

//# sourceMappingURL=color-picker.js.map

//# sourceMappingURL=color-picker.js.map

//# sourceMappingURL=color-picker.js.map

//# sourceMappingURL=color-picker.js.map

//# sourceMappingURL=color-picker.js.map

//# sourceMappingURL=color-picker.js.map

//# sourceMappingURL=color-picker.js.map

//# sourceMappingURL=color-picker.js.map

//# sourceMappingURL=color-picker.js.map

//# sourceMappingURL=color-picker.js.map

//# sourceMappingURL=color-picker.js.map

//# sourceMappingURL=color-picker.js.map

//# sourceMappingURL=color-picker.js.map

//# sourceMappingURL=color-picker.js.map

//# sourceMappingURL=color-picker.js.map

//# sourceMappingURL=color-picker.js.map

//# sourceMappingURL=color-picker.js.map

//# sourceMappingURL=color-picker.js.map

//# sourceMappingURL=color-picker.js.map

//# sourceMappingURL=color-picker.js.map

//# sourceMappingURL=color-picker.js.map

//# sourceMappingURL=color-picker.js.map

//# sourceMappingURL=color-picker.js.map

//# sourceMappingURL=color-picker.js.map

//# sourceMappingURL=color-picker.js.map

//# sourceMappingURL=color-picker.js.map

//# sourceMappingURL=color-picker.js.map

//# sourceMappingURL=color-picker.js.map

//# sourceMappingURL=color-picker.js.map

//# sourceMappingURL=color-picker.js.map

//# sourceMappingURL=color-picker.js.map

//# sourceMappingURL=color-picker.js.map

//# sourceMappingURL=color-picker.js.map

//# sourceMappingURL=color-picker.js.map

//# sourceMappingURL=color-picker.js.map

//# sourceMappingURL=color-picker.js.map

//# sourceMappingURL=color-picker.js.map

//# sourceMappingURL=color-picker.js.map

//# sourceMappingURL=color-picker.js.map

//# sourceMappingURL=color-picker.js.map

//# sourceMappingURL=color-picker.js.map

//# sourceMappingURL=color-picker.js.map

//# sourceMappingURL=color-picker.js.map

//# sourceMappingURL=color-picker.js.map

//# sourceMappingURL=color-picker.js.map

//# sourceMappingURL=color-picker.js.map

//# sourceMappingURL=color-picker.js.map

//# sourceMappingURL=color-picker.js.map

//# sourceMappingURL=color-picker.js.map

//# sourceMappingURL=color-picker.js.map

//# sourceMappingURL=color-picker.js.map

//# sourceMappingURL=color-picker.js.map

//# sourceMappingURL=color-picker.js.map

//# sourceMappingURL=color-picker.js.map

//# sourceMappingURL=color-picker.js.map

//# sourceMappingURL=color-picker.js.map

//# sourceMappingURL=color-picker.js.map

//# sourceMappingURL=color-picker.js.map

//# sourceMappingURL=color-picker.js.map

//# sourceMappingURL=color-picker.js.map

//# sourceMappingURL=color-picker.js.map

//# sourceMappingURL=color-picker.js.map

//# sourceMappingURL=color-picker.js.map

//# sourceMappingURL=color-picker.js.map

//# sourceMappingURL=color-picker.js.map

//# sourceMappingURL=color-picker.js.map

//# sourceMappingURL=color-picker.js.map

//# sourceMappingURL=color-picker.js.map

//# sourceMappingURL=color-picker.js.map

//# sourceMappingURL=color-picker.js.map

//# sourceMappingURL=color-picker.js.map

//# sourceMappingURL=color-picker.js.map

//# sourceMappingURL=color-picker.js.map

//# sourceMappingURL=color-picker.js.map

//# sourceMappingURL=color-picker.js.map

//# sourceMappingURL=color-picker.js.map

//# sourceMappingURL=color-picker.js.map

//# sourceMappingURL=color-picker.js.map

//# sourceMappingURL=color-picker.js.map

//# sourceMappingURL=color-picker.js.map

//# sourceMappingURL=color-picker.js.map

//# sourceMappingURL=color-picker.js.map

//# sourceMappingURL=color-picker.js.map

//# sourceMappingURL=color-picker.js.map

//# sourceMappingURL=color-picker.js.map

//# sourceMappingURL=color-picker.js.map

//# sourceMappingURL=color-picker.js.map

//# sourceMappingURL=color-picker.js.map

//# sourceMappingURL=color-picker.js.map

//# sourceMappingURL=color-picker.js.map

//# sourceMappingURL=color-picker.js.map

//# sourceMappingURL=color-picker.js.map

//# sourceMappingURL=color-picker.js.map

//# sourceMappingURL=color-picker.js.map

//# sourceMappingURL=color-picker.js.map

//# sourceMappingURL=color-picker.js.map

//# sourceMappingURL=color-picker.js.map

//# sourceMappingURL=color-picker.js.map

//# sourceMappingURL=color-picker.js.map

//# sourceMappingURL=color-picker.js.map

//# sourceMappingURL=color-picker.js.map

//# sourceMappingURL=color-picker.js.map

//# sourceMappingURL=color-picker.js.map

//# sourceMappingURL=color-picker.js.map

//# sourceMappingURL=color-picker.js.map

//# sourceMappingURL=color-picker.js.map

//# sourceMappingURL=color-picker.js.map

//# sourceMappingURL=color-picker.js.map

//# sourceMappingURL=color-picker.js.map

//# sourceMappingURL=color-picker.js.map

//# sourceMappingURL=color-picker.js.map

//# sourceMappingURL=color-picker.js.map

//# sourceMappingURL=color-picker.js.map

//# sourceMappingURL=color-picker.js.map

//# sourceMappingURL=color-picker.js.map

//# sourceMappingURL=color-picker.js.map

//# sourceMappingURL=color-picker.js.map

//# sourceMappingURL=color-picker.js.map

//# sourceMappingURL=color-picker.js.map

//# sourceMappingURL=color-picker.js.map

//# sourceMappingURL=color-picker.js.map

//# sourceMappingURL=color-picker.js.map

//# sourceMappingURL=color-picker.js.map

//# sourceMappingURL=color-picker.js.map

//# sourceMappingURL=color-picker.js.map

//# sourceMappingURL=color-picker.js.map

//# sourceMappingURL=color-picker.js.map

//# sourceMappingURL=color-picker.js.map

//# sourceMappingURL=color-picker.js.map

//# sourceMappingURL=color-picker.js.map

//# sourceMappingURL=color-picker.js.map

//# sourceMappingURL=color-picker.js.map

//# sourceMappingURL=color-picker.js.map

//# sourceMappingURL=color-picker.js.map

//# sourceMappingURL=color-picker.js.map

//# sourceMappingURL=color-picker.js.map

//# sourceMappingURL=color-picker.js.map

//# sourceMappingURL=color-picker.js.map

//# sourceMappingURL=color-picker.js.map

//# sourceMappingURL=color-picker.js.map

//# sourceMappingURL=color-picker.js.map

//# sourceMappingURL=color-picker.js.map

//# sourceMappingURL=color-picker.js.map

//# sourceMappingURL=color-picker.js.map

//# sourceMappingURL=color-picker.js.map

//# sourceMappingURL=color-picker.js.map

//# sourceMappingURL=color-picker.js.map

//# sourceMappingURL=color-picker.js.map

//# sourceMappingURL=color-picker.js.map

//# sourceMappingURL=color-picker.js.map

//# sourceMappingURL=color-picker.js.map

//# sourceMappingURL=color-picker.js.map

//# sourceMappingURL=color-picker.js.map

//# sourceMappingURL=color-picker.js.map

//# sourceMappingURL=color-picker.js.map

//# sourceMappingURL=color-picker.js.map

//# sourceMappingURL=color-picker.js.map

//# sourceMappingURL=color-picker.js.map

//# sourceMappingURL=color-picker.js.map

//# sourceMappingURL=color-picker.js.map

//# sourceMappingURL=color-picker.js.map

//# sourceMappingURL=color-picker.js.map

//# sourceMappingURL=color-picker.js.map

//# sourceMappingURL=color-picker.js.map

//# sourceMappingURL=color-picker.js.map

//# sourceMappingURL=color-picker.js.map

//# sourceMappingURL=color-picker.js.map

//# sourceMappingURL=color-picker.js.map

//# sourceMappingURL=color-picker.js.map

//# sourceMappingURL=color-picker.js.map

//# sourceMappingURL=color-picker.js.map

//# sourceMappingURL=color-picker.js.map

//# sourceMappingURL=color-picker.js.map

//# sourceMappingURL=color-picker.js.map

//# sourceMappingURL=color-picker.js.map

//# sourceMappingURL=color-picker.js.map

//# sourceMappingURL=color-picker.js.map

//# sourceMappingURL=color-picker.js.map

//# sourceMappingURL=color-picker.js.map

//# sourceMappingURL=color-picker.js.map

//# sourceMappingURL=color-picker.js.map

//# sourceMappingURL=color-picker.js.map

//# sourceMappingURL=color-picker.js.map

//# sourceMappingURL=color-picker.js.map

//# sourceMappingURL=color-picker.js.map

//# sourceMappingURL=color-picker.js.map

//# sourceMappingURL=color-picker.js.map

//# sourceMappingURL=color-picker.js.map

//# sourceMappingURL=color-picker.js.map

//# sourceMappingURL=color-picker.js.map

//# sourceMappingURL=color-picker.js.map

//# sourceMappingURL=color-picker.js.map

//# sourceMappingURL=color-picker.js.map

//# sourceMappingURL=color-picker.js.map

//# sourceMappingURL=color-picker.js.map

//# sourceMappingURL=color-picker.js.map

//# sourceMappingURL=color-picker.js.map

//# sourceMappingURL=color-picker.js.map

//# sourceMappingURL=color-picker.js.map

//# sourceMappingURL=color-picker.js.map

//# sourceMappingURL=color-picker.js.map

//# sourceMappingURL=color-picker.js.map

//# sourceMappingURL=color-picker.js.map

//# sourceMappingURL=color-picker.js.map

//# sourceMappingURL=color-picker.js.map

//# sourceMappingURL=color-picker.js.map

//# sourceMappingURL=color-picker.js.map

//# sourceMappingURL=color-picker.js.map

//# sourceMappingURL=color-picker.js.map

//# sourceMappingURL=color-picker.js.map

//# sourceMappingURL=color-picker.js.map

//# sourceMappingURL=color-picker.js.map

//# sourceMappingURL=color-picker.js.map

//# sourceMappingURL=color-picker.js.map

//# sourceMappingURL=color-picker.js.map

//# sourceMappingURL=color-picker.js.map

//# sourceMappingURL=color-picker.js.map

//# sourceMappingURL=color-picker.js.map

//# sourceMappingURL=color-picker.js.map

//# sourceMappingURL=color-picker.js.map

//# sourceMappingURL=color-picker.js.map

//# sourceMappingURL=color-picker.js.map

//# sourceMappingURL=color-picker.js.map

//# sourceMappingURL=color-picker.js.map

//# sourceMappingURL=color-picker.js.map

//# sourceMappingURL=color-picker.js.map

//# sourceMappingURL=color-picker.js.map

//# sourceMappingURL=color-picker.js.map

//# sourceMappingURL=color-picker.js.map

//# sourceMappingURL=color-picker.js.map

//# sourceMappingURL=color-picker.js.map

//# sourceMappingURL=color-picker.js.map

//# sourceMappingURL=color-picker.js.map

//# sourceMappingURL=color-picker.js.map

//# sourceMappingURL=color-picker.js.map

//# sourceMappingURL=color-picker.js.map

//# sourceMappingURL=color-picker.js.map

//# sourceMappingURL=color-picker.js.map

//# sourceMappingURL=color-picker.js.map

//# sourceMappingURL=color-picker.js.map

//# sourceMappingURL=color-picker.js.map

//# sourceMappingURL=color-picker.js.map

//# sourceMappingURL=color-picker.js.map

//# sourceMappingURL=color-picker.js.map

//# sourceMappingURL=color-picker.js.map

//# sourceMappingURL=color-picker.js.map

//# sourceMappingURL=color-picker.js.map

//# sourceMappingURL=color-picker.js.map

//# sourceMappingURL=color-picker.js.map

//# sourceMappingURL=color-picker.js.map

//# sourceMappingURL=color-picker.js.map

//# sourceMappingURL=color-picker.js.map

//# sourceMappingURL=color-picker.js.map

//# sourceMappingURL=color-picker.js.map

//# sourceMappingURL=color-picker.js.map

//# sourceMappingURL=color-picker.js.map

//# sourceMappingURL=color-picker.js.map

//# sourceMappingURL=color-picker.js.map

//# sourceMappingURL=color-picker.js.map

//# sourceMappingURL=color-picker.js.map

//# sourceMappingURL=color-picker.js.map

//# sourceMappingURL=color-picker.js.map

//# sourceMappingURL=color-picker.js.map

//# sourceMappingURL=color-picker.js.map

//# sourceMappingURL=color-picker.js.map

//# sourceMappingURL=color-picker.js.map

//# sourceMappingURL=color-picker.js.map

//# sourceMappingURL=color-picker.js.map

//# sourceMappingURL=color-picker.js.map

//# sourceMappingURL=color-picker.js.map

//# sourceMappingURL=color-picker.js.map

//# sourceMappingURL=color-picker.js.map

//# sourceMappingURL=color-picker.js.map

//# sourceMappingURL=color-picker.js.map

//# sourceMappingURL=color-picker.js.map

//# sourceMappingURL=color-picker.js.map

//# sourceMappingURL=color-picker.js.map

//# sourceMappingURL=color-picker.js.map

//# sourceMappingURL=color-picker.js.map

//# sourceMappingURL=color-picker.js.map

//# sourceMappingURL=color-picker.js.map

//# sourceMappingURL=color-picker.js.map

//# sourceMappingURL=color-picker.js.map

//# sourceMappingURL=color-picker.js.map

//# sourceMappingURL=color-picker.js.map

//# sourceMappingURL=color-picker.js.map

//# sourceMappingURL=color-picker.js.map

//# sourceMappingURL=color-picker.js.map

//# sourceMappingURL=color-picker.js.map

//# sourceMappingURL=color-picker.js.map

//# sourceMappingURL=color-picker.js.map

//# sourceMappingURL=color-picker.js.map

//# sourceMappingURL=color-picker.js.map

//# sourceMappingURL=color-picker.js.map

//# sourceMappingURL=color-picker.js.map

//# sourceMappingURL=color-picker.js.map

//# sourceMappingURL=color-picker.js.map

//# sourceMappingURL=color-picker.js.map

//# sourceMappingURL=color-picker.js.map

//# sourceMappingURL=color-picker.js.map

//# sourceMappingURL=color-picker.js.map

//# sourceMappingURL=color-picker.js.map

//# sourceMappingURL=color-picker.js.map

//# sourceMappingURL=color-picker.js.map

//# sourceMappingURL=color-picker.js.map

//# sourceMappingURL=color-picker.js.map

//# sourceMappingURL=color-picker.js.map

//# sourceMappingURL=color-picker.js.map

//# sourceMappingURL=color-picker.js.map

//# sourceMappingURL=color-picker.js.map

//# sourceMappingURL=color-picker.js.map

//# sourceMappingURL=color-picker.js.map

//# sourceMappingURL=color-picker.js.map

//# sourceMappingURL=color-picker.js.map

//# sourceMappingURL=color-picker.js.map

//# sourceMappingURL=color-picker.js.map

//# sourceMappingURL=color-picker.js.map

//# sourceMappingURL=color-picker.js.map

//# sourceMappingURL=color-picker.js.map

//# sourceMappingURL=color-picker.js.map

//# sourceMappingURL=color-picker.js.map

//# sourceMappingURL=color-picker.js.map

//# sourceMappingURL=color-picker.js.map

//# sourceMappingURL=color-picker.js.map

//# sourceMappingURL=color-picker.js.map

//# sourceMappingURL=color-picker.js.map

//# sourceMappingURL=color-picker.js.map

//# sourceMappingURL=color-picker.js.map

//# sourceMappingURL=color-picker.js.map

//# sourceMappingURL=color-picker.js.map

//# sourceMappingURL=color-picker.js.map

//# sourceMappingURL=color-picker.js.map

//# sourceMappingURL=color-picker.js.map

//# sourceMappingURL=color-picker.js.map

//# sourceMappingURL=color-picker.js.map

//# sourceMappingURL=color-picker.js.map

//# sourceMappingURL=color-picker.js.map

//# sourceMappingURL=color-picker.js.map

//# sourceMappingURL=color-picker.js.map

//# sourceMappingURL=color-picker.js.map

//# sourceMappingURL=color-picker.js.map

//# sourceMappingURL=color-picker.js.map

//# sourceMappingURL=color-picker.js.map

//# sourceMappingURL=color-picker.js.map

//# sourceMappingURL=color-picker.js.map

//# sourceMappingURL=color-picker.js.map

//# sourceMappingURL=color-picker.js.map

//# sourceMappingURL=color-picker.js.map

//# sourceMappingURL=color-picker.js.map

//# sourceMappingURL=color-picker.js.map

//# sourceMappingURL=color-picker.js.map

//# sourceMappingURL=color-picker.js.map

//# sourceMappingURL=color-picker.js.map

//# sourceMappingURL=color-picker.js.map

//# sourceMappingURL=color-picker.js.map

//# sourceMappingURL=color-picker.js.map

//# sourceMappingURL=color-picker.js.map

//# sourceMappingURL=color-picker.js.map

//# sourceMappingURL=color-picker.js.map

//# sourceMappingURL=color-picker.js.map

//# sourceMappingURL=color-picker.js.map

//# sourceMappingURL=color-picker.js.map

//# sourceMappingURL=color-picker.js.map

//# sourceMappingURL=color-picker.js.map

//# sourceMappingURL=color-picker.js.map

//# sourceMappingURL=color-picker.js.map

//# sourceMappingURL=color-picker.js.map

//# sourceMappingURL=color-picker.js.map

//# sourceMappingURL=color-picker.js.map

//# sourceMappingURL=color-picker.js.map

//# sourceMappingURL=color-picker.js.map

//# sourceMappingURL=color-picker.js.map

//# sourceMappingURL=color-picker.js.map

//# sourceMappingURL=color-picker.js.map

//# sourceMappingURL=color-picker.js.map

//# sourceMappingURL=color-picker.js.map

//# sourceMappingURL=color-picker.js.map

//# sourceMappingURL=color-picker.js.map

//# sourceMappingURL=color-picker.js.map

//# sourceMappingURL=color-picker.js.map

//# sourceMappingURL=color-picker.js.map

//# sourceMappingURL=color-picker.js.map

//# sourceMappingURL=color-picker.js.map

//# sourceMappingURL=color-picker.js.map

//# sourceMappingURL=color-picker.js.map

//# sourceMappingURL=color-picker.js.map

//# sourceMappingURL=color-picker.js.map

//# sourceMappingURL=color-picker.js.map

//# sourceMappingURL=color-picker.js.map

//# sourceMappingURL=color-picker.js.map

//# sourceMappingURL=color-picker.js.map

//# sourceMappingURL=color-picker.js.map

//# sourceMappingURL=color-picker.js.map

//# sourceMappingURL=color-picker.js.map

//# sourceMappingURL=color-picker.js.map

//# sourceMappingURL=color-picker.js.map

//# sourceMappingURL=color-picker.js.map

//# sourceMappingURL=color-picker.js.map

//# sourceMappingURL=color-picker.js.map

//# sourceMappingURL=color-picker.js.map

//# sourceMappingURL=color-picker.js.map

//# sourceMappingURL=color-picker.js.map

//# sourceMappingURL=color-picker.js.map

//# sourceMappingURL=color-picker.js.map

//# sourceMappingURL=color-picker.js.map

//# sourceMappingURL=color-picker.js.map

//# sourceMappingURL=color-picker.js.map

//# sourceMappingURL=color-picker.js.map

//# sourceMappingURL=color-picker.js.map

//# sourceMappingURL=color-picker.js.map

//# sourceMappingURL=color-picker.js.map

//# sourceMappingURL=color-picker.js.map

//# sourceMappingURL=color-picker.js.map

//# sourceMappingURL=color-picker.js.map

//# sourceMappingURL=color-picker.js.map

//# sourceMappingURL=color-picker.js.map

//# sourceMappingURL=color-picker.js.map

//# sourceMappingURL=color-picker.js.map

//# sourceMappingURL=color-picker.js.map

//# sourceMappingURL=color-picker.js.map

//# sourceMappingURL=color-picker.js.map

//# sourceMappingURL=color-picker.js.map

//# sourceMappingURL=color-picker.js.map

//# sourceMappingURL=color-picker.js.map

//# sourceMappingURL=color-picker.js.map

//# sourceMappingURL=color-picker.js.map

//# sourceMappingURL=color-picker.js.map

//# sourceMappingURL=color-picker.js.map

//# sourceMappingURL=color-picker.js.map

//# sourceMappingURL=color-picker.js.map

//# sourceMappingURL=color-picker.js.map

//# sourceMappingURL=color-picker.js.map

//# sourceMappingURL=color-picker.js.map

//# sourceMappingURL=color-picker.js.map

//# sourceMappingURL=color-picker.js.map

//# sourceMappingURL=color-picker.js.map

//# sourceMappingURL=color-picker.js.map

//# sourceMappingURL=color-picker.js.map

//# sourceMappingURL=color-picker.js.map

//# sourceMappingURL=color-picker.js.map

//# sourceMappingURL=color-picker.js.map

//# sourceMappingURL=color-picker.js.map

//# sourceMappingURL=color-picker.js.map

//# sourceMappingURL=color-picker.js.map

//# sourceMappingURL=color-picker.js.map

//# sourceMappingURL=color-picker.js.map

//# sourceMappingURL=color-picker.js.map

//# sourceMappingURL=color-picker.js.map

//# sourceMappingURL=color-picker.js.map

//# sourceMappingURL=color-picker.js.map

//# sourceMappingURL=color-picker.js.map

//# sourceMappingURL=color-picker.js.map

//# sourceMappingURL=color-picker.js.map

//# sourceMappingURL=color-picker.js.map

//# sourceMappingURL=color-picker.js.map

//# sourceMappingURL=color-picker.js.map

//# sourceMappingURL=color-picker.js.map

//# sourceMappingURL=color-picker.js.map

//# sourceMappingURL=color-picker.js.map

//# sourceMappingURL=color-picker.js.map

//# sourceMappingURL=color-picker.js.map

//# sourceMappingURL=color-picker.js.map

//# sourceMappingURL=color-picker.js.map

//# sourceMappingURL=color-picker.js.map

//# sourceMappingURL=color-picker.js.map

//# sourceMappingURL=color-picker.js.map

//# sourceMappingURL=color-picker.js.map

//# sourceMappingURL=color-picker.js.map

//# sourceMappingURL=color-picker.js.map

//# sourceMappingURL=color-picker.js.map

//# sourceMappingURL=color-picker.js.map

//# sourceMappingURL=color-picker.js.map

//# sourceMappingURL=color-picker.js.map

//# sourceMappingURL=color-picker.js.map

//# sourceMappingURL=color-picker.js.map

//# sourceMappingURL=color-picker.js.map

//# sourceMappingURL=color-picker.js.map

//# sourceMappingURL=color-picker.js.map

//# sourceMappingURL=color-picker.js.map

//# sourceMappingURL=color-picker.js.map

//# sourceMappingURL=color-picker.js.map

//# sourceMappingURL=color-picker.js.map

//# sourceMappingURL=color-picker.js.map

//# sourceMappingURL=color-picker.js.map

//# sourceMappingURL=color-picker.js.map

//# sourceMappingURL=color-picker.js.map

//# sourceMappingURL=color-picker.js.map

//# sourceMappingURL=color-picker.js.map

//# sourceMappingURL=color-picker.js.map

//# sourceMappingURL=color-picker.js.map

//# sourceMappingURL=color-picker.js.map

//# sourceMappingURL=color-picker.js.map

//# sourceMappingURL=color-picker.js.map

//# sourceMappingURL=color-picker.js.map

//# sourceMappingURL=color-picker.js.map

//# sourceMappingURL=color-picker.js.map

//# sourceMappingURL=color-picker.js.map

//# sourceMappingURL=color-picker.js.map

//# sourceMappingURL=color-picker.js.map

//# sourceMappingURL=color-picker.js.map

//# sourceMappingURL=color-picker.js.map

//# sourceMappingURL=color-picker.js.map

//# sourceMappingURL=color-picker.js.map

//# sourceMappingURL=color-picker.js.map

//# sourceMappingURL=color-picker.js.map

//# sourceMappingURL=color-picker.js.map

//# sourceMappingURL=color-picker.js.map

//# sourceMappingURL=color-picker.js.map

//# sourceMappingURL=color-picker.js.map

//# sourceMappingURL=color-picker.js.map

//# sourceMappingURL=color-picker.js.map

//# sourceMappingURL=color-picker.js.map

//# sourceMappingURL=color-picker.js.map

//# sourceMappingURL=color-picker.js.map

//# sourceMappingURL=color-picker.js.map

//# sourceMappingURL=color-picker.js.map

//# sourceMappingURL=color-picker.js.map

//# sourceMappingURL=color-picker.js.map

//# sourceMappingURL=color-picker.js.map

//# sourceMappingURL=color-picker.js.map

//# sourceMappingURL=color-picker.js.map

//# sourceMappingURL=color-picker.js.map

//# sourceMappingURL=color-picker.js.map

//# sourceMappingURL=color-picker.js.map

//# sourceMappingURL=color-picker.js.map

//# sourceMappingURL=color-picker.js.map

//# sourceMappingURL=color-picker.js.map

//# sourceMappingURL=color-picker.js.map

//# sourceMappingURL=color-picker.js.map

//# sourceMappingURL=color-picker.js.map

//# sourceMappingURL=color-picker.js.map

//# sourceMappingURL=color-picker.js.map

//# sourceMappingURL=color-picker.js.map

//# sourceMappingURL=color-picker.js.map

//# sourceMappingURL=color-picker.js.map

//# sourceMappingURL=color-picker.js.map

//# sourceMappingURL=color-picker.js.map

//# sourceMappingURL=color-picker.js.map

//# sourceMappingURL=color-picker.js.map

//# sourceMappingURL=color-picker.js.map

//# sourceMappingURL=color-picker.js.map

//# sourceMappingURL=color-picker.js.map

//# sourceMappingURL=color-picker.js.map

//# sourceMappingURL=color-picker.js.map

//# sourceMappingURL=color-picker.js.map

//# sourceMappingURL=color-picker.js.map

//# sourceMappingURL=color-picker.js.map

//# sourceMappingURL=color-picker.js.map

//# sourceMappingURL=color-picker.js.map

//# sourceMappingURL=color-picker.js.map

//# sourceMappingURL=color-picker.js.map

//# sourceMappingURL=color-picker.js.map

//# sourceMappingURL=color-picker.js.map

//# sourceMappingURL=color-picker.js.map

//# sourceMappingURL=color-picker.js.map

//# sourceMappingURL=color-picker.js.map

//# sourceMappingURL=color-picker.js.map

//# sourceMappingURL=color-picker.js.map

//# sourceMappingURL=color-picker.js.map

//# sourceMappingURL=color-picker.js.map

//# sourceMappingURL=color-picker.js.map

//# sourceMappingURL=color-picker.js.map

//# sourceMappingURL=color-picker.js.map

//# sourceMappingURL=color-picker.js.map

//# sourceMappingURL=color-picker.js.map

//# sourceMappingURL=color-picker.js.map

//# sourceMappingURL=color-picker.js.map

//# sourceMappingURL=color-picker.js.map

//# sourceMappingURL=color-picker.js.map

//# sourceMappingURL=color-picker.js.map

//# sourceMappingURL=color-picker.js.map

//# sourceMappingURL=color-picker.js.map

//# sourceMappingURL=color-picker.js.map

//# sourceMappingURL=color-picker.js.map

//# sourceMappingURL=color-picker.js.map

//# sourceMappingURL=color-picker.js.map

//# sourceMappingURL=color-picker.js.map

//# sourceMappingURL=color-picker.js.map

//# sourceMappingURL=color-picker.js.map

//# sourceMappingURL=color-picker.js.map

//# sourceMappingURL=color-picker.js.map

//# sourceMappingURL=color-picker.js.map

//# sourceMappingURL=color-picker.js.map

//# sourceMappingURL=color-picker.js.map

//# sourceMappingURL=color-picker.js.map

//# sourceMappingURL=color-picker.js.map

//# sourceMappingURL=color-picker.js.map

//# sourceMappingURL=color-picker.js.map

//# sourceMappingURL=color-picker.js.map

//# sourceMappingURL=color-picker.js.map

//# sourceMappingURL=color-picker.js.map

//# sourceMappingURL=color-picker.js.map

//# sourceMappingURL=color-picker.js.map

//# sourceMappingURL=color-picker.js.map

//# sourceMappingURL=color-picker.js.map

//# sourceMappingURL=color-picker.js.map

//# sourceMappingURL=color-picker.js.map

//# sourceMappingURL=color-picker.js.map

//# sourceMappingURL=color-picker.js.map

//# sourceMappingURL=color-picker.js.map

//# sourceMappingURL=color-picker.js.map

//# sourceMappingURL=color-picker.js.map

//# sourceMappingURL=color-picker.js.map

//# sourceMappingURL=color-picker.js.map

//# sourceMappingURL=color-picker.js.map

//# sourceMappingURL=color-picker.js.map

//# sourceMappingURL=color-picker.js.map

//# sourceMappingURL=color-picker.js.map

//# sourceMappingURL=color-picker.js.map

//# sourceMappingURL=color-picker.js.map

//# sourceMappingURL=color-picker.js.map

//# sourceMappingURL=color-picker.js.map

//# sourceMappingURL=color-picker.js.map

//# sourceMappingURL=color-picker.js.map

//# sourceMappingURL=color-picker.js.map

//# sourceMappingURL=color-picker.js.map

//# sourceMappingURL=color-picker.js.map

//# sourceMappingURL=color-picker.js.map

//# sourceMappingURL=color-picker.js.map

//# sourceMappingURL=color-picker.js.map

//# sourceMappingURL=color-picker.js.map

//# sourceMappingURL=color-picker.js.map

//# sourceMappingURL=color-picker.js.map

//# sourceMappingURL=color-picker.js.map

//# sourceMappingURL=color-picker.js.map

//# sourceMappingURL=color-picker.js.map

//# sourceMappingURL=color-picker.js.map

//# sourceMappingURL=color-picker.js.map

//# sourceMappingURL=color-picker.js.map

//# sourceMappingURL=color-picker.js.map

//# sourceMappingURL=color-picker.js.map

//# sourceMappingURL=color-picker.js.map

//# sourceMappingURL=color-picker.js.map

//# sourceMappingURL=color-picker.js.map

//# sourceMappingURL=color-picker.js.map

//# sourceMappingURL=color-picker.js.map

//# sourceMappingURL=color-picker.js.map
