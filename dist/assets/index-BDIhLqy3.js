(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))s(a);new MutationObserver(a=>{for(const l of a)if(l.type==="childList")for(const u of l.addedNodes)u.tagName==="LINK"&&u.rel==="modulepreload"&&s(u)}).observe(document,{childList:!0,subtree:!0});function n(a){const l={};return a.integrity&&(l.integrity=a.integrity),a.referrerPolicy&&(l.referrerPolicy=a.referrerPolicy),a.crossOrigin==="use-credentials"?l.credentials="include":a.crossOrigin==="anonymous"?l.credentials="omit":l.credentials="same-origin",l}function s(a){if(a.ep)return;a.ep=!0;const l=n(a);fetch(a.href,l)}})();var Ru={exports:{}},Jo={},Pu={exports:{}},Nt={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Zp;function y_(){if(Zp)return Nt;Zp=1;var r=Symbol.for("react.element"),e=Symbol.for("react.portal"),n=Symbol.for("react.fragment"),s=Symbol.for("react.strict_mode"),a=Symbol.for("react.profiler"),l=Symbol.for("react.provider"),u=Symbol.for("react.context"),f=Symbol.for("react.forward_ref"),p=Symbol.for("react.suspense"),m=Symbol.for("react.memo"),x=Symbol.for("react.lazy"),y=Symbol.iterator;function g(U){return U===null||typeof U!="object"?null:(U=y&&U[y]||U["@@iterator"],typeof U=="function"?U:null)}var S={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},T=Object.assign,R={};function _(U,ne,Xe){this.props=U,this.context=ne,this.refs=R,this.updater=Xe||S}_.prototype.isReactComponent={},_.prototype.setState=function(U,ne){if(typeof U!="object"&&typeof U!="function"&&U!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,U,ne,"setState")},_.prototype.forceUpdate=function(U){this.updater.enqueueForceUpdate(this,U,"forceUpdate")};function v(){}v.prototype=_.prototype;function b(U,ne,Xe){this.props=U,this.context=ne,this.refs=R,this.updater=Xe||S}var L=b.prototype=new v;L.constructor=b,T(L,_.prototype),L.isPureReactComponent=!0;var P=Array.isArray,z=Object.prototype.hasOwnProperty,D={current:null},k={key:!0,ref:!0,__self:!0,__source:!0};function w(U,ne,Xe){var ze,We={},ce=null,we=null;if(ne!=null)for(ze in ne.ref!==void 0&&(we=ne.ref),ne.key!==void 0&&(ce=""+ne.key),ne)z.call(ne,ze)&&!k.hasOwnProperty(ze)&&(We[ze]=ne[ze]);var xe=arguments.length-2;if(xe===1)We.children=Xe;else if(1<xe){for(var ke=Array(xe),rt=0;rt<xe;rt++)ke[rt]=arguments[rt+2];We.children=ke}if(U&&U.defaultProps)for(ze in xe=U.defaultProps,xe)We[ze]===void 0&&(We[ze]=xe[ze]);return{$$typeof:r,type:U,key:ce,ref:we,props:We,_owner:D.current}}function I(U,ne){return{$$typeof:r,type:U.type,key:ne,ref:U.ref,props:U.props,_owner:U._owner}}function j(U){return typeof U=="object"&&U!==null&&U.$$typeof===r}function O(U){var ne={"=":"=0",":":"=2"};return"$"+U.replace(/[=:]/g,function(Xe){return ne[Xe]})}var q=/\/+/g;function le(U,ne){return typeof U=="object"&&U!==null&&U.key!=null?O(""+U.key):ne.toString(36)}function me(U,ne,Xe,ze,We){var ce=typeof U;(ce==="undefined"||ce==="boolean")&&(U=null);var we=!1;if(U===null)we=!0;else switch(ce){case"string":case"number":we=!0;break;case"object":switch(U.$$typeof){case r:case e:we=!0}}if(we)return we=U,We=We(we),U=ze===""?"."+le(we,0):ze,P(We)?(Xe="",U!=null&&(Xe=U.replace(q,"$&/")+"/"),me(We,ne,Xe,"",function(rt){return rt})):We!=null&&(j(We)&&(We=I(We,Xe+(!We.key||we&&we.key===We.key?"":(""+We.key).replace(q,"$&/")+"/")+U)),ne.push(We)),1;if(we=0,ze=ze===""?".":ze+":",P(U))for(var xe=0;xe<U.length;xe++){ce=U[xe];var ke=ze+le(ce,xe);we+=me(ce,ne,Xe,ke,We)}else if(ke=g(U),typeof ke=="function")for(U=ke.call(U),xe=0;!(ce=U.next()).done;)ce=ce.value,ke=ze+le(ce,xe++),we+=me(ce,ne,Xe,ke,We);else if(ce==="object")throw ne=String(U),Error("Objects are not valid as a React child (found: "+(ne==="[object Object]"?"object with keys {"+Object.keys(U).join(", ")+"}":ne)+"). If you meant to render a collection of children, use an array instead.");return we}function W(U,ne,Xe){if(U==null)return U;var ze=[],We=0;return me(U,ze,"","",function(ce){return ne.call(Xe,ce,We++)}),ze}function te(U){if(U._status===-1){var ne=U._result;ne=ne(),ne.then(function(Xe){(U._status===0||U._status===-1)&&(U._status=1,U._result=Xe)},function(Xe){(U._status===0||U._status===-1)&&(U._status=2,U._result=Xe)}),U._status===-1&&(U._status=0,U._result=ne)}if(U._status===1)return U._result.default;throw U._result}var $={current:null},K={transition:null},fe={ReactCurrentDispatcher:$,ReactCurrentBatchConfig:K,ReactCurrentOwner:D};function he(){throw Error("act(...) is not supported in production builds of React.")}return Nt.Children={map:W,forEach:function(U,ne,Xe){W(U,function(){ne.apply(this,arguments)},Xe)},count:function(U){var ne=0;return W(U,function(){ne++}),ne},toArray:function(U){return W(U,function(ne){return ne})||[]},only:function(U){if(!j(U))throw Error("React.Children.only expected to receive a single React element child.");return U}},Nt.Component=_,Nt.Fragment=n,Nt.Profiler=a,Nt.PureComponent=b,Nt.StrictMode=s,Nt.Suspense=p,Nt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=fe,Nt.act=he,Nt.cloneElement=function(U,ne,Xe){if(U==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+U+".");var ze=T({},U.props),We=U.key,ce=U.ref,we=U._owner;if(ne!=null){if(ne.ref!==void 0&&(ce=ne.ref,we=D.current),ne.key!==void 0&&(We=""+ne.key),U.type&&U.type.defaultProps)var xe=U.type.defaultProps;for(ke in ne)z.call(ne,ke)&&!k.hasOwnProperty(ke)&&(ze[ke]=ne[ke]===void 0&&xe!==void 0?xe[ke]:ne[ke])}var ke=arguments.length-2;if(ke===1)ze.children=Xe;else if(1<ke){xe=Array(ke);for(var rt=0;rt<ke;rt++)xe[rt]=arguments[rt+2];ze.children=xe}return{$$typeof:r,type:U.type,key:We,ref:ce,props:ze,_owner:we}},Nt.createContext=function(U){return U={$$typeof:u,_currentValue:U,_currentValue2:U,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},U.Provider={$$typeof:l,_context:U},U.Consumer=U},Nt.createElement=w,Nt.createFactory=function(U){var ne=w.bind(null,U);return ne.type=U,ne},Nt.createRef=function(){return{current:null}},Nt.forwardRef=function(U){return{$$typeof:f,render:U}},Nt.isValidElement=j,Nt.lazy=function(U){return{$$typeof:x,_payload:{_status:-1,_result:U},_init:te}},Nt.memo=function(U,ne){return{$$typeof:m,type:U,compare:ne===void 0?null:ne}},Nt.startTransition=function(U){var ne=K.transition;K.transition={};try{U()}finally{K.transition=ne}},Nt.unstable_act=he,Nt.useCallback=function(U,ne){return $.current.useCallback(U,ne)},Nt.useContext=function(U){return $.current.useContext(U)},Nt.useDebugValue=function(){},Nt.useDeferredValue=function(U){return $.current.useDeferredValue(U)},Nt.useEffect=function(U,ne){return $.current.useEffect(U,ne)},Nt.useId=function(){return $.current.useId()},Nt.useImperativeHandle=function(U,ne,Xe){return $.current.useImperativeHandle(U,ne,Xe)},Nt.useInsertionEffect=function(U,ne){return $.current.useInsertionEffect(U,ne)},Nt.useLayoutEffect=function(U,ne){return $.current.useLayoutEffect(U,ne)},Nt.useMemo=function(U,ne){return $.current.useMemo(U,ne)},Nt.useReducer=function(U,ne,Xe){return $.current.useReducer(U,ne,Xe)},Nt.useRef=function(U){return $.current.useRef(U)},Nt.useState=function(U){return $.current.useState(U)},Nt.useSyncExternalStore=function(U,ne,Xe){return $.current.useSyncExternalStore(U,ne,Xe)},Nt.useTransition=function(){return $.current.useTransition()},Nt.version="18.3.1",Nt}var Jp;function cf(){return Jp||(Jp=1,Pu.exports=y_()),Pu.exports}/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Qp;function S_(){if(Qp)return Jo;Qp=1;var r=cf(),e=Symbol.for("react.element"),n=Symbol.for("react.fragment"),s=Object.prototype.hasOwnProperty,a=r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,l={key:!0,ref:!0,__self:!0,__source:!0};function u(f,p,m){var x,y={},g=null,S=null;m!==void 0&&(g=""+m),p.key!==void 0&&(g=""+p.key),p.ref!==void 0&&(S=p.ref);for(x in p)s.call(p,x)&&!l.hasOwnProperty(x)&&(y[x]=p[x]);if(f&&f.defaultProps)for(x in p=f.defaultProps,p)y[x]===void 0&&(y[x]=p[x]);return{$$typeof:e,type:f,key:g,ref:S,props:y,_owner:a.current}}return Jo.Fragment=n,Jo.jsx=u,Jo.jsxs=u,Jo}var em;function M_(){return em||(em=1,Ru.exports=S_()),Ru.exports}var V=M_(),ml={},Lu={exports:{}},ci={},Du={exports:{}},Iu={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var tm;function E_(){return tm||(tm=1,(function(r){function e(K,fe){var he=K.length;K.push(fe);e:for(;0<he;){var U=he-1>>>1,ne=K[U];if(0<a(ne,fe))K[U]=fe,K[he]=ne,he=U;else break e}}function n(K){return K.length===0?null:K[0]}function s(K){if(K.length===0)return null;var fe=K[0],he=K.pop();if(he!==fe){K[0]=he;e:for(var U=0,ne=K.length,Xe=ne>>>1;U<Xe;){var ze=2*(U+1)-1,We=K[ze],ce=ze+1,we=K[ce];if(0>a(We,he))ce<ne&&0>a(we,We)?(K[U]=we,K[ce]=he,U=ce):(K[U]=We,K[ze]=he,U=ze);else if(ce<ne&&0>a(we,he))K[U]=we,K[ce]=he,U=ce;else break e}}return fe}function a(K,fe){var he=K.sortIndex-fe.sortIndex;return he!==0?he:K.id-fe.id}if(typeof performance=="object"&&typeof performance.now=="function"){var l=performance;r.unstable_now=function(){return l.now()}}else{var u=Date,f=u.now();r.unstable_now=function(){return u.now()-f}}var p=[],m=[],x=1,y=null,g=3,S=!1,T=!1,R=!1,_=typeof setTimeout=="function"?setTimeout:null,v=typeof clearTimeout=="function"?clearTimeout:null,b=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function L(K){for(var fe=n(m);fe!==null;){if(fe.callback===null)s(m);else if(fe.startTime<=K)s(m),fe.sortIndex=fe.expirationTime,e(p,fe);else break;fe=n(m)}}function P(K){if(R=!1,L(K),!T)if(n(p)!==null)T=!0,te(z);else{var fe=n(m);fe!==null&&$(P,fe.startTime-K)}}function z(K,fe){T=!1,R&&(R=!1,v(w),w=-1),S=!0;var he=g;try{for(L(fe),y=n(p);y!==null&&(!(y.expirationTime>fe)||K&&!O());){var U=y.callback;if(typeof U=="function"){y.callback=null,g=y.priorityLevel;var ne=U(y.expirationTime<=fe);fe=r.unstable_now(),typeof ne=="function"?y.callback=ne:y===n(p)&&s(p),L(fe)}else s(p);y=n(p)}if(y!==null)var Xe=!0;else{var ze=n(m);ze!==null&&$(P,ze.startTime-fe),Xe=!1}return Xe}finally{y=null,g=he,S=!1}}var D=!1,k=null,w=-1,I=5,j=-1;function O(){return!(r.unstable_now()-j<I)}function q(){if(k!==null){var K=r.unstable_now();j=K;var fe=!0;try{fe=k(!0,K)}finally{fe?le():(D=!1,k=null)}}else D=!1}var le;if(typeof b=="function")le=function(){b(q)};else if(typeof MessageChannel<"u"){var me=new MessageChannel,W=me.port2;me.port1.onmessage=q,le=function(){W.postMessage(null)}}else le=function(){_(q,0)};function te(K){k=K,D||(D=!0,le())}function $(K,fe){w=_(function(){K(r.unstable_now())},fe)}r.unstable_IdlePriority=5,r.unstable_ImmediatePriority=1,r.unstable_LowPriority=4,r.unstable_NormalPriority=3,r.unstable_Profiling=null,r.unstable_UserBlockingPriority=2,r.unstable_cancelCallback=function(K){K.callback=null},r.unstable_continueExecution=function(){T||S||(T=!0,te(z))},r.unstable_forceFrameRate=function(K){0>K||125<K?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):I=0<K?Math.floor(1e3/K):5},r.unstable_getCurrentPriorityLevel=function(){return g},r.unstable_getFirstCallbackNode=function(){return n(p)},r.unstable_next=function(K){switch(g){case 1:case 2:case 3:var fe=3;break;default:fe=g}var he=g;g=fe;try{return K()}finally{g=he}},r.unstable_pauseExecution=function(){},r.unstable_requestPaint=function(){},r.unstable_runWithPriority=function(K,fe){switch(K){case 1:case 2:case 3:case 4:case 5:break;default:K=3}var he=g;g=K;try{return fe()}finally{g=he}},r.unstable_scheduleCallback=function(K,fe,he){var U=r.unstable_now();switch(typeof he=="object"&&he!==null?(he=he.delay,he=typeof he=="number"&&0<he?U+he:U):he=U,K){case 1:var ne=-1;break;case 2:ne=250;break;case 5:ne=1073741823;break;case 4:ne=1e4;break;default:ne=5e3}return ne=he+ne,K={id:x++,callback:fe,priorityLevel:K,startTime:he,expirationTime:ne,sortIndex:-1},he>U?(K.sortIndex=he,e(m,K),n(p)===null&&K===n(m)&&(R?(v(w),w=-1):R=!0,$(P,he-U))):(K.sortIndex=ne,e(p,K),T||S||(T=!0,te(z))),K},r.unstable_shouldYield=O,r.unstable_wrapCallback=function(K){var fe=g;return function(){var he=g;g=fe;try{return K.apply(this,arguments)}finally{g=he}}}})(Iu)),Iu}var nm;function w_(){return nm||(nm=1,Du.exports=E_()),Du.exports}/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var im;function T_(){if(im)return ci;im=1;var r=cf(),e=w_();function n(t){for(var i="https://reactjs.org/docs/error-decoder.html?invariant="+t,o=1;o<arguments.length;o++)i+="&args[]="+encodeURIComponent(arguments[o]);return"Minified React error #"+t+"; visit "+i+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var s=new Set,a={};function l(t,i){u(t,i),u(t+"Capture",i)}function u(t,i){for(a[t]=i,t=0;t<i.length;t++)s.add(i[t])}var f=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),p=Object.prototype.hasOwnProperty,m=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,x={},y={};function g(t){return p.call(y,t)?!0:p.call(x,t)?!1:m.test(t)?y[t]=!0:(x[t]=!0,!1)}function S(t,i,o,c){if(o!==null&&o.type===0)return!1;switch(typeof i){case"function":case"symbol":return!0;case"boolean":return c?!1:o!==null?!o.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function T(t,i,o,c){if(i===null||typeof i>"u"||S(t,i,o,c))return!0;if(c)return!1;if(o!==null)switch(o.type){case 3:return!i;case 4:return i===!1;case 5:return isNaN(i);case 6:return isNaN(i)||1>i}return!1}function R(t,i,o,c,d,h,E){this.acceptsBooleans=i===2||i===3||i===4,this.attributeName=c,this.attributeNamespace=d,this.mustUseProperty=o,this.propertyName=t,this.type=i,this.sanitizeURL=h,this.removeEmptyString=E}var _={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){_[t]=new R(t,0,!1,t,null,!1,!1)}),[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var i=t[0];_[i]=new R(i,1,!1,t[1],null,!1,!1)}),["contentEditable","draggable","spellCheck","value"].forEach(function(t){_[t]=new R(t,2,!1,t.toLowerCase(),null,!1,!1)}),["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){_[t]=new R(t,2,!1,t,null,!1,!1)}),"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){_[t]=new R(t,3,!1,t.toLowerCase(),null,!1,!1)}),["checked","multiple","muted","selected"].forEach(function(t){_[t]=new R(t,3,!0,t,null,!1,!1)}),["capture","download"].forEach(function(t){_[t]=new R(t,4,!1,t,null,!1,!1)}),["cols","rows","size","span"].forEach(function(t){_[t]=new R(t,6,!1,t,null,!1,!1)}),["rowSpan","start"].forEach(function(t){_[t]=new R(t,5,!1,t.toLowerCase(),null,!1,!1)});var v=/[\-:]([a-z])/g;function b(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var i=t.replace(v,b);_[i]=new R(i,1,!1,t,null,!1,!1)}),"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var i=t.replace(v,b);_[i]=new R(i,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)}),["xml:base","xml:lang","xml:space"].forEach(function(t){var i=t.replace(v,b);_[i]=new R(i,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)}),["tabIndex","crossOrigin"].forEach(function(t){_[t]=new R(t,1,!1,t.toLowerCase(),null,!1,!1)}),_.xlinkHref=new R("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1),["src","href","action","formAction"].forEach(function(t){_[t]=new R(t,1,!1,t.toLowerCase(),null,!0,!0)});function L(t,i,o,c){var d=_.hasOwnProperty(i)?_[i]:null;(d!==null?d.type!==0:c||!(2<i.length)||i[0]!=="o"&&i[0]!=="O"||i[1]!=="n"&&i[1]!=="N")&&(T(i,o,d,c)&&(o=null),c||d===null?g(i)&&(o===null?t.removeAttribute(i):t.setAttribute(i,""+o)):d.mustUseProperty?t[d.propertyName]=o===null?d.type===3?!1:"":o:(i=d.attributeName,c=d.attributeNamespace,o===null?t.removeAttribute(i):(d=d.type,o=d===3||d===4&&o===!0?"":""+o,c?t.setAttributeNS(c,i,o):t.setAttribute(i,o))))}var P=r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,z=Symbol.for("react.element"),D=Symbol.for("react.portal"),k=Symbol.for("react.fragment"),w=Symbol.for("react.strict_mode"),I=Symbol.for("react.profiler"),j=Symbol.for("react.provider"),O=Symbol.for("react.context"),q=Symbol.for("react.forward_ref"),le=Symbol.for("react.suspense"),me=Symbol.for("react.suspense_list"),W=Symbol.for("react.memo"),te=Symbol.for("react.lazy"),$=Symbol.for("react.offscreen"),K=Symbol.iterator;function fe(t){return t===null||typeof t!="object"?null:(t=K&&t[K]||t["@@iterator"],typeof t=="function"?t:null)}var he=Object.assign,U;function ne(t){if(U===void 0)try{throw Error()}catch(o){var i=o.stack.trim().match(/\n( *(at )?)/);U=i&&i[1]||""}return`
`+U+t}var Xe=!1;function ze(t,i){if(!t||Xe)return"";Xe=!0;var o=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(i)if(i=function(){throw Error()},Object.defineProperty(i.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(i,[])}catch(de){var c=de}Reflect.construct(t,[],i)}else{try{i.call()}catch(de){c=de}t.call(i.prototype)}else{try{throw Error()}catch(de){c=de}t()}}catch(de){if(de&&c&&typeof de.stack=="string"){for(var d=de.stack.split(`
`),h=c.stack.split(`
`),E=d.length-1,N=h.length-1;1<=E&&0<=N&&d[E]!==h[N];)N--;for(;1<=E&&0<=N;E--,N--)if(d[E]!==h[N]){if(E!==1||N!==1)do if(E--,N--,0>N||d[E]!==h[N]){var H=`
`+d[E].replace(" at new "," at ");return t.displayName&&H.includes("<anonymous>")&&(H=H.replace("<anonymous>",t.displayName)),H}while(1<=E&&0<=N);break}}}finally{Xe=!1,Error.prepareStackTrace=o}return(t=t?t.displayName||t.name:"")?ne(t):""}function We(t){switch(t.tag){case 5:return ne(t.type);case 16:return ne("Lazy");case 13:return ne("Suspense");case 19:return ne("SuspenseList");case 0:case 2:case 15:return t=ze(t.type,!1),t;case 11:return t=ze(t.type.render,!1),t;case 1:return t=ze(t.type,!0),t;default:return""}}function ce(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case k:return"Fragment";case D:return"Portal";case I:return"Profiler";case w:return"StrictMode";case le:return"Suspense";case me:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case O:return(t.displayName||"Context")+".Consumer";case j:return(t._context.displayName||"Context")+".Provider";case q:var i=t.render;return t=t.displayName,t||(t=i.displayName||i.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case W:return i=t.displayName||null,i!==null?i:ce(t.type)||"Memo";case te:i=t._payload,t=t._init;try{return ce(t(i))}catch{}}return null}function we(t){var i=t.type;switch(t.tag){case 24:return"Cache";case 9:return(i.displayName||"Context")+".Consumer";case 10:return(i._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=i.render,t=t.displayName||t.name||"",i.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return i;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return ce(i);case 8:return i===w?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof i=="function")return i.displayName||i.name||null;if(typeof i=="string")return i}return null}function xe(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function ke(t){var i=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(i==="checkbox"||i==="radio")}function rt(t){var i=ke(t)?"checked":"value",o=Object.getOwnPropertyDescriptor(t.constructor.prototype,i),c=""+t[i];if(!t.hasOwnProperty(i)&&typeof o<"u"&&typeof o.get=="function"&&typeof o.set=="function"){var d=o.get,h=o.set;return Object.defineProperty(t,i,{configurable:!0,get:function(){return d.call(this)},set:function(E){c=""+E,h.call(this,E)}}),Object.defineProperty(t,i,{enumerable:o.enumerable}),{getValue:function(){return c},setValue:function(E){c=""+E},stopTracking:function(){t._valueTracker=null,delete t[i]}}}}function tt(t){t._valueTracker||(t._valueTracker=rt(t))}function Vt(t){if(!t)return!1;var i=t._valueTracker;if(!i)return!0;var o=i.getValue(),c="";return t&&(c=ke(t)?t.checked?"true":"false":t.value),t=c,t!==o?(i.setValue(t),!0):!1}function ct(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function Rt(t,i){var o=i.checked;return he({},i,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:o??t._wrapperState.initialChecked})}function kt(t,i){var o=i.defaultValue==null?"":i.defaultValue,c=i.checked!=null?i.checked:i.defaultChecked;o=xe(i.value!=null?i.value:o),t._wrapperState={initialChecked:c,initialValue:o,controlled:i.type==="checkbox"||i.type==="radio"?i.checked!=null:i.value!=null}}function ut(t,i){i=i.checked,i!=null&&L(t,"checked",i,!1)}function Ut(t,i){ut(t,i);var o=xe(i.value),c=i.type;if(o!=null)c==="number"?(o===0&&t.value===""||t.value!=o)&&(t.value=""+o):t.value!==""+o&&(t.value=""+o);else if(c==="submit"||c==="reset"){t.removeAttribute("value");return}i.hasOwnProperty("value")?un(t,i.type,o):i.hasOwnProperty("defaultValue")&&un(t,i.type,xe(i.defaultValue)),i.checked==null&&i.defaultChecked!=null&&(t.defaultChecked=!!i.defaultChecked)}function Yt(t,i,o){if(i.hasOwnProperty("value")||i.hasOwnProperty("defaultValue")){var c=i.type;if(!(c!=="submit"&&c!=="reset"||i.value!==void 0&&i.value!==null))return;i=""+t._wrapperState.initialValue,o||i===t.value||(t.value=i),t.defaultValue=i}o=t.name,o!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,o!==""&&(t.name=o)}function un(t,i,o){(i!=="number"||ct(t.ownerDocument)!==t)&&(o==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+o&&(t.defaultValue=""+o))}var G=Array.isArray;function Bt(t,i,o,c){if(t=t.options,i){i={};for(var d=0;d<o.length;d++)i["$"+o[d]]=!0;for(o=0;o<t.length;o++)d=i.hasOwnProperty("$"+t[o].value),t[o].selected!==d&&(t[o].selected=d),d&&c&&(t[o].defaultSelected=!0)}else{for(o=""+xe(o),i=null,d=0;d<t.length;d++){if(t[d].value===o){t[d].selected=!0,c&&(t[d].defaultSelected=!0);return}i!==null||t[d].disabled||(i=t[d])}i!==null&&(i.selected=!0)}}function oe(t,i){if(i.dangerouslySetInnerHTML!=null)throw Error(n(91));return he({},i,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function F(t,i){var o=i.value;if(o==null){if(o=i.children,i=i.defaultValue,o!=null){if(i!=null)throw Error(n(92));if(G(o)){if(1<o.length)throw Error(n(93));o=o[0]}i=o}i==null&&(i=""),o=i}t._wrapperState={initialValue:xe(o)}}function Se(t,i){var o=xe(i.value),c=xe(i.defaultValue);o!=null&&(o=""+o,o!==t.value&&(t.value=o),i.defaultValue==null&&t.defaultValue!==o&&(t.defaultValue=o)),c!=null&&(t.defaultValue=""+c)}function Lt(t){var i=t.textContent;i===t._wrapperState.initialValue&&i!==""&&i!==null&&(t.value=i)}function C(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function M(t,i){return t==null||t==="http://www.w3.org/1999/xhtml"?C(i):t==="http://www.w3.org/2000/svg"&&i==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var Z,ge=(function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(i,o,c,d){MSApp.execUnsafeLocalFunction(function(){return t(i,o,c,d)})}:t})(function(t,i){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=i;else{for(Z=Z||document.createElement("div"),Z.innerHTML="<svg>"+i.valueOf().toString()+"</svg>",i=Z.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;i.firstChild;)t.appendChild(i.firstChild)}});function ye(t,i){if(i){var o=t.firstChild;if(o&&o===t.lastChild&&o.nodeType===3){o.nodeValue=i;return}}t.textContent=i}var Ee={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Re=["Webkit","ms","Moz","O"];Object.keys(Ee).forEach(function(t){Re.forEach(function(i){i=i+t.charAt(0).toUpperCase()+t.substring(1),Ee[i]=Ee[t]})});function pe(t,i,o){return i==null||typeof i=="boolean"||i===""?"":o||typeof i!="number"||i===0||Ee.hasOwnProperty(t)&&Ee[t]?(""+i).trim():i+"px"}function _e(t,i){t=t.style;for(var o in i)if(i.hasOwnProperty(o)){var c=o.indexOf("--")===0,d=pe(o,i[o],c);o==="float"&&(o="cssFloat"),c?t.setProperty(o,d):t[o]=d}}var Ie=he({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Ge(t,i){if(i){if(Ie[t]&&(i.children!=null||i.dangerouslySetInnerHTML!=null))throw Error(n(137,t));if(i.dangerouslySetInnerHTML!=null){if(i.children!=null)throw Error(n(60));if(typeof i.dangerouslySetInnerHTML!="object"||!("__html"in i.dangerouslySetInnerHTML))throw Error(n(61))}if(i.style!=null&&typeof i.style!="object")throw Error(n(62))}}function Ne(t,i){if(t.indexOf("-")===-1)return typeof i.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var be=null;function dt(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var ft=null,yt=null,B=null;function Ce(t){if(t=Oo(t)){if(typeof ft!="function")throw Error(n(280));var i=t.stateNode;i&&(i=Pa(i),ft(t.stateNode,t.type,i))}}function ve(t){yt?B?B.push(t):B=[t]:yt=t}function je(){if(yt){var t=yt,i=B;if(B=yt=null,Ce(t),i)for(t=0;t<i.length;t++)Ce(i[t])}}function Ue(t,i){return t(i)}function Me(){}var Ke=!1;function Qe(t,i,o){if(Ke)return t(i,o);Ke=!0;try{return Ue(t,i,o)}finally{Ke=!1,(yt!==null||B!==null)&&(Me(),je())}}function Ft(t,i){var o=t.stateNode;if(o===null)return null;var c=Pa(o);if(c===null)return null;o=c[i];e:switch(i){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(c=!c.disabled)||(t=t.type,c=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!c;break e;default:t=!1}if(t)return null;if(o&&typeof o!="function")throw Error(n(231,i,typeof o));return o}var Dt=!1;if(f)try{var vn={};Object.defineProperty(vn,"passive",{get:function(){Dt=!0}}),window.addEventListener("test",vn,vn),window.removeEventListener("test",vn,vn)}catch{Dt=!1}function Le(t,i,o,c,d,h,E,N,H){var de=Array.prototype.slice.call(arguments,3);try{i.apply(o,de)}catch(Ae){this.onError(Ae)}}var gt=!1,ae=null,Q=!1,De=null,Ve={onError:function(t){gt=!0,ae=t}};function lt(t,i,o,c,d,h,E,N,H){gt=!1,ae=null,Le.apply(Ve,arguments)}function Et(t,i,o,c,d,h,E,N,H){if(lt.apply(this,arguments),gt){if(gt){var de=ae;gt=!1,ae=null}else throw Error(n(198));Q||(Q=!0,De=de)}}function Tt(t){var i=t,o=t;if(t.alternate)for(;i.return;)i=i.return;else{t=i;do i=t,(i.flags&4098)!==0&&(o=i.return),t=i.return;while(t)}return i.tag===3?o:null}function Gt(t){if(t.tag===13){var i=t.memoizedState;if(i===null&&(t=t.alternate,t!==null&&(i=t.memoizedState)),i!==null)return i.dehydrated}return null}function pn(t){if(Tt(t)!==t)throw Error(n(188))}function At(t){var i=t.alternate;if(!i){if(i=Tt(t),i===null)throw Error(n(188));return i!==t?null:t}for(var o=t,c=i;;){var d=o.return;if(d===null)break;var h=d.alternate;if(h===null){if(c=d.return,c!==null){o=c;continue}break}if(d.child===h.child){for(h=d.child;h;){if(h===o)return pn(d),t;if(h===c)return pn(d),i;h=h.sibling}throw Error(n(188))}if(o.return!==c.return)o=d,c=h;else{for(var E=!1,N=d.child;N;){if(N===o){E=!0,o=d,c=h;break}if(N===c){E=!0,c=d,o=h;break}N=N.sibling}if(!E){for(N=h.child;N;){if(N===o){E=!0,o=h,c=d;break}if(N===c){E=!0,c=h,o=d;break}N=N.sibling}if(!E)throw Error(n(189))}}if(o.alternate!==c)throw Error(n(190))}if(o.tag!==3)throw Error(n(188));return o.stateNode.current===o?t:i}function dn(t){return t=At(t),t!==null?Rn(t):null}function Rn(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var i=Rn(t);if(i!==null)return i;t=t.sibling}return null}var Zn=e.unstable_scheduleCallback,ti=e.unstable_cancelCallback,Tr=e.unstable_shouldYield,Ar=e.unstable_requestPaint,en=e.unstable_now,sr=e.unstable_getCurrentPriorityLevel,Pi=e.unstable_ImmediatePriority,A=e.unstable_UserBlockingPriority,Y=e.unstable_NormalPriority,ue=e.unstable_LowPriority,re=e.unstable_IdlePriority,ie=null,He=null;function Ze(t){if(He&&typeof He.onCommitFiberRoot=="function")try{He.onCommitFiberRoot(ie,t,void 0,(t.current.flags&128)===128)}catch{}}var Be=Math.clz32?Math.clz32:St,nt=Math.log,at=Math.LN2;function St(t){return t>>>=0,t===0?32:31-(nt(t)/at|0)|0}var Mt=64,st=4194304;function Wt(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function tn(t,i){var o=t.pendingLanes;if(o===0)return 0;var c=0,d=t.suspendedLanes,h=t.pingedLanes,E=o&268435455;if(E!==0){var N=E&~d;N!==0?c=Wt(N):(h&=E,h!==0&&(c=Wt(h)))}else E=o&~d,E!==0?c=Wt(E):h!==0&&(c=Wt(h));if(c===0)return 0;if(i!==0&&i!==c&&(i&d)===0&&(d=c&-c,h=i&-i,d>=h||d===16&&(h&4194240)!==0))return i;if((c&4)!==0&&(c|=o&16),i=t.entangledLanes,i!==0)for(t=t.entanglements,i&=c;0<i;)o=31-Be(i),d=1<<o,c|=t[o],i&=~d;return c}function ln(t,i){switch(t){case 1:case 2:case 4:return i+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return i+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Kt(t,i){for(var o=t.suspendedLanes,c=t.pingedLanes,d=t.expirationTimes,h=t.pendingLanes;0<h;){var E=31-Be(h),N=1<<E,H=d[E];H===-1?((N&o)===0||(N&c)!==0)&&(d[E]=ln(N,i)):H<=i&&(t.expiredLanes|=N),h&=~N}}function Sn(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function qe(){var t=Mt;return Mt<<=1,(Mt&4194240)===0&&(Mt=64),t}function Un(t){for(var i=[],o=0;31>o;o++)i.push(t);return i}function Pt(t,i,o){t.pendingLanes|=i,i!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,i=31-Be(i),t[i]=o}function ni(t,i){var o=t.pendingLanes&~i;t.pendingLanes=i,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=i,t.mutableReadLanes&=i,t.entangledLanes&=i,i=t.entanglements;var c=t.eventTimes;for(t=t.expirationTimes;0<o;){var d=31-Be(o),h=1<<d;i[d]=0,c[d]=-1,t[d]=-1,o&=~h}}function ii(t,i){var o=t.entangledLanes|=i;for(t=t.entanglements;o;){var c=31-Be(o),d=1<<c;d&i|t[c]&i&&(t[c]|=i),o&=~d}}var It=0;function or(t){return t&=-t,1<t?4<t?(t&268435455)!==0?16:536870912:4:1}var $t,rn,Li,Zt,Di,Wi=!1,ns=[],br=null,Cr=null,Rr=null,So=new Map,Mo=new Map,Pr=[],V0="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Nf(t,i){switch(t){case"focusin":case"focusout":br=null;break;case"dragenter":case"dragleave":Cr=null;break;case"mouseover":case"mouseout":Rr=null;break;case"pointerover":case"pointerout":So.delete(i.pointerId);break;case"gotpointercapture":case"lostpointercapture":Mo.delete(i.pointerId)}}function Eo(t,i,o,c,d,h){return t===null||t.nativeEvent!==h?(t={blockedOn:i,domEventName:o,eventSystemFlags:c,nativeEvent:h,targetContainers:[d]},i!==null&&(i=Oo(i),i!==null&&rn(i)),t):(t.eventSystemFlags|=c,i=t.targetContainers,d!==null&&i.indexOf(d)===-1&&i.push(d),t)}function G0(t,i,o,c,d){switch(i){case"focusin":return br=Eo(br,t,i,o,c,d),!0;case"dragenter":return Cr=Eo(Cr,t,i,o,c,d),!0;case"mouseover":return Rr=Eo(Rr,t,i,o,c,d),!0;case"pointerover":var h=d.pointerId;return So.set(h,Eo(So.get(h)||null,t,i,o,c,d)),!0;case"gotpointercapture":return h=d.pointerId,Mo.set(h,Eo(Mo.get(h)||null,t,i,o,c,d)),!0}return!1}function Uf(t){var i=is(t.target);if(i!==null){var o=Tt(i);if(o!==null){if(i=o.tag,i===13){if(i=Gt(o),i!==null){t.blockedOn=i,Di(t.priority,function(){Li(o)});return}}else if(i===3&&o.stateNode.current.memoizedState.isDehydrated){t.blockedOn=o.tag===3?o.stateNode.containerInfo:null;return}}}t.blockedOn=null}function ga(t){if(t.blockedOn!==null)return!1;for(var i=t.targetContainers;0<i.length;){var o=nc(t.domEventName,t.eventSystemFlags,i[0],t.nativeEvent);if(o===null){o=t.nativeEvent;var c=new o.constructor(o.type,o);be=c,o.target.dispatchEvent(c),be=null}else return i=Oo(o),i!==null&&rn(i),t.blockedOn=o,!1;i.shift()}return!0}function Ff(t,i,o){ga(t)&&o.delete(i)}function W0(){Wi=!1,br!==null&&ga(br)&&(br=null),Cr!==null&&ga(Cr)&&(Cr=null),Rr!==null&&ga(Rr)&&(Rr=null),So.forEach(Ff),Mo.forEach(Ff)}function wo(t,i){t.blockedOn===i&&(t.blockedOn=null,Wi||(Wi=!0,e.unstable_scheduleCallback(e.unstable_NormalPriority,W0)))}function To(t){function i(d){return wo(d,t)}if(0<ns.length){wo(ns[0],t);for(var o=1;o<ns.length;o++){var c=ns[o];c.blockedOn===t&&(c.blockedOn=null)}}for(br!==null&&wo(br,t),Cr!==null&&wo(Cr,t),Rr!==null&&wo(Rr,t),So.forEach(i),Mo.forEach(i),o=0;o<Pr.length;o++)c=Pr[o],c.blockedOn===t&&(c.blockedOn=null);for(;0<Pr.length&&(o=Pr[0],o.blockedOn===null);)Uf(o),o.blockedOn===null&&Pr.shift()}var Ps=P.ReactCurrentBatchConfig,_a=!0;function X0(t,i,o,c){var d=It,h=Ps.transition;Ps.transition=null;try{It=1,tc(t,i,o,c)}finally{It=d,Ps.transition=h}}function j0(t,i,o,c){var d=It,h=Ps.transition;Ps.transition=null;try{It=4,tc(t,i,o,c)}finally{It=d,Ps.transition=h}}function tc(t,i,o,c){if(_a){var d=nc(t,i,o,c);if(d===null)xc(t,i,c,va,o),Nf(t,c);else if(G0(d,t,i,o,c))c.stopPropagation();else if(Nf(t,c),i&4&&-1<V0.indexOf(t)){for(;d!==null;){var h=Oo(d);if(h!==null&&$t(h),h=nc(t,i,o,c),h===null&&xc(t,i,c,va,o),h===d)break;d=h}d!==null&&c.stopPropagation()}else xc(t,i,c,null,o)}}var va=null;function nc(t,i,o,c){if(va=null,t=dt(c),t=is(t),t!==null)if(i=Tt(t),i===null)t=null;else if(o=i.tag,o===13){if(t=Gt(i),t!==null)return t;t=null}else if(o===3){if(i.stateNode.current.memoizedState.isDehydrated)return i.tag===3?i.stateNode.containerInfo:null;t=null}else i!==t&&(t=null);return va=t,null}function Of(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(sr()){case Pi:return 1;case A:return 4;case Y:case ue:return 16;case re:return 536870912;default:return 16}default:return 16}}var Lr=null,ic=null,xa=null;function kf(){if(xa)return xa;var t,i=ic,o=i.length,c,d="value"in Lr?Lr.value:Lr.textContent,h=d.length;for(t=0;t<o&&i[t]===d[t];t++);var E=o-t;for(c=1;c<=E&&i[o-c]===d[h-c];c++);return xa=d.slice(t,1<c?1-c:void 0)}function ya(t){var i=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&i===13&&(t=13)):t=i,t===10&&(t=13),32<=t||t===13?t:0}function Sa(){return!0}function Bf(){return!1}function hi(t){function i(o,c,d,h,E){this._reactName=o,this._targetInst=d,this.type=c,this.nativeEvent=h,this.target=E,this.currentTarget=null;for(var N in t)t.hasOwnProperty(N)&&(o=t[N],this[N]=o?o(h):h[N]);return this.isDefaultPrevented=(h.defaultPrevented!=null?h.defaultPrevented:h.returnValue===!1)?Sa:Bf,this.isPropagationStopped=Bf,this}return he(i.prototype,{preventDefault:function(){this.defaultPrevented=!0;var o=this.nativeEvent;o&&(o.preventDefault?o.preventDefault():typeof o.returnValue!="unknown"&&(o.returnValue=!1),this.isDefaultPrevented=Sa)},stopPropagation:function(){var o=this.nativeEvent;o&&(o.stopPropagation?o.stopPropagation():typeof o.cancelBubble!="unknown"&&(o.cancelBubble=!0),this.isPropagationStopped=Sa)},persist:function(){},isPersistent:Sa}),i}var Ls={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},rc=hi(Ls),Ao=he({},Ls,{view:0,detail:0}),Y0=hi(Ao),sc,oc,bo,Ma=he({},Ao,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:lc,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==bo&&(bo&&t.type==="mousemove"?(sc=t.screenX-bo.screenX,oc=t.screenY-bo.screenY):oc=sc=0,bo=t),sc)},movementY:function(t){return"movementY"in t?t.movementY:oc}}),zf=hi(Ma),q0=he({},Ma,{dataTransfer:0}),$0=hi(q0),K0=he({},Ao,{relatedTarget:0}),ac=hi(K0),Z0=he({},Ls,{animationName:0,elapsedTime:0,pseudoElement:0}),J0=hi(Z0),Q0=he({},Ls,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),eg=hi(Q0),tg=he({},Ls,{data:0}),Hf=hi(tg),ng={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},ig={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},rg={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function sg(t){var i=this.nativeEvent;return i.getModifierState?i.getModifierState(t):(t=rg[t])?!!i[t]:!1}function lc(){return sg}var og=he({},Ao,{key:function(t){if(t.key){var i=ng[t.key]||t.key;if(i!=="Unidentified")return i}return t.type==="keypress"?(t=ya(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?ig[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:lc,charCode:function(t){return t.type==="keypress"?ya(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?ya(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),ag=hi(og),lg=he({},Ma,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Vf=hi(lg),cg=he({},Ao,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:lc}),ug=hi(cg),dg=he({},Ls,{propertyName:0,elapsedTime:0,pseudoElement:0}),fg=hi(dg),hg=he({},Ma,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),pg=hi(hg),mg=[9,13,27,32],cc=f&&"CompositionEvent"in window,Co=null;f&&"documentMode"in document&&(Co=document.documentMode);var gg=f&&"TextEvent"in window&&!Co,Gf=f&&(!cc||Co&&8<Co&&11>=Co),Wf=" ",Xf=!1;function jf(t,i){switch(t){case"keyup":return mg.indexOf(i.keyCode)!==-1;case"keydown":return i.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Yf(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var Ds=!1;function _g(t,i){switch(t){case"compositionend":return Yf(i);case"keypress":return i.which!==32?null:(Xf=!0,Wf);case"textInput":return t=i.data,t===Wf&&Xf?null:t;default:return null}}function vg(t,i){if(Ds)return t==="compositionend"||!cc&&jf(t,i)?(t=kf(),xa=ic=Lr=null,Ds=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(i.ctrlKey||i.altKey||i.metaKey)||i.ctrlKey&&i.altKey){if(i.char&&1<i.char.length)return i.char;if(i.which)return String.fromCharCode(i.which)}return null;case"compositionend":return Gf&&i.locale!=="ko"?null:i.data;default:return null}}var xg={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function qf(t){var i=t&&t.nodeName&&t.nodeName.toLowerCase();return i==="input"?!!xg[t.type]:i==="textarea"}function $f(t,i,o,c){ve(c),i=ba(i,"onChange"),0<i.length&&(o=new rc("onChange","change",null,o,c),t.push({event:o,listeners:i}))}var Ro=null,Po=null;function yg(t){hh(t,0)}function Ea(t){var i=Os(t);if(Vt(i))return t}function Sg(t,i){if(t==="change")return i}var Kf=!1;if(f){var uc;if(f){var dc="oninput"in document;if(!dc){var Zf=document.createElement("div");Zf.setAttribute("oninput","return;"),dc=typeof Zf.oninput=="function"}uc=dc}else uc=!1;Kf=uc&&(!document.documentMode||9<document.documentMode)}function Jf(){Ro&&(Ro.detachEvent("onpropertychange",Qf),Po=Ro=null)}function Qf(t){if(t.propertyName==="value"&&Ea(Po)){var i=[];$f(i,Po,t,dt(t)),Qe(yg,i)}}function Mg(t,i,o){t==="focusin"?(Jf(),Ro=i,Po=o,Ro.attachEvent("onpropertychange",Qf)):t==="focusout"&&Jf()}function Eg(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return Ea(Po)}function wg(t,i){if(t==="click")return Ea(i)}function Tg(t,i){if(t==="input"||t==="change")return Ea(i)}function Ag(t,i){return t===i&&(t!==0||1/t===1/i)||t!==t&&i!==i}var Ii=typeof Object.is=="function"?Object.is:Ag;function Lo(t,i){if(Ii(t,i))return!0;if(typeof t!="object"||t===null||typeof i!="object"||i===null)return!1;var o=Object.keys(t),c=Object.keys(i);if(o.length!==c.length)return!1;for(c=0;c<o.length;c++){var d=o[c];if(!p.call(i,d)||!Ii(t[d],i[d]))return!1}return!0}function eh(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function th(t,i){var o=eh(t);t=0;for(var c;o;){if(o.nodeType===3){if(c=t+o.textContent.length,t<=i&&c>=i)return{node:o,offset:i-t};t=c}e:{for(;o;){if(o.nextSibling){o=o.nextSibling;break e}o=o.parentNode}o=void 0}o=eh(o)}}function nh(t,i){return t&&i?t===i?!0:t&&t.nodeType===3?!1:i&&i.nodeType===3?nh(t,i.parentNode):"contains"in t?t.contains(i):t.compareDocumentPosition?!!(t.compareDocumentPosition(i)&16):!1:!1}function ih(){for(var t=window,i=ct();i instanceof t.HTMLIFrameElement;){try{var o=typeof i.contentWindow.location.href=="string"}catch{o=!1}if(o)t=i.contentWindow;else break;i=ct(t.document)}return i}function fc(t){var i=t&&t.nodeName&&t.nodeName.toLowerCase();return i&&(i==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||i==="textarea"||t.contentEditable==="true")}function bg(t){var i=ih(),o=t.focusedElem,c=t.selectionRange;if(i!==o&&o&&o.ownerDocument&&nh(o.ownerDocument.documentElement,o)){if(c!==null&&fc(o)){if(i=c.start,t=c.end,t===void 0&&(t=i),"selectionStart"in o)o.selectionStart=i,o.selectionEnd=Math.min(t,o.value.length);else if(t=(i=o.ownerDocument||document)&&i.defaultView||window,t.getSelection){t=t.getSelection();var d=o.textContent.length,h=Math.min(c.start,d);c=c.end===void 0?h:Math.min(c.end,d),!t.extend&&h>c&&(d=c,c=h,h=d),d=th(o,h);var E=th(o,c);d&&E&&(t.rangeCount!==1||t.anchorNode!==d.node||t.anchorOffset!==d.offset||t.focusNode!==E.node||t.focusOffset!==E.offset)&&(i=i.createRange(),i.setStart(d.node,d.offset),t.removeAllRanges(),h>c?(t.addRange(i),t.extend(E.node,E.offset)):(i.setEnd(E.node,E.offset),t.addRange(i)))}}for(i=[],t=o;t=t.parentNode;)t.nodeType===1&&i.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof o.focus=="function"&&o.focus(),o=0;o<i.length;o++)t=i[o],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var Cg=f&&"documentMode"in document&&11>=document.documentMode,Is=null,hc=null,Do=null,pc=!1;function rh(t,i,o){var c=o.window===o?o.document:o.nodeType===9?o:o.ownerDocument;pc||Is==null||Is!==ct(c)||(c=Is,"selectionStart"in c&&fc(c)?c={start:c.selectionStart,end:c.selectionEnd}:(c=(c.ownerDocument&&c.ownerDocument.defaultView||window).getSelection(),c={anchorNode:c.anchorNode,anchorOffset:c.anchorOffset,focusNode:c.focusNode,focusOffset:c.focusOffset}),Do&&Lo(Do,c)||(Do=c,c=ba(hc,"onSelect"),0<c.length&&(i=new rc("onSelect","select",null,i,o),t.push({event:i,listeners:c}),i.target=Is)))}function wa(t,i){var o={};return o[t.toLowerCase()]=i.toLowerCase(),o["Webkit"+t]="webkit"+i,o["Moz"+t]="moz"+i,o}var Ns={animationend:wa("Animation","AnimationEnd"),animationiteration:wa("Animation","AnimationIteration"),animationstart:wa("Animation","AnimationStart"),transitionend:wa("Transition","TransitionEnd")},mc={},sh={};f&&(sh=document.createElement("div").style,"AnimationEvent"in window||(delete Ns.animationend.animation,delete Ns.animationiteration.animation,delete Ns.animationstart.animation),"TransitionEvent"in window||delete Ns.transitionend.transition);function Ta(t){if(mc[t])return mc[t];if(!Ns[t])return t;var i=Ns[t],o;for(o in i)if(i.hasOwnProperty(o)&&o in sh)return mc[t]=i[o];return t}var oh=Ta("animationend"),ah=Ta("animationiteration"),lh=Ta("animationstart"),ch=Ta("transitionend"),uh=new Map,dh="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Dr(t,i){uh.set(t,i),l(i,[t])}for(var gc=0;gc<dh.length;gc++){var _c=dh[gc],Rg=_c.toLowerCase(),Pg=_c[0].toUpperCase()+_c.slice(1);Dr(Rg,"on"+Pg)}Dr(oh,"onAnimationEnd"),Dr(ah,"onAnimationIteration"),Dr(lh,"onAnimationStart"),Dr("dblclick","onDoubleClick"),Dr("focusin","onFocus"),Dr("focusout","onBlur"),Dr(ch,"onTransitionEnd"),u("onMouseEnter",["mouseout","mouseover"]),u("onMouseLeave",["mouseout","mouseover"]),u("onPointerEnter",["pointerout","pointerover"]),u("onPointerLeave",["pointerout","pointerover"]),l("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),l("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),l("onBeforeInput",["compositionend","keypress","textInput","paste"]),l("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),l("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),l("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Io="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Lg=new Set("cancel close invalid load scroll toggle".split(" ").concat(Io));function fh(t,i,o){var c=t.type||"unknown-event";t.currentTarget=o,Et(c,i,void 0,t),t.currentTarget=null}function hh(t,i){i=(i&4)!==0;for(var o=0;o<t.length;o++){var c=t[o],d=c.event;c=c.listeners;e:{var h=void 0;if(i)for(var E=c.length-1;0<=E;E--){var N=c[E],H=N.instance,de=N.currentTarget;if(N=N.listener,H!==h&&d.isPropagationStopped())break e;fh(d,N,de),h=H}else for(E=0;E<c.length;E++){if(N=c[E],H=N.instance,de=N.currentTarget,N=N.listener,H!==h&&d.isPropagationStopped())break e;fh(d,N,de),h=H}}}if(Q)throw t=De,Q=!1,De=null,t}function sn(t,i){var o=i[Tc];o===void 0&&(o=i[Tc]=new Set);var c=t+"__bubble";o.has(c)||(ph(i,t,2,!1),o.add(c))}function vc(t,i,o){var c=0;i&&(c|=4),ph(o,t,c,i)}var Aa="_reactListening"+Math.random().toString(36).slice(2);function No(t){if(!t[Aa]){t[Aa]=!0,s.forEach(function(o){o!=="selectionchange"&&(Lg.has(o)||vc(o,!1,t),vc(o,!0,t))});var i=t.nodeType===9?t:t.ownerDocument;i===null||i[Aa]||(i[Aa]=!0,vc("selectionchange",!1,i))}}function ph(t,i,o,c){switch(Of(i)){case 1:var d=X0;break;case 4:d=j0;break;default:d=tc}o=d.bind(null,i,o,t),d=void 0,!Dt||i!=="touchstart"&&i!=="touchmove"&&i!=="wheel"||(d=!0),c?d!==void 0?t.addEventListener(i,o,{capture:!0,passive:d}):t.addEventListener(i,o,!0):d!==void 0?t.addEventListener(i,o,{passive:d}):t.addEventListener(i,o,!1)}function xc(t,i,o,c,d){var h=c;if((i&1)===0&&(i&2)===0&&c!==null)e:for(;;){if(c===null)return;var E=c.tag;if(E===3||E===4){var N=c.stateNode.containerInfo;if(N===d||N.nodeType===8&&N.parentNode===d)break;if(E===4)for(E=c.return;E!==null;){var H=E.tag;if((H===3||H===4)&&(H=E.stateNode.containerInfo,H===d||H.nodeType===8&&H.parentNode===d))return;E=E.return}for(;N!==null;){if(E=is(N),E===null)return;if(H=E.tag,H===5||H===6){c=h=E;continue e}N=N.parentNode}}c=c.return}Qe(function(){var de=h,Ae=dt(o),Pe=[];e:{var Te=uh.get(t);if(Te!==void 0){var $e=rc,et=t;switch(t){case"keypress":if(ya(o)===0)break e;case"keydown":case"keyup":$e=ag;break;case"focusin":et="focus",$e=ac;break;case"focusout":et="blur",$e=ac;break;case"beforeblur":case"afterblur":$e=ac;break;case"click":if(o.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":$e=zf;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":$e=$0;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":$e=ug;break;case oh:case ah:case lh:$e=J0;break;case ch:$e=fg;break;case"scroll":$e=Y0;break;case"wheel":$e=pg;break;case"copy":case"cut":case"paste":$e=eg;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":$e=Vf}var it=(i&4)!==0,xn=!it&&t==="scroll",ee=it?Te!==null?Te+"Capture":null:Te;it=[];for(var X=de,se;X!==null;){se=X;var Oe=se.stateNode;if(se.tag===5&&Oe!==null&&(se=Oe,ee!==null&&(Oe=Ft(X,ee),Oe!=null&&it.push(Uo(X,Oe,se)))),xn)break;X=X.return}0<it.length&&(Te=new $e(Te,et,null,o,Ae),Pe.push({event:Te,listeners:it}))}}if((i&7)===0){e:{if(Te=t==="mouseover"||t==="pointerover",$e=t==="mouseout"||t==="pointerout",Te&&o!==be&&(et=o.relatedTarget||o.fromElement)&&(is(et)||et[ar]))break e;if(($e||Te)&&(Te=Ae.window===Ae?Ae:(Te=Ae.ownerDocument)?Te.defaultView||Te.parentWindow:window,$e?(et=o.relatedTarget||o.toElement,$e=de,et=et?is(et):null,et!==null&&(xn=Tt(et),et!==xn||et.tag!==5&&et.tag!==6)&&(et=null)):($e=null,et=de),$e!==et)){if(it=zf,Oe="onMouseLeave",ee="onMouseEnter",X="mouse",(t==="pointerout"||t==="pointerover")&&(it=Vf,Oe="onPointerLeave",ee="onPointerEnter",X="pointer"),xn=$e==null?Te:Os($e),se=et==null?Te:Os(et),Te=new it(Oe,X+"leave",$e,o,Ae),Te.target=xn,Te.relatedTarget=se,Oe=null,is(Ae)===de&&(it=new it(ee,X+"enter",et,o,Ae),it.target=se,it.relatedTarget=xn,Oe=it),xn=Oe,$e&&et)t:{for(it=$e,ee=et,X=0,se=it;se;se=Us(se))X++;for(se=0,Oe=ee;Oe;Oe=Us(Oe))se++;for(;0<X-se;)it=Us(it),X--;for(;0<se-X;)ee=Us(ee),se--;for(;X--;){if(it===ee||ee!==null&&it===ee.alternate)break t;it=Us(it),ee=Us(ee)}it=null}else it=null;$e!==null&&mh(Pe,Te,$e,it,!1),et!==null&&xn!==null&&mh(Pe,xn,et,it,!0)}}e:{if(Te=de?Os(de):window,$e=Te.nodeName&&Te.nodeName.toLowerCase(),$e==="select"||$e==="input"&&Te.type==="file")var ot=Sg;else if(qf(Te))if(Kf)ot=Tg;else{ot=Eg;var ht=Mg}else($e=Te.nodeName)&&$e.toLowerCase()==="input"&&(Te.type==="checkbox"||Te.type==="radio")&&(ot=wg);if(ot&&(ot=ot(t,de))){$f(Pe,ot,o,Ae);break e}ht&&ht(t,Te,de),t==="focusout"&&(ht=Te._wrapperState)&&ht.controlled&&Te.type==="number"&&un(Te,"number",Te.value)}switch(ht=de?Os(de):window,t){case"focusin":(qf(ht)||ht.contentEditable==="true")&&(Is=ht,hc=de,Do=null);break;case"focusout":Do=hc=Is=null;break;case"mousedown":pc=!0;break;case"contextmenu":case"mouseup":case"dragend":pc=!1,rh(Pe,o,Ae);break;case"selectionchange":if(Cg)break;case"keydown":case"keyup":rh(Pe,o,Ae)}var pt;if(cc)e:{switch(t){case"compositionstart":var _t="onCompositionStart";break e;case"compositionend":_t="onCompositionEnd";break e;case"compositionupdate":_t="onCompositionUpdate";break e}_t=void 0}else Ds?jf(t,o)&&(_t="onCompositionEnd"):t==="keydown"&&o.keyCode===229&&(_t="onCompositionStart");_t&&(Gf&&o.locale!=="ko"&&(Ds||_t!=="onCompositionStart"?_t==="onCompositionEnd"&&Ds&&(pt=kf()):(Lr=Ae,ic="value"in Lr?Lr.value:Lr.textContent,Ds=!0)),ht=ba(de,_t),0<ht.length&&(_t=new Hf(_t,t,null,o,Ae),Pe.push({event:_t,listeners:ht}),pt?_t.data=pt:(pt=Yf(o),pt!==null&&(_t.data=pt)))),(pt=gg?_g(t,o):vg(t,o))&&(de=ba(de,"onBeforeInput"),0<de.length&&(Ae=new Hf("onBeforeInput","beforeinput",null,o,Ae),Pe.push({event:Ae,listeners:de}),Ae.data=pt))}hh(Pe,i)})}function Uo(t,i,o){return{instance:t,listener:i,currentTarget:o}}function ba(t,i){for(var o=i+"Capture",c=[];t!==null;){var d=t,h=d.stateNode;d.tag===5&&h!==null&&(d=h,h=Ft(t,o),h!=null&&c.unshift(Uo(t,h,d)),h=Ft(t,i),h!=null&&c.push(Uo(t,h,d))),t=t.return}return c}function Us(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function mh(t,i,o,c,d){for(var h=i._reactName,E=[];o!==null&&o!==c;){var N=o,H=N.alternate,de=N.stateNode;if(H!==null&&H===c)break;N.tag===5&&de!==null&&(N=de,d?(H=Ft(o,h),H!=null&&E.unshift(Uo(o,H,N))):d||(H=Ft(o,h),H!=null&&E.push(Uo(o,H,N)))),o=o.return}E.length!==0&&t.push({event:i,listeners:E})}var Dg=/\r\n?/g,Ig=/\u0000|\uFFFD/g;function gh(t){return(typeof t=="string"?t:""+t).replace(Dg,`
`).replace(Ig,"")}function Ca(t,i,o){if(i=gh(i),gh(t)!==i&&o)throw Error(n(425))}function Ra(){}var yc=null,Sc=null;function Mc(t,i){return t==="textarea"||t==="noscript"||typeof i.children=="string"||typeof i.children=="number"||typeof i.dangerouslySetInnerHTML=="object"&&i.dangerouslySetInnerHTML!==null&&i.dangerouslySetInnerHTML.__html!=null}var Ec=typeof setTimeout=="function"?setTimeout:void 0,Ng=typeof clearTimeout=="function"?clearTimeout:void 0,_h=typeof Promise=="function"?Promise:void 0,Ug=typeof queueMicrotask=="function"?queueMicrotask:typeof _h<"u"?function(t){return _h.resolve(null).then(t).catch(Fg)}:Ec;function Fg(t){setTimeout(function(){throw t})}function wc(t,i){var o=i,c=0;do{var d=o.nextSibling;if(t.removeChild(o),d&&d.nodeType===8)if(o=d.data,o==="/$"){if(c===0){t.removeChild(d),To(i);return}c--}else o!=="$"&&o!=="$?"&&o!=="$!"||c++;o=d}while(o);To(i)}function Ir(t){for(;t!=null;t=t.nextSibling){var i=t.nodeType;if(i===1||i===3)break;if(i===8){if(i=t.data,i==="$"||i==="$!"||i==="$?")break;if(i==="/$")return null}}return t}function vh(t){t=t.previousSibling;for(var i=0;t;){if(t.nodeType===8){var o=t.data;if(o==="$"||o==="$!"||o==="$?"){if(i===0)return t;i--}else o==="/$"&&i++}t=t.previousSibling}return null}var Fs=Math.random().toString(36).slice(2),Xi="__reactFiber$"+Fs,Fo="__reactProps$"+Fs,ar="__reactContainer$"+Fs,Tc="__reactEvents$"+Fs,Og="__reactListeners$"+Fs,kg="__reactHandles$"+Fs;function is(t){var i=t[Xi];if(i)return i;for(var o=t.parentNode;o;){if(i=o[ar]||o[Xi]){if(o=i.alternate,i.child!==null||o!==null&&o.child!==null)for(t=vh(t);t!==null;){if(o=t[Xi])return o;t=vh(t)}return i}t=o,o=t.parentNode}return null}function Oo(t){return t=t[Xi]||t[ar],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function Os(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(n(33))}function Pa(t){return t[Fo]||null}var Ac=[],ks=-1;function Nr(t){return{current:t}}function on(t){0>ks||(t.current=Ac[ks],Ac[ks]=null,ks--)}function nn(t,i){ks++,Ac[ks]=t.current,t.current=i}var Ur={},zn=Nr(Ur),ri=Nr(!1),rs=Ur;function Bs(t,i){var o=t.type.contextTypes;if(!o)return Ur;var c=t.stateNode;if(c&&c.__reactInternalMemoizedUnmaskedChildContext===i)return c.__reactInternalMemoizedMaskedChildContext;var d={},h;for(h in o)d[h]=i[h];return c&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=i,t.__reactInternalMemoizedMaskedChildContext=d),d}function si(t){return t=t.childContextTypes,t!=null}function La(){on(ri),on(zn)}function xh(t,i,o){if(zn.current!==Ur)throw Error(n(168));nn(zn,i),nn(ri,o)}function yh(t,i,o){var c=t.stateNode;if(i=i.childContextTypes,typeof c.getChildContext!="function")return o;c=c.getChildContext();for(var d in c)if(!(d in i))throw Error(n(108,we(t)||"Unknown",d));return he({},o,c)}function Da(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||Ur,rs=zn.current,nn(zn,t),nn(ri,ri.current),!0}function Sh(t,i,o){var c=t.stateNode;if(!c)throw Error(n(169));o?(t=yh(t,i,rs),c.__reactInternalMemoizedMergedChildContext=t,on(ri),on(zn),nn(zn,t)):on(ri),nn(ri,o)}var lr=null,Ia=!1,bc=!1;function Mh(t){lr===null?lr=[t]:lr.push(t)}function Bg(t){Ia=!0,Mh(t)}function Fr(){if(!bc&&lr!==null){bc=!0;var t=0,i=It;try{var o=lr;for(It=1;t<o.length;t++){var c=o[t];do c=c(!0);while(c!==null)}lr=null,Ia=!1}catch(d){throw lr!==null&&(lr=lr.slice(t+1)),Zn(Pi,Fr),d}finally{It=i,bc=!1}}return null}var zs=[],Hs=0,Na=null,Ua=0,Mi=[],Ei=0,ss=null,cr=1,ur="";function os(t,i){zs[Hs++]=Ua,zs[Hs++]=Na,Na=t,Ua=i}function Eh(t,i,o){Mi[Ei++]=cr,Mi[Ei++]=ur,Mi[Ei++]=ss,ss=t;var c=cr;t=ur;var d=32-Be(c)-1;c&=~(1<<d),o+=1;var h=32-Be(i)+d;if(30<h){var E=d-d%5;h=(c&(1<<E)-1).toString(32),c>>=E,d-=E,cr=1<<32-Be(i)+d|o<<d|c,ur=h+t}else cr=1<<h|o<<d|c,ur=t}function Cc(t){t.return!==null&&(os(t,1),Eh(t,1,0))}function Rc(t){for(;t===Na;)Na=zs[--Hs],zs[Hs]=null,Ua=zs[--Hs],zs[Hs]=null;for(;t===ss;)ss=Mi[--Ei],Mi[Ei]=null,ur=Mi[--Ei],Mi[Ei]=null,cr=Mi[--Ei],Mi[Ei]=null}var pi=null,mi=null,cn=!1,Ni=null;function wh(t,i){var o=bi(5,null,null,0);o.elementType="DELETED",o.stateNode=i,o.return=t,i=t.deletions,i===null?(t.deletions=[o],t.flags|=16):i.push(o)}function Th(t,i){switch(t.tag){case 5:var o=t.type;return i=i.nodeType!==1||o.toLowerCase()!==i.nodeName.toLowerCase()?null:i,i!==null?(t.stateNode=i,pi=t,mi=Ir(i.firstChild),!0):!1;case 6:return i=t.pendingProps===""||i.nodeType!==3?null:i,i!==null?(t.stateNode=i,pi=t,mi=null,!0):!1;case 13:return i=i.nodeType!==8?null:i,i!==null?(o=ss!==null?{id:cr,overflow:ur}:null,t.memoizedState={dehydrated:i,treeContext:o,retryLane:1073741824},o=bi(18,null,null,0),o.stateNode=i,o.return=t,t.child=o,pi=t,mi=null,!0):!1;default:return!1}}function Pc(t){return(t.mode&1)!==0&&(t.flags&128)===0}function Lc(t){if(cn){var i=mi;if(i){var o=i;if(!Th(t,i)){if(Pc(t))throw Error(n(418));i=Ir(o.nextSibling);var c=pi;i&&Th(t,i)?wh(c,o):(t.flags=t.flags&-4097|2,cn=!1,pi=t)}}else{if(Pc(t))throw Error(n(418));t.flags=t.flags&-4097|2,cn=!1,pi=t}}}function Ah(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;pi=t}function Fa(t){if(t!==pi)return!1;if(!cn)return Ah(t),cn=!0,!1;var i;if((i=t.tag!==3)&&!(i=t.tag!==5)&&(i=t.type,i=i!=="head"&&i!=="body"&&!Mc(t.type,t.memoizedProps)),i&&(i=mi)){if(Pc(t))throw bh(),Error(n(418));for(;i;)wh(t,i),i=Ir(i.nextSibling)}if(Ah(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(n(317));e:{for(t=t.nextSibling,i=0;t;){if(t.nodeType===8){var o=t.data;if(o==="/$"){if(i===0){mi=Ir(t.nextSibling);break e}i--}else o!=="$"&&o!=="$!"&&o!=="$?"||i++}t=t.nextSibling}mi=null}}else mi=pi?Ir(t.stateNode.nextSibling):null;return!0}function bh(){for(var t=mi;t;)t=Ir(t.nextSibling)}function Vs(){mi=pi=null,cn=!1}function Dc(t){Ni===null?Ni=[t]:Ni.push(t)}var zg=P.ReactCurrentBatchConfig;function ko(t,i,o){if(t=o.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(o._owner){if(o=o._owner,o){if(o.tag!==1)throw Error(n(309));var c=o.stateNode}if(!c)throw Error(n(147,t));var d=c,h=""+t;return i!==null&&i.ref!==null&&typeof i.ref=="function"&&i.ref._stringRef===h?i.ref:(i=function(E){var N=d.refs;E===null?delete N[h]:N[h]=E},i._stringRef=h,i)}if(typeof t!="string")throw Error(n(284));if(!o._owner)throw Error(n(290,t))}return t}function Oa(t,i){throw t=Object.prototype.toString.call(i),Error(n(31,t==="[object Object]"?"object with keys {"+Object.keys(i).join(", ")+"}":t))}function Ch(t){var i=t._init;return i(t._payload)}function Rh(t){function i(ee,X){if(t){var se=ee.deletions;se===null?(ee.deletions=[X],ee.flags|=16):se.push(X)}}function o(ee,X){if(!t)return null;for(;X!==null;)i(ee,X),X=X.sibling;return null}function c(ee,X){for(ee=new Map;X!==null;)X.key!==null?ee.set(X.key,X):ee.set(X.index,X),X=X.sibling;return ee}function d(ee,X){return ee=Wr(ee,X),ee.index=0,ee.sibling=null,ee}function h(ee,X,se){return ee.index=se,t?(se=ee.alternate,se!==null?(se=se.index,se<X?(ee.flags|=2,X):se):(ee.flags|=2,X)):(ee.flags|=1048576,X)}function E(ee){return t&&ee.alternate===null&&(ee.flags|=2),ee}function N(ee,X,se,Oe){return X===null||X.tag!==6?(X=Eu(se,ee.mode,Oe),X.return=ee,X):(X=d(X,se),X.return=ee,X)}function H(ee,X,se,Oe){var ot=se.type;return ot===k?Ae(ee,X,se.props.children,Oe,se.key):X!==null&&(X.elementType===ot||typeof ot=="object"&&ot!==null&&ot.$$typeof===te&&Ch(ot)===X.type)?(Oe=d(X,se.props),Oe.ref=ko(ee,X,se),Oe.return=ee,Oe):(Oe=al(se.type,se.key,se.props,null,ee.mode,Oe),Oe.ref=ko(ee,X,se),Oe.return=ee,Oe)}function de(ee,X,se,Oe){return X===null||X.tag!==4||X.stateNode.containerInfo!==se.containerInfo||X.stateNode.implementation!==se.implementation?(X=wu(se,ee.mode,Oe),X.return=ee,X):(X=d(X,se.children||[]),X.return=ee,X)}function Ae(ee,X,se,Oe,ot){return X===null||X.tag!==7?(X=ps(se,ee.mode,Oe,ot),X.return=ee,X):(X=d(X,se),X.return=ee,X)}function Pe(ee,X,se){if(typeof X=="string"&&X!==""||typeof X=="number")return X=Eu(""+X,ee.mode,se),X.return=ee,X;if(typeof X=="object"&&X!==null){switch(X.$$typeof){case z:return se=al(X.type,X.key,X.props,null,ee.mode,se),se.ref=ko(ee,null,X),se.return=ee,se;case D:return X=wu(X,ee.mode,se),X.return=ee,X;case te:var Oe=X._init;return Pe(ee,Oe(X._payload),se)}if(G(X)||fe(X))return X=ps(X,ee.mode,se,null),X.return=ee,X;Oa(ee,X)}return null}function Te(ee,X,se,Oe){var ot=X!==null?X.key:null;if(typeof se=="string"&&se!==""||typeof se=="number")return ot!==null?null:N(ee,X,""+se,Oe);if(typeof se=="object"&&se!==null){switch(se.$$typeof){case z:return se.key===ot?H(ee,X,se,Oe):null;case D:return se.key===ot?de(ee,X,se,Oe):null;case te:return ot=se._init,Te(ee,X,ot(se._payload),Oe)}if(G(se)||fe(se))return ot!==null?null:Ae(ee,X,se,Oe,null);Oa(ee,se)}return null}function $e(ee,X,se,Oe,ot){if(typeof Oe=="string"&&Oe!==""||typeof Oe=="number")return ee=ee.get(se)||null,N(X,ee,""+Oe,ot);if(typeof Oe=="object"&&Oe!==null){switch(Oe.$$typeof){case z:return ee=ee.get(Oe.key===null?se:Oe.key)||null,H(X,ee,Oe,ot);case D:return ee=ee.get(Oe.key===null?se:Oe.key)||null,de(X,ee,Oe,ot);case te:var ht=Oe._init;return $e(ee,X,se,ht(Oe._payload),ot)}if(G(Oe)||fe(Oe))return ee=ee.get(se)||null,Ae(X,ee,Oe,ot,null);Oa(X,Oe)}return null}function et(ee,X,se,Oe){for(var ot=null,ht=null,pt=X,_t=X=0,Dn=null;pt!==null&&_t<se.length;_t++){pt.index>_t?(Dn=pt,pt=null):Dn=pt.sibling;var qt=Te(ee,pt,se[_t],Oe);if(qt===null){pt===null&&(pt=Dn);break}t&&pt&&qt.alternate===null&&i(ee,pt),X=h(qt,X,_t),ht===null?ot=qt:ht.sibling=qt,ht=qt,pt=Dn}if(_t===se.length)return o(ee,pt),cn&&os(ee,_t),ot;if(pt===null){for(;_t<se.length;_t++)pt=Pe(ee,se[_t],Oe),pt!==null&&(X=h(pt,X,_t),ht===null?ot=pt:ht.sibling=pt,ht=pt);return cn&&os(ee,_t),ot}for(pt=c(ee,pt);_t<se.length;_t++)Dn=$e(pt,ee,_t,se[_t],Oe),Dn!==null&&(t&&Dn.alternate!==null&&pt.delete(Dn.key===null?_t:Dn.key),X=h(Dn,X,_t),ht===null?ot=Dn:ht.sibling=Dn,ht=Dn);return t&&pt.forEach(function(Xr){return i(ee,Xr)}),cn&&os(ee,_t),ot}function it(ee,X,se,Oe){var ot=fe(se);if(typeof ot!="function")throw Error(n(150));if(se=ot.call(se),se==null)throw Error(n(151));for(var ht=ot=null,pt=X,_t=X=0,Dn=null,qt=se.next();pt!==null&&!qt.done;_t++,qt=se.next()){pt.index>_t?(Dn=pt,pt=null):Dn=pt.sibling;var Xr=Te(ee,pt,qt.value,Oe);if(Xr===null){pt===null&&(pt=Dn);break}t&&pt&&Xr.alternate===null&&i(ee,pt),X=h(Xr,X,_t),ht===null?ot=Xr:ht.sibling=Xr,ht=Xr,pt=Dn}if(qt.done)return o(ee,pt),cn&&os(ee,_t),ot;if(pt===null){for(;!qt.done;_t++,qt=se.next())qt=Pe(ee,qt.value,Oe),qt!==null&&(X=h(qt,X,_t),ht===null?ot=qt:ht.sibling=qt,ht=qt);return cn&&os(ee,_t),ot}for(pt=c(ee,pt);!qt.done;_t++,qt=se.next())qt=$e(pt,ee,_t,qt.value,Oe),qt!==null&&(t&&qt.alternate!==null&&pt.delete(qt.key===null?_t:qt.key),X=h(qt,X,_t),ht===null?ot=qt:ht.sibling=qt,ht=qt);return t&&pt.forEach(function(x_){return i(ee,x_)}),cn&&os(ee,_t),ot}function xn(ee,X,se,Oe){if(typeof se=="object"&&se!==null&&se.type===k&&se.key===null&&(se=se.props.children),typeof se=="object"&&se!==null){switch(se.$$typeof){case z:e:{for(var ot=se.key,ht=X;ht!==null;){if(ht.key===ot){if(ot=se.type,ot===k){if(ht.tag===7){o(ee,ht.sibling),X=d(ht,se.props.children),X.return=ee,ee=X;break e}}else if(ht.elementType===ot||typeof ot=="object"&&ot!==null&&ot.$$typeof===te&&Ch(ot)===ht.type){o(ee,ht.sibling),X=d(ht,se.props),X.ref=ko(ee,ht,se),X.return=ee,ee=X;break e}o(ee,ht);break}else i(ee,ht);ht=ht.sibling}se.type===k?(X=ps(se.props.children,ee.mode,Oe,se.key),X.return=ee,ee=X):(Oe=al(se.type,se.key,se.props,null,ee.mode,Oe),Oe.ref=ko(ee,X,se),Oe.return=ee,ee=Oe)}return E(ee);case D:e:{for(ht=se.key;X!==null;){if(X.key===ht)if(X.tag===4&&X.stateNode.containerInfo===se.containerInfo&&X.stateNode.implementation===se.implementation){o(ee,X.sibling),X=d(X,se.children||[]),X.return=ee,ee=X;break e}else{o(ee,X);break}else i(ee,X);X=X.sibling}X=wu(se,ee.mode,Oe),X.return=ee,ee=X}return E(ee);case te:return ht=se._init,xn(ee,X,ht(se._payload),Oe)}if(G(se))return et(ee,X,se,Oe);if(fe(se))return it(ee,X,se,Oe);Oa(ee,se)}return typeof se=="string"&&se!==""||typeof se=="number"?(se=""+se,X!==null&&X.tag===6?(o(ee,X.sibling),X=d(X,se),X.return=ee,ee=X):(o(ee,X),X=Eu(se,ee.mode,Oe),X.return=ee,ee=X),E(ee)):o(ee,X)}return xn}var Gs=Rh(!0),Ph=Rh(!1),ka=Nr(null),Ba=null,Ws=null,Ic=null;function Nc(){Ic=Ws=Ba=null}function Uc(t){var i=ka.current;on(ka),t._currentValue=i}function Fc(t,i,o){for(;t!==null;){var c=t.alternate;if((t.childLanes&i)!==i?(t.childLanes|=i,c!==null&&(c.childLanes|=i)):c!==null&&(c.childLanes&i)!==i&&(c.childLanes|=i),t===o)break;t=t.return}}function Xs(t,i){Ba=t,Ic=Ws=null,t=t.dependencies,t!==null&&t.firstContext!==null&&((t.lanes&i)!==0&&(oi=!0),t.firstContext=null)}function wi(t){var i=t._currentValue;if(Ic!==t)if(t={context:t,memoizedValue:i,next:null},Ws===null){if(Ba===null)throw Error(n(308));Ws=t,Ba.dependencies={lanes:0,firstContext:t}}else Ws=Ws.next=t;return i}var as=null;function Oc(t){as===null?as=[t]:as.push(t)}function Lh(t,i,o,c){var d=i.interleaved;return d===null?(o.next=o,Oc(i)):(o.next=d.next,d.next=o),i.interleaved=o,dr(t,c)}function dr(t,i){t.lanes|=i;var o=t.alternate;for(o!==null&&(o.lanes|=i),o=t,t=t.return;t!==null;)t.childLanes|=i,o=t.alternate,o!==null&&(o.childLanes|=i),o=t,t=t.return;return o.tag===3?o.stateNode:null}var Or=!1;function kc(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Dh(t,i){t=t.updateQueue,i.updateQueue===t&&(i.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function fr(t,i){return{eventTime:t,lane:i,tag:0,payload:null,callback:null,next:null}}function kr(t,i,o){var c=t.updateQueue;if(c===null)return null;if(c=c.shared,(jt&2)!==0){var d=c.pending;return d===null?i.next=i:(i.next=d.next,d.next=i),c.pending=i,dr(t,o)}return d=c.interleaved,d===null?(i.next=i,Oc(c)):(i.next=d.next,d.next=i),c.interleaved=i,dr(t,o)}function za(t,i,o){if(i=i.updateQueue,i!==null&&(i=i.shared,(o&4194240)!==0)){var c=i.lanes;c&=t.pendingLanes,o|=c,i.lanes=o,ii(t,o)}}function Ih(t,i){var o=t.updateQueue,c=t.alternate;if(c!==null&&(c=c.updateQueue,o===c)){var d=null,h=null;if(o=o.firstBaseUpdate,o!==null){do{var E={eventTime:o.eventTime,lane:o.lane,tag:o.tag,payload:o.payload,callback:o.callback,next:null};h===null?d=h=E:h=h.next=E,o=o.next}while(o!==null);h===null?d=h=i:h=h.next=i}else d=h=i;o={baseState:c.baseState,firstBaseUpdate:d,lastBaseUpdate:h,shared:c.shared,effects:c.effects},t.updateQueue=o;return}t=o.lastBaseUpdate,t===null?o.firstBaseUpdate=i:t.next=i,o.lastBaseUpdate=i}function Ha(t,i,o,c){var d=t.updateQueue;Or=!1;var h=d.firstBaseUpdate,E=d.lastBaseUpdate,N=d.shared.pending;if(N!==null){d.shared.pending=null;var H=N,de=H.next;H.next=null,E===null?h=de:E.next=de,E=H;var Ae=t.alternate;Ae!==null&&(Ae=Ae.updateQueue,N=Ae.lastBaseUpdate,N!==E&&(N===null?Ae.firstBaseUpdate=de:N.next=de,Ae.lastBaseUpdate=H))}if(h!==null){var Pe=d.baseState;E=0,Ae=de=H=null,N=h;do{var Te=N.lane,$e=N.eventTime;if((c&Te)===Te){Ae!==null&&(Ae=Ae.next={eventTime:$e,lane:0,tag:N.tag,payload:N.payload,callback:N.callback,next:null});e:{var et=t,it=N;switch(Te=i,$e=o,it.tag){case 1:if(et=it.payload,typeof et=="function"){Pe=et.call($e,Pe,Te);break e}Pe=et;break e;case 3:et.flags=et.flags&-65537|128;case 0:if(et=it.payload,Te=typeof et=="function"?et.call($e,Pe,Te):et,Te==null)break e;Pe=he({},Pe,Te);break e;case 2:Or=!0}}N.callback!==null&&N.lane!==0&&(t.flags|=64,Te=d.effects,Te===null?d.effects=[N]:Te.push(N))}else $e={eventTime:$e,lane:Te,tag:N.tag,payload:N.payload,callback:N.callback,next:null},Ae===null?(de=Ae=$e,H=Pe):Ae=Ae.next=$e,E|=Te;if(N=N.next,N===null){if(N=d.shared.pending,N===null)break;Te=N,N=Te.next,Te.next=null,d.lastBaseUpdate=Te,d.shared.pending=null}}while(!0);if(Ae===null&&(H=Pe),d.baseState=H,d.firstBaseUpdate=de,d.lastBaseUpdate=Ae,i=d.shared.interleaved,i!==null){d=i;do E|=d.lane,d=d.next;while(d!==i)}else h===null&&(d.shared.lanes=0);us|=E,t.lanes=E,t.memoizedState=Pe}}function Nh(t,i,o){if(t=i.effects,i.effects=null,t!==null)for(i=0;i<t.length;i++){var c=t[i],d=c.callback;if(d!==null){if(c.callback=null,c=o,typeof d!="function")throw Error(n(191,d));d.call(c)}}}var Bo={},ji=Nr(Bo),zo=Nr(Bo),Ho=Nr(Bo);function ls(t){if(t===Bo)throw Error(n(174));return t}function Bc(t,i){switch(nn(Ho,i),nn(zo,t),nn(ji,Bo),t=i.nodeType,t){case 9:case 11:i=(i=i.documentElement)?i.namespaceURI:M(null,"");break;default:t=t===8?i.parentNode:i,i=t.namespaceURI||null,t=t.tagName,i=M(i,t)}on(ji),nn(ji,i)}function js(){on(ji),on(zo),on(Ho)}function Uh(t){ls(Ho.current);var i=ls(ji.current),o=M(i,t.type);i!==o&&(nn(zo,t),nn(ji,o))}function zc(t){zo.current===t&&(on(ji),on(zo))}var fn=Nr(0);function Va(t){for(var i=t;i!==null;){if(i.tag===13){var o=i.memoizedState;if(o!==null&&(o=o.dehydrated,o===null||o.data==="$?"||o.data==="$!"))return i}else if(i.tag===19&&i.memoizedProps.revealOrder!==void 0){if((i.flags&128)!==0)return i}else if(i.child!==null){i.child.return=i,i=i.child;continue}if(i===t)break;for(;i.sibling===null;){if(i.return===null||i.return===t)return null;i=i.return}i.sibling.return=i.return,i=i.sibling}return null}var Hc=[];function Vc(){for(var t=0;t<Hc.length;t++)Hc[t]._workInProgressVersionPrimary=null;Hc.length=0}var Ga=P.ReactCurrentDispatcher,Gc=P.ReactCurrentBatchConfig,cs=0,hn=null,Tn=null,Pn=null,Wa=!1,Vo=!1,Go=0,Hg=0;function Hn(){throw Error(n(321))}function Wc(t,i){if(i===null)return!1;for(var o=0;o<i.length&&o<t.length;o++)if(!Ii(t[o],i[o]))return!1;return!0}function Xc(t,i,o,c,d,h){if(cs=h,hn=i,i.memoizedState=null,i.updateQueue=null,i.lanes=0,Ga.current=t===null||t.memoizedState===null?Xg:jg,t=o(c,d),Vo){h=0;do{if(Vo=!1,Go=0,25<=h)throw Error(n(301));h+=1,Pn=Tn=null,i.updateQueue=null,Ga.current=Yg,t=o(c,d)}while(Vo)}if(Ga.current=Ya,i=Tn!==null&&Tn.next!==null,cs=0,Pn=Tn=hn=null,Wa=!1,i)throw Error(n(300));return t}function jc(){var t=Go!==0;return Go=0,t}function Yi(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Pn===null?hn.memoizedState=Pn=t:Pn=Pn.next=t,Pn}function Ti(){if(Tn===null){var t=hn.alternate;t=t!==null?t.memoizedState:null}else t=Tn.next;var i=Pn===null?hn.memoizedState:Pn.next;if(i!==null)Pn=i,Tn=t;else{if(t===null)throw Error(n(310));Tn=t,t={memoizedState:Tn.memoizedState,baseState:Tn.baseState,baseQueue:Tn.baseQueue,queue:Tn.queue,next:null},Pn===null?hn.memoizedState=Pn=t:Pn=Pn.next=t}return Pn}function Wo(t,i){return typeof i=="function"?i(t):i}function Yc(t){var i=Ti(),o=i.queue;if(o===null)throw Error(n(311));o.lastRenderedReducer=t;var c=Tn,d=c.baseQueue,h=o.pending;if(h!==null){if(d!==null){var E=d.next;d.next=h.next,h.next=E}c.baseQueue=d=h,o.pending=null}if(d!==null){h=d.next,c=c.baseState;var N=E=null,H=null,de=h;do{var Ae=de.lane;if((cs&Ae)===Ae)H!==null&&(H=H.next={lane:0,action:de.action,hasEagerState:de.hasEagerState,eagerState:de.eagerState,next:null}),c=de.hasEagerState?de.eagerState:t(c,de.action);else{var Pe={lane:Ae,action:de.action,hasEagerState:de.hasEagerState,eagerState:de.eagerState,next:null};H===null?(N=H=Pe,E=c):H=H.next=Pe,hn.lanes|=Ae,us|=Ae}de=de.next}while(de!==null&&de!==h);H===null?E=c:H.next=N,Ii(c,i.memoizedState)||(oi=!0),i.memoizedState=c,i.baseState=E,i.baseQueue=H,o.lastRenderedState=c}if(t=o.interleaved,t!==null){d=t;do h=d.lane,hn.lanes|=h,us|=h,d=d.next;while(d!==t)}else d===null&&(o.lanes=0);return[i.memoizedState,o.dispatch]}function qc(t){var i=Ti(),o=i.queue;if(o===null)throw Error(n(311));o.lastRenderedReducer=t;var c=o.dispatch,d=o.pending,h=i.memoizedState;if(d!==null){o.pending=null;var E=d=d.next;do h=t(h,E.action),E=E.next;while(E!==d);Ii(h,i.memoizedState)||(oi=!0),i.memoizedState=h,i.baseQueue===null&&(i.baseState=h),o.lastRenderedState=h}return[h,c]}function Fh(){}function Oh(t,i){var o=hn,c=Ti(),d=i(),h=!Ii(c.memoizedState,d);if(h&&(c.memoizedState=d,oi=!0),c=c.queue,$c(zh.bind(null,o,c,t),[t]),c.getSnapshot!==i||h||Pn!==null&&Pn.memoizedState.tag&1){if(o.flags|=2048,Xo(9,Bh.bind(null,o,c,d,i),void 0,null),Ln===null)throw Error(n(349));(cs&30)!==0||kh(o,i,d)}return d}function kh(t,i,o){t.flags|=16384,t={getSnapshot:i,value:o},i=hn.updateQueue,i===null?(i={lastEffect:null,stores:null},hn.updateQueue=i,i.stores=[t]):(o=i.stores,o===null?i.stores=[t]:o.push(t))}function Bh(t,i,o,c){i.value=o,i.getSnapshot=c,Hh(i)&&Vh(t)}function zh(t,i,o){return o(function(){Hh(i)&&Vh(t)})}function Hh(t){var i=t.getSnapshot;t=t.value;try{var o=i();return!Ii(t,o)}catch{return!0}}function Vh(t){var i=dr(t,1);i!==null&&ki(i,t,1,-1)}function Gh(t){var i=Yi();return typeof t=="function"&&(t=t()),i.memoizedState=i.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Wo,lastRenderedState:t},i.queue=t,t=t.dispatch=Wg.bind(null,hn,t),[i.memoizedState,t]}function Xo(t,i,o,c){return t={tag:t,create:i,destroy:o,deps:c,next:null},i=hn.updateQueue,i===null?(i={lastEffect:null,stores:null},hn.updateQueue=i,i.lastEffect=t.next=t):(o=i.lastEffect,o===null?i.lastEffect=t.next=t:(c=o.next,o.next=t,t.next=c,i.lastEffect=t)),t}function Wh(){return Ti().memoizedState}function Xa(t,i,o,c){var d=Yi();hn.flags|=t,d.memoizedState=Xo(1|i,o,void 0,c===void 0?null:c)}function ja(t,i,o,c){var d=Ti();c=c===void 0?null:c;var h=void 0;if(Tn!==null){var E=Tn.memoizedState;if(h=E.destroy,c!==null&&Wc(c,E.deps)){d.memoizedState=Xo(i,o,h,c);return}}hn.flags|=t,d.memoizedState=Xo(1|i,o,h,c)}function Xh(t,i){return Xa(8390656,8,t,i)}function $c(t,i){return ja(2048,8,t,i)}function jh(t,i){return ja(4,2,t,i)}function Yh(t,i){return ja(4,4,t,i)}function qh(t,i){if(typeof i=="function")return t=t(),i(t),function(){i(null)};if(i!=null)return t=t(),i.current=t,function(){i.current=null}}function $h(t,i,o){return o=o!=null?o.concat([t]):null,ja(4,4,qh.bind(null,i,t),o)}function Kc(){}function Kh(t,i){var o=Ti();i=i===void 0?null:i;var c=o.memoizedState;return c!==null&&i!==null&&Wc(i,c[1])?c[0]:(o.memoizedState=[t,i],t)}function Zh(t,i){var o=Ti();i=i===void 0?null:i;var c=o.memoizedState;return c!==null&&i!==null&&Wc(i,c[1])?c[0]:(t=t(),o.memoizedState=[t,i],t)}function Jh(t,i,o){return(cs&21)===0?(t.baseState&&(t.baseState=!1,oi=!0),t.memoizedState=o):(Ii(o,i)||(o=qe(),hn.lanes|=o,us|=o,t.baseState=!0),i)}function Vg(t,i){var o=It;It=o!==0&&4>o?o:4,t(!0);var c=Gc.transition;Gc.transition={};try{t(!1),i()}finally{It=o,Gc.transition=c}}function Qh(){return Ti().memoizedState}function Gg(t,i,o){var c=Vr(t);if(o={lane:c,action:o,hasEagerState:!1,eagerState:null,next:null},ep(t))tp(i,o);else if(o=Lh(t,i,o,c),o!==null){var d=Qn();ki(o,t,c,d),np(o,i,c)}}function Wg(t,i,o){var c=Vr(t),d={lane:c,action:o,hasEagerState:!1,eagerState:null,next:null};if(ep(t))tp(i,d);else{var h=t.alternate;if(t.lanes===0&&(h===null||h.lanes===0)&&(h=i.lastRenderedReducer,h!==null))try{var E=i.lastRenderedState,N=h(E,o);if(d.hasEagerState=!0,d.eagerState=N,Ii(N,E)){var H=i.interleaved;H===null?(d.next=d,Oc(i)):(d.next=H.next,H.next=d),i.interleaved=d;return}}catch{}finally{}o=Lh(t,i,d,c),o!==null&&(d=Qn(),ki(o,t,c,d),np(o,i,c))}}function ep(t){var i=t.alternate;return t===hn||i!==null&&i===hn}function tp(t,i){Vo=Wa=!0;var o=t.pending;o===null?i.next=i:(i.next=o.next,o.next=i),t.pending=i}function np(t,i,o){if((o&4194240)!==0){var c=i.lanes;c&=t.pendingLanes,o|=c,i.lanes=o,ii(t,o)}}var Ya={readContext:wi,useCallback:Hn,useContext:Hn,useEffect:Hn,useImperativeHandle:Hn,useInsertionEffect:Hn,useLayoutEffect:Hn,useMemo:Hn,useReducer:Hn,useRef:Hn,useState:Hn,useDebugValue:Hn,useDeferredValue:Hn,useTransition:Hn,useMutableSource:Hn,useSyncExternalStore:Hn,useId:Hn,unstable_isNewReconciler:!1},Xg={readContext:wi,useCallback:function(t,i){return Yi().memoizedState=[t,i===void 0?null:i],t},useContext:wi,useEffect:Xh,useImperativeHandle:function(t,i,o){return o=o!=null?o.concat([t]):null,Xa(4194308,4,qh.bind(null,i,t),o)},useLayoutEffect:function(t,i){return Xa(4194308,4,t,i)},useInsertionEffect:function(t,i){return Xa(4,2,t,i)},useMemo:function(t,i){var o=Yi();return i=i===void 0?null:i,t=t(),o.memoizedState=[t,i],t},useReducer:function(t,i,o){var c=Yi();return i=o!==void 0?o(i):i,c.memoizedState=c.baseState=i,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:i},c.queue=t,t=t.dispatch=Gg.bind(null,hn,t),[c.memoizedState,t]},useRef:function(t){var i=Yi();return t={current:t},i.memoizedState=t},useState:Gh,useDebugValue:Kc,useDeferredValue:function(t){return Yi().memoizedState=t},useTransition:function(){var t=Gh(!1),i=t[0];return t=Vg.bind(null,t[1]),Yi().memoizedState=t,[i,t]},useMutableSource:function(){},useSyncExternalStore:function(t,i,o){var c=hn,d=Yi();if(cn){if(o===void 0)throw Error(n(407));o=o()}else{if(o=i(),Ln===null)throw Error(n(349));(cs&30)!==0||kh(c,i,o)}d.memoizedState=o;var h={value:o,getSnapshot:i};return d.queue=h,Xh(zh.bind(null,c,h,t),[t]),c.flags|=2048,Xo(9,Bh.bind(null,c,h,o,i),void 0,null),o},useId:function(){var t=Yi(),i=Ln.identifierPrefix;if(cn){var o=ur,c=cr;o=(c&~(1<<32-Be(c)-1)).toString(32)+o,i=":"+i+"R"+o,o=Go++,0<o&&(i+="H"+o.toString(32)),i+=":"}else o=Hg++,i=":"+i+"r"+o.toString(32)+":";return t.memoizedState=i},unstable_isNewReconciler:!1},jg={readContext:wi,useCallback:Kh,useContext:wi,useEffect:$c,useImperativeHandle:$h,useInsertionEffect:jh,useLayoutEffect:Yh,useMemo:Zh,useReducer:Yc,useRef:Wh,useState:function(){return Yc(Wo)},useDebugValue:Kc,useDeferredValue:function(t){var i=Ti();return Jh(i,Tn.memoizedState,t)},useTransition:function(){var t=Yc(Wo)[0],i=Ti().memoizedState;return[t,i]},useMutableSource:Fh,useSyncExternalStore:Oh,useId:Qh,unstable_isNewReconciler:!1},Yg={readContext:wi,useCallback:Kh,useContext:wi,useEffect:$c,useImperativeHandle:$h,useInsertionEffect:jh,useLayoutEffect:Yh,useMemo:Zh,useReducer:qc,useRef:Wh,useState:function(){return qc(Wo)},useDebugValue:Kc,useDeferredValue:function(t){var i=Ti();return Tn===null?i.memoizedState=t:Jh(i,Tn.memoizedState,t)},useTransition:function(){var t=qc(Wo)[0],i=Ti().memoizedState;return[t,i]},useMutableSource:Fh,useSyncExternalStore:Oh,useId:Qh,unstable_isNewReconciler:!1};function Ui(t,i){if(t&&t.defaultProps){i=he({},i),t=t.defaultProps;for(var o in t)i[o]===void 0&&(i[o]=t[o]);return i}return i}function Zc(t,i,o,c){i=t.memoizedState,o=o(c,i),o=o==null?i:he({},i,o),t.memoizedState=o,t.lanes===0&&(t.updateQueue.baseState=o)}var qa={isMounted:function(t){return(t=t._reactInternals)?Tt(t)===t:!1},enqueueSetState:function(t,i,o){t=t._reactInternals;var c=Qn(),d=Vr(t),h=fr(c,d);h.payload=i,o!=null&&(h.callback=o),i=kr(t,h,d),i!==null&&(ki(i,t,d,c),za(i,t,d))},enqueueReplaceState:function(t,i,o){t=t._reactInternals;var c=Qn(),d=Vr(t),h=fr(c,d);h.tag=1,h.payload=i,o!=null&&(h.callback=o),i=kr(t,h,d),i!==null&&(ki(i,t,d,c),za(i,t,d))},enqueueForceUpdate:function(t,i){t=t._reactInternals;var o=Qn(),c=Vr(t),d=fr(o,c);d.tag=2,i!=null&&(d.callback=i),i=kr(t,d,c),i!==null&&(ki(i,t,c,o),za(i,t,c))}};function ip(t,i,o,c,d,h,E){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(c,h,E):i.prototype&&i.prototype.isPureReactComponent?!Lo(o,c)||!Lo(d,h):!0}function rp(t,i,o){var c=!1,d=Ur,h=i.contextType;return typeof h=="object"&&h!==null?h=wi(h):(d=si(i)?rs:zn.current,c=i.contextTypes,h=(c=c!=null)?Bs(t,d):Ur),i=new i(o,h),t.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,i.updater=qa,t.stateNode=i,i._reactInternals=t,c&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=d,t.__reactInternalMemoizedMaskedChildContext=h),i}function sp(t,i,o,c){t=i.state,typeof i.componentWillReceiveProps=="function"&&i.componentWillReceiveProps(o,c),typeof i.UNSAFE_componentWillReceiveProps=="function"&&i.UNSAFE_componentWillReceiveProps(o,c),i.state!==t&&qa.enqueueReplaceState(i,i.state,null)}function Jc(t,i,o,c){var d=t.stateNode;d.props=o,d.state=t.memoizedState,d.refs={},kc(t);var h=i.contextType;typeof h=="object"&&h!==null?d.context=wi(h):(h=si(i)?rs:zn.current,d.context=Bs(t,h)),d.state=t.memoizedState,h=i.getDerivedStateFromProps,typeof h=="function"&&(Zc(t,i,h,o),d.state=t.memoizedState),typeof i.getDerivedStateFromProps=="function"||typeof d.getSnapshotBeforeUpdate=="function"||typeof d.UNSAFE_componentWillMount!="function"&&typeof d.componentWillMount!="function"||(i=d.state,typeof d.componentWillMount=="function"&&d.componentWillMount(),typeof d.UNSAFE_componentWillMount=="function"&&d.UNSAFE_componentWillMount(),i!==d.state&&qa.enqueueReplaceState(d,d.state,null),Ha(t,o,d,c),d.state=t.memoizedState),typeof d.componentDidMount=="function"&&(t.flags|=4194308)}function Ys(t,i){try{var o="",c=i;do o+=We(c),c=c.return;while(c);var d=o}catch(h){d=`
Error generating stack: `+h.message+`
`+h.stack}return{value:t,source:i,stack:d,digest:null}}function Qc(t,i,o){return{value:t,source:null,stack:o??null,digest:i??null}}function eu(t,i){try{console.error(i.value)}catch(o){setTimeout(function(){throw o})}}var qg=typeof WeakMap=="function"?WeakMap:Map;function op(t,i,o){o=fr(-1,o),o.tag=3,o.payload={element:null};var c=i.value;return o.callback=function(){tl||(tl=!0,mu=c),eu(t,i)},o}function ap(t,i,o){o=fr(-1,o),o.tag=3;var c=t.type.getDerivedStateFromError;if(typeof c=="function"){var d=i.value;o.payload=function(){return c(d)},o.callback=function(){eu(t,i)}}var h=t.stateNode;return h!==null&&typeof h.componentDidCatch=="function"&&(o.callback=function(){eu(t,i),typeof c!="function"&&(zr===null?zr=new Set([this]):zr.add(this));var E=i.stack;this.componentDidCatch(i.value,{componentStack:E!==null?E:""})}),o}function lp(t,i,o){var c=t.pingCache;if(c===null){c=t.pingCache=new qg;var d=new Set;c.set(i,d)}else d=c.get(i),d===void 0&&(d=new Set,c.set(i,d));d.has(o)||(d.add(o),t=l_.bind(null,t,i,o),i.then(t,t))}function cp(t){do{var i;if((i=t.tag===13)&&(i=t.memoizedState,i=i!==null?i.dehydrated!==null:!0),i)return t;t=t.return}while(t!==null);return null}function up(t,i,o,c,d){return(t.mode&1)===0?(t===i?t.flags|=65536:(t.flags|=128,o.flags|=131072,o.flags&=-52805,o.tag===1&&(o.alternate===null?o.tag=17:(i=fr(-1,1),i.tag=2,kr(o,i,1))),o.lanes|=1),t):(t.flags|=65536,t.lanes=d,t)}var $g=P.ReactCurrentOwner,oi=!1;function Jn(t,i,o,c){i.child=t===null?Ph(i,null,o,c):Gs(i,t.child,o,c)}function dp(t,i,o,c,d){o=o.render;var h=i.ref;return Xs(i,d),c=Xc(t,i,o,c,h,d),o=jc(),t!==null&&!oi?(i.updateQueue=t.updateQueue,i.flags&=-2053,t.lanes&=~d,hr(t,i,d)):(cn&&o&&Cc(i),i.flags|=1,Jn(t,i,c,d),i.child)}function fp(t,i,o,c,d){if(t===null){var h=o.type;return typeof h=="function"&&!Mu(h)&&h.defaultProps===void 0&&o.compare===null&&o.defaultProps===void 0?(i.tag=15,i.type=h,hp(t,i,h,c,d)):(t=al(o.type,null,c,i,i.mode,d),t.ref=i.ref,t.return=i,i.child=t)}if(h=t.child,(t.lanes&d)===0){var E=h.memoizedProps;if(o=o.compare,o=o!==null?o:Lo,o(E,c)&&t.ref===i.ref)return hr(t,i,d)}return i.flags|=1,t=Wr(h,c),t.ref=i.ref,t.return=i,i.child=t}function hp(t,i,o,c,d){if(t!==null){var h=t.memoizedProps;if(Lo(h,c)&&t.ref===i.ref)if(oi=!1,i.pendingProps=c=h,(t.lanes&d)!==0)(t.flags&131072)!==0&&(oi=!0);else return i.lanes=t.lanes,hr(t,i,d)}return tu(t,i,o,c,d)}function pp(t,i,o){var c=i.pendingProps,d=c.children,h=t!==null?t.memoizedState:null;if(c.mode==="hidden")if((i.mode&1)===0)i.memoizedState={baseLanes:0,cachePool:null,transitions:null},nn($s,gi),gi|=o;else{if((o&1073741824)===0)return t=h!==null?h.baseLanes|o:o,i.lanes=i.childLanes=1073741824,i.memoizedState={baseLanes:t,cachePool:null,transitions:null},i.updateQueue=null,nn($s,gi),gi|=t,null;i.memoizedState={baseLanes:0,cachePool:null,transitions:null},c=h!==null?h.baseLanes:o,nn($s,gi),gi|=c}else h!==null?(c=h.baseLanes|o,i.memoizedState=null):c=o,nn($s,gi),gi|=c;return Jn(t,i,d,o),i.child}function mp(t,i){var o=i.ref;(t===null&&o!==null||t!==null&&t.ref!==o)&&(i.flags|=512,i.flags|=2097152)}function tu(t,i,o,c,d){var h=si(o)?rs:zn.current;return h=Bs(i,h),Xs(i,d),o=Xc(t,i,o,c,h,d),c=jc(),t!==null&&!oi?(i.updateQueue=t.updateQueue,i.flags&=-2053,t.lanes&=~d,hr(t,i,d)):(cn&&c&&Cc(i),i.flags|=1,Jn(t,i,o,d),i.child)}function gp(t,i,o,c,d){if(si(o)){var h=!0;Da(i)}else h=!1;if(Xs(i,d),i.stateNode===null)Ka(t,i),rp(i,o,c),Jc(i,o,c,d),c=!0;else if(t===null){var E=i.stateNode,N=i.memoizedProps;E.props=N;var H=E.context,de=o.contextType;typeof de=="object"&&de!==null?de=wi(de):(de=si(o)?rs:zn.current,de=Bs(i,de));var Ae=o.getDerivedStateFromProps,Pe=typeof Ae=="function"||typeof E.getSnapshotBeforeUpdate=="function";Pe||typeof E.UNSAFE_componentWillReceiveProps!="function"&&typeof E.componentWillReceiveProps!="function"||(N!==c||H!==de)&&sp(i,E,c,de),Or=!1;var Te=i.memoizedState;E.state=Te,Ha(i,c,E,d),H=i.memoizedState,N!==c||Te!==H||ri.current||Or?(typeof Ae=="function"&&(Zc(i,o,Ae,c),H=i.memoizedState),(N=Or||ip(i,o,N,c,Te,H,de))?(Pe||typeof E.UNSAFE_componentWillMount!="function"&&typeof E.componentWillMount!="function"||(typeof E.componentWillMount=="function"&&E.componentWillMount(),typeof E.UNSAFE_componentWillMount=="function"&&E.UNSAFE_componentWillMount()),typeof E.componentDidMount=="function"&&(i.flags|=4194308)):(typeof E.componentDidMount=="function"&&(i.flags|=4194308),i.memoizedProps=c,i.memoizedState=H),E.props=c,E.state=H,E.context=de,c=N):(typeof E.componentDidMount=="function"&&(i.flags|=4194308),c=!1)}else{E=i.stateNode,Dh(t,i),N=i.memoizedProps,de=i.type===i.elementType?N:Ui(i.type,N),E.props=de,Pe=i.pendingProps,Te=E.context,H=o.contextType,typeof H=="object"&&H!==null?H=wi(H):(H=si(o)?rs:zn.current,H=Bs(i,H));var $e=o.getDerivedStateFromProps;(Ae=typeof $e=="function"||typeof E.getSnapshotBeforeUpdate=="function")||typeof E.UNSAFE_componentWillReceiveProps!="function"&&typeof E.componentWillReceiveProps!="function"||(N!==Pe||Te!==H)&&sp(i,E,c,H),Or=!1,Te=i.memoizedState,E.state=Te,Ha(i,c,E,d);var et=i.memoizedState;N!==Pe||Te!==et||ri.current||Or?(typeof $e=="function"&&(Zc(i,o,$e,c),et=i.memoizedState),(de=Or||ip(i,o,de,c,Te,et,H)||!1)?(Ae||typeof E.UNSAFE_componentWillUpdate!="function"&&typeof E.componentWillUpdate!="function"||(typeof E.componentWillUpdate=="function"&&E.componentWillUpdate(c,et,H),typeof E.UNSAFE_componentWillUpdate=="function"&&E.UNSAFE_componentWillUpdate(c,et,H)),typeof E.componentDidUpdate=="function"&&(i.flags|=4),typeof E.getSnapshotBeforeUpdate=="function"&&(i.flags|=1024)):(typeof E.componentDidUpdate!="function"||N===t.memoizedProps&&Te===t.memoizedState||(i.flags|=4),typeof E.getSnapshotBeforeUpdate!="function"||N===t.memoizedProps&&Te===t.memoizedState||(i.flags|=1024),i.memoizedProps=c,i.memoizedState=et),E.props=c,E.state=et,E.context=H,c=de):(typeof E.componentDidUpdate!="function"||N===t.memoizedProps&&Te===t.memoizedState||(i.flags|=4),typeof E.getSnapshotBeforeUpdate!="function"||N===t.memoizedProps&&Te===t.memoizedState||(i.flags|=1024),c=!1)}return nu(t,i,o,c,h,d)}function nu(t,i,o,c,d,h){mp(t,i);var E=(i.flags&128)!==0;if(!c&&!E)return d&&Sh(i,o,!1),hr(t,i,h);c=i.stateNode,$g.current=i;var N=E&&typeof o.getDerivedStateFromError!="function"?null:c.render();return i.flags|=1,t!==null&&E?(i.child=Gs(i,t.child,null,h),i.child=Gs(i,null,N,h)):Jn(t,i,N,h),i.memoizedState=c.state,d&&Sh(i,o,!0),i.child}function _p(t){var i=t.stateNode;i.pendingContext?xh(t,i.pendingContext,i.pendingContext!==i.context):i.context&&xh(t,i.context,!1),Bc(t,i.containerInfo)}function vp(t,i,o,c,d){return Vs(),Dc(d),i.flags|=256,Jn(t,i,o,c),i.child}var iu={dehydrated:null,treeContext:null,retryLane:0};function ru(t){return{baseLanes:t,cachePool:null,transitions:null}}function xp(t,i,o){var c=i.pendingProps,d=fn.current,h=!1,E=(i.flags&128)!==0,N;if((N=E)||(N=t!==null&&t.memoizedState===null?!1:(d&2)!==0),N?(h=!0,i.flags&=-129):(t===null||t.memoizedState!==null)&&(d|=1),nn(fn,d&1),t===null)return Lc(i),t=i.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?((i.mode&1)===0?i.lanes=1:t.data==="$!"?i.lanes=8:i.lanes=1073741824,null):(E=c.children,t=c.fallback,h?(c=i.mode,h=i.child,E={mode:"hidden",children:E},(c&1)===0&&h!==null?(h.childLanes=0,h.pendingProps=E):h=ll(E,c,0,null),t=ps(t,c,o,null),h.return=i,t.return=i,h.sibling=t,i.child=h,i.child.memoizedState=ru(o),i.memoizedState=iu,t):su(i,E));if(d=t.memoizedState,d!==null&&(N=d.dehydrated,N!==null))return Kg(t,i,E,c,N,d,o);if(h){h=c.fallback,E=i.mode,d=t.child,N=d.sibling;var H={mode:"hidden",children:c.children};return(E&1)===0&&i.child!==d?(c=i.child,c.childLanes=0,c.pendingProps=H,i.deletions=null):(c=Wr(d,H),c.subtreeFlags=d.subtreeFlags&14680064),N!==null?h=Wr(N,h):(h=ps(h,E,o,null),h.flags|=2),h.return=i,c.return=i,c.sibling=h,i.child=c,c=h,h=i.child,E=t.child.memoizedState,E=E===null?ru(o):{baseLanes:E.baseLanes|o,cachePool:null,transitions:E.transitions},h.memoizedState=E,h.childLanes=t.childLanes&~o,i.memoizedState=iu,c}return h=t.child,t=h.sibling,c=Wr(h,{mode:"visible",children:c.children}),(i.mode&1)===0&&(c.lanes=o),c.return=i,c.sibling=null,t!==null&&(o=i.deletions,o===null?(i.deletions=[t],i.flags|=16):o.push(t)),i.child=c,i.memoizedState=null,c}function su(t,i){return i=ll({mode:"visible",children:i},t.mode,0,null),i.return=t,t.child=i}function $a(t,i,o,c){return c!==null&&Dc(c),Gs(i,t.child,null,o),t=su(i,i.pendingProps.children),t.flags|=2,i.memoizedState=null,t}function Kg(t,i,o,c,d,h,E){if(o)return i.flags&256?(i.flags&=-257,c=Qc(Error(n(422))),$a(t,i,E,c)):i.memoizedState!==null?(i.child=t.child,i.flags|=128,null):(h=c.fallback,d=i.mode,c=ll({mode:"visible",children:c.children},d,0,null),h=ps(h,d,E,null),h.flags|=2,c.return=i,h.return=i,c.sibling=h,i.child=c,(i.mode&1)!==0&&Gs(i,t.child,null,E),i.child.memoizedState=ru(E),i.memoizedState=iu,h);if((i.mode&1)===0)return $a(t,i,E,null);if(d.data==="$!"){if(c=d.nextSibling&&d.nextSibling.dataset,c)var N=c.dgst;return c=N,h=Error(n(419)),c=Qc(h,c,void 0),$a(t,i,E,c)}if(N=(E&t.childLanes)!==0,oi||N){if(c=Ln,c!==null){switch(E&-E){case 4:d=2;break;case 16:d=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:d=32;break;case 536870912:d=268435456;break;default:d=0}d=(d&(c.suspendedLanes|E))!==0?0:d,d!==0&&d!==h.retryLane&&(h.retryLane=d,dr(t,d),ki(c,t,d,-1))}return Su(),c=Qc(Error(n(421))),$a(t,i,E,c)}return d.data==="$?"?(i.flags|=128,i.child=t.child,i=c_.bind(null,t),d._reactRetry=i,null):(t=h.treeContext,mi=Ir(d.nextSibling),pi=i,cn=!0,Ni=null,t!==null&&(Mi[Ei++]=cr,Mi[Ei++]=ur,Mi[Ei++]=ss,cr=t.id,ur=t.overflow,ss=i),i=su(i,c.children),i.flags|=4096,i)}function yp(t,i,o){t.lanes|=i;var c=t.alternate;c!==null&&(c.lanes|=i),Fc(t.return,i,o)}function ou(t,i,o,c,d){var h=t.memoizedState;h===null?t.memoizedState={isBackwards:i,rendering:null,renderingStartTime:0,last:c,tail:o,tailMode:d}:(h.isBackwards=i,h.rendering=null,h.renderingStartTime=0,h.last=c,h.tail=o,h.tailMode=d)}function Sp(t,i,o){var c=i.pendingProps,d=c.revealOrder,h=c.tail;if(Jn(t,i,c.children,o),c=fn.current,(c&2)!==0)c=c&1|2,i.flags|=128;else{if(t!==null&&(t.flags&128)!==0)e:for(t=i.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&yp(t,o,i);else if(t.tag===19)yp(t,o,i);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===i)break e;for(;t.sibling===null;){if(t.return===null||t.return===i)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}c&=1}if(nn(fn,c),(i.mode&1)===0)i.memoizedState=null;else switch(d){case"forwards":for(o=i.child,d=null;o!==null;)t=o.alternate,t!==null&&Va(t)===null&&(d=o),o=o.sibling;o=d,o===null?(d=i.child,i.child=null):(d=o.sibling,o.sibling=null),ou(i,!1,d,o,h);break;case"backwards":for(o=null,d=i.child,i.child=null;d!==null;){if(t=d.alternate,t!==null&&Va(t)===null){i.child=d;break}t=d.sibling,d.sibling=o,o=d,d=t}ou(i,!0,o,null,h);break;case"together":ou(i,!1,null,null,void 0);break;default:i.memoizedState=null}return i.child}function Ka(t,i){(i.mode&1)===0&&t!==null&&(t.alternate=null,i.alternate=null,i.flags|=2)}function hr(t,i,o){if(t!==null&&(i.dependencies=t.dependencies),us|=i.lanes,(o&i.childLanes)===0)return null;if(t!==null&&i.child!==t.child)throw Error(n(153));if(i.child!==null){for(t=i.child,o=Wr(t,t.pendingProps),i.child=o,o.return=i;t.sibling!==null;)t=t.sibling,o=o.sibling=Wr(t,t.pendingProps),o.return=i;o.sibling=null}return i.child}function Zg(t,i,o){switch(i.tag){case 3:_p(i),Vs();break;case 5:Uh(i);break;case 1:si(i.type)&&Da(i);break;case 4:Bc(i,i.stateNode.containerInfo);break;case 10:var c=i.type._context,d=i.memoizedProps.value;nn(ka,c._currentValue),c._currentValue=d;break;case 13:if(c=i.memoizedState,c!==null)return c.dehydrated!==null?(nn(fn,fn.current&1),i.flags|=128,null):(o&i.child.childLanes)!==0?xp(t,i,o):(nn(fn,fn.current&1),t=hr(t,i,o),t!==null?t.sibling:null);nn(fn,fn.current&1);break;case 19:if(c=(o&i.childLanes)!==0,(t.flags&128)!==0){if(c)return Sp(t,i,o);i.flags|=128}if(d=i.memoizedState,d!==null&&(d.rendering=null,d.tail=null,d.lastEffect=null),nn(fn,fn.current),c)break;return null;case 22:case 23:return i.lanes=0,pp(t,i,o)}return hr(t,i,o)}var Mp,au,Ep,wp;Mp=function(t,i){for(var o=i.child;o!==null;){if(o.tag===5||o.tag===6)t.appendChild(o.stateNode);else if(o.tag!==4&&o.child!==null){o.child.return=o,o=o.child;continue}if(o===i)break;for(;o.sibling===null;){if(o.return===null||o.return===i)return;o=o.return}o.sibling.return=o.return,o=o.sibling}},au=function(){},Ep=function(t,i,o,c){var d=t.memoizedProps;if(d!==c){t=i.stateNode,ls(ji.current);var h=null;switch(o){case"input":d=Rt(t,d),c=Rt(t,c),h=[];break;case"select":d=he({},d,{value:void 0}),c=he({},c,{value:void 0}),h=[];break;case"textarea":d=oe(t,d),c=oe(t,c),h=[];break;default:typeof d.onClick!="function"&&typeof c.onClick=="function"&&(t.onclick=Ra)}Ge(o,c);var E;o=null;for(de in d)if(!c.hasOwnProperty(de)&&d.hasOwnProperty(de)&&d[de]!=null)if(de==="style"){var N=d[de];for(E in N)N.hasOwnProperty(E)&&(o||(o={}),o[E]="")}else de!=="dangerouslySetInnerHTML"&&de!=="children"&&de!=="suppressContentEditableWarning"&&de!=="suppressHydrationWarning"&&de!=="autoFocus"&&(a.hasOwnProperty(de)?h||(h=[]):(h=h||[]).push(de,null));for(de in c){var H=c[de];if(N=d!=null?d[de]:void 0,c.hasOwnProperty(de)&&H!==N&&(H!=null||N!=null))if(de==="style")if(N){for(E in N)!N.hasOwnProperty(E)||H&&H.hasOwnProperty(E)||(o||(o={}),o[E]="");for(E in H)H.hasOwnProperty(E)&&N[E]!==H[E]&&(o||(o={}),o[E]=H[E])}else o||(h||(h=[]),h.push(de,o)),o=H;else de==="dangerouslySetInnerHTML"?(H=H?H.__html:void 0,N=N?N.__html:void 0,H!=null&&N!==H&&(h=h||[]).push(de,H)):de==="children"?typeof H!="string"&&typeof H!="number"||(h=h||[]).push(de,""+H):de!=="suppressContentEditableWarning"&&de!=="suppressHydrationWarning"&&(a.hasOwnProperty(de)?(H!=null&&de==="onScroll"&&sn("scroll",t),h||N===H||(h=[])):(h=h||[]).push(de,H))}o&&(h=h||[]).push("style",o);var de=h;(i.updateQueue=de)&&(i.flags|=4)}},wp=function(t,i,o,c){o!==c&&(i.flags|=4)};function jo(t,i){if(!cn)switch(t.tailMode){case"hidden":i=t.tail;for(var o=null;i!==null;)i.alternate!==null&&(o=i),i=i.sibling;o===null?t.tail=null:o.sibling=null;break;case"collapsed":o=t.tail;for(var c=null;o!==null;)o.alternate!==null&&(c=o),o=o.sibling;c===null?i||t.tail===null?t.tail=null:t.tail.sibling=null:c.sibling=null}}function Vn(t){var i=t.alternate!==null&&t.alternate.child===t.child,o=0,c=0;if(i)for(var d=t.child;d!==null;)o|=d.lanes|d.childLanes,c|=d.subtreeFlags&14680064,c|=d.flags&14680064,d.return=t,d=d.sibling;else for(d=t.child;d!==null;)o|=d.lanes|d.childLanes,c|=d.subtreeFlags,c|=d.flags,d.return=t,d=d.sibling;return t.subtreeFlags|=c,t.childLanes=o,i}function Jg(t,i,o){var c=i.pendingProps;switch(Rc(i),i.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Vn(i),null;case 1:return si(i.type)&&La(),Vn(i),null;case 3:return c=i.stateNode,js(),on(ri),on(zn),Vc(),c.pendingContext&&(c.context=c.pendingContext,c.pendingContext=null),(t===null||t.child===null)&&(Fa(i)?i.flags|=4:t===null||t.memoizedState.isDehydrated&&(i.flags&256)===0||(i.flags|=1024,Ni!==null&&(vu(Ni),Ni=null))),au(t,i),Vn(i),null;case 5:zc(i);var d=ls(Ho.current);if(o=i.type,t!==null&&i.stateNode!=null)Ep(t,i,o,c,d),t.ref!==i.ref&&(i.flags|=512,i.flags|=2097152);else{if(!c){if(i.stateNode===null)throw Error(n(166));return Vn(i),null}if(t=ls(ji.current),Fa(i)){c=i.stateNode,o=i.type;var h=i.memoizedProps;switch(c[Xi]=i,c[Fo]=h,t=(i.mode&1)!==0,o){case"dialog":sn("cancel",c),sn("close",c);break;case"iframe":case"object":case"embed":sn("load",c);break;case"video":case"audio":for(d=0;d<Io.length;d++)sn(Io[d],c);break;case"source":sn("error",c);break;case"img":case"image":case"link":sn("error",c),sn("load",c);break;case"details":sn("toggle",c);break;case"input":kt(c,h),sn("invalid",c);break;case"select":c._wrapperState={wasMultiple:!!h.multiple},sn("invalid",c);break;case"textarea":F(c,h),sn("invalid",c)}Ge(o,h),d=null;for(var E in h)if(h.hasOwnProperty(E)){var N=h[E];E==="children"?typeof N=="string"?c.textContent!==N&&(h.suppressHydrationWarning!==!0&&Ca(c.textContent,N,t),d=["children",N]):typeof N=="number"&&c.textContent!==""+N&&(h.suppressHydrationWarning!==!0&&Ca(c.textContent,N,t),d=["children",""+N]):a.hasOwnProperty(E)&&N!=null&&E==="onScroll"&&sn("scroll",c)}switch(o){case"input":tt(c),Yt(c,h,!0);break;case"textarea":tt(c),Lt(c);break;case"select":case"option":break;default:typeof h.onClick=="function"&&(c.onclick=Ra)}c=d,i.updateQueue=c,c!==null&&(i.flags|=4)}else{E=d.nodeType===9?d:d.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=C(o)),t==="http://www.w3.org/1999/xhtml"?o==="script"?(t=E.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof c.is=="string"?t=E.createElement(o,{is:c.is}):(t=E.createElement(o),o==="select"&&(E=t,c.multiple?E.multiple=!0:c.size&&(E.size=c.size))):t=E.createElementNS(t,o),t[Xi]=i,t[Fo]=c,Mp(t,i,!1,!1),i.stateNode=t;e:{switch(E=Ne(o,c),o){case"dialog":sn("cancel",t),sn("close",t),d=c;break;case"iframe":case"object":case"embed":sn("load",t),d=c;break;case"video":case"audio":for(d=0;d<Io.length;d++)sn(Io[d],t);d=c;break;case"source":sn("error",t),d=c;break;case"img":case"image":case"link":sn("error",t),sn("load",t),d=c;break;case"details":sn("toggle",t),d=c;break;case"input":kt(t,c),d=Rt(t,c),sn("invalid",t);break;case"option":d=c;break;case"select":t._wrapperState={wasMultiple:!!c.multiple},d=he({},c,{value:void 0}),sn("invalid",t);break;case"textarea":F(t,c),d=oe(t,c),sn("invalid",t);break;default:d=c}Ge(o,d),N=d;for(h in N)if(N.hasOwnProperty(h)){var H=N[h];h==="style"?_e(t,H):h==="dangerouslySetInnerHTML"?(H=H?H.__html:void 0,H!=null&&ge(t,H)):h==="children"?typeof H=="string"?(o!=="textarea"||H!=="")&&ye(t,H):typeof H=="number"&&ye(t,""+H):h!=="suppressContentEditableWarning"&&h!=="suppressHydrationWarning"&&h!=="autoFocus"&&(a.hasOwnProperty(h)?H!=null&&h==="onScroll"&&sn("scroll",t):H!=null&&L(t,h,H,E))}switch(o){case"input":tt(t),Yt(t,c,!1);break;case"textarea":tt(t),Lt(t);break;case"option":c.value!=null&&t.setAttribute("value",""+xe(c.value));break;case"select":t.multiple=!!c.multiple,h=c.value,h!=null?Bt(t,!!c.multiple,h,!1):c.defaultValue!=null&&Bt(t,!!c.multiple,c.defaultValue,!0);break;default:typeof d.onClick=="function"&&(t.onclick=Ra)}switch(o){case"button":case"input":case"select":case"textarea":c=!!c.autoFocus;break e;case"img":c=!0;break e;default:c=!1}}c&&(i.flags|=4)}i.ref!==null&&(i.flags|=512,i.flags|=2097152)}return Vn(i),null;case 6:if(t&&i.stateNode!=null)wp(t,i,t.memoizedProps,c);else{if(typeof c!="string"&&i.stateNode===null)throw Error(n(166));if(o=ls(Ho.current),ls(ji.current),Fa(i)){if(c=i.stateNode,o=i.memoizedProps,c[Xi]=i,(h=c.nodeValue!==o)&&(t=pi,t!==null))switch(t.tag){case 3:Ca(c.nodeValue,o,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&Ca(c.nodeValue,o,(t.mode&1)!==0)}h&&(i.flags|=4)}else c=(o.nodeType===9?o:o.ownerDocument).createTextNode(c),c[Xi]=i,i.stateNode=c}return Vn(i),null;case 13:if(on(fn),c=i.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(cn&&mi!==null&&(i.mode&1)!==0&&(i.flags&128)===0)bh(),Vs(),i.flags|=98560,h=!1;else if(h=Fa(i),c!==null&&c.dehydrated!==null){if(t===null){if(!h)throw Error(n(318));if(h=i.memoizedState,h=h!==null?h.dehydrated:null,!h)throw Error(n(317));h[Xi]=i}else Vs(),(i.flags&128)===0&&(i.memoizedState=null),i.flags|=4;Vn(i),h=!1}else Ni!==null&&(vu(Ni),Ni=null),h=!0;if(!h)return i.flags&65536?i:null}return(i.flags&128)!==0?(i.lanes=o,i):(c=c!==null,c!==(t!==null&&t.memoizedState!==null)&&c&&(i.child.flags|=8192,(i.mode&1)!==0&&(t===null||(fn.current&1)!==0?An===0&&(An=3):Su())),i.updateQueue!==null&&(i.flags|=4),Vn(i),null);case 4:return js(),au(t,i),t===null&&No(i.stateNode.containerInfo),Vn(i),null;case 10:return Uc(i.type._context),Vn(i),null;case 17:return si(i.type)&&La(),Vn(i),null;case 19:if(on(fn),h=i.memoizedState,h===null)return Vn(i),null;if(c=(i.flags&128)!==0,E=h.rendering,E===null)if(c)jo(h,!1);else{if(An!==0||t!==null&&(t.flags&128)!==0)for(t=i.child;t!==null;){if(E=Va(t),E!==null){for(i.flags|=128,jo(h,!1),c=E.updateQueue,c!==null&&(i.updateQueue=c,i.flags|=4),i.subtreeFlags=0,c=o,o=i.child;o!==null;)h=o,t=c,h.flags&=14680066,E=h.alternate,E===null?(h.childLanes=0,h.lanes=t,h.child=null,h.subtreeFlags=0,h.memoizedProps=null,h.memoizedState=null,h.updateQueue=null,h.dependencies=null,h.stateNode=null):(h.childLanes=E.childLanes,h.lanes=E.lanes,h.child=E.child,h.subtreeFlags=0,h.deletions=null,h.memoizedProps=E.memoizedProps,h.memoizedState=E.memoizedState,h.updateQueue=E.updateQueue,h.type=E.type,t=E.dependencies,h.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),o=o.sibling;return nn(fn,fn.current&1|2),i.child}t=t.sibling}h.tail!==null&&en()>Ks&&(i.flags|=128,c=!0,jo(h,!1),i.lanes=4194304)}else{if(!c)if(t=Va(E),t!==null){if(i.flags|=128,c=!0,o=t.updateQueue,o!==null&&(i.updateQueue=o,i.flags|=4),jo(h,!0),h.tail===null&&h.tailMode==="hidden"&&!E.alternate&&!cn)return Vn(i),null}else 2*en()-h.renderingStartTime>Ks&&o!==1073741824&&(i.flags|=128,c=!0,jo(h,!1),i.lanes=4194304);h.isBackwards?(E.sibling=i.child,i.child=E):(o=h.last,o!==null?o.sibling=E:i.child=E,h.last=E)}return h.tail!==null?(i=h.tail,h.rendering=i,h.tail=i.sibling,h.renderingStartTime=en(),i.sibling=null,o=fn.current,nn(fn,c?o&1|2:o&1),i):(Vn(i),null);case 22:case 23:return yu(),c=i.memoizedState!==null,t!==null&&t.memoizedState!==null!==c&&(i.flags|=8192),c&&(i.mode&1)!==0?(gi&1073741824)!==0&&(Vn(i),i.subtreeFlags&6&&(i.flags|=8192)):Vn(i),null;case 24:return null;case 25:return null}throw Error(n(156,i.tag))}function Qg(t,i){switch(Rc(i),i.tag){case 1:return si(i.type)&&La(),t=i.flags,t&65536?(i.flags=t&-65537|128,i):null;case 3:return js(),on(ri),on(zn),Vc(),t=i.flags,(t&65536)!==0&&(t&128)===0?(i.flags=t&-65537|128,i):null;case 5:return zc(i),null;case 13:if(on(fn),t=i.memoizedState,t!==null&&t.dehydrated!==null){if(i.alternate===null)throw Error(n(340));Vs()}return t=i.flags,t&65536?(i.flags=t&-65537|128,i):null;case 19:return on(fn),null;case 4:return js(),null;case 10:return Uc(i.type._context),null;case 22:case 23:return yu(),null;case 24:return null;default:return null}}var Za=!1,Gn=!1,e_=typeof WeakSet=="function"?WeakSet:Set,Je=null;function qs(t,i){var o=t.ref;if(o!==null)if(typeof o=="function")try{o(null)}catch(c){mn(t,i,c)}else o.current=null}function lu(t,i,o){try{o()}catch(c){mn(t,i,c)}}var Tp=!1;function t_(t,i){if(yc=_a,t=ih(),fc(t)){if("selectionStart"in t)var o={start:t.selectionStart,end:t.selectionEnd};else e:{o=(o=t.ownerDocument)&&o.defaultView||window;var c=o.getSelection&&o.getSelection();if(c&&c.rangeCount!==0){o=c.anchorNode;var d=c.anchorOffset,h=c.focusNode;c=c.focusOffset;try{o.nodeType,h.nodeType}catch{o=null;break e}var E=0,N=-1,H=-1,de=0,Ae=0,Pe=t,Te=null;t:for(;;){for(var $e;Pe!==o||d!==0&&Pe.nodeType!==3||(N=E+d),Pe!==h||c!==0&&Pe.nodeType!==3||(H=E+c),Pe.nodeType===3&&(E+=Pe.nodeValue.length),($e=Pe.firstChild)!==null;)Te=Pe,Pe=$e;for(;;){if(Pe===t)break t;if(Te===o&&++de===d&&(N=E),Te===h&&++Ae===c&&(H=E),($e=Pe.nextSibling)!==null)break;Pe=Te,Te=Pe.parentNode}Pe=$e}o=N===-1||H===-1?null:{start:N,end:H}}else o=null}o=o||{start:0,end:0}}else o=null;for(Sc={focusedElem:t,selectionRange:o},_a=!1,Je=i;Je!==null;)if(i=Je,t=i.child,(i.subtreeFlags&1028)!==0&&t!==null)t.return=i,Je=t;else for(;Je!==null;){i=Je;try{var et=i.alternate;if((i.flags&1024)!==0)switch(i.tag){case 0:case 11:case 15:break;case 1:if(et!==null){var it=et.memoizedProps,xn=et.memoizedState,ee=i.stateNode,X=ee.getSnapshotBeforeUpdate(i.elementType===i.type?it:Ui(i.type,it),xn);ee.__reactInternalSnapshotBeforeUpdate=X}break;case 3:var se=i.stateNode.containerInfo;se.nodeType===1?se.textContent="":se.nodeType===9&&se.documentElement&&se.removeChild(se.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(n(163))}}catch(Oe){mn(i,i.return,Oe)}if(t=i.sibling,t!==null){t.return=i.return,Je=t;break}Je=i.return}return et=Tp,Tp=!1,et}function Yo(t,i,o){var c=i.updateQueue;if(c=c!==null?c.lastEffect:null,c!==null){var d=c=c.next;do{if((d.tag&t)===t){var h=d.destroy;d.destroy=void 0,h!==void 0&&lu(i,o,h)}d=d.next}while(d!==c)}}function Ja(t,i){if(i=i.updateQueue,i=i!==null?i.lastEffect:null,i!==null){var o=i=i.next;do{if((o.tag&t)===t){var c=o.create;o.destroy=c()}o=o.next}while(o!==i)}}function cu(t){var i=t.ref;if(i!==null){var o=t.stateNode;switch(t.tag){case 5:t=o;break;default:t=o}typeof i=="function"?i(t):i.current=t}}function Ap(t){var i=t.alternate;i!==null&&(t.alternate=null,Ap(i)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(i=t.stateNode,i!==null&&(delete i[Xi],delete i[Fo],delete i[Tc],delete i[Og],delete i[kg])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function bp(t){return t.tag===5||t.tag===3||t.tag===4}function Cp(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||bp(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function uu(t,i,o){var c=t.tag;if(c===5||c===6)t=t.stateNode,i?o.nodeType===8?o.parentNode.insertBefore(t,i):o.insertBefore(t,i):(o.nodeType===8?(i=o.parentNode,i.insertBefore(t,o)):(i=o,i.appendChild(t)),o=o._reactRootContainer,o!=null||i.onclick!==null||(i.onclick=Ra));else if(c!==4&&(t=t.child,t!==null))for(uu(t,i,o),t=t.sibling;t!==null;)uu(t,i,o),t=t.sibling}function du(t,i,o){var c=t.tag;if(c===5||c===6)t=t.stateNode,i?o.insertBefore(t,i):o.appendChild(t);else if(c!==4&&(t=t.child,t!==null))for(du(t,i,o),t=t.sibling;t!==null;)du(t,i,o),t=t.sibling}var Fn=null,Fi=!1;function Br(t,i,o){for(o=o.child;o!==null;)Rp(t,i,o),o=o.sibling}function Rp(t,i,o){if(He&&typeof He.onCommitFiberUnmount=="function")try{He.onCommitFiberUnmount(ie,o)}catch{}switch(o.tag){case 5:Gn||qs(o,i);case 6:var c=Fn,d=Fi;Fn=null,Br(t,i,o),Fn=c,Fi=d,Fn!==null&&(Fi?(t=Fn,o=o.stateNode,t.nodeType===8?t.parentNode.removeChild(o):t.removeChild(o)):Fn.removeChild(o.stateNode));break;case 18:Fn!==null&&(Fi?(t=Fn,o=o.stateNode,t.nodeType===8?wc(t.parentNode,o):t.nodeType===1&&wc(t,o),To(t)):wc(Fn,o.stateNode));break;case 4:c=Fn,d=Fi,Fn=o.stateNode.containerInfo,Fi=!0,Br(t,i,o),Fn=c,Fi=d;break;case 0:case 11:case 14:case 15:if(!Gn&&(c=o.updateQueue,c!==null&&(c=c.lastEffect,c!==null))){d=c=c.next;do{var h=d,E=h.destroy;h=h.tag,E!==void 0&&((h&2)!==0||(h&4)!==0)&&lu(o,i,E),d=d.next}while(d!==c)}Br(t,i,o);break;case 1:if(!Gn&&(qs(o,i),c=o.stateNode,typeof c.componentWillUnmount=="function"))try{c.props=o.memoizedProps,c.state=o.memoizedState,c.componentWillUnmount()}catch(N){mn(o,i,N)}Br(t,i,o);break;case 21:Br(t,i,o);break;case 22:o.mode&1?(Gn=(c=Gn)||o.memoizedState!==null,Br(t,i,o),Gn=c):Br(t,i,o);break;default:Br(t,i,o)}}function Pp(t){var i=t.updateQueue;if(i!==null){t.updateQueue=null;var o=t.stateNode;o===null&&(o=t.stateNode=new e_),i.forEach(function(c){var d=u_.bind(null,t,c);o.has(c)||(o.add(c),c.then(d,d))})}}function Oi(t,i){var o=i.deletions;if(o!==null)for(var c=0;c<o.length;c++){var d=o[c];try{var h=t,E=i,N=E;e:for(;N!==null;){switch(N.tag){case 5:Fn=N.stateNode,Fi=!1;break e;case 3:Fn=N.stateNode.containerInfo,Fi=!0;break e;case 4:Fn=N.stateNode.containerInfo,Fi=!0;break e}N=N.return}if(Fn===null)throw Error(n(160));Rp(h,E,d),Fn=null,Fi=!1;var H=d.alternate;H!==null&&(H.return=null),d.return=null}catch(de){mn(d,i,de)}}if(i.subtreeFlags&12854)for(i=i.child;i!==null;)Lp(i,t),i=i.sibling}function Lp(t,i){var o=t.alternate,c=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(Oi(i,t),qi(t),c&4){try{Yo(3,t,t.return),Ja(3,t)}catch(it){mn(t,t.return,it)}try{Yo(5,t,t.return)}catch(it){mn(t,t.return,it)}}break;case 1:Oi(i,t),qi(t),c&512&&o!==null&&qs(o,o.return);break;case 5:if(Oi(i,t),qi(t),c&512&&o!==null&&qs(o,o.return),t.flags&32){var d=t.stateNode;try{ye(d,"")}catch(it){mn(t,t.return,it)}}if(c&4&&(d=t.stateNode,d!=null)){var h=t.memoizedProps,E=o!==null?o.memoizedProps:h,N=t.type,H=t.updateQueue;if(t.updateQueue=null,H!==null)try{N==="input"&&h.type==="radio"&&h.name!=null&&ut(d,h),Ne(N,E);var de=Ne(N,h);for(E=0;E<H.length;E+=2){var Ae=H[E],Pe=H[E+1];Ae==="style"?_e(d,Pe):Ae==="dangerouslySetInnerHTML"?ge(d,Pe):Ae==="children"?ye(d,Pe):L(d,Ae,Pe,de)}switch(N){case"input":Ut(d,h);break;case"textarea":Se(d,h);break;case"select":var Te=d._wrapperState.wasMultiple;d._wrapperState.wasMultiple=!!h.multiple;var $e=h.value;$e!=null?Bt(d,!!h.multiple,$e,!1):Te!==!!h.multiple&&(h.defaultValue!=null?Bt(d,!!h.multiple,h.defaultValue,!0):Bt(d,!!h.multiple,h.multiple?[]:"",!1))}d[Fo]=h}catch(it){mn(t,t.return,it)}}break;case 6:if(Oi(i,t),qi(t),c&4){if(t.stateNode===null)throw Error(n(162));d=t.stateNode,h=t.memoizedProps;try{d.nodeValue=h}catch(it){mn(t,t.return,it)}}break;case 3:if(Oi(i,t),qi(t),c&4&&o!==null&&o.memoizedState.isDehydrated)try{To(i.containerInfo)}catch(it){mn(t,t.return,it)}break;case 4:Oi(i,t),qi(t);break;case 13:Oi(i,t),qi(t),d=t.child,d.flags&8192&&(h=d.memoizedState!==null,d.stateNode.isHidden=h,!h||d.alternate!==null&&d.alternate.memoizedState!==null||(pu=en())),c&4&&Pp(t);break;case 22:if(Ae=o!==null&&o.memoizedState!==null,t.mode&1?(Gn=(de=Gn)||Ae,Oi(i,t),Gn=de):Oi(i,t),qi(t),c&8192){if(de=t.memoizedState!==null,(t.stateNode.isHidden=de)&&!Ae&&(t.mode&1)!==0)for(Je=t,Ae=t.child;Ae!==null;){for(Pe=Je=Ae;Je!==null;){switch(Te=Je,$e=Te.child,Te.tag){case 0:case 11:case 14:case 15:Yo(4,Te,Te.return);break;case 1:qs(Te,Te.return);var et=Te.stateNode;if(typeof et.componentWillUnmount=="function"){c=Te,o=Te.return;try{i=c,et.props=i.memoizedProps,et.state=i.memoizedState,et.componentWillUnmount()}catch(it){mn(c,o,it)}}break;case 5:qs(Te,Te.return);break;case 22:if(Te.memoizedState!==null){Np(Pe);continue}}$e!==null?($e.return=Te,Je=$e):Np(Pe)}Ae=Ae.sibling}e:for(Ae=null,Pe=t;;){if(Pe.tag===5){if(Ae===null){Ae=Pe;try{d=Pe.stateNode,de?(h=d.style,typeof h.setProperty=="function"?h.setProperty("display","none","important"):h.display="none"):(N=Pe.stateNode,H=Pe.memoizedProps.style,E=H!=null&&H.hasOwnProperty("display")?H.display:null,N.style.display=pe("display",E))}catch(it){mn(t,t.return,it)}}}else if(Pe.tag===6){if(Ae===null)try{Pe.stateNode.nodeValue=de?"":Pe.memoizedProps}catch(it){mn(t,t.return,it)}}else if((Pe.tag!==22&&Pe.tag!==23||Pe.memoizedState===null||Pe===t)&&Pe.child!==null){Pe.child.return=Pe,Pe=Pe.child;continue}if(Pe===t)break e;for(;Pe.sibling===null;){if(Pe.return===null||Pe.return===t)break e;Ae===Pe&&(Ae=null),Pe=Pe.return}Ae===Pe&&(Ae=null),Pe.sibling.return=Pe.return,Pe=Pe.sibling}}break;case 19:Oi(i,t),qi(t),c&4&&Pp(t);break;case 21:break;default:Oi(i,t),qi(t)}}function qi(t){var i=t.flags;if(i&2){try{e:{for(var o=t.return;o!==null;){if(bp(o)){var c=o;break e}o=o.return}throw Error(n(160))}switch(c.tag){case 5:var d=c.stateNode;c.flags&32&&(ye(d,""),c.flags&=-33);var h=Cp(t);du(t,h,d);break;case 3:case 4:var E=c.stateNode.containerInfo,N=Cp(t);uu(t,N,E);break;default:throw Error(n(161))}}catch(H){mn(t,t.return,H)}t.flags&=-3}i&4096&&(t.flags&=-4097)}function n_(t,i,o){Je=t,Dp(t)}function Dp(t,i,o){for(var c=(t.mode&1)!==0;Je!==null;){var d=Je,h=d.child;if(d.tag===22&&c){var E=d.memoizedState!==null||Za;if(!E){var N=d.alternate,H=N!==null&&N.memoizedState!==null||Gn;N=Za;var de=Gn;if(Za=E,(Gn=H)&&!de)for(Je=d;Je!==null;)E=Je,H=E.child,E.tag===22&&E.memoizedState!==null?Up(d):H!==null?(H.return=E,Je=H):Up(d);for(;h!==null;)Je=h,Dp(h),h=h.sibling;Je=d,Za=N,Gn=de}Ip(t)}else(d.subtreeFlags&8772)!==0&&h!==null?(h.return=d,Je=h):Ip(t)}}function Ip(t){for(;Je!==null;){var i=Je;if((i.flags&8772)!==0){var o=i.alternate;try{if((i.flags&8772)!==0)switch(i.tag){case 0:case 11:case 15:Gn||Ja(5,i);break;case 1:var c=i.stateNode;if(i.flags&4&&!Gn)if(o===null)c.componentDidMount();else{var d=i.elementType===i.type?o.memoizedProps:Ui(i.type,o.memoizedProps);c.componentDidUpdate(d,o.memoizedState,c.__reactInternalSnapshotBeforeUpdate)}var h=i.updateQueue;h!==null&&Nh(i,h,c);break;case 3:var E=i.updateQueue;if(E!==null){if(o=null,i.child!==null)switch(i.child.tag){case 5:o=i.child.stateNode;break;case 1:o=i.child.stateNode}Nh(i,E,o)}break;case 5:var N=i.stateNode;if(o===null&&i.flags&4){o=N;var H=i.memoizedProps;switch(i.type){case"button":case"input":case"select":case"textarea":H.autoFocus&&o.focus();break;case"img":H.src&&(o.src=H.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(i.memoizedState===null){var de=i.alternate;if(de!==null){var Ae=de.memoizedState;if(Ae!==null){var Pe=Ae.dehydrated;Pe!==null&&To(Pe)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(n(163))}Gn||i.flags&512&&cu(i)}catch(Te){mn(i,i.return,Te)}}if(i===t){Je=null;break}if(o=i.sibling,o!==null){o.return=i.return,Je=o;break}Je=i.return}}function Np(t){for(;Je!==null;){var i=Je;if(i===t){Je=null;break}var o=i.sibling;if(o!==null){o.return=i.return,Je=o;break}Je=i.return}}function Up(t){for(;Je!==null;){var i=Je;try{switch(i.tag){case 0:case 11:case 15:var o=i.return;try{Ja(4,i)}catch(H){mn(i,o,H)}break;case 1:var c=i.stateNode;if(typeof c.componentDidMount=="function"){var d=i.return;try{c.componentDidMount()}catch(H){mn(i,d,H)}}var h=i.return;try{cu(i)}catch(H){mn(i,h,H)}break;case 5:var E=i.return;try{cu(i)}catch(H){mn(i,E,H)}}}catch(H){mn(i,i.return,H)}if(i===t){Je=null;break}var N=i.sibling;if(N!==null){N.return=i.return,Je=N;break}Je=i.return}}var i_=Math.ceil,Qa=P.ReactCurrentDispatcher,fu=P.ReactCurrentOwner,Ai=P.ReactCurrentBatchConfig,jt=0,Ln=null,Mn=null,On=0,gi=0,$s=Nr(0),An=0,qo=null,us=0,el=0,hu=0,$o=null,ai=null,pu=0,Ks=1/0,pr=null,tl=!1,mu=null,zr=null,nl=!1,Hr=null,il=0,Ko=0,gu=null,rl=-1,sl=0;function Qn(){return(jt&6)!==0?en():rl!==-1?rl:rl=en()}function Vr(t){return(t.mode&1)===0?1:(jt&2)!==0&&On!==0?On&-On:zg.transition!==null?(sl===0&&(sl=qe()),sl):(t=It,t!==0||(t=window.event,t=t===void 0?16:Of(t.type)),t)}function ki(t,i,o,c){if(50<Ko)throw Ko=0,gu=null,Error(n(185));Pt(t,o,c),((jt&2)===0||t!==Ln)&&(t===Ln&&((jt&2)===0&&(el|=o),An===4&&Gr(t,On)),li(t,c),o===1&&jt===0&&(i.mode&1)===0&&(Ks=en()+500,Ia&&Fr()))}function li(t,i){var o=t.callbackNode;Kt(t,i);var c=tn(t,t===Ln?On:0);if(c===0)o!==null&&ti(o),t.callbackNode=null,t.callbackPriority=0;else if(i=c&-c,t.callbackPriority!==i){if(o!=null&&ti(o),i===1)t.tag===0?Bg(Op.bind(null,t)):Mh(Op.bind(null,t)),Ug(function(){(jt&6)===0&&Fr()}),o=null;else{switch(or(c)){case 1:o=Pi;break;case 4:o=A;break;case 16:o=Y;break;case 536870912:o=re;break;default:o=Y}o=Xp(o,Fp.bind(null,t))}t.callbackPriority=i,t.callbackNode=o}}function Fp(t,i){if(rl=-1,sl=0,(jt&6)!==0)throw Error(n(327));var o=t.callbackNode;if(Zs()&&t.callbackNode!==o)return null;var c=tn(t,t===Ln?On:0);if(c===0)return null;if((c&30)!==0||(c&t.expiredLanes)!==0||i)i=ol(t,c);else{i=c;var d=jt;jt|=2;var h=Bp();(Ln!==t||On!==i)&&(pr=null,Ks=en()+500,fs(t,i));do try{o_();break}catch(N){kp(t,N)}while(!0);Nc(),Qa.current=h,jt=d,Mn!==null?i=0:(Ln=null,On=0,i=An)}if(i!==0){if(i===2&&(d=Sn(t),d!==0&&(c=d,i=_u(t,d))),i===1)throw o=qo,fs(t,0),Gr(t,c),li(t,en()),o;if(i===6)Gr(t,c);else{if(d=t.current.alternate,(c&30)===0&&!r_(d)&&(i=ol(t,c),i===2&&(h=Sn(t),h!==0&&(c=h,i=_u(t,h))),i===1))throw o=qo,fs(t,0),Gr(t,c),li(t,en()),o;switch(t.finishedWork=d,t.finishedLanes=c,i){case 0:case 1:throw Error(n(345));case 2:hs(t,ai,pr);break;case 3:if(Gr(t,c),(c&130023424)===c&&(i=pu+500-en(),10<i)){if(tn(t,0)!==0)break;if(d=t.suspendedLanes,(d&c)!==c){Qn(),t.pingedLanes|=t.suspendedLanes&d;break}t.timeoutHandle=Ec(hs.bind(null,t,ai,pr),i);break}hs(t,ai,pr);break;case 4:if(Gr(t,c),(c&4194240)===c)break;for(i=t.eventTimes,d=-1;0<c;){var E=31-Be(c);h=1<<E,E=i[E],E>d&&(d=E),c&=~h}if(c=d,c=en()-c,c=(120>c?120:480>c?480:1080>c?1080:1920>c?1920:3e3>c?3e3:4320>c?4320:1960*i_(c/1960))-c,10<c){t.timeoutHandle=Ec(hs.bind(null,t,ai,pr),c);break}hs(t,ai,pr);break;case 5:hs(t,ai,pr);break;default:throw Error(n(329))}}}return li(t,en()),t.callbackNode===o?Fp.bind(null,t):null}function _u(t,i){var o=$o;return t.current.memoizedState.isDehydrated&&(fs(t,i).flags|=256),t=ol(t,i),t!==2&&(i=ai,ai=o,i!==null&&vu(i)),t}function vu(t){ai===null?ai=t:ai.push.apply(ai,t)}function r_(t){for(var i=t;;){if(i.flags&16384){var o=i.updateQueue;if(o!==null&&(o=o.stores,o!==null))for(var c=0;c<o.length;c++){var d=o[c],h=d.getSnapshot;d=d.value;try{if(!Ii(h(),d))return!1}catch{return!1}}}if(o=i.child,i.subtreeFlags&16384&&o!==null)o.return=i,i=o;else{if(i===t)break;for(;i.sibling===null;){if(i.return===null||i.return===t)return!0;i=i.return}i.sibling.return=i.return,i=i.sibling}}return!0}function Gr(t,i){for(i&=~hu,i&=~el,t.suspendedLanes|=i,t.pingedLanes&=~i,t=t.expirationTimes;0<i;){var o=31-Be(i),c=1<<o;t[o]=-1,i&=~c}}function Op(t){if((jt&6)!==0)throw Error(n(327));Zs();var i=tn(t,0);if((i&1)===0)return li(t,en()),null;var o=ol(t,i);if(t.tag!==0&&o===2){var c=Sn(t);c!==0&&(i=c,o=_u(t,c))}if(o===1)throw o=qo,fs(t,0),Gr(t,i),li(t,en()),o;if(o===6)throw Error(n(345));return t.finishedWork=t.current.alternate,t.finishedLanes=i,hs(t,ai,pr),li(t,en()),null}function xu(t,i){var o=jt;jt|=1;try{return t(i)}finally{jt=o,jt===0&&(Ks=en()+500,Ia&&Fr())}}function ds(t){Hr!==null&&Hr.tag===0&&(jt&6)===0&&Zs();var i=jt;jt|=1;var o=Ai.transition,c=It;try{if(Ai.transition=null,It=1,t)return t()}finally{It=c,Ai.transition=o,jt=i,(jt&6)===0&&Fr()}}function yu(){gi=$s.current,on($s)}function fs(t,i){t.finishedWork=null,t.finishedLanes=0;var o=t.timeoutHandle;if(o!==-1&&(t.timeoutHandle=-1,Ng(o)),Mn!==null)for(o=Mn.return;o!==null;){var c=o;switch(Rc(c),c.tag){case 1:c=c.type.childContextTypes,c!=null&&La();break;case 3:js(),on(ri),on(zn),Vc();break;case 5:zc(c);break;case 4:js();break;case 13:on(fn);break;case 19:on(fn);break;case 10:Uc(c.type._context);break;case 22:case 23:yu()}o=o.return}if(Ln=t,Mn=t=Wr(t.current,null),On=gi=i,An=0,qo=null,hu=el=us=0,ai=$o=null,as!==null){for(i=0;i<as.length;i++)if(o=as[i],c=o.interleaved,c!==null){o.interleaved=null;var d=c.next,h=o.pending;if(h!==null){var E=h.next;h.next=d,c.next=E}o.pending=c}as=null}return t}function kp(t,i){do{var o=Mn;try{if(Nc(),Ga.current=Ya,Wa){for(var c=hn.memoizedState;c!==null;){var d=c.queue;d!==null&&(d.pending=null),c=c.next}Wa=!1}if(cs=0,Pn=Tn=hn=null,Vo=!1,Go=0,fu.current=null,o===null||o.return===null){An=1,qo=i,Mn=null;break}e:{var h=t,E=o.return,N=o,H=i;if(i=On,N.flags|=32768,H!==null&&typeof H=="object"&&typeof H.then=="function"){var de=H,Ae=N,Pe=Ae.tag;if((Ae.mode&1)===0&&(Pe===0||Pe===11||Pe===15)){var Te=Ae.alternate;Te?(Ae.updateQueue=Te.updateQueue,Ae.memoizedState=Te.memoizedState,Ae.lanes=Te.lanes):(Ae.updateQueue=null,Ae.memoizedState=null)}var $e=cp(E);if($e!==null){$e.flags&=-257,up($e,E,N,h,i),$e.mode&1&&lp(h,de,i),i=$e,H=de;var et=i.updateQueue;if(et===null){var it=new Set;it.add(H),i.updateQueue=it}else et.add(H);break e}else{if((i&1)===0){lp(h,de,i),Su();break e}H=Error(n(426))}}else if(cn&&N.mode&1){var xn=cp(E);if(xn!==null){(xn.flags&65536)===0&&(xn.flags|=256),up(xn,E,N,h,i),Dc(Ys(H,N));break e}}h=H=Ys(H,N),An!==4&&(An=2),$o===null?$o=[h]:$o.push(h),h=E;do{switch(h.tag){case 3:h.flags|=65536,i&=-i,h.lanes|=i;var ee=op(h,H,i);Ih(h,ee);break e;case 1:N=H;var X=h.type,se=h.stateNode;if((h.flags&128)===0&&(typeof X.getDerivedStateFromError=="function"||se!==null&&typeof se.componentDidCatch=="function"&&(zr===null||!zr.has(se)))){h.flags|=65536,i&=-i,h.lanes|=i;var Oe=ap(h,N,i);Ih(h,Oe);break e}}h=h.return}while(h!==null)}Hp(o)}catch(ot){i=ot,Mn===o&&o!==null&&(Mn=o=o.return);continue}break}while(!0)}function Bp(){var t=Qa.current;return Qa.current=Ya,t===null?Ya:t}function Su(){(An===0||An===3||An===2)&&(An=4),Ln===null||(us&268435455)===0&&(el&268435455)===0||Gr(Ln,On)}function ol(t,i){var o=jt;jt|=2;var c=Bp();(Ln!==t||On!==i)&&(pr=null,fs(t,i));do try{s_();break}catch(d){kp(t,d)}while(!0);if(Nc(),jt=o,Qa.current=c,Mn!==null)throw Error(n(261));return Ln=null,On=0,An}function s_(){for(;Mn!==null;)zp(Mn)}function o_(){for(;Mn!==null&&!Tr();)zp(Mn)}function zp(t){var i=Wp(t.alternate,t,gi);t.memoizedProps=t.pendingProps,i===null?Hp(t):Mn=i,fu.current=null}function Hp(t){var i=t;do{var o=i.alternate;if(t=i.return,(i.flags&32768)===0){if(o=Jg(o,i,gi),o!==null){Mn=o;return}}else{if(o=Qg(o,i),o!==null){o.flags&=32767,Mn=o;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{An=6,Mn=null;return}}if(i=i.sibling,i!==null){Mn=i;return}Mn=i=t}while(i!==null);An===0&&(An=5)}function hs(t,i,o){var c=It,d=Ai.transition;try{Ai.transition=null,It=1,a_(t,i,o,c)}finally{Ai.transition=d,It=c}return null}function a_(t,i,o,c){do Zs();while(Hr!==null);if((jt&6)!==0)throw Error(n(327));o=t.finishedWork;var d=t.finishedLanes;if(o===null)return null;if(t.finishedWork=null,t.finishedLanes=0,o===t.current)throw Error(n(177));t.callbackNode=null,t.callbackPriority=0;var h=o.lanes|o.childLanes;if(ni(t,h),t===Ln&&(Mn=Ln=null,On=0),(o.subtreeFlags&2064)===0&&(o.flags&2064)===0||nl||(nl=!0,Xp(Y,function(){return Zs(),null})),h=(o.flags&15990)!==0,(o.subtreeFlags&15990)!==0||h){h=Ai.transition,Ai.transition=null;var E=It;It=1;var N=jt;jt|=4,fu.current=null,t_(t,o),Lp(o,t),bg(Sc),_a=!!yc,Sc=yc=null,t.current=o,n_(o),Ar(),jt=N,It=E,Ai.transition=h}else t.current=o;if(nl&&(nl=!1,Hr=t,il=d),h=t.pendingLanes,h===0&&(zr=null),Ze(o.stateNode),li(t,en()),i!==null)for(c=t.onRecoverableError,o=0;o<i.length;o++)d=i[o],c(d.value,{componentStack:d.stack,digest:d.digest});if(tl)throw tl=!1,t=mu,mu=null,t;return(il&1)!==0&&t.tag!==0&&Zs(),h=t.pendingLanes,(h&1)!==0?t===gu?Ko++:(Ko=0,gu=t):Ko=0,Fr(),null}function Zs(){if(Hr!==null){var t=or(il),i=Ai.transition,o=It;try{if(Ai.transition=null,It=16>t?16:t,Hr===null)var c=!1;else{if(t=Hr,Hr=null,il=0,(jt&6)!==0)throw Error(n(331));var d=jt;for(jt|=4,Je=t.current;Je!==null;){var h=Je,E=h.child;if((Je.flags&16)!==0){var N=h.deletions;if(N!==null){for(var H=0;H<N.length;H++){var de=N[H];for(Je=de;Je!==null;){var Ae=Je;switch(Ae.tag){case 0:case 11:case 15:Yo(8,Ae,h)}var Pe=Ae.child;if(Pe!==null)Pe.return=Ae,Je=Pe;else for(;Je!==null;){Ae=Je;var Te=Ae.sibling,$e=Ae.return;if(Ap(Ae),Ae===de){Je=null;break}if(Te!==null){Te.return=$e,Je=Te;break}Je=$e}}}var et=h.alternate;if(et!==null){var it=et.child;if(it!==null){et.child=null;do{var xn=it.sibling;it.sibling=null,it=xn}while(it!==null)}}Je=h}}if((h.subtreeFlags&2064)!==0&&E!==null)E.return=h,Je=E;else e:for(;Je!==null;){if(h=Je,(h.flags&2048)!==0)switch(h.tag){case 0:case 11:case 15:Yo(9,h,h.return)}var ee=h.sibling;if(ee!==null){ee.return=h.return,Je=ee;break e}Je=h.return}}var X=t.current;for(Je=X;Je!==null;){E=Je;var se=E.child;if((E.subtreeFlags&2064)!==0&&se!==null)se.return=E,Je=se;else e:for(E=X;Je!==null;){if(N=Je,(N.flags&2048)!==0)try{switch(N.tag){case 0:case 11:case 15:Ja(9,N)}}catch(ot){mn(N,N.return,ot)}if(N===E){Je=null;break e}var Oe=N.sibling;if(Oe!==null){Oe.return=N.return,Je=Oe;break e}Je=N.return}}if(jt=d,Fr(),He&&typeof He.onPostCommitFiberRoot=="function")try{He.onPostCommitFiberRoot(ie,t)}catch{}c=!0}return c}finally{It=o,Ai.transition=i}}return!1}function Vp(t,i,o){i=Ys(o,i),i=op(t,i,1),t=kr(t,i,1),i=Qn(),t!==null&&(Pt(t,1,i),li(t,i))}function mn(t,i,o){if(t.tag===3)Vp(t,t,o);else for(;i!==null;){if(i.tag===3){Vp(i,t,o);break}else if(i.tag===1){var c=i.stateNode;if(typeof i.type.getDerivedStateFromError=="function"||typeof c.componentDidCatch=="function"&&(zr===null||!zr.has(c))){t=Ys(o,t),t=ap(i,t,1),i=kr(i,t,1),t=Qn(),i!==null&&(Pt(i,1,t),li(i,t));break}}i=i.return}}function l_(t,i,o){var c=t.pingCache;c!==null&&c.delete(i),i=Qn(),t.pingedLanes|=t.suspendedLanes&o,Ln===t&&(On&o)===o&&(An===4||An===3&&(On&130023424)===On&&500>en()-pu?fs(t,0):hu|=o),li(t,i)}function Gp(t,i){i===0&&((t.mode&1)===0?i=1:(i=st,st<<=1,(st&130023424)===0&&(st=4194304)));var o=Qn();t=dr(t,i),t!==null&&(Pt(t,i,o),li(t,o))}function c_(t){var i=t.memoizedState,o=0;i!==null&&(o=i.retryLane),Gp(t,o)}function u_(t,i){var o=0;switch(t.tag){case 13:var c=t.stateNode,d=t.memoizedState;d!==null&&(o=d.retryLane);break;case 19:c=t.stateNode;break;default:throw Error(n(314))}c!==null&&c.delete(i),Gp(t,o)}var Wp;Wp=function(t,i,o){if(t!==null)if(t.memoizedProps!==i.pendingProps||ri.current)oi=!0;else{if((t.lanes&o)===0&&(i.flags&128)===0)return oi=!1,Zg(t,i,o);oi=(t.flags&131072)!==0}else oi=!1,cn&&(i.flags&1048576)!==0&&Eh(i,Ua,i.index);switch(i.lanes=0,i.tag){case 2:var c=i.type;Ka(t,i),t=i.pendingProps;var d=Bs(i,zn.current);Xs(i,o),d=Xc(null,i,c,t,d,o);var h=jc();return i.flags|=1,typeof d=="object"&&d!==null&&typeof d.render=="function"&&d.$$typeof===void 0?(i.tag=1,i.memoizedState=null,i.updateQueue=null,si(c)?(h=!0,Da(i)):h=!1,i.memoizedState=d.state!==null&&d.state!==void 0?d.state:null,kc(i),d.updater=qa,i.stateNode=d,d._reactInternals=i,Jc(i,c,t,o),i=nu(null,i,c,!0,h,o)):(i.tag=0,cn&&h&&Cc(i),Jn(null,i,d,o),i=i.child),i;case 16:c=i.elementType;e:{switch(Ka(t,i),t=i.pendingProps,d=c._init,c=d(c._payload),i.type=c,d=i.tag=f_(c),t=Ui(c,t),d){case 0:i=tu(null,i,c,t,o);break e;case 1:i=gp(null,i,c,t,o);break e;case 11:i=dp(null,i,c,t,o);break e;case 14:i=fp(null,i,c,Ui(c.type,t),o);break e}throw Error(n(306,c,""))}return i;case 0:return c=i.type,d=i.pendingProps,d=i.elementType===c?d:Ui(c,d),tu(t,i,c,d,o);case 1:return c=i.type,d=i.pendingProps,d=i.elementType===c?d:Ui(c,d),gp(t,i,c,d,o);case 3:e:{if(_p(i),t===null)throw Error(n(387));c=i.pendingProps,h=i.memoizedState,d=h.element,Dh(t,i),Ha(i,c,null,o);var E=i.memoizedState;if(c=E.element,h.isDehydrated)if(h={element:c,isDehydrated:!1,cache:E.cache,pendingSuspenseBoundaries:E.pendingSuspenseBoundaries,transitions:E.transitions},i.updateQueue.baseState=h,i.memoizedState=h,i.flags&256){d=Ys(Error(n(423)),i),i=vp(t,i,c,o,d);break e}else if(c!==d){d=Ys(Error(n(424)),i),i=vp(t,i,c,o,d);break e}else for(mi=Ir(i.stateNode.containerInfo.firstChild),pi=i,cn=!0,Ni=null,o=Ph(i,null,c,o),i.child=o;o;)o.flags=o.flags&-3|4096,o=o.sibling;else{if(Vs(),c===d){i=hr(t,i,o);break e}Jn(t,i,c,o)}i=i.child}return i;case 5:return Uh(i),t===null&&Lc(i),c=i.type,d=i.pendingProps,h=t!==null?t.memoizedProps:null,E=d.children,Mc(c,d)?E=null:h!==null&&Mc(c,h)&&(i.flags|=32),mp(t,i),Jn(t,i,E,o),i.child;case 6:return t===null&&Lc(i),null;case 13:return xp(t,i,o);case 4:return Bc(i,i.stateNode.containerInfo),c=i.pendingProps,t===null?i.child=Gs(i,null,c,o):Jn(t,i,c,o),i.child;case 11:return c=i.type,d=i.pendingProps,d=i.elementType===c?d:Ui(c,d),dp(t,i,c,d,o);case 7:return Jn(t,i,i.pendingProps,o),i.child;case 8:return Jn(t,i,i.pendingProps.children,o),i.child;case 12:return Jn(t,i,i.pendingProps.children,o),i.child;case 10:e:{if(c=i.type._context,d=i.pendingProps,h=i.memoizedProps,E=d.value,nn(ka,c._currentValue),c._currentValue=E,h!==null)if(Ii(h.value,E)){if(h.children===d.children&&!ri.current){i=hr(t,i,o);break e}}else for(h=i.child,h!==null&&(h.return=i);h!==null;){var N=h.dependencies;if(N!==null){E=h.child;for(var H=N.firstContext;H!==null;){if(H.context===c){if(h.tag===1){H=fr(-1,o&-o),H.tag=2;var de=h.updateQueue;if(de!==null){de=de.shared;var Ae=de.pending;Ae===null?H.next=H:(H.next=Ae.next,Ae.next=H),de.pending=H}}h.lanes|=o,H=h.alternate,H!==null&&(H.lanes|=o),Fc(h.return,o,i),N.lanes|=o;break}H=H.next}}else if(h.tag===10)E=h.type===i.type?null:h.child;else if(h.tag===18){if(E=h.return,E===null)throw Error(n(341));E.lanes|=o,N=E.alternate,N!==null&&(N.lanes|=o),Fc(E,o,i),E=h.sibling}else E=h.child;if(E!==null)E.return=h;else for(E=h;E!==null;){if(E===i){E=null;break}if(h=E.sibling,h!==null){h.return=E.return,E=h;break}E=E.return}h=E}Jn(t,i,d.children,o),i=i.child}return i;case 9:return d=i.type,c=i.pendingProps.children,Xs(i,o),d=wi(d),c=c(d),i.flags|=1,Jn(t,i,c,o),i.child;case 14:return c=i.type,d=Ui(c,i.pendingProps),d=Ui(c.type,d),fp(t,i,c,d,o);case 15:return hp(t,i,i.type,i.pendingProps,o);case 17:return c=i.type,d=i.pendingProps,d=i.elementType===c?d:Ui(c,d),Ka(t,i),i.tag=1,si(c)?(t=!0,Da(i)):t=!1,Xs(i,o),rp(i,c,d),Jc(i,c,d,o),nu(null,i,c,!0,t,o);case 19:return Sp(t,i,o);case 22:return pp(t,i,o)}throw Error(n(156,i.tag))};function Xp(t,i){return Zn(t,i)}function d_(t,i,o,c){this.tag=t,this.key=o,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=i,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=c,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function bi(t,i,o,c){return new d_(t,i,o,c)}function Mu(t){return t=t.prototype,!(!t||!t.isReactComponent)}function f_(t){if(typeof t=="function")return Mu(t)?1:0;if(t!=null){if(t=t.$$typeof,t===q)return 11;if(t===W)return 14}return 2}function Wr(t,i){var o=t.alternate;return o===null?(o=bi(t.tag,i,t.key,t.mode),o.elementType=t.elementType,o.type=t.type,o.stateNode=t.stateNode,o.alternate=t,t.alternate=o):(o.pendingProps=i,o.type=t.type,o.flags=0,o.subtreeFlags=0,o.deletions=null),o.flags=t.flags&14680064,o.childLanes=t.childLanes,o.lanes=t.lanes,o.child=t.child,o.memoizedProps=t.memoizedProps,o.memoizedState=t.memoizedState,o.updateQueue=t.updateQueue,i=t.dependencies,o.dependencies=i===null?null:{lanes:i.lanes,firstContext:i.firstContext},o.sibling=t.sibling,o.index=t.index,o.ref=t.ref,o}function al(t,i,o,c,d,h){var E=2;if(c=t,typeof t=="function")Mu(t)&&(E=1);else if(typeof t=="string")E=5;else e:switch(t){case k:return ps(o.children,d,h,i);case w:E=8,d|=8;break;case I:return t=bi(12,o,i,d|2),t.elementType=I,t.lanes=h,t;case le:return t=bi(13,o,i,d),t.elementType=le,t.lanes=h,t;case me:return t=bi(19,o,i,d),t.elementType=me,t.lanes=h,t;case $:return ll(o,d,h,i);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case j:E=10;break e;case O:E=9;break e;case q:E=11;break e;case W:E=14;break e;case te:E=16,c=null;break e}throw Error(n(130,t==null?t:typeof t,""))}return i=bi(E,o,i,d),i.elementType=t,i.type=c,i.lanes=h,i}function ps(t,i,o,c){return t=bi(7,t,c,i),t.lanes=o,t}function ll(t,i,o,c){return t=bi(22,t,c,i),t.elementType=$,t.lanes=o,t.stateNode={isHidden:!1},t}function Eu(t,i,o){return t=bi(6,t,null,i),t.lanes=o,t}function wu(t,i,o){return i=bi(4,t.children!==null?t.children:[],t.key,i),i.lanes=o,i.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},i}function h_(t,i,o,c,d){this.tag=i,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Un(0),this.expirationTimes=Un(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Un(0),this.identifierPrefix=c,this.onRecoverableError=d,this.mutableSourceEagerHydrationData=null}function Tu(t,i,o,c,d,h,E,N,H){return t=new h_(t,i,o,N,H),i===1?(i=1,h===!0&&(i|=8)):i=0,h=bi(3,null,null,i),t.current=h,h.stateNode=t,h.memoizedState={element:c,isDehydrated:o,cache:null,transitions:null,pendingSuspenseBoundaries:null},kc(h),t}function p_(t,i,o){var c=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:D,key:c==null?null:""+c,children:t,containerInfo:i,implementation:o}}function jp(t){if(!t)return Ur;t=t._reactInternals;e:{if(Tt(t)!==t||t.tag!==1)throw Error(n(170));var i=t;do{switch(i.tag){case 3:i=i.stateNode.context;break e;case 1:if(si(i.type)){i=i.stateNode.__reactInternalMemoizedMergedChildContext;break e}}i=i.return}while(i!==null);throw Error(n(171))}if(t.tag===1){var o=t.type;if(si(o))return yh(t,o,i)}return i}function Yp(t,i,o,c,d,h,E,N,H){return t=Tu(o,c,!0,t,d,h,E,N,H),t.context=jp(null),o=t.current,c=Qn(),d=Vr(o),h=fr(c,d),h.callback=i??null,kr(o,h,d),t.current.lanes=d,Pt(t,d,c),li(t,c),t}function cl(t,i,o,c){var d=i.current,h=Qn(),E=Vr(d);return o=jp(o),i.context===null?i.context=o:i.pendingContext=o,i=fr(h,E),i.payload={element:t},c=c===void 0?null:c,c!==null&&(i.callback=c),t=kr(d,i,E),t!==null&&(ki(t,d,E,h),za(t,d,E)),E}function ul(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function qp(t,i){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var o=t.retryLane;t.retryLane=o!==0&&o<i?o:i}}function Au(t,i){qp(t,i),(t=t.alternate)&&qp(t,i)}function m_(){return null}var $p=typeof reportError=="function"?reportError:function(t){console.error(t)};function bu(t){this._internalRoot=t}dl.prototype.render=bu.prototype.render=function(t){var i=this._internalRoot;if(i===null)throw Error(n(409));cl(t,i,null,null)},dl.prototype.unmount=bu.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var i=t.containerInfo;ds(function(){cl(null,t,null,null)}),i[ar]=null}};function dl(t){this._internalRoot=t}dl.prototype.unstable_scheduleHydration=function(t){if(t){var i=Zt();t={blockedOn:null,target:t,priority:i};for(var o=0;o<Pr.length&&i!==0&&i<Pr[o].priority;o++);Pr.splice(o,0,t),o===0&&Uf(t)}};function Cu(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function fl(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function Kp(){}function g_(t,i,o,c,d){if(d){if(typeof c=="function"){var h=c;c=function(){var de=ul(E);h.call(de)}}var E=Yp(i,c,t,0,null,!1,!1,"",Kp);return t._reactRootContainer=E,t[ar]=E.current,No(t.nodeType===8?t.parentNode:t),ds(),E}for(;d=t.lastChild;)t.removeChild(d);if(typeof c=="function"){var N=c;c=function(){var de=ul(H);N.call(de)}}var H=Tu(t,0,!1,null,null,!1,!1,"",Kp);return t._reactRootContainer=H,t[ar]=H.current,No(t.nodeType===8?t.parentNode:t),ds(function(){cl(i,H,o,c)}),H}function hl(t,i,o,c,d){var h=o._reactRootContainer;if(h){var E=h;if(typeof d=="function"){var N=d;d=function(){var H=ul(E);N.call(H)}}cl(i,E,t,d)}else E=g_(o,i,t,d,c);return ul(E)}$t=function(t){switch(t.tag){case 3:var i=t.stateNode;if(i.current.memoizedState.isDehydrated){var o=Wt(i.pendingLanes);o!==0&&(ii(i,o|1),li(i,en()),(jt&6)===0&&(Ks=en()+500,Fr()))}break;case 13:ds(function(){var c=dr(t,1);if(c!==null){var d=Qn();ki(c,t,1,d)}}),Au(t,1)}},rn=function(t){if(t.tag===13){var i=dr(t,134217728);if(i!==null){var o=Qn();ki(i,t,134217728,o)}Au(t,134217728)}},Li=function(t){if(t.tag===13){var i=Vr(t),o=dr(t,i);if(o!==null){var c=Qn();ki(o,t,i,c)}Au(t,i)}},Zt=function(){return It},Di=function(t,i){var o=It;try{return It=t,i()}finally{It=o}},ft=function(t,i,o){switch(i){case"input":if(Ut(t,o),i=o.name,o.type==="radio"&&i!=null){for(o=t;o.parentNode;)o=o.parentNode;for(o=o.querySelectorAll("input[name="+JSON.stringify(""+i)+'][type="radio"]'),i=0;i<o.length;i++){var c=o[i];if(c!==t&&c.form===t.form){var d=Pa(c);if(!d)throw Error(n(90));Vt(c),Ut(c,d)}}}break;case"textarea":Se(t,o);break;case"select":i=o.value,i!=null&&Bt(t,!!o.multiple,i,!1)}},Ue=xu,Me=ds;var __={usingClientEntryPoint:!1,Events:[Oo,Os,Pa,ve,je,xu]},Zo={findFiberByHostInstance:is,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},v_={bundleType:Zo.bundleType,version:Zo.version,rendererPackageName:Zo.rendererPackageName,rendererConfig:Zo.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:P.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=dn(t),t===null?null:t.stateNode},findFiberByHostInstance:Zo.findFiberByHostInstance||m_,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var pl=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!pl.isDisabled&&pl.supportsFiber)try{ie=pl.inject(v_),He=pl}catch{}}return ci.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=__,ci.createPortal=function(t,i){var o=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Cu(i))throw Error(n(200));return p_(t,i,null,o)},ci.createRoot=function(t,i){if(!Cu(t))throw Error(n(299));var o=!1,c="",d=$p;return i!=null&&(i.unstable_strictMode===!0&&(o=!0),i.identifierPrefix!==void 0&&(c=i.identifierPrefix),i.onRecoverableError!==void 0&&(d=i.onRecoverableError)),i=Tu(t,1,!1,null,null,o,!1,c,d),t[ar]=i.current,No(t.nodeType===8?t.parentNode:t),new bu(i)},ci.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var i=t._reactInternals;if(i===void 0)throw typeof t.render=="function"?Error(n(188)):(t=Object.keys(t).join(","),Error(n(268,t)));return t=dn(i),t=t===null?null:t.stateNode,t},ci.flushSync=function(t){return ds(t)},ci.hydrate=function(t,i,o){if(!fl(i))throw Error(n(200));return hl(null,t,i,!0,o)},ci.hydrateRoot=function(t,i,o){if(!Cu(t))throw Error(n(405));var c=o!=null&&o.hydratedSources||null,d=!1,h="",E=$p;if(o!=null&&(o.unstable_strictMode===!0&&(d=!0),o.identifierPrefix!==void 0&&(h=o.identifierPrefix),o.onRecoverableError!==void 0&&(E=o.onRecoverableError)),i=Yp(i,null,t,1,o??null,d,!1,h,E),t[ar]=i.current,No(t),c)for(t=0;t<c.length;t++)o=c[t],d=o._getVersion,d=d(o._source),i.mutableSourceEagerHydrationData==null?i.mutableSourceEagerHydrationData=[o,d]:i.mutableSourceEagerHydrationData.push(o,d);return new dl(i)},ci.render=function(t,i,o){if(!fl(i))throw Error(n(200));return hl(null,t,i,!1,o)},ci.unmountComponentAtNode=function(t){if(!fl(t))throw Error(n(40));return t._reactRootContainer?(ds(function(){hl(null,null,t,!1,function(){t._reactRootContainer=null,t[ar]=null})}),!0):!1},ci.unstable_batchedUpdates=xu,ci.unstable_renderSubtreeIntoContainer=function(t,i,o,c){if(!fl(o))throw Error(n(200));if(t==null||t._reactInternals===void 0)throw Error(n(38));return hl(t,i,o,!1,c)},ci.version="18.3.1-next-f1338f8080-20240426",ci}var rm;function A_(){if(rm)return Lu.exports;rm=1;function r(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(r)}catch(e){console.error(e)}}return r(),Lu.exports=T_(),Lu.exports}var sm;function b_(){if(sm)return ml;sm=1;var r=A_();return ml.createRoot=r.createRoot,ml.hydrateRoot=r.hydrateRoot,ml}var C_=b_(),vt=cf();/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const uf="184",R_=0,om=1,P_=2,ca=1,L_=2,aa=3,es=0,fi=1,Ri=2,Sr=0,ho=1,am=2,lm=3,cm=4,D_=5,Ss=100,I_=101,N_=102,U_=103,F_=104,O_=200,k_=201,B_=202,z_=203,md=204,gd=205,H_=206,V_=207,G_=208,W_=209,X_=210,j_=211,Y_=212,q_=213,$_=214,_d=0,vd=1,xd=2,mo=3,yd=4,Sd=5,Md=6,Ed=7,l0=0,K_=1,Z_=2,er=0,c0=1,u0=2,d0=3,df=4,f0=5,h0=6,p0=7,m0=300,As=301,go=302,Nu=303,Uu=304,Jl=306,wd=1e3,yr=1001,Td=1002,Bn=1003,J_=1004,gl=1005,qn=1006,Fu=1007,ws=1008,yi=1009,g0=1010,_0=1011,ua=1012,ff=1013,ir=1014,Ji=1015,Er=1016,hf=1017,pf=1018,da=1020,v0=35902,x0=35899,y0=1021,S0=1022,Gi=1023,wr=1026,Ts=1027,M0=1028,mf=1029,bs=1030,gf=1031,_f=1033,kl=33776,Bl=33777,zl=33778,Hl=33779,Ad=35840,bd=35841,Cd=35842,Rd=35843,Pd=36196,Ld=37492,Dd=37496,Id=37488,Nd=37489,Gl=37490,Ud=37491,Fd=37808,Od=37809,kd=37810,Bd=37811,zd=37812,Hd=37813,Vd=37814,Gd=37815,Wd=37816,Xd=37817,jd=37818,Yd=37819,qd=37820,$d=37821,Kd=36492,Zd=36494,Jd=36495,Qd=36283,ef=36284,Wl=36285,tf=36286,Q_=3200,nf=0,ev=1,Jr="",di="srgb",Xl="srgb-linear",jl="linear",Jt="srgb",Js=7680,um=519,tv=512,nv=513,iv=514,vf=515,rv=516,sv=517,xf=518,ov=519,dm=35044,fm="300 es",Qi=2e3,fa=2001;function av(r){for(let e=r.length-1;e>=0;--e)if(r[e]>=65535)return!0;return!1}function Yl(r){return document.createElementNS("http://www.w3.org/1999/xhtml",r)}function lv(){const r=Yl("canvas");return r.style.display="block",r}const hm={};function pm(...r){const e="THREE."+r.shift();console.log(e,...r)}function E0(r){const e=r[0];if(typeof e=="string"&&e.startsWith("TSL:")){const n=r[1];n&&n.isStackTrace?r[0]+=" "+n.getLocation():r[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return r}function xt(...r){r=E0(r);const e="THREE."+r.shift();{const n=r[0];n&&n.isStackTrace?console.warn(n.getError(e)):console.warn(e,...r)}}function Xt(...r){r=E0(r);const e="THREE."+r.shift();{const n=r[0];n&&n.isStackTrace?console.error(n.getError(e)):console.error(e,...r)}}function rf(...r){const e=r.join(" ");e in hm||(hm[e]=!0,xt(...r))}function cv(r,e,n){return new Promise(function(s,a){function l(){switch(r.clientWaitSync(e,r.SYNC_FLUSH_COMMANDS_BIT,0)){case r.WAIT_FAILED:a();break;case r.TIMEOUT_EXPIRED:setTimeout(l,n);break;default:s()}}setTimeout(l,n)})}const uv={[_d]:vd,[xd]:Md,[yd]:Ed,[mo]:Sd,[vd]:_d,[Md]:xd,[Ed]:yd,[Sd]:mo};class Cs{addEventListener(e,n){this._listeners===void 0&&(this._listeners={});const s=this._listeners;s[e]===void 0&&(s[e]=[]),s[e].indexOf(n)===-1&&s[e].push(n)}hasEventListener(e,n){const s=this._listeners;return s===void 0?!1:s[e]!==void 0&&s[e].indexOf(n)!==-1}removeEventListener(e,n){const s=this._listeners;if(s===void 0)return;const a=s[e];if(a!==void 0){const l=a.indexOf(n);l!==-1&&a.splice(l,1)}}dispatchEvent(e){const n=this._listeners;if(n===void 0)return;const s=n[e.type];if(s!==void 0){e.target=this;const a=s.slice(0);for(let l=0,u=a.length;l<u;l++)a[l].call(this,e);e.target=null}}}const Wn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Ou=Math.PI/180,sf=180/Math.PI;function ha(){const r=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0,s=Math.random()*4294967295|0;return(Wn[r&255]+Wn[r>>8&255]+Wn[r>>16&255]+Wn[r>>24&255]+"-"+Wn[e&255]+Wn[e>>8&255]+"-"+Wn[e>>16&15|64]+Wn[e>>24&255]+"-"+Wn[n&63|128]+Wn[n>>8&255]+"-"+Wn[n>>16&255]+Wn[n>>24&255]+Wn[s&255]+Wn[s>>8&255]+Wn[s>>16&255]+Wn[s>>24&255]).toLowerCase()}function Ot(r,e,n){return Math.max(e,Math.min(n,r))}function dv(r,e){return(r%e+e)%e}function ku(r,e,n){return(1-n)*r+n*e}function Qo(r,e){switch(e.constructor){case Float32Array:return r;case Uint32Array:return r/4294967295;case Uint16Array:return r/65535;case Uint8Array:return r/255;case Int32Array:return Math.max(r/2147483647,-1);case Int16Array:return Math.max(r/32767,-1);case Int8Array:return Math.max(r/127,-1);default:throw new Error("Invalid component type.")}}function ui(r,e){switch(e.constructor){case Float32Array:return r;case Uint32Array:return Math.round(r*4294967295);case Uint16Array:return Math.round(r*65535);case Uint8Array:return Math.round(r*255);case Int32Array:return Math.round(r*2147483647);case Int16Array:return Math.round(r*32767);case Int8Array:return Math.round(r*127);default:throw new Error("Invalid component type.")}}const Rf=class Rf{constructor(e=0,n=0){this.x=e,this.y=n}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,n){return this.x=e,this.y=n,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const n=this.x,s=this.y,a=e.elements;return this.x=a[0]*n+a[3]*s+a[6],this.y=a[1]*n+a[4]*s+a[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,n){return this.x=Ot(this.x,e.x,n.x),this.y=Ot(this.y,e.y,n.y),this}clampScalar(e,n){return this.x=Ot(this.x,e,n),this.y=Ot(this.y,e,n),this}clampLength(e,n){const s=this.length();return this.divideScalar(s||1).multiplyScalar(Ot(s,e,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const s=this.dot(e)/n;return Math.acos(Ot(s,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,s=this.y-e.y;return n*n+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this}lerpVectors(e,n,s){return this.x=e.x+(n.x-e.x)*s,this.y=e.y+(n.y-e.y)*s,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this}rotateAround(e,n){const s=Math.cos(n),a=Math.sin(n),l=this.x-e.x,u=this.y-e.y;return this.x=l*s-u*a+e.x,this.y=l*a+u*s+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};Rf.prototype.isVector2=!0;let Ht=Rf;class xo{constructor(e=0,n=0,s=0,a=1){this.isQuaternion=!0,this._x=e,this._y=n,this._z=s,this._w=a}static slerpFlat(e,n,s,a,l,u,f){let p=s[a+0],m=s[a+1],x=s[a+2],y=s[a+3],g=l[u+0],S=l[u+1],T=l[u+2],R=l[u+3];if(y!==R||p!==g||m!==S||x!==T){let _=p*g+m*S+x*T+y*R;_<0&&(g=-g,S=-S,T=-T,R=-R,_=-_);let v=1-f;if(_<.9995){const b=Math.acos(_),L=Math.sin(b);v=Math.sin(v*b)/L,f=Math.sin(f*b)/L,p=p*v+g*f,m=m*v+S*f,x=x*v+T*f,y=y*v+R*f}else{p=p*v+g*f,m=m*v+S*f,x=x*v+T*f,y=y*v+R*f;const b=1/Math.sqrt(p*p+m*m+x*x+y*y);p*=b,m*=b,x*=b,y*=b}}e[n]=p,e[n+1]=m,e[n+2]=x,e[n+3]=y}static multiplyQuaternionsFlat(e,n,s,a,l,u){const f=s[a],p=s[a+1],m=s[a+2],x=s[a+3],y=l[u],g=l[u+1],S=l[u+2],T=l[u+3];return e[n]=f*T+x*y+p*S-m*g,e[n+1]=p*T+x*g+m*y-f*S,e[n+2]=m*T+x*S+f*g-p*y,e[n+3]=x*T-f*y-p*g-m*S,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,n,s,a){return this._x=e,this._y=n,this._z=s,this._w=a,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,n=!0){const s=e._x,a=e._y,l=e._z,u=e._order,f=Math.cos,p=Math.sin,m=f(s/2),x=f(a/2),y=f(l/2),g=p(s/2),S=p(a/2),T=p(l/2);switch(u){case"XYZ":this._x=g*x*y+m*S*T,this._y=m*S*y-g*x*T,this._z=m*x*T+g*S*y,this._w=m*x*y-g*S*T;break;case"YXZ":this._x=g*x*y+m*S*T,this._y=m*S*y-g*x*T,this._z=m*x*T-g*S*y,this._w=m*x*y+g*S*T;break;case"ZXY":this._x=g*x*y-m*S*T,this._y=m*S*y+g*x*T,this._z=m*x*T+g*S*y,this._w=m*x*y-g*S*T;break;case"ZYX":this._x=g*x*y-m*S*T,this._y=m*S*y+g*x*T,this._z=m*x*T-g*S*y,this._w=m*x*y+g*S*T;break;case"YZX":this._x=g*x*y+m*S*T,this._y=m*S*y+g*x*T,this._z=m*x*T-g*S*y,this._w=m*x*y-g*S*T;break;case"XZY":this._x=g*x*y-m*S*T,this._y=m*S*y-g*x*T,this._z=m*x*T+g*S*y,this._w=m*x*y+g*S*T;break;default:xt("Quaternion: .setFromEuler() encountered an unknown order: "+u)}return n===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,n){const s=n/2,a=Math.sin(s);return this._x=e.x*a,this._y=e.y*a,this._z=e.z*a,this._w=Math.cos(s),this._onChangeCallback(),this}setFromRotationMatrix(e){const n=e.elements,s=n[0],a=n[4],l=n[8],u=n[1],f=n[5],p=n[9],m=n[2],x=n[6],y=n[10],g=s+f+y;if(g>0){const S=.5/Math.sqrt(g+1);this._w=.25/S,this._x=(x-p)*S,this._y=(l-m)*S,this._z=(u-a)*S}else if(s>f&&s>y){const S=2*Math.sqrt(1+s-f-y);this._w=(x-p)/S,this._x=.25*S,this._y=(a+u)/S,this._z=(l+m)/S}else if(f>y){const S=2*Math.sqrt(1+f-s-y);this._w=(l-m)/S,this._x=(a+u)/S,this._y=.25*S,this._z=(p+x)/S}else{const S=2*Math.sqrt(1+y-s-f);this._w=(u-a)/S,this._x=(l+m)/S,this._y=(p+x)/S,this._z=.25*S}return this._onChangeCallback(),this}setFromUnitVectors(e,n){let s=e.dot(n)+1;return s<1e-8?(s=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=s):(this._x=0,this._y=-e.z,this._z=e.y,this._w=s)):(this._x=e.y*n.z-e.z*n.y,this._y=e.z*n.x-e.x*n.z,this._z=e.x*n.y-e.y*n.x,this._w=s),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Ot(this.dot(e),-1,1)))}rotateTowards(e,n){const s=this.angleTo(e);if(s===0)return this;const a=Math.min(1,n/s);return this.slerp(e,a),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,n){const s=e._x,a=e._y,l=e._z,u=e._w,f=n._x,p=n._y,m=n._z,x=n._w;return this._x=s*x+u*f+a*m-l*p,this._y=a*x+u*p+l*f-s*m,this._z=l*x+u*m+s*p-a*f,this._w=u*x-s*f-a*p-l*m,this._onChangeCallback(),this}slerp(e,n){let s=e._x,a=e._y,l=e._z,u=e._w,f=this.dot(e);f<0&&(s=-s,a=-a,l=-l,u=-u,f=-f);let p=1-n;if(f<.9995){const m=Math.acos(f),x=Math.sin(m);p=Math.sin(p*m)/x,n=Math.sin(n*m)/x,this._x=this._x*p+s*n,this._y=this._y*p+a*n,this._z=this._z*p+l*n,this._w=this._w*p+u*n,this._onChangeCallback()}else this._x=this._x*p+s*n,this._y=this._y*p+a*n,this._z=this._z*p+l*n,this._w=this._w*p+u*n,this.normalize();return this}slerpQuaternions(e,n,s){return this.copy(e).slerp(n,s)}random(){const e=2*Math.PI*Math.random(),n=2*Math.PI*Math.random(),s=Math.random(),a=Math.sqrt(1-s),l=Math.sqrt(s);return this.set(a*Math.sin(e),a*Math.cos(e),l*Math.sin(n),l*Math.cos(n))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,n=0){return this._x=e[n],this._y=e[n+1],this._z=e[n+2],this._w=e[n+3],this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._w,e}fromBufferAttribute(e,n){return this._x=e.getX(n),this._y=e.getY(n),this._z=e.getZ(n),this._w=e.getW(n),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}const Pf=class Pf{constructor(e=0,n=0,s=0){this.x=e,this.y=n,this.z=s}set(e,n,s){return s===void 0&&(s=this.z),this.x=e,this.y=n,this.z=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,n){return this.x=e.x*n.x,this.y=e.y*n.y,this.z=e.z*n.z,this}applyEuler(e){return this.applyQuaternion(mm.setFromEuler(e))}applyAxisAngle(e,n){return this.applyQuaternion(mm.setFromAxisAngle(e,n))}applyMatrix3(e){const n=this.x,s=this.y,a=this.z,l=e.elements;return this.x=l[0]*n+l[3]*s+l[6]*a,this.y=l[1]*n+l[4]*s+l[7]*a,this.z=l[2]*n+l[5]*s+l[8]*a,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const n=this.x,s=this.y,a=this.z,l=e.elements,u=1/(l[3]*n+l[7]*s+l[11]*a+l[15]);return this.x=(l[0]*n+l[4]*s+l[8]*a+l[12])*u,this.y=(l[1]*n+l[5]*s+l[9]*a+l[13])*u,this.z=(l[2]*n+l[6]*s+l[10]*a+l[14])*u,this}applyQuaternion(e){const n=this.x,s=this.y,a=this.z,l=e.x,u=e.y,f=e.z,p=e.w,m=2*(u*a-f*s),x=2*(f*n-l*a),y=2*(l*s-u*n);return this.x=n+p*m+u*y-f*x,this.y=s+p*x+f*m-l*y,this.z=a+p*y+l*x-u*m,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const n=this.x,s=this.y,a=this.z,l=e.elements;return this.x=l[0]*n+l[4]*s+l[8]*a,this.y=l[1]*n+l[5]*s+l[9]*a,this.z=l[2]*n+l[6]*s+l[10]*a,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,n){return this.x=Ot(this.x,e.x,n.x),this.y=Ot(this.y,e.y,n.y),this.z=Ot(this.z,e.z,n.z),this}clampScalar(e,n){return this.x=Ot(this.x,e,n),this.y=Ot(this.y,e,n),this.z=Ot(this.z,e,n),this}clampLength(e,n){const s=this.length();return this.divideScalar(s||1).multiplyScalar(Ot(s,e,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this}lerpVectors(e,n,s){return this.x=e.x+(n.x-e.x)*s,this.y=e.y+(n.y-e.y)*s,this.z=e.z+(n.z-e.z)*s,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,n){const s=e.x,a=e.y,l=e.z,u=n.x,f=n.y,p=n.z;return this.x=a*p-l*f,this.y=l*u-s*p,this.z=s*f-a*u,this}projectOnVector(e){const n=e.lengthSq();if(n===0)return this.set(0,0,0);const s=e.dot(this)/n;return this.copy(e).multiplyScalar(s)}projectOnPlane(e){return Bu.copy(this).projectOnVector(e),this.sub(Bu)}reflect(e){return this.sub(Bu.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const s=this.dot(e)/n;return Math.acos(Ot(s,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,s=this.y-e.y,a=this.z-e.z;return n*n+s*s+a*a}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,n,s){const a=Math.sin(n)*e;return this.x=a*Math.sin(s),this.y=Math.cos(n)*e,this.z=a*Math.cos(s),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,n,s){return this.x=e*Math.sin(n),this.y=s,this.z=e*Math.cos(n),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this}setFromMatrixScale(e){const n=this.setFromMatrixColumn(e,0).length(),s=this.setFromMatrixColumn(e,1).length(),a=this.setFromMatrixColumn(e,2).length();return this.x=n,this.y=s,this.z=a,this}setFromMatrixColumn(e,n){return this.fromArray(e.elements,n*4)}setFromMatrix3Column(e,n){return this.fromArray(e.elements,n*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,n=Math.random()*2-1,s=Math.sqrt(1-n*n);return this.x=s*Math.cos(e),this.y=n,this.z=s*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};Pf.prototype.isVector3=!0;let J=Pf;const Bu=new J,mm=new xo,Lf=class Lf{constructor(e,n,s,a,l,u,f,p,m){this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,n,s,a,l,u,f,p,m)}set(e,n,s,a,l,u,f,p,m){const x=this.elements;return x[0]=e,x[1]=a,x[2]=f,x[3]=n,x[4]=l,x[5]=p,x[6]=s,x[7]=u,x[8]=m,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const n=this.elements,s=e.elements;return n[0]=s[0],n[1]=s[1],n[2]=s[2],n[3]=s[3],n[4]=s[4],n[5]=s[5],n[6]=s[6],n[7]=s[7],n[8]=s[8],this}extractBasis(e,n,s){return e.setFromMatrix3Column(this,0),n.setFromMatrix3Column(this,1),s.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const n=e.elements;return this.set(n[0],n[4],n[8],n[1],n[5],n[9],n[2],n[6],n[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const s=e.elements,a=n.elements,l=this.elements,u=s[0],f=s[3],p=s[6],m=s[1],x=s[4],y=s[7],g=s[2],S=s[5],T=s[8],R=a[0],_=a[3],v=a[6],b=a[1],L=a[4],P=a[7],z=a[2],D=a[5],k=a[8];return l[0]=u*R+f*b+p*z,l[3]=u*_+f*L+p*D,l[6]=u*v+f*P+p*k,l[1]=m*R+x*b+y*z,l[4]=m*_+x*L+y*D,l[7]=m*v+x*P+y*k,l[2]=g*R+S*b+T*z,l[5]=g*_+S*L+T*D,l[8]=g*v+S*P+T*k,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[3]*=e,n[6]*=e,n[1]*=e,n[4]*=e,n[7]*=e,n[2]*=e,n[5]*=e,n[8]*=e,this}determinant(){const e=this.elements,n=e[0],s=e[1],a=e[2],l=e[3],u=e[4],f=e[5],p=e[6],m=e[7],x=e[8];return n*u*x-n*f*m-s*l*x+s*f*p+a*l*m-a*u*p}invert(){const e=this.elements,n=e[0],s=e[1],a=e[2],l=e[3],u=e[4],f=e[5],p=e[6],m=e[7],x=e[8],y=x*u-f*m,g=f*p-x*l,S=m*l-u*p,T=n*y+s*g+a*S;if(T===0)return this.set(0,0,0,0,0,0,0,0,0);const R=1/T;return e[0]=y*R,e[1]=(a*m-x*s)*R,e[2]=(f*s-a*u)*R,e[3]=g*R,e[4]=(x*n-a*p)*R,e[5]=(a*l-f*n)*R,e[6]=S*R,e[7]=(s*p-m*n)*R,e[8]=(u*n-s*l)*R,this}transpose(){let e;const n=this.elements;return e=n[1],n[1]=n[3],n[3]=e,e=n[2],n[2]=n[6],n[6]=e,e=n[5],n[5]=n[7],n[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const n=this.elements;return e[0]=n[0],e[1]=n[3],e[2]=n[6],e[3]=n[1],e[4]=n[4],e[5]=n[7],e[6]=n[2],e[7]=n[5],e[8]=n[8],this}setUvTransform(e,n,s,a,l,u,f){const p=Math.cos(l),m=Math.sin(l);return this.set(s*p,s*m,-s*(p*u+m*f)+u+e,-a*m,a*p,-a*(-m*u+p*f)+f+n,0,0,1),this}scale(e,n){return this.premultiply(zu.makeScale(e,n)),this}rotate(e){return this.premultiply(zu.makeRotation(-e)),this}translate(e,n){return this.premultiply(zu.makeTranslation(e,n)),this}makeTranslation(e,n){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,n,0,0,1),this}makeRotation(e){const n=Math.cos(e),s=Math.sin(e);return this.set(n,-s,0,s,n,0,0,0,1),this}makeScale(e,n){return this.set(e,0,0,0,n,0,0,0,1),this}equals(e){const n=this.elements,s=e.elements;for(let a=0;a<9;a++)if(n[a]!==s[a])return!1;return!0}fromArray(e,n=0){for(let s=0;s<9;s++)this.elements[s]=e[s+n];return this}toArray(e=[],n=0){const s=this.elements;return e[n]=s[0],e[n+1]=s[1],e[n+2]=s[2],e[n+3]=s[3],e[n+4]=s[4],e[n+5]=s[5],e[n+6]=s[6],e[n+7]=s[7],e[n+8]=s[8],e}clone(){return new this.constructor().fromArray(this.elements)}};Lf.prototype.isMatrix3=!0;let wt=Lf;const zu=new wt,gm=new wt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),_m=new wt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function fv(){const r={enabled:!0,workingColorSpace:Xl,spaces:{},convert:function(a,l,u){return this.enabled===!1||l===u||!l||!u||(this.spaces[l].transfer===Jt&&(a.r=Mr(a.r),a.g=Mr(a.g),a.b=Mr(a.b)),this.spaces[l].primaries!==this.spaces[u].primaries&&(a.applyMatrix3(this.spaces[l].toXYZ),a.applyMatrix3(this.spaces[u].fromXYZ)),this.spaces[u].transfer===Jt&&(a.r=po(a.r),a.g=po(a.g),a.b=po(a.b))),a},workingToColorSpace:function(a,l){return this.convert(a,this.workingColorSpace,l)},colorSpaceToWorking:function(a,l){return this.convert(a,l,this.workingColorSpace)},getPrimaries:function(a){return this.spaces[a].primaries},getTransfer:function(a){return a===Jr?jl:this.spaces[a].transfer},getToneMappingMode:function(a){return this.spaces[a].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(a,l=this.workingColorSpace){return a.fromArray(this.spaces[l].luminanceCoefficients)},define:function(a){Object.assign(this.spaces,a)},_getMatrix:function(a,l,u){return a.copy(this.spaces[l].toXYZ).multiply(this.spaces[u].fromXYZ)},_getDrawingBufferColorSpace:function(a){return this.spaces[a].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(a=this.workingColorSpace){return this.spaces[a].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(a,l){return rf("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),r.workingToColorSpace(a,l)},toWorkingColorSpace:function(a,l){return rf("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),r.colorSpaceToWorking(a,l)}},e=[.64,.33,.3,.6,.15,.06],n=[.2126,.7152,.0722],s=[.3127,.329];return r.define({[Xl]:{primaries:e,whitePoint:s,transfer:jl,toXYZ:gm,fromXYZ:_m,luminanceCoefficients:n,workingColorSpaceConfig:{unpackColorSpace:di},outputColorSpaceConfig:{drawingBufferColorSpace:di}},[di]:{primaries:e,whitePoint:s,transfer:Jt,toXYZ:gm,fromXYZ:_m,luminanceCoefficients:n,outputColorSpaceConfig:{drawingBufferColorSpace:di}}}),r}const zt=fv();function Mr(r){return r<.04045?r*.0773993808:Math.pow(r*.9478672986+.0521327014,2.4)}function po(r){return r<.0031308?r*12.92:1.055*Math.pow(r,.41666)-.055}let Qs;class hv{static getDataURL(e,n="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let s;if(e instanceof HTMLCanvasElement)s=e;else{Qs===void 0&&(Qs=Yl("canvas")),Qs.width=e.width,Qs.height=e.height;const a=Qs.getContext("2d");e instanceof ImageData?a.putImageData(e,0,0):a.drawImage(e,0,0,e.width,e.height),s=Qs}return s.toDataURL(n)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const n=Yl("canvas");n.width=e.width,n.height=e.height;const s=n.getContext("2d");s.drawImage(e,0,0,e.width,e.height);const a=s.getImageData(0,0,e.width,e.height),l=a.data;for(let u=0;u<l.length;u++)l[u]=Mr(l[u]/255)*255;return s.putImageData(a,0,0),n}else if(e.data){const n=e.data.slice(0);for(let s=0;s<n.length;s++)n instanceof Uint8Array||n instanceof Uint8ClampedArray?n[s]=Math.floor(Mr(n[s]/255)*255):n[s]=Mr(n[s]);return{data:n,width:e.width,height:e.height}}else return xt("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let pv=0;class yf{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:pv++}),this.uuid=ha(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const n=this.data;return typeof HTMLVideoElement<"u"&&n instanceof HTMLVideoElement?e.set(n.videoWidth,n.videoHeight,0):typeof VideoFrame<"u"&&n instanceof VideoFrame?e.set(n.displayWidth,n.displayHeight,0):n!==null?e.set(n.width,n.height,n.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const s={uuid:this.uuid,url:""},a=this.data;if(a!==null){let l;if(Array.isArray(a)){l=[];for(let u=0,f=a.length;u<f;u++)a[u].isDataTexture?l.push(Hu(a[u].image)):l.push(Hu(a[u]))}else l=Hu(a);s.url=l}return n||(e.images[this.uuid]=s),s}}function Hu(r){return typeof HTMLImageElement<"u"&&r instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&r instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&r instanceof ImageBitmap?hv.getDataURL(r):r.data?{data:Array.from(r.data),width:r.width,height:r.height,type:r.data.constructor.name}:(xt("Texture: Unable to serialize Texture."),{})}let mv=0;const Vu=new J;class $n extends Cs{constructor(e=$n.DEFAULT_IMAGE,n=$n.DEFAULT_MAPPING,s=yr,a=yr,l=qn,u=ws,f=Gi,p=yi,m=$n.DEFAULT_ANISOTROPY,x=Jr){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:mv++}),this.uuid=ha(),this.name="",this.source=new yf(e),this.mipmaps=[],this.mapping=n,this.channel=0,this.wrapS=s,this.wrapT=a,this.magFilter=l,this.minFilter=u,this.anisotropy=m,this.format=f,this.internalFormat=null,this.type=p,this.offset=new Ht(0,0),this.repeat=new Ht(1,1),this.center=new Ht(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new wt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=x,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(Vu).x}get height(){return this.source.getSize(Vu).y}get depth(){return this.source.getSize(Vu).z}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,n){this.updateRanges.push({start:e,count:n})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.normalized=e.normalized,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const n in e){const s=e[n];if(s===void 0){xt(`Texture.setValues(): parameter '${n}' has value of undefined.`);continue}const a=this[n];if(a===void 0){xt(`Texture.setValues(): property '${n}' does not exist.`);continue}a&&s&&a.isVector2&&s.isVector2||a&&s&&a.isVector3&&s.isVector3||a&&s&&a.isMatrix3&&s.isMatrix3?a.copy(s):this[n]=s}}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const s={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(s.userData=this.userData),n||(e.textures[this.uuid]=s),s}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==m0)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case wd:e.x=e.x-Math.floor(e.x);break;case yr:e.x=e.x<0?0:1;break;case Td:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case wd:e.y=e.y-Math.floor(e.y);break;case yr:e.y=e.y<0?0:1;break;case Td:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}$n.DEFAULT_IMAGE=null;$n.DEFAULT_MAPPING=m0;$n.DEFAULT_ANISOTROPY=1;const Df=class Df{constructor(e=0,n=0,s=0,a=1){this.x=e,this.y=n,this.z=s,this.w=a}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,n,s,a){return this.x=e,this.y=n,this.z=s,this.w=a,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;case 3:this.w=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this.w=e.w+n.w,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this.w+=e.w*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this.w=e.w-n.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const n=this.x,s=this.y,a=this.z,l=this.w,u=e.elements;return this.x=u[0]*n+u[4]*s+u[8]*a+u[12]*l,this.y=u[1]*n+u[5]*s+u[9]*a+u[13]*l,this.z=u[2]*n+u[6]*s+u[10]*a+u[14]*l,this.w=u[3]*n+u[7]*s+u[11]*a+u[15]*l,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const n=Math.sqrt(1-e.w*e.w);return n<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/n,this.y=e.y/n,this.z=e.z/n),this}setAxisAngleFromRotationMatrix(e){let n,s,a,l;const p=e.elements,m=p[0],x=p[4],y=p[8],g=p[1],S=p[5],T=p[9],R=p[2],_=p[6],v=p[10];if(Math.abs(x-g)<.01&&Math.abs(y-R)<.01&&Math.abs(T-_)<.01){if(Math.abs(x+g)<.1&&Math.abs(y+R)<.1&&Math.abs(T+_)<.1&&Math.abs(m+S+v-3)<.1)return this.set(1,0,0,0),this;n=Math.PI;const L=(m+1)/2,P=(S+1)/2,z=(v+1)/2,D=(x+g)/4,k=(y+R)/4,w=(T+_)/4;return L>P&&L>z?L<.01?(s=0,a=.707106781,l=.707106781):(s=Math.sqrt(L),a=D/s,l=k/s):P>z?P<.01?(s=.707106781,a=0,l=.707106781):(a=Math.sqrt(P),s=D/a,l=w/a):z<.01?(s=.707106781,a=.707106781,l=0):(l=Math.sqrt(z),s=k/l,a=w/l),this.set(s,a,l,n),this}let b=Math.sqrt((_-T)*(_-T)+(y-R)*(y-R)+(g-x)*(g-x));return Math.abs(b)<.001&&(b=1),this.x=(_-T)/b,this.y=(y-R)/b,this.z=(g-x)/b,this.w=Math.acos((m+S+v-1)/2),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this.w=n[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,n){return this.x=Ot(this.x,e.x,n.x),this.y=Ot(this.y,e.y,n.y),this.z=Ot(this.z,e.z,n.z),this.w=Ot(this.w,e.w,n.w),this}clampScalar(e,n){return this.x=Ot(this.x,e,n),this.y=Ot(this.y,e,n),this.z=Ot(this.z,e,n),this.w=Ot(this.w,e,n),this}clampLength(e,n){const s=this.length();return this.divideScalar(s||1).multiplyScalar(Ot(s,e,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this.w+=(e.w-this.w)*n,this}lerpVectors(e,n,s){return this.x=e.x+(n.x-e.x)*s,this.y=e.y+(n.y-e.y)*s,this.z=e.z+(n.z-e.z)*s,this.w=e.w+(n.w-e.w)*s,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this.w=e[n+3],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e[n+3]=this.w,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this.w=e.getW(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};Df.prototype.isVector4=!0;let gn=Df;class gv extends Cs{constructor(e=1,n=1,s={}){super(),s=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:qn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},s),this.isRenderTarget=!0,this.width=e,this.height=n,this.depth=s.depth,this.scissor=new gn(0,0,e,n),this.scissorTest=!1,this.viewport=new gn(0,0,e,n),this.textures=[];const a={width:e,height:n,depth:s.depth},l=new $n(a),u=s.count;for(let f=0;f<u;f++)this.textures[f]=l.clone(),this.textures[f].isRenderTargetTexture=!0,this.textures[f].renderTarget=this;this._setTextureOptions(s),this.depthBuffer=s.depthBuffer,this.stencilBuffer=s.stencilBuffer,this.resolveDepthBuffer=s.resolveDepthBuffer,this.resolveStencilBuffer=s.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=s.depthTexture,this.samples=s.samples,this.multiview=s.multiview}_setTextureOptions(e={}){const n={minFilter:qn,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(n.mapping=e.mapping),e.wrapS!==void 0&&(n.wrapS=e.wrapS),e.wrapT!==void 0&&(n.wrapT=e.wrapT),e.wrapR!==void 0&&(n.wrapR=e.wrapR),e.magFilter!==void 0&&(n.magFilter=e.magFilter),e.minFilter!==void 0&&(n.minFilter=e.minFilter),e.format!==void 0&&(n.format=e.format),e.type!==void 0&&(n.type=e.type),e.anisotropy!==void 0&&(n.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(n.colorSpace=e.colorSpace),e.flipY!==void 0&&(n.flipY=e.flipY),e.generateMipmaps!==void 0&&(n.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(n.internalFormat=e.internalFormat);for(let s=0;s<this.textures.length;s++)this.textures[s].setValues(n)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,n,s=1){if(this.width!==e||this.height!==n||this.depth!==s){this.width=e,this.height=n,this.depth=s;for(let a=0,l=this.textures.length;a<l;a++)this.textures[a].image.width=e,this.textures[a].image.height=n,this.textures[a].image.depth=s,this.textures[a].isData3DTexture!==!0&&(this.textures[a].isArrayTexture=this.textures[a].image.depth>1);this.dispose()}this.viewport.set(0,0,e,n),this.scissor.set(0,0,e,n)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let n=0,s=e.textures.length;n<s;n++){this.textures[n]=e.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0,this.textures[n].renderTarget=this;const a=Object.assign({},e.textures[n].image);this.textures[n].source=new yf(a)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this.multiview=e.multiview,this}dispose(){this.dispatchEvent({type:"dispose"})}}class tr extends gv{constructor(e=1,n=1,s={}){super(e,n,s),this.isWebGLRenderTarget=!0}}class w0 extends $n{constructor(e=null,n=1,s=1,a=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:n,height:s,depth:a},this.magFilter=Bn,this.minFilter=Bn,this.wrapR=yr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class _v extends $n{constructor(e=null,n=1,s=1,a=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:n,height:s,depth:a},this.magFilter=Bn,this.minFilter=Bn,this.wrapR=yr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const Zl=class Zl{constructor(e,n,s,a,l,u,f,p,m,x,y,g,S,T,R,_){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,n,s,a,l,u,f,p,m,x,y,g,S,T,R,_)}set(e,n,s,a,l,u,f,p,m,x,y,g,S,T,R,_){const v=this.elements;return v[0]=e,v[4]=n,v[8]=s,v[12]=a,v[1]=l,v[5]=u,v[9]=f,v[13]=p,v[2]=m,v[6]=x,v[10]=y,v[14]=g,v[3]=S,v[7]=T,v[11]=R,v[15]=_,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Zl().fromArray(this.elements)}copy(e){const n=this.elements,s=e.elements;return n[0]=s[0],n[1]=s[1],n[2]=s[2],n[3]=s[3],n[4]=s[4],n[5]=s[5],n[6]=s[6],n[7]=s[7],n[8]=s[8],n[9]=s[9],n[10]=s[10],n[11]=s[11],n[12]=s[12],n[13]=s[13],n[14]=s[14],n[15]=s[15],this}copyPosition(e){const n=this.elements,s=e.elements;return n[12]=s[12],n[13]=s[13],n[14]=s[14],this}setFromMatrix3(e){const n=e.elements;return this.set(n[0],n[3],n[6],0,n[1],n[4],n[7],0,n[2],n[5],n[8],0,0,0,0,1),this}extractBasis(e,n,s){return this.determinant()===0?(e.set(1,0,0),n.set(0,1,0),s.set(0,0,1),this):(e.setFromMatrixColumn(this,0),n.setFromMatrixColumn(this,1),s.setFromMatrixColumn(this,2),this)}makeBasis(e,n,s){return this.set(e.x,n.x,s.x,0,e.y,n.y,s.y,0,e.z,n.z,s.z,0,0,0,0,1),this}extractRotation(e){if(e.determinant()===0)return this.identity();const n=this.elements,s=e.elements,a=1/eo.setFromMatrixColumn(e,0).length(),l=1/eo.setFromMatrixColumn(e,1).length(),u=1/eo.setFromMatrixColumn(e,2).length();return n[0]=s[0]*a,n[1]=s[1]*a,n[2]=s[2]*a,n[3]=0,n[4]=s[4]*l,n[5]=s[5]*l,n[6]=s[6]*l,n[7]=0,n[8]=s[8]*u,n[9]=s[9]*u,n[10]=s[10]*u,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromEuler(e){const n=this.elements,s=e.x,a=e.y,l=e.z,u=Math.cos(s),f=Math.sin(s),p=Math.cos(a),m=Math.sin(a),x=Math.cos(l),y=Math.sin(l);if(e.order==="XYZ"){const g=u*x,S=u*y,T=f*x,R=f*y;n[0]=p*x,n[4]=-p*y,n[8]=m,n[1]=S+T*m,n[5]=g-R*m,n[9]=-f*p,n[2]=R-g*m,n[6]=T+S*m,n[10]=u*p}else if(e.order==="YXZ"){const g=p*x,S=p*y,T=m*x,R=m*y;n[0]=g+R*f,n[4]=T*f-S,n[8]=u*m,n[1]=u*y,n[5]=u*x,n[9]=-f,n[2]=S*f-T,n[6]=R+g*f,n[10]=u*p}else if(e.order==="ZXY"){const g=p*x,S=p*y,T=m*x,R=m*y;n[0]=g-R*f,n[4]=-u*y,n[8]=T+S*f,n[1]=S+T*f,n[5]=u*x,n[9]=R-g*f,n[2]=-u*m,n[6]=f,n[10]=u*p}else if(e.order==="ZYX"){const g=u*x,S=u*y,T=f*x,R=f*y;n[0]=p*x,n[4]=T*m-S,n[8]=g*m+R,n[1]=p*y,n[5]=R*m+g,n[9]=S*m-T,n[2]=-m,n[6]=f*p,n[10]=u*p}else if(e.order==="YZX"){const g=u*p,S=u*m,T=f*p,R=f*m;n[0]=p*x,n[4]=R-g*y,n[8]=T*y+S,n[1]=y,n[5]=u*x,n[9]=-f*x,n[2]=-m*x,n[6]=S*y+T,n[10]=g-R*y}else if(e.order==="XZY"){const g=u*p,S=u*m,T=f*p,R=f*m;n[0]=p*x,n[4]=-y,n[8]=m*x,n[1]=g*y+R,n[5]=u*x,n[9]=S*y-T,n[2]=T*y-S,n[6]=f*x,n[10]=R*y+g}return n[3]=0,n[7]=0,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromQuaternion(e){return this.compose(vv,e,xv)}lookAt(e,n,s){const a=this.elements;return _i.subVectors(e,n),_i.lengthSq()===0&&(_i.z=1),_i.normalize(),jr.crossVectors(s,_i),jr.lengthSq()===0&&(Math.abs(s.z)===1?_i.x+=1e-4:_i.z+=1e-4,_i.normalize(),jr.crossVectors(s,_i)),jr.normalize(),_l.crossVectors(_i,jr),a[0]=jr.x,a[4]=_l.x,a[8]=_i.x,a[1]=jr.y,a[5]=_l.y,a[9]=_i.y,a[2]=jr.z,a[6]=_l.z,a[10]=_i.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const s=e.elements,a=n.elements,l=this.elements,u=s[0],f=s[4],p=s[8],m=s[12],x=s[1],y=s[5],g=s[9],S=s[13],T=s[2],R=s[6],_=s[10],v=s[14],b=s[3],L=s[7],P=s[11],z=s[15],D=a[0],k=a[4],w=a[8],I=a[12],j=a[1],O=a[5],q=a[9],le=a[13],me=a[2],W=a[6],te=a[10],$=a[14],K=a[3],fe=a[7],he=a[11],U=a[15];return l[0]=u*D+f*j+p*me+m*K,l[4]=u*k+f*O+p*W+m*fe,l[8]=u*w+f*q+p*te+m*he,l[12]=u*I+f*le+p*$+m*U,l[1]=x*D+y*j+g*me+S*K,l[5]=x*k+y*O+g*W+S*fe,l[9]=x*w+y*q+g*te+S*he,l[13]=x*I+y*le+g*$+S*U,l[2]=T*D+R*j+_*me+v*K,l[6]=T*k+R*O+_*W+v*fe,l[10]=T*w+R*q+_*te+v*he,l[14]=T*I+R*le+_*$+v*U,l[3]=b*D+L*j+P*me+z*K,l[7]=b*k+L*O+P*W+z*fe,l[11]=b*w+L*q+P*te+z*he,l[15]=b*I+L*le+P*$+z*U,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[4]*=e,n[8]*=e,n[12]*=e,n[1]*=e,n[5]*=e,n[9]*=e,n[13]*=e,n[2]*=e,n[6]*=e,n[10]*=e,n[14]*=e,n[3]*=e,n[7]*=e,n[11]*=e,n[15]*=e,this}determinant(){const e=this.elements,n=e[0],s=e[4],a=e[8],l=e[12],u=e[1],f=e[5],p=e[9],m=e[13],x=e[2],y=e[6],g=e[10],S=e[14],T=e[3],R=e[7],_=e[11],v=e[15],b=p*S-m*g,L=f*S-m*y,P=f*g-p*y,z=u*S-m*x,D=u*g-p*x,k=u*y-f*x;return n*(R*b-_*L+v*P)-s*(T*b-_*z+v*D)+a*(T*L-R*z+v*k)-l*(T*P-R*D+_*k)}transpose(){const e=this.elements;let n;return n=e[1],e[1]=e[4],e[4]=n,n=e[2],e[2]=e[8],e[8]=n,n=e[6],e[6]=e[9],e[9]=n,n=e[3],e[3]=e[12],e[12]=n,n=e[7],e[7]=e[13],e[13]=n,n=e[11],e[11]=e[14],e[14]=n,this}setPosition(e,n,s){const a=this.elements;return e.isVector3?(a[12]=e.x,a[13]=e.y,a[14]=e.z):(a[12]=e,a[13]=n,a[14]=s),this}invert(){const e=this.elements,n=e[0],s=e[1],a=e[2],l=e[3],u=e[4],f=e[5],p=e[6],m=e[7],x=e[8],y=e[9],g=e[10],S=e[11],T=e[12],R=e[13],_=e[14],v=e[15],b=n*f-s*u,L=n*p-a*u,P=n*m-l*u,z=s*p-a*f,D=s*m-l*f,k=a*m-l*p,w=x*R-y*T,I=x*_-g*T,j=x*v-S*T,O=y*_-g*R,q=y*v-S*R,le=g*v-S*_,me=b*le-L*q+P*O+z*j-D*I+k*w;if(me===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const W=1/me;return e[0]=(f*le-p*q+m*O)*W,e[1]=(a*q-s*le-l*O)*W,e[2]=(R*k-_*D+v*z)*W,e[3]=(g*D-y*k-S*z)*W,e[4]=(p*j-u*le-m*I)*W,e[5]=(n*le-a*j+l*I)*W,e[6]=(_*P-T*k-v*L)*W,e[7]=(x*k-g*P+S*L)*W,e[8]=(u*q-f*j+m*w)*W,e[9]=(s*j-n*q-l*w)*W,e[10]=(T*D-R*P+v*b)*W,e[11]=(y*P-x*D-S*b)*W,e[12]=(f*I-u*O-p*w)*W,e[13]=(n*O-s*I+a*w)*W,e[14]=(R*L-T*z-_*b)*W,e[15]=(x*z-y*L+g*b)*W,this}scale(e){const n=this.elements,s=e.x,a=e.y,l=e.z;return n[0]*=s,n[4]*=a,n[8]*=l,n[1]*=s,n[5]*=a,n[9]*=l,n[2]*=s,n[6]*=a,n[10]*=l,n[3]*=s,n[7]*=a,n[11]*=l,this}getMaxScaleOnAxis(){const e=this.elements,n=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],s=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],a=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(n,s,a))}makeTranslation(e,n,s){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,n,0,0,1,s,0,0,0,1),this}makeRotationX(e){const n=Math.cos(e),s=Math.sin(e);return this.set(1,0,0,0,0,n,-s,0,0,s,n,0,0,0,0,1),this}makeRotationY(e){const n=Math.cos(e),s=Math.sin(e);return this.set(n,0,s,0,0,1,0,0,-s,0,n,0,0,0,0,1),this}makeRotationZ(e){const n=Math.cos(e),s=Math.sin(e);return this.set(n,-s,0,0,s,n,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,n){const s=Math.cos(n),a=Math.sin(n),l=1-s,u=e.x,f=e.y,p=e.z,m=l*u,x=l*f;return this.set(m*u+s,m*f-a*p,m*p+a*f,0,m*f+a*p,x*f+s,x*p-a*u,0,m*p-a*f,x*p+a*u,l*p*p+s,0,0,0,0,1),this}makeScale(e,n,s){return this.set(e,0,0,0,0,n,0,0,0,0,s,0,0,0,0,1),this}makeShear(e,n,s,a,l,u){return this.set(1,s,l,0,e,1,u,0,n,a,1,0,0,0,0,1),this}compose(e,n,s){const a=this.elements,l=n._x,u=n._y,f=n._z,p=n._w,m=l+l,x=u+u,y=f+f,g=l*m,S=l*x,T=l*y,R=u*x,_=u*y,v=f*y,b=p*m,L=p*x,P=p*y,z=s.x,D=s.y,k=s.z;return a[0]=(1-(R+v))*z,a[1]=(S+P)*z,a[2]=(T-L)*z,a[3]=0,a[4]=(S-P)*D,a[5]=(1-(g+v))*D,a[6]=(_+b)*D,a[7]=0,a[8]=(T+L)*k,a[9]=(_-b)*k,a[10]=(1-(g+R))*k,a[11]=0,a[12]=e.x,a[13]=e.y,a[14]=e.z,a[15]=1,this}decompose(e,n,s){const a=this.elements;e.x=a[12],e.y=a[13],e.z=a[14];const l=this.determinant();if(l===0)return s.set(1,1,1),n.identity(),this;let u=eo.set(a[0],a[1],a[2]).length();const f=eo.set(a[4],a[5],a[6]).length(),p=eo.set(a[8],a[9],a[10]).length();l<0&&(u=-u),Bi.copy(this);const m=1/u,x=1/f,y=1/p;return Bi.elements[0]*=m,Bi.elements[1]*=m,Bi.elements[2]*=m,Bi.elements[4]*=x,Bi.elements[5]*=x,Bi.elements[6]*=x,Bi.elements[8]*=y,Bi.elements[9]*=y,Bi.elements[10]*=y,n.setFromRotationMatrix(Bi),s.x=u,s.y=f,s.z=p,this}makePerspective(e,n,s,a,l,u,f=Qi,p=!1){const m=this.elements,x=2*l/(n-e),y=2*l/(s-a),g=(n+e)/(n-e),S=(s+a)/(s-a);let T,R;if(p)T=l/(u-l),R=u*l/(u-l);else if(f===Qi)T=-(u+l)/(u-l),R=-2*u*l/(u-l);else if(f===fa)T=-u/(u-l),R=-u*l/(u-l);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+f);return m[0]=x,m[4]=0,m[8]=g,m[12]=0,m[1]=0,m[5]=y,m[9]=S,m[13]=0,m[2]=0,m[6]=0,m[10]=T,m[14]=R,m[3]=0,m[7]=0,m[11]=-1,m[15]=0,this}makeOrthographic(e,n,s,a,l,u,f=Qi,p=!1){const m=this.elements,x=2/(n-e),y=2/(s-a),g=-(n+e)/(n-e),S=-(s+a)/(s-a);let T,R;if(p)T=1/(u-l),R=u/(u-l);else if(f===Qi)T=-2/(u-l),R=-(u+l)/(u-l);else if(f===fa)T=-1/(u-l),R=-l/(u-l);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+f);return m[0]=x,m[4]=0,m[8]=0,m[12]=g,m[1]=0,m[5]=y,m[9]=0,m[13]=S,m[2]=0,m[6]=0,m[10]=T,m[14]=R,m[3]=0,m[7]=0,m[11]=0,m[15]=1,this}equals(e){const n=this.elements,s=e.elements;for(let a=0;a<16;a++)if(n[a]!==s[a])return!1;return!0}fromArray(e,n=0){for(let s=0;s<16;s++)this.elements[s]=e[s+n];return this}toArray(e=[],n=0){const s=this.elements;return e[n]=s[0],e[n+1]=s[1],e[n+2]=s[2],e[n+3]=s[3],e[n+4]=s[4],e[n+5]=s[5],e[n+6]=s[6],e[n+7]=s[7],e[n+8]=s[8],e[n+9]=s[9],e[n+10]=s[10],e[n+11]=s[11],e[n+12]=s[12],e[n+13]=s[13],e[n+14]=s[14],e[n+15]=s[15],e}};Zl.prototype.isMatrix4=!0;let _n=Zl;const eo=new J,Bi=new _n,vv=new J(0,0,0),xv=new J(1,1,1),jr=new J,_l=new J,_i=new J,vm=new _n,xm=new xo;class ts{constructor(e=0,n=0,s=0,a=ts.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=n,this._z=s,this._order=a}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,n,s,a=this._order){return this._x=e,this._y=n,this._z=s,this._order=a,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,n=this._order,s=!0){const a=e.elements,l=a[0],u=a[4],f=a[8],p=a[1],m=a[5],x=a[9],y=a[2],g=a[6],S=a[10];switch(n){case"XYZ":this._y=Math.asin(Ot(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(-x,S),this._z=Math.atan2(-u,l)):(this._x=Math.atan2(g,m),this._z=0);break;case"YXZ":this._x=Math.asin(-Ot(x,-1,1)),Math.abs(x)<.9999999?(this._y=Math.atan2(f,S),this._z=Math.atan2(p,m)):(this._y=Math.atan2(-y,l),this._z=0);break;case"ZXY":this._x=Math.asin(Ot(g,-1,1)),Math.abs(g)<.9999999?(this._y=Math.atan2(-y,S),this._z=Math.atan2(-u,m)):(this._y=0,this._z=Math.atan2(p,l));break;case"ZYX":this._y=Math.asin(-Ot(y,-1,1)),Math.abs(y)<.9999999?(this._x=Math.atan2(g,S),this._z=Math.atan2(p,l)):(this._x=0,this._z=Math.atan2(-u,m));break;case"YZX":this._z=Math.asin(Ot(p,-1,1)),Math.abs(p)<.9999999?(this._x=Math.atan2(-x,m),this._y=Math.atan2(-y,l)):(this._x=0,this._y=Math.atan2(f,S));break;case"XZY":this._z=Math.asin(-Ot(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(g,m),this._y=Math.atan2(f,l)):(this._x=Math.atan2(-x,S),this._y=0);break;default:xt("Euler: .setFromRotationMatrix() encountered an unknown order: "+n)}return this._order=n,s===!0&&this._onChangeCallback(),this}setFromQuaternion(e,n,s){return vm.makeRotationFromQuaternion(e),this.setFromRotationMatrix(vm,n,s)}setFromVector3(e,n=this._order){return this.set(e.x,e.y,e.z,n)}reorder(e){return xm.setFromEuler(this),this.setFromQuaternion(xm,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}ts.DEFAULT_ORDER="XYZ";class Sf{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let yv=0;const ym=new J,to=new xo,mr=new _n,vl=new J,ea=new J,Sv=new J,Mv=new xo,Sm=new J(1,0,0),Mm=new J(0,1,0),Em=new J(0,0,1),wm={type:"added"},Ev={type:"removed"},no={type:"childadded",child:null},Gu={type:"childremoved",child:null};class Kn extends Cs{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:yv++}),this.uuid=ha(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Kn.DEFAULT_UP.clone();const e=new J,n=new ts,s=new xo,a=new J(1,1,1);function l(){s.setFromEuler(n,!1)}function u(){n.setFromQuaternion(s,void 0,!1)}n._onChange(l),s._onChange(u),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:n},quaternion:{configurable:!0,enumerable:!0,value:s},scale:{configurable:!0,enumerable:!0,value:a},modelViewMatrix:{value:new _n},normalMatrix:{value:new wt}}),this.matrix=new _n,this.matrixWorld=new _n,this.matrixAutoUpdate=Kn.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Kn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Sf,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,n){this.quaternion.setFromAxisAngle(e,n)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,n){return to.setFromAxisAngle(e,n),this.quaternion.multiply(to),this}rotateOnWorldAxis(e,n){return to.setFromAxisAngle(e,n),this.quaternion.premultiply(to),this}rotateX(e){return this.rotateOnAxis(Sm,e)}rotateY(e){return this.rotateOnAxis(Mm,e)}rotateZ(e){return this.rotateOnAxis(Em,e)}translateOnAxis(e,n){return ym.copy(e).applyQuaternion(this.quaternion),this.position.add(ym.multiplyScalar(n)),this}translateX(e){return this.translateOnAxis(Sm,e)}translateY(e){return this.translateOnAxis(Mm,e)}translateZ(e){return this.translateOnAxis(Em,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(mr.copy(this.matrixWorld).invert())}lookAt(e,n,s){e.isVector3?vl.copy(e):vl.set(e,n,s);const a=this.parent;this.updateWorldMatrix(!0,!1),ea.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?mr.lookAt(ea,vl,this.up):mr.lookAt(vl,ea,this.up),this.quaternion.setFromRotationMatrix(mr),a&&(mr.extractRotation(a.matrixWorld),to.setFromRotationMatrix(mr),this.quaternion.premultiply(to.invert()))}add(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.add(arguments[n]);return this}return e===this?(Xt("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(wm),no.child=e,this.dispatchEvent(no),no.child=null):Xt("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let s=0;s<arguments.length;s++)this.remove(arguments[s]);return this}const n=this.children.indexOf(e);return n!==-1&&(e.parent=null,this.children.splice(n,1),e.dispatchEvent(Ev),Gu.child=e,this.dispatchEvent(Gu),Gu.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),mr.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),mr.multiply(e.parent.matrixWorld)),e.applyMatrix4(mr),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(wm),no.child=e,this.dispatchEvent(no),no.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,n){if(this[e]===n)return this;for(let s=0,a=this.children.length;s<a;s++){const u=this.children[s].getObjectByProperty(e,n);if(u!==void 0)return u}}getObjectsByProperty(e,n,s=[]){this[e]===n&&s.push(this);const a=this.children;for(let l=0,u=a.length;l<u;l++)a[l].getObjectsByProperty(e,n,s);return s}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ea,e,Sv),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ea,Mv,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const n=this.matrixWorld.elements;return e.set(n[8],n[9],n[10]).normalize()}raycast(){}traverse(e){e(this);const n=this.children;for(let s=0,a=n.length;s<a;s++)n[s].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const n=this.children;for(let s=0,a=n.length;s<a;s++)n[s].traverseVisible(e)}traverseAncestors(e){const n=this.parent;n!==null&&(e(n),n.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);const e=this.pivot;if(e!==null){const n=e.x,s=e.y,a=e.z,l=this.matrix.elements;l[12]+=n-l[0]*n-l[4]*s-l[8]*a,l[13]+=s-l[1]*n-l[5]*s-l[9]*a,l[14]+=a-l[2]*n-l[6]*s-l[10]*a}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const n=this.children;for(let s=0,a=n.length;s<a;s++)n[s].updateMatrixWorld(e)}updateWorldMatrix(e,n){const s=this.parent;if(e===!0&&s!==null&&s.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),n===!0){const a=this.children;for(let l=0,u=a.length;l<u;l++)a[l].updateWorldMatrix(!1,!0)}}toJSON(e){const n=e===void 0||typeof e=="string",s={};n&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},s.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const a={};a.uuid=this.uuid,a.type=this.type,this.name!==""&&(a.name=this.name),this.castShadow===!0&&(a.castShadow=!0),this.receiveShadow===!0&&(a.receiveShadow=!0),this.visible===!1&&(a.visible=!1),this.frustumCulled===!1&&(a.frustumCulled=!1),this.renderOrder!==0&&(a.renderOrder=this.renderOrder),this.static!==!1&&(a.static=this.static),Object.keys(this.userData).length>0&&(a.userData=this.userData),a.layers=this.layers.mask,a.matrix=this.matrix.toArray(),a.up=this.up.toArray(),this.pivot!==null&&(a.pivot=this.pivot.toArray()),this.matrixAutoUpdate===!1&&(a.matrixAutoUpdate=!1),this.morphTargetDictionary!==void 0&&(a.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(a.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(a.type="InstancedMesh",a.count=this.count,a.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(a.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(a.type="BatchedMesh",a.perObjectFrustumCulled=this.perObjectFrustumCulled,a.sortObjects=this.sortObjects,a.drawRanges=this._drawRanges,a.reservedRanges=this._reservedRanges,a.geometryInfo=this._geometryInfo.map(f=>({...f,boundingBox:f.boundingBox?f.boundingBox.toJSON():void 0,boundingSphere:f.boundingSphere?f.boundingSphere.toJSON():void 0})),a.instanceInfo=this._instanceInfo.map(f=>({...f})),a.availableInstanceIds=this._availableInstanceIds.slice(),a.availableGeometryIds=this._availableGeometryIds.slice(),a.nextIndexStart=this._nextIndexStart,a.nextVertexStart=this._nextVertexStart,a.geometryCount=this._geometryCount,a.maxInstanceCount=this._maxInstanceCount,a.maxVertexCount=this._maxVertexCount,a.maxIndexCount=this._maxIndexCount,a.geometryInitialized=this._geometryInitialized,a.matricesTexture=this._matricesTexture.toJSON(e),a.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(a.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(a.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(a.boundingBox=this.boundingBox.toJSON()));function l(f,p){return f[p.uuid]===void 0&&(f[p.uuid]=p.toJSON(e)),p.uuid}if(this.isScene)this.background&&(this.background.isColor?a.background=this.background.toJSON():this.background.isTexture&&(a.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(a.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){a.geometry=l(e.geometries,this.geometry);const f=this.geometry.parameters;if(f!==void 0&&f.shapes!==void 0){const p=f.shapes;if(Array.isArray(p))for(let m=0,x=p.length;m<x;m++){const y=p[m];l(e.shapes,y)}else l(e.shapes,p)}}if(this.isSkinnedMesh&&(a.bindMode=this.bindMode,a.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(l(e.skeletons,this.skeleton),a.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const f=[];for(let p=0,m=this.material.length;p<m;p++)f.push(l(e.materials,this.material[p]));a.material=f}else a.material=l(e.materials,this.material);if(this.children.length>0){a.children=[];for(let f=0;f<this.children.length;f++)a.children.push(this.children[f].toJSON(e).object)}if(this.animations.length>0){a.animations=[];for(let f=0;f<this.animations.length;f++){const p=this.animations[f];a.animations.push(l(e.animations,p))}}if(n){const f=u(e.geometries),p=u(e.materials),m=u(e.textures),x=u(e.images),y=u(e.shapes),g=u(e.skeletons),S=u(e.animations),T=u(e.nodes);f.length>0&&(s.geometries=f),p.length>0&&(s.materials=p),m.length>0&&(s.textures=m),x.length>0&&(s.images=x),y.length>0&&(s.shapes=y),g.length>0&&(s.skeletons=g),S.length>0&&(s.animations=S),T.length>0&&(s.nodes=T)}return s.object=a,s;function u(f){const p=[];for(const m in f){const x=f[m];delete x.metadata,p.push(x)}return p}}clone(e){return new this.constructor().copy(this,e)}copy(e,n=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.pivot=e.pivot!==null?e.pivot.clone():null,this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),n===!0)for(let s=0;s<e.children.length;s++){const a=e.children[s];this.add(a.clone())}return this}}Kn.DEFAULT_UP=new J(0,1,0);Kn.DEFAULT_MATRIX_AUTO_UPDATE=!0;Kn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;class Yn extends Kn{constructor(){super(),this.isGroup=!0,this.type="Group"}}const wv={type:"move"};class Wu{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Yn,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Yn,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new J,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new J),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Yn,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new J,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new J,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const n=this._hand;if(n)for(const s of e.hand.values())this._getHandJoint(n,s)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,n,s){let a=null,l=null,u=null;const f=this._targetRay,p=this._grip,m=this._hand;if(e&&n.session.visibilityState!=="visible-blurred"){if(m&&e.hand){u=!0;for(const R of e.hand.values()){const _=n.getJointPose(R,s),v=this._getHandJoint(m,R);_!==null&&(v.matrix.fromArray(_.transform.matrix),v.matrix.decompose(v.position,v.rotation,v.scale),v.matrixWorldNeedsUpdate=!0,v.jointRadius=_.radius),v.visible=_!==null}const x=m.joints["index-finger-tip"],y=m.joints["thumb-tip"],g=x.position.distanceTo(y.position),S=.02,T=.005;m.inputState.pinching&&g>S+T?(m.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!m.inputState.pinching&&g<=S-T&&(m.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else p!==null&&e.gripSpace&&(l=n.getPose(e.gripSpace,s),l!==null&&(p.matrix.fromArray(l.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,l.linearVelocity?(p.hasLinearVelocity=!0,p.linearVelocity.copy(l.linearVelocity)):p.hasLinearVelocity=!1,l.angularVelocity?(p.hasAngularVelocity=!0,p.angularVelocity.copy(l.angularVelocity)):p.hasAngularVelocity=!1,p.eventsEnabled&&p.dispatchEvent({type:"gripUpdated",data:e,target:this})));f!==null&&(a=n.getPose(e.targetRaySpace,s),a===null&&l!==null&&(a=l),a!==null&&(f.matrix.fromArray(a.transform.matrix),f.matrix.decompose(f.position,f.rotation,f.scale),f.matrixWorldNeedsUpdate=!0,a.linearVelocity?(f.hasLinearVelocity=!0,f.linearVelocity.copy(a.linearVelocity)):f.hasLinearVelocity=!1,a.angularVelocity?(f.hasAngularVelocity=!0,f.angularVelocity.copy(a.angularVelocity)):f.hasAngularVelocity=!1,this.dispatchEvent(wv)))}return f!==null&&(f.visible=a!==null),p!==null&&(p.visible=l!==null),m!==null&&(m.visible=u!==null),this}_getHandJoint(e,n){if(e.joints[n.jointName]===void 0){const s=new Yn;s.matrixAutoUpdate=!1,s.visible=!1,e.joints[n.jointName]=s,e.add(s)}return e.joints[n.jointName]}}const T0={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Yr={h:0,s:0,l:0},xl={h:0,s:0,l:0};function Xu(r,e,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?r+(e-r)*6*n:n<1/2?e:n<2/3?r+(e-r)*6*(2/3-n):r}class Ct{constructor(e,n,s){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,n,s)}set(e,n,s){if(n===void 0&&s===void 0){const a=e;a&&a.isColor?this.copy(a):typeof a=="number"?this.setHex(a):typeof a=="string"&&this.setStyle(a)}else this.setRGB(e,n,s);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,n=di){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,zt.colorSpaceToWorking(this,n),this}setRGB(e,n,s,a=zt.workingColorSpace){return this.r=e,this.g=n,this.b=s,zt.colorSpaceToWorking(this,a),this}setHSL(e,n,s,a=zt.workingColorSpace){if(e=dv(e,1),n=Ot(n,0,1),s=Ot(s,0,1),n===0)this.r=this.g=this.b=s;else{const l=s<=.5?s*(1+n):s+n-s*n,u=2*s-l;this.r=Xu(u,l,e+1/3),this.g=Xu(u,l,e),this.b=Xu(u,l,e-1/3)}return zt.colorSpaceToWorking(this,a),this}setStyle(e,n=di){function s(l){l!==void 0&&parseFloat(l)<1&&xt("Color: Alpha component of "+e+" will be ignored.")}let a;if(a=/^(\w+)\(([^\)]*)\)/.exec(e)){let l;const u=a[1],f=a[2];switch(u){case"rgb":case"rgba":if(l=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(f))return s(l[4]),this.setRGB(Math.min(255,parseInt(l[1],10))/255,Math.min(255,parseInt(l[2],10))/255,Math.min(255,parseInt(l[3],10))/255,n);if(l=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(f))return s(l[4]),this.setRGB(Math.min(100,parseInt(l[1],10))/100,Math.min(100,parseInt(l[2],10))/100,Math.min(100,parseInt(l[3],10))/100,n);break;case"hsl":case"hsla":if(l=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(f))return s(l[4]),this.setHSL(parseFloat(l[1])/360,parseFloat(l[2])/100,parseFloat(l[3])/100,n);break;default:xt("Color: Unknown color model "+e)}}else if(a=/^\#([A-Fa-f\d]+)$/.exec(e)){const l=a[1],u=l.length;if(u===3)return this.setRGB(parseInt(l.charAt(0),16)/15,parseInt(l.charAt(1),16)/15,parseInt(l.charAt(2),16)/15,n);if(u===6)return this.setHex(parseInt(l,16),n);xt("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,n);return this}setColorName(e,n=di){const s=T0[e.toLowerCase()];return s!==void 0?this.setHex(s,n):xt("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Mr(e.r),this.g=Mr(e.g),this.b=Mr(e.b),this}copyLinearToSRGB(e){return this.r=po(e.r),this.g=po(e.g),this.b=po(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=di){return zt.workingToColorSpace(Xn.copy(this),e),Math.round(Ot(Xn.r*255,0,255))*65536+Math.round(Ot(Xn.g*255,0,255))*256+Math.round(Ot(Xn.b*255,0,255))}getHexString(e=di){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,n=zt.workingColorSpace){zt.workingToColorSpace(Xn.copy(this),n);const s=Xn.r,a=Xn.g,l=Xn.b,u=Math.max(s,a,l),f=Math.min(s,a,l);let p,m;const x=(f+u)/2;if(f===u)p=0,m=0;else{const y=u-f;switch(m=x<=.5?y/(u+f):y/(2-u-f),u){case s:p=(a-l)/y+(a<l?6:0);break;case a:p=(l-s)/y+2;break;case l:p=(s-a)/y+4;break}p/=6}return e.h=p,e.s=m,e.l=x,e}getRGB(e,n=zt.workingColorSpace){return zt.workingToColorSpace(Xn.copy(this),n),e.r=Xn.r,e.g=Xn.g,e.b=Xn.b,e}getStyle(e=di){zt.workingToColorSpace(Xn.copy(this),e);const n=Xn.r,s=Xn.g,a=Xn.b;return e!==di?`color(${e} ${n.toFixed(3)} ${s.toFixed(3)} ${a.toFixed(3)})`:`rgb(${Math.round(n*255)},${Math.round(s*255)},${Math.round(a*255)})`}offsetHSL(e,n,s){return this.getHSL(Yr),this.setHSL(Yr.h+e,Yr.s+n,Yr.l+s)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,n){return this.r=e.r+n.r,this.g=e.g+n.g,this.b=e.b+n.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,n){return this.r+=(e.r-this.r)*n,this.g+=(e.g-this.g)*n,this.b+=(e.b-this.b)*n,this}lerpColors(e,n,s){return this.r=e.r+(n.r-e.r)*s,this.g=e.g+(n.g-e.g)*s,this.b=e.b+(n.b-e.b)*s,this}lerpHSL(e,n){this.getHSL(Yr),e.getHSL(xl);const s=ku(Yr.h,xl.h,n),a=ku(Yr.s,xl.s,n),l=ku(Yr.l,xl.l,n);return this.setHSL(s,a,l),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const n=this.r,s=this.g,a=this.b,l=e.elements;return this.r=l[0]*n+l[3]*s+l[6]*a,this.g=l[1]*n+l[4]*s+l[7]*a,this.b=l[2]*n+l[5]*s+l[8]*a,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,n=0){return this.r=e[n],this.g=e[n+1],this.b=e[n+2],this}toArray(e=[],n=0){return e[n]=this.r,e[n+1]=this.g,e[n+2]=this.b,e}fromBufferAttribute(e,n){return this.r=e.getX(n),this.g=e.getY(n),this.b=e.getZ(n),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Xn=new Ct;Ct.NAMES=T0;class Mf{constructor(e,n=1,s=1e3){this.isFog=!0,this.name="",this.color=new Ct(e),this.near=n,this.far=s}clone(){return new Mf(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}}class Tv extends Kn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new ts,this.environmentIntensity=1,this.environmentRotation=new ts,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,n){return super.copy(e,n),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const n=super.toJSON(e);return this.fog!==null&&(n.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(n.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(n.object.backgroundIntensity=this.backgroundIntensity),n.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(n.object.environmentIntensity=this.environmentIntensity),n.object.environmentRotation=this.environmentRotation.toArray(),n}}const zi=new J,gr=new J,ju=new J,_r=new J,io=new J,ro=new J,Tm=new J,Yu=new J,qu=new J,$u=new J,Ku=new gn,Zu=new gn,Ju=new gn;class Vi{constructor(e=new J,n=new J,s=new J){this.a=e,this.b=n,this.c=s}static getNormal(e,n,s,a){a.subVectors(s,n),zi.subVectors(e,n),a.cross(zi);const l=a.lengthSq();return l>0?a.multiplyScalar(1/Math.sqrt(l)):a.set(0,0,0)}static getBarycoord(e,n,s,a,l){zi.subVectors(a,n),gr.subVectors(s,n),ju.subVectors(e,n);const u=zi.dot(zi),f=zi.dot(gr),p=zi.dot(ju),m=gr.dot(gr),x=gr.dot(ju),y=u*m-f*f;if(y===0)return l.set(0,0,0),null;const g=1/y,S=(m*p-f*x)*g,T=(u*x-f*p)*g;return l.set(1-S-T,T,S)}static containsPoint(e,n,s,a){return this.getBarycoord(e,n,s,a,_r)===null?!1:_r.x>=0&&_r.y>=0&&_r.x+_r.y<=1}static getInterpolation(e,n,s,a,l,u,f,p){return this.getBarycoord(e,n,s,a,_r)===null?(p.x=0,p.y=0,"z"in p&&(p.z=0),"w"in p&&(p.w=0),null):(p.setScalar(0),p.addScaledVector(l,_r.x),p.addScaledVector(u,_r.y),p.addScaledVector(f,_r.z),p)}static getInterpolatedAttribute(e,n,s,a,l,u){return Ku.setScalar(0),Zu.setScalar(0),Ju.setScalar(0),Ku.fromBufferAttribute(e,n),Zu.fromBufferAttribute(e,s),Ju.fromBufferAttribute(e,a),u.setScalar(0),u.addScaledVector(Ku,l.x),u.addScaledVector(Zu,l.y),u.addScaledVector(Ju,l.z),u}static isFrontFacing(e,n,s,a){return zi.subVectors(s,n),gr.subVectors(e,n),zi.cross(gr).dot(a)<0}set(e,n,s){return this.a.copy(e),this.b.copy(n),this.c.copy(s),this}setFromPointsAndIndices(e,n,s,a){return this.a.copy(e[n]),this.b.copy(e[s]),this.c.copy(e[a]),this}setFromAttributeAndIndices(e,n,s,a){return this.a.fromBufferAttribute(e,n),this.b.fromBufferAttribute(e,s),this.c.fromBufferAttribute(e,a),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return zi.subVectors(this.c,this.b),gr.subVectors(this.a,this.b),zi.cross(gr).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Vi.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,n){return Vi.getBarycoord(e,this.a,this.b,this.c,n)}getInterpolation(e,n,s,a,l){return Vi.getInterpolation(e,this.a,this.b,this.c,n,s,a,l)}containsPoint(e){return Vi.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Vi.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,n){const s=this.a,a=this.b,l=this.c;let u,f;io.subVectors(a,s),ro.subVectors(l,s),Yu.subVectors(e,s);const p=io.dot(Yu),m=ro.dot(Yu);if(p<=0&&m<=0)return n.copy(s);qu.subVectors(e,a);const x=io.dot(qu),y=ro.dot(qu);if(x>=0&&y<=x)return n.copy(a);const g=p*y-x*m;if(g<=0&&p>=0&&x<=0)return u=p/(p-x),n.copy(s).addScaledVector(io,u);$u.subVectors(e,l);const S=io.dot($u),T=ro.dot($u);if(T>=0&&S<=T)return n.copy(l);const R=S*m-p*T;if(R<=0&&m>=0&&T<=0)return f=m/(m-T),n.copy(s).addScaledVector(ro,f);const _=x*T-S*y;if(_<=0&&y-x>=0&&S-T>=0)return Tm.subVectors(l,a),f=(y-x)/(y-x+(S-T)),n.copy(a).addScaledVector(Tm,f);const v=1/(_+R+g);return u=R*v,f=g*v,n.copy(s).addScaledVector(io,u).addScaledVector(ro,f)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}class pa{constructor(e=new J(1/0,1/0,1/0),n=new J(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=n}set(e,n){return this.min.copy(e),this.max.copy(n),this}setFromArray(e){this.makeEmpty();for(let n=0,s=e.length;n<s;n+=3)this.expandByPoint(Hi.fromArray(e,n));return this}setFromBufferAttribute(e){this.makeEmpty();for(let n=0,s=e.count;n<s;n++)this.expandByPoint(Hi.fromBufferAttribute(e,n));return this}setFromPoints(e){this.makeEmpty();for(let n=0,s=e.length;n<s;n++)this.expandByPoint(e[n]);return this}setFromCenterAndSize(e,n){const s=Hi.copy(n).multiplyScalar(.5);return this.min.copy(e).sub(s),this.max.copy(e).add(s),this}setFromObject(e,n=!1){return this.makeEmpty(),this.expandByObject(e,n)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,n=!1){e.updateWorldMatrix(!1,!1);const s=e.geometry;if(s!==void 0){const l=s.getAttribute("position");if(n===!0&&l!==void 0&&e.isInstancedMesh!==!0)for(let u=0,f=l.count;u<f;u++)e.isMesh===!0?e.getVertexPosition(u,Hi):Hi.fromBufferAttribute(l,u),Hi.applyMatrix4(e.matrixWorld),this.expandByPoint(Hi);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),yl.copy(e.boundingBox)):(s.boundingBox===null&&s.computeBoundingBox(),yl.copy(s.boundingBox)),yl.applyMatrix4(e.matrixWorld),this.union(yl)}const a=e.children;for(let l=0,u=a.length;l<u;l++)this.expandByObject(a[l],n);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,n){return n.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Hi),Hi.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let n,s;return e.normal.x>0?(n=e.normal.x*this.min.x,s=e.normal.x*this.max.x):(n=e.normal.x*this.max.x,s=e.normal.x*this.min.x),e.normal.y>0?(n+=e.normal.y*this.min.y,s+=e.normal.y*this.max.y):(n+=e.normal.y*this.max.y,s+=e.normal.y*this.min.y),e.normal.z>0?(n+=e.normal.z*this.min.z,s+=e.normal.z*this.max.z):(n+=e.normal.z*this.max.z,s+=e.normal.z*this.min.z),n<=-e.constant&&s>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(ta),Sl.subVectors(this.max,ta),so.subVectors(e.a,ta),oo.subVectors(e.b,ta),ao.subVectors(e.c,ta),qr.subVectors(oo,so),$r.subVectors(ao,oo),ms.subVectors(so,ao);let n=[0,-qr.z,qr.y,0,-$r.z,$r.y,0,-ms.z,ms.y,qr.z,0,-qr.x,$r.z,0,-$r.x,ms.z,0,-ms.x,-qr.y,qr.x,0,-$r.y,$r.x,0,-ms.y,ms.x,0];return!Qu(n,so,oo,ao,Sl)||(n=[1,0,0,0,1,0,0,0,1],!Qu(n,so,oo,ao,Sl))?!1:(Ml.crossVectors(qr,$r),n=[Ml.x,Ml.y,Ml.z],Qu(n,so,oo,ao,Sl))}clampPoint(e,n){return n.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Hi).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Hi).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(vr[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),vr[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),vr[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),vr[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),vr[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),vr[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),vr[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),vr[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(vr),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const vr=[new J,new J,new J,new J,new J,new J,new J,new J],Hi=new J,yl=new pa,so=new J,oo=new J,ao=new J,qr=new J,$r=new J,ms=new J,ta=new J,Sl=new J,Ml=new J,gs=new J;function Qu(r,e,n,s,a){for(let l=0,u=r.length-3;l<=u;l+=3){gs.fromArray(r,l);const f=a.x*Math.abs(gs.x)+a.y*Math.abs(gs.y)+a.z*Math.abs(gs.z),p=e.dot(gs),m=n.dot(gs),x=s.dot(gs);if(Math.max(-Math.max(p,m,x),Math.min(p,m,x))>f)return!1}return!0}const En=new J,El=new Ht;let Av=0;class nr extends Cs{constructor(e,n,s=!1){if(super(),Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:Av++}),this.name="",this.array=e,this.itemSize=n,this.count=e!==void 0?e.length/n:0,this.normalized=s,this.usage=dm,this.updateRanges=[],this.gpuType=Ji,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,n){this.updateRanges.push({start:e,count:n})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,n,s){e*=this.itemSize,s*=n.itemSize;for(let a=0,l=this.itemSize;a<l;a++)this.array[e+a]=n.array[s+a];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let n=0,s=this.count;n<s;n++)El.fromBufferAttribute(this,n),El.applyMatrix3(e),this.setXY(n,El.x,El.y);else if(this.itemSize===3)for(let n=0,s=this.count;n<s;n++)En.fromBufferAttribute(this,n),En.applyMatrix3(e),this.setXYZ(n,En.x,En.y,En.z);return this}applyMatrix4(e){for(let n=0,s=this.count;n<s;n++)En.fromBufferAttribute(this,n),En.applyMatrix4(e),this.setXYZ(n,En.x,En.y,En.z);return this}applyNormalMatrix(e){for(let n=0,s=this.count;n<s;n++)En.fromBufferAttribute(this,n),En.applyNormalMatrix(e),this.setXYZ(n,En.x,En.y,En.z);return this}transformDirection(e){for(let n=0,s=this.count;n<s;n++)En.fromBufferAttribute(this,n),En.transformDirection(e),this.setXYZ(n,En.x,En.y,En.z);return this}set(e,n=0){return this.array.set(e,n),this}getComponent(e,n){let s=this.array[e*this.itemSize+n];return this.normalized&&(s=Qo(s,this.array)),s}setComponent(e,n,s){return this.normalized&&(s=ui(s,this.array)),this.array[e*this.itemSize+n]=s,this}getX(e){let n=this.array[e*this.itemSize];return this.normalized&&(n=Qo(n,this.array)),n}setX(e,n){return this.normalized&&(n=ui(n,this.array)),this.array[e*this.itemSize]=n,this}getY(e){let n=this.array[e*this.itemSize+1];return this.normalized&&(n=Qo(n,this.array)),n}setY(e,n){return this.normalized&&(n=ui(n,this.array)),this.array[e*this.itemSize+1]=n,this}getZ(e){let n=this.array[e*this.itemSize+2];return this.normalized&&(n=Qo(n,this.array)),n}setZ(e,n){return this.normalized&&(n=ui(n,this.array)),this.array[e*this.itemSize+2]=n,this}getW(e){let n=this.array[e*this.itemSize+3];return this.normalized&&(n=Qo(n,this.array)),n}setW(e,n){return this.normalized&&(n=ui(n,this.array)),this.array[e*this.itemSize+3]=n,this}setXY(e,n,s){return e*=this.itemSize,this.normalized&&(n=ui(n,this.array),s=ui(s,this.array)),this.array[e+0]=n,this.array[e+1]=s,this}setXYZ(e,n,s,a){return e*=this.itemSize,this.normalized&&(n=ui(n,this.array),s=ui(s,this.array),a=ui(a,this.array)),this.array[e+0]=n,this.array[e+1]=s,this.array[e+2]=a,this}setXYZW(e,n,s,a,l){return e*=this.itemSize,this.normalized&&(n=ui(n,this.array),s=ui(s,this.array),a=ui(a,this.array),l=ui(l,this.array)),this.array[e+0]=n,this.array[e+1]=s,this.array[e+2]=a,this.array[e+3]=l,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==dm&&(e.usage=this.usage),e}dispose(){this.dispatchEvent({type:"dispose"})}}class A0 extends nr{constructor(e,n,s){super(new Uint16Array(e),n,s)}}class b0 extends nr{constructor(e,n,s){super(new Uint32Array(e),n,s)}}class yn extends nr{constructor(e,n,s){super(new Float32Array(e),n,s)}}const bv=new pa,na=new J,ed=new J;class Ef{constructor(e=new J,n=-1){this.isSphere=!0,this.center=e,this.radius=n}set(e,n){return this.center.copy(e),this.radius=n,this}setFromPoints(e,n){const s=this.center;n!==void 0?s.copy(n):bv.setFromPoints(e).getCenter(s);let a=0;for(let l=0,u=e.length;l<u;l++)a=Math.max(a,s.distanceToSquared(e[l]));return this.radius=Math.sqrt(a),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const n=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=n*n}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,n){const s=this.center.distanceToSquared(e);return n.copy(e),s>this.radius*this.radius&&(n.sub(this.center).normalize(),n.multiplyScalar(this.radius).add(this.center)),n}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;na.subVectors(e,this.center);const n=na.lengthSq();if(n>this.radius*this.radius){const s=Math.sqrt(n),a=(s-this.radius)*.5;this.center.addScaledVector(na,a/s),this.radius+=a}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(ed.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(na.copy(e.center).add(ed)),this.expandByPoint(na.copy(e.center).sub(ed))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}let Cv=0;const Ci=new _n,td=new Kn,lo=new J,vi=new pa,ia=new pa,In=new J;class Si extends Cs{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Cv++}),this.uuid=ha(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(av(e)?b0:A0)(e,1):this.index=e,this}setIndirect(e,n=0){return this.indirect=e,this.indirectOffset=n,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,n){return this.attributes[e]=n,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,n,s=0){this.groups.push({start:e,count:n,materialIndex:s})}clearGroups(){this.groups=[]}setDrawRange(e,n){this.drawRange.start=e,this.drawRange.count=n}applyMatrix4(e){const n=this.attributes.position;n!==void 0&&(n.applyMatrix4(e),n.needsUpdate=!0);const s=this.attributes.normal;if(s!==void 0){const l=new wt().getNormalMatrix(e);s.applyNormalMatrix(l),s.needsUpdate=!0}const a=this.attributes.tangent;return a!==void 0&&(a.transformDirection(e),a.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Ci.makeRotationFromQuaternion(e),this.applyMatrix4(Ci),this}rotateX(e){return Ci.makeRotationX(e),this.applyMatrix4(Ci),this}rotateY(e){return Ci.makeRotationY(e),this.applyMatrix4(Ci),this}rotateZ(e){return Ci.makeRotationZ(e),this.applyMatrix4(Ci),this}translate(e,n,s){return Ci.makeTranslation(e,n,s),this.applyMatrix4(Ci),this}scale(e,n,s){return Ci.makeScale(e,n,s),this.applyMatrix4(Ci),this}lookAt(e){return td.lookAt(e),td.updateMatrix(),this.applyMatrix4(td.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(lo).negate(),this.translate(lo.x,lo.y,lo.z),this}setFromPoints(e){const n=this.getAttribute("position");if(n===void 0){const s=[];for(let a=0,l=e.length;a<l;a++){const u=e[a];s.push(u.x,u.y,u.z||0)}this.setAttribute("position",new yn(s,3))}else{const s=Math.min(e.length,n.count);for(let a=0;a<s;a++){const l=e[a];n.setXYZ(a,l.x,l.y,l.z||0)}e.length>n.count&&xt("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),n.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new pa);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Xt("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new J(-1/0,-1/0,-1/0),new J(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),n)for(let s=0,a=n.length;s<a;s++){const l=n[s];vi.setFromBufferAttribute(l),this.morphTargetsRelative?(In.addVectors(this.boundingBox.min,vi.min),this.boundingBox.expandByPoint(In),In.addVectors(this.boundingBox.max,vi.max),this.boundingBox.expandByPoint(In)):(this.boundingBox.expandByPoint(vi.min),this.boundingBox.expandByPoint(vi.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&Xt('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Ef);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Xt("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new J,1/0);return}if(e){const s=this.boundingSphere.center;if(vi.setFromBufferAttribute(e),n)for(let l=0,u=n.length;l<u;l++){const f=n[l];ia.setFromBufferAttribute(f),this.morphTargetsRelative?(In.addVectors(vi.min,ia.min),vi.expandByPoint(In),In.addVectors(vi.max,ia.max),vi.expandByPoint(In)):(vi.expandByPoint(ia.min),vi.expandByPoint(ia.max))}vi.getCenter(s);let a=0;for(let l=0,u=e.count;l<u;l++)In.fromBufferAttribute(e,l),a=Math.max(a,s.distanceToSquared(In));if(n)for(let l=0,u=n.length;l<u;l++){const f=n[l],p=this.morphTargetsRelative;for(let m=0,x=f.count;m<x;m++)In.fromBufferAttribute(f,m),p&&(lo.fromBufferAttribute(e,m),In.add(lo)),a=Math.max(a,s.distanceToSquared(In))}this.boundingSphere.radius=Math.sqrt(a),isNaN(this.boundingSphere.radius)&&Xt('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,n=this.attributes;if(e===null||n.position===void 0||n.normal===void 0||n.uv===void 0){Xt("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const s=n.position,a=n.normal,l=n.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new nr(new Float32Array(4*s.count),4));const u=this.getAttribute("tangent"),f=[],p=[];for(let w=0;w<s.count;w++)f[w]=new J,p[w]=new J;const m=new J,x=new J,y=new J,g=new Ht,S=new Ht,T=new Ht,R=new J,_=new J;function v(w,I,j){m.fromBufferAttribute(s,w),x.fromBufferAttribute(s,I),y.fromBufferAttribute(s,j),g.fromBufferAttribute(l,w),S.fromBufferAttribute(l,I),T.fromBufferAttribute(l,j),x.sub(m),y.sub(m),S.sub(g),T.sub(g);const O=1/(S.x*T.y-T.x*S.y);isFinite(O)&&(R.copy(x).multiplyScalar(T.y).addScaledVector(y,-S.y).multiplyScalar(O),_.copy(y).multiplyScalar(S.x).addScaledVector(x,-T.x).multiplyScalar(O),f[w].add(R),f[I].add(R),f[j].add(R),p[w].add(_),p[I].add(_),p[j].add(_))}let b=this.groups;b.length===0&&(b=[{start:0,count:e.count}]);for(let w=0,I=b.length;w<I;++w){const j=b[w],O=j.start,q=j.count;for(let le=O,me=O+q;le<me;le+=3)v(e.getX(le+0),e.getX(le+1),e.getX(le+2))}const L=new J,P=new J,z=new J,D=new J;function k(w){z.fromBufferAttribute(a,w),D.copy(z);const I=f[w];L.copy(I),L.sub(z.multiplyScalar(z.dot(I))).normalize(),P.crossVectors(D,I);const O=P.dot(p[w])<0?-1:1;u.setXYZW(w,L.x,L.y,L.z,O)}for(let w=0,I=b.length;w<I;++w){const j=b[w],O=j.start,q=j.count;for(let le=O,me=O+q;le<me;le+=3)k(e.getX(le+0)),k(e.getX(le+1)),k(e.getX(le+2))}}computeVertexNormals(){const e=this.index,n=this.getAttribute("position");if(n!==void 0){let s=this.getAttribute("normal");if(s===void 0)s=new nr(new Float32Array(n.count*3),3),this.setAttribute("normal",s);else for(let g=0,S=s.count;g<S;g++)s.setXYZ(g,0,0,0);const a=new J,l=new J,u=new J,f=new J,p=new J,m=new J,x=new J,y=new J;if(e)for(let g=0,S=e.count;g<S;g+=3){const T=e.getX(g+0),R=e.getX(g+1),_=e.getX(g+2);a.fromBufferAttribute(n,T),l.fromBufferAttribute(n,R),u.fromBufferAttribute(n,_),x.subVectors(u,l),y.subVectors(a,l),x.cross(y),f.fromBufferAttribute(s,T),p.fromBufferAttribute(s,R),m.fromBufferAttribute(s,_),f.add(x),p.add(x),m.add(x),s.setXYZ(T,f.x,f.y,f.z),s.setXYZ(R,p.x,p.y,p.z),s.setXYZ(_,m.x,m.y,m.z)}else for(let g=0,S=n.count;g<S;g+=3)a.fromBufferAttribute(n,g+0),l.fromBufferAttribute(n,g+1),u.fromBufferAttribute(n,g+2),x.subVectors(u,l),y.subVectors(a,l),x.cross(y),s.setXYZ(g+0,x.x,x.y,x.z),s.setXYZ(g+1,x.x,x.y,x.z),s.setXYZ(g+2,x.x,x.y,x.z);this.normalizeNormals(),s.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let n=0,s=e.count;n<s;n++)In.fromBufferAttribute(e,n),In.normalize(),e.setXYZ(n,In.x,In.y,In.z)}toNonIndexed(){function e(f,p){const m=f.array,x=f.itemSize,y=f.normalized,g=new m.constructor(p.length*x);let S=0,T=0;for(let R=0,_=p.length;R<_;R++){f.isInterleavedBufferAttribute?S=p[R]*f.data.stride+f.offset:S=p[R]*x;for(let v=0;v<x;v++)g[T++]=m[S++]}return new nr(g,x,y)}if(this.index===null)return xt("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const n=new Si,s=this.index.array,a=this.attributes;for(const f in a){const p=a[f],m=e(p,s);n.setAttribute(f,m)}const l=this.morphAttributes;for(const f in l){const p=[],m=l[f];for(let x=0,y=m.length;x<y;x++){const g=m[x],S=e(g,s);p.push(S)}n.morphAttributes[f]=p}n.morphTargetsRelative=this.morphTargetsRelative;const u=this.groups;for(let f=0,p=u.length;f<p;f++){const m=u[f];n.addGroup(m.start,m.count,m.materialIndex)}return n}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const p=this.parameters;for(const m in p)p[m]!==void 0&&(e[m]=p[m]);return e}e.data={attributes:{}};const n=this.index;n!==null&&(e.data.index={type:n.array.constructor.name,array:Array.prototype.slice.call(n.array)});const s=this.attributes;for(const p in s){const m=s[p];e.data.attributes[p]=m.toJSON(e.data)}const a={};let l=!1;for(const p in this.morphAttributes){const m=this.morphAttributes[p],x=[];for(let y=0,g=m.length;y<g;y++){const S=m[y];x.push(S.toJSON(e.data))}x.length>0&&(a[p]=x,l=!0)}l&&(e.data.morphAttributes=a,e.data.morphTargetsRelative=this.morphTargetsRelative);const u=this.groups;u.length>0&&(e.data.groups=JSON.parse(JSON.stringify(u)));const f=this.boundingSphere;return f!==null&&(e.data.boundingSphere=f.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const n={};this.name=e.name;const s=e.index;s!==null&&this.setIndex(s.clone());const a=e.attributes;for(const m in a){const x=a[m];this.setAttribute(m,x.clone(n))}const l=e.morphAttributes;for(const m in l){const x=[],y=l[m];for(let g=0,S=y.length;g<S;g++)x.push(y[g].clone(n));this.morphAttributes[m]=x}this.morphTargetsRelative=e.morphTargetsRelative;const u=e.groups;for(let m=0,x=u.length;m<x;m++){const y=u[m];this.addGroup(y.start,y.count,y.materialIndex)}const f=e.boundingBox;f!==null&&(this.boundingBox=f.clone());const p=e.boundingSphere;return p!==null&&(this.boundingSphere=p.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}let Rv=0;class ma extends Cs{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Rv++}),this.uuid=ha(),this.name="",this.type="Material",this.blending=ho,this.side=es,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=md,this.blendDst=gd,this.blendEquation=Ss,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Ct(0,0,0),this.blendAlpha=0,this.depthFunc=mo,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=um,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Js,this.stencilZFail=Js,this.stencilZPass=Js,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const n in e){const s=e[n];if(s===void 0){xt(`Material: parameter '${n}' has value of undefined.`);continue}const a=this[n];if(a===void 0){xt(`Material: '${n}' is not a property of THREE.${this.type}.`);continue}a&&a.isColor?a.set(s):a&&a.isVector3&&s&&s.isVector3?a.copy(s):this[n]=s}}toJSON(e){const n=e===void 0||typeof e=="string";n&&(e={textures:{},images:{}});const s={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.color&&this.color.isColor&&(s.color=this.color.getHex()),this.roughness!==void 0&&(s.roughness=this.roughness),this.metalness!==void 0&&(s.metalness=this.metalness),this.sheen!==void 0&&(s.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(s.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(s.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(s.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(s.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(s.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(s.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(s.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(s.shininess=this.shininess),this.clearcoat!==void 0&&(s.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(s.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(s.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(s.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(s.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,s.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(s.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(s.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(s.dispersion=this.dispersion),this.iridescence!==void 0&&(s.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(s.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(s.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(s.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(s.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(s.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(s.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(s.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(s.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(s.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(s.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(s.lightMap=this.lightMap.toJSON(e).uuid,s.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(s.aoMap=this.aoMap.toJSON(e).uuid,s.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(s.bumpMap=this.bumpMap.toJSON(e).uuid,s.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(s.normalMap=this.normalMap.toJSON(e).uuid,s.normalMapType=this.normalMapType,s.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(s.displacementMap=this.displacementMap.toJSON(e).uuid,s.displacementScale=this.displacementScale,s.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(s.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(s.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(s.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(s.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(s.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(s.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(s.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(s.combine=this.combine)),this.envMapRotation!==void 0&&(s.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(s.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(s.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(s.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(s.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(s.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(s.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(s.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(s.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(s.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(s.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(s.size=this.size),this.shadowSide!==null&&(s.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(s.sizeAttenuation=this.sizeAttenuation),this.blending!==ho&&(s.blending=this.blending),this.side!==es&&(s.side=this.side),this.vertexColors===!0&&(s.vertexColors=!0),this.opacity<1&&(s.opacity=this.opacity),this.transparent===!0&&(s.transparent=!0),this.blendSrc!==md&&(s.blendSrc=this.blendSrc),this.blendDst!==gd&&(s.blendDst=this.blendDst),this.blendEquation!==Ss&&(s.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(s.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(s.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(s.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(s.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(s.blendAlpha=this.blendAlpha),this.depthFunc!==mo&&(s.depthFunc=this.depthFunc),this.depthTest===!1&&(s.depthTest=this.depthTest),this.depthWrite===!1&&(s.depthWrite=this.depthWrite),this.colorWrite===!1&&(s.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(s.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==um&&(s.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(s.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(s.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Js&&(s.stencilFail=this.stencilFail),this.stencilZFail!==Js&&(s.stencilZFail=this.stencilZFail),this.stencilZPass!==Js&&(s.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(s.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(s.rotation=this.rotation),this.polygonOffset===!0&&(s.polygonOffset=!0),this.polygonOffsetFactor!==0&&(s.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(s.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(s.linewidth=this.linewidth),this.dashSize!==void 0&&(s.dashSize=this.dashSize),this.gapSize!==void 0&&(s.gapSize=this.gapSize),this.scale!==void 0&&(s.scale=this.scale),this.dithering===!0&&(s.dithering=!0),this.alphaTest>0&&(s.alphaTest=this.alphaTest),this.alphaHash===!0&&(s.alphaHash=!0),this.alphaToCoverage===!0&&(s.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(s.premultipliedAlpha=!0),this.forceSinglePass===!0&&(s.forceSinglePass=!0),this.allowOverride===!1&&(s.allowOverride=!1),this.wireframe===!0&&(s.wireframe=!0),this.wireframeLinewidth>1&&(s.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(s.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(s.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(s.flatShading=!0),this.visible===!1&&(s.visible=!1),this.toneMapped===!1&&(s.toneMapped=!1),this.fog===!1&&(s.fog=!1),Object.keys(this.userData).length>0&&(s.userData=this.userData);function a(l){const u=[];for(const f in l){const p=l[f];delete p.metadata,u.push(p)}return u}if(n){const l=a(e.textures),u=a(e.images);l.length>0&&(s.textures=l),u.length>0&&(s.images=u)}return s}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const n=e.clippingPlanes;let s=null;if(n!==null){const a=n.length;s=new Array(a);for(let l=0;l!==a;++l)s[l]=n[l].clone()}return this.clippingPlanes=s,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}const xr=new J,nd=new J,wl=new J,Kr=new J,id=new J,Tl=new J,rd=new J;class C0{constructor(e=new J,n=new J(0,0,-1)){this.origin=e,this.direction=n}set(e,n){return this.origin.copy(e),this.direction.copy(n),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,n){return n.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,xr)),this}closestPointToPoint(e,n){n.subVectors(e,this.origin);const s=n.dot(this.direction);return s<0?n.copy(this.origin):n.copy(this.origin).addScaledVector(this.direction,s)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const n=xr.subVectors(e,this.origin).dot(this.direction);return n<0?this.origin.distanceToSquared(e):(xr.copy(this.origin).addScaledVector(this.direction,n),xr.distanceToSquared(e))}distanceSqToSegment(e,n,s,a){nd.copy(e).add(n).multiplyScalar(.5),wl.copy(n).sub(e).normalize(),Kr.copy(this.origin).sub(nd);const l=e.distanceTo(n)*.5,u=-this.direction.dot(wl),f=Kr.dot(this.direction),p=-Kr.dot(wl),m=Kr.lengthSq(),x=Math.abs(1-u*u);let y,g,S,T;if(x>0)if(y=u*p-f,g=u*f-p,T=l*x,y>=0)if(g>=-T)if(g<=T){const R=1/x;y*=R,g*=R,S=y*(y+u*g+2*f)+g*(u*y+g+2*p)+m}else g=l,y=Math.max(0,-(u*g+f)),S=-y*y+g*(g+2*p)+m;else g=-l,y=Math.max(0,-(u*g+f)),S=-y*y+g*(g+2*p)+m;else g<=-T?(y=Math.max(0,-(-u*l+f)),g=y>0?-l:Math.min(Math.max(-l,-p),l),S=-y*y+g*(g+2*p)+m):g<=T?(y=0,g=Math.min(Math.max(-l,-p),l),S=g*(g+2*p)+m):(y=Math.max(0,-(u*l+f)),g=y>0?l:Math.min(Math.max(-l,-p),l),S=-y*y+g*(g+2*p)+m);else g=u>0?-l:l,y=Math.max(0,-(u*g+f)),S=-y*y+g*(g+2*p)+m;return s&&s.copy(this.origin).addScaledVector(this.direction,y),a&&a.copy(nd).addScaledVector(wl,g),S}intersectSphere(e,n){xr.subVectors(e.center,this.origin);const s=xr.dot(this.direction),a=xr.dot(xr)-s*s,l=e.radius*e.radius;if(a>l)return null;const u=Math.sqrt(l-a),f=s-u,p=s+u;return p<0?null:f<0?this.at(p,n):this.at(f,n)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const n=e.normal.dot(this.direction);if(n===0)return e.distanceToPoint(this.origin)===0?0:null;const s=-(this.origin.dot(e.normal)+e.constant)/n;return s>=0?s:null}intersectPlane(e,n){const s=this.distanceToPlane(e);return s===null?null:this.at(s,n)}intersectsPlane(e){const n=e.distanceToPoint(this.origin);return n===0||e.normal.dot(this.direction)*n<0}intersectBox(e,n){let s,a,l,u,f,p;const m=1/this.direction.x,x=1/this.direction.y,y=1/this.direction.z,g=this.origin;return m>=0?(s=(e.min.x-g.x)*m,a=(e.max.x-g.x)*m):(s=(e.max.x-g.x)*m,a=(e.min.x-g.x)*m),x>=0?(l=(e.min.y-g.y)*x,u=(e.max.y-g.y)*x):(l=(e.max.y-g.y)*x,u=(e.min.y-g.y)*x),s>u||l>a||((l>s||isNaN(s))&&(s=l),(u<a||isNaN(a))&&(a=u),y>=0?(f=(e.min.z-g.z)*y,p=(e.max.z-g.z)*y):(f=(e.max.z-g.z)*y,p=(e.min.z-g.z)*y),s>p||f>a)||((f>s||s!==s)&&(s=f),(p<a||a!==a)&&(a=p),a<0)?null:this.at(s>=0?s:a,n)}intersectsBox(e){return this.intersectBox(e,xr)!==null}intersectTriangle(e,n,s,a,l){id.subVectors(n,e),Tl.subVectors(s,e),rd.crossVectors(id,Tl);let u=this.direction.dot(rd),f;if(u>0){if(a)return null;f=1}else if(u<0)f=-1,u=-u;else return null;Kr.subVectors(this.origin,e);const p=f*this.direction.dot(Tl.crossVectors(Kr,Tl));if(p<0)return null;const m=f*this.direction.dot(id.cross(Kr));if(m<0||p+m>u)return null;const x=-f*Kr.dot(rd);return x<0?null:this.at(x/u,l)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class ql extends ma{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Ct(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new ts,this.combine=l0,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Am=new _n,_s=new C0,Al=new Ef,bm=new J,bl=new J,Cl=new J,Rl=new J,sd=new J,Pl=new J,Cm=new J,Ll=new J;class Fe extends Kn{constructor(e=new Si,n=new ql){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=n,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const n=this.geometry.morphAttributes,s=Object.keys(n);if(s.length>0){const a=n[s[0]];if(a!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let l=0,u=a.length;l<u;l++){const f=a[l].name||String(l);this.morphTargetInfluences.push(0),this.morphTargetDictionary[f]=l}}}}getVertexPosition(e,n){const s=this.geometry,a=s.attributes.position,l=s.morphAttributes.position,u=s.morphTargetsRelative;n.fromBufferAttribute(a,e);const f=this.morphTargetInfluences;if(l&&f){Pl.set(0,0,0);for(let p=0,m=l.length;p<m;p++){const x=f[p],y=l[p];x!==0&&(sd.fromBufferAttribute(y,e),u?Pl.addScaledVector(sd,x):Pl.addScaledVector(sd.sub(n),x))}n.add(Pl)}return n}raycast(e,n){const s=this.geometry,a=this.material,l=this.matrixWorld;a!==void 0&&(s.boundingSphere===null&&s.computeBoundingSphere(),Al.copy(s.boundingSphere),Al.applyMatrix4(l),_s.copy(e.ray).recast(e.near),!(Al.containsPoint(_s.origin)===!1&&(_s.intersectSphere(Al,bm)===null||_s.origin.distanceToSquared(bm)>(e.far-e.near)**2))&&(Am.copy(l).invert(),_s.copy(e.ray).applyMatrix4(Am),!(s.boundingBox!==null&&_s.intersectsBox(s.boundingBox)===!1)&&this._computeIntersections(e,n,_s)))}_computeIntersections(e,n,s){let a;const l=this.geometry,u=this.material,f=l.index,p=l.attributes.position,m=l.attributes.uv,x=l.attributes.uv1,y=l.attributes.normal,g=l.groups,S=l.drawRange;if(f!==null)if(Array.isArray(u))for(let T=0,R=g.length;T<R;T++){const _=g[T],v=u[_.materialIndex],b=Math.max(_.start,S.start),L=Math.min(f.count,Math.min(_.start+_.count,S.start+S.count));for(let P=b,z=L;P<z;P+=3){const D=f.getX(P),k=f.getX(P+1),w=f.getX(P+2);a=Dl(this,v,e,s,m,x,y,D,k,w),a&&(a.faceIndex=Math.floor(P/3),a.face.materialIndex=_.materialIndex,n.push(a))}}else{const T=Math.max(0,S.start),R=Math.min(f.count,S.start+S.count);for(let _=T,v=R;_<v;_+=3){const b=f.getX(_),L=f.getX(_+1),P=f.getX(_+2);a=Dl(this,u,e,s,m,x,y,b,L,P),a&&(a.faceIndex=Math.floor(_/3),n.push(a))}}else if(p!==void 0)if(Array.isArray(u))for(let T=0,R=g.length;T<R;T++){const _=g[T],v=u[_.materialIndex],b=Math.max(_.start,S.start),L=Math.min(p.count,Math.min(_.start+_.count,S.start+S.count));for(let P=b,z=L;P<z;P+=3){const D=P,k=P+1,w=P+2;a=Dl(this,v,e,s,m,x,y,D,k,w),a&&(a.faceIndex=Math.floor(P/3),a.face.materialIndex=_.materialIndex,n.push(a))}}else{const T=Math.max(0,S.start),R=Math.min(p.count,S.start+S.count);for(let _=T,v=R;_<v;_+=3){const b=_,L=_+1,P=_+2;a=Dl(this,u,e,s,m,x,y,b,L,P),a&&(a.faceIndex=Math.floor(_/3),n.push(a))}}}}function Pv(r,e,n,s,a,l,u,f){let p;if(e.side===fi?p=s.intersectTriangle(u,l,a,!0,f):p=s.intersectTriangle(a,l,u,e.side===es,f),p===null)return null;Ll.copy(f),Ll.applyMatrix4(r.matrixWorld);const m=n.ray.origin.distanceTo(Ll);return m<n.near||m>n.far?null:{distance:m,point:Ll.clone(),object:r}}function Dl(r,e,n,s,a,l,u,f,p,m){r.getVertexPosition(f,bl),r.getVertexPosition(p,Cl),r.getVertexPosition(m,Rl);const x=Pv(r,e,n,s,bl,Cl,Rl,Cm);if(x){const y=new J;Vi.getBarycoord(Cm,bl,Cl,Rl,y),a&&(x.uv=Vi.getInterpolatedAttribute(a,f,p,m,y,new Ht)),l&&(x.uv1=Vi.getInterpolatedAttribute(l,f,p,m,y,new Ht)),u&&(x.normal=Vi.getInterpolatedAttribute(u,f,p,m,y,new J),x.normal.dot(s.direction)>0&&x.normal.multiplyScalar(-1));const g={a:f,b:p,c:m,normal:new J,materialIndex:0};Vi.getNormal(bl,Cl,Rl,g.normal),x.face=g,x.barycoord=y}return x}class Lv extends $n{constructor(e=null,n=1,s=1,a,l,u,f,p,m=Bn,x=Bn,y,g){super(null,u,f,p,m,x,a,l,y,g),this.isDataTexture=!0,this.image={data:e,width:n,height:s},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const od=new J,Dv=new J,Iv=new wt;class xs{constructor(e=new J(1,0,0),n=0){this.isPlane=!0,this.normal=e,this.constant=n}set(e,n){return this.normal.copy(e),this.constant=n,this}setComponents(e,n,s,a){return this.normal.set(e,n,s),this.constant=a,this}setFromNormalAndCoplanarPoint(e,n){return this.normal.copy(e),this.constant=-n.dot(this.normal),this}setFromCoplanarPoints(e,n,s){const a=od.subVectors(s,n).cross(Dv.subVectors(e,n)).normalize();return this.setFromNormalAndCoplanarPoint(a,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,n){return n.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,n,s=!0){const a=e.delta(od),l=this.normal.dot(a);if(l===0)return this.distanceToPoint(e.start)===0?n.copy(e.start):null;const u=-(e.start.dot(this.normal)+this.constant)/l;return s===!0&&(u<0||u>1)?null:n.copy(e.start).addScaledVector(a,u)}intersectsLine(e){const n=this.distanceToPoint(e.start),s=this.distanceToPoint(e.end);return n<0&&s>0||s<0&&n>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,n){const s=n||Iv.getNormalMatrix(e),a=this.coplanarPoint(od).applyMatrix4(e),l=this.normal.applyMatrix3(s).normalize();return this.constant=-a.dot(l),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const vs=new Ef,Nv=new Ht(.5,.5),Il=new J;class wf{constructor(e=new xs,n=new xs,s=new xs,a=new xs,l=new xs,u=new xs){this.planes=[e,n,s,a,l,u]}set(e,n,s,a,l,u){const f=this.planes;return f[0].copy(e),f[1].copy(n),f[2].copy(s),f[3].copy(a),f[4].copy(l),f[5].copy(u),this}copy(e){const n=this.planes;for(let s=0;s<6;s++)n[s].copy(e.planes[s]);return this}setFromProjectionMatrix(e,n=Qi,s=!1){const a=this.planes,l=e.elements,u=l[0],f=l[1],p=l[2],m=l[3],x=l[4],y=l[5],g=l[6],S=l[7],T=l[8],R=l[9],_=l[10],v=l[11],b=l[12],L=l[13],P=l[14],z=l[15];if(a[0].setComponents(m-u,S-x,v-T,z-b).normalize(),a[1].setComponents(m+u,S+x,v+T,z+b).normalize(),a[2].setComponents(m+f,S+y,v+R,z+L).normalize(),a[3].setComponents(m-f,S-y,v-R,z-L).normalize(),s)a[4].setComponents(p,g,_,P).normalize(),a[5].setComponents(m-p,S-g,v-_,z-P).normalize();else if(a[4].setComponents(m-p,S-g,v-_,z-P).normalize(),n===Qi)a[5].setComponents(m+p,S+g,v+_,z+P).normalize();else if(n===fa)a[5].setComponents(p,g,_,P).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+n);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),vs.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const n=e.geometry;n.boundingSphere===null&&n.computeBoundingSphere(),vs.copy(n.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(vs)}intersectsSprite(e){vs.center.set(0,0,0);const n=Nv.distanceTo(e.center);return vs.radius=.7071067811865476+n,vs.applyMatrix4(e.matrixWorld),this.intersectsSphere(vs)}intersectsSphere(e){const n=this.planes,s=e.center,a=-e.radius;for(let l=0;l<6;l++)if(n[l].distanceToPoint(s)<a)return!1;return!0}intersectsBox(e){const n=this.planes;for(let s=0;s<6;s++){const a=n[s];if(Il.x=a.normal.x>0?e.max.x:e.min.x,Il.y=a.normal.y>0?e.max.y:e.min.y,Il.z=a.normal.z>0?e.max.z:e.min.z,a.distanceToPoint(Il)<0)return!1}return!0}containsPoint(e){const n=this.planes;for(let s=0;s<6;s++)if(n[s].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class R0 extends $n{constructor(e=[],n=As,s,a,l,u,f,p,m,x){super(e,n,s,a,l,u,f,p,m,x),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class Uv extends $n{constructor(e,n,s,a,l,u,f,p,m){super(e,n,s,a,l,u,f,p,m),this.isCanvasTexture=!0,this.needsUpdate=!0}}class _o extends $n{constructor(e,n,s=ir,a,l,u,f=Bn,p=Bn,m,x=wr,y=1){if(x!==wr&&x!==Ts)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const g={width:e,height:n,depth:y};super(g,a,l,u,f,p,x,s,m),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new yf(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const n=super.toJSON(e);return this.compareFunction!==null&&(n.compareFunction=this.compareFunction),n}}class Fv extends _o{constructor(e,n=ir,s=As,a,l,u=Bn,f=Bn,p,m=wr){const x={width:e,height:e,depth:1},y=[x,x,x,x,x,x];super(e,e,n,s,a,l,u,f,p,m),this.image=y,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}}class P0 extends $n{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}class Rs extends Si{constructor(e=1,n=1,s=1,a=1,l=1,u=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:n,depth:s,widthSegments:a,heightSegments:l,depthSegments:u};const f=this;a=Math.floor(a),l=Math.floor(l),u=Math.floor(u);const p=[],m=[],x=[],y=[];let g=0,S=0;T("z","y","x",-1,-1,s,n,e,u,l,0),T("z","y","x",1,-1,s,n,-e,u,l,1),T("x","z","y",1,1,e,s,n,a,u,2),T("x","z","y",1,-1,e,s,-n,a,u,3),T("x","y","z",1,-1,e,n,s,a,l,4),T("x","y","z",-1,-1,e,n,-s,a,l,5),this.setIndex(p),this.setAttribute("position",new yn(m,3)),this.setAttribute("normal",new yn(x,3)),this.setAttribute("uv",new yn(y,2));function T(R,_,v,b,L,P,z,D,k,w,I){const j=P/k,O=z/w,q=P/2,le=z/2,me=D/2,W=k+1,te=w+1;let $=0,K=0;const fe=new J;for(let he=0;he<te;he++){const U=he*O-le;for(let ne=0;ne<W;ne++){const Xe=ne*j-q;fe[R]=Xe*b,fe[_]=U*L,fe[v]=me,m.push(fe.x,fe.y,fe.z),fe[R]=0,fe[_]=0,fe[v]=D>0?1:-1,x.push(fe.x,fe.y,fe.z),y.push(ne/k),y.push(1-he/w),$+=1}}for(let he=0;he<w;he++)for(let U=0;U<k;U++){const ne=g+U+W*he,Xe=g+U+W*(he+1),ze=g+(U+1)+W*(he+1),We=g+(U+1)+W*he;p.push(ne,Xe,We),p.push(Xe,ze,We),K+=6}f.addGroup(S,K,I),S+=K,g+=$}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Rs(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}class $l extends Si{constructor(e=1,n=32,s=0,a=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:e,segments:n,thetaStart:s,thetaLength:a},n=Math.max(3,n);const l=[],u=[],f=[],p=[],m=new J,x=new Ht;u.push(0,0,0),f.push(0,0,1),p.push(.5,.5);for(let y=0,g=3;y<=n;y++,g+=3){const S=s+y/n*a;m.x=e*Math.cos(S),m.y=e*Math.sin(S),u.push(m.x,m.y,m.z),f.push(0,0,1),x.x=(u[g]/e+1)/2,x.y=(u[g+1]/e+1)/2,p.push(x.x,x.y)}for(let y=1;y<=n;y++)l.push(y,y+1,0);this.setIndex(l),this.setAttribute("position",new yn(u,3)),this.setAttribute("normal",new yn(f,3)),this.setAttribute("uv",new yn(p,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new $l(e.radius,e.segments,e.thetaStart,e.thetaLength)}}class Nn extends Si{constructor(e=1,n=1,s=1,a=32,l=1,u=!1,f=0,p=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:n,height:s,radialSegments:a,heightSegments:l,openEnded:u,thetaStart:f,thetaLength:p};const m=this;a=Math.floor(a),l=Math.floor(l);const x=[],y=[],g=[],S=[];let T=0;const R=[],_=s/2;let v=0;b(),u===!1&&(e>0&&L(!0),n>0&&L(!1)),this.setIndex(x),this.setAttribute("position",new yn(y,3)),this.setAttribute("normal",new yn(g,3)),this.setAttribute("uv",new yn(S,2));function b(){const P=new J,z=new J;let D=0;const k=(n-e)/s;for(let w=0;w<=l;w++){const I=[],j=w/l,O=j*(n-e)+e;for(let q=0;q<=a;q++){const le=q/a,me=le*p+f,W=Math.sin(me),te=Math.cos(me);z.x=O*W,z.y=-j*s+_,z.z=O*te,y.push(z.x,z.y,z.z),P.set(W,k,te).normalize(),g.push(P.x,P.y,P.z),S.push(le,1-j),I.push(T++)}R.push(I)}for(let w=0;w<a;w++)for(let I=0;I<l;I++){const j=R[I][w],O=R[I+1][w],q=R[I+1][w+1],le=R[I][w+1];(e>0||I!==0)&&(x.push(j,O,le),D+=3),(n>0||I!==l-1)&&(x.push(O,q,le),D+=3)}m.addGroup(v,D,0),v+=D}function L(P){const z=T,D=new Ht,k=new J;let w=0;const I=P===!0?e:n,j=P===!0?1:-1;for(let q=1;q<=a;q++)y.push(0,_*j,0),g.push(0,j,0),S.push(.5,.5),T++;const O=T;for(let q=0;q<=a;q++){const me=q/a*p+f,W=Math.cos(me),te=Math.sin(me);k.x=I*te,k.y=_*j,k.z=I*W,y.push(k.x,k.y,k.z),g.push(0,j,0),D.x=W*.5+.5,D.y=te*.5*j+.5,S.push(D.x,D.y),T++}for(let q=0;q<a;q++){const le=z+q,me=O+q;P===!0?x.push(me,me+1,le):x.push(me+1,me,le),w+=3}m.addGroup(v,w,P===!0?1:2),v+=w}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Nn(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class Tf extends Nn{constructor(e=1,n=1,s=32,a=1,l=!1,u=0,f=Math.PI*2){super(0,e,n,s,a,l,u,f),this.type="ConeGeometry",this.parameters={radius:e,height:n,radialSegments:s,heightSegments:a,openEnded:l,thetaStart:u,thetaLength:f}}static fromJSON(e){return new Tf(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class kn extends Si{constructor(e=1,n=1,s=1,a=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:n,widthSegments:s,heightSegments:a};const l=e/2,u=n/2,f=Math.floor(s),p=Math.floor(a),m=f+1,x=p+1,y=e/f,g=n/p,S=[],T=[],R=[],_=[];for(let v=0;v<x;v++){const b=v*g-u;for(let L=0;L<m;L++){const P=L*y-l;T.push(P,-b,0),R.push(0,0,1),_.push(L/f),_.push(1-v/p)}}for(let v=0;v<p;v++)for(let b=0;b<f;b++){const L=b+m*v,P=b+m*(v+1),z=b+1+m*(v+1),D=b+1+m*v;S.push(L,P,D),S.push(P,z,D)}this.setIndex(S),this.setAttribute("position",new yn(T,3)),this.setAttribute("normal",new yn(R,3)),this.setAttribute("uv",new yn(_,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new kn(e.width,e.height,e.widthSegments,e.heightSegments)}}class Af extends Si{constructor(e=1,n=32,s=16,a=0,l=Math.PI*2,u=0,f=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:n,heightSegments:s,phiStart:a,phiLength:l,thetaStart:u,thetaLength:f},n=Math.max(3,Math.floor(n)),s=Math.max(2,Math.floor(s));const p=Math.min(u+f,Math.PI);let m=0;const x=[],y=new J,g=new J,S=[],T=[],R=[],_=[];for(let v=0;v<=s;v++){const b=[],L=v/s;let P=0;v===0&&u===0?P=.5/n:v===s&&p===Math.PI&&(P=-.5/n);for(let z=0;z<=n;z++){const D=z/n;y.x=-e*Math.cos(a+D*l)*Math.sin(u+L*f),y.y=e*Math.cos(u+L*f),y.z=e*Math.sin(a+D*l)*Math.sin(u+L*f),T.push(y.x,y.y,y.z),g.copy(y).normalize(),R.push(g.x,g.y,g.z),_.push(D+P,1-L),b.push(m++)}x.push(b)}for(let v=0;v<s;v++)for(let b=0;b<n;b++){const L=x[v][b+1],P=x[v][b],z=x[v+1][b],D=x[v+1][b+1];(v!==0||u>0)&&S.push(L,P,D),(v!==s-1||p<Math.PI)&&S.push(P,z,D)}this.setIndex(S),this.setAttribute("position",new yn(T,3)),this.setAttribute("normal",new yn(R,3)),this.setAttribute("uv",new yn(_,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Af(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class Kl extends Si{constructor(e=1,n=.4,s=12,a=48,l=Math.PI*2,u=0,f=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:n,radialSegments:s,tubularSegments:a,arc:l,thetaStart:u,thetaLength:f},s=Math.floor(s),a=Math.floor(a);const p=[],m=[],x=[],y=[],g=new J,S=new J,T=new J;for(let R=0;R<=s;R++){const _=u+R/s*f;for(let v=0;v<=a;v++){const b=v/a*l;S.x=(e+n*Math.cos(_))*Math.cos(b),S.y=(e+n*Math.cos(_))*Math.sin(b),S.z=n*Math.sin(_),m.push(S.x,S.y,S.z),g.x=e*Math.cos(b),g.y=e*Math.sin(b),T.subVectors(S,g).normalize(),x.push(T.x,T.y,T.z),y.push(v/a),y.push(R/s)}}for(let R=1;R<=s;R++)for(let _=1;_<=a;_++){const v=(a+1)*R+_-1,b=(a+1)*(R-1)+_-1,L=(a+1)*(R-1)+_,P=(a+1)*R+_;p.push(v,b,P),p.push(b,L,P)}this.setIndex(p),this.setAttribute("position",new yn(m,3)),this.setAttribute("normal",new yn(x,3)),this.setAttribute("uv",new yn(y,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Kl(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc)}}function vo(r){const e={};for(const n in r){e[n]={};for(const s in r[n]){const a=r[n][s];if(Rm(a))a.isRenderTargetTexture?(xt("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[n][s]=null):e[n][s]=a.clone();else if(Array.isArray(a))if(Rm(a[0])){const l=[];for(let u=0,f=a.length;u<f;u++)l[u]=a[u].clone();e[n][s]=l}else e[n][s]=a.slice();else e[n][s]=a}}return e}function ei(r){const e={};for(let n=0;n<r.length;n++){const s=vo(r[n]);for(const a in s)e[a]=s[a]}return e}function Rm(r){return r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)}function Ov(r){const e=[];for(let n=0;n<r.length;n++)e.push(r[n].clone());return e}function L0(r){const e=r.getRenderTarget();return e===null?r.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:zt.workingColorSpace}const kv={clone:vo,merge:ei};var Bv=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,zv=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class rr extends ma{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Bv,this.fragmentShader=zv,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=vo(e.uniforms),this.uniformsGroups=Ov(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){const n=super.toJSON(e);n.glslVersion=this.glslVersion,n.uniforms={};for(const a in this.uniforms){const u=this.uniforms[a].value;u&&u.isTexture?n.uniforms[a]={type:"t",value:u.toJSON(e).uuid}:u&&u.isColor?n.uniforms[a]={type:"c",value:u.getHex()}:u&&u.isVector2?n.uniforms[a]={type:"v2",value:u.toArray()}:u&&u.isVector3?n.uniforms[a]={type:"v3",value:u.toArray()}:u&&u.isVector4?n.uniforms[a]={type:"v4",value:u.toArray()}:u&&u.isMatrix3?n.uniforms[a]={type:"m3",value:u.toArray()}:u&&u.isMatrix4?n.uniforms[a]={type:"m4",value:u.toArray()}:n.uniforms[a]={value:u}}Object.keys(this.defines).length>0&&(n.defines=this.defines),n.vertexShader=this.vertexShader,n.fragmentShader=this.fragmentShader,n.lights=this.lights,n.clipping=this.clipping;const s={};for(const a in this.extensions)this.extensions[a]===!0&&(s[a]=!0);return Object.keys(s).length>0&&(n.extensions=s),n}}class Hv extends rr{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class Ms extends ma{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new Ct(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ct(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=nf,this.normalScale=new Ht(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new ts,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class Vv extends Ms{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new Ht(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return Ot(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(n){this.ior=(1+.4*n)/(1-.4*n)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new Ct(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new Ct(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new Ct(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get dispersion(){return this._dispersion}set dispersion(e){this._dispersion>0!=e>0&&this.version++,this._dispersion=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.dispersion=e.dispersion,this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}}class Gv extends ma{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Q_,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class Wv extends ma{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}class bf extends Kn{constructor(e,n=1){super(),this.isLight=!0,this.type="Light",this.color=new Ct(e),this.intensity=n}dispose(){this.dispatchEvent({type:"dispose"})}copy(e,n){return super.copy(e,n),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const n=super.toJSON(e);return n.object.color=this.color.getHex(),n.object.intensity=this.intensity,n}}const ad=new _n,Pm=new J,Lm=new J;class D0{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Ht(512,512),this.mapType=yi,this.map=null,this.mapPass=null,this.matrix=new _n,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new wf,this._frameExtents=new Ht(1,1),this._viewportCount=1,this._viewports=[new gn(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const n=this.camera,s=this.matrix;Pm.setFromMatrixPosition(e.matrixWorld),n.position.copy(Pm),Lm.setFromMatrixPosition(e.target.matrixWorld),n.lookAt(Lm),n.updateMatrixWorld(),ad.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(ad,n.coordinateSystem,n.reversedDepth),n.coordinateSystem===fa||n.reversedDepth?s.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):s.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),s.multiply(ad)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this.biasNode=e.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}const Nl=new J,Ul=new xo,$i=new J;class I0 extends Kn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new _n,this.projectionMatrix=new _n,this.projectionMatrixInverse=new _n,this.coordinateSystem=Qi,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,n){return super.copy(e,n),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(Nl,Ul,$i),$i.x===1&&$i.y===1&&$i.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Nl,Ul,$i.set(1,1,1)).invert()}updateWorldMatrix(e,n){super.updateWorldMatrix(e,n),this.matrixWorld.decompose(Nl,Ul,$i),$i.x===1&&$i.y===1&&$i.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Nl,Ul,$i.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}}const Zr=new J,Dm=new Ht,Im=new Ht;class xi extends I0{constructor(e=50,n=1,s=.1,a=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=s,this.far=a,this.focus=10,this.aspect=n,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const n=.5*this.getFilmHeight()/e;this.fov=sf*2*Math.atan(n),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Ou*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return sf*2*Math.atan(Math.tan(Ou*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,n,s){Zr.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Zr.x,Zr.y).multiplyScalar(-e/Zr.z),Zr.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),s.set(Zr.x,Zr.y).multiplyScalar(-e/Zr.z)}getViewSize(e,n){return this.getViewBounds(e,Dm,Im),n.subVectors(Im,Dm)}setViewOffset(e,n,s,a,l,u){this.aspect=e/n,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=s,this.view.offsetY=a,this.view.width=l,this.view.height=u,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let n=e*Math.tan(Ou*.5*this.fov)/this.zoom,s=2*n,a=this.aspect*s,l=-.5*a;const u=this.view;if(this.view!==null&&this.view.enabled){const p=u.fullWidth,m=u.fullHeight;l+=u.offsetX*a/p,n-=u.offsetY*s/m,a*=u.width/p,s*=u.height/m}const f=this.filmOffset;f!==0&&(l+=e*f/this.getFilmWidth()),this.projectionMatrix.makePerspective(l,l+a,n,n-s,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.fov=this.fov,n.object.zoom=this.zoom,n.object.near=this.near,n.object.far=this.far,n.object.focus=this.focus,n.object.aspect=this.aspect,this.view!==null&&(n.object.view=Object.assign({},this.view)),n.object.filmGauge=this.filmGauge,n.object.filmOffset=this.filmOffset,n}}class Xv extends D0{constructor(){super(new xi(90,1,.5,500)),this.isPointLightShadow=!0}}class ra extends bf{constructor(e,n,s=0,a=2){super(e,n),this.isPointLight=!0,this.type="PointLight",this.distance=s,this.decay=a,this.shadow=new Xv}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){super.dispose(),this.shadow.dispose()}copy(e,n){return super.copy(e,n),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}toJSON(e){const n=super.toJSON(e);return n.object.distance=this.distance,n.object.decay=this.decay,n.object.shadow=this.shadow.toJSON(),n}}class Cf extends I0{constructor(e=-1,n=1,s=1,a=-1,l=.1,u=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=n,this.top=s,this.bottom=a,this.near=l,this.far=u,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,n,s,a,l,u){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=s,this.view.offsetY=a,this.view.width=l,this.view.height=u,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),n=(this.top-this.bottom)/(2*this.zoom),s=(this.right+this.left)/2,a=(this.top+this.bottom)/2;let l=s-e,u=s+e,f=a+n,p=a-n;if(this.view!==null&&this.view.enabled){const m=(this.right-this.left)/this.view.fullWidth/this.zoom,x=(this.top-this.bottom)/this.view.fullHeight/this.zoom;l+=m*this.view.offsetX,u=l+m*this.view.width,f-=x*this.view.offsetY,p=f-x*this.view.height}this.projectionMatrix.makeOrthographic(l,u,f,p,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.zoom=this.zoom,n.object.left=this.left,n.object.right=this.right,n.object.top=this.top,n.object.bottom=this.bottom,n.object.near=this.near,n.object.far=this.far,this.view!==null&&(n.object.view=Object.assign({},this.view)),n}}class jv extends D0{constructor(){super(new Cf(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class Nm extends bf{constructor(e,n){super(e,n),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Kn.DEFAULT_UP),this.updateMatrix(),this.target=new Kn,this.shadow=new jv}dispose(){super.dispose(),this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}toJSON(e){const n=super.toJSON(e);return n.object.shadow=this.shadow.toJSON(),n.object.target=this.target.uuid,n}}class Yv extends bf{constructor(e,n){super(e,n),this.isAmbientLight=!0,this.type="AmbientLight"}}const co=-90,uo=1;class qv extends Kn{constructor(e,n,s){super(),this.type="CubeCamera",this.renderTarget=s,this.coordinateSystem=null,this.activeMipmapLevel=0;const a=new xi(co,uo,e,n);a.layers=this.layers,this.add(a);const l=new xi(co,uo,e,n);l.layers=this.layers,this.add(l);const u=new xi(co,uo,e,n);u.layers=this.layers,this.add(u);const f=new xi(co,uo,e,n);f.layers=this.layers,this.add(f);const p=new xi(co,uo,e,n);p.layers=this.layers,this.add(p);const m=new xi(co,uo,e,n);m.layers=this.layers,this.add(m)}updateCoordinateSystem(){const e=this.coordinateSystem,n=this.children.concat(),[s,a,l,u,f,p]=n;for(const m of n)this.remove(m);if(e===Qi)s.up.set(0,1,0),s.lookAt(1,0,0),a.up.set(0,1,0),a.lookAt(-1,0,0),l.up.set(0,0,-1),l.lookAt(0,1,0),u.up.set(0,0,1),u.lookAt(0,-1,0),f.up.set(0,1,0),f.lookAt(0,0,1),p.up.set(0,1,0),p.lookAt(0,0,-1);else if(e===fa)s.up.set(0,-1,0),s.lookAt(-1,0,0),a.up.set(0,-1,0),a.lookAt(1,0,0),l.up.set(0,0,1),l.lookAt(0,1,0),u.up.set(0,0,-1),u.lookAt(0,-1,0),f.up.set(0,-1,0),f.lookAt(0,0,1),p.up.set(0,-1,0),p.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const m of n)this.add(m),m.updateMatrixWorld()}update(e,n){this.parent===null&&this.updateMatrixWorld();const{renderTarget:s,activeMipmapLevel:a}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[l,u,f,p,m,x]=this.children,y=e.getRenderTarget(),g=e.getActiveCubeFace(),S=e.getActiveMipmapLevel(),T=e.xr.enabled;e.xr.enabled=!1;const R=s.texture.generateMipmaps;s.texture.generateMipmaps=!1;let _=!1;e.isWebGLRenderer===!0?_=e.state.buffers.depth.getReversed():_=e.reversedDepthBuffer,e.setRenderTarget(s,0,a),_&&e.autoClear===!1&&e.clearDepth(),e.render(n,l),e.setRenderTarget(s,1,a),_&&e.autoClear===!1&&e.clearDepth(),e.render(n,u),e.setRenderTarget(s,2,a),_&&e.autoClear===!1&&e.clearDepth(),e.render(n,f),e.setRenderTarget(s,3,a),_&&e.autoClear===!1&&e.clearDepth(),e.render(n,p),e.setRenderTarget(s,4,a),_&&e.autoClear===!1&&e.clearDepth(),e.render(n,m),s.texture.generateMipmaps=R,e.setRenderTarget(s,5,a),_&&e.autoClear===!1&&e.clearDepth(),e.render(n,x),e.setRenderTarget(y,g,S),e.xr.enabled=T,s.texture.needsPMREMUpdate=!0}}class $v extends xi{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}const Um=new _n;class Kv{constructor(e,n,s=0,a=1/0){this.ray=new C0(e,n),this.near=s,this.far=a,this.camera=null,this.layers=new Sf,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,n){this.ray.set(e,n)}setFromCamera(e,n){n.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(n.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(n).sub(this.ray.origin).normalize(),this.camera=n):n.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(n.near+n.far)/(n.near-n.far)).unproject(n),this.ray.direction.set(0,0,-1).transformDirection(n.matrixWorld),this.camera=n):Xt("Raycaster: Unsupported camera type: "+n.type)}setFromXRController(e){return Um.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(Um),this}intersectObject(e,n=!0,s=[]){return of(e,this,s,n),s.sort(Fm),s}intersectObjects(e,n=!0,s=[]){for(let a=0,l=e.length;a<l;a++)of(e[a],this,s,n);return s.sort(Fm),s}}function Fm(r,e){return r.distance-e.distance}function of(r,e,n,s){let a=!0;if(r.layers.test(e.layers)&&r.raycast(e,n)===!1&&(a=!1),a===!0&&s===!0){const l=r.children;for(let u=0,f=l.length;u<f;u++)of(l[u],e,n,!0)}}const If=class If{constructor(e,n,s,a){this.elements=[1,0,0,1],e!==void 0&&this.set(e,n,s,a)}identity(){return this.set(1,0,0,1),this}fromArray(e,n=0){for(let s=0;s<4;s++)this.elements[s]=e[s+n];return this}set(e,n,s,a){const l=this.elements;return l[0]=e,l[2]=n,l[1]=s,l[3]=a,this}};If.prototype.isMatrix2=!0;let Om=If;function km(r,e,n,s){const a=Zv(s);switch(n){case y0:return r*e;case M0:return r*e/a.components*a.byteLength;case mf:return r*e/a.components*a.byteLength;case bs:return r*e*2/a.components*a.byteLength;case gf:return r*e*2/a.components*a.byteLength;case S0:return r*e*3/a.components*a.byteLength;case Gi:return r*e*4/a.components*a.byteLength;case _f:return r*e*4/a.components*a.byteLength;case kl:case Bl:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*8;case zl:case Hl:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*16;case bd:case Rd:return Math.max(r,16)*Math.max(e,8)/4;case Ad:case Cd:return Math.max(r,8)*Math.max(e,8)/2;case Pd:case Ld:case Id:case Nd:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*8;case Dd:case Gl:case Ud:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*16;case Fd:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*16;case Od:return Math.floor((r+4)/5)*Math.floor((e+3)/4)*16;case kd:return Math.floor((r+4)/5)*Math.floor((e+4)/5)*16;case Bd:return Math.floor((r+5)/6)*Math.floor((e+4)/5)*16;case zd:return Math.floor((r+5)/6)*Math.floor((e+5)/6)*16;case Hd:return Math.floor((r+7)/8)*Math.floor((e+4)/5)*16;case Vd:return Math.floor((r+7)/8)*Math.floor((e+5)/6)*16;case Gd:return Math.floor((r+7)/8)*Math.floor((e+7)/8)*16;case Wd:return Math.floor((r+9)/10)*Math.floor((e+4)/5)*16;case Xd:return Math.floor((r+9)/10)*Math.floor((e+5)/6)*16;case jd:return Math.floor((r+9)/10)*Math.floor((e+7)/8)*16;case Yd:return Math.floor((r+9)/10)*Math.floor((e+9)/10)*16;case qd:return Math.floor((r+11)/12)*Math.floor((e+9)/10)*16;case $d:return Math.floor((r+11)/12)*Math.floor((e+11)/12)*16;case Kd:case Zd:case Jd:return Math.ceil(r/4)*Math.ceil(e/4)*16;case Qd:case ef:return Math.ceil(r/4)*Math.ceil(e/4)*8;case Wl:case tf:return Math.ceil(r/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${n} format.`)}function Zv(r){switch(r){case yi:case g0:return{byteLength:1,components:1};case ua:case _0:case Er:return{byteLength:2,components:1};case hf:case pf:return{byteLength:2,components:4};case ir:case ff:case Ji:return{byteLength:4,components:1};case v0:case x0:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${r}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:uf}}));typeof window<"u"&&(window.__THREE__?xt("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=uf);/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function N0(){let r=null,e=!1,n=null,s=null;function a(l,u){n(l,u),s=r.requestAnimationFrame(a)}return{start:function(){e!==!0&&n!==null&&r!==null&&(s=r.requestAnimationFrame(a),e=!0)},stop:function(){r!==null&&r.cancelAnimationFrame(s),e=!1},setAnimationLoop:function(l){n=l},setContext:function(l){r=l}}}function Jv(r){const e=new WeakMap;function n(f,p){const m=f.array,x=f.usage,y=m.byteLength,g=r.createBuffer();r.bindBuffer(p,g),r.bufferData(p,m,x),f.onUploadCallback();let S;if(m instanceof Float32Array)S=r.FLOAT;else if(typeof Float16Array<"u"&&m instanceof Float16Array)S=r.HALF_FLOAT;else if(m instanceof Uint16Array)f.isFloat16BufferAttribute?S=r.HALF_FLOAT:S=r.UNSIGNED_SHORT;else if(m instanceof Int16Array)S=r.SHORT;else if(m instanceof Uint32Array)S=r.UNSIGNED_INT;else if(m instanceof Int32Array)S=r.INT;else if(m instanceof Int8Array)S=r.BYTE;else if(m instanceof Uint8Array)S=r.UNSIGNED_BYTE;else if(m instanceof Uint8ClampedArray)S=r.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+m);return{buffer:g,type:S,bytesPerElement:m.BYTES_PER_ELEMENT,version:f.version,size:y}}function s(f,p,m){const x=p.array,y=p.updateRanges;if(r.bindBuffer(m,f),y.length===0)r.bufferSubData(m,0,x);else{y.sort((S,T)=>S.start-T.start);let g=0;for(let S=1;S<y.length;S++){const T=y[g],R=y[S];R.start<=T.start+T.count+1?T.count=Math.max(T.count,R.start+R.count-T.start):(++g,y[g]=R)}y.length=g+1;for(let S=0,T=y.length;S<T;S++){const R=y[S];r.bufferSubData(m,R.start*x.BYTES_PER_ELEMENT,x,R.start,R.count)}p.clearUpdateRanges()}p.onUploadCallback()}function a(f){return f.isInterleavedBufferAttribute&&(f=f.data),e.get(f)}function l(f){f.isInterleavedBufferAttribute&&(f=f.data);const p=e.get(f);p&&(r.deleteBuffer(p.buffer),e.delete(f))}function u(f,p){if(f.isInterleavedBufferAttribute&&(f=f.data),f.isGLBufferAttribute){const x=e.get(f);(!x||x.version<f.version)&&e.set(f,{buffer:f.buffer,type:f.type,bytesPerElement:f.elementSize,version:f.version});return}const m=e.get(f);if(m===void 0)e.set(f,n(f,p));else if(m.version<f.version){if(m.size!==f.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");s(m.buffer,f,p),m.version=f.version}}return{get:a,remove:l,update:u}}var Qv=`#ifdef USE_ALPHAHASH
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
#endif`,yx=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,Sx=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
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
#endif`,ey=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,ty=`#ifdef USE_LIGHT_PROBES_GRID
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
#endif`,ny=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,iy=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,ry=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,sy=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,oy=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,ay=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,ly=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,cy=`#if defined( USE_POINTS_UV )
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
#endif`,uy=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,dy=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,fy=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,hy=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,py=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,my=`#ifdef USE_MORPHTARGETS
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
#endif`,gy=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,_y=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,vy=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,xy=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,yy=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Sy=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,My=`#ifdef USE_NORMALMAP
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
#endif`,Ey=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,wy=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Ty=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Ay=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,by=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Cy=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,Ry=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Py=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Ly=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Dy=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Iy=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Ny=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Uy=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Fy=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Oy=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,ky=`float getShadowMask() {
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
}`,By=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,zy=`#ifdef USE_SKINNING
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
#endif`,Hy=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Vy=`#ifdef USE_SKINNING
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
#endif`,Gy=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Wy=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Xy=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,jy=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,Yy=`#ifdef USE_TRANSMISSION
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
#endif`,qy=`#ifdef USE_TRANSMISSION
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
#endif`,$y=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Ky=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Zy=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Jy=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Qy=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,eS=`uniform sampler2D t2D;
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
}`,tS=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,nS=`#ifdef ENVMAP_TYPE_CUBE
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
}`,iS=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,rS=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,sS=`#include <common>
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
}`,oS=`#if DEPTH_PACKING == 3200
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
}`,aS=`#define DISTANCE
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
}`,lS=`#define DISTANCE
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
}`,cS=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,uS=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,dS=`uniform float scale;
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
}`,fS=`uniform vec3 diffuse;
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
}`,hS=`#include <common>
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
}`,pS=`uniform vec3 diffuse;
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
}`,mS=`#define LAMBERT
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
}`,gS=`#define LAMBERT
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
}`,_S=`#define MATCAP
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
}`,vS=`#define MATCAP
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
}`,xS=`#define NORMAL
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
}`,yS=`#define NORMAL
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
}`,SS=`#define PHONG
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
}`,MS=`#define PHONG
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
}`,ES=`#define STANDARD
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
}`,wS=`#define STANDARD
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
}`,TS=`#define TOON
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
}`,AS=`#define TOON
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
}`,bS=`uniform float size;
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
}`,CS=`uniform vec3 diffuse;
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
}`,RS=`#include <common>
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
}`,PS=`uniform vec3 color;
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
}`,LS=`uniform float rotation;
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
}`,DS=`uniform vec3 diffuse;
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
}`,bt={alphahash_fragment:Qv,alphahash_pars_fragment:ex,alphamap_fragment:tx,alphamap_pars_fragment:nx,alphatest_fragment:ix,alphatest_pars_fragment:rx,aomap_fragment:sx,aomap_pars_fragment:ox,batching_pars_vertex:ax,batching_vertex:lx,begin_vertex:cx,beginnormal_vertex:ux,bsdfs:dx,iridescence_fragment:fx,bumpmap_pars_fragment:hx,clipping_planes_fragment:px,clipping_planes_pars_fragment:mx,clipping_planes_pars_vertex:gx,clipping_planes_vertex:_x,color_fragment:vx,color_pars_fragment:xx,color_pars_vertex:yx,color_vertex:Sx,common:Mx,cube_uv_reflection_fragment:Ex,defaultnormal_vertex:wx,displacementmap_pars_vertex:Tx,displacementmap_vertex:Ax,emissivemap_fragment:bx,emissivemap_pars_fragment:Cx,colorspace_fragment:Rx,colorspace_pars_fragment:Px,envmap_fragment:Lx,envmap_common_pars_fragment:Dx,envmap_pars_fragment:Ix,envmap_pars_vertex:Nx,envmap_physical_pars_fragment:Xx,envmap_vertex:Ux,fog_vertex:Fx,fog_pars_vertex:Ox,fog_fragment:kx,fog_pars_fragment:Bx,gradientmap_pars_fragment:zx,lightmap_pars_fragment:Hx,lights_lambert_fragment:Vx,lights_lambert_pars_fragment:Gx,lights_pars_begin:Wx,lights_toon_fragment:jx,lights_toon_pars_fragment:Yx,lights_phong_fragment:qx,lights_phong_pars_fragment:$x,lights_physical_fragment:Kx,lights_physical_pars_fragment:Zx,lights_fragment_begin:Jx,lights_fragment_maps:Qx,lights_fragment_end:ey,lightprobes_pars_fragment:ty,logdepthbuf_fragment:ny,logdepthbuf_pars_fragment:iy,logdepthbuf_pars_vertex:ry,logdepthbuf_vertex:sy,map_fragment:oy,map_pars_fragment:ay,map_particle_fragment:ly,map_particle_pars_fragment:cy,metalnessmap_fragment:uy,metalnessmap_pars_fragment:dy,morphinstance_vertex:fy,morphcolor_vertex:hy,morphnormal_vertex:py,morphtarget_pars_vertex:my,morphtarget_vertex:gy,normal_fragment_begin:_y,normal_fragment_maps:vy,normal_pars_fragment:xy,normal_pars_vertex:yy,normal_vertex:Sy,normalmap_pars_fragment:My,clearcoat_normal_fragment_begin:Ey,clearcoat_normal_fragment_maps:wy,clearcoat_pars_fragment:Ty,iridescence_pars_fragment:Ay,opaque_fragment:by,packing:Cy,premultiplied_alpha_fragment:Ry,project_vertex:Py,dithering_fragment:Ly,dithering_pars_fragment:Dy,roughnessmap_fragment:Iy,roughnessmap_pars_fragment:Ny,shadowmap_pars_fragment:Uy,shadowmap_pars_vertex:Fy,shadowmap_vertex:Oy,shadowmask_pars_fragment:ky,skinbase_vertex:By,skinning_pars_vertex:zy,skinning_vertex:Hy,skinnormal_vertex:Vy,specularmap_fragment:Gy,specularmap_pars_fragment:Wy,tonemapping_fragment:Xy,tonemapping_pars_fragment:jy,transmission_fragment:Yy,transmission_pars_fragment:qy,uv_pars_fragment:$y,uv_pars_vertex:Ky,uv_vertex:Zy,worldpos_vertex:Jy,background_vert:Qy,background_frag:eS,backgroundCube_vert:tS,backgroundCube_frag:nS,cube_vert:iS,cube_frag:rS,depth_vert:sS,depth_frag:oS,distance_vert:aS,distance_frag:lS,equirect_vert:cS,equirect_frag:uS,linedashed_vert:dS,linedashed_frag:fS,meshbasic_vert:hS,meshbasic_frag:pS,meshlambert_vert:mS,meshlambert_frag:gS,meshmatcap_vert:_S,meshmatcap_frag:vS,meshnormal_vert:xS,meshnormal_frag:yS,meshphong_vert:SS,meshphong_frag:MS,meshphysical_vert:ES,meshphysical_frag:wS,meshtoon_vert:TS,meshtoon_frag:AS,points_vert:bS,points_frag:CS,shadow_vert:RS,shadow_frag:PS,sprite_vert:LS,sprite_frag:DS},Ye={common:{diffuse:{value:new Ct(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new wt},alphaMap:{value:null},alphaMapTransform:{value:new wt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new wt}},envmap:{envMap:{value:null},envMapRotation:{value:new wt},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new wt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new wt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new wt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new wt},normalScale:{value:new Ht(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new wt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new wt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new wt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new wt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Ct(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new J},probesMax:{value:new J},probesResolution:{value:new J}},points:{diffuse:{value:new Ct(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new wt},alphaTest:{value:0},uvTransform:{value:new wt}},sprite:{diffuse:{value:new Ct(16777215)},opacity:{value:1},center:{value:new Ht(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new wt},alphaMap:{value:null},alphaMapTransform:{value:new wt},alphaTest:{value:0}}},Zi={basic:{uniforms:ei([Ye.common,Ye.specularmap,Ye.envmap,Ye.aomap,Ye.lightmap,Ye.fog]),vertexShader:bt.meshbasic_vert,fragmentShader:bt.meshbasic_frag},lambert:{uniforms:ei([Ye.common,Ye.specularmap,Ye.envmap,Ye.aomap,Ye.lightmap,Ye.emissivemap,Ye.bumpmap,Ye.normalmap,Ye.displacementmap,Ye.fog,Ye.lights,{emissive:{value:new Ct(0)},envMapIntensity:{value:1}}]),vertexShader:bt.meshlambert_vert,fragmentShader:bt.meshlambert_frag},phong:{uniforms:ei([Ye.common,Ye.specularmap,Ye.envmap,Ye.aomap,Ye.lightmap,Ye.emissivemap,Ye.bumpmap,Ye.normalmap,Ye.displacementmap,Ye.fog,Ye.lights,{emissive:{value:new Ct(0)},specular:{value:new Ct(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:bt.meshphong_vert,fragmentShader:bt.meshphong_frag},standard:{uniforms:ei([Ye.common,Ye.envmap,Ye.aomap,Ye.lightmap,Ye.emissivemap,Ye.bumpmap,Ye.normalmap,Ye.displacementmap,Ye.roughnessmap,Ye.metalnessmap,Ye.fog,Ye.lights,{emissive:{value:new Ct(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:bt.meshphysical_vert,fragmentShader:bt.meshphysical_frag},toon:{uniforms:ei([Ye.common,Ye.aomap,Ye.lightmap,Ye.emissivemap,Ye.bumpmap,Ye.normalmap,Ye.displacementmap,Ye.gradientmap,Ye.fog,Ye.lights,{emissive:{value:new Ct(0)}}]),vertexShader:bt.meshtoon_vert,fragmentShader:bt.meshtoon_frag},matcap:{uniforms:ei([Ye.common,Ye.bumpmap,Ye.normalmap,Ye.displacementmap,Ye.fog,{matcap:{value:null}}]),vertexShader:bt.meshmatcap_vert,fragmentShader:bt.meshmatcap_frag},points:{uniforms:ei([Ye.points,Ye.fog]),vertexShader:bt.points_vert,fragmentShader:bt.points_frag},dashed:{uniforms:ei([Ye.common,Ye.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:bt.linedashed_vert,fragmentShader:bt.linedashed_frag},depth:{uniforms:ei([Ye.common,Ye.displacementmap]),vertexShader:bt.depth_vert,fragmentShader:bt.depth_frag},normal:{uniforms:ei([Ye.common,Ye.bumpmap,Ye.normalmap,Ye.displacementmap,{opacity:{value:1}}]),vertexShader:bt.meshnormal_vert,fragmentShader:bt.meshnormal_frag},sprite:{uniforms:ei([Ye.sprite,Ye.fog]),vertexShader:bt.sprite_vert,fragmentShader:bt.sprite_frag},background:{uniforms:{uvTransform:{value:new wt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:bt.background_vert,fragmentShader:bt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new wt}},vertexShader:bt.backgroundCube_vert,fragmentShader:bt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:bt.cube_vert,fragmentShader:bt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:bt.equirect_vert,fragmentShader:bt.equirect_frag},distance:{uniforms:ei([Ye.common,Ye.displacementmap,{referencePosition:{value:new J},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:bt.distance_vert,fragmentShader:bt.distance_frag},shadow:{uniforms:ei([Ye.lights,Ye.fog,{color:{value:new Ct(0)},opacity:{value:1}}]),vertexShader:bt.shadow_vert,fragmentShader:bt.shadow_frag}};Zi.physical={uniforms:ei([Zi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new wt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new wt},clearcoatNormalScale:{value:new Ht(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new wt},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new wt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new wt},sheen:{value:0},sheenColor:{value:new Ct(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new wt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new wt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new wt},transmissionSamplerSize:{value:new Ht},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new wt},attenuationDistance:{value:0},attenuationColor:{value:new Ct(0)},specularColor:{value:new Ct(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new wt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new wt},anisotropyVector:{value:new Ht},anisotropyMap:{value:null},anisotropyMapTransform:{value:new wt}}]),vertexShader:bt.meshphysical_vert,fragmentShader:bt.meshphysical_frag};const Fl={r:0,b:0,g:0},IS=new _n,U0=new wt;U0.set(-1,0,0,0,1,0,0,0,1);function NS(r,e,n,s,a,l){const u=new Ct(0);let f=a===!0?0:1,p,m,x=null,y=0,g=null;function S(b){let L=b.isScene===!0?b.background:null;if(L&&L.isTexture){const P=b.backgroundBlurriness>0;L=e.get(L,P)}return L}function T(b){let L=!1;const P=S(b);P===null?_(u,f):P&&P.isColor&&(_(P,1),L=!0);const z=r.xr.getEnvironmentBlendMode();z==="additive"?n.buffers.color.setClear(0,0,0,1,l):z==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,l),(r.autoClear||L)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),r.clear(r.autoClearColor,r.autoClearDepth,r.autoClearStencil))}function R(b,L){const P=S(L);P&&(P.isCubeTexture||P.mapping===Jl)?(m===void 0&&(m=new Fe(new Rs(1,1,1),new rr({name:"BackgroundCubeMaterial",uniforms:vo(Zi.backgroundCube.uniforms),vertexShader:Zi.backgroundCube.vertexShader,fragmentShader:Zi.backgroundCube.fragmentShader,side:fi,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),m.geometry.deleteAttribute("normal"),m.geometry.deleteAttribute("uv"),m.onBeforeRender=function(z,D,k){this.matrixWorld.copyPosition(k.matrixWorld)},Object.defineProperty(m.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(m)),m.material.uniforms.envMap.value=P,m.material.uniforms.backgroundBlurriness.value=L.backgroundBlurriness,m.material.uniforms.backgroundIntensity.value=L.backgroundIntensity,m.material.uniforms.backgroundRotation.value.setFromMatrix4(IS.makeRotationFromEuler(L.backgroundRotation)).transpose(),P.isCubeTexture&&P.isRenderTargetTexture===!1&&m.material.uniforms.backgroundRotation.value.premultiply(U0),m.material.toneMapped=zt.getTransfer(P.colorSpace)!==Jt,(x!==P||y!==P.version||g!==r.toneMapping)&&(m.material.needsUpdate=!0,x=P,y=P.version,g=r.toneMapping),m.layers.enableAll(),b.unshift(m,m.geometry,m.material,0,0,null)):P&&P.isTexture&&(p===void 0&&(p=new Fe(new kn(2,2),new rr({name:"BackgroundMaterial",uniforms:vo(Zi.background.uniforms),vertexShader:Zi.background.vertexShader,fragmentShader:Zi.background.fragmentShader,side:es,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),p.geometry.deleteAttribute("normal"),Object.defineProperty(p.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(p)),p.material.uniforms.t2D.value=P,p.material.uniforms.backgroundIntensity.value=L.backgroundIntensity,p.material.toneMapped=zt.getTransfer(P.colorSpace)!==Jt,P.matrixAutoUpdate===!0&&P.updateMatrix(),p.material.uniforms.uvTransform.value.copy(P.matrix),(x!==P||y!==P.version||g!==r.toneMapping)&&(p.material.needsUpdate=!0,x=P,y=P.version,g=r.toneMapping),p.layers.enableAll(),b.unshift(p,p.geometry,p.material,0,0,null))}function _(b,L){b.getRGB(Fl,L0(r)),n.buffers.color.setClear(Fl.r,Fl.g,Fl.b,L,l)}function v(){m!==void 0&&(m.geometry.dispose(),m.material.dispose(),m=void 0),p!==void 0&&(p.geometry.dispose(),p.material.dispose(),p=void 0)}return{getClearColor:function(){return u},setClearColor:function(b,L=1){u.set(b),f=L,_(u,f)},getClearAlpha:function(){return f},setClearAlpha:function(b){f=b,_(u,f)},render:T,addToRenderList:R,dispose:v}}function US(r,e){const n=r.getParameter(r.MAX_VERTEX_ATTRIBS),s={},a=g(null);let l=a,u=!1;function f(O,q,le,me,W){let te=!1;const $=y(O,me,le,q);l!==$&&(l=$,m(l.object)),te=S(O,me,le,W),te&&T(O,me,le,W),W!==null&&e.update(W,r.ELEMENT_ARRAY_BUFFER),(te||u)&&(u=!1,P(O,q,le,me),W!==null&&r.bindBuffer(r.ELEMENT_ARRAY_BUFFER,e.get(W).buffer))}function p(){return r.createVertexArray()}function m(O){return r.bindVertexArray(O)}function x(O){return r.deleteVertexArray(O)}function y(O,q,le,me){const W=me.wireframe===!0;let te=s[q.id];te===void 0&&(te={},s[q.id]=te);const $=O.isInstancedMesh===!0?O.id:0;let K=te[$];K===void 0&&(K={},te[$]=K);let fe=K[le.id];fe===void 0&&(fe={},K[le.id]=fe);let he=fe[W];return he===void 0&&(he=g(p()),fe[W]=he),he}function g(O){const q=[],le=[],me=[];for(let W=0;W<n;W++)q[W]=0,le[W]=0,me[W]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:q,enabledAttributes:le,attributeDivisors:me,object:O,attributes:{},index:null}}function S(O,q,le,me){const W=l.attributes,te=q.attributes;let $=0;const K=le.getAttributes();for(const fe in K)if(K[fe].location>=0){const U=W[fe];let ne=te[fe];if(ne===void 0&&(fe==="instanceMatrix"&&O.instanceMatrix&&(ne=O.instanceMatrix),fe==="instanceColor"&&O.instanceColor&&(ne=O.instanceColor)),U===void 0||U.attribute!==ne||ne&&U.data!==ne.data)return!0;$++}return l.attributesNum!==$||l.index!==me}function T(O,q,le,me){const W={},te=q.attributes;let $=0;const K=le.getAttributes();for(const fe in K)if(K[fe].location>=0){let U=te[fe];U===void 0&&(fe==="instanceMatrix"&&O.instanceMatrix&&(U=O.instanceMatrix),fe==="instanceColor"&&O.instanceColor&&(U=O.instanceColor));const ne={};ne.attribute=U,U&&U.data&&(ne.data=U.data),W[fe]=ne,$++}l.attributes=W,l.attributesNum=$,l.index=me}function R(){const O=l.newAttributes;for(let q=0,le=O.length;q<le;q++)O[q]=0}function _(O){v(O,0)}function v(O,q){const le=l.newAttributes,me=l.enabledAttributes,W=l.attributeDivisors;le[O]=1,me[O]===0&&(r.enableVertexAttribArray(O),me[O]=1),W[O]!==q&&(r.vertexAttribDivisor(O,q),W[O]=q)}function b(){const O=l.newAttributes,q=l.enabledAttributes;for(let le=0,me=q.length;le<me;le++)q[le]!==O[le]&&(r.disableVertexAttribArray(le),q[le]=0)}function L(O,q,le,me,W,te,$){$===!0?r.vertexAttribIPointer(O,q,le,W,te):r.vertexAttribPointer(O,q,le,me,W,te)}function P(O,q,le,me){R();const W=me.attributes,te=le.getAttributes(),$=q.defaultAttributeValues;for(const K in te){const fe=te[K];if(fe.location>=0){let he=W[K];if(he===void 0&&(K==="instanceMatrix"&&O.instanceMatrix&&(he=O.instanceMatrix),K==="instanceColor"&&O.instanceColor&&(he=O.instanceColor)),he!==void 0){const U=he.normalized,ne=he.itemSize,Xe=e.get(he);if(Xe===void 0)continue;const ze=Xe.buffer,We=Xe.type,ce=Xe.bytesPerElement,we=We===r.INT||We===r.UNSIGNED_INT||he.gpuType===ff;if(he.isInterleavedBufferAttribute){const xe=he.data,ke=xe.stride,rt=he.offset;if(xe.isInstancedInterleavedBuffer){for(let tt=0;tt<fe.locationSize;tt++)v(fe.location+tt,xe.meshPerAttribute);O.isInstancedMesh!==!0&&me._maxInstanceCount===void 0&&(me._maxInstanceCount=xe.meshPerAttribute*xe.count)}else for(let tt=0;tt<fe.locationSize;tt++)_(fe.location+tt);r.bindBuffer(r.ARRAY_BUFFER,ze);for(let tt=0;tt<fe.locationSize;tt++)L(fe.location+tt,ne/fe.locationSize,We,U,ke*ce,(rt+ne/fe.locationSize*tt)*ce,we)}else{if(he.isInstancedBufferAttribute){for(let xe=0;xe<fe.locationSize;xe++)v(fe.location+xe,he.meshPerAttribute);O.isInstancedMesh!==!0&&me._maxInstanceCount===void 0&&(me._maxInstanceCount=he.meshPerAttribute*he.count)}else for(let xe=0;xe<fe.locationSize;xe++)_(fe.location+xe);r.bindBuffer(r.ARRAY_BUFFER,ze);for(let xe=0;xe<fe.locationSize;xe++)L(fe.location+xe,ne/fe.locationSize,We,U,ne*ce,ne/fe.locationSize*xe*ce,we)}}else if($!==void 0){const U=$[K];if(U!==void 0)switch(U.length){case 2:r.vertexAttrib2fv(fe.location,U);break;case 3:r.vertexAttrib3fv(fe.location,U);break;case 4:r.vertexAttrib4fv(fe.location,U);break;default:r.vertexAttrib1fv(fe.location,U)}}}}b()}function z(){I();for(const O in s){const q=s[O];for(const le in q){const me=q[le];for(const W in me){const te=me[W];for(const $ in te)x(te[$].object),delete te[$];delete me[W]}}delete s[O]}}function D(O){if(s[O.id]===void 0)return;const q=s[O.id];for(const le in q){const me=q[le];for(const W in me){const te=me[W];for(const $ in te)x(te[$].object),delete te[$];delete me[W]}}delete s[O.id]}function k(O){for(const q in s){const le=s[q];for(const me in le){const W=le[me];if(W[O.id]===void 0)continue;const te=W[O.id];for(const $ in te)x(te[$].object),delete te[$];delete W[O.id]}}}function w(O){for(const q in s){const le=s[q],me=O.isInstancedMesh===!0?O.id:0,W=le[me];if(W!==void 0){for(const te in W){const $=W[te];for(const K in $)x($[K].object),delete $[K];delete W[te]}delete le[me],Object.keys(le).length===0&&delete s[q]}}}function I(){j(),u=!0,l!==a&&(l=a,m(l.object))}function j(){a.geometry=null,a.program=null,a.wireframe=!1}return{setup:f,reset:I,resetDefaultState:j,dispose:z,releaseStatesOfGeometry:D,releaseStatesOfObject:w,releaseStatesOfProgram:k,initAttributes:R,enableAttribute:_,disableUnusedAttributes:b}}function FS(r,e,n){let s;function a(p){s=p}function l(p,m){r.drawArrays(s,p,m),n.update(m,s,1)}function u(p,m,x){x!==0&&(r.drawArraysInstanced(s,p,m,x),n.update(m,s,x))}function f(p,m,x){if(x===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(s,p,0,m,0,x);let g=0;for(let S=0;S<x;S++)g+=m[S];n.update(g,s,1)}this.setMode=a,this.render=l,this.renderInstances=u,this.renderMultiDraw=f}function OS(r,e,n,s){let a;function l(){if(a!==void 0)return a;if(e.has("EXT_texture_filter_anisotropic")===!0){const k=e.get("EXT_texture_filter_anisotropic");a=r.getParameter(k.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else a=0;return a}function u(k){return!(k!==Gi&&s.convert(k)!==r.getParameter(r.IMPLEMENTATION_COLOR_READ_FORMAT))}function f(k){const w=k===Er&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(k!==yi&&s.convert(k)!==r.getParameter(r.IMPLEMENTATION_COLOR_READ_TYPE)&&k!==Ji&&!w)}function p(k){if(k==="highp"){if(r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.HIGH_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.HIGH_FLOAT).precision>0)return"highp";k="mediump"}return k==="mediump"&&r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.MEDIUM_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let m=n.precision!==void 0?n.precision:"highp";const x=p(m);x!==m&&(xt("WebGLRenderer:",m,"not supported, using",x,"instead."),m=x);const y=n.logarithmicDepthBuffer===!0,g=n.reversedDepthBuffer===!0&&e.has("EXT_clip_control");n.reversedDepthBuffer===!0&&g===!1&&xt("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");const S=r.getParameter(r.MAX_TEXTURE_IMAGE_UNITS),T=r.getParameter(r.MAX_VERTEX_TEXTURE_IMAGE_UNITS),R=r.getParameter(r.MAX_TEXTURE_SIZE),_=r.getParameter(r.MAX_CUBE_MAP_TEXTURE_SIZE),v=r.getParameter(r.MAX_VERTEX_ATTRIBS),b=r.getParameter(r.MAX_VERTEX_UNIFORM_VECTORS),L=r.getParameter(r.MAX_VARYING_VECTORS),P=r.getParameter(r.MAX_FRAGMENT_UNIFORM_VECTORS),z=r.getParameter(r.MAX_SAMPLES),D=r.getParameter(r.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:l,getMaxPrecision:p,textureFormatReadable:u,textureTypeReadable:f,precision:m,logarithmicDepthBuffer:y,reversedDepthBuffer:g,maxTextures:S,maxVertexTextures:T,maxTextureSize:R,maxCubemapSize:_,maxAttributes:v,maxVertexUniforms:b,maxVaryings:L,maxFragmentUniforms:P,maxSamples:z,samples:D}}function kS(r){const e=this;let n=null,s=0,a=!1,l=!1;const u=new xs,f=new wt,p={value:null,needsUpdate:!1};this.uniform=p,this.numPlanes=0,this.numIntersection=0,this.init=function(y,g){const S=y.length!==0||g||s!==0||a;return a=g,s=y.length,S},this.beginShadows=function(){l=!0,x(null)},this.endShadows=function(){l=!1},this.setGlobalState=function(y,g){n=x(y,g,0)},this.setState=function(y,g,S){const T=y.clippingPlanes,R=y.clipIntersection,_=y.clipShadows,v=r.get(y);if(!a||T===null||T.length===0||l&&!_)l?x(null):m();else{const b=l?0:s,L=b*4;let P=v.clippingState||null;p.value=P,P=x(T,g,L,S);for(let z=0;z!==L;++z)P[z]=n[z];v.clippingState=P,this.numIntersection=R?this.numPlanes:0,this.numPlanes+=b}};function m(){p.value!==n&&(p.value=n,p.needsUpdate=s>0),e.numPlanes=s,e.numIntersection=0}function x(y,g,S,T){const R=y!==null?y.length:0;let _=null;if(R!==0){if(_=p.value,T!==!0||_===null){const v=S+R*4,b=g.matrixWorldInverse;f.getNormalMatrix(b),(_===null||_.length<v)&&(_=new Float32Array(v));for(let L=0,P=S;L!==R;++L,P+=4)u.copy(y[L]).applyMatrix4(b,f),u.normal.toArray(_,P),_[P+3]=u.constant}p.value=_,p.needsUpdate=!0}return e.numPlanes=R,e.numIntersection=0,_}}const Qr=4,Bm=[.125,.215,.35,.446,.526,.582],Es=20,BS=256,sa=new Cf,zm=new Ct;let ld=null,cd=0,ud=0,dd=!1;const zS=new J;class Hm{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._sigmas=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,n=0,s=.1,a=100,l={}){const{size:u=256,position:f=zS}=l;ld=this._renderer.getRenderTarget(),cd=this._renderer.getActiveCubeFace(),ud=this._renderer.getActiveMipmapLevel(),dd=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(u);const p=this._allocateTargets();return p.depthBuffer=!0,this._sceneToCubeUV(e,s,a,p,f),n>0&&this._blur(p,0,0,n),this._applyPMREM(p),this._cleanup(p),p}fromEquirectangular(e,n=null){return this._fromTexture(e,n)}fromCubemap(e,n=null){return this._fromTexture(e,n)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Wm(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Gm(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(ld,cd,ud),this._renderer.xr.enabled=dd,e.scissorTest=!1,fo(e,0,0,e.width,e.height)}_fromTexture(e,n){e.mapping===As||e.mapping===go?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),ld=this._renderer.getRenderTarget(),cd=this._renderer.getActiveCubeFace(),ud=this._renderer.getActiveMipmapLevel(),dd=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const s=n||this._allocateTargets();return this._textureToCubeUV(e,s),this._applyPMREM(s),this._cleanup(s),s}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),n=4*this._cubeSize,s={magFilter:qn,minFilter:qn,generateMipmaps:!1,type:Er,format:Gi,colorSpace:Xl,depthBuffer:!1},a=Vm(e,n,s);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==n){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Vm(e,n,s);const{_lodMax:l}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods,sigmas:this._sigmas}=HS(l)),this._blurMaterial=GS(l,e,n),this._ggxMaterial=VS(l,e,n)}return a}_compileMaterial(e){const n=new Fe(new Si,e);this._renderer.compile(n,sa)}_sceneToCubeUV(e,n,s,a,l){const p=new xi(90,1,n,s),m=[1,-1,1,1,1,1],x=[1,1,1,-1,-1,-1],y=this._renderer,g=y.autoClear,S=y.toneMapping;y.getClearColor(zm),y.toneMapping=er,y.autoClear=!1,y.state.buffers.depth.getReversed()&&(y.setRenderTarget(a),y.clearDepth(),y.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new Fe(new Rs,new ql({name:"PMREM.Background",side:fi,depthWrite:!1,depthTest:!1})));const R=this._backgroundBox,_=R.material;let v=!1;const b=e.background;b?b.isColor&&(_.color.copy(b),e.background=null,v=!0):(_.color.copy(zm),v=!0);for(let L=0;L<6;L++){const P=L%3;P===0?(p.up.set(0,m[L],0),p.position.set(l.x,l.y,l.z),p.lookAt(l.x+x[L],l.y,l.z)):P===1?(p.up.set(0,0,m[L]),p.position.set(l.x,l.y,l.z),p.lookAt(l.x,l.y+x[L],l.z)):(p.up.set(0,m[L],0),p.position.set(l.x,l.y,l.z),p.lookAt(l.x,l.y,l.z+x[L]));const z=this._cubeSize;fo(a,P*z,L>2?z:0,z,z),y.setRenderTarget(a),v&&y.render(R,p),y.render(e,p)}y.toneMapping=S,y.autoClear=g,e.background=b}_textureToCubeUV(e,n){const s=this._renderer,a=e.mapping===As||e.mapping===go;a?(this._cubemapMaterial===null&&(this._cubemapMaterial=Wm()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Gm());const l=a?this._cubemapMaterial:this._equirectMaterial,u=this._lodMeshes[0];u.material=l;const f=l.uniforms;f.envMap.value=e;const p=this._cubeSize;fo(n,0,0,3*p,2*p),s.setRenderTarget(n),s.render(u,sa)}_applyPMREM(e){const n=this._renderer,s=n.autoClear;n.autoClear=!1;const a=this._lodMeshes.length;for(let l=1;l<a;l++)this._applyGGXFilter(e,l-1,l);n.autoClear=s}_applyGGXFilter(e,n,s){const a=this._renderer,l=this._pingPongRenderTarget,u=this._ggxMaterial,f=this._lodMeshes[s];f.material=u;const p=u.uniforms,m=s/(this._lodMeshes.length-1),x=n/(this._lodMeshes.length-1),y=Math.sqrt(m*m-x*x),g=0+m*1.25,S=y*g,{_lodMax:T}=this,R=this._sizeLods[s],_=3*R*(s>T-Qr?s-T+Qr:0),v=4*(this._cubeSize-R);p.envMap.value=e.texture,p.roughness.value=S,p.mipInt.value=T-n,fo(l,_,v,3*R,2*R),a.setRenderTarget(l),a.render(f,sa),p.envMap.value=l.texture,p.roughness.value=0,p.mipInt.value=T-s,fo(e,_,v,3*R,2*R),a.setRenderTarget(e),a.render(f,sa)}_blur(e,n,s,a,l){const u=this._pingPongRenderTarget;this._halfBlur(e,u,n,s,a,"latitudinal",l),this._halfBlur(u,e,s,s,a,"longitudinal",l)}_halfBlur(e,n,s,a,l,u,f){const p=this._renderer,m=this._blurMaterial;u!=="latitudinal"&&u!=="longitudinal"&&Xt("blur direction must be either latitudinal or longitudinal!");const x=3,y=this._lodMeshes[a];y.material=m;const g=m.uniforms,S=this._sizeLods[s]-1,T=isFinite(l)?Math.PI/(2*S):2*Math.PI/(2*Es-1),R=l/T,_=isFinite(l)?1+Math.floor(x*R):Es;_>Es&&xt(`sigmaRadians, ${l}, is too large and will clip, as it requested ${_} samples when the maximum is set to ${Es}`);const v=[];let b=0;for(let k=0;k<Es;++k){const w=k/R,I=Math.exp(-w*w/2);v.push(I),k===0?b+=I:k<_&&(b+=2*I)}for(let k=0;k<v.length;k++)v[k]=v[k]/b;g.envMap.value=e.texture,g.samples.value=_,g.weights.value=v,g.latitudinal.value=u==="latitudinal",f&&(g.poleAxis.value=f);const{_lodMax:L}=this;g.dTheta.value=T,g.mipInt.value=L-s;const P=this._sizeLods[a],z=3*P*(a>L-Qr?a-L+Qr:0),D=4*(this._cubeSize-P);fo(n,z,D,3*P,2*P),p.setRenderTarget(n),p.render(y,sa)}}function HS(r){const e=[],n=[],s=[];let a=r;const l=r-Qr+1+Bm.length;for(let u=0;u<l;u++){const f=Math.pow(2,a);e.push(f);let p=1/f;u>r-Qr?p=Bm[u-r+Qr-1]:u===0&&(p=0),n.push(p);const m=1/(f-2),x=-m,y=1+m,g=[x,x,y,x,y,y,x,x,y,y,x,y],S=6,T=6,R=3,_=2,v=1,b=new Float32Array(R*T*S),L=new Float32Array(_*T*S),P=new Float32Array(v*T*S);for(let D=0;D<S;D++){const k=D%3*2/3-1,w=D>2?0:-1,I=[k,w,0,k+2/3,w,0,k+2/3,w+1,0,k,w,0,k+2/3,w+1,0,k,w+1,0];b.set(I,R*T*D),L.set(g,_*T*D);const j=[D,D,D,D,D,D];P.set(j,v*T*D)}const z=new Si;z.setAttribute("position",new nr(b,R)),z.setAttribute("uv",new nr(L,_)),z.setAttribute("faceIndex",new nr(P,v)),s.push(new Fe(z,null)),a>Qr&&a--}return{lodMeshes:s,sizeLods:e,sigmas:n}}function Vm(r,e,n){const s=new tr(r,e,n);return s.texture.mapping=Jl,s.texture.name="PMREM.cubeUv",s.scissorTest=!0,s}function fo(r,e,n,s,a){r.viewport.set(e,n,s,a),r.scissor.set(e,n,s,a)}function VS(r,e,n){return new rr({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:BS,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${r}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:Ql(),fragmentShader:`

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
		`,blending:Sr,depthTest:!1,depthWrite:!1})}function GS(r,e,n){const s=new Float32Array(Es),a=new J(0,1,0);return new rr({name:"SphericalGaussianBlur",defines:{n:Es,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${r}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:s},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:a}},vertexShader:Ql(),fragmentShader:`

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
		`,blending:Sr,depthTest:!1,depthWrite:!1})}function Gm(){return new rr({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Ql(),fragmentShader:`

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
		`,blending:Sr,depthTest:!1,depthWrite:!1})}function Wm(){return new rr({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Ql(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Sr,depthTest:!1,depthWrite:!1})}function Ql(){return`

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
	`}class F0 extends tr{constructor(e=1,n={}){super(e,e,n),this.isWebGLCubeRenderTarget=!0;const s={width:e,height:e,depth:1},a=[s,s,s,s,s,s];this.texture=new R0(a),this._setTextureOptions(n),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,n){this.texture.type=n.type,this.texture.colorSpace=n.colorSpace,this.texture.generateMipmaps=n.generateMipmaps,this.texture.minFilter=n.minFilter,this.texture.magFilter=n.magFilter;const s={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},a=new Rs(5,5,5),l=new rr({name:"CubemapFromEquirect",uniforms:vo(s.uniforms),vertexShader:s.vertexShader,fragmentShader:s.fragmentShader,side:fi,blending:Sr});l.uniforms.tEquirect.value=n;const u=new Fe(a,l),f=n.minFilter;return n.minFilter===ws&&(n.minFilter=qn),new qv(1,10,this).update(e,u),n.minFilter=f,u.geometry.dispose(),u.material.dispose(),this}clear(e,n=!0,s=!0,a=!0){const l=e.getRenderTarget();for(let u=0;u<6;u++)e.setRenderTarget(this,u),e.clear(n,s,a);e.setRenderTarget(l)}}function WS(r){let e=new WeakMap,n=new WeakMap,s=null;function a(g,S=!1){return g==null?null:S?u(g):l(g)}function l(g){if(g&&g.isTexture){const S=g.mapping;if(S===Nu||S===Uu)if(e.has(g)){const T=e.get(g).texture;return f(T,g.mapping)}else{const T=g.image;if(T&&T.height>0){const R=new F0(T.height);return R.fromEquirectangularTexture(r,g),e.set(g,R),g.addEventListener("dispose",m),f(R.texture,g.mapping)}else return null}}return g}function u(g){if(g&&g.isTexture){const S=g.mapping,T=S===Nu||S===Uu,R=S===As||S===go;if(T||R){let _=n.get(g);const v=_!==void 0?_.texture.pmremVersion:0;if(g.isRenderTargetTexture&&g.pmremVersion!==v)return s===null&&(s=new Hm(r)),_=T?s.fromEquirectangular(g,_):s.fromCubemap(g,_),_.texture.pmremVersion=g.pmremVersion,n.set(g,_),_.texture;if(_!==void 0)return _.texture;{const b=g.image;return T&&b&&b.height>0||R&&b&&p(b)?(s===null&&(s=new Hm(r)),_=T?s.fromEquirectangular(g):s.fromCubemap(g),_.texture.pmremVersion=g.pmremVersion,n.set(g,_),g.addEventListener("dispose",x),_.texture):null}}}return g}function f(g,S){return S===Nu?g.mapping=As:S===Uu&&(g.mapping=go),g}function p(g){let S=0;const T=6;for(let R=0;R<T;R++)g[R]!==void 0&&S++;return S===T}function m(g){const S=g.target;S.removeEventListener("dispose",m);const T=e.get(S);T!==void 0&&(e.delete(S),T.dispose())}function x(g){const S=g.target;S.removeEventListener("dispose",x);const T=n.get(S);T!==void 0&&(n.delete(S),T.dispose())}function y(){e=new WeakMap,n=new WeakMap,s!==null&&(s.dispose(),s=null)}return{get:a,dispose:y}}function XS(r){const e={};function n(s){if(e[s]!==void 0)return e[s];const a=r.getExtension(s);return e[s]=a,a}return{has:function(s){return n(s)!==null},init:function(){n("EXT_color_buffer_float"),n("WEBGL_clip_cull_distance"),n("OES_texture_float_linear"),n("EXT_color_buffer_half_float"),n("WEBGL_multisampled_render_to_texture"),n("WEBGL_render_shared_exponent")},get:function(s){const a=n(s);return a===null&&rf("WebGLRenderer: "+s+" extension not supported."),a}}}function jS(r,e,n,s){const a={},l=new WeakMap;function u(y){const g=y.target;g.index!==null&&e.remove(g.index);for(const T in g.attributes)e.remove(g.attributes[T]);g.removeEventListener("dispose",u),delete a[g.id];const S=l.get(g);S&&(e.remove(S),l.delete(g)),s.releaseStatesOfGeometry(g),g.isInstancedBufferGeometry===!0&&delete g._maxInstanceCount,n.memory.geometries--}function f(y,g){return a[g.id]===!0||(g.addEventListener("dispose",u),a[g.id]=!0,n.memory.geometries++),g}function p(y){const g=y.attributes;for(const S in g)e.update(g[S],r.ARRAY_BUFFER)}function m(y){const g=[],S=y.index,T=y.attributes.position;let R=0;if(T===void 0)return;if(S!==null){const b=S.array;R=S.version;for(let L=0,P=b.length;L<P;L+=3){const z=b[L+0],D=b[L+1],k=b[L+2];g.push(z,D,D,k,k,z)}}else{const b=T.array;R=T.version;for(let L=0,P=b.length/3-1;L<P;L+=3){const z=L+0,D=L+1,k=L+2;g.push(z,D,D,k,k,z)}}const _=new(T.count>=65535?b0:A0)(g,1);_.version=R;const v=l.get(y);v&&e.remove(v),l.set(y,_)}function x(y){const g=l.get(y);if(g){const S=y.index;S!==null&&g.version<S.version&&m(y)}else m(y);return l.get(y)}return{get:f,update:p,getWireframeAttribute:x}}function YS(r,e,n){let s;function a(y){s=y}let l,u;function f(y){l=y.type,u=y.bytesPerElement}function p(y,g){r.drawElements(s,g,l,y*u),n.update(g,s,1)}function m(y,g,S){S!==0&&(r.drawElementsInstanced(s,g,l,y*u,S),n.update(g,s,S))}function x(y,g,S){if(S===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(s,g,0,l,y,0,S);let R=0;for(let _=0;_<S;_++)R+=g[_];n.update(R,s,1)}this.setMode=a,this.setIndex=f,this.render=p,this.renderInstances=m,this.renderMultiDraw=x}function qS(r){const e={geometries:0,textures:0},n={frame:0,calls:0,triangles:0,points:0,lines:0};function s(l,u,f){switch(n.calls++,u){case r.TRIANGLES:n.triangles+=f*(l/3);break;case r.LINES:n.lines+=f*(l/2);break;case r.LINE_STRIP:n.lines+=f*(l-1);break;case r.LINE_LOOP:n.lines+=f*l;break;case r.POINTS:n.points+=f*l;break;default:Xt("WebGLInfo: Unknown draw mode:",u);break}}function a(){n.calls=0,n.triangles=0,n.points=0,n.lines=0}return{memory:e,render:n,programs:null,autoReset:!0,reset:a,update:s}}function $S(r,e,n){const s=new WeakMap,a=new gn;function l(u,f,p){const m=u.morphTargetInfluences,x=f.morphAttributes.position||f.morphAttributes.normal||f.morphAttributes.color,y=x!==void 0?x.length:0;let g=s.get(f);if(g===void 0||g.count!==y){let j=function(){w.dispose(),s.delete(f),f.removeEventListener("dispose",j)};var S=j;g!==void 0&&g.texture.dispose();const T=f.morphAttributes.position!==void 0,R=f.morphAttributes.normal!==void 0,_=f.morphAttributes.color!==void 0,v=f.morphAttributes.position||[],b=f.morphAttributes.normal||[],L=f.morphAttributes.color||[];let P=0;T===!0&&(P=1),R===!0&&(P=2),_===!0&&(P=3);let z=f.attributes.position.count*P,D=1;z>e.maxTextureSize&&(D=Math.ceil(z/e.maxTextureSize),z=e.maxTextureSize);const k=new Float32Array(z*D*4*y),w=new w0(k,z,D,y);w.type=Ji,w.needsUpdate=!0;const I=P*4;for(let O=0;O<y;O++){const q=v[O],le=b[O],me=L[O],W=z*D*4*O;for(let te=0;te<q.count;te++){const $=te*I;T===!0&&(a.fromBufferAttribute(q,te),k[W+$+0]=a.x,k[W+$+1]=a.y,k[W+$+2]=a.z,k[W+$+3]=0),R===!0&&(a.fromBufferAttribute(le,te),k[W+$+4]=a.x,k[W+$+5]=a.y,k[W+$+6]=a.z,k[W+$+7]=0),_===!0&&(a.fromBufferAttribute(me,te),k[W+$+8]=a.x,k[W+$+9]=a.y,k[W+$+10]=a.z,k[W+$+11]=me.itemSize===4?a.w:1)}}g={count:y,texture:w,size:new Ht(z,D)},s.set(f,g),f.addEventListener("dispose",j)}if(u.isInstancedMesh===!0&&u.morphTexture!==null)p.getUniforms().setValue(r,"morphTexture",u.morphTexture,n);else{let T=0;for(let _=0;_<m.length;_++)T+=m[_];const R=f.morphTargetsRelative?1:1-T;p.getUniforms().setValue(r,"morphTargetBaseInfluence",R),p.getUniforms().setValue(r,"morphTargetInfluences",m)}p.getUniforms().setValue(r,"morphTargetsTexture",g.texture,n),p.getUniforms().setValue(r,"morphTargetsTextureSize",g.size)}return{update:l}}function KS(r,e,n,s,a){let l=new WeakMap;function u(m){const x=a.render.frame,y=m.geometry,g=e.get(m,y);if(l.get(g)!==x&&(e.update(g),l.set(g,x)),m.isInstancedMesh&&(m.hasEventListener("dispose",p)===!1&&m.addEventListener("dispose",p),l.get(m)!==x&&(n.update(m.instanceMatrix,r.ARRAY_BUFFER),m.instanceColor!==null&&n.update(m.instanceColor,r.ARRAY_BUFFER),l.set(m,x))),m.isSkinnedMesh){const S=m.skeleton;l.get(S)!==x&&(S.update(),l.set(S,x))}return g}function f(){l=new WeakMap}function p(m){const x=m.target;x.removeEventListener("dispose",p),s.releaseStatesOfObject(x),n.remove(x.instanceMatrix),x.instanceColor!==null&&n.remove(x.instanceColor)}return{update:u,dispose:f}}const ZS={[c0]:"LINEAR_TONE_MAPPING",[u0]:"REINHARD_TONE_MAPPING",[d0]:"CINEON_TONE_MAPPING",[df]:"ACES_FILMIC_TONE_MAPPING",[h0]:"AGX_TONE_MAPPING",[p0]:"NEUTRAL_TONE_MAPPING",[f0]:"CUSTOM_TONE_MAPPING"};function JS(r,e,n,s,a){const l=new tr(e,n,{type:r,depthBuffer:s,stencilBuffer:a,depthTexture:s?new _o(e,n):void 0}),u=new tr(e,n,{type:Er,depthBuffer:!1,stencilBuffer:!1}),f=new Si;f.setAttribute("position",new yn([-1,3,0,-1,-1,0,3,-1,0],3)),f.setAttribute("uv",new yn([0,2,0,0,2,0],2));const p=new Hv({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),m=new Fe(f,p),x=new Cf(-1,1,1,-1,0,1);let y=null,g=null,S=!1,T,R=null,_=[],v=!1;this.setSize=function(b,L){l.setSize(b,L),u.setSize(b,L);for(let P=0;P<_.length;P++){const z=_[P];z.setSize&&z.setSize(b,L)}},this.setEffects=function(b){_=b,v=_.length>0&&_[0].isRenderPass===!0;const L=l.width,P=l.height;for(let z=0;z<_.length;z++){const D=_[z];D.setSize&&D.setSize(L,P)}},this.begin=function(b,L){if(S||b.toneMapping===er&&_.length===0)return!1;if(R=L,L!==null){const P=L.width,z=L.height;(l.width!==P||l.height!==z)&&this.setSize(P,z)}return v===!1&&b.setRenderTarget(l),T=b.toneMapping,b.toneMapping=er,!0},this.hasRenderPass=function(){return v},this.end=function(b,L){b.toneMapping=T,S=!0;let P=l,z=u;for(let D=0;D<_.length;D++){const k=_[D];if(k.enabled!==!1&&(k.render(b,z,P,L),k.needsSwap!==!1)){const w=P;P=z,z=w}}if(y!==b.outputColorSpace||g!==b.toneMapping){y=b.outputColorSpace,g=b.toneMapping,p.defines={},zt.getTransfer(y)===Jt&&(p.defines.SRGB_TRANSFER="");const D=ZS[g];D&&(p.defines[D]=""),p.needsUpdate=!0}p.uniforms.tDiffuse.value=P.texture,b.setRenderTarget(R),b.render(m,x),R=null,S=!1},this.isCompositing=function(){return S},this.dispose=function(){l.depthTexture&&l.depthTexture.dispose(),l.dispose(),u.dispose(),f.dispose(),p.dispose()}}const O0=new $n,af=new _o(1,1),k0=new w0,B0=new _v,z0=new R0,Xm=[],jm=[],Ym=new Float32Array(16),qm=new Float32Array(9),$m=new Float32Array(4);function yo(r,e,n){const s=r[0];if(s<=0||s>0)return r;const a=e*n;let l=Xm[a];if(l===void 0&&(l=new Float32Array(a),Xm[a]=l),e!==0){s.toArray(l,0);for(let u=1,f=0;u!==e;++u)f+=n,r[u].toArray(l,f)}return l}function bn(r,e){if(r.length!==e.length)return!1;for(let n=0,s=r.length;n<s;n++)if(r[n]!==e[n])return!1;return!0}function Cn(r,e){for(let n=0,s=e.length;n<s;n++)r[n]=e[n]}function ec(r,e){let n=jm[e];n===void 0&&(n=new Int32Array(e),jm[e]=n);for(let s=0;s!==e;++s)n[s]=r.allocateTextureUnit();return n}function QS(r,e){const n=this.cache;n[0]!==e&&(r.uniform1f(this.addr,e),n[0]=e)}function e1(r,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(r.uniform2f(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(bn(n,e))return;r.uniform2fv(this.addr,e),Cn(n,e)}}function t1(r,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(r.uniform3f(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else if(e.r!==void 0)(n[0]!==e.r||n[1]!==e.g||n[2]!==e.b)&&(r.uniform3f(this.addr,e.r,e.g,e.b),n[0]=e.r,n[1]=e.g,n[2]=e.b);else{if(bn(n,e))return;r.uniform3fv(this.addr,e),Cn(n,e)}}function n1(r,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(r.uniform4f(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(bn(n,e))return;r.uniform4fv(this.addr,e),Cn(n,e)}}function i1(r,e){const n=this.cache,s=e.elements;if(s===void 0){if(bn(n,e))return;r.uniformMatrix2fv(this.addr,!1,e),Cn(n,e)}else{if(bn(n,s))return;$m.set(s),r.uniformMatrix2fv(this.addr,!1,$m),Cn(n,s)}}function r1(r,e){const n=this.cache,s=e.elements;if(s===void 0){if(bn(n,e))return;r.uniformMatrix3fv(this.addr,!1,e),Cn(n,e)}else{if(bn(n,s))return;qm.set(s),r.uniformMatrix3fv(this.addr,!1,qm),Cn(n,s)}}function s1(r,e){const n=this.cache,s=e.elements;if(s===void 0){if(bn(n,e))return;r.uniformMatrix4fv(this.addr,!1,e),Cn(n,e)}else{if(bn(n,s))return;Ym.set(s),r.uniformMatrix4fv(this.addr,!1,Ym),Cn(n,s)}}function o1(r,e){const n=this.cache;n[0]!==e&&(r.uniform1i(this.addr,e),n[0]=e)}function a1(r,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(r.uniform2i(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(bn(n,e))return;r.uniform2iv(this.addr,e),Cn(n,e)}}function l1(r,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(r.uniform3i(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(bn(n,e))return;r.uniform3iv(this.addr,e),Cn(n,e)}}function c1(r,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(r.uniform4i(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(bn(n,e))return;r.uniform4iv(this.addr,e),Cn(n,e)}}function u1(r,e){const n=this.cache;n[0]!==e&&(r.uniform1ui(this.addr,e),n[0]=e)}function d1(r,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(r.uniform2ui(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(bn(n,e))return;r.uniform2uiv(this.addr,e),Cn(n,e)}}function f1(r,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(r.uniform3ui(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(bn(n,e))return;r.uniform3uiv(this.addr,e),Cn(n,e)}}function h1(r,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(r.uniform4ui(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(bn(n,e))return;r.uniform4uiv(this.addr,e),Cn(n,e)}}function p1(r,e,n){const s=this.cache,a=n.allocateTextureUnit();s[0]!==a&&(r.uniform1i(this.addr,a),s[0]=a);let l;this.type===r.SAMPLER_2D_SHADOW?(af.compareFunction=n.isReversedDepthBuffer()?xf:vf,l=af):l=O0,n.setTexture2D(e||l,a)}function m1(r,e,n){const s=this.cache,a=n.allocateTextureUnit();s[0]!==a&&(r.uniform1i(this.addr,a),s[0]=a),n.setTexture3D(e||B0,a)}function g1(r,e,n){const s=this.cache,a=n.allocateTextureUnit();s[0]!==a&&(r.uniform1i(this.addr,a),s[0]=a),n.setTextureCube(e||z0,a)}function _1(r,e,n){const s=this.cache,a=n.allocateTextureUnit();s[0]!==a&&(r.uniform1i(this.addr,a),s[0]=a),n.setTexture2DArray(e||k0,a)}function v1(r){switch(r){case 5126:return QS;case 35664:return e1;case 35665:return t1;case 35666:return n1;case 35674:return i1;case 35675:return r1;case 35676:return s1;case 5124:case 35670:return o1;case 35667:case 35671:return a1;case 35668:case 35672:return l1;case 35669:case 35673:return c1;case 5125:return u1;case 36294:return d1;case 36295:return f1;case 36296:return h1;case 35678:case 36198:case 36298:case 36306:case 35682:return p1;case 35679:case 36299:case 36307:return m1;case 35680:case 36300:case 36308:case 36293:return g1;case 36289:case 36303:case 36311:case 36292:return _1}}function x1(r,e){r.uniform1fv(this.addr,e)}function y1(r,e){const n=yo(e,this.size,2);r.uniform2fv(this.addr,n)}function S1(r,e){const n=yo(e,this.size,3);r.uniform3fv(this.addr,n)}function M1(r,e){const n=yo(e,this.size,4);r.uniform4fv(this.addr,n)}function E1(r,e){const n=yo(e,this.size,4);r.uniformMatrix2fv(this.addr,!1,n)}function w1(r,e){const n=yo(e,this.size,9);r.uniformMatrix3fv(this.addr,!1,n)}function T1(r,e){const n=yo(e,this.size,16);r.uniformMatrix4fv(this.addr,!1,n)}function A1(r,e){r.uniform1iv(this.addr,e)}function b1(r,e){r.uniform2iv(this.addr,e)}function C1(r,e){r.uniform3iv(this.addr,e)}function R1(r,e){r.uniform4iv(this.addr,e)}function P1(r,e){r.uniform1uiv(this.addr,e)}function L1(r,e){r.uniform2uiv(this.addr,e)}function D1(r,e){r.uniform3uiv(this.addr,e)}function I1(r,e){r.uniform4uiv(this.addr,e)}function N1(r,e,n){const s=this.cache,a=e.length,l=ec(n,a);bn(s,l)||(r.uniform1iv(this.addr,l),Cn(s,l));let u;this.type===r.SAMPLER_2D_SHADOW?u=af:u=O0;for(let f=0;f!==a;++f)n.setTexture2D(e[f]||u,l[f])}function U1(r,e,n){const s=this.cache,a=e.length,l=ec(n,a);bn(s,l)||(r.uniform1iv(this.addr,l),Cn(s,l));for(let u=0;u!==a;++u)n.setTexture3D(e[u]||B0,l[u])}function F1(r,e,n){const s=this.cache,a=e.length,l=ec(n,a);bn(s,l)||(r.uniform1iv(this.addr,l),Cn(s,l));for(let u=0;u!==a;++u)n.setTextureCube(e[u]||z0,l[u])}function O1(r,e,n){const s=this.cache,a=e.length,l=ec(n,a);bn(s,l)||(r.uniform1iv(this.addr,l),Cn(s,l));for(let u=0;u!==a;++u)n.setTexture2DArray(e[u]||k0,l[u])}function k1(r){switch(r){case 5126:return x1;case 35664:return y1;case 35665:return S1;case 35666:return M1;case 35674:return E1;case 35675:return w1;case 35676:return T1;case 5124:case 35670:return A1;case 35667:case 35671:return b1;case 35668:case 35672:return C1;case 35669:case 35673:return R1;case 5125:return P1;case 36294:return L1;case 36295:return D1;case 36296:return I1;case 35678:case 36198:case 36298:case 36306:case 35682:return N1;case 35679:case 36299:case 36307:return U1;case 35680:case 36300:case 36308:case 36293:return F1;case 36289:case 36303:case 36311:case 36292:return O1}}class B1{constructor(e,n,s){this.id=e,this.addr=s,this.cache=[],this.type=n.type,this.setValue=v1(n.type)}}class z1{constructor(e,n,s){this.id=e,this.addr=s,this.cache=[],this.type=n.type,this.size=n.size,this.setValue=k1(n.type)}}class H1{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,n,s){const a=this.seq;for(let l=0,u=a.length;l!==u;++l){const f=a[l];f.setValue(e,n[f.id],s)}}}const fd=/(\w+)(\])?(\[|\.)?/g;function Km(r,e){r.seq.push(e),r.map[e.id]=e}function V1(r,e,n){const s=r.name,a=s.length;for(fd.lastIndex=0;;){const l=fd.exec(s),u=fd.lastIndex;let f=l[1];const p=l[2]==="]",m=l[3];if(p&&(f=f|0),m===void 0||m==="["&&u+2===a){Km(n,m===void 0?new B1(f,r,e):new z1(f,r,e));break}else{let y=n.map[f];y===void 0&&(y=new H1(f),Km(n,y)),n=y}}}class Vl{constructor(e,n){this.seq=[],this.map={};const s=e.getProgramParameter(n,e.ACTIVE_UNIFORMS);for(let u=0;u<s;++u){const f=e.getActiveUniform(n,u),p=e.getUniformLocation(n,f.name);V1(f,p,this)}const a=[],l=[];for(const u of this.seq)u.type===e.SAMPLER_2D_SHADOW||u.type===e.SAMPLER_CUBE_SHADOW||u.type===e.SAMPLER_2D_ARRAY_SHADOW?a.push(u):l.push(u);a.length>0&&(this.seq=a.concat(l))}setValue(e,n,s,a){const l=this.map[n];l!==void 0&&l.setValue(e,s,a)}setOptional(e,n,s){const a=n[s];a!==void 0&&this.setValue(e,s,a)}static upload(e,n,s,a){for(let l=0,u=n.length;l!==u;++l){const f=n[l],p=s[f.id];p.needsUpdate!==!1&&f.setValue(e,p.value,a)}}static seqWithValue(e,n){const s=[];for(let a=0,l=e.length;a!==l;++a){const u=e[a];u.id in n&&s.push(u)}return s}}function Zm(r,e,n){const s=r.createShader(e);return r.shaderSource(s,n),r.compileShader(s),s}const G1=37297;let W1=0;function X1(r,e){const n=r.split(`
`),s=[],a=Math.max(e-6,0),l=Math.min(e+6,n.length);for(let u=a;u<l;u++){const f=u+1;s.push(`${f===e?">":" "} ${f}: ${n[u]}`)}return s.join(`
`)}const Jm=new wt;function j1(r){zt._getMatrix(Jm,zt.workingColorSpace,r);const e=`mat3( ${Jm.elements.map(n=>n.toFixed(4))} )`;switch(zt.getTransfer(r)){case jl:return[e,"LinearTransferOETF"];case Jt:return[e,"sRGBTransferOETF"];default:return xt("WebGLProgram: Unsupported color space: ",r),[e,"LinearTransferOETF"]}}function Qm(r,e,n){const s=r.getShaderParameter(e,r.COMPILE_STATUS),l=(r.getShaderInfoLog(e)||"").trim();if(s&&l==="")return"";const u=/ERROR: 0:(\d+)/.exec(l);if(u){const f=parseInt(u[1]);return n.toUpperCase()+`

`+l+`

`+X1(r.getShaderSource(e),f)}else return l}function Y1(r,e){const n=j1(e);return[`vec4 ${r}( vec4 value ) {`,`	return ${n[1]}( vec4( value.rgb * ${n[0]}, value.a ) );`,"}"].join(`
`)}const q1={[c0]:"Linear",[u0]:"Reinhard",[d0]:"Cineon",[df]:"ACESFilmic",[h0]:"AgX",[p0]:"Neutral",[f0]:"Custom"};function $1(r,e){const n=q1[e];return n===void 0?(xt("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+r+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+r+"( vec3 color ) { return "+n+"ToneMapping( color ); }"}const Ol=new J;function K1(){zt.getLuminanceCoefficients(Ol);const r=Ol.x.toFixed(4),e=Ol.y.toFixed(4),n=Ol.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${r}, ${e}, ${n} );`,"	return dot( weights, rgb );","}"].join(`
`)}function Z1(r){return[r.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",r.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(la).join(`
`)}function J1(r){const e=[];for(const n in r){const s=r[n];s!==!1&&e.push("#define "+n+" "+s)}return e.join(`
`)}function Q1(r,e){const n={},s=r.getProgramParameter(e,r.ACTIVE_ATTRIBUTES);for(let a=0;a<s;a++){const l=r.getActiveAttrib(e,a),u=l.name;let f=1;l.type===r.FLOAT_MAT2&&(f=2),l.type===r.FLOAT_MAT3&&(f=3),l.type===r.FLOAT_MAT4&&(f=4),n[u]={type:l.type,location:r.getAttribLocation(e,u),locationSize:f}}return n}function la(r){return r!==""}function e0(r,e){const n=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return r.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,n).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function t0(r,e){return r.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const eM=/^[ \t]*#include +<([\w\d./]+)>/gm;function lf(r){return r.replace(eM,nM)}const tM=new Map;function nM(r,e){let n=bt[e];if(n===void 0){const s=tM.get(e);if(s!==void 0)n=bt[s],xt('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,s);else throw new Error("Can not resolve #include <"+e+">")}return lf(n)}const iM=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function n0(r){return r.replace(iM,rM)}function rM(r,e,n,s){let a="";for(let l=parseInt(e);l<parseInt(n);l++)a+=s.replace(/\[\s*i\s*\]/g,"[ "+l+" ]").replace(/UNROLLED_LOOP_INDEX/g,l);return a}function i0(r){let e=`precision ${r.precision} float;
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
#define LOW_PRECISION`),e}const sM={[ca]:"SHADOWMAP_TYPE_PCF",[aa]:"SHADOWMAP_TYPE_VSM"};function oM(r){return sM[r.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const aM={[As]:"ENVMAP_TYPE_CUBE",[go]:"ENVMAP_TYPE_CUBE",[Jl]:"ENVMAP_TYPE_CUBE_UV"};function lM(r){return r.envMap===!1?"ENVMAP_TYPE_CUBE":aM[r.envMapMode]||"ENVMAP_TYPE_CUBE"}const cM={[go]:"ENVMAP_MODE_REFRACTION"};function uM(r){return r.envMap===!1?"ENVMAP_MODE_REFLECTION":cM[r.envMapMode]||"ENVMAP_MODE_REFLECTION"}const dM={[l0]:"ENVMAP_BLENDING_MULTIPLY",[K_]:"ENVMAP_BLENDING_MIX",[Z_]:"ENVMAP_BLENDING_ADD"};function fM(r){return r.envMap===!1?"ENVMAP_BLENDING_NONE":dM[r.combine]||"ENVMAP_BLENDING_NONE"}function hM(r){const e=r.envMapCubeUVHeight;if(e===null)return null;const n=Math.log2(e)-2,s=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,n),112)),texelHeight:s,maxMip:n}}function pM(r,e,n,s){const a=r.getContext(),l=n.defines;let u=n.vertexShader,f=n.fragmentShader;const p=oM(n),m=lM(n),x=uM(n),y=fM(n),g=hM(n),S=Z1(n),T=J1(l),R=a.createProgram();let _,v,b=n.glslVersion?"#version "+n.glslVersion+`
`:"";n.isRawShaderMaterial?(_=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,T].filter(la).join(`
`),_.length>0&&(_+=`
`),v=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,T].filter(la).join(`
`),v.length>0&&(v+=`
`)):(_=[i0(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,T,n.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",n.batching?"#define USE_BATCHING":"",n.batchingColor?"#define USE_BATCHING_COLOR":"",n.instancing?"#define USE_INSTANCING":"",n.instancingColor?"#define USE_INSTANCING_COLOR":"",n.instancingMorph?"#define USE_INSTANCING_MORPH":"",n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.map?"#define USE_MAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+x:"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.displacementMap?"#define USE_DISPLACEMENTMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.mapUv?"#define MAP_UV "+n.mapUv:"",n.alphaMapUv?"#define ALPHAMAP_UV "+n.alphaMapUv:"",n.lightMapUv?"#define LIGHTMAP_UV "+n.lightMapUv:"",n.aoMapUv?"#define AOMAP_UV "+n.aoMapUv:"",n.emissiveMapUv?"#define EMISSIVEMAP_UV "+n.emissiveMapUv:"",n.bumpMapUv?"#define BUMPMAP_UV "+n.bumpMapUv:"",n.normalMapUv?"#define NORMALMAP_UV "+n.normalMapUv:"",n.displacementMapUv?"#define DISPLACEMENTMAP_UV "+n.displacementMapUv:"",n.metalnessMapUv?"#define METALNESSMAP_UV "+n.metalnessMapUv:"",n.roughnessMapUv?"#define ROUGHNESSMAP_UV "+n.roughnessMapUv:"",n.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+n.anisotropyMapUv:"",n.clearcoatMapUv?"#define CLEARCOATMAP_UV "+n.clearcoatMapUv:"",n.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+n.clearcoatNormalMapUv:"",n.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+n.clearcoatRoughnessMapUv:"",n.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+n.iridescenceMapUv:"",n.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+n.iridescenceThicknessMapUv:"",n.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+n.sheenColorMapUv:"",n.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+n.sheenRoughnessMapUv:"",n.specularMapUv?"#define SPECULARMAP_UV "+n.specularMapUv:"",n.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+n.specularColorMapUv:"",n.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+n.specularIntensityMapUv:"",n.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+n.transmissionMapUv:"",n.thicknessMapUv?"#define THICKNESSMAP_UV "+n.thicknessMapUv:"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexNormals?"#define HAS_NORMAL":"",n.vertexColors?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.flatShading?"#define FLAT_SHADED":"",n.skinning?"#define USE_SKINNING":"",n.morphTargets?"#define USE_MORPHTARGETS":"",n.morphNormals&&n.flatShading===!1?"#define USE_MORPHNORMALS":"",n.morphColors?"#define USE_MORPHCOLORS":"",n.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+n.morphTextureStride:"",n.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+n.morphTargetsCount:"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+p:"",n.sizeAttenuation?"#define USE_SIZEATTENUATION":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",n.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(la).join(`
`),v=[i0(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,T,n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",n.map?"#define USE_MAP":"",n.matcap?"#define USE_MATCAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+m:"",n.envMap?"#define "+x:"",n.envMap?"#define "+y:"",g?"#define CUBEUV_TEXEL_WIDTH "+g.texelWidth:"",g?"#define CUBEUV_TEXEL_HEIGHT "+g.texelHeight:"",g?"#define CUBEUV_MAX_MIP "+g.maxMip+".0":"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoat?"#define USE_CLEARCOAT":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.dispersion?"#define USE_DISPERSION":"",n.iridescence?"#define USE_IRIDESCENCE":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaTest?"#define USE_ALPHATEST":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.sheen?"#define USE_SHEEN":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors||n.instancingColor?"#define USE_COLOR":"",n.vertexAlphas||n.batchingColor?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.gradientMap?"#define USE_GRADIENTMAP":"",n.flatShading?"#define FLAT_SHADED":"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+p:"",n.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",n.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",n.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",n.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",n.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",n.toneMapping!==er?"#define TONE_MAPPING":"",n.toneMapping!==er?bt.tonemapping_pars_fragment:"",n.toneMapping!==er?$1("toneMapping",n.toneMapping):"",n.dithering?"#define DITHERING":"",n.opaque?"#define OPAQUE":"",bt.colorspace_pars_fragment,Y1("linearToOutputTexel",n.outputColorSpace),K1(),n.useDepthPacking?"#define DEPTH_PACKING "+n.depthPacking:"",`
`].filter(la).join(`
`)),u=lf(u),u=e0(u,n),u=t0(u,n),f=lf(f),f=e0(f,n),f=t0(f,n),u=n0(u),f=n0(f),n.isRawShaderMaterial!==!0&&(b=`#version 300 es
`,_=[S,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+_,v=["#define varying in",n.glslVersion===fm?"":"layout(location = 0) out highp vec4 pc_fragColor;",n.glslVersion===fm?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+v);const L=b+_+u,P=b+v+f,z=Zm(a,a.VERTEX_SHADER,L),D=Zm(a,a.FRAGMENT_SHADER,P);a.attachShader(R,z),a.attachShader(R,D),n.index0AttributeName!==void 0?a.bindAttribLocation(R,0,n.index0AttributeName):n.morphTargets===!0&&a.bindAttribLocation(R,0,"position"),a.linkProgram(R);function k(O){if(r.debug.checkShaderErrors){const q=a.getProgramInfoLog(R)||"",le=a.getShaderInfoLog(z)||"",me=a.getShaderInfoLog(D)||"",W=q.trim(),te=le.trim(),$=me.trim();let K=!0,fe=!0;if(a.getProgramParameter(R,a.LINK_STATUS)===!1)if(K=!1,typeof r.debug.onShaderError=="function")r.debug.onShaderError(a,R,z,D);else{const he=Qm(a,z,"vertex"),U=Qm(a,D,"fragment");Xt("THREE.WebGLProgram: Shader Error "+a.getError()+" - VALIDATE_STATUS "+a.getProgramParameter(R,a.VALIDATE_STATUS)+`

Material Name: `+O.name+`
Material Type: `+O.type+`

Program Info Log: `+W+`
`+he+`
`+U)}else W!==""?xt("WebGLProgram: Program Info Log:",W):(te===""||$==="")&&(fe=!1);fe&&(O.diagnostics={runnable:K,programLog:W,vertexShader:{log:te,prefix:_},fragmentShader:{log:$,prefix:v}})}a.deleteShader(z),a.deleteShader(D),w=new Vl(a,R),I=Q1(a,R)}let w;this.getUniforms=function(){return w===void 0&&k(this),w};let I;this.getAttributes=function(){return I===void 0&&k(this),I};let j=n.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return j===!1&&(j=a.getProgramParameter(R,G1)),j},this.destroy=function(){s.releaseStatesOfProgram(this),a.deleteProgram(R),this.program=void 0},this.type=n.shaderType,this.name=n.shaderName,this.id=W1++,this.cacheKey=e,this.usedTimes=1,this.program=R,this.vertexShader=z,this.fragmentShader=D,this}let mM=0;class gM{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const n=e.vertexShader,s=e.fragmentShader,a=this._getShaderStage(n),l=this._getShaderStage(s),u=this._getShaderCacheForMaterial(e);return u.has(a)===!1&&(u.add(a),a.usedTimes++),u.has(l)===!1&&(u.add(l),l.usedTimes++),this}remove(e){const n=this.materialCache.get(e);for(const s of n)s.usedTimes--,s.usedTimes===0&&this.shaderCache.delete(s.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const n=this.materialCache;let s=n.get(e);return s===void 0&&(s=new Set,n.set(e,s)),s}_getShaderStage(e){const n=this.shaderCache;let s=n.get(e);return s===void 0&&(s=new _M(e),n.set(e,s)),s}}class _M{constructor(e){this.id=mM++,this.code=e,this.usedTimes=0}}function vM(r){return r===bs||r===Gl||r===Wl}function xM(r,e,n,s,a,l){const u=new Sf,f=new gM,p=new Set,m=[],x=new Map,y=s.logarithmicDepthBuffer;let g=s.precision;const S={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function T(w){return p.add(w),w===0?"uv":`uv${w}`}function R(w,I,j,O,q,le){const me=O.fog,W=q.geometry,te=w.isMeshStandardMaterial||w.isMeshLambertMaterial||w.isMeshPhongMaterial?O.environment:null,$=w.isMeshStandardMaterial||w.isMeshLambertMaterial&&!w.envMap||w.isMeshPhongMaterial&&!w.envMap,K=e.get(w.envMap||te,$),fe=K&&K.mapping===Jl?K.image.height:null,he=S[w.type];w.precision!==null&&(g=s.getMaxPrecision(w.precision),g!==w.precision&&xt("WebGLProgram.getParameters:",w.precision,"not supported, using",g,"instead."));const U=W.morphAttributes.position||W.morphAttributes.normal||W.morphAttributes.color,ne=U!==void 0?U.length:0;let Xe=0;W.morphAttributes.position!==void 0&&(Xe=1),W.morphAttributes.normal!==void 0&&(Xe=2),W.morphAttributes.color!==void 0&&(Xe=3);let ze,We,ce,we;if(he){const Qe=Zi[he];ze=Qe.vertexShader,We=Qe.fragmentShader}else ze=w.vertexShader,We=w.fragmentShader,f.update(w),ce=f.getVertexShaderID(w),we=f.getFragmentShaderID(w);const xe=r.getRenderTarget(),ke=r.state.buffers.depth.getReversed(),rt=q.isInstancedMesh===!0,tt=q.isBatchedMesh===!0,Vt=!!w.map,ct=!!w.matcap,Rt=!!K,kt=!!w.aoMap,ut=!!w.lightMap,Ut=!!w.bumpMap,Yt=!!w.normalMap,un=!!w.displacementMap,G=!!w.emissiveMap,Bt=!!w.metalnessMap,oe=!!w.roughnessMap,F=w.anisotropy>0,Se=w.clearcoat>0,Lt=w.dispersion>0,C=w.iridescence>0,M=w.sheen>0,Z=w.transmission>0,ge=F&&!!w.anisotropyMap,ye=Se&&!!w.clearcoatMap,Ee=Se&&!!w.clearcoatNormalMap,Re=Se&&!!w.clearcoatRoughnessMap,pe=C&&!!w.iridescenceMap,_e=C&&!!w.iridescenceThicknessMap,Ie=M&&!!w.sheenColorMap,Ge=M&&!!w.sheenRoughnessMap,Ne=!!w.specularMap,be=!!w.specularColorMap,dt=!!w.specularIntensityMap,ft=Z&&!!w.transmissionMap,yt=Z&&!!w.thicknessMap,B=!!w.gradientMap,Ce=!!w.alphaMap,ve=w.alphaTest>0,je=!!w.alphaHash,Ue=!!w.extensions;let Me=er;w.toneMapped&&(xe===null||xe.isXRRenderTarget===!0)&&(Me=r.toneMapping);const Ke={shaderID:he,shaderType:w.type,shaderName:w.name,vertexShader:ze,fragmentShader:We,defines:w.defines,customVertexShaderID:ce,customFragmentShaderID:we,isRawShaderMaterial:w.isRawShaderMaterial===!0,glslVersion:w.glslVersion,precision:g,batching:tt,batchingColor:tt&&q._colorsTexture!==null,instancing:rt,instancingColor:rt&&q.instanceColor!==null,instancingMorph:rt&&q.morphTexture!==null,outputColorSpace:xe===null?r.outputColorSpace:xe.isXRRenderTarget===!0?xe.texture.colorSpace:zt.workingColorSpace,alphaToCoverage:!!w.alphaToCoverage,map:Vt,matcap:ct,envMap:Rt,envMapMode:Rt&&K.mapping,envMapCubeUVHeight:fe,aoMap:kt,lightMap:ut,bumpMap:Ut,normalMap:Yt,displacementMap:un,emissiveMap:G,normalMapObjectSpace:Yt&&w.normalMapType===ev,normalMapTangentSpace:Yt&&w.normalMapType===nf,packedNormalMap:Yt&&w.normalMapType===nf&&vM(w.normalMap.format),metalnessMap:Bt,roughnessMap:oe,anisotropy:F,anisotropyMap:ge,clearcoat:Se,clearcoatMap:ye,clearcoatNormalMap:Ee,clearcoatRoughnessMap:Re,dispersion:Lt,iridescence:C,iridescenceMap:pe,iridescenceThicknessMap:_e,sheen:M,sheenColorMap:Ie,sheenRoughnessMap:Ge,specularMap:Ne,specularColorMap:be,specularIntensityMap:dt,transmission:Z,transmissionMap:ft,thicknessMap:yt,gradientMap:B,opaque:w.transparent===!1&&w.blending===ho&&w.alphaToCoverage===!1,alphaMap:Ce,alphaTest:ve,alphaHash:je,combine:w.combine,mapUv:Vt&&T(w.map.channel),aoMapUv:kt&&T(w.aoMap.channel),lightMapUv:ut&&T(w.lightMap.channel),bumpMapUv:Ut&&T(w.bumpMap.channel),normalMapUv:Yt&&T(w.normalMap.channel),displacementMapUv:un&&T(w.displacementMap.channel),emissiveMapUv:G&&T(w.emissiveMap.channel),metalnessMapUv:Bt&&T(w.metalnessMap.channel),roughnessMapUv:oe&&T(w.roughnessMap.channel),anisotropyMapUv:ge&&T(w.anisotropyMap.channel),clearcoatMapUv:ye&&T(w.clearcoatMap.channel),clearcoatNormalMapUv:Ee&&T(w.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Re&&T(w.clearcoatRoughnessMap.channel),iridescenceMapUv:pe&&T(w.iridescenceMap.channel),iridescenceThicknessMapUv:_e&&T(w.iridescenceThicknessMap.channel),sheenColorMapUv:Ie&&T(w.sheenColorMap.channel),sheenRoughnessMapUv:Ge&&T(w.sheenRoughnessMap.channel),specularMapUv:Ne&&T(w.specularMap.channel),specularColorMapUv:be&&T(w.specularColorMap.channel),specularIntensityMapUv:dt&&T(w.specularIntensityMap.channel),transmissionMapUv:ft&&T(w.transmissionMap.channel),thicknessMapUv:yt&&T(w.thicknessMap.channel),alphaMapUv:Ce&&T(w.alphaMap.channel),vertexTangents:!!W.attributes.tangent&&(Yt||F),vertexNormals:!!W.attributes.normal,vertexColors:w.vertexColors,vertexAlphas:w.vertexColors===!0&&!!W.attributes.color&&W.attributes.color.itemSize===4,pointsUvs:q.isPoints===!0&&!!W.attributes.uv&&(Vt||Ce),fog:!!me,useFog:w.fog===!0,fogExp2:!!me&&me.isFogExp2,flatShading:w.wireframe===!1&&(w.flatShading===!0||W.attributes.normal===void 0&&Yt===!1&&(w.isMeshLambertMaterial||w.isMeshPhongMaterial||w.isMeshStandardMaterial||w.isMeshPhysicalMaterial)),sizeAttenuation:w.sizeAttenuation===!0,logarithmicDepthBuffer:y,reversedDepthBuffer:ke,skinning:q.isSkinnedMesh===!0,morphTargets:W.morphAttributes.position!==void 0,morphNormals:W.morphAttributes.normal!==void 0,morphColors:W.morphAttributes.color!==void 0,morphTargetsCount:ne,morphTextureStride:Xe,numDirLights:I.directional.length,numPointLights:I.point.length,numSpotLights:I.spot.length,numSpotLightMaps:I.spotLightMap.length,numRectAreaLights:I.rectArea.length,numHemiLights:I.hemi.length,numDirLightShadows:I.directionalShadowMap.length,numPointLightShadows:I.pointShadowMap.length,numSpotLightShadows:I.spotShadowMap.length,numSpotLightShadowsWithMaps:I.numSpotLightShadowsWithMaps,numLightProbes:I.numLightProbes,numLightProbeGrids:le.length,numClippingPlanes:l.numPlanes,numClipIntersection:l.numIntersection,dithering:w.dithering,shadowMapEnabled:r.shadowMap.enabled&&j.length>0,shadowMapType:r.shadowMap.type,toneMapping:Me,decodeVideoTexture:Vt&&w.map.isVideoTexture===!0&&zt.getTransfer(w.map.colorSpace)===Jt,decodeVideoTextureEmissive:G&&w.emissiveMap.isVideoTexture===!0&&zt.getTransfer(w.emissiveMap.colorSpace)===Jt,premultipliedAlpha:w.premultipliedAlpha,doubleSided:w.side===Ri,flipSided:w.side===fi,useDepthPacking:w.depthPacking>=0,depthPacking:w.depthPacking||0,index0AttributeName:w.index0AttributeName,extensionClipCullDistance:Ue&&w.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Ue&&w.extensions.multiDraw===!0||tt)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:w.customProgramCacheKey()};return Ke.vertexUv1s=p.has(1),Ke.vertexUv2s=p.has(2),Ke.vertexUv3s=p.has(3),p.clear(),Ke}function _(w){const I=[];if(w.shaderID?I.push(w.shaderID):(I.push(w.customVertexShaderID),I.push(w.customFragmentShaderID)),w.defines!==void 0)for(const j in w.defines)I.push(j),I.push(w.defines[j]);return w.isRawShaderMaterial===!1&&(v(I,w),b(I,w),I.push(r.outputColorSpace)),I.push(w.customProgramCacheKey),I.join()}function v(w,I){w.push(I.precision),w.push(I.outputColorSpace),w.push(I.envMapMode),w.push(I.envMapCubeUVHeight),w.push(I.mapUv),w.push(I.alphaMapUv),w.push(I.lightMapUv),w.push(I.aoMapUv),w.push(I.bumpMapUv),w.push(I.normalMapUv),w.push(I.displacementMapUv),w.push(I.emissiveMapUv),w.push(I.metalnessMapUv),w.push(I.roughnessMapUv),w.push(I.anisotropyMapUv),w.push(I.clearcoatMapUv),w.push(I.clearcoatNormalMapUv),w.push(I.clearcoatRoughnessMapUv),w.push(I.iridescenceMapUv),w.push(I.iridescenceThicknessMapUv),w.push(I.sheenColorMapUv),w.push(I.sheenRoughnessMapUv),w.push(I.specularMapUv),w.push(I.specularColorMapUv),w.push(I.specularIntensityMapUv),w.push(I.transmissionMapUv),w.push(I.thicknessMapUv),w.push(I.combine),w.push(I.fogExp2),w.push(I.sizeAttenuation),w.push(I.morphTargetsCount),w.push(I.morphAttributeCount),w.push(I.numDirLights),w.push(I.numPointLights),w.push(I.numSpotLights),w.push(I.numSpotLightMaps),w.push(I.numHemiLights),w.push(I.numRectAreaLights),w.push(I.numDirLightShadows),w.push(I.numPointLightShadows),w.push(I.numSpotLightShadows),w.push(I.numSpotLightShadowsWithMaps),w.push(I.numLightProbes),w.push(I.shadowMapType),w.push(I.toneMapping),w.push(I.numClippingPlanes),w.push(I.numClipIntersection),w.push(I.depthPacking)}function b(w,I){u.disableAll(),I.instancing&&u.enable(0),I.instancingColor&&u.enable(1),I.instancingMorph&&u.enable(2),I.matcap&&u.enable(3),I.envMap&&u.enable(4),I.normalMapObjectSpace&&u.enable(5),I.normalMapTangentSpace&&u.enable(6),I.clearcoat&&u.enable(7),I.iridescence&&u.enable(8),I.alphaTest&&u.enable(9),I.vertexColors&&u.enable(10),I.vertexAlphas&&u.enable(11),I.vertexUv1s&&u.enable(12),I.vertexUv2s&&u.enable(13),I.vertexUv3s&&u.enable(14),I.vertexTangents&&u.enable(15),I.anisotropy&&u.enable(16),I.alphaHash&&u.enable(17),I.batching&&u.enable(18),I.dispersion&&u.enable(19),I.batchingColor&&u.enable(20),I.gradientMap&&u.enable(21),I.packedNormalMap&&u.enable(22),I.vertexNormals&&u.enable(23),w.push(u.mask),u.disableAll(),I.fog&&u.enable(0),I.useFog&&u.enable(1),I.flatShading&&u.enable(2),I.logarithmicDepthBuffer&&u.enable(3),I.reversedDepthBuffer&&u.enable(4),I.skinning&&u.enable(5),I.morphTargets&&u.enable(6),I.morphNormals&&u.enable(7),I.morphColors&&u.enable(8),I.premultipliedAlpha&&u.enable(9),I.shadowMapEnabled&&u.enable(10),I.doubleSided&&u.enable(11),I.flipSided&&u.enable(12),I.useDepthPacking&&u.enable(13),I.dithering&&u.enable(14),I.transmission&&u.enable(15),I.sheen&&u.enable(16),I.opaque&&u.enable(17),I.pointsUvs&&u.enable(18),I.decodeVideoTexture&&u.enable(19),I.decodeVideoTextureEmissive&&u.enable(20),I.alphaToCoverage&&u.enable(21),I.numLightProbeGrids>0&&u.enable(22),w.push(u.mask)}function L(w){const I=S[w.type];let j;if(I){const O=Zi[I];j=kv.clone(O.uniforms)}else j=w.uniforms;return j}function P(w,I){let j=x.get(I);return j!==void 0?++j.usedTimes:(j=new pM(r,I,w,a),m.push(j),x.set(I,j)),j}function z(w){if(--w.usedTimes===0){const I=m.indexOf(w);m[I]=m[m.length-1],m.pop(),x.delete(w.cacheKey),w.destroy()}}function D(w){f.remove(w)}function k(){f.dispose()}return{getParameters:R,getProgramCacheKey:_,getUniforms:L,acquireProgram:P,releaseProgram:z,releaseShaderCache:D,programs:m,dispose:k}}function yM(){let r=new WeakMap;function e(u){return r.has(u)}function n(u){let f=r.get(u);return f===void 0&&(f={},r.set(u,f)),f}function s(u){r.delete(u)}function a(u,f,p){r.get(u)[f]=p}function l(){r=new WeakMap}return{has:e,get:n,remove:s,update:a,dispose:l}}function SM(r,e){return r.groupOrder!==e.groupOrder?r.groupOrder-e.groupOrder:r.renderOrder!==e.renderOrder?r.renderOrder-e.renderOrder:r.material.id!==e.material.id?r.material.id-e.material.id:r.materialVariant!==e.materialVariant?r.materialVariant-e.materialVariant:r.z!==e.z?r.z-e.z:r.id-e.id}function r0(r,e){return r.groupOrder!==e.groupOrder?r.groupOrder-e.groupOrder:r.renderOrder!==e.renderOrder?r.renderOrder-e.renderOrder:r.z!==e.z?e.z-r.z:r.id-e.id}function s0(){const r=[];let e=0;const n=[],s=[],a=[];function l(){e=0,n.length=0,s.length=0,a.length=0}function u(g){let S=0;return g.isInstancedMesh&&(S+=2),g.isSkinnedMesh&&(S+=1),S}function f(g,S,T,R,_,v){let b=r[e];return b===void 0?(b={id:g.id,object:g,geometry:S,material:T,materialVariant:u(g),groupOrder:R,renderOrder:g.renderOrder,z:_,group:v},r[e]=b):(b.id=g.id,b.object=g,b.geometry=S,b.material=T,b.materialVariant=u(g),b.groupOrder=R,b.renderOrder=g.renderOrder,b.z=_,b.group=v),e++,b}function p(g,S,T,R,_,v){const b=f(g,S,T,R,_,v);T.transmission>0?s.push(b):T.transparent===!0?a.push(b):n.push(b)}function m(g,S,T,R,_,v){const b=f(g,S,T,R,_,v);T.transmission>0?s.unshift(b):T.transparent===!0?a.unshift(b):n.unshift(b)}function x(g,S){n.length>1&&n.sort(g||SM),s.length>1&&s.sort(S||r0),a.length>1&&a.sort(S||r0)}function y(){for(let g=e,S=r.length;g<S;g++){const T=r[g];if(T.id===null)break;T.id=null,T.object=null,T.geometry=null,T.material=null,T.group=null}}return{opaque:n,transmissive:s,transparent:a,init:l,push:p,unshift:m,finish:y,sort:x}}function MM(){let r=new WeakMap;function e(s,a){const l=r.get(s);let u;return l===void 0?(u=new s0,r.set(s,[u])):a>=l.length?(u=new s0,l.push(u)):u=l[a],u}function n(){r=new WeakMap}return{get:e,dispose:n}}function EM(){const r={};return{get:function(e){if(r[e.id]!==void 0)return r[e.id];let n;switch(e.type){case"DirectionalLight":n={direction:new J,color:new Ct};break;case"SpotLight":n={position:new J,direction:new J,color:new Ct,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":n={position:new J,color:new Ct,distance:0,decay:0};break;case"HemisphereLight":n={direction:new J,skyColor:new Ct,groundColor:new Ct};break;case"RectAreaLight":n={color:new Ct,position:new J,halfWidth:new J,halfHeight:new J};break}return r[e.id]=n,n}}}function wM(){const r={};return{get:function(e){if(r[e.id]!==void 0)return r[e.id];let n;switch(e.type){case"DirectionalLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ht};break;case"SpotLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ht};break;case"PointLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ht,shadowCameraNear:1,shadowCameraFar:1e3};break}return r[e.id]=n,n}}}let TM=0;function AM(r,e){return(e.castShadow?2:0)-(r.castShadow?2:0)+(e.map?1:0)-(r.map?1:0)}function bM(r){const e=new EM,n=wM(),s={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let m=0;m<9;m++)s.probe.push(new J);const a=new J,l=new _n,u=new _n;function f(m){let x=0,y=0,g=0;for(let I=0;I<9;I++)s.probe[I].set(0,0,0);let S=0,T=0,R=0,_=0,v=0,b=0,L=0,P=0,z=0,D=0,k=0;m.sort(AM);for(let I=0,j=m.length;I<j;I++){const O=m[I],q=O.color,le=O.intensity,me=O.distance;let W=null;if(O.shadow&&O.shadow.map&&(O.shadow.map.texture.format===bs?W=O.shadow.map.texture:W=O.shadow.map.depthTexture||O.shadow.map.texture),O.isAmbientLight)x+=q.r*le,y+=q.g*le,g+=q.b*le;else if(O.isLightProbe){for(let te=0;te<9;te++)s.probe[te].addScaledVector(O.sh.coefficients[te],le);k++}else if(O.isDirectionalLight){const te=e.get(O);if(te.color.copy(O.color).multiplyScalar(O.intensity),O.castShadow){const $=O.shadow,K=n.get(O);K.shadowIntensity=$.intensity,K.shadowBias=$.bias,K.shadowNormalBias=$.normalBias,K.shadowRadius=$.radius,K.shadowMapSize=$.mapSize,s.directionalShadow[S]=K,s.directionalShadowMap[S]=W,s.directionalShadowMatrix[S]=O.shadow.matrix,b++}s.directional[S]=te,S++}else if(O.isSpotLight){const te=e.get(O);te.position.setFromMatrixPosition(O.matrixWorld),te.color.copy(q).multiplyScalar(le),te.distance=me,te.coneCos=Math.cos(O.angle),te.penumbraCos=Math.cos(O.angle*(1-O.penumbra)),te.decay=O.decay,s.spot[R]=te;const $=O.shadow;if(O.map&&(s.spotLightMap[z]=O.map,z++,$.updateMatrices(O),O.castShadow&&D++),s.spotLightMatrix[R]=$.matrix,O.castShadow){const K=n.get(O);K.shadowIntensity=$.intensity,K.shadowBias=$.bias,K.shadowNormalBias=$.normalBias,K.shadowRadius=$.radius,K.shadowMapSize=$.mapSize,s.spotShadow[R]=K,s.spotShadowMap[R]=W,P++}R++}else if(O.isRectAreaLight){const te=e.get(O);te.color.copy(q).multiplyScalar(le),te.halfWidth.set(O.width*.5,0,0),te.halfHeight.set(0,O.height*.5,0),s.rectArea[_]=te,_++}else if(O.isPointLight){const te=e.get(O);if(te.color.copy(O.color).multiplyScalar(O.intensity),te.distance=O.distance,te.decay=O.decay,O.castShadow){const $=O.shadow,K=n.get(O);K.shadowIntensity=$.intensity,K.shadowBias=$.bias,K.shadowNormalBias=$.normalBias,K.shadowRadius=$.radius,K.shadowMapSize=$.mapSize,K.shadowCameraNear=$.camera.near,K.shadowCameraFar=$.camera.far,s.pointShadow[T]=K,s.pointShadowMap[T]=W,s.pointShadowMatrix[T]=O.shadow.matrix,L++}s.point[T]=te,T++}else if(O.isHemisphereLight){const te=e.get(O);te.skyColor.copy(O.color).multiplyScalar(le),te.groundColor.copy(O.groundColor).multiplyScalar(le),s.hemi[v]=te,v++}}_>0&&(r.has("OES_texture_float_linear")===!0?(s.rectAreaLTC1=Ye.LTC_FLOAT_1,s.rectAreaLTC2=Ye.LTC_FLOAT_2):(s.rectAreaLTC1=Ye.LTC_HALF_1,s.rectAreaLTC2=Ye.LTC_HALF_2)),s.ambient[0]=x,s.ambient[1]=y,s.ambient[2]=g;const w=s.hash;(w.directionalLength!==S||w.pointLength!==T||w.spotLength!==R||w.rectAreaLength!==_||w.hemiLength!==v||w.numDirectionalShadows!==b||w.numPointShadows!==L||w.numSpotShadows!==P||w.numSpotMaps!==z||w.numLightProbes!==k)&&(s.directional.length=S,s.spot.length=R,s.rectArea.length=_,s.point.length=T,s.hemi.length=v,s.directionalShadow.length=b,s.directionalShadowMap.length=b,s.pointShadow.length=L,s.pointShadowMap.length=L,s.spotShadow.length=P,s.spotShadowMap.length=P,s.directionalShadowMatrix.length=b,s.pointShadowMatrix.length=L,s.spotLightMatrix.length=P+z-D,s.spotLightMap.length=z,s.numSpotLightShadowsWithMaps=D,s.numLightProbes=k,w.directionalLength=S,w.pointLength=T,w.spotLength=R,w.rectAreaLength=_,w.hemiLength=v,w.numDirectionalShadows=b,w.numPointShadows=L,w.numSpotShadows=P,w.numSpotMaps=z,w.numLightProbes=k,s.version=TM++)}function p(m,x){let y=0,g=0,S=0,T=0,R=0;const _=x.matrixWorldInverse;for(let v=0,b=m.length;v<b;v++){const L=m[v];if(L.isDirectionalLight){const P=s.directional[y];P.direction.setFromMatrixPosition(L.matrixWorld),a.setFromMatrixPosition(L.target.matrixWorld),P.direction.sub(a),P.direction.transformDirection(_),y++}else if(L.isSpotLight){const P=s.spot[S];P.position.setFromMatrixPosition(L.matrixWorld),P.position.applyMatrix4(_),P.direction.setFromMatrixPosition(L.matrixWorld),a.setFromMatrixPosition(L.target.matrixWorld),P.direction.sub(a),P.direction.transformDirection(_),S++}else if(L.isRectAreaLight){const P=s.rectArea[T];P.position.setFromMatrixPosition(L.matrixWorld),P.position.applyMatrix4(_),u.identity(),l.copy(L.matrixWorld),l.premultiply(_),u.extractRotation(l),P.halfWidth.set(L.width*.5,0,0),P.halfHeight.set(0,L.height*.5,0),P.halfWidth.applyMatrix4(u),P.halfHeight.applyMatrix4(u),T++}else if(L.isPointLight){const P=s.point[g];P.position.setFromMatrixPosition(L.matrixWorld),P.position.applyMatrix4(_),g++}else if(L.isHemisphereLight){const P=s.hemi[R];P.direction.setFromMatrixPosition(L.matrixWorld),P.direction.transformDirection(_),R++}}}return{setup:f,setupView:p,state:s}}function o0(r){const e=new bM(r),n=[],s=[],a=[];function l(g){y.camera=g,n.length=0,s.length=0,a.length=0}function u(g){n.push(g)}function f(g){s.push(g)}function p(g){a.push(g)}function m(){e.setup(n)}function x(g){e.setupView(n,g)}const y={lightsArray:n,shadowsArray:s,lightProbeGridArray:a,camera:null,lights:e,transmissionRenderTarget:{},textureUnits:0};return{init:l,state:y,setupLights:m,setupLightsView:x,pushLight:u,pushShadow:f,pushLightProbeGrid:p}}function CM(r){let e=new WeakMap;function n(a,l=0){const u=e.get(a);let f;return u===void 0?(f=new o0(r),e.set(a,[f])):l>=u.length?(f=new o0(r),u.push(f)):f=u[l],f}function s(){e=new WeakMap}return{get:n,dispose:s}}const RM=`void main() {
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
}`,LM=[new J(1,0,0),new J(-1,0,0),new J(0,1,0),new J(0,-1,0),new J(0,0,1),new J(0,0,-1)],DM=[new J(0,-1,0),new J(0,-1,0),new J(0,0,1),new J(0,0,-1),new J(0,-1,0),new J(0,-1,0)],a0=new _n,oa=new J,hd=new J;function IM(r,e,n){let s=new wf;const a=new Ht,l=new Ht,u=new gn,f=new Gv,p=new Wv,m={},x=n.maxTextureSize,y={[es]:fi,[fi]:es,[Ri]:Ri},g=new rr({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Ht},radius:{value:4}},vertexShader:RM,fragmentShader:PM}),S=g.clone();S.defines.HORIZONTAL_PASS=1;const T=new Si;T.setAttribute("position",new nr(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const R=new Fe(T,g),_=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=ca;let v=this.type;this.render=function(D,k,w){if(_.enabled===!1||_.autoUpdate===!1&&_.needsUpdate===!1||D.length===0)return;this.type===L_&&(xt("WebGLShadowMap: PCFSoftShadowMap has been deprecated. Using PCFShadowMap instead."),this.type=ca);const I=r.getRenderTarget(),j=r.getActiveCubeFace(),O=r.getActiveMipmapLevel(),q=r.state;q.setBlending(Sr),q.buffers.depth.getReversed()===!0?q.buffers.color.setClear(0,0,0,0):q.buffers.color.setClear(1,1,1,1),q.buffers.depth.setTest(!0),q.setScissorTest(!1);const le=v!==this.type;le&&k.traverse(function(me){me.material&&(Array.isArray(me.material)?me.material.forEach(W=>W.needsUpdate=!0):me.material.needsUpdate=!0)});for(let me=0,W=D.length;me<W;me++){const te=D[me],$=te.shadow;if($===void 0){xt("WebGLShadowMap:",te,"has no shadow.");continue}if($.autoUpdate===!1&&$.needsUpdate===!1)continue;a.copy($.mapSize);const K=$.getFrameExtents();a.multiply(K),l.copy($.mapSize),(a.x>x||a.y>x)&&(a.x>x&&(l.x=Math.floor(x/K.x),a.x=l.x*K.x,$.mapSize.x=l.x),a.y>x&&(l.y=Math.floor(x/K.y),a.y=l.y*K.y,$.mapSize.y=l.y));const fe=r.state.buffers.depth.getReversed();if($.camera._reversedDepth=fe,$.map===null||le===!0){if($.map!==null&&($.map.depthTexture!==null&&($.map.depthTexture.dispose(),$.map.depthTexture=null),$.map.dispose()),this.type===aa){if(te.isPointLight){xt("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}$.map=new tr(a.x,a.y,{format:bs,type:Er,minFilter:qn,magFilter:qn,generateMipmaps:!1}),$.map.texture.name=te.name+".shadowMap",$.map.depthTexture=new _o(a.x,a.y,Ji),$.map.depthTexture.name=te.name+".shadowMapDepth",$.map.depthTexture.format=wr,$.map.depthTexture.compareFunction=null,$.map.depthTexture.minFilter=Bn,$.map.depthTexture.magFilter=Bn}else te.isPointLight?($.map=new F0(a.x),$.map.depthTexture=new Fv(a.x,ir)):($.map=new tr(a.x,a.y),$.map.depthTexture=new _o(a.x,a.y,ir)),$.map.depthTexture.name=te.name+".shadowMap",$.map.depthTexture.format=wr,this.type===ca?($.map.depthTexture.compareFunction=fe?xf:vf,$.map.depthTexture.minFilter=qn,$.map.depthTexture.magFilter=qn):($.map.depthTexture.compareFunction=null,$.map.depthTexture.minFilter=Bn,$.map.depthTexture.magFilter=Bn);$.camera.updateProjectionMatrix()}const he=$.map.isWebGLCubeRenderTarget?6:1;for(let U=0;U<he;U++){if($.map.isWebGLCubeRenderTarget)r.setRenderTarget($.map,U),r.clear();else{U===0&&(r.setRenderTarget($.map),r.clear());const ne=$.getViewport(U);u.set(l.x*ne.x,l.y*ne.y,l.x*ne.z,l.y*ne.w),q.viewport(u)}if(te.isPointLight){const ne=$.camera,Xe=$.matrix,ze=te.distance||ne.far;ze!==ne.far&&(ne.far=ze,ne.updateProjectionMatrix()),oa.setFromMatrixPosition(te.matrixWorld),ne.position.copy(oa),hd.copy(ne.position),hd.add(LM[U]),ne.up.copy(DM[U]),ne.lookAt(hd),ne.updateMatrixWorld(),Xe.makeTranslation(-oa.x,-oa.y,-oa.z),a0.multiplyMatrices(ne.projectionMatrix,ne.matrixWorldInverse),$._frustum.setFromProjectionMatrix(a0,ne.coordinateSystem,ne.reversedDepth)}else $.updateMatrices(te);s=$.getFrustum(),P(k,w,$.camera,te,this.type)}$.isPointLightShadow!==!0&&this.type===aa&&b($,w),$.needsUpdate=!1}v=this.type,_.needsUpdate=!1,r.setRenderTarget(I,j,O)};function b(D,k){const w=e.update(R);g.defines.VSM_SAMPLES!==D.blurSamples&&(g.defines.VSM_SAMPLES=D.blurSamples,S.defines.VSM_SAMPLES=D.blurSamples,g.needsUpdate=!0,S.needsUpdate=!0),D.mapPass===null&&(D.mapPass=new tr(a.x,a.y,{format:bs,type:Er})),g.uniforms.shadow_pass.value=D.map.depthTexture,g.uniforms.resolution.value=D.mapSize,g.uniforms.radius.value=D.radius,r.setRenderTarget(D.mapPass),r.clear(),r.renderBufferDirect(k,null,w,g,R,null),S.uniforms.shadow_pass.value=D.mapPass.texture,S.uniforms.resolution.value=D.mapSize,S.uniforms.radius.value=D.radius,r.setRenderTarget(D.map),r.clear(),r.renderBufferDirect(k,null,w,S,R,null)}function L(D,k,w,I){let j=null;const O=w.isPointLight===!0?D.customDistanceMaterial:D.customDepthMaterial;if(O!==void 0)j=O;else if(j=w.isPointLight===!0?p:f,r.localClippingEnabled&&k.clipShadows===!0&&Array.isArray(k.clippingPlanes)&&k.clippingPlanes.length!==0||k.displacementMap&&k.displacementScale!==0||k.alphaMap&&k.alphaTest>0||k.map&&k.alphaTest>0||k.alphaToCoverage===!0){const q=j.uuid,le=k.uuid;let me=m[q];me===void 0&&(me={},m[q]=me);let W=me[le];W===void 0&&(W=j.clone(),me[le]=W,k.addEventListener("dispose",z)),j=W}if(j.visible=k.visible,j.wireframe=k.wireframe,I===aa?j.side=k.shadowSide!==null?k.shadowSide:k.side:j.side=k.shadowSide!==null?k.shadowSide:y[k.side],j.alphaMap=k.alphaMap,j.alphaTest=k.alphaToCoverage===!0?.5:k.alphaTest,j.map=k.map,j.clipShadows=k.clipShadows,j.clippingPlanes=k.clippingPlanes,j.clipIntersection=k.clipIntersection,j.displacementMap=k.displacementMap,j.displacementScale=k.displacementScale,j.displacementBias=k.displacementBias,j.wireframeLinewidth=k.wireframeLinewidth,j.linewidth=k.linewidth,w.isPointLight===!0&&j.isMeshDistanceMaterial===!0){const q=r.properties.get(j);q.light=w}return j}function P(D,k,w,I,j){if(D.visible===!1)return;if(D.layers.test(k.layers)&&(D.isMesh||D.isLine||D.isPoints)&&(D.castShadow||D.receiveShadow&&j===aa)&&(!D.frustumCulled||s.intersectsObject(D))){D.modelViewMatrix.multiplyMatrices(w.matrixWorldInverse,D.matrixWorld);const le=e.update(D),me=D.material;if(Array.isArray(me)){const W=le.groups;for(let te=0,$=W.length;te<$;te++){const K=W[te],fe=me[K.materialIndex];if(fe&&fe.visible){const he=L(D,fe,I,j);D.onBeforeShadow(r,D,k,w,le,he,K),r.renderBufferDirect(w,null,le,he,D,K),D.onAfterShadow(r,D,k,w,le,he,K)}}}else if(me.visible){const W=L(D,me,I,j);D.onBeforeShadow(r,D,k,w,le,W,null),r.renderBufferDirect(w,null,le,W,D,null),D.onAfterShadow(r,D,k,w,le,W,null)}}const q=D.children;for(let le=0,me=q.length;le<me;le++)P(q[le],k,w,I,j)}function z(D){D.target.removeEventListener("dispose",z);for(const w in m){const I=m[w],j=D.target.uuid;j in I&&(I[j].dispose(),delete I[j])}}}function NM(r,e){function n(){let B=!1;const Ce=new gn;let ve=null;const je=new gn(0,0,0,0);return{setMask:function(Ue){ve!==Ue&&!B&&(r.colorMask(Ue,Ue,Ue,Ue),ve=Ue)},setLocked:function(Ue){B=Ue},setClear:function(Ue,Me,Ke,Qe,Ft){Ft===!0&&(Ue*=Qe,Me*=Qe,Ke*=Qe),Ce.set(Ue,Me,Ke,Qe),je.equals(Ce)===!1&&(r.clearColor(Ue,Me,Ke,Qe),je.copy(Ce))},reset:function(){B=!1,ve=null,je.set(-1,0,0,0)}}}function s(){let B=!1,Ce=!1,ve=null,je=null,Ue=null;return{setReversed:function(Me){if(Ce!==Me){const Ke=e.get("EXT_clip_control");Me?Ke.clipControlEXT(Ke.LOWER_LEFT_EXT,Ke.ZERO_TO_ONE_EXT):Ke.clipControlEXT(Ke.LOWER_LEFT_EXT,Ke.NEGATIVE_ONE_TO_ONE_EXT),Ce=Me;const Qe=Ue;Ue=null,this.setClear(Qe)}},getReversed:function(){return Ce},setTest:function(Me){Me?xe(r.DEPTH_TEST):ke(r.DEPTH_TEST)},setMask:function(Me){ve!==Me&&!B&&(r.depthMask(Me),ve=Me)},setFunc:function(Me){if(Ce&&(Me=uv[Me]),je!==Me){switch(Me){case _d:r.depthFunc(r.NEVER);break;case vd:r.depthFunc(r.ALWAYS);break;case xd:r.depthFunc(r.LESS);break;case mo:r.depthFunc(r.LEQUAL);break;case yd:r.depthFunc(r.EQUAL);break;case Sd:r.depthFunc(r.GEQUAL);break;case Md:r.depthFunc(r.GREATER);break;case Ed:r.depthFunc(r.NOTEQUAL);break;default:r.depthFunc(r.LEQUAL)}je=Me}},setLocked:function(Me){B=Me},setClear:function(Me){Ue!==Me&&(Ue=Me,Ce&&(Me=1-Me),r.clearDepth(Me))},reset:function(){B=!1,ve=null,je=null,Ue=null,Ce=!1}}}function a(){let B=!1,Ce=null,ve=null,je=null,Ue=null,Me=null,Ke=null,Qe=null,Ft=null;return{setTest:function(Dt){B||(Dt?xe(r.STENCIL_TEST):ke(r.STENCIL_TEST))},setMask:function(Dt){Ce!==Dt&&!B&&(r.stencilMask(Dt),Ce=Dt)},setFunc:function(Dt,vn,Le){(ve!==Dt||je!==vn||Ue!==Le)&&(r.stencilFunc(Dt,vn,Le),ve=Dt,je=vn,Ue=Le)},setOp:function(Dt,vn,Le){(Me!==Dt||Ke!==vn||Qe!==Le)&&(r.stencilOp(Dt,vn,Le),Me=Dt,Ke=vn,Qe=Le)},setLocked:function(Dt){B=Dt},setClear:function(Dt){Ft!==Dt&&(r.clearStencil(Dt),Ft=Dt)},reset:function(){B=!1,Ce=null,ve=null,je=null,Ue=null,Me=null,Ke=null,Qe=null,Ft=null}}}const l=new n,u=new s,f=new a,p=new WeakMap,m=new WeakMap;let x={},y={},g={},S=new WeakMap,T=[],R=null,_=!1,v=null,b=null,L=null,P=null,z=null,D=null,k=null,w=new Ct(0,0,0),I=0,j=!1,O=null,q=null,le=null,me=null,W=null;const te=r.getParameter(r.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let $=!1,K=0;const fe=r.getParameter(r.VERSION);fe.indexOf("WebGL")!==-1?(K=parseFloat(/^WebGL (\d)/.exec(fe)[1]),$=K>=1):fe.indexOf("OpenGL ES")!==-1&&(K=parseFloat(/^OpenGL ES (\d)/.exec(fe)[1]),$=K>=2);let he=null,U={};const ne=r.getParameter(r.SCISSOR_BOX),Xe=r.getParameter(r.VIEWPORT),ze=new gn().fromArray(ne),We=new gn().fromArray(Xe);function ce(B,Ce,ve,je){const Ue=new Uint8Array(4),Me=r.createTexture();r.bindTexture(B,Me),r.texParameteri(B,r.TEXTURE_MIN_FILTER,r.NEAREST),r.texParameteri(B,r.TEXTURE_MAG_FILTER,r.NEAREST);for(let Ke=0;Ke<ve;Ke++)B===r.TEXTURE_3D||B===r.TEXTURE_2D_ARRAY?r.texImage3D(Ce,0,r.RGBA,1,1,je,0,r.RGBA,r.UNSIGNED_BYTE,Ue):r.texImage2D(Ce+Ke,0,r.RGBA,1,1,0,r.RGBA,r.UNSIGNED_BYTE,Ue);return Me}const we={};we[r.TEXTURE_2D]=ce(r.TEXTURE_2D,r.TEXTURE_2D,1),we[r.TEXTURE_CUBE_MAP]=ce(r.TEXTURE_CUBE_MAP,r.TEXTURE_CUBE_MAP_POSITIVE_X,6),we[r.TEXTURE_2D_ARRAY]=ce(r.TEXTURE_2D_ARRAY,r.TEXTURE_2D_ARRAY,1,1),we[r.TEXTURE_3D]=ce(r.TEXTURE_3D,r.TEXTURE_3D,1,1),l.setClear(0,0,0,1),u.setClear(1),f.setClear(0),xe(r.DEPTH_TEST),u.setFunc(mo),Ut(!1),Yt(om),xe(r.CULL_FACE),kt(Sr);function xe(B){x[B]!==!0&&(r.enable(B),x[B]=!0)}function ke(B){x[B]!==!1&&(r.disable(B),x[B]=!1)}function rt(B,Ce){return g[B]!==Ce?(r.bindFramebuffer(B,Ce),g[B]=Ce,B===r.DRAW_FRAMEBUFFER&&(g[r.FRAMEBUFFER]=Ce),B===r.FRAMEBUFFER&&(g[r.DRAW_FRAMEBUFFER]=Ce),!0):!1}function tt(B,Ce){let ve=T,je=!1;if(B){ve=S.get(Ce),ve===void 0&&(ve=[],S.set(Ce,ve));const Ue=B.textures;if(ve.length!==Ue.length||ve[0]!==r.COLOR_ATTACHMENT0){for(let Me=0,Ke=Ue.length;Me<Ke;Me++)ve[Me]=r.COLOR_ATTACHMENT0+Me;ve.length=Ue.length,je=!0}}else ve[0]!==r.BACK&&(ve[0]=r.BACK,je=!0);je&&r.drawBuffers(ve)}function Vt(B){return R!==B?(r.useProgram(B),R=B,!0):!1}const ct={[Ss]:r.FUNC_ADD,[I_]:r.FUNC_SUBTRACT,[N_]:r.FUNC_REVERSE_SUBTRACT};ct[U_]=r.MIN,ct[F_]=r.MAX;const Rt={[O_]:r.ZERO,[k_]:r.ONE,[B_]:r.SRC_COLOR,[md]:r.SRC_ALPHA,[X_]:r.SRC_ALPHA_SATURATE,[G_]:r.DST_COLOR,[H_]:r.DST_ALPHA,[z_]:r.ONE_MINUS_SRC_COLOR,[gd]:r.ONE_MINUS_SRC_ALPHA,[W_]:r.ONE_MINUS_DST_COLOR,[V_]:r.ONE_MINUS_DST_ALPHA,[j_]:r.CONSTANT_COLOR,[Y_]:r.ONE_MINUS_CONSTANT_COLOR,[q_]:r.CONSTANT_ALPHA,[$_]:r.ONE_MINUS_CONSTANT_ALPHA};function kt(B,Ce,ve,je,Ue,Me,Ke,Qe,Ft,Dt){if(B===Sr){_===!0&&(ke(r.BLEND),_=!1);return}if(_===!1&&(xe(r.BLEND),_=!0),B!==D_){if(B!==v||Dt!==j){if((b!==Ss||z!==Ss)&&(r.blendEquation(r.FUNC_ADD),b=Ss,z=Ss),Dt)switch(B){case ho:r.blendFuncSeparate(r.ONE,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case am:r.blendFunc(r.ONE,r.ONE);break;case lm:r.blendFuncSeparate(r.ZERO,r.ONE_MINUS_SRC_COLOR,r.ZERO,r.ONE);break;case cm:r.blendFuncSeparate(r.DST_COLOR,r.ONE_MINUS_SRC_ALPHA,r.ZERO,r.ONE);break;default:Xt("WebGLState: Invalid blending: ",B);break}else switch(B){case ho:r.blendFuncSeparate(r.SRC_ALPHA,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case am:r.blendFuncSeparate(r.SRC_ALPHA,r.ONE,r.ONE,r.ONE);break;case lm:Xt("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case cm:Xt("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:Xt("WebGLState: Invalid blending: ",B);break}L=null,P=null,D=null,k=null,w.set(0,0,0),I=0,v=B,j=Dt}return}Ue=Ue||Ce,Me=Me||ve,Ke=Ke||je,(Ce!==b||Ue!==z)&&(r.blendEquationSeparate(ct[Ce],ct[Ue]),b=Ce,z=Ue),(ve!==L||je!==P||Me!==D||Ke!==k)&&(r.blendFuncSeparate(Rt[ve],Rt[je],Rt[Me],Rt[Ke]),L=ve,P=je,D=Me,k=Ke),(Qe.equals(w)===!1||Ft!==I)&&(r.blendColor(Qe.r,Qe.g,Qe.b,Ft),w.copy(Qe),I=Ft),v=B,j=!1}function ut(B,Ce){B.side===Ri?ke(r.CULL_FACE):xe(r.CULL_FACE);let ve=B.side===fi;Ce&&(ve=!ve),Ut(ve),B.blending===ho&&B.transparent===!1?kt(Sr):kt(B.blending,B.blendEquation,B.blendSrc,B.blendDst,B.blendEquationAlpha,B.blendSrcAlpha,B.blendDstAlpha,B.blendColor,B.blendAlpha,B.premultipliedAlpha),u.setFunc(B.depthFunc),u.setTest(B.depthTest),u.setMask(B.depthWrite),l.setMask(B.colorWrite);const je=B.stencilWrite;f.setTest(je),je&&(f.setMask(B.stencilWriteMask),f.setFunc(B.stencilFunc,B.stencilRef,B.stencilFuncMask),f.setOp(B.stencilFail,B.stencilZFail,B.stencilZPass)),G(B.polygonOffset,B.polygonOffsetFactor,B.polygonOffsetUnits),B.alphaToCoverage===!0?xe(r.SAMPLE_ALPHA_TO_COVERAGE):ke(r.SAMPLE_ALPHA_TO_COVERAGE)}function Ut(B){O!==B&&(B?r.frontFace(r.CW):r.frontFace(r.CCW),O=B)}function Yt(B){B!==R_?(xe(r.CULL_FACE),B!==q&&(B===om?r.cullFace(r.BACK):B===P_?r.cullFace(r.FRONT):r.cullFace(r.FRONT_AND_BACK))):ke(r.CULL_FACE),q=B}function un(B){B!==le&&($&&r.lineWidth(B),le=B)}function G(B,Ce,ve){B?(xe(r.POLYGON_OFFSET_FILL),(me!==Ce||W!==ve)&&(me=Ce,W=ve,u.getReversed()&&(Ce=-Ce),r.polygonOffset(Ce,ve))):ke(r.POLYGON_OFFSET_FILL)}function Bt(B){B?xe(r.SCISSOR_TEST):ke(r.SCISSOR_TEST)}function oe(B){B===void 0&&(B=r.TEXTURE0+te-1),he!==B&&(r.activeTexture(B),he=B)}function F(B,Ce,ve){ve===void 0&&(he===null?ve=r.TEXTURE0+te-1:ve=he);let je=U[ve];je===void 0&&(je={type:void 0,texture:void 0},U[ve]=je),(je.type!==B||je.texture!==Ce)&&(he!==ve&&(r.activeTexture(ve),he=ve),r.bindTexture(B,Ce||we[B]),je.type=B,je.texture=Ce)}function Se(){const B=U[he];B!==void 0&&B.type!==void 0&&(r.bindTexture(B.type,null),B.type=void 0,B.texture=void 0)}function Lt(){try{r.compressedTexImage2D(...arguments)}catch(B){Xt("WebGLState:",B)}}function C(){try{r.compressedTexImage3D(...arguments)}catch(B){Xt("WebGLState:",B)}}function M(){try{r.texSubImage2D(...arguments)}catch(B){Xt("WebGLState:",B)}}function Z(){try{r.texSubImage3D(...arguments)}catch(B){Xt("WebGLState:",B)}}function ge(){try{r.compressedTexSubImage2D(...arguments)}catch(B){Xt("WebGLState:",B)}}function ye(){try{r.compressedTexSubImage3D(...arguments)}catch(B){Xt("WebGLState:",B)}}function Ee(){try{r.texStorage2D(...arguments)}catch(B){Xt("WebGLState:",B)}}function Re(){try{r.texStorage3D(...arguments)}catch(B){Xt("WebGLState:",B)}}function pe(){try{r.texImage2D(...arguments)}catch(B){Xt("WebGLState:",B)}}function _e(){try{r.texImage3D(...arguments)}catch(B){Xt("WebGLState:",B)}}function Ie(B){return y[B]!==void 0?y[B]:r.getParameter(B)}function Ge(B,Ce){y[B]!==Ce&&(r.pixelStorei(B,Ce),y[B]=Ce)}function Ne(B){ze.equals(B)===!1&&(r.scissor(B.x,B.y,B.z,B.w),ze.copy(B))}function be(B){We.equals(B)===!1&&(r.viewport(B.x,B.y,B.z,B.w),We.copy(B))}function dt(B,Ce){let ve=m.get(Ce);ve===void 0&&(ve=new WeakMap,m.set(Ce,ve));let je=ve.get(B);je===void 0&&(je=r.getUniformBlockIndex(Ce,B.name),ve.set(B,je))}function ft(B,Ce){const je=m.get(Ce).get(B);p.get(Ce)!==je&&(r.uniformBlockBinding(Ce,je,B.__bindingPointIndex),p.set(Ce,je))}function yt(){r.disable(r.BLEND),r.disable(r.CULL_FACE),r.disable(r.DEPTH_TEST),r.disable(r.POLYGON_OFFSET_FILL),r.disable(r.SCISSOR_TEST),r.disable(r.STENCIL_TEST),r.disable(r.SAMPLE_ALPHA_TO_COVERAGE),r.blendEquation(r.FUNC_ADD),r.blendFunc(r.ONE,r.ZERO),r.blendFuncSeparate(r.ONE,r.ZERO,r.ONE,r.ZERO),r.blendColor(0,0,0,0),r.colorMask(!0,!0,!0,!0),r.clearColor(0,0,0,0),r.depthMask(!0),r.depthFunc(r.LESS),u.setReversed(!1),r.clearDepth(1),r.stencilMask(4294967295),r.stencilFunc(r.ALWAYS,0,4294967295),r.stencilOp(r.KEEP,r.KEEP,r.KEEP),r.clearStencil(0),r.cullFace(r.BACK),r.frontFace(r.CCW),r.polygonOffset(0,0),r.activeTexture(r.TEXTURE0),r.bindFramebuffer(r.FRAMEBUFFER,null),r.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),r.bindFramebuffer(r.READ_FRAMEBUFFER,null),r.useProgram(null),r.lineWidth(1),r.scissor(0,0,r.canvas.width,r.canvas.height),r.viewport(0,0,r.canvas.width,r.canvas.height),r.pixelStorei(r.PACK_ALIGNMENT,4),r.pixelStorei(r.UNPACK_ALIGNMENT,4),r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,!1),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,r.BROWSER_DEFAULT_WEBGL),r.pixelStorei(r.PACK_ROW_LENGTH,0),r.pixelStorei(r.PACK_SKIP_PIXELS,0),r.pixelStorei(r.PACK_SKIP_ROWS,0),r.pixelStorei(r.UNPACK_ROW_LENGTH,0),r.pixelStorei(r.UNPACK_IMAGE_HEIGHT,0),r.pixelStorei(r.UNPACK_SKIP_PIXELS,0),r.pixelStorei(r.UNPACK_SKIP_ROWS,0),r.pixelStorei(r.UNPACK_SKIP_IMAGES,0),x={},y={},he=null,U={},g={},S=new WeakMap,T=[],R=null,_=!1,v=null,b=null,L=null,P=null,z=null,D=null,k=null,w=new Ct(0,0,0),I=0,j=!1,O=null,q=null,le=null,me=null,W=null,ze.set(0,0,r.canvas.width,r.canvas.height),We.set(0,0,r.canvas.width,r.canvas.height),l.reset(),u.reset(),f.reset()}return{buffers:{color:l,depth:u,stencil:f},enable:xe,disable:ke,bindFramebuffer:rt,drawBuffers:tt,useProgram:Vt,setBlending:kt,setMaterial:ut,setFlipSided:Ut,setCullFace:Yt,setLineWidth:un,setPolygonOffset:G,setScissorTest:Bt,activeTexture:oe,bindTexture:F,unbindTexture:Se,compressedTexImage2D:Lt,compressedTexImage3D:C,texImage2D:pe,texImage3D:_e,pixelStorei:Ge,getParameter:Ie,updateUBOMapping:dt,uniformBlockBinding:ft,texStorage2D:Ee,texStorage3D:Re,texSubImage2D:M,texSubImage3D:Z,compressedTexSubImage2D:ge,compressedTexSubImage3D:ye,scissor:Ne,viewport:be,reset:yt}}function UM(r,e,n,s,a,l,u){const f=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,p=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),m=new Ht,x=new WeakMap,y=new Set;let g;const S=new WeakMap;let T=!1;try{T=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function R(C,M){return T?new OffscreenCanvas(C,M):Yl("canvas")}function _(C,M,Z){let ge=1;const ye=Lt(C);if((ye.width>Z||ye.height>Z)&&(ge=Z/Math.max(ye.width,ye.height)),ge<1)if(typeof HTMLImageElement<"u"&&C instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&C instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&C instanceof ImageBitmap||typeof VideoFrame<"u"&&C instanceof VideoFrame){const Ee=Math.floor(ge*ye.width),Re=Math.floor(ge*ye.height);g===void 0&&(g=R(Ee,Re));const pe=M?R(Ee,Re):g;return pe.width=Ee,pe.height=Re,pe.getContext("2d").drawImage(C,0,0,Ee,Re),xt("WebGLRenderer: Texture has been resized from ("+ye.width+"x"+ye.height+") to ("+Ee+"x"+Re+")."),pe}else return"data"in C&&xt("WebGLRenderer: Image in DataTexture is too big ("+ye.width+"x"+ye.height+")."),C;return C}function v(C){return C.generateMipmaps}function b(C){r.generateMipmap(C)}function L(C){return C.isWebGLCubeRenderTarget?r.TEXTURE_CUBE_MAP:C.isWebGL3DRenderTarget?r.TEXTURE_3D:C.isWebGLArrayRenderTarget||C.isCompressedArrayTexture?r.TEXTURE_2D_ARRAY:r.TEXTURE_2D}function P(C,M,Z,ge,ye,Ee=!1){if(C!==null){if(r[C]!==void 0)return r[C];xt("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+C+"'")}let Re;ge&&(Re=e.get("EXT_texture_norm16"),Re||xt("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let pe=M;if(M===r.RED&&(Z===r.FLOAT&&(pe=r.R32F),Z===r.HALF_FLOAT&&(pe=r.R16F),Z===r.UNSIGNED_BYTE&&(pe=r.R8),Z===r.UNSIGNED_SHORT&&Re&&(pe=Re.R16_EXT),Z===r.SHORT&&Re&&(pe=Re.R16_SNORM_EXT)),M===r.RED_INTEGER&&(Z===r.UNSIGNED_BYTE&&(pe=r.R8UI),Z===r.UNSIGNED_SHORT&&(pe=r.R16UI),Z===r.UNSIGNED_INT&&(pe=r.R32UI),Z===r.BYTE&&(pe=r.R8I),Z===r.SHORT&&(pe=r.R16I),Z===r.INT&&(pe=r.R32I)),M===r.RG&&(Z===r.FLOAT&&(pe=r.RG32F),Z===r.HALF_FLOAT&&(pe=r.RG16F),Z===r.UNSIGNED_BYTE&&(pe=r.RG8),Z===r.UNSIGNED_SHORT&&Re&&(pe=Re.RG16_EXT),Z===r.SHORT&&Re&&(pe=Re.RG16_SNORM_EXT)),M===r.RG_INTEGER&&(Z===r.UNSIGNED_BYTE&&(pe=r.RG8UI),Z===r.UNSIGNED_SHORT&&(pe=r.RG16UI),Z===r.UNSIGNED_INT&&(pe=r.RG32UI),Z===r.BYTE&&(pe=r.RG8I),Z===r.SHORT&&(pe=r.RG16I),Z===r.INT&&(pe=r.RG32I)),M===r.RGB_INTEGER&&(Z===r.UNSIGNED_BYTE&&(pe=r.RGB8UI),Z===r.UNSIGNED_SHORT&&(pe=r.RGB16UI),Z===r.UNSIGNED_INT&&(pe=r.RGB32UI),Z===r.BYTE&&(pe=r.RGB8I),Z===r.SHORT&&(pe=r.RGB16I),Z===r.INT&&(pe=r.RGB32I)),M===r.RGBA_INTEGER&&(Z===r.UNSIGNED_BYTE&&(pe=r.RGBA8UI),Z===r.UNSIGNED_SHORT&&(pe=r.RGBA16UI),Z===r.UNSIGNED_INT&&(pe=r.RGBA32UI),Z===r.BYTE&&(pe=r.RGBA8I),Z===r.SHORT&&(pe=r.RGBA16I),Z===r.INT&&(pe=r.RGBA32I)),M===r.RGB&&(Z===r.UNSIGNED_SHORT&&Re&&(pe=Re.RGB16_EXT),Z===r.SHORT&&Re&&(pe=Re.RGB16_SNORM_EXT),Z===r.UNSIGNED_INT_5_9_9_9_REV&&(pe=r.RGB9_E5),Z===r.UNSIGNED_INT_10F_11F_11F_REV&&(pe=r.R11F_G11F_B10F)),M===r.RGBA){const _e=Ee?jl:zt.getTransfer(ye);Z===r.FLOAT&&(pe=r.RGBA32F),Z===r.HALF_FLOAT&&(pe=r.RGBA16F),Z===r.UNSIGNED_BYTE&&(pe=_e===Jt?r.SRGB8_ALPHA8:r.RGBA8),Z===r.UNSIGNED_SHORT&&Re&&(pe=Re.RGBA16_EXT),Z===r.SHORT&&Re&&(pe=Re.RGBA16_SNORM_EXT),Z===r.UNSIGNED_SHORT_4_4_4_4&&(pe=r.RGBA4),Z===r.UNSIGNED_SHORT_5_5_5_1&&(pe=r.RGB5_A1)}return(pe===r.R16F||pe===r.R32F||pe===r.RG16F||pe===r.RG32F||pe===r.RGBA16F||pe===r.RGBA32F)&&e.get("EXT_color_buffer_float"),pe}function z(C,M){let Z;return C?M===null||M===ir||M===da?Z=r.DEPTH24_STENCIL8:M===Ji?Z=r.DEPTH32F_STENCIL8:M===ua&&(Z=r.DEPTH24_STENCIL8,xt("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):M===null||M===ir||M===da?Z=r.DEPTH_COMPONENT24:M===Ji?Z=r.DEPTH_COMPONENT32F:M===ua&&(Z=r.DEPTH_COMPONENT16),Z}function D(C,M){return v(C)===!0||C.isFramebufferTexture&&C.minFilter!==Bn&&C.minFilter!==qn?Math.log2(Math.max(M.width,M.height))+1:C.mipmaps!==void 0&&C.mipmaps.length>0?C.mipmaps.length:C.isCompressedTexture&&Array.isArray(C.image)?M.mipmaps.length:1}function k(C){const M=C.target;M.removeEventListener("dispose",k),I(M),M.isVideoTexture&&x.delete(M),M.isHTMLTexture&&y.delete(M)}function w(C){const M=C.target;M.removeEventListener("dispose",w),O(M)}function I(C){const M=s.get(C);if(M.__webglInit===void 0)return;const Z=C.source,ge=S.get(Z);if(ge){const ye=ge[M.__cacheKey];ye.usedTimes--,ye.usedTimes===0&&j(C),Object.keys(ge).length===0&&S.delete(Z)}s.remove(C)}function j(C){const M=s.get(C);r.deleteTexture(M.__webglTexture);const Z=C.source,ge=S.get(Z);delete ge[M.__cacheKey],u.memory.textures--}function O(C){const M=s.get(C);if(C.depthTexture&&(C.depthTexture.dispose(),s.remove(C.depthTexture)),C.isWebGLCubeRenderTarget)for(let ge=0;ge<6;ge++){if(Array.isArray(M.__webglFramebuffer[ge]))for(let ye=0;ye<M.__webglFramebuffer[ge].length;ye++)r.deleteFramebuffer(M.__webglFramebuffer[ge][ye]);else r.deleteFramebuffer(M.__webglFramebuffer[ge]);M.__webglDepthbuffer&&r.deleteRenderbuffer(M.__webglDepthbuffer[ge])}else{if(Array.isArray(M.__webglFramebuffer))for(let ge=0;ge<M.__webglFramebuffer.length;ge++)r.deleteFramebuffer(M.__webglFramebuffer[ge]);else r.deleteFramebuffer(M.__webglFramebuffer);if(M.__webglDepthbuffer&&r.deleteRenderbuffer(M.__webglDepthbuffer),M.__webglMultisampledFramebuffer&&r.deleteFramebuffer(M.__webglMultisampledFramebuffer),M.__webglColorRenderbuffer)for(let ge=0;ge<M.__webglColorRenderbuffer.length;ge++)M.__webglColorRenderbuffer[ge]&&r.deleteRenderbuffer(M.__webglColorRenderbuffer[ge]);M.__webglDepthRenderbuffer&&r.deleteRenderbuffer(M.__webglDepthRenderbuffer)}const Z=C.textures;for(let ge=0,ye=Z.length;ge<ye;ge++){const Ee=s.get(Z[ge]);Ee.__webglTexture&&(r.deleteTexture(Ee.__webglTexture),u.memory.textures--),s.remove(Z[ge])}s.remove(C)}let q=0;function le(){q=0}function me(){return q}function W(C){q=C}function te(){const C=q;return C>=a.maxTextures&&xt("WebGLTextures: Trying to use "+C+" texture units while this GPU supports only "+a.maxTextures),q+=1,C}function $(C){const M=[];return M.push(C.wrapS),M.push(C.wrapT),M.push(C.wrapR||0),M.push(C.magFilter),M.push(C.minFilter),M.push(C.anisotropy),M.push(C.internalFormat),M.push(C.format),M.push(C.type),M.push(C.generateMipmaps),M.push(C.premultiplyAlpha),M.push(C.flipY),M.push(C.unpackAlignment),M.push(C.colorSpace),M.join()}function K(C,M){const Z=s.get(C);if(C.isVideoTexture&&F(C),C.isRenderTargetTexture===!1&&C.isExternalTexture!==!0&&C.version>0&&Z.__version!==C.version){const ge=C.image;if(ge===null)xt("WebGLRenderer: Texture marked for update but no image data found.");else if(ge.complete===!1)xt("WebGLRenderer: Texture marked for update but image is incomplete");else{ke(Z,C,M);return}}else C.isExternalTexture&&(Z.__webglTexture=C.sourceTexture?C.sourceTexture:null);n.bindTexture(r.TEXTURE_2D,Z.__webglTexture,r.TEXTURE0+M)}function fe(C,M){const Z=s.get(C);if(C.isRenderTargetTexture===!1&&C.version>0&&Z.__version!==C.version){ke(Z,C,M);return}else C.isExternalTexture&&(Z.__webglTexture=C.sourceTexture?C.sourceTexture:null);n.bindTexture(r.TEXTURE_2D_ARRAY,Z.__webglTexture,r.TEXTURE0+M)}function he(C,M){const Z=s.get(C);if(C.isRenderTargetTexture===!1&&C.version>0&&Z.__version!==C.version){ke(Z,C,M);return}n.bindTexture(r.TEXTURE_3D,Z.__webglTexture,r.TEXTURE0+M)}function U(C,M){const Z=s.get(C);if(C.isCubeDepthTexture!==!0&&C.version>0&&Z.__version!==C.version){rt(Z,C,M);return}n.bindTexture(r.TEXTURE_CUBE_MAP,Z.__webglTexture,r.TEXTURE0+M)}const ne={[wd]:r.REPEAT,[yr]:r.CLAMP_TO_EDGE,[Td]:r.MIRRORED_REPEAT},Xe={[Bn]:r.NEAREST,[J_]:r.NEAREST_MIPMAP_NEAREST,[gl]:r.NEAREST_MIPMAP_LINEAR,[qn]:r.LINEAR,[Fu]:r.LINEAR_MIPMAP_NEAREST,[ws]:r.LINEAR_MIPMAP_LINEAR},ze={[tv]:r.NEVER,[ov]:r.ALWAYS,[nv]:r.LESS,[vf]:r.LEQUAL,[iv]:r.EQUAL,[xf]:r.GEQUAL,[rv]:r.GREATER,[sv]:r.NOTEQUAL};function We(C,M){if(M.type===Ji&&e.has("OES_texture_float_linear")===!1&&(M.magFilter===qn||M.magFilter===Fu||M.magFilter===gl||M.magFilter===ws||M.minFilter===qn||M.minFilter===Fu||M.minFilter===gl||M.minFilter===ws)&&xt("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),r.texParameteri(C,r.TEXTURE_WRAP_S,ne[M.wrapS]),r.texParameteri(C,r.TEXTURE_WRAP_T,ne[M.wrapT]),(C===r.TEXTURE_3D||C===r.TEXTURE_2D_ARRAY)&&r.texParameteri(C,r.TEXTURE_WRAP_R,ne[M.wrapR]),r.texParameteri(C,r.TEXTURE_MAG_FILTER,Xe[M.magFilter]),r.texParameteri(C,r.TEXTURE_MIN_FILTER,Xe[M.minFilter]),M.compareFunction&&(r.texParameteri(C,r.TEXTURE_COMPARE_MODE,r.COMPARE_REF_TO_TEXTURE),r.texParameteri(C,r.TEXTURE_COMPARE_FUNC,ze[M.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(M.magFilter===Bn||M.minFilter!==gl&&M.minFilter!==ws||M.type===Ji&&e.has("OES_texture_float_linear")===!1)return;if(M.anisotropy>1||s.get(M).__currentAnisotropy){const Z=e.get("EXT_texture_filter_anisotropic");r.texParameterf(C,Z.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(M.anisotropy,a.getMaxAnisotropy())),s.get(M).__currentAnisotropy=M.anisotropy}}}function ce(C,M){let Z=!1;C.__webglInit===void 0&&(C.__webglInit=!0,M.addEventListener("dispose",k));const ge=M.source;let ye=S.get(ge);ye===void 0&&(ye={},S.set(ge,ye));const Ee=$(M);if(Ee!==C.__cacheKey){ye[Ee]===void 0&&(ye[Ee]={texture:r.createTexture(),usedTimes:0},u.memory.textures++,Z=!0),ye[Ee].usedTimes++;const Re=ye[C.__cacheKey];Re!==void 0&&(ye[C.__cacheKey].usedTimes--,Re.usedTimes===0&&j(M)),C.__cacheKey=Ee,C.__webglTexture=ye[Ee].texture}return Z}function we(C,M,Z){return Math.floor(Math.floor(C/Z)/M)}function xe(C,M,Z,ge){const Ee=C.updateRanges;if(Ee.length===0)n.texSubImage2D(r.TEXTURE_2D,0,0,0,M.width,M.height,Z,ge,M.data);else{Ee.sort((Ge,Ne)=>Ge.start-Ne.start);let Re=0;for(let Ge=1;Ge<Ee.length;Ge++){const Ne=Ee[Re],be=Ee[Ge],dt=Ne.start+Ne.count,ft=we(be.start,M.width,4),yt=we(Ne.start,M.width,4);be.start<=dt+1&&ft===yt&&we(be.start+be.count-1,M.width,4)===ft?Ne.count=Math.max(Ne.count,be.start+be.count-Ne.start):(++Re,Ee[Re]=be)}Ee.length=Re+1;const pe=n.getParameter(r.UNPACK_ROW_LENGTH),_e=n.getParameter(r.UNPACK_SKIP_PIXELS),Ie=n.getParameter(r.UNPACK_SKIP_ROWS);n.pixelStorei(r.UNPACK_ROW_LENGTH,M.width);for(let Ge=0,Ne=Ee.length;Ge<Ne;Ge++){const be=Ee[Ge],dt=Math.floor(be.start/4),ft=Math.ceil(be.count/4),yt=dt%M.width,B=Math.floor(dt/M.width),Ce=ft,ve=1;n.pixelStorei(r.UNPACK_SKIP_PIXELS,yt),n.pixelStorei(r.UNPACK_SKIP_ROWS,B),n.texSubImage2D(r.TEXTURE_2D,0,yt,B,Ce,ve,Z,ge,M.data)}C.clearUpdateRanges(),n.pixelStorei(r.UNPACK_ROW_LENGTH,pe),n.pixelStorei(r.UNPACK_SKIP_PIXELS,_e),n.pixelStorei(r.UNPACK_SKIP_ROWS,Ie)}}function ke(C,M,Z){let ge=r.TEXTURE_2D;(M.isDataArrayTexture||M.isCompressedArrayTexture)&&(ge=r.TEXTURE_2D_ARRAY),M.isData3DTexture&&(ge=r.TEXTURE_3D);const ye=ce(C,M),Ee=M.source;n.bindTexture(ge,C.__webglTexture,r.TEXTURE0+Z);const Re=s.get(Ee);if(Ee.version!==Re.__version||ye===!0){if(n.activeTexture(r.TEXTURE0+Z),(typeof ImageBitmap<"u"&&M.image instanceof ImageBitmap)===!1){const ve=zt.getPrimaries(zt.workingColorSpace),je=M.colorSpace===Jr?null:zt.getPrimaries(M.colorSpace),Ue=M.colorSpace===Jr||ve===je?r.NONE:r.BROWSER_DEFAULT_WEBGL;n.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,M.flipY),n.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),n.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ue)}n.pixelStorei(r.UNPACK_ALIGNMENT,M.unpackAlignment);let _e=_(M.image,!1,a.maxTextureSize);_e=Se(M,_e);const Ie=l.convert(M.format,M.colorSpace),Ge=l.convert(M.type);let Ne=P(M.internalFormat,Ie,Ge,M.normalized,M.colorSpace,M.isVideoTexture);We(ge,M);let be;const dt=M.mipmaps,ft=M.isVideoTexture!==!0,yt=Re.__version===void 0||ye===!0,B=Ee.dataReady,Ce=D(M,_e);if(M.isDepthTexture)Ne=z(M.format===Ts,M.type),yt&&(ft?n.texStorage2D(r.TEXTURE_2D,1,Ne,_e.width,_e.height):n.texImage2D(r.TEXTURE_2D,0,Ne,_e.width,_e.height,0,Ie,Ge,null));else if(M.isDataTexture)if(dt.length>0){ft&&yt&&n.texStorage2D(r.TEXTURE_2D,Ce,Ne,dt[0].width,dt[0].height);for(let ve=0,je=dt.length;ve<je;ve++)be=dt[ve],ft?B&&n.texSubImage2D(r.TEXTURE_2D,ve,0,0,be.width,be.height,Ie,Ge,be.data):n.texImage2D(r.TEXTURE_2D,ve,Ne,be.width,be.height,0,Ie,Ge,be.data);M.generateMipmaps=!1}else ft?(yt&&n.texStorage2D(r.TEXTURE_2D,Ce,Ne,_e.width,_e.height),B&&xe(M,_e,Ie,Ge)):n.texImage2D(r.TEXTURE_2D,0,Ne,_e.width,_e.height,0,Ie,Ge,_e.data);else if(M.isCompressedTexture)if(M.isCompressedArrayTexture){ft&&yt&&n.texStorage3D(r.TEXTURE_2D_ARRAY,Ce,Ne,dt[0].width,dt[0].height,_e.depth);for(let ve=0,je=dt.length;ve<je;ve++)if(be=dt[ve],M.format!==Gi)if(Ie!==null)if(ft){if(B)if(M.layerUpdates.size>0){const Ue=km(be.width,be.height,M.format,M.type);for(const Me of M.layerUpdates){const Ke=be.data.subarray(Me*Ue/be.data.BYTES_PER_ELEMENT,(Me+1)*Ue/be.data.BYTES_PER_ELEMENT);n.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,ve,0,0,Me,be.width,be.height,1,Ie,Ke)}M.clearLayerUpdates()}else n.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,ve,0,0,0,be.width,be.height,_e.depth,Ie,be.data)}else n.compressedTexImage3D(r.TEXTURE_2D_ARRAY,ve,Ne,be.width,be.height,_e.depth,0,be.data,0,0);else xt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else ft?B&&n.texSubImage3D(r.TEXTURE_2D_ARRAY,ve,0,0,0,be.width,be.height,_e.depth,Ie,Ge,be.data):n.texImage3D(r.TEXTURE_2D_ARRAY,ve,Ne,be.width,be.height,_e.depth,0,Ie,Ge,be.data)}else{ft&&yt&&n.texStorage2D(r.TEXTURE_2D,Ce,Ne,dt[0].width,dt[0].height);for(let ve=0,je=dt.length;ve<je;ve++)be=dt[ve],M.format!==Gi?Ie!==null?ft?B&&n.compressedTexSubImage2D(r.TEXTURE_2D,ve,0,0,be.width,be.height,Ie,be.data):n.compressedTexImage2D(r.TEXTURE_2D,ve,Ne,be.width,be.height,0,be.data):xt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):ft?B&&n.texSubImage2D(r.TEXTURE_2D,ve,0,0,be.width,be.height,Ie,Ge,be.data):n.texImage2D(r.TEXTURE_2D,ve,Ne,be.width,be.height,0,Ie,Ge,be.data)}else if(M.isDataArrayTexture)if(ft){if(yt&&n.texStorage3D(r.TEXTURE_2D_ARRAY,Ce,Ne,_e.width,_e.height,_e.depth),B)if(M.layerUpdates.size>0){const ve=km(_e.width,_e.height,M.format,M.type);for(const je of M.layerUpdates){const Ue=_e.data.subarray(je*ve/_e.data.BYTES_PER_ELEMENT,(je+1)*ve/_e.data.BYTES_PER_ELEMENT);n.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,je,_e.width,_e.height,1,Ie,Ge,Ue)}M.clearLayerUpdates()}else n.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,0,_e.width,_e.height,_e.depth,Ie,Ge,_e.data)}else n.texImage3D(r.TEXTURE_2D_ARRAY,0,Ne,_e.width,_e.height,_e.depth,0,Ie,Ge,_e.data);else if(M.isData3DTexture)ft?(yt&&n.texStorage3D(r.TEXTURE_3D,Ce,Ne,_e.width,_e.height,_e.depth),B&&n.texSubImage3D(r.TEXTURE_3D,0,0,0,0,_e.width,_e.height,_e.depth,Ie,Ge,_e.data)):n.texImage3D(r.TEXTURE_3D,0,Ne,_e.width,_e.height,_e.depth,0,Ie,Ge,_e.data);else if(M.isFramebufferTexture){if(yt)if(ft)n.texStorage2D(r.TEXTURE_2D,Ce,Ne,_e.width,_e.height);else{let ve=_e.width,je=_e.height;for(let Ue=0;Ue<Ce;Ue++)n.texImage2D(r.TEXTURE_2D,Ue,Ne,ve,je,0,Ie,Ge,null),ve>>=1,je>>=1}}else if(M.isHTMLTexture){if("texElementImage2D"in r){const ve=r.canvas;if(ve.hasAttribute("layoutsubtree")||ve.setAttribute("layoutsubtree","true"),_e.parentNode!==ve){ve.appendChild(_e),y.add(M),ve.onpaint=Qe=>{const Ft=Qe.changedElements;for(const Dt of y)Ft.includes(Dt.image)&&(Dt.needsUpdate=!0)},ve.requestPaint();return}const je=0,Ue=r.RGBA,Me=r.RGBA,Ke=r.UNSIGNED_BYTE;r.texElementImage2D(r.TEXTURE_2D,je,Ue,Me,Ke,_e),r.texParameteri(r.TEXTURE_2D,r.TEXTURE_MIN_FILTER,r.LINEAR),r.texParameteri(r.TEXTURE_2D,r.TEXTURE_WRAP_S,r.CLAMP_TO_EDGE),r.texParameteri(r.TEXTURE_2D,r.TEXTURE_WRAP_T,r.CLAMP_TO_EDGE)}}else if(dt.length>0){if(ft&&yt){const ve=Lt(dt[0]);n.texStorage2D(r.TEXTURE_2D,Ce,Ne,ve.width,ve.height)}for(let ve=0,je=dt.length;ve<je;ve++)be=dt[ve],ft?B&&n.texSubImage2D(r.TEXTURE_2D,ve,0,0,Ie,Ge,be):n.texImage2D(r.TEXTURE_2D,ve,Ne,Ie,Ge,be);M.generateMipmaps=!1}else if(ft){if(yt){const ve=Lt(_e);n.texStorage2D(r.TEXTURE_2D,Ce,Ne,ve.width,ve.height)}B&&n.texSubImage2D(r.TEXTURE_2D,0,0,0,Ie,Ge,_e)}else n.texImage2D(r.TEXTURE_2D,0,Ne,Ie,Ge,_e);v(M)&&b(ge),Re.__version=Ee.version,M.onUpdate&&M.onUpdate(M)}C.__version=M.version}function rt(C,M,Z){if(M.image.length!==6)return;const ge=ce(C,M),ye=M.source;n.bindTexture(r.TEXTURE_CUBE_MAP,C.__webglTexture,r.TEXTURE0+Z);const Ee=s.get(ye);if(ye.version!==Ee.__version||ge===!0){n.activeTexture(r.TEXTURE0+Z);const Re=zt.getPrimaries(zt.workingColorSpace),pe=M.colorSpace===Jr?null:zt.getPrimaries(M.colorSpace),_e=M.colorSpace===Jr||Re===pe?r.NONE:r.BROWSER_DEFAULT_WEBGL;n.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,M.flipY),n.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),n.pixelStorei(r.UNPACK_ALIGNMENT,M.unpackAlignment),n.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,_e);const Ie=M.isCompressedTexture||M.image[0].isCompressedTexture,Ge=M.image[0]&&M.image[0].isDataTexture,Ne=[];for(let Me=0;Me<6;Me++)!Ie&&!Ge?Ne[Me]=_(M.image[Me],!0,a.maxCubemapSize):Ne[Me]=Ge?M.image[Me].image:M.image[Me],Ne[Me]=Se(M,Ne[Me]);const be=Ne[0],dt=l.convert(M.format,M.colorSpace),ft=l.convert(M.type),yt=P(M.internalFormat,dt,ft,M.normalized,M.colorSpace),B=M.isVideoTexture!==!0,Ce=Ee.__version===void 0||ge===!0,ve=ye.dataReady;let je=D(M,be);We(r.TEXTURE_CUBE_MAP,M);let Ue;if(Ie){B&&Ce&&n.texStorage2D(r.TEXTURE_CUBE_MAP,je,yt,be.width,be.height);for(let Me=0;Me<6;Me++){Ue=Ne[Me].mipmaps;for(let Ke=0;Ke<Ue.length;Ke++){const Qe=Ue[Ke];M.format!==Gi?dt!==null?B?ve&&n.compressedTexSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Me,Ke,0,0,Qe.width,Qe.height,dt,Qe.data):n.compressedTexImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Me,Ke,yt,Qe.width,Qe.height,0,Qe.data):xt("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):B?ve&&n.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Me,Ke,0,0,Qe.width,Qe.height,dt,ft,Qe.data):n.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Me,Ke,yt,Qe.width,Qe.height,0,dt,ft,Qe.data)}}}else{if(Ue=M.mipmaps,B&&Ce){Ue.length>0&&je++;const Me=Lt(Ne[0]);n.texStorage2D(r.TEXTURE_CUBE_MAP,je,yt,Me.width,Me.height)}for(let Me=0;Me<6;Me++)if(Ge){B?ve&&n.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Me,0,0,0,Ne[Me].width,Ne[Me].height,dt,ft,Ne[Me].data):n.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Me,0,yt,Ne[Me].width,Ne[Me].height,0,dt,ft,Ne[Me].data);for(let Ke=0;Ke<Ue.length;Ke++){const Ft=Ue[Ke].image[Me].image;B?ve&&n.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Me,Ke+1,0,0,Ft.width,Ft.height,dt,ft,Ft.data):n.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Me,Ke+1,yt,Ft.width,Ft.height,0,dt,ft,Ft.data)}}else{B?ve&&n.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Me,0,0,0,dt,ft,Ne[Me]):n.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Me,0,yt,dt,ft,Ne[Me]);for(let Ke=0;Ke<Ue.length;Ke++){const Qe=Ue[Ke];B?ve&&n.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Me,Ke+1,0,0,dt,ft,Qe.image[Me]):n.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Me,Ke+1,yt,dt,ft,Qe.image[Me])}}}v(M)&&b(r.TEXTURE_CUBE_MAP),Ee.__version=ye.version,M.onUpdate&&M.onUpdate(M)}C.__version=M.version}function tt(C,M,Z,ge,ye,Ee){const Re=l.convert(Z.format,Z.colorSpace),pe=l.convert(Z.type),_e=P(Z.internalFormat,Re,pe,Z.normalized,Z.colorSpace),Ie=s.get(M),Ge=s.get(Z);if(Ge.__renderTarget=M,!Ie.__hasExternalTextures){const Ne=Math.max(1,M.width>>Ee),be=Math.max(1,M.height>>Ee);ye===r.TEXTURE_3D||ye===r.TEXTURE_2D_ARRAY?n.texImage3D(ye,Ee,_e,Ne,be,M.depth,0,Re,pe,null):n.texImage2D(ye,Ee,_e,Ne,be,0,Re,pe,null)}n.bindFramebuffer(r.FRAMEBUFFER,C),oe(M)?f.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,ge,ye,Ge.__webglTexture,0,Bt(M)):(ye===r.TEXTURE_2D||ye>=r.TEXTURE_CUBE_MAP_POSITIVE_X&&ye<=r.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&r.framebufferTexture2D(r.FRAMEBUFFER,ge,ye,Ge.__webglTexture,Ee),n.bindFramebuffer(r.FRAMEBUFFER,null)}function Vt(C,M,Z){if(r.bindRenderbuffer(r.RENDERBUFFER,C),M.depthBuffer){const ge=M.depthTexture,ye=ge&&ge.isDepthTexture?ge.type:null,Ee=z(M.stencilBuffer,ye),Re=M.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT;oe(M)?f.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,Bt(M),Ee,M.width,M.height):Z?r.renderbufferStorageMultisample(r.RENDERBUFFER,Bt(M),Ee,M.width,M.height):r.renderbufferStorage(r.RENDERBUFFER,Ee,M.width,M.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,Re,r.RENDERBUFFER,C)}else{const ge=M.textures;for(let ye=0;ye<ge.length;ye++){const Ee=ge[ye],Re=l.convert(Ee.format,Ee.colorSpace),pe=l.convert(Ee.type),_e=P(Ee.internalFormat,Re,pe,Ee.normalized,Ee.colorSpace);oe(M)?f.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,Bt(M),_e,M.width,M.height):Z?r.renderbufferStorageMultisample(r.RENDERBUFFER,Bt(M),_e,M.width,M.height):r.renderbufferStorage(r.RENDERBUFFER,_e,M.width,M.height)}}r.bindRenderbuffer(r.RENDERBUFFER,null)}function ct(C,M,Z){const ge=M.isWebGLCubeRenderTarget===!0;if(n.bindFramebuffer(r.FRAMEBUFFER,C),!(M.depthTexture&&M.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const ye=s.get(M.depthTexture);if(ye.__renderTarget=M,(!ye.__webglTexture||M.depthTexture.image.width!==M.width||M.depthTexture.image.height!==M.height)&&(M.depthTexture.image.width=M.width,M.depthTexture.image.height=M.height,M.depthTexture.needsUpdate=!0),ge){if(ye.__webglInit===void 0&&(ye.__webglInit=!0,M.depthTexture.addEventListener("dispose",k)),ye.__webglTexture===void 0){ye.__webglTexture=r.createTexture(),n.bindTexture(r.TEXTURE_CUBE_MAP,ye.__webglTexture),We(r.TEXTURE_CUBE_MAP,M.depthTexture);const Ie=l.convert(M.depthTexture.format),Ge=l.convert(M.depthTexture.type);let Ne;M.depthTexture.format===wr?Ne=r.DEPTH_COMPONENT24:M.depthTexture.format===Ts&&(Ne=r.DEPTH24_STENCIL8);for(let be=0;be<6;be++)r.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+be,0,Ne,M.width,M.height,0,Ie,Ge,null)}}else K(M.depthTexture,0);const Ee=ye.__webglTexture,Re=Bt(M),pe=ge?r.TEXTURE_CUBE_MAP_POSITIVE_X+Z:r.TEXTURE_2D,_e=M.depthTexture.format===Ts?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT;if(M.depthTexture.format===wr)oe(M)?f.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,_e,pe,Ee,0,Re):r.framebufferTexture2D(r.FRAMEBUFFER,_e,pe,Ee,0);else if(M.depthTexture.format===Ts)oe(M)?f.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,_e,pe,Ee,0,Re):r.framebufferTexture2D(r.FRAMEBUFFER,_e,pe,Ee,0);else throw new Error("Unknown depthTexture format")}function Rt(C){const M=s.get(C),Z=C.isWebGLCubeRenderTarget===!0;if(M.__boundDepthTexture!==C.depthTexture){const ge=C.depthTexture;if(M.__depthDisposeCallback&&M.__depthDisposeCallback(),ge){const ye=()=>{delete M.__boundDepthTexture,delete M.__depthDisposeCallback,ge.removeEventListener("dispose",ye)};ge.addEventListener("dispose",ye),M.__depthDisposeCallback=ye}M.__boundDepthTexture=ge}if(C.depthTexture&&!M.__autoAllocateDepthBuffer)if(Z)for(let ge=0;ge<6;ge++)ct(M.__webglFramebuffer[ge],C,ge);else{const ge=C.texture.mipmaps;ge&&ge.length>0?ct(M.__webglFramebuffer[0],C,0):ct(M.__webglFramebuffer,C,0)}else if(Z){M.__webglDepthbuffer=[];for(let ge=0;ge<6;ge++)if(n.bindFramebuffer(r.FRAMEBUFFER,M.__webglFramebuffer[ge]),M.__webglDepthbuffer[ge]===void 0)M.__webglDepthbuffer[ge]=r.createRenderbuffer(),Vt(M.__webglDepthbuffer[ge],C,!1);else{const ye=C.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,Ee=M.__webglDepthbuffer[ge];r.bindRenderbuffer(r.RENDERBUFFER,Ee),r.framebufferRenderbuffer(r.FRAMEBUFFER,ye,r.RENDERBUFFER,Ee)}}else{const ge=C.texture.mipmaps;if(ge&&ge.length>0?n.bindFramebuffer(r.FRAMEBUFFER,M.__webglFramebuffer[0]):n.bindFramebuffer(r.FRAMEBUFFER,M.__webglFramebuffer),M.__webglDepthbuffer===void 0)M.__webglDepthbuffer=r.createRenderbuffer(),Vt(M.__webglDepthbuffer,C,!1);else{const ye=C.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,Ee=M.__webglDepthbuffer;r.bindRenderbuffer(r.RENDERBUFFER,Ee),r.framebufferRenderbuffer(r.FRAMEBUFFER,ye,r.RENDERBUFFER,Ee)}}n.bindFramebuffer(r.FRAMEBUFFER,null)}function kt(C,M,Z){const ge=s.get(C);M!==void 0&&tt(ge.__webglFramebuffer,C,C.texture,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,0),Z!==void 0&&Rt(C)}function ut(C){const M=C.texture,Z=s.get(C),ge=s.get(M);C.addEventListener("dispose",w);const ye=C.textures,Ee=C.isWebGLCubeRenderTarget===!0,Re=ye.length>1;if(Re||(ge.__webglTexture===void 0&&(ge.__webglTexture=r.createTexture()),ge.__version=M.version,u.memory.textures++),Ee){Z.__webglFramebuffer=[];for(let pe=0;pe<6;pe++)if(M.mipmaps&&M.mipmaps.length>0){Z.__webglFramebuffer[pe]=[];for(let _e=0;_e<M.mipmaps.length;_e++)Z.__webglFramebuffer[pe][_e]=r.createFramebuffer()}else Z.__webglFramebuffer[pe]=r.createFramebuffer()}else{if(M.mipmaps&&M.mipmaps.length>0){Z.__webglFramebuffer=[];for(let pe=0;pe<M.mipmaps.length;pe++)Z.__webglFramebuffer[pe]=r.createFramebuffer()}else Z.__webglFramebuffer=r.createFramebuffer();if(Re)for(let pe=0,_e=ye.length;pe<_e;pe++){const Ie=s.get(ye[pe]);Ie.__webglTexture===void 0&&(Ie.__webglTexture=r.createTexture(),u.memory.textures++)}if(C.samples>0&&oe(C)===!1){Z.__webglMultisampledFramebuffer=r.createFramebuffer(),Z.__webglColorRenderbuffer=[],n.bindFramebuffer(r.FRAMEBUFFER,Z.__webglMultisampledFramebuffer);for(let pe=0;pe<ye.length;pe++){const _e=ye[pe];Z.__webglColorRenderbuffer[pe]=r.createRenderbuffer(),r.bindRenderbuffer(r.RENDERBUFFER,Z.__webglColorRenderbuffer[pe]);const Ie=l.convert(_e.format,_e.colorSpace),Ge=l.convert(_e.type),Ne=P(_e.internalFormat,Ie,Ge,_e.normalized,_e.colorSpace,C.isXRRenderTarget===!0),be=Bt(C);r.renderbufferStorageMultisample(r.RENDERBUFFER,be,Ne,C.width,C.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+pe,r.RENDERBUFFER,Z.__webglColorRenderbuffer[pe])}r.bindRenderbuffer(r.RENDERBUFFER,null),C.depthBuffer&&(Z.__webglDepthRenderbuffer=r.createRenderbuffer(),Vt(Z.__webglDepthRenderbuffer,C,!0)),n.bindFramebuffer(r.FRAMEBUFFER,null)}}if(Ee){n.bindTexture(r.TEXTURE_CUBE_MAP,ge.__webglTexture),We(r.TEXTURE_CUBE_MAP,M);for(let pe=0;pe<6;pe++)if(M.mipmaps&&M.mipmaps.length>0)for(let _e=0;_e<M.mipmaps.length;_e++)tt(Z.__webglFramebuffer[pe][_e],C,M,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+pe,_e);else tt(Z.__webglFramebuffer[pe],C,M,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+pe,0);v(M)&&b(r.TEXTURE_CUBE_MAP),n.unbindTexture()}else if(Re){for(let pe=0,_e=ye.length;pe<_e;pe++){const Ie=ye[pe],Ge=s.get(Ie);let Ne=r.TEXTURE_2D;(C.isWebGL3DRenderTarget||C.isWebGLArrayRenderTarget)&&(Ne=C.isWebGL3DRenderTarget?r.TEXTURE_3D:r.TEXTURE_2D_ARRAY),n.bindTexture(Ne,Ge.__webglTexture),We(Ne,Ie),tt(Z.__webglFramebuffer,C,Ie,r.COLOR_ATTACHMENT0+pe,Ne,0),v(Ie)&&b(Ne)}n.unbindTexture()}else{let pe=r.TEXTURE_2D;if((C.isWebGL3DRenderTarget||C.isWebGLArrayRenderTarget)&&(pe=C.isWebGL3DRenderTarget?r.TEXTURE_3D:r.TEXTURE_2D_ARRAY),n.bindTexture(pe,ge.__webglTexture),We(pe,M),M.mipmaps&&M.mipmaps.length>0)for(let _e=0;_e<M.mipmaps.length;_e++)tt(Z.__webglFramebuffer[_e],C,M,r.COLOR_ATTACHMENT0,pe,_e);else tt(Z.__webglFramebuffer,C,M,r.COLOR_ATTACHMENT0,pe,0);v(M)&&b(pe),n.unbindTexture()}C.depthBuffer&&Rt(C)}function Ut(C){const M=C.textures;for(let Z=0,ge=M.length;Z<ge;Z++){const ye=M[Z];if(v(ye)){const Ee=L(C),Re=s.get(ye).__webglTexture;n.bindTexture(Ee,Re),b(Ee),n.unbindTexture()}}}const Yt=[],un=[];function G(C){if(C.samples>0){if(oe(C)===!1){const M=C.textures,Z=C.width,ge=C.height;let ye=r.COLOR_BUFFER_BIT;const Ee=C.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,Re=s.get(C),pe=M.length>1;if(pe)for(let Ie=0;Ie<M.length;Ie++)n.bindFramebuffer(r.FRAMEBUFFER,Re.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+Ie,r.RENDERBUFFER,null),n.bindFramebuffer(r.FRAMEBUFFER,Re.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+Ie,r.TEXTURE_2D,null,0);n.bindFramebuffer(r.READ_FRAMEBUFFER,Re.__webglMultisampledFramebuffer);const _e=C.texture.mipmaps;_e&&_e.length>0?n.bindFramebuffer(r.DRAW_FRAMEBUFFER,Re.__webglFramebuffer[0]):n.bindFramebuffer(r.DRAW_FRAMEBUFFER,Re.__webglFramebuffer);for(let Ie=0;Ie<M.length;Ie++){if(C.resolveDepthBuffer&&(C.depthBuffer&&(ye|=r.DEPTH_BUFFER_BIT),C.stencilBuffer&&C.resolveStencilBuffer&&(ye|=r.STENCIL_BUFFER_BIT)),pe){r.framebufferRenderbuffer(r.READ_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.RENDERBUFFER,Re.__webglColorRenderbuffer[Ie]);const Ge=s.get(M[Ie]).__webglTexture;r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,Ge,0)}r.blitFramebuffer(0,0,Z,ge,0,0,Z,ge,ye,r.NEAREST),p===!0&&(Yt.length=0,un.length=0,Yt.push(r.COLOR_ATTACHMENT0+Ie),C.depthBuffer&&C.resolveDepthBuffer===!1&&(Yt.push(Ee),un.push(Ee),r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,un)),r.invalidateFramebuffer(r.READ_FRAMEBUFFER,Yt))}if(n.bindFramebuffer(r.READ_FRAMEBUFFER,null),n.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),pe)for(let Ie=0;Ie<M.length;Ie++){n.bindFramebuffer(r.FRAMEBUFFER,Re.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+Ie,r.RENDERBUFFER,Re.__webglColorRenderbuffer[Ie]);const Ge=s.get(M[Ie]).__webglTexture;n.bindFramebuffer(r.FRAMEBUFFER,Re.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+Ie,r.TEXTURE_2D,Ge,0)}n.bindFramebuffer(r.DRAW_FRAMEBUFFER,Re.__webglMultisampledFramebuffer)}else if(C.depthBuffer&&C.resolveDepthBuffer===!1&&p){const M=C.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT;r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,[M])}}}function Bt(C){return Math.min(a.maxSamples,C.samples)}function oe(C){const M=s.get(C);return C.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&M.__useRenderToTexture!==!1}function F(C){const M=u.render.frame;x.get(C)!==M&&(x.set(C,M),C.update())}function Se(C,M){const Z=C.colorSpace,ge=C.format,ye=C.type;return C.isCompressedTexture===!0||C.isVideoTexture===!0||Z!==Xl&&Z!==Jr&&(zt.getTransfer(Z)===Jt?(ge!==Gi||ye!==yi)&&xt("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):Xt("WebGLTextures: Unsupported texture color space:",Z)),M}function Lt(C){return typeof HTMLImageElement<"u"&&C instanceof HTMLImageElement?(m.width=C.naturalWidth||C.width,m.height=C.naturalHeight||C.height):typeof VideoFrame<"u"&&C instanceof VideoFrame?(m.width=C.displayWidth,m.height=C.displayHeight):(m.width=C.width,m.height=C.height),m}this.allocateTextureUnit=te,this.resetTextureUnits=le,this.getTextureUnits=me,this.setTextureUnits=W,this.setTexture2D=K,this.setTexture2DArray=fe,this.setTexture3D=he,this.setTextureCube=U,this.rebindTextures=kt,this.setupRenderTarget=ut,this.updateRenderTargetMipmap=Ut,this.updateMultisampleRenderTarget=G,this.setupDepthRenderbuffer=Rt,this.setupFrameBufferTexture=tt,this.useMultisampledRTT=oe,this.isReversedDepthBuffer=function(){return n.buffers.depth.getReversed()}}function FM(r,e){function n(s,a=Jr){let l;const u=zt.getTransfer(a);if(s===yi)return r.UNSIGNED_BYTE;if(s===hf)return r.UNSIGNED_SHORT_4_4_4_4;if(s===pf)return r.UNSIGNED_SHORT_5_5_5_1;if(s===v0)return r.UNSIGNED_INT_5_9_9_9_REV;if(s===x0)return r.UNSIGNED_INT_10F_11F_11F_REV;if(s===g0)return r.BYTE;if(s===_0)return r.SHORT;if(s===ua)return r.UNSIGNED_SHORT;if(s===ff)return r.INT;if(s===ir)return r.UNSIGNED_INT;if(s===Ji)return r.FLOAT;if(s===Er)return r.HALF_FLOAT;if(s===y0)return r.ALPHA;if(s===S0)return r.RGB;if(s===Gi)return r.RGBA;if(s===wr)return r.DEPTH_COMPONENT;if(s===Ts)return r.DEPTH_STENCIL;if(s===M0)return r.RED;if(s===mf)return r.RED_INTEGER;if(s===bs)return r.RG;if(s===gf)return r.RG_INTEGER;if(s===_f)return r.RGBA_INTEGER;if(s===kl||s===Bl||s===zl||s===Hl)if(u===Jt)if(l=e.get("WEBGL_compressed_texture_s3tc_srgb"),l!==null){if(s===kl)return l.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(s===Bl)return l.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(s===zl)return l.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(s===Hl)return l.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(l=e.get("WEBGL_compressed_texture_s3tc"),l!==null){if(s===kl)return l.COMPRESSED_RGB_S3TC_DXT1_EXT;if(s===Bl)return l.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(s===zl)return l.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(s===Hl)return l.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(s===Ad||s===bd||s===Cd||s===Rd)if(l=e.get("WEBGL_compressed_texture_pvrtc"),l!==null){if(s===Ad)return l.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(s===bd)return l.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(s===Cd)return l.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(s===Rd)return l.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(s===Pd||s===Ld||s===Dd||s===Id||s===Nd||s===Gl||s===Ud)if(l=e.get("WEBGL_compressed_texture_etc"),l!==null){if(s===Pd||s===Ld)return u===Jt?l.COMPRESSED_SRGB8_ETC2:l.COMPRESSED_RGB8_ETC2;if(s===Dd)return u===Jt?l.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:l.COMPRESSED_RGBA8_ETC2_EAC;if(s===Id)return l.COMPRESSED_R11_EAC;if(s===Nd)return l.COMPRESSED_SIGNED_R11_EAC;if(s===Gl)return l.COMPRESSED_RG11_EAC;if(s===Ud)return l.COMPRESSED_SIGNED_RG11_EAC}else return null;if(s===Fd||s===Od||s===kd||s===Bd||s===zd||s===Hd||s===Vd||s===Gd||s===Wd||s===Xd||s===jd||s===Yd||s===qd||s===$d)if(l=e.get("WEBGL_compressed_texture_astc"),l!==null){if(s===Fd)return u===Jt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:l.COMPRESSED_RGBA_ASTC_4x4_KHR;if(s===Od)return u===Jt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:l.COMPRESSED_RGBA_ASTC_5x4_KHR;if(s===kd)return u===Jt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:l.COMPRESSED_RGBA_ASTC_5x5_KHR;if(s===Bd)return u===Jt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:l.COMPRESSED_RGBA_ASTC_6x5_KHR;if(s===zd)return u===Jt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:l.COMPRESSED_RGBA_ASTC_6x6_KHR;if(s===Hd)return u===Jt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:l.COMPRESSED_RGBA_ASTC_8x5_KHR;if(s===Vd)return u===Jt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:l.COMPRESSED_RGBA_ASTC_8x6_KHR;if(s===Gd)return u===Jt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:l.COMPRESSED_RGBA_ASTC_8x8_KHR;if(s===Wd)return u===Jt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:l.COMPRESSED_RGBA_ASTC_10x5_KHR;if(s===Xd)return u===Jt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:l.COMPRESSED_RGBA_ASTC_10x6_KHR;if(s===jd)return u===Jt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:l.COMPRESSED_RGBA_ASTC_10x8_KHR;if(s===Yd)return u===Jt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:l.COMPRESSED_RGBA_ASTC_10x10_KHR;if(s===qd)return u===Jt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:l.COMPRESSED_RGBA_ASTC_12x10_KHR;if(s===$d)return u===Jt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:l.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(s===Kd||s===Zd||s===Jd)if(l=e.get("EXT_texture_compression_bptc"),l!==null){if(s===Kd)return u===Jt?l.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:l.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(s===Zd)return l.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(s===Jd)return l.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(s===Qd||s===ef||s===Wl||s===tf)if(l=e.get("EXT_texture_compression_rgtc"),l!==null){if(s===Qd)return l.COMPRESSED_RED_RGTC1_EXT;if(s===ef)return l.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(s===Wl)return l.COMPRESSED_RED_GREEN_RGTC2_EXT;if(s===tf)return l.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return s===da?r.UNSIGNED_INT_24_8:r[s]!==void 0?r[s]:null}return{convert:n}}const OM=`
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

}`;class BM{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,n){if(this.texture===null){const s=new P0(e.texture);(e.depthNear!==n.depthNear||e.depthFar!==n.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=s}}getMesh(e){if(this.texture!==null&&this.mesh===null){const n=e.cameras[0].viewport,s=new rr({vertexShader:OM,fragmentShader:kM,uniforms:{depthColor:{value:this.texture},depthWidth:{value:n.z},depthHeight:{value:n.w}}});this.mesh=new Fe(new kn(20,20),s)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class zM extends Cs{constructor(e,n){super();const s=this;let a=null,l=1,u=null,f="local-floor",p=1,m=null,x=null,y=null,g=null,S=null,T=null;const R=typeof XRWebGLBinding<"u",_=new BM,v={},b=n.getContextAttributes();let L=null,P=null;const z=[],D=[],k=new Ht;let w=null;const I=new xi;I.viewport=new gn;const j=new xi;j.viewport=new gn;const O=[I,j],q=new $v;let le=null,me=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(ce){let we=z[ce];return we===void 0&&(we=new Wu,z[ce]=we),we.getTargetRaySpace()},this.getControllerGrip=function(ce){let we=z[ce];return we===void 0&&(we=new Wu,z[ce]=we),we.getGripSpace()},this.getHand=function(ce){let we=z[ce];return we===void 0&&(we=new Wu,z[ce]=we),we.getHandSpace()};function W(ce){const we=D.indexOf(ce.inputSource);if(we===-1)return;const xe=z[we];xe!==void 0&&(xe.update(ce.inputSource,ce.frame,m||u),xe.dispatchEvent({type:ce.type,data:ce.inputSource}))}function te(){a.removeEventListener("select",W),a.removeEventListener("selectstart",W),a.removeEventListener("selectend",W),a.removeEventListener("squeeze",W),a.removeEventListener("squeezestart",W),a.removeEventListener("squeezeend",W),a.removeEventListener("end",te),a.removeEventListener("inputsourceschange",$);for(let ce=0;ce<z.length;ce++){const we=D[ce];we!==null&&(D[ce]=null,z[ce].disconnect(we))}le=null,me=null,_.reset();for(const ce in v)delete v[ce];e.setRenderTarget(L),S=null,g=null,y=null,a=null,P=null,We.stop(),s.isPresenting=!1,e.setPixelRatio(w),e.setSize(k.width,k.height,!1),s.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(ce){l=ce,s.isPresenting===!0&&xt("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(ce){f=ce,s.isPresenting===!0&&xt("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return m||u},this.setReferenceSpace=function(ce){m=ce},this.getBaseLayer=function(){return g!==null?g:S},this.getBinding=function(){return y===null&&R&&(y=new XRWebGLBinding(a,n)),y},this.getFrame=function(){return T},this.getSession=function(){return a},this.setSession=async function(ce){if(a=ce,a!==null){if(L=e.getRenderTarget(),a.addEventListener("select",W),a.addEventListener("selectstart",W),a.addEventListener("selectend",W),a.addEventListener("squeeze",W),a.addEventListener("squeezestart",W),a.addEventListener("squeezeend",W),a.addEventListener("end",te),a.addEventListener("inputsourceschange",$),b.xrCompatible!==!0&&await n.makeXRCompatible(),w=e.getPixelRatio(),e.getSize(k),R&&"createProjectionLayer"in XRWebGLBinding.prototype){let xe=null,ke=null,rt=null;b.depth&&(rt=b.stencil?n.DEPTH24_STENCIL8:n.DEPTH_COMPONENT24,xe=b.stencil?Ts:wr,ke=b.stencil?da:ir);const tt={colorFormat:n.RGBA8,depthFormat:rt,scaleFactor:l};y=this.getBinding(),g=y.createProjectionLayer(tt),a.updateRenderState({layers:[g]}),e.setPixelRatio(1),e.setSize(g.textureWidth,g.textureHeight,!1),P=new tr(g.textureWidth,g.textureHeight,{format:Gi,type:yi,depthTexture:new _o(g.textureWidth,g.textureHeight,ke,void 0,void 0,void 0,void 0,void 0,void 0,xe),stencilBuffer:b.stencil,colorSpace:e.outputColorSpace,samples:b.antialias?4:0,resolveDepthBuffer:g.ignoreDepthValues===!1,resolveStencilBuffer:g.ignoreDepthValues===!1})}else{const xe={antialias:b.antialias,alpha:!0,depth:b.depth,stencil:b.stencil,framebufferScaleFactor:l};S=new XRWebGLLayer(a,n,xe),a.updateRenderState({baseLayer:S}),e.setPixelRatio(1),e.setSize(S.framebufferWidth,S.framebufferHeight,!1),P=new tr(S.framebufferWidth,S.framebufferHeight,{format:Gi,type:yi,colorSpace:e.outputColorSpace,stencilBuffer:b.stencil,resolveDepthBuffer:S.ignoreDepthValues===!1,resolveStencilBuffer:S.ignoreDepthValues===!1})}P.isXRRenderTarget=!0,this.setFoveation(p),m=null,u=await a.requestReferenceSpace(f),We.setContext(a),We.start(),s.isPresenting=!0,s.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(a!==null)return a.environmentBlendMode},this.getDepthTexture=function(){return _.getDepthTexture()};function $(ce){for(let we=0;we<ce.removed.length;we++){const xe=ce.removed[we],ke=D.indexOf(xe);ke>=0&&(D[ke]=null,z[ke].disconnect(xe))}for(let we=0;we<ce.added.length;we++){const xe=ce.added[we];let ke=D.indexOf(xe);if(ke===-1){for(let tt=0;tt<z.length;tt++)if(tt>=D.length){D.push(xe),ke=tt;break}else if(D[tt]===null){D[tt]=xe,ke=tt;break}if(ke===-1)break}const rt=z[ke];rt&&rt.connect(xe)}}const K=new J,fe=new J;function he(ce,we,xe){K.setFromMatrixPosition(we.matrixWorld),fe.setFromMatrixPosition(xe.matrixWorld);const ke=K.distanceTo(fe),rt=we.projectionMatrix.elements,tt=xe.projectionMatrix.elements,Vt=rt[14]/(rt[10]-1),ct=rt[14]/(rt[10]+1),Rt=(rt[9]+1)/rt[5],kt=(rt[9]-1)/rt[5],ut=(rt[8]-1)/rt[0],Ut=(tt[8]+1)/tt[0],Yt=Vt*ut,un=Vt*Ut,G=ke/(-ut+Ut),Bt=G*-ut;if(we.matrixWorld.decompose(ce.position,ce.quaternion,ce.scale),ce.translateX(Bt),ce.translateZ(G),ce.matrixWorld.compose(ce.position,ce.quaternion,ce.scale),ce.matrixWorldInverse.copy(ce.matrixWorld).invert(),rt[10]===-1)ce.projectionMatrix.copy(we.projectionMatrix),ce.projectionMatrixInverse.copy(we.projectionMatrixInverse);else{const oe=Vt+G,F=ct+G,Se=Yt-Bt,Lt=un+(ke-Bt),C=Rt*ct/F*oe,M=kt*ct/F*oe;ce.projectionMatrix.makePerspective(Se,Lt,C,M,oe,F),ce.projectionMatrixInverse.copy(ce.projectionMatrix).invert()}}function U(ce,we){we===null?ce.matrixWorld.copy(ce.matrix):ce.matrixWorld.multiplyMatrices(we.matrixWorld,ce.matrix),ce.matrixWorldInverse.copy(ce.matrixWorld).invert()}this.updateCamera=function(ce){if(a===null)return;let we=ce.near,xe=ce.far;_.texture!==null&&(_.depthNear>0&&(we=_.depthNear),_.depthFar>0&&(xe=_.depthFar)),q.near=j.near=I.near=we,q.far=j.far=I.far=xe,(le!==q.near||me!==q.far)&&(a.updateRenderState({depthNear:q.near,depthFar:q.far}),le=q.near,me=q.far),q.layers.mask=ce.layers.mask|6,I.layers.mask=q.layers.mask&-5,j.layers.mask=q.layers.mask&-3;const ke=ce.parent,rt=q.cameras;U(q,ke);for(let tt=0;tt<rt.length;tt++)U(rt[tt],ke);rt.length===2?he(q,I,j):q.projectionMatrix.copy(I.projectionMatrix),ne(ce,q,ke)};function ne(ce,we,xe){xe===null?ce.matrix.copy(we.matrixWorld):(ce.matrix.copy(xe.matrixWorld),ce.matrix.invert(),ce.matrix.multiply(we.matrixWorld)),ce.matrix.decompose(ce.position,ce.quaternion,ce.scale),ce.updateMatrixWorld(!0),ce.projectionMatrix.copy(we.projectionMatrix),ce.projectionMatrixInverse.copy(we.projectionMatrixInverse),ce.isPerspectiveCamera&&(ce.fov=sf*2*Math.atan(1/ce.projectionMatrix.elements[5]),ce.zoom=1)}this.getCamera=function(){return q},this.getFoveation=function(){if(!(g===null&&S===null))return p},this.setFoveation=function(ce){p=ce,g!==null&&(g.fixedFoveation=ce),S!==null&&S.fixedFoveation!==void 0&&(S.fixedFoveation=ce)},this.hasDepthSensing=function(){return _.texture!==null},this.getDepthSensingMesh=function(){return _.getMesh(q)},this.getCameraTexture=function(ce){return v[ce]};let Xe=null;function ze(ce,we){if(x=we.getViewerPose(m||u),T=we,x!==null){const xe=x.views;S!==null&&(e.setRenderTargetFramebuffer(P,S.framebuffer),e.setRenderTarget(P));let ke=!1;xe.length!==q.cameras.length&&(q.cameras.length=0,ke=!0);for(let ct=0;ct<xe.length;ct++){const Rt=xe[ct];let kt=null;if(S!==null)kt=S.getViewport(Rt);else{const Ut=y.getViewSubImage(g,Rt);kt=Ut.viewport,ct===0&&(e.setRenderTargetTextures(P,Ut.colorTexture,Ut.depthStencilTexture),e.setRenderTarget(P))}let ut=O[ct];ut===void 0&&(ut=new xi,ut.layers.enable(ct),ut.viewport=new gn,O[ct]=ut),ut.matrix.fromArray(Rt.transform.matrix),ut.matrix.decompose(ut.position,ut.quaternion,ut.scale),ut.projectionMatrix.fromArray(Rt.projectionMatrix),ut.projectionMatrixInverse.copy(ut.projectionMatrix).invert(),ut.viewport.set(kt.x,kt.y,kt.width,kt.height),ct===0&&(q.matrix.copy(ut.matrix),q.matrix.decompose(q.position,q.quaternion,q.scale)),ke===!0&&q.cameras.push(ut)}const rt=a.enabledFeatures;if(rt&&rt.includes("depth-sensing")&&a.depthUsage=="gpu-optimized"&&R){y=s.getBinding();const ct=y.getDepthInformation(xe[0]);ct&&ct.isValid&&ct.texture&&_.init(ct,a.renderState)}if(rt&&rt.includes("camera-access")&&R){e.state.unbindTexture(),y=s.getBinding();for(let ct=0;ct<xe.length;ct++){const Rt=xe[ct].camera;if(Rt){let kt=v[Rt];kt||(kt=new P0,v[Rt]=kt);const ut=y.getCameraImage(Rt);kt.sourceTexture=ut}}}}for(let xe=0;xe<z.length;xe++){const ke=D[xe],rt=z[xe];ke!==null&&rt!==void 0&&rt.update(ke,we,m||u)}Xe&&Xe(ce,we),we.detectedPlanes&&s.dispatchEvent({type:"planesdetected",data:we}),T=null}const We=new N0;We.setAnimationLoop(ze),this.setAnimationLoop=function(ce){Xe=ce},this.dispose=function(){}}}const HM=new _n,H0=new wt;H0.set(-1,0,0,0,1,0,0,0,1);function VM(r,e){function n(_,v){_.matrixAutoUpdate===!0&&_.updateMatrix(),v.value.copy(_.matrix)}function s(_,v){v.color.getRGB(_.fogColor.value,L0(r)),v.isFog?(_.fogNear.value=v.near,_.fogFar.value=v.far):v.isFogExp2&&(_.fogDensity.value=v.density)}function a(_,v,b,L,P){v.isNodeMaterial?v.uniformsNeedUpdate=!1:v.isMeshBasicMaterial?l(_,v):v.isMeshLambertMaterial?(l(_,v),v.envMap&&(_.envMapIntensity.value=v.envMapIntensity)):v.isMeshToonMaterial?(l(_,v),y(_,v)):v.isMeshPhongMaterial?(l(_,v),x(_,v),v.envMap&&(_.envMapIntensity.value=v.envMapIntensity)):v.isMeshStandardMaterial?(l(_,v),g(_,v),v.isMeshPhysicalMaterial&&S(_,v,P)):v.isMeshMatcapMaterial?(l(_,v),T(_,v)):v.isMeshDepthMaterial?l(_,v):v.isMeshDistanceMaterial?(l(_,v),R(_,v)):v.isMeshNormalMaterial?l(_,v):v.isLineBasicMaterial?(u(_,v),v.isLineDashedMaterial&&f(_,v)):v.isPointsMaterial?p(_,v,b,L):v.isSpriteMaterial?m(_,v):v.isShadowMaterial?(_.color.value.copy(v.color),_.opacity.value=v.opacity):v.isShaderMaterial&&(v.uniformsNeedUpdate=!1)}function l(_,v){_.opacity.value=v.opacity,v.color&&_.diffuse.value.copy(v.color),v.emissive&&_.emissive.value.copy(v.emissive).multiplyScalar(v.emissiveIntensity),v.map&&(_.map.value=v.map,n(v.map,_.mapTransform)),v.alphaMap&&(_.alphaMap.value=v.alphaMap,n(v.alphaMap,_.alphaMapTransform)),v.bumpMap&&(_.bumpMap.value=v.bumpMap,n(v.bumpMap,_.bumpMapTransform),_.bumpScale.value=v.bumpScale,v.side===fi&&(_.bumpScale.value*=-1)),v.normalMap&&(_.normalMap.value=v.normalMap,n(v.normalMap,_.normalMapTransform),_.normalScale.value.copy(v.normalScale),v.side===fi&&_.normalScale.value.negate()),v.displacementMap&&(_.displacementMap.value=v.displacementMap,n(v.displacementMap,_.displacementMapTransform),_.displacementScale.value=v.displacementScale,_.displacementBias.value=v.displacementBias),v.emissiveMap&&(_.emissiveMap.value=v.emissiveMap,n(v.emissiveMap,_.emissiveMapTransform)),v.specularMap&&(_.specularMap.value=v.specularMap,n(v.specularMap,_.specularMapTransform)),v.alphaTest>0&&(_.alphaTest.value=v.alphaTest);const b=e.get(v),L=b.envMap,P=b.envMapRotation;L&&(_.envMap.value=L,_.envMapRotation.value.setFromMatrix4(HM.makeRotationFromEuler(P)).transpose(),L.isCubeTexture&&L.isRenderTargetTexture===!1&&_.envMapRotation.value.premultiply(H0),_.reflectivity.value=v.reflectivity,_.ior.value=v.ior,_.refractionRatio.value=v.refractionRatio),v.lightMap&&(_.lightMap.value=v.lightMap,_.lightMapIntensity.value=v.lightMapIntensity,n(v.lightMap,_.lightMapTransform)),v.aoMap&&(_.aoMap.value=v.aoMap,_.aoMapIntensity.value=v.aoMapIntensity,n(v.aoMap,_.aoMapTransform))}function u(_,v){_.diffuse.value.copy(v.color),_.opacity.value=v.opacity,v.map&&(_.map.value=v.map,n(v.map,_.mapTransform))}function f(_,v){_.dashSize.value=v.dashSize,_.totalSize.value=v.dashSize+v.gapSize,_.scale.value=v.scale}function p(_,v,b,L){_.diffuse.value.copy(v.color),_.opacity.value=v.opacity,_.size.value=v.size*b,_.scale.value=L*.5,v.map&&(_.map.value=v.map,n(v.map,_.uvTransform)),v.alphaMap&&(_.alphaMap.value=v.alphaMap,n(v.alphaMap,_.alphaMapTransform)),v.alphaTest>0&&(_.alphaTest.value=v.alphaTest)}function m(_,v){_.diffuse.value.copy(v.color),_.opacity.value=v.opacity,_.rotation.value=v.rotation,v.map&&(_.map.value=v.map,n(v.map,_.mapTransform)),v.alphaMap&&(_.alphaMap.value=v.alphaMap,n(v.alphaMap,_.alphaMapTransform)),v.alphaTest>0&&(_.alphaTest.value=v.alphaTest)}function x(_,v){_.specular.value.copy(v.specular),_.shininess.value=Math.max(v.shininess,1e-4)}function y(_,v){v.gradientMap&&(_.gradientMap.value=v.gradientMap)}function g(_,v){_.metalness.value=v.metalness,v.metalnessMap&&(_.metalnessMap.value=v.metalnessMap,n(v.metalnessMap,_.metalnessMapTransform)),_.roughness.value=v.roughness,v.roughnessMap&&(_.roughnessMap.value=v.roughnessMap,n(v.roughnessMap,_.roughnessMapTransform)),v.envMap&&(_.envMapIntensity.value=v.envMapIntensity)}function S(_,v,b){_.ior.value=v.ior,v.sheen>0&&(_.sheenColor.value.copy(v.sheenColor).multiplyScalar(v.sheen),_.sheenRoughness.value=v.sheenRoughness,v.sheenColorMap&&(_.sheenColorMap.value=v.sheenColorMap,n(v.sheenColorMap,_.sheenColorMapTransform)),v.sheenRoughnessMap&&(_.sheenRoughnessMap.value=v.sheenRoughnessMap,n(v.sheenRoughnessMap,_.sheenRoughnessMapTransform))),v.clearcoat>0&&(_.clearcoat.value=v.clearcoat,_.clearcoatRoughness.value=v.clearcoatRoughness,v.clearcoatMap&&(_.clearcoatMap.value=v.clearcoatMap,n(v.clearcoatMap,_.clearcoatMapTransform)),v.clearcoatRoughnessMap&&(_.clearcoatRoughnessMap.value=v.clearcoatRoughnessMap,n(v.clearcoatRoughnessMap,_.clearcoatRoughnessMapTransform)),v.clearcoatNormalMap&&(_.clearcoatNormalMap.value=v.clearcoatNormalMap,n(v.clearcoatNormalMap,_.clearcoatNormalMapTransform),_.clearcoatNormalScale.value.copy(v.clearcoatNormalScale),v.side===fi&&_.clearcoatNormalScale.value.negate())),v.dispersion>0&&(_.dispersion.value=v.dispersion),v.iridescence>0&&(_.iridescence.value=v.iridescence,_.iridescenceIOR.value=v.iridescenceIOR,_.iridescenceThicknessMinimum.value=v.iridescenceThicknessRange[0],_.iridescenceThicknessMaximum.value=v.iridescenceThicknessRange[1],v.iridescenceMap&&(_.iridescenceMap.value=v.iridescenceMap,n(v.iridescenceMap,_.iridescenceMapTransform)),v.iridescenceThicknessMap&&(_.iridescenceThicknessMap.value=v.iridescenceThicknessMap,n(v.iridescenceThicknessMap,_.iridescenceThicknessMapTransform))),v.transmission>0&&(_.transmission.value=v.transmission,_.transmissionSamplerMap.value=b.texture,_.transmissionSamplerSize.value.set(b.width,b.height),v.transmissionMap&&(_.transmissionMap.value=v.transmissionMap,n(v.transmissionMap,_.transmissionMapTransform)),_.thickness.value=v.thickness,v.thicknessMap&&(_.thicknessMap.value=v.thicknessMap,n(v.thicknessMap,_.thicknessMapTransform)),_.attenuationDistance.value=v.attenuationDistance,_.attenuationColor.value.copy(v.attenuationColor)),v.anisotropy>0&&(_.anisotropyVector.value.set(v.anisotropy*Math.cos(v.anisotropyRotation),v.anisotropy*Math.sin(v.anisotropyRotation)),v.anisotropyMap&&(_.anisotropyMap.value=v.anisotropyMap,n(v.anisotropyMap,_.anisotropyMapTransform))),_.specularIntensity.value=v.specularIntensity,_.specularColor.value.copy(v.specularColor),v.specularColorMap&&(_.specularColorMap.value=v.specularColorMap,n(v.specularColorMap,_.specularColorMapTransform)),v.specularIntensityMap&&(_.specularIntensityMap.value=v.specularIntensityMap,n(v.specularIntensityMap,_.specularIntensityMapTransform))}function T(_,v){v.matcap&&(_.matcap.value=v.matcap)}function R(_,v){const b=e.get(v).light;_.referencePosition.value.setFromMatrixPosition(b.matrixWorld),_.nearDistance.value=b.shadow.camera.near,_.farDistance.value=b.shadow.camera.far}return{refreshFogUniforms:s,refreshMaterialUniforms:a}}function GM(r,e,n,s){let a={},l={},u=[];const f=r.getParameter(r.MAX_UNIFORM_BUFFER_BINDINGS);function p(b,L){const P=L.program;s.uniformBlockBinding(b,P)}function m(b,L){let P=a[b.id];P===void 0&&(T(b),P=x(b),a[b.id]=P,b.addEventListener("dispose",_));const z=L.program;s.updateUBOMapping(b,z);const D=e.render.frame;l[b.id]!==D&&(g(b),l[b.id]=D)}function x(b){const L=y();b.__bindingPointIndex=L;const P=r.createBuffer(),z=b.__size,D=b.usage;return r.bindBuffer(r.UNIFORM_BUFFER,P),r.bufferData(r.UNIFORM_BUFFER,z,D),r.bindBuffer(r.UNIFORM_BUFFER,null),r.bindBufferBase(r.UNIFORM_BUFFER,L,P),P}function y(){for(let b=0;b<f;b++)if(u.indexOf(b)===-1)return u.push(b),b;return Xt("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function g(b){const L=a[b.id],P=b.uniforms,z=b.__cache;r.bindBuffer(r.UNIFORM_BUFFER,L);for(let D=0,k=P.length;D<k;D++){const w=Array.isArray(P[D])?P[D]:[P[D]];for(let I=0,j=w.length;I<j;I++){const O=w[I];if(S(O,D,I,z)===!0){const q=O.__offset,le=Array.isArray(O.value)?O.value:[O.value];let me=0;for(let W=0;W<le.length;W++){const te=le[W],$=R(te);typeof te=="number"||typeof te=="boolean"?(O.__data[0]=te,r.bufferSubData(r.UNIFORM_BUFFER,q+me,O.__data)):te.isMatrix3?(O.__data[0]=te.elements[0],O.__data[1]=te.elements[1],O.__data[2]=te.elements[2],O.__data[3]=0,O.__data[4]=te.elements[3],O.__data[5]=te.elements[4],O.__data[6]=te.elements[5],O.__data[7]=0,O.__data[8]=te.elements[6],O.__data[9]=te.elements[7],O.__data[10]=te.elements[8],O.__data[11]=0):ArrayBuffer.isView(te)?O.__data.set(new te.constructor(te.buffer,te.byteOffset,O.__data.length)):(te.toArray(O.__data,me),me+=$.storage/Float32Array.BYTES_PER_ELEMENT)}r.bufferSubData(r.UNIFORM_BUFFER,q,O.__data)}}}r.bindBuffer(r.UNIFORM_BUFFER,null)}function S(b,L,P,z){const D=b.value,k=L+"_"+P;if(z[k]===void 0)return typeof D=="number"||typeof D=="boolean"?z[k]=D:ArrayBuffer.isView(D)?z[k]=D.slice():z[k]=D.clone(),!0;{const w=z[k];if(typeof D=="number"||typeof D=="boolean"){if(w!==D)return z[k]=D,!0}else{if(ArrayBuffer.isView(D))return!0;if(w.equals(D)===!1)return w.copy(D),!0}}return!1}function T(b){const L=b.uniforms;let P=0;const z=16;for(let k=0,w=L.length;k<w;k++){const I=Array.isArray(L[k])?L[k]:[L[k]];for(let j=0,O=I.length;j<O;j++){const q=I[j],le=Array.isArray(q.value)?q.value:[q.value];for(let me=0,W=le.length;me<W;me++){const te=le[me],$=R(te),K=P%z,fe=K%$.boundary,he=K+fe;P+=fe,he!==0&&z-he<$.storage&&(P+=z-he),q.__data=new Float32Array($.storage/Float32Array.BYTES_PER_ELEMENT),q.__offset=P,P+=$.storage}}}const D=P%z;return D>0&&(P+=z-D),b.__size=P,b.__cache={},this}function R(b){const L={boundary:0,storage:0};return typeof b=="number"||typeof b=="boolean"?(L.boundary=4,L.storage=4):b.isVector2?(L.boundary=8,L.storage=8):b.isVector3||b.isColor?(L.boundary=16,L.storage=12):b.isVector4?(L.boundary=16,L.storage=16):b.isMatrix3?(L.boundary=48,L.storage=48):b.isMatrix4?(L.boundary=64,L.storage=64):b.isTexture?xt("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(b)?(L.boundary=16,L.storage=b.byteLength):xt("WebGLRenderer: Unsupported uniform value type.",b),L}function _(b){const L=b.target;L.removeEventListener("dispose",_);const P=u.indexOf(L.__bindingPointIndex);u.splice(P,1),r.deleteBuffer(a[L.id]),delete a[L.id],delete l[L.id]}function v(){for(const b in a)r.deleteBuffer(a[b]);u=[],a={},l={}}return{bind:p,update:m,dispose:v}}const WM=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let Ki=null;function XM(){return Ki===null&&(Ki=new Lv(WM,16,16,bs,Er),Ki.name="DFG_LUT",Ki.minFilter=qn,Ki.magFilter=qn,Ki.wrapS=yr,Ki.wrapT=yr,Ki.generateMipmaps=!1,Ki.needsUpdate=!0),Ki}class jM{constructor(e={}){const{canvas:n=lv(),context:s=null,depth:a=!0,stencil:l=!1,alpha:u=!1,antialias:f=!1,premultipliedAlpha:p=!0,preserveDrawingBuffer:m=!1,powerPreference:x="default",failIfMajorPerformanceCaveat:y=!1,reversedDepthBuffer:g=!1,outputBufferType:S=yi}=e;this.isWebGLRenderer=!0;let T;if(s!==null){if(typeof WebGLRenderingContext<"u"&&s instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");T=s.getContextAttributes().alpha}else T=u;const R=S,_=new Set([_f,gf,mf]),v=new Set([yi,ir,ua,da,hf,pf]),b=new Uint32Array(4),L=new Int32Array(4),P=new J;let z=null,D=null;const k=[],w=[];let I=null;this.domElement=n,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=er,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const j=this;let O=!1,q=null;this._outputColorSpace=di;let le=0,me=0,W=null,te=-1,$=null;const K=new gn,fe=new gn;let he=null;const U=new Ct(0);let ne=0,Xe=n.width,ze=n.height,We=1,ce=null,we=null;const xe=new gn(0,0,Xe,ze),ke=new gn(0,0,Xe,ze);let rt=!1;const tt=new wf;let Vt=!1,ct=!1;const Rt=new _n,kt=new J,ut=new gn,Ut={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Yt=!1;function un(){return W===null?We:1}let G=s;function Bt(A,Y){return n.getContext(A,Y)}try{const A={alpha:!0,depth:a,stencil:l,antialias:f,premultipliedAlpha:p,preserveDrawingBuffer:m,powerPreference:x,failIfMajorPerformanceCaveat:y};if("setAttribute"in n&&n.setAttribute("data-engine",`three.js r${uf}`),n.addEventListener("webglcontextlost",Me,!1),n.addEventListener("webglcontextrestored",Ke,!1),n.addEventListener("webglcontextcreationerror",Qe,!1),G===null){const Y="webgl2";if(G=Bt(Y,A),G===null)throw Bt(Y)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(A){throw Xt("WebGLRenderer: "+A.message),A}let oe,F,Se,Lt,C,M,Z,ge,ye,Ee,Re,pe,_e,Ie,Ge,Ne,be,dt,ft,yt,B,Ce,ve;function je(){oe=new XS(G),oe.init(),B=new FM(G,oe),F=new OS(G,oe,e,B),Se=new NM(G,oe),F.reversedDepthBuffer&&g&&Se.buffers.depth.setReversed(!0),Lt=new qS(G),C=new yM,M=new UM(G,oe,Se,C,F,B,Lt),Z=new WS(j),ge=new Jv(G),Ce=new US(G,ge),ye=new jS(G,ge,Lt,Ce),Ee=new KS(G,ye,ge,Ce,Lt),dt=new $S(G,F,M),Ge=new kS(C),Re=new xM(j,Z,oe,F,Ce,Ge),pe=new VM(j,C),_e=new MM,Ie=new CM(oe),be=new NS(j,Z,Se,Ee,T,p),Ne=new IM(j,Ee,F),ve=new GM(G,Lt,F,Se),ft=new FS(G,oe,Lt),yt=new YS(G,oe,Lt),Lt.programs=Re.programs,j.capabilities=F,j.extensions=oe,j.properties=C,j.renderLists=_e,j.shadowMap=Ne,j.state=Se,j.info=Lt}je(),R!==yi&&(I=new JS(R,n.width,n.height,a,l));const Ue=new zM(j,G);this.xr=Ue,this.getContext=function(){return G},this.getContextAttributes=function(){return G.getContextAttributes()},this.forceContextLoss=function(){const A=oe.get("WEBGL_lose_context");A&&A.loseContext()},this.forceContextRestore=function(){const A=oe.get("WEBGL_lose_context");A&&A.restoreContext()},this.getPixelRatio=function(){return We},this.setPixelRatio=function(A){A!==void 0&&(We=A,this.setSize(Xe,ze,!1))},this.getSize=function(A){return A.set(Xe,ze)},this.setSize=function(A,Y,ue=!0){if(Ue.isPresenting){xt("WebGLRenderer: Can't change size while VR device is presenting.");return}Xe=A,ze=Y,n.width=Math.floor(A*We),n.height=Math.floor(Y*We),ue===!0&&(n.style.width=A+"px",n.style.height=Y+"px"),I!==null&&I.setSize(n.width,n.height),this.setViewport(0,0,A,Y)},this.getDrawingBufferSize=function(A){return A.set(Xe*We,ze*We).floor()},this.setDrawingBufferSize=function(A,Y,ue){Xe=A,ze=Y,We=ue,n.width=Math.floor(A*ue),n.height=Math.floor(Y*ue),this.setViewport(0,0,A,Y)},this.setEffects=function(A){if(R===yi){Xt("THREE.WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(A){for(let Y=0;Y<A.length;Y++)if(A[Y].isOutputPass===!0){xt("THREE.WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}I.setEffects(A||[])},this.getCurrentViewport=function(A){return A.copy(K)},this.getViewport=function(A){return A.copy(xe)},this.setViewport=function(A,Y,ue,re){A.isVector4?xe.set(A.x,A.y,A.z,A.w):xe.set(A,Y,ue,re),Se.viewport(K.copy(xe).multiplyScalar(We).round())},this.getScissor=function(A){return A.copy(ke)},this.setScissor=function(A,Y,ue,re){A.isVector4?ke.set(A.x,A.y,A.z,A.w):ke.set(A,Y,ue,re),Se.scissor(fe.copy(ke).multiplyScalar(We).round())},this.getScissorTest=function(){return rt},this.setScissorTest=function(A){Se.setScissorTest(rt=A)},this.setOpaqueSort=function(A){ce=A},this.setTransparentSort=function(A){we=A},this.getClearColor=function(A){return A.copy(be.getClearColor())},this.setClearColor=function(){be.setClearColor(...arguments)},this.getClearAlpha=function(){return be.getClearAlpha()},this.setClearAlpha=function(){be.setClearAlpha(...arguments)},this.clear=function(A=!0,Y=!0,ue=!0){let re=0;if(A){let ie=!1;if(W!==null){const He=W.texture.format;ie=_.has(He)}if(ie){const He=W.texture.type,Ze=v.has(He),Be=be.getClearColor(),nt=be.getClearAlpha(),at=Be.r,St=Be.g,Mt=Be.b;Ze?(b[0]=at,b[1]=St,b[2]=Mt,b[3]=nt,G.clearBufferuiv(G.COLOR,0,b)):(L[0]=at,L[1]=St,L[2]=Mt,L[3]=nt,G.clearBufferiv(G.COLOR,0,L))}else re|=G.COLOR_BUFFER_BIT}Y&&(re|=G.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),ue&&(re|=G.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),re!==0&&G.clear(re)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(A){A.setRenderer(this),q=A},this.dispose=function(){n.removeEventListener("webglcontextlost",Me,!1),n.removeEventListener("webglcontextrestored",Ke,!1),n.removeEventListener("webglcontextcreationerror",Qe,!1),be.dispose(),_e.dispose(),Ie.dispose(),C.dispose(),Z.dispose(),Ee.dispose(),Ce.dispose(),ve.dispose(),Re.dispose(),Ue.dispose(),Ue.removeEventListener("sessionstart",Q),Ue.removeEventListener("sessionend",De),Ve.stop()};function Me(A){A.preventDefault(),pm("WebGLRenderer: Context Lost."),O=!0}function Ke(){pm("WebGLRenderer: Context Restored."),O=!1;const A=Lt.autoReset,Y=Ne.enabled,ue=Ne.autoUpdate,re=Ne.needsUpdate,ie=Ne.type;je(),Lt.autoReset=A,Ne.enabled=Y,Ne.autoUpdate=ue,Ne.needsUpdate=re,Ne.type=ie}function Qe(A){Xt("WebGLRenderer: A WebGL context could not be created. Reason: ",A.statusMessage)}function Ft(A){const Y=A.target;Y.removeEventListener("dispose",Ft),Dt(Y)}function Dt(A){vn(A),C.remove(A)}function vn(A){const Y=C.get(A).programs;Y!==void 0&&(Y.forEach(function(ue){Re.releaseProgram(ue)}),A.isShaderMaterial&&Re.releaseShaderCache(A))}this.renderBufferDirect=function(A,Y,ue,re,ie,He){Y===null&&(Y=Ut);const Ze=ie.isMesh&&ie.matrixWorld.determinant()<0,Be=ti(A,Y,ue,re,ie);Se.setMaterial(re,Ze);let nt=ue.index,at=1;if(re.wireframe===!0){if(nt=ye.getWireframeAttribute(ue),nt===void 0)return;at=2}const St=ue.drawRange,Mt=ue.attributes.position;let st=St.start*at,Wt=(St.start+St.count)*at;He!==null&&(st=Math.max(st,He.start*at),Wt=Math.min(Wt,(He.start+He.count)*at)),nt!==null?(st=Math.max(st,0),Wt=Math.min(Wt,nt.count)):Mt!=null&&(st=Math.max(st,0),Wt=Math.min(Wt,Mt.count));const tn=Wt-st;if(tn<0||tn===1/0)return;Ce.setup(ie,re,Be,ue,nt);let ln,Kt=ft;if(nt!==null&&(ln=ge.get(nt),Kt=yt,Kt.setIndex(ln)),ie.isMesh)re.wireframe===!0?(Se.setLineWidth(re.wireframeLinewidth*un()),Kt.setMode(G.LINES)):Kt.setMode(G.TRIANGLES);else if(ie.isLine){let Sn=re.linewidth;Sn===void 0&&(Sn=1),Se.setLineWidth(Sn*un()),ie.isLineSegments?Kt.setMode(G.LINES):ie.isLineLoop?Kt.setMode(G.LINE_LOOP):Kt.setMode(G.LINE_STRIP)}else ie.isPoints?Kt.setMode(G.POINTS):ie.isSprite&&Kt.setMode(G.TRIANGLES);if(ie.isBatchedMesh)if(oe.get("WEBGL_multi_draw"))Kt.renderMultiDraw(ie._multiDrawStarts,ie._multiDrawCounts,ie._multiDrawCount);else{const Sn=ie._multiDrawStarts,qe=ie._multiDrawCounts,Un=ie._multiDrawCount,Pt=nt?ge.get(nt).bytesPerElement:1,ni=C.get(re).currentProgram.getUniforms();for(let ii=0;ii<Un;ii++)ni.setValue(G,"_gl_DrawID",ii),Kt.render(Sn[ii]/Pt,qe[ii])}else if(ie.isInstancedMesh)Kt.renderInstances(st,tn,ie.count);else if(ue.isInstancedBufferGeometry){const Sn=ue._maxInstanceCount!==void 0?ue._maxInstanceCount:1/0,qe=Math.min(ue.instanceCount,Sn);Kt.renderInstances(st,tn,qe)}else Kt.render(st,tn)};function Le(A,Y,ue){A.transparent===!0&&A.side===Ri&&A.forceSinglePass===!1?(A.side=fi,A.needsUpdate=!0,At(A,Y,ue),A.side=es,A.needsUpdate=!0,At(A,Y,ue),A.side=Ri):At(A,Y,ue)}this.compile=function(A,Y,ue=null){ue===null&&(ue=A),D=Ie.get(ue),D.init(Y),w.push(D),ue.traverseVisible(function(ie){ie.isLight&&ie.layers.test(Y.layers)&&(D.pushLight(ie),ie.castShadow&&D.pushShadow(ie))}),A!==ue&&A.traverseVisible(function(ie){ie.isLight&&ie.layers.test(Y.layers)&&(D.pushLight(ie),ie.castShadow&&D.pushShadow(ie))}),D.setupLights();const re=new Set;return A.traverse(function(ie){if(!(ie.isMesh||ie.isPoints||ie.isLine||ie.isSprite))return;const He=ie.material;if(He)if(Array.isArray(He))for(let Ze=0;Ze<He.length;Ze++){const Be=He[Ze];Le(Be,ue,ie),re.add(Be)}else Le(He,ue,ie),re.add(He)}),D=w.pop(),re},this.compileAsync=function(A,Y,ue=null){const re=this.compile(A,Y,ue);return new Promise(ie=>{function He(){if(re.forEach(function(Ze){C.get(Ze).currentProgram.isReady()&&re.delete(Ze)}),re.size===0){ie(A);return}setTimeout(He,10)}oe.get("KHR_parallel_shader_compile")!==null?He():setTimeout(He,10)})};let gt=null;function ae(A){gt&&gt(A)}function Q(){Ve.stop()}function De(){Ve.start()}const Ve=new N0;Ve.setAnimationLoop(ae),typeof self<"u"&&Ve.setContext(self),this.setAnimationLoop=function(A){gt=A,Ue.setAnimationLoop(A),A===null?Ve.stop():Ve.start()},Ue.addEventListener("sessionstart",Q),Ue.addEventListener("sessionend",De),this.render=function(A,Y){if(Y!==void 0&&Y.isCamera!==!0){Xt("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(O===!0)return;q!==null&&q.renderStart(A,Y);const ue=Ue.enabled===!0&&Ue.isPresenting===!0,re=I!==null&&(W===null||ue)&&I.begin(j,W);if(A.matrixWorldAutoUpdate===!0&&A.updateMatrixWorld(),Y.parent===null&&Y.matrixWorldAutoUpdate===!0&&Y.updateMatrixWorld(),Ue.enabled===!0&&Ue.isPresenting===!0&&(I===null||I.isCompositing()===!1)&&(Ue.cameraAutoUpdate===!0&&Ue.updateCamera(Y),Y=Ue.getCamera()),A.isScene===!0&&A.onBeforeRender(j,A,Y,W),D=Ie.get(A,w.length),D.init(Y),D.state.textureUnits=M.getTextureUnits(),w.push(D),Rt.multiplyMatrices(Y.projectionMatrix,Y.matrixWorldInverse),tt.setFromProjectionMatrix(Rt,Qi,Y.reversedDepth),ct=this.localClippingEnabled,Vt=Ge.init(this.clippingPlanes,ct),z=_e.get(A,k.length),z.init(),k.push(z),Ue.enabled===!0&&Ue.isPresenting===!0){const Ze=j.xr.getDepthSensingMesh();Ze!==null&&lt(Ze,Y,-1/0,j.sortObjects)}lt(A,Y,0,j.sortObjects),z.finish(),j.sortObjects===!0&&z.sort(ce,we),Yt=Ue.enabled===!1||Ue.isPresenting===!1||Ue.hasDepthSensing()===!1,Yt&&be.addToRenderList(z,A),this.info.render.frame++,Vt===!0&&Ge.beginShadows();const ie=D.state.shadowsArray;if(Ne.render(ie,A,Y),Vt===!0&&Ge.endShadows(),this.info.autoReset===!0&&this.info.reset(),(re&&I.hasRenderPass())===!1){const Ze=z.opaque,Be=z.transmissive;if(D.setupLights(),Y.isArrayCamera){const nt=Y.cameras;if(Be.length>0)for(let at=0,St=nt.length;at<St;at++){const Mt=nt[at];Tt(Ze,Be,A,Mt)}Yt&&be.render(A);for(let at=0,St=nt.length;at<St;at++){const Mt=nt[at];Et(z,A,Mt,Mt.viewport)}}else Be.length>0&&Tt(Ze,Be,A,Y),Yt&&be.render(A),Et(z,A,Y)}W!==null&&me===0&&(M.updateMultisampleRenderTarget(W),M.updateRenderTargetMipmap(W)),re&&I.end(j),A.isScene===!0&&A.onAfterRender(j,A,Y),Ce.resetDefaultState(),te=-1,$=null,w.pop(),w.length>0?(D=w[w.length-1],M.setTextureUnits(D.state.textureUnits),Vt===!0&&Ge.setGlobalState(j.clippingPlanes,D.state.camera)):D=null,k.pop(),k.length>0?z=k[k.length-1]:z=null,q!==null&&q.renderEnd()};function lt(A,Y,ue,re){if(A.visible===!1)return;if(A.layers.test(Y.layers)){if(A.isGroup)ue=A.renderOrder;else if(A.isLOD)A.autoUpdate===!0&&A.update(Y);else if(A.isLightProbeGrid)D.pushLightProbeGrid(A);else if(A.isLight)D.pushLight(A),A.castShadow&&D.pushShadow(A);else if(A.isSprite){if(!A.frustumCulled||tt.intersectsSprite(A)){re&&ut.setFromMatrixPosition(A.matrixWorld).applyMatrix4(Rt);const Ze=Ee.update(A),Be=A.material;Be.visible&&z.push(A,Ze,Be,ue,ut.z,null)}}else if((A.isMesh||A.isLine||A.isPoints)&&(!A.frustumCulled||tt.intersectsObject(A))){const Ze=Ee.update(A),Be=A.material;if(re&&(A.boundingSphere!==void 0?(A.boundingSphere===null&&A.computeBoundingSphere(),ut.copy(A.boundingSphere.center)):(Ze.boundingSphere===null&&Ze.computeBoundingSphere(),ut.copy(Ze.boundingSphere.center)),ut.applyMatrix4(A.matrixWorld).applyMatrix4(Rt)),Array.isArray(Be)){const nt=Ze.groups;for(let at=0,St=nt.length;at<St;at++){const Mt=nt[at],st=Be[Mt.materialIndex];st&&st.visible&&z.push(A,Ze,st,ue,ut.z,Mt)}}else Be.visible&&z.push(A,Ze,Be,ue,ut.z,null)}}const He=A.children;for(let Ze=0,Be=He.length;Ze<Be;Ze++)lt(He[Ze],Y,ue,re)}function Et(A,Y,ue,re){const{opaque:ie,transmissive:He,transparent:Ze}=A;D.setupLightsView(ue),Vt===!0&&Ge.setGlobalState(j.clippingPlanes,ue),re&&Se.viewport(K.copy(re)),ie.length>0&&Gt(ie,Y,ue),He.length>0&&Gt(He,Y,ue),Ze.length>0&&Gt(Ze,Y,ue),Se.buffers.depth.setTest(!0),Se.buffers.depth.setMask(!0),Se.buffers.color.setMask(!0),Se.setPolygonOffset(!1)}function Tt(A,Y,ue,re){if((ue.isScene===!0?ue.overrideMaterial:null)!==null)return;if(D.state.transmissionRenderTarget[re.id]===void 0){const st=oe.has("EXT_color_buffer_half_float")||oe.has("EXT_color_buffer_float");D.state.transmissionRenderTarget[re.id]=new tr(1,1,{generateMipmaps:!0,type:st?Er:yi,minFilter:ws,samples:Math.max(4,F.samples),stencilBuffer:l,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:zt.workingColorSpace})}const He=D.state.transmissionRenderTarget[re.id],Ze=re.viewport||K;He.setSize(Ze.z*j.transmissionResolutionScale,Ze.w*j.transmissionResolutionScale);const Be=j.getRenderTarget(),nt=j.getActiveCubeFace(),at=j.getActiveMipmapLevel();j.setRenderTarget(He),j.getClearColor(U),ne=j.getClearAlpha(),ne<1&&j.setClearColor(16777215,.5),j.clear(),Yt&&be.render(ue);const St=j.toneMapping;j.toneMapping=er;const Mt=re.viewport;if(re.viewport!==void 0&&(re.viewport=void 0),D.setupLightsView(re),Vt===!0&&Ge.setGlobalState(j.clippingPlanes,re),Gt(A,ue,re),M.updateMultisampleRenderTarget(He),M.updateRenderTargetMipmap(He),oe.has("WEBGL_multisampled_render_to_texture")===!1){let st=!1;for(let Wt=0,tn=Y.length;Wt<tn;Wt++){const ln=Y[Wt],{object:Kt,geometry:Sn,material:qe,group:Un}=ln;if(qe.side===Ri&&Kt.layers.test(re.layers)){const Pt=qe.side;qe.side=fi,qe.needsUpdate=!0,pn(Kt,ue,re,Sn,qe,Un),qe.side=Pt,qe.needsUpdate=!0,st=!0}}st===!0&&(M.updateMultisampleRenderTarget(He),M.updateRenderTargetMipmap(He))}j.setRenderTarget(Be,nt,at),j.setClearColor(U,ne),Mt!==void 0&&(re.viewport=Mt),j.toneMapping=St}function Gt(A,Y,ue){const re=Y.isScene===!0?Y.overrideMaterial:null;for(let ie=0,He=A.length;ie<He;ie++){const Ze=A[ie],{object:Be,geometry:nt,group:at}=Ze;let St=Ze.material;St.allowOverride===!0&&re!==null&&(St=re),Be.layers.test(ue.layers)&&pn(Be,Y,ue,nt,St,at)}}function pn(A,Y,ue,re,ie,He){A.onBeforeRender(j,Y,ue,re,ie,He),A.modelViewMatrix.multiplyMatrices(ue.matrixWorldInverse,A.matrixWorld),A.normalMatrix.getNormalMatrix(A.modelViewMatrix),ie.onBeforeRender(j,Y,ue,re,A,He),ie.transparent===!0&&ie.side===Ri&&ie.forceSinglePass===!1?(ie.side=fi,ie.needsUpdate=!0,j.renderBufferDirect(ue,Y,re,ie,A,He),ie.side=es,ie.needsUpdate=!0,j.renderBufferDirect(ue,Y,re,ie,A,He),ie.side=Ri):j.renderBufferDirect(ue,Y,re,ie,A,He),A.onAfterRender(j,Y,ue,re,ie,He)}function At(A,Y,ue){Y.isScene!==!0&&(Y=Ut);const re=C.get(A),ie=D.state.lights,He=D.state.shadowsArray,Ze=ie.state.version,Be=Re.getParameters(A,ie.state,He,Y,ue,D.state.lightProbeGridArray),nt=Re.getProgramCacheKey(Be);let at=re.programs;re.environment=A.isMeshStandardMaterial||A.isMeshLambertMaterial||A.isMeshPhongMaterial?Y.environment:null,re.fog=Y.fog;const St=A.isMeshStandardMaterial||A.isMeshLambertMaterial&&!A.envMap||A.isMeshPhongMaterial&&!A.envMap;re.envMap=Z.get(A.envMap||re.environment,St),re.envMapRotation=re.environment!==null&&A.envMap===null?Y.environmentRotation:A.envMapRotation,at===void 0&&(A.addEventListener("dispose",Ft),at=new Map,re.programs=at);let Mt=at.get(nt);if(Mt!==void 0){if(re.currentProgram===Mt&&re.lightsStateVersion===Ze)return Rn(A,Be),Mt}else Be.uniforms=Re.getUniforms(A),q!==null&&A.isNodeMaterial&&q.build(A,ue,Be),A.onBeforeCompile(Be,j),Mt=Re.acquireProgram(Be,nt),at.set(nt,Mt),re.uniforms=Be.uniforms;const st=re.uniforms;return(!A.isShaderMaterial&&!A.isRawShaderMaterial||A.clipping===!0)&&(st.clippingPlanes=Ge.uniform),Rn(A,Be),re.needsLights=Ar(A),re.lightsStateVersion=Ze,re.needsLights&&(st.ambientLightColor.value=ie.state.ambient,st.lightProbe.value=ie.state.probe,st.directionalLights.value=ie.state.directional,st.directionalLightShadows.value=ie.state.directionalShadow,st.spotLights.value=ie.state.spot,st.spotLightShadows.value=ie.state.spotShadow,st.rectAreaLights.value=ie.state.rectArea,st.ltc_1.value=ie.state.rectAreaLTC1,st.ltc_2.value=ie.state.rectAreaLTC2,st.pointLights.value=ie.state.point,st.pointLightShadows.value=ie.state.pointShadow,st.hemisphereLights.value=ie.state.hemi,st.directionalShadowMatrix.value=ie.state.directionalShadowMatrix,st.spotLightMatrix.value=ie.state.spotLightMatrix,st.spotLightMap.value=ie.state.spotLightMap,st.pointShadowMatrix.value=ie.state.pointShadowMatrix),re.lightProbeGrid=D.state.lightProbeGridArray.length>0,re.currentProgram=Mt,re.uniformsList=null,Mt}function dn(A){if(A.uniformsList===null){const Y=A.currentProgram.getUniforms();A.uniformsList=Vl.seqWithValue(Y.seq,A.uniforms)}return A.uniformsList}function Rn(A,Y){const ue=C.get(A);ue.outputColorSpace=Y.outputColorSpace,ue.batching=Y.batching,ue.batchingColor=Y.batchingColor,ue.instancing=Y.instancing,ue.instancingColor=Y.instancingColor,ue.instancingMorph=Y.instancingMorph,ue.skinning=Y.skinning,ue.morphTargets=Y.morphTargets,ue.morphNormals=Y.morphNormals,ue.morphColors=Y.morphColors,ue.morphTargetsCount=Y.morphTargetsCount,ue.numClippingPlanes=Y.numClippingPlanes,ue.numIntersection=Y.numClipIntersection,ue.vertexAlphas=Y.vertexAlphas,ue.vertexTangents=Y.vertexTangents,ue.toneMapping=Y.toneMapping}function Zn(A,Y){if(A.length===0)return null;if(A.length===1)return A[0].texture!==null?A[0]:null;P.setFromMatrixPosition(Y.matrixWorld);for(let ue=0,re=A.length;ue<re;ue++){const ie=A[ue];if(ie.texture!==null&&ie.boundingBox.containsPoint(P))return ie}return null}function ti(A,Y,ue,re,ie){Y.isScene!==!0&&(Y=Ut),M.resetTextureUnits();const He=Y.fog,Ze=re.isMeshStandardMaterial||re.isMeshLambertMaterial||re.isMeshPhongMaterial?Y.environment:null,Be=W===null?j.outputColorSpace:W.isXRRenderTarget===!0?W.texture.colorSpace:zt.workingColorSpace,nt=re.isMeshStandardMaterial||re.isMeshLambertMaterial&&!re.envMap||re.isMeshPhongMaterial&&!re.envMap,at=Z.get(re.envMap||Ze,nt),St=re.vertexColors===!0&&!!ue.attributes.color&&ue.attributes.color.itemSize===4,Mt=!!ue.attributes.tangent&&(!!re.normalMap||re.anisotropy>0),st=!!ue.morphAttributes.position,Wt=!!ue.morphAttributes.normal,tn=!!ue.morphAttributes.color;let ln=er;re.toneMapped&&(W===null||W.isXRRenderTarget===!0)&&(ln=j.toneMapping);const Kt=ue.morphAttributes.position||ue.morphAttributes.normal||ue.morphAttributes.color,Sn=Kt!==void 0?Kt.length:0,qe=C.get(re),Un=D.state.lights;if(Vt===!0&&(ct===!0||A!==$)){const Zt=A===$&&re.id===te;Ge.setState(re,A,Zt)}let Pt=!1;re.version===qe.__version?(qe.needsLights&&qe.lightsStateVersion!==Un.state.version||qe.outputColorSpace!==Be||ie.isBatchedMesh&&qe.batching===!1||!ie.isBatchedMesh&&qe.batching===!0||ie.isBatchedMesh&&qe.batchingColor===!0&&ie.colorTexture===null||ie.isBatchedMesh&&qe.batchingColor===!1&&ie.colorTexture!==null||ie.isInstancedMesh&&qe.instancing===!1||!ie.isInstancedMesh&&qe.instancing===!0||ie.isSkinnedMesh&&qe.skinning===!1||!ie.isSkinnedMesh&&qe.skinning===!0||ie.isInstancedMesh&&qe.instancingColor===!0&&ie.instanceColor===null||ie.isInstancedMesh&&qe.instancingColor===!1&&ie.instanceColor!==null||ie.isInstancedMesh&&qe.instancingMorph===!0&&ie.morphTexture===null||ie.isInstancedMesh&&qe.instancingMorph===!1&&ie.morphTexture!==null||qe.envMap!==at||re.fog===!0&&qe.fog!==He||qe.numClippingPlanes!==void 0&&(qe.numClippingPlanes!==Ge.numPlanes||qe.numIntersection!==Ge.numIntersection)||qe.vertexAlphas!==St||qe.vertexTangents!==Mt||qe.morphTargets!==st||qe.morphNormals!==Wt||qe.morphColors!==tn||qe.toneMapping!==ln||qe.morphTargetsCount!==Sn||!!qe.lightProbeGrid!=D.state.lightProbeGridArray.length>0)&&(Pt=!0):(Pt=!0,qe.__version=re.version);let ni=qe.currentProgram;Pt===!0&&(ni=At(re,Y,ie),q&&re.isNodeMaterial&&q.onUpdateProgram(re,ni,qe));let ii=!1,It=!1,or=!1;const $t=ni.getUniforms(),rn=qe.uniforms;if(Se.useProgram(ni.program)&&(ii=!0,It=!0,or=!0),re.id!==te&&(te=re.id,It=!0),qe.needsLights){const Zt=Zn(D.state.lightProbeGridArray,ie);qe.lightProbeGrid!==Zt&&(qe.lightProbeGrid=Zt,It=!0)}if(ii||$!==A){Se.buffers.depth.getReversed()&&A.reversedDepth!==!0&&(A._reversedDepth=!0,A.updateProjectionMatrix()),$t.setValue(G,"projectionMatrix",A.projectionMatrix),$t.setValue(G,"viewMatrix",A.matrixWorldInverse);const Di=$t.map.cameraPosition;Di!==void 0&&Di.setValue(G,kt.setFromMatrixPosition(A.matrixWorld)),F.logarithmicDepthBuffer&&$t.setValue(G,"logDepthBufFC",2/(Math.log(A.far+1)/Math.LN2)),(re.isMeshPhongMaterial||re.isMeshToonMaterial||re.isMeshLambertMaterial||re.isMeshBasicMaterial||re.isMeshStandardMaterial||re.isShaderMaterial)&&$t.setValue(G,"isOrthographic",A.isOrthographicCamera===!0),$!==A&&($=A,It=!0,or=!0)}if(qe.needsLights&&(Un.state.directionalShadowMap.length>0&&$t.setValue(G,"directionalShadowMap",Un.state.directionalShadowMap,M),Un.state.spotShadowMap.length>0&&$t.setValue(G,"spotShadowMap",Un.state.spotShadowMap,M),Un.state.pointShadowMap.length>0&&$t.setValue(G,"pointShadowMap",Un.state.pointShadowMap,M)),ie.isSkinnedMesh){$t.setOptional(G,ie,"bindMatrix"),$t.setOptional(G,ie,"bindMatrixInverse");const Zt=ie.skeleton;Zt&&(Zt.boneTexture===null&&Zt.computeBoneTexture(),$t.setValue(G,"boneTexture",Zt.boneTexture,M))}ie.isBatchedMesh&&($t.setOptional(G,ie,"batchingTexture"),$t.setValue(G,"batchingTexture",ie._matricesTexture,M),$t.setOptional(G,ie,"batchingIdTexture"),$t.setValue(G,"batchingIdTexture",ie._indirectTexture,M),$t.setOptional(G,ie,"batchingColorTexture"),ie._colorsTexture!==null&&$t.setValue(G,"batchingColorTexture",ie._colorsTexture,M));const Li=ue.morphAttributes;if((Li.position!==void 0||Li.normal!==void 0||Li.color!==void 0)&&dt.update(ie,ue,ni),(It||qe.receiveShadow!==ie.receiveShadow)&&(qe.receiveShadow=ie.receiveShadow,$t.setValue(G,"receiveShadow",ie.receiveShadow)),(re.isMeshStandardMaterial||re.isMeshLambertMaterial||re.isMeshPhongMaterial)&&re.envMap===null&&Y.environment!==null&&(rn.envMapIntensity.value=Y.environmentIntensity),rn.dfgLUT!==void 0&&(rn.dfgLUT.value=XM()),It){if($t.setValue(G,"toneMappingExposure",j.toneMappingExposure),qe.needsLights&&Tr(rn,or),He&&re.fog===!0&&pe.refreshFogUniforms(rn,He),pe.refreshMaterialUniforms(rn,re,We,ze,D.state.transmissionRenderTarget[A.id]),qe.needsLights&&qe.lightProbeGrid){const Zt=qe.lightProbeGrid;rn.probesSH.value=Zt.texture,rn.probesMin.value.copy(Zt.boundingBox.min),rn.probesMax.value.copy(Zt.boundingBox.max),rn.probesResolution.value.copy(Zt.resolution)}Vl.upload(G,dn(qe),rn,M)}if(re.isShaderMaterial&&re.uniformsNeedUpdate===!0&&(Vl.upload(G,dn(qe),rn,M),re.uniformsNeedUpdate=!1),re.isSpriteMaterial&&$t.setValue(G,"center",ie.center),$t.setValue(G,"modelViewMatrix",ie.modelViewMatrix),$t.setValue(G,"normalMatrix",ie.normalMatrix),$t.setValue(G,"modelMatrix",ie.matrixWorld),re.uniformsGroups!==void 0){const Zt=re.uniformsGroups;for(let Di=0,Wi=Zt.length;Di<Wi;Di++){const ns=Zt[Di];ve.update(ns,ni),ve.bind(ns,ni)}}return ni}function Tr(A,Y){A.ambientLightColor.needsUpdate=Y,A.lightProbe.needsUpdate=Y,A.directionalLights.needsUpdate=Y,A.directionalLightShadows.needsUpdate=Y,A.pointLights.needsUpdate=Y,A.pointLightShadows.needsUpdate=Y,A.spotLights.needsUpdate=Y,A.spotLightShadows.needsUpdate=Y,A.rectAreaLights.needsUpdate=Y,A.hemisphereLights.needsUpdate=Y}function Ar(A){return A.isMeshLambertMaterial||A.isMeshToonMaterial||A.isMeshPhongMaterial||A.isMeshStandardMaterial||A.isShadowMaterial||A.isShaderMaterial&&A.lights===!0}this.getActiveCubeFace=function(){return le},this.getActiveMipmapLevel=function(){return me},this.getRenderTarget=function(){return W},this.setRenderTargetTextures=function(A,Y,ue){const re=C.get(A);re.__autoAllocateDepthBuffer=A.resolveDepthBuffer===!1,re.__autoAllocateDepthBuffer===!1&&(re.__useRenderToTexture=!1),C.get(A.texture).__webglTexture=Y,C.get(A.depthTexture).__webglTexture=re.__autoAllocateDepthBuffer?void 0:ue,re.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(A,Y){const ue=C.get(A);ue.__webglFramebuffer=Y,ue.__useDefaultFramebuffer=Y===void 0};const en=G.createFramebuffer();this.setRenderTarget=function(A,Y=0,ue=0){W=A,le=Y,me=ue;let re=null,ie=!1,He=!1;if(A){const Be=C.get(A);if(Be.__useDefaultFramebuffer!==void 0){Se.bindFramebuffer(G.FRAMEBUFFER,Be.__webglFramebuffer),K.copy(A.viewport),fe.copy(A.scissor),he=A.scissorTest,Se.viewport(K),Se.scissor(fe),Se.setScissorTest(he),te=-1;return}else if(Be.__webglFramebuffer===void 0)M.setupRenderTarget(A);else if(Be.__hasExternalTextures)M.rebindTextures(A,C.get(A.texture).__webglTexture,C.get(A.depthTexture).__webglTexture);else if(A.depthBuffer){const St=A.depthTexture;if(Be.__boundDepthTexture!==St){if(St!==null&&C.has(St)&&(A.width!==St.image.width||A.height!==St.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");M.setupDepthRenderbuffer(A)}}const nt=A.texture;(nt.isData3DTexture||nt.isDataArrayTexture||nt.isCompressedArrayTexture)&&(He=!0);const at=C.get(A).__webglFramebuffer;A.isWebGLCubeRenderTarget?(Array.isArray(at[Y])?re=at[Y][ue]:re=at[Y],ie=!0):A.samples>0&&M.useMultisampledRTT(A)===!1?re=C.get(A).__webglMultisampledFramebuffer:Array.isArray(at)?re=at[ue]:re=at,K.copy(A.viewport),fe.copy(A.scissor),he=A.scissorTest}else K.copy(xe).multiplyScalar(We).floor(),fe.copy(ke).multiplyScalar(We).floor(),he=rt;if(ue!==0&&(re=en),Se.bindFramebuffer(G.FRAMEBUFFER,re)&&Se.drawBuffers(A,re),Se.viewport(K),Se.scissor(fe),Se.setScissorTest(he),ie){const Be=C.get(A.texture);G.framebufferTexture2D(G.FRAMEBUFFER,G.COLOR_ATTACHMENT0,G.TEXTURE_CUBE_MAP_POSITIVE_X+Y,Be.__webglTexture,ue)}else if(He){const Be=Y;for(let nt=0;nt<A.textures.length;nt++){const at=C.get(A.textures[nt]);G.framebufferTextureLayer(G.FRAMEBUFFER,G.COLOR_ATTACHMENT0+nt,at.__webglTexture,ue,Be)}}else if(A!==null&&ue!==0){const Be=C.get(A.texture);G.framebufferTexture2D(G.FRAMEBUFFER,G.COLOR_ATTACHMENT0,G.TEXTURE_2D,Be.__webglTexture,ue)}te=-1},this.readRenderTargetPixels=function(A,Y,ue,re,ie,He,Ze,Be=0){if(!(A&&A.isWebGLRenderTarget)){Xt("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let nt=C.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&Ze!==void 0&&(nt=nt[Ze]),nt){Se.bindFramebuffer(G.FRAMEBUFFER,nt);try{const at=A.textures[Be],St=at.format,Mt=at.type;if(A.textures.length>1&&G.readBuffer(G.COLOR_ATTACHMENT0+Be),!F.textureFormatReadable(St)){Xt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!F.textureTypeReadable(Mt)){Xt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}Y>=0&&Y<=A.width-re&&ue>=0&&ue<=A.height-ie&&G.readPixels(Y,ue,re,ie,B.convert(St),B.convert(Mt),He)}finally{const at=W!==null?C.get(W).__webglFramebuffer:null;Se.bindFramebuffer(G.FRAMEBUFFER,at)}}},this.readRenderTargetPixelsAsync=async function(A,Y,ue,re,ie,He,Ze,Be=0){if(!(A&&A.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let nt=C.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&Ze!==void 0&&(nt=nt[Ze]),nt)if(Y>=0&&Y<=A.width-re&&ue>=0&&ue<=A.height-ie){Se.bindFramebuffer(G.FRAMEBUFFER,nt);const at=A.textures[Be],St=at.format,Mt=at.type;if(A.textures.length>1&&G.readBuffer(G.COLOR_ATTACHMENT0+Be),!F.textureFormatReadable(St))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!F.textureTypeReadable(Mt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const st=G.createBuffer();G.bindBuffer(G.PIXEL_PACK_BUFFER,st),G.bufferData(G.PIXEL_PACK_BUFFER,He.byteLength,G.STREAM_READ),G.readPixels(Y,ue,re,ie,B.convert(St),B.convert(Mt),0);const Wt=W!==null?C.get(W).__webglFramebuffer:null;Se.bindFramebuffer(G.FRAMEBUFFER,Wt);const tn=G.fenceSync(G.SYNC_GPU_COMMANDS_COMPLETE,0);return G.flush(),await cv(G,tn,4),G.bindBuffer(G.PIXEL_PACK_BUFFER,st),G.getBufferSubData(G.PIXEL_PACK_BUFFER,0,He),G.deleteBuffer(st),G.deleteSync(tn),He}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(A,Y=null,ue=0){const re=Math.pow(2,-ue),ie=Math.floor(A.image.width*re),He=Math.floor(A.image.height*re),Ze=Y!==null?Y.x:0,Be=Y!==null?Y.y:0;M.setTexture2D(A,0),G.copyTexSubImage2D(G.TEXTURE_2D,ue,0,0,Ze,Be,ie,He),Se.unbindTexture()};const sr=G.createFramebuffer(),Pi=G.createFramebuffer();this.copyTextureToTexture=function(A,Y,ue=null,re=null,ie=0,He=0){let Ze,Be,nt,at,St,Mt,st,Wt,tn;const ln=A.isCompressedTexture?A.mipmaps[He]:A.image;if(ue!==null)Ze=ue.max.x-ue.min.x,Be=ue.max.y-ue.min.y,nt=ue.isBox3?ue.max.z-ue.min.z:1,at=ue.min.x,St=ue.min.y,Mt=ue.isBox3?ue.min.z:0;else{const rn=Math.pow(2,-ie);Ze=Math.floor(ln.width*rn),Be=Math.floor(ln.height*rn),A.isDataArrayTexture?nt=ln.depth:A.isData3DTexture?nt=Math.floor(ln.depth*rn):nt=1,at=0,St=0,Mt=0}re!==null?(st=re.x,Wt=re.y,tn=re.z):(st=0,Wt=0,tn=0);const Kt=B.convert(Y.format),Sn=B.convert(Y.type);let qe;Y.isData3DTexture?(M.setTexture3D(Y,0),qe=G.TEXTURE_3D):Y.isDataArrayTexture||Y.isCompressedArrayTexture?(M.setTexture2DArray(Y,0),qe=G.TEXTURE_2D_ARRAY):(M.setTexture2D(Y,0),qe=G.TEXTURE_2D),Se.activeTexture(G.TEXTURE0),Se.pixelStorei(G.UNPACK_FLIP_Y_WEBGL,Y.flipY),Se.pixelStorei(G.UNPACK_PREMULTIPLY_ALPHA_WEBGL,Y.premultiplyAlpha),Se.pixelStorei(G.UNPACK_ALIGNMENT,Y.unpackAlignment);const Un=Se.getParameter(G.UNPACK_ROW_LENGTH),Pt=Se.getParameter(G.UNPACK_IMAGE_HEIGHT),ni=Se.getParameter(G.UNPACK_SKIP_PIXELS),ii=Se.getParameter(G.UNPACK_SKIP_ROWS),It=Se.getParameter(G.UNPACK_SKIP_IMAGES);Se.pixelStorei(G.UNPACK_ROW_LENGTH,ln.width),Se.pixelStorei(G.UNPACK_IMAGE_HEIGHT,ln.height),Se.pixelStorei(G.UNPACK_SKIP_PIXELS,at),Se.pixelStorei(G.UNPACK_SKIP_ROWS,St),Se.pixelStorei(G.UNPACK_SKIP_IMAGES,Mt);const or=A.isDataArrayTexture||A.isData3DTexture,$t=Y.isDataArrayTexture||Y.isData3DTexture;if(A.isDepthTexture){const rn=C.get(A),Li=C.get(Y),Zt=C.get(rn.__renderTarget),Di=C.get(Li.__renderTarget);Se.bindFramebuffer(G.READ_FRAMEBUFFER,Zt.__webglFramebuffer),Se.bindFramebuffer(G.DRAW_FRAMEBUFFER,Di.__webglFramebuffer);for(let Wi=0;Wi<nt;Wi++)or&&(G.framebufferTextureLayer(G.READ_FRAMEBUFFER,G.COLOR_ATTACHMENT0,C.get(A).__webglTexture,ie,Mt+Wi),G.framebufferTextureLayer(G.DRAW_FRAMEBUFFER,G.COLOR_ATTACHMENT0,C.get(Y).__webglTexture,He,tn+Wi)),G.blitFramebuffer(at,St,Ze,Be,st,Wt,Ze,Be,G.DEPTH_BUFFER_BIT,G.NEAREST);Se.bindFramebuffer(G.READ_FRAMEBUFFER,null),Se.bindFramebuffer(G.DRAW_FRAMEBUFFER,null)}else if(ie!==0||A.isRenderTargetTexture||C.has(A)){const rn=C.get(A),Li=C.get(Y);Se.bindFramebuffer(G.READ_FRAMEBUFFER,sr),Se.bindFramebuffer(G.DRAW_FRAMEBUFFER,Pi);for(let Zt=0;Zt<nt;Zt++)or?G.framebufferTextureLayer(G.READ_FRAMEBUFFER,G.COLOR_ATTACHMENT0,rn.__webglTexture,ie,Mt+Zt):G.framebufferTexture2D(G.READ_FRAMEBUFFER,G.COLOR_ATTACHMENT0,G.TEXTURE_2D,rn.__webglTexture,ie),$t?G.framebufferTextureLayer(G.DRAW_FRAMEBUFFER,G.COLOR_ATTACHMENT0,Li.__webglTexture,He,tn+Zt):G.framebufferTexture2D(G.DRAW_FRAMEBUFFER,G.COLOR_ATTACHMENT0,G.TEXTURE_2D,Li.__webglTexture,He),ie!==0?G.blitFramebuffer(at,St,Ze,Be,st,Wt,Ze,Be,G.COLOR_BUFFER_BIT,G.NEAREST):$t?G.copyTexSubImage3D(qe,He,st,Wt,tn+Zt,at,St,Ze,Be):G.copyTexSubImage2D(qe,He,st,Wt,at,St,Ze,Be);Se.bindFramebuffer(G.READ_FRAMEBUFFER,null),Se.bindFramebuffer(G.DRAW_FRAMEBUFFER,null)}else $t?A.isDataTexture||A.isData3DTexture?G.texSubImage3D(qe,He,st,Wt,tn,Ze,Be,nt,Kt,Sn,ln.data):Y.isCompressedArrayTexture?G.compressedTexSubImage3D(qe,He,st,Wt,tn,Ze,Be,nt,Kt,ln.data):G.texSubImage3D(qe,He,st,Wt,tn,Ze,Be,nt,Kt,Sn,ln):A.isDataTexture?G.texSubImage2D(G.TEXTURE_2D,He,st,Wt,Ze,Be,Kt,Sn,ln.data):A.isCompressedTexture?G.compressedTexSubImage2D(G.TEXTURE_2D,He,st,Wt,ln.width,ln.height,Kt,ln.data):G.texSubImage2D(G.TEXTURE_2D,He,st,Wt,Ze,Be,Kt,Sn,ln);Se.pixelStorei(G.UNPACK_ROW_LENGTH,Un),Se.pixelStorei(G.UNPACK_IMAGE_HEIGHT,Pt),Se.pixelStorei(G.UNPACK_SKIP_PIXELS,ni),Se.pixelStorei(G.UNPACK_SKIP_ROWS,ii),Se.pixelStorei(G.UNPACK_SKIP_IMAGES,It),He===0&&Y.generateMipmaps&&G.generateMipmap(qe),Se.unbindTexture()},this.initRenderTarget=function(A){C.get(A).__webglFramebuffer===void 0&&M.setupRenderTarget(A)},this.initTexture=function(A){A.isCubeTexture?M.setTextureCube(A,0):A.isData3DTexture?M.setTexture3D(A,0):A.isDataArrayTexture||A.isCompressedArrayTexture?M.setTexture2DArray(A,0):M.setTexture2D(A,0),Se.unbindTexture()},this.resetState=function(){le=0,me=0,W=null,Se.reset(),Ce.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Qi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const n=this.getContext();n.drawingBufferColorSpace=zt._getDrawingBufferColorSpace(e),n.unpackColorSpace=zt._getUnpackColorSpace()}}const Qt=[{id:"seating",label:"Adaptive Seating Clusters",icon:"⬡",accent:"#C4905A",hex:12882010,pos:[-3.8,0,2.8],camPos:[-1.2,2.4,7.2],lookAt:[-3.8,1.1,2.8],desc:"Reconfigurable modular seating in semi-private pods. Ergonomic lounge chairs with movable acoustic partitions let patients choose between solitude and social warmth.",features:["Modular sofa + ottoman clusters","Acoustic privacy wing panels","Wireless charging tabletops","Wheelchair-accessible clearances"],metric:"↓ 35% reported isolation"},{id:"biophilic",label:"Biophilic Micro-Garden",icon:"❧",accent:"#4A8A58",hex:4885080,pos:[3.8,0,2.8],camPos:[1.2,2.4,7.2],lookAt:[3.8,1.4,2.8],desc:"A curated living moss wall, specimen trees, and a recirculating water basin bring measurable stress relief. Natural-spectrum light from clerestory windows completes the biophilic immersion.",features:["4 m × 2.8 m living moss wall","Recirculating water basin","Natural-spectrum clerestory","Terracotta planter clusters"],metric:"↓ 28% cortisol stress markers"},{id:"digital",label:"Digital Wellness Hub",icon:"◈",accent:"#5572C4",hex:5599940,pos:[3.8,0,-2.8],camPos:[1.2,2.4,-6.2],lookAt:[3.8,1.4,-2.8],desc:"Touchless kiosks in organic alcoves deliver real-time queue updates, guided breathing, and ambient nature loops — designed to inform without overwhelming.",features:["Real-time queue status","Guided breathing animations","Nature ambient visuals","Motion-sensing interaction"],metric:"↓ 20% perceived wait time"},{id:"calm",label:"Calm Engagement Zone",icon:"◎",accent:"#8A5898",hex:9066648,pos:[-3.8,0,-2.8],camPos:[-1.2,2.4,-6.2],lookAt:[-3.8,1.1,-2.8],desc:"A low-stimulation alcove for reading, art, and guided audio meditation. Full acoustic dampening and warm amber light create a personal refuge within the waiting space.",features:["Curated book corner","Art & craft station","Guided meditation audio","Full acoustic wall panels"],metric:"↓ 32% anxiety self-reports"}],YM=[{pos:[0,1.7,5.8],lookAt:[0,1.2,0],dur:2.5,zoneIdx:-1},{pos:[-1.2,2,5.5],lookAt:[-3.8,1.1,2.8],dur:2.5,zoneIdx:0},{pos:[-1.8,1.7,3.8],lookAt:[-3.8,1,2.8],dur:4,zoneIdx:0},{pos:[1,1.8,4.2],lookAt:[3.8,1.4,2.8],dur:2.5,zoneIdx:1},{pos:[2,1.7,3.4],lookAt:[4.5,1.2,3],dur:4,zoneIdx:1},{pos:[1,1.8,-.5],lookAt:[3.8,1.4,-2.8],dur:2.5,zoneIdx:2},{pos:[2,1.7,-2.2],lookAt:[3.8,1.5,-3.2],dur:4,zoneIdx:2},{pos:[-1,1.8,-1],lookAt:[-3.8,1.1,-2.8],dur:2.5,zoneIdx:3},{pos:[-2,1.7,-2.5],lookAt:[-3.8,1,-2.8],dur:4,zoneIdx:3},{pos:[0,4.5,8],lookAt:[0,1,0],dur:3,zoneIdx:-1}],wn=[{title:"The Problem",text:"Hospital waiting rooms cause stress, anxiety, and discomfort. Patients often spend hours in sterile, noisy spaces with harsh fluorescent lighting — worsening their health outcomes before treatment even begins.",sub:"This prototype reimagines the waiting experience using evidence-based design.",cam:null,highlight:null},{title:"Navigate the Space",text:"Drag your mouse (or swipe on mobile / touchpad) to orbit the 3D model around. Try it now!",sub:"You can rotate the view in any direction to explore the architecture.",cam:null,highlight:"viewport",requiredAction:"orbit"},{title:"Zoom In & Out",text:"Scroll your mouse wheel (or pinch on mobile / two-finger swipe on touchpad) to zoom closer or further away from the model. Try it now!",sub:"Try scrolling now to see the space up close.",cam:null,highlight:"viewport",requiredAction:"zoom"},{title:"Zone Navigation",text:"Click any of these zone buttons at the top to fly the camera into that area and read about its design interventions.",sub:"Each zone addresses a specific aspect of patient wellbeing.",cam:null,highlight:"zones",requiredAction:"click_zone"},{title:"⬡ Adaptive Seating Clusters",text:"Reconfigurable modular seating in semi-private pods. Ergonomic lounge chairs with acoustic partitions let patients choose between solitude and social warmth.",sub:"↓ 35% reported isolation",cam:{pos:[-1.2,2.4,7.2],lookAt:[-3.8,1.1,2.8]},highlight:null},{title:"❧ Biophilic Micro-Garden",text:"A living moss wall, specimen trees, and a recirculating water basin bring measurable stress relief. Natural-spectrum light completes the biophilic immersion.",sub:"↓ 28% cortisol stress markers",cam:{pos:[1.2,2.4,7.2],lookAt:[3.8,1.4,2.8]},highlight:null},{title:"◈ Digital Wellness Hub",text:"Touchless kiosks deliver real-time queue updates, guided breathing exercises, and ambient nature loops — designed to inform without overwhelming.",sub:"↓ 20% perceived wait time",cam:{pos:[1.2,2.4,-6.2],lookAt:[3.8,1.4,-2.8]},highlight:null},{title:"◎ Calm Engagement Zone",text:"A low-stimulation alcove with a curated book corner, art & craft station, and guided meditation audio. Full acoustic dampening creates a personal refuge.",sub:"↓ 32% anxiety self-reports",cam:{pos:[-1.2,2.4,-6.2],lookAt:[-3.8,1.1,-2.8]},highlight:null},{title:"Compare: Standard vs Healing",text:"This toggle switches between a typical sterile hospital lighting and the proposed healing environment, so you can visually compare the difference.",sub:"Click it anytime to see what conventional waiting rooms look like.",cam:null,highlight:"comparison",requiredAction:"toggle_comparison"},{title:"Advanced Tools",text:"Open the Tools panel to access: Heatmap overlay, Patient Flow simulation, Guided Tour, Split View comparison, and Material Inspector.",sub:"Each tool reveals a different layer of the design's evidence base.",cam:null,highlight:"tools",requiredAction:"open_tools"},{title:"You're Ready! 🎉",text:"You now know everything you need to explore the Integrated Modular Healing Space. Click around, zoom in, try the tools — make it your own.",sub:"Press H anytime for keyboard shortcuts.",cam:null,highlight:null}];function pd(r,e){var n,s;!r||!r.ambient||(e?(r.ambient.color.setHex(15398143),r.ambient.intensity=.95,r.sun.color.setHex(15791871),r.sun.intensity=.6,r.fillLight.intensity=.15,(n=r.accentLights)==null||n.forEach(a=>{a.intensity=0})):(r.ambient.color.setHex(16774628),r.ambient.intensity=.45,r.sun.color.setHex(16772560),r.sun.intensity=1.05,r.fillLight.intensity=.35,(s=r.accentLights)==null||s.forEach((a,l)=>{a.color.setHex(Qt[l].hex),a.intensity=1.4})))}const mt=(r,e=.78,n=0,s={})=>new Ms({color:r,roughness:e,metalness:n,...s});function an(r,e,n){return new Rs(r,e,n)}function jn(r,e,n,s=12){return new Nn(r,e,n,s)}function ys(r,e=10,n=8){return new Af(r,e,n)}function qM(r,e){const n=new Yv(16774628,.45);r.add(n);const s=new Nm(16772560,1.05);s.position.set(9,14,10),s.castShadow=!0,s.shadow.mapSize.set(2048,2048),s.shadow.camera.near=.5,s.shadow.camera.far=50,s.shadow.camera.left=-14,s.shadow.camera.right=14,s.shadow.camera.top=14,s.shadow.camera.bottom=-14,s.shadow.bias=-.001,r.add(s);const a=new Nm(13164799,.35);a.position.set(14,6,0),r.add(a);const l=[];Qt.forEach(ae=>{const Q=new ra(ae.hex,1.4,6.5,1.8);Q.position.set(ae.pos[0],2.6,ae.pos[2]),r.add(Q),l.push(Q)}),e.ambient=n,e.sun=s,e.fillLight=a,e.accentLights=l,[[-3.8,3.16,2.8],[3.8,3.16,2.8],[3.8,3.16,-2.8],[-3.8,3.16,-2.8]].forEach(([ae,Q,De])=>{const Ve=new Fe(new kn(2.2,.3),new Ms({color:16776693,emissive:16776693,emissiveIntensity:1.2,roughness:1}));Ve.rotation.x=Math.PI/2,Ve.position.set(ae,Q,De),r.add(Ve)});const u=[];[[-3.8,2.85,2.8],[3.8,2.85,2.8],[3.8,2.85,-2.8],[-3.8,2.85,-2.8]].forEach(([ae,Q,De])=>{const Ve=new Fe(jn(.012,.012,.5,4),mt(5914672,.9));Ve.position.set(ae,Q+.25,De),r.add(Ve);const lt=new Fe(new Tf(.2,.28,12,1,!0),mt(13936704,.5,.1,{side:Ri}));lt.position.set(ae,Q,De),r.add(lt);const Et=new Fe(ys(.065,8,6),new Ms({color:16772744,emissive:16763972,emissiveIntensity:2.2}));Et.position.set(ae,Q-.08,De),r.add(Et);const Tt=new ra(16755268,1.2,4.5,2);Tt.position.set(ae,Q-.2,De),r.add(Tt),u.push({pl:Tt,shade:lt,phase:Math.random()*Math.PI*2})}),e.pendants=u;const f=mt(13150330,.82,0),p=new Fe(new kn(16,13),f);p.rotation.x=-Math.PI/2,p.receiveShadow=!0,p.userData.material={name:"Travertine Honed Tile",dim:"600×600×20 mm",specs:[["Finish","Honed matte"],["VOC","<0.3 mg/m³"],["Slip rating","R10"],["Thermal mass","2.3 kJ/m²K"]],note:"Locally quarried. Thermal-mass helps passive climate."},r.add(p);const m=[];Qt.forEach(ae=>{const Q=new Fe(new $l(2,32),new ql({color:ae.hex,transparent:!0,opacity:0,depthWrite:!1,side:Ri}));Q.rotation.x=-Math.PI/2,Q.position.set(ae.pos[0],.012,ae.pos[2]),r.add(Q),m.push(Q)}),e.heatmapDiscs=m;for(let ae=-3;ae<=3;ae++){const Q=new Fe(new kn(16,.02),mt(9071178,.9));Q.rotation.x=-Math.PI/2,Q.position.set(0,.001,ae*1.6),r.add(Q);const De=new Fe(new kn(.02,13),mt(9071178,.9));De.rotation.x=-Math.PI/2,De.position.set(ae*2.2,.001,0),r.add(De)}const x=new Fe(new kn(16,13),mt(16117992,.95));x.rotation.x=Math.PI/2,x.position.y=3.2,r.add(x),[[-3.8,0],[0,0],[3.8,0]].forEach(([ae])=>{const Q=new Fe(an(.18,.22,12.7),mt(6964264,.75));Q.position.set(ae,3.09,0),Q.userData.material={name:"Solid White Oak Beam",dim:"180×220×13000 mm",specs:[["Grade","FSC-certified European oak"],["Finish","Natural hard-wax oil"],["CO₂ storage","≈ 780 kg/m³"],["Fire class","D-s2,d0"]],note:"Carbon-negative structural expression."},r.add(Q)});const y=mt(15392202,.92),g=mt(14865856,.92),S=new Fe(new kn(16,3.2),y);S.position.set(0,1.6,-6.5),r.add(S);const T=new Fe(new kn(13,3.2),g);T.rotation.y=Math.PI/2,T.position.set(-8,1.6,0),r.add(T);const R=new Fe(new kn(6.5,3.2),g);R.rotation.y=-Math.PI/2,R.position.set(8,1.6,3.25),r.add(R);const _=new Fe(new kn(6.5,.2),g);_.rotation.y=-Math.PI/2,_.position.set(8,3.1,-3.25),r.add(_);const v=document.createElement("canvas");v.width=512,v.height=512;const b=v.getContext("2d"),L=b.createLinearGradient(0,0,0,512);L.addColorStop(0,"#B8DEFF"),L.addColorStop(.55,"#E8D8B8"),L.addColorStop(.62,"#9CB48C"),L.addColorStop(1,"#7A9878"),b.fillStyle=L,b.fillRect(0,0,512,512),b.fillStyle="rgba(90,120,90,0.55)";for(let ae=0;ae<12;ae++){const Q=ae/11*512+Math.sin(ae)*20,De=30+ae%3*12;b.beginPath(),b.arc(Q,320+ae%2*10,De,0,Math.PI*2),b.fill()}const P=new Uv(v);P.colorSpace=di;const z=new ql({map:P});e.skyMat=z;const D=new Fe(new kn(10,6),z);D.rotation.y=-Math.PI/2,D.position.set(10.5,1.8,-3.25),r.add(D);const k=new Vv({color:16777215,roughness:.05,metalness:0,transparent:!0,opacity:.12,transmission:.8,ior:1.45,thickness:.02}),w=new Fe(new kn(6.5,3),k);w.rotation.y=-Math.PI/2,w.position.set(7.99,1.5,-3.25),r.add(w);const I=mt(11040840,.55,.1),j=new Fe(an(.32,.18,6.5),I);j.position.set(7.9,.09,-3.25),r.add(j);const O=new Fe(an(.22,.16,6.5),I);O.position.set(7.93,3,-3.25),r.add(O),[0,-6.5].forEach(ae=>{const Q=new Fe(an(.12,3,.14),I);Q.position.set(7.93,1.5,ae),r.add(Q)}),[-1.625,-3.25,-4.875].forEach(ae=>{const Q=new Fe(an(.06,2.95,.08),I);Q.position.set(7.93,1.5,ae),r.add(Q)});const q=new Fe(an(.06,.05,6.4),I);q.position.set(7.93,2.15,-3.25),r.add(q);const le=new Fe(new kn(4.2,.35),k);le.rotation.y=-Math.PI/2,le.position.set(7.99,2.95,2.2),r.add(le);const me=new Fe(new kn(5,.6),z);me.rotation.y=-Math.PI/2,me.position.set(10.5,2.95,2.2),r.add(me);const W=mt(11040840,.55,.1);[-1.4,0,1.4].forEach(ae=>{const Q=new Fe(an(.03,.4,.05),W);Q.position.set(7.92,2.95,2.2+ae),r.add(Q)});const te=new Fe(an(.14,1.05,9.5),mt(14207144,.88));te.position.set(0,.525,.5),r.add(te);const $=new Fe(an(.22,.06,9.5),mt(12097632,.5,.15));$.position.set(0,1.08,.5),r.add($);const K=mt(10518624,.72,.05),fe=new Fe(an(4,1,.8),K);fe.position.set(0,.5,-6.1),fe.castShadow=!0,r.add(fe);const he=new Fe(an(4,1,.05),mt(13150320,.55,.2));he.position.set(0,.5,-5.7),r.add(he);const U=new Fe(an(4.2,.06,1),mt(8015920,.45,.3));U.position.set(0,1.03,-6.05),r.add(U);const ne=new Fe(an(.5,.32,.03),new Ms({color:1714746,roughness:.4,metalness:.7,emissive:2771562,emissiveIntensity:.4}));ne.position.set(-.6,1.36,-5.92),r.add(ne);const Xe=mt(13150320,.6,.1);[[0,.06,-6.49,16,.12,.1,0],[-7.99,.06,0,.1,.12,13,0],[7.99,.06,0,.1,.12,13,0]].forEach(([ae,Q,De,Ve,lt,Et])=>{const Tt=new Fe(an(Ve,lt,Et),Xe);Tt.position.set(ae,Q,De),r.add(Tt)});const ze=[];ze.push({mesh:p,zoneId:null}),r.traverse(ae=>{var Q,De,Ve;ae.isMesh&&((Ve=(De=(Q=ae.userData)==null?void 0:Q.material)==null?void 0:De.name)!=null&&Ve.includes("Oak Beam"))&&ze.push({mesh:ae,zoneId:null})});const We=mt(12882032,.85),ce=mt(10514512,.88),we=mt(5910552,.6,.3),xe=mt(13936768,.82),ke=new Yn;ke.position.set(-3.8,0,3.4),ke.rotation.y=Math.PI;const rt=new Kl(2,.45,16,48,Math.PI*.65),tt=new Fe(rt,We);tt.rotation.x=Math.PI/2,tt.rotation.z=-Math.PI*.325,tt.position.y=.4,tt.castShadow=!0,ke.add(tt);const Vt=new Kl(2.1,.3,16,48,Math.PI*.7),ct=new Fe(Vt,ce);ct.rotation.x=Math.PI/2,ct.rotation.z=-Math.PI*.35,ct.position.y=.75,ct.castShadow=!0,ke.add(ct),r.add(ke),ke.children.forEach(ae=>{ae.isMesh&&ze.push({mesh:ae,zoneId:"seating"})}),[[-5.2,1.8,Math.PI/3],[-2.4,1.8,-Math.PI/3]].forEach(([ae,Q,De])=>{const Ve=new Yn,lt=new Fe(jn(.25,.3,.1,16),we);lt.position.y=.05,Ve.add(lt);const Et=new Fe(jn(.04,.04,.3,8),we);Et.position.y=.2,Ve.add(Et);const Tt=new Fe(ys(.45,16,12),We);Tt.rotation.x=Math.PI,Tt.position.set(0,.7,-.1),Tt.castShadow=!0,Ve.add(Tt);const Gt=new Fe(ys(.4,16,12),xe);Gt.rotation.x=Math.PI-.2,Gt.position.set(0,.65,.05),Ve.add(Gt),Ve.position.set(ae,0,Q),Ve.rotation.y=De,r.add(Ve),Ve.children.forEach(pn=>{pn.isMesh&&ze.push({mesh:pn,zoneId:"seating"})})});const Rt=mt(2763306,.8,.4),kt=mt(8015920,.5,.2),ut=new Fe(jn(.6,.55,.15,24),Rt);ut.scale.set(1,1,1.4),ut.rotation.y=.4,ut.position.set(-4.2,.35,2.3),ut.castShadow=!0,r.add(ut),ze.push({mesh:ut,zoneId:"seating"});const Ut=new Fe(jn(.45,.4,.1,24),kt);Ut.scale.set(1,1,1.2),Ut.rotation.y=-.2,Ut.position.set(-3.2,.45,2.5),Ut.castShadow=!0,r.add(Ut),ze.push({mesh:Ut,zoneId:"seating"});const Yt=new Fe(jn(.09,.07,.18,14),mt(15260868,.7));Yt.position.set(-3.2,.59,2.5),Yt.castShadow=!0,r.add(Yt);const un=new Fe(jn(.006,.006,.34,4),mt(4876858,.7));un.position.set(-3.2,.82,2.5),r.add(un);const G=new Nn(2.8,2.8,1.6,32,1,!1,-Math.PI*.3,Math.PI*.6),Bt=new Fe(G,mt(14733496,.92,0,{side:Ri}));Bt.position.set(-3.8,.8,3.8),Bt.castShadow=!0,Bt.userData.material={name:"Curved Wool-Felt Acoustic Screen",dim:"R2800×1600×40 mm",specs:[["Composition","100% recycled PET + wool felt"],["Acoustic NRC","0.90"],["Fire class","B-s1,d0"]],note:"Wraps seating for auditory privacy."},r.add(Bt),ze.push({mesh:Bt,zoneId:"seating"});const oe=[];for(let ae=0;ae<5;ae++)for(let Q=0;Q<5;Q++){const De=(ae+Q)%3,Ve=[3041850,4033098,4890714][De],lt=new Fe(an(.52,.52,.08),mt(Ve,.95));lt.position.set(7.96,.38+ae*.55,1+Q*.55),lt.rotation.y=-Math.PI/2,lt.castShadow=!0,lt.userData.material={name:"Preserved Reindeer Moss Panel",dim:"500×500×40 mm",specs:[["Species","Cladonia rangiferina (mixed tones)"],["Maintenance","Zero water · Zero light"],["Acoustic NRC","0.75"],["Air particulate trap","Light PM2.5 capture"]],note:"Biophilic anchor of the space."},r.add(lt),ze.push({mesh:lt,zoneId:"biophilic"})}const F=mt(9066544,.7),Se=new Yn;Se.position.set(6.5,0,2.5);const Lt=new Fe(new Nn(2.5,2.5,.4,32,1,!1,Math.PI,Math.PI),F);Lt.position.y=.2,Lt.castShadow=!0,Se.add(Lt);const C=new Fe(new Nn(1.8,1.8,.3,32,1,!1,Math.PI,Math.PI),F);C.position.set(.5,.55,-.2),C.castShadow=!0,Se.add(C);const M=mt(2759696,.95,.1),Z=new Fe(new Nn(2.4,2.4,.38,32,1,!1,Math.PI,Math.PI),M);Z.position.y=.2,Se.add(Z);const ge=new Fe(new Nn(1.7,1.7,.28,32,1,!1,Math.PI,Math.PI),M);ge.position.set(.5,.55,-.2),Se.add(ge);const ye=new Fe(new Nn(1.2,1.2,.45,32,1,!1,0,Math.PI*2),F);ye.position.set(-.8,.22,.8),ye.castShadow=!0,Se.add(ye);const Ee=new Fe(new $l(1.15,32),new Ms({color:8310752,roughness:.05,metalness:.1,transparent:!0,opacity:.82}));Ee.rotation.x=-Math.PI/2,Ee.position.set(-.8,.44,.8),Se.add(Ee),e.water=Ee,ze.push({mesh:Ee,zoneId:"biophilic"});const Re=mt(12882032,.6),pe=new Fe(new Nn(2.8,2.8,.08,32,1,!1,Math.PI*1.1,Math.PI*.6),Re);pe.position.y=.45,pe.castShadow=!0,Se.add(pe),[[-1,.4,-.5,1.5],[1,.4,.5,1.2],[.5,.7,-.8,1]].forEach(([ae,Q,De,Ve],lt)=>{const Et=new Fe(jn(.04,.06,.8*Ve,7),mt(4860942,.9));Et.position.set(ae,Q+.4*Ve,De),Se.add(Et);const Tt=new Fe(ys(.4*Ve,10,8),mt(3043392,.85));Tt.position.set(ae,Q+.9*Ve,De),Tt.castShadow=!0,Se.add(Tt),ze.push({mesh:Tt,zoneId:"biophilic"});const Gt=new Fe(ys(.25*Ve,8,6),mt(4033104,.85));Gt.position.set(ae+.2*Ve,Q+.6*Ve,De-.2*Ve),Se.add(Gt),oe.push({mesh:Tt,baseY:Tt.position.y,phase:lt*1.2}),oe.push({mesh:Gt,baseY:Gt.position.y,phase:lt*1.2+.5})}),r.add(Se),Se.children.forEach(ae=>{ae.isMesh&&ze.push({mesh:ae,zoneId:"biophilic"})});for(let ae=0;ae<20;ae++){const Q=ae/20*Math.PI+Math.PI,De=new Fe(new Nn(.12,.12,.06,8),mt(10522752,.95));De.position.set(6.5+Math.cos(Q)*3.1,.03,2.5+Math.sin(Q)*3.1),De.rotation.y=Math.random(),De.scale.set(1,1,1.5),r.add(De)}const _e=[];[[2.2,-2,Math.PI*.15],[3.8,-3.6,0],[5.4,-2,-Math.PI*.15]].forEach(([ae,Q,De],Ve)=>{const lt=new Yn;lt.position.set(ae,0,Q),lt.rotation.y=De;const Et=mt(12882032,.8),Tt=new Nn(.8,.8,2.2,32,1,!1,Math.PI*.2,Math.PI*1.6),Gt=new Fe(Tt,Et);Gt.position.y=1.1,Gt.castShadow=!0,lt.add(Gt);const pn=mt(2763306,.9),At=new Nn(.75,.75,2.15,32,1,!1,Math.PI*.22,Math.PI*1.56),dn=new Fe(At,pn);dn.position.y=1.1,lt.add(dn);const Rn=new Ms({color:661544,roughness:.05,metalness:.5,emissive:Ve===1?1717352:1714264,emissiveIntensity:.7}),Zn=new Nn(.72,.72,1,32,1,!1,Math.PI*.6,Math.PI*.8),ti=new Fe(Zn,Rn);ti.position.y=1.4,lt.add(ti),_e.push({mesh:ti,mat:Rn,phase:Ve*1.4});const Tr=mt(5912608,.8),Ar=new Nn(.75,.75,.1,32,1,!1,Math.PI*.3,Math.PI*1.4),en=new Fe(Ar,Tr);en.position.y=.45,lt.add(en);const sr=new ra(4219084,.8,2,2);sr.position.set(0,1.4,-.2),lt.add(sr),_e.push({pl:sr,phase:Ve*1.4,isPl:!0}),r.add(lt),lt.children.forEach(Pi=>{Pi.isMesh&&ze.push({mesh:Pi,zoneId:"digital"})})}),e.screens=_e;const Ie=new Yn;Ie.position.set(-3.5,0,-3.5);const Ge=mt(9068600,.7),Ne=new Rs(4.5,.15,4.5),be=new Fe(Ne,Ge);be.position.y=.075,be.castShadow=!0,be.receiveShadow=!0,Ie.add(be);const dt=new ra(16765056,.6,6,2);dt.position.set(0,.05,0),Ie.add(dt);const ft=mt(4860952,.8,.1);[-1.2,0,1.2].forEach((ae,Q)=>{const De=new Yn;De.position.set(ae,.15,-2.1);const Ve=new Fe(an(1,2.4,.02),ft);Ve.position.set(0,1.2,-.15),De.add(Ve),[.4,.8,1.2,1.6].forEach(pn=>{const At=new Fe(an(.96,.04,.28),ft);At.position.set(0,pn,0),De.add(At)});const lt=new Nn(.5,.5,.32,32,1,!1,0,Math.PI),Et=new Fe(lt,ft);Et.rotation.y=Math.PI/2,Et.position.set(0,2,0),De.add(Et);const Tt=new ra(16765072,.4,2,2);Tt.position.set(0,2,-.1),De.add(Tt);const Gt=[12603472,5271744,5283936,12623920,8409232,12611648];[.4,.8,1.2,1.6].forEach(pn=>{if(Math.random()>.3){let At=-.3+Math.random()*.2;for(let dn=0;dn<3+Math.random()*5;dn++){const Rn=.03+Math.random()*.03,Zn=.25+Math.random()*.05,ti=new Fe(an(Rn,Zn,.2),mt(Gt[Math.floor(Math.random()*Gt.length)],.8));ti.position.set(At,pn+.02+Zn/2,0),De.add(ti),At+=Rn+.01}}}),Ie.add(De)});const yt=mt(2763306,.5,.2),B=new Fe(jn(.7,.7,.08,32),yt);B.position.set(0,.19,.5),B.castShadow=!0,Ie.add(B);const Ce=mt(5912608,.6),ve=new Fe(an(.4,.02,.25),Ce);ve.position.set(0,.24,.5),Ie.add(ve);const je=new Fe(ys(.08,16,12),mt(15261904,.8));je.position.set(.1,.29,.5),Ie.add(je);const Ue=new Fe(jn(.03,.02,.04,12),mt(15261904,.8));Ue.position.set(-.1,.27,.55),Ie.add(Ue);const Me=new Fe(jn(.03,.02,.04,12),mt(15261904,.8));Me.position.set(-.1,.27,.45),Ie.add(Me);const Ke=new Yn;[[-.8,.5,Math.PI/4],[.8,.5,-Math.PI/4],[0,1.4,Math.PI]].forEach(([ae,Q,De])=>{const Ve=new Yn;Ve.position.set(ae,.15,Q),Ve.rotation.y=De;const lt=new Fe(new Nn(.3,.3,.2,16,1,!1,Math.PI*.8,Math.PI*.4),Ce);lt.position.y=.1,Ve.add(lt);const Et=new Fe(jn(.25,.25,.06,16),mt(4876890,.9));Et.position.y=.03,Ve.add(Et),Ke.add(Ve)}),Ie.add(Ke),r.add(Ie),Ie.children.forEach(ae=>{ae.isMesh&&ze.push({mesh:ae,zoneId:"calm"})});const Qe=mt(11040848,.98),Ft=new Yn;Ft.position.set(-3.8,.003,2.8);const Dt=new Fe(jn(1.8,1.8,.005,32),Qe);Dt.position.set(-.8,0,.2),Ft.add(Dt);const vn=new Fe(jn(1.4,1.4,.005,32),Qe);vn.position.set(1,0,-.4),Ft.add(vn);const Le=new Fe(jn(1.5,1.5,.005,32),Qe);Le.position.set(.2,0,.5),Ft.add(Le),r.add(Ft);function gt(ae,Q,De,Ve,lt,Et,Tt){const Gt=new Yn,pn=.04,At=.04,dn=mt(2759184,.6,.1),Rn=new Fe(an(lt,Et,.01),mt(16117992,.95));Rn.position.z=pn/2,Gt.add(Rn),Tt.forEach((en,sr)=>{const Pi=lt*(.3+Math.random()*.4),A=Et*(.3+Math.random()*.4),Y=new Fe(an(Pi,A,.002),mt(en,.9));Y.position.set((Math.random()-.5)*(lt-Pi),(Math.random()-.5)*(Et-A),pn/2+.006+sr*.001),Gt.add(Y)});const Zn=new Fe(an(lt+At*2,At,pn),dn);Zn.position.set(0,Et/2+At/2,0),Gt.add(Zn);const ti=new Fe(an(lt+At*2,At,pn),dn);ti.position.set(0,-Et/2-At/2,0),Gt.add(ti);const Tr=new Fe(an(At,Et,pn),dn);Tr.position.set(-lt/2-At/2,0,0),Gt.add(Tr);const Ar=new Fe(an(At,Et,pn),dn);Ar.position.set(lt/2+At/2,0,0),Gt.add(Ar),Gt.position.set(ae,Q,De),Gt.rotation.y=Ve,r.add(Gt)}return gt(-7.94,1.8,1,Math.PI/2,2,1.2,[4876938,12882032,14207144,2767434]),gt(-1.2,1.7,-6.44,0,1,1.4,[5929032,11040848,14733496]),gt(1.8,1.7,-6.44,0,.9,.9,[13936704,4860942,13150330]),ze}function $M({activeZone:r,isMobile:e,handleZoom:n,handleReset:s,tutorialHighlight:a}){const l=a==="zones";return V.jsxs("div",{style:{position:"absolute",top:e?65:76,left:"50%",transform:"translateX(-50%)",display:"flex",gap:e?5:7,flexWrap:"wrap",justifyContent:"center",zIndex:l?45:10,maxWidth:e?"calc(100% - 32px)":"auto",padding:e?"0 8px":0},children:[Qt.map((u,f)=>{const p=(r==null?void 0:r.id)===u.id;return V.jsx("button",{className:"zbtn",onClick:()=>n(u),style:{padding:e?"6px 12px":"7px 16px",borderRadius:24,border:`1.5px solid ${l?"rgba(196,144,90,0.8)":p?u.accent:"rgba(248,238,216,0.25)"}`,background:p?u.accent:"rgba(18,12,6,0.6)",color:p?"#fff":"rgba(248,238,216,0.78)",fontSize:e?10:11,fontWeight:p?500:400,letterSpacing:"0.04em",cursor:"pointer",backdropFilter:"blur(12px)",fontFamily:"'DM Sans', sans-serif",boxShadow:p?`0 4px 20px ${u.accent}55`:"none",animationDelay:`${f*.06}s`,...l?{animation:"tutorialGlow 2s ease-in-out infinite"}:{}},children:e?u.icon:`${u.icon} ${u.label}`},u.id)}),r&&V.jsxs("button",{className:"zbtn",onClick:s,style:{padding:e?"6px 12px":"7px 16px",borderRadius:24,border:"1.5px solid rgba(248,238,216,0.28)",background:"rgba(18,12,6,0.6)",color:"rgba(248,238,216,0.7)",fontSize:e?10:11,fontWeight:300,cursor:"pointer",backdropFilter:"blur(12px)",fontFamily:"'DM Sans', sans-serif"},children:["↺ ",e?"":"Overview"]})]})}function KM({displayZone:r,activeZone:e,isMobile:n,goToAdjacentZone:s}){return V.jsxs("div",{className:"panel-in",style:{position:"absolute",right:n?12:22,top:n?"auto":"50%",bottom:n?12:"auto",left:n?12:"auto",width:n?"auto":300,maxHeight:n?"50vh":"auto",overflowY:n?"auto":"visible",zIndex:20,background:"rgba(16,10,4,0.95)",borderRadius:n?16:20,padding:n?"20px 18px":"28px 24px",boxShadow:`0 16px 50px rgba(0,0,0,0.55), 0 0 0 1px ${r.accent}44`,backdropFilter:"blur(18px)",border:`1px solid ${r.accent}44`},children:[V.jsxs("div",{style:{display:"inline-flex",alignItems:"center",gap:8,padding:"5px 13px",borderRadius:20,marginBottom:16,background:r.accent+"22",border:`1px solid ${r.accent}66`},children:[V.jsx("span",{style:{fontSize:15},children:r.icon}),V.jsx("span",{style:{fontFamily:"'DM Sans'",fontSize:10,fontWeight:500,color:r.accent,letterSpacing:"0.07em",textTransform:"uppercase"},children:e?"Zone Active":"Hover Preview"})]}),V.jsx("div",{style:{fontFamily:"'Cormorant Garamond', serif",fontSize:21,fontWeight:600,color:"#F8EED8",lineHeight:1.2,marginBottom:12},children:r.label}),V.jsx("div",{style:{fontFamily:"'DM Sans'",fontSize:12,lineHeight:1.8,color:"rgba(248,238,216,0.62)",marginBottom:20},children:r.desc}),V.jsx("div",{style:{fontFamily:"'DM Sans'",fontSize:9,letterSpacing:"0.13em",textTransform:"uppercase",color:"rgba(248,238,216,0.32)",marginBottom:10},children:"Design Interventions"}),r.features.map((a,l)=>V.jsxs("div",{style:{display:"flex",alignItems:"center",gap:9,padding:"7px 0",borderBottom:"1px solid rgba(248,238,216,0.06)",fontFamily:"'DM Sans'",fontSize:12,color:"rgba(248,238,216,0.75)"},children:[V.jsx("span",{style:{color:r.accent,fontSize:9,flexShrink:0,marginTop:1},children:"✦"}),a]},l)),V.jsx("div",{style:{marginTop:18,padding:"10px 16px",borderRadius:12,background:r.accent+"18",border:`1px solid ${r.accent}30`,fontFamily:"'DM Sans'",fontSize:13,fontWeight:500,color:r.accent,letterSpacing:"0.02em"},children:r.metric}),!e&&V.jsx("div",{style:{marginTop:12,fontFamily:"'DM Sans'",fontSize:10,color:"rgba(248,238,216,0.3)",textAlign:"center",letterSpacing:"0.08em"},children:"Click to enter zone →"}),e&&V.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",marginTop:18,paddingTop:14,borderTop:"1px solid rgba(248,238,216,0.08)"},children:[V.jsx("button",{className:"zbtn",onClick:()=>s(-1),style:{padding:"6px 12px",borderRadius:18,border:"1px solid rgba(248,238,216,0.22)",background:"rgba(248,238,216,0.05)",color:"rgba(248,238,216,0.8)",fontSize:11,cursor:"pointer",fontFamily:"'DM Sans'"},children:"← Prev"}),V.jsxs("span",{style:{fontFamily:"'DM Sans'",fontSize:10,color:"rgba(248,238,216,0.4)",letterSpacing:"0.08em"},children:[Qt.findIndex(a=>a.id===e.id)+1," / ",Qt.length]}),V.jsx("button",{className:"zbtn",onClick:()=>s(1),style:{padding:"6px 12px",borderRadius:18,border:`1px solid ${r.accent}66`,background:r.accent+"22",color:r.accent,fontSize:11,cursor:"pointer",fontFamily:"'DM Sans'",fontWeight:500},children:"Next →"})]})]},r.id)}function ZM({loaded:r,welcomePhase:e,setWelcomePhase:n,setShowWelcome:s,setTutorialStep:a,isMobile:l}){return!r||e==="done"?null:V.jsxs(V.Fragment,{children:[V.jsx("div",{style:{position:"absolute",inset:0,background:"rgba(10,6,2,0.65)",backdropFilter:"blur(4px)",zIndex:50,animation:"welcomeFadeIn 0.5s ease forwards"}}),V.jsxs("div",{style:{position:"absolute",top:"50%",left:"50%",transform:"translate(-50%, -50%)",width:l?"calc(100% - 40px)":440,maxWidth:"calc(100vw - 40px)",zIndex:51,background:"rgba(20,14,8,0.97)",borderRadius:22,padding:l?"32px 24px":"40px 36px",border:"1px solid rgba(196,144,90,0.35)",boxShadow:"0 30px 80px rgba(0,0,0,0.7), 0 0 0 1px rgba(248,238,216,0.06)",backdropFilter:"blur(20px)",textAlign:"center",animation:"welcomeSlideUp 0.6s cubic-bezier(.2,.8,.2,1) forwards"},children:[e==="intro"&&V.jsxs(V.Fragment,{children:[V.jsx("div",{style:{fontSize:36,marginBottom:16,filter:"drop-shadow(0 4px 12px rgba(196,144,90,0.3))"},children:"🌿"}),V.jsxs("div",{style:{fontFamily:"'Cormorant Garamond', serif",fontSize:l?22:26,fontWeight:600,color:"#F8EED8",lineHeight:1.2,marginBottom:12},children:["Integrated Modular",V.jsx("br",{}),"Healing Space"]}),V.jsx("div",{style:{fontFamily:"'DM Sans', sans-serif",fontSize:12,lineHeight:1.8,color:"rgba(248,238,216,0.55)",marginBottom:8,maxWidth:340,margin:"0 auto 24px"},children:"Explore a 3D prototype of a hospital waiting environment redesigned around four wellness zones — each backed by evidence-based design interventions that measurably reduce patient stress and anxiety."}),V.jsx("div",{style:{display:"flex",flexWrap:"wrap",justifyContent:"center",gap:8,marginBottom:28},children:Qt.map(u=>V.jsxs("span",{style:{padding:"4px 12px",borderRadius:16,background:u.accent+"18",border:`1px solid ${u.accent}44`,fontFamily:"'DM Sans'",fontSize:10,color:u.accent,letterSpacing:"0.04em"},children:[u.icon," ",u.label]},u.id))}),V.jsx("button",{onClick:()=>n("askNew"),className:"zbtn",style:{padding:"12px 36px",borderRadius:28,border:"none",background:"linear-gradient(135deg, #C4905A, #A07040)",color:"#fff",fontSize:14,fontWeight:500,letterSpacing:"0.06em",cursor:"pointer",fontFamily:"'DM Sans', sans-serif",boxShadow:"0 8px 28px rgba(196,144,90,0.35)"},children:"Start Exploring →"}),V.jsx("div",{style:{marginTop:16,fontFamily:"'DM Sans'",fontSize:10,color:"rgba(248,238,216,0.3)",letterSpacing:"0.08em"},children:"3D Spatial Prototype · Team 142"})]}),e==="askNew"&&V.jsxs(V.Fragment,{children:[V.jsx("div",{style:{fontSize:32,marginBottom:16},children:"👋"}),V.jsx("div",{style:{fontFamily:"'Cormorant Garamond', serif",fontSize:l?20:24,fontWeight:600,color:"#F8EED8",lineHeight:1.2,marginBottom:12},children:"Are you a new user?"}),V.jsx("div",{style:{fontFamily:"'DM Sans', sans-serif",fontSize:12,lineHeight:1.8,color:"rgba(248,238,216,0.55)",maxWidth:340,margin:"0 auto 28px"},children:"If this is your first time, we'll walk you through the space with a quick interactive tutorial covering controls, zones, and tools."}),V.jsxs("div",{style:{display:"flex",gap:12,justifyContent:"center",flexWrap:"wrap"},children:[V.jsx("button",{onClick:()=>{s(!1),n("done"),a(0)},className:"zbtn",style:{padding:"12px 28px",borderRadius:28,border:"none",background:"linear-gradient(135deg, #C4905A, #A07040)",color:"#fff",fontSize:13,fontWeight:500,letterSpacing:"0.06em",cursor:"pointer",fontFamily:"'DM Sans', sans-serif",boxShadow:"0 8px 28px rgba(196,144,90,0.35)"},children:"Yes, show me around"}),V.jsx("button",{onClick:()=>{s(!1),n("done")},className:"zbtn",style:{padding:"12px 28px",borderRadius:28,border:"1px solid rgba(248,238,216,0.25)",background:"rgba(248,238,216,0.06)",color:"rgba(248,238,216,0.8)",fontSize:13,fontWeight:400,letterSpacing:"0.06em",cursor:"pointer",fontFamily:"'DM Sans', sans-serif"},children:"No, I'll explore"})]})]})]})]})}function JM({tutorialStep:r,setTutorialStep:e,handleReset:n,isMobile:s}){return r<0||r>=wn.length?null:V.jsxs(V.Fragment,{children:[wn[r].highlight&&V.jsx("div",{style:{position:"absolute",inset:0,background:"rgba(0,0,0,0.7)",pointerEvents:"none",zIndex:44}}),wn[r].highlight==="viewport"&&V.jsx("div",{style:{position:"absolute",inset:0,border:"3px solid rgba(196,144,90,0.5)",borderRadius:0,pointerEvents:"none",zIndex:45,boxShadow:"inset 0 0 60px rgba(196,144,90,0.15)"}}),V.jsxs("div",{className:"fade-up",style:{position:"absolute",bottom:s?16:32,left:"50%",transform:"translateX(-50%)",width:s?"calc(100% - 24px)":520,maxWidth:"calc(100vw - 24px)",zIndex:46,background:"rgba(16,10,4,0.96)",borderRadius:18,padding:s?"20px 18px":"24px 28px",border:"1px solid rgba(196,144,90,0.35)",boxShadow:"0 20px 60px rgba(0,0,0,0.6)",backdropFilter:"blur(16px)"},children:[V.jsx("div",{style:{display:"flex",gap:3,marginBottom:16},children:wn.map((a,l)=>V.jsx("div",{style:{flex:1,height:3,borderRadius:2,background:l<=r?"#C4905A":"rgba(248,238,216,0.12)",transition:"background 0.3s ease"}},l))}),V.jsxs("div",{style:{fontFamily:"'DM Sans', sans-serif",fontSize:10,letterSpacing:"0.12em",textTransform:"uppercase",color:"rgba(196,144,90,0.8)",marginBottom:8},children:["Step ",r+1," of ",wn.length]}),V.jsx("div",{style:{fontFamily:"'Cormorant Garamond', serif",fontSize:s?18:22,fontWeight:600,color:"#F8EED8",lineHeight:1.2,marginBottom:10},children:wn[r].title}),V.jsx("div",{style:{fontFamily:"'DM Sans', sans-serif",fontSize:12,lineHeight:1.8,color:"rgba(248,238,216,0.65)",marginBottom:8},children:wn[r].text}),wn[r].sub&&V.jsx("div",{style:{fontFamily:"'DM Sans', sans-serif",fontSize:11,fontWeight:500,color:"#C4905A",marginBottom:16,padding:"6px 12px",background:"rgba(196,144,90,0.1)",borderRadius:8,display:"inline-block"},children:wn[r].sub}),V.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",marginTop:8,paddingTop:14,borderTop:"1px solid rgba(248,238,216,0.08)"},children:[V.jsx("div",{style:{display:"flex",gap:10},children:r>0&&V.jsx("button",{onClick:()=>e(a=>a-1),className:"zbtn",style:{padding:"8px 18px",borderRadius:20,border:"1px solid rgba(248,238,216,0.4)",background:"rgba(248,238,216,0.08)",color:"rgba(248,238,216,0.9)",fontSize:13,cursor:"pointer",fontFamily:"'DM Sans'"},children:"← Back"})}),V.jsxs("div",{style:{display:"flex",gap:10},children:[V.jsx("button",{onClick:()=>{e(-1),n()},className:"zbtn",style:{padding:"8px 18px",borderRadius:20,border:"1px solid rgba(248,238,216,0.3)",background:"transparent",color:"rgba(248,238,216,0.8)",fontSize:13,cursor:"pointer",fontFamily:"'DM Sans'"},children:"Skip"}),!wn[r].requiredAction&&V.jsx("button",{onClick:()=>{r>=wn.length-1?(e(-1),n()):e(a=>a+1)},className:"zbtn",style:{padding:"8px 24px",borderRadius:20,border:"none",background:"linear-gradient(135deg, #D4A06A, #B08050)",color:"#fff",fontSize:13,fontWeight:600,cursor:"pointer",fontFamily:"'DM Sans'",boxShadow:"0 4px 14px rgba(196,144,90,0.5)"},children:r>=wn.length-1?"Finish ✓":"Next →"})]})]})]})]})}function QM({isMobile:r,showTools:e,setShowTools:n,heatmapMode:s,setHeatmapMode:a,patientSimActive:l,setPatientSimActive:u,guidedTour:f,setGuidedTour:p,splitScreen:m,setSplitScreen:x,inspectorMode:y,setInspectorMode:g,setInspectedItem:S,circadianTime:T,setCircadianTime:R,comparisonMode:_,onTutorialAction:v,tutorialHighlight:b}){const L=b==="tools";return V.jsxs(V.Fragment,{children:[V.jsxs("button",{onClick:()=>{n(P=>!P),!e&&v&&v("open_tools")},title:e?"Hide tools":"Show tools",className:`tools-fab ${e?"open":""}`,style:{position:"absolute",left:r?14:26,top:"auto",bottom:r?14:26,width:46,height:46,borderRadius:13,border:`1px solid ${L?"rgba(196,144,90,0.8)":e?"rgba(196,144,90,0.6)":"rgba(248,238,216,0.14)"}`,background:e?"linear-gradient(135deg, rgba(196,144,90,0.92), rgba(160,112,80,0.92))":"rgba(18,12,6,0.72)",color:"#F8EED8",cursor:"pointer",backdropFilter:"blur(16px)",boxShadow:e?"0 8px 28px rgba(196,144,90,0.28), inset 0 1px 0 rgba(255,255,255,0.12)":"0 4px 14px rgba(0,0,0,0.3)",zIndex:L?45:25,padding:0,...L?{animation:"tutorialGlow 2s ease-in-out infinite"}:{}},children:[V.jsx("span",{className:"bars",children:V.jsxs("svg",{width:"18",height:"18",viewBox:"0 0 18 18",fill:"none",children:[V.jsx("circle",{cx:"3",cy:"4.5",r:"1.2",fill:"currentColor"}),V.jsx("rect",{x:"6.5",y:"3.8",width:"9",height:"1.4",rx:"0.7",fill:"currentColor"}),V.jsx("circle",{cx:"3",cy:"9",r:"1.2",fill:"currentColor"}),V.jsx("rect",{x:"6.5",y:"8.3",width:"9",height:"1.4",rx:"0.7",fill:"currentColor"}),V.jsx("circle",{cx:"3",cy:"13.5",r:"1.2",fill:"currentColor"}),V.jsx("rect",{x:"6.5",y:"12.8",width:"9",height:"1.4",rx:"0.7",fill:"currentColor"})]})}),V.jsx("span",{className:"cross",children:V.jsx("svg",{width:"16",height:"16",viewBox:"0 0 16 16",fill:"none",children:V.jsx("path",{d:"M3 3 L13 13 M13 3 L3 13",stroke:"currentColor",strokeWidth:"1.6",strokeLinecap:"round"})})})]}),!e&&!r&&V.jsx("div",{style:{position:"absolute",left:80,bottom:34,fontFamily:"'DM Sans', sans-serif",fontSize:10,letterSpacing:"0.1em",textTransform:"uppercase",color:"rgba(248,238,216,0.45)",pointerEvents:"none",animation:"fadeUp 0.5s ease 2s forwards",opacity:0,zIndex:25},children:"Tools"}),e&&V.jsx("div",{className:"dock-in",style:{position:"absolute",left:r?"50%":26,bottom:r?72:84,top:"auto",transform:r?"translateX(-50%)":"none",display:"flex",flexDirection:r?"row":"column",gap:8,zIndex:20,padding:8,background:"rgba(18,12,6,0.75)",borderRadius:14,border:"1px solid rgba(248,238,216,0.12)",backdropFilter:"blur(14px)",flexWrap:"wrap",maxWidth:r?"calc(100% - 24px)":"auto"},children:[{key:"heatmap",label:"Heatmap",icon:"▦",active:s,toggle:()=>a(P=>!P),color:"#E07B4A"},{key:"patients",label:"Patient Flow",icon:"◉",active:l,toggle:()=>u(P=>!P),color:"#4A8A58"},{key:"tour",label:"Guided Tour",icon:"▶",active:f,toggle:()=>{f||x(!1),p(P=>!P)},color:"#5572C4"},{key:"split",label:"Split View",icon:"◫",active:m,toggle:()=>{m||p(!1),x(P=>!P)},color:"#8A5898"},{key:"inspect",label:"Inspect",icon:"⊙",active:y,toggle:()=>{g(P=>!P),y&&S(null)},color:"#C4905A"}].map((P,z)=>V.jsxs("button",{onClick:P.toggle,className:"zbtn dock-item",title:`${P.label}${P.active?" (click to disable)":""}`,style:{animationDelay:`${.06+z*.05}s`,width:r?44:150,height:36,padding:r?0:"0 12px",borderRadius:8,border:`1px solid ${P.active?P.color:"rgba(248,238,216,0.18)"}`,background:P.active?P.color:"rgba(18,12,6,0.4)",color:P.active?"#fff":"rgba(248,238,216,0.8)",fontSize:r?16:11,fontFamily:"'DM Sans', sans-serif",letterSpacing:"0.04em",cursor:"pointer",display:"flex",alignItems:"center",justifyContent:r?"center":"flex-start",gap:8,fontWeight:P.active?500:400},children:[V.jsx("span",{style:{fontSize:14},children:P.icon}),!r&&V.jsx("span",{children:P.label})]},P.key))}),e&&!r&&!m&&V.jsxs("div",{className:"slider-in",style:{position:"absolute",bottom:28,left:"50%",transform:"translateX(-50%)",width:340,padding:"10px 18px",background:"rgba(18,12,6,0.82)",borderRadius:12,border:"1px solid rgba(248,238,216,0.12)",backdropFilter:"blur(14px)",zIndex:15,fontFamily:"'DM Sans', sans-serif"},children:[V.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:6},children:[V.jsx("span",{style:{fontSize:10,letterSpacing:"0.12em",textTransform:"uppercase",color:"rgba(248,238,216,0.5)"},children:"Circadian Light"}),V.jsxs("span",{style:{fontSize:12,color:"#F8EED8",fontVariantNumeric:"tabular-nums"},children:[String(Math.floor(T)).padStart(2,"0"),":",String(Math.floor(T%1*60)).padStart(2,"0")]})]}),V.jsx("input",{type:"range",min:0,max:24,step:.25,value:T,onChange:P=>R(parseFloat(P.target.value)),disabled:_,style:{width:"100%",accentColor:"#C4905A",cursor:_?"not-allowed":"pointer",opacity:_?.4:1}}),V.jsxs("div",{style:{display:"flex",justifyContent:"space-between",fontSize:9,color:"rgba(248,238,216,0.35)",marginTop:2},children:[V.jsx("span",{children:"00"}),V.jsx("span",{children:"06"}),V.jsx("span",{children:"12"}),V.jsx("span",{children:"18"}),V.jsx("span",{children:"24"})]})]})]})}function eE({inspectedItem:r,setInspectedItem:e,isMobile:n}){const[s,a]=vt.useState(!1);if(vt.useEffect(()=>{r?a(!0):setTimeout(()=>a(!1),250)},[r]),!s&&!r)return null;const l=!!r;return V.jsxs(V.Fragment,{children:[V.jsx("div",{onClick:()=>e(null),style:{position:"absolute",inset:0,background:"rgba(0, 0, 0, 0.45)",backdropFilter:"blur(8px)",zIndex:39,opacity:l?1:0,transition:"opacity 0.25s ease-in-out"}}),V.jsxs("div",{style:{position:"absolute",left:"50%",top:"50%",transform:`translate(-50%, -50%) scale(${l?1:.96})`,opacity:l?1:0,transition:"all 0.3s cubic-bezier(0.16, 1, 0.3, 1)",width:n?"calc(100% - 40px)":480,maxWidth:"100%",maxHeight:"85vh",overflowY:"auto",background:"linear-gradient(160deg, rgba(35,40,45,0.95) 0%, rgba(15,18,22,0.98) 100%)",borderRadius:24,padding:"32px",border:"1px solid rgba(255,255,255,0.1)",boxShadow:"0 30px 60px rgba(0,0,0,0.8), inset 0 1px 0 rgba(255,255,255,0.1)",zIndex:40},children:[V.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"flex-start",marginBottom:24},children:[V.jsxs("div",{children:[V.jsxs("div",{style:{fontSize:10,letterSpacing:"0.2em",textTransform:"uppercase",color:"#A0B0C0",fontWeight:600,display:"flex",alignItems:"center",gap:8},children:[V.jsx("span",{style:{width:8,height:8,borderRadius:"50%",background:"#4ADE80",boxShadow:"0 0 10px rgba(74,222,128,0.5)"}}),"Material Details"]}),V.jsx("div",{style:{fontFamily:"'Cormorant Garamond', serif",fontSize:28,color:"#FFFFFF",marginTop:6,lineHeight:1.1},children:r==null?void 0:r.name})]}),V.jsx("button",{onClick:()=>e(null),onMouseEnter:u=>{u.currentTarget.style.background="rgba(255,255,255,0.15)",u.currentTarget.style.transform="scale(1.05)"},onMouseLeave:u=>{u.currentTarget.style.background="rgba(255,255,255,0.05)",u.currentTarget.style.transform="scale(1)"},style:{border:"1px solid rgba(255,255,255,0.1)",background:"rgba(255,255,255,0.05)",color:"#FFFFFF",borderRadius:"50%",width:36,height:36,fontSize:18,cursor:"pointer",display:"flex",alignItems:"center",justifyContent:"center",transition:"all 0.2s ease"},children:"×"})]}),(r==null?void 0:r.dim)&&V.jsxs("div",{style:{fontSize:13,color:"rgba(255,255,255,0.5)",fontFamily:"'DM Sans', sans-serif",marginBottom:24,paddingBottom:16,borderBottom:"1px solid rgba(255,255,255,0.08)"},children:["Dimensions: ",V.jsx("span",{style:{color:"#E0E0E0",marginLeft:8},children:r.dim})]}),V.jsx("div",{style:{display:"grid",gridTemplateColumns:"1fr 1fr",gap:16,fontFamily:"'DM Sans', sans-serif"},children:r==null?void 0:r.specs.map((u,f)=>V.jsxs("div",{style:{padding:"12px 16px",background:"linear-gradient(180deg, rgba(255,255,255,0.06) 0%, rgba(255,255,255,0.01) 100%)",borderRadius:12,border:"1px solid rgba(255,255,255,0.06)",boxShadow:"0 4px 12px rgba(0,0,0,0.2)"},children:[V.jsx("div",{style:{fontSize:9,letterSpacing:"0.1em",textTransform:"uppercase",color:"rgba(255,255,255,0.4)"},children:u[0]}),V.jsx("div",{style:{fontSize:14,color:"#FFFFFF",marginTop:4,fontWeight:500},children:u[1]})]},f))}),(r==null?void 0:r.note)&&V.jsxs("div",{style:{marginTop:24,padding:"16px 20px",background:"linear-gradient(90deg, rgba(74,222,128,0.1) 0%, rgba(74,222,128,0.01) 100%)",borderLeft:"3px solid #4ADE80",borderRadius:"0 12px 12px 0",fontSize:13,fontStyle:"italic",color:"rgba(255,255,255,0.85)",fontFamily:"'DM Sans', sans-serif",lineHeight:1.5},children:['"',r.note,'"']})]})]})}function tE({isMobile:r,loaded:e,loadingProgress:n,activeZone:s,hovered:a,showHint:l,splitScreen:u,guidedTour:f,tourZoneIndex:p,setGuidedTour:m,comparisonMode:x,idlePrompt:y,showWelcome:g,showHelp:S,tutorialStep:T,inspectorMode:R,patientSimActive:_,occupancy:v,tourRef:b}){return V.jsxs(V.Fragment,{children:[V.jsxs("div",{style:{position:"absolute",top:0,left:0,right:0,padding:r?"16px 16px 50px":"20px 28px 60px",background:"linear-gradient(180deg, rgba(18,12,6,0.82) 0%, transparent 100%)",display:"flex",alignItems:"flex-start",justifyContent:"space-between",pointerEvents:"none"},children:[V.jsxs("div",{className:e?"fade-up":"",style:{opacity:e?1:0,maxWidth:r?"calc(100% - 60px)":"auto"},children:[V.jsx("div",{style:{fontFamily:"'Cormorant Garamond', serif",fontSize:r?18:23,fontWeight:600,color:"#F8EED8",letterSpacing:"-0.01em",lineHeight:1.1},children:"Integrated Modular Healing Space"}),V.jsx("div",{style:{fontFamily:"'DM Sans', sans-serif",fontSize:r?8:10,letterSpacing:"0.16em",textTransform:"uppercase",color:"rgba(248,238,216,0.5)",marginTop:5},children:"3D Spatial Prototype · Hospital Waiting Environment · Team 142"})]}),!r&&V.jsxs("div",{style:{fontFamily:"'DM Sans', sans-serif",fontSize:10,color:"rgba(248,238,216,0.38)",textAlign:"right",lineHeight:1.8,letterSpacing:"0.04em"},children:["300 m² floor plate",V.jsx("br",{}),"Capacity: 40–60 persons",V.jsx("br",{}),"Scale approx. 1:50"]})]}),l&&!s&&!r&&V.jsxs("div",{style:{position:"absolute",bottom:28,left:"50%",transform:"translateX(-50%)",background:"rgba(16,10,4,0.82)",color:"rgba(248,238,216,0.7)",padding:"10px 24px",borderRadius:30,fontFamily:"'DM Sans'",fontSize:11,letterSpacing:"0.05em",backdropFilter:"blur(12px)",border:"1px solid rgba(248,238,216,0.1)",pointerEvents:"none",display:"flex",gap:22},children:[V.jsx("span",{children:"🖱 Drag to orbit"}),V.jsx("span",{children:"⚲ Scroll to zoom"}),V.jsx("span",{children:"Click zones"}),V.jsx("span",{children:"Press H for help"})]}),l&&!s&&r&&V.jsx("div",{style:{position:"absolute",bottom:145,left:"50%",transform:"translateX(-50%)",background:"rgba(16,10,4,0.82)",color:"rgba(248,238,216,0.7)",padding:"10px 20px",borderRadius:30,fontFamily:"'DM Sans'",fontSize:10,letterSpacing:"0.05em",backdropFilter:"blur(12px)",border:"1px solid rgba(248,238,216,0.1)",pointerEvents:"none",textAlign:"center",maxWidth:"calc(100% - 32px)"},children:V.jsx("span",{children:"Swipe to explore · Tap zones · Press ? for help"})}),!r&&V.jsxs("div",{style:{position:"absolute",bottom:28,right:26,fontFamily:"'DM Sans'",fontSize:9,color:"rgba(248,238,216,0.32)",textAlign:"center",lineHeight:1.9,letterSpacing:"0.1em"},children:[V.jsx("div",{style:{fontSize:20,opacity:.35},children:"⊕"}),"N"]}),!r&&V.jsx("div",{style:{position:"absolute",bottom:78,left:"50%",transform:"translateX(-50%)",display:"flex",gap:8,alignItems:"center",pointerEvents:"none"},children:Qt.map(L=>V.jsx("div",{style:{width:(s==null?void 0:s.id)===L.id?20:6,height:6,borderRadius:3,background:(s==null?void 0:s.id)===L.id?L.accent:"rgba(248,238,216,0.22)",transition:"all 0.35s cubic-bezier(.4,0,.2,1)"}},L.id))}),_&&!r&&!u&&V.jsxs("div",{className:"panel-in",style:{position:"absolute",top:150,left:26,width:220,padding:16,background:"rgba(18,12,6,0.9)",borderRadius:12,border:"1px solid rgba(74,138,88,0.4)",backdropFilter:"blur(14px)",zIndex:15,fontFamily:"'DM Sans', sans-serif"},children:[V.jsxs("div",{style:{fontSize:9,letterSpacing:"0.14em",textTransform:"uppercase",color:"rgba(74,138,88,0.9)",marginBottom:10,display:"flex",alignItems:"center",gap:6},children:[V.jsx("span",{style:{width:6,height:6,borderRadius:3,background:"#4A8A58",display:"inline-block",animation:"pulse 1.5s infinite"}}),"Live Occupancy"]}),Qt.map(L=>{const P=v[L.id]||0;return V.jsxs("div",{style:{marginBottom:8},children:[V.jsxs("div",{style:{display:"flex",justifyContent:"space-between",fontSize:11,color:"rgba(248,238,216,0.8)",marginBottom:3},children:[V.jsxs("span",{children:[L.icon," ",L.label.split(" ")[0]]}),V.jsx("span",{style:{color:L.accent,fontWeight:500},children:P})]}),V.jsx("div",{style:{height:4,background:"rgba(248,238,216,0.08)",borderRadius:2,overflow:"hidden"},children:V.jsx("div",{style:{height:"100%",width:`${Math.min(100,P*25)}%`,background:L.accent,transition:"width 0.4s"}})})]},L.id)}),V.jsx("div",{style:{fontSize:9,color:"rgba(248,238,216,0.4)",marginTop:10,paddingTop:8,borderTop:"1px solid rgba(248,238,216,0.08)"},children:"8 simulated patients · stress-adaptive routing"})]}),a&&!s&&!R&&V.jsxs("div",{style:{position:"absolute",top:r?108:120,left:"50%",transform:"translateX(-50%)",padding:"5px 14px",borderRadius:14,background:"rgba(18,12,6,0.78)",border:`1px solid ${a.accent}66`,backdropFilter:"blur(10px)",fontFamily:"'DM Sans', sans-serif",fontSize:11,color:"rgba(248,238,216,0.85)",letterSpacing:"0.04em",display:"flex",alignItems:"center",gap:6,zIndex:12,pointerEvents:"none"},children:[V.jsx("span",{style:{color:a.accent},children:a.icon}),a.label,V.jsx("span",{style:{color:"rgba(248,238,216,0.35)",fontSize:10,marginLeft:4},children:"· click to enter"})]}),R&&V.jsx("div",{style:{position:"absolute",top:r?110:140,left:"50%",transform:"translateX(-50%)",padding:"8px 18px",borderRadius:16,background:"rgba(196,144,90,0.9)",color:"#fff",fontFamily:"'DM Sans'",fontSize:11,letterSpacing:"0.06em",zIndex:14,backdropFilter:"blur(12px)"},children:"⊙ Click a material surface (floor, beam, moss, acoustic panel)"}),u&&V.jsxs(V.Fragment,{children:[V.jsx("div",{style:{position:"absolute",top:r?120:150,left:"25%",transform:"translateX(-50%)",padding:"8px 20px",borderRadius:10,background:"rgba(60,70,85,0.92)",color:"#fff",fontFamily:"'DM Sans'",fontSize:r?10:12,letterSpacing:"0.12em",textTransform:"uppercase",fontWeight:500,zIndex:14,border:"1px solid rgba(255,255,255,0.18)"},children:"⊘ Typical Ward"}),V.jsx("div",{style:{position:"absolute",top:r?120:150,left:"75%",transform:"translateX(-50%)",padding:"8px 20px",borderRadius:10,background:"rgba(74,138,88,0.92)",color:"#fff",fontFamily:"'DM Sans'",fontSize:r?10:12,letterSpacing:"0.12em",textTransform:"uppercase",fontWeight:500,zIndex:14,border:"1px solid rgba(255,255,255,0.22)"},children:"✦ Healing Space"}),V.jsx("div",{style:{position:"absolute",top:0,bottom:0,left:"50%",width:2,background:"rgba(248,238,216,0.4)",zIndex:13}})]}),x&&V.jsxs("div",{style:{position:"absolute",top:r?110:140,left:"50%",transform:"translateX(-50%)",background:"rgba(60,70,85,0.92)",color:"#fff",padding:r?"10px 18px":"12px 26px",borderRadius:14,fontFamily:"'DM Sans', sans-serif",fontSize:r?10:12,letterSpacing:"0.08em",backdropFilter:"blur(12px)",border:"1px solid rgba(255,255,255,0.18)",textAlign:"center",zIndex:15,maxWidth:r?"calc(100% - 32px)":420,boxShadow:"0 10px 30px rgba(0,0,0,0.4)"},children:[V.jsx("div",{style:{fontSize:r?9:10,opacity:.65,textTransform:"uppercase",letterSpacing:"0.14em",marginBottom:3},children:"Baseline Reference"}),V.jsx("div",{style:{fontWeight:500},children:"Typical Hospital Waiting Room · Fluorescent, desaturated, no biophilic elements"})]}),f&&V.jsxs("div",{style:{position:"absolute",bottom:r?80:36,left:"50%",transform:"translateX(-50%)",display:"flex",flexDirection:"column",alignItems:"center",gap:10,zIndex:14,pointerEvents:"auto"},children:[V.jsxs("div",{style:{padding:"8px 20px",borderRadius:16,background:"rgba(16,10,4,0.88)",border:"1px solid rgba(85,114,196,0.5)",backdropFilter:"blur(12px)",display:"flex",alignItems:"center",gap:14,fontFamily:"'DM Sans'",fontSize:11,color:"rgba(248,238,216,0.85)",letterSpacing:"0.05em"},children:[V.jsx("span",{style:{color:"#5572C4"},children:"▶"}),V.jsxs("span",{children:["Guided Tour",p>=0?` · ${Qt[p].label}`:" · Starting"]}),V.jsx("span",{style:{color:"rgba(248,238,216,0.35)",fontSize:10},children:b?`${b.waypointIdx+1}/${b.waypoints.length}`:""}),V.jsx("button",{onClick:()=>m(!1),className:"zbtn",style:{padding:"4px 12px",borderRadius:12,border:"1px solid rgba(248,238,216,0.25)",background:"rgba(248,238,216,0.08)",color:"rgba(248,238,216,0.75)",fontSize:10,cursor:"pointer",fontFamily:"'DM Sans'"},children:"Exit Tour"})]}),V.jsx("div",{style:{display:"flex",gap:4,alignItems:"center"},children:Qt.map((L,P)=>V.jsx("div",{style:{width:p===P?18:6,height:6,borderRadius:3,background:p===P?L.accent:"rgba(248,238,216,0.2)",transition:"all 0.4s ease"}},L.id))})]}),y&&e&&!s&&!g&&!S&&!f&&T<0&&V.jsxs("div",{style:{position:"absolute",bottom:r?160:120,left:"50%",transform:"translateX(-50%)",display:"flex",flexDirection:"column",alignItems:"center",gap:8,pointerEvents:"none",animation:"idleBob 2s ease-in-out infinite",zIndex:12},children:[V.jsx("div",{style:{width:28,height:44,borderRadius:14,border:"2px solid rgba(248,238,216,0.35)",display:"flex",justifyContent:"center",paddingTop:8},children:V.jsx("div",{style:{width:4,height:10,borderRadius:2,background:"rgba(248,238,216,0.6)",animation:"fadeUp 1.2s ease-in-out infinite"}})}),V.jsx("span",{style:{fontFamily:"'DM Sans', sans-serif",fontSize:10,letterSpacing:"0.1em",textTransform:"uppercase",color:"rgba(248,238,216,0.4)"},children:"Scroll to explore"})]}),!e&&n<100&&V.jsxs("div",{style:{position:"absolute",inset:0,background:"#16100A",display:"flex",alignItems:"center",justifyContent:"center",flexDirection:"column",zIndex:100,transition:"opacity 0.5s"},children:[V.jsx("div",{style:{fontFamily:"'Cormorant Garamond', serif",fontSize:r?22:28,color:"#F8EED8",marginBottom:24},children:"Loading Healing Space"}),V.jsx("div",{style:{width:r?220:280,height:4,background:"rgba(248,238,216,0.1)",borderRadius:2,overflow:"hidden"},children:V.jsx("div",{style:{width:`${n}%`,height:"100%",background:"linear-gradient(90deg, #C4905A, #4A8A58, #5572C4, #8A5898)",transition:"width 0.3s ease"}})}),V.jsxs("div",{style:{fontFamily:"'DM Sans', sans-serif",fontSize:12,color:"rgba(248,238,216,0.5)",marginTop:16},children:[n,"%"]})]})]})}function nE({isMobile:r,comparisonMode:e,setComparisonMode:n,showHelp:s,setShowHelp:a,onTutorialAction:l,tutorialHighlight:u}){const f=u==="comparison";return V.jsxs("div",{style:{position:"absolute",top:r?16:90,right:r?16:22,display:"flex",gap:8,zIndex:f?45:30,pointerEvents:"auto"},children:[V.jsx("button",{onClick:()=>{n(!e),l&&l("toggle_comparison")},className:"zbtn",style:{height:40,padding:"0 14px",borderRadius:20,border:`1.5px solid ${f?"rgba(196,144,90,0.8)":e?"#C4905A":"rgba(248,238,216,0.3)"}`,background:e?"#C4905A":"rgba(18,12,6,0.7)",color:e?"#fff":"rgba(248,238,216,0.8)",fontSize:r?10:11,cursor:"pointer",backdropFilter:"blur(12px)",fontFamily:"'DM Sans'",letterSpacing:"0.04em",display:"flex",alignItems:"center",gap:6,...f?{animation:"tutorialGlow 2s ease-in-out infinite"}:{}},title:"Compare to typical waiting room",children:e?"✨ Healing View":"⊘ Standard View"}),V.jsx("button",{onClick:()=>a(!s),className:"zbtn",style:{width:40,height:40,borderRadius:"50%",border:`1.5px solid ${s?"#5572C4":"rgba(248,238,216,0.3)"}`,background:s?"#5572C4":"rgba(18,12,6,0.7)",color:"rgba(248,238,216,0.8)",fontSize:18,cursor:"pointer",backdropFilter:"blur(12px)",display:"flex",alignItems:"center",justifyContent:"center"},title:"Help (press H or ?)",children:"?"})]})}function iE({showHelp:r,setShowHelp:e,isMobile:n,setTutorialStep:s,setWelcomePhase:a}){return r?V.jsxs("div",{className:"fade-up",style:{position:"absolute",top:n?70:90,right:n?16:24,width:280,maxWidth:"calc(100vw - 32px)",background:"linear-gradient(160deg, rgba(22,16,10,0.95) 0%, rgba(12,8,4,0.98) 100%)",borderRadius:20,padding:"24px",border:"1px solid rgba(196,144,90,0.3)",boxShadow:"0 20px 50px rgba(0,0,0,0.7), inset 0 1px 0 rgba(255,255,255,0.05)",backdropFilter:"blur(20px)",zIndex:50,pointerEvents:"auto"},children:[V.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"flex-start",marginBottom:20},children:[V.jsx("div",{style:{fontFamily:"'Cormorant Garamond', serif",fontSize:24,color:"#F8EED8",lineHeight:1.1},children:"Controls & Help"}),V.jsx("button",{onClick:()=>e(!1),onMouseEnter:l=>{l.currentTarget.style.background="rgba(196,144,90,0.15)",l.currentTarget.style.transform="scale(1.1)"},onMouseLeave:l=>{l.currentTarget.style.background="rgba(196,144,90,0.05)",l.currentTarget.style.transform="scale(1)"},style:{border:"1px solid rgba(196,144,90,0.2)",background:"rgba(196,144,90,0.05)",color:"#F8EED8",borderRadius:"50%",width:32,height:32,fontSize:16,cursor:"pointer",display:"flex",alignItems:"center",justifyContent:"center",transition:"all 0.2s ease",marginTop:-4,marginRight:-4},children:"×"})]}),V.jsxs("div",{style:{display:"grid",gridTemplateColumns:"auto 1fr",gap:"12px 14px",fontFamily:"'DM Sans'",fontSize:12,color:"rgba(248,238,216,0.75)"},children:[V.jsx("span",{style:{color:"#8FA8F0",fontWeight:500},children:"🖱 L-Click + Drag"})," ",V.jsx("span",{children:"Orbit camera"}),V.jsx("span",{style:{color:"#8FA8F0",fontWeight:500},children:"🖱 R-Click + Drag"})," ",V.jsx("span",{children:"Pan camera"}),V.jsx("span",{style:{color:"#8FA8F0",fontWeight:500},children:"⚲ Scroll"})," ",V.jsx("span",{children:"Zoom in/out"}),V.jsx("span",{style:{color:"#8FA8F0",fontWeight:500},children:"📱 Pinch/Swipe"})," ",V.jsx("span",{children:"Mobile controls"}),V.jsx("span",{style:{color:"#C4905A",fontWeight:500},children:"⌨️ [ H ] or [ ? ]"})," ",V.jsx("span",{children:"Toggle this help"}),V.jsx("span",{style:{color:"#C4905A",fontWeight:500},children:"⌨️ [ C ]"})," ",V.jsx("span",{children:"Toggle comparison"}),V.jsx("span",{style:{color:"#C4905A",fontWeight:500},children:"⌨️ [ T ]"})," ",V.jsx("span",{children:"Toggle tools panel"})]}),V.jsx("div",{style:{marginTop:24,paddingTop:16,borderTop:"1px solid rgba(248,238,216,0.1)"},children:V.jsxs("button",{onClick:()=>{e(!1),s(0),a("done")},onMouseEnter:l=>{l.currentTarget.style.background="rgba(85,114,196,0.25)"},onMouseLeave:l=>{l.currentTarget.style.background="rgba(85,114,196,0.15)"},style:{padding:"10px 0",width:"100%",borderRadius:10,background:"rgba(85,114,196,0.15)",border:"1px solid rgba(85,114,196,0.4)",color:"#A0B8FF",fontSize:12,fontWeight:500,fontFamily:"'DM Sans'",cursor:"pointer",transition:"all 0.2s ease",display:"flex",alignItems:"center",justifyContent:"center",gap:8},children:[V.jsx("span",{style:{fontSize:10},children:"▶"})," Replay Interactive Tutorial"]})})]}):null}function rE(){var Bt;const r=vt.useRef(null),e=vt.useRef({}),[n,s]=vt.useState(null),[a,l]=vt.useState(!0),[u,f]=vt.useState(!1),[p,m]=vt.useState(null),[x,y]=vt.useState(!1),[g,S]=vt.useState(!1),[T,R]=vt.useState(0),[_,v]=vt.useState(!1),[b,L]=vt.useState(!1),[P,z]=vt.useState(!1),[D,k]=vt.useState(12),[w,I]=vt.useState(!1),[j,O]=vt.useState(-1),[q,le]=vt.useState(!1),[me,W]=vt.useState(!1),[te,$]=vt.useState(null),[K,fe]=vt.useState(!1),[he,U]=vt.useState(!1),[ne,Xe]=vt.useState({}),[ze,We]=vt.useState(!0),[ce,we]=vt.useState("intro"),[xe,ke]=vt.useState(-1),[rt,tt]=vt.useState(!1),Vt=vt.useRef(null),ct=vt.useCallback(oe=>{ke(F=>F>=0&&wn[F].requiredAction===oe?F+1:F)},[]),Rt=vt.useCallback(oe=>{if((n==null?void 0:n.id)===oe.id){const Se=e.current;Se.isOrbit=!0,Se.tPos&&Se.tLookAt&&(Se.tPos.set(0,7.5,15.5),Se.tLookAt.set(0,1,0)),s(null),m(null);return}const F=e.current;F.isOrbit=!1,F.tPos&&F.tLookAt&&(F.tPos.set(oe.camPos[0],oe.camPos[1],oe.camPos[2]),F.tLookAt.set(oe.lookAt[0],oe.lookAt[1],oe.lookAt[2])),s(oe),l(!1)},[n]),kt=vt.useCallback(()=>{const oe=e.current;oe.isOrbit=!0,oe.tPos&&oe.tLookAt&&(oe.tPos.set(0,7.5,15.5),oe.tLookAt.set(0,1,0)),s(null),m(null)},[]),ut=vt.useRef(Rt),Ut=vt.useRef(kt);vt.useEffect(()=>{ut.current=Rt,Ut.current=kt});const Yt=vt.useCallback(oe=>{if(!n)return;const F=Qt.findIndex(Lt=>Lt.id===n.id),Se=Qt[(F+oe+Qt.length)%Qt.length];Rt(Se)},[n,Rt]);vt.useEffect(()=>{e.current.heatmapMode=P},[P]),vt.useEffect(()=>{e.current.inspectorMode=me},[me]),vt.useEffect(()=>{e.current.splitScreen=q},[q]),vt.useEffect(()=>{const oe=e.current.animRefs;oe!=null&&oe.patientGroup&&(oe.patientGroup.visible=K,e.current.patientSimActive=K,K||Xe({}))},[K]),vt.useEffect(()=>{e.current.guidedTour=w,w?(e.current.tour={startTime:0,waypointIdx:0,segmentStart:0,started:!1,fromPos:new J(0,7.5,15.5),fromLookAt:new J(0,1,0),waypoints:YM},e.current.isOrbit=!1,s(null)):(e.current.tour=null,kt())},[w,kt]),vt.useEffect(()=>{const oe=e.current.animRefs;if(!oe||!oe.sun||b)return;const F=D,Se=Math.max(0,Math.min(1,(F-6)/12)),Lt=Se*Math.PI,C=-12+Se*24,M=Math.sin(Lt)*14+2,Z=10-Se*4;oe.sun.position.set(C,M,Z);let ge,ye,Ee,Re,pe,_e;if(F<6||F>20?(ge=2241354,ye=.05,Ee=1712176,Re=.2,pe=660520,_e=.1):F<8?(ge=16758904,ye=.6,Ee=16767920,Re=.35,pe=16754816,_e=.8):F<17?(ge=16772560,ye=1.05,Ee=16774628,Re=.45,pe=8965375,_e=.6):F<19?(ge=16750168,ye=.8,Ee=16764048,Re=.4,pe=16744280,_e=.9):(ge=6967440,ye=.25,Ee=4866144,Re=.28,pe=3813464,_e=.3),oe.sun.color.setHex(ge),oe.sun.intensity=ye,oe.ambient.color.setHex(Ee),oe.ambient.intensity=Re,oe.skyMat){const Ge=new Ct(pe);Ge.lerp(new Ct(16777215),1-Math.min(1,_e)),oe.skyMat.color.copy(Ge)}const Ie=F<7||F>18?1:0;e.current.nightBoost=Ie},[D,b]),vt.useEffect(()=>{var F,Se,Lt;const oe=e.current.animRefs;!oe||!oe.ambient||(b?(e.current.comparisonMode=!0,oe.ambient.color.setHex(15398143),oe.ambient.intensity=.95,oe.sun.color.setHex(15791871),oe.sun.intensity=.6,oe.fillLight.intensity=.15,(F=oe.accentLights)==null||F.forEach(C=>{C.intensity=0}),(Se=oe.pendants)==null||Se.forEach(C=>{C.pl.intensity=0}),e.current.scene&&(e.current.scene.background=new Ct(14212836),e.current.scene.fog&&e.current.scene.fog.color.setHex(14212836))):(e.current.comparisonMode=!1,oe.ambient.color.setHex(16774628),oe.ambient.intensity=.45,oe.sun.color.setHex(16772560),oe.sun.intensity=1.05,oe.fillLight.intensity=.35,(Lt=oe.accentLights)==null||Lt.forEach((C,M)=>{C.color.setHex(Qt[M].hex),C.intensity=1.4}),e.current.scene&&(e.current.scene.background=new Ct(15589576),e.current.scene.fog&&e.current.scene.fog.color.setHex(15589576))))},[b]),vt.useEffect(()=>{e.current.tutorialStep=xe},[xe]),vt.useEffect(()=>{if(xe<0)return;const oe=wn[xe];if(!oe)return;const F=e.current;oe.cam?(F.isOrbit=!1,F.tPos&&F.tLookAt&&(F.tPos.set(oe.cam.pos[0],oe.cam.pos[1],oe.cam.pos[2]),F.tLookAt.set(oe.cam.lookAt[0],oe.cam.lookAt[1],oe.cam.lookAt[2]))):(xe===0||!oe.cam)&&(F.isOrbit=!0,F.tPos&&F.tLookAt&&(F.tPos.set(0,7.5,15.5),F.tLookAt.set(0,1,0))),oe.highlight==="tools"&&U(!0)},[xe]),vt.useEffect(()=>{const oe=()=>{tt(!1),Vt.current&&clearTimeout(Vt.current),Vt.current=setTimeout(()=>tt(!0),5e3)};return oe(),window.addEventListener("mousemove",oe),window.addEventListener("mousedown",oe),window.addEventListener("wheel",oe),window.addEventListener("touchstart",oe),window.addEventListener("keydown",oe),()=>{Vt.current&&clearTimeout(Vt.current),window.removeEventListener("mousemove",oe),window.removeEventListener("mousedown",oe),window.removeEventListener("wheel",oe),window.removeEventListener("touchstart",oe),window.removeEventListener("keydown",oe)}},[]),vt.useEffect(()=>{const oe=()=>{v(window.innerWidth<=768||"ontouchstart"in window)};return oe(),window.addEventListener("resize",oe),()=>window.removeEventListener("resize",oe)},[]),vt.useEffect(()=>{const oe=r.current;if(!oe)return;const F=e.current;F.animRefs={};try{const Le=document.createElement("canvas");if(!(Le.getContext("webgl")||Le.getContext("experimental-webgl"))){S(!0);return}}catch{S(!0);return}R(10);const Se=window.innerWidth<=768||"ontouchstart"in window;F.renderer=new jM({antialias:!Se,powerPreference:"high-performance"}),F.renderer.setPixelRatio(Math.min(window.devicePixelRatio,Se?1.5:2)),F.renderer.setSize(oe.clientWidth,oe.clientHeight),F.renderer.shadowMap.enabled=!Se,Se||(F.renderer.shadowMap.type=ca),F.renderer.toneMapping=df,F.renderer.toneMappingExposure=1.1,F.renderer.outputColorSpace=di,oe.appendChild(F.renderer.domElement),R(30),F.scene=new Tv,F.scene.background=new Ct(15589576),F.scene.fog=new Mf(15589576,18,30),F.camera=new xi(54,oe.clientWidth/oe.clientHeight,.1,80),F.camera.position.set(0,7.5,15.5),R(50),F.clickables=qM(F.scene,F.animRefs);const Lt=[5929630,13144688,10386120,7383184,13138590,10399344,8036040,13147738],C=[],M=new Yn;M.visible=!1,F.scene.add(M);for(let Le=0;Le<8;Le++){const gt=new Yn,ae=Lt[Le],Q=new Fe(jn(.14,.18,.7,8),mt(ae,.85));Q.position.y=.35,Q.castShadow=!0,gt.add(Q);const De=new Fe(ys(.11,10,8),mt(15253656,.85));De.position.y=.82,De.castShadow=!0,gt.add(De);const Ve=-6+Math.random()*12;gt.position.set(Ve,0,6.2),M.add(gt),C.push({group:gt,state:"entering",target:new J(0,0,-5),waypoint:null,zoneId:null,dwellEnd:0,speed:.012+Math.random()*.008,stressLevel:.7+Math.random()*.3,bobPhase:Math.random()*Math.PI*2,spawnDelay:Le*600,spawnTime:0})}F.animRefs.patients=C,F.animRefs.patientGroup=M,R(70),F.orbit={theta:.38,phi:.58,radius:15.5},F.tOrbit={theta:.38,phi:.58,radius:15.5},F.isOrbit=!0,F.tPos=new J(0,7.5,15.5),F.tLookAt=new J(0,1,0),F.cLookAt=new J(0,1,0);const Z=new Kv,ge=new Ht,ye=(Le,gt)=>{const ae=oe.getBoundingClientRect();ge.x=(Le-ae.left)/ae.width*2-1,ge.y=-((gt-ae.top)/ae.height)*2+1,Z.setFromCamera(ge,F.camera);const Q=Z.intersectObjects(F.clickables.map(De=>De.mesh));return Q.length?F.clickables.find(De=>De.mesh===Q[0].object):null};let Ee=!1,Re=!1,pe=0,_e=0,Ie=0,Ge=0;const Ne=Le=>{Ee=!0,Re=!1,pe=Le.clientX,_e=Le.clientY,l(!1),oe.style.cursor="grabbing"},be=Le=>{if(!Ee){const Q=ye(Le.clientX,Le.clientY);m(Q?Qt.find(De=>De.id===Q.zoneId):null),oe.style.cursor=Q?"pointer":F.guidedTour?"default":"grab";return}const gt=Le.clientX-pe,ae=Le.clientY-_e;if((Math.abs(gt)>2||Math.abs(ae)>2)&&(Re=!0),!F.guidedTour){if(F.isOrbit){if(F.tutorialStep>=0){const Q=wn[F.tutorialStep];if(Q.requiredAction==="orbit")Ie+=Math.abs(gt)+Math.abs(ae),Ie>80&&ct("orbit");else if(Q.requiredAction)return}if(Le.buttons===2||Le.buttons===1&&(Le.ctrlKey||Le.metaKey)){const Q=F.tOrbit.radius*.0015,De=Math.sin(F.orbit.theta+Math.PI/2),Ve=Math.cos(F.orbit.theta+Math.PI/2),lt=Math.sin(F.orbit.theta),Et=Math.cos(F.orbit.theta);F.tLookAt.x-=De*gt*Q+lt*ae*Q,F.tLookAt.z-=Ve*gt*Q+Et*ae*Q}else F.tOrbit.theta-=gt*.005,F.tOrbit.phi=Math.max(.01,Math.min(Math.PI/2-.05,F.tOrbit.phi+ae*.005))}}pe=Le.clientX,_e=Le.clientY},dt=()=>{Ee=!1,oe.style.cursor="grab"},ft=Le=>{if(F.tutorialStep>=0){const gt=wn[F.tutorialStep];if(gt.requiredAction==="zoom")Ge+=Math.abs(Le.deltaY),Ge>150&&ct("zoom");else if(gt.requiredAction)return}F.isOrbit&&(F.tOrbit.radius=Math.max(5,Math.min(30,F.tOrbit.radius+Le.deltaY*.015)))},yt=Le=>{var Q;if(Re||F.tutorialStep>=0&&wn[F.tutorialStep].requiredAction)return;const gt=ye(Le.clientX,Le.clientY);if(!gt)return;if(F.inspectorMode&&((Q=gt.mesh.userData)!=null&&Q.material)){const De=gt.mesh.userData.material;$(Ve=>(Ve==null?void 0:Ve.name)===De.name?null:De);return}const ae=Qt.find(De=>De.id===gt.zoneId);ae&&ut.current(ae)};let B=null,Ce=0;const ve=Le=>{if(Le.touches.length===1)B=Le.touches[0],l(!1);else if(Le.touches.length===2){const gt=Le.touches[0].clientX-Le.touches[1].clientX,ae=Le.touches[0].clientY-Le.touches[1].clientY;Ce=Math.sqrt(gt*gt+ae*ae)}},je=Le=>{if(Le.touches.length===1&&B){const gt=Le.touches[0],ae=gt.clientX-B.clientX,Q=gt.clientY-B.clientY;F.tutorialStep>=0&&wn[F.tutorialStep].requiredAction==="orbit"&&(Ie+=Math.abs(ae)+Math.abs(Q),Ie>80&&ct("orbit")),F.tOrbit.theta-=ae*.005,F.tOrbit.phi=Math.max(.01,Math.min(Math.PI/2-.05,F.tOrbit.phi+Q*.005)),B=gt,Le.preventDefault()}else if(Le.touches.length===2&&Ce>0){const gt=Le.touches[0].clientX-Le.touches[1].clientX,ae=Le.touches[0].clientY-Le.touches[1].clientY,Q=Math.sqrt(gt*gt+ae*ae),De=Ce-Q;F.tutorialStep>=0&&wn[F.tutorialStep].requiredAction==="zoom"&&(Ge+=Math.abs(De),Ge>60&&ct("zoom")),F.tOrbit.radius=Math.max(5,Math.min(30,F.tOrbit.radius+De*.02)),Ce=Q,Le.preventDefault()}},Ue=()=>{B=null,Ce=0},Me=Le=>{},Ke=Le=>{Le.key==="Escape"&&(x?y(!1):me?(W(!1),$(null)):F.guidedTour?I(!1):n&&Ut.current()),Le.key==="1"&&Qt[0]&&ut.current(Qt[0]),Le.key==="2"&&Qt[1]&&ut.current(Qt[1]),Le.key==="3"&&Qt[2]&&ut.current(Qt[2]),Le.key==="4"&&Qt[3]&&ut.current(Qt[3]),(Le.key==="r"||Le.key==="R")&&Ut.current(),(Le.key==="h"||Le.key==="H"||Le.key==="?")&&y(gt=>!gt),F.isOrbit&&(Le.key==="ArrowLeft"&&(F.tOrbit.theta-=.15),Le.key==="ArrowRight"&&(F.tOrbit.theta+=.15),Le.key==="ArrowUp"&&(F.tOrbit.phi=Math.max(.01,F.tOrbit.phi-.15)),Le.key==="ArrowDown"&&(F.tOrbit.phi=Math.min(Math.PI/2-.05,F.tOrbit.phi+.15)))};let Qe=0;const Ft=Le=>{F.frame=requestAnimationFrame(Ft);const gt=Math.min(.1,Le*.001-Qe);if(Qe=Le*.001,F.guidedTour&&F.tour){const ae=F.tour;ae.started||(ae.started=!0,ae.startTime=Le,ae.segmentStart=Le,ae.fromPos.copy(F.camera.position),ae.fromLookAt.copy(F.cLookAt));const Q=ae.waypoints[ae.waypointIdx],De=(Le-ae.segmentStart)/1e3,Ve=Math.min(1,De/Q.dur),lt=Ve<.5?4*Ve*Ve*Ve:1-Math.pow(-2*Ve+2,3)/2,Et=new J(Q.pos[0],Q.pos[1],Q.pos[2]),Tt=new J(Q.lookAt[0],Q.lookAt[1],Q.lookAt[2]);if(F.camera.position.lerpVectors(ae.fromPos,Et,lt),F.cLookAt.lerpVectors(ae.fromLookAt,Tt,lt),F.camera.lookAt(F.cLookAt),Q.zoneIdx!==F._lastTourZone&&(F._lastTourZone=Q.zoneIdx,O(Q.zoneIdx),Q.zoneIdx>=0?s(Qt[Q.zoneIdx]):s(null)),Ve>=1){if(ae.waypointIdx++,ae.waypointIdx>=ae.waypoints.length){I(!1);return}ae.segmentStart=Le,ae.fromPos.copy(F.camera.position),ae.fromLookAt.copy(F.cLookAt)}}else{if(F.isOrbit){const Q=1-Math.exp(-12*gt);F.orbit.theta+=(F.tOrbit.theta-F.orbit.theta)*Q,F.orbit.phi+=(F.tOrbit.phi-F.orbit.phi)*Q,F.orbit.radius+=(F.tOrbit.radius-F.orbit.radius)*Q;const{theta:De,phi:Ve,radius:lt}=F.orbit;F.tPos.set(F.tLookAt.x+lt*Math.sin(Ve)*Math.sin(De),F.tLookAt.y+lt*Math.cos(Ve),F.tLookAt.z+lt*Math.sin(Ve)*Math.cos(De))}const ae=F.isOrbit?.12:.06;F.camera.position.lerp(F.tPos,ae),F.cLookAt.lerp(F.tLookAt,ae),F.camera.lookAt(F.cLookAt)}if(F.animRefs.pendants&&F.animRefs.pendants.forEach(ae=>{ae.pl.intensity=F.comparisonMode?0:1.1+Math.sin(Qe*1.1+ae.phase)*.12}),F.animRefs.plants&&F.animRefs.plants.forEach(ae=>{ae.mesh.position.y=ae.baseY+Math.sin(Qe*.55+ae.phase)*.018,ae.mesh.rotation.z=Math.sin(Qe*.4+ae.phase)*.025}),F.animRefs.water&&(F.animRefs.water.material.opacity=.75+Math.sin(Qe*1.8)*.06,F.animRefs.water.material.color.setHSL(.52,.5,.55+Math.sin(Qe*.9)*.04)),F.animRefs.screens&&F.animRefs.screens.forEach(ae=>{ae.isPl?ae.pl.intensity=.7+Math.sin(Qe*2.2+ae.phase)*.25:ae.isBar?ae.mat.emissiveIntensity=1.5+Math.sin(Qe*1.6+ae.phase)*.5:ae.mat&&(ae.mat.emissiveIntensity=.6+Math.sin(Qe*.8+ae.phase)*.15)}),F.animRefs.lampLight&&(F.animRefs.lampLight.intensity=F.comparisonMode?0:1.5+Math.sin(Qe*1.3)*.15),F.animRefs.heatmapDiscs&&F.animRefs.heatmapDiscs.forEach((ae,Q)=>{const De=F.heatmapMode?.22:0;ae.material.opacity=De*(1+Math.sin(Qe*.9+Q)*.35),ae.scale.setScalar(1+Math.sin(Qe*.7+Q*.8)*.08)}),F.animRefs.patients&&F.patientSimActive){const ae={seating:0,biophilic:0,digital:0,calm:0,reception:0};F.animRefs.patients.forEach(Q=>{if(Q.spawnTime||(Q.spawnTime=Le),Le-Q.spawnTime<Q.spawnDelay)return;const De=Q.group,Ve=(At,dn)=>{if(Math.sign(At.x)===Math.sign(dn.x)||At.x===0||dn.x===0)return null;const Rn=At.x/(At.x-dn.x),Zn=At.z+(dn.z-At.z)*Rn;return Zn>-4.25&&Zn<5.25?new J(At.x>0?.5:-.5,0,5.8):null};!Q.waypoint&&Q.state!=="dwelling"&&(Q.waypoint=Ve(De.position,Q.target));const lt=Q.waypoint||Q.target,Et=new J().subVectors(lt,De.position);Et.y=0;const Tt=Et.length();if(Q.waypoint&&Tt<.35&&(Q.waypoint=null),Q.state==="dwelling"){if(De.position.y=Math.abs(Math.sin(Qe*2+Q.bobPhase))*.02,Le>Q.dwellEnd)if(Math.random()<.2)Q.state="leaving",Q.target.set(-6+Math.random()*12,0,7),Q.zoneId=null;else{const At=Qt[Math.floor(Math.random()*Qt.length)];Q.state="walking";const dn=(Math.random()-.5)*1.5,Rn=(Math.random()-.5)*1.5;Q.target.set(At.pos[0]+dn,0,At.pos[2]+Rn),Q.waypoint=null,Q.zoneId=At.id,At.id==="calm"||At.id==="biophilic"?Q.stressLevel=Math.max(.1,Q.stressLevel-.25):At.id==="digital"&&(Q.stressLevel=Math.max(.2,Q.stressLevel-.1))}Q.zoneId&&(ae[Q.zoneId]=(ae[Q.zoneId]||0)+1)}else Tt<.25?Q.state==="leaving"?(Q.group.position.set(-6+Math.random()*12,0,6.2),Q.state="entering",Q.target.set(0,0,-5),Q.stressLevel=.7+Math.random()*.3):(Q.state="dwelling",Q.dwellEnd=Le+3e3+Math.random()*6e3):(Et.normalize(),De.position.addScaledVector(Et,Q.speed*(1+(1-Q.stressLevel)*.3)),De.rotation.y=Math.atan2(Et.x,Et.z),De.position.y=Math.abs(Math.sin(Qe*8+Q.bobPhase))*.04);De.children[1].material.color.setHSL(.08+(1-Q.stressLevel)*.2,.4,.65)}),(!F.lastOccUpdate||Le-F.lastOccUpdate>500)&&(F.lastOccUpdate=Le,Xe({...ae}))}if(F.splitScreen){const ae=oe.clientWidth,Q=oe.clientHeight,De=ae/2;F.renderer.setScissorTest(!0);const Ve=F.comparisonMode;pd(F.animRefs,!0),F.renderer.setScissor(0,0,De,Q),F.renderer.setViewport(0,0,De,Q),F.camera.aspect=De/Q,F.camera.updateProjectionMatrix(),F.scene.background&&F.scene.background.setHex(14212836),F.renderer.render(F.scene,F.camera),pd(F.animRefs,!1),F.renderer.setScissor(De,0,De,Q),F.renderer.setViewport(De,0,De,Q),F.scene.background&&F.scene.background.setHex(15589576),F.renderer.render(F.scene,F.camera),F.renderer.setScissorTest(!1),F.renderer.setViewport(0,0,ae,Q),F.camera.aspect=ae/Q,F.camera.updateProjectionMatrix(),pd(F.animRefs,Ve),F.scene.background&&F.scene.background.setHex(Ve?14212836:15589576)}else F.renderer.render(F.scene,F.camera)};Ft(0),R(90),setTimeout(()=>{f(!0),R(100)},400),oe.addEventListener("mousedown",Ne),window.addEventListener("mousemove",be),window.addEventListener("mouseup",dt),oe.addEventListener("click",yt),oe.addEventListener("wheel",ft,{passive:!0}),oe.addEventListener("touchstart",ve,{passive:!0}),oe.addEventListener("touchmove",je,{passive:!1}),oe.addEventListener("touchend",Ue,{passive:!0}),window.addEventListener("keydown",Ke),window.addEventListener("keyup",Me);const Dt=Le=>Le.preventDefault();oe.addEventListener("contextmenu",Dt);const vn=()=>{F.camera.aspect=oe.clientWidth/oe.clientHeight,F.camera.updateProjectionMatrix(),F.renderer.setSize(oe.clientWidth,oe.clientHeight)};return window.addEventListener("resize",vn),()=>{cancelAnimationFrame(F.frame),oe.removeEventListener("mousedown",Ne),oe.removeEventListener("contextmenu",Dt),window.removeEventListener("mousemove",be),window.removeEventListener("mouseup",dt),oe.removeEventListener("click",yt),oe.removeEventListener("wheel",ft),oe.removeEventListener("touchstart",ve),oe.removeEventListener("touchmove",je),oe.removeEventListener("touchend",Ue),window.removeEventListener("keydown",Ke),window.removeEventListener("keyup",Me),window.removeEventListener("resize",vn),oe.contains(F.renderer.domElement)&&oe.removeChild(F.renderer.domElement),F.renderer.dispose()}},[]);const un=n;if(g)return V.jsx("div",{style:{display:"flex",alignItems:"center",justifyContent:"center",width:"100vw",height:"100vh",background:"#16100A",color:"#F8EED8",fontFamily:"'DM Sans', sans-serif",textAlign:"center",padding:40},children:V.jsxs("div",{children:[V.jsx("div",{style:{fontSize:48,marginBottom:20},children:"⚠️"}),V.jsx("h1",{style:{fontSize:24,marginBottom:12},children:"WebGL Not Supported"}),V.jsx("p",{style:{color:"rgba(248,238,216,0.7)",maxWidth:400},children:"Your browser doesn't support WebGL, which is required for this 3D experience. Please try using a modern browser like Chrome, Firefox, or Safari."})]})});const G=xe>=0&&((Bt=wn[xe])==null?void 0:Bt.highlight)||null;return V.jsxs("div",{style:{position:"relative",width:"100vw",height:"100vh",overflow:"hidden",background:"#16100A"},children:[V.jsx("style",{children:`
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
      `}),V.jsx("div",{ref:r,style:{width:"100%",height:"100%",touchAction:"none"}}),V.jsx(tE,{isMobile:_,loaded:u,loadingProgress:T,activeZone:n,hovered:p,showHint:a,splitScreen:q,guidedTour:w,tourZoneIndex:j,setGuidedTour:I,comparisonMode:b,idlePrompt:rt,showWelcome:ze,showHelp:x,tutorialStep:xe,inspectorMode:me,patientSimActive:K,occupancy:ne,tourRef:e.current.tour}),V.jsx(nE,{isMobile:_,comparisonMode:b,setComparisonMode:L,showHelp:x,setShowHelp:y,onTutorialAction:ct,tutorialHighlight:G}),u&&!ze&&V.jsx($M,{activeZone:n,isMobile:_,handleZoom:oe=>{ct("click_zone"),ut.current(oe)},handleReset:Ut.current,tutorialHighlight:G}),u&&!ze&&xe<0&&(un||p)&&!_&&V.jsx(KM,{displayZone:un||p,activeZone:n,isMobile:_,goToAdjacentZone:Yt}),V.jsx(ZM,{loaded:u,welcomePhase:ce,setWelcomePhase:we,setShowWelcome:We,setTutorialStep:ke,isMobile:_}),V.jsx(JM,{tutorialStep:xe,setTutorialStep:ke,handleReset:Ut.current,isMobile:_}),V.jsx(iE,{showHelp:x,setShowHelp:y,isMobile:_,setTutorialStep:ke,setWelcomePhase:we}),V.jsx(QM,{isMobile:_,showTools:he,setShowTools:U,heatmapMode:P,setHeatmapMode:z,patientSimActive:K,setPatientSimActive:fe,guidedTour:w,setGuidedTour:I,splitScreen:q,setSplitScreen:le,inspectorMode:me,setInspectorMode:W,setInspectedItem:$,circadianTime:D,setCircadianTime:k,comparisonMode:b,onTutorialAction:ct,tutorialHighlight:G}),V.jsx(eE,{inspectedItem:te,setInspectedItem:$,isMobile:_})]})}C_.createRoot(document.getElementById("root")).render(V.jsx(rE,{}));
