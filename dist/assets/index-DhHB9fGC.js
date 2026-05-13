(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))s(a);new MutationObserver(a=>{for(const l of a)if(l.type==="childList")for(const u of l.addedNodes)u.tagName==="LINK"&&u.rel==="modulepreload"&&s(u)}).observe(document,{childList:!0,subtree:!0});function n(a){const l={};return a.integrity&&(l.integrity=a.integrity),a.referrerPolicy&&(l.referrerPolicy=a.referrerPolicy),a.crossOrigin==="use-credentials"?l.credentials="include":a.crossOrigin==="anonymous"?l.credentials="omit":l.credentials="same-origin",l}function s(a){if(a.ep)return;a.ep=!0;const l=n(a);fetch(a.href,l)}})();var Ru={exports:{}},Ko={},Pu={exports:{}},Ut={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Zp;function S_(){if(Zp)return Ut;Zp=1;var r=Symbol.for("react.element"),e=Symbol.for("react.portal"),n=Symbol.for("react.fragment"),s=Symbol.for("react.strict_mode"),a=Symbol.for("react.profiler"),l=Symbol.for("react.provider"),u=Symbol.for("react.context"),f=Symbol.for("react.forward_ref"),p=Symbol.for("react.suspense"),m=Symbol.for("react.memo"),x=Symbol.for("react.lazy"),S=Symbol.iterator;function g(F){return F===null||typeof F!="object"?null:(F=S&&F[S]||F["@@iterator"],typeof F=="function"?F:null)}var y={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},T=Object.assign,R={};function _(F,te,je){this.props=F,this.context=te,this.refs=R,this.updater=je||y}_.prototype.isReactComponent={},_.prototype.setState=function(F,te){if(typeof F!="object"&&typeof F!="function"&&F!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,F,te,"setState")},_.prototype.forceUpdate=function(F){this.updater.enqueueForceUpdate(this,F,"forceUpdate")};function v(){}v.prototype=_.prototype;function b(F,te,je){this.props=F,this.context=te,this.refs=R,this.updater=je||y}var L=b.prototype=new v;L.constructor=b,T(L,_.prototype),L.isPureReactComponent=!0;var P=Array.isArray,z=Object.prototype.hasOwnProperty,D={current:null},k={key:!0,ref:!0,__self:!0,__source:!0};function w(F,te,je){var De,Ye={},ae=null,Te=null;if(te!=null)for(De in te.ref!==void 0&&(Te=te.ref),te.key!==void 0&&(ae=""+te.key),te)z.call(te,De)&&!k.hasOwnProperty(De)&&(Ye[De]=te[De]);var ye=arguments.length-2;if(ye===1)Ye.children=je;else if(1<ye){for(var Ge=Array(ye),st=0;st<ye;st++)Ge[st]=arguments[st+2];Ye.children=Ge}if(F&&F.defaultProps)for(De in ye=F.defaultProps,ye)Ye[De]===void 0&&(Ye[De]=ye[De]);return{$$typeof:r,type:F,key:ae,ref:Te,props:Ye,_owner:D.current}}function I(F,te){return{$$typeof:r,type:F.type,key:te,ref:F.ref,props:F.props,_owner:F._owner}}function j(F){return typeof F=="object"&&F!==null&&F.$$typeof===r}function O(F){var te={"=":"=0",":":"=2"};return"$"+F.replace(/[=:]/g,function(je){return te[je]})}var q=/\/+/g;function oe(F,te){return typeof F=="object"&&F!==null&&F.key!=null?O(""+F.key):te.toString(36)}function pe(F,te,je,De,Ye){var ae=typeof F;(ae==="undefined"||ae==="boolean")&&(F=null);var Te=!1;if(F===null)Te=!0;else switch(ae){case"string":case"number":Te=!0;break;case"object":switch(F.$$typeof){case r:case e:Te=!0}}if(Te)return Te=F,Ye=Ye(Te),F=De===""?"."+oe(Te,0):De,P(Ye)?(je="",F!=null&&(je=F.replace(q,"$&/")+"/"),pe(Ye,te,je,"",function(st){return st})):Ye!=null&&(j(Ye)&&(Ye=I(Ye,je+(!Ye.key||Te&&Te.key===Ye.key?"":(""+Ye.key).replace(q,"$&/")+"/")+F)),te.push(Ye)),1;if(Te=0,De=De===""?".":De+":",P(F))for(var ye=0;ye<F.length;ye++){ae=F[ye];var Ge=De+oe(ae,ye);Te+=pe(ae,te,je,Ge,Ye)}else if(Ge=g(F),typeof Ge=="function")for(F=Ge.call(F),ye=0;!(ae=F.next()).done;)ae=ae.value,Ge=De+oe(ae,ye++),Te+=pe(ae,te,je,Ge,Ye);else if(ae==="object")throw te=String(F),Error("Objects are not valid as a React child (found: "+(te==="[object Object]"?"object with keys {"+Object.keys(F).join(", ")+"}":te)+"). If you meant to render a collection of children, use an array instead.");return Te}function W(F,te,je){if(F==null)return F;var De=[],Ye=0;return pe(F,De,"","",function(ae){return te.call(je,ae,Ye++)}),De}function ee(F){if(F._status===-1){var te=F._result;te=te(),te.then(function(je){(F._status===0||F._status===-1)&&(F._status=1,F._result=je)},function(je){(F._status===0||F._status===-1)&&(F._status=2,F._result=je)}),F._status===-1&&(F._status=0,F._result=te)}if(F._status===1)return F._result.default;throw F._result}var K={current:null},Z={transition:null},ue={ReactCurrentDispatcher:K,ReactCurrentBatchConfig:Z,ReactCurrentOwner:D};function de(){throw Error("act(...) is not supported in production builds of React.")}return Ut.Children={map:W,forEach:function(F,te,je){W(F,function(){te.apply(this,arguments)},je)},count:function(F){var te=0;return W(F,function(){te++}),te},toArray:function(F){return W(F,function(te){return te})||[]},only:function(F){if(!j(F))throw Error("React.Children.only expected to receive a single React element child.");return F}},Ut.Component=_,Ut.Fragment=n,Ut.Profiler=a,Ut.PureComponent=b,Ut.StrictMode=s,Ut.Suspense=p,Ut.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=ue,Ut.act=de,Ut.cloneElement=function(F,te,je){if(F==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+F+".");var De=T({},F.props),Ye=F.key,ae=F.ref,Te=F._owner;if(te!=null){if(te.ref!==void 0&&(ae=te.ref,Te=D.current),te.key!==void 0&&(Ye=""+te.key),F.type&&F.type.defaultProps)var ye=F.type.defaultProps;for(Ge in te)z.call(te,Ge)&&!k.hasOwnProperty(Ge)&&(De[Ge]=te[Ge]===void 0&&ye!==void 0?ye[Ge]:te[Ge])}var Ge=arguments.length-2;if(Ge===1)De.children=je;else if(1<Ge){ye=Array(Ge);for(var st=0;st<Ge;st++)ye[st]=arguments[st+2];De.children=ye}return{$$typeof:r,type:F.type,key:Ye,ref:ae,props:De,_owner:Te}},Ut.createContext=function(F){return F={$$typeof:u,_currentValue:F,_currentValue2:F,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},F.Provider={$$typeof:l,_context:F},F.Consumer=F},Ut.createElement=w,Ut.createFactory=function(F){var te=w.bind(null,F);return te.type=F,te},Ut.createRef=function(){return{current:null}},Ut.forwardRef=function(F){return{$$typeof:f,render:F}},Ut.isValidElement=j,Ut.lazy=function(F){return{$$typeof:x,_payload:{_status:-1,_result:F},_init:ee}},Ut.memo=function(F,te){return{$$typeof:m,type:F,compare:te===void 0?null:te}},Ut.startTransition=function(F){var te=Z.transition;Z.transition={};try{F()}finally{Z.transition=te}},Ut.unstable_act=de,Ut.useCallback=function(F,te){return K.current.useCallback(F,te)},Ut.useContext=function(F){return K.current.useContext(F)},Ut.useDebugValue=function(){},Ut.useDeferredValue=function(F){return K.current.useDeferredValue(F)},Ut.useEffect=function(F,te){return K.current.useEffect(F,te)},Ut.useId=function(){return K.current.useId()},Ut.useImperativeHandle=function(F,te,je){return K.current.useImperativeHandle(F,te,je)},Ut.useInsertionEffect=function(F,te){return K.current.useInsertionEffect(F,te)},Ut.useLayoutEffect=function(F,te){return K.current.useLayoutEffect(F,te)},Ut.useMemo=function(F,te){return K.current.useMemo(F,te)},Ut.useReducer=function(F,te,je){return K.current.useReducer(F,te,je)},Ut.useRef=function(F){return K.current.useRef(F)},Ut.useState=function(F){return K.current.useState(F)},Ut.useSyncExternalStore=function(F,te,je){return K.current.useSyncExternalStore(F,te,je)},Ut.useTransition=function(){return K.current.useTransition()},Ut.version="18.3.1",Ut}var Jp;function cf(){return Jp||(Jp=1,Pu.exports=S_()),Pu.exports}/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Qp;function y_(){if(Qp)return Ko;Qp=1;var r=cf(),e=Symbol.for("react.element"),n=Symbol.for("react.fragment"),s=Object.prototype.hasOwnProperty,a=r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,l={key:!0,ref:!0,__self:!0,__source:!0};function u(f,p,m){var x,S={},g=null,y=null;m!==void 0&&(g=""+m),p.key!==void 0&&(g=""+p.key),p.ref!==void 0&&(y=p.ref);for(x in p)s.call(p,x)&&!l.hasOwnProperty(x)&&(S[x]=p[x]);if(f&&f.defaultProps)for(x in p=f.defaultProps,p)S[x]===void 0&&(S[x]=p[x]);return{$$typeof:e,type:f,key:g,ref:y,props:S,_owner:a.current}}return Ko.Fragment=n,Ko.jsx=u,Ko.jsxs=u,Ko}var em;function M_(){return em||(em=1,Ru.exports=y_()),Ru.exports}var V=M_(),hl={},Lu={exports:{}},si={},Du={exports:{}},Iu={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var tm;function E_(){return tm||(tm=1,(function(r){function e(Z,ue){var de=Z.length;Z.push(ue);e:for(;0<de;){var F=de-1>>>1,te=Z[F];if(0<a(te,ue))Z[F]=ue,Z[de]=te,de=F;else break e}}function n(Z){return Z.length===0?null:Z[0]}function s(Z){if(Z.length===0)return null;var ue=Z[0],de=Z.pop();if(de!==ue){Z[0]=de;e:for(var F=0,te=Z.length,je=te>>>1;F<je;){var De=2*(F+1)-1,Ye=Z[De],ae=De+1,Te=Z[ae];if(0>a(Ye,de))ae<te&&0>a(Te,Ye)?(Z[F]=Te,Z[ae]=de,F=ae):(Z[F]=Ye,Z[De]=de,F=De);else if(ae<te&&0>a(Te,de))Z[F]=Te,Z[ae]=de,F=ae;else break e}}return ue}function a(Z,ue){var de=Z.sortIndex-ue.sortIndex;return de!==0?de:Z.id-ue.id}if(typeof performance=="object"&&typeof performance.now=="function"){var l=performance;r.unstable_now=function(){return l.now()}}else{var u=Date,f=u.now();r.unstable_now=function(){return u.now()-f}}var p=[],m=[],x=1,S=null,g=3,y=!1,T=!1,R=!1,_=typeof setTimeout=="function"?setTimeout:null,v=typeof clearTimeout=="function"?clearTimeout:null,b=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function L(Z){for(var ue=n(m);ue!==null;){if(ue.callback===null)s(m);else if(ue.startTime<=Z)s(m),ue.sortIndex=ue.expirationTime,e(p,ue);else break;ue=n(m)}}function P(Z){if(R=!1,L(Z),!T)if(n(p)!==null)T=!0,ee(z);else{var ue=n(m);ue!==null&&K(P,ue.startTime-Z)}}function z(Z,ue){T=!1,R&&(R=!1,v(w),w=-1),y=!0;var de=g;try{for(L(ue),S=n(p);S!==null&&(!(S.expirationTime>ue)||Z&&!O());){var F=S.callback;if(typeof F=="function"){S.callback=null,g=S.priorityLevel;var te=F(S.expirationTime<=ue);ue=r.unstable_now(),typeof te=="function"?S.callback=te:S===n(p)&&s(p),L(ue)}else s(p);S=n(p)}if(S!==null)var je=!0;else{var De=n(m);De!==null&&K(P,De.startTime-ue),je=!1}return je}finally{S=null,g=de,y=!1}}var D=!1,k=null,w=-1,I=5,j=-1;function O(){return!(r.unstable_now()-j<I)}function q(){if(k!==null){var Z=r.unstable_now();j=Z;var ue=!0;try{ue=k(!0,Z)}finally{ue?oe():(D=!1,k=null)}}else D=!1}var oe;if(typeof b=="function")oe=function(){b(q)};else if(typeof MessageChannel<"u"){var pe=new MessageChannel,W=pe.port2;pe.port1.onmessage=q,oe=function(){W.postMessage(null)}}else oe=function(){_(q,0)};function ee(Z){k=Z,D||(D=!0,oe())}function K(Z,ue){w=_(function(){Z(r.unstable_now())},ue)}r.unstable_IdlePriority=5,r.unstable_ImmediatePriority=1,r.unstable_LowPriority=4,r.unstable_NormalPriority=3,r.unstable_Profiling=null,r.unstable_UserBlockingPriority=2,r.unstable_cancelCallback=function(Z){Z.callback=null},r.unstable_continueExecution=function(){T||y||(T=!0,ee(z))},r.unstable_forceFrameRate=function(Z){0>Z||125<Z?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):I=0<Z?Math.floor(1e3/Z):5},r.unstable_getCurrentPriorityLevel=function(){return g},r.unstable_getFirstCallbackNode=function(){return n(p)},r.unstable_next=function(Z){switch(g){case 1:case 2:case 3:var ue=3;break;default:ue=g}var de=g;g=ue;try{return Z()}finally{g=de}},r.unstable_pauseExecution=function(){},r.unstable_requestPaint=function(){},r.unstable_runWithPriority=function(Z,ue){switch(Z){case 1:case 2:case 3:case 4:case 5:break;default:Z=3}var de=g;g=Z;try{return ue()}finally{g=de}},r.unstable_scheduleCallback=function(Z,ue,de){var F=r.unstable_now();switch(typeof de=="object"&&de!==null?(de=de.delay,de=typeof de=="number"&&0<de?F+de:F):de=F,Z){case 1:var te=-1;break;case 2:te=250;break;case 5:te=1073741823;break;case 4:te=1e4;break;default:te=5e3}return te=de+te,Z={id:x++,callback:ue,priorityLevel:Z,startTime:de,expirationTime:te,sortIndex:-1},de>F?(Z.sortIndex=de,e(m,Z),n(p)===null&&Z===n(m)&&(R?(v(w),w=-1):R=!0,K(P,de-F))):(Z.sortIndex=te,e(p,Z),T||y||(T=!0,ee(z))),Z},r.unstable_shouldYield=O,r.unstable_wrapCallback=function(Z){var ue=g;return function(){var de=g;g=ue;try{return Z.apply(this,arguments)}finally{g=de}}}})(Iu)),Iu}var nm;function w_(){return nm||(nm=1,Du.exports=E_()),Du.exports}/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var im;function T_(){if(im)return si;im=1;var r=cf(),e=w_();function n(t){for(var i="https://reactjs.org/docs/error-decoder.html?invariant="+t,o=1;o<arguments.length;o++)i+="&args[]="+encodeURIComponent(arguments[o]);return"Minified React error #"+t+"; visit "+i+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var s=new Set,a={};function l(t,i){u(t,i),u(t+"Capture",i)}function u(t,i){for(a[t]=i,t=0;t<i.length;t++)s.add(i[t])}var f=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),p=Object.prototype.hasOwnProperty,m=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,x={},S={};function g(t){return p.call(S,t)?!0:p.call(x,t)?!1:m.test(t)?S[t]=!0:(x[t]=!0,!1)}function y(t,i,o,c){if(o!==null&&o.type===0)return!1;switch(typeof i){case"function":case"symbol":return!0;case"boolean":return c?!1:o!==null?!o.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function T(t,i,o,c){if(i===null||typeof i>"u"||y(t,i,o,c))return!0;if(c)return!1;if(o!==null)switch(o.type){case 3:return!i;case 4:return i===!1;case 5:return isNaN(i);case 6:return isNaN(i)||1>i}return!1}function R(t,i,o,c,d,h,E){this.acceptsBooleans=i===2||i===3||i===4,this.attributeName=c,this.attributeNamespace=d,this.mustUseProperty=o,this.propertyName=t,this.type=i,this.sanitizeURL=h,this.removeEmptyString=E}var _={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){_[t]=new R(t,0,!1,t,null,!1,!1)}),[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var i=t[0];_[i]=new R(i,1,!1,t[1],null,!1,!1)}),["contentEditable","draggable","spellCheck","value"].forEach(function(t){_[t]=new R(t,2,!1,t.toLowerCase(),null,!1,!1)}),["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){_[t]=new R(t,2,!1,t,null,!1,!1)}),"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){_[t]=new R(t,3,!1,t.toLowerCase(),null,!1,!1)}),["checked","multiple","muted","selected"].forEach(function(t){_[t]=new R(t,3,!0,t,null,!1,!1)}),["capture","download"].forEach(function(t){_[t]=new R(t,4,!1,t,null,!1,!1)}),["cols","rows","size","span"].forEach(function(t){_[t]=new R(t,6,!1,t,null,!1,!1)}),["rowSpan","start"].forEach(function(t){_[t]=new R(t,5,!1,t.toLowerCase(),null,!1,!1)});var v=/[\-:]([a-z])/g;function b(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var i=t.replace(v,b);_[i]=new R(i,1,!1,t,null,!1,!1)}),"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var i=t.replace(v,b);_[i]=new R(i,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)}),["xml:base","xml:lang","xml:space"].forEach(function(t){var i=t.replace(v,b);_[i]=new R(i,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)}),["tabIndex","crossOrigin"].forEach(function(t){_[t]=new R(t,1,!1,t.toLowerCase(),null,!1,!1)}),_.xlinkHref=new R("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1),["src","href","action","formAction"].forEach(function(t){_[t]=new R(t,1,!1,t.toLowerCase(),null,!0,!0)});function L(t,i,o,c){var d=_.hasOwnProperty(i)?_[i]:null;(d!==null?d.type!==0:c||!(2<i.length)||i[0]!=="o"&&i[0]!=="O"||i[1]!=="n"&&i[1]!=="N")&&(T(i,o,d,c)&&(o=null),c||d===null?g(i)&&(o===null?t.removeAttribute(i):t.setAttribute(i,""+o)):d.mustUseProperty?t[d.propertyName]=o===null?d.type===3?!1:"":o:(i=d.attributeName,c=d.attributeNamespace,o===null?t.removeAttribute(i):(d=d.type,o=d===3||d===4&&o===!0?"":""+o,c?t.setAttributeNS(c,i,o):t.setAttribute(i,o))))}var P=r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,z=Symbol.for("react.element"),D=Symbol.for("react.portal"),k=Symbol.for("react.fragment"),w=Symbol.for("react.strict_mode"),I=Symbol.for("react.profiler"),j=Symbol.for("react.provider"),O=Symbol.for("react.context"),q=Symbol.for("react.forward_ref"),oe=Symbol.for("react.suspense"),pe=Symbol.for("react.suspense_list"),W=Symbol.for("react.memo"),ee=Symbol.for("react.lazy"),K=Symbol.for("react.offscreen"),Z=Symbol.iterator;function ue(t){return t===null||typeof t!="object"?null:(t=Z&&t[Z]||t["@@iterator"],typeof t=="function"?t:null)}var de=Object.assign,F;function te(t){if(F===void 0)try{throw Error()}catch(o){var i=o.stack.trim().match(/\n( *(at )?)/);F=i&&i[1]||""}return`
`+F+t}var je=!1;function De(t,i){if(!t||je)return"";je=!0;var o=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(i)if(i=function(){throw Error()},Object.defineProperty(i.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(i,[])}catch(ce){var c=ce}Reflect.construct(t,[],i)}else{try{i.call()}catch(ce){c=ce}t.call(i.prototype)}else{try{throw Error()}catch(ce){c=ce}t()}}catch(ce){if(ce&&c&&typeof ce.stack=="string"){for(var d=ce.stack.split(`
`),h=c.stack.split(`
`),E=d.length-1,U=h.length-1;1<=E&&0<=U&&d[E]!==h[U];)U--;for(;1<=E&&0<=U;E--,U--)if(d[E]!==h[U]){if(E!==1||U!==1)do if(E--,U--,0>U||d[E]!==h[U]){var H=`
`+d[E].replace(" at new "," at ");return t.displayName&&H.includes("<anonymous>")&&(H=H.replace("<anonymous>",t.displayName)),H}while(1<=E&&0<=U);break}}}finally{je=!1,Error.prepareStackTrace=o}return(t=t?t.displayName||t.name:"")?te(t):""}function Ye(t){switch(t.tag){case 5:return te(t.type);case 16:return te("Lazy");case 13:return te("Suspense");case 19:return te("SuspenseList");case 0:case 2:case 15:return t=De(t.type,!1),t;case 11:return t=De(t.type.render,!1),t;case 1:return t=De(t.type,!0),t;default:return""}}function ae(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case k:return"Fragment";case D:return"Portal";case I:return"Profiler";case w:return"StrictMode";case oe:return"Suspense";case pe:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case O:return(t.displayName||"Context")+".Consumer";case j:return(t._context.displayName||"Context")+".Provider";case q:var i=t.render;return t=t.displayName,t||(t=i.displayName||i.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case W:return i=t.displayName||null,i!==null?i:ae(t.type)||"Memo";case ee:i=t._payload,t=t._init;try{return ae(t(i))}catch{}}return null}function Te(t){var i=t.type;switch(t.tag){case 24:return"Cache";case 9:return(i.displayName||"Context")+".Consumer";case 10:return(i._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=i.render,t=t.displayName||t.name||"",i.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return i;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return ae(i);case 8:return i===w?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof i=="function")return i.displayName||i.name||null;if(typeof i=="string")return i}return null}function ye(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function Ge(t){var i=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(i==="checkbox"||i==="radio")}function st(t){var i=Ge(t)?"checked":"value",o=Object.getOwnPropertyDescriptor(t.constructor.prototype,i),c=""+t[i];if(!t.hasOwnProperty(i)&&typeof o<"u"&&typeof o.get=="function"&&typeof o.set=="function"){var d=o.get,h=o.set;return Object.defineProperty(t,i,{configurable:!0,get:function(){return d.call(this)},set:function(E){c=""+E,h.call(this,E)}}),Object.defineProperty(t,i,{enumerable:o.enumerable}),{getValue:function(){return c},setValue:function(E){c=""+E},stopTracking:function(){t._valueTracker=null,delete t[i]}}}}function ot(t){t._valueTracker||(t._valueTracker=st(t))}function Ft(t){if(!t)return!1;var i=t._valueTracker;if(!i)return!0;var o=i.getValue(),c="";return t&&(c=Ge(t)?t.checked?"true":"false":t.value),t=c,t!==o?(i.setValue(t),!0):!1}function ht(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function Pt(t,i){var o=i.checked;return de({},i,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:o??t._wrapperState.initialChecked})}function kt(t,i){var o=i.defaultValue==null?"":i.defaultValue,c=i.checked!=null?i.checked:i.defaultChecked;o=ye(i.value!=null?i.value:o),t._wrapperState={initialChecked:c,initialValue:o,controlled:i.type==="checkbox"||i.type==="radio"?i.checked!=null:i.value!=null}}function dt(t,i){i=i.checked,i!=null&&L(t,"checked",i,!1)}function Xt(t,i){dt(t,i);var o=ye(i.value),c=i.type;if(o!=null)c==="number"?(o===0&&t.value===""||t.value!=o)&&(t.value=""+o):t.value!==""+o&&(t.value=""+o);else if(c==="submit"||c==="reset"){t.removeAttribute("value");return}i.hasOwnProperty("value")?Qt(t,i.type,o):i.hasOwnProperty("defaultValue")&&Qt(t,i.type,ye(i.defaultValue)),i.checked==null&&i.defaultChecked!=null&&(t.defaultChecked=!!i.defaultChecked)}function Yt(t,i,o){if(i.hasOwnProperty("value")||i.hasOwnProperty("defaultValue")){var c=i.type;if(!(c!=="submit"&&c!=="reset"||i.value!==void 0&&i.value!==null))return;i=""+t._wrapperState.initialValue,o||i===t.value||(t.value=i),t.defaultValue=i}o=t.name,o!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,o!==""&&(t.name=o)}function Qt(t,i,o){(i!=="number"||ht(t.ownerDocument)!==t)&&(o==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+o&&(t.defaultValue=""+o))}var G=Array.isArray;function he(t,i,o,c){if(t=t.options,i){i={};for(var d=0;d<o.length;d++)i["$"+o[d]]=!0;for(o=0;o<t.length;o++)d=i.hasOwnProperty("$"+t[o].value),t[o].selected!==d&&(t[o].selected=d),d&&c&&(t[o].defaultSelected=!0)}else{for(o=""+ye(o),i=null,d=0;d<t.length;d++){if(t[d].value===o){t[d].selected=!0,c&&(t[d].defaultSelected=!0);return}i!==null||t[d].disabled||(i=t[d])}i!==null&&(i.selected=!0)}}function N(t,i){if(i.dangerouslySetInnerHTML!=null)throw Error(n(91));return de({},i,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function _t(t,i){var o=i.value;if(o==null){if(o=i.children,i=i.defaultValue,o!=null){if(i!=null)throw Error(n(92));if(G(o)){if(1<o.length)throw Error(n(93));o=o[0]}i=o}i==null&&(i=""),o=i}t._wrapperState={initialValue:ye(o)}}function Fe(t,i){var o=ye(i.value),c=ye(i.defaultValue);o!=null&&(o=""+o,o!==t.value&&(t.value=o),i.defaultValue==null&&t.defaultValue!==o&&(t.defaultValue=o)),c!=null&&(t.defaultValue=""+c)}function Rt(t){var i=t.textContent;i===t._wrapperState.initialValue&&i!==""&&i!==null&&(t.value=i)}function C(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function M(t,i){return t==null||t==="http://www.w3.org/1999/xhtml"?C(i):t==="http://www.w3.org/2000/svg"&&i==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var Y,me=(function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(i,o,c,d){MSApp.execUnsafeLocalFunction(function(){return t(i,o,c,d)})}:t})(function(t,i){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=i;else{for(Y=Y||document.createElement("div"),Y.innerHTML="<svg>"+i.valueOf().toString()+"</svg>",i=Y.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;i.firstChild;)t.appendChild(i.firstChild)}});function Ee(t,i){if(i){var o=t.firstChild;if(o&&o===t.lastChild&&o.nodeType===3){o.nodeValue=i;return}}t.textContent=i}var be={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Pe=["Webkit","ms","Moz","O"];Object.keys(be).forEach(function(t){Pe.forEach(function(i){i=i+t.charAt(0).toUpperCase()+t.substring(1),be[i]=be[t]})});function fe(t,i,o){return i==null||typeof i=="boolean"||i===""?"":o||typeof i!="number"||i===0||be.hasOwnProperty(t)&&be[t]?(""+i).trim():i+"px"}function xe(t,i){t=t.style;for(var o in i)if(i.hasOwnProperty(o)){var c=o.indexOf("--")===0,d=fe(o,i[o],c);o==="float"&&(o="cssFloat"),c?t.setProperty(o,d):t[o]=d}}var Ve=de({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function $e(t,i){if(i){if(Ve[t]&&(i.children!=null||i.dangerouslySetInnerHTML!=null))throw Error(n(137,t));if(i.dangerouslySetInnerHTML!=null){if(i.children!=null)throw Error(n(60));if(typeof i.dangerouslySetInnerHTML!="object"||!("__html"in i.dangerouslySetInnerHTML))throw Error(n(61))}if(i.style!=null&&typeof i.style!="object")throw Error(n(62))}}function Oe(t,i){if(t.indexOf("-")===-1)return typeof i.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Ie=null;function ft(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var vt=null,xt=null,B=null;function Ne(t){if(t=Uo(t)){if(typeof vt!="function")throw Error(n(280));var i=t.stateNode;i&&(i=Ca(i),vt(t.stateNode,t.type,i))}}function ve(t){xt?B?B.push(t):B=[t]:xt=t}function qe(){if(xt){var t=xt,i=B;if(B=xt=null,Ne(t),i)for(t=0;t<i.length;t++)Ne(i[t])}}function ke(t,i){return t(i)}function we(){}var Xe=!1;function pt(t,i,o){if(Xe)return t(i,o);Xe=!0;try{return ke(t,i,o)}finally{Xe=!1,(xt!==null||B!==null)&&(we(),qe())}}function Se(t,i){var o=t.stateNode;if(o===null)return null;var c=Ca(o);if(c===null)return null;o=c[i];e:switch(i){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(c=!c.disabled)||(t=t.type,c=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!c;break e;default:t=!1}if(t)return null;if(o&&typeof o!="function")throw Error(n(231,i,typeof o));return o}var _e=!1;if(f)try{var ne={};Object.defineProperty(ne,"passive",{get:function(){_e=!0}}),window.addEventListener("test",ne,ne),window.removeEventListener("test",ne,ne)}catch{_e=!1}function Be(t,i,o,c,d,h,E,U,H){var ce=Array.prototype.slice.call(arguments,3);try{i.apply(o,ce)}catch(Re){this.onError(Re)}}var Me=!1,ge=null,Ue=!1,ut=null,At={onError:function(t){Me=!0,ge=t}};function bt(t,i,o,c,d,h,E,U,H){Me=!1,ge=null,Be.apply(At,arguments)}function _n(t,i,o,c,d,h,E,U,H){if(bt.apply(this,arguments),Me){if(Me){var ce=ge;Me=!1,ge=null}else throw Error(n(198));Ue||(Ue=!0,ut=ce)}}function en(t){var i=t,o=t;if(t.alternate)for(;i.return;)i=i.return;else{t=i;do i=t,(i.flags&4098)!==0&&(o=i.return),t=i.return;while(t)}return i.tag===3?o:null}function Cn(t){if(t.tag===13){var i=t.memoizedState;if(i===null&&(t=t.alternate,t!==null&&(i=t.memoizedState)),i!==null)return i.dehydrated}return null}function Ot(t){if(en(t)!==t)throw Error(n(188))}function rn(t){var i=t.alternate;if(!i){if(i=en(t),i===null)throw Error(n(188));return i!==t?null:t}for(var o=t,c=i;;){var d=o.return;if(d===null)break;var h=d.alternate;if(h===null){if(c=d.return,c!==null){o=c;continue}break}if(d.child===h.child){for(h=d.child;h;){if(h===o)return Ot(d),t;if(h===c)return Ot(d),i;h=h.sibling}throw Error(n(188))}if(o.return!==c.return)o=d,c=h;else{for(var E=!1,U=d.child;U;){if(U===o){E=!0,o=d,c=h;break}if(U===c){E=!0,c=d,o=h;break}U=U.sibling}if(!E){for(U=h.child;U;){if(U===o){E=!0,o=h,c=d;break}if(U===c){E=!0,c=h,o=d;break}U=U.sibling}if(!E)throw Error(n(189))}}if(o.alternate!==c)throw Error(n(190))}if(o.tag!==3)throw Error(n(188));return o.stateNode.current===o?t:i}function Rn(t){return t=rn(t),t!==null?Pn(t):null}function Pn(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var i=Pn(t);if(i!==null)return i;t=t.sibling}return null}var tr=e.unstable_scheduleCallback,Zr=e.unstable_cancelCallback,Es=e.unstable_shouldYield,ws=e.unstable_requestPaint,dn=e.unstable_now,ec=e.unstable_getCurrentPriorityLevel,vo=e.unstable_ImmediatePriority,A=e.unstable_UserBlockingPriority,$=e.unstable_NormalPriority,le=e.unstable_LowPriority,re=e.unstable_IdlePriority,ie=null,We=null;function Qe(t){if(We&&typeof We.onCommitFiberRoot=="function")try{We.onCommitFiberRoot(ie,t,void 0,(t.current.flags&128)===128)}catch{}}var He=Math.clz32?Math.clz32:wt,it=Math.log,ct=Math.LN2;function wt(t){return t>>>=0,t===0?32:31-(it(t)/ct|0)|0}var Tt=64,at=4194304;function Vt(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function tn(t,i){var o=t.pendingLanes;if(o===0)return 0;var c=0,d=t.suspendedLanes,h=t.pingedLanes,E=o&268435455;if(E!==0){var U=E&~d;U!==0?c=Vt(U):(h&=E,h!==0&&(c=Vt(h)))}else E=o&~d,E!==0?c=Vt(E):h!==0&&(c=Vt(h));if(c===0)return 0;if(i!==0&&i!==c&&(i&d)===0&&(d=c&-c,h=i&-i,d>=h||d===16&&(h&4194240)!==0))return i;if((c&4)!==0&&(c|=o&16),i=t.entangledLanes,i!==0)for(t=t.entanglements,i&=c;0<i;)o=31-He(i),d=1<<o,c|=t[o],i&=~d;return c}function ln(t,i){switch(t){case 1:case 2:case 4:return i+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return i+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function $t(t,i){for(var o=t.suspendedLanes,c=t.pingedLanes,d=t.expirationTimes,h=t.pendingLanes;0<h;){var E=31-He(h),U=1<<E,H=d[E];H===-1?((U&o)===0||(U&c)!==0)&&(d[E]=ln(U,i)):H<=i&&(t.expiredLanes|=U),h&=~U}}function Sn(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function Ze(){var t=Tt;return Tt<<=1,(Tt&4194240)===0&&(Tt=64),t}function Fn(t){for(var i=[],o=0;31>o;o++)i.push(t);return i}function It(t,i,o){t.pendingLanes|=i,i!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,i=31-He(i),t[i]=o}function Jn(t,i){var o=t.pendingLanes&~i;t.pendingLanes=i,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=i,t.mutableReadLanes&=i,t.entangledLanes&=i,i=t.entanglements;var c=t.eventTimes;for(t=t.expirationTimes;0<o;){var d=31-He(o),h=1<<d;i[d]=0,c[d]=-1,t[d]=-1,o&=~h}}function Qn(t,i){var o=t.entangledLanes|=i;for(t=t.entanglements;o;){var c=31-He(o),d=1<<c;d&i|t[c]&i&&(t[c]|=i),o&=~d}}var Nt=0;function nr(t){return t&=-t,1<t?4<t?(t&268435455)!==0?16:536870912:4:1}var qt,sn,Ai,Kt,bi,Bi=!1,Jr=[],yr=null,Mr=null,Er=null,xo=new Map,So=new Map,wr=[],V0="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Nf(t,i){switch(t){case"focusin":case"focusout":yr=null;break;case"dragenter":case"dragleave":Mr=null;break;case"mouseover":case"mouseout":Er=null;break;case"pointerover":case"pointerout":xo.delete(i.pointerId);break;case"gotpointercapture":case"lostpointercapture":So.delete(i.pointerId)}}function yo(t,i,o,c,d,h){return t===null||t.nativeEvent!==h?(t={blockedOn:i,domEventName:o,eventSystemFlags:c,nativeEvent:h,targetContainers:[d]},i!==null&&(i=Uo(i),i!==null&&sn(i)),t):(t.eventSystemFlags|=c,i=t.targetContainers,d!==null&&i.indexOf(d)===-1&&i.push(d),t)}function G0(t,i,o,c,d){switch(i){case"focusin":return yr=yo(yr,t,i,o,c,d),!0;case"dragenter":return Mr=yo(Mr,t,i,o,c,d),!0;case"mouseover":return Er=yo(Er,t,i,o,c,d),!0;case"pointerover":var h=d.pointerId;return xo.set(h,yo(xo.get(h)||null,t,i,o,c,d)),!0;case"gotpointercapture":return h=d.pointerId,So.set(h,yo(So.get(h)||null,t,i,o,c,d)),!0}return!1}function Uf(t){var i=Qr(t.target);if(i!==null){var o=en(i);if(o!==null){if(i=o.tag,i===13){if(i=Cn(o),i!==null){t.blockedOn=i,bi(t.priority,function(){Ai(o)});return}}else if(i===3&&o.stateNode.current.memoizedState.isDehydrated){t.blockedOn=o.tag===3?o.stateNode.containerInfo:null;return}}}t.blockedOn=null}function pa(t){if(t.blockedOn!==null)return!1;for(var i=t.targetContainers;0<i.length;){var o=nc(t.domEventName,t.eventSystemFlags,i[0],t.nativeEvent);if(o===null){o=t.nativeEvent;var c=new o.constructor(o.type,o);Ie=c,o.target.dispatchEvent(c),Ie=null}else return i=Uo(o),i!==null&&sn(i),t.blockedOn=o,!1;i.shift()}return!0}function Ff(t,i,o){pa(t)&&o.delete(i)}function W0(){Bi=!1,yr!==null&&pa(yr)&&(yr=null),Mr!==null&&pa(Mr)&&(Mr=null),Er!==null&&pa(Er)&&(Er=null),xo.forEach(Ff),So.forEach(Ff)}function Mo(t,i){t.blockedOn===i&&(t.blockedOn=null,Bi||(Bi=!0,e.unstable_scheduleCallback(e.unstable_NormalPriority,W0)))}function Eo(t){function i(d){return Mo(d,t)}if(0<Jr.length){Mo(Jr[0],t);for(var o=1;o<Jr.length;o++){var c=Jr[o];c.blockedOn===t&&(c.blockedOn=null)}}for(yr!==null&&Mo(yr,t),Mr!==null&&Mo(Mr,t),Er!==null&&Mo(Er,t),xo.forEach(i),So.forEach(i),o=0;o<wr.length;o++)c=wr[o],c.blockedOn===t&&(c.blockedOn=null);for(;0<wr.length&&(o=wr[0],o.blockedOn===null);)Uf(o),o.blockedOn===null&&wr.shift()}var Ts=P.ReactCurrentBatchConfig,ma=!0;function X0(t,i,o,c){var d=Nt,h=Ts.transition;Ts.transition=null;try{Nt=1,tc(t,i,o,c)}finally{Nt=d,Ts.transition=h}}function j0(t,i,o,c){var d=Nt,h=Ts.transition;Ts.transition=null;try{Nt=4,tc(t,i,o,c)}finally{Nt=d,Ts.transition=h}}function tc(t,i,o,c){if(ma){var d=nc(t,i,o,c);if(d===null)xc(t,i,c,ga,o),Nf(t,c);else if(G0(d,t,i,o,c))c.stopPropagation();else if(Nf(t,c),i&4&&-1<V0.indexOf(t)){for(;d!==null;){var h=Uo(d);if(h!==null&&qt(h),h=nc(t,i,o,c),h===null&&xc(t,i,c,ga,o),h===d)break;d=h}d!==null&&c.stopPropagation()}else xc(t,i,c,null,o)}}var ga=null;function nc(t,i,o,c){if(ga=null,t=ft(c),t=Qr(t),t!==null)if(i=en(t),i===null)t=null;else if(o=i.tag,o===13){if(t=Cn(i),t!==null)return t;t=null}else if(o===3){if(i.stateNode.current.memoizedState.isDehydrated)return i.tag===3?i.stateNode.containerInfo:null;t=null}else i!==t&&(t=null);return ga=t,null}function Of(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(ec()){case vo:return 1;case A:return 4;case $:case le:return 16;case re:return 536870912;default:return 16}default:return 16}}var Tr=null,ic=null,_a=null;function kf(){if(_a)return _a;var t,i=ic,o=i.length,c,d="value"in Tr?Tr.value:Tr.textContent,h=d.length;for(t=0;t<o&&i[t]===d[t];t++);var E=o-t;for(c=1;c<=E&&i[o-c]===d[h-c];c++);return _a=d.slice(t,1<c?1-c:void 0)}function va(t){var i=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&i===13&&(t=13)):t=i,t===10&&(t=13),32<=t||t===13?t:0}function xa(){return!0}function Bf(){return!1}function ci(t){function i(o,c,d,h,E){this._reactName=o,this._targetInst=d,this.type=c,this.nativeEvent=h,this.target=E,this.currentTarget=null;for(var U in t)t.hasOwnProperty(U)&&(o=t[U],this[U]=o?o(h):h[U]);return this.isDefaultPrevented=(h.defaultPrevented!=null?h.defaultPrevented:h.returnValue===!1)?xa:Bf,this.isPropagationStopped=Bf,this}return de(i.prototype,{preventDefault:function(){this.defaultPrevented=!0;var o=this.nativeEvent;o&&(o.preventDefault?o.preventDefault():typeof o.returnValue!="unknown"&&(o.returnValue=!1),this.isDefaultPrevented=xa)},stopPropagation:function(){var o=this.nativeEvent;o&&(o.stopPropagation?o.stopPropagation():typeof o.cancelBubble!="unknown"&&(o.cancelBubble=!0),this.isPropagationStopped=xa)},persist:function(){},isPersistent:xa}),i}var As={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},rc=ci(As),wo=de({},As,{view:0,detail:0}),Y0=ci(wo),sc,oc,To,Sa=de({},wo,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:lc,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==To&&(To&&t.type==="mousemove"?(sc=t.screenX-To.screenX,oc=t.screenY-To.screenY):oc=sc=0,To=t),sc)},movementY:function(t){return"movementY"in t?t.movementY:oc}}),zf=ci(Sa),q0=de({},Sa,{dataTransfer:0}),$0=ci(q0),K0=de({},wo,{relatedTarget:0}),ac=ci(K0),Z0=de({},As,{animationName:0,elapsedTime:0,pseudoElement:0}),J0=ci(Z0),Q0=de({},As,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),eg=ci(Q0),tg=de({},As,{data:0}),Hf=ci(tg),ng={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},ig={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},rg={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function sg(t){var i=this.nativeEvent;return i.getModifierState?i.getModifierState(t):(t=rg[t])?!!i[t]:!1}function lc(){return sg}var og=de({},wo,{key:function(t){if(t.key){var i=ng[t.key]||t.key;if(i!=="Unidentified")return i}return t.type==="keypress"?(t=va(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?ig[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:lc,charCode:function(t){return t.type==="keypress"?va(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?va(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),ag=ci(og),lg=de({},Sa,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Vf=ci(lg),cg=de({},wo,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:lc}),ug=ci(cg),dg=de({},As,{propertyName:0,elapsedTime:0,pseudoElement:0}),fg=ci(dg),hg=de({},Sa,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),pg=ci(hg),mg=[9,13,27,32],cc=f&&"CompositionEvent"in window,Ao=null;f&&"documentMode"in document&&(Ao=document.documentMode);var gg=f&&"TextEvent"in window&&!Ao,Gf=f&&(!cc||Ao&&8<Ao&&11>=Ao),Wf=" ",Xf=!1;function jf(t,i){switch(t){case"keyup":return mg.indexOf(i.keyCode)!==-1;case"keydown":return i.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Yf(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var bs=!1;function _g(t,i){switch(t){case"compositionend":return Yf(i);case"keypress":return i.which!==32?null:(Xf=!0,Wf);case"textInput":return t=i.data,t===Wf&&Xf?null:t;default:return null}}function vg(t,i){if(bs)return t==="compositionend"||!cc&&jf(t,i)?(t=kf(),_a=ic=Tr=null,bs=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(i.ctrlKey||i.altKey||i.metaKey)||i.ctrlKey&&i.altKey){if(i.char&&1<i.char.length)return i.char;if(i.which)return String.fromCharCode(i.which)}return null;case"compositionend":return Gf&&i.locale!=="ko"?null:i.data;default:return null}}var xg={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function qf(t){var i=t&&t.nodeName&&t.nodeName.toLowerCase();return i==="input"?!!xg[t.type]:i==="textarea"}function $f(t,i,o,c){ve(c),i=Ta(i,"onChange"),0<i.length&&(o=new rc("onChange","change",null,o,c),t.push({event:o,listeners:i}))}var bo=null,Co=null;function Sg(t){hh(t,0)}function ya(t){var i=Ds(t);if(Ft(i))return t}function yg(t,i){if(t==="change")return i}var Kf=!1;if(f){var uc;if(f){var dc="oninput"in document;if(!dc){var Zf=document.createElement("div");Zf.setAttribute("oninput","return;"),dc=typeof Zf.oninput=="function"}uc=dc}else uc=!1;Kf=uc&&(!document.documentMode||9<document.documentMode)}function Jf(){bo&&(bo.detachEvent("onpropertychange",Qf),Co=bo=null)}function Qf(t){if(t.propertyName==="value"&&ya(Co)){var i=[];$f(i,Co,t,ft(t)),pt(Sg,i)}}function Mg(t,i,o){t==="focusin"?(Jf(),bo=i,Co=o,bo.attachEvent("onpropertychange",Qf)):t==="focusout"&&Jf()}function Eg(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return ya(Co)}function wg(t,i){if(t==="click")return ya(i)}function Tg(t,i){if(t==="input"||t==="change")return ya(i)}function Ag(t,i){return t===i&&(t!==0||1/t===1/i)||t!==t&&i!==i}var Ci=typeof Object.is=="function"?Object.is:Ag;function Ro(t,i){if(Ci(t,i))return!0;if(typeof t!="object"||t===null||typeof i!="object"||i===null)return!1;var o=Object.keys(t),c=Object.keys(i);if(o.length!==c.length)return!1;for(c=0;c<o.length;c++){var d=o[c];if(!p.call(i,d)||!Ci(t[d],i[d]))return!1}return!0}function eh(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function th(t,i){var o=eh(t);t=0;for(var c;o;){if(o.nodeType===3){if(c=t+o.textContent.length,t<=i&&c>=i)return{node:o,offset:i-t};t=c}e:{for(;o;){if(o.nextSibling){o=o.nextSibling;break e}o=o.parentNode}o=void 0}o=eh(o)}}function nh(t,i){return t&&i?t===i?!0:t&&t.nodeType===3?!1:i&&i.nodeType===3?nh(t,i.parentNode):"contains"in t?t.contains(i):t.compareDocumentPosition?!!(t.compareDocumentPosition(i)&16):!1:!1}function ih(){for(var t=window,i=ht();i instanceof t.HTMLIFrameElement;){try{var o=typeof i.contentWindow.location.href=="string"}catch{o=!1}if(o)t=i.contentWindow;else break;i=ht(t.document)}return i}function fc(t){var i=t&&t.nodeName&&t.nodeName.toLowerCase();return i&&(i==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||i==="textarea"||t.contentEditable==="true")}function bg(t){var i=ih(),o=t.focusedElem,c=t.selectionRange;if(i!==o&&o&&o.ownerDocument&&nh(o.ownerDocument.documentElement,o)){if(c!==null&&fc(o)){if(i=c.start,t=c.end,t===void 0&&(t=i),"selectionStart"in o)o.selectionStart=i,o.selectionEnd=Math.min(t,o.value.length);else if(t=(i=o.ownerDocument||document)&&i.defaultView||window,t.getSelection){t=t.getSelection();var d=o.textContent.length,h=Math.min(c.start,d);c=c.end===void 0?h:Math.min(c.end,d),!t.extend&&h>c&&(d=c,c=h,h=d),d=th(o,h);var E=th(o,c);d&&E&&(t.rangeCount!==1||t.anchorNode!==d.node||t.anchorOffset!==d.offset||t.focusNode!==E.node||t.focusOffset!==E.offset)&&(i=i.createRange(),i.setStart(d.node,d.offset),t.removeAllRanges(),h>c?(t.addRange(i),t.extend(E.node,E.offset)):(i.setEnd(E.node,E.offset),t.addRange(i)))}}for(i=[],t=o;t=t.parentNode;)t.nodeType===1&&i.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof o.focus=="function"&&o.focus(),o=0;o<i.length;o++)t=i[o],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var Cg=f&&"documentMode"in document&&11>=document.documentMode,Cs=null,hc=null,Po=null,pc=!1;function rh(t,i,o){var c=o.window===o?o.document:o.nodeType===9?o:o.ownerDocument;pc||Cs==null||Cs!==ht(c)||(c=Cs,"selectionStart"in c&&fc(c)?c={start:c.selectionStart,end:c.selectionEnd}:(c=(c.ownerDocument&&c.ownerDocument.defaultView||window).getSelection(),c={anchorNode:c.anchorNode,anchorOffset:c.anchorOffset,focusNode:c.focusNode,focusOffset:c.focusOffset}),Po&&Ro(Po,c)||(Po=c,c=Ta(hc,"onSelect"),0<c.length&&(i=new rc("onSelect","select",null,i,o),t.push({event:i,listeners:c}),i.target=Cs)))}function Ma(t,i){var o={};return o[t.toLowerCase()]=i.toLowerCase(),o["Webkit"+t]="webkit"+i,o["Moz"+t]="moz"+i,o}var Rs={animationend:Ma("Animation","AnimationEnd"),animationiteration:Ma("Animation","AnimationIteration"),animationstart:Ma("Animation","AnimationStart"),transitionend:Ma("Transition","TransitionEnd")},mc={},sh={};f&&(sh=document.createElement("div").style,"AnimationEvent"in window||(delete Rs.animationend.animation,delete Rs.animationiteration.animation,delete Rs.animationstart.animation),"TransitionEvent"in window||delete Rs.transitionend.transition);function Ea(t){if(mc[t])return mc[t];if(!Rs[t])return t;var i=Rs[t],o;for(o in i)if(i.hasOwnProperty(o)&&o in sh)return mc[t]=i[o];return t}var oh=Ea("animationend"),ah=Ea("animationiteration"),lh=Ea("animationstart"),ch=Ea("transitionend"),uh=new Map,dh="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Ar(t,i){uh.set(t,i),l(i,[t])}for(var gc=0;gc<dh.length;gc++){var _c=dh[gc],Rg=_c.toLowerCase(),Pg=_c[0].toUpperCase()+_c.slice(1);Ar(Rg,"on"+Pg)}Ar(oh,"onAnimationEnd"),Ar(ah,"onAnimationIteration"),Ar(lh,"onAnimationStart"),Ar("dblclick","onDoubleClick"),Ar("focusin","onFocus"),Ar("focusout","onBlur"),Ar(ch,"onTransitionEnd"),u("onMouseEnter",["mouseout","mouseover"]),u("onMouseLeave",["mouseout","mouseover"]),u("onPointerEnter",["pointerout","pointerover"]),u("onPointerLeave",["pointerout","pointerover"]),l("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),l("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),l("onBeforeInput",["compositionend","keypress","textInput","paste"]),l("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),l("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),l("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Lo="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Lg=new Set("cancel close invalid load scroll toggle".split(" ").concat(Lo));function fh(t,i,o){var c=t.type||"unknown-event";t.currentTarget=o,_n(c,i,void 0,t),t.currentTarget=null}function hh(t,i){i=(i&4)!==0;for(var o=0;o<t.length;o++){var c=t[o],d=c.event;c=c.listeners;e:{var h=void 0;if(i)for(var E=c.length-1;0<=E;E--){var U=c[E],H=U.instance,ce=U.currentTarget;if(U=U.listener,H!==h&&d.isPropagationStopped())break e;fh(d,U,ce),h=H}else for(E=0;E<c.length;E++){if(U=c[E],H=U.instance,ce=U.currentTarget,U=U.listener,H!==h&&d.isPropagationStopped())break e;fh(d,U,ce),h=H}}}if(Ue)throw t=ut,Ue=!1,ut=null,t}function on(t,i){var o=i[Tc];o===void 0&&(o=i[Tc]=new Set);var c=t+"__bubble";o.has(c)||(ph(i,t,2,!1),o.add(c))}function vc(t,i,o){var c=0;i&&(c|=4),ph(o,t,c,i)}var wa="_reactListening"+Math.random().toString(36).slice(2);function Do(t){if(!t[wa]){t[wa]=!0,s.forEach(function(o){o!=="selectionchange"&&(Lg.has(o)||vc(o,!1,t),vc(o,!0,t))});var i=t.nodeType===9?t:t.ownerDocument;i===null||i[wa]||(i[wa]=!0,vc("selectionchange",!1,i))}}function ph(t,i,o,c){switch(Of(i)){case 1:var d=X0;break;case 4:d=j0;break;default:d=tc}o=d.bind(null,i,o,t),d=void 0,!_e||i!=="touchstart"&&i!=="touchmove"&&i!=="wheel"||(d=!0),c?d!==void 0?t.addEventListener(i,o,{capture:!0,passive:d}):t.addEventListener(i,o,!0):d!==void 0?t.addEventListener(i,o,{passive:d}):t.addEventListener(i,o,!1)}function xc(t,i,o,c,d){var h=c;if((i&1)===0&&(i&2)===0&&c!==null)e:for(;;){if(c===null)return;var E=c.tag;if(E===3||E===4){var U=c.stateNode.containerInfo;if(U===d||U.nodeType===8&&U.parentNode===d)break;if(E===4)for(E=c.return;E!==null;){var H=E.tag;if((H===3||H===4)&&(H=E.stateNode.containerInfo,H===d||H.nodeType===8&&H.parentNode===d))return;E=E.return}for(;U!==null;){if(E=Qr(U),E===null)return;if(H=E.tag,H===5||H===6){c=h=E;continue e}U=U.parentNode}}c=c.return}pt(function(){var ce=h,Re=ft(o),Le=[];e:{var Ce=uh.get(t);if(Ce!==void 0){var Je=rc,nt=t;switch(t){case"keypress":if(va(o)===0)break e;case"keydown":case"keyup":Je=ag;break;case"focusin":nt="focus",Je=ac;break;case"focusout":nt="blur",Je=ac;break;case"beforeblur":case"afterblur":Je=ac;break;case"click":if(o.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":Je=zf;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":Je=$0;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":Je=ug;break;case oh:case ah:case lh:Je=J0;break;case ch:Je=fg;break;case"scroll":Je=Y0;break;case"wheel":Je=pg;break;case"copy":case"cut":case"paste":Je=eg;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":Je=Vf}var rt=(i&4)!==0,vn=!rt&&t==="scroll",Q=rt?Ce!==null?Ce+"Capture":null:Ce;rt=[];for(var X=ce,se;X!==null;){se=X;var ze=se.stateNode;if(se.tag===5&&ze!==null&&(se=ze,Q!==null&&(ze=Se(X,Q),ze!=null&&rt.push(Io(X,ze,se)))),vn)break;X=X.return}0<rt.length&&(Ce=new Je(Ce,nt,null,o,Re),Le.push({event:Ce,listeners:rt}))}}if((i&7)===0){e:{if(Ce=t==="mouseover"||t==="pointerover",Je=t==="mouseout"||t==="pointerout",Ce&&o!==Ie&&(nt=o.relatedTarget||o.fromElement)&&(Qr(nt)||nt[ir]))break e;if((Je||Ce)&&(Ce=Re.window===Re?Re:(Ce=Re.ownerDocument)?Ce.defaultView||Ce.parentWindow:window,Je?(nt=o.relatedTarget||o.toElement,Je=ce,nt=nt?Qr(nt):null,nt!==null&&(vn=en(nt),nt!==vn||nt.tag!==5&&nt.tag!==6)&&(nt=null)):(Je=null,nt=ce),Je!==nt)){if(rt=zf,ze="onMouseLeave",Q="onMouseEnter",X="mouse",(t==="pointerout"||t==="pointerover")&&(rt=Vf,ze="onPointerLeave",Q="onPointerEnter",X="pointer"),vn=Je==null?Ce:Ds(Je),se=nt==null?Ce:Ds(nt),Ce=new rt(ze,X+"leave",Je,o,Re),Ce.target=vn,Ce.relatedTarget=se,ze=null,Qr(Re)===ce&&(rt=new rt(Q,X+"enter",nt,o,Re),rt.target=se,rt.relatedTarget=vn,ze=rt),vn=ze,Je&&nt)t:{for(rt=Je,Q=nt,X=0,se=rt;se;se=Ps(se))X++;for(se=0,ze=Q;ze;ze=Ps(ze))se++;for(;0<X-se;)rt=Ps(rt),X--;for(;0<se-X;)Q=Ps(Q),se--;for(;X--;){if(rt===Q||Q!==null&&rt===Q.alternate)break t;rt=Ps(rt),Q=Ps(Q)}rt=null}else rt=null;Je!==null&&mh(Le,Ce,Je,rt,!1),nt!==null&&vn!==null&&mh(Le,vn,nt,rt,!0)}}e:{if(Ce=ce?Ds(ce):window,Je=Ce.nodeName&&Ce.nodeName.toLowerCase(),Je==="select"||Je==="input"&&Ce.type==="file")var lt=yg;else if(qf(Ce))if(Kf)lt=Tg;else{lt=Eg;var mt=Mg}else(Je=Ce.nodeName)&&Je.toLowerCase()==="input"&&(Ce.type==="checkbox"||Ce.type==="radio")&&(lt=wg);if(lt&&(lt=lt(t,ce))){$f(Le,lt,o,Re);break e}mt&&mt(t,Ce,ce),t==="focusout"&&(mt=Ce._wrapperState)&&mt.controlled&&Ce.type==="number"&&Qt(Ce,"number",Ce.value)}switch(mt=ce?Ds(ce):window,t){case"focusin":(qf(mt)||mt.contentEditable==="true")&&(Cs=mt,hc=ce,Po=null);break;case"focusout":Po=hc=Cs=null;break;case"mousedown":pc=!0;break;case"contextmenu":case"mouseup":case"dragend":pc=!1,rh(Le,o,Re);break;case"selectionchange":if(Cg)break;case"keydown":case"keyup":rh(Le,o,Re)}var gt;if(cc)e:{switch(t){case"compositionstart":var St="onCompositionStart";break e;case"compositionend":St="onCompositionEnd";break e;case"compositionupdate":St="onCompositionUpdate";break e}St=void 0}else bs?jf(t,o)&&(St="onCompositionEnd"):t==="keydown"&&o.keyCode===229&&(St="onCompositionStart");St&&(Gf&&o.locale!=="ko"&&(bs||St!=="onCompositionStart"?St==="onCompositionEnd"&&bs&&(gt=kf()):(Tr=Re,ic="value"in Tr?Tr.value:Tr.textContent,bs=!0)),mt=Ta(ce,St),0<mt.length&&(St=new Hf(St,t,null,o,Re),Le.push({event:St,listeners:mt}),gt?St.data=gt:(gt=Yf(o),gt!==null&&(St.data=gt)))),(gt=gg?_g(t,o):vg(t,o))&&(ce=Ta(ce,"onBeforeInput"),0<ce.length&&(Re=new Hf("onBeforeInput","beforeinput",null,o,Re),Le.push({event:Re,listeners:ce}),Re.data=gt))}hh(Le,i)})}function Io(t,i,o){return{instance:t,listener:i,currentTarget:o}}function Ta(t,i){for(var o=i+"Capture",c=[];t!==null;){var d=t,h=d.stateNode;d.tag===5&&h!==null&&(d=h,h=Se(t,o),h!=null&&c.unshift(Io(t,h,d)),h=Se(t,i),h!=null&&c.push(Io(t,h,d))),t=t.return}return c}function Ps(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function mh(t,i,o,c,d){for(var h=i._reactName,E=[];o!==null&&o!==c;){var U=o,H=U.alternate,ce=U.stateNode;if(H!==null&&H===c)break;U.tag===5&&ce!==null&&(U=ce,d?(H=Se(o,h),H!=null&&E.unshift(Io(o,H,U))):d||(H=Se(o,h),H!=null&&E.push(Io(o,H,U)))),o=o.return}E.length!==0&&t.push({event:i,listeners:E})}var Dg=/\r\n?/g,Ig=/\u0000|\uFFFD/g;function gh(t){return(typeof t=="string"?t:""+t).replace(Dg,`
`).replace(Ig,"")}function Aa(t,i,o){if(i=gh(i),gh(t)!==i&&o)throw Error(n(425))}function ba(){}var Sc=null,yc=null;function Mc(t,i){return t==="textarea"||t==="noscript"||typeof i.children=="string"||typeof i.children=="number"||typeof i.dangerouslySetInnerHTML=="object"&&i.dangerouslySetInnerHTML!==null&&i.dangerouslySetInnerHTML.__html!=null}var Ec=typeof setTimeout=="function"?setTimeout:void 0,Ng=typeof clearTimeout=="function"?clearTimeout:void 0,_h=typeof Promise=="function"?Promise:void 0,Ug=typeof queueMicrotask=="function"?queueMicrotask:typeof _h<"u"?function(t){return _h.resolve(null).then(t).catch(Fg)}:Ec;function Fg(t){setTimeout(function(){throw t})}function wc(t,i){var o=i,c=0;do{var d=o.nextSibling;if(t.removeChild(o),d&&d.nodeType===8)if(o=d.data,o==="/$"){if(c===0){t.removeChild(d),Eo(i);return}c--}else o!=="$"&&o!=="$?"&&o!=="$!"||c++;o=d}while(o);Eo(i)}function br(t){for(;t!=null;t=t.nextSibling){var i=t.nodeType;if(i===1||i===3)break;if(i===8){if(i=t.data,i==="$"||i==="$!"||i==="$?")break;if(i==="/$")return null}}return t}function vh(t){t=t.previousSibling;for(var i=0;t;){if(t.nodeType===8){var o=t.data;if(o==="$"||o==="$!"||o==="$?"){if(i===0)return t;i--}else o==="/$"&&i++}t=t.previousSibling}return null}var Ls=Math.random().toString(36).slice(2),zi="__reactFiber$"+Ls,No="__reactProps$"+Ls,ir="__reactContainer$"+Ls,Tc="__reactEvents$"+Ls,Og="__reactListeners$"+Ls,kg="__reactHandles$"+Ls;function Qr(t){var i=t[zi];if(i)return i;for(var o=t.parentNode;o;){if(i=o[ir]||o[zi]){if(o=i.alternate,i.child!==null||o!==null&&o.child!==null)for(t=vh(t);t!==null;){if(o=t[zi])return o;t=vh(t)}return i}t=o,o=t.parentNode}return null}function Uo(t){return t=t[zi]||t[ir],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function Ds(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(n(33))}function Ca(t){return t[No]||null}var Ac=[],Is=-1;function Cr(t){return{current:t}}function an(t){0>Is||(t.current=Ac[Is],Ac[Is]=null,Is--)}function nn(t,i){Is++,Ac[Is]=t.current,t.current=i}var Rr={},zn=Cr(Rr),ei=Cr(!1),es=Rr;function Ns(t,i){var o=t.type.contextTypes;if(!o)return Rr;var c=t.stateNode;if(c&&c.__reactInternalMemoizedUnmaskedChildContext===i)return c.__reactInternalMemoizedMaskedChildContext;var d={},h;for(h in o)d[h]=i[h];return c&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=i,t.__reactInternalMemoizedMaskedChildContext=d),d}function ti(t){return t=t.childContextTypes,t!=null}function Ra(){an(ei),an(zn)}function xh(t,i,o){if(zn.current!==Rr)throw Error(n(168));nn(zn,i),nn(ei,o)}function Sh(t,i,o){var c=t.stateNode;if(i=i.childContextTypes,typeof c.getChildContext!="function")return o;c=c.getChildContext();for(var d in c)if(!(d in i))throw Error(n(108,Te(t)||"Unknown",d));return de({},o,c)}function Pa(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||Rr,es=zn.current,nn(zn,t),nn(ei,ei.current),!0}function yh(t,i,o){var c=t.stateNode;if(!c)throw Error(n(169));o?(t=Sh(t,i,es),c.__reactInternalMemoizedMergedChildContext=t,an(ei),an(zn),nn(zn,t)):an(ei),nn(ei,o)}var rr=null,La=!1,bc=!1;function Mh(t){rr===null?rr=[t]:rr.push(t)}function Bg(t){La=!0,Mh(t)}function Pr(){if(!bc&&rr!==null){bc=!0;var t=0,i=Nt;try{var o=rr;for(Nt=1;t<o.length;t++){var c=o[t];do c=c(!0);while(c!==null)}rr=null,La=!1}catch(d){throw rr!==null&&(rr=rr.slice(t+1)),tr(vo,Pr),d}finally{Nt=i,bc=!1}}return null}var Us=[],Fs=0,Da=null,Ia=0,vi=[],xi=0,ts=null,sr=1,or="";function ns(t,i){Us[Fs++]=Ia,Us[Fs++]=Da,Da=t,Ia=i}function Eh(t,i,o){vi[xi++]=sr,vi[xi++]=or,vi[xi++]=ts,ts=t;var c=sr;t=or;var d=32-He(c)-1;c&=~(1<<d),o+=1;var h=32-He(i)+d;if(30<h){var E=d-d%5;h=(c&(1<<E)-1).toString(32),c>>=E,d-=E,sr=1<<32-He(i)+d|o<<d|c,or=h+t}else sr=1<<h|o<<d|c,or=t}function Cc(t){t.return!==null&&(ns(t,1),Eh(t,1,0))}function Rc(t){for(;t===Da;)Da=Us[--Fs],Us[Fs]=null,Ia=Us[--Fs],Us[Fs]=null;for(;t===ts;)ts=vi[--xi],vi[xi]=null,or=vi[--xi],vi[xi]=null,sr=vi[--xi],vi[xi]=null}var ui=null,di=null,cn=!1,Ri=null;function wh(t,i){var o=Ei(5,null,null,0);o.elementType="DELETED",o.stateNode=i,o.return=t,i=t.deletions,i===null?(t.deletions=[o],t.flags|=16):i.push(o)}function Th(t,i){switch(t.tag){case 5:var o=t.type;return i=i.nodeType!==1||o.toLowerCase()!==i.nodeName.toLowerCase()?null:i,i!==null?(t.stateNode=i,ui=t,di=br(i.firstChild),!0):!1;case 6:return i=t.pendingProps===""||i.nodeType!==3?null:i,i!==null?(t.stateNode=i,ui=t,di=null,!0):!1;case 13:return i=i.nodeType!==8?null:i,i!==null?(o=ts!==null?{id:sr,overflow:or}:null,t.memoizedState={dehydrated:i,treeContext:o,retryLane:1073741824},o=Ei(18,null,null,0),o.stateNode=i,o.return=t,t.child=o,ui=t,di=null,!0):!1;default:return!1}}function Pc(t){return(t.mode&1)!==0&&(t.flags&128)===0}function Lc(t){if(cn){var i=di;if(i){var o=i;if(!Th(t,i)){if(Pc(t))throw Error(n(418));i=br(o.nextSibling);var c=ui;i&&Th(t,i)?wh(c,o):(t.flags=t.flags&-4097|2,cn=!1,ui=t)}}else{if(Pc(t))throw Error(n(418));t.flags=t.flags&-4097|2,cn=!1,ui=t}}}function Ah(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;ui=t}function Na(t){if(t!==ui)return!1;if(!cn)return Ah(t),cn=!0,!1;var i;if((i=t.tag!==3)&&!(i=t.tag!==5)&&(i=t.type,i=i!=="head"&&i!=="body"&&!Mc(t.type,t.memoizedProps)),i&&(i=di)){if(Pc(t))throw bh(),Error(n(418));for(;i;)wh(t,i),i=br(i.nextSibling)}if(Ah(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(n(317));e:{for(t=t.nextSibling,i=0;t;){if(t.nodeType===8){var o=t.data;if(o==="/$"){if(i===0){di=br(t.nextSibling);break e}i--}else o!=="$"&&o!=="$!"&&o!=="$?"||i++}t=t.nextSibling}di=null}}else di=ui?br(t.stateNode.nextSibling):null;return!0}function bh(){for(var t=di;t;)t=br(t.nextSibling)}function Os(){di=ui=null,cn=!1}function Dc(t){Ri===null?Ri=[t]:Ri.push(t)}var zg=P.ReactCurrentBatchConfig;function Fo(t,i,o){if(t=o.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(o._owner){if(o=o._owner,o){if(o.tag!==1)throw Error(n(309));var c=o.stateNode}if(!c)throw Error(n(147,t));var d=c,h=""+t;return i!==null&&i.ref!==null&&typeof i.ref=="function"&&i.ref._stringRef===h?i.ref:(i=function(E){var U=d.refs;E===null?delete U[h]:U[h]=E},i._stringRef=h,i)}if(typeof t!="string")throw Error(n(284));if(!o._owner)throw Error(n(290,t))}return t}function Ua(t,i){throw t=Object.prototype.toString.call(i),Error(n(31,t==="[object Object]"?"object with keys {"+Object.keys(i).join(", ")+"}":t))}function Ch(t){var i=t._init;return i(t._payload)}function Rh(t){function i(Q,X){if(t){var se=Q.deletions;se===null?(Q.deletions=[X],Q.flags|=16):se.push(X)}}function o(Q,X){if(!t)return null;for(;X!==null;)i(Q,X),X=X.sibling;return null}function c(Q,X){for(Q=new Map;X!==null;)X.key!==null?Q.set(X.key,X):Q.set(X.index,X),X=X.sibling;return Q}function d(Q,X){return Q=kr(Q,X),Q.index=0,Q.sibling=null,Q}function h(Q,X,se){return Q.index=se,t?(se=Q.alternate,se!==null?(se=se.index,se<X?(Q.flags|=2,X):se):(Q.flags|=2,X)):(Q.flags|=1048576,X)}function E(Q){return t&&Q.alternate===null&&(Q.flags|=2),Q}function U(Q,X,se,ze){return X===null||X.tag!==6?(X=Eu(se,Q.mode,ze),X.return=Q,X):(X=d(X,se),X.return=Q,X)}function H(Q,X,se,ze){var lt=se.type;return lt===k?Re(Q,X,se.props.children,ze,se.key):X!==null&&(X.elementType===lt||typeof lt=="object"&&lt!==null&&lt.$$typeof===ee&&Ch(lt)===X.type)?(ze=d(X,se.props),ze.ref=Fo(Q,X,se),ze.return=Q,ze):(ze=sl(se.type,se.key,se.props,null,Q.mode,ze),ze.ref=Fo(Q,X,se),ze.return=Q,ze)}function ce(Q,X,se,ze){return X===null||X.tag!==4||X.stateNode.containerInfo!==se.containerInfo||X.stateNode.implementation!==se.implementation?(X=wu(se,Q.mode,ze),X.return=Q,X):(X=d(X,se.children||[]),X.return=Q,X)}function Re(Q,X,se,ze,lt){return X===null||X.tag!==7?(X=us(se,Q.mode,ze,lt),X.return=Q,X):(X=d(X,se),X.return=Q,X)}function Le(Q,X,se){if(typeof X=="string"&&X!==""||typeof X=="number")return X=Eu(""+X,Q.mode,se),X.return=Q,X;if(typeof X=="object"&&X!==null){switch(X.$$typeof){case z:return se=sl(X.type,X.key,X.props,null,Q.mode,se),se.ref=Fo(Q,null,X),se.return=Q,se;case D:return X=wu(X,Q.mode,se),X.return=Q,X;case ee:var ze=X._init;return Le(Q,ze(X._payload),se)}if(G(X)||ue(X))return X=us(X,Q.mode,se,null),X.return=Q,X;Ua(Q,X)}return null}function Ce(Q,X,se,ze){var lt=X!==null?X.key:null;if(typeof se=="string"&&se!==""||typeof se=="number")return lt!==null?null:U(Q,X,""+se,ze);if(typeof se=="object"&&se!==null){switch(se.$$typeof){case z:return se.key===lt?H(Q,X,se,ze):null;case D:return se.key===lt?ce(Q,X,se,ze):null;case ee:return lt=se._init,Ce(Q,X,lt(se._payload),ze)}if(G(se)||ue(se))return lt!==null?null:Re(Q,X,se,ze,null);Ua(Q,se)}return null}function Je(Q,X,se,ze,lt){if(typeof ze=="string"&&ze!==""||typeof ze=="number")return Q=Q.get(se)||null,U(X,Q,""+ze,lt);if(typeof ze=="object"&&ze!==null){switch(ze.$$typeof){case z:return Q=Q.get(ze.key===null?se:ze.key)||null,H(X,Q,ze,lt);case D:return Q=Q.get(ze.key===null?se:ze.key)||null,ce(X,Q,ze,lt);case ee:var mt=ze._init;return Je(Q,X,se,mt(ze._payload),lt)}if(G(ze)||ue(ze))return Q=Q.get(se)||null,Re(X,Q,ze,lt,null);Ua(X,ze)}return null}function nt(Q,X,se,ze){for(var lt=null,mt=null,gt=X,St=X=0,In=null;gt!==null&&St<se.length;St++){gt.index>St?(In=gt,gt=null):In=gt.sibling;var jt=Ce(Q,gt,se[St],ze);if(jt===null){gt===null&&(gt=In);break}t&&gt&&jt.alternate===null&&i(Q,gt),X=h(jt,X,St),mt===null?lt=jt:mt.sibling=jt,mt=jt,gt=In}if(St===se.length)return o(Q,gt),cn&&ns(Q,St),lt;if(gt===null){for(;St<se.length;St++)gt=Le(Q,se[St],ze),gt!==null&&(X=h(gt,X,St),mt===null?lt=gt:mt.sibling=gt,mt=gt);return cn&&ns(Q,St),lt}for(gt=c(Q,gt);St<se.length;St++)In=Je(gt,Q,St,se[St],ze),In!==null&&(t&&In.alternate!==null&&gt.delete(In.key===null?St:In.key),X=h(In,X,St),mt===null?lt=In:mt.sibling=In,mt=In);return t&&gt.forEach(function(Br){return i(Q,Br)}),cn&&ns(Q,St),lt}function rt(Q,X,se,ze){var lt=ue(se);if(typeof lt!="function")throw Error(n(150));if(se=lt.call(se),se==null)throw Error(n(151));for(var mt=lt=null,gt=X,St=X=0,In=null,jt=se.next();gt!==null&&!jt.done;St++,jt=se.next()){gt.index>St?(In=gt,gt=null):In=gt.sibling;var Br=Ce(Q,gt,jt.value,ze);if(Br===null){gt===null&&(gt=In);break}t&&gt&&Br.alternate===null&&i(Q,gt),X=h(Br,X,St),mt===null?lt=Br:mt.sibling=Br,mt=Br,gt=In}if(jt.done)return o(Q,gt),cn&&ns(Q,St),lt;if(gt===null){for(;!jt.done;St++,jt=se.next())jt=Le(Q,jt.value,ze),jt!==null&&(X=h(jt,X,St),mt===null?lt=jt:mt.sibling=jt,mt=jt);return cn&&ns(Q,St),lt}for(gt=c(Q,gt);!jt.done;St++,jt=se.next())jt=Je(gt,Q,St,jt.value,ze),jt!==null&&(t&&jt.alternate!==null&&gt.delete(jt.key===null?St:jt.key),X=h(jt,X,St),mt===null?lt=jt:mt.sibling=jt,mt=jt);return t&&gt.forEach(function(x_){return i(Q,x_)}),cn&&ns(Q,St),lt}function vn(Q,X,se,ze){if(typeof se=="object"&&se!==null&&se.type===k&&se.key===null&&(se=se.props.children),typeof se=="object"&&se!==null){switch(se.$$typeof){case z:e:{for(var lt=se.key,mt=X;mt!==null;){if(mt.key===lt){if(lt=se.type,lt===k){if(mt.tag===7){o(Q,mt.sibling),X=d(mt,se.props.children),X.return=Q,Q=X;break e}}else if(mt.elementType===lt||typeof lt=="object"&&lt!==null&&lt.$$typeof===ee&&Ch(lt)===mt.type){o(Q,mt.sibling),X=d(mt,se.props),X.ref=Fo(Q,mt,se),X.return=Q,Q=X;break e}o(Q,mt);break}else i(Q,mt);mt=mt.sibling}se.type===k?(X=us(se.props.children,Q.mode,ze,se.key),X.return=Q,Q=X):(ze=sl(se.type,se.key,se.props,null,Q.mode,ze),ze.ref=Fo(Q,X,se),ze.return=Q,Q=ze)}return E(Q);case D:e:{for(mt=se.key;X!==null;){if(X.key===mt)if(X.tag===4&&X.stateNode.containerInfo===se.containerInfo&&X.stateNode.implementation===se.implementation){o(Q,X.sibling),X=d(X,se.children||[]),X.return=Q,Q=X;break e}else{o(Q,X);break}else i(Q,X);X=X.sibling}X=wu(se,Q.mode,ze),X.return=Q,Q=X}return E(Q);case ee:return mt=se._init,vn(Q,X,mt(se._payload),ze)}if(G(se))return nt(Q,X,se,ze);if(ue(se))return rt(Q,X,se,ze);Ua(Q,se)}return typeof se=="string"&&se!==""||typeof se=="number"?(se=""+se,X!==null&&X.tag===6?(o(Q,X.sibling),X=d(X,se),X.return=Q,Q=X):(o(Q,X),X=Eu(se,Q.mode,ze),X.return=Q,Q=X),E(Q)):o(Q,X)}return vn}var ks=Rh(!0),Ph=Rh(!1),Fa=Cr(null),Oa=null,Bs=null,Ic=null;function Nc(){Ic=Bs=Oa=null}function Uc(t){var i=Fa.current;an(Fa),t._currentValue=i}function Fc(t,i,o){for(;t!==null;){var c=t.alternate;if((t.childLanes&i)!==i?(t.childLanes|=i,c!==null&&(c.childLanes|=i)):c!==null&&(c.childLanes&i)!==i&&(c.childLanes|=i),t===o)break;t=t.return}}function zs(t,i){Oa=t,Ic=Bs=null,t=t.dependencies,t!==null&&t.firstContext!==null&&((t.lanes&i)!==0&&(ni=!0),t.firstContext=null)}function Si(t){var i=t._currentValue;if(Ic!==t)if(t={context:t,memoizedValue:i,next:null},Bs===null){if(Oa===null)throw Error(n(308));Bs=t,Oa.dependencies={lanes:0,firstContext:t}}else Bs=Bs.next=t;return i}var is=null;function Oc(t){is===null?is=[t]:is.push(t)}function Lh(t,i,o,c){var d=i.interleaved;return d===null?(o.next=o,Oc(i)):(o.next=d.next,d.next=o),i.interleaved=o,ar(t,c)}function ar(t,i){t.lanes|=i;var o=t.alternate;for(o!==null&&(o.lanes|=i),o=t,t=t.return;t!==null;)t.childLanes|=i,o=t.alternate,o!==null&&(o.childLanes|=i),o=t,t=t.return;return o.tag===3?o.stateNode:null}var Lr=!1;function kc(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Dh(t,i){t=t.updateQueue,i.updateQueue===t&&(i.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function lr(t,i){return{eventTime:t,lane:i,tag:0,payload:null,callback:null,next:null}}function Dr(t,i,o){var c=t.updateQueue;if(c===null)return null;if(c=c.shared,(Wt&2)!==0){var d=c.pending;return d===null?i.next=i:(i.next=d.next,d.next=i),c.pending=i,ar(t,o)}return d=c.interleaved,d===null?(i.next=i,Oc(c)):(i.next=d.next,d.next=i),c.interleaved=i,ar(t,o)}function ka(t,i,o){if(i=i.updateQueue,i!==null&&(i=i.shared,(o&4194240)!==0)){var c=i.lanes;c&=t.pendingLanes,o|=c,i.lanes=o,Qn(t,o)}}function Ih(t,i){var o=t.updateQueue,c=t.alternate;if(c!==null&&(c=c.updateQueue,o===c)){var d=null,h=null;if(o=o.firstBaseUpdate,o!==null){do{var E={eventTime:o.eventTime,lane:o.lane,tag:o.tag,payload:o.payload,callback:o.callback,next:null};h===null?d=h=E:h=h.next=E,o=o.next}while(o!==null);h===null?d=h=i:h=h.next=i}else d=h=i;o={baseState:c.baseState,firstBaseUpdate:d,lastBaseUpdate:h,shared:c.shared,effects:c.effects},t.updateQueue=o;return}t=o.lastBaseUpdate,t===null?o.firstBaseUpdate=i:t.next=i,o.lastBaseUpdate=i}function Ba(t,i,o,c){var d=t.updateQueue;Lr=!1;var h=d.firstBaseUpdate,E=d.lastBaseUpdate,U=d.shared.pending;if(U!==null){d.shared.pending=null;var H=U,ce=H.next;H.next=null,E===null?h=ce:E.next=ce,E=H;var Re=t.alternate;Re!==null&&(Re=Re.updateQueue,U=Re.lastBaseUpdate,U!==E&&(U===null?Re.firstBaseUpdate=ce:U.next=ce,Re.lastBaseUpdate=H))}if(h!==null){var Le=d.baseState;E=0,Re=ce=H=null,U=h;do{var Ce=U.lane,Je=U.eventTime;if((c&Ce)===Ce){Re!==null&&(Re=Re.next={eventTime:Je,lane:0,tag:U.tag,payload:U.payload,callback:U.callback,next:null});e:{var nt=t,rt=U;switch(Ce=i,Je=o,rt.tag){case 1:if(nt=rt.payload,typeof nt=="function"){Le=nt.call(Je,Le,Ce);break e}Le=nt;break e;case 3:nt.flags=nt.flags&-65537|128;case 0:if(nt=rt.payload,Ce=typeof nt=="function"?nt.call(Je,Le,Ce):nt,Ce==null)break e;Le=de({},Le,Ce);break e;case 2:Lr=!0}}U.callback!==null&&U.lane!==0&&(t.flags|=64,Ce=d.effects,Ce===null?d.effects=[U]:Ce.push(U))}else Je={eventTime:Je,lane:Ce,tag:U.tag,payload:U.payload,callback:U.callback,next:null},Re===null?(ce=Re=Je,H=Le):Re=Re.next=Je,E|=Ce;if(U=U.next,U===null){if(U=d.shared.pending,U===null)break;Ce=U,U=Ce.next,Ce.next=null,d.lastBaseUpdate=Ce,d.shared.pending=null}}while(!0);if(Re===null&&(H=Le),d.baseState=H,d.firstBaseUpdate=ce,d.lastBaseUpdate=Re,i=d.shared.interleaved,i!==null){d=i;do E|=d.lane,d=d.next;while(d!==i)}else h===null&&(d.shared.lanes=0);os|=E,t.lanes=E,t.memoizedState=Le}}function Nh(t,i,o){if(t=i.effects,i.effects=null,t!==null)for(i=0;i<t.length;i++){var c=t[i],d=c.callback;if(d!==null){if(c.callback=null,c=o,typeof d!="function")throw Error(n(191,d));d.call(c)}}}var Oo={},Hi=Cr(Oo),ko=Cr(Oo),Bo=Cr(Oo);function rs(t){if(t===Oo)throw Error(n(174));return t}function Bc(t,i){switch(nn(Bo,i),nn(ko,t),nn(Hi,Oo),t=i.nodeType,t){case 9:case 11:i=(i=i.documentElement)?i.namespaceURI:M(null,"");break;default:t=t===8?i.parentNode:i,i=t.namespaceURI||null,t=t.tagName,i=M(i,t)}an(Hi),nn(Hi,i)}function Hs(){an(Hi),an(ko),an(Bo)}function Uh(t){rs(Bo.current);var i=rs(Hi.current),o=M(i,t.type);i!==o&&(nn(ko,t),nn(Hi,o))}function zc(t){ko.current===t&&(an(Hi),an(ko))}var fn=Cr(0);function za(t){for(var i=t;i!==null;){if(i.tag===13){var o=i.memoizedState;if(o!==null&&(o=o.dehydrated,o===null||o.data==="$?"||o.data==="$!"))return i}else if(i.tag===19&&i.memoizedProps.revealOrder!==void 0){if((i.flags&128)!==0)return i}else if(i.child!==null){i.child.return=i,i=i.child;continue}if(i===t)break;for(;i.sibling===null;){if(i.return===null||i.return===t)return null;i=i.return}i.sibling.return=i.return,i=i.sibling}return null}var Hc=[];function Vc(){for(var t=0;t<Hc.length;t++)Hc[t]._workInProgressVersionPrimary=null;Hc.length=0}var Ha=P.ReactCurrentDispatcher,Gc=P.ReactCurrentBatchConfig,ss=0,hn=null,wn=null,Ln=null,Va=!1,zo=!1,Ho=0,Hg=0;function Hn(){throw Error(n(321))}function Wc(t,i){if(i===null)return!1;for(var o=0;o<i.length&&o<t.length;o++)if(!Ci(t[o],i[o]))return!1;return!0}function Xc(t,i,o,c,d,h){if(ss=h,hn=i,i.memoizedState=null,i.updateQueue=null,i.lanes=0,Ha.current=t===null||t.memoizedState===null?Xg:jg,t=o(c,d),zo){h=0;do{if(zo=!1,Ho=0,25<=h)throw Error(n(301));h+=1,Ln=wn=null,i.updateQueue=null,Ha.current=Yg,t=o(c,d)}while(zo)}if(Ha.current=Xa,i=wn!==null&&wn.next!==null,ss=0,Ln=wn=hn=null,Va=!1,i)throw Error(n(300));return t}function jc(){var t=Ho!==0;return Ho=0,t}function Vi(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Ln===null?hn.memoizedState=Ln=t:Ln=Ln.next=t,Ln}function yi(){if(wn===null){var t=hn.alternate;t=t!==null?t.memoizedState:null}else t=wn.next;var i=Ln===null?hn.memoizedState:Ln.next;if(i!==null)Ln=i,wn=t;else{if(t===null)throw Error(n(310));wn=t,t={memoizedState:wn.memoizedState,baseState:wn.baseState,baseQueue:wn.baseQueue,queue:wn.queue,next:null},Ln===null?hn.memoizedState=Ln=t:Ln=Ln.next=t}return Ln}function Vo(t,i){return typeof i=="function"?i(t):i}function Yc(t){var i=yi(),o=i.queue;if(o===null)throw Error(n(311));o.lastRenderedReducer=t;var c=wn,d=c.baseQueue,h=o.pending;if(h!==null){if(d!==null){var E=d.next;d.next=h.next,h.next=E}c.baseQueue=d=h,o.pending=null}if(d!==null){h=d.next,c=c.baseState;var U=E=null,H=null,ce=h;do{var Re=ce.lane;if((ss&Re)===Re)H!==null&&(H=H.next={lane:0,action:ce.action,hasEagerState:ce.hasEagerState,eagerState:ce.eagerState,next:null}),c=ce.hasEagerState?ce.eagerState:t(c,ce.action);else{var Le={lane:Re,action:ce.action,hasEagerState:ce.hasEagerState,eagerState:ce.eagerState,next:null};H===null?(U=H=Le,E=c):H=H.next=Le,hn.lanes|=Re,os|=Re}ce=ce.next}while(ce!==null&&ce!==h);H===null?E=c:H.next=U,Ci(c,i.memoizedState)||(ni=!0),i.memoizedState=c,i.baseState=E,i.baseQueue=H,o.lastRenderedState=c}if(t=o.interleaved,t!==null){d=t;do h=d.lane,hn.lanes|=h,os|=h,d=d.next;while(d!==t)}else d===null&&(o.lanes=0);return[i.memoizedState,o.dispatch]}function qc(t){var i=yi(),o=i.queue;if(o===null)throw Error(n(311));o.lastRenderedReducer=t;var c=o.dispatch,d=o.pending,h=i.memoizedState;if(d!==null){o.pending=null;var E=d=d.next;do h=t(h,E.action),E=E.next;while(E!==d);Ci(h,i.memoizedState)||(ni=!0),i.memoizedState=h,i.baseQueue===null&&(i.baseState=h),o.lastRenderedState=h}return[h,c]}function Fh(){}function Oh(t,i){var o=hn,c=yi(),d=i(),h=!Ci(c.memoizedState,d);if(h&&(c.memoizedState=d,ni=!0),c=c.queue,$c(zh.bind(null,o,c,t),[t]),c.getSnapshot!==i||h||Ln!==null&&Ln.memoizedState.tag&1){if(o.flags|=2048,Go(9,Bh.bind(null,o,c,d,i),void 0,null),Dn===null)throw Error(n(349));(ss&30)!==0||kh(o,i,d)}return d}function kh(t,i,o){t.flags|=16384,t={getSnapshot:i,value:o},i=hn.updateQueue,i===null?(i={lastEffect:null,stores:null},hn.updateQueue=i,i.stores=[t]):(o=i.stores,o===null?i.stores=[t]:o.push(t))}function Bh(t,i,o,c){i.value=o,i.getSnapshot=c,Hh(i)&&Vh(t)}function zh(t,i,o){return o(function(){Hh(i)&&Vh(t)})}function Hh(t){var i=t.getSnapshot;t=t.value;try{var o=i();return!Ci(t,o)}catch{return!0}}function Vh(t){var i=ar(t,1);i!==null&&Ii(i,t,1,-1)}function Gh(t){var i=Vi();return typeof t=="function"&&(t=t()),i.memoizedState=i.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Vo,lastRenderedState:t},i.queue=t,t=t.dispatch=Wg.bind(null,hn,t),[i.memoizedState,t]}function Go(t,i,o,c){return t={tag:t,create:i,destroy:o,deps:c,next:null},i=hn.updateQueue,i===null?(i={lastEffect:null,stores:null},hn.updateQueue=i,i.lastEffect=t.next=t):(o=i.lastEffect,o===null?i.lastEffect=t.next=t:(c=o.next,o.next=t,t.next=c,i.lastEffect=t)),t}function Wh(){return yi().memoizedState}function Ga(t,i,o,c){var d=Vi();hn.flags|=t,d.memoizedState=Go(1|i,o,void 0,c===void 0?null:c)}function Wa(t,i,o,c){var d=yi();c=c===void 0?null:c;var h=void 0;if(wn!==null){var E=wn.memoizedState;if(h=E.destroy,c!==null&&Wc(c,E.deps)){d.memoizedState=Go(i,o,h,c);return}}hn.flags|=t,d.memoizedState=Go(1|i,o,h,c)}function Xh(t,i){return Ga(8390656,8,t,i)}function $c(t,i){return Wa(2048,8,t,i)}function jh(t,i){return Wa(4,2,t,i)}function Yh(t,i){return Wa(4,4,t,i)}function qh(t,i){if(typeof i=="function")return t=t(),i(t),function(){i(null)};if(i!=null)return t=t(),i.current=t,function(){i.current=null}}function $h(t,i,o){return o=o!=null?o.concat([t]):null,Wa(4,4,qh.bind(null,i,t),o)}function Kc(){}function Kh(t,i){var o=yi();i=i===void 0?null:i;var c=o.memoizedState;return c!==null&&i!==null&&Wc(i,c[1])?c[0]:(o.memoizedState=[t,i],t)}function Zh(t,i){var o=yi();i=i===void 0?null:i;var c=o.memoizedState;return c!==null&&i!==null&&Wc(i,c[1])?c[0]:(t=t(),o.memoizedState=[t,i],t)}function Jh(t,i,o){return(ss&21)===0?(t.baseState&&(t.baseState=!1,ni=!0),t.memoizedState=o):(Ci(o,i)||(o=Ze(),hn.lanes|=o,os|=o,t.baseState=!0),i)}function Vg(t,i){var o=Nt;Nt=o!==0&&4>o?o:4,t(!0);var c=Gc.transition;Gc.transition={};try{t(!1),i()}finally{Nt=o,Gc.transition=c}}function Qh(){return yi().memoizedState}function Gg(t,i,o){var c=Fr(t);if(o={lane:c,action:o,hasEagerState:!1,eagerState:null,next:null},ep(t))tp(i,o);else if(o=Lh(t,i,o,c),o!==null){var d=Kn();Ii(o,t,c,d),np(o,i,c)}}function Wg(t,i,o){var c=Fr(t),d={lane:c,action:o,hasEagerState:!1,eagerState:null,next:null};if(ep(t))tp(i,d);else{var h=t.alternate;if(t.lanes===0&&(h===null||h.lanes===0)&&(h=i.lastRenderedReducer,h!==null))try{var E=i.lastRenderedState,U=h(E,o);if(d.hasEagerState=!0,d.eagerState=U,Ci(U,E)){var H=i.interleaved;H===null?(d.next=d,Oc(i)):(d.next=H.next,H.next=d),i.interleaved=d;return}}catch{}finally{}o=Lh(t,i,d,c),o!==null&&(d=Kn(),Ii(o,t,c,d),np(o,i,c))}}function ep(t){var i=t.alternate;return t===hn||i!==null&&i===hn}function tp(t,i){zo=Va=!0;var o=t.pending;o===null?i.next=i:(i.next=o.next,o.next=i),t.pending=i}function np(t,i,o){if((o&4194240)!==0){var c=i.lanes;c&=t.pendingLanes,o|=c,i.lanes=o,Qn(t,o)}}var Xa={readContext:Si,useCallback:Hn,useContext:Hn,useEffect:Hn,useImperativeHandle:Hn,useInsertionEffect:Hn,useLayoutEffect:Hn,useMemo:Hn,useReducer:Hn,useRef:Hn,useState:Hn,useDebugValue:Hn,useDeferredValue:Hn,useTransition:Hn,useMutableSource:Hn,useSyncExternalStore:Hn,useId:Hn,unstable_isNewReconciler:!1},Xg={readContext:Si,useCallback:function(t,i){return Vi().memoizedState=[t,i===void 0?null:i],t},useContext:Si,useEffect:Xh,useImperativeHandle:function(t,i,o){return o=o!=null?o.concat([t]):null,Ga(4194308,4,qh.bind(null,i,t),o)},useLayoutEffect:function(t,i){return Ga(4194308,4,t,i)},useInsertionEffect:function(t,i){return Ga(4,2,t,i)},useMemo:function(t,i){var o=Vi();return i=i===void 0?null:i,t=t(),o.memoizedState=[t,i],t},useReducer:function(t,i,o){var c=Vi();return i=o!==void 0?o(i):i,c.memoizedState=c.baseState=i,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:i},c.queue=t,t=t.dispatch=Gg.bind(null,hn,t),[c.memoizedState,t]},useRef:function(t){var i=Vi();return t={current:t},i.memoizedState=t},useState:Gh,useDebugValue:Kc,useDeferredValue:function(t){return Vi().memoizedState=t},useTransition:function(){var t=Gh(!1),i=t[0];return t=Vg.bind(null,t[1]),Vi().memoizedState=t,[i,t]},useMutableSource:function(){},useSyncExternalStore:function(t,i,o){var c=hn,d=Vi();if(cn){if(o===void 0)throw Error(n(407));o=o()}else{if(o=i(),Dn===null)throw Error(n(349));(ss&30)!==0||kh(c,i,o)}d.memoizedState=o;var h={value:o,getSnapshot:i};return d.queue=h,Xh(zh.bind(null,c,h,t),[t]),c.flags|=2048,Go(9,Bh.bind(null,c,h,o,i),void 0,null),o},useId:function(){var t=Vi(),i=Dn.identifierPrefix;if(cn){var o=or,c=sr;o=(c&~(1<<32-He(c)-1)).toString(32)+o,i=":"+i+"R"+o,o=Ho++,0<o&&(i+="H"+o.toString(32)),i+=":"}else o=Hg++,i=":"+i+"r"+o.toString(32)+":";return t.memoizedState=i},unstable_isNewReconciler:!1},jg={readContext:Si,useCallback:Kh,useContext:Si,useEffect:$c,useImperativeHandle:$h,useInsertionEffect:jh,useLayoutEffect:Yh,useMemo:Zh,useReducer:Yc,useRef:Wh,useState:function(){return Yc(Vo)},useDebugValue:Kc,useDeferredValue:function(t){var i=yi();return Jh(i,wn.memoizedState,t)},useTransition:function(){var t=Yc(Vo)[0],i=yi().memoizedState;return[t,i]},useMutableSource:Fh,useSyncExternalStore:Oh,useId:Qh,unstable_isNewReconciler:!1},Yg={readContext:Si,useCallback:Kh,useContext:Si,useEffect:$c,useImperativeHandle:$h,useInsertionEffect:jh,useLayoutEffect:Yh,useMemo:Zh,useReducer:qc,useRef:Wh,useState:function(){return qc(Vo)},useDebugValue:Kc,useDeferredValue:function(t){var i=yi();return wn===null?i.memoizedState=t:Jh(i,wn.memoizedState,t)},useTransition:function(){var t=qc(Vo)[0],i=yi().memoizedState;return[t,i]},useMutableSource:Fh,useSyncExternalStore:Oh,useId:Qh,unstable_isNewReconciler:!1};function Pi(t,i){if(t&&t.defaultProps){i=de({},i),t=t.defaultProps;for(var o in t)i[o]===void 0&&(i[o]=t[o]);return i}return i}function Zc(t,i,o,c){i=t.memoizedState,o=o(c,i),o=o==null?i:de({},i,o),t.memoizedState=o,t.lanes===0&&(t.updateQueue.baseState=o)}var ja={isMounted:function(t){return(t=t._reactInternals)?en(t)===t:!1},enqueueSetState:function(t,i,o){t=t._reactInternals;var c=Kn(),d=Fr(t),h=lr(c,d);h.payload=i,o!=null&&(h.callback=o),i=Dr(t,h,d),i!==null&&(Ii(i,t,d,c),ka(i,t,d))},enqueueReplaceState:function(t,i,o){t=t._reactInternals;var c=Kn(),d=Fr(t),h=lr(c,d);h.tag=1,h.payload=i,o!=null&&(h.callback=o),i=Dr(t,h,d),i!==null&&(Ii(i,t,d,c),ka(i,t,d))},enqueueForceUpdate:function(t,i){t=t._reactInternals;var o=Kn(),c=Fr(t),d=lr(o,c);d.tag=2,i!=null&&(d.callback=i),i=Dr(t,d,c),i!==null&&(Ii(i,t,c,o),ka(i,t,c))}};function ip(t,i,o,c,d,h,E){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(c,h,E):i.prototype&&i.prototype.isPureReactComponent?!Ro(o,c)||!Ro(d,h):!0}function rp(t,i,o){var c=!1,d=Rr,h=i.contextType;return typeof h=="object"&&h!==null?h=Si(h):(d=ti(i)?es:zn.current,c=i.contextTypes,h=(c=c!=null)?Ns(t,d):Rr),i=new i(o,h),t.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,i.updater=ja,t.stateNode=i,i._reactInternals=t,c&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=d,t.__reactInternalMemoizedMaskedChildContext=h),i}function sp(t,i,o,c){t=i.state,typeof i.componentWillReceiveProps=="function"&&i.componentWillReceiveProps(o,c),typeof i.UNSAFE_componentWillReceiveProps=="function"&&i.UNSAFE_componentWillReceiveProps(o,c),i.state!==t&&ja.enqueueReplaceState(i,i.state,null)}function Jc(t,i,o,c){var d=t.stateNode;d.props=o,d.state=t.memoizedState,d.refs={},kc(t);var h=i.contextType;typeof h=="object"&&h!==null?d.context=Si(h):(h=ti(i)?es:zn.current,d.context=Ns(t,h)),d.state=t.memoizedState,h=i.getDerivedStateFromProps,typeof h=="function"&&(Zc(t,i,h,o),d.state=t.memoizedState),typeof i.getDerivedStateFromProps=="function"||typeof d.getSnapshotBeforeUpdate=="function"||typeof d.UNSAFE_componentWillMount!="function"&&typeof d.componentWillMount!="function"||(i=d.state,typeof d.componentWillMount=="function"&&d.componentWillMount(),typeof d.UNSAFE_componentWillMount=="function"&&d.UNSAFE_componentWillMount(),i!==d.state&&ja.enqueueReplaceState(d,d.state,null),Ba(t,o,d,c),d.state=t.memoizedState),typeof d.componentDidMount=="function"&&(t.flags|=4194308)}function Vs(t,i){try{var o="",c=i;do o+=Ye(c),c=c.return;while(c);var d=o}catch(h){d=`
Error generating stack: `+h.message+`
`+h.stack}return{value:t,source:i,stack:d,digest:null}}function Qc(t,i,o){return{value:t,source:null,stack:o??null,digest:i??null}}function eu(t,i){try{console.error(i.value)}catch(o){setTimeout(function(){throw o})}}var qg=typeof WeakMap=="function"?WeakMap:Map;function op(t,i,o){o=lr(-1,o),o.tag=3,o.payload={element:null};var c=i.value;return o.callback=function(){Qa||(Qa=!0,mu=c),eu(t,i)},o}function ap(t,i,o){o=lr(-1,o),o.tag=3;var c=t.type.getDerivedStateFromError;if(typeof c=="function"){var d=i.value;o.payload=function(){return c(d)},o.callback=function(){eu(t,i)}}var h=t.stateNode;return h!==null&&typeof h.componentDidCatch=="function"&&(o.callback=function(){eu(t,i),typeof c!="function"&&(Nr===null?Nr=new Set([this]):Nr.add(this));var E=i.stack;this.componentDidCatch(i.value,{componentStack:E!==null?E:""})}),o}function lp(t,i,o){var c=t.pingCache;if(c===null){c=t.pingCache=new qg;var d=new Set;c.set(i,d)}else d=c.get(i),d===void 0&&(d=new Set,c.set(i,d));d.has(o)||(d.add(o),t=l_.bind(null,t,i,o),i.then(t,t))}function cp(t){do{var i;if((i=t.tag===13)&&(i=t.memoizedState,i=i!==null?i.dehydrated!==null:!0),i)return t;t=t.return}while(t!==null);return null}function up(t,i,o,c,d){return(t.mode&1)===0?(t===i?t.flags|=65536:(t.flags|=128,o.flags|=131072,o.flags&=-52805,o.tag===1&&(o.alternate===null?o.tag=17:(i=lr(-1,1),i.tag=2,Dr(o,i,1))),o.lanes|=1),t):(t.flags|=65536,t.lanes=d,t)}var $g=P.ReactCurrentOwner,ni=!1;function $n(t,i,o,c){i.child=t===null?Ph(i,null,o,c):ks(i,t.child,o,c)}function dp(t,i,o,c,d){o=o.render;var h=i.ref;return zs(i,d),c=Xc(t,i,o,c,h,d),o=jc(),t!==null&&!ni?(i.updateQueue=t.updateQueue,i.flags&=-2053,t.lanes&=~d,cr(t,i,d)):(cn&&o&&Cc(i),i.flags|=1,$n(t,i,c,d),i.child)}function fp(t,i,o,c,d){if(t===null){var h=o.type;return typeof h=="function"&&!Mu(h)&&h.defaultProps===void 0&&o.compare===null&&o.defaultProps===void 0?(i.tag=15,i.type=h,hp(t,i,h,c,d)):(t=sl(o.type,null,c,i,i.mode,d),t.ref=i.ref,t.return=i,i.child=t)}if(h=t.child,(t.lanes&d)===0){var E=h.memoizedProps;if(o=o.compare,o=o!==null?o:Ro,o(E,c)&&t.ref===i.ref)return cr(t,i,d)}return i.flags|=1,t=kr(h,c),t.ref=i.ref,t.return=i,i.child=t}function hp(t,i,o,c,d){if(t!==null){var h=t.memoizedProps;if(Ro(h,c)&&t.ref===i.ref)if(ni=!1,i.pendingProps=c=h,(t.lanes&d)!==0)(t.flags&131072)!==0&&(ni=!0);else return i.lanes=t.lanes,cr(t,i,d)}return tu(t,i,o,c,d)}function pp(t,i,o){var c=i.pendingProps,d=c.children,h=t!==null?t.memoizedState:null;if(c.mode==="hidden")if((i.mode&1)===0)i.memoizedState={baseLanes:0,cachePool:null,transitions:null},nn(Ws,fi),fi|=o;else{if((o&1073741824)===0)return t=h!==null?h.baseLanes|o:o,i.lanes=i.childLanes=1073741824,i.memoizedState={baseLanes:t,cachePool:null,transitions:null},i.updateQueue=null,nn(Ws,fi),fi|=t,null;i.memoizedState={baseLanes:0,cachePool:null,transitions:null},c=h!==null?h.baseLanes:o,nn(Ws,fi),fi|=c}else h!==null?(c=h.baseLanes|o,i.memoizedState=null):c=o,nn(Ws,fi),fi|=c;return $n(t,i,d,o),i.child}function mp(t,i){var o=i.ref;(t===null&&o!==null||t!==null&&t.ref!==o)&&(i.flags|=512,i.flags|=2097152)}function tu(t,i,o,c,d){var h=ti(o)?es:zn.current;return h=Ns(i,h),zs(i,d),o=Xc(t,i,o,c,h,d),c=jc(),t!==null&&!ni?(i.updateQueue=t.updateQueue,i.flags&=-2053,t.lanes&=~d,cr(t,i,d)):(cn&&c&&Cc(i),i.flags|=1,$n(t,i,o,d),i.child)}function gp(t,i,o,c,d){if(ti(o)){var h=!0;Pa(i)}else h=!1;if(zs(i,d),i.stateNode===null)qa(t,i),rp(i,o,c),Jc(i,o,c,d),c=!0;else if(t===null){var E=i.stateNode,U=i.memoizedProps;E.props=U;var H=E.context,ce=o.contextType;typeof ce=="object"&&ce!==null?ce=Si(ce):(ce=ti(o)?es:zn.current,ce=Ns(i,ce));var Re=o.getDerivedStateFromProps,Le=typeof Re=="function"||typeof E.getSnapshotBeforeUpdate=="function";Le||typeof E.UNSAFE_componentWillReceiveProps!="function"&&typeof E.componentWillReceiveProps!="function"||(U!==c||H!==ce)&&sp(i,E,c,ce),Lr=!1;var Ce=i.memoizedState;E.state=Ce,Ba(i,c,E,d),H=i.memoizedState,U!==c||Ce!==H||ei.current||Lr?(typeof Re=="function"&&(Zc(i,o,Re,c),H=i.memoizedState),(U=Lr||ip(i,o,U,c,Ce,H,ce))?(Le||typeof E.UNSAFE_componentWillMount!="function"&&typeof E.componentWillMount!="function"||(typeof E.componentWillMount=="function"&&E.componentWillMount(),typeof E.UNSAFE_componentWillMount=="function"&&E.UNSAFE_componentWillMount()),typeof E.componentDidMount=="function"&&(i.flags|=4194308)):(typeof E.componentDidMount=="function"&&(i.flags|=4194308),i.memoizedProps=c,i.memoizedState=H),E.props=c,E.state=H,E.context=ce,c=U):(typeof E.componentDidMount=="function"&&(i.flags|=4194308),c=!1)}else{E=i.stateNode,Dh(t,i),U=i.memoizedProps,ce=i.type===i.elementType?U:Pi(i.type,U),E.props=ce,Le=i.pendingProps,Ce=E.context,H=o.contextType,typeof H=="object"&&H!==null?H=Si(H):(H=ti(o)?es:zn.current,H=Ns(i,H));var Je=o.getDerivedStateFromProps;(Re=typeof Je=="function"||typeof E.getSnapshotBeforeUpdate=="function")||typeof E.UNSAFE_componentWillReceiveProps!="function"&&typeof E.componentWillReceiveProps!="function"||(U!==Le||Ce!==H)&&sp(i,E,c,H),Lr=!1,Ce=i.memoizedState,E.state=Ce,Ba(i,c,E,d);var nt=i.memoizedState;U!==Le||Ce!==nt||ei.current||Lr?(typeof Je=="function"&&(Zc(i,o,Je,c),nt=i.memoizedState),(ce=Lr||ip(i,o,ce,c,Ce,nt,H)||!1)?(Re||typeof E.UNSAFE_componentWillUpdate!="function"&&typeof E.componentWillUpdate!="function"||(typeof E.componentWillUpdate=="function"&&E.componentWillUpdate(c,nt,H),typeof E.UNSAFE_componentWillUpdate=="function"&&E.UNSAFE_componentWillUpdate(c,nt,H)),typeof E.componentDidUpdate=="function"&&(i.flags|=4),typeof E.getSnapshotBeforeUpdate=="function"&&(i.flags|=1024)):(typeof E.componentDidUpdate!="function"||U===t.memoizedProps&&Ce===t.memoizedState||(i.flags|=4),typeof E.getSnapshotBeforeUpdate!="function"||U===t.memoizedProps&&Ce===t.memoizedState||(i.flags|=1024),i.memoizedProps=c,i.memoizedState=nt),E.props=c,E.state=nt,E.context=H,c=ce):(typeof E.componentDidUpdate!="function"||U===t.memoizedProps&&Ce===t.memoizedState||(i.flags|=4),typeof E.getSnapshotBeforeUpdate!="function"||U===t.memoizedProps&&Ce===t.memoizedState||(i.flags|=1024),c=!1)}return nu(t,i,o,c,h,d)}function nu(t,i,o,c,d,h){mp(t,i);var E=(i.flags&128)!==0;if(!c&&!E)return d&&yh(i,o,!1),cr(t,i,h);c=i.stateNode,$g.current=i;var U=E&&typeof o.getDerivedStateFromError!="function"?null:c.render();return i.flags|=1,t!==null&&E?(i.child=ks(i,t.child,null,h),i.child=ks(i,null,U,h)):$n(t,i,U,h),i.memoizedState=c.state,d&&yh(i,o,!0),i.child}function _p(t){var i=t.stateNode;i.pendingContext?xh(t,i.pendingContext,i.pendingContext!==i.context):i.context&&xh(t,i.context,!1),Bc(t,i.containerInfo)}function vp(t,i,o,c,d){return Os(),Dc(d),i.flags|=256,$n(t,i,o,c),i.child}var iu={dehydrated:null,treeContext:null,retryLane:0};function ru(t){return{baseLanes:t,cachePool:null,transitions:null}}function xp(t,i,o){var c=i.pendingProps,d=fn.current,h=!1,E=(i.flags&128)!==0,U;if((U=E)||(U=t!==null&&t.memoizedState===null?!1:(d&2)!==0),U?(h=!0,i.flags&=-129):(t===null||t.memoizedState!==null)&&(d|=1),nn(fn,d&1),t===null)return Lc(i),t=i.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?((i.mode&1)===0?i.lanes=1:t.data==="$!"?i.lanes=8:i.lanes=1073741824,null):(E=c.children,t=c.fallback,h?(c=i.mode,h=i.child,E={mode:"hidden",children:E},(c&1)===0&&h!==null?(h.childLanes=0,h.pendingProps=E):h=ol(E,c,0,null),t=us(t,c,o,null),h.return=i,t.return=i,h.sibling=t,i.child=h,i.child.memoizedState=ru(o),i.memoizedState=iu,t):su(i,E));if(d=t.memoizedState,d!==null&&(U=d.dehydrated,U!==null))return Kg(t,i,E,c,U,d,o);if(h){h=c.fallback,E=i.mode,d=t.child,U=d.sibling;var H={mode:"hidden",children:c.children};return(E&1)===0&&i.child!==d?(c=i.child,c.childLanes=0,c.pendingProps=H,i.deletions=null):(c=kr(d,H),c.subtreeFlags=d.subtreeFlags&14680064),U!==null?h=kr(U,h):(h=us(h,E,o,null),h.flags|=2),h.return=i,c.return=i,c.sibling=h,i.child=c,c=h,h=i.child,E=t.child.memoizedState,E=E===null?ru(o):{baseLanes:E.baseLanes|o,cachePool:null,transitions:E.transitions},h.memoizedState=E,h.childLanes=t.childLanes&~o,i.memoizedState=iu,c}return h=t.child,t=h.sibling,c=kr(h,{mode:"visible",children:c.children}),(i.mode&1)===0&&(c.lanes=o),c.return=i,c.sibling=null,t!==null&&(o=i.deletions,o===null?(i.deletions=[t],i.flags|=16):o.push(t)),i.child=c,i.memoizedState=null,c}function su(t,i){return i=ol({mode:"visible",children:i},t.mode,0,null),i.return=t,t.child=i}function Ya(t,i,o,c){return c!==null&&Dc(c),ks(i,t.child,null,o),t=su(i,i.pendingProps.children),t.flags|=2,i.memoizedState=null,t}function Kg(t,i,o,c,d,h,E){if(o)return i.flags&256?(i.flags&=-257,c=Qc(Error(n(422))),Ya(t,i,E,c)):i.memoizedState!==null?(i.child=t.child,i.flags|=128,null):(h=c.fallback,d=i.mode,c=ol({mode:"visible",children:c.children},d,0,null),h=us(h,d,E,null),h.flags|=2,c.return=i,h.return=i,c.sibling=h,i.child=c,(i.mode&1)!==0&&ks(i,t.child,null,E),i.child.memoizedState=ru(E),i.memoizedState=iu,h);if((i.mode&1)===0)return Ya(t,i,E,null);if(d.data==="$!"){if(c=d.nextSibling&&d.nextSibling.dataset,c)var U=c.dgst;return c=U,h=Error(n(419)),c=Qc(h,c,void 0),Ya(t,i,E,c)}if(U=(E&t.childLanes)!==0,ni||U){if(c=Dn,c!==null){switch(E&-E){case 4:d=2;break;case 16:d=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:d=32;break;case 536870912:d=268435456;break;default:d=0}d=(d&(c.suspendedLanes|E))!==0?0:d,d!==0&&d!==h.retryLane&&(h.retryLane=d,ar(t,d),Ii(c,t,d,-1))}return yu(),c=Qc(Error(n(421))),Ya(t,i,E,c)}return d.data==="$?"?(i.flags|=128,i.child=t.child,i=c_.bind(null,t),d._reactRetry=i,null):(t=h.treeContext,di=br(d.nextSibling),ui=i,cn=!0,Ri=null,t!==null&&(vi[xi++]=sr,vi[xi++]=or,vi[xi++]=ts,sr=t.id,or=t.overflow,ts=i),i=su(i,c.children),i.flags|=4096,i)}function Sp(t,i,o){t.lanes|=i;var c=t.alternate;c!==null&&(c.lanes|=i),Fc(t.return,i,o)}function ou(t,i,o,c,d){var h=t.memoizedState;h===null?t.memoizedState={isBackwards:i,rendering:null,renderingStartTime:0,last:c,tail:o,tailMode:d}:(h.isBackwards=i,h.rendering=null,h.renderingStartTime=0,h.last=c,h.tail=o,h.tailMode=d)}function yp(t,i,o){var c=i.pendingProps,d=c.revealOrder,h=c.tail;if($n(t,i,c.children,o),c=fn.current,(c&2)!==0)c=c&1|2,i.flags|=128;else{if(t!==null&&(t.flags&128)!==0)e:for(t=i.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&Sp(t,o,i);else if(t.tag===19)Sp(t,o,i);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===i)break e;for(;t.sibling===null;){if(t.return===null||t.return===i)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}c&=1}if(nn(fn,c),(i.mode&1)===0)i.memoizedState=null;else switch(d){case"forwards":for(o=i.child,d=null;o!==null;)t=o.alternate,t!==null&&za(t)===null&&(d=o),o=o.sibling;o=d,o===null?(d=i.child,i.child=null):(d=o.sibling,o.sibling=null),ou(i,!1,d,o,h);break;case"backwards":for(o=null,d=i.child,i.child=null;d!==null;){if(t=d.alternate,t!==null&&za(t)===null){i.child=d;break}t=d.sibling,d.sibling=o,o=d,d=t}ou(i,!0,o,null,h);break;case"together":ou(i,!1,null,null,void 0);break;default:i.memoizedState=null}return i.child}function qa(t,i){(i.mode&1)===0&&t!==null&&(t.alternate=null,i.alternate=null,i.flags|=2)}function cr(t,i,o){if(t!==null&&(i.dependencies=t.dependencies),os|=i.lanes,(o&i.childLanes)===0)return null;if(t!==null&&i.child!==t.child)throw Error(n(153));if(i.child!==null){for(t=i.child,o=kr(t,t.pendingProps),i.child=o,o.return=i;t.sibling!==null;)t=t.sibling,o=o.sibling=kr(t,t.pendingProps),o.return=i;o.sibling=null}return i.child}function Zg(t,i,o){switch(i.tag){case 3:_p(i),Os();break;case 5:Uh(i);break;case 1:ti(i.type)&&Pa(i);break;case 4:Bc(i,i.stateNode.containerInfo);break;case 10:var c=i.type._context,d=i.memoizedProps.value;nn(Fa,c._currentValue),c._currentValue=d;break;case 13:if(c=i.memoizedState,c!==null)return c.dehydrated!==null?(nn(fn,fn.current&1),i.flags|=128,null):(o&i.child.childLanes)!==0?xp(t,i,o):(nn(fn,fn.current&1),t=cr(t,i,o),t!==null?t.sibling:null);nn(fn,fn.current&1);break;case 19:if(c=(o&i.childLanes)!==0,(t.flags&128)!==0){if(c)return yp(t,i,o);i.flags|=128}if(d=i.memoizedState,d!==null&&(d.rendering=null,d.tail=null,d.lastEffect=null),nn(fn,fn.current),c)break;return null;case 22:case 23:return i.lanes=0,pp(t,i,o)}return cr(t,i,o)}var Mp,au,Ep,wp;Mp=function(t,i){for(var o=i.child;o!==null;){if(o.tag===5||o.tag===6)t.appendChild(o.stateNode);else if(o.tag!==4&&o.child!==null){o.child.return=o,o=o.child;continue}if(o===i)break;for(;o.sibling===null;){if(o.return===null||o.return===i)return;o=o.return}o.sibling.return=o.return,o=o.sibling}},au=function(){},Ep=function(t,i,o,c){var d=t.memoizedProps;if(d!==c){t=i.stateNode,rs(Hi.current);var h=null;switch(o){case"input":d=Pt(t,d),c=Pt(t,c),h=[];break;case"select":d=de({},d,{value:void 0}),c=de({},c,{value:void 0}),h=[];break;case"textarea":d=N(t,d),c=N(t,c),h=[];break;default:typeof d.onClick!="function"&&typeof c.onClick=="function"&&(t.onclick=ba)}$e(o,c);var E;o=null;for(ce in d)if(!c.hasOwnProperty(ce)&&d.hasOwnProperty(ce)&&d[ce]!=null)if(ce==="style"){var U=d[ce];for(E in U)U.hasOwnProperty(E)&&(o||(o={}),o[E]="")}else ce!=="dangerouslySetInnerHTML"&&ce!=="children"&&ce!=="suppressContentEditableWarning"&&ce!=="suppressHydrationWarning"&&ce!=="autoFocus"&&(a.hasOwnProperty(ce)?h||(h=[]):(h=h||[]).push(ce,null));for(ce in c){var H=c[ce];if(U=d!=null?d[ce]:void 0,c.hasOwnProperty(ce)&&H!==U&&(H!=null||U!=null))if(ce==="style")if(U){for(E in U)!U.hasOwnProperty(E)||H&&H.hasOwnProperty(E)||(o||(o={}),o[E]="");for(E in H)H.hasOwnProperty(E)&&U[E]!==H[E]&&(o||(o={}),o[E]=H[E])}else o||(h||(h=[]),h.push(ce,o)),o=H;else ce==="dangerouslySetInnerHTML"?(H=H?H.__html:void 0,U=U?U.__html:void 0,H!=null&&U!==H&&(h=h||[]).push(ce,H)):ce==="children"?typeof H!="string"&&typeof H!="number"||(h=h||[]).push(ce,""+H):ce!=="suppressContentEditableWarning"&&ce!=="suppressHydrationWarning"&&(a.hasOwnProperty(ce)?(H!=null&&ce==="onScroll"&&on("scroll",t),h||U===H||(h=[])):(h=h||[]).push(ce,H))}o&&(h=h||[]).push("style",o);var ce=h;(i.updateQueue=ce)&&(i.flags|=4)}},wp=function(t,i,o,c){o!==c&&(i.flags|=4)};function Wo(t,i){if(!cn)switch(t.tailMode){case"hidden":i=t.tail;for(var o=null;i!==null;)i.alternate!==null&&(o=i),i=i.sibling;o===null?t.tail=null:o.sibling=null;break;case"collapsed":o=t.tail;for(var c=null;o!==null;)o.alternate!==null&&(c=o),o=o.sibling;c===null?i||t.tail===null?t.tail=null:t.tail.sibling=null:c.sibling=null}}function Vn(t){var i=t.alternate!==null&&t.alternate.child===t.child,o=0,c=0;if(i)for(var d=t.child;d!==null;)o|=d.lanes|d.childLanes,c|=d.subtreeFlags&14680064,c|=d.flags&14680064,d.return=t,d=d.sibling;else for(d=t.child;d!==null;)o|=d.lanes|d.childLanes,c|=d.subtreeFlags,c|=d.flags,d.return=t,d=d.sibling;return t.subtreeFlags|=c,t.childLanes=o,i}function Jg(t,i,o){var c=i.pendingProps;switch(Rc(i),i.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Vn(i),null;case 1:return ti(i.type)&&Ra(),Vn(i),null;case 3:return c=i.stateNode,Hs(),an(ei),an(zn),Vc(),c.pendingContext&&(c.context=c.pendingContext,c.pendingContext=null),(t===null||t.child===null)&&(Na(i)?i.flags|=4:t===null||t.memoizedState.isDehydrated&&(i.flags&256)===0||(i.flags|=1024,Ri!==null&&(vu(Ri),Ri=null))),au(t,i),Vn(i),null;case 5:zc(i);var d=rs(Bo.current);if(o=i.type,t!==null&&i.stateNode!=null)Ep(t,i,o,c,d),t.ref!==i.ref&&(i.flags|=512,i.flags|=2097152);else{if(!c){if(i.stateNode===null)throw Error(n(166));return Vn(i),null}if(t=rs(Hi.current),Na(i)){c=i.stateNode,o=i.type;var h=i.memoizedProps;switch(c[zi]=i,c[No]=h,t=(i.mode&1)!==0,o){case"dialog":on("cancel",c),on("close",c);break;case"iframe":case"object":case"embed":on("load",c);break;case"video":case"audio":for(d=0;d<Lo.length;d++)on(Lo[d],c);break;case"source":on("error",c);break;case"img":case"image":case"link":on("error",c),on("load",c);break;case"details":on("toggle",c);break;case"input":kt(c,h),on("invalid",c);break;case"select":c._wrapperState={wasMultiple:!!h.multiple},on("invalid",c);break;case"textarea":_t(c,h),on("invalid",c)}$e(o,h),d=null;for(var E in h)if(h.hasOwnProperty(E)){var U=h[E];E==="children"?typeof U=="string"?c.textContent!==U&&(h.suppressHydrationWarning!==!0&&Aa(c.textContent,U,t),d=["children",U]):typeof U=="number"&&c.textContent!==""+U&&(h.suppressHydrationWarning!==!0&&Aa(c.textContent,U,t),d=["children",""+U]):a.hasOwnProperty(E)&&U!=null&&E==="onScroll"&&on("scroll",c)}switch(o){case"input":ot(c),Yt(c,h,!0);break;case"textarea":ot(c),Rt(c);break;case"select":case"option":break;default:typeof h.onClick=="function"&&(c.onclick=ba)}c=d,i.updateQueue=c,c!==null&&(i.flags|=4)}else{E=d.nodeType===9?d:d.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=C(o)),t==="http://www.w3.org/1999/xhtml"?o==="script"?(t=E.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof c.is=="string"?t=E.createElement(o,{is:c.is}):(t=E.createElement(o),o==="select"&&(E=t,c.multiple?E.multiple=!0:c.size&&(E.size=c.size))):t=E.createElementNS(t,o),t[zi]=i,t[No]=c,Mp(t,i,!1,!1),i.stateNode=t;e:{switch(E=Oe(o,c),o){case"dialog":on("cancel",t),on("close",t),d=c;break;case"iframe":case"object":case"embed":on("load",t),d=c;break;case"video":case"audio":for(d=0;d<Lo.length;d++)on(Lo[d],t);d=c;break;case"source":on("error",t),d=c;break;case"img":case"image":case"link":on("error",t),on("load",t),d=c;break;case"details":on("toggle",t),d=c;break;case"input":kt(t,c),d=Pt(t,c),on("invalid",t);break;case"option":d=c;break;case"select":t._wrapperState={wasMultiple:!!c.multiple},d=de({},c,{value:void 0}),on("invalid",t);break;case"textarea":_t(t,c),d=N(t,c),on("invalid",t);break;default:d=c}$e(o,d),U=d;for(h in U)if(U.hasOwnProperty(h)){var H=U[h];h==="style"?xe(t,H):h==="dangerouslySetInnerHTML"?(H=H?H.__html:void 0,H!=null&&me(t,H)):h==="children"?typeof H=="string"?(o!=="textarea"||H!=="")&&Ee(t,H):typeof H=="number"&&Ee(t,""+H):h!=="suppressContentEditableWarning"&&h!=="suppressHydrationWarning"&&h!=="autoFocus"&&(a.hasOwnProperty(h)?H!=null&&h==="onScroll"&&on("scroll",t):H!=null&&L(t,h,H,E))}switch(o){case"input":ot(t),Yt(t,c,!1);break;case"textarea":ot(t),Rt(t);break;case"option":c.value!=null&&t.setAttribute("value",""+ye(c.value));break;case"select":t.multiple=!!c.multiple,h=c.value,h!=null?he(t,!!c.multiple,h,!1):c.defaultValue!=null&&he(t,!!c.multiple,c.defaultValue,!0);break;default:typeof d.onClick=="function"&&(t.onclick=ba)}switch(o){case"button":case"input":case"select":case"textarea":c=!!c.autoFocus;break e;case"img":c=!0;break e;default:c=!1}}c&&(i.flags|=4)}i.ref!==null&&(i.flags|=512,i.flags|=2097152)}return Vn(i),null;case 6:if(t&&i.stateNode!=null)wp(t,i,t.memoizedProps,c);else{if(typeof c!="string"&&i.stateNode===null)throw Error(n(166));if(o=rs(Bo.current),rs(Hi.current),Na(i)){if(c=i.stateNode,o=i.memoizedProps,c[zi]=i,(h=c.nodeValue!==o)&&(t=ui,t!==null))switch(t.tag){case 3:Aa(c.nodeValue,o,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&Aa(c.nodeValue,o,(t.mode&1)!==0)}h&&(i.flags|=4)}else c=(o.nodeType===9?o:o.ownerDocument).createTextNode(c),c[zi]=i,i.stateNode=c}return Vn(i),null;case 13:if(an(fn),c=i.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(cn&&di!==null&&(i.mode&1)!==0&&(i.flags&128)===0)bh(),Os(),i.flags|=98560,h=!1;else if(h=Na(i),c!==null&&c.dehydrated!==null){if(t===null){if(!h)throw Error(n(318));if(h=i.memoizedState,h=h!==null?h.dehydrated:null,!h)throw Error(n(317));h[zi]=i}else Os(),(i.flags&128)===0&&(i.memoizedState=null),i.flags|=4;Vn(i),h=!1}else Ri!==null&&(vu(Ri),Ri=null),h=!0;if(!h)return i.flags&65536?i:null}return(i.flags&128)!==0?(i.lanes=o,i):(c=c!==null,c!==(t!==null&&t.memoizedState!==null)&&c&&(i.child.flags|=8192,(i.mode&1)!==0&&(t===null||(fn.current&1)!==0?Tn===0&&(Tn=3):yu())),i.updateQueue!==null&&(i.flags|=4),Vn(i),null);case 4:return Hs(),au(t,i),t===null&&Do(i.stateNode.containerInfo),Vn(i),null;case 10:return Uc(i.type._context),Vn(i),null;case 17:return ti(i.type)&&Ra(),Vn(i),null;case 19:if(an(fn),h=i.memoizedState,h===null)return Vn(i),null;if(c=(i.flags&128)!==0,E=h.rendering,E===null)if(c)Wo(h,!1);else{if(Tn!==0||t!==null&&(t.flags&128)!==0)for(t=i.child;t!==null;){if(E=za(t),E!==null){for(i.flags|=128,Wo(h,!1),c=E.updateQueue,c!==null&&(i.updateQueue=c,i.flags|=4),i.subtreeFlags=0,c=o,o=i.child;o!==null;)h=o,t=c,h.flags&=14680066,E=h.alternate,E===null?(h.childLanes=0,h.lanes=t,h.child=null,h.subtreeFlags=0,h.memoizedProps=null,h.memoizedState=null,h.updateQueue=null,h.dependencies=null,h.stateNode=null):(h.childLanes=E.childLanes,h.lanes=E.lanes,h.child=E.child,h.subtreeFlags=0,h.deletions=null,h.memoizedProps=E.memoizedProps,h.memoizedState=E.memoizedState,h.updateQueue=E.updateQueue,h.type=E.type,t=E.dependencies,h.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),o=o.sibling;return nn(fn,fn.current&1|2),i.child}t=t.sibling}h.tail!==null&&dn()>Xs&&(i.flags|=128,c=!0,Wo(h,!1),i.lanes=4194304)}else{if(!c)if(t=za(E),t!==null){if(i.flags|=128,c=!0,o=t.updateQueue,o!==null&&(i.updateQueue=o,i.flags|=4),Wo(h,!0),h.tail===null&&h.tailMode==="hidden"&&!E.alternate&&!cn)return Vn(i),null}else 2*dn()-h.renderingStartTime>Xs&&o!==1073741824&&(i.flags|=128,c=!0,Wo(h,!1),i.lanes=4194304);h.isBackwards?(E.sibling=i.child,i.child=E):(o=h.last,o!==null?o.sibling=E:i.child=E,h.last=E)}return h.tail!==null?(i=h.tail,h.rendering=i,h.tail=i.sibling,h.renderingStartTime=dn(),i.sibling=null,o=fn.current,nn(fn,c?o&1|2:o&1),i):(Vn(i),null);case 22:case 23:return Su(),c=i.memoizedState!==null,t!==null&&t.memoizedState!==null!==c&&(i.flags|=8192),c&&(i.mode&1)!==0?(fi&1073741824)!==0&&(Vn(i),i.subtreeFlags&6&&(i.flags|=8192)):Vn(i),null;case 24:return null;case 25:return null}throw Error(n(156,i.tag))}function Qg(t,i){switch(Rc(i),i.tag){case 1:return ti(i.type)&&Ra(),t=i.flags,t&65536?(i.flags=t&-65537|128,i):null;case 3:return Hs(),an(ei),an(zn),Vc(),t=i.flags,(t&65536)!==0&&(t&128)===0?(i.flags=t&-65537|128,i):null;case 5:return zc(i),null;case 13:if(an(fn),t=i.memoizedState,t!==null&&t.dehydrated!==null){if(i.alternate===null)throw Error(n(340));Os()}return t=i.flags,t&65536?(i.flags=t&-65537|128,i):null;case 19:return an(fn),null;case 4:return Hs(),null;case 10:return Uc(i.type._context),null;case 22:case 23:return Su(),null;case 24:return null;default:return null}}var $a=!1,Gn=!1,e_=typeof WeakSet=="function"?WeakSet:Set,et=null;function Gs(t,i){var o=t.ref;if(o!==null)if(typeof o=="function")try{o(null)}catch(c){pn(t,i,c)}else o.current=null}function lu(t,i,o){try{o()}catch(c){pn(t,i,c)}}var Tp=!1;function t_(t,i){if(Sc=ma,t=ih(),fc(t)){if("selectionStart"in t)var o={start:t.selectionStart,end:t.selectionEnd};else e:{o=(o=t.ownerDocument)&&o.defaultView||window;var c=o.getSelection&&o.getSelection();if(c&&c.rangeCount!==0){o=c.anchorNode;var d=c.anchorOffset,h=c.focusNode;c=c.focusOffset;try{o.nodeType,h.nodeType}catch{o=null;break e}var E=0,U=-1,H=-1,ce=0,Re=0,Le=t,Ce=null;t:for(;;){for(var Je;Le!==o||d!==0&&Le.nodeType!==3||(U=E+d),Le!==h||c!==0&&Le.nodeType!==3||(H=E+c),Le.nodeType===3&&(E+=Le.nodeValue.length),(Je=Le.firstChild)!==null;)Ce=Le,Le=Je;for(;;){if(Le===t)break t;if(Ce===o&&++ce===d&&(U=E),Ce===h&&++Re===c&&(H=E),(Je=Le.nextSibling)!==null)break;Le=Ce,Ce=Le.parentNode}Le=Je}o=U===-1||H===-1?null:{start:U,end:H}}else o=null}o=o||{start:0,end:0}}else o=null;for(yc={focusedElem:t,selectionRange:o},ma=!1,et=i;et!==null;)if(i=et,t=i.child,(i.subtreeFlags&1028)!==0&&t!==null)t.return=i,et=t;else for(;et!==null;){i=et;try{var nt=i.alternate;if((i.flags&1024)!==0)switch(i.tag){case 0:case 11:case 15:break;case 1:if(nt!==null){var rt=nt.memoizedProps,vn=nt.memoizedState,Q=i.stateNode,X=Q.getSnapshotBeforeUpdate(i.elementType===i.type?rt:Pi(i.type,rt),vn);Q.__reactInternalSnapshotBeforeUpdate=X}break;case 3:var se=i.stateNode.containerInfo;se.nodeType===1?se.textContent="":se.nodeType===9&&se.documentElement&&se.removeChild(se.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(n(163))}}catch(ze){pn(i,i.return,ze)}if(t=i.sibling,t!==null){t.return=i.return,et=t;break}et=i.return}return nt=Tp,Tp=!1,nt}function Xo(t,i,o){var c=i.updateQueue;if(c=c!==null?c.lastEffect:null,c!==null){var d=c=c.next;do{if((d.tag&t)===t){var h=d.destroy;d.destroy=void 0,h!==void 0&&lu(i,o,h)}d=d.next}while(d!==c)}}function Ka(t,i){if(i=i.updateQueue,i=i!==null?i.lastEffect:null,i!==null){var o=i=i.next;do{if((o.tag&t)===t){var c=o.create;o.destroy=c()}o=o.next}while(o!==i)}}function cu(t){var i=t.ref;if(i!==null){var o=t.stateNode;switch(t.tag){case 5:t=o;break;default:t=o}typeof i=="function"?i(t):i.current=t}}function Ap(t){var i=t.alternate;i!==null&&(t.alternate=null,Ap(i)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(i=t.stateNode,i!==null&&(delete i[zi],delete i[No],delete i[Tc],delete i[Og],delete i[kg])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function bp(t){return t.tag===5||t.tag===3||t.tag===4}function Cp(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||bp(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function uu(t,i,o){var c=t.tag;if(c===5||c===6)t=t.stateNode,i?o.nodeType===8?o.parentNode.insertBefore(t,i):o.insertBefore(t,i):(o.nodeType===8?(i=o.parentNode,i.insertBefore(t,o)):(i=o,i.appendChild(t)),o=o._reactRootContainer,o!=null||i.onclick!==null||(i.onclick=ba));else if(c!==4&&(t=t.child,t!==null))for(uu(t,i,o),t=t.sibling;t!==null;)uu(t,i,o),t=t.sibling}function du(t,i,o){var c=t.tag;if(c===5||c===6)t=t.stateNode,i?o.insertBefore(t,i):o.appendChild(t);else if(c!==4&&(t=t.child,t!==null))for(du(t,i,o),t=t.sibling;t!==null;)du(t,i,o),t=t.sibling}var On=null,Li=!1;function Ir(t,i,o){for(o=o.child;o!==null;)Rp(t,i,o),o=o.sibling}function Rp(t,i,o){if(We&&typeof We.onCommitFiberUnmount=="function")try{We.onCommitFiberUnmount(ie,o)}catch{}switch(o.tag){case 5:Gn||Gs(o,i);case 6:var c=On,d=Li;On=null,Ir(t,i,o),On=c,Li=d,On!==null&&(Li?(t=On,o=o.stateNode,t.nodeType===8?t.parentNode.removeChild(o):t.removeChild(o)):On.removeChild(o.stateNode));break;case 18:On!==null&&(Li?(t=On,o=o.stateNode,t.nodeType===8?wc(t.parentNode,o):t.nodeType===1&&wc(t,o),Eo(t)):wc(On,o.stateNode));break;case 4:c=On,d=Li,On=o.stateNode.containerInfo,Li=!0,Ir(t,i,o),On=c,Li=d;break;case 0:case 11:case 14:case 15:if(!Gn&&(c=o.updateQueue,c!==null&&(c=c.lastEffect,c!==null))){d=c=c.next;do{var h=d,E=h.destroy;h=h.tag,E!==void 0&&((h&2)!==0||(h&4)!==0)&&lu(o,i,E),d=d.next}while(d!==c)}Ir(t,i,o);break;case 1:if(!Gn&&(Gs(o,i),c=o.stateNode,typeof c.componentWillUnmount=="function"))try{c.props=o.memoizedProps,c.state=o.memoizedState,c.componentWillUnmount()}catch(U){pn(o,i,U)}Ir(t,i,o);break;case 21:Ir(t,i,o);break;case 22:o.mode&1?(Gn=(c=Gn)||o.memoizedState!==null,Ir(t,i,o),Gn=c):Ir(t,i,o);break;default:Ir(t,i,o)}}function Pp(t){var i=t.updateQueue;if(i!==null){t.updateQueue=null;var o=t.stateNode;o===null&&(o=t.stateNode=new e_),i.forEach(function(c){var d=u_.bind(null,t,c);o.has(c)||(o.add(c),c.then(d,d))})}}function Di(t,i){var o=i.deletions;if(o!==null)for(var c=0;c<o.length;c++){var d=o[c];try{var h=t,E=i,U=E;e:for(;U!==null;){switch(U.tag){case 5:On=U.stateNode,Li=!1;break e;case 3:On=U.stateNode.containerInfo,Li=!0;break e;case 4:On=U.stateNode.containerInfo,Li=!0;break e}U=U.return}if(On===null)throw Error(n(160));Rp(h,E,d),On=null,Li=!1;var H=d.alternate;H!==null&&(H.return=null),d.return=null}catch(ce){pn(d,i,ce)}}if(i.subtreeFlags&12854)for(i=i.child;i!==null;)Lp(i,t),i=i.sibling}function Lp(t,i){var o=t.alternate,c=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(Di(i,t),Gi(t),c&4){try{Xo(3,t,t.return),Ka(3,t)}catch(rt){pn(t,t.return,rt)}try{Xo(5,t,t.return)}catch(rt){pn(t,t.return,rt)}}break;case 1:Di(i,t),Gi(t),c&512&&o!==null&&Gs(o,o.return);break;case 5:if(Di(i,t),Gi(t),c&512&&o!==null&&Gs(o,o.return),t.flags&32){var d=t.stateNode;try{Ee(d,"")}catch(rt){pn(t,t.return,rt)}}if(c&4&&(d=t.stateNode,d!=null)){var h=t.memoizedProps,E=o!==null?o.memoizedProps:h,U=t.type,H=t.updateQueue;if(t.updateQueue=null,H!==null)try{U==="input"&&h.type==="radio"&&h.name!=null&&dt(d,h),Oe(U,E);var ce=Oe(U,h);for(E=0;E<H.length;E+=2){var Re=H[E],Le=H[E+1];Re==="style"?xe(d,Le):Re==="dangerouslySetInnerHTML"?me(d,Le):Re==="children"?Ee(d,Le):L(d,Re,Le,ce)}switch(U){case"input":Xt(d,h);break;case"textarea":Fe(d,h);break;case"select":var Ce=d._wrapperState.wasMultiple;d._wrapperState.wasMultiple=!!h.multiple;var Je=h.value;Je!=null?he(d,!!h.multiple,Je,!1):Ce!==!!h.multiple&&(h.defaultValue!=null?he(d,!!h.multiple,h.defaultValue,!0):he(d,!!h.multiple,h.multiple?[]:"",!1))}d[No]=h}catch(rt){pn(t,t.return,rt)}}break;case 6:if(Di(i,t),Gi(t),c&4){if(t.stateNode===null)throw Error(n(162));d=t.stateNode,h=t.memoizedProps;try{d.nodeValue=h}catch(rt){pn(t,t.return,rt)}}break;case 3:if(Di(i,t),Gi(t),c&4&&o!==null&&o.memoizedState.isDehydrated)try{Eo(i.containerInfo)}catch(rt){pn(t,t.return,rt)}break;case 4:Di(i,t),Gi(t);break;case 13:Di(i,t),Gi(t),d=t.child,d.flags&8192&&(h=d.memoizedState!==null,d.stateNode.isHidden=h,!h||d.alternate!==null&&d.alternate.memoizedState!==null||(pu=dn())),c&4&&Pp(t);break;case 22:if(Re=o!==null&&o.memoizedState!==null,t.mode&1?(Gn=(ce=Gn)||Re,Di(i,t),Gn=ce):Di(i,t),Gi(t),c&8192){if(ce=t.memoizedState!==null,(t.stateNode.isHidden=ce)&&!Re&&(t.mode&1)!==0)for(et=t,Re=t.child;Re!==null;){for(Le=et=Re;et!==null;){switch(Ce=et,Je=Ce.child,Ce.tag){case 0:case 11:case 14:case 15:Xo(4,Ce,Ce.return);break;case 1:Gs(Ce,Ce.return);var nt=Ce.stateNode;if(typeof nt.componentWillUnmount=="function"){c=Ce,o=Ce.return;try{i=c,nt.props=i.memoizedProps,nt.state=i.memoizedState,nt.componentWillUnmount()}catch(rt){pn(c,o,rt)}}break;case 5:Gs(Ce,Ce.return);break;case 22:if(Ce.memoizedState!==null){Np(Le);continue}}Je!==null?(Je.return=Ce,et=Je):Np(Le)}Re=Re.sibling}e:for(Re=null,Le=t;;){if(Le.tag===5){if(Re===null){Re=Le;try{d=Le.stateNode,ce?(h=d.style,typeof h.setProperty=="function"?h.setProperty("display","none","important"):h.display="none"):(U=Le.stateNode,H=Le.memoizedProps.style,E=H!=null&&H.hasOwnProperty("display")?H.display:null,U.style.display=fe("display",E))}catch(rt){pn(t,t.return,rt)}}}else if(Le.tag===6){if(Re===null)try{Le.stateNode.nodeValue=ce?"":Le.memoizedProps}catch(rt){pn(t,t.return,rt)}}else if((Le.tag!==22&&Le.tag!==23||Le.memoizedState===null||Le===t)&&Le.child!==null){Le.child.return=Le,Le=Le.child;continue}if(Le===t)break e;for(;Le.sibling===null;){if(Le.return===null||Le.return===t)break e;Re===Le&&(Re=null),Le=Le.return}Re===Le&&(Re=null),Le.sibling.return=Le.return,Le=Le.sibling}}break;case 19:Di(i,t),Gi(t),c&4&&Pp(t);break;case 21:break;default:Di(i,t),Gi(t)}}function Gi(t){var i=t.flags;if(i&2){try{e:{for(var o=t.return;o!==null;){if(bp(o)){var c=o;break e}o=o.return}throw Error(n(160))}switch(c.tag){case 5:var d=c.stateNode;c.flags&32&&(Ee(d,""),c.flags&=-33);var h=Cp(t);du(t,h,d);break;case 3:case 4:var E=c.stateNode.containerInfo,U=Cp(t);uu(t,U,E);break;default:throw Error(n(161))}}catch(H){pn(t,t.return,H)}t.flags&=-3}i&4096&&(t.flags&=-4097)}function n_(t,i,o){et=t,Dp(t)}function Dp(t,i,o){for(var c=(t.mode&1)!==0;et!==null;){var d=et,h=d.child;if(d.tag===22&&c){var E=d.memoizedState!==null||$a;if(!E){var U=d.alternate,H=U!==null&&U.memoizedState!==null||Gn;U=$a;var ce=Gn;if($a=E,(Gn=H)&&!ce)for(et=d;et!==null;)E=et,H=E.child,E.tag===22&&E.memoizedState!==null?Up(d):H!==null?(H.return=E,et=H):Up(d);for(;h!==null;)et=h,Dp(h),h=h.sibling;et=d,$a=U,Gn=ce}Ip(t)}else(d.subtreeFlags&8772)!==0&&h!==null?(h.return=d,et=h):Ip(t)}}function Ip(t){for(;et!==null;){var i=et;if((i.flags&8772)!==0){var o=i.alternate;try{if((i.flags&8772)!==0)switch(i.tag){case 0:case 11:case 15:Gn||Ka(5,i);break;case 1:var c=i.stateNode;if(i.flags&4&&!Gn)if(o===null)c.componentDidMount();else{var d=i.elementType===i.type?o.memoizedProps:Pi(i.type,o.memoizedProps);c.componentDidUpdate(d,o.memoizedState,c.__reactInternalSnapshotBeforeUpdate)}var h=i.updateQueue;h!==null&&Nh(i,h,c);break;case 3:var E=i.updateQueue;if(E!==null){if(o=null,i.child!==null)switch(i.child.tag){case 5:o=i.child.stateNode;break;case 1:o=i.child.stateNode}Nh(i,E,o)}break;case 5:var U=i.stateNode;if(o===null&&i.flags&4){o=U;var H=i.memoizedProps;switch(i.type){case"button":case"input":case"select":case"textarea":H.autoFocus&&o.focus();break;case"img":H.src&&(o.src=H.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(i.memoizedState===null){var ce=i.alternate;if(ce!==null){var Re=ce.memoizedState;if(Re!==null){var Le=Re.dehydrated;Le!==null&&Eo(Le)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(n(163))}Gn||i.flags&512&&cu(i)}catch(Ce){pn(i,i.return,Ce)}}if(i===t){et=null;break}if(o=i.sibling,o!==null){o.return=i.return,et=o;break}et=i.return}}function Np(t){for(;et!==null;){var i=et;if(i===t){et=null;break}var o=i.sibling;if(o!==null){o.return=i.return,et=o;break}et=i.return}}function Up(t){for(;et!==null;){var i=et;try{switch(i.tag){case 0:case 11:case 15:var o=i.return;try{Ka(4,i)}catch(H){pn(i,o,H)}break;case 1:var c=i.stateNode;if(typeof c.componentDidMount=="function"){var d=i.return;try{c.componentDidMount()}catch(H){pn(i,d,H)}}var h=i.return;try{cu(i)}catch(H){pn(i,h,H)}break;case 5:var E=i.return;try{cu(i)}catch(H){pn(i,E,H)}}}catch(H){pn(i,i.return,H)}if(i===t){et=null;break}var U=i.sibling;if(U!==null){U.return=i.return,et=U;break}et=i.return}}var i_=Math.ceil,Za=P.ReactCurrentDispatcher,fu=P.ReactCurrentOwner,Mi=P.ReactCurrentBatchConfig,Wt=0,Dn=null,yn=null,kn=0,fi=0,Ws=Cr(0),Tn=0,jo=null,os=0,Ja=0,hu=0,Yo=null,ii=null,pu=0,Xs=1/0,ur=null,Qa=!1,mu=null,Nr=null,el=!1,Ur=null,tl=0,qo=0,gu=null,nl=-1,il=0;function Kn(){return(Wt&6)!==0?dn():nl!==-1?nl:nl=dn()}function Fr(t){return(t.mode&1)===0?1:(Wt&2)!==0&&kn!==0?kn&-kn:zg.transition!==null?(il===0&&(il=Ze()),il):(t=Nt,t!==0||(t=window.event,t=t===void 0?16:Of(t.type)),t)}function Ii(t,i,o,c){if(50<qo)throw qo=0,gu=null,Error(n(185));It(t,o,c),((Wt&2)===0||t!==Dn)&&(t===Dn&&((Wt&2)===0&&(Ja|=o),Tn===4&&Or(t,kn)),ri(t,c),o===1&&Wt===0&&(i.mode&1)===0&&(Xs=dn()+500,La&&Pr()))}function ri(t,i){var o=t.callbackNode;$t(t,i);var c=tn(t,t===Dn?kn:0);if(c===0)o!==null&&Zr(o),t.callbackNode=null,t.callbackPriority=0;else if(i=c&-c,t.callbackPriority!==i){if(o!=null&&Zr(o),i===1)t.tag===0?Bg(Op.bind(null,t)):Mh(Op.bind(null,t)),Ug(function(){(Wt&6)===0&&Pr()}),o=null;else{switch(nr(c)){case 1:o=vo;break;case 4:o=A;break;case 16:o=$;break;case 536870912:o=re;break;default:o=$}o=Xp(o,Fp.bind(null,t))}t.callbackPriority=i,t.callbackNode=o}}function Fp(t,i){if(nl=-1,il=0,(Wt&6)!==0)throw Error(n(327));var o=t.callbackNode;if(js()&&t.callbackNode!==o)return null;var c=tn(t,t===Dn?kn:0);if(c===0)return null;if((c&30)!==0||(c&t.expiredLanes)!==0||i)i=rl(t,c);else{i=c;var d=Wt;Wt|=2;var h=Bp();(Dn!==t||kn!==i)&&(ur=null,Xs=dn()+500,ls(t,i));do try{o_();break}catch(U){kp(t,U)}while(!0);Nc(),Za.current=h,Wt=d,yn!==null?i=0:(Dn=null,kn=0,i=Tn)}if(i!==0){if(i===2&&(d=Sn(t),d!==0&&(c=d,i=_u(t,d))),i===1)throw o=jo,ls(t,0),Or(t,c),ri(t,dn()),o;if(i===6)Or(t,c);else{if(d=t.current.alternate,(c&30)===0&&!r_(d)&&(i=rl(t,c),i===2&&(h=Sn(t),h!==0&&(c=h,i=_u(t,h))),i===1))throw o=jo,ls(t,0),Or(t,c),ri(t,dn()),o;switch(t.finishedWork=d,t.finishedLanes=c,i){case 0:case 1:throw Error(n(345));case 2:cs(t,ii,ur);break;case 3:if(Or(t,c),(c&130023424)===c&&(i=pu+500-dn(),10<i)){if(tn(t,0)!==0)break;if(d=t.suspendedLanes,(d&c)!==c){Kn(),t.pingedLanes|=t.suspendedLanes&d;break}t.timeoutHandle=Ec(cs.bind(null,t,ii,ur),i);break}cs(t,ii,ur);break;case 4:if(Or(t,c),(c&4194240)===c)break;for(i=t.eventTimes,d=-1;0<c;){var E=31-He(c);h=1<<E,E=i[E],E>d&&(d=E),c&=~h}if(c=d,c=dn()-c,c=(120>c?120:480>c?480:1080>c?1080:1920>c?1920:3e3>c?3e3:4320>c?4320:1960*i_(c/1960))-c,10<c){t.timeoutHandle=Ec(cs.bind(null,t,ii,ur),c);break}cs(t,ii,ur);break;case 5:cs(t,ii,ur);break;default:throw Error(n(329))}}}return ri(t,dn()),t.callbackNode===o?Fp.bind(null,t):null}function _u(t,i){var o=Yo;return t.current.memoizedState.isDehydrated&&(ls(t,i).flags|=256),t=rl(t,i),t!==2&&(i=ii,ii=o,i!==null&&vu(i)),t}function vu(t){ii===null?ii=t:ii.push.apply(ii,t)}function r_(t){for(var i=t;;){if(i.flags&16384){var o=i.updateQueue;if(o!==null&&(o=o.stores,o!==null))for(var c=0;c<o.length;c++){var d=o[c],h=d.getSnapshot;d=d.value;try{if(!Ci(h(),d))return!1}catch{return!1}}}if(o=i.child,i.subtreeFlags&16384&&o!==null)o.return=i,i=o;else{if(i===t)break;for(;i.sibling===null;){if(i.return===null||i.return===t)return!0;i=i.return}i.sibling.return=i.return,i=i.sibling}}return!0}function Or(t,i){for(i&=~hu,i&=~Ja,t.suspendedLanes|=i,t.pingedLanes&=~i,t=t.expirationTimes;0<i;){var o=31-He(i),c=1<<o;t[o]=-1,i&=~c}}function Op(t){if((Wt&6)!==0)throw Error(n(327));js();var i=tn(t,0);if((i&1)===0)return ri(t,dn()),null;var o=rl(t,i);if(t.tag!==0&&o===2){var c=Sn(t);c!==0&&(i=c,o=_u(t,c))}if(o===1)throw o=jo,ls(t,0),Or(t,i),ri(t,dn()),o;if(o===6)throw Error(n(345));return t.finishedWork=t.current.alternate,t.finishedLanes=i,cs(t,ii,ur),ri(t,dn()),null}function xu(t,i){var o=Wt;Wt|=1;try{return t(i)}finally{Wt=o,Wt===0&&(Xs=dn()+500,La&&Pr())}}function as(t){Ur!==null&&Ur.tag===0&&(Wt&6)===0&&js();var i=Wt;Wt|=1;var o=Mi.transition,c=Nt;try{if(Mi.transition=null,Nt=1,t)return t()}finally{Nt=c,Mi.transition=o,Wt=i,(Wt&6)===0&&Pr()}}function Su(){fi=Ws.current,an(Ws)}function ls(t,i){t.finishedWork=null,t.finishedLanes=0;var o=t.timeoutHandle;if(o!==-1&&(t.timeoutHandle=-1,Ng(o)),yn!==null)for(o=yn.return;o!==null;){var c=o;switch(Rc(c),c.tag){case 1:c=c.type.childContextTypes,c!=null&&Ra();break;case 3:Hs(),an(ei),an(zn),Vc();break;case 5:zc(c);break;case 4:Hs();break;case 13:an(fn);break;case 19:an(fn);break;case 10:Uc(c.type._context);break;case 22:case 23:Su()}o=o.return}if(Dn=t,yn=t=kr(t.current,null),kn=fi=i,Tn=0,jo=null,hu=Ja=os=0,ii=Yo=null,is!==null){for(i=0;i<is.length;i++)if(o=is[i],c=o.interleaved,c!==null){o.interleaved=null;var d=c.next,h=o.pending;if(h!==null){var E=h.next;h.next=d,c.next=E}o.pending=c}is=null}return t}function kp(t,i){do{var o=yn;try{if(Nc(),Ha.current=Xa,Va){for(var c=hn.memoizedState;c!==null;){var d=c.queue;d!==null&&(d.pending=null),c=c.next}Va=!1}if(ss=0,Ln=wn=hn=null,zo=!1,Ho=0,fu.current=null,o===null||o.return===null){Tn=1,jo=i,yn=null;break}e:{var h=t,E=o.return,U=o,H=i;if(i=kn,U.flags|=32768,H!==null&&typeof H=="object"&&typeof H.then=="function"){var ce=H,Re=U,Le=Re.tag;if((Re.mode&1)===0&&(Le===0||Le===11||Le===15)){var Ce=Re.alternate;Ce?(Re.updateQueue=Ce.updateQueue,Re.memoizedState=Ce.memoizedState,Re.lanes=Ce.lanes):(Re.updateQueue=null,Re.memoizedState=null)}var Je=cp(E);if(Je!==null){Je.flags&=-257,up(Je,E,U,h,i),Je.mode&1&&lp(h,ce,i),i=Je,H=ce;var nt=i.updateQueue;if(nt===null){var rt=new Set;rt.add(H),i.updateQueue=rt}else nt.add(H);break e}else{if((i&1)===0){lp(h,ce,i),yu();break e}H=Error(n(426))}}else if(cn&&U.mode&1){var vn=cp(E);if(vn!==null){(vn.flags&65536)===0&&(vn.flags|=256),up(vn,E,U,h,i),Dc(Vs(H,U));break e}}h=H=Vs(H,U),Tn!==4&&(Tn=2),Yo===null?Yo=[h]:Yo.push(h),h=E;do{switch(h.tag){case 3:h.flags|=65536,i&=-i,h.lanes|=i;var Q=op(h,H,i);Ih(h,Q);break e;case 1:U=H;var X=h.type,se=h.stateNode;if((h.flags&128)===0&&(typeof X.getDerivedStateFromError=="function"||se!==null&&typeof se.componentDidCatch=="function"&&(Nr===null||!Nr.has(se)))){h.flags|=65536,i&=-i,h.lanes|=i;var ze=ap(h,U,i);Ih(h,ze);break e}}h=h.return}while(h!==null)}Hp(o)}catch(lt){i=lt,yn===o&&o!==null&&(yn=o=o.return);continue}break}while(!0)}function Bp(){var t=Za.current;return Za.current=Xa,t===null?Xa:t}function yu(){(Tn===0||Tn===3||Tn===2)&&(Tn=4),Dn===null||(os&268435455)===0&&(Ja&268435455)===0||Or(Dn,kn)}function rl(t,i){var o=Wt;Wt|=2;var c=Bp();(Dn!==t||kn!==i)&&(ur=null,ls(t,i));do try{s_();break}catch(d){kp(t,d)}while(!0);if(Nc(),Wt=o,Za.current=c,yn!==null)throw Error(n(261));return Dn=null,kn=0,Tn}function s_(){for(;yn!==null;)zp(yn)}function o_(){for(;yn!==null&&!Es();)zp(yn)}function zp(t){var i=Wp(t.alternate,t,fi);t.memoizedProps=t.pendingProps,i===null?Hp(t):yn=i,fu.current=null}function Hp(t){var i=t;do{var o=i.alternate;if(t=i.return,(i.flags&32768)===0){if(o=Jg(o,i,fi),o!==null){yn=o;return}}else{if(o=Qg(o,i),o!==null){o.flags&=32767,yn=o;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{Tn=6,yn=null;return}}if(i=i.sibling,i!==null){yn=i;return}yn=i=t}while(i!==null);Tn===0&&(Tn=5)}function cs(t,i,o){var c=Nt,d=Mi.transition;try{Mi.transition=null,Nt=1,a_(t,i,o,c)}finally{Mi.transition=d,Nt=c}return null}function a_(t,i,o,c){do js();while(Ur!==null);if((Wt&6)!==0)throw Error(n(327));o=t.finishedWork;var d=t.finishedLanes;if(o===null)return null;if(t.finishedWork=null,t.finishedLanes=0,o===t.current)throw Error(n(177));t.callbackNode=null,t.callbackPriority=0;var h=o.lanes|o.childLanes;if(Jn(t,h),t===Dn&&(yn=Dn=null,kn=0),(o.subtreeFlags&2064)===0&&(o.flags&2064)===0||el||(el=!0,Xp($,function(){return js(),null})),h=(o.flags&15990)!==0,(o.subtreeFlags&15990)!==0||h){h=Mi.transition,Mi.transition=null;var E=Nt;Nt=1;var U=Wt;Wt|=4,fu.current=null,t_(t,o),Lp(o,t),bg(yc),ma=!!Sc,yc=Sc=null,t.current=o,n_(o),ws(),Wt=U,Nt=E,Mi.transition=h}else t.current=o;if(el&&(el=!1,Ur=t,tl=d),h=t.pendingLanes,h===0&&(Nr=null),Qe(o.stateNode),ri(t,dn()),i!==null)for(c=t.onRecoverableError,o=0;o<i.length;o++)d=i[o],c(d.value,{componentStack:d.stack,digest:d.digest});if(Qa)throw Qa=!1,t=mu,mu=null,t;return(tl&1)!==0&&t.tag!==0&&js(),h=t.pendingLanes,(h&1)!==0?t===gu?qo++:(qo=0,gu=t):qo=0,Pr(),null}function js(){if(Ur!==null){var t=nr(tl),i=Mi.transition,o=Nt;try{if(Mi.transition=null,Nt=16>t?16:t,Ur===null)var c=!1;else{if(t=Ur,Ur=null,tl=0,(Wt&6)!==0)throw Error(n(331));var d=Wt;for(Wt|=4,et=t.current;et!==null;){var h=et,E=h.child;if((et.flags&16)!==0){var U=h.deletions;if(U!==null){for(var H=0;H<U.length;H++){var ce=U[H];for(et=ce;et!==null;){var Re=et;switch(Re.tag){case 0:case 11:case 15:Xo(8,Re,h)}var Le=Re.child;if(Le!==null)Le.return=Re,et=Le;else for(;et!==null;){Re=et;var Ce=Re.sibling,Je=Re.return;if(Ap(Re),Re===ce){et=null;break}if(Ce!==null){Ce.return=Je,et=Ce;break}et=Je}}}var nt=h.alternate;if(nt!==null){var rt=nt.child;if(rt!==null){nt.child=null;do{var vn=rt.sibling;rt.sibling=null,rt=vn}while(rt!==null)}}et=h}}if((h.subtreeFlags&2064)!==0&&E!==null)E.return=h,et=E;else e:for(;et!==null;){if(h=et,(h.flags&2048)!==0)switch(h.tag){case 0:case 11:case 15:Xo(9,h,h.return)}var Q=h.sibling;if(Q!==null){Q.return=h.return,et=Q;break e}et=h.return}}var X=t.current;for(et=X;et!==null;){E=et;var se=E.child;if((E.subtreeFlags&2064)!==0&&se!==null)se.return=E,et=se;else e:for(E=X;et!==null;){if(U=et,(U.flags&2048)!==0)try{switch(U.tag){case 0:case 11:case 15:Ka(9,U)}}catch(lt){pn(U,U.return,lt)}if(U===E){et=null;break e}var ze=U.sibling;if(ze!==null){ze.return=U.return,et=ze;break e}et=U.return}}if(Wt=d,Pr(),We&&typeof We.onPostCommitFiberRoot=="function")try{We.onPostCommitFiberRoot(ie,t)}catch{}c=!0}return c}finally{Nt=o,Mi.transition=i}}return!1}function Vp(t,i,o){i=Vs(o,i),i=op(t,i,1),t=Dr(t,i,1),i=Kn(),t!==null&&(It(t,1,i),ri(t,i))}function pn(t,i,o){if(t.tag===3)Vp(t,t,o);else for(;i!==null;){if(i.tag===3){Vp(i,t,o);break}else if(i.tag===1){var c=i.stateNode;if(typeof i.type.getDerivedStateFromError=="function"||typeof c.componentDidCatch=="function"&&(Nr===null||!Nr.has(c))){t=Vs(o,t),t=ap(i,t,1),i=Dr(i,t,1),t=Kn(),i!==null&&(It(i,1,t),ri(i,t));break}}i=i.return}}function l_(t,i,o){var c=t.pingCache;c!==null&&c.delete(i),i=Kn(),t.pingedLanes|=t.suspendedLanes&o,Dn===t&&(kn&o)===o&&(Tn===4||Tn===3&&(kn&130023424)===kn&&500>dn()-pu?ls(t,0):hu|=o),ri(t,i)}function Gp(t,i){i===0&&((t.mode&1)===0?i=1:(i=at,at<<=1,(at&130023424)===0&&(at=4194304)));var o=Kn();t=ar(t,i),t!==null&&(It(t,i,o),ri(t,o))}function c_(t){var i=t.memoizedState,o=0;i!==null&&(o=i.retryLane),Gp(t,o)}function u_(t,i){var o=0;switch(t.tag){case 13:var c=t.stateNode,d=t.memoizedState;d!==null&&(o=d.retryLane);break;case 19:c=t.stateNode;break;default:throw Error(n(314))}c!==null&&c.delete(i),Gp(t,o)}var Wp;Wp=function(t,i,o){if(t!==null)if(t.memoizedProps!==i.pendingProps||ei.current)ni=!0;else{if((t.lanes&o)===0&&(i.flags&128)===0)return ni=!1,Zg(t,i,o);ni=(t.flags&131072)!==0}else ni=!1,cn&&(i.flags&1048576)!==0&&Eh(i,Ia,i.index);switch(i.lanes=0,i.tag){case 2:var c=i.type;qa(t,i),t=i.pendingProps;var d=Ns(i,zn.current);zs(i,o),d=Xc(null,i,c,t,d,o);var h=jc();return i.flags|=1,typeof d=="object"&&d!==null&&typeof d.render=="function"&&d.$$typeof===void 0?(i.tag=1,i.memoizedState=null,i.updateQueue=null,ti(c)?(h=!0,Pa(i)):h=!1,i.memoizedState=d.state!==null&&d.state!==void 0?d.state:null,kc(i),d.updater=ja,i.stateNode=d,d._reactInternals=i,Jc(i,c,t,o),i=nu(null,i,c,!0,h,o)):(i.tag=0,cn&&h&&Cc(i),$n(null,i,d,o),i=i.child),i;case 16:c=i.elementType;e:{switch(qa(t,i),t=i.pendingProps,d=c._init,c=d(c._payload),i.type=c,d=i.tag=f_(c),t=Pi(c,t),d){case 0:i=tu(null,i,c,t,o);break e;case 1:i=gp(null,i,c,t,o);break e;case 11:i=dp(null,i,c,t,o);break e;case 14:i=fp(null,i,c,Pi(c.type,t),o);break e}throw Error(n(306,c,""))}return i;case 0:return c=i.type,d=i.pendingProps,d=i.elementType===c?d:Pi(c,d),tu(t,i,c,d,o);case 1:return c=i.type,d=i.pendingProps,d=i.elementType===c?d:Pi(c,d),gp(t,i,c,d,o);case 3:e:{if(_p(i),t===null)throw Error(n(387));c=i.pendingProps,h=i.memoizedState,d=h.element,Dh(t,i),Ba(i,c,null,o);var E=i.memoizedState;if(c=E.element,h.isDehydrated)if(h={element:c,isDehydrated:!1,cache:E.cache,pendingSuspenseBoundaries:E.pendingSuspenseBoundaries,transitions:E.transitions},i.updateQueue.baseState=h,i.memoizedState=h,i.flags&256){d=Vs(Error(n(423)),i),i=vp(t,i,c,o,d);break e}else if(c!==d){d=Vs(Error(n(424)),i),i=vp(t,i,c,o,d);break e}else for(di=br(i.stateNode.containerInfo.firstChild),ui=i,cn=!0,Ri=null,o=Ph(i,null,c,o),i.child=o;o;)o.flags=o.flags&-3|4096,o=o.sibling;else{if(Os(),c===d){i=cr(t,i,o);break e}$n(t,i,c,o)}i=i.child}return i;case 5:return Uh(i),t===null&&Lc(i),c=i.type,d=i.pendingProps,h=t!==null?t.memoizedProps:null,E=d.children,Mc(c,d)?E=null:h!==null&&Mc(c,h)&&(i.flags|=32),mp(t,i),$n(t,i,E,o),i.child;case 6:return t===null&&Lc(i),null;case 13:return xp(t,i,o);case 4:return Bc(i,i.stateNode.containerInfo),c=i.pendingProps,t===null?i.child=ks(i,null,c,o):$n(t,i,c,o),i.child;case 11:return c=i.type,d=i.pendingProps,d=i.elementType===c?d:Pi(c,d),dp(t,i,c,d,o);case 7:return $n(t,i,i.pendingProps,o),i.child;case 8:return $n(t,i,i.pendingProps.children,o),i.child;case 12:return $n(t,i,i.pendingProps.children,o),i.child;case 10:e:{if(c=i.type._context,d=i.pendingProps,h=i.memoizedProps,E=d.value,nn(Fa,c._currentValue),c._currentValue=E,h!==null)if(Ci(h.value,E)){if(h.children===d.children&&!ei.current){i=cr(t,i,o);break e}}else for(h=i.child,h!==null&&(h.return=i);h!==null;){var U=h.dependencies;if(U!==null){E=h.child;for(var H=U.firstContext;H!==null;){if(H.context===c){if(h.tag===1){H=lr(-1,o&-o),H.tag=2;var ce=h.updateQueue;if(ce!==null){ce=ce.shared;var Re=ce.pending;Re===null?H.next=H:(H.next=Re.next,Re.next=H),ce.pending=H}}h.lanes|=o,H=h.alternate,H!==null&&(H.lanes|=o),Fc(h.return,o,i),U.lanes|=o;break}H=H.next}}else if(h.tag===10)E=h.type===i.type?null:h.child;else if(h.tag===18){if(E=h.return,E===null)throw Error(n(341));E.lanes|=o,U=E.alternate,U!==null&&(U.lanes|=o),Fc(E,o,i),E=h.sibling}else E=h.child;if(E!==null)E.return=h;else for(E=h;E!==null;){if(E===i){E=null;break}if(h=E.sibling,h!==null){h.return=E.return,E=h;break}E=E.return}h=E}$n(t,i,d.children,o),i=i.child}return i;case 9:return d=i.type,c=i.pendingProps.children,zs(i,o),d=Si(d),c=c(d),i.flags|=1,$n(t,i,c,o),i.child;case 14:return c=i.type,d=Pi(c,i.pendingProps),d=Pi(c.type,d),fp(t,i,c,d,o);case 15:return hp(t,i,i.type,i.pendingProps,o);case 17:return c=i.type,d=i.pendingProps,d=i.elementType===c?d:Pi(c,d),qa(t,i),i.tag=1,ti(c)?(t=!0,Pa(i)):t=!1,zs(i,o),rp(i,c,d),Jc(i,c,d,o),nu(null,i,c,!0,t,o);case 19:return yp(t,i,o);case 22:return pp(t,i,o)}throw Error(n(156,i.tag))};function Xp(t,i){return tr(t,i)}function d_(t,i,o,c){this.tag=t,this.key=o,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=i,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=c,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Ei(t,i,o,c){return new d_(t,i,o,c)}function Mu(t){return t=t.prototype,!(!t||!t.isReactComponent)}function f_(t){if(typeof t=="function")return Mu(t)?1:0;if(t!=null){if(t=t.$$typeof,t===q)return 11;if(t===W)return 14}return 2}function kr(t,i){var o=t.alternate;return o===null?(o=Ei(t.tag,i,t.key,t.mode),o.elementType=t.elementType,o.type=t.type,o.stateNode=t.stateNode,o.alternate=t,t.alternate=o):(o.pendingProps=i,o.type=t.type,o.flags=0,o.subtreeFlags=0,o.deletions=null),o.flags=t.flags&14680064,o.childLanes=t.childLanes,o.lanes=t.lanes,o.child=t.child,o.memoizedProps=t.memoizedProps,o.memoizedState=t.memoizedState,o.updateQueue=t.updateQueue,i=t.dependencies,o.dependencies=i===null?null:{lanes:i.lanes,firstContext:i.firstContext},o.sibling=t.sibling,o.index=t.index,o.ref=t.ref,o}function sl(t,i,o,c,d,h){var E=2;if(c=t,typeof t=="function")Mu(t)&&(E=1);else if(typeof t=="string")E=5;else e:switch(t){case k:return us(o.children,d,h,i);case w:E=8,d|=8;break;case I:return t=Ei(12,o,i,d|2),t.elementType=I,t.lanes=h,t;case oe:return t=Ei(13,o,i,d),t.elementType=oe,t.lanes=h,t;case pe:return t=Ei(19,o,i,d),t.elementType=pe,t.lanes=h,t;case K:return ol(o,d,h,i);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case j:E=10;break e;case O:E=9;break e;case q:E=11;break e;case W:E=14;break e;case ee:E=16,c=null;break e}throw Error(n(130,t==null?t:typeof t,""))}return i=Ei(E,o,i,d),i.elementType=t,i.type=c,i.lanes=h,i}function us(t,i,o,c){return t=Ei(7,t,c,i),t.lanes=o,t}function ol(t,i,o,c){return t=Ei(22,t,c,i),t.elementType=K,t.lanes=o,t.stateNode={isHidden:!1},t}function Eu(t,i,o){return t=Ei(6,t,null,i),t.lanes=o,t}function wu(t,i,o){return i=Ei(4,t.children!==null?t.children:[],t.key,i),i.lanes=o,i.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},i}function h_(t,i,o,c,d){this.tag=i,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Fn(0),this.expirationTimes=Fn(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Fn(0),this.identifierPrefix=c,this.onRecoverableError=d,this.mutableSourceEagerHydrationData=null}function Tu(t,i,o,c,d,h,E,U,H){return t=new h_(t,i,o,U,H),i===1?(i=1,h===!0&&(i|=8)):i=0,h=Ei(3,null,null,i),t.current=h,h.stateNode=t,h.memoizedState={element:c,isDehydrated:o,cache:null,transitions:null,pendingSuspenseBoundaries:null},kc(h),t}function p_(t,i,o){var c=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:D,key:c==null?null:""+c,children:t,containerInfo:i,implementation:o}}function jp(t){if(!t)return Rr;t=t._reactInternals;e:{if(en(t)!==t||t.tag!==1)throw Error(n(170));var i=t;do{switch(i.tag){case 3:i=i.stateNode.context;break e;case 1:if(ti(i.type)){i=i.stateNode.__reactInternalMemoizedMergedChildContext;break e}}i=i.return}while(i!==null);throw Error(n(171))}if(t.tag===1){var o=t.type;if(ti(o))return Sh(t,o,i)}return i}function Yp(t,i,o,c,d,h,E,U,H){return t=Tu(o,c,!0,t,d,h,E,U,H),t.context=jp(null),o=t.current,c=Kn(),d=Fr(o),h=lr(c,d),h.callback=i??null,Dr(o,h,d),t.current.lanes=d,It(t,d,c),ri(t,c),t}function al(t,i,o,c){var d=i.current,h=Kn(),E=Fr(d);return o=jp(o),i.context===null?i.context=o:i.pendingContext=o,i=lr(h,E),i.payload={element:t},c=c===void 0?null:c,c!==null&&(i.callback=c),t=Dr(d,i,E),t!==null&&(Ii(t,d,E,h),ka(t,d,E)),E}function ll(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function qp(t,i){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var o=t.retryLane;t.retryLane=o!==0&&o<i?o:i}}function Au(t,i){qp(t,i),(t=t.alternate)&&qp(t,i)}function m_(){return null}var $p=typeof reportError=="function"?reportError:function(t){console.error(t)};function bu(t){this._internalRoot=t}cl.prototype.render=bu.prototype.render=function(t){var i=this._internalRoot;if(i===null)throw Error(n(409));al(t,i,null,null)},cl.prototype.unmount=bu.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var i=t.containerInfo;as(function(){al(null,t,null,null)}),i[ir]=null}};function cl(t){this._internalRoot=t}cl.prototype.unstable_scheduleHydration=function(t){if(t){var i=Kt();t={blockedOn:null,target:t,priority:i};for(var o=0;o<wr.length&&i!==0&&i<wr[o].priority;o++);wr.splice(o,0,t),o===0&&Uf(t)}};function Cu(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function ul(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function Kp(){}function g_(t,i,o,c,d){if(d){if(typeof c=="function"){var h=c;c=function(){var ce=ll(E);h.call(ce)}}var E=Yp(i,c,t,0,null,!1,!1,"",Kp);return t._reactRootContainer=E,t[ir]=E.current,Do(t.nodeType===8?t.parentNode:t),as(),E}for(;d=t.lastChild;)t.removeChild(d);if(typeof c=="function"){var U=c;c=function(){var ce=ll(H);U.call(ce)}}var H=Tu(t,0,!1,null,null,!1,!1,"",Kp);return t._reactRootContainer=H,t[ir]=H.current,Do(t.nodeType===8?t.parentNode:t),as(function(){al(i,H,o,c)}),H}function dl(t,i,o,c,d){var h=o._reactRootContainer;if(h){var E=h;if(typeof d=="function"){var U=d;d=function(){var H=ll(E);U.call(H)}}al(i,E,t,d)}else E=g_(o,i,t,d,c);return ll(E)}qt=function(t){switch(t.tag){case 3:var i=t.stateNode;if(i.current.memoizedState.isDehydrated){var o=Vt(i.pendingLanes);o!==0&&(Qn(i,o|1),ri(i,dn()),(Wt&6)===0&&(Xs=dn()+500,Pr()))}break;case 13:as(function(){var c=ar(t,1);if(c!==null){var d=Kn();Ii(c,t,1,d)}}),Au(t,1)}},sn=function(t){if(t.tag===13){var i=ar(t,134217728);if(i!==null){var o=Kn();Ii(i,t,134217728,o)}Au(t,134217728)}},Ai=function(t){if(t.tag===13){var i=Fr(t),o=ar(t,i);if(o!==null){var c=Kn();Ii(o,t,i,c)}Au(t,i)}},Kt=function(){return Nt},bi=function(t,i){var o=Nt;try{return Nt=t,i()}finally{Nt=o}},vt=function(t,i,o){switch(i){case"input":if(Xt(t,o),i=o.name,o.type==="radio"&&i!=null){for(o=t;o.parentNode;)o=o.parentNode;for(o=o.querySelectorAll("input[name="+JSON.stringify(""+i)+'][type="radio"]'),i=0;i<o.length;i++){var c=o[i];if(c!==t&&c.form===t.form){var d=Ca(c);if(!d)throw Error(n(90));Ft(c),Xt(c,d)}}}break;case"textarea":Fe(t,o);break;case"select":i=o.value,i!=null&&he(t,!!o.multiple,i,!1)}},ke=xu,we=as;var __={usingClientEntryPoint:!1,Events:[Uo,Ds,Ca,ve,qe,xu]},$o={findFiberByHostInstance:Qr,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},v_={bundleType:$o.bundleType,version:$o.version,rendererPackageName:$o.rendererPackageName,rendererConfig:$o.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:P.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=Rn(t),t===null?null:t.stateNode},findFiberByHostInstance:$o.findFiberByHostInstance||m_,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var fl=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!fl.isDisabled&&fl.supportsFiber)try{ie=fl.inject(v_),We=fl}catch{}}return si.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=__,si.createPortal=function(t,i){var o=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Cu(i))throw Error(n(200));return p_(t,i,null,o)},si.createRoot=function(t,i){if(!Cu(t))throw Error(n(299));var o=!1,c="",d=$p;return i!=null&&(i.unstable_strictMode===!0&&(o=!0),i.identifierPrefix!==void 0&&(c=i.identifierPrefix),i.onRecoverableError!==void 0&&(d=i.onRecoverableError)),i=Tu(t,1,!1,null,null,o,!1,c,d),t[ir]=i.current,Do(t.nodeType===8?t.parentNode:t),new bu(i)},si.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var i=t._reactInternals;if(i===void 0)throw typeof t.render=="function"?Error(n(188)):(t=Object.keys(t).join(","),Error(n(268,t)));return t=Rn(i),t=t===null?null:t.stateNode,t},si.flushSync=function(t){return as(t)},si.hydrate=function(t,i,o){if(!ul(i))throw Error(n(200));return dl(null,t,i,!0,o)},si.hydrateRoot=function(t,i,o){if(!Cu(t))throw Error(n(405));var c=o!=null&&o.hydratedSources||null,d=!1,h="",E=$p;if(o!=null&&(o.unstable_strictMode===!0&&(d=!0),o.identifierPrefix!==void 0&&(h=o.identifierPrefix),o.onRecoverableError!==void 0&&(E=o.onRecoverableError)),i=Yp(i,null,t,1,o??null,d,!1,h,E),t[ir]=i.current,Do(t),c)for(t=0;t<c.length;t++)o=c[t],d=o._getVersion,d=d(o._source),i.mutableSourceEagerHydrationData==null?i.mutableSourceEagerHydrationData=[o,d]:i.mutableSourceEagerHydrationData.push(o,d);return new cl(i)},si.render=function(t,i,o){if(!ul(i))throw Error(n(200));return dl(null,t,i,!1,o)},si.unmountComponentAtNode=function(t){if(!ul(t))throw Error(n(40));return t._reactRootContainer?(as(function(){dl(null,null,t,!1,function(){t._reactRootContainer=null,t[ir]=null})}),!0):!1},si.unstable_batchedUpdates=xu,si.unstable_renderSubtreeIntoContainer=function(t,i,o,c){if(!ul(o))throw Error(n(200));if(t==null||t._reactInternals===void 0)throw Error(n(38));return dl(t,i,o,!1,c)},si.version="18.3.1-next-f1338f8080-20240426",si}var rm;function A_(){if(rm)return Lu.exports;rm=1;function r(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(r)}catch(e){console.error(e)}}return r(),Lu.exports=T_(),Lu.exports}var sm;function b_(){if(sm)return hl;sm=1;var r=A_();return hl.createRoot=r.createRoot,hl.hydrateRoot=r.hydrateRoot,hl}var C_=b_(),yt=cf();/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const uf="184",R_=0,om=1,P_=2,oa=1,L_=2,ra=3,$r=0,li=1,Ti=2,_r=0,lo=1,am=2,lm=3,cm=4,D_=5,gs=100,I_=101,N_=102,U_=103,F_=104,O_=200,k_=201,B_=202,z_=203,md=204,gd=205,H_=206,V_=207,G_=208,W_=209,X_=210,j_=211,Y_=212,q_=213,$_=214,_d=0,vd=1,xd=2,uo=3,Sd=4,yd=5,Md=6,Ed=7,l0=0,K_=1,Z_=2,Ki=0,c0=1,u0=2,d0=3,df=4,f0=5,h0=6,p0=7,m0=300,Ss=301,fo=302,Nu=303,Uu=304,Zl=306,wd=1e3,gr=1001,Td=1002,Bn=1003,J_=1004,pl=1005,jn=1006,Fu=1007,vs=1008,gi=1009,g0=1010,_0=1011,aa=1012,ff=1013,Qi=1014,Yi=1015,xr=1016,hf=1017,pf=1018,la=1020,v0=35902,x0=35899,S0=1021,y0=1022,ki=1023,Sr=1026,xs=1027,M0=1028,mf=1029,ys=1030,gf=1031,_f=1033,Ol=33776,kl=33777,Bl=33778,zl=33779,Ad=35840,bd=35841,Cd=35842,Rd=35843,Pd=36196,Ld=37492,Dd=37496,Id=37488,Nd=37489,Vl=37490,Ud=37491,Fd=37808,Od=37809,kd=37810,Bd=37811,zd=37812,Hd=37813,Vd=37814,Gd=37815,Wd=37816,Xd=37817,jd=37818,Yd=37819,qd=37820,$d=37821,Kd=36492,Zd=36494,Jd=36495,Qd=36283,ef=36284,Gl=36285,tf=36286,Q_=3200,nf=0,ev=1,Yr="",ai="srgb",Wl="srgb-linear",Xl="linear",Zt="srgb",Ys=7680,um=519,tv=512,nv=513,iv=514,vf=515,rv=516,sv=517,xf=518,ov=519,dm=35044,fm="300 es",qi=2e3,ca=2001;function av(r){for(let e=r.length-1;e>=0;--e)if(r[e]>=65535)return!0;return!1}function jl(r){return document.createElementNS("http://www.w3.org/1999/xhtml",r)}function lv(){const r=jl("canvas");return r.style.display="block",r}const hm={};function pm(...r){const e="THREE."+r.shift();console.log(e,...r)}function E0(r){const e=r[0];if(typeof e=="string"&&e.startsWith("TSL:")){const n=r[1];n&&n.isStackTrace?r[0]+=" "+n.getLocation():r[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return r}function Mt(...r){r=E0(r);const e="THREE."+r.shift();{const n=r[0];n&&n.isStackTrace?console.warn(n.getError(e)):console.warn(e,...r)}}function Gt(...r){r=E0(r);const e="THREE."+r.shift();{const n=r[0];n&&n.isStackTrace?console.error(n.getError(e)):console.error(e,...r)}}function rf(...r){const e=r.join(" ");e in hm||(hm[e]=!0,Mt(...r))}function cv(r,e,n){return new Promise(function(s,a){function l(){switch(r.clientWaitSync(e,r.SYNC_FLUSH_COMMANDS_BIT,0)){case r.WAIT_FAILED:a();break;case r.TIMEOUT_EXPIRED:setTimeout(l,n);break;default:s()}}setTimeout(l,n)})}const uv={[_d]:vd,[xd]:Md,[Sd]:Ed,[uo]:yd,[vd]:_d,[Md]:xd,[Ed]:Sd,[yd]:uo};class Ms{addEventListener(e,n){this._listeners===void 0&&(this._listeners={});const s=this._listeners;s[e]===void 0&&(s[e]=[]),s[e].indexOf(n)===-1&&s[e].push(n)}hasEventListener(e,n){const s=this._listeners;return s===void 0?!1:s[e]!==void 0&&s[e].indexOf(n)!==-1}removeEventListener(e,n){const s=this._listeners;if(s===void 0)return;const a=s[e];if(a!==void 0){const l=a.indexOf(n);l!==-1&&a.splice(l,1)}}dispatchEvent(e){const n=this._listeners;if(n===void 0)return;const s=n[e.type];if(s!==void 0){e.target=this;const a=s.slice(0);for(let l=0,u=a.length;l<u;l++)a[l].call(this,e);e.target=null}}}const Wn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Ou=Math.PI/180,sf=180/Math.PI;function ua(){const r=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0,s=Math.random()*4294967295|0;return(Wn[r&255]+Wn[r>>8&255]+Wn[r>>16&255]+Wn[r>>24&255]+"-"+Wn[e&255]+Wn[e>>8&255]+"-"+Wn[e>>16&15|64]+Wn[e>>24&255]+"-"+Wn[n&63|128]+Wn[n>>8&255]+"-"+Wn[n>>16&255]+Wn[n>>24&255]+Wn[s&255]+Wn[s>>8&255]+Wn[s>>16&255]+Wn[s>>24&255]).toLowerCase()}function Bt(r,e,n){return Math.max(e,Math.min(n,r))}function dv(r,e){return(r%e+e)%e}function ku(r,e,n){return(1-n)*r+n*e}function Zo(r,e){switch(e.constructor){case Float32Array:return r;case Uint32Array:return r/4294967295;case Uint16Array:return r/65535;case Uint8Array:return r/255;case Int32Array:return Math.max(r/2147483647,-1);case Int16Array:return Math.max(r/32767,-1);case Int8Array:return Math.max(r/127,-1);default:throw new Error("Invalid component type.")}}function oi(r,e){switch(e.constructor){case Float32Array:return r;case Uint32Array:return Math.round(r*4294967295);case Uint16Array:return Math.round(r*65535);case Uint8Array:return Math.round(r*255);case Int32Array:return Math.round(r*2147483647);case Int16Array:return Math.round(r*32767);case Int8Array:return Math.round(r*127);default:throw new Error("Invalid component type.")}}const Rf=class Rf{constructor(e=0,n=0){this.x=e,this.y=n}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,n){return this.x=e,this.y=n,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const n=this.x,s=this.y,a=e.elements;return this.x=a[0]*n+a[3]*s+a[6],this.y=a[1]*n+a[4]*s+a[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,n){return this.x=Bt(this.x,e.x,n.x),this.y=Bt(this.y,e.y,n.y),this}clampScalar(e,n){return this.x=Bt(this.x,e,n),this.y=Bt(this.y,e,n),this}clampLength(e,n){const s=this.length();return this.divideScalar(s||1).multiplyScalar(Bt(s,e,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const s=this.dot(e)/n;return Math.acos(Bt(s,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,s=this.y-e.y;return n*n+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this}lerpVectors(e,n,s){return this.x=e.x+(n.x-e.x)*s,this.y=e.y+(n.y-e.y)*s,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this}rotateAround(e,n){const s=Math.cos(n),a=Math.sin(n),l=this.x-e.x,u=this.y-e.y;return this.x=l*s-u*a+e.x,this.y=l*a+u*s+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};Rf.prototype.isVector2=!0;let Ht=Rf;class mo{constructor(e=0,n=0,s=0,a=1){this.isQuaternion=!0,this._x=e,this._y=n,this._z=s,this._w=a}static slerpFlat(e,n,s,a,l,u,f){let p=s[a+0],m=s[a+1],x=s[a+2],S=s[a+3],g=l[u+0],y=l[u+1],T=l[u+2],R=l[u+3];if(S!==R||p!==g||m!==y||x!==T){let _=p*g+m*y+x*T+S*R;_<0&&(g=-g,y=-y,T=-T,R=-R,_=-_);let v=1-f;if(_<.9995){const b=Math.acos(_),L=Math.sin(b);v=Math.sin(v*b)/L,f=Math.sin(f*b)/L,p=p*v+g*f,m=m*v+y*f,x=x*v+T*f,S=S*v+R*f}else{p=p*v+g*f,m=m*v+y*f,x=x*v+T*f,S=S*v+R*f;const b=1/Math.sqrt(p*p+m*m+x*x+S*S);p*=b,m*=b,x*=b,S*=b}}e[n]=p,e[n+1]=m,e[n+2]=x,e[n+3]=S}static multiplyQuaternionsFlat(e,n,s,a,l,u){const f=s[a],p=s[a+1],m=s[a+2],x=s[a+3],S=l[u],g=l[u+1],y=l[u+2],T=l[u+3];return e[n]=f*T+x*S+p*y-m*g,e[n+1]=p*T+x*g+m*S-f*y,e[n+2]=m*T+x*y+f*g-p*S,e[n+3]=x*T-f*S-p*g-m*y,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,n,s,a){return this._x=e,this._y=n,this._z=s,this._w=a,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,n=!0){const s=e._x,a=e._y,l=e._z,u=e._order,f=Math.cos,p=Math.sin,m=f(s/2),x=f(a/2),S=f(l/2),g=p(s/2),y=p(a/2),T=p(l/2);switch(u){case"XYZ":this._x=g*x*S+m*y*T,this._y=m*y*S-g*x*T,this._z=m*x*T+g*y*S,this._w=m*x*S-g*y*T;break;case"YXZ":this._x=g*x*S+m*y*T,this._y=m*y*S-g*x*T,this._z=m*x*T-g*y*S,this._w=m*x*S+g*y*T;break;case"ZXY":this._x=g*x*S-m*y*T,this._y=m*y*S+g*x*T,this._z=m*x*T+g*y*S,this._w=m*x*S-g*y*T;break;case"ZYX":this._x=g*x*S-m*y*T,this._y=m*y*S+g*x*T,this._z=m*x*T-g*y*S,this._w=m*x*S+g*y*T;break;case"YZX":this._x=g*x*S+m*y*T,this._y=m*y*S+g*x*T,this._z=m*x*T-g*y*S,this._w=m*x*S-g*y*T;break;case"XZY":this._x=g*x*S-m*y*T,this._y=m*y*S-g*x*T,this._z=m*x*T+g*y*S,this._w=m*x*S+g*y*T;break;default:Mt("Quaternion: .setFromEuler() encountered an unknown order: "+u)}return n===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,n){const s=n/2,a=Math.sin(s);return this._x=e.x*a,this._y=e.y*a,this._z=e.z*a,this._w=Math.cos(s),this._onChangeCallback(),this}setFromRotationMatrix(e){const n=e.elements,s=n[0],a=n[4],l=n[8],u=n[1],f=n[5],p=n[9],m=n[2],x=n[6],S=n[10],g=s+f+S;if(g>0){const y=.5/Math.sqrt(g+1);this._w=.25/y,this._x=(x-p)*y,this._y=(l-m)*y,this._z=(u-a)*y}else if(s>f&&s>S){const y=2*Math.sqrt(1+s-f-S);this._w=(x-p)/y,this._x=.25*y,this._y=(a+u)/y,this._z=(l+m)/y}else if(f>S){const y=2*Math.sqrt(1+f-s-S);this._w=(l-m)/y,this._x=(a+u)/y,this._y=.25*y,this._z=(p+x)/y}else{const y=2*Math.sqrt(1+S-s-f);this._w=(u-a)/y,this._x=(l+m)/y,this._y=(p+x)/y,this._z=.25*y}return this._onChangeCallback(),this}setFromUnitVectors(e,n){let s=e.dot(n)+1;return s<1e-8?(s=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=s):(this._x=0,this._y=-e.z,this._z=e.y,this._w=s)):(this._x=e.y*n.z-e.z*n.y,this._y=e.z*n.x-e.x*n.z,this._z=e.x*n.y-e.y*n.x,this._w=s),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Bt(this.dot(e),-1,1)))}rotateTowards(e,n){const s=this.angleTo(e);if(s===0)return this;const a=Math.min(1,n/s);return this.slerp(e,a),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,n){const s=e._x,a=e._y,l=e._z,u=e._w,f=n._x,p=n._y,m=n._z,x=n._w;return this._x=s*x+u*f+a*m-l*p,this._y=a*x+u*p+l*f-s*m,this._z=l*x+u*m+s*p-a*f,this._w=u*x-s*f-a*p-l*m,this._onChangeCallback(),this}slerp(e,n){let s=e._x,a=e._y,l=e._z,u=e._w,f=this.dot(e);f<0&&(s=-s,a=-a,l=-l,u=-u,f=-f);let p=1-n;if(f<.9995){const m=Math.acos(f),x=Math.sin(m);p=Math.sin(p*m)/x,n=Math.sin(n*m)/x,this._x=this._x*p+s*n,this._y=this._y*p+a*n,this._z=this._z*p+l*n,this._w=this._w*p+u*n,this._onChangeCallback()}else this._x=this._x*p+s*n,this._y=this._y*p+a*n,this._z=this._z*p+l*n,this._w=this._w*p+u*n,this.normalize();return this}slerpQuaternions(e,n,s){return this.copy(e).slerp(n,s)}random(){const e=2*Math.PI*Math.random(),n=2*Math.PI*Math.random(),s=Math.random(),a=Math.sqrt(1-s),l=Math.sqrt(s);return this.set(a*Math.sin(e),a*Math.cos(e),l*Math.sin(n),l*Math.cos(n))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,n=0){return this._x=e[n],this._y=e[n+1],this._z=e[n+2],this._w=e[n+3],this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._w,e}fromBufferAttribute(e,n){return this._x=e.getX(n),this._y=e.getY(n),this._z=e.getZ(n),this._w=e.getW(n),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}const Pf=class Pf{constructor(e=0,n=0,s=0){this.x=e,this.y=n,this.z=s}set(e,n,s){return s===void 0&&(s=this.z),this.x=e,this.y=n,this.z=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,n){return this.x=e.x*n.x,this.y=e.y*n.y,this.z=e.z*n.z,this}applyEuler(e){return this.applyQuaternion(mm.setFromEuler(e))}applyAxisAngle(e,n){return this.applyQuaternion(mm.setFromAxisAngle(e,n))}applyMatrix3(e){const n=this.x,s=this.y,a=this.z,l=e.elements;return this.x=l[0]*n+l[3]*s+l[6]*a,this.y=l[1]*n+l[4]*s+l[7]*a,this.z=l[2]*n+l[5]*s+l[8]*a,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const n=this.x,s=this.y,a=this.z,l=e.elements,u=1/(l[3]*n+l[7]*s+l[11]*a+l[15]);return this.x=(l[0]*n+l[4]*s+l[8]*a+l[12])*u,this.y=(l[1]*n+l[5]*s+l[9]*a+l[13])*u,this.z=(l[2]*n+l[6]*s+l[10]*a+l[14])*u,this}applyQuaternion(e){const n=this.x,s=this.y,a=this.z,l=e.x,u=e.y,f=e.z,p=e.w,m=2*(u*a-f*s),x=2*(f*n-l*a),S=2*(l*s-u*n);return this.x=n+p*m+u*S-f*x,this.y=s+p*x+f*m-l*S,this.z=a+p*S+l*x-u*m,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const n=this.x,s=this.y,a=this.z,l=e.elements;return this.x=l[0]*n+l[4]*s+l[8]*a,this.y=l[1]*n+l[5]*s+l[9]*a,this.z=l[2]*n+l[6]*s+l[10]*a,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,n){return this.x=Bt(this.x,e.x,n.x),this.y=Bt(this.y,e.y,n.y),this.z=Bt(this.z,e.z,n.z),this}clampScalar(e,n){return this.x=Bt(this.x,e,n),this.y=Bt(this.y,e,n),this.z=Bt(this.z,e,n),this}clampLength(e,n){const s=this.length();return this.divideScalar(s||1).multiplyScalar(Bt(s,e,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this}lerpVectors(e,n,s){return this.x=e.x+(n.x-e.x)*s,this.y=e.y+(n.y-e.y)*s,this.z=e.z+(n.z-e.z)*s,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,n){const s=e.x,a=e.y,l=e.z,u=n.x,f=n.y,p=n.z;return this.x=a*p-l*f,this.y=l*u-s*p,this.z=s*f-a*u,this}projectOnVector(e){const n=e.lengthSq();if(n===0)return this.set(0,0,0);const s=e.dot(this)/n;return this.copy(e).multiplyScalar(s)}projectOnPlane(e){return Bu.copy(this).projectOnVector(e),this.sub(Bu)}reflect(e){return this.sub(Bu.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const s=this.dot(e)/n;return Math.acos(Bt(s,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,s=this.y-e.y,a=this.z-e.z;return n*n+s*s+a*a}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,n,s){const a=Math.sin(n)*e;return this.x=a*Math.sin(s),this.y=Math.cos(n)*e,this.z=a*Math.cos(s),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,n,s){return this.x=e*Math.sin(n),this.y=s,this.z=e*Math.cos(n),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this}setFromMatrixScale(e){const n=this.setFromMatrixColumn(e,0).length(),s=this.setFromMatrixColumn(e,1).length(),a=this.setFromMatrixColumn(e,2).length();return this.x=n,this.y=s,this.z=a,this}setFromMatrixColumn(e,n){return this.fromArray(e.elements,n*4)}setFromMatrix3Column(e,n){return this.fromArray(e.elements,n*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,n=Math.random()*2-1,s=Math.sqrt(1-n*n);return this.x=s*Math.cos(e),this.y=n,this.z=s*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};Pf.prototype.isVector3=!0;let J=Pf;const Bu=new J,mm=new mo,Lf=class Lf{constructor(e,n,s,a,l,u,f,p,m){this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,n,s,a,l,u,f,p,m)}set(e,n,s,a,l,u,f,p,m){const x=this.elements;return x[0]=e,x[1]=a,x[2]=f,x[3]=n,x[4]=l,x[5]=p,x[6]=s,x[7]=u,x[8]=m,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const n=this.elements,s=e.elements;return n[0]=s[0],n[1]=s[1],n[2]=s[2],n[3]=s[3],n[4]=s[4],n[5]=s[5],n[6]=s[6],n[7]=s[7],n[8]=s[8],this}extractBasis(e,n,s){return e.setFromMatrix3Column(this,0),n.setFromMatrix3Column(this,1),s.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const n=e.elements;return this.set(n[0],n[4],n[8],n[1],n[5],n[9],n[2],n[6],n[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const s=e.elements,a=n.elements,l=this.elements,u=s[0],f=s[3],p=s[6],m=s[1],x=s[4],S=s[7],g=s[2],y=s[5],T=s[8],R=a[0],_=a[3],v=a[6],b=a[1],L=a[4],P=a[7],z=a[2],D=a[5],k=a[8];return l[0]=u*R+f*b+p*z,l[3]=u*_+f*L+p*D,l[6]=u*v+f*P+p*k,l[1]=m*R+x*b+S*z,l[4]=m*_+x*L+S*D,l[7]=m*v+x*P+S*k,l[2]=g*R+y*b+T*z,l[5]=g*_+y*L+T*D,l[8]=g*v+y*P+T*k,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[3]*=e,n[6]*=e,n[1]*=e,n[4]*=e,n[7]*=e,n[2]*=e,n[5]*=e,n[8]*=e,this}determinant(){const e=this.elements,n=e[0],s=e[1],a=e[2],l=e[3],u=e[4],f=e[5],p=e[6],m=e[7],x=e[8];return n*u*x-n*f*m-s*l*x+s*f*p+a*l*m-a*u*p}invert(){const e=this.elements,n=e[0],s=e[1],a=e[2],l=e[3],u=e[4],f=e[5],p=e[6],m=e[7],x=e[8],S=x*u-f*m,g=f*p-x*l,y=m*l-u*p,T=n*S+s*g+a*y;if(T===0)return this.set(0,0,0,0,0,0,0,0,0);const R=1/T;return e[0]=S*R,e[1]=(a*m-x*s)*R,e[2]=(f*s-a*u)*R,e[3]=g*R,e[4]=(x*n-a*p)*R,e[5]=(a*l-f*n)*R,e[6]=y*R,e[7]=(s*p-m*n)*R,e[8]=(u*n-s*l)*R,this}transpose(){let e;const n=this.elements;return e=n[1],n[1]=n[3],n[3]=e,e=n[2],n[2]=n[6],n[6]=e,e=n[5],n[5]=n[7],n[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const n=this.elements;return e[0]=n[0],e[1]=n[3],e[2]=n[6],e[3]=n[1],e[4]=n[4],e[5]=n[7],e[6]=n[2],e[7]=n[5],e[8]=n[8],this}setUvTransform(e,n,s,a,l,u,f){const p=Math.cos(l),m=Math.sin(l);return this.set(s*p,s*m,-s*(p*u+m*f)+u+e,-a*m,a*p,-a*(-m*u+p*f)+f+n,0,0,1),this}scale(e,n){return this.premultiply(zu.makeScale(e,n)),this}rotate(e){return this.premultiply(zu.makeRotation(-e)),this}translate(e,n){return this.premultiply(zu.makeTranslation(e,n)),this}makeTranslation(e,n){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,n,0,0,1),this}makeRotation(e){const n=Math.cos(e),s=Math.sin(e);return this.set(n,-s,0,s,n,0,0,0,1),this}makeScale(e,n){return this.set(e,0,0,0,n,0,0,0,1),this}equals(e){const n=this.elements,s=e.elements;for(let a=0;a<9;a++)if(n[a]!==s[a])return!1;return!0}fromArray(e,n=0){for(let s=0;s<9;s++)this.elements[s]=e[s+n];return this}toArray(e=[],n=0){const s=this.elements;return e[n]=s[0],e[n+1]=s[1],e[n+2]=s[2],e[n+3]=s[3],e[n+4]=s[4],e[n+5]=s[5],e[n+6]=s[6],e[n+7]=s[7],e[n+8]=s[8],e}clone(){return new this.constructor().fromArray(this.elements)}};Lf.prototype.isMatrix3=!0;let Ct=Lf;const zu=new Ct,gm=new Ct().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),_m=new Ct().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function fv(){const r={enabled:!0,workingColorSpace:Wl,spaces:{},convert:function(a,l,u){return this.enabled===!1||l===u||!l||!u||(this.spaces[l].transfer===Zt&&(a.r=vr(a.r),a.g=vr(a.g),a.b=vr(a.b)),this.spaces[l].primaries!==this.spaces[u].primaries&&(a.applyMatrix3(this.spaces[l].toXYZ),a.applyMatrix3(this.spaces[u].fromXYZ)),this.spaces[u].transfer===Zt&&(a.r=co(a.r),a.g=co(a.g),a.b=co(a.b))),a},workingToColorSpace:function(a,l){return this.convert(a,this.workingColorSpace,l)},colorSpaceToWorking:function(a,l){return this.convert(a,l,this.workingColorSpace)},getPrimaries:function(a){return this.spaces[a].primaries},getTransfer:function(a){return a===Yr?Xl:this.spaces[a].transfer},getToneMappingMode:function(a){return this.spaces[a].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(a,l=this.workingColorSpace){return a.fromArray(this.spaces[l].luminanceCoefficients)},define:function(a){Object.assign(this.spaces,a)},_getMatrix:function(a,l,u){return a.copy(this.spaces[l].toXYZ).multiply(this.spaces[u].fromXYZ)},_getDrawingBufferColorSpace:function(a){return this.spaces[a].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(a=this.workingColorSpace){return this.spaces[a].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(a,l){return rf("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),r.workingToColorSpace(a,l)},toWorkingColorSpace:function(a,l){return rf("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),r.colorSpaceToWorking(a,l)}},e=[.64,.33,.3,.6,.15,.06],n=[.2126,.7152,.0722],s=[.3127,.329];return r.define({[Wl]:{primaries:e,whitePoint:s,transfer:Xl,toXYZ:gm,fromXYZ:_m,luminanceCoefficients:n,workingColorSpaceConfig:{unpackColorSpace:ai},outputColorSpaceConfig:{drawingBufferColorSpace:ai}},[ai]:{primaries:e,whitePoint:s,transfer:Zt,toXYZ:gm,fromXYZ:_m,luminanceCoefficients:n,outputColorSpaceConfig:{drawingBufferColorSpace:ai}}}),r}const zt=fv();function vr(r){return r<.04045?r*.0773993808:Math.pow(r*.9478672986+.0521327014,2.4)}function co(r){return r<.0031308?r*12.92:1.055*Math.pow(r,.41666)-.055}let qs;class hv{static getDataURL(e,n="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let s;if(e instanceof HTMLCanvasElement)s=e;else{qs===void 0&&(qs=jl("canvas")),qs.width=e.width,qs.height=e.height;const a=qs.getContext("2d");e instanceof ImageData?a.putImageData(e,0,0):a.drawImage(e,0,0,e.width,e.height),s=qs}return s.toDataURL(n)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const n=jl("canvas");n.width=e.width,n.height=e.height;const s=n.getContext("2d");s.drawImage(e,0,0,e.width,e.height);const a=s.getImageData(0,0,e.width,e.height),l=a.data;for(let u=0;u<l.length;u++)l[u]=vr(l[u]/255)*255;return s.putImageData(a,0,0),n}else if(e.data){const n=e.data.slice(0);for(let s=0;s<n.length;s++)n instanceof Uint8Array||n instanceof Uint8ClampedArray?n[s]=Math.floor(vr(n[s]/255)*255):n[s]=vr(n[s]);return{data:n,width:e.width,height:e.height}}else return Mt("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let pv=0;class Sf{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:pv++}),this.uuid=ua(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const n=this.data;return typeof HTMLVideoElement<"u"&&n instanceof HTMLVideoElement?e.set(n.videoWidth,n.videoHeight,0):typeof VideoFrame<"u"&&n instanceof VideoFrame?e.set(n.displayWidth,n.displayHeight,0):n!==null?e.set(n.width,n.height,n.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const s={uuid:this.uuid,url:""},a=this.data;if(a!==null){let l;if(Array.isArray(a)){l=[];for(let u=0,f=a.length;u<f;u++)a[u].isDataTexture?l.push(Hu(a[u].image)):l.push(Hu(a[u]))}else l=Hu(a);s.url=l}return n||(e.images[this.uuid]=s),s}}function Hu(r){return typeof HTMLImageElement<"u"&&r instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&r instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&r instanceof ImageBitmap?hv.getDataURL(r):r.data?{data:Array.from(r.data),width:r.width,height:r.height,type:r.data.constructor.name}:(Mt("Texture: Unable to serialize Texture."),{})}let mv=0;const Vu=new J;class Yn extends Ms{constructor(e=Yn.DEFAULT_IMAGE,n=Yn.DEFAULT_MAPPING,s=gr,a=gr,l=jn,u=vs,f=ki,p=gi,m=Yn.DEFAULT_ANISOTROPY,x=Yr){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:mv++}),this.uuid=ua(),this.name="",this.source=new Sf(e),this.mipmaps=[],this.mapping=n,this.channel=0,this.wrapS=s,this.wrapT=a,this.magFilter=l,this.minFilter=u,this.anisotropy=m,this.format=f,this.internalFormat=null,this.type=p,this.offset=new Ht(0,0),this.repeat=new Ht(1,1),this.center=new Ht(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Ct,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=x,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(Vu).x}get height(){return this.source.getSize(Vu).y}get depth(){return this.source.getSize(Vu).z}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,n){this.updateRanges.push({start:e,count:n})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.normalized=e.normalized,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const n in e){const s=e[n];if(s===void 0){Mt(`Texture.setValues(): parameter '${n}' has value of undefined.`);continue}const a=this[n];if(a===void 0){Mt(`Texture.setValues(): property '${n}' does not exist.`);continue}a&&s&&a.isVector2&&s.isVector2||a&&s&&a.isVector3&&s.isVector3||a&&s&&a.isMatrix3&&s.isMatrix3?a.copy(s):this[n]=s}}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const s={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(s.userData=this.userData),n||(e.textures[this.uuid]=s),s}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==m0)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case wd:e.x=e.x-Math.floor(e.x);break;case gr:e.x=e.x<0?0:1;break;case Td:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case wd:e.y=e.y-Math.floor(e.y);break;case gr:e.y=e.y<0?0:1;break;case Td:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}Yn.DEFAULT_IMAGE=null;Yn.DEFAULT_MAPPING=m0;Yn.DEFAULT_ANISOTROPY=1;const Df=class Df{constructor(e=0,n=0,s=0,a=1){this.x=e,this.y=n,this.z=s,this.w=a}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,n,s,a){return this.x=e,this.y=n,this.z=s,this.w=a,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;case 3:this.w=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this.w=e.w+n.w,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this.w+=e.w*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this.w=e.w-n.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const n=this.x,s=this.y,a=this.z,l=this.w,u=e.elements;return this.x=u[0]*n+u[4]*s+u[8]*a+u[12]*l,this.y=u[1]*n+u[5]*s+u[9]*a+u[13]*l,this.z=u[2]*n+u[6]*s+u[10]*a+u[14]*l,this.w=u[3]*n+u[7]*s+u[11]*a+u[15]*l,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const n=Math.sqrt(1-e.w*e.w);return n<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/n,this.y=e.y/n,this.z=e.z/n),this}setAxisAngleFromRotationMatrix(e){let n,s,a,l;const p=e.elements,m=p[0],x=p[4],S=p[8],g=p[1],y=p[5],T=p[9],R=p[2],_=p[6],v=p[10];if(Math.abs(x-g)<.01&&Math.abs(S-R)<.01&&Math.abs(T-_)<.01){if(Math.abs(x+g)<.1&&Math.abs(S+R)<.1&&Math.abs(T+_)<.1&&Math.abs(m+y+v-3)<.1)return this.set(1,0,0,0),this;n=Math.PI;const L=(m+1)/2,P=(y+1)/2,z=(v+1)/2,D=(x+g)/4,k=(S+R)/4,w=(T+_)/4;return L>P&&L>z?L<.01?(s=0,a=.707106781,l=.707106781):(s=Math.sqrt(L),a=D/s,l=k/s):P>z?P<.01?(s=.707106781,a=0,l=.707106781):(a=Math.sqrt(P),s=D/a,l=w/a):z<.01?(s=.707106781,a=.707106781,l=0):(l=Math.sqrt(z),s=k/l,a=w/l),this.set(s,a,l,n),this}let b=Math.sqrt((_-T)*(_-T)+(S-R)*(S-R)+(g-x)*(g-x));return Math.abs(b)<.001&&(b=1),this.x=(_-T)/b,this.y=(S-R)/b,this.z=(g-x)/b,this.w=Math.acos((m+y+v-1)/2),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this.w=n[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,n){return this.x=Bt(this.x,e.x,n.x),this.y=Bt(this.y,e.y,n.y),this.z=Bt(this.z,e.z,n.z),this.w=Bt(this.w,e.w,n.w),this}clampScalar(e,n){return this.x=Bt(this.x,e,n),this.y=Bt(this.y,e,n),this.z=Bt(this.z,e,n),this.w=Bt(this.w,e,n),this}clampLength(e,n){const s=this.length();return this.divideScalar(s||1).multiplyScalar(Bt(s,e,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this.w+=(e.w-this.w)*n,this}lerpVectors(e,n,s){return this.x=e.x+(n.x-e.x)*s,this.y=e.y+(n.y-e.y)*s,this.z=e.z+(n.z-e.z)*s,this.w=e.w+(n.w-e.w)*s,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this.w=e[n+3],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e[n+3]=this.w,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this.w=e.getW(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};Df.prototype.isVector4=!0;let mn=Df;class gv extends Ms{constructor(e=1,n=1,s={}){super(),s=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:jn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},s),this.isRenderTarget=!0,this.width=e,this.height=n,this.depth=s.depth,this.scissor=new mn(0,0,e,n),this.scissorTest=!1,this.viewport=new mn(0,0,e,n),this.textures=[];const a={width:e,height:n,depth:s.depth},l=new Yn(a),u=s.count;for(let f=0;f<u;f++)this.textures[f]=l.clone(),this.textures[f].isRenderTargetTexture=!0,this.textures[f].renderTarget=this;this._setTextureOptions(s),this.depthBuffer=s.depthBuffer,this.stencilBuffer=s.stencilBuffer,this.resolveDepthBuffer=s.resolveDepthBuffer,this.resolveStencilBuffer=s.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=s.depthTexture,this.samples=s.samples,this.multiview=s.multiview}_setTextureOptions(e={}){const n={minFilter:jn,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(n.mapping=e.mapping),e.wrapS!==void 0&&(n.wrapS=e.wrapS),e.wrapT!==void 0&&(n.wrapT=e.wrapT),e.wrapR!==void 0&&(n.wrapR=e.wrapR),e.magFilter!==void 0&&(n.magFilter=e.magFilter),e.minFilter!==void 0&&(n.minFilter=e.minFilter),e.format!==void 0&&(n.format=e.format),e.type!==void 0&&(n.type=e.type),e.anisotropy!==void 0&&(n.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(n.colorSpace=e.colorSpace),e.flipY!==void 0&&(n.flipY=e.flipY),e.generateMipmaps!==void 0&&(n.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(n.internalFormat=e.internalFormat);for(let s=0;s<this.textures.length;s++)this.textures[s].setValues(n)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,n,s=1){if(this.width!==e||this.height!==n||this.depth!==s){this.width=e,this.height=n,this.depth=s;for(let a=0,l=this.textures.length;a<l;a++)this.textures[a].image.width=e,this.textures[a].image.height=n,this.textures[a].image.depth=s,this.textures[a].isData3DTexture!==!0&&(this.textures[a].isArrayTexture=this.textures[a].image.depth>1);this.dispose()}this.viewport.set(0,0,e,n),this.scissor.set(0,0,e,n)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let n=0,s=e.textures.length;n<s;n++){this.textures[n]=e.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0,this.textures[n].renderTarget=this;const a=Object.assign({},e.textures[n].image);this.textures[n].source=new Sf(a)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this.multiview=e.multiview,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Zi extends gv{constructor(e=1,n=1,s={}){super(e,n,s),this.isWebGLRenderTarget=!0}}class w0 extends Yn{constructor(e=null,n=1,s=1,a=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:n,height:s,depth:a},this.magFilter=Bn,this.minFilter=Bn,this.wrapR=gr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class _v extends Yn{constructor(e=null,n=1,s=1,a=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:n,height:s,depth:a},this.magFilter=Bn,this.minFilter=Bn,this.wrapR=gr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const Kl=class Kl{constructor(e,n,s,a,l,u,f,p,m,x,S,g,y,T,R,_){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,n,s,a,l,u,f,p,m,x,S,g,y,T,R,_)}set(e,n,s,a,l,u,f,p,m,x,S,g,y,T,R,_){const v=this.elements;return v[0]=e,v[4]=n,v[8]=s,v[12]=a,v[1]=l,v[5]=u,v[9]=f,v[13]=p,v[2]=m,v[6]=x,v[10]=S,v[14]=g,v[3]=y,v[7]=T,v[11]=R,v[15]=_,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Kl().fromArray(this.elements)}copy(e){const n=this.elements,s=e.elements;return n[0]=s[0],n[1]=s[1],n[2]=s[2],n[3]=s[3],n[4]=s[4],n[5]=s[5],n[6]=s[6],n[7]=s[7],n[8]=s[8],n[9]=s[9],n[10]=s[10],n[11]=s[11],n[12]=s[12],n[13]=s[13],n[14]=s[14],n[15]=s[15],this}copyPosition(e){const n=this.elements,s=e.elements;return n[12]=s[12],n[13]=s[13],n[14]=s[14],this}setFromMatrix3(e){const n=e.elements;return this.set(n[0],n[3],n[6],0,n[1],n[4],n[7],0,n[2],n[5],n[8],0,0,0,0,1),this}extractBasis(e,n,s){return this.determinant()===0?(e.set(1,0,0),n.set(0,1,0),s.set(0,0,1),this):(e.setFromMatrixColumn(this,0),n.setFromMatrixColumn(this,1),s.setFromMatrixColumn(this,2),this)}makeBasis(e,n,s){return this.set(e.x,n.x,s.x,0,e.y,n.y,s.y,0,e.z,n.z,s.z,0,0,0,0,1),this}extractRotation(e){if(e.determinant()===0)return this.identity();const n=this.elements,s=e.elements,a=1/$s.setFromMatrixColumn(e,0).length(),l=1/$s.setFromMatrixColumn(e,1).length(),u=1/$s.setFromMatrixColumn(e,2).length();return n[0]=s[0]*a,n[1]=s[1]*a,n[2]=s[2]*a,n[3]=0,n[4]=s[4]*l,n[5]=s[5]*l,n[6]=s[6]*l,n[7]=0,n[8]=s[8]*u,n[9]=s[9]*u,n[10]=s[10]*u,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromEuler(e){const n=this.elements,s=e.x,a=e.y,l=e.z,u=Math.cos(s),f=Math.sin(s),p=Math.cos(a),m=Math.sin(a),x=Math.cos(l),S=Math.sin(l);if(e.order==="XYZ"){const g=u*x,y=u*S,T=f*x,R=f*S;n[0]=p*x,n[4]=-p*S,n[8]=m,n[1]=y+T*m,n[5]=g-R*m,n[9]=-f*p,n[2]=R-g*m,n[6]=T+y*m,n[10]=u*p}else if(e.order==="YXZ"){const g=p*x,y=p*S,T=m*x,R=m*S;n[0]=g+R*f,n[4]=T*f-y,n[8]=u*m,n[1]=u*S,n[5]=u*x,n[9]=-f,n[2]=y*f-T,n[6]=R+g*f,n[10]=u*p}else if(e.order==="ZXY"){const g=p*x,y=p*S,T=m*x,R=m*S;n[0]=g-R*f,n[4]=-u*S,n[8]=T+y*f,n[1]=y+T*f,n[5]=u*x,n[9]=R-g*f,n[2]=-u*m,n[6]=f,n[10]=u*p}else if(e.order==="ZYX"){const g=u*x,y=u*S,T=f*x,R=f*S;n[0]=p*x,n[4]=T*m-y,n[8]=g*m+R,n[1]=p*S,n[5]=R*m+g,n[9]=y*m-T,n[2]=-m,n[6]=f*p,n[10]=u*p}else if(e.order==="YZX"){const g=u*p,y=u*m,T=f*p,R=f*m;n[0]=p*x,n[4]=R-g*S,n[8]=T*S+y,n[1]=S,n[5]=u*x,n[9]=-f*x,n[2]=-m*x,n[6]=y*S+T,n[10]=g-R*S}else if(e.order==="XZY"){const g=u*p,y=u*m,T=f*p,R=f*m;n[0]=p*x,n[4]=-S,n[8]=m*x,n[1]=g*S+R,n[5]=u*x,n[9]=y*S-T,n[2]=T*S-y,n[6]=f*x,n[10]=R*S+g}return n[3]=0,n[7]=0,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromQuaternion(e){return this.compose(vv,e,xv)}lookAt(e,n,s){const a=this.elements;return hi.subVectors(e,n),hi.lengthSq()===0&&(hi.z=1),hi.normalize(),zr.crossVectors(s,hi),zr.lengthSq()===0&&(Math.abs(s.z)===1?hi.x+=1e-4:hi.z+=1e-4,hi.normalize(),zr.crossVectors(s,hi)),zr.normalize(),ml.crossVectors(hi,zr),a[0]=zr.x,a[4]=ml.x,a[8]=hi.x,a[1]=zr.y,a[5]=ml.y,a[9]=hi.y,a[2]=zr.z,a[6]=ml.z,a[10]=hi.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const s=e.elements,a=n.elements,l=this.elements,u=s[0],f=s[4],p=s[8],m=s[12],x=s[1],S=s[5],g=s[9],y=s[13],T=s[2],R=s[6],_=s[10],v=s[14],b=s[3],L=s[7],P=s[11],z=s[15],D=a[0],k=a[4],w=a[8],I=a[12],j=a[1],O=a[5],q=a[9],oe=a[13],pe=a[2],W=a[6],ee=a[10],K=a[14],Z=a[3],ue=a[7],de=a[11],F=a[15];return l[0]=u*D+f*j+p*pe+m*Z,l[4]=u*k+f*O+p*W+m*ue,l[8]=u*w+f*q+p*ee+m*de,l[12]=u*I+f*oe+p*K+m*F,l[1]=x*D+S*j+g*pe+y*Z,l[5]=x*k+S*O+g*W+y*ue,l[9]=x*w+S*q+g*ee+y*de,l[13]=x*I+S*oe+g*K+y*F,l[2]=T*D+R*j+_*pe+v*Z,l[6]=T*k+R*O+_*W+v*ue,l[10]=T*w+R*q+_*ee+v*de,l[14]=T*I+R*oe+_*K+v*F,l[3]=b*D+L*j+P*pe+z*Z,l[7]=b*k+L*O+P*W+z*ue,l[11]=b*w+L*q+P*ee+z*de,l[15]=b*I+L*oe+P*K+z*F,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[4]*=e,n[8]*=e,n[12]*=e,n[1]*=e,n[5]*=e,n[9]*=e,n[13]*=e,n[2]*=e,n[6]*=e,n[10]*=e,n[14]*=e,n[3]*=e,n[7]*=e,n[11]*=e,n[15]*=e,this}determinant(){const e=this.elements,n=e[0],s=e[4],a=e[8],l=e[12],u=e[1],f=e[5],p=e[9],m=e[13],x=e[2],S=e[6],g=e[10],y=e[14],T=e[3],R=e[7],_=e[11],v=e[15],b=p*y-m*g,L=f*y-m*S,P=f*g-p*S,z=u*y-m*x,D=u*g-p*x,k=u*S-f*x;return n*(R*b-_*L+v*P)-s*(T*b-_*z+v*D)+a*(T*L-R*z+v*k)-l*(T*P-R*D+_*k)}transpose(){const e=this.elements;let n;return n=e[1],e[1]=e[4],e[4]=n,n=e[2],e[2]=e[8],e[8]=n,n=e[6],e[6]=e[9],e[9]=n,n=e[3],e[3]=e[12],e[12]=n,n=e[7],e[7]=e[13],e[13]=n,n=e[11],e[11]=e[14],e[14]=n,this}setPosition(e,n,s){const a=this.elements;return e.isVector3?(a[12]=e.x,a[13]=e.y,a[14]=e.z):(a[12]=e,a[13]=n,a[14]=s),this}invert(){const e=this.elements,n=e[0],s=e[1],a=e[2],l=e[3],u=e[4],f=e[5],p=e[6],m=e[7],x=e[8],S=e[9],g=e[10],y=e[11],T=e[12],R=e[13],_=e[14],v=e[15],b=n*f-s*u,L=n*p-a*u,P=n*m-l*u,z=s*p-a*f,D=s*m-l*f,k=a*m-l*p,w=x*R-S*T,I=x*_-g*T,j=x*v-y*T,O=S*_-g*R,q=S*v-y*R,oe=g*v-y*_,pe=b*oe-L*q+P*O+z*j-D*I+k*w;if(pe===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const W=1/pe;return e[0]=(f*oe-p*q+m*O)*W,e[1]=(a*q-s*oe-l*O)*W,e[2]=(R*k-_*D+v*z)*W,e[3]=(g*D-S*k-y*z)*W,e[4]=(p*j-u*oe-m*I)*W,e[5]=(n*oe-a*j+l*I)*W,e[6]=(_*P-T*k-v*L)*W,e[7]=(x*k-g*P+y*L)*W,e[8]=(u*q-f*j+m*w)*W,e[9]=(s*j-n*q-l*w)*W,e[10]=(T*D-R*P+v*b)*W,e[11]=(S*P-x*D-y*b)*W,e[12]=(f*I-u*O-p*w)*W,e[13]=(n*O-s*I+a*w)*W,e[14]=(R*L-T*z-_*b)*W,e[15]=(x*z-S*L+g*b)*W,this}scale(e){const n=this.elements,s=e.x,a=e.y,l=e.z;return n[0]*=s,n[4]*=a,n[8]*=l,n[1]*=s,n[5]*=a,n[9]*=l,n[2]*=s,n[6]*=a,n[10]*=l,n[3]*=s,n[7]*=a,n[11]*=l,this}getMaxScaleOnAxis(){const e=this.elements,n=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],s=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],a=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(n,s,a))}makeTranslation(e,n,s){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,n,0,0,1,s,0,0,0,1),this}makeRotationX(e){const n=Math.cos(e),s=Math.sin(e);return this.set(1,0,0,0,0,n,-s,0,0,s,n,0,0,0,0,1),this}makeRotationY(e){const n=Math.cos(e),s=Math.sin(e);return this.set(n,0,s,0,0,1,0,0,-s,0,n,0,0,0,0,1),this}makeRotationZ(e){const n=Math.cos(e),s=Math.sin(e);return this.set(n,-s,0,0,s,n,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,n){const s=Math.cos(n),a=Math.sin(n),l=1-s,u=e.x,f=e.y,p=e.z,m=l*u,x=l*f;return this.set(m*u+s,m*f-a*p,m*p+a*f,0,m*f+a*p,x*f+s,x*p-a*u,0,m*p-a*f,x*p+a*u,l*p*p+s,0,0,0,0,1),this}makeScale(e,n,s){return this.set(e,0,0,0,0,n,0,0,0,0,s,0,0,0,0,1),this}makeShear(e,n,s,a,l,u){return this.set(1,s,l,0,e,1,u,0,n,a,1,0,0,0,0,1),this}compose(e,n,s){const a=this.elements,l=n._x,u=n._y,f=n._z,p=n._w,m=l+l,x=u+u,S=f+f,g=l*m,y=l*x,T=l*S,R=u*x,_=u*S,v=f*S,b=p*m,L=p*x,P=p*S,z=s.x,D=s.y,k=s.z;return a[0]=(1-(R+v))*z,a[1]=(y+P)*z,a[2]=(T-L)*z,a[3]=0,a[4]=(y-P)*D,a[5]=(1-(g+v))*D,a[6]=(_+b)*D,a[7]=0,a[8]=(T+L)*k,a[9]=(_-b)*k,a[10]=(1-(g+R))*k,a[11]=0,a[12]=e.x,a[13]=e.y,a[14]=e.z,a[15]=1,this}decompose(e,n,s){const a=this.elements;e.x=a[12],e.y=a[13],e.z=a[14];const l=this.determinant();if(l===0)return s.set(1,1,1),n.identity(),this;let u=$s.set(a[0],a[1],a[2]).length();const f=$s.set(a[4],a[5],a[6]).length(),p=$s.set(a[8],a[9],a[10]).length();l<0&&(u=-u),Ni.copy(this);const m=1/u,x=1/f,S=1/p;return Ni.elements[0]*=m,Ni.elements[1]*=m,Ni.elements[2]*=m,Ni.elements[4]*=x,Ni.elements[5]*=x,Ni.elements[6]*=x,Ni.elements[8]*=S,Ni.elements[9]*=S,Ni.elements[10]*=S,n.setFromRotationMatrix(Ni),s.x=u,s.y=f,s.z=p,this}makePerspective(e,n,s,a,l,u,f=qi,p=!1){const m=this.elements,x=2*l/(n-e),S=2*l/(s-a),g=(n+e)/(n-e),y=(s+a)/(s-a);let T,R;if(p)T=l/(u-l),R=u*l/(u-l);else if(f===qi)T=-(u+l)/(u-l),R=-2*u*l/(u-l);else if(f===ca)T=-u/(u-l),R=-u*l/(u-l);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+f);return m[0]=x,m[4]=0,m[8]=g,m[12]=0,m[1]=0,m[5]=S,m[9]=y,m[13]=0,m[2]=0,m[6]=0,m[10]=T,m[14]=R,m[3]=0,m[7]=0,m[11]=-1,m[15]=0,this}makeOrthographic(e,n,s,a,l,u,f=qi,p=!1){const m=this.elements,x=2/(n-e),S=2/(s-a),g=-(n+e)/(n-e),y=-(s+a)/(s-a);let T,R;if(p)T=1/(u-l),R=u/(u-l);else if(f===qi)T=-2/(u-l),R=-(u+l)/(u-l);else if(f===ca)T=-1/(u-l),R=-l/(u-l);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+f);return m[0]=x,m[4]=0,m[8]=0,m[12]=g,m[1]=0,m[5]=S,m[9]=0,m[13]=y,m[2]=0,m[6]=0,m[10]=T,m[14]=R,m[3]=0,m[7]=0,m[11]=0,m[15]=1,this}equals(e){const n=this.elements,s=e.elements;for(let a=0;a<16;a++)if(n[a]!==s[a])return!1;return!0}fromArray(e,n=0){for(let s=0;s<16;s++)this.elements[s]=e[s+n];return this}toArray(e=[],n=0){const s=this.elements;return e[n]=s[0],e[n+1]=s[1],e[n+2]=s[2],e[n+3]=s[3],e[n+4]=s[4],e[n+5]=s[5],e[n+6]=s[6],e[n+7]=s[7],e[n+8]=s[8],e[n+9]=s[9],e[n+10]=s[10],e[n+11]=s[11],e[n+12]=s[12],e[n+13]=s[13],e[n+14]=s[14],e[n+15]=s[15],e}};Kl.prototype.isMatrix4=!0;let gn=Kl;const $s=new J,Ni=new gn,vv=new J(0,0,0),xv=new J(1,1,1),zr=new J,ml=new J,hi=new J,vm=new gn,xm=new mo;class Kr{constructor(e=0,n=0,s=0,a=Kr.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=n,this._z=s,this._order=a}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,n,s,a=this._order){return this._x=e,this._y=n,this._z=s,this._order=a,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,n=this._order,s=!0){const a=e.elements,l=a[0],u=a[4],f=a[8],p=a[1],m=a[5],x=a[9],S=a[2],g=a[6],y=a[10];switch(n){case"XYZ":this._y=Math.asin(Bt(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(-x,y),this._z=Math.atan2(-u,l)):(this._x=Math.atan2(g,m),this._z=0);break;case"YXZ":this._x=Math.asin(-Bt(x,-1,1)),Math.abs(x)<.9999999?(this._y=Math.atan2(f,y),this._z=Math.atan2(p,m)):(this._y=Math.atan2(-S,l),this._z=0);break;case"ZXY":this._x=Math.asin(Bt(g,-1,1)),Math.abs(g)<.9999999?(this._y=Math.atan2(-S,y),this._z=Math.atan2(-u,m)):(this._y=0,this._z=Math.atan2(p,l));break;case"ZYX":this._y=Math.asin(-Bt(S,-1,1)),Math.abs(S)<.9999999?(this._x=Math.atan2(g,y),this._z=Math.atan2(p,l)):(this._x=0,this._z=Math.atan2(-u,m));break;case"YZX":this._z=Math.asin(Bt(p,-1,1)),Math.abs(p)<.9999999?(this._x=Math.atan2(-x,m),this._y=Math.atan2(-S,l)):(this._x=0,this._y=Math.atan2(f,y));break;case"XZY":this._z=Math.asin(-Bt(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(g,m),this._y=Math.atan2(f,l)):(this._x=Math.atan2(-x,y),this._y=0);break;default:Mt("Euler: .setFromRotationMatrix() encountered an unknown order: "+n)}return this._order=n,s===!0&&this._onChangeCallback(),this}setFromQuaternion(e,n,s){return vm.makeRotationFromQuaternion(e),this.setFromRotationMatrix(vm,n,s)}setFromVector3(e,n=this._order){return this.set(e.x,e.y,e.z,n)}reorder(e){return xm.setFromEuler(this),this.setFromQuaternion(xm,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Kr.DEFAULT_ORDER="XYZ";class yf{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let Sv=0;const Sm=new J,Ks=new mo,dr=new gn,gl=new J,Jo=new J,yv=new J,Mv=new mo,ym=new J(1,0,0),Mm=new J(0,1,0),Em=new J(0,0,1),wm={type:"added"},Ev={type:"removed"},Zs={type:"childadded",child:null},Gu={type:"childremoved",child:null};class qn extends Ms{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Sv++}),this.uuid=ua(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=qn.DEFAULT_UP.clone();const e=new J,n=new Kr,s=new mo,a=new J(1,1,1);function l(){s.setFromEuler(n,!1)}function u(){n.setFromQuaternion(s,void 0,!1)}n._onChange(l),s._onChange(u),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:n},quaternion:{configurable:!0,enumerable:!0,value:s},scale:{configurable:!0,enumerable:!0,value:a},modelViewMatrix:{value:new gn},normalMatrix:{value:new Ct}}),this.matrix=new gn,this.matrixWorld=new gn,this.matrixAutoUpdate=qn.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=qn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new yf,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,n){this.quaternion.setFromAxisAngle(e,n)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,n){return Ks.setFromAxisAngle(e,n),this.quaternion.multiply(Ks),this}rotateOnWorldAxis(e,n){return Ks.setFromAxisAngle(e,n),this.quaternion.premultiply(Ks),this}rotateX(e){return this.rotateOnAxis(ym,e)}rotateY(e){return this.rotateOnAxis(Mm,e)}rotateZ(e){return this.rotateOnAxis(Em,e)}translateOnAxis(e,n){return Sm.copy(e).applyQuaternion(this.quaternion),this.position.add(Sm.multiplyScalar(n)),this}translateX(e){return this.translateOnAxis(ym,e)}translateY(e){return this.translateOnAxis(Mm,e)}translateZ(e){return this.translateOnAxis(Em,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(dr.copy(this.matrixWorld).invert())}lookAt(e,n,s){e.isVector3?gl.copy(e):gl.set(e,n,s);const a=this.parent;this.updateWorldMatrix(!0,!1),Jo.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?dr.lookAt(Jo,gl,this.up):dr.lookAt(gl,Jo,this.up),this.quaternion.setFromRotationMatrix(dr),a&&(dr.extractRotation(a.matrixWorld),Ks.setFromRotationMatrix(dr),this.quaternion.premultiply(Ks.invert()))}add(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.add(arguments[n]);return this}return e===this?(Gt("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(wm),Zs.child=e,this.dispatchEvent(Zs),Zs.child=null):Gt("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let s=0;s<arguments.length;s++)this.remove(arguments[s]);return this}const n=this.children.indexOf(e);return n!==-1&&(e.parent=null,this.children.splice(n,1),e.dispatchEvent(Ev),Gu.child=e,this.dispatchEvent(Gu),Gu.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),dr.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),dr.multiply(e.parent.matrixWorld)),e.applyMatrix4(dr),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(wm),Zs.child=e,this.dispatchEvent(Zs),Zs.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,n){if(this[e]===n)return this;for(let s=0,a=this.children.length;s<a;s++){const u=this.children[s].getObjectByProperty(e,n);if(u!==void 0)return u}}getObjectsByProperty(e,n,s=[]){this[e]===n&&s.push(this);const a=this.children;for(let l=0,u=a.length;l<u;l++)a[l].getObjectsByProperty(e,n,s);return s}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Jo,e,yv),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Jo,Mv,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const n=this.matrixWorld.elements;return e.set(n[8],n[9],n[10]).normalize()}raycast(){}traverse(e){e(this);const n=this.children;for(let s=0,a=n.length;s<a;s++)n[s].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const n=this.children;for(let s=0,a=n.length;s<a;s++)n[s].traverseVisible(e)}traverseAncestors(e){const n=this.parent;n!==null&&(e(n),n.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);const e=this.pivot;if(e!==null){const n=e.x,s=e.y,a=e.z,l=this.matrix.elements;l[12]+=n-l[0]*n-l[4]*s-l[8]*a,l[13]+=s-l[1]*n-l[5]*s-l[9]*a,l[14]+=a-l[2]*n-l[6]*s-l[10]*a}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const n=this.children;for(let s=0,a=n.length;s<a;s++)n[s].updateMatrixWorld(e)}updateWorldMatrix(e,n){const s=this.parent;if(e===!0&&s!==null&&s.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),n===!0){const a=this.children;for(let l=0,u=a.length;l<u;l++)a[l].updateWorldMatrix(!1,!0)}}toJSON(e){const n=e===void 0||typeof e=="string",s={};n&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},s.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const a={};a.uuid=this.uuid,a.type=this.type,this.name!==""&&(a.name=this.name),this.castShadow===!0&&(a.castShadow=!0),this.receiveShadow===!0&&(a.receiveShadow=!0),this.visible===!1&&(a.visible=!1),this.frustumCulled===!1&&(a.frustumCulled=!1),this.renderOrder!==0&&(a.renderOrder=this.renderOrder),this.static!==!1&&(a.static=this.static),Object.keys(this.userData).length>0&&(a.userData=this.userData),a.layers=this.layers.mask,a.matrix=this.matrix.toArray(),a.up=this.up.toArray(),this.pivot!==null&&(a.pivot=this.pivot.toArray()),this.matrixAutoUpdate===!1&&(a.matrixAutoUpdate=!1),this.morphTargetDictionary!==void 0&&(a.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(a.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(a.type="InstancedMesh",a.count=this.count,a.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(a.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(a.type="BatchedMesh",a.perObjectFrustumCulled=this.perObjectFrustumCulled,a.sortObjects=this.sortObjects,a.drawRanges=this._drawRanges,a.reservedRanges=this._reservedRanges,a.geometryInfo=this._geometryInfo.map(f=>({...f,boundingBox:f.boundingBox?f.boundingBox.toJSON():void 0,boundingSphere:f.boundingSphere?f.boundingSphere.toJSON():void 0})),a.instanceInfo=this._instanceInfo.map(f=>({...f})),a.availableInstanceIds=this._availableInstanceIds.slice(),a.availableGeometryIds=this._availableGeometryIds.slice(),a.nextIndexStart=this._nextIndexStart,a.nextVertexStart=this._nextVertexStart,a.geometryCount=this._geometryCount,a.maxInstanceCount=this._maxInstanceCount,a.maxVertexCount=this._maxVertexCount,a.maxIndexCount=this._maxIndexCount,a.geometryInitialized=this._geometryInitialized,a.matricesTexture=this._matricesTexture.toJSON(e),a.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(a.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(a.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(a.boundingBox=this.boundingBox.toJSON()));function l(f,p){return f[p.uuid]===void 0&&(f[p.uuid]=p.toJSON(e)),p.uuid}if(this.isScene)this.background&&(this.background.isColor?a.background=this.background.toJSON():this.background.isTexture&&(a.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(a.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){a.geometry=l(e.geometries,this.geometry);const f=this.geometry.parameters;if(f!==void 0&&f.shapes!==void 0){const p=f.shapes;if(Array.isArray(p))for(let m=0,x=p.length;m<x;m++){const S=p[m];l(e.shapes,S)}else l(e.shapes,p)}}if(this.isSkinnedMesh&&(a.bindMode=this.bindMode,a.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(l(e.skeletons,this.skeleton),a.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const f=[];for(let p=0,m=this.material.length;p<m;p++)f.push(l(e.materials,this.material[p]));a.material=f}else a.material=l(e.materials,this.material);if(this.children.length>0){a.children=[];for(let f=0;f<this.children.length;f++)a.children.push(this.children[f].toJSON(e).object)}if(this.animations.length>0){a.animations=[];for(let f=0;f<this.animations.length;f++){const p=this.animations[f];a.animations.push(l(e.animations,p))}}if(n){const f=u(e.geometries),p=u(e.materials),m=u(e.textures),x=u(e.images),S=u(e.shapes),g=u(e.skeletons),y=u(e.animations),T=u(e.nodes);f.length>0&&(s.geometries=f),p.length>0&&(s.materials=p),m.length>0&&(s.textures=m),x.length>0&&(s.images=x),S.length>0&&(s.shapes=S),g.length>0&&(s.skeletons=g),y.length>0&&(s.animations=y),T.length>0&&(s.nodes=T)}return s.object=a,s;function u(f){const p=[];for(const m in f){const x=f[m];delete x.metadata,p.push(x)}return p}}clone(e){return new this.constructor().copy(this,e)}copy(e,n=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.pivot=e.pivot!==null?e.pivot.clone():null,this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),n===!0)for(let s=0;s<e.children.length;s++){const a=e.children[s];this.add(a.clone())}return this}}qn.DEFAULT_UP=new J(0,1,0);qn.DEFAULT_MATRIX_AUTO_UPDATE=!0;qn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;class $i extends qn{constructor(){super(),this.isGroup=!0,this.type="Group"}}const wv={type:"move"};class Wu{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new $i,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new $i,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new J,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new J),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new $i,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new J,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new J,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const n=this._hand;if(n)for(const s of e.hand.values())this._getHandJoint(n,s)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,n,s){let a=null,l=null,u=null;const f=this._targetRay,p=this._grip,m=this._hand;if(e&&n.session.visibilityState!=="visible-blurred"){if(m&&e.hand){u=!0;for(const R of e.hand.values()){const _=n.getJointPose(R,s),v=this._getHandJoint(m,R);_!==null&&(v.matrix.fromArray(_.transform.matrix),v.matrix.decompose(v.position,v.rotation,v.scale),v.matrixWorldNeedsUpdate=!0,v.jointRadius=_.radius),v.visible=_!==null}const x=m.joints["index-finger-tip"],S=m.joints["thumb-tip"],g=x.position.distanceTo(S.position),y=.02,T=.005;m.inputState.pinching&&g>y+T?(m.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!m.inputState.pinching&&g<=y-T&&(m.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else p!==null&&e.gripSpace&&(l=n.getPose(e.gripSpace,s),l!==null&&(p.matrix.fromArray(l.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,l.linearVelocity?(p.hasLinearVelocity=!0,p.linearVelocity.copy(l.linearVelocity)):p.hasLinearVelocity=!1,l.angularVelocity?(p.hasAngularVelocity=!0,p.angularVelocity.copy(l.angularVelocity)):p.hasAngularVelocity=!1,p.eventsEnabled&&p.dispatchEvent({type:"gripUpdated",data:e,target:this})));f!==null&&(a=n.getPose(e.targetRaySpace,s),a===null&&l!==null&&(a=l),a!==null&&(f.matrix.fromArray(a.transform.matrix),f.matrix.decompose(f.position,f.rotation,f.scale),f.matrixWorldNeedsUpdate=!0,a.linearVelocity?(f.hasLinearVelocity=!0,f.linearVelocity.copy(a.linearVelocity)):f.hasLinearVelocity=!1,a.angularVelocity?(f.hasAngularVelocity=!0,f.angularVelocity.copy(a.angularVelocity)):f.hasAngularVelocity=!1,this.dispatchEvent(wv)))}return f!==null&&(f.visible=a!==null),p!==null&&(p.visible=l!==null),m!==null&&(m.visible=u!==null),this}_getHandJoint(e,n){if(e.joints[n.jointName]===void 0){const s=new $i;s.matrixAutoUpdate=!1,s.visible=!1,e.joints[n.jointName]=s,e.add(s)}return e.joints[n.jointName]}}const T0={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Hr={h:0,s:0,l:0},_l={h:0,s:0,l:0};function Xu(r,e,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?r+(e-r)*6*n:n<1/2?e:n<2/3?r+(e-r)*6*(2/3-n):r}class Dt{constructor(e,n,s){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,n,s)}set(e,n,s){if(n===void 0&&s===void 0){const a=e;a&&a.isColor?this.copy(a):typeof a=="number"?this.setHex(a):typeof a=="string"&&this.setStyle(a)}else this.setRGB(e,n,s);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,n=ai){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,zt.colorSpaceToWorking(this,n),this}setRGB(e,n,s,a=zt.workingColorSpace){return this.r=e,this.g=n,this.b=s,zt.colorSpaceToWorking(this,a),this}setHSL(e,n,s,a=zt.workingColorSpace){if(e=dv(e,1),n=Bt(n,0,1),s=Bt(s,0,1),n===0)this.r=this.g=this.b=s;else{const l=s<=.5?s*(1+n):s+n-s*n,u=2*s-l;this.r=Xu(u,l,e+1/3),this.g=Xu(u,l,e),this.b=Xu(u,l,e-1/3)}return zt.colorSpaceToWorking(this,a),this}setStyle(e,n=ai){function s(l){l!==void 0&&parseFloat(l)<1&&Mt("Color: Alpha component of "+e+" will be ignored.")}let a;if(a=/^(\w+)\(([^\)]*)\)/.exec(e)){let l;const u=a[1],f=a[2];switch(u){case"rgb":case"rgba":if(l=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(f))return s(l[4]),this.setRGB(Math.min(255,parseInt(l[1],10))/255,Math.min(255,parseInt(l[2],10))/255,Math.min(255,parseInt(l[3],10))/255,n);if(l=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(f))return s(l[4]),this.setRGB(Math.min(100,parseInt(l[1],10))/100,Math.min(100,parseInt(l[2],10))/100,Math.min(100,parseInt(l[3],10))/100,n);break;case"hsl":case"hsla":if(l=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(f))return s(l[4]),this.setHSL(parseFloat(l[1])/360,parseFloat(l[2])/100,parseFloat(l[3])/100,n);break;default:Mt("Color: Unknown color model "+e)}}else if(a=/^\#([A-Fa-f\d]+)$/.exec(e)){const l=a[1],u=l.length;if(u===3)return this.setRGB(parseInt(l.charAt(0),16)/15,parseInt(l.charAt(1),16)/15,parseInt(l.charAt(2),16)/15,n);if(u===6)return this.setHex(parseInt(l,16),n);Mt("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,n);return this}setColorName(e,n=ai){const s=T0[e.toLowerCase()];return s!==void 0?this.setHex(s,n):Mt("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=vr(e.r),this.g=vr(e.g),this.b=vr(e.b),this}copyLinearToSRGB(e){return this.r=co(e.r),this.g=co(e.g),this.b=co(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=ai){return zt.workingToColorSpace(Xn.copy(this),e),Math.round(Bt(Xn.r*255,0,255))*65536+Math.round(Bt(Xn.g*255,0,255))*256+Math.round(Bt(Xn.b*255,0,255))}getHexString(e=ai){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,n=zt.workingColorSpace){zt.workingToColorSpace(Xn.copy(this),n);const s=Xn.r,a=Xn.g,l=Xn.b,u=Math.max(s,a,l),f=Math.min(s,a,l);let p,m;const x=(f+u)/2;if(f===u)p=0,m=0;else{const S=u-f;switch(m=x<=.5?S/(u+f):S/(2-u-f),u){case s:p=(a-l)/S+(a<l?6:0);break;case a:p=(l-s)/S+2;break;case l:p=(s-a)/S+4;break}p/=6}return e.h=p,e.s=m,e.l=x,e}getRGB(e,n=zt.workingColorSpace){return zt.workingToColorSpace(Xn.copy(this),n),e.r=Xn.r,e.g=Xn.g,e.b=Xn.b,e}getStyle(e=ai){zt.workingToColorSpace(Xn.copy(this),e);const n=Xn.r,s=Xn.g,a=Xn.b;return e!==ai?`color(${e} ${n.toFixed(3)} ${s.toFixed(3)} ${a.toFixed(3)})`:`rgb(${Math.round(n*255)},${Math.round(s*255)},${Math.round(a*255)})`}offsetHSL(e,n,s){return this.getHSL(Hr),this.setHSL(Hr.h+e,Hr.s+n,Hr.l+s)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,n){return this.r=e.r+n.r,this.g=e.g+n.g,this.b=e.b+n.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,n){return this.r+=(e.r-this.r)*n,this.g+=(e.g-this.g)*n,this.b+=(e.b-this.b)*n,this}lerpColors(e,n,s){return this.r=e.r+(n.r-e.r)*s,this.g=e.g+(n.g-e.g)*s,this.b=e.b+(n.b-e.b)*s,this}lerpHSL(e,n){this.getHSL(Hr),e.getHSL(_l);const s=ku(Hr.h,_l.h,n),a=ku(Hr.s,_l.s,n),l=ku(Hr.l,_l.l,n);return this.setHSL(s,a,l),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const n=this.r,s=this.g,a=this.b,l=e.elements;return this.r=l[0]*n+l[3]*s+l[6]*a,this.g=l[1]*n+l[4]*s+l[7]*a,this.b=l[2]*n+l[5]*s+l[8]*a,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,n=0){return this.r=e[n],this.g=e[n+1],this.b=e[n+2],this}toArray(e=[],n=0){return e[n]=this.r,e[n+1]=this.g,e[n+2]=this.b,e}fromBufferAttribute(e,n){return this.r=e.getX(n),this.g=e.getY(n),this.b=e.getZ(n),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Xn=new Dt;Dt.NAMES=T0;class Mf{constructor(e,n=1,s=1e3){this.isFog=!0,this.name="",this.color=new Dt(e),this.near=n,this.far=s}clone(){return new Mf(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}}class Tv extends qn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Kr,this.environmentIntensity=1,this.environmentRotation=new Kr,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,n){return super.copy(e,n),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const n=super.toJSON(e);return this.fog!==null&&(n.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(n.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(n.object.backgroundIntensity=this.backgroundIntensity),n.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(n.object.environmentIntensity=this.environmentIntensity),n.object.environmentRotation=this.environmentRotation.toArray(),n}}const Ui=new J,fr=new J,ju=new J,hr=new J,Js=new J,Qs=new J,Tm=new J,Yu=new J,qu=new J,$u=new J,Ku=new mn,Zu=new mn,Ju=new mn;class Oi{constructor(e=new J,n=new J,s=new J){this.a=e,this.b=n,this.c=s}static getNormal(e,n,s,a){a.subVectors(s,n),Ui.subVectors(e,n),a.cross(Ui);const l=a.lengthSq();return l>0?a.multiplyScalar(1/Math.sqrt(l)):a.set(0,0,0)}static getBarycoord(e,n,s,a,l){Ui.subVectors(a,n),fr.subVectors(s,n),ju.subVectors(e,n);const u=Ui.dot(Ui),f=Ui.dot(fr),p=Ui.dot(ju),m=fr.dot(fr),x=fr.dot(ju),S=u*m-f*f;if(S===0)return l.set(0,0,0),null;const g=1/S,y=(m*p-f*x)*g,T=(u*x-f*p)*g;return l.set(1-y-T,T,y)}static containsPoint(e,n,s,a){return this.getBarycoord(e,n,s,a,hr)===null?!1:hr.x>=0&&hr.y>=0&&hr.x+hr.y<=1}static getInterpolation(e,n,s,a,l,u,f,p){return this.getBarycoord(e,n,s,a,hr)===null?(p.x=0,p.y=0,"z"in p&&(p.z=0),"w"in p&&(p.w=0),null):(p.setScalar(0),p.addScaledVector(l,hr.x),p.addScaledVector(u,hr.y),p.addScaledVector(f,hr.z),p)}static getInterpolatedAttribute(e,n,s,a,l,u){return Ku.setScalar(0),Zu.setScalar(0),Ju.setScalar(0),Ku.fromBufferAttribute(e,n),Zu.fromBufferAttribute(e,s),Ju.fromBufferAttribute(e,a),u.setScalar(0),u.addScaledVector(Ku,l.x),u.addScaledVector(Zu,l.y),u.addScaledVector(Ju,l.z),u}static isFrontFacing(e,n,s,a){return Ui.subVectors(s,n),fr.subVectors(e,n),Ui.cross(fr).dot(a)<0}set(e,n,s){return this.a.copy(e),this.b.copy(n),this.c.copy(s),this}setFromPointsAndIndices(e,n,s,a){return this.a.copy(e[n]),this.b.copy(e[s]),this.c.copy(e[a]),this}setFromAttributeAndIndices(e,n,s,a){return this.a.fromBufferAttribute(e,n),this.b.fromBufferAttribute(e,s),this.c.fromBufferAttribute(e,a),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Ui.subVectors(this.c,this.b),fr.subVectors(this.a,this.b),Ui.cross(fr).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Oi.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,n){return Oi.getBarycoord(e,this.a,this.b,this.c,n)}getInterpolation(e,n,s,a,l){return Oi.getInterpolation(e,this.a,this.b,this.c,n,s,a,l)}containsPoint(e){return Oi.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Oi.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,n){const s=this.a,a=this.b,l=this.c;let u,f;Js.subVectors(a,s),Qs.subVectors(l,s),Yu.subVectors(e,s);const p=Js.dot(Yu),m=Qs.dot(Yu);if(p<=0&&m<=0)return n.copy(s);qu.subVectors(e,a);const x=Js.dot(qu),S=Qs.dot(qu);if(x>=0&&S<=x)return n.copy(a);const g=p*S-x*m;if(g<=0&&p>=0&&x<=0)return u=p/(p-x),n.copy(s).addScaledVector(Js,u);$u.subVectors(e,l);const y=Js.dot($u),T=Qs.dot($u);if(T>=0&&y<=T)return n.copy(l);const R=y*m-p*T;if(R<=0&&m>=0&&T<=0)return f=m/(m-T),n.copy(s).addScaledVector(Qs,f);const _=x*T-y*S;if(_<=0&&S-x>=0&&y-T>=0)return Tm.subVectors(l,a),f=(S-x)/(S-x+(y-T)),n.copy(a).addScaledVector(Tm,f);const v=1/(_+R+g);return u=R*v,f=g*v,n.copy(s).addScaledVector(Js,u).addScaledVector(Qs,f)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}class da{constructor(e=new J(1/0,1/0,1/0),n=new J(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=n}set(e,n){return this.min.copy(e),this.max.copy(n),this}setFromArray(e){this.makeEmpty();for(let n=0,s=e.length;n<s;n+=3)this.expandByPoint(Fi.fromArray(e,n));return this}setFromBufferAttribute(e){this.makeEmpty();for(let n=0,s=e.count;n<s;n++)this.expandByPoint(Fi.fromBufferAttribute(e,n));return this}setFromPoints(e){this.makeEmpty();for(let n=0,s=e.length;n<s;n++)this.expandByPoint(e[n]);return this}setFromCenterAndSize(e,n){const s=Fi.copy(n).multiplyScalar(.5);return this.min.copy(e).sub(s),this.max.copy(e).add(s),this}setFromObject(e,n=!1){return this.makeEmpty(),this.expandByObject(e,n)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,n=!1){e.updateWorldMatrix(!1,!1);const s=e.geometry;if(s!==void 0){const l=s.getAttribute("position");if(n===!0&&l!==void 0&&e.isInstancedMesh!==!0)for(let u=0,f=l.count;u<f;u++)e.isMesh===!0?e.getVertexPosition(u,Fi):Fi.fromBufferAttribute(l,u),Fi.applyMatrix4(e.matrixWorld),this.expandByPoint(Fi);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),vl.copy(e.boundingBox)):(s.boundingBox===null&&s.computeBoundingBox(),vl.copy(s.boundingBox)),vl.applyMatrix4(e.matrixWorld),this.union(vl)}const a=e.children;for(let l=0,u=a.length;l<u;l++)this.expandByObject(a[l],n);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,n){return n.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Fi),Fi.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let n,s;return e.normal.x>0?(n=e.normal.x*this.min.x,s=e.normal.x*this.max.x):(n=e.normal.x*this.max.x,s=e.normal.x*this.min.x),e.normal.y>0?(n+=e.normal.y*this.min.y,s+=e.normal.y*this.max.y):(n+=e.normal.y*this.max.y,s+=e.normal.y*this.min.y),e.normal.z>0?(n+=e.normal.z*this.min.z,s+=e.normal.z*this.max.z):(n+=e.normal.z*this.max.z,s+=e.normal.z*this.min.z),n<=-e.constant&&s>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Qo),xl.subVectors(this.max,Qo),eo.subVectors(e.a,Qo),to.subVectors(e.b,Qo),no.subVectors(e.c,Qo),Vr.subVectors(to,eo),Gr.subVectors(no,to),ds.subVectors(eo,no);let n=[0,-Vr.z,Vr.y,0,-Gr.z,Gr.y,0,-ds.z,ds.y,Vr.z,0,-Vr.x,Gr.z,0,-Gr.x,ds.z,0,-ds.x,-Vr.y,Vr.x,0,-Gr.y,Gr.x,0,-ds.y,ds.x,0];return!Qu(n,eo,to,no,xl)||(n=[1,0,0,0,1,0,0,0,1],!Qu(n,eo,to,no,xl))?!1:(Sl.crossVectors(Vr,Gr),n=[Sl.x,Sl.y,Sl.z],Qu(n,eo,to,no,xl))}clampPoint(e,n){return n.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Fi).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Fi).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(pr[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),pr[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),pr[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),pr[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),pr[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),pr[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),pr[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),pr[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(pr),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const pr=[new J,new J,new J,new J,new J,new J,new J,new J],Fi=new J,vl=new da,eo=new J,to=new J,no=new J,Vr=new J,Gr=new J,ds=new J,Qo=new J,xl=new J,Sl=new J,fs=new J;function Qu(r,e,n,s,a){for(let l=0,u=r.length-3;l<=u;l+=3){fs.fromArray(r,l);const f=a.x*Math.abs(fs.x)+a.y*Math.abs(fs.y)+a.z*Math.abs(fs.z),p=e.dot(fs),m=n.dot(fs),x=s.dot(fs);if(Math.max(-Math.max(p,m,x),Math.min(p,m,x))>f)return!1}return!0}const Mn=new J,yl=new Ht;let Av=0;class Ji extends Ms{constructor(e,n,s=!1){if(super(),Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:Av++}),this.name="",this.array=e,this.itemSize=n,this.count=e!==void 0?e.length/n:0,this.normalized=s,this.usage=dm,this.updateRanges=[],this.gpuType=Yi,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,n){this.updateRanges.push({start:e,count:n})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,n,s){e*=this.itemSize,s*=n.itemSize;for(let a=0,l=this.itemSize;a<l;a++)this.array[e+a]=n.array[s+a];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let n=0,s=this.count;n<s;n++)yl.fromBufferAttribute(this,n),yl.applyMatrix3(e),this.setXY(n,yl.x,yl.y);else if(this.itemSize===3)for(let n=0,s=this.count;n<s;n++)Mn.fromBufferAttribute(this,n),Mn.applyMatrix3(e),this.setXYZ(n,Mn.x,Mn.y,Mn.z);return this}applyMatrix4(e){for(let n=0,s=this.count;n<s;n++)Mn.fromBufferAttribute(this,n),Mn.applyMatrix4(e),this.setXYZ(n,Mn.x,Mn.y,Mn.z);return this}applyNormalMatrix(e){for(let n=0,s=this.count;n<s;n++)Mn.fromBufferAttribute(this,n),Mn.applyNormalMatrix(e),this.setXYZ(n,Mn.x,Mn.y,Mn.z);return this}transformDirection(e){for(let n=0,s=this.count;n<s;n++)Mn.fromBufferAttribute(this,n),Mn.transformDirection(e),this.setXYZ(n,Mn.x,Mn.y,Mn.z);return this}set(e,n=0){return this.array.set(e,n),this}getComponent(e,n){let s=this.array[e*this.itemSize+n];return this.normalized&&(s=Zo(s,this.array)),s}setComponent(e,n,s){return this.normalized&&(s=oi(s,this.array)),this.array[e*this.itemSize+n]=s,this}getX(e){let n=this.array[e*this.itemSize];return this.normalized&&(n=Zo(n,this.array)),n}setX(e,n){return this.normalized&&(n=oi(n,this.array)),this.array[e*this.itemSize]=n,this}getY(e){let n=this.array[e*this.itemSize+1];return this.normalized&&(n=Zo(n,this.array)),n}setY(e,n){return this.normalized&&(n=oi(n,this.array)),this.array[e*this.itemSize+1]=n,this}getZ(e){let n=this.array[e*this.itemSize+2];return this.normalized&&(n=Zo(n,this.array)),n}setZ(e,n){return this.normalized&&(n=oi(n,this.array)),this.array[e*this.itemSize+2]=n,this}getW(e){let n=this.array[e*this.itemSize+3];return this.normalized&&(n=Zo(n,this.array)),n}setW(e,n){return this.normalized&&(n=oi(n,this.array)),this.array[e*this.itemSize+3]=n,this}setXY(e,n,s){return e*=this.itemSize,this.normalized&&(n=oi(n,this.array),s=oi(s,this.array)),this.array[e+0]=n,this.array[e+1]=s,this}setXYZ(e,n,s,a){return e*=this.itemSize,this.normalized&&(n=oi(n,this.array),s=oi(s,this.array),a=oi(a,this.array)),this.array[e+0]=n,this.array[e+1]=s,this.array[e+2]=a,this}setXYZW(e,n,s,a,l){return e*=this.itemSize,this.normalized&&(n=oi(n,this.array),s=oi(s,this.array),a=oi(a,this.array),l=oi(l,this.array)),this.array[e+0]=n,this.array[e+1]=s,this.array[e+2]=a,this.array[e+3]=l,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==dm&&(e.usage=this.usage),e}dispose(){this.dispatchEvent({type:"dispose"})}}class A0 extends Ji{constructor(e,n,s){super(new Uint16Array(e),n,s)}}class b0 extends Ji{constructor(e,n,s){super(new Uint32Array(e),n,s)}}class xn extends Ji{constructor(e,n,s){super(new Float32Array(e),n,s)}}const bv=new da,ea=new J,ed=new J;class Ef{constructor(e=new J,n=-1){this.isSphere=!0,this.center=e,this.radius=n}set(e,n){return this.center.copy(e),this.radius=n,this}setFromPoints(e,n){const s=this.center;n!==void 0?s.copy(n):bv.setFromPoints(e).getCenter(s);let a=0;for(let l=0,u=e.length;l<u;l++)a=Math.max(a,s.distanceToSquared(e[l]));return this.radius=Math.sqrt(a),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const n=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=n*n}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,n){const s=this.center.distanceToSquared(e);return n.copy(e),s>this.radius*this.radius&&(n.sub(this.center).normalize(),n.multiplyScalar(this.radius).add(this.center)),n}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;ea.subVectors(e,this.center);const n=ea.lengthSq();if(n>this.radius*this.radius){const s=Math.sqrt(n),a=(s-this.radius)*.5;this.center.addScaledVector(ea,a/s),this.radius+=a}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(ed.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(ea.copy(e.center).add(ed)),this.expandByPoint(ea.copy(e.center).sub(ed))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}let Cv=0;const wi=new gn,td=new qn,io=new J,pi=new da,ta=new da,Nn=new J;class _i extends Ms{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Cv++}),this.uuid=ua(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(av(e)?b0:A0)(e,1):this.index=e,this}setIndirect(e,n=0){return this.indirect=e,this.indirectOffset=n,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,n){return this.attributes[e]=n,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,n,s=0){this.groups.push({start:e,count:n,materialIndex:s})}clearGroups(){this.groups=[]}setDrawRange(e,n){this.drawRange.start=e,this.drawRange.count=n}applyMatrix4(e){const n=this.attributes.position;n!==void 0&&(n.applyMatrix4(e),n.needsUpdate=!0);const s=this.attributes.normal;if(s!==void 0){const l=new Ct().getNormalMatrix(e);s.applyNormalMatrix(l),s.needsUpdate=!0}const a=this.attributes.tangent;return a!==void 0&&(a.transformDirection(e),a.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return wi.makeRotationFromQuaternion(e),this.applyMatrix4(wi),this}rotateX(e){return wi.makeRotationX(e),this.applyMatrix4(wi),this}rotateY(e){return wi.makeRotationY(e),this.applyMatrix4(wi),this}rotateZ(e){return wi.makeRotationZ(e),this.applyMatrix4(wi),this}translate(e,n,s){return wi.makeTranslation(e,n,s),this.applyMatrix4(wi),this}scale(e,n,s){return wi.makeScale(e,n,s),this.applyMatrix4(wi),this}lookAt(e){return td.lookAt(e),td.updateMatrix(),this.applyMatrix4(td.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(io).negate(),this.translate(io.x,io.y,io.z),this}setFromPoints(e){const n=this.getAttribute("position");if(n===void 0){const s=[];for(let a=0,l=e.length;a<l;a++){const u=e[a];s.push(u.x,u.y,u.z||0)}this.setAttribute("position",new xn(s,3))}else{const s=Math.min(e.length,n.count);for(let a=0;a<s;a++){const l=e[a];n.setXYZ(a,l.x,l.y,l.z||0)}e.length>n.count&&Mt("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),n.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new da);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Gt("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new J(-1/0,-1/0,-1/0),new J(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),n)for(let s=0,a=n.length;s<a;s++){const l=n[s];pi.setFromBufferAttribute(l),this.morphTargetsRelative?(Nn.addVectors(this.boundingBox.min,pi.min),this.boundingBox.expandByPoint(Nn),Nn.addVectors(this.boundingBox.max,pi.max),this.boundingBox.expandByPoint(Nn)):(this.boundingBox.expandByPoint(pi.min),this.boundingBox.expandByPoint(pi.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&Gt('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Ef);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Gt("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new J,1/0);return}if(e){const s=this.boundingSphere.center;if(pi.setFromBufferAttribute(e),n)for(let l=0,u=n.length;l<u;l++){const f=n[l];ta.setFromBufferAttribute(f),this.morphTargetsRelative?(Nn.addVectors(pi.min,ta.min),pi.expandByPoint(Nn),Nn.addVectors(pi.max,ta.max),pi.expandByPoint(Nn)):(pi.expandByPoint(ta.min),pi.expandByPoint(ta.max))}pi.getCenter(s);let a=0;for(let l=0,u=e.count;l<u;l++)Nn.fromBufferAttribute(e,l),a=Math.max(a,s.distanceToSquared(Nn));if(n)for(let l=0,u=n.length;l<u;l++){const f=n[l],p=this.morphTargetsRelative;for(let m=0,x=f.count;m<x;m++)Nn.fromBufferAttribute(f,m),p&&(io.fromBufferAttribute(e,m),Nn.add(io)),a=Math.max(a,s.distanceToSquared(Nn))}this.boundingSphere.radius=Math.sqrt(a),isNaN(this.boundingSphere.radius)&&Gt('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,n=this.attributes;if(e===null||n.position===void 0||n.normal===void 0||n.uv===void 0){Gt("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const s=n.position,a=n.normal,l=n.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Ji(new Float32Array(4*s.count),4));const u=this.getAttribute("tangent"),f=[],p=[];for(let w=0;w<s.count;w++)f[w]=new J,p[w]=new J;const m=new J,x=new J,S=new J,g=new Ht,y=new Ht,T=new Ht,R=new J,_=new J;function v(w,I,j){m.fromBufferAttribute(s,w),x.fromBufferAttribute(s,I),S.fromBufferAttribute(s,j),g.fromBufferAttribute(l,w),y.fromBufferAttribute(l,I),T.fromBufferAttribute(l,j),x.sub(m),S.sub(m),y.sub(g),T.sub(g);const O=1/(y.x*T.y-T.x*y.y);isFinite(O)&&(R.copy(x).multiplyScalar(T.y).addScaledVector(S,-y.y).multiplyScalar(O),_.copy(S).multiplyScalar(y.x).addScaledVector(x,-T.x).multiplyScalar(O),f[w].add(R),f[I].add(R),f[j].add(R),p[w].add(_),p[I].add(_),p[j].add(_))}let b=this.groups;b.length===0&&(b=[{start:0,count:e.count}]);for(let w=0,I=b.length;w<I;++w){const j=b[w],O=j.start,q=j.count;for(let oe=O,pe=O+q;oe<pe;oe+=3)v(e.getX(oe+0),e.getX(oe+1),e.getX(oe+2))}const L=new J,P=new J,z=new J,D=new J;function k(w){z.fromBufferAttribute(a,w),D.copy(z);const I=f[w];L.copy(I),L.sub(z.multiplyScalar(z.dot(I))).normalize(),P.crossVectors(D,I);const O=P.dot(p[w])<0?-1:1;u.setXYZW(w,L.x,L.y,L.z,O)}for(let w=0,I=b.length;w<I;++w){const j=b[w],O=j.start,q=j.count;for(let oe=O,pe=O+q;oe<pe;oe+=3)k(e.getX(oe+0)),k(e.getX(oe+1)),k(e.getX(oe+2))}}computeVertexNormals(){const e=this.index,n=this.getAttribute("position");if(n!==void 0){let s=this.getAttribute("normal");if(s===void 0)s=new Ji(new Float32Array(n.count*3),3),this.setAttribute("normal",s);else for(let g=0,y=s.count;g<y;g++)s.setXYZ(g,0,0,0);const a=new J,l=new J,u=new J,f=new J,p=new J,m=new J,x=new J,S=new J;if(e)for(let g=0,y=e.count;g<y;g+=3){const T=e.getX(g+0),R=e.getX(g+1),_=e.getX(g+2);a.fromBufferAttribute(n,T),l.fromBufferAttribute(n,R),u.fromBufferAttribute(n,_),x.subVectors(u,l),S.subVectors(a,l),x.cross(S),f.fromBufferAttribute(s,T),p.fromBufferAttribute(s,R),m.fromBufferAttribute(s,_),f.add(x),p.add(x),m.add(x),s.setXYZ(T,f.x,f.y,f.z),s.setXYZ(R,p.x,p.y,p.z),s.setXYZ(_,m.x,m.y,m.z)}else for(let g=0,y=n.count;g<y;g+=3)a.fromBufferAttribute(n,g+0),l.fromBufferAttribute(n,g+1),u.fromBufferAttribute(n,g+2),x.subVectors(u,l),S.subVectors(a,l),x.cross(S),s.setXYZ(g+0,x.x,x.y,x.z),s.setXYZ(g+1,x.x,x.y,x.z),s.setXYZ(g+2,x.x,x.y,x.z);this.normalizeNormals(),s.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let n=0,s=e.count;n<s;n++)Nn.fromBufferAttribute(e,n),Nn.normalize(),e.setXYZ(n,Nn.x,Nn.y,Nn.z)}toNonIndexed(){function e(f,p){const m=f.array,x=f.itemSize,S=f.normalized,g=new m.constructor(p.length*x);let y=0,T=0;for(let R=0,_=p.length;R<_;R++){f.isInterleavedBufferAttribute?y=p[R]*f.data.stride+f.offset:y=p[R]*x;for(let v=0;v<x;v++)g[T++]=m[y++]}return new Ji(g,x,S)}if(this.index===null)return Mt("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const n=new _i,s=this.index.array,a=this.attributes;for(const f in a){const p=a[f],m=e(p,s);n.setAttribute(f,m)}const l=this.morphAttributes;for(const f in l){const p=[],m=l[f];for(let x=0,S=m.length;x<S;x++){const g=m[x],y=e(g,s);p.push(y)}n.morphAttributes[f]=p}n.morphTargetsRelative=this.morphTargetsRelative;const u=this.groups;for(let f=0,p=u.length;f<p;f++){const m=u[f];n.addGroup(m.start,m.count,m.materialIndex)}return n}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const p=this.parameters;for(const m in p)p[m]!==void 0&&(e[m]=p[m]);return e}e.data={attributes:{}};const n=this.index;n!==null&&(e.data.index={type:n.array.constructor.name,array:Array.prototype.slice.call(n.array)});const s=this.attributes;for(const p in s){const m=s[p];e.data.attributes[p]=m.toJSON(e.data)}const a={};let l=!1;for(const p in this.morphAttributes){const m=this.morphAttributes[p],x=[];for(let S=0,g=m.length;S<g;S++){const y=m[S];x.push(y.toJSON(e.data))}x.length>0&&(a[p]=x,l=!0)}l&&(e.data.morphAttributes=a,e.data.morphTargetsRelative=this.morphTargetsRelative);const u=this.groups;u.length>0&&(e.data.groups=JSON.parse(JSON.stringify(u)));const f=this.boundingSphere;return f!==null&&(e.data.boundingSphere=f.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const n={};this.name=e.name;const s=e.index;s!==null&&this.setIndex(s.clone());const a=e.attributes;for(const m in a){const x=a[m];this.setAttribute(m,x.clone(n))}const l=e.morphAttributes;for(const m in l){const x=[],S=l[m];for(let g=0,y=S.length;g<y;g++)x.push(S[g].clone(n));this.morphAttributes[m]=x}this.morphTargetsRelative=e.morphTargetsRelative;const u=e.groups;for(let m=0,x=u.length;m<x;m++){const S=u[m];this.addGroup(S.start,S.count,S.materialIndex)}const f=e.boundingBox;f!==null&&(this.boundingBox=f.clone());const p=e.boundingSphere;return p!==null&&(this.boundingSphere=p.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}let Rv=0;class fa extends Ms{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Rv++}),this.uuid=ua(),this.name="",this.type="Material",this.blending=lo,this.side=$r,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=md,this.blendDst=gd,this.blendEquation=gs,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Dt(0,0,0),this.blendAlpha=0,this.depthFunc=uo,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=um,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Ys,this.stencilZFail=Ys,this.stencilZPass=Ys,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const n in e){const s=e[n];if(s===void 0){Mt(`Material: parameter '${n}' has value of undefined.`);continue}const a=this[n];if(a===void 0){Mt(`Material: '${n}' is not a property of THREE.${this.type}.`);continue}a&&a.isColor?a.set(s):a&&a.isVector3&&s&&s.isVector3?a.copy(s):this[n]=s}}toJSON(e){const n=e===void 0||typeof e=="string";n&&(e={textures:{},images:{}});const s={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.color&&this.color.isColor&&(s.color=this.color.getHex()),this.roughness!==void 0&&(s.roughness=this.roughness),this.metalness!==void 0&&(s.metalness=this.metalness),this.sheen!==void 0&&(s.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(s.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(s.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(s.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(s.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(s.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(s.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(s.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(s.shininess=this.shininess),this.clearcoat!==void 0&&(s.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(s.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(s.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(s.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(s.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,s.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(s.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(s.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(s.dispersion=this.dispersion),this.iridescence!==void 0&&(s.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(s.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(s.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(s.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(s.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(s.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(s.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(s.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(s.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(s.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(s.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(s.lightMap=this.lightMap.toJSON(e).uuid,s.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(s.aoMap=this.aoMap.toJSON(e).uuid,s.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(s.bumpMap=this.bumpMap.toJSON(e).uuid,s.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(s.normalMap=this.normalMap.toJSON(e).uuid,s.normalMapType=this.normalMapType,s.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(s.displacementMap=this.displacementMap.toJSON(e).uuid,s.displacementScale=this.displacementScale,s.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(s.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(s.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(s.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(s.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(s.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(s.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(s.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(s.combine=this.combine)),this.envMapRotation!==void 0&&(s.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(s.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(s.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(s.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(s.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(s.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(s.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(s.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(s.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(s.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(s.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(s.size=this.size),this.shadowSide!==null&&(s.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(s.sizeAttenuation=this.sizeAttenuation),this.blending!==lo&&(s.blending=this.blending),this.side!==$r&&(s.side=this.side),this.vertexColors===!0&&(s.vertexColors=!0),this.opacity<1&&(s.opacity=this.opacity),this.transparent===!0&&(s.transparent=!0),this.blendSrc!==md&&(s.blendSrc=this.blendSrc),this.blendDst!==gd&&(s.blendDst=this.blendDst),this.blendEquation!==gs&&(s.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(s.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(s.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(s.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(s.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(s.blendAlpha=this.blendAlpha),this.depthFunc!==uo&&(s.depthFunc=this.depthFunc),this.depthTest===!1&&(s.depthTest=this.depthTest),this.depthWrite===!1&&(s.depthWrite=this.depthWrite),this.colorWrite===!1&&(s.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(s.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==um&&(s.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(s.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(s.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Ys&&(s.stencilFail=this.stencilFail),this.stencilZFail!==Ys&&(s.stencilZFail=this.stencilZFail),this.stencilZPass!==Ys&&(s.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(s.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(s.rotation=this.rotation),this.polygonOffset===!0&&(s.polygonOffset=!0),this.polygonOffsetFactor!==0&&(s.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(s.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(s.linewidth=this.linewidth),this.dashSize!==void 0&&(s.dashSize=this.dashSize),this.gapSize!==void 0&&(s.gapSize=this.gapSize),this.scale!==void 0&&(s.scale=this.scale),this.dithering===!0&&(s.dithering=!0),this.alphaTest>0&&(s.alphaTest=this.alphaTest),this.alphaHash===!0&&(s.alphaHash=!0),this.alphaToCoverage===!0&&(s.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(s.premultipliedAlpha=!0),this.forceSinglePass===!0&&(s.forceSinglePass=!0),this.allowOverride===!1&&(s.allowOverride=!1),this.wireframe===!0&&(s.wireframe=!0),this.wireframeLinewidth>1&&(s.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(s.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(s.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(s.flatShading=!0),this.visible===!1&&(s.visible=!1),this.toneMapped===!1&&(s.toneMapped=!1),this.fog===!1&&(s.fog=!1),Object.keys(this.userData).length>0&&(s.userData=this.userData);function a(l){const u=[];for(const f in l){const p=l[f];delete p.metadata,u.push(p)}return u}if(n){const l=a(e.textures),u=a(e.images);l.length>0&&(s.textures=l),u.length>0&&(s.images=u)}return s}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const n=e.clippingPlanes;let s=null;if(n!==null){const a=n.length;s=new Array(a);for(let l=0;l!==a;++l)s[l]=n[l].clone()}return this.clippingPlanes=s,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}const mr=new J,nd=new J,Ml=new J,Wr=new J,id=new J,El=new J,rd=new J;class C0{constructor(e=new J,n=new J(0,0,-1)){this.origin=e,this.direction=n}set(e,n){return this.origin.copy(e),this.direction.copy(n),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,n){return n.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,mr)),this}closestPointToPoint(e,n){n.subVectors(e,this.origin);const s=n.dot(this.direction);return s<0?n.copy(this.origin):n.copy(this.origin).addScaledVector(this.direction,s)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const n=mr.subVectors(e,this.origin).dot(this.direction);return n<0?this.origin.distanceToSquared(e):(mr.copy(this.origin).addScaledVector(this.direction,n),mr.distanceToSquared(e))}distanceSqToSegment(e,n,s,a){nd.copy(e).add(n).multiplyScalar(.5),Ml.copy(n).sub(e).normalize(),Wr.copy(this.origin).sub(nd);const l=e.distanceTo(n)*.5,u=-this.direction.dot(Ml),f=Wr.dot(this.direction),p=-Wr.dot(Ml),m=Wr.lengthSq(),x=Math.abs(1-u*u);let S,g,y,T;if(x>0)if(S=u*p-f,g=u*f-p,T=l*x,S>=0)if(g>=-T)if(g<=T){const R=1/x;S*=R,g*=R,y=S*(S+u*g+2*f)+g*(u*S+g+2*p)+m}else g=l,S=Math.max(0,-(u*g+f)),y=-S*S+g*(g+2*p)+m;else g=-l,S=Math.max(0,-(u*g+f)),y=-S*S+g*(g+2*p)+m;else g<=-T?(S=Math.max(0,-(-u*l+f)),g=S>0?-l:Math.min(Math.max(-l,-p),l),y=-S*S+g*(g+2*p)+m):g<=T?(S=0,g=Math.min(Math.max(-l,-p),l),y=g*(g+2*p)+m):(S=Math.max(0,-(u*l+f)),g=S>0?l:Math.min(Math.max(-l,-p),l),y=-S*S+g*(g+2*p)+m);else g=u>0?-l:l,S=Math.max(0,-(u*g+f)),y=-S*S+g*(g+2*p)+m;return s&&s.copy(this.origin).addScaledVector(this.direction,S),a&&a.copy(nd).addScaledVector(Ml,g),y}intersectSphere(e,n){mr.subVectors(e.center,this.origin);const s=mr.dot(this.direction),a=mr.dot(mr)-s*s,l=e.radius*e.radius;if(a>l)return null;const u=Math.sqrt(l-a),f=s-u,p=s+u;return p<0?null:f<0?this.at(p,n):this.at(f,n)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const n=e.normal.dot(this.direction);if(n===0)return e.distanceToPoint(this.origin)===0?0:null;const s=-(this.origin.dot(e.normal)+e.constant)/n;return s>=0?s:null}intersectPlane(e,n){const s=this.distanceToPlane(e);return s===null?null:this.at(s,n)}intersectsPlane(e){const n=e.distanceToPoint(this.origin);return n===0||e.normal.dot(this.direction)*n<0}intersectBox(e,n){let s,a,l,u,f,p;const m=1/this.direction.x,x=1/this.direction.y,S=1/this.direction.z,g=this.origin;return m>=0?(s=(e.min.x-g.x)*m,a=(e.max.x-g.x)*m):(s=(e.max.x-g.x)*m,a=(e.min.x-g.x)*m),x>=0?(l=(e.min.y-g.y)*x,u=(e.max.y-g.y)*x):(l=(e.max.y-g.y)*x,u=(e.min.y-g.y)*x),s>u||l>a||((l>s||isNaN(s))&&(s=l),(u<a||isNaN(a))&&(a=u),S>=0?(f=(e.min.z-g.z)*S,p=(e.max.z-g.z)*S):(f=(e.max.z-g.z)*S,p=(e.min.z-g.z)*S),s>p||f>a)||((f>s||s!==s)&&(s=f),(p<a||a!==a)&&(a=p),a<0)?null:this.at(s>=0?s:a,n)}intersectsBox(e){return this.intersectBox(e,mr)!==null}intersectTriangle(e,n,s,a,l){id.subVectors(n,e),El.subVectors(s,e),rd.crossVectors(id,El);let u=this.direction.dot(rd),f;if(u>0){if(a)return null;f=1}else if(u<0)f=-1,u=-u;else return null;Wr.subVectors(this.origin,e);const p=f*this.direction.dot(El.crossVectors(Wr,El));if(p<0)return null;const m=f*this.direction.dot(id.cross(Wr));if(m<0||p+m>u)return null;const x=-f*Wr.dot(rd);return x<0?null:this.at(x/u,l)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Yl extends fa{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Dt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Kr,this.combine=l0,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Am=new gn,hs=new C0,wl=new Ef,bm=new J,Tl=new J,Al=new J,bl=new J,sd=new J,Cl=new J,Cm=new J,Rl=new J;class Ae extends qn{constructor(e=new _i,n=new Yl){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=n,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const n=this.geometry.morphAttributes,s=Object.keys(n);if(s.length>0){const a=n[s[0]];if(a!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let l=0,u=a.length;l<u;l++){const f=a[l].name||String(l);this.morphTargetInfluences.push(0),this.morphTargetDictionary[f]=l}}}}getVertexPosition(e,n){const s=this.geometry,a=s.attributes.position,l=s.morphAttributes.position,u=s.morphTargetsRelative;n.fromBufferAttribute(a,e);const f=this.morphTargetInfluences;if(l&&f){Cl.set(0,0,0);for(let p=0,m=l.length;p<m;p++){const x=f[p],S=l[p];x!==0&&(sd.fromBufferAttribute(S,e),u?Cl.addScaledVector(sd,x):Cl.addScaledVector(sd.sub(n),x))}n.add(Cl)}return n}raycast(e,n){const s=this.geometry,a=this.material,l=this.matrixWorld;a!==void 0&&(s.boundingSphere===null&&s.computeBoundingSphere(),wl.copy(s.boundingSphere),wl.applyMatrix4(l),hs.copy(e.ray).recast(e.near),!(wl.containsPoint(hs.origin)===!1&&(hs.intersectSphere(wl,bm)===null||hs.origin.distanceToSquared(bm)>(e.far-e.near)**2))&&(Am.copy(l).invert(),hs.copy(e.ray).applyMatrix4(Am),!(s.boundingBox!==null&&hs.intersectsBox(s.boundingBox)===!1)&&this._computeIntersections(e,n,hs)))}_computeIntersections(e,n,s){let a;const l=this.geometry,u=this.material,f=l.index,p=l.attributes.position,m=l.attributes.uv,x=l.attributes.uv1,S=l.attributes.normal,g=l.groups,y=l.drawRange;if(f!==null)if(Array.isArray(u))for(let T=0,R=g.length;T<R;T++){const _=g[T],v=u[_.materialIndex],b=Math.max(_.start,y.start),L=Math.min(f.count,Math.min(_.start+_.count,y.start+y.count));for(let P=b,z=L;P<z;P+=3){const D=f.getX(P),k=f.getX(P+1),w=f.getX(P+2);a=Pl(this,v,e,s,m,x,S,D,k,w),a&&(a.faceIndex=Math.floor(P/3),a.face.materialIndex=_.materialIndex,n.push(a))}}else{const T=Math.max(0,y.start),R=Math.min(f.count,y.start+y.count);for(let _=T,v=R;_<v;_+=3){const b=f.getX(_),L=f.getX(_+1),P=f.getX(_+2);a=Pl(this,u,e,s,m,x,S,b,L,P),a&&(a.faceIndex=Math.floor(_/3),n.push(a))}}else if(p!==void 0)if(Array.isArray(u))for(let T=0,R=g.length;T<R;T++){const _=g[T],v=u[_.materialIndex],b=Math.max(_.start,y.start),L=Math.min(p.count,Math.min(_.start+_.count,y.start+y.count));for(let P=b,z=L;P<z;P+=3){const D=P,k=P+1,w=P+2;a=Pl(this,v,e,s,m,x,S,D,k,w),a&&(a.faceIndex=Math.floor(P/3),a.face.materialIndex=_.materialIndex,n.push(a))}}else{const T=Math.max(0,y.start),R=Math.min(p.count,y.start+y.count);for(let _=T,v=R;_<v;_+=3){const b=_,L=_+1,P=_+2;a=Pl(this,u,e,s,m,x,S,b,L,P),a&&(a.faceIndex=Math.floor(_/3),n.push(a))}}}}function Pv(r,e,n,s,a,l,u,f){let p;if(e.side===li?p=s.intersectTriangle(u,l,a,!0,f):p=s.intersectTriangle(a,l,u,e.side===$r,f),p===null)return null;Rl.copy(f),Rl.applyMatrix4(r.matrixWorld);const m=n.ray.origin.distanceTo(Rl);return m<n.near||m>n.far?null:{distance:m,point:Rl.clone(),object:r}}function Pl(r,e,n,s,a,l,u,f,p,m){r.getVertexPosition(f,Tl),r.getVertexPosition(p,Al),r.getVertexPosition(m,bl);const x=Pv(r,e,n,s,Tl,Al,bl,Cm);if(x){const S=new J;Oi.getBarycoord(Cm,Tl,Al,bl,S),a&&(x.uv=Oi.getInterpolatedAttribute(a,f,p,m,S,new Ht)),l&&(x.uv1=Oi.getInterpolatedAttribute(l,f,p,m,S,new Ht)),u&&(x.normal=Oi.getInterpolatedAttribute(u,f,p,m,S,new J),x.normal.dot(s.direction)>0&&x.normal.multiplyScalar(-1));const g={a:f,b:p,c:m,normal:new J,materialIndex:0};Oi.getNormal(Tl,Al,bl,g.normal),x.face=g,x.barycoord=S}return x}class Lv extends Yn{constructor(e=null,n=1,s=1,a,l,u,f,p,m=Bn,x=Bn,S,g){super(null,u,f,p,m,x,a,l,S,g),this.isDataTexture=!0,this.image={data:e,width:n,height:s},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const od=new J,Dv=new J,Iv=new Ct;class ms{constructor(e=new J(1,0,0),n=0){this.isPlane=!0,this.normal=e,this.constant=n}set(e,n){return this.normal.copy(e),this.constant=n,this}setComponents(e,n,s,a){return this.normal.set(e,n,s),this.constant=a,this}setFromNormalAndCoplanarPoint(e,n){return this.normal.copy(e),this.constant=-n.dot(this.normal),this}setFromCoplanarPoints(e,n,s){const a=od.subVectors(s,n).cross(Dv.subVectors(e,n)).normalize();return this.setFromNormalAndCoplanarPoint(a,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,n){return n.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,n,s=!0){const a=e.delta(od),l=this.normal.dot(a);if(l===0)return this.distanceToPoint(e.start)===0?n.copy(e.start):null;const u=-(e.start.dot(this.normal)+this.constant)/l;return s===!0&&(u<0||u>1)?null:n.copy(e.start).addScaledVector(a,u)}intersectsLine(e){const n=this.distanceToPoint(e.start),s=this.distanceToPoint(e.end);return n<0&&s>0||s<0&&n>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,n){const s=n||Iv.getNormalMatrix(e),a=this.coplanarPoint(od).applyMatrix4(e),l=this.normal.applyMatrix3(s).normalize();return this.constant=-a.dot(l),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const ps=new Ef,Nv=new Ht(.5,.5),Ll=new J;class wf{constructor(e=new ms,n=new ms,s=new ms,a=new ms,l=new ms,u=new ms){this.planes=[e,n,s,a,l,u]}set(e,n,s,a,l,u){const f=this.planes;return f[0].copy(e),f[1].copy(n),f[2].copy(s),f[3].copy(a),f[4].copy(l),f[5].copy(u),this}copy(e){const n=this.planes;for(let s=0;s<6;s++)n[s].copy(e.planes[s]);return this}setFromProjectionMatrix(e,n=qi,s=!1){const a=this.planes,l=e.elements,u=l[0],f=l[1],p=l[2],m=l[3],x=l[4],S=l[5],g=l[6],y=l[7],T=l[8],R=l[9],_=l[10],v=l[11],b=l[12],L=l[13],P=l[14],z=l[15];if(a[0].setComponents(m-u,y-x,v-T,z-b).normalize(),a[1].setComponents(m+u,y+x,v+T,z+b).normalize(),a[2].setComponents(m+f,y+S,v+R,z+L).normalize(),a[3].setComponents(m-f,y-S,v-R,z-L).normalize(),s)a[4].setComponents(p,g,_,P).normalize(),a[5].setComponents(m-p,y-g,v-_,z-P).normalize();else if(a[4].setComponents(m-p,y-g,v-_,z-P).normalize(),n===qi)a[5].setComponents(m+p,y+g,v+_,z+P).normalize();else if(n===ca)a[5].setComponents(p,g,_,P).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+n);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),ps.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const n=e.geometry;n.boundingSphere===null&&n.computeBoundingSphere(),ps.copy(n.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(ps)}intersectsSprite(e){ps.center.set(0,0,0);const n=Nv.distanceTo(e.center);return ps.radius=.7071067811865476+n,ps.applyMatrix4(e.matrixWorld),this.intersectsSphere(ps)}intersectsSphere(e){const n=this.planes,s=e.center,a=-e.radius;for(let l=0;l<6;l++)if(n[l].distanceToPoint(s)<a)return!1;return!0}intersectsBox(e){const n=this.planes;for(let s=0;s<6;s++){const a=n[s];if(Ll.x=a.normal.x>0?e.max.x:e.min.x,Ll.y=a.normal.y>0?e.max.y:e.min.y,Ll.z=a.normal.z>0?e.max.z:e.min.z,a.distanceToPoint(Ll)<0)return!1}return!0}containsPoint(e){const n=this.planes;for(let s=0;s<6;s++)if(n[s].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class R0 extends Yn{constructor(e=[],n=Ss,s,a,l,u,f,p,m,x){super(e,n,s,a,l,u,f,p,m,x),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class Uv extends Yn{constructor(e,n,s,a,l,u,f,p,m){super(e,n,s,a,l,u,f,p,m),this.isCanvasTexture=!0,this.needsUpdate=!0}}class ho extends Yn{constructor(e,n,s=Qi,a,l,u,f=Bn,p=Bn,m,x=Sr,S=1){if(x!==Sr&&x!==xs)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const g={width:e,height:n,depth:S};super(g,a,l,u,f,p,x,s,m),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new Sf(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const n=super.toJSON(e);return this.compareFunction!==null&&(n.compareFunction=this.compareFunction),n}}class Fv extends ho{constructor(e,n=Qi,s=Ss,a,l,u=Bn,f=Bn,p,m=Sr){const x={width:e,height:e,depth:1},S=[x,x,x,x,x,x];super(e,e,n,s,a,l,u,f,p,m),this.image=S,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}}class P0 extends Yn{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}class go extends _i{constructor(e=1,n=1,s=1,a=1,l=1,u=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:n,depth:s,widthSegments:a,heightSegments:l,depthSegments:u};const f=this;a=Math.floor(a),l=Math.floor(l),u=Math.floor(u);const p=[],m=[],x=[],S=[];let g=0,y=0;T("z","y","x",-1,-1,s,n,e,u,l,0),T("z","y","x",1,-1,s,n,-e,u,l,1),T("x","z","y",1,1,e,s,n,a,u,2),T("x","z","y",1,-1,e,s,-n,a,u,3),T("x","y","z",1,-1,e,n,s,a,l,4),T("x","y","z",-1,-1,e,n,-s,a,l,5),this.setIndex(p),this.setAttribute("position",new xn(m,3)),this.setAttribute("normal",new xn(x,3)),this.setAttribute("uv",new xn(S,2));function T(R,_,v,b,L,P,z,D,k,w,I){const j=P/k,O=z/w,q=P/2,oe=z/2,pe=D/2,W=k+1,ee=w+1;let K=0,Z=0;const ue=new J;for(let de=0;de<ee;de++){const F=de*O-oe;for(let te=0;te<W;te++){const je=te*j-q;ue[R]=je*b,ue[_]=F*L,ue[v]=pe,m.push(ue.x,ue.y,ue.z),ue[R]=0,ue[_]=0,ue[v]=D>0?1:-1,x.push(ue.x,ue.y,ue.z),S.push(te/k),S.push(1-de/w),K+=1}}for(let de=0;de<w;de++)for(let F=0;F<k;F++){const te=g+F+W*de,je=g+F+W*(de+1),De=g+(F+1)+W*(de+1),Ye=g+(F+1)+W*de;p.push(te,je,Ye),p.push(je,De,Ye),Z+=6}f.addGroup(y,Z,I),y+=Z,g+=K}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new go(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}class ql extends _i{constructor(e=1,n=32,s=0,a=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:e,segments:n,thetaStart:s,thetaLength:a},n=Math.max(3,n);const l=[],u=[],f=[],p=[],m=new J,x=new Ht;u.push(0,0,0),f.push(0,0,1),p.push(.5,.5);for(let S=0,g=3;S<=n;S++,g+=3){const y=s+S/n*a;m.x=e*Math.cos(y),m.y=e*Math.sin(y),u.push(m.x,m.y,m.z),f.push(0,0,1),x.x=(u[g]/e+1)/2,x.y=(u[g+1]/e+1)/2,p.push(x.x,x.y)}for(let S=1;S<=n;S++)l.push(S,S+1,0);this.setIndex(l),this.setAttribute("position",new xn(u,3)),this.setAttribute("normal",new xn(f,3)),this.setAttribute("uv",new xn(p,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ql(e.radius,e.segments,e.thetaStart,e.thetaLength)}}class ha extends _i{constructor(e=1,n=1,s=1,a=32,l=1,u=!1,f=0,p=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:n,height:s,radialSegments:a,heightSegments:l,openEnded:u,thetaStart:f,thetaLength:p};const m=this;a=Math.floor(a),l=Math.floor(l);const x=[],S=[],g=[],y=[];let T=0;const R=[],_=s/2;let v=0;b(),u===!1&&(e>0&&L(!0),n>0&&L(!1)),this.setIndex(x),this.setAttribute("position",new xn(S,3)),this.setAttribute("normal",new xn(g,3)),this.setAttribute("uv",new xn(y,2));function b(){const P=new J,z=new J;let D=0;const k=(n-e)/s;for(let w=0;w<=l;w++){const I=[],j=w/l,O=j*(n-e)+e;for(let q=0;q<=a;q++){const oe=q/a,pe=oe*p+f,W=Math.sin(pe),ee=Math.cos(pe);z.x=O*W,z.y=-j*s+_,z.z=O*ee,S.push(z.x,z.y,z.z),P.set(W,k,ee).normalize(),g.push(P.x,P.y,P.z),y.push(oe,1-j),I.push(T++)}R.push(I)}for(let w=0;w<a;w++)for(let I=0;I<l;I++){const j=R[I][w],O=R[I+1][w],q=R[I+1][w+1],oe=R[I][w+1];(e>0||I!==0)&&(x.push(j,O,oe),D+=3),(n>0||I!==l-1)&&(x.push(O,q,oe),D+=3)}m.addGroup(v,D,0),v+=D}function L(P){const z=T,D=new Ht,k=new J;let w=0;const I=P===!0?e:n,j=P===!0?1:-1;for(let q=1;q<=a;q++)S.push(0,_*j,0),g.push(0,j,0),y.push(.5,.5),T++;const O=T;for(let q=0;q<=a;q++){const pe=q/a*p+f,W=Math.cos(pe),ee=Math.sin(pe);k.x=I*ee,k.y=_*j,k.z=I*W,S.push(k.x,k.y,k.z),g.push(0,j,0),D.x=W*.5+.5,D.y=ee*.5*j+.5,y.push(D.x,D.y),T++}for(let q=0;q<a;q++){const oe=z+q,pe=O+q;P===!0?x.push(pe,pe+1,oe):x.push(pe+1,pe,oe),w+=3}m.addGroup(v,w,P===!0?1:2),v+=w}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ha(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class $l extends ha{constructor(e=1,n=1,s=32,a=1,l=!1,u=0,f=Math.PI*2){super(0,e,n,s,a,l,u,f),this.type="ConeGeometry",this.parameters={radius:e,height:n,radialSegments:s,heightSegments:a,openEnded:l,thetaStart:u,thetaLength:f}}static fromJSON(e){return new $l(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class Un extends _i{constructor(e=1,n=1,s=1,a=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:n,widthSegments:s,heightSegments:a};const l=e/2,u=n/2,f=Math.floor(s),p=Math.floor(a),m=f+1,x=p+1,S=e/f,g=n/p,y=[],T=[],R=[],_=[];for(let v=0;v<x;v++){const b=v*g-u;for(let L=0;L<m;L++){const P=L*S-l;T.push(P,-b,0),R.push(0,0,1),_.push(L/f),_.push(1-v/p)}}for(let v=0;v<p;v++)for(let b=0;b<f;b++){const L=b+m*v,P=b+m*(v+1),z=b+1+m*(v+1),D=b+1+m*v;y.push(L,P,D),y.push(P,z,D)}this.setIndex(y),this.setAttribute("position",new xn(T,3)),this.setAttribute("normal",new xn(R,3)),this.setAttribute("uv",new xn(_,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Un(e.width,e.height,e.widthSegments,e.heightSegments)}}class Tf extends _i{constructor(e=1,n=32,s=16,a=0,l=Math.PI*2,u=0,f=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:n,heightSegments:s,phiStart:a,phiLength:l,thetaStart:u,thetaLength:f},n=Math.max(3,Math.floor(n)),s=Math.max(2,Math.floor(s));const p=Math.min(u+f,Math.PI);let m=0;const x=[],S=new J,g=new J,y=[],T=[],R=[],_=[];for(let v=0;v<=s;v++){const b=[],L=v/s;let P=0;v===0&&u===0?P=.5/n:v===s&&p===Math.PI&&(P=-.5/n);for(let z=0;z<=n;z++){const D=z/n;S.x=-e*Math.cos(a+D*l)*Math.sin(u+L*f),S.y=e*Math.cos(u+L*f),S.z=e*Math.sin(a+D*l)*Math.sin(u+L*f),T.push(S.x,S.y,S.z),g.copy(S).normalize(),R.push(g.x,g.y,g.z),_.push(D+P,1-L),b.push(m++)}x.push(b)}for(let v=0;v<s;v++)for(let b=0;b<n;b++){const L=x[v][b+1],P=x[v][b],z=x[v+1][b],D=x[v+1][b+1];(v!==0||u>0)&&y.push(L,P,D),(v!==s-1||p<Math.PI)&&y.push(P,z,D)}this.setIndex(y),this.setAttribute("position",new xn(T,3)),this.setAttribute("normal",new xn(R,3)),this.setAttribute("uv",new xn(_,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Tf(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class Af extends _i{constructor(e=1,n=.4,s=12,a=48,l=Math.PI*2,u=0,f=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:n,radialSegments:s,tubularSegments:a,arc:l,thetaStart:u,thetaLength:f},s=Math.floor(s),a=Math.floor(a);const p=[],m=[],x=[],S=[],g=new J,y=new J,T=new J;for(let R=0;R<=s;R++){const _=u+R/s*f;for(let v=0;v<=a;v++){const b=v/a*l;y.x=(e+n*Math.cos(_))*Math.cos(b),y.y=(e+n*Math.cos(_))*Math.sin(b),y.z=n*Math.sin(_),m.push(y.x,y.y,y.z),g.x=e*Math.cos(b),g.y=e*Math.sin(b),T.subVectors(y,g).normalize(),x.push(T.x,T.y,T.z),S.push(v/a),S.push(R/s)}}for(let R=1;R<=s;R++)for(let _=1;_<=a;_++){const v=(a+1)*R+_-1,b=(a+1)*(R-1)+_-1,L=(a+1)*(R-1)+_,P=(a+1)*R+_;p.push(v,b,P),p.push(b,L,P)}this.setIndex(p),this.setAttribute("position",new xn(m,3)),this.setAttribute("normal",new xn(x,3)),this.setAttribute("uv",new xn(S,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Af(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc)}}function po(r){const e={};for(const n in r){e[n]={};for(const s in r[n]){const a=r[n][s];if(Rm(a))a.isRenderTargetTexture?(Mt("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[n][s]=null):e[n][s]=a.clone();else if(Array.isArray(a))if(Rm(a[0])){const l=[];for(let u=0,f=a.length;u<f;u++)l[u]=a[u].clone();e[n][s]=l}else e[n][s]=a.slice();else e[n][s]=a}}return e}function Zn(r){const e={};for(let n=0;n<r.length;n++){const s=po(r[n]);for(const a in s)e[a]=s[a]}return e}function Rm(r){return r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)}function Ov(r){const e=[];for(let n=0;n<r.length;n++)e.push(r[n].clone());return e}function L0(r){const e=r.getRenderTarget();return e===null?r.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:zt.workingColorSpace}const kv={clone:po,merge:Zn};var Bv=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,zv=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class er extends fa{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Bv,this.fragmentShader=zv,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=po(e.uniforms),this.uniformsGroups=Ov(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){const n=super.toJSON(e);n.glslVersion=this.glslVersion,n.uniforms={};for(const a in this.uniforms){const u=this.uniforms[a].value;u&&u.isTexture?n.uniforms[a]={type:"t",value:u.toJSON(e).uuid}:u&&u.isColor?n.uniforms[a]={type:"c",value:u.getHex()}:u&&u.isVector2?n.uniforms[a]={type:"v2",value:u.toArray()}:u&&u.isVector3?n.uniforms[a]={type:"v3",value:u.toArray()}:u&&u.isVector4?n.uniforms[a]={type:"v4",value:u.toArray()}:u&&u.isMatrix3?n.uniforms[a]={type:"m3",value:u.toArray()}:u&&u.isMatrix4?n.uniforms[a]={type:"m4",value:u.toArray()}:n.uniforms[a]={value:u}}Object.keys(this.defines).length>0&&(n.defines=this.defines),n.vertexShader=this.vertexShader,n.fragmentShader=this.fragmentShader,n.lights=this.lights,n.clipping=this.clipping;const s={};for(const a in this.extensions)this.extensions[a]===!0&&(s[a]=!0);return Object.keys(s).length>0&&(n.extensions=s),n}}class Hv extends er{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class jr extends fa{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new Dt(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Dt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=nf,this.normalScale=new Ht(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Kr,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class Vv extends jr{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new Ht(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return Bt(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(n){this.ior=(1+.4*n)/(1-.4*n)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new Dt(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new Dt(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new Dt(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get dispersion(){return this._dispersion}set dispersion(e){this._dispersion>0!=e>0&&this.version++,this._dispersion=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.dispersion=e.dispersion,this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}}class Gv extends fa{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Q_,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class Wv extends fa{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}class bf extends qn{constructor(e,n=1){super(),this.isLight=!0,this.type="Light",this.color=new Dt(e),this.intensity=n}dispose(){this.dispatchEvent({type:"dispose"})}copy(e,n){return super.copy(e,n),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const n=super.toJSON(e);return n.object.color=this.color.getHex(),n.object.intensity=this.intensity,n}}const ad=new gn,Pm=new J,Lm=new J;class D0{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Ht(512,512),this.mapType=gi,this.map=null,this.mapPass=null,this.matrix=new gn,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new wf,this._frameExtents=new Ht(1,1),this._viewportCount=1,this._viewports=[new mn(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const n=this.camera,s=this.matrix;Pm.setFromMatrixPosition(e.matrixWorld),n.position.copy(Pm),Lm.setFromMatrixPosition(e.target.matrixWorld),n.lookAt(Lm),n.updateMatrixWorld(),ad.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(ad,n.coordinateSystem,n.reversedDepth),n.coordinateSystem===ca||n.reversedDepth?s.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):s.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),s.multiply(ad)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this.biasNode=e.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}const Dl=new J,Il=new mo,Wi=new J;class I0 extends qn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new gn,this.projectionMatrix=new gn,this.projectionMatrixInverse=new gn,this.coordinateSystem=qi,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,n){return super.copy(e,n),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(Dl,Il,Wi),Wi.x===1&&Wi.y===1&&Wi.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Dl,Il,Wi.set(1,1,1)).invert()}updateWorldMatrix(e,n){super.updateWorldMatrix(e,n),this.matrixWorld.decompose(Dl,Il,Wi),Wi.x===1&&Wi.y===1&&Wi.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Dl,Il,Wi.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}}const Xr=new J,Dm=new Ht,Im=new Ht;class mi extends I0{constructor(e=50,n=1,s=.1,a=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=s,this.far=a,this.focus=10,this.aspect=n,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const n=.5*this.getFilmHeight()/e;this.fov=sf*2*Math.atan(n),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Ou*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return sf*2*Math.atan(Math.tan(Ou*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,n,s){Xr.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Xr.x,Xr.y).multiplyScalar(-e/Xr.z),Xr.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),s.set(Xr.x,Xr.y).multiplyScalar(-e/Xr.z)}getViewSize(e,n){return this.getViewBounds(e,Dm,Im),n.subVectors(Im,Dm)}setViewOffset(e,n,s,a,l,u){this.aspect=e/n,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=s,this.view.offsetY=a,this.view.width=l,this.view.height=u,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let n=e*Math.tan(Ou*.5*this.fov)/this.zoom,s=2*n,a=this.aspect*s,l=-.5*a;const u=this.view;if(this.view!==null&&this.view.enabled){const p=u.fullWidth,m=u.fullHeight;l+=u.offsetX*a/p,n-=u.offsetY*s/m,a*=u.width/p,s*=u.height/m}const f=this.filmOffset;f!==0&&(l+=e*f/this.getFilmWidth()),this.projectionMatrix.makePerspective(l,l+a,n,n-s,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.fov=this.fov,n.object.zoom=this.zoom,n.object.near=this.near,n.object.far=this.far,n.object.focus=this.focus,n.object.aspect=this.aspect,this.view!==null&&(n.object.view=Object.assign({},this.view)),n.object.filmGauge=this.filmGauge,n.object.filmOffset=this.filmOffset,n}}class Xv extends D0{constructor(){super(new mi(90,1,.5,500)),this.isPointLightShadow=!0}}class Nl extends bf{constructor(e,n,s=0,a=2){super(e,n),this.isPointLight=!0,this.type="PointLight",this.distance=s,this.decay=a,this.shadow=new Xv}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){super.dispose(),this.shadow.dispose()}copy(e,n){return super.copy(e,n),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}toJSON(e){const n=super.toJSON(e);return n.object.distance=this.distance,n.object.decay=this.decay,n.object.shadow=this.shadow.toJSON(),n}}class Cf extends I0{constructor(e=-1,n=1,s=1,a=-1,l=.1,u=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=n,this.top=s,this.bottom=a,this.near=l,this.far=u,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,n,s,a,l,u){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=s,this.view.offsetY=a,this.view.width=l,this.view.height=u,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),n=(this.top-this.bottom)/(2*this.zoom),s=(this.right+this.left)/2,a=(this.top+this.bottom)/2;let l=s-e,u=s+e,f=a+n,p=a-n;if(this.view!==null&&this.view.enabled){const m=(this.right-this.left)/this.view.fullWidth/this.zoom,x=(this.top-this.bottom)/this.view.fullHeight/this.zoom;l+=m*this.view.offsetX,u=l+m*this.view.width,f-=x*this.view.offsetY,p=f-x*this.view.height}this.projectionMatrix.makeOrthographic(l,u,f,p,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.zoom=this.zoom,n.object.left=this.left,n.object.right=this.right,n.object.top=this.top,n.object.bottom=this.bottom,n.object.near=this.near,n.object.far=this.far,this.view!==null&&(n.object.view=Object.assign({},this.view)),n}}class jv extends D0{constructor(){super(new Cf(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class Nm extends bf{constructor(e,n){super(e,n),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(qn.DEFAULT_UP),this.updateMatrix(),this.target=new qn,this.shadow=new jv}dispose(){super.dispose(),this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}toJSON(e){const n=super.toJSON(e);return n.object.shadow=this.shadow.toJSON(),n.object.target=this.target.uuid,n}}class Yv extends bf{constructor(e,n){super(e,n),this.isAmbientLight=!0,this.type="AmbientLight"}}const ro=-90,so=1;class qv extends qn{constructor(e,n,s){super(),this.type="CubeCamera",this.renderTarget=s,this.coordinateSystem=null,this.activeMipmapLevel=0;const a=new mi(ro,so,e,n);a.layers=this.layers,this.add(a);const l=new mi(ro,so,e,n);l.layers=this.layers,this.add(l);const u=new mi(ro,so,e,n);u.layers=this.layers,this.add(u);const f=new mi(ro,so,e,n);f.layers=this.layers,this.add(f);const p=new mi(ro,so,e,n);p.layers=this.layers,this.add(p);const m=new mi(ro,so,e,n);m.layers=this.layers,this.add(m)}updateCoordinateSystem(){const e=this.coordinateSystem,n=this.children.concat(),[s,a,l,u,f,p]=n;for(const m of n)this.remove(m);if(e===qi)s.up.set(0,1,0),s.lookAt(1,0,0),a.up.set(0,1,0),a.lookAt(-1,0,0),l.up.set(0,0,-1),l.lookAt(0,1,0),u.up.set(0,0,1),u.lookAt(0,-1,0),f.up.set(0,1,0),f.lookAt(0,0,1),p.up.set(0,1,0),p.lookAt(0,0,-1);else if(e===ca)s.up.set(0,-1,0),s.lookAt(-1,0,0),a.up.set(0,-1,0),a.lookAt(1,0,0),l.up.set(0,0,1),l.lookAt(0,1,0),u.up.set(0,0,-1),u.lookAt(0,-1,0),f.up.set(0,-1,0),f.lookAt(0,0,1),p.up.set(0,-1,0),p.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const m of n)this.add(m),m.updateMatrixWorld()}update(e,n){this.parent===null&&this.updateMatrixWorld();const{renderTarget:s,activeMipmapLevel:a}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[l,u,f,p,m,x]=this.children,S=e.getRenderTarget(),g=e.getActiveCubeFace(),y=e.getActiveMipmapLevel(),T=e.xr.enabled;e.xr.enabled=!1;const R=s.texture.generateMipmaps;s.texture.generateMipmaps=!1;let _=!1;e.isWebGLRenderer===!0?_=e.state.buffers.depth.getReversed():_=e.reversedDepthBuffer,e.setRenderTarget(s,0,a),_&&e.autoClear===!1&&e.clearDepth(),e.render(n,l),e.setRenderTarget(s,1,a),_&&e.autoClear===!1&&e.clearDepth(),e.render(n,u),e.setRenderTarget(s,2,a),_&&e.autoClear===!1&&e.clearDepth(),e.render(n,f),e.setRenderTarget(s,3,a),_&&e.autoClear===!1&&e.clearDepth(),e.render(n,p),e.setRenderTarget(s,4,a),_&&e.autoClear===!1&&e.clearDepth(),e.render(n,m),s.texture.generateMipmaps=R,e.setRenderTarget(s,5,a),_&&e.autoClear===!1&&e.clearDepth(),e.render(n,x),e.setRenderTarget(S,g,y),e.xr.enabled=T,s.texture.needsPMREMUpdate=!0}}class $v extends mi{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}const Um=new gn;class Kv{constructor(e,n,s=0,a=1/0){this.ray=new C0(e,n),this.near=s,this.far=a,this.camera=null,this.layers=new yf,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,n){this.ray.set(e,n)}setFromCamera(e,n){n.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(n.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(n).sub(this.ray.origin).normalize(),this.camera=n):n.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(n.near+n.far)/(n.near-n.far)).unproject(n),this.ray.direction.set(0,0,-1).transformDirection(n.matrixWorld),this.camera=n):Gt("Raycaster: Unsupported camera type: "+n.type)}setFromXRController(e){return Um.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(Um),this}intersectObject(e,n=!0,s=[]){return of(e,this,s,n),s.sort(Fm),s}intersectObjects(e,n=!0,s=[]){for(let a=0,l=e.length;a<l;a++)of(e[a],this,s,n);return s.sort(Fm),s}}function Fm(r,e){return r.distance-e.distance}function of(r,e,n,s){let a=!0;if(r.layers.test(e.layers)&&r.raycast(e,n)===!1&&(a=!1),a===!0&&s===!0){const l=r.children;for(let u=0,f=l.length;u<f;u++)of(l[u],e,n,!0)}}const If=class If{constructor(e,n,s,a){this.elements=[1,0,0,1],e!==void 0&&this.set(e,n,s,a)}identity(){return this.set(1,0,0,1),this}fromArray(e,n=0){for(let s=0;s<4;s++)this.elements[s]=e[s+n];return this}set(e,n,s,a){const l=this.elements;return l[0]=e,l[2]=n,l[1]=s,l[3]=a,this}};If.prototype.isMatrix2=!0;let Om=If;function km(r,e,n,s){const a=Zv(s);switch(n){case S0:return r*e;case M0:return r*e/a.components*a.byteLength;case mf:return r*e/a.components*a.byteLength;case ys:return r*e*2/a.components*a.byteLength;case gf:return r*e*2/a.components*a.byteLength;case y0:return r*e*3/a.components*a.byteLength;case ki:return r*e*4/a.components*a.byteLength;case _f:return r*e*4/a.components*a.byteLength;case Ol:case kl:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*8;case Bl:case zl:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*16;case bd:case Rd:return Math.max(r,16)*Math.max(e,8)/4;case Ad:case Cd:return Math.max(r,8)*Math.max(e,8)/2;case Pd:case Ld:case Id:case Nd:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*8;case Dd:case Vl:case Ud:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*16;case Fd:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*16;case Od:return Math.floor((r+4)/5)*Math.floor((e+3)/4)*16;case kd:return Math.floor((r+4)/5)*Math.floor((e+4)/5)*16;case Bd:return Math.floor((r+5)/6)*Math.floor((e+4)/5)*16;case zd:return Math.floor((r+5)/6)*Math.floor((e+5)/6)*16;case Hd:return Math.floor((r+7)/8)*Math.floor((e+4)/5)*16;case Vd:return Math.floor((r+7)/8)*Math.floor((e+5)/6)*16;case Gd:return Math.floor((r+7)/8)*Math.floor((e+7)/8)*16;case Wd:return Math.floor((r+9)/10)*Math.floor((e+4)/5)*16;case Xd:return Math.floor((r+9)/10)*Math.floor((e+5)/6)*16;case jd:return Math.floor((r+9)/10)*Math.floor((e+7)/8)*16;case Yd:return Math.floor((r+9)/10)*Math.floor((e+9)/10)*16;case qd:return Math.floor((r+11)/12)*Math.floor((e+9)/10)*16;case $d:return Math.floor((r+11)/12)*Math.floor((e+11)/12)*16;case Kd:case Zd:case Jd:return Math.ceil(r/4)*Math.ceil(e/4)*16;case Qd:case ef:return Math.ceil(r/4)*Math.ceil(e/4)*8;case Gl:case tf:return Math.ceil(r/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${n} format.`)}function Zv(r){switch(r){case gi:case g0:return{byteLength:1,components:1};case aa:case _0:case xr:return{byteLength:2,components:1};case hf:case pf:return{byteLength:2,components:4};case Qi:case ff:case Yi:return{byteLength:4,components:1};case v0:case x0:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${r}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:uf}}));typeof window<"u"&&(window.__THREE__?Mt("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=uf);/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function N0(){let r=null,e=!1,n=null,s=null;function a(l,u){n(l,u),s=r.requestAnimationFrame(a)}return{start:function(){e!==!0&&n!==null&&r!==null&&(s=r.requestAnimationFrame(a),e=!0)},stop:function(){r!==null&&r.cancelAnimationFrame(s),e=!1},setAnimationLoop:function(l){n=l},setContext:function(l){r=l}}}function Jv(r){const e=new WeakMap;function n(f,p){const m=f.array,x=f.usage,S=m.byteLength,g=r.createBuffer();r.bindBuffer(p,g),r.bufferData(p,m,x),f.onUploadCallback();let y;if(m instanceof Float32Array)y=r.FLOAT;else if(typeof Float16Array<"u"&&m instanceof Float16Array)y=r.HALF_FLOAT;else if(m instanceof Uint16Array)f.isFloat16BufferAttribute?y=r.HALF_FLOAT:y=r.UNSIGNED_SHORT;else if(m instanceof Int16Array)y=r.SHORT;else if(m instanceof Uint32Array)y=r.UNSIGNED_INT;else if(m instanceof Int32Array)y=r.INT;else if(m instanceof Int8Array)y=r.BYTE;else if(m instanceof Uint8Array)y=r.UNSIGNED_BYTE;else if(m instanceof Uint8ClampedArray)y=r.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+m);return{buffer:g,type:y,bytesPerElement:m.BYTES_PER_ELEMENT,version:f.version,size:S}}function s(f,p,m){const x=p.array,S=p.updateRanges;if(r.bindBuffer(m,f),S.length===0)r.bufferSubData(m,0,x);else{S.sort((y,T)=>y.start-T.start);let g=0;for(let y=1;y<S.length;y++){const T=S[g],R=S[y];R.start<=T.start+T.count+1?T.count=Math.max(T.count,R.start+R.count-T.start):(++g,S[g]=R)}S.length=g+1;for(let y=0,T=S.length;y<T;y++){const R=S[y];r.bufferSubData(m,R.start*x.BYTES_PER_ELEMENT,x,R.start,R.count)}p.clearUpdateRanges()}p.onUploadCallback()}function a(f){return f.isInterleavedBufferAttribute&&(f=f.data),e.get(f)}function l(f){f.isInterleavedBufferAttribute&&(f=f.data);const p=e.get(f);p&&(r.deleteBuffer(p.buffer),e.delete(f))}function u(f,p){if(f.isInterleavedBufferAttribute&&(f=f.data),f.isGLBufferAttribute){const x=e.get(f);(!x||x.version<f.version)&&e.set(f,{buffer:f.buffer,type:f.type,bytesPerElement:f.elementSize,version:f.version});return}const m=e.get(f);if(m===void 0)e.set(f,n(f,p));else if(m.version<f.version){if(m.size!==f.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");s(m.buffer,f,p),m.version=f.version}}return{get:a,remove:l,update:u}}var Qv=`#ifdef USE_ALPHAHASH
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
}`,Lt={alphahash_fragment:Qv,alphahash_pars_fragment:ex,alphamap_fragment:tx,alphamap_pars_fragment:nx,alphatest_fragment:ix,alphatest_pars_fragment:rx,aomap_fragment:sx,aomap_pars_fragment:ox,batching_pars_vertex:ax,batching_vertex:lx,begin_vertex:cx,beginnormal_vertex:ux,bsdfs:dx,iridescence_fragment:fx,bumpmap_pars_fragment:hx,clipping_planes_fragment:px,clipping_planes_pars_fragment:mx,clipping_planes_pars_vertex:gx,clipping_planes_vertex:_x,color_fragment:vx,color_pars_fragment:xx,color_pars_vertex:Sx,color_vertex:yx,common:Mx,cube_uv_reflection_fragment:Ex,defaultnormal_vertex:wx,displacementmap_pars_vertex:Tx,displacementmap_vertex:Ax,emissivemap_fragment:bx,emissivemap_pars_fragment:Cx,colorspace_fragment:Rx,colorspace_pars_fragment:Px,envmap_fragment:Lx,envmap_common_pars_fragment:Dx,envmap_pars_fragment:Ix,envmap_pars_vertex:Nx,envmap_physical_pars_fragment:Xx,envmap_vertex:Ux,fog_vertex:Fx,fog_pars_vertex:Ox,fog_fragment:kx,fog_pars_fragment:Bx,gradientmap_pars_fragment:zx,lightmap_pars_fragment:Hx,lights_lambert_fragment:Vx,lights_lambert_pars_fragment:Gx,lights_pars_begin:Wx,lights_toon_fragment:jx,lights_toon_pars_fragment:Yx,lights_phong_fragment:qx,lights_phong_pars_fragment:$x,lights_physical_fragment:Kx,lights_physical_pars_fragment:Zx,lights_fragment_begin:Jx,lights_fragment_maps:Qx,lights_fragment_end:eS,lightprobes_pars_fragment:tS,logdepthbuf_fragment:nS,logdepthbuf_pars_fragment:iS,logdepthbuf_pars_vertex:rS,logdepthbuf_vertex:sS,map_fragment:oS,map_pars_fragment:aS,map_particle_fragment:lS,map_particle_pars_fragment:cS,metalnessmap_fragment:uS,metalnessmap_pars_fragment:dS,morphinstance_vertex:fS,morphcolor_vertex:hS,morphnormal_vertex:pS,morphtarget_pars_vertex:mS,morphtarget_vertex:gS,normal_fragment_begin:_S,normal_fragment_maps:vS,normal_pars_fragment:xS,normal_pars_vertex:SS,normal_vertex:yS,normalmap_pars_fragment:MS,clearcoat_normal_fragment_begin:ES,clearcoat_normal_fragment_maps:wS,clearcoat_pars_fragment:TS,iridescence_pars_fragment:AS,opaque_fragment:bS,packing:CS,premultiplied_alpha_fragment:RS,project_vertex:PS,dithering_fragment:LS,dithering_pars_fragment:DS,roughnessmap_fragment:IS,roughnessmap_pars_fragment:NS,shadowmap_pars_fragment:US,shadowmap_pars_vertex:FS,shadowmap_vertex:OS,shadowmask_pars_fragment:kS,skinbase_vertex:BS,skinning_pars_vertex:zS,skinning_vertex:HS,skinnormal_vertex:VS,specularmap_fragment:GS,specularmap_pars_fragment:WS,tonemapping_fragment:XS,tonemapping_pars_fragment:jS,transmission_fragment:YS,transmission_pars_fragment:qS,uv_pars_fragment:$S,uv_pars_vertex:KS,uv_vertex:ZS,worldpos_vertex:JS,background_vert:QS,background_frag:ey,backgroundCube_vert:ty,backgroundCube_frag:ny,cube_vert:iy,cube_frag:ry,depth_vert:sy,depth_frag:oy,distance_vert:ay,distance_frag:ly,equirect_vert:cy,equirect_frag:uy,linedashed_vert:dy,linedashed_frag:fy,meshbasic_vert:hy,meshbasic_frag:py,meshlambert_vert:my,meshlambert_frag:gy,meshmatcap_vert:_y,meshmatcap_frag:vy,meshnormal_vert:xy,meshnormal_frag:Sy,meshphong_vert:yy,meshphong_frag:My,meshphysical_vert:Ey,meshphysical_frag:wy,meshtoon_vert:Ty,meshtoon_frag:Ay,points_vert:by,points_frag:Cy,shadow_vert:Ry,shadow_frag:Py,sprite_vert:Ly,sprite_frag:Dy},Ke={common:{diffuse:{value:new Dt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Ct},alphaMap:{value:null},alphaMapTransform:{value:new Ct},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Ct}},envmap:{envMap:{value:null},envMapRotation:{value:new Ct},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Ct}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Ct}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Ct},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Ct},normalScale:{value:new Ht(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Ct},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Ct}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Ct}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Ct}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Dt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new J},probesMax:{value:new J},probesResolution:{value:new J}},points:{diffuse:{value:new Dt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Ct},alphaTest:{value:0},uvTransform:{value:new Ct}},sprite:{diffuse:{value:new Dt(16777215)},opacity:{value:1},center:{value:new Ht(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Ct},alphaMap:{value:null},alphaMapTransform:{value:new Ct},alphaTest:{value:0}}},ji={basic:{uniforms:Zn([Ke.common,Ke.specularmap,Ke.envmap,Ke.aomap,Ke.lightmap,Ke.fog]),vertexShader:Lt.meshbasic_vert,fragmentShader:Lt.meshbasic_frag},lambert:{uniforms:Zn([Ke.common,Ke.specularmap,Ke.envmap,Ke.aomap,Ke.lightmap,Ke.emissivemap,Ke.bumpmap,Ke.normalmap,Ke.displacementmap,Ke.fog,Ke.lights,{emissive:{value:new Dt(0)},envMapIntensity:{value:1}}]),vertexShader:Lt.meshlambert_vert,fragmentShader:Lt.meshlambert_frag},phong:{uniforms:Zn([Ke.common,Ke.specularmap,Ke.envmap,Ke.aomap,Ke.lightmap,Ke.emissivemap,Ke.bumpmap,Ke.normalmap,Ke.displacementmap,Ke.fog,Ke.lights,{emissive:{value:new Dt(0)},specular:{value:new Dt(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:Lt.meshphong_vert,fragmentShader:Lt.meshphong_frag},standard:{uniforms:Zn([Ke.common,Ke.envmap,Ke.aomap,Ke.lightmap,Ke.emissivemap,Ke.bumpmap,Ke.normalmap,Ke.displacementmap,Ke.roughnessmap,Ke.metalnessmap,Ke.fog,Ke.lights,{emissive:{value:new Dt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Lt.meshphysical_vert,fragmentShader:Lt.meshphysical_frag},toon:{uniforms:Zn([Ke.common,Ke.aomap,Ke.lightmap,Ke.emissivemap,Ke.bumpmap,Ke.normalmap,Ke.displacementmap,Ke.gradientmap,Ke.fog,Ke.lights,{emissive:{value:new Dt(0)}}]),vertexShader:Lt.meshtoon_vert,fragmentShader:Lt.meshtoon_frag},matcap:{uniforms:Zn([Ke.common,Ke.bumpmap,Ke.normalmap,Ke.displacementmap,Ke.fog,{matcap:{value:null}}]),vertexShader:Lt.meshmatcap_vert,fragmentShader:Lt.meshmatcap_frag},points:{uniforms:Zn([Ke.points,Ke.fog]),vertexShader:Lt.points_vert,fragmentShader:Lt.points_frag},dashed:{uniforms:Zn([Ke.common,Ke.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Lt.linedashed_vert,fragmentShader:Lt.linedashed_frag},depth:{uniforms:Zn([Ke.common,Ke.displacementmap]),vertexShader:Lt.depth_vert,fragmentShader:Lt.depth_frag},normal:{uniforms:Zn([Ke.common,Ke.bumpmap,Ke.normalmap,Ke.displacementmap,{opacity:{value:1}}]),vertexShader:Lt.meshnormal_vert,fragmentShader:Lt.meshnormal_frag},sprite:{uniforms:Zn([Ke.sprite,Ke.fog]),vertexShader:Lt.sprite_vert,fragmentShader:Lt.sprite_frag},background:{uniforms:{uvTransform:{value:new Ct},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Lt.background_vert,fragmentShader:Lt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Ct}},vertexShader:Lt.backgroundCube_vert,fragmentShader:Lt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Lt.cube_vert,fragmentShader:Lt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Lt.equirect_vert,fragmentShader:Lt.equirect_frag},distance:{uniforms:Zn([Ke.common,Ke.displacementmap,{referencePosition:{value:new J},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Lt.distance_vert,fragmentShader:Lt.distance_frag},shadow:{uniforms:Zn([Ke.lights,Ke.fog,{color:{value:new Dt(0)},opacity:{value:1}}]),vertexShader:Lt.shadow_vert,fragmentShader:Lt.shadow_frag}};ji.physical={uniforms:Zn([ji.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Ct},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Ct},clearcoatNormalScale:{value:new Ht(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Ct},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Ct},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Ct},sheen:{value:0},sheenColor:{value:new Dt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Ct},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Ct},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Ct},transmissionSamplerSize:{value:new Ht},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Ct},attenuationDistance:{value:0},attenuationColor:{value:new Dt(0)},specularColor:{value:new Dt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Ct},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Ct},anisotropyVector:{value:new Ht},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Ct}}]),vertexShader:Lt.meshphysical_vert,fragmentShader:Lt.meshphysical_frag};const Ul={r:0,b:0,g:0},Iy=new gn,U0=new Ct;U0.set(-1,0,0,0,1,0,0,0,1);function Ny(r,e,n,s,a,l){const u=new Dt(0);let f=a===!0?0:1,p,m,x=null,S=0,g=null;function y(b){let L=b.isScene===!0?b.background:null;if(L&&L.isTexture){const P=b.backgroundBlurriness>0;L=e.get(L,P)}return L}function T(b){let L=!1;const P=y(b);P===null?_(u,f):P&&P.isColor&&(_(P,1),L=!0);const z=r.xr.getEnvironmentBlendMode();z==="additive"?n.buffers.color.setClear(0,0,0,1,l):z==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,l),(r.autoClear||L)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),r.clear(r.autoClearColor,r.autoClearDepth,r.autoClearStencil))}function R(b,L){const P=y(L);P&&(P.isCubeTexture||P.mapping===Zl)?(m===void 0&&(m=new Ae(new go(1,1,1),new er({name:"BackgroundCubeMaterial",uniforms:po(ji.backgroundCube.uniforms),vertexShader:ji.backgroundCube.vertexShader,fragmentShader:ji.backgroundCube.fragmentShader,side:li,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),m.geometry.deleteAttribute("normal"),m.geometry.deleteAttribute("uv"),m.onBeforeRender=function(z,D,k){this.matrixWorld.copyPosition(k.matrixWorld)},Object.defineProperty(m.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(m)),m.material.uniforms.envMap.value=P,m.material.uniforms.backgroundBlurriness.value=L.backgroundBlurriness,m.material.uniforms.backgroundIntensity.value=L.backgroundIntensity,m.material.uniforms.backgroundRotation.value.setFromMatrix4(Iy.makeRotationFromEuler(L.backgroundRotation)).transpose(),P.isCubeTexture&&P.isRenderTargetTexture===!1&&m.material.uniforms.backgroundRotation.value.premultiply(U0),m.material.toneMapped=zt.getTransfer(P.colorSpace)!==Zt,(x!==P||S!==P.version||g!==r.toneMapping)&&(m.material.needsUpdate=!0,x=P,S=P.version,g=r.toneMapping),m.layers.enableAll(),b.unshift(m,m.geometry,m.material,0,0,null)):P&&P.isTexture&&(p===void 0&&(p=new Ae(new Un(2,2),new er({name:"BackgroundMaterial",uniforms:po(ji.background.uniforms),vertexShader:ji.background.vertexShader,fragmentShader:ji.background.fragmentShader,side:$r,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),p.geometry.deleteAttribute("normal"),Object.defineProperty(p.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(p)),p.material.uniforms.t2D.value=P,p.material.uniforms.backgroundIntensity.value=L.backgroundIntensity,p.material.toneMapped=zt.getTransfer(P.colorSpace)!==Zt,P.matrixAutoUpdate===!0&&P.updateMatrix(),p.material.uniforms.uvTransform.value.copy(P.matrix),(x!==P||S!==P.version||g!==r.toneMapping)&&(p.material.needsUpdate=!0,x=P,S=P.version,g=r.toneMapping),p.layers.enableAll(),b.unshift(p,p.geometry,p.material,0,0,null))}function _(b,L){b.getRGB(Ul,L0(r)),n.buffers.color.setClear(Ul.r,Ul.g,Ul.b,L,l)}function v(){m!==void 0&&(m.geometry.dispose(),m.material.dispose(),m=void 0),p!==void 0&&(p.geometry.dispose(),p.material.dispose(),p=void 0)}return{getClearColor:function(){return u},setClearColor:function(b,L=1){u.set(b),f=L,_(u,f)},getClearAlpha:function(){return f},setClearAlpha:function(b){f=b,_(u,f)},render:T,addToRenderList:R,dispose:v}}function Uy(r,e){const n=r.getParameter(r.MAX_VERTEX_ATTRIBS),s={},a=g(null);let l=a,u=!1;function f(O,q,oe,pe,W){let ee=!1;const K=S(O,pe,oe,q);l!==K&&(l=K,m(l.object)),ee=y(O,pe,oe,W),ee&&T(O,pe,oe,W),W!==null&&e.update(W,r.ELEMENT_ARRAY_BUFFER),(ee||u)&&(u=!1,P(O,q,oe,pe),W!==null&&r.bindBuffer(r.ELEMENT_ARRAY_BUFFER,e.get(W).buffer))}function p(){return r.createVertexArray()}function m(O){return r.bindVertexArray(O)}function x(O){return r.deleteVertexArray(O)}function S(O,q,oe,pe){const W=pe.wireframe===!0;let ee=s[q.id];ee===void 0&&(ee={},s[q.id]=ee);const K=O.isInstancedMesh===!0?O.id:0;let Z=ee[K];Z===void 0&&(Z={},ee[K]=Z);let ue=Z[oe.id];ue===void 0&&(ue={},Z[oe.id]=ue);let de=ue[W];return de===void 0&&(de=g(p()),ue[W]=de),de}function g(O){const q=[],oe=[],pe=[];for(let W=0;W<n;W++)q[W]=0,oe[W]=0,pe[W]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:q,enabledAttributes:oe,attributeDivisors:pe,object:O,attributes:{},index:null}}function y(O,q,oe,pe){const W=l.attributes,ee=q.attributes;let K=0;const Z=oe.getAttributes();for(const ue in Z)if(Z[ue].location>=0){const F=W[ue];let te=ee[ue];if(te===void 0&&(ue==="instanceMatrix"&&O.instanceMatrix&&(te=O.instanceMatrix),ue==="instanceColor"&&O.instanceColor&&(te=O.instanceColor)),F===void 0||F.attribute!==te||te&&F.data!==te.data)return!0;K++}return l.attributesNum!==K||l.index!==pe}function T(O,q,oe,pe){const W={},ee=q.attributes;let K=0;const Z=oe.getAttributes();for(const ue in Z)if(Z[ue].location>=0){let F=ee[ue];F===void 0&&(ue==="instanceMatrix"&&O.instanceMatrix&&(F=O.instanceMatrix),ue==="instanceColor"&&O.instanceColor&&(F=O.instanceColor));const te={};te.attribute=F,F&&F.data&&(te.data=F.data),W[ue]=te,K++}l.attributes=W,l.attributesNum=K,l.index=pe}function R(){const O=l.newAttributes;for(let q=0,oe=O.length;q<oe;q++)O[q]=0}function _(O){v(O,0)}function v(O,q){const oe=l.newAttributes,pe=l.enabledAttributes,W=l.attributeDivisors;oe[O]=1,pe[O]===0&&(r.enableVertexAttribArray(O),pe[O]=1),W[O]!==q&&(r.vertexAttribDivisor(O,q),W[O]=q)}function b(){const O=l.newAttributes,q=l.enabledAttributes;for(let oe=0,pe=q.length;oe<pe;oe++)q[oe]!==O[oe]&&(r.disableVertexAttribArray(oe),q[oe]=0)}function L(O,q,oe,pe,W,ee,K){K===!0?r.vertexAttribIPointer(O,q,oe,W,ee):r.vertexAttribPointer(O,q,oe,pe,W,ee)}function P(O,q,oe,pe){R();const W=pe.attributes,ee=oe.getAttributes(),K=q.defaultAttributeValues;for(const Z in ee){const ue=ee[Z];if(ue.location>=0){let de=W[Z];if(de===void 0&&(Z==="instanceMatrix"&&O.instanceMatrix&&(de=O.instanceMatrix),Z==="instanceColor"&&O.instanceColor&&(de=O.instanceColor)),de!==void 0){const F=de.normalized,te=de.itemSize,je=e.get(de);if(je===void 0)continue;const De=je.buffer,Ye=je.type,ae=je.bytesPerElement,Te=Ye===r.INT||Ye===r.UNSIGNED_INT||de.gpuType===ff;if(de.isInterleavedBufferAttribute){const ye=de.data,Ge=ye.stride,st=de.offset;if(ye.isInstancedInterleavedBuffer){for(let ot=0;ot<ue.locationSize;ot++)v(ue.location+ot,ye.meshPerAttribute);O.isInstancedMesh!==!0&&pe._maxInstanceCount===void 0&&(pe._maxInstanceCount=ye.meshPerAttribute*ye.count)}else for(let ot=0;ot<ue.locationSize;ot++)_(ue.location+ot);r.bindBuffer(r.ARRAY_BUFFER,De);for(let ot=0;ot<ue.locationSize;ot++)L(ue.location+ot,te/ue.locationSize,Ye,F,Ge*ae,(st+te/ue.locationSize*ot)*ae,Te)}else{if(de.isInstancedBufferAttribute){for(let ye=0;ye<ue.locationSize;ye++)v(ue.location+ye,de.meshPerAttribute);O.isInstancedMesh!==!0&&pe._maxInstanceCount===void 0&&(pe._maxInstanceCount=de.meshPerAttribute*de.count)}else for(let ye=0;ye<ue.locationSize;ye++)_(ue.location+ye);r.bindBuffer(r.ARRAY_BUFFER,De);for(let ye=0;ye<ue.locationSize;ye++)L(ue.location+ye,te/ue.locationSize,Ye,F,te*ae,te/ue.locationSize*ye*ae,Te)}}else if(K!==void 0){const F=K[Z];if(F!==void 0)switch(F.length){case 2:r.vertexAttrib2fv(ue.location,F);break;case 3:r.vertexAttrib3fv(ue.location,F);break;case 4:r.vertexAttrib4fv(ue.location,F);break;default:r.vertexAttrib1fv(ue.location,F)}}}}b()}function z(){I();for(const O in s){const q=s[O];for(const oe in q){const pe=q[oe];for(const W in pe){const ee=pe[W];for(const K in ee)x(ee[K].object),delete ee[K];delete pe[W]}}delete s[O]}}function D(O){if(s[O.id]===void 0)return;const q=s[O.id];for(const oe in q){const pe=q[oe];for(const W in pe){const ee=pe[W];for(const K in ee)x(ee[K].object),delete ee[K];delete pe[W]}}delete s[O.id]}function k(O){for(const q in s){const oe=s[q];for(const pe in oe){const W=oe[pe];if(W[O.id]===void 0)continue;const ee=W[O.id];for(const K in ee)x(ee[K].object),delete ee[K];delete W[O.id]}}}function w(O){for(const q in s){const oe=s[q],pe=O.isInstancedMesh===!0?O.id:0,W=oe[pe];if(W!==void 0){for(const ee in W){const K=W[ee];for(const Z in K)x(K[Z].object),delete K[Z];delete W[ee]}delete oe[pe],Object.keys(oe).length===0&&delete s[q]}}}function I(){j(),u=!0,l!==a&&(l=a,m(l.object))}function j(){a.geometry=null,a.program=null,a.wireframe=!1}return{setup:f,reset:I,resetDefaultState:j,dispose:z,releaseStatesOfGeometry:D,releaseStatesOfObject:w,releaseStatesOfProgram:k,initAttributes:R,enableAttribute:_,disableUnusedAttributes:b}}function Fy(r,e,n){let s;function a(p){s=p}function l(p,m){r.drawArrays(s,p,m),n.update(m,s,1)}function u(p,m,x){x!==0&&(r.drawArraysInstanced(s,p,m,x),n.update(m,s,x))}function f(p,m,x){if(x===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(s,p,0,m,0,x);let g=0;for(let y=0;y<x;y++)g+=m[y];n.update(g,s,1)}this.setMode=a,this.render=l,this.renderInstances=u,this.renderMultiDraw=f}function Oy(r,e,n,s){let a;function l(){if(a!==void 0)return a;if(e.has("EXT_texture_filter_anisotropic")===!0){const k=e.get("EXT_texture_filter_anisotropic");a=r.getParameter(k.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else a=0;return a}function u(k){return!(k!==ki&&s.convert(k)!==r.getParameter(r.IMPLEMENTATION_COLOR_READ_FORMAT))}function f(k){const w=k===xr&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(k!==gi&&s.convert(k)!==r.getParameter(r.IMPLEMENTATION_COLOR_READ_TYPE)&&k!==Yi&&!w)}function p(k){if(k==="highp"){if(r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.HIGH_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.HIGH_FLOAT).precision>0)return"highp";k="mediump"}return k==="mediump"&&r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.MEDIUM_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let m=n.precision!==void 0?n.precision:"highp";const x=p(m);x!==m&&(Mt("WebGLRenderer:",m,"not supported, using",x,"instead."),m=x);const S=n.logarithmicDepthBuffer===!0,g=n.reversedDepthBuffer===!0&&e.has("EXT_clip_control");n.reversedDepthBuffer===!0&&g===!1&&Mt("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");const y=r.getParameter(r.MAX_TEXTURE_IMAGE_UNITS),T=r.getParameter(r.MAX_VERTEX_TEXTURE_IMAGE_UNITS),R=r.getParameter(r.MAX_TEXTURE_SIZE),_=r.getParameter(r.MAX_CUBE_MAP_TEXTURE_SIZE),v=r.getParameter(r.MAX_VERTEX_ATTRIBS),b=r.getParameter(r.MAX_VERTEX_UNIFORM_VECTORS),L=r.getParameter(r.MAX_VARYING_VECTORS),P=r.getParameter(r.MAX_FRAGMENT_UNIFORM_VECTORS),z=r.getParameter(r.MAX_SAMPLES),D=r.getParameter(r.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:l,getMaxPrecision:p,textureFormatReadable:u,textureTypeReadable:f,precision:m,logarithmicDepthBuffer:S,reversedDepthBuffer:g,maxTextures:y,maxVertexTextures:T,maxTextureSize:R,maxCubemapSize:_,maxAttributes:v,maxVertexUniforms:b,maxVaryings:L,maxFragmentUniforms:P,maxSamples:z,samples:D}}function ky(r){const e=this;let n=null,s=0,a=!1,l=!1;const u=new ms,f=new Ct,p={value:null,needsUpdate:!1};this.uniform=p,this.numPlanes=0,this.numIntersection=0,this.init=function(S,g){const y=S.length!==0||g||s!==0||a;return a=g,s=S.length,y},this.beginShadows=function(){l=!0,x(null)},this.endShadows=function(){l=!1},this.setGlobalState=function(S,g){n=x(S,g,0)},this.setState=function(S,g,y){const T=S.clippingPlanes,R=S.clipIntersection,_=S.clipShadows,v=r.get(S);if(!a||T===null||T.length===0||l&&!_)l?x(null):m();else{const b=l?0:s,L=b*4;let P=v.clippingState||null;p.value=P,P=x(T,g,L,y);for(let z=0;z!==L;++z)P[z]=n[z];v.clippingState=P,this.numIntersection=R?this.numPlanes:0,this.numPlanes+=b}};function m(){p.value!==n&&(p.value=n,p.needsUpdate=s>0),e.numPlanes=s,e.numIntersection=0}function x(S,g,y,T){const R=S!==null?S.length:0;let _=null;if(R!==0){if(_=p.value,T!==!0||_===null){const v=y+R*4,b=g.matrixWorldInverse;f.getNormalMatrix(b),(_===null||_.length<v)&&(_=new Float32Array(v));for(let L=0,P=y;L!==R;++L,P+=4)u.copy(S[L]).applyMatrix4(b,f),u.normal.toArray(_,P),_[P+3]=u.constant}p.value=_,p.needsUpdate=!0}return e.numPlanes=R,e.numIntersection=0,_}}const qr=4,Bm=[.125,.215,.35,.446,.526,.582],_s=20,By=256,na=new Cf,zm=new Dt;let ld=null,cd=0,ud=0,dd=!1;const zy=new J;class Hm{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._sigmas=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,n=0,s=.1,a=100,l={}){const{size:u=256,position:f=zy}=l;ld=this._renderer.getRenderTarget(),cd=this._renderer.getActiveCubeFace(),ud=this._renderer.getActiveMipmapLevel(),dd=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(u);const p=this._allocateTargets();return p.depthBuffer=!0,this._sceneToCubeUV(e,s,a,p,f),n>0&&this._blur(p,0,0,n),this._applyPMREM(p),this._cleanup(p),p}fromEquirectangular(e,n=null){return this._fromTexture(e,n)}fromCubemap(e,n=null){return this._fromTexture(e,n)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Wm(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Gm(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(ld,cd,ud),this._renderer.xr.enabled=dd,e.scissorTest=!1,oo(e,0,0,e.width,e.height)}_fromTexture(e,n){e.mapping===Ss||e.mapping===fo?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),ld=this._renderer.getRenderTarget(),cd=this._renderer.getActiveCubeFace(),ud=this._renderer.getActiveMipmapLevel(),dd=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const s=n||this._allocateTargets();return this._textureToCubeUV(e,s),this._applyPMREM(s),this._cleanup(s),s}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),n=4*this._cubeSize,s={magFilter:jn,minFilter:jn,generateMipmaps:!1,type:xr,format:ki,colorSpace:Wl,depthBuffer:!1},a=Vm(e,n,s);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==n){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Vm(e,n,s);const{_lodMax:l}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods,sigmas:this._sigmas}=Hy(l)),this._blurMaterial=Gy(l,e,n),this._ggxMaterial=Vy(l,e,n)}return a}_compileMaterial(e){const n=new Ae(new _i,e);this._renderer.compile(n,na)}_sceneToCubeUV(e,n,s,a,l){const p=new mi(90,1,n,s),m=[1,-1,1,1,1,1],x=[1,1,1,-1,-1,-1],S=this._renderer,g=S.autoClear,y=S.toneMapping;S.getClearColor(zm),S.toneMapping=Ki,S.autoClear=!1,S.state.buffers.depth.getReversed()&&(S.setRenderTarget(a),S.clearDepth(),S.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new Ae(new go,new Yl({name:"PMREM.Background",side:li,depthWrite:!1,depthTest:!1})));const R=this._backgroundBox,_=R.material;let v=!1;const b=e.background;b?b.isColor&&(_.color.copy(b),e.background=null,v=!0):(_.color.copy(zm),v=!0);for(let L=0;L<6;L++){const P=L%3;P===0?(p.up.set(0,m[L],0),p.position.set(l.x,l.y,l.z),p.lookAt(l.x+x[L],l.y,l.z)):P===1?(p.up.set(0,0,m[L]),p.position.set(l.x,l.y,l.z),p.lookAt(l.x,l.y+x[L],l.z)):(p.up.set(0,m[L],0),p.position.set(l.x,l.y,l.z),p.lookAt(l.x,l.y,l.z+x[L]));const z=this._cubeSize;oo(a,P*z,L>2?z:0,z,z),S.setRenderTarget(a),v&&S.render(R,p),S.render(e,p)}S.toneMapping=y,S.autoClear=g,e.background=b}_textureToCubeUV(e,n){const s=this._renderer,a=e.mapping===Ss||e.mapping===fo;a?(this._cubemapMaterial===null&&(this._cubemapMaterial=Wm()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Gm());const l=a?this._cubemapMaterial:this._equirectMaterial,u=this._lodMeshes[0];u.material=l;const f=l.uniforms;f.envMap.value=e;const p=this._cubeSize;oo(n,0,0,3*p,2*p),s.setRenderTarget(n),s.render(u,na)}_applyPMREM(e){const n=this._renderer,s=n.autoClear;n.autoClear=!1;const a=this._lodMeshes.length;for(let l=1;l<a;l++)this._applyGGXFilter(e,l-1,l);n.autoClear=s}_applyGGXFilter(e,n,s){const a=this._renderer,l=this._pingPongRenderTarget,u=this._ggxMaterial,f=this._lodMeshes[s];f.material=u;const p=u.uniforms,m=s/(this._lodMeshes.length-1),x=n/(this._lodMeshes.length-1),S=Math.sqrt(m*m-x*x),g=0+m*1.25,y=S*g,{_lodMax:T}=this,R=this._sizeLods[s],_=3*R*(s>T-qr?s-T+qr:0),v=4*(this._cubeSize-R);p.envMap.value=e.texture,p.roughness.value=y,p.mipInt.value=T-n,oo(l,_,v,3*R,2*R),a.setRenderTarget(l),a.render(f,na),p.envMap.value=l.texture,p.roughness.value=0,p.mipInt.value=T-s,oo(e,_,v,3*R,2*R),a.setRenderTarget(e),a.render(f,na)}_blur(e,n,s,a,l){const u=this._pingPongRenderTarget;this._halfBlur(e,u,n,s,a,"latitudinal",l),this._halfBlur(u,e,s,s,a,"longitudinal",l)}_halfBlur(e,n,s,a,l,u,f){const p=this._renderer,m=this._blurMaterial;u!=="latitudinal"&&u!=="longitudinal"&&Gt("blur direction must be either latitudinal or longitudinal!");const x=3,S=this._lodMeshes[a];S.material=m;const g=m.uniforms,y=this._sizeLods[s]-1,T=isFinite(l)?Math.PI/(2*y):2*Math.PI/(2*_s-1),R=l/T,_=isFinite(l)?1+Math.floor(x*R):_s;_>_s&&Mt(`sigmaRadians, ${l}, is too large and will clip, as it requested ${_} samples when the maximum is set to ${_s}`);const v=[];let b=0;for(let k=0;k<_s;++k){const w=k/R,I=Math.exp(-w*w/2);v.push(I),k===0?b+=I:k<_&&(b+=2*I)}for(let k=0;k<v.length;k++)v[k]=v[k]/b;g.envMap.value=e.texture,g.samples.value=_,g.weights.value=v,g.latitudinal.value=u==="latitudinal",f&&(g.poleAxis.value=f);const{_lodMax:L}=this;g.dTheta.value=T,g.mipInt.value=L-s;const P=this._sizeLods[a],z=3*P*(a>L-qr?a-L+qr:0),D=4*(this._cubeSize-P);oo(n,z,D,3*P,2*P),p.setRenderTarget(n),p.render(S,na)}}function Hy(r){const e=[],n=[],s=[];let a=r;const l=r-qr+1+Bm.length;for(let u=0;u<l;u++){const f=Math.pow(2,a);e.push(f);let p=1/f;u>r-qr?p=Bm[u-r+qr-1]:u===0&&(p=0),n.push(p);const m=1/(f-2),x=-m,S=1+m,g=[x,x,S,x,S,S,x,x,S,S,x,S],y=6,T=6,R=3,_=2,v=1,b=new Float32Array(R*T*y),L=new Float32Array(_*T*y),P=new Float32Array(v*T*y);for(let D=0;D<y;D++){const k=D%3*2/3-1,w=D>2?0:-1,I=[k,w,0,k+2/3,w,0,k+2/3,w+1,0,k,w,0,k+2/3,w+1,0,k,w+1,0];b.set(I,R*T*D),L.set(g,_*T*D);const j=[D,D,D,D,D,D];P.set(j,v*T*D)}const z=new _i;z.setAttribute("position",new Ji(b,R)),z.setAttribute("uv",new Ji(L,_)),z.setAttribute("faceIndex",new Ji(P,v)),s.push(new Ae(z,null)),a>qr&&a--}return{lodMeshes:s,sizeLods:e,sigmas:n}}function Vm(r,e,n){const s=new Zi(r,e,n);return s.texture.mapping=Zl,s.texture.name="PMREM.cubeUv",s.scissorTest=!0,s}function oo(r,e,n,s,a){r.viewport.set(e,n,s,a),r.scissor.set(e,n,s,a)}function Vy(r,e,n){return new er({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:By,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${r}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:Jl(),fragmentShader:`

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
		`,blending:_r,depthTest:!1,depthWrite:!1})}function Gy(r,e,n){const s=new Float32Array(_s),a=new J(0,1,0);return new er({name:"SphericalGaussianBlur",defines:{n:_s,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${r}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:s},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:a}},vertexShader:Jl(),fragmentShader:`

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
		`,blending:_r,depthTest:!1,depthWrite:!1})}function Gm(){return new er({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Jl(),fragmentShader:`

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
		`,blending:_r,depthTest:!1,depthWrite:!1})}function Wm(){return new er({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Jl(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:_r,depthTest:!1,depthWrite:!1})}function Jl(){return`

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
	`}class F0 extends Zi{constructor(e=1,n={}){super(e,e,n),this.isWebGLCubeRenderTarget=!0;const s={width:e,height:e,depth:1},a=[s,s,s,s,s,s];this.texture=new R0(a),this._setTextureOptions(n),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,n){this.texture.type=n.type,this.texture.colorSpace=n.colorSpace,this.texture.generateMipmaps=n.generateMipmaps,this.texture.minFilter=n.minFilter,this.texture.magFilter=n.magFilter;const s={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},a=new go(5,5,5),l=new er({name:"CubemapFromEquirect",uniforms:po(s.uniforms),vertexShader:s.vertexShader,fragmentShader:s.fragmentShader,side:li,blending:_r});l.uniforms.tEquirect.value=n;const u=new Ae(a,l),f=n.minFilter;return n.minFilter===vs&&(n.minFilter=jn),new qv(1,10,this).update(e,u),n.minFilter=f,u.geometry.dispose(),u.material.dispose(),this}clear(e,n=!0,s=!0,a=!0){const l=e.getRenderTarget();for(let u=0;u<6;u++)e.setRenderTarget(this,u),e.clear(n,s,a);e.setRenderTarget(l)}}function Wy(r){let e=new WeakMap,n=new WeakMap,s=null;function a(g,y=!1){return g==null?null:y?u(g):l(g)}function l(g){if(g&&g.isTexture){const y=g.mapping;if(y===Nu||y===Uu)if(e.has(g)){const T=e.get(g).texture;return f(T,g.mapping)}else{const T=g.image;if(T&&T.height>0){const R=new F0(T.height);return R.fromEquirectangularTexture(r,g),e.set(g,R),g.addEventListener("dispose",m),f(R.texture,g.mapping)}else return null}}return g}function u(g){if(g&&g.isTexture){const y=g.mapping,T=y===Nu||y===Uu,R=y===Ss||y===fo;if(T||R){let _=n.get(g);const v=_!==void 0?_.texture.pmremVersion:0;if(g.isRenderTargetTexture&&g.pmremVersion!==v)return s===null&&(s=new Hm(r)),_=T?s.fromEquirectangular(g,_):s.fromCubemap(g,_),_.texture.pmremVersion=g.pmremVersion,n.set(g,_),_.texture;if(_!==void 0)return _.texture;{const b=g.image;return T&&b&&b.height>0||R&&b&&p(b)?(s===null&&(s=new Hm(r)),_=T?s.fromEquirectangular(g):s.fromCubemap(g),_.texture.pmremVersion=g.pmremVersion,n.set(g,_),g.addEventListener("dispose",x),_.texture):null}}}return g}function f(g,y){return y===Nu?g.mapping=Ss:y===Uu&&(g.mapping=fo),g}function p(g){let y=0;const T=6;for(let R=0;R<T;R++)g[R]!==void 0&&y++;return y===T}function m(g){const y=g.target;y.removeEventListener("dispose",m);const T=e.get(y);T!==void 0&&(e.delete(y),T.dispose())}function x(g){const y=g.target;y.removeEventListener("dispose",x);const T=n.get(y);T!==void 0&&(n.delete(y),T.dispose())}function S(){e=new WeakMap,n=new WeakMap,s!==null&&(s.dispose(),s=null)}return{get:a,dispose:S}}function Xy(r){const e={};function n(s){if(e[s]!==void 0)return e[s];const a=r.getExtension(s);return e[s]=a,a}return{has:function(s){return n(s)!==null},init:function(){n("EXT_color_buffer_float"),n("WEBGL_clip_cull_distance"),n("OES_texture_float_linear"),n("EXT_color_buffer_half_float"),n("WEBGL_multisampled_render_to_texture"),n("WEBGL_render_shared_exponent")},get:function(s){const a=n(s);return a===null&&rf("WebGLRenderer: "+s+" extension not supported."),a}}}function jy(r,e,n,s){const a={},l=new WeakMap;function u(S){const g=S.target;g.index!==null&&e.remove(g.index);for(const T in g.attributes)e.remove(g.attributes[T]);g.removeEventListener("dispose",u),delete a[g.id];const y=l.get(g);y&&(e.remove(y),l.delete(g)),s.releaseStatesOfGeometry(g),g.isInstancedBufferGeometry===!0&&delete g._maxInstanceCount,n.memory.geometries--}function f(S,g){return a[g.id]===!0||(g.addEventListener("dispose",u),a[g.id]=!0,n.memory.geometries++),g}function p(S){const g=S.attributes;for(const y in g)e.update(g[y],r.ARRAY_BUFFER)}function m(S){const g=[],y=S.index,T=S.attributes.position;let R=0;if(T===void 0)return;if(y!==null){const b=y.array;R=y.version;for(let L=0,P=b.length;L<P;L+=3){const z=b[L+0],D=b[L+1],k=b[L+2];g.push(z,D,D,k,k,z)}}else{const b=T.array;R=T.version;for(let L=0,P=b.length/3-1;L<P;L+=3){const z=L+0,D=L+1,k=L+2;g.push(z,D,D,k,k,z)}}const _=new(T.count>=65535?b0:A0)(g,1);_.version=R;const v=l.get(S);v&&e.remove(v),l.set(S,_)}function x(S){const g=l.get(S);if(g){const y=S.index;y!==null&&g.version<y.version&&m(S)}else m(S);return l.get(S)}return{get:f,update:p,getWireframeAttribute:x}}function Yy(r,e,n){let s;function a(S){s=S}let l,u;function f(S){l=S.type,u=S.bytesPerElement}function p(S,g){r.drawElements(s,g,l,S*u),n.update(g,s,1)}function m(S,g,y){y!==0&&(r.drawElementsInstanced(s,g,l,S*u,y),n.update(g,s,y))}function x(S,g,y){if(y===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(s,g,0,l,S,0,y);let R=0;for(let _=0;_<y;_++)R+=g[_];n.update(R,s,1)}this.setMode=a,this.setIndex=f,this.render=p,this.renderInstances=m,this.renderMultiDraw=x}function qy(r){const e={geometries:0,textures:0},n={frame:0,calls:0,triangles:0,points:0,lines:0};function s(l,u,f){switch(n.calls++,u){case r.TRIANGLES:n.triangles+=f*(l/3);break;case r.LINES:n.lines+=f*(l/2);break;case r.LINE_STRIP:n.lines+=f*(l-1);break;case r.LINE_LOOP:n.lines+=f*l;break;case r.POINTS:n.points+=f*l;break;default:Gt("WebGLInfo: Unknown draw mode:",u);break}}function a(){n.calls=0,n.triangles=0,n.points=0,n.lines=0}return{memory:e,render:n,programs:null,autoReset:!0,reset:a,update:s}}function $y(r,e,n){const s=new WeakMap,a=new mn;function l(u,f,p){const m=u.morphTargetInfluences,x=f.morphAttributes.position||f.morphAttributes.normal||f.morphAttributes.color,S=x!==void 0?x.length:0;let g=s.get(f);if(g===void 0||g.count!==S){let j=function(){w.dispose(),s.delete(f),f.removeEventListener("dispose",j)};var y=j;g!==void 0&&g.texture.dispose();const T=f.morphAttributes.position!==void 0,R=f.morphAttributes.normal!==void 0,_=f.morphAttributes.color!==void 0,v=f.morphAttributes.position||[],b=f.morphAttributes.normal||[],L=f.morphAttributes.color||[];let P=0;T===!0&&(P=1),R===!0&&(P=2),_===!0&&(P=3);let z=f.attributes.position.count*P,D=1;z>e.maxTextureSize&&(D=Math.ceil(z/e.maxTextureSize),z=e.maxTextureSize);const k=new Float32Array(z*D*4*S),w=new w0(k,z,D,S);w.type=Yi,w.needsUpdate=!0;const I=P*4;for(let O=0;O<S;O++){const q=v[O],oe=b[O],pe=L[O],W=z*D*4*O;for(let ee=0;ee<q.count;ee++){const K=ee*I;T===!0&&(a.fromBufferAttribute(q,ee),k[W+K+0]=a.x,k[W+K+1]=a.y,k[W+K+2]=a.z,k[W+K+3]=0),R===!0&&(a.fromBufferAttribute(oe,ee),k[W+K+4]=a.x,k[W+K+5]=a.y,k[W+K+6]=a.z,k[W+K+7]=0),_===!0&&(a.fromBufferAttribute(pe,ee),k[W+K+8]=a.x,k[W+K+9]=a.y,k[W+K+10]=a.z,k[W+K+11]=pe.itemSize===4?a.w:1)}}g={count:S,texture:w,size:new Ht(z,D)},s.set(f,g),f.addEventListener("dispose",j)}if(u.isInstancedMesh===!0&&u.morphTexture!==null)p.getUniforms().setValue(r,"morphTexture",u.morphTexture,n);else{let T=0;for(let _=0;_<m.length;_++)T+=m[_];const R=f.morphTargetsRelative?1:1-T;p.getUniforms().setValue(r,"morphTargetBaseInfluence",R),p.getUniforms().setValue(r,"morphTargetInfluences",m)}p.getUniforms().setValue(r,"morphTargetsTexture",g.texture,n),p.getUniforms().setValue(r,"morphTargetsTextureSize",g.size)}return{update:l}}function Ky(r,e,n,s,a){let l=new WeakMap;function u(m){const x=a.render.frame,S=m.geometry,g=e.get(m,S);if(l.get(g)!==x&&(e.update(g),l.set(g,x)),m.isInstancedMesh&&(m.hasEventListener("dispose",p)===!1&&m.addEventListener("dispose",p),l.get(m)!==x&&(n.update(m.instanceMatrix,r.ARRAY_BUFFER),m.instanceColor!==null&&n.update(m.instanceColor,r.ARRAY_BUFFER),l.set(m,x))),m.isSkinnedMesh){const y=m.skeleton;l.get(y)!==x&&(y.update(),l.set(y,x))}return g}function f(){l=new WeakMap}function p(m){const x=m.target;x.removeEventListener("dispose",p),s.releaseStatesOfObject(x),n.remove(x.instanceMatrix),x.instanceColor!==null&&n.remove(x.instanceColor)}return{update:u,dispose:f}}const Zy={[c0]:"LINEAR_TONE_MAPPING",[u0]:"REINHARD_TONE_MAPPING",[d0]:"CINEON_TONE_MAPPING",[df]:"ACES_FILMIC_TONE_MAPPING",[h0]:"AGX_TONE_MAPPING",[p0]:"NEUTRAL_TONE_MAPPING",[f0]:"CUSTOM_TONE_MAPPING"};function Jy(r,e,n,s,a){const l=new Zi(e,n,{type:r,depthBuffer:s,stencilBuffer:a,depthTexture:s?new ho(e,n):void 0}),u=new Zi(e,n,{type:xr,depthBuffer:!1,stencilBuffer:!1}),f=new _i;f.setAttribute("position",new xn([-1,3,0,-1,-1,0,3,-1,0],3)),f.setAttribute("uv",new xn([0,2,0,0,2,0],2));const p=new Hv({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),m=new Ae(f,p),x=new Cf(-1,1,1,-1,0,1);let S=null,g=null,y=!1,T,R=null,_=[],v=!1;this.setSize=function(b,L){l.setSize(b,L),u.setSize(b,L);for(let P=0;P<_.length;P++){const z=_[P];z.setSize&&z.setSize(b,L)}},this.setEffects=function(b){_=b,v=_.length>0&&_[0].isRenderPass===!0;const L=l.width,P=l.height;for(let z=0;z<_.length;z++){const D=_[z];D.setSize&&D.setSize(L,P)}},this.begin=function(b,L){if(y||b.toneMapping===Ki&&_.length===0)return!1;if(R=L,L!==null){const P=L.width,z=L.height;(l.width!==P||l.height!==z)&&this.setSize(P,z)}return v===!1&&b.setRenderTarget(l),T=b.toneMapping,b.toneMapping=Ki,!0},this.hasRenderPass=function(){return v},this.end=function(b,L){b.toneMapping=T,y=!0;let P=l,z=u;for(let D=0;D<_.length;D++){const k=_[D];if(k.enabled!==!1&&(k.render(b,z,P,L),k.needsSwap!==!1)){const w=P;P=z,z=w}}if(S!==b.outputColorSpace||g!==b.toneMapping){S=b.outputColorSpace,g=b.toneMapping,p.defines={},zt.getTransfer(S)===Zt&&(p.defines.SRGB_TRANSFER="");const D=Zy[g];D&&(p.defines[D]=""),p.needsUpdate=!0}p.uniforms.tDiffuse.value=P.texture,b.setRenderTarget(R),b.render(m,x),R=null,y=!1},this.isCompositing=function(){return y},this.dispose=function(){l.depthTexture&&l.depthTexture.dispose(),l.dispose(),u.dispose(),f.dispose(),p.dispose()}}const O0=new Yn,af=new ho(1,1),k0=new w0,B0=new _v,z0=new R0,Xm=[],jm=[],Ym=new Float32Array(16),qm=new Float32Array(9),$m=new Float32Array(4);function _o(r,e,n){const s=r[0];if(s<=0||s>0)return r;const a=e*n;let l=Xm[a];if(l===void 0&&(l=new Float32Array(a),Xm[a]=l),e!==0){s.toArray(l,0);for(let u=1,f=0;u!==e;++u)f+=n,r[u].toArray(l,f)}return l}function An(r,e){if(r.length!==e.length)return!1;for(let n=0,s=r.length;n<s;n++)if(r[n]!==e[n])return!1;return!0}function bn(r,e){for(let n=0,s=e.length;n<s;n++)r[n]=e[n]}function Ql(r,e){let n=jm[e];n===void 0&&(n=new Int32Array(e),jm[e]=n);for(let s=0;s!==e;++s)n[s]=r.allocateTextureUnit();return n}function Qy(r,e){const n=this.cache;n[0]!==e&&(r.uniform1f(this.addr,e),n[0]=e)}function e1(r,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(r.uniform2f(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(An(n,e))return;r.uniform2fv(this.addr,e),bn(n,e)}}function t1(r,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(r.uniform3f(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else if(e.r!==void 0)(n[0]!==e.r||n[1]!==e.g||n[2]!==e.b)&&(r.uniform3f(this.addr,e.r,e.g,e.b),n[0]=e.r,n[1]=e.g,n[2]=e.b);else{if(An(n,e))return;r.uniform3fv(this.addr,e),bn(n,e)}}function n1(r,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(r.uniform4f(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(An(n,e))return;r.uniform4fv(this.addr,e),bn(n,e)}}function i1(r,e){const n=this.cache,s=e.elements;if(s===void 0){if(An(n,e))return;r.uniformMatrix2fv(this.addr,!1,e),bn(n,e)}else{if(An(n,s))return;$m.set(s),r.uniformMatrix2fv(this.addr,!1,$m),bn(n,s)}}function r1(r,e){const n=this.cache,s=e.elements;if(s===void 0){if(An(n,e))return;r.uniformMatrix3fv(this.addr,!1,e),bn(n,e)}else{if(An(n,s))return;qm.set(s),r.uniformMatrix3fv(this.addr,!1,qm),bn(n,s)}}function s1(r,e){const n=this.cache,s=e.elements;if(s===void 0){if(An(n,e))return;r.uniformMatrix4fv(this.addr,!1,e),bn(n,e)}else{if(An(n,s))return;Ym.set(s),r.uniformMatrix4fv(this.addr,!1,Ym),bn(n,s)}}function o1(r,e){const n=this.cache;n[0]!==e&&(r.uniform1i(this.addr,e),n[0]=e)}function a1(r,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(r.uniform2i(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(An(n,e))return;r.uniform2iv(this.addr,e),bn(n,e)}}function l1(r,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(r.uniform3i(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(An(n,e))return;r.uniform3iv(this.addr,e),bn(n,e)}}function c1(r,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(r.uniform4i(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(An(n,e))return;r.uniform4iv(this.addr,e),bn(n,e)}}function u1(r,e){const n=this.cache;n[0]!==e&&(r.uniform1ui(this.addr,e),n[0]=e)}function d1(r,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(r.uniform2ui(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(An(n,e))return;r.uniform2uiv(this.addr,e),bn(n,e)}}function f1(r,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(r.uniform3ui(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(An(n,e))return;r.uniform3uiv(this.addr,e),bn(n,e)}}function h1(r,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(r.uniform4ui(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(An(n,e))return;r.uniform4uiv(this.addr,e),bn(n,e)}}function p1(r,e,n){const s=this.cache,a=n.allocateTextureUnit();s[0]!==a&&(r.uniform1i(this.addr,a),s[0]=a);let l;this.type===r.SAMPLER_2D_SHADOW?(af.compareFunction=n.isReversedDepthBuffer()?xf:vf,l=af):l=O0,n.setTexture2D(e||l,a)}function m1(r,e,n){const s=this.cache,a=n.allocateTextureUnit();s[0]!==a&&(r.uniform1i(this.addr,a),s[0]=a),n.setTexture3D(e||B0,a)}function g1(r,e,n){const s=this.cache,a=n.allocateTextureUnit();s[0]!==a&&(r.uniform1i(this.addr,a),s[0]=a),n.setTextureCube(e||z0,a)}function _1(r,e,n){const s=this.cache,a=n.allocateTextureUnit();s[0]!==a&&(r.uniform1i(this.addr,a),s[0]=a),n.setTexture2DArray(e||k0,a)}function v1(r){switch(r){case 5126:return Qy;case 35664:return e1;case 35665:return t1;case 35666:return n1;case 35674:return i1;case 35675:return r1;case 35676:return s1;case 5124:case 35670:return o1;case 35667:case 35671:return a1;case 35668:case 35672:return l1;case 35669:case 35673:return c1;case 5125:return u1;case 36294:return d1;case 36295:return f1;case 36296:return h1;case 35678:case 36198:case 36298:case 36306:case 35682:return p1;case 35679:case 36299:case 36307:return m1;case 35680:case 36300:case 36308:case 36293:return g1;case 36289:case 36303:case 36311:case 36292:return _1}}function x1(r,e){r.uniform1fv(this.addr,e)}function S1(r,e){const n=_o(e,this.size,2);r.uniform2fv(this.addr,n)}function y1(r,e){const n=_o(e,this.size,3);r.uniform3fv(this.addr,n)}function M1(r,e){const n=_o(e,this.size,4);r.uniform4fv(this.addr,n)}function E1(r,e){const n=_o(e,this.size,4);r.uniformMatrix2fv(this.addr,!1,n)}function w1(r,e){const n=_o(e,this.size,9);r.uniformMatrix3fv(this.addr,!1,n)}function T1(r,e){const n=_o(e,this.size,16);r.uniformMatrix4fv(this.addr,!1,n)}function A1(r,e){r.uniform1iv(this.addr,e)}function b1(r,e){r.uniform2iv(this.addr,e)}function C1(r,e){r.uniform3iv(this.addr,e)}function R1(r,e){r.uniform4iv(this.addr,e)}function P1(r,e){r.uniform1uiv(this.addr,e)}function L1(r,e){r.uniform2uiv(this.addr,e)}function D1(r,e){r.uniform3uiv(this.addr,e)}function I1(r,e){r.uniform4uiv(this.addr,e)}function N1(r,e,n){const s=this.cache,a=e.length,l=Ql(n,a);An(s,l)||(r.uniform1iv(this.addr,l),bn(s,l));let u;this.type===r.SAMPLER_2D_SHADOW?u=af:u=O0;for(let f=0;f!==a;++f)n.setTexture2D(e[f]||u,l[f])}function U1(r,e,n){const s=this.cache,a=e.length,l=Ql(n,a);An(s,l)||(r.uniform1iv(this.addr,l),bn(s,l));for(let u=0;u!==a;++u)n.setTexture3D(e[u]||B0,l[u])}function F1(r,e,n){const s=this.cache,a=e.length,l=Ql(n,a);An(s,l)||(r.uniform1iv(this.addr,l),bn(s,l));for(let u=0;u!==a;++u)n.setTextureCube(e[u]||z0,l[u])}function O1(r,e,n){const s=this.cache,a=e.length,l=Ql(n,a);An(s,l)||(r.uniform1iv(this.addr,l),bn(s,l));for(let u=0;u!==a;++u)n.setTexture2DArray(e[u]||k0,l[u])}function k1(r){switch(r){case 5126:return x1;case 35664:return S1;case 35665:return y1;case 35666:return M1;case 35674:return E1;case 35675:return w1;case 35676:return T1;case 5124:case 35670:return A1;case 35667:case 35671:return b1;case 35668:case 35672:return C1;case 35669:case 35673:return R1;case 5125:return P1;case 36294:return L1;case 36295:return D1;case 36296:return I1;case 35678:case 36198:case 36298:case 36306:case 35682:return N1;case 35679:case 36299:case 36307:return U1;case 35680:case 36300:case 36308:case 36293:return F1;case 36289:case 36303:case 36311:case 36292:return O1}}class B1{constructor(e,n,s){this.id=e,this.addr=s,this.cache=[],this.type=n.type,this.setValue=v1(n.type)}}class z1{constructor(e,n,s){this.id=e,this.addr=s,this.cache=[],this.type=n.type,this.size=n.size,this.setValue=k1(n.type)}}class H1{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,n,s){const a=this.seq;for(let l=0,u=a.length;l!==u;++l){const f=a[l];f.setValue(e,n[f.id],s)}}}const fd=/(\w+)(\])?(\[|\.)?/g;function Km(r,e){r.seq.push(e),r.map[e.id]=e}function V1(r,e,n){const s=r.name,a=s.length;for(fd.lastIndex=0;;){const l=fd.exec(s),u=fd.lastIndex;let f=l[1];const p=l[2]==="]",m=l[3];if(p&&(f=f|0),m===void 0||m==="["&&u+2===a){Km(n,m===void 0?new B1(f,r,e):new z1(f,r,e));break}else{let S=n.map[f];S===void 0&&(S=new H1(f),Km(n,S)),n=S}}}class Hl{constructor(e,n){this.seq=[],this.map={};const s=e.getProgramParameter(n,e.ACTIVE_UNIFORMS);for(let u=0;u<s;++u){const f=e.getActiveUniform(n,u),p=e.getUniformLocation(n,f.name);V1(f,p,this)}const a=[],l=[];for(const u of this.seq)u.type===e.SAMPLER_2D_SHADOW||u.type===e.SAMPLER_CUBE_SHADOW||u.type===e.SAMPLER_2D_ARRAY_SHADOW?a.push(u):l.push(u);a.length>0&&(this.seq=a.concat(l))}setValue(e,n,s,a){const l=this.map[n];l!==void 0&&l.setValue(e,s,a)}setOptional(e,n,s){const a=n[s];a!==void 0&&this.setValue(e,s,a)}static upload(e,n,s,a){for(let l=0,u=n.length;l!==u;++l){const f=n[l],p=s[f.id];p.needsUpdate!==!1&&f.setValue(e,p.value,a)}}static seqWithValue(e,n){const s=[];for(let a=0,l=e.length;a!==l;++a){const u=e[a];u.id in n&&s.push(u)}return s}}function Zm(r,e,n){const s=r.createShader(e);return r.shaderSource(s,n),r.compileShader(s),s}const G1=37297;let W1=0;function X1(r,e){const n=r.split(`
`),s=[],a=Math.max(e-6,0),l=Math.min(e+6,n.length);for(let u=a;u<l;u++){const f=u+1;s.push(`${f===e?">":" "} ${f}: ${n[u]}`)}return s.join(`
`)}const Jm=new Ct;function j1(r){zt._getMatrix(Jm,zt.workingColorSpace,r);const e=`mat3( ${Jm.elements.map(n=>n.toFixed(4))} )`;switch(zt.getTransfer(r)){case Xl:return[e,"LinearTransferOETF"];case Zt:return[e,"sRGBTransferOETF"];default:return Mt("WebGLProgram: Unsupported color space: ",r),[e,"LinearTransferOETF"]}}function Qm(r,e,n){const s=r.getShaderParameter(e,r.COMPILE_STATUS),l=(r.getShaderInfoLog(e)||"").trim();if(s&&l==="")return"";const u=/ERROR: 0:(\d+)/.exec(l);if(u){const f=parseInt(u[1]);return n.toUpperCase()+`

`+l+`

`+X1(r.getShaderSource(e),f)}else return l}function Y1(r,e){const n=j1(e);return[`vec4 ${r}( vec4 value ) {`,`	return ${n[1]}( vec4( value.rgb * ${n[0]}, value.a ) );`,"}"].join(`
`)}const q1={[c0]:"Linear",[u0]:"Reinhard",[d0]:"Cineon",[df]:"ACESFilmic",[h0]:"AgX",[p0]:"Neutral",[f0]:"Custom"};function $1(r,e){const n=q1[e];return n===void 0?(Mt("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+r+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+r+"( vec3 color ) { return "+n+"ToneMapping( color ); }"}const Fl=new J;function K1(){zt.getLuminanceCoefficients(Fl);const r=Fl.x.toFixed(4),e=Fl.y.toFixed(4),n=Fl.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${r}, ${e}, ${n} );`,"	return dot( weights, rgb );","}"].join(`
`)}function Z1(r){return[r.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",r.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(sa).join(`
`)}function J1(r){const e=[];for(const n in r){const s=r[n];s!==!1&&e.push("#define "+n+" "+s)}return e.join(`
`)}function Q1(r,e){const n={},s=r.getProgramParameter(e,r.ACTIVE_ATTRIBUTES);for(let a=0;a<s;a++){const l=r.getActiveAttrib(e,a),u=l.name;let f=1;l.type===r.FLOAT_MAT2&&(f=2),l.type===r.FLOAT_MAT3&&(f=3),l.type===r.FLOAT_MAT4&&(f=4),n[u]={type:l.type,location:r.getAttribLocation(e,u),locationSize:f}}return n}function sa(r){return r!==""}function e0(r,e){const n=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return r.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,n).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function t0(r,e){return r.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const eM=/^[ \t]*#include +<([\w\d./]+)>/gm;function lf(r){return r.replace(eM,nM)}const tM=new Map;function nM(r,e){let n=Lt[e];if(n===void 0){const s=tM.get(e);if(s!==void 0)n=Lt[s],Mt('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,s);else throw new Error("Can not resolve #include <"+e+">")}return lf(n)}const iM=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function n0(r){return r.replace(iM,rM)}function rM(r,e,n,s){let a="";for(let l=parseInt(e);l<parseInt(n);l++)a+=s.replace(/\[\s*i\s*\]/g,"[ "+l+" ]").replace(/UNROLLED_LOOP_INDEX/g,l);return a}function i0(r){let e=`precision ${r.precision} float;
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
#define LOW_PRECISION`),e}const sM={[oa]:"SHADOWMAP_TYPE_PCF",[ra]:"SHADOWMAP_TYPE_VSM"};function oM(r){return sM[r.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const aM={[Ss]:"ENVMAP_TYPE_CUBE",[fo]:"ENVMAP_TYPE_CUBE",[Zl]:"ENVMAP_TYPE_CUBE_UV"};function lM(r){return r.envMap===!1?"ENVMAP_TYPE_CUBE":aM[r.envMapMode]||"ENVMAP_TYPE_CUBE"}const cM={[fo]:"ENVMAP_MODE_REFRACTION"};function uM(r){return r.envMap===!1?"ENVMAP_MODE_REFLECTION":cM[r.envMapMode]||"ENVMAP_MODE_REFLECTION"}const dM={[l0]:"ENVMAP_BLENDING_MULTIPLY",[K_]:"ENVMAP_BLENDING_MIX",[Z_]:"ENVMAP_BLENDING_ADD"};function fM(r){return r.envMap===!1?"ENVMAP_BLENDING_NONE":dM[r.combine]||"ENVMAP_BLENDING_NONE"}function hM(r){const e=r.envMapCubeUVHeight;if(e===null)return null;const n=Math.log2(e)-2,s=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,n),112)),texelHeight:s,maxMip:n}}function pM(r,e,n,s){const a=r.getContext(),l=n.defines;let u=n.vertexShader,f=n.fragmentShader;const p=oM(n),m=lM(n),x=uM(n),S=fM(n),g=hM(n),y=Z1(n),T=J1(l),R=a.createProgram();let _,v,b=n.glslVersion?"#version "+n.glslVersion+`
`:"";n.isRawShaderMaterial?(_=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,T].filter(sa).join(`
`),_.length>0&&(_+=`
`),v=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,T].filter(sa).join(`
`),v.length>0&&(v+=`
`)):(_=[i0(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,T,n.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",n.batching?"#define USE_BATCHING":"",n.batchingColor?"#define USE_BATCHING_COLOR":"",n.instancing?"#define USE_INSTANCING":"",n.instancingColor?"#define USE_INSTANCING_COLOR":"",n.instancingMorph?"#define USE_INSTANCING_MORPH":"",n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.map?"#define USE_MAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+x:"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.displacementMap?"#define USE_DISPLACEMENTMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.mapUv?"#define MAP_UV "+n.mapUv:"",n.alphaMapUv?"#define ALPHAMAP_UV "+n.alphaMapUv:"",n.lightMapUv?"#define LIGHTMAP_UV "+n.lightMapUv:"",n.aoMapUv?"#define AOMAP_UV "+n.aoMapUv:"",n.emissiveMapUv?"#define EMISSIVEMAP_UV "+n.emissiveMapUv:"",n.bumpMapUv?"#define BUMPMAP_UV "+n.bumpMapUv:"",n.normalMapUv?"#define NORMALMAP_UV "+n.normalMapUv:"",n.displacementMapUv?"#define DISPLACEMENTMAP_UV "+n.displacementMapUv:"",n.metalnessMapUv?"#define METALNESSMAP_UV "+n.metalnessMapUv:"",n.roughnessMapUv?"#define ROUGHNESSMAP_UV "+n.roughnessMapUv:"",n.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+n.anisotropyMapUv:"",n.clearcoatMapUv?"#define CLEARCOATMAP_UV "+n.clearcoatMapUv:"",n.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+n.clearcoatNormalMapUv:"",n.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+n.clearcoatRoughnessMapUv:"",n.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+n.iridescenceMapUv:"",n.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+n.iridescenceThicknessMapUv:"",n.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+n.sheenColorMapUv:"",n.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+n.sheenRoughnessMapUv:"",n.specularMapUv?"#define SPECULARMAP_UV "+n.specularMapUv:"",n.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+n.specularColorMapUv:"",n.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+n.specularIntensityMapUv:"",n.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+n.transmissionMapUv:"",n.thicknessMapUv?"#define THICKNESSMAP_UV "+n.thicknessMapUv:"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexNormals?"#define HAS_NORMAL":"",n.vertexColors?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.flatShading?"#define FLAT_SHADED":"",n.skinning?"#define USE_SKINNING":"",n.morphTargets?"#define USE_MORPHTARGETS":"",n.morphNormals&&n.flatShading===!1?"#define USE_MORPHNORMALS":"",n.morphColors?"#define USE_MORPHCOLORS":"",n.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+n.morphTextureStride:"",n.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+n.morphTargetsCount:"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+p:"",n.sizeAttenuation?"#define USE_SIZEATTENUATION":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",n.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(sa).join(`
`),v=[i0(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,T,n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",n.map?"#define USE_MAP":"",n.matcap?"#define USE_MATCAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+m:"",n.envMap?"#define "+x:"",n.envMap?"#define "+S:"",g?"#define CUBEUV_TEXEL_WIDTH "+g.texelWidth:"",g?"#define CUBEUV_TEXEL_HEIGHT "+g.texelHeight:"",g?"#define CUBEUV_MAX_MIP "+g.maxMip+".0":"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoat?"#define USE_CLEARCOAT":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.dispersion?"#define USE_DISPERSION":"",n.iridescence?"#define USE_IRIDESCENCE":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaTest?"#define USE_ALPHATEST":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.sheen?"#define USE_SHEEN":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors||n.instancingColor?"#define USE_COLOR":"",n.vertexAlphas||n.batchingColor?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.gradientMap?"#define USE_GRADIENTMAP":"",n.flatShading?"#define FLAT_SHADED":"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+p:"",n.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",n.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",n.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",n.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",n.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",n.toneMapping!==Ki?"#define TONE_MAPPING":"",n.toneMapping!==Ki?Lt.tonemapping_pars_fragment:"",n.toneMapping!==Ki?$1("toneMapping",n.toneMapping):"",n.dithering?"#define DITHERING":"",n.opaque?"#define OPAQUE":"",Lt.colorspace_pars_fragment,Y1("linearToOutputTexel",n.outputColorSpace),K1(),n.useDepthPacking?"#define DEPTH_PACKING "+n.depthPacking:"",`
`].filter(sa).join(`
`)),u=lf(u),u=e0(u,n),u=t0(u,n),f=lf(f),f=e0(f,n),f=t0(f,n),u=n0(u),f=n0(f),n.isRawShaderMaterial!==!0&&(b=`#version 300 es
`,_=[y,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+_,v=["#define varying in",n.glslVersion===fm?"":"layout(location = 0) out highp vec4 pc_fragColor;",n.glslVersion===fm?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+v);const L=b+_+u,P=b+v+f,z=Zm(a,a.VERTEX_SHADER,L),D=Zm(a,a.FRAGMENT_SHADER,P);a.attachShader(R,z),a.attachShader(R,D),n.index0AttributeName!==void 0?a.bindAttribLocation(R,0,n.index0AttributeName):n.morphTargets===!0&&a.bindAttribLocation(R,0,"position"),a.linkProgram(R);function k(O){if(r.debug.checkShaderErrors){const q=a.getProgramInfoLog(R)||"",oe=a.getShaderInfoLog(z)||"",pe=a.getShaderInfoLog(D)||"",W=q.trim(),ee=oe.trim(),K=pe.trim();let Z=!0,ue=!0;if(a.getProgramParameter(R,a.LINK_STATUS)===!1)if(Z=!1,typeof r.debug.onShaderError=="function")r.debug.onShaderError(a,R,z,D);else{const de=Qm(a,z,"vertex"),F=Qm(a,D,"fragment");Gt("THREE.WebGLProgram: Shader Error "+a.getError()+" - VALIDATE_STATUS "+a.getProgramParameter(R,a.VALIDATE_STATUS)+`

Material Name: `+O.name+`
Material Type: `+O.type+`

Program Info Log: `+W+`
`+de+`
`+F)}else W!==""?Mt("WebGLProgram: Program Info Log:",W):(ee===""||K==="")&&(ue=!1);ue&&(O.diagnostics={runnable:Z,programLog:W,vertexShader:{log:ee,prefix:_},fragmentShader:{log:K,prefix:v}})}a.deleteShader(z),a.deleteShader(D),w=new Hl(a,R),I=Q1(a,R)}let w;this.getUniforms=function(){return w===void 0&&k(this),w};let I;this.getAttributes=function(){return I===void 0&&k(this),I};let j=n.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return j===!1&&(j=a.getProgramParameter(R,G1)),j},this.destroy=function(){s.releaseStatesOfProgram(this),a.deleteProgram(R),this.program=void 0},this.type=n.shaderType,this.name=n.shaderName,this.id=W1++,this.cacheKey=e,this.usedTimes=1,this.program=R,this.vertexShader=z,this.fragmentShader=D,this}let mM=0;class gM{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const n=e.vertexShader,s=e.fragmentShader,a=this._getShaderStage(n),l=this._getShaderStage(s),u=this._getShaderCacheForMaterial(e);return u.has(a)===!1&&(u.add(a),a.usedTimes++),u.has(l)===!1&&(u.add(l),l.usedTimes++),this}remove(e){const n=this.materialCache.get(e);for(const s of n)s.usedTimes--,s.usedTimes===0&&this.shaderCache.delete(s.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const n=this.materialCache;let s=n.get(e);return s===void 0&&(s=new Set,n.set(e,s)),s}_getShaderStage(e){const n=this.shaderCache;let s=n.get(e);return s===void 0&&(s=new _M(e),n.set(e,s)),s}}class _M{constructor(e){this.id=mM++,this.code=e,this.usedTimes=0}}function vM(r){return r===ys||r===Vl||r===Gl}function xM(r,e,n,s,a,l){const u=new yf,f=new gM,p=new Set,m=[],x=new Map,S=s.logarithmicDepthBuffer;let g=s.precision;const y={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function T(w){return p.add(w),w===0?"uv":`uv${w}`}function R(w,I,j,O,q,oe){const pe=O.fog,W=q.geometry,ee=w.isMeshStandardMaterial||w.isMeshLambertMaterial||w.isMeshPhongMaterial?O.environment:null,K=w.isMeshStandardMaterial||w.isMeshLambertMaterial&&!w.envMap||w.isMeshPhongMaterial&&!w.envMap,Z=e.get(w.envMap||ee,K),ue=Z&&Z.mapping===Zl?Z.image.height:null,de=y[w.type];w.precision!==null&&(g=s.getMaxPrecision(w.precision),g!==w.precision&&Mt("WebGLProgram.getParameters:",w.precision,"not supported, using",g,"instead."));const F=W.morphAttributes.position||W.morphAttributes.normal||W.morphAttributes.color,te=F!==void 0?F.length:0;let je=0;W.morphAttributes.position!==void 0&&(je=1),W.morphAttributes.normal!==void 0&&(je=2),W.morphAttributes.color!==void 0&&(je=3);let De,Ye,ae,Te;if(de){const pt=ji[de];De=pt.vertexShader,Ye=pt.fragmentShader}else De=w.vertexShader,Ye=w.fragmentShader,f.update(w),ae=f.getVertexShaderID(w),Te=f.getFragmentShaderID(w);const ye=r.getRenderTarget(),Ge=r.state.buffers.depth.getReversed(),st=q.isInstancedMesh===!0,ot=q.isBatchedMesh===!0,Ft=!!w.map,ht=!!w.matcap,Pt=!!Z,kt=!!w.aoMap,dt=!!w.lightMap,Xt=!!w.bumpMap,Yt=!!w.normalMap,Qt=!!w.displacementMap,G=!!w.emissiveMap,he=!!w.metalnessMap,N=!!w.roughnessMap,_t=w.anisotropy>0,Fe=w.clearcoat>0,Rt=w.dispersion>0,C=w.iridescence>0,M=w.sheen>0,Y=w.transmission>0,me=_t&&!!w.anisotropyMap,Ee=Fe&&!!w.clearcoatMap,be=Fe&&!!w.clearcoatNormalMap,Pe=Fe&&!!w.clearcoatRoughnessMap,fe=C&&!!w.iridescenceMap,xe=C&&!!w.iridescenceThicknessMap,Ve=M&&!!w.sheenColorMap,$e=M&&!!w.sheenRoughnessMap,Oe=!!w.specularMap,Ie=!!w.specularColorMap,ft=!!w.specularIntensityMap,vt=Y&&!!w.transmissionMap,xt=Y&&!!w.thicknessMap,B=!!w.gradientMap,Ne=!!w.alphaMap,ve=w.alphaTest>0,qe=!!w.alphaHash,ke=!!w.extensions;let we=Ki;w.toneMapped&&(ye===null||ye.isXRRenderTarget===!0)&&(we=r.toneMapping);const Xe={shaderID:de,shaderType:w.type,shaderName:w.name,vertexShader:De,fragmentShader:Ye,defines:w.defines,customVertexShaderID:ae,customFragmentShaderID:Te,isRawShaderMaterial:w.isRawShaderMaterial===!0,glslVersion:w.glslVersion,precision:g,batching:ot,batchingColor:ot&&q._colorsTexture!==null,instancing:st,instancingColor:st&&q.instanceColor!==null,instancingMorph:st&&q.morphTexture!==null,outputColorSpace:ye===null?r.outputColorSpace:ye.isXRRenderTarget===!0?ye.texture.colorSpace:zt.workingColorSpace,alphaToCoverage:!!w.alphaToCoverage,map:Ft,matcap:ht,envMap:Pt,envMapMode:Pt&&Z.mapping,envMapCubeUVHeight:ue,aoMap:kt,lightMap:dt,bumpMap:Xt,normalMap:Yt,displacementMap:Qt,emissiveMap:G,normalMapObjectSpace:Yt&&w.normalMapType===ev,normalMapTangentSpace:Yt&&w.normalMapType===nf,packedNormalMap:Yt&&w.normalMapType===nf&&vM(w.normalMap.format),metalnessMap:he,roughnessMap:N,anisotropy:_t,anisotropyMap:me,clearcoat:Fe,clearcoatMap:Ee,clearcoatNormalMap:be,clearcoatRoughnessMap:Pe,dispersion:Rt,iridescence:C,iridescenceMap:fe,iridescenceThicknessMap:xe,sheen:M,sheenColorMap:Ve,sheenRoughnessMap:$e,specularMap:Oe,specularColorMap:Ie,specularIntensityMap:ft,transmission:Y,transmissionMap:vt,thicknessMap:xt,gradientMap:B,opaque:w.transparent===!1&&w.blending===lo&&w.alphaToCoverage===!1,alphaMap:Ne,alphaTest:ve,alphaHash:qe,combine:w.combine,mapUv:Ft&&T(w.map.channel),aoMapUv:kt&&T(w.aoMap.channel),lightMapUv:dt&&T(w.lightMap.channel),bumpMapUv:Xt&&T(w.bumpMap.channel),normalMapUv:Yt&&T(w.normalMap.channel),displacementMapUv:Qt&&T(w.displacementMap.channel),emissiveMapUv:G&&T(w.emissiveMap.channel),metalnessMapUv:he&&T(w.metalnessMap.channel),roughnessMapUv:N&&T(w.roughnessMap.channel),anisotropyMapUv:me&&T(w.anisotropyMap.channel),clearcoatMapUv:Ee&&T(w.clearcoatMap.channel),clearcoatNormalMapUv:be&&T(w.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Pe&&T(w.clearcoatRoughnessMap.channel),iridescenceMapUv:fe&&T(w.iridescenceMap.channel),iridescenceThicknessMapUv:xe&&T(w.iridescenceThicknessMap.channel),sheenColorMapUv:Ve&&T(w.sheenColorMap.channel),sheenRoughnessMapUv:$e&&T(w.sheenRoughnessMap.channel),specularMapUv:Oe&&T(w.specularMap.channel),specularColorMapUv:Ie&&T(w.specularColorMap.channel),specularIntensityMapUv:ft&&T(w.specularIntensityMap.channel),transmissionMapUv:vt&&T(w.transmissionMap.channel),thicknessMapUv:xt&&T(w.thicknessMap.channel),alphaMapUv:Ne&&T(w.alphaMap.channel),vertexTangents:!!W.attributes.tangent&&(Yt||_t),vertexNormals:!!W.attributes.normal,vertexColors:w.vertexColors,vertexAlphas:w.vertexColors===!0&&!!W.attributes.color&&W.attributes.color.itemSize===4,pointsUvs:q.isPoints===!0&&!!W.attributes.uv&&(Ft||Ne),fog:!!pe,useFog:w.fog===!0,fogExp2:!!pe&&pe.isFogExp2,flatShading:w.wireframe===!1&&(w.flatShading===!0||W.attributes.normal===void 0&&Yt===!1&&(w.isMeshLambertMaterial||w.isMeshPhongMaterial||w.isMeshStandardMaterial||w.isMeshPhysicalMaterial)),sizeAttenuation:w.sizeAttenuation===!0,logarithmicDepthBuffer:S,reversedDepthBuffer:Ge,skinning:q.isSkinnedMesh===!0,morphTargets:W.morphAttributes.position!==void 0,morphNormals:W.morphAttributes.normal!==void 0,morphColors:W.morphAttributes.color!==void 0,morphTargetsCount:te,morphTextureStride:je,numDirLights:I.directional.length,numPointLights:I.point.length,numSpotLights:I.spot.length,numSpotLightMaps:I.spotLightMap.length,numRectAreaLights:I.rectArea.length,numHemiLights:I.hemi.length,numDirLightShadows:I.directionalShadowMap.length,numPointLightShadows:I.pointShadowMap.length,numSpotLightShadows:I.spotShadowMap.length,numSpotLightShadowsWithMaps:I.numSpotLightShadowsWithMaps,numLightProbes:I.numLightProbes,numLightProbeGrids:oe.length,numClippingPlanes:l.numPlanes,numClipIntersection:l.numIntersection,dithering:w.dithering,shadowMapEnabled:r.shadowMap.enabled&&j.length>0,shadowMapType:r.shadowMap.type,toneMapping:we,decodeVideoTexture:Ft&&w.map.isVideoTexture===!0&&zt.getTransfer(w.map.colorSpace)===Zt,decodeVideoTextureEmissive:G&&w.emissiveMap.isVideoTexture===!0&&zt.getTransfer(w.emissiveMap.colorSpace)===Zt,premultipliedAlpha:w.premultipliedAlpha,doubleSided:w.side===Ti,flipSided:w.side===li,useDepthPacking:w.depthPacking>=0,depthPacking:w.depthPacking||0,index0AttributeName:w.index0AttributeName,extensionClipCullDistance:ke&&w.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(ke&&w.extensions.multiDraw===!0||ot)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:w.customProgramCacheKey()};return Xe.vertexUv1s=p.has(1),Xe.vertexUv2s=p.has(2),Xe.vertexUv3s=p.has(3),p.clear(),Xe}function _(w){const I=[];if(w.shaderID?I.push(w.shaderID):(I.push(w.customVertexShaderID),I.push(w.customFragmentShaderID)),w.defines!==void 0)for(const j in w.defines)I.push(j),I.push(w.defines[j]);return w.isRawShaderMaterial===!1&&(v(I,w),b(I,w),I.push(r.outputColorSpace)),I.push(w.customProgramCacheKey),I.join()}function v(w,I){w.push(I.precision),w.push(I.outputColorSpace),w.push(I.envMapMode),w.push(I.envMapCubeUVHeight),w.push(I.mapUv),w.push(I.alphaMapUv),w.push(I.lightMapUv),w.push(I.aoMapUv),w.push(I.bumpMapUv),w.push(I.normalMapUv),w.push(I.displacementMapUv),w.push(I.emissiveMapUv),w.push(I.metalnessMapUv),w.push(I.roughnessMapUv),w.push(I.anisotropyMapUv),w.push(I.clearcoatMapUv),w.push(I.clearcoatNormalMapUv),w.push(I.clearcoatRoughnessMapUv),w.push(I.iridescenceMapUv),w.push(I.iridescenceThicknessMapUv),w.push(I.sheenColorMapUv),w.push(I.sheenRoughnessMapUv),w.push(I.specularMapUv),w.push(I.specularColorMapUv),w.push(I.specularIntensityMapUv),w.push(I.transmissionMapUv),w.push(I.thicknessMapUv),w.push(I.combine),w.push(I.fogExp2),w.push(I.sizeAttenuation),w.push(I.morphTargetsCount),w.push(I.morphAttributeCount),w.push(I.numDirLights),w.push(I.numPointLights),w.push(I.numSpotLights),w.push(I.numSpotLightMaps),w.push(I.numHemiLights),w.push(I.numRectAreaLights),w.push(I.numDirLightShadows),w.push(I.numPointLightShadows),w.push(I.numSpotLightShadows),w.push(I.numSpotLightShadowsWithMaps),w.push(I.numLightProbes),w.push(I.shadowMapType),w.push(I.toneMapping),w.push(I.numClippingPlanes),w.push(I.numClipIntersection),w.push(I.depthPacking)}function b(w,I){u.disableAll(),I.instancing&&u.enable(0),I.instancingColor&&u.enable(1),I.instancingMorph&&u.enable(2),I.matcap&&u.enable(3),I.envMap&&u.enable(4),I.normalMapObjectSpace&&u.enable(5),I.normalMapTangentSpace&&u.enable(6),I.clearcoat&&u.enable(7),I.iridescence&&u.enable(8),I.alphaTest&&u.enable(9),I.vertexColors&&u.enable(10),I.vertexAlphas&&u.enable(11),I.vertexUv1s&&u.enable(12),I.vertexUv2s&&u.enable(13),I.vertexUv3s&&u.enable(14),I.vertexTangents&&u.enable(15),I.anisotropy&&u.enable(16),I.alphaHash&&u.enable(17),I.batching&&u.enable(18),I.dispersion&&u.enable(19),I.batchingColor&&u.enable(20),I.gradientMap&&u.enable(21),I.packedNormalMap&&u.enable(22),I.vertexNormals&&u.enable(23),w.push(u.mask),u.disableAll(),I.fog&&u.enable(0),I.useFog&&u.enable(1),I.flatShading&&u.enable(2),I.logarithmicDepthBuffer&&u.enable(3),I.reversedDepthBuffer&&u.enable(4),I.skinning&&u.enable(5),I.morphTargets&&u.enable(6),I.morphNormals&&u.enable(7),I.morphColors&&u.enable(8),I.premultipliedAlpha&&u.enable(9),I.shadowMapEnabled&&u.enable(10),I.doubleSided&&u.enable(11),I.flipSided&&u.enable(12),I.useDepthPacking&&u.enable(13),I.dithering&&u.enable(14),I.transmission&&u.enable(15),I.sheen&&u.enable(16),I.opaque&&u.enable(17),I.pointsUvs&&u.enable(18),I.decodeVideoTexture&&u.enable(19),I.decodeVideoTextureEmissive&&u.enable(20),I.alphaToCoverage&&u.enable(21),I.numLightProbeGrids>0&&u.enable(22),w.push(u.mask)}function L(w){const I=y[w.type];let j;if(I){const O=ji[I];j=kv.clone(O.uniforms)}else j=w.uniforms;return j}function P(w,I){let j=x.get(I);return j!==void 0?++j.usedTimes:(j=new pM(r,I,w,a),m.push(j),x.set(I,j)),j}function z(w){if(--w.usedTimes===0){const I=m.indexOf(w);m[I]=m[m.length-1],m.pop(),x.delete(w.cacheKey),w.destroy()}}function D(w){f.remove(w)}function k(){f.dispose()}return{getParameters:R,getProgramCacheKey:_,getUniforms:L,acquireProgram:P,releaseProgram:z,releaseShaderCache:D,programs:m,dispose:k}}function SM(){let r=new WeakMap;function e(u){return r.has(u)}function n(u){let f=r.get(u);return f===void 0&&(f={},r.set(u,f)),f}function s(u){r.delete(u)}function a(u,f,p){r.get(u)[f]=p}function l(){r=new WeakMap}return{has:e,get:n,remove:s,update:a,dispose:l}}function yM(r,e){return r.groupOrder!==e.groupOrder?r.groupOrder-e.groupOrder:r.renderOrder!==e.renderOrder?r.renderOrder-e.renderOrder:r.material.id!==e.material.id?r.material.id-e.material.id:r.materialVariant!==e.materialVariant?r.materialVariant-e.materialVariant:r.z!==e.z?r.z-e.z:r.id-e.id}function r0(r,e){return r.groupOrder!==e.groupOrder?r.groupOrder-e.groupOrder:r.renderOrder!==e.renderOrder?r.renderOrder-e.renderOrder:r.z!==e.z?e.z-r.z:r.id-e.id}function s0(){const r=[];let e=0;const n=[],s=[],a=[];function l(){e=0,n.length=0,s.length=0,a.length=0}function u(g){let y=0;return g.isInstancedMesh&&(y+=2),g.isSkinnedMesh&&(y+=1),y}function f(g,y,T,R,_,v){let b=r[e];return b===void 0?(b={id:g.id,object:g,geometry:y,material:T,materialVariant:u(g),groupOrder:R,renderOrder:g.renderOrder,z:_,group:v},r[e]=b):(b.id=g.id,b.object=g,b.geometry=y,b.material=T,b.materialVariant=u(g),b.groupOrder=R,b.renderOrder=g.renderOrder,b.z=_,b.group=v),e++,b}function p(g,y,T,R,_,v){const b=f(g,y,T,R,_,v);T.transmission>0?s.push(b):T.transparent===!0?a.push(b):n.push(b)}function m(g,y,T,R,_,v){const b=f(g,y,T,R,_,v);T.transmission>0?s.unshift(b):T.transparent===!0?a.unshift(b):n.unshift(b)}function x(g,y){n.length>1&&n.sort(g||yM),s.length>1&&s.sort(y||r0),a.length>1&&a.sort(y||r0)}function S(){for(let g=e,y=r.length;g<y;g++){const T=r[g];if(T.id===null)break;T.id=null,T.object=null,T.geometry=null,T.material=null,T.group=null}}return{opaque:n,transmissive:s,transparent:a,init:l,push:p,unshift:m,finish:S,sort:x}}function MM(){let r=new WeakMap;function e(s,a){const l=r.get(s);let u;return l===void 0?(u=new s0,r.set(s,[u])):a>=l.length?(u=new s0,l.push(u)):u=l[a],u}function n(){r=new WeakMap}return{get:e,dispose:n}}function EM(){const r={};return{get:function(e){if(r[e.id]!==void 0)return r[e.id];let n;switch(e.type){case"DirectionalLight":n={direction:new J,color:new Dt};break;case"SpotLight":n={position:new J,direction:new J,color:new Dt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":n={position:new J,color:new Dt,distance:0,decay:0};break;case"HemisphereLight":n={direction:new J,skyColor:new Dt,groundColor:new Dt};break;case"RectAreaLight":n={color:new Dt,position:new J,halfWidth:new J,halfHeight:new J};break}return r[e.id]=n,n}}}function wM(){const r={};return{get:function(e){if(r[e.id]!==void 0)return r[e.id];let n;switch(e.type){case"DirectionalLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ht};break;case"SpotLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ht};break;case"PointLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ht,shadowCameraNear:1,shadowCameraFar:1e3};break}return r[e.id]=n,n}}}let TM=0;function AM(r,e){return(e.castShadow?2:0)-(r.castShadow?2:0)+(e.map?1:0)-(r.map?1:0)}function bM(r){const e=new EM,n=wM(),s={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let m=0;m<9;m++)s.probe.push(new J);const a=new J,l=new gn,u=new gn;function f(m){let x=0,S=0,g=0;for(let I=0;I<9;I++)s.probe[I].set(0,0,0);let y=0,T=0,R=0,_=0,v=0,b=0,L=0,P=0,z=0,D=0,k=0;m.sort(AM);for(let I=0,j=m.length;I<j;I++){const O=m[I],q=O.color,oe=O.intensity,pe=O.distance;let W=null;if(O.shadow&&O.shadow.map&&(O.shadow.map.texture.format===ys?W=O.shadow.map.texture:W=O.shadow.map.depthTexture||O.shadow.map.texture),O.isAmbientLight)x+=q.r*oe,S+=q.g*oe,g+=q.b*oe;else if(O.isLightProbe){for(let ee=0;ee<9;ee++)s.probe[ee].addScaledVector(O.sh.coefficients[ee],oe);k++}else if(O.isDirectionalLight){const ee=e.get(O);if(ee.color.copy(O.color).multiplyScalar(O.intensity),O.castShadow){const K=O.shadow,Z=n.get(O);Z.shadowIntensity=K.intensity,Z.shadowBias=K.bias,Z.shadowNormalBias=K.normalBias,Z.shadowRadius=K.radius,Z.shadowMapSize=K.mapSize,s.directionalShadow[y]=Z,s.directionalShadowMap[y]=W,s.directionalShadowMatrix[y]=O.shadow.matrix,b++}s.directional[y]=ee,y++}else if(O.isSpotLight){const ee=e.get(O);ee.position.setFromMatrixPosition(O.matrixWorld),ee.color.copy(q).multiplyScalar(oe),ee.distance=pe,ee.coneCos=Math.cos(O.angle),ee.penumbraCos=Math.cos(O.angle*(1-O.penumbra)),ee.decay=O.decay,s.spot[R]=ee;const K=O.shadow;if(O.map&&(s.spotLightMap[z]=O.map,z++,K.updateMatrices(O),O.castShadow&&D++),s.spotLightMatrix[R]=K.matrix,O.castShadow){const Z=n.get(O);Z.shadowIntensity=K.intensity,Z.shadowBias=K.bias,Z.shadowNormalBias=K.normalBias,Z.shadowRadius=K.radius,Z.shadowMapSize=K.mapSize,s.spotShadow[R]=Z,s.spotShadowMap[R]=W,P++}R++}else if(O.isRectAreaLight){const ee=e.get(O);ee.color.copy(q).multiplyScalar(oe),ee.halfWidth.set(O.width*.5,0,0),ee.halfHeight.set(0,O.height*.5,0),s.rectArea[_]=ee,_++}else if(O.isPointLight){const ee=e.get(O);if(ee.color.copy(O.color).multiplyScalar(O.intensity),ee.distance=O.distance,ee.decay=O.decay,O.castShadow){const K=O.shadow,Z=n.get(O);Z.shadowIntensity=K.intensity,Z.shadowBias=K.bias,Z.shadowNormalBias=K.normalBias,Z.shadowRadius=K.radius,Z.shadowMapSize=K.mapSize,Z.shadowCameraNear=K.camera.near,Z.shadowCameraFar=K.camera.far,s.pointShadow[T]=Z,s.pointShadowMap[T]=W,s.pointShadowMatrix[T]=O.shadow.matrix,L++}s.point[T]=ee,T++}else if(O.isHemisphereLight){const ee=e.get(O);ee.skyColor.copy(O.color).multiplyScalar(oe),ee.groundColor.copy(O.groundColor).multiplyScalar(oe),s.hemi[v]=ee,v++}}_>0&&(r.has("OES_texture_float_linear")===!0?(s.rectAreaLTC1=Ke.LTC_FLOAT_1,s.rectAreaLTC2=Ke.LTC_FLOAT_2):(s.rectAreaLTC1=Ke.LTC_HALF_1,s.rectAreaLTC2=Ke.LTC_HALF_2)),s.ambient[0]=x,s.ambient[1]=S,s.ambient[2]=g;const w=s.hash;(w.directionalLength!==y||w.pointLength!==T||w.spotLength!==R||w.rectAreaLength!==_||w.hemiLength!==v||w.numDirectionalShadows!==b||w.numPointShadows!==L||w.numSpotShadows!==P||w.numSpotMaps!==z||w.numLightProbes!==k)&&(s.directional.length=y,s.spot.length=R,s.rectArea.length=_,s.point.length=T,s.hemi.length=v,s.directionalShadow.length=b,s.directionalShadowMap.length=b,s.pointShadow.length=L,s.pointShadowMap.length=L,s.spotShadow.length=P,s.spotShadowMap.length=P,s.directionalShadowMatrix.length=b,s.pointShadowMatrix.length=L,s.spotLightMatrix.length=P+z-D,s.spotLightMap.length=z,s.numSpotLightShadowsWithMaps=D,s.numLightProbes=k,w.directionalLength=y,w.pointLength=T,w.spotLength=R,w.rectAreaLength=_,w.hemiLength=v,w.numDirectionalShadows=b,w.numPointShadows=L,w.numSpotShadows=P,w.numSpotMaps=z,w.numLightProbes=k,s.version=TM++)}function p(m,x){let S=0,g=0,y=0,T=0,R=0;const _=x.matrixWorldInverse;for(let v=0,b=m.length;v<b;v++){const L=m[v];if(L.isDirectionalLight){const P=s.directional[S];P.direction.setFromMatrixPosition(L.matrixWorld),a.setFromMatrixPosition(L.target.matrixWorld),P.direction.sub(a),P.direction.transformDirection(_),S++}else if(L.isSpotLight){const P=s.spot[y];P.position.setFromMatrixPosition(L.matrixWorld),P.position.applyMatrix4(_),P.direction.setFromMatrixPosition(L.matrixWorld),a.setFromMatrixPosition(L.target.matrixWorld),P.direction.sub(a),P.direction.transformDirection(_),y++}else if(L.isRectAreaLight){const P=s.rectArea[T];P.position.setFromMatrixPosition(L.matrixWorld),P.position.applyMatrix4(_),u.identity(),l.copy(L.matrixWorld),l.premultiply(_),u.extractRotation(l),P.halfWidth.set(L.width*.5,0,0),P.halfHeight.set(0,L.height*.5,0),P.halfWidth.applyMatrix4(u),P.halfHeight.applyMatrix4(u),T++}else if(L.isPointLight){const P=s.point[g];P.position.setFromMatrixPosition(L.matrixWorld),P.position.applyMatrix4(_),g++}else if(L.isHemisphereLight){const P=s.hemi[R];P.direction.setFromMatrixPosition(L.matrixWorld),P.direction.transformDirection(_),R++}}}return{setup:f,setupView:p,state:s}}function o0(r){const e=new bM(r),n=[],s=[],a=[];function l(g){S.camera=g,n.length=0,s.length=0,a.length=0}function u(g){n.push(g)}function f(g){s.push(g)}function p(g){a.push(g)}function m(){e.setup(n)}function x(g){e.setupView(n,g)}const S={lightsArray:n,shadowsArray:s,lightProbeGridArray:a,camera:null,lights:e,transmissionRenderTarget:{},textureUnits:0};return{init:l,state:S,setupLights:m,setupLightsView:x,pushLight:u,pushShadow:f,pushLightProbeGrid:p}}function CM(r){let e=new WeakMap;function n(a,l=0){const u=e.get(a);let f;return u===void 0?(f=new o0(r),e.set(a,[f])):l>=u.length?(f=new o0(r),u.push(f)):f=u[l],f}function s(){e=new WeakMap}return{get:n,dispose:s}}const RM=`void main() {
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
}`,LM=[new J(1,0,0),new J(-1,0,0),new J(0,1,0),new J(0,-1,0),new J(0,0,1),new J(0,0,-1)],DM=[new J(0,-1,0),new J(0,-1,0),new J(0,0,1),new J(0,0,-1),new J(0,-1,0),new J(0,-1,0)],a0=new gn,ia=new J,hd=new J;function IM(r,e,n){let s=new wf;const a=new Ht,l=new Ht,u=new mn,f=new Gv,p=new Wv,m={},x=n.maxTextureSize,S={[$r]:li,[li]:$r,[Ti]:Ti},g=new er({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Ht},radius:{value:4}},vertexShader:RM,fragmentShader:PM}),y=g.clone();y.defines.HORIZONTAL_PASS=1;const T=new _i;T.setAttribute("position",new Ji(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const R=new Ae(T,g),_=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=oa;let v=this.type;this.render=function(D,k,w){if(_.enabled===!1||_.autoUpdate===!1&&_.needsUpdate===!1||D.length===0)return;this.type===L_&&(Mt("WebGLShadowMap: PCFSoftShadowMap has been deprecated. Using PCFShadowMap instead."),this.type=oa);const I=r.getRenderTarget(),j=r.getActiveCubeFace(),O=r.getActiveMipmapLevel(),q=r.state;q.setBlending(_r),q.buffers.depth.getReversed()===!0?q.buffers.color.setClear(0,0,0,0):q.buffers.color.setClear(1,1,1,1),q.buffers.depth.setTest(!0),q.setScissorTest(!1);const oe=v!==this.type;oe&&k.traverse(function(pe){pe.material&&(Array.isArray(pe.material)?pe.material.forEach(W=>W.needsUpdate=!0):pe.material.needsUpdate=!0)});for(let pe=0,W=D.length;pe<W;pe++){const ee=D[pe],K=ee.shadow;if(K===void 0){Mt("WebGLShadowMap:",ee,"has no shadow.");continue}if(K.autoUpdate===!1&&K.needsUpdate===!1)continue;a.copy(K.mapSize);const Z=K.getFrameExtents();a.multiply(Z),l.copy(K.mapSize),(a.x>x||a.y>x)&&(a.x>x&&(l.x=Math.floor(x/Z.x),a.x=l.x*Z.x,K.mapSize.x=l.x),a.y>x&&(l.y=Math.floor(x/Z.y),a.y=l.y*Z.y,K.mapSize.y=l.y));const ue=r.state.buffers.depth.getReversed();if(K.camera._reversedDepth=ue,K.map===null||oe===!0){if(K.map!==null&&(K.map.depthTexture!==null&&(K.map.depthTexture.dispose(),K.map.depthTexture=null),K.map.dispose()),this.type===ra){if(ee.isPointLight){Mt("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}K.map=new Zi(a.x,a.y,{format:ys,type:xr,minFilter:jn,magFilter:jn,generateMipmaps:!1}),K.map.texture.name=ee.name+".shadowMap",K.map.depthTexture=new ho(a.x,a.y,Yi),K.map.depthTexture.name=ee.name+".shadowMapDepth",K.map.depthTexture.format=Sr,K.map.depthTexture.compareFunction=null,K.map.depthTexture.minFilter=Bn,K.map.depthTexture.magFilter=Bn}else ee.isPointLight?(K.map=new F0(a.x),K.map.depthTexture=new Fv(a.x,Qi)):(K.map=new Zi(a.x,a.y),K.map.depthTexture=new ho(a.x,a.y,Qi)),K.map.depthTexture.name=ee.name+".shadowMap",K.map.depthTexture.format=Sr,this.type===oa?(K.map.depthTexture.compareFunction=ue?xf:vf,K.map.depthTexture.minFilter=jn,K.map.depthTexture.magFilter=jn):(K.map.depthTexture.compareFunction=null,K.map.depthTexture.minFilter=Bn,K.map.depthTexture.magFilter=Bn);K.camera.updateProjectionMatrix()}const de=K.map.isWebGLCubeRenderTarget?6:1;for(let F=0;F<de;F++){if(K.map.isWebGLCubeRenderTarget)r.setRenderTarget(K.map,F),r.clear();else{F===0&&(r.setRenderTarget(K.map),r.clear());const te=K.getViewport(F);u.set(l.x*te.x,l.y*te.y,l.x*te.z,l.y*te.w),q.viewport(u)}if(ee.isPointLight){const te=K.camera,je=K.matrix,De=ee.distance||te.far;De!==te.far&&(te.far=De,te.updateProjectionMatrix()),ia.setFromMatrixPosition(ee.matrixWorld),te.position.copy(ia),hd.copy(te.position),hd.add(LM[F]),te.up.copy(DM[F]),te.lookAt(hd),te.updateMatrixWorld(),je.makeTranslation(-ia.x,-ia.y,-ia.z),a0.multiplyMatrices(te.projectionMatrix,te.matrixWorldInverse),K._frustum.setFromProjectionMatrix(a0,te.coordinateSystem,te.reversedDepth)}else K.updateMatrices(ee);s=K.getFrustum(),P(k,w,K.camera,ee,this.type)}K.isPointLightShadow!==!0&&this.type===ra&&b(K,w),K.needsUpdate=!1}v=this.type,_.needsUpdate=!1,r.setRenderTarget(I,j,O)};function b(D,k){const w=e.update(R);g.defines.VSM_SAMPLES!==D.blurSamples&&(g.defines.VSM_SAMPLES=D.blurSamples,y.defines.VSM_SAMPLES=D.blurSamples,g.needsUpdate=!0,y.needsUpdate=!0),D.mapPass===null&&(D.mapPass=new Zi(a.x,a.y,{format:ys,type:xr})),g.uniforms.shadow_pass.value=D.map.depthTexture,g.uniforms.resolution.value=D.mapSize,g.uniforms.radius.value=D.radius,r.setRenderTarget(D.mapPass),r.clear(),r.renderBufferDirect(k,null,w,g,R,null),y.uniforms.shadow_pass.value=D.mapPass.texture,y.uniforms.resolution.value=D.mapSize,y.uniforms.radius.value=D.radius,r.setRenderTarget(D.map),r.clear(),r.renderBufferDirect(k,null,w,y,R,null)}function L(D,k,w,I){let j=null;const O=w.isPointLight===!0?D.customDistanceMaterial:D.customDepthMaterial;if(O!==void 0)j=O;else if(j=w.isPointLight===!0?p:f,r.localClippingEnabled&&k.clipShadows===!0&&Array.isArray(k.clippingPlanes)&&k.clippingPlanes.length!==0||k.displacementMap&&k.displacementScale!==0||k.alphaMap&&k.alphaTest>0||k.map&&k.alphaTest>0||k.alphaToCoverage===!0){const q=j.uuid,oe=k.uuid;let pe=m[q];pe===void 0&&(pe={},m[q]=pe);let W=pe[oe];W===void 0&&(W=j.clone(),pe[oe]=W,k.addEventListener("dispose",z)),j=W}if(j.visible=k.visible,j.wireframe=k.wireframe,I===ra?j.side=k.shadowSide!==null?k.shadowSide:k.side:j.side=k.shadowSide!==null?k.shadowSide:S[k.side],j.alphaMap=k.alphaMap,j.alphaTest=k.alphaToCoverage===!0?.5:k.alphaTest,j.map=k.map,j.clipShadows=k.clipShadows,j.clippingPlanes=k.clippingPlanes,j.clipIntersection=k.clipIntersection,j.displacementMap=k.displacementMap,j.displacementScale=k.displacementScale,j.displacementBias=k.displacementBias,j.wireframeLinewidth=k.wireframeLinewidth,j.linewidth=k.linewidth,w.isPointLight===!0&&j.isMeshDistanceMaterial===!0){const q=r.properties.get(j);q.light=w}return j}function P(D,k,w,I,j){if(D.visible===!1)return;if(D.layers.test(k.layers)&&(D.isMesh||D.isLine||D.isPoints)&&(D.castShadow||D.receiveShadow&&j===ra)&&(!D.frustumCulled||s.intersectsObject(D))){D.modelViewMatrix.multiplyMatrices(w.matrixWorldInverse,D.matrixWorld);const oe=e.update(D),pe=D.material;if(Array.isArray(pe)){const W=oe.groups;for(let ee=0,K=W.length;ee<K;ee++){const Z=W[ee],ue=pe[Z.materialIndex];if(ue&&ue.visible){const de=L(D,ue,I,j);D.onBeforeShadow(r,D,k,w,oe,de,Z),r.renderBufferDirect(w,null,oe,de,D,Z),D.onAfterShadow(r,D,k,w,oe,de,Z)}}}else if(pe.visible){const W=L(D,pe,I,j);D.onBeforeShadow(r,D,k,w,oe,W,null),r.renderBufferDirect(w,null,oe,W,D,null),D.onAfterShadow(r,D,k,w,oe,W,null)}}const q=D.children;for(let oe=0,pe=q.length;oe<pe;oe++)P(q[oe],k,w,I,j)}function z(D){D.target.removeEventListener("dispose",z);for(const w in m){const I=m[w],j=D.target.uuid;j in I&&(I[j].dispose(),delete I[j])}}}function NM(r,e){function n(){let B=!1;const Ne=new mn;let ve=null;const qe=new mn(0,0,0,0);return{setMask:function(ke){ve!==ke&&!B&&(r.colorMask(ke,ke,ke,ke),ve=ke)},setLocked:function(ke){B=ke},setClear:function(ke,we,Xe,pt,Se){Se===!0&&(ke*=pt,we*=pt,Xe*=pt),Ne.set(ke,we,Xe,pt),qe.equals(Ne)===!1&&(r.clearColor(ke,we,Xe,pt),qe.copy(Ne))},reset:function(){B=!1,ve=null,qe.set(-1,0,0,0)}}}function s(){let B=!1,Ne=!1,ve=null,qe=null,ke=null;return{setReversed:function(we){if(Ne!==we){const Xe=e.get("EXT_clip_control");we?Xe.clipControlEXT(Xe.LOWER_LEFT_EXT,Xe.ZERO_TO_ONE_EXT):Xe.clipControlEXT(Xe.LOWER_LEFT_EXT,Xe.NEGATIVE_ONE_TO_ONE_EXT),Ne=we;const pt=ke;ke=null,this.setClear(pt)}},getReversed:function(){return Ne},setTest:function(we){we?ye(r.DEPTH_TEST):Ge(r.DEPTH_TEST)},setMask:function(we){ve!==we&&!B&&(r.depthMask(we),ve=we)},setFunc:function(we){if(Ne&&(we=uv[we]),qe!==we){switch(we){case _d:r.depthFunc(r.NEVER);break;case vd:r.depthFunc(r.ALWAYS);break;case xd:r.depthFunc(r.LESS);break;case uo:r.depthFunc(r.LEQUAL);break;case Sd:r.depthFunc(r.EQUAL);break;case yd:r.depthFunc(r.GEQUAL);break;case Md:r.depthFunc(r.GREATER);break;case Ed:r.depthFunc(r.NOTEQUAL);break;default:r.depthFunc(r.LEQUAL)}qe=we}},setLocked:function(we){B=we},setClear:function(we){ke!==we&&(ke=we,Ne&&(we=1-we),r.clearDepth(we))},reset:function(){B=!1,ve=null,qe=null,ke=null,Ne=!1}}}function a(){let B=!1,Ne=null,ve=null,qe=null,ke=null,we=null,Xe=null,pt=null,Se=null;return{setTest:function(_e){B||(_e?ye(r.STENCIL_TEST):Ge(r.STENCIL_TEST))},setMask:function(_e){Ne!==_e&&!B&&(r.stencilMask(_e),Ne=_e)},setFunc:function(_e,ne,Be){(ve!==_e||qe!==ne||ke!==Be)&&(r.stencilFunc(_e,ne,Be),ve=_e,qe=ne,ke=Be)},setOp:function(_e,ne,Be){(we!==_e||Xe!==ne||pt!==Be)&&(r.stencilOp(_e,ne,Be),we=_e,Xe=ne,pt=Be)},setLocked:function(_e){B=_e},setClear:function(_e){Se!==_e&&(r.clearStencil(_e),Se=_e)},reset:function(){B=!1,Ne=null,ve=null,qe=null,ke=null,we=null,Xe=null,pt=null,Se=null}}}const l=new n,u=new s,f=new a,p=new WeakMap,m=new WeakMap;let x={},S={},g={},y=new WeakMap,T=[],R=null,_=!1,v=null,b=null,L=null,P=null,z=null,D=null,k=null,w=new Dt(0,0,0),I=0,j=!1,O=null,q=null,oe=null,pe=null,W=null;const ee=r.getParameter(r.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let K=!1,Z=0;const ue=r.getParameter(r.VERSION);ue.indexOf("WebGL")!==-1?(Z=parseFloat(/^WebGL (\d)/.exec(ue)[1]),K=Z>=1):ue.indexOf("OpenGL ES")!==-1&&(Z=parseFloat(/^OpenGL ES (\d)/.exec(ue)[1]),K=Z>=2);let de=null,F={};const te=r.getParameter(r.SCISSOR_BOX),je=r.getParameter(r.VIEWPORT),De=new mn().fromArray(te),Ye=new mn().fromArray(je);function ae(B,Ne,ve,qe){const ke=new Uint8Array(4),we=r.createTexture();r.bindTexture(B,we),r.texParameteri(B,r.TEXTURE_MIN_FILTER,r.NEAREST),r.texParameteri(B,r.TEXTURE_MAG_FILTER,r.NEAREST);for(let Xe=0;Xe<ve;Xe++)B===r.TEXTURE_3D||B===r.TEXTURE_2D_ARRAY?r.texImage3D(Ne,0,r.RGBA,1,1,qe,0,r.RGBA,r.UNSIGNED_BYTE,ke):r.texImage2D(Ne+Xe,0,r.RGBA,1,1,0,r.RGBA,r.UNSIGNED_BYTE,ke);return we}const Te={};Te[r.TEXTURE_2D]=ae(r.TEXTURE_2D,r.TEXTURE_2D,1),Te[r.TEXTURE_CUBE_MAP]=ae(r.TEXTURE_CUBE_MAP,r.TEXTURE_CUBE_MAP_POSITIVE_X,6),Te[r.TEXTURE_2D_ARRAY]=ae(r.TEXTURE_2D_ARRAY,r.TEXTURE_2D_ARRAY,1,1),Te[r.TEXTURE_3D]=ae(r.TEXTURE_3D,r.TEXTURE_3D,1,1),l.setClear(0,0,0,1),u.setClear(1),f.setClear(0),ye(r.DEPTH_TEST),u.setFunc(uo),Xt(!1),Yt(om),ye(r.CULL_FACE),kt(_r);function ye(B){x[B]!==!0&&(r.enable(B),x[B]=!0)}function Ge(B){x[B]!==!1&&(r.disable(B),x[B]=!1)}function st(B,Ne){return g[B]!==Ne?(r.bindFramebuffer(B,Ne),g[B]=Ne,B===r.DRAW_FRAMEBUFFER&&(g[r.FRAMEBUFFER]=Ne),B===r.FRAMEBUFFER&&(g[r.DRAW_FRAMEBUFFER]=Ne),!0):!1}function ot(B,Ne){let ve=T,qe=!1;if(B){ve=y.get(Ne),ve===void 0&&(ve=[],y.set(Ne,ve));const ke=B.textures;if(ve.length!==ke.length||ve[0]!==r.COLOR_ATTACHMENT0){for(let we=0,Xe=ke.length;we<Xe;we++)ve[we]=r.COLOR_ATTACHMENT0+we;ve.length=ke.length,qe=!0}}else ve[0]!==r.BACK&&(ve[0]=r.BACK,qe=!0);qe&&r.drawBuffers(ve)}function Ft(B){return R!==B?(r.useProgram(B),R=B,!0):!1}const ht={[gs]:r.FUNC_ADD,[I_]:r.FUNC_SUBTRACT,[N_]:r.FUNC_REVERSE_SUBTRACT};ht[U_]=r.MIN,ht[F_]=r.MAX;const Pt={[O_]:r.ZERO,[k_]:r.ONE,[B_]:r.SRC_COLOR,[md]:r.SRC_ALPHA,[X_]:r.SRC_ALPHA_SATURATE,[G_]:r.DST_COLOR,[H_]:r.DST_ALPHA,[z_]:r.ONE_MINUS_SRC_COLOR,[gd]:r.ONE_MINUS_SRC_ALPHA,[W_]:r.ONE_MINUS_DST_COLOR,[V_]:r.ONE_MINUS_DST_ALPHA,[j_]:r.CONSTANT_COLOR,[Y_]:r.ONE_MINUS_CONSTANT_COLOR,[q_]:r.CONSTANT_ALPHA,[$_]:r.ONE_MINUS_CONSTANT_ALPHA};function kt(B,Ne,ve,qe,ke,we,Xe,pt,Se,_e){if(B===_r){_===!0&&(Ge(r.BLEND),_=!1);return}if(_===!1&&(ye(r.BLEND),_=!0),B!==D_){if(B!==v||_e!==j){if((b!==gs||z!==gs)&&(r.blendEquation(r.FUNC_ADD),b=gs,z=gs),_e)switch(B){case lo:r.blendFuncSeparate(r.ONE,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case am:r.blendFunc(r.ONE,r.ONE);break;case lm:r.blendFuncSeparate(r.ZERO,r.ONE_MINUS_SRC_COLOR,r.ZERO,r.ONE);break;case cm:r.blendFuncSeparate(r.DST_COLOR,r.ONE_MINUS_SRC_ALPHA,r.ZERO,r.ONE);break;default:Gt("WebGLState: Invalid blending: ",B);break}else switch(B){case lo:r.blendFuncSeparate(r.SRC_ALPHA,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case am:r.blendFuncSeparate(r.SRC_ALPHA,r.ONE,r.ONE,r.ONE);break;case lm:Gt("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case cm:Gt("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:Gt("WebGLState: Invalid blending: ",B);break}L=null,P=null,D=null,k=null,w.set(0,0,0),I=0,v=B,j=_e}return}ke=ke||Ne,we=we||ve,Xe=Xe||qe,(Ne!==b||ke!==z)&&(r.blendEquationSeparate(ht[Ne],ht[ke]),b=Ne,z=ke),(ve!==L||qe!==P||we!==D||Xe!==k)&&(r.blendFuncSeparate(Pt[ve],Pt[qe],Pt[we],Pt[Xe]),L=ve,P=qe,D=we,k=Xe),(pt.equals(w)===!1||Se!==I)&&(r.blendColor(pt.r,pt.g,pt.b,Se),w.copy(pt),I=Se),v=B,j=!1}function dt(B,Ne){B.side===Ti?Ge(r.CULL_FACE):ye(r.CULL_FACE);let ve=B.side===li;Ne&&(ve=!ve),Xt(ve),B.blending===lo&&B.transparent===!1?kt(_r):kt(B.blending,B.blendEquation,B.blendSrc,B.blendDst,B.blendEquationAlpha,B.blendSrcAlpha,B.blendDstAlpha,B.blendColor,B.blendAlpha,B.premultipliedAlpha),u.setFunc(B.depthFunc),u.setTest(B.depthTest),u.setMask(B.depthWrite),l.setMask(B.colorWrite);const qe=B.stencilWrite;f.setTest(qe),qe&&(f.setMask(B.stencilWriteMask),f.setFunc(B.stencilFunc,B.stencilRef,B.stencilFuncMask),f.setOp(B.stencilFail,B.stencilZFail,B.stencilZPass)),G(B.polygonOffset,B.polygonOffsetFactor,B.polygonOffsetUnits),B.alphaToCoverage===!0?ye(r.SAMPLE_ALPHA_TO_COVERAGE):Ge(r.SAMPLE_ALPHA_TO_COVERAGE)}function Xt(B){O!==B&&(B?r.frontFace(r.CW):r.frontFace(r.CCW),O=B)}function Yt(B){B!==R_?(ye(r.CULL_FACE),B!==q&&(B===om?r.cullFace(r.BACK):B===P_?r.cullFace(r.FRONT):r.cullFace(r.FRONT_AND_BACK))):Ge(r.CULL_FACE),q=B}function Qt(B){B!==oe&&(K&&r.lineWidth(B),oe=B)}function G(B,Ne,ve){B?(ye(r.POLYGON_OFFSET_FILL),(pe!==Ne||W!==ve)&&(pe=Ne,W=ve,u.getReversed()&&(Ne=-Ne),r.polygonOffset(Ne,ve))):Ge(r.POLYGON_OFFSET_FILL)}function he(B){B?ye(r.SCISSOR_TEST):Ge(r.SCISSOR_TEST)}function N(B){B===void 0&&(B=r.TEXTURE0+ee-1),de!==B&&(r.activeTexture(B),de=B)}function _t(B,Ne,ve){ve===void 0&&(de===null?ve=r.TEXTURE0+ee-1:ve=de);let qe=F[ve];qe===void 0&&(qe={type:void 0,texture:void 0},F[ve]=qe),(qe.type!==B||qe.texture!==Ne)&&(de!==ve&&(r.activeTexture(ve),de=ve),r.bindTexture(B,Ne||Te[B]),qe.type=B,qe.texture=Ne)}function Fe(){const B=F[de];B!==void 0&&B.type!==void 0&&(r.bindTexture(B.type,null),B.type=void 0,B.texture=void 0)}function Rt(){try{r.compressedTexImage2D(...arguments)}catch(B){Gt("WebGLState:",B)}}function C(){try{r.compressedTexImage3D(...arguments)}catch(B){Gt("WebGLState:",B)}}function M(){try{r.texSubImage2D(...arguments)}catch(B){Gt("WebGLState:",B)}}function Y(){try{r.texSubImage3D(...arguments)}catch(B){Gt("WebGLState:",B)}}function me(){try{r.compressedTexSubImage2D(...arguments)}catch(B){Gt("WebGLState:",B)}}function Ee(){try{r.compressedTexSubImage3D(...arguments)}catch(B){Gt("WebGLState:",B)}}function be(){try{r.texStorage2D(...arguments)}catch(B){Gt("WebGLState:",B)}}function Pe(){try{r.texStorage3D(...arguments)}catch(B){Gt("WebGLState:",B)}}function fe(){try{r.texImage2D(...arguments)}catch(B){Gt("WebGLState:",B)}}function xe(){try{r.texImage3D(...arguments)}catch(B){Gt("WebGLState:",B)}}function Ve(B){return S[B]!==void 0?S[B]:r.getParameter(B)}function $e(B,Ne){S[B]!==Ne&&(r.pixelStorei(B,Ne),S[B]=Ne)}function Oe(B){De.equals(B)===!1&&(r.scissor(B.x,B.y,B.z,B.w),De.copy(B))}function Ie(B){Ye.equals(B)===!1&&(r.viewport(B.x,B.y,B.z,B.w),Ye.copy(B))}function ft(B,Ne){let ve=m.get(Ne);ve===void 0&&(ve=new WeakMap,m.set(Ne,ve));let qe=ve.get(B);qe===void 0&&(qe=r.getUniformBlockIndex(Ne,B.name),ve.set(B,qe))}function vt(B,Ne){const qe=m.get(Ne).get(B);p.get(Ne)!==qe&&(r.uniformBlockBinding(Ne,qe,B.__bindingPointIndex),p.set(Ne,qe))}function xt(){r.disable(r.BLEND),r.disable(r.CULL_FACE),r.disable(r.DEPTH_TEST),r.disable(r.POLYGON_OFFSET_FILL),r.disable(r.SCISSOR_TEST),r.disable(r.STENCIL_TEST),r.disable(r.SAMPLE_ALPHA_TO_COVERAGE),r.blendEquation(r.FUNC_ADD),r.blendFunc(r.ONE,r.ZERO),r.blendFuncSeparate(r.ONE,r.ZERO,r.ONE,r.ZERO),r.blendColor(0,0,0,0),r.colorMask(!0,!0,!0,!0),r.clearColor(0,0,0,0),r.depthMask(!0),r.depthFunc(r.LESS),u.setReversed(!1),r.clearDepth(1),r.stencilMask(4294967295),r.stencilFunc(r.ALWAYS,0,4294967295),r.stencilOp(r.KEEP,r.KEEP,r.KEEP),r.clearStencil(0),r.cullFace(r.BACK),r.frontFace(r.CCW),r.polygonOffset(0,0),r.activeTexture(r.TEXTURE0),r.bindFramebuffer(r.FRAMEBUFFER,null),r.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),r.bindFramebuffer(r.READ_FRAMEBUFFER,null),r.useProgram(null),r.lineWidth(1),r.scissor(0,0,r.canvas.width,r.canvas.height),r.viewport(0,0,r.canvas.width,r.canvas.height),r.pixelStorei(r.PACK_ALIGNMENT,4),r.pixelStorei(r.UNPACK_ALIGNMENT,4),r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,!1),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,r.BROWSER_DEFAULT_WEBGL),r.pixelStorei(r.PACK_ROW_LENGTH,0),r.pixelStorei(r.PACK_SKIP_PIXELS,0),r.pixelStorei(r.PACK_SKIP_ROWS,0),r.pixelStorei(r.UNPACK_ROW_LENGTH,0),r.pixelStorei(r.UNPACK_IMAGE_HEIGHT,0),r.pixelStorei(r.UNPACK_SKIP_PIXELS,0),r.pixelStorei(r.UNPACK_SKIP_ROWS,0),r.pixelStorei(r.UNPACK_SKIP_IMAGES,0),x={},S={},de=null,F={},g={},y=new WeakMap,T=[],R=null,_=!1,v=null,b=null,L=null,P=null,z=null,D=null,k=null,w=new Dt(0,0,0),I=0,j=!1,O=null,q=null,oe=null,pe=null,W=null,De.set(0,0,r.canvas.width,r.canvas.height),Ye.set(0,0,r.canvas.width,r.canvas.height),l.reset(),u.reset(),f.reset()}return{buffers:{color:l,depth:u,stencil:f},enable:ye,disable:Ge,bindFramebuffer:st,drawBuffers:ot,useProgram:Ft,setBlending:kt,setMaterial:dt,setFlipSided:Xt,setCullFace:Yt,setLineWidth:Qt,setPolygonOffset:G,setScissorTest:he,activeTexture:N,bindTexture:_t,unbindTexture:Fe,compressedTexImage2D:Rt,compressedTexImage3D:C,texImage2D:fe,texImage3D:xe,pixelStorei:$e,getParameter:Ve,updateUBOMapping:ft,uniformBlockBinding:vt,texStorage2D:be,texStorage3D:Pe,texSubImage2D:M,texSubImage3D:Y,compressedTexSubImage2D:me,compressedTexSubImage3D:Ee,scissor:Oe,viewport:Ie,reset:xt}}function UM(r,e,n,s,a,l,u){const f=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,p=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),m=new Ht,x=new WeakMap,S=new Set;let g;const y=new WeakMap;let T=!1;try{T=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function R(C,M){return T?new OffscreenCanvas(C,M):jl("canvas")}function _(C,M,Y){let me=1;const Ee=Rt(C);if((Ee.width>Y||Ee.height>Y)&&(me=Y/Math.max(Ee.width,Ee.height)),me<1)if(typeof HTMLImageElement<"u"&&C instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&C instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&C instanceof ImageBitmap||typeof VideoFrame<"u"&&C instanceof VideoFrame){const be=Math.floor(me*Ee.width),Pe=Math.floor(me*Ee.height);g===void 0&&(g=R(be,Pe));const fe=M?R(be,Pe):g;return fe.width=be,fe.height=Pe,fe.getContext("2d").drawImage(C,0,0,be,Pe),Mt("WebGLRenderer: Texture has been resized from ("+Ee.width+"x"+Ee.height+") to ("+be+"x"+Pe+")."),fe}else return"data"in C&&Mt("WebGLRenderer: Image in DataTexture is too big ("+Ee.width+"x"+Ee.height+")."),C;return C}function v(C){return C.generateMipmaps}function b(C){r.generateMipmap(C)}function L(C){return C.isWebGLCubeRenderTarget?r.TEXTURE_CUBE_MAP:C.isWebGL3DRenderTarget?r.TEXTURE_3D:C.isWebGLArrayRenderTarget||C.isCompressedArrayTexture?r.TEXTURE_2D_ARRAY:r.TEXTURE_2D}function P(C,M,Y,me,Ee,be=!1){if(C!==null){if(r[C]!==void 0)return r[C];Mt("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+C+"'")}let Pe;me&&(Pe=e.get("EXT_texture_norm16"),Pe||Mt("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let fe=M;if(M===r.RED&&(Y===r.FLOAT&&(fe=r.R32F),Y===r.HALF_FLOAT&&(fe=r.R16F),Y===r.UNSIGNED_BYTE&&(fe=r.R8),Y===r.UNSIGNED_SHORT&&Pe&&(fe=Pe.R16_EXT),Y===r.SHORT&&Pe&&(fe=Pe.R16_SNORM_EXT)),M===r.RED_INTEGER&&(Y===r.UNSIGNED_BYTE&&(fe=r.R8UI),Y===r.UNSIGNED_SHORT&&(fe=r.R16UI),Y===r.UNSIGNED_INT&&(fe=r.R32UI),Y===r.BYTE&&(fe=r.R8I),Y===r.SHORT&&(fe=r.R16I),Y===r.INT&&(fe=r.R32I)),M===r.RG&&(Y===r.FLOAT&&(fe=r.RG32F),Y===r.HALF_FLOAT&&(fe=r.RG16F),Y===r.UNSIGNED_BYTE&&(fe=r.RG8),Y===r.UNSIGNED_SHORT&&Pe&&(fe=Pe.RG16_EXT),Y===r.SHORT&&Pe&&(fe=Pe.RG16_SNORM_EXT)),M===r.RG_INTEGER&&(Y===r.UNSIGNED_BYTE&&(fe=r.RG8UI),Y===r.UNSIGNED_SHORT&&(fe=r.RG16UI),Y===r.UNSIGNED_INT&&(fe=r.RG32UI),Y===r.BYTE&&(fe=r.RG8I),Y===r.SHORT&&(fe=r.RG16I),Y===r.INT&&(fe=r.RG32I)),M===r.RGB_INTEGER&&(Y===r.UNSIGNED_BYTE&&(fe=r.RGB8UI),Y===r.UNSIGNED_SHORT&&(fe=r.RGB16UI),Y===r.UNSIGNED_INT&&(fe=r.RGB32UI),Y===r.BYTE&&(fe=r.RGB8I),Y===r.SHORT&&(fe=r.RGB16I),Y===r.INT&&(fe=r.RGB32I)),M===r.RGBA_INTEGER&&(Y===r.UNSIGNED_BYTE&&(fe=r.RGBA8UI),Y===r.UNSIGNED_SHORT&&(fe=r.RGBA16UI),Y===r.UNSIGNED_INT&&(fe=r.RGBA32UI),Y===r.BYTE&&(fe=r.RGBA8I),Y===r.SHORT&&(fe=r.RGBA16I),Y===r.INT&&(fe=r.RGBA32I)),M===r.RGB&&(Y===r.UNSIGNED_SHORT&&Pe&&(fe=Pe.RGB16_EXT),Y===r.SHORT&&Pe&&(fe=Pe.RGB16_SNORM_EXT),Y===r.UNSIGNED_INT_5_9_9_9_REV&&(fe=r.RGB9_E5),Y===r.UNSIGNED_INT_10F_11F_11F_REV&&(fe=r.R11F_G11F_B10F)),M===r.RGBA){const xe=be?Xl:zt.getTransfer(Ee);Y===r.FLOAT&&(fe=r.RGBA32F),Y===r.HALF_FLOAT&&(fe=r.RGBA16F),Y===r.UNSIGNED_BYTE&&(fe=xe===Zt?r.SRGB8_ALPHA8:r.RGBA8),Y===r.UNSIGNED_SHORT&&Pe&&(fe=Pe.RGBA16_EXT),Y===r.SHORT&&Pe&&(fe=Pe.RGBA16_SNORM_EXT),Y===r.UNSIGNED_SHORT_4_4_4_4&&(fe=r.RGBA4),Y===r.UNSIGNED_SHORT_5_5_5_1&&(fe=r.RGB5_A1)}return(fe===r.R16F||fe===r.R32F||fe===r.RG16F||fe===r.RG32F||fe===r.RGBA16F||fe===r.RGBA32F)&&e.get("EXT_color_buffer_float"),fe}function z(C,M){let Y;return C?M===null||M===Qi||M===la?Y=r.DEPTH24_STENCIL8:M===Yi?Y=r.DEPTH32F_STENCIL8:M===aa&&(Y=r.DEPTH24_STENCIL8,Mt("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):M===null||M===Qi||M===la?Y=r.DEPTH_COMPONENT24:M===Yi?Y=r.DEPTH_COMPONENT32F:M===aa&&(Y=r.DEPTH_COMPONENT16),Y}function D(C,M){return v(C)===!0||C.isFramebufferTexture&&C.minFilter!==Bn&&C.minFilter!==jn?Math.log2(Math.max(M.width,M.height))+1:C.mipmaps!==void 0&&C.mipmaps.length>0?C.mipmaps.length:C.isCompressedTexture&&Array.isArray(C.image)?M.mipmaps.length:1}function k(C){const M=C.target;M.removeEventListener("dispose",k),I(M),M.isVideoTexture&&x.delete(M),M.isHTMLTexture&&S.delete(M)}function w(C){const M=C.target;M.removeEventListener("dispose",w),O(M)}function I(C){const M=s.get(C);if(M.__webglInit===void 0)return;const Y=C.source,me=y.get(Y);if(me){const Ee=me[M.__cacheKey];Ee.usedTimes--,Ee.usedTimes===0&&j(C),Object.keys(me).length===0&&y.delete(Y)}s.remove(C)}function j(C){const M=s.get(C);r.deleteTexture(M.__webglTexture);const Y=C.source,me=y.get(Y);delete me[M.__cacheKey],u.memory.textures--}function O(C){const M=s.get(C);if(C.depthTexture&&(C.depthTexture.dispose(),s.remove(C.depthTexture)),C.isWebGLCubeRenderTarget)for(let me=0;me<6;me++){if(Array.isArray(M.__webglFramebuffer[me]))for(let Ee=0;Ee<M.__webglFramebuffer[me].length;Ee++)r.deleteFramebuffer(M.__webglFramebuffer[me][Ee]);else r.deleteFramebuffer(M.__webglFramebuffer[me]);M.__webglDepthbuffer&&r.deleteRenderbuffer(M.__webglDepthbuffer[me])}else{if(Array.isArray(M.__webglFramebuffer))for(let me=0;me<M.__webglFramebuffer.length;me++)r.deleteFramebuffer(M.__webglFramebuffer[me]);else r.deleteFramebuffer(M.__webglFramebuffer);if(M.__webglDepthbuffer&&r.deleteRenderbuffer(M.__webglDepthbuffer),M.__webglMultisampledFramebuffer&&r.deleteFramebuffer(M.__webglMultisampledFramebuffer),M.__webglColorRenderbuffer)for(let me=0;me<M.__webglColorRenderbuffer.length;me++)M.__webglColorRenderbuffer[me]&&r.deleteRenderbuffer(M.__webglColorRenderbuffer[me]);M.__webglDepthRenderbuffer&&r.deleteRenderbuffer(M.__webglDepthRenderbuffer)}const Y=C.textures;for(let me=0,Ee=Y.length;me<Ee;me++){const be=s.get(Y[me]);be.__webglTexture&&(r.deleteTexture(be.__webglTexture),u.memory.textures--),s.remove(Y[me])}s.remove(C)}let q=0;function oe(){q=0}function pe(){return q}function W(C){q=C}function ee(){const C=q;return C>=a.maxTextures&&Mt("WebGLTextures: Trying to use "+C+" texture units while this GPU supports only "+a.maxTextures),q+=1,C}function K(C){const M=[];return M.push(C.wrapS),M.push(C.wrapT),M.push(C.wrapR||0),M.push(C.magFilter),M.push(C.minFilter),M.push(C.anisotropy),M.push(C.internalFormat),M.push(C.format),M.push(C.type),M.push(C.generateMipmaps),M.push(C.premultiplyAlpha),M.push(C.flipY),M.push(C.unpackAlignment),M.push(C.colorSpace),M.join()}function Z(C,M){const Y=s.get(C);if(C.isVideoTexture&&_t(C),C.isRenderTargetTexture===!1&&C.isExternalTexture!==!0&&C.version>0&&Y.__version!==C.version){const me=C.image;if(me===null)Mt("WebGLRenderer: Texture marked for update but no image data found.");else if(me.complete===!1)Mt("WebGLRenderer: Texture marked for update but image is incomplete");else{Ge(Y,C,M);return}}else C.isExternalTexture&&(Y.__webglTexture=C.sourceTexture?C.sourceTexture:null);n.bindTexture(r.TEXTURE_2D,Y.__webglTexture,r.TEXTURE0+M)}function ue(C,M){const Y=s.get(C);if(C.isRenderTargetTexture===!1&&C.version>0&&Y.__version!==C.version){Ge(Y,C,M);return}else C.isExternalTexture&&(Y.__webglTexture=C.sourceTexture?C.sourceTexture:null);n.bindTexture(r.TEXTURE_2D_ARRAY,Y.__webglTexture,r.TEXTURE0+M)}function de(C,M){const Y=s.get(C);if(C.isRenderTargetTexture===!1&&C.version>0&&Y.__version!==C.version){Ge(Y,C,M);return}n.bindTexture(r.TEXTURE_3D,Y.__webglTexture,r.TEXTURE0+M)}function F(C,M){const Y=s.get(C);if(C.isCubeDepthTexture!==!0&&C.version>0&&Y.__version!==C.version){st(Y,C,M);return}n.bindTexture(r.TEXTURE_CUBE_MAP,Y.__webglTexture,r.TEXTURE0+M)}const te={[wd]:r.REPEAT,[gr]:r.CLAMP_TO_EDGE,[Td]:r.MIRRORED_REPEAT},je={[Bn]:r.NEAREST,[J_]:r.NEAREST_MIPMAP_NEAREST,[pl]:r.NEAREST_MIPMAP_LINEAR,[jn]:r.LINEAR,[Fu]:r.LINEAR_MIPMAP_NEAREST,[vs]:r.LINEAR_MIPMAP_LINEAR},De={[tv]:r.NEVER,[ov]:r.ALWAYS,[nv]:r.LESS,[vf]:r.LEQUAL,[iv]:r.EQUAL,[xf]:r.GEQUAL,[rv]:r.GREATER,[sv]:r.NOTEQUAL};function Ye(C,M){if(M.type===Yi&&e.has("OES_texture_float_linear")===!1&&(M.magFilter===jn||M.magFilter===Fu||M.magFilter===pl||M.magFilter===vs||M.minFilter===jn||M.minFilter===Fu||M.minFilter===pl||M.minFilter===vs)&&Mt("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),r.texParameteri(C,r.TEXTURE_WRAP_S,te[M.wrapS]),r.texParameteri(C,r.TEXTURE_WRAP_T,te[M.wrapT]),(C===r.TEXTURE_3D||C===r.TEXTURE_2D_ARRAY)&&r.texParameteri(C,r.TEXTURE_WRAP_R,te[M.wrapR]),r.texParameteri(C,r.TEXTURE_MAG_FILTER,je[M.magFilter]),r.texParameteri(C,r.TEXTURE_MIN_FILTER,je[M.minFilter]),M.compareFunction&&(r.texParameteri(C,r.TEXTURE_COMPARE_MODE,r.COMPARE_REF_TO_TEXTURE),r.texParameteri(C,r.TEXTURE_COMPARE_FUNC,De[M.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(M.magFilter===Bn||M.minFilter!==pl&&M.minFilter!==vs||M.type===Yi&&e.has("OES_texture_float_linear")===!1)return;if(M.anisotropy>1||s.get(M).__currentAnisotropy){const Y=e.get("EXT_texture_filter_anisotropic");r.texParameterf(C,Y.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(M.anisotropy,a.getMaxAnisotropy())),s.get(M).__currentAnisotropy=M.anisotropy}}}function ae(C,M){let Y=!1;C.__webglInit===void 0&&(C.__webglInit=!0,M.addEventListener("dispose",k));const me=M.source;let Ee=y.get(me);Ee===void 0&&(Ee={},y.set(me,Ee));const be=K(M);if(be!==C.__cacheKey){Ee[be]===void 0&&(Ee[be]={texture:r.createTexture(),usedTimes:0},u.memory.textures++,Y=!0),Ee[be].usedTimes++;const Pe=Ee[C.__cacheKey];Pe!==void 0&&(Ee[C.__cacheKey].usedTimes--,Pe.usedTimes===0&&j(M)),C.__cacheKey=be,C.__webglTexture=Ee[be].texture}return Y}function Te(C,M,Y){return Math.floor(Math.floor(C/Y)/M)}function ye(C,M,Y,me){const be=C.updateRanges;if(be.length===0)n.texSubImage2D(r.TEXTURE_2D,0,0,0,M.width,M.height,Y,me,M.data);else{be.sort(($e,Oe)=>$e.start-Oe.start);let Pe=0;for(let $e=1;$e<be.length;$e++){const Oe=be[Pe],Ie=be[$e],ft=Oe.start+Oe.count,vt=Te(Ie.start,M.width,4),xt=Te(Oe.start,M.width,4);Ie.start<=ft+1&&vt===xt&&Te(Ie.start+Ie.count-1,M.width,4)===vt?Oe.count=Math.max(Oe.count,Ie.start+Ie.count-Oe.start):(++Pe,be[Pe]=Ie)}be.length=Pe+1;const fe=n.getParameter(r.UNPACK_ROW_LENGTH),xe=n.getParameter(r.UNPACK_SKIP_PIXELS),Ve=n.getParameter(r.UNPACK_SKIP_ROWS);n.pixelStorei(r.UNPACK_ROW_LENGTH,M.width);for(let $e=0,Oe=be.length;$e<Oe;$e++){const Ie=be[$e],ft=Math.floor(Ie.start/4),vt=Math.ceil(Ie.count/4),xt=ft%M.width,B=Math.floor(ft/M.width),Ne=vt,ve=1;n.pixelStorei(r.UNPACK_SKIP_PIXELS,xt),n.pixelStorei(r.UNPACK_SKIP_ROWS,B),n.texSubImage2D(r.TEXTURE_2D,0,xt,B,Ne,ve,Y,me,M.data)}C.clearUpdateRanges(),n.pixelStorei(r.UNPACK_ROW_LENGTH,fe),n.pixelStorei(r.UNPACK_SKIP_PIXELS,xe),n.pixelStorei(r.UNPACK_SKIP_ROWS,Ve)}}function Ge(C,M,Y){let me=r.TEXTURE_2D;(M.isDataArrayTexture||M.isCompressedArrayTexture)&&(me=r.TEXTURE_2D_ARRAY),M.isData3DTexture&&(me=r.TEXTURE_3D);const Ee=ae(C,M),be=M.source;n.bindTexture(me,C.__webglTexture,r.TEXTURE0+Y);const Pe=s.get(be);if(be.version!==Pe.__version||Ee===!0){if(n.activeTexture(r.TEXTURE0+Y),(typeof ImageBitmap<"u"&&M.image instanceof ImageBitmap)===!1){const ve=zt.getPrimaries(zt.workingColorSpace),qe=M.colorSpace===Yr?null:zt.getPrimaries(M.colorSpace),ke=M.colorSpace===Yr||ve===qe?r.NONE:r.BROWSER_DEFAULT_WEBGL;n.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,M.flipY),n.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),n.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,ke)}n.pixelStorei(r.UNPACK_ALIGNMENT,M.unpackAlignment);let xe=_(M.image,!1,a.maxTextureSize);xe=Fe(M,xe);const Ve=l.convert(M.format,M.colorSpace),$e=l.convert(M.type);let Oe=P(M.internalFormat,Ve,$e,M.normalized,M.colorSpace,M.isVideoTexture);Ye(me,M);let Ie;const ft=M.mipmaps,vt=M.isVideoTexture!==!0,xt=Pe.__version===void 0||Ee===!0,B=be.dataReady,Ne=D(M,xe);if(M.isDepthTexture)Oe=z(M.format===xs,M.type),xt&&(vt?n.texStorage2D(r.TEXTURE_2D,1,Oe,xe.width,xe.height):n.texImage2D(r.TEXTURE_2D,0,Oe,xe.width,xe.height,0,Ve,$e,null));else if(M.isDataTexture)if(ft.length>0){vt&&xt&&n.texStorage2D(r.TEXTURE_2D,Ne,Oe,ft[0].width,ft[0].height);for(let ve=0,qe=ft.length;ve<qe;ve++)Ie=ft[ve],vt?B&&n.texSubImage2D(r.TEXTURE_2D,ve,0,0,Ie.width,Ie.height,Ve,$e,Ie.data):n.texImage2D(r.TEXTURE_2D,ve,Oe,Ie.width,Ie.height,0,Ve,$e,Ie.data);M.generateMipmaps=!1}else vt?(xt&&n.texStorage2D(r.TEXTURE_2D,Ne,Oe,xe.width,xe.height),B&&ye(M,xe,Ve,$e)):n.texImage2D(r.TEXTURE_2D,0,Oe,xe.width,xe.height,0,Ve,$e,xe.data);else if(M.isCompressedTexture)if(M.isCompressedArrayTexture){vt&&xt&&n.texStorage3D(r.TEXTURE_2D_ARRAY,Ne,Oe,ft[0].width,ft[0].height,xe.depth);for(let ve=0,qe=ft.length;ve<qe;ve++)if(Ie=ft[ve],M.format!==ki)if(Ve!==null)if(vt){if(B)if(M.layerUpdates.size>0){const ke=km(Ie.width,Ie.height,M.format,M.type);for(const we of M.layerUpdates){const Xe=Ie.data.subarray(we*ke/Ie.data.BYTES_PER_ELEMENT,(we+1)*ke/Ie.data.BYTES_PER_ELEMENT);n.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,ve,0,0,we,Ie.width,Ie.height,1,Ve,Xe)}M.clearLayerUpdates()}else n.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,ve,0,0,0,Ie.width,Ie.height,xe.depth,Ve,Ie.data)}else n.compressedTexImage3D(r.TEXTURE_2D_ARRAY,ve,Oe,Ie.width,Ie.height,xe.depth,0,Ie.data,0,0);else Mt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else vt?B&&n.texSubImage3D(r.TEXTURE_2D_ARRAY,ve,0,0,0,Ie.width,Ie.height,xe.depth,Ve,$e,Ie.data):n.texImage3D(r.TEXTURE_2D_ARRAY,ve,Oe,Ie.width,Ie.height,xe.depth,0,Ve,$e,Ie.data)}else{vt&&xt&&n.texStorage2D(r.TEXTURE_2D,Ne,Oe,ft[0].width,ft[0].height);for(let ve=0,qe=ft.length;ve<qe;ve++)Ie=ft[ve],M.format!==ki?Ve!==null?vt?B&&n.compressedTexSubImage2D(r.TEXTURE_2D,ve,0,0,Ie.width,Ie.height,Ve,Ie.data):n.compressedTexImage2D(r.TEXTURE_2D,ve,Oe,Ie.width,Ie.height,0,Ie.data):Mt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):vt?B&&n.texSubImage2D(r.TEXTURE_2D,ve,0,0,Ie.width,Ie.height,Ve,$e,Ie.data):n.texImage2D(r.TEXTURE_2D,ve,Oe,Ie.width,Ie.height,0,Ve,$e,Ie.data)}else if(M.isDataArrayTexture)if(vt){if(xt&&n.texStorage3D(r.TEXTURE_2D_ARRAY,Ne,Oe,xe.width,xe.height,xe.depth),B)if(M.layerUpdates.size>0){const ve=km(xe.width,xe.height,M.format,M.type);for(const qe of M.layerUpdates){const ke=xe.data.subarray(qe*ve/xe.data.BYTES_PER_ELEMENT,(qe+1)*ve/xe.data.BYTES_PER_ELEMENT);n.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,qe,xe.width,xe.height,1,Ve,$e,ke)}M.clearLayerUpdates()}else n.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,0,xe.width,xe.height,xe.depth,Ve,$e,xe.data)}else n.texImage3D(r.TEXTURE_2D_ARRAY,0,Oe,xe.width,xe.height,xe.depth,0,Ve,$e,xe.data);else if(M.isData3DTexture)vt?(xt&&n.texStorage3D(r.TEXTURE_3D,Ne,Oe,xe.width,xe.height,xe.depth),B&&n.texSubImage3D(r.TEXTURE_3D,0,0,0,0,xe.width,xe.height,xe.depth,Ve,$e,xe.data)):n.texImage3D(r.TEXTURE_3D,0,Oe,xe.width,xe.height,xe.depth,0,Ve,$e,xe.data);else if(M.isFramebufferTexture){if(xt)if(vt)n.texStorage2D(r.TEXTURE_2D,Ne,Oe,xe.width,xe.height);else{let ve=xe.width,qe=xe.height;for(let ke=0;ke<Ne;ke++)n.texImage2D(r.TEXTURE_2D,ke,Oe,ve,qe,0,Ve,$e,null),ve>>=1,qe>>=1}}else if(M.isHTMLTexture){if("texElementImage2D"in r){const ve=r.canvas;if(ve.hasAttribute("layoutsubtree")||ve.setAttribute("layoutsubtree","true"),xe.parentNode!==ve){ve.appendChild(xe),S.add(M),ve.onpaint=pt=>{const Se=pt.changedElements;for(const _e of S)Se.includes(_e.image)&&(_e.needsUpdate=!0)},ve.requestPaint();return}const qe=0,ke=r.RGBA,we=r.RGBA,Xe=r.UNSIGNED_BYTE;r.texElementImage2D(r.TEXTURE_2D,qe,ke,we,Xe,xe),r.texParameteri(r.TEXTURE_2D,r.TEXTURE_MIN_FILTER,r.LINEAR),r.texParameteri(r.TEXTURE_2D,r.TEXTURE_WRAP_S,r.CLAMP_TO_EDGE),r.texParameteri(r.TEXTURE_2D,r.TEXTURE_WRAP_T,r.CLAMP_TO_EDGE)}}else if(ft.length>0){if(vt&&xt){const ve=Rt(ft[0]);n.texStorage2D(r.TEXTURE_2D,Ne,Oe,ve.width,ve.height)}for(let ve=0,qe=ft.length;ve<qe;ve++)Ie=ft[ve],vt?B&&n.texSubImage2D(r.TEXTURE_2D,ve,0,0,Ve,$e,Ie):n.texImage2D(r.TEXTURE_2D,ve,Oe,Ve,$e,Ie);M.generateMipmaps=!1}else if(vt){if(xt){const ve=Rt(xe);n.texStorage2D(r.TEXTURE_2D,Ne,Oe,ve.width,ve.height)}B&&n.texSubImage2D(r.TEXTURE_2D,0,0,0,Ve,$e,xe)}else n.texImage2D(r.TEXTURE_2D,0,Oe,Ve,$e,xe);v(M)&&b(me),Pe.__version=be.version,M.onUpdate&&M.onUpdate(M)}C.__version=M.version}function st(C,M,Y){if(M.image.length!==6)return;const me=ae(C,M),Ee=M.source;n.bindTexture(r.TEXTURE_CUBE_MAP,C.__webglTexture,r.TEXTURE0+Y);const be=s.get(Ee);if(Ee.version!==be.__version||me===!0){n.activeTexture(r.TEXTURE0+Y);const Pe=zt.getPrimaries(zt.workingColorSpace),fe=M.colorSpace===Yr?null:zt.getPrimaries(M.colorSpace),xe=M.colorSpace===Yr||Pe===fe?r.NONE:r.BROWSER_DEFAULT_WEBGL;n.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,M.flipY),n.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),n.pixelStorei(r.UNPACK_ALIGNMENT,M.unpackAlignment),n.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,xe);const Ve=M.isCompressedTexture||M.image[0].isCompressedTexture,$e=M.image[0]&&M.image[0].isDataTexture,Oe=[];for(let we=0;we<6;we++)!Ve&&!$e?Oe[we]=_(M.image[we],!0,a.maxCubemapSize):Oe[we]=$e?M.image[we].image:M.image[we],Oe[we]=Fe(M,Oe[we]);const Ie=Oe[0],ft=l.convert(M.format,M.colorSpace),vt=l.convert(M.type),xt=P(M.internalFormat,ft,vt,M.normalized,M.colorSpace),B=M.isVideoTexture!==!0,Ne=be.__version===void 0||me===!0,ve=Ee.dataReady;let qe=D(M,Ie);Ye(r.TEXTURE_CUBE_MAP,M);let ke;if(Ve){B&&Ne&&n.texStorage2D(r.TEXTURE_CUBE_MAP,qe,xt,Ie.width,Ie.height);for(let we=0;we<6;we++){ke=Oe[we].mipmaps;for(let Xe=0;Xe<ke.length;Xe++){const pt=ke[Xe];M.format!==ki?ft!==null?B?ve&&n.compressedTexSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+we,Xe,0,0,pt.width,pt.height,ft,pt.data):n.compressedTexImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+we,Xe,xt,pt.width,pt.height,0,pt.data):Mt("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):B?ve&&n.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+we,Xe,0,0,pt.width,pt.height,ft,vt,pt.data):n.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+we,Xe,xt,pt.width,pt.height,0,ft,vt,pt.data)}}}else{if(ke=M.mipmaps,B&&Ne){ke.length>0&&qe++;const we=Rt(Oe[0]);n.texStorage2D(r.TEXTURE_CUBE_MAP,qe,xt,we.width,we.height)}for(let we=0;we<6;we++)if($e){B?ve&&n.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+we,0,0,0,Oe[we].width,Oe[we].height,ft,vt,Oe[we].data):n.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+we,0,xt,Oe[we].width,Oe[we].height,0,ft,vt,Oe[we].data);for(let Xe=0;Xe<ke.length;Xe++){const Se=ke[Xe].image[we].image;B?ve&&n.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+we,Xe+1,0,0,Se.width,Se.height,ft,vt,Se.data):n.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+we,Xe+1,xt,Se.width,Se.height,0,ft,vt,Se.data)}}else{B?ve&&n.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+we,0,0,0,ft,vt,Oe[we]):n.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+we,0,xt,ft,vt,Oe[we]);for(let Xe=0;Xe<ke.length;Xe++){const pt=ke[Xe];B?ve&&n.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+we,Xe+1,0,0,ft,vt,pt.image[we]):n.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+we,Xe+1,xt,ft,vt,pt.image[we])}}}v(M)&&b(r.TEXTURE_CUBE_MAP),be.__version=Ee.version,M.onUpdate&&M.onUpdate(M)}C.__version=M.version}function ot(C,M,Y,me,Ee,be){const Pe=l.convert(Y.format,Y.colorSpace),fe=l.convert(Y.type),xe=P(Y.internalFormat,Pe,fe,Y.normalized,Y.colorSpace),Ve=s.get(M),$e=s.get(Y);if($e.__renderTarget=M,!Ve.__hasExternalTextures){const Oe=Math.max(1,M.width>>be),Ie=Math.max(1,M.height>>be);Ee===r.TEXTURE_3D||Ee===r.TEXTURE_2D_ARRAY?n.texImage3D(Ee,be,xe,Oe,Ie,M.depth,0,Pe,fe,null):n.texImage2D(Ee,be,xe,Oe,Ie,0,Pe,fe,null)}n.bindFramebuffer(r.FRAMEBUFFER,C),N(M)?f.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,me,Ee,$e.__webglTexture,0,he(M)):(Ee===r.TEXTURE_2D||Ee>=r.TEXTURE_CUBE_MAP_POSITIVE_X&&Ee<=r.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&r.framebufferTexture2D(r.FRAMEBUFFER,me,Ee,$e.__webglTexture,be),n.bindFramebuffer(r.FRAMEBUFFER,null)}function Ft(C,M,Y){if(r.bindRenderbuffer(r.RENDERBUFFER,C),M.depthBuffer){const me=M.depthTexture,Ee=me&&me.isDepthTexture?me.type:null,be=z(M.stencilBuffer,Ee),Pe=M.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT;N(M)?f.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,he(M),be,M.width,M.height):Y?r.renderbufferStorageMultisample(r.RENDERBUFFER,he(M),be,M.width,M.height):r.renderbufferStorage(r.RENDERBUFFER,be,M.width,M.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,Pe,r.RENDERBUFFER,C)}else{const me=M.textures;for(let Ee=0;Ee<me.length;Ee++){const be=me[Ee],Pe=l.convert(be.format,be.colorSpace),fe=l.convert(be.type),xe=P(be.internalFormat,Pe,fe,be.normalized,be.colorSpace);N(M)?f.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,he(M),xe,M.width,M.height):Y?r.renderbufferStorageMultisample(r.RENDERBUFFER,he(M),xe,M.width,M.height):r.renderbufferStorage(r.RENDERBUFFER,xe,M.width,M.height)}}r.bindRenderbuffer(r.RENDERBUFFER,null)}function ht(C,M,Y){const me=M.isWebGLCubeRenderTarget===!0;if(n.bindFramebuffer(r.FRAMEBUFFER,C),!(M.depthTexture&&M.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const Ee=s.get(M.depthTexture);if(Ee.__renderTarget=M,(!Ee.__webglTexture||M.depthTexture.image.width!==M.width||M.depthTexture.image.height!==M.height)&&(M.depthTexture.image.width=M.width,M.depthTexture.image.height=M.height,M.depthTexture.needsUpdate=!0),me){if(Ee.__webglInit===void 0&&(Ee.__webglInit=!0,M.depthTexture.addEventListener("dispose",k)),Ee.__webglTexture===void 0){Ee.__webglTexture=r.createTexture(),n.bindTexture(r.TEXTURE_CUBE_MAP,Ee.__webglTexture),Ye(r.TEXTURE_CUBE_MAP,M.depthTexture);const Ve=l.convert(M.depthTexture.format),$e=l.convert(M.depthTexture.type);let Oe;M.depthTexture.format===Sr?Oe=r.DEPTH_COMPONENT24:M.depthTexture.format===xs&&(Oe=r.DEPTH24_STENCIL8);for(let Ie=0;Ie<6;Ie++)r.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Ie,0,Oe,M.width,M.height,0,Ve,$e,null)}}else Z(M.depthTexture,0);const be=Ee.__webglTexture,Pe=he(M),fe=me?r.TEXTURE_CUBE_MAP_POSITIVE_X+Y:r.TEXTURE_2D,xe=M.depthTexture.format===xs?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT;if(M.depthTexture.format===Sr)N(M)?f.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,xe,fe,be,0,Pe):r.framebufferTexture2D(r.FRAMEBUFFER,xe,fe,be,0);else if(M.depthTexture.format===xs)N(M)?f.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,xe,fe,be,0,Pe):r.framebufferTexture2D(r.FRAMEBUFFER,xe,fe,be,0);else throw new Error("Unknown depthTexture format")}function Pt(C){const M=s.get(C),Y=C.isWebGLCubeRenderTarget===!0;if(M.__boundDepthTexture!==C.depthTexture){const me=C.depthTexture;if(M.__depthDisposeCallback&&M.__depthDisposeCallback(),me){const Ee=()=>{delete M.__boundDepthTexture,delete M.__depthDisposeCallback,me.removeEventListener("dispose",Ee)};me.addEventListener("dispose",Ee),M.__depthDisposeCallback=Ee}M.__boundDepthTexture=me}if(C.depthTexture&&!M.__autoAllocateDepthBuffer)if(Y)for(let me=0;me<6;me++)ht(M.__webglFramebuffer[me],C,me);else{const me=C.texture.mipmaps;me&&me.length>0?ht(M.__webglFramebuffer[0],C,0):ht(M.__webglFramebuffer,C,0)}else if(Y){M.__webglDepthbuffer=[];for(let me=0;me<6;me++)if(n.bindFramebuffer(r.FRAMEBUFFER,M.__webglFramebuffer[me]),M.__webglDepthbuffer[me]===void 0)M.__webglDepthbuffer[me]=r.createRenderbuffer(),Ft(M.__webglDepthbuffer[me],C,!1);else{const Ee=C.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,be=M.__webglDepthbuffer[me];r.bindRenderbuffer(r.RENDERBUFFER,be),r.framebufferRenderbuffer(r.FRAMEBUFFER,Ee,r.RENDERBUFFER,be)}}else{const me=C.texture.mipmaps;if(me&&me.length>0?n.bindFramebuffer(r.FRAMEBUFFER,M.__webglFramebuffer[0]):n.bindFramebuffer(r.FRAMEBUFFER,M.__webglFramebuffer),M.__webglDepthbuffer===void 0)M.__webglDepthbuffer=r.createRenderbuffer(),Ft(M.__webglDepthbuffer,C,!1);else{const Ee=C.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,be=M.__webglDepthbuffer;r.bindRenderbuffer(r.RENDERBUFFER,be),r.framebufferRenderbuffer(r.FRAMEBUFFER,Ee,r.RENDERBUFFER,be)}}n.bindFramebuffer(r.FRAMEBUFFER,null)}function kt(C,M,Y){const me=s.get(C);M!==void 0&&ot(me.__webglFramebuffer,C,C.texture,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,0),Y!==void 0&&Pt(C)}function dt(C){const M=C.texture,Y=s.get(C),me=s.get(M);C.addEventListener("dispose",w);const Ee=C.textures,be=C.isWebGLCubeRenderTarget===!0,Pe=Ee.length>1;if(Pe||(me.__webglTexture===void 0&&(me.__webglTexture=r.createTexture()),me.__version=M.version,u.memory.textures++),be){Y.__webglFramebuffer=[];for(let fe=0;fe<6;fe++)if(M.mipmaps&&M.mipmaps.length>0){Y.__webglFramebuffer[fe]=[];for(let xe=0;xe<M.mipmaps.length;xe++)Y.__webglFramebuffer[fe][xe]=r.createFramebuffer()}else Y.__webglFramebuffer[fe]=r.createFramebuffer()}else{if(M.mipmaps&&M.mipmaps.length>0){Y.__webglFramebuffer=[];for(let fe=0;fe<M.mipmaps.length;fe++)Y.__webglFramebuffer[fe]=r.createFramebuffer()}else Y.__webglFramebuffer=r.createFramebuffer();if(Pe)for(let fe=0,xe=Ee.length;fe<xe;fe++){const Ve=s.get(Ee[fe]);Ve.__webglTexture===void 0&&(Ve.__webglTexture=r.createTexture(),u.memory.textures++)}if(C.samples>0&&N(C)===!1){Y.__webglMultisampledFramebuffer=r.createFramebuffer(),Y.__webglColorRenderbuffer=[],n.bindFramebuffer(r.FRAMEBUFFER,Y.__webglMultisampledFramebuffer);for(let fe=0;fe<Ee.length;fe++){const xe=Ee[fe];Y.__webglColorRenderbuffer[fe]=r.createRenderbuffer(),r.bindRenderbuffer(r.RENDERBUFFER,Y.__webglColorRenderbuffer[fe]);const Ve=l.convert(xe.format,xe.colorSpace),$e=l.convert(xe.type),Oe=P(xe.internalFormat,Ve,$e,xe.normalized,xe.colorSpace,C.isXRRenderTarget===!0),Ie=he(C);r.renderbufferStorageMultisample(r.RENDERBUFFER,Ie,Oe,C.width,C.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+fe,r.RENDERBUFFER,Y.__webglColorRenderbuffer[fe])}r.bindRenderbuffer(r.RENDERBUFFER,null),C.depthBuffer&&(Y.__webglDepthRenderbuffer=r.createRenderbuffer(),Ft(Y.__webglDepthRenderbuffer,C,!0)),n.bindFramebuffer(r.FRAMEBUFFER,null)}}if(be){n.bindTexture(r.TEXTURE_CUBE_MAP,me.__webglTexture),Ye(r.TEXTURE_CUBE_MAP,M);for(let fe=0;fe<6;fe++)if(M.mipmaps&&M.mipmaps.length>0)for(let xe=0;xe<M.mipmaps.length;xe++)ot(Y.__webglFramebuffer[fe][xe],C,M,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+fe,xe);else ot(Y.__webglFramebuffer[fe],C,M,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+fe,0);v(M)&&b(r.TEXTURE_CUBE_MAP),n.unbindTexture()}else if(Pe){for(let fe=0,xe=Ee.length;fe<xe;fe++){const Ve=Ee[fe],$e=s.get(Ve);let Oe=r.TEXTURE_2D;(C.isWebGL3DRenderTarget||C.isWebGLArrayRenderTarget)&&(Oe=C.isWebGL3DRenderTarget?r.TEXTURE_3D:r.TEXTURE_2D_ARRAY),n.bindTexture(Oe,$e.__webglTexture),Ye(Oe,Ve),ot(Y.__webglFramebuffer,C,Ve,r.COLOR_ATTACHMENT0+fe,Oe,0),v(Ve)&&b(Oe)}n.unbindTexture()}else{let fe=r.TEXTURE_2D;if((C.isWebGL3DRenderTarget||C.isWebGLArrayRenderTarget)&&(fe=C.isWebGL3DRenderTarget?r.TEXTURE_3D:r.TEXTURE_2D_ARRAY),n.bindTexture(fe,me.__webglTexture),Ye(fe,M),M.mipmaps&&M.mipmaps.length>0)for(let xe=0;xe<M.mipmaps.length;xe++)ot(Y.__webglFramebuffer[xe],C,M,r.COLOR_ATTACHMENT0,fe,xe);else ot(Y.__webglFramebuffer,C,M,r.COLOR_ATTACHMENT0,fe,0);v(M)&&b(fe),n.unbindTexture()}C.depthBuffer&&Pt(C)}function Xt(C){const M=C.textures;for(let Y=0,me=M.length;Y<me;Y++){const Ee=M[Y];if(v(Ee)){const be=L(C),Pe=s.get(Ee).__webglTexture;n.bindTexture(be,Pe),b(be),n.unbindTexture()}}}const Yt=[],Qt=[];function G(C){if(C.samples>0){if(N(C)===!1){const M=C.textures,Y=C.width,me=C.height;let Ee=r.COLOR_BUFFER_BIT;const be=C.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,Pe=s.get(C),fe=M.length>1;if(fe)for(let Ve=0;Ve<M.length;Ve++)n.bindFramebuffer(r.FRAMEBUFFER,Pe.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+Ve,r.RENDERBUFFER,null),n.bindFramebuffer(r.FRAMEBUFFER,Pe.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+Ve,r.TEXTURE_2D,null,0);n.bindFramebuffer(r.READ_FRAMEBUFFER,Pe.__webglMultisampledFramebuffer);const xe=C.texture.mipmaps;xe&&xe.length>0?n.bindFramebuffer(r.DRAW_FRAMEBUFFER,Pe.__webglFramebuffer[0]):n.bindFramebuffer(r.DRAW_FRAMEBUFFER,Pe.__webglFramebuffer);for(let Ve=0;Ve<M.length;Ve++){if(C.resolveDepthBuffer&&(C.depthBuffer&&(Ee|=r.DEPTH_BUFFER_BIT),C.stencilBuffer&&C.resolveStencilBuffer&&(Ee|=r.STENCIL_BUFFER_BIT)),fe){r.framebufferRenderbuffer(r.READ_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.RENDERBUFFER,Pe.__webglColorRenderbuffer[Ve]);const $e=s.get(M[Ve]).__webglTexture;r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,$e,0)}r.blitFramebuffer(0,0,Y,me,0,0,Y,me,Ee,r.NEAREST),p===!0&&(Yt.length=0,Qt.length=0,Yt.push(r.COLOR_ATTACHMENT0+Ve),C.depthBuffer&&C.resolveDepthBuffer===!1&&(Yt.push(be),Qt.push(be),r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,Qt)),r.invalidateFramebuffer(r.READ_FRAMEBUFFER,Yt))}if(n.bindFramebuffer(r.READ_FRAMEBUFFER,null),n.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),fe)for(let Ve=0;Ve<M.length;Ve++){n.bindFramebuffer(r.FRAMEBUFFER,Pe.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+Ve,r.RENDERBUFFER,Pe.__webglColorRenderbuffer[Ve]);const $e=s.get(M[Ve]).__webglTexture;n.bindFramebuffer(r.FRAMEBUFFER,Pe.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+Ve,r.TEXTURE_2D,$e,0)}n.bindFramebuffer(r.DRAW_FRAMEBUFFER,Pe.__webglMultisampledFramebuffer)}else if(C.depthBuffer&&C.resolveDepthBuffer===!1&&p){const M=C.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT;r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,[M])}}}function he(C){return Math.min(a.maxSamples,C.samples)}function N(C){const M=s.get(C);return C.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&M.__useRenderToTexture!==!1}function _t(C){const M=u.render.frame;x.get(C)!==M&&(x.set(C,M),C.update())}function Fe(C,M){const Y=C.colorSpace,me=C.format,Ee=C.type;return C.isCompressedTexture===!0||C.isVideoTexture===!0||Y!==Wl&&Y!==Yr&&(zt.getTransfer(Y)===Zt?(me!==ki||Ee!==gi)&&Mt("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):Gt("WebGLTextures: Unsupported texture color space:",Y)),M}function Rt(C){return typeof HTMLImageElement<"u"&&C instanceof HTMLImageElement?(m.width=C.naturalWidth||C.width,m.height=C.naturalHeight||C.height):typeof VideoFrame<"u"&&C instanceof VideoFrame?(m.width=C.displayWidth,m.height=C.displayHeight):(m.width=C.width,m.height=C.height),m}this.allocateTextureUnit=ee,this.resetTextureUnits=oe,this.getTextureUnits=pe,this.setTextureUnits=W,this.setTexture2D=Z,this.setTexture2DArray=ue,this.setTexture3D=de,this.setTextureCube=F,this.rebindTextures=kt,this.setupRenderTarget=dt,this.updateRenderTargetMipmap=Xt,this.updateMultisampleRenderTarget=G,this.setupDepthRenderbuffer=Pt,this.setupFrameBufferTexture=ot,this.useMultisampledRTT=N,this.isReversedDepthBuffer=function(){return n.buffers.depth.getReversed()}}function FM(r,e){function n(s,a=Yr){let l;const u=zt.getTransfer(a);if(s===gi)return r.UNSIGNED_BYTE;if(s===hf)return r.UNSIGNED_SHORT_4_4_4_4;if(s===pf)return r.UNSIGNED_SHORT_5_5_5_1;if(s===v0)return r.UNSIGNED_INT_5_9_9_9_REV;if(s===x0)return r.UNSIGNED_INT_10F_11F_11F_REV;if(s===g0)return r.BYTE;if(s===_0)return r.SHORT;if(s===aa)return r.UNSIGNED_SHORT;if(s===ff)return r.INT;if(s===Qi)return r.UNSIGNED_INT;if(s===Yi)return r.FLOAT;if(s===xr)return r.HALF_FLOAT;if(s===S0)return r.ALPHA;if(s===y0)return r.RGB;if(s===ki)return r.RGBA;if(s===Sr)return r.DEPTH_COMPONENT;if(s===xs)return r.DEPTH_STENCIL;if(s===M0)return r.RED;if(s===mf)return r.RED_INTEGER;if(s===ys)return r.RG;if(s===gf)return r.RG_INTEGER;if(s===_f)return r.RGBA_INTEGER;if(s===Ol||s===kl||s===Bl||s===zl)if(u===Zt)if(l=e.get("WEBGL_compressed_texture_s3tc_srgb"),l!==null){if(s===Ol)return l.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(s===kl)return l.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(s===Bl)return l.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(s===zl)return l.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(l=e.get("WEBGL_compressed_texture_s3tc"),l!==null){if(s===Ol)return l.COMPRESSED_RGB_S3TC_DXT1_EXT;if(s===kl)return l.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(s===Bl)return l.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(s===zl)return l.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(s===Ad||s===bd||s===Cd||s===Rd)if(l=e.get("WEBGL_compressed_texture_pvrtc"),l!==null){if(s===Ad)return l.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(s===bd)return l.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(s===Cd)return l.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(s===Rd)return l.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(s===Pd||s===Ld||s===Dd||s===Id||s===Nd||s===Vl||s===Ud)if(l=e.get("WEBGL_compressed_texture_etc"),l!==null){if(s===Pd||s===Ld)return u===Zt?l.COMPRESSED_SRGB8_ETC2:l.COMPRESSED_RGB8_ETC2;if(s===Dd)return u===Zt?l.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:l.COMPRESSED_RGBA8_ETC2_EAC;if(s===Id)return l.COMPRESSED_R11_EAC;if(s===Nd)return l.COMPRESSED_SIGNED_R11_EAC;if(s===Vl)return l.COMPRESSED_RG11_EAC;if(s===Ud)return l.COMPRESSED_SIGNED_RG11_EAC}else return null;if(s===Fd||s===Od||s===kd||s===Bd||s===zd||s===Hd||s===Vd||s===Gd||s===Wd||s===Xd||s===jd||s===Yd||s===qd||s===$d)if(l=e.get("WEBGL_compressed_texture_astc"),l!==null){if(s===Fd)return u===Zt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:l.COMPRESSED_RGBA_ASTC_4x4_KHR;if(s===Od)return u===Zt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:l.COMPRESSED_RGBA_ASTC_5x4_KHR;if(s===kd)return u===Zt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:l.COMPRESSED_RGBA_ASTC_5x5_KHR;if(s===Bd)return u===Zt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:l.COMPRESSED_RGBA_ASTC_6x5_KHR;if(s===zd)return u===Zt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:l.COMPRESSED_RGBA_ASTC_6x6_KHR;if(s===Hd)return u===Zt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:l.COMPRESSED_RGBA_ASTC_8x5_KHR;if(s===Vd)return u===Zt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:l.COMPRESSED_RGBA_ASTC_8x6_KHR;if(s===Gd)return u===Zt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:l.COMPRESSED_RGBA_ASTC_8x8_KHR;if(s===Wd)return u===Zt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:l.COMPRESSED_RGBA_ASTC_10x5_KHR;if(s===Xd)return u===Zt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:l.COMPRESSED_RGBA_ASTC_10x6_KHR;if(s===jd)return u===Zt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:l.COMPRESSED_RGBA_ASTC_10x8_KHR;if(s===Yd)return u===Zt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:l.COMPRESSED_RGBA_ASTC_10x10_KHR;if(s===qd)return u===Zt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:l.COMPRESSED_RGBA_ASTC_12x10_KHR;if(s===$d)return u===Zt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:l.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(s===Kd||s===Zd||s===Jd)if(l=e.get("EXT_texture_compression_bptc"),l!==null){if(s===Kd)return u===Zt?l.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:l.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(s===Zd)return l.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(s===Jd)return l.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(s===Qd||s===ef||s===Gl||s===tf)if(l=e.get("EXT_texture_compression_rgtc"),l!==null){if(s===Qd)return l.COMPRESSED_RED_RGTC1_EXT;if(s===ef)return l.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(s===Gl)return l.COMPRESSED_RED_GREEN_RGTC2_EXT;if(s===tf)return l.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return s===la?r.UNSIGNED_INT_24_8:r[s]!==void 0?r[s]:null}return{convert:n}}const OM=`
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

}`;class BM{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,n){if(this.texture===null){const s=new P0(e.texture);(e.depthNear!==n.depthNear||e.depthFar!==n.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=s}}getMesh(e){if(this.texture!==null&&this.mesh===null){const n=e.cameras[0].viewport,s=new er({vertexShader:OM,fragmentShader:kM,uniforms:{depthColor:{value:this.texture},depthWidth:{value:n.z},depthHeight:{value:n.w}}});this.mesh=new Ae(new Un(20,20),s)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class zM extends Ms{constructor(e,n){super();const s=this;let a=null,l=1,u=null,f="local-floor",p=1,m=null,x=null,S=null,g=null,y=null,T=null;const R=typeof XRWebGLBinding<"u",_=new BM,v={},b=n.getContextAttributes();let L=null,P=null;const z=[],D=[],k=new Ht;let w=null;const I=new mi;I.viewport=new mn;const j=new mi;j.viewport=new mn;const O=[I,j],q=new $v;let oe=null,pe=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(ae){let Te=z[ae];return Te===void 0&&(Te=new Wu,z[ae]=Te),Te.getTargetRaySpace()},this.getControllerGrip=function(ae){let Te=z[ae];return Te===void 0&&(Te=new Wu,z[ae]=Te),Te.getGripSpace()},this.getHand=function(ae){let Te=z[ae];return Te===void 0&&(Te=new Wu,z[ae]=Te),Te.getHandSpace()};function W(ae){const Te=D.indexOf(ae.inputSource);if(Te===-1)return;const ye=z[Te];ye!==void 0&&(ye.update(ae.inputSource,ae.frame,m||u),ye.dispatchEvent({type:ae.type,data:ae.inputSource}))}function ee(){a.removeEventListener("select",W),a.removeEventListener("selectstart",W),a.removeEventListener("selectend",W),a.removeEventListener("squeeze",W),a.removeEventListener("squeezestart",W),a.removeEventListener("squeezeend",W),a.removeEventListener("end",ee),a.removeEventListener("inputsourceschange",K);for(let ae=0;ae<z.length;ae++){const Te=D[ae];Te!==null&&(D[ae]=null,z[ae].disconnect(Te))}oe=null,pe=null,_.reset();for(const ae in v)delete v[ae];e.setRenderTarget(L),y=null,g=null,S=null,a=null,P=null,Ye.stop(),s.isPresenting=!1,e.setPixelRatio(w),e.setSize(k.width,k.height,!1),s.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(ae){l=ae,s.isPresenting===!0&&Mt("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(ae){f=ae,s.isPresenting===!0&&Mt("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return m||u},this.setReferenceSpace=function(ae){m=ae},this.getBaseLayer=function(){return g!==null?g:y},this.getBinding=function(){return S===null&&R&&(S=new XRWebGLBinding(a,n)),S},this.getFrame=function(){return T},this.getSession=function(){return a},this.setSession=async function(ae){if(a=ae,a!==null){if(L=e.getRenderTarget(),a.addEventListener("select",W),a.addEventListener("selectstart",W),a.addEventListener("selectend",W),a.addEventListener("squeeze",W),a.addEventListener("squeezestart",W),a.addEventListener("squeezeend",W),a.addEventListener("end",ee),a.addEventListener("inputsourceschange",K),b.xrCompatible!==!0&&await n.makeXRCompatible(),w=e.getPixelRatio(),e.getSize(k),R&&"createProjectionLayer"in XRWebGLBinding.prototype){let ye=null,Ge=null,st=null;b.depth&&(st=b.stencil?n.DEPTH24_STENCIL8:n.DEPTH_COMPONENT24,ye=b.stencil?xs:Sr,Ge=b.stencil?la:Qi);const ot={colorFormat:n.RGBA8,depthFormat:st,scaleFactor:l};S=this.getBinding(),g=S.createProjectionLayer(ot),a.updateRenderState({layers:[g]}),e.setPixelRatio(1),e.setSize(g.textureWidth,g.textureHeight,!1),P=new Zi(g.textureWidth,g.textureHeight,{format:ki,type:gi,depthTexture:new ho(g.textureWidth,g.textureHeight,Ge,void 0,void 0,void 0,void 0,void 0,void 0,ye),stencilBuffer:b.stencil,colorSpace:e.outputColorSpace,samples:b.antialias?4:0,resolveDepthBuffer:g.ignoreDepthValues===!1,resolveStencilBuffer:g.ignoreDepthValues===!1})}else{const ye={antialias:b.antialias,alpha:!0,depth:b.depth,stencil:b.stencil,framebufferScaleFactor:l};y=new XRWebGLLayer(a,n,ye),a.updateRenderState({baseLayer:y}),e.setPixelRatio(1),e.setSize(y.framebufferWidth,y.framebufferHeight,!1),P=new Zi(y.framebufferWidth,y.framebufferHeight,{format:ki,type:gi,colorSpace:e.outputColorSpace,stencilBuffer:b.stencil,resolveDepthBuffer:y.ignoreDepthValues===!1,resolveStencilBuffer:y.ignoreDepthValues===!1})}P.isXRRenderTarget=!0,this.setFoveation(p),m=null,u=await a.requestReferenceSpace(f),Ye.setContext(a),Ye.start(),s.isPresenting=!0,s.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(a!==null)return a.environmentBlendMode},this.getDepthTexture=function(){return _.getDepthTexture()};function K(ae){for(let Te=0;Te<ae.removed.length;Te++){const ye=ae.removed[Te],Ge=D.indexOf(ye);Ge>=0&&(D[Ge]=null,z[Ge].disconnect(ye))}for(let Te=0;Te<ae.added.length;Te++){const ye=ae.added[Te];let Ge=D.indexOf(ye);if(Ge===-1){for(let ot=0;ot<z.length;ot++)if(ot>=D.length){D.push(ye),Ge=ot;break}else if(D[ot]===null){D[ot]=ye,Ge=ot;break}if(Ge===-1)break}const st=z[Ge];st&&st.connect(ye)}}const Z=new J,ue=new J;function de(ae,Te,ye){Z.setFromMatrixPosition(Te.matrixWorld),ue.setFromMatrixPosition(ye.matrixWorld);const Ge=Z.distanceTo(ue),st=Te.projectionMatrix.elements,ot=ye.projectionMatrix.elements,Ft=st[14]/(st[10]-1),ht=st[14]/(st[10]+1),Pt=(st[9]+1)/st[5],kt=(st[9]-1)/st[5],dt=(st[8]-1)/st[0],Xt=(ot[8]+1)/ot[0],Yt=Ft*dt,Qt=Ft*Xt,G=Ge/(-dt+Xt),he=G*-dt;if(Te.matrixWorld.decompose(ae.position,ae.quaternion,ae.scale),ae.translateX(he),ae.translateZ(G),ae.matrixWorld.compose(ae.position,ae.quaternion,ae.scale),ae.matrixWorldInverse.copy(ae.matrixWorld).invert(),st[10]===-1)ae.projectionMatrix.copy(Te.projectionMatrix),ae.projectionMatrixInverse.copy(Te.projectionMatrixInverse);else{const N=Ft+G,_t=ht+G,Fe=Yt-he,Rt=Qt+(Ge-he),C=Pt*ht/_t*N,M=kt*ht/_t*N;ae.projectionMatrix.makePerspective(Fe,Rt,C,M,N,_t),ae.projectionMatrixInverse.copy(ae.projectionMatrix).invert()}}function F(ae,Te){Te===null?ae.matrixWorld.copy(ae.matrix):ae.matrixWorld.multiplyMatrices(Te.matrixWorld,ae.matrix),ae.matrixWorldInverse.copy(ae.matrixWorld).invert()}this.updateCamera=function(ae){if(a===null)return;let Te=ae.near,ye=ae.far;_.texture!==null&&(_.depthNear>0&&(Te=_.depthNear),_.depthFar>0&&(ye=_.depthFar)),q.near=j.near=I.near=Te,q.far=j.far=I.far=ye,(oe!==q.near||pe!==q.far)&&(a.updateRenderState({depthNear:q.near,depthFar:q.far}),oe=q.near,pe=q.far),q.layers.mask=ae.layers.mask|6,I.layers.mask=q.layers.mask&-5,j.layers.mask=q.layers.mask&-3;const Ge=ae.parent,st=q.cameras;F(q,Ge);for(let ot=0;ot<st.length;ot++)F(st[ot],Ge);st.length===2?de(q,I,j):q.projectionMatrix.copy(I.projectionMatrix),te(ae,q,Ge)};function te(ae,Te,ye){ye===null?ae.matrix.copy(Te.matrixWorld):(ae.matrix.copy(ye.matrixWorld),ae.matrix.invert(),ae.matrix.multiply(Te.matrixWorld)),ae.matrix.decompose(ae.position,ae.quaternion,ae.scale),ae.updateMatrixWorld(!0),ae.projectionMatrix.copy(Te.projectionMatrix),ae.projectionMatrixInverse.copy(Te.projectionMatrixInverse),ae.isPerspectiveCamera&&(ae.fov=sf*2*Math.atan(1/ae.projectionMatrix.elements[5]),ae.zoom=1)}this.getCamera=function(){return q},this.getFoveation=function(){if(!(g===null&&y===null))return p},this.setFoveation=function(ae){p=ae,g!==null&&(g.fixedFoveation=ae),y!==null&&y.fixedFoveation!==void 0&&(y.fixedFoveation=ae)},this.hasDepthSensing=function(){return _.texture!==null},this.getDepthSensingMesh=function(){return _.getMesh(q)},this.getCameraTexture=function(ae){return v[ae]};let je=null;function De(ae,Te){if(x=Te.getViewerPose(m||u),T=Te,x!==null){const ye=x.views;y!==null&&(e.setRenderTargetFramebuffer(P,y.framebuffer),e.setRenderTarget(P));let Ge=!1;ye.length!==q.cameras.length&&(q.cameras.length=0,Ge=!0);for(let ht=0;ht<ye.length;ht++){const Pt=ye[ht];let kt=null;if(y!==null)kt=y.getViewport(Pt);else{const Xt=S.getViewSubImage(g,Pt);kt=Xt.viewport,ht===0&&(e.setRenderTargetTextures(P,Xt.colorTexture,Xt.depthStencilTexture),e.setRenderTarget(P))}let dt=O[ht];dt===void 0&&(dt=new mi,dt.layers.enable(ht),dt.viewport=new mn,O[ht]=dt),dt.matrix.fromArray(Pt.transform.matrix),dt.matrix.decompose(dt.position,dt.quaternion,dt.scale),dt.projectionMatrix.fromArray(Pt.projectionMatrix),dt.projectionMatrixInverse.copy(dt.projectionMatrix).invert(),dt.viewport.set(kt.x,kt.y,kt.width,kt.height),ht===0&&(q.matrix.copy(dt.matrix),q.matrix.decompose(q.position,q.quaternion,q.scale)),Ge===!0&&q.cameras.push(dt)}const st=a.enabledFeatures;if(st&&st.includes("depth-sensing")&&a.depthUsage=="gpu-optimized"&&R){S=s.getBinding();const ht=S.getDepthInformation(ye[0]);ht&&ht.isValid&&ht.texture&&_.init(ht,a.renderState)}if(st&&st.includes("camera-access")&&R){e.state.unbindTexture(),S=s.getBinding();for(let ht=0;ht<ye.length;ht++){const Pt=ye[ht].camera;if(Pt){let kt=v[Pt];kt||(kt=new P0,v[Pt]=kt);const dt=S.getCameraImage(Pt);kt.sourceTexture=dt}}}}for(let ye=0;ye<z.length;ye++){const Ge=D[ye],st=z[ye];Ge!==null&&st!==void 0&&st.update(Ge,Te,m||u)}je&&je(ae,Te),Te.detectedPlanes&&s.dispatchEvent({type:"planesdetected",data:Te}),T=null}const Ye=new N0;Ye.setAnimationLoop(De),this.setAnimationLoop=function(ae){je=ae},this.dispose=function(){}}}const HM=new gn,H0=new Ct;H0.set(-1,0,0,0,1,0,0,0,1);function VM(r,e){function n(_,v){_.matrixAutoUpdate===!0&&_.updateMatrix(),v.value.copy(_.matrix)}function s(_,v){v.color.getRGB(_.fogColor.value,L0(r)),v.isFog?(_.fogNear.value=v.near,_.fogFar.value=v.far):v.isFogExp2&&(_.fogDensity.value=v.density)}function a(_,v,b,L,P){v.isNodeMaterial?v.uniformsNeedUpdate=!1:v.isMeshBasicMaterial?l(_,v):v.isMeshLambertMaterial?(l(_,v),v.envMap&&(_.envMapIntensity.value=v.envMapIntensity)):v.isMeshToonMaterial?(l(_,v),S(_,v)):v.isMeshPhongMaterial?(l(_,v),x(_,v),v.envMap&&(_.envMapIntensity.value=v.envMapIntensity)):v.isMeshStandardMaterial?(l(_,v),g(_,v),v.isMeshPhysicalMaterial&&y(_,v,P)):v.isMeshMatcapMaterial?(l(_,v),T(_,v)):v.isMeshDepthMaterial?l(_,v):v.isMeshDistanceMaterial?(l(_,v),R(_,v)):v.isMeshNormalMaterial?l(_,v):v.isLineBasicMaterial?(u(_,v),v.isLineDashedMaterial&&f(_,v)):v.isPointsMaterial?p(_,v,b,L):v.isSpriteMaterial?m(_,v):v.isShadowMaterial?(_.color.value.copy(v.color),_.opacity.value=v.opacity):v.isShaderMaterial&&(v.uniformsNeedUpdate=!1)}function l(_,v){_.opacity.value=v.opacity,v.color&&_.diffuse.value.copy(v.color),v.emissive&&_.emissive.value.copy(v.emissive).multiplyScalar(v.emissiveIntensity),v.map&&(_.map.value=v.map,n(v.map,_.mapTransform)),v.alphaMap&&(_.alphaMap.value=v.alphaMap,n(v.alphaMap,_.alphaMapTransform)),v.bumpMap&&(_.bumpMap.value=v.bumpMap,n(v.bumpMap,_.bumpMapTransform),_.bumpScale.value=v.bumpScale,v.side===li&&(_.bumpScale.value*=-1)),v.normalMap&&(_.normalMap.value=v.normalMap,n(v.normalMap,_.normalMapTransform),_.normalScale.value.copy(v.normalScale),v.side===li&&_.normalScale.value.negate()),v.displacementMap&&(_.displacementMap.value=v.displacementMap,n(v.displacementMap,_.displacementMapTransform),_.displacementScale.value=v.displacementScale,_.displacementBias.value=v.displacementBias),v.emissiveMap&&(_.emissiveMap.value=v.emissiveMap,n(v.emissiveMap,_.emissiveMapTransform)),v.specularMap&&(_.specularMap.value=v.specularMap,n(v.specularMap,_.specularMapTransform)),v.alphaTest>0&&(_.alphaTest.value=v.alphaTest);const b=e.get(v),L=b.envMap,P=b.envMapRotation;L&&(_.envMap.value=L,_.envMapRotation.value.setFromMatrix4(HM.makeRotationFromEuler(P)).transpose(),L.isCubeTexture&&L.isRenderTargetTexture===!1&&_.envMapRotation.value.premultiply(H0),_.reflectivity.value=v.reflectivity,_.ior.value=v.ior,_.refractionRatio.value=v.refractionRatio),v.lightMap&&(_.lightMap.value=v.lightMap,_.lightMapIntensity.value=v.lightMapIntensity,n(v.lightMap,_.lightMapTransform)),v.aoMap&&(_.aoMap.value=v.aoMap,_.aoMapIntensity.value=v.aoMapIntensity,n(v.aoMap,_.aoMapTransform))}function u(_,v){_.diffuse.value.copy(v.color),_.opacity.value=v.opacity,v.map&&(_.map.value=v.map,n(v.map,_.mapTransform))}function f(_,v){_.dashSize.value=v.dashSize,_.totalSize.value=v.dashSize+v.gapSize,_.scale.value=v.scale}function p(_,v,b,L){_.diffuse.value.copy(v.color),_.opacity.value=v.opacity,_.size.value=v.size*b,_.scale.value=L*.5,v.map&&(_.map.value=v.map,n(v.map,_.uvTransform)),v.alphaMap&&(_.alphaMap.value=v.alphaMap,n(v.alphaMap,_.alphaMapTransform)),v.alphaTest>0&&(_.alphaTest.value=v.alphaTest)}function m(_,v){_.diffuse.value.copy(v.color),_.opacity.value=v.opacity,_.rotation.value=v.rotation,v.map&&(_.map.value=v.map,n(v.map,_.mapTransform)),v.alphaMap&&(_.alphaMap.value=v.alphaMap,n(v.alphaMap,_.alphaMapTransform)),v.alphaTest>0&&(_.alphaTest.value=v.alphaTest)}function x(_,v){_.specular.value.copy(v.specular),_.shininess.value=Math.max(v.shininess,1e-4)}function S(_,v){v.gradientMap&&(_.gradientMap.value=v.gradientMap)}function g(_,v){_.metalness.value=v.metalness,v.metalnessMap&&(_.metalnessMap.value=v.metalnessMap,n(v.metalnessMap,_.metalnessMapTransform)),_.roughness.value=v.roughness,v.roughnessMap&&(_.roughnessMap.value=v.roughnessMap,n(v.roughnessMap,_.roughnessMapTransform)),v.envMap&&(_.envMapIntensity.value=v.envMapIntensity)}function y(_,v,b){_.ior.value=v.ior,v.sheen>0&&(_.sheenColor.value.copy(v.sheenColor).multiplyScalar(v.sheen),_.sheenRoughness.value=v.sheenRoughness,v.sheenColorMap&&(_.sheenColorMap.value=v.sheenColorMap,n(v.sheenColorMap,_.sheenColorMapTransform)),v.sheenRoughnessMap&&(_.sheenRoughnessMap.value=v.sheenRoughnessMap,n(v.sheenRoughnessMap,_.sheenRoughnessMapTransform))),v.clearcoat>0&&(_.clearcoat.value=v.clearcoat,_.clearcoatRoughness.value=v.clearcoatRoughness,v.clearcoatMap&&(_.clearcoatMap.value=v.clearcoatMap,n(v.clearcoatMap,_.clearcoatMapTransform)),v.clearcoatRoughnessMap&&(_.clearcoatRoughnessMap.value=v.clearcoatRoughnessMap,n(v.clearcoatRoughnessMap,_.clearcoatRoughnessMapTransform)),v.clearcoatNormalMap&&(_.clearcoatNormalMap.value=v.clearcoatNormalMap,n(v.clearcoatNormalMap,_.clearcoatNormalMapTransform),_.clearcoatNormalScale.value.copy(v.clearcoatNormalScale),v.side===li&&_.clearcoatNormalScale.value.negate())),v.dispersion>0&&(_.dispersion.value=v.dispersion),v.iridescence>0&&(_.iridescence.value=v.iridescence,_.iridescenceIOR.value=v.iridescenceIOR,_.iridescenceThicknessMinimum.value=v.iridescenceThicknessRange[0],_.iridescenceThicknessMaximum.value=v.iridescenceThicknessRange[1],v.iridescenceMap&&(_.iridescenceMap.value=v.iridescenceMap,n(v.iridescenceMap,_.iridescenceMapTransform)),v.iridescenceThicknessMap&&(_.iridescenceThicknessMap.value=v.iridescenceThicknessMap,n(v.iridescenceThicknessMap,_.iridescenceThicknessMapTransform))),v.transmission>0&&(_.transmission.value=v.transmission,_.transmissionSamplerMap.value=b.texture,_.transmissionSamplerSize.value.set(b.width,b.height),v.transmissionMap&&(_.transmissionMap.value=v.transmissionMap,n(v.transmissionMap,_.transmissionMapTransform)),_.thickness.value=v.thickness,v.thicknessMap&&(_.thicknessMap.value=v.thicknessMap,n(v.thicknessMap,_.thicknessMapTransform)),_.attenuationDistance.value=v.attenuationDistance,_.attenuationColor.value.copy(v.attenuationColor)),v.anisotropy>0&&(_.anisotropyVector.value.set(v.anisotropy*Math.cos(v.anisotropyRotation),v.anisotropy*Math.sin(v.anisotropyRotation)),v.anisotropyMap&&(_.anisotropyMap.value=v.anisotropyMap,n(v.anisotropyMap,_.anisotropyMapTransform))),_.specularIntensity.value=v.specularIntensity,_.specularColor.value.copy(v.specularColor),v.specularColorMap&&(_.specularColorMap.value=v.specularColorMap,n(v.specularColorMap,_.specularColorMapTransform)),v.specularIntensityMap&&(_.specularIntensityMap.value=v.specularIntensityMap,n(v.specularIntensityMap,_.specularIntensityMapTransform))}function T(_,v){v.matcap&&(_.matcap.value=v.matcap)}function R(_,v){const b=e.get(v).light;_.referencePosition.value.setFromMatrixPosition(b.matrixWorld),_.nearDistance.value=b.shadow.camera.near,_.farDistance.value=b.shadow.camera.far}return{refreshFogUniforms:s,refreshMaterialUniforms:a}}function GM(r,e,n,s){let a={},l={},u=[];const f=r.getParameter(r.MAX_UNIFORM_BUFFER_BINDINGS);function p(b,L){const P=L.program;s.uniformBlockBinding(b,P)}function m(b,L){let P=a[b.id];P===void 0&&(T(b),P=x(b),a[b.id]=P,b.addEventListener("dispose",_));const z=L.program;s.updateUBOMapping(b,z);const D=e.render.frame;l[b.id]!==D&&(g(b),l[b.id]=D)}function x(b){const L=S();b.__bindingPointIndex=L;const P=r.createBuffer(),z=b.__size,D=b.usage;return r.bindBuffer(r.UNIFORM_BUFFER,P),r.bufferData(r.UNIFORM_BUFFER,z,D),r.bindBuffer(r.UNIFORM_BUFFER,null),r.bindBufferBase(r.UNIFORM_BUFFER,L,P),P}function S(){for(let b=0;b<f;b++)if(u.indexOf(b)===-1)return u.push(b),b;return Gt("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function g(b){const L=a[b.id],P=b.uniforms,z=b.__cache;r.bindBuffer(r.UNIFORM_BUFFER,L);for(let D=0,k=P.length;D<k;D++){const w=Array.isArray(P[D])?P[D]:[P[D]];for(let I=0,j=w.length;I<j;I++){const O=w[I];if(y(O,D,I,z)===!0){const q=O.__offset,oe=Array.isArray(O.value)?O.value:[O.value];let pe=0;for(let W=0;W<oe.length;W++){const ee=oe[W],K=R(ee);typeof ee=="number"||typeof ee=="boolean"?(O.__data[0]=ee,r.bufferSubData(r.UNIFORM_BUFFER,q+pe,O.__data)):ee.isMatrix3?(O.__data[0]=ee.elements[0],O.__data[1]=ee.elements[1],O.__data[2]=ee.elements[2],O.__data[3]=0,O.__data[4]=ee.elements[3],O.__data[5]=ee.elements[4],O.__data[6]=ee.elements[5],O.__data[7]=0,O.__data[8]=ee.elements[6],O.__data[9]=ee.elements[7],O.__data[10]=ee.elements[8],O.__data[11]=0):ArrayBuffer.isView(ee)?O.__data.set(new ee.constructor(ee.buffer,ee.byteOffset,O.__data.length)):(ee.toArray(O.__data,pe),pe+=K.storage/Float32Array.BYTES_PER_ELEMENT)}r.bufferSubData(r.UNIFORM_BUFFER,q,O.__data)}}}r.bindBuffer(r.UNIFORM_BUFFER,null)}function y(b,L,P,z){const D=b.value,k=L+"_"+P;if(z[k]===void 0)return typeof D=="number"||typeof D=="boolean"?z[k]=D:ArrayBuffer.isView(D)?z[k]=D.slice():z[k]=D.clone(),!0;{const w=z[k];if(typeof D=="number"||typeof D=="boolean"){if(w!==D)return z[k]=D,!0}else{if(ArrayBuffer.isView(D))return!0;if(w.equals(D)===!1)return w.copy(D),!0}}return!1}function T(b){const L=b.uniforms;let P=0;const z=16;for(let k=0,w=L.length;k<w;k++){const I=Array.isArray(L[k])?L[k]:[L[k]];for(let j=0,O=I.length;j<O;j++){const q=I[j],oe=Array.isArray(q.value)?q.value:[q.value];for(let pe=0,W=oe.length;pe<W;pe++){const ee=oe[pe],K=R(ee),Z=P%z,ue=Z%K.boundary,de=Z+ue;P+=ue,de!==0&&z-de<K.storage&&(P+=z-de),q.__data=new Float32Array(K.storage/Float32Array.BYTES_PER_ELEMENT),q.__offset=P,P+=K.storage}}}const D=P%z;return D>0&&(P+=z-D),b.__size=P,b.__cache={},this}function R(b){const L={boundary:0,storage:0};return typeof b=="number"||typeof b=="boolean"?(L.boundary=4,L.storage=4):b.isVector2?(L.boundary=8,L.storage=8):b.isVector3||b.isColor?(L.boundary=16,L.storage=12):b.isVector4?(L.boundary=16,L.storage=16):b.isMatrix3?(L.boundary=48,L.storage=48):b.isMatrix4?(L.boundary=64,L.storage=64):b.isTexture?Mt("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(b)?(L.boundary=16,L.storage=b.byteLength):Mt("WebGLRenderer: Unsupported uniform value type.",b),L}function _(b){const L=b.target;L.removeEventListener("dispose",_);const P=u.indexOf(L.__bindingPointIndex);u.splice(P,1),r.deleteBuffer(a[L.id]),delete a[L.id],delete l[L.id]}function v(){for(const b in a)r.deleteBuffer(a[b]);u=[],a={},l={}}return{bind:p,update:m,dispose:v}}const WM=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let Xi=null;function XM(){return Xi===null&&(Xi=new Lv(WM,16,16,ys,xr),Xi.name="DFG_LUT",Xi.minFilter=jn,Xi.magFilter=jn,Xi.wrapS=gr,Xi.wrapT=gr,Xi.generateMipmaps=!1,Xi.needsUpdate=!0),Xi}class jM{constructor(e={}){const{canvas:n=lv(),context:s=null,depth:a=!0,stencil:l=!1,alpha:u=!1,antialias:f=!1,premultipliedAlpha:p=!0,preserveDrawingBuffer:m=!1,powerPreference:x="default",failIfMajorPerformanceCaveat:S=!1,reversedDepthBuffer:g=!1,outputBufferType:y=gi}=e;this.isWebGLRenderer=!0;let T;if(s!==null){if(typeof WebGLRenderingContext<"u"&&s instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");T=s.getContextAttributes().alpha}else T=u;const R=y,_=new Set([_f,gf,mf]),v=new Set([gi,Qi,aa,la,hf,pf]),b=new Uint32Array(4),L=new Int32Array(4),P=new J;let z=null,D=null;const k=[],w=[];let I=null;this.domElement=n,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Ki,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const j=this;let O=!1,q=null;this._outputColorSpace=ai;let oe=0,pe=0,W=null,ee=-1,K=null;const Z=new mn,ue=new mn;let de=null;const F=new Dt(0);let te=0,je=n.width,De=n.height,Ye=1,ae=null,Te=null;const ye=new mn(0,0,je,De),Ge=new mn(0,0,je,De);let st=!1;const ot=new wf;let Ft=!1,ht=!1;const Pt=new gn,kt=new J,dt=new mn,Xt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Yt=!1;function Qt(){return W===null?Ye:1}let G=s;function he(A,$){return n.getContext(A,$)}try{const A={alpha:!0,depth:a,stencil:l,antialias:f,premultipliedAlpha:p,preserveDrawingBuffer:m,powerPreference:x,failIfMajorPerformanceCaveat:S};if("setAttribute"in n&&n.setAttribute("data-engine",`three.js r${uf}`),n.addEventListener("webglcontextlost",we,!1),n.addEventListener("webglcontextrestored",Xe,!1),n.addEventListener("webglcontextcreationerror",pt,!1),G===null){const $="webgl2";if(G=he($,A),G===null)throw he($)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(A){throw Gt("WebGLRenderer: "+A.message),A}let N,_t,Fe,Rt,C,M,Y,me,Ee,be,Pe,fe,xe,Ve,$e,Oe,Ie,ft,vt,xt,B,Ne,ve;function qe(){N=new Xy(G),N.init(),B=new FM(G,N),_t=new Oy(G,N,e,B),Fe=new NM(G,N),_t.reversedDepthBuffer&&g&&Fe.buffers.depth.setReversed(!0),Rt=new qy(G),C=new SM,M=new UM(G,N,Fe,C,_t,B,Rt),Y=new Wy(j),me=new Jv(G),Ne=new Uy(G,me),Ee=new jy(G,me,Rt,Ne),be=new Ky(G,Ee,me,Ne,Rt),ft=new $y(G,_t,M),$e=new ky(C),Pe=new xM(j,Y,N,_t,Ne,$e),fe=new VM(j,C),xe=new MM,Ve=new CM(N),Ie=new Ny(j,Y,Fe,be,T,p),Oe=new IM(j,be,_t),ve=new GM(G,Rt,_t,Fe),vt=new Fy(G,N,Rt),xt=new Yy(G,N,Rt),Rt.programs=Pe.programs,j.capabilities=_t,j.extensions=N,j.properties=C,j.renderLists=xe,j.shadowMap=Oe,j.state=Fe,j.info=Rt}qe(),R!==gi&&(I=new Jy(R,n.width,n.height,a,l));const ke=new zM(j,G);this.xr=ke,this.getContext=function(){return G},this.getContextAttributes=function(){return G.getContextAttributes()},this.forceContextLoss=function(){const A=N.get("WEBGL_lose_context");A&&A.loseContext()},this.forceContextRestore=function(){const A=N.get("WEBGL_lose_context");A&&A.restoreContext()},this.getPixelRatio=function(){return Ye},this.setPixelRatio=function(A){A!==void 0&&(Ye=A,this.setSize(je,De,!1))},this.getSize=function(A){return A.set(je,De)},this.setSize=function(A,$,le=!0){if(ke.isPresenting){Mt("WebGLRenderer: Can't change size while VR device is presenting.");return}je=A,De=$,n.width=Math.floor(A*Ye),n.height=Math.floor($*Ye),le===!0&&(n.style.width=A+"px",n.style.height=$+"px"),I!==null&&I.setSize(n.width,n.height),this.setViewport(0,0,A,$)},this.getDrawingBufferSize=function(A){return A.set(je*Ye,De*Ye).floor()},this.setDrawingBufferSize=function(A,$,le){je=A,De=$,Ye=le,n.width=Math.floor(A*le),n.height=Math.floor($*le),this.setViewport(0,0,A,$)},this.setEffects=function(A){if(R===gi){Gt("THREE.WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(A){for(let $=0;$<A.length;$++)if(A[$].isOutputPass===!0){Mt("THREE.WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}I.setEffects(A||[])},this.getCurrentViewport=function(A){return A.copy(Z)},this.getViewport=function(A){return A.copy(ye)},this.setViewport=function(A,$,le,re){A.isVector4?ye.set(A.x,A.y,A.z,A.w):ye.set(A,$,le,re),Fe.viewport(Z.copy(ye).multiplyScalar(Ye).round())},this.getScissor=function(A){return A.copy(Ge)},this.setScissor=function(A,$,le,re){A.isVector4?Ge.set(A.x,A.y,A.z,A.w):Ge.set(A,$,le,re),Fe.scissor(ue.copy(Ge).multiplyScalar(Ye).round())},this.getScissorTest=function(){return st},this.setScissorTest=function(A){Fe.setScissorTest(st=A)},this.setOpaqueSort=function(A){ae=A},this.setTransparentSort=function(A){Te=A},this.getClearColor=function(A){return A.copy(Ie.getClearColor())},this.setClearColor=function(){Ie.setClearColor(...arguments)},this.getClearAlpha=function(){return Ie.getClearAlpha()},this.setClearAlpha=function(){Ie.setClearAlpha(...arguments)},this.clear=function(A=!0,$=!0,le=!0){let re=0;if(A){let ie=!1;if(W!==null){const We=W.texture.format;ie=_.has(We)}if(ie){const We=W.texture.type,Qe=v.has(We),He=Ie.getClearColor(),it=Ie.getClearAlpha(),ct=He.r,wt=He.g,Tt=He.b;Qe?(b[0]=ct,b[1]=wt,b[2]=Tt,b[3]=it,G.clearBufferuiv(G.COLOR,0,b)):(L[0]=ct,L[1]=wt,L[2]=Tt,L[3]=it,G.clearBufferiv(G.COLOR,0,L))}else re|=G.COLOR_BUFFER_BIT}$&&(re|=G.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),le&&(re|=G.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),re!==0&&G.clear(re)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(A){A.setRenderer(this),q=A},this.dispose=function(){n.removeEventListener("webglcontextlost",we,!1),n.removeEventListener("webglcontextrestored",Xe,!1),n.removeEventListener("webglcontextcreationerror",pt,!1),Ie.dispose(),xe.dispose(),Ve.dispose(),C.dispose(),Y.dispose(),be.dispose(),Ne.dispose(),ve.dispose(),Pe.dispose(),ke.dispose(),ke.removeEventListener("sessionstart",Ue),ke.removeEventListener("sessionend",ut),At.stop()};function we(A){A.preventDefault(),pm("WebGLRenderer: Context Lost."),O=!0}function Xe(){pm("WebGLRenderer: Context Restored."),O=!1;const A=Rt.autoReset,$=Oe.enabled,le=Oe.autoUpdate,re=Oe.needsUpdate,ie=Oe.type;qe(),Rt.autoReset=A,Oe.enabled=$,Oe.autoUpdate=le,Oe.needsUpdate=re,Oe.type=ie}function pt(A){Gt("WebGLRenderer: A WebGL context could not be created. Reason: ",A.statusMessage)}function Se(A){const $=A.target;$.removeEventListener("dispose",Se),_e($)}function _e(A){ne(A),C.remove(A)}function ne(A){const $=C.get(A).programs;$!==void 0&&($.forEach(function(le){Pe.releaseProgram(le)}),A.isShaderMaterial&&Pe.releaseShaderCache(A))}this.renderBufferDirect=function(A,$,le,re,ie,We){$===null&&($=Xt);const Qe=ie.isMesh&&ie.matrixWorld.determinant()<0,He=Zr(A,$,le,re,ie);Fe.setMaterial(re,Qe);let it=le.index,ct=1;if(re.wireframe===!0){if(it=Ee.getWireframeAttribute(le),it===void 0)return;ct=2}const wt=le.drawRange,Tt=le.attributes.position;let at=wt.start*ct,Vt=(wt.start+wt.count)*ct;We!==null&&(at=Math.max(at,We.start*ct),Vt=Math.min(Vt,(We.start+We.count)*ct)),it!==null?(at=Math.max(at,0),Vt=Math.min(Vt,it.count)):Tt!=null&&(at=Math.max(at,0),Vt=Math.min(Vt,Tt.count));const tn=Vt-at;if(tn<0||tn===1/0)return;Ne.setup(ie,re,He,le,it);let ln,$t=vt;if(it!==null&&(ln=me.get(it),$t=xt,$t.setIndex(ln)),ie.isMesh)re.wireframe===!0?(Fe.setLineWidth(re.wireframeLinewidth*Qt()),$t.setMode(G.LINES)):$t.setMode(G.TRIANGLES);else if(ie.isLine){let Sn=re.linewidth;Sn===void 0&&(Sn=1),Fe.setLineWidth(Sn*Qt()),ie.isLineSegments?$t.setMode(G.LINES):ie.isLineLoop?$t.setMode(G.LINE_LOOP):$t.setMode(G.LINE_STRIP)}else ie.isPoints?$t.setMode(G.POINTS):ie.isSprite&&$t.setMode(G.TRIANGLES);if(ie.isBatchedMesh)if(N.get("WEBGL_multi_draw"))$t.renderMultiDraw(ie._multiDrawStarts,ie._multiDrawCounts,ie._multiDrawCount);else{const Sn=ie._multiDrawStarts,Ze=ie._multiDrawCounts,Fn=ie._multiDrawCount,It=it?me.get(it).bytesPerElement:1,Jn=C.get(re).currentProgram.getUniforms();for(let Qn=0;Qn<Fn;Qn++)Jn.setValue(G,"_gl_DrawID",Qn),$t.render(Sn[Qn]/It,Ze[Qn])}else if(ie.isInstancedMesh)$t.renderInstances(at,tn,ie.count);else if(le.isInstancedBufferGeometry){const Sn=le._maxInstanceCount!==void 0?le._maxInstanceCount:1/0,Ze=Math.min(le.instanceCount,Sn);$t.renderInstances(at,tn,Ze)}else $t.render(at,tn)};function Be(A,$,le){A.transparent===!0&&A.side===Ti&&A.forceSinglePass===!1?(A.side=li,A.needsUpdate=!0,rn(A,$,le),A.side=$r,A.needsUpdate=!0,rn(A,$,le),A.side=Ti):rn(A,$,le)}this.compile=function(A,$,le=null){le===null&&(le=A),D=Ve.get(le),D.init($),w.push(D),le.traverseVisible(function(ie){ie.isLight&&ie.layers.test($.layers)&&(D.pushLight(ie),ie.castShadow&&D.pushShadow(ie))}),A!==le&&A.traverseVisible(function(ie){ie.isLight&&ie.layers.test($.layers)&&(D.pushLight(ie),ie.castShadow&&D.pushShadow(ie))}),D.setupLights();const re=new Set;return A.traverse(function(ie){if(!(ie.isMesh||ie.isPoints||ie.isLine||ie.isSprite))return;const We=ie.material;if(We)if(Array.isArray(We))for(let Qe=0;Qe<We.length;Qe++){const He=We[Qe];Be(He,le,ie),re.add(He)}else Be(We,le,ie),re.add(We)}),D=w.pop(),re},this.compileAsync=function(A,$,le=null){const re=this.compile(A,$,le);return new Promise(ie=>{function We(){if(re.forEach(function(Qe){C.get(Qe).currentProgram.isReady()&&re.delete(Qe)}),re.size===0){ie(A);return}setTimeout(We,10)}N.get("KHR_parallel_shader_compile")!==null?We():setTimeout(We,10)})};let Me=null;function ge(A){Me&&Me(A)}function Ue(){At.stop()}function ut(){At.start()}const At=new N0;At.setAnimationLoop(ge),typeof self<"u"&&At.setContext(self),this.setAnimationLoop=function(A){Me=A,ke.setAnimationLoop(A),A===null?At.stop():At.start()},ke.addEventListener("sessionstart",Ue),ke.addEventListener("sessionend",ut),this.render=function(A,$){if($!==void 0&&$.isCamera!==!0){Gt("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(O===!0)return;q!==null&&q.renderStart(A,$);const le=ke.enabled===!0&&ke.isPresenting===!0,re=I!==null&&(W===null||le)&&I.begin(j,W);if(A.matrixWorldAutoUpdate===!0&&A.updateMatrixWorld(),$.parent===null&&$.matrixWorldAutoUpdate===!0&&$.updateMatrixWorld(),ke.enabled===!0&&ke.isPresenting===!0&&(I===null||I.isCompositing()===!1)&&(ke.cameraAutoUpdate===!0&&ke.updateCamera($),$=ke.getCamera()),A.isScene===!0&&A.onBeforeRender(j,A,$,W),D=Ve.get(A,w.length),D.init($),D.state.textureUnits=M.getTextureUnits(),w.push(D),Pt.multiplyMatrices($.projectionMatrix,$.matrixWorldInverse),ot.setFromProjectionMatrix(Pt,qi,$.reversedDepth),ht=this.localClippingEnabled,Ft=$e.init(this.clippingPlanes,ht),z=xe.get(A,k.length),z.init(),k.push(z),ke.enabled===!0&&ke.isPresenting===!0){const Qe=j.xr.getDepthSensingMesh();Qe!==null&&bt(Qe,$,-1/0,j.sortObjects)}bt(A,$,0,j.sortObjects),z.finish(),j.sortObjects===!0&&z.sort(ae,Te),Yt=ke.enabled===!1||ke.isPresenting===!1||ke.hasDepthSensing()===!1,Yt&&Ie.addToRenderList(z,A),this.info.render.frame++,Ft===!0&&$e.beginShadows();const ie=D.state.shadowsArray;if(Oe.render(ie,A,$),Ft===!0&&$e.endShadows(),this.info.autoReset===!0&&this.info.reset(),(re&&I.hasRenderPass())===!1){const Qe=z.opaque,He=z.transmissive;if(D.setupLights(),$.isArrayCamera){const it=$.cameras;if(He.length>0)for(let ct=0,wt=it.length;ct<wt;ct++){const Tt=it[ct];en(Qe,He,A,Tt)}Yt&&Ie.render(A);for(let ct=0,wt=it.length;ct<wt;ct++){const Tt=it[ct];_n(z,A,Tt,Tt.viewport)}}else He.length>0&&en(Qe,He,A,$),Yt&&Ie.render(A),_n(z,A,$)}W!==null&&pe===0&&(M.updateMultisampleRenderTarget(W),M.updateRenderTargetMipmap(W)),re&&I.end(j),A.isScene===!0&&A.onAfterRender(j,A,$),Ne.resetDefaultState(),ee=-1,K=null,w.pop(),w.length>0?(D=w[w.length-1],M.setTextureUnits(D.state.textureUnits),Ft===!0&&$e.setGlobalState(j.clippingPlanes,D.state.camera)):D=null,k.pop(),k.length>0?z=k[k.length-1]:z=null,q!==null&&q.renderEnd()};function bt(A,$,le,re){if(A.visible===!1)return;if(A.layers.test($.layers)){if(A.isGroup)le=A.renderOrder;else if(A.isLOD)A.autoUpdate===!0&&A.update($);else if(A.isLightProbeGrid)D.pushLightProbeGrid(A);else if(A.isLight)D.pushLight(A),A.castShadow&&D.pushShadow(A);else if(A.isSprite){if(!A.frustumCulled||ot.intersectsSprite(A)){re&&dt.setFromMatrixPosition(A.matrixWorld).applyMatrix4(Pt);const Qe=be.update(A),He=A.material;He.visible&&z.push(A,Qe,He,le,dt.z,null)}}else if((A.isMesh||A.isLine||A.isPoints)&&(!A.frustumCulled||ot.intersectsObject(A))){const Qe=be.update(A),He=A.material;if(re&&(A.boundingSphere!==void 0?(A.boundingSphere===null&&A.computeBoundingSphere(),dt.copy(A.boundingSphere.center)):(Qe.boundingSphere===null&&Qe.computeBoundingSphere(),dt.copy(Qe.boundingSphere.center)),dt.applyMatrix4(A.matrixWorld).applyMatrix4(Pt)),Array.isArray(He)){const it=Qe.groups;for(let ct=0,wt=it.length;ct<wt;ct++){const Tt=it[ct],at=He[Tt.materialIndex];at&&at.visible&&z.push(A,Qe,at,le,dt.z,Tt)}}else He.visible&&z.push(A,Qe,He,le,dt.z,null)}}const We=A.children;for(let Qe=0,He=We.length;Qe<He;Qe++)bt(We[Qe],$,le,re)}function _n(A,$,le,re){const{opaque:ie,transmissive:We,transparent:Qe}=A;D.setupLightsView(le),Ft===!0&&$e.setGlobalState(j.clippingPlanes,le),re&&Fe.viewport(Z.copy(re)),ie.length>0&&Cn(ie,$,le),We.length>0&&Cn(We,$,le),Qe.length>0&&Cn(Qe,$,le),Fe.buffers.depth.setTest(!0),Fe.buffers.depth.setMask(!0),Fe.buffers.color.setMask(!0),Fe.setPolygonOffset(!1)}function en(A,$,le,re){if((le.isScene===!0?le.overrideMaterial:null)!==null)return;if(D.state.transmissionRenderTarget[re.id]===void 0){const at=N.has("EXT_color_buffer_half_float")||N.has("EXT_color_buffer_float");D.state.transmissionRenderTarget[re.id]=new Zi(1,1,{generateMipmaps:!0,type:at?xr:gi,minFilter:vs,samples:Math.max(4,_t.samples),stencilBuffer:l,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:zt.workingColorSpace})}const We=D.state.transmissionRenderTarget[re.id],Qe=re.viewport||Z;We.setSize(Qe.z*j.transmissionResolutionScale,Qe.w*j.transmissionResolutionScale);const He=j.getRenderTarget(),it=j.getActiveCubeFace(),ct=j.getActiveMipmapLevel();j.setRenderTarget(We),j.getClearColor(F),te=j.getClearAlpha(),te<1&&j.setClearColor(16777215,.5),j.clear(),Yt&&Ie.render(le);const wt=j.toneMapping;j.toneMapping=Ki;const Tt=re.viewport;if(re.viewport!==void 0&&(re.viewport=void 0),D.setupLightsView(re),Ft===!0&&$e.setGlobalState(j.clippingPlanes,re),Cn(A,le,re),M.updateMultisampleRenderTarget(We),M.updateRenderTargetMipmap(We),N.has("WEBGL_multisampled_render_to_texture")===!1){let at=!1;for(let Vt=0,tn=$.length;Vt<tn;Vt++){const ln=$[Vt],{object:$t,geometry:Sn,material:Ze,group:Fn}=ln;if(Ze.side===Ti&&$t.layers.test(re.layers)){const It=Ze.side;Ze.side=li,Ze.needsUpdate=!0,Ot($t,le,re,Sn,Ze,Fn),Ze.side=It,Ze.needsUpdate=!0,at=!0}}at===!0&&(M.updateMultisampleRenderTarget(We),M.updateRenderTargetMipmap(We))}j.setRenderTarget(He,it,ct),j.setClearColor(F,te),Tt!==void 0&&(re.viewport=Tt),j.toneMapping=wt}function Cn(A,$,le){const re=$.isScene===!0?$.overrideMaterial:null;for(let ie=0,We=A.length;ie<We;ie++){const Qe=A[ie],{object:He,geometry:it,group:ct}=Qe;let wt=Qe.material;wt.allowOverride===!0&&re!==null&&(wt=re),He.layers.test(le.layers)&&Ot(He,$,le,it,wt,ct)}}function Ot(A,$,le,re,ie,We){A.onBeforeRender(j,$,le,re,ie,We),A.modelViewMatrix.multiplyMatrices(le.matrixWorldInverse,A.matrixWorld),A.normalMatrix.getNormalMatrix(A.modelViewMatrix),ie.onBeforeRender(j,$,le,re,A,We),ie.transparent===!0&&ie.side===Ti&&ie.forceSinglePass===!1?(ie.side=li,ie.needsUpdate=!0,j.renderBufferDirect(le,$,re,ie,A,We),ie.side=$r,ie.needsUpdate=!0,j.renderBufferDirect(le,$,re,ie,A,We),ie.side=Ti):j.renderBufferDirect(le,$,re,ie,A,We),A.onAfterRender(j,$,le,re,ie,We)}function rn(A,$,le){$.isScene!==!0&&($=Xt);const re=C.get(A),ie=D.state.lights,We=D.state.shadowsArray,Qe=ie.state.version,He=Pe.getParameters(A,ie.state,We,$,le,D.state.lightProbeGridArray),it=Pe.getProgramCacheKey(He);let ct=re.programs;re.environment=A.isMeshStandardMaterial||A.isMeshLambertMaterial||A.isMeshPhongMaterial?$.environment:null,re.fog=$.fog;const wt=A.isMeshStandardMaterial||A.isMeshLambertMaterial&&!A.envMap||A.isMeshPhongMaterial&&!A.envMap;re.envMap=Y.get(A.envMap||re.environment,wt),re.envMapRotation=re.environment!==null&&A.envMap===null?$.environmentRotation:A.envMapRotation,ct===void 0&&(A.addEventListener("dispose",Se),ct=new Map,re.programs=ct);let Tt=ct.get(it);if(Tt!==void 0){if(re.currentProgram===Tt&&re.lightsStateVersion===Qe)return Pn(A,He),Tt}else He.uniforms=Pe.getUniforms(A),q!==null&&A.isNodeMaterial&&q.build(A,le,He),A.onBeforeCompile(He,j),Tt=Pe.acquireProgram(He,it),ct.set(it,Tt),re.uniforms=He.uniforms;const at=re.uniforms;return(!A.isShaderMaterial&&!A.isRawShaderMaterial||A.clipping===!0)&&(at.clippingPlanes=$e.uniform),Pn(A,He),re.needsLights=ws(A),re.lightsStateVersion=Qe,re.needsLights&&(at.ambientLightColor.value=ie.state.ambient,at.lightProbe.value=ie.state.probe,at.directionalLights.value=ie.state.directional,at.directionalLightShadows.value=ie.state.directionalShadow,at.spotLights.value=ie.state.spot,at.spotLightShadows.value=ie.state.spotShadow,at.rectAreaLights.value=ie.state.rectArea,at.ltc_1.value=ie.state.rectAreaLTC1,at.ltc_2.value=ie.state.rectAreaLTC2,at.pointLights.value=ie.state.point,at.pointLightShadows.value=ie.state.pointShadow,at.hemisphereLights.value=ie.state.hemi,at.directionalShadowMatrix.value=ie.state.directionalShadowMatrix,at.spotLightMatrix.value=ie.state.spotLightMatrix,at.spotLightMap.value=ie.state.spotLightMap,at.pointShadowMatrix.value=ie.state.pointShadowMatrix),re.lightProbeGrid=D.state.lightProbeGridArray.length>0,re.currentProgram=Tt,re.uniformsList=null,Tt}function Rn(A){if(A.uniformsList===null){const $=A.currentProgram.getUniforms();A.uniformsList=Hl.seqWithValue($.seq,A.uniforms)}return A.uniformsList}function Pn(A,$){const le=C.get(A);le.outputColorSpace=$.outputColorSpace,le.batching=$.batching,le.batchingColor=$.batchingColor,le.instancing=$.instancing,le.instancingColor=$.instancingColor,le.instancingMorph=$.instancingMorph,le.skinning=$.skinning,le.morphTargets=$.morphTargets,le.morphNormals=$.morphNormals,le.morphColors=$.morphColors,le.morphTargetsCount=$.morphTargetsCount,le.numClippingPlanes=$.numClippingPlanes,le.numIntersection=$.numClipIntersection,le.vertexAlphas=$.vertexAlphas,le.vertexTangents=$.vertexTangents,le.toneMapping=$.toneMapping}function tr(A,$){if(A.length===0)return null;if(A.length===1)return A[0].texture!==null?A[0]:null;P.setFromMatrixPosition($.matrixWorld);for(let le=0,re=A.length;le<re;le++){const ie=A[le];if(ie.texture!==null&&ie.boundingBox.containsPoint(P))return ie}return null}function Zr(A,$,le,re,ie){$.isScene!==!0&&($=Xt),M.resetTextureUnits();const We=$.fog,Qe=re.isMeshStandardMaterial||re.isMeshLambertMaterial||re.isMeshPhongMaterial?$.environment:null,He=W===null?j.outputColorSpace:W.isXRRenderTarget===!0?W.texture.colorSpace:zt.workingColorSpace,it=re.isMeshStandardMaterial||re.isMeshLambertMaterial&&!re.envMap||re.isMeshPhongMaterial&&!re.envMap,ct=Y.get(re.envMap||Qe,it),wt=re.vertexColors===!0&&!!le.attributes.color&&le.attributes.color.itemSize===4,Tt=!!le.attributes.tangent&&(!!re.normalMap||re.anisotropy>0),at=!!le.morphAttributes.position,Vt=!!le.morphAttributes.normal,tn=!!le.morphAttributes.color;let ln=Ki;re.toneMapped&&(W===null||W.isXRRenderTarget===!0)&&(ln=j.toneMapping);const $t=le.morphAttributes.position||le.morphAttributes.normal||le.morphAttributes.color,Sn=$t!==void 0?$t.length:0,Ze=C.get(re),Fn=D.state.lights;if(Ft===!0&&(ht===!0||A!==K)){const Kt=A===K&&re.id===ee;$e.setState(re,A,Kt)}let It=!1;re.version===Ze.__version?(Ze.needsLights&&Ze.lightsStateVersion!==Fn.state.version||Ze.outputColorSpace!==He||ie.isBatchedMesh&&Ze.batching===!1||!ie.isBatchedMesh&&Ze.batching===!0||ie.isBatchedMesh&&Ze.batchingColor===!0&&ie.colorTexture===null||ie.isBatchedMesh&&Ze.batchingColor===!1&&ie.colorTexture!==null||ie.isInstancedMesh&&Ze.instancing===!1||!ie.isInstancedMesh&&Ze.instancing===!0||ie.isSkinnedMesh&&Ze.skinning===!1||!ie.isSkinnedMesh&&Ze.skinning===!0||ie.isInstancedMesh&&Ze.instancingColor===!0&&ie.instanceColor===null||ie.isInstancedMesh&&Ze.instancingColor===!1&&ie.instanceColor!==null||ie.isInstancedMesh&&Ze.instancingMorph===!0&&ie.morphTexture===null||ie.isInstancedMesh&&Ze.instancingMorph===!1&&ie.morphTexture!==null||Ze.envMap!==ct||re.fog===!0&&Ze.fog!==We||Ze.numClippingPlanes!==void 0&&(Ze.numClippingPlanes!==$e.numPlanes||Ze.numIntersection!==$e.numIntersection)||Ze.vertexAlphas!==wt||Ze.vertexTangents!==Tt||Ze.morphTargets!==at||Ze.morphNormals!==Vt||Ze.morphColors!==tn||Ze.toneMapping!==ln||Ze.morphTargetsCount!==Sn||!!Ze.lightProbeGrid!=D.state.lightProbeGridArray.length>0)&&(It=!0):(It=!0,Ze.__version=re.version);let Jn=Ze.currentProgram;It===!0&&(Jn=rn(re,$,ie),q&&re.isNodeMaterial&&q.onUpdateProgram(re,Jn,Ze));let Qn=!1,Nt=!1,nr=!1;const qt=Jn.getUniforms(),sn=Ze.uniforms;if(Fe.useProgram(Jn.program)&&(Qn=!0,Nt=!0,nr=!0),re.id!==ee&&(ee=re.id,Nt=!0),Ze.needsLights){const Kt=tr(D.state.lightProbeGridArray,ie);Ze.lightProbeGrid!==Kt&&(Ze.lightProbeGrid=Kt,Nt=!0)}if(Qn||K!==A){Fe.buffers.depth.getReversed()&&A.reversedDepth!==!0&&(A._reversedDepth=!0,A.updateProjectionMatrix()),qt.setValue(G,"projectionMatrix",A.projectionMatrix),qt.setValue(G,"viewMatrix",A.matrixWorldInverse);const bi=qt.map.cameraPosition;bi!==void 0&&bi.setValue(G,kt.setFromMatrixPosition(A.matrixWorld)),_t.logarithmicDepthBuffer&&qt.setValue(G,"logDepthBufFC",2/(Math.log(A.far+1)/Math.LN2)),(re.isMeshPhongMaterial||re.isMeshToonMaterial||re.isMeshLambertMaterial||re.isMeshBasicMaterial||re.isMeshStandardMaterial||re.isShaderMaterial)&&qt.setValue(G,"isOrthographic",A.isOrthographicCamera===!0),K!==A&&(K=A,Nt=!0,nr=!0)}if(Ze.needsLights&&(Fn.state.directionalShadowMap.length>0&&qt.setValue(G,"directionalShadowMap",Fn.state.directionalShadowMap,M),Fn.state.spotShadowMap.length>0&&qt.setValue(G,"spotShadowMap",Fn.state.spotShadowMap,M),Fn.state.pointShadowMap.length>0&&qt.setValue(G,"pointShadowMap",Fn.state.pointShadowMap,M)),ie.isSkinnedMesh){qt.setOptional(G,ie,"bindMatrix"),qt.setOptional(G,ie,"bindMatrixInverse");const Kt=ie.skeleton;Kt&&(Kt.boneTexture===null&&Kt.computeBoneTexture(),qt.setValue(G,"boneTexture",Kt.boneTexture,M))}ie.isBatchedMesh&&(qt.setOptional(G,ie,"batchingTexture"),qt.setValue(G,"batchingTexture",ie._matricesTexture,M),qt.setOptional(G,ie,"batchingIdTexture"),qt.setValue(G,"batchingIdTexture",ie._indirectTexture,M),qt.setOptional(G,ie,"batchingColorTexture"),ie._colorsTexture!==null&&qt.setValue(G,"batchingColorTexture",ie._colorsTexture,M));const Ai=le.morphAttributes;if((Ai.position!==void 0||Ai.normal!==void 0||Ai.color!==void 0)&&ft.update(ie,le,Jn),(Nt||Ze.receiveShadow!==ie.receiveShadow)&&(Ze.receiveShadow=ie.receiveShadow,qt.setValue(G,"receiveShadow",ie.receiveShadow)),(re.isMeshStandardMaterial||re.isMeshLambertMaterial||re.isMeshPhongMaterial)&&re.envMap===null&&$.environment!==null&&(sn.envMapIntensity.value=$.environmentIntensity),sn.dfgLUT!==void 0&&(sn.dfgLUT.value=XM()),Nt){if(qt.setValue(G,"toneMappingExposure",j.toneMappingExposure),Ze.needsLights&&Es(sn,nr),We&&re.fog===!0&&fe.refreshFogUniforms(sn,We),fe.refreshMaterialUniforms(sn,re,Ye,De,D.state.transmissionRenderTarget[A.id]),Ze.needsLights&&Ze.lightProbeGrid){const Kt=Ze.lightProbeGrid;sn.probesSH.value=Kt.texture,sn.probesMin.value.copy(Kt.boundingBox.min),sn.probesMax.value.copy(Kt.boundingBox.max),sn.probesResolution.value.copy(Kt.resolution)}Hl.upload(G,Rn(Ze),sn,M)}if(re.isShaderMaterial&&re.uniformsNeedUpdate===!0&&(Hl.upload(G,Rn(Ze),sn,M),re.uniformsNeedUpdate=!1),re.isSpriteMaterial&&qt.setValue(G,"center",ie.center),qt.setValue(G,"modelViewMatrix",ie.modelViewMatrix),qt.setValue(G,"normalMatrix",ie.normalMatrix),qt.setValue(G,"modelMatrix",ie.matrixWorld),re.uniformsGroups!==void 0){const Kt=re.uniformsGroups;for(let bi=0,Bi=Kt.length;bi<Bi;bi++){const Jr=Kt[bi];ve.update(Jr,Jn),ve.bind(Jr,Jn)}}return Jn}function Es(A,$){A.ambientLightColor.needsUpdate=$,A.lightProbe.needsUpdate=$,A.directionalLights.needsUpdate=$,A.directionalLightShadows.needsUpdate=$,A.pointLights.needsUpdate=$,A.pointLightShadows.needsUpdate=$,A.spotLights.needsUpdate=$,A.spotLightShadows.needsUpdate=$,A.rectAreaLights.needsUpdate=$,A.hemisphereLights.needsUpdate=$}function ws(A){return A.isMeshLambertMaterial||A.isMeshToonMaterial||A.isMeshPhongMaterial||A.isMeshStandardMaterial||A.isShadowMaterial||A.isShaderMaterial&&A.lights===!0}this.getActiveCubeFace=function(){return oe},this.getActiveMipmapLevel=function(){return pe},this.getRenderTarget=function(){return W},this.setRenderTargetTextures=function(A,$,le){const re=C.get(A);re.__autoAllocateDepthBuffer=A.resolveDepthBuffer===!1,re.__autoAllocateDepthBuffer===!1&&(re.__useRenderToTexture=!1),C.get(A.texture).__webglTexture=$,C.get(A.depthTexture).__webglTexture=re.__autoAllocateDepthBuffer?void 0:le,re.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(A,$){const le=C.get(A);le.__webglFramebuffer=$,le.__useDefaultFramebuffer=$===void 0};const dn=G.createFramebuffer();this.setRenderTarget=function(A,$=0,le=0){W=A,oe=$,pe=le;let re=null,ie=!1,We=!1;if(A){const He=C.get(A);if(He.__useDefaultFramebuffer!==void 0){Fe.bindFramebuffer(G.FRAMEBUFFER,He.__webglFramebuffer),Z.copy(A.viewport),ue.copy(A.scissor),de=A.scissorTest,Fe.viewport(Z),Fe.scissor(ue),Fe.setScissorTest(de),ee=-1;return}else if(He.__webglFramebuffer===void 0)M.setupRenderTarget(A);else if(He.__hasExternalTextures)M.rebindTextures(A,C.get(A.texture).__webglTexture,C.get(A.depthTexture).__webglTexture);else if(A.depthBuffer){const wt=A.depthTexture;if(He.__boundDepthTexture!==wt){if(wt!==null&&C.has(wt)&&(A.width!==wt.image.width||A.height!==wt.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");M.setupDepthRenderbuffer(A)}}const it=A.texture;(it.isData3DTexture||it.isDataArrayTexture||it.isCompressedArrayTexture)&&(We=!0);const ct=C.get(A).__webglFramebuffer;A.isWebGLCubeRenderTarget?(Array.isArray(ct[$])?re=ct[$][le]:re=ct[$],ie=!0):A.samples>0&&M.useMultisampledRTT(A)===!1?re=C.get(A).__webglMultisampledFramebuffer:Array.isArray(ct)?re=ct[le]:re=ct,Z.copy(A.viewport),ue.copy(A.scissor),de=A.scissorTest}else Z.copy(ye).multiplyScalar(Ye).floor(),ue.copy(Ge).multiplyScalar(Ye).floor(),de=st;if(le!==0&&(re=dn),Fe.bindFramebuffer(G.FRAMEBUFFER,re)&&Fe.drawBuffers(A,re),Fe.viewport(Z),Fe.scissor(ue),Fe.setScissorTest(de),ie){const He=C.get(A.texture);G.framebufferTexture2D(G.FRAMEBUFFER,G.COLOR_ATTACHMENT0,G.TEXTURE_CUBE_MAP_POSITIVE_X+$,He.__webglTexture,le)}else if(We){const He=$;for(let it=0;it<A.textures.length;it++){const ct=C.get(A.textures[it]);G.framebufferTextureLayer(G.FRAMEBUFFER,G.COLOR_ATTACHMENT0+it,ct.__webglTexture,le,He)}}else if(A!==null&&le!==0){const He=C.get(A.texture);G.framebufferTexture2D(G.FRAMEBUFFER,G.COLOR_ATTACHMENT0,G.TEXTURE_2D,He.__webglTexture,le)}ee=-1},this.readRenderTargetPixels=function(A,$,le,re,ie,We,Qe,He=0){if(!(A&&A.isWebGLRenderTarget)){Gt("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let it=C.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&Qe!==void 0&&(it=it[Qe]),it){Fe.bindFramebuffer(G.FRAMEBUFFER,it);try{const ct=A.textures[He],wt=ct.format,Tt=ct.type;if(A.textures.length>1&&G.readBuffer(G.COLOR_ATTACHMENT0+He),!_t.textureFormatReadable(wt)){Gt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!_t.textureTypeReadable(Tt)){Gt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}$>=0&&$<=A.width-re&&le>=0&&le<=A.height-ie&&G.readPixels($,le,re,ie,B.convert(wt),B.convert(Tt),We)}finally{const ct=W!==null?C.get(W).__webglFramebuffer:null;Fe.bindFramebuffer(G.FRAMEBUFFER,ct)}}},this.readRenderTargetPixelsAsync=async function(A,$,le,re,ie,We,Qe,He=0){if(!(A&&A.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let it=C.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&Qe!==void 0&&(it=it[Qe]),it)if($>=0&&$<=A.width-re&&le>=0&&le<=A.height-ie){Fe.bindFramebuffer(G.FRAMEBUFFER,it);const ct=A.textures[He],wt=ct.format,Tt=ct.type;if(A.textures.length>1&&G.readBuffer(G.COLOR_ATTACHMENT0+He),!_t.textureFormatReadable(wt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!_t.textureTypeReadable(Tt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const at=G.createBuffer();G.bindBuffer(G.PIXEL_PACK_BUFFER,at),G.bufferData(G.PIXEL_PACK_BUFFER,We.byteLength,G.STREAM_READ),G.readPixels($,le,re,ie,B.convert(wt),B.convert(Tt),0);const Vt=W!==null?C.get(W).__webglFramebuffer:null;Fe.bindFramebuffer(G.FRAMEBUFFER,Vt);const tn=G.fenceSync(G.SYNC_GPU_COMMANDS_COMPLETE,0);return G.flush(),await cv(G,tn,4),G.bindBuffer(G.PIXEL_PACK_BUFFER,at),G.getBufferSubData(G.PIXEL_PACK_BUFFER,0,We),G.deleteBuffer(at),G.deleteSync(tn),We}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(A,$=null,le=0){const re=Math.pow(2,-le),ie=Math.floor(A.image.width*re),We=Math.floor(A.image.height*re),Qe=$!==null?$.x:0,He=$!==null?$.y:0;M.setTexture2D(A,0),G.copyTexSubImage2D(G.TEXTURE_2D,le,0,0,Qe,He,ie,We),Fe.unbindTexture()};const ec=G.createFramebuffer(),vo=G.createFramebuffer();this.copyTextureToTexture=function(A,$,le=null,re=null,ie=0,We=0){let Qe,He,it,ct,wt,Tt,at,Vt,tn;const ln=A.isCompressedTexture?A.mipmaps[We]:A.image;if(le!==null)Qe=le.max.x-le.min.x,He=le.max.y-le.min.y,it=le.isBox3?le.max.z-le.min.z:1,ct=le.min.x,wt=le.min.y,Tt=le.isBox3?le.min.z:0;else{const sn=Math.pow(2,-ie);Qe=Math.floor(ln.width*sn),He=Math.floor(ln.height*sn),A.isDataArrayTexture?it=ln.depth:A.isData3DTexture?it=Math.floor(ln.depth*sn):it=1,ct=0,wt=0,Tt=0}re!==null?(at=re.x,Vt=re.y,tn=re.z):(at=0,Vt=0,tn=0);const $t=B.convert($.format),Sn=B.convert($.type);let Ze;$.isData3DTexture?(M.setTexture3D($,0),Ze=G.TEXTURE_3D):$.isDataArrayTexture||$.isCompressedArrayTexture?(M.setTexture2DArray($,0),Ze=G.TEXTURE_2D_ARRAY):(M.setTexture2D($,0),Ze=G.TEXTURE_2D),Fe.activeTexture(G.TEXTURE0),Fe.pixelStorei(G.UNPACK_FLIP_Y_WEBGL,$.flipY),Fe.pixelStorei(G.UNPACK_PREMULTIPLY_ALPHA_WEBGL,$.premultiplyAlpha),Fe.pixelStorei(G.UNPACK_ALIGNMENT,$.unpackAlignment);const Fn=Fe.getParameter(G.UNPACK_ROW_LENGTH),It=Fe.getParameter(G.UNPACK_IMAGE_HEIGHT),Jn=Fe.getParameter(G.UNPACK_SKIP_PIXELS),Qn=Fe.getParameter(G.UNPACK_SKIP_ROWS),Nt=Fe.getParameter(G.UNPACK_SKIP_IMAGES);Fe.pixelStorei(G.UNPACK_ROW_LENGTH,ln.width),Fe.pixelStorei(G.UNPACK_IMAGE_HEIGHT,ln.height),Fe.pixelStorei(G.UNPACK_SKIP_PIXELS,ct),Fe.pixelStorei(G.UNPACK_SKIP_ROWS,wt),Fe.pixelStorei(G.UNPACK_SKIP_IMAGES,Tt);const nr=A.isDataArrayTexture||A.isData3DTexture,qt=$.isDataArrayTexture||$.isData3DTexture;if(A.isDepthTexture){const sn=C.get(A),Ai=C.get($),Kt=C.get(sn.__renderTarget),bi=C.get(Ai.__renderTarget);Fe.bindFramebuffer(G.READ_FRAMEBUFFER,Kt.__webglFramebuffer),Fe.bindFramebuffer(G.DRAW_FRAMEBUFFER,bi.__webglFramebuffer);for(let Bi=0;Bi<it;Bi++)nr&&(G.framebufferTextureLayer(G.READ_FRAMEBUFFER,G.COLOR_ATTACHMENT0,C.get(A).__webglTexture,ie,Tt+Bi),G.framebufferTextureLayer(G.DRAW_FRAMEBUFFER,G.COLOR_ATTACHMENT0,C.get($).__webglTexture,We,tn+Bi)),G.blitFramebuffer(ct,wt,Qe,He,at,Vt,Qe,He,G.DEPTH_BUFFER_BIT,G.NEAREST);Fe.bindFramebuffer(G.READ_FRAMEBUFFER,null),Fe.bindFramebuffer(G.DRAW_FRAMEBUFFER,null)}else if(ie!==0||A.isRenderTargetTexture||C.has(A)){const sn=C.get(A),Ai=C.get($);Fe.bindFramebuffer(G.READ_FRAMEBUFFER,ec),Fe.bindFramebuffer(G.DRAW_FRAMEBUFFER,vo);for(let Kt=0;Kt<it;Kt++)nr?G.framebufferTextureLayer(G.READ_FRAMEBUFFER,G.COLOR_ATTACHMENT0,sn.__webglTexture,ie,Tt+Kt):G.framebufferTexture2D(G.READ_FRAMEBUFFER,G.COLOR_ATTACHMENT0,G.TEXTURE_2D,sn.__webglTexture,ie),qt?G.framebufferTextureLayer(G.DRAW_FRAMEBUFFER,G.COLOR_ATTACHMENT0,Ai.__webglTexture,We,tn+Kt):G.framebufferTexture2D(G.DRAW_FRAMEBUFFER,G.COLOR_ATTACHMENT0,G.TEXTURE_2D,Ai.__webglTexture,We),ie!==0?G.blitFramebuffer(ct,wt,Qe,He,at,Vt,Qe,He,G.COLOR_BUFFER_BIT,G.NEAREST):qt?G.copyTexSubImage3D(Ze,We,at,Vt,tn+Kt,ct,wt,Qe,He):G.copyTexSubImage2D(Ze,We,at,Vt,ct,wt,Qe,He);Fe.bindFramebuffer(G.READ_FRAMEBUFFER,null),Fe.bindFramebuffer(G.DRAW_FRAMEBUFFER,null)}else qt?A.isDataTexture||A.isData3DTexture?G.texSubImage3D(Ze,We,at,Vt,tn,Qe,He,it,$t,Sn,ln.data):$.isCompressedArrayTexture?G.compressedTexSubImage3D(Ze,We,at,Vt,tn,Qe,He,it,$t,ln.data):G.texSubImage3D(Ze,We,at,Vt,tn,Qe,He,it,$t,Sn,ln):A.isDataTexture?G.texSubImage2D(G.TEXTURE_2D,We,at,Vt,Qe,He,$t,Sn,ln.data):A.isCompressedTexture?G.compressedTexSubImage2D(G.TEXTURE_2D,We,at,Vt,ln.width,ln.height,$t,ln.data):G.texSubImage2D(G.TEXTURE_2D,We,at,Vt,Qe,He,$t,Sn,ln);Fe.pixelStorei(G.UNPACK_ROW_LENGTH,Fn),Fe.pixelStorei(G.UNPACK_IMAGE_HEIGHT,It),Fe.pixelStorei(G.UNPACK_SKIP_PIXELS,Jn),Fe.pixelStorei(G.UNPACK_SKIP_ROWS,Qn),Fe.pixelStorei(G.UNPACK_SKIP_IMAGES,Nt),We===0&&$.generateMipmaps&&G.generateMipmap(Ze),Fe.unbindTexture()},this.initRenderTarget=function(A){C.get(A).__webglFramebuffer===void 0&&M.setupRenderTarget(A)},this.initTexture=function(A){A.isCubeTexture?M.setTextureCube(A,0):A.isData3DTexture?M.setTexture3D(A,0):A.isDataArrayTexture||A.isCompressedArrayTexture?M.setTexture2DArray(A,0):M.setTexture2D(A,0),Fe.unbindTexture()},this.resetState=function(){oe=0,pe=0,W=null,Fe.reset(),Ne.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return qi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const n=this.getContext();n.drawingBufferColorSpace=zt._getDrawingBufferColorSpace(e),n.unpackColorSpace=zt._getUnpackColorSpace()}}const Jt=[{id:"seating",label:"Adaptive Seating Clusters",icon:"⬡",accent:"#C4905A",hex:12882010,pos:[-3.8,0,2.8],camPos:[-1.2,2.4,7.2],lookAt:[-3.8,1.1,2.8],desc:"Reconfigurable modular seating in semi-private pods. Ergonomic lounge chairs with movable acoustic partitions let patients choose between solitude and social warmth.",features:["Modular sofa + ottoman clusters","Large patterned area rug","Acoustic privacy wing panels","Wireless charging tabletops"],metric:"↓ 35% reported isolation"},{id:"biophilic",label:"Biophilic Micro-Garden",icon:"❧",accent:"#4A8A58",hex:4885080,pos:[3.8,0,2.8],camPos:[1.2,2.4,7.2],lookAt:[3.8,1.4,2.8],desc:"A curated living moss wall, specimen trees, and a recirculating water basin bring measurable stress relief. Natural-spectrum light from clerestory windows completes the biophilic immersion.",features:["4 m × 2.8 m living moss wall","Recirculating water basin","Restorative wooden bench","Terracotta planter clusters"],metric:"↓ 28% cortisol stress markers"},{id:"digital",label:"Digital Wellness Hub",icon:"◈",accent:"#5572C4",hex:5599940,pos:[3.8,0,-2.8],camPos:[1.2,2.4,-6.2],lookAt:[3.8,1.4,-2.8],desc:"Touchless kiosks in organic alcoves deliver real-time queue updates, guided breathing, and ambient nature loops — designed to inform without overwhelming.",features:["Real-time queue status","Guided breathing animations","Ergonomic high stools","Motion-sensing interaction"],metric:"↓ 20% perceived wait time"},{id:"calm",label:"Calm Engagement Zone",icon:"◎",accent:"#8A5898",hex:9066648,pos:[-3.8,0,-2.8],camPos:[-1.2,2.4,-6.2],lookAt:[-3.8,1.1,-2.8],desc:"A low-stimulation alcove for reading, art, and guided audio meditation. Full acoustic dampening and warm amber light create a personal refuge within the waiting space.",features:["Curated book corner & armchair","Abstract landscape paintings","Large indoor foliage","Full acoustic wall panels"],metric:"↓ 32% anxiety self-reports"}],YM=[{pos:[0,1.7,5.8],lookAt:[0,1.2,0],dur:2.5,zoneIdx:-1},{pos:[-1.2,2,5.5],lookAt:[-3.8,1.1,2.8],dur:2.5,zoneIdx:0},{pos:[-1.8,1.7,3.8],lookAt:[-3.8,1,2.8],dur:4,zoneIdx:0},{pos:[1,1.8,4.2],lookAt:[3.8,1.4,2.8],dur:2.5,zoneIdx:1},{pos:[2,1.7,3.4],lookAt:[4.5,1.2,3],dur:4,zoneIdx:1},{pos:[1,1.8,-.5],lookAt:[3.8,1.4,-2.8],dur:2.5,zoneIdx:2},{pos:[2,1.7,-2.2],lookAt:[3.8,1.5,-3.2],dur:4,zoneIdx:2},{pos:[-1,1.8,-1],lookAt:[-3.8,1.1,-2.8],dur:2.5,zoneIdx:3},{pos:[-2,1.7,-2.5],lookAt:[-3.8,1,-2.8],dur:4,zoneIdx:3},{pos:[0,4.5,8],lookAt:[0,1,0],dur:3,zoneIdx:-1}],En=[{title:"The Problem",text:"Hospital waiting rooms cause stress, anxiety, and discomfort. Patients often spend hours in sterile, noisy spaces with harsh fluorescent lighting — worsening their health outcomes before treatment even begins.",sub:"This prototype reimagines the waiting experience using evidence-based design.",cam:null,highlight:null},{title:"Navigate the Space",text:"Drag your mouse (or swipe on mobile / touchpad) to orbit the 3D model around. Try it now!",sub:"You can rotate the view in any direction to explore the architecture.",cam:null,highlight:"viewport",requiredAction:"orbit"},{title:"Zoom In & Out",text:"Scroll your mouse wheel (or pinch on mobile / two-finger swipe on touchpad) to zoom closer or further away from the model. Try it now!",sub:"Try scrolling now to see the space up close.",cam:null,highlight:"viewport",requiredAction:"zoom"},{title:"Zone Navigation",text:"Click any of these zone buttons at the top to fly the camera into that area and read about its design interventions.",sub:"Each zone addresses a specific aspect of patient wellbeing.",cam:null,highlight:"zones",requiredAction:"click_zone"},{title:"⬡ Adaptive Seating Clusters",text:"Reconfigurable modular seating in semi-private pods. Ergonomic lounge chairs with acoustic partitions let patients choose between solitude and social warmth.",sub:"↓ 35% reported isolation",cam:{pos:[-1.2,2.4,7.2],lookAt:[-3.8,1.1,2.8]},highlight:null},{title:"❧ Biophilic Micro-Garden",text:"A living moss wall, specimen trees, and a recirculating water basin bring measurable stress relief. Natural-spectrum light completes the biophilic immersion.",sub:"↓ 28% cortisol stress markers",cam:{pos:[1.2,2.4,7.2],lookAt:[3.8,1.4,2.8]},highlight:null},{title:"◈ Digital Wellness Hub",text:"Touchless kiosks deliver real-time queue updates, guided breathing exercises, and ambient nature loops — designed to inform without overwhelming.",sub:"↓ 20% perceived wait time",cam:{pos:[1.2,2.4,-6.2],lookAt:[3.8,1.4,-2.8]},highlight:null},{title:"◎ Calm Engagement Zone",text:"A low-stimulation alcove with a curated book corner, art & craft station, and guided meditation audio. Full acoustic dampening creates a personal refuge.",sub:"↓ 32% anxiety self-reports",cam:{pos:[-1.2,2.4,-6.2],lookAt:[-3.8,1.1,-2.8]},highlight:null},{title:"Compare: Standard vs Healing",text:"This toggle switches between a typical sterile hospital lighting and the proposed healing environment, so you can visually compare the difference.",sub:"Click it anytime to see what conventional waiting rooms look like.",cam:null,highlight:"comparison",requiredAction:"toggle_comparison"},{title:"Advanced Tools",text:"Open the Tools panel to access: Heatmap overlay, Patient Flow simulation, Guided Tour, Split View comparison, and Material Inspector.",sub:"Each tool reveals a different layer of the design's evidence base.",cam:null,highlight:"tools",requiredAction:"open_tools"},{title:"You're Ready! 🎉",text:"You now know everything you need to explore the Integrated Modular Healing Space. Click around, zoom in, try the tools — make it your own.",sub:"Press H anytime for keyboard shortcuts.",cam:null,highlight:null}];function pd(r,e){var n,s;!r||!r.ambient||(e?(r.ambient.color.setHex(15398143),r.ambient.intensity=.95,r.sun.color.setHex(15791871),r.sun.intensity=.6,r.fillLight.intensity=.15,(n=r.accentLights)==null||n.forEach(a=>{a.intensity=0})):(r.ambient.color.setHex(16774628),r.ambient.intensity=.45,r.sun.color.setHex(16772560),r.sun.intensity=1.05,r.fillLight.intensity=.35,(s=r.accentLights)==null||s.forEach((a,l)=>{a.color.setHex(Jt[l].hex),a.intensity=1.4})))}const tt=(r,e=.78,n=0,s={})=>new jr({color:r,roughness:e,metalness:n,...s});function Et(r,e,n){return new go(r,e,n)}function un(r,e,n,s=12){return new ha(r,e,n,s)}function ao(r,e=10,n=8){return new Tf(r,e,n)}function qM(r,e){const n=new Yv(16774628,.45);r.add(n);const s=new Nm(16772560,1.05);s.position.set(9,14,10),s.castShadow=!0,s.shadow.mapSize.set(2048,2048),s.shadow.camera.near=.5,s.shadow.camera.far=50,s.shadow.camera.left=-14,s.shadow.camera.right=14,s.shadow.camera.top=14,s.shadow.camera.bottom=-14,s.shadow.bias=-.001,r.add(s);const a=new Nm(13164799,.35);a.position.set(14,6,0),r.add(a);const l=[];Jt.forEach(Se=>{const _e=new Nl(Se.hex,1.4,6.5,1.8);_e.position.set(Se.pos[0],2.6,Se.pos[2]),r.add(_e),l.push(_e)}),e.ambient=n,e.sun=s,e.fillLight=a,e.accentLights=l,[[-3.8,3.16,2.8],[3.8,3.16,2.8],[3.8,3.16,-2.8],[-3.8,3.16,-2.8]].forEach(([Se,_e,ne])=>{const Be=new Ae(new Un(2.2,.3),new jr({color:16776693,emissive:16776693,emissiveIntensity:1.2,roughness:1}));Be.rotation.x=Math.PI/2,Be.position.set(Se,_e,ne),r.add(Be)});const u=[];[[-3.8,2.85,2.8],[3.8,2.85,2.8],[3.8,2.85,-2.8],[-3.8,2.85,-2.8]].forEach(([Se,_e,ne])=>{const Be=new Ae(un(.012,.012,.5,4),tt(5914672,.9));Be.position.set(Se,_e+.25,ne),r.add(Be);const Me=new Ae(new $l(.2,.28,12,1,!0),tt(13936704,.5,.1,{side:Ti}));Me.position.set(Se,_e,ne),r.add(Me);const ge=new Ae(ao(.065,8,6),new jr({color:16772744,emissive:16763972,emissiveIntensity:2.2}));ge.position.set(Se,_e-.08,ne),r.add(ge);const Ue=new Nl(16755268,1.2,4.5,2);Ue.position.set(Se,_e-.2,ne),r.add(Ue),u.push({pl:Ue,shade:Me,phase:Math.random()*Math.PI*2})}),e.pendants=u;const f=tt(13150330,.82,0),p=new Ae(new Un(16,13),f);p.rotation.x=-Math.PI/2,p.receiveShadow=!0,p.userData.material={name:"Travertine Honed Tile",dim:"600×600×20 mm",specs:[["Finish","Honed matte"],["VOC","<0.3 mg/m³"],["Slip rating","R10"],["Thermal mass","2.3 kJ/m²K"]],note:"Locally quarried. Thermal-mass helps passive climate."},r.add(p);const m=[];Jt.forEach(Se=>{const _e=new Ae(new ql(2,32),new Yl({color:Se.hex,transparent:!0,opacity:0,depthWrite:!1,side:Ti}));_e.rotation.x=-Math.PI/2,_e.position.set(Se.pos[0],.012,Se.pos[2]),r.add(_e),m.push(_e)}),e.heatmapDiscs=m;for(let Se=-3;Se<=3;Se++){const _e=new Ae(new Un(16,.02),tt(9071178,.9));_e.rotation.x=-Math.PI/2,_e.position.set(0,.001,Se*1.6),r.add(_e);const ne=new Ae(new Un(.02,13),tt(9071178,.9));ne.rotation.x=-Math.PI/2,ne.position.set(Se*2.2,.001,0),r.add(ne)}const x=new Ae(new Un(16,13),tt(16117992,.95));x.rotation.x=Math.PI/2,x.position.y=3.2,r.add(x),[[-3.8,0],[0,0],[3.8,0]].forEach(([Se])=>{const _e=new Ae(Et(.18,.22,12.7),tt(6964264,.75));_e.position.set(Se,3.09,0),_e.userData.material={name:"Solid White Oak Beam",dim:"180×220×13000 mm",specs:[["Grade","FSC-certified European oak"],["Finish","Natural hard-wax oil"],["CO₂ storage","≈ 780 kg/m³"],["Fire class","D-s2,d0"]],note:"Carbon-negative structural expression."},r.add(_e)});const S=tt(15392202,.92),g=tt(14865856,.92),y=new Ae(new Un(16,3.2),S);y.position.set(0,1.6,-6.5),r.add(y);const T=new Ae(new Un(13,3.2),g);T.rotation.y=Math.PI/2,T.position.set(-8,1.6,0),r.add(T);const R=new Ae(new Un(6.5,3.2),g);R.rotation.y=-Math.PI/2,R.position.set(8,1.6,3.25),r.add(R);const _=new Ae(new Un(6.5,.2),g);_.rotation.y=-Math.PI/2,_.position.set(8,3.1,-3.25),r.add(_);const v=document.createElement("canvas");v.width=512,v.height=512;const b=v.getContext("2d"),L=b.createLinearGradient(0,0,0,512);L.addColorStop(0,"#B8DEFF"),L.addColorStop(.55,"#E8D8B8"),L.addColorStop(.62,"#9CB48C"),L.addColorStop(1,"#7A9878"),b.fillStyle=L,b.fillRect(0,0,512,512),b.fillStyle="rgba(90,120,90,0.55)";for(let Se=0;Se<12;Se++){const _e=Se/11*512+Math.sin(Se)*20,ne=30+Se%3*12;b.beginPath(),b.arc(_e,320+Se%2*10,ne,0,Math.PI*2),b.fill()}const P=new Uv(v);P.colorSpace=ai;const z=new Yl({map:P});e.skyMat=z;const D=new Ae(new Un(10,6),z);D.rotation.y=-Math.PI/2,D.position.set(10.5,1.8,-3.25),r.add(D);const k=new Vv({color:16777215,roughness:.05,metalness:0,transparent:!0,opacity:.12,transmission:.8,ior:1.45,thickness:.02}),w=new Ae(new Un(6.5,3),k);w.rotation.y=-Math.PI/2,w.position.set(7.99,1.5,-3.25),r.add(w);const I=tt(11040840,.55,.1),j=new Ae(Et(.32,.18,6.5),I);j.position.set(7.9,.09,-3.25),r.add(j);const O=new Ae(Et(.22,.16,6.5),I);O.position.set(7.93,3,-3.25),r.add(O),[0,-6.5].forEach(Se=>{const _e=new Ae(Et(.12,3,.14),I);_e.position.set(7.93,1.5,Se),r.add(_e)}),[-1.625,-3.25,-4.875].forEach(Se=>{const _e=new Ae(Et(.06,2.95,.08),I);_e.position.set(7.93,1.5,Se),r.add(_e)});const q=new Ae(Et(.06,.05,6.4),I);q.position.set(7.93,2.15,-3.25),r.add(q);const oe=new Ae(new Un(4.2,.35),k);oe.rotation.y=-Math.PI/2,oe.position.set(7.99,2.95,2.2),r.add(oe);const pe=new Ae(new Un(5,.6),z);pe.rotation.y=-Math.PI/2,pe.position.set(10.5,2.95,2.2),r.add(pe);const W=tt(11040840,.55,.1);[-1.4,0,1.4].forEach(Se=>{const _e=new Ae(Et(.03,.4,.05),W);_e.position.set(7.92,2.95,2.2+Se),r.add(_e)});const ee=new Ae(Et(.14,1.05,9.5),tt(14207144,.88));ee.position.set(0,.525,.5),r.add(ee);const K=new Ae(Et(.22,.06,9.5),tt(12097632,.5,.15));K.position.set(0,1.08,.5),r.add(K);const Z=tt(10518624,.72,.05),ue=new Ae(Et(4,1,.8),Z);ue.position.set(0,.5,-6.1),ue.castShadow=!0,r.add(ue);const de=new Ae(Et(4,1,.05),tt(13150320,.55,.2));de.position.set(0,.5,-5.7),r.add(de);const F=new Ae(Et(4.2,.06,1),tt(8015920,.45,.3));F.position.set(0,1.03,-6.05),r.add(F);const te=new Ae(Et(.5,.32,.03),new jr({color:1714746,roughness:.4,metalness:.7,emissive:2771562,emissiveIntensity:.4}));te.position.set(-.6,1.36,-5.92),r.add(te);const je=tt(13150320,.6,.1);[[0,.06,-6.49,16,.12,.1,0],[-7.99,.06,0,.1,.12,13,0],[7.99,.06,0,.1,.12,13,0]].forEach(([Se,_e,ne,Be,Me,ge])=>{const Ue=new Ae(Et(Be,Me,ge),je);Ue.position.set(Se,_e,ne),r.add(Ue)});const De=[];De.push({mesh:p,zoneId:null}),r.traverse(Se=>{var _e,ne,Be;Se.isMesh&&((Be=(ne=(_e=Se.userData)==null?void 0:_e.material)==null?void 0:ne.name)!=null&&Be.includes("Oak Beam"))&&De.push({mesh:Se,zoneId:null})});const Ye=tt(12882032,.85),ae=tt(10514512,.88),Te=tt(5910552,.6,.3),ye=tt(13936768,.82);function Ge(Se,_e,ne,Be,Me="sofa",ge="seating"){const Ue=new $i,ut=Me==="chair"?.74:.78,At=Me==="chair"?.82:.88,bt=Be*ut,_n=new Ae(Et(bt-.06,.08,At-.16),Te);_n.position.set(0,.06,0),Ue.add(_n);const en=new Ae(Et(bt,.32,At),Ye);en.position.set(0,.26,0),en.castShadow=!0,Ue.add(en);const Cn=new Ae(Et(bt,.58,.14),ae);Cn.position.set(0,.68,-At/2+.07),Cn.rotation.x=-.08,Ue.add(Cn),[-bt/2+.07,bt/2-.07].forEach(Ot=>{const rn=new Ae(Et(.14,.28,At-.04),ae);rn.position.set(Ot,.56,0),Ue.add(rn)});for(let Ot=0;Ot<Be;Ot++){const rn=-bt/2+ut/2+Ot*ut+(Ot===0?.05:Ot===Be-1?-.05:0),Rn=new Ae(Et(ut-.12,.14,At-.22),ye);Rn.position.set(rn,.49,.05),Rn.castShadow=!0,Ue.add(Rn);const Pn=new Ae(Et(ut-.16,.34,.14),ye);Pn.position.set(rn,.72,-At/2+.18),Pn.rotation.x=.12,Ue.add(Pn)}return Ue.position.set(Se,0,_e),Ue.rotation.y=ne,r.add(Ue),Ue.children.forEach(Ot=>{Ot.isMesh&&De.push({mesh:Ot,zoneId:ge})}),Ue}const st=tt(15261384,.95),ot=new Ae(Et(4.5,.02,3.8),st);ot.position.set(-3.8,.015,2.5),ot.receiveShadow=!0,r.add(ot),De.push({mesh:ot,zoneId:"seating"}),Ge(-3.8,3.35,Math.PI,3,"sofa"),Ge(-4.9,1.55,Math.PI/3.4,1,"chair"),Ge(-2.7,1.55,-Math.PI/3.4,1,"chair");const Ft=new Ae(Et(1.3,.05,.7),tt(8015920,.45,.25));Ft.position.set(-3.8,.42,2.6),Ft.castShadow=!0,r.add(Ft),De.push({mesh:Ft,zoneId:"seating"});const ht=new Ae(Et(1.24,.03,.64),Te);ht.position.set(-3.8,.38,2.6),r.add(ht),[[-.58,-.3],[.58,-.3],[-.58,.3],[.58,.3]].forEach(([Se,_e])=>{const ne=new Ae(un(.022,.022,.38,6),Te);ne.position.set(-3.8+Se,.19,2.6+_e),r.add(ne)});const Pt=new Ae(un(.09,.07,.18,14),tt(15260868,.7));Pt.position.set(-3.8,.53,2.6),Pt.castShadow=!0,r.add(Pt);const kt=new Ae(un(.006,.006,.34,4),tt(4876858,.7));kt.position.set(-3.8,.76,2.6),r.add(kt);const dt=new Ae(un(.2,.2,.04,14),tt(6963232,.5,.2));dt.position.set(-5.35,.52,3.55),dt.castShadow=!0,r.add(dt),De.push({mesh:dt,zoneId:"seating"});const Xt=new Ae(un(.03,.05,.5,8),Te);Xt.position.set(-5.35,.25,3.55),r.add(Xt);const Yt=new Ae(un(.1,.08,.13,12),tt(9071178,.8));Yt.position.set(-5.35,.61,3.55),r.add(Yt);for(let Se=0;Se<5;Se++){const _e=new Ae(ao(.08,8,6),tt(4880970,.85));_e.position.set(-5.35+Math.cos(Se)*.05,.73+Se*.03,3.55+Math.sin(Se)*.05),_e.scale.set(1,.5,1),r.add(_e)}const Qt=new Ae(un(.32,.32,.34,16),tt(12095600,.88));Qt.position.set(-3.8,.17,1.4),Qt.castShadow=!0,r.add(Qt),De.push({mesh:Qt,zoneId:"seating"}),[[.06,1.05,2,-1.9,.55,2.8],[.06,1.05,2,-5.7,.55,2.5]].forEach(([Se,_e,ne,Be,Me,ge])=>{const Ue=new Ae(Et(Se,_e,ne),tt(14733496,.92));Ue.position.set(Be,Me,ge),Ue.castShadow=!0,Ue.userData.material={name:"Wool-Felt Acoustic Privacy Wing",dim:"2000×1050×60 mm",specs:[["Composition","100% recycled PET + wool felt"],["Acoustic NRC","0.90"],["Fire class","B-s1,d0"],["Colorways","5 naturals"]],note:"Reduces reverberation to < 0.8 s."},r.add(Ue),De.push({mesh:Ue,zoneId:"seating"});const ut=new Ae(Et(Se+.02,.04,ne+.02),tt(11571296,.5,.2));ut.position.set(Be,Me+.545,ge),r.add(ut)});const G=[];for(let Se=0;Se<5;Se++)for(let _e=0;_e<5;_e++){const ne=(Se+_e)%3,Be=[3041850,4033098,4890714][ne],Me=new Ae(Et(.52,.52,.08),tt(Be,.95));Me.position.set(7.96,.38+Se*.55,1+_e*.55),Me.rotation.y=-Math.PI/2,Me.castShadow=!0,Me.userData.material={name:"Preserved Reindeer Moss Panel",dim:"500×500×40 mm",specs:[["Species","Cladonia rangiferina (mixed tones)"],["Maintenance","Zero water · Zero light"],["Acoustic NRC","0.75"],["Air particulate trap","Light PM2.5 capture"]],note:"Biophilic anchor of the space."},r.add(Me),De.push({mesh:Me,zoneId:"biophilic"})}[[2.8,1.8],[4.4,3],[3.2,1.1]].forEach(([Se,_e],ne)=>{const Be=new Ae(un(.22,.16,.4,10),tt(9066544,.85));Be.position.set(Se,.2,_e),Be.castShadow=!0,r.add(Be),De.push({mesh:Be,zoneId:"biophilic"});const Me=new Ae(un(.05,.07,.7,7),tt(4860942,.9));Me.position.set(Se,.75,_e),r.add(Me);const ge=new Ae(ao(.45+ne*.05,10,8),tt(3043392,.85));ge.position.set(Se,1.32+ne*.1,_e),ge.castShadow=!0,r.add(ge),De.push({mesh:ge,zoneId:"biophilic"});const Ue=new Ae(ao(.3,8,6),tt(4033104,.85));Ue.position.set(Se+.25,1.05+ne*.08,_e-.2),r.add(Ue),G.push({mesh:ge,baseY:ge.position.y,phase:ne*1.2}),G.push({mesh:Ue,baseY:Ue.position.y,phase:ne*1.2+.5})}),e.plants=G;const he=new Ae(un(.6,.55,.18,20),tt(8015920,.8));he.position.set(5,.09,3.8),he.castShadow=!0,r.add(he),De.push({mesh:he,zoneId:"biophilic"});const N=new Ae(new ql(.54,20),new jr({color:8310752,roughness:.05,metalness:.1,transparent:!0,opacity:.82}));N.rotation.x=-Math.PI/2,N.position.set(5,.19,3.8),r.add(N),e.water=N,De.push({mesh:N,zoneId:"biophilic"}),[0,1,2,3,4,5].forEach(Se=>{const _e=Se/6*Math.PI*2,ne=new Ae(new ha(.12,.12,.04,8),tt(10522752,.95));ne.position.set(5+Math.cos(_e)*.82,.02,3.8+Math.sin(_e)*.82),r.add(ne)});const _t=tt(11040840,.6,.1),Fe=new Ae(Et(1.6,.05,.4),_t);Fe.position.set(3.8,.45,3.5),Fe.castShadow=!0,r.add(Fe),De.push({mesh:Fe,zoneId:"biophilic"}),[-.65,.65].forEach(Se=>{const _e=new Ae(Et(.05,.45,.35),tt(2236962,.6,.5));_e.position.set(3.8+Se,.225,3.5),r.add(_e)});const Rt=[];[[2.5,-2],[3.8,-3.6],[5.1,-2]].forEach(([Se,_e],ne)=>{const Be=new Ae(un(.05,.08,1.2,8),tt(11579568,.4,.8));Be.position.set(Se,.6,_e),r.add(Be);const Me=new Ae(un(.18,.18,.04,12),tt(9474192,.4,.7));Me.position.set(Se,.02,_e),r.add(Me);const ge=new jr({color:661544,roughness:.05,metalness:.5,emissive:ne===1?1717352:1714264,emissiveIntensity:.7}),Ue=new Ae(Et(.62,.96,.04),ge);Ue.position.set(Se,1.68,_e),Ue.castShadow=!0,r.add(Ue),De.push({mesh:Ue,zoneId:"digital"}),Rt.push({mesh:Ue,mat:ge,phase:ne*1.4});const ut=new jr({color:4227327,emissive:4227327,emissiveIntensity:1.8}),At=new Ae(Et(.62,.04,.02),ut);At.position.set(Se,1.21,_e+.03),r.add(At),Rt.push({mesh:At,mat:ut,phase:ne*1.4+.3,isBar:!0});const bt=new Nl(4219084,.8,2.5,2);bt.position.set(Se,1.68,_e+.2),r.add(bt),Rt.push({pl:bt,phase:ne*1.4,isPl:!0})}),e.screens=Rt,[[2.5,-.8],[3.8,-2.4],[5.1,-.8]].forEach(([Se,_e])=>{const ne=new Ae(un(.18,.18,.08,16),tt(4876938,.8));ne.position.set(Se,.75,_e),ne.castShadow=!0,r.add(ne),De.push({mesh:ne,zoneId:"digital"});const Be=new Ae(un(.02,.02,.75,8),tt(8947848,.4,.8));Be.position.set(Se,.375,_e),r.add(Be);const Me=new Ae(un(.15,.15,.02,12),tt(8947848,.4,.8));Me.position.set(Se,.01,_e),r.add(Me)}),Ge(-6.5,-4.5,Math.PI/4,1,"chair","calm");const C=new Ae(un(.3,.22,.5,12),tt(14733496,.9));C.position.set(-7,.25,-5.5),C.castShadow=!0,r.add(C),De.push({mesh:C,zoneId:"calm"});const M=new Ae(un(.04,.05,1.2,6),tt(4860942,.9));M.position.set(-7,.85,-5.5),r.add(M);const Y=new Ae(ao(.7,12,10),tt(2775600,.85));Y.position.set(-7,1.8,-5.5),Y.castShadow=!0,r.add(Y),De.push({mesh:Y,zoneId:"calm"}),G.push({mesh:Y,baseY:Y.position.y,phase:2.5});const me=new $i;me.position.set(-5,0,-6.32);const Ee=tt(5912608,.6,.1),be=tt(4860952,.8,.1),Pe=new Ae(Et(3.2,2.4,.02),be);Pe.position.set(0,1.2,-.16),Pe.castShadow=!0,me.add(Pe);const fe=new Ae(Et(3.24,.06,.36),Ee);fe.position.set(0,2.43,0),fe.castShadow=!0,me.add(fe);const xe=new Ae(Et(3.24,.08,.36),Ee);xe.position.set(0,.04,0),xe.castShadow=!0,me.add(xe),[-1.6,1.6].forEach(Se=>{const _e=new Ae(Et(.06,2.4,.36),Ee);_e.position.set(Se,1.2,0),_e.castShadow=!0,me.add(_e)}),[-.53,.53].forEach(Se=>{const _e=new Ae(Et(.04,2.32,.32),Ee);_e.position.set(Se,1.2,-.02),_e.castShadow=!0,me.add(_e)});const Ve=[.45,.85,1.25,1.65,2.05];Ve.forEach(Se=>{const _e=new Ae(Et(3.14,.03,.32),Ee);_e.position.set(0,Se,-.02),_e.castShadow=!0,me.add(_e)}),r.add(me),me.children.forEach(Se=>{Se.isMesh&&De.push({mesh:Se,zoneId:"calm"})});function $e(Se,_e,ne,Be,Me,ge,Ue){const ut=new $i,At=.04,bt=.04,_n=tt(2759184,.6,.1),en=new Ae(Et(Me,ge,.01),tt(16117992,.95));en.position.z=At/2,ut.add(en),Ue.forEach((Pn,tr)=>{const Zr=Me*(.3+Math.random()*.4),Es=ge*(.3+Math.random()*.4),ws=new Ae(Et(Zr,Es,.002),tt(Pn,.9));ws.position.set((Math.random()-.5)*(Me-Zr),(Math.random()-.5)*(ge-Es),At/2+.006+tr*.001),ut.add(ws)});const Cn=new Ae(Et(Me+bt*2,bt,At),_n);Cn.position.set(0,ge/2+bt/2,0),ut.add(Cn);const Ot=new Ae(Et(Me+bt*2,bt,At),_n);Ot.position.set(0,-ge/2-bt/2,0),ut.add(Ot);const rn=new Ae(Et(bt,ge,At),_n);rn.position.set(-Me/2-bt/2,0,0),ut.add(rn);const Rn=new Ae(Et(bt,ge,At),_n);Rn.position.set(Me/2+bt/2,0,0),ut.add(Rn),ut.position.set(Se,_e,ne),ut.rotation.y=Be,r.add(ut)}$e(-7.94,1.8,1,Math.PI/2,2,1.2,[4876938,12882032,14207144,2767434]),$e(-1.2,1.7,-6.44,0,1,1.4,[5929032,11040848,14733496]),$e(1.8,1.7,-6.44,0,.9,.9,[13936704,4860942,13150330]);const Oe=[12603472,5271744,5283936,12623920,8409232,12611648,4214912,12601480,4229744,3170416,9453632,13672512,4235408,8409152,5263536],Ie=[.32,.28,.35,.3,.25,.33,.29,.27,.34,.31,.26,.36,.28,.33,.3],ft=[.04,.05,.03,.06,.04,.05,.04,.03,.04,.05,.03,.06,.04,.04,.05];for(let Se=0;Se<4;Se++)for(let _e=0;_e<3;_e++)if(Math.random()>.3){const ne=4+Math.floor(Math.random()*9);let Me=(_e-1)*1.06-.35+Math.random()*.3;for(let ge=0;ge<ne;ge++){const Ue=Math.floor(Math.random()*Oe.length),ut=Oe[Ue],At=ft[Ue],bt=Ie[Ue]+(Math.random()*.04-.02),_n=.2+(Math.random()*.02-.01),en=new $i,Cn=new Ae(Et(At,bt,_n),tt(ut,.88));Cn.castShadow=!0,en.add(Cn);const Ot=new Ae(Et(At+.002,bt-.01,.015),tt(ut,.75,.05));Ot.position.z=_n/2+.007,en.add(Ot);const rn=new Ae(Et(At-.006,bt-.015,_n-.015),tt(16117984,.95));rn.position.x=.002,en.add(rn);const Rn=Ve[Se]+.015+bt/2;let Pn=0;ge>=ne-2&&Math.random()>.4&&(Pn=.12+Math.random()*.1,Me+=.03),en.position.set(-5+Me,Rn,-6.22+(Math.random()*.02-.01)),en.rotation.z=-Pn,r.add(en),en.children.forEach(tr=>{tr.isMesh&&De.push({mesh:tr,zoneId:"calm"})}),Me+=At+.002+(Pn>0?.03:0)}}const vt=tt(11036072,.88);[[-4.6,-2.2],[-3.5,-3.2],[-2.5,-2.5]].forEach(([Se,_e])=>{const ne=new Ae(un(.32,.3,.12,14),vt);ne.position.set(Se,.06,_e),ne.castShadow=!0,r.add(ne),De.push({mesh:ne,zoneId:"calm"});const Be=new Ae(new Af(.31,.01,6,20),tt(9062536,.9));Be.rotation.x=Math.PI/2,Be.position.set(Se,.12,_e),r.add(Be)});const xt=tt(6963744,.55,.1),B=new Ae(Et(1.3,.06,.75),xt);B.position.set(-3.5,.38,-2.9),B.castShadow=!0,r.add(B),De.push({mesh:B,zoneId:"calm"}),[[-.55,-.3],[.55,-.3],[-.55,.3],[.55,.3]].forEach(([Se,_e])=>{const ne=new Ae(un(.022,.022,.36,5),tt(4860942,.7,.2));ne.position.set(-3.5+Se,.18,-2.9+_e),r.add(ne)});const Ne=new Ae(un(.055,.05,.1,10),tt(15261904,.7));Ne.position.set(-3.5,.46,-2.9),r.add(Ne);const ve=tt(9070656,.5,.4),qe=new Ae(un(.022,.022,1.55,6),ve);qe.position.set(-2.2,.78,-1.6),r.add(qe);const ke=new Ae(un(.15,.15,.04,10),ve);ke.position.set(-2.2,.02,-1.6),r.add(ke);const we=new Ae(new $l(.28,.38,12,1,!0),tt(15255664,.7,0,{side:Ti}));we.position.set(-2.2,1.65,-1.6),we.castShadow=!0,r.add(we),De.push({mesh:we,zoneId:"calm"});const Xe=new Nl(16755268,1.6,4,2);Xe.position.set(-2.2,1.45,-1.6),r.add(Xe),e.lampLight=Xe;const pt=new Ae(new Un(3.4,2.8),tt(5929032,.98));return pt.rotation.x=-Math.PI/2,pt.position.set(3.8,.003,2.5),r.add(pt),De}function $M({activeZone:r,isMobile:e,handleZoom:n,handleReset:s,tutorialHighlight:a}){const l=a==="zones";return V.jsxs("div",{style:{position:"absolute",top:e?65:76,left:"50%",transform:"translateX(-50%)",display:"flex",gap:e?5:7,flexWrap:"wrap",justifyContent:"center",zIndex:l?45:10,maxWidth:e?"calc(100% - 32px)":"auto",padding:e?"0 8px":0},children:[Jt.map((u,f)=>{const p=(r==null?void 0:r.id)===u.id;return V.jsx("button",{className:"zbtn",onClick:()=>n(u),style:{padding:e?"6px 12px":"7px 16px",borderRadius:24,border:`1.5px solid ${l?"rgba(196,144,90,0.8)":p?u.accent:"rgba(248,238,216,0.25)"}`,background:p?u.accent:"rgba(18,12,6,0.6)",color:p?"#fff":"rgba(248,238,216,0.78)",fontSize:e?10:11,fontWeight:p?500:400,letterSpacing:"0.04em",cursor:"pointer",backdropFilter:"blur(12px)",fontFamily:"'DM Sans', sans-serif",boxShadow:p?`0 4px 20px ${u.accent}55`:"none",animationDelay:`${f*.06}s`,...l?{animation:"tutorialGlow 2s ease-in-out infinite"}:{}},children:e?u.icon:`${u.icon} ${u.label}`},u.id)}),r&&V.jsxs("button",{className:"zbtn",onClick:s,style:{padding:e?"6px 12px":"7px 16px",borderRadius:24,border:"1.5px solid rgba(248,238,216,0.28)",background:"rgba(18,12,6,0.6)",color:"rgba(248,238,216,0.7)",fontSize:e?10:11,fontWeight:300,cursor:"pointer",backdropFilter:"blur(12px)",fontFamily:"'DM Sans', sans-serif"},children:["↺ ",e?"":"Overview"]})]})}function KM({displayZone:r,activeZone:e,isMobile:n,goToAdjacentZone:s}){return V.jsxs("div",{className:"panel-in",style:{position:"absolute",right:n?12:22,top:n?"auto":"50%",bottom:n?12:"auto",left:n?12:"auto",width:n?"auto":300,maxHeight:n?"50vh":"auto",overflowY:n?"auto":"visible",zIndex:20,background:"rgba(16,10,4,0.95)",borderRadius:n?16:20,padding:n?"20px 18px":"28px 24px",boxShadow:`0 16px 50px rgba(0,0,0,0.55), 0 0 0 1px ${r.accent}44`,backdropFilter:"blur(18px)",border:`1px solid ${r.accent}44`},children:[V.jsxs("div",{style:{display:"inline-flex",alignItems:"center",gap:8,padding:"5px 13px",borderRadius:20,marginBottom:16,background:r.accent+"22",border:`1px solid ${r.accent}66`},children:[V.jsx("span",{style:{fontSize:15},children:r.icon}),V.jsx("span",{style:{fontFamily:"'DM Sans'",fontSize:10,fontWeight:500,color:r.accent,letterSpacing:"0.07em",textTransform:"uppercase"},children:e?"Zone Active":"Hover Preview"})]}),V.jsx("div",{style:{fontFamily:"'Cormorant Garamond', serif",fontSize:21,fontWeight:600,color:"#F8EED8",lineHeight:1.2,marginBottom:12},children:r.label}),V.jsx("div",{style:{fontFamily:"'DM Sans'",fontSize:12,lineHeight:1.8,color:"rgba(248,238,216,0.62)",marginBottom:20},children:r.desc}),V.jsx("div",{style:{fontFamily:"'DM Sans'",fontSize:9,letterSpacing:"0.13em",textTransform:"uppercase",color:"rgba(248,238,216,0.32)",marginBottom:10},children:"Design Interventions"}),r.features.map((a,l)=>V.jsxs("div",{style:{display:"flex",alignItems:"center",gap:9,padding:"7px 0",borderBottom:"1px solid rgba(248,238,216,0.06)",fontFamily:"'DM Sans'",fontSize:12,color:"rgba(248,238,216,0.75)"},children:[V.jsx("span",{style:{color:r.accent,fontSize:9,flexShrink:0,marginTop:1},children:"✦"}),a]},l)),V.jsx("div",{style:{marginTop:18,padding:"10px 16px",borderRadius:12,background:r.accent+"18",border:`1px solid ${r.accent}30`,fontFamily:"'DM Sans'",fontSize:13,fontWeight:500,color:r.accent,letterSpacing:"0.02em"},children:r.metric}),!e&&V.jsx("div",{style:{marginTop:12,fontFamily:"'DM Sans'",fontSize:10,color:"rgba(248,238,216,0.3)",textAlign:"center",letterSpacing:"0.08em"},children:"Click to enter zone →"}),e&&V.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",marginTop:18,paddingTop:14,borderTop:"1px solid rgba(248,238,216,0.08)"},children:[V.jsx("button",{className:"zbtn",onClick:()=>s(-1),style:{padding:"6px 12px",borderRadius:18,border:"1px solid rgba(248,238,216,0.22)",background:"rgba(248,238,216,0.05)",color:"rgba(248,238,216,0.8)",fontSize:11,cursor:"pointer",fontFamily:"'DM Sans'"},children:"← Prev"}),V.jsxs("span",{style:{fontFamily:"'DM Sans'",fontSize:10,color:"rgba(248,238,216,0.4)",letterSpacing:"0.08em"},children:[Jt.findIndex(a=>a.id===e.id)+1," / ",Jt.length]}),V.jsx("button",{className:"zbtn",onClick:()=>s(1),style:{padding:"6px 12px",borderRadius:18,border:`1px solid ${r.accent}66`,background:r.accent+"22",color:r.accent,fontSize:11,cursor:"pointer",fontFamily:"'DM Sans'",fontWeight:500},children:"Next →"})]})]},r.id)}function ZM({loaded:r,welcomePhase:e,setWelcomePhase:n,setShowWelcome:s,setTutorialStep:a,isMobile:l}){return!r||e==="done"?null:V.jsxs(V.Fragment,{children:[V.jsx("div",{style:{position:"absolute",inset:0,background:"rgba(10,6,2,0.65)",backdropFilter:"blur(4px)",zIndex:50,animation:"welcomeFadeIn 0.5s ease forwards"}}),V.jsxs("div",{style:{position:"absolute",top:"50%",left:"50%",transform:"translate(-50%, -50%)",width:l?"calc(100% - 40px)":440,maxWidth:"calc(100vw - 40px)",zIndex:51,background:"rgba(20,14,8,0.97)",borderRadius:22,padding:l?"32px 24px":"40px 36px",border:"1px solid rgba(196,144,90,0.35)",boxShadow:"0 30px 80px rgba(0,0,0,0.7), 0 0 0 1px rgba(248,238,216,0.06)",backdropFilter:"blur(20px)",textAlign:"center",animation:"welcomeSlideUp 0.6s cubic-bezier(.2,.8,.2,1) forwards"},children:[e==="intro"&&V.jsxs(V.Fragment,{children:[V.jsx("div",{style:{fontSize:36,marginBottom:16,filter:"drop-shadow(0 4px 12px rgba(196,144,90,0.3))"},children:"🌿"}),V.jsxs("div",{style:{fontFamily:"'Cormorant Garamond', serif",fontSize:l?22:26,fontWeight:600,color:"#F8EED8",lineHeight:1.2,marginBottom:12},children:["Integrated Modular",V.jsx("br",{}),"Healing Space"]}),V.jsx("div",{style:{fontFamily:"'DM Sans', sans-serif",fontSize:12,lineHeight:1.8,color:"rgba(248,238,216,0.55)",marginBottom:8,maxWidth:340,margin:"0 auto 24px"},children:"Explore a 3D prototype of a hospital waiting environment redesigned around four wellness zones — each backed by evidence-based design interventions that measurably reduce patient stress and anxiety."}),V.jsx("div",{style:{display:"flex",flexWrap:"wrap",justifyContent:"center",gap:8,marginBottom:28},children:Jt.map(u=>V.jsxs("span",{style:{padding:"4px 12px",borderRadius:16,background:u.accent+"18",border:`1px solid ${u.accent}44`,fontFamily:"'DM Sans'",fontSize:10,color:u.accent,letterSpacing:"0.04em"},children:[u.icon," ",u.label]},u.id))}),V.jsx("button",{onClick:()=>n("askNew"),className:"zbtn",style:{padding:"12px 36px",borderRadius:28,border:"none",background:"linear-gradient(135deg, #C4905A, #A07040)",color:"#fff",fontSize:14,fontWeight:500,letterSpacing:"0.06em",cursor:"pointer",fontFamily:"'DM Sans', sans-serif",boxShadow:"0 8px 28px rgba(196,144,90,0.35)"},children:"Start Exploring →"}),V.jsx("div",{style:{marginTop:16,fontFamily:"'DM Sans'",fontSize:10,color:"rgba(248,238,216,0.3)",letterSpacing:"0.08em"},children:"3D Spatial Prototype · Team 142"})]}),e==="askNew"&&V.jsxs(V.Fragment,{children:[V.jsx("div",{style:{fontSize:32,marginBottom:16},children:"👋"}),V.jsx("div",{style:{fontFamily:"'Cormorant Garamond', serif",fontSize:l?20:24,fontWeight:600,color:"#F8EED8",lineHeight:1.2,marginBottom:12},children:"Are you a new user?"}),V.jsx("div",{style:{fontFamily:"'DM Sans', sans-serif",fontSize:12,lineHeight:1.8,color:"rgba(248,238,216,0.55)",maxWidth:340,margin:"0 auto 28px"},children:"If this is your first time, we'll walk you through the space with a quick interactive tutorial covering controls, zones, and tools."}),V.jsxs("div",{style:{display:"flex",gap:12,justifyContent:"center",flexWrap:"wrap"},children:[V.jsx("button",{onClick:()=>{s(!1),n("done"),a(0)},className:"zbtn",style:{padding:"12px 28px",borderRadius:28,border:"none",background:"linear-gradient(135deg, #C4905A, #A07040)",color:"#fff",fontSize:13,fontWeight:500,letterSpacing:"0.06em",cursor:"pointer",fontFamily:"'DM Sans', sans-serif",boxShadow:"0 8px 28px rgba(196,144,90,0.35)"},children:"Yes, show me around"}),V.jsx("button",{onClick:()=>{s(!1),n("done")},className:"zbtn",style:{padding:"12px 28px",borderRadius:28,border:"1px solid rgba(248,238,216,0.25)",background:"rgba(248,238,216,0.06)",color:"rgba(248,238,216,0.8)",fontSize:13,fontWeight:400,letterSpacing:"0.06em",cursor:"pointer",fontFamily:"'DM Sans', sans-serif"},children:"No, I'll explore"})]})]})]})]})}function JM({tutorialStep:r,setTutorialStep:e,handleReset:n,isMobile:s}){return r<0||r>=En.length?null:V.jsxs(V.Fragment,{children:[En[r].highlight&&V.jsx("div",{style:{position:"absolute",inset:0,background:"rgba(0,0,0,0.7)",pointerEvents:"none",zIndex:44}}),En[r].highlight==="viewport"&&V.jsx("div",{style:{position:"absolute",inset:0,border:"3px solid rgba(196,144,90,0.5)",borderRadius:0,pointerEvents:"none",zIndex:45,boxShadow:"inset 0 0 60px rgba(196,144,90,0.15)"}}),V.jsxs("div",{className:"fade-up",style:{position:"absolute",bottom:s?16:32,left:"50%",transform:"translateX(-50%)",width:s?"calc(100% - 24px)":520,maxWidth:"calc(100vw - 24px)",zIndex:46,background:"rgba(16,10,4,0.96)",borderRadius:18,padding:s?"20px 18px":"24px 28px",border:"1px solid rgba(196,144,90,0.35)",boxShadow:"0 20px 60px rgba(0,0,0,0.6)",backdropFilter:"blur(16px)"},children:[V.jsx("div",{style:{display:"flex",gap:3,marginBottom:16},children:En.map((a,l)=>V.jsx("div",{style:{flex:1,height:3,borderRadius:2,background:l<=r?"#C4905A":"rgba(248,238,216,0.12)",transition:"background 0.3s ease"}},l))}),V.jsxs("div",{style:{fontFamily:"'DM Sans', sans-serif",fontSize:10,letterSpacing:"0.12em",textTransform:"uppercase",color:"rgba(196,144,90,0.8)",marginBottom:8},children:["Step ",r+1," of ",En.length]}),V.jsx("div",{style:{fontFamily:"'Cormorant Garamond', serif",fontSize:s?18:22,fontWeight:600,color:"#F8EED8",lineHeight:1.2,marginBottom:10},children:En[r].title}),V.jsx("div",{style:{fontFamily:"'DM Sans', sans-serif",fontSize:12,lineHeight:1.8,color:"rgba(248,238,216,0.65)",marginBottom:8},children:En[r].text}),En[r].sub&&V.jsx("div",{style:{fontFamily:"'DM Sans', sans-serif",fontSize:11,fontWeight:500,color:"#C4905A",marginBottom:16,padding:"6px 12px",background:"rgba(196,144,90,0.1)",borderRadius:8,display:"inline-block"},children:En[r].sub}),V.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",marginTop:8,paddingTop:14,borderTop:"1px solid rgba(248,238,216,0.08)"},children:[V.jsx("div",{style:{display:"flex",gap:10},children:r>0&&V.jsx("button",{onClick:()=>e(a=>a-1),className:"zbtn",style:{padding:"8px 18px",borderRadius:20,border:"1px solid rgba(248,238,216,0.4)",background:"rgba(248,238,216,0.08)",color:"rgba(248,238,216,0.9)",fontSize:13,cursor:"pointer",fontFamily:"'DM Sans'"},children:"← Back"})}),V.jsxs("div",{style:{display:"flex",gap:10},children:[V.jsx("button",{onClick:()=>{e(-1),n()},className:"zbtn",style:{padding:"8px 18px",borderRadius:20,border:"1px solid rgba(248,238,216,0.3)",background:"transparent",color:"rgba(248,238,216,0.8)",fontSize:13,cursor:"pointer",fontFamily:"'DM Sans'"},children:"Skip"}),!En[r].requiredAction&&V.jsx("button",{onClick:()=>{r>=En.length-1?(e(-1),n()):e(a=>a+1)},className:"zbtn",style:{padding:"8px 24px",borderRadius:20,border:"none",background:"linear-gradient(135deg, #D4A06A, #B08050)",color:"#fff",fontSize:13,fontWeight:600,cursor:"pointer",fontFamily:"'DM Sans'",boxShadow:"0 4px 14px rgba(196,144,90,0.5)"},children:r>=En.length-1?"Finish ✓":"Next →"})]})]})]})]})}function QM({isMobile:r,showTools:e,setShowTools:n,heatmapMode:s,setHeatmapMode:a,patientSimActive:l,setPatientSimActive:u,guidedTour:f,setGuidedTour:p,splitScreen:m,setSplitScreen:x,inspectorMode:S,setInspectorMode:g,setInspectedItem:y,circadianTime:T,setCircadianTime:R,comparisonMode:_,onTutorialAction:v,tutorialHighlight:b}){const L=b==="tools";return V.jsxs(V.Fragment,{children:[V.jsxs("button",{onClick:()=>{n(P=>!P),!e&&v&&v("open_tools")},title:e?"Hide tools":"Show tools",className:`tools-fab ${e?"open":""}`,style:{position:"absolute",left:r?14:26,top:"auto",bottom:r?14:26,width:46,height:46,borderRadius:13,border:`1px solid ${L?"rgba(196,144,90,0.8)":e?"rgba(196,144,90,0.6)":"rgba(248,238,216,0.14)"}`,background:e?"linear-gradient(135deg, rgba(196,144,90,0.92), rgba(160,112,80,0.92))":"rgba(18,12,6,0.72)",color:"#F8EED8",cursor:"pointer",backdropFilter:"blur(16px)",boxShadow:e?"0 8px 28px rgba(196,144,90,0.28), inset 0 1px 0 rgba(255,255,255,0.12)":"0 4px 14px rgba(0,0,0,0.3)",zIndex:L?45:25,padding:0,...L?{animation:"tutorialGlow 2s ease-in-out infinite"}:{}},children:[V.jsx("span",{className:"bars",children:V.jsxs("svg",{width:"18",height:"18",viewBox:"0 0 18 18",fill:"none",children:[V.jsx("circle",{cx:"3",cy:"4.5",r:"1.2",fill:"currentColor"}),V.jsx("rect",{x:"6.5",y:"3.8",width:"9",height:"1.4",rx:"0.7",fill:"currentColor"}),V.jsx("circle",{cx:"3",cy:"9",r:"1.2",fill:"currentColor"}),V.jsx("rect",{x:"6.5",y:"8.3",width:"9",height:"1.4",rx:"0.7",fill:"currentColor"}),V.jsx("circle",{cx:"3",cy:"13.5",r:"1.2",fill:"currentColor"}),V.jsx("rect",{x:"6.5",y:"12.8",width:"9",height:"1.4",rx:"0.7",fill:"currentColor"})]})}),V.jsx("span",{className:"cross",children:V.jsx("svg",{width:"16",height:"16",viewBox:"0 0 16 16",fill:"none",children:V.jsx("path",{d:"M3 3 L13 13 M13 3 L3 13",stroke:"currentColor",strokeWidth:"1.6",strokeLinecap:"round"})})})]}),!e&&!r&&V.jsx("div",{style:{position:"absolute",left:80,bottom:34,fontFamily:"'DM Sans', sans-serif",fontSize:10,letterSpacing:"0.1em",textTransform:"uppercase",color:"rgba(248,238,216,0.45)",pointerEvents:"none",animation:"fadeUp 0.5s ease 2s forwards",opacity:0,zIndex:25},children:"Tools"}),e&&V.jsx("div",{className:"dock-in",style:{position:"absolute",left:r?"50%":26,bottom:r?72:84,top:"auto",transform:r?"translateX(-50%)":"none",display:"flex",flexDirection:r?"row":"column",gap:8,zIndex:20,padding:8,background:"rgba(18,12,6,0.75)",borderRadius:14,border:"1px solid rgba(248,238,216,0.12)",backdropFilter:"blur(14px)",flexWrap:"wrap",maxWidth:r?"calc(100% - 24px)":"auto"},children:[{key:"heatmap",label:"Heatmap",icon:"▦",active:s,toggle:()=>a(P=>!P),color:"#E07B4A"},{key:"patients",label:"Patient Flow",icon:"◉",active:l,toggle:()=>u(P=>!P),color:"#4A8A58"},{key:"tour",label:"Guided Tour",icon:"▶",active:f,toggle:()=>{f||x(!1),p(P=>!P)},color:"#5572C4"},{key:"split",label:"Split View",icon:"◫",active:m,toggle:()=>{m||p(!1),x(P=>!P)},color:"#8A5898"},{key:"inspect",label:"Inspect",icon:"⊙",active:S,toggle:()=>{g(P=>!P),S&&y(null)},color:"#C4905A"}].map((P,z)=>V.jsxs("button",{onClick:P.toggle,className:"zbtn dock-item",title:`${P.label}${P.active?" (click to disable)":""}`,style:{animationDelay:`${.06+z*.05}s`,width:r?44:150,height:36,padding:r?0:"0 12px",borderRadius:8,border:`1px solid ${P.active?P.color:"rgba(248,238,216,0.18)"}`,background:P.active?P.color:"rgba(18,12,6,0.4)",color:P.active?"#fff":"rgba(248,238,216,0.8)",fontSize:r?16:11,fontFamily:"'DM Sans', sans-serif",letterSpacing:"0.04em",cursor:"pointer",display:"flex",alignItems:"center",justifyContent:r?"center":"flex-start",gap:8,fontWeight:P.active?500:400},children:[V.jsx("span",{style:{fontSize:14},children:P.icon}),!r&&V.jsx("span",{children:P.label})]},P.key))}),e&&!r&&!m&&V.jsxs("div",{className:"slider-in",style:{position:"absolute",bottom:28,left:"50%",transform:"translateX(-50%)",width:340,padding:"10px 18px",background:"rgba(18,12,6,0.82)",borderRadius:12,border:"1px solid rgba(248,238,216,0.12)",backdropFilter:"blur(14px)",zIndex:15,fontFamily:"'DM Sans', sans-serif"},children:[V.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:6},children:[V.jsx("span",{style:{fontSize:10,letterSpacing:"0.12em",textTransform:"uppercase",color:"rgba(248,238,216,0.5)"},children:"Circadian Light"}),V.jsxs("span",{style:{fontSize:12,color:"#F8EED8",fontVariantNumeric:"tabular-nums"},children:[String(Math.floor(T)).padStart(2,"0"),":",String(Math.floor(T%1*60)).padStart(2,"0")]})]}),V.jsx("input",{type:"range",min:0,max:24,step:.25,value:T,onChange:P=>R(parseFloat(P.target.value)),disabled:_,style:{width:"100%",accentColor:"#C4905A",cursor:_?"not-allowed":"pointer",opacity:_?.4:1}}),V.jsxs("div",{style:{display:"flex",justifyContent:"space-between",fontSize:9,color:"rgba(248,238,216,0.35)",marginTop:2},children:[V.jsx("span",{children:"00"}),V.jsx("span",{children:"06"}),V.jsx("span",{children:"12"}),V.jsx("span",{children:"18"}),V.jsx("span",{children:"24"})]})]})]})}function eE({inspectedItem:r,setInspectedItem:e,isMobile:n}){const[s,a]=yt.useState(!1);if(yt.useEffect(()=>{r?a(!0):setTimeout(()=>a(!1),250)},[r]),!s&&!r)return null;const l=!!r;return V.jsxs(V.Fragment,{children:[V.jsx("div",{onClick:()=>e(null),style:{position:"absolute",inset:0,background:"rgba(0, 0, 0, 0.45)",backdropFilter:"blur(8px)",zIndex:39,opacity:l?1:0,transition:"opacity 0.25s ease-in-out"}}),V.jsxs("div",{style:{position:"absolute",left:"50%",top:"50%",transform:`translate(-50%, -50%) scale(${l?1:.96})`,opacity:l?1:0,transition:"all 0.3s cubic-bezier(0.16, 1, 0.3, 1)",width:n?"calc(100% - 40px)":480,maxWidth:"100%",maxHeight:"85vh",overflowY:"auto",background:"linear-gradient(160deg, rgba(35,40,45,0.95) 0%, rgba(15,18,22,0.98) 100%)",borderRadius:24,padding:"32px",border:"1px solid rgba(255,255,255,0.1)",boxShadow:"0 30px 60px rgba(0,0,0,0.8), inset 0 1px 0 rgba(255,255,255,0.1)",zIndex:40},children:[V.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"flex-start",marginBottom:24},children:[V.jsxs("div",{children:[V.jsxs("div",{style:{fontSize:10,letterSpacing:"0.2em",textTransform:"uppercase",color:"#A0B0C0",fontWeight:600,display:"flex",alignItems:"center",gap:8},children:[V.jsx("span",{style:{width:8,height:8,borderRadius:"50%",background:"#4ADE80",boxShadow:"0 0 10px rgba(74,222,128,0.5)"}}),"Material Details"]}),V.jsx("div",{style:{fontFamily:"'Cormorant Garamond', serif",fontSize:28,color:"#FFFFFF",marginTop:6,lineHeight:1.1},children:r==null?void 0:r.name})]}),V.jsx("button",{onClick:()=>e(null),onMouseEnter:u=>{u.currentTarget.style.background="rgba(255,255,255,0.15)",u.currentTarget.style.transform="scale(1.05)"},onMouseLeave:u=>{u.currentTarget.style.background="rgba(255,255,255,0.05)",u.currentTarget.style.transform="scale(1)"},style:{border:"1px solid rgba(255,255,255,0.1)",background:"rgba(255,255,255,0.05)",color:"#FFFFFF",borderRadius:"50%",width:36,height:36,fontSize:18,cursor:"pointer",display:"flex",alignItems:"center",justifyContent:"center",transition:"all 0.2s ease"},children:"×"})]}),(r==null?void 0:r.dim)&&V.jsxs("div",{style:{fontSize:13,color:"rgba(255,255,255,0.5)",fontFamily:"'DM Sans', sans-serif",marginBottom:24,paddingBottom:16,borderBottom:"1px solid rgba(255,255,255,0.08)"},children:["Dimensions: ",V.jsx("span",{style:{color:"#E0E0E0",marginLeft:8},children:r.dim})]}),V.jsx("div",{style:{display:"grid",gridTemplateColumns:"1fr 1fr",gap:16,fontFamily:"'DM Sans', sans-serif"},children:r==null?void 0:r.specs.map((u,f)=>V.jsxs("div",{style:{padding:"12px 16px",background:"linear-gradient(180deg, rgba(255,255,255,0.06) 0%, rgba(255,255,255,0.01) 100%)",borderRadius:12,border:"1px solid rgba(255,255,255,0.06)",boxShadow:"0 4px 12px rgba(0,0,0,0.2)"},children:[V.jsx("div",{style:{fontSize:9,letterSpacing:"0.1em",textTransform:"uppercase",color:"rgba(255,255,255,0.4)"},children:u[0]}),V.jsx("div",{style:{fontSize:14,color:"#FFFFFF",marginTop:4,fontWeight:500},children:u[1]})]},f))}),(r==null?void 0:r.note)&&V.jsxs("div",{style:{marginTop:24,padding:"16px 20px",background:"linear-gradient(90deg, rgba(74,222,128,0.1) 0%, rgba(74,222,128,0.01) 100%)",borderLeft:"3px solid #4ADE80",borderRadius:"0 12px 12px 0",fontSize:13,fontStyle:"italic",color:"rgba(255,255,255,0.85)",fontFamily:"'DM Sans', sans-serif",lineHeight:1.5},children:['"',r.note,'"']})]})]})}function tE({isMobile:r,loaded:e,loadingProgress:n,activeZone:s,hovered:a,showHint:l,splitScreen:u,guidedTour:f,tourZoneIndex:p,setGuidedTour:m,comparisonMode:x,idlePrompt:S,showWelcome:g,showHelp:y,tutorialStep:T,inspectorMode:R,patientSimActive:_,occupancy:v,tourRef:b}){return V.jsxs(V.Fragment,{children:[V.jsxs("div",{style:{position:"absolute",top:0,left:0,right:0,padding:r?"16px 16px 50px":"20px 28px 60px",background:"linear-gradient(180deg, rgba(18,12,6,0.82) 0%, transparent 100%)",display:"flex",alignItems:"flex-start",justifyContent:"space-between",pointerEvents:"none"},children:[V.jsxs("div",{className:e?"fade-up":"",style:{opacity:e?1:0,maxWidth:r?"calc(100% - 60px)":"auto"},children:[V.jsx("div",{style:{fontFamily:"'Cormorant Garamond', serif",fontSize:r?18:23,fontWeight:600,color:"#F8EED8",letterSpacing:"-0.01em",lineHeight:1.1},children:"Integrated Modular Healing Space"}),V.jsx("div",{style:{fontFamily:"'DM Sans', sans-serif",fontSize:r?8:10,letterSpacing:"0.16em",textTransform:"uppercase",color:"rgba(248,238,216,0.5)",marginTop:5},children:"3D Spatial Prototype · Hospital Waiting Environment · Team 142"})]}),!r&&V.jsxs("div",{style:{fontFamily:"'DM Sans', sans-serif",fontSize:10,color:"rgba(248,238,216,0.38)",textAlign:"right",lineHeight:1.8,letterSpacing:"0.04em"},children:["300 m² floor plate",V.jsx("br",{}),"Capacity: 40–60 persons",V.jsx("br",{}),"Scale approx. 1:50"]})]}),l&&!s&&!r&&V.jsxs("div",{style:{position:"absolute",bottom:28,left:"50%",transform:"translateX(-50%)",background:"rgba(16,10,4,0.82)",color:"rgba(248,238,216,0.7)",padding:"10px 24px",borderRadius:30,fontFamily:"'DM Sans'",fontSize:11,letterSpacing:"0.05em",backdropFilter:"blur(12px)",border:"1px solid rgba(248,238,216,0.1)",pointerEvents:"none",display:"flex",gap:22},children:[V.jsx("span",{children:"🖱 Drag to orbit"}),V.jsx("span",{children:"⚲ Scroll to zoom"}),V.jsx("span",{children:"Click zones"}),V.jsx("span",{children:"Press H for help"})]}),l&&!s&&r&&V.jsx("div",{style:{position:"absolute",bottom:145,left:"50%",transform:"translateX(-50%)",background:"rgba(16,10,4,0.82)",color:"rgba(248,238,216,0.7)",padding:"10px 20px",borderRadius:30,fontFamily:"'DM Sans'",fontSize:10,letterSpacing:"0.05em",backdropFilter:"blur(12px)",border:"1px solid rgba(248,238,216,0.1)",pointerEvents:"none",textAlign:"center",maxWidth:"calc(100% - 32px)"},children:V.jsx("span",{children:"Swipe to explore · Tap zones · Press ? for help"})}),!r&&V.jsxs("div",{style:{position:"absolute",bottom:28,right:26,fontFamily:"'DM Sans'",fontSize:9,color:"rgba(248,238,216,0.32)",textAlign:"center",lineHeight:1.9,letterSpacing:"0.1em"},children:[V.jsx("div",{style:{fontSize:20,opacity:.35},children:"⊕"}),"N"]}),!r&&V.jsx("div",{style:{position:"absolute",bottom:78,left:"50%",transform:"translateX(-50%)",display:"flex",gap:8,alignItems:"center",pointerEvents:"none"},children:Jt.map(L=>V.jsx("div",{style:{width:(s==null?void 0:s.id)===L.id?20:6,height:6,borderRadius:3,background:(s==null?void 0:s.id)===L.id?L.accent:"rgba(248,238,216,0.22)",transition:"all 0.35s cubic-bezier(.4,0,.2,1)"}},L.id))}),_&&!r&&!u&&V.jsxs("div",{className:"panel-in",style:{position:"absolute",top:150,left:26,width:220,padding:16,background:"rgba(18,12,6,0.9)",borderRadius:12,border:"1px solid rgba(74,138,88,0.4)",backdropFilter:"blur(14px)",zIndex:15,fontFamily:"'DM Sans', sans-serif"},children:[V.jsxs("div",{style:{fontSize:9,letterSpacing:"0.14em",textTransform:"uppercase",color:"rgba(74,138,88,0.9)",marginBottom:10,display:"flex",alignItems:"center",gap:6},children:[V.jsx("span",{style:{width:6,height:6,borderRadius:3,background:"#4A8A58",display:"inline-block",animation:"pulse 1.5s infinite"}}),"Live Occupancy"]}),Jt.map(L=>{const P=v[L.id]||0;return V.jsxs("div",{style:{marginBottom:8},children:[V.jsxs("div",{style:{display:"flex",justifyContent:"space-between",fontSize:11,color:"rgba(248,238,216,0.8)",marginBottom:3},children:[V.jsxs("span",{children:[L.icon," ",L.label.split(" ")[0]]}),V.jsx("span",{style:{color:L.accent,fontWeight:500},children:P})]}),V.jsx("div",{style:{height:4,background:"rgba(248,238,216,0.08)",borderRadius:2,overflow:"hidden"},children:V.jsx("div",{style:{height:"100%",width:`${Math.min(100,P*25)}%`,background:L.accent,transition:"width 0.4s"}})})]},L.id)}),V.jsx("div",{style:{fontSize:9,color:"rgba(248,238,216,0.4)",marginTop:10,paddingTop:8,borderTop:"1px solid rgba(248,238,216,0.08)"},children:"8 simulated patients · stress-adaptive routing"})]}),a&&!s&&!R&&V.jsxs("div",{style:{position:"absolute",top:r?108:120,left:"50%",transform:"translateX(-50%)",padding:"5px 14px",borderRadius:14,background:"rgba(18,12,6,0.78)",border:`1px solid ${a.accent}66`,backdropFilter:"blur(10px)",fontFamily:"'DM Sans', sans-serif",fontSize:11,color:"rgba(248,238,216,0.85)",letterSpacing:"0.04em",display:"flex",alignItems:"center",gap:6,zIndex:12,pointerEvents:"none"},children:[V.jsx("span",{style:{color:a.accent},children:a.icon}),a.label,V.jsx("span",{style:{color:"rgba(248,238,216,0.35)",fontSize:10,marginLeft:4},children:"· click to enter"})]}),R&&V.jsx("div",{style:{position:"absolute",top:r?110:140,left:"50%",transform:"translateX(-50%)",padding:"8px 18px",borderRadius:16,background:"rgba(196,144,90,0.9)",color:"#fff",fontFamily:"'DM Sans'",fontSize:11,letterSpacing:"0.06em",zIndex:14,backdropFilter:"blur(12px)"},children:"⊙ Click a material surface (floor, beam, moss, acoustic panel)"}),u&&V.jsxs(V.Fragment,{children:[V.jsx("div",{style:{position:"absolute",top:r?120:150,left:"25%",transform:"translateX(-50%)",padding:"8px 20px",borderRadius:10,background:"rgba(60,70,85,0.92)",color:"#fff",fontFamily:"'DM Sans'",fontSize:r?10:12,letterSpacing:"0.12em",textTransform:"uppercase",fontWeight:500,zIndex:14,border:"1px solid rgba(255,255,255,0.18)"},children:"⊘ Typical Ward"}),V.jsx("div",{style:{position:"absolute",top:r?120:150,left:"75%",transform:"translateX(-50%)",padding:"8px 20px",borderRadius:10,background:"rgba(74,138,88,0.92)",color:"#fff",fontFamily:"'DM Sans'",fontSize:r?10:12,letterSpacing:"0.12em",textTransform:"uppercase",fontWeight:500,zIndex:14,border:"1px solid rgba(255,255,255,0.22)"},children:"✦ Healing Space"}),V.jsx("div",{style:{position:"absolute",top:0,bottom:0,left:"50%",width:2,background:"rgba(248,238,216,0.4)",zIndex:13}})]}),x&&V.jsxs("div",{style:{position:"absolute",top:r?110:140,left:"50%",transform:"translateX(-50%)",background:"rgba(60,70,85,0.92)",color:"#fff",padding:r?"10px 18px":"12px 26px",borderRadius:14,fontFamily:"'DM Sans', sans-serif",fontSize:r?10:12,letterSpacing:"0.08em",backdropFilter:"blur(12px)",border:"1px solid rgba(255,255,255,0.18)",textAlign:"center",zIndex:15,maxWidth:r?"calc(100% - 32px)":420,boxShadow:"0 10px 30px rgba(0,0,0,0.4)"},children:[V.jsx("div",{style:{fontSize:r?9:10,opacity:.65,textTransform:"uppercase",letterSpacing:"0.14em",marginBottom:3},children:"Baseline Reference"}),V.jsx("div",{style:{fontWeight:500},children:"Typical Hospital Waiting Room · Fluorescent, desaturated, no biophilic elements"})]}),f&&V.jsxs("div",{style:{position:"absolute",bottom:r?80:36,left:"50%",transform:"translateX(-50%)",display:"flex",flexDirection:"column",alignItems:"center",gap:10,zIndex:14,pointerEvents:"auto"},children:[V.jsxs("div",{style:{padding:"8px 20px",borderRadius:16,background:"rgba(16,10,4,0.88)",border:"1px solid rgba(85,114,196,0.5)",backdropFilter:"blur(12px)",display:"flex",alignItems:"center",gap:14,fontFamily:"'DM Sans'",fontSize:11,color:"rgba(248,238,216,0.85)",letterSpacing:"0.05em"},children:[V.jsx("span",{style:{color:"#5572C4"},children:"▶"}),V.jsxs("span",{children:["Guided Tour",p>=0?` · ${Jt[p].label}`:" · Starting"]}),V.jsx("span",{style:{color:"rgba(248,238,216,0.35)",fontSize:10},children:b?`${b.waypointIdx+1}/${b.waypoints.length}`:""}),V.jsx("button",{onClick:()=>m(!1),className:"zbtn",style:{padding:"4px 12px",borderRadius:12,border:"1px solid rgba(248,238,216,0.25)",background:"rgba(248,238,216,0.08)",color:"rgba(248,238,216,0.75)",fontSize:10,cursor:"pointer",fontFamily:"'DM Sans'"},children:"Exit Tour"})]}),V.jsx("div",{style:{display:"flex",gap:4,alignItems:"center"},children:Jt.map((L,P)=>V.jsx("div",{style:{width:p===P?18:6,height:6,borderRadius:3,background:p===P?L.accent:"rgba(248,238,216,0.2)",transition:"all 0.4s ease"}},L.id))})]}),S&&e&&!s&&!g&&!y&&!f&&T<0&&V.jsxs("div",{style:{position:"absolute",bottom:r?160:120,left:"50%",transform:"translateX(-50%)",display:"flex",flexDirection:"column",alignItems:"center",gap:8,pointerEvents:"none",animation:"idleBob 2s ease-in-out infinite",zIndex:12},children:[V.jsx("div",{style:{width:28,height:44,borderRadius:14,border:"2px solid rgba(248,238,216,0.35)",display:"flex",justifyContent:"center",paddingTop:8},children:V.jsx("div",{style:{width:4,height:10,borderRadius:2,background:"rgba(248,238,216,0.6)",animation:"fadeUp 1.2s ease-in-out infinite"}})}),V.jsx("span",{style:{fontFamily:"'DM Sans', sans-serif",fontSize:10,letterSpacing:"0.1em",textTransform:"uppercase",color:"rgba(248,238,216,0.4)"},children:"Scroll to explore"})]}),!e&&n<100&&V.jsxs("div",{style:{position:"absolute",inset:0,background:"#16100A",display:"flex",alignItems:"center",justifyContent:"center",flexDirection:"column",zIndex:100,transition:"opacity 0.5s"},children:[V.jsx("div",{style:{fontFamily:"'Cormorant Garamond', serif",fontSize:r?22:28,color:"#F8EED8",marginBottom:24},children:"Loading Healing Space"}),V.jsx("div",{style:{width:r?220:280,height:4,background:"rgba(248,238,216,0.1)",borderRadius:2,overflow:"hidden"},children:V.jsx("div",{style:{width:`${n}%`,height:"100%",background:"linear-gradient(90deg, #C4905A, #4A8A58, #5572C4, #8A5898)",transition:"width 0.3s ease"}})}),V.jsxs("div",{style:{fontFamily:"'DM Sans', sans-serif",fontSize:12,color:"rgba(248,238,216,0.5)",marginTop:16},children:[n,"%"]})]})]})}function nE({isMobile:r,comparisonMode:e,setComparisonMode:n,showHelp:s,setShowHelp:a,onTutorialAction:l,tutorialHighlight:u}){const f=u==="comparison";return V.jsxs("div",{style:{position:"absolute",top:r?16:90,right:r?16:22,display:"flex",gap:8,zIndex:f?45:30,pointerEvents:"auto"},children:[V.jsx("button",{onClick:()=>{n(!e),l&&l("toggle_comparison")},className:"zbtn",style:{height:40,padding:"0 14px",borderRadius:20,border:`1.5px solid ${f?"rgba(196,144,90,0.8)":e?"#C4905A":"rgba(248,238,216,0.3)"}`,background:e?"#C4905A":"rgba(18,12,6,0.7)",color:e?"#fff":"rgba(248,238,216,0.8)",fontSize:r?10:11,cursor:"pointer",backdropFilter:"blur(12px)",fontFamily:"'DM Sans'",letterSpacing:"0.04em",display:"flex",alignItems:"center",gap:6,...f?{animation:"tutorialGlow 2s ease-in-out infinite"}:{}},title:"Compare to typical waiting room",children:e?"✨ Healing View":"⊘ Standard View"}),V.jsx("button",{onClick:()=>a(!s),className:"zbtn",style:{width:40,height:40,borderRadius:"50%",border:`1.5px solid ${s?"#5572C4":"rgba(248,238,216,0.3)"}`,background:s?"#5572C4":"rgba(18,12,6,0.7)",color:"rgba(248,238,216,0.8)",fontSize:18,cursor:"pointer",backdropFilter:"blur(12px)",display:"flex",alignItems:"center",justifyContent:"center"},title:"Help (press H or ?)",children:"?"})]})}function iE({showHelp:r,setShowHelp:e,isMobile:n,setTutorialStep:s,setWelcomePhase:a}){return r?V.jsxs("div",{className:"fade-up",style:{position:"absolute",top:n?70:90,right:n?16:24,width:280,maxWidth:"calc(100vw - 32px)",background:"linear-gradient(160deg, rgba(22,16,10,0.95) 0%, rgba(12,8,4,0.98) 100%)",borderRadius:20,padding:"24px",border:"1px solid rgba(196,144,90,0.3)",boxShadow:"0 20px 50px rgba(0,0,0,0.7), inset 0 1px 0 rgba(255,255,255,0.05)",backdropFilter:"blur(20px)",zIndex:50,pointerEvents:"auto"},children:[V.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"flex-start",marginBottom:20},children:[V.jsx("div",{style:{fontFamily:"'Cormorant Garamond', serif",fontSize:24,color:"#F8EED8",lineHeight:1.1},children:"Controls & Help"}),V.jsx("button",{onClick:()=>e(!1),onMouseEnter:l=>{l.currentTarget.style.background="rgba(196,144,90,0.15)",l.currentTarget.style.transform="scale(1.1)"},onMouseLeave:l=>{l.currentTarget.style.background="rgba(196,144,90,0.05)",l.currentTarget.style.transform="scale(1)"},style:{border:"1px solid rgba(196,144,90,0.2)",background:"rgba(196,144,90,0.05)",color:"#F8EED8",borderRadius:"50%",width:32,height:32,fontSize:16,cursor:"pointer",display:"flex",alignItems:"center",justifyContent:"center",transition:"all 0.2s ease",marginTop:-4,marginRight:-4},children:"×"})]}),V.jsxs("div",{style:{display:"grid",gridTemplateColumns:"auto 1fr",gap:"12px 14px",fontFamily:"'DM Sans'",fontSize:12,color:"rgba(248,238,216,0.75)"},children:[V.jsx("span",{style:{color:"#8FA8F0",fontWeight:500},children:"🖱 L-Click + Drag"})," ",V.jsx("span",{children:"Orbit camera"}),V.jsx("span",{style:{color:"#8FA8F0",fontWeight:500},children:"🖱 R-Click + Drag"})," ",V.jsx("span",{children:"Pan camera"}),V.jsx("span",{style:{color:"#8FA8F0",fontWeight:500},children:"⚲ Scroll"})," ",V.jsx("span",{children:"Zoom in/out"}),V.jsx("span",{style:{color:"#8FA8F0",fontWeight:500},children:"📱 Pinch/Swipe"})," ",V.jsx("span",{children:"Mobile controls"}),V.jsx("span",{style:{color:"#C4905A",fontWeight:500},children:"⌨️ [ H ] or [ ? ]"})," ",V.jsx("span",{children:"Toggle this help"}),V.jsx("span",{style:{color:"#C4905A",fontWeight:500},children:"⌨️ [ C ]"})," ",V.jsx("span",{children:"Toggle comparison"}),V.jsx("span",{style:{color:"#C4905A",fontWeight:500},children:"⌨️ [ T ]"})," ",V.jsx("span",{children:"Toggle tools panel"})]}),V.jsx("div",{style:{marginTop:24,paddingTop:16,borderTop:"1px solid rgba(248,238,216,0.1)"},children:V.jsxs("button",{onClick:()=>{e(!1),s(0),a("done")},onMouseEnter:l=>{l.currentTarget.style.background="rgba(85,114,196,0.25)"},onMouseLeave:l=>{l.currentTarget.style.background="rgba(85,114,196,0.15)"},style:{padding:"10px 0",width:"100%",borderRadius:10,background:"rgba(85,114,196,0.15)",border:"1px solid rgba(85,114,196,0.4)",color:"#A0B8FF",fontSize:12,fontWeight:500,fontFamily:"'DM Sans'",cursor:"pointer",transition:"all 0.2s ease",display:"flex",alignItems:"center",justifyContent:"center",gap:8},children:[V.jsx("span",{style:{fontSize:10},children:"▶"})," Replay Interactive Tutorial"]})})]}):null}function rE(){var G;const r=yt.useRef(null),e=yt.useRef({}),[n,s]=yt.useState(null),[a,l]=yt.useState(!0),[u,f]=yt.useState(!1),[p,m]=yt.useState(null),[x,S]=yt.useState(!1),[g,y]=yt.useState(!1),[T,R]=yt.useState(0),[_,v]=yt.useState(!1),[b,L]=yt.useState(!1),[P,z]=yt.useState(!1),[D,k]=yt.useState(12),[w,I]=yt.useState(!1),[j,O]=yt.useState(-1),[q,oe]=yt.useState(!1),[pe,W]=yt.useState(!1),[ee,K]=yt.useState(null),[Z,ue]=yt.useState(!1),[de,F]=yt.useState(!1),[te,je]=yt.useState({}),[De,Ye]=yt.useState(!0),[ae,Te]=yt.useState("intro"),[ye,Ge]=yt.useState(-1),[st,ot]=yt.useState(!1),Ft=yt.useRef(null),ht=yt.useCallback(he=>{Ge(N=>N>=0&&En[N].requiredAction===he?N+1:N)},[]),Pt=yt.useCallback(he=>{if((n==null?void 0:n.id)===he.id){const _t=e.current;_t.isOrbit=!0,_t.tPos&&_t.tLookAt&&(_t.tPos.set(0,7.5,15.5),_t.tLookAt.set(0,1,0)),s(null),m(null);return}const N=e.current;N.isOrbit=!1,N.tPos&&N.tLookAt&&(N.tPos.set(he.camPos[0],he.camPos[1],he.camPos[2]),N.tLookAt.set(he.lookAt[0],he.lookAt[1],he.lookAt[2])),s(he),l(!1)},[n]),kt=yt.useCallback(()=>{const he=e.current;he.isOrbit=!0,he.tPos&&he.tLookAt&&(he.tPos.set(0,7.5,15.5),he.tLookAt.set(0,1,0)),s(null),m(null)},[]),dt=yt.useRef(Pt),Xt=yt.useRef(kt);yt.useEffect(()=>{dt.current=Pt,Xt.current=kt});const Yt=yt.useCallback(he=>{if(!n)return;const N=Jt.findIndex(Fe=>Fe.id===n.id),_t=Jt[(N+he+Jt.length)%Jt.length];Pt(_t)},[n,Pt]);if(yt.useEffect(()=>{e.current.heatmapMode=P},[P]),yt.useEffect(()=>{e.current.inspectorMode=pe},[pe]),yt.useEffect(()=>{e.current.splitScreen=q},[q]),yt.useEffect(()=>{const he=e.current.animRefs;he!=null&&he.patientGroup&&(he.patientGroup.visible=Z,e.current.patientSimActive=Z,Z||je({}))},[Z]),yt.useEffect(()=>{e.current.guidedTour=w,w?(e.current.tour={startTime:0,waypointIdx:0,segmentStart:0,started:!1,fromPos:new J(0,7.5,15.5),fromLookAt:new J(0,1,0),waypoints:YM},e.current.isOrbit=!1,s(null)):(e.current.tour=null,kt())},[w,kt]),yt.useEffect(()=>{const he=e.current.animRefs;if(!he||!he.sun||b)return;const N=D,_t=Math.max(0,Math.min(1,(N-6)/12)),Fe=_t*Math.PI,Rt=-12+_t*24,C=Math.sin(Fe)*14+2,M=10-_t*4;he.sun.position.set(Rt,C,M);let Y,me,Ee,be,Pe,fe;if(N<6||N>20?(Y=2241354,me=.05,Ee=1712176,be=.2,Pe=660520,fe=.1):N<8?(Y=16758904,me=.6,Ee=16767920,be=.35,Pe=16754816,fe=.8):N<17?(Y=16772560,me=1.05,Ee=16774628,be=.45,Pe=8965375,fe=.6):N<19?(Y=16750168,me=.8,Ee=16764048,be=.4,Pe=16744280,fe=.9):(Y=6967440,me=.25,Ee=4866144,be=.28,Pe=3813464,fe=.3),he.sun.color.setHex(Y),he.sun.intensity=me,he.ambient.color.setHex(Ee),he.ambient.intensity=be,he.skyMat){const Ve=new Dt(Pe);Ve.lerp(new Dt(16777215),1-Math.min(1,fe)),he.skyMat.color.copy(Ve)}const xe=N<7||N>18?1:0;e.current.nightBoost=xe},[D,b]),yt.useEffect(()=>{var N,_t,Fe;const he=e.current.animRefs;!he||!he.ambient||(b?(e.current.comparisonMode=!0,he.ambient.color.setHex(15398143),he.ambient.intensity=.95,he.sun.color.setHex(15791871),he.sun.intensity=.6,he.fillLight.intensity=.15,(N=he.accentLights)==null||N.forEach(Rt=>{Rt.intensity=0}),(_t=he.pendants)==null||_t.forEach(Rt=>{Rt.pl.intensity=0}),e.current.scene&&(e.current.scene.background=new Dt(14212836),e.current.scene.fog&&e.current.scene.fog.color.setHex(14212836))):(e.current.comparisonMode=!1,he.ambient.color.setHex(16774628),he.ambient.intensity=.45,he.sun.color.setHex(16772560),he.sun.intensity=1.05,he.fillLight.intensity=.35,(Fe=he.accentLights)==null||Fe.forEach((Rt,C)=>{Rt.color.setHex(Jt[C].hex),Rt.intensity=1.4}),e.current.scene&&(e.current.scene.background=new Dt(15589576),e.current.scene.fog&&e.current.scene.fog.color.setHex(15589576))))},[b]),yt.useEffect(()=>{e.current.tutorialStep=ye},[ye]),yt.useEffect(()=>{if(ye<0)return;const he=En[ye];if(!he)return;const N=e.current;he.cam?(N.isOrbit=!1,N.tPos&&N.tLookAt&&(N.tPos.set(he.cam.pos[0],he.cam.pos[1],he.cam.pos[2]),N.tLookAt.set(he.cam.lookAt[0],he.cam.lookAt[1],he.cam.lookAt[2]))):(ye===0||!he.cam)&&(N.isOrbit=!0,N.tPos&&N.tLookAt&&(N.tPos.set(0,7.5,15.5),N.tLookAt.set(0,1,0))),he.highlight==="tools"&&F(!0)},[ye]),yt.useEffect(()=>{const he=()=>{ot(!1),Ft.current&&clearTimeout(Ft.current),Ft.current=setTimeout(()=>ot(!0),5e3)};return he(),window.addEventListener("mousemove",he),window.addEventListener("mousedown",he),window.addEventListener("wheel",he),window.addEventListener("touchstart",he),window.addEventListener("keydown",he),()=>{Ft.current&&clearTimeout(Ft.current),window.removeEventListener("mousemove",he),window.removeEventListener("mousedown",he),window.removeEventListener("wheel",he),window.removeEventListener("touchstart",he),window.removeEventListener("keydown",he)}},[]),yt.useEffect(()=>{const he=()=>{v(window.innerWidth<=768||"ontouchstart"in window)};return he(),window.addEventListener("resize",he),()=>window.removeEventListener("resize",he)},[]),yt.useEffect(()=>{const he=r.current;if(!he)return;const N=e.current;N.animRefs={};try{const ne=document.createElement("canvas");if(!(ne.getContext("webgl")||ne.getContext("experimental-webgl"))){y(!0);return}}catch{y(!0);return}R(10);const _t=window.innerWidth<=768||"ontouchstart"in window;N.renderer=new jM({antialias:!_t,powerPreference:"high-performance"}),N.renderer.setPixelRatio(Math.min(window.devicePixelRatio,_t?1.5:2)),N.renderer.setSize(he.clientWidth,he.clientHeight),N.renderer.shadowMap.enabled=!_t,_t||(N.renderer.shadowMap.type=oa),N.renderer.toneMapping=df,N.renderer.toneMappingExposure=1.1,N.renderer.outputColorSpace=ai,he.appendChild(N.renderer.domElement),R(30),N.scene=new Tv,N.scene.background=new Dt(15589576),N.scene.fog=new Mf(15589576,30,65),N.camera=new mi(54,he.clientWidth/he.clientHeight,.1,80),N.camera.position.set(0,7.5,15.5),R(50),N.clickables=qM(N.scene,N.animRefs);const Fe=[5929630,13144688,10386120,7383184,13138590,10399344,8036040,13147738],Rt=[],C=new $i;C.visible=!1,N.scene.add(C);for(let ne=0;ne<8;ne++){const Be=new $i,Me=Fe[ne],ge=new Ae(un(.14,.18,.7,8),tt(Me,.85));ge.position.y=.35,ge.castShadow=!0,Be.add(ge);const Ue=new Ae(ao(.11,10,8),tt(15253656,.85));Ue.position.y=.82,Ue.castShadow=!0,Be.add(Ue);const ut=-6+Math.random()*12;Be.position.set(ut,0,6.2),C.add(Be),Rt.push({group:Be,state:"entering",target:new J(0,0,-5),waypoint:null,zoneId:null,dwellEnd:0,speed:.012+Math.random()*.008,stressLevel:.7+Math.random()*.3,bobPhase:Math.random()*Math.PI*2,spawnDelay:ne*600,spawnTime:0})}N.animRefs.patients=Rt,N.animRefs.patientGroup=C,R(70),N.orbit={theta:.38,phi:.58,radius:15.5},N.tOrbit={theta:.38,phi:.58,radius:15.5},N.isOrbit=!0,N.tPos=new J(0,7.5,15.5),N.tLookAt=new J(0,1,0),N.cLookAt=new J(0,1,0);const M=new Kv,Y=new Ht,me=(ne,Be)=>{const Me=he.getBoundingClientRect();Y.x=(ne-Me.left)/Me.width*2-1,Y.y=-((Be-Me.top)/Me.height)*2+1,M.setFromCamera(Y,N.camera);const ge=M.intersectObjects(N.clickables.map(Ue=>Ue.mesh));return ge.length?N.clickables.find(Ue=>Ue.mesh===ge[0].object):null};let Ee=!1,be=!1,Pe=0,fe=0,xe=0,Ve=0;const $e=ne=>{Ee=!0,be=!1,Pe=ne.clientX,fe=ne.clientY,l(!1),he.style.cursor="grabbing"},Oe=ne=>{if(!Ee){const ge=me(ne.clientX,ne.clientY);m(ge?Jt.find(Ue=>Ue.id===ge.zoneId):null),he.style.cursor=ge?"pointer":N.guidedTour?"default":"grab";return}const Be=ne.clientX-Pe,Me=ne.clientY-fe;if((Math.abs(Be)>2||Math.abs(Me)>2)&&(be=!0),!N.guidedTour){if(N.isOrbit){if(N.tutorialStep>=0){const ge=En[N.tutorialStep];if(ge.requiredAction==="orbit")xe+=Math.abs(Be)+Math.abs(Me),xe>80&&ht("orbit");else if(ge.requiredAction)return}if(ne.buttons===2||ne.buttons===1&&(ne.ctrlKey||ne.metaKey)){const ge=N.tOrbit.radius*.0015,Ue=Math.sin(N.orbit.theta+Math.PI/2),ut=Math.cos(N.orbit.theta+Math.PI/2),At=Math.sin(N.orbit.theta),bt=Math.cos(N.orbit.theta);N.tLookAt.x-=Ue*Be*ge+At*Me*ge,N.tLookAt.z-=ut*Be*ge+bt*Me*ge}else N.tOrbit.theta-=Be*.005,N.tOrbit.phi=Math.max(.01,Math.min(Math.PI/2-.05,N.tOrbit.phi+Me*.005))}}Pe=ne.clientX,fe=ne.clientY},Ie=()=>{Ee=!1,he.style.cursor="grab"},ft=ne=>{if(N.tutorialStep>=0){const Be=En[N.tutorialStep];if(Be.requiredAction==="zoom")Ve+=Math.abs(ne.deltaY),Ve>150&&ht("zoom");else if(Be.requiredAction)return}N.isOrbit&&(N.tOrbit.radius=Math.max(5,Math.min(30,N.tOrbit.radius+ne.deltaY*.015)))},vt=ne=>{var ge;if(be||N.tutorialStep>=0&&En[N.tutorialStep].requiredAction)return;const Be=me(ne.clientX,ne.clientY);if(!Be)return;if(N.inspectorMode&&((ge=Be.mesh.userData)!=null&&ge.material)){const Ue=Be.mesh.userData.material;K(ut=>(ut==null?void 0:ut.name)===Ue.name?null:Ue);return}const Me=Jt.find(Ue=>Ue.id===Be.zoneId);Me&&dt.current(Me)};let xt=null,B=0;const Ne=ne=>{if(ne.touches.length===1)xt=ne.touches[0],l(!1);else if(ne.touches.length===2){const Be=ne.touches[0].clientX-ne.touches[1].clientX,Me=ne.touches[0].clientY-ne.touches[1].clientY;B=Math.sqrt(Be*Be+Me*Me)}},ve=ne=>{if(ne.touches.length===1&&xt){const Be=ne.touches[0],Me=Be.clientX-xt.clientX,ge=Be.clientY-xt.clientY;N.tutorialStep>=0&&En[N.tutorialStep].requiredAction==="orbit"&&(xe+=Math.abs(Me)+Math.abs(ge),xe>80&&ht("orbit")),N.tOrbit.theta-=Me*.005,N.tOrbit.phi=Math.max(.01,Math.min(Math.PI/2-.05,N.tOrbit.phi+ge*.005)),xt=Be,ne.preventDefault()}else if(ne.touches.length===2&&B>0){const Be=ne.touches[0].clientX-ne.touches[1].clientX,Me=ne.touches[0].clientY-ne.touches[1].clientY,ge=Math.sqrt(Be*Be+Me*Me),Ue=B-ge;N.tutorialStep>=0&&En[N.tutorialStep].requiredAction==="zoom"&&(Ve+=Math.abs(Ue),Ve>60&&ht("zoom")),N.tOrbit.radius=Math.max(5,Math.min(30,N.tOrbit.radius+Ue*.02)),B=ge,ne.preventDefault()}},qe=()=>{xt=null,B=0},ke=ne=>{},we=ne=>{ne.key==="Escape"&&(x?S(!1):pe?(W(!1),K(null)):N.guidedTour?I(!1):n&&Xt.current()),ne.key==="1"&&Jt[0]&&dt.current(Jt[0]),ne.key==="2"&&Jt[1]&&dt.current(Jt[1]),ne.key==="3"&&Jt[2]&&dt.current(Jt[2]),ne.key==="4"&&Jt[3]&&dt.current(Jt[3]),(ne.key==="r"||ne.key==="R")&&Xt.current(),(ne.key==="h"||ne.key==="H"||ne.key==="?")&&S(Be=>!Be),N.isOrbit&&(ne.key==="ArrowLeft"&&(N.tOrbit.theta-=.15),ne.key==="ArrowRight"&&(N.tOrbit.theta+=.15),ne.key==="ArrowUp"&&(N.tOrbit.phi=Math.max(.01,N.tOrbit.phi-.15)),ne.key==="ArrowDown"&&(N.tOrbit.phi=Math.min(Math.PI/2-.05,N.tOrbit.phi+.15)))};let Xe=0;const pt=ne=>{N.frame=requestAnimationFrame(pt);const Be=Math.min(.1,ne*.001-Xe);if(Xe=ne*.001,N.guidedTour&&N.tour){const Me=N.tour;Me.started||(Me.started=!0,Me.startTime=ne,Me.segmentStart=ne,Me.fromPos.copy(N.camera.position),Me.fromLookAt.copy(N.cLookAt));const ge=Me.waypoints[Me.waypointIdx],Ue=(ne-Me.segmentStart)/1e3,ut=Math.min(1,Ue/ge.dur),At=ut<.5?4*ut*ut*ut:1-Math.pow(-2*ut+2,3)/2,bt=new J(ge.pos[0],ge.pos[1],ge.pos[2]),_n=new J(ge.lookAt[0],ge.lookAt[1],ge.lookAt[2]);if(N.camera.position.lerpVectors(Me.fromPos,bt,At),N.cLookAt.lerpVectors(Me.fromLookAt,_n,At),N.camera.lookAt(N.cLookAt),ge.zoneIdx!==N._lastTourZone&&(N._lastTourZone=ge.zoneIdx,O(ge.zoneIdx),ge.zoneIdx>=0?s(Jt[ge.zoneIdx]):s(null)),ut>=1){if(Me.waypointIdx++,Me.waypointIdx>=Me.waypoints.length){I(!1);return}Me.segmentStart=ne,Me.fromPos.copy(N.camera.position),Me.fromLookAt.copy(N.cLookAt)}}else{if(N.isOrbit){const ge=1-Math.exp(-12*Be);N.orbit.theta+=(N.tOrbit.theta-N.orbit.theta)*ge,N.orbit.phi+=(N.tOrbit.phi-N.orbit.phi)*ge,N.orbit.radius+=(N.tOrbit.radius-N.orbit.radius)*ge;const{theta:Ue,phi:ut,radius:At}=N.orbit;N.tPos.set(N.tLookAt.x+At*Math.sin(ut)*Math.sin(Ue),N.tLookAt.y+At*Math.cos(ut),N.tLookAt.z+At*Math.sin(ut)*Math.cos(Ue))}const Me=N.isOrbit?.12:.06;N.camera.position.lerp(N.tPos,Me),N.cLookAt.lerp(N.tLookAt,Me),N.camera.lookAt(N.cLookAt)}if(N.animRefs.pendants&&N.animRefs.pendants.forEach(Me=>{Me.pl.intensity=N.comparisonMode?0:1.1+Math.sin(Xe*1.1+Me.phase)*.12}),N.animRefs.plants&&N.animRefs.plants.forEach(Me=>{Me.mesh.position.y=Me.baseY+Math.sin(Xe*.55+Me.phase)*.018,Me.mesh.rotation.z=Math.sin(Xe*.4+Me.phase)*.025}),N.animRefs.water&&(N.animRefs.water.material.opacity=.75+Math.sin(Xe*1.8)*.06,N.animRefs.water.material.color.setHSL(.52,.5,.55+Math.sin(Xe*.9)*.04)),N.animRefs.screens&&N.animRefs.screens.forEach(Me=>{Me.isPl?Me.pl.intensity=.7+Math.sin(Xe*2.2+Me.phase)*.25:Me.isBar?Me.mat.emissiveIntensity=1.5+Math.sin(Xe*1.6+Me.phase)*.5:Me.mat&&(Me.mat.emissiveIntensity=.6+Math.sin(Xe*.8+Me.phase)*.15)}),N.animRefs.lampLight&&(N.animRefs.lampLight.intensity=N.comparisonMode?0:1.5+Math.sin(Xe*1.3)*.15),N.animRefs.heatmapDiscs&&N.animRefs.heatmapDiscs.forEach((Me,ge)=>{const Ue=N.heatmapMode?.22:0;Me.material.opacity=Ue*(1+Math.sin(Xe*.9+ge)*.35),Me.scale.setScalar(1+Math.sin(Xe*.7+ge*.8)*.08)}),N.animRefs.patients&&N.patientSimActive){const Me={seating:0,biophilic:0,digital:0,calm:0,reception:0};N.animRefs.patients.forEach(ge=>{if(ge.spawnTime||(ge.spawnTime=ne),ne-ge.spawnTime<ge.spawnDelay)return;const Ue=ge.group,ut=(Ot,rn)=>{if(Math.sign(Ot.x)===Math.sign(rn.x)||Ot.x===0||rn.x===0)return null;const Rn=Ot.x/(Ot.x-rn.x),Pn=Ot.z+(rn.z-Ot.z)*Rn;return Pn>-4.25&&Pn<5.25?new J(Ot.x>0?.5:-.5,0,5.8):null};!ge.waypoint&&ge.state!=="dwelling"&&(ge.waypoint=ut(Ue.position,ge.target));const At=ge.waypoint||ge.target,bt=new J().subVectors(At,Ue.position);bt.y=0;const _n=bt.length();if(ge.waypoint&&_n<.35&&(ge.waypoint=null),ge.state==="dwelling"){if(Ue.position.y=Math.abs(Math.sin(Xe*2+ge.bobPhase))*.02,ne>ge.dwellEnd)if(Math.random()<.2)ge.state="leaving",ge.target.set(-6+Math.random()*12,0,7),ge.zoneId=null;else{const Ot=Jt[Math.floor(Math.random()*Jt.length)];ge.state="walking";const rn=(Math.random()-.5)*1.5,Rn=(Math.random()-.5)*1.5;ge.target.set(Ot.pos[0]+rn,0,Ot.pos[2]+Rn),ge.waypoint=null,ge.zoneId=Ot.id,Ot.id==="calm"||Ot.id==="biophilic"?ge.stressLevel=Math.max(.1,ge.stressLevel-.25):Ot.id==="digital"&&(ge.stressLevel=Math.max(.2,ge.stressLevel-.1))}ge.zoneId&&(Me[ge.zoneId]=(Me[ge.zoneId]||0)+1)}else _n<.25?ge.state==="leaving"?(ge.group.position.set(-6+Math.random()*12,0,6.2),ge.state="entering",ge.target.set(0,0,-5),ge.stressLevel=.7+Math.random()*.3):(ge.state="dwelling",ge.dwellEnd=ne+3e3+Math.random()*6e3):(bt.normalize(),Ue.position.addScaledVector(bt,ge.speed*(1+(1-ge.stressLevel)*.3)),Ue.rotation.y=Math.atan2(bt.x,bt.z),Ue.position.y=Math.abs(Math.sin(Xe*8+ge.bobPhase))*.04);Ue.children[1].material.color.setHSL(.08+(1-ge.stressLevel)*.2,.4,.65)}),(!N.lastOccUpdate||ne-N.lastOccUpdate>500)&&(N.lastOccUpdate=ne,je({...Me}))}if(N.splitScreen){const Me=he.clientWidth,ge=he.clientHeight,Ue=Me/2;N.renderer.setScissorTest(!0);const ut=N.comparisonMode;pd(N.animRefs,!0),N.renderer.setScissor(0,0,Ue,ge),N.renderer.setViewport(0,0,Ue,ge),N.camera.aspect=Ue/ge,N.camera.updateProjectionMatrix(),N.scene.background&&N.scene.background.setHex(14212836),N.renderer.render(N.scene,N.camera),pd(N.animRefs,!1),N.renderer.setScissor(Ue,0,Ue,ge),N.renderer.setViewport(Ue,0,Ue,ge),N.scene.background&&N.scene.background.setHex(15589576),N.renderer.render(N.scene,N.camera),N.renderer.setScissorTest(!1),N.renderer.setViewport(0,0,Me,ge),N.camera.aspect=Me/ge,N.camera.updateProjectionMatrix(),pd(N.animRefs,ut),N.scene.background&&N.scene.background.setHex(ut?14212836:15589576)}else N.renderer.render(N.scene,N.camera)};pt(0),R(90),setTimeout(()=>{f(!0),R(100)},400),he.addEventListener("mousedown",$e),window.addEventListener("mousemove",Oe),window.addEventListener("mouseup",Ie),he.addEventListener("click",vt),he.addEventListener("wheel",ft,{passive:!0}),he.addEventListener("touchstart",Ne,{passive:!0}),he.addEventListener("touchmove",ve,{passive:!1}),he.addEventListener("touchend",qe,{passive:!0}),window.addEventListener("keydown",we),window.addEventListener("keyup",ke);const Se=ne=>ne.preventDefault();he.addEventListener("contextmenu",Se);const _e=()=>{N.camera.aspect=he.clientWidth/he.clientHeight,N.camera.updateProjectionMatrix(),N.renderer.setSize(he.clientWidth,he.clientHeight)};return window.addEventListener("resize",_e),()=>{cancelAnimationFrame(N.frame),he.removeEventListener("mousedown",$e),he.removeEventListener("contextmenu",Se),window.removeEventListener("mousemove",Oe),window.removeEventListener("mouseup",Ie),he.removeEventListener("click",vt),he.removeEventListener("wheel",ft),he.removeEventListener("touchstart",Ne),he.removeEventListener("touchmove",ve),he.removeEventListener("touchend",qe),window.removeEventListener("keydown",we),window.removeEventListener("keyup",ke),window.removeEventListener("resize",_e),he.contains(N.renderer.domElement)&&he.removeChild(N.renderer.domElement),N.scene&&(N.scene.traverse(ne=>{ne.isMesh&&(ne.geometry&&ne.geometry.dispose(),ne.material&&(Array.isArray(ne.material)?ne.material.forEach(Be=>Be.dispose()):ne.material.dispose()))}),N.scene.clear()),N.renderer.dispose(),N.renderer.forceContextLoss()}},[]),g)return V.jsx("div",{style:{display:"flex",alignItems:"center",justifyContent:"center",width:"100vw",height:"100vh",background:"#16100A",color:"#F8EED8",fontFamily:"'DM Sans', sans-serif",textAlign:"center",padding:40},children:V.jsxs("div",{children:[V.jsx("div",{style:{fontSize:48,marginBottom:20},children:"⚠️"}),V.jsx("h1",{style:{fontSize:24,marginBottom:12},children:"WebGL Not Supported"}),V.jsx("p",{style:{color:"rgba(248,238,216,0.7)",maxWidth:400},children:"Your browser doesn't support WebGL, which is required for this 3D experience. Please try using a modern browser like Chrome, Firefox, or Safari."})]})});const Qt=ye>=0&&((G=En[ye])==null?void 0:G.highlight)||null;return V.jsxs("div",{style:{position:"relative",width:"100vw",height:"100vh",overflow:"hidden",background:"#16100A"},children:[V.jsx("style",{children:`
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
      `}),V.jsx("div",{ref:r,style:{width:"100%",height:"100%",touchAction:"none"}}),V.jsx(tE,{isMobile:_,loaded:u,loadingProgress:T,activeZone:n,hovered:p,showHint:a,splitScreen:q,guidedTour:w,tourZoneIndex:j,setGuidedTour:I,comparisonMode:b,idlePrompt:st,showWelcome:De,showHelp:x,tutorialStep:ye,inspectorMode:pe,patientSimActive:Z,occupancy:te,tourRef:e.current.tour}),V.jsx(nE,{isMobile:_,comparisonMode:b,setComparisonMode:L,showHelp:x,setShowHelp:S,onTutorialAction:ht,tutorialHighlight:Qt}),u&&!De&&V.jsx($M,{activeZone:n,isMobile:_,handleZoom:he=>{ht("click_zone"),dt.current(he)},handleReset:Xt.current,tutorialHighlight:Qt}),u&&!De&&ye<0&&n&&!_&&V.jsx(KM,{displayZone:n,activeZone:n,isMobile:_,goToAdjacentZone:Yt}),V.jsx(ZM,{loaded:u,welcomePhase:ae,setWelcomePhase:Te,setShowWelcome:Ye,setTutorialStep:Ge,isMobile:_}),V.jsx(JM,{tutorialStep:ye,setTutorialStep:Ge,handleReset:Xt.current,isMobile:_}),V.jsx(iE,{showHelp:x,setShowHelp:S,isMobile:_,setTutorialStep:Ge,setWelcomePhase:Te}),V.jsx(QM,{isMobile:_,showTools:de,setShowTools:F,heatmapMode:P,setHeatmapMode:z,patientSimActive:Z,setPatientSimActive:ue,guidedTour:w,setGuidedTour:I,splitScreen:q,setSplitScreen:oe,inspectorMode:pe,setInspectorMode:W,setInspectedItem:K,circadianTime:D,setCircadianTime:k,comparisonMode:b,onTutorialAction:ht,tutorialHighlight:Qt}),V.jsx(eE,{inspectedItem:ee,setInspectedItem:K,isMobile:_})]})}C_.createRoot(document.getElementById("root")).render(V.jsx(rE,{}));
