// Compiled by ClojureScript 0.0-3308 {}
goog.provide('helloworld.core');
goog.require('cljs.core');
goog.require('reagent.core');
goog.require('helloworld.title');
helloworld.core.app_state = reagent.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"message","message",-406056002),"from state",new cljs.core.Keyword(null,"users","users",-713552705),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"name","name",1843675177),"Victor Igor"], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"name","name",1843675177),"Lucas Silva"], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"name","name",1843675177),"Jose Souza"], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"name","name",1843675177),"Marcio Cunha"], null)], null)], null));
helloworld.core.click_count = reagent.core.atom.call(null,(0));
helloworld.core.users_list = (function helloworld$core$users_list(users){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"items-list"], null),(function (){var iter__5063__auto__ = (function helloworld$core$users_list_$_iter__5646(s__5647){
return (new cljs.core.LazySeq(null,(function (){
var s__5647__$1 = s__5647;
while(true){
var temp__4425__auto__ = cljs.core.seq.call(null,s__5647__$1);
if(temp__4425__auto__){
var s__5647__$2 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__5647__$2)){
var c__5061__auto__ = cljs.core.chunk_first.call(null,s__5647__$2);
var size__5062__auto__ = cljs.core.count.call(null,c__5061__auto__);
var b__5649 = cljs.core.chunk_buffer.call(null,size__5062__auto__);
if((function (){var i__5648 = (0);
while(true){
if((i__5648 < size__5062__auto__)){
var user = cljs.core._nth.call(null,c__5061__auto__,i__5648);
cljs.core.chunk_append.call(null,b__5649,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.user","div.user",-273371807),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"color","color",1011675173),"#1e1e1e"], null)], null),new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(user)], null)], null));

var G__5650 = (i__5648 + (1));
i__5648 = G__5650;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__5649),helloworld$core$users_list_$_iter__5646.call(null,cljs.core.chunk_rest.call(null,s__5647__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__5649),null);
}
} else {
var user = cljs.core.first.call(null,s__5647__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.user","div.user",-273371807),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"color","color",1011675173),"#1e1e1e"], null)], null),new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(user)], null)], null),helloworld$core$users_list_$_iter__5646.call(null,cljs.core.rest.call(null,s__5647__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5063__auto__.call(null,users);
})()], null);
});
helloworld.core.count_view = (function helloworld$core$count_view(){
return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),"The atom ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"code","code",1586293142),"click-count"], null)," has value: ",cljs.core.deref.call(null,helloworld.core.click_count),". ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"button",new cljs.core.Keyword(null,"value","value",305978217),"Click me",new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return cljs.core.swap_BANG_.call(null,helloworld.core.click_count,cljs.core.inc);
})], null)], null)], null);
});
helloworld.core.app = (function helloworld$core$app(){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"container"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [helloworld.title.header,new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,helloworld.core.app_state))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [helloworld.core.users_list,new cljs.core.Keyword(null,"users","users",-713552705).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,helloworld.core.app_state))], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [helloworld.core.count_view], null)], null);
});
reagent.core.render.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [helloworld.core.app], null),document.querySelector("#cljs-target"));

//# sourceMappingURL=core.js.map