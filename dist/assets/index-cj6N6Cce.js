(function(){const T=document.createElement("link").relList;if(T&&T.supports&&T.supports("modulepreload"))return;for(const _ of document.querySelectorAll('link[rel="modulepreload"]'))d(_);new MutationObserver(_=>{for(const O of _)if(O.type==="childList")for(const Y of O.addedNodes)Y.tagName==="LINK"&&Y.rel==="modulepreload"&&d(Y)}).observe(document,{childList:!0,subtree:!0});function D(_){const O={};return _.integrity&&(O.integrity=_.integrity),_.referrerPolicy&&(O.referrerPolicy=_.referrerPolicy),_.crossOrigin==="use-credentials"?O.credentials="include":_.crossOrigin==="anonymous"?O.credentials="omit":O.credentials="same-origin",O}function d(_){if(_.ep)return;_.ep=!0;const O=D(_);fetch(_.href,O)}})();var Ns={exports:{}},ii={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var um;function _p(){if(um)return ii;um=1;var v=Symbol.for("react.transitional.element"),T=Symbol.for("react.fragment");function D(d,_,O){var Y=null;if(O!==void 0&&(Y=""+O),_.key!==void 0&&(Y=""+_.key),"key"in _){O={};for(var k in _)k!=="key"&&(O[k]=_[k])}else O=_;return _=O.ref,{$$typeof:v,type:d,key:Y,ref:_!==void 0?_:null,props:O}}return ii.Fragment=T,ii.jsx=D,ii.jsxs=D,ii}var cm;function jp(){return cm||(cm=1,Ns.exports=_p()),Ns.exports}var o=jp(),Ts={exports:{}},W={};/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var om;function wp(){if(om)return W;om=1;var v=Symbol.for("react.transitional.element"),T=Symbol.for("react.portal"),D=Symbol.for("react.fragment"),d=Symbol.for("react.strict_mode"),_=Symbol.for("react.profiler"),O=Symbol.for("react.consumer"),Y=Symbol.for("react.context"),k=Symbol.for("react.forward_ref"),V=Symbol.for("react.suspense"),at=Symbol.for("react.memo"),w=Symbol.for("react.lazy"),y=Symbol.for("react.activity"),H=Symbol.for("react.view_transition"),dt=Symbol.iterator;function I(r){return r===null||typeof r!="object"?null:(r=dt&&r[dt]||r["@@iterator"],typeof r=="function"?r:null)}var st={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},K=Object.assign,G={};function Mt(r,E,Q){this.props=r,this.context=E,this.refs=G,this.updater=Q||st}Mt.prototype.isReactComponent={},Mt.prototype.setState=function(r,E){if(typeof r!="object"&&typeof r!="function"&&r!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,r,E,"setState")},Mt.prototype.forceUpdate=function(r){this.updater.enqueueForceUpdate(this,r,"forceUpdate")};function Ft(){}Ft.prototype=Mt.prototype;function nt(r,E,Q){this.props=r,this.context=E,this.refs=G,this.updater=Q||st}var Ot=nt.prototype=new Ft;Ot.constructor=nt,K(Ot,Mt.prototype),Ot.isPureReactComponent=!0;var Ut=Array.isArray;function P(){}var it={H:null,A:null,T:null,S:null},oe=Object.prototype.hasOwnProperty;function ue(r,E,Q){var X=Q.ref;return{$$typeof:v,type:r,key:E,ref:X!==void 0?X:null,props:Q}}function Wt(r,E){return ue(r.type,E,r.props)}function j(r){return typeof r=="object"&&r!==null&&r.$$typeof===v}function pt(r){var E={"=":"=0",":":"=2"};return"$"+r.replace(/[=:]/g,function(Q){return E[Q]})}var Zt=/\/+/g;function M(r,E){return typeof r=="object"&&r!==null&&r.key!=null?pt(""+r.key):E.toString(36)}function N(r){switch(r.status){case"fulfilled":return r.value;case"rejected":throw r.reason;default:switch(typeof r.status=="string"?r.then(P,P):(r.status="pending",r.then(function(E){r.status==="pending"&&(r.status="fulfilled",r.value=E)},function(E){r.status==="pending"&&(r.status="rejected",r.reason=E)})),r.status){case"fulfilled":return r.value;case"rejected":throw r.reason}}throw r}function C(r,E,Q,X,ht){var gt=typeof r;(gt==="undefined"||gt==="boolean")&&(r=null);var bt=!1;if(r===null)bt=!0;else switch(gt){case"bigint":case"string":case"number":bt=!0;break;case"object":switch(r.$$typeof){case v:case T:bt=!0;break;case w:return bt=r._init,C(bt(r._payload),E,Q,X,ht)}}if(bt)return ht=ht(r),bt=X===""?"."+M(r,0):X,Ut(ht)?(Q="",bt!=null&&(Q=bt.replace(Zt,"$&/")+"/"),C(ht,E,Q,"",function(il){return il})):ht!=null&&(j(ht)&&(ht=Wt(ht,Q+(ht.key==null||r&&r.key===ht.key?"":(""+ht.key).replace(Zt,"$&/")+"/")+bt)),E.push(ht)),1;bt=0;var q=X===""?".":X+":";if(Ut(r))for(var F=0;F<r.length;F++)X=r[F],gt=q+M(X,F),bt+=C(X,E,Q,gt,ht);else if(F=I(r),typeof F=="function")for(r=F.call(r),F=0;!(X=r.next()).done;)X=X.value,gt=q+M(X,F++),bt+=C(X,E,Q,gt,ht);else if(gt==="object"){if(typeof r.then=="function")return C(N(r),E,Q,X,ht);throw E=String(r),Error("Objects are not valid as a React child (found: "+(E==="[object Object]"?"object with keys {"+Object.keys(r).join(", ")+"}":E)+"). If you meant to render a collection of children, use an array instead.")}return bt}function B(r,E,Q){if(r==null)return r;var X=[],ht=0;return C(r,X,"","",function(gt){return E.call(Q,gt,ht++)}),X}function Z(r){if(r._status===-1){var E=r._result,Q=E();Q.then(function(X){(r._status===0||r._status===-1)&&(r._status=1,r._result=X,Q.status===void 0&&(Q.status="fulfilled",Q.value=X))},function(X){(r._status===0||r._status===-1)&&(r._status=2,r._result=X,Q.status===void 0&&(Q.status="rejected",Q.reason=X))}),r._status===-1&&(r._status=0,r._result=Q)}if(r._status===1)return r._result.default;throw r._result}var ut=typeof reportError=="function"?reportError:function(r){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var E=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof r=="object"&&r!==null&&typeof r.message=="string"?String(r.message):String(r),error:r});if(!window.dispatchEvent(E))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",r);return}console.error(r)};function Xt(r){var E=it.T,Q={};Q.types=E!==null?E.types:null,it.T=Q;try{var X=r(),ht=it.S;ht!==null&&ht(Q,X),typeof X=="object"&&X!==null&&typeof X.then=="function"&&X.then(P,ut)}catch(gt){ut(gt)}finally{E!==null&&Q.types!==null&&(E.types=Q.types),it.T=E}}function jt(r){var E=it.T;if(E!==null){var Q=E.types;Q===null?E.types=[r]:Q.indexOf(r)===-1&&Q.push(r)}else Xt(jt.bind(null,r))}var ve={map:B,forEach:function(r,E,Q){B(r,function(){E.apply(this,arguments)},Q)},count:function(r){var E=0;return B(r,function(){E++}),E},toArray:function(r){return B(r,function(E){return E})||[]},only:function(r){if(!j(r))throw Error("React.Children.only expected to receive a single React element child.");return r}};return W.Activity=y,W.Children=ve,W.Component=Mt,W.Fragment=D,W.Profiler=_,W.PureComponent=nt,W.StrictMode=d,W.Suspense=V,W.ViewTransition=H,W.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=it,W.__COMPILER_RUNTIME={__proto__:null,c:function(r){return it.H.useMemoCache(r)}},W.addTransitionType=jt,W.cache=function(r){return function(){return r.apply(null,arguments)}},W.cacheSignal=function(){return null},W.cloneElement=function(r,E,Q){if(r==null)throw Error("The argument must be a React element, but you passed "+r+".");var X=K({},r.props),ht=r.key;if(E!=null)for(gt in E.key!==void 0&&(ht=""+E.key),E)!oe.call(E,gt)||gt==="key"||gt==="__self"||gt==="__source"||gt==="ref"&&E.ref===void 0||(X[gt]=E[gt]);var gt=arguments.length-2;if(gt===1)X.children=Q;else if(1<gt){for(var bt=Array(gt),q=0;q<gt;q++)bt[q]=arguments[q+2];X.children=bt}return ue(r.type,ht,X)},W.createContext=function(r){return r={$$typeof:Y,_currentValue:r,_currentValue2:r,_threadCount:0,Provider:null,Consumer:null},r.Provider=r,r.Consumer={$$typeof:O,_context:r},r},W.createElement=function(r,E,Q){var X,ht={},gt=null;if(E!=null)for(X in E.key!==void 0&&(gt=""+E.key),E)oe.call(E,X)&&X!=="key"&&X!=="__self"&&X!=="__source"&&(ht[X]=E[X]);var bt=arguments.length-2;if(bt===1)ht.children=Q;else if(1<bt){for(var q=Array(bt),F=0;F<bt;F++)q[F]=arguments[F+2];ht.children=q}if(r&&r.defaultProps)for(X in bt=r.defaultProps,bt)ht[X]===void 0&&(ht[X]=bt[X]);return ue(r,gt,ht)},W.createRef=function(){return{current:null}},W.forwardRef=function(r){return{$$typeof:k,render:r}},W.isValidElement=j,W.lazy=function(r){return{$$typeof:w,_payload:{_status:-1,_result:r},_init:Z}},W.memo=function(r,E){return{$$typeof:at,type:r,compare:E===void 0?null:E}},W.startTransition=Xt,W.unstable_useCacheRefresh=function(){return it.H.useCacheRefresh()},W.use=function(r){return it.H.use(r)},W.useActionState=function(r,E,Q){return it.H.useActionState(r,E,Q)},W.useCallback=function(r,E){return it.H.useCallback(r,E)},W.useContext=function(r){return it.H.useContext(r)},W.useDebugValue=function(){},W.useDeferredValue=function(r,E){return it.H.useDeferredValue(r,E)},W.useEffect=function(r,E){return it.H.useEffect(r,E)},W.useEffectEvent=function(r){return it.H.useEffectEvent(r)},W.useId=function(){return it.H.useId()},W.useImperativeHandle=function(r,E,Q){return it.H.useImperativeHandle(r,E,Q)},W.useInsertionEffect=function(r,E){return it.H.useInsertionEffect(r,E)},W.useLayoutEffect=function(r,E){return it.H.useLayoutEffect(r,E)},W.useMemo=function(r,E){return it.H.useMemo(r,E)},W.useOptimistic=function(r,E){return it.H.useOptimistic(r,E)},W.useReducer=function(r,E,Q){return it.H.useReducer(r,E,Q)},W.useRef=function(r){return it.H.useRef(r)},W.useState=function(r){return it.H.useState(r)},W.useSyncExternalStore=function(r,E,Q){return it.H.useSyncExternalStore(r,E,Q)},W.useTransition=function(){return it.H.useTransition()},W.version="19.3.0",W}var sm;function Ms(){return sm||(sm=1,Ts.exports=wp()),Ts.exports}var J=Ms(),Es={exports:{}},ui={},_s={exports:{}},js={};/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var fm;function Ap(){return fm||(fm=1,(function(v){function T(N,C){var B=N.length;N.push(C);t:for(;0<B;){var Z=B-1>>>1,ut=N[Z];if(0<_(ut,C))N[Z]=C,N[B]=ut,B=Z;else break t}}function D(N){return N.length===0?null:N[0]}function d(N){if(N.length===0)return null;var C=N[0],B=N.pop();if(B!==C){N[0]=B;t:for(var Z=0,ut=N.length,Xt=ut>>>1;Z<Xt;){var jt=2*(Z+1)-1,ve=N[jt],r=jt+1,E=N[r];if(0>_(ve,B))r<ut&&0>_(E,ve)?(N[Z]=E,N[r]=B,Z=r):(N[Z]=ve,N[jt]=B,Z=jt);else if(r<ut&&0>_(E,B))N[Z]=E,N[r]=B,Z=r;else break t}}return C}function _(N,C){var B=N.sortIndex-C.sortIndex;return B!==0?B:N.id-C.id}if(v.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var O=performance;v.unstable_now=function(){return O.now()}}else{var Y=Date,k=Y.now();v.unstable_now=function(){return Y.now()-k}}var V=[],at=[],w=1,y=null,H=3,dt=!1,I=!1,st=!1,K=!1,G=typeof setTimeout=="function"?setTimeout:null,Mt=typeof clearTimeout=="function"?clearTimeout:null,Ft=typeof setImmediate<"u"?setImmediate:null;function nt(N){for(var C=D(at);C!==null;){if(C.callback===null)d(at);else if(C.startTime<=N)d(at),C.sortIndex=C.expirationTime,T(V,C);else break;C=D(at)}}function Ot(N){if(st=!1,nt(N),!I)if(D(V)!==null)I=!0,Ut||(Ut=!0,j());else{var C=D(at);C!==null&&M(Ot,C.startTime-N)}}var Ut=!1,P=-1,it=5,oe=-1;function ue(){return K?!0:!(v.unstable_now()-oe<it)}function Wt(){if(K=!1,Ut){var N=v.unstable_now();oe=N;var C=!0;try{t:{I=!1,st&&(st=!1,Mt(P),P=-1),dt=!0;var B=H;try{e:{for(nt(N),y=D(V);y!==null&&!(y.expirationTime>N&&ue());){var Z=y.callback;if(typeof Z=="function"){y.callback=null,H=y.priorityLevel;var ut=Z(y.expirationTime<=N);if(N=v.unstable_now(),typeof ut=="function"){y.callback=ut,nt(N),C=!0;break e}y===D(V)&&d(V),nt(N)}else d(V);y=D(V)}if(y!==null)C=!0;else{var Xt=D(at);Xt!==null&&M(Ot,Xt.startTime-N),C=!1}}break t}finally{y=null,H=B,dt=!1}C=void 0}}finally{C?j():Ut=!1}}}var j;if(typeof Ft=="function")j=function(){Ft(Wt)};else if(typeof MessageChannel<"u"){var pt=new MessageChannel,Zt=pt.port2;pt.port1.onmessage=Wt,j=function(){Zt.postMessage(null)}}else j=function(){G(Wt,0)};function M(N,C){P=G(function(){N(v.unstable_now())},C)}v.unstable_IdlePriority=5,v.unstable_ImmediatePriority=1,v.unstable_LowPriority=4,v.unstable_NormalPriority=3,v.unstable_Profiling=null,v.unstable_UserBlockingPriority=2,v.unstable_cancelCallback=function(N){N.callback=null},v.unstable_forceFrameRate=function(N){0>N||125<N?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):it=0<N?Math.floor(1e3/N):5},v.unstable_getCurrentPriorityLevel=function(){return H},v.unstable_next=function(N){switch(H){case 1:case 2:case 3:var C=3;break;default:C=H}var B=H;H=C;try{return N()}finally{H=B}},v.unstable_requestPaint=function(){K=!0},v.unstable_runWithPriority=function(N,C){switch(N){case 1:case 2:case 3:case 4:case 5:break;default:N=3}var B=H;H=N;try{return C()}finally{H=B}},v.unstable_scheduleCallback=function(N,C,B){var Z=v.unstable_now();switch(typeof B=="object"&&B!==null?(B=B.delay,B=typeof B=="number"&&0<B?Z+B:Z):B=Z,N){case 1:var ut=-1;break;case 2:ut=250;break;case 5:ut=1073741823;break;case 4:ut=1e4;break;default:ut=5e3}return ut=B+ut,N={id:w++,callback:C,priorityLevel:N,startTime:B,expirationTime:ut,sortIndex:-1},B>Z?(N.sortIndex=B,T(at,N),D(V)===null&&N===D(at)&&(st?(Mt(P),P=-1):st=!0,M(Ot,B-Z))):(N.sortIndex=ut,T(V,N),I||dt||(I=!0,Ut||(Ut=!0,j()))),N},v.unstable_shouldYield=ue,v.unstable_wrapCallback=function(N){var C=H;return function(){var B=H;H=C;try{return N.apply(this,arguments)}finally{H=B}}}})(js)),js}var rm;function Cp(){return rm||(rm=1,_s.exports=Ap()),_s.exports}var ws={exports:{}},ie={};/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var dm;function Op(){if(dm)return ie;dm=1;var v=Ms();function T(w){var y="https://react.dev/errors/"+w;if(1<arguments.length){y+="?args[]="+encodeURIComponent(arguments[1]);for(var H=2;H<arguments.length;H++)y+="&args[]="+encodeURIComponent(arguments[H])}return"Minified React error #"+w+"; visit "+y+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function D(){}var d={d:{f:D,r:function(){throw Error(T(522))},D,C:D,L:D,m:D,X:D,S:D,M:D},p:0,findDOMNode:null},_=Symbol.for("react.portal"),O=Symbol.for("react.recoverable"),Y=Symbol.for("react.optimistic_key");function k(w,y,H){var dt=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:_,key:dt==null?null:dt===Y?Y:""+dt,children:w,containerInfo:y,implementation:H}}var V=v.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function at(w,y){if(w==="font")return"";if(typeof y=="string")return y==="use-credentials"?y:""}return ie.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=d,ie.browser=function(w){return{$$typeof:O,_reason:w}},ie.createPortal=function(w,y){var H=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!y||y.nodeType!==1&&y.nodeType!==9&&y.nodeType!==11)throw Error(T(299));return k(w,y,null,H)},ie.flushSync=function(w){var y=V.T,H=d.p;try{if(V.T=null,d.p=2,w)return w()}finally{V.T=y,d.p=H,d.d.f()}},ie.preconnect=function(w,y){typeof w=="string"&&(y?(y=y.crossOrigin,y=typeof y=="string"?y==="use-credentials"?y:"":void 0):y=null,d.d.C(w,y))},ie.prefetchDNS=function(w){typeof w=="string"&&d.d.D(w)},ie.preinit=function(w,y){if(typeof w=="string"&&y&&typeof y.as=="string"){var H=y.as,dt=at(H,y.crossOrigin),I=typeof y.integrity=="string"?y.integrity:void 0,st=typeof y.fetchPriority=="string"?y.fetchPriority:void 0;H==="style"?d.d.S(w,typeof y.precedence=="string"?y.precedence:void 0,{crossOrigin:dt,integrity:I,fetchPriority:st}):H==="script"&&d.d.X(w,{crossOrigin:dt,integrity:I,fetchPriority:st,nonce:typeof y.nonce=="string"?y.nonce:void 0})}},ie.preinitModule=function(w,y){if(typeof w=="string")if(typeof y=="object"&&y!==null){if(y.as==null||y.as==="script"){var H=at(y.as,y.crossOrigin);d.d.M(w,{crossOrigin:H,integrity:typeof y.integrity=="string"?y.integrity:void 0,nonce:typeof y.nonce=="string"?y.nonce:void 0,fetchPriority:typeof y.fetchPriority=="string"?y.fetchPriority:void 0})}}else y==null&&d.d.M(w)},ie.preload=function(w,y){if(typeof w=="string"&&typeof y=="object"&&y!==null&&typeof y.as=="string"){var H=y.as,dt=at(H,y.crossOrigin);d.d.L(w,H,{crossOrigin:dt,integrity:typeof y.integrity=="string"?y.integrity:void 0,nonce:typeof y.nonce=="string"?y.nonce:void 0,type:typeof y.type=="string"?y.type:void 0,fetchPriority:typeof y.fetchPriority=="string"?y.fetchPriority:void 0,referrerPolicy:typeof y.referrerPolicy=="string"?y.referrerPolicy:void 0,imageSrcSet:typeof y.imageSrcSet=="string"?y.imageSrcSet:void 0,imageSizes:typeof y.imageSizes=="string"?y.imageSizes:void 0,media:typeof y.media=="string"?y.media:void 0})}},ie.preloadModule=function(w,y){if(typeof w=="string")if(y){var H=at(y.as,y.crossOrigin);d.d.m(w,{as:typeof y.as=="string"&&y.as!=="script"?y.as:void 0,crossOrigin:H,integrity:typeof y.integrity=="string"?y.integrity:void 0,nonce:typeof y.nonce=="string"?y.nonce:void 0,fetchPriority:typeof y.fetchPriority=="string"?y.fetchPriority:void 0})}else d.d.m(w)},ie.requestFormReset=function(w){d.d.r(w)},ie.unstable_batchedUpdates=function(w,y){return w(y)},ie.useFormState=function(w,y,H){return V.H.useFormState(w,y,H)},ie.useFormStatus=function(){return V.H.useHostTransitionStatus()},ie.version="19.3.0",ie}var mm;function Mp(){if(mm)return ws.exports;mm=1;function v(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(v)}catch(T){console.error(T)}}return v(),ws.exports=Op(),ws.exports}/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var hm;function Dp(){if(hm)return ui;hm=1;var v=Cp(),T=Ms(),D=Mp();function d(t){var e="https://react.dev/errors/"+t;if(1<arguments.length){e+="?args[]="+encodeURIComponent(arguments[1]);for(var l=2;l<arguments.length;l++)e+="&args[]="+encodeURIComponent(arguments[l])}return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function _(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function O(t){for(var e=t,l=e;l&&!l.alternate;)e=l,(e.flags&4098)!==0&&(t=e.return),l=e.return;for(;e.return;)e=e.return;return e.tag===3?t:null}function Y(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function k(t){if(t.tag===31){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function V(t){if(O(t)!==t)throw Error(d(188))}function at(t){var e=t.alternate;if(!e){if(e=O(t),e===null)throw Error(d(188));return e!==t?null:t}for(var l=t,a=e;;){var n=l.return;if(n===null)break;var i=n.alternate;if(i===null){if(a=n.return,a!==null){l=a;continue}break}if(n.child===i.child){for(i=n.child;i;){if(i===l)return V(n),t;if(i===a)return V(n),e;i=i.sibling}throw Error(d(188))}if(l.return!==a.return)l=n,a=i;else{for(var u=!1,c=n.child;c;){if(c===l){u=!0,l=n,a=i;break}if(c===a){u=!0,a=n,l=i;break}c=c.sibling}if(!u){for(c=i.child;c;){if(c===l){u=!0,l=i,a=n;break}if(c===a){u=!0,a=i,l=n;break}c=c.sibling}if(!u)throw Error(d(189))}}if(l.alternate!==a)throw Error(d(190))}if(l.tag!==3)throw Error(d(188));return l.stateNode.current===l?t:e}function w(t){var e=t.tag;if(e===5||e===26||e===27||e===6)return t;for(t=t.child;t!==null;){if(e=w(t),e!==null)return e;t=t.sibling}return null}function y(t,e,l,a,n,i){for(;t!==null;){if((t.tag===5||t.tag===27||t.tag===6)&&l(t,a,n,i)||(t.tag!==22||t.memoizedState===null)&&(e||t.tag!==5&&t.tag!==27)&&y(t.child,e,l,a,n,i))return!0;t=t.sibling}return!1}function H(t){for(t=t.return;t!==null;){if(t.tag===3||t.tag===5||t.tag===27)return t;t=t.return}return null}function dt(t){var e=!1;for(t=t.return;t!==null&&(t.tag===4&&(e=!0),!(t.tag===3||t.tag===5||t.tag===27));)t=t.return;return e}function I(t){var e=[null,null],l=H(t);return l===null||st(e,t,l.child,{foundSelf:!1}),e}function st(t,e,l,a){for(;l!==null;){if(l===e)a.foundSelf=!0;else if(l.tag===5||l.tag===27||l.tag===6){if(a.foundSelf)return t[1]=l,!0;t[0]=l}else if((l.tag!==22||l.memoizedState===null)&&st(t,e,l.child,a))return!0;l=l.sibling}return!1}function K(t){switch(t.tag){case 5:case 27:case 6:return t.stateNode;case 3:return t.stateNode.containerInfo;default:throw Error(d(559))}}var G=null,Mt=null;function Ft(t,e,l){return t===l?!0:t===e?(G=t,!0):!1}function nt(t,e,l){return t===l?(Mt=t,!1):t===e?(Mt!==null&&(G=t),!0):!1}function Ot(t){if(t===null)return null;do t=t===null?null:t.return;while(t&&t.tag!==5&&t.tag!==27&&t.tag!==3);return t||null}function Ut(t,e,l){for(var a=0,n=t;n;n=l(n))a++;n=0;for(var i=e;i;i=l(i))n++;for(;0<a-n;)t=l(t),a--;for(;0<n-a;)e=l(e),n--;for(;a--;){if(t===e||e!==null&&t===e.alternate)return t;t=l(t),e=l(e)}return null}var P=Object.assign,it=Symbol.for("react.element"),oe=Symbol.for("react.transitional.element"),ue=Symbol.for("react.portal"),Wt=Symbol.for("react.fragment"),j=Symbol.for("react.strict_mode"),pt=Symbol.for("react.profiler"),Zt=Symbol.for("react.consumer"),M=Symbol.for("react.context"),N=Symbol.for("react.forward_ref"),C=Symbol.for("react.suspense"),B=Symbol.for("react.suspense_list"),Z=Symbol.for("react.memo"),ut=Symbol.for("react.lazy"),Xt=Symbol.for("react.activity"),jt=Symbol.for("react.legacy_hidden"),ve=Symbol.for("react.memo_cache_sentinel"),r=Symbol.for("react.view_transition"),E=Symbol.for("react.recoverable"),Q=Symbol.iterator;function X(t){return t===null||typeof t!="object"?null:(t=Q&&t[Q]||t["@@iterator"],typeof t=="function"?t:null)}var ht=Symbol.for("react.client.reference");function gt(t){if(t==null)return null;if(typeof t=="function")return t.$$typeof===ht?null:t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case Wt:return"Fragment";case pt:return"Profiler";case j:return"StrictMode";case C:return"Suspense";case B:return"SuspenseList";case Xt:return"Activity";case r:return"ViewTransition"}if(typeof t=="object")switch(t.$$typeof){case ue:return"Portal";case M:return t.displayName||"Context";case Zt:return(t._context.displayName||"Context")+".Consumer";case N:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case Z:return e=t.displayName||null,e!==null?e:gt(t.type)||"Memo";case ut:e=t._payload,t=t._init;try{return gt(t(e))}catch{}}return null}var bt=Array.isArray,q=T.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,F=D.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,il={pending:!1,data:null,method:null,action:null},Lu=[],va=-1;function ke(t){return{current:t}}function It(t){0>va||(t.current=Lu[va],Lu[va]=null,va--)}function wt(t,e){va++,Lu[va]=t.current,t.current=e}var Ke=ke(null),rn=ke(null),Sl=ke(null),si=ke(null);function fi(t,e){switch(wt(Sl,e),wt(rn,t),wt(Ke,null),e.nodeType){case 9:case 11:t=(t=e.documentElement)&&(t=t.namespaceURI)?p0(t):0;break;default:if(t=e.tagName,e=e.namespaceURI)e=p0(e),t=g0(e,t);else switch(t){case"svg":t=1;break;case"math":t=2;break;default:t=0}}It(Ke),wt(Ke,t)}function ya(){It(Ke),It(rn),It(Sl)}function Qu(t){var e=t.memoizedState;e!==null&&(on._currentValue=e.memoizedState,wt(si,t)),e=Ke.current;var l=g0(e,t.type);e!==l&&(wt(rn,t),wt(Ke,l))}function ri(t){rn.current===t&&(It(Ke),It(rn)),si.current===t&&(It(si),on._currentValue=il)}var Xu,Hs;function zl(t){if(Xu===void 0)try{throw Error()}catch(l){var e=l.stack.trim().match(/\n( *(at )?)/);Xu=e&&e[1]||"",Hs=-1<l.stack.indexOf(`
    at`)?" (<anonymous>)":-1<l.stack.indexOf("@")?"@unknown:0:0":""}return`
`+Xu+t+Hs}var Vu=!1;function Zu(t,e){if(!t||Vu)return"";Vu=!0;var l=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var a={DetermineComponentFrameRoot:function(){try{if(e){var z=function(){throw Error()};if(Object.defineProperty(z.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(z,[])}catch(A){var m=A}Reflect.construct(t,[],z)}else{try{z.call()}catch(A){m=A}z=!1;try{var x=Object.getOwnPropertyDescriptor(t.prototype,"props");Object.defineProperty(t.prototype,"props",{configurable:!0,set:function(){throw Error()}}),z=!0,new t}finally{z&&(x!==void 0?Object.defineProperty(t.prototype,"props",x):delete t.prototype.props)}}}else{try{throw Error()}catch(A){m=A}(z=t())&&typeof z.catch=="function"&&z.catch(function(){})}}catch(A){if(A&&m&&typeof A.stack=="string")return[A.stack,m.stack]}return[null,null]}};a.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var n=Object.getOwnPropertyDescriptor(a.DetermineComponentFrameRoot,"name");n&&n.configurable&&Object.defineProperty(a.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var i=a.DetermineComponentFrameRoot(),u=i[0],c=i[1];if(u&&c){var s=u.split(`
`),p=c.split(`
`);for(n=a=0;a<s.length&&!s[a].includes("DetermineComponentFrameRoot");)a++;for(;n<p.length&&!p[n].includes("DetermineComponentFrameRoot");)n++;if(a===s.length||n===p.length)for(a=s.length-1,n=p.length-1;1<=a&&0<=n&&s[a]!==p[n];)n--;for(;1<=a&&0<=n;a--,n--)if(s[a]!==p[n]){if(a!==1||n!==1)do if(a--,n--,0>n||s[a]!==p[n]){var b=`
`+s[a].replace(" at new "," at ");return t.displayName&&b.includes("<anonymous>")&&(b=b.replace("<anonymous>",t.displayName)),b}while(1<=a&&0<=n);break}}}finally{Vu=!1,Error.prepareStackTrace=l}return(l=t?t.displayName||t.name:"")?zl(l):""}function Cm(t,e){switch(t.tag){case 26:case 27:case 5:return zl(t.type);case 16:return zl("Lazy");case 13:return t.child!==e&&e!==null?zl("Suspense Fallback"):zl("Suspense");case 19:return zl("SuspenseList");case 0:case 15:return Zu(t.type,!1);case 11:return Zu(t.type.render,!1);case 1:return Zu(t.type,!0);case 31:return zl("Activity");case 30:return zl("ViewTransition");default:return""}}function Rs(t){try{var e="",l=null;do e+=Cm(t,l),l=t,t=t.return;while(t);return e}catch(a){return`
Error generating stack: `+a.message+`
`+a.stack}}var ku=Object.prototype.hasOwnProperty,Ku=v.unstable_scheduleCallback,Ju=v.unstable_cancelCallback,Om=v.unstable_shouldYield,Mm=v.unstable_requestPaint,ye=v.unstable_now,Dm=v.unstable_getCurrentPriorityLevel,Bs=v.unstable_ImmediatePriority,qs=v.unstable_UserBlockingPriority,di=v.unstable_NormalPriority,Um=v.unstable_LowPriority,Ys=v.unstable_IdlePriority,Hm=v.log,Rm=v.unstable_setDisableYieldValue,dn=null,Se=null;function Nl(t){if(typeof Hm=="function"&&Rm(t),Se&&typeof Se.setStrictMode=="function")try{Se.setStrictMode(dn,t)}catch{}}var ze=Math.clz32?Math.clz32:Ym,Bm=Math.log,qm=Math.LN2;function Ym(t){return t>>>=0,t===0?32:31-(Bm(t)/qm|0)|0}var mi=256,hi=262144,pi=4194304;function Fl(t){var e=t&42;if(e!==0)return e;switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return t&-t;case 262144:case 524288:case 1048576:case 2097152:return t&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return t&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return t}}function gi(t,e,l){var a=t.pendingLanes;if(a===0)return 0;var n=0,i=t.suspendedLanes,u=t.pingedLanes;t=t.warmLanes;var c=a&134217727;return c!==0?(a=c&~i,a!==0?n=Fl(a):(u&=c,u!==0?n=Fl(u):l||(l=c&~t,l!==0&&(n=Fl(l))))):(c=a&~i,c!==0?n=Fl(c):u!==0?n=Fl(u):l||(l=a&~t,l!==0&&(n=Fl(l)))),n===0?0:e!==0&&e!==n&&(e&i)===0&&(i=n&-n,l=e&-e,i>=l||i===32&&(l&4194048)!==0)?e:n}function mn(t,e){return(t.pendingLanes&~(t.suspendedLanes&~t.pingedLanes)&e)===0}function Gs(t,e){(e&8)!==0&&(e|=e&32);var l=t.entangledLanes;if(l!==0)for(t=t.entanglements,l&=e;0<l;){var a=31-ze(l),n=1<<a;e|=t[a],l&=~n}return e}function Gm(t,e){switch(t){case 1:case 2:case 4:case 8:case 64:return e+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Ls(){var t=pi;return pi<<=1,(pi&62914560)===0&&(pi=4194304),t}function $u(t){for(var e=[],l=0;31>l;l++)e.push(t);return e}function hn(t,e){t.pendingLanes|=e,e!==268435456&&(t.suspendedLanes=0,t.pingedLanes=0,t.warmLanes=0)}function Lm(t,e,l,a,n,i){var u=t.pendingLanes;t.pendingLanes=l,t.suspendedLanes=0,t.pingedLanes=0,t.warmLanes=0,t.expiredLanes&=l,t.entangledLanes&=l,t.errorRecoveryDisabledLanes&=l,t.shellSuspendCounter=0;var c=t.entanglements,s=t.expirationTimes,p=t.hiddenUpdates;for(l=u&~l;0<l;){var b=31-ze(l),z=1<<b;c[b]=0,s[b]=-1;var m=p[b];if(m!==null)for(p[b]=null,b=0;b<m.length;b++){var x=m[b];x!==null&&(x.lane&=-536870913)}l&=~z}a!==0&&Qs(t,a,0),i!==0&&n===0&&t.tag!==0&&(t.suspendedLanes|=i&~(u&~e))}function Qs(t,e,l){t.pendingLanes|=e,t.suspendedLanes&=~e;var a=31-ze(e);t.entangledLanes|=e,t.entanglements[a]=t.entanglements[a]|1073741824|l&261930}function Xs(t,e){var l=t.entangledLanes|=e;for(t=t.entanglements;l;){var a=31-ze(l),n=1<<a;n&e|t[a]&e&&(t[a]|=e),l&=~n}}function Vs(t,e){var l=e&-e;return l=(l&42)!==0?1:Fu(l),(l&(t.suspendedLanes|e))!==0?0:l}function Fu(t){switch(t){case 2:t=1;break;case 8:t=4;break;case 32:t=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:t=128;break;case 268435456:t=134217728;break;default:t=0}return t}function Wu(t){return t&=-t,2<t?8<t?(t&134217727)!==0?32:268435456:8:2}function Zs(){var t=F.p;return t!==0?t:(t=window.event,t===void 0?32:P0(t.type))}function ks(t,e){var l=F.p;try{return F.p=t,e()}finally{F.p=l}}var ul=Math.random().toString(36).slice(2),Pt="__reactFiber$"+ul,me="__reactProps$"+ul,Sa="__reactContainer$"+ul,Ks="__reactEvents$"+ul,Qm="__reactListeners$"+ul,Xm="__reactHandles$"+ul,Js="__reactResources$"+ul,pn="__reactMarker$"+ul,xi="__reactLoad$"+ul;function bi(t){delete t[Pt],delete t[me],delete t[Qm],delete t[Xm]}function Wl(t){var e;if(e=t[Pt])return e;for(var l=t.parentNode;l;){if(e=l[Sa]||l[Pt]){if(l=e.alternate,e.child!==null||l!==null&&l.child!==null)for(t=D0(t);t!==null;){if(l=t[Pt])return l;t=D0(t)}return e}t=l,l=t.parentNode}return null}function za(t){if(t=t[Pt]||t[Sa]){var e=t.tag;if(e===5||e===6||e===13||e===31||e===26||e===27||e===3)return t}return null}function gn(t){var e=t.tag;if(e===5||e===26||e===27||e===6)return t.stateNode;throw Error(d(33))}function Na(t){var e=t[Js];return e||(e=t[Js]={hoistableStyles:new Map,hoistableScripts:new Map}),e}function kt(t){t[pn]=!0}function $s(t){t[xi]=void 0}var Fs=new Set,Ws={};function Il(t,e){Ta(t,e),Ta(t+"Capture",e)}function Ta(t,e){for(Ws[t]=e,t=0;t<e.length;t++)Fs.add(e[t])}var Vm=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),Is={},Ps={};function Zm(t){return ku.call(Ps,t)?!0:ku.call(Is,t)?!1:Vm.test(t)?Ps[t]=!0:(Is[t]=!0,!1)}var xt=!1;function tf(){var t=xt;return xt=!1,t}function vi(t,e,l){if(Zm(e))if(l===null)t.removeAttribute(e);else{switch(typeof l){case"undefined":case"function":case"symbol":t.removeAttribute(e);return;case"boolean":var a=e.toLowerCase().slice(0,5);if(a!=="data-"&&a!=="aria-"){t.removeAttribute(e);return}}t.setAttribute(e,l)}}function yi(t,e,l){if(l===null)t.removeAttribute(e);else{switch(typeof l){case"undefined":case"function":case"symbol":case"boolean":t.removeAttribute(e);return}t.setAttribute(e,l)}}function cl(t,e,l,a){if(a===null)t.removeAttribute(l);else{switch(typeof a){case"undefined":case"function":case"symbol":case"boolean":t.removeAttribute(l);return}t.setAttributeNS(e,l,a)}}function Ne(t){switch(typeof t){case"bigint":case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function ef(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function km(t,e,l){var a=Object.getOwnPropertyDescriptor(t.constructor.prototype,e);if(!t.hasOwnProperty(e)&&typeof a<"u"&&typeof a.get=="function"&&typeof a.set=="function"){var n=a.get,i=a.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return n.call(this)},set:function(u){l=""+u,i.call(this,u)}}),Object.defineProperty(t,e,{enumerable:a.enumerable}),{getValue:function(){return l},setValue:function(u){l=""+u},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function Iu(t){if(!t._valueTracker){var e=ef(t)?"checked":"value";t._valueTracker=km(t,e,""+t[e])}}function lf(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var l=e.getValue(),a="";return t&&(a=ef(t)?t.checked?"true":"false":t.value),t=a,t!==l?(e.setValue(t),!0):!1}var Km=/[\n"\\]/g;function Oe(t){return t.replace(Km,function(e){return"\\"+e.charCodeAt(0).toString(16)+" "})}function Pu(t,e,l,a,n,i,u,c){t.name="",u!=null&&typeof u!="function"&&typeof u!="symbol"&&typeof u!="boolean"?t.type=u:t.removeAttribute("type"),e!=null?u==="number"?(e===0&&t.value===""||t.value!=e)&&(t.value=""+Ne(e)):t.value!==""+Ne(e)&&(t.value=""+Ne(e)):u!=="submit"&&u!=="reset"||t.removeAttribute("value"),e!=null?u==="number"&&t.value==e?tc(t,Ne(t.value)):tc(t,Ne(e)):l!=null?tc(t,Ne(l)):a!=null&&t.removeAttribute("value"),n==null&&i!=null&&(t.defaultChecked=!!i),n!=null&&(t.checked=n&&typeof n!="function"&&typeof n!="symbol"),c!=null&&typeof c!="function"&&typeof c!="symbol"&&typeof c!="boolean"?t.name=""+Ne(c):t.removeAttribute("name")}function af(t,e,l,a,n,i,u,c){if(i!=null&&typeof i!="function"&&typeof i!="symbol"&&typeof i!="boolean"&&(t.type=i),e!=null||l!=null){if(!(i!=="submit"&&i!=="reset"||e!=null)){Iu(t);return}l=l!=null?""+Ne(l):"",e=e!=null?""+Ne(e):l,c||e===t.value||(t.value=e),t.defaultValue=e}a=a??n,a=typeof a!="function"&&typeof a!="symbol"&&!!a,t.checked=c?t.checked:!!a,t.defaultChecked=!!a,u!=null&&typeof u!="function"&&typeof u!="symbol"&&typeof u!="boolean"&&(t.name=u),Iu(t)}function tc(t,e){t.defaultValue!==""+e&&(t.defaultValue=""+e)}function Ea(t,e,l,a){if(t=t.options,e){e={};for(var n=0;n<l.length;n++)e["$"+l[n]]=!0;for(l=0;l<t.length;l++)n=e.hasOwnProperty("$"+t[l].value),t[l].selected!==n&&(t[l].selected=n),n&&a&&(t[l].defaultSelected=!0)}else{for(l=""+Ne(l),e=null,n=0;n<t.length;n++){if(t[n].value===l){t[n].selected=!0,a&&(t[n].defaultSelected=!0);return}e!==null||t[n].disabled||(e=t[n])}e!==null&&(e.selected=!0)}}function nf(t,e,l){if(e!=null&&(e=""+Ne(e),e!==t.value&&(t.value=e),l==null)){t.defaultValue!==e&&(t.defaultValue=e);return}t.defaultValue=l!=null?""+Ne(l):""}function uf(t,e,l,a){if(e==null){if(a!=null){if(l!=null)throw Error(d(92));if(bt(a)){if(1<a.length)throw Error(d(93));a=a[0]}l=a}l==null&&(l=""),e=l}l=Ne(e),t.defaultValue=l,a=t.textContent,a===l&&a!==""&&a!==null&&(t.value=a),Iu(t)}function _a(t,e){if(e){var l=t.firstChild;if(l&&l===t.lastChild&&l.nodeType===3){l.nodeValue=e;return}}t.textContent=e}var Jm=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function cf(t,e,l){var a=e.indexOf("--")===0;l==null||typeof l=="boolean"||l===""?a?t.setProperty(e,""):e==="float"?t.cssFloat="":t[e]="":a?t.setProperty(e,l):typeof l!="number"||l===0||Jm.has(e)?e==="float"?t.cssFloat=l:t[e]=(""+l).trim():t[e]=l+"px"}function of(t,e,l){if(e!=null&&typeof e!="object")throw Error(d(62));if(t=t.style,l!=null){for(var a in l)!l.hasOwnProperty(a)||e!=null&&e.hasOwnProperty(a)||(a.indexOf("--")===0?t.setProperty(a,""):a==="float"?t.cssFloat="":t[a]="",xt=!0);for(var n in e)a=e[n],e.hasOwnProperty(n)&&l[n]!==a&&(cf(t,n,a),xt=!0)}else for(var i in e)e.hasOwnProperty(i)&&cf(t,i,e[i])}function ec(t){if(t.indexOf("-")===-1)return!1;switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var $m=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["maskType","mask-type"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),Fm=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function Si(t){return Fm.test(""+t)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":t}function Je(){}var lc=null;function ac(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var ja=null,wa=null;function sf(t){var e=za(t);if(e&&(t=e.stateNode)){var l=t[me]||null;t:switch(t=e.stateNode,e.type){case"input":if(Pu(t,l.value,l.defaultValue,l.defaultValue,l.checked,l.defaultChecked,l.type,l.name),e=l.name,l.type==="radio"&&e!=null){for(l=t;l.parentNode;)l=l.parentNode;for(l=l.querySelectorAll('input[name="'+Oe(""+e)+'"][type="radio"]'),e=0;e<l.length;e++){var a=l[e];if(a!==t&&a.form===t.form){var n=a[me]||null;if(!n)throw Error(d(90));Pu(a,n.value,n.defaultValue,n.defaultValue,n.checked,n.defaultChecked,n.type,n.name)}}for(e=0;e<l.length;e++)a=l[e],a.form===t.form&&lf(a)}break t;case"textarea":nf(t,l.value,l.defaultValue);break t;case"select":e=l.value,e!=null&&Ea(t,!!l.multiple,e,!1)}}}var nc=!1;function ff(t,e,l){if(nc)return t(e,l);nc=!0;try{var a=t(e);return a}finally{if(nc=!1,(ja!==null||wa!==null)&&(Su(),ja&&(e=ja,t=wa,wa=ja=null,sf(e),t)))for(e=0;e<t.length;e++)sf(t[e])}}function xn(t,e){var l=t.stateNode;if(l===null)return null;var a=l[me]||null;if(a===null)return null;l=a[e];t:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(a=!a.disabled)||(t=t.type,a=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!a;break t;default:t=!1}if(t)return null;if(l&&typeof l!="function")throw Error(d(231,e,typeof l));return l}var ol=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),ic=!1;if(ol)try{var bn={};Object.defineProperty(bn,"passive",{get:function(){ic=!0}}),window.addEventListener("test",bn,bn),window.removeEventListener("test",bn,bn)}catch{ic=!1}var Tl=null,uc=null,zi=null;function rf(){if(zi)return zi;var t,e=uc,l=e.length,a,n="value"in Tl?Tl.value:Tl.textContent,i=n.length;for(t=0;t<l&&e[t]===n[t];t++);var u=l-t;for(a=1;a<=u&&e[l-a]===n[i-a];a++);return zi=n.slice(t,1<a?1-a:void 0)}function Ni(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function Ti(){return!0}function df(){return!1}function se(t){function e(l,a,n,i,u){this._reactName=l,this._targetInst=n,this.type=a,this.nativeEvent=i,this.target=u,this.currentTarget=null;for(var c in t)t.hasOwnProperty(c)&&(l=t[c],this[c]=l?l(i):i[c]);return this.isDefaultPrevented=(i.defaultPrevented!=null?i.defaultPrevented:i.returnValue===!1)?Ti:df,this.isPropagationStopped=df,this}return P(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var l=this.nativeEvent;l&&(l.preventDefault?l.preventDefault():typeof l.returnValue!="unknown"&&(l.returnValue=!1),this.isDefaultPrevented=Ti)},stopPropagation:function(){var l=this.nativeEvent;l&&(l.stopPropagation?l.stopPropagation():typeof l.cancelBubble!="unknown"&&(l.cancelBubble=!0),this.isPropagationStopped=Ti)},persist:function(){},isPersistent:Ti}),e}var El={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Ei=se(El),vn=P({},El,{view:0,detail:0}),Wm=se(vn),cc,oc,yn,_i=P({},vn,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:fc,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==yn&&(yn&&t.type==="mousemove"?(cc=t.screenX-yn.screenX,oc=t.screenY-yn.screenY):oc=cc=0,yn=t),cc)},movementY:function(t){return"movementY"in t?t.movementY:oc}}),mf=se(_i),Im=P({},_i,{dataTransfer:0}),Pm=se(Im),th=P({},vn,{relatedTarget:0}),sc=se(th),eh=P({},El,{animationName:0,elapsedTime:0,pseudoElement:0}),lh=se(eh),ah=P({},El,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),nh=se(ah),ih=P({},El,{data:0}),hf=se(ih),uh={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},ch={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},oh={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function sh(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=oh[t])?!!e[t]:!1}function fc(){return sh}var fh=P({},vn,{key:function(t){if(t.key){var e=uh[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=Ni(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?ch[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:fc,charCode:function(t){return t.type==="keypress"?Ni(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?Ni(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),rh=se(fh),dh=P({},_i,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),pf=se(dh),mh=P({},El,{submitter:0}),hh=se(mh),ph=P({},vn,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:fc}),gh=se(ph),xh=P({},El,{propertyName:0,elapsedTime:0,pseudoElement:0}),bh=se(xh),vh=P({},_i,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),yh=se(vh),Sh=P({},El,{newState:0,oldState:0,source:0}),zh=se(Sh),Nh=[9,13,27,32],rc=ol&&"CompositionEvent"in window,Sn=null;ol&&"documentMode"in document&&(Sn=document.documentMode);var Th=ol&&"TextEvent"in window&&!Sn,gf=ol&&(!rc||Sn&&8<Sn&&11>=Sn),xf=" ",bf=!1;function vf(t,e){switch(t){case"keyup":return Nh.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function yf(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var Aa=!1;function Eh(t,e){switch(t){case"compositionend":return yf(e);case"keypress":return e.which!==32?null:(bf=!0,xf);case"textInput":return t=e.data,t===xf&&bf?null:t;default:return null}}function _h(t,e){if(Aa)return t==="compositionend"||!rc&&vf(t,e)?(t=rf(),zi=uc=Tl=null,Aa=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return gf&&e.locale!=="ko"?null:e.data;default:return null}}var jh={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Sf(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!jh[t.type]:e==="textarea"}function zf(t,e,l,a){ja?wa?wa.push(a):wa=[a]:ja=a,e=ju(e,"onChange"),0<e.length&&(l=new Ei("onChange","change",null,l,a),t.push({event:l,listeners:e}))}var zn=null,Nn=null;function wh(t){s0(t,0)}function ji(t){var e=gn(t);if(lf(e))return t}function Nf(t,e){if(t==="change")return e}var Tf=!1;if(ol){var dc;if(ol){var mc="oninput"in document;if(!mc){var Ef=document.createElement("div");Ef.setAttribute("oninput","return;"),mc=typeof Ef.oninput=="function"}dc=mc}else dc=!1;Tf=dc&&(!document.documentMode||9<document.documentMode)}function _f(){zn&&(zn.detachEvent("onpropertychange",jf),Nn=zn=null)}function jf(t){if(t.propertyName==="value"&&ji(Nn)){var e=[];zf(e,Nn,t,ac(t)),ff(wh,e)}}function Ah(t,e,l){t==="focusin"?(_f(),zn=e,Nn=l,zn.attachEvent("onpropertychange",jf)):t==="focusout"&&_f()}function Ch(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return ji(Nn)}function Oh(t,e){if(t==="click")return ji(e)}function Mh(t,e){if(t==="input"||t==="change")return ji(e)}function Dh(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var Te=typeof Object.is=="function"?Object.is:Dh;function Tn(t,e){if(Te(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var l=Object.keys(t),a=Object.keys(e);if(l.length!==a.length)return!1;for(a=0;a<l.length;a++){var n=l[a];if(!ku.call(e,n)||!Te(t[n],e[n]))return!1}return!0}function hc(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function wf(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function Af(t,e){var l=wf(t);t=0;for(var a;l;){if(l.nodeType===3){if(a=t+l.textContent.length,t<=e&&a>=e)return{node:l,offset:e-t};t=a}t:{for(;l;){if(l.nextSibling){l=l.nextSibling;break t}l=l.parentNode}l=void 0}l=wf(l)}}function Cf(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?Cf(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function Of(t){t=t!=null&&t.ownerDocument!=null&&t.ownerDocument.defaultView!=null?t.ownerDocument.defaultView:window;for(var e=hc(t.document);e instanceof t.HTMLIFrameElement;){try{var l=typeof e.contentWindow.location.href=="string"}catch{l=!1}if(l)t=e.contentWindow;else break;e=hc(t.document)}return e}function pc(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}var Uh=ol&&"documentMode"in document&&11>=document.documentMode,Ca=null,gc=null,En=null,xc=!1;function Mf(t,e,l){var a=l.window===l?l.document:l.nodeType===9?l:l.ownerDocument;xc||Ca==null||Ca!==hc(a)||(a=Ca,"selectionStart"in a&&pc(a)?a={start:a.selectionStart,end:a.selectionEnd}:(a=(a.ownerDocument&&a.ownerDocument.defaultView||window).getSelection(),a={anchorNode:a.anchorNode,anchorOffset:a.anchorOffset,focusNode:a.focusNode,focusOffset:a.focusOffset}),En&&Tn(En,a)||(En=a,a=ju(gc,"onSelect"),0<a.length&&(e=new Ei("onSelect","select",null,e,l),t.push({event:e,listeners:a}),e.target=Ca)))}function Pl(t,e){var l={};return l[t.toLowerCase()]=e.toLowerCase(),l["Webkit"+t]="webkit"+e,l["Moz"+t]="moz"+e,l}var Oa={animationend:Pl("Animation","AnimationEnd"),animationiteration:Pl("Animation","AnimationIteration"),animationstart:Pl("Animation","AnimationStart"),transitionrun:Pl("Transition","TransitionRun"),transitionstart:Pl("Transition","TransitionStart"),transitioncancel:Pl("Transition","TransitionCancel"),transitionend:Pl("Transition","TransitionEnd")},bc={},Df={};ol&&(Df=document.createElement("div").style,"AnimationEvent"in window||(delete Oa.animationend.animation,delete Oa.animationiteration.animation,delete Oa.animationstart.animation),"TransitionEvent"in window||delete Oa.transitionend.transition);function ta(t){if(bc[t])return bc[t];if(!Oa[t])return t;var e=Oa[t],l;for(l in e)if(e.hasOwnProperty(l)&&l in Df)return bc[t]=e[l];return t}var Uf=ta("animationend"),Hf=ta("animationiteration"),Rf=ta("animationstart"),Hh=ta("transitionrun"),Rh=ta("transitionstart"),Bh=ta("transitioncancel"),Bf=ta("transitionend"),qf=new Map,vc="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error fullscreenChange fullscreenError gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");vc.push("scrollEnd");function Ge(t,e){qf.set(t,e),Il(e,[t])}var qh=0;function sl(t,e){if(t.name!=null&&t.name!=="auto")return t.name;if(e.autoName!==null)return e.autoName;t=Ve.identifierPrefix;var l=qh++;return t="_"+t+"t_"+l.toString(32)+"_",e.autoName=t}function Yf(t){if(t==null||typeof t=="string")return t;var e=null,l=Wa;if(l!==null)for(var a=0;a<l.length;a++){var n=t[l[a]];if(n!=null){if(n==="none")return"none";e=e==null?n:e+(" "+n)}}return e??t.default}function fl(t,e){return t=Yf(t),e=Yf(e),e==null?t==="auto"?null:t:e==="auto"?null:e}var wi=typeof reportError=="function"?reportError:function(t){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var e=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof t=="object"&&t!==null&&typeof t.message=="string"?String(t.message):String(t),error:t});if(!window.dispatchEvent(e))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",t);return}console.error(t)},Me=[],Ma=0,yc=0;function Ai(){for(var t=Ma,e=yc=Ma=0;e<t;){var l=Me[e];Me[e++]=null;var a=Me[e];Me[e++]=null;var n=Me[e];Me[e++]=null;var i=Me[e];if(Me[e++]=null,a!==null&&n!==null){var u=a.pending;u===null?n.next=n:(n.next=u.next,u.next=n),a.pending=n}i!==0&&Gf(l,n,i)}}function Ci(t,e,l,a){Me[Ma++]=t,Me[Ma++]=e,Me[Ma++]=l,Me[Ma++]=a,yc|=a,t.lanes|=a,t=t.alternate,t!==null&&(t.lanes|=a)}function Sc(t,e,l,a){return Ci(t,e,l,a),Oi(t)}function ea(t,e){return Ci(t,null,null,e),Oi(t)}function Gf(t,e,l){t.lanes|=l;var a=t.alternate;a!==null&&(a.lanes|=l);for(var n=!1,i=t.return;i!==null;)i.childLanes|=l,a=i.alternate,a!==null&&(a.childLanes|=l),i.tag===22&&(t=i.stateNode,t===null||t._visibility&1||(n=!0)),t=i,i=i.return;return t.tag===3?(i=t.stateNode,n&&e!==null&&(n=31-ze(l),t=i.hiddenUpdates,a=t[n],a===null?t[n]=[e]:a.push(e),e.lane=l|536870912),i):null}function Oi(t){if(50<Kn)throw Kn=0,yu=null,Error(d(185));for(var e=t.return;e!==null;)t=e,e=t.return;return t.tag===3?t.stateNode:null}var Da={};function Yh(t,e,l,a){this.tag=t,this.key=l,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=a,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function he(t,e,l,a){return new Yh(t,e,l,a)}function zc(t){return t=t.prototype,!(!t||!t.isReactComponent)}function rl(t,e){var l=t.alternate;return l===null?(l=he(t.tag,e,t.key,t.mode),l.elementType=t.elementType,l.type=t.type,l.stateNode=t.stateNode,l.alternate=t,t.alternate=l):(l.pendingProps=e,l.type=t.type,l.flags=0,l.subtreeFlags=0,l.deletions=null),l.flags=t.flags&1206910976,l.childLanes=t.childLanes,l.lanes=t.lanes,l.child=t.child,l.memoizedProps=t.memoizedProps,l.memoizedState=t.memoizedState,l.updateQueue=t.updateQueue,e=t.dependencies,l.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},l.sibling=t.sibling,l.index=t.index,l.ref=t.ref,l.refCleanup=t.refCleanup,l}function Lf(t,e){t.flags&=1206910978;var l=t.alternate;return l===null?(t.childLanes=0,t.lanes=e,t.child=null,t.subtreeFlags=0,t.memoizedProps=null,t.memoizedState=null,t.updateQueue=null,t.dependencies=null,t.stateNode=null):(t.childLanes=l.childLanes,t.lanes=l.lanes,t.child=l.child,t.subtreeFlags=0,t.deletions=null,t.memoizedProps=l.memoizedProps,t.memoizedState=l.memoizedState,t.updateQueue=l.updateQueue,t.type=l.type,e=l.dependencies,t.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),t}function Mi(t,e,l,a,n,i){var u=0;if(a=t,typeof a=="function")zc(a)&&(u=1);else if(typeof a=="string")u=mp(t,l,Ke.current)?26:t==="html"||t==="head"||t==="body"?27:5;else t:switch(a){case Xt:return t=he(31,l,e,n),t.elementType=Xt,t.lanes=i,t;case Wt:return la(l.children,n,i,e);case j:u=8,n|=24;break;case pt:return t=he(12,l,e,n|2),t.elementType=pt,t.lanes=i,t;case C:return t=he(13,l,e,n),t.elementType=C,t.lanes=i,t;case B:return t=he(19,l,e,n),t.elementType=B,t.lanes=i,t;case jt:case r:return t=n|32,t=he(30,l,e,t),t.elementType=r,t.lanes=i,t.stateNode={autoName:null,paired:null,clones:null,ref:null},t;default:if(typeof a=="object"&&a!==null)switch(a.$$typeof){case M:u=10;break t;case Zt:u=9;break t;case N:u=11;break t;case Z:u=14;break t;case ut:u=16,a=null;break t}u=29,l=Error(d(130,t===null?"null":typeof t,"")),a=null}return e=he(u,l,e,n),e.elementType=t,e.type=a,e.lanes=i,e}function la(t,e,l,a){return t=he(7,t,a,e),t.lanes=l,t}function Nc(t,e,l){return t=he(6,t,null,e),t.lanes=l,t}function Qf(t){var e=he(18,null,null,0);return e.stateNode=t,e}function Tc(t,e,l){return e=he(4,t.children!==null?t.children:[],t.key,e),e.lanes=l,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}var Xf=new WeakMap;function De(t,e){if(typeof t=="object"&&t!==null){var l=Xf.get(t);return l!==void 0?l:(e={value:t,source:e,stack:Rs(e)},Xf.set(t,e),e)}return{value:t,source:e,stack:Rs(e)}}var Ua=[],Ha=0,Di=null,_n=0,Ue=[],He=0,_l=null,$e=1,Fe="";function dl(t,e){Ua[Ha++]=_n,Ua[Ha++]=Di,Di=t,_n=e}function Vf(t,e,l){Ue[He++]=$e,Ue[He++]=Fe,Ue[He++]=_l,_l=t;var a=$e;t=Fe;var n=32-ze(a)-1;a&=~(1<<n),l+=1;var i=32-ze(e)+n;if(30<i){var u=n-n%5;i=(a&(1<<u)-1).toString(32),a>>=u,n-=u,$e=1<<32-ze(e)+n|l<<n|a,Fe=i+t}else $e=1<<i|l<<n|a,Fe=t}function Ui(t){t.return!==null&&(dl(t,1),Vf(t,1,0))}function Ec(t){for(;t===Di;)Di=Ua[--Ha],Ua[Ha]=null,_n=Ua[--Ha],Ua[Ha]=null;for(;t===_l;)_l=Ue[--He],Ue[He]=null,Fe=Ue[--He],Ue[He]=null,$e=Ue[--He],Ue[He]=null}function Zf(t,e){Ue[He++]=$e,Ue[He++]=Fe,Ue[He++]=_l,$e=e.id,Fe=e.overflow,_l=t}var Kt=null,At=null,lt=!1,jl=null,Re=!1,_c=Error(d(519));function wl(t){var e=Error(d(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?"text":"HTML",""));throw jn(De(e,t)),_c}function kf(t){var e=t.stateNode,l=t.type,a=t.memoizedProps;switch(e[Pt]=t,e[me]=a,l){case"dialog":ot("cancel",e),ot("close",e);break;case"iframe":case"object":case"embed":ot("load",e);break;case"video":case"audio":for(l=0;l<$n.length;l++)ot($n[l],e);break;case"source":ot("error",e);break;case"img":case"image":case"link":ot("error",e),ot("load",e);break;case"details":ot("toggle",e);break;case"input":ot("invalid",e),af(e,a.value,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name,!0);break;case"select":ot("invalid",e);break;case"textarea":ot("invalid",e),uf(e,a.value,a.defaultValue,a.children)}l=a.children,typeof l!="string"&&typeof l!="number"&&typeof l!="bigint"||e.textContent===""+l||a.suppressHydrationWarning===!0||m0(e.textContent,l)?(a.popover!=null&&(ot("beforetoggle",e),ot("toggle",e)),a.onScroll!=null&&ot("scroll",e),a.onScrollEnd!=null&&ot("scrollend",e),a.onClick!=null&&(e.onclick=Je),e=!0):e=!1,e||wl(t,!0)}function Hi(t){for(Kt=t.return;Kt;)switch(Kt.tag){case 5:case 31:case 13:Re=!1;return;case 27:case 3:Re=!0;return;default:Kt=Kt.return}}function Ra(t){if(t!==Kt)return!1;if(!lt)return Hi(t),lt=!0,!1;var e=t.tag,l;if((l=e!==3&&e!==27)&&((l=e===5)&&(l=t.type,l=!(l!=="form"&&l!=="button")||as(t.type,t.memoizedProps)),l=!l),l&&At&&wl(t),Hi(t),e===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(d(317));At=M0(t)}else if(e===31){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(d(317));At=M0(t)}else e===27?(e=At,Vl(t.type)?(t=ds,ds=null,At=t):At=e):At=Kt?qe(t.stateNode.nextSibling):null;return!0}function aa(){At=Kt=null,lt=!1}function jc(){var t=jl;return t!==null&&(xe===null?xe=t:xe.push.apply(xe,t),jl=null),t}function jn(t){jl===null?jl=[t]:jl.push(t)}var wc=ke(null),na=null,ml=null;function Al(t,e,l){wt(wc,e._currentValue),e._currentValue=l}function hl(t){t._currentValue=wc.current,It(wc)}function Ri(t,e,l){for(;t!==null;){var a=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,a!==null&&(a.childLanes|=e)):a!==null&&(a.childLanes&e)!==e&&(a.childLanes|=e),t===l)break;t=t.return}}function Ac(t,e,l,a){var n=t.child;for(n!==null&&(n.return=t);n!==null;){var i=n.dependencies;if(i!==null){var u=n.child;i=i.firstContext;t:for(;i!==null;){var c=i;i=n;for(var s=0;s<e.length;s++)if(c.context===e[s]){i.lanes|=l,c=i.alternate,c!==null&&(c.lanes|=l),Ri(i.return,l,t),a||(u=null);break t}i=c.next}}else if(n.tag===18){if(u=n.return,u===null)throw Error(d(341));u.lanes|=l,i=u.alternate,i!==null&&(i.lanes|=l),Ri(u,l,t),u=null}else n.tag===13&&n.memoizedState!==null&&n.memoizedState.dehydrated===null?(n.lanes|=l,u=n.alternate,u!==null&&(u.lanes|=l),Ri(n.return,l,t),u=n.child,u=u!==null?u.sibling:null):u=n.child;if(u!==null)u.return=n;else for(u=n;u!==null;){if(u===t){u=null;break}if(n=u.sibling,n!==null){n.return=u.return,u=n;break}u=u.return}n=u}}function ia(t,e,l,a){t=null;for(var n=e,i=!1;n!==null;){if(!i){if((n.flags&524288)!==0)i=!0;else if((n.flags&262144)!==0)break}if(n.tag===10){var u=n.alternate;if(u===null)throw Error(d(387));if(u=u.memoizedProps,u!==null){var c=n.type;Te(n.pendingProps.value,u.value)||(t!==null?t.push(c):t=[c])}}else if(n===si.current){if(u=n.alternate,u===null)throw Error(d(387));u.memoizedState.memoizedState!==n.memoizedState.memoizedState&&(t!==null?t.push(on):t=[on])}n=n.return}return t!==null&&Ac(e,t,l,a),e.flags|=262144,t!==null}function Bi(t){for(t=t.firstContext;t!==null;){if(!Te(t.context._currentValue,t.memoizedValue))return!0;t=t.next}return!1}function ua(t){na=t,ml=null,t=t.dependencies,t!==null&&(t.firstContext=null)}function te(t){return Kf(na,t)}function qi(t,e){return na===null&&ua(t),Kf(t,e)}function Kf(t,e){var l=e._currentValue;if(e={context:e,memoizedValue:l,next:null},ml===null){if(t===null)throw Error(d(308));ml=e,t.dependencies={lanes:0,firstContext:e},t.flags|=524288}else ml=ml.next=e;return l}var Gh=typeof AbortController<"u"?AbortController:function(){var t=[],e=this.signal={aborted:!1,addEventListener:function(l,a){t.push(a)}};this.abort=function(){e.aborted=!0,t.forEach(function(l){return l()})}},Lh=v.unstable_scheduleCallback,Qh=v.unstable_NormalPriority,Yt={$$typeof:M,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function Cc(){return{controller:new Gh,data:new Map,refCount:0}}function wn(t){t.refCount--,t.refCount===0&&Lh(Qh,function(){t.controller.abort()})}function Jf(t,e){if((t.pendingLanes&4194048)!==0){var l=t.transitionTypes;for(l===null&&(l=t.transitionTypes=[]),t=0;t<e.length;t++){var a=e[t];l.indexOf(a)===-1&&l.push(a)}}}var An=null;function Xh(t){var e=t.transitionTypes;return t.transitionTypes=null,e}var Cn=null,Oc=0,ca=0,Ba=null;function Vh(t,e){if(Cn===null){var l=Cn=[];Oc=0,ca=Jo(),Ba={status:"pending",value:void 0,then:function(a){l.push(a)}}}return Oc++,e.then($f,$f),e}function $f(){if(--Oc===0&&(An=null,Cn!==null)){Ba!==null&&(Ba.status="fulfilled");var t=Cn;Cn=null,ca=0,Ba=null;for(var e=0;e<t.length;e++)(0,t[e])()}}function Zh(t,e){var l=[],a={status:"pending",value:null,reason:null,then:function(n){l.push(n)}};return t.then(function(){a.status="fulfilled",a.value=e;for(var n=0;n<l.length;n++)(0,l[n])(e)},function(n){for(a.status="rejected",a.reason=n,n=0;n<l.length;n++)(0,l[n])(void 0)}),a}var Ff=q.S;q.S=function(t,e){if(Qd=ye(),typeof e=="object"&&e!==null&&typeof e.then=="function"&&Vh(t,e),An!==null)for(var l=en;l!==null;)Jf(l,An),l=l.next;if(l=t.types,l!==null){for(var a=en;a!==null;)Jf(a,l),a=a.next;if(ca!==0){a=An,a===null&&(a=An=[]);for(var n=0;n<l.length;n++){var i=l[n];a.indexOf(i)===-1&&a.push(i)}}}Ff!==null&&Ff(t,e)};var oa=ke(null);function Mc(){var t=oa.current;return t!==null?t:_t.pooledCache}function Yi(t,e){e===null?wt(oa,oa.current):wt(oa,e.pool)}function Wf(){var t=Mc();return t===null?null:{parent:Yt._currentValue,pool:t}}var qa=Error(d(460)),Dc=Error(d(474)),Gi=Error(d(542)),Li={then:function(){}};function If(t){return t=t.status,t==="fulfilled"||t==="rejected"}function Pf(t,e,l){switch(l=t[l],l===void 0?t.push(e):l!==e&&(e.then(Je,Je),e=l),e.status){case"fulfilled":return e.value;case"rejected":throw t=e.reason,er(t),t===void 0&&!("reason"in e)?Error(d(600)):t;default:if(typeof e.status=="string")e.then(Je,Je);else{if(t=_t,t!==null&&100<t.shellSuspendCounter)throw Error(d(482));t=e,t.status="pending",t.then(function(a){if(e.status==="pending"){var n=e;n.status="fulfilled",n.value=a}},function(a){if(e.status==="pending"){var n=e;n.status="rejected",n.reason=a}})}switch(e.status){case"fulfilled":return e.value;case"rejected":throw t=e.reason,er(t),t}throw fa=e,qa}}function sa(t){try{var e=t._init;return e(t._payload)}catch(l){throw l!==null&&typeof l=="object"&&typeof l.then=="function"?(fa=l,qa):l}}var fa=null;function tr(){if(fa===null)throw Error(d(459));var t=fa;return fa=null,t}function er(t){if(t===qa||t===Gi)throw Error(d(483))}var Ya=null,On=0;function Qi(t){var e=On;return On+=1,Ya===null&&(Ya=[]),Pf(Ya,t,e)}function Cl(t,e){e=e.props.ref,t.ref=e!==void 0?e:null}function Xi(t,e){throw e.$$typeof===it?Error(d(525)):(t=Object.prototype.toString.call(e),Error(d(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)))}function lr(t){function e(h,f){if(t){var g=h.deletions;g===null?(h.deletions=[f],h.flags|=16):g.push(f)}}function l(h,f){if(!t)return null;for(;f!==null;)e(h,f),f=f.sibling;return null}function a(h){for(var f=new Map;h!==null;)h.key===null?f.set(h.index,h):f.set(h.key,h),h=h.sibling;return f}function n(h,f){return h=rl(h,f),h.index=0,h.sibling=null,h}function i(h,f,g){return h.index=g,t?(g=h.alternate,g!==null?(g=g.index,g<f?(h.flags|=2,f):g):(h.flags|=134217730,f)):(h.flags|=1048576,f)}function u(h){return t&&h.alternate===null&&(h.flags|=134217730),h}function c(h,f,g,S){return f===null||f.tag!==6?(f=Nc(g,h.mode,S),f.return=h,f):(f=n(f,g),f.return=h,f)}function s(h,f,g,S){var U=g.type;return U===Wt?(h=b(h,f,g.props.children,S,g.key),Cl(h,g),h):f!==null&&(f.elementType===U||typeof U=="object"&&U!==null&&U.$$typeof===ut&&sa(U)===f.type)?(f=n(f,g.props),Cl(f,g),f.return=h,f):(f=Mi(g.type,g.key,g.props,null,h.mode,S),Cl(f,g),f.return=h,f)}function p(h,f,g,S){return f===null||f.tag!==4||f.stateNode.containerInfo!==g.containerInfo||f.stateNode.implementation!==g.implementation?(f=Tc(g,h.mode,S),f.return=h,f):(f=n(f,g.children||[]),f.return=h,f)}function b(h,f,g,S,U){return f===null||f.tag!==7?(f=la(g,h.mode,S,U),f.return=h,f):(f=n(f,g),f.return=h,f)}function z(h,f,g){if(typeof f=="string"&&f!==""||typeof f=="number"||typeof f=="bigint")return f=Nc(""+f,h.mode,g),f.return=h,f;if(typeof f=="object"&&f!==null){switch(f.$$typeof){case oe:return g=Mi(f.type,f.key,f.props,null,h.mode,g),Cl(g,f),g.return=h,g;case ue:return f=Tc(f,h.mode,g),f.return=h,f;case ut:return f=sa(f),z(h,f,g)}if(bt(f)||X(f))return f=la(f,h.mode,g,null),f.return=h,f;if(typeof f.then=="function")return z(h,Qi(f),g);if(f.$$typeof===M)return z(h,qi(h,f),g);Xi(h,f)}return null}function m(h,f,g,S){var U=f!==null?f.key:null;if(typeof g=="string"&&g!==""||typeof g=="number"||typeof g=="bigint")return U!==null?null:c(h,f,""+g,S);if(typeof g=="object"&&g!==null){switch(g.$$typeof){case oe:return g.key===U?s(h,f,g,S):null;case ue:return g.key===U?p(h,f,g,S):null;case ut:return g=sa(g),m(h,f,g,S)}if(bt(g)||X(g))return U!==null?null:b(h,f,g,S,null);if(typeof g.then=="function")return m(h,f,Qi(g),S);if(g.$$typeof===M)return m(h,f,qi(h,g),S);Xi(h,g)}return null}function x(h,f,g,S,U){if(typeof S=="string"&&S!==""||typeof S=="number"||typeof S=="bigint")return h=h.get(g)||null,c(f,h,""+S,U);if(typeof S=="object"&&S!==null){switch(S.$$typeof){case oe:return h=h.get(S.key===null?g:S.key)||null,s(f,h,S,U);case ue:return h=h.get(S.key===null?g:S.key)||null,p(f,h,S,U);case ut:return S=sa(S),x(h,f,g,S,U)}if(bt(S)||X(S))return h=h.get(g)||null,b(f,h,S,U,null);if(typeof S.then=="function")return x(h,f,g,Qi(S),U);if(S.$$typeof===M)return x(h,f,g,qi(f,S),U);Xi(f,S)}return null}function A(h,f,g,S){for(var U=null,rt=null,L=f,$=f=0,Qt=null;L!==null&&$<g.length;$++){L.index>$?(Qt=L,L=null):Qt=L.sibling;var mt=m(h,L,g[$],S);if(mt===null){L===null&&(L=Qt);break}t&&L&&mt.alternate===null&&e(h,L),f=i(mt,f,$),rt===null?U=mt:rt.sibling=mt,rt=mt,L=Qt}if($===g.length)return l(h,L),lt&&dl(h,$),U;if(L===null){for(;$<g.length;$++)L=z(h,g[$],S),L!==null&&(f=i(L,f,$),rt===null?U=L:rt.sibling=L,rt=L);return lt&&dl(h,$),U}for(L=a(L);$<g.length;$++)Qt=x(L,h,$,g[$],S),Qt!==null&&(t&&(mt=Qt.alternate,mt!==null&&L.delete(mt.key===null?$:mt.key)),f=i(Qt,f,$),rt===null?U=Qt:rt.sibling=Qt,rt=Qt);return t&&L.forEach(function($l){return e(h,$l)}),lt&&dl(h,$),U}function R(h,f,g,S){if(g==null)throw Error(d(151));for(var U=null,rt=null,L=f,$=f=0,Qt=null,mt=g.next();L!==null&&!mt.done;$++,mt=g.next()){L.index>$?(Qt=L,L=null):Qt=L.sibling;var $l=m(h,L,mt.value,S);if($l===null){L===null&&(L=Qt);break}t&&L&&$l.alternate===null&&e(h,L),f=i($l,f,$),rt===null?U=$l:rt.sibling=$l,rt=$l,L=Qt}if(mt.done)return l(h,L),lt&&dl(h,$),U;if(L===null){for(;!mt.done;$++,mt=g.next())mt=z(h,mt.value,S),mt!==null&&(f=i(mt,f,$),rt===null?U=mt:rt.sibling=mt,rt=mt);return lt&&dl(h,$),U}for(L=a(L);!mt.done;$++,mt=g.next())mt=x(L,h,$,mt.value,S),mt!==null&&(t&&(Qt=mt.alternate,Qt!==null&&L.delete(Qt.key===null?$:Qt.key)),f=i(mt,f,$),rt===null?U=mt:rt.sibling=mt,rt=mt);return t&&L.forEach(function(Ep){return e(h,Ep)}),lt&&dl(h,$),U}function et(h,f,g,S){if(typeof g=="object"&&g!==null&&g.type===Wt&&g.key===null&&g.props.ref===void 0&&(g=g.props.children),typeof g=="object"&&g!==null){switch(g.$$typeof){case oe:t:{for(var U=g.key;f!==null;){if(f.key===U){if(U=g.type,U===Wt){if(f.tag===7){l(h,f.sibling),S=n(f,g.props.children),Cl(S,g),S.return=h,h=S;break t}}else if(f.elementType===U||typeof U=="object"&&U!==null&&U.$$typeof===ut&&sa(U)===f.type){l(h,f.sibling),S=n(f,g.props),Cl(S,g),S.return=h,h=S;break t}l(h,f);break}else e(h,f);f=f.sibling}g.type===Wt?(S=la(g.props.children,h.mode,S,g.key),Cl(S,g),S.return=h,h=S):(S=Mi(g.type,g.key,g.props,null,h.mode,S),Cl(S,g),S.return=h,h=S)}return u(h);case ue:t:{for(U=g.key;f!==null;){if(f.key===U)if(f.tag===4&&f.stateNode.containerInfo===g.containerInfo&&f.stateNode.implementation===g.implementation){l(h,f.sibling),S=n(f,g.children||[]),S.return=h,h=S;break t}else{l(h,f);break}else e(h,f);f=f.sibling}S=Tc(g,h.mode,S),S.return=h,h=S}return u(h);case ut:return g=sa(g),et(h,f,g,S)}if(bt(g))return A(h,f,g,S);if(X(g)){if(U=X(g),typeof U!="function")throw Error(d(150));return g=U.call(g),R(h,f,g,S)}if(typeof g.then=="function")return et(h,f,Qi(g),S);if(g.$$typeof===M)return et(h,f,qi(h,g),S);Xi(h,g)}return typeof g=="string"&&g!==""||typeof g=="number"||typeof g=="bigint"?(g=""+g,f!==null&&f.tag===6?(l(h,f.sibling),S=n(f,g),S.return=h,h=S):(l(h,f),S=Nc(g,h.mode,S),S.return=h,h=S),u(h)):l(h,f)}return function(h,f,g,S){try{On=0;var U=et(h,f,g,S);return Ya=null,U}catch(L){if(L===qa||L===Gi)throw L;var rt=he(29,L,null,h.mode);return rt.lanes=S,rt.return=h,rt}finally{}}}var ra=lr(!0),ar=lr(!1),Ol=!1;function Uc(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function Hc(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,callbacks:null})}function Ml(t){return{lane:t,tag:0,payload:null,callback:null,next:null}}function Dl(t,e,l){var a=t.updateQueue;if(a===null)return null;if(a=a.shared,(vt&2)!==0){var n=a.pending;return n===null?e.next=e:(e.next=n.next,n.next=e),a.pending=e,e=Oi(t),Gf(t,null,l),e}return Ci(t,a,e,l),Oi(t)}function Mn(t,e,l){if(e=e.updateQueue,e!==null&&(e=e.shared,(l&4194048)!==0)){var a=e.lanes;a&=t.pendingLanes,l|=a,e.lanes=l,Xs(t,l)}}function Rc(t,e){var l=t.updateQueue,a=t.alternate;if(a!==null&&(a=a.updateQueue,l===a)){var n=null,i=null;if(l=l.firstBaseUpdate,l!==null){do{var u={lane:l.lane,tag:l.tag,payload:l.payload,callback:null,next:null};i===null?n=i=u:i=i.next=u,l=l.next}while(l!==null);i===null?n=i=e:i=i.next=e}else n=i=e;l={baseState:a.baseState,firstBaseUpdate:n,lastBaseUpdate:i,shared:a.shared,callbacks:a.callbacks},t.updateQueue=l;return}t=l.lastBaseUpdate,t===null?l.firstBaseUpdate=e:t.next=e,l.lastBaseUpdate=e}var Bc=!1;function Dn(){if(Bc){var t=Ba;if(t!==null)throw t}}function Un(t,e,l,a){Bc=!1;var n=t.updateQueue;Ol=!1;var i=n.firstBaseUpdate,u=n.lastBaseUpdate,c=n.shared.pending;if(c!==null){n.shared.pending=null;var s=c,p=s.next;s.next=null,u===null?i=p:u.next=p,u=s;var b=t.alternate;b!==null&&(b=b.updateQueue,c=b.lastBaseUpdate,c!==u&&(c===null?b.firstBaseUpdate=p:c.next=p,b.lastBaseUpdate=s))}if(i!==null){var z=n.baseState;u=0,b=p=s=null,c=i;do{var m=c.lane&-536870913,x=m!==c.lane;if(x?(ft&m)===m:(a&m)===m){m!==0&&m===ca&&(Bc=!0),b!==null&&(b=b.next={lane:0,tag:c.tag,payload:c.payload,callback:null,next:null});t:{var A=t,R=c;m=e;var et=l;switch(R.tag){case 1:if(A=R.payload,typeof A=="function"){z=A.call(et,z,m);break t}z=A;break t;case 3:A.flags=A.flags&-65537|128;case 0:if(A=R.payload,m=typeof A=="function"?A.call(et,z,m):A,m==null)break t;z=P({},z,m);break t;case 2:Ol=!0}}m=c.callback,m!==null&&(t.flags|=64,x&&(t.flags|=8192),x=n.callbacks,x===null?n.callbacks=[m]:x.push(m))}else x={lane:m,tag:c.tag,payload:c.payload,callback:c.callback,next:null},b===null?(p=b=x,s=z):b=b.next=x,u|=m;if(c=c.next,c===null){if(c=n.shared.pending,c===null)break;x=c,c=x.next,x.next=null,n.lastBaseUpdate=x,n.shared.pending=null}}while(!0);b===null&&(s=z),n.baseState=s,n.firstBaseUpdate=p,n.lastBaseUpdate=b,i===null&&(n.shared.lanes=0),Gl|=u,t.lanes=u,t.memoizedState=z}}function nr(t,e){if(typeof t!="function")throw Error(d(191,t));t.call(e)}function ir(t,e){var l=t.callbacks;if(l!==null)for(t.callbacks=null,t=0;t<l.length;t++)nr(l[t],e)}var Ul=ke(null),Vi=ke(0);function ur(t,e){t=vl,wt(Vi,t),wt(Ul,e),vl=t|e.baseLanes}function qc(){wt(Vi,vl),wt(Ul,Ul.current)}function Yc(){vl=Vi.current,It(Ul),It(Vi)}var ee=ke(null),ce=null;function Hl(t){var e=t.alternate;wt(le,le.current&1),wt(ee,t),ce===null&&(e===null||Ul.current!==null||e.memoizedState!==null)&&(ce=t)}function Gc(t){wt(le,le.current),wt(ee,t),ce===null&&(ce=t)}function cr(t){t.tag===22?(wt(le,le.current),wt(ee,t),ce===null&&(ce=t)):Rl()}function Rl(){wt(le,le.current),wt(ee,ee.current)}function Ee(t){It(ee),ce===t&&(ce=null),It(le)}var le=ke(0);function Hn(t,e){wt(ee,ee.current),wt(le,e)}function Lc(t){It(le),It(ee),ce===t&&(ce=null)}function Zi(t){for(var e=t;e!==null;){if(e.tag===13){var l=e.memoizedState;if(l!==null&&(l=l.dehydrated,l===null||fs(l)||rs(l)))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!=="independent"){if((e.flags&128)!==0)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var pl=0,tt=null,Et=null,Gt=null,ki=!1,Ga=!1,da=!1,Ki=0,Rn=0,La=null,kh=0;function Rt(){throw Error(d(321))}function Qc(t,e){if(e===null)return!1;for(var l=0;l<e.length&&l<t.length;l++)if(!Te(t[l],e[l]))return!1;return!0}function Xc(t,e,l,a,n,i){return pl=i,tt=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,q.H=t===null||t.memoizedState===null?Vr:Zr,da=!1,i=l(a,n),da=!1,Ga&&(i=sr(e,l,a,n)),or(t),i}function or(t){q.H=tu;var e=Et!==null&&Et.next!==null;if(pl=0,Gt=Et=tt=null,ki=!1,Rn=0,La=null,e)throw Error(d(300));t===null||Lt||(t=t.dependencies,t!==null&&Bi(t)&&(Lt=!0))}function sr(t,e,l,a){tt=t;var n=0;do{if(Ga&&(La=null),Rn=0,Ga=!1,25<=n)throw Error(d(301));if(n+=1,Gt=Et=null,t.updateQueue!=null){var i=t.updateQueue;i.lastEffect=null,i.events=null,i.stores=null,i.memoCache!=null&&(i.memoCache.index=0)}q.H=t1,i=e(l,a)}while(Ga);return i}function Kh(){var t=q.H,e=t.useState()[0];return e=typeof e.then=="function"?Bn(e):e,t=t.useState()[0],(Et!==null?Et.memoizedState:null)!==t&&(tt.flags|=1024),e}function Vc(){var t=Ki!==0;return Ki=0,t}function Zc(t,e,l){e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~l}function kc(t){if(ki){for(t=t.memoizedState;t!==null;){var e=t.queue;e!==null&&(e.pending=null),t=t.next}ki=!1}pl=0,Gt=Et=tt=null,Ga=!1,Rn=Ki=0,La=null}function fe(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Gt===null?tt.memoizedState=Gt=t:Gt=Gt.next=t,Gt}function qt(){if(Et===null){var t=tt.alternate;t=t!==null?t.memoizedState:null}else t=Et.next;var e=Gt===null?tt.memoizedState:Gt.next;if(e!==null)Gt=e,Et=t;else{if(t===null)throw tt.alternate===null?Error(d(467)):Error(d(310));Et=t,t={memoizedState:Et.memoizedState,baseState:Et.baseState,baseQueue:Et.baseQueue,queue:Et.queue,next:null},Gt===null?tt.memoizedState=Gt=t:Gt=Gt.next=t}return Gt}function Ji(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function Bn(t){var e=Rn;return Rn+=1,La===null&&(La=[]),t=Pf(La,t,e),e=tt,(Gt===null?e.memoizedState:Gt.next)===null&&(e=e.alternate,q.H=e===null||e.memoizedState===null?Vr:Zr),t}function $i(t){if(t!==null&&typeof t=="object"){if(typeof t.then=="function")return Bn(t);if(t.$$typeof===E)return;if(t.$$typeof===M)return te(t)}throw Error(d(438,String(t)))}function Kc(t){var e=null,l=tt.updateQueue;if(l!==null&&(e=l.memoCache),e==null){var a=tt.alternate;a!==null&&(a=a.updateQueue,a!==null&&(a=a.memoCache,a!=null&&(e={data:a.data.map(function(n){return n.slice()}),index:0})))}if(e==null&&(e={data:[],index:0}),l===null&&(l=Ji(),tt.updateQueue=l),l.memoCache=e,l=e.data[e.index],l===void 0)for(l=e.data[e.index]=Array(t),a=0;a<t;a++)l[a]=ve;return e.index++,l}function gl(t,e){return typeof e=="function"?e(t):e}function Fi(t){var e=qt();return Jc(e,Et,t)}function Jc(t,e,l){var a=t.queue;if(a===null)throw Error(d(311));a.lastRenderedReducer=l;var n=t.baseQueue,i=a.pending;if(i!==null){if(n!==null){var u=n.next;n.next=i.next,i.next=u}e.baseQueue=n=i,a.pending=null}if(i=t.baseState,n===null)t.memoizedState=i;else{e=n.next;var c=u=null,s=null,p=e,b=!1;do{var z=p.lane&-536870913;if(z!==p.lane?(ft&z)===z:(pl&z)===z){var m=p.revertLane;if(m===0)s!==null&&(s=s.next={lane:0,revertLane:0,gesture:null,action:p.action,hasEagerState:p.hasEagerState,eagerState:p.eagerState,next:null}),z===ca&&(b=!0);else if((pl&m)===m){p=p.next,m===ca&&(b=!0);continue}else z={lane:0,revertLane:p.revertLane,gesture:null,action:p.action,hasEagerState:p.hasEagerState,eagerState:p.eagerState,next:null},s===null?(c=s=z,u=i):s=s.next=z,tt.lanes|=m,Gl|=m;z=p.action,da&&l(i,z),i=p.hasEagerState?p.eagerState:l(i,z)}else m={lane:z,revertLane:p.revertLane,gesture:p.gesture,action:p.action,hasEagerState:p.hasEagerState,eagerState:p.eagerState,next:null},s===null?(c=s=m,u=i):s=s.next=m,tt.lanes|=z,Gl|=z;p=p.next}while(p!==null&&p!==e);if(s===null?u=i:s.next=c,!Te(i,t.memoizedState)&&(Lt=!0,b&&(l=Ba,l!==null)))throw l;t.memoizedState=i,t.baseState=u,t.baseQueue=s,a.lastRenderedState=i}return n===null&&(a.lanes=0),[t.memoizedState,a.dispatch]}function $c(t){var e=qt(),l=e.queue;if(l===null)throw Error(d(311));l.lastRenderedReducer=t;var a=l.dispatch,n=l.pending,i=e.memoizedState;if(n!==null){l.pending=null;var u=n=n.next;do i=t(i,u.action),u=u.next;while(u!==n);Te(i,e.memoizedState)||(Lt=!0),e.memoizedState=i,e.baseQueue===null&&(e.baseState=i),l.lastRenderedState=i}return[i,a]}function fr(t,e,l){var a=tt,n=qt(),i=lt;if(i){if(l===void 0)throw Error(d(407));l=l()}else l=e();var u=!Te((Et||n).memoizedState,l);if(u&&(n.memoizedState=l,Lt=!0),n=n.queue,Ic(mr.bind(null,a,n,t),[t]),t=n.getSnapshot!==e||u||Gt!==null&&(Gt.memoizedState.tag&1)!==0,Qa(t?9:8,{destroy:void 0},dr.bind(null,a,n,l,e),null),t){if(a.flags|=2048,_t===null)throw Error(d(349));i||(pl&127)!==0||rr(a,e,l)}return l}function rr(t,e,l){t.flags|=16384,t={getSnapshot:e,value:l},e=tt.updateQueue,e===null?(e=Ji(),tt.updateQueue=e,e.stores=[t]):(l=e.stores,l===null?e.stores=[t]:l.push(t))}function dr(t,e,l,a){e.value=l,e.getSnapshot=a,hr(e)&&pr(t)}function mr(t,e,l){return l(function(){hr(e)&&pr(t)})}function hr(t){var e=t.getSnapshot;t=t.value;try{var l=e();return!Te(t,l)}catch{return!0}}function pr(t){var e=ea(t,2);e!==null&&be(e,t,2)}function Fc(t){var e=fe();if(typeof t=="function"){var l=t;if(t=l(),da){Nl(!0);try{l()}finally{Nl(!1)}}}return e.memoizedState=e.baseState=t,e.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:gl,lastRenderedState:t},e}function gr(t,e,l,a){return t.baseState=l,Jc(t,Et,typeof a=="function"?a:gl)}function Jh(t,e,l,a,n){if(Pi(t))throw Error(d(485));if(t=e.action,t!==null){var i={payload:n,action:t,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(u){i.listeners.push(u)}};q.T!==null?l(!0):i.isTransition=!1,a(i),l=e.pending,l===null?(i.next=e.pending=i,xr(e,i)):(i.next=l.next,e.pending=l.next=i)}}function xr(t,e){var l=e.action,a=e.payload,n=t.state;if(e.isTransition){var i=q.T,u={};u.types=i!==null?i.types:null,q.T=u;try{var c=l(n,a),s=q.S;s!==null&&s(u,c),br(t,e,c)}catch(p){Wc(t,e,p)}finally{i!==null&&u.types!==null&&(i.types=u.types),q.T=i}}else try{i=l(n,a),br(t,e,i)}catch(p){Wc(t,e,p)}}function br(t,e,l){l!==null&&typeof l=="object"&&typeof l.then=="function"?l.then(function(a){vr(t,e,a)},function(a){return Wc(t,e,a)}):vr(t,e,l)}function vr(t,e,l){e.status="fulfilled",e.value=l,yr(e),t.state=l,e=t.pending,e!==null&&(l=e.next,l===e?t.pending=null:(l=l.next,e.next=l,xr(t,l)))}function Wc(t,e,l){var a=t.pending;if(t.pending=null,a!==null){a=a.next;do e.status="rejected",e.reason=l,yr(e),e=e.next;while(e!==a)}t.action=null}function yr(t){t=t.listeners;for(var e=0;e<t.length;e++)(0,t[e])()}function Sr(t,e){return e}function zr(t,e){if(lt){var l=_t.formState;if(l!==null){t:{var a=tt;if(lt){if(At){e:{for(var n=At,i=Re;n.nodeType!==8;){if(!i){n=null;break e}if(n=qe(n.nextSibling),n===null){n=null;break e}}i=n.data,n=i==="F!"||i==="F"?n:null}if(n){At=qe(n.nextSibling),a=n.data==="F!";break t}}wl(a)}a=!1}a&&(e=l[0])}}return l=fe(),l.memoizedState=l.baseState=e,a={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Sr,lastRenderedState:e},l.queue=a,l=Lr.bind(null,tt,a),a.dispatch=l,a=Fc(!1),i=ao.bind(null,tt,!1,a.queue),a=fe(),n={state:e,dispatch:null,action:t,pending:null},a.queue=n,l=Jh.bind(null,tt,n,i,l),n.dispatch=l,a.memoizedState=t,[e,l,!1]}function Nr(t){var e=qt();return Tr(e,Et,t)}function Tr(t,e,l){if(e=Jc(t,e,Sr)[0],t=Fi(gl)[0],typeof e=="object"&&e!==null&&typeof e.then=="function")try{var a=Bn(e)}catch(u){throw u===qa?Gi:u}else a=e;e=qt();var n=e.queue,i=n.dispatch;return l!==e.memoizedState&&(tt.flags|=2048,Qa(9,{destroy:void 0},$h.bind(null,n,l),null)),[a,i,t]}function $h(t,e){t.action=e}function Er(t){var e=qt(),l=Et;if(l!==null)return Tr(e,l,t);qt(),e=e.memoizedState,l=qt();var a=l.queue.dispatch;return l.memoizedState=t,[e,a,!1]}function Qa(t,e,l,a){return t={tag:t,create:l,deps:a,inst:e,next:null},e=tt.updateQueue,e===null&&(e=Ji(),tt.updateQueue=e),l=e.lastEffect,l===null?e.lastEffect=t.next=t:(a=l.next,l.next=t,t.next=a,e.lastEffect=t),t}function _r(){return qt().memoizedState}function Wi(t,e,l,a){var n=fe();tt.flags|=t,n.memoizedState=Qa(1|e,{destroy:void 0},l,a===void 0?null:a)}function Ii(t,e,l,a){var n=qt();a=a===void 0?null:a;var i=n.memoizedState.inst;Et!==null&&a!==null&&Qc(a,Et.memoizedState.deps)?n.memoizedState=Qa(e,i,l,a):(tt.flags|=t,n.memoizedState=Qa(1|e,i,l,a))}function jr(t,e){Wi(8390656,8,t,e)}function Ic(t,e){Ii(2048,8,t,e)}function Fh(t){tt.flags|=4;var e=tt.updateQueue;if(e===null)e=Ji(),tt.updateQueue=e,e.events=[t];else{var l=e.events;l===null?e.events=[t]:l.push(t)}}function wr(t){var e=qt().memoizedState;return Fh({ref:e,nextImpl:t}),function(){if((vt&2)!==0)throw Error(d(440));return e.impl.apply(void 0,arguments)}}function Ar(t,e){return Ii(4,2,t,e)}function Cr(t,e){return Ii(4,4,t,e)}function Or(t,e){if(typeof e=="function"){t=t();var l=e(t);return function(){typeof l=="function"?l():e(null)}}if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function Mr(t,e,l){l=l!=null?l.concat([t]):null,Ii(4,4,Or.bind(null,e,t),l)}function Pc(){}function Dr(t,e){var l=qt();e=e===void 0?null:e;var a=l.memoizedState;return e!==null&&Qc(e,a[1])?a[0]:(l.memoizedState=[t,e],t)}function Ur(t,e){var l=qt();e=e===void 0?null:e;var a=l.memoizedState;if(e!==null&&Qc(e,a[1]))return a[0];if(a=t(),da){Nl(!0);try{t()}finally{Nl(!1)}}return l.memoizedState=[a,e],a}function to(t,e,l){return l===void 0||(pl&1073741824)!==0&&(ft&261930)===0?t.memoizedState=e:(t.memoizedState=l,t=Vd(),tt.lanes|=t,Gl|=t,l)}function Hr(t,e,l,a){return Te(l,e)?l:Ul.current!==null?(t=to(t,l,a),Te(t,e)||(Lt=!0),t):(pl&106)===0||(pl&1073741824)!==0&&(ft&261930)===0?(Lt=!0,t.memoizedState=l):(t=Vd(),tt.lanes|=t,Gl|=t,e)}function Rr(t,e,l,a,n){var i=F.p;F.p=i!==0&&8>i?i:8;var u=q.T,c={};c.types=u!==null?u.types:null,q.T=c,ao(t,!1,e,l);try{var s=n(),p=q.S;if(p!==null&&p(c,s),s!==null&&typeof s=="object"&&typeof s.then=="function"){var b=Zh(s,a);qn(t,e,b,Ae(t))}else qn(t,e,a,Ae(t))}catch(z){qn(t,e,{then:function(){},status:"rejected",reason:z},Ae())}finally{F.p=i,u!==null&&c.types!==null&&(u.types=c.types),q.T=u}}function Wh(){}function eo(t,e,l,a){if(t.tag!==5)throw Error(d(476));var n=Br(t).queue;Rr(t,n,e,il,l===null?Wh:function(){return qr(t),l(a)})}function Br(t){var e=t.memoizedState;if(e!==null)return e;e={memoizedState:il,baseState:il,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:gl,lastRenderedState:il},next:null};var l={};return e.next={memoizedState:l,baseState:l,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:gl,lastRenderedState:l},next:null},t.memoizedState=e,t=t.alternate,t!==null&&(t.memoizedState=e),e}function qr(t){var e=Br(t);e.next===null&&(e=t.alternate.memoizedState),qn(t,e.next.queue,{},Ae())}function lo(){return te(on)}function Yr(){return qt().memoizedState}function Gr(){return qt().memoizedState}function Ih(t){for(var e=t.return;e!==null;){switch(e.tag){case 24:case 3:var l=Ae();t=Ml(l);var a=Dl(e,t,l);a!==null&&(be(a,e,l),Mn(a,e,l)),e={cache:Cc()},t.payload=e;return}e=e.return}}function Ph(t,e,l){var a=Ae();l={lane:a,revertLane:0,gesture:null,action:l,hasEagerState:!1,eagerState:null,next:null},Pi(t)?Qr(e,l):(l=Sc(t,e,l,a),l!==null&&(be(l,t,a),Xr(l,e,a)))}function Lr(t,e,l){var a=Ae();qn(t,e,l,a)}function qn(t,e,l,a){var n={lane:a,revertLane:0,gesture:null,action:l,hasEagerState:!1,eagerState:null,next:null};if(Pi(t))Qr(e,n);else{var i=t.alternate;if(t.lanes===0&&(i===null||i.lanes===0)&&(i=e.lastRenderedReducer,i!==null))try{var u=e.lastRenderedState,c=i(u,l);if(n.hasEagerState=!0,n.eagerState=c,Te(c,u))return Ci(t,e,n,0),_t===null&&Ai(),!1}catch{}finally{}if(l=Sc(t,e,n,a),l!==null)return be(l,t,a),Xr(l,e,a),!0}return!1}function ao(t,e,l,a){if(a={lane:2,revertLane:Jo(),gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null},Pi(t)){if(e)throw Error(d(479))}else e=Sc(t,l,a,2),e!==null&&be(e,t,2)}function Pi(t){var e=t.alternate;return t===tt||e!==null&&e===tt}function Qr(t,e){Ga=ki=!0;var l=t.pending;l===null?e.next=e:(e.next=l.next,l.next=e),t.pending=e}function Xr(t,e,l){if((l&4194048)!==0){var a=e.lanes;a&=t.pendingLanes,l|=a,e.lanes=l,Xs(t,l)}}var tu={readContext:te,use:$i,useCallback:Rt,useContext:Rt,useEffect:Rt,useImperativeHandle:Rt,useLayoutEffect:Rt,useInsertionEffect:Rt,useMemo:Rt,useReducer:Rt,useRef:Rt,useState:Rt,useDebugValue:Rt,useDeferredValue:Rt,useTransition:Rt,useSyncExternalStore:Rt,useId:Rt,useHostTransitionStatus:Rt,useFormState:Rt,useActionState:Rt,useOptimistic:Rt,useMemoCache:Rt,useCacheRefresh:Rt,useEffectEvent:Rt},Vr={readContext:te,use:$i,useCallback:function(t,e){return fe().memoizedState=[t,e===void 0?null:e],t},useContext:te,useEffect:jr,useImperativeHandle:function(t,e,l){l=l!=null?l.concat([t]):null,Wi(4194308,4,Or.bind(null,e,t),l)},useLayoutEffect:function(t,e){return Wi(4194308,4,t,e)},useInsertionEffect:function(t,e){Wi(4,2,t,e)},useMemo:function(t,e){var l=fe();e=e===void 0?null:e;var a=t();if(da){Nl(!0);try{t()}finally{Nl(!1)}}return l.memoizedState=[a,e],a},useReducer:function(t,e,l){var a=fe();if(l!==void 0){var n=l(e);if(da){Nl(!0);try{l(e)}finally{Nl(!1)}}}else n=e;return a.memoizedState=a.baseState=n,t={pending:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:n},a.queue=t,t=t.dispatch=Ph.bind(null,tt,t),[a.memoizedState,t]},useRef:function(t){var e=fe();return t={current:t},e.memoizedState=t},useState:function(t){t=Fc(t);var e=t.queue,l=Lr.bind(null,tt,e);return e.dispatch=l,[t.memoizedState,l]},useDebugValue:Pc,useDeferredValue:function(t,e){var l=fe();return to(l,t,e)},useTransition:function(){var t=Fc(!1);return t=Rr.bind(null,tt,t.queue,!0,!1),fe().memoizedState=t,[!1,t]},useSyncExternalStore:function(t,e,l){var a=tt,n=fe();if(lt){if(l===void 0)throw Error(d(407));l=l()}else{if(l=e(),_t===null)throw Error(d(349));(ft&127)!==0||rr(a,e,l)}n.memoizedState=l;var i={value:l,getSnapshot:e};return n.queue=i,jr(mr.bind(null,a,i,t),[t]),a.flags|=2048,Qa(9,{destroy:void 0},dr.bind(null,a,i,l,e),null),l},useId:function(){var t=fe(),e=_t.identifierPrefix;if(lt){var l=Fe,a=$e;l=(a&~(1<<32-ze(a)-1)).toString(32)+l,e="_"+e+"R_"+l,l=Ki++,0<l&&(e+="H"+l.toString(32)),e+="_"}else l=kh++,e="_"+e+"r_"+l.toString(32)+"_";return t.memoizedState=e},useHostTransitionStatus:lo,useFormState:zr,useActionState:zr,useOptimistic:function(t){var e=fe();e.memoizedState=e.baseState=t;var l={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return e.queue=l,e=ao.bind(null,tt,!0,l),l.dispatch=e,[t,e]},useMemoCache:Kc,useCacheRefresh:function(){return fe().memoizedState=Ih.bind(null,tt)},useEffectEvent:function(t){var e=fe(),l={impl:t};return e.memoizedState=l,function(){if((vt&2)!==0)throw Error(d(440));return l.impl.apply(void 0,arguments)}}},Zr={readContext:te,use:$i,useCallback:Dr,useContext:te,useEffect:Ic,useImperativeHandle:Mr,useInsertionEffect:Ar,useLayoutEffect:Cr,useMemo:Ur,useReducer:Fi,useRef:_r,useState:function(){return Fi(gl)},useDebugValue:Pc,useDeferredValue:function(t,e){var l=qt();return Hr(l,Et.memoizedState,t,e)},useTransition:function(){var t=Fi(gl)[0],e=qt().memoizedState;return[typeof t=="boolean"?t:Bn(t),e]},useSyncExternalStore:fr,useId:Yr,useHostTransitionStatus:lo,useFormState:Nr,useActionState:Nr,useOptimistic:function(t,e){var l=qt();return gr(l,Et,t,e)},useMemoCache:Kc,useCacheRefresh:Gr,useEffectEvent:wr},t1={readContext:te,use:$i,useCallback:Dr,useContext:te,useEffect:Ic,useImperativeHandle:Mr,useInsertionEffect:Ar,useLayoutEffect:Cr,useMemo:Ur,useReducer:$c,useRef:_r,useState:function(){return $c(gl)},useDebugValue:Pc,useDeferredValue:function(t,e){var l=qt();return Et===null?to(l,t,e):Hr(l,Et.memoizedState,t,e)},useTransition:function(){var t=$c(gl)[0],e=qt().memoizedState;return[typeof t=="boolean"?t:Bn(t),e]},useSyncExternalStore:fr,useId:Yr,useHostTransitionStatus:lo,useFormState:Er,useActionState:Er,useOptimistic:function(t,e){var l=qt();return Et!==null?gr(l,Et,t,e):(l.baseState=t,[t,l.queue.dispatch])},useMemoCache:Kc,useCacheRefresh:Gr,useEffectEvent:wr};function no(t,e,l,a){e=t.memoizedState,l=l(a,e),l=l==null?e:P({},e,l),t.memoizedState=l,t.lanes===0&&(t.updateQueue.baseState=l)}var io={enqueueSetState:function(t,e,l){t=t._reactInternals;var a=Ae(),n=Ml(a);n.payload=e,l!=null&&(n.callback=l),e=Dl(t,n,a),e!==null&&(be(e,t,a),Mn(e,t,a))},enqueueReplaceState:function(t,e,l){t=t._reactInternals;var a=Ae(),n=Ml(a);n.tag=1,n.payload=e,l!=null&&(n.callback=l),e=Dl(t,n,a),e!==null&&(be(e,t,a),Mn(e,t,a))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var l=Ae(),a=Ml(l);a.tag=2,e!=null&&(a.callback=e),e=Dl(t,a,l),e!==null&&(be(e,t,l),Mn(e,t,l))}};function kr(t,e,l,a,n,i,u){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(a,i,u):e.prototype&&e.prototype.isPureReactComponent?!Tn(l,a)||!Tn(n,i):!0}function Kr(t,e,l,a){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(l,a),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(l,a),e.state!==t&&io.enqueueReplaceState(e,e.state,null)}function ma(t,e){var l=e;if("ref"in e){l={};for(var a in e)a!=="ref"&&(l[a]=e[a])}if(t=t.defaultProps){l===e&&(l=P({},l));for(var n in t)l[n]===void 0&&(l[n]=t[n])}return l}function Jr(t){wi(t)}function $r(t){console.error(t)}function Fr(t){wi(t)}function eu(t,e){try{var l=t.onUncaughtError;l(e.value,{componentStack:e.stack})}catch(a){setTimeout(function(){throw a})}}function Wr(t,e,l){try{var a=t.onCaughtError;a(l.value,{componentStack:l.stack,errorBoundary:e.tag===1?e.stateNode:null})}catch(n){setTimeout(function(){throw n})}}function uo(t,e,l){return l=Ml(l),l.tag=3,l.payload={element:null},l.callback=function(){eu(t,e)},l}function Ir(t){return t=Ml(t),t.tag=3,t}function Pr(t,e,l,a){var n=l.type.getDerivedStateFromError;if(typeof n=="function"){var i=a.value;t.payload=function(){return n(i)},t.callback=function(){Wr(e,l,a)}}var u=l.stateNode;u!==null&&typeof u.componentDidCatch=="function"&&(t.callback=function(){Wr(e,l,a),typeof n!="function"&&(Ll===null?Ll=new Set([this]):Ll.add(this));var c=a.stack;this.componentDidCatch(a.value,{componentStack:c!==null?c:""})})}function e1(t,e,l,a,n){if(l.flags|=32768,a!==null&&typeof a=="object"&&typeof a.then=="function"){if(e=l.alternate,e!==null&&ia(e,l,n,!0),l=ee.current,l!==null){switch(l.tag){case 31:case 13:case 19:return ce===null?zu():l.alternate===null&&Bt===0&&(Bt=3),l.flags&=-257,l.flags|=65536,l.lanes=n,a===Li?l.flags|=16384:(e=l.updateQueue,e===null?l.updateQueue=new Set([a]):e.add(a),Zo(t,a,n)),!1;case 22:return l.flags|=65536,a===Li?l.flags|=16384:(e=l.updateQueue,e===null?(e={transitions:null,markerInstances:null,retryQueue:new Set([a])},l.updateQueue=e):(l=e.retryQueue,l===null?e.retryQueue=new Set([a]):l.add(a)),Zo(t,a,n)),!1}throw Error(d(435,l.tag))}return Zo(t,a,n),zu(),!1}if(lt)return e=ee.current,e!==null?((e.flags&65536)===0&&(e.flags|=256),e.flags|=65536,e.lanes=n,a!==_c&&(t=Error(d(422),{cause:a}),jn(De(t,l)))):(a!==_c&&(e=Error(d(423),{cause:a}),jn(De(e,l))),t=t.current.alternate,t.flags|=65536,n&=-n,t.lanes|=n,a=De(a,l),n=uo(t.stateNode,a,n),Rc(t,n),Bt!==4&&(Bt=2)),!1;var i=Error(d(520),{cause:a});if(i=De(i,l),kn===null?kn=[i]:kn.push(i),Bt!==4&&(Bt=2),e===null)return!0;a=De(a,l),l=e;do{switch(l.tag){case 3:return l.flags|=65536,t=n&-n,l.lanes|=t,t=uo(l.stateNode,a,t),Rc(l,t),!1;case 1:if(e=l.type,i=l.stateNode,(l.flags&128)===0&&(typeof e.getDerivedStateFromError=="function"||i!==null&&typeof i.componentDidCatch=="function"&&(Ll===null||!Ll.has(i))))return l.flags|=65536,n&=-n,l.lanes|=n,n=Ir(n),Pr(n,t,l,a),Rc(l,n),!1;break;case 22:if(l.memoizedState!==null)return l.flags|=65536,!1}l=l.return}while(l!==null);return!1}var co=Error(d(461)),Lt=!1;function Vt(t,e,l,a){e.child=t===null?ar(e,null,l,a):ra(e,t.child,l,a)}function td(t,e,l,a,n){l=l.render;var i=e.ref;if("ref"in a){var u={};for(var c in a)c!=="ref"&&(u[c]=a[c])}else u=a;return ua(e),a=Xc(t,e,l,u,i,n),c=Vc(),t!==null&&!Lt?(Zc(t,e,n),xl(t,e,n)):(lt&&c&&Ui(e),e.flags|=1,Vt(t,e,a,n),e.child)}function ed(t,e,l,a,n){if(t===null){var i=l.type;return typeof i=="function"&&!zc(i)&&i.defaultProps===void 0&&l.compare===null?(e.tag=15,e.type=i,ld(t,e,i,a,n)):(t=Mi(l.type,null,a,e,e.mode,n),t.ref=e.ref,t.return=e,e.child=t)}if(i=t.child,!go(t,n)){var u=i.memoizedProps;if(l=l.compare,l=l!==null?l:Tn,l(u,a)&&t.ref===e.ref)return xl(t,e,n)}return e.flags|=1,t=rl(i,a),t.ref=e.ref,t.return=e,e.child=t}function ld(t,e,l,a,n){if(t!==null){var i=t.memoizedProps;if(Tn(i,a)&&t.ref===e.ref)if(Lt=!1,e.pendingProps=a=i,go(t,n))(t.flags&131072)!==0&&(Lt=!0);else return e.lanes=t.lanes,xl(t,e,n)}return oo(t,e,l,a,n)}function ad(t,e,l,a){var n=a.children,i=t!==null?t.memoizedState:null;if(t===null&&e.stateNode===null&&(e.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),a.mode==="hidden"){if((e.flags&128)!==0){if(i=i!==null?i.baseLanes|l:l,t!==null){for(a=e.child=t.child,n=0;a!==null;)n=n|a.lanes|a.childLanes,a=a.sibling;a=n&~i}else a=0,e.child=null;return nd(t,e,i,l,a)}if((l&536870912)!==0)e.memoizedState={baseLanes:0,cachePool:null},t!==null&&Yi(e,i!==null?i.cachePool:null),i!==null?ur(e,i):qc(),cr(e);else return a=e.lanes=536870912,nd(t,e,i!==null?i.baseLanes|l:l,l,a)}else i!==null?(Yi(e,i.cachePool),ur(e,i),Rl(),e.memoizedState=null):(t!==null&&Yi(e,null),qc(),Rl());return Vt(t,e,n,l),e.child}function Yn(t,e){return t!==null&&t.tag===22||e.stateNode!==null||(e.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),e.sibling}function nd(t,e,l,a,n){var i=Mc();return i=i===null?null:{parent:Yt._currentValue,pool:i},e.memoizedState={baseLanes:l,cachePool:i},t!==null&&Yi(e,null),qc(),cr(e),t!==null&&ia(t,e,a,!0),e.childLanes=n,null}function lu(t,e){return e=au({mode:e.mode,children:e.children},t.mode),e.ref=t.ref,t.child=e,e.return=t,e}function id(t,e,l){return ra(e,t.child,null,l),t=lu(e,e.pendingProps),t.flags|=2,Ee(e),e.memoizedState=null,t}function l1(t,e,l){var a=e.pendingProps,n=(e.flags&128)!==0;if(e.flags&=-129,t===null){if(lt){if(a.mode==="hidden")return t=lu(e,a),e.lanes=536870912,t.memoizedState={baseLanes:0,cachePool:null},Yn(null,t);if(Gc(e),(t=At)?(t=O0(t,Re),t=t!==null&&t.data==="&"?t:null,t!==null&&(e.memoizedState={dehydrated:t,treeContext:_l!==null?{id:$e,overflow:Fe}:null,retryLane:536870912,hydrationErrors:null},l=Qf(t),l.return=e,e.child=l,Kt=e,At=null)):t=null,t===null)throw wl(e);return e.lanes=536870912,null}return lu(e,a)}var i=t.memoizedState;if(i!==null){var u=i.dehydrated;if(Gc(e),n)if(e.flags&256)e.flags&=-257,e=id(t,e,l);else if(e.memoizedState!==null)e.child=t.child,e.flags|=128,e=null;else throw Error(d(558));else if(Lt||ia(t,e,l,!1),n=(l&t.childLanes)!==0,Lt||n){if(Ul.current===null){if(a=_t,a!==null&&(u=Vs(a,l),u!==0&&u!==i.retryLane))throw i.retryLane=u,ea(t,u),be(a,t,u),co;zu()}e=id(t,e,l)}else t=i.treeContext,At=qe(u.nextSibling),Kt=e,lt=!0,jl=null,Re=!1,t!==null&&Zf(e,t),e=lu(e,a),e.flags|=134221824;return e}return t=rl(t.child,{mode:a.mode,children:a.children}),t.ref=e.ref,e.child=t,t.return=e,t}function Xa(t,e){var l=e.ref;if(l===null)t!==null&&t.ref!==null&&(e.flags|=4194816);else{if(typeof l!="function"&&typeof l!="object")throw Error(d(284));(t===null||t.ref!==l)&&(e.flags|=4194816)}}function oo(t,e,l,a,n){return ua(e),l=Xc(t,e,l,a,void 0,n),a=Vc(),t!==null&&!Lt?(Zc(t,e,n),xl(t,e,n)):(lt&&a&&Ui(e),e.flags|=1,Vt(t,e,l,n),e.child)}function ud(t,e,l,a,n,i){return ua(e),e.updateQueue=null,l=sr(e,a,l,n),or(t),a=Vc(),t!==null&&!Lt?(Zc(t,e,i),xl(t,e,i)):(lt&&a&&Ui(e),e.flags|=1,Vt(t,e,l,i),e.child)}function cd(t,e,l,a,n){if(ua(e),e.stateNode===null){var i=Da,u=l.contextType;typeof u=="object"&&u!==null&&(i=te(u)),i=new l(a,i),e.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,i.updater=io,e.stateNode=i,i._reactInternals=e,i=e.stateNode,i.props=a,i.state=e.memoizedState,i.refs={},Uc(e),u=l.contextType,i.context=typeof u=="object"&&u!==null?te(u):Da,i.state=e.memoizedState,u=l.getDerivedStateFromProps,typeof u=="function"&&(no(e,l,u,a),i.state=e.memoizedState),typeof l.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(u=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),u!==i.state&&io.enqueueReplaceState(i,i.state,null),Un(e,a,i,n),Dn(),i.state=e.memoizedState),typeof i.componentDidMount=="function"&&(e.flags|=4194308),a=!0}else if(t===null){i=e.stateNode;var c=e.memoizedProps,s=ma(l,c);i.props=s;var p=i.context,b=l.contextType;u=Da,typeof b=="object"&&b!==null&&(u=te(b));var z=l.getDerivedStateFromProps;b=typeof z=="function"||typeof i.getSnapshotBeforeUpdate=="function",c=e.pendingProps!==c,b||typeof i.UNSAFE_componentWillReceiveProps!="function"&&typeof i.componentWillReceiveProps!="function"||(c||p!==u)&&Kr(e,i,a,u),Ol=!1;var m=e.memoizedState;i.state=m,Un(e,a,i,n),Dn(),p=e.memoizedState,c||m!==p||Ol?(typeof z=="function"&&(no(e,l,z,a),p=e.memoizedState),(s=Ol||kr(e,l,s,a,m,p,u))?(b||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount()),typeof i.componentDidMount=="function"&&(e.flags|=4194308)):(typeof i.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=a,e.memoizedState=p),i.props=a,i.state=p,i.context=u,a=s):(typeof i.componentDidMount=="function"&&(e.flags|=4194308),a=!1)}else{i=e.stateNode,Hc(t,e),u=e.memoizedProps,b=ma(l,u),i.props=b,z=e.pendingProps,m=i.context,p=l.contextType,s=Da,typeof p=="object"&&p!==null&&(s=te(p)),c=l.getDerivedStateFromProps,(p=typeof c=="function"||typeof i.getSnapshotBeforeUpdate=="function")||typeof i.UNSAFE_componentWillReceiveProps!="function"&&typeof i.componentWillReceiveProps!="function"||(u!==z||m!==s)&&Kr(e,i,a,s),Ol=!1,m=e.memoizedState,i.state=m,Un(e,a,i,n),Dn();var x=e.memoizedState;u!==z||m!==x||Ol||t!==null&&t.dependencies!==null&&Bi(t.dependencies)?(typeof c=="function"&&(no(e,l,c,a),x=e.memoizedState),(b=Ol||kr(e,l,b,a,m,x,s)||t!==null&&t.dependencies!==null&&Bi(t.dependencies))?(p||typeof i.UNSAFE_componentWillUpdate!="function"&&typeof i.componentWillUpdate!="function"||(typeof i.componentWillUpdate=="function"&&i.componentWillUpdate(a,x,s),typeof i.UNSAFE_componentWillUpdate=="function"&&i.UNSAFE_componentWillUpdate(a,x,s)),typeof i.componentDidUpdate=="function"&&(e.flags|=4),typeof i.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof i.componentDidUpdate!="function"||u===t.memoizedProps&&m===t.memoizedState||(e.flags|=4),typeof i.getSnapshotBeforeUpdate!="function"||u===t.memoizedProps&&m===t.memoizedState||(e.flags|=1024),e.memoizedProps=a,e.memoizedState=x),i.props=a,i.state=x,i.context=s,a=b):(typeof i.componentDidUpdate!="function"||u===t.memoizedProps&&m===t.memoizedState||(e.flags|=4),typeof i.getSnapshotBeforeUpdate!="function"||u===t.memoizedProps&&m===t.memoizedState||(e.flags|=1024),a=!1)}return i=a,Xa(t,e),a=(e.flags&128)!==0,i||a?(i=e.stateNode,l=a&&typeof l.getDerivedStateFromError!="function"?null:i.render(),e.flags|=1,t!==null&&a?(e.child=ra(e,t.child,null,n),e.child=ra(e,null,l,n)):Vt(t,e,l,n),e.memoizedState=i.state,t=e.child):t=xl(t,e,n),t}function od(t,e,l,a){return aa(),e.flags|=256,Vt(t,e,l,a),e.child}var so={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function fo(t){return{baseLanes:t,cachePool:Wf()}}function ro(t,e,l){return t=t!==null?t.childLanes&~l:0,e&&(t|=we),t}function sd(t,e,l){var a=e.pendingProps,n=!1,i=(e.flags&128)!==0,u;if((u=i)||(u=t!==null&&t.memoizedState===null?!1:(le.current&2)!==0),u&&(n=!0,e.flags&=-129),u=(e.flags&32)!==0,e.flags&=-33,t===null){if(lt){if(n?Hl(e):Rl(),(t=At)?(t=O0(t,Re),t=t!==null&&t.data!=="&"?t:null,t!==null&&(e.memoizedState={dehydrated:t,treeContext:_l!==null?{id:$e,overflow:Fe}:null,retryLane:536870912,hydrationErrors:null},l=Qf(t),l.return=e,e.child=l,Kt=e,At=null)):t=null,t===null)throw wl(e);return rs(t)?e.lanes=32:e.lanes=536870912,null}return i=a.children,a=a.fallback,n?(Rl(),n=e.mode,i=au({mode:"hidden",children:i},n),a=la(a,n,l,null),i.return=e,a.return=e,i.sibling=a,e.child=i,a=e.child,a.memoizedState=fo(l),a.childLanes=ro(t,u,l),e.memoizedState=so,Yn(null,a)):(Hl(e),mo(e,i))}var c=t.memoizedState;if(c!==null){var s=c.dehydrated;if(s!==null)return a1(t,e,i,u,a,s,c,l)}return n?(Rl(),n=a.fallback,i=e.mode,c=t.child,s=c.sibling,a=rl(c,{mode:"hidden",children:a.children}),a.subtreeFlags=c.subtreeFlags&1206910976,s!==null?n=rl(s,n):(n=la(n,i,l,null),n.flags|=2),n.return=e,a.return=e,a.sibling=n,e.child=a,Yn(null,a),a=e.child,n=t.child.memoizedState,n===null?n=fo(l):(i=n.cachePool,i!==null?(c=Yt._currentValue,i=i.parent!==c?{parent:c,pool:c}:i):i=Wf(),n={baseLanes:n.baseLanes|l,cachePool:i}),a.memoizedState=n,a.childLanes=ro(t,u,l),e.memoizedState=so,Yn(t.child,a)):(Hl(e),l=t.child,t=l.sibling,l=rl(l,{mode:"visible",children:a.children}),l.return=e,l.sibling=null,t!==null&&(u=e.deletions,u===null?(e.deletions=[t],e.flags|=16):u.push(t)),e.child=l,e.memoizedState=null,l)}function mo(t,e){return e=au({mode:"visible",children:e},t.mode),e.return=t,t.child=e}function au(t,e){return t=he(22,t,null,e),t.lanes=0,t}function nu(t,e,l){return ra(e,t.child,null,l),t=mo(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function a1(t,e,l,a,n,i,u,c){if(l)return e.flags&256?(Hl(e),e.flags&=-257,nu(t,e,c)):e.memoizedState!==null?(Rl(),e.child=t.child,e.flags|=128,null):(Rl(),i=n.fallback,u=e.mode,n=au({mode:"visible",children:n.children},u),i=la(i,u,c,null),i.flags|=2,n.return=e,i.return=e,n.sibling=i,e.child=n,ra(e,t.child,null,c),n=e.child,n.memoizedState=fo(c),n.childLanes=ro(t,a,c),e.memoizedState=so,Yn(null,n));if(Hl(e),rs(i)){if(a=i.nextSibling&&i.nextSibling.dataset,a)var s=a.dgst;return a=s,a!==""&&(n=Error(d(419)),n.stack="",n.digest=a,jn({value:n,source:null,stack:null})),nu(t,e,c)}if(Lt||ia(t,e,c,!1),a=(c&t.childLanes)!==0,Lt||a){if(Ul.current!==null)return nu(t,e,c);if(a=_t,a!==null&&(n=Vs(a,c),n!==0&&n!==u.retryLane))throw u.retryLane=n,ea(t,n),be(a,t,n),co;return fs(i)||zu(),nu(t,e,c)}return fs(i)?(e.flags|=192,e.child=t.child,null):(t=u.treeContext,At=qe(i.nextSibling),Kt=e,lt=!0,jl=null,Re=!1,t!==null&&Zf(e,t),e=mo(e,n.children),e.flags|=134221824,e)}function fd(t,e,l){t.lanes|=e;var a=t.alternate;a!==null&&(a.lanes|=e),Ri(t.return,e,l)}function rd(t){for(var e=null;t!==null;){var l=t.alternate;l!==null&&Zi(l)===null&&(e=t),t=t.sibling}return e}function iu(t,e,l,a,n,i){var u=t.memoizedState;u===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:a,tail:l,tailMode:n,treeForkCount:i}:(u.isBackwards=e,u.rendering=null,u.renderingStartTime=0,u.last=a,u.tail=l,u.tailMode=n,u.treeForkCount=i)}function ho(t){var e=t.child;for(t.child=null;e!==null;){var l=e.sibling;e.sibling=t.child,t.child=e,e=l}}function po(t,e,l){var a=e.pendingProps,n=a.revealOrder,i=a.tail;a=a.children;var u=le.current;if(e.flags&128)return Hn(e,u),null;var c=(u&2)!==0;if(c?(u=u&1|2,e.flags|=128):u&=1,Hn(e,u),n==="backwards"&&t!==null?(ho(t),Vt(t,e,a,l),ho(t)):Vt(t,e,a,l),a=lt?_n:0,!c&&t!==null&&(t.flags&128)!==0)t:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&fd(t,l,e);else if(t.tag===19)fd(t,l,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break t;for(;t.sibling===null;){if(t.return===null||t.return===e)break t;t=t.return}t.sibling.return=t.return,t=t.sibling}switch(n){case"backwards":l=rd(e.child),l===null?(n=e.child,e.child=null):(n=l.sibling,l.sibling=null,ho(e)),iu(e,!0,n,null,i,a);break;case"unstable_legacy-backwards":for(l=null,n=e.child,e.child=null;n!==null;){if(t=n.alternate,t!==null&&Zi(t)===null){e.child=n;break}t=n.sibling,n.sibling=l,l=n,n=t}iu(e,!0,l,null,i,a);break;case"together":iu(e,!1,null,null,void 0,a);break;case"independent":e.memoizedState=null;break;default:l=rd(e.child),l===null?(n=e.child,e.child=null):(n=l.sibling,l.sibling=null),iu(e,!1,n,l,i,a)}return e.child}function dd(t,e,l){var a=e.pendingProps;return Al(e,e.type,a.value),Vt(t,e,a.children,l),e.child}function xl(t,e,l){if(t!==null&&(e.dependencies=t.dependencies),Gl|=e.lanes,(l&e.childLanes)===0)if(t!==null){if(ia(t,e,l,!1),(l&e.childLanes)===0)return null}else return null;if(t!==null&&e.child!==t.child)throw Error(d(153));if(e.child!==null){for(t=e.child,l=rl(t,t.pendingProps),e.child=l,l.return=e;t.sibling!==null;)t=t.sibling,l=l.sibling=rl(t,t.pendingProps),l.return=e;l.sibling=null}return e.child}function go(t,e){return(t.lanes&e)!==0?!0:(t=t.dependencies,!!(t!==null&&Bi(t)))}function n1(t,e,l){switch(e.tag){case 3:fi(e,e.stateNode.containerInfo),Al(e,Yt,t.memoizedState.cache),aa();break;case 27:case 5:Qu(e);break;case 4:fi(e,e.stateNode.containerInfo);break;case 10:Al(e,e.type,e.memoizedProps.value);break;case 31:if(e.memoizedState!==null)return e.flags|=128,Gc(e),null;break;case 13:var a=e.memoizedState;if(a!==null){if(a.dehydrated!==null)return Hl(e),e.flags|=128,null;a=ia(t,e,l,!1);var n=e.child.childLanes;return a||(l&n)!==0?sd(t,e,l):(Hl(e),t=xl(t,e,l),t!==null?t.sibling:null)}Hl(e);break;case 19:if(e.flags&128)return po(t,e,l);if(n=(t.flags&128)!==0,a=(l&e.childLanes)!==0,a||(ia(t,e,l,!1),a=(l&e.childLanes)!==0),n){if(a)return po(t,e,l);e.flags|=128}if(n=e.memoizedState,n!==null&&(n.rendering=null,n.tail=null,n.lastEffect=null),Hn(e,le.current),a)break;return null;case 22:return e.lanes=0,ad(t,e,l,e.pendingProps);case 24:Al(e,Yt,t.memoizedState.cache)}return xl(t,e,l)}function md(t,e,l){if(t!==null)if(t.memoizedProps!==e.pendingProps)Lt=!0;else{if(!go(t,l)&&(e.flags&128)===0)return Lt=!1,n1(t,e,l);Lt=(t.flags&131072)!==0}else Lt=!1,lt&&(e.flags&1048576)!==0&&Vf(e,_n,e.index);switch(e.lanes=0,e.tag){case 16:t:{var a=e.pendingProps;if(t=sa(e.elementType),e.type=t,typeof t=="function")zc(t)?(a=ma(t,a),e.tag=1,e=cd(null,e,t,a,l)):(e.tag=0,e=oo(null,e,t,a,l));else{if(t!=null){var n=t.$$typeof;if(n===N){e.tag=11,e=td(null,e,t,a,l);break t}else if(n===Z){e.tag=14,e=ed(null,e,t,a,l);break t}else if(n===M){e.tag=10,e.type=t,e=dd(null,e,l);break t}}throw e=gt(t)||t,Error(d(306,e,""))}}return e;case 0:return oo(t,e,e.type,e.pendingProps,l);case 1:return a=e.type,n=ma(a,e.pendingProps),cd(t,e,a,n,l);case 3:t:{if(fi(e,e.stateNode.containerInfo),t===null)throw Error(d(387));a=e.pendingProps;var i=e.memoizedState;n=i.element,Hc(t,e),Un(e,a,null,l);var u=e.memoizedState;if(a=u.cache,Al(e,Yt,a),a!==i.cache&&Ac(e,[Yt],l,!0),Dn(),a=u.element,i.isDehydrated)if(i={element:a,isDehydrated:!1,cache:u.cache},e.updateQueue.baseState=i,e.memoizedState=i,e.flags&256){e=od(t,e,a,l);break t}else if(a!==n){n=De(Error(d(424)),e),jn(n),e=od(t,e,a,l);break t}else{switch(t=e.stateNode.containerInfo,t.nodeType){case 9:t=t.body;break;default:t=t.nodeName==="HTML"?t.ownerDocument.body:t}for(At=qe(t.firstChild),Kt=e,lt=!0,jl=null,Re=!0,l=ar(e,null,a,l),e.child=l;l;)l.flags=l.flags&-3|134221824,l=l.sibling}else{if(aa(),a===n){e=xl(t,e,l);break t}Vt(t,e,a,l)}e=e.child}return e;case 26:return Xa(t,e),t===null?(l=q0(e.type,null,e.pendingProps,null))?e.memoizedState=l:lt||(e.stateNode=x0(e.type,e.pendingProps,Sl.current,e)):e.memoizedState=q0(e.type,t.memoizedProps,e.pendingProps,t.memoizedState),null;case 27:return Qu(e),t===null&&lt&&(a=e.stateNode=U0(e.type,e.pendingProps,Sl.current),Kt=e,Re=!0,n=At,Vl(e.type)?(ds=n,At=qe(a.firstChild)):At=n),Vt(t,e,e.pendingProps.children,l),Xa(t,e),t===null&&(e.flags|=4194304),e.child;case 5:return t===null&&lt&&((n=a=At)&&(a=I1(a,e.type,e.pendingProps,Re),a!==null?(e.stateNode=a,Kt=e,At=qe(a.firstChild),Re=!1,n=!0):n=!1),n||wl(e)),Qu(e),n=e.type,i=e.pendingProps,u=t!==null?t.memoizedProps:null,a=i.children,as(n,i)?a=null:u!==null&&as(n,u)&&(e.flags|=32),e.memoizedState!==null&&(n=Xc(t,e,Kh,null,null,l),on._currentValue=n),Xa(t,e),Vt(t,e,a,l),e.child;case 6:return t===null&&lt&&((t=l=At)&&(l=P1(l,e.pendingProps,Re),l!==null?(e.stateNode=l,Kt=e,At=null,t=!0):t=!1),t||wl(e)),null;case 13:return sd(t,e,l);case 4:return fi(e,e.stateNode.containerInfo),a=e.pendingProps,t===null?e.child=ra(e,null,a,l):Vt(t,e,a,l),e.child;case 11:return td(t,e,e.type,e.pendingProps,l);case 7:return a=e.pendingProps,Xa(t,e),Vt(t,e,a,l),e.child;case 8:return Vt(t,e,e.pendingProps.children,l),e.child;case 12:return Vt(t,e,e.pendingProps.children,l),e.child;case 10:return dd(t,e,l);case 9:return n=e.type._context,a=e.pendingProps.children,ua(e),n=te(n),a=a(n),e.flags|=1,Vt(t,e,a,l),e.child;case 14:return ed(t,e,e.type,e.pendingProps,l);case 15:return ld(t,e,e.type,e.pendingProps,l);case 19:return po(t,e,l);case 31:return l1(t,e,l);case 22:return ad(t,e,l,e.pendingProps);case 24:return ua(e),a=te(Yt),t===null?(n=Mc(),n===null&&(n=_t,i=Cc(),n.pooledCache=i,i.refCount++,i!==null&&(n.pooledCacheLanes|=l),n=i),e.memoizedState={parent:a,cache:n},Uc(e),Al(e,Yt,n)):((t.lanes&l)!==0&&(Hc(t,e),Un(e,null,null,l),Dn()),n=t.memoizedState,i=e.memoizedState,n.parent!==a?(n={parent:a,cache:a},e.memoizedState=n,e.lanes===0&&(e.memoizedState=e.updateQueue.baseState=n),Al(e,Yt,a)):(a=i.cache,Al(e,Yt,a),a!==n.cache&&Ac(e,[Yt],l,!0))),Vt(t,e,e.pendingProps.children,l),e.child;case 30:return e.stateNode===null&&(e.stateNode={autoName:null,paired:null,clones:null,ref:null}),a=e.pendingProps,a.name!=null&&a.name!=="auto"?e.flags|=t===null?18882560:18874368:lt&&Ui(e),t!==null&&t.memoizedProps.name!==a.name?e.flags|=4194816:Xa(t,e),Vt(t,e,a.children,l),e.child;case 29:throw e.pendingProps}throw Error(d(156,e.tag))}function bl(t){t.flags|=4}function xo(t,e,l,a,n){var i;if((i=(t.mode&32)!==0)&&(i=l===null?Q0(e,a):Q0(e,a)&&(a.src!==l.src||a.srcSet!==l.srcSet)),i){if(t.flags|=16777216,(n&335544128)===n)if(t.stateNode.complete)t.flags|=8192;else if(Jd())t.flags|=8192;else throw fa=Li,Dc}else t.flags&=-16777217}function hd(t,e){if(e.type!=="stylesheet"||(e.state.loading&4)!==0)t.flags&=-16777217;else if(t.flags|=16777216,!X0(e))if(Jd())t.flags|=8192;else throw fa=Li,Dc}function uu(t,e){e!==null&&(t.flags|=4),t.flags&16384&&(e=t.tag!==22?Ls():536870912,t.lanes|=e,Ja|=e)}function Gn(t,e){if(!lt)switch(t.tailMode){case"visible":break;case"collapsed":for(var l=t.tail,a=null;l!==null;)l.alternate!==null&&(a=l),l=l.sibling;a===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:a.sibling=null;break;default:for(e=t.tail,l=null;e!==null;)e.alternate!==null&&(l=e),e=e.sibling;l===null?t.tail=null:l.sibling=null}}function Ct(t){var e=t.alternate!==null&&t.alternate.child===t.child,l=0,a=0;if(e)for(var n=t.child;n!==null;)l|=n.lanes|n.childLanes,a|=n.subtreeFlags&1206910976,a|=n.flags&1206910976,n.return=t,n=n.sibling;else for(n=t.child;n!==null;)l|=n.lanes|n.childLanes,a|=n.subtreeFlags,a|=n.flags,n.return=t,n=n.sibling;return t.subtreeFlags|=a,t.childLanes=l,e}function i1(t,e,l){var a=e.pendingProps;switch(Ec(e),e.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Ct(e),null;case 1:return Ct(e),null;case 3:return l=e.stateNode,a=null,t!==null&&(a=t.memoizedState.cache),e.memoizedState.cache!==a&&(e.flags|=2048),hl(Yt),ya(),l.pendingContext&&(l.context=l.pendingContext,l.pendingContext=null),(t===null||t.child===null)&&(Ra(e)?bl(e):t===null||t.memoizedState.isDehydrated&&(e.flags&256)===0||(e.flags|=1024,jc())),Ct(e),null;case 26:var n=e.type,i=e.memoizedState;return t===null?(bl(e),i!==null?(Ct(e),hd(e,i)):(Ct(e),xo(e,n,null,a,l))):i?i!==t.memoizedState?(bl(e),Ct(e),hd(e,i)):(Ct(e),e.flags&=-16777217):(t=t.memoizedProps,t!==a&&bl(e),Ct(e),xo(e,n,t,a,l)),null;case 27:if(ri(e),l=Sl.current,n=e.type,t!==null&&e.stateNode!=null)t.memoizedProps!==a&&bl(e);else{if(!a){if(e.stateNode===null)throw Error(d(166));return Ct(e),e.subtreeFlags&=-33554433,null}t=Ke.current,Ra(e)?kf(e):(t=U0(n,a,l),e.stateNode=t,bl(e))}return Ct(e),e.subtreeFlags&=-33554433,null;case 5:if(ri(e),n=e.type,t!==null&&e.stateNode!=null)t.memoizedProps!==a&&bl(e);else{if(!a){if(e.stateNode===null)throw Error(d(166));return Ct(e),e.subtreeFlags&=-33554433,null}if(i=Ke.current,Ra(e))kf(e);else{var u=Wn(Sl.current);switch(i){case 1:i=u.createElementNS("http://www.w3.org/2000/svg",n);break;case 2:i=u.createElementNS("http://www.w3.org/1998/Math/MathML",n);break;default:switch(n){case"svg":i=u.createElementNS("http://www.w3.org/2000/svg",n);break;case"math":i=u.createElementNS("http://www.w3.org/1998/Math/MathML",n);break;case"script":i=u.createElement("div"),i.innerHTML="<script><\/script>",i=i.removeChild(i.firstChild);break;case"select":i=typeof a.is=="string"?u.createElement("select",{is:a.is}):u.createElement("select"),a.multiple?i.multiple=!0:a.size&&(i.size=a.size);break;default:i=typeof a.is=="string"?u.createElement(n,{is:a.is}):u.createElement(n)}}i[Pt]=e,i[me]=a;t:for(u=e.child;u!==null;){if(u.tag===5||u.tag===6)i.appendChild(u.stateNode);else if(u.tag!==4&&u.tag!==27&&u.child!==null){u.child.return=u,u=u.child;continue}if(u===e)break t;for(;u.sibling===null;){if(u.return===null||u.return===e)break t;u=u.return}u.sibling.return=u.return,u=u.sibling}e.stateNode=i;t:switch(ne(i,n,a),n){case"button":case"input":case"select":case"textarea":a=!!a.autoFocus;break t;case"img":a=!0;break t;default:a=!1}a&&bl(e)}}return Ct(e),e.subtreeFlags&=-33554433,xo(e,e.type,t===null?null:t.memoizedProps,e.pendingProps,l),null;case 6:if(t&&e.stateNode!=null)t.memoizedProps!==a&&bl(e);else{if(typeof a!="string"&&e.stateNode===null)throw Error(d(166));if(t=Sl.current,Ra(e)){if(t=e.stateNode,l=e.memoizedProps,a=null,n=Kt,n!==null)switch(n.tag){case 27:case 5:a=n.memoizedProps}t[Pt]=e,t=!!(t.nodeValue===l||a!==null&&a.suppressHydrationWarning===!0||m0(t.nodeValue,l)),t||wl(e,!0)}else t=Wn(t).createTextNode(a),t[Pt]=e,e.stateNode=t}return Ct(e),null;case 31:if(l=e.memoizedState,t===null||t.memoizedState!==null){if(a=Ra(e),l!==null){if(t===null){if(!a)throw Error(d(318));if(t=e.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(d(557));t[Pt]=e}else aa(),(e.flags&128)===0&&(e.memoizedState=null),e.flags|=4;Ct(e),t=!1}else l=jc(),t!==null&&t.memoizedState!==null&&(t.memoizedState.hydrationErrors=l),t=!0;if(!t)return e.flags&256?(Ee(e),e):(Ee(e),null);if((e.flags&128)!==0)throw Error(d(558))}return Ct(e),null;case 13:if(a=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(n=Ra(e),a!==null&&a.dehydrated!==null){if(t===null){if(!n)throw Error(d(318));if(n=e.memoizedState,n=n!==null?n.dehydrated:null,!n)throw Error(d(317));n[Pt]=e}else aa(),(e.flags&128)===0&&(e.memoizedState=null),e.flags|=4;Ct(e),n=!1}else n=jc(),t!==null&&t.memoizedState!==null&&(t.memoizedState.hydrationErrors=n),n=!0;if(!n)return e.flags&256?(Ee(e),e):(Ee(e),null)}return Ee(e),(e.flags&128)!==0?(e.lanes=l,e):(l=a!==null,t=t!==null&&t.memoizedState!==null,l&&(a=e.child,n=null,a.alternate!==null&&a.alternate.memoizedState!==null&&a.alternate.memoizedState.cachePool!==null&&(n=a.alternate.memoizedState.cachePool.pool),i=null,a.memoizedState!==null&&a.memoizedState.cachePool!==null&&(i=a.memoizedState.cachePool.pool),i!==n&&(a.flags|=2048)),l!==t&&l&&(e.child.flags|=8192),uu(e,e.updateQueue),Ct(e),null);case 4:return ya(),t===null&&Io(e.stateNode.containerInfo),e.flags|=67108864,Ct(e),null;case 10:return hl(e.type),Ct(e),null;case 19:if(Lc(e),a=e.memoizedState,a===null)return Ct(e),null;if(n=(e.flags&128)!==0,i=a.rendering,i===null)if(n)Gn(a,!1);else{if(Bt!==0||t!==null&&(t.flags&128)!==0)for(t=e.child;t!==null;){if(i=Zi(t),i!==null){for(e.flags|=128,Gn(a,!1),t=i.updateQueue,e.updateQueue=t,uu(e,t),e.subtreeFlags=0,t=l,l=e.child;l!==null;)Lf(l,t),l=l.sibling;return Hn(e,le.current&1|2),lt&&dl(e,a.treeForkCount),e.child}t=t.sibling}a.tail!==null&&ye()>bu&&(e.flags|=128,n=!0,Gn(a,!1),e.lanes=4194304)}else{if(!n)if(t=Zi(i),t!==null){if(e.flags|=128,n=!0,t=t.updateQueue,e.updateQueue=t,uu(e,t),Gn(a,!0),a.tail===null&&a.tailMode!=="collapsed"&&a.tailMode!=="visible"&&!i.alternate&&!lt)return Ct(e),null}else 2*ye()-a.renderingStartTime>bu&&l!==536870912&&(e.flags|=128,n=!0,Gn(a,!1),e.lanes=4194304);a.isBackwards?(i.sibling=e.child,e.child=i):(t=a.last,t!==null?t.sibling=i:e.child=i,a.last=i)}if(a.tail!==null){t=a.tail;t:{for(l=t;l!==null;){if(l.alternate!==null){l=!1;break t}l=l.sibling}l=!0}return a.rendering=t,a.tail=t.sibling,a.renderingStartTime=ye(),t.sibling=null,i=le.current,i=n?i&1|2:i&1,a.tailMode==="visible"||a.tailMode==="collapsed"||!l||lt?Hn(e,i):(l=i,wt(ee,e),wt(le,l),ce===null&&(ce=e)),lt&&dl(e,a.treeForkCount),t}return Ct(e),null;case 22:case 23:return Ee(e),Yc(),a=e.memoizedState!==null,t!==null?t.memoizedState!==null!==a&&(e.flags|=8192):a&&(e.flags|=8192),a?(l&536870912)!==0&&(e.flags&128)===0&&(Ct(e),e.subtreeFlags&6&&(e.flags|=8192)):Ct(e),l=e.updateQueue,l!==null&&uu(e,l.retryQueue),l=null,t!==null&&t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(l=t.memoizedState.cachePool.pool),a=null,e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(a=e.memoizedState.cachePool.pool),a!==l&&(e.flags|=2048),t!==null&&It(oa),null;case 24:return l=null,t!==null&&(l=t.memoizedState.cache),e.memoizedState.cache!==l&&(e.flags|=2048),hl(Yt),Ct(e),null;case 25:return null;case 30:return e.flags|=33554432,Ct(e),null}throw Error(d(156,e.tag))}function u1(t,e){switch(Ec(e),e.tag){case 1:return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return hl(Yt),ya(),t=e.flags,(t&65536)!==0&&(t&128)===0?(e.flags=t&-65537|128,e):null;case 26:case 27:case 5:return ri(e),null;case 31:if(e.memoizedState!==null){if(Ee(e),e.alternate===null)throw Error(d(340));aa()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 13:if(Ee(e),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(d(340));aa()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return Lc(e),t=e.flags,t&65536?(e.flags=t&-65537|128,t=e.memoizedState,t!==null&&(t.rendering=null,t.tail=null),e.flags|=4,e):null;case 4:return ya(),null;case 10:return hl(e.type),null;case 22:case 23:return Ee(e),Yc(),t!==null&&It(oa),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 24:return hl(Yt),null;case 25:return null;default:return null}}function pd(t,e){switch(Ec(e),e.tag){case 3:hl(Yt),ya();break;case 26:case 27:case 5:ri(e);break;case 4:ya();break;case 31:e.memoizedState!==null&&Ee(e);break;case 13:Ee(e);break;case 19:Lc(e);break;case 10:hl(e.type);break;case 22:case 23:Ee(e),Yc(),t!==null&&It(oa);break;case 24:hl(Yt)}}function Ln(t,e){try{var l=e.updateQueue,a=l!==null?l.lastEffect:null;if(a!==null){var n=a.next;l=n;do{if((l.tag&t)===t){a=void 0;var i=l.create,u=l.inst;a=i(),u.destroy=a}l=l.next}while(l!==n)}}catch(c){Nt(e,e.return,c)}}function Bl(t,e,l){try{var a=e.updateQueue,n=a!==null?a.lastEffect:null;if(n!==null){var i=n.next;a=i;do{if((a.tag&t)===t){var u=a.inst,c=u.destroy;if(c!==void 0){u.destroy=void 0,n=e;var s=l,p=c;try{p()}catch(b){Nt(n,s,b)}}}a=a.next}while(a!==i)}}catch(b){Nt(e,e.return,b)}}function gd(t){var e=t.updateQueue;if(e!==null){var l=t.stateNode;try{ir(e,l)}catch(a){Nt(t,t.return,a)}}}function xd(t,e,l){l.props=ma(t.type,t.memoizedProps),l.state=t.memoizedState;try{l.componentWillUnmount()}catch(a){Nt(t,e,a)}}function We(t,e){try{var l=t.ref;if(l!==null){switch(t.tag){case 26:case 27:case 5:var a=t.stateNode;break;case 30:var n=t.stateNode,i=sl(t.memoizedProps,n);(n.ref===null||n.ref.name!==i)&&(n.ref=T0(i)),a=n.ref;break;case 7:if(t.stateNode===null){var u=new Ce(t);y(t.child,!1,F1,u,void 0,void 0),t.stateNode=u}a=t.stateNode;break;default:a=t.stateNode}typeof l=="function"?t.refCleanup=l(a):l.current=a}}catch(c){Nt(t,e,c)}}function ae(t,e){var l=t.ref,a=t.refCleanup;if(l!==null)if(typeof a=="function")try{a()}catch(n){Nt(t,e,n)}finally{t.refCleanup=null,t=t.alternate,t!=null&&(t.refCleanup=null)}else if(typeof l=="function")try{l(null)}catch(n){Nt(t,e,n)}else l.current=null}function cu(t,e){if((t.tag===5||t.tag===27||t.tag===6)&&t.alternate===null&&e!==null)for(var l=0;l<e.length;l++)C0(t.stateNode,e[l])}function bd(t){for(var e=t.return;e!==null&&(vo(e)&&C0(t.stateNode,e.stateNode),!bo(e));)e=e.return}function Qn(t){for(var e=t.return;e!==null&&(vo(e)&&W1(t.stateNode,e.stateNode),!bo(e));)e=e.return}function bo(t){return t.tag===5||t.tag===3||t.tag===27}function vo(t){return t&&t.tag===7&&t.stateNode!==null}function yo(t){var e=t.type,l=t.memoizedProps,a=t.stateNode;try{t:switch(e){case"button":case"input":case"select":case"textarea":l.autoFocus&&a.focus();break t;case"img":l.src?a.src=l.src:l.srcSet&&(a.srcset=l.srcSet)}}catch(n){Nt(t,t.return,n)}}function So(t,e,l){try{var a=t.stateNode;M1(a,t.type,l,e),a[me]=e}catch(n){Nt(t,t.return,n)}}function vd(t){return t.tag===5||t.tag===3||t.tag===26||t.tag===27&&Vl(t.type)||t.tag===4}function zo(t){t:for(;;){for(;t.sibling===null;){if(t.return===null||vd(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.tag===27&&Vl(t.type)||t.flags&2||t.child===null||t.tag===4)continue t;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function No(t,e,l,a){var n=t.tag;if(n===5||n===6)n=t.stateNode,e?(l.nodeType===9?l.body:l.nodeName==="HTML"?l.ownerDocument.body:l).insertBefore(n,e):(e=l.nodeType===9?l.body:l.nodeName==="HTML"?l.ownerDocument.body:l,e.appendChild(n),l=l._reactRootContainer,l!=null||e.onclick!==null||(e.onclick=Je)),cu(t,a),xt=!0;else if(n!==4&&(n===27&&(cu(t,a),a=null,Vl(t.type)&&(l=t.stateNode,e=null)),t=t.child,t!==null))for(No(t,e,l,a),t=t.sibling;t!==null;)No(t,e,l,a),t=t.sibling}function ou(t,e,l,a){var n=t.tag;if(n===5||n===6)n=t.stateNode,e?l.insertBefore(n,e):l.appendChild(n),cu(t,a),xt=!0;else if(n!==4&&(n===27&&(cu(t,a),a=null,Vl(t.type)&&(l=t.stateNode)),t=t.child,t!==null))for(ou(t,e,l,a),t=t.sibling;t!==null;)ou(t,e,l,a),t=t.sibling}function yd(t){var e=t.stateNode,l=t.memoizedProps;try{for(var a=t.type,n=e.attributes;n.length;)e.removeAttributeNode(n[0]);ne(e,a,l),e[Pt]=t,e[me]=l}catch(i){Nt(t,t.return,i)}}var su=!1,_e=null;function Sd(t){(t.tag===30||(t.subtreeFlags&33554432)!==0)&&(su=!0)}var Ie=null;function zd(){var t=Ie;return Ie=null,t}var pe=0;function Va(t,e,l,a,n){return pe=0,Nd(t.child,e,l,a,n)}function Nd(t,e,l,a,n){for(var i=!1;t!==null;){if(t.tag===5){var u=t.stateNode;if(a!==null){var c=us(u);a.push(c),c.view&&(i=!0)}else i||us(u).view&&(i=!0);su=!0,z0(u,pe===0?e:e+"_"+pe,l),pe++}else(t.tag!==22||t.memoizedState===null)&&(t.tag===30&&n||Nd(t.child,e,l,a,n)&&(i=!0));t=t.sibling}return i}function Pe(t,e){for(;t!==null;)t.tag===5?N0(t.stateNode,t.memoizedProps):(t.tag!==22||t.memoizedState===null)&&(t.tag===30&&e||Pe(t.child,e)),t=t.sibling}function fu(t){if((t.subtreeFlags&18874368)!==0)for(t=t.child;t!==null;){if((t.tag!==22||t.memoizedState===null)&&(fu(t),t.tag===30&&(t.flags&18874368)!==0&&t.stateNode.paired)){var e=t.memoizedProps;if(e.name==null||e.name==="auto")throw Error(d(544));var l=e.name;e=fl(e.default,e.share),e!=="none"&&(Va(t,l,e,null,!1)||Pe(t.child,!1))}t=t.sibling}}function To(t,e){if(t.tag===30){var l=t.stateNode,a=t.memoizedProps,n=sl(a,l),i=fl(a.default,l.paired?a.share:a.enter);i!=="none"?Va(t,n,i,null,!1)?(fu(t),l.paired||e||Ia(t,a.onEnter)):Pe(t.child,!1):fu(t)}else if((t.subtreeFlags&33554432)!==0)for(t=t.child;t!==null;)To(t,e),t=t.sibling;else fu(t)}function Eo(t){if(_e!==null&&_e.size!==0){var e=_e;if((t.subtreeFlags&18874368)!==0)for(t=t.child;t!==null;){if(t.tag!==22||t.memoizedState===null){if(t.tag===30&&(t.flags&18874368)!==0){var l=t.memoizedProps,a=l.name;if(a!=null&&a!=="auto"){var n=e.get(a);if(n!==void 0){var i=fl(l.default,l.share);if(i!=="none"&&(Va(t,a,i,null,!1)?(i=t.stateNode,n.paired=i,i.paired=n,Ia(t,l.onShare)):Pe(t.child,!1)),e.delete(a),e.size===0)break}}}Eo(t)}t=t.sibling}}}function _o(t){if(t.tag===30){var e=t.memoizedProps,l=sl(e,t.stateNode),a=_e!==null?_e.get(l):void 0,n=fl(e.default,a!==void 0?e.share:e.exit);n!=="none"&&(Va(t,l,n,null,!1)?a!==void 0?(n=t.stateNode,a.paired=n,n.paired=a,_e.delete(l),Ia(t,e.onShare)):Ia(t,e.onExit):Pe(t.child,!1)),_e!==null&&Eo(t)}else if((t.subtreeFlags&33554432)!==0)for(t=t.child;t!==null;)_o(t),t=t.sibling;else _e!==null&&Eo(t)}function Td(t){for(t=t.child;t!==null;){if(t.tag===30){var e=t.memoizedProps,l=sl(e,t.stateNode);e=fl(e.default,e.update),t.flags&=-5,e!=="none"&&Va(t,l,e,t.memoizedState=[],!1)}else(t.subtreeFlags&33554432)!==0&&Td(t);t=t.sibling}}function jo(t){if((t.subtreeFlags&18874368)!==0)for(t=t.child;t!==null;){if(t.tag!==22||t.memoizedState===null){if(t.tag===30&&(t.flags&18874368)!==0){var e=t.stateNode;e.paired!==null&&(e.paired=null,Pe(t.child,!1))}jo(t)}t=t.sibling}}function ru(t){if(t.tag===30)t.stateNode.paired=null,Pe(t.child,!1),jo(t);else if((t.subtreeFlags&33554432)!==0)for(t=t.child;t!==null;)ru(t),t=t.sibling;else jo(t)}function Ed(t){for(t=t.child;t!==null;)t.tag===30?Pe(t.child,!1):(t.subtreeFlags&33554432)!==0&&Ed(t),t=t.sibling}function wo(t,e,l,a,n,i,u){for(var c=!1;e!==null;){if(e.tag===5){var s=e.stateNode;if(i!==null&&pe<i.length){var p=i[pe],b=us(s);(p.view||b.view)&&(c=!0);var z;if(z=(t.flags&4)===0)if(b.clip)z=!0;else{z=p.rect;var m=b.rect;z=z.y!==m.y||z.x!==m.x||z.height!==m.height||z.width!==m.width}z&&(t.flags|=4),b.abs?b=!p.abs:(p=p.rect,b=b.rect,b=p.height!==b.height||p.width!==b.width),b&&(t.flags|=32)}else t.flags|=32;(t.flags&4)!==0&&z0(s,pe===0?l:l+"_"+pe,n),c&&(t.flags&4)!==0||(Ie===null&&(Ie=[]),Ie.push(s,pe===0?a:a+"_"+pe,e.memoizedProps)),pe++}else(e.tag!==22||e.memoizedState===null)&&(e.tag===30&&u?t.flags|=e.flags&32:wo(t,e.child,l,a,n,i,u)&&(c=!0));e=e.sibling}return c}function _d(t,e){for(t=t.child;t!==null;){if(t.tag===30){var l=t.memoizedProps,a=t.stateNode,n=sl(l,a),i=fl(l.default,l.update),u;u=t.memoizedState,t.memoizedState=null,a=t;var c=t.child;pe=0,n=wo(a,c,n,n,i,u,!1),(t.flags&4)!==0&&n&&Ia(t,l.onUpdate)}else(t.subtreeFlags&33554432)!==0&&_d(t);t=t.sibling}}var Jt=!1,yt=!1,tl=!1,Ao=!1,jd=typeof WeakSet=="function"?WeakSet:Set,$t=null,el=!1,Xn=!1,du=!1,Co=!1;function c1(t,e,l){if(t=t.containerInfo,es=sn,t=Of(t),pc(t)){if("selectionStart"in t)var a={start:t.selectionStart,end:t.selectionEnd};else t:{a=(a=t.ownerDocument)&&a.defaultView||window;var n=a.getSelection&&a.getSelection();if(n&&n.rangeCount!==0){a=n.anchorNode;var i=n.anchorOffset,u=n.focusNode;n=n.focusOffset;try{a.nodeType,u.nodeType}catch{a=null;break t}var c=0,s=-1,p=-1,b=0,z=0,m=t,x=null;e:for(;;){for(var A;m!==a||i!==0&&m.nodeType!==3||(s=c+i),m!==u||n!==0&&m.nodeType!==3||(p=c+n),m.nodeType===3&&(c+=m.nodeValue.length),(A=m.firstChild)!==null;)x=m,m=A;for(;;){if(m===t)break e;if(x===a&&++b===i&&(s=c),x===u&&++z===n&&(p=c),(A=m.nextSibling)!==null)break;m=x,x=m.parentNode}m=A}a=s===-1||p===-1?null:{start:s,end:p}}else a=null}a=a||{start:0,end:0}}else a=null;for(ls={focusedElem:t,selectionRange:a},sn=!1,l=(l&335544064)===l,$t=e,e=l?9270:1024;$t!==null;){if(t=$t,l&&(a=t.deletions,a!==null))for(i=0;i<a.length;i++)l&&_o(a[i]);if(t.alternate===null&&(t.flags&2)!==0)l&&Sd(t),mu(l);else{if(t.tag===22){if(a=t.alternate,t.memoizedState!==null){a!==null&&a.memoizedState===null&&l&&_o(a),mu(l);continue}else if(a!==null&&a.memoizedState!==null){l&&Sd(t),mu(l);continue}}a=t.child,(t.subtreeFlags&e)!==0&&a!==null?(a.return=t,$t=a):(l&&Td(t),mu(l))}}_e=null}function mu(t){for(;$t!==null;){var e=$t,l=t,a=e.alternate,n=e.flags;switch(e.tag){case 0:case 11:case 15:break;case 1:if((n&1024)!==0&&a!==null){l=void 0,n=a.memoizedProps,a=a.memoizedState;var i=e.stateNode;try{var u=ma(e.type,n);l=i.getSnapshotBeforeUpdate(u,a),i.__reactInternalSnapshotBeforeUpdate=l}catch(c){Nt(e,e.return,c)}}break;case 3:if((n&1024)!==0){if(a=e.stateNode.containerInfo,l=a.nodeType,l===9)ss(a);else if(l===1)switch(a.nodeName){case"HEAD":case"HTML":case"BODY":ss(a);break;default:a.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;case 30:l&&a!==null&&(l=sl(a.memoizedProps,a.stateNode),n=e.memoizedProps,n=fl(n.default,n.update),n!=="none"&&Va(a,l,n,a.memoizedState=[],!0));break;default:if((n&1024)!==0)throw Error(d(163))}if(a=e.sibling,a!==null){a.return=e.return,$t=a;break}$t=e.return}}function wd(t,e,l){var a=l.flags;switch(l.tag){case 0:case 11:case 15:ll(t,l),a&4&&Ln(5,l);break;case 1:if(ll(t,l),a&4)if(t=l.stateNode,e===null)try{t.componentDidMount()}catch(u){Nt(l,l.return,u)}else{var n=ma(l.type,e.memoizedProps);e=e.memoizedState;try{t.componentDidUpdate(n,e,t.__reactInternalSnapshotBeforeUpdate)}catch(u){Nt(l,l.return,u)}}a&64&&gd(l),a&512&&We(l,l.return);break;case 3:if(ll(t,l),a&64&&(t=l.updateQueue,t!==null)){if(e=null,l.child!==null)switch(l.child.tag){case 27:case 5:e=l.child.stateNode;break;case 1:e=l.child.stateNode}try{ir(t,e)}catch(u){Nt(l,l.return,u)}}break;case 27:e===null&&a&4&&yd(l);case 26:case 5:ll(t,l),e===null&&a&4&&yo(l),a&512&&We(l,l.return);break;case 12:ll(t,l);break;case 31:ll(t,l),a&4&&Md(t,l);break;case 13:ll(t,l),a&4&&Dd(t,l),a&64&&(t=l.memoizedState,t!==null&&(t=t.dehydrated,t!==null&&(l=v1.bind(null,l),tp(t,l))));break;case 22:if(a=l.memoizedState!==null||Jt,!a){var i=e!==null&&e.memoizedState!==null||yt;e=Jt,n=yt,Jt=a,(yt=i)&&!n?(a=2,(l.subtreeFlags&8772)!==0&&(a|=1),Xe(t,l,a)):ll(t,l),Jt=e,yt=n}break;case 30:ll(t,l),a&512&&We(l,l.return);break;case 7:a&512&&We(l,l.return);default:ll(t,l)}}function Oo(t,e){for(t=t.child;t!==null;)Ad(t,e),t=t.sibling}function Ad(t,e){switch(t.tag){case 5:case 26:try{var l=t.stateNode;if(e){var a=l.style;typeof a.setProperty=="function"?a.setProperty("display","none","important"):a.display="none"}else{var n=t.stateNode,i=t.memoizedProps.style,u=i!=null&&i.hasOwnProperty("display")?i.display:null;n.style.display=u==null||typeof u=="boolean"?"":(""+u).trim()}}catch(s){Nt(t,t.return,s)}Mo(t,e);break;case 6:try{t.stateNode.nodeValue=e?"":t.memoizedProps,xt=!0}catch(s){Nt(t,t.return,s)}break;case 18:try{var c=t.stateNode;e?S0(c,!0):S0(t.stateNode,!1)}catch(s){Nt(t,t.return,s)}break;case 22:case 23:t.memoizedState===null&&Oo(t,e);break;default:Oo(t,e)}}function Mo(t,e){if(t.subtreeFlags&67108864)for(t=t.child;t!==null;){t:{var l=t,a=e;switch(l.tag){case 4:Ad(l,a);break t;case 22:l.memoizedState===null&&Mo(l,a);break t;default:Mo(l,a)}}t=t.sibling}}function Cd(t){var e=t.alternate;e!==null&&(t.alternate=null,Cd(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&bi(e)),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}var Dt=null,ge=!1;function Le(t,e,l){for(l=l.child;l!==null;)Od(t,e,l),l=l.sibling}function Od(t,e,l){if(Se&&typeof Se.onCommitFiberUnmount=="function")try{Se.onCommitFiberUnmount(dn,l)}catch{}switch(l.tag){case 26:yt||ae(l,e),Le(t,e,l),l.memoizedState?l.memoizedState.count--:l.stateNode&&!yt&&(l=l.stateNode,l.parentNode.removeChild(l));break;case 27:yt||ae(l,e),Qn(l);var a=Dt,n=ge;Vl(l.type)&&(Dt=l.stateNode,ge=!1),Le(t,e,l),H0(l.stateNode,l.type,l.memoizedProps),Dt=a,ge=n;break;case 5:yt||ae(l,e),Qn(l);case 6:if(l.tag===6&&Qn(l),a=Dt,n=ge,Dt=null,Le(t,e,l),Dt=a,ge=n,Dt!==null)if(ge)try{(Dt.nodeType===9?Dt.body:Dt.nodeName==="HTML"?Dt.ownerDocument.body:Dt).removeChild(l.stateNode),xt=!0}catch(i){Nt(l,e,i)}else try{Dt.removeChild(l.stateNode),xt=!0}catch(i){Nt(l,e,i)}break;case 18:Dt!==null&&(ge?(t=Dt,y0(t.nodeType===9?t.body:t.nodeName==="HTML"?t.ownerDocument.body:t,l.stateNode),fn(t)):y0(Dt,l.stateNode));break;case 4:a=Dt,n=ge,Dt=l.stateNode.containerInfo,ge=!0,Le(t,e,l),Dt=a,ge=n;break;case 0:case 11:case 14:case 15:Bl(2,l,e),yt||Bl(4,l,e),Le(t,e,l);break;case 1:yt||(ae(l,e),a=l.stateNode,typeof a.componentWillUnmount=="function"&&xd(l,e,a)),Le(t,e,l);break;case 21:Le(t,e,l);break;case 22:yt=(a=yt)||l.memoizedState!==null,Le(t,e,l),yt=a;break;case 30:ae(l,e),Le(t,e,l);break;case 7:yt||ae(l,e),Le(t,e,l);break;default:Le(t,e,l)}}function Md(t,e){if(e.memoizedState===null&&(t=e.alternate,t!==null&&(t=t.memoizedState,t!==null))){t=t.dehydrated;try{fn(t)}catch(l){Nt(e,e.return,l)}}}function Dd(t,e){if(e.memoizedState===null&&(t=e.alternate,t!==null&&(t=t.memoizedState,t!==null&&(t=t.dehydrated,t!==null))))try{fn(t)}catch(l){Nt(e,e.return,l)}}function o1(t){switch(t.tag){case 31:case 13:case 19:var e=t.stateNode;return e===null&&(e=t.stateNode=new jd),e;case 22:return t=t.stateNode,e=t._retryCache,e===null&&(e=t._retryCache=new jd),e;default:throw Error(d(435,t.tag))}}function hu(t,e){var l=o1(t);e.forEach(function(a){if(!l.has(a)){l.add(a);var n=y1.bind(null,t,a);a.then(n,n)}})}function re(t,e,l){var a=e.deletions;if(a!==null)for(var n=0;n<a.length;n++){var i=a[n],u=t,c=e,s=c;t:for(;s!==null;){switch(s.tag){case 27:if(Vl(s.type)){Dt=s.stateNode,ge=!1;break t}break;case 5:Dt=s.stateNode,ge=!1;break t;case 3:case 4:Dt=s.stateNode.containerInfo,ge=!0;break t}s=s.return}if(Dt===null)throw Error(d(160));Od(u,c,i),Dt=null,ge=!1,u=i.alternate,u!==null&&(u.return=null),i.return=null}if(e.subtreeFlags&13886)for(e=e.child;e!==null;)Ud(e,t,l),e=e.sibling}var Qe=null;function Ud(t,e,l){var a=t.alternate,n=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(n&4&&(a=t.updateQueue,a=a!==null?a.events:null,a!==null))for(var i=0;i<a.length;i++){var u=a[i];u.ref.impl=u.nextImpl}re(e,t,l),de(t),n&4&&(Bl(3,t,t.return),Ln(3,t),Bl(5,t,t.return));break;case 1:re(e,t,l),de(t),n&512&&(yt||a===null||ae(a,a.return)),n&64&&Jt&&(t=t.updateQueue,t!==null&&(e=t.callbacks,e!==null&&(l=t.shared.hiddenCallbacks,t.shared.hiddenCallbacks=l===null?e:l.concat(e))));break;case 26:if(i=Qe,re(e,t,l),de(t),n&512&&(yt||a===null||ae(a,a.return)),n&4)if(n=a!==null?a.memoizedState:null,l=t.memoizedState,a===null)if(l===null)if(t.stateNode===null)if(Jt)t.stateNode=x0(t.type,t.memoizedProps,e.containerInfo,t);else{t:{e=t.type,l=t.memoizedProps,n=i.ownerDocument||i;e:switch(e){case"title":a=n.getElementsByTagName("title")[0],(!a||a[pn]||a[Pt]||a.namespaceURI==="http://www.w3.org/2000/svg"||a.hasAttribute("itemprop"))&&(a=n.createElement(e),n.head.insertBefore(a,n.querySelector("head > title"))),ne(a,e,l),a[Pt]=t,kt(a),e=a;break t;case"link":if(i=L0("link","href",n).get(e+(l.href||""))){for(u=0;u<i.length;u++)if(a=i[u],a.getAttribute("href")===(l.href==null||l.href===""?null:l.href)&&a.getAttribute("rel")===(l.rel==null?null:l.rel)&&a.getAttribute("title")===(l.title==null?null:l.title)&&a.getAttribute("crossorigin")===(l.crossOrigin==null?null:l.crossOrigin)){i.splice(u,1);break e}}a=n.createElement(e),ne(a,e,l),n.head.appendChild(a);break;case"meta":if(i=L0("meta","content",n).get(e+(l.content||""))){for(u=0;u<i.length;u++)if(a=i[u],a.getAttribute("content")===(l.content==null?null:""+l.content)&&a.getAttribute("name")===(l.name==null?null:l.name)&&a.getAttribute("property")===(l.property==null?null:l.property)&&a.getAttribute("http-equiv")===(l.httpEquiv==null?null:l.httpEquiv)&&a.getAttribute("charset")===(l.charSet==null?null:l.charSet)){i.splice(u,1);break e}}a=n.createElement(e),ne(a,e,l),n.head.appendChild(a);break;default:throw Error(d(468,e))}a[Pt]=t,kt(a),e=a}t.stateNode=e}else Jt||gs(i,t.type,t.stateNode);else t.stateNode=G0(i,l,t.memoizedProps);else n!==l?(n===null?(e=a.stateNode,e===null||yt||e.parentNode.removeChild(e)):n.count--,l===null?Jt||gs(i,t.type,t.stateNode):G0(i,l,t.memoizedProps)):l===null&&t.stateNode!==null&&So(t,t.memoizedProps,a.memoizedProps);break;case 27:re(e,t,l),de(t),n&512&&(yt||a===null||ae(a,a.return)),a!==null&&n&4&&So(t,t.memoizedProps,a.memoizedProps);break;case 5:if(i=tl,tl=!1,re(e,t,l),tl=i,de(t),n&512&&(yt||a===null||ae(a,a.return)),t.flags&32){e=t.stateNode;try{_a(e,""),xt=!0}catch(b){Nt(t,t.return,b)}}n&4&&t.stateNode!=null&&(e=t.memoizedProps,So(t,e,a!==null?a.memoizedProps:e)),n&1024&&(Ao=!0);break;case 6:if(re(e,t,l),de(t),n&4){if(t.stateNode===null)throw Error(d(162));e=t.memoizedProps,l=t.stateNode;try{l.nodeValue=e,xt=!0}catch(b){Nt(t,t.return,b)}}break;case 3:if(xt=!1,Au=null,i=Qe,Qe=In(e.containerInfo),re(e,t,l),Qe=i,de(t),n&4&&a!==null&&a.memoizedState.isDehydrated)try{fn(e.containerInfo)}catch(b){Nt(t,t.return,b)}Ao&&(Ao=!1,Hd(t)),xt=!1;break;case 4:n=tl,tl=Jt,a=tf(),i=Qe,Qe=In(t.stateNode.containerInfo),re(e,t,l),de(t),Qe=i,xt&&Xn&&(du=!0),xt=a,tl=n;break;case 12:re(e,t,l),de(t);break;case 31:re(e,t,l),de(t),n&4&&(e=t.updateQueue,e!==null&&(t.updateQueue=null,hu(t,e)));break;case 13:re(e,t,l),de(t),t.child.flags&8192&&t.memoizedState!==null!=(a!==null&&a.memoizedState!==null)&&(xu=ye()),n&4&&(e=t.updateQueue,e!==null&&(t.updateQueue=null,hu(t,e)));break;case 22:i=t.memoizedState!==null,u=a!==null&&a.memoizedState!==null;var c=Jt,s=yt,p=tl;Jt=c||i,tl=p||i,yt=s||u,re(e,t,l),yt=s,tl=p,Jt=c,de(t),n&8192&&(e=t.stateNode,e._visibility=i?e._visibility&-2:e._visibility|1,!i||a===null||u||Jt||yt||(e=u||yt,l=Jt,a=yt,Jt=i||Jt,yt=e,ql(t,2),Jt=l,yt=a),!i&&tl||Oo(t,i)),n&4&&(e=t.updateQueue,e!==null&&(l=e.retryQueue,l!==null&&(e.retryQueue=null,hu(t,l))));break;case 19:re(e,t,l),de(t),n&4&&(e=t.updateQueue,e!==null&&(t.updateQueue=null,hu(t,e)));break;case 30:n&512&&(yt||a===null||ae(a,a.return)),n=tf(),i=Xn,u=(l&335544064)===l,c=t.memoizedProps,Xn=u&&fl(c.default,c.update)!=="none",re(e,t,l),de(t),u&&a!==null&&xt&&(t.flags|=4),Xn=i,xt=n;break;case 21:break;case 7:n&512&&(yt||a===null||ae(a,a.return)),a&&a.stateNode!==null&&(a.stateNode._fragmentFiber=t);default:re(e,t,l),de(t)}}function de(t){var e=t.flags;if(e&2){try{for(var l,a=t.return;a!==null;){if(vd(a)){l=a;break}a=a.return}a=null;for(var n=t.return;n!==null;){if(vo(n)){var i=n.stateNode;a===null?a=[i]:a.push(i)}if(bo(n))break;n=n.return}var u=a;if(l==null)throw Error(d(160));switch(l.tag){case 27:var c=l.stateNode,s=zo(t);ou(t,s,c,u);break;case 5:var p=l.stateNode;l.flags&32&&(_a(p,""),l.flags&=-33);var b=zo(t);ou(t,b,p,u);break;case 3:case 4:var z=l.stateNode.containerInfo,m=zo(t);No(t,m,z,u);break;default:throw Error(d(161))}}catch(x){Nt(t,t.return,x)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function Hd(t){if(t.subtreeFlags&1024)for(t=t.child;t!==null;){var e=t;Hd(e),e.tag===5&&e.flags&1024&&(e=e.stateNode,sn=!0,e.reset(),sn=!1),t=t.sibling}}function Za(t,e){if(e.subtreeFlags&9270)for(e=e.child;e!==null;)Rd(e,t),e=e.sibling;else _d(e)}function Rd(t,e){var l=t.alternate;if(l===null)To(t,!1);else switch(t.tag){case 3:if(Co=el=!1,zd(),Za(e,t),!el&&!du){if(t=Ie,t!==null)for(var a=0;a<t.length;a+=3){l=t[a];var n=t[a+1];N0(l,t[a+2]),l=l.ownerDocument.documentElement,l!==null&&l.animate({opacity:[0,0],pointerEvents:["none","none"]},{duration:0,fill:"forwards",pseudoElement:"::view-transition-group("+n+")"})}t=e.containerInfo,t=t.nodeType===9?t.documentElement:t.ownerDocument.documentElement,t!==null&&t.style.viewTransitionName===""&&(t.style.viewTransitionName="none",t.animate({opacity:[0,0],pointerEvents:["none","none"]},{duration:0,fill:"forwards",pseudoElement:"::view-transition-group(root)"}),t.animate({width:[0,0],height:[0,0]},{duration:0,fill:"forwards",pseudoElement:"::view-transition"})),Co=!0}Ie=null;break;case 5:Za(e,t);break;case 4:a=el,el=!1,Za(e,t),el&&(du=!0),el=a;break;case 22:t.memoizedState===null&&(l.memoizedState!==null?To(t,!1):Za(e,t));break;case 30:a=el,n=zd(),el=!1,Za(e,t),el&&(t.flags|=4);var i=t.memoizedProps,u=t.stateNode;e=sl(i,u),u=sl(l.memoizedProps,u);var c=fl(i.default,i.update);c==="none"?e=!1:(i=l.memoizedState,l.memoizedState=null,l=t.child,pe=0,e=wo(t,l,e,u,c,i,!0),pe!==(i===null?0:i.length)&&(t.flags|=32)),(t.flags&4)!==0&&e?(Ia(t,t.memoizedProps.onUpdate),Ie=n):n!==null&&(n.push.apply(n,Ie),Ie=n),el=(t.flags&32)!==0?!0:a;break;default:Za(e,t)}}function ll(t,e){if(e.subtreeFlags&8772)for(e=e.child;e!==null;)wd(t,e.alternate,e),e=e.sibling}function ql(t,e){for(t=t.child;t!==null;){var l=t,a=e;switch(l.tag){case 0:case 11:case 14:case 15:Bl(4,l,l.return),ql(l,a);break;case 1:ae(l,l.return);var n=l.stateNode;typeof n.componentWillUnmount=="function"&&xd(l,l.return,n),ql(l,a);break;case 27:(a&2)!==0&&H0(l.stateNode,l.type,l.memoizedProps);case 5:ae(l,l.return),l.tag!==5&&l.tag!==27||Qn(l),ql(l,a);break;case 6:Qn(l);break;case 26:ae(l,l.return),n=l.stateNode,l.memoizedState!==null||n===null||yt||n.parentNode.removeChild(n),ql(l,a);break;case 22:l.memoizedState===null&&ql(l,a);break;case 30:ae(l,l.return),ql(l,a);break;case 7:ae(l,l.return);default:ql(l,a)}t=t.sibling}}function Xe(t,e,l){for(l=(e.subtreeFlags&8772)!==0?l:l&-2,e=e.child;e!==null;){var a=e.alternate,n=t,i=e,u=i.flags,c=(l&1)!==0;switch(i.tag){case 0:case 11:case 15:Xe(n,i,l),Ln(4,i);break;case 1:if(Xe(n,i,l),a=i,n=a.stateNode,typeof n.componentDidMount=="function")try{n.componentDidMount()}catch(b){Nt(a,a.return,b)}if(a=i,n=a.updateQueue,n!==null){var s=a.stateNode;try{var p=n.shared.hiddenCallbacks;if(p!==null)for(n.shared.hiddenCallbacks=null,n=0;n<p.length;n++)nr(p[n],s)}catch(b){Nt(a,a.return,b)}}c&&u&64&&gd(i),We(i,i.return);break;case 27:(l&2)!==0&&yd(i);case 5:i.tag!==5&&i.tag!==27||bd(i),Xe(n,i,l),c&&a===null&&u&4&&yo(i),We(i,i.return);break;case 6:bd(i);break;case 26:s=i.stateNode,i.memoizedState!==null||s===null||Jt||gs(In(s.ownerDocument),i.type,s),Xe(n,i,l),c&&a===null&&u&4&&yo(i),We(i,i.return);break;case 12:Xe(n,i,l);break;case 31:Xe(n,i,l),c&&u&4&&Md(n,i);break;case 13:Xe(n,i,l),c&&u&4&&Dd(n,i);break;case 22:i.memoizedState===null&&Xe(n,i,l),We(i,i.return);break;case 30:Xe(n,i,l),We(i,i.return);break;case 7:We(i,i.return);default:Xe(n,i,l)}e=e.sibling}}function Do(t,e){var l=null;t!==null&&t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(l=t.memoizedState.cachePool.pool),t=null,e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(t=e.memoizedState.cachePool.pool),t!==l&&(t!=null&&t.refCount++,l!=null&&wn(l))}function Uo(t,e){t=null,e.alternate!==null&&(t=e.alternate.memoizedState.cache),e=e.memoizedState.cache,e!==t&&(e.refCount++,t!=null&&wn(t))}function Be(t,e,l,a){var n=(l&335544064)===l;if(e.subtreeFlags&(n?10262:10256))for(e=e.child;e!==null;)Bd(t,e,l,a),e=e.sibling;else n&&Ed(e)}function Bd(t,e,l,a){var n=(l&335544064)===l;n&&e.alternate===null&&e.return!==null&&e.return.alternate!==null&&ru(e);var i=e.flags;switch(e.tag){case 0:case 11:case 15:Be(t,e,l,a),i&2048&&Ln(9,e);break;case 1:Be(t,e,l,a);break;case 3:Be(t,e,l,a),n&&Co&&(t=t.containerInfo,t=t.nodeType===9?t.body:t.nodeName==="HTML"?t.ownerDocument.body:t,t.style.viewTransitionName==="root"&&(t.style.viewTransitionName=""),t=t.ownerDocument.documentElement,t!==null&&t.style.viewTransitionName==="none"&&(t.style.viewTransitionName="")),i&2048&&(i=null,e.alternate!==null&&(i=e.alternate.memoizedState.cache),e=e.memoizedState.cache,e!==i&&(e.refCount++,i!=null&&wn(i)));break;case 12:if(i&2048){Be(t,e,l,a),i=e.stateNode;try{var u=e.memoizedProps,c=u.id,s=u.onPostCommit;typeof s=="function"&&s(c,e.alternate===null?"mount":"update",i.passiveEffectDuration,-0)}catch(p){Nt(e,e.return,p)}}else Be(t,e,l,a);break;case 31:Be(t,e,l,a);break;case 13:Be(t,e,l,a);break;case 23:break;case 22:u=e.stateNode,c=e.alternate,e.memoizedState!==null?(n&&c!==null&&c.memoizedState===null&&ru(c),u._visibility&2?Be(t,e,l,a):Vn(t,e)):(n&&c!==null&&c.memoizedState!==null&&ru(e),u._visibility&2?Be(t,e,l,a):(u._visibility|=2,ka(t,e,l,a,(e.subtreeFlags&10256)!==0||!1))),i&2048&&Do(c,e);break;case 24:Be(t,e,l,a),i&2048&&Uo(e.alternate,e);break;case 30:n&&(i=e.alternate,i!==null&&(Pe(i.child,!0),Pe(e.child,!0))),Be(t,e,l,a);break;default:Be(t,e,l,a)}}function ka(t,e,l,a,n){for(n=n&&((e.subtreeFlags&10256)!==0||!1),e=e.child;e!==null;){var i=t,u=e,c=l,s=a,p=u.flags;switch(u.tag){case 0:case 11:case 15:ka(i,u,c,s,n),Ln(8,u);break;case 23:break;case 22:var b=u.stateNode;u.memoizedState!==null?b._visibility&2?ka(i,u,c,s,n):Vn(i,u):(b._visibility|=2,ka(i,u,c,s,n)),n&&p&2048&&Do(u.alternate,u);break;case 24:ka(i,u,c,s,n),n&&p&2048&&Uo(u.alternate,u);break;default:ka(i,u,c,s,n)}e=e.sibling}}function Vn(t,e){if(e.subtreeFlags&10256)for(e=e.child;e!==null;){var l=t,a=e,n=a.flags;switch(a.tag){case 22:Vn(l,a),n&2048&&Do(a.alternate,a);break;case 24:Vn(l,a),n&2048&&Uo(a.alternate,a);break;default:Vn(l,a)}e=e.sibling}}var ha=8192;function pa(t,e,l){if(t.subtreeFlags&ha)for(t=t.child;t!==null;)qd(t,e,l),t=t.sibling}function qd(t,e,l){switch(t.tag){case 26:pa(t,e,l),t.flags&ha&&(t.memoizedState!==null?hp(l,Qe,t.memoizedState,t.memoizedProps):(t=t.stateNode,(e&335544128)===e&&Z0(l,t)));break;case 5:pa(t,e,l),t.flags&ha&&(t=t.stateNode,(e&335544128)===e&&Z0(l,t));break;case 3:case 4:var a=Qe;Qe=In(t.stateNode.containerInfo),pa(t,e,l),Qe=a;break;case 22:t.memoizedState===null&&(a=t.alternate,a!==null&&a.memoizedState!==null?(a=ha,ha=16777216,pa(t,e,l),ha=a):pa(t,e,l));break;case 30:if((t.flags&ha)!==0&&(a=t.memoizedProps.name,a!=null&&a!=="auto")){var n=t.stateNode;n.paired=null,_e===null&&(_e=new Map),_e.set(a,n)}pa(t,e,l);break;default:pa(t,e,l)}}function Yd(t){var e=t.alternate;if(e!==null&&(t=e.child,t!==null)){e.child=null;do e=t.sibling,t.sibling=null,t=e;while(t!==null)}}function Zn(t){var e=t.deletions;if((t.flags&16)!==0){if(e!==null)for(var l=0;l<e.length;l++){var a=e[l];$t=a,Ld(a,t)}Yd(t)}if(t.subtreeFlags&10256)for(t=t.child;t!==null;)Gd(t),t=t.sibling}function Gd(t){switch(t.tag){case 0:case 11:case 15:Zn(t),t.flags&2048&&Bl(9,t,t.return);break;case 3:Zn(t);break;case 12:Zn(t);break;case 22:var e=t.stateNode;t.memoizedState!==null&&e._visibility&2&&(t.return===null||t.return.tag!==13)?(e._visibility&=-3,pu(t)):Zn(t);break;default:Zn(t)}}function pu(t){var e=t.deletions;if((t.flags&16)!==0){if(e!==null)for(var l=0;l<e.length;l++){var a=e[l];$t=a,Ld(a,t)}Yd(t)}for(t=t.child;t!==null;){switch(e=t,e.tag){case 0:case 11:case 15:Bl(8,e,e.return),pu(e);break;case 22:l=e.stateNode,l._visibility&2&&(l._visibility&=-3,pu(e));break;default:pu(e)}t=t.sibling}}function Ld(t,e){for(;$t!==null;){var l=$t;switch(l.tag){case 0:case 11:case 15:Bl(8,l,e);break;case 23:case 22:if(l.memoizedState!==null&&l.memoizedState.cachePool!==null){var a=l.memoizedState.cachePool.pool;a!=null&&a.refCount++}break;case 24:wn(l.memoizedState.cache)}if(a=l.child,a!==null)a.return=l,$t=a;else t:for(l=t;$t!==null;){a=$t;var n=a.sibling,i=a.return;if(Cd(a),a===l){$t=null;break t}if(n!==null){n.return=i,$t=n;break t}$t=i}}}var s1={getCacheForType:function(t){var e=te(Yt),l=e.data.get(t);return l===void 0&&(l=t(),e.data.set(t,l)),l},cacheSignal:function(){return te(Yt).controller.signal}},f1=typeof WeakMap=="function"?WeakMap:Map,vt=0,_t=null,ct=null,ft=0,zt=0,je=null,Yl=!1,Ka=!1,Ho=!1,vl=0,Bt=0,Gl=0,ga=0,gu=0,we=0,Ja=0,kn=null,xe=null,Ro=!1,xu=0,Qd=0,bu=1/0,vu=null,Ll=null,Ht=0,Ve=null,xa=null,al=0,Bo=0,qo=null,Xd=null,$a=null,Fa=null,Wa=null,Kn=0,yu=null;function Ae(){return(vt&2)!==0&&ft!==0?ft&-ft:q.T!==null?Jo():Zs()}function Vd(){if(we===0)if((ft&536870912)===0||lt){var t=hi;hi<<=1,(hi&3932160)===0&&(hi=262144),we=t}else we=536870912;return t=ee.current,t!==null&&(t.flags|=32),we}function Ia(t,e){if(e!=null){var l=t.stateNode,a=l.ref;a===null&&(a=l.ref=T0(sl(t.memoizedProps,l))),Fa===null&&(Fa=[]),Fa.push(e.bind(null,a))}}function be(t,e,l){(t===_t&&(zt===2||zt===9)||t.cancelPendingCommit!==null)&&(Pa(t,0),Ql(t,ft,we,!1)),hn(t,l),((vt&2)===0||t!==_t)&&(t===_t&&((vt&2)===0&&(ga|=l),Bt===4&&Ql(t,ft,we,!1)),nl(t))}function Zd(t,e,l){if((vt&6)!==0)throw Error(d(327));var a=!l&&(e&127)===0&&(e&t.expiredLanes)===0||mn(t,e),n=a?m1(t,e):Go(t,e,!0),i=a;do{if(n===0){Ka&&!a&&Ql(t,e,0,!1);break}else{if(l=t.current.alternate,i&&!r1(l)){n=Go(t,e,!1),i=!1;continue}if(n===2){if(i=e,t.errorRecoveryDisabledLanes&i)var u=0;else u=t.pendingLanes&-536870913,u=u!==0?u:u&536870912?536870912:0;if(u!==0){e=u;t:{var c=t;n=kn;var s=c.current.memoizedState.isDehydrated;if(s&&(Pa(c,u).flags|=256),u=Go(c,u,!1),u!==2&&u!==6){if(Ho&&!s){c.errorRecoveryDisabledLanes|=i,ga|=i,n=4;break t}i=xe,xe=n,i!==null&&(xe===null?xe=i:xe.push.apply(xe,i))}n=u}if(i=!1,n!==2)continue}}if(n===1){Pa(t,0),Ql(t,e,0,!0);break}t:{switch(a=t,i=n,i){case 0:case 1:throw Error(d(345));case 4:if((e&4194048)!==e&&(e&62914560)!==e)break;case 6:Ql(a,e,we,!Yl);break t;case 2:xe=null;break;case 3:case 5:break;default:throw Error(d(329))}if((e&62914560)===e&&(n=xu+300-ye(),10<n)){if(Ql(a,e,we,!Yl),gi(a,0,!0)!==0)break t;al=e,a.timeoutHandle=is(kd.bind(null,a,l,xe,vu,Ro,e,we,ga,Ja,Yl,i,"Throttled",-0,0),n);break t}kd(a,l,xe,vu,Ro,e,we,ga,Ja,Yl,i,null,-0,0)}}break}while(!0);nl(t)}function kd(t,e,l,a,n,i,u,c,s,p,b,z,m,x){t.timeoutHandle=-1;var A=e.subtreeFlags,R=(i&335544064)===i;if(z=null,(R||A&8192||(A&16785408)===16785408)&&(z={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:Je},_e=null,qd(e,i,z),R&&(A=z,R=t.containerInfo,R=(R.nodeType===9?R:R.ownerDocument).__reactViewTransition,R!=null&&(A.count++,A.waitingForViewTransition=!0,A=ei.bind(A),R.finished.then(A,A))),A=(i&62914560)===i?xu-ye():(i&4194048)===i?Qd-ye():0,A=pp(z,A),A!==null)){al=i,t.cancelPendingCommit=A(t0.bind(null,t,e,i,l,a,n,u,c,s,p,b,z,null,m,x)),Ql(t,i,u,!p);return}t0(t,e,i,l,a,n,u,c,s,p,b,z)}function r1(t){for(var e=t;;){var l=e.tag;if((l===0||l===11||l===15)&&e.flags&16384&&(l=e.updateQueue,l!==null&&(l=l.stores,l!==null)))for(var a=0;a<l.length;a++){var n=l[a],i=n.getSnapshot;n=n.value;try{if(!Te(i(),n))return!1}catch{return!1}}if(l=e.child,e.subtreeFlags&16384&&l!==null)l.return=e,e=l;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function Ql(t,e,l,a){e=Gs(t,e),e&=~gu,e&=~ga,t.suspendedLanes|=e,t.pingedLanes&=~e,a&&(t.warmLanes|=e),a=t.expirationTimes;for(var n=e;0<n;){var i=31-ze(n),u=1<<i;a[i]=-1,n&=~u}l!==0&&Qs(t,l,e)}function Su(){return(vt&6)===0?(Jn(0),!1):!0}function Yo(){if(ct!==null){if(zt===0)var t=ct.return;else t=ct,ml=na=null,kc(t),Ya=null,On=0,t=ct;for(;t!==null;)pd(t.alternate,t),t=t.return;ct=null}}function Pa(t,e){var l=t.timeoutHandle;return l!==-1&&(t.timeoutHandle=-1,H1(l)),l=t.cancelPendingCommit,l!==null&&(t.cancelPendingCommit=null,l()),al=0,Yo(),_t=t,ct=l=rl(t.current,null),ft=e,zt=0,je=null,Yl=!1,Ka=mn(t,e),Ho=!1,Ja=we=gu=ga=Gl=Bt=0,xe=kn=null,Ro=!1,vl=Gs(t,e),Ai(),l}function Kd(t,e){tt=null,q.H=tu,e===qa||e===Gi?(e=tr(),zt=3):e===Dc?(e=tr(),zt=4):zt=e===co?8:e!==null&&typeof e=="object"&&typeof e.then=="function"?6:1,je=e,ct===null&&(Bt=1,eu(t,De(e,t.current)))}function Jd(){var t=ee.current;return t===null?!0:(ft&4194048)===ft?ce===null:(ft&62914560)===ft||(ft&536870912)!==0?t===ce:!1}function $d(){var t=q.H;return q.H=tu,t===null?tu:t}function Fd(){var t=q.A;return q.A=s1,t}function zu(){Bt=4,Yl||(ft&4194048)!==ft&&ee.current!==null||(Ka=!0),(Gl&134217727)===0&&(ga&134217727)===0||_t===null||Ql(_t,ft,we,!1)}function Go(t,e,l){var a=vt;vt|=2;var n=$d(),i=Fd();(_t!==t||ft!==e)&&(vu=null,Pa(t,e)),e=!1;var u=Bt;t:do try{if(zt!==0&&ct!==null){var c=ct,s=je;switch(zt){case 8:Yo(),u=6;break t;case 3:case 2:case 9:case 6:ee.current===null&&(e=!0);var p=zt;if(zt=0,je=null,tn(t,c,s,p),l&&Ka){u=0;break t}break;default:p=zt,zt=0,je=null,tn(t,c,s,p)}}d1(),u=Bt;break}catch(b){Kd(t,b)}while(!0);return e&&t.shellSuspendCounter++,ml=na=null,vt=a,q.H=n,q.A=i,ct===null&&(_t=null,ft=0,Ai()),u}function d1(){for(;ct!==null;)Wd(ct)}function m1(t,e){var l=vt;vt|=2;var a=$d(),n=Fd();_t!==t||ft!==e?(vu=null,bu=ye()+500,Pa(t,e)):Ka=mn(t,e);t:do try{if(zt!==0&&ct!==null){e=ct;var i=je;e:switch(zt){case 1:zt=0,je=null,tn(t,e,i,1);break;case 2:case 9:if(If(i)){zt=0,je=null,Id(e);break}e=function(){zt!==2&&zt!==9||_t!==t||(zt=7),nl(t)},i.then(e,e);break t;case 3:zt=7;break t;case 4:zt=5;break t;case 7:If(i)?(zt=0,je=null,Id(e)):(zt=0,je=null,tn(t,e,i,7));break;case 5:var u=null;switch(ct.tag){case 26:u=ct.memoizedState;case 5:case 27:var c=ct;if(u?X0(u):c.stateNode.complete){zt=0,je=null;var s=c.sibling;if(s!==null)ct=s;else{var p=c.return;p!==null?(ct=p,Nu(p)):ct=null}break e}}zt=0,je=null,tn(t,e,i,5);break;case 6:zt=0,je=null,tn(t,e,i,6);break;case 8:Yo(),Bt=6;break t;default:throw Error(d(462))}}h1();break}catch(b){Kd(t,b)}while(!0);return ml=na=null,q.H=a,q.A=n,vt=l,ct!==null?0:(_t=null,ft=0,Ai(),Bt)}function h1(){for(;ct!==null&&!Om();)Wd(ct)}function Wd(t){var e=md(t.alternate,t,vl);t.memoizedProps=t.pendingProps,e===null?Nu(t):ct=e}function Id(t){var e=t,l=e.alternate;switch(e.tag){case 15:case 0:e=ud(l,e,e.pendingProps,e.type,void 0,ft);break;case 11:e=ud(l,e,e.pendingProps,e.type.render,e.ref,ft);break;case 5:kc(e);var a=e;a===Kt&&(lt?(Hi(a),a.tag===5&&a.stateNode!=null&&(At=a.stateNode)):(Hi(a),lt=!0));default:pd(l,e),e=ct=Lf(e,vl),e=md(l,e,vl)}t.memoizedProps=t.pendingProps,e===null?Nu(t):ct=e}function tn(t,e,l,a){ml=na=null,kc(e),Ya=null,On=0;var n=e.return;try{if(e1(t,n,e,l,ft)){Bt=1,eu(t,De(l,t.current)),ct=null;return}}catch(i){if(n!==null)throw ct=n,i;Bt=1,eu(t,De(l,t.current)),ct=null;return}e.flags&32768?(lt||a===1?t=!0:Ka||(ft&536870912)!==0?t=!1:(Yl=t=!0,(a===2||a===9||a===3||a===6)&&(a=ee.current,a!==null&&a.tag===13&&(a.flags|=16384))),Pd(e,t)):Nu(e)}function Nu(t){var e=t;do{if((e.flags&32768)!==0){Pd(e,Yl);return}t=e.return;var l=i1(e.alternate,e,vl);if(l!==null){ct=l;return}if(e=e.sibling,e!==null){ct=e;return}ct=e=t}while(e!==null);Bt===0&&(Bt=5)}function Pd(t,e){do{var l=u1(t.alternate,t);if(l!==null){l.flags&=32767,ct=l;return}if(l=t.return,l!==null&&(l.flags|=32768,l.subtreeFlags=0,l.deletions=null),!e&&(t=t.sibling,t!==null)){ct=t;return}ct=t=l}while(t!==null);Bt=6,ct=null}function t0(t,e,l,a,n,i,u,c,s,p,b,z){t.cancelPendingCommit=null;do Tu();while(Ht!==0);if((vt&6)!==0)throw Error(d(327));if(e!==null){if(e===t.current)throw Error(d(177));t===_t&&(ct=_t=null,ft=0),xa=e,Ve=t,al=l,qo=n,Xd=a,p1(t,e,l,u,c,s,z)}}function p1(t,e,l,a,n,i,u){var c=e.lanes|e.childLanes;if(Bo=c,c|=yc,Lm(t,l,c,a,n,i),Fa=null,(l&335544064)===l?(Wa=Xh(t),a=10262):(Wa=null,a=10256),(e.subtreeFlags&a)!==0||(e.flags&a)!==0?(t.callbackNode=null,t.callbackPriority=0,S1(di,function(){return Vo(),null})):(t.callbackNode=null,t.callbackPriority=0),su=!1,a=(e.flags&13878)!==0,(e.subtreeFlags&13878)!==0||a){a=q.T,q.T=null,n=F.p,F.p=2,i=vt,vt|=4;try{c1(t,e,l)}finally{vt=i,F.p=n,q.T=a}}Ht=1,su?$a=L1(u,t.containerInfo,Wa,Lo,Qo,x1,Xo,Vo,g1):(Lo(),Qo(),Xo())}function g1(t){if(Ht!==0){var e=Ve.onRecoverableError;e(t,{componentStack:null})}}function x1(){Ht===3&&(Ht=0,Rd(xa,Ve),Ht=4)}function Lo(){if(Ht===1){Ht=0;var t=Ve,e=xa,l=al,a=(e.flags&13878)!==0;if((e.subtreeFlags&13878)!==0||a){a=q.T,q.T=null;var n=F.p;F.p=2;var i=vt;vt|=4;try{Xn=du=!1,Ud(e,t,l),l=ls;var u=Of(t.containerInfo),c=l.focusedElem,s=l.selectionRange;if(u!==c&&c&&c.ownerDocument&&Cf(c.ownerDocument.documentElement,c)){if(s!==null&&pc(c)){var p=s.start,b=s.end;if(b===void 0&&(b=p),"selectionStart"in c)c.selectionStart=p,c.selectionEnd=Math.min(b,c.value.length);else{var z=c.ownerDocument||document,m=z&&z.defaultView||window;if(m.getSelection){var x=m.getSelection(),A=c.textContent.length,R=Math.min(s.start,A),et=s.end===void 0?R:Math.min(s.end,A);!x.extend&&R>et&&(u=et,et=R,R=u);var h=Af(c,R),f=Af(c,et);if(h&&f&&(x.rangeCount!==1||x.anchorNode!==h.node||x.anchorOffset!==h.offset||x.focusNode!==f.node||x.focusOffset!==f.offset)){var g=z.createRange();g.setStart(h.node,h.offset),x.removeAllRanges(),R>et?(x.addRange(g),x.extend(f.node,f.offset)):(g.setEnd(f.node,f.offset),x.addRange(g))}}}}for(z=[],x=c;x=x.parentNode;)x.nodeType===1&&z.push({element:x,left:x.scrollLeft,top:x.scrollTop});for(typeof c.focus=="function"&&c.focus(),c=0;c<z.length;c++){var S=z[c];S.element.scrollLeft=S.left,S.element.scrollTop=S.top}}sn=!!es,ls=es=null}finally{vt=i,F.p=n,q.T=a}}t.current=e,Ht=2}}function Qo(){if(Ht===2){Ht=0;var t=Ve,e=xa,l=(e.flags&8772)!==0;if((e.subtreeFlags&8772)!==0||l){l=q.T,q.T=null;var a=F.p;F.p=2;var n=vt;vt|=4;try{wd(t,e.alternate,e)}finally{vt=n,F.p=a,q.T=l}}Ht=3}}function Xo(){if(Ht===4||Ht===3){Ht=0;var t=$a;$a=null,Mm();var e=Ve,l=xa,a=al,n=Xd,i=(a&335544064)===a?10262:10256;if((l.subtreeFlags&i)!==0||(l.flags&i)!==0?Ht=5:(Ht=0,xa=Ve=null,e0(e,e.pendingLanes)),i=e.pendingLanes,i===0&&(Ll=null),Wu(a),l=l.stateNode,Se&&typeof Se.onCommitFiberRoot=="function")try{Se.onCommitFiberRoot(dn,l,void 0,(l.current.flags&128)===128)}catch{}if(n!==null){l=q.T,i=F.p,F.p=2,q.T=null;try{for(var u=e.onRecoverableError,c=0;c<n.length;c++){var s=n[c];u(s.value,{componentStack:s.stack})}}finally{q.T=l,F.p=i}}if(n=Fa,u=Wa,Wa=null,n!==null&&(Fa=null,u===null&&(u=[]),t!==null))for(s=0;s<n.length;s++)l=(0,n[s])(u),l!==void 0&&t.finished.finally(l);(al&3)!==0&&Tu(),nl(e),i=e.pendingLanes,(a&261930)!==0&&(i&42)!==0?e===yu?Kn++:(Kn=0,yu=e):(Kn=0,yu=null),Jn(0)}}function e0(t,e){(t.pooledCacheLanes&=e)===0&&(e=t.pooledCache,e!=null&&(t.pooledCache=null,wn(e)))}function Tu(){return $a!==null&&($a.skipTransition(),$a=null),Lo(),Qo(),Xo(),Vo()}function Vo(){if(Ht!==5)return!1;var t=Ve,e=Bo;Bo=0;var l=Wu(al),a=q.T,n=F.p;try{F.p=32>l?32:l,q.T=null,l=qo,qo=null;var i=Ve,u=al;if(Ht=0,xa=Ve=null,al=0,(vt&6)!==0)throw Error(d(331));var c=vt;if(vt|=4,Gd(i.current),Bd(i,i.current,u,l),vt=c,Jn(0,!1),Se&&typeof Se.onPostCommitFiberRoot=="function")try{Se.onPostCommitFiberRoot(dn,i)}catch{}return!0}finally{F.p=n,q.T=a,e0(t,e)}}function l0(t,e,l){e=De(l,e),e=uo(t.stateNode,e,2),t=Dl(t,e,2),t!==null&&(hn(t,2),nl(t))}function Nt(t,e,l){if(t.tag===3)l0(t,t,l);else for(;e!==null;){if(e.tag===3){l0(e,t,l);break}else if(e.tag===1){var a=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof a.componentDidCatch=="function"&&(Ll===null||!Ll.has(a))){t=De(l,t),l=Ir(2),a=Dl(e,l,2),a!==null&&(Pr(l,a,e,t),hn(a,2),nl(a));break}}e=e.return}}function Zo(t,e,l){var a=t.pingCache;if(a===null){a=t.pingCache=new f1;var n=new Set;a.set(e,n)}else n=a.get(e),n===void 0&&(n=new Set,a.set(e,n));n.has(l)||(Ho=!0,n.add(l),t=b1.bind(null,t,e,l),e.then(t,t))}function b1(t,e,l){var a=t.pingCache;a!==null&&a.delete(e),t.pingedLanes|=t.suspendedLanes&l,t.warmLanes&=~l,_t===t&&(ft&l)===l&&((Bt===4||Bt===3&&(ft&62914560)===ft&&300>ye()-xu)&&(vt&2)===0?Pa(t,0):gu|=l,Ja===ft&&(Ja=0)),nl(t)}function a0(t,e){e===0&&(e=Ls()),t=ea(t,e),t!==null&&(hn(t,e),nl(t))}function v1(t){var e=t.memoizedState,l=0;e!==null&&(l=e.retryLane),a0(t,l)}function y1(t,e){var l=0;switch(t.tag){case 31:case 13:var a=t.stateNode,n=t.memoizedState;n!==null&&(l=n.retryLane);break;case 19:a=t.stateNode;break;case 22:a=t.stateNode._retryCache;break;default:throw Error(d(314))}a!==null&&a.delete(e),a0(t,l)}function S1(t,e){return Ku(t,e)}var en=null,ln=null,ko=!1,Eu=!1,Ko=!1,Xl=0;function nl(t){t!==ln&&t.next===null&&(ln===null?en=ln=t:ln=ln.next=t),Eu=!0,ko||(ko=!0,N1())}function Jn(t,e){if(!Ko&&Eu){Ko=!0;do for(var l=!1,a=en;a!==null;){if(t!==0){var n=a.pendingLanes;if(n===0)var i=0;else{var u=a.suspendedLanes,c=a.pingedLanes;i=(1<<31-ze(42|t)+1)-1,i&=n&~(u&~c),i=i&201326741?i&201326741|1:i?i|2:0}i!==0&&(l=!0,c0(a,i))}else i=ft,i=gi(a,a===_t?i:0,a.cancelPendingCommit!==null||a.timeoutHandle!==-1),(i&3)===0||mn(a,i)||(l=!0,c0(a,i));a=a.next}while(l);Ko=!1}}function z1(){n0()}function n0(){Eu=ko=!1;var t=0;Xl!==0&&U1()&&(t=Xl);for(var e=ye(),l=null,a=en;a!==null;){var n=a.next,i=i0(a,e);i===0?(a.next=null,l===null?en=n:l.next=n,n===null&&(ln=l)):(l=a,(t!==0||(i&3)!==0)&&(Eu=!0)),a=n}Ht!==0&&Ht!==5||Jn(t),Xl!==0&&(Xl=0)}function i0(t,e){for(var l=t.suspendedLanes,a=t.pingedLanes,n=t.expirationTimes,i=t.pendingLanes&-62914561;0<i;){var u=31-ze(i),c=1<<u,s=n[u];s===-1?((c&l)===0||(c&a)!==0)&&(n[u]=Gm(c,e)):s<=e&&(t.expiredLanes|=c),i&=~c}if(e=_t,l=ft,l=gi(t,t===e?l:0,t.cancelPendingCommit!==null||t.timeoutHandle!==-1),a=t.callbackNode,l===0||t===e&&(zt===2||zt===9)||t.cancelPendingCommit!==null)return a!==null&&a!==null&&Ju(a),t.callbackNode=null,t.callbackPriority=0;if((l&3)===0||mn(t,l)){if(e=l&-l,e===t.callbackPriority)return e;switch(a!==null&&Ju(a),Wu(l)){case 2:case 8:l=qs;break;case 32:l=di;break;case 268435456:l=Ys;break;default:l=di}return a=u0.bind(null,t),l=Ku(l,a),t.callbackPriority=e,t.callbackNode=l,e}return a!==null&&a!==null&&Ju(a),t.callbackPriority=2,t.callbackNode=null,2}function u0(t,e){if(Ht!==0&&Ht!==5)return t.callbackNode=null,t.callbackPriority=0,null;var l=t.callbackNode;if(Tu()&&t.callbackNode!==l)return null;var a=ft;return a=gi(t,t===_t?a:0,t.cancelPendingCommit!==null||t.timeoutHandle!==-1),a===0?null:(Zd(t,a,e),i0(t,ye()),t.callbackNode!=null&&t.callbackNode===l?u0.bind(null,t):null)}function c0(t,e){if(Tu())return null;Zd(t,e,!0)}function N1(){R1(function(){(vt&6)!==0?Ku(Bs,z1):n0()})}function Jo(){if(Xl===0){var t=ca;t===0&&(t=mi,mi<<=1,(mi&261888)===0&&(mi=256)),Xl=t}return Xl}function o0(t){return t==null||typeof t=="symbol"||typeof t=="boolean"?null:typeof t=="function"?t:Si(t)}function T1(t,e,l,a,n){if(e==="submit"&&l&&l.stateNode===n){var i=o0((n[me]||null).action),u=a.submitter;u&&(e=(e=u[me]||null)?o0(e.formAction):u.getAttribute("formAction"),e!==null&&(i=e,u=null));var c=new Ei("action","action",null,a,n);t.push({event:c,listeners:[{instance:null,listener:function(){if(a.defaultPrevented){if(Xl!==0){var s=new FormData(n,u);eo(l,{pending:!0,data:s,method:n.method,action:i},null,s)}}else typeof i=="function"&&(c.preventDefault(),s=new FormData(n,u),eo(l,{pending:!0,data:s,method:n.method,action:i},i,s))},currentTarget:n}]})}}for(var $o=0;$o<vc.length;$o++){var Fo=vc[$o],E1=Fo.toLowerCase(),_1=Fo[0].toUpperCase()+Fo.slice(1);Ge(E1,"on"+_1)}Ge(Uf,"onAnimationEnd"),Ge(Hf,"onAnimationIteration"),Ge(Rf,"onAnimationStart"),Ge("dblclick","onDoubleClick"),Ge("focusin","onFocus"),Ge("focusout","onBlur"),Ge(Hh,"onTransitionRun"),Ge(Rh,"onTransitionStart"),Ge(Bh,"onTransitionCancel"),Ge(Bf,"onTransitionEnd"),Ta("onMouseEnter",["mouseout","mouseover"]),Ta("onMouseLeave",["mouseout","mouseover"]),Ta("onPointerEnter",["pointerout","pointerover"]),Ta("onPointerLeave",["pointerout","pointerover"]),Il("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),Il("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),Il("onBeforeInput",["compositionend","keypress","textInput","paste"]),Il("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),Il("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),Il("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var $n="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),j1=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat($n));function s0(t,e){e=(e&4)!==0;for(var l=0;l<t.length;l++){var a=t[l],n=a.event;a=a.listeners;t:{var i=void 0;if(e)for(var u=a.length-1;0<=u;u--){var c=a[u],s=c.instance,p=c.currentTarget;if(c=c.listener,s!==i&&n.isPropagationStopped())break t;i=c,n.currentTarget=p;try{i(n)}catch(b){wi(b)}n.currentTarget=null,i=s}else for(u=0;u<a.length;u++){if(c=a[u],s=c.instance,p=c.currentTarget,c=c.listener,s!==i&&n.isPropagationStopped())break t;i=c,n.currentTarget=p;try{i(n)}catch(b){wi(b)}n.currentTarget=null,i=s}}}}function ot(t,e){var l=e[Ks];l===void 0&&(l=e[Ks]=new Set);var a=t+"__bubble";l.has(a)||(f0(e,t,2,!1),l.add(a))}function Wo(t,e,l){var a=0;e&&(a|=4),f0(l,t,a,e)}var _u="_reactListening"+Math.random().toString(36).slice(2);function Io(t){if(!t[_u]){t[_u]=!0,Fs.forEach(function(l){l!=="selectionchange"&&(j1.has(l)||Wo(l,!1,t),Wo(l,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[_u]||(e[_u]=!0,Wo("selectionchange",!1,e))}}function f0(t,e,l,a){switch(P0(e)){case 2:var n=vp;break;case 8:n=yp;break;default:n=bs}l=n.bind(null,e,l,t),n=void 0,!ic||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(n=!0),a?n!==void 0?t.addEventListener(e,l,{capture:!0,passive:n}):t.addEventListener(e,l,!0):n!==void 0?t.addEventListener(e,l,{passive:n}):t.addEventListener(e,l,!1)}function Po(t,e,l,a,n){var i=a;if((e&1)===0&&(e&2)===0&&a!==null)t:for(;;){if(a===null)return;var u=a.tag;if(u===3||u===4){var c=a.stateNode.containerInfo;if(c===n)break;if(u===4)for(u=a.return;u!==null;){var s=u.tag;if((s===3||s===4)&&u.stateNode.containerInfo===n)return;u=u.return}for(;c!==null;){if(u=Wl(c),u===null)return;if(s=u.tag,s===5||s===6||s===26||s===27){a=i=u;continue t}c=c.parentNode}}a=a.return}ff(function(){var p=i,b=ac(l),z=[];t:{var m=qf.get(t);if(m!==void 0){var x=Ei,A=t;switch(t){case"keypress":if(Ni(l)===0)break t;case"keydown":case"keyup":x=rh;break;case"focusin":A="focus",x=sc;break;case"focusout":A="blur",x=sc;break;case"beforeblur":case"afterblur":x=sc;break;case"click":if(l.button===2)break t;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":x=mf;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":x=Pm;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":x=gh;break;case Uf:case Hf:case Rf:x=lh;break;case Bf:x=bh;break;case"scroll":case"scrollend":x=Wm;break;case"wheel":x=yh;break;case"copy":case"cut":case"paste":x=nh;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":x=pf;break;case"submit":x=hh;break;case"toggle":case"beforetoggle":x=zh}var R=(e&4)!==0,et=!R&&(t==="scroll"||t==="scrollend"),h=R?m!==null?m+"Capture":null:m;R=[];for(var f=p,g;f!==null;){var S=f;if(g=S.stateNode,S=S.tag,S!==5&&S!==26&&S!==27||g===null||h===null||(S=xn(f,h),S!=null&&R.push(Fn(f,S,g))),et)break;f=f.return}0<R.length&&(m=new x(m,A,null,l,b),z.push({event:m,listeners:R}))}}if((e&7)===0){t:{if(x=t==="mouseover"||t==="pointerover",m=t==="mouseout"||t==="pointerout",x&&l!==lc&&(A=l.relatedTarget||l.fromElement)&&(Wl(A)||A[Sa]))break t;(m||x)&&(A=b.window===b?b:(x=b.ownerDocument)?x.defaultView||x.parentWindow:window,m?(x=l.relatedTarget||l.toElement,m=p,x=x?Wl(x):null,x!==null&&(et=O(x),R=x.tag,x!==et||R!==5&&R!==27&&R!==6)&&(x=null)):(m=null,x=p),m!==x&&(R=mf,S="onMouseLeave",h="onMouseEnter",f="mouse",(t==="pointerout"||t==="pointerover")&&(R=pf,S="onPointerLeave",h="onPointerEnter",f="pointer"),et=m==null?A:gn(m),g=x==null?A:gn(x),A=new R(S,f+"leave",m,l,b),A.target=et,A.relatedTarget=g,S=null,Wl(b)===p&&(R=new R(h,f+"enter",x,l,b),R.target=g,R.relatedTarget=et,S=R),et=S,R=m&&x?Ut(m,x,w1):null,m!==null&&r0(z,A,m,R,!1),x!==null&&et!==null&&r0(z,et,x,R,!0)))}t:{if(m=p?gn(p):window,x=m.nodeName&&m.nodeName.toLowerCase(),x==="select"||x==="input"&&m.type==="file")var U=Nf;else if(Sf(m))if(Tf)U=Mh;else{U=Ch;var rt=Ah}else x=m.nodeName,!x||x.toLowerCase()!=="input"||m.type!=="checkbox"&&m.type!=="radio"?p&&ec(p.elementType)&&(U=Nf):U=Oh;if(U&&(U=U(t,p))){zf(z,U,l,b);break t}rt&&rt(t,m,p)}switch(rt=p?gn(p):window,t){case"focusin":(Sf(rt)||rt.contentEditable==="true")&&(Ca=rt,gc=p,En=null);break;case"focusout":En=gc=Ca=null;break;case"mousedown":xc=!0;break;case"contextmenu":case"mouseup":case"dragend":xc=!1,Mf(z,l,b);break;case"selectionchange":if(Uh)break;case"keydown":case"keyup":Mf(z,l,b)}var L;if(rc)t:{switch(t){case"compositionstart":var $="onCompositionStart";break t;case"compositionend":$="onCompositionEnd";break t;case"compositionupdate":$="onCompositionUpdate";break t}$=void 0}else Aa?vf(t,l)&&($="onCompositionEnd"):t==="keydown"&&l.keyCode===229&&($="onCompositionStart");$&&(gf&&l.locale!=="ko"&&(Aa||$!=="onCompositionStart"?$==="onCompositionEnd"&&Aa&&(L=rf()):(Tl=b,uc="value"in Tl?Tl.value:Tl.textContent,Aa=!0)),rt=ju(p,$),0<rt.length&&($=new hf($,t,null,l,b),z.push({event:$,listeners:rt}),L?$.data=L:(L=yf(l),L!==null&&($.data=L)))),(L=Th?Eh(t,l):_h(t,l))&&($=ju(p,"onBeforeInput"),0<$.length&&(rt=new hf("onBeforeInput","beforeinput",null,l,b),z.push({event:rt,listeners:$}),rt.data=L)),T1(z,t,p,l,b)}s0(z,e)})}function Fn(t,e,l){return{instance:t,listener:e,currentTarget:l}}function ju(t,e){for(var l=e+"Capture",a=[];t!==null;){var n=t,i=n.stateNode;if(n=n.tag,n!==5&&n!==26&&n!==27||i===null||(n=xn(t,l),n!=null&&a.unshift(Fn(t,n,i)),n=xn(t,e),n!=null&&a.push(Fn(t,n,i))),t.tag===3)return a;t=t.return}return[]}function w1(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5&&t.tag!==27);return t||null}function r0(t,e,l,a,n){for(var i=e._reactName,u=[];l!==null&&l!==a;){var c=l,s=c.alternate,p=c.stateNode;if(c=c.tag,s!==null&&s===a)break;c!==5&&c!==26&&c!==27||p===null||(s=p,n?(p=xn(l,i),p!=null&&u.unshift(Fn(l,p,s))):n||(p=xn(l,i),p!=null&&u.push(Fn(l,p,s)))),l=l.return}u.length!==0&&t.push({event:e,listeners:u})}var A1=/\r\n?/g,C1=/\u0000|\uFFFD/g;function d0(t){return(typeof t=="string"?t:""+t).replace(A1,`
`).replace(C1,"")}function m0(t,e){return e=d0(e),d0(t)===e}function Tt(t,e,l,a,n,i){switch(l){case"children":if(typeof a=="string")e==="body"||e==="textarea"&&a===""||_a(t,a);else if(typeof a=="number"||typeof a=="bigint")e!=="body"&&_a(t,""+a);else return;break;case"className":yi(t,"class",a);break;case"tabIndex":yi(t,"tabindex",a);break;case"dir":case"role":case"viewBox":case"width":case"height":yi(t,l,a);break;case"style":of(t,a,i);return;case"data":if(e!=="object"){yi(t,"data",a);break}case"src":case"href":if(a===""&&(e!=="a"||l!=="href")){t.removeAttribute(l);break}if(a==null||typeof a=="function"||typeof a=="symbol"||typeof a=="boolean"){t.removeAttribute(l);break}a=Si(a),t.setAttribute(l,a);break;case"action":case"formAction":if(typeof a=="function"){t.setAttribute(l,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof i=="function"&&(l==="formAction"?(e!=="input"&&Tt(t,e,"name",n.name,n,null),Tt(t,e,"formEncType",n.formEncType,n,null),Tt(t,e,"formMethod",n.formMethod,n,null),Tt(t,e,"formTarget",n.formTarget,n,null)):(Tt(t,e,"encType",n.encType,n,null),Tt(t,e,"method",n.method,n,null),Tt(t,e,"target",n.target,n,null)));if(a==null||typeof a=="symbol"||typeof a=="boolean"){t.removeAttribute(l);break}a=Si(a),t.setAttribute(l,a);break;case"onClick":a!=null&&(t.onclick=Je);return;case"onScroll":a!=null&&ot("scroll",t);return;case"onScrollEnd":a!=null&&ot("scrollend",t);return;case"dangerouslySetInnerHTML":if(a!=null){if(typeof a!="object"||!("__html"in a))throw Error(d(61));if(l=a.__html,l!=null){if(n.children!=null)throw Error(d(60));(i!=null?i.__html:void 0)!==l&&(t.innerHTML=l)}}break;case"multiple":t.multiple=a&&typeof a!="function"&&typeof a!="symbol";break;case"muted":t.muted=a&&typeof a!="function"&&typeof a!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(a==null||typeof a=="function"||typeof a=="boolean"||typeof a=="symbol"){t.removeAttribute("xlink:href");break}l=Si(a),t.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",l);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":a!=null&&typeof a!="function"&&typeof a!="symbol"?t.setAttribute(l,a):t.removeAttribute(l);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"credentialless":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":a&&typeof a!="function"&&typeof a!="symbol"?t.setAttribute(l,""):t.removeAttribute(l);break;case"capture":case"download":a===!0?t.setAttribute(l,""):a!==!1&&a!=null&&typeof a!="function"&&typeof a!="symbol"?t.setAttribute(l,a):t.removeAttribute(l);break;case"cols":case"rows":case"size":case"span":a!=null&&typeof a!="function"&&typeof a!="symbol"&&!isNaN(a)&&1<=a?t.setAttribute(l,a):t.removeAttribute(l);break;case"rowSpan":case"start":a==null||typeof a=="function"||typeof a=="symbol"||isNaN(a)?t.removeAttribute(l):t.setAttribute(l,a);break;case"popover":ot("beforetoggle",t),ot("toggle",t),vi(t,"popover",a);break;case"xlinkActuate":cl(t,"http://www.w3.org/1999/xlink","xlink:actuate",a);break;case"xlinkArcrole":cl(t,"http://www.w3.org/1999/xlink","xlink:arcrole",a);break;case"xlinkRole":cl(t,"http://www.w3.org/1999/xlink","xlink:role",a);break;case"xlinkShow":cl(t,"http://www.w3.org/1999/xlink","xlink:show",a);break;case"xlinkTitle":cl(t,"http://www.w3.org/1999/xlink","xlink:title",a);break;case"xlinkType":cl(t,"http://www.w3.org/1999/xlink","xlink:type",a);break;case"xmlBase":cl(t,"http://www.w3.org/XML/1998/namespace","xml:base",a);break;case"xmlLang":cl(t,"http://www.w3.org/XML/1998/namespace","xml:lang",a);break;case"xmlSpace":cl(t,"http://www.w3.org/XML/1998/namespace","xml:space",a);break;case"is":vi(t,"is",a);break;case"innerText":case"textContent":return;default:if(!(2<l.length)||l[0]!=="o"&&l[0]!=="O"||l[1]!=="n"&&l[1]!=="N")l=$m.get(l)||l,vi(t,l,a);else return}xt=!0}function ts(t,e,l,a,n,i){switch(l){case"style":of(t,a,i);return;case"dangerouslySetInnerHTML":if(a!=null){if(typeof a!="object"||!("__html"in a))throw Error(d(61));if(l=a.__html,l!=null){if(n.children!=null)throw Error(d(60));(i!=null?i.__html:void 0)!==l&&(t.innerHTML=l)}}break;case"children":if(typeof a=="string")_a(t,a);else if(typeof a=="number"||typeof a=="bigint")_a(t,""+a);else return;break;case"onScroll":a!=null&&ot("scroll",t);return;case"onScrollEnd":a!=null&&ot("scrollend",t);return;case"onClick":a!=null&&(t.onclick=Je);return;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":return;case"innerText":case"textContent":return;default:if(!Ws.hasOwnProperty(l))t:{if(l[0]==="o"&&l[1]==="n"&&(n=l.endsWith("Capture"),i=l.slice(2,n?l.length-7:void 0),e=t[me]||null,e=e!=null?e[l]:null,typeof e=="function"&&t.removeEventListener(i,e,n),typeof a=="function")){typeof e!="function"&&e!==null&&(l in t?t[l]=null:t.hasAttribute(l)&&t.removeAttribute(l)),t.addEventListener(i,a,n);break t}xt=!0,l in t?t[l]=a:a===!0?t.setAttribute(l,""):vi(t,l,a)}return}xt=!0}function ne(t,e,l){switch(e){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":ot("error",t),ot("load",t);var a=!1,n=!1,i;for(i in l)if(l.hasOwnProperty(i)){var u=l[i];if(u!=null)switch(i){case"src":a=!0;break;case"srcSet":n=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(d(137,e));default:Tt(t,e,i,u,l,null)}}n&&Tt(t,e,"srcSet",l.srcSet,l,null),a&&Tt(t,e,"src",l.src,l,null);return;case"input":ot("invalid",t);var c=i=u=n=null,s=null,p=null;for(a in l)if(l.hasOwnProperty(a)){var b=l[a];if(b!=null)switch(a){case"name":n=b;break;case"type":u=b;break;case"checked":s=b;break;case"defaultChecked":p=b;break;case"value":i=b;break;case"defaultValue":c=b;break;case"children":case"dangerouslySetInnerHTML":if(b!=null)throw Error(d(137,e));break;default:Tt(t,e,a,b,l,null)}}af(t,i,c,s,p,u,n,!1);return;case"select":ot("invalid",t),a=u=i=null;for(n in l)if(l.hasOwnProperty(n)&&(c=l[n],c!=null))switch(n){case"value":i=c;break;case"defaultValue":u=c;break;case"multiple":a=c;default:Tt(t,e,n,c,l,null)}e=i,l=u,t.multiple=!!a,e!=null?Ea(t,!!a,e,!1):l!=null&&Ea(t,!!a,l,!0);return;case"textarea":ot("invalid",t),i=n=a=null;for(u in l)if(l.hasOwnProperty(u)&&(c=l[u],c!=null))switch(u){case"value":a=c;break;case"defaultValue":n=c;break;case"children":i=c;break;case"dangerouslySetInnerHTML":if(c!=null)throw Error(d(91));break;default:Tt(t,e,u,c,l,null)}uf(t,a,n,i);return;case"option":for(s in l)if(l.hasOwnProperty(s)&&(a=l[s],a!=null))switch(s){case"selected":t.selected=a&&typeof a!="function"&&typeof a!="symbol";break;default:Tt(t,e,s,a,l,null)}return;case"dialog":ot("beforetoggle",t),ot("toggle",t),ot("cancel",t),ot("close",t);break;case"iframe":case"object":ot("load",t);break;case"video":case"audio":for(a=0;a<$n.length;a++)ot($n[a],t);break;case"image":ot("error",t),ot("load",t);break;case"details":ot("toggle",t);break;case"embed":case"source":case"link":ot("error",t),ot("load",t);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(p in l)if(l.hasOwnProperty(p)&&(a=l[p],a!=null))switch(p){case"children":case"dangerouslySetInnerHTML":throw Error(d(137,e));default:Tt(t,e,p,a,l,null)}return;default:if(ec(e)){for(b in l)l.hasOwnProperty(b)&&(a=l[b],a!==void 0&&ts(t,e,b,a,l,void 0));return}}for(c in l)l.hasOwnProperty(c)&&(a=l[c],a!=null&&Tt(t,e,c,a,l,null))}var O1={};function M1(t,e,l,a){switch(e){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var n=null,i=null,u=null,c=null,s=null,p=null,b=null;for(x in l){var z=l[x];if(l.hasOwnProperty(x)&&z!=null)switch(x){case"checked":break;case"value":break;case"defaultValue":s=z;default:a.hasOwnProperty(x)||Tt(t,e,x,null,a,z)}}for(var m in a){var x=a[m];if(z=l[m],a.hasOwnProperty(m)&&(x!=null||z!=null))switch(m){case"type":x!==z&&(xt=!0),i=x;break;case"name":x!==z&&(xt=!0),n=x;break;case"checked":x!==z&&(xt=!0),p=x;break;case"defaultChecked":x!==z&&(xt=!0),b=x;break;case"value":x!==z&&(xt=!0),u=x;break;case"defaultValue":x!==z&&(xt=!0),c=x;break;case"children":case"dangerouslySetInnerHTML":if(x!=null)throw Error(d(137,e));break;default:x!==z&&Tt(t,e,m,x,a,z)}}Pu(t,u,c,s,p,b,i,n);return;case"select":x=u=c=m=null;for(i in l)if(s=l[i],l.hasOwnProperty(i)&&s!=null)switch(i){case"value":break;case"multiple":x=s;default:a.hasOwnProperty(i)||Tt(t,e,i,null,a,s)}for(n in a)if(i=a[n],s=l[n],a.hasOwnProperty(n)&&(i!=null||s!=null))switch(n){case"value":i!==s&&(xt=!0),m=i;break;case"defaultValue":i!==s&&(xt=!0),c=i;break;case"multiple":i!==s&&(xt=!0),u=i;default:i!==s&&Tt(t,e,n,i,a,s)}e=c,l=u,a=x,m!=null?Ea(t,!!l,m,!1):!!a!=!!l&&(e!=null?Ea(t,!!l,e,!0):Ea(t,!!l,l?[]:"",!1));return;case"textarea":x=m=null;for(c in l)if(n=l[c],l.hasOwnProperty(c)&&n!=null&&!a.hasOwnProperty(c))switch(c){case"value":break;case"children":break;default:Tt(t,e,c,null,a,n)}for(u in a)if(n=a[u],i=l[u],a.hasOwnProperty(u)&&(n!=null||i!=null))switch(u){case"value":n!==i&&(xt=!0),m=n;break;case"defaultValue":n!==i&&(xt=!0),x=n;break;case"children":break;case"dangerouslySetInnerHTML":if(n!=null)throw Error(d(91));break;default:n!==i&&Tt(t,e,u,n,a,i)}nf(t,m,x);return;case"option":for(var A in l)if(m=l[A],l.hasOwnProperty(A)&&m!=null&&!a.hasOwnProperty(A))switch(A){case"selected":t.selected=!1;break;default:Tt(t,e,A,null,a,m)}for(s in a)if(m=a[s],x=l[s],a.hasOwnProperty(s)&&m!==x&&(m!=null||x!=null))switch(s){case"selected":m!==x&&(xt=!0),t.selected=m&&typeof m!="function"&&typeof m!="symbol";break;default:Tt(t,e,s,m,a,x)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var R in l)m=l[R],l.hasOwnProperty(R)&&m!=null&&!a.hasOwnProperty(R)&&Tt(t,e,R,null,a,m);for(p in a)if(m=a[p],x=l[p],a.hasOwnProperty(p)&&m!==x&&(m!=null||x!=null))switch(p){case"children":case"dangerouslySetInnerHTML":if(m!=null)throw Error(d(137,e));break;default:Tt(t,e,p,m,a,x)}return;default:if(ec(e)){for(var et in l)m=l[et],l.hasOwnProperty(et)&&m!==void 0&&!a.hasOwnProperty(et)&&ts(t,e,et,void 0,a,m);for(b in a)m=a[b],x=l[b],!a.hasOwnProperty(b)||m===x||m===void 0&&x===void 0||ts(t,e,b,m,a,x);return}}for(var h in l)m=l[h],l.hasOwnProperty(h)&&m!=null&&!a.hasOwnProperty(h)&&Tt(t,e,h,null,a,m);for(z in a)m=a[z],x=l[z],!a.hasOwnProperty(z)||m===x||m==null&&x==null||Tt(t,e,z,m,a,x)}function h0(t){switch(t){case"css":case"script":case"font":case"img":case"image":case"input":case"link":return!0;default:return!1}}function D1(){if(typeof performance.getEntriesByType=="function"){for(var t=0,e=0,l=performance.getEntriesByType("resource"),a=0;a<l.length;a++){var n=l[a],i=n.transferSize,u=n.initiatorType,c=n.duration;if(i&&c&&h0(u)){for(u=0,c=n.responseEnd,a+=1;a<l.length;a++){var s=l[a],p=s.startTime;if(p>c)break;var b=s.transferSize,z=s.initiatorType;b&&h0(z)&&(s=s.responseEnd,u+=b*(s<c?1:(c-p)/(s-p)))}if(--a,e+=8*(i+u)/(n.duration/1e3),t++,10<t)break}}if(0<t)return e/t/1e6}return navigator.connection&&(t=navigator.connection.downlink,typeof t=="number")?t:5}var es=null,ls=null;function Wn(t){return t.nodeType===9?t:t.ownerDocument}function p0(t){switch(t){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function g0(t,e){if(t===0)switch(e){case"svg":return 1;case"math":return 2;default:return 0}return t===1&&e==="foreignObject"?0:t}function x0(t,e,l,a){return l=Wn(l).createElement(t),l[Pt]=a,l[me]=e,ne(l,t,e),kt(l),l}function as(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.children=="bigint"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var ns=null;function U1(){var t=window.event;return t&&t.type==="popstate"?t===ns?!1:(ns=t,!0):(ns=null,!1)}var is=typeof setTimeout=="function"?setTimeout:void 0,H1=typeof clearTimeout=="function"?clearTimeout:void 0,b0=typeof Promise=="function"?Promise:void 0,v0=typeof requestAnimationFrame=="function"?requestAnimationFrame:is,R1=typeof queueMicrotask=="function"?queueMicrotask:typeof b0<"u"?function(t){return b0.resolve(null).then(t).catch(B1)}:is;function B1(t){setTimeout(function(){throw t})}function Vl(t){return t==="head"}function y0(t,e){var l=e,a=0;do{var n=l.nextSibling;if(t.removeChild(l),n&&n.nodeType===8)if(l=n.data,l==="/$"||l==="/&"){if(a===0){t.removeChild(n),fn(e);return}a--}else if(l==="$"||l==="$?"||l==="$~"||l==="$!"||l==="&")a++;else if(l==="html")ms(t.ownerDocument.documentElement);else if(l==="head"){l=t.ownerDocument.head,ms(l);for(var i=l.firstChild;i;){var u=i.nextSibling,c=i.nodeName;i[pn]||c==="SCRIPT"||c==="STYLE"||c==="LINK"&&i.rel.toLowerCase()==="stylesheet"||l.removeChild(i),i=u}}else l==="body"&&ms(t.ownerDocument.body);l=n}while(l);fn(e)}function S0(t,e){var l=t;t=0;do{var a=l.nextSibling;if(l.nodeType===1?e?(l._stashedDisplay=l.style.display,l.style.display="none"):(l.style.display=l._stashedDisplay||"",l.getAttribute("style")===""&&l.removeAttribute("style")):l.nodeType===3&&(e?(l._stashedText=l.nodeValue,l.nodeValue=""):l.nodeValue=l._stashedText||""),a&&a.nodeType===8)if(l=a.data,l==="/$"){if(t===0)break;t--}else l!=="$"&&l!=="$?"&&l!=="$~"&&l!=="$!"||t++;l=a}while(l)}function z0(t,e,l){if(e=CSS.escape(e)!==e?"r-"+btoa(e).replace(/=/g,""):e,t.style.viewTransitionName=e,l!=null&&(t.style.viewTransitionClass=l),l=getComputedStyle(t),l.display==="inline"){if(e=t.getClientRects(),e.length===1)var a=1;else for(var n=a=0;n<e.length;n++){var i=e[n];0<i.width&&0<i.height&&a++}a===1&&(t=t.style,t.display=e.length===1?"inline-block":"block",t.marginTop="-"+l.paddingTop,t.marginBottom="-"+l.paddingBottom)}}function N0(t,e){t=t.style,e=e.style;var l=e!=null?e.hasOwnProperty("viewTransitionName")?e.viewTransitionName:e.hasOwnProperty("view-transition-name")?e["view-transition-name"]:null:null;t.viewTransitionName=l==null||typeof l=="boolean"?"":(""+l).trim(),l=e!=null?e.hasOwnProperty("viewTransitionClass")?e.viewTransitionClass:e.hasOwnProperty("view-transition-class")?e["view-transition-class"]:null:null,t.viewTransitionClass=l==null||typeof l=="boolean"?"":(""+l).trim(),t.display==="inline-block"&&(e==null?t.display=t.margin="":(l=e.display,t.display=l==null||typeof l=="boolean"?"":l,l=e.margin,l!=null?t.margin=l:(l=e.hasOwnProperty("marginTop")?e.marginTop:e["margin-top"],t.marginTop=l==null||typeof l=="boolean"?"":l,e=e.hasOwnProperty("marginBottom")?e.marginBottom:e["margin-bottom"],t.marginBottom=e==null||typeof e=="boolean"?"":e)))}function q1(t,e,l){return l=l.ownerDocument.defaultView,{rect:t,abs:e.position==="absolute"||e.position==="fixed",clip:e.clipPath!=="none"||e.overflow!=="visible"||e.filter!=="none"||e.mask!=="none"||e.mask!=="none"||e.borderRadius!=="0px",view:0<=t.bottom&&0<=t.right&&t.top<=l.innerHeight&&t.left<=l.innerWidth}}function us(t){var e=t.getBoundingClientRect(),l=getComputedStyle(t);return q1(e,l,t)}function Y1(t){return t.documentElement.clientHeight}function G1(t){this.addEventListener("load",t),this.addEventListener("error",t)}function L1(t,e,l,a,n,i,u,c,s){var p=e.nodeType===9?e:e.ownerDocument;try{var b=p.startViewTransition({update:function(){var m=p.defaultView,x=m.navigation&&m.navigation.transition,A=p.fonts.status;a();var R=[];if(A==="loaded"&&(Y1(p),p.fonts.status==="loading"&&R.push(p.fonts.ready)),A=R.length,t!==null)for(var et=t.suspenseyImages,h=0,f=0;f<et.length;f++){var g=et[f];if(!g.complete){var S=g.getBoundingClientRect();if(0<S.bottom&&0<S.right&&S.top<m.innerHeight&&S.left<m.innerWidth){if(h+=V0(g),h>Cu){R.length=A;break}g=new Promise(G1.bind(g)),R.push(g)}}}if(0<R.length)return m=Promise.race([Promise.all(R),new Promise(function(U){return setTimeout(U,500)})]).then(n,n),(x?Promise.allSettled([x.finished,m]):m).then(i,i);if(n(),x)return x.finished.then(i,i);i()},types:l});p.__reactViewTransition=b;var z=[];return b.ready.then(function(){for(var m=p.documentElement.getAnimations({subtree:!0}),x=0;x<m.length;x++){var A=m[x],R=A.effect,et=R.pseudoElement;if(et!=null&&et.startsWith("::view-transition")){z.push(A),A=R.getKeyframes();for(var h=et=void 0,f=!0,g=0;g<A.length;g++){var S=A[g],U=S.width;if(et===void 0)et=U;else if(et!==U){f=!1;break}if(U=S.height,h===void 0)h=U;else if(h!==U){f=!1;break}delete S.width,delete S.height,S.transform==="none"&&delete S.transform}f&&et!==void 0&&h!==void 0&&(R.setKeyframes(A),f=getComputedStyle(R.target,R.pseudoElement),f.width!==et||f.height!==h)&&(f=A[0],f.width=et,f.height=h,f=A[A.length-1],f.width=et,f.height=h,R.setKeyframes(A))}}u()},function(m){p.__reactViewTransition===b&&(p.__reactViewTransition=null);try{if(typeof m=="object"&&m!==null)switch(m.name){case"InvalidStateError":(m.message==="View transition was skipped because document visibility state is hidden."||m.message==="Skipping view transition because document visibility state has become hidden."||m.message==="Skipping view transition because viewport size changed."||m.message==="Transition was aborted because of invalid state")&&(m=null)}m!==null&&s(m)}finally{a(),n(),u()}}),b.finished.finally(function(){for(var m=0;m<z.length;m++)z[m].cancel();p.__reactViewTransition===b&&(p.__reactViewTransition=null),c()}),b}catch{return a(),n(),u(),null}}function ba(t,e){this._scope=document.documentElement,this._selector="::view-transition-"+t+"("+e+")"}ba.prototype.animate=function(t,e){return e=typeof e=="number"?{duration:e}:P({},e),e.pseudoElement=this._selector,this._scope.animate(t,e)},ba.prototype.getAnimations=function(){for(var t=this._scope,e=this._selector,l=t.getAnimations({subtree:!0}),a=[],n=0;n<l.length;n++){var i=l[n].effect;i!==null&&i.target===t&&i.pseudoElement===e&&a.push(l[n])}return a},ba.prototype.getComputedStyle=function(){return getComputedStyle(this._scope,this._selector)};function T0(t){return{name:t,group:new ba("group",t),imagePair:new ba("image-pair",t),old:new ba("old",t),new:new ba("new",t)}}function Ce(t){this._fragmentFiber=t,this._observers=this._eventListeners=null}Ce.prototype.addEventListener=function(t,e,l){var a=null,n=null;if(!(l!=null&&typeof l!="boolean"&&(a=l.signal||null,a!==null&&a.aborted))){this._eventListeners===null&&(this._eventListeners=[]);var i=this._eventListeners;if(_0(i,t,e,l)===-1){var u=this,c=e;l!=null&&typeof l!="boolean"&&l.once===!0&&(c=function(s){u.removeEventListener(t,e,l),typeof e=="function"?e.call(this,s):e.handleEvent(s)}),a!==null&&(n=u.removeEventListener.bind(u,t,e,l),a.addEventListener("abort",n,{once:!0}),n=a.removeEventListener.bind(a,"abort",n)),a=an(l),i.push({type:t,listener:e,optionsOrUseCapture:l,attachedListener:c,cleanup:n}),y(this._fragmentFiber.child,!1,Q1,t,c,a)}this._eventListeners=i}};function Q1(t,e,l,a){return K(t).addEventListener(e,l,a),!1}Ce.prototype.removeEventListener=function(t,e,l){var a=this._eventListeners;if(a!==null&&(e=_0(a,t,e,l),e!==-1)){var n=a[e];l=n.attachedListener;var i=n.cleanup;n=an(n.optionsOrUseCapture),y(this._fragmentFiber.child,!1,X1,t,l,n),a.splice(e,1),i!==null&&i()}};function X1(t,e,l,a){return K(t).removeEventListener(e,l,a),!1}function an(t){return t!=null&&typeof t!="boolean"&&(t.once===!0||t.signal instanceof AbortSignal)?{capture:t.capture,passive:t.passive}:t}function E0(t){return t==null?"c=0":typeof t=="boolean"?"c="+(t?"1":"0"):"c="+(t.capture?"1":"0")}function _0(t,e,l,a){if(t.length===0)return-1;a=E0(a);for(var n=0;n<t.length;n++){var i=t[n];if(i.type===e&&i.listener===l&&E0(i.optionsOrUseCapture)===a)return n}return-1}Ce.prototype.dispatchEvent=function(t){var e=H(this._fragmentFiber);if(e===null)return!0;e=K(e);var l=this._eventListeners;if(l!==null&&0<l.length||!t.bubbles){var a=e.nodeType===9?e.createComment(""):document.createTextNode("");if(l)for(var n=0;n<l.length;n++){var i=l[n];a.addEventListener(i.type,i.attachedListener,an(i.optionsOrUseCapture))}if(e.appendChild(a),t=a.dispatchEvent(t),l)for(n=0;n<l.length;n++)i=l[n],a.removeEventListener(i.type,i.attachedListener,an(i.optionsOrUseCapture));return e.removeChild(a),t}return e.dispatchEvent(t)},Ce.prototype.focus=function(t){y(this._fragmentFiber.child,!0,j0,t,void 0,void 0)};function j0(t,e){return t.tag===6?!1:(t=K(t),ep(t,e))}Ce.prototype.focusLast=function(t){var e=[];y(this._fragmentFiber.child,!0,cs,e,void 0,void 0);for(var l=e.length-1;0<=l&&!j0(e[l],t);l--);};function cs(t,e){return e.push(t),!1}Ce.prototype.blur=function(){var t=H(this._fragmentFiber);t!==null&&(t=K(t),t=Wn(t).activeElement,t!==null&&y(this._fragmentFiber.child,!1,V1,t,void 0,void 0))};function V1(t,e){return t.tag===6?!1:(t=K(t),t===e||t.contains(e)?(e.blur(),!0):!1)}Ce.prototype.observeUsing=function(t){this._observers===null&&(this._observers=new Set),this._observers.add(t),y(this._fragmentFiber.child,!1,Z1,t,void 0,void 0)};function Z1(t,e){return t.tag===6||(t=K(t),e.observe(t)),!1}Ce.prototype.unobserveUsing=function(t){var e=this._observers;if(e!==null&&e.has(t)){e.delete(t),y(this._fragmentFiber.child,!1,k1,t,void 0,void 0);for(var l=e=0;l<Ze.length;l++){var a=Ze[l];a.fragmentInstance===this&&a.observer===t?t.unobserve(a.instance):Ze[e++]=a}Ze.length=e}};function k1(t,e){return t.tag===6||(t=K(t),e.unobserve(t)),!1}var Ze=[],os=!1;function K1(t,e,l){Ze.push({fragmentInstance:t,observer:e,instance:l}),os||(os=!0,lp(function(){os=!1;var a=Ze;Ze=[];for(var n=0;n<a.length;n++){var i=a[n];i.observer.unobserve(i.instance)}}))}Ce.prototype.getClientRects=function(){var t=[];return y(this._fragmentFiber.child,!1,J1,t,void 0,void 0),t};function J1(t,e){if(t.tag===6){t=t.stateNode;var l=t.ownerDocument.createRange();l.selectNodeContents(t),e.push.apply(e,l.getClientRects())}else t=K(t),e.push.apply(e,t.getClientRects());return!1}Ce.prototype.getRootNode=function(t){var e=H(this._fragmentFiber);return e===null?this:K(e).getRootNode(t)},Ce.prototype.compareDocumentPosition=function(t){var e=H(this._fragmentFiber);if(e===null)return Node.DOCUMENT_POSITION_DISCONNECTED;var l=[];y(this._fragmentFiber.child,!1,cs,l,void 0,void 0);var a=K(e);if(l.length===0){if(l=a,dt(this._fragmentFiber)){t:{for(e=this._fragmentFiber.return;e!==null;){if(e.tag===4){e=e.stateNode.containerInfo;break t}if(e.tag===3||e.tag===5||e.tag===27)break;e=e.return}e=null}e!=null&&(l=e)}e=this._fragmentFiber;var n=a=l.compareDocumentPosition(t);return l===t?n=Node.DOCUMENT_POSITION_CONTAINS:a&Node.DOCUMENT_POSITION_CONTAINED_BY&&(l=I(e)[1],l===null?n=Node.DOCUMENT_POSITION_PRECEDING:(t=K(l).compareDocumentPosition(t),n=t===0||t&Node.DOCUMENT_POSITION_FOLLOWING?Node.DOCUMENT_POSITION_FOLLOWING:Node.DOCUMENT_POSITION_PRECEDING)),n|=Node.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC}e=K(l[0]),n=K(l[l.length-1]);var i=dt(this._fragmentFiber)?e.parentElement:a;if(i==null)return Node.DOCUMENT_POSITION_DISCONNECTED;a=i.compareDocumentPosition(e)&Node.DOCUMENT_POSITION_CONTAINED_BY,i=i.compareDocumentPosition(n)&Node.DOCUMENT_POSITION_CONTAINED_BY;var u=e.compareDocumentPosition(t),c=n.compareDocumentPosition(t),s=u&Node.DOCUMENT_POSITION_CONTAINED_BY||c&Node.DOCUMENT_POSITION_CONTAINED_BY;return c=a&&i&&u&Node.DOCUMENT_POSITION_FOLLOWING&&c&Node.DOCUMENT_POSITION_PRECEDING,e=a&&e===t||i&&n===t||s||c?Node.DOCUMENT_POSITION_CONTAINED_BY:!a&&e===t||!i&&n===t?Node.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC:u,e&Node.DOCUMENT_POSITION_DISCONNECTED||e&Node.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC||$1(e,this._fragmentFiber,l[0],l[l.length-1],t)?e:Node.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC};function $1(t,e,l,a,n){var i=Wl(n);if(t&Node.DOCUMENT_POSITION_CONTAINED_BY){if(l=!!i)t:{for(;i!==null;){if(i.tag===7&&(i===e||i.alternate===e)){l=!0;break t}i=i.return}l=!1}return l}if(t&Node.DOCUMENT_POSITION_CONTAINS){if(i===null)return i=n.ownerDocument,n===i||n===i.documentElement||n===i.body;t:{for(i=e,e=H(e);i!==null;){if(!(i.tag!==5&&i.tag!==3&&i.tag!==27||i!==e&&i.alternate!==e)){i=!0;break t}i=i.return}i=!1}return i}return t&Node.DOCUMENT_POSITION_PRECEDING?((e=!!i)&&!(e=i===l)&&(e=Ut(l,i,Ot),e===null?e=!1:(y(e,!0,Ft,i,l),i=G,G=null,e=i!==null)),e):t&Node.DOCUMENT_POSITION_FOLLOWING?((e=!!i)&&!(e=i===a)&&(e=Ut(a,i,Ot),e===null?e=!1:(y(e,!0,nt,i,a),i=G,Mt=G=null,e=i!==null)),e):!1}function w0(t,e){var l=t.ownerDocument.createRange();l.selectNodeContents(t),t=l.getBoundingClientRect(),window.scrollTo(window.scrollX+t.left,e?window.scrollY+t.top:window.scrollY+t.bottom-window.innerHeight)}Ce.prototype.scrollIntoView=function(t){if(typeof t=="object")throw Error(d(566));var e=[];y(this._fragmentFiber.child,!1,cs,e,void 0,void 0);var l=t!==!1;if(e.length===0){var a=I(this._fragmentFiber);if(a=l?a[1]||a[0]||H(this._fragmentFiber):a[0]||a[1],a===null)return;if(a.tag===6){t=K(a),w0(t,l);return}if(a=K(a),a.nodeType!==9){if(a.nodeType===11){l="host"in a?a.host:null,l!==null&&l.scrollIntoView(t);return}a.scrollIntoView(t)}}for(a=l?e.length-1:0;a!==(l?-1:e.length);){var n=e[a];n.tag===6?(n=K(n),w0(n,l)):K(n).scrollIntoView(t),a+=l?-1:1}};function F1(t,e){return t=K(t),A0(t,e),!1}function A0(t,e){t.reactFragments==null&&(t.reactFragments=new Set),t.reactFragments.add(e)}function C0(t,e){var l=e._eventListeners;if(l!==null)for(var a=0;a<l.length;a++){var n=l[a];t.addEventListener(n.type,n.attachedListener,an(n.optionsOrUseCapture))}t.nodeType!==3&&(l=e._observers,l!==null&&l.forEach(function(i){for(var u=0,c=0;c<Ze.length;c++){var s=Ze[c];(s.fragmentInstance!==e||s.observer!==i||s.instance!==t)&&(Ze[u++]=s)}Ze.length=u,i.observe(t)}),A0(t,e))}function W1(t,e){var l=e._eventListeners;if(l!==null)for(var a=0;a<l.length;a++){var n=l[a];t.removeEventListener(n.type,n.attachedListener,an(n.optionsOrUseCapture))}t.nodeType!==3&&(l=e._observers,l!==null&&l.forEach(function(i){typeof i.rootMargin=="string"?K1(e,i,t):i.unobserve(t)}),t.reactFragments!=null&&t.reactFragments.delete(e))}function ss(t){var e=t.firstChild;for(e&&e.nodeType===10&&(e=e.nextSibling);e;){var l=e;switch(e=e.nextSibling,l.nodeName){case"HTML":case"HEAD":case"BODY":ss(l),bi(l);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(l.rel.toLowerCase()==="stylesheet")continue}t.removeChild(l)}}function I1(t,e,l,a){for(;t.nodeType===1;){var n=l;if(t.nodeName.toLowerCase()!==e.toLowerCase()){if(!a&&(t.nodeName!=="INPUT"||t.type!=="hidden"))break}else if(a){if(!t[pn])switch(e){case"meta":if(!t.hasAttribute("itemprop"))break;return t;case"link":if(i=t.getAttribute("rel"),i==="stylesheet"&&t.hasAttribute("data-precedence"))break;if(i!==n.rel||t.getAttribute("href")!==(n.href==null||n.href===""?null:n.href)||t.getAttribute("crossorigin")!==(n.crossOrigin==null?null:n.crossOrigin)||t.getAttribute("title")!==(n.title==null?null:n.title))break;return t;case"style":if(t.hasAttribute("data-precedence"))break;return t;case"script":if(i=t.getAttribute("src"),(i!==(n.src==null?null:n.src)||t.getAttribute("type")!==(n.type==null?null:n.type)||t.getAttribute("crossorigin")!==(n.crossOrigin==null?null:n.crossOrigin))&&i&&t.hasAttribute("async")&&!t.hasAttribute("itemprop"))break;return t;default:return t}}else if(e==="input"&&t.type==="hidden"){var i=n.name==null?null:""+n.name;if(n.type==="hidden"&&t.getAttribute("name")===i)return t}else return t;if(t=qe(t.nextSibling),t===null)break}return null}function P1(t,e,l){if(e==="")return null;for(;t.nodeType!==3;)if((t.nodeType!==1||t.nodeName!=="INPUT"||t.type!=="hidden")&&!l||(t=qe(t.nextSibling),t===null))return null;return t}function O0(t,e){for(;t.nodeType!==8;)if((t.nodeType!==1||t.nodeName!=="INPUT"||t.type!=="hidden")&&!e||(t=qe(t.nextSibling),t===null))return null;return t}function fs(t){return t.data==="$?"||t.data==="$~"}function rs(t){return t.data==="$!"||t.data==="$?"&&t.ownerDocument.readyState!=="loading"}function tp(t,e){var l=t.ownerDocument;if(t.data==="$~")t._reactRetry=e;else if(t.data!=="$?"||l.readyState!=="loading")e();else{var a=function(){e(),l.removeEventListener("DOMContentLoaded",a)};l.addEventListener("DOMContentLoaded",a),t._reactRetry=a}}function qe(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?"||e==="$~"||e==="&"||e==="F!"||e==="F")break;if(e==="/$"||e==="/&")return null}}return t}var ds=null;function M0(t){t=t.nextSibling;for(var e=0;t;){if(t.nodeType===8){var l=t.data;if(l==="/$"||l==="/&"){if(e===0)return qe(t.nextSibling);e--}else l!=="$"&&l!=="$!"&&l!=="$?"&&l!=="$~"&&l!=="&"||e++}t=t.nextSibling}return null}function D0(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var l=t.data;if(l==="$"||l==="$!"||l==="$?"||l==="$~"||l==="&"){if(e===0)return t;e--}else l!=="/$"&&l!=="/&"||e++}t=t.previousSibling}return null}function ep(t,e){function l(){a=!0}if(t.ownerDocument.activeElement===t)return!0;var a=!1;try{t.ownerDocument.addEventListener("focus",l,!0),(t.focus||HTMLElement.prototype.focus).call(t,e)}finally{t.ownerDocument.removeEventListener("focus",l,!0)}return a}function lp(t){v0(function(){v0(function(e){return t(e)})})}function U0(t,e,l){switch(e=Wn(l),t){case"html":if(t=e.documentElement,!t)throw Error(d(452));return t;case"head":if(t=e.head,!t)throw Error(d(453));return t;case"body":if(t=e.body,!t)throw Error(d(454));return t;default:throw Error(d(451))}}function H0(t,e,l){for(var a in l){var n=l[a];l.hasOwnProperty(a)&&n!=null&&Tt(t,e,a,null,O1,n)}l.dangerouslySetInnerHTML!=null&&(t.textContent=""),t.onclick===Je&&(t.onclick=null),bi(t)}function ms(t){for(var e=t.attributes;e.length;)t.removeAttributeNode(e[0]);bi(t)}var Ye=new Map,R0=new Set;function In(t){if(typeof t.getRootNode=="function"){var e=t.getRootNode();if(e.nodeType===9||e.nodeType===11)return e}return t.nodeType===9?t:t.ownerDocument}var yl=F.d;F.d={f:ap,r:np,D:ip,C:up,L:cp,m:op,X:fp,S:sp,M:rp};function ap(){var t=yl.f(),e=Su();return t||e}function np(t){var e=za(t);e!==null&&e.tag===5&&e.type==="form"?qr(e):yl.r(t)}var nn=typeof document>"u"?null:document;function B0(t,e,l){var a=nn;if(a&&typeof e=="string"&&e){var n=Oe(e);n='link[rel="'+t+'"][href="'+n+'"]',typeof l=="string"&&(n+='[crossorigin="'+l+'"]'),R0.has(n)||(R0.add(n),t={rel:t,crossOrigin:l,href:e},a.querySelector(n)===null&&(e=a.createElement("link"),ne(e,"link",t),kt(e),a.head.appendChild(e)))}}function ip(t){yl.D(t),B0("dns-prefetch",t,null)}function up(t,e){yl.C(t,e),B0("preconnect",t,e)}function cp(t,e,l){yl.L(t,e,l);var a=nn;if(a&&t&&e){var n='link[rel="preload"][as="'+Oe(e)+'"]';e==="image"&&l&&l.imageSrcSet?(n+='[imagesrcset="'+Oe(l.imageSrcSet)+'"]',typeof l.imageSizes=="string"&&(n+='[imagesizes="'+Oe(l.imageSizes)+'"]')):n+='[href="'+Oe(t)+'"]';var i=n;switch(e){case"style":i=un(t);break;case"script":i=cn(t)}if(!(Ye.has(i)||(t=P({rel:"preload",href:e==="image"&&l&&l.imageSrcSet?void 0:t,as:e},l),Ye.set(i,t),a.querySelector(n)!==null||e==="style"&&a.querySelector(Pn(i))||e==="script"&&a.querySelector(ti(i))))){var u=a.createElement("link");ne(u,"link",t),e==="style"&&(u[xi]=!0,u.onload=u.onerror=function(){$s(u)}),kt(u),a.head.appendChild(u)}}}function op(t,e){yl.m(t,e);var l=nn;if(l&&t){var a=e&&typeof e.as=="string"?e.as:"script",n='link[rel="modulepreload"][as="'+Oe(a)+'"][href="'+Oe(t)+'"]',i=n;switch(a){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":i=cn(t)}if(!Ye.has(i)&&(t=P({rel:"modulepreload",href:t},e),Ye.set(i,t),l.querySelector(n)===null)){switch(a){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(l.querySelector(ti(i)))return}a=l.createElement("link"),ne(a,"link",t),kt(a),l.head.appendChild(a)}}}function sp(t,e,l){yl.S(t,e,l);var a=nn;if(a&&t){var n=Na(a).hoistableStyles,i=un(t);e=e||"default";var u=n.get(i);if(!u){var c={loading:0,preload:null};if(u=a.querySelector(Pn(i)))c.loading=5;else{t=P({rel:"stylesheet",href:t,"data-precedence":e},l),(l=Ye.get(i))&&hs(t,l);var s=u=a.createElement("link");kt(s),ne(s,"link",t),s._p=new Promise(function(p,b){s.onload=p,s.onerror=b}),s.addEventListener("load",function(){c.loading|=1}),s.addEventListener("error",function(){c.loading|=2}),c.loading|=4,wu(u,e,a)}u={type:"stylesheet",instance:u,count:1,state:c},n.set(i,u)}}}function fp(t,e){yl.X(t,e);var l=nn;if(l&&t){var a=Na(l).hoistableScripts,n=cn(t),i=a.get(n);i||(i=l.querySelector(ti(n)),i||(t=P({src:t,async:!0},e),(e=Ye.get(n))&&ps(t,e),i=l.createElement("script"),kt(i),ne(i,"link",t),l.head.appendChild(i)),i={type:"script",instance:i,count:1,state:null},a.set(n,i))}}function rp(t,e){yl.M(t,e);var l=nn;if(l&&t){var a=Na(l).hoistableScripts,n=cn(t),i=a.get(n);i||(i=l.querySelector(ti(n)),i||(t=P({src:t,async:!0,type:"module"},e),(e=Ye.get(n))&&ps(t,e),i=l.createElement("script"),kt(i),ne(i,"link",t),l.head.appendChild(i)),i={type:"script",instance:i,count:1,state:null},a.set(n,i))}}function q0(t,e,l,a){var n=(n=Sl.current)?In(n):null;if(!n)throw Error(d(446));switch(t){case"meta":case"title":return null;case"style":return typeof l.precedence=="string"&&typeof l.href=="string"?(l=un(l.href),e=Na(n).hoistableStyles,a=e.get(l),a||(a={type:"style",instance:null,count:0,state:null},e.set(l,a)),a):{type:"void",instance:null,count:0,state:null};case"link":if(l.rel==="stylesheet"&&typeof l.href=="string"&&typeof l.precedence=="string"){t=un(l.href);var i=Na(n).hoistableStyles,u=i.get(t);if(u||(n=n.ownerDocument||n,u={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},i.set(t,u),(i=n.querySelector(Pn(t)))?i._p||(u.instance=i,u.state.loading=5):(i=Ye.get(t),i||(i={rel:"preload",as:"style",href:l.href,crossOrigin:l.crossOrigin,integrity:l.integrity,media:l.media,hrefLang:l.hrefLang,referrerPolicy:l.referrerPolicy},Ye.set(t,i)),dp(n,t,i,u.state))),e&&a===null)throw Error(d(528,""));return u}if(e&&a!==null)throw Error(d(529,""));return null;case"script":return e=l.async,l=l.src,typeof l=="string"&&e&&typeof e!="function"&&typeof e!="symbol"?(l=cn(l),e=Na(n).hoistableScripts,a=e.get(l),a||(a={type:"script",instance:null,count:0,state:null},e.set(l,a)),a):{type:"void",instance:null,count:0,state:null};default:throw Error(d(444,t))}}function un(t){return'href="'+Oe(t)+'"'}function Pn(t){return'link[rel="stylesheet"]['+t+"]"}function Y0(t){return P({},t,{"data-precedence":t.precedence,precedence:null})}function dp(t,e,l,a){if(e=t.querySelector('link[rel="preload"][as="style"]['+e+"]")){if(e[xi]!==!0){a.loading=1;return}}else e=t.createElement("link"),e[xi]=!0,e.onload=e.onerror=$s.bind(null,e),ne(e,"link",l),kt(e),t.head.appendChild(e);a.preload=e,e.addEventListener("load",function(){return a.loading|=1}),e.addEventListener("error",function(){return a.loading|=2})}function cn(t){return'[src="'+Oe(t)+'"]'}function ti(t){return"script[async]"+t}function G0(t,e,l){if(e.count++,e.instance===null)switch(e.type){case"style":var a=t.querySelector('style[data-href~="'+Oe(l.href)+'"]');if(a)return e.instance=a,kt(a),a;var n=P({},l,{"data-href":l.href,"data-precedence":l.precedence,href:null,precedence:null});return a=(t.ownerDocument||t).createElement("style"),kt(a),ne(a,"style",n),wu(a,l.precedence,t),e.instance=a;case"stylesheet":n=un(l.href);var i=t.querySelector(Pn(n));if(i)return e.state.loading|=4,e.instance=i,kt(i),i;a=Y0(l),(n=Ye.get(n))&&hs(a,n),i=(t.ownerDocument||t).createElement("link"),kt(i);var u=i;return u._p=new Promise(function(c,s){u.onload=c,u.onerror=s}),ne(i,"link",a),e.state.loading|=4,wu(i,l.precedence,t),e.instance=i;case"script":return i=cn(l.src),(n=t.querySelector(ti(i)))?(e.instance=n,kt(n),n):(a=l,(n=Ye.get(i))&&(a=P({},l),ps(a,n)),t=t.ownerDocument||t,n=t.createElement("script"),kt(n),ne(n,"link",a),t.head.appendChild(n),e.instance=n);case"void":return null;default:throw Error(d(443,e.type))}else e.type==="stylesheet"&&(e.state.loading&4)===0&&(a=e.instance,e.state.loading|=4,wu(a,l.precedence,t));return e.instance}function wu(t,e,l){for(var a=l.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),n=a.length?a[a.length-1]:null,i=n,u=0;u<a.length;u++){var c=a[u];if(c.dataset.precedence===e)i=c;else if(i!==n)break}i?i.parentNode.insertBefore(t,i.nextSibling):(e=l.nodeType===9?l.head:l,e.insertBefore(t,e.firstChild))}function hs(t,e){t.crossOrigin==null&&(t.crossOrigin=e.crossOrigin),t.referrerPolicy==null&&(t.referrerPolicy=e.referrerPolicy),t.title==null&&(t.title=e.title)}function ps(t,e){t.crossOrigin==null&&(t.crossOrigin=e.crossOrigin),t.referrerPolicy==null&&(t.referrerPolicy=e.referrerPolicy),t.integrity==null&&(t.integrity=e.integrity)}var Au=null;function L0(t,e,l){if(Au===null){var a=new Map,n=Au=new Map;n.set(l,a)}else n=Au,a=n.get(l),a||(a=new Map,n.set(l,a));if(a.has(t))return a;for(a.set(t,null),l=l.getElementsByTagName(t),n=0;n<l.length;n++){var i=l[n];if(!(i[pn]||i[Pt]||t==="link"&&i.getAttribute("rel")==="stylesheet")&&i.namespaceURI!=="http://www.w3.org/2000/svg"){var u=i.getAttribute(e)||"";u=t+u;var c=a.get(u);c?c.push(i):a.set(u,[i])}}return a}function gs(t,e,l){t=t.ownerDocument||t,t.head.insertBefore(l,e==="title"?t.querySelector("head > title"):null)}function mp(t,e,l){if(l===1||e.itemProp!=null)return!1;switch(t){case"meta":case"title":return!0;case"style":if(typeof e.precedence!="string"||typeof e.href!="string"||e.href==="")break;return!0;case"link":if(typeof e.rel!="string"||typeof e.href!="string"||e.href===""||e.onLoad||e.onError)break;switch(e.rel){case"stylesheet":return t=e.disabled,typeof e.precedence=="string"&&t==null;default:return!0}case"script":if(e.async&&typeof e.async!="function"&&typeof e.async!="symbol"&&!e.onLoad&&!e.onError&&e.src&&typeof e.src=="string")return!0}return!1}function Q0(t,e){return t==="img"&&e.src!=null&&e.src!==""&&e.onLoad==null&&e.loading!=="lazy"}function X0(t){return!(t.type==="stylesheet"&&(t.state.loading&3)===0)}function V0(t){return(t.width||100)*(t.height||100)*(typeof devicePixelRatio=="number"?devicePixelRatio:1)*.25}function Z0(t,e){typeof e.decode=="function"&&(t.imgCount++,e.complete||(t.imgBytes+=V0(e),t.suspenseyImages.push(e)),t=gp.bind(t),e.decode().then(t,t))}function hp(t,e,l,a){if(l.type==="stylesheet"&&(typeof a.media!="string"||matchMedia(a.media).matches!==!1)&&(l.state.loading&4)===0){if(l.instance===null){var n=un(a.href),i=e.querySelector(Pn(n));if(i){e=i._p,e!==null&&typeof e=="object"&&typeof e.then=="function"&&(t.count++,t=ei.bind(t),e.then(t,t)),l.state.loading|=4,l.instance=i,kt(i);return}i=e.ownerDocument||e,a=Y0(a),(n=Ye.get(n))&&hs(a,n),i=i.createElement("link"),kt(i);var u=i;u._p=new Promise(function(c,s){u.onload=c,u.onerror=s}),ne(i,"link",a),l.instance=i}t.stylesheets===null&&(t.stylesheets=new Map),t.stylesheets.set(l,e),(e=l.state.preload)&&(l.state.loading&3)===0&&(t.count++,l=ei.bind(t),e.addEventListener("load",l),e.addEventListener("error",l))}}var Cu=0;function pp(t,e){return t.stylesheets&&t.count===0&&Mu(t,t.stylesheets),0<t.count||0<t.imgCount?function(l){var a=setTimeout(function(){if(t.stylesheets&&Mu(t,t.stylesheets),t.unsuspend){var i=t.unsuspend;t.unsuspend=null,i()}},6e4+e);0<t.imgBytes&&Cu===0&&(Cu=62500*D1());var n=setTimeout(function(){if(t.waitingForImages=!1,t.count===0&&(t.stylesheets&&Mu(t,t.stylesheets),t.unsuspend)){var i=t.unsuspend;t.unsuspend=null,i()}},(t.imgBytes>Cu?50:800)+e);return t.unsuspend=l,function(){t.unsuspend=null,clearTimeout(a),clearTimeout(n)}}:null}function k0(t){if(t.count===0&&(t.imgCount===0||!t.waitingForImages)){if(t.stylesheets)Mu(t,t.stylesheets);else if(t.unsuspend){var e=t.unsuspend;t.unsuspend=null,e()}}}function ei(){this.count--,k0(this)}function gp(){this.imgCount--,k0(this)}var Ou=null;function Mu(t,e){t.stylesheets=null,t.unsuspend!==null&&(t.count++,Ou=new Map,e.forEach(xp,t),Ou=null,ei.call(t))}function xp(t,e){if(!(e.state.loading&4)){var l=Ou.get(t);if(l)var a=l.get(null);else{l=new Map,Ou.set(t,l);for(var n=t.querySelectorAll("link[data-precedence],style[data-precedence]"),i=0;i<n.length;i++){var u=n[i];(u.nodeName==="LINK"||u.getAttribute("media")!=="not all")&&(l.set(u.dataset.precedence,u),a=u)}a&&l.set(null,a)}n=e.instance,u=n.getAttribute("data-precedence"),i=l.get(u)||a,i===a&&l.set(null,n),l.set(u,n),this.count++,a=ei.bind(this),n.addEventListener("load",a),n.addEventListener("error",a),i?i.parentNode.insertBefore(n,i.nextSibling):(t=t.nodeType===9?t.head:t,t.insertBefore(n,t.firstChild)),e.state.loading|=4}}var on={$$typeof:M,Provider:null,Consumer:null,_currentValue:il,_currentValue2:il,_threadCount:0};function bp(t,e,l,a,n,i,u,c,s){this.tag=1,this.containerInfo=t,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=$u(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=$u(0),this.hiddenUpdates=$u(null),this.identifierPrefix=a,this.onUncaughtError=n,this.onCaughtError=i,this.onRecoverableError=u,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=s,this.transitionTypes=null,this.incompleteTransitions=new Map}function K0(t,e,l,a,n,i,u,c,s,p,b,z){return t=new bp(t,e,l,u,s,p,b,z,c),e=1,i===!0&&(e|=24),i=he(3,null,null,e),t.current=i,i.stateNode=t,e=Cc(),e.refCount++,t.pooledCache=e,e.refCount++,i.memoizedState={element:a,isDehydrated:l,cache:e},Uc(i),t}function J0(t){return t?(t=Da,t):Da}function $0(t,e,l,a,n,i){n=J0(n),a.context===null?a.context=n:a.pendingContext=n,a=Ml(e),a.payload={element:l},i=i===void 0?null:i,i!==null&&(a.callback=i),l=Dl(t,a,e),l!==null&&(be(l,t,e),Mn(l,t,e))}function F0(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var l=t.retryLane;t.retryLane=l!==0&&l<e?l:e}}function xs(t,e){F0(t,e),(t=t.alternate)&&F0(t,e)}function W0(t){if(t.tag===13||t.tag===31){var e=ea(t,67108864);e!==null&&be(e,t,67108864),xs(t,67108864)}}function I0(t){if(t.tag===13||t.tag===31){var e=Ae();e=Fu(e);var l=ea(t,e);l!==null&&be(l,t,e),xs(t,e)}}var sn=!0;function vp(t,e,l,a){var n=q.T;q.T=null;var i=F.p;try{F.p=2,bs(t,e,l,a)}finally{F.p=i,q.T=n}}function yp(t,e,l,a){var n=q.T;q.T=null;var i=F.p;try{F.p=8,bs(t,e,l,a)}finally{F.p=i,q.T=n}}function bs(t,e,l,a){if(sn){var n=vs(a);if(n===null)Po(t,e,a,Du,l),tm(t,a);else if(zp(n,t,e,l,a))a.stopPropagation();else if(tm(t,a),e&4&&-1<Sp.indexOf(t)){for(;n!==null;){var i=za(n);if(i!==null)switch(i.tag){case 3:if(i=i.stateNode,i.current.memoizedState.isDehydrated){var u=Fl(i.pendingLanes);if(u!==0){var c=i;for(c.pendingLanes|=2,c.entangledLanes|=2;u;){var s=1<<31-ze(u);c.entanglements[1]|=s,u&=~s}nl(i),(vt&6)===0&&(bu=ye()+500,Jn(0))}}break;case 31:case 13:c=ea(i,2),c!==null&&be(c,i,2),Su(),xs(i,2)}if(i=vs(a),i===null&&Po(t,e,a,Du,l),i===n)break;n=i}n!==null&&a.stopPropagation()}else Po(t,e,a,null,l)}}function vs(t){return t=ac(t),ys(t)}var Du=null;function ys(t){if(Du=null,t=Wl(t),t!==null){var e=O(t);if(e===null)t=null;else{var l=e.tag;if(l===13){if(t=Y(e),t!==null)return t;t=null}else if(l===31){if(t=k(e),t!==null)return t;t=null}else if(l===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null)}}return Du=t,null}function P0(t){switch(t){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"fullscreenerror":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"resize":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(Dm()){case Bs:return 2;case qs:return 8;case di:case Um:return 32;case Ys:return 268435456;default:return 32}default:return 32}}var Ss=!1,Zl=null,kl=null,Kl=null,li=new Map,ai=new Map,Jl=[],Sp="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function tm(t,e){switch(t){case"focusin":case"focusout":Zl=null;break;case"dragenter":case"dragleave":kl=null;break;case"mouseover":case"mouseout":Kl=null;break;case"pointerover":case"pointerout":li.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":ai.delete(e.pointerId)}}function ni(t,e,l,a,n,i){return t===null||t.nativeEvent!==i?(t={blockedOn:e,domEventName:l,eventSystemFlags:a,nativeEvent:i,targetContainers:[n]},e!==null&&(e=za(e),e!==null&&W0(e)),t):(t.eventSystemFlags|=a,e=t.targetContainers,n!==null&&e.indexOf(n)===-1&&e.push(n),t)}function zp(t,e,l,a,n){switch(e){case"focusin":return Zl=ni(Zl,t,e,l,a,n),!0;case"dragenter":return kl=ni(kl,t,e,l,a,n),!0;case"mouseover":return Kl=ni(Kl,t,e,l,a,n),!0;case"pointerover":var i=n.pointerId;return li.set(i,ni(li.get(i)||null,t,e,l,a,n)),!0;case"gotpointercapture":return i=n.pointerId,ai.set(i,ni(ai.get(i)||null,t,e,l,a,n)),!0}return!1}function em(t){var e=Wl(t.target);if(e!==null){var l=O(e);if(l!==null){if(e=l.tag,e===13){if(e=Y(l),e!==null){t.blockedOn=e,ks(t.priority,function(){I0(l)});return}}else if(e===31){if(e=k(l),e!==null){t.blockedOn=e,ks(t.priority,function(){I0(l)});return}}else if(e===3&&l.stateNode.current.memoizedState.isDehydrated){t.blockedOn=l.tag===3?l.stateNode.containerInfo:null;return}}}t.blockedOn=null}function Uu(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var l=vs(t.nativeEvent);if(l===null){l=t.nativeEvent;var a=new l.constructor(l.type,l);lc=a,l.target.dispatchEvent(a),lc=null}else return e=za(l),e!==null&&W0(e),t.blockedOn=l,!1;e.shift()}return!0}function lm(t,e,l){Uu(t)&&l.delete(e)}function Np(){Ss=!1,Zl!==null&&Uu(Zl)&&(Zl=null),kl!==null&&Uu(kl)&&(kl=null),Kl!==null&&Uu(Kl)&&(Kl=null),li.forEach(lm),ai.forEach(lm)}function Hu(t,e){t.blockedOn===e&&(t.blockedOn=null,Ss||(Ss=!0,v.unstable_scheduleCallback(v.unstable_NormalPriority,Np)))}var Ru=null;function am(t){Ru!==t&&(Ru=t,v.unstable_scheduleCallback(v.unstable_NormalPriority,function(){Ru===t&&(Ru=null);for(var e=0;e<t.length;e+=3){var l=t[e],a=t[e+1],n=t[e+2];if(typeof a!="function"){if(ys(a||l)===null)continue;break}var i=za(l);i!==null&&(t.splice(e,3),e-=3,eo(i,{pending:!0,data:n,method:l.method,action:a},a,n))}}))}function fn(t){function e(s){return Hu(s,t)}Zl!==null&&Hu(Zl,t),kl!==null&&Hu(kl,t),Kl!==null&&Hu(Kl,t),li.forEach(e),ai.forEach(e);for(var l=0;l<Jl.length;l++){var a=Jl[l];a.blockedOn===t&&(a.blockedOn=null)}for(;0<Jl.length&&(l=Jl[0],l.blockedOn===null);)em(l),l.blockedOn===null&&Jl.shift();if(l=(t.ownerDocument||t).$$reactFormReplay,l!=null)for(a=0;a<l.length;a+=3){var n=l[a],i=l[a+1],u=n[me]||null;if(typeof i=="function")u||am(l);else if(u){var c=null;if(i&&i.hasAttribute("formAction")){if(n=i,u=i[me]||null)c=u.formAction;else if(ys(n)!==null)continue}else c=u.action;typeof c=="function"?l[a+1]=c:(l.splice(a,3),a-=3),am(l)}}}function nm(){function t(i){i.canIntercept&&i.info==="react-transition"&&i.intercept({handler:function(){return new Promise(function(u){return n=u})},focusReset:"manual",scroll:"manual"})}function e(){n!==null&&(n(),n=null),a||setTimeout(l,20)}function l(){if(!a&&!navigation.transition){var i=navigation.currentEntry;i&&i.url!=null&&navigation.navigate(i.url,{state:i.getState(),info:"react-transition",history:"replace"})}}if(typeof navigation=="object"){var a=!1,n=null;return navigation.addEventListener("navigate",t),navigation.addEventListener("navigatesuccess",e),navigation.addEventListener("navigateerror",e),setTimeout(l,100),function(){a=!0,navigation.removeEventListener("navigate",t),navigation.removeEventListener("navigatesuccess",e),navigation.removeEventListener("navigateerror",e),n!==null&&(n(),n=null)}}}function zs(t){this._internalRoot=t}Bu.prototype.render=zs.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(d(409));var l=e.current,a=Ae();$0(l,a,t,e,null,null)},Bu.prototype.unmount=zs.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;$0(t.current,2,null,t,null,null),Su(),e[Sa]=null}};function Bu(t){this._internalRoot=t}Bu.prototype.unstable_scheduleHydration=function(t){if(t){var e=Zs();t={blockedOn:null,target:t,priority:e};for(var l=0;l<Jl.length&&e!==0&&e<Jl[l].priority;l++);Jl.splice(l,0,t),l===0&&em(t)}};var im=T.version;if(im!=="19.3.0")throw Error(d(527,im,"19.3.0"));F.findDOMNode=function(t){var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(d(188)):(t=Object.keys(t).join(","),Error(d(268,t)));return t=at(e),t=t!==null?w(t):null,t=t===null?null:t.stateNode,t};var Tp={bundleType:0,version:"19.3.0",rendererPackageName:"react-dom",currentDispatcherRef:q,reconcilerVersion:"19.3.0"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var qu=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!qu.isDisabled&&qu.supportsFiber)try{dn=qu.inject(Tp),Se=qu}catch{}}return ui.createRoot=function(t,e){if(!_(t))throw Error(d(299));var l=!1,a="",n=Jr,i=$r,u=Fr;return e!=null&&(e.unstable_strictMode===!0&&(l=!0),e.identifierPrefix!==void 0&&(a=e.identifierPrefix),e.onUncaughtError!==void 0&&(n=e.onUncaughtError),e.onCaughtError!==void 0&&(i=e.onCaughtError),e.onRecoverableError!==void 0&&(u=e.onRecoverableError)),e=K0(t,1,!1,null,null,l,a,null,n,i,u,nm),t[Sa]=e.current,Io(t),new zs(e)},ui.hydrateRoot=function(t,e,l){if(!_(t))throw Error(d(299));var a=!1,n="",i=Jr,u=$r,c=Fr,s=null;return l!=null&&(l.unstable_strictMode===!0&&(a=!0),l.identifierPrefix!==void 0&&(n=l.identifierPrefix),l.onUncaughtError!==void 0&&(i=l.onUncaughtError),l.onCaughtError!==void 0&&(u=l.onCaughtError),l.onRecoverableError!==void 0&&(c=l.onRecoverableError),l.formState!==void 0&&(s=l.formState)),e=K0(t,1,!0,e,l??null,a,n,s,i,u,c,nm),e.context=J0(null),l=e.current,a=Ae(),a=Fu(a),n=Ml(a),n.callback=null,Dl(l,n,a),l=a,e.current.lanes=l,hn(e,l),nl(e),t[Sa]=e.current,Io(t),new Bu(e)},ui.version="19.3.0",ui}var pm;function Up(){if(pm)return Es.exports;pm=1;function v(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(v)}catch(T){console.error(T)}}return v(),Es.exports=Dp(),Es.exports}var Hp=Up();/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Rp=v=>v.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),Bp=v=>v.replace(/^([A-Z])|[\s-_]+(\w)/g,(T,D,d)=>d?d.toUpperCase():D.toLowerCase()),gm=v=>{const T=Bp(v);return T.charAt(0).toUpperCase()+T.slice(1)},Sm=(...v)=>v.filter((T,D,d)=>!!T&&T.trim()!==""&&d.indexOf(T)===D).join(" ").trim(),qp=v=>{for(const T in v)if(T.startsWith("aria-")||T==="role"||T==="title")return!0};/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var Yp={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Gp=J.forwardRef(({color:v="currentColor",size:T=24,strokeWidth:D=2,absoluteStrokeWidth:d,className:_="",children:O,iconNode:Y,...k},V)=>J.createElement("svg",{ref:V,...Yp,width:T,height:T,stroke:v,strokeWidth:d?Number(D)*24/Number(T):D,className:Sm("lucide",_),...!O&&!qp(k)&&{"aria-hidden":"true"},...k},[...Y.map(([at,w])=>J.createElement(at,w)),...Array.isArray(O)?O:[O]]));/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const St=(v,T)=>{const D=J.forwardRef(({className:d,..._},O)=>J.createElement(Gp,{ref:O,iconNode:T,className:Sm(`lucide-${Rp(gm(v))}`,`lucide-${v}`,d),..._}));return D.displayName=gm(v),D};/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Lp=[["path",{d:"M2.97 12.92A2 2 0 0 0 2 14.63v3.24a2 2 0 0 0 .97 1.71l3 1.8a2 2 0 0 0 2.06 0L12 19v-5.5l-5-3-4.03 2.42Z",key:"lc1i9w"}],["path",{d:"m7 16.5-4.74-2.85",key:"1o9zyk"}],["path",{d:"m7 16.5 5-3",key:"va8pkn"}],["path",{d:"M7 16.5v5.17",key:"jnp8gn"}],["path",{d:"M12 13.5V19l3.97 2.38a2 2 0 0 0 2.06 0l3-1.8a2 2 0 0 0 .97-1.71v-3.24a2 2 0 0 0-.97-1.71L17 10.5l-5 3Z",key:"8zsnat"}],["path",{d:"m17 16.5-5-3",key:"8arw3v"}],["path",{d:"m17 16.5 4.74-2.85",key:"8rfmw"}],["path",{d:"M17 16.5v5.17",key:"k6z78m"}],["path",{d:"M7.97 4.42A2 2 0 0 0 7 6.13v4.37l5 3 5-3V6.13a2 2 0 0 0-.97-1.71l-3-1.8a2 2 0 0 0-2.06 0l-3 1.8Z",key:"1xygjf"}],["path",{d:"M12 8 7.26 5.15",key:"1vbdud"}],["path",{d:"m12 8 4.74-2.85",key:"3rx089"}],["path",{d:"M12 13.5V8",key:"1io7kd"}]],zm=St("boxes",Lp);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Qp=[["path",{d:"M20 6 9 17l-5-5",key:"1gmf2c"}]],oi=St("check",Qp);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Xp=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["line",{x1:"12",x2:"12",y1:"8",y2:"12",key:"1pkeuh"}],["line",{x1:"12",x2:"12.01",y1:"16",y2:"16",key:"4dfq90"}]],Vp=St("circle-alert",Xp);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Zp=[["path",{d:"m18 16 4-4-4-4",key:"1inbqp"}],["path",{d:"m6 8-4 4 4 4",key:"15zrgr"}],["path",{d:"m14.5 4-5 16",key:"e7oirm"}]],xm=St("code-xml",Zp);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const kp=[["path",{d:"m16.24 7.76-1.804 5.411a2 2 0 0 1-1.265 1.265L7.76 16.24l1.804-5.411a2 2 0 0 1 1.265-1.265z",key:"9ktpf1"}],["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}]],Kp=St("compass",kp);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Jp=[["rect",{width:"14",height:"14",x:"8",y:"8",rx:"2",ry:"2",key:"17jyea"}],["path",{d:"M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2",key:"zix9uf"}]],As=St("copy",Jp);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $p=[["path",{d:"M10 12.5 8 15l2 2.5",key:"1tg20x"}],["path",{d:"m14 12.5 2 2.5-2 2.5",key:"yinavb"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4",key:"tnqrlb"}],["path",{d:"M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7z",key:"1mlx9k"}]],Fp=St("file-code",$p);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Wp=[["path",{d:"M20 20a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.9a2 2 0 0 1-1.69-.9L9.6 3.9A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2Z",key:"1kt360"}],["path",{d:"M12 10v6",key:"1bos4e"}],["path",{d:"m15 13-3 3-3-3",key:"6j2sf0"}]],Cs=St("folder-down",Wp);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ip=[["path",{d:"m6 14 1.5-2.9A2 2 0 0 1 9.24 10H20a2 2 0 0 1 1.94 2.5l-1.54 6a2 2 0 0 1-1.95 1.5H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h3.9a2 2 0 0 1 1.69.9l.81 1.2a2 2 0 0 0 1.67.9H18a2 2 0 0 1 2 2v2",key:"usdka0"}]],Pp=St("folder-open",Ip);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const tg=[["path",{d:"M12 10v6",key:"1bos4e"}],["path",{d:"M9 13h6",key:"1uhe8q"}],["path",{d:"M20 20a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.9a2 2 0 0 1-1.69-.9L9.6 3.9A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2Z",key:"1kt360"}]],eg=St("folder-plus",tg);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const lg=[["path",{d:"M20 20a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.9a2 2 0 0 1-1.69-.9L9.6 3.9A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2Z",key:"1kt360"}]],Ds=St("folder",lg);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ag=[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}],["path",{d:"M3 9h18",key:"1pudct"}],["path",{d:"M3 15h18",key:"5xshup"}],["path",{d:"M9 3v18",key:"fh3hqa"}],["path",{d:"M15 3v18",key:"14nvp0"}]],Nm=St("grid-3x3",ag);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ng=[["rect",{width:"7",height:"7",x:"3",y:"3",rx:"1",key:"1g98yp"}],["rect",{width:"7",height:"7",x:"14",y:"3",rx:"1",key:"6d4xhi"}],["rect",{width:"7",height:"7",x:"14",y:"14",rx:"1",key:"nxv5o0"}],["rect",{width:"7",height:"7",x:"3",y:"14",rx:"1",key:"1bb6yr"}]],ig=St("layout-grid",ng);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ug=[["path",{d:"M9 17H7A5 5 0 0 1 7 7h2",key:"8i5ue5"}],["path",{d:"M15 7h2a5 5 0 1 1 0 10h-2",key:"1b9ql8"}],["line",{x1:"8",x2:"16",y1:"12",y2:"12",key:"1jonct"}]],cg=St("link-2",ug);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const og=[["path",{d:"M15 3h6v6",key:"1q9fwt"}],["path",{d:"m21 3-7 7",key:"1l2asr"}],["path",{d:"m3 21 7-7",key:"tjx5ai"}],["path",{d:"M9 21H3v-6",key:"wtvkvv"}]],sg=St("maximize-2",og);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const fg=[["rect",{width:"20",height:"14",x:"2",y:"3",rx:"2",key:"48i651"}],["line",{x1:"8",x2:"16",y1:"21",y2:"21",key:"1svkeh"}],["line",{x1:"12",x2:"12",y1:"17",y2:"21",key:"vw1qmm"}]],rg=St("monitor",fg);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const dg=[["path",{d:"M20.985 12.486a9 9 0 1 1-9.473-9.472c.405-.022.617.46.402.803a6 6 0 0 0 8.268 8.268c.344-.215.825-.004.803.401",key:"kfwtm"}]],Tm=St("moon",dg);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const mg=[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"M12 5v14",key:"s699le"}]],Us=St("plus",mg);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const hg=[["path",{d:"M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8",key:"v9h5vc"}],["path",{d:"M21 3v5h-5",key:"1q7to0"}],["path",{d:"M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16",key:"3uifl3"}],["path",{d:"M8 16H3v5",key:"1cv678"}]],Os=St("refresh-cw",hg);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const pg=[["path",{d:"M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8",key:"1357e3"}],["path",{d:"M3 3v5h5",key:"1xhq8a"}]],Em=St("rotate-ccw",pg);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const gg=[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}],["path",{d:"M21 9H3",key:"1338ky"}],["path",{d:"M21 15H3",key:"9uk58r"}]],xg=St("rows-3",gg);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const bg=[["path",{d:"m21 21-4.34-4.34",key:"14j7rj"}],["circle",{cx:"11",cy:"11",r:"8",key:"4ej97u"}]],vg=St("search",bg);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const yg=[["rect",{width:"14",height:"20",x:"5",y:"2",rx:"2",ry:"2",key:"1yt0o3"}],["path",{d:"M12 18h.01",key:"mhygvu"}]],Sg=St("smartphone",yg);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const zg=[["path",{d:"M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594z",key:"1s2grr"}],["path",{d:"M20 2v4",key:"1rf3ol"}],["path",{d:"M22 4h-4",key:"gwowj6"}],["circle",{cx:"4",cy:"20",r:"2",key:"6kqj1y"}]],_m=St("sparkles",zg);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ng=[["circle",{cx:"12",cy:"12",r:"4",key:"4exip2"}],["path",{d:"M12 2v2",key:"tus03m"}],["path",{d:"M12 20v2",key:"1lh1kg"}],["path",{d:"m4.93 4.93 1.41 1.41",key:"149t6j"}],["path",{d:"m17.66 17.66 1.41 1.41",key:"ptbguv"}],["path",{d:"M2 12h2",key:"1t8f8n"}],["path",{d:"M20 12h2",key:"1q8mjw"}],["path",{d:"m6.34 17.66-1.41 1.41",key:"1m8zz5"}],["path",{d:"m19.07 4.93-1.41 1.41",key:"1shlcs"}]],jm=St("sun",Ng);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Tg=[["rect",{width:"16",height:"20",x:"4",y:"2",rx:"2",ry:"2",key:"76otgf"}],["line",{x1:"12",x2:"12.01",y1:"18",y2:"18",key:"1dp563"}]],Eg=St("tablet",Tg);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _g=[["path",{d:"M12.586 2.586A2 2 0 0 0 11.172 2H4a2 2 0 0 0-2 2v7.172a2 2 0 0 0 .586 1.414l8.704 8.704a2.426 2.426 0 0 0 3.42 0l6.58-6.58a2.426 2.426 0 0 0 0-3.42z",key:"vktsd0"}],["circle",{cx:"7.5",cy:"7.5",r:".5",fill:"currentColor",key:"kqv944"}]],jg=St("tag",_g);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const wg=[["path",{d:"M10 11v6",key:"nco0om"}],["path",{d:"M14 11v6",key:"outv1u"}],["path",{d:"M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6",key:"miytrc"}],["path",{d:"M3 6h18",key:"d0wm0j"}],["path",{d:"M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2",key:"e791ji"}]],Ag=St("trash-2",wg);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Cg=[["path",{d:"M12 3v12",key:"1x0j5s"}],["path",{d:"m17 8-5-5-5 5",key:"7q97r8"}],["path",{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4",key:"ih7n3h"}]],Og=St("upload",Cg);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Mg=[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]],Gu=St("x",Mg),ci=[{id:"bottoni",name:"Bottoni & Controlli",color:"#0d9488",dotBg:"bg-teal-600",badgeBg:"bg-teal-50",badgeText:"text-teal-800",badgeBorder:"border-teal-200",headerBg:"bg-teal-700",headerBorder:"border-teal-800",headerHex:"#0f766e"},{id:"schede",name:"Schede & Card",color:"#d97706",dotBg:"bg-amber-600",badgeBg:"bg-amber-50",badgeText:"text-amber-800",badgeBorder:"border-amber-200",headerBg:"bg-amber-600",headerBorder:"border-amber-700",headerHex:"#d97706"},{id:"layout",name:"Layout & Griglie",color:"#4f46e5",dotBg:"bg-indigo-600",badgeBg:"bg-indigo-50",badgeText:"text-indigo-800",badgeBorder:"border-indigo-200",headerBg:"bg-indigo-700",headerBorder:"border-indigo-800",headerHex:"#4338ca"},{id:"animazioni",name:"Animazioni & Effetti",color:"#9333ea",dotBg:"bg-purple-600",badgeBg:"bg-purple-50",badgeText:"text-purple-800",badgeBorder:"border-purple-200",headerBg:"bg-purple-700",headerBorder:"border-purple-800",headerHex:"#7e22ce"},{id:"form",name:"Campi & Form",color:"#ea580c",dotBg:"bg-orange-600",badgeBg:"bg-orange-50",badgeText:"text-orange-800",badgeBorder:"border-orange-200",headerBg:"bg-orange-600",headerBorder:"border-orange-700",headerHex:"#ea580c"},{id:"modali",name:"Modali & Dialoghi",color:"#059669",dotBg:"bg-emerald-600",badgeBg:"bg-emerald-50",badgeText:"text-emerald-800",badgeBorder:"border-emerald-200",headerBg:"bg-emerald-700",headerBorder:"border-emerald-800",headerHex:"#047857"},{id:"menu",name:"Menu & Navigazione",color:"#0284c7",dotBg:"bg-sky-600",badgeBg:"bg-sky-50",badgeText:"text-sky-800",badgeBorder:"border-sky-200",headerBg:"bg-sky-700",headerBorder:"border-sky-800",headerHex:"#0369a1"},{id:"header",name:"Header & Barre Top",color:"#e11d48",dotBg:"bg-rose-600",badgeBg:"bg-rose-50",badgeText:"text-rose-800",badgeBorder:"border-rose-200",headerBg:"bg-rose-700",headerBorder:"border-rose-800",headerHex:"#be123c"},{id:"hero",name:"Hero & Banner",color:"#7c3aed",dotBg:"bg-violet-600",badgeBg:"bg-violet-50",badgeText:"text-violet-800",badgeBorder:"border-violet-200",headerBg:"bg-violet-700",headerBorder:"border-violet-800",headerHex:"#6d28d9"}],bm=[{id:"btn-moderno",title:"Pulsante Gradiente Fluttuante",category:"bottoni",filePath:"public/snippets/bottoni/pulsante-moderno.html",description:"Pulsante call-to-action con sfumatura smeraldo/teal e animazione hover.",tags:["button","gradient","hover","icon"],createdAt:171e10,code:`<!DOCTYPE html>
<html lang="it">
<head>
  <meta charset="UTF-8">
  <style>
    * { box-sizing: border-box; }
    body {
      margin: 0;
      min-height: 100vh;
      display: flex;
      align-items: center;
      justify-content: center;
      font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
      padding: 20px;
    }
    .btn-gradient {
      position: relative;
      display: inline-flex;
      align-items: center;
      gap: 10px;
      padding: 14px 28px;
      font-size: 15px;
      font-weight: 600;
      color: #ffffff;
      background: linear-gradient(135deg, #0d9488 0%, #0284c7 100%);
      border: none;
      border-radius: 12px;
      cursor: pointer;
      box-shadow: 0 4px 15px rgba(13, 148, 136, 0.35);
      transition: all 0.25s cubic-bezier(0.16, 1, 0.3, 1);
    }
    .btn-gradient:hover {
      transform: translateY(-2px);
      box-shadow: 0 8px 25px rgba(13, 148, 136, 0.45);
      background: linear-gradient(135deg, #0f766e 0%, #0369a1 100%);
    }
    .btn-gradient:active {
      transform: translateY(0);
      box-shadow: 0 2px 8px rgba(13, 148, 136, 0.3);
    }
    .btn-icon {
      transition: transform 0.2s ease;
    }
    .btn-gradient:hover .btn-icon {
      transform: translateX(4px);
    }
  </style>
</head>
<body>
  <button class="btn-gradient" onclick="this.querySelector('span').textContent = 'Cliccato! ✓'; setTimeout(() => this.querySelector('span').textContent = 'Azione Principale', 1500)">
    <span>Azione Principale</span>
    <svg class="btn-icon" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
      <line x1="5" y1="12" x2="19" y2="12"></line>
      <polyline points="12 5 19 12 12 19"></polyline>
    </svg>
  </button>
</body>
</html>`},{id:"btn-ardesia",title:"Pulsante Outline Minimalista",category:"bottoni",filePath:"public/snippets/bottoni/bottone-ardesia-minimale.html",description:"Pulsante secondario elegante con bordo sottile e sfumatura al passaggio del mouse.",tags:["button","outline","minimal","clean"],createdAt:1710001e6,code:`<!DOCTYPE html>
<html lang="it">
<head>
  <meta charset="UTF-8">
  <style>
    * { box-sizing: border-box; }
    body {
      margin: 0;
      min-height: 100vh;
      display: flex;
      align-items: center;
      justify-content: center;
      font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
      padding: 20px;
    }
    .btn-outline {
      display: inline-flex;
      align-items: center;
      gap: 8px;
      padding: 12px 24px;
      font-size: 14px;
      font-weight: 600;
      color: #334155;
      background: #ffffff;
      border: 1.5px solid #cbd5e1;
      border-radius: 10px;
      cursor: pointer;
      box-shadow: 0 1px 2px rgba(0,0,0,0.05);
      transition: all 0.2s ease;
    }
    .btn-outline:hover {
      border-color: #0f172a;
      color: #0f172a;
      background: #f8fafc;
      box-shadow: 0 4px 12px rgba(0,0,0,0.08);
      transform: translateY(-1px);
    }
    .btn-outline:active {
      transform: translateY(0);
      background: #f1f5f9;
    }
  </style>
</head>
<body>
  <button class="btn-outline" onclick="this.style.borderColor = '#0d9488'; this.style.color = '#0d9488';">
    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
      <path d="M12 20h9"></path>
      <path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z"></path>
    </svg>
    <span>Modifica Parametri</span>
  </button>
</body>
</html>`},{id:"card-prodotto",title:"Scheda Prodotto Vetrina",category:"schede",filePath:"public/snippets/schede/scheda-prodotto.html",description:"Card prodotto elegante con banner ambra, badge categoria e prezzo con pulsante d’acquisto.",tags:["card","shop","ecommerce","product"],createdAt:1710002e6,code:`<!DOCTYPE html>
<html lang="it">
<head>
  <meta charset="UTF-8">
  <style>
    * { box-sizing: border-box; }
    body {
      margin: 0;
      min-height: 100vh;
      display: flex;
      align-items: center;
      justify-content: center;
      font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
      padding: 20px;
    }
    .card {
      background: #ffffff;
      border: 1px solid #e2e8f0;
      border-radius: 16px;
      width: 100%;
      max-width: 320px;
      overflow: hidden;
      box-shadow: 0 10px 25px -5px rgba(0, 0, 0, 0.08);
      transition: all 0.25s ease;
    }
    .card:hover {
      transform: translateY(-4px);
      box-shadow: 0 18px 30px -5px rgba(0, 0, 0, 0.12);
      border-color: #cbd5e1;
    }
    .card-banner {
      height: 120px;
      background: linear-gradient(135deg, #fef3c7 0%, #fde68a 100%);
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 40px;
      border-bottom: 1px solid #fef3c7;
    }
    .card-content {
      padding: 20px;
    }
    .card-tag {
      display: inline-block;
      font-size: 11px;
      font-weight: 700;
      text-transform: uppercase;
      letter-spacing: 0.8px;
      color: #b45309;
      background: #fef3c7;
      padding: 3px 8px;
      border-radius: 6px;
      margin-bottom: 10px;
    }
    .card-title {
      margin: 0 0 8px 0;
      font-size: 17px;
      color: #0f172a;
      font-weight: 700;
    }
    .card-desc {
      margin: 0 0 16px 0;
      font-size: 13px;
      color: #64748b;
      line-height: 1.5;
    }
    .card-footer {
      display: flex;
      align-items: center;
      justify-content: space-between;
      border-top: 1px solid #f1f5f9;
      padding-top: 14px;
    }
    .card-price {
      font-size: 18px;
      font-weight: 800;
      color: #0f172a;
    }
    .card-btn {
      background: #0f172a;
      color: #ffffff;
      border: none;
      padding: 9px 16px;
      border-radius: 8px;
      font-size: 12px;
      font-weight: 600;
      cursor: pointer;
      transition: background 0.2s;
    }
    .card-btn:hover {
      background: #334155;
    }
  </style>
</head>
<body>
  <div class="card">
    <div class="card-banner">📦</div>
    <div class="card-content">
      <span class="card-tag">Nuovo Arrivo</span>
      <h3 class="card-title">Kit Componenti Web</h3>
      <p class="card-desc">Raccolta di elementi UI leggeri e accessibili già ottimizzati per la resa.</p>
      <div class="card-footer">
        <span class="card-price">€29,00</span>
        <button class="card-btn" onclick="this.textContent = 'Aggiunto!'; setTimeout(() => this.textContent = 'Acquista', 1500)">Acquista</button>
      </div>
    </div>
  </div>
</body>
</html>`},{id:"profilo-utente",title:"Profilo Utente Compatto",category:"schede",filePath:"public/snippets/schede/profilo-minimale.html",description:"Badge profilo orizzontale con avatar iniziali, ruolo e spia status attiva.",tags:["profile","avatar","user","badge"],createdAt:1710003e6,code:`<!DOCTYPE html>
<html lang="it">
<head>
  <meta charset="UTF-8">
  <style>
    * { box-sizing: border-box; }
    body {
      margin: 0;
      min-height: 100vh;
      display: flex;
      align-items: center;
      justify-content: center;
      font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
      padding: 20px;
    }
    .user-card {
      display: flex;
      align-items: center;
      gap: 16px;
      background: #ffffff;
      border: 1px solid #e2e8f0;
      padding: 16px 20px;
      border-radius: 14px;
      min-width: 290px;
      box-shadow: 0 4px 14px rgba(0,0,0,0.05);
      transition: transform 0.2s ease, border-color 0.2s ease;
    }
    .user-card:hover {
      transform: translateY(-2px);
      border-color: #cbd5e1;
      box-shadow: 0 6px 20px rgba(0,0,0,0.08);
    }
    .avatar {
      width: 46px;
      height: 46px;
      border-radius: 12px;
      background: linear-gradient(135deg, #0d9488 0%, #0284c7 100%);
      color: #ffffff;
      display: flex;
      align-items: center;
      justify-content: center;
      font-weight: 700;
      font-size: 16px;
      box-shadow: 0 2px 8px rgba(13,148,136,0.3);
    }
    .info-name {
      margin: 0;
      font-size: 15px;
      color: #0f172a;
      font-weight: 700;
    }
    .info-role {
      margin: 2px 0 0 0;
      font-size: 12px;
      color: #64748b;
    }
    .badge-status {
      margin-left: auto;
      width: 10px;
      height: 10px;
      border-radius: 50%;
      background: #10b981;
      box-shadow: 0 0 0 3px #d1fae5;
    }
  </style>
</head>
<body>
  <div class="user-card">
    <div class="avatar">MR</div>
    <div>
      <h4 class="info-name">Marco Rossi</h4>
      <p class="info-role">Frontend Specialist</p>
    </div>
    <div class="badge-status" title="Disponibile Online"></div>
  </div>
</body>
</html>`},{id:"accordion-schede-faq",title:"Accordion FAQ a Scomparsa Dinamico",category:"schede",filePath:"public/snippets/schede/accordion-faq.html",description:"Componente a fisarmonica (accordion) con apertura/chiusura fluida dei pannelli, freccia rotante e chiusura automatica degli altri elementi.",tags:["accordion","faq","schede","collapse","interattivo"],createdAt:17100035e5,code:`<!DOCTYPE html>
<html lang="it">
<head>
  <meta charset="UTF-8">
  <style>
    * { box-sizing: border-box; margin: 0; padding: 0; }
    body {
      font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
      padding: 24px 16px;
      display: flex;
      justify-content: center;
      align-items: flex-start;
      min-height: 100vh;
      background: transparent;
    }
    .accordion-card {
      width: 100%;
      max-width: 600px;
      background: #ffffff;
      border: 1px solid #e2e8f0;
      border-radius: 16px;
      padding: 20px;
      box-shadow: 0 4px 16px rgba(0, 0, 0, 0.04);
    }
    .card-header {
      margin-bottom: 16px;
      padding-bottom: 12px;
      border-bottom: 1px solid #f1f5f9;
    }
    .card-title {
      font-size: 16px;
      font-weight: 700;
      color: #0f172a;
      display: flex;
      align-items: center;
      gap: 8px;
    }
    .card-subtitle {
      font-size: 12px;
      color: #64748b;
      margin-top: 4px;
    }
    .accordion-list {
      display: flex;
      flex-direction: column;
      gap: 8px;
    }
    .accordion-item {
      border: 1px solid #e2e8f0;
      border-radius: 10px;
      overflow: hidden;
      transition: border-color 0.2s, box-shadow 0.2s;
    }
    .accordion-item.active {
      border-color: #d97706;
      box-shadow: 0 2px 8px rgba(217, 119, 6, 0.08);
    }
    .accordion-btn {
      width: 100%;
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: 12px 14px;
      background: #f8fafc;
      border: none;
      cursor: pointer;
      text-align: left;
      font-size: 13px;
      font-weight: 600;
      color: #1e293b;
      transition: background 0.15s, color 0.15s;
    }
    .accordion-item.active .accordion-btn {
      background: #fffbeb;
      color: #92400e;
    }
    .accordion-btn:hover {
      background: #f1f5f9;
    }
    .accordion-item.active .accordion-btn:hover {
      background: #fef3c7;
    }
    .chevron {
      display: inline-block;
      width: 16px;
      height: 16px;
      font-size: 11px;
      line-height: 16px;
      text-align: center;
      transition: transform 0.25s ease;
      color: #64748b;
    }
    .accordion-item.active .chevron {
      transform: rotate(180deg);
      color: #d97706;
    }
    .accordion-content {
      max-height: 0;
      overflow: hidden;
      transition: max-height 0.3s cubic-bezier(0.4, 0, 0.2, 1), padding 0.3s ease;
      background: #ffffff;
      padding: 0 14px;
      font-size: 13px;
      line-height: 1.6;
      color: #475569;
    }
    .accordion-item.active .accordion-content {
      max-height: 200px;
      padding: 12px 14px 14px;
    }
  </style>
</head>
<body>
  <div class="accordion-card">
    <div class="card-header">
      <div class="card-title">
        <span>📋</span>
        <span>Domande Frequenti (FAQ Accordion)</span>
      </div>
      <p class="card-subtitle">Clicca sulle sezioni per espandere e comprimere i contenuti con transizione fluida.</p>
    </div>

    <div class="accordion-list">
      <!-- Item 1 (Aperto per default) -->
      <div class="accordion-item active" id="acc-1">
        <button class="accordion-btn" onclick="toggleAccordion('acc-1')">
          <span>Come posso salvare e copiare questo componente?</span>
          <span class="chevron">▼</span>
        </button>
        <div class="accordion-content">
          Puoi cliccare sul pulsante "Copia HTML" direttamente dalla scheda per incollare l'intero codice comprensivo di stili e script JavaScript nel tuo progetto.
        </div>
      </div>

      <!-- Item 2 -->
      <div class="accordion-item" id="acc-2">
        <button class="accordion-btn" onclick="toggleAccordion('acc-2')">
          <span>È completamente compatibile con tutti i browser?</span>
          <span class="chevron">▼</span>
        </button>
        <div class="accordion-content">
          Sì, è realizzato in puro HTML, CSS e JavaScript standard (Vanilla JS), senza librerie esterne o dipendenze pesanti.
        </div>
      </div>

      <!-- Item 3 -->
      <div class="accordion-item" id="acc-3">
        <button class="accordion-btn" onclick="toggleAccordion('acc-3')">
          <span>Posso personalizzare i colori dell'animazione?</span>
          <span class="chevron">▼</span>
        </button>
        <div class="accordion-content">
          Certamente. I colori di accento sono definiti nella classe <code>.accordion-item.active</code> e possono essere modificati in qualsiasi tonalità esadecimale.
        </div>
      </div>
    </div>
  </div>

  <script>
    function toggleAccordion(id) {
      const item = document.getElementById(id);
      const isActive = item.classList.contains('active');
      
      document.querySelectorAll('.accordion-item').forEach(el => {
        el.classList.remove('active');
      });

      if (!isActive) {
        item.classList.add('active');
      }
    }
  <\/script>
</body>
</html>`},{id:"griglia-moderna",title:"Griglia Responsive Auto-Fit",category:"layout",filePath:"public/snippets/layout/griglia-moderna.html",description:"Layout a griglia senza media queries con CSS Grid repeat(auto-fit, minmax(...)).",tags:["grid","layout","responsive"],createdAt:1710004e6,code:`<!DOCTYPE html>
<html lang="it">
<head>
  <meta charset="UTF-8">
  <style>
    * { box-sizing: border-box; }
    body {
      margin: 0;
      font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
      padding: 24px;
    }
    .grid-container {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(130px, 1fr));
      gap: 14px;
      max-width: 650px;
      margin: 0 auto;
    }
    .grid-item {
      background: #ffffff;
      border: 1px solid #e2e8f0;
      border-radius: 12px;
      padding: 18px 12px;
      text-align: center;
      color: #334155;
      font-size: 13px;
      font-weight: 600;
      box-shadow: 0 2px 6px rgba(0,0,0,0.03);
      transition: all 0.2s ease;
    }
    .grid-item:hover {
      transform: translateY(-2px);
      border-color: #4f46e5;
      color: #4f46e5;
      box-shadow: 0 6px 16px rgba(79,70,229,0.12);
    }
    .grid-item span {
      display: block;
      font-size: 22px;
      margin-bottom: 6px;
      font-weight: 800;
      color: #4f46e5;
    }
  </style>
</head>
<body>
  <div class="grid-container">
    <div class="grid-item">
      <span>01</span>
      Layout Flessibile
    </div>
    <div class="grid-item">
      <span>02</span>
      Auto Responsive
    </div>
    <div class="grid-item">
      <span>03</span>
      Zero Dipendenze
    </div>
    <div class="grid-item">
      <span>04</span>
      CSS Grid Moderno
    </div>
  </div>
</body>
</html>`},{id:"barra-navigazione",title:"Barra di Navigazione Isolata",category:"layout",filePath:"public/snippets/layout/barra-navigazione.html",description:"Header di navigazione compatto a pillola con link e marchio evidenziato.",tags:["nav","header","menu","pill"],createdAt:1710005e6,code:`<!DOCTYPE html>
<html lang="it">
<head>
  <meta charset="UTF-8">
  <style>
    * { box-sizing: border-box; }
    body {
      margin: 0;
      min-height: 100vh;
      display: flex;
      align-items: center;
      justify-content: center;
      font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
      padding: 16px;
    }
    .navbar {
      display: flex;
      align-items: center;
      justify-content: space-between;
      background: #ffffff;
      border: 1px solid #e2e8f0;
      padding: 10px 18px;
      border-radius: 999px;
      max-width: 500px;
      width: 100%;
      box-shadow: 0 4px 18px rgba(0, 0, 0, 0.06);
    }
    .brand {
      font-weight: 800;
      color: #4f46e5;
      font-size: 14px;
      letter-spacing: -0.3px;
    }
    .nav-links {
      display: flex;
      gap: 8px;
    }
    .nav-links a {
      color: #64748b;
      text-decoration: none;
      font-size: 13px;
      font-weight: 500;
      padding: 6px 12px;
      border-radius: 999px;
      transition: all 0.2s ease;
    }
    .nav-links a:hover {
      color: #0f172a;
      background: #f1f5f9;
    }
    .nav-links a.active {
      color: #ffffff;
      background: #4f46e5;
    }
  </style>
</head>
<body>
  <nav class="navbar">
    <div class="brand">✦ PROGETTO</div>
    <div class="nav-links">
      <a href="#" class="active">Home</a>
      <a href="#">Archivio</a>
      <a href="#">Snippet</a>
    </div>
  </nav>
</body>
</html>`},{id:"caricamento-pulsante",title:"Spinner di Caricamento Viola",category:"animazioni",filePath:"public/snippets/animazioni/caricamento-pulsante.html",description:"Indicatore circolare di avanzamento con rotazione continua e didascalia.",tags:["loader","spinner","animation"],createdAt:1710006e6,code:`<!DOCTYPE html>
<html lang="it">
<head>
  <meta charset="UTF-8">
  <style>
    * { box-sizing: border-box; }
    body {
      margin: 0;
      min-height: 100vh;
      display: flex;
      align-items: center;
      justify-content: center;
      font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
      padding: 20px;
    }
    .spinner-box {
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 12px;
      background: #ffffff;
      border: 1px solid #e2e8f0;
      padding: 24px 32px;
      border-radius: 16px;
      box-shadow: 0 4px 14px rgba(0,0,0,0.05);
    }
    .spinner {
      width: 40px;
      height: 40px;
      border: 3.5px solid #f3e8ff;
      border-top-color: #9333ea;
      border-radius: 50%;
      animation: spin 0.75s cubic-bezier(0.68, -0.55, 0.27, 1.55) infinite;
    }
    @keyframes spin {
      to { transform: rotate(360deg); }
    }
    .spinner-label {
      color: #64748b;
      font-size: 13px;
      font-weight: 500;
    }
  </style>
</head>
<body>
  <div class="spinner-box">
    <div class="spinner"></div>
    <span class="spinner-label">Elaborazione in corso...</span>
  </div>
</body>
</html>`},{id:"effetto-testo-fluido",title:"Badge di Stato con Effetto Pulse",category:"animazioni",filePath:"public/snippets/animazioni/effetto-testo-fluido.html",description:"Badge pillola con cerchio radar pulsante continuo per monitoraggio stato server.",tags:["pulse","badge","status","radar"],createdAt:1710007e6,code:`<!DOCTYPE html>
<html lang="it">
<head>
  <meta charset="UTF-8">
  <style>
    * { box-sizing: border-box; }
    body {
      margin: 0;
      min-height: 100vh;
      display: flex;
      align-items: center;
      justify-content: center;
      font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
      padding: 20px;
    }
    .pulse-badge {
      display: inline-flex;
      align-items: center;
      gap: 10px;
      padding: 8px 18px;
      border-radius: 999px;
      background: #fdf4ff;
      border: 1px solid #f0abfc;
      color: #86198f;
      font-size: 13px;
      font-weight: 600;
      box-shadow: 0 2px 6px rgba(192, 38, 211, 0.08);
    }
    .dot-container {
      position: relative;
      width: 10px;
      height: 10px;
      display: flex;
      align-items: center;
      justify-content: center;
    }
    .dot-core {
      width: 8px;
      height: 8px;
      background: #a21caf;
      border-radius: 50%;
    }
    .dot-wave {
      position: absolute;
      width: 100%;
      height: 100%;
      border-radius: 50%;
      background: #d946ef;
      animation: pulse-ring 1.8s cubic-bezier(0.24, 0, 0.38, 1) infinite;
    }
    @keyframes pulse-ring {
      0% { transform: scale(0.95); opacity: 0.8; }
      100% { transform: scale(2.6); opacity: 0; }
    }
  </style>
</head>
<body>
  <div class="pulse-badge">
    <div class="dot-container">
      <div class="dot-wave"></div>
      <div class="dot-core"></div>
    </div>
    <span>Sistema Operativo Online</span>
  </div>
</body>
</html>`},{id:"campo-ricerca-animato",title:"Campo di Ricerca con Icona SVG",category:"form",filePath:"public/snippets/form/campo-ricerca-animato.html",description:"Input di ricerca fluido con icona lente e bordo illuminato corallo al focus.",tags:["form","input","search"],createdAt:1710008e6,code:`<!DOCTYPE html>
<html lang="it">
<head>
  <meta charset="UTF-8">
  <style>
    * { box-sizing: border-box; }
    body {
      margin: 0;
      min-height: 100vh;
      display: flex;
      align-items: center;
      justify-content: center;
      font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
      padding: 16px;
    }
    .search-wrapper {
      position: relative;
      width: 100%;
      max-width: 360px;
    }
    .search-input {
      width: 100%;
      padding: 12px 16px 12px 42px;
      background: #ffffff;
      border: 1.5px solid #cbd5e1;
      border-radius: 12px;
      color: #0f172a;
      font-size: 14px;
      outline: none;
      transition: all 0.2s ease;
      box-shadow: 0 1px 3px rgba(0,0,0,0.04);
    }
    .search-input:focus {
      border-color: #ea580c;
      box-shadow: 0 0 0 3.5px rgba(234, 88, 12, 0.15);
    }
    .search-icon {
      position: absolute;
      left: 14px;
      top: 50%;
      transform: translateY(-50%);
      color: #94a3b8;
      pointer-events: none;
      transition: color 0.2s;
    }
    .search-input:focus ~ .search-icon {
      color: #ea580c;
    }
  </style>
</head>
<body>
  <div class="search-wrapper">
    <input type="text" class="search-input" placeholder="Cerca componenti o documenti..." />
    <svg class="search-icon" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
      <circle cx="11" cy="11" r="8"></circle>
      <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
    </svg>
  </div>
</body>
</html>`},{id:"dialog-conferma",title:"Finestra Dialog di Conferma",category:"modali",filePath:"public/snippets/modali/dialog-conferma.html",description:"Modale di avviso/successo con icona verde smeraldo e bottoni di risposta interattivi.",tags:["modal","dialog","confirm","alert"],createdAt:1710009e6,code:`<!DOCTYPE html>
<html lang="it">
<head>
  <meta charset="UTF-8">
  <style>
    * { box-sizing: border-box; }
    body {
      margin: 0;
      min-height: 100vh;
      display: flex;
      align-items: center;
      justify-content: center;
      font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
      padding: 20px;
    }
    .modal-box {
      background: #ffffff;
      border: 1px solid #e2e8f0;
      border-radius: 16px;
      padding: 24px;
      max-width: 350px;
      width: 100%;
      box-shadow: 0 15px 35px -5px rgba(0, 0, 0, 0.1);
    }
    .modal-icon {
      width: 42px;
      height: 42px;
      border-radius: 12px;
      background: #d1fae5;
      color: #059669;
      display: flex;
      align-items: center;
      justify-content: center;
      margin-bottom: 14px;
      font-size: 20px;
      font-weight: 700;
    }
    .modal-title {
      margin: 0 0 6px 0;
      font-size: 16px;
      color: #0f172a;
      font-weight: 700;
    }
    .modal-text {
      margin: 0 0 20px 0;
      font-size: 13px;
      color: #64748b;
      line-height: 1.5;
    }
    .modal-actions {
      display: flex;
      justify-content: flex-end;
      gap: 10px;
    }
    .btn-secondary {
      background: #f1f5f9;
      border: 1px solid #e2e8f0;
      color: #475569;
      padding: 8px 16px;
      border-radius: 8px;
      font-size: 13px;
      font-weight: 600;
      cursor: pointer;
      transition: background 0.2s;
    }
    .btn-secondary:hover {
      background: #e2e8f0;
    }
    .btn-confirm {
      background: #059669;
      border: none;
      color: #ffffff;
      padding: 8px 16px;
      border-radius: 8px;
      font-size: 13px;
      font-weight: 600;
      cursor: pointer;
      transition: background 0.2s;
    }
    .btn-confirm:hover {
      background: #047857;
    }
  </style>
</head>
<body>
  <div class="modal-box">
    <div class="modal-icon">✓</div>
    <h3 class="modal-title">Operazione Riuscita</h3>
    <p class="modal-text">Il frammento di codice HTML è stato registrato ed è pronto all'uso.</p>
    <div class="modal-actions">
      <button class="btn-secondary" onclick="alert('Operazione annullata')">Annulla</button>
      <button class="btn-confirm" onclick="this.textContent = 'Fatto!'; setTimeout(() => this.textContent = 'Continua', 1200)">Continua</button>
    </div>
  </div>
</body>
</html>`},{id:"menu-dropdown-responsive",title:"Menu Navigazione con Dropdown Interattivo",category:"menu",filePath:"public/snippets/menu/menu-dropdown-responsive.html",description:"Barra di navigazione con logo brand, menu a tendina multilivello al passaggio del mouse e pulsante di azione.",tags:["menu","navigation","dropdown","navbar","responsive"],createdAt:17100007e5,code:`<!DOCTYPE html>
<html lang="it">
<head>
  <meta charset="UTF-8">
  <style>
    * { box-sizing: border-box; margin: 0; padding: 0; }
    body {
      font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
      padding: 24px 16px;
      display: flex;
      justify-content: center;
      align-items: flex-start;
      min-height: 100vh;
    }
    .navbar {
      width: 100%;
      max-width: 900px;
      background: #ffffff;
      border: 1px solid #e2e8f0;
      border-radius: 16px;
      padding: 10px 18px;
      display: flex;
      align-items: center;
      justify-content: space-between;
      box-shadow: 0 4px 16px rgba(0, 0, 0, 0.05);
    }
    .nav-brand {
      display: flex;
      align-items: center;
      gap: 10px;
      font-weight: 700;
      font-size: 16px;
      color: #0f172a;
      text-decoration: none;
    }
    .brand-icon {
      width: 32px;
      height: 32px;
      background: linear-gradient(135deg, #0284c7, #0369a1);
      border-radius: 8px;
      display: flex;
      align-items: center;
      justify-content: center;
      color: #ffffff;
      font-weight: 800;
      font-size: 16px;
    }
    .nav-links {
      display: flex;
      align-items: center;
      gap: 6px;
      list-style: none;
    }
    .nav-item {
      position: relative;
    }
    .nav-link {
      display: flex;
      align-items: center;
      gap: 5px;
      padding: 8px 14px;
      font-size: 14px;
      font-weight: 500;
      color: #475569;
      text-decoration: none;
      border-radius: 8px;
      transition: all 0.2s ease;
      cursor: pointer;
    }
    .nav-link:hover, .nav-item:hover > .nav-link {
      color: #0284c7;
      background: #f0f9ff;
    }
    .nav-link.active {
      color: #0284c7;
      background: #e0f2fe;
      font-weight: 600;
    }
    /* Dropdown */
    .dropdown-menu {
      position: absolute;
      top: 100%;
      left: 0;
      margin-top: 8px;
      width: 240px;
      background: #ffffff;
      border: 1px solid #e2e8f0;
      border-radius: 12px;
      padding: 8px;
      box-shadow: 0 10px 25px rgba(0, 0, 0, 0.08);
      opacity: 0;
      visibility: hidden;
      transform: translateY(6px);
      transition: all 0.2s ease;
      z-index: 50;
    }
    .nav-item:hover .dropdown-menu {
      opacity: 1;
      visibility: visible;
      transform: translateY(0);
    }
    .dropdown-item {
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: 9px 12px;
      border-radius: 8px;
      text-decoration: none;
      font-size: 13px;
      font-weight: 500;
      color: #334155;
      transition: background 0.15s;
    }
    .dropdown-item:hover {
      background: #f8fafc;
      color: #0284c7;
    }
    .item-tag {
      font-size: 10px;
      font-weight: 700;
      background: #e0f2fe;
      color: #0369a1;
      padding: 2px 6px;
      border-radius: 4px;
    }
    .nav-cta {
      background: #0284c7;
      color: #ffffff;
      font-size: 13px;
      font-weight: 600;
      padding: 8px 18px;
      border-radius: 8px;
      border: none;
      cursor: pointer;
      transition: all 0.2s ease;
      box-shadow: 0 2px 6px rgba(2, 132, 199, 0.25);
    }
    .nav-cta:hover {
      background: #0369a1;
      transform: translateY(-1px);
    }
  </style>
</head>
<body>
  <nav class="navbar">
    <a href="#" class="nav-brand">
      <div class="brand-icon">❖</div>
      <span>StudioNav</span>
    </a>
    <ul class="nav-links">
      <li class="nav-item">
        <a href="#" class="nav-link active">Home</a>
      </li>
      <li class="nav-item">
        <div class="nav-link">
          <span>Prodotti</span>
          <span style="font-size: 10px;">▼</span>
        </div>
        <div class="dropdown-menu">
          <a href="#" class="dropdown-item">
            <span>Editor Componenti</span>
            <span class="item-tag">Pro</span>
          </a>
          <a href="#" class="dropdown-item">
            <span>Libreria Layout</span>
          </a>
          <a href="#" class="dropdown-item">
            <span>Generatore Icone</span>
            <span class="item-tag">Nuovo</span>
          </a>
          <a href="#" class="dropdown-item">
            <span>Esportatore HTML/CSS</span>
          </a>
        </div>
      </li>
      <li class="nav-item">
        <a href="#" class="nav-link">Documentazione</a>
      </li>
      <li class="nav-item">
        <a href="#" class="nav-link">Prezzi</a>
      </li>
    </ul>
    <button class="nav-cta" onclick="alert('Accesso alla console di navigazione!')">Inizia Ora</button>
  </nav>
</body>
</html>`},{id:"header-app-moderno",title:"Header Applicativo con Ricerca e Profilo",category:"header",filePath:"public/snippets/header/header-app-moderno.html",description:"Intestazione top per applicazione web con percorso breadcrumb, ricerca rapida ⌘K, campana notifiche e badge profilo.",tags:["header","topbar","search","avatar","notifications"],createdAt:17100008e5,code:`<!DOCTYPE html>
<html lang="it">
<head>
  <meta charset="UTF-8">
  <style>
    * { box-sizing: border-box; margin: 0; padding: 0; }
    body {
      font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
      padding: 24px 16px;
      display: flex;
      justify-content: center;
      align-items: flex-start;
      min-height: 100vh;
    }
    .app-header {
      width: 100%;
      max-width: 960px;
      background: #ffffff;
      border: 1px solid #e2e8f0;
      border-radius: 16px;
      padding: 12px 20px;
      display: flex;
      align-items: center;
      justify-content: space-between;
      gap: 16px;
      box-shadow: 0 4px 14px rgba(0, 0, 0, 0.04);
    }
    .header-left {
      display: flex;
      align-items: center;
      gap: 12px;
    }
    .app-badge {
      display: inline-flex;
      align-items: center;
      gap: 6px;
      padding: 6px 12px;
      background: #fff1f2;
      border: 1px solid #ffe4e6;
      color: #be123c;
      font-size: 13px;
      font-weight: 700;
      border-radius: 10px;
    }
    .breadcrumb {
      font-size: 13px;
      color: #64748b;
      display: flex;
      align-items: center;
      gap: 6px;
    }
    .breadcrumb b {
      color: #0f172a;
    }
    .header-search {
      flex: 1;
      max-width: 360px;
      position: relative;
    }
    .search-input {
      width: 100%;
      background: #f8fafc;
      border: 1px solid #cbd5e1;
      border-radius: 10px;
      padding: 8px 36px 8px 34px;
      font-size: 13px;
      color: #1e293b;
      outline: none;
      transition: all 0.2s;
    }
    .search-input:focus {
      background: #ffffff;
      border-color: #e11d48;
      box-shadow: 0 0 0 3px rgba(225, 29, 72, 0.12);
    }
    .search-icon {
      position: absolute;
      left: 10px;
      top: 50%;
      transform: translateY(-50%);
      color: #94a3b8;
      font-size: 14px;
    }
    .kbd-shortcut {
      position: absolute;
      right: 8px;
      top: 50%;
      transform: translateY(-50%);
      font-size: 11px;
      font-family: monospace;
      background: #e2e8f0;
      color: #475569;
      padding: 2px 6px;
      border-radius: 4px;
      font-weight: 600;
    }
    .header-right {
      display: flex;
      align-items: center;
      gap: 10px;
    }
    .icon-btn {
      position: relative;
      width: 36px;
      height: 36px;
      border-radius: 10px;
      border: 1px solid #e2e8f0;
      background: #ffffff;
      color: #475569;
      display: flex;
      align-items: center;
      justify-content: center;
      cursor: pointer;
      font-size: 16px;
      transition: all 0.2s;
    }
    .icon-btn:hover {
      background: #f8fafc;
      color: #0f172a;
      border-color: #cbd5e1;
    }
    .badge-dot {
      position: absolute;
      top: 6px;
      right: 6px;
      width: 7px;
      height: 7px;
      background: #e11d48;
      border-radius: 50%;
      border: 1.5px solid #ffffff;
    }
    .user-pill {
      display: flex;
      align-items: center;
      gap: 8px;
      padding: 4px 10px 4px 4px;
      background: #f8fafc;
      border: 1px solid #e2e8f0;
      border-radius: 20px;
      cursor: pointer;
      transition: all 0.15s;
    }
    .user-pill:hover {
      background: #f1f5f9;
      border-color: #cbd5e1;
    }
    .avatar {
      width: 28px;
      height: 28px;
      border-radius: 50%;
      background: #e11d48;
      color: #ffffff;
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 12px;
      font-weight: 700;
    }
    .user-info {
      text-align: left;
    }
    .user-name {
      font-size: 12px;
      font-weight: 700;
      color: #1e293b;
      line-height: 1.2;
    }
    .user-role {
      font-size: 10px;
      color: #64748b;
    }
  </style>
</head>
<body>
  <header class="app-header">
    <div class="header-left">
      <div class="app-badge">
        <span>⚡</span>
        <span>Dashboard</span>
      </div>
      <div class="breadcrumb">
        <span>Workspace</span>
        <span>/</span>
        <b>Panoramica</b>
      </div>
    </div>
    <div class="header-search">
      <span class="search-icon">🔍</span>
      <input type="text" class="search-input" placeholder="Cerca risorse o comandi..." />
      <span class="kbd-shortcut">⌘K</span>
    </div>
    <div class="header-right">
      <button class="icon-btn" title="Notifiche" onclick="alert('Hai 3 notifiche da leggere')">
        <span>🔔</span>
        <span class="badge-dot"></span>
      </button>
      <div class="user-pill" onclick="alert('Profilo Utente: Marco Rossi')">
        <div class="avatar">MR</div>
        <div class="user-info">
          <div class="user-name">Marco Rossi</div>
          <div class="user-role">Team Lead</div>
        </div>
      </div>
    </div>
  </header>
</body>
</html>`},{id:"hero-landing-moderna",title:"Hero Section Landing Page con Metric Ribbon",category:"hero",filePath:"public/snippets/hero/hero-landing-moderna.html",description:"Sezione Hero ad alto impatto per landing page con chip novità, titolo con testo sfumato, doppi pulsanti CTA e metriche chiave.",tags:["hero","banner","landing-page","cta","metrics"],createdAt:17100009e5,code:`<!DOCTYPE html>
<html lang="it">
<head>
  <meta charset="UTF-8">
  <style>
    * { box-sizing: border-box; margin: 0; padding: 0; }
    body {
      font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
      padding: 30px 16px;
      display: flex;
      justify-content: center;
      align-items: center;
      min-height: 100vh;
    }
    .hero-container {
      width: 100%;
      max-width: 900px;
      background: #ffffff;
      border: 1px solid #e2e8f0;
      border-radius: 24px;
      padding: 44px 30px;
      text-align: center;
      box-shadow: 0 10px 30px rgba(0, 0, 0, 0.05);
      position: relative;
      overflow: hidden;
    }
    .hero-container::before {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      height: 4px;
      background: linear-gradient(90deg, #7c3aed, #06b6d4, #10b981);
    }
    .chip {
      display: inline-flex;
      align-items: center;
      gap: 8px;
      padding: 6px 14px;
      background: #f5f3ff;
      border: 1px solid #ddd6fe;
      color: #6d28d9;
      border-radius: 20px;
      font-size: 13px;
      font-weight: 600;
      margin-bottom: 20px;
    }
    .chip-badge {
      background: #7c3aed;
      color: #ffffff;
      font-size: 10px;
      font-weight: 800;
      padding: 2px 7px;
      border-radius: 10px;
      text-transform: uppercase;
    }
    .hero-title {
      font-size: 32px;
      font-weight: 800;
      color: #0f172a;
      letter-spacing: -0.02em;
      line-height: 1.25;
      margin-bottom: 14px;
    }
    .hero-title span {
      color: #7c3aed;
      background: linear-gradient(135deg, #7c3aed, #2563eb);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
    }
    .hero-desc {
      font-size: 15px;
      color: #64748b;
      max-width: 580px;
      margin: 0 auto 28px;
      line-height: 1.6;
    }
    .hero-actions {
      display: flex;
      justify-content: center;
      align-items: center;
      gap: 14px;
      margin-bottom: 36px;
      flex-wrap: wrap;
    }
    .btn-primary {
      background: #7c3aed;
      color: #ffffff;
      font-size: 14px;
      font-weight: 600;
      padding: 12px 26px;
      border-radius: 10px;
      border: none;
      cursor: pointer;
      transition: all 0.2s;
      box-shadow: 0 4px 14px rgba(124, 58, 237, 0.3);
    }
    .btn-primary:hover {
      background: #6d28d9;
      transform: translateY(-1px);
    }
    .btn-outline {
      background: #ffffff;
      color: #334155;
      font-size: 14px;
      font-weight: 600;
      padding: 12px 24px;
      border-radius: 10px;
      border: 1px solid #cbd5e1;
      cursor: pointer;
      display: inline-flex;
      align-items: center;
      gap: 8px;
      transition: all 0.2s;
    }
    .btn-outline:hover {
      background: #f8fafc;
      border-color: #94a3b8;
    }
    .metrics-ribbon {
      display: flex;
      justify-content: center;
      gap: 36px;
      padding-top: 24px;
      border-top: 1px solid #f1f5f9;
      flex-wrap: wrap;
    }
    .metric-item {
      text-align: center;
    }
    .metric-num {
      font-size: 20px;
      font-weight: 800;
      color: #0f172a;
    }
    .metric-label {
      font-size: 12px;
      color: #64748b;
      font-weight: 500;
      margin-top: 2px;
    }
  </style>
</head>
<body>
  <div class="hero-container">
    <div class="chip">
      <span class="chip-badge">Novità v2.4</span>
      <span>Esportazione frammenti istantanea</span>
    </div>
    <h1 class="hero-title">
      Costruisci interfacce moderne con <span>frammenti HTML pronti</span>
    </h1>
    <p class="hero-desc">
      Una raccolta di componenti rifiniti, responsive e pronti all'uso con anteprima dal vivo, codifica a colori e gestione locale dei tuoi snippet.
    </p>
    <div class="hero-actions">
      <button class="btn-primary" onclick="alert('Inizializzazione del nuovo progetto in corso!')">Esplora la Collezione</button>
      <button class="btn-outline" onclick="alert('Riproduzione tour guidato 1 min')">▶ Guarda la Demo</button>
    </div>
    <div class="metrics-ribbon">
      <div class="metric-item">
        <div class="metric-num">99.9%</div>
        <div class="metric-label">Compatibilità Browser</div>
      </div>
      <div class="metric-item">
        <div class="metric-num">50K+</div>
        <div class="metric-label">Snippet Organizzati</div>
      </div>
      <div class="metric-item">
        <div class="metric-num">4.9 / 5</div>
        <div class="metric-label">Valutazione Sviluppatori</div>
      </div>
    </div>
  </div>
</body>
</html>`}],wm=[{filePath:"public/snippets/schede/accordion-faq.html",category:"schede",title:"Accordion FAQ"},{filePath:"public/snippets/schede/accordion.html",category:"schede",title:"Accordion Schede"},{filePath:"public/snippets/schede/profilo-minimale.html",category:"schede",title:"Profilo Minimale"},{filePath:"public/snippets/schede/scheda-prodotto.html",category:"schede",title:"Scheda Prodotto"},{filePath:"public/snippets/bottoni/pulsante-moderno.html",category:"bottoni",title:"Pulsante Moderno"},{filePath:"public/snippets/bottoni/bottone-ardesia-minimale.html",category:"bottoni",title:"Bottone Ardesia"},{filePath:"public/snippets/layout/griglia-moderna.html",category:"layout",title:"Griglia Moderna"},{filePath:"public/snippets/layout/barra-navigazione.html",category:"layout",title:"Barra Navigazione"},{filePath:"public/snippets/animazioni/caricamento-pulsante.html",category:"animazioni",title:"Caricamento Pulsante"},{filePath:"public/snippets/animazioni/effetto-testo-fluido.html",category:"animazioni",title:"Effetto Testo Fluido"},{filePath:"public/snippets/form/campo-ricerca-animato.html",category:"form",title:"Campo Ricerca Animato"},{filePath:"public/snippets/modali/dialog-conferma.html",category:"modali",title:"Dialog Conferma"},{filePath:"public/snippets/menu/menu-dropdown-responsive.html",category:"menu",title:"Menu Dropdown Responsive"},{filePath:"public/snippets/header/header-app-moderno.html",category:"header",title:"Header App Moderno"},{filePath:"public/snippets/hero/hero-landing-moderna.html",category:"hero",title:"Hero Landing Moderna"}];async function Am(){try{const T=await fetch("/api/scan-public-snippets",{headers:{Accept:"application/json"}});if(T.ok&&(T.headers.get("content-type")||"").includes("application/json")){const d=await T.json();if(d&&Array.isArray(d.files)&&d.files.length>0)return{success:!0,files:d.files,source:"api",message:`${d.files.length} file trovati tramite server API`}}}catch{}const v=["/snippets/snippets-manifest.json","/snippets-manifest.json"];for(const T of v)try{const D=await fetch(`${T}?_t=${Date.now()}`);if(D.ok&&((D.headers.get("content-type")||"").includes("application/json")||T.endsWith(".json"))){const _=await D.json();if(_&&Array.isArray(_.files)&&_.files.length>0)return{success:!0,files:_.files,source:"manifest",message:`${_.files.length} file rilevati dal catalogo statico`}}}catch{}try{const T=[];if(await Promise.all(wm.map(async D=>{try{const d=D.filePath.replace(/^public\//,"/"),_=await fetch(`${d}?_t=${Date.now()}`);if(_.ok){const O=await _.text();(O.includes("<html")||O.includes("<style")||O.includes("<div"))&&T.push({filePath:D.filePath,category:D.category,title:D.title,code:O})}}catch{}})),T.length>0)return{success:!0,files:T,source:"fallback",message:`${T.length} file HTML sincronizzati con successo via percorso diretto`}}catch(T){return{success:!1,files:[],source:"fallback",error:(T==null?void 0:T.message)||"Errore durante la scansione dei file"}}return{success:!1,files:[],source:"fallback",error:"Nessun file HTML trovato nella cartella public/snippets"}}const Dg=({categories:v,selectedCategory:T,onSelectCategory:D,searchQuery:d,onSearchChange:_,theme:O,onToggleTheme:Y,layoutMode:k,onChangeLayoutMode:V,onOpenNewSnippetModal:at,onOpenImportModal:w,onSyncFolder:y,isSyncing:H,snippetCount:dt,totalSnippetCount:I})=>{const st=O==="light";return o.jsxs("header",{id:"app-header",className:"bg-white border-b border-slate-200 shrink-0 transition-colors shadow-xs",children:[o.jsxs("div",{className:"max-w-[1700px] mx-auto px-4 sm:px-6 py-3 flex flex-col md:flex-row items-stretch md:items-center justify-between gap-3",children:[o.jsxs("div",{className:"flex items-center gap-3 shrink-0",children:[o.jsx("div",{className:"w-10 h-10 rounded-xl bg-teal-50 border border-teal-200 flex items-center justify-center font-bold text-base shadow-xs text-teal-700",children:o.jsx(zm,{size:22,className:"stroke-[2.2]"})}),o.jsxs("div",{children:[o.jsxs("div",{className:"flex items-center gap-2",children:[o.jsx("h1",{id:"app-title",className:"text-base sm:text-lg font-bold tracking-tight text-slate-900",children:"Snippet HTML Studio"}),o.jsxs("span",{className:"text-xs px-2.5 py-0.5 rounded-full font-mono font-bold bg-slate-100 text-slate-700 border border-slate-200",children:[dt," ",dt===1?"elemento":"elementi"]})]}),o.jsx("p",{className:"text-xs text-slate-500 leading-none mt-0.5",children:"Contenitore e anteprima diretta per frammenti HTML"})]})]}),o.jsx("div",{className:"flex-1 max-w-xl mx-0 md:mx-4",children:o.jsxs("div",{className:"relative",children:[o.jsx(vg,{size:16,className:"absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none"}),o.jsx("input",{id:"search-input",type:"text",value:d,onChange:K=>_(K.target.value),placeholder:"Cerca per titolo, categoria, tag o codice HTML... (Ctrl+K)",className:"w-full pl-10 pr-9 py-2 rounded-xl text-xs md:text-sm bg-slate-50 border border-slate-200 text-slate-900 placeholder:text-slate-400 focus:bg-white focus:border-teal-600 focus:ring-2 focus:ring-teal-600/15 transition-all outline-none"}),d&&o.jsx("button",{onClick:()=>_(""),className:"absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-700 p-0.5 rounded",title:"Cancella ricerca",children:o.jsx(Gu,{size:14})})]})}),o.jsxs("div",{className:"flex items-center gap-2 shrink-0 justify-end",children:[o.jsxs("div",{className:"flex items-center rounded-xl p-1 bg-slate-100 border border-slate-200 text-xs",title:"Cambia disposizione schede",children:[o.jsxs("button",{onClick:()=>V("grid"),className:`p-1.5 rounded-lg flex items-center gap-1.5 transition-all ${k==="grid"?"bg-white font-bold text-slate-900 shadow-xs":"text-slate-500 hover:text-slate-900"}`,title:"Vista Griglia (2 colonne)",children:[o.jsx(ig,{size:15}),o.jsx("span",{className:"hidden xl:inline text-xs",children:"Griglia"})]}),o.jsxs("button",{onClick:()=>V("stack"),className:`p-1.5 rounded-lg flex items-center gap-1.5 transition-all ${k==="stack"?"bg-white font-bold text-slate-900 shadow-xs":"text-slate-500 hover:text-slate-900"}`,title:"Vista Lista estesa (1 colonna)",children:[o.jsx(xg,{size:15}),o.jsx("span",{className:"hidden xl:inline text-xs",children:"Lista"})]})]}),o.jsxs("button",{onClick:Y,className:"flex items-center gap-1.5 px-3 py-1.5 rounded-xl border border-slate-200 bg-slate-50 hover:bg-white text-slate-800 hover:border-slate-300 text-xs font-semibold transition-all shadow-xs",title:`Tonalità sfondo: ${st?"Azzurro Mediterraneo":"Azzurro Oceano"}. Clicca per alternare`,children:[o.jsx(_m,{size:14,className:"text-teal-600"}),o.jsx("span",{className:"hidden lg:inline",children:st?"Azzurro Medio":"Azzurro Profondo"})]}),y&&o.jsxs("button",{onClick:y,disabled:H,className:"flex items-center gap-1.5 px-3 py-1.5 rounded-xl border border-slate-200 bg-white hover:bg-slate-50 hover:border-slate-300 text-slate-700 text-xs font-semibold transition-all shadow-xs disabled:opacity-60",title:"Scansiona e sincronizza automaticamente i file HTML presenti nella cartella public/snippets",children:[o.jsx(Cs,{size:14,className:`text-teal-600 ${H?"animate-spin":""}`}),o.jsx("span",{className:"hidden md:inline",children:H?"Scansione...":"Sincronizza"})]}),o.jsxs("button",{onClick:w,className:"flex items-center gap-1.5 px-3 py-1.5 rounded-xl border border-slate-200 bg-white hover:bg-slate-50 hover:border-slate-300 text-slate-700 text-xs font-semibold transition-all shadow-xs",title:"Importa file HTML da cartella locale o server",children:[o.jsx(Cs,{size:14,className:"text-teal-600"}),o.jsx("span",{className:"hidden sm:inline",children:"Importa HTML"})]}),o.jsxs("button",{onClick:at,className:"flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl text-xs font-bold text-white bg-teal-600 hover:bg-teal-700 shadow-xs transition-colors",title:"Aggiungi un nuovo snippet al contenitore",children:[o.jsx(Us,{size:15,className:"stroke-[2.5]"}),o.jsx("span",{children:"Nuovo Snippet"})]})]})]}),o.jsxs("div",{className:"px-4 sm:px-6 py-2 bg-slate-50/80 border-t border-slate-200 flex items-center gap-2 overflow-x-auto no-scrollbar",children:[o.jsxs("span",{className:"text-[11px] font-bold tracking-wide uppercase text-slate-500 shrink-0 mr-1 flex items-center gap-1",children:[o.jsx(Kp,{size:12}),"Filtra:"]}),o.jsxs("button",{onClick:()=>D(null),className:`px-3 py-1 rounded-full text-xs font-bold whitespace-nowrap transition-all border ${T===null?"bg-slate-900 text-white border-slate-900 shadow-xs":"bg-white text-slate-600 border-slate-200 hover:bg-slate-100 hover:text-slate-900"}`,children:["Tutti (",I,")"]}),v.map(K=>{const G=T===K.id;return o.jsxs("button",{onClick:()=>D(G?null:K.id),className:`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold whitespace-nowrap transition-all border shadow-xs ${G?"text-white border-transparent":"bg-white hover:bg-slate-50 text-slate-700 border-slate-200"}`,style:{backgroundColor:G?K.headerHex:void 0,borderColor:G?K.headerHex:void 0},children:[o.jsx("span",{className:"w-2 h-2 rounded-full",style:{backgroundColor:G?"#ffffff":K.headerHex}}),o.jsx("span",{children:K.name})]},K.id)})]})]})},Ug=({code:v})=>{const T=v.split(`
`),D=d=>{if(!d)return o.jsx("span",{children:" "});if(d.trim().startsWith("<!--"))return o.jsx("span",{className:"text-slate-500 italic",children:d});const _=[];let O=0;const Y=/(<\/?[a-zA-Z0-9\-]+)|(\s+[a-zA-Z0-9\-]+(?==))|(=["'][^"']*["'])|(>|\/>)/g;let k,V=0;for(;(k=Y.exec(d))!==null;)k.index>V&&_.push(o.jsx("span",{className:"text-slate-700",children:d.substring(V,k.index)},`txt-${O++}`)),k[1]?_.push(o.jsx("span",{className:"text-blue-700 font-semibold",children:k[1]},`tag-${O++}`)):k[2]?_.push(o.jsx("span",{className:"text-amber-800 font-medium",children:k[2]},`attr-${O++}`)):k[3]?_.push(o.jsx("span",{className:"text-emerald-700",children:k[3]},`val-${O++}`)):k[4]&&_.push(o.jsx("span",{className:"text-blue-700",children:k[4]},`close-${O++}`)),V=Y.lastIndex;return V<d.length&&_.push(o.jsx("span",{className:"text-slate-700",children:d.substring(V)},`end-${O++}`)),o.jsx(o.Fragment,{children:_})};return o.jsx("div",{className:"relative w-full max-h-96 overflow-auto font-mono text-xs select-text rounded-xl border border-slate-200 bg-white shadow-xs",children:o.jsx("div",{className:"min-w-full inline-block py-3",children:T.map((d,_)=>o.jsxs("div",{className:"flex items-start hover:bg-slate-50 px-3 transition-colors",children:[o.jsx("span",{className:"w-8 select-none text-right pr-3 text-[11px] font-mono shrink-0 text-slate-400",children:_+1}),o.jsx("pre",{className:"m-0 font-mono whitespace-pre text-left leading-relaxed flex-1",children:D(d)})]},_))})})},Hg=({snippet:v,category:T,theme:D,layoutMode:d,onDelete:_,onExpandPreview:O})=>{const[Y,k]=J.useState(!1),[V,at]=J.useState(!1),[w,y]=J.useState("white"),[H,dt]=J.useState(0),[I,st]=J.useState(!1),K=async()=>{try{if(navigator.clipboard&&navigator.clipboard.writeText){await navigator.clipboard.writeText(v.code),k(!0),setTimeout(()=>k(!1),2e3);return}}catch(nt){console.warn("Clipboard API non disponibile, uso fallback textarea:",nt)}try{const nt=document.createElement("textarea");nt.value=v.code,nt.style.position="fixed",nt.style.left="-9999px",nt.style.top="0",document.body.appendChild(nt),nt.focus(),nt.select(),document.execCommand("copy"),document.body.removeChild(nt),k(!0),setTimeout(()=>k(!1),2e3)}catch(nt){console.error("Copia non riuscita:",nt)}},G=()=>{dt(nt=>nt+1)},Mt=J.useMemo(()=>{let nt="";w==="dark"?nt="body { background-color: #0f172a !important; background-image: none !important; color: #f8fafc; }":w==="grid"?nt="body { background-color: #f8fafc !important; background-image: radial-gradient(#cbd5e1 1.5px, transparent 1.5px) !important; background-size: 16px 16px !important; color: #0f172a; }":nt="body { background-color: #ffffff !important; background-image: none !important; color: #0f172a; }";const Ot=`<style id="snippet-bg-override">${nt}</style>`;return v.code.includes("</head>")?v.code.replace("</head>",`${Ot}</head>`):`${Ot}${v.code}`},[v.code,w]),Ft=()=>{switch(w){case"dark":return"bg-[#0f172a]";case"grid":return"bg-[#f8fafc] bg-[radial-gradient(#cbd5e1_1.5px,transparent_1.5px)] [background-size:16px_16px]";case"white":default:return"bg-white"}};return o.jsxs("div",{id:`snippet-container-${v.id}`,className:"bg-white rounded-2xl border border-slate-200/80 hover:border-slate-300 transition-all duration-200 overflow-hidden shadow-md hover:shadow-lg flex flex-col",children:[o.jsxs("div",{className:"px-4 py-3 border-b flex flex-wrap items-center justify-between gap-2.5 shrink-0 transition-colors",style:{backgroundColor:(T==null?void 0:T.headerHex)||"#0f766e",borderColor:(T==null?void 0:T.headerHex)||"#0f766e"},children:[o.jsxs("div",{className:"flex items-center gap-2.5 min-w-0",children:[T&&o.jsxs("span",{className:"inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-bold shrink-0 bg-white text-slate-900 shadow-xs border border-white/40",title:`Categoria: ${T.name}`,children:[o.jsx("span",{className:"w-2 h-2 rounded-full",style:{backgroundColor:T.headerHex||T.color}}),T.name.split("&")[0].trim()]}),o.jsxs("div",{className:"min-w-0",children:[o.jsx("h3",{className:"text-sm sm:text-base font-bold text-white tracking-tight truncate drop-shadow-xs",children:v.title}),o.jsxs("div",{className:"flex items-center gap-1.5 text-[11px] font-mono text-white/80 truncate mt-0.5",children:[o.jsx(Ds,{size:12,className:"shrink-0 opacity-80 text-white"}),o.jsx("span",{className:"truncate",children:v.filePath||`public/snippets/${v.category}/${v.id}.html`})]})]})]}),o.jsxs("div",{className:"flex items-center gap-1.5 shrink-0",children:[o.jsxs("div",{className:"flex items-center rounded-lg p-0.5 bg-black/25 backdrop-blur-xs border border-white/20 text-xs shadow-inner",title:"Cambia sfondo anteprima",children:[o.jsxs("button",{onClick:()=>y("white"),className:`flex items-center gap-1 px-2 py-1 rounded text-[11px] transition-all ${w==="white"?"bg-white font-bold text-slate-950 shadow-xs":"text-white/85 hover:text-white hover:bg-white/10"}`,title:"Sfondo Bianco Pulito",children:[o.jsx(jm,{size:12,className:w==="white"?"text-amber-500":"text-white"}),o.jsx("span",{className:"hidden sm:inline",children:"Bianco"})]}),o.jsxs("button",{onClick:()=>y("dark"),className:`flex items-center gap-1 px-2 py-1 rounded text-[11px] transition-all ${w==="dark"?"bg-slate-950 font-bold text-white shadow-xs border border-white/20":"text-white/85 hover:text-white hover:bg-white/10"}`,title:"Sfondo Scuro Ardesia",children:[o.jsx(Tm,{size:12,className:w==="dark"?"text-cyan-400":"text-white"}),o.jsx("span",{className:"hidden sm:inline",children:"Scuro"})]}),o.jsxs("button",{onClick:()=>y("grid"),className:`flex items-center gap-1 px-2 py-1 rounded text-[11px] transition-all ${w==="grid"?"bg-white font-bold text-slate-950 shadow-xs":"text-white/85 hover:text-white hover:bg-white/10"}`,title:"Sfondo a Griglia Puntinata",children:[o.jsx(Nm,{size:12,className:w==="grid"?"text-indigo-600":"text-white"}),o.jsx("span",{className:"hidden sm:inline",children:"Griglia"})]})]}),o.jsx("button",{onClick:G,className:"p-1.5 rounded-lg border border-white/25 bg-white/15 hover:bg-white/30 text-white transition-colors backdrop-blur-xs shadow-xs",title:"Ricarica anteprima interattiva",children:o.jsx(Os,{size:14})}),o.jsx("button",{onClick:K,className:`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-bold border transition-all ${Y?"bg-white text-emerald-700 border-white shadow-md":"bg-white text-slate-900 border-white hover:bg-slate-100 shadow-xs"}`,title:"Copia codice HTML",children:Y?o.jsxs(o.Fragment,{children:[o.jsx(oi,{size:13,className:"stroke-[2.5]"}),o.jsx("span",{children:"Copiato!"})]}):o.jsxs(o.Fragment,{children:[o.jsx(As,{size:13}),o.jsx("span",{children:"Copia HTML"})]})}),o.jsxs("button",{onClick:()=>at(!V),className:`flex items-center gap-1 px-2.5 py-1.5 rounded-lg text-xs font-semibold border transition-colors ${V?"bg-slate-950 text-white border-slate-950 shadow-xs":"bg-white/15 hover:bg-white/30 text-white border-white/25 backdrop-blur-xs"}`,title:V?"Nascondi codice sorgente":"Mostra codice HTML",children:[o.jsx(xm,{size:13}),o.jsx("span",{className:"hidden xs:inline",children:V?"Chiudi":"Codice"})]}),O&&o.jsx("button",{onClick:()=>O(v),className:"p-1.5 rounded-lg border border-white/25 bg-white/15 hover:bg-white/30 text-white transition-colors backdrop-blur-xs shadow-xs",title:"Espandi anteprima a tutto schermo",children:o.jsx(sg,{size:14})}),_&&(I?o.jsxs("div",{className:"flex items-center gap-1.5 bg-white border border-white px-2.5 py-1 rounded-lg text-xs shadow-md animate-in fade-in",children:[o.jsx("span",{className:"font-bold text-rose-700 text-[11px]",children:"Eliminare?"}),o.jsx("button",{onClick:()=>{_(v.id),st(!1)},className:"px-2 py-0.5 font-bold text-white bg-rose-600 hover:bg-rose-700 rounded transition-colors text-[11px]",children:"Sì"}),o.jsx("button",{onClick:()=>st(!1),className:"px-1.5 py-0.5 font-medium text-slate-700 hover:bg-slate-100 rounded transition-colors text-[11px]",children:"No"})]}):o.jsx("button",{onClick:()=>st(!0),className:"p-1.5 rounded-lg border border-white/25 bg-white/15 hover:bg-rose-600 hover:border-rose-500 text-white transition-colors backdrop-blur-xs shadow-xs",title:"Elimina dal contenitore",children:o.jsx(Ag,{size:14})}))]})]}),o.jsx("div",{className:"relative flex-1 flex flex-col",children:o.jsx("div",{className:`relative w-full overflow-hidden transition-colors border-b border-slate-200 ${Ft()}`,style:{minHeight:d==="stack"?"320px":"260px",height:d==="stack"?"380px":"280px"},children:o.jsx("iframe",{id:`iframe-preview-${v.id}`,title:`Anteprima ${v.title}`,srcDoc:Mt,sandbox:"allow-scripts allow-modals allow-same-origin allow-forms",className:"w-full h-full border-0 block pointer-events-auto",loading:"lazy"},`${v.id}-${H}-${w}`)})}),V&&o.jsxs("div",{className:"p-4 border-b border-slate-200 bg-slate-50 transition-all",children:[o.jsxs("div",{className:"flex items-center justify-between mb-2 text-xs font-semibold text-slate-600",children:[o.jsxs("span",{className:"flex items-center gap-1.5 font-mono",children:[o.jsx(xm,{size:13,className:"text-teal-600"}),"SORGENTE HTML (",v.code.split(`
`).length," righe)"]}),o.jsxs("button",{onClick:K,className:"text-xs text-teal-700 hover:text-teal-800 flex items-center gap-1 font-mono font-bold",children:[o.jsx(As,{size:11}),Y?"Copiato!":"Copia"]})]}),o.jsx(Ug,{code:v.code,theme:D})]}),o.jsxs("div",{className:"px-4 py-2.5 bg-slate-50/70 flex flex-wrap items-center justify-between gap-2 text-xs text-slate-500",children:[o.jsxs("div",{className:"flex flex-wrap items-center gap-1.5",children:[v.description&&o.jsx("span",{className:"text-xs text-slate-600 mr-1 hidden sm:inline",children:v.description}),v.tags&&v.tags.length>0?v.tags.map((nt,Ot)=>o.jsxs("span",{className:"inline-flex items-center gap-1 px-2 py-0.5 rounded-md text-[11px] font-mono bg-white border border-slate-200 text-slate-600",children:[o.jsx(jg,{size:10,className:"opacity-50"}),nt]},Ot)):o.jsx("span",{className:"text-[11px] font-mono opacity-60",children:"Nessun tag"})]}),o.jsxs("span",{className:"font-mono text-[11px] text-slate-400 shrink-0",children:[(new Blob([v.code]).size/1024).toFixed(1)," KB"]})]})]})},Rg=({snippet:v,category:T,theme:D,onClose:d})=>{var K;const[_,O]=J.useState("desktop"),[Y,k]=J.useState("white"),[V,at]=J.useState(!1),[w,y]=J.useState(0);J.useEffect(()=>{const G=Mt=>{Mt.key==="Escape"&&d()};return window.addEventListener("keydown",G),()=>window.removeEventListener("keydown",G)},[d]);const H=J.useMemo(()=>{if(!v)return"";let G="";Y==="dark"?G="body { background-color: #0f172a !important; background-image: none !important; color: #f8fafc; }":Y==="grid"?G="body { background-color: #f8fafc !important; background-image: radial-gradient(#cbd5e1 1.5px, transparent 1.5px) !important; background-size: 16px 16px !important; color: #0f172a; }":G="body { background-color: #ffffff !important; background-image: none !important; color: #0f172a; }";const Mt=`<style id="modal-bg-override">${G}</style>`;return v.code.includes("</head>")?v.code.replace("</head>",`${Mt}</head>`):`${Mt}${v.code}`},[v,Y]);if(!v)return null;const dt=async()=>{try{if(navigator.clipboard&&navigator.clipboard.writeText){await navigator.clipboard.writeText(v.code),at(!0),setTimeout(()=>at(!1),2e3);return}}catch(G){console.warn("Fallback clipboard:",G)}try{const G=document.createElement("textarea");G.value=v.code,G.style.position="fixed",G.style.left="-9999px",document.body.appendChild(G),G.focus(),G.select(),document.execCommand("copy"),document.body.removeChild(G),at(!0),setTimeout(()=>at(!1),2e3)}catch(G){console.error("Copia fallita:",G)}},I=()=>{switch(_){case"mobile":return"max-w-[390px]";case"tablet":return"max-w-[768px]";case"desktop":default:return"w-full"}},st=()=>{switch(Y){case"dark":return"bg-[#0f172a]";case"grid":return"bg-[#f8fafc] bg-[radial-gradient(#cbd5e1_1.5px,transparent_1.5px)] [background-size:16px_16px]";case"white":default:return"bg-white"}};return o.jsx("div",{id:"snippet-preview-modal-backdrop",onClick:G=>{G.target===G.currentTarget&&d()},className:"fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-4 md:p-6 bg-slate-900/60 backdrop-blur-xs animate-in fade-in duration-150",children:o.jsxs("div",{id:"snippet-preview-modal-card",className:"w-full max-w-5xl h-[95dvh] sm:h-[90vh] rounded-2xl border border-slate-200 bg-white shadow-2xl flex flex-col overflow-hidden text-slate-900",children:[o.jsxs("div",{className:"border-b shrink-0 transition-colors shadow-xs",style:{backgroundColor:(T==null?void 0:T.headerHex)||"#0f766e",borderColor:(T==null?void 0:T.headerHex)||"#0f766e"},children:[o.jsxs("div",{className:"px-3 sm:px-5 py-2.5 sm:py-3 flex items-center justify-between gap-2 border-b border-white/15",children:[o.jsxs("div",{className:"flex items-center gap-2 sm:gap-3 min-w-0 pr-1",children:[T&&o.jsxs("span",{className:"inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-bold bg-white text-slate-900 shadow-xs border border-white/40 shrink-0",children:[o.jsx("span",{className:"w-2 h-2 rounded-full shrink-0",style:{backgroundColor:T.headerHex||T.color}}),o.jsx("span",{className:"max-w-[90px] sm:max-w-none truncate",children:T.name})]}),o.jsxs("div",{className:"min-w-0",children:[o.jsx("h3",{className:"text-sm sm:text-base font-bold text-white tracking-tight truncate",title:v.title,children:v.title}),o.jsxs("p",{className:"text-[11px] font-mono text-white/80 hidden sm:flex items-center gap-1 truncate",title:v.filePath,children:[o.jsx(Ds,{size:11,className:"opacity-80 text-white shrink-0"}),o.jsx("span",{className:"truncate",children:v.filePath||`public/snippets/${v.category}/${v.id}.html`})]})]})]}),o.jsxs("div",{className:"flex items-center gap-1.5 shrink-0",children:[o.jsxs("button",{onClick:dt,className:`flex items-center gap-1 sm:gap-1.5 px-2.5 sm:px-3 py-1.5 rounded-lg text-xs font-bold border transition-all ${V?"bg-white text-emerald-700 border-white shadow-md":"bg-white text-slate-900 border-white hover:bg-slate-100 shadow-xs"}`,title:"Copia codice HTML",children:[V?o.jsx(oi,{size:14,className:"stroke-[2.5]"}):o.jsx(As,{size:13}),o.jsx("span",{className:"hidden xs:inline sm:inline",children:V?"Copiato!":"Copia HTML"})]}),o.jsx("button",{onClick:d,className:"p-1.5 sm:p-2 rounded-lg border border-white/30 bg-white/20 hover:bg-rose-600 hover:border-rose-500 text-white transition-colors shadow-xs active:scale-95 flex items-center justify-center min-w-[34px] min-h-[34px]",title:"Chiudi anteprima (Esc)","aria-label":"Chiudi finestra modale",children:o.jsx(Gu,{size:18,className:"stroke-[2.5]"})})]})]}),o.jsxs("div",{className:"px-3 sm:px-5 py-2 bg-black/15 flex items-center justify-between gap-2 overflow-x-auto scrollbar-none text-xs",children:[o.jsxs("div",{className:"flex items-center gap-2 flex-nowrap shrink-0",children:[o.jsxs("div",{className:"flex items-center rounded-lg p-0.5 bg-black/25 backdrop-blur-xs border border-white/20 text-xs shadow-inner shrink-0",title:"Cambia sfondo anteprima",children:[o.jsxs("button",{onClick:()=>k("white"),className:`flex items-center gap-1 px-2 py-1 rounded text-[11px] transition-all ${Y==="white"?"bg-white font-bold text-slate-950 shadow-xs":"text-white/85 hover:text-white hover:bg-white/10"}`,title:"Sfondo Bianco",children:[o.jsx(jm,{size:12,className:Y==="white"?"text-amber-500":"text-white"}),o.jsx("span",{className:"hidden sm:inline",children:"Bianco"})]}),o.jsxs("button",{onClick:()=>k("dark"),className:`flex items-center gap-1 px-2 py-1 rounded text-[11px] transition-all ${Y==="dark"?"bg-slate-950 font-bold text-white shadow-xs border border-white/20":"text-white/85 hover:text-white hover:bg-white/10"}`,title:"Sfondo Scuro",children:[o.jsx(Tm,{size:12,className:Y==="dark"?"text-cyan-400":"text-white"}),o.jsx("span",{className:"hidden sm:inline",children:"Scuro"})]}),o.jsxs("button",{onClick:()=>k("grid"),className:`flex items-center gap-1 px-2 py-1 rounded text-[11px] transition-all ${Y==="grid"?"bg-white font-bold text-slate-950 shadow-xs":"text-white/85 hover:text-white hover:bg-white/10"}`,title:"Sfondo Griglia",children:[o.jsx(Nm,{size:12,className:Y==="grid"?"text-indigo-600":"text-white"}),o.jsx("span",{className:"hidden sm:inline",children:"Griglia"})]})]}),o.jsxs("div",{className:"flex items-center rounded-lg p-0.5 bg-black/25 backdrop-blur-xs border border-white/20 text-xs shadow-inner shrink-0",children:[o.jsxs("button",{onClick:()=>O("desktop"),className:`px-2 py-1 rounded flex items-center gap-1 text-[11px] transition-all ${_==="desktop"?"bg-white font-bold text-slate-950 shadow-xs":"text-white/85 hover:text-white hover:bg-white/10"}`,title:"Vista Desktop (100%)",children:[o.jsx(rg,{size:12}),o.jsx("span",{className:"hidden md:inline",children:"Desktop"})]}),o.jsxs("button",{onClick:()=>O("tablet"),className:`px-2 py-1 rounded flex items-center gap-1 text-[11px] transition-all ${_==="tablet"?"bg-white font-bold text-slate-950 shadow-xs":"text-white/85 hover:text-white hover:bg-white/10"}`,title:"Vista Tablet (768px)",children:[o.jsx(Eg,{size:12}),o.jsx("span",{className:"hidden md:inline",children:"Tablet"})]}),o.jsxs("button",{onClick:()=>O("mobile"),className:`px-2 py-1 rounded flex items-center gap-1 text-[11px] transition-all ${_==="mobile"?"bg-white font-bold text-slate-950 shadow-xs":"text-white/85 hover:text-white hover:bg-white/10"}`,title:"Vista Mobile (390px)",children:[o.jsx(Sg,{size:12}),o.jsx("span",{className:"hidden md:inline",children:"Mobile"})]})]}),o.jsxs("button",{onClick:()=>y(G=>G+1),className:"p-1.5 rounded-lg border border-white/25 bg-white/15 hover:bg-white/30 text-white transition-colors backdrop-blur-xs shadow-xs shrink-0 flex items-center gap-1 text-[11px]",title:"Ricarica anteprima",children:[o.jsx(Em,{size:13}),o.jsx("span",{className:"hidden lg:inline",children:"Ricarica"})]})]}),o.jsx("div",{className:"text-[10px] text-white/75 font-mono truncate max-w-[150px] shrink-0 sm:hidden",children:((K=v.filePath)==null?void 0:K.replace("public/snippets/",""))||`${v.category}.html`})]})]}),o.jsx("div",{className:"flex-1 p-2 sm:p-4 md:p-6 flex items-center justify-center overflow-auto bg-slate-100",children:o.jsx("div",{className:`h-full transition-all duration-300 rounded-xl overflow-hidden shadow-md border border-slate-200 ${st()} ${I()}`,children:o.jsx("iframe",{title:`Anteprima espansa ${v.title}`,srcDoc:H,sandbox:"allow-scripts allow-modals allow-same-origin allow-forms",className:"w-full h-full border-0 block pointer-events-auto"},`${v.id}-${w}-${Y}`)})})]})})},Bg=`<!DOCTYPE html>
<html lang="it">
<head>
  <meta charset="UTF-8">
  <style>
    * { box-sizing: border-box; }
    body {
      margin: 0;
      min-height: 100vh;
      display: flex;
      align-items: center;
      justify-content: center;
      font-family: system-ui, -apple-system, sans-serif;
      padding: 20px;
    }
    .badge {
      display: inline-flex;
      align-items: center;
      gap: 10px;
      padding: 14px 24px;
      background: #ffffff;
      border: 1px solid #e2e8f0;
      border-radius: 14px;
      box-shadow: 0 4px 15px rgba(0,0,0,0.06);
      font-size: 15px;
      font-weight: 600;
      color: #0f172a;
    }
  </style>
</head>
<body>
  <div class="badge">
    <span>✨ Nuovo Elemento HTML</span>
  </div>
</body>
</html>`,qg=({isOpen:v,onClose:T,onSave:D,categories:d})=>{var dt;const[_,O]=J.useState(""),[Y,k]=J.useState(((dt=d[0])==null?void 0:dt.id)||"bottoni"),[V,at]=J.useState(""),[w,y]=J.useState(Bg);if(J.useEffect(()=>{if(!v)return;const I=st=>{st.key==="Escape"&&T()};return window.addEventListener("keydown",I),()=>window.removeEventListener("keydown",I)},[v,T]),!v)return null;const H=I=>{if(I.preventDefault(),!_.trim()||!w.trim())return;const st={id:`custom-${Date.now()}`,title:_.trim(),category:Y,code:w,description:V.trim()||void 0,isCustom:!0,createdAt:Date.now(),filePath:`public/snippets/${Y}/${_.toLowerCase().replace(/[^a-z0-9]/g,"-")}.html`};D(st),T()};return o.jsx("div",{id:"new-snippet-modal",onClick:I=>{I.target===I.currentTarget&&T()},className:"fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-4 md:p-6 bg-slate-900/60 backdrop-blur-xs animate-in fade-in",children:o.jsxs("div",{className:"w-full max-w-4xl max-h-[90vh] flex flex-col rounded-2xl border border-slate-200 bg-white shadow-2xl overflow-hidden text-slate-900",children:[o.jsxs("div",{className:"px-5 py-3.5 bg-slate-50 border-b border-slate-200 flex items-center justify-between shrink-0",children:[o.jsxs("div",{className:"flex items-center gap-2",children:[o.jsx("span",{className:"p-1.5 rounded-lg bg-teal-600 text-white shadow-xs",children:o.jsx(Us,{size:16})}),o.jsx("h2",{className:"text-base font-bold text-slate-900",children:"Aggiungi Nuovo Snippet al Contenitore"})]}),o.jsx("button",{onClick:T,className:"p-1.5 rounded-lg border border-slate-200 bg-white hover:bg-slate-50 text-slate-500 hover:text-slate-800 transition-colors",children:o.jsx(Gu,{size:16})})]}),o.jsxs("form",{onSubmit:H,className:"flex-1 flex flex-col overflow-hidden",children:[o.jsxs("div",{className:"p-4 sm:p-5 space-y-3 shrink-0 border-b border-slate-200 bg-white",children:[o.jsxs("div",{className:"grid grid-cols-1 sm:grid-cols-2 gap-3",children:[o.jsxs("div",{children:[o.jsx("label",{className:"block text-xs font-semibold mb-1 text-slate-700",children:"Titolo Snippet *"}),o.jsx("input",{type:"text",required:!0,value:_,onChange:I=>O(I.target.value),placeholder:"Es. Pulsante Gradiente Moderno",className:"w-full px-3 py-2 text-xs md:text-sm rounded-xl border border-slate-200 bg-slate-50 text-slate-900 focus:bg-white focus:border-teal-600 focus:ring-2 focus:ring-teal-600/15 outline-none transition-all"})]}),o.jsxs("div",{children:[o.jsx("label",{className:"block text-xs font-semibold mb-1 text-slate-700",children:"Categoria (Sottocartella in public/snippets/) *"}),o.jsx("select",{value:Y,onChange:I=>k(I.target.value),className:"w-full px-3 py-2 text-xs md:text-sm rounded-xl border border-slate-200 bg-slate-50 text-slate-900 focus:bg-white focus:border-teal-600 focus:ring-2 focus:ring-teal-600/15 outline-none transition-all",children:d.map(I=>o.jsx("option",{value:I.id,children:I.name},I.id))})]})]}),o.jsxs("div",{children:[o.jsx("label",{className:"block text-xs font-semibold mb-1 text-slate-700",children:"Descrizione o note (opzionale)"}),o.jsx("input",{type:"text",value:V,onChange:I=>at(I.target.value),placeholder:"Breve nota sulle proprietà o uso dello snippet...",className:"w-full px-3 py-2 text-xs rounded-xl border border-slate-200 bg-slate-50 text-slate-900 focus:bg-white focus:border-teal-600 focus:ring-2 focus:ring-teal-600/15 outline-none transition-all"})]})]}),o.jsxs("div",{className:"flex-1 grid grid-cols-1 md:grid-cols-2 overflow-hidden bg-slate-100",children:[o.jsxs("div",{className:"h-full flex flex-col border-r border-slate-200 bg-white",children:[o.jsx("div",{className:"px-3 py-1.5 border-b border-slate-200 text-xs font-mono font-semibold text-slate-600 bg-slate-50",children:"Codice HTML"}),o.jsx("textarea",{value:w,onChange:I=>y(I.target.value),spellCheck:!1,className:"w-full flex-1 p-3 font-mono text-xs leading-relaxed outline-none resize-none border-0 bg-slate-50/50 text-slate-900",placeholder:"Incolla qui il codice HTML completo..."})]}),o.jsxs("div",{className:"h-full flex flex-col bg-white",children:[o.jsx("div",{className:"px-3 py-1.5 border-b border-slate-200 text-xs font-mono font-semibold text-slate-600 bg-slate-50",children:"Anteprima Immediata"}),o.jsx("div",{className:"flex-1 overflow-hidden bg-white",children:o.jsx("iframe",{title:"Nuovo Snippet Anteprima",srcDoc:w,sandbox:"allow-scripts",className:"w-full h-full border-0 block"})})]})]}),o.jsxs("div",{className:"px-5 py-3 border-t border-slate-200 bg-slate-50 flex items-center justify-between shrink-0",children:[o.jsxs("span",{className:"text-xs text-slate-500 flex items-center gap-1",children:[o.jsx(Ds,{size:13}),"Salvato in ",o.jsxs("code",{className:"font-mono font-semibold text-slate-700",children:["public/snippets/",Y,"/"]})]}),o.jsxs("div",{className:"flex items-center gap-2",children:[o.jsx("button",{type:"button",onClick:T,className:"px-3 py-1.5 rounded-xl text-xs font-medium border border-slate-200 bg-white text-slate-700 hover:bg-slate-100",children:"Annulla"}),o.jsx("button",{type:"submit",disabled:!_.trim()||!w.trim(),className:"px-4 py-1.5 rounded-xl text-xs font-bold bg-teal-600 hover:bg-teal-700 text-white transition-colors disabled:opacity-40 shadow-xs",children:"Aggiungi al Contenitore"})]})]})]})]})})},Yg=({isOpen:v,onClose:T,onImportSnippets:D,categories:d})=>{var Wt;const _=J.useRef(null),[O,Y]=J.useState("scan"),[k,V]=J.useState("public/snippets/schede/accordion-faq.html"),[at,w]=J.useState(((Wt=d[0])==null?void 0:Wt.id)||"schede"),[y,H]=J.useState("idle"),[dt,I]=J.useState(""),[st,K]=J.useState(null),[G,Mt]=J.useState([]),[Ft,nt]=J.useState(!1),[Ot,Ut]=J.useState("");if(J.useEffect(()=>{if(!v)return;const j=pt=>{pt.key==="Escape"&&T()};return window.addEventListener("keydown",j),()=>window.removeEventListener("keydown",j)},[v,T]),!v)return null;const P=async()=>{nt(!0),Ut("");try{const j=await Am();j.success&&j.files&&j.files.length>0?(Mt(j.files),j.message&&Ut(j.message)):Ut(j.error||"Nessun file HTML rilevato in public/snippets")}catch(j){Ut("Scansione non riuscita: "+((j==null?void 0:j.message)||"errore imprevisto"))}finally{nt(!1)}};J.useEffect(()=>{v&&O==="scan"&&P()},[v,O]);const it=()=>{if(G.length===0)return;const j=G.map((pt,Zt)=>({id:`scanned-${Date.now()}-${Zt}`,title:pt.title,category:pt.category||"schede",filePath:pt.filePath,description:`Componente caricato automaticamente da ${pt.filePath}`,tags:[pt.category,"file","sincronizzato"],code:pt.code,createdAt:Date.now()}));D(j),K(j.length),setTimeout(()=>{T(),K(null)},1200)},oe=async j=>{if(!j||j.length===0)return;const pt=[];for(let Zt=0;Zt<j.length;Zt++){const M=j[Zt];if(!(!M.name.endsWith(".html")&&!M.name.endsWith(".htm")))try{const N=await M.text();let C=at;if(M.webkitRelativePath){const Z=M.webkitRelativePath.split("/");if(Z.length>2){const ut=Z[Z.length-2].toLowerCase(),Xt=d.find(jt=>jt.id===ut);Xt&&(C=Xt.id)}}const B=M.name.replace(/\.(html|htm)$/i,"").replace(/[-_]/g," ").replace(/\b\w/g,Z=>Z.toUpperCase());pt.push({id:`file-${Date.now()}-${Zt}`,title:B,category:C,code:N,filePath:M.webkitRelativePath||`public/snippets/${C}/${M.name}`,isCustom:!0,createdAt:Date.now()})}catch(N){console.error("Errore lettura file:",M.name,N)}}pt.length>0&&(K(pt.length),D(pt),setTimeout(()=>{T(),K(null)},1500))},ue=async()=>{if(k.trim()){H("loading"),I("");try{let j=k.trim();j.startsWith("public/")&&(j="/"+j.substring(7)),j.startsWith("/")||(j="/"+j);const pt=await fetch(j);if(!pt.ok)throw new Error(`File non trovato su ${j} (Stato HTTP ${pt.status})`);const Zt=await pt.text(),N=(k.split("/").pop()||"snippet.html").replace(/\.html$/i,"").replace(/[-_]/g," ").replace(/\b\w/g,B=>B.toUpperCase()),C={id:`linked-${Date.now()}`,title:N,category:at,code:Zt,filePath:k.trim(),isCustom:!0,createdAt:Date.now()};D([C]),H("success"),setTimeout(()=>{T(),H("idle")},1200)}catch(j){H("error"),I(j.message||"Impossibile leggere il file specificato.")}}};return o.jsx("div",{id:"import-modal",onClick:j=>{j.target===j.currentTarget&&T()},className:"fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-4 md:p-6 bg-slate-900/60 backdrop-blur-xs animate-in fade-in",children:o.jsxs("div",{className:"w-full max-w-xl rounded-2xl border border-slate-200 bg-white shadow-2xl overflow-hidden text-slate-900",children:[o.jsxs("div",{className:"px-5 py-3.5 bg-slate-50 border-b border-slate-200 flex items-center justify-between shrink-0",children:[o.jsxs("div",{className:"flex items-center gap-2",children:[o.jsx("span",{className:"p-1.5 rounded-lg bg-teal-600 text-white shadow-xs",children:o.jsx(eg,{size:16})}),o.jsx("h2",{className:"text-base font-bold text-slate-900",children:"Importa Frammenti HTML"})]}),o.jsx("button",{onClick:T,className:"p-1.5 rounded-lg border border-slate-200 bg-white hover:bg-slate-50 text-slate-500 hover:text-slate-800 transition-colors",children:o.jsx(Gu,{size:16})})]}),o.jsxs("div",{className:"flex border-b border-slate-200 text-xs font-semibold bg-slate-50",children:[o.jsxs("button",{onClick:()=>Y("scan"),className:`flex-1 py-2.5 px-3 text-center border-b-2 transition-colors flex items-center justify-center gap-1.5 ${O==="scan"?"border-teal-600 text-teal-700 font-bold bg-white":"border-transparent text-slate-600 hover:text-slate-900"}`,children:[o.jsx(Os,{size:13,className:Ft?"animate-spin text-teal-600":""}),o.jsx("span",{children:"Scansiona Cartella Public"})]}),o.jsx("button",{onClick:()=>Y("upload"),className:`flex-1 py-2.5 px-3 text-center border-b-2 transition-colors ${O==="upload"?"border-teal-600 text-teal-700 font-bold bg-white":"border-transparent text-slate-600 hover:text-slate-900"}`,children:"Carica File"}),o.jsx("button",{onClick:()=>Y("path"),className:`flex-1 py-2.5 px-3 text-center border-b-2 transition-colors ${O==="path"?"border-teal-600 text-teal-700 font-bold bg-white":"border-transparent text-slate-600 hover:text-slate-900"}`,children:"Collega Percorso"}),o.jsx("button",{onClick:()=>Y("info"),className:`flex-1 py-2.5 px-3 text-center border-b-2 transition-colors ${O==="info"?"border-teal-600 text-teal-700 font-bold bg-white":"border-transparent text-slate-600 hover:text-slate-900"}`,children:"Guida Cartelle"})]}),o.jsxs("div",{className:"p-5 space-y-4",children:[O==="scan"&&o.jsxs("div",{className:"space-y-3",children:[o.jsxs("div",{className:"flex items-center justify-between",children:[o.jsxs("div",{children:[o.jsxs("h3",{className:"text-xs font-bold text-slate-900",children:["File rilevati nella cartella ",o.jsx("code",{className:"bg-slate-100 px-1 py-0.5 rounded font-mono text-teal-700",children:"public/snippets/"})]}),o.jsx("p",{className:"text-[11px] text-slate-500 mt-0.5",children:"Rileva automaticamente tutti i file .html aggiunti o modificati nella cartella del progetto."})]}),o.jsxs("button",{onClick:P,disabled:Ft,className:"px-2.5 py-1.5 rounded-lg border border-slate-200 bg-white hover:bg-slate-50 text-slate-700 text-xs font-semibold transition-colors flex items-center gap-1.5 shadow-xs disabled:opacity-50",title:"Riesegui scansione adesso",children:[o.jsx(Os,{size:13,className:Ft?"animate-spin":""}),o.jsx("span",{children:"Ricarica"})]})]}),Ot&&o.jsx("div",{className:"p-2.5 rounded-xl bg-amber-50 border border-amber-200 text-amber-800 text-xs",children:Ot}),o.jsx("div",{className:"max-h-56 overflow-y-auto rounded-xl border border-slate-200 bg-slate-50 divide-y divide-slate-200",children:G.length===0?o.jsx("div",{className:"p-6 text-center text-xs text-slate-500",children:Ft?"Scansione in corso...":"Nessun file trovato in public/snippets/"}):G.map((j,pt)=>o.jsxs("div",{className:"p-2.5 px-3 flex items-center justify-between hover:bg-white transition-colors text-xs",children:[o.jsxs("div",{className:"flex items-center gap-2 min-w-0 pr-2",children:[o.jsx(Fp,{size:15,className:"text-teal-600 shrink-0"}),o.jsxs("div",{className:"min-w-0",children:[o.jsx("p",{className:"font-semibold text-slate-800 truncate",children:j.title}),o.jsx("p",{className:"text-[11px] text-slate-400 font-mono truncate",children:j.filePath})]})]}),o.jsx("span",{className:"px-2 py-0.5 rounded-md bg-teal-50 border border-teal-200 text-teal-800 font-medium text-[10px] shrink-0 uppercase",children:j.category})]},pt))}),G.length>0&&o.jsxs("div",{className:"pt-2 flex items-center justify-between",children:[o.jsxs("span",{className:"text-xs text-slate-500 font-medium",children:[G.length," file HTML pronti per l'importazione"]}),o.jsxs("button",{onClick:it,className:"px-4 py-2 rounded-xl text-xs font-bold bg-teal-600 hover:bg-teal-700 text-white transition-colors flex items-center gap-1.5 shadow-xs",children:[o.jsx(_m,{size:14}),o.jsxs("span",{children:["Sincronizza e Importa Tutto (",G.length,")"]})]})]}),st!==null&&o.jsxs("div",{className:"p-2.5 rounded-xl bg-emerald-50 border border-emerald-200 text-emerald-800 text-xs flex items-center gap-2",children:[o.jsx(oi,{size:15}),o.jsxs("span",{children:[st," componenti sincronizzati con successo!"]})]})]}),O==="upload"&&o.jsxs("div",{children:[o.jsxs("p",{className:"text-xs mb-3 text-slate-600 leading-relaxed",children:["Trascina o seleziona uno o più file ",o.jsx("code",{className:"bg-slate-100 px-1 py-0.5 rounded text-slate-800",children:".html"})," dal tuo computer. I file verranno inseriti nel contenitore con l'anteprima dal vivo."]}),o.jsxs("div",{className:"mb-3",children:[o.jsx("label",{className:"block text-xs font-semibold mb-1 text-slate-700",children:"Categoria di destinazione predefinita:"}),o.jsx("select",{value:at,onChange:j=>w(j.target.value),className:"w-full px-3 py-2 text-xs rounded-xl border border-slate-200 bg-slate-50 text-slate-900 focus:bg-white focus:border-teal-600 outline-none",children:d.map(j=>o.jsx("option",{value:j.id,children:j.name},j.id))})]}),o.jsxs("div",{onDragOver:j=>j.preventDefault(),onDrop:j=>{j.preventDefault(),oe(j.dataTransfer.files)},onClick:()=>{var j;return(j=_.current)==null?void 0:j.click()},className:"border-2 border-dashed border-slate-300 hover:border-teal-600 rounded-xl p-6 text-center cursor-pointer transition-colors bg-slate-50/50 hover:bg-teal-50/30 group",children:[o.jsx("input",{ref:_,type:"file",multiple:!0,accept:".html,.htm",className:"hidden",onChange:j=>oe(j.target.files)}),o.jsx("div",{className:"w-12 h-12 mx-auto mb-3 rounded-full bg-slate-100 group-hover:bg-teal-100 flex items-center justify-center text-slate-500 group-hover:text-teal-700 transition-colors",children:o.jsx(Og,{size:20})}),o.jsx("p",{className:"text-xs font-semibold text-slate-800 mb-1",children:"Trascina qui i tuoi file HTML oppure clicca per sfogliare"}),o.jsx("p",{className:"text-[11px] text-slate-500",children:"Supporta selezioni multiple e file con script/stili inclusi"})]}),st!==null&&o.jsxs("div",{className:"mt-3 p-2.5 rounded-xl bg-emerald-50 border border-emerald-200 text-emerald-800 text-xs flex items-center gap-2",children:[o.jsx(oi,{size:16}),o.jsxs("span",{children:["Importati con successo ",o.jsx("strong",{children:st})," snippet!"]})]})]}),O==="path"&&o.jsxs("div",{className:"space-y-3",children:[o.jsxs("p",{className:"text-xs text-slate-600 leading-relaxed",children:["Se hai posizionato un file nella cartella ",o.jsx("code",{className:"bg-slate-100 px-1 py-0.5 rounded text-slate-800",children:"public/"})," del progetto, inseriscine il percorso per leggerlo e includerlo nel catalogo."]}),o.jsxs("div",{children:[o.jsx("label",{className:"block text-xs font-semibold mb-1 text-slate-700",children:"Percorso relativo del file HTML:"}),o.jsxs("div",{className:"relative",children:[o.jsx(cg,{size:14,className:"absolute left-3 top-1/2 -translate-y-1/2 text-slate-400"}),o.jsx("input",{type:"text",value:k,onChange:j=>V(j.target.value),placeholder:"public/snippets/schede/accordion-faq.html",className:"w-full pl-9 pr-3 py-2 text-xs font-mono rounded-xl border border-slate-200 bg-slate-50 text-slate-900 focus:bg-white focus:border-teal-600 outline-none"})]}),o.jsxs("div",{className:"mt-2",children:[o.jsx("span",{className:"text-[11px] text-slate-500 font-medium block mb-1",children:"Scorciatoie percorsi disponibili nella cartella:"}),o.jsx("div",{className:"flex flex-wrap gap-1.5 max-h-24 overflow-y-auto pr-1",children:wm.map((j,pt)=>o.jsx("button",{type:"button",onClick:()=>{V(j.filePath),w(j.category)},className:`text-[10px] font-mono px-2 py-1 rounded-md border transition-all ${k===j.filePath?"bg-teal-50 border-teal-300 text-teal-800 font-bold":"bg-white border-slate-200 text-slate-600 hover:border-slate-300 hover:bg-slate-50"}`,children:j.filePath.replace("public/snippets/","")},pt))})]})]}),o.jsxs("div",{children:[o.jsx("label",{className:"block text-xs font-semibold mb-1 text-slate-700",children:"Categoria associata:"}),o.jsx("select",{value:at,onChange:j=>w(j.target.value),className:"w-full px-3 py-2 text-xs rounded-xl border border-slate-200 bg-slate-50 text-slate-900 focus:bg-white focus:border-teal-600 outline-none",children:d.map(j=>o.jsx("option",{value:j.id,children:j.name},j.id))})]}),o.jsxs("div",{className:"pt-2 flex items-center justify-between",children:[o.jsx("button",{type:"button",onClick:ue,disabled:y==="loading"||!k.trim(),className:"px-4 py-2 rounded-xl text-xs font-bold bg-teal-600 hover:bg-teal-700 text-white transition-colors disabled:opacity-50 flex items-center gap-1.5 shadow-xs",children:y==="loading"?"Lettura in corso...":"Carica & Aggiungi"}),y==="success"&&o.jsxs("span",{className:"text-xs text-emerald-700 flex items-center gap-1 font-semibold",children:[o.jsx(oi,{size:14})," File caricato!"]})]}),y==="error"&&o.jsxs("div",{className:"p-2.5 rounded-xl bg-rose-50 border border-rose-200 text-rose-800 text-xs flex items-center gap-2",children:[o.jsx(Vp,{size:14}),o.jsx("span",{children:dt})]})]}),O==="info"&&o.jsxs("div",{className:"space-y-3 text-xs text-slate-600 leading-relaxed",children:[o.jsxs("div",{className:"p-3 rounded-xl bg-slate-50 border border-slate-200 flex items-start gap-2.5",children:[o.jsx(Pp,{size:18,className:"text-teal-600 shrink-0 mt-0.5"}),o.jsxs("div",{children:[o.jsx("h4",{className:"font-bold text-slate-900 mb-1",children:"Come organizzare i tuoi file HTML"}),o.jsxs("p",{children:["I tuoi frammenti HTML risiedono nella cartella ",o.jsx("code",{className:"bg-slate-200 px-1 py-0.5 rounded font-mono text-[11px] text-slate-800",children:"public/snippets/"})," suddivisi per cartelle tematiche."]})]})]}),o.jsxs("div",{className:"p-3 rounded-xl bg-slate-900 text-slate-100 font-mono text-[11px] space-y-1",children:[o.jsx("div",{className:"text-teal-400",children:"public/snippets/"}),o.jsx("div",{className:"pl-4",children:"├── bottoni/mio-pulsante.html"}),o.jsx("div",{className:"pl-4",children:"├── schede/card-profilo.html"}),o.jsx("div",{className:"pl-4",children:"├── layout/griglia-moderna.html"}),o.jsx("div",{className:"pl-4",children:"├── animazioni/effetto-pulse.html"}),o.jsx("div",{className:"pl-4",children:"├── form/campo-ricerca.html"}),o.jsx("div",{className:"pl-4",children:"├── modali/dialog-avviso.html"}),o.jsx("div",{className:"pl-4",children:"├── menu/menu-dropdown.html"}),o.jsx("div",{className:"pl-4",children:"├── header/header-app.html"}),o.jsx("div",{className:"pl-4",children:"└── hero/hero-landing.html"})]}),o.jsx("p",{children:"Non è richiesto alcun file JSON o server di configurazione: l'applicazione indicizza e mostra direttamente ciascun file con anteprima isolata in iframe."})]})]})]})})},Yu="html_snippet_studio_items_v3",vm="html_snippet_studio_theme_v3",ym="html_snippet_studio_layout";function Gg(){const[v,T]=J.useState(()=>localStorage.getItem(vm)==="sky"?"sky":"light"),[D,d]=J.useState(()=>localStorage.getItem(ym)==="stack"?"stack":"grid");J.useEffect(()=>{document.documentElement.setAttribute("data-theme",v),localStorage.setItem(vm,v)},[v]),J.useEffect(()=>{localStorage.setItem(ym,D)},[D]);const[_,O]=J.useState(()=>{try{const M=localStorage.getItem(Yu);if(M){const N=JSON.parse(M);if(Array.isArray(N)&&N.length>0){const C=new Set(N.map(Z=>Z.id)),B=bm.filter(Z=>!C.has(Z.id));if(B.length>0){const Z=[...N,...B];try{localStorage.setItem(Yu,JSON.stringify(Z))}catch{}return Z}return N}}}catch(M){console.warn("Impossibile caricare da localStorage, uso i predefiniti:",M)}return bm}),[Y,k]=J.useState(""),[V,at]=J.useState(null),[w,y]=J.useState(null),[H,dt]=J.useState(!1),[I,st]=J.useState(!1),[K,G]=J.useState(null),[Mt,Ft]=J.useState(!1),[nt,Ot]=J.useState(null),Ut=M=>{O(M);try{localStorage.setItem(Yu,JSON.stringify(M))}catch(N){console.error("Errore salvataggio localStorage:",N)}},P=J.useCallback(async(M=!1)=>{Ft(!0);try{const N=await Am();N.success&&N.files&&N.files.length>0?O(C=>{const B=new Set(C.map(jt=>{var ve;return(ve=jt.filePath)==null?void 0:ve.toLowerCase().trim()})),Z=N.files.filter(jt=>!B.has(jt.filePath.toLowerCase().trim()));if(Z.length===0)return M&&Ot(`Tutti i ${N.files.length} file di public/snippets sono sincronizzati!`),C;const ut=Z.map(jt=>({id:`scanned-${jt.filePath.replace(/[^a-zA-Z0-9_-]/g,"-").toLowerCase()}`,title:jt.title,category:jt.category||"schede",filePath:jt.filePath,description:`File HTML caricato da ${jt.filePath}`,tags:[jt.category,"file","sincronizzato"],code:jt.code,createdAt:Date.now()})),Xt=[...C,...ut];try{localStorage.setItem(Yu,JSON.stringify(Xt))}catch{}return M&&Ot(`Sincronizzazione completata: ${ut.length} nuovi file aggiunti (${N.source})!`),Xt}):M&&Ot(N.error||"Nessun nuovo file HTML trovato nella cartella public/snippets")}catch(N){M&&Ot("Errore durante la sincronizzazione: "+((N==null?void 0:N.message)||"controlla la cartella public"))}finally{Ft(!1),M&&setTimeout(()=>Ot(null),4e3)}},[]);J.useEffect(()=>{P(!1)},[P]),J.useEffect(()=>{const M=N=>{if((N.ctrlKey||N.metaKey)&&N.key.toLowerCase()==="k"){N.preventDefault();const C=document.getElementById("search-input");C==null||C.focus()}};return window.addEventListener("keydown",M),()=>window.removeEventListener("keydown",M)},[]);const it=J.useMemo(()=>{const M=Y.trim().toLowerCase();return _.filter(N=>{var jt,ve,r;if(V&&N.category!==V)return!1;if(!M)return!0;const C=N.title.toLowerCase().includes(M),B=(jt=N.description)==null?void 0:jt.toLowerCase().includes(M),Z=(ve=N.filePath)==null?void 0:ve.toLowerCase().includes(M),ut=(r=N.tags)==null?void 0:r.some(E=>E.toLowerCase().includes(M)),Xt=N.code.toLowerCase().includes(M);return C||B||Z||ut||Xt})},[_,Y,V]),oe=()=>{T(M=>M==="light"?"sky":"light")},ue=M=>{const N=[M,..._];Ut(N)},Wt=M=>{const N=[...M,..._];Ut(N)},j=M=>{const N=_.findIndex(Z=>Z.id===M),C=_[N];if(!C)return;const B=_.filter(Z=>Z.id!==M);Ut(B),(w==null?void 0:w.id)===M&&y(null),G({snippet:C,index:N}),setTimeout(()=>{G(Z=>(Z==null?void 0:Z.snippet.id)===M?null:Z)},6e3)},pt=()=>{if(!K)return;const{snippet:M,index:N}=K,C=[..._];C.splice(N,0,M),Ut(C),G(null)},Zt=v==="sky";return o.jsxs("div",{id:"app-container-root",className:`min-h-screen flex flex-col transition-colors duration-200 ${Zt?"bg-[#1b3a5b]":"bg-[#234b75]"} text-slate-900`,children:[o.jsx(Dg,{categories:ci,selectedCategory:V,onSelectCategory:at,searchQuery:Y,onSearchChange:k,theme:v,onToggleTheme:oe,layoutMode:D,onChangeLayoutMode:d,onOpenNewSnippetModal:()=>dt(!0),onOpenImportModal:()=>st(!0),onSyncFolder:()=>P(!0),isSyncing:Mt,snippetCount:it.length,totalSnippetCount:_.length}),o.jsxs("main",{id:"snippets-main-container",className:"flex-1 max-w-[1700px] w-full mx-auto px-4 sm:px-6 py-6 flex flex-col",children:[nt&&o.jsxs("div",{className:"mb-4 flex items-center justify-between gap-3 px-4 py-2.5 rounded-xl bg-teal-900 text-teal-100 border border-teal-700/50 shadow-lg animate-in slide-in-from-top duration-200",children:[o.jsx("span",{className:"text-xs font-semibold",children:nt}),o.jsx("button",{onClick:()=>Ot(null),className:"text-xs font-bold text-teal-300 hover:text-white",children:"✕"})]}),K&&o.jsxs("div",{className:"mb-4 flex items-center justify-between gap-3 px-4 py-2.5 rounded-xl bg-slate-900 text-white shadow-lg animate-in slide-in-from-top duration-200",children:[o.jsxs("span",{className:"text-xs",children:["Snippet ",o.jsxs("strong",{children:['"',K.snippet.title,'"']})," eliminato dal contenitore."]}),o.jsxs("button",{onClick:pt,className:"flex items-center gap-1 text-xs font-bold text-teal-400 hover:text-teal-300 underline",children:[o.jsx(Em,{size:13}),"Ripristina"]})]}),it.length>0?o.jsx("div",{className:D==="grid"?"grid grid-cols-1 lg:grid-cols-2 gap-6":"flex flex-col gap-6 max-w-5xl mx-auto w-full",children:it.map(M=>{const N=ci.find(C=>C.id===M.category);return o.jsx(Hg,{snippet:M,category:N,theme:v,layoutMode:D,onDelete:j,onExpandPreview:C=>y(C)},M.id)})}):o.jsxs("div",{className:"flex-1 flex flex-col items-center justify-center p-12 text-center rounded-2xl border border-slate-200 bg-white my-8 shadow-xs",children:[o.jsx("div",{className:"w-14 h-14 rounded-2xl flex items-center justify-center mb-4 border border-slate-200 bg-slate-50 text-slate-500",children:o.jsx(zm,{size:28})}),o.jsx("h3",{className:"text-base font-bold text-slate-900 mb-1",children:"Nessun frammento HTML trovato"}),o.jsx("p",{className:"text-xs text-slate-500 max-w-md mb-5 leading-relaxed",children:Y||V?"Nessuno snippet corrisponde ai criteri di ricerca impostati. Prova a modificare i termini di ricerca o azzerare i filtri.":"Il contenitore è al momento vuoto. Aggiungi il tuo primo frammento HTML o importa file dalla cartella."}),o.jsxs("div",{className:"flex items-center gap-3",children:[(Y||V)&&o.jsx("button",{onClick:()=>{at(null),k("")},className:"px-3.5 py-2 rounded-xl text-xs font-semibold border border-slate-200 bg-white hover:bg-slate-50 text-slate-700",children:"Azzera filtri"}),o.jsxs("button",{onClick:()=>dt(!0),className:"flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-bold bg-teal-600 hover:bg-teal-700 text-white shadow-xs",children:[o.jsx(Us,{size:14,className:"stroke-[2.5]"}),o.jsx("span",{children:"Aggiungi Nuovo Snippet"})]}),o.jsxs("button",{onClick:()=>st(!0),className:"flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-semibold border border-slate-200 bg-white hover:bg-slate-50 text-slate-700",children:[o.jsx(Cs,{size:14,className:"text-teal-600"}),o.jsx("span",{children:"Importa File HTML"})]})]})]})]}),o.jsx(Rg,{snippet:w,category:ci.find(M=>M.id===(w==null?void 0:w.category)),theme:v,onClose:()=>y(null)}),o.jsx(qg,{isOpen:H,onClose:()=>dt(!1),onSave:ue,categories:ci,theme:v}),o.jsx(Yg,{isOpen:I,onClose:()=>st(!1),onImportSnippets:Wt,categories:ci,theme:v})]})}Hp.createRoot(document.getElementById("root")).render(o.jsx(J.StrictMode,{children:o.jsx(Gg,{})}));
