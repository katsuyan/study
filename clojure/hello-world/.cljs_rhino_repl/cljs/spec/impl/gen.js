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

cljs.spec.impl.gen.LazyVar.cljs$lang$ctorPrWriter = (function (this__7593__auto__,writer__7594__auto__,opt__7595__auto__){
return cljs.core._write.call(null,writer__7594__auto__,"cljs.spec.impl.gen/LazyVar");
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
var args__8069__auto__ = [];
var len__8062__auto___12789 = arguments.length;
var i__8063__auto___12790 = (0);
while(true){
if((i__8063__auto___12790 < len__8062__auto___12789)){
args__8069__auto__.push((arguments[i__8063__auto___12790]));

var G__12791 = (i__8063__auto___12790 + (1));
i__8063__auto___12790 = G__12791;
continue;
} else {
}
break;
}

var argseq__8070__auto__ = ((((0) < args__8069__auto__.length))?(new cljs.core.IndexedSeq(args__8069__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.quick_check.cljs$core$IFn$_invoke$arity$variadic(argseq__8070__auto__);
});

cljs.spec.impl.gen.quick_check.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,cljs.spec.impl.gen.quick_check_ref),args);
});

cljs.spec.impl.gen.quick_check.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.quick_check.cljs$lang$applyTo = (function (seq12788){
return cljs.spec.impl.gen.quick_check.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq12788));
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
var args__8069__auto__ = [];
var len__8062__auto___12793 = arguments.length;
var i__8063__auto___12794 = (0);
while(true){
if((i__8063__auto___12794 < len__8062__auto___12793)){
args__8069__auto__.push((arguments[i__8063__auto___12794]));

var G__12795 = (i__8063__auto___12794 + (1));
i__8063__auto___12794 = G__12795;
continue;
} else {
}
break;
}

var argseq__8070__auto__ = ((((0) < args__8069__auto__.length))?(new cljs.core.IndexedSeq(args__8069__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.for_all_STAR_.cljs$core$IFn$_invoke$arity$variadic(argseq__8070__auto__);
});

cljs.spec.impl.gen.for_all_STAR_.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,cljs.spec.impl.gen.for_all_STAR__ref),args);
});

cljs.spec.impl.gen.for_all_STAR_.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.for_all_STAR_.cljs$lang$applyTo = (function (seq12792){
return cljs.spec.impl.gen.for_all_STAR_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq12792));
});

var g_QMARK__12796 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.generator_QMARK_ !== 'undefined')){
return clojure.test.check.generators.generator_QMARK_;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","generator?","clojure.test.check.generators/generator?",-1378210460,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","generator?","clojure.test.check.generators/generator?",-1378210460,null))),cljs.core.str(" never required")].join('')));
}
}),null));
var g_12797 = (new cljs.spec.impl.gen.LazyVar(((function (g_QMARK__12796){
return (function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.generate !== 'undefined')){
return clojure.test.check.generators.generate;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","generate","clojure.test.check.generators/generate",-690390711,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","generate","clojure.test.check.generators/generate",-690390711,null))),cljs.core.str(" never required")].join('')));
}
});})(g_QMARK__12796))
,null));
var mkg_12798 = (new cljs.spec.impl.gen.LazyVar(((function (g_QMARK__12796,g_12797){
return (function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.__GT_Generator !== 'undefined')){
return clojure.test.check.generators.__GT_Generator;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","->Generator","clojure.test.check.generators/->Generator",-1179475051,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","->Generator","clojure.test.check.generators/->Generator",-1179475051,null))),cljs.core.str(" never required")].join('')));
}
});})(g_QMARK__12796,g_12797))
,null));
cljs.spec.impl.gen.generator_QMARK_ = ((function (g_QMARK__12796,g_12797,mkg_12798){
return (function cljs$spec$impl$gen$generator_QMARK_(x){
return cljs.core.deref.call(null,g_QMARK__12796).call(null,x);
});})(g_QMARK__12796,g_12797,mkg_12798))
;

cljs.spec.impl.gen.generator = ((function (g_QMARK__12796,g_12797,mkg_12798){
return (function cljs$spec$impl$gen$generator(gfn){
return cljs.core.deref.call(null,mkg_12798).call(null,gfn);
});})(g_QMARK__12796,g_12797,mkg_12798))
;

/**
 * Generate a single value using generator.
 */
cljs.spec.impl.gen.generate = ((function (g_QMARK__12796,g_12797,mkg_12798){
return (function cljs$spec$impl$gen$generate(generator){
return cljs.core.deref.call(null,g_12797).call(null,generator);
});})(g_QMARK__12796,g_12797,mkg_12798))
;
cljs.spec.impl.gen.delay_impl = (function cljs$spec$impl$gen$delay_impl(gfnd){
return cljs.spec.impl.gen.generator.call(null,(function (rnd,size){
return new cljs.core.Keyword(null,"gen","gen",142575302).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,gfnd)).call(null,rnd,size);
}));
});
var g__9333__auto___12817 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.hash_map !== 'undefined')){
return clojure.test.check.generators.hash_map;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","hash-map","clojure.test.check.generators/hash-map",1961346626,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","hash-map","clojure.test.check.generators/hash-map",1961346626,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/hash-map
 */
cljs.spec.impl.gen.hash_map = ((function (g__9333__auto___12817){
return (function cljs$spec$impl$gen$hash_map(var_args){
var args__8069__auto__ = [];
var len__8062__auto___12818 = arguments.length;
var i__8063__auto___12819 = (0);
while(true){
if((i__8063__auto___12819 < len__8062__auto___12818)){
args__8069__auto__.push((arguments[i__8063__auto___12819]));

var G__12820 = (i__8063__auto___12819 + (1));
i__8063__auto___12819 = G__12820;
continue;
} else {
}
break;
}

var argseq__8070__auto__ = ((((0) < args__8069__auto__.length))?(new cljs.core.IndexedSeq(args__8069__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.hash_map.cljs$core$IFn$_invoke$arity$variadic(argseq__8070__auto__);
});})(g__9333__auto___12817))
;

cljs.spec.impl.gen.hash_map.cljs$core$IFn$_invoke$arity$variadic = ((function (g__9333__auto___12817){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__9333__auto___12817),args);
});})(g__9333__auto___12817))
;

cljs.spec.impl.gen.hash_map.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.hash_map.cljs$lang$applyTo = ((function (g__9333__auto___12817){
return (function (seq12799){
return cljs.spec.impl.gen.hash_map.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq12799));
});})(g__9333__auto___12817))
;


var g__9333__auto___12821 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.list !== 'undefined')){
return clojure.test.check.generators.list;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","list","clojure.test.check.generators/list",506971058,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","list","clojure.test.check.generators/list",506971058,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/list
 */
cljs.spec.impl.gen.list = ((function (g__9333__auto___12821){
return (function cljs$spec$impl$gen$list(var_args){
var args__8069__auto__ = [];
var len__8062__auto___12822 = arguments.length;
var i__8063__auto___12823 = (0);
while(true){
if((i__8063__auto___12823 < len__8062__auto___12822)){
args__8069__auto__.push((arguments[i__8063__auto___12823]));

var G__12824 = (i__8063__auto___12823 + (1));
i__8063__auto___12823 = G__12824;
continue;
} else {
}
break;
}

var argseq__8070__auto__ = ((((0) < args__8069__auto__.length))?(new cljs.core.IndexedSeq(args__8069__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.list.cljs$core$IFn$_invoke$arity$variadic(argseq__8070__auto__);
});})(g__9333__auto___12821))
;

cljs.spec.impl.gen.list.cljs$core$IFn$_invoke$arity$variadic = ((function (g__9333__auto___12821){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__9333__auto___12821),args);
});})(g__9333__auto___12821))
;

cljs.spec.impl.gen.list.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.list.cljs$lang$applyTo = ((function (g__9333__auto___12821){
return (function (seq12800){
return cljs.spec.impl.gen.list.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq12800));
});})(g__9333__auto___12821))
;


var g__9333__auto___12825 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.map !== 'undefined')){
return clojure.test.check.generators.map;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","map","clojure.test.check.generators/map",45738796,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","map","clojure.test.check.generators/map",45738796,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/map
 */
cljs.spec.impl.gen.map = ((function (g__9333__auto___12825){
return (function cljs$spec$impl$gen$map(var_args){
var args__8069__auto__ = [];
var len__8062__auto___12826 = arguments.length;
var i__8063__auto___12827 = (0);
while(true){
if((i__8063__auto___12827 < len__8062__auto___12826)){
args__8069__auto__.push((arguments[i__8063__auto___12827]));

var G__12828 = (i__8063__auto___12827 + (1));
i__8063__auto___12827 = G__12828;
continue;
} else {
}
break;
}

var argseq__8070__auto__ = ((((0) < args__8069__auto__.length))?(new cljs.core.IndexedSeq(args__8069__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.map.cljs$core$IFn$_invoke$arity$variadic(argseq__8070__auto__);
});})(g__9333__auto___12825))
;

cljs.spec.impl.gen.map.cljs$core$IFn$_invoke$arity$variadic = ((function (g__9333__auto___12825){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__9333__auto___12825),args);
});})(g__9333__auto___12825))
;

cljs.spec.impl.gen.map.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.map.cljs$lang$applyTo = ((function (g__9333__auto___12825){
return (function (seq12801){
return cljs.spec.impl.gen.map.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq12801));
});})(g__9333__auto___12825))
;


var g__9333__auto___12829 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.not_empty !== 'undefined')){
return clojure.test.check.generators.not_empty;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","not-empty","clojure.test.check.generators/not-empty",-876211682,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","not-empty","clojure.test.check.generators/not-empty",-876211682,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/not-empty
 */
cljs.spec.impl.gen.not_empty = ((function (g__9333__auto___12829){
return (function cljs$spec$impl$gen$not_empty(var_args){
var args__8069__auto__ = [];
var len__8062__auto___12830 = arguments.length;
var i__8063__auto___12831 = (0);
while(true){
if((i__8063__auto___12831 < len__8062__auto___12830)){
args__8069__auto__.push((arguments[i__8063__auto___12831]));

var G__12832 = (i__8063__auto___12831 + (1));
i__8063__auto___12831 = G__12832;
continue;
} else {
}
break;
}

var argseq__8070__auto__ = ((((0) < args__8069__auto__.length))?(new cljs.core.IndexedSeq(args__8069__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.not_empty.cljs$core$IFn$_invoke$arity$variadic(argseq__8070__auto__);
});})(g__9333__auto___12829))
;

cljs.spec.impl.gen.not_empty.cljs$core$IFn$_invoke$arity$variadic = ((function (g__9333__auto___12829){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__9333__auto___12829),args);
});})(g__9333__auto___12829))
;

cljs.spec.impl.gen.not_empty.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.not_empty.cljs$lang$applyTo = ((function (g__9333__auto___12829){
return (function (seq12802){
return cljs.spec.impl.gen.not_empty.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq12802));
});})(g__9333__auto___12829))
;


var g__9333__auto___12833 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.set !== 'undefined')){
return clojure.test.check.generators.set;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","set","clojure.test.check.generators/set",-1027639543,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","set","clojure.test.check.generators/set",-1027639543,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/set
 */
cljs.spec.impl.gen.set = ((function (g__9333__auto___12833){
return (function cljs$spec$impl$gen$set(var_args){
var args__8069__auto__ = [];
var len__8062__auto___12834 = arguments.length;
var i__8063__auto___12835 = (0);
while(true){
if((i__8063__auto___12835 < len__8062__auto___12834)){
args__8069__auto__.push((arguments[i__8063__auto___12835]));

var G__12836 = (i__8063__auto___12835 + (1));
i__8063__auto___12835 = G__12836;
continue;
} else {
}
break;
}

var argseq__8070__auto__ = ((((0) < args__8069__auto__.length))?(new cljs.core.IndexedSeq(args__8069__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.set.cljs$core$IFn$_invoke$arity$variadic(argseq__8070__auto__);
});})(g__9333__auto___12833))
;

cljs.spec.impl.gen.set.cljs$core$IFn$_invoke$arity$variadic = ((function (g__9333__auto___12833){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__9333__auto___12833),args);
});})(g__9333__auto___12833))
;

cljs.spec.impl.gen.set.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.set.cljs$lang$applyTo = ((function (g__9333__auto___12833){
return (function (seq12803){
return cljs.spec.impl.gen.set.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq12803));
});})(g__9333__auto___12833))
;


var g__9333__auto___12837 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.vector !== 'undefined')){
return clojure.test.check.generators.vector;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","vector","clojure.test.check.generators/vector",1081775325,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","vector","clojure.test.check.generators/vector",1081775325,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/vector
 */
cljs.spec.impl.gen.vector = ((function (g__9333__auto___12837){
return (function cljs$spec$impl$gen$vector(var_args){
var args__8069__auto__ = [];
var len__8062__auto___12838 = arguments.length;
var i__8063__auto___12839 = (0);
while(true){
if((i__8063__auto___12839 < len__8062__auto___12838)){
args__8069__auto__.push((arguments[i__8063__auto___12839]));

var G__12840 = (i__8063__auto___12839 + (1));
i__8063__auto___12839 = G__12840;
continue;
} else {
}
break;
}

var argseq__8070__auto__ = ((((0) < args__8069__auto__.length))?(new cljs.core.IndexedSeq(args__8069__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.vector.cljs$core$IFn$_invoke$arity$variadic(argseq__8070__auto__);
});})(g__9333__auto___12837))
;

cljs.spec.impl.gen.vector.cljs$core$IFn$_invoke$arity$variadic = ((function (g__9333__auto___12837){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__9333__auto___12837),args);
});})(g__9333__auto___12837))
;

cljs.spec.impl.gen.vector.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.vector.cljs$lang$applyTo = ((function (g__9333__auto___12837){
return (function (seq12804){
return cljs.spec.impl.gen.vector.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq12804));
});})(g__9333__auto___12837))
;


var g__9333__auto___12841 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.vector_distinct !== 'undefined')){
return clojure.test.check.generators.vector_distinct;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","vector-distinct","clojure.test.check.generators/vector-distinct",1656877834,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","vector-distinct","clojure.test.check.generators/vector-distinct",1656877834,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/vector-distinct
 */
cljs.spec.impl.gen.vector_distinct = ((function (g__9333__auto___12841){
return (function cljs$spec$impl$gen$vector_distinct(var_args){
var args__8069__auto__ = [];
var len__8062__auto___12842 = arguments.length;
var i__8063__auto___12843 = (0);
while(true){
if((i__8063__auto___12843 < len__8062__auto___12842)){
args__8069__auto__.push((arguments[i__8063__auto___12843]));

var G__12844 = (i__8063__auto___12843 + (1));
i__8063__auto___12843 = G__12844;
continue;
} else {
}
break;
}

var argseq__8070__auto__ = ((((0) < args__8069__auto__.length))?(new cljs.core.IndexedSeq(args__8069__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.vector_distinct.cljs$core$IFn$_invoke$arity$variadic(argseq__8070__auto__);
});})(g__9333__auto___12841))
;

cljs.spec.impl.gen.vector_distinct.cljs$core$IFn$_invoke$arity$variadic = ((function (g__9333__auto___12841){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__9333__auto___12841),args);
});})(g__9333__auto___12841))
;

cljs.spec.impl.gen.vector_distinct.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.vector_distinct.cljs$lang$applyTo = ((function (g__9333__auto___12841){
return (function (seq12805){
return cljs.spec.impl.gen.vector_distinct.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq12805));
});})(g__9333__auto___12841))
;


var g__9333__auto___12845 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.fmap !== 'undefined')){
return clojure.test.check.generators.fmap;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","fmap","clojure.test.check.generators/fmap",1957997092,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","fmap","clojure.test.check.generators/fmap",1957997092,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/fmap
 */
cljs.spec.impl.gen.fmap = ((function (g__9333__auto___12845){
return (function cljs$spec$impl$gen$fmap(var_args){
var args__8069__auto__ = [];
var len__8062__auto___12846 = arguments.length;
var i__8063__auto___12847 = (0);
while(true){
if((i__8063__auto___12847 < len__8062__auto___12846)){
args__8069__auto__.push((arguments[i__8063__auto___12847]));

var G__12848 = (i__8063__auto___12847 + (1));
i__8063__auto___12847 = G__12848;
continue;
} else {
}
break;
}

var argseq__8070__auto__ = ((((0) < args__8069__auto__.length))?(new cljs.core.IndexedSeq(args__8069__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.fmap.cljs$core$IFn$_invoke$arity$variadic(argseq__8070__auto__);
});})(g__9333__auto___12845))
;

cljs.spec.impl.gen.fmap.cljs$core$IFn$_invoke$arity$variadic = ((function (g__9333__auto___12845){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__9333__auto___12845),args);
});})(g__9333__auto___12845))
;

cljs.spec.impl.gen.fmap.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.fmap.cljs$lang$applyTo = ((function (g__9333__auto___12845){
return (function (seq12806){
return cljs.spec.impl.gen.fmap.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq12806));
});})(g__9333__auto___12845))
;


var g__9333__auto___12849 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.elements !== 'undefined')){
return clojure.test.check.generators.elements;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","elements","clojure.test.check.generators/elements",438991326,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","elements","clojure.test.check.generators/elements",438991326,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/elements
 */
cljs.spec.impl.gen.elements = ((function (g__9333__auto___12849){
return (function cljs$spec$impl$gen$elements(var_args){
var args__8069__auto__ = [];
var len__8062__auto___12850 = arguments.length;
var i__8063__auto___12851 = (0);
while(true){
if((i__8063__auto___12851 < len__8062__auto___12850)){
args__8069__auto__.push((arguments[i__8063__auto___12851]));

var G__12852 = (i__8063__auto___12851 + (1));
i__8063__auto___12851 = G__12852;
continue;
} else {
}
break;
}

var argseq__8070__auto__ = ((((0) < args__8069__auto__.length))?(new cljs.core.IndexedSeq(args__8069__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.elements.cljs$core$IFn$_invoke$arity$variadic(argseq__8070__auto__);
});})(g__9333__auto___12849))
;

cljs.spec.impl.gen.elements.cljs$core$IFn$_invoke$arity$variadic = ((function (g__9333__auto___12849){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__9333__auto___12849),args);
});})(g__9333__auto___12849))
;

cljs.spec.impl.gen.elements.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.elements.cljs$lang$applyTo = ((function (g__9333__auto___12849){
return (function (seq12807){
return cljs.spec.impl.gen.elements.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq12807));
});})(g__9333__auto___12849))
;


var g__9333__auto___12853 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.bind !== 'undefined')){
return clojure.test.check.generators.bind;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","bind","clojure.test.check.generators/bind",-361313906,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","bind","clojure.test.check.generators/bind",-361313906,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/bind
 */
cljs.spec.impl.gen.bind = ((function (g__9333__auto___12853){
return (function cljs$spec$impl$gen$bind(var_args){
var args__8069__auto__ = [];
var len__8062__auto___12854 = arguments.length;
var i__8063__auto___12855 = (0);
while(true){
if((i__8063__auto___12855 < len__8062__auto___12854)){
args__8069__auto__.push((arguments[i__8063__auto___12855]));

var G__12856 = (i__8063__auto___12855 + (1));
i__8063__auto___12855 = G__12856;
continue;
} else {
}
break;
}

var argseq__8070__auto__ = ((((0) < args__8069__auto__.length))?(new cljs.core.IndexedSeq(args__8069__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.bind.cljs$core$IFn$_invoke$arity$variadic(argseq__8070__auto__);
});})(g__9333__auto___12853))
;

cljs.spec.impl.gen.bind.cljs$core$IFn$_invoke$arity$variadic = ((function (g__9333__auto___12853){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__9333__auto___12853),args);
});})(g__9333__auto___12853))
;

cljs.spec.impl.gen.bind.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.bind.cljs$lang$applyTo = ((function (g__9333__auto___12853){
return (function (seq12808){
return cljs.spec.impl.gen.bind.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq12808));
});})(g__9333__auto___12853))
;


var g__9333__auto___12857 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.choose !== 'undefined')){
return clojure.test.check.generators.choose;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","choose","clojure.test.check.generators/choose",909997832,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","choose","clojure.test.check.generators/choose",909997832,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/choose
 */
cljs.spec.impl.gen.choose = ((function (g__9333__auto___12857){
return (function cljs$spec$impl$gen$choose(var_args){
var args__8069__auto__ = [];
var len__8062__auto___12858 = arguments.length;
var i__8063__auto___12859 = (0);
while(true){
if((i__8063__auto___12859 < len__8062__auto___12858)){
args__8069__auto__.push((arguments[i__8063__auto___12859]));

var G__12860 = (i__8063__auto___12859 + (1));
i__8063__auto___12859 = G__12860;
continue;
} else {
}
break;
}

var argseq__8070__auto__ = ((((0) < args__8069__auto__.length))?(new cljs.core.IndexedSeq(args__8069__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.choose.cljs$core$IFn$_invoke$arity$variadic(argseq__8070__auto__);
});})(g__9333__auto___12857))
;

cljs.spec.impl.gen.choose.cljs$core$IFn$_invoke$arity$variadic = ((function (g__9333__auto___12857){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__9333__auto___12857),args);
});})(g__9333__auto___12857))
;

cljs.spec.impl.gen.choose.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.choose.cljs$lang$applyTo = ((function (g__9333__auto___12857){
return (function (seq12809){
return cljs.spec.impl.gen.choose.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq12809));
});})(g__9333__auto___12857))
;


var g__9333__auto___12861 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.one_of !== 'undefined')){
return clojure.test.check.generators.one_of;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","one-of","clojure.test.check.generators/one-of",-183339191,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","one-of","clojure.test.check.generators/one-of",-183339191,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/one-of
 */
cljs.spec.impl.gen.one_of = ((function (g__9333__auto___12861){
return (function cljs$spec$impl$gen$one_of(var_args){
var args__8069__auto__ = [];
var len__8062__auto___12862 = arguments.length;
var i__8063__auto___12863 = (0);
while(true){
if((i__8063__auto___12863 < len__8062__auto___12862)){
args__8069__auto__.push((arguments[i__8063__auto___12863]));

var G__12864 = (i__8063__auto___12863 + (1));
i__8063__auto___12863 = G__12864;
continue;
} else {
}
break;
}

var argseq__8070__auto__ = ((((0) < args__8069__auto__.length))?(new cljs.core.IndexedSeq(args__8069__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.one_of.cljs$core$IFn$_invoke$arity$variadic(argseq__8070__auto__);
});})(g__9333__auto___12861))
;

cljs.spec.impl.gen.one_of.cljs$core$IFn$_invoke$arity$variadic = ((function (g__9333__auto___12861){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__9333__auto___12861),args);
});})(g__9333__auto___12861))
;

cljs.spec.impl.gen.one_of.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.one_of.cljs$lang$applyTo = ((function (g__9333__auto___12861){
return (function (seq12810){
return cljs.spec.impl.gen.one_of.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq12810));
});})(g__9333__auto___12861))
;


var g__9333__auto___12865 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.such_that !== 'undefined')){
return clojure.test.check.generators.such_that;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","such-that","clojure.test.check.generators/such-that",-1754178732,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","such-that","clojure.test.check.generators/such-that",-1754178732,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/such-that
 */
cljs.spec.impl.gen.such_that = ((function (g__9333__auto___12865){
return (function cljs$spec$impl$gen$such_that(var_args){
var args__8069__auto__ = [];
var len__8062__auto___12866 = arguments.length;
var i__8063__auto___12867 = (0);
while(true){
if((i__8063__auto___12867 < len__8062__auto___12866)){
args__8069__auto__.push((arguments[i__8063__auto___12867]));

var G__12868 = (i__8063__auto___12867 + (1));
i__8063__auto___12867 = G__12868;
continue;
} else {
}
break;
}

var argseq__8070__auto__ = ((((0) < args__8069__auto__.length))?(new cljs.core.IndexedSeq(args__8069__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.such_that.cljs$core$IFn$_invoke$arity$variadic(argseq__8070__auto__);
});})(g__9333__auto___12865))
;

cljs.spec.impl.gen.such_that.cljs$core$IFn$_invoke$arity$variadic = ((function (g__9333__auto___12865){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__9333__auto___12865),args);
});})(g__9333__auto___12865))
;

cljs.spec.impl.gen.such_that.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.such_that.cljs$lang$applyTo = ((function (g__9333__auto___12865){
return (function (seq12811){
return cljs.spec.impl.gen.such_that.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq12811));
});})(g__9333__auto___12865))
;


var g__9333__auto___12869 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.tuple !== 'undefined')){
return clojure.test.check.generators.tuple;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","tuple","clojure.test.check.generators/tuple",-143711557,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","tuple","clojure.test.check.generators/tuple",-143711557,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/tuple
 */
cljs.spec.impl.gen.tuple = ((function (g__9333__auto___12869){
return (function cljs$spec$impl$gen$tuple(var_args){
var args__8069__auto__ = [];
var len__8062__auto___12870 = arguments.length;
var i__8063__auto___12871 = (0);
while(true){
if((i__8063__auto___12871 < len__8062__auto___12870)){
args__8069__auto__.push((arguments[i__8063__auto___12871]));

var G__12872 = (i__8063__auto___12871 + (1));
i__8063__auto___12871 = G__12872;
continue;
} else {
}
break;
}

var argseq__8070__auto__ = ((((0) < args__8069__auto__.length))?(new cljs.core.IndexedSeq(args__8069__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.tuple.cljs$core$IFn$_invoke$arity$variadic(argseq__8070__auto__);
});})(g__9333__auto___12869))
;

cljs.spec.impl.gen.tuple.cljs$core$IFn$_invoke$arity$variadic = ((function (g__9333__auto___12869){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__9333__auto___12869),args);
});})(g__9333__auto___12869))
;

cljs.spec.impl.gen.tuple.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.tuple.cljs$lang$applyTo = ((function (g__9333__auto___12869){
return (function (seq12812){
return cljs.spec.impl.gen.tuple.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq12812));
});})(g__9333__auto___12869))
;


var g__9333__auto___12873 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.sample !== 'undefined')){
return clojure.test.check.generators.sample;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","sample","clojure.test.check.generators/sample",-382944992,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","sample","clojure.test.check.generators/sample",-382944992,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/sample
 */
cljs.spec.impl.gen.sample = ((function (g__9333__auto___12873){
return (function cljs$spec$impl$gen$sample(var_args){
var args__8069__auto__ = [];
var len__8062__auto___12874 = arguments.length;
var i__8063__auto___12875 = (0);
while(true){
if((i__8063__auto___12875 < len__8062__auto___12874)){
args__8069__auto__.push((arguments[i__8063__auto___12875]));

var G__12876 = (i__8063__auto___12875 + (1));
i__8063__auto___12875 = G__12876;
continue;
} else {
}
break;
}

var argseq__8070__auto__ = ((((0) < args__8069__auto__.length))?(new cljs.core.IndexedSeq(args__8069__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.sample.cljs$core$IFn$_invoke$arity$variadic(argseq__8070__auto__);
});})(g__9333__auto___12873))
;

cljs.spec.impl.gen.sample.cljs$core$IFn$_invoke$arity$variadic = ((function (g__9333__auto___12873){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__9333__auto___12873),args);
});})(g__9333__auto___12873))
;

cljs.spec.impl.gen.sample.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.sample.cljs$lang$applyTo = ((function (g__9333__auto___12873){
return (function (seq12813){
return cljs.spec.impl.gen.sample.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq12813));
});})(g__9333__auto___12873))
;


var g__9333__auto___12877 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.return$ !== 'undefined')){
return clojure.test.check.generators.return$;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","return","clojure.test.check.generators/return",1744522038,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","return","clojure.test.check.generators/return",1744522038,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/return
 */
cljs.spec.impl.gen.return$ = ((function (g__9333__auto___12877){
return (function cljs$spec$impl$gen$return(var_args){
var args__8069__auto__ = [];
var len__8062__auto___12878 = arguments.length;
var i__8063__auto___12879 = (0);
while(true){
if((i__8063__auto___12879 < len__8062__auto___12878)){
args__8069__auto__.push((arguments[i__8063__auto___12879]));

var G__12880 = (i__8063__auto___12879 + (1));
i__8063__auto___12879 = G__12880;
continue;
} else {
}
break;
}

var argseq__8070__auto__ = ((((0) < args__8069__auto__.length))?(new cljs.core.IndexedSeq(args__8069__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.return$.cljs$core$IFn$_invoke$arity$variadic(argseq__8070__auto__);
});})(g__9333__auto___12877))
;

cljs.spec.impl.gen.return$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__9333__auto___12877){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__9333__auto___12877),args);
});})(g__9333__auto___12877))
;

cljs.spec.impl.gen.return$.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.return$.cljs$lang$applyTo = ((function (g__9333__auto___12877){
return (function (seq12814){
return cljs.spec.impl.gen.return$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq12814));
});})(g__9333__auto___12877))
;


var g__9333__auto___12881 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.large_integer_STAR_ !== 'undefined')){
return clojure.test.check.generators.large_integer_STAR_;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","large-integer*","clojure.test.check.generators/large-integer*",-437830670,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","large-integer*","clojure.test.check.generators/large-integer*",-437830670,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/large-integer*
 */
cljs.spec.impl.gen.large_integer_STAR_ = ((function (g__9333__auto___12881){
return (function cljs$spec$impl$gen$large_integer_STAR_(var_args){
var args__8069__auto__ = [];
var len__8062__auto___12882 = arguments.length;
var i__8063__auto___12883 = (0);
while(true){
if((i__8063__auto___12883 < len__8062__auto___12882)){
args__8069__auto__.push((arguments[i__8063__auto___12883]));

var G__12884 = (i__8063__auto___12883 + (1));
i__8063__auto___12883 = G__12884;
continue;
} else {
}
break;
}

var argseq__8070__auto__ = ((((0) < args__8069__auto__.length))?(new cljs.core.IndexedSeq(args__8069__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.large_integer_STAR_.cljs$core$IFn$_invoke$arity$variadic(argseq__8070__auto__);
});})(g__9333__auto___12881))
;

cljs.spec.impl.gen.large_integer_STAR_.cljs$core$IFn$_invoke$arity$variadic = ((function (g__9333__auto___12881){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__9333__auto___12881),args);
});})(g__9333__auto___12881))
;

cljs.spec.impl.gen.large_integer_STAR_.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.large_integer_STAR_.cljs$lang$applyTo = ((function (g__9333__auto___12881){
return (function (seq12815){
return cljs.spec.impl.gen.large_integer_STAR_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq12815));
});})(g__9333__auto___12881))
;


var g__9333__auto___12885 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.double_STAR_ !== 'undefined')){
return clojure.test.check.generators.double_STAR_;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","double*","clojure.test.check.generators/double*",841542265,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","double*","clojure.test.check.generators/double*",841542265,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/double*
 */
cljs.spec.impl.gen.double_STAR_ = ((function (g__9333__auto___12885){
return (function cljs$spec$impl$gen$double_STAR_(var_args){
var args__8069__auto__ = [];
var len__8062__auto___12886 = arguments.length;
var i__8063__auto___12887 = (0);
while(true){
if((i__8063__auto___12887 < len__8062__auto___12886)){
args__8069__auto__.push((arguments[i__8063__auto___12887]));

var G__12888 = (i__8063__auto___12887 + (1));
i__8063__auto___12887 = G__12888;
continue;
} else {
}
break;
}

var argseq__8070__auto__ = ((((0) < args__8069__auto__.length))?(new cljs.core.IndexedSeq(args__8069__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.double_STAR_.cljs$core$IFn$_invoke$arity$variadic(argseq__8070__auto__);
});})(g__9333__auto___12885))
;

cljs.spec.impl.gen.double_STAR_.cljs$core$IFn$_invoke$arity$variadic = ((function (g__9333__auto___12885){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__9333__auto___12885),args);
});})(g__9333__auto___12885))
;

cljs.spec.impl.gen.double_STAR_.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.double_STAR_.cljs$lang$applyTo = ((function (g__9333__auto___12885){
return (function (seq12816){
return cljs.spec.impl.gen.double_STAR_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq12816));
});})(g__9333__auto___12885))
;

var g__9346__auto___12910 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.any !== 'undefined')){
return clojure.test.check.generators.any;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","any","clojure.test.check.generators/any",1883743710,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","any","clojure.test.check.generators/any",1883743710,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/any
 */
cljs.spec.impl.gen.any = ((function (g__9346__auto___12910){
return (function cljs$spec$impl$gen$any(var_args){
var args__8069__auto__ = [];
var len__8062__auto___12911 = arguments.length;
var i__8063__auto___12912 = (0);
while(true){
if((i__8063__auto___12912 < len__8062__auto___12911)){
args__8069__auto__.push((arguments[i__8063__auto___12912]));

var G__12913 = (i__8063__auto___12912 + (1));
i__8063__auto___12912 = G__12913;
continue;
} else {
}
break;
}

var argseq__8070__auto__ = ((((0) < args__8069__auto__.length))?(new cljs.core.IndexedSeq(args__8069__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.any.cljs$core$IFn$_invoke$arity$variadic(argseq__8070__auto__);
});})(g__9346__auto___12910))
;

cljs.spec.impl.gen.any.cljs$core$IFn$_invoke$arity$variadic = ((function (g__9346__auto___12910){
return (function (args){
return cljs.core.deref.call(null,g__9346__auto___12910);
});})(g__9346__auto___12910))
;

cljs.spec.impl.gen.any.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.any.cljs$lang$applyTo = ((function (g__9346__auto___12910){
return (function (seq12889){
return cljs.spec.impl.gen.any.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq12889));
});})(g__9346__auto___12910))
;


var g__9346__auto___12914 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.any_printable !== 'undefined')){
return clojure.test.check.generators.any_printable;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","any-printable","clojure.test.check.generators/any-printable",-1570493991,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","any-printable","clojure.test.check.generators/any-printable",-1570493991,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/any-printable
 */
cljs.spec.impl.gen.any_printable = ((function (g__9346__auto___12914){
return (function cljs$spec$impl$gen$any_printable(var_args){
var args__8069__auto__ = [];
var len__8062__auto___12915 = arguments.length;
var i__8063__auto___12916 = (0);
while(true){
if((i__8063__auto___12916 < len__8062__auto___12915)){
args__8069__auto__.push((arguments[i__8063__auto___12916]));

var G__12917 = (i__8063__auto___12916 + (1));
i__8063__auto___12916 = G__12917;
continue;
} else {
}
break;
}

var argseq__8070__auto__ = ((((0) < args__8069__auto__.length))?(new cljs.core.IndexedSeq(args__8069__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.any_printable.cljs$core$IFn$_invoke$arity$variadic(argseq__8070__auto__);
});})(g__9346__auto___12914))
;

cljs.spec.impl.gen.any_printable.cljs$core$IFn$_invoke$arity$variadic = ((function (g__9346__auto___12914){
return (function (args){
return cljs.core.deref.call(null,g__9346__auto___12914);
});})(g__9346__auto___12914))
;

cljs.spec.impl.gen.any_printable.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.any_printable.cljs$lang$applyTo = ((function (g__9346__auto___12914){
return (function (seq12890){
return cljs.spec.impl.gen.any_printable.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq12890));
});})(g__9346__auto___12914))
;


var g__9346__auto___12918 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.boolean$ !== 'undefined')){
return clojure.test.check.generators.boolean$;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","boolean","clojure.test.check.generators/boolean",1586992347,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","boolean","clojure.test.check.generators/boolean",1586992347,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/boolean
 */
cljs.spec.impl.gen.boolean$ = ((function (g__9346__auto___12918){
return (function cljs$spec$impl$gen$boolean(var_args){
var args__8069__auto__ = [];
var len__8062__auto___12919 = arguments.length;
var i__8063__auto___12920 = (0);
while(true){
if((i__8063__auto___12920 < len__8062__auto___12919)){
args__8069__auto__.push((arguments[i__8063__auto___12920]));

var G__12921 = (i__8063__auto___12920 + (1));
i__8063__auto___12920 = G__12921;
continue;
} else {
}
break;
}

var argseq__8070__auto__ = ((((0) < args__8069__auto__.length))?(new cljs.core.IndexedSeq(args__8069__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.boolean$.cljs$core$IFn$_invoke$arity$variadic(argseq__8070__auto__);
});})(g__9346__auto___12918))
;

cljs.spec.impl.gen.boolean$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__9346__auto___12918){
return (function (args){
return cljs.core.deref.call(null,g__9346__auto___12918);
});})(g__9346__auto___12918))
;

cljs.spec.impl.gen.boolean$.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.boolean$.cljs$lang$applyTo = ((function (g__9346__auto___12918){
return (function (seq12891){
return cljs.spec.impl.gen.boolean$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq12891));
});})(g__9346__auto___12918))
;


var g__9346__auto___12922 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.char$ !== 'undefined')){
return clojure.test.check.generators.char$;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","char","clojure.test.check.generators/char",-1426343459,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","char","clojure.test.check.generators/char",-1426343459,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/char
 */
cljs.spec.impl.gen.char$ = ((function (g__9346__auto___12922){
return (function cljs$spec$impl$gen$char(var_args){
var args__8069__auto__ = [];
var len__8062__auto___12923 = arguments.length;
var i__8063__auto___12924 = (0);
while(true){
if((i__8063__auto___12924 < len__8062__auto___12923)){
args__8069__auto__.push((arguments[i__8063__auto___12924]));

var G__12925 = (i__8063__auto___12924 + (1));
i__8063__auto___12924 = G__12925;
continue;
} else {
}
break;
}

var argseq__8070__auto__ = ((((0) < args__8069__auto__.length))?(new cljs.core.IndexedSeq(args__8069__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.char$.cljs$core$IFn$_invoke$arity$variadic(argseq__8070__auto__);
});})(g__9346__auto___12922))
;

cljs.spec.impl.gen.char$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__9346__auto___12922){
return (function (args){
return cljs.core.deref.call(null,g__9346__auto___12922);
});})(g__9346__auto___12922))
;

cljs.spec.impl.gen.char$.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.char$.cljs$lang$applyTo = ((function (g__9346__auto___12922){
return (function (seq12892){
return cljs.spec.impl.gen.char$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq12892));
});})(g__9346__auto___12922))
;


var g__9346__auto___12926 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.char_alpha !== 'undefined')){
return clojure.test.check.generators.char_alpha;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","char-alpha","clojure.test.check.generators/char-alpha",615785796,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","char-alpha","clojure.test.check.generators/char-alpha",615785796,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/char-alpha
 */
cljs.spec.impl.gen.char_alpha = ((function (g__9346__auto___12926){
return (function cljs$spec$impl$gen$char_alpha(var_args){
var args__8069__auto__ = [];
var len__8062__auto___12927 = arguments.length;
var i__8063__auto___12928 = (0);
while(true){
if((i__8063__auto___12928 < len__8062__auto___12927)){
args__8069__auto__.push((arguments[i__8063__auto___12928]));

var G__12929 = (i__8063__auto___12928 + (1));
i__8063__auto___12928 = G__12929;
continue;
} else {
}
break;
}

var argseq__8070__auto__ = ((((0) < args__8069__auto__.length))?(new cljs.core.IndexedSeq(args__8069__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.char_alpha.cljs$core$IFn$_invoke$arity$variadic(argseq__8070__auto__);
});})(g__9346__auto___12926))
;

cljs.spec.impl.gen.char_alpha.cljs$core$IFn$_invoke$arity$variadic = ((function (g__9346__auto___12926){
return (function (args){
return cljs.core.deref.call(null,g__9346__auto___12926);
});})(g__9346__auto___12926))
;

cljs.spec.impl.gen.char_alpha.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.char_alpha.cljs$lang$applyTo = ((function (g__9346__auto___12926){
return (function (seq12893){
return cljs.spec.impl.gen.char_alpha.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq12893));
});})(g__9346__auto___12926))
;


var g__9346__auto___12930 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.char_alphanumeric !== 'undefined')){
return clojure.test.check.generators.char_alphanumeric;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","char-alphanumeric","clojure.test.check.generators/char-alphanumeric",1383091431,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","char-alphanumeric","clojure.test.check.generators/char-alphanumeric",1383091431,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/char-alphanumeric
 */
cljs.spec.impl.gen.char_alphanumeric = ((function (g__9346__auto___12930){
return (function cljs$spec$impl$gen$char_alphanumeric(var_args){
var args__8069__auto__ = [];
var len__8062__auto___12931 = arguments.length;
var i__8063__auto___12932 = (0);
while(true){
if((i__8063__auto___12932 < len__8062__auto___12931)){
args__8069__auto__.push((arguments[i__8063__auto___12932]));

var G__12933 = (i__8063__auto___12932 + (1));
i__8063__auto___12932 = G__12933;
continue;
} else {
}
break;
}

var argseq__8070__auto__ = ((((0) < args__8069__auto__.length))?(new cljs.core.IndexedSeq(args__8069__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.char_alphanumeric.cljs$core$IFn$_invoke$arity$variadic(argseq__8070__auto__);
});})(g__9346__auto___12930))
;

cljs.spec.impl.gen.char_alphanumeric.cljs$core$IFn$_invoke$arity$variadic = ((function (g__9346__auto___12930){
return (function (args){
return cljs.core.deref.call(null,g__9346__auto___12930);
});})(g__9346__auto___12930))
;

cljs.spec.impl.gen.char_alphanumeric.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.char_alphanumeric.cljs$lang$applyTo = ((function (g__9346__auto___12930){
return (function (seq12894){
return cljs.spec.impl.gen.char_alphanumeric.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq12894));
});})(g__9346__auto___12930))
;


var g__9346__auto___12934 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.char_ascii !== 'undefined')){
return clojure.test.check.generators.char_ascii;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","char-ascii","clojure.test.check.generators/char-ascii",-899908538,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","char-ascii","clojure.test.check.generators/char-ascii",-899908538,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/char-ascii
 */
cljs.spec.impl.gen.char_ascii = ((function (g__9346__auto___12934){
return (function cljs$spec$impl$gen$char_ascii(var_args){
var args__8069__auto__ = [];
var len__8062__auto___12935 = arguments.length;
var i__8063__auto___12936 = (0);
while(true){
if((i__8063__auto___12936 < len__8062__auto___12935)){
args__8069__auto__.push((arguments[i__8063__auto___12936]));

var G__12937 = (i__8063__auto___12936 + (1));
i__8063__auto___12936 = G__12937;
continue;
} else {
}
break;
}

var argseq__8070__auto__ = ((((0) < args__8069__auto__.length))?(new cljs.core.IndexedSeq(args__8069__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.char_ascii.cljs$core$IFn$_invoke$arity$variadic(argseq__8070__auto__);
});})(g__9346__auto___12934))
;

cljs.spec.impl.gen.char_ascii.cljs$core$IFn$_invoke$arity$variadic = ((function (g__9346__auto___12934){
return (function (args){
return cljs.core.deref.call(null,g__9346__auto___12934);
});})(g__9346__auto___12934))
;

cljs.spec.impl.gen.char_ascii.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.char_ascii.cljs$lang$applyTo = ((function (g__9346__auto___12934){
return (function (seq12895){
return cljs.spec.impl.gen.char_ascii.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq12895));
});})(g__9346__auto___12934))
;


var g__9346__auto___12938 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.double$ !== 'undefined')){
return clojure.test.check.generators.double$;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","double","clojure.test.check.generators/double",668331090,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","double","clojure.test.check.generators/double",668331090,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/double
 */
cljs.spec.impl.gen.double$ = ((function (g__9346__auto___12938){
return (function cljs$spec$impl$gen$double(var_args){
var args__8069__auto__ = [];
var len__8062__auto___12939 = arguments.length;
var i__8063__auto___12940 = (0);
while(true){
if((i__8063__auto___12940 < len__8062__auto___12939)){
args__8069__auto__.push((arguments[i__8063__auto___12940]));

var G__12941 = (i__8063__auto___12940 + (1));
i__8063__auto___12940 = G__12941;
continue;
} else {
}
break;
}

var argseq__8070__auto__ = ((((0) < args__8069__auto__.length))?(new cljs.core.IndexedSeq(args__8069__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.double$.cljs$core$IFn$_invoke$arity$variadic(argseq__8070__auto__);
});})(g__9346__auto___12938))
;

cljs.spec.impl.gen.double$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__9346__auto___12938){
return (function (args){
return cljs.core.deref.call(null,g__9346__auto___12938);
});})(g__9346__auto___12938))
;

cljs.spec.impl.gen.double$.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.double$.cljs$lang$applyTo = ((function (g__9346__auto___12938){
return (function (seq12896){
return cljs.spec.impl.gen.double$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq12896));
});})(g__9346__auto___12938))
;


var g__9346__auto___12942 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.int$ !== 'undefined')){
return clojure.test.check.generators.int$;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","int","clojure.test.check.generators/int",1756228469,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","int","clojure.test.check.generators/int",1756228469,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/int
 */
cljs.spec.impl.gen.int$ = ((function (g__9346__auto___12942){
return (function cljs$spec$impl$gen$int(var_args){
var args__8069__auto__ = [];
var len__8062__auto___12943 = arguments.length;
var i__8063__auto___12944 = (0);
while(true){
if((i__8063__auto___12944 < len__8062__auto___12943)){
args__8069__auto__.push((arguments[i__8063__auto___12944]));

var G__12945 = (i__8063__auto___12944 + (1));
i__8063__auto___12944 = G__12945;
continue;
} else {
}
break;
}

var argseq__8070__auto__ = ((((0) < args__8069__auto__.length))?(new cljs.core.IndexedSeq(args__8069__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.int$.cljs$core$IFn$_invoke$arity$variadic(argseq__8070__auto__);
});})(g__9346__auto___12942))
;

cljs.spec.impl.gen.int$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__9346__auto___12942){
return (function (args){
return cljs.core.deref.call(null,g__9346__auto___12942);
});})(g__9346__auto___12942))
;

cljs.spec.impl.gen.int$.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.int$.cljs$lang$applyTo = ((function (g__9346__auto___12942){
return (function (seq12897){
return cljs.spec.impl.gen.int$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq12897));
});})(g__9346__auto___12942))
;


var g__9346__auto___12946 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.keyword !== 'undefined')){
return clojure.test.check.generators.keyword;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","keyword","clojure.test.check.generators/keyword",24530530,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","keyword","clojure.test.check.generators/keyword",24530530,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/keyword
 */
cljs.spec.impl.gen.keyword = ((function (g__9346__auto___12946){
return (function cljs$spec$impl$gen$keyword(var_args){
var args__8069__auto__ = [];
var len__8062__auto___12947 = arguments.length;
var i__8063__auto___12948 = (0);
while(true){
if((i__8063__auto___12948 < len__8062__auto___12947)){
args__8069__auto__.push((arguments[i__8063__auto___12948]));

var G__12949 = (i__8063__auto___12948 + (1));
i__8063__auto___12948 = G__12949;
continue;
} else {
}
break;
}

var argseq__8070__auto__ = ((((0) < args__8069__auto__.length))?(new cljs.core.IndexedSeq(args__8069__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.keyword.cljs$core$IFn$_invoke$arity$variadic(argseq__8070__auto__);
});})(g__9346__auto___12946))
;

cljs.spec.impl.gen.keyword.cljs$core$IFn$_invoke$arity$variadic = ((function (g__9346__auto___12946){
return (function (args){
return cljs.core.deref.call(null,g__9346__auto___12946);
});})(g__9346__auto___12946))
;

cljs.spec.impl.gen.keyword.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.keyword.cljs$lang$applyTo = ((function (g__9346__auto___12946){
return (function (seq12898){
return cljs.spec.impl.gen.keyword.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq12898));
});})(g__9346__auto___12946))
;


var g__9346__auto___12950 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.keyword_ns !== 'undefined')){
return clojure.test.check.generators.keyword_ns;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","keyword-ns","clojure.test.check.generators/keyword-ns",-1492628482,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","keyword-ns","clojure.test.check.generators/keyword-ns",-1492628482,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/keyword-ns
 */
cljs.spec.impl.gen.keyword_ns = ((function (g__9346__auto___12950){
return (function cljs$spec$impl$gen$keyword_ns(var_args){
var args__8069__auto__ = [];
var len__8062__auto___12951 = arguments.length;
var i__8063__auto___12952 = (0);
while(true){
if((i__8063__auto___12952 < len__8062__auto___12951)){
args__8069__auto__.push((arguments[i__8063__auto___12952]));

var G__12953 = (i__8063__auto___12952 + (1));
i__8063__auto___12952 = G__12953;
continue;
} else {
}
break;
}

var argseq__8070__auto__ = ((((0) < args__8069__auto__.length))?(new cljs.core.IndexedSeq(args__8069__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.keyword_ns.cljs$core$IFn$_invoke$arity$variadic(argseq__8070__auto__);
});})(g__9346__auto___12950))
;

cljs.spec.impl.gen.keyword_ns.cljs$core$IFn$_invoke$arity$variadic = ((function (g__9346__auto___12950){
return (function (args){
return cljs.core.deref.call(null,g__9346__auto___12950);
});})(g__9346__auto___12950))
;

cljs.spec.impl.gen.keyword_ns.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.keyword_ns.cljs$lang$applyTo = ((function (g__9346__auto___12950){
return (function (seq12899){
return cljs.spec.impl.gen.keyword_ns.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq12899));
});})(g__9346__auto___12950))
;


var g__9346__auto___12954 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.large_integer !== 'undefined')){
return clojure.test.check.generators.large_integer;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","large-integer","clojure.test.check.generators/large-integer",-865967138,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","large-integer","clojure.test.check.generators/large-integer",-865967138,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/large-integer
 */
cljs.spec.impl.gen.large_integer = ((function (g__9346__auto___12954){
return (function cljs$spec$impl$gen$large_integer(var_args){
var args__8069__auto__ = [];
var len__8062__auto___12955 = arguments.length;
var i__8063__auto___12956 = (0);
while(true){
if((i__8063__auto___12956 < len__8062__auto___12955)){
args__8069__auto__.push((arguments[i__8063__auto___12956]));

var G__12957 = (i__8063__auto___12956 + (1));
i__8063__auto___12956 = G__12957;
continue;
} else {
}
break;
}

var argseq__8070__auto__ = ((((0) < args__8069__auto__.length))?(new cljs.core.IndexedSeq(args__8069__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.large_integer.cljs$core$IFn$_invoke$arity$variadic(argseq__8070__auto__);
});})(g__9346__auto___12954))
;

cljs.spec.impl.gen.large_integer.cljs$core$IFn$_invoke$arity$variadic = ((function (g__9346__auto___12954){
return (function (args){
return cljs.core.deref.call(null,g__9346__auto___12954);
});})(g__9346__auto___12954))
;

cljs.spec.impl.gen.large_integer.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.large_integer.cljs$lang$applyTo = ((function (g__9346__auto___12954){
return (function (seq12900){
return cljs.spec.impl.gen.large_integer.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq12900));
});})(g__9346__auto___12954))
;


var g__9346__auto___12958 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.ratio !== 'undefined')){
return clojure.test.check.generators.ratio;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","ratio","clojure.test.check.generators/ratio",1540966915,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","ratio","clojure.test.check.generators/ratio",1540966915,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/ratio
 */
cljs.spec.impl.gen.ratio = ((function (g__9346__auto___12958){
return (function cljs$spec$impl$gen$ratio(var_args){
var args__8069__auto__ = [];
var len__8062__auto___12959 = arguments.length;
var i__8063__auto___12960 = (0);
while(true){
if((i__8063__auto___12960 < len__8062__auto___12959)){
args__8069__auto__.push((arguments[i__8063__auto___12960]));

var G__12961 = (i__8063__auto___12960 + (1));
i__8063__auto___12960 = G__12961;
continue;
} else {
}
break;
}

var argseq__8070__auto__ = ((((0) < args__8069__auto__.length))?(new cljs.core.IndexedSeq(args__8069__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.ratio.cljs$core$IFn$_invoke$arity$variadic(argseq__8070__auto__);
});})(g__9346__auto___12958))
;

cljs.spec.impl.gen.ratio.cljs$core$IFn$_invoke$arity$variadic = ((function (g__9346__auto___12958){
return (function (args){
return cljs.core.deref.call(null,g__9346__auto___12958);
});})(g__9346__auto___12958))
;

cljs.spec.impl.gen.ratio.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.ratio.cljs$lang$applyTo = ((function (g__9346__auto___12958){
return (function (seq12901){
return cljs.spec.impl.gen.ratio.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq12901));
});})(g__9346__auto___12958))
;


var g__9346__auto___12962 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.simple_type !== 'undefined')){
return clojure.test.check.generators.simple_type;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","simple-type","clojure.test.check.generators/simple-type",892572284,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","simple-type","clojure.test.check.generators/simple-type",892572284,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/simple-type
 */
cljs.spec.impl.gen.simple_type = ((function (g__9346__auto___12962){
return (function cljs$spec$impl$gen$simple_type(var_args){
var args__8069__auto__ = [];
var len__8062__auto___12963 = arguments.length;
var i__8063__auto___12964 = (0);
while(true){
if((i__8063__auto___12964 < len__8062__auto___12963)){
args__8069__auto__.push((arguments[i__8063__auto___12964]));

var G__12965 = (i__8063__auto___12964 + (1));
i__8063__auto___12964 = G__12965;
continue;
} else {
}
break;
}

var argseq__8070__auto__ = ((((0) < args__8069__auto__.length))?(new cljs.core.IndexedSeq(args__8069__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.simple_type.cljs$core$IFn$_invoke$arity$variadic(argseq__8070__auto__);
});})(g__9346__auto___12962))
;

cljs.spec.impl.gen.simple_type.cljs$core$IFn$_invoke$arity$variadic = ((function (g__9346__auto___12962){
return (function (args){
return cljs.core.deref.call(null,g__9346__auto___12962);
});})(g__9346__auto___12962))
;

cljs.spec.impl.gen.simple_type.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.simple_type.cljs$lang$applyTo = ((function (g__9346__auto___12962){
return (function (seq12902){
return cljs.spec.impl.gen.simple_type.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq12902));
});})(g__9346__auto___12962))
;


var g__9346__auto___12966 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.simple_type_printable !== 'undefined')){
return clojure.test.check.generators.simple_type_printable;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","simple-type-printable","clojure.test.check.generators/simple-type-printable",-58489962,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","simple-type-printable","clojure.test.check.generators/simple-type-printable",-58489962,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/simple-type-printable
 */
cljs.spec.impl.gen.simple_type_printable = ((function (g__9346__auto___12966){
return (function cljs$spec$impl$gen$simple_type_printable(var_args){
var args__8069__auto__ = [];
var len__8062__auto___12967 = arguments.length;
var i__8063__auto___12968 = (0);
while(true){
if((i__8063__auto___12968 < len__8062__auto___12967)){
args__8069__auto__.push((arguments[i__8063__auto___12968]));

var G__12969 = (i__8063__auto___12968 + (1));
i__8063__auto___12968 = G__12969;
continue;
} else {
}
break;
}

var argseq__8070__auto__ = ((((0) < args__8069__auto__.length))?(new cljs.core.IndexedSeq(args__8069__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.simple_type_printable.cljs$core$IFn$_invoke$arity$variadic(argseq__8070__auto__);
});})(g__9346__auto___12966))
;

cljs.spec.impl.gen.simple_type_printable.cljs$core$IFn$_invoke$arity$variadic = ((function (g__9346__auto___12966){
return (function (args){
return cljs.core.deref.call(null,g__9346__auto___12966);
});})(g__9346__auto___12966))
;

cljs.spec.impl.gen.simple_type_printable.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.simple_type_printable.cljs$lang$applyTo = ((function (g__9346__auto___12966){
return (function (seq12903){
return cljs.spec.impl.gen.simple_type_printable.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq12903));
});})(g__9346__auto___12966))
;


var g__9346__auto___12970 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.string !== 'undefined')){
return clojure.test.check.generators.string;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","string","clojure.test.check.generators/string",-1704750979,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","string","clojure.test.check.generators/string",-1704750979,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/string
 */
cljs.spec.impl.gen.string = ((function (g__9346__auto___12970){
return (function cljs$spec$impl$gen$string(var_args){
var args__8069__auto__ = [];
var len__8062__auto___12971 = arguments.length;
var i__8063__auto___12972 = (0);
while(true){
if((i__8063__auto___12972 < len__8062__auto___12971)){
args__8069__auto__.push((arguments[i__8063__auto___12972]));

var G__12973 = (i__8063__auto___12972 + (1));
i__8063__auto___12972 = G__12973;
continue;
} else {
}
break;
}

var argseq__8070__auto__ = ((((0) < args__8069__auto__.length))?(new cljs.core.IndexedSeq(args__8069__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.string.cljs$core$IFn$_invoke$arity$variadic(argseq__8070__auto__);
});})(g__9346__auto___12970))
;

cljs.spec.impl.gen.string.cljs$core$IFn$_invoke$arity$variadic = ((function (g__9346__auto___12970){
return (function (args){
return cljs.core.deref.call(null,g__9346__auto___12970);
});})(g__9346__auto___12970))
;

cljs.spec.impl.gen.string.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.string.cljs$lang$applyTo = ((function (g__9346__auto___12970){
return (function (seq12904){
return cljs.spec.impl.gen.string.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq12904));
});})(g__9346__auto___12970))
;


var g__9346__auto___12974 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.string_ascii !== 'undefined')){
return clojure.test.check.generators.string_ascii;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","string-ascii","clojure.test.check.generators/string-ascii",-2009877640,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","string-ascii","clojure.test.check.generators/string-ascii",-2009877640,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/string-ascii
 */
cljs.spec.impl.gen.string_ascii = ((function (g__9346__auto___12974){
return (function cljs$spec$impl$gen$string_ascii(var_args){
var args__8069__auto__ = [];
var len__8062__auto___12975 = arguments.length;
var i__8063__auto___12976 = (0);
while(true){
if((i__8063__auto___12976 < len__8062__auto___12975)){
args__8069__auto__.push((arguments[i__8063__auto___12976]));

var G__12977 = (i__8063__auto___12976 + (1));
i__8063__auto___12976 = G__12977;
continue;
} else {
}
break;
}

var argseq__8070__auto__ = ((((0) < args__8069__auto__.length))?(new cljs.core.IndexedSeq(args__8069__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.string_ascii.cljs$core$IFn$_invoke$arity$variadic(argseq__8070__auto__);
});})(g__9346__auto___12974))
;

cljs.spec.impl.gen.string_ascii.cljs$core$IFn$_invoke$arity$variadic = ((function (g__9346__auto___12974){
return (function (args){
return cljs.core.deref.call(null,g__9346__auto___12974);
});})(g__9346__auto___12974))
;

cljs.spec.impl.gen.string_ascii.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.string_ascii.cljs$lang$applyTo = ((function (g__9346__auto___12974){
return (function (seq12905){
return cljs.spec.impl.gen.string_ascii.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq12905));
});})(g__9346__auto___12974))
;


var g__9346__auto___12978 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.string_alphanumeric !== 'undefined')){
return clojure.test.check.generators.string_alphanumeric;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","string-alphanumeric","clojure.test.check.generators/string-alphanumeric",836374939,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","string-alphanumeric","clojure.test.check.generators/string-alphanumeric",836374939,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/string-alphanumeric
 */
cljs.spec.impl.gen.string_alphanumeric = ((function (g__9346__auto___12978){
return (function cljs$spec$impl$gen$string_alphanumeric(var_args){
var args__8069__auto__ = [];
var len__8062__auto___12979 = arguments.length;
var i__8063__auto___12980 = (0);
while(true){
if((i__8063__auto___12980 < len__8062__auto___12979)){
args__8069__auto__.push((arguments[i__8063__auto___12980]));

var G__12981 = (i__8063__auto___12980 + (1));
i__8063__auto___12980 = G__12981;
continue;
} else {
}
break;
}

var argseq__8070__auto__ = ((((0) < args__8069__auto__.length))?(new cljs.core.IndexedSeq(args__8069__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.string_alphanumeric.cljs$core$IFn$_invoke$arity$variadic(argseq__8070__auto__);
});})(g__9346__auto___12978))
;

cljs.spec.impl.gen.string_alphanumeric.cljs$core$IFn$_invoke$arity$variadic = ((function (g__9346__auto___12978){
return (function (args){
return cljs.core.deref.call(null,g__9346__auto___12978);
});})(g__9346__auto___12978))
;

cljs.spec.impl.gen.string_alphanumeric.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.string_alphanumeric.cljs$lang$applyTo = ((function (g__9346__auto___12978){
return (function (seq12906){
return cljs.spec.impl.gen.string_alphanumeric.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq12906));
});})(g__9346__auto___12978))
;


var g__9346__auto___12982 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.symbol !== 'undefined')){
return clojure.test.check.generators.symbol;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","symbol","clojure.test.check.generators/symbol",-1305461065,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","symbol","clojure.test.check.generators/symbol",-1305461065,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/symbol
 */
cljs.spec.impl.gen.symbol = ((function (g__9346__auto___12982){
return (function cljs$spec$impl$gen$symbol(var_args){
var args__8069__auto__ = [];
var len__8062__auto___12983 = arguments.length;
var i__8063__auto___12984 = (0);
while(true){
if((i__8063__auto___12984 < len__8062__auto___12983)){
args__8069__auto__.push((arguments[i__8063__auto___12984]));

var G__12985 = (i__8063__auto___12984 + (1));
i__8063__auto___12984 = G__12985;
continue;
} else {
}
break;
}

var argseq__8070__auto__ = ((((0) < args__8069__auto__.length))?(new cljs.core.IndexedSeq(args__8069__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.symbol.cljs$core$IFn$_invoke$arity$variadic(argseq__8070__auto__);
});})(g__9346__auto___12982))
;

cljs.spec.impl.gen.symbol.cljs$core$IFn$_invoke$arity$variadic = ((function (g__9346__auto___12982){
return (function (args){
return cljs.core.deref.call(null,g__9346__auto___12982);
});})(g__9346__auto___12982))
;

cljs.spec.impl.gen.symbol.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.symbol.cljs$lang$applyTo = ((function (g__9346__auto___12982){
return (function (seq12907){
return cljs.spec.impl.gen.symbol.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq12907));
});})(g__9346__auto___12982))
;


var g__9346__auto___12986 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.symbol_ns !== 'undefined')){
return clojure.test.check.generators.symbol_ns;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","symbol-ns","clojure.test.check.generators/symbol-ns",-862629490,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","symbol-ns","clojure.test.check.generators/symbol-ns",-862629490,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/symbol-ns
 */
cljs.spec.impl.gen.symbol_ns = ((function (g__9346__auto___12986){
return (function cljs$spec$impl$gen$symbol_ns(var_args){
var args__8069__auto__ = [];
var len__8062__auto___12987 = arguments.length;
var i__8063__auto___12988 = (0);
while(true){
if((i__8063__auto___12988 < len__8062__auto___12987)){
args__8069__auto__.push((arguments[i__8063__auto___12988]));

var G__12989 = (i__8063__auto___12988 + (1));
i__8063__auto___12988 = G__12989;
continue;
} else {
}
break;
}

var argseq__8070__auto__ = ((((0) < args__8069__auto__.length))?(new cljs.core.IndexedSeq(args__8069__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.symbol_ns.cljs$core$IFn$_invoke$arity$variadic(argseq__8070__auto__);
});})(g__9346__auto___12986))
;

cljs.spec.impl.gen.symbol_ns.cljs$core$IFn$_invoke$arity$variadic = ((function (g__9346__auto___12986){
return (function (args){
return cljs.core.deref.call(null,g__9346__auto___12986);
});})(g__9346__auto___12986))
;

cljs.spec.impl.gen.symbol_ns.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.symbol_ns.cljs$lang$applyTo = ((function (g__9346__auto___12986){
return (function (seq12908){
return cljs.spec.impl.gen.symbol_ns.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq12908));
});})(g__9346__auto___12986))
;


var g__9346__auto___12990 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.uuid !== 'undefined')){
return clojure.test.check.generators.uuid;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","uuid","clojure.test.check.generators/uuid",1589373144,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","uuid","clojure.test.check.generators/uuid",1589373144,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/uuid
 */
cljs.spec.impl.gen.uuid = ((function (g__9346__auto___12990){
return (function cljs$spec$impl$gen$uuid(var_args){
var args__8069__auto__ = [];
var len__8062__auto___12991 = arguments.length;
var i__8063__auto___12992 = (0);
while(true){
if((i__8063__auto___12992 < len__8062__auto___12991)){
args__8069__auto__.push((arguments[i__8063__auto___12992]));

var G__12993 = (i__8063__auto___12992 + (1));
i__8063__auto___12992 = G__12993;
continue;
} else {
}
break;
}

var argseq__8070__auto__ = ((((0) < args__8069__auto__.length))?(new cljs.core.IndexedSeq(args__8069__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.uuid.cljs$core$IFn$_invoke$arity$variadic(argseq__8070__auto__);
});})(g__9346__auto___12990))
;

cljs.spec.impl.gen.uuid.cljs$core$IFn$_invoke$arity$variadic = ((function (g__9346__auto___12990){
return (function (args){
return cljs.core.deref.call(null,g__9346__auto___12990);
});})(g__9346__auto___12990))
;

cljs.spec.impl.gen.uuid.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.uuid.cljs$lang$applyTo = ((function (g__9346__auto___12990){
return (function (seq12909){
return cljs.spec.impl.gen.uuid.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq12909));
});})(g__9346__auto___12990))
;

/**
 * Returns a generator of a sequence catenated from results of
 * gens, each of which should generate something sequential.
 */
cljs.spec.impl.gen.cat = (function cljs$spec$impl$gen$cat(var_args){
var args__8069__auto__ = [];
var len__8062__auto___12996 = arguments.length;
var i__8063__auto___12997 = (0);
while(true){
if((i__8063__auto___12997 < len__8062__auto___12996)){
args__8069__auto__.push((arguments[i__8063__auto___12997]));

var G__12998 = (i__8063__auto___12997 + (1));
i__8063__auto___12997 = G__12998;
continue;
} else {
}
break;
}

var argseq__8070__auto__ = ((((0) < args__8069__auto__.length))?(new cljs.core.IndexedSeq(args__8069__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.cat.cljs$core$IFn$_invoke$arity$variadic(argseq__8070__auto__);
});

cljs.spec.impl.gen.cat.cljs$core$IFn$_invoke$arity$variadic = (function (gens){
return cljs.spec.impl.gen.fmap.call(null,(function (p1__12994_SHARP_){
return cljs.core.apply.call(null,cljs.core.concat,p1__12994_SHARP_);
}),cljs.core.apply.call(null,cljs.spec.impl.gen.tuple,gens));
});

cljs.spec.impl.gen.cat.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.cat.cljs$lang$applyTo = (function (seq12995){
return cljs.spec.impl.gen.cat.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq12995));
});

cljs.spec.impl.gen.qualified_QMARK_ = (function cljs$spec$impl$gen$qualified_QMARK_(ident){
return !((cljs.core.namespace.call(null,ident) == null));
});
cljs.spec.impl.gen.gen_builtins = (new cljs.core.Delay((function (){
var simple = cljs.spec.impl.gen.simple_type_printable.call(null);
return cljs.core.PersistentHashMap.fromArrays([cljs.core.qualified_keyword_QMARK_,cljs.core.seq_QMARK_,cljs.core.vector_QMARK_,cljs.core.any_QMARK_,cljs.core.boolean_QMARK_,cljs.core.char_QMARK_,cljs.core.inst_QMARK_,cljs.core.simple_symbol_QMARK_,cljs.core.sequential_QMARK_,cljs.core.set_QMARK_,cljs.core.map_QMARK_,cljs.core.empty_QMARK_,cljs.core.string_QMARK_,cljs.core.int_QMARK_,cljs.core.associative_QMARK_,cljs.core.keyword_QMARK_,cljs.core.indexed_QMARK_,cljs.core.zero_QMARK_,cljs.core.simple_keyword_QMARK_,cljs.core.neg_int_QMARK_,cljs.core.nil_QMARK_,cljs.core.ident_QMARK_,cljs.core.qualified_ident_QMARK_,cljs.core.true_QMARK_,cljs.core.integer_QMARK_,cljs.core.nat_int_QMARK_,cljs.core.pos_int_QMARK_,cljs.core.uuid_QMARK_,cljs.core.false_QMARK_,cljs.core.list_QMARK_,cljs.core.simple_ident_QMARK_,cljs.core.number_QMARK_,cljs.core.qualified_symbol_QMARK_,cljs.core.seqable_QMARK_,cljs.core.symbol_QMARK_,cljs.core.coll_QMARK_],[cljs.spec.impl.gen.such_that.call(null,cljs.spec.impl.gen.qualified_QMARK_,cljs.spec.impl.gen.keyword_ns.call(null)),cljs.spec.impl.gen.list.call(null,simple),cljs.spec.impl.gen.vector.call(null,simple),cljs.spec.impl.gen.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.impl.gen.return$.call(null,null),cljs.spec.impl.gen.any_printable.call(null)], null)),cljs.spec.impl.gen.boolean$.call(null),cljs.spec.impl.gen.char$.call(null),cljs.spec.impl.gen.fmap.call(null,((function (simple){
return (function (p1__12999_SHARP_){
return (new Date(p1__12999_SHARP_));
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