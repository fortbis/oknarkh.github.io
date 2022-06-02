"use strict";define("dynamicText",["jquery","popup","_","U","i18n","editApi","ul-framework","nf"],function(t,e,n,i,a,o,r,d){var m,s,c=!1,l=a("widgets.dynamicText"),u={items:[],i18n:l},p=function(t){if(window.getSelection().removeAllRanges(),document.selection){var e=document.body.createTextRange();e.moveToElementText(t[0]),e.select().createTextRange()}else window.getSelection&&(e=document.createRange(),e.selectNode(t[0]),window.getSelection().addRange(e));document.execCommand("Copy"),window.getSelection().removeAllRanges()},f=function(){var e=t("#scrollable-block");return e[0].scrollHeight>e.height()?!0:void 0},y=function(){e.open({title:l("name"),$targetEl:m,titleShow:!0,saveBtn:!1,reopenMode:!0,middlewide:!0,positionTarget:"right",templateData:{i18n:l},templateUrl:"text!/html/constructor/dynamicText/dynamicTextEmpty.html"})},x=function(){e.open({title:l("name"),$targetEl:m,titleShow:!0,extrawide:!0,reopenMode:!0,saveBtn:!1,positionTarget:"right",scrollable:!1,templateUrl:"text!/html/constructor/dynamicText/dynamicTextManage.html",templateData:u,afterOpen:function(){var e=t(".js-dynamictext-tablegroup"),i="";require(["text!/html/constructor/dynamicText/dynamicTextEditItem.html"],function(a){u.items.forEach(function(t,e){i+=n.template(a,{item:t,i:e,i18n:l})}),e.html(i),r.scrollbar.create(t("#scrollable-block"),{marginStart:0,marginEnd:0},{suppressScrollX:!0});var o=t("#scrollable-block");f()&&t(".js-dynamictext-overlay .faded").addClass("scrolling"),t("#ul-popup .ul-popup-container .ul-popup-body").css("overflow-y","hidden"),o.on("ps-y-reach-end",function(){t(".js-dynamictext-overlay .faded").removeClass("scrolling")}).on("ps-scroll-up",function(){return f()?void t(".js-dynamictext-overlay .faded").addClass("scrolling"):void t(".js-dynamictext-overlay .faded").removeClass("scrolling")})})}})},v=0,h=1,g=function(t,n,i){var a="",o={item:{name:"","default":""},i18n:l};t===v?(a=l("edit text"),o.item=u.items[i],o.key=i):t===h&&(a=l("adding text")),e.open({title:a,$targetEl:m,titleShow:!0,middlewide:!0,reopenMode:!0,saveBtn:!1,positionTarget:"right",templateUrl:"text!/html/constructor/dynamicText/dynamicTextEdit.html",templateData:o,afterOpenThis:function(){this.$el.find('input[data-type="url"]').focus(),this.$el.off(".dynamicTextEdit").on("mousedown.dynamicTextEdit",".js-dynamictext-button-cancel",function(){u.items.length?x():y()}).on("mousedown.dynamicTextEdit",".js-dynamictext-button-save",function(){n&&n()})}})},w=function(){var e=t('.js-dynamictext-form input[data-type="url"]').val().trim(),n=t('.js-dynamictext-form input[data-type="name"]').val().trim(),i=t('.js-dynamictext-form input[data-type="default"]').val().trim();return{url:e,name:n,"default":i}},T=function(t,e){var n=[{validate:function(){return/^\D/.test(t.url)},message:l("incorrect number")},{validate:function(){return/{{[a-zA-Z0-9-_]+}}/.test(t.name)},message:l("incorrect param")},{validate:function(){var n=!0;return u.items.forEach(function(i,a){"undefined"!=typeof e&&e===a||i.name===t.name&&(n=!1)}),n},message:l("param exists")}],i={isValid:!0,message:l("example")};return n.forEach(function(t){t.validate()||(i={isValid:!1,message:t.message})}),i},j=function(e){var n=t(".js-dynamictext-form");n.find(".js-dynamictext-allert").html(e.message),e.isValid?n.find(".js-dynamictext-inputallert").removeClass("error"):n.find(".js-dynamictext-inputallert").addClass("error")},E=function(){return"/sites/url/"+i.params.site+"/customField/dynamicText"},b=function(e){return"post"===e&&window.signals.newHistory.invoke(),t.ajax({url:E(),method:e,data:{data:JSON.stringify(u.items)}})},k=function(t){var e=w(),n=T(e,t);return n.isValid?(u.items[t]=e,b("post"),!0):(j(n),!1)},S=function(){var t=w(),e=T(t);return e.isValid?(u.items.push(t),b("post"),!0):(j(e),!1)},C=function(e){u.items.splice(e,1);var i=t(".js-dynamictext-tablegroup"),a="";require(["text!/html/constructor/dynamicText/dynamicTextEditItem.html"],function(t){u.items.forEach(function(e,i){a+=n.template(t,{item:e,i:i,i18n:l})}),i.html(a),b("post")})},_={show:function(e){if(!(t(".ul-linkPopover-link").length>0)){e&&e.hide();var n=new t.Deferred;n.resolve([null,u.items]),c||(n=n.then(function(){return b("get")})),n.then(function(t){u.items=t[1];var e=u.items.length;e?x():y(),c=!0})}},init:function(e,n){var i=this;m=e,s=new r.tooltip,s.init("[data-title]",{attr:"data-title"}),t(document).on("mousedown.dynamicText",".js-dynamictext-open",function(){return i.show(n)}).on("mousedown.dynamicText","#ul-popup",function(t){t.stopPropagation()}).on("mousedown.dynamicText",".js-dynamictext-addNew",function(){var t=function(){return S()?void x():!1};g(h,t)}).on("mousedown.dynamicText",".js-dynamictext-remove",function(){var e=t(this),n=e.data("key");s._hideTooltip(e),C(n),0===u.items.length&&y()}).on("mousedown.dynamicText",".js-dynamictext-edit",function(){var e=t(this),n=e.data("key");s._hideTooltip(e);var i=function(){return k(n)?void x():!1};g(v,i,n)}).on("keyup.dynamicText",'.js-dynamictext-form input[data-type="url"]',function(){var e=t(this),n=t('.js-dynamictext-form input[data-type="name"]');n.val("{{"+e.val()+"}}");var i=e.val().length>0?l("apear when param not mentioned",e.val()):l("apear when param not mentioned","utm_term");t(".dt-tip-text-default p").text(i);var a=t(".js-dynamictext-form").data("key");j("undefined"!=typeof a?T(w(),a):T(w()))}).on("mousedown.dynamicText",'[data-cmd="insertText"]',function(){var e=t(this).data("key");o.apply("insertText",u.items[e].name),window.dispatch(window.actions.insertText(u.items[e].name))}).on("mousedown.dynamicText",".js-dynamictext-copyname",function(){d.notify(l("var has copied"),"success",{timeout:4e3}),p(t(this).find("span"))}).on("mousedown.dynamicText",".ul-notify__inner",function(t){t.stopPropagation()})},deinit:function(){t(document).off(".dynamicText"),s.destroy()}};return _});
//# sourceMappingURL=dynamicText.js.map

//# sourceMappingURL=dynamicText.js.map

//# sourceMappingURL=dynamicText.js.map

//# sourceMappingURL=dynamicText.js.map

//# sourceMappingURL=dynamicText.js.map

//# sourceMappingURL=dynamicText.js.map

//# sourceMappingURL=dynamicText.js.map

//# sourceMappingURL=dynamicText.js.map

//# sourceMappingURL=dynamicText.js.map

//# sourceMappingURL=dynamicText.js.map

//# sourceMappingURL=dynamicText.js.map

//# sourceMappingURL=dynamicText.js.map

//# sourceMappingURL=dynamicText.js.map

//# sourceMappingURL=dynamicText.js.map

//# sourceMappingURL=dynamicText.js.map

//# sourceMappingURL=dynamicText.js.map

//# sourceMappingURL=dynamicText.js.map

//# sourceMappingURL=dynamicText.js.map

//# sourceMappingURL=dynamicText.js.map

//# sourceMappingURL=dynamicText.js.map

//# sourceMappingURL=dynamicText.js.map

//# sourceMappingURL=dynamicText.js.map

//# sourceMappingURL=dynamicText.js.map

//# sourceMappingURL=dynamicText.js.map

//# sourceMappingURL=dynamicText.js.map

//# sourceMappingURL=dynamicText.js.map

//# sourceMappingURL=dynamicText.js.map

//# sourceMappingURL=dynamicText.js.map

//# sourceMappingURL=dynamicText.js.map

//# sourceMappingURL=dynamicText.js.map

//# sourceMappingURL=dynamicText.js.map

//# sourceMappingURL=dynamicText.js.map

//# sourceMappingURL=dynamicText.js.map

//# sourceMappingURL=dynamicText.js.map

//# sourceMappingURL=dynamicText.js.map

//# sourceMappingURL=dynamicText.js.map

//# sourceMappingURL=dynamicText.js.map

//# sourceMappingURL=dynamicText.js.map

//# sourceMappingURL=dynamicText.js.map

//# sourceMappingURL=dynamicText.js.map

//# sourceMappingURL=dynamicText.js.map

//# sourceMappingURL=dynamicText.js.map

//# sourceMappingURL=dynamicText.js.map

//# sourceMappingURL=dynamicText.js.map

//# sourceMappingURL=dynamicText.js.map

//# sourceMappingURL=dynamicText.js.map

//# sourceMappingURL=dynamicText.js.map

//# sourceMappingURL=dynamicText.js.map

//# sourceMappingURL=dynamicText.js.map

//# sourceMappingURL=dynamicText.js.map

//# sourceMappingURL=dynamicText.js.map

//# sourceMappingURL=dynamicText.js.map

//# sourceMappingURL=dynamicText.js.map

//# sourceMappingURL=dynamicText.js.map

//# sourceMappingURL=dynamicText.js.map

//# sourceMappingURL=dynamicText.js.map

//# sourceMappingURL=dynamicText.js.map

//# sourceMappingURL=dynamicText.js.map

//# sourceMappingURL=dynamicText.js.map

//# sourceMappingURL=dynamicText.js.map

//# sourceMappingURL=dynamicText.js.map

//# sourceMappingURL=dynamicText.js.map

//# sourceMappingURL=dynamicText.js.map

//# sourceMappingURL=dynamicText.js.map

//# sourceMappingURL=dynamicText.js.map

//# sourceMappingURL=dynamicText.js.map

//# sourceMappingURL=dynamicText.js.map

//# sourceMappingURL=dynamicText.js.map

//# sourceMappingURL=dynamicText.js.map

//# sourceMappingURL=dynamicText.js.map

//# sourceMappingURL=dynamicText.js.map

//# sourceMappingURL=dynamicText.js.map

//# sourceMappingURL=dynamicText.js.map

//# sourceMappingURL=dynamicText.js.map

//# sourceMappingURL=dynamicText.js.map

//# sourceMappingURL=dynamicText.js.map

//# sourceMappingURL=dynamicText.js.map

//# sourceMappingURL=dynamicText.js.map

//# sourceMappingURL=dynamicText.js.map

//# sourceMappingURL=dynamicText.js.map

//# sourceMappingURL=dynamicText.js.map

//# sourceMappingURL=dynamicText.js.map

//# sourceMappingURL=dynamicText.js.map

//# sourceMappingURL=dynamicText.js.map

//# sourceMappingURL=dynamicText.js.map

//# sourceMappingURL=dynamicText.js.map

//# sourceMappingURL=dynamicText.js.map

//# sourceMappingURL=dynamicText.js.map

//# sourceMappingURL=dynamicText.js.map

//# sourceMappingURL=dynamicText.js.map

//# sourceMappingURL=dynamicText.js.map

//# sourceMappingURL=dynamicText.js.map

//# sourceMappingURL=dynamicText.js.map

//# sourceMappingURL=dynamicText.js.map

//# sourceMappingURL=dynamicText.js.map

//# sourceMappingURL=dynamicText.js.map

//# sourceMappingURL=dynamicText.js.map

//# sourceMappingURL=dynamicText.js.map

//# sourceMappingURL=dynamicText.js.map

//# sourceMappingURL=dynamicText.js.map

//# sourceMappingURL=dynamicText.js.map

//# sourceMappingURL=dynamicText.js.map

//# sourceMappingURL=dynamicText.js.map

//# sourceMappingURL=dynamicText.js.map

//# sourceMappingURL=dynamicText.js.map

//# sourceMappingURL=dynamicText.js.map

//# sourceMappingURL=dynamicText.js.map

//# sourceMappingURL=dynamicText.js.map

//# sourceMappingURL=dynamicText.js.map

//# sourceMappingURL=dynamicText.js.map

//# sourceMappingURL=dynamicText.js.map

//# sourceMappingURL=dynamicText.js.map

//# sourceMappingURL=dynamicText.js.map

//# sourceMappingURL=dynamicText.js.map

//# sourceMappingURL=dynamicText.js.map

//# sourceMappingURL=dynamicText.js.map

//# sourceMappingURL=dynamicText.js.map

//# sourceMappingURL=dynamicText.js.map

//# sourceMappingURL=dynamicText.js.map

//# sourceMappingURL=dynamicText.js.map

//# sourceMappingURL=dynamicText.js.map

//# sourceMappingURL=dynamicText.js.map

//# sourceMappingURL=dynamicText.js.map

//# sourceMappingURL=dynamicText.js.map

//# sourceMappingURL=dynamicText.js.map

//# sourceMappingURL=dynamicText.js.map

//# sourceMappingURL=dynamicText.js.map

//# sourceMappingURL=dynamicText.js.map

//# sourceMappingURL=dynamicText.js.map

//# sourceMappingURL=dynamicText.js.map

//# sourceMappingURL=dynamicText.js.map

//# sourceMappingURL=dynamicText.js.map

//# sourceMappingURL=dynamicText.js.map

//# sourceMappingURL=dynamicText.js.map

//# sourceMappingURL=dynamicText.js.map

//# sourceMappingURL=dynamicText.js.map

//# sourceMappingURL=dynamicText.js.map

//# sourceMappingURL=dynamicText.js.map

//# sourceMappingURL=dynamicText.js.map

//# sourceMappingURL=dynamicText.js.map

//# sourceMappingURL=dynamicText.js.map

//# sourceMappingURL=dynamicText.js.map

//# sourceMappingURL=dynamicText.js.map

//# sourceMappingURL=dynamicText.js.map

//# sourceMappingURL=dynamicText.js.map

//# sourceMappingURL=dynamicText.js.map

//# sourceMappingURL=dynamicText.js.map

//# sourceMappingURL=dynamicText.js.map

//# sourceMappingURL=dynamicText.js.map

//# sourceMappingURL=dynamicText.js.map

//# sourceMappingURL=dynamicText.js.map

//# sourceMappingURL=dynamicText.js.map

//# sourceMappingURL=dynamicText.js.map

//# sourceMappingURL=dynamicText.js.map

//# sourceMappingURL=dynamicText.js.map

//# sourceMappingURL=dynamicText.js.map

//# sourceMappingURL=dynamicText.js.map

//# sourceMappingURL=dynamicText.js.map

//# sourceMappingURL=dynamicText.js.map

//# sourceMappingURL=dynamicText.js.map

//# sourceMappingURL=dynamicText.js.map

//# sourceMappingURL=dynamicText.js.map

//# sourceMappingURL=dynamicText.js.map

//# sourceMappingURL=dynamicText.js.map

//# sourceMappingURL=dynamicText.js.map

//# sourceMappingURL=dynamicText.js.map

//# sourceMappingURL=dynamicText.js.map

//# sourceMappingURL=dynamicText.js.map

//# sourceMappingURL=dynamicText.js.map

//# sourceMappingURL=dynamicText.js.map

//# sourceMappingURL=dynamicText.js.map

//# sourceMappingURL=dynamicText.js.map

//# sourceMappingURL=dynamicText.js.map

//# sourceMappingURL=dynamicText.js.map

//# sourceMappingURL=dynamicText.js.map

//# sourceMappingURL=dynamicText.js.map

//# sourceMappingURL=dynamicText.js.map

//# sourceMappingURL=dynamicText.js.map

//# sourceMappingURL=dynamicText.js.map

//# sourceMappingURL=dynamicText.js.map

//# sourceMappingURL=dynamicText.js.map

//# sourceMappingURL=dynamicText.js.map

//# sourceMappingURL=dynamicText.js.map

//# sourceMappingURL=dynamicText.js.map

//# sourceMappingURL=dynamicText.js.map

//# sourceMappingURL=dynamicText.js.map

//# sourceMappingURL=dynamicText.js.map

//# sourceMappingURL=dynamicText.js.map

//# sourceMappingURL=dynamicText.js.map

//# sourceMappingURL=dynamicText.js.map

//# sourceMappingURL=dynamicText.js.map

//# sourceMappingURL=dynamicText.js.map

//# sourceMappingURL=dynamicText.js.map

//# sourceMappingURL=dynamicText.js.map

//# sourceMappingURL=dynamicText.js.map

//# sourceMappingURL=dynamicText.js.map

//# sourceMappingURL=dynamicText.js.map

//# sourceMappingURL=dynamicText.js.map

//# sourceMappingURL=dynamicText.js.map

//# sourceMappingURL=dynamicText.js.map

//# sourceMappingURL=dynamicText.js.map

//# sourceMappingURL=dynamicText.js.map

//# sourceMappingURL=dynamicText.js.map

//# sourceMappingURL=dynamicText.js.map

//# sourceMappingURL=dynamicText.js.map

//# sourceMappingURL=dynamicText.js.map

//# sourceMappingURL=dynamicText.js.map

//# sourceMappingURL=dynamicText.js.map

//# sourceMappingURL=dynamicText.js.map

//# sourceMappingURL=dynamicText.js.map

//# sourceMappingURL=dynamicText.js.map

//# sourceMappingURL=dynamicText.js.map

//# sourceMappingURL=dynamicText.js.map

//# sourceMappingURL=dynamicText.js.map

//# sourceMappingURL=dynamicText.js.map

//# sourceMappingURL=dynamicText.js.map

//# sourceMappingURL=dynamicText.js.map

//# sourceMappingURL=dynamicText.js.map

//# sourceMappingURL=dynamicText.js.map

//# sourceMappingURL=dynamicText.js.map

//# sourceMappingURL=dynamicText.js.map

//# sourceMappingURL=dynamicText.js.map

//# sourceMappingURL=dynamicText.js.map

//# sourceMappingURL=dynamicText.js.map

//# sourceMappingURL=dynamicText.js.map

//# sourceMappingURL=dynamicText.js.map

//# sourceMappingURL=dynamicText.js.map

//# sourceMappingURL=dynamicText.js.map

//# sourceMappingURL=dynamicText.js.map

//# sourceMappingURL=dynamicText.js.map

//# sourceMappingURL=dynamicText.js.map

//# sourceMappingURL=dynamicText.js.map

//# sourceMappingURL=dynamicText.js.map

//# sourceMappingURL=dynamicText.js.map

//# sourceMappingURL=dynamicText.js.map

//# sourceMappingURL=dynamicText.js.map

//# sourceMappingURL=dynamicText.js.map

//# sourceMappingURL=dynamicText.js.map

//# sourceMappingURL=dynamicText.js.map

//# sourceMappingURL=dynamicText.js.map

//# sourceMappingURL=dynamicText.js.map
