"use strict";var l=function(e,r){return function(){return r||e((r={exports:{}}).exports,r),r.exports}};var h=l(function(J,f){
var A=require("path").resolve,B=require('@stdlib/fs-read-wasm/dist').sync,O=B(A(__dirname,"..","src","main.wasm"));f.exports=O
});var q=l(function(K,M){
var L=require('@stdlib/assert-is-wasm-memory/dist'),m=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),P=require('@stdlib/utils-inherit/dist'),E=require('@stdlib/wasm-module-wrapper/dist'),V=require('@stdlib/error-tools-fmtprodmsg/dist'),g=h();function o(e){if(!(this instanceof o))return new o(e);if(!L(e))throw new TypeError(V('27BH0',e));return E.call(this,g,e,{env:{memory:e}}),this}P(o,E);m(o.prototype,"main",function(r,s,t,a,i){return this._instance.exports.c_zswap(r,s,t,a,i),a});m(o.prototype,"ndarray",function(r,s,t,a,i,v,c){return this._instance.exports.c_zswap_ndarray(r,s,t,a,i,v,c),i});M.exports=o
});var T=l(function(Q,x){
var b=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),j=require('@stdlib/utils-inherit/dist'),_=require('@stdlib/strided-base-stride2offset/dist'),z=require('@stdlib/strided-base-read-dataview/dist').ndarray,D=require('@stdlib/wasm-memory/dist'),k=require('@stdlib/wasm-base-arrays2ptrs/dist'),R=require('@stdlib/wasm-base-strided2object/dist'),w=q();function p(){return this instanceof p?(w.call(this,new D({initial:0})),this):new p}j(p,w);b(p.prototype,"main",function(r,s,t,a,i){return this.ndarray(r,s,t,_(r,t),a,i,_(r,i))});b(p.prototype,"ndarray",function(r,s,t,a,i,v,c){var d,n,u;return d=k(this,[R(r,s,t,a),R(r,i,v,c)]),n=d[0],u=d[1],w.prototype.ndarray.call(this,r,n.ptr,n.stride,n.offset,u.ptr,u.stride,u.offset),n.copy&&z(r,this.view,n.stride*n.BYTES_PER_ELEMENT,n.ptr,s,t,a,!0),u.copy&&z(r,this.view,u.stride*u.BYTES_PER_ELEMENT,u.ptr,i,v,c,!0),i});x.exports=p
});var W=l(function(U,S){
var C=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),F=T(),G=q(),y=new F;y.initializeSync();C(y,"Module",G.bind(null));S.exports=y
});var H=W();module.exports=H;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
