(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))s(a);new MutationObserver(a=>{for(const l of a)if(l.type==="childList")for(const u of l.addedNodes)u.tagName==="LINK"&&u.rel==="modulepreload"&&s(u)}).observe(document,{childList:!0,subtree:!0});function n(a){const l={};return a.integrity&&(l.integrity=a.integrity),a.referrerPolicy&&(l.referrerPolicy=a.referrerPolicy),a.crossOrigin==="use-credentials"?l.credentials="include":a.crossOrigin==="anonymous"?l.credentials="omit":l.credentials="same-origin",l}function s(a){if(a.ep)return;a.ep=!0;const l=n(a);fetch(a.href,l)}})();var Ru={exports:{}},Ko={},Pu={exports:{}},It={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Zp;function S_(){if(Zp)return It;Zp=1;var r=Symbol.for("react.element"),e=Symbol.for("react.portal"),n=Symbol.for("react.fragment"),s=Symbol.for("react.strict_mode"),a=Symbol.for("react.profiler"),l=Symbol.for("react.provider"),u=Symbol.for("react.context"),f=Symbol.for("react.forward_ref"),p=Symbol.for("react.suspense"),m=Symbol.for("react.memo"),x=Symbol.for("react.lazy"),S=Symbol.iterator;function g(F){return F===null||typeof F!="object"?null:(F=S&&F[S]||F["@@iterator"],typeof F=="function"?F:null)}var M={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},T=Object.assign,C={};function _(F,ne,Ge){this.props=F,this.context=ne,this.refs=C,this.updater=Ge||M}_.prototype.isReactComponent={},_.prototype.setState=function(F,ne){if(typeof F!="object"&&typeof F!="function"&&F!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,F,ne,"setState")},_.prototype.forceUpdate=function(F){this.updater.enqueueForceUpdate(this,F,"forceUpdate")};function v(){}v.prototype=_.prototype;function b(F,ne,Ge){this.props=F,this.context=ne,this.refs=C,this.updater=Ge||M}var L=b.prototype=new v;L.constructor=b,T(L,_.prototype),L.isPureReactComponent=!0;var P=Array.isArray,B=Object.prototype.hasOwnProperty,I={current:null},k={key:!0,ref:!0,__self:!0,__source:!0};function w(F,ne,Ge){var qe,Xe={},Q=null,Ae=null;if(ne!=null)for(qe in ne.ref!==void 0&&(Ae=ne.ref),ne.key!==void 0&&(Q=""+ne.key),ne)B.call(ne,qe)&&!k.hasOwnProperty(qe)&&(Xe[qe]=ne[qe]);var Se=arguments.length-2;if(Se===1)Xe.children=Ge;else if(1<Se){for(var ze=Array(Se),it=0;it<Se;it++)ze[it]=arguments[it+2];Xe.children=ze}if(F&&F.defaultProps)for(qe in Se=F.defaultProps,Se)Xe[qe]===void 0&&(Xe[qe]=Se[qe]);return{$$typeof:r,type:F,key:Q,ref:Ae,props:Xe,_owner:I.current}}function N(F,ne){return{$$typeof:r,type:F.type,key:ne,ref:F.ref,props:F.props,_owner:F._owner}}function j(F){return typeof F=="object"&&F!==null&&F.$$typeof===r}function O(F){var ne={"=":"=0",":":"=2"};return"$"+F.replace(/[=:]/g,function(Ge){return ne[Ge]})}var Y=/\/+/g;function oe(F,ne){return typeof F=="object"&&F!==null&&F.key!=null?O(""+F.key):ne.toString(36)}function he(F,ne,Ge,qe,Xe){var Q=typeof F;(Q==="undefined"||Q==="boolean")&&(F=null);var Ae=!1;if(F===null)Ae=!0;else switch(Q){case"string":case"number":Ae=!0;break;case"object":switch(F.$$typeof){case r:case e:Ae=!0}}if(Ae)return Ae=F,Xe=Xe(Ae),F=qe===""?"."+oe(Ae,0):qe,P(Xe)?(Ge="",F!=null&&(Ge=F.replace(Y,"$&/")+"/"),he(Xe,ne,Ge,"",function(it){return it})):Xe!=null&&(j(Xe)&&(Xe=N(Xe,Ge+(!Xe.key||Ae&&Ae.key===Xe.key?"":(""+Xe.key).replace(Y,"$&/")+"/")+F)),ne.push(Xe)),1;if(Ae=0,qe=qe===""?".":qe+":",P(F))for(var Se=0;Se<F.length;Se++){Q=F[Se];var ze=qe+oe(Q,Se);Ae+=he(Q,ne,Ge,ze,Xe)}else if(ze=g(F),typeof ze=="function")for(F=ze.call(F),Se=0;!(Q=F.next()).done;)Q=Q.value,ze=qe+oe(Q,Se++),Ae+=he(Q,ne,Ge,ze,Xe);else if(Q==="object")throw ne=String(F),Error("Objects are not valid as a React child (found: "+(ne==="[object Object]"?"object with keys {"+Object.keys(F).join(", ")+"}":ne)+"). If you meant to render a collection of children, use an array instead.");return Ae}function W(F,ne,Ge){if(F==null)return F;var qe=[],Xe=0;return he(F,qe,"","",function(Q){return ne.call(Ge,Q,Xe++)}),qe}function te(F){if(F._status===-1){var ne=F._result;ne=ne(),ne.then(function(Ge){(F._status===0||F._status===-1)&&(F._status=1,F._result=Ge)},function(Ge){(F._status===0||F._status===-1)&&(F._status=2,F._result=Ge)}),F._status===-1&&(F._status=0,F._result=ne)}if(F._status===1)return F._result.default;throw F._result}var $={current:null},Z={transition:null},ce={ReactCurrentDispatcher:$,ReactCurrentBatchConfig:Z,ReactCurrentOwner:I};function ue(){throw Error("act(...) is not supported in production builds of React.")}return It.Children={map:W,forEach:function(F,ne,Ge){W(F,function(){ne.apply(this,arguments)},Ge)},count:function(F){var ne=0;return W(F,function(){ne++}),ne},toArray:function(F){return W(F,function(ne){return ne})||[]},only:function(F){if(!j(F))throw Error("React.Children.only expected to receive a single React element child.");return F}},It.Component=_,It.Fragment=n,It.Profiler=a,It.PureComponent=b,It.StrictMode=s,It.Suspense=p,It.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=ce,It.act=ue,It.cloneElement=function(F,ne,Ge){if(F==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+F+".");var qe=T({},F.props),Xe=F.key,Q=F.ref,Ae=F._owner;if(ne!=null){if(ne.ref!==void 0&&(Q=ne.ref,Ae=I.current),ne.key!==void 0&&(Xe=""+ne.key),F.type&&F.type.defaultProps)var Se=F.type.defaultProps;for(ze in ne)B.call(ne,ze)&&!k.hasOwnProperty(ze)&&(qe[ze]=ne[ze]===void 0&&Se!==void 0?Se[ze]:ne[ze])}var ze=arguments.length-2;if(ze===1)qe.children=Ge;else if(1<ze){Se=Array(ze);for(var it=0;it<ze;it++)Se[it]=arguments[it+2];qe.children=Se}return{$$typeof:r,type:F.type,key:Xe,ref:Q,props:qe,_owner:Ae}},It.createContext=function(F){return F={$$typeof:u,_currentValue:F,_currentValue2:F,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},F.Provider={$$typeof:l,_context:F},F.Consumer=F},It.createElement=w,It.createFactory=function(F){var ne=w.bind(null,F);return ne.type=F,ne},It.createRef=function(){return{current:null}},It.forwardRef=function(F){return{$$typeof:f,render:F}},It.isValidElement=j,It.lazy=function(F){return{$$typeof:x,_payload:{_status:-1,_result:F},_init:te}},It.memo=function(F,ne){return{$$typeof:m,type:F,compare:ne===void 0?null:ne}},It.startTransition=function(F){var ne=Z.transition;Z.transition={};try{F()}finally{Z.transition=ne}},It.unstable_act=ue,It.useCallback=function(F,ne){return $.current.useCallback(F,ne)},It.useContext=function(F){return $.current.useContext(F)},It.useDebugValue=function(){},It.useDeferredValue=function(F){return $.current.useDeferredValue(F)},It.useEffect=function(F,ne){return $.current.useEffect(F,ne)},It.useId=function(){return $.current.useId()},It.useImperativeHandle=function(F,ne,Ge){return $.current.useImperativeHandle(F,ne,Ge)},It.useInsertionEffect=function(F,ne){return $.current.useInsertionEffect(F,ne)},It.useLayoutEffect=function(F,ne){return $.current.useLayoutEffect(F,ne)},It.useMemo=function(F,ne){return $.current.useMemo(F,ne)},It.useReducer=function(F,ne,Ge){return $.current.useReducer(F,ne,Ge)},It.useRef=function(F){return $.current.useRef(F)},It.useState=function(F){return $.current.useState(F)},It.useSyncExternalStore=function(F,ne,Ge){return $.current.useSyncExternalStore(F,ne,Ge)},It.useTransition=function(){return $.current.useTransition()},It.version="18.3.1",It}var Jp;function cf(){return Jp||(Jp=1,Pu.exports=S_()),Pu.exports}/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Qp;function y_(){if(Qp)return Ko;Qp=1;var r=cf(),e=Symbol.for("react.element"),n=Symbol.for("react.fragment"),s=Object.prototype.hasOwnProperty,a=r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,l={key:!0,ref:!0,__self:!0,__source:!0};function u(f,p,m){var x,S={},g=null,M=null;m!==void 0&&(g=""+m),p.key!==void 0&&(g=""+p.key),p.ref!==void 0&&(M=p.ref);for(x in p)s.call(p,x)&&!l.hasOwnProperty(x)&&(S[x]=p[x]);if(f&&f.defaultProps)for(x in p=f.defaultProps,p)S[x]===void 0&&(S[x]=p[x]);return{$$typeof:e,type:f,key:g,ref:M,props:S,_owner:a.current}}return Ko.Fragment=n,Ko.jsx=u,Ko.jsxs=u,Ko}var em;function M_(){return em||(em=1,Ru.exports=y_()),Ru.exports}var V=M_(),hl={},Lu={exports:{}},si={},Du={exports:{}},Iu={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var tm;function E_(){return tm||(tm=1,(function(r){function e(Z,ce){var ue=Z.length;Z.push(ce);e:for(;0<ue;){var F=ue-1>>>1,ne=Z[F];if(0<a(ne,ce))Z[F]=ce,Z[ue]=ne,ue=F;else break e}}function n(Z){return Z.length===0?null:Z[0]}function s(Z){if(Z.length===0)return null;var ce=Z[0],ue=Z.pop();if(ue!==ce){Z[0]=ue;e:for(var F=0,ne=Z.length,Ge=ne>>>1;F<Ge;){var qe=2*(F+1)-1,Xe=Z[qe],Q=qe+1,Ae=Z[Q];if(0>a(Xe,ue))Q<ne&&0>a(Ae,Xe)?(Z[F]=Ae,Z[Q]=ue,F=Q):(Z[F]=Xe,Z[qe]=ue,F=qe);else if(Q<ne&&0>a(Ae,ue))Z[F]=Ae,Z[Q]=ue,F=Q;else break e}}return ce}function a(Z,ce){var ue=Z.sortIndex-ce.sortIndex;return ue!==0?ue:Z.id-ce.id}if(typeof performance=="object"&&typeof performance.now=="function"){var l=performance;r.unstable_now=function(){return l.now()}}else{var u=Date,f=u.now();r.unstable_now=function(){return u.now()-f}}var p=[],m=[],x=1,S=null,g=3,M=!1,T=!1,C=!1,_=typeof setTimeout=="function"?setTimeout:null,v=typeof clearTimeout=="function"?clearTimeout:null,b=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function L(Z){for(var ce=n(m);ce!==null;){if(ce.callback===null)s(m);else if(ce.startTime<=Z)s(m),ce.sortIndex=ce.expirationTime,e(p,ce);else break;ce=n(m)}}function P(Z){if(C=!1,L(Z),!T)if(n(p)!==null)T=!0,te(B);else{var ce=n(m);ce!==null&&$(P,ce.startTime-Z)}}function B(Z,ce){T=!1,C&&(C=!1,v(w),w=-1),M=!0;var ue=g;try{for(L(ce),S=n(p);S!==null&&(!(S.expirationTime>ce)||Z&&!O());){var F=S.callback;if(typeof F=="function"){S.callback=null,g=S.priorityLevel;var ne=F(S.expirationTime<=ce);ce=r.unstable_now(),typeof ne=="function"?S.callback=ne:S===n(p)&&s(p),L(ce)}else s(p);S=n(p)}if(S!==null)var Ge=!0;else{var qe=n(m);qe!==null&&$(P,qe.startTime-ce),Ge=!1}return Ge}finally{S=null,g=ue,M=!1}}var I=!1,k=null,w=-1,N=5,j=-1;function O(){return!(r.unstable_now()-j<N)}function Y(){if(k!==null){var Z=r.unstable_now();j=Z;var ce=!0;try{ce=k(!0,Z)}finally{ce?oe():(I=!1,k=null)}}else I=!1}var oe;if(typeof b=="function")oe=function(){b(Y)};else if(typeof MessageChannel<"u"){var he=new MessageChannel,W=he.port2;he.port1.onmessage=Y,oe=function(){W.postMessage(null)}}else oe=function(){_(Y,0)};function te(Z){k=Z,I||(I=!0,oe())}function $(Z,ce){w=_(function(){Z(r.unstable_now())},ce)}r.unstable_IdlePriority=5,r.unstable_ImmediatePriority=1,r.unstable_LowPriority=4,r.unstable_NormalPriority=3,r.unstable_Profiling=null,r.unstable_UserBlockingPriority=2,r.unstable_cancelCallback=function(Z){Z.callback=null},r.unstable_continueExecution=function(){T||M||(T=!0,te(B))},r.unstable_forceFrameRate=function(Z){0>Z||125<Z?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):N=0<Z?Math.floor(1e3/Z):5},r.unstable_getCurrentPriorityLevel=function(){return g},r.unstable_getFirstCallbackNode=function(){return n(p)},r.unstable_next=function(Z){switch(g){case 1:case 2:case 3:var ce=3;break;default:ce=g}var ue=g;g=ce;try{return Z()}finally{g=ue}},r.unstable_pauseExecution=function(){},r.unstable_requestPaint=function(){},r.unstable_runWithPriority=function(Z,ce){switch(Z){case 1:case 2:case 3:case 4:case 5:break;default:Z=3}var ue=g;g=Z;try{return ce()}finally{g=ue}},r.unstable_scheduleCallback=function(Z,ce,ue){var F=r.unstable_now();switch(typeof ue=="object"&&ue!==null?(ue=ue.delay,ue=typeof ue=="number"&&0<ue?F+ue:F):ue=F,Z){case 1:var ne=-1;break;case 2:ne=250;break;case 5:ne=1073741823;break;case 4:ne=1e4;break;default:ne=5e3}return ne=ue+ne,Z={id:x++,callback:ce,priorityLevel:Z,startTime:ue,expirationTime:ne,sortIndex:-1},ue>F?(Z.sortIndex=ue,e(m,Z),n(p)===null&&Z===n(m)&&(C?(v(w),w=-1):C=!0,$(P,ue-F))):(Z.sortIndex=ne,e(p,Z),T||M||(T=!0,te(B))),Z},r.unstable_shouldYield=O,r.unstable_wrapCallback=function(Z){var ce=g;return function(){var ue=g;g=ce;try{return Z.apply(this,arguments)}finally{g=ue}}}})(Iu)),Iu}var nm;function w_(){return nm||(nm=1,Du.exports=E_()),Du.exports}/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var im;function T_(){if(im)return si;im=1;var r=cf(),e=w_();function n(t){for(var i="https://reactjs.org/docs/error-decoder.html?invariant="+t,o=1;o<arguments.length;o++)i+="&args[]="+encodeURIComponent(arguments[o]);return"Minified React error #"+t+"; visit "+i+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var s=new Set,a={};function l(t,i){u(t,i),u(t+"Capture",i)}function u(t,i){for(a[t]=i,t=0;t<i.length;t++)s.add(i[t])}var f=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),p=Object.prototype.hasOwnProperty,m=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,x={},S={};function g(t){return p.call(S,t)?!0:p.call(x,t)?!1:m.test(t)?S[t]=!0:(x[t]=!0,!1)}function M(t,i,o,c){if(o!==null&&o.type===0)return!1;switch(typeof i){case"function":case"symbol":return!0;case"boolean":return c?!1:o!==null?!o.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function T(t,i,o,c){if(i===null||typeof i>"u"||M(t,i,o,c))return!0;if(c)return!1;if(o!==null)switch(o.type){case 3:return!i;case 4:return i===!1;case 5:return isNaN(i);case 6:return isNaN(i)||1>i}return!1}function C(t,i,o,c,d,h,E){this.acceptsBooleans=i===2||i===3||i===4,this.attributeName=c,this.attributeNamespace=d,this.mustUseProperty=o,this.propertyName=t,this.type=i,this.sanitizeURL=h,this.removeEmptyString=E}var _={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){_[t]=new C(t,0,!1,t,null,!1,!1)}),[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var i=t[0];_[i]=new C(i,1,!1,t[1],null,!1,!1)}),["contentEditable","draggable","spellCheck","value"].forEach(function(t){_[t]=new C(t,2,!1,t.toLowerCase(),null,!1,!1)}),["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){_[t]=new C(t,2,!1,t,null,!1,!1)}),"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){_[t]=new C(t,3,!1,t.toLowerCase(),null,!1,!1)}),["checked","multiple","muted","selected"].forEach(function(t){_[t]=new C(t,3,!0,t,null,!1,!1)}),["capture","download"].forEach(function(t){_[t]=new C(t,4,!1,t,null,!1,!1)}),["cols","rows","size","span"].forEach(function(t){_[t]=new C(t,6,!1,t,null,!1,!1)}),["rowSpan","start"].forEach(function(t){_[t]=new C(t,5,!1,t.toLowerCase(),null,!1,!1)});var v=/[\-:]([a-z])/g;function b(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var i=t.replace(v,b);_[i]=new C(i,1,!1,t,null,!1,!1)}),"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var i=t.replace(v,b);_[i]=new C(i,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)}),["xml:base","xml:lang","xml:space"].forEach(function(t){var i=t.replace(v,b);_[i]=new C(i,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)}),["tabIndex","crossOrigin"].forEach(function(t){_[t]=new C(t,1,!1,t.toLowerCase(),null,!1,!1)}),_.xlinkHref=new C("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1),["src","href","action","formAction"].forEach(function(t){_[t]=new C(t,1,!1,t.toLowerCase(),null,!0,!0)});function L(t,i,o,c){var d=_.hasOwnProperty(i)?_[i]:null;(d!==null?d.type!==0:c||!(2<i.length)||i[0]!=="o"&&i[0]!=="O"||i[1]!=="n"&&i[1]!=="N")&&(T(i,o,d,c)&&(o=null),c||d===null?g(i)&&(o===null?t.removeAttribute(i):t.setAttribute(i,""+o)):d.mustUseProperty?t[d.propertyName]=o===null?d.type===3?!1:"":o:(i=d.attributeName,c=d.attributeNamespace,o===null?t.removeAttribute(i):(d=d.type,o=d===3||d===4&&o===!0?"":""+o,c?t.setAttributeNS(c,i,o):t.setAttribute(i,o))))}var P=r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,B=Symbol.for("react.element"),I=Symbol.for("react.portal"),k=Symbol.for("react.fragment"),w=Symbol.for("react.strict_mode"),N=Symbol.for("react.profiler"),j=Symbol.for("react.provider"),O=Symbol.for("react.context"),Y=Symbol.for("react.forward_ref"),oe=Symbol.for("react.suspense"),he=Symbol.for("react.suspense_list"),W=Symbol.for("react.memo"),te=Symbol.for("react.lazy"),$=Symbol.for("react.offscreen"),Z=Symbol.iterator;function ce(t){return t===null||typeof t!="object"?null:(t=Z&&t[Z]||t["@@iterator"],typeof t=="function"?t:null)}var ue=Object.assign,F;function ne(t){if(F===void 0)try{throw Error()}catch(o){var i=o.stack.trim().match(/\n( *(at )?)/);F=i&&i[1]||""}return`
`+F+t}var Ge=!1;function qe(t,i){if(!t||Ge)return"";Ge=!0;var o=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(i)if(i=function(){throw Error()},Object.defineProperty(i.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(i,[])}catch(le){var c=le}Reflect.construct(t,[],i)}else{try{i.call()}catch(le){c=le}t.call(i.prototype)}else{try{throw Error()}catch(le){c=le}t()}}catch(le){if(le&&c&&typeof le.stack=="string"){for(var d=le.stack.split(`
`),h=c.stack.split(`
`),E=d.length-1,U=h.length-1;1<=E&&0<=U&&d[E]!==h[U];)U--;for(;1<=E&&0<=U;E--,U--)if(d[E]!==h[U]){if(E!==1||U!==1)do if(E--,U--,0>U||d[E]!==h[U]){var H=`
`+d[E].replace(" at new "," at ");return t.displayName&&H.includes("<anonymous>")&&(H=H.replace("<anonymous>",t.displayName)),H}while(1<=E&&0<=U);break}}}finally{Ge=!1,Error.prepareStackTrace=o}return(t=t?t.displayName||t.name:"")?ne(t):""}function Xe(t){switch(t.tag){case 5:return ne(t.type);case 16:return ne("Lazy");case 13:return ne("Suspense");case 19:return ne("SuspenseList");case 0:case 2:case 15:return t=qe(t.type,!1),t;case 11:return t=qe(t.type.render,!1),t;case 1:return t=qe(t.type,!0),t;default:return""}}function Q(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case k:return"Fragment";case I:return"Portal";case N:return"Profiler";case w:return"StrictMode";case oe:return"Suspense";case he:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case O:return(t.displayName||"Context")+".Consumer";case j:return(t._context.displayName||"Context")+".Provider";case Y:var i=t.render;return t=t.displayName,t||(t=i.displayName||i.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case W:return i=t.displayName||null,i!==null?i:Q(t.type)||"Memo";case te:i=t._payload,t=t._init;try{return Q(t(i))}catch{}}return null}function Ae(t){var i=t.type;switch(t.tag){case 24:return"Cache";case 9:return(i.displayName||"Context")+".Consumer";case 10:return(i._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=i.render,t=t.displayName||t.name||"",i.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return i;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Q(i);case 8:return i===w?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof i=="function")return i.displayName||i.name||null;if(typeof i=="string")return i}return null}function Se(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function ze(t){var i=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(i==="checkbox"||i==="radio")}function it(t){var i=ze(t)?"checked":"value",o=Object.getOwnPropertyDescriptor(t.constructor.prototype,i),c=""+t[i];if(!t.hasOwnProperty(i)&&typeof o<"u"&&typeof o.get=="function"&&typeof o.set=="function"){var d=o.get,h=o.set;return Object.defineProperty(t,i,{configurable:!0,get:function(){return d.call(this)},set:function(E){c=""+E,h.call(this,E)}}),Object.defineProperty(t,i,{enumerable:o.enumerable}),{getValue:function(){return c},setValue:function(E){c=""+E},stopTracking:function(){t._valueTracker=null,delete t[i]}}}}function at(t){t._valueTracker||(t._valueTracker=it(t))}function Nt(t){if(!t)return!1;var i=t._valueTracker;if(!i)return!0;var o=i.getValue(),c="";return t&&(c=ze(t)?t.checked?"true":"false":t.value),t=c,t!==o?(i.setValue(t),!0):!1}function _t(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function Tt(t,i){var o=i.checked;return ue({},i,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:o??t._wrapperState.initialChecked})}function Ot(t,i){var o=i.defaultValue==null?"":i.defaultValue,c=i.checked!=null?i.checked:i.defaultChecked;o=Se(i.value!=null?i.value:o),t._wrapperState={initialChecked:c,initialValue:o,controlled:i.type==="checkbox"||i.type==="radio"?i.checked!=null:i.value!=null}}function gt(t,i){i=i.checked,i!=null&&L(t,"checked",i,!1)}function Gt(t,i){gt(t,i);var o=Se(i.value),c=i.type;if(o!=null)c==="number"?(o===0&&t.value===""||t.value!=o)&&(t.value=""+o):t.value!==""+o&&(t.value=""+o);else if(c==="submit"||c==="reset"){t.removeAttribute("value");return}i.hasOwnProperty("value")?ln(t,i.type,o):i.hasOwnProperty("defaultValue")&&ln(t,i.type,Se(i.defaultValue)),i.checked==null&&i.defaultChecked!=null&&(t.defaultChecked=!!i.defaultChecked)}function Bt(t,i,o){if(i.hasOwnProperty("value")||i.hasOwnProperty("defaultValue")){var c=i.type;if(!(c!=="submit"&&c!=="reset"||i.value!==void 0&&i.value!==null))return;i=""+t._wrapperState.initialValue,o||i===t.value||(t.value=i),t.defaultValue=i}o=t.name,o!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,o!==""&&(t.name=o)}function ln(t,i,o){(i!=="number"||_t(t.ownerDocument)!==t)&&(o==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+o&&(t.defaultValue=""+o))}var G=Array.isArray;function zt(t,i,o,c){if(t=t.options,i){i={};for(var d=0;d<o.length;d++)i["$"+o[d]]=!0;for(o=0;o<t.length;o++)d=i.hasOwnProperty("$"+t[o].value),t[o].selected!==d&&(t[o].selected=d),d&&c&&(t[o].defaultSelected=!0)}else{for(o=""+Se(o),i=null,d=0;d<t.length;d++){if(t[d].value===o){t[d].selected=!0,c&&(t[d].defaultSelected=!0);return}i!==null||t[d].disabled||(i=t[d])}i!==null&&(i.selected=!0)}}function vt(t,i){if(i.dangerouslySetInnerHTML!=null)throw Error(n(91));return ue({},i,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function de(t,i){var o=i.value;if(o==null){if(o=i.children,i=i.defaultValue,o!=null){if(i!=null)throw Error(n(92));if(G(o)){if(1<o.length)throw Error(n(93));o=o[0]}i=o}i==null&&(i=""),o=i}t._wrapperState={initialValue:Se(o)}}function D(t,i){var o=Se(i.value),c=Se(i.defaultValue);o!=null&&(o=""+o,o!==t.value&&(t.value=o),i.defaultValue==null&&t.defaultValue!==o&&(t.defaultValue=o)),c!=null&&(t.defaultValue=""+c)}function pt(t){var i=t.textContent;i===t._wrapperState.initialValue&&i!==""&&i!==null&&(t.value=i)}function R(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function y(t,i){return t==null||t==="http://www.w3.org/1999/xhtml"?R(i):t==="http://www.w3.org/2000/svg"&&i==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var K,xe=(function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(i,o,c,d){MSApp.execUnsafeLocalFunction(function(){return t(i,o,c,d)})}:t})(function(t,i){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=i;else{for(K=K||document.createElement("div"),K.innerHTML="<svg>"+i.valueOf().toString()+"</svg>",i=K.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;i.firstChild;)t.appendChild(i.firstChild)}});function Me(t,i){if(i){var o=t.firstChild;if(o&&o===t.lastChild&&o.nodeType===3){o.nodeValue=i;return}}t.textContent=i}var Te={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Ie=["Webkit","ms","Moz","O"];Object.keys(Te).forEach(function(t){Ie.forEach(function(i){i=i+t.charAt(0).toUpperCase()+t.substring(1),Te[i]=Te[t]})});function fe(t,i,o){return i==null||typeof i=="boolean"||i===""?"":o||typeof i!="number"||i===0||Te.hasOwnProperty(t)&&Te[t]?(""+i).trim():i+"px"}function _e(t,i){t=t.style;for(var o in i)if(i.hasOwnProperty(o)){var c=o.indexOf("--")===0,d=fe(o,i[o],c);o==="float"&&(o="cssFloat"),c?t.setProperty(o,d):t[o]=d}}var ke=ue({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function We(t,i){if(i){if(ke[t]&&(i.children!=null||i.dangerouslySetInnerHTML!=null))throw Error(n(137,t));if(i.dangerouslySetInnerHTML!=null){if(i.children!=null)throw Error(n(60));if(typeof i.dangerouslySetInnerHTML!="object"||!("__html"in i.dangerouslySetInnerHTML))throw Error(n(61))}if(i.style!=null&&typeof i.style!="object")throw Error(n(62))}}function Pe(t,i){if(t.indexOf("-")===-1)return typeof i.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Ue=null;function ut(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var mt=null,wt=null,z=null;function Le(t){if(t=Uo(t)){if(typeof mt!="function")throw Error(n(280));var i=t.stateNode;i&&(i=Ca(i),mt(t.stateNode,t.type,i))}}function ge(t){wt?z?z.push(t):z=[t]:wt=t}function je(){if(wt){var t=wt,i=z;if(z=wt=null,Le(t),i)for(t=0;t<i.length;t++)Le(i[t])}}function Fe(t,i){return t(i)}function we(){}var Ze=!1;function dt(t,i,o){if(Ze)return t(i,o);Ze=!0;try{return Fe(t,i,o)}finally{Ze=!1,(wt!==null||z!==null)&&(we(),je())}}function Mt(t,i){var o=t.stateNode;if(o===null)return null;var c=Ca(o);if(c===null)return null;o=c[i];e:switch(i){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(c=!c.disabled)||(t=t.type,c=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!c;break e;default:t=!1}if(t)return null;if(o&&typeof o!="function")throw Error(n(231,i,typeof o));return o}var ye=!1;if(f)try{var Ee={};Object.defineProperty(Ee,"passive",{get:function(){ye=!0}}),window.addEventListener("test",Ee,Ee),window.removeEventListener("test",Ee,Ee)}catch{ye=!1}function pe(t,i,o,c,d,h,E,U,H){var le=Array.prototype.slice.call(arguments,3);try{i.apply(o,le)}catch(Re){this.onError(Re)}}var ve=!1,me=null,De=!1,Ve=null,et={onError:function(t){ve=!0,me=t}};function Ut(t,i,o,c,d,h,E,U,H){ve=!1,me=null,pe.apply(et,arguments)}function Yt(t,i,o,c,d,h,E,U,H){if(Ut.apply(this,arguments),ve){if(ve){var le=me;ve=!1,me=null}else throw Error(n(198));De||(De=!0,Ve=le)}}function cn(t){var i=t,o=t;if(t.alternate)for(;i.return;)i=i.return;else{t=i;do i=t,(i.flags&4098)!==0&&(o=i.return),t=i.return;while(t)}return i.tag===3?o:null}function fn(t){if(t.tag===13){var i=t.memoizedState;if(i===null&&(t=t.alternate,t!==null&&(i=t.memoizedState)),i!==null)return i.dehydrated}return null}function Ft(t){if(cn(t)!==t)throw Error(n(188))}function rn(t){var i=t.alternate;if(!i){if(i=cn(t),i===null)throw Error(n(188));return i!==t?null:t}for(var o=t,c=i;;){var d=o.return;if(d===null)break;var h=d.alternate;if(h===null){if(c=d.return,c!==null){o=c;continue}break}if(d.child===h.child){for(h=d.child;h;){if(h===o)return Ft(d),t;if(h===c)return Ft(d),i;h=h.sibling}throw Error(n(188))}if(o.return!==c.return)o=d,c=h;else{for(var E=!1,U=d.child;U;){if(U===o){E=!0,o=d,c=h;break}if(U===c){E=!0,c=d,o=h;break}U=U.sibling}if(!E){for(U=h.child;U;){if(U===o){E=!0,o=h,c=d;break}if(U===c){E=!0,c=h,o=d;break}U=U.sibling}if(!E)throw Error(n(189))}}if(o.alternate!==c)throw Error(n(190))}if(o.tag!==3)throw Error(n(188));return o.stateNode.current===o?t:i}function An(t){return t=rn(t),t!==null?Un(t):null}function Un(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var i=Un(t);if(i!==null)return i;t=t.sibling}return null}var Bi=e.unstable_scheduleCallback,nr=e.unstable_cancelCallback,Es=e.unstable_shouldYield,ws=e.unstable_requestPaint,en=e.unstable_now,ec=e.unstable_getCurrentPriorityLevel,vo=e.unstable_ImmediatePriority,A=e.unstable_UserBlockingPriority,q=e.unstable_NormalPriority,ae=e.unstable_LowPriority,re=e.unstable_IdlePriority,ie=null,He=null;function Je(t){if(He&&typeof He.onCommitFiberRoot=="function")try{He.onCommitFiberRoot(ie,t,void 0,(t.current.flags&128)===128)}catch{}}var Be=Math.clz32?Math.clz32:At,rt=Math.log,ct=Math.LN2;function At(t){return t>>>=0,t===0?32:31-(rt(t)/ct|0)|0}var bt=64,ot=4194304;function Wt(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function tn(t,i){var o=t.pendingLanes;if(o===0)return 0;var c=0,d=t.suspendedLanes,h=t.pingedLanes,E=o&268435455;if(E!==0){var U=E&~d;U!==0?c=Wt(U):(h&=E,h!==0&&(c=Wt(h)))}else E=o&~d,E!==0?c=Wt(E):h!==0&&(c=Wt(h));if(c===0)return 0;if(i!==0&&i!==c&&(i&d)===0&&(d=c&-c,h=i&-i,d>=h||d===16&&(h&4194240)!==0))return i;if((c&4)!==0&&(c|=o&16),i=t.entangledLanes,i!==0)for(t=t.entanglements,i&=c;0<i;)o=31-Be(i),d=1<<o,c|=t[o],i&=~d;return c}function un(t,i){switch(t){case 1:case 2:case 4:return i+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return i+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Kt(t,i){for(var o=t.suspendedLanes,c=t.pingedLanes,d=t.expirationTimes,h=t.pendingLanes;0<h;){var E=31-Be(h),U=1<<E,H=d[E];H===-1?((U&o)===0||(U&c)!==0)&&(d[E]=un(U,i)):H<=i&&(t.expiredLanes|=U),h&=~U}}function Sn(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function $e(){var t=bt;return bt<<=1,(bt&4194240)===0&&(bt=64),t}function Fn(t){for(var i=[],o=0;31>o;o++)i.push(t);return i}function Lt(t,i,o){t.pendingLanes|=i,i!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,i=31-Be(i),t[i]=o}function Jn(t,i){var o=t.pendingLanes&~i;t.pendingLanes=i,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=i,t.mutableReadLanes&=i,t.entangledLanes&=i,i=t.entanglements;var c=t.eventTimes;for(t=t.expirationTimes;0<o;){var d=31-Be(o),h=1<<d;i[d]=0,c[d]=-1,t[d]=-1,o&=~h}}function Qn(t,i){var o=t.entangledLanes|=i;for(t=t.entanglements;o;){var c=31-Be(o),d=1<<c;d&i|t[c]&i&&(t[c]|=i),o&=~d}}var Dt=0;function ir(t){return t&=-t,1<t?4<t?(t&268435455)!==0?16:536870912:4:1}var $t,sn,Ai,Zt,bi,zi=!1,Jr=[],Mr=null,Er=null,wr=null,xo=new Map,So=new Map,Tr=[],V0="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Nf(t,i){switch(t){case"focusin":case"focusout":Mr=null;break;case"dragenter":case"dragleave":Er=null;break;case"mouseover":case"mouseout":wr=null;break;case"pointerover":case"pointerout":xo.delete(i.pointerId);break;case"gotpointercapture":case"lostpointercapture":So.delete(i.pointerId)}}function yo(t,i,o,c,d,h){return t===null||t.nativeEvent!==h?(t={blockedOn:i,domEventName:o,eventSystemFlags:c,nativeEvent:h,targetContainers:[d]},i!==null&&(i=Uo(i),i!==null&&sn(i)),t):(t.eventSystemFlags|=c,i=t.targetContainers,d!==null&&i.indexOf(d)===-1&&i.push(d),t)}function G0(t,i,o,c,d){switch(i){case"focusin":return Mr=yo(Mr,t,i,o,c,d),!0;case"dragenter":return Er=yo(Er,t,i,o,c,d),!0;case"mouseover":return wr=yo(wr,t,i,o,c,d),!0;case"pointerover":var h=d.pointerId;return xo.set(h,yo(xo.get(h)||null,t,i,o,c,d)),!0;case"gotpointercapture":return h=d.pointerId,So.set(h,yo(So.get(h)||null,t,i,o,c,d)),!0}return!1}function Uf(t){var i=Qr(t.target);if(i!==null){var o=cn(i);if(o!==null){if(i=o.tag,i===13){if(i=fn(o),i!==null){t.blockedOn=i,bi(t.priority,function(){Ai(o)});return}}else if(i===3&&o.stateNode.current.memoizedState.isDehydrated){t.blockedOn=o.tag===3?o.stateNode.containerInfo:null;return}}}t.blockedOn=null}function pa(t){if(t.blockedOn!==null)return!1;for(var i=t.targetContainers;0<i.length;){var o=nc(t.domEventName,t.eventSystemFlags,i[0],t.nativeEvent);if(o===null){o=t.nativeEvent;var c=new o.constructor(o.type,o);Ue=c,o.target.dispatchEvent(c),Ue=null}else return i=Uo(o),i!==null&&sn(i),t.blockedOn=o,!1;i.shift()}return!0}function Ff(t,i,o){pa(t)&&o.delete(i)}function W0(){zi=!1,Mr!==null&&pa(Mr)&&(Mr=null),Er!==null&&pa(Er)&&(Er=null),wr!==null&&pa(wr)&&(wr=null),xo.forEach(Ff),So.forEach(Ff)}function Mo(t,i){t.blockedOn===i&&(t.blockedOn=null,zi||(zi=!0,e.unstable_scheduleCallback(e.unstable_NormalPriority,W0)))}function Eo(t){function i(d){return Mo(d,t)}if(0<Jr.length){Mo(Jr[0],t);for(var o=1;o<Jr.length;o++){var c=Jr[o];c.blockedOn===t&&(c.blockedOn=null)}}for(Mr!==null&&Mo(Mr,t),Er!==null&&Mo(Er,t),wr!==null&&Mo(wr,t),xo.forEach(i),So.forEach(i),o=0;o<Tr.length;o++)c=Tr[o],c.blockedOn===t&&(c.blockedOn=null);for(;0<Tr.length&&(o=Tr[0],o.blockedOn===null);)Uf(o),o.blockedOn===null&&Tr.shift()}var Ts=P.ReactCurrentBatchConfig,ma=!0;function X0(t,i,o,c){var d=Dt,h=Ts.transition;Ts.transition=null;try{Dt=1,tc(t,i,o,c)}finally{Dt=d,Ts.transition=h}}function j0(t,i,o,c){var d=Dt,h=Ts.transition;Ts.transition=null;try{Dt=4,tc(t,i,o,c)}finally{Dt=d,Ts.transition=h}}function tc(t,i,o,c){if(ma){var d=nc(t,i,o,c);if(d===null)xc(t,i,c,ga,o),Nf(t,c);else if(G0(d,t,i,o,c))c.stopPropagation();else if(Nf(t,c),i&4&&-1<V0.indexOf(t)){for(;d!==null;){var h=Uo(d);if(h!==null&&$t(h),h=nc(t,i,o,c),h===null&&xc(t,i,c,ga,o),h===d)break;d=h}d!==null&&c.stopPropagation()}else xc(t,i,c,null,o)}}var ga=null;function nc(t,i,o,c){if(ga=null,t=ut(c),t=Qr(t),t!==null)if(i=cn(t),i===null)t=null;else if(o=i.tag,o===13){if(t=fn(i),t!==null)return t;t=null}else if(o===3){if(i.stateNode.current.memoizedState.isDehydrated)return i.tag===3?i.stateNode.containerInfo:null;t=null}else i!==t&&(t=null);return ga=t,null}function Of(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(ec()){case vo:return 1;case A:return 4;case q:case ae:return 16;case re:return 536870912;default:return 16}default:return 16}}var Ar=null,ic=null,_a=null;function kf(){if(_a)return _a;var t,i=ic,o=i.length,c,d="value"in Ar?Ar.value:Ar.textContent,h=d.length;for(t=0;t<o&&i[t]===d[t];t++);var E=o-t;for(c=1;c<=E&&i[o-c]===d[h-c];c++);return _a=d.slice(t,1<c?1-c:void 0)}function va(t){var i=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&i===13&&(t=13)):t=i,t===10&&(t=13),32<=t||t===13?t:0}function xa(){return!0}function Bf(){return!1}function ci(t){function i(o,c,d,h,E){this._reactName=o,this._targetInst=d,this.type=c,this.nativeEvent=h,this.target=E,this.currentTarget=null;for(var U in t)t.hasOwnProperty(U)&&(o=t[U],this[U]=o?o(h):h[U]);return this.isDefaultPrevented=(h.defaultPrevented!=null?h.defaultPrevented:h.returnValue===!1)?xa:Bf,this.isPropagationStopped=Bf,this}return ue(i.prototype,{preventDefault:function(){this.defaultPrevented=!0;var o=this.nativeEvent;o&&(o.preventDefault?o.preventDefault():typeof o.returnValue!="unknown"&&(o.returnValue=!1),this.isDefaultPrevented=xa)},stopPropagation:function(){var o=this.nativeEvent;o&&(o.stopPropagation?o.stopPropagation():typeof o.cancelBubble!="unknown"&&(o.cancelBubble=!0),this.isPropagationStopped=xa)},persist:function(){},isPersistent:xa}),i}var As={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},rc=ci(As),wo=ue({},As,{view:0,detail:0}),Y0=ci(wo),sc,oc,To,Sa=ue({},wo,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:lc,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==To&&(To&&t.type==="mousemove"?(sc=t.screenX-To.screenX,oc=t.screenY-To.screenY):oc=sc=0,To=t),sc)},movementY:function(t){return"movementY"in t?t.movementY:oc}}),zf=ci(Sa),q0=ue({},Sa,{dataTransfer:0}),$0=ci(q0),K0=ue({},wo,{relatedTarget:0}),ac=ci(K0),Z0=ue({},As,{animationName:0,elapsedTime:0,pseudoElement:0}),J0=ci(Z0),Q0=ue({},As,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),eg=ci(Q0),tg=ue({},As,{data:0}),Hf=ci(tg),ng={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},ig={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},rg={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function sg(t){var i=this.nativeEvent;return i.getModifierState?i.getModifierState(t):(t=rg[t])?!!i[t]:!1}function lc(){return sg}var og=ue({},wo,{key:function(t){if(t.key){var i=ng[t.key]||t.key;if(i!=="Unidentified")return i}return t.type==="keypress"?(t=va(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?ig[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:lc,charCode:function(t){return t.type==="keypress"?va(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?va(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),ag=ci(og),lg=ue({},Sa,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Vf=ci(lg),cg=ue({},wo,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:lc}),ug=ci(cg),dg=ue({},As,{propertyName:0,elapsedTime:0,pseudoElement:0}),fg=ci(dg),hg=ue({},Sa,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),pg=ci(hg),mg=[9,13,27,32],cc=f&&"CompositionEvent"in window,Ao=null;f&&"documentMode"in document&&(Ao=document.documentMode);var gg=f&&"TextEvent"in window&&!Ao,Gf=f&&(!cc||Ao&&8<Ao&&11>=Ao),Wf=" ",Xf=!1;function jf(t,i){switch(t){case"keyup":return mg.indexOf(i.keyCode)!==-1;case"keydown":return i.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Yf(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var bs=!1;function _g(t,i){switch(t){case"compositionend":return Yf(i);case"keypress":return i.which!==32?null:(Xf=!0,Wf);case"textInput":return t=i.data,t===Wf&&Xf?null:t;default:return null}}function vg(t,i){if(bs)return t==="compositionend"||!cc&&jf(t,i)?(t=kf(),_a=ic=Ar=null,bs=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(i.ctrlKey||i.altKey||i.metaKey)||i.ctrlKey&&i.altKey){if(i.char&&1<i.char.length)return i.char;if(i.which)return String.fromCharCode(i.which)}return null;case"compositionend":return Gf&&i.locale!=="ko"?null:i.data;default:return null}}var xg={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function qf(t){var i=t&&t.nodeName&&t.nodeName.toLowerCase();return i==="input"?!!xg[t.type]:i==="textarea"}function $f(t,i,o,c){ge(c),i=Ta(i,"onChange"),0<i.length&&(o=new rc("onChange","change",null,o,c),t.push({event:o,listeners:i}))}var bo=null,Co=null;function Sg(t){hh(t,0)}function ya(t){var i=Ds(t);if(Nt(i))return t}function yg(t,i){if(t==="change")return i}var Kf=!1;if(f){var uc;if(f){var dc="oninput"in document;if(!dc){var Zf=document.createElement("div");Zf.setAttribute("oninput","return;"),dc=typeof Zf.oninput=="function"}uc=dc}else uc=!1;Kf=uc&&(!document.documentMode||9<document.documentMode)}function Jf(){bo&&(bo.detachEvent("onpropertychange",Qf),Co=bo=null)}function Qf(t){if(t.propertyName==="value"&&ya(Co)){var i=[];$f(i,Co,t,ut(t)),dt(Sg,i)}}function Mg(t,i,o){t==="focusin"?(Jf(),bo=i,Co=o,bo.attachEvent("onpropertychange",Qf)):t==="focusout"&&Jf()}function Eg(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return ya(Co)}function wg(t,i){if(t==="click")return ya(i)}function Tg(t,i){if(t==="input"||t==="change")return ya(i)}function Ag(t,i){return t===i&&(t!==0||1/t===1/i)||t!==t&&i!==i}var Ci=typeof Object.is=="function"?Object.is:Ag;function Ro(t,i){if(Ci(t,i))return!0;if(typeof t!="object"||t===null||typeof i!="object"||i===null)return!1;var o=Object.keys(t),c=Object.keys(i);if(o.length!==c.length)return!1;for(c=0;c<o.length;c++){var d=o[c];if(!p.call(i,d)||!Ci(t[d],i[d]))return!1}return!0}function eh(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function th(t,i){var o=eh(t);t=0;for(var c;o;){if(o.nodeType===3){if(c=t+o.textContent.length,t<=i&&c>=i)return{node:o,offset:i-t};t=c}e:{for(;o;){if(o.nextSibling){o=o.nextSibling;break e}o=o.parentNode}o=void 0}o=eh(o)}}function nh(t,i){return t&&i?t===i?!0:t&&t.nodeType===3?!1:i&&i.nodeType===3?nh(t,i.parentNode):"contains"in t?t.contains(i):t.compareDocumentPosition?!!(t.compareDocumentPosition(i)&16):!1:!1}function ih(){for(var t=window,i=_t();i instanceof t.HTMLIFrameElement;){try{var o=typeof i.contentWindow.location.href=="string"}catch{o=!1}if(o)t=i.contentWindow;else break;i=_t(t.document)}return i}function fc(t){var i=t&&t.nodeName&&t.nodeName.toLowerCase();return i&&(i==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||i==="textarea"||t.contentEditable==="true")}function bg(t){var i=ih(),o=t.focusedElem,c=t.selectionRange;if(i!==o&&o&&o.ownerDocument&&nh(o.ownerDocument.documentElement,o)){if(c!==null&&fc(o)){if(i=c.start,t=c.end,t===void 0&&(t=i),"selectionStart"in o)o.selectionStart=i,o.selectionEnd=Math.min(t,o.value.length);else if(t=(i=o.ownerDocument||document)&&i.defaultView||window,t.getSelection){t=t.getSelection();var d=o.textContent.length,h=Math.min(c.start,d);c=c.end===void 0?h:Math.min(c.end,d),!t.extend&&h>c&&(d=c,c=h,h=d),d=th(o,h);var E=th(o,c);d&&E&&(t.rangeCount!==1||t.anchorNode!==d.node||t.anchorOffset!==d.offset||t.focusNode!==E.node||t.focusOffset!==E.offset)&&(i=i.createRange(),i.setStart(d.node,d.offset),t.removeAllRanges(),h>c?(t.addRange(i),t.extend(E.node,E.offset)):(i.setEnd(E.node,E.offset),t.addRange(i)))}}for(i=[],t=o;t=t.parentNode;)t.nodeType===1&&i.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof o.focus=="function"&&o.focus(),o=0;o<i.length;o++)t=i[o],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var Cg=f&&"documentMode"in document&&11>=document.documentMode,Cs=null,hc=null,Po=null,pc=!1;function rh(t,i,o){var c=o.window===o?o.document:o.nodeType===9?o:o.ownerDocument;pc||Cs==null||Cs!==_t(c)||(c=Cs,"selectionStart"in c&&fc(c)?c={start:c.selectionStart,end:c.selectionEnd}:(c=(c.ownerDocument&&c.ownerDocument.defaultView||window).getSelection(),c={anchorNode:c.anchorNode,anchorOffset:c.anchorOffset,focusNode:c.focusNode,focusOffset:c.focusOffset}),Po&&Ro(Po,c)||(Po=c,c=Ta(hc,"onSelect"),0<c.length&&(i=new rc("onSelect","select",null,i,o),t.push({event:i,listeners:c}),i.target=Cs)))}function Ma(t,i){var o={};return o[t.toLowerCase()]=i.toLowerCase(),o["Webkit"+t]="webkit"+i,o["Moz"+t]="moz"+i,o}var Rs={animationend:Ma("Animation","AnimationEnd"),animationiteration:Ma("Animation","AnimationIteration"),animationstart:Ma("Animation","AnimationStart"),transitionend:Ma("Transition","TransitionEnd")},mc={},sh={};f&&(sh=document.createElement("div").style,"AnimationEvent"in window||(delete Rs.animationend.animation,delete Rs.animationiteration.animation,delete Rs.animationstart.animation),"TransitionEvent"in window||delete Rs.transitionend.transition);function Ea(t){if(mc[t])return mc[t];if(!Rs[t])return t;var i=Rs[t],o;for(o in i)if(i.hasOwnProperty(o)&&o in sh)return mc[t]=i[o];return t}var oh=Ea("animationend"),ah=Ea("animationiteration"),lh=Ea("animationstart"),ch=Ea("transitionend"),uh=new Map,dh="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function br(t,i){uh.set(t,i),l(i,[t])}for(var gc=0;gc<dh.length;gc++){var _c=dh[gc],Rg=_c.toLowerCase(),Pg=_c[0].toUpperCase()+_c.slice(1);br(Rg,"on"+Pg)}br(oh,"onAnimationEnd"),br(ah,"onAnimationIteration"),br(lh,"onAnimationStart"),br("dblclick","onDoubleClick"),br("focusin","onFocus"),br("focusout","onBlur"),br(ch,"onTransitionEnd"),u("onMouseEnter",["mouseout","mouseover"]),u("onMouseLeave",["mouseout","mouseover"]),u("onPointerEnter",["pointerout","pointerover"]),u("onPointerLeave",["pointerout","pointerover"]),l("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),l("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),l("onBeforeInput",["compositionend","keypress","textInput","paste"]),l("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),l("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),l("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Lo="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Lg=new Set("cancel close invalid load scroll toggle".split(" ").concat(Lo));function fh(t,i,o){var c=t.type||"unknown-event";t.currentTarget=o,Yt(c,i,void 0,t),t.currentTarget=null}function hh(t,i){i=(i&4)!==0;for(var o=0;o<t.length;o++){var c=t[o],d=c.event;c=c.listeners;e:{var h=void 0;if(i)for(var E=c.length-1;0<=E;E--){var U=c[E],H=U.instance,le=U.currentTarget;if(U=U.listener,H!==h&&d.isPropagationStopped())break e;fh(d,U,le),h=H}else for(E=0;E<c.length;E++){if(U=c[E],H=U.instance,le=U.currentTarget,U=U.listener,H!==h&&d.isPropagationStopped())break e;fh(d,U,le),h=H}}}if(De)throw t=Ve,De=!1,Ve=null,t}function on(t,i){var o=i[Tc];o===void 0&&(o=i[Tc]=new Set);var c=t+"__bubble";o.has(c)||(ph(i,t,2,!1),o.add(c))}function vc(t,i,o){var c=0;i&&(c|=4),ph(o,t,c,i)}var wa="_reactListening"+Math.random().toString(36).slice(2);function Do(t){if(!t[wa]){t[wa]=!0,s.forEach(function(o){o!=="selectionchange"&&(Lg.has(o)||vc(o,!1,t),vc(o,!0,t))});var i=t.nodeType===9?t:t.ownerDocument;i===null||i[wa]||(i[wa]=!0,vc("selectionchange",!1,i))}}function ph(t,i,o,c){switch(Of(i)){case 1:var d=X0;break;case 4:d=j0;break;default:d=tc}o=d.bind(null,i,o,t),d=void 0,!ye||i!=="touchstart"&&i!=="touchmove"&&i!=="wheel"||(d=!0),c?d!==void 0?t.addEventListener(i,o,{capture:!0,passive:d}):t.addEventListener(i,o,!0):d!==void 0?t.addEventListener(i,o,{passive:d}):t.addEventListener(i,o,!1)}function xc(t,i,o,c,d){var h=c;if((i&1)===0&&(i&2)===0&&c!==null)e:for(;;){if(c===null)return;var E=c.tag;if(E===3||E===4){var U=c.stateNode.containerInfo;if(U===d||U.nodeType===8&&U.parentNode===d)break;if(E===4)for(E=c.return;E!==null;){var H=E.tag;if((H===3||H===4)&&(H=E.stateNode.containerInfo,H===d||H.nodeType===8&&H.parentNode===d))return;E=E.return}for(;U!==null;){if(E=Qr(U),E===null)return;if(H=E.tag,H===5||H===6){c=h=E;continue e}U=U.parentNode}}c=c.return}dt(function(){var le=h,Re=ut(o),Ne=[];e:{var Ce=uh.get(t);if(Ce!==void 0){var Ke=rc,nt=t;switch(t){case"keypress":if(va(o)===0)break e;case"keydown":case"keyup":Ke=ag;break;case"focusin":nt="focus",Ke=ac;break;case"focusout":nt="blur",Ke=ac;break;case"beforeblur":case"afterblur":Ke=ac;break;case"click":if(o.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":Ke=zf;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":Ke=$0;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":Ke=ug;break;case oh:case ah:case lh:Ke=J0;break;case ch:Ke=fg;break;case"scroll":Ke=Y0;break;case"wheel":Ke=pg;break;case"copy":case"cut":case"paste":Ke=eg;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":Ke=Vf}var st=(i&4)!==0,vn=!st&&t==="scroll",ee=st?Ce!==null?Ce+"Capture":null:Ce;st=[];for(var X=le,se;X!==null;){se=X;var Oe=se.stateNode;if(se.tag===5&&Oe!==null&&(se=Oe,ee!==null&&(Oe=Mt(X,ee),Oe!=null&&st.push(Io(X,Oe,se)))),vn)break;X=X.return}0<st.length&&(Ce=new Ke(Ce,nt,null,o,Re),Ne.push({event:Ce,listeners:st}))}}if((i&7)===0){e:{if(Ce=t==="mouseover"||t==="pointerover",Ke=t==="mouseout"||t==="pointerout",Ce&&o!==Ue&&(nt=o.relatedTarget||o.fromElement)&&(Qr(nt)||nt[rr]))break e;if((Ke||Ce)&&(Ce=Re.window===Re?Re:(Ce=Re.ownerDocument)?Ce.defaultView||Ce.parentWindow:window,Ke?(nt=o.relatedTarget||o.toElement,Ke=le,nt=nt?Qr(nt):null,nt!==null&&(vn=cn(nt),nt!==vn||nt.tag!==5&&nt.tag!==6)&&(nt=null)):(Ke=null,nt=le),Ke!==nt)){if(st=zf,Oe="onMouseLeave",ee="onMouseEnter",X="mouse",(t==="pointerout"||t==="pointerover")&&(st=Vf,Oe="onPointerLeave",ee="onPointerEnter",X="pointer"),vn=Ke==null?Ce:Ds(Ke),se=nt==null?Ce:Ds(nt),Ce=new st(Oe,X+"leave",Ke,o,Re),Ce.target=vn,Ce.relatedTarget=se,Oe=null,Qr(Re)===le&&(st=new st(ee,X+"enter",nt,o,Re),st.target=se,st.relatedTarget=vn,Oe=st),vn=Oe,Ke&&nt)t:{for(st=Ke,ee=nt,X=0,se=st;se;se=Ps(se))X++;for(se=0,Oe=ee;Oe;Oe=Ps(Oe))se++;for(;0<X-se;)st=Ps(st),X--;for(;0<se-X;)ee=Ps(ee),se--;for(;X--;){if(st===ee||ee!==null&&st===ee.alternate)break t;st=Ps(st),ee=Ps(ee)}st=null}else st=null;Ke!==null&&mh(Ne,Ce,Ke,st,!1),nt!==null&&vn!==null&&mh(Ne,vn,nt,st,!0)}}e:{if(Ce=le?Ds(le):window,Ke=Ce.nodeName&&Ce.nodeName.toLowerCase(),Ke==="select"||Ke==="input"&&Ce.type==="file")var lt=yg;else if(qf(Ce))if(Kf)lt=Tg;else{lt=Eg;var ft=Mg}else(Ke=Ce.nodeName)&&Ke.toLowerCase()==="input"&&(Ce.type==="checkbox"||Ce.type==="radio")&&(lt=wg);if(lt&&(lt=lt(t,le))){$f(Ne,lt,o,Re);break e}ft&&ft(t,Ce,le),t==="focusout"&&(ft=Ce._wrapperState)&&ft.controlled&&Ce.type==="number"&&ln(Ce,"number",Ce.value)}switch(ft=le?Ds(le):window,t){case"focusin":(qf(ft)||ft.contentEditable==="true")&&(Cs=ft,hc=le,Po=null);break;case"focusout":Po=hc=Cs=null;break;case"mousedown":pc=!0;break;case"contextmenu":case"mouseup":case"dragend":pc=!1,rh(Ne,o,Re);break;case"selectionchange":if(Cg)break;case"keydown":case"keyup":rh(Ne,o,Re)}var ht;if(cc)e:{switch(t){case"compositionstart":var xt="onCompositionStart";break e;case"compositionend":xt="onCompositionEnd";break e;case"compositionupdate":xt="onCompositionUpdate";break e}xt=void 0}else bs?jf(t,o)&&(xt="onCompositionEnd"):t==="keydown"&&o.keyCode===229&&(xt="onCompositionStart");xt&&(Gf&&o.locale!=="ko"&&(bs||xt!=="onCompositionStart"?xt==="onCompositionEnd"&&bs&&(ht=kf()):(Ar=Re,ic="value"in Ar?Ar.value:Ar.textContent,bs=!0)),ft=Ta(le,xt),0<ft.length&&(xt=new Hf(xt,t,null,o,Re),Ne.push({event:xt,listeners:ft}),ht?xt.data=ht:(ht=Yf(o),ht!==null&&(xt.data=ht)))),(ht=gg?_g(t,o):vg(t,o))&&(le=Ta(le,"onBeforeInput"),0<le.length&&(Re=new Hf("onBeforeInput","beforeinput",null,o,Re),Ne.push({event:Re,listeners:le}),Re.data=ht))}hh(Ne,i)})}function Io(t,i,o){return{instance:t,listener:i,currentTarget:o}}function Ta(t,i){for(var o=i+"Capture",c=[];t!==null;){var d=t,h=d.stateNode;d.tag===5&&h!==null&&(d=h,h=Mt(t,o),h!=null&&c.unshift(Io(t,h,d)),h=Mt(t,i),h!=null&&c.push(Io(t,h,d))),t=t.return}return c}function Ps(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function mh(t,i,o,c,d){for(var h=i._reactName,E=[];o!==null&&o!==c;){var U=o,H=U.alternate,le=U.stateNode;if(H!==null&&H===c)break;U.tag===5&&le!==null&&(U=le,d?(H=Mt(o,h),H!=null&&E.unshift(Io(o,H,U))):d||(H=Mt(o,h),H!=null&&E.push(Io(o,H,U)))),o=o.return}E.length!==0&&t.push({event:i,listeners:E})}var Dg=/\r\n?/g,Ig=/\u0000|\uFFFD/g;function gh(t){return(typeof t=="string"?t:""+t).replace(Dg,`
`).replace(Ig,"")}function Aa(t,i,o){if(i=gh(i),gh(t)!==i&&o)throw Error(n(425))}function ba(){}var Sc=null,yc=null;function Mc(t,i){return t==="textarea"||t==="noscript"||typeof i.children=="string"||typeof i.children=="number"||typeof i.dangerouslySetInnerHTML=="object"&&i.dangerouslySetInnerHTML!==null&&i.dangerouslySetInnerHTML.__html!=null}var Ec=typeof setTimeout=="function"?setTimeout:void 0,Ng=typeof clearTimeout=="function"?clearTimeout:void 0,_h=typeof Promise=="function"?Promise:void 0,Ug=typeof queueMicrotask=="function"?queueMicrotask:typeof _h<"u"?function(t){return _h.resolve(null).then(t).catch(Fg)}:Ec;function Fg(t){setTimeout(function(){throw t})}function wc(t,i){var o=i,c=0;do{var d=o.nextSibling;if(t.removeChild(o),d&&d.nodeType===8)if(o=d.data,o==="/$"){if(c===0){t.removeChild(d),Eo(i);return}c--}else o!=="$"&&o!=="$?"&&o!=="$!"||c++;o=d}while(o);Eo(i)}function Cr(t){for(;t!=null;t=t.nextSibling){var i=t.nodeType;if(i===1||i===3)break;if(i===8){if(i=t.data,i==="$"||i==="$!"||i==="$?")break;if(i==="/$")return null}}return t}function vh(t){t=t.previousSibling;for(var i=0;t;){if(t.nodeType===8){var o=t.data;if(o==="$"||o==="$!"||o==="$?"){if(i===0)return t;i--}else o==="/$"&&i++}t=t.previousSibling}return null}var Ls=Math.random().toString(36).slice(2),Hi="__reactFiber$"+Ls,No="__reactProps$"+Ls,rr="__reactContainer$"+Ls,Tc="__reactEvents$"+Ls,Og="__reactListeners$"+Ls,kg="__reactHandles$"+Ls;function Qr(t){var i=t[Hi];if(i)return i;for(var o=t.parentNode;o;){if(i=o[rr]||o[Hi]){if(o=i.alternate,i.child!==null||o!==null&&o.child!==null)for(t=vh(t);t!==null;){if(o=t[Hi])return o;t=vh(t)}return i}t=o,o=t.parentNode}return null}function Uo(t){return t=t[Hi]||t[rr],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function Ds(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(n(33))}function Ca(t){return t[No]||null}var Ac=[],Is=-1;function Rr(t){return{current:t}}function an(t){0>Is||(t.current=Ac[Is],Ac[Is]=null,Is--)}function nn(t,i){Is++,Ac[Is]=t.current,t.current=i}var Pr={},zn=Rr(Pr),ei=Rr(!1),es=Pr;function Ns(t,i){var o=t.type.contextTypes;if(!o)return Pr;var c=t.stateNode;if(c&&c.__reactInternalMemoizedUnmaskedChildContext===i)return c.__reactInternalMemoizedMaskedChildContext;var d={},h;for(h in o)d[h]=i[h];return c&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=i,t.__reactInternalMemoizedMaskedChildContext=d),d}function ti(t){return t=t.childContextTypes,t!=null}function Ra(){an(ei),an(zn)}function xh(t,i,o){if(zn.current!==Pr)throw Error(n(168));nn(zn,i),nn(ei,o)}function Sh(t,i,o){var c=t.stateNode;if(i=i.childContextTypes,typeof c.getChildContext!="function")return o;c=c.getChildContext();for(var d in c)if(!(d in i))throw Error(n(108,Ae(t)||"Unknown",d));return ue({},o,c)}function Pa(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||Pr,es=zn.current,nn(zn,t),nn(ei,ei.current),!0}function yh(t,i,o){var c=t.stateNode;if(!c)throw Error(n(169));o?(t=Sh(t,i,es),c.__reactInternalMemoizedMergedChildContext=t,an(ei),an(zn),nn(zn,t)):an(ei),nn(ei,o)}var sr=null,La=!1,bc=!1;function Mh(t){sr===null?sr=[t]:sr.push(t)}function Bg(t){La=!0,Mh(t)}function Lr(){if(!bc&&sr!==null){bc=!0;var t=0,i=Dt;try{var o=sr;for(Dt=1;t<o.length;t++){var c=o[t];do c=c(!0);while(c!==null)}sr=null,La=!1}catch(d){throw sr!==null&&(sr=sr.slice(t+1)),Bi(vo,Lr),d}finally{Dt=i,bc=!1}}return null}var Us=[],Fs=0,Da=null,Ia=0,vi=[],xi=0,ts=null,or=1,ar="";function ns(t,i){Us[Fs++]=Ia,Us[Fs++]=Da,Da=t,Ia=i}function Eh(t,i,o){vi[xi++]=or,vi[xi++]=ar,vi[xi++]=ts,ts=t;var c=or;t=ar;var d=32-Be(c)-1;c&=~(1<<d),o+=1;var h=32-Be(i)+d;if(30<h){var E=d-d%5;h=(c&(1<<E)-1).toString(32),c>>=E,d-=E,or=1<<32-Be(i)+d|o<<d|c,ar=h+t}else or=1<<h|o<<d|c,ar=t}function Cc(t){t.return!==null&&(ns(t,1),Eh(t,1,0))}function Rc(t){for(;t===Da;)Da=Us[--Fs],Us[Fs]=null,Ia=Us[--Fs],Us[Fs]=null;for(;t===ts;)ts=vi[--xi],vi[xi]=null,ar=vi[--xi],vi[xi]=null,or=vi[--xi],vi[xi]=null}var ui=null,di=null,dn=!1,Ri=null;function wh(t,i){var o=Ei(5,null,null,0);o.elementType="DELETED",o.stateNode=i,o.return=t,i=t.deletions,i===null?(t.deletions=[o],t.flags|=16):i.push(o)}function Th(t,i){switch(t.tag){case 5:var o=t.type;return i=i.nodeType!==1||o.toLowerCase()!==i.nodeName.toLowerCase()?null:i,i!==null?(t.stateNode=i,ui=t,di=Cr(i.firstChild),!0):!1;case 6:return i=t.pendingProps===""||i.nodeType!==3?null:i,i!==null?(t.stateNode=i,ui=t,di=null,!0):!1;case 13:return i=i.nodeType!==8?null:i,i!==null?(o=ts!==null?{id:or,overflow:ar}:null,t.memoizedState={dehydrated:i,treeContext:o,retryLane:1073741824},o=Ei(18,null,null,0),o.stateNode=i,o.return=t,t.child=o,ui=t,di=null,!0):!1;default:return!1}}function Pc(t){return(t.mode&1)!==0&&(t.flags&128)===0}function Lc(t){if(dn){var i=di;if(i){var o=i;if(!Th(t,i)){if(Pc(t))throw Error(n(418));i=Cr(o.nextSibling);var c=ui;i&&Th(t,i)?wh(c,o):(t.flags=t.flags&-4097|2,dn=!1,ui=t)}}else{if(Pc(t))throw Error(n(418));t.flags=t.flags&-4097|2,dn=!1,ui=t}}}function Ah(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;ui=t}function Na(t){if(t!==ui)return!1;if(!dn)return Ah(t),dn=!0,!1;var i;if((i=t.tag!==3)&&!(i=t.tag!==5)&&(i=t.type,i=i!=="head"&&i!=="body"&&!Mc(t.type,t.memoizedProps)),i&&(i=di)){if(Pc(t))throw bh(),Error(n(418));for(;i;)wh(t,i),i=Cr(i.nextSibling)}if(Ah(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(n(317));e:{for(t=t.nextSibling,i=0;t;){if(t.nodeType===8){var o=t.data;if(o==="/$"){if(i===0){di=Cr(t.nextSibling);break e}i--}else o!=="$"&&o!=="$!"&&o!=="$?"||i++}t=t.nextSibling}di=null}}else di=ui?Cr(t.stateNode.nextSibling):null;return!0}function bh(){for(var t=di;t;)t=Cr(t.nextSibling)}function Os(){di=ui=null,dn=!1}function Dc(t){Ri===null?Ri=[t]:Ri.push(t)}var zg=P.ReactCurrentBatchConfig;function Fo(t,i,o){if(t=o.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(o._owner){if(o=o._owner,o){if(o.tag!==1)throw Error(n(309));var c=o.stateNode}if(!c)throw Error(n(147,t));var d=c,h=""+t;return i!==null&&i.ref!==null&&typeof i.ref=="function"&&i.ref._stringRef===h?i.ref:(i=function(E){var U=d.refs;E===null?delete U[h]:U[h]=E},i._stringRef=h,i)}if(typeof t!="string")throw Error(n(284));if(!o._owner)throw Error(n(290,t))}return t}function Ua(t,i){throw t=Object.prototype.toString.call(i),Error(n(31,t==="[object Object]"?"object with keys {"+Object.keys(i).join(", ")+"}":t))}function Ch(t){var i=t._init;return i(t._payload)}function Rh(t){function i(ee,X){if(t){var se=ee.deletions;se===null?(ee.deletions=[X],ee.flags|=16):se.push(X)}}function o(ee,X){if(!t)return null;for(;X!==null;)i(ee,X),X=X.sibling;return null}function c(ee,X){for(ee=new Map;X!==null;)X.key!==null?ee.set(X.key,X):ee.set(X.index,X),X=X.sibling;return ee}function d(ee,X){return ee=Br(ee,X),ee.index=0,ee.sibling=null,ee}function h(ee,X,se){return ee.index=se,t?(se=ee.alternate,se!==null?(se=se.index,se<X?(ee.flags|=2,X):se):(ee.flags|=2,X)):(ee.flags|=1048576,X)}function E(ee){return t&&ee.alternate===null&&(ee.flags|=2),ee}function U(ee,X,se,Oe){return X===null||X.tag!==6?(X=Eu(se,ee.mode,Oe),X.return=ee,X):(X=d(X,se),X.return=ee,X)}function H(ee,X,se,Oe){var lt=se.type;return lt===k?Re(ee,X,se.props.children,Oe,se.key):X!==null&&(X.elementType===lt||typeof lt=="object"&&lt!==null&&lt.$$typeof===te&&Ch(lt)===X.type)?(Oe=d(X,se.props),Oe.ref=Fo(ee,X,se),Oe.return=ee,Oe):(Oe=sl(se.type,se.key,se.props,null,ee.mode,Oe),Oe.ref=Fo(ee,X,se),Oe.return=ee,Oe)}function le(ee,X,se,Oe){return X===null||X.tag!==4||X.stateNode.containerInfo!==se.containerInfo||X.stateNode.implementation!==se.implementation?(X=wu(se,ee.mode,Oe),X.return=ee,X):(X=d(X,se.children||[]),X.return=ee,X)}function Re(ee,X,se,Oe,lt){return X===null||X.tag!==7?(X=us(se,ee.mode,Oe,lt),X.return=ee,X):(X=d(X,se),X.return=ee,X)}function Ne(ee,X,se){if(typeof X=="string"&&X!==""||typeof X=="number")return X=Eu(""+X,ee.mode,se),X.return=ee,X;if(typeof X=="object"&&X!==null){switch(X.$$typeof){case B:return se=sl(X.type,X.key,X.props,null,ee.mode,se),se.ref=Fo(ee,null,X),se.return=ee,se;case I:return X=wu(X,ee.mode,se),X.return=ee,X;case te:var Oe=X._init;return Ne(ee,Oe(X._payload),se)}if(G(X)||ce(X))return X=us(X,ee.mode,se,null),X.return=ee,X;Ua(ee,X)}return null}function Ce(ee,X,se,Oe){var lt=X!==null?X.key:null;if(typeof se=="string"&&se!==""||typeof se=="number")return lt!==null?null:U(ee,X,""+se,Oe);if(typeof se=="object"&&se!==null){switch(se.$$typeof){case B:return se.key===lt?H(ee,X,se,Oe):null;case I:return se.key===lt?le(ee,X,se,Oe):null;case te:return lt=se._init,Ce(ee,X,lt(se._payload),Oe)}if(G(se)||ce(se))return lt!==null?null:Re(ee,X,se,Oe,null);Ua(ee,se)}return null}function Ke(ee,X,se,Oe,lt){if(typeof Oe=="string"&&Oe!==""||typeof Oe=="number")return ee=ee.get(se)||null,U(X,ee,""+Oe,lt);if(typeof Oe=="object"&&Oe!==null){switch(Oe.$$typeof){case B:return ee=ee.get(Oe.key===null?se:Oe.key)||null,H(X,ee,Oe,lt);case I:return ee=ee.get(Oe.key===null?se:Oe.key)||null,le(X,ee,Oe,lt);case te:var ft=Oe._init;return Ke(ee,X,se,ft(Oe._payload),lt)}if(G(Oe)||ce(Oe))return ee=ee.get(se)||null,Re(X,ee,Oe,lt,null);Ua(X,Oe)}return null}function nt(ee,X,se,Oe){for(var lt=null,ft=null,ht=X,xt=X=0,In=null;ht!==null&&xt<se.length;xt++){ht.index>xt?(In=ht,ht=null):In=ht.sibling;var qt=Ce(ee,ht,se[xt],Oe);if(qt===null){ht===null&&(ht=In);break}t&&ht&&qt.alternate===null&&i(ee,ht),X=h(qt,X,xt),ft===null?lt=qt:ft.sibling=qt,ft=qt,ht=In}if(xt===se.length)return o(ee,ht),dn&&ns(ee,xt),lt;if(ht===null){for(;xt<se.length;xt++)ht=Ne(ee,se[xt],Oe),ht!==null&&(X=h(ht,X,xt),ft===null?lt=ht:ft.sibling=ht,ft=ht);return dn&&ns(ee,xt),lt}for(ht=c(ee,ht);xt<se.length;xt++)In=Ke(ht,ee,xt,se[xt],Oe),In!==null&&(t&&In.alternate!==null&&ht.delete(In.key===null?xt:In.key),X=h(In,X,xt),ft===null?lt=In:ft.sibling=In,ft=In);return t&&ht.forEach(function(zr){return i(ee,zr)}),dn&&ns(ee,xt),lt}function st(ee,X,se,Oe){var lt=ce(se);if(typeof lt!="function")throw Error(n(150));if(se=lt.call(se),se==null)throw Error(n(151));for(var ft=lt=null,ht=X,xt=X=0,In=null,qt=se.next();ht!==null&&!qt.done;xt++,qt=se.next()){ht.index>xt?(In=ht,ht=null):In=ht.sibling;var zr=Ce(ee,ht,qt.value,Oe);if(zr===null){ht===null&&(ht=In);break}t&&ht&&zr.alternate===null&&i(ee,ht),X=h(zr,X,xt),ft===null?lt=zr:ft.sibling=zr,ft=zr,ht=In}if(qt.done)return o(ee,ht),dn&&ns(ee,xt),lt;if(ht===null){for(;!qt.done;xt++,qt=se.next())qt=Ne(ee,qt.value,Oe),qt!==null&&(X=h(qt,X,xt),ft===null?lt=qt:ft.sibling=qt,ft=qt);return dn&&ns(ee,xt),lt}for(ht=c(ee,ht);!qt.done;xt++,qt=se.next())qt=Ke(ht,ee,xt,qt.value,Oe),qt!==null&&(t&&qt.alternate!==null&&ht.delete(qt.key===null?xt:qt.key),X=h(qt,X,xt),ft===null?lt=qt:ft.sibling=qt,ft=qt);return t&&ht.forEach(function(x_){return i(ee,x_)}),dn&&ns(ee,xt),lt}function vn(ee,X,se,Oe){if(typeof se=="object"&&se!==null&&se.type===k&&se.key===null&&(se=se.props.children),typeof se=="object"&&se!==null){switch(se.$$typeof){case B:e:{for(var lt=se.key,ft=X;ft!==null;){if(ft.key===lt){if(lt=se.type,lt===k){if(ft.tag===7){o(ee,ft.sibling),X=d(ft,se.props.children),X.return=ee,ee=X;break e}}else if(ft.elementType===lt||typeof lt=="object"&&lt!==null&&lt.$$typeof===te&&Ch(lt)===ft.type){o(ee,ft.sibling),X=d(ft,se.props),X.ref=Fo(ee,ft,se),X.return=ee,ee=X;break e}o(ee,ft);break}else i(ee,ft);ft=ft.sibling}se.type===k?(X=us(se.props.children,ee.mode,Oe,se.key),X.return=ee,ee=X):(Oe=sl(se.type,se.key,se.props,null,ee.mode,Oe),Oe.ref=Fo(ee,X,se),Oe.return=ee,ee=Oe)}return E(ee);case I:e:{for(ft=se.key;X!==null;){if(X.key===ft)if(X.tag===4&&X.stateNode.containerInfo===se.containerInfo&&X.stateNode.implementation===se.implementation){o(ee,X.sibling),X=d(X,se.children||[]),X.return=ee,ee=X;break e}else{o(ee,X);break}else i(ee,X);X=X.sibling}X=wu(se,ee.mode,Oe),X.return=ee,ee=X}return E(ee);case te:return ft=se._init,vn(ee,X,ft(se._payload),Oe)}if(G(se))return nt(ee,X,se,Oe);if(ce(se))return st(ee,X,se,Oe);Ua(ee,se)}return typeof se=="string"&&se!==""||typeof se=="number"?(se=""+se,X!==null&&X.tag===6?(o(ee,X.sibling),X=d(X,se),X.return=ee,ee=X):(o(ee,X),X=Eu(se,ee.mode,Oe),X.return=ee,ee=X),E(ee)):o(ee,X)}return vn}var ks=Rh(!0),Ph=Rh(!1),Fa=Rr(null),Oa=null,Bs=null,Ic=null;function Nc(){Ic=Bs=Oa=null}function Uc(t){var i=Fa.current;an(Fa),t._currentValue=i}function Fc(t,i,o){for(;t!==null;){var c=t.alternate;if((t.childLanes&i)!==i?(t.childLanes|=i,c!==null&&(c.childLanes|=i)):c!==null&&(c.childLanes&i)!==i&&(c.childLanes|=i),t===o)break;t=t.return}}function zs(t,i){Oa=t,Ic=Bs=null,t=t.dependencies,t!==null&&t.firstContext!==null&&((t.lanes&i)!==0&&(ni=!0),t.firstContext=null)}function Si(t){var i=t._currentValue;if(Ic!==t)if(t={context:t,memoizedValue:i,next:null},Bs===null){if(Oa===null)throw Error(n(308));Bs=t,Oa.dependencies={lanes:0,firstContext:t}}else Bs=Bs.next=t;return i}var is=null;function Oc(t){is===null?is=[t]:is.push(t)}function Lh(t,i,o,c){var d=i.interleaved;return d===null?(o.next=o,Oc(i)):(o.next=d.next,d.next=o),i.interleaved=o,lr(t,c)}function lr(t,i){t.lanes|=i;var o=t.alternate;for(o!==null&&(o.lanes|=i),o=t,t=t.return;t!==null;)t.childLanes|=i,o=t.alternate,o!==null&&(o.childLanes|=i),o=t,t=t.return;return o.tag===3?o.stateNode:null}var Dr=!1;function kc(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Dh(t,i){t=t.updateQueue,i.updateQueue===t&&(i.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function cr(t,i){return{eventTime:t,lane:i,tag:0,payload:null,callback:null,next:null}}function Ir(t,i,o){var c=t.updateQueue;if(c===null)return null;if(c=c.shared,(jt&2)!==0){var d=c.pending;return d===null?i.next=i:(i.next=d.next,d.next=i),c.pending=i,lr(t,o)}return d=c.interleaved,d===null?(i.next=i,Oc(c)):(i.next=d.next,d.next=i),c.interleaved=i,lr(t,o)}function ka(t,i,o){if(i=i.updateQueue,i!==null&&(i=i.shared,(o&4194240)!==0)){var c=i.lanes;c&=t.pendingLanes,o|=c,i.lanes=o,Qn(t,o)}}function Ih(t,i){var o=t.updateQueue,c=t.alternate;if(c!==null&&(c=c.updateQueue,o===c)){var d=null,h=null;if(o=o.firstBaseUpdate,o!==null){do{var E={eventTime:o.eventTime,lane:o.lane,tag:o.tag,payload:o.payload,callback:o.callback,next:null};h===null?d=h=E:h=h.next=E,o=o.next}while(o!==null);h===null?d=h=i:h=h.next=i}else d=h=i;o={baseState:c.baseState,firstBaseUpdate:d,lastBaseUpdate:h,shared:c.shared,effects:c.effects},t.updateQueue=o;return}t=o.lastBaseUpdate,t===null?o.firstBaseUpdate=i:t.next=i,o.lastBaseUpdate=i}function Ba(t,i,o,c){var d=t.updateQueue;Dr=!1;var h=d.firstBaseUpdate,E=d.lastBaseUpdate,U=d.shared.pending;if(U!==null){d.shared.pending=null;var H=U,le=H.next;H.next=null,E===null?h=le:E.next=le,E=H;var Re=t.alternate;Re!==null&&(Re=Re.updateQueue,U=Re.lastBaseUpdate,U!==E&&(U===null?Re.firstBaseUpdate=le:U.next=le,Re.lastBaseUpdate=H))}if(h!==null){var Ne=d.baseState;E=0,Re=le=H=null,U=h;do{var Ce=U.lane,Ke=U.eventTime;if((c&Ce)===Ce){Re!==null&&(Re=Re.next={eventTime:Ke,lane:0,tag:U.tag,payload:U.payload,callback:U.callback,next:null});e:{var nt=t,st=U;switch(Ce=i,Ke=o,st.tag){case 1:if(nt=st.payload,typeof nt=="function"){Ne=nt.call(Ke,Ne,Ce);break e}Ne=nt;break e;case 3:nt.flags=nt.flags&-65537|128;case 0:if(nt=st.payload,Ce=typeof nt=="function"?nt.call(Ke,Ne,Ce):nt,Ce==null)break e;Ne=ue({},Ne,Ce);break e;case 2:Dr=!0}}U.callback!==null&&U.lane!==0&&(t.flags|=64,Ce=d.effects,Ce===null?d.effects=[U]:Ce.push(U))}else Ke={eventTime:Ke,lane:Ce,tag:U.tag,payload:U.payload,callback:U.callback,next:null},Re===null?(le=Re=Ke,H=Ne):Re=Re.next=Ke,E|=Ce;if(U=U.next,U===null){if(U=d.shared.pending,U===null)break;Ce=U,U=Ce.next,Ce.next=null,d.lastBaseUpdate=Ce,d.shared.pending=null}}while(!0);if(Re===null&&(H=Ne),d.baseState=H,d.firstBaseUpdate=le,d.lastBaseUpdate=Re,i=d.shared.interleaved,i!==null){d=i;do E|=d.lane,d=d.next;while(d!==i)}else h===null&&(d.shared.lanes=0);os|=E,t.lanes=E,t.memoizedState=Ne}}function Nh(t,i,o){if(t=i.effects,i.effects=null,t!==null)for(i=0;i<t.length;i++){var c=t[i],d=c.callback;if(d!==null){if(c.callback=null,c=o,typeof d!="function")throw Error(n(191,d));d.call(c)}}}var Oo={},Vi=Rr(Oo),ko=Rr(Oo),Bo=Rr(Oo);function rs(t){if(t===Oo)throw Error(n(174));return t}function Bc(t,i){switch(nn(Bo,i),nn(ko,t),nn(Vi,Oo),t=i.nodeType,t){case 9:case 11:i=(i=i.documentElement)?i.namespaceURI:y(null,"");break;default:t=t===8?i.parentNode:i,i=t.namespaceURI||null,t=t.tagName,i=y(i,t)}an(Vi),nn(Vi,i)}function Hs(){an(Vi),an(ko),an(Bo)}function Uh(t){rs(Bo.current);var i=rs(Vi.current),o=y(i,t.type);i!==o&&(nn(ko,t),nn(Vi,o))}function zc(t){ko.current===t&&(an(Vi),an(ko))}var hn=Rr(0);function za(t){for(var i=t;i!==null;){if(i.tag===13){var o=i.memoizedState;if(o!==null&&(o=o.dehydrated,o===null||o.data==="$?"||o.data==="$!"))return i}else if(i.tag===19&&i.memoizedProps.revealOrder!==void 0){if((i.flags&128)!==0)return i}else if(i.child!==null){i.child.return=i,i=i.child;continue}if(i===t)break;for(;i.sibling===null;){if(i.return===null||i.return===t)return null;i=i.return}i.sibling.return=i.return,i=i.sibling}return null}var Hc=[];function Vc(){for(var t=0;t<Hc.length;t++)Hc[t]._workInProgressVersionPrimary=null;Hc.length=0}var Ha=P.ReactCurrentDispatcher,Gc=P.ReactCurrentBatchConfig,ss=0,pn=null,bn=null,Ln=null,Va=!1,zo=!1,Ho=0,Hg=0;function Hn(){throw Error(n(321))}function Wc(t,i){if(i===null)return!1;for(var o=0;o<i.length&&o<t.length;o++)if(!Ci(t[o],i[o]))return!1;return!0}function Xc(t,i,o,c,d,h){if(ss=h,pn=i,i.memoizedState=null,i.updateQueue=null,i.lanes=0,Ha.current=t===null||t.memoizedState===null?Xg:jg,t=o(c,d),zo){h=0;do{if(zo=!1,Ho=0,25<=h)throw Error(n(301));h+=1,Ln=bn=null,i.updateQueue=null,Ha.current=Yg,t=o(c,d)}while(zo)}if(Ha.current=Xa,i=bn!==null&&bn.next!==null,ss=0,Ln=bn=pn=null,Va=!1,i)throw Error(n(300));return t}function jc(){var t=Ho!==0;return Ho=0,t}function Gi(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Ln===null?pn.memoizedState=Ln=t:Ln=Ln.next=t,Ln}function yi(){if(bn===null){var t=pn.alternate;t=t!==null?t.memoizedState:null}else t=bn.next;var i=Ln===null?pn.memoizedState:Ln.next;if(i!==null)Ln=i,bn=t;else{if(t===null)throw Error(n(310));bn=t,t={memoizedState:bn.memoizedState,baseState:bn.baseState,baseQueue:bn.baseQueue,queue:bn.queue,next:null},Ln===null?pn.memoizedState=Ln=t:Ln=Ln.next=t}return Ln}function Vo(t,i){return typeof i=="function"?i(t):i}function Yc(t){var i=yi(),o=i.queue;if(o===null)throw Error(n(311));o.lastRenderedReducer=t;var c=bn,d=c.baseQueue,h=o.pending;if(h!==null){if(d!==null){var E=d.next;d.next=h.next,h.next=E}c.baseQueue=d=h,o.pending=null}if(d!==null){h=d.next,c=c.baseState;var U=E=null,H=null,le=h;do{var Re=le.lane;if((ss&Re)===Re)H!==null&&(H=H.next={lane:0,action:le.action,hasEagerState:le.hasEagerState,eagerState:le.eagerState,next:null}),c=le.hasEagerState?le.eagerState:t(c,le.action);else{var Ne={lane:Re,action:le.action,hasEagerState:le.hasEagerState,eagerState:le.eagerState,next:null};H===null?(U=H=Ne,E=c):H=H.next=Ne,pn.lanes|=Re,os|=Re}le=le.next}while(le!==null&&le!==h);H===null?E=c:H.next=U,Ci(c,i.memoizedState)||(ni=!0),i.memoizedState=c,i.baseState=E,i.baseQueue=H,o.lastRenderedState=c}if(t=o.interleaved,t!==null){d=t;do h=d.lane,pn.lanes|=h,os|=h,d=d.next;while(d!==t)}else d===null&&(o.lanes=0);return[i.memoizedState,o.dispatch]}function qc(t){var i=yi(),o=i.queue;if(o===null)throw Error(n(311));o.lastRenderedReducer=t;var c=o.dispatch,d=o.pending,h=i.memoizedState;if(d!==null){o.pending=null;var E=d=d.next;do h=t(h,E.action),E=E.next;while(E!==d);Ci(h,i.memoizedState)||(ni=!0),i.memoizedState=h,i.baseQueue===null&&(i.baseState=h),o.lastRenderedState=h}return[h,c]}function Fh(){}function Oh(t,i){var o=pn,c=yi(),d=i(),h=!Ci(c.memoizedState,d);if(h&&(c.memoizedState=d,ni=!0),c=c.queue,$c(zh.bind(null,o,c,t),[t]),c.getSnapshot!==i||h||Ln!==null&&Ln.memoizedState.tag&1){if(o.flags|=2048,Go(9,Bh.bind(null,o,c,d,i),void 0,null),Dn===null)throw Error(n(349));(ss&30)!==0||kh(o,i,d)}return d}function kh(t,i,o){t.flags|=16384,t={getSnapshot:i,value:o},i=pn.updateQueue,i===null?(i={lastEffect:null,stores:null},pn.updateQueue=i,i.stores=[t]):(o=i.stores,o===null?i.stores=[t]:o.push(t))}function Bh(t,i,o,c){i.value=o,i.getSnapshot=c,Hh(i)&&Vh(t)}function zh(t,i,o){return o(function(){Hh(i)&&Vh(t)})}function Hh(t){var i=t.getSnapshot;t=t.value;try{var o=i();return!Ci(t,o)}catch{return!0}}function Vh(t){var i=lr(t,1);i!==null&&Ii(i,t,1,-1)}function Gh(t){var i=Gi();return typeof t=="function"&&(t=t()),i.memoizedState=i.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Vo,lastRenderedState:t},i.queue=t,t=t.dispatch=Wg.bind(null,pn,t),[i.memoizedState,t]}function Go(t,i,o,c){return t={tag:t,create:i,destroy:o,deps:c,next:null},i=pn.updateQueue,i===null?(i={lastEffect:null,stores:null},pn.updateQueue=i,i.lastEffect=t.next=t):(o=i.lastEffect,o===null?i.lastEffect=t.next=t:(c=o.next,o.next=t,t.next=c,i.lastEffect=t)),t}function Wh(){return yi().memoizedState}function Ga(t,i,o,c){var d=Gi();pn.flags|=t,d.memoizedState=Go(1|i,o,void 0,c===void 0?null:c)}function Wa(t,i,o,c){var d=yi();c=c===void 0?null:c;var h=void 0;if(bn!==null){var E=bn.memoizedState;if(h=E.destroy,c!==null&&Wc(c,E.deps)){d.memoizedState=Go(i,o,h,c);return}}pn.flags|=t,d.memoizedState=Go(1|i,o,h,c)}function Xh(t,i){return Ga(8390656,8,t,i)}function $c(t,i){return Wa(2048,8,t,i)}function jh(t,i){return Wa(4,2,t,i)}function Yh(t,i){return Wa(4,4,t,i)}function qh(t,i){if(typeof i=="function")return t=t(),i(t),function(){i(null)};if(i!=null)return t=t(),i.current=t,function(){i.current=null}}function $h(t,i,o){return o=o!=null?o.concat([t]):null,Wa(4,4,qh.bind(null,i,t),o)}function Kc(){}function Kh(t,i){var o=yi();i=i===void 0?null:i;var c=o.memoizedState;return c!==null&&i!==null&&Wc(i,c[1])?c[0]:(o.memoizedState=[t,i],t)}function Zh(t,i){var o=yi();i=i===void 0?null:i;var c=o.memoizedState;return c!==null&&i!==null&&Wc(i,c[1])?c[0]:(t=t(),o.memoizedState=[t,i],t)}function Jh(t,i,o){return(ss&21)===0?(t.baseState&&(t.baseState=!1,ni=!0),t.memoizedState=o):(Ci(o,i)||(o=$e(),pn.lanes|=o,os|=o,t.baseState=!0),i)}function Vg(t,i){var o=Dt;Dt=o!==0&&4>o?o:4,t(!0);var c=Gc.transition;Gc.transition={};try{t(!1),i()}finally{Dt=o,Gc.transition=c}}function Qh(){return yi().memoizedState}function Gg(t,i,o){var c=Or(t);if(o={lane:c,action:o,hasEagerState:!1,eagerState:null,next:null},ep(t))tp(i,o);else if(o=Lh(t,i,o,c),o!==null){var d=Kn();Ii(o,t,c,d),np(o,i,c)}}function Wg(t,i,o){var c=Or(t),d={lane:c,action:o,hasEagerState:!1,eagerState:null,next:null};if(ep(t))tp(i,d);else{var h=t.alternate;if(t.lanes===0&&(h===null||h.lanes===0)&&(h=i.lastRenderedReducer,h!==null))try{var E=i.lastRenderedState,U=h(E,o);if(d.hasEagerState=!0,d.eagerState=U,Ci(U,E)){var H=i.interleaved;H===null?(d.next=d,Oc(i)):(d.next=H.next,H.next=d),i.interleaved=d;return}}catch{}finally{}o=Lh(t,i,d,c),o!==null&&(d=Kn(),Ii(o,t,c,d),np(o,i,c))}}function ep(t){var i=t.alternate;return t===pn||i!==null&&i===pn}function tp(t,i){zo=Va=!0;var o=t.pending;o===null?i.next=i:(i.next=o.next,o.next=i),t.pending=i}function np(t,i,o){if((o&4194240)!==0){var c=i.lanes;c&=t.pendingLanes,o|=c,i.lanes=o,Qn(t,o)}}var Xa={readContext:Si,useCallback:Hn,useContext:Hn,useEffect:Hn,useImperativeHandle:Hn,useInsertionEffect:Hn,useLayoutEffect:Hn,useMemo:Hn,useReducer:Hn,useRef:Hn,useState:Hn,useDebugValue:Hn,useDeferredValue:Hn,useTransition:Hn,useMutableSource:Hn,useSyncExternalStore:Hn,useId:Hn,unstable_isNewReconciler:!1},Xg={readContext:Si,useCallback:function(t,i){return Gi().memoizedState=[t,i===void 0?null:i],t},useContext:Si,useEffect:Xh,useImperativeHandle:function(t,i,o){return o=o!=null?o.concat([t]):null,Ga(4194308,4,qh.bind(null,i,t),o)},useLayoutEffect:function(t,i){return Ga(4194308,4,t,i)},useInsertionEffect:function(t,i){return Ga(4,2,t,i)},useMemo:function(t,i){var o=Gi();return i=i===void 0?null:i,t=t(),o.memoizedState=[t,i],t},useReducer:function(t,i,o){var c=Gi();return i=o!==void 0?o(i):i,c.memoizedState=c.baseState=i,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:i},c.queue=t,t=t.dispatch=Gg.bind(null,pn,t),[c.memoizedState,t]},useRef:function(t){var i=Gi();return t={current:t},i.memoizedState=t},useState:Gh,useDebugValue:Kc,useDeferredValue:function(t){return Gi().memoizedState=t},useTransition:function(){var t=Gh(!1),i=t[0];return t=Vg.bind(null,t[1]),Gi().memoizedState=t,[i,t]},useMutableSource:function(){},useSyncExternalStore:function(t,i,o){var c=pn,d=Gi();if(dn){if(o===void 0)throw Error(n(407));o=o()}else{if(o=i(),Dn===null)throw Error(n(349));(ss&30)!==0||kh(c,i,o)}d.memoizedState=o;var h={value:o,getSnapshot:i};return d.queue=h,Xh(zh.bind(null,c,h,t),[t]),c.flags|=2048,Go(9,Bh.bind(null,c,h,o,i),void 0,null),o},useId:function(){var t=Gi(),i=Dn.identifierPrefix;if(dn){var o=ar,c=or;o=(c&~(1<<32-Be(c)-1)).toString(32)+o,i=":"+i+"R"+o,o=Ho++,0<o&&(i+="H"+o.toString(32)),i+=":"}else o=Hg++,i=":"+i+"r"+o.toString(32)+":";return t.memoizedState=i},unstable_isNewReconciler:!1},jg={readContext:Si,useCallback:Kh,useContext:Si,useEffect:$c,useImperativeHandle:$h,useInsertionEffect:jh,useLayoutEffect:Yh,useMemo:Zh,useReducer:Yc,useRef:Wh,useState:function(){return Yc(Vo)},useDebugValue:Kc,useDeferredValue:function(t){var i=yi();return Jh(i,bn.memoizedState,t)},useTransition:function(){var t=Yc(Vo)[0],i=yi().memoizedState;return[t,i]},useMutableSource:Fh,useSyncExternalStore:Oh,useId:Qh,unstable_isNewReconciler:!1},Yg={readContext:Si,useCallback:Kh,useContext:Si,useEffect:$c,useImperativeHandle:$h,useInsertionEffect:jh,useLayoutEffect:Yh,useMemo:Zh,useReducer:qc,useRef:Wh,useState:function(){return qc(Vo)},useDebugValue:Kc,useDeferredValue:function(t){var i=yi();return bn===null?i.memoizedState=t:Jh(i,bn.memoizedState,t)},useTransition:function(){var t=qc(Vo)[0],i=yi().memoizedState;return[t,i]},useMutableSource:Fh,useSyncExternalStore:Oh,useId:Qh,unstable_isNewReconciler:!1};function Pi(t,i){if(t&&t.defaultProps){i=ue({},i),t=t.defaultProps;for(var o in t)i[o]===void 0&&(i[o]=t[o]);return i}return i}function Zc(t,i,o,c){i=t.memoizedState,o=o(c,i),o=o==null?i:ue({},i,o),t.memoizedState=o,t.lanes===0&&(t.updateQueue.baseState=o)}var ja={isMounted:function(t){return(t=t._reactInternals)?cn(t)===t:!1},enqueueSetState:function(t,i,o){t=t._reactInternals;var c=Kn(),d=Or(t),h=cr(c,d);h.payload=i,o!=null&&(h.callback=o),i=Ir(t,h,d),i!==null&&(Ii(i,t,d,c),ka(i,t,d))},enqueueReplaceState:function(t,i,o){t=t._reactInternals;var c=Kn(),d=Or(t),h=cr(c,d);h.tag=1,h.payload=i,o!=null&&(h.callback=o),i=Ir(t,h,d),i!==null&&(Ii(i,t,d,c),ka(i,t,d))},enqueueForceUpdate:function(t,i){t=t._reactInternals;var o=Kn(),c=Or(t),d=cr(o,c);d.tag=2,i!=null&&(d.callback=i),i=Ir(t,d,c),i!==null&&(Ii(i,t,c,o),ka(i,t,c))}};function ip(t,i,o,c,d,h,E){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(c,h,E):i.prototype&&i.prototype.isPureReactComponent?!Ro(o,c)||!Ro(d,h):!0}function rp(t,i,o){var c=!1,d=Pr,h=i.contextType;return typeof h=="object"&&h!==null?h=Si(h):(d=ti(i)?es:zn.current,c=i.contextTypes,h=(c=c!=null)?Ns(t,d):Pr),i=new i(o,h),t.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,i.updater=ja,t.stateNode=i,i._reactInternals=t,c&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=d,t.__reactInternalMemoizedMaskedChildContext=h),i}function sp(t,i,o,c){t=i.state,typeof i.componentWillReceiveProps=="function"&&i.componentWillReceiveProps(o,c),typeof i.UNSAFE_componentWillReceiveProps=="function"&&i.UNSAFE_componentWillReceiveProps(o,c),i.state!==t&&ja.enqueueReplaceState(i,i.state,null)}function Jc(t,i,o,c){var d=t.stateNode;d.props=o,d.state=t.memoizedState,d.refs={},kc(t);var h=i.contextType;typeof h=="object"&&h!==null?d.context=Si(h):(h=ti(i)?es:zn.current,d.context=Ns(t,h)),d.state=t.memoizedState,h=i.getDerivedStateFromProps,typeof h=="function"&&(Zc(t,i,h,o),d.state=t.memoizedState),typeof i.getDerivedStateFromProps=="function"||typeof d.getSnapshotBeforeUpdate=="function"||typeof d.UNSAFE_componentWillMount!="function"&&typeof d.componentWillMount!="function"||(i=d.state,typeof d.componentWillMount=="function"&&d.componentWillMount(),typeof d.UNSAFE_componentWillMount=="function"&&d.UNSAFE_componentWillMount(),i!==d.state&&ja.enqueueReplaceState(d,d.state,null),Ba(t,o,d,c),d.state=t.memoizedState),typeof d.componentDidMount=="function"&&(t.flags|=4194308)}function Vs(t,i){try{var o="",c=i;do o+=Xe(c),c=c.return;while(c);var d=o}catch(h){d=`
Error generating stack: `+h.message+`
`+h.stack}return{value:t,source:i,stack:d,digest:null}}function Qc(t,i,o){return{value:t,source:null,stack:o??null,digest:i??null}}function eu(t,i){try{console.error(i.value)}catch(o){setTimeout(function(){throw o})}}var qg=typeof WeakMap=="function"?WeakMap:Map;function op(t,i,o){o=cr(-1,o),o.tag=3,o.payload={element:null};var c=i.value;return o.callback=function(){Qa||(Qa=!0,mu=c),eu(t,i)},o}function ap(t,i,o){o=cr(-1,o),o.tag=3;var c=t.type.getDerivedStateFromError;if(typeof c=="function"){var d=i.value;o.payload=function(){return c(d)},o.callback=function(){eu(t,i)}}var h=t.stateNode;return h!==null&&typeof h.componentDidCatch=="function"&&(o.callback=function(){eu(t,i),typeof c!="function"&&(Ur===null?Ur=new Set([this]):Ur.add(this));var E=i.stack;this.componentDidCatch(i.value,{componentStack:E!==null?E:""})}),o}function lp(t,i,o){var c=t.pingCache;if(c===null){c=t.pingCache=new qg;var d=new Set;c.set(i,d)}else d=c.get(i),d===void 0&&(d=new Set,c.set(i,d));d.has(o)||(d.add(o),t=l_.bind(null,t,i,o),i.then(t,t))}function cp(t){do{var i;if((i=t.tag===13)&&(i=t.memoizedState,i=i!==null?i.dehydrated!==null:!0),i)return t;t=t.return}while(t!==null);return null}function up(t,i,o,c,d){return(t.mode&1)===0?(t===i?t.flags|=65536:(t.flags|=128,o.flags|=131072,o.flags&=-52805,o.tag===1&&(o.alternate===null?o.tag=17:(i=cr(-1,1),i.tag=2,Ir(o,i,1))),o.lanes|=1),t):(t.flags|=65536,t.lanes=d,t)}var $g=P.ReactCurrentOwner,ni=!1;function $n(t,i,o,c){i.child=t===null?Ph(i,null,o,c):ks(i,t.child,o,c)}function dp(t,i,o,c,d){o=o.render;var h=i.ref;return zs(i,d),c=Xc(t,i,o,c,h,d),o=jc(),t!==null&&!ni?(i.updateQueue=t.updateQueue,i.flags&=-2053,t.lanes&=~d,ur(t,i,d)):(dn&&o&&Cc(i),i.flags|=1,$n(t,i,c,d),i.child)}function fp(t,i,o,c,d){if(t===null){var h=o.type;return typeof h=="function"&&!Mu(h)&&h.defaultProps===void 0&&o.compare===null&&o.defaultProps===void 0?(i.tag=15,i.type=h,hp(t,i,h,c,d)):(t=sl(o.type,null,c,i,i.mode,d),t.ref=i.ref,t.return=i,i.child=t)}if(h=t.child,(t.lanes&d)===0){var E=h.memoizedProps;if(o=o.compare,o=o!==null?o:Ro,o(E,c)&&t.ref===i.ref)return ur(t,i,d)}return i.flags|=1,t=Br(h,c),t.ref=i.ref,t.return=i,i.child=t}function hp(t,i,o,c,d){if(t!==null){var h=t.memoizedProps;if(Ro(h,c)&&t.ref===i.ref)if(ni=!1,i.pendingProps=c=h,(t.lanes&d)!==0)(t.flags&131072)!==0&&(ni=!0);else return i.lanes=t.lanes,ur(t,i,d)}return tu(t,i,o,c,d)}function pp(t,i,o){var c=i.pendingProps,d=c.children,h=t!==null?t.memoizedState:null;if(c.mode==="hidden")if((i.mode&1)===0)i.memoizedState={baseLanes:0,cachePool:null,transitions:null},nn(Ws,fi),fi|=o;else{if((o&1073741824)===0)return t=h!==null?h.baseLanes|o:o,i.lanes=i.childLanes=1073741824,i.memoizedState={baseLanes:t,cachePool:null,transitions:null},i.updateQueue=null,nn(Ws,fi),fi|=t,null;i.memoizedState={baseLanes:0,cachePool:null,transitions:null},c=h!==null?h.baseLanes:o,nn(Ws,fi),fi|=c}else h!==null?(c=h.baseLanes|o,i.memoizedState=null):c=o,nn(Ws,fi),fi|=c;return $n(t,i,d,o),i.child}function mp(t,i){var o=i.ref;(t===null&&o!==null||t!==null&&t.ref!==o)&&(i.flags|=512,i.flags|=2097152)}function tu(t,i,o,c,d){var h=ti(o)?es:zn.current;return h=Ns(i,h),zs(i,d),o=Xc(t,i,o,c,h,d),c=jc(),t!==null&&!ni?(i.updateQueue=t.updateQueue,i.flags&=-2053,t.lanes&=~d,ur(t,i,d)):(dn&&c&&Cc(i),i.flags|=1,$n(t,i,o,d),i.child)}function gp(t,i,o,c,d){if(ti(o)){var h=!0;Pa(i)}else h=!1;if(zs(i,d),i.stateNode===null)qa(t,i),rp(i,o,c),Jc(i,o,c,d),c=!0;else if(t===null){var E=i.stateNode,U=i.memoizedProps;E.props=U;var H=E.context,le=o.contextType;typeof le=="object"&&le!==null?le=Si(le):(le=ti(o)?es:zn.current,le=Ns(i,le));var Re=o.getDerivedStateFromProps,Ne=typeof Re=="function"||typeof E.getSnapshotBeforeUpdate=="function";Ne||typeof E.UNSAFE_componentWillReceiveProps!="function"&&typeof E.componentWillReceiveProps!="function"||(U!==c||H!==le)&&sp(i,E,c,le),Dr=!1;var Ce=i.memoizedState;E.state=Ce,Ba(i,c,E,d),H=i.memoizedState,U!==c||Ce!==H||ei.current||Dr?(typeof Re=="function"&&(Zc(i,o,Re,c),H=i.memoizedState),(U=Dr||ip(i,o,U,c,Ce,H,le))?(Ne||typeof E.UNSAFE_componentWillMount!="function"&&typeof E.componentWillMount!="function"||(typeof E.componentWillMount=="function"&&E.componentWillMount(),typeof E.UNSAFE_componentWillMount=="function"&&E.UNSAFE_componentWillMount()),typeof E.componentDidMount=="function"&&(i.flags|=4194308)):(typeof E.componentDidMount=="function"&&(i.flags|=4194308),i.memoizedProps=c,i.memoizedState=H),E.props=c,E.state=H,E.context=le,c=U):(typeof E.componentDidMount=="function"&&(i.flags|=4194308),c=!1)}else{E=i.stateNode,Dh(t,i),U=i.memoizedProps,le=i.type===i.elementType?U:Pi(i.type,U),E.props=le,Ne=i.pendingProps,Ce=E.context,H=o.contextType,typeof H=="object"&&H!==null?H=Si(H):(H=ti(o)?es:zn.current,H=Ns(i,H));var Ke=o.getDerivedStateFromProps;(Re=typeof Ke=="function"||typeof E.getSnapshotBeforeUpdate=="function")||typeof E.UNSAFE_componentWillReceiveProps!="function"&&typeof E.componentWillReceiveProps!="function"||(U!==Ne||Ce!==H)&&sp(i,E,c,H),Dr=!1,Ce=i.memoizedState,E.state=Ce,Ba(i,c,E,d);var nt=i.memoizedState;U!==Ne||Ce!==nt||ei.current||Dr?(typeof Ke=="function"&&(Zc(i,o,Ke,c),nt=i.memoizedState),(le=Dr||ip(i,o,le,c,Ce,nt,H)||!1)?(Re||typeof E.UNSAFE_componentWillUpdate!="function"&&typeof E.componentWillUpdate!="function"||(typeof E.componentWillUpdate=="function"&&E.componentWillUpdate(c,nt,H),typeof E.UNSAFE_componentWillUpdate=="function"&&E.UNSAFE_componentWillUpdate(c,nt,H)),typeof E.componentDidUpdate=="function"&&(i.flags|=4),typeof E.getSnapshotBeforeUpdate=="function"&&(i.flags|=1024)):(typeof E.componentDidUpdate!="function"||U===t.memoizedProps&&Ce===t.memoizedState||(i.flags|=4),typeof E.getSnapshotBeforeUpdate!="function"||U===t.memoizedProps&&Ce===t.memoizedState||(i.flags|=1024),i.memoizedProps=c,i.memoizedState=nt),E.props=c,E.state=nt,E.context=H,c=le):(typeof E.componentDidUpdate!="function"||U===t.memoizedProps&&Ce===t.memoizedState||(i.flags|=4),typeof E.getSnapshotBeforeUpdate!="function"||U===t.memoizedProps&&Ce===t.memoizedState||(i.flags|=1024),c=!1)}return nu(t,i,o,c,h,d)}function nu(t,i,o,c,d,h){mp(t,i);var E=(i.flags&128)!==0;if(!c&&!E)return d&&yh(i,o,!1),ur(t,i,h);c=i.stateNode,$g.current=i;var U=E&&typeof o.getDerivedStateFromError!="function"?null:c.render();return i.flags|=1,t!==null&&E?(i.child=ks(i,t.child,null,h),i.child=ks(i,null,U,h)):$n(t,i,U,h),i.memoizedState=c.state,d&&yh(i,o,!0),i.child}function _p(t){var i=t.stateNode;i.pendingContext?xh(t,i.pendingContext,i.pendingContext!==i.context):i.context&&xh(t,i.context,!1),Bc(t,i.containerInfo)}function vp(t,i,o,c,d){return Os(),Dc(d),i.flags|=256,$n(t,i,o,c),i.child}var iu={dehydrated:null,treeContext:null,retryLane:0};function ru(t){return{baseLanes:t,cachePool:null,transitions:null}}function xp(t,i,o){var c=i.pendingProps,d=hn.current,h=!1,E=(i.flags&128)!==0,U;if((U=E)||(U=t!==null&&t.memoizedState===null?!1:(d&2)!==0),U?(h=!0,i.flags&=-129):(t===null||t.memoizedState!==null)&&(d|=1),nn(hn,d&1),t===null)return Lc(i),t=i.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?((i.mode&1)===0?i.lanes=1:t.data==="$!"?i.lanes=8:i.lanes=1073741824,null):(E=c.children,t=c.fallback,h?(c=i.mode,h=i.child,E={mode:"hidden",children:E},(c&1)===0&&h!==null?(h.childLanes=0,h.pendingProps=E):h=ol(E,c,0,null),t=us(t,c,o,null),h.return=i,t.return=i,h.sibling=t,i.child=h,i.child.memoizedState=ru(o),i.memoizedState=iu,t):su(i,E));if(d=t.memoizedState,d!==null&&(U=d.dehydrated,U!==null))return Kg(t,i,E,c,U,d,o);if(h){h=c.fallback,E=i.mode,d=t.child,U=d.sibling;var H={mode:"hidden",children:c.children};return(E&1)===0&&i.child!==d?(c=i.child,c.childLanes=0,c.pendingProps=H,i.deletions=null):(c=Br(d,H),c.subtreeFlags=d.subtreeFlags&14680064),U!==null?h=Br(U,h):(h=us(h,E,o,null),h.flags|=2),h.return=i,c.return=i,c.sibling=h,i.child=c,c=h,h=i.child,E=t.child.memoizedState,E=E===null?ru(o):{baseLanes:E.baseLanes|o,cachePool:null,transitions:E.transitions},h.memoizedState=E,h.childLanes=t.childLanes&~o,i.memoizedState=iu,c}return h=t.child,t=h.sibling,c=Br(h,{mode:"visible",children:c.children}),(i.mode&1)===0&&(c.lanes=o),c.return=i,c.sibling=null,t!==null&&(o=i.deletions,o===null?(i.deletions=[t],i.flags|=16):o.push(t)),i.child=c,i.memoizedState=null,c}function su(t,i){return i=ol({mode:"visible",children:i},t.mode,0,null),i.return=t,t.child=i}function Ya(t,i,o,c){return c!==null&&Dc(c),ks(i,t.child,null,o),t=su(i,i.pendingProps.children),t.flags|=2,i.memoizedState=null,t}function Kg(t,i,o,c,d,h,E){if(o)return i.flags&256?(i.flags&=-257,c=Qc(Error(n(422))),Ya(t,i,E,c)):i.memoizedState!==null?(i.child=t.child,i.flags|=128,null):(h=c.fallback,d=i.mode,c=ol({mode:"visible",children:c.children},d,0,null),h=us(h,d,E,null),h.flags|=2,c.return=i,h.return=i,c.sibling=h,i.child=c,(i.mode&1)!==0&&ks(i,t.child,null,E),i.child.memoizedState=ru(E),i.memoizedState=iu,h);if((i.mode&1)===0)return Ya(t,i,E,null);if(d.data==="$!"){if(c=d.nextSibling&&d.nextSibling.dataset,c)var U=c.dgst;return c=U,h=Error(n(419)),c=Qc(h,c,void 0),Ya(t,i,E,c)}if(U=(E&t.childLanes)!==0,ni||U){if(c=Dn,c!==null){switch(E&-E){case 4:d=2;break;case 16:d=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:d=32;break;case 536870912:d=268435456;break;default:d=0}d=(d&(c.suspendedLanes|E))!==0?0:d,d!==0&&d!==h.retryLane&&(h.retryLane=d,lr(t,d),Ii(c,t,d,-1))}return yu(),c=Qc(Error(n(421))),Ya(t,i,E,c)}return d.data==="$?"?(i.flags|=128,i.child=t.child,i=c_.bind(null,t),d._reactRetry=i,null):(t=h.treeContext,di=Cr(d.nextSibling),ui=i,dn=!0,Ri=null,t!==null&&(vi[xi++]=or,vi[xi++]=ar,vi[xi++]=ts,or=t.id,ar=t.overflow,ts=i),i=su(i,c.children),i.flags|=4096,i)}function Sp(t,i,o){t.lanes|=i;var c=t.alternate;c!==null&&(c.lanes|=i),Fc(t.return,i,o)}function ou(t,i,o,c,d){var h=t.memoizedState;h===null?t.memoizedState={isBackwards:i,rendering:null,renderingStartTime:0,last:c,tail:o,tailMode:d}:(h.isBackwards=i,h.rendering=null,h.renderingStartTime=0,h.last=c,h.tail=o,h.tailMode=d)}function yp(t,i,o){var c=i.pendingProps,d=c.revealOrder,h=c.tail;if($n(t,i,c.children,o),c=hn.current,(c&2)!==0)c=c&1|2,i.flags|=128;else{if(t!==null&&(t.flags&128)!==0)e:for(t=i.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&Sp(t,o,i);else if(t.tag===19)Sp(t,o,i);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===i)break e;for(;t.sibling===null;){if(t.return===null||t.return===i)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}c&=1}if(nn(hn,c),(i.mode&1)===0)i.memoizedState=null;else switch(d){case"forwards":for(o=i.child,d=null;o!==null;)t=o.alternate,t!==null&&za(t)===null&&(d=o),o=o.sibling;o=d,o===null?(d=i.child,i.child=null):(d=o.sibling,o.sibling=null),ou(i,!1,d,o,h);break;case"backwards":for(o=null,d=i.child,i.child=null;d!==null;){if(t=d.alternate,t!==null&&za(t)===null){i.child=d;break}t=d.sibling,d.sibling=o,o=d,d=t}ou(i,!0,o,null,h);break;case"together":ou(i,!1,null,null,void 0);break;default:i.memoizedState=null}return i.child}function qa(t,i){(i.mode&1)===0&&t!==null&&(t.alternate=null,i.alternate=null,i.flags|=2)}function ur(t,i,o){if(t!==null&&(i.dependencies=t.dependencies),os|=i.lanes,(o&i.childLanes)===0)return null;if(t!==null&&i.child!==t.child)throw Error(n(153));if(i.child!==null){for(t=i.child,o=Br(t,t.pendingProps),i.child=o,o.return=i;t.sibling!==null;)t=t.sibling,o=o.sibling=Br(t,t.pendingProps),o.return=i;o.sibling=null}return i.child}function Zg(t,i,o){switch(i.tag){case 3:_p(i),Os();break;case 5:Uh(i);break;case 1:ti(i.type)&&Pa(i);break;case 4:Bc(i,i.stateNode.containerInfo);break;case 10:var c=i.type._context,d=i.memoizedProps.value;nn(Fa,c._currentValue),c._currentValue=d;break;case 13:if(c=i.memoizedState,c!==null)return c.dehydrated!==null?(nn(hn,hn.current&1),i.flags|=128,null):(o&i.child.childLanes)!==0?xp(t,i,o):(nn(hn,hn.current&1),t=ur(t,i,o),t!==null?t.sibling:null);nn(hn,hn.current&1);break;case 19:if(c=(o&i.childLanes)!==0,(t.flags&128)!==0){if(c)return yp(t,i,o);i.flags|=128}if(d=i.memoizedState,d!==null&&(d.rendering=null,d.tail=null,d.lastEffect=null),nn(hn,hn.current),c)break;return null;case 22:case 23:return i.lanes=0,pp(t,i,o)}return ur(t,i,o)}var Mp,au,Ep,wp;Mp=function(t,i){for(var o=i.child;o!==null;){if(o.tag===5||o.tag===6)t.appendChild(o.stateNode);else if(o.tag!==4&&o.child!==null){o.child.return=o,o=o.child;continue}if(o===i)break;for(;o.sibling===null;){if(o.return===null||o.return===i)return;o=o.return}o.sibling.return=o.return,o=o.sibling}},au=function(){},Ep=function(t,i,o,c){var d=t.memoizedProps;if(d!==c){t=i.stateNode,rs(Vi.current);var h=null;switch(o){case"input":d=Tt(t,d),c=Tt(t,c),h=[];break;case"select":d=ue({},d,{value:void 0}),c=ue({},c,{value:void 0}),h=[];break;case"textarea":d=vt(t,d),c=vt(t,c),h=[];break;default:typeof d.onClick!="function"&&typeof c.onClick=="function"&&(t.onclick=ba)}We(o,c);var E;o=null;for(le in d)if(!c.hasOwnProperty(le)&&d.hasOwnProperty(le)&&d[le]!=null)if(le==="style"){var U=d[le];for(E in U)U.hasOwnProperty(E)&&(o||(o={}),o[E]="")}else le!=="dangerouslySetInnerHTML"&&le!=="children"&&le!=="suppressContentEditableWarning"&&le!=="suppressHydrationWarning"&&le!=="autoFocus"&&(a.hasOwnProperty(le)?h||(h=[]):(h=h||[]).push(le,null));for(le in c){var H=c[le];if(U=d!=null?d[le]:void 0,c.hasOwnProperty(le)&&H!==U&&(H!=null||U!=null))if(le==="style")if(U){for(E in U)!U.hasOwnProperty(E)||H&&H.hasOwnProperty(E)||(o||(o={}),o[E]="");for(E in H)H.hasOwnProperty(E)&&U[E]!==H[E]&&(o||(o={}),o[E]=H[E])}else o||(h||(h=[]),h.push(le,o)),o=H;else le==="dangerouslySetInnerHTML"?(H=H?H.__html:void 0,U=U?U.__html:void 0,H!=null&&U!==H&&(h=h||[]).push(le,H)):le==="children"?typeof H!="string"&&typeof H!="number"||(h=h||[]).push(le,""+H):le!=="suppressContentEditableWarning"&&le!=="suppressHydrationWarning"&&(a.hasOwnProperty(le)?(H!=null&&le==="onScroll"&&on("scroll",t),h||U===H||(h=[])):(h=h||[]).push(le,H))}o&&(h=h||[]).push("style",o);var le=h;(i.updateQueue=le)&&(i.flags|=4)}},wp=function(t,i,o,c){o!==c&&(i.flags|=4)};function Wo(t,i){if(!dn)switch(t.tailMode){case"hidden":i=t.tail;for(var o=null;i!==null;)i.alternate!==null&&(o=i),i=i.sibling;o===null?t.tail=null:o.sibling=null;break;case"collapsed":o=t.tail;for(var c=null;o!==null;)o.alternate!==null&&(c=o),o=o.sibling;c===null?i||t.tail===null?t.tail=null:t.tail.sibling=null:c.sibling=null}}function Vn(t){var i=t.alternate!==null&&t.alternate.child===t.child,o=0,c=0;if(i)for(var d=t.child;d!==null;)o|=d.lanes|d.childLanes,c|=d.subtreeFlags&14680064,c|=d.flags&14680064,d.return=t,d=d.sibling;else for(d=t.child;d!==null;)o|=d.lanes|d.childLanes,c|=d.subtreeFlags,c|=d.flags,d.return=t,d=d.sibling;return t.subtreeFlags|=c,t.childLanes=o,i}function Jg(t,i,o){var c=i.pendingProps;switch(Rc(i),i.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Vn(i),null;case 1:return ti(i.type)&&Ra(),Vn(i),null;case 3:return c=i.stateNode,Hs(),an(ei),an(zn),Vc(),c.pendingContext&&(c.context=c.pendingContext,c.pendingContext=null),(t===null||t.child===null)&&(Na(i)?i.flags|=4:t===null||t.memoizedState.isDehydrated&&(i.flags&256)===0||(i.flags|=1024,Ri!==null&&(vu(Ri),Ri=null))),au(t,i),Vn(i),null;case 5:zc(i);var d=rs(Bo.current);if(o=i.type,t!==null&&i.stateNode!=null)Ep(t,i,o,c,d),t.ref!==i.ref&&(i.flags|=512,i.flags|=2097152);else{if(!c){if(i.stateNode===null)throw Error(n(166));return Vn(i),null}if(t=rs(Vi.current),Na(i)){c=i.stateNode,o=i.type;var h=i.memoizedProps;switch(c[Hi]=i,c[No]=h,t=(i.mode&1)!==0,o){case"dialog":on("cancel",c),on("close",c);break;case"iframe":case"object":case"embed":on("load",c);break;case"video":case"audio":for(d=0;d<Lo.length;d++)on(Lo[d],c);break;case"source":on("error",c);break;case"img":case"image":case"link":on("error",c),on("load",c);break;case"details":on("toggle",c);break;case"input":Ot(c,h),on("invalid",c);break;case"select":c._wrapperState={wasMultiple:!!h.multiple},on("invalid",c);break;case"textarea":de(c,h),on("invalid",c)}We(o,h),d=null;for(var E in h)if(h.hasOwnProperty(E)){var U=h[E];E==="children"?typeof U=="string"?c.textContent!==U&&(h.suppressHydrationWarning!==!0&&Aa(c.textContent,U,t),d=["children",U]):typeof U=="number"&&c.textContent!==""+U&&(h.suppressHydrationWarning!==!0&&Aa(c.textContent,U,t),d=["children",""+U]):a.hasOwnProperty(E)&&U!=null&&E==="onScroll"&&on("scroll",c)}switch(o){case"input":at(c),Bt(c,h,!0);break;case"textarea":at(c),pt(c);break;case"select":case"option":break;default:typeof h.onClick=="function"&&(c.onclick=ba)}c=d,i.updateQueue=c,c!==null&&(i.flags|=4)}else{E=d.nodeType===9?d:d.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=R(o)),t==="http://www.w3.org/1999/xhtml"?o==="script"?(t=E.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof c.is=="string"?t=E.createElement(o,{is:c.is}):(t=E.createElement(o),o==="select"&&(E=t,c.multiple?E.multiple=!0:c.size&&(E.size=c.size))):t=E.createElementNS(t,o),t[Hi]=i,t[No]=c,Mp(t,i,!1,!1),i.stateNode=t;e:{switch(E=Pe(o,c),o){case"dialog":on("cancel",t),on("close",t),d=c;break;case"iframe":case"object":case"embed":on("load",t),d=c;break;case"video":case"audio":for(d=0;d<Lo.length;d++)on(Lo[d],t);d=c;break;case"source":on("error",t),d=c;break;case"img":case"image":case"link":on("error",t),on("load",t),d=c;break;case"details":on("toggle",t),d=c;break;case"input":Ot(t,c),d=Tt(t,c),on("invalid",t);break;case"option":d=c;break;case"select":t._wrapperState={wasMultiple:!!c.multiple},d=ue({},c,{value:void 0}),on("invalid",t);break;case"textarea":de(t,c),d=vt(t,c),on("invalid",t);break;default:d=c}We(o,d),U=d;for(h in U)if(U.hasOwnProperty(h)){var H=U[h];h==="style"?_e(t,H):h==="dangerouslySetInnerHTML"?(H=H?H.__html:void 0,H!=null&&xe(t,H)):h==="children"?typeof H=="string"?(o!=="textarea"||H!=="")&&Me(t,H):typeof H=="number"&&Me(t,""+H):h!=="suppressContentEditableWarning"&&h!=="suppressHydrationWarning"&&h!=="autoFocus"&&(a.hasOwnProperty(h)?H!=null&&h==="onScroll"&&on("scroll",t):H!=null&&L(t,h,H,E))}switch(o){case"input":at(t),Bt(t,c,!1);break;case"textarea":at(t),pt(t);break;case"option":c.value!=null&&t.setAttribute("value",""+Se(c.value));break;case"select":t.multiple=!!c.multiple,h=c.value,h!=null?zt(t,!!c.multiple,h,!1):c.defaultValue!=null&&zt(t,!!c.multiple,c.defaultValue,!0);break;default:typeof d.onClick=="function"&&(t.onclick=ba)}switch(o){case"button":case"input":case"select":case"textarea":c=!!c.autoFocus;break e;case"img":c=!0;break e;default:c=!1}}c&&(i.flags|=4)}i.ref!==null&&(i.flags|=512,i.flags|=2097152)}return Vn(i),null;case 6:if(t&&i.stateNode!=null)wp(t,i,t.memoizedProps,c);else{if(typeof c!="string"&&i.stateNode===null)throw Error(n(166));if(o=rs(Bo.current),rs(Vi.current),Na(i)){if(c=i.stateNode,o=i.memoizedProps,c[Hi]=i,(h=c.nodeValue!==o)&&(t=ui,t!==null))switch(t.tag){case 3:Aa(c.nodeValue,o,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&Aa(c.nodeValue,o,(t.mode&1)!==0)}h&&(i.flags|=4)}else c=(o.nodeType===9?o:o.ownerDocument).createTextNode(c),c[Hi]=i,i.stateNode=c}return Vn(i),null;case 13:if(an(hn),c=i.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(dn&&di!==null&&(i.mode&1)!==0&&(i.flags&128)===0)bh(),Os(),i.flags|=98560,h=!1;else if(h=Na(i),c!==null&&c.dehydrated!==null){if(t===null){if(!h)throw Error(n(318));if(h=i.memoizedState,h=h!==null?h.dehydrated:null,!h)throw Error(n(317));h[Hi]=i}else Os(),(i.flags&128)===0&&(i.memoizedState=null),i.flags|=4;Vn(i),h=!1}else Ri!==null&&(vu(Ri),Ri=null),h=!0;if(!h)return i.flags&65536?i:null}return(i.flags&128)!==0?(i.lanes=o,i):(c=c!==null,c!==(t!==null&&t.memoizedState!==null)&&c&&(i.child.flags|=8192,(i.mode&1)!==0&&(t===null||(hn.current&1)!==0?Cn===0&&(Cn=3):yu())),i.updateQueue!==null&&(i.flags|=4),Vn(i),null);case 4:return Hs(),au(t,i),t===null&&Do(i.stateNode.containerInfo),Vn(i),null;case 10:return Uc(i.type._context),Vn(i),null;case 17:return ti(i.type)&&Ra(),Vn(i),null;case 19:if(an(hn),h=i.memoizedState,h===null)return Vn(i),null;if(c=(i.flags&128)!==0,E=h.rendering,E===null)if(c)Wo(h,!1);else{if(Cn!==0||t!==null&&(t.flags&128)!==0)for(t=i.child;t!==null;){if(E=za(t),E!==null){for(i.flags|=128,Wo(h,!1),c=E.updateQueue,c!==null&&(i.updateQueue=c,i.flags|=4),i.subtreeFlags=0,c=o,o=i.child;o!==null;)h=o,t=c,h.flags&=14680066,E=h.alternate,E===null?(h.childLanes=0,h.lanes=t,h.child=null,h.subtreeFlags=0,h.memoizedProps=null,h.memoizedState=null,h.updateQueue=null,h.dependencies=null,h.stateNode=null):(h.childLanes=E.childLanes,h.lanes=E.lanes,h.child=E.child,h.subtreeFlags=0,h.deletions=null,h.memoizedProps=E.memoizedProps,h.memoizedState=E.memoizedState,h.updateQueue=E.updateQueue,h.type=E.type,t=E.dependencies,h.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),o=o.sibling;return nn(hn,hn.current&1|2),i.child}t=t.sibling}h.tail!==null&&en()>Xs&&(i.flags|=128,c=!0,Wo(h,!1),i.lanes=4194304)}else{if(!c)if(t=za(E),t!==null){if(i.flags|=128,c=!0,o=t.updateQueue,o!==null&&(i.updateQueue=o,i.flags|=4),Wo(h,!0),h.tail===null&&h.tailMode==="hidden"&&!E.alternate&&!dn)return Vn(i),null}else 2*en()-h.renderingStartTime>Xs&&o!==1073741824&&(i.flags|=128,c=!0,Wo(h,!1),i.lanes=4194304);h.isBackwards?(E.sibling=i.child,i.child=E):(o=h.last,o!==null?o.sibling=E:i.child=E,h.last=E)}return h.tail!==null?(i=h.tail,h.rendering=i,h.tail=i.sibling,h.renderingStartTime=en(),i.sibling=null,o=hn.current,nn(hn,c?o&1|2:o&1),i):(Vn(i),null);case 22:case 23:return Su(),c=i.memoizedState!==null,t!==null&&t.memoizedState!==null!==c&&(i.flags|=8192),c&&(i.mode&1)!==0?(fi&1073741824)!==0&&(Vn(i),i.subtreeFlags&6&&(i.flags|=8192)):Vn(i),null;case 24:return null;case 25:return null}throw Error(n(156,i.tag))}function Qg(t,i){switch(Rc(i),i.tag){case 1:return ti(i.type)&&Ra(),t=i.flags,t&65536?(i.flags=t&-65537|128,i):null;case 3:return Hs(),an(ei),an(zn),Vc(),t=i.flags,(t&65536)!==0&&(t&128)===0?(i.flags=t&-65537|128,i):null;case 5:return zc(i),null;case 13:if(an(hn),t=i.memoizedState,t!==null&&t.dehydrated!==null){if(i.alternate===null)throw Error(n(340));Os()}return t=i.flags,t&65536?(i.flags=t&-65537|128,i):null;case 19:return an(hn),null;case 4:return Hs(),null;case 10:return Uc(i.type._context),null;case 22:case 23:return Su(),null;case 24:return null;default:return null}}var $a=!1,Gn=!1,e_=typeof WeakSet=="function"?WeakSet:Set,Qe=null;function Gs(t,i){var o=t.ref;if(o!==null)if(typeof o=="function")try{o(null)}catch(c){mn(t,i,c)}else o.current=null}function lu(t,i,o){try{o()}catch(c){mn(t,i,c)}}var Tp=!1;function t_(t,i){if(Sc=ma,t=ih(),fc(t)){if("selectionStart"in t)var o={start:t.selectionStart,end:t.selectionEnd};else e:{o=(o=t.ownerDocument)&&o.defaultView||window;var c=o.getSelection&&o.getSelection();if(c&&c.rangeCount!==0){o=c.anchorNode;var d=c.anchorOffset,h=c.focusNode;c=c.focusOffset;try{o.nodeType,h.nodeType}catch{o=null;break e}var E=0,U=-1,H=-1,le=0,Re=0,Ne=t,Ce=null;t:for(;;){for(var Ke;Ne!==o||d!==0&&Ne.nodeType!==3||(U=E+d),Ne!==h||c!==0&&Ne.nodeType!==3||(H=E+c),Ne.nodeType===3&&(E+=Ne.nodeValue.length),(Ke=Ne.firstChild)!==null;)Ce=Ne,Ne=Ke;for(;;){if(Ne===t)break t;if(Ce===o&&++le===d&&(U=E),Ce===h&&++Re===c&&(H=E),(Ke=Ne.nextSibling)!==null)break;Ne=Ce,Ce=Ne.parentNode}Ne=Ke}o=U===-1||H===-1?null:{start:U,end:H}}else o=null}o=o||{start:0,end:0}}else o=null;for(yc={focusedElem:t,selectionRange:o},ma=!1,Qe=i;Qe!==null;)if(i=Qe,t=i.child,(i.subtreeFlags&1028)!==0&&t!==null)t.return=i,Qe=t;else for(;Qe!==null;){i=Qe;try{var nt=i.alternate;if((i.flags&1024)!==0)switch(i.tag){case 0:case 11:case 15:break;case 1:if(nt!==null){var st=nt.memoizedProps,vn=nt.memoizedState,ee=i.stateNode,X=ee.getSnapshotBeforeUpdate(i.elementType===i.type?st:Pi(i.type,st),vn);ee.__reactInternalSnapshotBeforeUpdate=X}break;case 3:var se=i.stateNode.containerInfo;se.nodeType===1?se.textContent="":se.nodeType===9&&se.documentElement&&se.removeChild(se.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(n(163))}}catch(Oe){mn(i,i.return,Oe)}if(t=i.sibling,t!==null){t.return=i.return,Qe=t;break}Qe=i.return}return nt=Tp,Tp=!1,nt}function Xo(t,i,o){var c=i.updateQueue;if(c=c!==null?c.lastEffect:null,c!==null){var d=c=c.next;do{if((d.tag&t)===t){var h=d.destroy;d.destroy=void 0,h!==void 0&&lu(i,o,h)}d=d.next}while(d!==c)}}function Ka(t,i){if(i=i.updateQueue,i=i!==null?i.lastEffect:null,i!==null){var o=i=i.next;do{if((o.tag&t)===t){var c=o.create;o.destroy=c()}o=o.next}while(o!==i)}}function cu(t){var i=t.ref;if(i!==null){var o=t.stateNode;switch(t.tag){case 5:t=o;break;default:t=o}typeof i=="function"?i(t):i.current=t}}function Ap(t){var i=t.alternate;i!==null&&(t.alternate=null,Ap(i)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(i=t.stateNode,i!==null&&(delete i[Hi],delete i[No],delete i[Tc],delete i[Og],delete i[kg])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function bp(t){return t.tag===5||t.tag===3||t.tag===4}function Cp(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||bp(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function uu(t,i,o){var c=t.tag;if(c===5||c===6)t=t.stateNode,i?o.nodeType===8?o.parentNode.insertBefore(t,i):o.insertBefore(t,i):(o.nodeType===8?(i=o.parentNode,i.insertBefore(t,o)):(i=o,i.appendChild(t)),o=o._reactRootContainer,o!=null||i.onclick!==null||(i.onclick=ba));else if(c!==4&&(t=t.child,t!==null))for(uu(t,i,o),t=t.sibling;t!==null;)uu(t,i,o),t=t.sibling}function du(t,i,o){var c=t.tag;if(c===5||c===6)t=t.stateNode,i?o.insertBefore(t,i):o.appendChild(t);else if(c!==4&&(t=t.child,t!==null))for(du(t,i,o),t=t.sibling;t!==null;)du(t,i,o),t=t.sibling}var On=null,Li=!1;function Nr(t,i,o){for(o=o.child;o!==null;)Rp(t,i,o),o=o.sibling}function Rp(t,i,o){if(He&&typeof He.onCommitFiberUnmount=="function")try{He.onCommitFiberUnmount(ie,o)}catch{}switch(o.tag){case 5:Gn||Gs(o,i);case 6:var c=On,d=Li;On=null,Nr(t,i,o),On=c,Li=d,On!==null&&(Li?(t=On,o=o.stateNode,t.nodeType===8?t.parentNode.removeChild(o):t.removeChild(o)):On.removeChild(o.stateNode));break;case 18:On!==null&&(Li?(t=On,o=o.stateNode,t.nodeType===8?wc(t.parentNode,o):t.nodeType===1&&wc(t,o),Eo(t)):wc(On,o.stateNode));break;case 4:c=On,d=Li,On=o.stateNode.containerInfo,Li=!0,Nr(t,i,o),On=c,Li=d;break;case 0:case 11:case 14:case 15:if(!Gn&&(c=o.updateQueue,c!==null&&(c=c.lastEffect,c!==null))){d=c=c.next;do{var h=d,E=h.destroy;h=h.tag,E!==void 0&&((h&2)!==0||(h&4)!==0)&&lu(o,i,E),d=d.next}while(d!==c)}Nr(t,i,o);break;case 1:if(!Gn&&(Gs(o,i),c=o.stateNode,typeof c.componentWillUnmount=="function"))try{c.props=o.memoizedProps,c.state=o.memoizedState,c.componentWillUnmount()}catch(U){mn(o,i,U)}Nr(t,i,o);break;case 21:Nr(t,i,o);break;case 22:o.mode&1?(Gn=(c=Gn)||o.memoizedState!==null,Nr(t,i,o),Gn=c):Nr(t,i,o);break;default:Nr(t,i,o)}}function Pp(t){var i=t.updateQueue;if(i!==null){t.updateQueue=null;var o=t.stateNode;o===null&&(o=t.stateNode=new e_),i.forEach(function(c){var d=u_.bind(null,t,c);o.has(c)||(o.add(c),c.then(d,d))})}}function Di(t,i){var o=i.deletions;if(o!==null)for(var c=0;c<o.length;c++){var d=o[c];try{var h=t,E=i,U=E;e:for(;U!==null;){switch(U.tag){case 5:On=U.stateNode,Li=!1;break e;case 3:On=U.stateNode.containerInfo,Li=!0;break e;case 4:On=U.stateNode.containerInfo,Li=!0;break e}U=U.return}if(On===null)throw Error(n(160));Rp(h,E,d),On=null,Li=!1;var H=d.alternate;H!==null&&(H.return=null),d.return=null}catch(le){mn(d,i,le)}}if(i.subtreeFlags&12854)for(i=i.child;i!==null;)Lp(i,t),i=i.sibling}function Lp(t,i){var o=t.alternate,c=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(Di(i,t),Wi(t),c&4){try{Xo(3,t,t.return),Ka(3,t)}catch(st){mn(t,t.return,st)}try{Xo(5,t,t.return)}catch(st){mn(t,t.return,st)}}break;case 1:Di(i,t),Wi(t),c&512&&o!==null&&Gs(o,o.return);break;case 5:if(Di(i,t),Wi(t),c&512&&o!==null&&Gs(o,o.return),t.flags&32){var d=t.stateNode;try{Me(d,"")}catch(st){mn(t,t.return,st)}}if(c&4&&(d=t.stateNode,d!=null)){var h=t.memoizedProps,E=o!==null?o.memoizedProps:h,U=t.type,H=t.updateQueue;if(t.updateQueue=null,H!==null)try{U==="input"&&h.type==="radio"&&h.name!=null&&gt(d,h),Pe(U,E);var le=Pe(U,h);for(E=0;E<H.length;E+=2){var Re=H[E],Ne=H[E+1];Re==="style"?_e(d,Ne):Re==="dangerouslySetInnerHTML"?xe(d,Ne):Re==="children"?Me(d,Ne):L(d,Re,Ne,le)}switch(U){case"input":Gt(d,h);break;case"textarea":D(d,h);break;case"select":var Ce=d._wrapperState.wasMultiple;d._wrapperState.wasMultiple=!!h.multiple;var Ke=h.value;Ke!=null?zt(d,!!h.multiple,Ke,!1):Ce!==!!h.multiple&&(h.defaultValue!=null?zt(d,!!h.multiple,h.defaultValue,!0):zt(d,!!h.multiple,h.multiple?[]:"",!1))}d[No]=h}catch(st){mn(t,t.return,st)}}break;case 6:if(Di(i,t),Wi(t),c&4){if(t.stateNode===null)throw Error(n(162));d=t.stateNode,h=t.memoizedProps;try{d.nodeValue=h}catch(st){mn(t,t.return,st)}}break;case 3:if(Di(i,t),Wi(t),c&4&&o!==null&&o.memoizedState.isDehydrated)try{Eo(i.containerInfo)}catch(st){mn(t,t.return,st)}break;case 4:Di(i,t),Wi(t);break;case 13:Di(i,t),Wi(t),d=t.child,d.flags&8192&&(h=d.memoizedState!==null,d.stateNode.isHidden=h,!h||d.alternate!==null&&d.alternate.memoizedState!==null||(pu=en())),c&4&&Pp(t);break;case 22:if(Re=o!==null&&o.memoizedState!==null,t.mode&1?(Gn=(le=Gn)||Re,Di(i,t),Gn=le):Di(i,t),Wi(t),c&8192){if(le=t.memoizedState!==null,(t.stateNode.isHidden=le)&&!Re&&(t.mode&1)!==0)for(Qe=t,Re=t.child;Re!==null;){for(Ne=Qe=Re;Qe!==null;){switch(Ce=Qe,Ke=Ce.child,Ce.tag){case 0:case 11:case 14:case 15:Xo(4,Ce,Ce.return);break;case 1:Gs(Ce,Ce.return);var nt=Ce.stateNode;if(typeof nt.componentWillUnmount=="function"){c=Ce,o=Ce.return;try{i=c,nt.props=i.memoizedProps,nt.state=i.memoizedState,nt.componentWillUnmount()}catch(st){mn(c,o,st)}}break;case 5:Gs(Ce,Ce.return);break;case 22:if(Ce.memoizedState!==null){Np(Ne);continue}}Ke!==null?(Ke.return=Ce,Qe=Ke):Np(Ne)}Re=Re.sibling}e:for(Re=null,Ne=t;;){if(Ne.tag===5){if(Re===null){Re=Ne;try{d=Ne.stateNode,le?(h=d.style,typeof h.setProperty=="function"?h.setProperty("display","none","important"):h.display="none"):(U=Ne.stateNode,H=Ne.memoizedProps.style,E=H!=null&&H.hasOwnProperty("display")?H.display:null,U.style.display=fe("display",E))}catch(st){mn(t,t.return,st)}}}else if(Ne.tag===6){if(Re===null)try{Ne.stateNode.nodeValue=le?"":Ne.memoizedProps}catch(st){mn(t,t.return,st)}}else if((Ne.tag!==22&&Ne.tag!==23||Ne.memoizedState===null||Ne===t)&&Ne.child!==null){Ne.child.return=Ne,Ne=Ne.child;continue}if(Ne===t)break e;for(;Ne.sibling===null;){if(Ne.return===null||Ne.return===t)break e;Re===Ne&&(Re=null),Ne=Ne.return}Re===Ne&&(Re=null),Ne.sibling.return=Ne.return,Ne=Ne.sibling}}break;case 19:Di(i,t),Wi(t),c&4&&Pp(t);break;case 21:break;default:Di(i,t),Wi(t)}}function Wi(t){var i=t.flags;if(i&2){try{e:{for(var o=t.return;o!==null;){if(bp(o)){var c=o;break e}o=o.return}throw Error(n(160))}switch(c.tag){case 5:var d=c.stateNode;c.flags&32&&(Me(d,""),c.flags&=-33);var h=Cp(t);du(t,h,d);break;case 3:case 4:var E=c.stateNode.containerInfo,U=Cp(t);uu(t,U,E);break;default:throw Error(n(161))}}catch(H){mn(t,t.return,H)}t.flags&=-3}i&4096&&(t.flags&=-4097)}function n_(t,i,o){Qe=t,Dp(t)}function Dp(t,i,o){for(var c=(t.mode&1)!==0;Qe!==null;){var d=Qe,h=d.child;if(d.tag===22&&c){var E=d.memoizedState!==null||$a;if(!E){var U=d.alternate,H=U!==null&&U.memoizedState!==null||Gn;U=$a;var le=Gn;if($a=E,(Gn=H)&&!le)for(Qe=d;Qe!==null;)E=Qe,H=E.child,E.tag===22&&E.memoizedState!==null?Up(d):H!==null?(H.return=E,Qe=H):Up(d);for(;h!==null;)Qe=h,Dp(h),h=h.sibling;Qe=d,$a=U,Gn=le}Ip(t)}else(d.subtreeFlags&8772)!==0&&h!==null?(h.return=d,Qe=h):Ip(t)}}function Ip(t){for(;Qe!==null;){var i=Qe;if((i.flags&8772)!==0){var o=i.alternate;try{if((i.flags&8772)!==0)switch(i.tag){case 0:case 11:case 15:Gn||Ka(5,i);break;case 1:var c=i.stateNode;if(i.flags&4&&!Gn)if(o===null)c.componentDidMount();else{var d=i.elementType===i.type?o.memoizedProps:Pi(i.type,o.memoizedProps);c.componentDidUpdate(d,o.memoizedState,c.__reactInternalSnapshotBeforeUpdate)}var h=i.updateQueue;h!==null&&Nh(i,h,c);break;case 3:var E=i.updateQueue;if(E!==null){if(o=null,i.child!==null)switch(i.child.tag){case 5:o=i.child.stateNode;break;case 1:o=i.child.stateNode}Nh(i,E,o)}break;case 5:var U=i.stateNode;if(o===null&&i.flags&4){o=U;var H=i.memoizedProps;switch(i.type){case"button":case"input":case"select":case"textarea":H.autoFocus&&o.focus();break;case"img":H.src&&(o.src=H.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(i.memoizedState===null){var le=i.alternate;if(le!==null){var Re=le.memoizedState;if(Re!==null){var Ne=Re.dehydrated;Ne!==null&&Eo(Ne)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(n(163))}Gn||i.flags&512&&cu(i)}catch(Ce){mn(i,i.return,Ce)}}if(i===t){Qe=null;break}if(o=i.sibling,o!==null){o.return=i.return,Qe=o;break}Qe=i.return}}function Np(t){for(;Qe!==null;){var i=Qe;if(i===t){Qe=null;break}var o=i.sibling;if(o!==null){o.return=i.return,Qe=o;break}Qe=i.return}}function Up(t){for(;Qe!==null;){var i=Qe;try{switch(i.tag){case 0:case 11:case 15:var o=i.return;try{Ka(4,i)}catch(H){mn(i,o,H)}break;case 1:var c=i.stateNode;if(typeof c.componentDidMount=="function"){var d=i.return;try{c.componentDidMount()}catch(H){mn(i,d,H)}}var h=i.return;try{cu(i)}catch(H){mn(i,h,H)}break;case 5:var E=i.return;try{cu(i)}catch(H){mn(i,E,H)}}}catch(H){mn(i,i.return,H)}if(i===t){Qe=null;break}var U=i.sibling;if(U!==null){U.return=i.return,Qe=U;break}Qe=i.return}}var i_=Math.ceil,Za=P.ReactCurrentDispatcher,fu=P.ReactCurrentOwner,Mi=P.ReactCurrentBatchConfig,jt=0,Dn=null,yn=null,kn=0,fi=0,Ws=Rr(0),Cn=0,jo=null,os=0,Ja=0,hu=0,Yo=null,ii=null,pu=0,Xs=1/0,dr=null,Qa=!1,mu=null,Ur=null,el=!1,Fr=null,tl=0,qo=0,gu=null,nl=-1,il=0;function Kn(){return(jt&6)!==0?en():nl!==-1?nl:nl=en()}function Or(t){return(t.mode&1)===0?1:(jt&2)!==0&&kn!==0?kn&-kn:zg.transition!==null?(il===0&&(il=$e()),il):(t=Dt,t!==0||(t=window.event,t=t===void 0?16:Of(t.type)),t)}function Ii(t,i,o,c){if(50<qo)throw qo=0,gu=null,Error(n(185));Lt(t,o,c),((jt&2)===0||t!==Dn)&&(t===Dn&&((jt&2)===0&&(Ja|=o),Cn===4&&kr(t,kn)),ri(t,c),o===1&&jt===0&&(i.mode&1)===0&&(Xs=en()+500,La&&Lr()))}function ri(t,i){var o=t.callbackNode;Kt(t,i);var c=tn(t,t===Dn?kn:0);if(c===0)o!==null&&nr(o),t.callbackNode=null,t.callbackPriority=0;else if(i=c&-c,t.callbackPriority!==i){if(o!=null&&nr(o),i===1)t.tag===0?Bg(Op.bind(null,t)):Mh(Op.bind(null,t)),Ug(function(){(jt&6)===0&&Lr()}),o=null;else{switch(ir(c)){case 1:o=vo;break;case 4:o=A;break;case 16:o=q;break;case 536870912:o=re;break;default:o=q}o=Xp(o,Fp.bind(null,t))}t.callbackPriority=i,t.callbackNode=o}}function Fp(t,i){if(nl=-1,il=0,(jt&6)!==0)throw Error(n(327));var o=t.callbackNode;if(js()&&t.callbackNode!==o)return null;var c=tn(t,t===Dn?kn:0);if(c===0)return null;if((c&30)!==0||(c&t.expiredLanes)!==0||i)i=rl(t,c);else{i=c;var d=jt;jt|=2;var h=Bp();(Dn!==t||kn!==i)&&(dr=null,Xs=en()+500,ls(t,i));do try{o_();break}catch(U){kp(t,U)}while(!0);Nc(),Za.current=h,jt=d,yn!==null?i=0:(Dn=null,kn=0,i=Cn)}if(i!==0){if(i===2&&(d=Sn(t),d!==0&&(c=d,i=_u(t,d))),i===1)throw o=jo,ls(t,0),kr(t,c),ri(t,en()),o;if(i===6)kr(t,c);else{if(d=t.current.alternate,(c&30)===0&&!r_(d)&&(i=rl(t,c),i===2&&(h=Sn(t),h!==0&&(c=h,i=_u(t,h))),i===1))throw o=jo,ls(t,0),kr(t,c),ri(t,en()),o;switch(t.finishedWork=d,t.finishedLanes=c,i){case 0:case 1:throw Error(n(345));case 2:cs(t,ii,dr);break;case 3:if(kr(t,c),(c&130023424)===c&&(i=pu+500-en(),10<i)){if(tn(t,0)!==0)break;if(d=t.suspendedLanes,(d&c)!==c){Kn(),t.pingedLanes|=t.suspendedLanes&d;break}t.timeoutHandle=Ec(cs.bind(null,t,ii,dr),i);break}cs(t,ii,dr);break;case 4:if(kr(t,c),(c&4194240)===c)break;for(i=t.eventTimes,d=-1;0<c;){var E=31-Be(c);h=1<<E,E=i[E],E>d&&(d=E),c&=~h}if(c=d,c=en()-c,c=(120>c?120:480>c?480:1080>c?1080:1920>c?1920:3e3>c?3e3:4320>c?4320:1960*i_(c/1960))-c,10<c){t.timeoutHandle=Ec(cs.bind(null,t,ii,dr),c);break}cs(t,ii,dr);break;case 5:cs(t,ii,dr);break;default:throw Error(n(329))}}}return ri(t,en()),t.callbackNode===o?Fp.bind(null,t):null}function _u(t,i){var o=Yo;return t.current.memoizedState.isDehydrated&&(ls(t,i).flags|=256),t=rl(t,i),t!==2&&(i=ii,ii=o,i!==null&&vu(i)),t}function vu(t){ii===null?ii=t:ii.push.apply(ii,t)}function r_(t){for(var i=t;;){if(i.flags&16384){var o=i.updateQueue;if(o!==null&&(o=o.stores,o!==null))for(var c=0;c<o.length;c++){var d=o[c],h=d.getSnapshot;d=d.value;try{if(!Ci(h(),d))return!1}catch{return!1}}}if(o=i.child,i.subtreeFlags&16384&&o!==null)o.return=i,i=o;else{if(i===t)break;for(;i.sibling===null;){if(i.return===null||i.return===t)return!0;i=i.return}i.sibling.return=i.return,i=i.sibling}}return!0}function kr(t,i){for(i&=~hu,i&=~Ja,t.suspendedLanes|=i,t.pingedLanes&=~i,t=t.expirationTimes;0<i;){var o=31-Be(i),c=1<<o;t[o]=-1,i&=~c}}function Op(t){if((jt&6)!==0)throw Error(n(327));js();var i=tn(t,0);if((i&1)===0)return ri(t,en()),null;var o=rl(t,i);if(t.tag!==0&&o===2){var c=Sn(t);c!==0&&(i=c,o=_u(t,c))}if(o===1)throw o=jo,ls(t,0),kr(t,i),ri(t,en()),o;if(o===6)throw Error(n(345));return t.finishedWork=t.current.alternate,t.finishedLanes=i,cs(t,ii,dr),ri(t,en()),null}function xu(t,i){var o=jt;jt|=1;try{return t(i)}finally{jt=o,jt===0&&(Xs=en()+500,La&&Lr())}}function as(t){Fr!==null&&Fr.tag===0&&(jt&6)===0&&js();var i=jt;jt|=1;var o=Mi.transition,c=Dt;try{if(Mi.transition=null,Dt=1,t)return t()}finally{Dt=c,Mi.transition=o,jt=i,(jt&6)===0&&Lr()}}function Su(){fi=Ws.current,an(Ws)}function ls(t,i){t.finishedWork=null,t.finishedLanes=0;var o=t.timeoutHandle;if(o!==-1&&(t.timeoutHandle=-1,Ng(o)),yn!==null)for(o=yn.return;o!==null;){var c=o;switch(Rc(c),c.tag){case 1:c=c.type.childContextTypes,c!=null&&Ra();break;case 3:Hs(),an(ei),an(zn),Vc();break;case 5:zc(c);break;case 4:Hs();break;case 13:an(hn);break;case 19:an(hn);break;case 10:Uc(c.type._context);break;case 22:case 23:Su()}o=o.return}if(Dn=t,yn=t=Br(t.current,null),kn=fi=i,Cn=0,jo=null,hu=Ja=os=0,ii=Yo=null,is!==null){for(i=0;i<is.length;i++)if(o=is[i],c=o.interleaved,c!==null){o.interleaved=null;var d=c.next,h=o.pending;if(h!==null){var E=h.next;h.next=d,c.next=E}o.pending=c}is=null}return t}function kp(t,i){do{var o=yn;try{if(Nc(),Ha.current=Xa,Va){for(var c=pn.memoizedState;c!==null;){var d=c.queue;d!==null&&(d.pending=null),c=c.next}Va=!1}if(ss=0,Ln=bn=pn=null,zo=!1,Ho=0,fu.current=null,o===null||o.return===null){Cn=1,jo=i,yn=null;break}e:{var h=t,E=o.return,U=o,H=i;if(i=kn,U.flags|=32768,H!==null&&typeof H=="object"&&typeof H.then=="function"){var le=H,Re=U,Ne=Re.tag;if((Re.mode&1)===0&&(Ne===0||Ne===11||Ne===15)){var Ce=Re.alternate;Ce?(Re.updateQueue=Ce.updateQueue,Re.memoizedState=Ce.memoizedState,Re.lanes=Ce.lanes):(Re.updateQueue=null,Re.memoizedState=null)}var Ke=cp(E);if(Ke!==null){Ke.flags&=-257,up(Ke,E,U,h,i),Ke.mode&1&&lp(h,le,i),i=Ke,H=le;var nt=i.updateQueue;if(nt===null){var st=new Set;st.add(H),i.updateQueue=st}else nt.add(H);break e}else{if((i&1)===0){lp(h,le,i),yu();break e}H=Error(n(426))}}else if(dn&&U.mode&1){var vn=cp(E);if(vn!==null){(vn.flags&65536)===0&&(vn.flags|=256),up(vn,E,U,h,i),Dc(Vs(H,U));break e}}h=H=Vs(H,U),Cn!==4&&(Cn=2),Yo===null?Yo=[h]:Yo.push(h),h=E;do{switch(h.tag){case 3:h.flags|=65536,i&=-i,h.lanes|=i;var ee=op(h,H,i);Ih(h,ee);break e;case 1:U=H;var X=h.type,se=h.stateNode;if((h.flags&128)===0&&(typeof X.getDerivedStateFromError=="function"||se!==null&&typeof se.componentDidCatch=="function"&&(Ur===null||!Ur.has(se)))){h.flags|=65536,i&=-i,h.lanes|=i;var Oe=ap(h,U,i);Ih(h,Oe);break e}}h=h.return}while(h!==null)}Hp(o)}catch(lt){i=lt,yn===o&&o!==null&&(yn=o=o.return);continue}break}while(!0)}function Bp(){var t=Za.current;return Za.current=Xa,t===null?Xa:t}function yu(){(Cn===0||Cn===3||Cn===2)&&(Cn=4),Dn===null||(os&268435455)===0&&(Ja&268435455)===0||kr(Dn,kn)}function rl(t,i){var o=jt;jt|=2;var c=Bp();(Dn!==t||kn!==i)&&(dr=null,ls(t,i));do try{s_();break}catch(d){kp(t,d)}while(!0);if(Nc(),jt=o,Za.current=c,yn!==null)throw Error(n(261));return Dn=null,kn=0,Cn}function s_(){for(;yn!==null;)zp(yn)}function o_(){for(;yn!==null&&!Es();)zp(yn)}function zp(t){var i=Wp(t.alternate,t,fi);t.memoizedProps=t.pendingProps,i===null?Hp(t):yn=i,fu.current=null}function Hp(t){var i=t;do{var o=i.alternate;if(t=i.return,(i.flags&32768)===0){if(o=Jg(o,i,fi),o!==null){yn=o;return}}else{if(o=Qg(o,i),o!==null){o.flags&=32767,yn=o;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{Cn=6,yn=null;return}}if(i=i.sibling,i!==null){yn=i;return}yn=i=t}while(i!==null);Cn===0&&(Cn=5)}function cs(t,i,o){var c=Dt,d=Mi.transition;try{Mi.transition=null,Dt=1,a_(t,i,o,c)}finally{Mi.transition=d,Dt=c}return null}function a_(t,i,o,c){do js();while(Fr!==null);if((jt&6)!==0)throw Error(n(327));o=t.finishedWork;var d=t.finishedLanes;if(o===null)return null;if(t.finishedWork=null,t.finishedLanes=0,o===t.current)throw Error(n(177));t.callbackNode=null,t.callbackPriority=0;var h=o.lanes|o.childLanes;if(Jn(t,h),t===Dn&&(yn=Dn=null,kn=0),(o.subtreeFlags&2064)===0&&(o.flags&2064)===0||el||(el=!0,Xp(q,function(){return js(),null})),h=(o.flags&15990)!==0,(o.subtreeFlags&15990)!==0||h){h=Mi.transition,Mi.transition=null;var E=Dt;Dt=1;var U=jt;jt|=4,fu.current=null,t_(t,o),Lp(o,t),bg(yc),ma=!!Sc,yc=Sc=null,t.current=o,n_(o),ws(),jt=U,Dt=E,Mi.transition=h}else t.current=o;if(el&&(el=!1,Fr=t,tl=d),h=t.pendingLanes,h===0&&(Ur=null),Je(o.stateNode),ri(t,en()),i!==null)for(c=t.onRecoverableError,o=0;o<i.length;o++)d=i[o],c(d.value,{componentStack:d.stack,digest:d.digest});if(Qa)throw Qa=!1,t=mu,mu=null,t;return(tl&1)!==0&&t.tag!==0&&js(),h=t.pendingLanes,(h&1)!==0?t===gu?qo++:(qo=0,gu=t):qo=0,Lr(),null}function js(){if(Fr!==null){var t=ir(tl),i=Mi.transition,o=Dt;try{if(Mi.transition=null,Dt=16>t?16:t,Fr===null)var c=!1;else{if(t=Fr,Fr=null,tl=0,(jt&6)!==0)throw Error(n(331));var d=jt;for(jt|=4,Qe=t.current;Qe!==null;){var h=Qe,E=h.child;if((Qe.flags&16)!==0){var U=h.deletions;if(U!==null){for(var H=0;H<U.length;H++){var le=U[H];for(Qe=le;Qe!==null;){var Re=Qe;switch(Re.tag){case 0:case 11:case 15:Xo(8,Re,h)}var Ne=Re.child;if(Ne!==null)Ne.return=Re,Qe=Ne;else for(;Qe!==null;){Re=Qe;var Ce=Re.sibling,Ke=Re.return;if(Ap(Re),Re===le){Qe=null;break}if(Ce!==null){Ce.return=Ke,Qe=Ce;break}Qe=Ke}}}var nt=h.alternate;if(nt!==null){var st=nt.child;if(st!==null){nt.child=null;do{var vn=st.sibling;st.sibling=null,st=vn}while(st!==null)}}Qe=h}}if((h.subtreeFlags&2064)!==0&&E!==null)E.return=h,Qe=E;else e:for(;Qe!==null;){if(h=Qe,(h.flags&2048)!==0)switch(h.tag){case 0:case 11:case 15:Xo(9,h,h.return)}var ee=h.sibling;if(ee!==null){ee.return=h.return,Qe=ee;break e}Qe=h.return}}var X=t.current;for(Qe=X;Qe!==null;){E=Qe;var se=E.child;if((E.subtreeFlags&2064)!==0&&se!==null)se.return=E,Qe=se;else e:for(E=X;Qe!==null;){if(U=Qe,(U.flags&2048)!==0)try{switch(U.tag){case 0:case 11:case 15:Ka(9,U)}}catch(lt){mn(U,U.return,lt)}if(U===E){Qe=null;break e}var Oe=U.sibling;if(Oe!==null){Oe.return=U.return,Qe=Oe;break e}Qe=U.return}}if(jt=d,Lr(),He&&typeof He.onPostCommitFiberRoot=="function")try{He.onPostCommitFiberRoot(ie,t)}catch{}c=!0}return c}finally{Dt=o,Mi.transition=i}}return!1}function Vp(t,i,o){i=Vs(o,i),i=op(t,i,1),t=Ir(t,i,1),i=Kn(),t!==null&&(Lt(t,1,i),ri(t,i))}function mn(t,i,o){if(t.tag===3)Vp(t,t,o);else for(;i!==null;){if(i.tag===3){Vp(i,t,o);break}else if(i.tag===1){var c=i.stateNode;if(typeof i.type.getDerivedStateFromError=="function"||typeof c.componentDidCatch=="function"&&(Ur===null||!Ur.has(c))){t=Vs(o,t),t=ap(i,t,1),i=Ir(i,t,1),t=Kn(),i!==null&&(Lt(i,1,t),ri(i,t));break}}i=i.return}}function l_(t,i,o){var c=t.pingCache;c!==null&&c.delete(i),i=Kn(),t.pingedLanes|=t.suspendedLanes&o,Dn===t&&(kn&o)===o&&(Cn===4||Cn===3&&(kn&130023424)===kn&&500>en()-pu?ls(t,0):hu|=o),ri(t,i)}function Gp(t,i){i===0&&((t.mode&1)===0?i=1:(i=ot,ot<<=1,(ot&130023424)===0&&(ot=4194304)));var o=Kn();t=lr(t,i),t!==null&&(Lt(t,i,o),ri(t,o))}function c_(t){var i=t.memoizedState,o=0;i!==null&&(o=i.retryLane),Gp(t,o)}function u_(t,i){var o=0;switch(t.tag){case 13:var c=t.stateNode,d=t.memoizedState;d!==null&&(o=d.retryLane);break;case 19:c=t.stateNode;break;default:throw Error(n(314))}c!==null&&c.delete(i),Gp(t,o)}var Wp;Wp=function(t,i,o){if(t!==null)if(t.memoizedProps!==i.pendingProps||ei.current)ni=!0;else{if((t.lanes&o)===0&&(i.flags&128)===0)return ni=!1,Zg(t,i,o);ni=(t.flags&131072)!==0}else ni=!1,dn&&(i.flags&1048576)!==0&&Eh(i,Ia,i.index);switch(i.lanes=0,i.tag){case 2:var c=i.type;qa(t,i),t=i.pendingProps;var d=Ns(i,zn.current);zs(i,o),d=Xc(null,i,c,t,d,o);var h=jc();return i.flags|=1,typeof d=="object"&&d!==null&&typeof d.render=="function"&&d.$$typeof===void 0?(i.tag=1,i.memoizedState=null,i.updateQueue=null,ti(c)?(h=!0,Pa(i)):h=!1,i.memoizedState=d.state!==null&&d.state!==void 0?d.state:null,kc(i),d.updater=ja,i.stateNode=d,d._reactInternals=i,Jc(i,c,t,o),i=nu(null,i,c,!0,h,o)):(i.tag=0,dn&&h&&Cc(i),$n(null,i,d,o),i=i.child),i;case 16:c=i.elementType;e:{switch(qa(t,i),t=i.pendingProps,d=c._init,c=d(c._payload),i.type=c,d=i.tag=f_(c),t=Pi(c,t),d){case 0:i=tu(null,i,c,t,o);break e;case 1:i=gp(null,i,c,t,o);break e;case 11:i=dp(null,i,c,t,o);break e;case 14:i=fp(null,i,c,Pi(c.type,t),o);break e}throw Error(n(306,c,""))}return i;case 0:return c=i.type,d=i.pendingProps,d=i.elementType===c?d:Pi(c,d),tu(t,i,c,d,o);case 1:return c=i.type,d=i.pendingProps,d=i.elementType===c?d:Pi(c,d),gp(t,i,c,d,o);case 3:e:{if(_p(i),t===null)throw Error(n(387));c=i.pendingProps,h=i.memoizedState,d=h.element,Dh(t,i),Ba(i,c,null,o);var E=i.memoizedState;if(c=E.element,h.isDehydrated)if(h={element:c,isDehydrated:!1,cache:E.cache,pendingSuspenseBoundaries:E.pendingSuspenseBoundaries,transitions:E.transitions},i.updateQueue.baseState=h,i.memoizedState=h,i.flags&256){d=Vs(Error(n(423)),i),i=vp(t,i,c,o,d);break e}else if(c!==d){d=Vs(Error(n(424)),i),i=vp(t,i,c,o,d);break e}else for(di=Cr(i.stateNode.containerInfo.firstChild),ui=i,dn=!0,Ri=null,o=Ph(i,null,c,o),i.child=o;o;)o.flags=o.flags&-3|4096,o=o.sibling;else{if(Os(),c===d){i=ur(t,i,o);break e}$n(t,i,c,o)}i=i.child}return i;case 5:return Uh(i),t===null&&Lc(i),c=i.type,d=i.pendingProps,h=t!==null?t.memoizedProps:null,E=d.children,Mc(c,d)?E=null:h!==null&&Mc(c,h)&&(i.flags|=32),mp(t,i),$n(t,i,E,o),i.child;case 6:return t===null&&Lc(i),null;case 13:return xp(t,i,o);case 4:return Bc(i,i.stateNode.containerInfo),c=i.pendingProps,t===null?i.child=ks(i,null,c,o):$n(t,i,c,o),i.child;case 11:return c=i.type,d=i.pendingProps,d=i.elementType===c?d:Pi(c,d),dp(t,i,c,d,o);case 7:return $n(t,i,i.pendingProps,o),i.child;case 8:return $n(t,i,i.pendingProps.children,o),i.child;case 12:return $n(t,i,i.pendingProps.children,o),i.child;case 10:e:{if(c=i.type._context,d=i.pendingProps,h=i.memoizedProps,E=d.value,nn(Fa,c._currentValue),c._currentValue=E,h!==null)if(Ci(h.value,E)){if(h.children===d.children&&!ei.current){i=ur(t,i,o);break e}}else for(h=i.child,h!==null&&(h.return=i);h!==null;){var U=h.dependencies;if(U!==null){E=h.child;for(var H=U.firstContext;H!==null;){if(H.context===c){if(h.tag===1){H=cr(-1,o&-o),H.tag=2;var le=h.updateQueue;if(le!==null){le=le.shared;var Re=le.pending;Re===null?H.next=H:(H.next=Re.next,Re.next=H),le.pending=H}}h.lanes|=o,H=h.alternate,H!==null&&(H.lanes|=o),Fc(h.return,o,i),U.lanes|=o;break}H=H.next}}else if(h.tag===10)E=h.type===i.type?null:h.child;else if(h.tag===18){if(E=h.return,E===null)throw Error(n(341));E.lanes|=o,U=E.alternate,U!==null&&(U.lanes|=o),Fc(E,o,i),E=h.sibling}else E=h.child;if(E!==null)E.return=h;else for(E=h;E!==null;){if(E===i){E=null;break}if(h=E.sibling,h!==null){h.return=E.return,E=h;break}E=E.return}h=E}$n(t,i,d.children,o),i=i.child}return i;case 9:return d=i.type,c=i.pendingProps.children,zs(i,o),d=Si(d),c=c(d),i.flags|=1,$n(t,i,c,o),i.child;case 14:return c=i.type,d=Pi(c,i.pendingProps),d=Pi(c.type,d),fp(t,i,c,d,o);case 15:return hp(t,i,i.type,i.pendingProps,o);case 17:return c=i.type,d=i.pendingProps,d=i.elementType===c?d:Pi(c,d),qa(t,i),i.tag=1,ti(c)?(t=!0,Pa(i)):t=!1,zs(i,o),rp(i,c,d),Jc(i,c,d,o),nu(null,i,c,!0,t,o);case 19:return yp(t,i,o);case 22:return pp(t,i,o)}throw Error(n(156,i.tag))};function Xp(t,i){return Bi(t,i)}function d_(t,i,o,c){this.tag=t,this.key=o,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=i,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=c,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Ei(t,i,o,c){return new d_(t,i,o,c)}function Mu(t){return t=t.prototype,!(!t||!t.isReactComponent)}function f_(t){if(typeof t=="function")return Mu(t)?1:0;if(t!=null){if(t=t.$$typeof,t===Y)return 11;if(t===W)return 14}return 2}function Br(t,i){var o=t.alternate;return o===null?(o=Ei(t.tag,i,t.key,t.mode),o.elementType=t.elementType,o.type=t.type,o.stateNode=t.stateNode,o.alternate=t,t.alternate=o):(o.pendingProps=i,o.type=t.type,o.flags=0,o.subtreeFlags=0,o.deletions=null),o.flags=t.flags&14680064,o.childLanes=t.childLanes,o.lanes=t.lanes,o.child=t.child,o.memoizedProps=t.memoizedProps,o.memoizedState=t.memoizedState,o.updateQueue=t.updateQueue,i=t.dependencies,o.dependencies=i===null?null:{lanes:i.lanes,firstContext:i.firstContext},o.sibling=t.sibling,o.index=t.index,o.ref=t.ref,o}function sl(t,i,o,c,d,h){var E=2;if(c=t,typeof t=="function")Mu(t)&&(E=1);else if(typeof t=="string")E=5;else e:switch(t){case k:return us(o.children,d,h,i);case w:E=8,d|=8;break;case N:return t=Ei(12,o,i,d|2),t.elementType=N,t.lanes=h,t;case oe:return t=Ei(13,o,i,d),t.elementType=oe,t.lanes=h,t;case he:return t=Ei(19,o,i,d),t.elementType=he,t.lanes=h,t;case $:return ol(o,d,h,i);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case j:E=10;break e;case O:E=9;break e;case Y:E=11;break e;case W:E=14;break e;case te:E=16,c=null;break e}throw Error(n(130,t==null?t:typeof t,""))}return i=Ei(E,o,i,d),i.elementType=t,i.type=c,i.lanes=h,i}function us(t,i,o,c){return t=Ei(7,t,c,i),t.lanes=o,t}function ol(t,i,o,c){return t=Ei(22,t,c,i),t.elementType=$,t.lanes=o,t.stateNode={isHidden:!1},t}function Eu(t,i,o){return t=Ei(6,t,null,i),t.lanes=o,t}function wu(t,i,o){return i=Ei(4,t.children!==null?t.children:[],t.key,i),i.lanes=o,i.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},i}function h_(t,i,o,c,d){this.tag=i,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Fn(0),this.expirationTimes=Fn(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Fn(0),this.identifierPrefix=c,this.onRecoverableError=d,this.mutableSourceEagerHydrationData=null}function Tu(t,i,o,c,d,h,E,U,H){return t=new h_(t,i,o,U,H),i===1?(i=1,h===!0&&(i|=8)):i=0,h=Ei(3,null,null,i),t.current=h,h.stateNode=t,h.memoizedState={element:c,isDehydrated:o,cache:null,transitions:null,pendingSuspenseBoundaries:null},kc(h),t}function p_(t,i,o){var c=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:I,key:c==null?null:""+c,children:t,containerInfo:i,implementation:o}}function jp(t){if(!t)return Pr;t=t._reactInternals;e:{if(cn(t)!==t||t.tag!==1)throw Error(n(170));var i=t;do{switch(i.tag){case 3:i=i.stateNode.context;break e;case 1:if(ti(i.type)){i=i.stateNode.__reactInternalMemoizedMergedChildContext;break e}}i=i.return}while(i!==null);throw Error(n(171))}if(t.tag===1){var o=t.type;if(ti(o))return Sh(t,o,i)}return i}function Yp(t,i,o,c,d,h,E,U,H){return t=Tu(o,c,!0,t,d,h,E,U,H),t.context=jp(null),o=t.current,c=Kn(),d=Or(o),h=cr(c,d),h.callback=i??null,Ir(o,h,d),t.current.lanes=d,Lt(t,d,c),ri(t,c),t}function al(t,i,o,c){var d=i.current,h=Kn(),E=Or(d);return o=jp(o),i.context===null?i.context=o:i.pendingContext=o,i=cr(h,E),i.payload={element:t},c=c===void 0?null:c,c!==null&&(i.callback=c),t=Ir(d,i,E),t!==null&&(Ii(t,d,E,h),ka(t,d,E)),E}function ll(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function qp(t,i){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var o=t.retryLane;t.retryLane=o!==0&&o<i?o:i}}function Au(t,i){qp(t,i),(t=t.alternate)&&qp(t,i)}function m_(){return null}var $p=typeof reportError=="function"?reportError:function(t){console.error(t)};function bu(t){this._internalRoot=t}cl.prototype.render=bu.prototype.render=function(t){var i=this._internalRoot;if(i===null)throw Error(n(409));al(t,i,null,null)},cl.prototype.unmount=bu.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var i=t.containerInfo;as(function(){al(null,t,null,null)}),i[rr]=null}};function cl(t){this._internalRoot=t}cl.prototype.unstable_scheduleHydration=function(t){if(t){var i=Zt();t={blockedOn:null,target:t,priority:i};for(var o=0;o<Tr.length&&i!==0&&i<Tr[o].priority;o++);Tr.splice(o,0,t),o===0&&Uf(t)}};function Cu(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function ul(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function Kp(){}function g_(t,i,o,c,d){if(d){if(typeof c=="function"){var h=c;c=function(){var le=ll(E);h.call(le)}}var E=Yp(i,c,t,0,null,!1,!1,"",Kp);return t._reactRootContainer=E,t[rr]=E.current,Do(t.nodeType===8?t.parentNode:t),as(),E}for(;d=t.lastChild;)t.removeChild(d);if(typeof c=="function"){var U=c;c=function(){var le=ll(H);U.call(le)}}var H=Tu(t,0,!1,null,null,!1,!1,"",Kp);return t._reactRootContainer=H,t[rr]=H.current,Do(t.nodeType===8?t.parentNode:t),as(function(){al(i,H,o,c)}),H}function dl(t,i,o,c,d){var h=o._reactRootContainer;if(h){var E=h;if(typeof d=="function"){var U=d;d=function(){var H=ll(E);U.call(H)}}al(i,E,t,d)}else E=g_(o,i,t,d,c);return ll(E)}$t=function(t){switch(t.tag){case 3:var i=t.stateNode;if(i.current.memoizedState.isDehydrated){var o=Wt(i.pendingLanes);o!==0&&(Qn(i,o|1),ri(i,en()),(jt&6)===0&&(Xs=en()+500,Lr()))}break;case 13:as(function(){var c=lr(t,1);if(c!==null){var d=Kn();Ii(c,t,1,d)}}),Au(t,1)}},sn=function(t){if(t.tag===13){var i=lr(t,134217728);if(i!==null){var o=Kn();Ii(i,t,134217728,o)}Au(t,134217728)}},Ai=function(t){if(t.tag===13){var i=Or(t),o=lr(t,i);if(o!==null){var c=Kn();Ii(o,t,i,c)}Au(t,i)}},Zt=function(){return Dt},bi=function(t,i){var o=Dt;try{return Dt=t,i()}finally{Dt=o}},mt=function(t,i,o){switch(i){case"input":if(Gt(t,o),i=o.name,o.type==="radio"&&i!=null){for(o=t;o.parentNode;)o=o.parentNode;for(o=o.querySelectorAll("input[name="+JSON.stringify(""+i)+'][type="radio"]'),i=0;i<o.length;i++){var c=o[i];if(c!==t&&c.form===t.form){var d=Ca(c);if(!d)throw Error(n(90));Nt(c),Gt(c,d)}}}break;case"textarea":D(t,o);break;case"select":i=o.value,i!=null&&zt(t,!!o.multiple,i,!1)}},Fe=xu,we=as;var __={usingClientEntryPoint:!1,Events:[Uo,Ds,Ca,ge,je,xu]},$o={findFiberByHostInstance:Qr,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},v_={bundleType:$o.bundleType,version:$o.version,rendererPackageName:$o.rendererPackageName,rendererConfig:$o.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:P.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=An(t),t===null?null:t.stateNode},findFiberByHostInstance:$o.findFiberByHostInstance||m_,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var fl=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!fl.isDisabled&&fl.supportsFiber)try{ie=fl.inject(v_),He=fl}catch{}}return si.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=__,si.createPortal=function(t,i){var o=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Cu(i))throw Error(n(200));return p_(t,i,null,o)},si.createRoot=function(t,i){if(!Cu(t))throw Error(n(299));var o=!1,c="",d=$p;return i!=null&&(i.unstable_strictMode===!0&&(o=!0),i.identifierPrefix!==void 0&&(c=i.identifierPrefix),i.onRecoverableError!==void 0&&(d=i.onRecoverableError)),i=Tu(t,1,!1,null,null,o,!1,c,d),t[rr]=i.current,Do(t.nodeType===8?t.parentNode:t),new bu(i)},si.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var i=t._reactInternals;if(i===void 0)throw typeof t.render=="function"?Error(n(188)):(t=Object.keys(t).join(","),Error(n(268,t)));return t=An(i),t=t===null?null:t.stateNode,t},si.flushSync=function(t){return as(t)},si.hydrate=function(t,i,o){if(!ul(i))throw Error(n(200));return dl(null,t,i,!0,o)},si.hydrateRoot=function(t,i,o){if(!Cu(t))throw Error(n(405));var c=o!=null&&o.hydratedSources||null,d=!1,h="",E=$p;if(o!=null&&(o.unstable_strictMode===!0&&(d=!0),o.identifierPrefix!==void 0&&(h=o.identifierPrefix),o.onRecoverableError!==void 0&&(E=o.onRecoverableError)),i=Yp(i,null,t,1,o??null,d,!1,h,E),t[rr]=i.current,Do(t),c)for(t=0;t<c.length;t++)o=c[t],d=o._getVersion,d=d(o._source),i.mutableSourceEagerHydrationData==null?i.mutableSourceEagerHydrationData=[o,d]:i.mutableSourceEagerHydrationData.push(o,d);return new cl(i)},si.render=function(t,i,o){if(!ul(i))throw Error(n(200));return dl(null,t,i,!1,o)},si.unmountComponentAtNode=function(t){if(!ul(t))throw Error(n(40));return t._reactRootContainer?(as(function(){dl(null,null,t,!1,function(){t._reactRootContainer=null,t[rr]=null})}),!0):!1},si.unstable_batchedUpdates=xu,si.unstable_renderSubtreeIntoContainer=function(t,i,o,c){if(!ul(o))throw Error(n(200));if(t==null||t._reactInternals===void 0)throw Error(n(38));return dl(t,i,o,!1,c)},si.version="18.3.1-next-f1338f8080-20240426",si}var rm;function A_(){if(rm)return Lu.exports;rm=1;function r(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(r)}catch(e){console.error(e)}}return r(),Lu.exports=T_(),Lu.exports}var sm;function b_(){if(sm)return hl;sm=1;var r=A_();return hl.createRoot=r.createRoot,hl.hydrateRoot=r.hydrateRoot,hl}var C_=b_(),Et=cf();/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const uf="184",R_=0,om=1,P_=2,oa=1,L_=2,ra=3,Kr=0,li=1,Ti=2,vr=0,lo=1,am=2,lm=3,cm=4,D_=5,gs=100,I_=101,N_=102,U_=103,F_=104,O_=200,k_=201,B_=202,z_=203,md=204,gd=205,H_=206,V_=207,G_=208,W_=209,X_=210,j_=211,Y_=212,q_=213,$_=214,_d=0,vd=1,xd=2,uo=3,Sd=4,yd=5,Md=6,Ed=7,l0=0,K_=1,Z_=2,Zi=0,c0=1,u0=2,d0=3,df=4,f0=5,h0=6,p0=7,m0=300,Ss=301,fo=302,Nu=303,Uu=304,Zl=306,wd=1e3,_r=1001,Td=1002,Bn=1003,J_=1004,pl=1005,jn=1006,Fu=1007,vs=1008,gi=1009,g0=1010,_0=1011,aa=1012,ff=1013,er=1014,qi=1015,Sr=1016,hf=1017,pf=1018,la=1020,v0=35902,x0=35899,S0=1021,y0=1022,ki=1023,yr=1026,xs=1027,M0=1028,mf=1029,ys=1030,gf=1031,_f=1033,Ol=33776,kl=33777,Bl=33778,zl=33779,Ad=35840,bd=35841,Cd=35842,Rd=35843,Pd=36196,Ld=37492,Dd=37496,Id=37488,Nd=37489,Vl=37490,Ud=37491,Fd=37808,Od=37809,kd=37810,Bd=37811,zd=37812,Hd=37813,Vd=37814,Gd=37815,Wd=37816,Xd=37817,jd=37818,Yd=37819,qd=37820,$d=37821,Kd=36492,Zd=36494,Jd=36495,Qd=36283,ef=36284,Gl=36285,tf=36286,Q_=3200,nf=0,ev=1,qr="",ai="srgb",Wl="srgb-linear",Xl="linear",Jt="srgb",Ys=7680,um=519,tv=512,nv=513,iv=514,vf=515,rv=516,sv=517,xf=518,ov=519,dm=35044,fm="300 es",$i=2e3,ca=2001;function av(r){for(let e=r.length-1;e>=0;--e)if(r[e]>=65535)return!0;return!1}function jl(r){return document.createElementNS("http://www.w3.org/1999/xhtml",r)}function lv(){const r=jl("canvas");return r.style.display="block",r}const hm={};function pm(...r){const e="THREE."+r.shift();console.log(e,...r)}function E0(r){const e=r[0];if(typeof e=="string"&&e.startsWith("TSL:")){const n=r[1];n&&n.isStackTrace?r[0]+=" "+n.getLocation():r[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return r}function yt(...r){r=E0(r);const e="THREE."+r.shift();{const n=r[0];n&&n.isStackTrace?console.warn(n.getError(e)):console.warn(e,...r)}}function Xt(...r){r=E0(r);const e="THREE."+r.shift();{const n=r[0];n&&n.isStackTrace?console.error(n.getError(e)):console.error(e,...r)}}function rf(...r){const e=r.join(" ");e in hm||(hm[e]=!0,yt(...r))}function cv(r,e,n){return new Promise(function(s,a){function l(){switch(r.clientWaitSync(e,r.SYNC_FLUSH_COMMANDS_BIT,0)){case r.WAIT_FAILED:a();break;case r.TIMEOUT_EXPIRED:setTimeout(l,n);break;default:s()}}setTimeout(l,n)})}const uv={[_d]:vd,[xd]:Md,[Sd]:Ed,[uo]:yd,[vd]:_d,[Md]:xd,[Ed]:Sd,[yd]:uo};class Ms{addEventListener(e,n){this._listeners===void 0&&(this._listeners={});const s=this._listeners;s[e]===void 0&&(s[e]=[]),s[e].indexOf(n)===-1&&s[e].push(n)}hasEventListener(e,n){const s=this._listeners;return s===void 0?!1:s[e]!==void 0&&s[e].indexOf(n)!==-1}removeEventListener(e,n){const s=this._listeners;if(s===void 0)return;const a=s[e];if(a!==void 0){const l=a.indexOf(n);l!==-1&&a.splice(l,1)}}dispatchEvent(e){const n=this._listeners;if(n===void 0)return;const s=n[e.type];if(s!==void 0){e.target=this;const a=s.slice(0);for(let l=0,u=a.length;l<u;l++)a[l].call(this,e);e.target=null}}}const Wn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Ou=Math.PI/180,sf=180/Math.PI;function ua(){const r=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0,s=Math.random()*4294967295|0;return(Wn[r&255]+Wn[r>>8&255]+Wn[r>>16&255]+Wn[r>>24&255]+"-"+Wn[e&255]+Wn[e>>8&255]+"-"+Wn[e>>16&15|64]+Wn[e>>24&255]+"-"+Wn[n&63|128]+Wn[n>>8&255]+"-"+Wn[n>>16&255]+Wn[n>>24&255]+Wn[s&255]+Wn[s>>8&255]+Wn[s>>16&255]+Wn[s>>24&255]).toLowerCase()}function kt(r,e,n){return Math.max(e,Math.min(n,r))}function dv(r,e){return(r%e+e)%e}function ku(r,e,n){return(1-n)*r+n*e}function Zo(r,e){switch(e.constructor){case Float32Array:return r;case Uint32Array:return r/4294967295;case Uint16Array:return r/65535;case Uint8Array:return r/255;case Int32Array:return Math.max(r/2147483647,-1);case Int16Array:return Math.max(r/32767,-1);case Int8Array:return Math.max(r/127,-1);default:throw new Error("Invalid component type.")}}function oi(r,e){switch(e.constructor){case Float32Array:return r;case Uint32Array:return Math.round(r*4294967295);case Uint16Array:return Math.round(r*65535);case Uint8Array:return Math.round(r*255);case Int32Array:return Math.round(r*2147483647);case Int16Array:return Math.round(r*32767);case Int8Array:return Math.round(r*127);default:throw new Error("Invalid component type.")}}const Rf=class Rf{constructor(e=0,n=0){this.x=e,this.y=n}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,n){return this.x=e,this.y=n,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const n=this.x,s=this.y,a=e.elements;return this.x=a[0]*n+a[3]*s+a[6],this.y=a[1]*n+a[4]*s+a[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,n){return this.x=kt(this.x,e.x,n.x),this.y=kt(this.y,e.y,n.y),this}clampScalar(e,n){return this.x=kt(this.x,e,n),this.y=kt(this.y,e,n),this}clampLength(e,n){const s=this.length();return this.divideScalar(s||1).multiplyScalar(kt(s,e,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const s=this.dot(e)/n;return Math.acos(kt(s,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,s=this.y-e.y;return n*n+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this}lerpVectors(e,n,s){return this.x=e.x+(n.x-e.x)*s,this.y=e.y+(n.y-e.y)*s,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this}rotateAround(e,n){const s=Math.cos(n),a=Math.sin(n),l=this.x-e.x,u=this.y-e.y;return this.x=l*s-u*a+e.x,this.y=l*a+u*s+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};Rf.prototype.isVector2=!0;let Vt=Rf;class mo{constructor(e=0,n=0,s=0,a=1){this.isQuaternion=!0,this._x=e,this._y=n,this._z=s,this._w=a}static slerpFlat(e,n,s,a,l,u,f){let p=s[a+0],m=s[a+1],x=s[a+2],S=s[a+3],g=l[u+0],M=l[u+1],T=l[u+2],C=l[u+3];if(S!==C||p!==g||m!==M||x!==T){let _=p*g+m*M+x*T+S*C;_<0&&(g=-g,M=-M,T=-T,C=-C,_=-_);let v=1-f;if(_<.9995){const b=Math.acos(_),L=Math.sin(b);v=Math.sin(v*b)/L,f=Math.sin(f*b)/L,p=p*v+g*f,m=m*v+M*f,x=x*v+T*f,S=S*v+C*f}else{p=p*v+g*f,m=m*v+M*f,x=x*v+T*f,S=S*v+C*f;const b=1/Math.sqrt(p*p+m*m+x*x+S*S);p*=b,m*=b,x*=b,S*=b}}e[n]=p,e[n+1]=m,e[n+2]=x,e[n+3]=S}static multiplyQuaternionsFlat(e,n,s,a,l,u){const f=s[a],p=s[a+1],m=s[a+2],x=s[a+3],S=l[u],g=l[u+1],M=l[u+2],T=l[u+3];return e[n]=f*T+x*S+p*M-m*g,e[n+1]=p*T+x*g+m*S-f*M,e[n+2]=m*T+x*M+f*g-p*S,e[n+3]=x*T-f*S-p*g-m*M,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,n,s,a){return this._x=e,this._y=n,this._z=s,this._w=a,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,n=!0){const s=e._x,a=e._y,l=e._z,u=e._order,f=Math.cos,p=Math.sin,m=f(s/2),x=f(a/2),S=f(l/2),g=p(s/2),M=p(a/2),T=p(l/2);switch(u){case"XYZ":this._x=g*x*S+m*M*T,this._y=m*M*S-g*x*T,this._z=m*x*T+g*M*S,this._w=m*x*S-g*M*T;break;case"YXZ":this._x=g*x*S+m*M*T,this._y=m*M*S-g*x*T,this._z=m*x*T-g*M*S,this._w=m*x*S+g*M*T;break;case"ZXY":this._x=g*x*S-m*M*T,this._y=m*M*S+g*x*T,this._z=m*x*T+g*M*S,this._w=m*x*S-g*M*T;break;case"ZYX":this._x=g*x*S-m*M*T,this._y=m*M*S+g*x*T,this._z=m*x*T-g*M*S,this._w=m*x*S+g*M*T;break;case"YZX":this._x=g*x*S+m*M*T,this._y=m*M*S+g*x*T,this._z=m*x*T-g*M*S,this._w=m*x*S-g*M*T;break;case"XZY":this._x=g*x*S-m*M*T,this._y=m*M*S-g*x*T,this._z=m*x*T+g*M*S,this._w=m*x*S+g*M*T;break;default:yt("Quaternion: .setFromEuler() encountered an unknown order: "+u)}return n===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,n){const s=n/2,a=Math.sin(s);return this._x=e.x*a,this._y=e.y*a,this._z=e.z*a,this._w=Math.cos(s),this._onChangeCallback(),this}setFromRotationMatrix(e){const n=e.elements,s=n[0],a=n[4],l=n[8],u=n[1],f=n[5],p=n[9],m=n[2],x=n[6],S=n[10],g=s+f+S;if(g>0){const M=.5/Math.sqrt(g+1);this._w=.25/M,this._x=(x-p)*M,this._y=(l-m)*M,this._z=(u-a)*M}else if(s>f&&s>S){const M=2*Math.sqrt(1+s-f-S);this._w=(x-p)/M,this._x=.25*M,this._y=(a+u)/M,this._z=(l+m)/M}else if(f>S){const M=2*Math.sqrt(1+f-s-S);this._w=(l-m)/M,this._x=(a+u)/M,this._y=.25*M,this._z=(p+x)/M}else{const M=2*Math.sqrt(1+S-s-f);this._w=(u-a)/M,this._x=(l+m)/M,this._y=(p+x)/M,this._z=.25*M}return this._onChangeCallback(),this}setFromUnitVectors(e,n){let s=e.dot(n)+1;return s<1e-8?(s=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=s):(this._x=0,this._y=-e.z,this._z=e.y,this._w=s)):(this._x=e.y*n.z-e.z*n.y,this._y=e.z*n.x-e.x*n.z,this._z=e.x*n.y-e.y*n.x,this._w=s),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(kt(this.dot(e),-1,1)))}rotateTowards(e,n){const s=this.angleTo(e);if(s===0)return this;const a=Math.min(1,n/s);return this.slerp(e,a),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,n){const s=e._x,a=e._y,l=e._z,u=e._w,f=n._x,p=n._y,m=n._z,x=n._w;return this._x=s*x+u*f+a*m-l*p,this._y=a*x+u*p+l*f-s*m,this._z=l*x+u*m+s*p-a*f,this._w=u*x-s*f-a*p-l*m,this._onChangeCallback(),this}slerp(e,n){let s=e._x,a=e._y,l=e._z,u=e._w,f=this.dot(e);f<0&&(s=-s,a=-a,l=-l,u=-u,f=-f);let p=1-n;if(f<.9995){const m=Math.acos(f),x=Math.sin(m);p=Math.sin(p*m)/x,n=Math.sin(n*m)/x,this._x=this._x*p+s*n,this._y=this._y*p+a*n,this._z=this._z*p+l*n,this._w=this._w*p+u*n,this._onChangeCallback()}else this._x=this._x*p+s*n,this._y=this._y*p+a*n,this._z=this._z*p+l*n,this._w=this._w*p+u*n,this.normalize();return this}slerpQuaternions(e,n,s){return this.copy(e).slerp(n,s)}random(){const e=2*Math.PI*Math.random(),n=2*Math.PI*Math.random(),s=Math.random(),a=Math.sqrt(1-s),l=Math.sqrt(s);return this.set(a*Math.sin(e),a*Math.cos(e),l*Math.sin(n),l*Math.cos(n))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,n=0){return this._x=e[n],this._y=e[n+1],this._z=e[n+2],this._w=e[n+3],this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._w,e}fromBufferAttribute(e,n){return this._x=e.getX(n),this._y=e.getY(n),this._z=e.getZ(n),this._w=e.getW(n),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}const Pf=class Pf{constructor(e=0,n=0,s=0){this.x=e,this.y=n,this.z=s}set(e,n,s){return s===void 0&&(s=this.z),this.x=e,this.y=n,this.z=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,n){return this.x=e.x*n.x,this.y=e.y*n.y,this.z=e.z*n.z,this}applyEuler(e){return this.applyQuaternion(mm.setFromEuler(e))}applyAxisAngle(e,n){return this.applyQuaternion(mm.setFromAxisAngle(e,n))}applyMatrix3(e){const n=this.x,s=this.y,a=this.z,l=e.elements;return this.x=l[0]*n+l[3]*s+l[6]*a,this.y=l[1]*n+l[4]*s+l[7]*a,this.z=l[2]*n+l[5]*s+l[8]*a,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const n=this.x,s=this.y,a=this.z,l=e.elements,u=1/(l[3]*n+l[7]*s+l[11]*a+l[15]);return this.x=(l[0]*n+l[4]*s+l[8]*a+l[12])*u,this.y=(l[1]*n+l[5]*s+l[9]*a+l[13])*u,this.z=(l[2]*n+l[6]*s+l[10]*a+l[14])*u,this}applyQuaternion(e){const n=this.x,s=this.y,a=this.z,l=e.x,u=e.y,f=e.z,p=e.w,m=2*(u*a-f*s),x=2*(f*n-l*a),S=2*(l*s-u*n);return this.x=n+p*m+u*S-f*x,this.y=s+p*x+f*m-l*S,this.z=a+p*S+l*x-u*m,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const n=this.x,s=this.y,a=this.z,l=e.elements;return this.x=l[0]*n+l[4]*s+l[8]*a,this.y=l[1]*n+l[5]*s+l[9]*a,this.z=l[2]*n+l[6]*s+l[10]*a,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,n){return this.x=kt(this.x,e.x,n.x),this.y=kt(this.y,e.y,n.y),this.z=kt(this.z,e.z,n.z),this}clampScalar(e,n){return this.x=kt(this.x,e,n),this.y=kt(this.y,e,n),this.z=kt(this.z,e,n),this}clampLength(e,n){const s=this.length();return this.divideScalar(s||1).multiplyScalar(kt(s,e,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this}lerpVectors(e,n,s){return this.x=e.x+(n.x-e.x)*s,this.y=e.y+(n.y-e.y)*s,this.z=e.z+(n.z-e.z)*s,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,n){const s=e.x,a=e.y,l=e.z,u=n.x,f=n.y,p=n.z;return this.x=a*p-l*f,this.y=l*u-s*p,this.z=s*f-a*u,this}projectOnVector(e){const n=e.lengthSq();if(n===0)return this.set(0,0,0);const s=e.dot(this)/n;return this.copy(e).multiplyScalar(s)}projectOnPlane(e){return Bu.copy(this).projectOnVector(e),this.sub(Bu)}reflect(e){return this.sub(Bu.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const s=this.dot(e)/n;return Math.acos(kt(s,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,s=this.y-e.y,a=this.z-e.z;return n*n+s*s+a*a}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,n,s){const a=Math.sin(n)*e;return this.x=a*Math.sin(s),this.y=Math.cos(n)*e,this.z=a*Math.cos(s),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,n,s){return this.x=e*Math.sin(n),this.y=s,this.z=e*Math.cos(n),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this}setFromMatrixScale(e){const n=this.setFromMatrixColumn(e,0).length(),s=this.setFromMatrixColumn(e,1).length(),a=this.setFromMatrixColumn(e,2).length();return this.x=n,this.y=s,this.z=a,this}setFromMatrixColumn(e,n){return this.fromArray(e.elements,n*4)}setFromMatrix3Column(e,n){return this.fromArray(e.elements,n*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,n=Math.random()*2-1,s=Math.sqrt(1-n*n);return this.x=s*Math.cos(e),this.y=n,this.z=s*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};Pf.prototype.isVector3=!0;let J=Pf;const Bu=new J,mm=new mo,Lf=class Lf{constructor(e,n,s,a,l,u,f,p,m){this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,n,s,a,l,u,f,p,m)}set(e,n,s,a,l,u,f,p,m){const x=this.elements;return x[0]=e,x[1]=a,x[2]=f,x[3]=n,x[4]=l,x[5]=p,x[6]=s,x[7]=u,x[8]=m,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const n=this.elements,s=e.elements;return n[0]=s[0],n[1]=s[1],n[2]=s[2],n[3]=s[3],n[4]=s[4],n[5]=s[5],n[6]=s[6],n[7]=s[7],n[8]=s[8],this}extractBasis(e,n,s){return e.setFromMatrix3Column(this,0),n.setFromMatrix3Column(this,1),s.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const n=e.elements;return this.set(n[0],n[4],n[8],n[1],n[5],n[9],n[2],n[6],n[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const s=e.elements,a=n.elements,l=this.elements,u=s[0],f=s[3],p=s[6],m=s[1],x=s[4],S=s[7],g=s[2],M=s[5],T=s[8],C=a[0],_=a[3],v=a[6],b=a[1],L=a[4],P=a[7],B=a[2],I=a[5],k=a[8];return l[0]=u*C+f*b+p*B,l[3]=u*_+f*L+p*I,l[6]=u*v+f*P+p*k,l[1]=m*C+x*b+S*B,l[4]=m*_+x*L+S*I,l[7]=m*v+x*P+S*k,l[2]=g*C+M*b+T*B,l[5]=g*_+M*L+T*I,l[8]=g*v+M*P+T*k,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[3]*=e,n[6]*=e,n[1]*=e,n[4]*=e,n[7]*=e,n[2]*=e,n[5]*=e,n[8]*=e,this}determinant(){const e=this.elements,n=e[0],s=e[1],a=e[2],l=e[3],u=e[4],f=e[5],p=e[6],m=e[7],x=e[8];return n*u*x-n*f*m-s*l*x+s*f*p+a*l*m-a*u*p}invert(){const e=this.elements,n=e[0],s=e[1],a=e[2],l=e[3],u=e[4],f=e[5],p=e[6],m=e[7],x=e[8],S=x*u-f*m,g=f*p-x*l,M=m*l-u*p,T=n*S+s*g+a*M;if(T===0)return this.set(0,0,0,0,0,0,0,0,0);const C=1/T;return e[0]=S*C,e[1]=(a*m-x*s)*C,e[2]=(f*s-a*u)*C,e[3]=g*C,e[4]=(x*n-a*p)*C,e[5]=(a*l-f*n)*C,e[6]=M*C,e[7]=(s*p-m*n)*C,e[8]=(u*n-s*l)*C,this}transpose(){let e;const n=this.elements;return e=n[1],n[1]=n[3],n[3]=e,e=n[2],n[2]=n[6],n[6]=e,e=n[5],n[5]=n[7],n[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const n=this.elements;return e[0]=n[0],e[1]=n[3],e[2]=n[6],e[3]=n[1],e[4]=n[4],e[5]=n[7],e[6]=n[2],e[7]=n[5],e[8]=n[8],this}setUvTransform(e,n,s,a,l,u,f){const p=Math.cos(l),m=Math.sin(l);return this.set(s*p,s*m,-s*(p*u+m*f)+u+e,-a*m,a*p,-a*(-m*u+p*f)+f+n,0,0,1),this}scale(e,n){return this.premultiply(zu.makeScale(e,n)),this}rotate(e){return this.premultiply(zu.makeRotation(-e)),this}translate(e,n){return this.premultiply(zu.makeTranslation(e,n)),this}makeTranslation(e,n){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,n,0,0,1),this}makeRotation(e){const n=Math.cos(e),s=Math.sin(e);return this.set(n,-s,0,s,n,0,0,0,1),this}makeScale(e,n){return this.set(e,0,0,0,n,0,0,0,1),this}equals(e){const n=this.elements,s=e.elements;for(let a=0;a<9;a++)if(n[a]!==s[a])return!1;return!0}fromArray(e,n=0){for(let s=0;s<9;s++)this.elements[s]=e[s+n];return this}toArray(e=[],n=0){const s=this.elements;return e[n]=s[0],e[n+1]=s[1],e[n+2]=s[2],e[n+3]=s[3],e[n+4]=s[4],e[n+5]=s[5],e[n+6]=s[6],e[n+7]=s[7],e[n+8]=s[8],e}clone(){return new this.constructor().fromArray(this.elements)}};Lf.prototype.isMatrix3=!0;let Ct=Lf;const zu=new Ct,gm=new Ct().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),_m=new Ct().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function fv(){const r={enabled:!0,workingColorSpace:Wl,spaces:{},convert:function(a,l,u){return this.enabled===!1||l===u||!l||!u||(this.spaces[l].transfer===Jt&&(a.r=xr(a.r),a.g=xr(a.g),a.b=xr(a.b)),this.spaces[l].primaries!==this.spaces[u].primaries&&(a.applyMatrix3(this.spaces[l].toXYZ),a.applyMatrix3(this.spaces[u].fromXYZ)),this.spaces[u].transfer===Jt&&(a.r=co(a.r),a.g=co(a.g),a.b=co(a.b))),a},workingToColorSpace:function(a,l){return this.convert(a,this.workingColorSpace,l)},colorSpaceToWorking:function(a,l){return this.convert(a,l,this.workingColorSpace)},getPrimaries:function(a){return this.spaces[a].primaries},getTransfer:function(a){return a===qr?Xl:this.spaces[a].transfer},getToneMappingMode:function(a){return this.spaces[a].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(a,l=this.workingColorSpace){return a.fromArray(this.spaces[l].luminanceCoefficients)},define:function(a){Object.assign(this.spaces,a)},_getMatrix:function(a,l,u){return a.copy(this.spaces[l].toXYZ).multiply(this.spaces[u].fromXYZ)},_getDrawingBufferColorSpace:function(a){return this.spaces[a].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(a=this.workingColorSpace){return this.spaces[a].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(a,l){return rf("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),r.workingToColorSpace(a,l)},toWorkingColorSpace:function(a,l){return rf("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),r.colorSpaceToWorking(a,l)}},e=[.64,.33,.3,.6,.15,.06],n=[.2126,.7152,.0722],s=[.3127,.329];return r.define({[Wl]:{primaries:e,whitePoint:s,transfer:Xl,toXYZ:gm,fromXYZ:_m,luminanceCoefficients:n,workingColorSpaceConfig:{unpackColorSpace:ai},outputColorSpaceConfig:{drawingBufferColorSpace:ai}},[ai]:{primaries:e,whitePoint:s,transfer:Jt,toXYZ:gm,fromXYZ:_m,luminanceCoefficients:n,outputColorSpaceConfig:{drawingBufferColorSpace:ai}}}),r}const Ht=fv();function xr(r){return r<.04045?r*.0773993808:Math.pow(r*.9478672986+.0521327014,2.4)}function co(r){return r<.0031308?r*12.92:1.055*Math.pow(r,.41666)-.055}let qs;class hv{static getDataURL(e,n="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let s;if(e instanceof HTMLCanvasElement)s=e;else{qs===void 0&&(qs=jl("canvas")),qs.width=e.width,qs.height=e.height;const a=qs.getContext("2d");e instanceof ImageData?a.putImageData(e,0,0):a.drawImage(e,0,0,e.width,e.height),s=qs}return s.toDataURL(n)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const n=jl("canvas");n.width=e.width,n.height=e.height;const s=n.getContext("2d");s.drawImage(e,0,0,e.width,e.height);const a=s.getImageData(0,0,e.width,e.height),l=a.data;for(let u=0;u<l.length;u++)l[u]=xr(l[u]/255)*255;return s.putImageData(a,0,0),n}else if(e.data){const n=e.data.slice(0);for(let s=0;s<n.length;s++)n instanceof Uint8Array||n instanceof Uint8ClampedArray?n[s]=Math.floor(xr(n[s]/255)*255):n[s]=xr(n[s]);return{data:n,width:e.width,height:e.height}}else return yt("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let pv=0;class Sf{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:pv++}),this.uuid=ua(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const n=this.data;return typeof HTMLVideoElement<"u"&&n instanceof HTMLVideoElement?e.set(n.videoWidth,n.videoHeight,0):typeof VideoFrame<"u"&&n instanceof VideoFrame?e.set(n.displayWidth,n.displayHeight,0):n!==null?e.set(n.width,n.height,n.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const s={uuid:this.uuid,url:""},a=this.data;if(a!==null){let l;if(Array.isArray(a)){l=[];for(let u=0,f=a.length;u<f;u++)a[u].isDataTexture?l.push(Hu(a[u].image)):l.push(Hu(a[u]))}else l=Hu(a);s.url=l}return n||(e.images[this.uuid]=s),s}}function Hu(r){return typeof HTMLImageElement<"u"&&r instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&r instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&r instanceof ImageBitmap?hv.getDataURL(r):r.data?{data:Array.from(r.data),width:r.width,height:r.height,type:r.data.constructor.name}:(yt("Texture: Unable to serialize Texture."),{})}let mv=0;const Vu=new J;class Yn extends Ms{constructor(e=Yn.DEFAULT_IMAGE,n=Yn.DEFAULT_MAPPING,s=_r,a=_r,l=jn,u=vs,f=ki,p=gi,m=Yn.DEFAULT_ANISOTROPY,x=qr){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:mv++}),this.uuid=ua(),this.name="",this.source=new Sf(e),this.mipmaps=[],this.mapping=n,this.channel=0,this.wrapS=s,this.wrapT=a,this.magFilter=l,this.minFilter=u,this.anisotropy=m,this.format=f,this.internalFormat=null,this.type=p,this.offset=new Vt(0,0),this.repeat=new Vt(1,1),this.center=new Vt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Ct,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=x,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(Vu).x}get height(){return this.source.getSize(Vu).y}get depth(){return this.source.getSize(Vu).z}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,n){this.updateRanges.push({start:e,count:n})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.normalized=e.normalized,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const n in e){const s=e[n];if(s===void 0){yt(`Texture.setValues(): parameter '${n}' has value of undefined.`);continue}const a=this[n];if(a===void 0){yt(`Texture.setValues(): property '${n}' does not exist.`);continue}a&&s&&a.isVector2&&s.isVector2||a&&s&&a.isVector3&&s.isVector3||a&&s&&a.isMatrix3&&s.isMatrix3?a.copy(s):this[n]=s}}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const s={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(s.userData=this.userData),n||(e.textures[this.uuid]=s),s}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==m0)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case wd:e.x=e.x-Math.floor(e.x);break;case _r:e.x=e.x<0?0:1;break;case Td:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case wd:e.y=e.y-Math.floor(e.y);break;case _r:e.y=e.y<0?0:1;break;case Td:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}Yn.DEFAULT_IMAGE=null;Yn.DEFAULT_MAPPING=m0;Yn.DEFAULT_ANISOTROPY=1;const Df=class Df{constructor(e=0,n=0,s=0,a=1){this.x=e,this.y=n,this.z=s,this.w=a}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,n,s,a){return this.x=e,this.y=n,this.z=s,this.w=a,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;case 3:this.w=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this.w=e.w+n.w,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this.w+=e.w*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this.w=e.w-n.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const n=this.x,s=this.y,a=this.z,l=this.w,u=e.elements;return this.x=u[0]*n+u[4]*s+u[8]*a+u[12]*l,this.y=u[1]*n+u[5]*s+u[9]*a+u[13]*l,this.z=u[2]*n+u[6]*s+u[10]*a+u[14]*l,this.w=u[3]*n+u[7]*s+u[11]*a+u[15]*l,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const n=Math.sqrt(1-e.w*e.w);return n<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/n,this.y=e.y/n,this.z=e.z/n),this}setAxisAngleFromRotationMatrix(e){let n,s,a,l;const p=e.elements,m=p[0],x=p[4],S=p[8],g=p[1],M=p[5],T=p[9],C=p[2],_=p[6],v=p[10];if(Math.abs(x-g)<.01&&Math.abs(S-C)<.01&&Math.abs(T-_)<.01){if(Math.abs(x+g)<.1&&Math.abs(S+C)<.1&&Math.abs(T+_)<.1&&Math.abs(m+M+v-3)<.1)return this.set(1,0,0,0),this;n=Math.PI;const L=(m+1)/2,P=(M+1)/2,B=(v+1)/2,I=(x+g)/4,k=(S+C)/4,w=(T+_)/4;return L>P&&L>B?L<.01?(s=0,a=.707106781,l=.707106781):(s=Math.sqrt(L),a=I/s,l=k/s):P>B?P<.01?(s=.707106781,a=0,l=.707106781):(a=Math.sqrt(P),s=I/a,l=w/a):B<.01?(s=.707106781,a=.707106781,l=0):(l=Math.sqrt(B),s=k/l,a=w/l),this.set(s,a,l,n),this}let b=Math.sqrt((_-T)*(_-T)+(S-C)*(S-C)+(g-x)*(g-x));return Math.abs(b)<.001&&(b=1),this.x=(_-T)/b,this.y=(S-C)/b,this.z=(g-x)/b,this.w=Math.acos((m+M+v-1)/2),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this.w=n[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,n){return this.x=kt(this.x,e.x,n.x),this.y=kt(this.y,e.y,n.y),this.z=kt(this.z,e.z,n.z),this.w=kt(this.w,e.w,n.w),this}clampScalar(e,n){return this.x=kt(this.x,e,n),this.y=kt(this.y,e,n),this.z=kt(this.z,e,n),this.w=kt(this.w,e,n),this}clampLength(e,n){const s=this.length();return this.divideScalar(s||1).multiplyScalar(kt(s,e,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this.w+=(e.w-this.w)*n,this}lerpVectors(e,n,s){return this.x=e.x+(n.x-e.x)*s,this.y=e.y+(n.y-e.y)*s,this.z=e.z+(n.z-e.z)*s,this.w=e.w+(n.w-e.w)*s,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this.w=e[n+3],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e[n+3]=this.w,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this.w=e.getW(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};Df.prototype.isVector4=!0;let gn=Df;class gv extends Ms{constructor(e=1,n=1,s={}){super(),s=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:jn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},s),this.isRenderTarget=!0,this.width=e,this.height=n,this.depth=s.depth,this.scissor=new gn(0,0,e,n),this.scissorTest=!1,this.viewport=new gn(0,0,e,n),this.textures=[];const a={width:e,height:n,depth:s.depth},l=new Yn(a),u=s.count;for(let f=0;f<u;f++)this.textures[f]=l.clone(),this.textures[f].isRenderTargetTexture=!0,this.textures[f].renderTarget=this;this._setTextureOptions(s),this.depthBuffer=s.depthBuffer,this.stencilBuffer=s.stencilBuffer,this.resolveDepthBuffer=s.resolveDepthBuffer,this.resolveStencilBuffer=s.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=s.depthTexture,this.samples=s.samples,this.multiview=s.multiview}_setTextureOptions(e={}){const n={minFilter:jn,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(n.mapping=e.mapping),e.wrapS!==void 0&&(n.wrapS=e.wrapS),e.wrapT!==void 0&&(n.wrapT=e.wrapT),e.wrapR!==void 0&&(n.wrapR=e.wrapR),e.magFilter!==void 0&&(n.magFilter=e.magFilter),e.minFilter!==void 0&&(n.minFilter=e.minFilter),e.format!==void 0&&(n.format=e.format),e.type!==void 0&&(n.type=e.type),e.anisotropy!==void 0&&(n.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(n.colorSpace=e.colorSpace),e.flipY!==void 0&&(n.flipY=e.flipY),e.generateMipmaps!==void 0&&(n.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(n.internalFormat=e.internalFormat);for(let s=0;s<this.textures.length;s++)this.textures[s].setValues(n)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,n,s=1){if(this.width!==e||this.height!==n||this.depth!==s){this.width=e,this.height=n,this.depth=s;for(let a=0,l=this.textures.length;a<l;a++)this.textures[a].image.width=e,this.textures[a].image.height=n,this.textures[a].image.depth=s,this.textures[a].isData3DTexture!==!0&&(this.textures[a].isArrayTexture=this.textures[a].image.depth>1);this.dispose()}this.viewport.set(0,0,e,n),this.scissor.set(0,0,e,n)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let n=0,s=e.textures.length;n<s;n++){this.textures[n]=e.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0,this.textures[n].renderTarget=this;const a=Object.assign({},e.textures[n].image);this.textures[n].source=new Sf(a)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this.multiview=e.multiview,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Ji extends gv{constructor(e=1,n=1,s={}){super(e,n,s),this.isWebGLRenderTarget=!0}}class w0 extends Yn{constructor(e=null,n=1,s=1,a=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:n,height:s,depth:a},this.magFilter=Bn,this.minFilter=Bn,this.wrapR=_r,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class _v extends Yn{constructor(e=null,n=1,s=1,a=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:n,height:s,depth:a},this.magFilter=Bn,this.minFilter=Bn,this.wrapR=_r,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const Kl=class Kl{constructor(e,n,s,a,l,u,f,p,m,x,S,g,M,T,C,_){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,n,s,a,l,u,f,p,m,x,S,g,M,T,C,_)}set(e,n,s,a,l,u,f,p,m,x,S,g,M,T,C,_){const v=this.elements;return v[0]=e,v[4]=n,v[8]=s,v[12]=a,v[1]=l,v[5]=u,v[9]=f,v[13]=p,v[2]=m,v[6]=x,v[10]=S,v[14]=g,v[3]=M,v[7]=T,v[11]=C,v[15]=_,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Kl().fromArray(this.elements)}copy(e){const n=this.elements,s=e.elements;return n[0]=s[0],n[1]=s[1],n[2]=s[2],n[3]=s[3],n[4]=s[4],n[5]=s[5],n[6]=s[6],n[7]=s[7],n[8]=s[8],n[9]=s[9],n[10]=s[10],n[11]=s[11],n[12]=s[12],n[13]=s[13],n[14]=s[14],n[15]=s[15],this}copyPosition(e){const n=this.elements,s=e.elements;return n[12]=s[12],n[13]=s[13],n[14]=s[14],this}setFromMatrix3(e){const n=e.elements;return this.set(n[0],n[3],n[6],0,n[1],n[4],n[7],0,n[2],n[5],n[8],0,0,0,0,1),this}extractBasis(e,n,s){return this.determinant()===0?(e.set(1,0,0),n.set(0,1,0),s.set(0,0,1),this):(e.setFromMatrixColumn(this,0),n.setFromMatrixColumn(this,1),s.setFromMatrixColumn(this,2),this)}makeBasis(e,n,s){return this.set(e.x,n.x,s.x,0,e.y,n.y,s.y,0,e.z,n.z,s.z,0,0,0,0,1),this}extractRotation(e){if(e.determinant()===0)return this.identity();const n=this.elements,s=e.elements,a=1/$s.setFromMatrixColumn(e,0).length(),l=1/$s.setFromMatrixColumn(e,1).length(),u=1/$s.setFromMatrixColumn(e,2).length();return n[0]=s[0]*a,n[1]=s[1]*a,n[2]=s[2]*a,n[3]=0,n[4]=s[4]*l,n[5]=s[5]*l,n[6]=s[6]*l,n[7]=0,n[8]=s[8]*u,n[9]=s[9]*u,n[10]=s[10]*u,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromEuler(e){const n=this.elements,s=e.x,a=e.y,l=e.z,u=Math.cos(s),f=Math.sin(s),p=Math.cos(a),m=Math.sin(a),x=Math.cos(l),S=Math.sin(l);if(e.order==="XYZ"){const g=u*x,M=u*S,T=f*x,C=f*S;n[0]=p*x,n[4]=-p*S,n[8]=m,n[1]=M+T*m,n[5]=g-C*m,n[9]=-f*p,n[2]=C-g*m,n[6]=T+M*m,n[10]=u*p}else if(e.order==="YXZ"){const g=p*x,M=p*S,T=m*x,C=m*S;n[0]=g+C*f,n[4]=T*f-M,n[8]=u*m,n[1]=u*S,n[5]=u*x,n[9]=-f,n[2]=M*f-T,n[6]=C+g*f,n[10]=u*p}else if(e.order==="ZXY"){const g=p*x,M=p*S,T=m*x,C=m*S;n[0]=g-C*f,n[4]=-u*S,n[8]=T+M*f,n[1]=M+T*f,n[5]=u*x,n[9]=C-g*f,n[2]=-u*m,n[6]=f,n[10]=u*p}else if(e.order==="ZYX"){const g=u*x,M=u*S,T=f*x,C=f*S;n[0]=p*x,n[4]=T*m-M,n[8]=g*m+C,n[1]=p*S,n[5]=C*m+g,n[9]=M*m-T,n[2]=-m,n[6]=f*p,n[10]=u*p}else if(e.order==="YZX"){const g=u*p,M=u*m,T=f*p,C=f*m;n[0]=p*x,n[4]=C-g*S,n[8]=T*S+M,n[1]=S,n[5]=u*x,n[9]=-f*x,n[2]=-m*x,n[6]=M*S+T,n[10]=g-C*S}else if(e.order==="XZY"){const g=u*p,M=u*m,T=f*p,C=f*m;n[0]=p*x,n[4]=-S,n[8]=m*x,n[1]=g*S+C,n[5]=u*x,n[9]=M*S-T,n[2]=T*S-M,n[6]=f*x,n[10]=C*S+g}return n[3]=0,n[7]=0,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromQuaternion(e){return this.compose(vv,e,xv)}lookAt(e,n,s){const a=this.elements;return hi.subVectors(e,n),hi.lengthSq()===0&&(hi.z=1),hi.normalize(),Hr.crossVectors(s,hi),Hr.lengthSq()===0&&(Math.abs(s.z)===1?hi.x+=1e-4:hi.z+=1e-4,hi.normalize(),Hr.crossVectors(s,hi)),Hr.normalize(),ml.crossVectors(hi,Hr),a[0]=Hr.x,a[4]=ml.x,a[8]=hi.x,a[1]=Hr.y,a[5]=ml.y,a[9]=hi.y,a[2]=Hr.z,a[6]=ml.z,a[10]=hi.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const s=e.elements,a=n.elements,l=this.elements,u=s[0],f=s[4],p=s[8],m=s[12],x=s[1],S=s[5],g=s[9],M=s[13],T=s[2],C=s[6],_=s[10],v=s[14],b=s[3],L=s[7],P=s[11],B=s[15],I=a[0],k=a[4],w=a[8],N=a[12],j=a[1],O=a[5],Y=a[9],oe=a[13],he=a[2],W=a[6],te=a[10],$=a[14],Z=a[3],ce=a[7],ue=a[11],F=a[15];return l[0]=u*I+f*j+p*he+m*Z,l[4]=u*k+f*O+p*W+m*ce,l[8]=u*w+f*Y+p*te+m*ue,l[12]=u*N+f*oe+p*$+m*F,l[1]=x*I+S*j+g*he+M*Z,l[5]=x*k+S*O+g*W+M*ce,l[9]=x*w+S*Y+g*te+M*ue,l[13]=x*N+S*oe+g*$+M*F,l[2]=T*I+C*j+_*he+v*Z,l[6]=T*k+C*O+_*W+v*ce,l[10]=T*w+C*Y+_*te+v*ue,l[14]=T*N+C*oe+_*$+v*F,l[3]=b*I+L*j+P*he+B*Z,l[7]=b*k+L*O+P*W+B*ce,l[11]=b*w+L*Y+P*te+B*ue,l[15]=b*N+L*oe+P*$+B*F,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[4]*=e,n[8]*=e,n[12]*=e,n[1]*=e,n[5]*=e,n[9]*=e,n[13]*=e,n[2]*=e,n[6]*=e,n[10]*=e,n[14]*=e,n[3]*=e,n[7]*=e,n[11]*=e,n[15]*=e,this}determinant(){const e=this.elements,n=e[0],s=e[4],a=e[8],l=e[12],u=e[1],f=e[5],p=e[9],m=e[13],x=e[2],S=e[6],g=e[10],M=e[14],T=e[3],C=e[7],_=e[11],v=e[15],b=p*M-m*g,L=f*M-m*S,P=f*g-p*S,B=u*M-m*x,I=u*g-p*x,k=u*S-f*x;return n*(C*b-_*L+v*P)-s*(T*b-_*B+v*I)+a*(T*L-C*B+v*k)-l*(T*P-C*I+_*k)}transpose(){const e=this.elements;let n;return n=e[1],e[1]=e[4],e[4]=n,n=e[2],e[2]=e[8],e[8]=n,n=e[6],e[6]=e[9],e[9]=n,n=e[3],e[3]=e[12],e[12]=n,n=e[7],e[7]=e[13],e[13]=n,n=e[11],e[11]=e[14],e[14]=n,this}setPosition(e,n,s){const a=this.elements;return e.isVector3?(a[12]=e.x,a[13]=e.y,a[14]=e.z):(a[12]=e,a[13]=n,a[14]=s),this}invert(){const e=this.elements,n=e[0],s=e[1],a=e[2],l=e[3],u=e[4],f=e[5],p=e[6],m=e[7],x=e[8],S=e[9],g=e[10],M=e[11],T=e[12],C=e[13],_=e[14],v=e[15],b=n*f-s*u,L=n*p-a*u,P=n*m-l*u,B=s*p-a*f,I=s*m-l*f,k=a*m-l*p,w=x*C-S*T,N=x*_-g*T,j=x*v-M*T,O=S*_-g*C,Y=S*v-M*C,oe=g*v-M*_,he=b*oe-L*Y+P*O+B*j-I*N+k*w;if(he===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const W=1/he;return e[0]=(f*oe-p*Y+m*O)*W,e[1]=(a*Y-s*oe-l*O)*W,e[2]=(C*k-_*I+v*B)*W,e[3]=(g*I-S*k-M*B)*W,e[4]=(p*j-u*oe-m*N)*W,e[5]=(n*oe-a*j+l*N)*W,e[6]=(_*P-T*k-v*L)*W,e[7]=(x*k-g*P+M*L)*W,e[8]=(u*Y-f*j+m*w)*W,e[9]=(s*j-n*Y-l*w)*W,e[10]=(T*I-C*P+v*b)*W,e[11]=(S*P-x*I-M*b)*W,e[12]=(f*N-u*O-p*w)*W,e[13]=(n*O-s*N+a*w)*W,e[14]=(C*L-T*B-_*b)*W,e[15]=(x*B-S*L+g*b)*W,this}scale(e){const n=this.elements,s=e.x,a=e.y,l=e.z;return n[0]*=s,n[4]*=a,n[8]*=l,n[1]*=s,n[5]*=a,n[9]*=l,n[2]*=s,n[6]*=a,n[10]*=l,n[3]*=s,n[7]*=a,n[11]*=l,this}getMaxScaleOnAxis(){const e=this.elements,n=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],s=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],a=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(n,s,a))}makeTranslation(e,n,s){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,n,0,0,1,s,0,0,0,1),this}makeRotationX(e){const n=Math.cos(e),s=Math.sin(e);return this.set(1,0,0,0,0,n,-s,0,0,s,n,0,0,0,0,1),this}makeRotationY(e){const n=Math.cos(e),s=Math.sin(e);return this.set(n,0,s,0,0,1,0,0,-s,0,n,0,0,0,0,1),this}makeRotationZ(e){const n=Math.cos(e),s=Math.sin(e);return this.set(n,-s,0,0,s,n,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,n){const s=Math.cos(n),a=Math.sin(n),l=1-s,u=e.x,f=e.y,p=e.z,m=l*u,x=l*f;return this.set(m*u+s,m*f-a*p,m*p+a*f,0,m*f+a*p,x*f+s,x*p-a*u,0,m*p-a*f,x*p+a*u,l*p*p+s,0,0,0,0,1),this}makeScale(e,n,s){return this.set(e,0,0,0,0,n,0,0,0,0,s,0,0,0,0,1),this}makeShear(e,n,s,a,l,u){return this.set(1,s,l,0,e,1,u,0,n,a,1,0,0,0,0,1),this}compose(e,n,s){const a=this.elements,l=n._x,u=n._y,f=n._z,p=n._w,m=l+l,x=u+u,S=f+f,g=l*m,M=l*x,T=l*S,C=u*x,_=u*S,v=f*S,b=p*m,L=p*x,P=p*S,B=s.x,I=s.y,k=s.z;return a[0]=(1-(C+v))*B,a[1]=(M+P)*B,a[2]=(T-L)*B,a[3]=0,a[4]=(M-P)*I,a[5]=(1-(g+v))*I,a[6]=(_+b)*I,a[7]=0,a[8]=(T+L)*k,a[9]=(_-b)*k,a[10]=(1-(g+C))*k,a[11]=0,a[12]=e.x,a[13]=e.y,a[14]=e.z,a[15]=1,this}decompose(e,n,s){const a=this.elements;e.x=a[12],e.y=a[13],e.z=a[14];const l=this.determinant();if(l===0)return s.set(1,1,1),n.identity(),this;let u=$s.set(a[0],a[1],a[2]).length();const f=$s.set(a[4],a[5],a[6]).length(),p=$s.set(a[8],a[9],a[10]).length();l<0&&(u=-u),Ni.copy(this);const m=1/u,x=1/f,S=1/p;return Ni.elements[0]*=m,Ni.elements[1]*=m,Ni.elements[2]*=m,Ni.elements[4]*=x,Ni.elements[5]*=x,Ni.elements[6]*=x,Ni.elements[8]*=S,Ni.elements[9]*=S,Ni.elements[10]*=S,n.setFromRotationMatrix(Ni),s.x=u,s.y=f,s.z=p,this}makePerspective(e,n,s,a,l,u,f=$i,p=!1){const m=this.elements,x=2*l/(n-e),S=2*l/(s-a),g=(n+e)/(n-e),M=(s+a)/(s-a);let T,C;if(p)T=l/(u-l),C=u*l/(u-l);else if(f===$i)T=-(u+l)/(u-l),C=-2*u*l/(u-l);else if(f===ca)T=-u/(u-l),C=-u*l/(u-l);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+f);return m[0]=x,m[4]=0,m[8]=g,m[12]=0,m[1]=0,m[5]=S,m[9]=M,m[13]=0,m[2]=0,m[6]=0,m[10]=T,m[14]=C,m[3]=0,m[7]=0,m[11]=-1,m[15]=0,this}makeOrthographic(e,n,s,a,l,u,f=$i,p=!1){const m=this.elements,x=2/(n-e),S=2/(s-a),g=-(n+e)/(n-e),M=-(s+a)/(s-a);let T,C;if(p)T=1/(u-l),C=u/(u-l);else if(f===$i)T=-2/(u-l),C=-(u+l)/(u-l);else if(f===ca)T=-1/(u-l),C=-l/(u-l);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+f);return m[0]=x,m[4]=0,m[8]=0,m[12]=g,m[1]=0,m[5]=S,m[9]=0,m[13]=M,m[2]=0,m[6]=0,m[10]=T,m[14]=C,m[3]=0,m[7]=0,m[11]=0,m[15]=1,this}equals(e){const n=this.elements,s=e.elements;for(let a=0;a<16;a++)if(n[a]!==s[a])return!1;return!0}fromArray(e,n=0){for(let s=0;s<16;s++)this.elements[s]=e[s+n];return this}toArray(e=[],n=0){const s=this.elements;return e[n]=s[0],e[n+1]=s[1],e[n+2]=s[2],e[n+3]=s[3],e[n+4]=s[4],e[n+5]=s[5],e[n+6]=s[6],e[n+7]=s[7],e[n+8]=s[8],e[n+9]=s[9],e[n+10]=s[10],e[n+11]=s[11],e[n+12]=s[12],e[n+13]=s[13],e[n+14]=s[14],e[n+15]=s[15],e}};Kl.prototype.isMatrix4=!0;let _n=Kl;const $s=new J,Ni=new _n,vv=new J(0,0,0),xv=new J(1,1,1),Hr=new J,ml=new J,hi=new J,vm=new _n,xm=new mo;class Zr{constructor(e=0,n=0,s=0,a=Zr.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=n,this._z=s,this._order=a}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,n,s,a=this._order){return this._x=e,this._y=n,this._z=s,this._order=a,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,n=this._order,s=!0){const a=e.elements,l=a[0],u=a[4],f=a[8],p=a[1],m=a[5],x=a[9],S=a[2],g=a[6],M=a[10];switch(n){case"XYZ":this._y=Math.asin(kt(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(-x,M),this._z=Math.atan2(-u,l)):(this._x=Math.atan2(g,m),this._z=0);break;case"YXZ":this._x=Math.asin(-kt(x,-1,1)),Math.abs(x)<.9999999?(this._y=Math.atan2(f,M),this._z=Math.atan2(p,m)):(this._y=Math.atan2(-S,l),this._z=0);break;case"ZXY":this._x=Math.asin(kt(g,-1,1)),Math.abs(g)<.9999999?(this._y=Math.atan2(-S,M),this._z=Math.atan2(-u,m)):(this._y=0,this._z=Math.atan2(p,l));break;case"ZYX":this._y=Math.asin(-kt(S,-1,1)),Math.abs(S)<.9999999?(this._x=Math.atan2(g,M),this._z=Math.atan2(p,l)):(this._x=0,this._z=Math.atan2(-u,m));break;case"YZX":this._z=Math.asin(kt(p,-1,1)),Math.abs(p)<.9999999?(this._x=Math.atan2(-x,m),this._y=Math.atan2(-S,l)):(this._x=0,this._y=Math.atan2(f,M));break;case"XZY":this._z=Math.asin(-kt(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(g,m),this._y=Math.atan2(f,l)):(this._x=Math.atan2(-x,M),this._y=0);break;default:yt("Euler: .setFromRotationMatrix() encountered an unknown order: "+n)}return this._order=n,s===!0&&this._onChangeCallback(),this}setFromQuaternion(e,n,s){return vm.makeRotationFromQuaternion(e),this.setFromRotationMatrix(vm,n,s)}setFromVector3(e,n=this._order){return this.set(e.x,e.y,e.z,n)}reorder(e){return xm.setFromEuler(this),this.setFromQuaternion(xm,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Zr.DEFAULT_ORDER="XYZ";class yf{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let Sv=0;const Sm=new J,Ks=new mo,fr=new _n,gl=new J,Jo=new J,yv=new J,Mv=new mo,ym=new J(1,0,0),Mm=new J(0,1,0),Em=new J(0,0,1),wm={type:"added"},Ev={type:"removed"},Zs={type:"childadded",child:null},Gu={type:"childremoved",child:null};class qn extends Ms{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Sv++}),this.uuid=ua(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=qn.DEFAULT_UP.clone();const e=new J,n=new Zr,s=new mo,a=new J(1,1,1);function l(){s.setFromEuler(n,!1)}function u(){n.setFromQuaternion(s,void 0,!1)}n._onChange(l),s._onChange(u),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:n},quaternion:{configurable:!0,enumerable:!0,value:s},scale:{configurable:!0,enumerable:!0,value:a},modelViewMatrix:{value:new _n},normalMatrix:{value:new Ct}}),this.matrix=new _n,this.matrixWorld=new _n,this.matrixAutoUpdate=qn.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=qn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new yf,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,n){this.quaternion.setFromAxisAngle(e,n)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,n){return Ks.setFromAxisAngle(e,n),this.quaternion.multiply(Ks),this}rotateOnWorldAxis(e,n){return Ks.setFromAxisAngle(e,n),this.quaternion.premultiply(Ks),this}rotateX(e){return this.rotateOnAxis(ym,e)}rotateY(e){return this.rotateOnAxis(Mm,e)}rotateZ(e){return this.rotateOnAxis(Em,e)}translateOnAxis(e,n){return Sm.copy(e).applyQuaternion(this.quaternion),this.position.add(Sm.multiplyScalar(n)),this}translateX(e){return this.translateOnAxis(ym,e)}translateY(e){return this.translateOnAxis(Mm,e)}translateZ(e){return this.translateOnAxis(Em,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(fr.copy(this.matrixWorld).invert())}lookAt(e,n,s){e.isVector3?gl.copy(e):gl.set(e,n,s);const a=this.parent;this.updateWorldMatrix(!0,!1),Jo.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?fr.lookAt(Jo,gl,this.up):fr.lookAt(gl,Jo,this.up),this.quaternion.setFromRotationMatrix(fr),a&&(fr.extractRotation(a.matrixWorld),Ks.setFromRotationMatrix(fr),this.quaternion.premultiply(Ks.invert()))}add(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.add(arguments[n]);return this}return e===this?(Xt("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(wm),Zs.child=e,this.dispatchEvent(Zs),Zs.child=null):Xt("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let s=0;s<arguments.length;s++)this.remove(arguments[s]);return this}const n=this.children.indexOf(e);return n!==-1&&(e.parent=null,this.children.splice(n,1),e.dispatchEvent(Ev),Gu.child=e,this.dispatchEvent(Gu),Gu.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),fr.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),fr.multiply(e.parent.matrixWorld)),e.applyMatrix4(fr),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(wm),Zs.child=e,this.dispatchEvent(Zs),Zs.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,n){if(this[e]===n)return this;for(let s=0,a=this.children.length;s<a;s++){const u=this.children[s].getObjectByProperty(e,n);if(u!==void 0)return u}}getObjectsByProperty(e,n,s=[]){this[e]===n&&s.push(this);const a=this.children;for(let l=0,u=a.length;l<u;l++)a[l].getObjectsByProperty(e,n,s);return s}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Jo,e,yv),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Jo,Mv,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const n=this.matrixWorld.elements;return e.set(n[8],n[9],n[10]).normalize()}raycast(){}traverse(e){e(this);const n=this.children;for(let s=0,a=n.length;s<a;s++)n[s].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const n=this.children;for(let s=0,a=n.length;s<a;s++)n[s].traverseVisible(e)}traverseAncestors(e){const n=this.parent;n!==null&&(e(n),n.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);const e=this.pivot;if(e!==null){const n=e.x,s=e.y,a=e.z,l=this.matrix.elements;l[12]+=n-l[0]*n-l[4]*s-l[8]*a,l[13]+=s-l[1]*n-l[5]*s-l[9]*a,l[14]+=a-l[2]*n-l[6]*s-l[10]*a}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const n=this.children;for(let s=0,a=n.length;s<a;s++)n[s].updateMatrixWorld(e)}updateWorldMatrix(e,n){const s=this.parent;if(e===!0&&s!==null&&s.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),n===!0){const a=this.children;for(let l=0,u=a.length;l<u;l++)a[l].updateWorldMatrix(!1,!0)}}toJSON(e){const n=e===void 0||typeof e=="string",s={};n&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},s.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const a={};a.uuid=this.uuid,a.type=this.type,this.name!==""&&(a.name=this.name),this.castShadow===!0&&(a.castShadow=!0),this.receiveShadow===!0&&(a.receiveShadow=!0),this.visible===!1&&(a.visible=!1),this.frustumCulled===!1&&(a.frustumCulled=!1),this.renderOrder!==0&&(a.renderOrder=this.renderOrder),this.static!==!1&&(a.static=this.static),Object.keys(this.userData).length>0&&(a.userData=this.userData),a.layers=this.layers.mask,a.matrix=this.matrix.toArray(),a.up=this.up.toArray(),this.pivot!==null&&(a.pivot=this.pivot.toArray()),this.matrixAutoUpdate===!1&&(a.matrixAutoUpdate=!1),this.morphTargetDictionary!==void 0&&(a.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(a.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(a.type="InstancedMesh",a.count=this.count,a.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(a.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(a.type="BatchedMesh",a.perObjectFrustumCulled=this.perObjectFrustumCulled,a.sortObjects=this.sortObjects,a.drawRanges=this._drawRanges,a.reservedRanges=this._reservedRanges,a.geometryInfo=this._geometryInfo.map(f=>({...f,boundingBox:f.boundingBox?f.boundingBox.toJSON():void 0,boundingSphere:f.boundingSphere?f.boundingSphere.toJSON():void 0})),a.instanceInfo=this._instanceInfo.map(f=>({...f})),a.availableInstanceIds=this._availableInstanceIds.slice(),a.availableGeometryIds=this._availableGeometryIds.slice(),a.nextIndexStart=this._nextIndexStart,a.nextVertexStart=this._nextVertexStart,a.geometryCount=this._geometryCount,a.maxInstanceCount=this._maxInstanceCount,a.maxVertexCount=this._maxVertexCount,a.maxIndexCount=this._maxIndexCount,a.geometryInitialized=this._geometryInitialized,a.matricesTexture=this._matricesTexture.toJSON(e),a.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(a.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(a.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(a.boundingBox=this.boundingBox.toJSON()));function l(f,p){return f[p.uuid]===void 0&&(f[p.uuid]=p.toJSON(e)),p.uuid}if(this.isScene)this.background&&(this.background.isColor?a.background=this.background.toJSON():this.background.isTexture&&(a.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(a.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){a.geometry=l(e.geometries,this.geometry);const f=this.geometry.parameters;if(f!==void 0&&f.shapes!==void 0){const p=f.shapes;if(Array.isArray(p))for(let m=0,x=p.length;m<x;m++){const S=p[m];l(e.shapes,S)}else l(e.shapes,p)}}if(this.isSkinnedMesh&&(a.bindMode=this.bindMode,a.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(l(e.skeletons,this.skeleton),a.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const f=[];for(let p=0,m=this.material.length;p<m;p++)f.push(l(e.materials,this.material[p]));a.material=f}else a.material=l(e.materials,this.material);if(this.children.length>0){a.children=[];for(let f=0;f<this.children.length;f++)a.children.push(this.children[f].toJSON(e).object)}if(this.animations.length>0){a.animations=[];for(let f=0;f<this.animations.length;f++){const p=this.animations[f];a.animations.push(l(e.animations,p))}}if(n){const f=u(e.geometries),p=u(e.materials),m=u(e.textures),x=u(e.images),S=u(e.shapes),g=u(e.skeletons),M=u(e.animations),T=u(e.nodes);f.length>0&&(s.geometries=f),p.length>0&&(s.materials=p),m.length>0&&(s.textures=m),x.length>0&&(s.images=x),S.length>0&&(s.shapes=S),g.length>0&&(s.skeletons=g),M.length>0&&(s.animations=M),T.length>0&&(s.nodes=T)}return s.object=a,s;function u(f){const p=[];for(const m in f){const x=f[m];delete x.metadata,p.push(x)}return p}}clone(e){return new this.constructor().copy(this,e)}copy(e,n=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.pivot=e.pivot!==null?e.pivot.clone():null,this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),n===!0)for(let s=0;s<e.children.length;s++){const a=e.children[s];this.add(a.clone())}return this}}qn.DEFAULT_UP=new J(0,1,0);qn.DEFAULT_MATRIX_AUTO_UPDATE=!0;qn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;class Ki extends qn{constructor(){super(),this.isGroup=!0,this.type="Group"}}const wv={type:"move"};class Wu{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Ki,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Ki,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new J,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new J),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Ki,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new J,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new J,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const n=this._hand;if(n)for(const s of e.hand.values())this._getHandJoint(n,s)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,n,s){let a=null,l=null,u=null;const f=this._targetRay,p=this._grip,m=this._hand;if(e&&n.session.visibilityState!=="visible-blurred"){if(m&&e.hand){u=!0;for(const C of e.hand.values()){const _=n.getJointPose(C,s),v=this._getHandJoint(m,C);_!==null&&(v.matrix.fromArray(_.transform.matrix),v.matrix.decompose(v.position,v.rotation,v.scale),v.matrixWorldNeedsUpdate=!0,v.jointRadius=_.radius),v.visible=_!==null}const x=m.joints["index-finger-tip"],S=m.joints["thumb-tip"],g=x.position.distanceTo(S.position),M=.02,T=.005;m.inputState.pinching&&g>M+T?(m.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!m.inputState.pinching&&g<=M-T&&(m.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else p!==null&&e.gripSpace&&(l=n.getPose(e.gripSpace,s),l!==null&&(p.matrix.fromArray(l.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,l.linearVelocity?(p.hasLinearVelocity=!0,p.linearVelocity.copy(l.linearVelocity)):p.hasLinearVelocity=!1,l.angularVelocity?(p.hasAngularVelocity=!0,p.angularVelocity.copy(l.angularVelocity)):p.hasAngularVelocity=!1,p.eventsEnabled&&p.dispatchEvent({type:"gripUpdated",data:e,target:this})));f!==null&&(a=n.getPose(e.targetRaySpace,s),a===null&&l!==null&&(a=l),a!==null&&(f.matrix.fromArray(a.transform.matrix),f.matrix.decompose(f.position,f.rotation,f.scale),f.matrixWorldNeedsUpdate=!0,a.linearVelocity?(f.hasLinearVelocity=!0,f.linearVelocity.copy(a.linearVelocity)):f.hasLinearVelocity=!1,a.angularVelocity?(f.hasAngularVelocity=!0,f.angularVelocity.copy(a.angularVelocity)):f.hasAngularVelocity=!1,this.dispatchEvent(wv)))}return f!==null&&(f.visible=a!==null),p!==null&&(p.visible=l!==null),m!==null&&(m.visible=u!==null),this}_getHandJoint(e,n){if(e.joints[n.jointName]===void 0){const s=new Ki;s.matrixAutoUpdate=!1,s.visible=!1,e.joints[n.jointName]=s,e.add(s)}return e.joints[n.jointName]}}const T0={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Vr={h:0,s:0,l:0},_l={h:0,s:0,l:0};function Xu(r,e,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?r+(e-r)*6*n:n<1/2?e:n<2/3?r+(e-r)*6*(2/3-n):r}class Rt{constructor(e,n,s){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,n,s)}set(e,n,s){if(n===void 0&&s===void 0){const a=e;a&&a.isColor?this.copy(a):typeof a=="number"?this.setHex(a):typeof a=="string"&&this.setStyle(a)}else this.setRGB(e,n,s);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,n=ai){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Ht.colorSpaceToWorking(this,n),this}setRGB(e,n,s,a=Ht.workingColorSpace){return this.r=e,this.g=n,this.b=s,Ht.colorSpaceToWorking(this,a),this}setHSL(e,n,s,a=Ht.workingColorSpace){if(e=dv(e,1),n=kt(n,0,1),s=kt(s,0,1),n===0)this.r=this.g=this.b=s;else{const l=s<=.5?s*(1+n):s+n-s*n,u=2*s-l;this.r=Xu(u,l,e+1/3),this.g=Xu(u,l,e),this.b=Xu(u,l,e-1/3)}return Ht.colorSpaceToWorking(this,a),this}setStyle(e,n=ai){function s(l){l!==void 0&&parseFloat(l)<1&&yt("Color: Alpha component of "+e+" will be ignored.")}let a;if(a=/^(\w+)\(([^\)]*)\)/.exec(e)){let l;const u=a[1],f=a[2];switch(u){case"rgb":case"rgba":if(l=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(f))return s(l[4]),this.setRGB(Math.min(255,parseInt(l[1],10))/255,Math.min(255,parseInt(l[2],10))/255,Math.min(255,parseInt(l[3],10))/255,n);if(l=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(f))return s(l[4]),this.setRGB(Math.min(100,parseInt(l[1],10))/100,Math.min(100,parseInt(l[2],10))/100,Math.min(100,parseInt(l[3],10))/100,n);break;case"hsl":case"hsla":if(l=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(f))return s(l[4]),this.setHSL(parseFloat(l[1])/360,parseFloat(l[2])/100,parseFloat(l[3])/100,n);break;default:yt("Color: Unknown color model "+e)}}else if(a=/^\#([A-Fa-f\d]+)$/.exec(e)){const l=a[1],u=l.length;if(u===3)return this.setRGB(parseInt(l.charAt(0),16)/15,parseInt(l.charAt(1),16)/15,parseInt(l.charAt(2),16)/15,n);if(u===6)return this.setHex(parseInt(l,16),n);yt("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,n);return this}setColorName(e,n=ai){const s=T0[e.toLowerCase()];return s!==void 0?this.setHex(s,n):yt("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=xr(e.r),this.g=xr(e.g),this.b=xr(e.b),this}copyLinearToSRGB(e){return this.r=co(e.r),this.g=co(e.g),this.b=co(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=ai){return Ht.workingToColorSpace(Xn.copy(this),e),Math.round(kt(Xn.r*255,0,255))*65536+Math.round(kt(Xn.g*255,0,255))*256+Math.round(kt(Xn.b*255,0,255))}getHexString(e=ai){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,n=Ht.workingColorSpace){Ht.workingToColorSpace(Xn.copy(this),n);const s=Xn.r,a=Xn.g,l=Xn.b,u=Math.max(s,a,l),f=Math.min(s,a,l);let p,m;const x=(f+u)/2;if(f===u)p=0,m=0;else{const S=u-f;switch(m=x<=.5?S/(u+f):S/(2-u-f),u){case s:p=(a-l)/S+(a<l?6:0);break;case a:p=(l-s)/S+2;break;case l:p=(s-a)/S+4;break}p/=6}return e.h=p,e.s=m,e.l=x,e}getRGB(e,n=Ht.workingColorSpace){return Ht.workingToColorSpace(Xn.copy(this),n),e.r=Xn.r,e.g=Xn.g,e.b=Xn.b,e}getStyle(e=ai){Ht.workingToColorSpace(Xn.copy(this),e);const n=Xn.r,s=Xn.g,a=Xn.b;return e!==ai?`color(${e} ${n.toFixed(3)} ${s.toFixed(3)} ${a.toFixed(3)})`:`rgb(${Math.round(n*255)},${Math.round(s*255)},${Math.round(a*255)})`}offsetHSL(e,n,s){return this.getHSL(Vr),this.setHSL(Vr.h+e,Vr.s+n,Vr.l+s)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,n){return this.r=e.r+n.r,this.g=e.g+n.g,this.b=e.b+n.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,n){return this.r+=(e.r-this.r)*n,this.g+=(e.g-this.g)*n,this.b+=(e.b-this.b)*n,this}lerpColors(e,n,s){return this.r=e.r+(n.r-e.r)*s,this.g=e.g+(n.g-e.g)*s,this.b=e.b+(n.b-e.b)*s,this}lerpHSL(e,n){this.getHSL(Vr),e.getHSL(_l);const s=ku(Vr.h,_l.h,n),a=ku(Vr.s,_l.s,n),l=ku(Vr.l,_l.l,n);return this.setHSL(s,a,l),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const n=this.r,s=this.g,a=this.b,l=e.elements;return this.r=l[0]*n+l[3]*s+l[6]*a,this.g=l[1]*n+l[4]*s+l[7]*a,this.b=l[2]*n+l[5]*s+l[8]*a,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,n=0){return this.r=e[n],this.g=e[n+1],this.b=e[n+2],this}toArray(e=[],n=0){return e[n]=this.r,e[n+1]=this.g,e[n+2]=this.b,e}fromBufferAttribute(e,n){return this.r=e.getX(n),this.g=e.getY(n),this.b=e.getZ(n),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Xn=new Rt;Rt.NAMES=T0;class Mf{constructor(e,n=1,s=1e3){this.isFog=!0,this.name="",this.color=new Rt(e),this.near=n,this.far=s}clone(){return new Mf(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}}class Tv extends qn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Zr,this.environmentIntensity=1,this.environmentRotation=new Zr,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,n){return super.copy(e,n),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const n=super.toJSON(e);return this.fog!==null&&(n.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(n.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(n.object.backgroundIntensity=this.backgroundIntensity),n.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(n.object.environmentIntensity=this.environmentIntensity),n.object.environmentRotation=this.environmentRotation.toArray(),n}}const Ui=new J,hr=new J,ju=new J,pr=new J,Js=new J,Qs=new J,Tm=new J,Yu=new J,qu=new J,$u=new J,Ku=new gn,Zu=new gn,Ju=new gn;class Oi{constructor(e=new J,n=new J,s=new J){this.a=e,this.b=n,this.c=s}static getNormal(e,n,s,a){a.subVectors(s,n),Ui.subVectors(e,n),a.cross(Ui);const l=a.lengthSq();return l>0?a.multiplyScalar(1/Math.sqrt(l)):a.set(0,0,0)}static getBarycoord(e,n,s,a,l){Ui.subVectors(a,n),hr.subVectors(s,n),ju.subVectors(e,n);const u=Ui.dot(Ui),f=Ui.dot(hr),p=Ui.dot(ju),m=hr.dot(hr),x=hr.dot(ju),S=u*m-f*f;if(S===0)return l.set(0,0,0),null;const g=1/S,M=(m*p-f*x)*g,T=(u*x-f*p)*g;return l.set(1-M-T,T,M)}static containsPoint(e,n,s,a){return this.getBarycoord(e,n,s,a,pr)===null?!1:pr.x>=0&&pr.y>=0&&pr.x+pr.y<=1}static getInterpolation(e,n,s,a,l,u,f,p){return this.getBarycoord(e,n,s,a,pr)===null?(p.x=0,p.y=0,"z"in p&&(p.z=0),"w"in p&&(p.w=0),null):(p.setScalar(0),p.addScaledVector(l,pr.x),p.addScaledVector(u,pr.y),p.addScaledVector(f,pr.z),p)}static getInterpolatedAttribute(e,n,s,a,l,u){return Ku.setScalar(0),Zu.setScalar(0),Ju.setScalar(0),Ku.fromBufferAttribute(e,n),Zu.fromBufferAttribute(e,s),Ju.fromBufferAttribute(e,a),u.setScalar(0),u.addScaledVector(Ku,l.x),u.addScaledVector(Zu,l.y),u.addScaledVector(Ju,l.z),u}static isFrontFacing(e,n,s,a){return Ui.subVectors(s,n),hr.subVectors(e,n),Ui.cross(hr).dot(a)<0}set(e,n,s){return this.a.copy(e),this.b.copy(n),this.c.copy(s),this}setFromPointsAndIndices(e,n,s,a){return this.a.copy(e[n]),this.b.copy(e[s]),this.c.copy(e[a]),this}setFromAttributeAndIndices(e,n,s,a){return this.a.fromBufferAttribute(e,n),this.b.fromBufferAttribute(e,s),this.c.fromBufferAttribute(e,a),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Ui.subVectors(this.c,this.b),hr.subVectors(this.a,this.b),Ui.cross(hr).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Oi.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,n){return Oi.getBarycoord(e,this.a,this.b,this.c,n)}getInterpolation(e,n,s,a,l){return Oi.getInterpolation(e,this.a,this.b,this.c,n,s,a,l)}containsPoint(e){return Oi.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Oi.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,n){const s=this.a,a=this.b,l=this.c;let u,f;Js.subVectors(a,s),Qs.subVectors(l,s),Yu.subVectors(e,s);const p=Js.dot(Yu),m=Qs.dot(Yu);if(p<=0&&m<=0)return n.copy(s);qu.subVectors(e,a);const x=Js.dot(qu),S=Qs.dot(qu);if(x>=0&&S<=x)return n.copy(a);const g=p*S-x*m;if(g<=0&&p>=0&&x<=0)return u=p/(p-x),n.copy(s).addScaledVector(Js,u);$u.subVectors(e,l);const M=Js.dot($u),T=Qs.dot($u);if(T>=0&&M<=T)return n.copy(l);const C=M*m-p*T;if(C<=0&&m>=0&&T<=0)return f=m/(m-T),n.copy(s).addScaledVector(Qs,f);const _=x*T-M*S;if(_<=0&&S-x>=0&&M-T>=0)return Tm.subVectors(l,a),f=(S-x)/(S-x+(M-T)),n.copy(a).addScaledVector(Tm,f);const v=1/(_+C+g);return u=C*v,f=g*v,n.copy(s).addScaledVector(Js,u).addScaledVector(Qs,f)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}class da{constructor(e=new J(1/0,1/0,1/0),n=new J(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=n}set(e,n){return this.min.copy(e),this.max.copy(n),this}setFromArray(e){this.makeEmpty();for(let n=0,s=e.length;n<s;n+=3)this.expandByPoint(Fi.fromArray(e,n));return this}setFromBufferAttribute(e){this.makeEmpty();for(let n=0,s=e.count;n<s;n++)this.expandByPoint(Fi.fromBufferAttribute(e,n));return this}setFromPoints(e){this.makeEmpty();for(let n=0,s=e.length;n<s;n++)this.expandByPoint(e[n]);return this}setFromCenterAndSize(e,n){const s=Fi.copy(n).multiplyScalar(.5);return this.min.copy(e).sub(s),this.max.copy(e).add(s),this}setFromObject(e,n=!1){return this.makeEmpty(),this.expandByObject(e,n)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,n=!1){e.updateWorldMatrix(!1,!1);const s=e.geometry;if(s!==void 0){const l=s.getAttribute("position");if(n===!0&&l!==void 0&&e.isInstancedMesh!==!0)for(let u=0,f=l.count;u<f;u++)e.isMesh===!0?e.getVertexPosition(u,Fi):Fi.fromBufferAttribute(l,u),Fi.applyMatrix4(e.matrixWorld),this.expandByPoint(Fi);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),vl.copy(e.boundingBox)):(s.boundingBox===null&&s.computeBoundingBox(),vl.copy(s.boundingBox)),vl.applyMatrix4(e.matrixWorld),this.union(vl)}const a=e.children;for(let l=0,u=a.length;l<u;l++)this.expandByObject(a[l],n);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,n){return n.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Fi),Fi.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let n,s;return e.normal.x>0?(n=e.normal.x*this.min.x,s=e.normal.x*this.max.x):(n=e.normal.x*this.max.x,s=e.normal.x*this.min.x),e.normal.y>0?(n+=e.normal.y*this.min.y,s+=e.normal.y*this.max.y):(n+=e.normal.y*this.max.y,s+=e.normal.y*this.min.y),e.normal.z>0?(n+=e.normal.z*this.min.z,s+=e.normal.z*this.max.z):(n+=e.normal.z*this.max.z,s+=e.normal.z*this.min.z),n<=-e.constant&&s>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Qo),xl.subVectors(this.max,Qo),eo.subVectors(e.a,Qo),to.subVectors(e.b,Qo),no.subVectors(e.c,Qo),Gr.subVectors(to,eo),Wr.subVectors(no,to),ds.subVectors(eo,no);let n=[0,-Gr.z,Gr.y,0,-Wr.z,Wr.y,0,-ds.z,ds.y,Gr.z,0,-Gr.x,Wr.z,0,-Wr.x,ds.z,0,-ds.x,-Gr.y,Gr.x,0,-Wr.y,Wr.x,0,-ds.y,ds.x,0];return!Qu(n,eo,to,no,xl)||(n=[1,0,0,0,1,0,0,0,1],!Qu(n,eo,to,no,xl))?!1:(Sl.crossVectors(Gr,Wr),n=[Sl.x,Sl.y,Sl.z],Qu(n,eo,to,no,xl))}clampPoint(e,n){return n.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Fi).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Fi).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(mr[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),mr[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),mr[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),mr[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),mr[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),mr[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),mr[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),mr[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(mr),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const mr=[new J,new J,new J,new J,new J,new J,new J,new J],Fi=new J,vl=new da,eo=new J,to=new J,no=new J,Gr=new J,Wr=new J,ds=new J,Qo=new J,xl=new J,Sl=new J,fs=new J;function Qu(r,e,n,s,a){for(let l=0,u=r.length-3;l<=u;l+=3){fs.fromArray(r,l);const f=a.x*Math.abs(fs.x)+a.y*Math.abs(fs.y)+a.z*Math.abs(fs.z),p=e.dot(fs),m=n.dot(fs),x=s.dot(fs);if(Math.max(-Math.max(p,m,x),Math.min(p,m,x))>f)return!1}return!0}const Mn=new J,yl=new Vt;let Av=0;class Qi extends Ms{constructor(e,n,s=!1){if(super(),Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:Av++}),this.name="",this.array=e,this.itemSize=n,this.count=e!==void 0?e.length/n:0,this.normalized=s,this.usage=dm,this.updateRanges=[],this.gpuType=qi,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,n){this.updateRanges.push({start:e,count:n})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,n,s){e*=this.itemSize,s*=n.itemSize;for(let a=0,l=this.itemSize;a<l;a++)this.array[e+a]=n.array[s+a];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let n=0,s=this.count;n<s;n++)yl.fromBufferAttribute(this,n),yl.applyMatrix3(e),this.setXY(n,yl.x,yl.y);else if(this.itemSize===3)for(let n=0,s=this.count;n<s;n++)Mn.fromBufferAttribute(this,n),Mn.applyMatrix3(e),this.setXYZ(n,Mn.x,Mn.y,Mn.z);return this}applyMatrix4(e){for(let n=0,s=this.count;n<s;n++)Mn.fromBufferAttribute(this,n),Mn.applyMatrix4(e),this.setXYZ(n,Mn.x,Mn.y,Mn.z);return this}applyNormalMatrix(e){for(let n=0,s=this.count;n<s;n++)Mn.fromBufferAttribute(this,n),Mn.applyNormalMatrix(e),this.setXYZ(n,Mn.x,Mn.y,Mn.z);return this}transformDirection(e){for(let n=0,s=this.count;n<s;n++)Mn.fromBufferAttribute(this,n),Mn.transformDirection(e),this.setXYZ(n,Mn.x,Mn.y,Mn.z);return this}set(e,n=0){return this.array.set(e,n),this}getComponent(e,n){let s=this.array[e*this.itemSize+n];return this.normalized&&(s=Zo(s,this.array)),s}setComponent(e,n,s){return this.normalized&&(s=oi(s,this.array)),this.array[e*this.itemSize+n]=s,this}getX(e){let n=this.array[e*this.itemSize];return this.normalized&&(n=Zo(n,this.array)),n}setX(e,n){return this.normalized&&(n=oi(n,this.array)),this.array[e*this.itemSize]=n,this}getY(e){let n=this.array[e*this.itemSize+1];return this.normalized&&(n=Zo(n,this.array)),n}setY(e,n){return this.normalized&&(n=oi(n,this.array)),this.array[e*this.itemSize+1]=n,this}getZ(e){let n=this.array[e*this.itemSize+2];return this.normalized&&(n=Zo(n,this.array)),n}setZ(e,n){return this.normalized&&(n=oi(n,this.array)),this.array[e*this.itemSize+2]=n,this}getW(e){let n=this.array[e*this.itemSize+3];return this.normalized&&(n=Zo(n,this.array)),n}setW(e,n){return this.normalized&&(n=oi(n,this.array)),this.array[e*this.itemSize+3]=n,this}setXY(e,n,s){return e*=this.itemSize,this.normalized&&(n=oi(n,this.array),s=oi(s,this.array)),this.array[e+0]=n,this.array[e+1]=s,this}setXYZ(e,n,s,a){return e*=this.itemSize,this.normalized&&(n=oi(n,this.array),s=oi(s,this.array),a=oi(a,this.array)),this.array[e+0]=n,this.array[e+1]=s,this.array[e+2]=a,this}setXYZW(e,n,s,a,l){return e*=this.itemSize,this.normalized&&(n=oi(n,this.array),s=oi(s,this.array),a=oi(a,this.array),l=oi(l,this.array)),this.array[e+0]=n,this.array[e+1]=s,this.array[e+2]=a,this.array[e+3]=l,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==dm&&(e.usage=this.usage),e}dispose(){this.dispatchEvent({type:"dispose"})}}class A0 extends Qi{constructor(e,n,s){super(new Uint16Array(e),n,s)}}class b0 extends Qi{constructor(e,n,s){super(new Uint32Array(e),n,s)}}class xn extends Qi{constructor(e,n,s){super(new Float32Array(e),n,s)}}const bv=new da,ea=new J,ed=new J;class Ef{constructor(e=new J,n=-1){this.isSphere=!0,this.center=e,this.radius=n}set(e,n){return this.center.copy(e),this.radius=n,this}setFromPoints(e,n){const s=this.center;n!==void 0?s.copy(n):bv.setFromPoints(e).getCenter(s);let a=0;for(let l=0,u=e.length;l<u;l++)a=Math.max(a,s.distanceToSquared(e[l]));return this.radius=Math.sqrt(a),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const n=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=n*n}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,n){const s=this.center.distanceToSquared(e);return n.copy(e),s>this.radius*this.radius&&(n.sub(this.center).normalize(),n.multiplyScalar(this.radius).add(this.center)),n}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;ea.subVectors(e,this.center);const n=ea.lengthSq();if(n>this.radius*this.radius){const s=Math.sqrt(n),a=(s-this.radius)*.5;this.center.addScaledVector(ea,a/s),this.radius+=a}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(ed.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(ea.copy(e.center).add(ed)),this.expandByPoint(ea.copy(e.center).sub(ed))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}let Cv=0;const wi=new _n,td=new qn,io=new J,pi=new da,ta=new da,Nn=new J;class _i extends Ms{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Cv++}),this.uuid=ua(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(av(e)?b0:A0)(e,1):this.index=e,this}setIndirect(e,n=0){return this.indirect=e,this.indirectOffset=n,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,n){return this.attributes[e]=n,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,n,s=0){this.groups.push({start:e,count:n,materialIndex:s})}clearGroups(){this.groups=[]}setDrawRange(e,n){this.drawRange.start=e,this.drawRange.count=n}applyMatrix4(e){const n=this.attributes.position;n!==void 0&&(n.applyMatrix4(e),n.needsUpdate=!0);const s=this.attributes.normal;if(s!==void 0){const l=new Ct().getNormalMatrix(e);s.applyNormalMatrix(l),s.needsUpdate=!0}const a=this.attributes.tangent;return a!==void 0&&(a.transformDirection(e),a.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return wi.makeRotationFromQuaternion(e),this.applyMatrix4(wi),this}rotateX(e){return wi.makeRotationX(e),this.applyMatrix4(wi),this}rotateY(e){return wi.makeRotationY(e),this.applyMatrix4(wi),this}rotateZ(e){return wi.makeRotationZ(e),this.applyMatrix4(wi),this}translate(e,n,s){return wi.makeTranslation(e,n,s),this.applyMatrix4(wi),this}scale(e,n,s){return wi.makeScale(e,n,s),this.applyMatrix4(wi),this}lookAt(e){return td.lookAt(e),td.updateMatrix(),this.applyMatrix4(td.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(io).negate(),this.translate(io.x,io.y,io.z),this}setFromPoints(e){const n=this.getAttribute("position");if(n===void 0){const s=[];for(let a=0,l=e.length;a<l;a++){const u=e[a];s.push(u.x,u.y,u.z||0)}this.setAttribute("position",new xn(s,3))}else{const s=Math.min(e.length,n.count);for(let a=0;a<s;a++){const l=e[a];n.setXYZ(a,l.x,l.y,l.z||0)}e.length>n.count&&yt("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),n.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new da);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Xt("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new J(-1/0,-1/0,-1/0),new J(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),n)for(let s=0,a=n.length;s<a;s++){const l=n[s];pi.setFromBufferAttribute(l),this.morphTargetsRelative?(Nn.addVectors(this.boundingBox.min,pi.min),this.boundingBox.expandByPoint(Nn),Nn.addVectors(this.boundingBox.max,pi.max),this.boundingBox.expandByPoint(Nn)):(this.boundingBox.expandByPoint(pi.min),this.boundingBox.expandByPoint(pi.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&Xt('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Ef);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Xt("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new J,1/0);return}if(e){const s=this.boundingSphere.center;if(pi.setFromBufferAttribute(e),n)for(let l=0,u=n.length;l<u;l++){const f=n[l];ta.setFromBufferAttribute(f),this.morphTargetsRelative?(Nn.addVectors(pi.min,ta.min),pi.expandByPoint(Nn),Nn.addVectors(pi.max,ta.max),pi.expandByPoint(Nn)):(pi.expandByPoint(ta.min),pi.expandByPoint(ta.max))}pi.getCenter(s);let a=0;for(let l=0,u=e.count;l<u;l++)Nn.fromBufferAttribute(e,l),a=Math.max(a,s.distanceToSquared(Nn));if(n)for(let l=0,u=n.length;l<u;l++){const f=n[l],p=this.morphTargetsRelative;for(let m=0,x=f.count;m<x;m++)Nn.fromBufferAttribute(f,m),p&&(io.fromBufferAttribute(e,m),Nn.add(io)),a=Math.max(a,s.distanceToSquared(Nn))}this.boundingSphere.radius=Math.sqrt(a),isNaN(this.boundingSphere.radius)&&Xt('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,n=this.attributes;if(e===null||n.position===void 0||n.normal===void 0||n.uv===void 0){Xt("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const s=n.position,a=n.normal,l=n.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Qi(new Float32Array(4*s.count),4));const u=this.getAttribute("tangent"),f=[],p=[];for(let w=0;w<s.count;w++)f[w]=new J,p[w]=new J;const m=new J,x=new J,S=new J,g=new Vt,M=new Vt,T=new Vt,C=new J,_=new J;function v(w,N,j){m.fromBufferAttribute(s,w),x.fromBufferAttribute(s,N),S.fromBufferAttribute(s,j),g.fromBufferAttribute(l,w),M.fromBufferAttribute(l,N),T.fromBufferAttribute(l,j),x.sub(m),S.sub(m),M.sub(g),T.sub(g);const O=1/(M.x*T.y-T.x*M.y);isFinite(O)&&(C.copy(x).multiplyScalar(T.y).addScaledVector(S,-M.y).multiplyScalar(O),_.copy(S).multiplyScalar(M.x).addScaledVector(x,-T.x).multiplyScalar(O),f[w].add(C),f[N].add(C),f[j].add(C),p[w].add(_),p[N].add(_),p[j].add(_))}let b=this.groups;b.length===0&&(b=[{start:0,count:e.count}]);for(let w=0,N=b.length;w<N;++w){const j=b[w],O=j.start,Y=j.count;for(let oe=O,he=O+Y;oe<he;oe+=3)v(e.getX(oe+0),e.getX(oe+1),e.getX(oe+2))}const L=new J,P=new J,B=new J,I=new J;function k(w){B.fromBufferAttribute(a,w),I.copy(B);const N=f[w];L.copy(N),L.sub(B.multiplyScalar(B.dot(N))).normalize(),P.crossVectors(I,N);const O=P.dot(p[w])<0?-1:1;u.setXYZW(w,L.x,L.y,L.z,O)}for(let w=0,N=b.length;w<N;++w){const j=b[w],O=j.start,Y=j.count;for(let oe=O,he=O+Y;oe<he;oe+=3)k(e.getX(oe+0)),k(e.getX(oe+1)),k(e.getX(oe+2))}}computeVertexNormals(){const e=this.index,n=this.getAttribute("position");if(n!==void 0){let s=this.getAttribute("normal");if(s===void 0)s=new Qi(new Float32Array(n.count*3),3),this.setAttribute("normal",s);else for(let g=0,M=s.count;g<M;g++)s.setXYZ(g,0,0,0);const a=new J,l=new J,u=new J,f=new J,p=new J,m=new J,x=new J,S=new J;if(e)for(let g=0,M=e.count;g<M;g+=3){const T=e.getX(g+0),C=e.getX(g+1),_=e.getX(g+2);a.fromBufferAttribute(n,T),l.fromBufferAttribute(n,C),u.fromBufferAttribute(n,_),x.subVectors(u,l),S.subVectors(a,l),x.cross(S),f.fromBufferAttribute(s,T),p.fromBufferAttribute(s,C),m.fromBufferAttribute(s,_),f.add(x),p.add(x),m.add(x),s.setXYZ(T,f.x,f.y,f.z),s.setXYZ(C,p.x,p.y,p.z),s.setXYZ(_,m.x,m.y,m.z)}else for(let g=0,M=n.count;g<M;g+=3)a.fromBufferAttribute(n,g+0),l.fromBufferAttribute(n,g+1),u.fromBufferAttribute(n,g+2),x.subVectors(u,l),S.subVectors(a,l),x.cross(S),s.setXYZ(g+0,x.x,x.y,x.z),s.setXYZ(g+1,x.x,x.y,x.z),s.setXYZ(g+2,x.x,x.y,x.z);this.normalizeNormals(),s.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let n=0,s=e.count;n<s;n++)Nn.fromBufferAttribute(e,n),Nn.normalize(),e.setXYZ(n,Nn.x,Nn.y,Nn.z)}toNonIndexed(){function e(f,p){const m=f.array,x=f.itemSize,S=f.normalized,g=new m.constructor(p.length*x);let M=0,T=0;for(let C=0,_=p.length;C<_;C++){f.isInterleavedBufferAttribute?M=p[C]*f.data.stride+f.offset:M=p[C]*x;for(let v=0;v<x;v++)g[T++]=m[M++]}return new Qi(g,x,S)}if(this.index===null)return yt("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const n=new _i,s=this.index.array,a=this.attributes;for(const f in a){const p=a[f],m=e(p,s);n.setAttribute(f,m)}const l=this.morphAttributes;for(const f in l){const p=[],m=l[f];for(let x=0,S=m.length;x<S;x++){const g=m[x],M=e(g,s);p.push(M)}n.morphAttributes[f]=p}n.morphTargetsRelative=this.morphTargetsRelative;const u=this.groups;for(let f=0,p=u.length;f<p;f++){const m=u[f];n.addGroup(m.start,m.count,m.materialIndex)}return n}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const p=this.parameters;for(const m in p)p[m]!==void 0&&(e[m]=p[m]);return e}e.data={attributes:{}};const n=this.index;n!==null&&(e.data.index={type:n.array.constructor.name,array:Array.prototype.slice.call(n.array)});const s=this.attributes;for(const p in s){const m=s[p];e.data.attributes[p]=m.toJSON(e.data)}const a={};let l=!1;for(const p in this.morphAttributes){const m=this.morphAttributes[p],x=[];for(let S=0,g=m.length;S<g;S++){const M=m[S];x.push(M.toJSON(e.data))}x.length>0&&(a[p]=x,l=!0)}l&&(e.data.morphAttributes=a,e.data.morphTargetsRelative=this.morphTargetsRelative);const u=this.groups;u.length>0&&(e.data.groups=JSON.parse(JSON.stringify(u)));const f=this.boundingSphere;return f!==null&&(e.data.boundingSphere=f.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const n={};this.name=e.name;const s=e.index;s!==null&&this.setIndex(s.clone());const a=e.attributes;for(const m in a){const x=a[m];this.setAttribute(m,x.clone(n))}const l=e.morphAttributes;for(const m in l){const x=[],S=l[m];for(let g=0,M=S.length;g<M;g++)x.push(S[g].clone(n));this.morphAttributes[m]=x}this.morphTargetsRelative=e.morphTargetsRelative;const u=e.groups;for(let m=0,x=u.length;m<x;m++){const S=u[m];this.addGroup(S.start,S.count,S.materialIndex)}const f=e.boundingBox;f!==null&&(this.boundingBox=f.clone());const p=e.boundingSphere;return p!==null&&(this.boundingSphere=p.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}let Rv=0;class fa extends Ms{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Rv++}),this.uuid=ua(),this.name="",this.type="Material",this.blending=lo,this.side=Kr,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=md,this.blendDst=gd,this.blendEquation=gs,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Rt(0,0,0),this.blendAlpha=0,this.depthFunc=uo,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=um,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Ys,this.stencilZFail=Ys,this.stencilZPass=Ys,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const n in e){const s=e[n];if(s===void 0){yt(`Material: parameter '${n}' has value of undefined.`);continue}const a=this[n];if(a===void 0){yt(`Material: '${n}' is not a property of THREE.${this.type}.`);continue}a&&a.isColor?a.set(s):a&&a.isVector3&&s&&s.isVector3?a.copy(s):this[n]=s}}toJSON(e){const n=e===void 0||typeof e=="string";n&&(e={textures:{},images:{}});const s={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.color&&this.color.isColor&&(s.color=this.color.getHex()),this.roughness!==void 0&&(s.roughness=this.roughness),this.metalness!==void 0&&(s.metalness=this.metalness),this.sheen!==void 0&&(s.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(s.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(s.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(s.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(s.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(s.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(s.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(s.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(s.shininess=this.shininess),this.clearcoat!==void 0&&(s.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(s.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(s.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(s.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(s.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,s.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(s.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(s.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(s.dispersion=this.dispersion),this.iridescence!==void 0&&(s.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(s.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(s.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(s.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(s.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(s.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(s.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(s.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(s.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(s.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(s.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(s.lightMap=this.lightMap.toJSON(e).uuid,s.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(s.aoMap=this.aoMap.toJSON(e).uuid,s.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(s.bumpMap=this.bumpMap.toJSON(e).uuid,s.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(s.normalMap=this.normalMap.toJSON(e).uuid,s.normalMapType=this.normalMapType,s.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(s.displacementMap=this.displacementMap.toJSON(e).uuid,s.displacementScale=this.displacementScale,s.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(s.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(s.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(s.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(s.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(s.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(s.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(s.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(s.combine=this.combine)),this.envMapRotation!==void 0&&(s.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(s.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(s.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(s.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(s.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(s.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(s.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(s.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(s.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(s.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(s.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(s.size=this.size),this.shadowSide!==null&&(s.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(s.sizeAttenuation=this.sizeAttenuation),this.blending!==lo&&(s.blending=this.blending),this.side!==Kr&&(s.side=this.side),this.vertexColors===!0&&(s.vertexColors=!0),this.opacity<1&&(s.opacity=this.opacity),this.transparent===!0&&(s.transparent=!0),this.blendSrc!==md&&(s.blendSrc=this.blendSrc),this.blendDst!==gd&&(s.blendDst=this.blendDst),this.blendEquation!==gs&&(s.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(s.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(s.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(s.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(s.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(s.blendAlpha=this.blendAlpha),this.depthFunc!==uo&&(s.depthFunc=this.depthFunc),this.depthTest===!1&&(s.depthTest=this.depthTest),this.depthWrite===!1&&(s.depthWrite=this.depthWrite),this.colorWrite===!1&&(s.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(s.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==um&&(s.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(s.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(s.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Ys&&(s.stencilFail=this.stencilFail),this.stencilZFail!==Ys&&(s.stencilZFail=this.stencilZFail),this.stencilZPass!==Ys&&(s.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(s.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(s.rotation=this.rotation),this.polygonOffset===!0&&(s.polygonOffset=!0),this.polygonOffsetFactor!==0&&(s.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(s.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(s.linewidth=this.linewidth),this.dashSize!==void 0&&(s.dashSize=this.dashSize),this.gapSize!==void 0&&(s.gapSize=this.gapSize),this.scale!==void 0&&(s.scale=this.scale),this.dithering===!0&&(s.dithering=!0),this.alphaTest>0&&(s.alphaTest=this.alphaTest),this.alphaHash===!0&&(s.alphaHash=!0),this.alphaToCoverage===!0&&(s.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(s.premultipliedAlpha=!0),this.forceSinglePass===!0&&(s.forceSinglePass=!0),this.allowOverride===!1&&(s.allowOverride=!1),this.wireframe===!0&&(s.wireframe=!0),this.wireframeLinewidth>1&&(s.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(s.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(s.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(s.flatShading=!0),this.visible===!1&&(s.visible=!1),this.toneMapped===!1&&(s.toneMapped=!1),this.fog===!1&&(s.fog=!1),Object.keys(this.userData).length>0&&(s.userData=this.userData);function a(l){const u=[];for(const f in l){const p=l[f];delete p.metadata,u.push(p)}return u}if(n){const l=a(e.textures),u=a(e.images);l.length>0&&(s.textures=l),u.length>0&&(s.images=u)}return s}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const n=e.clippingPlanes;let s=null;if(n!==null){const a=n.length;s=new Array(a);for(let l=0;l!==a;++l)s[l]=n[l].clone()}return this.clippingPlanes=s,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}const gr=new J,nd=new J,Ml=new J,Xr=new J,id=new J,El=new J,rd=new J;class C0{constructor(e=new J,n=new J(0,0,-1)){this.origin=e,this.direction=n}set(e,n){return this.origin.copy(e),this.direction.copy(n),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,n){return n.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,gr)),this}closestPointToPoint(e,n){n.subVectors(e,this.origin);const s=n.dot(this.direction);return s<0?n.copy(this.origin):n.copy(this.origin).addScaledVector(this.direction,s)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const n=gr.subVectors(e,this.origin).dot(this.direction);return n<0?this.origin.distanceToSquared(e):(gr.copy(this.origin).addScaledVector(this.direction,n),gr.distanceToSquared(e))}distanceSqToSegment(e,n,s,a){nd.copy(e).add(n).multiplyScalar(.5),Ml.copy(n).sub(e).normalize(),Xr.copy(this.origin).sub(nd);const l=e.distanceTo(n)*.5,u=-this.direction.dot(Ml),f=Xr.dot(this.direction),p=-Xr.dot(Ml),m=Xr.lengthSq(),x=Math.abs(1-u*u);let S,g,M,T;if(x>0)if(S=u*p-f,g=u*f-p,T=l*x,S>=0)if(g>=-T)if(g<=T){const C=1/x;S*=C,g*=C,M=S*(S+u*g+2*f)+g*(u*S+g+2*p)+m}else g=l,S=Math.max(0,-(u*g+f)),M=-S*S+g*(g+2*p)+m;else g=-l,S=Math.max(0,-(u*g+f)),M=-S*S+g*(g+2*p)+m;else g<=-T?(S=Math.max(0,-(-u*l+f)),g=S>0?-l:Math.min(Math.max(-l,-p),l),M=-S*S+g*(g+2*p)+m):g<=T?(S=0,g=Math.min(Math.max(-l,-p),l),M=g*(g+2*p)+m):(S=Math.max(0,-(u*l+f)),g=S>0?l:Math.min(Math.max(-l,-p),l),M=-S*S+g*(g+2*p)+m);else g=u>0?-l:l,S=Math.max(0,-(u*g+f)),M=-S*S+g*(g+2*p)+m;return s&&s.copy(this.origin).addScaledVector(this.direction,S),a&&a.copy(nd).addScaledVector(Ml,g),M}intersectSphere(e,n){gr.subVectors(e.center,this.origin);const s=gr.dot(this.direction),a=gr.dot(gr)-s*s,l=e.radius*e.radius;if(a>l)return null;const u=Math.sqrt(l-a),f=s-u,p=s+u;return p<0?null:f<0?this.at(p,n):this.at(f,n)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const n=e.normal.dot(this.direction);if(n===0)return e.distanceToPoint(this.origin)===0?0:null;const s=-(this.origin.dot(e.normal)+e.constant)/n;return s>=0?s:null}intersectPlane(e,n){const s=this.distanceToPlane(e);return s===null?null:this.at(s,n)}intersectsPlane(e){const n=e.distanceToPoint(this.origin);return n===0||e.normal.dot(this.direction)*n<0}intersectBox(e,n){let s,a,l,u,f,p;const m=1/this.direction.x,x=1/this.direction.y,S=1/this.direction.z,g=this.origin;return m>=0?(s=(e.min.x-g.x)*m,a=(e.max.x-g.x)*m):(s=(e.max.x-g.x)*m,a=(e.min.x-g.x)*m),x>=0?(l=(e.min.y-g.y)*x,u=(e.max.y-g.y)*x):(l=(e.max.y-g.y)*x,u=(e.min.y-g.y)*x),s>u||l>a||((l>s||isNaN(s))&&(s=l),(u<a||isNaN(a))&&(a=u),S>=0?(f=(e.min.z-g.z)*S,p=(e.max.z-g.z)*S):(f=(e.max.z-g.z)*S,p=(e.min.z-g.z)*S),s>p||f>a)||((f>s||s!==s)&&(s=f),(p<a||a!==a)&&(a=p),a<0)?null:this.at(s>=0?s:a,n)}intersectsBox(e){return this.intersectBox(e,gr)!==null}intersectTriangle(e,n,s,a,l){id.subVectors(n,e),El.subVectors(s,e),rd.crossVectors(id,El);let u=this.direction.dot(rd),f;if(u>0){if(a)return null;f=1}else if(u<0)f=-1,u=-u;else return null;Xr.subVectors(this.origin,e);const p=f*this.direction.dot(El.crossVectors(Xr,El));if(p<0)return null;const m=f*this.direction.dot(id.cross(Xr));if(m<0||p+m>u)return null;const x=-f*Xr.dot(rd);return x<0?null:this.at(x/u,l)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Yl extends fa{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Rt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Zr,this.combine=l0,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Am=new _n,hs=new C0,wl=new Ef,bm=new J,Tl=new J,Al=new J,bl=new J,sd=new J,Cl=new J,Cm=new J,Rl=new J;class be extends qn{constructor(e=new _i,n=new Yl){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=n,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const n=this.geometry.morphAttributes,s=Object.keys(n);if(s.length>0){const a=n[s[0]];if(a!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let l=0,u=a.length;l<u;l++){const f=a[l].name||String(l);this.morphTargetInfluences.push(0),this.morphTargetDictionary[f]=l}}}}getVertexPosition(e,n){const s=this.geometry,a=s.attributes.position,l=s.morphAttributes.position,u=s.morphTargetsRelative;n.fromBufferAttribute(a,e);const f=this.morphTargetInfluences;if(l&&f){Cl.set(0,0,0);for(let p=0,m=l.length;p<m;p++){const x=f[p],S=l[p];x!==0&&(sd.fromBufferAttribute(S,e),u?Cl.addScaledVector(sd,x):Cl.addScaledVector(sd.sub(n),x))}n.add(Cl)}return n}raycast(e,n){const s=this.geometry,a=this.material,l=this.matrixWorld;a!==void 0&&(s.boundingSphere===null&&s.computeBoundingSphere(),wl.copy(s.boundingSphere),wl.applyMatrix4(l),hs.copy(e.ray).recast(e.near),!(wl.containsPoint(hs.origin)===!1&&(hs.intersectSphere(wl,bm)===null||hs.origin.distanceToSquared(bm)>(e.far-e.near)**2))&&(Am.copy(l).invert(),hs.copy(e.ray).applyMatrix4(Am),!(s.boundingBox!==null&&hs.intersectsBox(s.boundingBox)===!1)&&this._computeIntersections(e,n,hs)))}_computeIntersections(e,n,s){let a;const l=this.geometry,u=this.material,f=l.index,p=l.attributes.position,m=l.attributes.uv,x=l.attributes.uv1,S=l.attributes.normal,g=l.groups,M=l.drawRange;if(f!==null)if(Array.isArray(u))for(let T=0,C=g.length;T<C;T++){const _=g[T],v=u[_.materialIndex],b=Math.max(_.start,M.start),L=Math.min(f.count,Math.min(_.start+_.count,M.start+M.count));for(let P=b,B=L;P<B;P+=3){const I=f.getX(P),k=f.getX(P+1),w=f.getX(P+2);a=Pl(this,v,e,s,m,x,S,I,k,w),a&&(a.faceIndex=Math.floor(P/3),a.face.materialIndex=_.materialIndex,n.push(a))}}else{const T=Math.max(0,M.start),C=Math.min(f.count,M.start+M.count);for(let _=T,v=C;_<v;_+=3){const b=f.getX(_),L=f.getX(_+1),P=f.getX(_+2);a=Pl(this,u,e,s,m,x,S,b,L,P),a&&(a.faceIndex=Math.floor(_/3),n.push(a))}}else if(p!==void 0)if(Array.isArray(u))for(let T=0,C=g.length;T<C;T++){const _=g[T],v=u[_.materialIndex],b=Math.max(_.start,M.start),L=Math.min(p.count,Math.min(_.start+_.count,M.start+M.count));for(let P=b,B=L;P<B;P+=3){const I=P,k=P+1,w=P+2;a=Pl(this,v,e,s,m,x,S,I,k,w),a&&(a.faceIndex=Math.floor(P/3),a.face.materialIndex=_.materialIndex,n.push(a))}}else{const T=Math.max(0,M.start),C=Math.min(p.count,M.start+M.count);for(let _=T,v=C;_<v;_+=3){const b=_,L=_+1,P=_+2;a=Pl(this,u,e,s,m,x,S,b,L,P),a&&(a.faceIndex=Math.floor(_/3),n.push(a))}}}}function Pv(r,e,n,s,a,l,u,f){let p;if(e.side===li?p=s.intersectTriangle(u,l,a,!0,f):p=s.intersectTriangle(a,l,u,e.side===Kr,f),p===null)return null;Rl.copy(f),Rl.applyMatrix4(r.matrixWorld);const m=n.ray.origin.distanceTo(Rl);return m<n.near||m>n.far?null:{distance:m,point:Rl.clone(),object:r}}function Pl(r,e,n,s,a,l,u,f,p,m){r.getVertexPosition(f,Tl),r.getVertexPosition(p,Al),r.getVertexPosition(m,bl);const x=Pv(r,e,n,s,Tl,Al,bl,Cm);if(x){const S=new J;Oi.getBarycoord(Cm,Tl,Al,bl,S),a&&(x.uv=Oi.getInterpolatedAttribute(a,f,p,m,S,new Vt)),l&&(x.uv1=Oi.getInterpolatedAttribute(l,f,p,m,S,new Vt)),u&&(x.normal=Oi.getInterpolatedAttribute(u,f,p,m,S,new J),x.normal.dot(s.direction)>0&&x.normal.multiplyScalar(-1));const g={a:f,b:p,c:m,normal:new J,materialIndex:0};Oi.getNormal(Tl,Al,bl,g.normal),x.face=g,x.barycoord=S}return x}class Lv extends Yn{constructor(e=null,n=1,s=1,a,l,u,f,p,m=Bn,x=Bn,S,g){super(null,u,f,p,m,x,a,l,S,g),this.isDataTexture=!0,this.image={data:e,width:n,height:s},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const od=new J,Dv=new J,Iv=new Ct;class ms{constructor(e=new J(1,0,0),n=0){this.isPlane=!0,this.normal=e,this.constant=n}set(e,n){return this.normal.copy(e),this.constant=n,this}setComponents(e,n,s,a){return this.normal.set(e,n,s),this.constant=a,this}setFromNormalAndCoplanarPoint(e,n){return this.normal.copy(e),this.constant=-n.dot(this.normal),this}setFromCoplanarPoints(e,n,s){const a=od.subVectors(s,n).cross(Dv.subVectors(e,n)).normalize();return this.setFromNormalAndCoplanarPoint(a,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,n){return n.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,n,s=!0){const a=e.delta(od),l=this.normal.dot(a);if(l===0)return this.distanceToPoint(e.start)===0?n.copy(e.start):null;const u=-(e.start.dot(this.normal)+this.constant)/l;return s===!0&&(u<0||u>1)?null:n.copy(e.start).addScaledVector(a,u)}intersectsLine(e){const n=this.distanceToPoint(e.start),s=this.distanceToPoint(e.end);return n<0&&s>0||s<0&&n>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,n){const s=n||Iv.getNormalMatrix(e),a=this.coplanarPoint(od).applyMatrix4(e),l=this.normal.applyMatrix3(s).normalize();return this.constant=-a.dot(l),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const ps=new Ef,Nv=new Vt(.5,.5),Ll=new J;class wf{constructor(e=new ms,n=new ms,s=new ms,a=new ms,l=new ms,u=new ms){this.planes=[e,n,s,a,l,u]}set(e,n,s,a,l,u){const f=this.planes;return f[0].copy(e),f[1].copy(n),f[2].copy(s),f[3].copy(a),f[4].copy(l),f[5].copy(u),this}copy(e){const n=this.planes;for(let s=0;s<6;s++)n[s].copy(e.planes[s]);return this}setFromProjectionMatrix(e,n=$i,s=!1){const a=this.planes,l=e.elements,u=l[0],f=l[1],p=l[2],m=l[3],x=l[4],S=l[5],g=l[6],M=l[7],T=l[8],C=l[9],_=l[10],v=l[11],b=l[12],L=l[13],P=l[14],B=l[15];if(a[0].setComponents(m-u,M-x,v-T,B-b).normalize(),a[1].setComponents(m+u,M+x,v+T,B+b).normalize(),a[2].setComponents(m+f,M+S,v+C,B+L).normalize(),a[3].setComponents(m-f,M-S,v-C,B-L).normalize(),s)a[4].setComponents(p,g,_,P).normalize(),a[5].setComponents(m-p,M-g,v-_,B-P).normalize();else if(a[4].setComponents(m-p,M-g,v-_,B-P).normalize(),n===$i)a[5].setComponents(m+p,M+g,v+_,B+P).normalize();else if(n===ca)a[5].setComponents(p,g,_,P).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+n);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),ps.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const n=e.geometry;n.boundingSphere===null&&n.computeBoundingSphere(),ps.copy(n.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(ps)}intersectsSprite(e){ps.center.set(0,0,0);const n=Nv.distanceTo(e.center);return ps.radius=.7071067811865476+n,ps.applyMatrix4(e.matrixWorld),this.intersectsSphere(ps)}intersectsSphere(e){const n=this.planes,s=e.center,a=-e.radius;for(let l=0;l<6;l++)if(n[l].distanceToPoint(s)<a)return!1;return!0}intersectsBox(e){const n=this.planes;for(let s=0;s<6;s++){const a=n[s];if(Ll.x=a.normal.x>0?e.max.x:e.min.x,Ll.y=a.normal.y>0?e.max.y:e.min.y,Ll.z=a.normal.z>0?e.max.z:e.min.z,a.distanceToPoint(Ll)<0)return!1}return!0}containsPoint(e){const n=this.planes;for(let s=0;s<6;s++)if(n[s].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class R0 extends Yn{constructor(e=[],n=Ss,s,a,l,u,f,p,m,x){super(e,n,s,a,l,u,f,p,m,x),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class Uv extends Yn{constructor(e,n,s,a,l,u,f,p,m){super(e,n,s,a,l,u,f,p,m),this.isCanvasTexture=!0,this.needsUpdate=!0}}class ho extends Yn{constructor(e,n,s=er,a,l,u,f=Bn,p=Bn,m,x=yr,S=1){if(x!==yr&&x!==xs)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const g={width:e,height:n,depth:S};super(g,a,l,u,f,p,x,s,m),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new Sf(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const n=super.toJSON(e);return this.compareFunction!==null&&(n.compareFunction=this.compareFunction),n}}class Fv extends ho{constructor(e,n=er,s=Ss,a,l,u=Bn,f=Bn,p,m=yr){const x={width:e,height:e,depth:1},S=[x,x,x,x,x,x];super(e,e,n,s,a,l,u,f,p,m),this.image=S,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}}class P0 extends Yn{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}class go extends _i{constructor(e=1,n=1,s=1,a=1,l=1,u=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:n,depth:s,widthSegments:a,heightSegments:l,depthSegments:u};const f=this;a=Math.floor(a),l=Math.floor(l),u=Math.floor(u);const p=[],m=[],x=[],S=[];let g=0,M=0;T("z","y","x",-1,-1,s,n,e,u,l,0),T("z","y","x",1,-1,s,n,-e,u,l,1),T("x","z","y",1,1,e,s,n,a,u,2),T("x","z","y",1,-1,e,s,-n,a,u,3),T("x","y","z",1,-1,e,n,s,a,l,4),T("x","y","z",-1,-1,e,n,-s,a,l,5),this.setIndex(p),this.setAttribute("position",new xn(m,3)),this.setAttribute("normal",new xn(x,3)),this.setAttribute("uv",new xn(S,2));function T(C,_,v,b,L,P,B,I,k,w,N){const j=P/k,O=B/w,Y=P/2,oe=B/2,he=I/2,W=k+1,te=w+1;let $=0,Z=0;const ce=new J;for(let ue=0;ue<te;ue++){const F=ue*O-oe;for(let ne=0;ne<W;ne++){const Ge=ne*j-Y;ce[C]=Ge*b,ce[_]=F*L,ce[v]=he,m.push(ce.x,ce.y,ce.z),ce[C]=0,ce[_]=0,ce[v]=I>0?1:-1,x.push(ce.x,ce.y,ce.z),S.push(ne/k),S.push(1-ue/w),$+=1}}for(let ue=0;ue<w;ue++)for(let F=0;F<k;F++){const ne=g+F+W*ue,Ge=g+F+W*(ue+1),qe=g+(F+1)+W*(ue+1),Xe=g+(F+1)+W*ue;p.push(ne,Ge,Xe),p.push(Ge,qe,Xe),Z+=6}f.addGroup(M,Z,N),M+=Z,g+=$}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new go(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}class ql extends _i{constructor(e=1,n=32,s=0,a=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:e,segments:n,thetaStart:s,thetaLength:a},n=Math.max(3,n);const l=[],u=[],f=[],p=[],m=new J,x=new Vt;u.push(0,0,0),f.push(0,0,1),p.push(.5,.5);for(let S=0,g=3;S<=n;S++,g+=3){const M=s+S/n*a;m.x=e*Math.cos(M),m.y=e*Math.sin(M),u.push(m.x,m.y,m.z),f.push(0,0,1),x.x=(u[g]/e+1)/2,x.y=(u[g+1]/e+1)/2,p.push(x.x,x.y)}for(let S=1;S<=n;S++)l.push(S,S+1,0);this.setIndex(l),this.setAttribute("position",new xn(u,3)),this.setAttribute("normal",new xn(f,3)),this.setAttribute("uv",new xn(p,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ql(e.radius,e.segments,e.thetaStart,e.thetaLength)}}class ha extends _i{constructor(e=1,n=1,s=1,a=32,l=1,u=!1,f=0,p=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:n,height:s,radialSegments:a,heightSegments:l,openEnded:u,thetaStart:f,thetaLength:p};const m=this;a=Math.floor(a),l=Math.floor(l);const x=[],S=[],g=[],M=[];let T=0;const C=[],_=s/2;let v=0;b(),u===!1&&(e>0&&L(!0),n>0&&L(!1)),this.setIndex(x),this.setAttribute("position",new xn(S,3)),this.setAttribute("normal",new xn(g,3)),this.setAttribute("uv",new xn(M,2));function b(){const P=new J,B=new J;let I=0;const k=(n-e)/s;for(let w=0;w<=l;w++){const N=[],j=w/l,O=j*(n-e)+e;for(let Y=0;Y<=a;Y++){const oe=Y/a,he=oe*p+f,W=Math.sin(he),te=Math.cos(he);B.x=O*W,B.y=-j*s+_,B.z=O*te,S.push(B.x,B.y,B.z),P.set(W,k,te).normalize(),g.push(P.x,P.y,P.z),M.push(oe,1-j),N.push(T++)}C.push(N)}for(let w=0;w<a;w++)for(let N=0;N<l;N++){const j=C[N][w],O=C[N+1][w],Y=C[N+1][w+1],oe=C[N][w+1];(e>0||N!==0)&&(x.push(j,O,oe),I+=3),(n>0||N!==l-1)&&(x.push(O,Y,oe),I+=3)}m.addGroup(v,I,0),v+=I}function L(P){const B=T,I=new Vt,k=new J;let w=0;const N=P===!0?e:n,j=P===!0?1:-1;for(let Y=1;Y<=a;Y++)S.push(0,_*j,0),g.push(0,j,0),M.push(.5,.5),T++;const O=T;for(let Y=0;Y<=a;Y++){const he=Y/a*p+f,W=Math.cos(he),te=Math.sin(he);k.x=N*te,k.y=_*j,k.z=N*W,S.push(k.x,k.y,k.z),g.push(0,j,0),I.x=W*.5+.5,I.y=te*.5*j+.5,M.push(I.x,I.y),T++}for(let Y=0;Y<a;Y++){const oe=B+Y,he=O+Y;P===!0?x.push(he,he+1,oe):x.push(he+1,he,oe),w+=3}m.addGroup(v,w,P===!0?1:2),v+=w}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ha(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class $l extends ha{constructor(e=1,n=1,s=32,a=1,l=!1,u=0,f=Math.PI*2){super(0,e,n,s,a,l,u,f),this.type="ConeGeometry",this.parameters={radius:e,height:n,radialSegments:s,heightSegments:a,openEnded:l,thetaStart:u,thetaLength:f}}static fromJSON(e){return new $l(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class wn extends _i{constructor(e=1,n=1,s=1,a=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:n,widthSegments:s,heightSegments:a};const l=e/2,u=n/2,f=Math.floor(s),p=Math.floor(a),m=f+1,x=p+1,S=e/f,g=n/p,M=[],T=[],C=[],_=[];for(let v=0;v<x;v++){const b=v*g-u;for(let L=0;L<m;L++){const P=L*S-l;T.push(P,-b,0),C.push(0,0,1),_.push(L/f),_.push(1-v/p)}}for(let v=0;v<p;v++)for(let b=0;b<f;b++){const L=b+m*v,P=b+m*(v+1),B=b+1+m*(v+1),I=b+1+m*v;M.push(L,P,I),M.push(P,B,I)}this.setIndex(M),this.setAttribute("position",new xn(T,3)),this.setAttribute("normal",new xn(C,3)),this.setAttribute("uv",new xn(_,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new wn(e.width,e.height,e.widthSegments,e.heightSegments)}}class Tf extends _i{constructor(e=1,n=32,s=16,a=0,l=Math.PI*2,u=0,f=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:n,heightSegments:s,phiStart:a,phiLength:l,thetaStart:u,thetaLength:f},n=Math.max(3,Math.floor(n)),s=Math.max(2,Math.floor(s));const p=Math.min(u+f,Math.PI);let m=0;const x=[],S=new J,g=new J,M=[],T=[],C=[],_=[];for(let v=0;v<=s;v++){const b=[],L=v/s;let P=0;v===0&&u===0?P=.5/n:v===s&&p===Math.PI&&(P=-.5/n);for(let B=0;B<=n;B++){const I=B/n;S.x=-e*Math.cos(a+I*l)*Math.sin(u+L*f),S.y=e*Math.cos(u+L*f),S.z=e*Math.sin(a+I*l)*Math.sin(u+L*f),T.push(S.x,S.y,S.z),g.copy(S).normalize(),C.push(g.x,g.y,g.z),_.push(I+P,1-L),b.push(m++)}x.push(b)}for(let v=0;v<s;v++)for(let b=0;b<n;b++){const L=x[v][b+1],P=x[v][b],B=x[v+1][b],I=x[v+1][b+1];(v!==0||u>0)&&M.push(L,P,I),(v!==s-1||p<Math.PI)&&M.push(P,B,I)}this.setIndex(M),this.setAttribute("position",new xn(T,3)),this.setAttribute("normal",new xn(C,3)),this.setAttribute("uv",new xn(_,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Tf(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class Af extends _i{constructor(e=1,n=.4,s=12,a=48,l=Math.PI*2,u=0,f=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:n,radialSegments:s,tubularSegments:a,arc:l,thetaStart:u,thetaLength:f},s=Math.floor(s),a=Math.floor(a);const p=[],m=[],x=[],S=[],g=new J,M=new J,T=new J;for(let C=0;C<=s;C++){const _=u+C/s*f;for(let v=0;v<=a;v++){const b=v/a*l;M.x=(e+n*Math.cos(_))*Math.cos(b),M.y=(e+n*Math.cos(_))*Math.sin(b),M.z=n*Math.sin(_),m.push(M.x,M.y,M.z),g.x=e*Math.cos(b),g.y=e*Math.sin(b),T.subVectors(M,g).normalize(),x.push(T.x,T.y,T.z),S.push(v/a),S.push(C/s)}}for(let C=1;C<=s;C++)for(let _=1;_<=a;_++){const v=(a+1)*C+_-1,b=(a+1)*(C-1)+_-1,L=(a+1)*(C-1)+_,P=(a+1)*C+_;p.push(v,b,P),p.push(b,L,P)}this.setIndex(p),this.setAttribute("position",new xn(m,3)),this.setAttribute("normal",new xn(x,3)),this.setAttribute("uv",new xn(S,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Af(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc)}}function po(r){const e={};for(const n in r){e[n]={};for(const s in r[n]){const a=r[n][s];if(Rm(a))a.isRenderTargetTexture?(yt("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[n][s]=null):e[n][s]=a.clone();else if(Array.isArray(a))if(Rm(a[0])){const l=[];for(let u=0,f=a.length;u<f;u++)l[u]=a[u].clone();e[n][s]=l}else e[n][s]=a.slice();else e[n][s]=a}}return e}function Zn(r){const e={};for(let n=0;n<r.length;n++){const s=po(r[n]);for(const a in s)e[a]=s[a]}return e}function Rm(r){return r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)}function Ov(r){const e=[];for(let n=0;n<r.length;n++)e.push(r[n].clone());return e}function L0(r){const e=r.getRenderTarget();return e===null?r.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:Ht.workingColorSpace}const kv={clone:po,merge:Zn};var Bv=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,zv=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class tr extends fa{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Bv,this.fragmentShader=zv,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=po(e.uniforms),this.uniformsGroups=Ov(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){const n=super.toJSON(e);n.glslVersion=this.glslVersion,n.uniforms={};for(const a in this.uniforms){const u=this.uniforms[a].value;u&&u.isTexture?n.uniforms[a]={type:"t",value:u.toJSON(e).uuid}:u&&u.isColor?n.uniforms[a]={type:"c",value:u.getHex()}:u&&u.isVector2?n.uniforms[a]={type:"v2",value:u.toArray()}:u&&u.isVector3?n.uniforms[a]={type:"v3",value:u.toArray()}:u&&u.isVector4?n.uniforms[a]={type:"v4",value:u.toArray()}:u&&u.isMatrix3?n.uniforms[a]={type:"m3",value:u.toArray()}:u&&u.isMatrix4?n.uniforms[a]={type:"m4",value:u.toArray()}:n.uniforms[a]={value:u}}Object.keys(this.defines).length>0&&(n.defines=this.defines),n.vertexShader=this.vertexShader,n.fragmentShader=this.fragmentShader,n.lights=this.lights,n.clipping=this.clipping;const s={};for(const a in this.extensions)this.extensions[a]===!0&&(s[a]=!0);return Object.keys(s).length>0&&(n.extensions=s),n}}class Hv extends tr{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class Yr extends fa{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new Rt(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Rt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=nf,this.normalScale=new Vt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Zr,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class Vv extends Yr{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new Vt(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return kt(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(n){this.ior=(1+.4*n)/(1-.4*n)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new Rt(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new Rt(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new Rt(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get dispersion(){return this._dispersion}set dispersion(e){this._dispersion>0!=e>0&&this.version++,this._dispersion=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.dispersion=e.dispersion,this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}}class Gv extends fa{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Q_,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class Wv extends fa{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}class bf extends qn{constructor(e,n=1){super(),this.isLight=!0,this.type="Light",this.color=new Rt(e),this.intensity=n}dispose(){this.dispatchEvent({type:"dispose"})}copy(e,n){return super.copy(e,n),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const n=super.toJSON(e);return n.object.color=this.color.getHex(),n.object.intensity=this.intensity,n}}const ad=new _n,Pm=new J,Lm=new J;class D0{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Vt(512,512),this.mapType=gi,this.map=null,this.mapPass=null,this.matrix=new _n,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new wf,this._frameExtents=new Vt(1,1),this._viewportCount=1,this._viewports=[new gn(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const n=this.camera,s=this.matrix;Pm.setFromMatrixPosition(e.matrixWorld),n.position.copy(Pm),Lm.setFromMatrixPosition(e.target.matrixWorld),n.lookAt(Lm),n.updateMatrixWorld(),ad.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(ad,n.coordinateSystem,n.reversedDepth),n.coordinateSystem===ca||n.reversedDepth?s.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):s.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),s.multiply(ad)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this.biasNode=e.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}const Dl=new J,Il=new mo,Xi=new J;class I0 extends qn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new _n,this.projectionMatrix=new _n,this.projectionMatrixInverse=new _n,this.coordinateSystem=$i,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,n){return super.copy(e,n),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(Dl,Il,Xi),Xi.x===1&&Xi.y===1&&Xi.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Dl,Il,Xi.set(1,1,1)).invert()}updateWorldMatrix(e,n){super.updateWorldMatrix(e,n),this.matrixWorld.decompose(Dl,Il,Xi),Xi.x===1&&Xi.y===1&&Xi.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Dl,Il,Xi.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}}const jr=new J,Dm=new Vt,Im=new Vt;class mi extends I0{constructor(e=50,n=1,s=.1,a=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=s,this.far=a,this.focus=10,this.aspect=n,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const n=.5*this.getFilmHeight()/e;this.fov=sf*2*Math.atan(n),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Ou*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return sf*2*Math.atan(Math.tan(Ou*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,n,s){jr.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(jr.x,jr.y).multiplyScalar(-e/jr.z),jr.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),s.set(jr.x,jr.y).multiplyScalar(-e/jr.z)}getViewSize(e,n){return this.getViewBounds(e,Dm,Im),n.subVectors(Im,Dm)}setViewOffset(e,n,s,a,l,u){this.aspect=e/n,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=s,this.view.offsetY=a,this.view.width=l,this.view.height=u,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let n=e*Math.tan(Ou*.5*this.fov)/this.zoom,s=2*n,a=this.aspect*s,l=-.5*a;const u=this.view;if(this.view!==null&&this.view.enabled){const p=u.fullWidth,m=u.fullHeight;l+=u.offsetX*a/p,n-=u.offsetY*s/m,a*=u.width/p,s*=u.height/m}const f=this.filmOffset;f!==0&&(l+=e*f/this.getFilmWidth()),this.projectionMatrix.makePerspective(l,l+a,n,n-s,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.fov=this.fov,n.object.zoom=this.zoom,n.object.near=this.near,n.object.far=this.far,n.object.focus=this.focus,n.object.aspect=this.aspect,this.view!==null&&(n.object.view=Object.assign({},this.view)),n.object.filmGauge=this.filmGauge,n.object.filmOffset=this.filmOffset,n}}class Xv extends D0{constructor(){super(new mi(90,1,.5,500)),this.isPointLightShadow=!0}}class Nl extends bf{constructor(e,n,s=0,a=2){super(e,n),this.isPointLight=!0,this.type="PointLight",this.distance=s,this.decay=a,this.shadow=new Xv}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){super.dispose(),this.shadow.dispose()}copy(e,n){return super.copy(e,n),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}toJSON(e){const n=super.toJSON(e);return n.object.distance=this.distance,n.object.decay=this.decay,n.object.shadow=this.shadow.toJSON(),n}}class Cf extends I0{constructor(e=-1,n=1,s=1,a=-1,l=.1,u=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=n,this.top=s,this.bottom=a,this.near=l,this.far=u,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,n,s,a,l,u){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=s,this.view.offsetY=a,this.view.width=l,this.view.height=u,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),n=(this.top-this.bottom)/(2*this.zoom),s=(this.right+this.left)/2,a=(this.top+this.bottom)/2;let l=s-e,u=s+e,f=a+n,p=a-n;if(this.view!==null&&this.view.enabled){const m=(this.right-this.left)/this.view.fullWidth/this.zoom,x=(this.top-this.bottom)/this.view.fullHeight/this.zoom;l+=m*this.view.offsetX,u=l+m*this.view.width,f-=x*this.view.offsetY,p=f-x*this.view.height}this.projectionMatrix.makeOrthographic(l,u,f,p,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.zoom=this.zoom,n.object.left=this.left,n.object.right=this.right,n.object.top=this.top,n.object.bottom=this.bottom,n.object.near=this.near,n.object.far=this.far,this.view!==null&&(n.object.view=Object.assign({},this.view)),n}}class jv extends D0{constructor(){super(new Cf(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class Nm extends bf{constructor(e,n){super(e,n),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(qn.DEFAULT_UP),this.updateMatrix(),this.target=new qn,this.shadow=new jv}dispose(){super.dispose(),this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}toJSON(e){const n=super.toJSON(e);return n.object.shadow=this.shadow.toJSON(),n.object.target=this.target.uuid,n}}class Yv extends bf{constructor(e,n){super(e,n),this.isAmbientLight=!0,this.type="AmbientLight"}}const ro=-90,so=1;class qv extends qn{constructor(e,n,s){super(),this.type="CubeCamera",this.renderTarget=s,this.coordinateSystem=null,this.activeMipmapLevel=0;const a=new mi(ro,so,e,n);a.layers=this.layers,this.add(a);const l=new mi(ro,so,e,n);l.layers=this.layers,this.add(l);const u=new mi(ro,so,e,n);u.layers=this.layers,this.add(u);const f=new mi(ro,so,e,n);f.layers=this.layers,this.add(f);const p=new mi(ro,so,e,n);p.layers=this.layers,this.add(p);const m=new mi(ro,so,e,n);m.layers=this.layers,this.add(m)}updateCoordinateSystem(){const e=this.coordinateSystem,n=this.children.concat(),[s,a,l,u,f,p]=n;for(const m of n)this.remove(m);if(e===$i)s.up.set(0,1,0),s.lookAt(1,0,0),a.up.set(0,1,0),a.lookAt(-1,0,0),l.up.set(0,0,-1),l.lookAt(0,1,0),u.up.set(0,0,1),u.lookAt(0,-1,0),f.up.set(0,1,0),f.lookAt(0,0,1),p.up.set(0,1,0),p.lookAt(0,0,-1);else if(e===ca)s.up.set(0,-1,0),s.lookAt(-1,0,0),a.up.set(0,-1,0),a.lookAt(1,0,0),l.up.set(0,0,1),l.lookAt(0,1,0),u.up.set(0,0,-1),u.lookAt(0,-1,0),f.up.set(0,-1,0),f.lookAt(0,0,1),p.up.set(0,-1,0),p.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const m of n)this.add(m),m.updateMatrixWorld()}update(e,n){this.parent===null&&this.updateMatrixWorld();const{renderTarget:s,activeMipmapLevel:a}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[l,u,f,p,m,x]=this.children,S=e.getRenderTarget(),g=e.getActiveCubeFace(),M=e.getActiveMipmapLevel(),T=e.xr.enabled;e.xr.enabled=!1;const C=s.texture.generateMipmaps;s.texture.generateMipmaps=!1;let _=!1;e.isWebGLRenderer===!0?_=e.state.buffers.depth.getReversed():_=e.reversedDepthBuffer,e.setRenderTarget(s,0,a),_&&e.autoClear===!1&&e.clearDepth(),e.render(n,l),e.setRenderTarget(s,1,a),_&&e.autoClear===!1&&e.clearDepth(),e.render(n,u),e.setRenderTarget(s,2,a),_&&e.autoClear===!1&&e.clearDepth(),e.render(n,f),e.setRenderTarget(s,3,a),_&&e.autoClear===!1&&e.clearDepth(),e.render(n,p),e.setRenderTarget(s,4,a),_&&e.autoClear===!1&&e.clearDepth(),e.render(n,m),s.texture.generateMipmaps=C,e.setRenderTarget(s,5,a),_&&e.autoClear===!1&&e.clearDepth(),e.render(n,x),e.setRenderTarget(S,g,M),e.xr.enabled=T,s.texture.needsPMREMUpdate=!0}}class $v extends mi{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}const Um=new _n;class Kv{constructor(e,n,s=0,a=1/0){this.ray=new C0(e,n),this.near=s,this.far=a,this.camera=null,this.layers=new yf,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,n){this.ray.set(e,n)}setFromCamera(e,n){n.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(n.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(n).sub(this.ray.origin).normalize(),this.camera=n):n.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(n.near+n.far)/(n.near-n.far)).unproject(n),this.ray.direction.set(0,0,-1).transformDirection(n.matrixWorld),this.camera=n):Xt("Raycaster: Unsupported camera type: "+n.type)}setFromXRController(e){return Um.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(Um),this}intersectObject(e,n=!0,s=[]){return of(e,this,s,n),s.sort(Fm),s}intersectObjects(e,n=!0,s=[]){for(let a=0,l=e.length;a<l;a++)of(e[a],this,s,n);return s.sort(Fm),s}}function Fm(r,e){return r.distance-e.distance}function of(r,e,n,s){let a=!0;if(r.layers.test(e.layers)&&r.raycast(e,n)===!1&&(a=!1),a===!0&&s===!0){const l=r.children;for(let u=0,f=l.length;u<f;u++)of(l[u],e,n,!0)}}const If=class If{constructor(e,n,s,a){this.elements=[1,0,0,1],e!==void 0&&this.set(e,n,s,a)}identity(){return this.set(1,0,0,1),this}fromArray(e,n=0){for(let s=0;s<4;s++)this.elements[s]=e[s+n];return this}set(e,n,s,a){const l=this.elements;return l[0]=e,l[2]=n,l[1]=s,l[3]=a,this}};If.prototype.isMatrix2=!0;let Om=If;function km(r,e,n,s){const a=Zv(s);switch(n){case S0:return r*e;case M0:return r*e/a.components*a.byteLength;case mf:return r*e/a.components*a.byteLength;case ys:return r*e*2/a.components*a.byteLength;case gf:return r*e*2/a.components*a.byteLength;case y0:return r*e*3/a.components*a.byteLength;case ki:return r*e*4/a.components*a.byteLength;case _f:return r*e*4/a.components*a.byteLength;case Ol:case kl:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*8;case Bl:case zl:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*16;case bd:case Rd:return Math.max(r,16)*Math.max(e,8)/4;case Ad:case Cd:return Math.max(r,8)*Math.max(e,8)/2;case Pd:case Ld:case Id:case Nd:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*8;case Dd:case Vl:case Ud:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*16;case Fd:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*16;case Od:return Math.floor((r+4)/5)*Math.floor((e+3)/4)*16;case kd:return Math.floor((r+4)/5)*Math.floor((e+4)/5)*16;case Bd:return Math.floor((r+5)/6)*Math.floor((e+4)/5)*16;case zd:return Math.floor((r+5)/6)*Math.floor((e+5)/6)*16;case Hd:return Math.floor((r+7)/8)*Math.floor((e+4)/5)*16;case Vd:return Math.floor((r+7)/8)*Math.floor((e+5)/6)*16;case Gd:return Math.floor((r+7)/8)*Math.floor((e+7)/8)*16;case Wd:return Math.floor((r+9)/10)*Math.floor((e+4)/5)*16;case Xd:return Math.floor((r+9)/10)*Math.floor((e+5)/6)*16;case jd:return Math.floor((r+9)/10)*Math.floor((e+7)/8)*16;case Yd:return Math.floor((r+9)/10)*Math.floor((e+9)/10)*16;case qd:return Math.floor((r+11)/12)*Math.floor((e+9)/10)*16;case $d:return Math.floor((r+11)/12)*Math.floor((e+11)/12)*16;case Kd:case Zd:case Jd:return Math.ceil(r/4)*Math.ceil(e/4)*16;case Qd:case ef:return Math.ceil(r/4)*Math.ceil(e/4)*8;case Gl:case tf:return Math.ceil(r/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${n} format.`)}function Zv(r){switch(r){case gi:case g0:return{byteLength:1,components:1};case aa:case _0:case Sr:return{byteLength:2,components:1};case hf:case pf:return{byteLength:2,components:4};case er:case ff:case qi:return{byteLength:4,components:1};case v0:case x0:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${r}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:uf}}));typeof window<"u"&&(window.__THREE__?yt("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=uf);/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function N0(){let r=null,e=!1,n=null,s=null;function a(l,u){n(l,u),s=r.requestAnimationFrame(a)}return{start:function(){e!==!0&&n!==null&&r!==null&&(s=r.requestAnimationFrame(a),e=!0)},stop:function(){r!==null&&r.cancelAnimationFrame(s),e=!1},setAnimationLoop:function(l){n=l},setContext:function(l){r=l}}}function Jv(r){const e=new WeakMap;function n(f,p){const m=f.array,x=f.usage,S=m.byteLength,g=r.createBuffer();r.bindBuffer(p,g),r.bufferData(p,m,x),f.onUploadCallback();let M;if(m instanceof Float32Array)M=r.FLOAT;else if(typeof Float16Array<"u"&&m instanceof Float16Array)M=r.HALF_FLOAT;else if(m instanceof Uint16Array)f.isFloat16BufferAttribute?M=r.HALF_FLOAT:M=r.UNSIGNED_SHORT;else if(m instanceof Int16Array)M=r.SHORT;else if(m instanceof Uint32Array)M=r.UNSIGNED_INT;else if(m instanceof Int32Array)M=r.INT;else if(m instanceof Int8Array)M=r.BYTE;else if(m instanceof Uint8Array)M=r.UNSIGNED_BYTE;else if(m instanceof Uint8ClampedArray)M=r.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+m);return{buffer:g,type:M,bytesPerElement:m.BYTES_PER_ELEMENT,version:f.version,size:S}}function s(f,p,m){const x=p.array,S=p.updateRanges;if(r.bindBuffer(m,f),S.length===0)r.bufferSubData(m,0,x);else{S.sort((M,T)=>M.start-T.start);let g=0;for(let M=1;M<S.length;M++){const T=S[g],C=S[M];C.start<=T.start+T.count+1?T.count=Math.max(T.count,C.start+C.count-T.start):(++g,S[g]=C)}S.length=g+1;for(let M=0,T=S.length;M<T;M++){const C=S[M];r.bufferSubData(m,C.start*x.BYTES_PER_ELEMENT,x,C.start,C.count)}p.clearUpdateRanges()}p.onUploadCallback()}function a(f){return f.isInterleavedBufferAttribute&&(f=f.data),e.get(f)}function l(f){f.isInterleavedBufferAttribute&&(f=f.data);const p=e.get(f);p&&(r.deleteBuffer(p.buffer),e.delete(f))}function u(f,p){if(f.isInterleavedBufferAttribute&&(f=f.data),f.isGLBufferAttribute){const x=e.get(f);(!x||x.version<f.version)&&e.set(f,{buffer:f.buffer,type:f.type,bytesPerElement:f.elementSize,version:f.version});return}const m=e.get(f);if(m===void 0)e.set(f,n(f,p));else if(m.version<f.version){if(m.size!==f.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");s(m.buffer,f,p),m.version=f.version}}return{get:a,remove:l,update:u}}var Qv=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,ex=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,tx=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,nx=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,ix=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,rx=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,sx=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,ox=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,ax=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec4 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 );
	}
#endif`,lx=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,cx=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,ux=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,dx=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,fx=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,hx=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,px=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,mx=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,gx=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,_x=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,vx=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,xx=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,Sx=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,yx=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec4( 1.0 );
#endif
#ifdef USE_COLOR_ALPHA
	vColor *= color;
#elif defined( USE_COLOR )
	vColor.rgb *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.rgb *= instanceColor.rgb;
#endif
#ifdef USE_BATCHING_COLOR
	vColor *= getBatchingColor( getIndirectIndex( gl_DrawID ) );
#endif`,Mx=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,Ex=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,wx=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,Tx=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Ax=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,bx=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Cx=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Rx="gl_FragColor = linearToOutputTexel( gl_FragColor );",Px=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Lx=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * reflectVec );
		#ifdef ENVMAP_BLENDING_MULTIPLY
			outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_MIX )
			outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_ADD )
			outgoingLight += envColor.xyz * specularStrength * reflectivity;
		#endif
	#endif
#endif`,Dx=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,Ix=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,Nx=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Ux=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,Fx=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Ox=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,kx=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Bx=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,zx=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,Hx=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Vx=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Gx=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Wx=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif
#include <lightprobes_pars_fragment>`,Xx=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,jx=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Yx=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,qx=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,$x=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Kx=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.diffuseContribution = diffuseColor.rgb * ( 1.0 - metalnessFactor );
material.metalness = metalnessFactor;
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor;
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = vec3( 0.04 );
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.0001, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,Zx=`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	vec3 diffuseContribution;
	vec3 specularColor;
	vec3 specularColorBlended;
	float roughness;
	float metalness;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
		vec3 iridescenceFresnelDielectric;
		vec3 iridescenceFresnelMetallic;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		return 0.5 / max( gv + gl, EPSILON );
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColorBlended;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float rInv = 1.0 / ( roughness + 0.1 );
	float a = -1.9362 + 1.0678 * roughness + 0.4573 * r2 - 0.8469 * rInv;
	float b = -0.6014 + 0.5538 * roughness - 0.4670 * r2 - 0.1255 * rInv;
	float DG = exp( a * dotNV + b );
	return saturate( DG );
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
vec3 BRDF_GGX_Multiscatter( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 singleScatter = BRDF_GGX( lightDir, viewDir, normal, material );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 dfgV = texture2D( dfgLUT, vec2( material.roughness, dotNV ) ).rg;
	vec2 dfgL = texture2D( dfgLUT, vec2( material.roughness, dotNL ) ).rg;
	vec3 FssEss_V = material.specularColorBlended * dfgV.x + material.specularF90 * dfgV.y;
	vec3 FssEss_L = material.specularColorBlended * dfgL.x + material.specularF90 * dfgL.y;
	float Ess_V = dfgV.x + dfgV.y;
	float Ess_L = dfgL.x + dfgL.y;
	float Ems_V = 1.0 - Ess_V;
	float Ems_L = 1.0 - Ess_L;
	vec3 Favg = material.specularColorBlended + ( 1.0 - material.specularColorBlended ) * 0.047619;
	vec3 Fms = FssEss_V * FssEss_L * Favg / ( 1.0 - Ems_V * Ems_L * Favg + EPSILON );
	float compensationFactor = Ems_V * Ems_L;
	vec3 multiScatter = Fms * compensationFactor;
	return singleScatter + multiScatter;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColorBlended * t2.x + ( material.specularF90 - material.specularColorBlended ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseContribution * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
		#ifdef USE_CLEARCOAT
			vec3 Ncc = geometryClearcoatNormal;
			vec2 uvClearcoat = LTC_Uv( Ncc, viewDir, material.clearcoatRoughness );
			vec4 t1Clearcoat = texture2D( ltc_1, uvClearcoat );
			vec4 t2Clearcoat = texture2D( ltc_2, uvClearcoat );
			mat3 mInvClearcoat = mat3(
				vec3( t1Clearcoat.x, 0, t1Clearcoat.y ),
				vec3(             0, 1,             0 ),
				vec3( t1Clearcoat.z, 0, t1Clearcoat.w )
			);
			vec3 fresnelClearcoat = material.clearcoatF0 * t2Clearcoat.x + ( material.clearcoatF90 - material.clearcoatF0 ) * t2Clearcoat.y;
			clearcoatSpecularDirect += lightColor * fresnelClearcoat * LTC_Evaluate( Ncc, viewDir, position, mInvClearcoat, rectCoords );
		#endif
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
 
 		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
 
 		float sheenAlbedoV = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
 		float sheenAlbedoL = IBLSheenBRDF( geometryNormal, directLight.direction, material.sheenRoughness );
 
 		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * max( sheenAlbedoV, sheenAlbedoL );
 
 		irradiance *= sheenEnergyComp;
 
 	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX_Multiscatter( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseContribution );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution );
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		diffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectDiffuse += diffuse;
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness ) * RECIPROCAL_PI;
 	#endif
	vec3 singleScatteringDielectric = vec3( 0.0 );
	vec3 multiScatteringDielectric = vec3( 0.0 );
	vec3 singleScatteringMetallic = vec3( 0.0 );
	vec3 multiScatteringMetallic = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnelDielectric, material.roughness, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.diffuseColor, material.specularF90, material.iridescence, material.iridescenceFresnelMetallic, material.roughness, singleScatteringMetallic, multiScatteringMetallic );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscattering( geometryNormal, geometryViewDir, material.diffuseColor, material.specularF90, material.roughness, singleScatteringMetallic, multiScatteringMetallic );
	#endif
	vec3 singleScattering = mix( singleScatteringDielectric, singleScatteringMetallic, material.metalness );
	vec3 multiScattering = mix( multiScatteringDielectric, multiScatteringMetallic, material.metalness );
	vec3 totalScatteringDielectric = singleScatteringDielectric + multiScatteringDielectric;
	vec3 diffuse = material.diffuseContribution * ( 1.0 - totalScatteringDielectric );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	vec3 indirectSpecular = radiance * singleScattering;
	indirectSpecular += multiScattering * cosineWeightedIrradiance;
	vec3 indirectDiffuse = diffuse * cosineWeightedIrradiance;
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		indirectSpecular *= sheenEnergyComp;
		indirectDiffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectSpecular += indirectSpecular;
	reflectedLight.indirectDiffuse += indirectDiffuse;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,Jx=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnelDielectric = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceFresnelMetallic = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.diffuseColor );
		material.iridescenceFresnel = mix( material.iridescenceFresnelDielectric, material.iridescenceFresnelMetallic, material.metalness );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS ) && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
	#ifdef USE_LIGHT_PROBES_GRID
		vec3 probeWorldPos = ( ( vec4( geometryPosition, 1.0 ) - viewMatrix[ 3 ] ) * viewMatrix ).xyz;
		vec3 probeWorldNormal = inverseTransformDirection( geometryNormal, viewMatrix );
		irradiance += getLightProbeGridIrradiance( probeWorldPos, probeWorldNormal );
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,Qx=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( ENVMAP_TYPE_CUBE_UV )
		#if defined( STANDARD ) || defined( LAMBERT ) || defined( PHONG )
			iblIrradiance += getIBLIrradiance( geometryNormal );
		#endif
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,eS=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,tS=`#ifdef USE_LIGHT_PROBES_GRID
uniform highp sampler3D probesSH;
uniform vec3 probesMin;
uniform vec3 probesMax;
uniform vec3 probesResolution;
vec3 getLightProbeGridIrradiance( vec3 worldPos, vec3 worldNormal ) {
	vec3 res = probesResolution;
	vec3 gridRange = probesMax - probesMin;
	vec3 resMinusOne = res - 1.0;
	vec3 probeSpacing = gridRange / resMinusOne;
	vec3 samplePos = worldPos + worldNormal * probeSpacing * 0.5;
	vec3 uvw = clamp( ( samplePos - probesMin ) / gridRange, 0.0, 1.0 );
	uvw = uvw * resMinusOne / res + 0.5 / res;
	float nz          = res.z;
	float paddedSlices = nz + 2.0;
	float atlasDepth  = 7.0 * paddedSlices;
	float uvZBase     = uvw.z * nz + 1.0;
	vec4 s0 = texture( probesSH, vec3( uvw.xy, ( uvZBase                       ) / atlasDepth ) );
	vec4 s1 = texture( probesSH, vec3( uvw.xy, ( uvZBase +       paddedSlices   ) / atlasDepth ) );
	vec4 s2 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 2.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s3 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 3.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s4 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 4.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s5 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 5.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s6 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 6.0 * paddedSlices   ) / atlasDepth ) );
	vec3 c0 = s0.xyz;
	vec3 c1 = vec3( s0.w, s1.xy );
	vec3 c2 = vec3( s1.zw, s2.x );
	vec3 c3 = s2.yzw;
	vec3 c4 = s3.xyz;
	vec3 c5 = vec3( s3.w, s4.xy );
	vec3 c6 = vec3( s4.zw, s5.x );
	vec3 c7 = s5.yzw;
	vec3 c8 = s6.xyz;
	float x = worldNormal.x, y = worldNormal.y, z = worldNormal.z;
	vec3 result = c0 * 0.886227;
	result += c1 * 2.0 * 0.511664 * y;
	result += c2 * 2.0 * 0.511664 * z;
	result += c3 * 2.0 * 0.511664 * x;
	result += c4 * 2.0 * 0.429043 * x * y;
	result += c5 * 2.0 * 0.429043 * y * z;
	result += c6 * ( 0.743125 * z * z - 0.247708 );
	result += c7 * 2.0 * 0.429043 * x * z;
	result += c8 * 0.429043 * ( x * x - y * y );
	return max( result, vec3( 0.0 ) );
}
#endif`,nS=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,iS=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,rS=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,sS=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,oS=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,aS=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,lS=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,cS=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,uS=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,dS=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,fS=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,hS=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,pS=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,mS=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,gS=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,_S=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,vS=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#if defined( USE_PACKED_NORMALMAP )
		mapN = vec3( mapN.xy, sqrt( saturate( 1.0 - dot( mapN.xy, mapN.xy ) ) ) );
	#endif
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,xS=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,SS=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,yS=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,MS=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,ES=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,wS=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,TS=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,AS=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,bS=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,CS=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	#ifdef USE_REVERSED_DEPTH_BUFFER
	
		return depth * ( far - near ) - far;
	#else
		return depth * ( near - far ) - near;
	#endif
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	
	#ifdef USE_REVERSED_DEPTH_BUFFER
		return ( near * far ) / ( ( near - far ) * depth - near );
	#else
		return ( near * far ) / ( ( far - near ) * depth - far );
	#endif
}`,RS=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,PS=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,LS=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,DS=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,IS=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,NS=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,US=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#else
			uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#endif
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#else
			uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#endif
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform samplerCubeShadow pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#elif defined( SHADOWMAP_TYPE_BASIC )
			uniform samplerCube pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#endif
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float interleavedGradientNoise( vec2 position ) {
			return fract( 52.9829189 * fract( dot( position, vec2( 0.06711056, 0.00583715 ) ) ) );
		}
		vec2 vogelDiskSample( int sampleIndex, int samplesCount, float phi ) {
			const float goldenAngle = 2.399963229728653;
			float r = sqrt( ( float( sampleIndex ) + 0.5 ) / float( samplesCount ) );
			float theta = float( sampleIndex ) * goldenAngle + phi;
			return vec2( cos( theta ), sin( theta ) ) * r;
		}
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float getShadow( sampler2DShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			shadowCoord.z += shadowBias;
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
				float radius = shadowRadius * texelSize.x;
				float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
				shadow = (
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 0, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 1, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 2, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 3, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 4, 5, phi ) * radius, shadowCoord.z ) )
				) * 0.2;
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#elif defined( SHADOWMAP_TYPE_VSM )
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 distribution = texture2D( shadowMap, shadowCoord.xy ).rg;
				float mean = distribution.x;
				float variance = distribution.y * distribution.y;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					float hard_shadow = step( mean, shadowCoord.z );
				#else
					float hard_shadow = step( shadowCoord.z, mean );
				#endif
				
				if ( hard_shadow == 1.0 ) {
					shadow = 1.0;
				} else {
					variance = max( variance, 0.0000001 );
					float d = shadowCoord.z - mean;
					float p_max = variance / ( variance + d * d );
					p_max = clamp( ( p_max - 0.3 ) / 0.65, 0.0, 1.0 );
					shadow = max( hard_shadow, p_max );
				}
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#else
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				float depth = texture2D( shadowMap, shadowCoord.xy ).r;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					shadow = step( depth, shadowCoord.z );
				#else
					shadow = step( shadowCoord.z, depth );
				#endif
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#if defined( SHADOWMAP_TYPE_PCF )
	float getPointShadow( samplerCubeShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			#ifdef USE_REVERSED_DEPTH_BUFFER
				float dp = ( shadowCameraNear * ( shadowCameraFar - viewSpaceZ ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp -= shadowBias;
			#else
				float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp += shadowBias;
			#endif
			float texelSize = shadowRadius / shadowMapSize.x;
			vec3 absDir = abs( bd3D );
			vec3 tangent = absDir.x > absDir.z ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 );
			tangent = normalize( cross( bd3D, tangent ) );
			vec3 bitangent = cross( bd3D, tangent );
			float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
			vec2 sample0 = vogelDiskSample( 0, 5, phi );
			vec2 sample1 = vogelDiskSample( 1, 5, phi );
			vec2 sample2 = vogelDiskSample( 2, 5, phi );
			vec2 sample3 = vogelDiskSample( 3, 5, phi );
			vec2 sample4 = vogelDiskSample( 4, 5, phi );
			shadow = (
				texture( shadowMap, vec4( bd3D + ( tangent * sample0.x + bitangent * sample0.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample1.x + bitangent * sample1.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample2.x + bitangent * sample2.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample3.x + bitangent * sample3.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample4.x + bitangent * sample4.y ) * texelSize, dp ) )
			) * 0.2;
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#elif defined( SHADOWMAP_TYPE_BASIC )
	float getPointShadow( samplerCube shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			float depth = textureCube( shadowMap, bd3D ).r;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				depth = 1.0 - depth;
			#endif
			shadow = step( dp, depth );
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#endif
	#endif
#endif`,FS=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,OS=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	#ifdef HAS_NORMAL
		vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	#else
		vec3 shadowWorldNormal = vec3( 0.0 );
	#endif
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,kS=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0 && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,BS=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,zS=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,HS=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,VS=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,GS=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,WS=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,XS=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,jS=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,YS=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseContribution, material.specularColorBlended, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,qS=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,$S=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,KS=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,ZS=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,JS=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const QS=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,ey=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,ty=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,ny=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vWorldDirection );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,iy=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,ry=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,sy=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,oy=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,ay=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,ly=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = vec4( dist, 0.0, 0.0, 1.0 );
}`,cy=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,uy=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,dy=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,fy=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,hy=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,py=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,my=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,gy=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,_y=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,vy=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,xy=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,Sy=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( normalize( normal ) * 0.5 + 0.5, diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,yy=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,My=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Ey=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,wy=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
 
		outgoingLight = outgoingLight + sheenSpecularDirect + sheenSpecularIndirect;
 
 	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Ty=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Ay=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,by=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,Cy=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Ry=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Py=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Ly=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Dy=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Pt={alphahash_fragment:Qv,alphahash_pars_fragment:ex,alphamap_fragment:tx,alphamap_pars_fragment:nx,alphatest_fragment:ix,alphatest_pars_fragment:rx,aomap_fragment:sx,aomap_pars_fragment:ox,batching_pars_vertex:ax,batching_vertex:lx,begin_vertex:cx,beginnormal_vertex:ux,bsdfs:dx,iridescence_fragment:fx,bumpmap_pars_fragment:hx,clipping_planes_fragment:px,clipping_planes_pars_fragment:mx,clipping_planes_pars_vertex:gx,clipping_planes_vertex:_x,color_fragment:vx,color_pars_fragment:xx,color_pars_vertex:Sx,color_vertex:yx,common:Mx,cube_uv_reflection_fragment:Ex,defaultnormal_vertex:wx,displacementmap_pars_vertex:Tx,displacementmap_vertex:Ax,emissivemap_fragment:bx,emissivemap_pars_fragment:Cx,colorspace_fragment:Rx,colorspace_pars_fragment:Px,envmap_fragment:Lx,envmap_common_pars_fragment:Dx,envmap_pars_fragment:Ix,envmap_pars_vertex:Nx,envmap_physical_pars_fragment:Xx,envmap_vertex:Ux,fog_vertex:Fx,fog_pars_vertex:Ox,fog_fragment:kx,fog_pars_fragment:Bx,gradientmap_pars_fragment:zx,lightmap_pars_fragment:Hx,lights_lambert_fragment:Vx,lights_lambert_pars_fragment:Gx,lights_pars_begin:Wx,lights_toon_fragment:jx,lights_toon_pars_fragment:Yx,lights_phong_fragment:qx,lights_phong_pars_fragment:$x,lights_physical_fragment:Kx,lights_physical_pars_fragment:Zx,lights_fragment_begin:Jx,lights_fragment_maps:Qx,lights_fragment_end:eS,lightprobes_pars_fragment:tS,logdepthbuf_fragment:nS,logdepthbuf_pars_fragment:iS,logdepthbuf_pars_vertex:rS,logdepthbuf_vertex:sS,map_fragment:oS,map_pars_fragment:aS,map_particle_fragment:lS,map_particle_pars_fragment:cS,metalnessmap_fragment:uS,metalnessmap_pars_fragment:dS,morphinstance_vertex:fS,morphcolor_vertex:hS,morphnormal_vertex:pS,morphtarget_pars_vertex:mS,morphtarget_vertex:gS,normal_fragment_begin:_S,normal_fragment_maps:vS,normal_pars_fragment:xS,normal_pars_vertex:SS,normal_vertex:yS,normalmap_pars_fragment:MS,clearcoat_normal_fragment_begin:ES,clearcoat_normal_fragment_maps:wS,clearcoat_pars_fragment:TS,iridescence_pars_fragment:AS,opaque_fragment:bS,packing:CS,premultiplied_alpha_fragment:RS,project_vertex:PS,dithering_fragment:LS,dithering_pars_fragment:DS,roughnessmap_fragment:IS,roughnessmap_pars_fragment:NS,shadowmap_pars_fragment:US,shadowmap_pars_vertex:FS,shadowmap_vertex:OS,shadowmask_pars_fragment:kS,skinbase_vertex:BS,skinning_pars_vertex:zS,skinning_vertex:HS,skinnormal_vertex:VS,specularmap_fragment:GS,specularmap_pars_fragment:WS,tonemapping_fragment:XS,tonemapping_pars_fragment:jS,transmission_fragment:YS,transmission_pars_fragment:qS,uv_pars_fragment:$S,uv_pars_vertex:KS,uv_vertex:ZS,worldpos_vertex:JS,background_vert:QS,background_frag:ey,backgroundCube_vert:ty,backgroundCube_frag:ny,cube_vert:iy,cube_frag:ry,depth_vert:sy,depth_frag:oy,distance_vert:ay,distance_frag:ly,equirect_vert:cy,equirect_frag:uy,linedashed_vert:dy,linedashed_frag:fy,meshbasic_vert:hy,meshbasic_frag:py,meshlambert_vert:my,meshlambert_frag:gy,meshmatcap_vert:_y,meshmatcap_frag:vy,meshnormal_vert:xy,meshnormal_frag:Sy,meshphong_vert:yy,meshphong_frag:My,meshphysical_vert:Ey,meshphysical_frag:wy,meshtoon_vert:Ty,meshtoon_frag:Ay,points_vert:by,points_frag:Cy,shadow_vert:Ry,shadow_frag:Py,sprite_vert:Ly,sprite_frag:Dy},Ye={common:{diffuse:{value:new Rt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Ct},alphaMap:{value:null},alphaMapTransform:{value:new Ct},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Ct}},envmap:{envMap:{value:null},envMapRotation:{value:new Ct},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Ct}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Ct}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Ct},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Ct},normalScale:{value:new Vt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Ct},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Ct}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Ct}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Ct}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Rt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new J},probesMax:{value:new J},probesResolution:{value:new J}},points:{diffuse:{value:new Rt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Ct},alphaTest:{value:0},uvTransform:{value:new Ct}},sprite:{diffuse:{value:new Rt(16777215)},opacity:{value:1},center:{value:new Vt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Ct},alphaMap:{value:null},alphaMapTransform:{value:new Ct},alphaTest:{value:0}}},Yi={basic:{uniforms:Zn([Ye.common,Ye.specularmap,Ye.envmap,Ye.aomap,Ye.lightmap,Ye.fog]),vertexShader:Pt.meshbasic_vert,fragmentShader:Pt.meshbasic_frag},lambert:{uniforms:Zn([Ye.common,Ye.specularmap,Ye.envmap,Ye.aomap,Ye.lightmap,Ye.emissivemap,Ye.bumpmap,Ye.normalmap,Ye.displacementmap,Ye.fog,Ye.lights,{emissive:{value:new Rt(0)},envMapIntensity:{value:1}}]),vertexShader:Pt.meshlambert_vert,fragmentShader:Pt.meshlambert_frag},phong:{uniforms:Zn([Ye.common,Ye.specularmap,Ye.envmap,Ye.aomap,Ye.lightmap,Ye.emissivemap,Ye.bumpmap,Ye.normalmap,Ye.displacementmap,Ye.fog,Ye.lights,{emissive:{value:new Rt(0)},specular:{value:new Rt(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:Pt.meshphong_vert,fragmentShader:Pt.meshphong_frag},standard:{uniforms:Zn([Ye.common,Ye.envmap,Ye.aomap,Ye.lightmap,Ye.emissivemap,Ye.bumpmap,Ye.normalmap,Ye.displacementmap,Ye.roughnessmap,Ye.metalnessmap,Ye.fog,Ye.lights,{emissive:{value:new Rt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Pt.meshphysical_vert,fragmentShader:Pt.meshphysical_frag},toon:{uniforms:Zn([Ye.common,Ye.aomap,Ye.lightmap,Ye.emissivemap,Ye.bumpmap,Ye.normalmap,Ye.displacementmap,Ye.gradientmap,Ye.fog,Ye.lights,{emissive:{value:new Rt(0)}}]),vertexShader:Pt.meshtoon_vert,fragmentShader:Pt.meshtoon_frag},matcap:{uniforms:Zn([Ye.common,Ye.bumpmap,Ye.normalmap,Ye.displacementmap,Ye.fog,{matcap:{value:null}}]),vertexShader:Pt.meshmatcap_vert,fragmentShader:Pt.meshmatcap_frag},points:{uniforms:Zn([Ye.points,Ye.fog]),vertexShader:Pt.points_vert,fragmentShader:Pt.points_frag},dashed:{uniforms:Zn([Ye.common,Ye.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Pt.linedashed_vert,fragmentShader:Pt.linedashed_frag},depth:{uniforms:Zn([Ye.common,Ye.displacementmap]),vertexShader:Pt.depth_vert,fragmentShader:Pt.depth_frag},normal:{uniforms:Zn([Ye.common,Ye.bumpmap,Ye.normalmap,Ye.displacementmap,{opacity:{value:1}}]),vertexShader:Pt.meshnormal_vert,fragmentShader:Pt.meshnormal_frag},sprite:{uniforms:Zn([Ye.sprite,Ye.fog]),vertexShader:Pt.sprite_vert,fragmentShader:Pt.sprite_frag},background:{uniforms:{uvTransform:{value:new Ct},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Pt.background_vert,fragmentShader:Pt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Ct}},vertexShader:Pt.backgroundCube_vert,fragmentShader:Pt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Pt.cube_vert,fragmentShader:Pt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Pt.equirect_vert,fragmentShader:Pt.equirect_frag},distance:{uniforms:Zn([Ye.common,Ye.displacementmap,{referencePosition:{value:new J},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Pt.distance_vert,fragmentShader:Pt.distance_frag},shadow:{uniforms:Zn([Ye.lights,Ye.fog,{color:{value:new Rt(0)},opacity:{value:1}}]),vertexShader:Pt.shadow_vert,fragmentShader:Pt.shadow_frag}};Yi.physical={uniforms:Zn([Yi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Ct},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Ct},clearcoatNormalScale:{value:new Vt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Ct},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Ct},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Ct},sheen:{value:0},sheenColor:{value:new Rt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Ct},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Ct},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Ct},transmissionSamplerSize:{value:new Vt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Ct},attenuationDistance:{value:0},attenuationColor:{value:new Rt(0)},specularColor:{value:new Rt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Ct},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Ct},anisotropyVector:{value:new Vt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Ct}}]),vertexShader:Pt.meshphysical_vert,fragmentShader:Pt.meshphysical_frag};const Ul={r:0,b:0,g:0},Iy=new _n,U0=new Ct;U0.set(-1,0,0,0,1,0,0,0,1);function Ny(r,e,n,s,a,l){const u=new Rt(0);let f=a===!0?0:1,p,m,x=null,S=0,g=null;function M(b){let L=b.isScene===!0?b.background:null;if(L&&L.isTexture){const P=b.backgroundBlurriness>0;L=e.get(L,P)}return L}function T(b){let L=!1;const P=M(b);P===null?_(u,f):P&&P.isColor&&(_(P,1),L=!0);const B=r.xr.getEnvironmentBlendMode();B==="additive"?n.buffers.color.setClear(0,0,0,1,l):B==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,l),(r.autoClear||L)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),r.clear(r.autoClearColor,r.autoClearDepth,r.autoClearStencil))}function C(b,L){const P=M(L);P&&(P.isCubeTexture||P.mapping===Zl)?(m===void 0&&(m=new be(new go(1,1,1),new tr({name:"BackgroundCubeMaterial",uniforms:po(Yi.backgroundCube.uniforms),vertexShader:Yi.backgroundCube.vertexShader,fragmentShader:Yi.backgroundCube.fragmentShader,side:li,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),m.geometry.deleteAttribute("normal"),m.geometry.deleteAttribute("uv"),m.onBeforeRender=function(B,I,k){this.matrixWorld.copyPosition(k.matrixWorld)},Object.defineProperty(m.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(m)),m.material.uniforms.envMap.value=P,m.material.uniforms.backgroundBlurriness.value=L.backgroundBlurriness,m.material.uniforms.backgroundIntensity.value=L.backgroundIntensity,m.material.uniforms.backgroundRotation.value.setFromMatrix4(Iy.makeRotationFromEuler(L.backgroundRotation)).transpose(),P.isCubeTexture&&P.isRenderTargetTexture===!1&&m.material.uniforms.backgroundRotation.value.premultiply(U0),m.material.toneMapped=Ht.getTransfer(P.colorSpace)!==Jt,(x!==P||S!==P.version||g!==r.toneMapping)&&(m.material.needsUpdate=!0,x=P,S=P.version,g=r.toneMapping),m.layers.enableAll(),b.unshift(m,m.geometry,m.material,0,0,null)):P&&P.isTexture&&(p===void 0&&(p=new be(new wn(2,2),new tr({name:"BackgroundMaterial",uniforms:po(Yi.background.uniforms),vertexShader:Yi.background.vertexShader,fragmentShader:Yi.background.fragmentShader,side:Kr,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),p.geometry.deleteAttribute("normal"),Object.defineProperty(p.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(p)),p.material.uniforms.t2D.value=P,p.material.uniforms.backgroundIntensity.value=L.backgroundIntensity,p.material.toneMapped=Ht.getTransfer(P.colorSpace)!==Jt,P.matrixAutoUpdate===!0&&P.updateMatrix(),p.material.uniforms.uvTransform.value.copy(P.matrix),(x!==P||S!==P.version||g!==r.toneMapping)&&(p.material.needsUpdate=!0,x=P,S=P.version,g=r.toneMapping),p.layers.enableAll(),b.unshift(p,p.geometry,p.material,0,0,null))}function _(b,L){b.getRGB(Ul,L0(r)),n.buffers.color.setClear(Ul.r,Ul.g,Ul.b,L,l)}function v(){m!==void 0&&(m.geometry.dispose(),m.material.dispose(),m=void 0),p!==void 0&&(p.geometry.dispose(),p.material.dispose(),p=void 0)}return{getClearColor:function(){return u},setClearColor:function(b,L=1){u.set(b),f=L,_(u,f)},getClearAlpha:function(){return f},setClearAlpha:function(b){f=b,_(u,f)},render:T,addToRenderList:C,dispose:v}}function Uy(r,e){const n=r.getParameter(r.MAX_VERTEX_ATTRIBS),s={},a=g(null);let l=a,u=!1;function f(O,Y,oe,he,W){let te=!1;const $=S(O,he,oe,Y);l!==$&&(l=$,m(l.object)),te=M(O,he,oe,W),te&&T(O,he,oe,W),W!==null&&e.update(W,r.ELEMENT_ARRAY_BUFFER),(te||u)&&(u=!1,P(O,Y,oe,he),W!==null&&r.bindBuffer(r.ELEMENT_ARRAY_BUFFER,e.get(W).buffer))}function p(){return r.createVertexArray()}function m(O){return r.bindVertexArray(O)}function x(O){return r.deleteVertexArray(O)}function S(O,Y,oe,he){const W=he.wireframe===!0;let te=s[Y.id];te===void 0&&(te={},s[Y.id]=te);const $=O.isInstancedMesh===!0?O.id:0;let Z=te[$];Z===void 0&&(Z={},te[$]=Z);let ce=Z[oe.id];ce===void 0&&(ce={},Z[oe.id]=ce);let ue=ce[W];return ue===void 0&&(ue=g(p()),ce[W]=ue),ue}function g(O){const Y=[],oe=[],he=[];for(let W=0;W<n;W++)Y[W]=0,oe[W]=0,he[W]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:Y,enabledAttributes:oe,attributeDivisors:he,object:O,attributes:{},index:null}}function M(O,Y,oe,he){const W=l.attributes,te=Y.attributes;let $=0;const Z=oe.getAttributes();for(const ce in Z)if(Z[ce].location>=0){const F=W[ce];let ne=te[ce];if(ne===void 0&&(ce==="instanceMatrix"&&O.instanceMatrix&&(ne=O.instanceMatrix),ce==="instanceColor"&&O.instanceColor&&(ne=O.instanceColor)),F===void 0||F.attribute!==ne||ne&&F.data!==ne.data)return!0;$++}return l.attributesNum!==$||l.index!==he}function T(O,Y,oe,he){const W={},te=Y.attributes;let $=0;const Z=oe.getAttributes();for(const ce in Z)if(Z[ce].location>=0){let F=te[ce];F===void 0&&(ce==="instanceMatrix"&&O.instanceMatrix&&(F=O.instanceMatrix),ce==="instanceColor"&&O.instanceColor&&(F=O.instanceColor));const ne={};ne.attribute=F,F&&F.data&&(ne.data=F.data),W[ce]=ne,$++}l.attributes=W,l.attributesNum=$,l.index=he}function C(){const O=l.newAttributes;for(let Y=0,oe=O.length;Y<oe;Y++)O[Y]=0}function _(O){v(O,0)}function v(O,Y){const oe=l.newAttributes,he=l.enabledAttributes,W=l.attributeDivisors;oe[O]=1,he[O]===0&&(r.enableVertexAttribArray(O),he[O]=1),W[O]!==Y&&(r.vertexAttribDivisor(O,Y),W[O]=Y)}function b(){const O=l.newAttributes,Y=l.enabledAttributes;for(let oe=0,he=Y.length;oe<he;oe++)Y[oe]!==O[oe]&&(r.disableVertexAttribArray(oe),Y[oe]=0)}function L(O,Y,oe,he,W,te,$){$===!0?r.vertexAttribIPointer(O,Y,oe,W,te):r.vertexAttribPointer(O,Y,oe,he,W,te)}function P(O,Y,oe,he){C();const W=he.attributes,te=oe.getAttributes(),$=Y.defaultAttributeValues;for(const Z in te){const ce=te[Z];if(ce.location>=0){let ue=W[Z];if(ue===void 0&&(Z==="instanceMatrix"&&O.instanceMatrix&&(ue=O.instanceMatrix),Z==="instanceColor"&&O.instanceColor&&(ue=O.instanceColor)),ue!==void 0){const F=ue.normalized,ne=ue.itemSize,Ge=e.get(ue);if(Ge===void 0)continue;const qe=Ge.buffer,Xe=Ge.type,Q=Ge.bytesPerElement,Ae=Xe===r.INT||Xe===r.UNSIGNED_INT||ue.gpuType===ff;if(ue.isInterleavedBufferAttribute){const Se=ue.data,ze=Se.stride,it=ue.offset;if(Se.isInstancedInterleavedBuffer){for(let at=0;at<ce.locationSize;at++)v(ce.location+at,Se.meshPerAttribute);O.isInstancedMesh!==!0&&he._maxInstanceCount===void 0&&(he._maxInstanceCount=Se.meshPerAttribute*Se.count)}else for(let at=0;at<ce.locationSize;at++)_(ce.location+at);r.bindBuffer(r.ARRAY_BUFFER,qe);for(let at=0;at<ce.locationSize;at++)L(ce.location+at,ne/ce.locationSize,Xe,F,ze*Q,(it+ne/ce.locationSize*at)*Q,Ae)}else{if(ue.isInstancedBufferAttribute){for(let Se=0;Se<ce.locationSize;Se++)v(ce.location+Se,ue.meshPerAttribute);O.isInstancedMesh!==!0&&he._maxInstanceCount===void 0&&(he._maxInstanceCount=ue.meshPerAttribute*ue.count)}else for(let Se=0;Se<ce.locationSize;Se++)_(ce.location+Se);r.bindBuffer(r.ARRAY_BUFFER,qe);for(let Se=0;Se<ce.locationSize;Se++)L(ce.location+Se,ne/ce.locationSize,Xe,F,ne*Q,ne/ce.locationSize*Se*Q,Ae)}}else if($!==void 0){const F=$[Z];if(F!==void 0)switch(F.length){case 2:r.vertexAttrib2fv(ce.location,F);break;case 3:r.vertexAttrib3fv(ce.location,F);break;case 4:r.vertexAttrib4fv(ce.location,F);break;default:r.vertexAttrib1fv(ce.location,F)}}}}b()}function B(){N();for(const O in s){const Y=s[O];for(const oe in Y){const he=Y[oe];for(const W in he){const te=he[W];for(const $ in te)x(te[$].object),delete te[$];delete he[W]}}delete s[O]}}function I(O){if(s[O.id]===void 0)return;const Y=s[O.id];for(const oe in Y){const he=Y[oe];for(const W in he){const te=he[W];for(const $ in te)x(te[$].object),delete te[$];delete he[W]}}delete s[O.id]}function k(O){for(const Y in s){const oe=s[Y];for(const he in oe){const W=oe[he];if(W[O.id]===void 0)continue;const te=W[O.id];for(const $ in te)x(te[$].object),delete te[$];delete W[O.id]}}}function w(O){for(const Y in s){const oe=s[Y],he=O.isInstancedMesh===!0?O.id:0,W=oe[he];if(W!==void 0){for(const te in W){const $=W[te];for(const Z in $)x($[Z].object),delete $[Z];delete W[te]}delete oe[he],Object.keys(oe).length===0&&delete s[Y]}}}function N(){j(),u=!0,l!==a&&(l=a,m(l.object))}function j(){a.geometry=null,a.program=null,a.wireframe=!1}return{setup:f,reset:N,resetDefaultState:j,dispose:B,releaseStatesOfGeometry:I,releaseStatesOfObject:w,releaseStatesOfProgram:k,initAttributes:C,enableAttribute:_,disableUnusedAttributes:b}}function Fy(r,e,n){let s;function a(p){s=p}function l(p,m){r.drawArrays(s,p,m),n.update(m,s,1)}function u(p,m,x){x!==0&&(r.drawArraysInstanced(s,p,m,x),n.update(m,s,x))}function f(p,m,x){if(x===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(s,p,0,m,0,x);let g=0;for(let M=0;M<x;M++)g+=m[M];n.update(g,s,1)}this.setMode=a,this.render=l,this.renderInstances=u,this.renderMultiDraw=f}function Oy(r,e,n,s){let a;function l(){if(a!==void 0)return a;if(e.has("EXT_texture_filter_anisotropic")===!0){const k=e.get("EXT_texture_filter_anisotropic");a=r.getParameter(k.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else a=0;return a}function u(k){return!(k!==ki&&s.convert(k)!==r.getParameter(r.IMPLEMENTATION_COLOR_READ_FORMAT))}function f(k){const w=k===Sr&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(k!==gi&&s.convert(k)!==r.getParameter(r.IMPLEMENTATION_COLOR_READ_TYPE)&&k!==qi&&!w)}function p(k){if(k==="highp"){if(r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.HIGH_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.HIGH_FLOAT).precision>0)return"highp";k="mediump"}return k==="mediump"&&r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.MEDIUM_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let m=n.precision!==void 0?n.precision:"highp";const x=p(m);x!==m&&(yt("WebGLRenderer:",m,"not supported, using",x,"instead."),m=x);const S=n.logarithmicDepthBuffer===!0,g=n.reversedDepthBuffer===!0&&e.has("EXT_clip_control");n.reversedDepthBuffer===!0&&g===!1&&yt("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");const M=r.getParameter(r.MAX_TEXTURE_IMAGE_UNITS),T=r.getParameter(r.MAX_VERTEX_TEXTURE_IMAGE_UNITS),C=r.getParameter(r.MAX_TEXTURE_SIZE),_=r.getParameter(r.MAX_CUBE_MAP_TEXTURE_SIZE),v=r.getParameter(r.MAX_VERTEX_ATTRIBS),b=r.getParameter(r.MAX_VERTEX_UNIFORM_VECTORS),L=r.getParameter(r.MAX_VARYING_VECTORS),P=r.getParameter(r.MAX_FRAGMENT_UNIFORM_VECTORS),B=r.getParameter(r.MAX_SAMPLES),I=r.getParameter(r.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:l,getMaxPrecision:p,textureFormatReadable:u,textureTypeReadable:f,precision:m,logarithmicDepthBuffer:S,reversedDepthBuffer:g,maxTextures:M,maxVertexTextures:T,maxTextureSize:C,maxCubemapSize:_,maxAttributes:v,maxVertexUniforms:b,maxVaryings:L,maxFragmentUniforms:P,maxSamples:B,samples:I}}function ky(r){const e=this;let n=null,s=0,a=!1,l=!1;const u=new ms,f=new Ct,p={value:null,needsUpdate:!1};this.uniform=p,this.numPlanes=0,this.numIntersection=0,this.init=function(S,g){const M=S.length!==0||g||s!==0||a;return a=g,s=S.length,M},this.beginShadows=function(){l=!0,x(null)},this.endShadows=function(){l=!1},this.setGlobalState=function(S,g){n=x(S,g,0)},this.setState=function(S,g,M){const T=S.clippingPlanes,C=S.clipIntersection,_=S.clipShadows,v=r.get(S);if(!a||T===null||T.length===0||l&&!_)l?x(null):m();else{const b=l?0:s,L=b*4;let P=v.clippingState||null;p.value=P,P=x(T,g,L,M);for(let B=0;B!==L;++B)P[B]=n[B];v.clippingState=P,this.numIntersection=C?this.numPlanes:0,this.numPlanes+=b}};function m(){p.value!==n&&(p.value=n,p.needsUpdate=s>0),e.numPlanes=s,e.numIntersection=0}function x(S,g,M,T){const C=S!==null?S.length:0;let _=null;if(C!==0){if(_=p.value,T!==!0||_===null){const v=M+C*4,b=g.matrixWorldInverse;f.getNormalMatrix(b),(_===null||_.length<v)&&(_=new Float32Array(v));for(let L=0,P=M;L!==C;++L,P+=4)u.copy(S[L]).applyMatrix4(b,f),u.normal.toArray(_,P),_[P+3]=u.constant}p.value=_,p.needsUpdate=!0}return e.numPlanes=C,e.numIntersection=0,_}}const $r=4,Bm=[.125,.215,.35,.446,.526,.582],_s=20,By=256,na=new Cf,zm=new Rt;let ld=null,cd=0,ud=0,dd=!1;const zy=new J;class Hm{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._sigmas=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,n=0,s=.1,a=100,l={}){const{size:u=256,position:f=zy}=l;ld=this._renderer.getRenderTarget(),cd=this._renderer.getActiveCubeFace(),ud=this._renderer.getActiveMipmapLevel(),dd=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(u);const p=this._allocateTargets();return p.depthBuffer=!0,this._sceneToCubeUV(e,s,a,p,f),n>0&&this._blur(p,0,0,n),this._applyPMREM(p),this._cleanup(p),p}fromEquirectangular(e,n=null){return this._fromTexture(e,n)}fromCubemap(e,n=null){return this._fromTexture(e,n)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Wm(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Gm(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(ld,cd,ud),this._renderer.xr.enabled=dd,e.scissorTest=!1,oo(e,0,0,e.width,e.height)}_fromTexture(e,n){e.mapping===Ss||e.mapping===fo?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),ld=this._renderer.getRenderTarget(),cd=this._renderer.getActiveCubeFace(),ud=this._renderer.getActiveMipmapLevel(),dd=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const s=n||this._allocateTargets();return this._textureToCubeUV(e,s),this._applyPMREM(s),this._cleanup(s),s}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),n=4*this._cubeSize,s={magFilter:jn,minFilter:jn,generateMipmaps:!1,type:Sr,format:ki,colorSpace:Wl,depthBuffer:!1},a=Vm(e,n,s);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==n){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Vm(e,n,s);const{_lodMax:l}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods,sigmas:this._sigmas}=Hy(l)),this._blurMaterial=Gy(l,e,n),this._ggxMaterial=Vy(l,e,n)}return a}_compileMaterial(e){const n=new be(new _i,e);this._renderer.compile(n,na)}_sceneToCubeUV(e,n,s,a,l){const p=new mi(90,1,n,s),m=[1,-1,1,1,1,1],x=[1,1,1,-1,-1,-1],S=this._renderer,g=S.autoClear,M=S.toneMapping;S.getClearColor(zm),S.toneMapping=Zi,S.autoClear=!1,S.state.buffers.depth.getReversed()&&(S.setRenderTarget(a),S.clearDepth(),S.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new be(new go,new Yl({name:"PMREM.Background",side:li,depthWrite:!1,depthTest:!1})));const C=this._backgroundBox,_=C.material;let v=!1;const b=e.background;b?b.isColor&&(_.color.copy(b),e.background=null,v=!0):(_.color.copy(zm),v=!0);for(let L=0;L<6;L++){const P=L%3;P===0?(p.up.set(0,m[L],0),p.position.set(l.x,l.y,l.z),p.lookAt(l.x+x[L],l.y,l.z)):P===1?(p.up.set(0,0,m[L]),p.position.set(l.x,l.y,l.z),p.lookAt(l.x,l.y+x[L],l.z)):(p.up.set(0,m[L],0),p.position.set(l.x,l.y,l.z),p.lookAt(l.x,l.y,l.z+x[L]));const B=this._cubeSize;oo(a,P*B,L>2?B:0,B,B),S.setRenderTarget(a),v&&S.render(C,p),S.render(e,p)}S.toneMapping=M,S.autoClear=g,e.background=b}_textureToCubeUV(e,n){const s=this._renderer,a=e.mapping===Ss||e.mapping===fo;a?(this._cubemapMaterial===null&&(this._cubemapMaterial=Wm()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Gm());const l=a?this._cubemapMaterial:this._equirectMaterial,u=this._lodMeshes[0];u.material=l;const f=l.uniforms;f.envMap.value=e;const p=this._cubeSize;oo(n,0,0,3*p,2*p),s.setRenderTarget(n),s.render(u,na)}_applyPMREM(e){const n=this._renderer,s=n.autoClear;n.autoClear=!1;const a=this._lodMeshes.length;for(let l=1;l<a;l++)this._applyGGXFilter(e,l-1,l);n.autoClear=s}_applyGGXFilter(e,n,s){const a=this._renderer,l=this._pingPongRenderTarget,u=this._ggxMaterial,f=this._lodMeshes[s];f.material=u;const p=u.uniforms,m=s/(this._lodMeshes.length-1),x=n/(this._lodMeshes.length-1),S=Math.sqrt(m*m-x*x),g=0+m*1.25,M=S*g,{_lodMax:T}=this,C=this._sizeLods[s],_=3*C*(s>T-$r?s-T+$r:0),v=4*(this._cubeSize-C);p.envMap.value=e.texture,p.roughness.value=M,p.mipInt.value=T-n,oo(l,_,v,3*C,2*C),a.setRenderTarget(l),a.render(f,na),p.envMap.value=l.texture,p.roughness.value=0,p.mipInt.value=T-s,oo(e,_,v,3*C,2*C),a.setRenderTarget(e),a.render(f,na)}_blur(e,n,s,a,l){const u=this._pingPongRenderTarget;this._halfBlur(e,u,n,s,a,"latitudinal",l),this._halfBlur(u,e,s,s,a,"longitudinal",l)}_halfBlur(e,n,s,a,l,u,f){const p=this._renderer,m=this._blurMaterial;u!=="latitudinal"&&u!=="longitudinal"&&Xt("blur direction must be either latitudinal or longitudinal!");const x=3,S=this._lodMeshes[a];S.material=m;const g=m.uniforms,M=this._sizeLods[s]-1,T=isFinite(l)?Math.PI/(2*M):2*Math.PI/(2*_s-1),C=l/T,_=isFinite(l)?1+Math.floor(x*C):_s;_>_s&&yt(`sigmaRadians, ${l}, is too large and will clip, as it requested ${_} samples when the maximum is set to ${_s}`);const v=[];let b=0;for(let k=0;k<_s;++k){const w=k/C,N=Math.exp(-w*w/2);v.push(N),k===0?b+=N:k<_&&(b+=2*N)}for(let k=0;k<v.length;k++)v[k]=v[k]/b;g.envMap.value=e.texture,g.samples.value=_,g.weights.value=v,g.latitudinal.value=u==="latitudinal",f&&(g.poleAxis.value=f);const{_lodMax:L}=this;g.dTheta.value=T,g.mipInt.value=L-s;const P=this._sizeLods[a],B=3*P*(a>L-$r?a-L+$r:0),I=4*(this._cubeSize-P);oo(n,B,I,3*P,2*P),p.setRenderTarget(n),p.render(S,na)}}function Hy(r){const e=[],n=[],s=[];let a=r;const l=r-$r+1+Bm.length;for(let u=0;u<l;u++){const f=Math.pow(2,a);e.push(f);let p=1/f;u>r-$r?p=Bm[u-r+$r-1]:u===0&&(p=0),n.push(p);const m=1/(f-2),x=-m,S=1+m,g=[x,x,S,x,S,S,x,x,S,S,x,S],M=6,T=6,C=3,_=2,v=1,b=new Float32Array(C*T*M),L=new Float32Array(_*T*M),P=new Float32Array(v*T*M);for(let I=0;I<M;I++){const k=I%3*2/3-1,w=I>2?0:-1,N=[k,w,0,k+2/3,w,0,k+2/3,w+1,0,k,w,0,k+2/3,w+1,0,k,w+1,0];b.set(N,C*T*I),L.set(g,_*T*I);const j=[I,I,I,I,I,I];P.set(j,v*T*I)}const B=new _i;B.setAttribute("position",new Qi(b,C)),B.setAttribute("uv",new Qi(L,_)),B.setAttribute("faceIndex",new Qi(P,v)),s.push(new be(B,null)),a>$r&&a--}return{lodMeshes:s,sizeLods:e,sigmas:n}}function Vm(r,e,n){const s=new Ji(r,e,n);return s.texture.mapping=Zl,s.texture.name="PMREM.cubeUv",s.scissorTest=!0,s}function oo(r,e,n,s,a){r.viewport.set(e,n,s,a),r.scissor.set(e,n,s,a)}function Vy(r,e,n){return new tr({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:By,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${r}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:Jl(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float roughness;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359

			// Van der Corput radical inverse
			float radicalInverse_VdC(uint bits) {
				bits = (bits << 16u) | (bits >> 16u);
				bits = ((bits & 0x55555555u) << 1u) | ((bits & 0xAAAAAAAAu) >> 1u);
				bits = ((bits & 0x33333333u) << 2u) | ((bits & 0xCCCCCCCCu) >> 2u);
				bits = ((bits & 0x0F0F0F0Fu) << 4u) | ((bits & 0xF0F0F0F0u) >> 4u);
				bits = ((bits & 0x00FF00FFu) << 8u) | ((bits & 0xFF00FF00u) >> 8u);
				return float(bits) * 2.3283064365386963e-10; // / 0x100000000
			}

			// Hammersley sequence
			vec2 hammersley(uint i, uint N) {
				return vec2(float(i) / float(N), radicalInverse_VdC(i));
			}

			// GGX VNDF importance sampling (Eric Heitz 2018)
			// "Sampling the GGX Distribution of Visible Normals"
			// https://jcgt.org/published/0007/04/01/
			vec3 importanceSampleGGX_VNDF(vec2 Xi, vec3 V, float roughness) {
				float alpha = roughness * roughness;

				// Section 4.1: Orthonormal basis
				vec3 T1 = vec3(1.0, 0.0, 0.0);
				vec3 T2 = cross(V, T1);

				// Section 4.2: Parameterization of projected area
				float r = sqrt(Xi.x);
				float phi = 2.0 * PI * Xi.y;
				float t1 = r * cos(phi);
				float t2 = r * sin(phi);
				float s = 0.5 * (1.0 + V.z);
				t2 = (1.0 - s) * sqrt(1.0 - t1 * t1) + s * t2;

				// Section 4.3: Reprojection onto hemisphere
				vec3 Nh = t1 * T1 + t2 * T2 + sqrt(max(0.0, 1.0 - t1 * t1 - t2 * t2)) * V;

				// Section 3.4: Transform back to ellipsoid configuration
				return normalize(vec3(alpha * Nh.x, alpha * Nh.y, max(0.0, Nh.z)));
			}

			void main() {
				vec3 N = normalize(vOutputDirection);
				vec3 V = N; // Assume view direction equals normal for pre-filtering

				vec3 prefilteredColor = vec3(0.0);
				float totalWeight = 0.0;

				// For very low roughness, just sample the environment directly
				if (roughness < 0.001) {
					gl_FragColor = vec4(bilinearCubeUV(envMap, N, mipInt), 1.0);
					return;
				}

				// Tangent space basis for VNDF sampling
				vec3 up = abs(N.z) < 0.999 ? vec3(0.0, 0.0, 1.0) : vec3(1.0, 0.0, 0.0);
				vec3 tangent = normalize(cross(up, N));
				vec3 bitangent = cross(N, tangent);

				for(uint i = 0u; i < uint(GGX_SAMPLES); i++) {
					vec2 Xi = hammersley(i, uint(GGX_SAMPLES));

					// For PMREM, V = N, so in tangent space V is always (0, 0, 1)
					vec3 H_tangent = importanceSampleGGX_VNDF(Xi, vec3(0.0, 0.0, 1.0), roughness);

					// Transform H back to world space
					vec3 H = normalize(tangent * H_tangent.x + bitangent * H_tangent.y + N * H_tangent.z);
					vec3 L = normalize(2.0 * dot(V, H) * H - V);

					float NdotL = max(dot(N, L), 0.0);

					if(NdotL > 0.0) {
						// Sample environment at fixed mip level
						// VNDF importance sampling handles the distribution filtering
						vec3 sampleColor = bilinearCubeUV(envMap, L, mipInt);

						// Weight by NdotL for the split-sum approximation
						// VNDF PDF naturally accounts for the visible microfacet distribution
						prefilteredColor += sampleColor * NdotL;
						totalWeight += NdotL;
					}
				}

				if (totalWeight > 0.0) {
					prefilteredColor = prefilteredColor / totalWeight;
				}

				gl_FragColor = vec4(prefilteredColor, 1.0);
			}
		`,blending:vr,depthTest:!1,depthWrite:!1})}function Gy(r,e,n){const s=new Float32Array(_s),a=new J(0,1,0);return new tr({name:"SphericalGaussianBlur",defines:{n:_s,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${r}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:s},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:a}},vertexShader:Jl(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:vr,depthTest:!1,depthWrite:!1})}function Gm(){return new tr({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Jl(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:vr,depthTest:!1,depthWrite:!1})}function Wm(){return new tr({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Jl(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:vr,depthTest:!1,depthWrite:!1})}function Jl(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}class F0 extends Ji{constructor(e=1,n={}){super(e,e,n),this.isWebGLCubeRenderTarget=!0;const s={width:e,height:e,depth:1},a=[s,s,s,s,s,s];this.texture=new R0(a),this._setTextureOptions(n),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,n){this.texture.type=n.type,this.texture.colorSpace=n.colorSpace,this.texture.generateMipmaps=n.generateMipmaps,this.texture.minFilter=n.minFilter,this.texture.magFilter=n.magFilter;const s={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},a=new go(5,5,5),l=new tr({name:"CubemapFromEquirect",uniforms:po(s.uniforms),vertexShader:s.vertexShader,fragmentShader:s.fragmentShader,side:li,blending:vr});l.uniforms.tEquirect.value=n;const u=new be(a,l),f=n.minFilter;return n.minFilter===vs&&(n.minFilter=jn),new qv(1,10,this).update(e,u),n.minFilter=f,u.geometry.dispose(),u.material.dispose(),this}clear(e,n=!0,s=!0,a=!0){const l=e.getRenderTarget();for(let u=0;u<6;u++)e.setRenderTarget(this,u),e.clear(n,s,a);e.setRenderTarget(l)}}function Wy(r){let e=new WeakMap,n=new WeakMap,s=null;function a(g,M=!1){return g==null?null:M?u(g):l(g)}function l(g){if(g&&g.isTexture){const M=g.mapping;if(M===Nu||M===Uu)if(e.has(g)){const T=e.get(g).texture;return f(T,g.mapping)}else{const T=g.image;if(T&&T.height>0){const C=new F0(T.height);return C.fromEquirectangularTexture(r,g),e.set(g,C),g.addEventListener("dispose",m),f(C.texture,g.mapping)}else return null}}return g}function u(g){if(g&&g.isTexture){const M=g.mapping,T=M===Nu||M===Uu,C=M===Ss||M===fo;if(T||C){let _=n.get(g);const v=_!==void 0?_.texture.pmremVersion:0;if(g.isRenderTargetTexture&&g.pmremVersion!==v)return s===null&&(s=new Hm(r)),_=T?s.fromEquirectangular(g,_):s.fromCubemap(g,_),_.texture.pmremVersion=g.pmremVersion,n.set(g,_),_.texture;if(_!==void 0)return _.texture;{const b=g.image;return T&&b&&b.height>0||C&&b&&p(b)?(s===null&&(s=new Hm(r)),_=T?s.fromEquirectangular(g):s.fromCubemap(g),_.texture.pmremVersion=g.pmremVersion,n.set(g,_),g.addEventListener("dispose",x),_.texture):null}}}return g}function f(g,M){return M===Nu?g.mapping=Ss:M===Uu&&(g.mapping=fo),g}function p(g){let M=0;const T=6;for(let C=0;C<T;C++)g[C]!==void 0&&M++;return M===T}function m(g){const M=g.target;M.removeEventListener("dispose",m);const T=e.get(M);T!==void 0&&(e.delete(M),T.dispose())}function x(g){const M=g.target;M.removeEventListener("dispose",x);const T=n.get(M);T!==void 0&&(n.delete(M),T.dispose())}function S(){e=new WeakMap,n=new WeakMap,s!==null&&(s.dispose(),s=null)}return{get:a,dispose:S}}function Xy(r){const e={};function n(s){if(e[s]!==void 0)return e[s];const a=r.getExtension(s);return e[s]=a,a}return{has:function(s){return n(s)!==null},init:function(){n("EXT_color_buffer_float"),n("WEBGL_clip_cull_distance"),n("OES_texture_float_linear"),n("EXT_color_buffer_half_float"),n("WEBGL_multisampled_render_to_texture"),n("WEBGL_render_shared_exponent")},get:function(s){const a=n(s);return a===null&&rf("WebGLRenderer: "+s+" extension not supported."),a}}}function jy(r,e,n,s){const a={},l=new WeakMap;function u(S){const g=S.target;g.index!==null&&e.remove(g.index);for(const T in g.attributes)e.remove(g.attributes[T]);g.removeEventListener("dispose",u),delete a[g.id];const M=l.get(g);M&&(e.remove(M),l.delete(g)),s.releaseStatesOfGeometry(g),g.isInstancedBufferGeometry===!0&&delete g._maxInstanceCount,n.memory.geometries--}function f(S,g){return a[g.id]===!0||(g.addEventListener("dispose",u),a[g.id]=!0,n.memory.geometries++),g}function p(S){const g=S.attributes;for(const M in g)e.update(g[M],r.ARRAY_BUFFER)}function m(S){const g=[],M=S.index,T=S.attributes.position;let C=0;if(T===void 0)return;if(M!==null){const b=M.array;C=M.version;for(let L=0,P=b.length;L<P;L+=3){const B=b[L+0],I=b[L+1],k=b[L+2];g.push(B,I,I,k,k,B)}}else{const b=T.array;C=T.version;for(let L=0,P=b.length/3-1;L<P;L+=3){const B=L+0,I=L+1,k=L+2;g.push(B,I,I,k,k,B)}}const _=new(T.count>=65535?b0:A0)(g,1);_.version=C;const v=l.get(S);v&&e.remove(v),l.set(S,_)}function x(S){const g=l.get(S);if(g){const M=S.index;M!==null&&g.version<M.version&&m(S)}else m(S);return l.get(S)}return{get:f,update:p,getWireframeAttribute:x}}function Yy(r,e,n){let s;function a(S){s=S}let l,u;function f(S){l=S.type,u=S.bytesPerElement}function p(S,g){r.drawElements(s,g,l,S*u),n.update(g,s,1)}function m(S,g,M){M!==0&&(r.drawElementsInstanced(s,g,l,S*u,M),n.update(g,s,M))}function x(S,g,M){if(M===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(s,g,0,l,S,0,M);let C=0;for(let _=0;_<M;_++)C+=g[_];n.update(C,s,1)}this.setMode=a,this.setIndex=f,this.render=p,this.renderInstances=m,this.renderMultiDraw=x}function qy(r){const e={geometries:0,textures:0},n={frame:0,calls:0,triangles:0,points:0,lines:0};function s(l,u,f){switch(n.calls++,u){case r.TRIANGLES:n.triangles+=f*(l/3);break;case r.LINES:n.lines+=f*(l/2);break;case r.LINE_STRIP:n.lines+=f*(l-1);break;case r.LINE_LOOP:n.lines+=f*l;break;case r.POINTS:n.points+=f*l;break;default:Xt("WebGLInfo: Unknown draw mode:",u);break}}function a(){n.calls=0,n.triangles=0,n.points=0,n.lines=0}return{memory:e,render:n,programs:null,autoReset:!0,reset:a,update:s}}function $y(r,e,n){const s=new WeakMap,a=new gn;function l(u,f,p){const m=u.morphTargetInfluences,x=f.morphAttributes.position||f.morphAttributes.normal||f.morphAttributes.color,S=x!==void 0?x.length:0;let g=s.get(f);if(g===void 0||g.count!==S){let j=function(){w.dispose(),s.delete(f),f.removeEventListener("dispose",j)};var M=j;g!==void 0&&g.texture.dispose();const T=f.morphAttributes.position!==void 0,C=f.morphAttributes.normal!==void 0,_=f.morphAttributes.color!==void 0,v=f.morphAttributes.position||[],b=f.morphAttributes.normal||[],L=f.morphAttributes.color||[];let P=0;T===!0&&(P=1),C===!0&&(P=2),_===!0&&(P=3);let B=f.attributes.position.count*P,I=1;B>e.maxTextureSize&&(I=Math.ceil(B/e.maxTextureSize),B=e.maxTextureSize);const k=new Float32Array(B*I*4*S),w=new w0(k,B,I,S);w.type=qi,w.needsUpdate=!0;const N=P*4;for(let O=0;O<S;O++){const Y=v[O],oe=b[O],he=L[O],W=B*I*4*O;for(let te=0;te<Y.count;te++){const $=te*N;T===!0&&(a.fromBufferAttribute(Y,te),k[W+$+0]=a.x,k[W+$+1]=a.y,k[W+$+2]=a.z,k[W+$+3]=0),C===!0&&(a.fromBufferAttribute(oe,te),k[W+$+4]=a.x,k[W+$+5]=a.y,k[W+$+6]=a.z,k[W+$+7]=0),_===!0&&(a.fromBufferAttribute(he,te),k[W+$+8]=a.x,k[W+$+9]=a.y,k[W+$+10]=a.z,k[W+$+11]=he.itemSize===4?a.w:1)}}g={count:S,texture:w,size:new Vt(B,I)},s.set(f,g),f.addEventListener("dispose",j)}if(u.isInstancedMesh===!0&&u.morphTexture!==null)p.getUniforms().setValue(r,"morphTexture",u.morphTexture,n);else{let T=0;for(let _=0;_<m.length;_++)T+=m[_];const C=f.morphTargetsRelative?1:1-T;p.getUniforms().setValue(r,"morphTargetBaseInfluence",C),p.getUniforms().setValue(r,"morphTargetInfluences",m)}p.getUniforms().setValue(r,"morphTargetsTexture",g.texture,n),p.getUniforms().setValue(r,"morphTargetsTextureSize",g.size)}return{update:l}}function Ky(r,e,n,s,a){let l=new WeakMap;function u(m){const x=a.render.frame,S=m.geometry,g=e.get(m,S);if(l.get(g)!==x&&(e.update(g),l.set(g,x)),m.isInstancedMesh&&(m.hasEventListener("dispose",p)===!1&&m.addEventListener("dispose",p),l.get(m)!==x&&(n.update(m.instanceMatrix,r.ARRAY_BUFFER),m.instanceColor!==null&&n.update(m.instanceColor,r.ARRAY_BUFFER),l.set(m,x))),m.isSkinnedMesh){const M=m.skeleton;l.get(M)!==x&&(M.update(),l.set(M,x))}return g}function f(){l=new WeakMap}function p(m){const x=m.target;x.removeEventListener("dispose",p),s.releaseStatesOfObject(x),n.remove(x.instanceMatrix),x.instanceColor!==null&&n.remove(x.instanceColor)}return{update:u,dispose:f}}const Zy={[c0]:"LINEAR_TONE_MAPPING",[u0]:"REINHARD_TONE_MAPPING",[d0]:"CINEON_TONE_MAPPING",[df]:"ACES_FILMIC_TONE_MAPPING",[h0]:"AGX_TONE_MAPPING",[p0]:"NEUTRAL_TONE_MAPPING",[f0]:"CUSTOM_TONE_MAPPING"};function Jy(r,e,n,s,a){const l=new Ji(e,n,{type:r,depthBuffer:s,stencilBuffer:a,depthTexture:s?new ho(e,n):void 0}),u=new Ji(e,n,{type:Sr,depthBuffer:!1,stencilBuffer:!1}),f=new _i;f.setAttribute("position",new xn([-1,3,0,-1,-1,0,3,-1,0],3)),f.setAttribute("uv",new xn([0,2,0,0,2,0],2));const p=new Hv({uniforms:{tDiffuse:{value:null}},vertexShader:`
			precision highp float;

			uniform mat4 modelViewMatrix;
			uniform mat4 projectionMatrix;

			attribute vec3 position;
			attribute vec2 uv;

			varying vec2 vUv;

			void main() {
				vUv = uv;
				gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
			}`,fragmentShader:`
			precision highp float;

			uniform sampler2D tDiffuse;

			varying vec2 vUv;

			#include <tonemapping_pars_fragment>
			#include <colorspace_pars_fragment>

			void main() {
				gl_FragColor = texture2D( tDiffuse, vUv );

				#ifdef LINEAR_TONE_MAPPING
					gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );
				#elif defined( REINHARD_TONE_MAPPING )
					gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );
				#elif defined( CINEON_TONE_MAPPING )
					gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );
				#elif defined( ACES_FILMIC_TONE_MAPPING )
					gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );
				#elif defined( AGX_TONE_MAPPING )
					gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );
				#elif defined( NEUTRAL_TONE_MAPPING )
					gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );
				#elif defined( CUSTOM_TONE_MAPPING )
					gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );
				#endif

				#ifdef SRGB_TRANSFER
					gl_FragColor = sRGBTransferOETF( gl_FragColor );
				#endif
			}`,depthTest:!1,depthWrite:!1}),m=new be(f,p),x=new Cf(-1,1,1,-1,0,1);let S=null,g=null,M=!1,T,C=null,_=[],v=!1;this.setSize=function(b,L){l.setSize(b,L),u.setSize(b,L);for(let P=0;P<_.length;P++){const B=_[P];B.setSize&&B.setSize(b,L)}},this.setEffects=function(b){_=b,v=_.length>0&&_[0].isRenderPass===!0;const L=l.width,P=l.height;for(let B=0;B<_.length;B++){const I=_[B];I.setSize&&I.setSize(L,P)}},this.begin=function(b,L){if(M||b.toneMapping===Zi&&_.length===0)return!1;if(C=L,L!==null){const P=L.width,B=L.height;(l.width!==P||l.height!==B)&&this.setSize(P,B)}return v===!1&&b.setRenderTarget(l),T=b.toneMapping,b.toneMapping=Zi,!0},this.hasRenderPass=function(){return v},this.end=function(b,L){b.toneMapping=T,M=!0;let P=l,B=u;for(let I=0;I<_.length;I++){const k=_[I];if(k.enabled!==!1&&(k.render(b,B,P,L),k.needsSwap!==!1)){const w=P;P=B,B=w}}if(S!==b.outputColorSpace||g!==b.toneMapping){S=b.outputColorSpace,g=b.toneMapping,p.defines={},Ht.getTransfer(S)===Jt&&(p.defines.SRGB_TRANSFER="");const I=Zy[g];I&&(p.defines[I]=""),p.needsUpdate=!0}p.uniforms.tDiffuse.value=P.texture,b.setRenderTarget(C),b.render(m,x),C=null,M=!1},this.isCompositing=function(){return M},this.dispose=function(){l.depthTexture&&l.depthTexture.dispose(),l.dispose(),u.dispose(),f.dispose(),p.dispose()}}const O0=new Yn,af=new ho(1,1),k0=new w0,B0=new _v,z0=new R0,Xm=[],jm=[],Ym=new Float32Array(16),qm=new Float32Array(9),$m=new Float32Array(4);function _o(r,e,n){const s=r[0];if(s<=0||s>0)return r;const a=e*n;let l=Xm[a];if(l===void 0&&(l=new Float32Array(a),Xm[a]=l),e!==0){s.toArray(l,0);for(let u=1,f=0;u!==e;++u)f+=n,r[u].toArray(l,f)}return l}function Rn(r,e){if(r.length!==e.length)return!1;for(let n=0,s=r.length;n<s;n++)if(r[n]!==e[n])return!1;return!0}function Pn(r,e){for(let n=0,s=e.length;n<s;n++)r[n]=e[n]}function Ql(r,e){let n=jm[e];n===void 0&&(n=new Int32Array(e),jm[e]=n);for(let s=0;s!==e;++s)n[s]=r.allocateTextureUnit();return n}function Qy(r,e){const n=this.cache;n[0]!==e&&(r.uniform1f(this.addr,e),n[0]=e)}function e1(r,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(r.uniform2f(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Rn(n,e))return;r.uniform2fv(this.addr,e),Pn(n,e)}}function t1(r,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(r.uniform3f(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else if(e.r!==void 0)(n[0]!==e.r||n[1]!==e.g||n[2]!==e.b)&&(r.uniform3f(this.addr,e.r,e.g,e.b),n[0]=e.r,n[1]=e.g,n[2]=e.b);else{if(Rn(n,e))return;r.uniform3fv(this.addr,e),Pn(n,e)}}function n1(r,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(r.uniform4f(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Rn(n,e))return;r.uniform4fv(this.addr,e),Pn(n,e)}}function i1(r,e){const n=this.cache,s=e.elements;if(s===void 0){if(Rn(n,e))return;r.uniformMatrix2fv(this.addr,!1,e),Pn(n,e)}else{if(Rn(n,s))return;$m.set(s),r.uniformMatrix2fv(this.addr,!1,$m),Pn(n,s)}}function r1(r,e){const n=this.cache,s=e.elements;if(s===void 0){if(Rn(n,e))return;r.uniformMatrix3fv(this.addr,!1,e),Pn(n,e)}else{if(Rn(n,s))return;qm.set(s),r.uniformMatrix3fv(this.addr,!1,qm),Pn(n,s)}}function s1(r,e){const n=this.cache,s=e.elements;if(s===void 0){if(Rn(n,e))return;r.uniformMatrix4fv(this.addr,!1,e),Pn(n,e)}else{if(Rn(n,s))return;Ym.set(s),r.uniformMatrix4fv(this.addr,!1,Ym),Pn(n,s)}}function o1(r,e){const n=this.cache;n[0]!==e&&(r.uniform1i(this.addr,e),n[0]=e)}function a1(r,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(r.uniform2i(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Rn(n,e))return;r.uniform2iv(this.addr,e),Pn(n,e)}}function l1(r,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(r.uniform3i(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(Rn(n,e))return;r.uniform3iv(this.addr,e),Pn(n,e)}}function c1(r,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(r.uniform4i(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Rn(n,e))return;r.uniform4iv(this.addr,e),Pn(n,e)}}function u1(r,e){const n=this.cache;n[0]!==e&&(r.uniform1ui(this.addr,e),n[0]=e)}function d1(r,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(r.uniform2ui(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Rn(n,e))return;r.uniform2uiv(this.addr,e),Pn(n,e)}}function f1(r,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(r.uniform3ui(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(Rn(n,e))return;r.uniform3uiv(this.addr,e),Pn(n,e)}}function h1(r,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(r.uniform4ui(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Rn(n,e))return;r.uniform4uiv(this.addr,e),Pn(n,e)}}function p1(r,e,n){const s=this.cache,a=n.allocateTextureUnit();s[0]!==a&&(r.uniform1i(this.addr,a),s[0]=a);let l;this.type===r.SAMPLER_2D_SHADOW?(af.compareFunction=n.isReversedDepthBuffer()?xf:vf,l=af):l=O0,n.setTexture2D(e||l,a)}function m1(r,e,n){const s=this.cache,a=n.allocateTextureUnit();s[0]!==a&&(r.uniform1i(this.addr,a),s[0]=a),n.setTexture3D(e||B0,a)}function g1(r,e,n){const s=this.cache,a=n.allocateTextureUnit();s[0]!==a&&(r.uniform1i(this.addr,a),s[0]=a),n.setTextureCube(e||z0,a)}function _1(r,e,n){const s=this.cache,a=n.allocateTextureUnit();s[0]!==a&&(r.uniform1i(this.addr,a),s[0]=a),n.setTexture2DArray(e||k0,a)}function v1(r){switch(r){case 5126:return Qy;case 35664:return e1;case 35665:return t1;case 35666:return n1;case 35674:return i1;case 35675:return r1;case 35676:return s1;case 5124:case 35670:return o1;case 35667:case 35671:return a1;case 35668:case 35672:return l1;case 35669:case 35673:return c1;case 5125:return u1;case 36294:return d1;case 36295:return f1;case 36296:return h1;case 35678:case 36198:case 36298:case 36306:case 35682:return p1;case 35679:case 36299:case 36307:return m1;case 35680:case 36300:case 36308:case 36293:return g1;case 36289:case 36303:case 36311:case 36292:return _1}}function x1(r,e){r.uniform1fv(this.addr,e)}function S1(r,e){const n=_o(e,this.size,2);r.uniform2fv(this.addr,n)}function y1(r,e){const n=_o(e,this.size,3);r.uniform3fv(this.addr,n)}function M1(r,e){const n=_o(e,this.size,4);r.uniform4fv(this.addr,n)}function E1(r,e){const n=_o(e,this.size,4);r.uniformMatrix2fv(this.addr,!1,n)}function w1(r,e){const n=_o(e,this.size,9);r.uniformMatrix3fv(this.addr,!1,n)}function T1(r,e){const n=_o(e,this.size,16);r.uniformMatrix4fv(this.addr,!1,n)}function A1(r,e){r.uniform1iv(this.addr,e)}function b1(r,e){r.uniform2iv(this.addr,e)}function C1(r,e){r.uniform3iv(this.addr,e)}function R1(r,e){r.uniform4iv(this.addr,e)}function P1(r,e){r.uniform1uiv(this.addr,e)}function L1(r,e){r.uniform2uiv(this.addr,e)}function D1(r,e){r.uniform3uiv(this.addr,e)}function I1(r,e){r.uniform4uiv(this.addr,e)}function N1(r,e,n){const s=this.cache,a=e.length,l=Ql(n,a);Rn(s,l)||(r.uniform1iv(this.addr,l),Pn(s,l));let u;this.type===r.SAMPLER_2D_SHADOW?u=af:u=O0;for(let f=0;f!==a;++f)n.setTexture2D(e[f]||u,l[f])}function U1(r,e,n){const s=this.cache,a=e.length,l=Ql(n,a);Rn(s,l)||(r.uniform1iv(this.addr,l),Pn(s,l));for(let u=0;u!==a;++u)n.setTexture3D(e[u]||B0,l[u])}function F1(r,e,n){const s=this.cache,a=e.length,l=Ql(n,a);Rn(s,l)||(r.uniform1iv(this.addr,l),Pn(s,l));for(let u=0;u!==a;++u)n.setTextureCube(e[u]||z0,l[u])}function O1(r,e,n){const s=this.cache,a=e.length,l=Ql(n,a);Rn(s,l)||(r.uniform1iv(this.addr,l),Pn(s,l));for(let u=0;u!==a;++u)n.setTexture2DArray(e[u]||k0,l[u])}function k1(r){switch(r){case 5126:return x1;case 35664:return S1;case 35665:return y1;case 35666:return M1;case 35674:return E1;case 35675:return w1;case 35676:return T1;case 5124:case 35670:return A1;case 35667:case 35671:return b1;case 35668:case 35672:return C1;case 35669:case 35673:return R1;case 5125:return P1;case 36294:return L1;case 36295:return D1;case 36296:return I1;case 35678:case 36198:case 36298:case 36306:case 35682:return N1;case 35679:case 36299:case 36307:return U1;case 35680:case 36300:case 36308:case 36293:return F1;case 36289:case 36303:case 36311:case 36292:return O1}}class B1{constructor(e,n,s){this.id=e,this.addr=s,this.cache=[],this.type=n.type,this.setValue=v1(n.type)}}class z1{constructor(e,n,s){this.id=e,this.addr=s,this.cache=[],this.type=n.type,this.size=n.size,this.setValue=k1(n.type)}}class H1{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,n,s){const a=this.seq;for(let l=0,u=a.length;l!==u;++l){const f=a[l];f.setValue(e,n[f.id],s)}}}const fd=/(\w+)(\])?(\[|\.)?/g;function Km(r,e){r.seq.push(e),r.map[e.id]=e}function V1(r,e,n){const s=r.name,a=s.length;for(fd.lastIndex=0;;){const l=fd.exec(s),u=fd.lastIndex;let f=l[1];const p=l[2]==="]",m=l[3];if(p&&(f=f|0),m===void 0||m==="["&&u+2===a){Km(n,m===void 0?new B1(f,r,e):new z1(f,r,e));break}else{let S=n.map[f];S===void 0&&(S=new H1(f),Km(n,S)),n=S}}}class Hl{constructor(e,n){this.seq=[],this.map={};const s=e.getProgramParameter(n,e.ACTIVE_UNIFORMS);for(let u=0;u<s;++u){const f=e.getActiveUniform(n,u),p=e.getUniformLocation(n,f.name);V1(f,p,this)}const a=[],l=[];for(const u of this.seq)u.type===e.SAMPLER_2D_SHADOW||u.type===e.SAMPLER_CUBE_SHADOW||u.type===e.SAMPLER_2D_ARRAY_SHADOW?a.push(u):l.push(u);a.length>0&&(this.seq=a.concat(l))}setValue(e,n,s,a){const l=this.map[n];l!==void 0&&l.setValue(e,s,a)}setOptional(e,n,s){const a=n[s];a!==void 0&&this.setValue(e,s,a)}static upload(e,n,s,a){for(let l=0,u=n.length;l!==u;++l){const f=n[l],p=s[f.id];p.needsUpdate!==!1&&f.setValue(e,p.value,a)}}static seqWithValue(e,n){const s=[];for(let a=0,l=e.length;a!==l;++a){const u=e[a];u.id in n&&s.push(u)}return s}}function Zm(r,e,n){const s=r.createShader(e);return r.shaderSource(s,n),r.compileShader(s),s}const G1=37297;let W1=0;function X1(r,e){const n=r.split(`
`),s=[],a=Math.max(e-6,0),l=Math.min(e+6,n.length);for(let u=a;u<l;u++){const f=u+1;s.push(`${f===e?">":" "} ${f}: ${n[u]}`)}return s.join(`
`)}const Jm=new Ct;function j1(r){Ht._getMatrix(Jm,Ht.workingColorSpace,r);const e=`mat3( ${Jm.elements.map(n=>n.toFixed(4))} )`;switch(Ht.getTransfer(r)){case Xl:return[e,"LinearTransferOETF"];case Jt:return[e,"sRGBTransferOETF"];default:return yt("WebGLProgram: Unsupported color space: ",r),[e,"LinearTransferOETF"]}}function Qm(r,e,n){const s=r.getShaderParameter(e,r.COMPILE_STATUS),l=(r.getShaderInfoLog(e)||"").trim();if(s&&l==="")return"";const u=/ERROR: 0:(\d+)/.exec(l);if(u){const f=parseInt(u[1]);return n.toUpperCase()+`

`+l+`

`+X1(r.getShaderSource(e),f)}else return l}function Y1(r,e){const n=j1(e);return[`vec4 ${r}( vec4 value ) {`,`	return ${n[1]}( vec4( value.rgb * ${n[0]}, value.a ) );`,"}"].join(`
`)}const q1={[c0]:"Linear",[u0]:"Reinhard",[d0]:"Cineon",[df]:"ACESFilmic",[h0]:"AgX",[p0]:"Neutral",[f0]:"Custom"};function $1(r,e){const n=q1[e];return n===void 0?(yt("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+r+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+r+"( vec3 color ) { return "+n+"ToneMapping( color ); }"}const Fl=new J;function K1(){Ht.getLuminanceCoefficients(Fl);const r=Fl.x.toFixed(4),e=Fl.y.toFixed(4),n=Fl.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${r}, ${e}, ${n} );`,"	return dot( weights, rgb );","}"].join(`
`)}function Z1(r){return[r.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",r.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(sa).join(`
`)}function J1(r){const e=[];for(const n in r){const s=r[n];s!==!1&&e.push("#define "+n+" "+s)}return e.join(`
`)}function Q1(r,e){const n={},s=r.getProgramParameter(e,r.ACTIVE_ATTRIBUTES);for(let a=0;a<s;a++){const l=r.getActiveAttrib(e,a),u=l.name;let f=1;l.type===r.FLOAT_MAT2&&(f=2),l.type===r.FLOAT_MAT3&&(f=3),l.type===r.FLOAT_MAT4&&(f=4),n[u]={type:l.type,location:r.getAttribLocation(e,u),locationSize:f}}return n}function sa(r){return r!==""}function e0(r,e){const n=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return r.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,n).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function t0(r,e){return r.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const eM=/^[ \t]*#include +<([\w\d./]+)>/gm;function lf(r){return r.replace(eM,nM)}const tM=new Map;function nM(r,e){let n=Pt[e];if(n===void 0){const s=tM.get(e);if(s!==void 0)n=Pt[s],yt('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,s);else throw new Error("Can not resolve #include <"+e+">")}return lf(n)}const iM=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function n0(r){return r.replace(iM,rM)}function rM(r,e,n,s){let a="";for(let l=parseInt(e);l<parseInt(n);l++)a+=s.replace(/\[\s*i\s*\]/g,"[ "+l+" ]").replace(/UNROLLED_LOOP_INDEX/g,l);return a}function i0(r){let e=`precision ${r.precision} float;
	precision ${r.precision} int;
	precision ${r.precision} sampler2D;
	precision ${r.precision} samplerCube;
	precision ${r.precision} sampler3D;
	precision ${r.precision} sampler2DArray;
	precision ${r.precision} sampler2DShadow;
	precision ${r.precision} samplerCubeShadow;
	precision ${r.precision} sampler2DArrayShadow;
	precision ${r.precision} isampler2D;
	precision ${r.precision} isampler3D;
	precision ${r.precision} isamplerCube;
	precision ${r.precision} isampler2DArray;
	precision ${r.precision} usampler2D;
	precision ${r.precision} usampler3D;
	precision ${r.precision} usamplerCube;
	precision ${r.precision} usampler2DArray;
	`;return r.precision==="highp"?e+=`
#define HIGH_PRECISION`:r.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:r.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}const sM={[oa]:"SHADOWMAP_TYPE_PCF",[ra]:"SHADOWMAP_TYPE_VSM"};function oM(r){return sM[r.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const aM={[Ss]:"ENVMAP_TYPE_CUBE",[fo]:"ENVMAP_TYPE_CUBE",[Zl]:"ENVMAP_TYPE_CUBE_UV"};function lM(r){return r.envMap===!1?"ENVMAP_TYPE_CUBE":aM[r.envMapMode]||"ENVMAP_TYPE_CUBE"}const cM={[fo]:"ENVMAP_MODE_REFRACTION"};function uM(r){return r.envMap===!1?"ENVMAP_MODE_REFLECTION":cM[r.envMapMode]||"ENVMAP_MODE_REFLECTION"}const dM={[l0]:"ENVMAP_BLENDING_MULTIPLY",[K_]:"ENVMAP_BLENDING_MIX",[Z_]:"ENVMAP_BLENDING_ADD"};function fM(r){return r.envMap===!1?"ENVMAP_BLENDING_NONE":dM[r.combine]||"ENVMAP_BLENDING_NONE"}function hM(r){const e=r.envMapCubeUVHeight;if(e===null)return null;const n=Math.log2(e)-2,s=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,n),112)),texelHeight:s,maxMip:n}}function pM(r,e,n,s){const a=r.getContext(),l=n.defines;let u=n.vertexShader,f=n.fragmentShader;const p=oM(n),m=lM(n),x=uM(n),S=fM(n),g=hM(n),M=Z1(n),T=J1(l),C=a.createProgram();let _,v,b=n.glslVersion?"#version "+n.glslVersion+`
`:"";n.isRawShaderMaterial?(_=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,T].filter(sa).join(`
`),_.length>0&&(_+=`
`),v=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,T].filter(sa).join(`
`),v.length>0&&(v+=`
`)):(_=[i0(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,T,n.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",n.batching?"#define USE_BATCHING":"",n.batchingColor?"#define USE_BATCHING_COLOR":"",n.instancing?"#define USE_INSTANCING":"",n.instancingColor?"#define USE_INSTANCING_COLOR":"",n.instancingMorph?"#define USE_INSTANCING_MORPH":"",n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.map?"#define USE_MAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+x:"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.displacementMap?"#define USE_DISPLACEMENTMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.mapUv?"#define MAP_UV "+n.mapUv:"",n.alphaMapUv?"#define ALPHAMAP_UV "+n.alphaMapUv:"",n.lightMapUv?"#define LIGHTMAP_UV "+n.lightMapUv:"",n.aoMapUv?"#define AOMAP_UV "+n.aoMapUv:"",n.emissiveMapUv?"#define EMISSIVEMAP_UV "+n.emissiveMapUv:"",n.bumpMapUv?"#define BUMPMAP_UV "+n.bumpMapUv:"",n.normalMapUv?"#define NORMALMAP_UV "+n.normalMapUv:"",n.displacementMapUv?"#define DISPLACEMENTMAP_UV "+n.displacementMapUv:"",n.metalnessMapUv?"#define METALNESSMAP_UV "+n.metalnessMapUv:"",n.roughnessMapUv?"#define ROUGHNESSMAP_UV "+n.roughnessMapUv:"",n.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+n.anisotropyMapUv:"",n.clearcoatMapUv?"#define CLEARCOATMAP_UV "+n.clearcoatMapUv:"",n.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+n.clearcoatNormalMapUv:"",n.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+n.clearcoatRoughnessMapUv:"",n.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+n.iridescenceMapUv:"",n.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+n.iridescenceThicknessMapUv:"",n.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+n.sheenColorMapUv:"",n.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+n.sheenRoughnessMapUv:"",n.specularMapUv?"#define SPECULARMAP_UV "+n.specularMapUv:"",n.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+n.specularColorMapUv:"",n.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+n.specularIntensityMapUv:"",n.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+n.transmissionMapUv:"",n.thicknessMapUv?"#define THICKNESSMAP_UV "+n.thicknessMapUv:"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexNormals?"#define HAS_NORMAL":"",n.vertexColors?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.flatShading?"#define FLAT_SHADED":"",n.skinning?"#define USE_SKINNING":"",n.morphTargets?"#define USE_MORPHTARGETS":"",n.morphNormals&&n.flatShading===!1?"#define USE_MORPHNORMALS":"",n.morphColors?"#define USE_MORPHCOLORS":"",n.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+n.morphTextureStride:"",n.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+n.morphTargetsCount:"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+p:"",n.sizeAttenuation?"#define USE_SIZEATTENUATION":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",n.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(sa).join(`
`),v=[i0(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,T,n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",n.map?"#define USE_MAP":"",n.matcap?"#define USE_MATCAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+m:"",n.envMap?"#define "+x:"",n.envMap?"#define "+S:"",g?"#define CUBEUV_TEXEL_WIDTH "+g.texelWidth:"",g?"#define CUBEUV_TEXEL_HEIGHT "+g.texelHeight:"",g?"#define CUBEUV_MAX_MIP "+g.maxMip+".0":"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoat?"#define USE_CLEARCOAT":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.dispersion?"#define USE_DISPERSION":"",n.iridescence?"#define USE_IRIDESCENCE":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaTest?"#define USE_ALPHATEST":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.sheen?"#define USE_SHEEN":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors||n.instancingColor?"#define USE_COLOR":"",n.vertexAlphas||n.batchingColor?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.gradientMap?"#define USE_GRADIENTMAP":"",n.flatShading?"#define FLAT_SHADED":"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+p:"",n.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",n.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",n.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",n.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",n.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",n.toneMapping!==Zi?"#define TONE_MAPPING":"",n.toneMapping!==Zi?Pt.tonemapping_pars_fragment:"",n.toneMapping!==Zi?$1("toneMapping",n.toneMapping):"",n.dithering?"#define DITHERING":"",n.opaque?"#define OPAQUE":"",Pt.colorspace_pars_fragment,Y1("linearToOutputTexel",n.outputColorSpace),K1(),n.useDepthPacking?"#define DEPTH_PACKING "+n.depthPacking:"",`
`].filter(sa).join(`
`)),u=lf(u),u=e0(u,n),u=t0(u,n),f=lf(f),f=e0(f,n),f=t0(f,n),u=n0(u),f=n0(f),n.isRawShaderMaterial!==!0&&(b=`#version 300 es
`,_=[M,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+_,v=["#define varying in",n.glslVersion===fm?"":"layout(location = 0) out highp vec4 pc_fragColor;",n.glslVersion===fm?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+v);const L=b+_+u,P=b+v+f,B=Zm(a,a.VERTEX_SHADER,L),I=Zm(a,a.FRAGMENT_SHADER,P);a.attachShader(C,B),a.attachShader(C,I),n.index0AttributeName!==void 0?a.bindAttribLocation(C,0,n.index0AttributeName):n.morphTargets===!0&&a.bindAttribLocation(C,0,"position"),a.linkProgram(C);function k(O){if(r.debug.checkShaderErrors){const Y=a.getProgramInfoLog(C)||"",oe=a.getShaderInfoLog(B)||"",he=a.getShaderInfoLog(I)||"",W=Y.trim(),te=oe.trim(),$=he.trim();let Z=!0,ce=!0;if(a.getProgramParameter(C,a.LINK_STATUS)===!1)if(Z=!1,typeof r.debug.onShaderError=="function")r.debug.onShaderError(a,C,B,I);else{const ue=Qm(a,B,"vertex"),F=Qm(a,I,"fragment");Xt("THREE.WebGLProgram: Shader Error "+a.getError()+" - VALIDATE_STATUS "+a.getProgramParameter(C,a.VALIDATE_STATUS)+`

Material Name: `+O.name+`
Material Type: `+O.type+`

Program Info Log: `+W+`
`+ue+`
`+F)}else W!==""?yt("WebGLProgram: Program Info Log:",W):(te===""||$==="")&&(ce=!1);ce&&(O.diagnostics={runnable:Z,programLog:W,vertexShader:{log:te,prefix:_},fragmentShader:{log:$,prefix:v}})}a.deleteShader(B),a.deleteShader(I),w=new Hl(a,C),N=Q1(a,C)}let w;this.getUniforms=function(){return w===void 0&&k(this),w};let N;this.getAttributes=function(){return N===void 0&&k(this),N};let j=n.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return j===!1&&(j=a.getProgramParameter(C,G1)),j},this.destroy=function(){s.releaseStatesOfProgram(this),a.deleteProgram(C),this.program=void 0},this.type=n.shaderType,this.name=n.shaderName,this.id=W1++,this.cacheKey=e,this.usedTimes=1,this.program=C,this.vertexShader=B,this.fragmentShader=I,this}let mM=0;class gM{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const n=e.vertexShader,s=e.fragmentShader,a=this._getShaderStage(n),l=this._getShaderStage(s),u=this._getShaderCacheForMaterial(e);return u.has(a)===!1&&(u.add(a),a.usedTimes++),u.has(l)===!1&&(u.add(l),l.usedTimes++),this}remove(e){const n=this.materialCache.get(e);for(const s of n)s.usedTimes--,s.usedTimes===0&&this.shaderCache.delete(s.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const n=this.materialCache;let s=n.get(e);return s===void 0&&(s=new Set,n.set(e,s)),s}_getShaderStage(e){const n=this.shaderCache;let s=n.get(e);return s===void 0&&(s=new _M(e),n.set(e,s)),s}}class _M{constructor(e){this.id=mM++,this.code=e,this.usedTimes=0}}function vM(r){return r===ys||r===Vl||r===Gl}function xM(r,e,n,s,a,l){const u=new yf,f=new gM,p=new Set,m=[],x=new Map,S=s.logarithmicDepthBuffer;let g=s.precision;const M={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function T(w){return p.add(w),w===0?"uv":`uv${w}`}function C(w,N,j,O,Y,oe){const he=O.fog,W=Y.geometry,te=w.isMeshStandardMaterial||w.isMeshLambertMaterial||w.isMeshPhongMaterial?O.environment:null,$=w.isMeshStandardMaterial||w.isMeshLambertMaterial&&!w.envMap||w.isMeshPhongMaterial&&!w.envMap,Z=e.get(w.envMap||te,$),ce=Z&&Z.mapping===Zl?Z.image.height:null,ue=M[w.type];w.precision!==null&&(g=s.getMaxPrecision(w.precision),g!==w.precision&&yt("WebGLProgram.getParameters:",w.precision,"not supported, using",g,"instead."));const F=W.morphAttributes.position||W.morphAttributes.normal||W.morphAttributes.color,ne=F!==void 0?F.length:0;let Ge=0;W.morphAttributes.position!==void 0&&(Ge=1),W.morphAttributes.normal!==void 0&&(Ge=2),W.morphAttributes.color!==void 0&&(Ge=3);let qe,Xe,Q,Ae;if(ue){const dt=Yi[ue];qe=dt.vertexShader,Xe=dt.fragmentShader}else qe=w.vertexShader,Xe=w.fragmentShader,f.update(w),Q=f.getVertexShaderID(w),Ae=f.getFragmentShaderID(w);const Se=r.getRenderTarget(),ze=r.state.buffers.depth.getReversed(),it=Y.isInstancedMesh===!0,at=Y.isBatchedMesh===!0,Nt=!!w.map,_t=!!w.matcap,Tt=!!Z,Ot=!!w.aoMap,gt=!!w.lightMap,Gt=!!w.bumpMap,Bt=!!w.normalMap,ln=!!w.displacementMap,G=!!w.emissiveMap,zt=!!w.metalnessMap,vt=!!w.roughnessMap,de=w.anisotropy>0,D=w.clearcoat>0,pt=w.dispersion>0,R=w.iridescence>0,y=w.sheen>0,K=w.transmission>0,xe=de&&!!w.anisotropyMap,Me=D&&!!w.clearcoatMap,Te=D&&!!w.clearcoatNormalMap,Ie=D&&!!w.clearcoatRoughnessMap,fe=R&&!!w.iridescenceMap,_e=R&&!!w.iridescenceThicknessMap,ke=y&&!!w.sheenColorMap,We=y&&!!w.sheenRoughnessMap,Pe=!!w.specularMap,Ue=!!w.specularColorMap,ut=!!w.specularIntensityMap,mt=K&&!!w.transmissionMap,wt=K&&!!w.thicknessMap,z=!!w.gradientMap,Le=!!w.alphaMap,ge=w.alphaTest>0,je=!!w.alphaHash,Fe=!!w.extensions;let we=Zi;w.toneMapped&&(Se===null||Se.isXRRenderTarget===!0)&&(we=r.toneMapping);const Ze={shaderID:ue,shaderType:w.type,shaderName:w.name,vertexShader:qe,fragmentShader:Xe,defines:w.defines,customVertexShaderID:Q,customFragmentShaderID:Ae,isRawShaderMaterial:w.isRawShaderMaterial===!0,glslVersion:w.glslVersion,precision:g,batching:at,batchingColor:at&&Y._colorsTexture!==null,instancing:it,instancingColor:it&&Y.instanceColor!==null,instancingMorph:it&&Y.morphTexture!==null,outputColorSpace:Se===null?r.outputColorSpace:Se.isXRRenderTarget===!0?Se.texture.colorSpace:Ht.workingColorSpace,alphaToCoverage:!!w.alphaToCoverage,map:Nt,matcap:_t,envMap:Tt,envMapMode:Tt&&Z.mapping,envMapCubeUVHeight:ce,aoMap:Ot,lightMap:gt,bumpMap:Gt,normalMap:Bt,displacementMap:ln,emissiveMap:G,normalMapObjectSpace:Bt&&w.normalMapType===ev,normalMapTangentSpace:Bt&&w.normalMapType===nf,packedNormalMap:Bt&&w.normalMapType===nf&&vM(w.normalMap.format),metalnessMap:zt,roughnessMap:vt,anisotropy:de,anisotropyMap:xe,clearcoat:D,clearcoatMap:Me,clearcoatNormalMap:Te,clearcoatRoughnessMap:Ie,dispersion:pt,iridescence:R,iridescenceMap:fe,iridescenceThicknessMap:_e,sheen:y,sheenColorMap:ke,sheenRoughnessMap:We,specularMap:Pe,specularColorMap:Ue,specularIntensityMap:ut,transmission:K,transmissionMap:mt,thicknessMap:wt,gradientMap:z,opaque:w.transparent===!1&&w.blending===lo&&w.alphaToCoverage===!1,alphaMap:Le,alphaTest:ge,alphaHash:je,combine:w.combine,mapUv:Nt&&T(w.map.channel),aoMapUv:Ot&&T(w.aoMap.channel),lightMapUv:gt&&T(w.lightMap.channel),bumpMapUv:Gt&&T(w.bumpMap.channel),normalMapUv:Bt&&T(w.normalMap.channel),displacementMapUv:ln&&T(w.displacementMap.channel),emissiveMapUv:G&&T(w.emissiveMap.channel),metalnessMapUv:zt&&T(w.metalnessMap.channel),roughnessMapUv:vt&&T(w.roughnessMap.channel),anisotropyMapUv:xe&&T(w.anisotropyMap.channel),clearcoatMapUv:Me&&T(w.clearcoatMap.channel),clearcoatNormalMapUv:Te&&T(w.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Ie&&T(w.clearcoatRoughnessMap.channel),iridescenceMapUv:fe&&T(w.iridescenceMap.channel),iridescenceThicknessMapUv:_e&&T(w.iridescenceThicknessMap.channel),sheenColorMapUv:ke&&T(w.sheenColorMap.channel),sheenRoughnessMapUv:We&&T(w.sheenRoughnessMap.channel),specularMapUv:Pe&&T(w.specularMap.channel),specularColorMapUv:Ue&&T(w.specularColorMap.channel),specularIntensityMapUv:ut&&T(w.specularIntensityMap.channel),transmissionMapUv:mt&&T(w.transmissionMap.channel),thicknessMapUv:wt&&T(w.thicknessMap.channel),alphaMapUv:Le&&T(w.alphaMap.channel),vertexTangents:!!W.attributes.tangent&&(Bt||de),vertexNormals:!!W.attributes.normal,vertexColors:w.vertexColors,vertexAlphas:w.vertexColors===!0&&!!W.attributes.color&&W.attributes.color.itemSize===4,pointsUvs:Y.isPoints===!0&&!!W.attributes.uv&&(Nt||Le),fog:!!he,useFog:w.fog===!0,fogExp2:!!he&&he.isFogExp2,flatShading:w.wireframe===!1&&(w.flatShading===!0||W.attributes.normal===void 0&&Bt===!1&&(w.isMeshLambertMaterial||w.isMeshPhongMaterial||w.isMeshStandardMaterial||w.isMeshPhysicalMaterial)),sizeAttenuation:w.sizeAttenuation===!0,logarithmicDepthBuffer:S,reversedDepthBuffer:ze,skinning:Y.isSkinnedMesh===!0,morphTargets:W.morphAttributes.position!==void 0,morphNormals:W.morphAttributes.normal!==void 0,morphColors:W.morphAttributes.color!==void 0,morphTargetsCount:ne,morphTextureStride:Ge,numDirLights:N.directional.length,numPointLights:N.point.length,numSpotLights:N.spot.length,numSpotLightMaps:N.spotLightMap.length,numRectAreaLights:N.rectArea.length,numHemiLights:N.hemi.length,numDirLightShadows:N.directionalShadowMap.length,numPointLightShadows:N.pointShadowMap.length,numSpotLightShadows:N.spotShadowMap.length,numSpotLightShadowsWithMaps:N.numSpotLightShadowsWithMaps,numLightProbes:N.numLightProbes,numLightProbeGrids:oe.length,numClippingPlanes:l.numPlanes,numClipIntersection:l.numIntersection,dithering:w.dithering,shadowMapEnabled:r.shadowMap.enabled&&j.length>0,shadowMapType:r.shadowMap.type,toneMapping:we,decodeVideoTexture:Nt&&w.map.isVideoTexture===!0&&Ht.getTransfer(w.map.colorSpace)===Jt,decodeVideoTextureEmissive:G&&w.emissiveMap.isVideoTexture===!0&&Ht.getTransfer(w.emissiveMap.colorSpace)===Jt,premultipliedAlpha:w.premultipliedAlpha,doubleSided:w.side===Ti,flipSided:w.side===li,useDepthPacking:w.depthPacking>=0,depthPacking:w.depthPacking||0,index0AttributeName:w.index0AttributeName,extensionClipCullDistance:Fe&&w.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Fe&&w.extensions.multiDraw===!0||at)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:w.customProgramCacheKey()};return Ze.vertexUv1s=p.has(1),Ze.vertexUv2s=p.has(2),Ze.vertexUv3s=p.has(3),p.clear(),Ze}function _(w){const N=[];if(w.shaderID?N.push(w.shaderID):(N.push(w.customVertexShaderID),N.push(w.customFragmentShaderID)),w.defines!==void 0)for(const j in w.defines)N.push(j),N.push(w.defines[j]);return w.isRawShaderMaterial===!1&&(v(N,w),b(N,w),N.push(r.outputColorSpace)),N.push(w.customProgramCacheKey),N.join()}function v(w,N){w.push(N.precision),w.push(N.outputColorSpace),w.push(N.envMapMode),w.push(N.envMapCubeUVHeight),w.push(N.mapUv),w.push(N.alphaMapUv),w.push(N.lightMapUv),w.push(N.aoMapUv),w.push(N.bumpMapUv),w.push(N.normalMapUv),w.push(N.displacementMapUv),w.push(N.emissiveMapUv),w.push(N.metalnessMapUv),w.push(N.roughnessMapUv),w.push(N.anisotropyMapUv),w.push(N.clearcoatMapUv),w.push(N.clearcoatNormalMapUv),w.push(N.clearcoatRoughnessMapUv),w.push(N.iridescenceMapUv),w.push(N.iridescenceThicknessMapUv),w.push(N.sheenColorMapUv),w.push(N.sheenRoughnessMapUv),w.push(N.specularMapUv),w.push(N.specularColorMapUv),w.push(N.specularIntensityMapUv),w.push(N.transmissionMapUv),w.push(N.thicknessMapUv),w.push(N.combine),w.push(N.fogExp2),w.push(N.sizeAttenuation),w.push(N.morphTargetsCount),w.push(N.morphAttributeCount),w.push(N.numDirLights),w.push(N.numPointLights),w.push(N.numSpotLights),w.push(N.numSpotLightMaps),w.push(N.numHemiLights),w.push(N.numRectAreaLights),w.push(N.numDirLightShadows),w.push(N.numPointLightShadows),w.push(N.numSpotLightShadows),w.push(N.numSpotLightShadowsWithMaps),w.push(N.numLightProbes),w.push(N.shadowMapType),w.push(N.toneMapping),w.push(N.numClippingPlanes),w.push(N.numClipIntersection),w.push(N.depthPacking)}function b(w,N){u.disableAll(),N.instancing&&u.enable(0),N.instancingColor&&u.enable(1),N.instancingMorph&&u.enable(2),N.matcap&&u.enable(3),N.envMap&&u.enable(4),N.normalMapObjectSpace&&u.enable(5),N.normalMapTangentSpace&&u.enable(6),N.clearcoat&&u.enable(7),N.iridescence&&u.enable(8),N.alphaTest&&u.enable(9),N.vertexColors&&u.enable(10),N.vertexAlphas&&u.enable(11),N.vertexUv1s&&u.enable(12),N.vertexUv2s&&u.enable(13),N.vertexUv3s&&u.enable(14),N.vertexTangents&&u.enable(15),N.anisotropy&&u.enable(16),N.alphaHash&&u.enable(17),N.batching&&u.enable(18),N.dispersion&&u.enable(19),N.batchingColor&&u.enable(20),N.gradientMap&&u.enable(21),N.packedNormalMap&&u.enable(22),N.vertexNormals&&u.enable(23),w.push(u.mask),u.disableAll(),N.fog&&u.enable(0),N.useFog&&u.enable(1),N.flatShading&&u.enable(2),N.logarithmicDepthBuffer&&u.enable(3),N.reversedDepthBuffer&&u.enable(4),N.skinning&&u.enable(5),N.morphTargets&&u.enable(6),N.morphNormals&&u.enable(7),N.morphColors&&u.enable(8),N.premultipliedAlpha&&u.enable(9),N.shadowMapEnabled&&u.enable(10),N.doubleSided&&u.enable(11),N.flipSided&&u.enable(12),N.useDepthPacking&&u.enable(13),N.dithering&&u.enable(14),N.transmission&&u.enable(15),N.sheen&&u.enable(16),N.opaque&&u.enable(17),N.pointsUvs&&u.enable(18),N.decodeVideoTexture&&u.enable(19),N.decodeVideoTextureEmissive&&u.enable(20),N.alphaToCoverage&&u.enable(21),N.numLightProbeGrids>0&&u.enable(22),w.push(u.mask)}function L(w){const N=M[w.type];let j;if(N){const O=Yi[N];j=kv.clone(O.uniforms)}else j=w.uniforms;return j}function P(w,N){let j=x.get(N);return j!==void 0?++j.usedTimes:(j=new pM(r,N,w,a),m.push(j),x.set(N,j)),j}function B(w){if(--w.usedTimes===0){const N=m.indexOf(w);m[N]=m[m.length-1],m.pop(),x.delete(w.cacheKey),w.destroy()}}function I(w){f.remove(w)}function k(){f.dispose()}return{getParameters:C,getProgramCacheKey:_,getUniforms:L,acquireProgram:P,releaseProgram:B,releaseShaderCache:I,programs:m,dispose:k}}function SM(){let r=new WeakMap;function e(u){return r.has(u)}function n(u){let f=r.get(u);return f===void 0&&(f={},r.set(u,f)),f}function s(u){r.delete(u)}function a(u,f,p){r.get(u)[f]=p}function l(){r=new WeakMap}return{has:e,get:n,remove:s,update:a,dispose:l}}function yM(r,e){return r.groupOrder!==e.groupOrder?r.groupOrder-e.groupOrder:r.renderOrder!==e.renderOrder?r.renderOrder-e.renderOrder:r.material.id!==e.material.id?r.material.id-e.material.id:r.materialVariant!==e.materialVariant?r.materialVariant-e.materialVariant:r.z!==e.z?r.z-e.z:r.id-e.id}function r0(r,e){return r.groupOrder!==e.groupOrder?r.groupOrder-e.groupOrder:r.renderOrder!==e.renderOrder?r.renderOrder-e.renderOrder:r.z!==e.z?e.z-r.z:r.id-e.id}function s0(){const r=[];let e=0;const n=[],s=[],a=[];function l(){e=0,n.length=0,s.length=0,a.length=0}function u(g){let M=0;return g.isInstancedMesh&&(M+=2),g.isSkinnedMesh&&(M+=1),M}function f(g,M,T,C,_,v){let b=r[e];return b===void 0?(b={id:g.id,object:g,geometry:M,material:T,materialVariant:u(g),groupOrder:C,renderOrder:g.renderOrder,z:_,group:v},r[e]=b):(b.id=g.id,b.object=g,b.geometry=M,b.material=T,b.materialVariant=u(g),b.groupOrder=C,b.renderOrder=g.renderOrder,b.z=_,b.group=v),e++,b}function p(g,M,T,C,_,v){const b=f(g,M,T,C,_,v);T.transmission>0?s.push(b):T.transparent===!0?a.push(b):n.push(b)}function m(g,M,T,C,_,v){const b=f(g,M,T,C,_,v);T.transmission>0?s.unshift(b):T.transparent===!0?a.unshift(b):n.unshift(b)}function x(g,M){n.length>1&&n.sort(g||yM),s.length>1&&s.sort(M||r0),a.length>1&&a.sort(M||r0)}function S(){for(let g=e,M=r.length;g<M;g++){const T=r[g];if(T.id===null)break;T.id=null,T.object=null,T.geometry=null,T.material=null,T.group=null}}return{opaque:n,transmissive:s,transparent:a,init:l,push:p,unshift:m,finish:S,sort:x}}function MM(){let r=new WeakMap;function e(s,a){const l=r.get(s);let u;return l===void 0?(u=new s0,r.set(s,[u])):a>=l.length?(u=new s0,l.push(u)):u=l[a],u}function n(){r=new WeakMap}return{get:e,dispose:n}}function EM(){const r={};return{get:function(e){if(r[e.id]!==void 0)return r[e.id];let n;switch(e.type){case"DirectionalLight":n={direction:new J,color:new Rt};break;case"SpotLight":n={position:new J,direction:new J,color:new Rt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":n={position:new J,color:new Rt,distance:0,decay:0};break;case"HemisphereLight":n={direction:new J,skyColor:new Rt,groundColor:new Rt};break;case"RectAreaLight":n={color:new Rt,position:new J,halfWidth:new J,halfHeight:new J};break}return r[e.id]=n,n}}}function wM(){const r={};return{get:function(e){if(r[e.id]!==void 0)return r[e.id];let n;switch(e.type){case"DirectionalLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Vt};break;case"SpotLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Vt};break;case"PointLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Vt,shadowCameraNear:1,shadowCameraFar:1e3};break}return r[e.id]=n,n}}}let TM=0;function AM(r,e){return(e.castShadow?2:0)-(r.castShadow?2:0)+(e.map?1:0)-(r.map?1:0)}function bM(r){const e=new EM,n=wM(),s={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let m=0;m<9;m++)s.probe.push(new J);const a=new J,l=new _n,u=new _n;function f(m){let x=0,S=0,g=0;for(let N=0;N<9;N++)s.probe[N].set(0,0,0);let M=0,T=0,C=0,_=0,v=0,b=0,L=0,P=0,B=0,I=0,k=0;m.sort(AM);for(let N=0,j=m.length;N<j;N++){const O=m[N],Y=O.color,oe=O.intensity,he=O.distance;let W=null;if(O.shadow&&O.shadow.map&&(O.shadow.map.texture.format===ys?W=O.shadow.map.texture:W=O.shadow.map.depthTexture||O.shadow.map.texture),O.isAmbientLight)x+=Y.r*oe,S+=Y.g*oe,g+=Y.b*oe;else if(O.isLightProbe){for(let te=0;te<9;te++)s.probe[te].addScaledVector(O.sh.coefficients[te],oe);k++}else if(O.isDirectionalLight){const te=e.get(O);if(te.color.copy(O.color).multiplyScalar(O.intensity),O.castShadow){const $=O.shadow,Z=n.get(O);Z.shadowIntensity=$.intensity,Z.shadowBias=$.bias,Z.shadowNormalBias=$.normalBias,Z.shadowRadius=$.radius,Z.shadowMapSize=$.mapSize,s.directionalShadow[M]=Z,s.directionalShadowMap[M]=W,s.directionalShadowMatrix[M]=O.shadow.matrix,b++}s.directional[M]=te,M++}else if(O.isSpotLight){const te=e.get(O);te.position.setFromMatrixPosition(O.matrixWorld),te.color.copy(Y).multiplyScalar(oe),te.distance=he,te.coneCos=Math.cos(O.angle),te.penumbraCos=Math.cos(O.angle*(1-O.penumbra)),te.decay=O.decay,s.spot[C]=te;const $=O.shadow;if(O.map&&(s.spotLightMap[B]=O.map,B++,$.updateMatrices(O),O.castShadow&&I++),s.spotLightMatrix[C]=$.matrix,O.castShadow){const Z=n.get(O);Z.shadowIntensity=$.intensity,Z.shadowBias=$.bias,Z.shadowNormalBias=$.normalBias,Z.shadowRadius=$.radius,Z.shadowMapSize=$.mapSize,s.spotShadow[C]=Z,s.spotShadowMap[C]=W,P++}C++}else if(O.isRectAreaLight){const te=e.get(O);te.color.copy(Y).multiplyScalar(oe),te.halfWidth.set(O.width*.5,0,0),te.halfHeight.set(0,O.height*.5,0),s.rectArea[_]=te,_++}else if(O.isPointLight){const te=e.get(O);if(te.color.copy(O.color).multiplyScalar(O.intensity),te.distance=O.distance,te.decay=O.decay,O.castShadow){const $=O.shadow,Z=n.get(O);Z.shadowIntensity=$.intensity,Z.shadowBias=$.bias,Z.shadowNormalBias=$.normalBias,Z.shadowRadius=$.radius,Z.shadowMapSize=$.mapSize,Z.shadowCameraNear=$.camera.near,Z.shadowCameraFar=$.camera.far,s.pointShadow[T]=Z,s.pointShadowMap[T]=W,s.pointShadowMatrix[T]=O.shadow.matrix,L++}s.point[T]=te,T++}else if(O.isHemisphereLight){const te=e.get(O);te.skyColor.copy(O.color).multiplyScalar(oe),te.groundColor.copy(O.groundColor).multiplyScalar(oe),s.hemi[v]=te,v++}}_>0&&(r.has("OES_texture_float_linear")===!0?(s.rectAreaLTC1=Ye.LTC_FLOAT_1,s.rectAreaLTC2=Ye.LTC_FLOAT_2):(s.rectAreaLTC1=Ye.LTC_HALF_1,s.rectAreaLTC2=Ye.LTC_HALF_2)),s.ambient[0]=x,s.ambient[1]=S,s.ambient[2]=g;const w=s.hash;(w.directionalLength!==M||w.pointLength!==T||w.spotLength!==C||w.rectAreaLength!==_||w.hemiLength!==v||w.numDirectionalShadows!==b||w.numPointShadows!==L||w.numSpotShadows!==P||w.numSpotMaps!==B||w.numLightProbes!==k)&&(s.directional.length=M,s.spot.length=C,s.rectArea.length=_,s.point.length=T,s.hemi.length=v,s.directionalShadow.length=b,s.directionalShadowMap.length=b,s.pointShadow.length=L,s.pointShadowMap.length=L,s.spotShadow.length=P,s.spotShadowMap.length=P,s.directionalShadowMatrix.length=b,s.pointShadowMatrix.length=L,s.spotLightMatrix.length=P+B-I,s.spotLightMap.length=B,s.numSpotLightShadowsWithMaps=I,s.numLightProbes=k,w.directionalLength=M,w.pointLength=T,w.spotLength=C,w.rectAreaLength=_,w.hemiLength=v,w.numDirectionalShadows=b,w.numPointShadows=L,w.numSpotShadows=P,w.numSpotMaps=B,w.numLightProbes=k,s.version=TM++)}function p(m,x){let S=0,g=0,M=0,T=0,C=0;const _=x.matrixWorldInverse;for(let v=0,b=m.length;v<b;v++){const L=m[v];if(L.isDirectionalLight){const P=s.directional[S];P.direction.setFromMatrixPosition(L.matrixWorld),a.setFromMatrixPosition(L.target.matrixWorld),P.direction.sub(a),P.direction.transformDirection(_),S++}else if(L.isSpotLight){const P=s.spot[M];P.position.setFromMatrixPosition(L.matrixWorld),P.position.applyMatrix4(_),P.direction.setFromMatrixPosition(L.matrixWorld),a.setFromMatrixPosition(L.target.matrixWorld),P.direction.sub(a),P.direction.transformDirection(_),M++}else if(L.isRectAreaLight){const P=s.rectArea[T];P.position.setFromMatrixPosition(L.matrixWorld),P.position.applyMatrix4(_),u.identity(),l.copy(L.matrixWorld),l.premultiply(_),u.extractRotation(l),P.halfWidth.set(L.width*.5,0,0),P.halfHeight.set(0,L.height*.5,0),P.halfWidth.applyMatrix4(u),P.halfHeight.applyMatrix4(u),T++}else if(L.isPointLight){const P=s.point[g];P.position.setFromMatrixPosition(L.matrixWorld),P.position.applyMatrix4(_),g++}else if(L.isHemisphereLight){const P=s.hemi[C];P.direction.setFromMatrixPosition(L.matrixWorld),P.direction.transformDirection(_),C++}}}return{setup:f,setupView:p,state:s}}function o0(r){const e=new bM(r),n=[],s=[],a=[];function l(g){S.camera=g,n.length=0,s.length=0,a.length=0}function u(g){n.push(g)}function f(g){s.push(g)}function p(g){a.push(g)}function m(){e.setup(n)}function x(g){e.setupView(n,g)}const S={lightsArray:n,shadowsArray:s,lightProbeGridArray:a,camera:null,lights:e,transmissionRenderTarget:{},textureUnits:0};return{init:l,state:S,setupLights:m,setupLightsView:x,pushLight:u,pushShadow:f,pushLightProbeGrid:p}}function CM(r){let e=new WeakMap;function n(a,l=0){const u=e.get(a);let f;return u===void 0?(f=new o0(r),e.set(a,[f])):l>=u.length?(f=new o0(r),u.push(f)):f=u[l],f}function s(){e=new WeakMap}return{get:n,dispose:s}}const RM=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,PM=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ).rg;
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ).r;
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( max( 0.0, squared_mean - mean * mean ) );
	gl_FragColor = vec4( mean, std_dev, 0.0, 1.0 );
}`,LM=[new J(1,0,0),new J(-1,0,0),new J(0,1,0),new J(0,-1,0),new J(0,0,1),new J(0,0,-1)],DM=[new J(0,-1,0),new J(0,-1,0),new J(0,0,1),new J(0,0,-1),new J(0,-1,0),new J(0,-1,0)],a0=new _n,ia=new J,hd=new J;function IM(r,e,n){let s=new wf;const a=new Vt,l=new Vt,u=new gn,f=new Gv,p=new Wv,m={},x=n.maxTextureSize,S={[Kr]:li,[li]:Kr,[Ti]:Ti},g=new tr({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Vt},radius:{value:4}},vertexShader:RM,fragmentShader:PM}),M=g.clone();M.defines.HORIZONTAL_PASS=1;const T=new _i;T.setAttribute("position",new Qi(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const C=new be(T,g),_=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=oa;let v=this.type;this.render=function(I,k,w){if(_.enabled===!1||_.autoUpdate===!1&&_.needsUpdate===!1||I.length===0)return;this.type===L_&&(yt("WebGLShadowMap: PCFSoftShadowMap has been deprecated. Using PCFShadowMap instead."),this.type=oa);const N=r.getRenderTarget(),j=r.getActiveCubeFace(),O=r.getActiveMipmapLevel(),Y=r.state;Y.setBlending(vr),Y.buffers.depth.getReversed()===!0?Y.buffers.color.setClear(0,0,0,0):Y.buffers.color.setClear(1,1,1,1),Y.buffers.depth.setTest(!0),Y.setScissorTest(!1);const oe=v!==this.type;oe&&k.traverse(function(he){he.material&&(Array.isArray(he.material)?he.material.forEach(W=>W.needsUpdate=!0):he.material.needsUpdate=!0)});for(let he=0,W=I.length;he<W;he++){const te=I[he],$=te.shadow;if($===void 0){yt("WebGLShadowMap:",te,"has no shadow.");continue}if($.autoUpdate===!1&&$.needsUpdate===!1)continue;a.copy($.mapSize);const Z=$.getFrameExtents();a.multiply(Z),l.copy($.mapSize),(a.x>x||a.y>x)&&(a.x>x&&(l.x=Math.floor(x/Z.x),a.x=l.x*Z.x,$.mapSize.x=l.x),a.y>x&&(l.y=Math.floor(x/Z.y),a.y=l.y*Z.y,$.mapSize.y=l.y));const ce=r.state.buffers.depth.getReversed();if($.camera._reversedDepth=ce,$.map===null||oe===!0){if($.map!==null&&($.map.depthTexture!==null&&($.map.depthTexture.dispose(),$.map.depthTexture=null),$.map.dispose()),this.type===ra){if(te.isPointLight){yt("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}$.map=new Ji(a.x,a.y,{format:ys,type:Sr,minFilter:jn,magFilter:jn,generateMipmaps:!1}),$.map.texture.name=te.name+".shadowMap",$.map.depthTexture=new ho(a.x,a.y,qi),$.map.depthTexture.name=te.name+".shadowMapDepth",$.map.depthTexture.format=yr,$.map.depthTexture.compareFunction=null,$.map.depthTexture.minFilter=Bn,$.map.depthTexture.magFilter=Bn}else te.isPointLight?($.map=new F0(a.x),$.map.depthTexture=new Fv(a.x,er)):($.map=new Ji(a.x,a.y),$.map.depthTexture=new ho(a.x,a.y,er)),$.map.depthTexture.name=te.name+".shadowMap",$.map.depthTexture.format=yr,this.type===oa?($.map.depthTexture.compareFunction=ce?xf:vf,$.map.depthTexture.minFilter=jn,$.map.depthTexture.magFilter=jn):($.map.depthTexture.compareFunction=null,$.map.depthTexture.minFilter=Bn,$.map.depthTexture.magFilter=Bn);$.camera.updateProjectionMatrix()}const ue=$.map.isWebGLCubeRenderTarget?6:1;for(let F=0;F<ue;F++){if($.map.isWebGLCubeRenderTarget)r.setRenderTarget($.map,F),r.clear();else{F===0&&(r.setRenderTarget($.map),r.clear());const ne=$.getViewport(F);u.set(l.x*ne.x,l.y*ne.y,l.x*ne.z,l.y*ne.w),Y.viewport(u)}if(te.isPointLight){const ne=$.camera,Ge=$.matrix,qe=te.distance||ne.far;qe!==ne.far&&(ne.far=qe,ne.updateProjectionMatrix()),ia.setFromMatrixPosition(te.matrixWorld),ne.position.copy(ia),hd.copy(ne.position),hd.add(LM[F]),ne.up.copy(DM[F]),ne.lookAt(hd),ne.updateMatrixWorld(),Ge.makeTranslation(-ia.x,-ia.y,-ia.z),a0.multiplyMatrices(ne.projectionMatrix,ne.matrixWorldInverse),$._frustum.setFromProjectionMatrix(a0,ne.coordinateSystem,ne.reversedDepth)}else $.updateMatrices(te);s=$.getFrustum(),P(k,w,$.camera,te,this.type)}$.isPointLightShadow!==!0&&this.type===ra&&b($,w),$.needsUpdate=!1}v=this.type,_.needsUpdate=!1,r.setRenderTarget(N,j,O)};function b(I,k){const w=e.update(C);g.defines.VSM_SAMPLES!==I.blurSamples&&(g.defines.VSM_SAMPLES=I.blurSamples,M.defines.VSM_SAMPLES=I.blurSamples,g.needsUpdate=!0,M.needsUpdate=!0),I.mapPass===null&&(I.mapPass=new Ji(a.x,a.y,{format:ys,type:Sr})),g.uniforms.shadow_pass.value=I.map.depthTexture,g.uniforms.resolution.value=I.mapSize,g.uniforms.radius.value=I.radius,r.setRenderTarget(I.mapPass),r.clear(),r.renderBufferDirect(k,null,w,g,C,null),M.uniforms.shadow_pass.value=I.mapPass.texture,M.uniforms.resolution.value=I.mapSize,M.uniforms.radius.value=I.radius,r.setRenderTarget(I.map),r.clear(),r.renderBufferDirect(k,null,w,M,C,null)}function L(I,k,w,N){let j=null;const O=w.isPointLight===!0?I.customDistanceMaterial:I.customDepthMaterial;if(O!==void 0)j=O;else if(j=w.isPointLight===!0?p:f,r.localClippingEnabled&&k.clipShadows===!0&&Array.isArray(k.clippingPlanes)&&k.clippingPlanes.length!==0||k.displacementMap&&k.displacementScale!==0||k.alphaMap&&k.alphaTest>0||k.map&&k.alphaTest>0||k.alphaToCoverage===!0){const Y=j.uuid,oe=k.uuid;let he=m[Y];he===void 0&&(he={},m[Y]=he);let W=he[oe];W===void 0&&(W=j.clone(),he[oe]=W,k.addEventListener("dispose",B)),j=W}if(j.visible=k.visible,j.wireframe=k.wireframe,N===ra?j.side=k.shadowSide!==null?k.shadowSide:k.side:j.side=k.shadowSide!==null?k.shadowSide:S[k.side],j.alphaMap=k.alphaMap,j.alphaTest=k.alphaToCoverage===!0?.5:k.alphaTest,j.map=k.map,j.clipShadows=k.clipShadows,j.clippingPlanes=k.clippingPlanes,j.clipIntersection=k.clipIntersection,j.displacementMap=k.displacementMap,j.displacementScale=k.displacementScale,j.displacementBias=k.displacementBias,j.wireframeLinewidth=k.wireframeLinewidth,j.linewidth=k.linewidth,w.isPointLight===!0&&j.isMeshDistanceMaterial===!0){const Y=r.properties.get(j);Y.light=w}return j}function P(I,k,w,N,j){if(I.visible===!1)return;if(I.layers.test(k.layers)&&(I.isMesh||I.isLine||I.isPoints)&&(I.castShadow||I.receiveShadow&&j===ra)&&(!I.frustumCulled||s.intersectsObject(I))){I.modelViewMatrix.multiplyMatrices(w.matrixWorldInverse,I.matrixWorld);const oe=e.update(I),he=I.material;if(Array.isArray(he)){const W=oe.groups;for(let te=0,$=W.length;te<$;te++){const Z=W[te],ce=he[Z.materialIndex];if(ce&&ce.visible){const ue=L(I,ce,N,j);I.onBeforeShadow(r,I,k,w,oe,ue,Z),r.renderBufferDirect(w,null,oe,ue,I,Z),I.onAfterShadow(r,I,k,w,oe,ue,Z)}}}else if(he.visible){const W=L(I,he,N,j);I.onBeforeShadow(r,I,k,w,oe,W,null),r.renderBufferDirect(w,null,oe,W,I,null),I.onAfterShadow(r,I,k,w,oe,W,null)}}const Y=I.children;for(let oe=0,he=Y.length;oe<he;oe++)P(Y[oe],k,w,N,j)}function B(I){I.target.removeEventListener("dispose",B);for(const w in m){const N=m[w],j=I.target.uuid;j in N&&(N[j].dispose(),delete N[j])}}}function NM(r,e){function n(){let z=!1;const Le=new gn;let ge=null;const je=new gn(0,0,0,0);return{setMask:function(Fe){ge!==Fe&&!z&&(r.colorMask(Fe,Fe,Fe,Fe),ge=Fe)},setLocked:function(Fe){z=Fe},setClear:function(Fe,we,Ze,dt,Mt){Mt===!0&&(Fe*=dt,we*=dt,Ze*=dt),Le.set(Fe,we,Ze,dt),je.equals(Le)===!1&&(r.clearColor(Fe,we,Ze,dt),je.copy(Le))},reset:function(){z=!1,ge=null,je.set(-1,0,0,0)}}}function s(){let z=!1,Le=!1,ge=null,je=null,Fe=null;return{setReversed:function(we){if(Le!==we){const Ze=e.get("EXT_clip_control");we?Ze.clipControlEXT(Ze.LOWER_LEFT_EXT,Ze.ZERO_TO_ONE_EXT):Ze.clipControlEXT(Ze.LOWER_LEFT_EXT,Ze.NEGATIVE_ONE_TO_ONE_EXT),Le=we;const dt=Fe;Fe=null,this.setClear(dt)}},getReversed:function(){return Le},setTest:function(we){we?Se(r.DEPTH_TEST):ze(r.DEPTH_TEST)},setMask:function(we){ge!==we&&!z&&(r.depthMask(we),ge=we)},setFunc:function(we){if(Le&&(we=uv[we]),je!==we){switch(we){case _d:r.depthFunc(r.NEVER);break;case vd:r.depthFunc(r.ALWAYS);break;case xd:r.depthFunc(r.LESS);break;case uo:r.depthFunc(r.LEQUAL);break;case Sd:r.depthFunc(r.EQUAL);break;case yd:r.depthFunc(r.GEQUAL);break;case Md:r.depthFunc(r.GREATER);break;case Ed:r.depthFunc(r.NOTEQUAL);break;default:r.depthFunc(r.LEQUAL)}je=we}},setLocked:function(we){z=we},setClear:function(we){Fe!==we&&(Fe=we,Le&&(we=1-we),r.clearDepth(we))},reset:function(){z=!1,ge=null,je=null,Fe=null,Le=!1}}}function a(){let z=!1,Le=null,ge=null,je=null,Fe=null,we=null,Ze=null,dt=null,Mt=null;return{setTest:function(ye){z||(ye?Se(r.STENCIL_TEST):ze(r.STENCIL_TEST))},setMask:function(ye){Le!==ye&&!z&&(r.stencilMask(ye),Le=ye)},setFunc:function(ye,Ee,pe){(ge!==ye||je!==Ee||Fe!==pe)&&(r.stencilFunc(ye,Ee,pe),ge=ye,je=Ee,Fe=pe)},setOp:function(ye,Ee,pe){(we!==ye||Ze!==Ee||dt!==pe)&&(r.stencilOp(ye,Ee,pe),we=ye,Ze=Ee,dt=pe)},setLocked:function(ye){z=ye},setClear:function(ye){Mt!==ye&&(r.clearStencil(ye),Mt=ye)},reset:function(){z=!1,Le=null,ge=null,je=null,Fe=null,we=null,Ze=null,dt=null,Mt=null}}}const l=new n,u=new s,f=new a,p=new WeakMap,m=new WeakMap;let x={},S={},g={},M=new WeakMap,T=[],C=null,_=!1,v=null,b=null,L=null,P=null,B=null,I=null,k=null,w=new Rt(0,0,0),N=0,j=!1,O=null,Y=null,oe=null,he=null,W=null;const te=r.getParameter(r.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let $=!1,Z=0;const ce=r.getParameter(r.VERSION);ce.indexOf("WebGL")!==-1?(Z=parseFloat(/^WebGL (\d)/.exec(ce)[1]),$=Z>=1):ce.indexOf("OpenGL ES")!==-1&&(Z=parseFloat(/^OpenGL ES (\d)/.exec(ce)[1]),$=Z>=2);let ue=null,F={};const ne=r.getParameter(r.SCISSOR_BOX),Ge=r.getParameter(r.VIEWPORT),qe=new gn().fromArray(ne),Xe=new gn().fromArray(Ge);function Q(z,Le,ge,je){const Fe=new Uint8Array(4),we=r.createTexture();r.bindTexture(z,we),r.texParameteri(z,r.TEXTURE_MIN_FILTER,r.NEAREST),r.texParameteri(z,r.TEXTURE_MAG_FILTER,r.NEAREST);for(let Ze=0;Ze<ge;Ze++)z===r.TEXTURE_3D||z===r.TEXTURE_2D_ARRAY?r.texImage3D(Le,0,r.RGBA,1,1,je,0,r.RGBA,r.UNSIGNED_BYTE,Fe):r.texImage2D(Le+Ze,0,r.RGBA,1,1,0,r.RGBA,r.UNSIGNED_BYTE,Fe);return we}const Ae={};Ae[r.TEXTURE_2D]=Q(r.TEXTURE_2D,r.TEXTURE_2D,1),Ae[r.TEXTURE_CUBE_MAP]=Q(r.TEXTURE_CUBE_MAP,r.TEXTURE_CUBE_MAP_POSITIVE_X,6),Ae[r.TEXTURE_2D_ARRAY]=Q(r.TEXTURE_2D_ARRAY,r.TEXTURE_2D_ARRAY,1,1),Ae[r.TEXTURE_3D]=Q(r.TEXTURE_3D,r.TEXTURE_3D,1,1),l.setClear(0,0,0,1),u.setClear(1),f.setClear(0),Se(r.DEPTH_TEST),u.setFunc(uo),Gt(!1),Bt(om),Se(r.CULL_FACE),Ot(vr);function Se(z){x[z]!==!0&&(r.enable(z),x[z]=!0)}function ze(z){x[z]!==!1&&(r.disable(z),x[z]=!1)}function it(z,Le){return g[z]!==Le?(r.bindFramebuffer(z,Le),g[z]=Le,z===r.DRAW_FRAMEBUFFER&&(g[r.FRAMEBUFFER]=Le),z===r.FRAMEBUFFER&&(g[r.DRAW_FRAMEBUFFER]=Le),!0):!1}function at(z,Le){let ge=T,je=!1;if(z){ge=M.get(Le),ge===void 0&&(ge=[],M.set(Le,ge));const Fe=z.textures;if(ge.length!==Fe.length||ge[0]!==r.COLOR_ATTACHMENT0){for(let we=0,Ze=Fe.length;we<Ze;we++)ge[we]=r.COLOR_ATTACHMENT0+we;ge.length=Fe.length,je=!0}}else ge[0]!==r.BACK&&(ge[0]=r.BACK,je=!0);je&&r.drawBuffers(ge)}function Nt(z){return C!==z?(r.useProgram(z),C=z,!0):!1}const _t={[gs]:r.FUNC_ADD,[I_]:r.FUNC_SUBTRACT,[N_]:r.FUNC_REVERSE_SUBTRACT};_t[U_]=r.MIN,_t[F_]=r.MAX;const Tt={[O_]:r.ZERO,[k_]:r.ONE,[B_]:r.SRC_COLOR,[md]:r.SRC_ALPHA,[X_]:r.SRC_ALPHA_SATURATE,[G_]:r.DST_COLOR,[H_]:r.DST_ALPHA,[z_]:r.ONE_MINUS_SRC_COLOR,[gd]:r.ONE_MINUS_SRC_ALPHA,[W_]:r.ONE_MINUS_DST_COLOR,[V_]:r.ONE_MINUS_DST_ALPHA,[j_]:r.CONSTANT_COLOR,[Y_]:r.ONE_MINUS_CONSTANT_COLOR,[q_]:r.CONSTANT_ALPHA,[$_]:r.ONE_MINUS_CONSTANT_ALPHA};function Ot(z,Le,ge,je,Fe,we,Ze,dt,Mt,ye){if(z===vr){_===!0&&(ze(r.BLEND),_=!1);return}if(_===!1&&(Se(r.BLEND),_=!0),z!==D_){if(z!==v||ye!==j){if((b!==gs||B!==gs)&&(r.blendEquation(r.FUNC_ADD),b=gs,B=gs),ye)switch(z){case lo:r.blendFuncSeparate(r.ONE,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case am:r.blendFunc(r.ONE,r.ONE);break;case lm:r.blendFuncSeparate(r.ZERO,r.ONE_MINUS_SRC_COLOR,r.ZERO,r.ONE);break;case cm:r.blendFuncSeparate(r.DST_COLOR,r.ONE_MINUS_SRC_ALPHA,r.ZERO,r.ONE);break;default:Xt("WebGLState: Invalid blending: ",z);break}else switch(z){case lo:r.blendFuncSeparate(r.SRC_ALPHA,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case am:r.blendFuncSeparate(r.SRC_ALPHA,r.ONE,r.ONE,r.ONE);break;case lm:Xt("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case cm:Xt("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:Xt("WebGLState: Invalid blending: ",z);break}L=null,P=null,I=null,k=null,w.set(0,0,0),N=0,v=z,j=ye}return}Fe=Fe||Le,we=we||ge,Ze=Ze||je,(Le!==b||Fe!==B)&&(r.blendEquationSeparate(_t[Le],_t[Fe]),b=Le,B=Fe),(ge!==L||je!==P||we!==I||Ze!==k)&&(r.blendFuncSeparate(Tt[ge],Tt[je],Tt[we],Tt[Ze]),L=ge,P=je,I=we,k=Ze),(dt.equals(w)===!1||Mt!==N)&&(r.blendColor(dt.r,dt.g,dt.b,Mt),w.copy(dt),N=Mt),v=z,j=!1}function gt(z,Le){z.side===Ti?ze(r.CULL_FACE):Se(r.CULL_FACE);let ge=z.side===li;Le&&(ge=!ge),Gt(ge),z.blending===lo&&z.transparent===!1?Ot(vr):Ot(z.blending,z.blendEquation,z.blendSrc,z.blendDst,z.blendEquationAlpha,z.blendSrcAlpha,z.blendDstAlpha,z.blendColor,z.blendAlpha,z.premultipliedAlpha),u.setFunc(z.depthFunc),u.setTest(z.depthTest),u.setMask(z.depthWrite),l.setMask(z.colorWrite);const je=z.stencilWrite;f.setTest(je),je&&(f.setMask(z.stencilWriteMask),f.setFunc(z.stencilFunc,z.stencilRef,z.stencilFuncMask),f.setOp(z.stencilFail,z.stencilZFail,z.stencilZPass)),G(z.polygonOffset,z.polygonOffsetFactor,z.polygonOffsetUnits),z.alphaToCoverage===!0?Se(r.SAMPLE_ALPHA_TO_COVERAGE):ze(r.SAMPLE_ALPHA_TO_COVERAGE)}function Gt(z){O!==z&&(z?r.frontFace(r.CW):r.frontFace(r.CCW),O=z)}function Bt(z){z!==R_?(Se(r.CULL_FACE),z!==Y&&(z===om?r.cullFace(r.BACK):z===P_?r.cullFace(r.FRONT):r.cullFace(r.FRONT_AND_BACK))):ze(r.CULL_FACE),Y=z}function ln(z){z!==oe&&($&&r.lineWidth(z),oe=z)}function G(z,Le,ge){z?(Se(r.POLYGON_OFFSET_FILL),(he!==Le||W!==ge)&&(he=Le,W=ge,u.getReversed()&&(Le=-Le),r.polygonOffset(Le,ge))):ze(r.POLYGON_OFFSET_FILL)}function zt(z){z?Se(r.SCISSOR_TEST):ze(r.SCISSOR_TEST)}function vt(z){z===void 0&&(z=r.TEXTURE0+te-1),ue!==z&&(r.activeTexture(z),ue=z)}function de(z,Le,ge){ge===void 0&&(ue===null?ge=r.TEXTURE0+te-1:ge=ue);let je=F[ge];je===void 0&&(je={type:void 0,texture:void 0},F[ge]=je),(je.type!==z||je.texture!==Le)&&(ue!==ge&&(r.activeTexture(ge),ue=ge),r.bindTexture(z,Le||Ae[z]),je.type=z,je.texture=Le)}function D(){const z=F[ue];z!==void 0&&z.type!==void 0&&(r.bindTexture(z.type,null),z.type=void 0,z.texture=void 0)}function pt(){try{r.compressedTexImage2D(...arguments)}catch(z){Xt("WebGLState:",z)}}function R(){try{r.compressedTexImage3D(...arguments)}catch(z){Xt("WebGLState:",z)}}function y(){try{r.texSubImage2D(...arguments)}catch(z){Xt("WebGLState:",z)}}function K(){try{r.texSubImage3D(...arguments)}catch(z){Xt("WebGLState:",z)}}function xe(){try{r.compressedTexSubImage2D(...arguments)}catch(z){Xt("WebGLState:",z)}}function Me(){try{r.compressedTexSubImage3D(...arguments)}catch(z){Xt("WebGLState:",z)}}function Te(){try{r.texStorage2D(...arguments)}catch(z){Xt("WebGLState:",z)}}function Ie(){try{r.texStorage3D(...arguments)}catch(z){Xt("WebGLState:",z)}}function fe(){try{r.texImage2D(...arguments)}catch(z){Xt("WebGLState:",z)}}function _e(){try{r.texImage3D(...arguments)}catch(z){Xt("WebGLState:",z)}}function ke(z){return S[z]!==void 0?S[z]:r.getParameter(z)}function We(z,Le){S[z]!==Le&&(r.pixelStorei(z,Le),S[z]=Le)}function Pe(z){qe.equals(z)===!1&&(r.scissor(z.x,z.y,z.z,z.w),qe.copy(z))}function Ue(z){Xe.equals(z)===!1&&(r.viewport(z.x,z.y,z.z,z.w),Xe.copy(z))}function ut(z,Le){let ge=m.get(Le);ge===void 0&&(ge=new WeakMap,m.set(Le,ge));let je=ge.get(z);je===void 0&&(je=r.getUniformBlockIndex(Le,z.name),ge.set(z,je))}function mt(z,Le){const je=m.get(Le).get(z);p.get(Le)!==je&&(r.uniformBlockBinding(Le,je,z.__bindingPointIndex),p.set(Le,je))}function wt(){r.disable(r.BLEND),r.disable(r.CULL_FACE),r.disable(r.DEPTH_TEST),r.disable(r.POLYGON_OFFSET_FILL),r.disable(r.SCISSOR_TEST),r.disable(r.STENCIL_TEST),r.disable(r.SAMPLE_ALPHA_TO_COVERAGE),r.blendEquation(r.FUNC_ADD),r.blendFunc(r.ONE,r.ZERO),r.blendFuncSeparate(r.ONE,r.ZERO,r.ONE,r.ZERO),r.blendColor(0,0,0,0),r.colorMask(!0,!0,!0,!0),r.clearColor(0,0,0,0),r.depthMask(!0),r.depthFunc(r.LESS),u.setReversed(!1),r.clearDepth(1),r.stencilMask(4294967295),r.stencilFunc(r.ALWAYS,0,4294967295),r.stencilOp(r.KEEP,r.KEEP,r.KEEP),r.clearStencil(0),r.cullFace(r.BACK),r.frontFace(r.CCW),r.polygonOffset(0,0),r.activeTexture(r.TEXTURE0),r.bindFramebuffer(r.FRAMEBUFFER,null),r.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),r.bindFramebuffer(r.READ_FRAMEBUFFER,null),r.useProgram(null),r.lineWidth(1),r.scissor(0,0,r.canvas.width,r.canvas.height),r.viewport(0,0,r.canvas.width,r.canvas.height),r.pixelStorei(r.PACK_ALIGNMENT,4),r.pixelStorei(r.UNPACK_ALIGNMENT,4),r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,!1),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,r.BROWSER_DEFAULT_WEBGL),r.pixelStorei(r.PACK_ROW_LENGTH,0),r.pixelStorei(r.PACK_SKIP_PIXELS,0),r.pixelStorei(r.PACK_SKIP_ROWS,0),r.pixelStorei(r.UNPACK_ROW_LENGTH,0),r.pixelStorei(r.UNPACK_IMAGE_HEIGHT,0),r.pixelStorei(r.UNPACK_SKIP_PIXELS,0),r.pixelStorei(r.UNPACK_SKIP_ROWS,0),r.pixelStorei(r.UNPACK_SKIP_IMAGES,0),x={},S={},ue=null,F={},g={},M=new WeakMap,T=[],C=null,_=!1,v=null,b=null,L=null,P=null,B=null,I=null,k=null,w=new Rt(0,0,0),N=0,j=!1,O=null,Y=null,oe=null,he=null,W=null,qe.set(0,0,r.canvas.width,r.canvas.height),Xe.set(0,0,r.canvas.width,r.canvas.height),l.reset(),u.reset(),f.reset()}return{buffers:{color:l,depth:u,stencil:f},enable:Se,disable:ze,bindFramebuffer:it,drawBuffers:at,useProgram:Nt,setBlending:Ot,setMaterial:gt,setFlipSided:Gt,setCullFace:Bt,setLineWidth:ln,setPolygonOffset:G,setScissorTest:zt,activeTexture:vt,bindTexture:de,unbindTexture:D,compressedTexImage2D:pt,compressedTexImage3D:R,texImage2D:fe,texImage3D:_e,pixelStorei:We,getParameter:ke,updateUBOMapping:ut,uniformBlockBinding:mt,texStorage2D:Te,texStorage3D:Ie,texSubImage2D:y,texSubImage3D:K,compressedTexSubImage2D:xe,compressedTexSubImage3D:Me,scissor:Pe,viewport:Ue,reset:wt}}function UM(r,e,n,s,a,l,u){const f=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,p=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),m=new Vt,x=new WeakMap,S=new Set;let g;const M=new WeakMap;let T=!1;try{T=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function C(R,y){return T?new OffscreenCanvas(R,y):jl("canvas")}function _(R,y,K){let xe=1;const Me=pt(R);if((Me.width>K||Me.height>K)&&(xe=K/Math.max(Me.width,Me.height)),xe<1)if(typeof HTMLImageElement<"u"&&R instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&R instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&R instanceof ImageBitmap||typeof VideoFrame<"u"&&R instanceof VideoFrame){const Te=Math.floor(xe*Me.width),Ie=Math.floor(xe*Me.height);g===void 0&&(g=C(Te,Ie));const fe=y?C(Te,Ie):g;return fe.width=Te,fe.height=Ie,fe.getContext("2d").drawImage(R,0,0,Te,Ie),yt("WebGLRenderer: Texture has been resized from ("+Me.width+"x"+Me.height+") to ("+Te+"x"+Ie+")."),fe}else return"data"in R&&yt("WebGLRenderer: Image in DataTexture is too big ("+Me.width+"x"+Me.height+")."),R;return R}function v(R){return R.generateMipmaps}function b(R){r.generateMipmap(R)}function L(R){return R.isWebGLCubeRenderTarget?r.TEXTURE_CUBE_MAP:R.isWebGL3DRenderTarget?r.TEXTURE_3D:R.isWebGLArrayRenderTarget||R.isCompressedArrayTexture?r.TEXTURE_2D_ARRAY:r.TEXTURE_2D}function P(R,y,K,xe,Me,Te=!1){if(R!==null){if(r[R]!==void 0)return r[R];yt("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+R+"'")}let Ie;xe&&(Ie=e.get("EXT_texture_norm16"),Ie||yt("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let fe=y;if(y===r.RED&&(K===r.FLOAT&&(fe=r.R32F),K===r.HALF_FLOAT&&(fe=r.R16F),K===r.UNSIGNED_BYTE&&(fe=r.R8),K===r.UNSIGNED_SHORT&&Ie&&(fe=Ie.R16_EXT),K===r.SHORT&&Ie&&(fe=Ie.R16_SNORM_EXT)),y===r.RED_INTEGER&&(K===r.UNSIGNED_BYTE&&(fe=r.R8UI),K===r.UNSIGNED_SHORT&&(fe=r.R16UI),K===r.UNSIGNED_INT&&(fe=r.R32UI),K===r.BYTE&&(fe=r.R8I),K===r.SHORT&&(fe=r.R16I),K===r.INT&&(fe=r.R32I)),y===r.RG&&(K===r.FLOAT&&(fe=r.RG32F),K===r.HALF_FLOAT&&(fe=r.RG16F),K===r.UNSIGNED_BYTE&&(fe=r.RG8),K===r.UNSIGNED_SHORT&&Ie&&(fe=Ie.RG16_EXT),K===r.SHORT&&Ie&&(fe=Ie.RG16_SNORM_EXT)),y===r.RG_INTEGER&&(K===r.UNSIGNED_BYTE&&(fe=r.RG8UI),K===r.UNSIGNED_SHORT&&(fe=r.RG16UI),K===r.UNSIGNED_INT&&(fe=r.RG32UI),K===r.BYTE&&(fe=r.RG8I),K===r.SHORT&&(fe=r.RG16I),K===r.INT&&(fe=r.RG32I)),y===r.RGB_INTEGER&&(K===r.UNSIGNED_BYTE&&(fe=r.RGB8UI),K===r.UNSIGNED_SHORT&&(fe=r.RGB16UI),K===r.UNSIGNED_INT&&(fe=r.RGB32UI),K===r.BYTE&&(fe=r.RGB8I),K===r.SHORT&&(fe=r.RGB16I),K===r.INT&&(fe=r.RGB32I)),y===r.RGBA_INTEGER&&(K===r.UNSIGNED_BYTE&&(fe=r.RGBA8UI),K===r.UNSIGNED_SHORT&&(fe=r.RGBA16UI),K===r.UNSIGNED_INT&&(fe=r.RGBA32UI),K===r.BYTE&&(fe=r.RGBA8I),K===r.SHORT&&(fe=r.RGBA16I),K===r.INT&&(fe=r.RGBA32I)),y===r.RGB&&(K===r.UNSIGNED_SHORT&&Ie&&(fe=Ie.RGB16_EXT),K===r.SHORT&&Ie&&(fe=Ie.RGB16_SNORM_EXT),K===r.UNSIGNED_INT_5_9_9_9_REV&&(fe=r.RGB9_E5),K===r.UNSIGNED_INT_10F_11F_11F_REV&&(fe=r.R11F_G11F_B10F)),y===r.RGBA){const _e=Te?Xl:Ht.getTransfer(Me);K===r.FLOAT&&(fe=r.RGBA32F),K===r.HALF_FLOAT&&(fe=r.RGBA16F),K===r.UNSIGNED_BYTE&&(fe=_e===Jt?r.SRGB8_ALPHA8:r.RGBA8),K===r.UNSIGNED_SHORT&&Ie&&(fe=Ie.RGBA16_EXT),K===r.SHORT&&Ie&&(fe=Ie.RGBA16_SNORM_EXT),K===r.UNSIGNED_SHORT_4_4_4_4&&(fe=r.RGBA4),K===r.UNSIGNED_SHORT_5_5_5_1&&(fe=r.RGB5_A1)}return(fe===r.R16F||fe===r.R32F||fe===r.RG16F||fe===r.RG32F||fe===r.RGBA16F||fe===r.RGBA32F)&&e.get("EXT_color_buffer_float"),fe}function B(R,y){let K;return R?y===null||y===er||y===la?K=r.DEPTH24_STENCIL8:y===qi?K=r.DEPTH32F_STENCIL8:y===aa&&(K=r.DEPTH24_STENCIL8,yt("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):y===null||y===er||y===la?K=r.DEPTH_COMPONENT24:y===qi?K=r.DEPTH_COMPONENT32F:y===aa&&(K=r.DEPTH_COMPONENT16),K}function I(R,y){return v(R)===!0||R.isFramebufferTexture&&R.minFilter!==Bn&&R.minFilter!==jn?Math.log2(Math.max(y.width,y.height))+1:R.mipmaps!==void 0&&R.mipmaps.length>0?R.mipmaps.length:R.isCompressedTexture&&Array.isArray(R.image)?y.mipmaps.length:1}function k(R){const y=R.target;y.removeEventListener("dispose",k),N(y),y.isVideoTexture&&x.delete(y),y.isHTMLTexture&&S.delete(y)}function w(R){const y=R.target;y.removeEventListener("dispose",w),O(y)}function N(R){const y=s.get(R);if(y.__webglInit===void 0)return;const K=R.source,xe=M.get(K);if(xe){const Me=xe[y.__cacheKey];Me.usedTimes--,Me.usedTimes===0&&j(R),Object.keys(xe).length===0&&M.delete(K)}s.remove(R)}function j(R){const y=s.get(R);r.deleteTexture(y.__webglTexture);const K=R.source,xe=M.get(K);delete xe[y.__cacheKey],u.memory.textures--}function O(R){const y=s.get(R);if(R.depthTexture&&(R.depthTexture.dispose(),s.remove(R.depthTexture)),R.isWebGLCubeRenderTarget)for(let xe=0;xe<6;xe++){if(Array.isArray(y.__webglFramebuffer[xe]))for(let Me=0;Me<y.__webglFramebuffer[xe].length;Me++)r.deleteFramebuffer(y.__webglFramebuffer[xe][Me]);else r.deleteFramebuffer(y.__webglFramebuffer[xe]);y.__webglDepthbuffer&&r.deleteRenderbuffer(y.__webglDepthbuffer[xe])}else{if(Array.isArray(y.__webglFramebuffer))for(let xe=0;xe<y.__webglFramebuffer.length;xe++)r.deleteFramebuffer(y.__webglFramebuffer[xe]);else r.deleteFramebuffer(y.__webglFramebuffer);if(y.__webglDepthbuffer&&r.deleteRenderbuffer(y.__webglDepthbuffer),y.__webglMultisampledFramebuffer&&r.deleteFramebuffer(y.__webglMultisampledFramebuffer),y.__webglColorRenderbuffer)for(let xe=0;xe<y.__webglColorRenderbuffer.length;xe++)y.__webglColorRenderbuffer[xe]&&r.deleteRenderbuffer(y.__webglColorRenderbuffer[xe]);y.__webglDepthRenderbuffer&&r.deleteRenderbuffer(y.__webglDepthRenderbuffer)}const K=R.textures;for(let xe=0,Me=K.length;xe<Me;xe++){const Te=s.get(K[xe]);Te.__webglTexture&&(r.deleteTexture(Te.__webglTexture),u.memory.textures--),s.remove(K[xe])}s.remove(R)}let Y=0;function oe(){Y=0}function he(){return Y}function W(R){Y=R}function te(){const R=Y;return R>=a.maxTextures&&yt("WebGLTextures: Trying to use "+R+" texture units while this GPU supports only "+a.maxTextures),Y+=1,R}function $(R){const y=[];return y.push(R.wrapS),y.push(R.wrapT),y.push(R.wrapR||0),y.push(R.magFilter),y.push(R.minFilter),y.push(R.anisotropy),y.push(R.internalFormat),y.push(R.format),y.push(R.type),y.push(R.generateMipmaps),y.push(R.premultiplyAlpha),y.push(R.flipY),y.push(R.unpackAlignment),y.push(R.colorSpace),y.join()}function Z(R,y){const K=s.get(R);if(R.isVideoTexture&&de(R),R.isRenderTargetTexture===!1&&R.isExternalTexture!==!0&&R.version>0&&K.__version!==R.version){const xe=R.image;if(xe===null)yt("WebGLRenderer: Texture marked for update but no image data found.");else if(xe.complete===!1)yt("WebGLRenderer: Texture marked for update but image is incomplete");else{ze(K,R,y);return}}else R.isExternalTexture&&(K.__webglTexture=R.sourceTexture?R.sourceTexture:null);n.bindTexture(r.TEXTURE_2D,K.__webglTexture,r.TEXTURE0+y)}function ce(R,y){const K=s.get(R);if(R.isRenderTargetTexture===!1&&R.version>0&&K.__version!==R.version){ze(K,R,y);return}else R.isExternalTexture&&(K.__webglTexture=R.sourceTexture?R.sourceTexture:null);n.bindTexture(r.TEXTURE_2D_ARRAY,K.__webglTexture,r.TEXTURE0+y)}function ue(R,y){const K=s.get(R);if(R.isRenderTargetTexture===!1&&R.version>0&&K.__version!==R.version){ze(K,R,y);return}n.bindTexture(r.TEXTURE_3D,K.__webglTexture,r.TEXTURE0+y)}function F(R,y){const K=s.get(R);if(R.isCubeDepthTexture!==!0&&R.version>0&&K.__version!==R.version){it(K,R,y);return}n.bindTexture(r.TEXTURE_CUBE_MAP,K.__webglTexture,r.TEXTURE0+y)}const ne={[wd]:r.REPEAT,[_r]:r.CLAMP_TO_EDGE,[Td]:r.MIRRORED_REPEAT},Ge={[Bn]:r.NEAREST,[J_]:r.NEAREST_MIPMAP_NEAREST,[pl]:r.NEAREST_MIPMAP_LINEAR,[jn]:r.LINEAR,[Fu]:r.LINEAR_MIPMAP_NEAREST,[vs]:r.LINEAR_MIPMAP_LINEAR},qe={[tv]:r.NEVER,[ov]:r.ALWAYS,[nv]:r.LESS,[vf]:r.LEQUAL,[iv]:r.EQUAL,[xf]:r.GEQUAL,[rv]:r.GREATER,[sv]:r.NOTEQUAL};function Xe(R,y){if(y.type===qi&&e.has("OES_texture_float_linear")===!1&&(y.magFilter===jn||y.magFilter===Fu||y.magFilter===pl||y.magFilter===vs||y.minFilter===jn||y.minFilter===Fu||y.minFilter===pl||y.minFilter===vs)&&yt("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),r.texParameteri(R,r.TEXTURE_WRAP_S,ne[y.wrapS]),r.texParameteri(R,r.TEXTURE_WRAP_T,ne[y.wrapT]),(R===r.TEXTURE_3D||R===r.TEXTURE_2D_ARRAY)&&r.texParameteri(R,r.TEXTURE_WRAP_R,ne[y.wrapR]),r.texParameteri(R,r.TEXTURE_MAG_FILTER,Ge[y.magFilter]),r.texParameteri(R,r.TEXTURE_MIN_FILTER,Ge[y.minFilter]),y.compareFunction&&(r.texParameteri(R,r.TEXTURE_COMPARE_MODE,r.COMPARE_REF_TO_TEXTURE),r.texParameteri(R,r.TEXTURE_COMPARE_FUNC,qe[y.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(y.magFilter===Bn||y.minFilter!==pl&&y.minFilter!==vs||y.type===qi&&e.has("OES_texture_float_linear")===!1)return;if(y.anisotropy>1||s.get(y).__currentAnisotropy){const K=e.get("EXT_texture_filter_anisotropic");r.texParameterf(R,K.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(y.anisotropy,a.getMaxAnisotropy())),s.get(y).__currentAnisotropy=y.anisotropy}}}function Q(R,y){let K=!1;R.__webglInit===void 0&&(R.__webglInit=!0,y.addEventListener("dispose",k));const xe=y.source;let Me=M.get(xe);Me===void 0&&(Me={},M.set(xe,Me));const Te=$(y);if(Te!==R.__cacheKey){Me[Te]===void 0&&(Me[Te]={texture:r.createTexture(),usedTimes:0},u.memory.textures++,K=!0),Me[Te].usedTimes++;const Ie=Me[R.__cacheKey];Ie!==void 0&&(Me[R.__cacheKey].usedTimes--,Ie.usedTimes===0&&j(y)),R.__cacheKey=Te,R.__webglTexture=Me[Te].texture}return K}function Ae(R,y,K){return Math.floor(Math.floor(R/K)/y)}function Se(R,y,K,xe){const Te=R.updateRanges;if(Te.length===0)n.texSubImage2D(r.TEXTURE_2D,0,0,0,y.width,y.height,K,xe,y.data);else{Te.sort((We,Pe)=>We.start-Pe.start);let Ie=0;for(let We=1;We<Te.length;We++){const Pe=Te[Ie],Ue=Te[We],ut=Pe.start+Pe.count,mt=Ae(Ue.start,y.width,4),wt=Ae(Pe.start,y.width,4);Ue.start<=ut+1&&mt===wt&&Ae(Ue.start+Ue.count-1,y.width,4)===mt?Pe.count=Math.max(Pe.count,Ue.start+Ue.count-Pe.start):(++Ie,Te[Ie]=Ue)}Te.length=Ie+1;const fe=n.getParameter(r.UNPACK_ROW_LENGTH),_e=n.getParameter(r.UNPACK_SKIP_PIXELS),ke=n.getParameter(r.UNPACK_SKIP_ROWS);n.pixelStorei(r.UNPACK_ROW_LENGTH,y.width);for(let We=0,Pe=Te.length;We<Pe;We++){const Ue=Te[We],ut=Math.floor(Ue.start/4),mt=Math.ceil(Ue.count/4),wt=ut%y.width,z=Math.floor(ut/y.width),Le=mt,ge=1;n.pixelStorei(r.UNPACK_SKIP_PIXELS,wt),n.pixelStorei(r.UNPACK_SKIP_ROWS,z),n.texSubImage2D(r.TEXTURE_2D,0,wt,z,Le,ge,K,xe,y.data)}R.clearUpdateRanges(),n.pixelStorei(r.UNPACK_ROW_LENGTH,fe),n.pixelStorei(r.UNPACK_SKIP_PIXELS,_e),n.pixelStorei(r.UNPACK_SKIP_ROWS,ke)}}function ze(R,y,K){let xe=r.TEXTURE_2D;(y.isDataArrayTexture||y.isCompressedArrayTexture)&&(xe=r.TEXTURE_2D_ARRAY),y.isData3DTexture&&(xe=r.TEXTURE_3D);const Me=Q(R,y),Te=y.source;n.bindTexture(xe,R.__webglTexture,r.TEXTURE0+K);const Ie=s.get(Te);if(Te.version!==Ie.__version||Me===!0){if(n.activeTexture(r.TEXTURE0+K),(typeof ImageBitmap<"u"&&y.image instanceof ImageBitmap)===!1){const ge=Ht.getPrimaries(Ht.workingColorSpace),je=y.colorSpace===qr?null:Ht.getPrimaries(y.colorSpace),Fe=y.colorSpace===qr||ge===je?r.NONE:r.BROWSER_DEFAULT_WEBGL;n.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,y.flipY),n.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,y.premultiplyAlpha),n.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,Fe)}n.pixelStorei(r.UNPACK_ALIGNMENT,y.unpackAlignment);let _e=_(y.image,!1,a.maxTextureSize);_e=D(y,_e);const ke=l.convert(y.format,y.colorSpace),We=l.convert(y.type);let Pe=P(y.internalFormat,ke,We,y.normalized,y.colorSpace,y.isVideoTexture);Xe(xe,y);let Ue;const ut=y.mipmaps,mt=y.isVideoTexture!==!0,wt=Ie.__version===void 0||Me===!0,z=Te.dataReady,Le=I(y,_e);if(y.isDepthTexture)Pe=B(y.format===xs,y.type),wt&&(mt?n.texStorage2D(r.TEXTURE_2D,1,Pe,_e.width,_e.height):n.texImage2D(r.TEXTURE_2D,0,Pe,_e.width,_e.height,0,ke,We,null));else if(y.isDataTexture)if(ut.length>0){mt&&wt&&n.texStorage2D(r.TEXTURE_2D,Le,Pe,ut[0].width,ut[0].height);for(let ge=0,je=ut.length;ge<je;ge++)Ue=ut[ge],mt?z&&n.texSubImage2D(r.TEXTURE_2D,ge,0,0,Ue.width,Ue.height,ke,We,Ue.data):n.texImage2D(r.TEXTURE_2D,ge,Pe,Ue.width,Ue.height,0,ke,We,Ue.data);y.generateMipmaps=!1}else mt?(wt&&n.texStorage2D(r.TEXTURE_2D,Le,Pe,_e.width,_e.height),z&&Se(y,_e,ke,We)):n.texImage2D(r.TEXTURE_2D,0,Pe,_e.width,_e.height,0,ke,We,_e.data);else if(y.isCompressedTexture)if(y.isCompressedArrayTexture){mt&&wt&&n.texStorage3D(r.TEXTURE_2D_ARRAY,Le,Pe,ut[0].width,ut[0].height,_e.depth);for(let ge=0,je=ut.length;ge<je;ge++)if(Ue=ut[ge],y.format!==ki)if(ke!==null)if(mt){if(z)if(y.layerUpdates.size>0){const Fe=km(Ue.width,Ue.height,y.format,y.type);for(const we of y.layerUpdates){const Ze=Ue.data.subarray(we*Fe/Ue.data.BYTES_PER_ELEMENT,(we+1)*Fe/Ue.data.BYTES_PER_ELEMENT);n.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,ge,0,0,we,Ue.width,Ue.height,1,ke,Ze)}y.clearLayerUpdates()}else n.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,ge,0,0,0,Ue.width,Ue.height,_e.depth,ke,Ue.data)}else n.compressedTexImage3D(r.TEXTURE_2D_ARRAY,ge,Pe,Ue.width,Ue.height,_e.depth,0,Ue.data,0,0);else yt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else mt?z&&n.texSubImage3D(r.TEXTURE_2D_ARRAY,ge,0,0,0,Ue.width,Ue.height,_e.depth,ke,We,Ue.data):n.texImage3D(r.TEXTURE_2D_ARRAY,ge,Pe,Ue.width,Ue.height,_e.depth,0,ke,We,Ue.data)}else{mt&&wt&&n.texStorage2D(r.TEXTURE_2D,Le,Pe,ut[0].width,ut[0].height);for(let ge=0,je=ut.length;ge<je;ge++)Ue=ut[ge],y.format!==ki?ke!==null?mt?z&&n.compressedTexSubImage2D(r.TEXTURE_2D,ge,0,0,Ue.width,Ue.height,ke,Ue.data):n.compressedTexImage2D(r.TEXTURE_2D,ge,Pe,Ue.width,Ue.height,0,Ue.data):yt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):mt?z&&n.texSubImage2D(r.TEXTURE_2D,ge,0,0,Ue.width,Ue.height,ke,We,Ue.data):n.texImage2D(r.TEXTURE_2D,ge,Pe,Ue.width,Ue.height,0,ke,We,Ue.data)}else if(y.isDataArrayTexture)if(mt){if(wt&&n.texStorage3D(r.TEXTURE_2D_ARRAY,Le,Pe,_e.width,_e.height,_e.depth),z)if(y.layerUpdates.size>0){const ge=km(_e.width,_e.height,y.format,y.type);for(const je of y.layerUpdates){const Fe=_e.data.subarray(je*ge/_e.data.BYTES_PER_ELEMENT,(je+1)*ge/_e.data.BYTES_PER_ELEMENT);n.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,je,_e.width,_e.height,1,ke,We,Fe)}y.clearLayerUpdates()}else n.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,0,_e.width,_e.height,_e.depth,ke,We,_e.data)}else n.texImage3D(r.TEXTURE_2D_ARRAY,0,Pe,_e.width,_e.height,_e.depth,0,ke,We,_e.data);else if(y.isData3DTexture)mt?(wt&&n.texStorage3D(r.TEXTURE_3D,Le,Pe,_e.width,_e.height,_e.depth),z&&n.texSubImage3D(r.TEXTURE_3D,0,0,0,0,_e.width,_e.height,_e.depth,ke,We,_e.data)):n.texImage3D(r.TEXTURE_3D,0,Pe,_e.width,_e.height,_e.depth,0,ke,We,_e.data);else if(y.isFramebufferTexture){if(wt)if(mt)n.texStorage2D(r.TEXTURE_2D,Le,Pe,_e.width,_e.height);else{let ge=_e.width,je=_e.height;for(let Fe=0;Fe<Le;Fe++)n.texImage2D(r.TEXTURE_2D,Fe,Pe,ge,je,0,ke,We,null),ge>>=1,je>>=1}}else if(y.isHTMLTexture){if("texElementImage2D"in r){const ge=r.canvas;if(ge.hasAttribute("layoutsubtree")||ge.setAttribute("layoutsubtree","true"),_e.parentNode!==ge){ge.appendChild(_e),S.add(y),ge.onpaint=dt=>{const Mt=dt.changedElements;for(const ye of S)Mt.includes(ye.image)&&(ye.needsUpdate=!0)},ge.requestPaint();return}const je=0,Fe=r.RGBA,we=r.RGBA,Ze=r.UNSIGNED_BYTE;r.texElementImage2D(r.TEXTURE_2D,je,Fe,we,Ze,_e),r.texParameteri(r.TEXTURE_2D,r.TEXTURE_MIN_FILTER,r.LINEAR),r.texParameteri(r.TEXTURE_2D,r.TEXTURE_WRAP_S,r.CLAMP_TO_EDGE),r.texParameteri(r.TEXTURE_2D,r.TEXTURE_WRAP_T,r.CLAMP_TO_EDGE)}}else if(ut.length>0){if(mt&&wt){const ge=pt(ut[0]);n.texStorage2D(r.TEXTURE_2D,Le,Pe,ge.width,ge.height)}for(let ge=0,je=ut.length;ge<je;ge++)Ue=ut[ge],mt?z&&n.texSubImage2D(r.TEXTURE_2D,ge,0,0,ke,We,Ue):n.texImage2D(r.TEXTURE_2D,ge,Pe,ke,We,Ue);y.generateMipmaps=!1}else if(mt){if(wt){const ge=pt(_e);n.texStorage2D(r.TEXTURE_2D,Le,Pe,ge.width,ge.height)}z&&n.texSubImage2D(r.TEXTURE_2D,0,0,0,ke,We,_e)}else n.texImage2D(r.TEXTURE_2D,0,Pe,ke,We,_e);v(y)&&b(xe),Ie.__version=Te.version,y.onUpdate&&y.onUpdate(y)}R.__version=y.version}function it(R,y,K){if(y.image.length!==6)return;const xe=Q(R,y),Me=y.source;n.bindTexture(r.TEXTURE_CUBE_MAP,R.__webglTexture,r.TEXTURE0+K);const Te=s.get(Me);if(Me.version!==Te.__version||xe===!0){n.activeTexture(r.TEXTURE0+K);const Ie=Ht.getPrimaries(Ht.workingColorSpace),fe=y.colorSpace===qr?null:Ht.getPrimaries(y.colorSpace),_e=y.colorSpace===qr||Ie===fe?r.NONE:r.BROWSER_DEFAULT_WEBGL;n.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,y.flipY),n.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,y.premultiplyAlpha),n.pixelStorei(r.UNPACK_ALIGNMENT,y.unpackAlignment),n.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,_e);const ke=y.isCompressedTexture||y.image[0].isCompressedTexture,We=y.image[0]&&y.image[0].isDataTexture,Pe=[];for(let we=0;we<6;we++)!ke&&!We?Pe[we]=_(y.image[we],!0,a.maxCubemapSize):Pe[we]=We?y.image[we].image:y.image[we],Pe[we]=D(y,Pe[we]);const Ue=Pe[0],ut=l.convert(y.format,y.colorSpace),mt=l.convert(y.type),wt=P(y.internalFormat,ut,mt,y.normalized,y.colorSpace),z=y.isVideoTexture!==!0,Le=Te.__version===void 0||xe===!0,ge=Me.dataReady;let je=I(y,Ue);Xe(r.TEXTURE_CUBE_MAP,y);let Fe;if(ke){z&&Le&&n.texStorage2D(r.TEXTURE_CUBE_MAP,je,wt,Ue.width,Ue.height);for(let we=0;we<6;we++){Fe=Pe[we].mipmaps;for(let Ze=0;Ze<Fe.length;Ze++){const dt=Fe[Ze];y.format!==ki?ut!==null?z?ge&&n.compressedTexSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+we,Ze,0,0,dt.width,dt.height,ut,dt.data):n.compressedTexImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+we,Ze,wt,dt.width,dt.height,0,dt.data):yt("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):z?ge&&n.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+we,Ze,0,0,dt.width,dt.height,ut,mt,dt.data):n.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+we,Ze,wt,dt.width,dt.height,0,ut,mt,dt.data)}}}else{if(Fe=y.mipmaps,z&&Le){Fe.length>0&&je++;const we=pt(Pe[0]);n.texStorage2D(r.TEXTURE_CUBE_MAP,je,wt,we.width,we.height)}for(let we=0;we<6;we++)if(We){z?ge&&n.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+we,0,0,0,Pe[we].width,Pe[we].height,ut,mt,Pe[we].data):n.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+we,0,wt,Pe[we].width,Pe[we].height,0,ut,mt,Pe[we].data);for(let Ze=0;Ze<Fe.length;Ze++){const Mt=Fe[Ze].image[we].image;z?ge&&n.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+we,Ze+1,0,0,Mt.width,Mt.height,ut,mt,Mt.data):n.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+we,Ze+1,wt,Mt.width,Mt.height,0,ut,mt,Mt.data)}}else{z?ge&&n.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+we,0,0,0,ut,mt,Pe[we]):n.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+we,0,wt,ut,mt,Pe[we]);for(let Ze=0;Ze<Fe.length;Ze++){const dt=Fe[Ze];z?ge&&n.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+we,Ze+1,0,0,ut,mt,dt.image[we]):n.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+we,Ze+1,wt,ut,mt,dt.image[we])}}}v(y)&&b(r.TEXTURE_CUBE_MAP),Te.__version=Me.version,y.onUpdate&&y.onUpdate(y)}R.__version=y.version}function at(R,y,K,xe,Me,Te){const Ie=l.convert(K.format,K.colorSpace),fe=l.convert(K.type),_e=P(K.internalFormat,Ie,fe,K.normalized,K.colorSpace),ke=s.get(y),We=s.get(K);if(We.__renderTarget=y,!ke.__hasExternalTextures){const Pe=Math.max(1,y.width>>Te),Ue=Math.max(1,y.height>>Te);Me===r.TEXTURE_3D||Me===r.TEXTURE_2D_ARRAY?n.texImage3D(Me,Te,_e,Pe,Ue,y.depth,0,Ie,fe,null):n.texImage2D(Me,Te,_e,Pe,Ue,0,Ie,fe,null)}n.bindFramebuffer(r.FRAMEBUFFER,R),vt(y)?f.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,xe,Me,We.__webglTexture,0,zt(y)):(Me===r.TEXTURE_2D||Me>=r.TEXTURE_CUBE_MAP_POSITIVE_X&&Me<=r.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&r.framebufferTexture2D(r.FRAMEBUFFER,xe,Me,We.__webglTexture,Te),n.bindFramebuffer(r.FRAMEBUFFER,null)}function Nt(R,y,K){if(r.bindRenderbuffer(r.RENDERBUFFER,R),y.depthBuffer){const xe=y.depthTexture,Me=xe&&xe.isDepthTexture?xe.type:null,Te=B(y.stencilBuffer,Me),Ie=y.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT;vt(y)?f.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,zt(y),Te,y.width,y.height):K?r.renderbufferStorageMultisample(r.RENDERBUFFER,zt(y),Te,y.width,y.height):r.renderbufferStorage(r.RENDERBUFFER,Te,y.width,y.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,Ie,r.RENDERBUFFER,R)}else{const xe=y.textures;for(let Me=0;Me<xe.length;Me++){const Te=xe[Me],Ie=l.convert(Te.format,Te.colorSpace),fe=l.convert(Te.type),_e=P(Te.internalFormat,Ie,fe,Te.normalized,Te.colorSpace);vt(y)?f.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,zt(y),_e,y.width,y.height):K?r.renderbufferStorageMultisample(r.RENDERBUFFER,zt(y),_e,y.width,y.height):r.renderbufferStorage(r.RENDERBUFFER,_e,y.width,y.height)}}r.bindRenderbuffer(r.RENDERBUFFER,null)}function _t(R,y,K){const xe=y.isWebGLCubeRenderTarget===!0;if(n.bindFramebuffer(r.FRAMEBUFFER,R),!(y.depthTexture&&y.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const Me=s.get(y.depthTexture);if(Me.__renderTarget=y,(!Me.__webglTexture||y.depthTexture.image.width!==y.width||y.depthTexture.image.height!==y.height)&&(y.depthTexture.image.width=y.width,y.depthTexture.image.height=y.height,y.depthTexture.needsUpdate=!0),xe){if(Me.__webglInit===void 0&&(Me.__webglInit=!0,y.depthTexture.addEventListener("dispose",k)),Me.__webglTexture===void 0){Me.__webglTexture=r.createTexture(),n.bindTexture(r.TEXTURE_CUBE_MAP,Me.__webglTexture),Xe(r.TEXTURE_CUBE_MAP,y.depthTexture);const ke=l.convert(y.depthTexture.format),We=l.convert(y.depthTexture.type);let Pe;y.depthTexture.format===yr?Pe=r.DEPTH_COMPONENT24:y.depthTexture.format===xs&&(Pe=r.DEPTH24_STENCIL8);for(let Ue=0;Ue<6;Ue++)r.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Ue,0,Pe,y.width,y.height,0,ke,We,null)}}else Z(y.depthTexture,0);const Te=Me.__webglTexture,Ie=zt(y),fe=xe?r.TEXTURE_CUBE_MAP_POSITIVE_X+K:r.TEXTURE_2D,_e=y.depthTexture.format===xs?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT;if(y.depthTexture.format===yr)vt(y)?f.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,_e,fe,Te,0,Ie):r.framebufferTexture2D(r.FRAMEBUFFER,_e,fe,Te,0);else if(y.depthTexture.format===xs)vt(y)?f.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,_e,fe,Te,0,Ie):r.framebufferTexture2D(r.FRAMEBUFFER,_e,fe,Te,0);else throw new Error("Unknown depthTexture format")}function Tt(R){const y=s.get(R),K=R.isWebGLCubeRenderTarget===!0;if(y.__boundDepthTexture!==R.depthTexture){const xe=R.depthTexture;if(y.__depthDisposeCallback&&y.__depthDisposeCallback(),xe){const Me=()=>{delete y.__boundDepthTexture,delete y.__depthDisposeCallback,xe.removeEventListener("dispose",Me)};xe.addEventListener("dispose",Me),y.__depthDisposeCallback=Me}y.__boundDepthTexture=xe}if(R.depthTexture&&!y.__autoAllocateDepthBuffer)if(K)for(let xe=0;xe<6;xe++)_t(y.__webglFramebuffer[xe],R,xe);else{const xe=R.texture.mipmaps;xe&&xe.length>0?_t(y.__webglFramebuffer[0],R,0):_t(y.__webglFramebuffer,R,0)}else if(K){y.__webglDepthbuffer=[];for(let xe=0;xe<6;xe++)if(n.bindFramebuffer(r.FRAMEBUFFER,y.__webglFramebuffer[xe]),y.__webglDepthbuffer[xe]===void 0)y.__webglDepthbuffer[xe]=r.createRenderbuffer(),Nt(y.__webglDepthbuffer[xe],R,!1);else{const Me=R.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,Te=y.__webglDepthbuffer[xe];r.bindRenderbuffer(r.RENDERBUFFER,Te),r.framebufferRenderbuffer(r.FRAMEBUFFER,Me,r.RENDERBUFFER,Te)}}else{const xe=R.texture.mipmaps;if(xe&&xe.length>0?n.bindFramebuffer(r.FRAMEBUFFER,y.__webglFramebuffer[0]):n.bindFramebuffer(r.FRAMEBUFFER,y.__webglFramebuffer),y.__webglDepthbuffer===void 0)y.__webglDepthbuffer=r.createRenderbuffer(),Nt(y.__webglDepthbuffer,R,!1);else{const Me=R.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,Te=y.__webglDepthbuffer;r.bindRenderbuffer(r.RENDERBUFFER,Te),r.framebufferRenderbuffer(r.FRAMEBUFFER,Me,r.RENDERBUFFER,Te)}}n.bindFramebuffer(r.FRAMEBUFFER,null)}function Ot(R,y,K){const xe=s.get(R);y!==void 0&&at(xe.__webglFramebuffer,R,R.texture,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,0),K!==void 0&&Tt(R)}function gt(R){const y=R.texture,K=s.get(R),xe=s.get(y);R.addEventListener("dispose",w);const Me=R.textures,Te=R.isWebGLCubeRenderTarget===!0,Ie=Me.length>1;if(Ie||(xe.__webglTexture===void 0&&(xe.__webglTexture=r.createTexture()),xe.__version=y.version,u.memory.textures++),Te){K.__webglFramebuffer=[];for(let fe=0;fe<6;fe++)if(y.mipmaps&&y.mipmaps.length>0){K.__webglFramebuffer[fe]=[];for(let _e=0;_e<y.mipmaps.length;_e++)K.__webglFramebuffer[fe][_e]=r.createFramebuffer()}else K.__webglFramebuffer[fe]=r.createFramebuffer()}else{if(y.mipmaps&&y.mipmaps.length>0){K.__webglFramebuffer=[];for(let fe=0;fe<y.mipmaps.length;fe++)K.__webglFramebuffer[fe]=r.createFramebuffer()}else K.__webglFramebuffer=r.createFramebuffer();if(Ie)for(let fe=0,_e=Me.length;fe<_e;fe++){const ke=s.get(Me[fe]);ke.__webglTexture===void 0&&(ke.__webglTexture=r.createTexture(),u.memory.textures++)}if(R.samples>0&&vt(R)===!1){K.__webglMultisampledFramebuffer=r.createFramebuffer(),K.__webglColorRenderbuffer=[],n.bindFramebuffer(r.FRAMEBUFFER,K.__webglMultisampledFramebuffer);for(let fe=0;fe<Me.length;fe++){const _e=Me[fe];K.__webglColorRenderbuffer[fe]=r.createRenderbuffer(),r.bindRenderbuffer(r.RENDERBUFFER,K.__webglColorRenderbuffer[fe]);const ke=l.convert(_e.format,_e.colorSpace),We=l.convert(_e.type),Pe=P(_e.internalFormat,ke,We,_e.normalized,_e.colorSpace,R.isXRRenderTarget===!0),Ue=zt(R);r.renderbufferStorageMultisample(r.RENDERBUFFER,Ue,Pe,R.width,R.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+fe,r.RENDERBUFFER,K.__webglColorRenderbuffer[fe])}r.bindRenderbuffer(r.RENDERBUFFER,null),R.depthBuffer&&(K.__webglDepthRenderbuffer=r.createRenderbuffer(),Nt(K.__webglDepthRenderbuffer,R,!0)),n.bindFramebuffer(r.FRAMEBUFFER,null)}}if(Te){n.bindTexture(r.TEXTURE_CUBE_MAP,xe.__webglTexture),Xe(r.TEXTURE_CUBE_MAP,y);for(let fe=0;fe<6;fe++)if(y.mipmaps&&y.mipmaps.length>0)for(let _e=0;_e<y.mipmaps.length;_e++)at(K.__webglFramebuffer[fe][_e],R,y,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+fe,_e);else at(K.__webglFramebuffer[fe],R,y,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+fe,0);v(y)&&b(r.TEXTURE_CUBE_MAP),n.unbindTexture()}else if(Ie){for(let fe=0,_e=Me.length;fe<_e;fe++){const ke=Me[fe],We=s.get(ke);let Pe=r.TEXTURE_2D;(R.isWebGL3DRenderTarget||R.isWebGLArrayRenderTarget)&&(Pe=R.isWebGL3DRenderTarget?r.TEXTURE_3D:r.TEXTURE_2D_ARRAY),n.bindTexture(Pe,We.__webglTexture),Xe(Pe,ke),at(K.__webglFramebuffer,R,ke,r.COLOR_ATTACHMENT0+fe,Pe,0),v(ke)&&b(Pe)}n.unbindTexture()}else{let fe=r.TEXTURE_2D;if((R.isWebGL3DRenderTarget||R.isWebGLArrayRenderTarget)&&(fe=R.isWebGL3DRenderTarget?r.TEXTURE_3D:r.TEXTURE_2D_ARRAY),n.bindTexture(fe,xe.__webglTexture),Xe(fe,y),y.mipmaps&&y.mipmaps.length>0)for(let _e=0;_e<y.mipmaps.length;_e++)at(K.__webglFramebuffer[_e],R,y,r.COLOR_ATTACHMENT0,fe,_e);else at(K.__webglFramebuffer,R,y,r.COLOR_ATTACHMENT0,fe,0);v(y)&&b(fe),n.unbindTexture()}R.depthBuffer&&Tt(R)}function Gt(R){const y=R.textures;for(let K=0,xe=y.length;K<xe;K++){const Me=y[K];if(v(Me)){const Te=L(R),Ie=s.get(Me).__webglTexture;n.bindTexture(Te,Ie),b(Te),n.unbindTexture()}}}const Bt=[],ln=[];function G(R){if(R.samples>0){if(vt(R)===!1){const y=R.textures,K=R.width,xe=R.height;let Me=r.COLOR_BUFFER_BIT;const Te=R.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,Ie=s.get(R),fe=y.length>1;if(fe)for(let ke=0;ke<y.length;ke++)n.bindFramebuffer(r.FRAMEBUFFER,Ie.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+ke,r.RENDERBUFFER,null),n.bindFramebuffer(r.FRAMEBUFFER,Ie.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+ke,r.TEXTURE_2D,null,0);n.bindFramebuffer(r.READ_FRAMEBUFFER,Ie.__webglMultisampledFramebuffer);const _e=R.texture.mipmaps;_e&&_e.length>0?n.bindFramebuffer(r.DRAW_FRAMEBUFFER,Ie.__webglFramebuffer[0]):n.bindFramebuffer(r.DRAW_FRAMEBUFFER,Ie.__webglFramebuffer);for(let ke=0;ke<y.length;ke++){if(R.resolveDepthBuffer&&(R.depthBuffer&&(Me|=r.DEPTH_BUFFER_BIT),R.stencilBuffer&&R.resolveStencilBuffer&&(Me|=r.STENCIL_BUFFER_BIT)),fe){r.framebufferRenderbuffer(r.READ_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.RENDERBUFFER,Ie.__webglColorRenderbuffer[ke]);const We=s.get(y[ke]).__webglTexture;r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,We,0)}r.blitFramebuffer(0,0,K,xe,0,0,K,xe,Me,r.NEAREST),p===!0&&(Bt.length=0,ln.length=0,Bt.push(r.COLOR_ATTACHMENT0+ke),R.depthBuffer&&R.resolveDepthBuffer===!1&&(Bt.push(Te),ln.push(Te),r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,ln)),r.invalidateFramebuffer(r.READ_FRAMEBUFFER,Bt))}if(n.bindFramebuffer(r.READ_FRAMEBUFFER,null),n.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),fe)for(let ke=0;ke<y.length;ke++){n.bindFramebuffer(r.FRAMEBUFFER,Ie.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+ke,r.RENDERBUFFER,Ie.__webglColorRenderbuffer[ke]);const We=s.get(y[ke]).__webglTexture;n.bindFramebuffer(r.FRAMEBUFFER,Ie.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+ke,r.TEXTURE_2D,We,0)}n.bindFramebuffer(r.DRAW_FRAMEBUFFER,Ie.__webglMultisampledFramebuffer)}else if(R.depthBuffer&&R.resolveDepthBuffer===!1&&p){const y=R.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT;r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,[y])}}}function zt(R){return Math.min(a.maxSamples,R.samples)}function vt(R){const y=s.get(R);return R.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&y.__useRenderToTexture!==!1}function de(R){const y=u.render.frame;x.get(R)!==y&&(x.set(R,y),R.update())}function D(R,y){const K=R.colorSpace,xe=R.format,Me=R.type;return R.isCompressedTexture===!0||R.isVideoTexture===!0||K!==Wl&&K!==qr&&(Ht.getTransfer(K)===Jt?(xe!==ki||Me!==gi)&&yt("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):Xt("WebGLTextures: Unsupported texture color space:",K)),y}function pt(R){return typeof HTMLImageElement<"u"&&R instanceof HTMLImageElement?(m.width=R.naturalWidth||R.width,m.height=R.naturalHeight||R.height):typeof VideoFrame<"u"&&R instanceof VideoFrame?(m.width=R.displayWidth,m.height=R.displayHeight):(m.width=R.width,m.height=R.height),m}this.allocateTextureUnit=te,this.resetTextureUnits=oe,this.getTextureUnits=he,this.setTextureUnits=W,this.setTexture2D=Z,this.setTexture2DArray=ce,this.setTexture3D=ue,this.setTextureCube=F,this.rebindTextures=Ot,this.setupRenderTarget=gt,this.updateRenderTargetMipmap=Gt,this.updateMultisampleRenderTarget=G,this.setupDepthRenderbuffer=Tt,this.setupFrameBufferTexture=at,this.useMultisampledRTT=vt,this.isReversedDepthBuffer=function(){return n.buffers.depth.getReversed()}}function FM(r,e){function n(s,a=qr){let l;const u=Ht.getTransfer(a);if(s===gi)return r.UNSIGNED_BYTE;if(s===hf)return r.UNSIGNED_SHORT_4_4_4_4;if(s===pf)return r.UNSIGNED_SHORT_5_5_5_1;if(s===v0)return r.UNSIGNED_INT_5_9_9_9_REV;if(s===x0)return r.UNSIGNED_INT_10F_11F_11F_REV;if(s===g0)return r.BYTE;if(s===_0)return r.SHORT;if(s===aa)return r.UNSIGNED_SHORT;if(s===ff)return r.INT;if(s===er)return r.UNSIGNED_INT;if(s===qi)return r.FLOAT;if(s===Sr)return r.HALF_FLOAT;if(s===S0)return r.ALPHA;if(s===y0)return r.RGB;if(s===ki)return r.RGBA;if(s===yr)return r.DEPTH_COMPONENT;if(s===xs)return r.DEPTH_STENCIL;if(s===M0)return r.RED;if(s===mf)return r.RED_INTEGER;if(s===ys)return r.RG;if(s===gf)return r.RG_INTEGER;if(s===_f)return r.RGBA_INTEGER;if(s===Ol||s===kl||s===Bl||s===zl)if(u===Jt)if(l=e.get("WEBGL_compressed_texture_s3tc_srgb"),l!==null){if(s===Ol)return l.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(s===kl)return l.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(s===Bl)return l.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(s===zl)return l.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(l=e.get("WEBGL_compressed_texture_s3tc"),l!==null){if(s===Ol)return l.COMPRESSED_RGB_S3TC_DXT1_EXT;if(s===kl)return l.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(s===Bl)return l.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(s===zl)return l.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(s===Ad||s===bd||s===Cd||s===Rd)if(l=e.get("WEBGL_compressed_texture_pvrtc"),l!==null){if(s===Ad)return l.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(s===bd)return l.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(s===Cd)return l.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(s===Rd)return l.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(s===Pd||s===Ld||s===Dd||s===Id||s===Nd||s===Vl||s===Ud)if(l=e.get("WEBGL_compressed_texture_etc"),l!==null){if(s===Pd||s===Ld)return u===Jt?l.COMPRESSED_SRGB8_ETC2:l.COMPRESSED_RGB8_ETC2;if(s===Dd)return u===Jt?l.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:l.COMPRESSED_RGBA8_ETC2_EAC;if(s===Id)return l.COMPRESSED_R11_EAC;if(s===Nd)return l.COMPRESSED_SIGNED_R11_EAC;if(s===Vl)return l.COMPRESSED_RG11_EAC;if(s===Ud)return l.COMPRESSED_SIGNED_RG11_EAC}else return null;if(s===Fd||s===Od||s===kd||s===Bd||s===zd||s===Hd||s===Vd||s===Gd||s===Wd||s===Xd||s===jd||s===Yd||s===qd||s===$d)if(l=e.get("WEBGL_compressed_texture_astc"),l!==null){if(s===Fd)return u===Jt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:l.COMPRESSED_RGBA_ASTC_4x4_KHR;if(s===Od)return u===Jt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:l.COMPRESSED_RGBA_ASTC_5x4_KHR;if(s===kd)return u===Jt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:l.COMPRESSED_RGBA_ASTC_5x5_KHR;if(s===Bd)return u===Jt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:l.COMPRESSED_RGBA_ASTC_6x5_KHR;if(s===zd)return u===Jt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:l.COMPRESSED_RGBA_ASTC_6x6_KHR;if(s===Hd)return u===Jt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:l.COMPRESSED_RGBA_ASTC_8x5_KHR;if(s===Vd)return u===Jt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:l.COMPRESSED_RGBA_ASTC_8x6_KHR;if(s===Gd)return u===Jt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:l.COMPRESSED_RGBA_ASTC_8x8_KHR;if(s===Wd)return u===Jt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:l.COMPRESSED_RGBA_ASTC_10x5_KHR;if(s===Xd)return u===Jt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:l.COMPRESSED_RGBA_ASTC_10x6_KHR;if(s===jd)return u===Jt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:l.COMPRESSED_RGBA_ASTC_10x8_KHR;if(s===Yd)return u===Jt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:l.COMPRESSED_RGBA_ASTC_10x10_KHR;if(s===qd)return u===Jt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:l.COMPRESSED_RGBA_ASTC_12x10_KHR;if(s===$d)return u===Jt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:l.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(s===Kd||s===Zd||s===Jd)if(l=e.get("EXT_texture_compression_bptc"),l!==null){if(s===Kd)return u===Jt?l.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:l.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(s===Zd)return l.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(s===Jd)return l.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(s===Qd||s===ef||s===Gl||s===tf)if(l=e.get("EXT_texture_compression_rgtc"),l!==null){if(s===Qd)return l.COMPRESSED_RED_RGTC1_EXT;if(s===ef)return l.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(s===Gl)return l.COMPRESSED_RED_GREEN_RGTC2_EXT;if(s===tf)return l.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return s===la?r.UNSIGNED_INT_24_8:r[s]!==void 0?r[s]:null}return{convert:n}}const OM=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,kM=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class BM{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,n){if(this.texture===null){const s=new P0(e.texture);(e.depthNear!==n.depthNear||e.depthFar!==n.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=s}}getMesh(e){if(this.texture!==null&&this.mesh===null){const n=e.cameras[0].viewport,s=new tr({vertexShader:OM,fragmentShader:kM,uniforms:{depthColor:{value:this.texture},depthWidth:{value:n.z},depthHeight:{value:n.w}}});this.mesh=new be(new wn(20,20),s)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class zM extends Ms{constructor(e,n){super();const s=this;let a=null,l=1,u=null,f="local-floor",p=1,m=null,x=null,S=null,g=null,M=null,T=null;const C=typeof XRWebGLBinding<"u",_=new BM,v={},b=n.getContextAttributes();let L=null,P=null;const B=[],I=[],k=new Vt;let w=null;const N=new mi;N.viewport=new gn;const j=new mi;j.viewport=new gn;const O=[N,j],Y=new $v;let oe=null,he=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(Q){let Ae=B[Q];return Ae===void 0&&(Ae=new Wu,B[Q]=Ae),Ae.getTargetRaySpace()},this.getControllerGrip=function(Q){let Ae=B[Q];return Ae===void 0&&(Ae=new Wu,B[Q]=Ae),Ae.getGripSpace()},this.getHand=function(Q){let Ae=B[Q];return Ae===void 0&&(Ae=new Wu,B[Q]=Ae),Ae.getHandSpace()};function W(Q){const Ae=I.indexOf(Q.inputSource);if(Ae===-1)return;const Se=B[Ae];Se!==void 0&&(Se.update(Q.inputSource,Q.frame,m||u),Se.dispatchEvent({type:Q.type,data:Q.inputSource}))}function te(){a.removeEventListener("select",W),a.removeEventListener("selectstart",W),a.removeEventListener("selectend",W),a.removeEventListener("squeeze",W),a.removeEventListener("squeezestart",W),a.removeEventListener("squeezeend",W),a.removeEventListener("end",te),a.removeEventListener("inputsourceschange",$);for(let Q=0;Q<B.length;Q++){const Ae=I[Q];Ae!==null&&(I[Q]=null,B[Q].disconnect(Ae))}oe=null,he=null,_.reset();for(const Q in v)delete v[Q];e.setRenderTarget(L),M=null,g=null,S=null,a=null,P=null,Xe.stop(),s.isPresenting=!1,e.setPixelRatio(w),e.setSize(k.width,k.height,!1),s.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(Q){l=Q,s.isPresenting===!0&&yt("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(Q){f=Q,s.isPresenting===!0&&yt("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return m||u},this.setReferenceSpace=function(Q){m=Q},this.getBaseLayer=function(){return g!==null?g:M},this.getBinding=function(){return S===null&&C&&(S=new XRWebGLBinding(a,n)),S},this.getFrame=function(){return T},this.getSession=function(){return a},this.setSession=async function(Q){if(a=Q,a!==null){if(L=e.getRenderTarget(),a.addEventListener("select",W),a.addEventListener("selectstart",W),a.addEventListener("selectend",W),a.addEventListener("squeeze",W),a.addEventListener("squeezestart",W),a.addEventListener("squeezeend",W),a.addEventListener("end",te),a.addEventListener("inputsourceschange",$),b.xrCompatible!==!0&&await n.makeXRCompatible(),w=e.getPixelRatio(),e.getSize(k),C&&"createProjectionLayer"in XRWebGLBinding.prototype){let Se=null,ze=null,it=null;b.depth&&(it=b.stencil?n.DEPTH24_STENCIL8:n.DEPTH_COMPONENT24,Se=b.stencil?xs:yr,ze=b.stencil?la:er);const at={colorFormat:n.RGBA8,depthFormat:it,scaleFactor:l};S=this.getBinding(),g=S.createProjectionLayer(at),a.updateRenderState({layers:[g]}),e.setPixelRatio(1),e.setSize(g.textureWidth,g.textureHeight,!1),P=new Ji(g.textureWidth,g.textureHeight,{format:ki,type:gi,depthTexture:new ho(g.textureWidth,g.textureHeight,ze,void 0,void 0,void 0,void 0,void 0,void 0,Se),stencilBuffer:b.stencil,colorSpace:e.outputColorSpace,samples:b.antialias?4:0,resolveDepthBuffer:g.ignoreDepthValues===!1,resolveStencilBuffer:g.ignoreDepthValues===!1})}else{const Se={antialias:b.antialias,alpha:!0,depth:b.depth,stencil:b.stencil,framebufferScaleFactor:l};M=new XRWebGLLayer(a,n,Se),a.updateRenderState({baseLayer:M}),e.setPixelRatio(1),e.setSize(M.framebufferWidth,M.framebufferHeight,!1),P=new Ji(M.framebufferWidth,M.framebufferHeight,{format:ki,type:gi,colorSpace:e.outputColorSpace,stencilBuffer:b.stencil,resolveDepthBuffer:M.ignoreDepthValues===!1,resolveStencilBuffer:M.ignoreDepthValues===!1})}P.isXRRenderTarget=!0,this.setFoveation(p),m=null,u=await a.requestReferenceSpace(f),Xe.setContext(a),Xe.start(),s.isPresenting=!0,s.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(a!==null)return a.environmentBlendMode},this.getDepthTexture=function(){return _.getDepthTexture()};function $(Q){for(let Ae=0;Ae<Q.removed.length;Ae++){const Se=Q.removed[Ae],ze=I.indexOf(Se);ze>=0&&(I[ze]=null,B[ze].disconnect(Se))}for(let Ae=0;Ae<Q.added.length;Ae++){const Se=Q.added[Ae];let ze=I.indexOf(Se);if(ze===-1){for(let at=0;at<B.length;at++)if(at>=I.length){I.push(Se),ze=at;break}else if(I[at]===null){I[at]=Se,ze=at;break}if(ze===-1)break}const it=B[ze];it&&it.connect(Se)}}const Z=new J,ce=new J;function ue(Q,Ae,Se){Z.setFromMatrixPosition(Ae.matrixWorld),ce.setFromMatrixPosition(Se.matrixWorld);const ze=Z.distanceTo(ce),it=Ae.projectionMatrix.elements,at=Se.projectionMatrix.elements,Nt=it[14]/(it[10]-1),_t=it[14]/(it[10]+1),Tt=(it[9]+1)/it[5],Ot=(it[9]-1)/it[5],gt=(it[8]-1)/it[0],Gt=(at[8]+1)/at[0],Bt=Nt*gt,ln=Nt*Gt,G=ze/(-gt+Gt),zt=G*-gt;if(Ae.matrixWorld.decompose(Q.position,Q.quaternion,Q.scale),Q.translateX(zt),Q.translateZ(G),Q.matrixWorld.compose(Q.position,Q.quaternion,Q.scale),Q.matrixWorldInverse.copy(Q.matrixWorld).invert(),it[10]===-1)Q.projectionMatrix.copy(Ae.projectionMatrix),Q.projectionMatrixInverse.copy(Ae.projectionMatrixInverse);else{const vt=Nt+G,de=_t+G,D=Bt-zt,pt=ln+(ze-zt),R=Tt*_t/de*vt,y=Ot*_t/de*vt;Q.projectionMatrix.makePerspective(D,pt,R,y,vt,de),Q.projectionMatrixInverse.copy(Q.projectionMatrix).invert()}}function F(Q,Ae){Ae===null?Q.matrixWorld.copy(Q.matrix):Q.matrixWorld.multiplyMatrices(Ae.matrixWorld,Q.matrix),Q.matrixWorldInverse.copy(Q.matrixWorld).invert()}this.updateCamera=function(Q){if(a===null)return;let Ae=Q.near,Se=Q.far;_.texture!==null&&(_.depthNear>0&&(Ae=_.depthNear),_.depthFar>0&&(Se=_.depthFar)),Y.near=j.near=N.near=Ae,Y.far=j.far=N.far=Se,(oe!==Y.near||he!==Y.far)&&(a.updateRenderState({depthNear:Y.near,depthFar:Y.far}),oe=Y.near,he=Y.far),Y.layers.mask=Q.layers.mask|6,N.layers.mask=Y.layers.mask&-5,j.layers.mask=Y.layers.mask&-3;const ze=Q.parent,it=Y.cameras;F(Y,ze);for(let at=0;at<it.length;at++)F(it[at],ze);it.length===2?ue(Y,N,j):Y.projectionMatrix.copy(N.projectionMatrix),ne(Q,Y,ze)};function ne(Q,Ae,Se){Se===null?Q.matrix.copy(Ae.matrixWorld):(Q.matrix.copy(Se.matrixWorld),Q.matrix.invert(),Q.matrix.multiply(Ae.matrixWorld)),Q.matrix.decompose(Q.position,Q.quaternion,Q.scale),Q.updateMatrixWorld(!0),Q.projectionMatrix.copy(Ae.projectionMatrix),Q.projectionMatrixInverse.copy(Ae.projectionMatrixInverse),Q.isPerspectiveCamera&&(Q.fov=sf*2*Math.atan(1/Q.projectionMatrix.elements[5]),Q.zoom=1)}this.getCamera=function(){return Y},this.getFoveation=function(){if(!(g===null&&M===null))return p},this.setFoveation=function(Q){p=Q,g!==null&&(g.fixedFoveation=Q),M!==null&&M.fixedFoveation!==void 0&&(M.fixedFoveation=Q)},this.hasDepthSensing=function(){return _.texture!==null},this.getDepthSensingMesh=function(){return _.getMesh(Y)},this.getCameraTexture=function(Q){return v[Q]};let Ge=null;function qe(Q,Ae){if(x=Ae.getViewerPose(m||u),T=Ae,x!==null){const Se=x.views;M!==null&&(e.setRenderTargetFramebuffer(P,M.framebuffer),e.setRenderTarget(P));let ze=!1;Se.length!==Y.cameras.length&&(Y.cameras.length=0,ze=!0);for(let _t=0;_t<Se.length;_t++){const Tt=Se[_t];let Ot=null;if(M!==null)Ot=M.getViewport(Tt);else{const Gt=S.getViewSubImage(g,Tt);Ot=Gt.viewport,_t===0&&(e.setRenderTargetTextures(P,Gt.colorTexture,Gt.depthStencilTexture),e.setRenderTarget(P))}let gt=O[_t];gt===void 0&&(gt=new mi,gt.layers.enable(_t),gt.viewport=new gn,O[_t]=gt),gt.matrix.fromArray(Tt.transform.matrix),gt.matrix.decompose(gt.position,gt.quaternion,gt.scale),gt.projectionMatrix.fromArray(Tt.projectionMatrix),gt.projectionMatrixInverse.copy(gt.projectionMatrix).invert(),gt.viewport.set(Ot.x,Ot.y,Ot.width,Ot.height),_t===0&&(Y.matrix.copy(gt.matrix),Y.matrix.decompose(Y.position,Y.quaternion,Y.scale)),ze===!0&&Y.cameras.push(gt)}const it=a.enabledFeatures;if(it&&it.includes("depth-sensing")&&a.depthUsage=="gpu-optimized"&&C){S=s.getBinding();const _t=S.getDepthInformation(Se[0]);_t&&_t.isValid&&_t.texture&&_.init(_t,a.renderState)}if(it&&it.includes("camera-access")&&C){e.state.unbindTexture(),S=s.getBinding();for(let _t=0;_t<Se.length;_t++){const Tt=Se[_t].camera;if(Tt){let Ot=v[Tt];Ot||(Ot=new P0,v[Tt]=Ot);const gt=S.getCameraImage(Tt);Ot.sourceTexture=gt}}}}for(let Se=0;Se<B.length;Se++){const ze=I[Se],it=B[Se];ze!==null&&it!==void 0&&it.update(ze,Ae,m||u)}Ge&&Ge(Q,Ae),Ae.detectedPlanes&&s.dispatchEvent({type:"planesdetected",data:Ae}),T=null}const Xe=new N0;Xe.setAnimationLoop(qe),this.setAnimationLoop=function(Q){Ge=Q},this.dispose=function(){}}}const HM=new _n,H0=new Ct;H0.set(-1,0,0,0,1,0,0,0,1);function VM(r,e){function n(_,v){_.matrixAutoUpdate===!0&&_.updateMatrix(),v.value.copy(_.matrix)}function s(_,v){v.color.getRGB(_.fogColor.value,L0(r)),v.isFog?(_.fogNear.value=v.near,_.fogFar.value=v.far):v.isFogExp2&&(_.fogDensity.value=v.density)}function a(_,v,b,L,P){v.isNodeMaterial?v.uniformsNeedUpdate=!1:v.isMeshBasicMaterial?l(_,v):v.isMeshLambertMaterial?(l(_,v),v.envMap&&(_.envMapIntensity.value=v.envMapIntensity)):v.isMeshToonMaterial?(l(_,v),S(_,v)):v.isMeshPhongMaterial?(l(_,v),x(_,v),v.envMap&&(_.envMapIntensity.value=v.envMapIntensity)):v.isMeshStandardMaterial?(l(_,v),g(_,v),v.isMeshPhysicalMaterial&&M(_,v,P)):v.isMeshMatcapMaterial?(l(_,v),T(_,v)):v.isMeshDepthMaterial?l(_,v):v.isMeshDistanceMaterial?(l(_,v),C(_,v)):v.isMeshNormalMaterial?l(_,v):v.isLineBasicMaterial?(u(_,v),v.isLineDashedMaterial&&f(_,v)):v.isPointsMaterial?p(_,v,b,L):v.isSpriteMaterial?m(_,v):v.isShadowMaterial?(_.color.value.copy(v.color),_.opacity.value=v.opacity):v.isShaderMaterial&&(v.uniformsNeedUpdate=!1)}function l(_,v){_.opacity.value=v.opacity,v.color&&_.diffuse.value.copy(v.color),v.emissive&&_.emissive.value.copy(v.emissive).multiplyScalar(v.emissiveIntensity),v.map&&(_.map.value=v.map,n(v.map,_.mapTransform)),v.alphaMap&&(_.alphaMap.value=v.alphaMap,n(v.alphaMap,_.alphaMapTransform)),v.bumpMap&&(_.bumpMap.value=v.bumpMap,n(v.bumpMap,_.bumpMapTransform),_.bumpScale.value=v.bumpScale,v.side===li&&(_.bumpScale.value*=-1)),v.normalMap&&(_.normalMap.value=v.normalMap,n(v.normalMap,_.normalMapTransform),_.normalScale.value.copy(v.normalScale),v.side===li&&_.normalScale.value.negate()),v.displacementMap&&(_.displacementMap.value=v.displacementMap,n(v.displacementMap,_.displacementMapTransform),_.displacementScale.value=v.displacementScale,_.displacementBias.value=v.displacementBias),v.emissiveMap&&(_.emissiveMap.value=v.emissiveMap,n(v.emissiveMap,_.emissiveMapTransform)),v.specularMap&&(_.specularMap.value=v.specularMap,n(v.specularMap,_.specularMapTransform)),v.alphaTest>0&&(_.alphaTest.value=v.alphaTest);const b=e.get(v),L=b.envMap,P=b.envMapRotation;L&&(_.envMap.value=L,_.envMapRotation.value.setFromMatrix4(HM.makeRotationFromEuler(P)).transpose(),L.isCubeTexture&&L.isRenderTargetTexture===!1&&_.envMapRotation.value.premultiply(H0),_.reflectivity.value=v.reflectivity,_.ior.value=v.ior,_.refractionRatio.value=v.refractionRatio),v.lightMap&&(_.lightMap.value=v.lightMap,_.lightMapIntensity.value=v.lightMapIntensity,n(v.lightMap,_.lightMapTransform)),v.aoMap&&(_.aoMap.value=v.aoMap,_.aoMapIntensity.value=v.aoMapIntensity,n(v.aoMap,_.aoMapTransform))}function u(_,v){_.diffuse.value.copy(v.color),_.opacity.value=v.opacity,v.map&&(_.map.value=v.map,n(v.map,_.mapTransform))}function f(_,v){_.dashSize.value=v.dashSize,_.totalSize.value=v.dashSize+v.gapSize,_.scale.value=v.scale}function p(_,v,b,L){_.diffuse.value.copy(v.color),_.opacity.value=v.opacity,_.size.value=v.size*b,_.scale.value=L*.5,v.map&&(_.map.value=v.map,n(v.map,_.uvTransform)),v.alphaMap&&(_.alphaMap.value=v.alphaMap,n(v.alphaMap,_.alphaMapTransform)),v.alphaTest>0&&(_.alphaTest.value=v.alphaTest)}function m(_,v){_.diffuse.value.copy(v.color),_.opacity.value=v.opacity,_.rotation.value=v.rotation,v.map&&(_.map.value=v.map,n(v.map,_.mapTransform)),v.alphaMap&&(_.alphaMap.value=v.alphaMap,n(v.alphaMap,_.alphaMapTransform)),v.alphaTest>0&&(_.alphaTest.value=v.alphaTest)}function x(_,v){_.specular.value.copy(v.specular),_.shininess.value=Math.max(v.shininess,1e-4)}function S(_,v){v.gradientMap&&(_.gradientMap.value=v.gradientMap)}function g(_,v){_.metalness.value=v.metalness,v.metalnessMap&&(_.metalnessMap.value=v.metalnessMap,n(v.metalnessMap,_.metalnessMapTransform)),_.roughness.value=v.roughness,v.roughnessMap&&(_.roughnessMap.value=v.roughnessMap,n(v.roughnessMap,_.roughnessMapTransform)),v.envMap&&(_.envMapIntensity.value=v.envMapIntensity)}function M(_,v,b){_.ior.value=v.ior,v.sheen>0&&(_.sheenColor.value.copy(v.sheenColor).multiplyScalar(v.sheen),_.sheenRoughness.value=v.sheenRoughness,v.sheenColorMap&&(_.sheenColorMap.value=v.sheenColorMap,n(v.sheenColorMap,_.sheenColorMapTransform)),v.sheenRoughnessMap&&(_.sheenRoughnessMap.value=v.sheenRoughnessMap,n(v.sheenRoughnessMap,_.sheenRoughnessMapTransform))),v.clearcoat>0&&(_.clearcoat.value=v.clearcoat,_.clearcoatRoughness.value=v.clearcoatRoughness,v.clearcoatMap&&(_.clearcoatMap.value=v.clearcoatMap,n(v.clearcoatMap,_.clearcoatMapTransform)),v.clearcoatRoughnessMap&&(_.clearcoatRoughnessMap.value=v.clearcoatRoughnessMap,n(v.clearcoatRoughnessMap,_.clearcoatRoughnessMapTransform)),v.clearcoatNormalMap&&(_.clearcoatNormalMap.value=v.clearcoatNormalMap,n(v.clearcoatNormalMap,_.clearcoatNormalMapTransform),_.clearcoatNormalScale.value.copy(v.clearcoatNormalScale),v.side===li&&_.clearcoatNormalScale.value.negate())),v.dispersion>0&&(_.dispersion.value=v.dispersion),v.iridescence>0&&(_.iridescence.value=v.iridescence,_.iridescenceIOR.value=v.iridescenceIOR,_.iridescenceThicknessMinimum.value=v.iridescenceThicknessRange[0],_.iridescenceThicknessMaximum.value=v.iridescenceThicknessRange[1],v.iridescenceMap&&(_.iridescenceMap.value=v.iridescenceMap,n(v.iridescenceMap,_.iridescenceMapTransform)),v.iridescenceThicknessMap&&(_.iridescenceThicknessMap.value=v.iridescenceThicknessMap,n(v.iridescenceThicknessMap,_.iridescenceThicknessMapTransform))),v.transmission>0&&(_.transmission.value=v.transmission,_.transmissionSamplerMap.value=b.texture,_.transmissionSamplerSize.value.set(b.width,b.height),v.transmissionMap&&(_.transmissionMap.value=v.transmissionMap,n(v.transmissionMap,_.transmissionMapTransform)),_.thickness.value=v.thickness,v.thicknessMap&&(_.thicknessMap.value=v.thicknessMap,n(v.thicknessMap,_.thicknessMapTransform)),_.attenuationDistance.value=v.attenuationDistance,_.attenuationColor.value.copy(v.attenuationColor)),v.anisotropy>0&&(_.anisotropyVector.value.set(v.anisotropy*Math.cos(v.anisotropyRotation),v.anisotropy*Math.sin(v.anisotropyRotation)),v.anisotropyMap&&(_.anisotropyMap.value=v.anisotropyMap,n(v.anisotropyMap,_.anisotropyMapTransform))),_.specularIntensity.value=v.specularIntensity,_.specularColor.value.copy(v.specularColor),v.specularColorMap&&(_.specularColorMap.value=v.specularColorMap,n(v.specularColorMap,_.specularColorMapTransform)),v.specularIntensityMap&&(_.specularIntensityMap.value=v.specularIntensityMap,n(v.specularIntensityMap,_.specularIntensityMapTransform))}function T(_,v){v.matcap&&(_.matcap.value=v.matcap)}function C(_,v){const b=e.get(v).light;_.referencePosition.value.setFromMatrixPosition(b.matrixWorld),_.nearDistance.value=b.shadow.camera.near,_.farDistance.value=b.shadow.camera.far}return{refreshFogUniforms:s,refreshMaterialUniforms:a}}function GM(r,e,n,s){let a={},l={},u=[];const f=r.getParameter(r.MAX_UNIFORM_BUFFER_BINDINGS);function p(b,L){const P=L.program;s.uniformBlockBinding(b,P)}function m(b,L){let P=a[b.id];P===void 0&&(T(b),P=x(b),a[b.id]=P,b.addEventListener("dispose",_));const B=L.program;s.updateUBOMapping(b,B);const I=e.render.frame;l[b.id]!==I&&(g(b),l[b.id]=I)}function x(b){const L=S();b.__bindingPointIndex=L;const P=r.createBuffer(),B=b.__size,I=b.usage;return r.bindBuffer(r.UNIFORM_BUFFER,P),r.bufferData(r.UNIFORM_BUFFER,B,I),r.bindBuffer(r.UNIFORM_BUFFER,null),r.bindBufferBase(r.UNIFORM_BUFFER,L,P),P}function S(){for(let b=0;b<f;b++)if(u.indexOf(b)===-1)return u.push(b),b;return Xt("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function g(b){const L=a[b.id],P=b.uniforms,B=b.__cache;r.bindBuffer(r.UNIFORM_BUFFER,L);for(let I=0,k=P.length;I<k;I++){const w=Array.isArray(P[I])?P[I]:[P[I]];for(let N=0,j=w.length;N<j;N++){const O=w[N];if(M(O,I,N,B)===!0){const Y=O.__offset,oe=Array.isArray(O.value)?O.value:[O.value];let he=0;for(let W=0;W<oe.length;W++){const te=oe[W],$=C(te);typeof te=="number"||typeof te=="boolean"?(O.__data[0]=te,r.bufferSubData(r.UNIFORM_BUFFER,Y+he,O.__data)):te.isMatrix3?(O.__data[0]=te.elements[0],O.__data[1]=te.elements[1],O.__data[2]=te.elements[2],O.__data[3]=0,O.__data[4]=te.elements[3],O.__data[5]=te.elements[4],O.__data[6]=te.elements[5],O.__data[7]=0,O.__data[8]=te.elements[6],O.__data[9]=te.elements[7],O.__data[10]=te.elements[8],O.__data[11]=0):ArrayBuffer.isView(te)?O.__data.set(new te.constructor(te.buffer,te.byteOffset,O.__data.length)):(te.toArray(O.__data,he),he+=$.storage/Float32Array.BYTES_PER_ELEMENT)}r.bufferSubData(r.UNIFORM_BUFFER,Y,O.__data)}}}r.bindBuffer(r.UNIFORM_BUFFER,null)}function M(b,L,P,B){const I=b.value,k=L+"_"+P;if(B[k]===void 0)return typeof I=="number"||typeof I=="boolean"?B[k]=I:ArrayBuffer.isView(I)?B[k]=I.slice():B[k]=I.clone(),!0;{const w=B[k];if(typeof I=="number"||typeof I=="boolean"){if(w!==I)return B[k]=I,!0}else{if(ArrayBuffer.isView(I))return!0;if(w.equals(I)===!1)return w.copy(I),!0}}return!1}function T(b){const L=b.uniforms;let P=0;const B=16;for(let k=0,w=L.length;k<w;k++){const N=Array.isArray(L[k])?L[k]:[L[k]];for(let j=0,O=N.length;j<O;j++){const Y=N[j],oe=Array.isArray(Y.value)?Y.value:[Y.value];for(let he=0,W=oe.length;he<W;he++){const te=oe[he],$=C(te),Z=P%B,ce=Z%$.boundary,ue=Z+ce;P+=ce,ue!==0&&B-ue<$.storage&&(P+=B-ue),Y.__data=new Float32Array($.storage/Float32Array.BYTES_PER_ELEMENT),Y.__offset=P,P+=$.storage}}}const I=P%B;return I>0&&(P+=B-I),b.__size=P,b.__cache={},this}function C(b){const L={boundary:0,storage:0};return typeof b=="number"||typeof b=="boolean"?(L.boundary=4,L.storage=4):b.isVector2?(L.boundary=8,L.storage=8):b.isVector3||b.isColor?(L.boundary=16,L.storage=12):b.isVector4?(L.boundary=16,L.storage=16):b.isMatrix3?(L.boundary=48,L.storage=48):b.isMatrix4?(L.boundary=64,L.storage=64):b.isTexture?yt("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(b)?(L.boundary=16,L.storage=b.byteLength):yt("WebGLRenderer: Unsupported uniform value type.",b),L}function _(b){const L=b.target;L.removeEventListener("dispose",_);const P=u.indexOf(L.__bindingPointIndex);u.splice(P,1),r.deleteBuffer(a[L.id]),delete a[L.id],delete l[L.id]}function v(){for(const b in a)r.deleteBuffer(a[b]);u=[],a={},l={}}return{bind:p,update:m,dispose:v}}const WM=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let ji=null;function XM(){return ji===null&&(ji=new Lv(WM,16,16,ys,Sr),ji.name="DFG_LUT",ji.minFilter=jn,ji.magFilter=jn,ji.wrapS=_r,ji.wrapT=_r,ji.generateMipmaps=!1,ji.needsUpdate=!0),ji}class jM{constructor(e={}){const{canvas:n=lv(),context:s=null,depth:a=!0,stencil:l=!1,alpha:u=!1,antialias:f=!1,premultipliedAlpha:p=!0,preserveDrawingBuffer:m=!1,powerPreference:x="default",failIfMajorPerformanceCaveat:S=!1,reversedDepthBuffer:g=!1,outputBufferType:M=gi}=e;this.isWebGLRenderer=!0;let T;if(s!==null){if(typeof WebGLRenderingContext<"u"&&s instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");T=s.getContextAttributes().alpha}else T=u;const C=M,_=new Set([_f,gf,mf]),v=new Set([gi,er,aa,la,hf,pf]),b=new Uint32Array(4),L=new Int32Array(4),P=new J;let B=null,I=null;const k=[],w=[];let N=null;this.domElement=n,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Zi,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const j=this;let O=!1,Y=null;this._outputColorSpace=ai;let oe=0,he=0,W=null,te=-1,$=null;const Z=new gn,ce=new gn;let ue=null;const F=new Rt(0);let ne=0,Ge=n.width,qe=n.height,Xe=1,Q=null,Ae=null;const Se=new gn(0,0,Ge,qe),ze=new gn(0,0,Ge,qe);let it=!1;const at=new wf;let Nt=!1,_t=!1;const Tt=new _n,Ot=new J,gt=new gn,Gt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Bt=!1;function ln(){return W===null?Xe:1}let G=s;function zt(A,q){return n.getContext(A,q)}try{const A={alpha:!0,depth:a,stencil:l,antialias:f,premultipliedAlpha:p,preserveDrawingBuffer:m,powerPreference:x,failIfMajorPerformanceCaveat:S};if("setAttribute"in n&&n.setAttribute("data-engine",`three.js r${uf}`),n.addEventListener("webglcontextlost",we,!1),n.addEventListener("webglcontextrestored",Ze,!1),n.addEventListener("webglcontextcreationerror",dt,!1),G===null){const q="webgl2";if(G=zt(q,A),G===null)throw zt(q)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(A){throw Xt("WebGLRenderer: "+A.message),A}let vt,de,D,pt,R,y,K,xe,Me,Te,Ie,fe,_e,ke,We,Pe,Ue,ut,mt,wt,z,Le,ge;function je(){vt=new Xy(G),vt.init(),z=new FM(G,vt),de=new Oy(G,vt,e,z),D=new NM(G,vt),de.reversedDepthBuffer&&g&&D.buffers.depth.setReversed(!0),pt=new qy(G),R=new SM,y=new UM(G,vt,D,R,de,z,pt),K=new Wy(j),xe=new Jv(G),Le=new Uy(G,xe),Me=new jy(G,xe,pt,Le),Te=new Ky(G,Me,xe,Le,pt),ut=new $y(G,de,y),We=new ky(R),Ie=new xM(j,K,vt,de,Le,We),fe=new VM(j,R),_e=new MM,ke=new CM(vt),Ue=new Ny(j,K,D,Te,T,p),Pe=new IM(j,Te,de),ge=new GM(G,pt,de,D),mt=new Fy(G,vt,pt),wt=new Yy(G,vt,pt),pt.programs=Ie.programs,j.capabilities=de,j.extensions=vt,j.properties=R,j.renderLists=_e,j.shadowMap=Pe,j.state=D,j.info=pt}je(),C!==gi&&(N=new Jy(C,n.width,n.height,a,l));const Fe=new zM(j,G);this.xr=Fe,this.getContext=function(){return G},this.getContextAttributes=function(){return G.getContextAttributes()},this.forceContextLoss=function(){const A=vt.get("WEBGL_lose_context");A&&A.loseContext()},this.forceContextRestore=function(){const A=vt.get("WEBGL_lose_context");A&&A.restoreContext()},this.getPixelRatio=function(){return Xe},this.setPixelRatio=function(A){A!==void 0&&(Xe=A,this.setSize(Ge,qe,!1))},this.getSize=function(A){return A.set(Ge,qe)},this.setSize=function(A,q,ae=!0){if(Fe.isPresenting){yt("WebGLRenderer: Can't change size while VR device is presenting.");return}Ge=A,qe=q,n.width=Math.floor(A*Xe),n.height=Math.floor(q*Xe),ae===!0&&(n.style.width=A+"px",n.style.height=q+"px"),N!==null&&N.setSize(n.width,n.height),this.setViewport(0,0,A,q)},this.getDrawingBufferSize=function(A){return A.set(Ge*Xe,qe*Xe).floor()},this.setDrawingBufferSize=function(A,q,ae){Ge=A,qe=q,Xe=ae,n.width=Math.floor(A*ae),n.height=Math.floor(q*ae),this.setViewport(0,0,A,q)},this.setEffects=function(A){if(C===gi){Xt("THREE.WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(A){for(let q=0;q<A.length;q++)if(A[q].isOutputPass===!0){yt("THREE.WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}N.setEffects(A||[])},this.getCurrentViewport=function(A){return A.copy(Z)},this.getViewport=function(A){return A.copy(Se)},this.setViewport=function(A,q,ae,re){A.isVector4?Se.set(A.x,A.y,A.z,A.w):Se.set(A,q,ae,re),D.viewport(Z.copy(Se).multiplyScalar(Xe).round())},this.getScissor=function(A){return A.copy(ze)},this.setScissor=function(A,q,ae,re){A.isVector4?ze.set(A.x,A.y,A.z,A.w):ze.set(A,q,ae,re),D.scissor(ce.copy(ze).multiplyScalar(Xe).round())},this.getScissorTest=function(){return it},this.setScissorTest=function(A){D.setScissorTest(it=A)},this.setOpaqueSort=function(A){Q=A},this.setTransparentSort=function(A){Ae=A},this.getClearColor=function(A){return A.copy(Ue.getClearColor())},this.setClearColor=function(){Ue.setClearColor(...arguments)},this.getClearAlpha=function(){return Ue.getClearAlpha()},this.setClearAlpha=function(){Ue.setClearAlpha(...arguments)},this.clear=function(A=!0,q=!0,ae=!0){let re=0;if(A){let ie=!1;if(W!==null){const He=W.texture.format;ie=_.has(He)}if(ie){const He=W.texture.type,Je=v.has(He),Be=Ue.getClearColor(),rt=Ue.getClearAlpha(),ct=Be.r,At=Be.g,bt=Be.b;Je?(b[0]=ct,b[1]=At,b[2]=bt,b[3]=rt,G.clearBufferuiv(G.COLOR,0,b)):(L[0]=ct,L[1]=At,L[2]=bt,L[3]=rt,G.clearBufferiv(G.COLOR,0,L))}else re|=G.COLOR_BUFFER_BIT}q&&(re|=G.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),ae&&(re|=G.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),re!==0&&G.clear(re)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(A){A.setRenderer(this),Y=A},this.dispose=function(){n.removeEventListener("webglcontextlost",we,!1),n.removeEventListener("webglcontextrestored",Ze,!1),n.removeEventListener("webglcontextcreationerror",dt,!1),Ue.dispose(),_e.dispose(),ke.dispose(),R.dispose(),K.dispose(),Te.dispose(),Le.dispose(),ge.dispose(),Ie.dispose(),Fe.dispose(),Fe.removeEventListener("sessionstart",De),Fe.removeEventListener("sessionend",Ve),et.stop()};function we(A){A.preventDefault(),pm("WebGLRenderer: Context Lost."),O=!0}function Ze(){pm("WebGLRenderer: Context Restored."),O=!1;const A=pt.autoReset,q=Pe.enabled,ae=Pe.autoUpdate,re=Pe.needsUpdate,ie=Pe.type;je(),pt.autoReset=A,Pe.enabled=q,Pe.autoUpdate=ae,Pe.needsUpdate=re,Pe.type=ie}function dt(A){Xt("WebGLRenderer: A WebGL context could not be created. Reason: ",A.statusMessage)}function Mt(A){const q=A.target;q.removeEventListener("dispose",Mt),ye(q)}function ye(A){Ee(A),R.remove(A)}function Ee(A){const q=R.get(A).programs;q!==void 0&&(q.forEach(function(ae){Ie.releaseProgram(ae)}),A.isShaderMaterial&&Ie.releaseShaderCache(A))}this.renderBufferDirect=function(A,q,ae,re,ie,He){q===null&&(q=Gt);const Je=ie.isMesh&&ie.matrixWorld.determinant()<0,Be=nr(A,q,ae,re,ie);D.setMaterial(re,Je);let rt=ae.index,ct=1;if(re.wireframe===!0){if(rt=Me.getWireframeAttribute(ae),rt===void 0)return;ct=2}const At=ae.drawRange,bt=ae.attributes.position;let ot=At.start*ct,Wt=(At.start+At.count)*ct;He!==null&&(ot=Math.max(ot,He.start*ct),Wt=Math.min(Wt,(He.start+He.count)*ct)),rt!==null?(ot=Math.max(ot,0),Wt=Math.min(Wt,rt.count)):bt!=null&&(ot=Math.max(ot,0),Wt=Math.min(Wt,bt.count));const tn=Wt-ot;if(tn<0||tn===1/0)return;Le.setup(ie,re,Be,ae,rt);let un,Kt=mt;if(rt!==null&&(un=xe.get(rt),Kt=wt,Kt.setIndex(un)),ie.isMesh)re.wireframe===!0?(D.setLineWidth(re.wireframeLinewidth*ln()),Kt.setMode(G.LINES)):Kt.setMode(G.TRIANGLES);else if(ie.isLine){let Sn=re.linewidth;Sn===void 0&&(Sn=1),D.setLineWidth(Sn*ln()),ie.isLineSegments?Kt.setMode(G.LINES):ie.isLineLoop?Kt.setMode(G.LINE_LOOP):Kt.setMode(G.LINE_STRIP)}else ie.isPoints?Kt.setMode(G.POINTS):ie.isSprite&&Kt.setMode(G.TRIANGLES);if(ie.isBatchedMesh)if(vt.get("WEBGL_multi_draw"))Kt.renderMultiDraw(ie._multiDrawStarts,ie._multiDrawCounts,ie._multiDrawCount);else{const Sn=ie._multiDrawStarts,$e=ie._multiDrawCounts,Fn=ie._multiDrawCount,Lt=rt?xe.get(rt).bytesPerElement:1,Jn=R.get(re).currentProgram.getUniforms();for(let Qn=0;Qn<Fn;Qn++)Jn.setValue(G,"_gl_DrawID",Qn),Kt.render(Sn[Qn]/Lt,$e[Qn])}else if(ie.isInstancedMesh)Kt.renderInstances(ot,tn,ie.count);else if(ae.isInstancedBufferGeometry){const Sn=ae._maxInstanceCount!==void 0?ae._maxInstanceCount:1/0,$e=Math.min(ae.instanceCount,Sn);Kt.renderInstances(ot,tn,$e)}else Kt.render(ot,tn)};function pe(A,q,ae){A.transparent===!0&&A.side===Ti&&A.forceSinglePass===!1?(A.side=li,A.needsUpdate=!0,rn(A,q,ae),A.side=Kr,A.needsUpdate=!0,rn(A,q,ae),A.side=Ti):rn(A,q,ae)}this.compile=function(A,q,ae=null){ae===null&&(ae=A),I=ke.get(ae),I.init(q),w.push(I),ae.traverseVisible(function(ie){ie.isLight&&ie.layers.test(q.layers)&&(I.pushLight(ie),ie.castShadow&&I.pushShadow(ie))}),A!==ae&&A.traverseVisible(function(ie){ie.isLight&&ie.layers.test(q.layers)&&(I.pushLight(ie),ie.castShadow&&I.pushShadow(ie))}),I.setupLights();const re=new Set;return A.traverse(function(ie){if(!(ie.isMesh||ie.isPoints||ie.isLine||ie.isSprite))return;const He=ie.material;if(He)if(Array.isArray(He))for(let Je=0;Je<He.length;Je++){const Be=He[Je];pe(Be,ae,ie),re.add(Be)}else pe(He,ae,ie),re.add(He)}),I=w.pop(),re},this.compileAsync=function(A,q,ae=null){const re=this.compile(A,q,ae);return new Promise(ie=>{function He(){if(re.forEach(function(Je){R.get(Je).currentProgram.isReady()&&re.delete(Je)}),re.size===0){ie(A);return}setTimeout(He,10)}vt.get("KHR_parallel_shader_compile")!==null?He():setTimeout(He,10)})};let ve=null;function me(A){ve&&ve(A)}function De(){et.stop()}function Ve(){et.start()}const et=new N0;et.setAnimationLoop(me),typeof self<"u"&&et.setContext(self),this.setAnimationLoop=function(A){ve=A,Fe.setAnimationLoop(A),A===null?et.stop():et.start()},Fe.addEventListener("sessionstart",De),Fe.addEventListener("sessionend",Ve),this.render=function(A,q){if(q!==void 0&&q.isCamera!==!0){Xt("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(O===!0)return;Y!==null&&Y.renderStart(A,q);const ae=Fe.enabled===!0&&Fe.isPresenting===!0,re=N!==null&&(W===null||ae)&&N.begin(j,W);if(A.matrixWorldAutoUpdate===!0&&A.updateMatrixWorld(),q.parent===null&&q.matrixWorldAutoUpdate===!0&&q.updateMatrixWorld(),Fe.enabled===!0&&Fe.isPresenting===!0&&(N===null||N.isCompositing()===!1)&&(Fe.cameraAutoUpdate===!0&&Fe.updateCamera(q),q=Fe.getCamera()),A.isScene===!0&&A.onBeforeRender(j,A,q,W),I=ke.get(A,w.length),I.init(q),I.state.textureUnits=y.getTextureUnits(),w.push(I),Tt.multiplyMatrices(q.projectionMatrix,q.matrixWorldInverse),at.setFromProjectionMatrix(Tt,$i,q.reversedDepth),_t=this.localClippingEnabled,Nt=We.init(this.clippingPlanes,_t),B=_e.get(A,k.length),B.init(),k.push(B),Fe.enabled===!0&&Fe.isPresenting===!0){const Je=j.xr.getDepthSensingMesh();Je!==null&&Ut(Je,q,-1/0,j.sortObjects)}Ut(A,q,0,j.sortObjects),B.finish(),j.sortObjects===!0&&B.sort(Q,Ae),Bt=Fe.enabled===!1||Fe.isPresenting===!1||Fe.hasDepthSensing()===!1,Bt&&Ue.addToRenderList(B,A),this.info.render.frame++,Nt===!0&&We.beginShadows();const ie=I.state.shadowsArray;if(Pe.render(ie,A,q),Nt===!0&&We.endShadows(),this.info.autoReset===!0&&this.info.reset(),(re&&N.hasRenderPass())===!1){const Je=B.opaque,Be=B.transmissive;if(I.setupLights(),q.isArrayCamera){const rt=q.cameras;if(Be.length>0)for(let ct=0,At=rt.length;ct<At;ct++){const bt=rt[ct];cn(Je,Be,A,bt)}Bt&&Ue.render(A);for(let ct=0,At=rt.length;ct<At;ct++){const bt=rt[ct];Yt(B,A,bt,bt.viewport)}}else Be.length>0&&cn(Je,Be,A,q),Bt&&Ue.render(A),Yt(B,A,q)}W!==null&&he===0&&(y.updateMultisampleRenderTarget(W),y.updateRenderTargetMipmap(W)),re&&N.end(j),A.isScene===!0&&A.onAfterRender(j,A,q),Le.resetDefaultState(),te=-1,$=null,w.pop(),w.length>0?(I=w[w.length-1],y.setTextureUnits(I.state.textureUnits),Nt===!0&&We.setGlobalState(j.clippingPlanes,I.state.camera)):I=null,k.pop(),k.length>0?B=k[k.length-1]:B=null,Y!==null&&Y.renderEnd()};function Ut(A,q,ae,re){if(A.visible===!1)return;if(A.layers.test(q.layers)){if(A.isGroup)ae=A.renderOrder;else if(A.isLOD)A.autoUpdate===!0&&A.update(q);else if(A.isLightProbeGrid)I.pushLightProbeGrid(A);else if(A.isLight)I.pushLight(A),A.castShadow&&I.pushShadow(A);else if(A.isSprite){if(!A.frustumCulled||at.intersectsSprite(A)){re&&gt.setFromMatrixPosition(A.matrixWorld).applyMatrix4(Tt);const Je=Te.update(A),Be=A.material;Be.visible&&B.push(A,Je,Be,ae,gt.z,null)}}else if((A.isMesh||A.isLine||A.isPoints)&&(!A.frustumCulled||at.intersectsObject(A))){const Je=Te.update(A),Be=A.material;if(re&&(A.boundingSphere!==void 0?(A.boundingSphere===null&&A.computeBoundingSphere(),gt.copy(A.boundingSphere.center)):(Je.boundingSphere===null&&Je.computeBoundingSphere(),gt.copy(Je.boundingSphere.center)),gt.applyMatrix4(A.matrixWorld).applyMatrix4(Tt)),Array.isArray(Be)){const rt=Je.groups;for(let ct=0,At=rt.length;ct<At;ct++){const bt=rt[ct],ot=Be[bt.materialIndex];ot&&ot.visible&&B.push(A,Je,ot,ae,gt.z,bt)}}else Be.visible&&B.push(A,Je,Be,ae,gt.z,null)}}const He=A.children;for(let Je=0,Be=He.length;Je<Be;Je++)Ut(He[Je],q,ae,re)}function Yt(A,q,ae,re){const{opaque:ie,transmissive:He,transparent:Je}=A;I.setupLightsView(ae),Nt===!0&&We.setGlobalState(j.clippingPlanes,ae),re&&D.viewport(Z.copy(re)),ie.length>0&&fn(ie,q,ae),He.length>0&&fn(He,q,ae),Je.length>0&&fn(Je,q,ae),D.buffers.depth.setTest(!0),D.buffers.depth.setMask(!0),D.buffers.color.setMask(!0),D.setPolygonOffset(!1)}function cn(A,q,ae,re){if((ae.isScene===!0?ae.overrideMaterial:null)!==null)return;if(I.state.transmissionRenderTarget[re.id]===void 0){const ot=vt.has("EXT_color_buffer_half_float")||vt.has("EXT_color_buffer_float");I.state.transmissionRenderTarget[re.id]=new Ji(1,1,{generateMipmaps:!0,type:ot?Sr:gi,minFilter:vs,samples:Math.max(4,de.samples),stencilBuffer:l,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Ht.workingColorSpace})}const He=I.state.transmissionRenderTarget[re.id],Je=re.viewport||Z;He.setSize(Je.z*j.transmissionResolutionScale,Je.w*j.transmissionResolutionScale);const Be=j.getRenderTarget(),rt=j.getActiveCubeFace(),ct=j.getActiveMipmapLevel();j.setRenderTarget(He),j.getClearColor(F),ne=j.getClearAlpha(),ne<1&&j.setClearColor(16777215,.5),j.clear(),Bt&&Ue.render(ae);const At=j.toneMapping;j.toneMapping=Zi;const bt=re.viewport;if(re.viewport!==void 0&&(re.viewport=void 0),I.setupLightsView(re),Nt===!0&&We.setGlobalState(j.clippingPlanes,re),fn(A,ae,re),y.updateMultisampleRenderTarget(He),y.updateRenderTargetMipmap(He),vt.has("WEBGL_multisampled_render_to_texture")===!1){let ot=!1;for(let Wt=0,tn=q.length;Wt<tn;Wt++){const un=q[Wt],{object:Kt,geometry:Sn,material:$e,group:Fn}=un;if($e.side===Ti&&Kt.layers.test(re.layers)){const Lt=$e.side;$e.side=li,$e.needsUpdate=!0,Ft(Kt,ae,re,Sn,$e,Fn),$e.side=Lt,$e.needsUpdate=!0,ot=!0}}ot===!0&&(y.updateMultisampleRenderTarget(He),y.updateRenderTargetMipmap(He))}j.setRenderTarget(Be,rt,ct),j.setClearColor(F,ne),bt!==void 0&&(re.viewport=bt),j.toneMapping=At}function fn(A,q,ae){const re=q.isScene===!0?q.overrideMaterial:null;for(let ie=0,He=A.length;ie<He;ie++){const Je=A[ie],{object:Be,geometry:rt,group:ct}=Je;let At=Je.material;At.allowOverride===!0&&re!==null&&(At=re),Be.layers.test(ae.layers)&&Ft(Be,q,ae,rt,At,ct)}}function Ft(A,q,ae,re,ie,He){A.onBeforeRender(j,q,ae,re,ie,He),A.modelViewMatrix.multiplyMatrices(ae.matrixWorldInverse,A.matrixWorld),A.normalMatrix.getNormalMatrix(A.modelViewMatrix),ie.onBeforeRender(j,q,ae,re,A,He),ie.transparent===!0&&ie.side===Ti&&ie.forceSinglePass===!1?(ie.side=li,ie.needsUpdate=!0,j.renderBufferDirect(ae,q,re,ie,A,He),ie.side=Kr,ie.needsUpdate=!0,j.renderBufferDirect(ae,q,re,ie,A,He),ie.side=Ti):j.renderBufferDirect(ae,q,re,ie,A,He),A.onAfterRender(j,q,ae,re,ie,He)}function rn(A,q,ae){q.isScene!==!0&&(q=Gt);const re=R.get(A),ie=I.state.lights,He=I.state.shadowsArray,Je=ie.state.version,Be=Ie.getParameters(A,ie.state,He,q,ae,I.state.lightProbeGridArray),rt=Ie.getProgramCacheKey(Be);let ct=re.programs;re.environment=A.isMeshStandardMaterial||A.isMeshLambertMaterial||A.isMeshPhongMaterial?q.environment:null,re.fog=q.fog;const At=A.isMeshStandardMaterial||A.isMeshLambertMaterial&&!A.envMap||A.isMeshPhongMaterial&&!A.envMap;re.envMap=K.get(A.envMap||re.environment,At),re.envMapRotation=re.environment!==null&&A.envMap===null?q.environmentRotation:A.envMapRotation,ct===void 0&&(A.addEventListener("dispose",Mt),ct=new Map,re.programs=ct);let bt=ct.get(rt);if(bt!==void 0){if(re.currentProgram===bt&&re.lightsStateVersion===Je)return Un(A,Be),bt}else Be.uniforms=Ie.getUniforms(A),Y!==null&&A.isNodeMaterial&&Y.build(A,ae,Be),A.onBeforeCompile(Be,j),bt=Ie.acquireProgram(Be,rt),ct.set(rt,bt),re.uniforms=Be.uniforms;const ot=re.uniforms;return(!A.isShaderMaterial&&!A.isRawShaderMaterial||A.clipping===!0)&&(ot.clippingPlanes=We.uniform),Un(A,Be),re.needsLights=ws(A),re.lightsStateVersion=Je,re.needsLights&&(ot.ambientLightColor.value=ie.state.ambient,ot.lightProbe.value=ie.state.probe,ot.directionalLights.value=ie.state.directional,ot.directionalLightShadows.value=ie.state.directionalShadow,ot.spotLights.value=ie.state.spot,ot.spotLightShadows.value=ie.state.spotShadow,ot.rectAreaLights.value=ie.state.rectArea,ot.ltc_1.value=ie.state.rectAreaLTC1,ot.ltc_2.value=ie.state.rectAreaLTC2,ot.pointLights.value=ie.state.point,ot.pointLightShadows.value=ie.state.pointShadow,ot.hemisphereLights.value=ie.state.hemi,ot.directionalShadowMatrix.value=ie.state.directionalShadowMatrix,ot.spotLightMatrix.value=ie.state.spotLightMatrix,ot.spotLightMap.value=ie.state.spotLightMap,ot.pointShadowMatrix.value=ie.state.pointShadowMatrix),re.lightProbeGrid=I.state.lightProbeGridArray.length>0,re.currentProgram=bt,re.uniformsList=null,bt}function An(A){if(A.uniformsList===null){const q=A.currentProgram.getUniforms();A.uniformsList=Hl.seqWithValue(q.seq,A.uniforms)}return A.uniformsList}function Un(A,q){const ae=R.get(A);ae.outputColorSpace=q.outputColorSpace,ae.batching=q.batching,ae.batchingColor=q.batchingColor,ae.instancing=q.instancing,ae.instancingColor=q.instancingColor,ae.instancingMorph=q.instancingMorph,ae.skinning=q.skinning,ae.morphTargets=q.morphTargets,ae.morphNormals=q.morphNormals,ae.morphColors=q.morphColors,ae.morphTargetsCount=q.morphTargetsCount,ae.numClippingPlanes=q.numClippingPlanes,ae.numIntersection=q.numClipIntersection,ae.vertexAlphas=q.vertexAlphas,ae.vertexTangents=q.vertexTangents,ae.toneMapping=q.toneMapping}function Bi(A,q){if(A.length===0)return null;if(A.length===1)return A[0].texture!==null?A[0]:null;P.setFromMatrixPosition(q.matrixWorld);for(let ae=0,re=A.length;ae<re;ae++){const ie=A[ae];if(ie.texture!==null&&ie.boundingBox.containsPoint(P))return ie}return null}function nr(A,q,ae,re,ie){q.isScene!==!0&&(q=Gt),y.resetTextureUnits();const He=q.fog,Je=re.isMeshStandardMaterial||re.isMeshLambertMaterial||re.isMeshPhongMaterial?q.environment:null,Be=W===null?j.outputColorSpace:W.isXRRenderTarget===!0?W.texture.colorSpace:Ht.workingColorSpace,rt=re.isMeshStandardMaterial||re.isMeshLambertMaterial&&!re.envMap||re.isMeshPhongMaterial&&!re.envMap,ct=K.get(re.envMap||Je,rt),At=re.vertexColors===!0&&!!ae.attributes.color&&ae.attributes.color.itemSize===4,bt=!!ae.attributes.tangent&&(!!re.normalMap||re.anisotropy>0),ot=!!ae.morphAttributes.position,Wt=!!ae.morphAttributes.normal,tn=!!ae.morphAttributes.color;let un=Zi;re.toneMapped&&(W===null||W.isXRRenderTarget===!0)&&(un=j.toneMapping);const Kt=ae.morphAttributes.position||ae.morphAttributes.normal||ae.morphAttributes.color,Sn=Kt!==void 0?Kt.length:0,$e=R.get(re),Fn=I.state.lights;if(Nt===!0&&(_t===!0||A!==$)){const Zt=A===$&&re.id===te;We.setState(re,A,Zt)}let Lt=!1;re.version===$e.__version?($e.needsLights&&$e.lightsStateVersion!==Fn.state.version||$e.outputColorSpace!==Be||ie.isBatchedMesh&&$e.batching===!1||!ie.isBatchedMesh&&$e.batching===!0||ie.isBatchedMesh&&$e.batchingColor===!0&&ie.colorTexture===null||ie.isBatchedMesh&&$e.batchingColor===!1&&ie.colorTexture!==null||ie.isInstancedMesh&&$e.instancing===!1||!ie.isInstancedMesh&&$e.instancing===!0||ie.isSkinnedMesh&&$e.skinning===!1||!ie.isSkinnedMesh&&$e.skinning===!0||ie.isInstancedMesh&&$e.instancingColor===!0&&ie.instanceColor===null||ie.isInstancedMesh&&$e.instancingColor===!1&&ie.instanceColor!==null||ie.isInstancedMesh&&$e.instancingMorph===!0&&ie.morphTexture===null||ie.isInstancedMesh&&$e.instancingMorph===!1&&ie.morphTexture!==null||$e.envMap!==ct||re.fog===!0&&$e.fog!==He||$e.numClippingPlanes!==void 0&&($e.numClippingPlanes!==We.numPlanes||$e.numIntersection!==We.numIntersection)||$e.vertexAlphas!==At||$e.vertexTangents!==bt||$e.morphTargets!==ot||$e.morphNormals!==Wt||$e.morphColors!==tn||$e.toneMapping!==un||$e.morphTargetsCount!==Sn||!!$e.lightProbeGrid!=I.state.lightProbeGridArray.length>0)&&(Lt=!0):(Lt=!0,$e.__version=re.version);let Jn=$e.currentProgram;Lt===!0&&(Jn=rn(re,q,ie),Y&&re.isNodeMaterial&&Y.onUpdateProgram(re,Jn,$e));let Qn=!1,Dt=!1,ir=!1;const $t=Jn.getUniforms(),sn=$e.uniforms;if(D.useProgram(Jn.program)&&(Qn=!0,Dt=!0,ir=!0),re.id!==te&&(te=re.id,Dt=!0),$e.needsLights){const Zt=Bi(I.state.lightProbeGridArray,ie);$e.lightProbeGrid!==Zt&&($e.lightProbeGrid=Zt,Dt=!0)}if(Qn||$!==A){D.buffers.depth.getReversed()&&A.reversedDepth!==!0&&(A._reversedDepth=!0,A.updateProjectionMatrix()),$t.setValue(G,"projectionMatrix",A.projectionMatrix),$t.setValue(G,"viewMatrix",A.matrixWorldInverse);const bi=$t.map.cameraPosition;bi!==void 0&&bi.setValue(G,Ot.setFromMatrixPosition(A.matrixWorld)),de.logarithmicDepthBuffer&&$t.setValue(G,"logDepthBufFC",2/(Math.log(A.far+1)/Math.LN2)),(re.isMeshPhongMaterial||re.isMeshToonMaterial||re.isMeshLambertMaterial||re.isMeshBasicMaterial||re.isMeshStandardMaterial||re.isShaderMaterial)&&$t.setValue(G,"isOrthographic",A.isOrthographicCamera===!0),$!==A&&($=A,Dt=!0,ir=!0)}if($e.needsLights&&(Fn.state.directionalShadowMap.length>0&&$t.setValue(G,"directionalShadowMap",Fn.state.directionalShadowMap,y),Fn.state.spotShadowMap.length>0&&$t.setValue(G,"spotShadowMap",Fn.state.spotShadowMap,y),Fn.state.pointShadowMap.length>0&&$t.setValue(G,"pointShadowMap",Fn.state.pointShadowMap,y)),ie.isSkinnedMesh){$t.setOptional(G,ie,"bindMatrix"),$t.setOptional(G,ie,"bindMatrixInverse");const Zt=ie.skeleton;Zt&&(Zt.boneTexture===null&&Zt.computeBoneTexture(),$t.setValue(G,"boneTexture",Zt.boneTexture,y))}ie.isBatchedMesh&&($t.setOptional(G,ie,"batchingTexture"),$t.setValue(G,"batchingTexture",ie._matricesTexture,y),$t.setOptional(G,ie,"batchingIdTexture"),$t.setValue(G,"batchingIdTexture",ie._indirectTexture,y),$t.setOptional(G,ie,"batchingColorTexture"),ie._colorsTexture!==null&&$t.setValue(G,"batchingColorTexture",ie._colorsTexture,y));const Ai=ae.morphAttributes;if((Ai.position!==void 0||Ai.normal!==void 0||Ai.color!==void 0)&&ut.update(ie,ae,Jn),(Dt||$e.receiveShadow!==ie.receiveShadow)&&($e.receiveShadow=ie.receiveShadow,$t.setValue(G,"receiveShadow",ie.receiveShadow)),(re.isMeshStandardMaterial||re.isMeshLambertMaterial||re.isMeshPhongMaterial)&&re.envMap===null&&q.environment!==null&&(sn.envMapIntensity.value=q.environmentIntensity),sn.dfgLUT!==void 0&&(sn.dfgLUT.value=XM()),Dt){if($t.setValue(G,"toneMappingExposure",j.toneMappingExposure),$e.needsLights&&Es(sn,ir),He&&re.fog===!0&&fe.refreshFogUniforms(sn,He),fe.refreshMaterialUniforms(sn,re,Xe,qe,I.state.transmissionRenderTarget[A.id]),$e.needsLights&&$e.lightProbeGrid){const Zt=$e.lightProbeGrid;sn.probesSH.value=Zt.texture,sn.probesMin.value.copy(Zt.boundingBox.min),sn.probesMax.value.copy(Zt.boundingBox.max),sn.probesResolution.value.copy(Zt.resolution)}Hl.upload(G,An($e),sn,y)}if(re.isShaderMaterial&&re.uniformsNeedUpdate===!0&&(Hl.upload(G,An($e),sn,y),re.uniformsNeedUpdate=!1),re.isSpriteMaterial&&$t.setValue(G,"center",ie.center),$t.setValue(G,"modelViewMatrix",ie.modelViewMatrix),$t.setValue(G,"normalMatrix",ie.normalMatrix),$t.setValue(G,"modelMatrix",ie.matrixWorld),re.uniformsGroups!==void 0){const Zt=re.uniformsGroups;for(let bi=0,zi=Zt.length;bi<zi;bi++){const Jr=Zt[bi];ge.update(Jr,Jn),ge.bind(Jr,Jn)}}return Jn}function Es(A,q){A.ambientLightColor.needsUpdate=q,A.lightProbe.needsUpdate=q,A.directionalLights.needsUpdate=q,A.directionalLightShadows.needsUpdate=q,A.pointLights.needsUpdate=q,A.pointLightShadows.needsUpdate=q,A.spotLights.needsUpdate=q,A.spotLightShadows.needsUpdate=q,A.rectAreaLights.needsUpdate=q,A.hemisphereLights.needsUpdate=q}function ws(A){return A.isMeshLambertMaterial||A.isMeshToonMaterial||A.isMeshPhongMaterial||A.isMeshStandardMaterial||A.isShadowMaterial||A.isShaderMaterial&&A.lights===!0}this.getActiveCubeFace=function(){return oe},this.getActiveMipmapLevel=function(){return he},this.getRenderTarget=function(){return W},this.setRenderTargetTextures=function(A,q,ae){const re=R.get(A);re.__autoAllocateDepthBuffer=A.resolveDepthBuffer===!1,re.__autoAllocateDepthBuffer===!1&&(re.__useRenderToTexture=!1),R.get(A.texture).__webglTexture=q,R.get(A.depthTexture).__webglTexture=re.__autoAllocateDepthBuffer?void 0:ae,re.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(A,q){const ae=R.get(A);ae.__webglFramebuffer=q,ae.__useDefaultFramebuffer=q===void 0};const en=G.createFramebuffer();this.setRenderTarget=function(A,q=0,ae=0){W=A,oe=q,he=ae;let re=null,ie=!1,He=!1;if(A){const Be=R.get(A);if(Be.__useDefaultFramebuffer!==void 0){D.bindFramebuffer(G.FRAMEBUFFER,Be.__webglFramebuffer),Z.copy(A.viewport),ce.copy(A.scissor),ue=A.scissorTest,D.viewport(Z),D.scissor(ce),D.setScissorTest(ue),te=-1;return}else if(Be.__webglFramebuffer===void 0)y.setupRenderTarget(A);else if(Be.__hasExternalTextures)y.rebindTextures(A,R.get(A.texture).__webglTexture,R.get(A.depthTexture).__webglTexture);else if(A.depthBuffer){const At=A.depthTexture;if(Be.__boundDepthTexture!==At){if(At!==null&&R.has(At)&&(A.width!==At.image.width||A.height!==At.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");y.setupDepthRenderbuffer(A)}}const rt=A.texture;(rt.isData3DTexture||rt.isDataArrayTexture||rt.isCompressedArrayTexture)&&(He=!0);const ct=R.get(A).__webglFramebuffer;A.isWebGLCubeRenderTarget?(Array.isArray(ct[q])?re=ct[q][ae]:re=ct[q],ie=!0):A.samples>0&&y.useMultisampledRTT(A)===!1?re=R.get(A).__webglMultisampledFramebuffer:Array.isArray(ct)?re=ct[ae]:re=ct,Z.copy(A.viewport),ce.copy(A.scissor),ue=A.scissorTest}else Z.copy(Se).multiplyScalar(Xe).floor(),ce.copy(ze).multiplyScalar(Xe).floor(),ue=it;if(ae!==0&&(re=en),D.bindFramebuffer(G.FRAMEBUFFER,re)&&D.drawBuffers(A,re),D.viewport(Z),D.scissor(ce),D.setScissorTest(ue),ie){const Be=R.get(A.texture);G.framebufferTexture2D(G.FRAMEBUFFER,G.COLOR_ATTACHMENT0,G.TEXTURE_CUBE_MAP_POSITIVE_X+q,Be.__webglTexture,ae)}else if(He){const Be=q;for(let rt=0;rt<A.textures.length;rt++){const ct=R.get(A.textures[rt]);G.framebufferTextureLayer(G.FRAMEBUFFER,G.COLOR_ATTACHMENT0+rt,ct.__webglTexture,ae,Be)}}else if(A!==null&&ae!==0){const Be=R.get(A.texture);G.framebufferTexture2D(G.FRAMEBUFFER,G.COLOR_ATTACHMENT0,G.TEXTURE_2D,Be.__webglTexture,ae)}te=-1},this.readRenderTargetPixels=function(A,q,ae,re,ie,He,Je,Be=0){if(!(A&&A.isWebGLRenderTarget)){Xt("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let rt=R.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&Je!==void 0&&(rt=rt[Je]),rt){D.bindFramebuffer(G.FRAMEBUFFER,rt);try{const ct=A.textures[Be],At=ct.format,bt=ct.type;if(A.textures.length>1&&G.readBuffer(G.COLOR_ATTACHMENT0+Be),!de.textureFormatReadable(At)){Xt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!de.textureTypeReadable(bt)){Xt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}q>=0&&q<=A.width-re&&ae>=0&&ae<=A.height-ie&&G.readPixels(q,ae,re,ie,z.convert(At),z.convert(bt),He)}finally{const ct=W!==null?R.get(W).__webglFramebuffer:null;D.bindFramebuffer(G.FRAMEBUFFER,ct)}}},this.readRenderTargetPixelsAsync=async function(A,q,ae,re,ie,He,Je,Be=0){if(!(A&&A.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let rt=R.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&Je!==void 0&&(rt=rt[Je]),rt)if(q>=0&&q<=A.width-re&&ae>=0&&ae<=A.height-ie){D.bindFramebuffer(G.FRAMEBUFFER,rt);const ct=A.textures[Be],At=ct.format,bt=ct.type;if(A.textures.length>1&&G.readBuffer(G.COLOR_ATTACHMENT0+Be),!de.textureFormatReadable(At))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!de.textureTypeReadable(bt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const ot=G.createBuffer();G.bindBuffer(G.PIXEL_PACK_BUFFER,ot),G.bufferData(G.PIXEL_PACK_BUFFER,He.byteLength,G.STREAM_READ),G.readPixels(q,ae,re,ie,z.convert(At),z.convert(bt),0);const Wt=W!==null?R.get(W).__webglFramebuffer:null;D.bindFramebuffer(G.FRAMEBUFFER,Wt);const tn=G.fenceSync(G.SYNC_GPU_COMMANDS_COMPLETE,0);return G.flush(),await cv(G,tn,4),G.bindBuffer(G.PIXEL_PACK_BUFFER,ot),G.getBufferSubData(G.PIXEL_PACK_BUFFER,0,He),G.deleteBuffer(ot),G.deleteSync(tn),He}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(A,q=null,ae=0){const re=Math.pow(2,-ae),ie=Math.floor(A.image.width*re),He=Math.floor(A.image.height*re),Je=q!==null?q.x:0,Be=q!==null?q.y:0;y.setTexture2D(A,0),G.copyTexSubImage2D(G.TEXTURE_2D,ae,0,0,Je,Be,ie,He),D.unbindTexture()};const ec=G.createFramebuffer(),vo=G.createFramebuffer();this.copyTextureToTexture=function(A,q,ae=null,re=null,ie=0,He=0){let Je,Be,rt,ct,At,bt,ot,Wt,tn;const un=A.isCompressedTexture?A.mipmaps[He]:A.image;if(ae!==null)Je=ae.max.x-ae.min.x,Be=ae.max.y-ae.min.y,rt=ae.isBox3?ae.max.z-ae.min.z:1,ct=ae.min.x,At=ae.min.y,bt=ae.isBox3?ae.min.z:0;else{const sn=Math.pow(2,-ie);Je=Math.floor(un.width*sn),Be=Math.floor(un.height*sn),A.isDataArrayTexture?rt=un.depth:A.isData3DTexture?rt=Math.floor(un.depth*sn):rt=1,ct=0,At=0,bt=0}re!==null?(ot=re.x,Wt=re.y,tn=re.z):(ot=0,Wt=0,tn=0);const Kt=z.convert(q.format),Sn=z.convert(q.type);let $e;q.isData3DTexture?(y.setTexture3D(q,0),$e=G.TEXTURE_3D):q.isDataArrayTexture||q.isCompressedArrayTexture?(y.setTexture2DArray(q,0),$e=G.TEXTURE_2D_ARRAY):(y.setTexture2D(q,0),$e=G.TEXTURE_2D),D.activeTexture(G.TEXTURE0),D.pixelStorei(G.UNPACK_FLIP_Y_WEBGL,q.flipY),D.pixelStorei(G.UNPACK_PREMULTIPLY_ALPHA_WEBGL,q.premultiplyAlpha),D.pixelStorei(G.UNPACK_ALIGNMENT,q.unpackAlignment);const Fn=D.getParameter(G.UNPACK_ROW_LENGTH),Lt=D.getParameter(G.UNPACK_IMAGE_HEIGHT),Jn=D.getParameter(G.UNPACK_SKIP_PIXELS),Qn=D.getParameter(G.UNPACK_SKIP_ROWS),Dt=D.getParameter(G.UNPACK_SKIP_IMAGES);D.pixelStorei(G.UNPACK_ROW_LENGTH,un.width),D.pixelStorei(G.UNPACK_IMAGE_HEIGHT,un.height),D.pixelStorei(G.UNPACK_SKIP_PIXELS,ct),D.pixelStorei(G.UNPACK_SKIP_ROWS,At),D.pixelStorei(G.UNPACK_SKIP_IMAGES,bt);const ir=A.isDataArrayTexture||A.isData3DTexture,$t=q.isDataArrayTexture||q.isData3DTexture;if(A.isDepthTexture){const sn=R.get(A),Ai=R.get(q),Zt=R.get(sn.__renderTarget),bi=R.get(Ai.__renderTarget);D.bindFramebuffer(G.READ_FRAMEBUFFER,Zt.__webglFramebuffer),D.bindFramebuffer(G.DRAW_FRAMEBUFFER,bi.__webglFramebuffer);for(let zi=0;zi<rt;zi++)ir&&(G.framebufferTextureLayer(G.READ_FRAMEBUFFER,G.COLOR_ATTACHMENT0,R.get(A).__webglTexture,ie,bt+zi),G.framebufferTextureLayer(G.DRAW_FRAMEBUFFER,G.COLOR_ATTACHMENT0,R.get(q).__webglTexture,He,tn+zi)),G.blitFramebuffer(ct,At,Je,Be,ot,Wt,Je,Be,G.DEPTH_BUFFER_BIT,G.NEAREST);D.bindFramebuffer(G.READ_FRAMEBUFFER,null),D.bindFramebuffer(G.DRAW_FRAMEBUFFER,null)}else if(ie!==0||A.isRenderTargetTexture||R.has(A)){const sn=R.get(A),Ai=R.get(q);D.bindFramebuffer(G.READ_FRAMEBUFFER,ec),D.bindFramebuffer(G.DRAW_FRAMEBUFFER,vo);for(let Zt=0;Zt<rt;Zt++)ir?G.framebufferTextureLayer(G.READ_FRAMEBUFFER,G.COLOR_ATTACHMENT0,sn.__webglTexture,ie,bt+Zt):G.framebufferTexture2D(G.READ_FRAMEBUFFER,G.COLOR_ATTACHMENT0,G.TEXTURE_2D,sn.__webglTexture,ie),$t?G.framebufferTextureLayer(G.DRAW_FRAMEBUFFER,G.COLOR_ATTACHMENT0,Ai.__webglTexture,He,tn+Zt):G.framebufferTexture2D(G.DRAW_FRAMEBUFFER,G.COLOR_ATTACHMENT0,G.TEXTURE_2D,Ai.__webglTexture,He),ie!==0?G.blitFramebuffer(ct,At,Je,Be,ot,Wt,Je,Be,G.COLOR_BUFFER_BIT,G.NEAREST):$t?G.copyTexSubImage3D($e,He,ot,Wt,tn+Zt,ct,At,Je,Be):G.copyTexSubImage2D($e,He,ot,Wt,ct,At,Je,Be);D.bindFramebuffer(G.READ_FRAMEBUFFER,null),D.bindFramebuffer(G.DRAW_FRAMEBUFFER,null)}else $t?A.isDataTexture||A.isData3DTexture?G.texSubImage3D($e,He,ot,Wt,tn,Je,Be,rt,Kt,Sn,un.data):q.isCompressedArrayTexture?G.compressedTexSubImage3D($e,He,ot,Wt,tn,Je,Be,rt,Kt,un.data):G.texSubImage3D($e,He,ot,Wt,tn,Je,Be,rt,Kt,Sn,un):A.isDataTexture?G.texSubImage2D(G.TEXTURE_2D,He,ot,Wt,Je,Be,Kt,Sn,un.data):A.isCompressedTexture?G.compressedTexSubImage2D(G.TEXTURE_2D,He,ot,Wt,un.width,un.height,Kt,un.data):G.texSubImage2D(G.TEXTURE_2D,He,ot,Wt,Je,Be,Kt,Sn,un);D.pixelStorei(G.UNPACK_ROW_LENGTH,Fn),D.pixelStorei(G.UNPACK_IMAGE_HEIGHT,Lt),D.pixelStorei(G.UNPACK_SKIP_PIXELS,Jn),D.pixelStorei(G.UNPACK_SKIP_ROWS,Qn),D.pixelStorei(G.UNPACK_SKIP_IMAGES,Dt),He===0&&q.generateMipmaps&&G.generateMipmap($e),D.unbindTexture()},this.initRenderTarget=function(A){R.get(A).__webglFramebuffer===void 0&&y.setupRenderTarget(A)},this.initTexture=function(A){A.isCubeTexture?y.setTextureCube(A,0):A.isData3DTexture?y.setTexture3D(A,0):A.isDataArrayTexture||A.isCompressedArrayTexture?y.setTexture2DArray(A,0):y.setTexture2D(A,0),D.unbindTexture()},this.resetState=function(){oe=0,he=0,W=null,D.reset(),Le.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return $i}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const n=this.getContext();n.drawingBufferColorSpace=Ht._getDrawingBufferColorSpace(e),n.unpackColorSpace=Ht._getUnpackColorSpace()}}const Qt=[{id:"seating",label:"Adaptive Seating Clusters",icon:"⬡",accent:"#C4905A",hex:12882010,pos:[-3.8,0,2.8],camPos:[-1.2,2.4,7.2],lookAt:[-3.8,1.1,2.8],desc:"Reconfigurable modular seating in semi-private pods. Ergonomic lounge chairs with movable acoustic partitions let patients choose between solitude and social warmth.",features:["Modular sofa + ottoman clusters","Acoustic privacy wing panels","Wireless charging tabletops","Wheelchair-accessible clearances"],metric:"↓ 35% reported isolation"},{id:"biophilic",label:"Biophilic Micro-Garden",icon:"❧",accent:"#4A8A58",hex:4885080,pos:[3.8,0,2.8],camPos:[1.2,2.4,7.2],lookAt:[3.8,1.4,2.8],desc:"A curated living moss wall, specimen trees, and a recirculating water basin bring measurable stress relief. Natural-spectrum light from clerestory windows completes the biophilic immersion.",features:["4 m × 2.8 m living moss wall","Recirculating water basin","Natural-spectrum clerestory","Terracotta planter clusters"],metric:"↓ 28% cortisol stress markers"},{id:"digital",label:"Digital Wellness Hub",icon:"◈",accent:"#5572C4",hex:5599940,pos:[3.8,0,-2.8],camPos:[1.2,2.4,-6.2],lookAt:[3.8,1.4,-2.8],desc:"Touchless kiosks in organic alcoves deliver real-time queue updates, guided breathing, and ambient nature loops — designed to inform without overwhelming.",features:["Real-time queue status","Guided breathing animations","Nature ambient visuals","Motion-sensing interaction"],metric:"↓ 20% perceived wait time"},{id:"calm",label:"Calm Engagement Zone",icon:"◎",accent:"#8A5898",hex:9066648,pos:[-3.8,0,-2.8],camPos:[-1.2,2.4,-6.2],lookAt:[-3.8,1.1,-2.8],desc:"A low-stimulation alcove for reading, art, and guided audio meditation. Full acoustic dampening and warm amber light create a personal refuge within the waiting space.",features:["Curated book corner","Art & craft station","Guided meditation audio","Full acoustic wall panels"],metric:"↓ 32% anxiety self-reports"}],YM=[{pos:[0,1.7,5.8],lookAt:[0,1.2,0],dur:2.5,zoneIdx:-1},{pos:[-1.2,2,5.5],lookAt:[-3.8,1.1,2.8],dur:2.5,zoneIdx:0},{pos:[-1.8,1.7,3.8],lookAt:[-3.8,1,2.8],dur:4,zoneIdx:0},{pos:[1,1.8,4.2],lookAt:[3.8,1.4,2.8],dur:2.5,zoneIdx:1},{pos:[2,1.7,3.4],lookAt:[4.5,1.2,3],dur:4,zoneIdx:1},{pos:[1,1.8,-.5],lookAt:[3.8,1.4,-2.8],dur:2.5,zoneIdx:2},{pos:[2,1.7,-2.2],lookAt:[3.8,1.5,-3.2],dur:4,zoneIdx:2},{pos:[-1,1.8,-1],lookAt:[-3.8,1.1,-2.8],dur:2.5,zoneIdx:3},{pos:[-2,1.7,-2.5],lookAt:[-3.8,1,-2.8],dur:4,zoneIdx:3},{pos:[0,4.5,8],lookAt:[0,1,0],dur:3,zoneIdx:-1}],Tn=[{title:"The Problem",text:"Hospital waiting rooms cause stress, anxiety, and discomfort. Patients often spend hours in sterile, noisy spaces with harsh fluorescent lighting — worsening their health outcomes before treatment even begins.",sub:"This prototype reimagines the waiting experience using evidence-based design.",cam:null,highlight:null},{title:"Navigate the Space",text:"Drag your mouse (or swipe on mobile / touchpad) to orbit the 3D model around. Try it now!",sub:"You can rotate the view in any direction to explore the architecture.",cam:null,highlight:"viewport",requiredAction:"orbit"},{title:"Zoom In & Out",text:"Scroll your mouse wheel (or pinch on mobile / two-finger swipe on touchpad) to zoom closer or further away from the model. Try it now!",sub:"Try scrolling now to see the space up close.",cam:null,highlight:"viewport",requiredAction:"zoom"},{title:"Zone Navigation",text:"Click any of these zone buttons at the top to fly the camera into that area and read about its design interventions.",sub:"Each zone addresses a specific aspect of patient wellbeing.",cam:null,highlight:"zones",requiredAction:"click_zone"},{title:"⬡ Adaptive Seating Clusters",text:"Reconfigurable modular seating in semi-private pods. Ergonomic lounge chairs with acoustic partitions let patients choose between solitude and social warmth.",sub:"↓ 35% reported isolation",cam:{pos:[-1.2,2.4,7.2],lookAt:[-3.8,1.1,2.8]},highlight:null},{title:"❧ Biophilic Micro-Garden",text:"A living moss wall, specimen trees, and a recirculating water basin bring measurable stress relief. Natural-spectrum light completes the biophilic immersion.",sub:"↓ 28% cortisol stress markers",cam:{pos:[1.2,2.4,7.2],lookAt:[3.8,1.4,2.8]},highlight:null},{title:"◈ Digital Wellness Hub",text:"Touchless kiosks deliver real-time queue updates, guided breathing exercises, and ambient nature loops — designed to inform without overwhelming.",sub:"↓ 20% perceived wait time",cam:{pos:[1.2,2.4,-6.2],lookAt:[3.8,1.4,-2.8]},highlight:null},{title:"◎ Calm Engagement Zone",text:"A low-stimulation alcove with a curated book corner, art & craft station, and guided meditation audio. Full acoustic dampening creates a personal refuge.",sub:"↓ 32% anxiety self-reports",cam:{pos:[-1.2,2.4,-6.2],lookAt:[-3.8,1.1,-2.8]},highlight:null},{title:"Compare: Standard vs Healing",text:"This toggle switches between a typical sterile hospital lighting and the proposed healing environment, so you can visually compare the difference.",sub:"Click it anytime to see what conventional waiting rooms look like.",cam:null,highlight:"comparison",requiredAction:"toggle_comparison"},{title:"Advanced Tools",text:"Open the Tools panel to access: Heatmap overlay, Patient Flow simulation, Guided Tour, Split View comparison, and Material Inspector.",sub:"Each tool reveals a different layer of the design's evidence base.",cam:null,highlight:"tools",requiredAction:"open_tools"},{title:"You're Ready! 🎉",text:"You now know everything you need to explore the Integrated Modular Healing Space. Click around, zoom in, try the tools — make it your own.",sub:"Press H anytime for keyboard shortcuts.",cam:null,highlight:null}];function pd(r,e){var n,s;!r||!r.ambient||(e?(r.ambient.color.setHex(15398143),r.ambient.intensity=.95,r.sun.color.setHex(15791871),r.sun.intensity=.6,r.fillLight.intensity=.15,(n=r.accentLights)==null||n.forEach(a=>{a.intensity=0})):(r.ambient.color.setHex(16774628),r.ambient.intensity=.45,r.sun.color.setHex(16772560),r.sun.intensity=1.05,r.fillLight.intensity=.35,(s=r.accentLights)==null||s.forEach((a,l)=>{a.color.setHex(Qt[l].hex),a.intensity=1.4})))}const tt=(r,e=.78,n=0,s={})=>new Yr({color:r,roughness:e,metalness:n,...s});function St(r,e,n){return new go(r,e,n)}function En(r,e,n,s=12){return new ha(r,e,n,s)}function ao(r,e=10,n=8){return new Tf(r,e,n)}function qM(r,e){const n=new Yv(16774628,.45);r.add(n);const s=new Nm(16772560,1.05);s.position.set(9,14,10),s.castShadow=!0,s.shadow.mapSize.set(2048,2048),s.shadow.camera.near=.5,s.shadow.camera.far=50,s.shadow.camera.left=-14,s.shadow.camera.right=14,s.shadow.camera.top=14,s.shadow.camera.bottom=-14,s.shadow.bias=-.001,r.add(s);const a=new Nm(13164799,.35);a.position.set(14,6,0),r.add(a);const l=[];Qt.forEach(ye=>{const Ee=new Nl(ye.hex,1.4,6.5,1.8);Ee.position.set(ye.pos[0],2.6,ye.pos[2]),r.add(Ee),l.push(Ee)}),e.ambient=n,e.sun=s,e.fillLight=a,e.accentLights=l,[[-3.8,3.16,2.8],[3.8,3.16,2.8],[3.8,3.16,-2.8],[-3.8,3.16,-2.8]].forEach(([ye,Ee,pe])=>{const ve=new be(new wn(2.2,.3),new Yr({color:16776693,emissive:16776693,emissiveIntensity:1.2,roughness:1}));ve.rotation.x=Math.PI/2,ve.position.set(ye,Ee,pe),r.add(ve)});const u=[];[[-3.8,2.85,2.8],[3.8,2.85,2.8],[3.8,2.85,-2.8],[-3.8,2.85,-2.8]].forEach(([ye,Ee,pe])=>{const ve=new be(En(.012,.012,.5,4),tt(5914672,.9));ve.position.set(ye,Ee+.25,pe),r.add(ve);const me=new be(new $l(.2,.28,12,1,!0),tt(13936704,.5,.1,{side:Ti}));me.position.set(ye,Ee,pe),r.add(me);const De=new be(ao(.065,8,6),new Yr({color:16772744,emissive:16763972,emissiveIntensity:2.2}));De.position.set(ye,Ee-.08,pe),r.add(De);const Ve=new Nl(16755268,1.2,4.5,2);Ve.position.set(ye,Ee-.2,pe),r.add(Ve),u.push({pl:Ve,shade:me,phase:Math.random()*Math.PI*2})}),e.pendants=u;const f=tt(13150330,.82,0),p=new be(new wn(16,13),f);p.rotation.x=-Math.PI/2,p.receiveShadow=!0,p.userData.material={name:"Travertine Honed Tile",dim:"600×600×20 mm",specs:[["Finish","Honed matte"],["VOC","<0.3 mg/m³"],["Slip rating","R10"],["Thermal mass","2.3 kJ/m²K"]],note:"Locally quarried. Thermal-mass helps passive climate."},r.add(p);const m=[];Qt.forEach(ye=>{const Ee=new be(new ql(2,32),new Yl({color:ye.hex,transparent:!0,opacity:0,depthWrite:!1,side:Ti}));Ee.rotation.x=-Math.PI/2,Ee.position.set(ye.pos[0],.012,ye.pos[2]),r.add(Ee),m.push(Ee)}),e.heatmapDiscs=m;for(let ye=-3;ye<=3;ye++){const Ee=new be(new wn(16,.02),tt(9071178,.9));Ee.rotation.x=-Math.PI/2,Ee.position.set(0,.001,ye*1.6),r.add(Ee);const pe=new be(new wn(.02,13),tt(9071178,.9));pe.rotation.x=-Math.PI/2,pe.position.set(ye*2.2,.001,0),r.add(pe)}const x=new be(new wn(16,13),tt(16117992,.95));x.rotation.x=Math.PI/2,x.position.y=3.2,r.add(x),[[-3.8,0],[0,0],[3.8,0]].forEach(([ye])=>{const Ee=new be(St(.18,.22,12.7),tt(6964264,.75));Ee.position.set(ye,3.09,0),Ee.userData.material={name:"Solid White Oak Beam",dim:"180×220×13000 mm",specs:[["Grade","FSC-certified European oak"],["Finish","Natural hard-wax oil"],["CO₂ storage","≈ 780 kg/m³"],["Fire class","D-s2,d0"]],note:"Carbon-negative structural expression."},r.add(Ee)});const S=tt(15392202,.92),g=tt(14865856,.92),M=new be(new wn(16,3.2),S);M.position.set(0,1.6,-6.5),r.add(M);const T=new be(new wn(13,3.2),g);T.rotation.y=Math.PI/2,T.position.set(-8,1.6,0),r.add(T);const C=new be(new wn(6.5,3.2),g);C.rotation.y=-Math.PI/2,C.position.set(8,1.6,3.25),r.add(C);const _=new be(new wn(6.5,.2),g);_.rotation.y=-Math.PI/2,_.position.set(8,3.1,-3.25),r.add(_);const v=document.createElement("canvas");v.width=512,v.height=512;const b=v.getContext("2d"),L=b.createLinearGradient(0,0,0,512);L.addColorStop(0,"#B8DEFF"),L.addColorStop(.55,"#E8D8B8"),L.addColorStop(.62,"#9CB48C"),L.addColorStop(1,"#7A9878"),b.fillStyle=L,b.fillRect(0,0,512,512),b.fillStyle="rgba(90,120,90,0.55)";for(let ye=0;ye<12;ye++){const Ee=ye/11*512+Math.sin(ye)*20,pe=30+ye%3*12;b.beginPath(),b.arc(Ee,320+ye%2*10,pe,0,Math.PI*2),b.fill()}const P=new Uv(v);P.colorSpace=ai;const B=new Yl({map:P});e.skyMat=B;const I=new be(new wn(10,6),B);I.rotation.y=-Math.PI/2,I.position.set(10.5,1.8,-3.25),r.add(I);const k=new Vv({color:16777215,roughness:.05,metalness:0,transparent:!0,opacity:.12,transmission:.8,ior:1.45,thickness:.02}),w=new be(new wn(6.5,3),k);w.rotation.y=-Math.PI/2,w.position.set(7.99,1.5,-3.25),r.add(w);const N=tt(11040840,.55,.1),j=new be(St(.32,.18,6.5),N);j.position.set(7.9,.09,-3.25),r.add(j);const O=new be(St(.22,.16,6.5),N);O.position.set(7.93,3,-3.25),r.add(O),[0,-6.5].forEach(ye=>{const Ee=new be(St(.12,3,.14),N);Ee.position.set(7.93,1.5,ye),r.add(Ee)}),[-1.625,-3.25,-4.875].forEach(ye=>{const Ee=new be(St(.06,2.95,.08),N);Ee.position.set(7.93,1.5,ye),r.add(Ee)});const Y=new be(St(.06,.05,6.4),N);Y.position.set(7.93,2.15,-3.25),r.add(Y);const oe=new be(new wn(4.2,.35),k);oe.rotation.y=-Math.PI/2,oe.position.set(7.99,2.95,2.2),r.add(oe);const he=new be(new wn(5,.6),B);he.rotation.y=-Math.PI/2,he.position.set(10.5,2.95,2.2),r.add(he);const W=tt(11040840,.55,.1);[-1.4,0,1.4].forEach(ye=>{const Ee=new be(St(.03,.4,.05),W);Ee.position.set(7.92,2.95,2.2+ye),r.add(Ee)});const te=new be(St(.14,1.05,9.5),tt(14207144,.88));te.position.set(0,.525,.5),r.add(te);const $=new be(St(.22,.06,9.5),tt(12097632,.5,.15));$.position.set(0,1.08,.5),r.add($);const Z=new be(En(.22,.18,.28,10),tt(9067064,.85));Z.position.set(0,1.22,1.2),r.add(Z);const ce=new be(ao(.3,9,7),tt(3831880,.8));ce.position.set(0,1.62,1.2),r.add(ce);const ue=tt(10518624,.72,.05),F=new be(St(4,1,.8),ue);F.position.set(0,.5,-6.1),F.castShadow=!0,r.add(F);const ne=new be(St(4,1,.05),tt(13150320,.55,.2));ne.position.set(0,.5,-5.7),r.add(ne);const Ge=new be(St(4.2,.06,1),tt(8015920,.45,.3));Ge.position.set(0,1.03,-6.05),r.add(Ge);const qe=new be(St(.5,.32,.03),new Yr({color:1714746,roughness:.4,metalness:.7,emissive:2771562,emissiveIntensity:.4}));qe.position.set(-.6,1.36,-5.92),r.add(qe);const Xe=tt(13150320,.6,.1);[[0,.06,-6.49,16,.12,.1,0],[-7.99,.06,0,.1,.12,13,0],[7.99,.06,0,.1,.12,13,0]].forEach(([ye,Ee,pe,ve,me,De])=>{const Ve=new be(St(ve,me,De),Xe);Ve.position.set(ye,Ee,pe),r.add(Ve)});const Q=[];Q.push({mesh:p,zoneId:null}),r.traverse(ye=>{var Ee,pe,ve;ye.isMesh&&((ve=(pe=(Ee=ye.userData)==null?void 0:Ee.material)==null?void 0:pe.name)!=null&&ve.includes("Oak Beam"))&&Q.push({mesh:ye,zoneId:null})});const Ae=tt(12882032,.85),Se=tt(10514512,.88),ze=tt(5910552,.6,.3),it=tt(13936768,.82);function at(ye,Ee,pe,ve,me="sofa"){const De=new Ki,Ve=me==="chair"?.74:.78,et=me==="chair"?.82:.88,Ut=ve*Ve,Yt=new be(St(Ut-.06,.08,et-.16),ze);Yt.position.set(0,.06,0),De.add(Yt);const cn=new be(St(Ut,.32,et),Ae);cn.position.set(0,.26,0),cn.castShadow=!0,De.add(cn);const fn=new be(St(Ut,.58,.14),Se);fn.position.set(0,.68,-et/2+.07),fn.rotation.x=-.08,De.add(fn),[-Ut/2+.07,Ut/2-.07].forEach(Ft=>{const rn=new be(St(.14,.28,et-.04),Se);rn.position.set(Ft,.56,0),De.add(rn)});for(let Ft=0;Ft<ve;Ft++){const rn=-Ut/2+Ve/2+Ft*Ve+(Ft===0?.05:Ft===ve-1?-.05:0),An=new be(St(Ve-.12,.14,et-.22),it);An.position.set(rn,.49,.05),An.castShadow=!0,De.add(An);const Un=new be(St(Ve-.16,.34,.14),it);Un.position.set(rn,.72,-et/2+.18),Un.rotation.x=.12,De.add(Un)}return De.position.set(ye,0,Ee),De.rotation.y=pe,r.add(De),De.children.forEach(Ft=>{Ft.isMesh&&Q.push({mesh:Ft,zoneId:"seating"})}),De}at(-3.8,3.35,Math.PI,3,"sofa"),at(-4.9,1.55,Math.PI/3.4,1,"chair"),at(-2.7,1.55,-Math.PI/3.4,1,"chair");const Nt=new be(St(1.3,.05,.7),tt(8015920,.45,.25));Nt.position.set(-3.8,.42,2.6),Nt.castShadow=!0,r.add(Nt),Q.push({mesh:Nt,zoneId:"seating"});const _t=new be(St(1.24,.03,.64),ze);_t.position.set(-3.8,.38,2.6),r.add(_t),[[-.58,-.3],[.58,-.3],[-.58,.3],[.58,.3]].forEach(([ye,Ee])=>{const pe=new be(En(.022,.022,.38,6),ze);pe.position.set(-3.8+ye,.19,2.6+Ee),r.add(pe)});const Tt=new be(En(.09,.07,.18,14),tt(15260868,.7));Tt.position.set(-3.8,.53,2.6),Tt.castShadow=!0,r.add(Tt);const Ot=new be(En(.006,.006,.34,4),tt(4876858,.7));Ot.position.set(-3.8,.76,2.6),r.add(Ot);const gt=new be(En(.2,.2,.04,14),tt(6963232,.5,.2));gt.position.set(-5.35,.52,3.55),gt.castShadow=!0,r.add(gt),Q.push({mesh:gt,zoneId:"seating"});const Gt=new be(En(.03,.05,.5,8),ze);Gt.position.set(-5.35,.25,3.55),r.add(Gt);const Bt=new be(En(.1,.08,.13,12),tt(9071178,.8));Bt.position.set(-5.35,.61,3.55),r.add(Bt);for(let ye=0;ye<5;ye++){const Ee=new be(ao(.08,8,6),tt(4880970,.85));Ee.position.set(-5.35+Math.cos(ye)*.05,.73+ye*.03,3.55+Math.sin(ye)*.05),Ee.scale.set(1,.5,1),r.add(Ee)}const ln=new be(En(.32,.32,.34,16),tt(12095600,.88));ln.position.set(-3.8,.17,1.4),ln.castShadow=!0,r.add(ln),Q.push({mesh:ln,zoneId:"seating"}),[[.06,1.05,2,-1.9,.55,2.8],[.06,1.05,2,-5.7,.55,2.5]].forEach(([ye,Ee,pe,ve,me,De])=>{const Ve=new be(St(ye,Ee,pe),tt(14733496,.92));Ve.position.set(ve,me,De),Ve.castShadow=!0,Ve.userData.material={name:"Wool-Felt Acoustic Privacy Wing",dim:"2000×1050×60 mm",specs:[["Composition","100% recycled PET + wool felt"],["Acoustic NRC","0.90"],["Fire class","B-s1,d0"],["Colorways","5 naturals"]],note:"Reduces reverberation to < 0.8 s."},r.add(Ve),Q.push({mesh:Ve,zoneId:"seating"});const et=new be(St(ye+.02,.04,pe+.02),tt(11571296,.5,.2));et.position.set(ve,me+.545,De),r.add(et)});const G=[];for(let ye=0;ye<5;ye++)for(let Ee=0;Ee<5;Ee++){const pe=(ye+Ee)%3,ve=[3041850,4033098,4890714][pe],me=new be(St(.52,.52,.08),tt(ve,.95));me.position.set(7.96,.38+ye*.55,1+Ee*.55),me.rotation.y=-Math.PI/2,me.castShadow=!0,me.userData.material={name:"Preserved Reindeer Moss Panel",dim:"500×500×40 mm",specs:[["Species","Cladonia rangiferina (mixed tones)"],["Maintenance","Zero water · Zero light"],["Acoustic NRC","0.75"],["Air particulate trap","Light PM2.5 capture"]],note:"Biophilic anchor of the space."},r.add(me),Q.push({mesh:me,zoneId:"biophilic"})}[[2.8,1.8],[4.4,3],[3.2,1.1]].forEach(([ye,Ee],pe)=>{const ve=new be(En(.22,.16,.4,10),tt(9066544,.85));ve.position.set(ye,.2,Ee),ve.castShadow=!0,r.add(ve),Q.push({mesh:ve,zoneId:"biophilic"});const me=new be(En(.05,.07,.7,7),tt(4860942,.9));me.position.set(ye,.75,Ee),r.add(me);const De=new be(ao(.45+pe*.05,10,8),tt(3043392,.85));De.position.set(ye,1.32+pe*.1,Ee),De.castShadow=!0,r.add(De),Q.push({mesh:De,zoneId:"biophilic"});const Ve=new be(ao(.3,8,6),tt(4033104,.85));Ve.position.set(ye+.25,1.05+pe*.08,Ee-.2),r.add(Ve),G.push({mesh:De,baseY:De.position.y,phase:pe*1.2}),G.push({mesh:Ve,baseY:Ve.position.y,phase:pe*1.2+.5})}),e.plants=G;const zt=new be(En(.6,.55,.18,20),tt(8015920,.8));zt.position.set(5,.09,3.8),zt.castShadow=!0,r.add(zt),Q.push({mesh:zt,zoneId:"biophilic"});const vt=new be(new ql(.54,20),new Yr({color:8310752,roughness:.05,metalness:.1,transparent:!0,opacity:.82}));vt.rotation.x=-Math.PI/2,vt.position.set(5,.19,3.8),r.add(vt),e.water=vt,Q.push({mesh:vt,zoneId:"biophilic"}),[0,1,2,3,4,5].forEach(ye=>{const Ee=ye/6*Math.PI*2,pe=new be(new ha(.12,.12,.04,8),tt(10522752,.95));pe.position.set(5+Math.cos(Ee)*.82,.02,3.8+Math.sin(Ee)*.82),r.add(pe)});const de=[];[[2.5,-2],[3.8,-3.6],[5.1,-2]].forEach(([ye,Ee],pe)=>{const ve=new be(En(.05,.08,1.2,8),tt(11579568,.4,.8));ve.position.set(ye,.6,Ee),r.add(ve);const me=new be(En(.18,.18,.04,12),tt(9474192,.4,.7));me.position.set(ye,.02,Ee),r.add(me);const De=new Yr({color:661544,roughness:.05,metalness:.5,emissive:pe===1?1717352:1714264,emissiveIntensity:.7}),Ve=new be(St(.62,.96,.04),De);Ve.position.set(ye,1.68,Ee),Ve.castShadow=!0,r.add(Ve),Q.push({mesh:Ve,zoneId:"digital"}),de.push({mesh:Ve,mat:De,phase:pe*1.4});const et=new Yr({color:4227327,emissive:4227327,emissiveIntensity:1.8}),Ut=new be(St(.62,.04,.02),et);Ut.position.set(ye,1.21,Ee+.03),r.add(Ut),de.push({mesh:Ut,mat:et,phase:pe*1.4+.3,isBar:!0});const Yt=new Nl(4219084,.8,2.5,2);Yt.position.set(ye,1.68,Ee+.2),r.add(Yt),de.push({pl:Yt,phase:pe*1.4,isPl:!0})}),e.screens=de;const D=new Ki;D.position.set(-3.8,0,-6.32);const pt=tt(5912608,.6,.1),R=tt(4860952,.8,.1),y=new be(St(3.2,2.4,.02),R);y.position.set(0,1.2,-.16),y.castShadow=!0,D.add(y);const K=new be(St(3.24,.06,.36),pt);K.position.set(0,2.43,0),K.castShadow=!0,D.add(K);const xe=new be(St(3.24,.08,.36),pt);xe.position.set(0,.04,0),xe.castShadow=!0,D.add(xe),[-1.6,1.6].forEach(ye=>{const Ee=new be(St(.06,2.4,.36),pt);Ee.position.set(ye,1.2,0),Ee.castShadow=!0,D.add(Ee)}),[-.53,.53].forEach(ye=>{const Ee=new be(St(.04,2.32,.32),pt);Ee.position.set(ye,1.2,-.02),Ee.castShadow=!0,D.add(Ee)});const Me=[.45,.85,1.25,1.65,2.05];Me.forEach(ye=>{const Ee=new be(St(3.14,.03,.32),pt);Ee.position.set(0,ye,-.02),Ee.castShadow=!0,D.add(Ee)}),r.add(D),D.children.forEach(ye=>{ye.isMesh&&Q.push({mesh:ye,zoneId:"calm"})});function Te(ye,Ee,pe,ve,me,De,Ve){const et=new Ki,Ut=.04,Yt=.04,cn=tt(2759184,.6,.1),fn=new be(St(me,De,.01),tt(16117992,.95));fn.position.z=Ut/2,et.add(fn),Ve.forEach((Bi,nr)=>{const Es=me*(.3+Math.random()*.4),ws=De*(.3+Math.random()*.4),en=new be(St(Es,ws,.002),tt(Bi,.9));en.position.set((Math.random()-.5)*(me-Es),(Math.random()-.5)*(De-ws),Ut/2+.006+nr*.001),et.add(en)});const Ft=new be(St(me+Yt*2,Yt,Ut),cn);Ft.position.set(0,De/2+Yt/2,0),et.add(Ft);const rn=new be(St(me+Yt*2,Yt,Ut),cn);rn.position.set(0,-De/2-Yt/2,0),et.add(rn);const An=new be(St(Yt,De,Ut),cn);An.position.set(-me/2-Yt/2,0,0),et.add(An);const Un=new be(St(Yt,De,Ut),cn);Un.position.set(me/2+Yt/2,0,0),et.add(Un),et.position.set(ye,Ee,pe),et.rotation.y=ve,r.add(et)}Te(-7.94,1.8,1,Math.PI/2,2,1.2,[4876938,12882032,14207144,2767434]),Te(-1.2,1.7,-6.44,0,1,1.4,[5929032,11040848,14733496]),Te(1.8,1.7,-6.44,0,.9,.9,[13936704,4860942,13150330]);const Ie=[12603472,5271744,5283936,12623920,8409232,12611648,4214912,12601480,4229744,3170416,9453632,13672512,4235408,8409152,5263536],fe=[.32,.28,.35,.3,.25,.33,.29,.27,.34,.31,.26,.36,.28,.33,.3],_e=[.04,.05,.03,.06,.04,.05,.04,.03,.04,.05,.03,.06,.04,.04,.05];for(let ye=0;ye<4;ye++)for(let Ee=0;Ee<3;Ee++)if(Math.random()>.3){const pe=4+Math.floor(Math.random()*9);let me=(Ee-1)*1.06-.35+Math.random()*.3;for(let De=0;De<pe;De++){const Ve=Math.floor(Math.random()*Ie.length),et=Ie[Ve],Ut=_e[Ve],Yt=fe[Ve]+(Math.random()*.04-.02),cn=.2+(Math.random()*.02-.01),fn=new Ki,Ft=new be(St(Ut,Yt,cn),tt(et,.88));Ft.castShadow=!0,fn.add(Ft);const rn=new be(St(Ut+.002,Yt-.01,.015),tt(et,.75,.05));rn.position.z=cn/2+.007,fn.add(rn);const An=new be(St(Ut-.006,Yt-.015,cn-.015),tt(16117984,.95));An.position.x=.002,fn.add(An);const Un=Me[ye]+.015+Yt/2;let Bi=0;De>=pe-2&&Math.random()>.4&&(Bi=.12+Math.random()*.1,me+=.03),fn.position.set(-3.8+me,Un,-6.22+(Math.random()*.02-.01)),fn.rotation.z=-Bi,r.add(fn),fn.children.forEach(nr=>{nr.isMesh&&Q.push({mesh:nr,zoneId:"calm"})}),me+=Ut+.002+(Bi>0?.03:0)}}const ke=tt(11036072,.88);[[-4.6,-2.2],[-3.5,-3.2],[-2.5,-2.5]].forEach(([ye,Ee])=>{const pe=new be(En(.32,.3,.12,14),ke);pe.position.set(ye,.06,Ee),pe.castShadow=!0,r.add(pe),Q.push({mesh:pe,zoneId:"calm"});const ve=new be(new Af(.31,.01,6,20),tt(9062536,.9));ve.rotation.x=Math.PI/2,ve.position.set(ye,.12,Ee),r.add(ve)});const We=tt(6963744,.55,.1),Pe=new be(St(1.3,.06,.75),We);Pe.position.set(-3.5,.38,-2.9),Pe.castShadow=!0,r.add(Pe),Q.push({mesh:Pe,zoneId:"calm"}),[[-.55,-.3],[.55,-.3],[-.55,.3],[.55,.3]].forEach(([ye,Ee])=>{const pe=new be(En(.022,.022,.36,5),tt(4860942,.7,.2));pe.position.set(-3.5+ye,.18,-2.9+Ee),r.add(pe)});const Ue=new be(En(.055,.05,.1,10),tt(15261904,.7));Ue.position.set(-3.5,.46,-2.9),r.add(Ue);const ut=tt(9070656,.5,.4),mt=new be(En(.022,.022,1.55,6),ut);mt.position.set(-2.2,.78,-1.6),r.add(mt);const wt=new be(En(.15,.15,.04,10),ut);wt.position.set(-2.2,.02,-1.6),r.add(wt);const z=new be(new $l(.28,.38,12,1,!0),tt(15255664,.7,0,{side:Ti}));z.position.set(-2.2,1.65,-1.6),z.castShadow=!0,r.add(z),Q.push({mesh:z,zoneId:"calm"});const Le=new Nl(16755268,1.6,4,2);Le.position.set(-2.2,1.45,-1.6),r.add(Le),e.lampLight=Le;const ge=new be(St(2.2,2,.06),tt(14207144,.95));ge.position.set(-6.7,1.6,-6.44),r.add(ge);const je=new be(St(2,1.8,.04),tt(13154456,.98));je.position.set(-6.7,1.6,-6.42),r.add(je);const Fe=new be(St(.06,1.8,2),tt(14207144,.95));Fe.position.set(-7.95,1.6,-3.5),r.add(Fe);const we=new be(St(.04,1.6,1.8),tt(13154456,.98));we.position.set(-7.93,1.6,-3.5),r.add(we);const Ze=new be(new wn(3.8,3),tt(11040848,.98));Ze.rotation.x=-Math.PI/2,Ze.position.set(-3.8,.003,2.5),r.add(Ze);const dt=new be(new wn(4,3.2),tt(9068600,.98));dt.rotation.x=-Math.PI/2,dt.position.set(-3.8,.002,2.5),r.add(dt);const Mt=new be(new wn(3.4,2.8),tt(5929032,.98));return Mt.rotation.x=-Math.PI/2,Mt.position.set(3.8,.003,2.5),r.add(Mt),Q}function $M({activeZone:r,isMobile:e,handleZoom:n,handleReset:s,tutorialHighlight:a}){const l=a==="zones";return V.jsxs("div",{style:{position:"absolute",top:e?65:76,left:"50%",transform:"translateX(-50%)",display:"flex",gap:e?5:7,flexWrap:"wrap",justifyContent:"center",zIndex:l?45:10,maxWidth:e?"calc(100% - 32px)":"auto",padding:e?"0 8px":0},children:[Qt.map((u,f)=>{const p=(r==null?void 0:r.id)===u.id;return V.jsx("button",{className:"zbtn",onClick:()=>n(u),style:{padding:e?"6px 12px":"7px 16px",borderRadius:24,border:`1.5px solid ${l?"rgba(196,144,90,0.8)":p?u.accent:"rgba(248,238,216,0.25)"}`,background:p?u.accent:"rgba(18,12,6,0.6)",color:p?"#fff":"rgba(248,238,216,0.78)",fontSize:e?10:11,fontWeight:p?500:400,letterSpacing:"0.04em",cursor:"pointer",backdropFilter:"blur(12px)",fontFamily:"'DM Sans', sans-serif",boxShadow:p?`0 4px 20px ${u.accent}55`:"none",animationDelay:`${f*.06}s`,...l?{animation:"tutorialGlow 2s ease-in-out infinite"}:{}},children:e?u.icon:`${u.icon} ${u.label}`},u.id)}),r&&V.jsxs("button",{className:"zbtn",onClick:s,style:{padding:e?"6px 12px":"7px 16px",borderRadius:24,border:"1.5px solid rgba(248,238,216,0.28)",background:"rgba(18,12,6,0.6)",color:"rgba(248,238,216,0.7)",fontSize:e?10:11,fontWeight:300,cursor:"pointer",backdropFilter:"blur(12px)",fontFamily:"'DM Sans', sans-serif"},children:["↺ ",e?"":"Overview"]})]})}function KM({displayZone:r,activeZone:e,isMobile:n,goToAdjacentZone:s}){return V.jsxs("div",{className:"panel-in",style:{position:"absolute",right:n?12:22,top:n?"auto":"50%",bottom:n?12:"auto",left:n?12:"auto",width:n?"auto":300,maxHeight:n?"50vh":"auto",overflowY:n?"auto":"visible",zIndex:20,background:"rgba(16,10,4,0.95)",borderRadius:n?16:20,padding:n?"20px 18px":"28px 24px",boxShadow:`0 16px 50px rgba(0,0,0,0.55), 0 0 0 1px ${r.accent}44`,backdropFilter:"blur(18px)",border:`1px solid ${r.accent}44`},children:[V.jsxs("div",{style:{display:"inline-flex",alignItems:"center",gap:8,padding:"5px 13px",borderRadius:20,marginBottom:16,background:r.accent+"22",border:`1px solid ${r.accent}66`},children:[V.jsx("span",{style:{fontSize:15},children:r.icon}),V.jsx("span",{style:{fontFamily:"'DM Sans'",fontSize:10,fontWeight:500,color:r.accent,letterSpacing:"0.07em",textTransform:"uppercase"},children:e?"Zone Active":"Hover Preview"})]}),V.jsx("div",{style:{fontFamily:"'Cormorant Garamond', serif",fontSize:21,fontWeight:600,color:"#F8EED8",lineHeight:1.2,marginBottom:12},children:r.label}),V.jsx("div",{style:{fontFamily:"'DM Sans'",fontSize:12,lineHeight:1.8,color:"rgba(248,238,216,0.62)",marginBottom:20},children:r.desc}),V.jsx("div",{style:{fontFamily:"'DM Sans'",fontSize:9,letterSpacing:"0.13em",textTransform:"uppercase",color:"rgba(248,238,216,0.32)",marginBottom:10},children:"Design Interventions"}),r.features.map((a,l)=>V.jsxs("div",{style:{display:"flex",alignItems:"center",gap:9,padding:"7px 0",borderBottom:"1px solid rgba(248,238,216,0.06)",fontFamily:"'DM Sans'",fontSize:12,color:"rgba(248,238,216,0.75)"},children:[V.jsx("span",{style:{color:r.accent,fontSize:9,flexShrink:0,marginTop:1},children:"✦"}),a]},l)),V.jsx("div",{style:{marginTop:18,padding:"10px 16px",borderRadius:12,background:r.accent+"18",border:`1px solid ${r.accent}30`,fontFamily:"'DM Sans'",fontSize:13,fontWeight:500,color:r.accent,letterSpacing:"0.02em"},children:r.metric}),!e&&V.jsx("div",{style:{marginTop:12,fontFamily:"'DM Sans'",fontSize:10,color:"rgba(248,238,216,0.3)",textAlign:"center",letterSpacing:"0.08em"},children:"Click to enter zone →"}),e&&V.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",marginTop:18,paddingTop:14,borderTop:"1px solid rgba(248,238,216,0.08)"},children:[V.jsx("button",{className:"zbtn",onClick:()=>s(-1),style:{padding:"6px 12px",borderRadius:18,border:"1px solid rgba(248,238,216,0.22)",background:"rgba(248,238,216,0.05)",color:"rgba(248,238,216,0.8)",fontSize:11,cursor:"pointer",fontFamily:"'DM Sans'"},children:"← Prev"}),V.jsxs("span",{style:{fontFamily:"'DM Sans'",fontSize:10,color:"rgba(248,238,216,0.4)",letterSpacing:"0.08em"},children:[Qt.findIndex(a=>a.id===e.id)+1," / ",Qt.length]}),V.jsx("button",{className:"zbtn",onClick:()=>s(1),style:{padding:"6px 12px",borderRadius:18,border:`1px solid ${r.accent}66`,background:r.accent+"22",color:r.accent,fontSize:11,cursor:"pointer",fontFamily:"'DM Sans'",fontWeight:500},children:"Next →"})]})]},r.id)}function ZM({loaded:r,welcomePhase:e,setWelcomePhase:n,setShowWelcome:s,setTutorialStep:a,isMobile:l}){return!r||e==="done"?null:V.jsxs(V.Fragment,{children:[V.jsx("div",{style:{position:"absolute",inset:0,background:"rgba(10,6,2,0.65)",backdropFilter:"blur(4px)",zIndex:50,animation:"welcomeFadeIn 0.5s ease forwards"}}),V.jsxs("div",{style:{position:"absolute",top:"50%",left:"50%",transform:"translate(-50%, -50%)",width:l?"calc(100% - 40px)":440,maxWidth:"calc(100vw - 40px)",zIndex:51,background:"rgba(20,14,8,0.97)",borderRadius:22,padding:l?"32px 24px":"40px 36px",border:"1px solid rgba(196,144,90,0.35)",boxShadow:"0 30px 80px rgba(0,0,0,0.7), 0 0 0 1px rgba(248,238,216,0.06)",backdropFilter:"blur(20px)",textAlign:"center",animation:"welcomeSlideUp 0.6s cubic-bezier(.2,.8,.2,1) forwards"},children:[e==="intro"&&V.jsxs(V.Fragment,{children:[V.jsx("div",{style:{fontSize:36,marginBottom:16,filter:"drop-shadow(0 4px 12px rgba(196,144,90,0.3))"},children:"🌿"}),V.jsxs("div",{style:{fontFamily:"'Cormorant Garamond', serif",fontSize:l?22:26,fontWeight:600,color:"#F8EED8",lineHeight:1.2,marginBottom:12},children:["Integrated Modular",V.jsx("br",{}),"Healing Space"]}),V.jsx("div",{style:{fontFamily:"'DM Sans', sans-serif",fontSize:12,lineHeight:1.8,color:"rgba(248,238,216,0.55)",marginBottom:8,maxWidth:340,margin:"0 auto 24px"},children:"Explore a 3D prototype of a hospital waiting environment redesigned around four wellness zones — each backed by evidence-based design interventions that measurably reduce patient stress and anxiety."}),V.jsx("div",{style:{display:"flex",flexWrap:"wrap",justifyContent:"center",gap:8,marginBottom:28},children:Qt.map(u=>V.jsxs("span",{style:{padding:"4px 12px",borderRadius:16,background:u.accent+"18",border:`1px solid ${u.accent}44`,fontFamily:"'DM Sans'",fontSize:10,color:u.accent,letterSpacing:"0.04em"},children:[u.icon," ",u.label]},u.id))}),V.jsx("button",{onClick:()=>n("askNew"),className:"zbtn",style:{padding:"12px 36px",borderRadius:28,border:"none",background:"linear-gradient(135deg, #C4905A, #A07040)",color:"#fff",fontSize:14,fontWeight:500,letterSpacing:"0.06em",cursor:"pointer",fontFamily:"'DM Sans', sans-serif",boxShadow:"0 8px 28px rgba(196,144,90,0.35)"},children:"Start Exploring →"}),V.jsx("div",{style:{marginTop:16,fontFamily:"'DM Sans'",fontSize:10,color:"rgba(248,238,216,0.3)",letterSpacing:"0.08em"},children:"3D Spatial Prototype · Team 142"})]}),e==="askNew"&&V.jsxs(V.Fragment,{children:[V.jsx("div",{style:{fontSize:32,marginBottom:16},children:"👋"}),V.jsx("div",{style:{fontFamily:"'Cormorant Garamond', serif",fontSize:l?20:24,fontWeight:600,color:"#F8EED8",lineHeight:1.2,marginBottom:12},children:"Are you a new user?"}),V.jsx("div",{style:{fontFamily:"'DM Sans', sans-serif",fontSize:12,lineHeight:1.8,color:"rgba(248,238,216,0.55)",maxWidth:340,margin:"0 auto 28px"},children:"If this is your first time, we'll walk you through the space with a quick interactive tutorial covering controls, zones, and tools."}),V.jsxs("div",{style:{display:"flex",gap:12,justifyContent:"center",flexWrap:"wrap"},children:[V.jsx("button",{onClick:()=>{s(!1),n("done"),a(0)},className:"zbtn",style:{padding:"12px 28px",borderRadius:28,border:"none",background:"linear-gradient(135deg, #C4905A, #A07040)",color:"#fff",fontSize:13,fontWeight:500,letterSpacing:"0.06em",cursor:"pointer",fontFamily:"'DM Sans', sans-serif",boxShadow:"0 8px 28px rgba(196,144,90,0.35)"},children:"Yes, show me around"}),V.jsx("button",{onClick:()=>{s(!1),n("done")},className:"zbtn",style:{padding:"12px 28px",borderRadius:28,border:"1px solid rgba(248,238,216,0.25)",background:"rgba(248,238,216,0.06)",color:"rgba(248,238,216,0.8)",fontSize:13,fontWeight:400,letterSpacing:"0.06em",cursor:"pointer",fontFamily:"'DM Sans', sans-serif"},children:"No, I'll explore"})]})]})]})]})}function JM({tutorialStep:r,setTutorialStep:e,handleReset:n,isMobile:s}){return r<0||r>=Tn.length?null:V.jsxs(V.Fragment,{children:[Tn[r].highlight&&V.jsx("div",{style:{position:"absolute",inset:0,background:"rgba(0,0,0,0.7)",pointerEvents:"none",zIndex:44}}),Tn[r].highlight==="viewport"&&V.jsx("div",{style:{position:"absolute",inset:0,border:"3px solid rgba(196,144,90,0.5)",borderRadius:0,pointerEvents:"none",zIndex:45,boxShadow:"inset 0 0 60px rgba(196,144,90,0.15)"}}),V.jsxs("div",{className:"fade-up",style:{position:"absolute",bottom:s?16:32,left:"50%",transform:"translateX(-50%)",width:s?"calc(100% - 24px)":520,maxWidth:"calc(100vw - 24px)",zIndex:46,background:"rgba(16,10,4,0.96)",borderRadius:18,padding:s?"20px 18px":"24px 28px",border:"1px solid rgba(196,144,90,0.35)",boxShadow:"0 20px 60px rgba(0,0,0,0.6)",backdropFilter:"blur(16px)"},children:[V.jsx("div",{style:{display:"flex",gap:3,marginBottom:16},children:Tn.map((a,l)=>V.jsx("div",{style:{flex:1,height:3,borderRadius:2,background:l<=r?"#C4905A":"rgba(248,238,216,0.12)",transition:"background 0.3s ease"}},l))}),V.jsxs("div",{style:{fontFamily:"'DM Sans', sans-serif",fontSize:10,letterSpacing:"0.12em",textTransform:"uppercase",color:"rgba(196,144,90,0.8)",marginBottom:8},children:["Step ",r+1," of ",Tn.length]}),V.jsx("div",{style:{fontFamily:"'Cormorant Garamond', serif",fontSize:s?18:22,fontWeight:600,color:"#F8EED8",lineHeight:1.2,marginBottom:10},children:Tn[r].title}),V.jsx("div",{style:{fontFamily:"'DM Sans', sans-serif",fontSize:12,lineHeight:1.8,color:"rgba(248,238,216,0.65)",marginBottom:8},children:Tn[r].text}),Tn[r].sub&&V.jsx("div",{style:{fontFamily:"'DM Sans', sans-serif",fontSize:11,fontWeight:500,color:"#C4905A",marginBottom:16,padding:"6px 12px",background:"rgba(196,144,90,0.1)",borderRadius:8,display:"inline-block"},children:Tn[r].sub}),V.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",marginTop:8,paddingTop:14,borderTop:"1px solid rgba(248,238,216,0.08)"},children:[V.jsx("div",{style:{display:"flex",gap:10},children:r>0&&V.jsx("button",{onClick:()=>e(a=>a-1),className:"zbtn",style:{padding:"8px 18px",borderRadius:20,border:"1px solid rgba(248,238,216,0.4)",background:"rgba(248,238,216,0.08)",color:"rgba(248,238,216,0.9)",fontSize:13,cursor:"pointer",fontFamily:"'DM Sans'"},children:"← Back"})}),V.jsxs("div",{style:{display:"flex",gap:10},children:[V.jsx("button",{onClick:()=>{e(-1),n()},className:"zbtn",style:{padding:"8px 18px",borderRadius:20,border:"1px solid rgba(248,238,216,0.3)",background:"transparent",color:"rgba(248,238,216,0.8)",fontSize:13,cursor:"pointer",fontFamily:"'DM Sans'"},children:"Skip"}),!Tn[r].requiredAction&&V.jsx("button",{onClick:()=>{r>=Tn.length-1?(e(-1),n()):e(a=>a+1)},className:"zbtn",style:{padding:"8px 24px",borderRadius:20,border:"none",background:"linear-gradient(135deg, #D4A06A, #B08050)",color:"#fff",fontSize:13,fontWeight:600,cursor:"pointer",fontFamily:"'DM Sans'",boxShadow:"0 4px 14px rgba(196,144,90,0.5)"},children:r>=Tn.length-1?"Finish ✓":"Next →"})]})]})]})]})}function QM({isMobile:r,showTools:e,setShowTools:n,heatmapMode:s,setHeatmapMode:a,patientSimActive:l,setPatientSimActive:u,guidedTour:f,setGuidedTour:p,splitScreen:m,setSplitScreen:x,inspectorMode:S,setInspectorMode:g,setInspectedItem:M,circadianTime:T,setCircadianTime:C,comparisonMode:_,onTutorialAction:v,tutorialHighlight:b}){const L=b==="tools";return V.jsxs(V.Fragment,{children:[V.jsxs("button",{onClick:()=>{n(P=>!P),!e&&v&&v("open_tools")},title:e?"Hide tools":"Show tools",className:`tools-fab ${e?"open":""}`,style:{position:"absolute",left:r?14:26,top:"auto",bottom:r?14:26,width:46,height:46,borderRadius:13,border:`1px solid ${L?"rgba(196,144,90,0.8)":e?"rgba(196,144,90,0.6)":"rgba(248,238,216,0.14)"}`,background:e?"linear-gradient(135deg, rgba(196,144,90,0.92), rgba(160,112,80,0.92))":"rgba(18,12,6,0.72)",color:"#F8EED8",cursor:"pointer",backdropFilter:"blur(16px)",boxShadow:e?"0 8px 28px rgba(196,144,90,0.28), inset 0 1px 0 rgba(255,255,255,0.12)":"0 4px 14px rgba(0,0,0,0.3)",zIndex:L?45:25,padding:0,...L?{animation:"tutorialGlow 2s ease-in-out infinite"}:{}},children:[V.jsx("span",{className:"bars",children:V.jsxs("svg",{width:"18",height:"18",viewBox:"0 0 18 18",fill:"none",children:[V.jsx("circle",{cx:"3",cy:"4.5",r:"1.2",fill:"currentColor"}),V.jsx("rect",{x:"6.5",y:"3.8",width:"9",height:"1.4",rx:"0.7",fill:"currentColor"}),V.jsx("circle",{cx:"3",cy:"9",r:"1.2",fill:"currentColor"}),V.jsx("rect",{x:"6.5",y:"8.3",width:"9",height:"1.4",rx:"0.7",fill:"currentColor"}),V.jsx("circle",{cx:"3",cy:"13.5",r:"1.2",fill:"currentColor"}),V.jsx("rect",{x:"6.5",y:"12.8",width:"9",height:"1.4",rx:"0.7",fill:"currentColor"})]})}),V.jsx("span",{className:"cross",children:V.jsx("svg",{width:"16",height:"16",viewBox:"0 0 16 16",fill:"none",children:V.jsx("path",{d:"M3 3 L13 13 M13 3 L3 13",stroke:"currentColor",strokeWidth:"1.6",strokeLinecap:"round"})})})]}),!e&&!r&&V.jsx("div",{style:{position:"absolute",left:80,bottom:34,fontFamily:"'DM Sans', sans-serif",fontSize:10,letterSpacing:"0.1em",textTransform:"uppercase",color:"rgba(248,238,216,0.45)",pointerEvents:"none",animation:"fadeUp 0.5s ease 2s forwards",opacity:0,zIndex:25},children:"Tools"}),e&&V.jsx("div",{className:"dock-in",style:{position:"absolute",left:r?"50%":26,bottom:r?72:84,top:"auto",transform:r?"translateX(-50%)":"none",display:"flex",flexDirection:r?"row":"column",gap:8,zIndex:20,padding:8,background:"rgba(18,12,6,0.75)",borderRadius:14,border:"1px solid rgba(248,238,216,0.12)",backdropFilter:"blur(14px)",flexWrap:"wrap",maxWidth:r?"calc(100% - 24px)":"auto"},children:[{key:"heatmap",label:"Heatmap",icon:"▦",active:s,toggle:()=>a(P=>!P),color:"#E07B4A"},{key:"patients",label:"Patient Flow",icon:"◉",active:l,toggle:()=>u(P=>!P),color:"#4A8A58"},{key:"tour",label:"Guided Tour",icon:"▶",active:f,toggle:()=>{f||x(!1),p(P=>!P)},color:"#5572C4"},{key:"split",label:"Split View",icon:"◫",active:m,toggle:()=>{m||p(!1),x(P=>!P)},color:"#8A5898"},{key:"inspect",label:"Inspect",icon:"⊙",active:S,toggle:()=>{g(P=>!P),S&&M(null)},color:"#C4905A"}].map((P,B)=>V.jsxs("button",{onClick:P.toggle,className:"zbtn dock-item",title:`${P.label}${P.active?" (click to disable)":""}`,style:{animationDelay:`${.06+B*.05}s`,width:r?44:150,height:36,padding:r?0:"0 12px",borderRadius:8,border:`1px solid ${P.active?P.color:"rgba(248,238,216,0.18)"}`,background:P.active?P.color:"rgba(18,12,6,0.4)",color:P.active?"#fff":"rgba(248,238,216,0.8)",fontSize:r?16:11,fontFamily:"'DM Sans', sans-serif",letterSpacing:"0.04em",cursor:"pointer",display:"flex",alignItems:"center",justifyContent:r?"center":"flex-start",gap:8,fontWeight:P.active?500:400},children:[V.jsx("span",{style:{fontSize:14},children:P.icon}),!r&&V.jsx("span",{children:P.label})]},P.key))}),e&&!r&&!m&&V.jsxs("div",{className:"slider-in",style:{position:"absolute",bottom:28,left:"50%",transform:"translateX(-50%)",width:340,padding:"10px 18px",background:"rgba(18,12,6,0.82)",borderRadius:12,border:"1px solid rgba(248,238,216,0.12)",backdropFilter:"blur(14px)",zIndex:15,fontFamily:"'DM Sans', sans-serif"},children:[V.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:6},children:[V.jsx("span",{style:{fontSize:10,letterSpacing:"0.12em",textTransform:"uppercase",color:"rgba(248,238,216,0.5)"},children:"Circadian Light"}),V.jsxs("span",{style:{fontSize:12,color:"#F8EED8",fontVariantNumeric:"tabular-nums"},children:[String(Math.floor(T)).padStart(2,"0"),":",String(Math.floor(T%1*60)).padStart(2,"0")]})]}),V.jsx("input",{type:"range",min:0,max:24,step:.25,value:T,onChange:P=>C(parseFloat(P.target.value)),disabled:_,style:{width:"100%",accentColor:"#C4905A",cursor:_?"not-allowed":"pointer",opacity:_?.4:1}}),V.jsxs("div",{style:{display:"flex",justifyContent:"space-between",fontSize:9,color:"rgba(248,238,216,0.35)",marginTop:2},children:[V.jsx("span",{children:"00"}),V.jsx("span",{children:"06"}),V.jsx("span",{children:"12"}),V.jsx("span",{children:"18"}),V.jsx("span",{children:"24"})]})]})]})}function eE({inspectedItem:r,setInspectedItem:e,isMobile:n}){return r?V.jsxs(V.Fragment,{children:[V.jsx("div",{onClick:()=>e(null),style:{position:"absolute",inset:0,background:"rgba(10,6,2,0.55)",backdropFilter:"blur(2px)",zIndex:39,animation:"fadeUp 0.2s ease forwards"}}),V.jsxs("div",{className:"panel-in",style:{position:"absolute",left:"50%",top:"50%",transform:"translate(-50%, -50%)",width:n?"calc(100% - 32px)":420,maxWidth:"calc(100vw - 32px)",maxHeight:"75vh",overflowY:"auto",background:"rgba(24,18,10,0.97)",borderRadius:16,padding:"22px 24px",border:"1px solid rgba(196,144,90,0.55)",boxShadow:"0 20px 60px rgba(0,0,0,0.7)",backdropFilter:"blur(18px)",zIndex:40},children:[V.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"flex-start",marginBottom:8},children:[V.jsxs("div",{children:[V.jsx("div",{style:{fontSize:9,letterSpacing:"0.14em",textTransform:"uppercase",color:"#C4905A"},children:"Material · Sample"}),V.jsx("div",{style:{fontFamily:"'Cormorant Garamond', serif",fontSize:22,color:"#F8EED8",marginTop:2},children:r.name})]}),V.jsx("button",{onClick:()=>e(null),style:{border:"none",background:"rgba(248,238,216,0.1)",color:"rgba(248,238,216,0.7)",borderRadius:8,width:28,height:28,fontSize:14,cursor:"pointer"},children:"×"})]}),V.jsx("div",{style:{fontSize:11,color:"rgba(248,238,216,0.55)",fontFamily:"'DM Sans', sans-serif",marginBottom:16},children:r.dim}),V.jsx("div",{style:{display:"grid",gridTemplateColumns:"1fr 1fr",gap:10,fontFamily:"'DM Sans', sans-serif"},children:r.specs.map((s,a)=>V.jsxs("div",{style:{padding:"8px 10px",background:"rgba(248,238,216,0.04)",borderRadius:8,border:"1px solid rgba(248,238,216,0.08)"},children:[V.jsx("div",{style:{fontSize:8,letterSpacing:"0.1em",textTransform:"uppercase",color:"rgba(248,238,216,0.45)"},children:s[0]}),V.jsx("div",{style:{fontSize:12,color:"#F8EED8",marginTop:2},children:s[1]})]},a))}),V.jsx("div",{style:{marginTop:14,padding:10,background:"rgba(196,144,90,0.12)",borderRadius:8,fontSize:11,fontStyle:"italic",color:"rgba(248,238,216,0.75)",fontFamily:"'DM Sans'"},children:r.note})]})]}):null}function tE({isMobile:r,loaded:e,loadingProgress:n,activeZone:s,hovered:a,showHint:l,splitScreen:u,guidedTour:f,tourZoneIndex:p,setGuidedTour:m,comparisonMode:x,idlePrompt:S,showWelcome:g,showHelp:M,tutorialStep:T,inspectorMode:C,patientSimActive:_,occupancy:v,tourRef:b}){return V.jsxs(V.Fragment,{children:[V.jsxs("div",{style:{position:"absolute",top:0,left:0,right:0,padding:r?"16px 16px 50px":"20px 28px 60px",background:"linear-gradient(180deg, rgba(18,12,6,0.82) 0%, transparent 100%)",display:"flex",alignItems:"flex-start",justifyContent:"space-between",pointerEvents:"none"},children:[V.jsxs("div",{className:e?"fade-up":"",style:{opacity:e?1:0,maxWidth:r?"calc(100% - 60px)":"auto"},children:[V.jsx("div",{style:{fontFamily:"'Cormorant Garamond', serif",fontSize:r?18:23,fontWeight:600,color:"#F8EED8",letterSpacing:"-0.01em",lineHeight:1.1},children:"Integrated Modular Healing Space"}),V.jsx("div",{style:{fontFamily:"'DM Sans', sans-serif",fontSize:r?8:10,letterSpacing:"0.16em",textTransform:"uppercase",color:"rgba(248,238,216,0.5)",marginTop:5},children:"3D Spatial Prototype · Hospital Waiting Environment · Team 142"})]}),!r&&V.jsxs("div",{style:{fontFamily:"'DM Sans', sans-serif",fontSize:10,color:"rgba(248,238,216,0.38)",textAlign:"right",lineHeight:1.8,letterSpacing:"0.04em"},children:["300 m² floor plate",V.jsx("br",{}),"Capacity: 40–60 persons",V.jsx("br",{}),"Scale approx. 1:50"]})]}),l&&!s&&!r&&V.jsxs("div",{style:{position:"absolute",bottom:28,left:"50%",transform:"translateX(-50%)",background:"rgba(16,10,4,0.82)",color:"rgba(248,238,216,0.7)",padding:"10px 24px",borderRadius:30,fontFamily:"'DM Sans'",fontSize:11,letterSpacing:"0.05em",backdropFilter:"blur(12px)",border:"1px solid rgba(248,238,216,0.1)",pointerEvents:"none",display:"flex",gap:22},children:[V.jsx("span",{children:"🖱 Drag to orbit"}),V.jsx("span",{children:"⚲ Scroll to zoom"}),V.jsx("span",{children:"Click zones"}),V.jsx("span",{children:"Press H for help"})]}),l&&!s&&r&&V.jsx("div",{style:{position:"absolute",bottom:145,left:"50%",transform:"translateX(-50%)",background:"rgba(16,10,4,0.82)",color:"rgba(248,238,216,0.7)",padding:"10px 20px",borderRadius:30,fontFamily:"'DM Sans'",fontSize:10,letterSpacing:"0.05em",backdropFilter:"blur(12px)",border:"1px solid rgba(248,238,216,0.1)",pointerEvents:"none",textAlign:"center",maxWidth:"calc(100% - 32px)"},children:V.jsx("span",{children:"Swipe to explore · Tap zones · Press ? for help"})}),!r&&V.jsxs("div",{style:{position:"absolute",bottom:28,right:26,fontFamily:"'DM Sans'",fontSize:9,color:"rgba(248,238,216,0.32)",textAlign:"center",lineHeight:1.9,letterSpacing:"0.1em"},children:[V.jsx("div",{style:{fontSize:20,opacity:.35},children:"⊕"}),"N"]}),!r&&V.jsx("div",{style:{position:"absolute",bottom:78,left:"50%",transform:"translateX(-50%)",display:"flex",gap:8,alignItems:"center",pointerEvents:"none"},children:Qt.map(L=>V.jsx("div",{style:{width:(s==null?void 0:s.id)===L.id?20:6,height:6,borderRadius:3,background:(s==null?void 0:s.id)===L.id?L.accent:"rgba(248,238,216,0.22)",transition:"all 0.35s cubic-bezier(.4,0,.2,1)"}},L.id))}),_&&!r&&!u&&V.jsxs("div",{className:"panel-in",style:{position:"absolute",top:150,left:26,width:220,padding:16,background:"rgba(18,12,6,0.9)",borderRadius:12,border:"1px solid rgba(74,138,88,0.4)",backdropFilter:"blur(14px)",zIndex:15,fontFamily:"'DM Sans', sans-serif"},children:[V.jsxs("div",{style:{fontSize:9,letterSpacing:"0.14em",textTransform:"uppercase",color:"rgba(74,138,88,0.9)",marginBottom:10,display:"flex",alignItems:"center",gap:6},children:[V.jsx("span",{style:{width:6,height:6,borderRadius:3,background:"#4A8A58",display:"inline-block",animation:"pulse 1.5s infinite"}}),"Live Occupancy"]}),Qt.map(L=>{const P=v[L.id]||0;return V.jsxs("div",{style:{marginBottom:8},children:[V.jsxs("div",{style:{display:"flex",justifyContent:"space-between",fontSize:11,color:"rgba(248,238,216,0.8)",marginBottom:3},children:[V.jsxs("span",{children:[L.icon," ",L.label.split(" ")[0]]}),V.jsx("span",{style:{color:L.accent,fontWeight:500},children:P})]}),V.jsx("div",{style:{height:4,background:"rgba(248,238,216,0.08)",borderRadius:2,overflow:"hidden"},children:V.jsx("div",{style:{height:"100%",width:`${Math.min(100,P*25)}%`,background:L.accent,transition:"width 0.4s"}})})]},L.id)}),V.jsx("div",{style:{fontSize:9,color:"rgba(248,238,216,0.4)",marginTop:10,paddingTop:8,borderTop:"1px solid rgba(248,238,216,0.08)"},children:"8 simulated patients · stress-adaptive routing"})]}),a&&!s&&!C&&V.jsxs("div",{style:{position:"absolute",top:r?108:120,left:"50%",transform:"translateX(-50%)",padding:"5px 14px",borderRadius:14,background:"rgba(18,12,6,0.78)",border:`1px solid ${a.accent}66`,backdropFilter:"blur(10px)",fontFamily:"'DM Sans', sans-serif",fontSize:11,color:"rgba(248,238,216,0.85)",letterSpacing:"0.04em",display:"flex",alignItems:"center",gap:6,zIndex:12,pointerEvents:"none"},children:[V.jsx("span",{style:{color:a.accent},children:a.icon}),a.label,V.jsx("span",{style:{color:"rgba(248,238,216,0.35)",fontSize:10,marginLeft:4},children:"· click to enter"})]}),C&&V.jsx("div",{style:{position:"absolute",top:r?110:140,left:"50%",transform:"translateX(-50%)",padding:"8px 18px",borderRadius:16,background:"rgba(196,144,90,0.9)",color:"#fff",fontFamily:"'DM Sans'",fontSize:11,letterSpacing:"0.06em",zIndex:14,backdropFilter:"blur(12px)"},children:"⊙ Click a material surface (floor, beam, moss, acoustic panel)"}),u&&V.jsxs(V.Fragment,{children:[V.jsx("div",{style:{position:"absolute",top:r?120:150,left:"25%",transform:"translateX(-50%)",padding:"8px 20px",borderRadius:10,background:"rgba(60,70,85,0.92)",color:"#fff",fontFamily:"'DM Sans'",fontSize:r?10:12,letterSpacing:"0.12em",textTransform:"uppercase",fontWeight:500,zIndex:14,border:"1px solid rgba(255,255,255,0.18)"},children:"⊘ Typical Ward"}),V.jsx("div",{style:{position:"absolute",top:r?120:150,left:"75%",transform:"translateX(-50%)",padding:"8px 20px",borderRadius:10,background:"rgba(74,138,88,0.92)",color:"#fff",fontFamily:"'DM Sans'",fontSize:r?10:12,letterSpacing:"0.12em",textTransform:"uppercase",fontWeight:500,zIndex:14,border:"1px solid rgba(255,255,255,0.22)"},children:"✦ Healing Space"}),V.jsx("div",{style:{position:"absolute",top:0,bottom:0,left:"50%",width:2,background:"rgba(248,238,216,0.4)",zIndex:13}})]}),x&&V.jsxs("div",{style:{position:"absolute",top:r?110:140,left:"50%",transform:"translateX(-50%)",background:"rgba(60,70,85,0.92)",color:"#fff",padding:r?"10px 18px":"12px 26px",borderRadius:14,fontFamily:"'DM Sans', sans-serif",fontSize:r?10:12,letterSpacing:"0.08em",backdropFilter:"blur(12px)",border:"1px solid rgba(255,255,255,0.18)",textAlign:"center",zIndex:15,maxWidth:r?"calc(100% - 32px)":420,boxShadow:"0 10px 30px rgba(0,0,0,0.4)"},children:[V.jsx("div",{style:{fontSize:r?9:10,opacity:.65,textTransform:"uppercase",letterSpacing:"0.14em",marginBottom:3},children:"Baseline Reference"}),V.jsx("div",{style:{fontWeight:500},children:"Typical Hospital Waiting Room · Fluorescent, desaturated, no biophilic elements"})]}),f&&V.jsxs("div",{style:{position:"absolute",bottom:r?80:36,left:"50%",transform:"translateX(-50%)",display:"flex",flexDirection:"column",alignItems:"center",gap:10,zIndex:14,pointerEvents:"auto"},children:[V.jsxs("div",{style:{padding:"8px 20px",borderRadius:16,background:"rgba(16,10,4,0.88)",border:"1px solid rgba(85,114,196,0.5)",backdropFilter:"blur(12px)",display:"flex",alignItems:"center",gap:14,fontFamily:"'DM Sans'",fontSize:11,color:"rgba(248,238,216,0.85)",letterSpacing:"0.05em"},children:[V.jsx("span",{style:{color:"#5572C4"},children:"▶"}),V.jsxs("span",{children:["Guided Tour",p>=0?` · ${Qt[p].label}`:" · Starting"]}),V.jsx("span",{style:{color:"rgba(248,238,216,0.35)",fontSize:10},children:b?`${b.waypointIdx+1}/${b.waypoints.length}`:""}),V.jsx("button",{onClick:()=>m(!1),className:"zbtn",style:{padding:"4px 12px",borderRadius:12,border:"1px solid rgba(248,238,216,0.25)",background:"rgba(248,238,216,0.08)",color:"rgba(248,238,216,0.75)",fontSize:10,cursor:"pointer",fontFamily:"'DM Sans'"},children:"Exit Tour"})]}),V.jsx("div",{style:{display:"flex",gap:4,alignItems:"center"},children:Qt.map((L,P)=>V.jsx("div",{style:{width:p===P?18:6,height:6,borderRadius:3,background:p===P?L.accent:"rgba(248,238,216,0.2)",transition:"all 0.4s ease"}},L.id))})]}),S&&e&&!s&&!g&&!M&&!f&&T<0&&V.jsxs("div",{style:{position:"absolute",bottom:r?160:120,left:"50%",transform:"translateX(-50%)",display:"flex",flexDirection:"column",alignItems:"center",gap:8,pointerEvents:"none",animation:"idleBob 2s ease-in-out infinite",zIndex:12},children:[V.jsx("div",{style:{width:28,height:44,borderRadius:14,border:"2px solid rgba(248,238,216,0.35)",display:"flex",justifyContent:"center",paddingTop:8},children:V.jsx("div",{style:{width:4,height:10,borderRadius:2,background:"rgba(248,238,216,0.6)",animation:"fadeUp 1.2s ease-in-out infinite"}})}),V.jsx("span",{style:{fontFamily:"'DM Sans', sans-serif",fontSize:10,letterSpacing:"0.1em",textTransform:"uppercase",color:"rgba(248,238,216,0.4)"},children:"Scroll to explore"})]}),!e&&n<100&&V.jsxs("div",{style:{position:"absolute",inset:0,background:"#16100A",display:"flex",alignItems:"center",justifyContent:"center",flexDirection:"column",zIndex:100,transition:"opacity 0.5s"},children:[V.jsx("div",{style:{fontFamily:"'Cormorant Garamond', serif",fontSize:r?22:28,color:"#F8EED8",marginBottom:24},children:"Loading Healing Space"}),V.jsx("div",{style:{width:r?220:280,height:4,background:"rgba(248,238,216,0.1)",borderRadius:2,overflow:"hidden"},children:V.jsx("div",{style:{width:`${n}%`,height:"100%",background:"linear-gradient(90deg, #C4905A, #4A8A58, #5572C4, #8A5898)",transition:"width 0.3s ease"}})}),V.jsxs("div",{style:{fontFamily:"'DM Sans', sans-serif",fontSize:12,color:"rgba(248,238,216,0.5)",marginTop:16},children:[n,"%"]})]})]})}function nE({isMobile:r,comparisonMode:e,setComparisonMode:n,showHelp:s,setShowHelp:a,onTutorialAction:l,tutorialHighlight:u}){const f=u==="comparison";return V.jsxs("div",{style:{position:"absolute",top:r?16:90,right:r?16:22,display:"flex",gap:8,zIndex:f?45:30,pointerEvents:"auto"},children:[V.jsx("button",{onClick:()=>{n(!e),l&&l("toggle_comparison")},className:"zbtn",style:{height:40,padding:"0 14px",borderRadius:20,border:`1.5px solid ${f?"rgba(196,144,90,0.8)":e?"#C4905A":"rgba(248,238,216,0.3)"}`,background:e?"#C4905A":"rgba(18,12,6,0.7)",color:e?"#fff":"rgba(248,238,216,0.8)",fontSize:r?10:11,cursor:"pointer",backdropFilter:"blur(12px)",fontFamily:"'DM Sans'",letterSpacing:"0.04em",display:"flex",alignItems:"center",gap:6,...f?{animation:"tutorialGlow 2s ease-in-out infinite"}:{}},title:"Compare to typical waiting room",children:e?"✨ Healing View":"⊘ Standard View"}),V.jsx("button",{onClick:()=>a(!s),className:"zbtn",style:{width:40,height:40,borderRadius:"50%",border:`1.5px solid ${s?"#5572C4":"rgba(248,238,216,0.3)"}`,background:s?"#5572C4":"rgba(18,12,6,0.7)",color:"rgba(248,238,216,0.8)",fontSize:18,cursor:"pointer",backdropFilter:"blur(12px)",display:"flex",alignItems:"center",justifyContent:"center"},title:"Help (press H or ?)",children:"?"})]})}function iE({showHelp:r,setShowHelp:e,isMobile:n,setTutorialStep:s,setWelcomePhase:a}){return r?V.jsxs("div",{className:"panel-in",style:{position:"absolute",top:n?65:140,right:n?16:22,width:260,background:"rgba(18,12,6,0.95)",borderRadius:16,padding:"20px 22px",border:"1px solid rgba(85,114,196,0.4)",boxShadow:"0 16px 40px rgba(0,0,0,0.6)",backdropFilter:"blur(18px)",zIndex:40},children:[V.jsx("div",{style:{fontFamily:"'Cormorant Garamond', serif",fontSize:20,color:"#F8EED8",marginBottom:16},children:"Controls & Help"}),V.jsxs("div",{style:{display:"grid",gridTemplateColumns:"auto 1fr",gap:"10px 14px",fontFamily:"'DM Sans'",fontSize:11,color:"rgba(248,238,216,0.7)"},children:[V.jsx("span",{style:{color:"#5572C4",fontWeight:500},children:"🖱 L-Click + Drag"})," ",V.jsx("span",{children:"Orbit camera"}),V.jsx("span",{style:{color:"#5572C4",fontWeight:500},children:"🖱 R-Click + Drag"})," ",V.jsx("span",{children:"Pan camera"}),V.jsx("span",{style:{color:"#5572C4",fontWeight:500},children:"⚲ Scroll"})," ",V.jsx("span",{children:"Zoom in/out"}),V.jsx("span",{style:{color:"#5572C4",fontWeight:500},children:"📱 Pinch/Swipe"})," ",V.jsx("span",{children:"Mobile controls"}),V.jsx("span",{style:{color:"#C4905A",fontWeight:500},children:"⌨️ [ H ] or [ ? ]"})," ",V.jsx("span",{children:"Toggle this help"}),V.jsx("span",{style:{color:"#C4905A",fontWeight:500},children:"⌨️ [ C ]"})," ",V.jsx("span",{children:"Toggle comparison"}),V.jsx("span",{style:{color:"#C4905A",fontWeight:500},children:"⌨️ [ T ]"})," ",V.jsx("span",{children:"Toggle tools panel"})]}),V.jsx("div",{style:{marginTop:20,paddingTop:16,borderTop:"1px solid rgba(248,238,216,0.1)",display:"flex",flexDirection:"column",gap:8},children:V.jsx("button",{onClick:()=>{e(!1),s(0),a("done")},className:"zbtn",style:{padding:"8px 0",width:"100%",borderRadius:8,background:"rgba(85,114,196,0.15)",border:"1px solid rgba(85,114,196,0.4)",color:"#8FA8F0",fontSize:11,fontFamily:"'DM Sans'",cursor:"pointer"},children:"▶ Replay Interactive Tutorial"})})]}):null}function rE(){var vt;const r=Et.useRef(null),e=Et.useRef({}),[n,s]=Et.useState(null),[a,l]=Et.useState(!0),[u,f]=Et.useState(!1),[p,m]=Et.useState(null),[x,S]=Et.useState(!1),[g,M]=Et.useState(!1),[T,C]=Et.useState(0),[_,v]=Et.useState(!1),[b,L]=Et.useState(!1),[P,B]=Et.useState(!1),[I,k]=Et.useState(12),[w,N]=Et.useState(!1),[j,O]=Et.useState(-1),[Y,oe]=Et.useState(!1),[he,W]=Et.useState(!1),[te,$]=Et.useState(null),[Z,ce]=Et.useState(!1),[ue,F]=Et.useState(!1),[ne,Ge]=Et.useState({}),[qe,Xe]=Et.useState(!0),[Q,Ae]=Et.useState("intro"),[Se,ze]=Et.useState(-1),[it,at]=Et.useState(!1),Nt=Et.useRef(null),_t=Et.useRef(null),Tt=Et.useCallback(de=>{ze(D=>D>=0&&Tn[D].requiredAction===de?D+1:D)},[]),Ot=Et.useCallback(de=>{if((n==null?void 0:n.id)===de.id){const pt=e.current;pt.isOrbit=!0,pt.tPos&&pt.tLookAt&&(pt.tPos.set(0,7.5,15.5),pt.tLookAt.set(0,1,0)),s(null),m(null);return}const D=e.current;D.isOrbit=!1,D.tPos&&D.tLookAt&&(D.tPos.set(de.camPos[0],de.camPos[1],de.camPos[2]),D.tLookAt.set(de.lookAt[0],de.lookAt[1],de.lookAt[2])),s(de),l(!1)},[n]),gt=Et.useCallback(()=>{const de=e.current;de.isOrbit=!0,de.tPos&&de.tLookAt&&(de.tPos.set(0,7.5,15.5),de.tLookAt.set(0,1,0)),s(null),m(null)},[]),Gt=Et.useRef(Ot),Bt=Et.useRef(gt);Et.useEffect(()=>{Gt.current=Ot,Bt.current=gt});const ln=Et.useCallback(de=>{if(!n)return;const D=Qt.findIndex(R=>R.id===n.id),pt=Qt[(D+de+Qt.length)%Qt.length];Ot(pt)},[n,Ot]);Et.useEffect(()=>{e.current.heatmapMode=P},[P]),Et.useEffect(()=>{e.current.inspectorMode=he},[he]),Et.useEffect(()=>{e.current.splitScreen=Y},[Y]),Et.useEffect(()=>{const de=e.current.animRefs;de!=null&&de.patientGroup&&(de.patientGroup.visible=Z,e.current.patientSimActive=Z,Z||Ge({}))},[Z]),Et.useEffect(()=>{e.current.guidedTour=w,w?(e.current.tour={startTime:0,waypointIdx:0,segmentStart:0,started:!1,fromPos:new J(0,7.5,15.5),fromLookAt:new J(0,1,0),waypoints:YM},e.current.isOrbit=!1,s(null)):(e.current.tour=null,gt())},[w,gt]),Et.useEffect(()=>{const de=e.current.animRefs;if(!de||!de.sun||b)return;const D=I,pt=Math.max(0,Math.min(1,(D-6)/12)),R=pt*Math.PI,y=-12+pt*24,K=Math.sin(R)*14+2,xe=10-pt*4;de.sun.position.set(y,K,xe);let Me,Te,Ie,fe,_e,ke;if(D<6||D>20?(Me=2241354,Te=.05,Ie=1712176,fe=.2,_e=660520,ke=.1):D<8?(Me=16758904,Te=.6,Ie=16767920,fe=.35,_e=16754816,ke=.8):D<17?(Me=16772560,Te=1.05,Ie=16774628,fe=.45,_e=8965375,ke=.6):D<19?(Me=16750168,Te=.8,Ie=16764048,fe=.4,_e=16744280,ke=.9):(Me=6967440,Te=.25,Ie=4866144,fe=.28,_e=3813464,ke=.3),de.sun.color.setHex(Me),de.sun.intensity=Te,de.ambient.color.setHex(Ie),de.ambient.intensity=fe,de.skyMat){const Pe=new Rt(_e);Pe.lerp(new Rt(16777215),1-Math.min(1,ke)),de.skyMat.color.copy(Pe)}const We=D<7||D>18?1:0;e.current.nightBoost=We},[I,b]),Et.useEffect(()=>{var D,pt,R;const de=e.current.animRefs;!de||!de.ambient||(b?(e.current.comparisonMode=!0,de.ambient.color.setHex(15398143),de.ambient.intensity=.95,de.sun.color.setHex(15791871),de.sun.intensity=.6,de.fillLight.intensity=.15,(D=de.accentLights)==null||D.forEach(y=>{y.intensity=0}),(pt=de.pendants)==null||pt.forEach(y=>{y.pl.intensity=0}),e.current.scene&&(e.current.scene.background=new Rt(14212836),e.current.scene.fog&&e.current.scene.fog.color.setHex(14212836))):(e.current.comparisonMode=!1,de.ambient.color.setHex(16774628),de.ambient.intensity=.45,de.sun.color.setHex(16772560),de.sun.intensity=1.05,de.fillLight.intensity=.35,(R=de.accentLights)==null||R.forEach((y,K)=>{y.color.setHex(Qt[K].hex),y.intensity=1.4}),e.current.scene&&(e.current.scene.background=new Rt(15589576),e.current.scene.fog&&e.current.scene.fog.color.setHex(15589576))))},[b]),Et.useEffect(()=>{e.current.tutorialStep=Se},[Se]),Et.useEffect(()=>{if(Se<0)return;const de=Tn[Se];if(!de)return;const D=e.current;de.cam?(D.isOrbit=!1,D.tPos&&D.tLookAt&&(D.tPos.set(de.cam.pos[0],de.cam.pos[1],de.cam.pos[2]),D.tLookAt.set(de.cam.lookAt[0],de.cam.lookAt[1],de.cam.lookAt[2]))):(Se===0||!de.cam)&&(D.isOrbit=!0,D.tPos&&D.tLookAt&&(D.tPos.set(0,7.5,15.5),D.tLookAt.set(0,1,0))),de.highlight==="tools"&&F(!0)},[Se]),Et.useEffect(()=>{const de=()=>{at(!1),Nt.current&&clearTimeout(Nt.current),Nt.current=setTimeout(()=>at(!0),5e3)};return de(),window.addEventListener("mousemove",de),window.addEventListener("mousedown",de),window.addEventListener("wheel",de),window.addEventListener("touchstart",de),window.addEventListener("keydown",de),()=>{Nt.current&&clearTimeout(Nt.current),window.removeEventListener("mousemove",de),window.removeEventListener("mousedown",de),window.removeEventListener("wheel",de),window.removeEventListener("touchstart",de),window.removeEventListener("keydown",de)}},[]),Et.useEffect(()=>{const de=()=>{v(window.innerWidth<=768||"ontouchstart"in window)};return de(),window.addEventListener("resize",de),()=>window.removeEventListener("resize",de)},[]),Et.useEffect(()=>{const de=r.current;if(!de)return;const D=e.current;D.animRefs={};try{const pe=document.createElement("canvas");if(!(pe.getContext("webgl")||pe.getContext("experimental-webgl"))){M(!0);return}}catch{M(!0);return}C(10);const pt=window.innerWidth<=768||"ontouchstart"in window;D.renderer=new jM({antialias:!pt,powerPreference:"high-performance"}),D.renderer.setPixelRatio(Math.min(window.devicePixelRatio,pt?1.5:2)),D.renderer.setSize(de.clientWidth,de.clientHeight),D.renderer.shadowMap.enabled=!pt,pt||(D.renderer.shadowMap.type=oa),D.renderer.toneMapping=df,D.renderer.toneMappingExposure=1.1,D.renderer.outputColorSpace=ai,de.appendChild(D.renderer.domElement),C(30),D.scene=new Tv,D.scene.background=new Rt(15589576),D.scene.fog=new Mf(15589576,18,30),D.camera=new mi(54,de.clientWidth/de.clientHeight,.1,80),D.camera.position.set(0,7.5,15.5),C(50),D.clickables=qM(D.scene,D.animRefs);const R=[5929630,13144688,10386120,7383184,13138590,10399344,8036040,13147738],y=[],K=new Ki;K.visible=!1,D.scene.add(K);for(let pe=0;pe<8;pe++){const ve=new Ki,me=R[pe],De=new be(En(.14,.18,.7,8),tt(me,.85));De.position.y=.35,De.castShadow=!0,ve.add(De);const Ve=new be(ao(.11,10,8),tt(15253656,.85));Ve.position.y=.82,Ve.castShadow=!0,ve.add(Ve);const et=-6+Math.random()*12;ve.position.set(et,0,6.2),K.add(ve),y.push({group:ve,state:"entering",target:new J(0,0,-5),waypoint:null,zoneId:null,dwellEnd:0,speed:.012+Math.random()*.008,stressLevel:.7+Math.random()*.3,bobPhase:Math.random()*Math.PI*2,spawnDelay:pe*600,spawnTime:0})}D.animRefs.patients=y,D.animRefs.patientGroup=K,C(70),D.orbit={theta:.38,phi:.58,radius:15.5},D.isOrbit=!0,D.tPos=new J(0,7.5,15.5),D.tLookAt=new J(0,1,0),D.cLookAt=new J(0,1,0);const xe=new Kv,Me=new Vt,Te=(pe,ve)=>{const me=de.getBoundingClientRect();Me.x=(pe-me.left)/me.width*2-1,Me.y=-((ve-me.top)/me.height)*2+1,xe.setFromCamera(Me,D.camera);const De=xe.intersectObjects(D.clickables.map(Ve=>Ve.mesh));return De.length?D.clickables.find(Ve=>Ve.mesh===De[0].object):null};let Ie=!1,fe=!1,_e=0,ke=0,We=0,Pe=0;const Ue=pe=>{Ie=!0,fe=!1,_e=pe.clientX,ke=pe.clientY,l(!1),de.style.cursor="grabbing"},ut=pe=>{if(!Ie){const De=Te(pe.clientX,pe.clientY);m(De?Qt.find(et=>et.id===De.zoneId):null),de.style.cursor=De?"pointer":D.guidedTour?"default":"grab";const Ve=De?De.mesh:null;if(Ve!==_t.current){if(_t.current){const et=_t.current.material;et&&et._origEmissive!==void 0&&(et.emissiveIntensity=et._origEmissive,delete et._origEmissive)}if(Ve){const et=Ve.material;et&&et.emissiveIntensity!==void 0&&(et._origEmissive=et.emissiveIntensity,et.emissiveIntensity=Math.max(et.emissiveIntensity+.5,.8),(!et.emissive||et.emissive.getHex()===0)&&(et.emissive=new Rt(5588019)))}_t.current=Ve}return}const ve=pe.clientX-_e,me=pe.clientY-ke;if((Math.abs(ve)>2||Math.abs(me)>2)&&(fe=!0),!D.guidedTour){if(D.isOrbit){if(D.tutorialStep>=0){const De=Tn[D.tutorialStep];if(De.requiredAction==="orbit")We+=Math.abs(ve)+Math.abs(me),We>80&&Tt("orbit");else if(De.requiredAction)return}D.orbit.theta-=ve*.005,D.orbit.phi=Math.max(.18,Math.min(1.35,D.orbit.phi+me*.005))}}_e=pe.clientX,ke=pe.clientY},mt=()=>{Ie=!1,de.style.cursor="grab"},wt=pe=>{if(D.tutorialStep>=0){const ve=Tn[D.tutorialStep];if(ve.requiredAction==="zoom")Pe+=Math.abs(pe.deltaY),Pe>150&&Tt("zoom");else if(ve.requiredAction)return}D.isOrbit&&(D.orbit.radius=Math.max(8,Math.min(20,D.orbit.radius+pe.deltaY*.013)))},z=pe=>{var De;if(fe||D.tutorialStep>=0&&Tn[D.tutorialStep].requiredAction)return;const ve=Te(pe.clientX,pe.clientY);if(!ve)return;if(D.inspectorMode&&((De=ve.mesh.userData)!=null&&De.material)){const Ve=ve.mesh.userData.material;$(et=>(et==null?void 0:et.name)===Ve.name?null:Ve);return}const me=Qt.find(Ve=>Ve.id===ve.zoneId);me&&Gt.current(me)};let Le=null,ge=0;const je=pe=>{if(pe.touches.length===1)Le=pe.touches[0],l(!1);else if(pe.touches.length===2){const ve=pe.touches[0].clientX-pe.touches[1].clientX,me=pe.touches[0].clientY-pe.touches[1].clientY;ge=Math.sqrt(ve*ve+me*me)}},Fe=pe=>{if(pe.touches.length===1&&Le){const ve=pe.touches[0],me=ve.clientX-Le.clientX,De=ve.clientY-Le.clientY;D.tutorialStep>=0&&Tn[D.tutorialStep].requiredAction==="orbit"&&(We+=Math.abs(me)+Math.abs(De),We>80&&Tt("orbit")),D.orbit.theta-=me*.005,D.orbit.phi=Math.max(.18,Math.min(1.35,D.orbit.phi+De*.005)),Le=ve,pe.preventDefault()}else if(pe.touches.length===2&&ge>0){const ve=pe.touches[0].clientX-pe.touches[1].clientX,me=pe.touches[0].clientY-pe.touches[1].clientY,De=Math.sqrt(ve*ve+me*me),Ve=ge-De;D.tutorialStep>=0&&Tn[D.tutorialStep].requiredAction==="zoom"&&(Pe+=Math.abs(Ve),Pe>60&&Tt("zoom")),D.orbit.radius=Math.max(8,Math.min(20,D.orbit.radius+Ve*.02)),ge=De,pe.preventDefault()}},we=()=>{Le=null,ge=0},Ze=pe=>{},dt=pe=>{pe.key==="Escape"&&(x?S(!1):he?(W(!1),$(null)):D.guidedTour?N(!1):n&&Bt.current()),pe.key==="1"&&Qt[0]&&Gt.current(Qt[0]),pe.key==="2"&&Qt[1]&&Gt.current(Qt[1]),pe.key==="3"&&Qt[2]&&Gt.current(Qt[2]),pe.key==="4"&&Qt[3]&&Gt.current(Qt[3]),(pe.key==="r"||pe.key==="R")&&Bt.current(),(pe.key==="h"||pe.key==="H"||pe.key==="?")&&S(ve=>!ve),D.isOrbit&&(pe.key==="ArrowLeft"&&(D.orbit.theta-=.1),pe.key==="ArrowRight"&&(D.orbit.theta+=.1),pe.key==="ArrowUp"&&(D.orbit.phi=Math.max(.18,D.orbit.phi-.1)),pe.key==="ArrowDown"&&(D.orbit.phi=Math.min(1.35,D.orbit.phi+.1)))};let Mt=0;const ye=pe=>{if(D.frame=requestAnimationFrame(ye),Mt=pe*.001,D.guidedTour&&D.tour){const ve=D.tour;ve.started||(ve.started=!0,ve.startTime=pe,ve.segmentStart=pe,ve.fromPos.copy(D.camera.position),ve.fromLookAt.copy(D.cLookAt));const me=ve.waypoints[ve.waypointIdx],De=(pe-ve.segmentStart)/1e3,Ve=Math.min(1,De/me.dur),et=Ve<.5?4*Ve*Ve*Ve:1-Math.pow(-2*Ve+2,3)/2,Ut=new J(me.pos[0],me.pos[1],me.pos[2]),Yt=new J(me.lookAt[0],me.lookAt[1],me.lookAt[2]);if(D.camera.position.lerpVectors(ve.fromPos,Ut,et),D.cLookAt.lerpVectors(ve.fromLookAt,Yt,et),D.camera.lookAt(D.cLookAt),me.zoneIdx!==D._lastTourZone&&(D._lastTourZone=me.zoneIdx,O(me.zoneIdx),me.zoneIdx>=0?s(Qt[me.zoneIdx]):s(null)),Ve>=1){if(ve.waypointIdx++,ve.waypointIdx>=ve.waypoints.length){N(!1);return}ve.segmentStart=pe,ve.fromPos.copy(D.camera.position),ve.fromLookAt.copy(D.cLookAt)}}else{if(D.isOrbit){const{theta:me,phi:De,radius:Ve}=D.orbit;D.tPos.set(Ve*Math.sin(De)*Math.sin(me),Ve*Math.cos(De),Ve*Math.sin(De)*Math.cos(me)),D.tLookAt.set(0,1,0)}const ve=D.isOrbit?.08:.06;D.camera.position.lerp(D.tPos,ve),D.cLookAt.lerp(D.tLookAt,ve),D.camera.lookAt(D.cLookAt)}if(D.animRefs.pendants&&D.animRefs.pendants.forEach(ve=>{ve.pl.intensity=D.comparisonMode?0:1.1+Math.sin(Mt*1.1+ve.phase)*.12}),D.animRefs.plants&&D.animRefs.plants.forEach(ve=>{ve.mesh.position.y=ve.baseY+Math.sin(Mt*.55+ve.phase)*.018,ve.mesh.rotation.z=Math.sin(Mt*.4+ve.phase)*.025}),D.animRefs.water&&(D.animRefs.water.material.opacity=.75+Math.sin(Mt*1.8)*.06,D.animRefs.water.material.color.setHSL(.52,.5,.55+Math.sin(Mt*.9)*.04)),D.animRefs.screens&&D.animRefs.screens.forEach(ve=>{ve.isPl?ve.pl.intensity=.7+Math.sin(Mt*2.2+ve.phase)*.25:ve.isBar?ve.mat.emissiveIntensity=1.5+Math.sin(Mt*1.6+ve.phase)*.5:ve.mat&&(ve.mat.emissiveIntensity=.6+Math.sin(Mt*.8+ve.phase)*.15)}),D.animRefs.lampLight&&(D.animRefs.lampLight.intensity=D.comparisonMode?0:1.5+Math.sin(Mt*1.3)*.15),D.animRefs.heatmapDiscs&&D.animRefs.heatmapDiscs.forEach((ve,me)=>{const De=D.heatmapMode?.22:0;ve.material.opacity=De*(1+Math.sin(Mt*.9+me)*.35),ve.scale.setScalar(1+Math.sin(Mt*.7+me*.8)*.08)}),D.animRefs.patients&&D.patientSimActive){const ve={seating:0,biophilic:0,digital:0,calm:0,reception:0};D.animRefs.patients.forEach(me=>{if(me.spawnTime||(me.spawnTime=pe),pe-me.spawnTime<me.spawnDelay)return;const De=me.group,Ve=(Ft,rn)=>{if(Math.sign(Ft.x)===Math.sign(rn.x)||Ft.x===0||rn.x===0)return null;const An=Ft.x/(Ft.x-rn.x),Un=Ft.z+(rn.z-Ft.z)*An;return Un>-4.25&&Un<5.25?new J(Ft.x>0?.5:-.5,0,5.8):null};!me.waypoint&&me.state!=="dwelling"&&(me.waypoint=Ve(De.position,me.target));const et=me.waypoint||me.target,Ut=new J().subVectors(et,De.position);Ut.y=0;const Yt=Ut.length();if(me.waypoint&&Yt<.35&&(me.waypoint=null),me.state==="dwelling"){if(De.position.y=Math.abs(Math.sin(Mt*2+me.bobPhase))*.02,pe>me.dwellEnd)if(Math.random()<.2)me.state="leaving",me.target.set(-6+Math.random()*12,0,7),me.zoneId=null;else{const Ft=Qt[Math.floor(Math.random()*Qt.length)];me.state="walking";const rn=(Math.random()-.5)*1.5,An=(Math.random()-.5)*1.5;me.target.set(Ft.pos[0]+rn,0,Ft.pos[2]+An),me.waypoint=null,me.zoneId=Ft.id,Ft.id==="calm"||Ft.id==="biophilic"?me.stressLevel=Math.max(.1,me.stressLevel-.25):Ft.id==="digital"&&(me.stressLevel=Math.max(.2,me.stressLevel-.1))}me.zoneId&&(ve[me.zoneId]=(ve[me.zoneId]||0)+1)}else Yt<.25?me.state==="leaving"?(me.group.position.set(-6+Math.random()*12,0,6.2),me.state="entering",me.target.set(0,0,-5),me.stressLevel=.7+Math.random()*.3):(me.state="dwelling",me.dwellEnd=pe+3e3+Math.random()*6e3):(Ut.normalize(),De.position.addScaledVector(Ut,me.speed*(1+(1-me.stressLevel)*.3)),De.rotation.y=Math.atan2(Ut.x,Ut.z),De.position.y=Math.abs(Math.sin(Mt*8+me.bobPhase))*.04);De.children[1].material.color.setHSL(.08+(1-me.stressLevel)*.2,.4,.65)}),(!D.lastOccUpdate||pe-D.lastOccUpdate>500)&&(D.lastOccUpdate=pe,Ge({...ve}))}if(D.splitScreen){const ve=de.clientWidth,me=de.clientHeight,De=ve/2;D.renderer.setScissorTest(!0);const Ve=D.comparisonMode;pd(D.animRefs,!0),D.renderer.setScissor(0,0,De,me),D.renderer.setViewport(0,0,De,me),D.camera.aspect=De/me,D.camera.updateProjectionMatrix(),D.scene.background&&D.scene.background.setHex(14212836),D.renderer.render(D.scene,D.camera),pd(D.animRefs,!1),D.renderer.setScissor(De,0,De,me),D.renderer.setViewport(De,0,De,me),D.scene.background&&D.scene.background.setHex(15589576),D.renderer.render(D.scene,D.camera),D.renderer.setScissorTest(!1),D.renderer.setViewport(0,0,ve,me),D.camera.aspect=ve/me,D.camera.updateProjectionMatrix(),pd(D.animRefs,Ve),D.scene.background&&D.scene.background.setHex(Ve?14212836:15589576)}else D.renderer.render(D.scene,D.camera)};ye(0),C(90),setTimeout(()=>{f(!0),C(100)},400),de.addEventListener("mousedown",Ue),window.addEventListener("mousemove",ut),window.addEventListener("mouseup",mt),de.addEventListener("click",z),de.addEventListener("wheel",wt,{passive:!0}),de.addEventListener("touchstart",je,{passive:!0}),de.addEventListener("touchmove",Fe,{passive:!1}),de.addEventListener("touchend",we,{passive:!0}),window.addEventListener("keydown",dt),window.addEventListener("keyup",Ze);const Ee=()=>{D.camera.aspect=de.clientWidth/de.clientHeight,D.camera.updateProjectionMatrix(),D.renderer.setSize(de.clientWidth,de.clientHeight)};return window.addEventListener("resize",Ee),()=>{cancelAnimationFrame(D.frame),de.removeEventListener("mousedown",Ue),window.removeEventListener("mousemove",ut),window.removeEventListener("mouseup",mt),de.removeEventListener("click",z),de.removeEventListener("wheel",wt),de.removeEventListener("touchstart",je),de.removeEventListener("touchmove",Fe),de.removeEventListener("touchend",we),window.removeEventListener("keydown",dt),window.removeEventListener("keyup",Ze),window.removeEventListener("resize",Ee),de.contains(D.renderer.domElement)&&de.removeChild(D.renderer.domElement),D.renderer.dispose()}},[]);const G=n;if(g)return V.jsx("div",{style:{display:"flex",alignItems:"center",justifyContent:"center",width:"100vw",height:"100vh",background:"#16100A",color:"#F8EED8",fontFamily:"'DM Sans', sans-serif",textAlign:"center",padding:40},children:V.jsxs("div",{children:[V.jsx("div",{style:{fontSize:48,marginBottom:20},children:"⚠️"}),V.jsx("h1",{style:{fontSize:24,marginBottom:12},children:"WebGL Not Supported"}),V.jsx("p",{style:{color:"rgba(248,238,216,0.7)",maxWidth:400},children:"Your browser doesn't support WebGL, which is required for this 3D experience. Please try using a modern browser like Chrome, Firefox, or Safari."})]})});const zt=Se>=0&&((vt=Tn[Se])==null?void 0:vt.highlight)||null;return V.jsxs("div",{style:{position:"relative",width:"100vw",height:"100vh",overflow:"hidden",background:"#16100A"},children:[V.jsx("style",{children:`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,600;1,300&family=DM+Sans:wght@300;400;500&display=swap');
        * { box-sizing: border-box; margin:0; padding:0; }
        .zbtn { transition: all 0.2s cubic-bezier(.4,0,.2,1); }
        .zbtn:hover { transform: translateY(-2px); filter: brightness(1.12); }
        .zbtn:active { transform: translateY(0); }
        @keyframes panelIn {
          from { opacity:0; transform:translateY(-50%) translateX(18px) scale(0.97); }
          to   { opacity:1; transform:translateY(-50%) translateX(0)     scale(1);    }
        }
        @keyframes fadeUp {
          from { opacity:0; transform:translateY(10px); }
          to   { opacity:1; transform:translateY(0); }
        }
        @keyframes pulse {
          0% { box-shadow: 0 0 0 0 rgba(196,144,90,0.4); }
          70% { box-shadow: 0 0 0 14px rgba(196,144,90,0); }
          100% { box-shadow: 0 0 0 0 rgba(196,144,90,0); }
        }
        @keyframes welcomeFadeIn { from { opacity: 0; } to { opacity: 1; } }
        @keyframes welcomeSlideUp {
          from { opacity: 0; transform: translate(-50%, -45%) scale(0.95); }
          to { opacity: 1; transform: translate(-50%, -50%) scale(1); }
        }
        @keyframes idleBob {
          0%, 100% { transform: translate(-50%, 0); }
          50% { transform: translate(-50%, -8px); }
        }
        .fade-up { animation: fadeUp 0.6s cubic-bezier(.2,.8,.2,1) forwards; }
        .panel-in { animation: panelIn 0.5s cubic-bezier(.2,.8,.2,1) forwards; }
        .tools-fab .bars, .tools-fab .cross {
          position: absolute; top: 50%; left: 50%;
          transform: translate(-50%, -50%);
          transition: all 0.3s cubic-bezier(.4,0,.2,1);
        }
        .tools-fab .cross { opacity: 0; transform: translate(-50%, -50%) rotate(-45deg) scale(0.5); }
        .tools-fab.open .bars { opacity: 0; transform: translate(-50%, -50%) rotate(45deg) scale(0.5); }
        .tools-fab.open .cross { opacity: 1; transform: translate(-50%, -50%) rotate(0) scale(1); }
        @keyframes tutorialGlow {
          0%, 100% { box-shadow: 0 0 8px rgba(196,144,90,0.4), 0 0 20px rgba(196,144,90,0.2); }
          50% { box-shadow: 0 0 16px rgba(196,144,90,0.8), 0 0 40px rgba(196,144,90,0.4), 0 0 60px rgba(196,144,90,0.15); }
        }
      `}),V.jsx("div",{ref:r,style:{width:"100%",height:"100%",touchAction:"none"}}),V.jsx(tE,{isMobile:_,loaded:u,loadingProgress:T,activeZone:n,hovered:p,showHint:a,splitScreen:Y,guidedTour:w,tourZoneIndex:j,setGuidedTour:N,comparisonMode:b,idlePrompt:it,showWelcome:qe,showHelp:x,tutorialStep:Se,inspectorMode:he,patientSimActive:Z,occupancy:ne,tourRef:e.current.tour}),V.jsx(nE,{isMobile:_,comparisonMode:b,setComparisonMode:L,showHelp:x,setShowHelp:S,onTutorialAction:Tt,tutorialHighlight:zt}),u&&!qe&&V.jsx($M,{activeZone:n,isMobile:_,handleZoom:de=>{Tt("click_zone"),Gt.current(de)},handleReset:Bt.current,tutorialHighlight:zt}),u&&!qe&&Se<0&&(G||p)&&!_&&V.jsx(KM,{displayZone:G||p,activeZone:n,isMobile:_,goToAdjacentZone:ln}),V.jsx(ZM,{loaded:u,welcomePhase:Q,setWelcomePhase:Ae,setShowWelcome:Xe,setTutorialStep:ze,isMobile:_}),V.jsx(JM,{tutorialStep:Se,setTutorialStep:ze,handleReset:Bt.current,isMobile:_}),V.jsx(iE,{showHelp:x,setShowHelp:S,isMobile:_,setTutorialStep:ze,setWelcomePhase:Ae}),V.jsx(QM,{isMobile:_,showTools:ue,setShowTools:F,heatmapMode:P,setHeatmapMode:B,patientSimActive:Z,setPatientSimActive:ce,guidedTour:w,setGuidedTour:N,splitScreen:Y,setSplitScreen:oe,inspectorMode:he,setInspectorMode:W,setInspectedItem:$,circadianTime:I,setCircadianTime:k,comparisonMode:b,onTutorialAction:Tt,tutorialHighlight:zt}),V.jsx(eE,{inspectedItem:te,setInspectedItem:$,isMobile:_})]})}C_.createRoot(document.getElementById("root")).render(V.jsx(rE,{}));
