// Compiled by ClojureScript 1.9.229 {}
goog.provide('cljs.repl');
goog.require('cljs.core');
goog.require('cljs.spec');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__46450){
var map__46475 = p__46450;
var map__46475__$1 = ((((!((map__46475 == null)))?((((map__46475.cljs$lang$protocol_mask$partition0$ & (64))) || (map__46475.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__46475):map__46475);
var m = map__46475__$1;
var n = cljs.core.get.call(null,map__46475__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.call(null,map__46475__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.println.call(null,"-------------------------");

cljs.core.println.call(null,[cljs.core.str((function (){var temp__4657__auto__ = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(temp__4657__auto__)){
var ns = temp__4657__auto__;
return [cljs.core.str(ns),cljs.core.str("/")].join('');
} else {
return null;
}
})()),cljs.core.str(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join(''));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Protocol");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m))){
var seq__46477_46499 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__46478_46500 = null;
var count__46479_46501 = (0);
var i__46480_46502 = (0);
while(true){
if((i__46480_46502 < count__46479_46501)){
var f_46503 = cljs.core._nth.call(null,chunk__46478_46500,i__46480_46502);
cljs.core.println.call(null,"  ",f_46503);

var G__46504 = seq__46477_46499;
var G__46505 = chunk__46478_46500;
var G__46506 = count__46479_46501;
var G__46507 = (i__46480_46502 + (1));
seq__46477_46499 = G__46504;
chunk__46478_46500 = G__46505;
count__46479_46501 = G__46506;
i__46480_46502 = G__46507;
continue;
} else {
var temp__4657__auto___46508 = cljs.core.seq.call(null,seq__46477_46499);
if(temp__4657__auto___46508){
var seq__46477_46509__$1 = temp__4657__auto___46508;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__46477_46509__$1)){
var c__45114__auto___46510 = cljs.core.chunk_first.call(null,seq__46477_46509__$1);
var G__46511 = cljs.core.chunk_rest.call(null,seq__46477_46509__$1);
var G__46512 = c__45114__auto___46510;
var G__46513 = cljs.core.count.call(null,c__45114__auto___46510);
var G__46514 = (0);
seq__46477_46499 = G__46511;
chunk__46478_46500 = G__46512;
count__46479_46501 = G__46513;
i__46480_46502 = G__46514;
continue;
} else {
var f_46515 = cljs.core.first.call(null,seq__46477_46509__$1);
cljs.core.println.call(null,"  ",f_46515);

var G__46516 = cljs.core.next.call(null,seq__46477_46509__$1);
var G__46517 = null;
var G__46518 = (0);
var G__46519 = (0);
seq__46477_46499 = G__46516;
chunk__46478_46500 = G__46517;
count__46479_46501 = G__46518;
i__46480_46502 = G__46519;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_46520 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__44303__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__44303__auto__)){
return or__44303__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.call(null,arglists_46520);
} else {
cljs.core.prn.call(null,((cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first.call(null,arglists_46520)))?cljs.core.second.call(null,arglists_46520):arglists_46520));
}
} else {
}
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"special-form","special-form",-1326536374).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Special Form");

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.contains_QMARK_.call(null,m,new cljs.core.Keyword(null,"url","url",276297046))){
if(cljs.core.truth_(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))){
return cljs.core.println.call(null,[cljs.core.str("\n  Please see http://clojure.org/"),cljs.core.str(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))].join(''));
} else {
return null;
}
} else {
return cljs.core.println.call(null,[cljs.core.str("\n  Please see http://clojure.org/special_forms#"),cljs.core.str(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join(''));
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Macro");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"REPL Special Function");
} else {
}

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
var seq__46481_46521 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__46482_46522 = null;
var count__46483_46523 = (0);
var i__46484_46524 = (0);
while(true){
if((i__46484_46524 < count__46483_46523)){
var vec__46485_46525 = cljs.core._nth.call(null,chunk__46482_46522,i__46484_46524);
var name_46526 = cljs.core.nth.call(null,vec__46485_46525,(0),null);
var map__46488_46527 = cljs.core.nth.call(null,vec__46485_46525,(1),null);
var map__46488_46528__$1 = ((((!((map__46488_46527 == null)))?((((map__46488_46527.cljs$lang$protocol_mask$partition0$ & (64))) || (map__46488_46527.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__46488_46527):map__46488_46527);
var doc_46529 = cljs.core.get.call(null,map__46488_46528__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_46530 = cljs.core.get.call(null,map__46488_46528__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_46526);

cljs.core.println.call(null," ",arglists_46530);

if(cljs.core.truth_(doc_46529)){
cljs.core.println.call(null," ",doc_46529);
} else {
}

var G__46531 = seq__46481_46521;
var G__46532 = chunk__46482_46522;
var G__46533 = count__46483_46523;
var G__46534 = (i__46484_46524 + (1));
seq__46481_46521 = G__46531;
chunk__46482_46522 = G__46532;
count__46483_46523 = G__46533;
i__46484_46524 = G__46534;
continue;
} else {
var temp__4657__auto___46535 = cljs.core.seq.call(null,seq__46481_46521);
if(temp__4657__auto___46535){
var seq__46481_46536__$1 = temp__4657__auto___46535;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__46481_46536__$1)){
var c__45114__auto___46537 = cljs.core.chunk_first.call(null,seq__46481_46536__$1);
var G__46538 = cljs.core.chunk_rest.call(null,seq__46481_46536__$1);
var G__46539 = c__45114__auto___46537;
var G__46540 = cljs.core.count.call(null,c__45114__auto___46537);
var G__46541 = (0);
seq__46481_46521 = G__46538;
chunk__46482_46522 = G__46539;
count__46483_46523 = G__46540;
i__46484_46524 = G__46541;
continue;
} else {
var vec__46490_46542 = cljs.core.first.call(null,seq__46481_46536__$1);
var name_46543 = cljs.core.nth.call(null,vec__46490_46542,(0),null);
var map__46493_46544 = cljs.core.nth.call(null,vec__46490_46542,(1),null);
var map__46493_46545__$1 = ((((!((map__46493_46544 == null)))?((((map__46493_46544.cljs$lang$protocol_mask$partition0$ & (64))) || (map__46493_46544.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__46493_46544):map__46493_46544);
var doc_46546 = cljs.core.get.call(null,map__46493_46545__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_46547 = cljs.core.get.call(null,map__46493_46545__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_46543);

cljs.core.println.call(null," ",arglists_46547);

if(cljs.core.truth_(doc_46546)){
cljs.core.println.call(null," ",doc_46546);
} else {
}

var G__46548 = cljs.core.next.call(null,seq__46481_46536__$1);
var G__46549 = null;
var G__46550 = (0);
var G__46551 = (0);
seq__46481_46521 = G__46548;
chunk__46482_46522 = G__46549;
count__46483_46523 = G__46550;
i__46484_46524 = G__46551;
continue;
}
} else {
}
}
break;
}
} else {
}

if(cljs.core.truth_(n)){
var temp__4657__auto__ = cljs.spec.get_spec.call(null,cljs.core.symbol.call(null,[cljs.core.str(cljs.core.ns_name.call(null,n))].join(''),cljs.core.name.call(null,nm)));
if(cljs.core.truth_(temp__4657__auto__)){
var fnspec = temp__4657__auto__;
cljs.core.print.call(null,"Spec");

var seq__46495 = cljs.core.seq.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__46496 = null;
var count__46497 = (0);
var i__46498 = (0);
while(true){
if((i__46498 < count__46497)){
var role = cljs.core._nth.call(null,chunk__46496,i__46498);
var temp__4657__auto___46552__$1 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__4657__auto___46552__$1)){
var spec_46553 = temp__4657__auto___46552__$1;
cljs.core.print.call(null,[cljs.core.str("\n "),cljs.core.str(cljs.core.name.call(null,role)),cljs.core.str(":")].join(''),cljs.spec.describe.call(null,spec_46553));
} else {
}

var G__46554 = seq__46495;
var G__46555 = chunk__46496;
var G__46556 = count__46497;
var G__46557 = (i__46498 + (1));
seq__46495 = G__46554;
chunk__46496 = G__46555;
count__46497 = G__46556;
i__46498 = G__46557;
continue;
} else {
var temp__4657__auto____$1 = cljs.core.seq.call(null,seq__46495);
if(temp__4657__auto____$1){
var seq__46495__$1 = temp__4657__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__46495__$1)){
var c__45114__auto__ = cljs.core.chunk_first.call(null,seq__46495__$1);
var G__46558 = cljs.core.chunk_rest.call(null,seq__46495__$1);
var G__46559 = c__45114__auto__;
var G__46560 = cljs.core.count.call(null,c__45114__auto__);
var G__46561 = (0);
seq__46495 = G__46558;
chunk__46496 = G__46559;
count__46497 = G__46560;
i__46498 = G__46561;
continue;
} else {
var role = cljs.core.first.call(null,seq__46495__$1);
var temp__4657__auto___46562__$2 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__4657__auto___46562__$2)){
var spec_46563 = temp__4657__auto___46562__$2;
cljs.core.print.call(null,[cljs.core.str("\n "),cljs.core.str(cljs.core.name.call(null,role)),cljs.core.str(":")].join(''),cljs.spec.describe.call(null,spec_46563));
} else {
}

var G__46564 = cljs.core.next.call(null,seq__46495__$1);
var G__46565 = null;
var G__46566 = (0);
var G__46567 = (0);
seq__46495 = G__46564;
chunk__46496 = G__46565;
count__46497 = G__46566;
i__46498 = G__46567;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return null;
}
} else {
return null;
}
}
});

//# sourceMappingURL=repl.js.map