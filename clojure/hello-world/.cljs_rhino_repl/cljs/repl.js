// Compiled by ClojureScript 1.9.229 {}
goog.provide('cljs.repl');
goog.require('cljs.core');
goog.require('cljs.spec');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__11852){
var map__11877 = p__11852;
var map__11877__$1 = ((((!((map__11877 == null)))?((((map__11877.cljs$lang$protocol_mask$partition0$ & (64))) || (map__11877.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__11877):map__11877);
var m = map__11877__$1;
var n = cljs.core.get.call(null,map__11877__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.call(null,map__11877__$1,new cljs.core.Keyword(null,"name","name",1843675177));
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
var seq__11879_11901 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__11880_11902 = null;
var count__11881_11903 = (0);
var i__11882_11904 = (0);
while(true){
if((i__11882_11904 < count__11881_11903)){
var f_11905 = cljs.core._nth.call(null,chunk__11880_11902,i__11882_11904);
cljs.core.println.call(null,"  ",f_11905);

var G__11906 = seq__11879_11901;
var G__11907 = chunk__11880_11902;
var G__11908 = count__11881_11903;
var G__11909 = (i__11882_11904 + (1));
seq__11879_11901 = G__11906;
chunk__11880_11902 = G__11907;
count__11881_11903 = G__11908;
i__11882_11904 = G__11909;
continue;
} else {
var temp__4657__auto___11910 = cljs.core.seq.call(null,seq__11879_11901);
if(temp__4657__auto___11910){
var seq__11879_11911__$1 = temp__4657__auto___11910;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__11879_11911__$1)){
var c__7798__auto___11912 = cljs.core.chunk_first.call(null,seq__11879_11911__$1);
var G__11913 = cljs.core.chunk_rest.call(null,seq__11879_11911__$1);
var G__11914 = c__7798__auto___11912;
var G__11915 = cljs.core.count.call(null,c__7798__auto___11912);
var G__11916 = (0);
seq__11879_11901 = G__11913;
chunk__11880_11902 = G__11914;
count__11881_11903 = G__11915;
i__11882_11904 = G__11916;
continue;
} else {
var f_11917 = cljs.core.first.call(null,seq__11879_11911__$1);
cljs.core.println.call(null,"  ",f_11917);

var G__11918 = cljs.core.next.call(null,seq__11879_11911__$1);
var G__11919 = null;
var G__11920 = (0);
var G__11921 = (0);
seq__11879_11901 = G__11918;
chunk__11880_11902 = G__11919;
count__11881_11903 = G__11920;
i__11882_11904 = G__11921;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_11922 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__6987__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__6987__auto__)){
return or__6987__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.call(null,arglists_11922);
} else {
cljs.core.prn.call(null,((cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first.call(null,arglists_11922)))?cljs.core.second.call(null,arglists_11922):arglists_11922));
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
var seq__11883_11923 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__11884_11924 = null;
var count__11885_11925 = (0);
var i__11886_11926 = (0);
while(true){
if((i__11886_11926 < count__11885_11925)){
var vec__11887_11927 = cljs.core._nth.call(null,chunk__11884_11924,i__11886_11926);
var name_11928 = cljs.core.nth.call(null,vec__11887_11927,(0),null);
var map__11890_11929 = cljs.core.nth.call(null,vec__11887_11927,(1),null);
var map__11890_11930__$1 = ((((!((map__11890_11929 == null)))?((((map__11890_11929.cljs$lang$protocol_mask$partition0$ & (64))) || (map__11890_11929.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__11890_11929):map__11890_11929);
var doc_11931 = cljs.core.get.call(null,map__11890_11930__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_11932 = cljs.core.get.call(null,map__11890_11930__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_11928);

cljs.core.println.call(null," ",arglists_11932);

if(cljs.core.truth_(doc_11931)){
cljs.core.println.call(null," ",doc_11931);
} else {
}

var G__11933 = seq__11883_11923;
var G__11934 = chunk__11884_11924;
var G__11935 = count__11885_11925;
var G__11936 = (i__11886_11926 + (1));
seq__11883_11923 = G__11933;
chunk__11884_11924 = G__11934;
count__11885_11925 = G__11935;
i__11886_11926 = G__11936;
continue;
} else {
var temp__4657__auto___11937 = cljs.core.seq.call(null,seq__11883_11923);
if(temp__4657__auto___11937){
var seq__11883_11938__$1 = temp__4657__auto___11937;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__11883_11938__$1)){
var c__7798__auto___11939 = cljs.core.chunk_first.call(null,seq__11883_11938__$1);
var G__11940 = cljs.core.chunk_rest.call(null,seq__11883_11938__$1);
var G__11941 = c__7798__auto___11939;
var G__11942 = cljs.core.count.call(null,c__7798__auto___11939);
var G__11943 = (0);
seq__11883_11923 = G__11940;
chunk__11884_11924 = G__11941;
count__11885_11925 = G__11942;
i__11886_11926 = G__11943;
continue;
} else {
var vec__11892_11944 = cljs.core.first.call(null,seq__11883_11938__$1);
var name_11945 = cljs.core.nth.call(null,vec__11892_11944,(0),null);
var map__11895_11946 = cljs.core.nth.call(null,vec__11892_11944,(1),null);
var map__11895_11947__$1 = ((((!((map__11895_11946 == null)))?((((map__11895_11946.cljs$lang$protocol_mask$partition0$ & (64))) || (map__11895_11946.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__11895_11946):map__11895_11946);
var doc_11948 = cljs.core.get.call(null,map__11895_11947__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_11949 = cljs.core.get.call(null,map__11895_11947__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_11945);

cljs.core.println.call(null," ",arglists_11949);

if(cljs.core.truth_(doc_11948)){
cljs.core.println.call(null," ",doc_11948);
} else {
}

var G__11950 = cljs.core.next.call(null,seq__11883_11938__$1);
var G__11951 = null;
var G__11952 = (0);
var G__11953 = (0);
seq__11883_11923 = G__11950;
chunk__11884_11924 = G__11951;
count__11885_11925 = G__11952;
i__11886_11926 = G__11953;
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

var seq__11897 = cljs.core.seq.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__11898 = null;
var count__11899 = (0);
var i__11900 = (0);
while(true){
if((i__11900 < count__11899)){
var role = cljs.core._nth.call(null,chunk__11898,i__11900);
var temp__4657__auto___11954__$1 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__4657__auto___11954__$1)){
var spec_11955 = temp__4657__auto___11954__$1;
cljs.core.print.call(null,[cljs.core.str("\n "),cljs.core.str(cljs.core.name.call(null,role)),cljs.core.str(":")].join(''),cljs.spec.describe.call(null,spec_11955));
} else {
}

var G__11956 = seq__11897;
var G__11957 = chunk__11898;
var G__11958 = count__11899;
var G__11959 = (i__11900 + (1));
seq__11897 = G__11956;
chunk__11898 = G__11957;
count__11899 = G__11958;
i__11900 = G__11959;
continue;
} else {
var temp__4657__auto____$1 = cljs.core.seq.call(null,seq__11897);
if(temp__4657__auto____$1){
var seq__11897__$1 = temp__4657__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__11897__$1)){
var c__7798__auto__ = cljs.core.chunk_first.call(null,seq__11897__$1);
var G__11960 = cljs.core.chunk_rest.call(null,seq__11897__$1);
var G__11961 = c__7798__auto__;
var G__11962 = cljs.core.count.call(null,c__7798__auto__);
var G__11963 = (0);
seq__11897 = G__11960;
chunk__11898 = G__11961;
count__11899 = G__11962;
i__11900 = G__11963;
continue;
} else {
var role = cljs.core.first.call(null,seq__11897__$1);
var temp__4657__auto___11964__$2 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__4657__auto___11964__$2)){
var spec_11965 = temp__4657__auto___11964__$2;
cljs.core.print.call(null,[cljs.core.str("\n "),cljs.core.str(cljs.core.name.call(null,role)),cljs.core.str(":")].join(''),cljs.spec.describe.call(null,spec_11965));
} else {
}

var G__11966 = cljs.core.next.call(null,seq__11897__$1);
var G__11967 = null;
var G__11968 = (0);
var G__11969 = (0);
seq__11897 = G__11966;
chunk__11898 = G__11967;
count__11899 = G__11968;
i__11900 = G__11969;
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