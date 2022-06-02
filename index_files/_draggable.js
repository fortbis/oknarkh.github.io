"use strict";define("js/ulib/crop/usercrop/_draggable",["jquery"],function(e){return{add:function(){var t=this,n=null;this.me.$el.on("mousedown._draggable",function(o){return e(o.target).closest(".ui-resizable-handle").length?!1:(n={top:o.pageY,left:o.pageX},o.stopPropagation(),o.preventDefault(),void t.me.events.dispatch("dragStart"))}),e(document).on("mouseup._draggable",function(){null!==n&&(n=null,t.me.events.dispatch("dragStop"),t.me._proxy("_setParams",t.me.$el))}).on("mousemove._draggable",function(e){null!==n&&(t.me._position({top:t.me.imgShift.y+(e.pageY-n.top),left:t.me.imgShift.x+(e.pageX-n.left)}),n={top:e.pageY,left:e.pageX},t.me.events.dispatch("dragging"))}),this.me.events.on("disableControl._draggable",function(){t.remove()})},remove:function(){this.me.$el.off("._draggable"),e(document).off("._draggable")}}});
//# sourceMappingURL=_draggable.js.map

//# sourceMappingURL=_draggable.js.map

//# sourceMappingURL=_draggable.js.map

//# sourceMappingURL=_draggable.js.map

//# sourceMappingURL=_draggable.js.map

//# sourceMappingURL=_draggable.js.map

//# sourceMappingURL=_draggable.js.map

//# sourceMappingURL=_draggable.js.map

//# sourceMappingURL=_draggable.js.map

//# sourceMappingURL=_draggable.js.map

//# sourceMappingURL=_draggable.js.map

//# sourceMappingURL=_draggable.js.map

//# sourceMappingURL=_draggable.js.map

//# sourceMappingURL=_draggable.js.map

//# sourceMappingURL=_draggable.js.map

//# sourceMappingURL=_draggable.js.map

//# sourceMappingURL=_draggable.js.map

//# sourceMappingURL=_draggable.js.map

//# sourceMappingURL=_draggable.js.map

//# sourceMappingURL=_draggable.js.map

//# sourceMappingURL=_draggable.js.map

//# sourceMappingURL=_draggable.js.map

//# sourceMappingURL=_draggable.js.map

//# sourceMappingURL=_draggable.js.map

//# sourceMappingURL=_draggable.js.map

//# sourceMappingURL=_draggable.js.map

//# sourceMappingURL=_draggable.js.map

//# sourceMappingURL=_draggable.js.map

//# sourceMappingURL=_draggable.js.map

//# sourceMappingURL=_draggable.js.map

//# sourceMappingURL=_draggable.js.map

//# sourceMappingURL=_draggable.js.map

//# sourceMappingURL=_draggable.js.map

//# sourceMappingURL=_draggable.js.map

//# sourceMappingURL=_draggable.js.map

//# sourceMappingURL=_draggable.js.map

//# sourceMappingURL=_draggable.js.map

//# sourceMappingURL=_draggable.js.map

//# sourceMappingURL=_draggable.js.map

//# sourceMappingURL=_draggable.js.map

//# sourceMappingURL=_draggable.js.map

//# sourceMappingURL=_draggable.js.map

//# sourceMappingURL=_draggable.js.map

//# sourceMappingURL=_draggable.js.map

//# sourceMappingURL=_draggable.js.map

//# sourceMappingURL=_draggable.js.map

//# sourceMappingURL=_draggable.js.map

//# sourceMappingURL=_draggable.js.map

//# sourceMappingURL=_draggable.js.map

//# sourceMappingURL=_draggable.js.map

//# sourceMappingURL=_draggable.js.map

//# sourceMappingURL=_draggable.js.map

//# sourceMappingURL=_draggable.js.map

//# sourceMappingURL=_draggable.js.map

//# sourceMappingURL=_draggable.js.map

//# sourceMappingURL=_draggable.js.map

//# sourceMappingURL=_draggable.js.map

//# sourceMappingURL=_draggable.js.map

//# sourceMappingURL=_draggable.js.map

//# sourceMappingURL=_draggable.js.map

//# sourceMappingURL=_draggable.js.map

//# sourceMappingURL=_draggable.js.map

//# sourceMappingURL=_draggable.js.map

//# sourceMappingURL=_draggable.js.map

//# sourceMappingURL=_draggable.js.map

//# sourceMappingURL=_draggable.js.map

//# sourceMappingURL=_draggable.js.map

//# sourceMappingURL=_draggable.js.map

//# sourceMappingURL=_draggable.js.map

//# sourceMappingURL=_draggable.js.map

//# sourceMappingURL=_draggable.js.map

//# sourceMappingURL=_draggable.js.map

//# sourceMappingURL=_draggable.js.map

//# sourceMappingURL=_draggable.js.map

//# sourceMappingURL=_draggable.js.map

//# sourceMappingURL=_draggable.js.map

//# sourceMappingURL=_draggable.js.map

//# sourceMappingURL=_draggable.js.map

//# sourceMappingURL=_draggable.js.map

//# sourceMappingURL=_draggable.js.map

//# sourceMappingURL=_draggable.js.map

//# sourceMappingURL=_draggable.js.map

//# sourceMappingURL=_draggable.js.map

//# sourceMappingURL=_draggable.js.map

//# sourceMappingURL=_draggable.js.map

//# sourceMappingURL=_draggable.js.map

//# sourceMappingURL=_draggable.js.map

//# sourceMappingURL=_draggable.js.map

//# sourceMappingURL=_draggable.js.map

//# sourceMappingURL=_draggable.js.map

//# sourceMappingURL=_draggable.js.map

//# sourceMappingURL=_draggable.js.map

//# sourceMappingURL=_draggable.js.map

//# sourceMappingURL=_draggable.js.map

//# sourceMappingURL=_draggable.js.map

//# sourceMappingURL=_draggable.js.map

//# sourceMappingURL=_draggable.js.map

//# sourceMappingURL=_draggable.js.map

//# sourceMappingURL=_draggable.js.map

//# sourceMappingURL=_draggable.js.map

//# sourceMappingURL=_draggable.js.map

//# sourceMappingURL=_draggable.js.map

//# sourceMappingURL=_draggable.js.map

//# sourceMappingURL=_draggable.js.map

//# sourceMappingURL=_draggable.js.map

//# sourceMappingURL=_draggable.js.map

//# sourceMappingURL=_draggable.js.map

//# sourceMappingURL=_draggable.js.map

//# sourceMappingURL=_draggable.js.map

//# sourceMappingURL=_draggable.js.map

//# sourceMappingURL=_draggable.js.map

//# sourceMappingURL=_draggable.js.map

//# sourceMappingURL=_draggable.js.map

//# sourceMappingURL=_draggable.js.map

//# sourceMappingURL=_draggable.js.map

//# sourceMappingURL=_draggable.js.map

//# sourceMappingURL=_draggable.js.map

//# sourceMappingURL=_draggable.js.map

//# sourceMappingURL=_draggable.js.map

//# sourceMappingURL=_draggable.js.map

//# sourceMappingURL=_draggable.js.map

//# sourceMappingURL=_draggable.js.map

//# sourceMappingURL=_draggable.js.map

//# sourceMappingURL=_draggable.js.map

//# sourceMappingURL=_draggable.js.map

//# sourceMappingURL=_draggable.js.map

//# sourceMappingURL=_draggable.js.map

//# sourceMappingURL=_draggable.js.map

//# sourceMappingURL=_draggable.js.map

//# sourceMappingURL=_draggable.js.map

//# sourceMappingURL=_draggable.js.map

//# sourceMappingURL=_draggable.js.map

//# sourceMappingURL=_draggable.js.map

//# sourceMappingURL=_draggable.js.map

//# sourceMappingURL=_draggable.js.map

//# sourceMappingURL=_draggable.js.map

//# sourceMappingURL=_draggable.js.map

//# sourceMappingURL=_draggable.js.map

//# sourceMappingURL=_draggable.js.map

//# sourceMappingURL=_draggable.js.map

//# sourceMappingURL=_draggable.js.map

//# sourceMappingURL=_draggable.js.map

//# sourceMappingURL=_draggable.js.map

//# sourceMappingURL=_draggable.js.map

//# sourceMappingURL=_draggable.js.map

//# sourceMappingURL=_draggable.js.map

//# sourceMappingURL=_draggable.js.map

//# sourceMappingURL=_draggable.js.map

//# sourceMappingURL=_draggable.js.map

//# sourceMappingURL=_draggable.js.map

//# sourceMappingURL=_draggable.js.map

//# sourceMappingURL=_draggable.js.map

//# sourceMappingURL=_draggable.js.map

//# sourceMappingURL=_draggable.js.map

//# sourceMappingURL=_draggable.js.map

//# sourceMappingURL=_draggable.js.map

//# sourceMappingURL=_draggable.js.map

//# sourceMappingURL=_draggable.js.map

//# sourceMappingURL=_draggable.js.map

//# sourceMappingURL=_draggable.js.map

//# sourceMappingURL=_draggable.js.map

//# sourceMappingURL=_draggable.js.map

//# sourceMappingURL=_draggable.js.map

//# sourceMappingURL=_draggable.js.map

//# sourceMappingURL=_draggable.js.map

//# sourceMappingURL=_draggable.js.map

//# sourceMappingURL=_draggable.js.map

//# sourceMappingURL=_draggable.js.map

//# sourceMappingURL=_draggable.js.map

//# sourceMappingURL=_draggable.js.map

//# sourceMappingURL=_draggable.js.map

//# sourceMappingURL=_draggable.js.map

//# sourceMappingURL=_draggable.js.map

//# sourceMappingURL=_draggable.js.map

//# sourceMappingURL=_draggable.js.map

//# sourceMappingURL=_draggable.js.map

//# sourceMappingURL=_draggable.js.map

//# sourceMappingURL=_draggable.js.map

//# sourceMappingURL=_draggable.js.map

//# sourceMappingURL=_draggable.js.map

//# sourceMappingURL=_draggable.js.map

//# sourceMappingURL=_draggable.js.map

//# sourceMappingURL=_draggable.js.map

//# sourceMappingURL=_draggable.js.map

//# sourceMappingURL=_draggable.js.map

//# sourceMappingURL=_draggable.js.map

//# sourceMappingURL=_draggable.js.map

//# sourceMappingURL=_draggable.js.map

//# sourceMappingURL=_draggable.js.map

//# sourceMappingURL=_draggable.js.map

//# sourceMappingURL=_draggable.js.map

//# sourceMappingURL=_draggable.js.map

//# sourceMappingURL=_draggable.js.map

//# sourceMappingURL=_draggable.js.map

//# sourceMappingURL=_draggable.js.map

//# sourceMappingURL=_draggable.js.map

//# sourceMappingURL=_draggable.js.map

//# sourceMappingURL=_draggable.js.map

//# sourceMappingURL=_draggable.js.map

//# sourceMappingURL=_draggable.js.map

//# sourceMappingURL=_draggable.js.map

//# sourceMappingURL=_draggable.js.map

//# sourceMappingURL=_draggable.js.map

//# sourceMappingURL=_draggable.js.map

//# sourceMappingURL=_draggable.js.map

//# sourceMappingURL=_draggable.js.map

//# sourceMappingURL=_draggable.js.map

//# sourceMappingURL=_draggable.js.map

//# sourceMappingURL=_draggable.js.map

//# sourceMappingURL=_draggable.js.map

//# sourceMappingURL=_draggable.js.map

//# sourceMappingURL=_draggable.js.map

//# sourceMappingURL=_draggable.js.map

//# sourceMappingURL=_draggable.js.map

//# sourceMappingURL=_draggable.js.map

//# sourceMappingURL=_draggable.js.map

//# sourceMappingURL=_draggable.js.map

//# sourceMappingURL=_draggable.js.map

//# sourceMappingURL=_draggable.js.map

//# sourceMappingURL=_draggable.js.map

//# sourceMappingURL=_draggable.js.map

//# sourceMappingURL=_draggable.js.map

//# sourceMappingURL=_draggable.js.map

//# sourceMappingURL=_draggable.js.map

//# sourceMappingURL=_draggable.js.map

//# sourceMappingURL=_draggable.js.map

//# sourceMappingURL=_draggable.js.map

//# sourceMappingURL=_draggable.js.map

//# sourceMappingURL=_draggable.js.map

//# sourceMappingURL=_draggable.js.map

//# sourceMappingURL=_draggable.js.map

//# sourceMappingURL=_draggable.js.map

//# sourceMappingURL=_draggable.js.map

//# sourceMappingURL=_draggable.js.map

//# sourceMappingURL=_draggable.js.map

//# sourceMappingURL=_draggable.js.map

//# sourceMappingURL=_draggable.js.map

//# sourceMappingURL=_draggable.js.map

//# sourceMappingURL=_draggable.js.map

//# sourceMappingURL=_draggable.js.map

//# sourceMappingURL=_draggable.js.map

//# sourceMappingURL=_draggable.js.map

//# sourceMappingURL=_draggable.js.map

//# sourceMappingURL=_draggable.js.map

//# sourceMappingURL=_draggable.js.map

//# sourceMappingURL=_draggable.js.map

//# sourceMappingURL=_draggable.js.map

//# sourceMappingURL=_draggable.js.map

//# sourceMappingURL=_draggable.js.map

//# sourceMappingURL=_draggable.js.map

//# sourceMappingURL=_draggable.js.map

//# sourceMappingURL=_draggable.js.map

//# sourceMappingURL=_draggable.js.map

//# sourceMappingURL=_draggable.js.map

//# sourceMappingURL=_draggable.js.map

//# sourceMappingURL=_draggable.js.map

//# sourceMappingURL=_draggable.js.map

//# sourceMappingURL=_draggable.js.map

//# sourceMappingURL=_draggable.js.map

//# sourceMappingURL=_draggable.js.map

//# sourceMappingURL=_draggable.js.map

//# sourceMappingURL=_draggable.js.map

//# sourceMappingURL=_draggable.js.map

//# sourceMappingURL=_draggable.js.map

//# sourceMappingURL=_draggable.js.map

//# sourceMappingURL=_draggable.js.map

//# sourceMappingURL=_draggable.js.map

//# sourceMappingURL=_draggable.js.map

//# sourceMappingURL=_draggable.js.map

//# sourceMappingURL=_draggable.js.map

//# sourceMappingURL=_draggable.js.map

//# sourceMappingURL=_draggable.js.map

//# sourceMappingURL=_draggable.js.map

//# sourceMappingURL=_draggable.js.map

//# sourceMappingURL=_draggable.js.map

//# sourceMappingURL=_draggable.js.map

//# sourceMappingURL=_draggable.js.map

//# sourceMappingURL=_draggable.js.map

//# sourceMappingURL=_draggable.js.map

//# sourceMappingURL=_draggable.js.map

//# sourceMappingURL=_draggable.js.map

//# sourceMappingURL=_draggable.js.map

//# sourceMappingURL=_draggable.js.map

//# sourceMappingURL=_draggable.js.map

//# sourceMappingURL=_draggable.js.map

//# sourceMappingURL=_draggable.js.map

//# sourceMappingURL=_draggable.js.map

//# sourceMappingURL=_draggable.js.map

//# sourceMappingURL=_draggable.js.map

//# sourceMappingURL=_draggable.js.map

//# sourceMappingURL=_draggable.js.map

//# sourceMappingURL=_draggable.js.map

//# sourceMappingURL=_draggable.js.map

//# sourceMappingURL=_draggable.js.map

//# sourceMappingURL=_draggable.js.map

//# sourceMappingURL=_draggable.js.map

//# sourceMappingURL=_draggable.js.map

//# sourceMappingURL=_draggable.js.map

//# sourceMappingURL=_draggable.js.map

//# sourceMappingURL=_draggable.js.map

//# sourceMappingURL=_draggable.js.map

//# sourceMappingURL=_draggable.js.map

//# sourceMappingURL=_draggable.js.map

//# sourceMappingURL=_draggable.js.map

//# sourceMappingURL=_draggable.js.map

//# sourceMappingURL=_draggable.js.map

//# sourceMappingURL=_draggable.js.map

//# sourceMappingURL=_draggable.js.map

//# sourceMappingURL=_draggable.js.map

//# sourceMappingURL=_draggable.js.map

//# sourceMappingURL=_draggable.js.map

//# sourceMappingURL=_draggable.js.map

//# sourceMappingURL=_draggable.js.map

//# sourceMappingURL=_draggable.js.map
