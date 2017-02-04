// Compiled by ClojureScript 1.9.229 {}
goog.provide('cljs.spec.impl.gen');
goog.require('cljs.core');
goog.require('cljs.core');

/**
* @constructor
 * @implements {cljs.core.IDeref}
*/
cljs.spec.impl.gen.LazyVar = (function (f,cached){
this.f = f;
this.cached = cached;
this.cljs$lang$protocol_mask$partition0$ = 32768;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.spec.impl.gen.LazyVar.prototype.cljs$core$IDeref$_deref$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
if(!((self__.cached == null))){
return self__.cached;
} else {
var x = self__.f.call(null);
if((x == null)){
} else {
self__.cached = x;
}

return x;
}
});

cljs.spec.impl.gen.LazyVar.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),cljs.core.with_meta(new cljs.core.Symbol(null,"cached","cached",-1216707864,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"mutable","mutable",875778266),true], null))], null);
});

cljs.spec.impl.gen.LazyVar.cljs$lang$type = true;

cljs.spec.impl.gen.LazyVar.cljs$lang$ctorStr = "cljs.spec.impl.gen/LazyVar";

cljs.spec.impl.gen.LazyVar.cljs$lang$ctorPrWriter = (function (this__44909__auto__,writer__44910__auto__,opt__44911__auto__){
return cljs.core._write.call(null,writer__44910__auto__,"cljs.spec.impl.gen/LazyVar");
});

cljs.spec.impl.gen.__GT_LazyVar = (function cljs$spec$impl$gen$__GT_LazyVar(f,cached){
return (new cljs.spec.impl.gen.LazyVar(f,cached));
});

cljs.spec.impl.gen.quick_check_ref = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check.quick_check !== 'undefined')){
return clojure.test.check.quick_check;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check","quick-check","clojure.test.check/quick-check",-810344251,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check","quick-check","clojure.test.check/quick-check",-810344251,null))),cljs.core.str(" never required")].join('')));
}
}),null));
cljs.spec.impl.gen.quick_check = (function cljs$spec$impl$gen$quick_check(var_args){
var args__45385__auto__ = [];
var len__45378__auto___47436 = arguments.length;
var i__45379__auto___47437 = (0);
while(true){
if((i__45379__auto___47437 < len__45378__auto___47436)){
args__45385__auto__.push((arguments[i__45379__auto___47437]));

var G__47438 = (i__45379__auto___47437 + (1));
i__45379__auto___47437 = G__47438;
continue;
} else {
}
break;
}

var argseq__45386__auto__ = ((((0) < args__45385__auto__.length))?(new cljs.core.IndexedSeq(args__45385__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.quick_check.cljs$core$IFn$_invoke$arity$variadic(argseq__45386__auto__);
});

cljs.spec.impl.gen.quick_check.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,cljs.spec.impl.gen.quick_check_ref),args);
});

cljs.spec.impl.gen.quick_check.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.quick_check.cljs$lang$applyTo = (function (seq47435){
return cljs.spec.impl.gen.quick_check.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq47435));
});

cljs.spec.impl.gen.for_all_STAR__ref = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.properties.for_all_STAR_ !== 'undefined')){
return clojure.test.check.properties.for_all_STAR_;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.properties","for-all*","clojure.test.check.properties/for-all*",67088845,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.properties","for-all*","clojure.test.check.properties/for-all*",67088845,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Dynamically loaded clojure.test.check.properties/for-all*.
 */
cljs.spec.impl.gen.for_all_STAR_ = (function cljs$spec$impl$gen$for_all_STAR_(var_args){
var args__45385__auto__ = [];
var len__45378__auto___47440 = arguments.length;
var i__45379__auto___47441 = (0);
while(true){
if((i__45379__auto___47441 < len__45378__auto___47440)){
args__45385__auto__.push((arguments[i__45379__auto___47441]));

var G__47442 = (i__45379__auto___47441 + (1));
i__45379__auto___47441 = G__47442;
continue;
} else {
}
break;
}

var argseq__45386__auto__ = ((((0) < args__45385__auto__.length))?(new cljs.core.IndexedSeq(args__45385__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.for_all_STAR_.cljs$core$IFn$_invoke$arity$variadic(argseq__45386__auto__);
});

cljs.spec.impl.gen.for_all_STAR_.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,cljs.spec.impl.gen.for_all_STAR__ref),args);
});

cljs.spec.impl.gen.for_all_STAR_.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.for_all_STAR_.cljs$lang$applyTo = (function (seq47439){
return cljs.spec.impl.gen.for_all_STAR_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq47439));
});

var g_QMARK__47443 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.generator_QMARK_ !== 'undefined')){
return clojure.test.check.generators.generator_QMARK_;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","generator?","clojure.test.check.generators/generator?",-1378210460,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","generator?","clojure.test.check.generators/generator?",-1378210460,null))),cljs.core.str(" never required")].join('')));
}
}),null));
var g_47444 = (new cljs.spec.impl.gen.LazyVar(((function (g_QMARK__47443){
return (function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.generate !== 'undefined')){
return clojure.test.check.generators.generate;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","generate","clojure.test.check.generators/generate",-690390711,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","generate","clojure.test.check.generators/generate",-690390711,null))),cljs.core.str(" never required")].join('')));
}
});})(g_QMARK__47443))
,null));
var mkg_47445 = (new cljs.spec.impl.gen.LazyVar(((function (g_QMARK__47443,g_47444){
return (function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.__GT_Generator !== 'undefined')){
return clojure.test.check.generators.__GT_Generator;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","->Generator","clojure.test.check.generators/->Generator",-1179475051,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","->Generator","clojure.test.check.generators/->Generator",-1179475051,null))),cljs.core.str(" never required")].join('')));
}
});})(g_QMARK__47443,g_47444))
,null));
cljs.spec.impl.gen.generator_QMARK_ = ((function (g_QMARK__47443,g_47444,mkg_47445){
return (function cljs$spec$impl$gen$generator_QMARK_(x){
return cljs.core.deref.call(null,g_QMARK__47443).call(null,x);
});})(g_QMARK__47443,g_47444,mkg_47445))
;

cljs.spec.impl.gen.generator = ((function (g_QMARK__47443,g_47444,mkg_47445){
return (function cljs$spec$impl$gen$generator(gfn){
return cljs.core.deref.call(null,mkg_47445).call(null,gfn);
});})(g_QMARK__47443,g_47444,mkg_47445))
;

/**
 * Generate a single value using generator.
 */
cljs.spec.impl.gen.generate = ((function (g_QMARK__47443,g_47444,mkg_47445){
return (function cljs$spec$impl$gen$generate(generator){
return cljs.core.deref.call(null,g_47444).call(null,generator);
});})(g_QMARK__47443,g_47444,mkg_47445))
;
cljs.spec.impl.gen.delay_impl = (function cljs$spec$impl$gen$delay_impl(gfnd){
return cljs.spec.impl.gen.generator.call(null,(function (rnd,size){
return new cljs.core.Keyword(null,"gen","gen",142575302).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,gfnd)).call(null,rnd,size);
}));
});
var g__45454__auto___47464 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.hash_map !== 'undefined')){
return clojure.test.check.generators.hash_map;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","hash-map","clojure.test.check.generators/hash-map",1961346626,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","hash-map","clojure.test.check.generators/hash-map",1961346626,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/hash-map
 */
cljs.spec.impl.gen.hash_map = ((function (g__45454__auto___47464){
return (function cljs$spec$impl$gen$hash_map(var_args){
var args__45385__auto__ = [];
var len__45378__auto___47465 = arguments.length;
var i__45379__auto___47466 = (0);
while(true){
if((i__45379__auto___47466 < len__45378__auto___47465)){
args__45385__auto__.push((arguments[i__45379__auto___47466]));

var G__47467 = (i__45379__auto___47466 + (1));
i__45379__auto___47466 = G__47467;
continue;
} else {
}
break;
}

var argseq__45386__auto__ = ((((0) < args__45385__auto__.length))?(new cljs.core.IndexedSeq(args__45385__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.hash_map.cljs$core$IFn$_invoke$arity$variadic(argseq__45386__auto__);
});})(g__45454__auto___47464))
;

cljs.spec.impl.gen.hash_map.cljs$core$IFn$_invoke$arity$variadic = ((function (g__45454__auto___47464){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__45454__auto___47464),args);
});})(g__45454__auto___47464))
;

cljs.spec.impl.gen.hash_map.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.hash_map.cljs$lang$applyTo = ((function (g__45454__auto___47464){
return (function (seq47446){
return cljs.spec.impl.gen.hash_map.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq47446));
});})(g__45454__auto___47464))
;


var g__45454__auto___47468 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.list !== 'undefined')){
return clojure.test.check.generators.list;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","list","clojure.test.check.generators/list",506971058,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","list","clojure.test.check.generators/list",506971058,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/list
 */
cljs.spec.impl.gen.list = ((function (g__45454__auto___47468){
return (function cljs$spec$impl$gen$list(var_args){
var args__45385__auto__ = [];
var len__45378__auto___47469 = arguments.length;
var i__45379__auto___47470 = (0);
while(true){
if((i__45379__auto___47470 < len__45378__auto___47469)){
args__45385__auto__.push((arguments[i__45379__auto___47470]));

var G__47471 = (i__45379__auto___47470 + (1));
i__45379__auto___47470 = G__47471;
continue;
} else {
}
break;
}

var argseq__45386__auto__ = ((((0) < args__45385__auto__.length))?(new cljs.core.IndexedSeq(args__45385__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.list.cljs$core$IFn$_invoke$arity$variadic(argseq__45386__auto__);
});})(g__45454__auto___47468))
;

cljs.spec.impl.gen.list.cljs$core$IFn$_invoke$arity$variadic = ((function (g__45454__auto___47468){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__45454__auto___47468),args);
});})(g__45454__auto___47468))
;

cljs.spec.impl.gen.list.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.list.cljs$lang$applyTo = ((function (g__45454__auto___47468){
return (function (seq47447){
return cljs.spec.impl.gen.list.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq47447));
});})(g__45454__auto___47468))
;


var g__45454__auto___47472 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.map !== 'undefined')){
return clojure.test.check.generators.map;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","map","clojure.test.check.generators/map",45738796,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","map","clojure.test.check.generators/map",45738796,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/map
 */
cljs.spec.impl.gen.map = ((function (g__45454__auto___47472){
return (function cljs$spec$impl$gen$map(var_args){
var args__45385__auto__ = [];
var len__45378__auto___47473 = arguments.length;
var i__45379__auto___47474 = (0);
while(true){
if((i__45379__auto___47474 < len__45378__auto___47473)){
args__45385__auto__.push((arguments[i__45379__auto___47474]));

var G__47475 = (i__45379__auto___47474 + (1));
i__45379__auto___47474 = G__47475;
continue;
} else {
}
break;
}

var argseq__45386__auto__ = ((((0) < args__45385__auto__.length))?(new cljs.core.IndexedSeq(args__45385__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.map.cljs$core$IFn$_invoke$arity$variadic(argseq__45386__auto__);
});})(g__45454__auto___47472))
;

cljs.spec.impl.gen.map.cljs$core$IFn$_invoke$arity$variadic = ((function (g__45454__auto___47472){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__45454__auto___47472),args);
});})(g__45454__auto___47472))
;

cljs.spec.impl.gen.map.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.map.cljs$lang$applyTo = ((function (g__45454__auto___47472){
return (function (seq47448){
return cljs.spec.impl.gen.map.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq47448));
});})(g__45454__auto___47472))
;


var g__45454__auto___47476 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.not_empty !== 'undefined')){
return clojure.test.check.generators.not_empty;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","not-empty","clojure.test.check.generators/not-empty",-876211682,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","not-empty","clojure.test.check.generators/not-empty",-876211682,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/not-empty
 */
cljs.spec.impl.gen.not_empty = ((function (g__45454__auto___47476){
return (function cljs$spec$impl$gen$not_empty(var_args){
var args__45385__auto__ = [];
var len__45378__auto___47477 = arguments.length;
var i__45379__auto___47478 = (0);
while(true){
if((i__45379__auto___47478 < len__45378__auto___47477)){
args__45385__auto__.push((arguments[i__45379__auto___47478]));

var G__47479 = (i__45379__auto___47478 + (1));
i__45379__auto___47478 = G__47479;
continue;
} else {
}
break;
}

var argseq__45386__auto__ = ((((0) < args__45385__auto__.length))?(new cljs.core.IndexedSeq(args__45385__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.not_empty.cljs$core$IFn$_invoke$arity$variadic(argseq__45386__auto__);
});})(g__45454__auto___47476))
;

cljs.spec.impl.gen.not_empty.cljs$core$IFn$_invoke$arity$variadic = ((function (g__45454__auto___47476){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__45454__auto___47476),args);
});})(g__45454__auto___47476))
;

cljs.spec.impl.gen.not_empty.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.not_empty.cljs$lang$applyTo = ((function (g__45454__auto___47476){
return (function (seq47449){
return cljs.spec.impl.gen.not_empty.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq47449));
});})(g__45454__auto___47476))
;


var g__45454__auto___47480 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.set !== 'undefined')){
return clojure.test.check.generators.set;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","set","clojure.test.check.generators/set",-1027639543,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","set","clojure.test.check.generators/set",-1027639543,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/set
 */
cljs.spec.impl.gen.set = ((function (g__45454__auto___47480){
return (function cljs$spec$impl$gen$set(var_args){
var args__45385__auto__ = [];
var len__45378__auto___47481 = arguments.length;
var i__45379__auto___47482 = (0);
while(true){
if((i__45379__auto___47482 < len__45378__auto___47481)){
args__45385__auto__.push((arguments[i__45379__auto___47482]));

var G__47483 = (i__45379__auto___47482 + (1));
i__45379__auto___47482 = G__47483;
continue;
} else {
}
break;
}

var argseq__45386__auto__ = ((((0) < args__45385__auto__.length))?(new cljs.core.IndexedSeq(args__45385__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.set.cljs$core$IFn$_invoke$arity$variadic(argseq__45386__auto__);
});})(g__45454__auto___47480))
;

cljs.spec.impl.gen.set.cljs$core$IFn$_invoke$arity$variadic = ((function (g__45454__auto___47480){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__45454__auto___47480),args);
});})(g__45454__auto___47480))
;

cljs.spec.impl.gen.set.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.set.cljs$lang$applyTo = ((function (g__45454__auto___47480){
return (function (seq47450){
return cljs.spec.impl.gen.set.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq47450));
});})(g__45454__auto___47480))
;


var g__45454__auto___47484 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.vector !== 'undefined')){
return clojure.test.check.generators.vector;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","vector","clojure.test.check.generators/vector",1081775325,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","vector","clojure.test.check.generators/vector",1081775325,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/vector
 */
cljs.spec.impl.gen.vector = ((function (g__45454__auto___47484){
return (function cljs$spec$impl$gen$vector(var_args){
var args__45385__auto__ = [];
var len__45378__auto___47485 = arguments.length;
var i__45379__auto___47486 = (0);
while(true){
if((i__45379__auto___47486 < len__45378__auto___47485)){
args__45385__auto__.push((arguments[i__45379__auto___47486]));

var G__47487 = (i__45379__auto___47486 + (1));
i__45379__auto___47486 = G__47487;
continue;
} else {
}
break;
}

var argseq__45386__auto__ = ((((0) < args__45385__auto__.length))?(new cljs.core.IndexedSeq(args__45385__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.vector.cljs$core$IFn$_invoke$arity$variadic(argseq__45386__auto__);
});})(g__45454__auto___47484))
;

cljs.spec.impl.gen.vector.cljs$core$IFn$_invoke$arity$variadic = ((function (g__45454__auto___47484){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__45454__auto___47484),args);
});})(g__45454__auto___47484))
;

cljs.spec.impl.gen.vector.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.vector.cljs$lang$applyTo = ((function (g__45454__auto___47484){
return (function (seq47451){
return cljs.spec.impl.gen.vector.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq47451));
});})(g__45454__auto___47484))
;


var g__45454__auto___47488 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.vector_distinct !== 'undefined')){
return clojure.test.check.generators.vector_distinct;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","vector-distinct","clojure.test.check.generators/vector-distinct",1656877834,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","vector-distinct","clojure.test.check.generators/vector-distinct",1656877834,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/vector-distinct
 */
cljs.spec.impl.gen.vector_distinct = ((function (g__45454__auto___47488){
return (function cljs$spec$impl$gen$vector_distinct(var_args){
var args__45385__auto__ = [];
var len__45378__auto___47489 = arguments.length;
var i__45379__auto___47490 = (0);
while(true){
if((i__45379__auto___47490 < len__45378__auto___47489)){
args__45385__auto__.push((arguments[i__45379__auto___47490]));

var G__47491 = (i__45379__auto___47490 + (1));
i__45379__auto___47490 = G__47491;
continue;
} else {
}
break;
}

var argseq__45386__auto__ = ((((0) < args__45385__auto__.length))?(new cljs.core.IndexedSeq(args__45385__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.vector_distinct.cljs$core$IFn$_invoke$arity$variadic(argseq__45386__auto__);
});})(g__45454__auto___47488))
;

cljs.spec.impl.gen.vector_distinct.cljs$core$IFn$_invoke$arity$variadic = ((function (g__45454__auto___47488){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__45454__auto___47488),args);
});})(g__45454__auto___47488))
;

cljs.spec.impl.gen.vector_distinct.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.vector_distinct.cljs$lang$applyTo = ((function (g__45454__auto___47488){
return (function (seq47452){
return cljs.spec.impl.gen.vector_distinct.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq47452));
});})(g__45454__auto___47488))
;


var g__45454__auto___47492 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.fmap !== 'undefined')){
return clojure.test.check.generators.fmap;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","fmap","clojure.test.check.generators/fmap",1957997092,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","fmap","clojure.test.check.generators/fmap",1957997092,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/fmap
 */
cljs.spec.impl.gen.fmap = ((function (g__45454__auto___47492){
return (function cljs$spec$impl$gen$fmap(var_args){
var args__45385__auto__ = [];
var len__45378__auto___47493 = arguments.length;
var i__45379__auto___47494 = (0);
while(true){
if((i__45379__auto___47494 < len__45378__auto___47493)){
args__45385__auto__.push((arguments[i__45379__auto___47494]));

var G__47495 = (i__45379__auto___47494 + (1));
i__45379__auto___47494 = G__47495;
continue;
} else {
}
break;
}

var argseq__45386__auto__ = ((((0) < args__45385__auto__.length))?(new cljs.core.IndexedSeq(args__45385__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.fmap.cljs$core$IFn$_invoke$arity$variadic(argseq__45386__auto__);
});})(g__45454__auto___47492))
;

cljs.spec.impl.gen.fmap.cljs$core$IFn$_invoke$arity$variadic = ((function (g__45454__auto___47492){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__45454__auto___47492),args);
});})(g__45454__auto___47492))
;

cljs.spec.impl.gen.fmap.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.fmap.cljs$lang$applyTo = ((function (g__45454__auto___47492){
return (function (seq47453){
return cljs.spec.impl.gen.fmap.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq47453));
});})(g__45454__auto___47492))
;


var g__45454__auto___47496 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.elements !== 'undefined')){
return clojure.test.check.generators.elements;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","elements","clojure.test.check.generators/elements",438991326,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","elements","clojure.test.check.generators/elements",438991326,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/elements
 */
cljs.spec.impl.gen.elements = ((function (g__45454__auto___47496){
return (function cljs$spec$impl$gen$elements(var_args){
var args__45385__auto__ = [];
var len__45378__auto___47497 = arguments.length;
var i__45379__auto___47498 = (0);
while(true){
if((i__45379__auto___47498 < len__45378__auto___47497)){
args__45385__auto__.push((arguments[i__45379__auto___47498]));

var G__47499 = (i__45379__auto___47498 + (1));
i__45379__auto___47498 = G__47499;
continue;
} else {
}
break;
}

var argseq__45386__auto__ = ((((0) < args__45385__auto__.length))?(new cljs.core.IndexedSeq(args__45385__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.elements.cljs$core$IFn$_invoke$arity$variadic(argseq__45386__auto__);
});})(g__45454__auto___47496))
;

cljs.spec.impl.gen.elements.cljs$core$IFn$_invoke$arity$variadic = ((function (g__45454__auto___47496){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__45454__auto___47496),args);
});})(g__45454__auto___47496))
;

cljs.spec.impl.gen.elements.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.elements.cljs$lang$applyTo = ((function (g__45454__auto___47496){
return (function (seq47454){
return cljs.spec.impl.gen.elements.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq47454));
});})(g__45454__auto___47496))
;


var g__45454__auto___47500 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.bind !== 'undefined')){
return clojure.test.check.generators.bind;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","bind","clojure.test.check.generators/bind",-361313906,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","bind","clojure.test.check.generators/bind",-361313906,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/bind
 */
cljs.spec.impl.gen.bind = ((function (g__45454__auto___47500){
return (function cljs$spec$impl$gen$bind(var_args){
var args__45385__auto__ = [];
var len__45378__auto___47501 = arguments.length;
var i__45379__auto___47502 = (0);
while(true){
if((i__45379__auto___47502 < len__45378__auto___47501)){
args__45385__auto__.push((arguments[i__45379__auto___47502]));

var G__47503 = (i__45379__auto___47502 + (1));
i__45379__auto___47502 = G__47503;
continue;
} else {
}
break;
}

var argseq__45386__auto__ = ((((0) < args__45385__auto__.length))?(new cljs.core.IndexedSeq(args__45385__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.bind.cljs$core$IFn$_invoke$arity$variadic(argseq__45386__auto__);
});})(g__45454__auto___47500))
;

cljs.spec.impl.gen.bind.cljs$core$IFn$_invoke$arity$variadic = ((function (g__45454__auto___47500){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__45454__auto___47500),args);
});})(g__45454__auto___47500))
;

cljs.spec.impl.gen.bind.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.bind.cljs$lang$applyTo = ((function (g__45454__auto___47500){
return (function (seq47455){
return cljs.spec.impl.gen.bind.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq47455));
});})(g__45454__auto___47500))
;


var g__45454__auto___47504 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.choose !== 'undefined')){
return clojure.test.check.generators.choose;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","choose","clojure.test.check.generators/choose",909997832,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","choose","clojure.test.check.generators/choose",909997832,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/choose
 */
cljs.spec.impl.gen.choose = ((function (g__45454__auto___47504){
return (function cljs$spec$impl$gen$choose(var_args){
var args__45385__auto__ = [];
var len__45378__auto___47505 = arguments.length;
var i__45379__auto___47506 = (0);
while(true){
if((i__45379__auto___47506 < len__45378__auto___47505)){
args__45385__auto__.push((arguments[i__45379__auto___47506]));

var G__47507 = (i__45379__auto___47506 + (1));
i__45379__auto___47506 = G__47507;
continue;
} else {
}
break;
}

var argseq__45386__auto__ = ((((0) < args__45385__auto__.length))?(new cljs.core.IndexedSeq(args__45385__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.choose.cljs$core$IFn$_invoke$arity$variadic(argseq__45386__auto__);
});})(g__45454__auto___47504))
;

cljs.spec.impl.gen.choose.cljs$core$IFn$_invoke$arity$variadic = ((function (g__45454__auto___47504){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__45454__auto___47504),args);
});})(g__45454__auto___47504))
;

cljs.spec.impl.gen.choose.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.choose.cljs$lang$applyTo = ((function (g__45454__auto___47504){
return (function (seq47456){
return cljs.spec.impl.gen.choose.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq47456));
});})(g__45454__auto___47504))
;


var g__45454__auto___47508 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.one_of !== 'undefined')){
return clojure.test.check.generators.one_of;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","one-of","clojure.test.check.generators/one-of",-183339191,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","one-of","clojure.test.check.generators/one-of",-183339191,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/one-of
 */
cljs.spec.impl.gen.one_of = ((function (g__45454__auto___47508){
return (function cljs$spec$impl$gen$one_of(var_args){
var args__45385__auto__ = [];
var len__45378__auto___47509 = arguments.length;
var i__45379__auto___47510 = (0);
while(true){
if((i__45379__auto___47510 < len__45378__auto___47509)){
args__45385__auto__.push((arguments[i__45379__auto___47510]));

var G__47511 = (i__45379__auto___47510 + (1));
i__45379__auto___47510 = G__47511;
continue;
} else {
}
break;
}

var argseq__45386__auto__ = ((((0) < args__45385__auto__.length))?(new cljs.core.IndexedSeq(args__45385__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.one_of.cljs$core$IFn$_invoke$arity$variadic(argseq__45386__auto__);
});})(g__45454__auto___47508))
;

cljs.spec.impl.gen.one_of.cljs$core$IFn$_invoke$arity$variadic = ((function (g__45454__auto___47508){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__45454__auto___47508),args);
});})(g__45454__auto___47508))
;

cljs.spec.impl.gen.one_of.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.one_of.cljs$lang$applyTo = ((function (g__45454__auto___47508){
return (function (seq47457){
return cljs.spec.impl.gen.one_of.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq47457));
});})(g__45454__auto___47508))
;


var g__45454__auto___47512 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.such_that !== 'undefined')){
return clojure.test.check.generators.such_that;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","such-that","clojure.test.check.generators/such-that",-1754178732,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","such-that","clojure.test.check.generators/such-that",-1754178732,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/such-that
 */
cljs.spec.impl.gen.such_that = ((function (g__45454__auto___47512){
return (function cljs$spec$impl$gen$such_that(var_args){
var args__45385__auto__ = [];
var len__45378__auto___47513 = arguments.length;
var i__45379__auto___47514 = (0);
while(true){
if((i__45379__auto___47514 < len__45378__auto___47513)){
args__45385__auto__.push((arguments[i__45379__auto___47514]));

var G__47515 = (i__45379__auto___47514 + (1));
i__45379__auto___47514 = G__47515;
continue;
} else {
}
break;
}

var argseq__45386__auto__ = ((((0) < args__45385__auto__.length))?(new cljs.core.IndexedSeq(args__45385__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.such_that.cljs$core$IFn$_invoke$arity$variadic(argseq__45386__auto__);
});})(g__45454__auto___47512))
;

cljs.spec.impl.gen.such_that.cljs$core$IFn$_invoke$arity$variadic = ((function (g__45454__auto___47512){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__45454__auto___47512),args);
});})(g__45454__auto___47512))
;

cljs.spec.impl.gen.such_that.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.such_that.cljs$lang$applyTo = ((function (g__45454__auto___47512){
return (function (seq47458){
return cljs.spec.impl.gen.such_that.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq47458));
});})(g__45454__auto___47512))
;


var g__45454__auto___47516 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.tuple !== 'undefined')){
return clojure.test.check.generators.tuple;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","tuple","clojure.test.check.generators/tuple",-143711557,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","tuple","clojure.test.check.generators/tuple",-143711557,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/tuple
 */
cljs.spec.impl.gen.tuple = ((function (g__45454__auto___47516){
return (function cljs$spec$impl$gen$tuple(var_args){
var args__45385__auto__ = [];
var len__45378__auto___47517 = arguments.length;
var i__45379__auto___47518 = (0);
while(true){
if((i__45379__auto___47518 < len__45378__auto___47517)){
args__45385__auto__.push((arguments[i__45379__auto___47518]));

var G__47519 = (i__45379__auto___47518 + (1));
i__45379__auto___47518 = G__47519;
continue;
} else {
}
break;
}

var argseq__45386__auto__ = ((((0) < args__45385__auto__.length))?(new cljs.core.IndexedSeq(args__45385__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.tuple.cljs$core$IFn$_invoke$arity$variadic(argseq__45386__auto__);
});})(g__45454__auto___47516))
;

cljs.spec.impl.gen.tuple.cljs$core$IFn$_invoke$arity$variadic = ((function (g__45454__auto___47516){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__45454__auto___47516),args);
});})(g__45454__auto___47516))
;

cljs.spec.impl.gen.tuple.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.tuple.cljs$lang$applyTo = ((function (g__45454__auto___47516){
return (function (seq47459){
return cljs.spec.impl.gen.tuple.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq47459));
});})(g__45454__auto___47516))
;


var g__45454__auto___47520 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.sample !== 'undefined')){
return clojure.test.check.generators.sample;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","sample","clojure.test.check.generators/sample",-382944992,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","sample","clojure.test.check.generators/sample",-382944992,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/sample
 */
cljs.spec.impl.gen.sample = ((function (g__45454__auto___47520){
return (function cljs$spec$impl$gen$sample(var_args){
var args__45385__auto__ = [];
var len__45378__auto___47521 = arguments.length;
var i__45379__auto___47522 = (0);
while(true){
if((i__45379__auto___47522 < len__45378__auto___47521)){
args__45385__auto__.push((arguments[i__45379__auto___47522]));

var G__47523 = (i__45379__auto___47522 + (1));
i__45379__auto___47522 = G__47523;
continue;
} else {
}
break;
}

var argseq__45386__auto__ = ((((0) < args__45385__auto__.length))?(new cljs.core.IndexedSeq(args__45385__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.sample.cljs$core$IFn$_invoke$arity$variadic(argseq__45386__auto__);
});})(g__45454__auto___47520))
;

cljs.spec.impl.gen.sample.cljs$core$IFn$_invoke$arity$variadic = ((function (g__45454__auto___47520){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__45454__auto___47520),args);
});})(g__45454__auto___47520))
;

cljs.spec.impl.gen.sample.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.sample.cljs$lang$applyTo = ((function (g__45454__auto___47520){
return (function (seq47460){
return cljs.spec.impl.gen.sample.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq47460));
});})(g__45454__auto___47520))
;


var g__45454__auto___47524 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.return$ !== 'undefined')){
return clojure.test.check.generators.return$;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","return","clojure.test.check.generators/return",1744522038,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","return","clojure.test.check.generators/return",1744522038,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/return
 */
cljs.spec.impl.gen.return$ = ((function (g__45454__auto___47524){
return (function cljs$spec$impl$gen$return(var_args){
var args__45385__auto__ = [];
var len__45378__auto___47525 = arguments.length;
var i__45379__auto___47526 = (0);
while(true){
if((i__45379__auto___47526 < len__45378__auto___47525)){
args__45385__auto__.push((arguments[i__45379__auto___47526]));

var G__47527 = (i__45379__auto___47526 + (1));
i__45379__auto___47526 = G__47527;
continue;
} else {
}
break;
}

var argseq__45386__auto__ = ((((0) < args__45385__auto__.length))?(new cljs.core.IndexedSeq(args__45385__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.return$.cljs$core$IFn$_invoke$arity$variadic(argseq__45386__auto__);
});})(g__45454__auto___47524))
;

cljs.spec.impl.gen.return$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__45454__auto___47524){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__45454__auto___47524),args);
});})(g__45454__auto___47524))
;

cljs.spec.impl.gen.return$.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.return$.cljs$lang$applyTo = ((function (g__45454__auto___47524){
return (function (seq47461){
return cljs.spec.impl.gen.return$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq47461));
});})(g__45454__auto___47524))
;


var g__45454__auto___47528 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.large_integer_STAR_ !== 'undefined')){
return clojure.test.check.generators.large_integer_STAR_;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","large-integer*","clojure.test.check.generators/large-integer*",-437830670,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","large-integer*","clojure.test.check.generators/large-integer*",-437830670,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/large-integer*
 */
cljs.spec.impl.gen.large_integer_STAR_ = ((function (g__45454__auto___47528){
return (function cljs$spec$impl$gen$large_integer_STAR_(var_args){
var args__45385__auto__ = [];
var len__45378__auto___47529 = arguments.length;
var i__45379__auto___47530 = (0);
while(true){
if((i__45379__auto___47530 < len__45378__auto___47529)){
args__45385__auto__.push((arguments[i__45379__auto___47530]));

var G__47531 = (i__45379__auto___47530 + (1));
i__45379__auto___47530 = G__47531;
continue;
} else {
}
break;
}

var argseq__45386__auto__ = ((((0) < args__45385__auto__.length))?(new cljs.core.IndexedSeq(args__45385__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.large_integer_STAR_.cljs$core$IFn$_invoke$arity$variadic(argseq__45386__auto__);
});})(g__45454__auto___47528))
;

cljs.spec.impl.gen.large_integer_STAR_.cljs$core$IFn$_invoke$arity$variadic = ((function (g__45454__auto___47528){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__45454__auto___47528),args);
});})(g__45454__auto___47528))
;

cljs.spec.impl.gen.large_integer_STAR_.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.large_integer_STAR_.cljs$lang$applyTo = ((function (g__45454__auto___47528){
return (function (seq47462){
return cljs.spec.impl.gen.large_integer_STAR_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq47462));
});})(g__45454__auto___47528))
;


var g__45454__auto___47532 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.double_STAR_ !== 'undefined')){
return clojure.test.check.generators.double_STAR_;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","double*","clojure.test.check.generators/double*",841542265,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","double*","clojure.test.check.generators/double*",841542265,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/double*
 */
cljs.spec.impl.gen.double_STAR_ = ((function (g__45454__auto___47532){
return (function cljs$spec$impl$gen$double_STAR_(var_args){
var args__45385__auto__ = [];
var len__45378__auto___47533 = arguments.length;
var i__45379__auto___47534 = (0);
while(true){
if((i__45379__auto___47534 < len__45378__auto___47533)){
args__45385__auto__.push((arguments[i__45379__auto___47534]));

var G__47535 = (i__45379__auto___47534 + (1));
i__45379__auto___47534 = G__47535;
continue;
} else {
}
break;
}

var argseq__45386__auto__ = ((((0) < args__45385__auto__.length))?(new cljs.core.IndexedSeq(args__45385__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.double_STAR_.cljs$core$IFn$_invoke$arity$variadic(argseq__45386__auto__);
});})(g__45454__auto___47532))
;

cljs.spec.impl.gen.double_STAR_.cljs$core$IFn$_invoke$arity$variadic = ((function (g__45454__auto___47532){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__45454__auto___47532),args);
});})(g__45454__auto___47532))
;

cljs.spec.impl.gen.double_STAR_.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.double_STAR_.cljs$lang$applyTo = ((function (g__45454__auto___47532){
return (function (seq47463){
return cljs.spec.impl.gen.double_STAR_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq47463));
});})(g__45454__auto___47532))
;

var g__45467__auto___47557 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.any !== 'undefined')){
return clojure.test.check.generators.any;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","any","clojure.test.check.generators/any",1883743710,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","any","clojure.test.check.generators/any",1883743710,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/any
 */
cljs.spec.impl.gen.any = ((function (g__45467__auto___47557){
return (function cljs$spec$impl$gen$any(var_args){
var args__45385__auto__ = [];
var len__45378__auto___47558 = arguments.length;
var i__45379__auto___47559 = (0);
while(true){
if((i__45379__auto___47559 < len__45378__auto___47558)){
args__45385__auto__.push((arguments[i__45379__auto___47559]));

var G__47560 = (i__45379__auto___47559 + (1));
i__45379__auto___47559 = G__47560;
continue;
} else {
}
break;
}

var argseq__45386__auto__ = ((((0) < args__45385__auto__.length))?(new cljs.core.IndexedSeq(args__45385__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.any.cljs$core$IFn$_invoke$arity$variadic(argseq__45386__auto__);
});})(g__45467__auto___47557))
;

cljs.spec.impl.gen.any.cljs$core$IFn$_invoke$arity$variadic = ((function (g__45467__auto___47557){
return (function (args){
return cljs.core.deref.call(null,g__45467__auto___47557);
});})(g__45467__auto___47557))
;

cljs.spec.impl.gen.any.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.any.cljs$lang$applyTo = ((function (g__45467__auto___47557){
return (function (seq47536){
return cljs.spec.impl.gen.any.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq47536));
});})(g__45467__auto___47557))
;


var g__45467__auto___47561 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.any_printable !== 'undefined')){
return clojure.test.check.generators.any_printable;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","any-printable","clojure.test.check.generators/any-printable",-1570493991,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","any-printable","clojure.test.check.generators/any-printable",-1570493991,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/any-printable
 */
cljs.spec.impl.gen.any_printable = ((function (g__45467__auto___47561){
return (function cljs$spec$impl$gen$any_printable(var_args){
var args__45385__auto__ = [];
var len__45378__auto___47562 = arguments.length;
var i__45379__auto___47563 = (0);
while(true){
if((i__45379__auto___47563 < len__45378__auto___47562)){
args__45385__auto__.push((arguments[i__45379__auto___47563]));

var G__47564 = (i__45379__auto___47563 + (1));
i__45379__auto___47563 = G__47564;
continue;
} else {
}
break;
}

var argseq__45386__auto__ = ((((0) < args__45385__auto__.length))?(new cljs.core.IndexedSeq(args__45385__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.any_printable.cljs$core$IFn$_invoke$arity$variadic(argseq__45386__auto__);
});})(g__45467__auto___47561))
;

cljs.spec.impl.gen.any_printable.cljs$core$IFn$_invoke$arity$variadic = ((function (g__45467__auto___47561){
return (function (args){
return cljs.core.deref.call(null,g__45467__auto___47561);
});})(g__45467__auto___47561))
;

cljs.spec.impl.gen.any_printable.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.any_printable.cljs$lang$applyTo = ((function (g__45467__auto___47561){
return (function (seq47537){
return cljs.spec.impl.gen.any_printable.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq47537));
});})(g__45467__auto___47561))
;


var g__45467__auto___47565 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.boolean$ !== 'undefined')){
return clojure.test.check.generators.boolean$;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","boolean","clojure.test.check.generators/boolean",1586992347,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","boolean","clojure.test.check.generators/boolean",1586992347,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/boolean
 */
cljs.spec.impl.gen.boolean$ = ((function (g__45467__auto___47565){
return (function cljs$spec$impl$gen$boolean(var_args){
var args__45385__auto__ = [];
var len__45378__auto___47566 = arguments.length;
var i__45379__auto___47567 = (0);
while(true){
if((i__45379__auto___47567 < len__45378__auto___47566)){
args__45385__auto__.push((arguments[i__45379__auto___47567]));

var G__47568 = (i__45379__auto___47567 + (1));
i__45379__auto___47567 = G__47568;
continue;
} else {
}
break;
}

var argseq__45386__auto__ = ((((0) < args__45385__auto__.length))?(new cljs.core.IndexedSeq(args__45385__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.boolean$.cljs$core$IFn$_invoke$arity$variadic(argseq__45386__auto__);
});})(g__45467__auto___47565))
;

cljs.spec.impl.gen.boolean$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__45467__auto___47565){
return (function (args){
return cljs.core.deref.call(null,g__45467__auto___47565);
});})(g__45467__auto___47565))
;

cljs.spec.impl.gen.boolean$.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.boolean$.cljs$lang$applyTo = ((function (g__45467__auto___47565){
return (function (seq47538){
return cljs.spec.impl.gen.boolean$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq47538));
});})(g__45467__auto___47565))
;


var g__45467__auto___47569 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.char$ !== 'undefined')){
return clojure.test.check.generators.char$;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","char","clojure.test.check.generators/char",-1426343459,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","char","clojure.test.check.generators/char",-1426343459,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/char
 */
cljs.spec.impl.gen.char$ = ((function (g__45467__auto___47569){
return (function cljs$spec$impl$gen$char(var_args){
var args__45385__auto__ = [];
var len__45378__auto___47570 = arguments.length;
var i__45379__auto___47571 = (0);
while(true){
if((i__45379__auto___47571 < len__45378__auto___47570)){
args__45385__auto__.push((arguments[i__45379__auto___47571]));

var G__47572 = (i__45379__auto___47571 + (1));
i__45379__auto___47571 = G__47572;
continue;
} else {
}
break;
}

var argseq__45386__auto__ = ((((0) < args__45385__auto__.length))?(new cljs.core.IndexedSeq(args__45385__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.char$.cljs$core$IFn$_invoke$arity$variadic(argseq__45386__auto__);
});})(g__45467__auto___47569))
;

cljs.spec.impl.gen.char$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__45467__auto___47569){
return (function (args){
return cljs.core.deref.call(null,g__45467__auto___47569);
});})(g__45467__auto___47569))
;

cljs.spec.impl.gen.char$.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.char$.cljs$lang$applyTo = ((function (g__45467__auto___47569){
return (function (seq47539){
return cljs.spec.impl.gen.char$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq47539));
});})(g__45467__auto___47569))
;


var g__45467__auto___47573 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.char_alpha !== 'undefined')){
return clojure.test.check.generators.char_alpha;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","char-alpha","clojure.test.check.generators/char-alpha",615785796,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","char-alpha","clojure.test.check.generators/char-alpha",615785796,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/char-alpha
 */
cljs.spec.impl.gen.char_alpha = ((function (g__45467__auto___47573){
return (function cljs$spec$impl$gen$char_alpha(var_args){
var args__45385__auto__ = [];
var len__45378__auto___47574 = arguments.length;
var i__45379__auto___47575 = (0);
while(true){
if((i__45379__auto___47575 < len__45378__auto___47574)){
args__45385__auto__.push((arguments[i__45379__auto___47575]));

var G__47576 = (i__45379__auto___47575 + (1));
i__45379__auto___47575 = G__47576;
continue;
} else {
}
break;
}

var argseq__45386__auto__ = ((((0) < args__45385__auto__.length))?(new cljs.core.IndexedSeq(args__45385__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.char_alpha.cljs$core$IFn$_invoke$arity$variadic(argseq__45386__auto__);
});})(g__45467__auto___47573))
;

cljs.spec.impl.gen.char_alpha.cljs$core$IFn$_invoke$arity$variadic = ((function (g__45467__auto___47573){
return (function (args){
return cljs.core.deref.call(null,g__45467__auto___47573);
});})(g__45467__auto___47573))
;

cljs.spec.impl.gen.char_alpha.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.char_alpha.cljs$lang$applyTo = ((function (g__45467__auto___47573){
return (function (seq47540){
return cljs.spec.impl.gen.char_alpha.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq47540));
});})(g__45467__auto___47573))
;


var g__45467__auto___47577 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.char_alphanumeric !== 'undefined')){
return clojure.test.check.generators.char_alphanumeric;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","char-alphanumeric","clojure.test.check.generators/char-alphanumeric",1383091431,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","char-alphanumeric","clojure.test.check.generators/char-alphanumeric",1383091431,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/char-alphanumeric
 */
cljs.spec.impl.gen.char_alphanumeric = ((function (g__45467__auto___47577){
return (function cljs$spec$impl$gen$char_alphanumeric(var_args){
var args__45385__auto__ = [];
var len__45378__auto___47578 = arguments.length;
var i__45379__auto___47579 = (0);
while(true){
if((i__45379__auto___47579 < len__45378__auto___47578)){
args__45385__auto__.push((arguments[i__45379__auto___47579]));

var G__47580 = (i__45379__auto___47579 + (1));
i__45379__auto___47579 = G__47580;
continue;
} else {
}
break;
}

var argseq__45386__auto__ = ((((0) < args__45385__auto__.length))?(new cljs.core.IndexedSeq(args__45385__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.char_alphanumeric.cljs$core$IFn$_invoke$arity$variadic(argseq__45386__auto__);
});})(g__45467__auto___47577))
;

cljs.spec.impl.gen.char_alphanumeric.cljs$core$IFn$_invoke$arity$variadic = ((function (g__45467__auto___47577){
return (function (args){
return cljs.core.deref.call(null,g__45467__auto___47577);
});})(g__45467__auto___47577))
;

cljs.spec.impl.gen.char_alphanumeric.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.char_alphanumeric.cljs$lang$applyTo = ((function (g__45467__auto___47577){
return (function (seq47541){
return cljs.spec.impl.gen.char_alphanumeric.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq47541));
});})(g__45467__auto___47577))
;


var g__45467__auto___47581 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.char_ascii !== 'undefined')){
return clojure.test.check.generators.char_ascii;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","char-ascii","clojure.test.check.generators/char-ascii",-899908538,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","char-ascii","clojure.test.check.generators/char-ascii",-899908538,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/char-ascii
 */
cljs.spec.impl.gen.char_ascii = ((function (g__45467__auto___47581){
return (function cljs$spec$impl$gen$char_ascii(var_args){
var args__45385__auto__ = [];
var len__45378__auto___47582 = arguments.length;
var i__45379__auto___47583 = (0);
while(true){
if((i__45379__auto___47583 < len__45378__auto___47582)){
args__45385__auto__.push((arguments[i__45379__auto___47583]));

var G__47584 = (i__45379__auto___47583 + (1));
i__45379__auto___47583 = G__47584;
continue;
} else {
}
break;
}

var argseq__45386__auto__ = ((((0) < args__45385__auto__.length))?(new cljs.core.IndexedSeq(args__45385__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.char_ascii.cljs$core$IFn$_invoke$arity$variadic(argseq__45386__auto__);
});})(g__45467__auto___47581))
;

cljs.spec.impl.gen.char_ascii.cljs$core$IFn$_invoke$arity$variadic = ((function (g__45467__auto___47581){
return (function (args){
return cljs.core.deref.call(null,g__45467__auto___47581);
});})(g__45467__auto___47581))
;

cljs.spec.impl.gen.char_ascii.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.char_ascii.cljs$lang$applyTo = ((function (g__45467__auto___47581){
return (function (seq47542){
return cljs.spec.impl.gen.char_ascii.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq47542));
});})(g__45467__auto___47581))
;


var g__45467__auto___47585 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.double$ !== 'undefined')){
return clojure.test.check.generators.double$;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","double","clojure.test.check.generators/double",668331090,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","double","clojure.test.check.generators/double",668331090,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/double
 */
cljs.spec.impl.gen.double$ = ((function (g__45467__auto___47585){
return (function cljs$spec$impl$gen$double(var_args){
var args__45385__auto__ = [];
var len__45378__auto___47586 = arguments.length;
var i__45379__auto___47587 = (0);
while(true){
if((i__45379__auto___47587 < len__45378__auto___47586)){
args__45385__auto__.push((arguments[i__45379__auto___47587]));

var G__47588 = (i__45379__auto___47587 + (1));
i__45379__auto___47587 = G__47588;
continue;
} else {
}
break;
}

var argseq__45386__auto__ = ((((0) < args__45385__auto__.length))?(new cljs.core.IndexedSeq(args__45385__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.double$.cljs$core$IFn$_invoke$arity$variadic(argseq__45386__auto__);
});})(g__45467__auto___47585))
;

cljs.spec.impl.gen.double$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__45467__auto___47585){
return (function (args){
return cljs.core.deref.call(null,g__45467__auto___47585);
});})(g__45467__auto___47585))
;

cljs.spec.impl.gen.double$.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.double$.cljs$lang$applyTo = ((function (g__45467__auto___47585){
return (function (seq47543){
return cljs.spec.impl.gen.double$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq47543));
});})(g__45467__auto___47585))
;


var g__45467__auto___47589 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.int$ !== 'undefined')){
return clojure.test.check.generators.int$;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","int","clojure.test.check.generators/int",1756228469,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","int","clojure.test.check.generators/int",1756228469,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/int
 */
cljs.spec.impl.gen.int$ = ((function (g__45467__auto___47589){
return (function cljs$spec$impl$gen$int(var_args){
var args__45385__auto__ = [];
var len__45378__auto___47590 = arguments.length;
var i__45379__auto___47591 = (0);
while(true){
if((i__45379__auto___47591 < len__45378__auto___47590)){
args__45385__auto__.push((arguments[i__45379__auto___47591]));

var G__47592 = (i__45379__auto___47591 + (1));
i__45379__auto___47591 = G__47592;
continue;
} else {
}
break;
}

var argseq__45386__auto__ = ((((0) < args__45385__auto__.length))?(new cljs.core.IndexedSeq(args__45385__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.int$.cljs$core$IFn$_invoke$arity$variadic(argseq__45386__auto__);
});})(g__45467__auto___47589))
;

cljs.spec.impl.gen.int$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__45467__auto___47589){
return (function (args){
return cljs.core.deref.call(null,g__45467__auto___47589);
});})(g__45467__auto___47589))
;

cljs.spec.impl.gen.int$.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.int$.cljs$lang$applyTo = ((function (g__45467__auto___47589){
return (function (seq47544){
return cljs.spec.impl.gen.int$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq47544));
});})(g__45467__auto___47589))
;


var g__45467__auto___47593 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.keyword !== 'undefined')){
return clojure.test.check.generators.keyword;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","keyword","clojure.test.check.generators/keyword",24530530,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","keyword","clojure.test.check.generators/keyword",24530530,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/keyword
 */
cljs.spec.impl.gen.keyword = ((function (g__45467__auto___47593){
return (function cljs$spec$impl$gen$keyword(var_args){
var args__45385__auto__ = [];
var len__45378__auto___47594 = arguments.length;
var i__45379__auto___47595 = (0);
while(true){
if((i__45379__auto___47595 < len__45378__auto___47594)){
args__45385__auto__.push((arguments[i__45379__auto___47595]));

var G__47596 = (i__45379__auto___47595 + (1));
i__45379__auto___47595 = G__47596;
continue;
} else {
}
break;
}

var argseq__45386__auto__ = ((((0) < args__45385__auto__.length))?(new cljs.core.IndexedSeq(args__45385__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.keyword.cljs$core$IFn$_invoke$arity$variadic(argseq__45386__auto__);
});})(g__45467__auto___47593))
;

cljs.spec.impl.gen.keyword.cljs$core$IFn$_invoke$arity$variadic = ((function (g__45467__auto___47593){
return (function (args){
return cljs.core.deref.call(null,g__45467__auto___47593);
});})(g__45467__auto___47593))
;

cljs.spec.impl.gen.keyword.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.keyword.cljs$lang$applyTo = ((function (g__45467__auto___47593){
return (function (seq47545){
return cljs.spec.impl.gen.keyword.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq47545));
});})(g__45467__auto___47593))
;


var g__45467__auto___47597 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.keyword_ns !== 'undefined')){
return clojure.test.check.generators.keyword_ns;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","keyword-ns","clojure.test.check.generators/keyword-ns",-1492628482,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","keyword-ns","clojure.test.check.generators/keyword-ns",-1492628482,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/keyword-ns
 */
cljs.spec.impl.gen.keyword_ns = ((function (g__45467__auto___47597){
return (function cljs$spec$impl$gen$keyword_ns(var_args){
var args__45385__auto__ = [];
var len__45378__auto___47598 = arguments.length;
var i__45379__auto___47599 = (0);
while(true){
if((i__45379__auto___47599 < len__45378__auto___47598)){
args__45385__auto__.push((arguments[i__45379__auto___47599]));

var G__47600 = (i__45379__auto___47599 + (1));
i__45379__auto___47599 = G__47600;
continue;
} else {
}
break;
}

var argseq__45386__auto__ = ((((0) < args__45385__auto__.length))?(new cljs.core.IndexedSeq(args__45385__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.keyword_ns.cljs$core$IFn$_invoke$arity$variadic(argseq__45386__auto__);
});})(g__45467__auto___47597))
;

cljs.spec.impl.gen.keyword_ns.cljs$core$IFn$_invoke$arity$variadic = ((function (g__45467__auto___47597){
return (function (args){
return cljs.core.deref.call(null,g__45467__auto___47597);
});})(g__45467__auto___47597))
;

cljs.spec.impl.gen.keyword_ns.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.keyword_ns.cljs$lang$applyTo = ((function (g__45467__auto___47597){
return (function (seq47546){
return cljs.spec.impl.gen.keyword_ns.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq47546));
});})(g__45467__auto___47597))
;


var g__45467__auto___47601 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.large_integer !== 'undefined')){
return clojure.test.check.generators.large_integer;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","large-integer","clojure.test.check.generators/large-integer",-865967138,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","large-integer","clojure.test.check.generators/large-integer",-865967138,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/large-integer
 */
cljs.spec.impl.gen.large_integer = ((function (g__45467__auto___47601){
return (function cljs$spec$impl$gen$large_integer(var_args){
var args__45385__auto__ = [];
var len__45378__auto___47602 = arguments.length;
var i__45379__auto___47603 = (0);
while(true){
if((i__45379__auto___47603 < len__45378__auto___47602)){
args__45385__auto__.push((arguments[i__45379__auto___47603]));

var G__47604 = (i__45379__auto___47603 + (1));
i__45379__auto___47603 = G__47604;
continue;
} else {
}
break;
}

var argseq__45386__auto__ = ((((0) < args__45385__auto__.length))?(new cljs.core.IndexedSeq(args__45385__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.large_integer.cljs$core$IFn$_invoke$arity$variadic(argseq__45386__auto__);
});})(g__45467__auto___47601))
;

cljs.spec.impl.gen.large_integer.cljs$core$IFn$_invoke$arity$variadic = ((function (g__45467__auto___47601){
return (function (args){
return cljs.core.deref.call(null,g__45467__auto___47601);
});})(g__45467__auto___47601))
;

cljs.spec.impl.gen.large_integer.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.large_integer.cljs$lang$applyTo = ((function (g__45467__auto___47601){
return (function (seq47547){
return cljs.spec.impl.gen.large_integer.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq47547));
});})(g__45467__auto___47601))
;


var g__45467__auto___47605 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.ratio !== 'undefined')){
return clojure.test.check.generators.ratio;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","ratio","clojure.test.check.generators/ratio",1540966915,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","ratio","clojure.test.check.generators/ratio",1540966915,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/ratio
 */
cljs.spec.impl.gen.ratio = ((function (g__45467__auto___47605){
return (function cljs$spec$impl$gen$ratio(var_args){
var args__45385__auto__ = [];
var len__45378__auto___47606 = arguments.length;
var i__45379__auto___47607 = (0);
while(true){
if((i__45379__auto___47607 < len__45378__auto___47606)){
args__45385__auto__.push((arguments[i__45379__auto___47607]));

var G__47608 = (i__45379__auto___47607 + (1));
i__45379__auto___47607 = G__47608;
continue;
} else {
}
break;
}

var argseq__45386__auto__ = ((((0) < args__45385__auto__.length))?(new cljs.core.IndexedSeq(args__45385__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.ratio.cljs$core$IFn$_invoke$arity$variadic(argseq__45386__auto__);
});})(g__45467__auto___47605))
;

cljs.spec.impl.gen.ratio.cljs$core$IFn$_invoke$arity$variadic = ((function (g__45467__auto___47605){
return (function (args){
return cljs.core.deref.call(null,g__45467__auto___47605);
});})(g__45467__auto___47605))
;

cljs.spec.impl.gen.ratio.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.ratio.cljs$lang$applyTo = ((function (g__45467__auto___47605){
return (function (seq47548){
return cljs.spec.impl.gen.ratio.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq47548));
});})(g__45467__auto___47605))
;


var g__45467__auto___47609 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.simple_type !== 'undefined')){
return clojure.test.check.generators.simple_type;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","simple-type","clojure.test.check.generators/simple-type",892572284,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","simple-type","clojure.test.check.generators/simple-type",892572284,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/simple-type
 */
cljs.spec.impl.gen.simple_type = ((function (g__45467__auto___47609){
return (function cljs$spec$impl$gen$simple_type(var_args){
var args__45385__auto__ = [];
var len__45378__auto___47610 = arguments.length;
var i__45379__auto___47611 = (0);
while(true){
if((i__45379__auto___47611 < len__45378__auto___47610)){
args__45385__auto__.push((arguments[i__45379__auto___47611]));

var G__47612 = (i__45379__auto___47611 + (1));
i__45379__auto___47611 = G__47612;
continue;
} else {
}
break;
}

var argseq__45386__auto__ = ((((0) < args__45385__auto__.length))?(new cljs.core.IndexedSeq(args__45385__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.simple_type.cljs$core$IFn$_invoke$arity$variadic(argseq__45386__auto__);
});})(g__45467__auto___47609))
;

cljs.spec.impl.gen.simple_type.cljs$core$IFn$_invoke$arity$variadic = ((function (g__45467__auto___47609){
return (function (args){
return cljs.core.deref.call(null,g__45467__auto___47609);
});})(g__45467__auto___47609))
;

cljs.spec.impl.gen.simple_type.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.simple_type.cljs$lang$applyTo = ((function (g__45467__auto___47609){
return (function (seq47549){
return cljs.spec.impl.gen.simple_type.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq47549));
});})(g__45467__auto___47609))
;


var g__45467__auto___47613 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.simple_type_printable !== 'undefined')){
return clojure.test.check.generators.simple_type_printable;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","simple-type-printable","clojure.test.check.generators/simple-type-printable",-58489962,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","simple-type-printable","clojure.test.check.generators/simple-type-printable",-58489962,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/simple-type-printable
 */
cljs.spec.impl.gen.simple_type_printable = ((function (g__45467__auto___47613){
return (function cljs$spec$impl$gen$simple_type_printable(var_args){
var args__45385__auto__ = [];
var len__45378__auto___47614 = arguments.length;
var i__45379__auto___47615 = (0);
while(true){
if((i__45379__auto___47615 < len__45378__auto___47614)){
args__45385__auto__.push((arguments[i__45379__auto___47615]));

var G__47616 = (i__45379__auto___47615 + (1));
i__45379__auto___47615 = G__47616;
continue;
} else {
}
break;
}

var argseq__45386__auto__ = ((((0) < args__45385__auto__.length))?(new cljs.core.IndexedSeq(args__45385__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.simple_type_printable.cljs$core$IFn$_invoke$arity$variadic(argseq__45386__auto__);
});})(g__45467__auto___47613))
;

cljs.spec.impl.gen.simple_type_printable.cljs$core$IFn$_invoke$arity$variadic = ((function (g__45467__auto___47613){
return (function (args){
return cljs.core.deref.call(null,g__45467__auto___47613);
});})(g__45467__auto___47613))
;

cljs.spec.impl.gen.simple_type_printable.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.simple_type_printable.cljs$lang$applyTo = ((function (g__45467__auto___47613){
return (function (seq47550){
return cljs.spec.impl.gen.simple_type_printable.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq47550));
});})(g__45467__auto___47613))
;


var g__45467__auto___47617 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.string !== 'undefined')){
return clojure.test.check.generators.string;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","string","clojure.test.check.generators/string",-1704750979,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","string","clojure.test.check.generators/string",-1704750979,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/string
 */
cljs.spec.impl.gen.string = ((function (g__45467__auto___47617){
return (function cljs$spec$impl$gen$string(var_args){
var args__45385__auto__ = [];
var len__45378__auto___47618 = arguments.length;
var i__45379__auto___47619 = (0);
while(true){
if((i__45379__auto___47619 < len__45378__auto___47618)){
args__45385__auto__.push((arguments[i__45379__auto___47619]));

var G__47620 = (i__45379__auto___47619 + (1));
i__45379__auto___47619 = G__47620;
continue;
} else {
}
break;
}

var argseq__45386__auto__ = ((((0) < args__45385__auto__.length))?(new cljs.core.IndexedSeq(args__45385__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.string.cljs$core$IFn$_invoke$arity$variadic(argseq__45386__auto__);
});})(g__45467__auto___47617))
;

cljs.spec.impl.gen.string.cljs$core$IFn$_invoke$arity$variadic = ((function (g__45467__auto___47617){
return (function (args){
return cljs.core.deref.call(null,g__45467__auto___47617);
});})(g__45467__auto___47617))
;

cljs.spec.impl.gen.string.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.string.cljs$lang$applyTo = ((function (g__45467__auto___47617){
return (function (seq47551){
return cljs.spec.impl.gen.string.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq47551));
});})(g__45467__auto___47617))
;


var g__45467__auto___47621 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.string_ascii !== 'undefined')){
return clojure.test.check.generators.string_ascii;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","string-ascii","clojure.test.check.generators/string-ascii",-2009877640,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","string-ascii","clojure.test.check.generators/string-ascii",-2009877640,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/string-ascii
 */
cljs.spec.impl.gen.string_ascii = ((function (g__45467__auto___47621){
return (function cljs$spec$impl$gen$string_ascii(var_args){
var args__45385__auto__ = [];
var len__45378__auto___47622 = arguments.length;
var i__45379__auto___47623 = (0);
while(true){
if((i__45379__auto___47623 < len__45378__auto___47622)){
args__45385__auto__.push((arguments[i__45379__auto___47623]));

var G__47624 = (i__45379__auto___47623 + (1));
i__45379__auto___47623 = G__47624;
continue;
} else {
}
break;
}

var argseq__45386__auto__ = ((((0) < args__45385__auto__.length))?(new cljs.core.IndexedSeq(args__45385__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.string_ascii.cljs$core$IFn$_invoke$arity$variadic(argseq__45386__auto__);
});})(g__45467__auto___47621))
;

cljs.spec.impl.gen.string_ascii.cljs$core$IFn$_invoke$arity$variadic = ((function (g__45467__auto___47621){
return (function (args){
return cljs.core.deref.call(null,g__45467__auto___47621);
});})(g__45467__auto___47621))
;

cljs.spec.impl.gen.string_ascii.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.string_ascii.cljs$lang$applyTo = ((function (g__45467__auto___47621){
return (function (seq47552){
return cljs.spec.impl.gen.string_ascii.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq47552));
});})(g__45467__auto___47621))
;


var g__45467__auto___47625 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.string_alphanumeric !== 'undefined')){
return clojure.test.check.generators.string_alphanumeric;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","string-alphanumeric","clojure.test.check.generators/string-alphanumeric",836374939,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","string-alphanumeric","clojure.test.check.generators/string-alphanumeric",836374939,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/string-alphanumeric
 */
cljs.spec.impl.gen.string_alphanumeric = ((function (g__45467__auto___47625){
return (function cljs$spec$impl$gen$string_alphanumeric(var_args){
var args__45385__auto__ = [];
var len__45378__auto___47626 = arguments.length;
var i__45379__auto___47627 = (0);
while(true){
if((i__45379__auto___47627 < len__45378__auto___47626)){
args__45385__auto__.push((arguments[i__45379__auto___47627]));

var G__47628 = (i__45379__auto___47627 + (1));
i__45379__auto___47627 = G__47628;
continue;
} else {
}
break;
}

var argseq__45386__auto__ = ((((0) < args__45385__auto__.length))?(new cljs.core.IndexedSeq(args__45385__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.string_alphanumeric.cljs$core$IFn$_invoke$arity$variadic(argseq__45386__auto__);
});})(g__45467__auto___47625))
;

cljs.spec.impl.gen.string_alphanumeric.cljs$core$IFn$_invoke$arity$variadic = ((function (g__45467__auto___47625){
return (function (args){
return cljs.core.deref.call(null,g__45467__auto___47625);
});})(g__45467__auto___47625))
;

cljs.spec.impl.gen.string_alphanumeric.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.string_alphanumeric.cljs$lang$applyTo = ((function (g__45467__auto___47625){
return (function (seq47553){
return cljs.spec.impl.gen.string_alphanumeric.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq47553));
});})(g__45467__auto___47625))
;


var g__45467__auto___47629 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.symbol !== 'undefined')){
return clojure.test.check.generators.symbol;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","symbol","clojure.test.check.generators/symbol",-1305461065,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","symbol","clojure.test.check.generators/symbol",-1305461065,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/symbol
 */
cljs.spec.impl.gen.symbol = ((function (g__45467__auto___47629){
return (function cljs$spec$impl$gen$symbol(var_args){
var args__45385__auto__ = [];
var len__45378__auto___47630 = arguments.length;
var i__45379__auto___47631 = (0);
while(true){
if((i__45379__auto___47631 < len__45378__auto___47630)){
args__45385__auto__.push((arguments[i__45379__auto___47631]));

var G__47632 = (i__45379__auto___47631 + (1));
i__45379__auto___47631 = G__47632;
continue;
} else {
}
break;
}

var argseq__45386__auto__ = ((((0) < args__45385__auto__.length))?(new cljs.core.IndexedSeq(args__45385__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.symbol.cljs$core$IFn$_invoke$arity$variadic(argseq__45386__auto__);
});})(g__45467__auto___47629))
;

cljs.spec.impl.gen.symbol.cljs$core$IFn$_invoke$arity$variadic = ((function (g__45467__auto___47629){
return (function (args){
return cljs.core.deref.call(null,g__45467__auto___47629);
});})(g__45467__auto___47629))
;

cljs.spec.impl.gen.symbol.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.symbol.cljs$lang$applyTo = ((function (g__45467__auto___47629){
return (function (seq47554){
return cljs.spec.impl.gen.symbol.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq47554));
});})(g__45467__auto___47629))
;


var g__45467__auto___47633 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.symbol_ns !== 'undefined')){
return clojure.test.check.generators.symbol_ns;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","symbol-ns","clojure.test.check.generators/symbol-ns",-862629490,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","symbol-ns","clojure.test.check.generators/symbol-ns",-862629490,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/symbol-ns
 */
cljs.spec.impl.gen.symbol_ns = ((function (g__45467__auto___47633){
return (function cljs$spec$impl$gen$symbol_ns(var_args){
var args__45385__auto__ = [];
var len__45378__auto___47634 = arguments.length;
var i__45379__auto___47635 = (0);
while(true){
if((i__45379__auto___47635 < len__45378__auto___47634)){
args__45385__auto__.push((arguments[i__45379__auto___47635]));

var G__47636 = (i__45379__auto___47635 + (1));
i__45379__auto___47635 = G__47636;
continue;
} else {
}
break;
}

var argseq__45386__auto__ = ((((0) < args__45385__auto__.length))?(new cljs.core.IndexedSeq(args__45385__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.symbol_ns.cljs$core$IFn$_invoke$arity$variadic(argseq__45386__auto__);
});})(g__45467__auto___47633))
;

cljs.spec.impl.gen.symbol_ns.cljs$core$IFn$_invoke$arity$variadic = ((function (g__45467__auto___47633){
return (function (args){
return cljs.core.deref.call(null,g__45467__auto___47633);
});})(g__45467__auto___47633))
;

cljs.spec.impl.gen.symbol_ns.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.symbol_ns.cljs$lang$applyTo = ((function (g__45467__auto___47633){
return (function (seq47555){
return cljs.spec.impl.gen.symbol_ns.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq47555));
});})(g__45467__auto___47633))
;


var g__45467__auto___47637 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.uuid !== 'undefined')){
return clojure.test.check.generators.uuid;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","uuid","clojure.test.check.generators/uuid",1589373144,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","uuid","clojure.test.check.generators/uuid",1589373144,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/uuid
 */
cljs.spec.impl.gen.uuid = ((function (g__45467__auto___47637){
return (function cljs$spec$impl$gen$uuid(var_args){
var args__45385__auto__ = [];
var len__45378__auto___47638 = arguments.length;
var i__45379__auto___47639 = (0);
while(true){
if((i__45379__auto___47639 < len__45378__auto___47638)){
args__45385__auto__.push((arguments[i__45379__auto___47639]));

var G__47640 = (i__45379__auto___47639 + (1));
i__45379__auto___47639 = G__47640;
continue;
} else {
}
break;
}

var argseq__45386__auto__ = ((((0) < args__45385__auto__.length))?(new cljs.core.IndexedSeq(args__45385__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.uuid.cljs$core$IFn$_invoke$arity$variadic(argseq__45386__auto__);
});})(g__45467__auto___47637))
;

cljs.spec.impl.gen.uuid.cljs$core$IFn$_invoke$arity$variadic = ((function (g__45467__auto___47637){
return (function (args){
return cljs.core.deref.call(null,g__45467__auto___47637);
});})(g__45467__auto___47637))
;

cljs.spec.impl.gen.uuid.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.uuid.cljs$lang$applyTo = ((function (g__45467__auto___47637){
return (function (seq47556){
return cljs.spec.impl.gen.uuid.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq47556));
});})(g__45467__auto___47637))
;

/**
 * Returns a generator of a sequence catenated from results of
 * gens, each of which should generate something sequential.
 */
cljs.spec.impl.gen.cat = (function cljs$spec$impl$gen$cat(var_args){
var args__45385__auto__ = [];
var len__45378__auto___47643 = arguments.length;
var i__45379__auto___47644 = (0);
while(true){
if((i__45379__auto___47644 < len__45378__auto___47643)){
args__45385__auto__.push((arguments[i__45379__auto___47644]));

var G__47645 = (i__45379__auto___47644 + (1));
i__45379__auto___47644 = G__47645;
continue;
} else {
}
break;
}

var argseq__45386__auto__ = ((((0) < args__45385__auto__.length))?(new cljs.core.IndexedSeq(args__45385__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.cat.cljs$core$IFn$_invoke$arity$variadic(argseq__45386__auto__);
});

cljs.spec.impl.gen.cat.cljs$core$IFn$_invoke$arity$variadic = (function (gens){
return cljs.spec.impl.gen.fmap.call(null,(function (p1__47641_SHARP_){
return cljs.core.apply.call(null,cljs.core.concat,p1__47641_SHARP_);
}),cljs.core.apply.call(null,cljs.spec.impl.gen.tuple,gens));
});

cljs.spec.impl.gen.cat.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.cat.cljs$lang$applyTo = (function (seq47642){
return cljs.spec.impl.gen.cat.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq47642));
});

cljs.spec.impl.gen.qualified_QMARK_ = (function cljs$spec$impl$gen$qualified_QMARK_(ident){
return !((cljs.core.namespace.call(null,ident) == null));
});
cljs.spec.impl.gen.gen_builtins = (new cljs.core.Delay((function (){
var simple = cljs.spec.impl.gen.simple_type_printable.call(null);
return cljs.core.PersistentHashMap.fromArrays([cljs.core.qualified_keyword_QMARK_,cljs.core.seq_QMARK_,cljs.core.vector_QMARK_,cljs.core.any_QMARK_,cljs.core.boolean_QMARK_,cljs.core.char_QMARK_,cljs.core.inst_QMARK_,cljs.core.simple_symbol_QMARK_,cljs.core.sequential_QMARK_,cljs.core.set_QMARK_,cljs.core.map_QMARK_,cljs.core.empty_QMARK_,cljs.core.string_QMARK_,cljs.core.int_QMARK_,cljs.core.associative_QMARK_,cljs.core.keyword_QMARK_,cljs.core.indexed_QMARK_,cljs.core.zero_QMARK_,cljs.core.simple_keyword_QMARK_,cljs.core.neg_int_QMARK_,cljs.core.nil_QMARK_,cljs.core.ident_QMARK_,cljs.core.qualified_ident_QMARK_,cljs.core.true_QMARK_,cljs.core.integer_QMARK_,cljs.core.nat_int_QMARK_,cljs.core.pos_int_QMARK_,cljs.core.uuid_QMARK_,cljs.core.false_QMARK_,cljs.core.list_QMARK_,cljs.core.simple_ident_QMARK_,cljs.core.number_QMARK_,cljs.core.qualified_symbol_QMARK_,cljs.core.seqable_QMARK_,cljs.core.symbol_QMARK_,cljs.core.coll_QMARK_],[cljs.spec.impl.gen.such_that.call(null,cljs.spec.impl.gen.qualified_QMARK_,cljs.spec.impl.gen.keyword_ns.call(null)),cljs.spec.impl.gen.list.call(null,simple),cljs.spec.impl.gen.vector.call(null,simple),cljs.spec.impl.gen.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.impl.gen.return$.call(null,null),cljs.spec.impl.gen.any_printable.call(null)], null)),cljs.spec.impl.gen.boolean$.call(null),cljs.spec.impl.gen.char$.call(null),cljs.spec.impl.gen.fmap.call(null,((function (simple){
return (function (p1__47646_SHARP_){
return (new Date(p1__47646_SHARP_));
});})(simple))
,cljs.spec.impl.gen.large_integer.call(null)),cljs.spec.impl.gen.symbol.call(null),cljs.spec.impl.gen.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.impl.gen.list.call(null,simple),cljs.spec.impl.gen.vector.call(null,simple)], null)),cljs.spec.impl.gen.set.call(null,simple),cljs.spec.impl.gen.map.call(null,simple,simple),cljs.spec.impl.gen.elements.call(null,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,cljs.core.List.EMPTY,cljs.core.PersistentVector.EMPTY,cljs.core.PersistentArrayMap.EMPTY,cljs.core.PersistentHashSet.EMPTY], null)),cljs.spec.impl.gen.string_alphanumeric.call(null),cljs.spec.impl.gen.large_integer.call(null),cljs.spec.impl.gen.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.impl.gen.map.call(null,simple,simple),cljs.spec.impl.gen.vector.call(null,simple)], null)),cljs.spec.impl.gen.keyword_ns.call(null),cljs.spec.impl.gen.vector.call(null,simple),cljs.spec.impl.gen.return$.call(null,(0)),cljs.spec.impl.gen.keyword.call(null),cljs.spec.impl.gen.large_integer_STAR_.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"max","max",61366548),(-1)], null)),cljs.spec.impl.gen.return$.call(null,null),cljs.spec.impl.gen.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.impl.gen.keyword_ns.call(null),cljs.spec.impl.gen.symbol_ns.call(null)], null)),cljs.spec.impl.gen.such_that.call(null,cljs.spec.impl.gen.qualified_QMARK_,cljs.spec.impl.gen.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.impl.gen.keyword_ns.call(null),cljs.spec.impl.gen.symbol_ns.call(null)], null))),cljs.spec.impl.gen.return$.call(null,true),cljs.spec.impl.gen.large_integer.call(null),cljs.spec.impl.gen.large_integer_STAR_.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"min","min",444991522),(0)], null)),cljs.spec.impl.gen.large_integer_STAR_.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"min","min",444991522),(1)], null)),cljs.spec.impl.gen.uuid.call(null),cljs.spec.impl.gen.return$.call(null,false),cljs.spec.impl.gen.list.call(null,simple),cljs.spec.impl.gen.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.impl.gen.keyword.call(null),cljs.spec.impl.gen.symbol.call(null)], null)),cljs.spec.impl.gen.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.impl.gen.large_integer.call(null),cljs.spec.impl.gen.double$.call(null)], null)),cljs.spec.impl.gen.such_that.call(null,cljs.spec.impl.gen.qualified_QMARK_,cljs.spec.impl.gen.symbol_ns.call(null)),cljs.spec.impl.gen.one_of.call(null,new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.impl.gen.return$.call(null,null),cljs.spec.impl.gen.list.call(null,simple),cljs.spec.impl.gen.vector.call(null,simple),cljs.spec.impl.gen.map.call(null,simple,simple),cljs.spec.impl.gen.set.call(null,simple),cljs.spec.impl.gen.string_alphanumeric.call(null)], null)),cljs.spec.impl.gen.symbol_ns.call(null),cljs.spec.impl.gen.one_of.call(null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.impl.gen.map.call(null,simple,simple),cljs.spec.impl.gen.list.call(null,simple),cljs.spec.impl.gen.vector.call(null,simple),cljs.spec.impl.gen.set.call(null,simple)], null))]);
}),null));
/**
 * Given a predicate, returns a built-in generator if one exists.
 */
cljs.spec.impl.gen.gen_for_pred = (function cljs$spec$impl$gen$gen_for_pred(pred){
if(cljs.core.set_QMARK_.call(null,pred)){
return cljs.spec.impl.gen.elements.call(null,pred);
} else {
return cljs.core.get.call(null,cljs.core.deref.call(null,cljs.spec.impl.gen.gen_builtins),pred);
}
});

//# sourceMappingURL=gen.js.map