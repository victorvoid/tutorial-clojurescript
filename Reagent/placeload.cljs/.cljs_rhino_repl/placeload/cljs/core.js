// Compiled by ClojureScript 1.9.229 {}
goog.provide('placeload.cljs.core');
goog.require('cljs.core');
goog.require('reagent.core');
goog.require('clojure.string');
cljs.core.enable_console_print_BANG_.call(null);
if(typeof placeload.cljs.core.app_state !== 'undefined'){
} else {
placeload.cljs.core.app_state = reagent.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"text","text",-1790561697),"Placeload",new cljs.core.Keyword(null,"container","container",-1736937707),"",new cljs.core.Keyword(null,"fullheight","fullheight",85790563),"200px"], null));
}
placeload.cljs.core.app = (function placeload$cljs$core$app(){
new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),"Placeload"], null);

return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"userPlaceload"], null)], null);
});
reagent.core.render_component.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [placeload.cljs.core.app], null),document.getElementById("app"));
placeload.cljs.core.remove_unit = (function placeload$cljs$core$remove_unit(unit){
return unit.slice((0),unit.indexOf("px"));
});
placeload.cljs.core.place_background = (function placeload$cljs$core$place_background(){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),"placeload-background",new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"height","height",1025178622),new cljs.core.Keyword(null,"fullheight","fullheight",85790563).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,placeload.cljs.core.app_state))], null)], null)], null);
});
placeload.cljs.core.side_right_element = (function placeload$cljs$core$side_right_element(width,height){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),"placeload-masker",new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"width","width",-384071477),width,new cljs.core.Keyword(null,"height","height",1025178622),height,new cljs.core.Keyword(null,"top","top",-1856271961),[cljs.core.str((placeload.cljs.core.remove_unit.call(null,new cljs.core.Keyword(null,"fullheight","fullheight",85790563),cljs.core.deref.call(null,placeload.cljs.core.app_state)) - placeload.cljs.core.remove_unit.call(null,width))),cljs.core.str("px")].join(''),new cljs.core.Keyword(null,"right","right",-452581833),(0)], null)], null)], null);
});
placeload.cljs.core.Placeload = (function placeload$cljs$core$Placeload(container){
cljs.core.swap_BANG_.call(null,placeload.cljs.core.app_state,cljs.core.assoc,new cljs.core.Keyword(null,"container","container",-1736937707),document.querySelector(".userPlaceload"));

var this$ = this;
this$.store = [];

return this$;
});
placeload.cljs.core.Placeload.prototype.draw = (function (dataComponent){
console.log("drawing...");

reagent.core.render_component.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [placeload.cljs.core.place_background], null),document.querySelector(".userPlaceload"));

return reagent.core.render_component.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [placeload.cljs.core.side_right_element,cljs.core.get.call(null,dataComponent,new cljs.core.Keyword(null,"width","width",-384071477)),cljs.core.get.call(null,dataComponent,new cljs.core.Keyword(null,"height","height",1025178622))], null),document.querySelector(".placeload-background"));
});
placeload.cljs.core.placeload = (new placeload.cljs.core.Placeload(".userPlaceload"));
placeload.cljs.core.placeload.draw(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"width","width",-384071477),"200px",new cljs.core.Keyword(null,"height","height",1025178622),"200px"], null));

//# sourceMappingURL=core.js.map