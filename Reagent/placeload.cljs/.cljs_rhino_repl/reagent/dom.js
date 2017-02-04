// Compiled by ClojureScript 1.9.229 {}
goog.provide('reagent.dom');
goog.require('cljs.core');
goog.require('reagent.impl.util');
goog.require('reagent.interop');
goog.require('reagent.ratom');
goog.require('reagent.impl.template');
goog.require('reagent.impl.batching');
goog.require('cljsjs.react.dom');
goog.require('reagent.debug');
if(typeof reagent.dom.imported !== 'undefined'){
} else {
reagent.dom.imported = null;
}
reagent.dom.module = (function reagent$dom$module(){
if(cljs.core.some_QMARK_.call(null,reagent.dom.imported)){
return reagent.dom.imported;
} else {
if(typeof ReactDOM !== 'undefined'){
return reagent.dom.imported = ReactDOM;
} else {
if(typeof require !== 'undefined'){
var or__44303__auto__ = reagent.dom.imported = require("react-dom");
if(cljs.core.truth_(or__44303__auto__)){
return or__44303__auto__;
} else {
throw (new Error("require('react-dom') failed"));
}
} else {
throw (new Error("js/ReactDOM is missing"));

}
}
}
});
if(typeof reagent.dom.roots !== 'undefined'){
} else {
reagent.dom.roots = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
}
reagent.dom.unmount_comp = (function reagent$dom$unmount_comp(container){
cljs.core.swap_BANG_.call(null,reagent.dom.roots,cljs.core.dissoc,container);

return (reagent.dom.module.call(null)["unmountComponentAtNode"])(container);
});
reagent.dom.render_comp = (function reagent$dom$render_comp(comp,container,callback){
var _STAR_always_update_STAR_48115 = reagent.impl.util._STAR_always_update_STAR_;
reagent.impl.util._STAR_always_update_STAR_ = true;

try{return (reagent.dom.module.call(null)["render"])(comp.call(null),container,((function (_STAR_always_update_STAR_48115){
return (function (){
var _STAR_always_update_STAR_48116 = reagent.impl.util._STAR_always_update_STAR_;
reagent.impl.util._STAR_always_update_STAR_ = false;

try{cljs.core.swap_BANG_.call(null,reagent.dom.roots,cljs.core.assoc,container,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [comp,container], null));

reagent.impl.batching.flush_after_render.call(null);

if(cljs.core.some_QMARK_.call(null,callback)){
return callback.call(null);
} else {
return null;
}
}finally {reagent.impl.util._STAR_always_update_STAR_ = _STAR_always_update_STAR_48116;
}});})(_STAR_always_update_STAR_48115))
);
}finally {reagent.impl.util._STAR_always_update_STAR_ = _STAR_always_update_STAR_48115;
}});
reagent.dom.re_render_component = (function reagent$dom$re_render_component(comp,container){
return reagent.dom.render_comp.call(null,comp,container,null);
});
/**
 * Render a Reagent component into the DOM. The first argument may be
 *   either a vector (using Reagent's Hiccup syntax), or a React element. The second argument should be a DOM node.
 * 
 *   Optionally takes a callback that is called when the component is in place.
 * 
 *   Returns the mounted component instance.
 */
reagent.dom.render = (function reagent$dom$render(var_args){
var args48117 = [];
var len__45378__auto___48120 = arguments.length;
var i__45379__auto___48121 = (0);
while(true){
if((i__45379__auto___48121 < len__45378__auto___48120)){
args48117.push((arguments[i__45379__auto___48121]));

var G__48122 = (i__45379__auto___48121 + (1));
i__45379__auto___48121 = G__48122;
continue;
} else {
}
break;
}

var G__48119 = args48117.length;
switch (G__48119) {
case 2:
return reagent.dom.render.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return reagent.dom.render.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args48117.length)].join('')));

}
});

reagent.dom.render.cljs$core$IFn$_invoke$arity$2 = (function (comp,container){
return reagent.dom.render.call(null,comp,container,null);
});

reagent.dom.render.cljs$core$IFn$_invoke$arity$3 = (function (comp,container,callback){
reagent.ratom.flush_BANG_.call(null);

var f = (function (){
return reagent.impl.template.as_element.call(null,((cljs.core.fn_QMARK_.call(null,comp))?comp.call(null):comp));
});
return reagent.dom.render_comp.call(null,f,container,callback);
});

reagent.dom.render.cljs$lang$maxFixedArity = 3;

reagent.dom.unmount_component_at_node = (function reagent$dom$unmount_component_at_node(container){
return reagent.dom.unmount_comp.call(null,container);
});
/**
 * Returns the root DOM node of a mounted component.
 */
reagent.dom.dom_node = (function reagent$dom$dom_node(this$){
return (reagent.dom.module.call(null)["findDOMNode"])(this$);
});
/**
 * Force re-rendering of all mounted Reagent components. This is
 *   probably only useful in a development environment, when you want to
 *   update components in response to some dynamic changes to code.
 * 
 *   Note that force-update-all may not update root components. This
 *   happens if a component 'foo' is mounted with `(render [foo])` (since
 *   functions are passed by value, and not by reference, in
 *   ClojureScript). To get around this you'll have to introduce a layer
 *   of indirection, for example by using `(render [#'foo])` instead.
 */
reagent.dom.force_update_all = (function reagent$dom$force_update_all(){
reagent.ratom.flush_BANG_.call(null);

var seq__48128_48132 = cljs.core.seq.call(null,cljs.core.vals.call(null,cljs.core.deref.call(null,reagent.dom.roots)));
var chunk__48129_48133 = null;
var count__48130_48134 = (0);
var i__48131_48135 = (0);
while(true){
if((i__48131_48135 < count__48130_48134)){
var v_48136 = cljs.core._nth.call(null,chunk__48129_48133,i__48131_48135);
cljs.core.apply.call(null,reagent.dom.re_render_component,v_48136);

var G__48137 = seq__48128_48132;
var G__48138 = chunk__48129_48133;
var G__48139 = count__48130_48134;
var G__48140 = (i__48131_48135 + (1));
seq__48128_48132 = G__48137;
chunk__48129_48133 = G__48138;
count__48130_48134 = G__48139;
i__48131_48135 = G__48140;
continue;
} else {
var temp__4657__auto___48141 = cljs.core.seq.call(null,seq__48128_48132);
if(temp__4657__auto___48141){
var seq__48128_48142__$1 = temp__4657__auto___48141;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__48128_48142__$1)){
var c__45114__auto___48143 = cljs.core.chunk_first.call(null,seq__48128_48142__$1);
var G__48144 = cljs.core.chunk_rest.call(null,seq__48128_48142__$1);
var G__48145 = c__45114__auto___48143;
var G__48146 = cljs.core.count.call(null,c__45114__auto___48143);
var G__48147 = (0);
seq__48128_48132 = G__48144;
chunk__48129_48133 = G__48145;
count__48130_48134 = G__48146;
i__48131_48135 = G__48147;
continue;
} else {
var v_48148 = cljs.core.first.call(null,seq__48128_48142__$1);
cljs.core.apply.call(null,reagent.dom.re_render_component,v_48148);

var G__48149 = cljs.core.next.call(null,seq__48128_48142__$1);
var G__48150 = null;
var G__48151 = (0);
var G__48152 = (0);
seq__48128_48132 = G__48149;
chunk__48129_48133 = G__48150;
count__48130_48134 = G__48151;
i__48131_48135 = G__48152;
continue;
}
} else {
}
}
break;
}

return "Updated";
});

//# sourceMappingURL=dom.js.map