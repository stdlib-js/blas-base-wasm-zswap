"use strict";var d=function(e,r){return function(){return r||e((r={exports:{}}).exports,r),r.exports}};var f=d(function(J,y){
var B=require("path").resolve,O=require('@stdlib/fs-read-wasm/dist').sync,L=O(B(__dirname,"..","src","main.wasm"));y.exports=L
});var q=d(function(K,E){
var P=require('@stdlib/assert-is-wasm-memory/dist'),h=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),V=require('@stdlib/utils-inherit/dist'),m=require('@stdlib/wasm-module-wrapper/dist'),g=require('@stdlib/error-tools-fmtprodmsg/dist'),j=f();function o(e){if(!(this instanceof o))return new o(e);if(!P(e))throw new TypeError(g('27BH0',e));return m.call(this,j,e,{env:{memory:e}}),this}V(o,m);h(o.prototype,"main",function(r,s,i,a,t){return this._instance.exports.c_zswap(r,s,i,a,t),a});h(o.prototype,"ndarray",function(r,s,i,a,t,v,c){return this._instance.exports.c_zswap_ndarray(r,s,i,a,t,v,c),t});E.exports=o
});var b=d(function(Q,x){
var R=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),D=require('@stdlib/utils-inherit/dist'),M=require('@stdlib/strided-base-stride2offset/dist'),_=require('@stdlib/strided-base-read-dataview/dist').ndarray,k=require('@stdlib/wasm-memory/dist'),C=require('@stdlib/wasm-base-arrays2ptrs/dist'),z=require('@stdlib/wasm-base-strided2object/dist'),w=q();function p(){return this instanceof p?(w.call(this,new k({initial:0})),this):new p}D(p,w);R(p.prototype,"main",function(r,s,i,a,t){return this.ndarray(r,s,i,M(r,i),a,t,M(r,t))});R(p.prototype,"ndarray",function(r,s,i,a,t,v,c){var l,n,u;return l=C(this,[z(r,s,i,a),z(r,t,v,c)]),n=l[0],u=l[1],w.prototype.ndarray.call(this,r,n.ptr,n.stride,n.offset,u.ptr,u.stride,u.offset),n.copy&&_(r,this.view,n.stride*n.BYTES_PER_ELEMENT,n.ptr,s,i,a,!0),u.copy&&_(r,this.view,u.stride*u.BYTES_PER_ELEMENT,u.ptr,t,v,c,!0),t});x.exports=p
});var W=d(function(U,S){
var F=b(),T=new F;T.initializeSync();S.exports=T
});var G=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),A=W(),H=q();G(A,"Module",H);module.exports=A;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
