(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))s(a);new MutationObserver(a=>{for(const l of a)if(l.type==="childList")for(const u of l.addedNodes)u.tagName==="LINK"&&u.rel==="modulepreload"&&s(u)}).observe(document,{childList:!0,subtree:!0});function n(a){const l={};return a.integrity&&(l.integrity=a.integrity),a.referrerPolicy&&(l.referrerPolicy=a.referrerPolicy),a.crossOrigin==="use-credentials"?l.credentials="include":a.crossOrigin==="anonymous"?l.credentials="omit":l.credentials="same-origin",l}function s(a){if(a.ep)return;a.ep=!0;const l=n(a);fetch(a.href,l)}})();var Ru={exports:{}},Xo={},Pu={exports:{}},It={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Zp;function y_(){if(Zp)return It;Zp=1;var r=Symbol.for("react.element"),e=Symbol.for("react.portal"),n=Symbol.for("react.fragment"),s=Symbol.for("react.strict_mode"),a=Symbol.for("react.profiler"),l=Symbol.for("react.provider"),u=Symbol.for("react.context"),f=Symbol.for("react.forward_ref"),p=Symbol.for("react.suspense"),m=Symbol.for("react.memo"),x=Symbol.for("react.lazy"),y=Symbol.iterator;function g(F){return F===null||typeof F!="object"?null:(F=y&&F[y]||F["@@iterator"],typeof F=="function"?F:null)}var S={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},T=Object.assign,C={};function _(F,ie,We){this.props=F,this.context=ie,this.refs=C,this.updater=We||S}_.prototype.isReactComponent={},_.prototype.setState=function(F,ie){if(typeof F!="object"&&typeof F!="function"&&F!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,F,ie,"setState")},_.prototype.forceUpdate=function(F){this.updater.enqueueForceUpdate(this,F,"forceUpdate")};function v(){}v.prototype=_.prototype;function b(F,ie,We){this.props=F,this.context=ie,this.refs=C,this.updater=We||S}var L=b.prototype=new v;L.constructor=b,T(L,_.prototype),L.isPureReactComponent=!0;var P=Array.isArray,z=Object.prototype.hasOwnProperty,D={current:null},k={key:!0,ref:!0,__self:!0,__source:!0};function w(F,ie,We){var Fe,Xe={},ce=null,Ae=null;if(ie!=null)for(Fe in ie.ref!==void 0&&(Ae=ie.ref),ie.key!==void 0&&(ce=""+ie.key),ie)z.call(ie,Fe)&&!k.hasOwnProperty(Fe)&&(Xe[Fe]=ie[Fe]);var ye=arguments.length-2;if(ye===1)Xe.children=We;else if(1<ye){for(var Ge=Array(ye),nt=0;nt<ye;nt++)Ge[nt]=arguments[nt+2];Xe.children=Ge}if(F&&F.defaultProps)for(Fe in ye=F.defaultProps,ye)Xe[Fe]===void 0&&(Xe[Fe]=ye[Fe]);return{$$typeof:r,type:F,key:ce,ref:Ae,props:Xe,_owner:D.current}}function I(F,ie){return{$$typeof:r,type:F.type,key:ie,ref:F.ref,props:F.props,_owner:F._owner}}function j(F){return typeof F=="object"&&F!==null&&F.$$typeof===r}function O(F){var ie={"=":"=0",":":"=2"};return"$"+F.replace(/[=:]/g,function(We){return ie[We]})}var Y=/\/+/g;function le(F,ie){return typeof F=="object"&&F!==null&&F.key!=null?O(""+F.key):ie.toString(36)}function ge(F,ie,We,Fe,Xe){var ce=typeof F;(ce==="undefined"||ce==="boolean")&&(F=null);var Ae=!1;if(F===null)Ae=!0;else switch(ce){case"string":case"number":Ae=!0;break;case"object":switch(F.$$typeof){case r:case e:Ae=!0}}if(Ae)return Ae=F,Xe=Xe(Ae),F=Fe===""?"."+le(Ae,0):Fe,P(Xe)?(We="",F!=null&&(We=F.replace(Y,"$&/")+"/"),ge(Xe,ie,We,"",function(nt){return nt})):Xe!=null&&(j(Xe)&&(Xe=I(Xe,We+(!Xe.key||Ae&&Ae.key===Xe.key?"":(""+Xe.key).replace(Y,"$&/")+"/")+F)),ie.push(Xe)),1;if(Ae=0,Fe=Fe===""?".":Fe+":",P(F))for(var ye=0;ye<F.length;ye++){ce=F[ye];var Ge=Fe+le(ce,ye);Ae+=ge(ce,ie,We,Ge,Xe)}else if(Ge=g(F),typeof Ge=="function")for(F=Ge.call(F),ye=0;!(ce=F.next()).done;)ce=ce.value,Ge=Fe+le(ce,ye++),Ae+=ge(ce,ie,We,Ge,Xe);else if(ce==="object")throw ie=String(F),Error("Objects are not valid as a React child (found: "+(ie==="[object Object]"?"object with keys {"+Object.keys(F).join(", ")+"}":ie)+"). If you meant to render a collection of children, use an array instead.");return Ae}function W(F,ie,We){if(F==null)return F;var Fe=[],Xe=0;return ge(F,Fe,"","",function(ce){return ie.call(We,ce,Xe++)}),Fe}function ne(F){if(F._status===-1){var ie=F._result;ie=ie(),ie.then(function(We){(F._status===0||F._status===-1)&&(F._status=1,F._result=We)},function(We){(F._status===0||F._status===-1)&&(F._status=2,F._result=We)}),F._status===-1&&(F._status=0,F._result=ie)}if(F._status===1)return F._result.default;throw F._result}var $={current:null},J={transition:null},fe={ReactCurrentDispatcher:$,ReactCurrentBatchConfig:J,ReactCurrentOwner:D};function he(){throw Error("act(...) is not supported in production builds of React.")}return It.Children={map:W,forEach:function(F,ie,We){W(F,function(){ie.apply(this,arguments)},We)},count:function(F){var ie=0;return W(F,function(){ie++}),ie},toArray:function(F){return W(F,function(ie){return ie})||[]},only:function(F){if(!j(F))throw Error("React.Children.only expected to receive a single React element child.");return F}},It.Component=_,It.Fragment=n,It.Profiler=a,It.PureComponent=b,It.StrictMode=s,It.Suspense=p,It.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=fe,It.act=he,It.cloneElement=function(F,ie,We){if(F==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+F+".");var Fe=T({},F.props),Xe=F.key,ce=F.ref,Ae=F._owner;if(ie!=null){if(ie.ref!==void 0&&(ce=ie.ref,Ae=D.current),ie.key!==void 0&&(Xe=""+ie.key),F.type&&F.type.defaultProps)var ye=F.type.defaultProps;for(Ge in ie)z.call(ie,Ge)&&!k.hasOwnProperty(Ge)&&(Fe[Ge]=ie[Ge]===void 0&&ye!==void 0?ye[Ge]:ie[Ge])}var Ge=arguments.length-2;if(Ge===1)Fe.children=We;else if(1<Ge){ye=Array(Ge);for(var nt=0;nt<Ge;nt++)ye[nt]=arguments[nt+2];Fe.children=ye}return{$$typeof:r,type:F.type,key:Xe,ref:ce,props:Fe,_owner:Ae}},It.createContext=function(F){return F={$$typeof:u,_currentValue:F,_currentValue2:F,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},F.Provider={$$typeof:l,_context:F},F.Consumer=F},It.createElement=w,It.createFactory=function(F){var ie=w.bind(null,F);return ie.type=F,ie},It.createRef=function(){return{current:null}},It.forwardRef=function(F){return{$$typeof:f,render:F}},It.isValidElement=j,It.lazy=function(F){return{$$typeof:x,_payload:{_status:-1,_result:F},_init:ne}},It.memo=function(F,ie){return{$$typeof:m,type:F,compare:ie===void 0?null:ie}},It.startTransition=function(F){var ie=J.transition;J.transition={};try{F()}finally{J.transition=ie}},It.unstable_act=he,It.useCallback=function(F,ie){return $.current.useCallback(F,ie)},It.useContext=function(F){return $.current.useContext(F)},It.useDebugValue=function(){},It.useDeferredValue=function(F){return $.current.useDeferredValue(F)},It.useEffect=function(F,ie){return $.current.useEffect(F,ie)},It.useId=function(){return $.current.useId()},It.useImperativeHandle=function(F,ie,We){return $.current.useImperativeHandle(F,ie,We)},It.useInsertionEffect=function(F,ie){return $.current.useInsertionEffect(F,ie)},It.useLayoutEffect=function(F,ie){return $.current.useLayoutEffect(F,ie)},It.useMemo=function(F,ie){return $.current.useMemo(F,ie)},It.useReducer=function(F,ie,We){return $.current.useReducer(F,ie,We)},It.useRef=function(F){return $.current.useRef(F)},It.useState=function(F){return $.current.useState(F)},It.useSyncExternalStore=function(F,ie,We){return $.current.useSyncExternalStore(F,ie,We)},It.useTransition=function(){return $.current.useTransition()},It.version="18.3.1",It}var Jp;function cf(){return Jp||(Jp=1,Pu.exports=y_()),Pu.exports}/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Qp;function S_(){if(Qp)return Xo;Qp=1;var r=cf(),e=Symbol.for("react.element"),n=Symbol.for("react.fragment"),s=Object.prototype.hasOwnProperty,a=r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,l={key:!0,ref:!0,__self:!0,__source:!0};function u(f,p,m){var x,y={},g=null,S=null;m!==void 0&&(g=""+m),p.key!==void 0&&(g=""+p.key),p.ref!==void 0&&(S=p.ref);for(x in p)s.call(p,x)&&!l.hasOwnProperty(x)&&(y[x]=p[x]);if(f&&f.defaultProps)for(x in p=f.defaultProps,p)y[x]===void 0&&(y[x]=p[x]);return{$$typeof:e,type:f,key:g,ref:S,props:y,_owner:a.current}}return Xo.Fragment=n,Xo.jsx=u,Xo.jsxs=u,Xo}var em;function M_(){return em||(em=1,Ru.exports=S_()),Ru.exports}var V=M_(),dl={},Lu={exports:{}},ni={},Du={exports:{}},Iu={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var tm;function E_(){return tm||(tm=1,(function(r){function e(J,fe){var he=J.length;J.push(fe);e:for(;0<he;){var F=he-1>>>1,ie=J[F];if(0<a(ie,fe))J[F]=fe,J[he]=ie,he=F;else break e}}function n(J){return J.length===0?null:J[0]}function s(J){if(J.length===0)return null;var fe=J[0],he=J.pop();if(he!==fe){J[0]=he;e:for(var F=0,ie=J.length,We=ie>>>1;F<We;){var Fe=2*(F+1)-1,Xe=J[Fe],ce=Fe+1,Ae=J[ce];if(0>a(Xe,he))ce<ie&&0>a(Ae,Xe)?(J[F]=Ae,J[ce]=he,F=ce):(J[F]=Xe,J[Fe]=he,F=Fe);else if(ce<ie&&0>a(Ae,he))J[F]=Ae,J[ce]=he,F=ce;else break e}}return fe}function a(J,fe){var he=J.sortIndex-fe.sortIndex;return he!==0?he:J.id-fe.id}if(typeof performance=="object"&&typeof performance.now=="function"){var l=performance;r.unstable_now=function(){return l.now()}}else{var u=Date,f=u.now();r.unstable_now=function(){return u.now()-f}}var p=[],m=[],x=1,y=null,g=3,S=!1,T=!1,C=!1,_=typeof setTimeout=="function"?setTimeout:null,v=typeof clearTimeout=="function"?clearTimeout:null,b=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function L(J){for(var fe=n(m);fe!==null;){if(fe.callback===null)s(m);else if(fe.startTime<=J)s(m),fe.sortIndex=fe.expirationTime,e(p,fe);else break;fe=n(m)}}function P(J){if(C=!1,L(J),!T)if(n(p)!==null)T=!0,ne(z);else{var fe=n(m);fe!==null&&$(P,fe.startTime-J)}}function z(J,fe){T=!1,C&&(C=!1,v(w),w=-1),S=!0;var he=g;try{for(L(fe),y=n(p);y!==null&&(!(y.expirationTime>fe)||J&&!O());){var F=y.callback;if(typeof F=="function"){y.callback=null,g=y.priorityLevel;var ie=F(y.expirationTime<=fe);fe=r.unstable_now(),typeof ie=="function"?y.callback=ie:y===n(p)&&s(p),L(fe)}else s(p);y=n(p)}if(y!==null)var We=!0;else{var Fe=n(m);Fe!==null&&$(P,Fe.startTime-fe),We=!1}return We}finally{y=null,g=he,S=!1}}var D=!1,k=null,w=-1,I=5,j=-1;function O(){return!(r.unstable_now()-j<I)}function Y(){if(k!==null){var J=r.unstable_now();j=J;var fe=!0;try{fe=k(!0,J)}finally{fe?le():(D=!1,k=null)}}else D=!1}var le;if(typeof b=="function")le=function(){b(Y)};else if(typeof MessageChannel<"u"){var ge=new MessageChannel,W=ge.port2;ge.port1.onmessage=Y,le=function(){W.postMessage(null)}}else le=function(){_(Y,0)};function ne(J){k=J,D||(D=!0,le())}function $(J,fe){w=_(function(){J(r.unstable_now())},fe)}r.unstable_IdlePriority=5,r.unstable_ImmediatePriority=1,r.unstable_LowPriority=4,r.unstable_NormalPriority=3,r.unstable_Profiling=null,r.unstable_UserBlockingPriority=2,r.unstable_cancelCallback=function(J){J.callback=null},r.unstable_continueExecution=function(){T||S||(T=!0,ne(z))},r.unstable_forceFrameRate=function(J){0>J||125<J?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):I=0<J?Math.floor(1e3/J):5},r.unstable_getCurrentPriorityLevel=function(){return g},r.unstable_getFirstCallbackNode=function(){return n(p)},r.unstable_next=function(J){switch(g){case 1:case 2:case 3:var fe=3;break;default:fe=g}var he=g;g=fe;try{return J()}finally{g=he}},r.unstable_pauseExecution=function(){},r.unstable_requestPaint=function(){},r.unstable_runWithPriority=function(J,fe){switch(J){case 1:case 2:case 3:case 4:case 5:break;default:J=3}var he=g;g=J;try{return fe()}finally{g=he}},r.unstable_scheduleCallback=function(J,fe,he){var F=r.unstable_now();switch(typeof he=="object"&&he!==null?(he=he.delay,he=typeof he=="number"&&0<he?F+he:F):he=F,J){case 1:var ie=-1;break;case 2:ie=250;break;case 5:ie=1073741823;break;case 4:ie=1e4;break;default:ie=5e3}return ie=he+ie,J={id:x++,callback:fe,priorityLevel:J,startTime:he,expirationTime:ie,sortIndex:-1},he>F?(J.sortIndex=he,e(m,J),n(p)===null&&J===n(m)&&(C?(v(w),w=-1):C=!0,$(P,he-F))):(J.sortIndex=ie,e(p,J),T||S||(T=!0,ne(z))),J},r.unstable_shouldYield=O,r.unstable_wrapCallback=function(J){var fe=g;return function(){var he=g;g=fe;try{return J.apply(this,arguments)}finally{g=he}}}})(Iu)),Iu}var nm;function w_(){return nm||(nm=1,Du.exports=E_()),Du.exports}/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var im;function T_(){if(im)return ni;im=1;var r=cf(),e=w_();function n(t){for(var i="https://reactjs.org/docs/error-decoder.html?invariant="+t,o=1;o<arguments.length;o++)i+="&args[]="+encodeURIComponent(arguments[o]);return"Minified React error #"+t+"; visit "+i+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var s=new Set,a={};function l(t,i){u(t,i),u(t+"Capture",i)}function u(t,i){for(a[t]=i,t=0;t<i.length;t++)s.add(i[t])}var f=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),p=Object.prototype.hasOwnProperty,m=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,x={},y={};function g(t){return p.call(y,t)?!0:p.call(x,t)?!1:m.test(t)?y[t]=!0:(x[t]=!0,!1)}function S(t,i,o,c){if(o!==null&&o.type===0)return!1;switch(typeof i){case"function":case"symbol":return!0;case"boolean":return c?!1:o!==null?!o.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function T(t,i,o,c){if(i===null||typeof i>"u"||S(t,i,o,c))return!0;if(c)return!1;if(o!==null)switch(o.type){case 3:return!i;case 4:return i===!1;case 5:return isNaN(i);case 6:return isNaN(i)||1>i}return!1}function C(t,i,o,c,d,h,E){this.acceptsBooleans=i===2||i===3||i===4,this.attributeName=c,this.attributeNamespace=d,this.mustUseProperty=o,this.propertyName=t,this.type=i,this.sanitizeURL=h,this.removeEmptyString=E}var _={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){_[t]=new C(t,0,!1,t,null,!1,!1)}),[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var i=t[0];_[i]=new C(i,1,!1,t[1],null,!1,!1)}),["contentEditable","draggable","spellCheck","value"].forEach(function(t){_[t]=new C(t,2,!1,t.toLowerCase(),null,!1,!1)}),["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){_[t]=new C(t,2,!1,t,null,!1,!1)}),"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){_[t]=new C(t,3,!1,t.toLowerCase(),null,!1,!1)}),["checked","multiple","muted","selected"].forEach(function(t){_[t]=new C(t,3,!0,t,null,!1,!1)}),["capture","download"].forEach(function(t){_[t]=new C(t,4,!1,t,null,!1,!1)}),["cols","rows","size","span"].forEach(function(t){_[t]=new C(t,6,!1,t,null,!1,!1)}),["rowSpan","start"].forEach(function(t){_[t]=new C(t,5,!1,t.toLowerCase(),null,!1,!1)});var v=/[\-:]([a-z])/g;function b(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var i=t.replace(v,b);_[i]=new C(i,1,!1,t,null,!1,!1)}),"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var i=t.replace(v,b);_[i]=new C(i,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)}),["xml:base","xml:lang","xml:space"].forEach(function(t){var i=t.replace(v,b);_[i]=new C(i,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)}),["tabIndex","crossOrigin"].forEach(function(t){_[t]=new C(t,1,!1,t.toLowerCase(),null,!1,!1)}),_.xlinkHref=new C("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1),["src","href","action","formAction"].forEach(function(t){_[t]=new C(t,1,!1,t.toLowerCase(),null,!0,!0)});function L(t,i,o,c){var d=_.hasOwnProperty(i)?_[i]:null;(d!==null?d.type!==0:c||!(2<i.length)||i[0]!=="o"&&i[0]!=="O"||i[1]!=="n"&&i[1]!=="N")&&(T(i,o,d,c)&&(o=null),c||d===null?g(i)&&(o===null?t.removeAttribute(i):t.setAttribute(i,""+o)):d.mustUseProperty?t[d.propertyName]=o===null?d.type===3?!1:"":o:(i=d.attributeName,c=d.attributeNamespace,o===null?t.removeAttribute(i):(d=d.type,o=d===3||d===4&&o===!0?"":""+o,c?t.setAttributeNS(c,i,o):t.setAttribute(i,o))))}var P=r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,z=Symbol.for("react.element"),D=Symbol.for("react.portal"),k=Symbol.for("react.fragment"),w=Symbol.for("react.strict_mode"),I=Symbol.for("react.profiler"),j=Symbol.for("react.provider"),O=Symbol.for("react.context"),Y=Symbol.for("react.forward_ref"),le=Symbol.for("react.suspense"),ge=Symbol.for("react.suspense_list"),W=Symbol.for("react.memo"),ne=Symbol.for("react.lazy"),$=Symbol.for("react.offscreen"),J=Symbol.iterator;function fe(t){return t===null||typeof t!="object"?null:(t=J&&t[J]||t["@@iterator"],typeof t=="function"?t:null)}var he=Object.assign,F;function ie(t){if(F===void 0)try{throw Error()}catch(o){var i=o.stack.trim().match(/\n( *(at )?)/);F=i&&i[1]||""}return`
`+F+t}var We=!1;function Fe(t,i){if(!t||We)return"";We=!0;var o=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(i)if(i=function(){throw Error()},Object.defineProperty(i.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(i,[])}catch(de){var c=de}Reflect.construct(t,[],i)}else{try{i.call()}catch(de){c=de}t.call(i.prototype)}else{try{throw Error()}catch(de){c=de}t()}}catch(de){if(de&&c&&typeof de.stack=="string"){for(var d=de.stack.split(`
`),h=c.stack.split(`
`),E=d.length-1,U=h.length-1;1<=E&&0<=U&&d[E]!==h[U];)U--;for(;1<=E&&0<=U;E--,U--)if(d[E]!==h[U]){if(E!==1||U!==1)do if(E--,U--,0>U||d[E]!==h[U]){var H=`
`+d[E].replace(" at new "," at ");return t.displayName&&H.includes("<anonymous>")&&(H=H.replace("<anonymous>",t.displayName)),H}while(1<=E&&0<=U);break}}}finally{We=!1,Error.prepareStackTrace=o}return(t=t?t.displayName||t.name:"")?ie(t):""}function Xe(t){switch(t.tag){case 5:return ie(t.type);case 16:return ie("Lazy");case 13:return ie("Suspense");case 19:return ie("SuspenseList");case 0:case 2:case 15:return t=Fe(t.type,!1),t;case 11:return t=Fe(t.type.render,!1),t;case 1:return t=Fe(t.type,!0),t;default:return""}}function ce(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case k:return"Fragment";case D:return"Portal";case I:return"Profiler";case w:return"StrictMode";case le:return"Suspense";case ge:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case O:return(t.displayName||"Context")+".Consumer";case j:return(t._context.displayName||"Context")+".Provider";case Y:var i=t.render;return t=t.displayName,t||(t=i.displayName||i.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case W:return i=t.displayName||null,i!==null?i:ce(t.type)||"Memo";case ne:i=t._payload,t=t._init;try{return ce(t(i))}catch{}}return null}function Ae(t){var i=t.type;switch(t.tag){case 24:return"Cache";case 9:return(i.displayName||"Context")+".Consumer";case 10:return(i._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=i.render,t=t.displayName||t.name||"",i.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return i;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return ce(i);case 8:return i===w?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof i=="function")return i.displayName||i.name||null;if(typeof i=="string")return i}return null}function ye(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function Ge(t){var i=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(i==="checkbox"||i==="radio")}function nt(t){var i=Ge(t)?"checked":"value",o=Object.getOwnPropertyDescriptor(t.constructor.prototype,i),c=""+t[i];if(!t.hasOwnProperty(i)&&typeof o<"u"&&typeof o.get=="function"&&typeof o.set=="function"){var d=o.get,h=o.set;return Object.defineProperty(t,i,{configurable:!0,get:function(){return d.call(this)},set:function(E){c=""+E,h.call(this,E)}}),Object.defineProperty(t,i,{enumerable:o.enumerable}),{getValue:function(){return c},setValue:function(E){c=""+E},stopTracking:function(){t._valueTracker=null,delete t[i]}}}}function lt(t){t._valueTracker||(t._valueTracker=nt(t))}function Nt(t){if(!t)return!1;var i=t._valueTracker;if(!i)return!0;var o=i.getValue(),c="";return t&&(c=Ge(t)?t.checked?"true":"false":t.value),t=c,t!==o?(i.setValue(t),!0):!1}function pt(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function bt(t,i){var o=i.checked;return he({},i,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:o??t._wrapperState.initialChecked})}function Ut(t,i){var o=i.defaultValue==null?"":i.defaultValue,c=i.checked!=null?i.checked:i.defaultChecked;o=ye(i.value!=null?i.value:o),t._wrapperState={initialChecked:c,initialValue:o,controlled:i.type==="checkbox"||i.type==="radio"?i.checked!=null:i.value!=null}}function _t(t,i){i=i.checked,i!=null&&L(t,"checked",i,!1)}function Bt(t,i){_t(t,i);var o=ye(i.value),c=i.type;if(o!=null)c==="number"?(o===0&&t.value===""||t.value!=o)&&(t.value=""+o):t.value!==""+o&&(t.value=""+o);else if(c==="submit"||c==="reset"){t.removeAttribute("value");return}i.hasOwnProperty("value")?Zt(t,i.type,o):i.hasOwnProperty("defaultValue")&&Zt(t,i.type,ye(i.defaultValue)),i.checked==null&&i.defaultChecked!=null&&(t.defaultChecked=!!i.defaultChecked)}function Gt(t,i,o){if(i.hasOwnProperty("value")||i.hasOwnProperty("defaultValue")){var c=i.type;if(!(c!=="submit"&&c!=="reset"||i.value!==void 0&&i.value!==null))return;i=""+t._wrapperState.initialValue,o||i===t.value||(t.value=i),t.defaultValue=i}o=t.name,o!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,o!==""&&(t.name=o)}function Zt(t,i,o){(i!=="number"||pt(t.ownerDocument)!==t)&&(o==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+o&&(t.defaultValue=""+o))}var G=Array.isArray;function pe(t,i,o,c){if(t=t.options,i){i={};for(var d=0;d<o.length;d++)i["$"+o[d]]=!0;for(o=0;o<t.length;o++)d=i.hasOwnProperty("$"+t[o].value),t[o].selected!==d&&(t[o].selected=d),d&&c&&(t[o].defaultSelected=!0)}else{for(o=""+ye(o),i=null,d=0;d<t.length;d++){if(t[d].value===o){t[d].selected=!0,c&&(t[d].defaultSelected=!0);return}i!==null||t[d].disabled||(i=t[d])}i!==null&&(i.selected=!0)}}function N(t,i){if(i.dangerouslySetInnerHTML!=null)throw Error(n(91));return he({},i,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function dt(t,i){var o=i.value;if(o==null){if(o=i.children,i=i.defaultValue,o!=null){if(i!=null)throw Error(n(92));if(G(o)){if(1<o.length)throw Error(n(93));o=o[0]}i=o}i==null&&(i=""),o=i}t._wrapperState={initialValue:ye(o)}}function Oe(t,i){var o=ye(i.value),c=ye(i.defaultValue);o!=null&&(o=""+o,o!==t.value&&(t.value=o),i.defaultValue==null&&t.defaultValue!==o&&(t.defaultValue=o)),c!=null&&(t.defaultValue=""+c)}function Ct(t){var i=t.textContent;i===t._wrapperState.initialValue&&i!==""&&i!==null&&(t.value=i)}function R(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function M(t,i){return t==null||t==="http://www.w3.org/1999/xhtml"?R(i):t==="http://www.w3.org/2000/svg"&&i==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var K,_e=(function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(i,o,c,d){MSApp.execUnsafeLocalFunction(function(){return t(i,o,c,d)})}:t})(function(t,i){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=i;else{for(K=K||document.createElement("div"),K.innerHTML="<svg>"+i.valueOf().toString()+"</svg>",i=K.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;i.firstChild;)t.appendChild(i.firstChild)}});function Me(t,i){if(i){var o=t.firstChild;if(o&&o===t.lastChild&&o.nodeType===3){o.nodeValue=i;return}}t.textContent=i}var be={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Le=["Webkit","ms","Moz","O"];Object.keys(be).forEach(function(t){Le.forEach(function(i){i=i+t.charAt(0).toUpperCase()+t.substring(1),be[i]=be[t]})});function me(t,i,o){return i==null||typeof i=="boolean"||i===""?"":o||typeof i!="number"||i===0||be.hasOwnProperty(t)&&be[t]?(""+i).trim():i+"px"}function Se(t,i){t=t.style;for(var o in i)if(i.hasOwnProperty(o)){var c=o.indexOf("--")===0,d=me(o,i[o],c);o==="float"&&(o="cssFloat"),c?t.setProperty(o,d):t[o]=d}}var Be=he({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function je(t,i){if(i){if(Be[t]&&(i.children!=null||i.dangerouslySetInnerHTML!=null))throw Error(n(137,t));if(i.dangerouslySetInnerHTML!=null){if(i.children!=null)throw Error(n(60));if(typeof i.dangerouslySetInnerHTML!="object"||!("__html"in i.dangerouslySetInnerHTML))throw Error(n(61))}if(i.style!=null&&typeof i.style!="object")throw Error(n(62))}}function Ue(t,i){if(t.indexOf("-")===-1)return typeof i.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Ie=null;function ft(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var ht=null,vt=null,B=null;function Ne(t){if(t=Po(t)){if(typeof ht!="function")throw Error(n(280));var i=t.stateNode;i&&(i=Aa(i),ht(t.stateNode,t.type,i))}}function ve(t){vt?B?B.push(t):B=[t]:vt=t}function ee(){if(vt){var t=vt,i=B;if(B=vt=null,Ne(t),i)for(t=0;t<i.length;t++)Ne(i[t])}}function Z(t,i){return t(i)}function re(){}var we=!1;function He(t,i,o){if(we)return t(i,o);we=!0;try{return Z(t,i,o)}finally{we=!1,(vt!==null||B!==null)&&(re(),ee())}}function $e(t,i){var o=t.stateNode;if(o===null)return null;var c=Aa(o);if(c===null)return null;o=c[i];e:switch(i){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(c=!c.disabled)||(t=t.type,c=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!c;break e;default:t=!1}if(t)return null;if(o&&typeof o!="function")throw Error(n(231,i,typeof o));return o}var Ke=!1;if(f)try{var xe={};Object.defineProperty(xe,"passive",{get:function(){Ke=!0}}),window.addEventListener("test",xe,xe),window.removeEventListener("test",xe,xe)}catch{Ke=!1}function qe(t,i,o,c,d,h,E,U,H){var de=Array.prototype.slice.call(arguments,3);try{i.apply(o,de)}catch(Re){this.onError(Re)}}var Te=!1,Ee=null,et=!1,xt=null,Wt={onError:function(t){Te=!0,Ee=t}};function Jt(t,i,o,c,d,h,E,U,H){Te=!1,Ee=null,qe.apply(Wt,arguments)}function An(t,i,o,c,d,h,E,U,H){if(Jt.apply(this,arguments),Te){if(Te){var de=Ee;Te=!1,Ee=null}else throw Error(n(198));et||(et=!0,xt=de)}}function Ln(t){var i=t,o=t;if(t.alternate)for(;i.return;)i=i.return;else{t=i;do i=t,(i.flags&4098)!==0&&(o=i.return),t=i.return;while(t)}return i.tag===3?o:null}function oi(t){if(t.tag===13){var i=t.memoizedState;if(i===null&&(t=t.alternate,t!==null&&(i=t.memoizedState)),i!==null)return i.dehydrated}return null}function an(t){if(Ln(t)!==t)throw Error(n(188))}function Fn(t){var i=t.alternate;if(!i){if(i=Ln(t),i===null)throw Error(n(188));return i!==t?null:t}for(var o=t,c=i;;){var d=o.return;if(d===null)break;var h=d.alternate;if(h===null){if(c=d.return,c!==null){o=c;continue}break}if(d.child===h.child){for(h=d.child;h;){if(h===o)return an(d),t;if(h===c)return an(d),i;h=h.sibling}throw Error(n(188))}if(o.return!==c.return)o=d,c=h;else{for(var E=!1,U=d.child;U;){if(U===o){E=!0,o=d,c=h;break}if(U===c){E=!0,c=d,o=h;break}U=U.sibling}if(!E){for(U=h.child;U;){if(U===o){E=!0,o=h,c=d;break}if(U===c){E=!0,c=h,o=d;break}U=U.sibling}if(!E)throw Error(n(189))}}if(o.alternate!==c)throw Error(n(190))}if(o.tag!==3)throw Error(n(188));return o.stateNode.current===o?t:i}function gi(t){return t=Fn(t),t!==null?xr(t):null}function xr(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var i=xr(t);if(i!==null)return i;t=t.sibling}return null}var ua=e.unstable_scheduleCallback,da=e.unstable_cancelCallback,Jl=e.unstable_shouldYield,Ql=e.unstable_requestPaint,ln=e.unstable_now,ec=e.unstable_getCurrentPriorityLevel,ho=e.unstable_ImmediatePriority,A=e.unstable_UserBlockingPriority,q=e.unstable_NormalPriority,ue=e.unstable_LowPriority,oe=e.unstable_IdlePriority,se=null,Ve=null;function Qe(t){if(Ve&&typeof Ve.onCommitFiberRoot=="function")try{Ve.onCommitFiberRoot(se,t,void 0,(t.current.flags&128)===128)}catch{}}var ze=Math.clz32?Math.clz32:Et,rt=Math.log,ct=Math.LN2;function Et(t){return t>>>=0,t===0?32:31-(rt(t)/ct|0)|0}var wt=64,ot=4194304;function zt(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function Qt(t,i){var o=t.pendingLanes;if(o===0)return 0;var c=0,d=t.suspendedLanes,h=t.pingedLanes,E=o&268435455;if(E!==0){var U=E&~d;U!==0?c=zt(U):(h&=E,h!==0&&(c=zt(h)))}else E=o&~d,E!==0?c=zt(E):h!==0&&(c=zt(h));if(c===0)return 0;if(i!==0&&i!==c&&(i&d)===0&&(d=c&-c,h=i&-i,d>=h||d===16&&(h&4194240)!==0))return i;if((c&4)!==0&&(c|=o&16),i=t.entangledLanes,i!==0)for(t=t.entanglements,i&=c;0<i;)o=31-ze(i),d=1<<o,c|=t[o],i&=~d;return c}function sn(t,i){switch(t){case 1:case 2:case 4:return i+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return i+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Yt(t,i){for(var o=t.suspendedLanes,c=t.pingedLanes,d=t.expirationTimes,h=t.pendingLanes;0<h;){var E=31-ze(h),U=1<<E,H=d[E];H===-1?((U&o)===0||(U&c)!==0)&&(d[E]=sn(U,i)):H<=i&&(t.expiredLanes|=U),h&=~U}}function gn(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function Ze(){var t=wt;return wt<<=1,(wt&4194240)===0&&(wt=64),t}function Dn(t){for(var i=[],o=0;31>o;o++)i.push(t);return i}function Lt(t,i,o){t.pendingLanes|=i,i!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,i=31-ze(i),t[i]=o}function $n(t,i){var o=t.pendingLanes&~i;t.pendingLanes=i,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=i,t.mutableReadLanes&=i,t.entangledLanes&=i,i=t.entanglements;var c=t.eventTimes;for(t=t.expirationTimes;0<o;){var d=31-ze(o),h=1<<d;i[d]=0,c[d]=-1,t[d]=-1,o&=~h}}function Kn(t,i){var o=t.entangledLanes|=i;for(t=t.entanglements;o;){var c=31-ze(o),d=1<<c;d&i|t[c]&i&&(t[c]|=i),o&=~d}}var Dt=0;function er(t){return t&=-t,1<t?4<t?(t&268435455)!==0?16:536870912:4:1}var jt,tn,Ti,qt,Ai,ki=!1,Kr=[],yr=null,Sr=null,Mr=null,po=new Map,mo=new Map,Er=[],V0="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Nf(t,i){switch(t){case"focusin":case"focusout":yr=null;break;case"dragenter":case"dragleave":Sr=null;break;case"mouseover":case"mouseout":Mr=null;break;case"pointerover":case"pointerout":po.delete(i.pointerId);break;case"gotpointercapture":case"lostpointercapture":mo.delete(i.pointerId)}}function go(t,i,o,c,d,h){return t===null||t.nativeEvent!==h?(t={blockedOn:i,domEventName:o,eventSystemFlags:c,nativeEvent:h,targetContainers:[d]},i!==null&&(i=Po(i),i!==null&&tn(i)),t):(t.eventSystemFlags|=c,i=t.targetContainers,d!==null&&i.indexOf(d)===-1&&i.push(d),t)}function G0(t,i,o,c,d){switch(i){case"focusin":return yr=go(yr,t,i,o,c,d),!0;case"dragenter":return Sr=go(Sr,t,i,o,c,d),!0;case"mouseover":return Mr=go(Mr,t,i,o,c,d),!0;case"pointerover":var h=d.pointerId;return po.set(h,go(po.get(h)||null,t,i,o,c,d)),!0;case"gotpointercapture":return h=d.pointerId,mo.set(h,go(mo.get(h)||null,t,i,o,c,d)),!0}return!1}function Uf(t){var i=Zr(t.target);if(i!==null){var o=Ln(i);if(o!==null){if(i=o.tag,i===13){if(i=oi(o),i!==null){t.blockedOn=i,Ai(t.priority,function(){Ti(o)});return}}else if(i===3&&o.stateNode.current.memoizedState.isDehydrated){t.blockedOn=o.tag===3?o.stateNode.containerInfo:null;return}}}t.blockedOn=null}function fa(t){if(t.blockedOn!==null)return!1;for(var i=t.targetContainers;0<i.length;){var o=nc(t.domEventName,t.eventSystemFlags,i[0],t.nativeEvent);if(o===null){o=t.nativeEvent;var c=new o.constructor(o.type,o);Ie=c,o.target.dispatchEvent(c),Ie=null}else return i=Po(o),i!==null&&tn(i),t.blockedOn=o,!1;i.shift()}return!0}function Ff(t,i,o){fa(t)&&o.delete(i)}function W0(){ki=!1,yr!==null&&fa(yr)&&(yr=null),Sr!==null&&fa(Sr)&&(Sr=null),Mr!==null&&fa(Mr)&&(Mr=null),po.forEach(Ff),mo.forEach(Ff)}function _o(t,i){t.blockedOn===i&&(t.blockedOn=null,ki||(ki=!0,e.unstable_scheduleCallback(e.unstable_NormalPriority,W0)))}function vo(t){function i(d){return _o(d,t)}if(0<Kr.length){_o(Kr[0],t);for(var o=1;o<Kr.length;o++){var c=Kr[o];c.blockedOn===t&&(c.blockedOn=null)}}for(yr!==null&&_o(yr,t),Sr!==null&&_o(Sr,t),Mr!==null&&_o(Mr,t),po.forEach(i),mo.forEach(i),o=0;o<Er.length;o++)c=Er[o],c.blockedOn===t&&(c.blockedOn=null);for(;0<Er.length&&(o=Er[0],o.blockedOn===null);)Uf(o),o.blockedOn===null&&Er.shift()}var Ss=P.ReactCurrentBatchConfig,ha=!0;function X0(t,i,o,c){var d=Dt,h=Ss.transition;Ss.transition=null;try{Dt=1,tc(t,i,o,c)}finally{Dt=d,Ss.transition=h}}function j0(t,i,o,c){var d=Dt,h=Ss.transition;Ss.transition=null;try{Dt=4,tc(t,i,o,c)}finally{Dt=d,Ss.transition=h}}function tc(t,i,o,c){if(ha){var d=nc(t,i,o,c);if(d===null)xc(t,i,c,pa,o),Nf(t,c);else if(G0(d,t,i,o,c))c.stopPropagation();else if(Nf(t,c),i&4&&-1<V0.indexOf(t)){for(;d!==null;){var h=Po(d);if(h!==null&&jt(h),h=nc(t,i,o,c),h===null&&xc(t,i,c,pa,o),h===d)break;d=h}d!==null&&c.stopPropagation()}else xc(t,i,c,null,o)}}var pa=null;function nc(t,i,o,c){if(pa=null,t=ft(c),t=Zr(t),t!==null)if(i=Ln(t),i===null)t=null;else if(o=i.tag,o===13){if(t=oi(i),t!==null)return t;t=null}else if(o===3){if(i.stateNode.current.memoizedState.isDehydrated)return i.tag===3?i.stateNode.containerInfo:null;t=null}else i!==t&&(t=null);return pa=t,null}function Of(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(ec()){case ho:return 1;case A:return 4;case q:case ue:return 16;case oe:return 536870912;default:return 16}default:return 16}}var wr=null,ic=null,ma=null;function kf(){if(ma)return ma;var t,i=ic,o=i.length,c,d="value"in wr?wr.value:wr.textContent,h=d.length;for(t=0;t<o&&i[t]===d[t];t++);var E=o-t;for(c=1;c<=E&&i[o-c]===d[h-c];c++);return ma=d.slice(t,1<c?1-c:void 0)}function ga(t){var i=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&i===13&&(t=13)):t=i,t===10&&(t=13),32<=t||t===13?t:0}function _a(){return!0}function Bf(){return!1}function ai(t){function i(o,c,d,h,E){this._reactName=o,this._targetInst=d,this.type=c,this.nativeEvent=h,this.target=E,this.currentTarget=null;for(var U in t)t.hasOwnProperty(U)&&(o=t[U],this[U]=o?o(h):h[U]);return this.isDefaultPrevented=(h.defaultPrevented!=null?h.defaultPrevented:h.returnValue===!1)?_a:Bf,this.isPropagationStopped=Bf,this}return he(i.prototype,{preventDefault:function(){this.defaultPrevented=!0;var o=this.nativeEvent;o&&(o.preventDefault?o.preventDefault():typeof o.returnValue!="unknown"&&(o.returnValue=!1),this.isDefaultPrevented=_a)},stopPropagation:function(){var o=this.nativeEvent;o&&(o.stopPropagation?o.stopPropagation():typeof o.cancelBubble!="unknown"&&(o.cancelBubble=!0),this.isPropagationStopped=_a)},persist:function(){},isPersistent:_a}),i}var Ms={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},rc=ai(Ms),xo=he({},Ms,{view:0,detail:0}),Y0=ai(xo),sc,oc,yo,va=he({},xo,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:lc,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==yo&&(yo&&t.type==="mousemove"?(sc=t.screenX-yo.screenX,oc=t.screenY-yo.screenY):oc=sc=0,yo=t),sc)},movementY:function(t){return"movementY"in t?t.movementY:oc}}),zf=ai(va),q0=he({},va,{dataTransfer:0}),$0=ai(q0),K0=he({},xo,{relatedTarget:0}),ac=ai(K0),Z0=he({},Ms,{animationName:0,elapsedTime:0,pseudoElement:0}),J0=ai(Z0),Q0=he({},Ms,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),eg=ai(Q0),tg=he({},Ms,{data:0}),Hf=ai(tg),ng={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},ig={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},rg={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function sg(t){var i=this.nativeEvent;return i.getModifierState?i.getModifierState(t):(t=rg[t])?!!i[t]:!1}function lc(){return sg}var og=he({},xo,{key:function(t){if(t.key){var i=ng[t.key]||t.key;if(i!=="Unidentified")return i}return t.type==="keypress"?(t=ga(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?ig[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:lc,charCode:function(t){return t.type==="keypress"?ga(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?ga(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),ag=ai(og),lg=he({},va,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Vf=ai(lg),cg=he({},xo,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:lc}),ug=ai(cg),dg=he({},Ms,{propertyName:0,elapsedTime:0,pseudoElement:0}),fg=ai(dg),hg=he({},va,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),pg=ai(hg),mg=[9,13,27,32],cc=f&&"CompositionEvent"in window,So=null;f&&"documentMode"in document&&(So=document.documentMode);var gg=f&&"TextEvent"in window&&!So,Gf=f&&(!cc||So&&8<So&&11>=So),Wf=" ",Xf=!1;function jf(t,i){switch(t){case"keyup":return mg.indexOf(i.keyCode)!==-1;case"keydown":return i.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Yf(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var Es=!1;function _g(t,i){switch(t){case"compositionend":return Yf(i);case"keypress":return i.which!==32?null:(Xf=!0,Wf);case"textInput":return t=i.data,t===Wf&&Xf?null:t;default:return null}}function vg(t,i){if(Es)return t==="compositionend"||!cc&&jf(t,i)?(t=kf(),ma=ic=wr=null,Es=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(i.ctrlKey||i.altKey||i.metaKey)||i.ctrlKey&&i.altKey){if(i.char&&1<i.char.length)return i.char;if(i.which)return String.fromCharCode(i.which)}return null;case"compositionend":return Gf&&i.locale!=="ko"?null:i.data;default:return null}}var xg={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function qf(t){var i=t&&t.nodeName&&t.nodeName.toLowerCase();return i==="input"?!!xg[t.type]:i==="textarea"}function $f(t,i,o,c){ve(c),i=Ea(i,"onChange"),0<i.length&&(o=new rc("onChange","change",null,o,c),t.push({event:o,listeners:i}))}var Mo=null,Eo=null;function yg(t){hh(t,0)}function xa(t){var i=Cs(t);if(Nt(i))return t}function Sg(t,i){if(t==="change")return i}var Kf=!1;if(f){var uc;if(f){var dc="oninput"in document;if(!dc){var Zf=document.createElement("div");Zf.setAttribute("oninput","return;"),dc=typeof Zf.oninput=="function"}uc=dc}else uc=!1;Kf=uc&&(!document.documentMode||9<document.documentMode)}function Jf(){Mo&&(Mo.detachEvent("onpropertychange",Qf),Eo=Mo=null)}function Qf(t){if(t.propertyName==="value"&&xa(Eo)){var i=[];$f(i,Eo,t,ft(t)),He(yg,i)}}function Mg(t,i,o){t==="focusin"?(Jf(),Mo=i,Eo=o,Mo.attachEvent("onpropertychange",Qf)):t==="focusout"&&Jf()}function Eg(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return xa(Eo)}function wg(t,i){if(t==="click")return xa(i)}function Tg(t,i){if(t==="input"||t==="change")return xa(i)}function Ag(t,i){return t===i&&(t!==0||1/t===1/i)||t!==t&&i!==i}var bi=typeof Object.is=="function"?Object.is:Ag;function wo(t,i){if(bi(t,i))return!0;if(typeof t!="object"||t===null||typeof i!="object"||i===null)return!1;var o=Object.keys(t),c=Object.keys(i);if(o.length!==c.length)return!1;for(c=0;c<o.length;c++){var d=o[c];if(!p.call(i,d)||!bi(t[d],i[d]))return!1}return!0}function eh(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function th(t,i){var o=eh(t);t=0;for(var c;o;){if(o.nodeType===3){if(c=t+o.textContent.length,t<=i&&c>=i)return{node:o,offset:i-t};t=c}e:{for(;o;){if(o.nextSibling){o=o.nextSibling;break e}o=o.parentNode}o=void 0}o=eh(o)}}function nh(t,i){return t&&i?t===i?!0:t&&t.nodeType===3?!1:i&&i.nodeType===3?nh(t,i.parentNode):"contains"in t?t.contains(i):t.compareDocumentPosition?!!(t.compareDocumentPosition(i)&16):!1:!1}function ih(){for(var t=window,i=pt();i instanceof t.HTMLIFrameElement;){try{var o=typeof i.contentWindow.location.href=="string"}catch{o=!1}if(o)t=i.contentWindow;else break;i=pt(t.document)}return i}function fc(t){var i=t&&t.nodeName&&t.nodeName.toLowerCase();return i&&(i==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||i==="textarea"||t.contentEditable==="true")}function bg(t){var i=ih(),o=t.focusedElem,c=t.selectionRange;if(i!==o&&o&&o.ownerDocument&&nh(o.ownerDocument.documentElement,o)){if(c!==null&&fc(o)){if(i=c.start,t=c.end,t===void 0&&(t=i),"selectionStart"in o)o.selectionStart=i,o.selectionEnd=Math.min(t,o.value.length);else if(t=(i=o.ownerDocument||document)&&i.defaultView||window,t.getSelection){t=t.getSelection();var d=o.textContent.length,h=Math.min(c.start,d);c=c.end===void 0?h:Math.min(c.end,d),!t.extend&&h>c&&(d=c,c=h,h=d),d=th(o,h);var E=th(o,c);d&&E&&(t.rangeCount!==1||t.anchorNode!==d.node||t.anchorOffset!==d.offset||t.focusNode!==E.node||t.focusOffset!==E.offset)&&(i=i.createRange(),i.setStart(d.node,d.offset),t.removeAllRanges(),h>c?(t.addRange(i),t.extend(E.node,E.offset)):(i.setEnd(E.node,E.offset),t.addRange(i)))}}for(i=[],t=o;t=t.parentNode;)t.nodeType===1&&i.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof o.focus=="function"&&o.focus(),o=0;o<i.length;o++)t=i[o],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var Cg=f&&"documentMode"in document&&11>=document.documentMode,ws=null,hc=null,To=null,pc=!1;function rh(t,i,o){var c=o.window===o?o.document:o.nodeType===9?o:o.ownerDocument;pc||ws==null||ws!==pt(c)||(c=ws,"selectionStart"in c&&fc(c)?c={start:c.selectionStart,end:c.selectionEnd}:(c=(c.ownerDocument&&c.ownerDocument.defaultView||window).getSelection(),c={anchorNode:c.anchorNode,anchorOffset:c.anchorOffset,focusNode:c.focusNode,focusOffset:c.focusOffset}),To&&wo(To,c)||(To=c,c=Ea(hc,"onSelect"),0<c.length&&(i=new rc("onSelect","select",null,i,o),t.push({event:i,listeners:c}),i.target=ws)))}function ya(t,i){var o={};return o[t.toLowerCase()]=i.toLowerCase(),o["Webkit"+t]="webkit"+i,o["Moz"+t]="moz"+i,o}var Ts={animationend:ya("Animation","AnimationEnd"),animationiteration:ya("Animation","AnimationIteration"),animationstart:ya("Animation","AnimationStart"),transitionend:ya("Transition","TransitionEnd")},mc={},sh={};f&&(sh=document.createElement("div").style,"AnimationEvent"in window||(delete Ts.animationend.animation,delete Ts.animationiteration.animation,delete Ts.animationstart.animation),"TransitionEvent"in window||delete Ts.transitionend.transition);function Sa(t){if(mc[t])return mc[t];if(!Ts[t])return t;var i=Ts[t],o;for(o in i)if(i.hasOwnProperty(o)&&o in sh)return mc[t]=i[o];return t}var oh=Sa("animationend"),ah=Sa("animationiteration"),lh=Sa("animationstart"),ch=Sa("transitionend"),uh=new Map,dh="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Tr(t,i){uh.set(t,i),l(i,[t])}for(var gc=0;gc<dh.length;gc++){var _c=dh[gc],Rg=_c.toLowerCase(),Pg=_c[0].toUpperCase()+_c.slice(1);Tr(Rg,"on"+Pg)}Tr(oh,"onAnimationEnd"),Tr(ah,"onAnimationIteration"),Tr(lh,"onAnimationStart"),Tr("dblclick","onDoubleClick"),Tr("focusin","onFocus"),Tr("focusout","onBlur"),Tr(ch,"onTransitionEnd"),u("onMouseEnter",["mouseout","mouseover"]),u("onMouseLeave",["mouseout","mouseover"]),u("onPointerEnter",["pointerout","pointerover"]),u("onPointerLeave",["pointerout","pointerover"]),l("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),l("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),l("onBeforeInput",["compositionend","keypress","textInput","paste"]),l("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),l("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),l("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Ao="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Lg=new Set("cancel close invalid load scroll toggle".split(" ").concat(Ao));function fh(t,i,o){var c=t.type||"unknown-event";t.currentTarget=o,An(c,i,void 0,t),t.currentTarget=null}function hh(t,i){i=(i&4)!==0;for(var o=0;o<t.length;o++){var c=t[o],d=c.event;c=c.listeners;e:{var h=void 0;if(i)for(var E=c.length-1;0<=E;E--){var U=c[E],H=U.instance,de=U.currentTarget;if(U=U.listener,H!==h&&d.isPropagationStopped())break e;fh(d,U,de),h=H}else for(E=0;E<c.length;E++){if(U=c[E],H=U.instance,de=U.currentTarget,U=U.listener,H!==h&&d.isPropagationStopped())break e;fh(d,U,de),h=H}}}if(et)throw t=xt,et=!1,xt=null,t}function nn(t,i){var o=i[Tc];o===void 0&&(o=i[Tc]=new Set);var c=t+"__bubble";o.has(c)||(ph(i,t,2,!1),o.add(c))}function vc(t,i,o){var c=0;i&&(c|=4),ph(o,t,c,i)}var Ma="_reactListening"+Math.random().toString(36).slice(2);function bo(t){if(!t[Ma]){t[Ma]=!0,s.forEach(function(o){o!=="selectionchange"&&(Lg.has(o)||vc(o,!1,t),vc(o,!0,t))});var i=t.nodeType===9?t:t.ownerDocument;i===null||i[Ma]||(i[Ma]=!0,vc("selectionchange",!1,i))}}function ph(t,i,o,c){switch(Of(i)){case 1:var d=X0;break;case 4:d=j0;break;default:d=tc}o=d.bind(null,i,o,t),d=void 0,!Ke||i!=="touchstart"&&i!=="touchmove"&&i!=="wheel"||(d=!0),c?d!==void 0?t.addEventListener(i,o,{capture:!0,passive:d}):t.addEventListener(i,o,!0):d!==void 0?t.addEventListener(i,o,{passive:d}):t.addEventListener(i,o,!1)}function xc(t,i,o,c,d){var h=c;if((i&1)===0&&(i&2)===0&&c!==null)e:for(;;){if(c===null)return;var E=c.tag;if(E===3||E===4){var U=c.stateNode.containerInfo;if(U===d||U.nodeType===8&&U.parentNode===d)break;if(E===4)for(E=c.return;E!==null;){var H=E.tag;if((H===3||H===4)&&(H=E.stateNode.containerInfo,H===d||H.nodeType===8&&H.parentNode===d))return;E=E.return}for(;U!==null;){if(E=Zr(U),E===null)return;if(H=E.tag,H===5||H===6){c=h=E;continue e}U=U.parentNode}}c=c.return}He(function(){var de=h,Re=ft(o),De=[];e:{var Ce=uh.get(t);if(Ce!==void 0){var Je=rc,it=t;switch(t){case"keypress":if(ga(o)===0)break e;case"keydown":case"keyup":Je=ag;break;case"focusin":it="focus",Je=ac;break;case"focusout":it="blur",Je=ac;break;case"beforeblur":case"afterblur":Je=ac;break;case"click":if(o.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":Je=zf;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":Je=$0;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":Je=ug;break;case oh:case ah:case lh:Je=J0;break;case ch:Je=fg;break;case"scroll":Je=Y0;break;case"wheel":Je=pg;break;case"copy":case"cut":case"paste":Je=eg;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":Je=Vf}var st=(i&4)!==0,pn=!st&&t==="scroll",te=st?Ce!==null?Ce+"Capture":null:Ce;st=[];for(var X=de,ae;X!==null;){ae=X;var ke=ae.stateNode;if(ae.tag===5&&ke!==null&&(ae=ke,te!==null&&(ke=$e(X,te),ke!=null&&st.push(Co(X,ke,ae)))),pn)break;X=X.return}0<st.length&&(Ce=new Je(Ce,it,null,o,Re),De.push({event:Ce,listeners:st}))}}if((i&7)===0){e:{if(Ce=t==="mouseover"||t==="pointerover",Je=t==="mouseout"||t==="pointerout",Ce&&o!==Ie&&(it=o.relatedTarget||o.fromElement)&&(Zr(it)||it[tr]))break e;if((Je||Ce)&&(Ce=Re.window===Re?Re:(Ce=Re.ownerDocument)?Ce.defaultView||Ce.parentWindow:window,Je?(it=o.relatedTarget||o.toElement,Je=de,it=it?Zr(it):null,it!==null&&(pn=Ln(it),it!==pn||it.tag!==5&&it.tag!==6)&&(it=null)):(Je=null,it=de),Je!==it)){if(st=zf,ke="onMouseLeave",te="onMouseEnter",X="mouse",(t==="pointerout"||t==="pointerover")&&(st=Vf,ke="onPointerLeave",te="onPointerEnter",X="pointer"),pn=Je==null?Ce:Cs(Je),ae=it==null?Ce:Cs(it),Ce=new st(ke,X+"leave",Je,o,Re),Ce.target=pn,Ce.relatedTarget=ae,ke=null,Zr(Re)===de&&(st=new st(te,X+"enter",it,o,Re),st.target=ae,st.relatedTarget=pn,ke=st),pn=ke,Je&&it)t:{for(st=Je,te=it,X=0,ae=st;ae;ae=As(ae))X++;for(ae=0,ke=te;ke;ke=As(ke))ae++;for(;0<X-ae;)st=As(st),X--;for(;0<ae-X;)te=As(te),ae--;for(;X--;){if(st===te||te!==null&&st===te.alternate)break t;st=As(st),te=As(te)}st=null}else st=null;Je!==null&&mh(De,Ce,Je,st,!1),it!==null&&pn!==null&&mh(De,pn,it,st,!0)}}e:{if(Ce=de?Cs(de):window,Je=Ce.nodeName&&Ce.nodeName.toLowerCase(),Je==="select"||Je==="input"&&Ce.type==="file")var at=Sg;else if(qf(Ce))if(Kf)at=Tg;else{at=Eg;var mt=Mg}else(Je=Ce.nodeName)&&Je.toLowerCase()==="input"&&(Ce.type==="checkbox"||Ce.type==="radio")&&(at=wg);if(at&&(at=at(t,de))){$f(De,at,o,Re);break e}mt&&mt(t,Ce,de),t==="focusout"&&(mt=Ce._wrapperState)&&mt.controlled&&Ce.type==="number"&&Zt(Ce,"number",Ce.value)}switch(mt=de?Cs(de):window,t){case"focusin":(qf(mt)||mt.contentEditable==="true")&&(ws=mt,hc=de,To=null);break;case"focusout":To=hc=ws=null;break;case"mousedown":pc=!0;break;case"contextmenu":case"mouseup":case"dragend":pc=!1,rh(De,o,Re);break;case"selectionchange":if(Cg)break;case"keydown":case"keyup":rh(De,o,Re)}var gt;if(cc)e:{switch(t){case"compositionstart":var yt="onCompositionStart";break e;case"compositionend":yt="onCompositionEnd";break e;case"compositionupdate":yt="onCompositionUpdate";break e}yt=void 0}else Es?jf(t,o)&&(yt="onCompositionEnd"):t==="keydown"&&o.keyCode===229&&(yt="onCompositionStart");yt&&(Gf&&o.locale!=="ko"&&(Es||yt!=="onCompositionStart"?yt==="onCompositionEnd"&&Es&&(gt=kf()):(wr=Re,ic="value"in wr?wr.value:wr.textContent,Es=!0)),mt=Ea(de,yt),0<mt.length&&(yt=new Hf(yt,t,null,o,Re),De.push({event:yt,listeners:mt}),gt?yt.data=gt:(gt=Yf(o),gt!==null&&(yt.data=gt)))),(gt=gg?_g(t,o):vg(t,o))&&(de=Ea(de,"onBeforeInput"),0<de.length&&(Re=new Hf("onBeforeInput","beforeinput",null,o,Re),De.push({event:Re,listeners:de}),Re.data=gt))}hh(De,i)})}function Co(t,i,o){return{instance:t,listener:i,currentTarget:o}}function Ea(t,i){for(var o=i+"Capture",c=[];t!==null;){var d=t,h=d.stateNode;d.tag===5&&h!==null&&(d=h,h=$e(t,o),h!=null&&c.unshift(Co(t,h,d)),h=$e(t,i),h!=null&&c.push(Co(t,h,d))),t=t.return}return c}function As(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function mh(t,i,o,c,d){for(var h=i._reactName,E=[];o!==null&&o!==c;){var U=o,H=U.alternate,de=U.stateNode;if(H!==null&&H===c)break;U.tag===5&&de!==null&&(U=de,d?(H=$e(o,h),H!=null&&E.unshift(Co(o,H,U))):d||(H=$e(o,h),H!=null&&E.push(Co(o,H,U)))),o=o.return}E.length!==0&&t.push({event:i,listeners:E})}var Dg=/\r\n?/g,Ig=/\u0000|\uFFFD/g;function gh(t){return(typeof t=="string"?t:""+t).replace(Dg,`
`).replace(Ig,"")}function wa(t,i,o){if(i=gh(i),gh(t)!==i&&o)throw Error(n(425))}function Ta(){}var yc=null,Sc=null;function Mc(t,i){return t==="textarea"||t==="noscript"||typeof i.children=="string"||typeof i.children=="number"||typeof i.dangerouslySetInnerHTML=="object"&&i.dangerouslySetInnerHTML!==null&&i.dangerouslySetInnerHTML.__html!=null}var Ec=typeof setTimeout=="function"?setTimeout:void 0,Ng=typeof clearTimeout=="function"?clearTimeout:void 0,_h=typeof Promise=="function"?Promise:void 0,Ug=typeof queueMicrotask=="function"?queueMicrotask:typeof _h<"u"?function(t){return _h.resolve(null).then(t).catch(Fg)}:Ec;function Fg(t){setTimeout(function(){throw t})}function wc(t,i){var o=i,c=0;do{var d=o.nextSibling;if(t.removeChild(o),d&&d.nodeType===8)if(o=d.data,o==="/$"){if(c===0){t.removeChild(d),vo(i);return}c--}else o!=="$"&&o!=="$?"&&o!=="$!"||c++;o=d}while(o);vo(i)}function Ar(t){for(;t!=null;t=t.nextSibling){var i=t.nodeType;if(i===1||i===3)break;if(i===8){if(i=t.data,i==="$"||i==="$!"||i==="$?")break;if(i==="/$")return null}}return t}function vh(t){t=t.previousSibling;for(var i=0;t;){if(t.nodeType===8){var o=t.data;if(o==="$"||o==="$!"||o==="$?"){if(i===0)return t;i--}else o==="/$"&&i++}t=t.previousSibling}return null}var bs=Math.random().toString(36).slice(2),Bi="__reactFiber$"+bs,Ro="__reactProps$"+bs,tr="__reactContainer$"+bs,Tc="__reactEvents$"+bs,Og="__reactListeners$"+bs,kg="__reactHandles$"+bs;function Zr(t){var i=t[Bi];if(i)return i;for(var o=t.parentNode;o;){if(i=o[tr]||o[Bi]){if(o=i.alternate,i.child!==null||o!==null&&o.child!==null)for(t=vh(t);t!==null;){if(o=t[Bi])return o;t=vh(t)}return i}t=o,o=t.parentNode}return null}function Po(t){return t=t[Bi]||t[tr],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function Cs(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(n(33))}function Aa(t){return t[Ro]||null}var Ac=[],Rs=-1;function br(t){return{current:t}}function rn(t){0>Rs||(t.current=Ac[Rs],Ac[Rs]=null,Rs--)}function en(t,i){Rs++,Ac[Rs]=t.current,t.current=i}var Cr={},On=br(Cr),Zn=br(!1),Jr=Cr;function Ps(t,i){var o=t.type.contextTypes;if(!o)return Cr;var c=t.stateNode;if(c&&c.__reactInternalMemoizedUnmaskedChildContext===i)return c.__reactInternalMemoizedMaskedChildContext;var d={},h;for(h in o)d[h]=i[h];return c&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=i,t.__reactInternalMemoizedMaskedChildContext=d),d}function Jn(t){return t=t.childContextTypes,t!=null}function ba(){rn(Zn),rn(On)}function xh(t,i,o){if(On.current!==Cr)throw Error(n(168));en(On,i),en(Zn,o)}function yh(t,i,o){var c=t.stateNode;if(i=i.childContextTypes,typeof c.getChildContext!="function")return o;c=c.getChildContext();for(var d in c)if(!(d in i))throw Error(n(108,Ae(t)||"Unknown",d));return he({},o,c)}function Ca(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||Cr,Jr=On.current,en(On,t),en(Zn,Zn.current),!0}function Sh(t,i,o){var c=t.stateNode;if(!c)throw Error(n(169));o?(t=yh(t,i,Jr),c.__reactInternalMemoizedMergedChildContext=t,rn(Zn),rn(On),en(On,t)):rn(Zn),en(Zn,o)}var nr=null,Ra=!1,bc=!1;function Mh(t){nr===null?nr=[t]:nr.push(t)}function Bg(t){Ra=!0,Mh(t)}function Rr(){if(!bc&&nr!==null){bc=!0;var t=0,i=Dt;try{var o=nr;for(Dt=1;t<o.length;t++){var c=o[t];do c=c(!0);while(c!==null)}nr=null,Ra=!1}catch(d){throw nr!==null&&(nr=nr.slice(t+1)),ua(ho,Rr),d}finally{Dt=i,bc=!1}}return null}var Ls=[],Ds=0,Pa=null,La=0,_i=[],vi=0,Qr=null,ir=1,rr="";function es(t,i){Ls[Ds++]=La,Ls[Ds++]=Pa,Pa=t,La=i}function Eh(t,i,o){_i[vi++]=ir,_i[vi++]=rr,_i[vi++]=Qr,Qr=t;var c=ir;t=rr;var d=32-ze(c)-1;c&=~(1<<d),o+=1;var h=32-ze(i)+d;if(30<h){var E=d-d%5;h=(c&(1<<E)-1).toString(32),c>>=E,d-=E,ir=1<<32-ze(i)+d|o<<d|c,rr=h+t}else ir=1<<h|o<<d|c,rr=t}function Cc(t){t.return!==null&&(es(t,1),Eh(t,1,0))}function Rc(t){for(;t===Pa;)Pa=Ls[--Ds],Ls[Ds]=null,La=Ls[--Ds],Ls[Ds]=null;for(;t===Qr;)Qr=_i[--vi],_i[vi]=null,rr=_i[--vi],_i[vi]=null,ir=_i[--vi],_i[vi]=null}var li=null,ci=null,on=!1,Ci=null;function wh(t,i){var o=Mi(5,null,null,0);o.elementType="DELETED",o.stateNode=i,o.return=t,i=t.deletions,i===null?(t.deletions=[o],t.flags|=16):i.push(o)}function Th(t,i){switch(t.tag){case 5:var o=t.type;return i=i.nodeType!==1||o.toLowerCase()!==i.nodeName.toLowerCase()?null:i,i!==null?(t.stateNode=i,li=t,ci=Ar(i.firstChild),!0):!1;case 6:return i=t.pendingProps===""||i.nodeType!==3?null:i,i!==null?(t.stateNode=i,li=t,ci=null,!0):!1;case 13:return i=i.nodeType!==8?null:i,i!==null?(o=Qr!==null?{id:ir,overflow:rr}:null,t.memoizedState={dehydrated:i,treeContext:o,retryLane:1073741824},o=Mi(18,null,null,0),o.stateNode=i,o.return=t,t.child=o,li=t,ci=null,!0):!1;default:return!1}}function Pc(t){return(t.mode&1)!==0&&(t.flags&128)===0}function Lc(t){if(on){var i=ci;if(i){var o=i;if(!Th(t,i)){if(Pc(t))throw Error(n(418));i=Ar(o.nextSibling);var c=li;i&&Th(t,i)?wh(c,o):(t.flags=t.flags&-4097|2,on=!1,li=t)}}else{if(Pc(t))throw Error(n(418));t.flags=t.flags&-4097|2,on=!1,li=t}}}function Ah(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;li=t}function Da(t){if(t!==li)return!1;if(!on)return Ah(t),on=!0,!1;var i;if((i=t.tag!==3)&&!(i=t.tag!==5)&&(i=t.type,i=i!=="head"&&i!=="body"&&!Mc(t.type,t.memoizedProps)),i&&(i=ci)){if(Pc(t))throw bh(),Error(n(418));for(;i;)wh(t,i),i=Ar(i.nextSibling)}if(Ah(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(n(317));e:{for(t=t.nextSibling,i=0;t;){if(t.nodeType===8){var o=t.data;if(o==="/$"){if(i===0){ci=Ar(t.nextSibling);break e}i--}else o!=="$"&&o!=="$!"&&o!=="$?"||i++}t=t.nextSibling}ci=null}}else ci=li?Ar(t.stateNode.nextSibling):null;return!0}function bh(){for(var t=ci;t;)t=Ar(t.nextSibling)}function Is(){ci=li=null,on=!1}function Dc(t){Ci===null?Ci=[t]:Ci.push(t)}var zg=P.ReactCurrentBatchConfig;function Lo(t,i,o){if(t=o.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(o._owner){if(o=o._owner,o){if(o.tag!==1)throw Error(n(309));var c=o.stateNode}if(!c)throw Error(n(147,t));var d=c,h=""+t;return i!==null&&i.ref!==null&&typeof i.ref=="function"&&i.ref._stringRef===h?i.ref:(i=function(E){var U=d.refs;E===null?delete U[h]:U[h]=E},i._stringRef=h,i)}if(typeof t!="string")throw Error(n(284));if(!o._owner)throw Error(n(290,t))}return t}function Ia(t,i){throw t=Object.prototype.toString.call(i),Error(n(31,t==="[object Object]"?"object with keys {"+Object.keys(i).join(", ")+"}":t))}function Ch(t){var i=t._init;return i(t._payload)}function Rh(t){function i(te,X){if(t){var ae=te.deletions;ae===null?(te.deletions=[X],te.flags|=16):ae.push(X)}}function o(te,X){if(!t)return null;for(;X!==null;)i(te,X),X=X.sibling;return null}function c(te,X){for(te=new Map;X!==null;)X.key!==null?te.set(X.key,X):te.set(X.index,X),X=X.sibling;return te}function d(te,X){return te=Or(te,X),te.index=0,te.sibling=null,te}function h(te,X,ae){return te.index=ae,t?(ae=te.alternate,ae!==null?(ae=ae.index,ae<X?(te.flags|=2,X):ae):(te.flags|=2,X)):(te.flags|=1048576,X)}function E(te){return t&&te.alternate===null&&(te.flags|=2),te}function U(te,X,ae,ke){return X===null||X.tag!==6?(X=Eu(ae,te.mode,ke),X.return=te,X):(X=d(X,ae),X.return=te,X)}function H(te,X,ae,ke){var at=ae.type;return at===k?Re(te,X,ae.props.children,ke,ae.key):X!==null&&(X.elementType===at||typeof at=="object"&&at!==null&&at.$$typeof===ne&&Ch(at)===X.type)?(ke=d(X,ae.props),ke.ref=Lo(te,X,ae),ke.return=te,ke):(ke=il(ae.type,ae.key,ae.props,null,te.mode,ke),ke.ref=Lo(te,X,ae),ke.return=te,ke)}function de(te,X,ae,ke){return X===null||X.tag!==4||X.stateNode.containerInfo!==ae.containerInfo||X.stateNode.implementation!==ae.implementation?(X=wu(ae,te.mode,ke),X.return=te,X):(X=d(X,ae.children||[]),X.return=te,X)}function Re(te,X,ae,ke,at){return X===null||X.tag!==7?(X=ls(ae,te.mode,ke,at),X.return=te,X):(X=d(X,ae),X.return=te,X)}function De(te,X,ae){if(typeof X=="string"&&X!==""||typeof X=="number")return X=Eu(""+X,te.mode,ae),X.return=te,X;if(typeof X=="object"&&X!==null){switch(X.$$typeof){case z:return ae=il(X.type,X.key,X.props,null,te.mode,ae),ae.ref=Lo(te,null,X),ae.return=te,ae;case D:return X=wu(X,te.mode,ae),X.return=te,X;case ne:var ke=X._init;return De(te,ke(X._payload),ae)}if(G(X)||fe(X))return X=ls(X,te.mode,ae,null),X.return=te,X;Ia(te,X)}return null}function Ce(te,X,ae,ke){var at=X!==null?X.key:null;if(typeof ae=="string"&&ae!==""||typeof ae=="number")return at!==null?null:U(te,X,""+ae,ke);if(typeof ae=="object"&&ae!==null){switch(ae.$$typeof){case z:return ae.key===at?H(te,X,ae,ke):null;case D:return ae.key===at?de(te,X,ae,ke):null;case ne:return at=ae._init,Ce(te,X,at(ae._payload),ke)}if(G(ae)||fe(ae))return at!==null?null:Re(te,X,ae,ke,null);Ia(te,ae)}return null}function Je(te,X,ae,ke,at){if(typeof ke=="string"&&ke!==""||typeof ke=="number")return te=te.get(ae)||null,U(X,te,""+ke,at);if(typeof ke=="object"&&ke!==null){switch(ke.$$typeof){case z:return te=te.get(ke.key===null?ae:ke.key)||null,H(X,te,ke,at);case D:return te=te.get(ke.key===null?ae:ke.key)||null,de(X,te,ke,at);case ne:var mt=ke._init;return Je(te,X,ae,mt(ke._payload),at)}if(G(ke)||fe(ke))return te=te.get(ae)||null,Re(X,te,ke,at,null);Ia(X,ke)}return null}function it(te,X,ae,ke){for(var at=null,mt=null,gt=X,yt=X=0,Rn=null;gt!==null&&yt<ae.length;yt++){gt.index>yt?(Rn=gt,gt=null):Rn=gt.sibling;var Xt=Ce(te,gt,ae[yt],ke);if(Xt===null){gt===null&&(gt=Rn);break}t&&gt&&Xt.alternate===null&&i(te,gt),X=h(Xt,X,yt),mt===null?at=Xt:mt.sibling=Xt,mt=Xt,gt=Rn}if(yt===ae.length)return o(te,gt),on&&es(te,yt),at;if(gt===null){for(;yt<ae.length;yt++)gt=De(te,ae[yt],ke),gt!==null&&(X=h(gt,X,yt),mt===null?at=gt:mt.sibling=gt,mt=gt);return on&&es(te,yt),at}for(gt=c(te,gt);yt<ae.length;yt++)Rn=Je(gt,te,yt,ae[yt],ke),Rn!==null&&(t&&Rn.alternate!==null&&gt.delete(Rn.key===null?yt:Rn.key),X=h(Rn,X,yt),mt===null?at=Rn:mt.sibling=Rn,mt=Rn);return t&&gt.forEach(function(kr){return i(te,kr)}),on&&es(te,yt),at}function st(te,X,ae,ke){var at=fe(ae);if(typeof at!="function")throw Error(n(150));if(ae=at.call(ae),ae==null)throw Error(n(151));for(var mt=at=null,gt=X,yt=X=0,Rn=null,Xt=ae.next();gt!==null&&!Xt.done;yt++,Xt=ae.next()){gt.index>yt?(Rn=gt,gt=null):Rn=gt.sibling;var kr=Ce(te,gt,Xt.value,ke);if(kr===null){gt===null&&(gt=Rn);break}t&&gt&&kr.alternate===null&&i(te,gt),X=h(kr,X,yt),mt===null?at=kr:mt.sibling=kr,mt=kr,gt=Rn}if(Xt.done)return o(te,gt),on&&es(te,yt),at;if(gt===null){for(;!Xt.done;yt++,Xt=ae.next())Xt=De(te,Xt.value,ke),Xt!==null&&(X=h(Xt,X,yt),mt===null?at=Xt:mt.sibling=Xt,mt=Xt);return on&&es(te,yt),at}for(gt=c(te,gt);!Xt.done;yt++,Xt=ae.next())Xt=Je(gt,te,yt,Xt.value,ke),Xt!==null&&(t&&Xt.alternate!==null&&gt.delete(Xt.key===null?yt:Xt.key),X=h(Xt,X,yt),mt===null?at=Xt:mt.sibling=Xt,mt=Xt);return t&&gt.forEach(function(x_){return i(te,x_)}),on&&es(te,yt),at}function pn(te,X,ae,ke){if(typeof ae=="object"&&ae!==null&&ae.type===k&&ae.key===null&&(ae=ae.props.children),typeof ae=="object"&&ae!==null){switch(ae.$$typeof){case z:e:{for(var at=ae.key,mt=X;mt!==null;){if(mt.key===at){if(at=ae.type,at===k){if(mt.tag===7){o(te,mt.sibling),X=d(mt,ae.props.children),X.return=te,te=X;break e}}else if(mt.elementType===at||typeof at=="object"&&at!==null&&at.$$typeof===ne&&Ch(at)===mt.type){o(te,mt.sibling),X=d(mt,ae.props),X.ref=Lo(te,mt,ae),X.return=te,te=X;break e}o(te,mt);break}else i(te,mt);mt=mt.sibling}ae.type===k?(X=ls(ae.props.children,te.mode,ke,ae.key),X.return=te,te=X):(ke=il(ae.type,ae.key,ae.props,null,te.mode,ke),ke.ref=Lo(te,X,ae),ke.return=te,te=ke)}return E(te);case D:e:{for(mt=ae.key;X!==null;){if(X.key===mt)if(X.tag===4&&X.stateNode.containerInfo===ae.containerInfo&&X.stateNode.implementation===ae.implementation){o(te,X.sibling),X=d(X,ae.children||[]),X.return=te,te=X;break e}else{o(te,X);break}else i(te,X);X=X.sibling}X=wu(ae,te.mode,ke),X.return=te,te=X}return E(te);case ne:return mt=ae._init,pn(te,X,mt(ae._payload),ke)}if(G(ae))return it(te,X,ae,ke);if(fe(ae))return st(te,X,ae,ke);Ia(te,ae)}return typeof ae=="string"&&ae!==""||typeof ae=="number"?(ae=""+ae,X!==null&&X.tag===6?(o(te,X.sibling),X=d(X,ae),X.return=te,te=X):(o(te,X),X=Eu(ae,te.mode,ke),X.return=te,te=X),E(te)):o(te,X)}return pn}var Ns=Rh(!0),Ph=Rh(!1),Na=br(null),Ua=null,Us=null,Ic=null;function Nc(){Ic=Us=Ua=null}function Uc(t){var i=Na.current;rn(Na),t._currentValue=i}function Fc(t,i,o){for(;t!==null;){var c=t.alternate;if((t.childLanes&i)!==i?(t.childLanes|=i,c!==null&&(c.childLanes|=i)):c!==null&&(c.childLanes&i)!==i&&(c.childLanes|=i),t===o)break;t=t.return}}function Fs(t,i){Ua=t,Ic=Us=null,t=t.dependencies,t!==null&&t.firstContext!==null&&((t.lanes&i)!==0&&(Qn=!0),t.firstContext=null)}function xi(t){var i=t._currentValue;if(Ic!==t)if(t={context:t,memoizedValue:i,next:null},Us===null){if(Ua===null)throw Error(n(308));Us=t,Ua.dependencies={lanes:0,firstContext:t}}else Us=Us.next=t;return i}var ts=null;function Oc(t){ts===null?ts=[t]:ts.push(t)}function Lh(t,i,o,c){var d=i.interleaved;return d===null?(o.next=o,Oc(i)):(o.next=d.next,d.next=o),i.interleaved=o,sr(t,c)}function sr(t,i){t.lanes|=i;var o=t.alternate;for(o!==null&&(o.lanes|=i),o=t,t=t.return;t!==null;)t.childLanes|=i,o=t.alternate,o!==null&&(o.childLanes|=i),o=t,t=t.return;return o.tag===3?o.stateNode:null}var Pr=!1;function kc(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Dh(t,i){t=t.updateQueue,i.updateQueue===t&&(i.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function or(t,i){return{eventTime:t,lane:i,tag:0,payload:null,callback:null,next:null}}function Lr(t,i,o){var c=t.updateQueue;if(c===null)return null;if(c=c.shared,(Vt&2)!==0){var d=c.pending;return d===null?i.next=i:(i.next=d.next,d.next=i),c.pending=i,sr(t,o)}return d=c.interleaved,d===null?(i.next=i,Oc(c)):(i.next=d.next,d.next=i),c.interleaved=i,sr(t,o)}function Fa(t,i,o){if(i=i.updateQueue,i!==null&&(i=i.shared,(o&4194240)!==0)){var c=i.lanes;c&=t.pendingLanes,o|=c,i.lanes=o,Kn(t,o)}}function Ih(t,i){var o=t.updateQueue,c=t.alternate;if(c!==null&&(c=c.updateQueue,o===c)){var d=null,h=null;if(o=o.firstBaseUpdate,o!==null){do{var E={eventTime:o.eventTime,lane:o.lane,tag:o.tag,payload:o.payload,callback:o.callback,next:null};h===null?d=h=E:h=h.next=E,o=o.next}while(o!==null);h===null?d=h=i:h=h.next=i}else d=h=i;o={baseState:c.baseState,firstBaseUpdate:d,lastBaseUpdate:h,shared:c.shared,effects:c.effects},t.updateQueue=o;return}t=o.lastBaseUpdate,t===null?o.firstBaseUpdate=i:t.next=i,o.lastBaseUpdate=i}function Oa(t,i,o,c){var d=t.updateQueue;Pr=!1;var h=d.firstBaseUpdate,E=d.lastBaseUpdate,U=d.shared.pending;if(U!==null){d.shared.pending=null;var H=U,de=H.next;H.next=null,E===null?h=de:E.next=de,E=H;var Re=t.alternate;Re!==null&&(Re=Re.updateQueue,U=Re.lastBaseUpdate,U!==E&&(U===null?Re.firstBaseUpdate=de:U.next=de,Re.lastBaseUpdate=H))}if(h!==null){var De=d.baseState;E=0,Re=de=H=null,U=h;do{var Ce=U.lane,Je=U.eventTime;if((c&Ce)===Ce){Re!==null&&(Re=Re.next={eventTime:Je,lane:0,tag:U.tag,payload:U.payload,callback:U.callback,next:null});e:{var it=t,st=U;switch(Ce=i,Je=o,st.tag){case 1:if(it=st.payload,typeof it=="function"){De=it.call(Je,De,Ce);break e}De=it;break e;case 3:it.flags=it.flags&-65537|128;case 0:if(it=st.payload,Ce=typeof it=="function"?it.call(Je,De,Ce):it,Ce==null)break e;De=he({},De,Ce);break e;case 2:Pr=!0}}U.callback!==null&&U.lane!==0&&(t.flags|=64,Ce=d.effects,Ce===null?d.effects=[U]:Ce.push(U))}else Je={eventTime:Je,lane:Ce,tag:U.tag,payload:U.payload,callback:U.callback,next:null},Re===null?(de=Re=Je,H=De):Re=Re.next=Je,E|=Ce;if(U=U.next,U===null){if(U=d.shared.pending,U===null)break;Ce=U,U=Ce.next,Ce.next=null,d.lastBaseUpdate=Ce,d.shared.pending=null}}while(!0);if(Re===null&&(H=De),d.baseState=H,d.firstBaseUpdate=de,d.lastBaseUpdate=Re,i=d.shared.interleaved,i!==null){d=i;do E|=d.lane,d=d.next;while(d!==i)}else h===null&&(d.shared.lanes=0);rs|=E,t.lanes=E,t.memoizedState=De}}function Nh(t,i,o){if(t=i.effects,i.effects=null,t!==null)for(i=0;i<t.length;i++){var c=t[i],d=c.callback;if(d!==null){if(c.callback=null,c=o,typeof d!="function")throw Error(n(191,d));d.call(c)}}}var Do={},zi=br(Do),Io=br(Do),No=br(Do);function ns(t){if(t===Do)throw Error(n(174));return t}function Bc(t,i){switch(en(No,i),en(Io,t),en(zi,Do),t=i.nodeType,t){case 9:case 11:i=(i=i.documentElement)?i.namespaceURI:M(null,"");break;default:t=t===8?i.parentNode:i,i=t.namespaceURI||null,t=t.tagName,i=M(i,t)}rn(zi),en(zi,i)}function Os(){rn(zi),rn(Io),rn(No)}function Uh(t){ns(No.current);var i=ns(zi.current),o=M(i,t.type);i!==o&&(en(Io,t),en(zi,o))}function zc(t){Io.current===t&&(rn(zi),rn(Io))}var cn=br(0);function ka(t){for(var i=t;i!==null;){if(i.tag===13){var o=i.memoizedState;if(o!==null&&(o=o.dehydrated,o===null||o.data==="$?"||o.data==="$!"))return i}else if(i.tag===19&&i.memoizedProps.revealOrder!==void 0){if((i.flags&128)!==0)return i}else if(i.child!==null){i.child.return=i,i=i.child;continue}if(i===t)break;for(;i.sibling===null;){if(i.return===null||i.return===t)return null;i=i.return}i.sibling.return=i.return,i=i.sibling}return null}var Hc=[];function Vc(){for(var t=0;t<Hc.length;t++)Hc[t]._workInProgressVersionPrimary=null;Hc.length=0}var Ba=P.ReactCurrentDispatcher,Gc=P.ReactCurrentBatchConfig,is=0,un=null,Sn=null,bn=null,za=!1,Uo=!1,Fo=0,Hg=0;function kn(){throw Error(n(321))}function Wc(t,i){if(i===null)return!1;for(var o=0;o<i.length&&o<t.length;o++)if(!bi(t[o],i[o]))return!1;return!0}function Xc(t,i,o,c,d,h){if(is=h,un=i,i.memoizedState=null,i.updateQueue=null,i.lanes=0,Ba.current=t===null||t.memoizedState===null?Xg:jg,t=o(c,d),Uo){h=0;do{if(Uo=!1,Fo=0,25<=h)throw Error(n(301));h+=1,bn=Sn=null,i.updateQueue=null,Ba.current=Yg,t=o(c,d)}while(Uo)}if(Ba.current=Ga,i=Sn!==null&&Sn.next!==null,is=0,bn=Sn=un=null,za=!1,i)throw Error(n(300));return t}function jc(){var t=Fo!==0;return Fo=0,t}function Hi(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return bn===null?un.memoizedState=bn=t:bn=bn.next=t,bn}function yi(){if(Sn===null){var t=un.alternate;t=t!==null?t.memoizedState:null}else t=Sn.next;var i=bn===null?un.memoizedState:bn.next;if(i!==null)bn=i,Sn=t;else{if(t===null)throw Error(n(310));Sn=t,t={memoizedState:Sn.memoizedState,baseState:Sn.baseState,baseQueue:Sn.baseQueue,queue:Sn.queue,next:null},bn===null?un.memoizedState=bn=t:bn=bn.next=t}return bn}function Oo(t,i){return typeof i=="function"?i(t):i}function Yc(t){var i=yi(),o=i.queue;if(o===null)throw Error(n(311));o.lastRenderedReducer=t;var c=Sn,d=c.baseQueue,h=o.pending;if(h!==null){if(d!==null){var E=d.next;d.next=h.next,h.next=E}c.baseQueue=d=h,o.pending=null}if(d!==null){h=d.next,c=c.baseState;var U=E=null,H=null,de=h;do{var Re=de.lane;if((is&Re)===Re)H!==null&&(H=H.next={lane:0,action:de.action,hasEagerState:de.hasEagerState,eagerState:de.eagerState,next:null}),c=de.hasEagerState?de.eagerState:t(c,de.action);else{var De={lane:Re,action:de.action,hasEagerState:de.hasEagerState,eagerState:de.eagerState,next:null};H===null?(U=H=De,E=c):H=H.next=De,un.lanes|=Re,rs|=Re}de=de.next}while(de!==null&&de!==h);H===null?E=c:H.next=U,bi(c,i.memoizedState)||(Qn=!0),i.memoizedState=c,i.baseState=E,i.baseQueue=H,o.lastRenderedState=c}if(t=o.interleaved,t!==null){d=t;do h=d.lane,un.lanes|=h,rs|=h,d=d.next;while(d!==t)}else d===null&&(o.lanes=0);return[i.memoizedState,o.dispatch]}function qc(t){var i=yi(),o=i.queue;if(o===null)throw Error(n(311));o.lastRenderedReducer=t;var c=o.dispatch,d=o.pending,h=i.memoizedState;if(d!==null){o.pending=null;var E=d=d.next;do h=t(h,E.action),E=E.next;while(E!==d);bi(h,i.memoizedState)||(Qn=!0),i.memoizedState=h,i.baseQueue===null&&(i.baseState=h),o.lastRenderedState=h}return[h,c]}function Fh(){}function Oh(t,i){var o=un,c=yi(),d=i(),h=!bi(c.memoizedState,d);if(h&&(c.memoizedState=d,Qn=!0),c=c.queue,$c(zh.bind(null,o,c,t),[t]),c.getSnapshot!==i||h||bn!==null&&bn.memoizedState.tag&1){if(o.flags|=2048,ko(9,Bh.bind(null,o,c,d,i),void 0,null),Cn===null)throw Error(n(349));(is&30)!==0||kh(o,i,d)}return d}function kh(t,i,o){t.flags|=16384,t={getSnapshot:i,value:o},i=un.updateQueue,i===null?(i={lastEffect:null,stores:null},un.updateQueue=i,i.stores=[t]):(o=i.stores,o===null?i.stores=[t]:o.push(t))}function Bh(t,i,o,c){i.value=o,i.getSnapshot=c,Hh(i)&&Vh(t)}function zh(t,i,o){return o(function(){Hh(i)&&Vh(t)})}function Hh(t){var i=t.getSnapshot;t=t.value;try{var o=i();return!bi(t,o)}catch{return!0}}function Vh(t){var i=sr(t,1);i!==null&&Di(i,t,1,-1)}function Gh(t){var i=Hi();return typeof t=="function"&&(t=t()),i.memoizedState=i.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Oo,lastRenderedState:t},i.queue=t,t=t.dispatch=Wg.bind(null,un,t),[i.memoizedState,t]}function ko(t,i,o,c){return t={tag:t,create:i,destroy:o,deps:c,next:null},i=un.updateQueue,i===null?(i={lastEffect:null,stores:null},un.updateQueue=i,i.lastEffect=t.next=t):(o=i.lastEffect,o===null?i.lastEffect=t.next=t:(c=o.next,o.next=t,t.next=c,i.lastEffect=t)),t}function Wh(){return yi().memoizedState}function Ha(t,i,o,c){var d=Hi();un.flags|=t,d.memoizedState=ko(1|i,o,void 0,c===void 0?null:c)}function Va(t,i,o,c){var d=yi();c=c===void 0?null:c;var h=void 0;if(Sn!==null){var E=Sn.memoizedState;if(h=E.destroy,c!==null&&Wc(c,E.deps)){d.memoizedState=ko(i,o,h,c);return}}un.flags|=t,d.memoizedState=ko(1|i,o,h,c)}function Xh(t,i){return Ha(8390656,8,t,i)}function $c(t,i){return Va(2048,8,t,i)}function jh(t,i){return Va(4,2,t,i)}function Yh(t,i){return Va(4,4,t,i)}function qh(t,i){if(typeof i=="function")return t=t(),i(t),function(){i(null)};if(i!=null)return t=t(),i.current=t,function(){i.current=null}}function $h(t,i,o){return o=o!=null?o.concat([t]):null,Va(4,4,qh.bind(null,i,t),o)}function Kc(){}function Kh(t,i){var o=yi();i=i===void 0?null:i;var c=o.memoizedState;return c!==null&&i!==null&&Wc(i,c[1])?c[0]:(o.memoizedState=[t,i],t)}function Zh(t,i){var o=yi();i=i===void 0?null:i;var c=o.memoizedState;return c!==null&&i!==null&&Wc(i,c[1])?c[0]:(t=t(),o.memoizedState=[t,i],t)}function Jh(t,i,o){return(is&21)===0?(t.baseState&&(t.baseState=!1,Qn=!0),t.memoizedState=o):(bi(o,i)||(o=Ze(),un.lanes|=o,rs|=o,t.baseState=!0),i)}function Vg(t,i){var o=Dt;Dt=o!==0&&4>o?o:4,t(!0);var c=Gc.transition;Gc.transition={};try{t(!1),i()}finally{Dt=o,Gc.transition=c}}function Qh(){return yi().memoizedState}function Gg(t,i,o){var c=Ur(t);if(o={lane:c,action:o,hasEagerState:!1,eagerState:null,next:null},ep(t))tp(i,o);else if(o=Lh(t,i,o,c),o!==null){var d=Yn();Di(o,t,c,d),np(o,i,c)}}function Wg(t,i,o){var c=Ur(t),d={lane:c,action:o,hasEagerState:!1,eagerState:null,next:null};if(ep(t))tp(i,d);else{var h=t.alternate;if(t.lanes===0&&(h===null||h.lanes===0)&&(h=i.lastRenderedReducer,h!==null))try{var E=i.lastRenderedState,U=h(E,o);if(d.hasEagerState=!0,d.eagerState=U,bi(U,E)){var H=i.interleaved;H===null?(d.next=d,Oc(i)):(d.next=H.next,H.next=d),i.interleaved=d;return}}catch{}finally{}o=Lh(t,i,d,c),o!==null&&(d=Yn(),Di(o,t,c,d),np(o,i,c))}}function ep(t){var i=t.alternate;return t===un||i!==null&&i===un}function tp(t,i){Uo=za=!0;var o=t.pending;o===null?i.next=i:(i.next=o.next,o.next=i),t.pending=i}function np(t,i,o){if((o&4194240)!==0){var c=i.lanes;c&=t.pendingLanes,o|=c,i.lanes=o,Kn(t,o)}}var Ga={readContext:xi,useCallback:kn,useContext:kn,useEffect:kn,useImperativeHandle:kn,useInsertionEffect:kn,useLayoutEffect:kn,useMemo:kn,useReducer:kn,useRef:kn,useState:kn,useDebugValue:kn,useDeferredValue:kn,useTransition:kn,useMutableSource:kn,useSyncExternalStore:kn,useId:kn,unstable_isNewReconciler:!1},Xg={readContext:xi,useCallback:function(t,i){return Hi().memoizedState=[t,i===void 0?null:i],t},useContext:xi,useEffect:Xh,useImperativeHandle:function(t,i,o){return o=o!=null?o.concat([t]):null,Ha(4194308,4,qh.bind(null,i,t),o)},useLayoutEffect:function(t,i){return Ha(4194308,4,t,i)},useInsertionEffect:function(t,i){return Ha(4,2,t,i)},useMemo:function(t,i){var o=Hi();return i=i===void 0?null:i,t=t(),o.memoizedState=[t,i],t},useReducer:function(t,i,o){var c=Hi();return i=o!==void 0?o(i):i,c.memoizedState=c.baseState=i,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:i},c.queue=t,t=t.dispatch=Gg.bind(null,un,t),[c.memoizedState,t]},useRef:function(t){var i=Hi();return t={current:t},i.memoizedState=t},useState:Gh,useDebugValue:Kc,useDeferredValue:function(t){return Hi().memoizedState=t},useTransition:function(){var t=Gh(!1),i=t[0];return t=Vg.bind(null,t[1]),Hi().memoizedState=t,[i,t]},useMutableSource:function(){},useSyncExternalStore:function(t,i,o){var c=un,d=Hi();if(on){if(o===void 0)throw Error(n(407));o=o()}else{if(o=i(),Cn===null)throw Error(n(349));(is&30)!==0||kh(c,i,o)}d.memoizedState=o;var h={value:o,getSnapshot:i};return d.queue=h,Xh(zh.bind(null,c,h,t),[t]),c.flags|=2048,ko(9,Bh.bind(null,c,h,o,i),void 0,null),o},useId:function(){var t=Hi(),i=Cn.identifierPrefix;if(on){var o=rr,c=ir;o=(c&~(1<<32-ze(c)-1)).toString(32)+o,i=":"+i+"R"+o,o=Fo++,0<o&&(i+="H"+o.toString(32)),i+=":"}else o=Hg++,i=":"+i+"r"+o.toString(32)+":";return t.memoizedState=i},unstable_isNewReconciler:!1},jg={readContext:xi,useCallback:Kh,useContext:xi,useEffect:$c,useImperativeHandle:$h,useInsertionEffect:jh,useLayoutEffect:Yh,useMemo:Zh,useReducer:Yc,useRef:Wh,useState:function(){return Yc(Oo)},useDebugValue:Kc,useDeferredValue:function(t){var i=yi();return Jh(i,Sn.memoizedState,t)},useTransition:function(){var t=Yc(Oo)[0],i=yi().memoizedState;return[t,i]},useMutableSource:Fh,useSyncExternalStore:Oh,useId:Qh,unstable_isNewReconciler:!1},Yg={readContext:xi,useCallback:Kh,useContext:xi,useEffect:$c,useImperativeHandle:$h,useInsertionEffect:jh,useLayoutEffect:Yh,useMemo:Zh,useReducer:qc,useRef:Wh,useState:function(){return qc(Oo)},useDebugValue:Kc,useDeferredValue:function(t){var i=yi();return Sn===null?i.memoizedState=t:Jh(i,Sn.memoizedState,t)},useTransition:function(){var t=qc(Oo)[0],i=yi().memoizedState;return[t,i]},useMutableSource:Fh,useSyncExternalStore:Oh,useId:Qh,unstable_isNewReconciler:!1};function Ri(t,i){if(t&&t.defaultProps){i=he({},i),t=t.defaultProps;for(var o in t)i[o]===void 0&&(i[o]=t[o]);return i}return i}function Zc(t,i,o,c){i=t.memoizedState,o=o(c,i),o=o==null?i:he({},i,o),t.memoizedState=o,t.lanes===0&&(t.updateQueue.baseState=o)}var Wa={isMounted:function(t){return(t=t._reactInternals)?Ln(t)===t:!1},enqueueSetState:function(t,i,o){t=t._reactInternals;var c=Yn(),d=Ur(t),h=or(c,d);h.payload=i,o!=null&&(h.callback=o),i=Lr(t,h,d),i!==null&&(Di(i,t,d,c),Fa(i,t,d))},enqueueReplaceState:function(t,i,o){t=t._reactInternals;var c=Yn(),d=Ur(t),h=or(c,d);h.tag=1,h.payload=i,o!=null&&(h.callback=o),i=Lr(t,h,d),i!==null&&(Di(i,t,d,c),Fa(i,t,d))},enqueueForceUpdate:function(t,i){t=t._reactInternals;var o=Yn(),c=Ur(t),d=or(o,c);d.tag=2,i!=null&&(d.callback=i),i=Lr(t,d,c),i!==null&&(Di(i,t,c,o),Fa(i,t,c))}};function ip(t,i,o,c,d,h,E){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(c,h,E):i.prototype&&i.prototype.isPureReactComponent?!wo(o,c)||!wo(d,h):!0}function rp(t,i,o){var c=!1,d=Cr,h=i.contextType;return typeof h=="object"&&h!==null?h=xi(h):(d=Jn(i)?Jr:On.current,c=i.contextTypes,h=(c=c!=null)?Ps(t,d):Cr),i=new i(o,h),t.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,i.updater=Wa,t.stateNode=i,i._reactInternals=t,c&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=d,t.__reactInternalMemoizedMaskedChildContext=h),i}function sp(t,i,o,c){t=i.state,typeof i.componentWillReceiveProps=="function"&&i.componentWillReceiveProps(o,c),typeof i.UNSAFE_componentWillReceiveProps=="function"&&i.UNSAFE_componentWillReceiveProps(o,c),i.state!==t&&Wa.enqueueReplaceState(i,i.state,null)}function Jc(t,i,o,c){var d=t.stateNode;d.props=o,d.state=t.memoizedState,d.refs={},kc(t);var h=i.contextType;typeof h=="object"&&h!==null?d.context=xi(h):(h=Jn(i)?Jr:On.current,d.context=Ps(t,h)),d.state=t.memoizedState,h=i.getDerivedStateFromProps,typeof h=="function"&&(Zc(t,i,h,o),d.state=t.memoizedState),typeof i.getDerivedStateFromProps=="function"||typeof d.getSnapshotBeforeUpdate=="function"||typeof d.UNSAFE_componentWillMount!="function"&&typeof d.componentWillMount!="function"||(i=d.state,typeof d.componentWillMount=="function"&&d.componentWillMount(),typeof d.UNSAFE_componentWillMount=="function"&&d.UNSAFE_componentWillMount(),i!==d.state&&Wa.enqueueReplaceState(d,d.state,null),Oa(t,o,d,c),d.state=t.memoizedState),typeof d.componentDidMount=="function"&&(t.flags|=4194308)}function ks(t,i){try{var o="",c=i;do o+=Xe(c),c=c.return;while(c);var d=o}catch(h){d=`
Error generating stack: `+h.message+`
`+h.stack}return{value:t,source:i,stack:d,digest:null}}function Qc(t,i,o){return{value:t,source:null,stack:o??null,digest:i??null}}function eu(t,i){try{console.error(i.value)}catch(o){setTimeout(function(){throw o})}}var qg=typeof WeakMap=="function"?WeakMap:Map;function op(t,i,o){o=or(-1,o),o.tag=3,o.payload={element:null};var c=i.value;return o.callback=function(){Za||(Za=!0,mu=c),eu(t,i)},o}function ap(t,i,o){o=or(-1,o),o.tag=3;var c=t.type.getDerivedStateFromError;if(typeof c=="function"){var d=i.value;o.payload=function(){return c(d)},o.callback=function(){eu(t,i)}}var h=t.stateNode;return h!==null&&typeof h.componentDidCatch=="function"&&(o.callback=function(){eu(t,i),typeof c!="function"&&(Ir===null?Ir=new Set([this]):Ir.add(this));var E=i.stack;this.componentDidCatch(i.value,{componentStack:E!==null?E:""})}),o}function lp(t,i,o){var c=t.pingCache;if(c===null){c=t.pingCache=new qg;var d=new Set;c.set(i,d)}else d=c.get(i),d===void 0&&(d=new Set,c.set(i,d));d.has(o)||(d.add(o),t=l_.bind(null,t,i,o),i.then(t,t))}function cp(t){do{var i;if((i=t.tag===13)&&(i=t.memoizedState,i=i!==null?i.dehydrated!==null:!0),i)return t;t=t.return}while(t!==null);return null}function up(t,i,o,c,d){return(t.mode&1)===0?(t===i?t.flags|=65536:(t.flags|=128,o.flags|=131072,o.flags&=-52805,o.tag===1&&(o.alternate===null?o.tag=17:(i=or(-1,1),i.tag=2,Lr(o,i,1))),o.lanes|=1),t):(t.flags|=65536,t.lanes=d,t)}var $g=P.ReactCurrentOwner,Qn=!1;function jn(t,i,o,c){i.child=t===null?Ph(i,null,o,c):Ns(i,t.child,o,c)}function dp(t,i,o,c,d){o=o.render;var h=i.ref;return Fs(i,d),c=Xc(t,i,o,c,h,d),o=jc(),t!==null&&!Qn?(i.updateQueue=t.updateQueue,i.flags&=-2053,t.lanes&=~d,ar(t,i,d)):(on&&o&&Cc(i),i.flags|=1,jn(t,i,c,d),i.child)}function fp(t,i,o,c,d){if(t===null){var h=o.type;return typeof h=="function"&&!Mu(h)&&h.defaultProps===void 0&&o.compare===null&&o.defaultProps===void 0?(i.tag=15,i.type=h,hp(t,i,h,c,d)):(t=il(o.type,null,c,i,i.mode,d),t.ref=i.ref,t.return=i,i.child=t)}if(h=t.child,(t.lanes&d)===0){var E=h.memoizedProps;if(o=o.compare,o=o!==null?o:wo,o(E,c)&&t.ref===i.ref)return ar(t,i,d)}return i.flags|=1,t=Or(h,c),t.ref=i.ref,t.return=i,i.child=t}function hp(t,i,o,c,d){if(t!==null){var h=t.memoizedProps;if(wo(h,c)&&t.ref===i.ref)if(Qn=!1,i.pendingProps=c=h,(t.lanes&d)!==0)(t.flags&131072)!==0&&(Qn=!0);else return i.lanes=t.lanes,ar(t,i,d)}return tu(t,i,o,c,d)}function pp(t,i,o){var c=i.pendingProps,d=c.children,h=t!==null?t.memoizedState:null;if(c.mode==="hidden")if((i.mode&1)===0)i.memoizedState={baseLanes:0,cachePool:null,transitions:null},en(zs,ui),ui|=o;else{if((o&1073741824)===0)return t=h!==null?h.baseLanes|o:o,i.lanes=i.childLanes=1073741824,i.memoizedState={baseLanes:t,cachePool:null,transitions:null},i.updateQueue=null,en(zs,ui),ui|=t,null;i.memoizedState={baseLanes:0,cachePool:null,transitions:null},c=h!==null?h.baseLanes:o,en(zs,ui),ui|=c}else h!==null?(c=h.baseLanes|o,i.memoizedState=null):c=o,en(zs,ui),ui|=c;return jn(t,i,d,o),i.child}function mp(t,i){var o=i.ref;(t===null&&o!==null||t!==null&&t.ref!==o)&&(i.flags|=512,i.flags|=2097152)}function tu(t,i,o,c,d){var h=Jn(o)?Jr:On.current;return h=Ps(i,h),Fs(i,d),o=Xc(t,i,o,c,h,d),c=jc(),t!==null&&!Qn?(i.updateQueue=t.updateQueue,i.flags&=-2053,t.lanes&=~d,ar(t,i,d)):(on&&c&&Cc(i),i.flags|=1,jn(t,i,o,d),i.child)}function gp(t,i,o,c,d){if(Jn(o)){var h=!0;Ca(i)}else h=!1;if(Fs(i,d),i.stateNode===null)ja(t,i),rp(i,o,c),Jc(i,o,c,d),c=!0;else if(t===null){var E=i.stateNode,U=i.memoizedProps;E.props=U;var H=E.context,de=o.contextType;typeof de=="object"&&de!==null?de=xi(de):(de=Jn(o)?Jr:On.current,de=Ps(i,de));var Re=o.getDerivedStateFromProps,De=typeof Re=="function"||typeof E.getSnapshotBeforeUpdate=="function";De||typeof E.UNSAFE_componentWillReceiveProps!="function"&&typeof E.componentWillReceiveProps!="function"||(U!==c||H!==de)&&sp(i,E,c,de),Pr=!1;var Ce=i.memoizedState;E.state=Ce,Oa(i,c,E,d),H=i.memoizedState,U!==c||Ce!==H||Zn.current||Pr?(typeof Re=="function"&&(Zc(i,o,Re,c),H=i.memoizedState),(U=Pr||ip(i,o,U,c,Ce,H,de))?(De||typeof E.UNSAFE_componentWillMount!="function"&&typeof E.componentWillMount!="function"||(typeof E.componentWillMount=="function"&&E.componentWillMount(),typeof E.UNSAFE_componentWillMount=="function"&&E.UNSAFE_componentWillMount()),typeof E.componentDidMount=="function"&&(i.flags|=4194308)):(typeof E.componentDidMount=="function"&&(i.flags|=4194308),i.memoizedProps=c,i.memoizedState=H),E.props=c,E.state=H,E.context=de,c=U):(typeof E.componentDidMount=="function"&&(i.flags|=4194308),c=!1)}else{E=i.stateNode,Dh(t,i),U=i.memoizedProps,de=i.type===i.elementType?U:Ri(i.type,U),E.props=de,De=i.pendingProps,Ce=E.context,H=o.contextType,typeof H=="object"&&H!==null?H=xi(H):(H=Jn(o)?Jr:On.current,H=Ps(i,H));var Je=o.getDerivedStateFromProps;(Re=typeof Je=="function"||typeof E.getSnapshotBeforeUpdate=="function")||typeof E.UNSAFE_componentWillReceiveProps!="function"&&typeof E.componentWillReceiveProps!="function"||(U!==De||Ce!==H)&&sp(i,E,c,H),Pr=!1,Ce=i.memoizedState,E.state=Ce,Oa(i,c,E,d);var it=i.memoizedState;U!==De||Ce!==it||Zn.current||Pr?(typeof Je=="function"&&(Zc(i,o,Je,c),it=i.memoizedState),(de=Pr||ip(i,o,de,c,Ce,it,H)||!1)?(Re||typeof E.UNSAFE_componentWillUpdate!="function"&&typeof E.componentWillUpdate!="function"||(typeof E.componentWillUpdate=="function"&&E.componentWillUpdate(c,it,H),typeof E.UNSAFE_componentWillUpdate=="function"&&E.UNSAFE_componentWillUpdate(c,it,H)),typeof E.componentDidUpdate=="function"&&(i.flags|=4),typeof E.getSnapshotBeforeUpdate=="function"&&(i.flags|=1024)):(typeof E.componentDidUpdate!="function"||U===t.memoizedProps&&Ce===t.memoizedState||(i.flags|=4),typeof E.getSnapshotBeforeUpdate!="function"||U===t.memoizedProps&&Ce===t.memoizedState||(i.flags|=1024),i.memoizedProps=c,i.memoizedState=it),E.props=c,E.state=it,E.context=H,c=de):(typeof E.componentDidUpdate!="function"||U===t.memoizedProps&&Ce===t.memoizedState||(i.flags|=4),typeof E.getSnapshotBeforeUpdate!="function"||U===t.memoizedProps&&Ce===t.memoizedState||(i.flags|=1024),c=!1)}return nu(t,i,o,c,h,d)}function nu(t,i,o,c,d,h){mp(t,i);var E=(i.flags&128)!==0;if(!c&&!E)return d&&Sh(i,o,!1),ar(t,i,h);c=i.stateNode,$g.current=i;var U=E&&typeof o.getDerivedStateFromError!="function"?null:c.render();return i.flags|=1,t!==null&&E?(i.child=Ns(i,t.child,null,h),i.child=Ns(i,null,U,h)):jn(t,i,U,h),i.memoizedState=c.state,d&&Sh(i,o,!0),i.child}function _p(t){var i=t.stateNode;i.pendingContext?xh(t,i.pendingContext,i.pendingContext!==i.context):i.context&&xh(t,i.context,!1),Bc(t,i.containerInfo)}function vp(t,i,o,c,d){return Is(),Dc(d),i.flags|=256,jn(t,i,o,c),i.child}var iu={dehydrated:null,treeContext:null,retryLane:0};function ru(t){return{baseLanes:t,cachePool:null,transitions:null}}function xp(t,i,o){var c=i.pendingProps,d=cn.current,h=!1,E=(i.flags&128)!==0,U;if((U=E)||(U=t!==null&&t.memoizedState===null?!1:(d&2)!==0),U?(h=!0,i.flags&=-129):(t===null||t.memoizedState!==null)&&(d|=1),en(cn,d&1),t===null)return Lc(i),t=i.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?((i.mode&1)===0?i.lanes=1:t.data==="$!"?i.lanes=8:i.lanes=1073741824,null):(E=c.children,t=c.fallback,h?(c=i.mode,h=i.child,E={mode:"hidden",children:E},(c&1)===0&&h!==null?(h.childLanes=0,h.pendingProps=E):h=rl(E,c,0,null),t=ls(t,c,o,null),h.return=i,t.return=i,h.sibling=t,i.child=h,i.child.memoizedState=ru(o),i.memoizedState=iu,t):su(i,E));if(d=t.memoizedState,d!==null&&(U=d.dehydrated,U!==null))return Kg(t,i,E,c,U,d,o);if(h){h=c.fallback,E=i.mode,d=t.child,U=d.sibling;var H={mode:"hidden",children:c.children};return(E&1)===0&&i.child!==d?(c=i.child,c.childLanes=0,c.pendingProps=H,i.deletions=null):(c=Or(d,H),c.subtreeFlags=d.subtreeFlags&14680064),U!==null?h=Or(U,h):(h=ls(h,E,o,null),h.flags|=2),h.return=i,c.return=i,c.sibling=h,i.child=c,c=h,h=i.child,E=t.child.memoizedState,E=E===null?ru(o):{baseLanes:E.baseLanes|o,cachePool:null,transitions:E.transitions},h.memoizedState=E,h.childLanes=t.childLanes&~o,i.memoizedState=iu,c}return h=t.child,t=h.sibling,c=Or(h,{mode:"visible",children:c.children}),(i.mode&1)===0&&(c.lanes=o),c.return=i,c.sibling=null,t!==null&&(o=i.deletions,o===null?(i.deletions=[t],i.flags|=16):o.push(t)),i.child=c,i.memoizedState=null,c}function su(t,i){return i=rl({mode:"visible",children:i},t.mode,0,null),i.return=t,t.child=i}function Xa(t,i,o,c){return c!==null&&Dc(c),Ns(i,t.child,null,o),t=su(i,i.pendingProps.children),t.flags|=2,i.memoizedState=null,t}function Kg(t,i,o,c,d,h,E){if(o)return i.flags&256?(i.flags&=-257,c=Qc(Error(n(422))),Xa(t,i,E,c)):i.memoizedState!==null?(i.child=t.child,i.flags|=128,null):(h=c.fallback,d=i.mode,c=rl({mode:"visible",children:c.children},d,0,null),h=ls(h,d,E,null),h.flags|=2,c.return=i,h.return=i,c.sibling=h,i.child=c,(i.mode&1)!==0&&Ns(i,t.child,null,E),i.child.memoizedState=ru(E),i.memoizedState=iu,h);if((i.mode&1)===0)return Xa(t,i,E,null);if(d.data==="$!"){if(c=d.nextSibling&&d.nextSibling.dataset,c)var U=c.dgst;return c=U,h=Error(n(419)),c=Qc(h,c,void 0),Xa(t,i,E,c)}if(U=(E&t.childLanes)!==0,Qn||U){if(c=Cn,c!==null){switch(E&-E){case 4:d=2;break;case 16:d=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:d=32;break;case 536870912:d=268435456;break;default:d=0}d=(d&(c.suspendedLanes|E))!==0?0:d,d!==0&&d!==h.retryLane&&(h.retryLane=d,sr(t,d),Di(c,t,d,-1))}return Su(),c=Qc(Error(n(421))),Xa(t,i,E,c)}return d.data==="$?"?(i.flags|=128,i.child=t.child,i=c_.bind(null,t),d._reactRetry=i,null):(t=h.treeContext,ci=Ar(d.nextSibling),li=i,on=!0,Ci=null,t!==null&&(_i[vi++]=ir,_i[vi++]=rr,_i[vi++]=Qr,ir=t.id,rr=t.overflow,Qr=i),i=su(i,c.children),i.flags|=4096,i)}function yp(t,i,o){t.lanes|=i;var c=t.alternate;c!==null&&(c.lanes|=i),Fc(t.return,i,o)}function ou(t,i,o,c,d){var h=t.memoizedState;h===null?t.memoizedState={isBackwards:i,rendering:null,renderingStartTime:0,last:c,tail:o,tailMode:d}:(h.isBackwards=i,h.rendering=null,h.renderingStartTime=0,h.last=c,h.tail=o,h.tailMode=d)}function Sp(t,i,o){var c=i.pendingProps,d=c.revealOrder,h=c.tail;if(jn(t,i,c.children,o),c=cn.current,(c&2)!==0)c=c&1|2,i.flags|=128;else{if(t!==null&&(t.flags&128)!==0)e:for(t=i.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&yp(t,o,i);else if(t.tag===19)yp(t,o,i);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===i)break e;for(;t.sibling===null;){if(t.return===null||t.return===i)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}c&=1}if(en(cn,c),(i.mode&1)===0)i.memoizedState=null;else switch(d){case"forwards":for(o=i.child,d=null;o!==null;)t=o.alternate,t!==null&&ka(t)===null&&(d=o),o=o.sibling;o=d,o===null?(d=i.child,i.child=null):(d=o.sibling,o.sibling=null),ou(i,!1,d,o,h);break;case"backwards":for(o=null,d=i.child,i.child=null;d!==null;){if(t=d.alternate,t!==null&&ka(t)===null){i.child=d;break}t=d.sibling,d.sibling=o,o=d,d=t}ou(i,!0,o,null,h);break;case"together":ou(i,!1,null,null,void 0);break;default:i.memoizedState=null}return i.child}function ja(t,i){(i.mode&1)===0&&t!==null&&(t.alternate=null,i.alternate=null,i.flags|=2)}function ar(t,i,o){if(t!==null&&(i.dependencies=t.dependencies),rs|=i.lanes,(o&i.childLanes)===0)return null;if(t!==null&&i.child!==t.child)throw Error(n(153));if(i.child!==null){for(t=i.child,o=Or(t,t.pendingProps),i.child=o,o.return=i;t.sibling!==null;)t=t.sibling,o=o.sibling=Or(t,t.pendingProps),o.return=i;o.sibling=null}return i.child}function Zg(t,i,o){switch(i.tag){case 3:_p(i),Is();break;case 5:Uh(i);break;case 1:Jn(i.type)&&Ca(i);break;case 4:Bc(i,i.stateNode.containerInfo);break;case 10:var c=i.type._context,d=i.memoizedProps.value;en(Na,c._currentValue),c._currentValue=d;break;case 13:if(c=i.memoizedState,c!==null)return c.dehydrated!==null?(en(cn,cn.current&1),i.flags|=128,null):(o&i.child.childLanes)!==0?xp(t,i,o):(en(cn,cn.current&1),t=ar(t,i,o),t!==null?t.sibling:null);en(cn,cn.current&1);break;case 19:if(c=(o&i.childLanes)!==0,(t.flags&128)!==0){if(c)return Sp(t,i,o);i.flags|=128}if(d=i.memoizedState,d!==null&&(d.rendering=null,d.tail=null,d.lastEffect=null),en(cn,cn.current),c)break;return null;case 22:case 23:return i.lanes=0,pp(t,i,o)}return ar(t,i,o)}var Mp,au,Ep,wp;Mp=function(t,i){for(var o=i.child;o!==null;){if(o.tag===5||o.tag===6)t.appendChild(o.stateNode);else if(o.tag!==4&&o.child!==null){o.child.return=o,o=o.child;continue}if(o===i)break;for(;o.sibling===null;){if(o.return===null||o.return===i)return;o=o.return}o.sibling.return=o.return,o=o.sibling}},au=function(){},Ep=function(t,i,o,c){var d=t.memoizedProps;if(d!==c){t=i.stateNode,ns(zi.current);var h=null;switch(o){case"input":d=bt(t,d),c=bt(t,c),h=[];break;case"select":d=he({},d,{value:void 0}),c=he({},c,{value:void 0}),h=[];break;case"textarea":d=N(t,d),c=N(t,c),h=[];break;default:typeof d.onClick!="function"&&typeof c.onClick=="function"&&(t.onclick=Ta)}je(o,c);var E;o=null;for(de in d)if(!c.hasOwnProperty(de)&&d.hasOwnProperty(de)&&d[de]!=null)if(de==="style"){var U=d[de];for(E in U)U.hasOwnProperty(E)&&(o||(o={}),o[E]="")}else de!=="dangerouslySetInnerHTML"&&de!=="children"&&de!=="suppressContentEditableWarning"&&de!=="suppressHydrationWarning"&&de!=="autoFocus"&&(a.hasOwnProperty(de)?h||(h=[]):(h=h||[]).push(de,null));for(de in c){var H=c[de];if(U=d!=null?d[de]:void 0,c.hasOwnProperty(de)&&H!==U&&(H!=null||U!=null))if(de==="style")if(U){for(E in U)!U.hasOwnProperty(E)||H&&H.hasOwnProperty(E)||(o||(o={}),o[E]="");for(E in H)H.hasOwnProperty(E)&&U[E]!==H[E]&&(o||(o={}),o[E]=H[E])}else o||(h||(h=[]),h.push(de,o)),o=H;else de==="dangerouslySetInnerHTML"?(H=H?H.__html:void 0,U=U?U.__html:void 0,H!=null&&U!==H&&(h=h||[]).push(de,H)):de==="children"?typeof H!="string"&&typeof H!="number"||(h=h||[]).push(de,""+H):de!=="suppressContentEditableWarning"&&de!=="suppressHydrationWarning"&&(a.hasOwnProperty(de)?(H!=null&&de==="onScroll"&&nn("scroll",t),h||U===H||(h=[])):(h=h||[]).push(de,H))}o&&(h=h||[]).push("style",o);var de=h;(i.updateQueue=de)&&(i.flags|=4)}},wp=function(t,i,o,c){o!==c&&(i.flags|=4)};function Bo(t,i){if(!on)switch(t.tailMode){case"hidden":i=t.tail;for(var o=null;i!==null;)i.alternate!==null&&(o=i),i=i.sibling;o===null?t.tail=null:o.sibling=null;break;case"collapsed":o=t.tail;for(var c=null;o!==null;)o.alternate!==null&&(c=o),o=o.sibling;c===null?i||t.tail===null?t.tail=null:t.tail.sibling=null:c.sibling=null}}function Bn(t){var i=t.alternate!==null&&t.alternate.child===t.child,o=0,c=0;if(i)for(var d=t.child;d!==null;)o|=d.lanes|d.childLanes,c|=d.subtreeFlags&14680064,c|=d.flags&14680064,d.return=t,d=d.sibling;else for(d=t.child;d!==null;)o|=d.lanes|d.childLanes,c|=d.subtreeFlags,c|=d.flags,d.return=t,d=d.sibling;return t.subtreeFlags|=c,t.childLanes=o,i}function Jg(t,i,o){var c=i.pendingProps;switch(Rc(i),i.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Bn(i),null;case 1:return Jn(i.type)&&ba(),Bn(i),null;case 3:return c=i.stateNode,Os(),rn(Zn),rn(On),Vc(),c.pendingContext&&(c.context=c.pendingContext,c.pendingContext=null),(t===null||t.child===null)&&(Da(i)?i.flags|=4:t===null||t.memoizedState.isDehydrated&&(i.flags&256)===0||(i.flags|=1024,Ci!==null&&(vu(Ci),Ci=null))),au(t,i),Bn(i),null;case 5:zc(i);var d=ns(No.current);if(o=i.type,t!==null&&i.stateNode!=null)Ep(t,i,o,c,d),t.ref!==i.ref&&(i.flags|=512,i.flags|=2097152);else{if(!c){if(i.stateNode===null)throw Error(n(166));return Bn(i),null}if(t=ns(zi.current),Da(i)){c=i.stateNode,o=i.type;var h=i.memoizedProps;switch(c[Bi]=i,c[Ro]=h,t=(i.mode&1)!==0,o){case"dialog":nn("cancel",c),nn("close",c);break;case"iframe":case"object":case"embed":nn("load",c);break;case"video":case"audio":for(d=0;d<Ao.length;d++)nn(Ao[d],c);break;case"source":nn("error",c);break;case"img":case"image":case"link":nn("error",c),nn("load",c);break;case"details":nn("toggle",c);break;case"input":Ut(c,h),nn("invalid",c);break;case"select":c._wrapperState={wasMultiple:!!h.multiple},nn("invalid",c);break;case"textarea":dt(c,h),nn("invalid",c)}je(o,h),d=null;for(var E in h)if(h.hasOwnProperty(E)){var U=h[E];E==="children"?typeof U=="string"?c.textContent!==U&&(h.suppressHydrationWarning!==!0&&wa(c.textContent,U,t),d=["children",U]):typeof U=="number"&&c.textContent!==""+U&&(h.suppressHydrationWarning!==!0&&wa(c.textContent,U,t),d=["children",""+U]):a.hasOwnProperty(E)&&U!=null&&E==="onScroll"&&nn("scroll",c)}switch(o){case"input":lt(c),Gt(c,h,!0);break;case"textarea":lt(c),Ct(c);break;case"select":case"option":break;default:typeof h.onClick=="function"&&(c.onclick=Ta)}c=d,i.updateQueue=c,c!==null&&(i.flags|=4)}else{E=d.nodeType===9?d:d.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=R(o)),t==="http://www.w3.org/1999/xhtml"?o==="script"?(t=E.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof c.is=="string"?t=E.createElement(o,{is:c.is}):(t=E.createElement(o),o==="select"&&(E=t,c.multiple?E.multiple=!0:c.size&&(E.size=c.size))):t=E.createElementNS(t,o),t[Bi]=i,t[Ro]=c,Mp(t,i,!1,!1),i.stateNode=t;e:{switch(E=Ue(o,c),o){case"dialog":nn("cancel",t),nn("close",t),d=c;break;case"iframe":case"object":case"embed":nn("load",t),d=c;break;case"video":case"audio":for(d=0;d<Ao.length;d++)nn(Ao[d],t);d=c;break;case"source":nn("error",t),d=c;break;case"img":case"image":case"link":nn("error",t),nn("load",t),d=c;break;case"details":nn("toggle",t),d=c;break;case"input":Ut(t,c),d=bt(t,c),nn("invalid",t);break;case"option":d=c;break;case"select":t._wrapperState={wasMultiple:!!c.multiple},d=he({},c,{value:void 0}),nn("invalid",t);break;case"textarea":dt(t,c),d=N(t,c),nn("invalid",t);break;default:d=c}je(o,d),U=d;for(h in U)if(U.hasOwnProperty(h)){var H=U[h];h==="style"?Se(t,H):h==="dangerouslySetInnerHTML"?(H=H?H.__html:void 0,H!=null&&_e(t,H)):h==="children"?typeof H=="string"?(o!=="textarea"||H!=="")&&Me(t,H):typeof H=="number"&&Me(t,""+H):h!=="suppressContentEditableWarning"&&h!=="suppressHydrationWarning"&&h!=="autoFocus"&&(a.hasOwnProperty(h)?H!=null&&h==="onScroll"&&nn("scroll",t):H!=null&&L(t,h,H,E))}switch(o){case"input":lt(t),Gt(t,c,!1);break;case"textarea":lt(t),Ct(t);break;case"option":c.value!=null&&t.setAttribute("value",""+ye(c.value));break;case"select":t.multiple=!!c.multiple,h=c.value,h!=null?pe(t,!!c.multiple,h,!1):c.defaultValue!=null&&pe(t,!!c.multiple,c.defaultValue,!0);break;default:typeof d.onClick=="function"&&(t.onclick=Ta)}switch(o){case"button":case"input":case"select":case"textarea":c=!!c.autoFocus;break e;case"img":c=!0;break e;default:c=!1}}c&&(i.flags|=4)}i.ref!==null&&(i.flags|=512,i.flags|=2097152)}return Bn(i),null;case 6:if(t&&i.stateNode!=null)wp(t,i,t.memoizedProps,c);else{if(typeof c!="string"&&i.stateNode===null)throw Error(n(166));if(o=ns(No.current),ns(zi.current),Da(i)){if(c=i.stateNode,o=i.memoizedProps,c[Bi]=i,(h=c.nodeValue!==o)&&(t=li,t!==null))switch(t.tag){case 3:wa(c.nodeValue,o,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&wa(c.nodeValue,o,(t.mode&1)!==0)}h&&(i.flags|=4)}else c=(o.nodeType===9?o:o.ownerDocument).createTextNode(c),c[Bi]=i,i.stateNode=c}return Bn(i),null;case 13:if(rn(cn),c=i.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(on&&ci!==null&&(i.mode&1)!==0&&(i.flags&128)===0)bh(),Is(),i.flags|=98560,h=!1;else if(h=Da(i),c!==null&&c.dehydrated!==null){if(t===null){if(!h)throw Error(n(318));if(h=i.memoizedState,h=h!==null?h.dehydrated:null,!h)throw Error(n(317));h[Bi]=i}else Is(),(i.flags&128)===0&&(i.memoizedState=null),i.flags|=4;Bn(i),h=!1}else Ci!==null&&(vu(Ci),Ci=null),h=!0;if(!h)return i.flags&65536?i:null}return(i.flags&128)!==0?(i.lanes=o,i):(c=c!==null,c!==(t!==null&&t.memoizedState!==null)&&c&&(i.child.flags|=8192,(i.mode&1)!==0&&(t===null||(cn.current&1)!==0?Mn===0&&(Mn=3):Su())),i.updateQueue!==null&&(i.flags|=4),Bn(i),null);case 4:return Os(),au(t,i),t===null&&bo(i.stateNode.containerInfo),Bn(i),null;case 10:return Uc(i.type._context),Bn(i),null;case 17:return Jn(i.type)&&ba(),Bn(i),null;case 19:if(rn(cn),h=i.memoizedState,h===null)return Bn(i),null;if(c=(i.flags&128)!==0,E=h.rendering,E===null)if(c)Bo(h,!1);else{if(Mn!==0||t!==null&&(t.flags&128)!==0)for(t=i.child;t!==null;){if(E=ka(t),E!==null){for(i.flags|=128,Bo(h,!1),c=E.updateQueue,c!==null&&(i.updateQueue=c,i.flags|=4),i.subtreeFlags=0,c=o,o=i.child;o!==null;)h=o,t=c,h.flags&=14680066,E=h.alternate,E===null?(h.childLanes=0,h.lanes=t,h.child=null,h.subtreeFlags=0,h.memoizedProps=null,h.memoizedState=null,h.updateQueue=null,h.dependencies=null,h.stateNode=null):(h.childLanes=E.childLanes,h.lanes=E.lanes,h.child=E.child,h.subtreeFlags=0,h.deletions=null,h.memoizedProps=E.memoizedProps,h.memoizedState=E.memoizedState,h.updateQueue=E.updateQueue,h.type=E.type,t=E.dependencies,h.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),o=o.sibling;return en(cn,cn.current&1|2),i.child}t=t.sibling}h.tail!==null&&ln()>Hs&&(i.flags|=128,c=!0,Bo(h,!1),i.lanes=4194304)}else{if(!c)if(t=ka(E),t!==null){if(i.flags|=128,c=!0,o=t.updateQueue,o!==null&&(i.updateQueue=o,i.flags|=4),Bo(h,!0),h.tail===null&&h.tailMode==="hidden"&&!E.alternate&&!on)return Bn(i),null}else 2*ln()-h.renderingStartTime>Hs&&o!==1073741824&&(i.flags|=128,c=!0,Bo(h,!1),i.lanes=4194304);h.isBackwards?(E.sibling=i.child,i.child=E):(o=h.last,o!==null?o.sibling=E:i.child=E,h.last=E)}return h.tail!==null?(i=h.tail,h.rendering=i,h.tail=i.sibling,h.renderingStartTime=ln(),i.sibling=null,o=cn.current,en(cn,c?o&1|2:o&1),i):(Bn(i),null);case 22:case 23:return yu(),c=i.memoizedState!==null,t!==null&&t.memoizedState!==null!==c&&(i.flags|=8192),c&&(i.mode&1)!==0?(ui&1073741824)!==0&&(Bn(i),i.subtreeFlags&6&&(i.flags|=8192)):Bn(i),null;case 24:return null;case 25:return null}throw Error(n(156,i.tag))}function Qg(t,i){switch(Rc(i),i.tag){case 1:return Jn(i.type)&&ba(),t=i.flags,t&65536?(i.flags=t&-65537|128,i):null;case 3:return Os(),rn(Zn),rn(On),Vc(),t=i.flags,(t&65536)!==0&&(t&128)===0?(i.flags=t&-65537|128,i):null;case 5:return zc(i),null;case 13:if(rn(cn),t=i.memoizedState,t!==null&&t.dehydrated!==null){if(i.alternate===null)throw Error(n(340));Is()}return t=i.flags,t&65536?(i.flags=t&-65537|128,i):null;case 19:return rn(cn),null;case 4:return Os(),null;case 10:return Uc(i.type._context),null;case 22:case 23:return yu(),null;case 24:return null;default:return null}}var Ya=!1,zn=!1,e_=typeof WeakSet=="function"?WeakSet:Set,tt=null;function Bs(t,i){var o=t.ref;if(o!==null)if(typeof o=="function")try{o(null)}catch(c){dn(t,i,c)}else o.current=null}function lu(t,i,o){try{o()}catch(c){dn(t,i,c)}}var Tp=!1;function t_(t,i){if(yc=ha,t=ih(),fc(t)){if("selectionStart"in t)var o={start:t.selectionStart,end:t.selectionEnd};else e:{o=(o=t.ownerDocument)&&o.defaultView||window;var c=o.getSelection&&o.getSelection();if(c&&c.rangeCount!==0){o=c.anchorNode;var d=c.anchorOffset,h=c.focusNode;c=c.focusOffset;try{o.nodeType,h.nodeType}catch{o=null;break e}var E=0,U=-1,H=-1,de=0,Re=0,De=t,Ce=null;t:for(;;){for(var Je;De!==o||d!==0&&De.nodeType!==3||(U=E+d),De!==h||c!==0&&De.nodeType!==3||(H=E+c),De.nodeType===3&&(E+=De.nodeValue.length),(Je=De.firstChild)!==null;)Ce=De,De=Je;for(;;){if(De===t)break t;if(Ce===o&&++de===d&&(U=E),Ce===h&&++Re===c&&(H=E),(Je=De.nextSibling)!==null)break;De=Ce,Ce=De.parentNode}De=Je}o=U===-1||H===-1?null:{start:U,end:H}}else o=null}o=o||{start:0,end:0}}else o=null;for(Sc={focusedElem:t,selectionRange:o},ha=!1,tt=i;tt!==null;)if(i=tt,t=i.child,(i.subtreeFlags&1028)!==0&&t!==null)t.return=i,tt=t;else for(;tt!==null;){i=tt;try{var it=i.alternate;if((i.flags&1024)!==0)switch(i.tag){case 0:case 11:case 15:break;case 1:if(it!==null){var st=it.memoizedProps,pn=it.memoizedState,te=i.stateNode,X=te.getSnapshotBeforeUpdate(i.elementType===i.type?st:Ri(i.type,st),pn);te.__reactInternalSnapshotBeforeUpdate=X}break;case 3:var ae=i.stateNode.containerInfo;ae.nodeType===1?ae.textContent="":ae.nodeType===9&&ae.documentElement&&ae.removeChild(ae.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(n(163))}}catch(ke){dn(i,i.return,ke)}if(t=i.sibling,t!==null){t.return=i.return,tt=t;break}tt=i.return}return it=Tp,Tp=!1,it}function zo(t,i,o){var c=i.updateQueue;if(c=c!==null?c.lastEffect:null,c!==null){var d=c=c.next;do{if((d.tag&t)===t){var h=d.destroy;d.destroy=void 0,h!==void 0&&lu(i,o,h)}d=d.next}while(d!==c)}}function qa(t,i){if(i=i.updateQueue,i=i!==null?i.lastEffect:null,i!==null){var o=i=i.next;do{if((o.tag&t)===t){var c=o.create;o.destroy=c()}o=o.next}while(o!==i)}}function cu(t){var i=t.ref;if(i!==null){var o=t.stateNode;switch(t.tag){case 5:t=o;break;default:t=o}typeof i=="function"?i(t):i.current=t}}function Ap(t){var i=t.alternate;i!==null&&(t.alternate=null,Ap(i)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(i=t.stateNode,i!==null&&(delete i[Bi],delete i[Ro],delete i[Tc],delete i[Og],delete i[kg])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function bp(t){return t.tag===5||t.tag===3||t.tag===4}function Cp(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||bp(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function uu(t,i,o){var c=t.tag;if(c===5||c===6)t=t.stateNode,i?o.nodeType===8?o.parentNode.insertBefore(t,i):o.insertBefore(t,i):(o.nodeType===8?(i=o.parentNode,i.insertBefore(t,o)):(i=o,i.appendChild(t)),o=o._reactRootContainer,o!=null||i.onclick!==null||(i.onclick=Ta));else if(c!==4&&(t=t.child,t!==null))for(uu(t,i,o),t=t.sibling;t!==null;)uu(t,i,o),t=t.sibling}function du(t,i,o){var c=t.tag;if(c===5||c===6)t=t.stateNode,i?o.insertBefore(t,i):o.appendChild(t);else if(c!==4&&(t=t.child,t!==null))for(du(t,i,o),t=t.sibling;t!==null;)du(t,i,o),t=t.sibling}var In=null,Pi=!1;function Dr(t,i,o){for(o=o.child;o!==null;)Rp(t,i,o),o=o.sibling}function Rp(t,i,o){if(Ve&&typeof Ve.onCommitFiberUnmount=="function")try{Ve.onCommitFiberUnmount(se,o)}catch{}switch(o.tag){case 5:zn||Bs(o,i);case 6:var c=In,d=Pi;In=null,Dr(t,i,o),In=c,Pi=d,In!==null&&(Pi?(t=In,o=o.stateNode,t.nodeType===8?t.parentNode.removeChild(o):t.removeChild(o)):In.removeChild(o.stateNode));break;case 18:In!==null&&(Pi?(t=In,o=o.stateNode,t.nodeType===8?wc(t.parentNode,o):t.nodeType===1&&wc(t,o),vo(t)):wc(In,o.stateNode));break;case 4:c=In,d=Pi,In=o.stateNode.containerInfo,Pi=!0,Dr(t,i,o),In=c,Pi=d;break;case 0:case 11:case 14:case 15:if(!zn&&(c=o.updateQueue,c!==null&&(c=c.lastEffect,c!==null))){d=c=c.next;do{var h=d,E=h.destroy;h=h.tag,E!==void 0&&((h&2)!==0||(h&4)!==0)&&lu(o,i,E),d=d.next}while(d!==c)}Dr(t,i,o);break;case 1:if(!zn&&(Bs(o,i),c=o.stateNode,typeof c.componentWillUnmount=="function"))try{c.props=o.memoizedProps,c.state=o.memoizedState,c.componentWillUnmount()}catch(U){dn(o,i,U)}Dr(t,i,o);break;case 21:Dr(t,i,o);break;case 22:o.mode&1?(zn=(c=zn)||o.memoizedState!==null,Dr(t,i,o),zn=c):Dr(t,i,o);break;default:Dr(t,i,o)}}function Pp(t){var i=t.updateQueue;if(i!==null){t.updateQueue=null;var o=t.stateNode;o===null&&(o=t.stateNode=new e_),i.forEach(function(c){var d=u_.bind(null,t,c);o.has(c)||(o.add(c),c.then(d,d))})}}function Li(t,i){var o=i.deletions;if(o!==null)for(var c=0;c<o.length;c++){var d=o[c];try{var h=t,E=i,U=E;e:for(;U!==null;){switch(U.tag){case 5:In=U.stateNode,Pi=!1;break e;case 3:In=U.stateNode.containerInfo,Pi=!0;break e;case 4:In=U.stateNode.containerInfo,Pi=!0;break e}U=U.return}if(In===null)throw Error(n(160));Rp(h,E,d),In=null,Pi=!1;var H=d.alternate;H!==null&&(H.return=null),d.return=null}catch(de){dn(d,i,de)}}if(i.subtreeFlags&12854)for(i=i.child;i!==null;)Lp(i,t),i=i.sibling}function Lp(t,i){var o=t.alternate,c=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(Li(i,t),Vi(t),c&4){try{zo(3,t,t.return),qa(3,t)}catch(st){dn(t,t.return,st)}try{zo(5,t,t.return)}catch(st){dn(t,t.return,st)}}break;case 1:Li(i,t),Vi(t),c&512&&o!==null&&Bs(o,o.return);break;case 5:if(Li(i,t),Vi(t),c&512&&o!==null&&Bs(o,o.return),t.flags&32){var d=t.stateNode;try{Me(d,"")}catch(st){dn(t,t.return,st)}}if(c&4&&(d=t.stateNode,d!=null)){var h=t.memoizedProps,E=o!==null?o.memoizedProps:h,U=t.type,H=t.updateQueue;if(t.updateQueue=null,H!==null)try{U==="input"&&h.type==="radio"&&h.name!=null&&_t(d,h),Ue(U,E);var de=Ue(U,h);for(E=0;E<H.length;E+=2){var Re=H[E],De=H[E+1];Re==="style"?Se(d,De):Re==="dangerouslySetInnerHTML"?_e(d,De):Re==="children"?Me(d,De):L(d,Re,De,de)}switch(U){case"input":Bt(d,h);break;case"textarea":Oe(d,h);break;case"select":var Ce=d._wrapperState.wasMultiple;d._wrapperState.wasMultiple=!!h.multiple;var Je=h.value;Je!=null?pe(d,!!h.multiple,Je,!1):Ce!==!!h.multiple&&(h.defaultValue!=null?pe(d,!!h.multiple,h.defaultValue,!0):pe(d,!!h.multiple,h.multiple?[]:"",!1))}d[Ro]=h}catch(st){dn(t,t.return,st)}}break;case 6:if(Li(i,t),Vi(t),c&4){if(t.stateNode===null)throw Error(n(162));d=t.stateNode,h=t.memoizedProps;try{d.nodeValue=h}catch(st){dn(t,t.return,st)}}break;case 3:if(Li(i,t),Vi(t),c&4&&o!==null&&o.memoizedState.isDehydrated)try{vo(i.containerInfo)}catch(st){dn(t,t.return,st)}break;case 4:Li(i,t),Vi(t);break;case 13:Li(i,t),Vi(t),d=t.child,d.flags&8192&&(h=d.memoizedState!==null,d.stateNode.isHidden=h,!h||d.alternate!==null&&d.alternate.memoizedState!==null||(pu=ln())),c&4&&Pp(t);break;case 22:if(Re=o!==null&&o.memoizedState!==null,t.mode&1?(zn=(de=zn)||Re,Li(i,t),zn=de):Li(i,t),Vi(t),c&8192){if(de=t.memoizedState!==null,(t.stateNode.isHidden=de)&&!Re&&(t.mode&1)!==0)for(tt=t,Re=t.child;Re!==null;){for(De=tt=Re;tt!==null;){switch(Ce=tt,Je=Ce.child,Ce.tag){case 0:case 11:case 14:case 15:zo(4,Ce,Ce.return);break;case 1:Bs(Ce,Ce.return);var it=Ce.stateNode;if(typeof it.componentWillUnmount=="function"){c=Ce,o=Ce.return;try{i=c,it.props=i.memoizedProps,it.state=i.memoizedState,it.componentWillUnmount()}catch(st){dn(c,o,st)}}break;case 5:Bs(Ce,Ce.return);break;case 22:if(Ce.memoizedState!==null){Np(De);continue}}Je!==null?(Je.return=Ce,tt=Je):Np(De)}Re=Re.sibling}e:for(Re=null,De=t;;){if(De.tag===5){if(Re===null){Re=De;try{d=De.stateNode,de?(h=d.style,typeof h.setProperty=="function"?h.setProperty("display","none","important"):h.display="none"):(U=De.stateNode,H=De.memoizedProps.style,E=H!=null&&H.hasOwnProperty("display")?H.display:null,U.style.display=me("display",E))}catch(st){dn(t,t.return,st)}}}else if(De.tag===6){if(Re===null)try{De.stateNode.nodeValue=de?"":De.memoizedProps}catch(st){dn(t,t.return,st)}}else if((De.tag!==22&&De.tag!==23||De.memoizedState===null||De===t)&&De.child!==null){De.child.return=De,De=De.child;continue}if(De===t)break e;for(;De.sibling===null;){if(De.return===null||De.return===t)break e;Re===De&&(Re=null),De=De.return}Re===De&&(Re=null),De.sibling.return=De.return,De=De.sibling}}break;case 19:Li(i,t),Vi(t),c&4&&Pp(t);break;case 21:break;default:Li(i,t),Vi(t)}}function Vi(t){var i=t.flags;if(i&2){try{e:{for(var o=t.return;o!==null;){if(bp(o)){var c=o;break e}o=o.return}throw Error(n(160))}switch(c.tag){case 5:var d=c.stateNode;c.flags&32&&(Me(d,""),c.flags&=-33);var h=Cp(t);du(t,h,d);break;case 3:case 4:var E=c.stateNode.containerInfo,U=Cp(t);uu(t,U,E);break;default:throw Error(n(161))}}catch(H){dn(t,t.return,H)}t.flags&=-3}i&4096&&(t.flags&=-4097)}function n_(t,i,o){tt=t,Dp(t)}function Dp(t,i,o){for(var c=(t.mode&1)!==0;tt!==null;){var d=tt,h=d.child;if(d.tag===22&&c){var E=d.memoizedState!==null||Ya;if(!E){var U=d.alternate,H=U!==null&&U.memoizedState!==null||zn;U=Ya;var de=zn;if(Ya=E,(zn=H)&&!de)for(tt=d;tt!==null;)E=tt,H=E.child,E.tag===22&&E.memoizedState!==null?Up(d):H!==null?(H.return=E,tt=H):Up(d);for(;h!==null;)tt=h,Dp(h),h=h.sibling;tt=d,Ya=U,zn=de}Ip(t)}else(d.subtreeFlags&8772)!==0&&h!==null?(h.return=d,tt=h):Ip(t)}}function Ip(t){for(;tt!==null;){var i=tt;if((i.flags&8772)!==0){var o=i.alternate;try{if((i.flags&8772)!==0)switch(i.tag){case 0:case 11:case 15:zn||qa(5,i);break;case 1:var c=i.stateNode;if(i.flags&4&&!zn)if(o===null)c.componentDidMount();else{var d=i.elementType===i.type?o.memoizedProps:Ri(i.type,o.memoizedProps);c.componentDidUpdate(d,o.memoizedState,c.__reactInternalSnapshotBeforeUpdate)}var h=i.updateQueue;h!==null&&Nh(i,h,c);break;case 3:var E=i.updateQueue;if(E!==null){if(o=null,i.child!==null)switch(i.child.tag){case 5:o=i.child.stateNode;break;case 1:o=i.child.stateNode}Nh(i,E,o)}break;case 5:var U=i.stateNode;if(o===null&&i.flags&4){o=U;var H=i.memoizedProps;switch(i.type){case"button":case"input":case"select":case"textarea":H.autoFocus&&o.focus();break;case"img":H.src&&(o.src=H.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(i.memoizedState===null){var de=i.alternate;if(de!==null){var Re=de.memoizedState;if(Re!==null){var De=Re.dehydrated;De!==null&&vo(De)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(n(163))}zn||i.flags&512&&cu(i)}catch(Ce){dn(i,i.return,Ce)}}if(i===t){tt=null;break}if(o=i.sibling,o!==null){o.return=i.return,tt=o;break}tt=i.return}}function Np(t){for(;tt!==null;){var i=tt;if(i===t){tt=null;break}var o=i.sibling;if(o!==null){o.return=i.return,tt=o;break}tt=i.return}}function Up(t){for(;tt!==null;){var i=tt;try{switch(i.tag){case 0:case 11:case 15:var o=i.return;try{qa(4,i)}catch(H){dn(i,o,H)}break;case 1:var c=i.stateNode;if(typeof c.componentDidMount=="function"){var d=i.return;try{c.componentDidMount()}catch(H){dn(i,d,H)}}var h=i.return;try{cu(i)}catch(H){dn(i,h,H)}break;case 5:var E=i.return;try{cu(i)}catch(H){dn(i,E,H)}}}catch(H){dn(i,i.return,H)}if(i===t){tt=null;break}var U=i.sibling;if(U!==null){U.return=i.return,tt=U;break}tt=i.return}}var i_=Math.ceil,$a=P.ReactCurrentDispatcher,fu=P.ReactCurrentOwner,Si=P.ReactCurrentBatchConfig,Vt=0,Cn=null,_n=null,Nn=0,ui=0,zs=br(0),Mn=0,Ho=null,rs=0,Ka=0,hu=0,Vo=null,ei=null,pu=0,Hs=1/0,lr=null,Za=!1,mu=null,Ir=null,Ja=!1,Nr=null,Qa=0,Go=0,gu=null,el=-1,tl=0;function Yn(){return(Vt&6)!==0?ln():el!==-1?el:el=ln()}function Ur(t){return(t.mode&1)===0?1:(Vt&2)!==0&&Nn!==0?Nn&-Nn:zg.transition!==null?(tl===0&&(tl=Ze()),tl):(t=Dt,t!==0||(t=window.event,t=t===void 0?16:Of(t.type)),t)}function Di(t,i,o,c){if(50<Go)throw Go=0,gu=null,Error(n(185));Lt(t,o,c),((Vt&2)===0||t!==Cn)&&(t===Cn&&((Vt&2)===0&&(Ka|=o),Mn===4&&Fr(t,Nn)),ti(t,c),o===1&&Vt===0&&(i.mode&1)===0&&(Hs=ln()+500,Ra&&Rr()))}function ti(t,i){var o=t.callbackNode;Yt(t,i);var c=Qt(t,t===Cn?Nn:0);if(c===0)o!==null&&da(o),t.callbackNode=null,t.callbackPriority=0;else if(i=c&-c,t.callbackPriority!==i){if(o!=null&&da(o),i===1)t.tag===0?Bg(Op.bind(null,t)):Mh(Op.bind(null,t)),Ug(function(){(Vt&6)===0&&Rr()}),o=null;else{switch(er(c)){case 1:o=ho;break;case 4:o=A;break;case 16:o=q;break;case 536870912:o=oe;break;default:o=q}o=Xp(o,Fp.bind(null,t))}t.callbackPriority=i,t.callbackNode=o}}function Fp(t,i){if(el=-1,tl=0,(Vt&6)!==0)throw Error(n(327));var o=t.callbackNode;if(Vs()&&t.callbackNode!==o)return null;var c=Qt(t,t===Cn?Nn:0);if(c===0)return null;if((c&30)!==0||(c&t.expiredLanes)!==0||i)i=nl(t,c);else{i=c;var d=Vt;Vt|=2;var h=Bp();(Cn!==t||Nn!==i)&&(lr=null,Hs=ln()+500,os(t,i));do try{o_();break}catch(U){kp(t,U)}while(!0);Nc(),$a.current=h,Vt=d,_n!==null?i=0:(Cn=null,Nn=0,i=Mn)}if(i!==0){if(i===2&&(d=gn(t),d!==0&&(c=d,i=_u(t,d))),i===1)throw o=Ho,os(t,0),Fr(t,c),ti(t,ln()),o;if(i===6)Fr(t,c);else{if(d=t.current.alternate,(c&30)===0&&!r_(d)&&(i=nl(t,c),i===2&&(h=gn(t),h!==0&&(c=h,i=_u(t,h))),i===1))throw o=Ho,os(t,0),Fr(t,c),ti(t,ln()),o;switch(t.finishedWork=d,t.finishedLanes=c,i){case 0:case 1:throw Error(n(345));case 2:as(t,ei,lr);break;case 3:if(Fr(t,c),(c&130023424)===c&&(i=pu+500-ln(),10<i)){if(Qt(t,0)!==0)break;if(d=t.suspendedLanes,(d&c)!==c){Yn(),t.pingedLanes|=t.suspendedLanes&d;break}t.timeoutHandle=Ec(as.bind(null,t,ei,lr),i);break}as(t,ei,lr);break;case 4:if(Fr(t,c),(c&4194240)===c)break;for(i=t.eventTimes,d=-1;0<c;){var E=31-ze(c);h=1<<E,E=i[E],E>d&&(d=E),c&=~h}if(c=d,c=ln()-c,c=(120>c?120:480>c?480:1080>c?1080:1920>c?1920:3e3>c?3e3:4320>c?4320:1960*i_(c/1960))-c,10<c){t.timeoutHandle=Ec(as.bind(null,t,ei,lr),c);break}as(t,ei,lr);break;case 5:as(t,ei,lr);break;default:throw Error(n(329))}}}return ti(t,ln()),t.callbackNode===o?Fp.bind(null,t):null}function _u(t,i){var o=Vo;return t.current.memoizedState.isDehydrated&&(os(t,i).flags|=256),t=nl(t,i),t!==2&&(i=ei,ei=o,i!==null&&vu(i)),t}function vu(t){ei===null?ei=t:ei.push.apply(ei,t)}function r_(t){for(var i=t;;){if(i.flags&16384){var o=i.updateQueue;if(o!==null&&(o=o.stores,o!==null))for(var c=0;c<o.length;c++){var d=o[c],h=d.getSnapshot;d=d.value;try{if(!bi(h(),d))return!1}catch{return!1}}}if(o=i.child,i.subtreeFlags&16384&&o!==null)o.return=i,i=o;else{if(i===t)break;for(;i.sibling===null;){if(i.return===null||i.return===t)return!0;i=i.return}i.sibling.return=i.return,i=i.sibling}}return!0}function Fr(t,i){for(i&=~hu,i&=~Ka,t.suspendedLanes|=i,t.pingedLanes&=~i,t=t.expirationTimes;0<i;){var o=31-ze(i),c=1<<o;t[o]=-1,i&=~c}}function Op(t){if((Vt&6)!==0)throw Error(n(327));Vs();var i=Qt(t,0);if((i&1)===0)return ti(t,ln()),null;var o=nl(t,i);if(t.tag!==0&&o===2){var c=gn(t);c!==0&&(i=c,o=_u(t,c))}if(o===1)throw o=Ho,os(t,0),Fr(t,i),ti(t,ln()),o;if(o===6)throw Error(n(345));return t.finishedWork=t.current.alternate,t.finishedLanes=i,as(t,ei,lr),ti(t,ln()),null}function xu(t,i){var o=Vt;Vt|=1;try{return t(i)}finally{Vt=o,Vt===0&&(Hs=ln()+500,Ra&&Rr())}}function ss(t){Nr!==null&&Nr.tag===0&&(Vt&6)===0&&Vs();var i=Vt;Vt|=1;var o=Si.transition,c=Dt;try{if(Si.transition=null,Dt=1,t)return t()}finally{Dt=c,Si.transition=o,Vt=i,(Vt&6)===0&&Rr()}}function yu(){ui=zs.current,rn(zs)}function os(t,i){t.finishedWork=null,t.finishedLanes=0;var o=t.timeoutHandle;if(o!==-1&&(t.timeoutHandle=-1,Ng(o)),_n!==null)for(o=_n.return;o!==null;){var c=o;switch(Rc(c),c.tag){case 1:c=c.type.childContextTypes,c!=null&&ba();break;case 3:Os(),rn(Zn),rn(On),Vc();break;case 5:zc(c);break;case 4:Os();break;case 13:rn(cn);break;case 19:rn(cn);break;case 10:Uc(c.type._context);break;case 22:case 23:yu()}o=o.return}if(Cn=t,_n=t=Or(t.current,null),Nn=ui=i,Mn=0,Ho=null,hu=Ka=rs=0,ei=Vo=null,ts!==null){for(i=0;i<ts.length;i++)if(o=ts[i],c=o.interleaved,c!==null){o.interleaved=null;var d=c.next,h=o.pending;if(h!==null){var E=h.next;h.next=d,c.next=E}o.pending=c}ts=null}return t}function kp(t,i){do{var o=_n;try{if(Nc(),Ba.current=Ga,za){for(var c=un.memoizedState;c!==null;){var d=c.queue;d!==null&&(d.pending=null),c=c.next}za=!1}if(is=0,bn=Sn=un=null,Uo=!1,Fo=0,fu.current=null,o===null||o.return===null){Mn=1,Ho=i,_n=null;break}e:{var h=t,E=o.return,U=o,H=i;if(i=Nn,U.flags|=32768,H!==null&&typeof H=="object"&&typeof H.then=="function"){var de=H,Re=U,De=Re.tag;if((Re.mode&1)===0&&(De===0||De===11||De===15)){var Ce=Re.alternate;Ce?(Re.updateQueue=Ce.updateQueue,Re.memoizedState=Ce.memoizedState,Re.lanes=Ce.lanes):(Re.updateQueue=null,Re.memoizedState=null)}var Je=cp(E);if(Je!==null){Je.flags&=-257,up(Je,E,U,h,i),Je.mode&1&&lp(h,de,i),i=Je,H=de;var it=i.updateQueue;if(it===null){var st=new Set;st.add(H),i.updateQueue=st}else it.add(H);break e}else{if((i&1)===0){lp(h,de,i),Su();break e}H=Error(n(426))}}else if(on&&U.mode&1){var pn=cp(E);if(pn!==null){(pn.flags&65536)===0&&(pn.flags|=256),up(pn,E,U,h,i),Dc(ks(H,U));break e}}h=H=ks(H,U),Mn!==4&&(Mn=2),Vo===null?Vo=[h]:Vo.push(h),h=E;do{switch(h.tag){case 3:h.flags|=65536,i&=-i,h.lanes|=i;var te=op(h,H,i);Ih(h,te);break e;case 1:U=H;var X=h.type,ae=h.stateNode;if((h.flags&128)===0&&(typeof X.getDerivedStateFromError=="function"||ae!==null&&typeof ae.componentDidCatch=="function"&&(Ir===null||!Ir.has(ae)))){h.flags|=65536,i&=-i,h.lanes|=i;var ke=ap(h,U,i);Ih(h,ke);break e}}h=h.return}while(h!==null)}Hp(o)}catch(at){i=at,_n===o&&o!==null&&(_n=o=o.return);continue}break}while(!0)}function Bp(){var t=$a.current;return $a.current=Ga,t===null?Ga:t}function Su(){(Mn===0||Mn===3||Mn===2)&&(Mn=4),Cn===null||(rs&268435455)===0&&(Ka&268435455)===0||Fr(Cn,Nn)}function nl(t,i){var o=Vt;Vt|=2;var c=Bp();(Cn!==t||Nn!==i)&&(lr=null,os(t,i));do try{s_();break}catch(d){kp(t,d)}while(!0);if(Nc(),Vt=o,$a.current=c,_n!==null)throw Error(n(261));return Cn=null,Nn=0,Mn}function s_(){for(;_n!==null;)zp(_n)}function o_(){for(;_n!==null&&!Jl();)zp(_n)}function zp(t){var i=Wp(t.alternate,t,ui);t.memoizedProps=t.pendingProps,i===null?Hp(t):_n=i,fu.current=null}function Hp(t){var i=t;do{var o=i.alternate;if(t=i.return,(i.flags&32768)===0){if(o=Jg(o,i,ui),o!==null){_n=o;return}}else{if(o=Qg(o,i),o!==null){o.flags&=32767,_n=o;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{Mn=6,_n=null;return}}if(i=i.sibling,i!==null){_n=i;return}_n=i=t}while(i!==null);Mn===0&&(Mn=5)}function as(t,i,o){var c=Dt,d=Si.transition;try{Si.transition=null,Dt=1,a_(t,i,o,c)}finally{Si.transition=d,Dt=c}return null}function a_(t,i,o,c){do Vs();while(Nr!==null);if((Vt&6)!==0)throw Error(n(327));o=t.finishedWork;var d=t.finishedLanes;if(o===null)return null;if(t.finishedWork=null,t.finishedLanes=0,o===t.current)throw Error(n(177));t.callbackNode=null,t.callbackPriority=0;var h=o.lanes|o.childLanes;if($n(t,h),t===Cn&&(_n=Cn=null,Nn=0),(o.subtreeFlags&2064)===0&&(o.flags&2064)===0||Ja||(Ja=!0,Xp(q,function(){return Vs(),null})),h=(o.flags&15990)!==0,(o.subtreeFlags&15990)!==0||h){h=Si.transition,Si.transition=null;var E=Dt;Dt=1;var U=Vt;Vt|=4,fu.current=null,t_(t,o),Lp(o,t),bg(Sc),ha=!!yc,Sc=yc=null,t.current=o,n_(o),Ql(),Vt=U,Dt=E,Si.transition=h}else t.current=o;if(Ja&&(Ja=!1,Nr=t,Qa=d),h=t.pendingLanes,h===0&&(Ir=null),Qe(o.stateNode),ti(t,ln()),i!==null)for(c=t.onRecoverableError,o=0;o<i.length;o++)d=i[o],c(d.value,{componentStack:d.stack,digest:d.digest});if(Za)throw Za=!1,t=mu,mu=null,t;return(Qa&1)!==0&&t.tag!==0&&Vs(),h=t.pendingLanes,(h&1)!==0?t===gu?Go++:(Go=0,gu=t):Go=0,Rr(),null}function Vs(){if(Nr!==null){var t=er(Qa),i=Si.transition,o=Dt;try{if(Si.transition=null,Dt=16>t?16:t,Nr===null)var c=!1;else{if(t=Nr,Nr=null,Qa=0,(Vt&6)!==0)throw Error(n(331));var d=Vt;for(Vt|=4,tt=t.current;tt!==null;){var h=tt,E=h.child;if((tt.flags&16)!==0){var U=h.deletions;if(U!==null){for(var H=0;H<U.length;H++){var de=U[H];for(tt=de;tt!==null;){var Re=tt;switch(Re.tag){case 0:case 11:case 15:zo(8,Re,h)}var De=Re.child;if(De!==null)De.return=Re,tt=De;else for(;tt!==null;){Re=tt;var Ce=Re.sibling,Je=Re.return;if(Ap(Re),Re===de){tt=null;break}if(Ce!==null){Ce.return=Je,tt=Ce;break}tt=Je}}}var it=h.alternate;if(it!==null){var st=it.child;if(st!==null){it.child=null;do{var pn=st.sibling;st.sibling=null,st=pn}while(st!==null)}}tt=h}}if((h.subtreeFlags&2064)!==0&&E!==null)E.return=h,tt=E;else e:for(;tt!==null;){if(h=tt,(h.flags&2048)!==0)switch(h.tag){case 0:case 11:case 15:zo(9,h,h.return)}var te=h.sibling;if(te!==null){te.return=h.return,tt=te;break e}tt=h.return}}var X=t.current;for(tt=X;tt!==null;){E=tt;var ae=E.child;if((E.subtreeFlags&2064)!==0&&ae!==null)ae.return=E,tt=ae;else e:for(E=X;tt!==null;){if(U=tt,(U.flags&2048)!==0)try{switch(U.tag){case 0:case 11:case 15:qa(9,U)}}catch(at){dn(U,U.return,at)}if(U===E){tt=null;break e}var ke=U.sibling;if(ke!==null){ke.return=U.return,tt=ke;break e}tt=U.return}}if(Vt=d,Rr(),Ve&&typeof Ve.onPostCommitFiberRoot=="function")try{Ve.onPostCommitFiberRoot(se,t)}catch{}c=!0}return c}finally{Dt=o,Si.transition=i}}return!1}function Vp(t,i,o){i=ks(o,i),i=op(t,i,1),t=Lr(t,i,1),i=Yn(),t!==null&&(Lt(t,1,i),ti(t,i))}function dn(t,i,o){if(t.tag===3)Vp(t,t,o);else for(;i!==null;){if(i.tag===3){Vp(i,t,o);break}else if(i.tag===1){var c=i.stateNode;if(typeof i.type.getDerivedStateFromError=="function"||typeof c.componentDidCatch=="function"&&(Ir===null||!Ir.has(c))){t=ks(o,t),t=ap(i,t,1),i=Lr(i,t,1),t=Yn(),i!==null&&(Lt(i,1,t),ti(i,t));break}}i=i.return}}function l_(t,i,o){var c=t.pingCache;c!==null&&c.delete(i),i=Yn(),t.pingedLanes|=t.suspendedLanes&o,Cn===t&&(Nn&o)===o&&(Mn===4||Mn===3&&(Nn&130023424)===Nn&&500>ln()-pu?os(t,0):hu|=o),ti(t,i)}function Gp(t,i){i===0&&((t.mode&1)===0?i=1:(i=ot,ot<<=1,(ot&130023424)===0&&(ot=4194304)));var o=Yn();t=sr(t,i),t!==null&&(Lt(t,i,o),ti(t,o))}function c_(t){var i=t.memoizedState,o=0;i!==null&&(o=i.retryLane),Gp(t,o)}function u_(t,i){var o=0;switch(t.tag){case 13:var c=t.stateNode,d=t.memoizedState;d!==null&&(o=d.retryLane);break;case 19:c=t.stateNode;break;default:throw Error(n(314))}c!==null&&c.delete(i),Gp(t,o)}var Wp;Wp=function(t,i,o){if(t!==null)if(t.memoizedProps!==i.pendingProps||Zn.current)Qn=!0;else{if((t.lanes&o)===0&&(i.flags&128)===0)return Qn=!1,Zg(t,i,o);Qn=(t.flags&131072)!==0}else Qn=!1,on&&(i.flags&1048576)!==0&&Eh(i,La,i.index);switch(i.lanes=0,i.tag){case 2:var c=i.type;ja(t,i),t=i.pendingProps;var d=Ps(i,On.current);Fs(i,o),d=Xc(null,i,c,t,d,o);var h=jc();return i.flags|=1,typeof d=="object"&&d!==null&&typeof d.render=="function"&&d.$$typeof===void 0?(i.tag=1,i.memoizedState=null,i.updateQueue=null,Jn(c)?(h=!0,Ca(i)):h=!1,i.memoizedState=d.state!==null&&d.state!==void 0?d.state:null,kc(i),d.updater=Wa,i.stateNode=d,d._reactInternals=i,Jc(i,c,t,o),i=nu(null,i,c,!0,h,o)):(i.tag=0,on&&h&&Cc(i),jn(null,i,d,o),i=i.child),i;case 16:c=i.elementType;e:{switch(ja(t,i),t=i.pendingProps,d=c._init,c=d(c._payload),i.type=c,d=i.tag=f_(c),t=Ri(c,t),d){case 0:i=tu(null,i,c,t,o);break e;case 1:i=gp(null,i,c,t,o);break e;case 11:i=dp(null,i,c,t,o);break e;case 14:i=fp(null,i,c,Ri(c.type,t),o);break e}throw Error(n(306,c,""))}return i;case 0:return c=i.type,d=i.pendingProps,d=i.elementType===c?d:Ri(c,d),tu(t,i,c,d,o);case 1:return c=i.type,d=i.pendingProps,d=i.elementType===c?d:Ri(c,d),gp(t,i,c,d,o);case 3:e:{if(_p(i),t===null)throw Error(n(387));c=i.pendingProps,h=i.memoizedState,d=h.element,Dh(t,i),Oa(i,c,null,o);var E=i.memoizedState;if(c=E.element,h.isDehydrated)if(h={element:c,isDehydrated:!1,cache:E.cache,pendingSuspenseBoundaries:E.pendingSuspenseBoundaries,transitions:E.transitions},i.updateQueue.baseState=h,i.memoizedState=h,i.flags&256){d=ks(Error(n(423)),i),i=vp(t,i,c,o,d);break e}else if(c!==d){d=ks(Error(n(424)),i),i=vp(t,i,c,o,d);break e}else for(ci=Ar(i.stateNode.containerInfo.firstChild),li=i,on=!0,Ci=null,o=Ph(i,null,c,o),i.child=o;o;)o.flags=o.flags&-3|4096,o=o.sibling;else{if(Is(),c===d){i=ar(t,i,o);break e}jn(t,i,c,o)}i=i.child}return i;case 5:return Uh(i),t===null&&Lc(i),c=i.type,d=i.pendingProps,h=t!==null?t.memoizedProps:null,E=d.children,Mc(c,d)?E=null:h!==null&&Mc(c,h)&&(i.flags|=32),mp(t,i),jn(t,i,E,o),i.child;case 6:return t===null&&Lc(i),null;case 13:return xp(t,i,o);case 4:return Bc(i,i.stateNode.containerInfo),c=i.pendingProps,t===null?i.child=Ns(i,null,c,o):jn(t,i,c,o),i.child;case 11:return c=i.type,d=i.pendingProps,d=i.elementType===c?d:Ri(c,d),dp(t,i,c,d,o);case 7:return jn(t,i,i.pendingProps,o),i.child;case 8:return jn(t,i,i.pendingProps.children,o),i.child;case 12:return jn(t,i,i.pendingProps.children,o),i.child;case 10:e:{if(c=i.type._context,d=i.pendingProps,h=i.memoizedProps,E=d.value,en(Na,c._currentValue),c._currentValue=E,h!==null)if(bi(h.value,E)){if(h.children===d.children&&!Zn.current){i=ar(t,i,o);break e}}else for(h=i.child,h!==null&&(h.return=i);h!==null;){var U=h.dependencies;if(U!==null){E=h.child;for(var H=U.firstContext;H!==null;){if(H.context===c){if(h.tag===1){H=or(-1,o&-o),H.tag=2;var de=h.updateQueue;if(de!==null){de=de.shared;var Re=de.pending;Re===null?H.next=H:(H.next=Re.next,Re.next=H),de.pending=H}}h.lanes|=o,H=h.alternate,H!==null&&(H.lanes|=o),Fc(h.return,o,i),U.lanes|=o;break}H=H.next}}else if(h.tag===10)E=h.type===i.type?null:h.child;else if(h.tag===18){if(E=h.return,E===null)throw Error(n(341));E.lanes|=o,U=E.alternate,U!==null&&(U.lanes|=o),Fc(E,o,i),E=h.sibling}else E=h.child;if(E!==null)E.return=h;else for(E=h;E!==null;){if(E===i){E=null;break}if(h=E.sibling,h!==null){h.return=E.return,E=h;break}E=E.return}h=E}jn(t,i,d.children,o),i=i.child}return i;case 9:return d=i.type,c=i.pendingProps.children,Fs(i,o),d=xi(d),c=c(d),i.flags|=1,jn(t,i,c,o),i.child;case 14:return c=i.type,d=Ri(c,i.pendingProps),d=Ri(c.type,d),fp(t,i,c,d,o);case 15:return hp(t,i,i.type,i.pendingProps,o);case 17:return c=i.type,d=i.pendingProps,d=i.elementType===c?d:Ri(c,d),ja(t,i),i.tag=1,Jn(c)?(t=!0,Ca(i)):t=!1,Fs(i,o),rp(i,c,d),Jc(i,c,d,o),nu(null,i,c,!0,t,o);case 19:return Sp(t,i,o);case 22:return pp(t,i,o)}throw Error(n(156,i.tag))};function Xp(t,i){return ua(t,i)}function d_(t,i,o,c){this.tag=t,this.key=o,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=i,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=c,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Mi(t,i,o,c){return new d_(t,i,o,c)}function Mu(t){return t=t.prototype,!(!t||!t.isReactComponent)}function f_(t){if(typeof t=="function")return Mu(t)?1:0;if(t!=null){if(t=t.$$typeof,t===Y)return 11;if(t===W)return 14}return 2}function Or(t,i){var o=t.alternate;return o===null?(o=Mi(t.tag,i,t.key,t.mode),o.elementType=t.elementType,o.type=t.type,o.stateNode=t.stateNode,o.alternate=t,t.alternate=o):(o.pendingProps=i,o.type=t.type,o.flags=0,o.subtreeFlags=0,o.deletions=null),o.flags=t.flags&14680064,o.childLanes=t.childLanes,o.lanes=t.lanes,o.child=t.child,o.memoizedProps=t.memoizedProps,o.memoizedState=t.memoizedState,o.updateQueue=t.updateQueue,i=t.dependencies,o.dependencies=i===null?null:{lanes:i.lanes,firstContext:i.firstContext},o.sibling=t.sibling,o.index=t.index,o.ref=t.ref,o}function il(t,i,o,c,d,h){var E=2;if(c=t,typeof t=="function")Mu(t)&&(E=1);else if(typeof t=="string")E=5;else e:switch(t){case k:return ls(o.children,d,h,i);case w:E=8,d|=8;break;case I:return t=Mi(12,o,i,d|2),t.elementType=I,t.lanes=h,t;case le:return t=Mi(13,o,i,d),t.elementType=le,t.lanes=h,t;case ge:return t=Mi(19,o,i,d),t.elementType=ge,t.lanes=h,t;case $:return rl(o,d,h,i);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case j:E=10;break e;case O:E=9;break e;case Y:E=11;break e;case W:E=14;break e;case ne:E=16,c=null;break e}throw Error(n(130,t==null?t:typeof t,""))}return i=Mi(E,o,i,d),i.elementType=t,i.type=c,i.lanes=h,i}function ls(t,i,o,c){return t=Mi(7,t,c,i),t.lanes=o,t}function rl(t,i,o,c){return t=Mi(22,t,c,i),t.elementType=$,t.lanes=o,t.stateNode={isHidden:!1},t}function Eu(t,i,o){return t=Mi(6,t,null,i),t.lanes=o,t}function wu(t,i,o){return i=Mi(4,t.children!==null?t.children:[],t.key,i),i.lanes=o,i.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},i}function h_(t,i,o,c,d){this.tag=i,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Dn(0),this.expirationTimes=Dn(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Dn(0),this.identifierPrefix=c,this.onRecoverableError=d,this.mutableSourceEagerHydrationData=null}function Tu(t,i,o,c,d,h,E,U,H){return t=new h_(t,i,o,U,H),i===1?(i=1,h===!0&&(i|=8)):i=0,h=Mi(3,null,null,i),t.current=h,h.stateNode=t,h.memoizedState={element:c,isDehydrated:o,cache:null,transitions:null,pendingSuspenseBoundaries:null},kc(h),t}function p_(t,i,o){var c=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:D,key:c==null?null:""+c,children:t,containerInfo:i,implementation:o}}function jp(t){if(!t)return Cr;t=t._reactInternals;e:{if(Ln(t)!==t||t.tag!==1)throw Error(n(170));var i=t;do{switch(i.tag){case 3:i=i.stateNode.context;break e;case 1:if(Jn(i.type)){i=i.stateNode.__reactInternalMemoizedMergedChildContext;break e}}i=i.return}while(i!==null);throw Error(n(171))}if(t.tag===1){var o=t.type;if(Jn(o))return yh(t,o,i)}return i}function Yp(t,i,o,c,d,h,E,U,H){return t=Tu(o,c,!0,t,d,h,E,U,H),t.context=jp(null),o=t.current,c=Yn(),d=Ur(o),h=or(c,d),h.callback=i??null,Lr(o,h,d),t.current.lanes=d,Lt(t,d,c),ti(t,c),t}function sl(t,i,o,c){var d=i.current,h=Yn(),E=Ur(d);return o=jp(o),i.context===null?i.context=o:i.pendingContext=o,i=or(h,E),i.payload={element:t},c=c===void 0?null:c,c!==null&&(i.callback=c),t=Lr(d,i,E),t!==null&&(Di(t,d,E,h),Fa(t,d,E)),E}function ol(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function qp(t,i){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var o=t.retryLane;t.retryLane=o!==0&&o<i?o:i}}function Au(t,i){qp(t,i),(t=t.alternate)&&qp(t,i)}function m_(){return null}var $p=typeof reportError=="function"?reportError:function(t){console.error(t)};function bu(t){this._internalRoot=t}al.prototype.render=bu.prototype.render=function(t){var i=this._internalRoot;if(i===null)throw Error(n(409));sl(t,i,null,null)},al.prototype.unmount=bu.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var i=t.containerInfo;ss(function(){sl(null,t,null,null)}),i[tr]=null}};function al(t){this._internalRoot=t}al.prototype.unstable_scheduleHydration=function(t){if(t){var i=qt();t={blockedOn:null,target:t,priority:i};for(var o=0;o<Er.length&&i!==0&&i<Er[o].priority;o++);Er.splice(o,0,t),o===0&&Uf(t)}};function Cu(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function ll(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function Kp(){}function g_(t,i,o,c,d){if(d){if(typeof c=="function"){var h=c;c=function(){var de=ol(E);h.call(de)}}var E=Yp(i,c,t,0,null,!1,!1,"",Kp);return t._reactRootContainer=E,t[tr]=E.current,bo(t.nodeType===8?t.parentNode:t),ss(),E}for(;d=t.lastChild;)t.removeChild(d);if(typeof c=="function"){var U=c;c=function(){var de=ol(H);U.call(de)}}var H=Tu(t,0,!1,null,null,!1,!1,"",Kp);return t._reactRootContainer=H,t[tr]=H.current,bo(t.nodeType===8?t.parentNode:t),ss(function(){sl(i,H,o,c)}),H}function cl(t,i,o,c,d){var h=o._reactRootContainer;if(h){var E=h;if(typeof d=="function"){var U=d;d=function(){var H=ol(E);U.call(H)}}sl(i,E,t,d)}else E=g_(o,i,t,d,c);return ol(E)}jt=function(t){switch(t.tag){case 3:var i=t.stateNode;if(i.current.memoizedState.isDehydrated){var o=zt(i.pendingLanes);o!==0&&(Kn(i,o|1),ti(i,ln()),(Vt&6)===0&&(Hs=ln()+500,Rr()))}break;case 13:ss(function(){var c=sr(t,1);if(c!==null){var d=Yn();Di(c,t,1,d)}}),Au(t,1)}},tn=function(t){if(t.tag===13){var i=sr(t,134217728);if(i!==null){var o=Yn();Di(i,t,134217728,o)}Au(t,134217728)}},Ti=function(t){if(t.tag===13){var i=Ur(t),o=sr(t,i);if(o!==null){var c=Yn();Di(o,t,i,c)}Au(t,i)}},qt=function(){return Dt},Ai=function(t,i){var o=Dt;try{return Dt=t,i()}finally{Dt=o}},ht=function(t,i,o){switch(i){case"input":if(Bt(t,o),i=o.name,o.type==="radio"&&i!=null){for(o=t;o.parentNode;)o=o.parentNode;for(o=o.querySelectorAll("input[name="+JSON.stringify(""+i)+'][type="radio"]'),i=0;i<o.length;i++){var c=o[i];if(c!==t&&c.form===t.form){var d=Aa(c);if(!d)throw Error(n(90));Nt(c),Bt(c,d)}}}break;case"textarea":Oe(t,o);break;case"select":i=o.value,i!=null&&pe(t,!!o.multiple,i,!1)}},Z=xu,re=ss;var __={usingClientEntryPoint:!1,Events:[Po,Cs,Aa,ve,ee,xu]},Wo={findFiberByHostInstance:Zr,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},v_={bundleType:Wo.bundleType,version:Wo.version,rendererPackageName:Wo.rendererPackageName,rendererConfig:Wo.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:P.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=gi(t),t===null?null:t.stateNode},findFiberByHostInstance:Wo.findFiberByHostInstance||m_,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var ul=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!ul.isDisabled&&ul.supportsFiber)try{se=ul.inject(v_),Ve=ul}catch{}}return ni.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=__,ni.createPortal=function(t,i){var o=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Cu(i))throw Error(n(200));return p_(t,i,null,o)},ni.createRoot=function(t,i){if(!Cu(t))throw Error(n(299));var o=!1,c="",d=$p;return i!=null&&(i.unstable_strictMode===!0&&(o=!0),i.identifierPrefix!==void 0&&(c=i.identifierPrefix),i.onRecoverableError!==void 0&&(d=i.onRecoverableError)),i=Tu(t,1,!1,null,null,o,!1,c,d),t[tr]=i.current,bo(t.nodeType===8?t.parentNode:t),new bu(i)},ni.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var i=t._reactInternals;if(i===void 0)throw typeof t.render=="function"?Error(n(188)):(t=Object.keys(t).join(","),Error(n(268,t)));return t=gi(i),t=t===null?null:t.stateNode,t},ni.flushSync=function(t){return ss(t)},ni.hydrate=function(t,i,o){if(!ll(i))throw Error(n(200));return cl(null,t,i,!0,o)},ni.hydrateRoot=function(t,i,o){if(!Cu(t))throw Error(n(405));var c=o!=null&&o.hydratedSources||null,d=!1,h="",E=$p;if(o!=null&&(o.unstable_strictMode===!0&&(d=!0),o.identifierPrefix!==void 0&&(h=o.identifierPrefix),o.onRecoverableError!==void 0&&(E=o.onRecoverableError)),i=Yp(i,null,t,1,o??null,d,!1,h,E),t[tr]=i.current,bo(t),c)for(t=0;t<c.length;t++)o=c[t],d=o._getVersion,d=d(o._source),i.mutableSourceEagerHydrationData==null?i.mutableSourceEagerHydrationData=[o,d]:i.mutableSourceEagerHydrationData.push(o,d);return new al(i)},ni.render=function(t,i,o){if(!ll(i))throw Error(n(200));return cl(null,t,i,!1,o)},ni.unmountComponentAtNode=function(t){if(!ll(t))throw Error(n(40));return t._reactRootContainer?(ss(function(){cl(null,null,t,!1,function(){t._reactRootContainer=null,t[tr]=null})}),!0):!1},ni.unstable_batchedUpdates=xu,ni.unstable_renderSubtreeIntoContainer=function(t,i,o,c){if(!ll(o))throw Error(n(200));if(t==null||t._reactInternals===void 0)throw Error(n(38));return cl(t,i,o,!1,c)},ni.version="18.3.1-next-f1338f8080-20240426",ni}var rm;function A_(){if(rm)return Lu.exports;rm=1;function r(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(r)}catch(e){console.error(e)}}return r(),Lu.exports=T_(),Lu.exports}var sm;function b_(){if(sm)return dl;sm=1;var r=A_();return dl.createRoot=r.createRoot,dl.hydrateRoot=r.hydrateRoot,dl}var C_=b_(),St=cf();/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const uf="184",R_=0,om=1,P_=2,na=1,L_=2,Qo=3,qr=0,si=1,wi=2,mr=0,io=1,am=2,lm=3,cm=4,D_=5,ps=100,I_=101,N_=102,U_=103,F_=104,O_=200,k_=201,B_=202,z_=203,md=204,gd=205,H_=206,V_=207,G_=208,W_=209,X_=210,j_=211,Y_=212,q_=213,$_=214,_d=0,vd=1,xd=2,so=3,yd=4,Sd=5,Md=6,Ed=7,l0=0,K_=1,Z_=2,$i=0,c0=1,u0=2,d0=3,df=4,f0=5,h0=6,p0=7,m0=300,vs=301,oo=302,Nu=303,Uu=304,$l=306,wd=1e3,pr=1001,Td=1002,Un=1003,J_=1004,fl=1005,Gn=1006,Fu=1007,gs=1008,pi=1009,g0=1010,_0=1011,ia=1012,ff=1013,Ji=1014,ji=1015,_r=1016,hf=1017,pf=1018,ra=1020,v0=35902,x0=35899,y0=1021,S0=1022,Oi=1023,vr=1026,_s=1027,M0=1028,mf=1029,xs=1030,gf=1031,_f=1033,Ul=33776,Fl=33777,Ol=33778,kl=33779,Ad=35840,bd=35841,Cd=35842,Rd=35843,Pd=36196,Ld=37492,Dd=37496,Id=37488,Nd=37489,zl=37490,Ud=37491,Fd=37808,Od=37809,kd=37810,Bd=37811,zd=37812,Hd=37813,Vd=37814,Gd=37815,Wd=37816,Xd=37817,jd=37818,Yd=37819,qd=37820,$d=37821,Kd=36492,Zd=36494,Jd=36495,Qd=36283,ef=36284,Hl=36285,tf=36286,Q_=3200,nf=0,ev=1,jr="",ri="srgb",Vl="srgb-linear",Gl="linear",$t="srgb",Gs=7680,um=519,tv=512,nv=513,iv=514,vf=515,rv=516,sv=517,xf=518,ov=519,dm=35044,fm="300 es",Yi=2e3,sa=2001;function av(r){for(let e=r.length-1;e>=0;--e)if(r[e]>=65535)return!0;return!1}function Wl(r){return document.createElementNS("http://www.w3.org/1999/xhtml",r)}function lv(){const r=Wl("canvas");return r.style.display="block",r}const hm={};function pm(...r){const e="THREE."+r.shift();console.log(e,...r)}function E0(r){const e=r[0];if(typeof e=="string"&&e.startsWith("TSL:")){const n=r[1];n&&n.isStackTrace?r[0]+=" "+n.getLocation():r[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return r}function Mt(...r){r=E0(r);const e="THREE."+r.shift();{const n=r[0];n&&n.isStackTrace?console.warn(n.getError(e)):console.warn(e,...r)}}function Ht(...r){r=E0(r);const e="THREE."+r.shift();{const n=r[0];n&&n.isStackTrace?console.error(n.getError(e)):console.error(e,...r)}}function rf(...r){const e=r.join(" ");e in hm||(hm[e]=!0,Mt(...r))}function cv(r,e,n){return new Promise(function(s,a){function l(){switch(r.clientWaitSync(e,r.SYNC_FLUSH_COMMANDS_BIT,0)){case r.WAIT_FAILED:a();break;case r.TIMEOUT_EXPIRED:setTimeout(l,n);break;default:s()}}setTimeout(l,n)})}const uv={[_d]:vd,[xd]:Md,[yd]:Ed,[so]:Sd,[vd]:_d,[Md]:xd,[Ed]:yd,[Sd]:so};class ys{addEventListener(e,n){this._listeners===void 0&&(this._listeners={});const s=this._listeners;s[e]===void 0&&(s[e]=[]),s[e].indexOf(n)===-1&&s[e].push(n)}hasEventListener(e,n){const s=this._listeners;return s===void 0?!1:s[e]!==void 0&&s[e].indexOf(n)!==-1}removeEventListener(e,n){const s=this._listeners;if(s===void 0)return;const a=s[e];if(a!==void 0){const l=a.indexOf(n);l!==-1&&a.splice(l,1)}}dispatchEvent(e){const n=this._listeners;if(n===void 0)return;const s=n[e.type];if(s!==void 0){e.target=this;const a=s.slice(0);for(let l=0,u=a.length;l<u;l++)a[l].call(this,e);e.target=null}}}const Hn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Ou=Math.PI/180,sf=180/Math.PI;function oa(){const r=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0,s=Math.random()*4294967295|0;return(Hn[r&255]+Hn[r>>8&255]+Hn[r>>16&255]+Hn[r>>24&255]+"-"+Hn[e&255]+Hn[e>>8&255]+"-"+Hn[e>>16&15|64]+Hn[e>>24&255]+"-"+Hn[n&63|128]+Hn[n>>8&255]+"-"+Hn[n>>16&255]+Hn[n>>24&255]+Hn[s&255]+Hn[s>>8&255]+Hn[s>>16&255]+Hn[s>>24&255]).toLowerCase()}function Ft(r,e,n){return Math.max(e,Math.min(n,r))}function dv(r,e){return(r%e+e)%e}function ku(r,e,n){return(1-n)*r+n*e}function jo(r,e){switch(e.constructor){case Float32Array:return r;case Uint32Array:return r/4294967295;case Uint16Array:return r/65535;case Uint8Array:return r/255;case Int32Array:return Math.max(r/2147483647,-1);case Int16Array:return Math.max(r/32767,-1);case Int8Array:return Math.max(r/127,-1);default:throw new Error("Invalid component type.")}}function ii(r,e){switch(e.constructor){case Float32Array:return r;case Uint32Array:return Math.round(r*4294967295);case Uint16Array:return Math.round(r*65535);case Uint8Array:return Math.round(r*255);case Int32Array:return Math.round(r*2147483647);case Int16Array:return Math.round(r*32767);case Int8Array:return Math.round(r*127);default:throw new Error("Invalid component type.")}}const Rf=class Rf{constructor(e=0,n=0){this.x=e,this.y=n}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,n){return this.x=e,this.y=n,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const n=this.x,s=this.y,a=e.elements;return this.x=a[0]*n+a[3]*s+a[6],this.y=a[1]*n+a[4]*s+a[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,n){return this.x=Ft(this.x,e.x,n.x),this.y=Ft(this.y,e.y,n.y),this}clampScalar(e,n){return this.x=Ft(this.x,e,n),this.y=Ft(this.y,e,n),this}clampLength(e,n){const s=this.length();return this.divideScalar(s||1).multiplyScalar(Ft(s,e,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const s=this.dot(e)/n;return Math.acos(Ft(s,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,s=this.y-e.y;return n*n+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this}lerpVectors(e,n,s){return this.x=e.x+(n.x-e.x)*s,this.y=e.y+(n.y-e.y)*s,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this}rotateAround(e,n){const s=Math.cos(n),a=Math.sin(n),l=this.x-e.x,u=this.y-e.y;return this.x=l*s-u*a+e.x,this.y=l*a+u*s+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};Rf.prototype.isVector2=!0;let kt=Rf;class co{constructor(e=0,n=0,s=0,a=1){this.isQuaternion=!0,this._x=e,this._y=n,this._z=s,this._w=a}static slerpFlat(e,n,s,a,l,u,f){let p=s[a+0],m=s[a+1],x=s[a+2],y=s[a+3],g=l[u+0],S=l[u+1],T=l[u+2],C=l[u+3];if(y!==C||p!==g||m!==S||x!==T){let _=p*g+m*S+x*T+y*C;_<0&&(g=-g,S=-S,T=-T,C=-C,_=-_);let v=1-f;if(_<.9995){const b=Math.acos(_),L=Math.sin(b);v=Math.sin(v*b)/L,f=Math.sin(f*b)/L,p=p*v+g*f,m=m*v+S*f,x=x*v+T*f,y=y*v+C*f}else{p=p*v+g*f,m=m*v+S*f,x=x*v+T*f,y=y*v+C*f;const b=1/Math.sqrt(p*p+m*m+x*x+y*y);p*=b,m*=b,x*=b,y*=b}}e[n]=p,e[n+1]=m,e[n+2]=x,e[n+3]=y}static multiplyQuaternionsFlat(e,n,s,a,l,u){const f=s[a],p=s[a+1],m=s[a+2],x=s[a+3],y=l[u],g=l[u+1],S=l[u+2],T=l[u+3];return e[n]=f*T+x*y+p*S-m*g,e[n+1]=p*T+x*g+m*y-f*S,e[n+2]=m*T+x*S+f*g-p*y,e[n+3]=x*T-f*y-p*g-m*S,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,n,s,a){return this._x=e,this._y=n,this._z=s,this._w=a,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,n=!0){const s=e._x,a=e._y,l=e._z,u=e._order,f=Math.cos,p=Math.sin,m=f(s/2),x=f(a/2),y=f(l/2),g=p(s/2),S=p(a/2),T=p(l/2);switch(u){case"XYZ":this._x=g*x*y+m*S*T,this._y=m*S*y-g*x*T,this._z=m*x*T+g*S*y,this._w=m*x*y-g*S*T;break;case"YXZ":this._x=g*x*y+m*S*T,this._y=m*S*y-g*x*T,this._z=m*x*T-g*S*y,this._w=m*x*y+g*S*T;break;case"ZXY":this._x=g*x*y-m*S*T,this._y=m*S*y+g*x*T,this._z=m*x*T+g*S*y,this._w=m*x*y-g*S*T;break;case"ZYX":this._x=g*x*y-m*S*T,this._y=m*S*y+g*x*T,this._z=m*x*T-g*S*y,this._w=m*x*y+g*S*T;break;case"YZX":this._x=g*x*y+m*S*T,this._y=m*S*y+g*x*T,this._z=m*x*T-g*S*y,this._w=m*x*y-g*S*T;break;case"XZY":this._x=g*x*y-m*S*T,this._y=m*S*y-g*x*T,this._z=m*x*T+g*S*y,this._w=m*x*y+g*S*T;break;default:Mt("Quaternion: .setFromEuler() encountered an unknown order: "+u)}return n===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,n){const s=n/2,a=Math.sin(s);return this._x=e.x*a,this._y=e.y*a,this._z=e.z*a,this._w=Math.cos(s),this._onChangeCallback(),this}setFromRotationMatrix(e){const n=e.elements,s=n[0],a=n[4],l=n[8],u=n[1],f=n[5],p=n[9],m=n[2],x=n[6],y=n[10],g=s+f+y;if(g>0){const S=.5/Math.sqrt(g+1);this._w=.25/S,this._x=(x-p)*S,this._y=(l-m)*S,this._z=(u-a)*S}else if(s>f&&s>y){const S=2*Math.sqrt(1+s-f-y);this._w=(x-p)/S,this._x=.25*S,this._y=(a+u)/S,this._z=(l+m)/S}else if(f>y){const S=2*Math.sqrt(1+f-s-y);this._w=(l-m)/S,this._x=(a+u)/S,this._y=.25*S,this._z=(p+x)/S}else{const S=2*Math.sqrt(1+y-s-f);this._w=(u-a)/S,this._x=(l+m)/S,this._y=(p+x)/S,this._z=.25*S}return this._onChangeCallback(),this}setFromUnitVectors(e,n){let s=e.dot(n)+1;return s<1e-8?(s=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=s):(this._x=0,this._y=-e.z,this._z=e.y,this._w=s)):(this._x=e.y*n.z-e.z*n.y,this._y=e.z*n.x-e.x*n.z,this._z=e.x*n.y-e.y*n.x,this._w=s),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Ft(this.dot(e),-1,1)))}rotateTowards(e,n){const s=this.angleTo(e);if(s===0)return this;const a=Math.min(1,n/s);return this.slerp(e,a),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,n){const s=e._x,a=e._y,l=e._z,u=e._w,f=n._x,p=n._y,m=n._z,x=n._w;return this._x=s*x+u*f+a*m-l*p,this._y=a*x+u*p+l*f-s*m,this._z=l*x+u*m+s*p-a*f,this._w=u*x-s*f-a*p-l*m,this._onChangeCallback(),this}slerp(e,n){let s=e._x,a=e._y,l=e._z,u=e._w,f=this.dot(e);f<0&&(s=-s,a=-a,l=-l,u=-u,f=-f);let p=1-n;if(f<.9995){const m=Math.acos(f),x=Math.sin(m);p=Math.sin(p*m)/x,n=Math.sin(n*m)/x,this._x=this._x*p+s*n,this._y=this._y*p+a*n,this._z=this._z*p+l*n,this._w=this._w*p+u*n,this._onChangeCallback()}else this._x=this._x*p+s*n,this._y=this._y*p+a*n,this._z=this._z*p+l*n,this._w=this._w*p+u*n,this.normalize();return this}slerpQuaternions(e,n,s){return this.copy(e).slerp(n,s)}random(){const e=2*Math.PI*Math.random(),n=2*Math.PI*Math.random(),s=Math.random(),a=Math.sqrt(1-s),l=Math.sqrt(s);return this.set(a*Math.sin(e),a*Math.cos(e),l*Math.sin(n),l*Math.cos(n))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,n=0){return this._x=e[n],this._y=e[n+1],this._z=e[n+2],this._w=e[n+3],this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._w,e}fromBufferAttribute(e,n){return this._x=e.getX(n),this._y=e.getY(n),this._z=e.getZ(n),this._w=e.getW(n),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}const Pf=class Pf{constructor(e=0,n=0,s=0){this.x=e,this.y=n,this.z=s}set(e,n,s){return s===void 0&&(s=this.z),this.x=e,this.y=n,this.z=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,n){return this.x=e.x*n.x,this.y=e.y*n.y,this.z=e.z*n.z,this}applyEuler(e){return this.applyQuaternion(mm.setFromEuler(e))}applyAxisAngle(e,n){return this.applyQuaternion(mm.setFromAxisAngle(e,n))}applyMatrix3(e){const n=this.x,s=this.y,a=this.z,l=e.elements;return this.x=l[0]*n+l[3]*s+l[6]*a,this.y=l[1]*n+l[4]*s+l[7]*a,this.z=l[2]*n+l[5]*s+l[8]*a,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const n=this.x,s=this.y,a=this.z,l=e.elements,u=1/(l[3]*n+l[7]*s+l[11]*a+l[15]);return this.x=(l[0]*n+l[4]*s+l[8]*a+l[12])*u,this.y=(l[1]*n+l[5]*s+l[9]*a+l[13])*u,this.z=(l[2]*n+l[6]*s+l[10]*a+l[14])*u,this}applyQuaternion(e){const n=this.x,s=this.y,a=this.z,l=e.x,u=e.y,f=e.z,p=e.w,m=2*(u*a-f*s),x=2*(f*n-l*a),y=2*(l*s-u*n);return this.x=n+p*m+u*y-f*x,this.y=s+p*x+f*m-l*y,this.z=a+p*y+l*x-u*m,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const n=this.x,s=this.y,a=this.z,l=e.elements;return this.x=l[0]*n+l[4]*s+l[8]*a,this.y=l[1]*n+l[5]*s+l[9]*a,this.z=l[2]*n+l[6]*s+l[10]*a,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,n){return this.x=Ft(this.x,e.x,n.x),this.y=Ft(this.y,e.y,n.y),this.z=Ft(this.z,e.z,n.z),this}clampScalar(e,n){return this.x=Ft(this.x,e,n),this.y=Ft(this.y,e,n),this.z=Ft(this.z,e,n),this}clampLength(e,n){const s=this.length();return this.divideScalar(s||1).multiplyScalar(Ft(s,e,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this}lerpVectors(e,n,s){return this.x=e.x+(n.x-e.x)*s,this.y=e.y+(n.y-e.y)*s,this.z=e.z+(n.z-e.z)*s,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,n){const s=e.x,a=e.y,l=e.z,u=n.x,f=n.y,p=n.z;return this.x=a*p-l*f,this.y=l*u-s*p,this.z=s*f-a*u,this}projectOnVector(e){const n=e.lengthSq();if(n===0)return this.set(0,0,0);const s=e.dot(this)/n;return this.copy(e).multiplyScalar(s)}projectOnPlane(e){return Bu.copy(this).projectOnVector(e),this.sub(Bu)}reflect(e){return this.sub(Bu.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const s=this.dot(e)/n;return Math.acos(Ft(s,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,s=this.y-e.y,a=this.z-e.z;return n*n+s*s+a*a}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,n,s){const a=Math.sin(n)*e;return this.x=a*Math.sin(s),this.y=Math.cos(n)*e,this.z=a*Math.cos(s),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,n,s){return this.x=e*Math.sin(n),this.y=s,this.z=e*Math.cos(n),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this}setFromMatrixScale(e){const n=this.setFromMatrixColumn(e,0).length(),s=this.setFromMatrixColumn(e,1).length(),a=this.setFromMatrixColumn(e,2).length();return this.x=n,this.y=s,this.z=a,this}setFromMatrixColumn(e,n){return this.fromArray(e.elements,n*4)}setFromMatrix3Column(e,n){return this.fromArray(e.elements,n*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,n=Math.random()*2-1,s=Math.sqrt(1-n*n);return this.x=s*Math.cos(e),this.y=n,this.z=s*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};Pf.prototype.isVector3=!0;let Q=Pf;const Bu=new Q,mm=new co,Lf=class Lf{constructor(e,n,s,a,l,u,f,p,m){this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,n,s,a,l,u,f,p,m)}set(e,n,s,a,l,u,f,p,m){const x=this.elements;return x[0]=e,x[1]=a,x[2]=f,x[3]=n,x[4]=l,x[5]=p,x[6]=s,x[7]=u,x[8]=m,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const n=this.elements,s=e.elements;return n[0]=s[0],n[1]=s[1],n[2]=s[2],n[3]=s[3],n[4]=s[4],n[5]=s[5],n[6]=s[6],n[7]=s[7],n[8]=s[8],this}extractBasis(e,n,s){return e.setFromMatrix3Column(this,0),n.setFromMatrix3Column(this,1),s.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const n=e.elements;return this.set(n[0],n[4],n[8],n[1],n[5],n[9],n[2],n[6],n[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const s=e.elements,a=n.elements,l=this.elements,u=s[0],f=s[3],p=s[6],m=s[1],x=s[4],y=s[7],g=s[2],S=s[5],T=s[8],C=a[0],_=a[3],v=a[6],b=a[1],L=a[4],P=a[7],z=a[2],D=a[5],k=a[8];return l[0]=u*C+f*b+p*z,l[3]=u*_+f*L+p*D,l[6]=u*v+f*P+p*k,l[1]=m*C+x*b+y*z,l[4]=m*_+x*L+y*D,l[7]=m*v+x*P+y*k,l[2]=g*C+S*b+T*z,l[5]=g*_+S*L+T*D,l[8]=g*v+S*P+T*k,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[3]*=e,n[6]*=e,n[1]*=e,n[4]*=e,n[7]*=e,n[2]*=e,n[5]*=e,n[8]*=e,this}determinant(){const e=this.elements,n=e[0],s=e[1],a=e[2],l=e[3],u=e[4],f=e[5],p=e[6],m=e[7],x=e[8];return n*u*x-n*f*m-s*l*x+s*f*p+a*l*m-a*u*p}invert(){const e=this.elements,n=e[0],s=e[1],a=e[2],l=e[3],u=e[4],f=e[5],p=e[6],m=e[7],x=e[8],y=x*u-f*m,g=f*p-x*l,S=m*l-u*p,T=n*y+s*g+a*S;if(T===0)return this.set(0,0,0,0,0,0,0,0,0);const C=1/T;return e[0]=y*C,e[1]=(a*m-x*s)*C,e[2]=(f*s-a*u)*C,e[3]=g*C,e[4]=(x*n-a*p)*C,e[5]=(a*l-f*n)*C,e[6]=S*C,e[7]=(s*p-m*n)*C,e[8]=(u*n-s*l)*C,this}transpose(){let e;const n=this.elements;return e=n[1],n[1]=n[3],n[3]=e,e=n[2],n[2]=n[6],n[6]=e,e=n[5],n[5]=n[7],n[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const n=this.elements;return e[0]=n[0],e[1]=n[3],e[2]=n[6],e[3]=n[1],e[4]=n[4],e[5]=n[7],e[6]=n[2],e[7]=n[5],e[8]=n[8],this}setUvTransform(e,n,s,a,l,u,f){const p=Math.cos(l),m=Math.sin(l);return this.set(s*p,s*m,-s*(p*u+m*f)+u+e,-a*m,a*p,-a*(-m*u+p*f)+f+n,0,0,1),this}scale(e,n){return this.premultiply(zu.makeScale(e,n)),this}rotate(e){return this.premultiply(zu.makeRotation(-e)),this}translate(e,n){return this.premultiply(zu.makeTranslation(e,n)),this}makeTranslation(e,n){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,n,0,0,1),this}makeRotation(e){const n=Math.cos(e),s=Math.sin(e);return this.set(n,-s,0,s,n,0,0,0,1),this}makeScale(e,n){return this.set(e,0,0,0,n,0,0,0,1),this}equals(e){const n=this.elements,s=e.elements;for(let a=0;a<9;a++)if(n[a]!==s[a])return!1;return!0}fromArray(e,n=0){for(let s=0;s<9;s++)this.elements[s]=e[s+n];return this}toArray(e=[],n=0){const s=this.elements;return e[n]=s[0],e[n+1]=s[1],e[n+2]=s[2],e[n+3]=s[3],e[n+4]=s[4],e[n+5]=s[5],e[n+6]=s[6],e[n+7]=s[7],e[n+8]=s[8],e}clone(){return new this.constructor().fromArray(this.elements)}};Lf.prototype.isMatrix3=!0;let At=Lf;const zu=new At,gm=new At().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),_m=new At().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function fv(){const r={enabled:!0,workingColorSpace:Vl,spaces:{},convert:function(a,l,u){return this.enabled===!1||l===u||!l||!u||(this.spaces[l].transfer===$t&&(a.r=gr(a.r),a.g=gr(a.g),a.b=gr(a.b)),this.spaces[l].primaries!==this.spaces[u].primaries&&(a.applyMatrix3(this.spaces[l].toXYZ),a.applyMatrix3(this.spaces[u].fromXYZ)),this.spaces[u].transfer===$t&&(a.r=ro(a.r),a.g=ro(a.g),a.b=ro(a.b))),a},workingToColorSpace:function(a,l){return this.convert(a,this.workingColorSpace,l)},colorSpaceToWorking:function(a,l){return this.convert(a,l,this.workingColorSpace)},getPrimaries:function(a){return this.spaces[a].primaries},getTransfer:function(a){return a===jr?Gl:this.spaces[a].transfer},getToneMappingMode:function(a){return this.spaces[a].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(a,l=this.workingColorSpace){return a.fromArray(this.spaces[l].luminanceCoefficients)},define:function(a){Object.assign(this.spaces,a)},_getMatrix:function(a,l,u){return a.copy(this.spaces[l].toXYZ).multiply(this.spaces[u].fromXYZ)},_getDrawingBufferColorSpace:function(a){return this.spaces[a].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(a=this.workingColorSpace){return this.spaces[a].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(a,l){return rf("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),r.workingToColorSpace(a,l)},toWorkingColorSpace:function(a,l){return rf("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),r.colorSpaceToWorking(a,l)}},e=[.64,.33,.3,.6,.15,.06],n=[.2126,.7152,.0722],s=[.3127,.329];return r.define({[Vl]:{primaries:e,whitePoint:s,transfer:Gl,toXYZ:gm,fromXYZ:_m,luminanceCoefficients:n,workingColorSpaceConfig:{unpackColorSpace:ri},outputColorSpaceConfig:{drawingBufferColorSpace:ri}},[ri]:{primaries:e,whitePoint:s,transfer:$t,toXYZ:gm,fromXYZ:_m,luminanceCoefficients:n,outputColorSpaceConfig:{drawingBufferColorSpace:ri}}}),r}const Ot=fv();function gr(r){return r<.04045?r*.0773993808:Math.pow(r*.9478672986+.0521327014,2.4)}function ro(r){return r<.0031308?r*12.92:1.055*Math.pow(r,.41666)-.055}let Ws;class hv{static getDataURL(e,n="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let s;if(e instanceof HTMLCanvasElement)s=e;else{Ws===void 0&&(Ws=Wl("canvas")),Ws.width=e.width,Ws.height=e.height;const a=Ws.getContext("2d");e instanceof ImageData?a.putImageData(e,0,0):a.drawImage(e,0,0,e.width,e.height),s=Ws}return s.toDataURL(n)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const n=Wl("canvas");n.width=e.width,n.height=e.height;const s=n.getContext("2d");s.drawImage(e,0,0,e.width,e.height);const a=s.getImageData(0,0,e.width,e.height),l=a.data;for(let u=0;u<l.length;u++)l[u]=gr(l[u]/255)*255;return s.putImageData(a,0,0),n}else if(e.data){const n=e.data.slice(0);for(let s=0;s<n.length;s++)n instanceof Uint8Array||n instanceof Uint8ClampedArray?n[s]=Math.floor(gr(n[s]/255)*255):n[s]=gr(n[s]);return{data:n,width:e.width,height:e.height}}else return Mt("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let pv=0;class yf{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:pv++}),this.uuid=oa(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const n=this.data;return typeof HTMLVideoElement<"u"&&n instanceof HTMLVideoElement?e.set(n.videoWidth,n.videoHeight,0):typeof VideoFrame<"u"&&n instanceof VideoFrame?e.set(n.displayWidth,n.displayHeight,0):n!==null?e.set(n.width,n.height,n.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const s={uuid:this.uuid,url:""},a=this.data;if(a!==null){let l;if(Array.isArray(a)){l=[];for(let u=0,f=a.length;u<f;u++)a[u].isDataTexture?l.push(Hu(a[u].image)):l.push(Hu(a[u]))}else l=Hu(a);s.url=l}return n||(e.images[this.uuid]=s),s}}function Hu(r){return typeof HTMLImageElement<"u"&&r instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&r instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&r instanceof ImageBitmap?hv.getDataURL(r):r.data?{data:Array.from(r.data),width:r.width,height:r.height,type:r.data.constructor.name}:(Mt("Texture: Unable to serialize Texture."),{})}let mv=0;const Vu=new Q;class Wn extends ys{constructor(e=Wn.DEFAULT_IMAGE,n=Wn.DEFAULT_MAPPING,s=pr,a=pr,l=Gn,u=gs,f=Oi,p=pi,m=Wn.DEFAULT_ANISOTROPY,x=jr){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:mv++}),this.uuid=oa(),this.name="",this.source=new yf(e),this.mipmaps=[],this.mapping=n,this.channel=0,this.wrapS=s,this.wrapT=a,this.magFilter=l,this.minFilter=u,this.anisotropy=m,this.format=f,this.internalFormat=null,this.type=p,this.offset=new kt(0,0),this.repeat=new kt(1,1),this.center=new kt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new At,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=x,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(Vu).x}get height(){return this.source.getSize(Vu).y}get depth(){return this.source.getSize(Vu).z}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,n){this.updateRanges.push({start:e,count:n})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.normalized=e.normalized,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const n in e){const s=e[n];if(s===void 0){Mt(`Texture.setValues(): parameter '${n}' has value of undefined.`);continue}const a=this[n];if(a===void 0){Mt(`Texture.setValues(): property '${n}' does not exist.`);continue}a&&s&&a.isVector2&&s.isVector2||a&&s&&a.isVector3&&s.isVector3||a&&s&&a.isMatrix3&&s.isMatrix3?a.copy(s):this[n]=s}}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const s={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(s.userData=this.userData),n||(e.textures[this.uuid]=s),s}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==m0)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case wd:e.x=e.x-Math.floor(e.x);break;case pr:e.x=e.x<0?0:1;break;case Td:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case wd:e.y=e.y-Math.floor(e.y);break;case pr:e.y=e.y<0?0:1;break;case Td:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}Wn.DEFAULT_IMAGE=null;Wn.DEFAULT_MAPPING=m0;Wn.DEFAULT_ANISOTROPY=1;const Df=class Df{constructor(e=0,n=0,s=0,a=1){this.x=e,this.y=n,this.z=s,this.w=a}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,n,s,a){return this.x=e,this.y=n,this.z=s,this.w=a,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;case 3:this.w=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this.w=e.w+n.w,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this.w+=e.w*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this.w=e.w-n.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const n=this.x,s=this.y,a=this.z,l=this.w,u=e.elements;return this.x=u[0]*n+u[4]*s+u[8]*a+u[12]*l,this.y=u[1]*n+u[5]*s+u[9]*a+u[13]*l,this.z=u[2]*n+u[6]*s+u[10]*a+u[14]*l,this.w=u[3]*n+u[7]*s+u[11]*a+u[15]*l,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const n=Math.sqrt(1-e.w*e.w);return n<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/n,this.y=e.y/n,this.z=e.z/n),this}setAxisAngleFromRotationMatrix(e){let n,s,a,l;const p=e.elements,m=p[0],x=p[4],y=p[8],g=p[1],S=p[5],T=p[9],C=p[2],_=p[6],v=p[10];if(Math.abs(x-g)<.01&&Math.abs(y-C)<.01&&Math.abs(T-_)<.01){if(Math.abs(x+g)<.1&&Math.abs(y+C)<.1&&Math.abs(T+_)<.1&&Math.abs(m+S+v-3)<.1)return this.set(1,0,0,0),this;n=Math.PI;const L=(m+1)/2,P=(S+1)/2,z=(v+1)/2,D=(x+g)/4,k=(y+C)/4,w=(T+_)/4;return L>P&&L>z?L<.01?(s=0,a=.707106781,l=.707106781):(s=Math.sqrt(L),a=D/s,l=k/s):P>z?P<.01?(s=.707106781,a=0,l=.707106781):(a=Math.sqrt(P),s=D/a,l=w/a):z<.01?(s=.707106781,a=.707106781,l=0):(l=Math.sqrt(z),s=k/l,a=w/l),this.set(s,a,l,n),this}let b=Math.sqrt((_-T)*(_-T)+(y-C)*(y-C)+(g-x)*(g-x));return Math.abs(b)<.001&&(b=1),this.x=(_-T)/b,this.y=(y-C)/b,this.z=(g-x)/b,this.w=Math.acos((m+S+v-1)/2),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this.w=n[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,n){return this.x=Ft(this.x,e.x,n.x),this.y=Ft(this.y,e.y,n.y),this.z=Ft(this.z,e.z,n.z),this.w=Ft(this.w,e.w,n.w),this}clampScalar(e,n){return this.x=Ft(this.x,e,n),this.y=Ft(this.y,e,n),this.z=Ft(this.z,e,n),this.w=Ft(this.w,e,n),this}clampLength(e,n){const s=this.length();return this.divideScalar(s||1).multiplyScalar(Ft(s,e,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this.w+=(e.w-this.w)*n,this}lerpVectors(e,n,s){return this.x=e.x+(n.x-e.x)*s,this.y=e.y+(n.y-e.y)*s,this.z=e.z+(n.z-e.z)*s,this.w=e.w+(n.w-e.w)*s,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this.w=e[n+3],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e[n+3]=this.w,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this.w=e.getW(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};Df.prototype.isVector4=!0;let fn=Df;class gv extends ys{constructor(e=1,n=1,s={}){super(),s=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Gn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},s),this.isRenderTarget=!0,this.width=e,this.height=n,this.depth=s.depth,this.scissor=new fn(0,0,e,n),this.scissorTest=!1,this.viewport=new fn(0,0,e,n),this.textures=[];const a={width:e,height:n,depth:s.depth},l=new Wn(a),u=s.count;for(let f=0;f<u;f++)this.textures[f]=l.clone(),this.textures[f].isRenderTargetTexture=!0,this.textures[f].renderTarget=this;this._setTextureOptions(s),this.depthBuffer=s.depthBuffer,this.stencilBuffer=s.stencilBuffer,this.resolveDepthBuffer=s.resolveDepthBuffer,this.resolveStencilBuffer=s.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=s.depthTexture,this.samples=s.samples,this.multiview=s.multiview}_setTextureOptions(e={}){const n={minFilter:Gn,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(n.mapping=e.mapping),e.wrapS!==void 0&&(n.wrapS=e.wrapS),e.wrapT!==void 0&&(n.wrapT=e.wrapT),e.wrapR!==void 0&&(n.wrapR=e.wrapR),e.magFilter!==void 0&&(n.magFilter=e.magFilter),e.minFilter!==void 0&&(n.minFilter=e.minFilter),e.format!==void 0&&(n.format=e.format),e.type!==void 0&&(n.type=e.type),e.anisotropy!==void 0&&(n.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(n.colorSpace=e.colorSpace),e.flipY!==void 0&&(n.flipY=e.flipY),e.generateMipmaps!==void 0&&(n.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(n.internalFormat=e.internalFormat);for(let s=0;s<this.textures.length;s++)this.textures[s].setValues(n)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,n,s=1){if(this.width!==e||this.height!==n||this.depth!==s){this.width=e,this.height=n,this.depth=s;for(let a=0,l=this.textures.length;a<l;a++)this.textures[a].image.width=e,this.textures[a].image.height=n,this.textures[a].image.depth=s,this.textures[a].isData3DTexture!==!0&&(this.textures[a].isArrayTexture=this.textures[a].image.depth>1);this.dispose()}this.viewport.set(0,0,e,n),this.scissor.set(0,0,e,n)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let n=0,s=e.textures.length;n<s;n++){this.textures[n]=e.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0,this.textures[n].renderTarget=this;const a=Object.assign({},e.textures[n].image);this.textures[n].source=new yf(a)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this.multiview=e.multiview,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Ki extends gv{constructor(e=1,n=1,s={}){super(e,n,s),this.isWebGLRenderTarget=!0}}class w0 extends Wn{constructor(e=null,n=1,s=1,a=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:n,height:s,depth:a},this.magFilter=Un,this.minFilter=Un,this.wrapR=pr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class _v extends Wn{constructor(e=null,n=1,s=1,a=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:n,height:s,depth:a},this.magFilter=Un,this.minFilter=Un,this.wrapR=pr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const ql=class ql{constructor(e,n,s,a,l,u,f,p,m,x,y,g,S,T,C,_){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,n,s,a,l,u,f,p,m,x,y,g,S,T,C,_)}set(e,n,s,a,l,u,f,p,m,x,y,g,S,T,C,_){const v=this.elements;return v[0]=e,v[4]=n,v[8]=s,v[12]=a,v[1]=l,v[5]=u,v[9]=f,v[13]=p,v[2]=m,v[6]=x,v[10]=y,v[14]=g,v[3]=S,v[7]=T,v[11]=C,v[15]=_,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new ql().fromArray(this.elements)}copy(e){const n=this.elements,s=e.elements;return n[0]=s[0],n[1]=s[1],n[2]=s[2],n[3]=s[3],n[4]=s[4],n[5]=s[5],n[6]=s[6],n[7]=s[7],n[8]=s[8],n[9]=s[9],n[10]=s[10],n[11]=s[11],n[12]=s[12],n[13]=s[13],n[14]=s[14],n[15]=s[15],this}copyPosition(e){const n=this.elements,s=e.elements;return n[12]=s[12],n[13]=s[13],n[14]=s[14],this}setFromMatrix3(e){const n=e.elements;return this.set(n[0],n[3],n[6],0,n[1],n[4],n[7],0,n[2],n[5],n[8],0,0,0,0,1),this}extractBasis(e,n,s){return this.determinant()===0?(e.set(1,0,0),n.set(0,1,0),s.set(0,0,1),this):(e.setFromMatrixColumn(this,0),n.setFromMatrixColumn(this,1),s.setFromMatrixColumn(this,2),this)}makeBasis(e,n,s){return this.set(e.x,n.x,s.x,0,e.y,n.y,s.y,0,e.z,n.z,s.z,0,0,0,0,1),this}extractRotation(e){if(e.determinant()===0)return this.identity();const n=this.elements,s=e.elements,a=1/Xs.setFromMatrixColumn(e,0).length(),l=1/Xs.setFromMatrixColumn(e,1).length(),u=1/Xs.setFromMatrixColumn(e,2).length();return n[0]=s[0]*a,n[1]=s[1]*a,n[2]=s[2]*a,n[3]=0,n[4]=s[4]*l,n[5]=s[5]*l,n[6]=s[6]*l,n[7]=0,n[8]=s[8]*u,n[9]=s[9]*u,n[10]=s[10]*u,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromEuler(e){const n=this.elements,s=e.x,a=e.y,l=e.z,u=Math.cos(s),f=Math.sin(s),p=Math.cos(a),m=Math.sin(a),x=Math.cos(l),y=Math.sin(l);if(e.order==="XYZ"){const g=u*x,S=u*y,T=f*x,C=f*y;n[0]=p*x,n[4]=-p*y,n[8]=m,n[1]=S+T*m,n[5]=g-C*m,n[9]=-f*p,n[2]=C-g*m,n[6]=T+S*m,n[10]=u*p}else if(e.order==="YXZ"){const g=p*x,S=p*y,T=m*x,C=m*y;n[0]=g+C*f,n[4]=T*f-S,n[8]=u*m,n[1]=u*y,n[5]=u*x,n[9]=-f,n[2]=S*f-T,n[6]=C+g*f,n[10]=u*p}else if(e.order==="ZXY"){const g=p*x,S=p*y,T=m*x,C=m*y;n[0]=g-C*f,n[4]=-u*y,n[8]=T+S*f,n[1]=S+T*f,n[5]=u*x,n[9]=C-g*f,n[2]=-u*m,n[6]=f,n[10]=u*p}else if(e.order==="ZYX"){const g=u*x,S=u*y,T=f*x,C=f*y;n[0]=p*x,n[4]=T*m-S,n[8]=g*m+C,n[1]=p*y,n[5]=C*m+g,n[9]=S*m-T,n[2]=-m,n[6]=f*p,n[10]=u*p}else if(e.order==="YZX"){const g=u*p,S=u*m,T=f*p,C=f*m;n[0]=p*x,n[4]=C-g*y,n[8]=T*y+S,n[1]=y,n[5]=u*x,n[9]=-f*x,n[2]=-m*x,n[6]=S*y+T,n[10]=g-C*y}else if(e.order==="XZY"){const g=u*p,S=u*m,T=f*p,C=f*m;n[0]=p*x,n[4]=-y,n[8]=m*x,n[1]=g*y+C,n[5]=u*x,n[9]=S*y-T,n[2]=T*y-S,n[6]=f*x,n[10]=C*y+g}return n[3]=0,n[7]=0,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromQuaternion(e){return this.compose(vv,e,xv)}lookAt(e,n,s){const a=this.elements;return di.subVectors(e,n),di.lengthSq()===0&&(di.z=1),di.normalize(),Br.crossVectors(s,di),Br.lengthSq()===0&&(Math.abs(s.z)===1?di.x+=1e-4:di.z+=1e-4,di.normalize(),Br.crossVectors(s,di)),Br.normalize(),hl.crossVectors(di,Br),a[0]=Br.x,a[4]=hl.x,a[8]=di.x,a[1]=Br.y,a[5]=hl.y,a[9]=di.y,a[2]=Br.z,a[6]=hl.z,a[10]=di.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const s=e.elements,a=n.elements,l=this.elements,u=s[0],f=s[4],p=s[8],m=s[12],x=s[1],y=s[5],g=s[9],S=s[13],T=s[2],C=s[6],_=s[10],v=s[14],b=s[3],L=s[7],P=s[11],z=s[15],D=a[0],k=a[4],w=a[8],I=a[12],j=a[1],O=a[5],Y=a[9],le=a[13],ge=a[2],W=a[6],ne=a[10],$=a[14],J=a[3],fe=a[7],he=a[11],F=a[15];return l[0]=u*D+f*j+p*ge+m*J,l[4]=u*k+f*O+p*W+m*fe,l[8]=u*w+f*Y+p*ne+m*he,l[12]=u*I+f*le+p*$+m*F,l[1]=x*D+y*j+g*ge+S*J,l[5]=x*k+y*O+g*W+S*fe,l[9]=x*w+y*Y+g*ne+S*he,l[13]=x*I+y*le+g*$+S*F,l[2]=T*D+C*j+_*ge+v*J,l[6]=T*k+C*O+_*W+v*fe,l[10]=T*w+C*Y+_*ne+v*he,l[14]=T*I+C*le+_*$+v*F,l[3]=b*D+L*j+P*ge+z*J,l[7]=b*k+L*O+P*W+z*fe,l[11]=b*w+L*Y+P*ne+z*he,l[15]=b*I+L*le+P*$+z*F,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[4]*=e,n[8]*=e,n[12]*=e,n[1]*=e,n[5]*=e,n[9]*=e,n[13]*=e,n[2]*=e,n[6]*=e,n[10]*=e,n[14]*=e,n[3]*=e,n[7]*=e,n[11]*=e,n[15]*=e,this}determinant(){const e=this.elements,n=e[0],s=e[4],a=e[8],l=e[12],u=e[1],f=e[5],p=e[9],m=e[13],x=e[2],y=e[6],g=e[10],S=e[14],T=e[3],C=e[7],_=e[11],v=e[15],b=p*S-m*g,L=f*S-m*y,P=f*g-p*y,z=u*S-m*x,D=u*g-p*x,k=u*y-f*x;return n*(C*b-_*L+v*P)-s*(T*b-_*z+v*D)+a*(T*L-C*z+v*k)-l*(T*P-C*D+_*k)}transpose(){const e=this.elements;let n;return n=e[1],e[1]=e[4],e[4]=n,n=e[2],e[2]=e[8],e[8]=n,n=e[6],e[6]=e[9],e[9]=n,n=e[3],e[3]=e[12],e[12]=n,n=e[7],e[7]=e[13],e[13]=n,n=e[11],e[11]=e[14],e[14]=n,this}setPosition(e,n,s){const a=this.elements;return e.isVector3?(a[12]=e.x,a[13]=e.y,a[14]=e.z):(a[12]=e,a[13]=n,a[14]=s),this}invert(){const e=this.elements,n=e[0],s=e[1],a=e[2],l=e[3],u=e[4],f=e[5],p=e[6],m=e[7],x=e[8],y=e[9],g=e[10],S=e[11],T=e[12],C=e[13],_=e[14],v=e[15],b=n*f-s*u,L=n*p-a*u,P=n*m-l*u,z=s*p-a*f,D=s*m-l*f,k=a*m-l*p,w=x*C-y*T,I=x*_-g*T,j=x*v-S*T,O=y*_-g*C,Y=y*v-S*C,le=g*v-S*_,ge=b*le-L*Y+P*O+z*j-D*I+k*w;if(ge===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const W=1/ge;return e[0]=(f*le-p*Y+m*O)*W,e[1]=(a*Y-s*le-l*O)*W,e[2]=(C*k-_*D+v*z)*W,e[3]=(g*D-y*k-S*z)*W,e[4]=(p*j-u*le-m*I)*W,e[5]=(n*le-a*j+l*I)*W,e[6]=(_*P-T*k-v*L)*W,e[7]=(x*k-g*P+S*L)*W,e[8]=(u*Y-f*j+m*w)*W,e[9]=(s*j-n*Y-l*w)*W,e[10]=(T*D-C*P+v*b)*W,e[11]=(y*P-x*D-S*b)*W,e[12]=(f*I-u*O-p*w)*W,e[13]=(n*O-s*I+a*w)*W,e[14]=(C*L-T*z-_*b)*W,e[15]=(x*z-y*L+g*b)*W,this}scale(e){const n=this.elements,s=e.x,a=e.y,l=e.z;return n[0]*=s,n[4]*=a,n[8]*=l,n[1]*=s,n[5]*=a,n[9]*=l,n[2]*=s,n[6]*=a,n[10]*=l,n[3]*=s,n[7]*=a,n[11]*=l,this}getMaxScaleOnAxis(){const e=this.elements,n=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],s=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],a=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(n,s,a))}makeTranslation(e,n,s){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,n,0,0,1,s,0,0,0,1),this}makeRotationX(e){const n=Math.cos(e),s=Math.sin(e);return this.set(1,0,0,0,0,n,-s,0,0,s,n,0,0,0,0,1),this}makeRotationY(e){const n=Math.cos(e),s=Math.sin(e);return this.set(n,0,s,0,0,1,0,0,-s,0,n,0,0,0,0,1),this}makeRotationZ(e){const n=Math.cos(e),s=Math.sin(e);return this.set(n,-s,0,0,s,n,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,n){const s=Math.cos(n),a=Math.sin(n),l=1-s,u=e.x,f=e.y,p=e.z,m=l*u,x=l*f;return this.set(m*u+s,m*f-a*p,m*p+a*f,0,m*f+a*p,x*f+s,x*p-a*u,0,m*p-a*f,x*p+a*u,l*p*p+s,0,0,0,0,1),this}makeScale(e,n,s){return this.set(e,0,0,0,0,n,0,0,0,0,s,0,0,0,0,1),this}makeShear(e,n,s,a,l,u){return this.set(1,s,l,0,e,1,u,0,n,a,1,0,0,0,0,1),this}compose(e,n,s){const a=this.elements,l=n._x,u=n._y,f=n._z,p=n._w,m=l+l,x=u+u,y=f+f,g=l*m,S=l*x,T=l*y,C=u*x,_=u*y,v=f*y,b=p*m,L=p*x,P=p*y,z=s.x,D=s.y,k=s.z;return a[0]=(1-(C+v))*z,a[1]=(S+P)*z,a[2]=(T-L)*z,a[3]=0,a[4]=(S-P)*D,a[5]=(1-(g+v))*D,a[6]=(_+b)*D,a[7]=0,a[8]=(T+L)*k,a[9]=(_-b)*k,a[10]=(1-(g+C))*k,a[11]=0,a[12]=e.x,a[13]=e.y,a[14]=e.z,a[15]=1,this}decompose(e,n,s){const a=this.elements;e.x=a[12],e.y=a[13],e.z=a[14];const l=this.determinant();if(l===0)return s.set(1,1,1),n.identity(),this;let u=Xs.set(a[0],a[1],a[2]).length();const f=Xs.set(a[4],a[5],a[6]).length(),p=Xs.set(a[8],a[9],a[10]).length();l<0&&(u=-u),Ii.copy(this);const m=1/u,x=1/f,y=1/p;return Ii.elements[0]*=m,Ii.elements[1]*=m,Ii.elements[2]*=m,Ii.elements[4]*=x,Ii.elements[5]*=x,Ii.elements[6]*=x,Ii.elements[8]*=y,Ii.elements[9]*=y,Ii.elements[10]*=y,n.setFromRotationMatrix(Ii),s.x=u,s.y=f,s.z=p,this}makePerspective(e,n,s,a,l,u,f=Yi,p=!1){const m=this.elements,x=2*l/(n-e),y=2*l/(s-a),g=(n+e)/(n-e),S=(s+a)/(s-a);let T,C;if(p)T=l/(u-l),C=u*l/(u-l);else if(f===Yi)T=-(u+l)/(u-l),C=-2*u*l/(u-l);else if(f===sa)T=-u/(u-l),C=-u*l/(u-l);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+f);return m[0]=x,m[4]=0,m[8]=g,m[12]=0,m[1]=0,m[5]=y,m[9]=S,m[13]=0,m[2]=0,m[6]=0,m[10]=T,m[14]=C,m[3]=0,m[7]=0,m[11]=-1,m[15]=0,this}makeOrthographic(e,n,s,a,l,u,f=Yi,p=!1){const m=this.elements,x=2/(n-e),y=2/(s-a),g=-(n+e)/(n-e),S=-(s+a)/(s-a);let T,C;if(p)T=1/(u-l),C=u/(u-l);else if(f===Yi)T=-2/(u-l),C=-(u+l)/(u-l);else if(f===sa)T=-1/(u-l),C=-l/(u-l);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+f);return m[0]=x,m[4]=0,m[8]=0,m[12]=g,m[1]=0,m[5]=y,m[9]=0,m[13]=S,m[2]=0,m[6]=0,m[10]=T,m[14]=C,m[3]=0,m[7]=0,m[11]=0,m[15]=1,this}equals(e){const n=this.elements,s=e.elements;for(let a=0;a<16;a++)if(n[a]!==s[a])return!1;return!0}fromArray(e,n=0){for(let s=0;s<16;s++)this.elements[s]=e[s+n];return this}toArray(e=[],n=0){const s=this.elements;return e[n]=s[0],e[n+1]=s[1],e[n+2]=s[2],e[n+3]=s[3],e[n+4]=s[4],e[n+5]=s[5],e[n+6]=s[6],e[n+7]=s[7],e[n+8]=s[8],e[n+9]=s[9],e[n+10]=s[10],e[n+11]=s[11],e[n+12]=s[12],e[n+13]=s[13],e[n+14]=s[14],e[n+15]=s[15],e}};ql.prototype.isMatrix4=!0;let hn=ql;const Xs=new Q,Ii=new hn,vv=new Q(0,0,0),xv=new Q(1,1,1),Br=new Q,hl=new Q,di=new Q,vm=new hn,xm=new co;class $r{constructor(e=0,n=0,s=0,a=$r.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=n,this._z=s,this._order=a}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,n,s,a=this._order){return this._x=e,this._y=n,this._z=s,this._order=a,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,n=this._order,s=!0){const a=e.elements,l=a[0],u=a[4],f=a[8],p=a[1],m=a[5],x=a[9],y=a[2],g=a[6],S=a[10];switch(n){case"XYZ":this._y=Math.asin(Ft(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(-x,S),this._z=Math.atan2(-u,l)):(this._x=Math.atan2(g,m),this._z=0);break;case"YXZ":this._x=Math.asin(-Ft(x,-1,1)),Math.abs(x)<.9999999?(this._y=Math.atan2(f,S),this._z=Math.atan2(p,m)):(this._y=Math.atan2(-y,l),this._z=0);break;case"ZXY":this._x=Math.asin(Ft(g,-1,1)),Math.abs(g)<.9999999?(this._y=Math.atan2(-y,S),this._z=Math.atan2(-u,m)):(this._y=0,this._z=Math.atan2(p,l));break;case"ZYX":this._y=Math.asin(-Ft(y,-1,1)),Math.abs(y)<.9999999?(this._x=Math.atan2(g,S),this._z=Math.atan2(p,l)):(this._x=0,this._z=Math.atan2(-u,m));break;case"YZX":this._z=Math.asin(Ft(p,-1,1)),Math.abs(p)<.9999999?(this._x=Math.atan2(-x,m),this._y=Math.atan2(-y,l)):(this._x=0,this._y=Math.atan2(f,S));break;case"XZY":this._z=Math.asin(-Ft(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(g,m),this._y=Math.atan2(f,l)):(this._x=Math.atan2(-x,S),this._y=0);break;default:Mt("Euler: .setFromRotationMatrix() encountered an unknown order: "+n)}return this._order=n,s===!0&&this._onChangeCallback(),this}setFromQuaternion(e,n,s){return vm.makeRotationFromQuaternion(e),this.setFromRotationMatrix(vm,n,s)}setFromVector3(e,n=this._order){return this.set(e.x,e.y,e.z,n)}reorder(e){return xm.setFromEuler(this),this.setFromQuaternion(xm,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}$r.DEFAULT_ORDER="XYZ";class Sf{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let yv=0;const ym=new Q,js=new co,cr=new hn,pl=new Q,Yo=new Q,Sv=new Q,Mv=new co,Sm=new Q(1,0,0),Mm=new Q(0,1,0),Em=new Q(0,0,1),wm={type:"added"},Ev={type:"removed"},Ys={type:"childadded",child:null},Gu={type:"childremoved",child:null};class Xn extends ys{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:yv++}),this.uuid=oa(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Xn.DEFAULT_UP.clone();const e=new Q,n=new $r,s=new co,a=new Q(1,1,1);function l(){s.setFromEuler(n,!1)}function u(){n.setFromQuaternion(s,void 0,!1)}n._onChange(l),s._onChange(u),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:n},quaternion:{configurable:!0,enumerable:!0,value:s},scale:{configurable:!0,enumerable:!0,value:a},modelViewMatrix:{value:new hn},normalMatrix:{value:new At}}),this.matrix=new hn,this.matrixWorld=new hn,this.matrixAutoUpdate=Xn.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Xn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Sf,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,n){this.quaternion.setFromAxisAngle(e,n)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,n){return js.setFromAxisAngle(e,n),this.quaternion.multiply(js),this}rotateOnWorldAxis(e,n){return js.setFromAxisAngle(e,n),this.quaternion.premultiply(js),this}rotateX(e){return this.rotateOnAxis(Sm,e)}rotateY(e){return this.rotateOnAxis(Mm,e)}rotateZ(e){return this.rotateOnAxis(Em,e)}translateOnAxis(e,n){return ym.copy(e).applyQuaternion(this.quaternion),this.position.add(ym.multiplyScalar(n)),this}translateX(e){return this.translateOnAxis(Sm,e)}translateY(e){return this.translateOnAxis(Mm,e)}translateZ(e){return this.translateOnAxis(Em,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(cr.copy(this.matrixWorld).invert())}lookAt(e,n,s){e.isVector3?pl.copy(e):pl.set(e,n,s);const a=this.parent;this.updateWorldMatrix(!0,!1),Yo.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?cr.lookAt(Yo,pl,this.up):cr.lookAt(pl,Yo,this.up),this.quaternion.setFromRotationMatrix(cr),a&&(cr.extractRotation(a.matrixWorld),js.setFromRotationMatrix(cr),this.quaternion.premultiply(js.invert()))}add(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.add(arguments[n]);return this}return e===this?(Ht("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(wm),Ys.child=e,this.dispatchEvent(Ys),Ys.child=null):Ht("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let s=0;s<arguments.length;s++)this.remove(arguments[s]);return this}const n=this.children.indexOf(e);return n!==-1&&(e.parent=null,this.children.splice(n,1),e.dispatchEvent(Ev),Gu.child=e,this.dispatchEvent(Gu),Gu.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),cr.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),cr.multiply(e.parent.matrixWorld)),e.applyMatrix4(cr),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(wm),Ys.child=e,this.dispatchEvent(Ys),Ys.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,n){if(this[e]===n)return this;for(let s=0,a=this.children.length;s<a;s++){const u=this.children[s].getObjectByProperty(e,n);if(u!==void 0)return u}}getObjectsByProperty(e,n,s=[]){this[e]===n&&s.push(this);const a=this.children;for(let l=0,u=a.length;l<u;l++)a[l].getObjectsByProperty(e,n,s);return s}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Yo,e,Sv),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Yo,Mv,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const n=this.matrixWorld.elements;return e.set(n[8],n[9],n[10]).normalize()}raycast(){}traverse(e){e(this);const n=this.children;for(let s=0,a=n.length;s<a;s++)n[s].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const n=this.children;for(let s=0,a=n.length;s<a;s++)n[s].traverseVisible(e)}traverseAncestors(e){const n=this.parent;n!==null&&(e(n),n.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);const e=this.pivot;if(e!==null){const n=e.x,s=e.y,a=e.z,l=this.matrix.elements;l[12]+=n-l[0]*n-l[4]*s-l[8]*a,l[13]+=s-l[1]*n-l[5]*s-l[9]*a,l[14]+=a-l[2]*n-l[6]*s-l[10]*a}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const n=this.children;for(let s=0,a=n.length;s<a;s++)n[s].updateMatrixWorld(e)}updateWorldMatrix(e,n){const s=this.parent;if(e===!0&&s!==null&&s.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),n===!0){const a=this.children;for(let l=0,u=a.length;l<u;l++)a[l].updateWorldMatrix(!1,!0)}}toJSON(e){const n=e===void 0||typeof e=="string",s={};n&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},s.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const a={};a.uuid=this.uuid,a.type=this.type,this.name!==""&&(a.name=this.name),this.castShadow===!0&&(a.castShadow=!0),this.receiveShadow===!0&&(a.receiveShadow=!0),this.visible===!1&&(a.visible=!1),this.frustumCulled===!1&&(a.frustumCulled=!1),this.renderOrder!==0&&(a.renderOrder=this.renderOrder),this.static!==!1&&(a.static=this.static),Object.keys(this.userData).length>0&&(a.userData=this.userData),a.layers=this.layers.mask,a.matrix=this.matrix.toArray(),a.up=this.up.toArray(),this.pivot!==null&&(a.pivot=this.pivot.toArray()),this.matrixAutoUpdate===!1&&(a.matrixAutoUpdate=!1),this.morphTargetDictionary!==void 0&&(a.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(a.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(a.type="InstancedMesh",a.count=this.count,a.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(a.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(a.type="BatchedMesh",a.perObjectFrustumCulled=this.perObjectFrustumCulled,a.sortObjects=this.sortObjects,a.drawRanges=this._drawRanges,a.reservedRanges=this._reservedRanges,a.geometryInfo=this._geometryInfo.map(f=>({...f,boundingBox:f.boundingBox?f.boundingBox.toJSON():void 0,boundingSphere:f.boundingSphere?f.boundingSphere.toJSON():void 0})),a.instanceInfo=this._instanceInfo.map(f=>({...f})),a.availableInstanceIds=this._availableInstanceIds.slice(),a.availableGeometryIds=this._availableGeometryIds.slice(),a.nextIndexStart=this._nextIndexStart,a.nextVertexStart=this._nextVertexStart,a.geometryCount=this._geometryCount,a.maxInstanceCount=this._maxInstanceCount,a.maxVertexCount=this._maxVertexCount,a.maxIndexCount=this._maxIndexCount,a.geometryInitialized=this._geometryInitialized,a.matricesTexture=this._matricesTexture.toJSON(e),a.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(a.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(a.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(a.boundingBox=this.boundingBox.toJSON()));function l(f,p){return f[p.uuid]===void 0&&(f[p.uuid]=p.toJSON(e)),p.uuid}if(this.isScene)this.background&&(this.background.isColor?a.background=this.background.toJSON():this.background.isTexture&&(a.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(a.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){a.geometry=l(e.geometries,this.geometry);const f=this.geometry.parameters;if(f!==void 0&&f.shapes!==void 0){const p=f.shapes;if(Array.isArray(p))for(let m=0,x=p.length;m<x;m++){const y=p[m];l(e.shapes,y)}else l(e.shapes,p)}}if(this.isSkinnedMesh&&(a.bindMode=this.bindMode,a.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(l(e.skeletons,this.skeleton),a.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const f=[];for(let p=0,m=this.material.length;p<m;p++)f.push(l(e.materials,this.material[p]));a.material=f}else a.material=l(e.materials,this.material);if(this.children.length>0){a.children=[];for(let f=0;f<this.children.length;f++)a.children.push(this.children[f].toJSON(e).object)}if(this.animations.length>0){a.animations=[];for(let f=0;f<this.animations.length;f++){const p=this.animations[f];a.animations.push(l(e.animations,p))}}if(n){const f=u(e.geometries),p=u(e.materials),m=u(e.textures),x=u(e.images),y=u(e.shapes),g=u(e.skeletons),S=u(e.animations),T=u(e.nodes);f.length>0&&(s.geometries=f),p.length>0&&(s.materials=p),m.length>0&&(s.textures=m),x.length>0&&(s.images=x),y.length>0&&(s.shapes=y),g.length>0&&(s.skeletons=g),S.length>0&&(s.animations=S),T.length>0&&(s.nodes=T)}return s.object=a,s;function u(f){const p=[];for(const m in f){const x=f[m];delete x.metadata,p.push(x)}return p}}clone(e){return new this.constructor().copy(this,e)}copy(e,n=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.pivot=e.pivot!==null?e.pivot.clone():null,this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),n===!0)for(let s=0;s<e.children.length;s++){const a=e.children[s];this.add(a.clone())}return this}}Xn.DEFAULT_UP=new Q(0,1,0);Xn.DEFAULT_MATRIX_AUTO_UPDATE=!0;Xn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;class qi extends Xn{constructor(){super(),this.isGroup=!0,this.type="Group"}}const wv={type:"move"};class Wu{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new qi,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new qi,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new Q,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new Q),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new qi,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new Q,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new Q,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const n=this._hand;if(n)for(const s of e.hand.values())this._getHandJoint(n,s)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,n,s){let a=null,l=null,u=null;const f=this._targetRay,p=this._grip,m=this._hand;if(e&&n.session.visibilityState!=="visible-blurred"){if(m&&e.hand){u=!0;for(const C of e.hand.values()){const _=n.getJointPose(C,s),v=this._getHandJoint(m,C);_!==null&&(v.matrix.fromArray(_.transform.matrix),v.matrix.decompose(v.position,v.rotation,v.scale),v.matrixWorldNeedsUpdate=!0,v.jointRadius=_.radius),v.visible=_!==null}const x=m.joints["index-finger-tip"],y=m.joints["thumb-tip"],g=x.position.distanceTo(y.position),S=.02,T=.005;m.inputState.pinching&&g>S+T?(m.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!m.inputState.pinching&&g<=S-T&&(m.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else p!==null&&e.gripSpace&&(l=n.getPose(e.gripSpace,s),l!==null&&(p.matrix.fromArray(l.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,l.linearVelocity?(p.hasLinearVelocity=!0,p.linearVelocity.copy(l.linearVelocity)):p.hasLinearVelocity=!1,l.angularVelocity?(p.hasAngularVelocity=!0,p.angularVelocity.copy(l.angularVelocity)):p.hasAngularVelocity=!1,p.eventsEnabled&&p.dispatchEvent({type:"gripUpdated",data:e,target:this})));f!==null&&(a=n.getPose(e.targetRaySpace,s),a===null&&l!==null&&(a=l),a!==null&&(f.matrix.fromArray(a.transform.matrix),f.matrix.decompose(f.position,f.rotation,f.scale),f.matrixWorldNeedsUpdate=!0,a.linearVelocity?(f.hasLinearVelocity=!0,f.linearVelocity.copy(a.linearVelocity)):f.hasLinearVelocity=!1,a.angularVelocity?(f.hasAngularVelocity=!0,f.angularVelocity.copy(a.angularVelocity)):f.hasAngularVelocity=!1,this.dispatchEvent(wv)))}return f!==null&&(f.visible=a!==null),p!==null&&(p.visible=l!==null),m!==null&&(m.visible=u!==null),this}_getHandJoint(e,n){if(e.joints[n.jointName]===void 0){const s=new qi;s.matrixAutoUpdate=!1,s.visible=!1,e.joints[n.jointName]=s,e.add(s)}return e.joints[n.jointName]}}const T0={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},zr={h:0,s:0,l:0},ml={h:0,s:0,l:0};function Xu(r,e,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?r+(e-r)*6*n:n<1/2?e:n<2/3?r+(e-r)*6*(2/3-n):r}class Pt{constructor(e,n,s){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,n,s)}set(e,n,s){if(n===void 0&&s===void 0){const a=e;a&&a.isColor?this.copy(a):typeof a=="number"?this.setHex(a):typeof a=="string"&&this.setStyle(a)}else this.setRGB(e,n,s);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,n=ri){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Ot.colorSpaceToWorking(this,n),this}setRGB(e,n,s,a=Ot.workingColorSpace){return this.r=e,this.g=n,this.b=s,Ot.colorSpaceToWorking(this,a),this}setHSL(e,n,s,a=Ot.workingColorSpace){if(e=dv(e,1),n=Ft(n,0,1),s=Ft(s,0,1),n===0)this.r=this.g=this.b=s;else{const l=s<=.5?s*(1+n):s+n-s*n,u=2*s-l;this.r=Xu(u,l,e+1/3),this.g=Xu(u,l,e),this.b=Xu(u,l,e-1/3)}return Ot.colorSpaceToWorking(this,a),this}setStyle(e,n=ri){function s(l){l!==void 0&&parseFloat(l)<1&&Mt("Color: Alpha component of "+e+" will be ignored.")}let a;if(a=/^(\w+)\(([^\)]*)\)/.exec(e)){let l;const u=a[1],f=a[2];switch(u){case"rgb":case"rgba":if(l=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(f))return s(l[4]),this.setRGB(Math.min(255,parseInt(l[1],10))/255,Math.min(255,parseInt(l[2],10))/255,Math.min(255,parseInt(l[3],10))/255,n);if(l=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(f))return s(l[4]),this.setRGB(Math.min(100,parseInt(l[1],10))/100,Math.min(100,parseInt(l[2],10))/100,Math.min(100,parseInt(l[3],10))/100,n);break;case"hsl":case"hsla":if(l=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(f))return s(l[4]),this.setHSL(parseFloat(l[1])/360,parseFloat(l[2])/100,parseFloat(l[3])/100,n);break;default:Mt("Color: Unknown color model "+e)}}else if(a=/^\#([A-Fa-f\d]+)$/.exec(e)){const l=a[1],u=l.length;if(u===3)return this.setRGB(parseInt(l.charAt(0),16)/15,parseInt(l.charAt(1),16)/15,parseInt(l.charAt(2),16)/15,n);if(u===6)return this.setHex(parseInt(l,16),n);Mt("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,n);return this}setColorName(e,n=ri){const s=T0[e.toLowerCase()];return s!==void 0?this.setHex(s,n):Mt("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=gr(e.r),this.g=gr(e.g),this.b=gr(e.b),this}copyLinearToSRGB(e){return this.r=ro(e.r),this.g=ro(e.g),this.b=ro(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=ri){return Ot.workingToColorSpace(Vn.copy(this),e),Math.round(Ft(Vn.r*255,0,255))*65536+Math.round(Ft(Vn.g*255,0,255))*256+Math.round(Ft(Vn.b*255,0,255))}getHexString(e=ri){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,n=Ot.workingColorSpace){Ot.workingToColorSpace(Vn.copy(this),n);const s=Vn.r,a=Vn.g,l=Vn.b,u=Math.max(s,a,l),f=Math.min(s,a,l);let p,m;const x=(f+u)/2;if(f===u)p=0,m=0;else{const y=u-f;switch(m=x<=.5?y/(u+f):y/(2-u-f),u){case s:p=(a-l)/y+(a<l?6:0);break;case a:p=(l-s)/y+2;break;case l:p=(s-a)/y+4;break}p/=6}return e.h=p,e.s=m,e.l=x,e}getRGB(e,n=Ot.workingColorSpace){return Ot.workingToColorSpace(Vn.copy(this),n),e.r=Vn.r,e.g=Vn.g,e.b=Vn.b,e}getStyle(e=ri){Ot.workingToColorSpace(Vn.copy(this),e);const n=Vn.r,s=Vn.g,a=Vn.b;return e!==ri?`color(${e} ${n.toFixed(3)} ${s.toFixed(3)} ${a.toFixed(3)})`:`rgb(${Math.round(n*255)},${Math.round(s*255)},${Math.round(a*255)})`}offsetHSL(e,n,s){return this.getHSL(zr),this.setHSL(zr.h+e,zr.s+n,zr.l+s)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,n){return this.r=e.r+n.r,this.g=e.g+n.g,this.b=e.b+n.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,n){return this.r+=(e.r-this.r)*n,this.g+=(e.g-this.g)*n,this.b+=(e.b-this.b)*n,this}lerpColors(e,n,s){return this.r=e.r+(n.r-e.r)*s,this.g=e.g+(n.g-e.g)*s,this.b=e.b+(n.b-e.b)*s,this}lerpHSL(e,n){this.getHSL(zr),e.getHSL(ml);const s=ku(zr.h,ml.h,n),a=ku(zr.s,ml.s,n),l=ku(zr.l,ml.l,n);return this.setHSL(s,a,l),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const n=this.r,s=this.g,a=this.b,l=e.elements;return this.r=l[0]*n+l[3]*s+l[6]*a,this.g=l[1]*n+l[4]*s+l[7]*a,this.b=l[2]*n+l[5]*s+l[8]*a,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,n=0){return this.r=e[n],this.g=e[n+1],this.b=e[n+2],this}toArray(e=[],n=0){return e[n]=this.r,e[n+1]=this.g,e[n+2]=this.b,e}fromBufferAttribute(e,n){return this.r=e.getX(n),this.g=e.getY(n),this.b=e.getZ(n),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Vn=new Pt;Pt.NAMES=T0;class Mf{constructor(e,n=1,s=1e3){this.isFog=!0,this.name="",this.color=new Pt(e),this.near=n,this.far=s}clone(){return new Mf(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}}class Tv extends Xn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new $r,this.environmentIntensity=1,this.environmentRotation=new $r,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,n){return super.copy(e,n),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const n=super.toJSON(e);return this.fog!==null&&(n.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(n.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(n.object.backgroundIntensity=this.backgroundIntensity),n.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(n.object.environmentIntensity=this.environmentIntensity),n.object.environmentRotation=this.environmentRotation.toArray(),n}}const Ni=new Q,ur=new Q,ju=new Q,dr=new Q,qs=new Q,$s=new Q,Tm=new Q,Yu=new Q,qu=new Q,$u=new Q,Ku=new fn,Zu=new fn,Ju=new fn;class Fi{constructor(e=new Q,n=new Q,s=new Q){this.a=e,this.b=n,this.c=s}static getNormal(e,n,s,a){a.subVectors(s,n),Ni.subVectors(e,n),a.cross(Ni);const l=a.lengthSq();return l>0?a.multiplyScalar(1/Math.sqrt(l)):a.set(0,0,0)}static getBarycoord(e,n,s,a,l){Ni.subVectors(a,n),ur.subVectors(s,n),ju.subVectors(e,n);const u=Ni.dot(Ni),f=Ni.dot(ur),p=Ni.dot(ju),m=ur.dot(ur),x=ur.dot(ju),y=u*m-f*f;if(y===0)return l.set(0,0,0),null;const g=1/y,S=(m*p-f*x)*g,T=(u*x-f*p)*g;return l.set(1-S-T,T,S)}static containsPoint(e,n,s,a){return this.getBarycoord(e,n,s,a,dr)===null?!1:dr.x>=0&&dr.y>=0&&dr.x+dr.y<=1}static getInterpolation(e,n,s,a,l,u,f,p){return this.getBarycoord(e,n,s,a,dr)===null?(p.x=0,p.y=0,"z"in p&&(p.z=0),"w"in p&&(p.w=0),null):(p.setScalar(0),p.addScaledVector(l,dr.x),p.addScaledVector(u,dr.y),p.addScaledVector(f,dr.z),p)}static getInterpolatedAttribute(e,n,s,a,l,u){return Ku.setScalar(0),Zu.setScalar(0),Ju.setScalar(0),Ku.fromBufferAttribute(e,n),Zu.fromBufferAttribute(e,s),Ju.fromBufferAttribute(e,a),u.setScalar(0),u.addScaledVector(Ku,l.x),u.addScaledVector(Zu,l.y),u.addScaledVector(Ju,l.z),u}static isFrontFacing(e,n,s,a){return Ni.subVectors(s,n),ur.subVectors(e,n),Ni.cross(ur).dot(a)<0}set(e,n,s){return this.a.copy(e),this.b.copy(n),this.c.copy(s),this}setFromPointsAndIndices(e,n,s,a){return this.a.copy(e[n]),this.b.copy(e[s]),this.c.copy(e[a]),this}setFromAttributeAndIndices(e,n,s,a){return this.a.fromBufferAttribute(e,n),this.b.fromBufferAttribute(e,s),this.c.fromBufferAttribute(e,a),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Ni.subVectors(this.c,this.b),ur.subVectors(this.a,this.b),Ni.cross(ur).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Fi.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,n){return Fi.getBarycoord(e,this.a,this.b,this.c,n)}getInterpolation(e,n,s,a,l){return Fi.getInterpolation(e,this.a,this.b,this.c,n,s,a,l)}containsPoint(e){return Fi.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Fi.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,n){const s=this.a,a=this.b,l=this.c;let u,f;qs.subVectors(a,s),$s.subVectors(l,s),Yu.subVectors(e,s);const p=qs.dot(Yu),m=$s.dot(Yu);if(p<=0&&m<=0)return n.copy(s);qu.subVectors(e,a);const x=qs.dot(qu),y=$s.dot(qu);if(x>=0&&y<=x)return n.copy(a);const g=p*y-x*m;if(g<=0&&p>=0&&x<=0)return u=p/(p-x),n.copy(s).addScaledVector(qs,u);$u.subVectors(e,l);const S=qs.dot($u),T=$s.dot($u);if(T>=0&&S<=T)return n.copy(l);const C=S*m-p*T;if(C<=0&&m>=0&&T<=0)return f=m/(m-T),n.copy(s).addScaledVector($s,f);const _=x*T-S*y;if(_<=0&&y-x>=0&&S-T>=0)return Tm.subVectors(l,a),f=(y-x)/(y-x+(S-T)),n.copy(a).addScaledVector(Tm,f);const v=1/(_+C+g);return u=C*v,f=g*v,n.copy(s).addScaledVector(qs,u).addScaledVector($s,f)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}class aa{constructor(e=new Q(1/0,1/0,1/0),n=new Q(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=n}set(e,n){return this.min.copy(e),this.max.copy(n),this}setFromArray(e){this.makeEmpty();for(let n=0,s=e.length;n<s;n+=3)this.expandByPoint(Ui.fromArray(e,n));return this}setFromBufferAttribute(e){this.makeEmpty();for(let n=0,s=e.count;n<s;n++)this.expandByPoint(Ui.fromBufferAttribute(e,n));return this}setFromPoints(e){this.makeEmpty();for(let n=0,s=e.length;n<s;n++)this.expandByPoint(e[n]);return this}setFromCenterAndSize(e,n){const s=Ui.copy(n).multiplyScalar(.5);return this.min.copy(e).sub(s),this.max.copy(e).add(s),this}setFromObject(e,n=!1){return this.makeEmpty(),this.expandByObject(e,n)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,n=!1){e.updateWorldMatrix(!1,!1);const s=e.geometry;if(s!==void 0){const l=s.getAttribute("position");if(n===!0&&l!==void 0&&e.isInstancedMesh!==!0)for(let u=0,f=l.count;u<f;u++)e.isMesh===!0?e.getVertexPosition(u,Ui):Ui.fromBufferAttribute(l,u),Ui.applyMatrix4(e.matrixWorld),this.expandByPoint(Ui);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),gl.copy(e.boundingBox)):(s.boundingBox===null&&s.computeBoundingBox(),gl.copy(s.boundingBox)),gl.applyMatrix4(e.matrixWorld),this.union(gl)}const a=e.children;for(let l=0,u=a.length;l<u;l++)this.expandByObject(a[l],n);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,n){return n.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Ui),Ui.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let n,s;return e.normal.x>0?(n=e.normal.x*this.min.x,s=e.normal.x*this.max.x):(n=e.normal.x*this.max.x,s=e.normal.x*this.min.x),e.normal.y>0?(n+=e.normal.y*this.min.y,s+=e.normal.y*this.max.y):(n+=e.normal.y*this.max.y,s+=e.normal.y*this.min.y),e.normal.z>0?(n+=e.normal.z*this.min.z,s+=e.normal.z*this.max.z):(n+=e.normal.z*this.max.z,s+=e.normal.z*this.min.z),n<=-e.constant&&s>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(qo),_l.subVectors(this.max,qo),Ks.subVectors(e.a,qo),Zs.subVectors(e.b,qo),Js.subVectors(e.c,qo),Hr.subVectors(Zs,Ks),Vr.subVectors(Js,Zs),cs.subVectors(Ks,Js);let n=[0,-Hr.z,Hr.y,0,-Vr.z,Vr.y,0,-cs.z,cs.y,Hr.z,0,-Hr.x,Vr.z,0,-Vr.x,cs.z,0,-cs.x,-Hr.y,Hr.x,0,-Vr.y,Vr.x,0,-cs.y,cs.x,0];return!Qu(n,Ks,Zs,Js,_l)||(n=[1,0,0,0,1,0,0,0,1],!Qu(n,Ks,Zs,Js,_l))?!1:(vl.crossVectors(Hr,Vr),n=[vl.x,vl.y,vl.z],Qu(n,Ks,Zs,Js,_l))}clampPoint(e,n){return n.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Ui).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Ui).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(fr[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),fr[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),fr[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),fr[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),fr[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),fr[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),fr[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),fr[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(fr),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const fr=[new Q,new Q,new Q,new Q,new Q,new Q,new Q,new Q],Ui=new Q,gl=new aa,Ks=new Q,Zs=new Q,Js=new Q,Hr=new Q,Vr=new Q,cs=new Q,qo=new Q,_l=new Q,vl=new Q,us=new Q;function Qu(r,e,n,s,a){for(let l=0,u=r.length-3;l<=u;l+=3){us.fromArray(r,l);const f=a.x*Math.abs(us.x)+a.y*Math.abs(us.y)+a.z*Math.abs(us.z),p=e.dot(us),m=n.dot(us),x=s.dot(us);if(Math.max(-Math.max(p,m,x),Math.min(p,m,x))>f)return!1}return!0}const vn=new Q,xl=new kt;let Av=0;class Zi extends ys{constructor(e,n,s=!1){if(super(),Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:Av++}),this.name="",this.array=e,this.itemSize=n,this.count=e!==void 0?e.length/n:0,this.normalized=s,this.usage=dm,this.updateRanges=[],this.gpuType=ji,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,n){this.updateRanges.push({start:e,count:n})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,n,s){e*=this.itemSize,s*=n.itemSize;for(let a=0,l=this.itemSize;a<l;a++)this.array[e+a]=n.array[s+a];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let n=0,s=this.count;n<s;n++)xl.fromBufferAttribute(this,n),xl.applyMatrix3(e),this.setXY(n,xl.x,xl.y);else if(this.itemSize===3)for(let n=0,s=this.count;n<s;n++)vn.fromBufferAttribute(this,n),vn.applyMatrix3(e),this.setXYZ(n,vn.x,vn.y,vn.z);return this}applyMatrix4(e){for(let n=0,s=this.count;n<s;n++)vn.fromBufferAttribute(this,n),vn.applyMatrix4(e),this.setXYZ(n,vn.x,vn.y,vn.z);return this}applyNormalMatrix(e){for(let n=0,s=this.count;n<s;n++)vn.fromBufferAttribute(this,n),vn.applyNormalMatrix(e),this.setXYZ(n,vn.x,vn.y,vn.z);return this}transformDirection(e){for(let n=0,s=this.count;n<s;n++)vn.fromBufferAttribute(this,n),vn.transformDirection(e),this.setXYZ(n,vn.x,vn.y,vn.z);return this}set(e,n=0){return this.array.set(e,n),this}getComponent(e,n){let s=this.array[e*this.itemSize+n];return this.normalized&&(s=jo(s,this.array)),s}setComponent(e,n,s){return this.normalized&&(s=ii(s,this.array)),this.array[e*this.itemSize+n]=s,this}getX(e){let n=this.array[e*this.itemSize];return this.normalized&&(n=jo(n,this.array)),n}setX(e,n){return this.normalized&&(n=ii(n,this.array)),this.array[e*this.itemSize]=n,this}getY(e){let n=this.array[e*this.itemSize+1];return this.normalized&&(n=jo(n,this.array)),n}setY(e,n){return this.normalized&&(n=ii(n,this.array)),this.array[e*this.itemSize+1]=n,this}getZ(e){let n=this.array[e*this.itemSize+2];return this.normalized&&(n=jo(n,this.array)),n}setZ(e,n){return this.normalized&&(n=ii(n,this.array)),this.array[e*this.itemSize+2]=n,this}getW(e){let n=this.array[e*this.itemSize+3];return this.normalized&&(n=jo(n,this.array)),n}setW(e,n){return this.normalized&&(n=ii(n,this.array)),this.array[e*this.itemSize+3]=n,this}setXY(e,n,s){return e*=this.itemSize,this.normalized&&(n=ii(n,this.array),s=ii(s,this.array)),this.array[e+0]=n,this.array[e+1]=s,this}setXYZ(e,n,s,a){return e*=this.itemSize,this.normalized&&(n=ii(n,this.array),s=ii(s,this.array),a=ii(a,this.array)),this.array[e+0]=n,this.array[e+1]=s,this.array[e+2]=a,this}setXYZW(e,n,s,a,l){return e*=this.itemSize,this.normalized&&(n=ii(n,this.array),s=ii(s,this.array),a=ii(a,this.array),l=ii(l,this.array)),this.array[e+0]=n,this.array[e+1]=s,this.array[e+2]=a,this.array[e+3]=l,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==dm&&(e.usage=this.usage),e}dispose(){this.dispatchEvent({type:"dispose"})}}class A0 extends Zi{constructor(e,n,s){super(new Uint16Array(e),n,s)}}class b0 extends Zi{constructor(e,n,s){super(new Uint32Array(e),n,s)}}class mn extends Zi{constructor(e,n,s){super(new Float32Array(e),n,s)}}const bv=new aa,$o=new Q,ed=new Q;class Ef{constructor(e=new Q,n=-1){this.isSphere=!0,this.center=e,this.radius=n}set(e,n){return this.center.copy(e),this.radius=n,this}setFromPoints(e,n){const s=this.center;n!==void 0?s.copy(n):bv.setFromPoints(e).getCenter(s);let a=0;for(let l=0,u=e.length;l<u;l++)a=Math.max(a,s.distanceToSquared(e[l]));return this.radius=Math.sqrt(a),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const n=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=n*n}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,n){const s=this.center.distanceToSquared(e);return n.copy(e),s>this.radius*this.radius&&(n.sub(this.center).normalize(),n.multiplyScalar(this.radius).add(this.center)),n}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;$o.subVectors(e,this.center);const n=$o.lengthSq();if(n>this.radius*this.radius){const s=Math.sqrt(n),a=(s-this.radius)*.5;this.center.addScaledVector($o,a/s),this.radius+=a}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(ed.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint($o.copy(e.center).add(ed)),this.expandByPoint($o.copy(e.center).sub(ed))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}let Cv=0;const Ei=new hn,td=new Xn,Qs=new Q,fi=new aa,Ko=new aa,Pn=new Q;class mi extends ys{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Cv++}),this.uuid=oa(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(av(e)?b0:A0)(e,1):this.index=e,this}setIndirect(e,n=0){return this.indirect=e,this.indirectOffset=n,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,n){return this.attributes[e]=n,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,n,s=0){this.groups.push({start:e,count:n,materialIndex:s})}clearGroups(){this.groups=[]}setDrawRange(e,n){this.drawRange.start=e,this.drawRange.count=n}applyMatrix4(e){const n=this.attributes.position;n!==void 0&&(n.applyMatrix4(e),n.needsUpdate=!0);const s=this.attributes.normal;if(s!==void 0){const l=new At().getNormalMatrix(e);s.applyNormalMatrix(l),s.needsUpdate=!0}const a=this.attributes.tangent;return a!==void 0&&(a.transformDirection(e),a.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Ei.makeRotationFromQuaternion(e),this.applyMatrix4(Ei),this}rotateX(e){return Ei.makeRotationX(e),this.applyMatrix4(Ei),this}rotateY(e){return Ei.makeRotationY(e),this.applyMatrix4(Ei),this}rotateZ(e){return Ei.makeRotationZ(e),this.applyMatrix4(Ei),this}translate(e,n,s){return Ei.makeTranslation(e,n,s),this.applyMatrix4(Ei),this}scale(e,n,s){return Ei.makeScale(e,n,s),this.applyMatrix4(Ei),this}lookAt(e){return td.lookAt(e),td.updateMatrix(),this.applyMatrix4(td.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Qs).negate(),this.translate(Qs.x,Qs.y,Qs.z),this}setFromPoints(e){const n=this.getAttribute("position");if(n===void 0){const s=[];for(let a=0,l=e.length;a<l;a++){const u=e[a];s.push(u.x,u.y,u.z||0)}this.setAttribute("position",new mn(s,3))}else{const s=Math.min(e.length,n.count);for(let a=0;a<s;a++){const l=e[a];n.setXYZ(a,l.x,l.y,l.z||0)}e.length>n.count&&Mt("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),n.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new aa);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Ht("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new Q(-1/0,-1/0,-1/0),new Q(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),n)for(let s=0,a=n.length;s<a;s++){const l=n[s];fi.setFromBufferAttribute(l),this.morphTargetsRelative?(Pn.addVectors(this.boundingBox.min,fi.min),this.boundingBox.expandByPoint(Pn),Pn.addVectors(this.boundingBox.max,fi.max),this.boundingBox.expandByPoint(Pn)):(this.boundingBox.expandByPoint(fi.min),this.boundingBox.expandByPoint(fi.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&Ht('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Ef);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Ht("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new Q,1/0);return}if(e){const s=this.boundingSphere.center;if(fi.setFromBufferAttribute(e),n)for(let l=0,u=n.length;l<u;l++){const f=n[l];Ko.setFromBufferAttribute(f),this.morphTargetsRelative?(Pn.addVectors(fi.min,Ko.min),fi.expandByPoint(Pn),Pn.addVectors(fi.max,Ko.max),fi.expandByPoint(Pn)):(fi.expandByPoint(Ko.min),fi.expandByPoint(Ko.max))}fi.getCenter(s);let a=0;for(let l=0,u=e.count;l<u;l++)Pn.fromBufferAttribute(e,l),a=Math.max(a,s.distanceToSquared(Pn));if(n)for(let l=0,u=n.length;l<u;l++){const f=n[l],p=this.morphTargetsRelative;for(let m=0,x=f.count;m<x;m++)Pn.fromBufferAttribute(f,m),p&&(Qs.fromBufferAttribute(e,m),Pn.add(Qs)),a=Math.max(a,s.distanceToSquared(Pn))}this.boundingSphere.radius=Math.sqrt(a),isNaN(this.boundingSphere.radius)&&Ht('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,n=this.attributes;if(e===null||n.position===void 0||n.normal===void 0||n.uv===void 0){Ht("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const s=n.position,a=n.normal,l=n.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Zi(new Float32Array(4*s.count),4));const u=this.getAttribute("tangent"),f=[],p=[];for(let w=0;w<s.count;w++)f[w]=new Q,p[w]=new Q;const m=new Q,x=new Q,y=new Q,g=new kt,S=new kt,T=new kt,C=new Q,_=new Q;function v(w,I,j){m.fromBufferAttribute(s,w),x.fromBufferAttribute(s,I),y.fromBufferAttribute(s,j),g.fromBufferAttribute(l,w),S.fromBufferAttribute(l,I),T.fromBufferAttribute(l,j),x.sub(m),y.sub(m),S.sub(g),T.sub(g);const O=1/(S.x*T.y-T.x*S.y);isFinite(O)&&(C.copy(x).multiplyScalar(T.y).addScaledVector(y,-S.y).multiplyScalar(O),_.copy(y).multiplyScalar(S.x).addScaledVector(x,-T.x).multiplyScalar(O),f[w].add(C),f[I].add(C),f[j].add(C),p[w].add(_),p[I].add(_),p[j].add(_))}let b=this.groups;b.length===0&&(b=[{start:0,count:e.count}]);for(let w=0,I=b.length;w<I;++w){const j=b[w],O=j.start,Y=j.count;for(let le=O,ge=O+Y;le<ge;le+=3)v(e.getX(le+0),e.getX(le+1),e.getX(le+2))}const L=new Q,P=new Q,z=new Q,D=new Q;function k(w){z.fromBufferAttribute(a,w),D.copy(z);const I=f[w];L.copy(I),L.sub(z.multiplyScalar(z.dot(I))).normalize(),P.crossVectors(D,I);const O=P.dot(p[w])<0?-1:1;u.setXYZW(w,L.x,L.y,L.z,O)}for(let w=0,I=b.length;w<I;++w){const j=b[w],O=j.start,Y=j.count;for(let le=O,ge=O+Y;le<ge;le+=3)k(e.getX(le+0)),k(e.getX(le+1)),k(e.getX(le+2))}}computeVertexNormals(){const e=this.index,n=this.getAttribute("position");if(n!==void 0){let s=this.getAttribute("normal");if(s===void 0)s=new Zi(new Float32Array(n.count*3),3),this.setAttribute("normal",s);else for(let g=0,S=s.count;g<S;g++)s.setXYZ(g,0,0,0);const a=new Q,l=new Q,u=new Q,f=new Q,p=new Q,m=new Q,x=new Q,y=new Q;if(e)for(let g=0,S=e.count;g<S;g+=3){const T=e.getX(g+0),C=e.getX(g+1),_=e.getX(g+2);a.fromBufferAttribute(n,T),l.fromBufferAttribute(n,C),u.fromBufferAttribute(n,_),x.subVectors(u,l),y.subVectors(a,l),x.cross(y),f.fromBufferAttribute(s,T),p.fromBufferAttribute(s,C),m.fromBufferAttribute(s,_),f.add(x),p.add(x),m.add(x),s.setXYZ(T,f.x,f.y,f.z),s.setXYZ(C,p.x,p.y,p.z),s.setXYZ(_,m.x,m.y,m.z)}else for(let g=0,S=n.count;g<S;g+=3)a.fromBufferAttribute(n,g+0),l.fromBufferAttribute(n,g+1),u.fromBufferAttribute(n,g+2),x.subVectors(u,l),y.subVectors(a,l),x.cross(y),s.setXYZ(g+0,x.x,x.y,x.z),s.setXYZ(g+1,x.x,x.y,x.z),s.setXYZ(g+2,x.x,x.y,x.z);this.normalizeNormals(),s.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let n=0,s=e.count;n<s;n++)Pn.fromBufferAttribute(e,n),Pn.normalize(),e.setXYZ(n,Pn.x,Pn.y,Pn.z)}toNonIndexed(){function e(f,p){const m=f.array,x=f.itemSize,y=f.normalized,g=new m.constructor(p.length*x);let S=0,T=0;for(let C=0,_=p.length;C<_;C++){f.isInterleavedBufferAttribute?S=p[C]*f.data.stride+f.offset:S=p[C]*x;for(let v=0;v<x;v++)g[T++]=m[S++]}return new Zi(g,x,y)}if(this.index===null)return Mt("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const n=new mi,s=this.index.array,a=this.attributes;for(const f in a){const p=a[f],m=e(p,s);n.setAttribute(f,m)}const l=this.morphAttributes;for(const f in l){const p=[],m=l[f];for(let x=0,y=m.length;x<y;x++){const g=m[x],S=e(g,s);p.push(S)}n.morphAttributes[f]=p}n.morphTargetsRelative=this.morphTargetsRelative;const u=this.groups;for(let f=0,p=u.length;f<p;f++){const m=u[f];n.addGroup(m.start,m.count,m.materialIndex)}return n}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const p=this.parameters;for(const m in p)p[m]!==void 0&&(e[m]=p[m]);return e}e.data={attributes:{}};const n=this.index;n!==null&&(e.data.index={type:n.array.constructor.name,array:Array.prototype.slice.call(n.array)});const s=this.attributes;for(const p in s){const m=s[p];e.data.attributes[p]=m.toJSON(e.data)}const a={};let l=!1;for(const p in this.morphAttributes){const m=this.morphAttributes[p],x=[];for(let y=0,g=m.length;y<g;y++){const S=m[y];x.push(S.toJSON(e.data))}x.length>0&&(a[p]=x,l=!0)}l&&(e.data.morphAttributes=a,e.data.morphTargetsRelative=this.morphTargetsRelative);const u=this.groups;u.length>0&&(e.data.groups=JSON.parse(JSON.stringify(u)));const f=this.boundingSphere;return f!==null&&(e.data.boundingSphere=f.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const n={};this.name=e.name;const s=e.index;s!==null&&this.setIndex(s.clone());const a=e.attributes;for(const m in a){const x=a[m];this.setAttribute(m,x.clone(n))}const l=e.morphAttributes;for(const m in l){const x=[],y=l[m];for(let g=0,S=y.length;g<S;g++)x.push(y[g].clone(n));this.morphAttributes[m]=x}this.morphTargetsRelative=e.morphTargetsRelative;const u=e.groups;for(let m=0,x=u.length;m<x;m++){const y=u[m];this.addGroup(y.start,y.count,y.materialIndex)}const f=e.boundingBox;f!==null&&(this.boundingBox=f.clone());const p=e.boundingSphere;return p!==null&&(this.boundingSphere=p.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}let Rv=0;class la extends ys{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Rv++}),this.uuid=oa(),this.name="",this.type="Material",this.blending=io,this.side=qr,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=md,this.blendDst=gd,this.blendEquation=ps,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Pt(0,0,0),this.blendAlpha=0,this.depthFunc=so,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=um,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Gs,this.stencilZFail=Gs,this.stencilZPass=Gs,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const n in e){const s=e[n];if(s===void 0){Mt(`Material: parameter '${n}' has value of undefined.`);continue}const a=this[n];if(a===void 0){Mt(`Material: '${n}' is not a property of THREE.${this.type}.`);continue}a&&a.isColor?a.set(s):a&&a.isVector3&&s&&s.isVector3?a.copy(s):this[n]=s}}toJSON(e){const n=e===void 0||typeof e=="string";n&&(e={textures:{},images:{}});const s={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.color&&this.color.isColor&&(s.color=this.color.getHex()),this.roughness!==void 0&&(s.roughness=this.roughness),this.metalness!==void 0&&(s.metalness=this.metalness),this.sheen!==void 0&&(s.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(s.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(s.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(s.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(s.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(s.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(s.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(s.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(s.shininess=this.shininess),this.clearcoat!==void 0&&(s.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(s.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(s.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(s.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(s.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,s.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(s.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(s.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(s.dispersion=this.dispersion),this.iridescence!==void 0&&(s.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(s.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(s.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(s.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(s.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(s.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(s.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(s.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(s.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(s.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(s.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(s.lightMap=this.lightMap.toJSON(e).uuid,s.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(s.aoMap=this.aoMap.toJSON(e).uuid,s.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(s.bumpMap=this.bumpMap.toJSON(e).uuid,s.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(s.normalMap=this.normalMap.toJSON(e).uuid,s.normalMapType=this.normalMapType,s.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(s.displacementMap=this.displacementMap.toJSON(e).uuid,s.displacementScale=this.displacementScale,s.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(s.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(s.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(s.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(s.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(s.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(s.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(s.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(s.combine=this.combine)),this.envMapRotation!==void 0&&(s.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(s.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(s.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(s.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(s.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(s.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(s.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(s.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(s.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(s.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(s.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(s.size=this.size),this.shadowSide!==null&&(s.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(s.sizeAttenuation=this.sizeAttenuation),this.blending!==io&&(s.blending=this.blending),this.side!==qr&&(s.side=this.side),this.vertexColors===!0&&(s.vertexColors=!0),this.opacity<1&&(s.opacity=this.opacity),this.transparent===!0&&(s.transparent=!0),this.blendSrc!==md&&(s.blendSrc=this.blendSrc),this.blendDst!==gd&&(s.blendDst=this.blendDst),this.blendEquation!==ps&&(s.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(s.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(s.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(s.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(s.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(s.blendAlpha=this.blendAlpha),this.depthFunc!==so&&(s.depthFunc=this.depthFunc),this.depthTest===!1&&(s.depthTest=this.depthTest),this.depthWrite===!1&&(s.depthWrite=this.depthWrite),this.colorWrite===!1&&(s.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(s.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==um&&(s.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(s.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(s.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Gs&&(s.stencilFail=this.stencilFail),this.stencilZFail!==Gs&&(s.stencilZFail=this.stencilZFail),this.stencilZPass!==Gs&&(s.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(s.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(s.rotation=this.rotation),this.polygonOffset===!0&&(s.polygonOffset=!0),this.polygonOffsetFactor!==0&&(s.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(s.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(s.linewidth=this.linewidth),this.dashSize!==void 0&&(s.dashSize=this.dashSize),this.gapSize!==void 0&&(s.gapSize=this.gapSize),this.scale!==void 0&&(s.scale=this.scale),this.dithering===!0&&(s.dithering=!0),this.alphaTest>0&&(s.alphaTest=this.alphaTest),this.alphaHash===!0&&(s.alphaHash=!0),this.alphaToCoverage===!0&&(s.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(s.premultipliedAlpha=!0),this.forceSinglePass===!0&&(s.forceSinglePass=!0),this.allowOverride===!1&&(s.allowOverride=!1),this.wireframe===!0&&(s.wireframe=!0),this.wireframeLinewidth>1&&(s.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(s.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(s.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(s.flatShading=!0),this.visible===!1&&(s.visible=!1),this.toneMapped===!1&&(s.toneMapped=!1),this.fog===!1&&(s.fog=!1),Object.keys(this.userData).length>0&&(s.userData=this.userData);function a(l){const u=[];for(const f in l){const p=l[f];delete p.metadata,u.push(p)}return u}if(n){const l=a(e.textures),u=a(e.images);l.length>0&&(s.textures=l),u.length>0&&(s.images=u)}return s}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const n=e.clippingPlanes;let s=null;if(n!==null){const a=n.length;s=new Array(a);for(let l=0;l!==a;++l)s[l]=n[l].clone()}return this.clippingPlanes=s,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}const hr=new Q,nd=new Q,yl=new Q,Gr=new Q,id=new Q,Sl=new Q,rd=new Q;class C0{constructor(e=new Q,n=new Q(0,0,-1)){this.origin=e,this.direction=n}set(e,n){return this.origin.copy(e),this.direction.copy(n),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,n){return n.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,hr)),this}closestPointToPoint(e,n){n.subVectors(e,this.origin);const s=n.dot(this.direction);return s<0?n.copy(this.origin):n.copy(this.origin).addScaledVector(this.direction,s)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const n=hr.subVectors(e,this.origin).dot(this.direction);return n<0?this.origin.distanceToSquared(e):(hr.copy(this.origin).addScaledVector(this.direction,n),hr.distanceToSquared(e))}distanceSqToSegment(e,n,s,a){nd.copy(e).add(n).multiplyScalar(.5),yl.copy(n).sub(e).normalize(),Gr.copy(this.origin).sub(nd);const l=e.distanceTo(n)*.5,u=-this.direction.dot(yl),f=Gr.dot(this.direction),p=-Gr.dot(yl),m=Gr.lengthSq(),x=Math.abs(1-u*u);let y,g,S,T;if(x>0)if(y=u*p-f,g=u*f-p,T=l*x,y>=0)if(g>=-T)if(g<=T){const C=1/x;y*=C,g*=C,S=y*(y+u*g+2*f)+g*(u*y+g+2*p)+m}else g=l,y=Math.max(0,-(u*g+f)),S=-y*y+g*(g+2*p)+m;else g=-l,y=Math.max(0,-(u*g+f)),S=-y*y+g*(g+2*p)+m;else g<=-T?(y=Math.max(0,-(-u*l+f)),g=y>0?-l:Math.min(Math.max(-l,-p),l),S=-y*y+g*(g+2*p)+m):g<=T?(y=0,g=Math.min(Math.max(-l,-p),l),S=g*(g+2*p)+m):(y=Math.max(0,-(u*l+f)),g=y>0?l:Math.min(Math.max(-l,-p),l),S=-y*y+g*(g+2*p)+m);else g=u>0?-l:l,y=Math.max(0,-(u*g+f)),S=-y*y+g*(g+2*p)+m;return s&&s.copy(this.origin).addScaledVector(this.direction,y),a&&a.copy(nd).addScaledVector(yl,g),S}intersectSphere(e,n){hr.subVectors(e.center,this.origin);const s=hr.dot(this.direction),a=hr.dot(hr)-s*s,l=e.radius*e.radius;if(a>l)return null;const u=Math.sqrt(l-a),f=s-u,p=s+u;return p<0?null:f<0?this.at(p,n):this.at(f,n)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const n=e.normal.dot(this.direction);if(n===0)return e.distanceToPoint(this.origin)===0?0:null;const s=-(this.origin.dot(e.normal)+e.constant)/n;return s>=0?s:null}intersectPlane(e,n){const s=this.distanceToPlane(e);return s===null?null:this.at(s,n)}intersectsPlane(e){const n=e.distanceToPoint(this.origin);return n===0||e.normal.dot(this.direction)*n<0}intersectBox(e,n){let s,a,l,u,f,p;const m=1/this.direction.x,x=1/this.direction.y,y=1/this.direction.z,g=this.origin;return m>=0?(s=(e.min.x-g.x)*m,a=(e.max.x-g.x)*m):(s=(e.max.x-g.x)*m,a=(e.min.x-g.x)*m),x>=0?(l=(e.min.y-g.y)*x,u=(e.max.y-g.y)*x):(l=(e.max.y-g.y)*x,u=(e.min.y-g.y)*x),s>u||l>a||((l>s||isNaN(s))&&(s=l),(u<a||isNaN(a))&&(a=u),y>=0?(f=(e.min.z-g.z)*y,p=(e.max.z-g.z)*y):(f=(e.max.z-g.z)*y,p=(e.min.z-g.z)*y),s>p||f>a)||((f>s||s!==s)&&(s=f),(p<a||a!==a)&&(a=p),a<0)?null:this.at(s>=0?s:a,n)}intersectsBox(e){return this.intersectBox(e,hr)!==null}intersectTriangle(e,n,s,a,l){id.subVectors(n,e),Sl.subVectors(s,e),rd.crossVectors(id,Sl);let u=this.direction.dot(rd),f;if(u>0){if(a)return null;f=1}else if(u<0)f=-1,u=-u;else return null;Gr.subVectors(this.origin,e);const p=f*this.direction.dot(Sl.crossVectors(Gr,Sl));if(p<0)return null;const m=f*this.direction.dot(id.cross(Gr));if(m<0||p+m>u)return null;const x=-f*Gr.dot(rd);return x<0?null:this.at(x/u,l)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Xl extends la{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Pt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new $r,this.combine=l0,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Am=new hn,ds=new C0,Ml=new Ef,bm=new Q,El=new Q,wl=new Q,Tl=new Q,sd=new Q,Al=new Q,Cm=new Q,bl=new Q;class Pe extends Xn{constructor(e=new mi,n=new Xl){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=n,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const n=this.geometry.morphAttributes,s=Object.keys(n);if(s.length>0){const a=n[s[0]];if(a!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let l=0,u=a.length;l<u;l++){const f=a[l].name||String(l);this.morphTargetInfluences.push(0),this.morphTargetDictionary[f]=l}}}}getVertexPosition(e,n){const s=this.geometry,a=s.attributes.position,l=s.morphAttributes.position,u=s.morphTargetsRelative;n.fromBufferAttribute(a,e);const f=this.morphTargetInfluences;if(l&&f){Al.set(0,0,0);for(let p=0,m=l.length;p<m;p++){const x=f[p],y=l[p];x!==0&&(sd.fromBufferAttribute(y,e),u?Al.addScaledVector(sd,x):Al.addScaledVector(sd.sub(n),x))}n.add(Al)}return n}raycast(e,n){const s=this.geometry,a=this.material,l=this.matrixWorld;a!==void 0&&(s.boundingSphere===null&&s.computeBoundingSphere(),Ml.copy(s.boundingSphere),Ml.applyMatrix4(l),ds.copy(e.ray).recast(e.near),!(Ml.containsPoint(ds.origin)===!1&&(ds.intersectSphere(Ml,bm)===null||ds.origin.distanceToSquared(bm)>(e.far-e.near)**2))&&(Am.copy(l).invert(),ds.copy(e.ray).applyMatrix4(Am),!(s.boundingBox!==null&&ds.intersectsBox(s.boundingBox)===!1)&&this._computeIntersections(e,n,ds)))}_computeIntersections(e,n,s){let a;const l=this.geometry,u=this.material,f=l.index,p=l.attributes.position,m=l.attributes.uv,x=l.attributes.uv1,y=l.attributes.normal,g=l.groups,S=l.drawRange;if(f!==null)if(Array.isArray(u))for(let T=0,C=g.length;T<C;T++){const _=g[T],v=u[_.materialIndex],b=Math.max(_.start,S.start),L=Math.min(f.count,Math.min(_.start+_.count,S.start+S.count));for(let P=b,z=L;P<z;P+=3){const D=f.getX(P),k=f.getX(P+1),w=f.getX(P+2);a=Cl(this,v,e,s,m,x,y,D,k,w),a&&(a.faceIndex=Math.floor(P/3),a.face.materialIndex=_.materialIndex,n.push(a))}}else{const T=Math.max(0,S.start),C=Math.min(f.count,S.start+S.count);for(let _=T,v=C;_<v;_+=3){const b=f.getX(_),L=f.getX(_+1),P=f.getX(_+2);a=Cl(this,u,e,s,m,x,y,b,L,P),a&&(a.faceIndex=Math.floor(_/3),n.push(a))}}else if(p!==void 0)if(Array.isArray(u))for(let T=0,C=g.length;T<C;T++){const _=g[T],v=u[_.materialIndex],b=Math.max(_.start,S.start),L=Math.min(p.count,Math.min(_.start+_.count,S.start+S.count));for(let P=b,z=L;P<z;P+=3){const D=P,k=P+1,w=P+2;a=Cl(this,v,e,s,m,x,y,D,k,w),a&&(a.faceIndex=Math.floor(P/3),a.face.materialIndex=_.materialIndex,n.push(a))}}else{const T=Math.max(0,S.start),C=Math.min(p.count,S.start+S.count);for(let _=T,v=C;_<v;_+=3){const b=_,L=_+1,P=_+2;a=Cl(this,u,e,s,m,x,y,b,L,P),a&&(a.faceIndex=Math.floor(_/3),n.push(a))}}}}function Pv(r,e,n,s,a,l,u,f){let p;if(e.side===si?p=s.intersectTriangle(u,l,a,!0,f):p=s.intersectTriangle(a,l,u,e.side===qr,f),p===null)return null;bl.copy(f),bl.applyMatrix4(r.matrixWorld);const m=n.ray.origin.distanceTo(bl);return m<n.near||m>n.far?null:{distance:m,point:bl.clone(),object:r}}function Cl(r,e,n,s,a,l,u,f,p,m){r.getVertexPosition(f,El),r.getVertexPosition(p,wl),r.getVertexPosition(m,Tl);const x=Pv(r,e,n,s,El,wl,Tl,Cm);if(x){const y=new Q;Fi.getBarycoord(Cm,El,wl,Tl,y),a&&(x.uv=Fi.getInterpolatedAttribute(a,f,p,m,y,new kt)),l&&(x.uv1=Fi.getInterpolatedAttribute(l,f,p,m,y,new kt)),u&&(x.normal=Fi.getInterpolatedAttribute(u,f,p,m,y,new Q),x.normal.dot(s.direction)>0&&x.normal.multiplyScalar(-1));const g={a:f,b:p,c:m,normal:new Q,materialIndex:0};Fi.getNormal(El,wl,Tl,g.normal),x.face=g,x.barycoord=y}return x}class Lv extends Wn{constructor(e=null,n=1,s=1,a,l,u,f,p,m=Un,x=Un,y,g){super(null,u,f,p,m,x,a,l,y,g),this.isDataTexture=!0,this.image={data:e,width:n,height:s},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const od=new Q,Dv=new Q,Iv=new At;class hs{constructor(e=new Q(1,0,0),n=0){this.isPlane=!0,this.normal=e,this.constant=n}set(e,n){return this.normal.copy(e),this.constant=n,this}setComponents(e,n,s,a){return this.normal.set(e,n,s),this.constant=a,this}setFromNormalAndCoplanarPoint(e,n){return this.normal.copy(e),this.constant=-n.dot(this.normal),this}setFromCoplanarPoints(e,n,s){const a=od.subVectors(s,n).cross(Dv.subVectors(e,n)).normalize();return this.setFromNormalAndCoplanarPoint(a,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,n){return n.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,n,s=!0){const a=e.delta(od),l=this.normal.dot(a);if(l===0)return this.distanceToPoint(e.start)===0?n.copy(e.start):null;const u=-(e.start.dot(this.normal)+this.constant)/l;return s===!0&&(u<0||u>1)?null:n.copy(e.start).addScaledVector(a,u)}intersectsLine(e){const n=this.distanceToPoint(e.start),s=this.distanceToPoint(e.end);return n<0&&s>0||s<0&&n>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,n){const s=n||Iv.getNormalMatrix(e),a=this.coplanarPoint(od).applyMatrix4(e),l=this.normal.applyMatrix3(s).normalize();return this.constant=-a.dot(l),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const fs=new Ef,Nv=new kt(.5,.5),Rl=new Q;class wf{constructor(e=new hs,n=new hs,s=new hs,a=new hs,l=new hs,u=new hs){this.planes=[e,n,s,a,l,u]}set(e,n,s,a,l,u){const f=this.planes;return f[0].copy(e),f[1].copy(n),f[2].copy(s),f[3].copy(a),f[4].copy(l),f[5].copy(u),this}copy(e){const n=this.planes;for(let s=0;s<6;s++)n[s].copy(e.planes[s]);return this}setFromProjectionMatrix(e,n=Yi,s=!1){const a=this.planes,l=e.elements,u=l[0],f=l[1],p=l[2],m=l[3],x=l[4],y=l[5],g=l[6],S=l[7],T=l[8],C=l[9],_=l[10],v=l[11],b=l[12],L=l[13],P=l[14],z=l[15];if(a[0].setComponents(m-u,S-x,v-T,z-b).normalize(),a[1].setComponents(m+u,S+x,v+T,z+b).normalize(),a[2].setComponents(m+f,S+y,v+C,z+L).normalize(),a[3].setComponents(m-f,S-y,v-C,z-L).normalize(),s)a[4].setComponents(p,g,_,P).normalize(),a[5].setComponents(m-p,S-g,v-_,z-P).normalize();else if(a[4].setComponents(m-p,S-g,v-_,z-P).normalize(),n===Yi)a[5].setComponents(m+p,S+g,v+_,z+P).normalize();else if(n===sa)a[5].setComponents(p,g,_,P).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+n);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),fs.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const n=e.geometry;n.boundingSphere===null&&n.computeBoundingSphere(),fs.copy(n.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(fs)}intersectsSprite(e){fs.center.set(0,0,0);const n=Nv.distanceTo(e.center);return fs.radius=.7071067811865476+n,fs.applyMatrix4(e.matrixWorld),this.intersectsSphere(fs)}intersectsSphere(e){const n=this.planes,s=e.center,a=-e.radius;for(let l=0;l<6;l++)if(n[l].distanceToPoint(s)<a)return!1;return!0}intersectsBox(e){const n=this.planes;for(let s=0;s<6;s++){const a=n[s];if(Rl.x=a.normal.x>0?e.max.x:e.min.x,Rl.y=a.normal.y>0?e.max.y:e.min.y,Rl.z=a.normal.z>0?e.max.z:e.min.z,a.distanceToPoint(Rl)<0)return!1}return!0}containsPoint(e){const n=this.planes;for(let s=0;s<6;s++)if(n[s].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class R0 extends Wn{constructor(e=[],n=vs,s,a,l,u,f,p,m,x){super(e,n,s,a,l,u,f,p,m,x),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class Uv extends Wn{constructor(e,n,s,a,l,u,f,p,m){super(e,n,s,a,l,u,f,p,m),this.isCanvasTexture=!0,this.needsUpdate=!0}}class ao extends Wn{constructor(e,n,s=Ji,a,l,u,f=Un,p=Un,m,x=vr,y=1){if(x!==vr&&x!==_s)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const g={width:e,height:n,depth:y};super(g,a,l,u,f,p,x,s,m),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new yf(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const n=super.toJSON(e);return this.compareFunction!==null&&(n.compareFunction=this.compareFunction),n}}class Fv extends ao{constructor(e,n=Ji,s=vs,a,l,u=Un,f=Un,p,m=vr){const x={width:e,height:e,depth:1},y=[x,x,x,x,x,x];super(e,e,n,s,a,l,u,f,p,m),this.image=y,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}}class P0 extends Wn{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}class uo extends mi{constructor(e=1,n=1,s=1,a=1,l=1,u=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:n,depth:s,widthSegments:a,heightSegments:l,depthSegments:u};const f=this;a=Math.floor(a),l=Math.floor(l),u=Math.floor(u);const p=[],m=[],x=[],y=[];let g=0,S=0;T("z","y","x",-1,-1,s,n,e,u,l,0),T("z","y","x",1,-1,s,n,-e,u,l,1),T("x","z","y",1,1,e,s,n,a,u,2),T("x","z","y",1,-1,e,s,-n,a,u,3),T("x","y","z",1,-1,e,n,s,a,l,4),T("x","y","z",-1,-1,e,n,-s,a,l,5),this.setIndex(p),this.setAttribute("position",new mn(m,3)),this.setAttribute("normal",new mn(x,3)),this.setAttribute("uv",new mn(y,2));function T(C,_,v,b,L,P,z,D,k,w,I){const j=P/k,O=z/w,Y=P/2,le=z/2,ge=D/2,W=k+1,ne=w+1;let $=0,J=0;const fe=new Q;for(let he=0;he<ne;he++){const F=he*O-le;for(let ie=0;ie<W;ie++){const We=ie*j-Y;fe[C]=We*b,fe[_]=F*L,fe[v]=ge,m.push(fe.x,fe.y,fe.z),fe[C]=0,fe[_]=0,fe[v]=D>0?1:-1,x.push(fe.x,fe.y,fe.z),y.push(ie/k),y.push(1-he/w),$+=1}}for(let he=0;he<w;he++)for(let F=0;F<k;F++){const ie=g+F+W*he,We=g+F+W*(he+1),Fe=g+(F+1)+W*(he+1),Xe=g+(F+1)+W*he;p.push(ie,We,Xe),p.push(We,Fe,Xe),J+=6}f.addGroup(S,J,I),S+=J,g+=$}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new uo(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}class jl extends mi{constructor(e=1,n=32,s=0,a=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:e,segments:n,thetaStart:s,thetaLength:a},n=Math.max(3,n);const l=[],u=[],f=[],p=[],m=new Q,x=new kt;u.push(0,0,0),f.push(0,0,1),p.push(.5,.5);for(let y=0,g=3;y<=n;y++,g+=3){const S=s+y/n*a;m.x=e*Math.cos(S),m.y=e*Math.sin(S),u.push(m.x,m.y,m.z),f.push(0,0,1),x.x=(u[g]/e+1)/2,x.y=(u[g+1]/e+1)/2,p.push(x.x,x.y)}for(let y=1;y<=n;y++)l.push(y,y+1,0);this.setIndex(l),this.setAttribute("position",new mn(u,3)),this.setAttribute("normal",new mn(f,3)),this.setAttribute("uv",new mn(p,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new jl(e.radius,e.segments,e.thetaStart,e.thetaLength)}}class ca extends mi{constructor(e=1,n=1,s=1,a=32,l=1,u=!1,f=0,p=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:n,height:s,radialSegments:a,heightSegments:l,openEnded:u,thetaStart:f,thetaLength:p};const m=this;a=Math.floor(a),l=Math.floor(l);const x=[],y=[],g=[],S=[];let T=0;const C=[],_=s/2;let v=0;b(),u===!1&&(e>0&&L(!0),n>0&&L(!1)),this.setIndex(x),this.setAttribute("position",new mn(y,3)),this.setAttribute("normal",new mn(g,3)),this.setAttribute("uv",new mn(S,2));function b(){const P=new Q,z=new Q;let D=0;const k=(n-e)/s;for(let w=0;w<=l;w++){const I=[],j=w/l,O=j*(n-e)+e;for(let Y=0;Y<=a;Y++){const le=Y/a,ge=le*p+f,W=Math.sin(ge),ne=Math.cos(ge);z.x=O*W,z.y=-j*s+_,z.z=O*ne,y.push(z.x,z.y,z.z),P.set(W,k,ne).normalize(),g.push(P.x,P.y,P.z),S.push(le,1-j),I.push(T++)}C.push(I)}for(let w=0;w<a;w++)for(let I=0;I<l;I++){const j=C[I][w],O=C[I+1][w],Y=C[I+1][w+1],le=C[I][w+1];(e>0||I!==0)&&(x.push(j,O,le),D+=3),(n>0||I!==l-1)&&(x.push(O,Y,le),D+=3)}m.addGroup(v,D,0),v+=D}function L(P){const z=T,D=new kt,k=new Q;let w=0;const I=P===!0?e:n,j=P===!0?1:-1;for(let Y=1;Y<=a;Y++)y.push(0,_*j,0),g.push(0,j,0),S.push(.5,.5),T++;const O=T;for(let Y=0;Y<=a;Y++){const ge=Y/a*p+f,W=Math.cos(ge),ne=Math.sin(ge);k.x=I*ne,k.y=_*j,k.z=I*W,y.push(k.x,k.y,k.z),g.push(0,j,0),D.x=W*.5+.5,D.y=ne*.5*j+.5,S.push(D.x,D.y),T++}for(let Y=0;Y<a;Y++){const le=z+Y,ge=O+Y;P===!0?x.push(ge,ge+1,le):x.push(ge+1,ge,le),w+=3}m.addGroup(v,w,P===!0?1:2),v+=w}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ca(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class Yl extends ca{constructor(e=1,n=1,s=32,a=1,l=!1,u=0,f=Math.PI*2){super(0,e,n,s,a,l,u,f),this.type="ConeGeometry",this.parameters={radius:e,height:n,radialSegments:s,heightSegments:a,openEnded:l,thetaStart:u,thetaLength:f}}static fromJSON(e){return new Yl(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class xn extends mi{constructor(e=1,n=1,s=1,a=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:n,widthSegments:s,heightSegments:a};const l=e/2,u=n/2,f=Math.floor(s),p=Math.floor(a),m=f+1,x=p+1,y=e/f,g=n/p,S=[],T=[],C=[],_=[];for(let v=0;v<x;v++){const b=v*g-u;for(let L=0;L<m;L++){const P=L*y-l;T.push(P,-b,0),C.push(0,0,1),_.push(L/f),_.push(1-v/p)}}for(let v=0;v<p;v++)for(let b=0;b<f;b++){const L=b+m*v,P=b+m*(v+1),z=b+1+m*(v+1),D=b+1+m*v;S.push(L,P,D),S.push(P,z,D)}this.setIndex(S),this.setAttribute("position",new mn(T,3)),this.setAttribute("normal",new mn(C,3)),this.setAttribute("uv",new mn(_,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new xn(e.width,e.height,e.widthSegments,e.heightSegments)}}class Tf extends mi{constructor(e=1,n=32,s=16,a=0,l=Math.PI*2,u=0,f=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:n,heightSegments:s,phiStart:a,phiLength:l,thetaStart:u,thetaLength:f},n=Math.max(3,Math.floor(n)),s=Math.max(2,Math.floor(s));const p=Math.min(u+f,Math.PI);let m=0;const x=[],y=new Q,g=new Q,S=[],T=[],C=[],_=[];for(let v=0;v<=s;v++){const b=[],L=v/s;let P=0;v===0&&u===0?P=.5/n:v===s&&p===Math.PI&&(P=-.5/n);for(let z=0;z<=n;z++){const D=z/n;y.x=-e*Math.cos(a+D*l)*Math.sin(u+L*f),y.y=e*Math.cos(u+L*f),y.z=e*Math.sin(a+D*l)*Math.sin(u+L*f),T.push(y.x,y.y,y.z),g.copy(y).normalize(),C.push(g.x,g.y,g.z),_.push(D+P,1-L),b.push(m++)}x.push(b)}for(let v=0;v<s;v++)for(let b=0;b<n;b++){const L=x[v][b+1],P=x[v][b],z=x[v+1][b],D=x[v+1][b+1];(v!==0||u>0)&&S.push(L,P,D),(v!==s-1||p<Math.PI)&&S.push(P,z,D)}this.setIndex(S),this.setAttribute("position",new mn(T,3)),this.setAttribute("normal",new mn(C,3)),this.setAttribute("uv",new mn(_,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Tf(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class Af extends mi{constructor(e=1,n=.4,s=12,a=48,l=Math.PI*2,u=0,f=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:n,radialSegments:s,tubularSegments:a,arc:l,thetaStart:u,thetaLength:f},s=Math.floor(s),a=Math.floor(a);const p=[],m=[],x=[],y=[],g=new Q,S=new Q,T=new Q;for(let C=0;C<=s;C++){const _=u+C/s*f;for(let v=0;v<=a;v++){const b=v/a*l;S.x=(e+n*Math.cos(_))*Math.cos(b),S.y=(e+n*Math.cos(_))*Math.sin(b),S.z=n*Math.sin(_),m.push(S.x,S.y,S.z),g.x=e*Math.cos(b),g.y=e*Math.sin(b),T.subVectors(S,g).normalize(),x.push(T.x,T.y,T.z),y.push(v/a),y.push(C/s)}}for(let C=1;C<=s;C++)for(let _=1;_<=a;_++){const v=(a+1)*C+_-1,b=(a+1)*(C-1)+_-1,L=(a+1)*(C-1)+_,P=(a+1)*C+_;p.push(v,b,P),p.push(b,L,P)}this.setIndex(p),this.setAttribute("position",new mn(m,3)),this.setAttribute("normal",new mn(x,3)),this.setAttribute("uv",new mn(y,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Af(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc)}}function lo(r){const e={};for(const n in r){e[n]={};for(const s in r[n]){const a=r[n][s];if(Rm(a))a.isRenderTargetTexture?(Mt("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[n][s]=null):e[n][s]=a.clone();else if(Array.isArray(a))if(Rm(a[0])){const l=[];for(let u=0,f=a.length;u<f;u++)l[u]=a[u].clone();e[n][s]=l}else e[n][s]=a.slice();else e[n][s]=a}}return e}function qn(r){const e={};for(let n=0;n<r.length;n++){const s=lo(r[n]);for(const a in s)e[a]=s[a]}return e}function Rm(r){return r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)}function Ov(r){const e=[];for(let n=0;n<r.length;n++)e.push(r[n].clone());return e}function L0(r){const e=r.getRenderTarget();return e===null?r.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:Ot.workingColorSpace}const kv={clone:lo,merge:qn};var Bv=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,zv=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Qi extends la{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Bv,this.fragmentShader=zv,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=lo(e.uniforms),this.uniformsGroups=Ov(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){const n=super.toJSON(e);n.glslVersion=this.glslVersion,n.uniforms={};for(const a in this.uniforms){const u=this.uniforms[a].value;u&&u.isTexture?n.uniforms[a]={type:"t",value:u.toJSON(e).uuid}:u&&u.isColor?n.uniforms[a]={type:"c",value:u.getHex()}:u&&u.isVector2?n.uniforms[a]={type:"v2",value:u.toArray()}:u&&u.isVector3?n.uniforms[a]={type:"v3",value:u.toArray()}:u&&u.isVector4?n.uniforms[a]={type:"v4",value:u.toArray()}:u&&u.isMatrix3?n.uniforms[a]={type:"m3",value:u.toArray()}:u&&u.isMatrix4?n.uniforms[a]={type:"m4",value:u.toArray()}:n.uniforms[a]={value:u}}Object.keys(this.defines).length>0&&(n.defines=this.defines),n.vertexShader=this.vertexShader,n.fragmentShader=this.fragmentShader,n.lights=this.lights,n.clipping=this.clipping;const s={};for(const a in this.extensions)this.extensions[a]===!0&&(s[a]=!0);return Object.keys(s).length>0&&(n.extensions=s),n}}class Hv extends Qi{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class Xr extends la{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new Pt(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Pt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=nf,this.normalScale=new kt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new $r,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class Vv extends Xr{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new kt(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return Ft(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(n){this.ior=(1+.4*n)/(1-.4*n)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new Pt(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new Pt(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new Pt(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get dispersion(){return this._dispersion}set dispersion(e){this._dispersion>0!=e>0&&this.version++,this._dispersion=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.dispersion=e.dispersion,this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}}class Gv extends la{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Q_,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class Wv extends la{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}class bf extends Xn{constructor(e,n=1){super(),this.isLight=!0,this.type="Light",this.color=new Pt(e),this.intensity=n}dispose(){this.dispatchEvent({type:"dispose"})}copy(e,n){return super.copy(e,n),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const n=super.toJSON(e);return n.object.color=this.color.getHex(),n.object.intensity=this.intensity,n}}const ad=new hn,Pm=new Q,Lm=new Q;class D0{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new kt(512,512),this.mapType=pi,this.map=null,this.mapPass=null,this.matrix=new hn,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new wf,this._frameExtents=new kt(1,1),this._viewportCount=1,this._viewports=[new fn(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const n=this.camera,s=this.matrix;Pm.setFromMatrixPosition(e.matrixWorld),n.position.copy(Pm),Lm.setFromMatrixPosition(e.target.matrixWorld),n.lookAt(Lm),n.updateMatrixWorld(),ad.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(ad,n.coordinateSystem,n.reversedDepth),n.coordinateSystem===sa||n.reversedDepth?s.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):s.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),s.multiply(ad)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this.biasNode=e.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}const Pl=new Q,Ll=new co,Gi=new Q;class I0 extends Xn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new hn,this.projectionMatrix=new hn,this.projectionMatrixInverse=new hn,this.coordinateSystem=Yi,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,n){return super.copy(e,n),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(Pl,Ll,Gi),Gi.x===1&&Gi.y===1&&Gi.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Pl,Ll,Gi.set(1,1,1)).invert()}updateWorldMatrix(e,n){super.updateWorldMatrix(e,n),this.matrixWorld.decompose(Pl,Ll,Gi),Gi.x===1&&Gi.y===1&&Gi.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Pl,Ll,Gi.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}}const Wr=new Q,Dm=new kt,Im=new kt;class hi extends I0{constructor(e=50,n=1,s=.1,a=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=s,this.far=a,this.focus=10,this.aspect=n,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const n=.5*this.getFilmHeight()/e;this.fov=sf*2*Math.atan(n),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Ou*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return sf*2*Math.atan(Math.tan(Ou*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,n,s){Wr.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Wr.x,Wr.y).multiplyScalar(-e/Wr.z),Wr.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),s.set(Wr.x,Wr.y).multiplyScalar(-e/Wr.z)}getViewSize(e,n){return this.getViewBounds(e,Dm,Im),n.subVectors(Im,Dm)}setViewOffset(e,n,s,a,l,u){this.aspect=e/n,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=s,this.view.offsetY=a,this.view.width=l,this.view.height=u,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let n=e*Math.tan(Ou*.5*this.fov)/this.zoom,s=2*n,a=this.aspect*s,l=-.5*a;const u=this.view;if(this.view!==null&&this.view.enabled){const p=u.fullWidth,m=u.fullHeight;l+=u.offsetX*a/p,n-=u.offsetY*s/m,a*=u.width/p,s*=u.height/m}const f=this.filmOffset;f!==0&&(l+=e*f/this.getFilmWidth()),this.projectionMatrix.makePerspective(l,l+a,n,n-s,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.fov=this.fov,n.object.zoom=this.zoom,n.object.near=this.near,n.object.far=this.far,n.object.focus=this.focus,n.object.aspect=this.aspect,this.view!==null&&(n.object.view=Object.assign({},this.view)),n.object.filmGauge=this.filmGauge,n.object.filmOffset=this.filmOffset,n}}class Xv extends D0{constructor(){super(new hi(90,1,.5,500)),this.isPointLightShadow=!0}}class Dl extends bf{constructor(e,n,s=0,a=2){super(e,n),this.isPointLight=!0,this.type="PointLight",this.distance=s,this.decay=a,this.shadow=new Xv}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){super.dispose(),this.shadow.dispose()}copy(e,n){return super.copy(e,n),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}toJSON(e){const n=super.toJSON(e);return n.object.distance=this.distance,n.object.decay=this.decay,n.object.shadow=this.shadow.toJSON(),n}}class Cf extends I0{constructor(e=-1,n=1,s=1,a=-1,l=.1,u=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=n,this.top=s,this.bottom=a,this.near=l,this.far=u,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,n,s,a,l,u){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=s,this.view.offsetY=a,this.view.width=l,this.view.height=u,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),n=(this.top-this.bottom)/(2*this.zoom),s=(this.right+this.left)/2,a=(this.top+this.bottom)/2;let l=s-e,u=s+e,f=a+n,p=a-n;if(this.view!==null&&this.view.enabled){const m=(this.right-this.left)/this.view.fullWidth/this.zoom,x=(this.top-this.bottom)/this.view.fullHeight/this.zoom;l+=m*this.view.offsetX,u=l+m*this.view.width,f-=x*this.view.offsetY,p=f-x*this.view.height}this.projectionMatrix.makeOrthographic(l,u,f,p,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.zoom=this.zoom,n.object.left=this.left,n.object.right=this.right,n.object.top=this.top,n.object.bottom=this.bottom,n.object.near=this.near,n.object.far=this.far,this.view!==null&&(n.object.view=Object.assign({},this.view)),n}}class jv extends D0{constructor(){super(new Cf(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class Nm extends bf{constructor(e,n){super(e,n),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Xn.DEFAULT_UP),this.updateMatrix(),this.target=new Xn,this.shadow=new jv}dispose(){super.dispose(),this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}toJSON(e){const n=super.toJSON(e);return n.object.shadow=this.shadow.toJSON(),n.object.target=this.target.uuid,n}}class Yv extends bf{constructor(e,n){super(e,n),this.isAmbientLight=!0,this.type="AmbientLight"}}const eo=-90,to=1;class qv extends Xn{constructor(e,n,s){super(),this.type="CubeCamera",this.renderTarget=s,this.coordinateSystem=null,this.activeMipmapLevel=0;const a=new hi(eo,to,e,n);a.layers=this.layers,this.add(a);const l=new hi(eo,to,e,n);l.layers=this.layers,this.add(l);const u=new hi(eo,to,e,n);u.layers=this.layers,this.add(u);const f=new hi(eo,to,e,n);f.layers=this.layers,this.add(f);const p=new hi(eo,to,e,n);p.layers=this.layers,this.add(p);const m=new hi(eo,to,e,n);m.layers=this.layers,this.add(m)}updateCoordinateSystem(){const e=this.coordinateSystem,n=this.children.concat(),[s,a,l,u,f,p]=n;for(const m of n)this.remove(m);if(e===Yi)s.up.set(0,1,0),s.lookAt(1,0,0),a.up.set(0,1,0),a.lookAt(-1,0,0),l.up.set(0,0,-1),l.lookAt(0,1,0),u.up.set(0,0,1),u.lookAt(0,-1,0),f.up.set(0,1,0),f.lookAt(0,0,1),p.up.set(0,1,0),p.lookAt(0,0,-1);else if(e===sa)s.up.set(0,-1,0),s.lookAt(-1,0,0),a.up.set(0,-1,0),a.lookAt(1,0,0),l.up.set(0,0,1),l.lookAt(0,1,0),u.up.set(0,0,-1),u.lookAt(0,-1,0),f.up.set(0,-1,0),f.lookAt(0,0,1),p.up.set(0,-1,0),p.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const m of n)this.add(m),m.updateMatrixWorld()}update(e,n){this.parent===null&&this.updateMatrixWorld();const{renderTarget:s,activeMipmapLevel:a}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[l,u,f,p,m,x]=this.children,y=e.getRenderTarget(),g=e.getActiveCubeFace(),S=e.getActiveMipmapLevel(),T=e.xr.enabled;e.xr.enabled=!1;const C=s.texture.generateMipmaps;s.texture.generateMipmaps=!1;let _=!1;e.isWebGLRenderer===!0?_=e.state.buffers.depth.getReversed():_=e.reversedDepthBuffer,e.setRenderTarget(s,0,a),_&&e.autoClear===!1&&e.clearDepth(),e.render(n,l),e.setRenderTarget(s,1,a),_&&e.autoClear===!1&&e.clearDepth(),e.render(n,u),e.setRenderTarget(s,2,a),_&&e.autoClear===!1&&e.clearDepth(),e.render(n,f),e.setRenderTarget(s,3,a),_&&e.autoClear===!1&&e.clearDepth(),e.render(n,p),e.setRenderTarget(s,4,a),_&&e.autoClear===!1&&e.clearDepth(),e.render(n,m),s.texture.generateMipmaps=C,e.setRenderTarget(s,5,a),_&&e.autoClear===!1&&e.clearDepth(),e.render(n,x),e.setRenderTarget(y,g,S),e.xr.enabled=T,s.texture.needsPMREMUpdate=!0}}class $v extends hi{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}const Um=new hn;class Kv{constructor(e,n,s=0,a=1/0){this.ray=new C0(e,n),this.near=s,this.far=a,this.camera=null,this.layers=new Sf,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,n){this.ray.set(e,n)}setFromCamera(e,n){n.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(n.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(n).sub(this.ray.origin).normalize(),this.camera=n):n.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(n.near+n.far)/(n.near-n.far)).unproject(n),this.ray.direction.set(0,0,-1).transformDirection(n.matrixWorld),this.camera=n):Ht("Raycaster: Unsupported camera type: "+n.type)}setFromXRController(e){return Um.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(Um),this}intersectObject(e,n=!0,s=[]){return of(e,this,s,n),s.sort(Fm),s}intersectObjects(e,n=!0,s=[]){for(let a=0,l=e.length;a<l;a++)of(e[a],this,s,n);return s.sort(Fm),s}}function Fm(r,e){return r.distance-e.distance}function of(r,e,n,s){let a=!0;if(r.layers.test(e.layers)&&r.raycast(e,n)===!1&&(a=!1),a===!0&&s===!0){const l=r.children;for(let u=0,f=l.length;u<f;u++)of(l[u],e,n,!0)}}const If=class If{constructor(e,n,s,a){this.elements=[1,0,0,1],e!==void 0&&this.set(e,n,s,a)}identity(){return this.set(1,0,0,1),this}fromArray(e,n=0){for(let s=0;s<4;s++)this.elements[s]=e[s+n];return this}set(e,n,s,a){const l=this.elements;return l[0]=e,l[2]=n,l[1]=s,l[3]=a,this}};If.prototype.isMatrix2=!0;let Om=If;function km(r,e,n,s){const a=Zv(s);switch(n){case y0:return r*e;case M0:return r*e/a.components*a.byteLength;case mf:return r*e/a.components*a.byteLength;case xs:return r*e*2/a.components*a.byteLength;case gf:return r*e*2/a.components*a.byteLength;case S0:return r*e*3/a.components*a.byteLength;case Oi:return r*e*4/a.components*a.byteLength;case _f:return r*e*4/a.components*a.byteLength;case Ul:case Fl:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*8;case Ol:case kl:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*16;case bd:case Rd:return Math.max(r,16)*Math.max(e,8)/4;case Ad:case Cd:return Math.max(r,8)*Math.max(e,8)/2;case Pd:case Ld:case Id:case Nd:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*8;case Dd:case zl:case Ud:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*16;case Fd:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*16;case Od:return Math.floor((r+4)/5)*Math.floor((e+3)/4)*16;case kd:return Math.floor((r+4)/5)*Math.floor((e+4)/5)*16;case Bd:return Math.floor((r+5)/6)*Math.floor((e+4)/5)*16;case zd:return Math.floor((r+5)/6)*Math.floor((e+5)/6)*16;case Hd:return Math.floor((r+7)/8)*Math.floor((e+4)/5)*16;case Vd:return Math.floor((r+7)/8)*Math.floor((e+5)/6)*16;case Gd:return Math.floor((r+7)/8)*Math.floor((e+7)/8)*16;case Wd:return Math.floor((r+9)/10)*Math.floor((e+4)/5)*16;case Xd:return Math.floor((r+9)/10)*Math.floor((e+5)/6)*16;case jd:return Math.floor((r+9)/10)*Math.floor((e+7)/8)*16;case Yd:return Math.floor((r+9)/10)*Math.floor((e+9)/10)*16;case qd:return Math.floor((r+11)/12)*Math.floor((e+9)/10)*16;case $d:return Math.floor((r+11)/12)*Math.floor((e+11)/12)*16;case Kd:case Zd:case Jd:return Math.ceil(r/4)*Math.ceil(e/4)*16;case Qd:case ef:return Math.ceil(r/4)*Math.ceil(e/4)*8;case Hl:case tf:return Math.ceil(r/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${n} format.`)}function Zv(r){switch(r){case pi:case g0:return{byteLength:1,components:1};case ia:case _0:case _r:return{byteLength:2,components:1};case hf:case pf:return{byteLength:2,components:4};case Ji:case ff:case ji:return{byteLength:4,components:1};case v0:case x0:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${r}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:uf}}));typeof window<"u"&&(window.__THREE__?Mt("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=uf);/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function N0(){let r=null,e=!1,n=null,s=null;function a(l,u){n(l,u),s=r.requestAnimationFrame(a)}return{start:function(){e!==!0&&n!==null&&r!==null&&(s=r.requestAnimationFrame(a),e=!0)},stop:function(){r!==null&&r.cancelAnimationFrame(s),e=!1},setAnimationLoop:function(l){n=l},setContext:function(l){r=l}}}function Jv(r){const e=new WeakMap;function n(f,p){const m=f.array,x=f.usage,y=m.byteLength,g=r.createBuffer();r.bindBuffer(p,g),r.bufferData(p,m,x),f.onUploadCallback();let S;if(m instanceof Float32Array)S=r.FLOAT;else if(typeof Float16Array<"u"&&m instanceof Float16Array)S=r.HALF_FLOAT;else if(m instanceof Uint16Array)f.isFloat16BufferAttribute?S=r.HALF_FLOAT:S=r.UNSIGNED_SHORT;else if(m instanceof Int16Array)S=r.SHORT;else if(m instanceof Uint32Array)S=r.UNSIGNED_INT;else if(m instanceof Int32Array)S=r.INT;else if(m instanceof Int8Array)S=r.BYTE;else if(m instanceof Uint8Array)S=r.UNSIGNED_BYTE;else if(m instanceof Uint8ClampedArray)S=r.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+m);return{buffer:g,type:S,bytesPerElement:m.BYTES_PER_ELEMENT,version:f.version,size:y}}function s(f,p,m){const x=p.array,y=p.updateRanges;if(r.bindBuffer(m,f),y.length===0)r.bufferSubData(m,0,x);else{y.sort((S,T)=>S.start-T.start);let g=0;for(let S=1;S<y.length;S++){const T=y[g],C=y[S];C.start<=T.start+T.count+1?T.count=Math.max(T.count,C.start+C.count-T.start):(++g,y[g]=C)}y.length=g+1;for(let S=0,T=y.length;S<T;S++){const C=y[S];r.bufferSubData(m,C.start*x.BYTES_PER_ELEMENT,x,C.start,C.count)}p.clearUpdateRanges()}p.onUploadCallback()}function a(f){return f.isInterleavedBufferAttribute&&(f=f.data),e.get(f)}function l(f){f.isInterleavedBufferAttribute&&(f=f.data);const p=e.get(f);p&&(r.deleteBuffer(p.buffer),e.delete(f))}function u(f,p){if(f.isInterleavedBufferAttribute&&(f=f.data),f.isGLBufferAttribute){const x=e.get(f);(!x||x.version<f.version)&&e.set(f,{buffer:f.buffer,type:f.type,bytesPerElement:f.elementSize,version:f.version});return}const m=e.get(f);if(m===void 0)e.set(f,n(f,p));else if(m.version<f.version){if(m.size!==f.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");s(m.buffer,f,p),m.version=f.version}}return{get:a,remove:l,update:u}}var Qv=`#ifdef USE_ALPHAHASH
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
}`,Rt={alphahash_fragment:Qv,alphahash_pars_fragment:ex,alphamap_fragment:tx,alphamap_pars_fragment:nx,alphatest_fragment:ix,alphatest_pars_fragment:rx,aomap_fragment:sx,aomap_pars_fragment:ox,batching_pars_vertex:ax,batching_vertex:lx,begin_vertex:cx,beginnormal_vertex:ux,bsdfs:dx,iridescence_fragment:fx,bumpmap_pars_fragment:hx,clipping_planes_fragment:px,clipping_planes_pars_fragment:mx,clipping_planes_pars_vertex:gx,clipping_planes_vertex:_x,color_fragment:vx,color_pars_fragment:xx,color_pars_vertex:yx,color_vertex:Sx,common:Mx,cube_uv_reflection_fragment:Ex,defaultnormal_vertex:wx,displacementmap_pars_vertex:Tx,displacementmap_vertex:Ax,emissivemap_fragment:bx,emissivemap_pars_fragment:Cx,colorspace_fragment:Rx,colorspace_pars_fragment:Px,envmap_fragment:Lx,envmap_common_pars_fragment:Dx,envmap_pars_fragment:Ix,envmap_pars_vertex:Nx,envmap_physical_pars_fragment:Xx,envmap_vertex:Ux,fog_vertex:Fx,fog_pars_vertex:Ox,fog_fragment:kx,fog_pars_fragment:Bx,gradientmap_pars_fragment:zx,lightmap_pars_fragment:Hx,lights_lambert_fragment:Vx,lights_lambert_pars_fragment:Gx,lights_pars_begin:Wx,lights_toon_fragment:jx,lights_toon_pars_fragment:Yx,lights_phong_fragment:qx,lights_phong_pars_fragment:$x,lights_physical_fragment:Kx,lights_physical_pars_fragment:Zx,lights_fragment_begin:Jx,lights_fragment_maps:Qx,lights_fragment_end:ey,lightprobes_pars_fragment:ty,logdepthbuf_fragment:ny,logdepthbuf_pars_fragment:iy,logdepthbuf_pars_vertex:ry,logdepthbuf_vertex:sy,map_fragment:oy,map_pars_fragment:ay,map_particle_fragment:ly,map_particle_pars_fragment:cy,metalnessmap_fragment:uy,metalnessmap_pars_fragment:dy,morphinstance_vertex:fy,morphcolor_vertex:hy,morphnormal_vertex:py,morphtarget_pars_vertex:my,morphtarget_vertex:gy,normal_fragment_begin:_y,normal_fragment_maps:vy,normal_pars_fragment:xy,normal_pars_vertex:yy,normal_vertex:Sy,normalmap_pars_fragment:My,clearcoat_normal_fragment_begin:Ey,clearcoat_normal_fragment_maps:wy,clearcoat_pars_fragment:Ty,iridescence_pars_fragment:Ay,opaque_fragment:by,packing:Cy,premultiplied_alpha_fragment:Ry,project_vertex:Py,dithering_fragment:Ly,dithering_pars_fragment:Dy,roughnessmap_fragment:Iy,roughnessmap_pars_fragment:Ny,shadowmap_pars_fragment:Uy,shadowmap_pars_vertex:Fy,shadowmap_vertex:Oy,shadowmask_pars_fragment:ky,skinbase_vertex:By,skinning_pars_vertex:zy,skinning_vertex:Hy,skinnormal_vertex:Vy,specularmap_fragment:Gy,specularmap_pars_fragment:Wy,tonemapping_fragment:Xy,tonemapping_pars_fragment:jy,transmission_fragment:Yy,transmission_pars_fragment:qy,uv_pars_fragment:$y,uv_pars_vertex:Ky,uv_vertex:Zy,worldpos_vertex:Jy,background_vert:Qy,background_frag:eS,backgroundCube_vert:tS,backgroundCube_frag:nS,cube_vert:iS,cube_frag:rS,depth_vert:sS,depth_frag:oS,distance_vert:aS,distance_frag:lS,equirect_vert:cS,equirect_frag:uS,linedashed_vert:dS,linedashed_frag:fS,meshbasic_vert:hS,meshbasic_frag:pS,meshlambert_vert:mS,meshlambert_frag:gS,meshmatcap_vert:_S,meshmatcap_frag:vS,meshnormal_vert:xS,meshnormal_frag:yS,meshphong_vert:SS,meshphong_frag:MS,meshphysical_vert:ES,meshphysical_frag:wS,meshtoon_vert:TS,meshtoon_frag:AS,points_vert:bS,points_frag:CS,shadow_vert:RS,shadow_frag:PS,sprite_vert:LS,sprite_frag:DS},Ye={common:{diffuse:{value:new Pt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new At},alphaMap:{value:null},alphaMapTransform:{value:new At},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new At}},envmap:{envMap:{value:null},envMapRotation:{value:new At},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new At}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new At}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new At},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new At},normalScale:{value:new kt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new At},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new At}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new At}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new At}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Pt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new Q},probesMax:{value:new Q},probesResolution:{value:new Q}},points:{diffuse:{value:new Pt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new At},alphaTest:{value:0},uvTransform:{value:new At}},sprite:{diffuse:{value:new Pt(16777215)},opacity:{value:1},center:{value:new kt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new At},alphaMap:{value:null},alphaMapTransform:{value:new At},alphaTest:{value:0}}},Xi={basic:{uniforms:qn([Ye.common,Ye.specularmap,Ye.envmap,Ye.aomap,Ye.lightmap,Ye.fog]),vertexShader:Rt.meshbasic_vert,fragmentShader:Rt.meshbasic_frag},lambert:{uniforms:qn([Ye.common,Ye.specularmap,Ye.envmap,Ye.aomap,Ye.lightmap,Ye.emissivemap,Ye.bumpmap,Ye.normalmap,Ye.displacementmap,Ye.fog,Ye.lights,{emissive:{value:new Pt(0)},envMapIntensity:{value:1}}]),vertexShader:Rt.meshlambert_vert,fragmentShader:Rt.meshlambert_frag},phong:{uniforms:qn([Ye.common,Ye.specularmap,Ye.envmap,Ye.aomap,Ye.lightmap,Ye.emissivemap,Ye.bumpmap,Ye.normalmap,Ye.displacementmap,Ye.fog,Ye.lights,{emissive:{value:new Pt(0)},specular:{value:new Pt(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:Rt.meshphong_vert,fragmentShader:Rt.meshphong_frag},standard:{uniforms:qn([Ye.common,Ye.envmap,Ye.aomap,Ye.lightmap,Ye.emissivemap,Ye.bumpmap,Ye.normalmap,Ye.displacementmap,Ye.roughnessmap,Ye.metalnessmap,Ye.fog,Ye.lights,{emissive:{value:new Pt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Rt.meshphysical_vert,fragmentShader:Rt.meshphysical_frag},toon:{uniforms:qn([Ye.common,Ye.aomap,Ye.lightmap,Ye.emissivemap,Ye.bumpmap,Ye.normalmap,Ye.displacementmap,Ye.gradientmap,Ye.fog,Ye.lights,{emissive:{value:new Pt(0)}}]),vertexShader:Rt.meshtoon_vert,fragmentShader:Rt.meshtoon_frag},matcap:{uniforms:qn([Ye.common,Ye.bumpmap,Ye.normalmap,Ye.displacementmap,Ye.fog,{matcap:{value:null}}]),vertexShader:Rt.meshmatcap_vert,fragmentShader:Rt.meshmatcap_frag},points:{uniforms:qn([Ye.points,Ye.fog]),vertexShader:Rt.points_vert,fragmentShader:Rt.points_frag},dashed:{uniforms:qn([Ye.common,Ye.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Rt.linedashed_vert,fragmentShader:Rt.linedashed_frag},depth:{uniforms:qn([Ye.common,Ye.displacementmap]),vertexShader:Rt.depth_vert,fragmentShader:Rt.depth_frag},normal:{uniforms:qn([Ye.common,Ye.bumpmap,Ye.normalmap,Ye.displacementmap,{opacity:{value:1}}]),vertexShader:Rt.meshnormal_vert,fragmentShader:Rt.meshnormal_frag},sprite:{uniforms:qn([Ye.sprite,Ye.fog]),vertexShader:Rt.sprite_vert,fragmentShader:Rt.sprite_frag},background:{uniforms:{uvTransform:{value:new At},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Rt.background_vert,fragmentShader:Rt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new At}},vertexShader:Rt.backgroundCube_vert,fragmentShader:Rt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Rt.cube_vert,fragmentShader:Rt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Rt.equirect_vert,fragmentShader:Rt.equirect_frag},distance:{uniforms:qn([Ye.common,Ye.displacementmap,{referencePosition:{value:new Q},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Rt.distance_vert,fragmentShader:Rt.distance_frag},shadow:{uniforms:qn([Ye.lights,Ye.fog,{color:{value:new Pt(0)},opacity:{value:1}}]),vertexShader:Rt.shadow_vert,fragmentShader:Rt.shadow_frag}};Xi.physical={uniforms:qn([Xi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new At},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new At},clearcoatNormalScale:{value:new kt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new At},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new At},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new At},sheen:{value:0},sheenColor:{value:new Pt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new At},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new At},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new At},transmissionSamplerSize:{value:new kt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new At},attenuationDistance:{value:0},attenuationColor:{value:new Pt(0)},specularColor:{value:new Pt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new At},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new At},anisotropyVector:{value:new kt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new At}}]),vertexShader:Rt.meshphysical_vert,fragmentShader:Rt.meshphysical_frag};const Il={r:0,b:0,g:0},IS=new hn,U0=new At;U0.set(-1,0,0,0,1,0,0,0,1);function NS(r,e,n,s,a,l){const u=new Pt(0);let f=a===!0?0:1,p,m,x=null,y=0,g=null;function S(b){let L=b.isScene===!0?b.background:null;if(L&&L.isTexture){const P=b.backgroundBlurriness>0;L=e.get(L,P)}return L}function T(b){let L=!1;const P=S(b);P===null?_(u,f):P&&P.isColor&&(_(P,1),L=!0);const z=r.xr.getEnvironmentBlendMode();z==="additive"?n.buffers.color.setClear(0,0,0,1,l):z==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,l),(r.autoClear||L)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),r.clear(r.autoClearColor,r.autoClearDepth,r.autoClearStencil))}function C(b,L){const P=S(L);P&&(P.isCubeTexture||P.mapping===$l)?(m===void 0&&(m=new Pe(new uo(1,1,1),new Qi({name:"BackgroundCubeMaterial",uniforms:lo(Xi.backgroundCube.uniforms),vertexShader:Xi.backgroundCube.vertexShader,fragmentShader:Xi.backgroundCube.fragmentShader,side:si,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),m.geometry.deleteAttribute("normal"),m.geometry.deleteAttribute("uv"),m.onBeforeRender=function(z,D,k){this.matrixWorld.copyPosition(k.matrixWorld)},Object.defineProperty(m.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(m)),m.material.uniforms.envMap.value=P,m.material.uniforms.backgroundBlurriness.value=L.backgroundBlurriness,m.material.uniforms.backgroundIntensity.value=L.backgroundIntensity,m.material.uniforms.backgroundRotation.value.setFromMatrix4(IS.makeRotationFromEuler(L.backgroundRotation)).transpose(),P.isCubeTexture&&P.isRenderTargetTexture===!1&&m.material.uniforms.backgroundRotation.value.premultiply(U0),m.material.toneMapped=Ot.getTransfer(P.colorSpace)!==$t,(x!==P||y!==P.version||g!==r.toneMapping)&&(m.material.needsUpdate=!0,x=P,y=P.version,g=r.toneMapping),m.layers.enableAll(),b.unshift(m,m.geometry,m.material,0,0,null)):P&&P.isTexture&&(p===void 0&&(p=new Pe(new xn(2,2),new Qi({name:"BackgroundMaterial",uniforms:lo(Xi.background.uniforms),vertexShader:Xi.background.vertexShader,fragmentShader:Xi.background.fragmentShader,side:qr,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),p.geometry.deleteAttribute("normal"),Object.defineProperty(p.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(p)),p.material.uniforms.t2D.value=P,p.material.uniforms.backgroundIntensity.value=L.backgroundIntensity,p.material.toneMapped=Ot.getTransfer(P.colorSpace)!==$t,P.matrixAutoUpdate===!0&&P.updateMatrix(),p.material.uniforms.uvTransform.value.copy(P.matrix),(x!==P||y!==P.version||g!==r.toneMapping)&&(p.material.needsUpdate=!0,x=P,y=P.version,g=r.toneMapping),p.layers.enableAll(),b.unshift(p,p.geometry,p.material,0,0,null))}function _(b,L){b.getRGB(Il,L0(r)),n.buffers.color.setClear(Il.r,Il.g,Il.b,L,l)}function v(){m!==void 0&&(m.geometry.dispose(),m.material.dispose(),m=void 0),p!==void 0&&(p.geometry.dispose(),p.material.dispose(),p=void 0)}return{getClearColor:function(){return u},setClearColor:function(b,L=1){u.set(b),f=L,_(u,f)},getClearAlpha:function(){return f},setClearAlpha:function(b){f=b,_(u,f)},render:T,addToRenderList:C,dispose:v}}function US(r,e){const n=r.getParameter(r.MAX_VERTEX_ATTRIBS),s={},a=g(null);let l=a,u=!1;function f(O,Y,le,ge,W){let ne=!1;const $=y(O,ge,le,Y);l!==$&&(l=$,m(l.object)),ne=S(O,ge,le,W),ne&&T(O,ge,le,W),W!==null&&e.update(W,r.ELEMENT_ARRAY_BUFFER),(ne||u)&&(u=!1,P(O,Y,le,ge),W!==null&&r.bindBuffer(r.ELEMENT_ARRAY_BUFFER,e.get(W).buffer))}function p(){return r.createVertexArray()}function m(O){return r.bindVertexArray(O)}function x(O){return r.deleteVertexArray(O)}function y(O,Y,le,ge){const W=ge.wireframe===!0;let ne=s[Y.id];ne===void 0&&(ne={},s[Y.id]=ne);const $=O.isInstancedMesh===!0?O.id:0;let J=ne[$];J===void 0&&(J={},ne[$]=J);let fe=J[le.id];fe===void 0&&(fe={},J[le.id]=fe);let he=fe[W];return he===void 0&&(he=g(p()),fe[W]=he),he}function g(O){const Y=[],le=[],ge=[];for(let W=0;W<n;W++)Y[W]=0,le[W]=0,ge[W]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:Y,enabledAttributes:le,attributeDivisors:ge,object:O,attributes:{},index:null}}function S(O,Y,le,ge){const W=l.attributes,ne=Y.attributes;let $=0;const J=le.getAttributes();for(const fe in J)if(J[fe].location>=0){const F=W[fe];let ie=ne[fe];if(ie===void 0&&(fe==="instanceMatrix"&&O.instanceMatrix&&(ie=O.instanceMatrix),fe==="instanceColor"&&O.instanceColor&&(ie=O.instanceColor)),F===void 0||F.attribute!==ie||ie&&F.data!==ie.data)return!0;$++}return l.attributesNum!==$||l.index!==ge}function T(O,Y,le,ge){const W={},ne=Y.attributes;let $=0;const J=le.getAttributes();for(const fe in J)if(J[fe].location>=0){let F=ne[fe];F===void 0&&(fe==="instanceMatrix"&&O.instanceMatrix&&(F=O.instanceMatrix),fe==="instanceColor"&&O.instanceColor&&(F=O.instanceColor));const ie={};ie.attribute=F,F&&F.data&&(ie.data=F.data),W[fe]=ie,$++}l.attributes=W,l.attributesNum=$,l.index=ge}function C(){const O=l.newAttributes;for(let Y=0,le=O.length;Y<le;Y++)O[Y]=0}function _(O){v(O,0)}function v(O,Y){const le=l.newAttributes,ge=l.enabledAttributes,W=l.attributeDivisors;le[O]=1,ge[O]===0&&(r.enableVertexAttribArray(O),ge[O]=1),W[O]!==Y&&(r.vertexAttribDivisor(O,Y),W[O]=Y)}function b(){const O=l.newAttributes,Y=l.enabledAttributes;for(let le=0,ge=Y.length;le<ge;le++)Y[le]!==O[le]&&(r.disableVertexAttribArray(le),Y[le]=0)}function L(O,Y,le,ge,W,ne,$){$===!0?r.vertexAttribIPointer(O,Y,le,W,ne):r.vertexAttribPointer(O,Y,le,ge,W,ne)}function P(O,Y,le,ge){C();const W=ge.attributes,ne=le.getAttributes(),$=Y.defaultAttributeValues;for(const J in ne){const fe=ne[J];if(fe.location>=0){let he=W[J];if(he===void 0&&(J==="instanceMatrix"&&O.instanceMatrix&&(he=O.instanceMatrix),J==="instanceColor"&&O.instanceColor&&(he=O.instanceColor)),he!==void 0){const F=he.normalized,ie=he.itemSize,We=e.get(he);if(We===void 0)continue;const Fe=We.buffer,Xe=We.type,ce=We.bytesPerElement,Ae=Xe===r.INT||Xe===r.UNSIGNED_INT||he.gpuType===ff;if(he.isInterleavedBufferAttribute){const ye=he.data,Ge=ye.stride,nt=he.offset;if(ye.isInstancedInterleavedBuffer){for(let lt=0;lt<fe.locationSize;lt++)v(fe.location+lt,ye.meshPerAttribute);O.isInstancedMesh!==!0&&ge._maxInstanceCount===void 0&&(ge._maxInstanceCount=ye.meshPerAttribute*ye.count)}else for(let lt=0;lt<fe.locationSize;lt++)_(fe.location+lt);r.bindBuffer(r.ARRAY_BUFFER,Fe);for(let lt=0;lt<fe.locationSize;lt++)L(fe.location+lt,ie/fe.locationSize,Xe,F,Ge*ce,(nt+ie/fe.locationSize*lt)*ce,Ae)}else{if(he.isInstancedBufferAttribute){for(let ye=0;ye<fe.locationSize;ye++)v(fe.location+ye,he.meshPerAttribute);O.isInstancedMesh!==!0&&ge._maxInstanceCount===void 0&&(ge._maxInstanceCount=he.meshPerAttribute*he.count)}else for(let ye=0;ye<fe.locationSize;ye++)_(fe.location+ye);r.bindBuffer(r.ARRAY_BUFFER,Fe);for(let ye=0;ye<fe.locationSize;ye++)L(fe.location+ye,ie/fe.locationSize,Xe,F,ie*ce,ie/fe.locationSize*ye*ce,Ae)}}else if($!==void 0){const F=$[J];if(F!==void 0)switch(F.length){case 2:r.vertexAttrib2fv(fe.location,F);break;case 3:r.vertexAttrib3fv(fe.location,F);break;case 4:r.vertexAttrib4fv(fe.location,F);break;default:r.vertexAttrib1fv(fe.location,F)}}}}b()}function z(){I();for(const O in s){const Y=s[O];for(const le in Y){const ge=Y[le];for(const W in ge){const ne=ge[W];for(const $ in ne)x(ne[$].object),delete ne[$];delete ge[W]}}delete s[O]}}function D(O){if(s[O.id]===void 0)return;const Y=s[O.id];for(const le in Y){const ge=Y[le];for(const W in ge){const ne=ge[W];for(const $ in ne)x(ne[$].object),delete ne[$];delete ge[W]}}delete s[O.id]}function k(O){for(const Y in s){const le=s[Y];for(const ge in le){const W=le[ge];if(W[O.id]===void 0)continue;const ne=W[O.id];for(const $ in ne)x(ne[$].object),delete ne[$];delete W[O.id]}}}function w(O){for(const Y in s){const le=s[Y],ge=O.isInstancedMesh===!0?O.id:0,W=le[ge];if(W!==void 0){for(const ne in W){const $=W[ne];for(const J in $)x($[J].object),delete $[J];delete W[ne]}delete le[ge],Object.keys(le).length===0&&delete s[Y]}}}function I(){j(),u=!0,l!==a&&(l=a,m(l.object))}function j(){a.geometry=null,a.program=null,a.wireframe=!1}return{setup:f,reset:I,resetDefaultState:j,dispose:z,releaseStatesOfGeometry:D,releaseStatesOfObject:w,releaseStatesOfProgram:k,initAttributes:C,enableAttribute:_,disableUnusedAttributes:b}}function FS(r,e,n){let s;function a(p){s=p}function l(p,m){r.drawArrays(s,p,m),n.update(m,s,1)}function u(p,m,x){x!==0&&(r.drawArraysInstanced(s,p,m,x),n.update(m,s,x))}function f(p,m,x){if(x===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(s,p,0,m,0,x);let g=0;for(let S=0;S<x;S++)g+=m[S];n.update(g,s,1)}this.setMode=a,this.render=l,this.renderInstances=u,this.renderMultiDraw=f}function OS(r,e,n,s){let a;function l(){if(a!==void 0)return a;if(e.has("EXT_texture_filter_anisotropic")===!0){const k=e.get("EXT_texture_filter_anisotropic");a=r.getParameter(k.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else a=0;return a}function u(k){return!(k!==Oi&&s.convert(k)!==r.getParameter(r.IMPLEMENTATION_COLOR_READ_FORMAT))}function f(k){const w=k===_r&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(k!==pi&&s.convert(k)!==r.getParameter(r.IMPLEMENTATION_COLOR_READ_TYPE)&&k!==ji&&!w)}function p(k){if(k==="highp"){if(r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.HIGH_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.HIGH_FLOAT).precision>0)return"highp";k="mediump"}return k==="mediump"&&r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.MEDIUM_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let m=n.precision!==void 0?n.precision:"highp";const x=p(m);x!==m&&(Mt("WebGLRenderer:",m,"not supported, using",x,"instead."),m=x);const y=n.logarithmicDepthBuffer===!0,g=n.reversedDepthBuffer===!0&&e.has("EXT_clip_control");n.reversedDepthBuffer===!0&&g===!1&&Mt("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");const S=r.getParameter(r.MAX_TEXTURE_IMAGE_UNITS),T=r.getParameter(r.MAX_VERTEX_TEXTURE_IMAGE_UNITS),C=r.getParameter(r.MAX_TEXTURE_SIZE),_=r.getParameter(r.MAX_CUBE_MAP_TEXTURE_SIZE),v=r.getParameter(r.MAX_VERTEX_ATTRIBS),b=r.getParameter(r.MAX_VERTEX_UNIFORM_VECTORS),L=r.getParameter(r.MAX_VARYING_VECTORS),P=r.getParameter(r.MAX_FRAGMENT_UNIFORM_VECTORS),z=r.getParameter(r.MAX_SAMPLES),D=r.getParameter(r.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:l,getMaxPrecision:p,textureFormatReadable:u,textureTypeReadable:f,precision:m,logarithmicDepthBuffer:y,reversedDepthBuffer:g,maxTextures:S,maxVertexTextures:T,maxTextureSize:C,maxCubemapSize:_,maxAttributes:v,maxVertexUniforms:b,maxVaryings:L,maxFragmentUniforms:P,maxSamples:z,samples:D}}function kS(r){const e=this;let n=null,s=0,a=!1,l=!1;const u=new hs,f=new At,p={value:null,needsUpdate:!1};this.uniform=p,this.numPlanes=0,this.numIntersection=0,this.init=function(y,g){const S=y.length!==0||g||s!==0||a;return a=g,s=y.length,S},this.beginShadows=function(){l=!0,x(null)},this.endShadows=function(){l=!1},this.setGlobalState=function(y,g){n=x(y,g,0)},this.setState=function(y,g,S){const T=y.clippingPlanes,C=y.clipIntersection,_=y.clipShadows,v=r.get(y);if(!a||T===null||T.length===0||l&&!_)l?x(null):m();else{const b=l?0:s,L=b*4;let P=v.clippingState||null;p.value=P,P=x(T,g,L,S);for(let z=0;z!==L;++z)P[z]=n[z];v.clippingState=P,this.numIntersection=C?this.numPlanes:0,this.numPlanes+=b}};function m(){p.value!==n&&(p.value=n,p.needsUpdate=s>0),e.numPlanes=s,e.numIntersection=0}function x(y,g,S,T){const C=y!==null?y.length:0;let _=null;if(C!==0){if(_=p.value,T!==!0||_===null){const v=S+C*4,b=g.matrixWorldInverse;f.getNormalMatrix(b),(_===null||_.length<v)&&(_=new Float32Array(v));for(let L=0,P=S;L!==C;++L,P+=4)u.copy(y[L]).applyMatrix4(b,f),u.normal.toArray(_,P),_[P+3]=u.constant}p.value=_,p.needsUpdate=!0}return e.numPlanes=C,e.numIntersection=0,_}}const Yr=4,Bm=[.125,.215,.35,.446,.526,.582],ms=20,BS=256,Zo=new Cf,zm=new Pt;let ld=null,cd=0,ud=0,dd=!1;const zS=new Q;class Hm{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._sigmas=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,n=0,s=.1,a=100,l={}){const{size:u=256,position:f=zS}=l;ld=this._renderer.getRenderTarget(),cd=this._renderer.getActiveCubeFace(),ud=this._renderer.getActiveMipmapLevel(),dd=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(u);const p=this._allocateTargets();return p.depthBuffer=!0,this._sceneToCubeUV(e,s,a,p,f),n>0&&this._blur(p,0,0,n),this._applyPMREM(p),this._cleanup(p),p}fromEquirectangular(e,n=null){return this._fromTexture(e,n)}fromCubemap(e,n=null){return this._fromTexture(e,n)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Wm(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Gm(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(ld,cd,ud),this._renderer.xr.enabled=dd,e.scissorTest=!1,no(e,0,0,e.width,e.height)}_fromTexture(e,n){e.mapping===vs||e.mapping===oo?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),ld=this._renderer.getRenderTarget(),cd=this._renderer.getActiveCubeFace(),ud=this._renderer.getActiveMipmapLevel(),dd=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const s=n||this._allocateTargets();return this._textureToCubeUV(e,s),this._applyPMREM(s),this._cleanup(s),s}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),n=4*this._cubeSize,s={magFilter:Gn,minFilter:Gn,generateMipmaps:!1,type:_r,format:Oi,colorSpace:Vl,depthBuffer:!1},a=Vm(e,n,s);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==n){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Vm(e,n,s);const{_lodMax:l}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods,sigmas:this._sigmas}=HS(l)),this._blurMaterial=GS(l,e,n),this._ggxMaterial=VS(l,e,n)}return a}_compileMaterial(e){const n=new Pe(new mi,e);this._renderer.compile(n,Zo)}_sceneToCubeUV(e,n,s,a,l){const p=new hi(90,1,n,s),m=[1,-1,1,1,1,1],x=[1,1,1,-1,-1,-1],y=this._renderer,g=y.autoClear,S=y.toneMapping;y.getClearColor(zm),y.toneMapping=$i,y.autoClear=!1,y.state.buffers.depth.getReversed()&&(y.setRenderTarget(a),y.clearDepth(),y.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new Pe(new uo,new Xl({name:"PMREM.Background",side:si,depthWrite:!1,depthTest:!1})));const C=this._backgroundBox,_=C.material;let v=!1;const b=e.background;b?b.isColor&&(_.color.copy(b),e.background=null,v=!0):(_.color.copy(zm),v=!0);for(let L=0;L<6;L++){const P=L%3;P===0?(p.up.set(0,m[L],0),p.position.set(l.x,l.y,l.z),p.lookAt(l.x+x[L],l.y,l.z)):P===1?(p.up.set(0,0,m[L]),p.position.set(l.x,l.y,l.z),p.lookAt(l.x,l.y+x[L],l.z)):(p.up.set(0,m[L],0),p.position.set(l.x,l.y,l.z),p.lookAt(l.x,l.y,l.z+x[L]));const z=this._cubeSize;no(a,P*z,L>2?z:0,z,z),y.setRenderTarget(a),v&&y.render(C,p),y.render(e,p)}y.toneMapping=S,y.autoClear=g,e.background=b}_textureToCubeUV(e,n){const s=this._renderer,a=e.mapping===vs||e.mapping===oo;a?(this._cubemapMaterial===null&&(this._cubemapMaterial=Wm()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Gm());const l=a?this._cubemapMaterial:this._equirectMaterial,u=this._lodMeshes[0];u.material=l;const f=l.uniforms;f.envMap.value=e;const p=this._cubeSize;no(n,0,0,3*p,2*p),s.setRenderTarget(n),s.render(u,Zo)}_applyPMREM(e){const n=this._renderer,s=n.autoClear;n.autoClear=!1;const a=this._lodMeshes.length;for(let l=1;l<a;l++)this._applyGGXFilter(e,l-1,l);n.autoClear=s}_applyGGXFilter(e,n,s){const a=this._renderer,l=this._pingPongRenderTarget,u=this._ggxMaterial,f=this._lodMeshes[s];f.material=u;const p=u.uniforms,m=s/(this._lodMeshes.length-1),x=n/(this._lodMeshes.length-1),y=Math.sqrt(m*m-x*x),g=0+m*1.25,S=y*g,{_lodMax:T}=this,C=this._sizeLods[s],_=3*C*(s>T-Yr?s-T+Yr:0),v=4*(this._cubeSize-C);p.envMap.value=e.texture,p.roughness.value=S,p.mipInt.value=T-n,no(l,_,v,3*C,2*C),a.setRenderTarget(l),a.render(f,Zo),p.envMap.value=l.texture,p.roughness.value=0,p.mipInt.value=T-s,no(e,_,v,3*C,2*C),a.setRenderTarget(e),a.render(f,Zo)}_blur(e,n,s,a,l){const u=this._pingPongRenderTarget;this._halfBlur(e,u,n,s,a,"latitudinal",l),this._halfBlur(u,e,s,s,a,"longitudinal",l)}_halfBlur(e,n,s,a,l,u,f){const p=this._renderer,m=this._blurMaterial;u!=="latitudinal"&&u!=="longitudinal"&&Ht("blur direction must be either latitudinal or longitudinal!");const x=3,y=this._lodMeshes[a];y.material=m;const g=m.uniforms,S=this._sizeLods[s]-1,T=isFinite(l)?Math.PI/(2*S):2*Math.PI/(2*ms-1),C=l/T,_=isFinite(l)?1+Math.floor(x*C):ms;_>ms&&Mt(`sigmaRadians, ${l}, is too large and will clip, as it requested ${_} samples when the maximum is set to ${ms}`);const v=[];let b=0;for(let k=0;k<ms;++k){const w=k/C,I=Math.exp(-w*w/2);v.push(I),k===0?b+=I:k<_&&(b+=2*I)}for(let k=0;k<v.length;k++)v[k]=v[k]/b;g.envMap.value=e.texture,g.samples.value=_,g.weights.value=v,g.latitudinal.value=u==="latitudinal",f&&(g.poleAxis.value=f);const{_lodMax:L}=this;g.dTheta.value=T,g.mipInt.value=L-s;const P=this._sizeLods[a],z=3*P*(a>L-Yr?a-L+Yr:0),D=4*(this._cubeSize-P);no(n,z,D,3*P,2*P),p.setRenderTarget(n),p.render(y,Zo)}}function HS(r){const e=[],n=[],s=[];let a=r;const l=r-Yr+1+Bm.length;for(let u=0;u<l;u++){const f=Math.pow(2,a);e.push(f);let p=1/f;u>r-Yr?p=Bm[u-r+Yr-1]:u===0&&(p=0),n.push(p);const m=1/(f-2),x=-m,y=1+m,g=[x,x,y,x,y,y,x,x,y,y,x,y],S=6,T=6,C=3,_=2,v=1,b=new Float32Array(C*T*S),L=new Float32Array(_*T*S),P=new Float32Array(v*T*S);for(let D=0;D<S;D++){const k=D%3*2/3-1,w=D>2?0:-1,I=[k,w,0,k+2/3,w,0,k+2/3,w+1,0,k,w,0,k+2/3,w+1,0,k,w+1,0];b.set(I,C*T*D),L.set(g,_*T*D);const j=[D,D,D,D,D,D];P.set(j,v*T*D)}const z=new mi;z.setAttribute("position",new Zi(b,C)),z.setAttribute("uv",new Zi(L,_)),z.setAttribute("faceIndex",new Zi(P,v)),s.push(new Pe(z,null)),a>Yr&&a--}return{lodMeshes:s,sizeLods:e,sigmas:n}}function Vm(r,e,n){const s=new Ki(r,e,n);return s.texture.mapping=$l,s.texture.name="PMREM.cubeUv",s.scissorTest=!0,s}function no(r,e,n,s,a){r.viewport.set(e,n,s,a),r.scissor.set(e,n,s,a)}function VS(r,e,n){return new Qi({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:BS,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${r}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:Kl(),fragmentShader:`

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
		`,blending:mr,depthTest:!1,depthWrite:!1})}function GS(r,e,n){const s=new Float32Array(ms),a=new Q(0,1,0);return new Qi({name:"SphericalGaussianBlur",defines:{n:ms,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${r}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:s},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:a}},vertexShader:Kl(),fragmentShader:`

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
		`,blending:mr,depthTest:!1,depthWrite:!1})}function Gm(){return new Qi({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Kl(),fragmentShader:`

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
		`,blending:mr,depthTest:!1,depthWrite:!1})}function Wm(){return new Qi({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Kl(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:mr,depthTest:!1,depthWrite:!1})}function Kl(){return`

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
	`}class F0 extends Ki{constructor(e=1,n={}){super(e,e,n),this.isWebGLCubeRenderTarget=!0;const s={width:e,height:e,depth:1},a=[s,s,s,s,s,s];this.texture=new R0(a),this._setTextureOptions(n),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,n){this.texture.type=n.type,this.texture.colorSpace=n.colorSpace,this.texture.generateMipmaps=n.generateMipmaps,this.texture.minFilter=n.minFilter,this.texture.magFilter=n.magFilter;const s={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},a=new uo(5,5,5),l=new Qi({name:"CubemapFromEquirect",uniforms:lo(s.uniforms),vertexShader:s.vertexShader,fragmentShader:s.fragmentShader,side:si,blending:mr});l.uniforms.tEquirect.value=n;const u=new Pe(a,l),f=n.minFilter;return n.minFilter===gs&&(n.minFilter=Gn),new qv(1,10,this).update(e,u),n.minFilter=f,u.geometry.dispose(),u.material.dispose(),this}clear(e,n=!0,s=!0,a=!0){const l=e.getRenderTarget();for(let u=0;u<6;u++)e.setRenderTarget(this,u),e.clear(n,s,a);e.setRenderTarget(l)}}function WS(r){let e=new WeakMap,n=new WeakMap,s=null;function a(g,S=!1){return g==null?null:S?u(g):l(g)}function l(g){if(g&&g.isTexture){const S=g.mapping;if(S===Nu||S===Uu)if(e.has(g)){const T=e.get(g).texture;return f(T,g.mapping)}else{const T=g.image;if(T&&T.height>0){const C=new F0(T.height);return C.fromEquirectangularTexture(r,g),e.set(g,C),g.addEventListener("dispose",m),f(C.texture,g.mapping)}else return null}}return g}function u(g){if(g&&g.isTexture){const S=g.mapping,T=S===Nu||S===Uu,C=S===vs||S===oo;if(T||C){let _=n.get(g);const v=_!==void 0?_.texture.pmremVersion:0;if(g.isRenderTargetTexture&&g.pmremVersion!==v)return s===null&&(s=new Hm(r)),_=T?s.fromEquirectangular(g,_):s.fromCubemap(g,_),_.texture.pmremVersion=g.pmremVersion,n.set(g,_),_.texture;if(_!==void 0)return _.texture;{const b=g.image;return T&&b&&b.height>0||C&&b&&p(b)?(s===null&&(s=new Hm(r)),_=T?s.fromEquirectangular(g):s.fromCubemap(g),_.texture.pmremVersion=g.pmremVersion,n.set(g,_),g.addEventListener("dispose",x),_.texture):null}}}return g}function f(g,S){return S===Nu?g.mapping=vs:S===Uu&&(g.mapping=oo),g}function p(g){let S=0;const T=6;for(let C=0;C<T;C++)g[C]!==void 0&&S++;return S===T}function m(g){const S=g.target;S.removeEventListener("dispose",m);const T=e.get(S);T!==void 0&&(e.delete(S),T.dispose())}function x(g){const S=g.target;S.removeEventListener("dispose",x);const T=n.get(S);T!==void 0&&(n.delete(S),T.dispose())}function y(){e=new WeakMap,n=new WeakMap,s!==null&&(s.dispose(),s=null)}return{get:a,dispose:y}}function XS(r){const e={};function n(s){if(e[s]!==void 0)return e[s];const a=r.getExtension(s);return e[s]=a,a}return{has:function(s){return n(s)!==null},init:function(){n("EXT_color_buffer_float"),n("WEBGL_clip_cull_distance"),n("OES_texture_float_linear"),n("EXT_color_buffer_half_float"),n("WEBGL_multisampled_render_to_texture"),n("WEBGL_render_shared_exponent")},get:function(s){const a=n(s);return a===null&&rf("WebGLRenderer: "+s+" extension not supported."),a}}}function jS(r,e,n,s){const a={},l=new WeakMap;function u(y){const g=y.target;g.index!==null&&e.remove(g.index);for(const T in g.attributes)e.remove(g.attributes[T]);g.removeEventListener("dispose",u),delete a[g.id];const S=l.get(g);S&&(e.remove(S),l.delete(g)),s.releaseStatesOfGeometry(g),g.isInstancedBufferGeometry===!0&&delete g._maxInstanceCount,n.memory.geometries--}function f(y,g){return a[g.id]===!0||(g.addEventListener("dispose",u),a[g.id]=!0,n.memory.geometries++),g}function p(y){const g=y.attributes;for(const S in g)e.update(g[S],r.ARRAY_BUFFER)}function m(y){const g=[],S=y.index,T=y.attributes.position;let C=0;if(T===void 0)return;if(S!==null){const b=S.array;C=S.version;for(let L=0,P=b.length;L<P;L+=3){const z=b[L+0],D=b[L+1],k=b[L+2];g.push(z,D,D,k,k,z)}}else{const b=T.array;C=T.version;for(let L=0,P=b.length/3-1;L<P;L+=3){const z=L+0,D=L+1,k=L+2;g.push(z,D,D,k,k,z)}}const _=new(T.count>=65535?b0:A0)(g,1);_.version=C;const v=l.get(y);v&&e.remove(v),l.set(y,_)}function x(y){const g=l.get(y);if(g){const S=y.index;S!==null&&g.version<S.version&&m(y)}else m(y);return l.get(y)}return{get:f,update:p,getWireframeAttribute:x}}function YS(r,e,n){let s;function a(y){s=y}let l,u;function f(y){l=y.type,u=y.bytesPerElement}function p(y,g){r.drawElements(s,g,l,y*u),n.update(g,s,1)}function m(y,g,S){S!==0&&(r.drawElementsInstanced(s,g,l,y*u,S),n.update(g,s,S))}function x(y,g,S){if(S===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(s,g,0,l,y,0,S);let C=0;for(let _=0;_<S;_++)C+=g[_];n.update(C,s,1)}this.setMode=a,this.setIndex=f,this.render=p,this.renderInstances=m,this.renderMultiDraw=x}function qS(r){const e={geometries:0,textures:0},n={frame:0,calls:0,triangles:0,points:0,lines:0};function s(l,u,f){switch(n.calls++,u){case r.TRIANGLES:n.triangles+=f*(l/3);break;case r.LINES:n.lines+=f*(l/2);break;case r.LINE_STRIP:n.lines+=f*(l-1);break;case r.LINE_LOOP:n.lines+=f*l;break;case r.POINTS:n.points+=f*l;break;default:Ht("WebGLInfo: Unknown draw mode:",u);break}}function a(){n.calls=0,n.triangles=0,n.points=0,n.lines=0}return{memory:e,render:n,programs:null,autoReset:!0,reset:a,update:s}}function $S(r,e,n){const s=new WeakMap,a=new fn;function l(u,f,p){const m=u.morphTargetInfluences,x=f.morphAttributes.position||f.morphAttributes.normal||f.morphAttributes.color,y=x!==void 0?x.length:0;let g=s.get(f);if(g===void 0||g.count!==y){let j=function(){w.dispose(),s.delete(f),f.removeEventListener("dispose",j)};var S=j;g!==void 0&&g.texture.dispose();const T=f.morphAttributes.position!==void 0,C=f.morphAttributes.normal!==void 0,_=f.morphAttributes.color!==void 0,v=f.morphAttributes.position||[],b=f.morphAttributes.normal||[],L=f.morphAttributes.color||[];let P=0;T===!0&&(P=1),C===!0&&(P=2),_===!0&&(P=3);let z=f.attributes.position.count*P,D=1;z>e.maxTextureSize&&(D=Math.ceil(z/e.maxTextureSize),z=e.maxTextureSize);const k=new Float32Array(z*D*4*y),w=new w0(k,z,D,y);w.type=ji,w.needsUpdate=!0;const I=P*4;for(let O=0;O<y;O++){const Y=v[O],le=b[O],ge=L[O],W=z*D*4*O;for(let ne=0;ne<Y.count;ne++){const $=ne*I;T===!0&&(a.fromBufferAttribute(Y,ne),k[W+$+0]=a.x,k[W+$+1]=a.y,k[W+$+2]=a.z,k[W+$+3]=0),C===!0&&(a.fromBufferAttribute(le,ne),k[W+$+4]=a.x,k[W+$+5]=a.y,k[W+$+6]=a.z,k[W+$+7]=0),_===!0&&(a.fromBufferAttribute(ge,ne),k[W+$+8]=a.x,k[W+$+9]=a.y,k[W+$+10]=a.z,k[W+$+11]=ge.itemSize===4?a.w:1)}}g={count:y,texture:w,size:new kt(z,D)},s.set(f,g),f.addEventListener("dispose",j)}if(u.isInstancedMesh===!0&&u.morphTexture!==null)p.getUniforms().setValue(r,"morphTexture",u.morphTexture,n);else{let T=0;for(let _=0;_<m.length;_++)T+=m[_];const C=f.morphTargetsRelative?1:1-T;p.getUniforms().setValue(r,"morphTargetBaseInfluence",C),p.getUniforms().setValue(r,"morphTargetInfluences",m)}p.getUniforms().setValue(r,"morphTargetsTexture",g.texture,n),p.getUniforms().setValue(r,"morphTargetsTextureSize",g.size)}return{update:l}}function KS(r,e,n,s,a){let l=new WeakMap;function u(m){const x=a.render.frame,y=m.geometry,g=e.get(m,y);if(l.get(g)!==x&&(e.update(g),l.set(g,x)),m.isInstancedMesh&&(m.hasEventListener("dispose",p)===!1&&m.addEventListener("dispose",p),l.get(m)!==x&&(n.update(m.instanceMatrix,r.ARRAY_BUFFER),m.instanceColor!==null&&n.update(m.instanceColor,r.ARRAY_BUFFER),l.set(m,x))),m.isSkinnedMesh){const S=m.skeleton;l.get(S)!==x&&(S.update(),l.set(S,x))}return g}function f(){l=new WeakMap}function p(m){const x=m.target;x.removeEventListener("dispose",p),s.releaseStatesOfObject(x),n.remove(x.instanceMatrix),x.instanceColor!==null&&n.remove(x.instanceColor)}return{update:u,dispose:f}}const ZS={[c0]:"LINEAR_TONE_MAPPING",[u0]:"REINHARD_TONE_MAPPING",[d0]:"CINEON_TONE_MAPPING",[df]:"ACES_FILMIC_TONE_MAPPING",[h0]:"AGX_TONE_MAPPING",[p0]:"NEUTRAL_TONE_MAPPING",[f0]:"CUSTOM_TONE_MAPPING"};function JS(r,e,n,s,a){const l=new Ki(e,n,{type:r,depthBuffer:s,stencilBuffer:a,depthTexture:s?new ao(e,n):void 0}),u=new Ki(e,n,{type:_r,depthBuffer:!1,stencilBuffer:!1}),f=new mi;f.setAttribute("position",new mn([-1,3,0,-1,-1,0,3,-1,0],3)),f.setAttribute("uv",new mn([0,2,0,0,2,0],2));const p=new Hv({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),m=new Pe(f,p),x=new Cf(-1,1,1,-1,0,1);let y=null,g=null,S=!1,T,C=null,_=[],v=!1;this.setSize=function(b,L){l.setSize(b,L),u.setSize(b,L);for(let P=0;P<_.length;P++){const z=_[P];z.setSize&&z.setSize(b,L)}},this.setEffects=function(b){_=b,v=_.length>0&&_[0].isRenderPass===!0;const L=l.width,P=l.height;for(let z=0;z<_.length;z++){const D=_[z];D.setSize&&D.setSize(L,P)}},this.begin=function(b,L){if(S||b.toneMapping===$i&&_.length===0)return!1;if(C=L,L!==null){const P=L.width,z=L.height;(l.width!==P||l.height!==z)&&this.setSize(P,z)}return v===!1&&b.setRenderTarget(l),T=b.toneMapping,b.toneMapping=$i,!0},this.hasRenderPass=function(){return v},this.end=function(b,L){b.toneMapping=T,S=!0;let P=l,z=u;for(let D=0;D<_.length;D++){const k=_[D];if(k.enabled!==!1&&(k.render(b,z,P,L),k.needsSwap!==!1)){const w=P;P=z,z=w}}if(y!==b.outputColorSpace||g!==b.toneMapping){y=b.outputColorSpace,g=b.toneMapping,p.defines={},Ot.getTransfer(y)===$t&&(p.defines.SRGB_TRANSFER="");const D=ZS[g];D&&(p.defines[D]=""),p.needsUpdate=!0}p.uniforms.tDiffuse.value=P.texture,b.setRenderTarget(C),b.render(m,x),C=null,S=!1},this.isCompositing=function(){return S},this.dispose=function(){l.depthTexture&&l.depthTexture.dispose(),l.dispose(),u.dispose(),f.dispose(),p.dispose()}}const O0=new Wn,af=new ao(1,1),k0=new w0,B0=new _v,z0=new R0,Xm=[],jm=[],Ym=new Float32Array(16),qm=new Float32Array(9),$m=new Float32Array(4);function fo(r,e,n){const s=r[0];if(s<=0||s>0)return r;const a=e*n;let l=Xm[a];if(l===void 0&&(l=new Float32Array(a),Xm[a]=l),e!==0){s.toArray(l,0);for(let u=1,f=0;u!==e;++u)f+=n,r[u].toArray(l,f)}return l}function wn(r,e){if(r.length!==e.length)return!1;for(let n=0,s=r.length;n<s;n++)if(r[n]!==e[n])return!1;return!0}function Tn(r,e){for(let n=0,s=e.length;n<s;n++)r[n]=e[n]}function Zl(r,e){let n=jm[e];n===void 0&&(n=new Int32Array(e),jm[e]=n);for(let s=0;s!==e;++s)n[s]=r.allocateTextureUnit();return n}function QS(r,e){const n=this.cache;n[0]!==e&&(r.uniform1f(this.addr,e),n[0]=e)}function e1(r,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(r.uniform2f(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(wn(n,e))return;r.uniform2fv(this.addr,e),Tn(n,e)}}function t1(r,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(r.uniform3f(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else if(e.r!==void 0)(n[0]!==e.r||n[1]!==e.g||n[2]!==e.b)&&(r.uniform3f(this.addr,e.r,e.g,e.b),n[0]=e.r,n[1]=e.g,n[2]=e.b);else{if(wn(n,e))return;r.uniform3fv(this.addr,e),Tn(n,e)}}function n1(r,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(r.uniform4f(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(wn(n,e))return;r.uniform4fv(this.addr,e),Tn(n,e)}}function i1(r,e){const n=this.cache,s=e.elements;if(s===void 0){if(wn(n,e))return;r.uniformMatrix2fv(this.addr,!1,e),Tn(n,e)}else{if(wn(n,s))return;$m.set(s),r.uniformMatrix2fv(this.addr,!1,$m),Tn(n,s)}}function r1(r,e){const n=this.cache,s=e.elements;if(s===void 0){if(wn(n,e))return;r.uniformMatrix3fv(this.addr,!1,e),Tn(n,e)}else{if(wn(n,s))return;qm.set(s),r.uniformMatrix3fv(this.addr,!1,qm),Tn(n,s)}}function s1(r,e){const n=this.cache,s=e.elements;if(s===void 0){if(wn(n,e))return;r.uniformMatrix4fv(this.addr,!1,e),Tn(n,e)}else{if(wn(n,s))return;Ym.set(s),r.uniformMatrix4fv(this.addr,!1,Ym),Tn(n,s)}}function o1(r,e){const n=this.cache;n[0]!==e&&(r.uniform1i(this.addr,e),n[0]=e)}function a1(r,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(r.uniform2i(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(wn(n,e))return;r.uniform2iv(this.addr,e),Tn(n,e)}}function l1(r,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(r.uniform3i(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(wn(n,e))return;r.uniform3iv(this.addr,e),Tn(n,e)}}function c1(r,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(r.uniform4i(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(wn(n,e))return;r.uniform4iv(this.addr,e),Tn(n,e)}}function u1(r,e){const n=this.cache;n[0]!==e&&(r.uniform1ui(this.addr,e),n[0]=e)}function d1(r,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(r.uniform2ui(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(wn(n,e))return;r.uniform2uiv(this.addr,e),Tn(n,e)}}function f1(r,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(r.uniform3ui(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(wn(n,e))return;r.uniform3uiv(this.addr,e),Tn(n,e)}}function h1(r,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(r.uniform4ui(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(wn(n,e))return;r.uniform4uiv(this.addr,e),Tn(n,e)}}function p1(r,e,n){const s=this.cache,a=n.allocateTextureUnit();s[0]!==a&&(r.uniform1i(this.addr,a),s[0]=a);let l;this.type===r.SAMPLER_2D_SHADOW?(af.compareFunction=n.isReversedDepthBuffer()?xf:vf,l=af):l=O0,n.setTexture2D(e||l,a)}function m1(r,e,n){const s=this.cache,a=n.allocateTextureUnit();s[0]!==a&&(r.uniform1i(this.addr,a),s[0]=a),n.setTexture3D(e||B0,a)}function g1(r,e,n){const s=this.cache,a=n.allocateTextureUnit();s[0]!==a&&(r.uniform1i(this.addr,a),s[0]=a),n.setTextureCube(e||z0,a)}function _1(r,e,n){const s=this.cache,a=n.allocateTextureUnit();s[0]!==a&&(r.uniform1i(this.addr,a),s[0]=a),n.setTexture2DArray(e||k0,a)}function v1(r){switch(r){case 5126:return QS;case 35664:return e1;case 35665:return t1;case 35666:return n1;case 35674:return i1;case 35675:return r1;case 35676:return s1;case 5124:case 35670:return o1;case 35667:case 35671:return a1;case 35668:case 35672:return l1;case 35669:case 35673:return c1;case 5125:return u1;case 36294:return d1;case 36295:return f1;case 36296:return h1;case 35678:case 36198:case 36298:case 36306:case 35682:return p1;case 35679:case 36299:case 36307:return m1;case 35680:case 36300:case 36308:case 36293:return g1;case 36289:case 36303:case 36311:case 36292:return _1}}function x1(r,e){r.uniform1fv(this.addr,e)}function y1(r,e){const n=fo(e,this.size,2);r.uniform2fv(this.addr,n)}function S1(r,e){const n=fo(e,this.size,3);r.uniform3fv(this.addr,n)}function M1(r,e){const n=fo(e,this.size,4);r.uniform4fv(this.addr,n)}function E1(r,e){const n=fo(e,this.size,4);r.uniformMatrix2fv(this.addr,!1,n)}function w1(r,e){const n=fo(e,this.size,9);r.uniformMatrix3fv(this.addr,!1,n)}function T1(r,e){const n=fo(e,this.size,16);r.uniformMatrix4fv(this.addr,!1,n)}function A1(r,e){r.uniform1iv(this.addr,e)}function b1(r,e){r.uniform2iv(this.addr,e)}function C1(r,e){r.uniform3iv(this.addr,e)}function R1(r,e){r.uniform4iv(this.addr,e)}function P1(r,e){r.uniform1uiv(this.addr,e)}function L1(r,e){r.uniform2uiv(this.addr,e)}function D1(r,e){r.uniform3uiv(this.addr,e)}function I1(r,e){r.uniform4uiv(this.addr,e)}function N1(r,e,n){const s=this.cache,a=e.length,l=Zl(n,a);wn(s,l)||(r.uniform1iv(this.addr,l),Tn(s,l));let u;this.type===r.SAMPLER_2D_SHADOW?u=af:u=O0;for(let f=0;f!==a;++f)n.setTexture2D(e[f]||u,l[f])}function U1(r,e,n){const s=this.cache,a=e.length,l=Zl(n,a);wn(s,l)||(r.uniform1iv(this.addr,l),Tn(s,l));for(let u=0;u!==a;++u)n.setTexture3D(e[u]||B0,l[u])}function F1(r,e,n){const s=this.cache,a=e.length,l=Zl(n,a);wn(s,l)||(r.uniform1iv(this.addr,l),Tn(s,l));for(let u=0;u!==a;++u)n.setTextureCube(e[u]||z0,l[u])}function O1(r,e,n){const s=this.cache,a=e.length,l=Zl(n,a);wn(s,l)||(r.uniform1iv(this.addr,l),Tn(s,l));for(let u=0;u!==a;++u)n.setTexture2DArray(e[u]||k0,l[u])}function k1(r){switch(r){case 5126:return x1;case 35664:return y1;case 35665:return S1;case 35666:return M1;case 35674:return E1;case 35675:return w1;case 35676:return T1;case 5124:case 35670:return A1;case 35667:case 35671:return b1;case 35668:case 35672:return C1;case 35669:case 35673:return R1;case 5125:return P1;case 36294:return L1;case 36295:return D1;case 36296:return I1;case 35678:case 36198:case 36298:case 36306:case 35682:return N1;case 35679:case 36299:case 36307:return U1;case 35680:case 36300:case 36308:case 36293:return F1;case 36289:case 36303:case 36311:case 36292:return O1}}class B1{constructor(e,n,s){this.id=e,this.addr=s,this.cache=[],this.type=n.type,this.setValue=v1(n.type)}}class z1{constructor(e,n,s){this.id=e,this.addr=s,this.cache=[],this.type=n.type,this.size=n.size,this.setValue=k1(n.type)}}class H1{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,n,s){const a=this.seq;for(let l=0,u=a.length;l!==u;++l){const f=a[l];f.setValue(e,n[f.id],s)}}}const fd=/(\w+)(\])?(\[|\.)?/g;function Km(r,e){r.seq.push(e),r.map[e.id]=e}function V1(r,e,n){const s=r.name,a=s.length;for(fd.lastIndex=0;;){const l=fd.exec(s),u=fd.lastIndex;let f=l[1];const p=l[2]==="]",m=l[3];if(p&&(f=f|0),m===void 0||m==="["&&u+2===a){Km(n,m===void 0?new B1(f,r,e):new z1(f,r,e));break}else{let y=n.map[f];y===void 0&&(y=new H1(f),Km(n,y)),n=y}}}class Bl{constructor(e,n){this.seq=[],this.map={};const s=e.getProgramParameter(n,e.ACTIVE_UNIFORMS);for(let u=0;u<s;++u){const f=e.getActiveUniform(n,u),p=e.getUniformLocation(n,f.name);V1(f,p,this)}const a=[],l=[];for(const u of this.seq)u.type===e.SAMPLER_2D_SHADOW||u.type===e.SAMPLER_CUBE_SHADOW||u.type===e.SAMPLER_2D_ARRAY_SHADOW?a.push(u):l.push(u);a.length>0&&(this.seq=a.concat(l))}setValue(e,n,s,a){const l=this.map[n];l!==void 0&&l.setValue(e,s,a)}setOptional(e,n,s){const a=n[s];a!==void 0&&this.setValue(e,s,a)}static upload(e,n,s,a){for(let l=0,u=n.length;l!==u;++l){const f=n[l],p=s[f.id];p.needsUpdate!==!1&&f.setValue(e,p.value,a)}}static seqWithValue(e,n){const s=[];for(let a=0,l=e.length;a!==l;++a){const u=e[a];u.id in n&&s.push(u)}return s}}function Zm(r,e,n){const s=r.createShader(e);return r.shaderSource(s,n),r.compileShader(s),s}const G1=37297;let W1=0;function X1(r,e){const n=r.split(`
`),s=[],a=Math.max(e-6,0),l=Math.min(e+6,n.length);for(let u=a;u<l;u++){const f=u+1;s.push(`${f===e?">":" "} ${f}: ${n[u]}`)}return s.join(`
`)}const Jm=new At;function j1(r){Ot._getMatrix(Jm,Ot.workingColorSpace,r);const e=`mat3( ${Jm.elements.map(n=>n.toFixed(4))} )`;switch(Ot.getTransfer(r)){case Gl:return[e,"LinearTransferOETF"];case $t:return[e,"sRGBTransferOETF"];default:return Mt("WebGLProgram: Unsupported color space: ",r),[e,"LinearTransferOETF"]}}function Qm(r,e,n){const s=r.getShaderParameter(e,r.COMPILE_STATUS),l=(r.getShaderInfoLog(e)||"").trim();if(s&&l==="")return"";const u=/ERROR: 0:(\d+)/.exec(l);if(u){const f=parseInt(u[1]);return n.toUpperCase()+`

`+l+`

`+X1(r.getShaderSource(e),f)}else return l}function Y1(r,e){const n=j1(e);return[`vec4 ${r}( vec4 value ) {`,`	return ${n[1]}( vec4( value.rgb * ${n[0]}, value.a ) );`,"}"].join(`
`)}const q1={[c0]:"Linear",[u0]:"Reinhard",[d0]:"Cineon",[df]:"ACESFilmic",[h0]:"AgX",[p0]:"Neutral",[f0]:"Custom"};function $1(r,e){const n=q1[e];return n===void 0?(Mt("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+r+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+r+"( vec3 color ) { return "+n+"ToneMapping( color ); }"}const Nl=new Q;function K1(){Ot.getLuminanceCoefficients(Nl);const r=Nl.x.toFixed(4),e=Nl.y.toFixed(4),n=Nl.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${r}, ${e}, ${n} );`,"	return dot( weights, rgb );","}"].join(`
`)}function Z1(r){return[r.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",r.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(ea).join(`
`)}function J1(r){const e=[];for(const n in r){const s=r[n];s!==!1&&e.push("#define "+n+" "+s)}return e.join(`
`)}function Q1(r,e){const n={},s=r.getProgramParameter(e,r.ACTIVE_ATTRIBUTES);for(let a=0;a<s;a++){const l=r.getActiveAttrib(e,a),u=l.name;let f=1;l.type===r.FLOAT_MAT2&&(f=2),l.type===r.FLOAT_MAT3&&(f=3),l.type===r.FLOAT_MAT4&&(f=4),n[u]={type:l.type,location:r.getAttribLocation(e,u),locationSize:f}}return n}function ea(r){return r!==""}function e0(r,e){const n=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return r.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,n).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function t0(r,e){return r.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const eM=/^[ \t]*#include +<([\w\d./]+)>/gm;function lf(r){return r.replace(eM,nM)}const tM=new Map;function nM(r,e){let n=Rt[e];if(n===void 0){const s=tM.get(e);if(s!==void 0)n=Rt[s],Mt('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,s);else throw new Error("Can not resolve #include <"+e+">")}return lf(n)}const iM=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function n0(r){return r.replace(iM,rM)}function rM(r,e,n,s){let a="";for(let l=parseInt(e);l<parseInt(n);l++)a+=s.replace(/\[\s*i\s*\]/g,"[ "+l+" ]").replace(/UNROLLED_LOOP_INDEX/g,l);return a}function i0(r){let e=`precision ${r.precision} float;
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
#define LOW_PRECISION`),e}const sM={[na]:"SHADOWMAP_TYPE_PCF",[Qo]:"SHADOWMAP_TYPE_VSM"};function oM(r){return sM[r.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const aM={[vs]:"ENVMAP_TYPE_CUBE",[oo]:"ENVMAP_TYPE_CUBE",[$l]:"ENVMAP_TYPE_CUBE_UV"};function lM(r){return r.envMap===!1?"ENVMAP_TYPE_CUBE":aM[r.envMapMode]||"ENVMAP_TYPE_CUBE"}const cM={[oo]:"ENVMAP_MODE_REFRACTION"};function uM(r){return r.envMap===!1?"ENVMAP_MODE_REFLECTION":cM[r.envMapMode]||"ENVMAP_MODE_REFLECTION"}const dM={[l0]:"ENVMAP_BLENDING_MULTIPLY",[K_]:"ENVMAP_BLENDING_MIX",[Z_]:"ENVMAP_BLENDING_ADD"};function fM(r){return r.envMap===!1?"ENVMAP_BLENDING_NONE":dM[r.combine]||"ENVMAP_BLENDING_NONE"}function hM(r){const e=r.envMapCubeUVHeight;if(e===null)return null;const n=Math.log2(e)-2,s=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,n),112)),texelHeight:s,maxMip:n}}function pM(r,e,n,s){const a=r.getContext(),l=n.defines;let u=n.vertexShader,f=n.fragmentShader;const p=oM(n),m=lM(n),x=uM(n),y=fM(n),g=hM(n),S=Z1(n),T=J1(l),C=a.createProgram();let _,v,b=n.glslVersion?"#version "+n.glslVersion+`
`:"";n.isRawShaderMaterial?(_=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,T].filter(ea).join(`
`),_.length>0&&(_+=`
`),v=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,T].filter(ea).join(`
`),v.length>0&&(v+=`
`)):(_=[i0(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,T,n.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",n.batching?"#define USE_BATCHING":"",n.batchingColor?"#define USE_BATCHING_COLOR":"",n.instancing?"#define USE_INSTANCING":"",n.instancingColor?"#define USE_INSTANCING_COLOR":"",n.instancingMorph?"#define USE_INSTANCING_MORPH":"",n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.map?"#define USE_MAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+x:"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.displacementMap?"#define USE_DISPLACEMENTMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.mapUv?"#define MAP_UV "+n.mapUv:"",n.alphaMapUv?"#define ALPHAMAP_UV "+n.alphaMapUv:"",n.lightMapUv?"#define LIGHTMAP_UV "+n.lightMapUv:"",n.aoMapUv?"#define AOMAP_UV "+n.aoMapUv:"",n.emissiveMapUv?"#define EMISSIVEMAP_UV "+n.emissiveMapUv:"",n.bumpMapUv?"#define BUMPMAP_UV "+n.bumpMapUv:"",n.normalMapUv?"#define NORMALMAP_UV "+n.normalMapUv:"",n.displacementMapUv?"#define DISPLACEMENTMAP_UV "+n.displacementMapUv:"",n.metalnessMapUv?"#define METALNESSMAP_UV "+n.metalnessMapUv:"",n.roughnessMapUv?"#define ROUGHNESSMAP_UV "+n.roughnessMapUv:"",n.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+n.anisotropyMapUv:"",n.clearcoatMapUv?"#define CLEARCOATMAP_UV "+n.clearcoatMapUv:"",n.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+n.clearcoatNormalMapUv:"",n.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+n.clearcoatRoughnessMapUv:"",n.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+n.iridescenceMapUv:"",n.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+n.iridescenceThicknessMapUv:"",n.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+n.sheenColorMapUv:"",n.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+n.sheenRoughnessMapUv:"",n.specularMapUv?"#define SPECULARMAP_UV "+n.specularMapUv:"",n.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+n.specularColorMapUv:"",n.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+n.specularIntensityMapUv:"",n.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+n.transmissionMapUv:"",n.thicknessMapUv?"#define THICKNESSMAP_UV "+n.thicknessMapUv:"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexNormals?"#define HAS_NORMAL":"",n.vertexColors?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.flatShading?"#define FLAT_SHADED":"",n.skinning?"#define USE_SKINNING":"",n.morphTargets?"#define USE_MORPHTARGETS":"",n.morphNormals&&n.flatShading===!1?"#define USE_MORPHNORMALS":"",n.morphColors?"#define USE_MORPHCOLORS":"",n.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+n.morphTextureStride:"",n.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+n.morphTargetsCount:"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+p:"",n.sizeAttenuation?"#define USE_SIZEATTENUATION":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",n.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(ea).join(`
`),v=[i0(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,T,n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",n.map?"#define USE_MAP":"",n.matcap?"#define USE_MATCAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+m:"",n.envMap?"#define "+x:"",n.envMap?"#define "+y:"",g?"#define CUBEUV_TEXEL_WIDTH "+g.texelWidth:"",g?"#define CUBEUV_TEXEL_HEIGHT "+g.texelHeight:"",g?"#define CUBEUV_MAX_MIP "+g.maxMip+".0":"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoat?"#define USE_CLEARCOAT":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.dispersion?"#define USE_DISPERSION":"",n.iridescence?"#define USE_IRIDESCENCE":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaTest?"#define USE_ALPHATEST":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.sheen?"#define USE_SHEEN":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors||n.instancingColor?"#define USE_COLOR":"",n.vertexAlphas||n.batchingColor?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.gradientMap?"#define USE_GRADIENTMAP":"",n.flatShading?"#define FLAT_SHADED":"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+p:"",n.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",n.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",n.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",n.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",n.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",n.toneMapping!==$i?"#define TONE_MAPPING":"",n.toneMapping!==$i?Rt.tonemapping_pars_fragment:"",n.toneMapping!==$i?$1("toneMapping",n.toneMapping):"",n.dithering?"#define DITHERING":"",n.opaque?"#define OPAQUE":"",Rt.colorspace_pars_fragment,Y1("linearToOutputTexel",n.outputColorSpace),K1(),n.useDepthPacking?"#define DEPTH_PACKING "+n.depthPacking:"",`
`].filter(ea).join(`
`)),u=lf(u),u=e0(u,n),u=t0(u,n),f=lf(f),f=e0(f,n),f=t0(f,n),u=n0(u),f=n0(f),n.isRawShaderMaterial!==!0&&(b=`#version 300 es
`,_=[S,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+_,v=["#define varying in",n.glslVersion===fm?"":"layout(location = 0) out highp vec4 pc_fragColor;",n.glslVersion===fm?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+v);const L=b+_+u,P=b+v+f,z=Zm(a,a.VERTEX_SHADER,L),D=Zm(a,a.FRAGMENT_SHADER,P);a.attachShader(C,z),a.attachShader(C,D),n.index0AttributeName!==void 0?a.bindAttribLocation(C,0,n.index0AttributeName):n.morphTargets===!0&&a.bindAttribLocation(C,0,"position"),a.linkProgram(C);function k(O){if(r.debug.checkShaderErrors){const Y=a.getProgramInfoLog(C)||"",le=a.getShaderInfoLog(z)||"",ge=a.getShaderInfoLog(D)||"",W=Y.trim(),ne=le.trim(),$=ge.trim();let J=!0,fe=!0;if(a.getProgramParameter(C,a.LINK_STATUS)===!1)if(J=!1,typeof r.debug.onShaderError=="function")r.debug.onShaderError(a,C,z,D);else{const he=Qm(a,z,"vertex"),F=Qm(a,D,"fragment");Ht("THREE.WebGLProgram: Shader Error "+a.getError()+" - VALIDATE_STATUS "+a.getProgramParameter(C,a.VALIDATE_STATUS)+`

Material Name: `+O.name+`
Material Type: `+O.type+`

Program Info Log: `+W+`
`+he+`
`+F)}else W!==""?Mt("WebGLProgram: Program Info Log:",W):(ne===""||$==="")&&(fe=!1);fe&&(O.diagnostics={runnable:J,programLog:W,vertexShader:{log:ne,prefix:_},fragmentShader:{log:$,prefix:v}})}a.deleteShader(z),a.deleteShader(D),w=new Bl(a,C),I=Q1(a,C)}let w;this.getUniforms=function(){return w===void 0&&k(this),w};let I;this.getAttributes=function(){return I===void 0&&k(this),I};let j=n.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return j===!1&&(j=a.getProgramParameter(C,G1)),j},this.destroy=function(){s.releaseStatesOfProgram(this),a.deleteProgram(C),this.program=void 0},this.type=n.shaderType,this.name=n.shaderName,this.id=W1++,this.cacheKey=e,this.usedTimes=1,this.program=C,this.vertexShader=z,this.fragmentShader=D,this}let mM=0;class gM{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const n=e.vertexShader,s=e.fragmentShader,a=this._getShaderStage(n),l=this._getShaderStage(s),u=this._getShaderCacheForMaterial(e);return u.has(a)===!1&&(u.add(a),a.usedTimes++),u.has(l)===!1&&(u.add(l),l.usedTimes++),this}remove(e){const n=this.materialCache.get(e);for(const s of n)s.usedTimes--,s.usedTimes===0&&this.shaderCache.delete(s.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const n=this.materialCache;let s=n.get(e);return s===void 0&&(s=new Set,n.set(e,s)),s}_getShaderStage(e){const n=this.shaderCache;let s=n.get(e);return s===void 0&&(s=new _M(e),n.set(e,s)),s}}class _M{constructor(e){this.id=mM++,this.code=e,this.usedTimes=0}}function vM(r){return r===xs||r===zl||r===Hl}function xM(r,e,n,s,a,l){const u=new Sf,f=new gM,p=new Set,m=[],x=new Map,y=s.logarithmicDepthBuffer;let g=s.precision;const S={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function T(w){return p.add(w),w===0?"uv":`uv${w}`}function C(w,I,j,O,Y,le){const ge=O.fog,W=Y.geometry,ne=w.isMeshStandardMaterial||w.isMeshLambertMaterial||w.isMeshPhongMaterial?O.environment:null,$=w.isMeshStandardMaterial||w.isMeshLambertMaterial&&!w.envMap||w.isMeshPhongMaterial&&!w.envMap,J=e.get(w.envMap||ne,$),fe=J&&J.mapping===$l?J.image.height:null,he=S[w.type];w.precision!==null&&(g=s.getMaxPrecision(w.precision),g!==w.precision&&Mt("WebGLProgram.getParameters:",w.precision,"not supported, using",g,"instead."));const F=W.morphAttributes.position||W.morphAttributes.normal||W.morphAttributes.color,ie=F!==void 0?F.length:0;let We=0;W.morphAttributes.position!==void 0&&(We=1),W.morphAttributes.normal!==void 0&&(We=2),W.morphAttributes.color!==void 0&&(We=3);let Fe,Xe,ce,Ae;if(he){const He=Xi[he];Fe=He.vertexShader,Xe=He.fragmentShader}else Fe=w.vertexShader,Xe=w.fragmentShader,f.update(w),ce=f.getVertexShaderID(w),Ae=f.getFragmentShaderID(w);const ye=r.getRenderTarget(),Ge=r.state.buffers.depth.getReversed(),nt=Y.isInstancedMesh===!0,lt=Y.isBatchedMesh===!0,Nt=!!w.map,pt=!!w.matcap,bt=!!J,Ut=!!w.aoMap,_t=!!w.lightMap,Bt=!!w.bumpMap,Gt=!!w.normalMap,Zt=!!w.displacementMap,G=!!w.emissiveMap,pe=!!w.metalnessMap,N=!!w.roughnessMap,dt=w.anisotropy>0,Oe=w.clearcoat>0,Ct=w.dispersion>0,R=w.iridescence>0,M=w.sheen>0,K=w.transmission>0,_e=dt&&!!w.anisotropyMap,Me=Oe&&!!w.clearcoatMap,be=Oe&&!!w.clearcoatNormalMap,Le=Oe&&!!w.clearcoatRoughnessMap,me=R&&!!w.iridescenceMap,Se=R&&!!w.iridescenceThicknessMap,Be=M&&!!w.sheenColorMap,je=M&&!!w.sheenRoughnessMap,Ue=!!w.specularMap,Ie=!!w.specularColorMap,ft=!!w.specularIntensityMap,ht=K&&!!w.transmissionMap,vt=K&&!!w.thicknessMap,B=!!w.gradientMap,Ne=!!w.alphaMap,ve=w.alphaTest>0,ee=!!w.alphaHash,Z=!!w.extensions;let re=$i;w.toneMapped&&(ye===null||ye.isXRRenderTarget===!0)&&(re=r.toneMapping);const we={shaderID:he,shaderType:w.type,shaderName:w.name,vertexShader:Fe,fragmentShader:Xe,defines:w.defines,customVertexShaderID:ce,customFragmentShaderID:Ae,isRawShaderMaterial:w.isRawShaderMaterial===!0,glslVersion:w.glslVersion,precision:g,batching:lt,batchingColor:lt&&Y._colorsTexture!==null,instancing:nt,instancingColor:nt&&Y.instanceColor!==null,instancingMorph:nt&&Y.morphTexture!==null,outputColorSpace:ye===null?r.outputColorSpace:ye.isXRRenderTarget===!0?ye.texture.colorSpace:Ot.workingColorSpace,alphaToCoverage:!!w.alphaToCoverage,map:Nt,matcap:pt,envMap:bt,envMapMode:bt&&J.mapping,envMapCubeUVHeight:fe,aoMap:Ut,lightMap:_t,bumpMap:Bt,normalMap:Gt,displacementMap:Zt,emissiveMap:G,normalMapObjectSpace:Gt&&w.normalMapType===ev,normalMapTangentSpace:Gt&&w.normalMapType===nf,packedNormalMap:Gt&&w.normalMapType===nf&&vM(w.normalMap.format),metalnessMap:pe,roughnessMap:N,anisotropy:dt,anisotropyMap:_e,clearcoat:Oe,clearcoatMap:Me,clearcoatNormalMap:be,clearcoatRoughnessMap:Le,dispersion:Ct,iridescence:R,iridescenceMap:me,iridescenceThicknessMap:Se,sheen:M,sheenColorMap:Be,sheenRoughnessMap:je,specularMap:Ue,specularColorMap:Ie,specularIntensityMap:ft,transmission:K,transmissionMap:ht,thicknessMap:vt,gradientMap:B,opaque:w.transparent===!1&&w.blending===io&&w.alphaToCoverage===!1,alphaMap:Ne,alphaTest:ve,alphaHash:ee,combine:w.combine,mapUv:Nt&&T(w.map.channel),aoMapUv:Ut&&T(w.aoMap.channel),lightMapUv:_t&&T(w.lightMap.channel),bumpMapUv:Bt&&T(w.bumpMap.channel),normalMapUv:Gt&&T(w.normalMap.channel),displacementMapUv:Zt&&T(w.displacementMap.channel),emissiveMapUv:G&&T(w.emissiveMap.channel),metalnessMapUv:pe&&T(w.metalnessMap.channel),roughnessMapUv:N&&T(w.roughnessMap.channel),anisotropyMapUv:_e&&T(w.anisotropyMap.channel),clearcoatMapUv:Me&&T(w.clearcoatMap.channel),clearcoatNormalMapUv:be&&T(w.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Le&&T(w.clearcoatRoughnessMap.channel),iridescenceMapUv:me&&T(w.iridescenceMap.channel),iridescenceThicknessMapUv:Se&&T(w.iridescenceThicknessMap.channel),sheenColorMapUv:Be&&T(w.sheenColorMap.channel),sheenRoughnessMapUv:je&&T(w.sheenRoughnessMap.channel),specularMapUv:Ue&&T(w.specularMap.channel),specularColorMapUv:Ie&&T(w.specularColorMap.channel),specularIntensityMapUv:ft&&T(w.specularIntensityMap.channel),transmissionMapUv:ht&&T(w.transmissionMap.channel),thicknessMapUv:vt&&T(w.thicknessMap.channel),alphaMapUv:Ne&&T(w.alphaMap.channel),vertexTangents:!!W.attributes.tangent&&(Gt||dt),vertexNormals:!!W.attributes.normal,vertexColors:w.vertexColors,vertexAlphas:w.vertexColors===!0&&!!W.attributes.color&&W.attributes.color.itemSize===4,pointsUvs:Y.isPoints===!0&&!!W.attributes.uv&&(Nt||Ne),fog:!!ge,useFog:w.fog===!0,fogExp2:!!ge&&ge.isFogExp2,flatShading:w.wireframe===!1&&(w.flatShading===!0||W.attributes.normal===void 0&&Gt===!1&&(w.isMeshLambertMaterial||w.isMeshPhongMaterial||w.isMeshStandardMaterial||w.isMeshPhysicalMaterial)),sizeAttenuation:w.sizeAttenuation===!0,logarithmicDepthBuffer:y,reversedDepthBuffer:Ge,skinning:Y.isSkinnedMesh===!0,morphTargets:W.morphAttributes.position!==void 0,morphNormals:W.morphAttributes.normal!==void 0,morphColors:W.morphAttributes.color!==void 0,morphTargetsCount:ie,morphTextureStride:We,numDirLights:I.directional.length,numPointLights:I.point.length,numSpotLights:I.spot.length,numSpotLightMaps:I.spotLightMap.length,numRectAreaLights:I.rectArea.length,numHemiLights:I.hemi.length,numDirLightShadows:I.directionalShadowMap.length,numPointLightShadows:I.pointShadowMap.length,numSpotLightShadows:I.spotShadowMap.length,numSpotLightShadowsWithMaps:I.numSpotLightShadowsWithMaps,numLightProbes:I.numLightProbes,numLightProbeGrids:le.length,numClippingPlanes:l.numPlanes,numClipIntersection:l.numIntersection,dithering:w.dithering,shadowMapEnabled:r.shadowMap.enabled&&j.length>0,shadowMapType:r.shadowMap.type,toneMapping:re,decodeVideoTexture:Nt&&w.map.isVideoTexture===!0&&Ot.getTransfer(w.map.colorSpace)===$t,decodeVideoTextureEmissive:G&&w.emissiveMap.isVideoTexture===!0&&Ot.getTransfer(w.emissiveMap.colorSpace)===$t,premultipliedAlpha:w.premultipliedAlpha,doubleSided:w.side===wi,flipSided:w.side===si,useDepthPacking:w.depthPacking>=0,depthPacking:w.depthPacking||0,index0AttributeName:w.index0AttributeName,extensionClipCullDistance:Z&&w.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Z&&w.extensions.multiDraw===!0||lt)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:w.customProgramCacheKey()};return we.vertexUv1s=p.has(1),we.vertexUv2s=p.has(2),we.vertexUv3s=p.has(3),p.clear(),we}function _(w){const I=[];if(w.shaderID?I.push(w.shaderID):(I.push(w.customVertexShaderID),I.push(w.customFragmentShaderID)),w.defines!==void 0)for(const j in w.defines)I.push(j),I.push(w.defines[j]);return w.isRawShaderMaterial===!1&&(v(I,w),b(I,w),I.push(r.outputColorSpace)),I.push(w.customProgramCacheKey),I.join()}function v(w,I){w.push(I.precision),w.push(I.outputColorSpace),w.push(I.envMapMode),w.push(I.envMapCubeUVHeight),w.push(I.mapUv),w.push(I.alphaMapUv),w.push(I.lightMapUv),w.push(I.aoMapUv),w.push(I.bumpMapUv),w.push(I.normalMapUv),w.push(I.displacementMapUv),w.push(I.emissiveMapUv),w.push(I.metalnessMapUv),w.push(I.roughnessMapUv),w.push(I.anisotropyMapUv),w.push(I.clearcoatMapUv),w.push(I.clearcoatNormalMapUv),w.push(I.clearcoatRoughnessMapUv),w.push(I.iridescenceMapUv),w.push(I.iridescenceThicknessMapUv),w.push(I.sheenColorMapUv),w.push(I.sheenRoughnessMapUv),w.push(I.specularMapUv),w.push(I.specularColorMapUv),w.push(I.specularIntensityMapUv),w.push(I.transmissionMapUv),w.push(I.thicknessMapUv),w.push(I.combine),w.push(I.fogExp2),w.push(I.sizeAttenuation),w.push(I.morphTargetsCount),w.push(I.morphAttributeCount),w.push(I.numDirLights),w.push(I.numPointLights),w.push(I.numSpotLights),w.push(I.numSpotLightMaps),w.push(I.numHemiLights),w.push(I.numRectAreaLights),w.push(I.numDirLightShadows),w.push(I.numPointLightShadows),w.push(I.numSpotLightShadows),w.push(I.numSpotLightShadowsWithMaps),w.push(I.numLightProbes),w.push(I.shadowMapType),w.push(I.toneMapping),w.push(I.numClippingPlanes),w.push(I.numClipIntersection),w.push(I.depthPacking)}function b(w,I){u.disableAll(),I.instancing&&u.enable(0),I.instancingColor&&u.enable(1),I.instancingMorph&&u.enable(2),I.matcap&&u.enable(3),I.envMap&&u.enable(4),I.normalMapObjectSpace&&u.enable(5),I.normalMapTangentSpace&&u.enable(6),I.clearcoat&&u.enable(7),I.iridescence&&u.enable(8),I.alphaTest&&u.enable(9),I.vertexColors&&u.enable(10),I.vertexAlphas&&u.enable(11),I.vertexUv1s&&u.enable(12),I.vertexUv2s&&u.enable(13),I.vertexUv3s&&u.enable(14),I.vertexTangents&&u.enable(15),I.anisotropy&&u.enable(16),I.alphaHash&&u.enable(17),I.batching&&u.enable(18),I.dispersion&&u.enable(19),I.batchingColor&&u.enable(20),I.gradientMap&&u.enable(21),I.packedNormalMap&&u.enable(22),I.vertexNormals&&u.enable(23),w.push(u.mask),u.disableAll(),I.fog&&u.enable(0),I.useFog&&u.enable(1),I.flatShading&&u.enable(2),I.logarithmicDepthBuffer&&u.enable(3),I.reversedDepthBuffer&&u.enable(4),I.skinning&&u.enable(5),I.morphTargets&&u.enable(6),I.morphNormals&&u.enable(7),I.morphColors&&u.enable(8),I.premultipliedAlpha&&u.enable(9),I.shadowMapEnabled&&u.enable(10),I.doubleSided&&u.enable(11),I.flipSided&&u.enable(12),I.useDepthPacking&&u.enable(13),I.dithering&&u.enable(14),I.transmission&&u.enable(15),I.sheen&&u.enable(16),I.opaque&&u.enable(17),I.pointsUvs&&u.enable(18),I.decodeVideoTexture&&u.enable(19),I.decodeVideoTextureEmissive&&u.enable(20),I.alphaToCoverage&&u.enable(21),I.numLightProbeGrids>0&&u.enable(22),w.push(u.mask)}function L(w){const I=S[w.type];let j;if(I){const O=Xi[I];j=kv.clone(O.uniforms)}else j=w.uniforms;return j}function P(w,I){let j=x.get(I);return j!==void 0?++j.usedTimes:(j=new pM(r,I,w,a),m.push(j),x.set(I,j)),j}function z(w){if(--w.usedTimes===0){const I=m.indexOf(w);m[I]=m[m.length-1],m.pop(),x.delete(w.cacheKey),w.destroy()}}function D(w){f.remove(w)}function k(){f.dispose()}return{getParameters:C,getProgramCacheKey:_,getUniforms:L,acquireProgram:P,releaseProgram:z,releaseShaderCache:D,programs:m,dispose:k}}function yM(){let r=new WeakMap;function e(u){return r.has(u)}function n(u){let f=r.get(u);return f===void 0&&(f={},r.set(u,f)),f}function s(u){r.delete(u)}function a(u,f,p){r.get(u)[f]=p}function l(){r=new WeakMap}return{has:e,get:n,remove:s,update:a,dispose:l}}function SM(r,e){return r.groupOrder!==e.groupOrder?r.groupOrder-e.groupOrder:r.renderOrder!==e.renderOrder?r.renderOrder-e.renderOrder:r.material.id!==e.material.id?r.material.id-e.material.id:r.materialVariant!==e.materialVariant?r.materialVariant-e.materialVariant:r.z!==e.z?r.z-e.z:r.id-e.id}function r0(r,e){return r.groupOrder!==e.groupOrder?r.groupOrder-e.groupOrder:r.renderOrder!==e.renderOrder?r.renderOrder-e.renderOrder:r.z!==e.z?e.z-r.z:r.id-e.id}function s0(){const r=[];let e=0;const n=[],s=[],a=[];function l(){e=0,n.length=0,s.length=0,a.length=0}function u(g){let S=0;return g.isInstancedMesh&&(S+=2),g.isSkinnedMesh&&(S+=1),S}function f(g,S,T,C,_,v){let b=r[e];return b===void 0?(b={id:g.id,object:g,geometry:S,material:T,materialVariant:u(g),groupOrder:C,renderOrder:g.renderOrder,z:_,group:v},r[e]=b):(b.id=g.id,b.object=g,b.geometry=S,b.material=T,b.materialVariant=u(g),b.groupOrder=C,b.renderOrder=g.renderOrder,b.z=_,b.group=v),e++,b}function p(g,S,T,C,_,v){const b=f(g,S,T,C,_,v);T.transmission>0?s.push(b):T.transparent===!0?a.push(b):n.push(b)}function m(g,S,T,C,_,v){const b=f(g,S,T,C,_,v);T.transmission>0?s.unshift(b):T.transparent===!0?a.unshift(b):n.unshift(b)}function x(g,S){n.length>1&&n.sort(g||SM),s.length>1&&s.sort(S||r0),a.length>1&&a.sort(S||r0)}function y(){for(let g=e,S=r.length;g<S;g++){const T=r[g];if(T.id===null)break;T.id=null,T.object=null,T.geometry=null,T.material=null,T.group=null}}return{opaque:n,transmissive:s,transparent:a,init:l,push:p,unshift:m,finish:y,sort:x}}function MM(){let r=new WeakMap;function e(s,a){const l=r.get(s);let u;return l===void 0?(u=new s0,r.set(s,[u])):a>=l.length?(u=new s0,l.push(u)):u=l[a],u}function n(){r=new WeakMap}return{get:e,dispose:n}}function EM(){const r={};return{get:function(e){if(r[e.id]!==void 0)return r[e.id];let n;switch(e.type){case"DirectionalLight":n={direction:new Q,color:new Pt};break;case"SpotLight":n={position:new Q,direction:new Q,color:new Pt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":n={position:new Q,color:new Pt,distance:0,decay:0};break;case"HemisphereLight":n={direction:new Q,skyColor:new Pt,groundColor:new Pt};break;case"RectAreaLight":n={color:new Pt,position:new Q,halfWidth:new Q,halfHeight:new Q};break}return r[e.id]=n,n}}}function wM(){const r={};return{get:function(e){if(r[e.id]!==void 0)return r[e.id];let n;switch(e.type){case"DirectionalLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new kt};break;case"SpotLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new kt};break;case"PointLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new kt,shadowCameraNear:1,shadowCameraFar:1e3};break}return r[e.id]=n,n}}}let TM=0;function AM(r,e){return(e.castShadow?2:0)-(r.castShadow?2:0)+(e.map?1:0)-(r.map?1:0)}function bM(r){const e=new EM,n=wM(),s={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let m=0;m<9;m++)s.probe.push(new Q);const a=new Q,l=new hn,u=new hn;function f(m){let x=0,y=0,g=0;for(let I=0;I<9;I++)s.probe[I].set(0,0,0);let S=0,T=0,C=0,_=0,v=0,b=0,L=0,P=0,z=0,D=0,k=0;m.sort(AM);for(let I=0,j=m.length;I<j;I++){const O=m[I],Y=O.color,le=O.intensity,ge=O.distance;let W=null;if(O.shadow&&O.shadow.map&&(O.shadow.map.texture.format===xs?W=O.shadow.map.texture:W=O.shadow.map.depthTexture||O.shadow.map.texture),O.isAmbientLight)x+=Y.r*le,y+=Y.g*le,g+=Y.b*le;else if(O.isLightProbe){for(let ne=0;ne<9;ne++)s.probe[ne].addScaledVector(O.sh.coefficients[ne],le);k++}else if(O.isDirectionalLight){const ne=e.get(O);if(ne.color.copy(O.color).multiplyScalar(O.intensity),O.castShadow){const $=O.shadow,J=n.get(O);J.shadowIntensity=$.intensity,J.shadowBias=$.bias,J.shadowNormalBias=$.normalBias,J.shadowRadius=$.radius,J.shadowMapSize=$.mapSize,s.directionalShadow[S]=J,s.directionalShadowMap[S]=W,s.directionalShadowMatrix[S]=O.shadow.matrix,b++}s.directional[S]=ne,S++}else if(O.isSpotLight){const ne=e.get(O);ne.position.setFromMatrixPosition(O.matrixWorld),ne.color.copy(Y).multiplyScalar(le),ne.distance=ge,ne.coneCos=Math.cos(O.angle),ne.penumbraCos=Math.cos(O.angle*(1-O.penumbra)),ne.decay=O.decay,s.spot[C]=ne;const $=O.shadow;if(O.map&&(s.spotLightMap[z]=O.map,z++,$.updateMatrices(O),O.castShadow&&D++),s.spotLightMatrix[C]=$.matrix,O.castShadow){const J=n.get(O);J.shadowIntensity=$.intensity,J.shadowBias=$.bias,J.shadowNormalBias=$.normalBias,J.shadowRadius=$.radius,J.shadowMapSize=$.mapSize,s.spotShadow[C]=J,s.spotShadowMap[C]=W,P++}C++}else if(O.isRectAreaLight){const ne=e.get(O);ne.color.copy(Y).multiplyScalar(le),ne.halfWidth.set(O.width*.5,0,0),ne.halfHeight.set(0,O.height*.5,0),s.rectArea[_]=ne,_++}else if(O.isPointLight){const ne=e.get(O);if(ne.color.copy(O.color).multiplyScalar(O.intensity),ne.distance=O.distance,ne.decay=O.decay,O.castShadow){const $=O.shadow,J=n.get(O);J.shadowIntensity=$.intensity,J.shadowBias=$.bias,J.shadowNormalBias=$.normalBias,J.shadowRadius=$.radius,J.shadowMapSize=$.mapSize,J.shadowCameraNear=$.camera.near,J.shadowCameraFar=$.camera.far,s.pointShadow[T]=J,s.pointShadowMap[T]=W,s.pointShadowMatrix[T]=O.shadow.matrix,L++}s.point[T]=ne,T++}else if(O.isHemisphereLight){const ne=e.get(O);ne.skyColor.copy(O.color).multiplyScalar(le),ne.groundColor.copy(O.groundColor).multiplyScalar(le),s.hemi[v]=ne,v++}}_>0&&(r.has("OES_texture_float_linear")===!0?(s.rectAreaLTC1=Ye.LTC_FLOAT_1,s.rectAreaLTC2=Ye.LTC_FLOAT_2):(s.rectAreaLTC1=Ye.LTC_HALF_1,s.rectAreaLTC2=Ye.LTC_HALF_2)),s.ambient[0]=x,s.ambient[1]=y,s.ambient[2]=g;const w=s.hash;(w.directionalLength!==S||w.pointLength!==T||w.spotLength!==C||w.rectAreaLength!==_||w.hemiLength!==v||w.numDirectionalShadows!==b||w.numPointShadows!==L||w.numSpotShadows!==P||w.numSpotMaps!==z||w.numLightProbes!==k)&&(s.directional.length=S,s.spot.length=C,s.rectArea.length=_,s.point.length=T,s.hemi.length=v,s.directionalShadow.length=b,s.directionalShadowMap.length=b,s.pointShadow.length=L,s.pointShadowMap.length=L,s.spotShadow.length=P,s.spotShadowMap.length=P,s.directionalShadowMatrix.length=b,s.pointShadowMatrix.length=L,s.spotLightMatrix.length=P+z-D,s.spotLightMap.length=z,s.numSpotLightShadowsWithMaps=D,s.numLightProbes=k,w.directionalLength=S,w.pointLength=T,w.spotLength=C,w.rectAreaLength=_,w.hemiLength=v,w.numDirectionalShadows=b,w.numPointShadows=L,w.numSpotShadows=P,w.numSpotMaps=z,w.numLightProbes=k,s.version=TM++)}function p(m,x){let y=0,g=0,S=0,T=0,C=0;const _=x.matrixWorldInverse;for(let v=0,b=m.length;v<b;v++){const L=m[v];if(L.isDirectionalLight){const P=s.directional[y];P.direction.setFromMatrixPosition(L.matrixWorld),a.setFromMatrixPosition(L.target.matrixWorld),P.direction.sub(a),P.direction.transformDirection(_),y++}else if(L.isSpotLight){const P=s.spot[S];P.position.setFromMatrixPosition(L.matrixWorld),P.position.applyMatrix4(_),P.direction.setFromMatrixPosition(L.matrixWorld),a.setFromMatrixPosition(L.target.matrixWorld),P.direction.sub(a),P.direction.transformDirection(_),S++}else if(L.isRectAreaLight){const P=s.rectArea[T];P.position.setFromMatrixPosition(L.matrixWorld),P.position.applyMatrix4(_),u.identity(),l.copy(L.matrixWorld),l.premultiply(_),u.extractRotation(l),P.halfWidth.set(L.width*.5,0,0),P.halfHeight.set(0,L.height*.5,0),P.halfWidth.applyMatrix4(u),P.halfHeight.applyMatrix4(u),T++}else if(L.isPointLight){const P=s.point[g];P.position.setFromMatrixPosition(L.matrixWorld),P.position.applyMatrix4(_),g++}else if(L.isHemisphereLight){const P=s.hemi[C];P.direction.setFromMatrixPosition(L.matrixWorld),P.direction.transformDirection(_),C++}}}return{setup:f,setupView:p,state:s}}function o0(r){const e=new bM(r),n=[],s=[],a=[];function l(g){y.camera=g,n.length=0,s.length=0,a.length=0}function u(g){n.push(g)}function f(g){s.push(g)}function p(g){a.push(g)}function m(){e.setup(n)}function x(g){e.setupView(n,g)}const y={lightsArray:n,shadowsArray:s,lightProbeGridArray:a,camera:null,lights:e,transmissionRenderTarget:{},textureUnits:0};return{init:l,state:y,setupLights:m,setupLightsView:x,pushLight:u,pushShadow:f,pushLightProbeGrid:p}}function CM(r){let e=new WeakMap;function n(a,l=0){const u=e.get(a);let f;return u===void 0?(f=new o0(r),e.set(a,[f])):l>=u.length?(f=new o0(r),u.push(f)):f=u[l],f}function s(){e=new WeakMap}return{get:n,dispose:s}}const RM=`void main() {
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
}`,LM=[new Q(1,0,0),new Q(-1,0,0),new Q(0,1,0),new Q(0,-1,0),new Q(0,0,1),new Q(0,0,-1)],DM=[new Q(0,-1,0),new Q(0,-1,0),new Q(0,0,1),new Q(0,0,-1),new Q(0,-1,0),new Q(0,-1,0)],a0=new hn,Jo=new Q,hd=new Q;function IM(r,e,n){let s=new wf;const a=new kt,l=new kt,u=new fn,f=new Gv,p=new Wv,m={},x=n.maxTextureSize,y={[qr]:si,[si]:qr,[wi]:wi},g=new Qi({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new kt},radius:{value:4}},vertexShader:RM,fragmentShader:PM}),S=g.clone();S.defines.HORIZONTAL_PASS=1;const T=new mi;T.setAttribute("position",new Zi(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const C=new Pe(T,g),_=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=na;let v=this.type;this.render=function(D,k,w){if(_.enabled===!1||_.autoUpdate===!1&&_.needsUpdate===!1||D.length===0)return;this.type===L_&&(Mt("WebGLShadowMap: PCFSoftShadowMap has been deprecated. Using PCFShadowMap instead."),this.type=na);const I=r.getRenderTarget(),j=r.getActiveCubeFace(),O=r.getActiveMipmapLevel(),Y=r.state;Y.setBlending(mr),Y.buffers.depth.getReversed()===!0?Y.buffers.color.setClear(0,0,0,0):Y.buffers.color.setClear(1,1,1,1),Y.buffers.depth.setTest(!0),Y.setScissorTest(!1);const le=v!==this.type;le&&k.traverse(function(ge){ge.material&&(Array.isArray(ge.material)?ge.material.forEach(W=>W.needsUpdate=!0):ge.material.needsUpdate=!0)});for(let ge=0,W=D.length;ge<W;ge++){const ne=D[ge],$=ne.shadow;if($===void 0){Mt("WebGLShadowMap:",ne,"has no shadow.");continue}if($.autoUpdate===!1&&$.needsUpdate===!1)continue;a.copy($.mapSize);const J=$.getFrameExtents();a.multiply(J),l.copy($.mapSize),(a.x>x||a.y>x)&&(a.x>x&&(l.x=Math.floor(x/J.x),a.x=l.x*J.x,$.mapSize.x=l.x),a.y>x&&(l.y=Math.floor(x/J.y),a.y=l.y*J.y,$.mapSize.y=l.y));const fe=r.state.buffers.depth.getReversed();if($.camera._reversedDepth=fe,$.map===null||le===!0){if($.map!==null&&($.map.depthTexture!==null&&($.map.depthTexture.dispose(),$.map.depthTexture=null),$.map.dispose()),this.type===Qo){if(ne.isPointLight){Mt("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}$.map=new Ki(a.x,a.y,{format:xs,type:_r,minFilter:Gn,magFilter:Gn,generateMipmaps:!1}),$.map.texture.name=ne.name+".shadowMap",$.map.depthTexture=new ao(a.x,a.y,ji),$.map.depthTexture.name=ne.name+".shadowMapDepth",$.map.depthTexture.format=vr,$.map.depthTexture.compareFunction=null,$.map.depthTexture.minFilter=Un,$.map.depthTexture.magFilter=Un}else ne.isPointLight?($.map=new F0(a.x),$.map.depthTexture=new Fv(a.x,Ji)):($.map=new Ki(a.x,a.y),$.map.depthTexture=new ao(a.x,a.y,Ji)),$.map.depthTexture.name=ne.name+".shadowMap",$.map.depthTexture.format=vr,this.type===na?($.map.depthTexture.compareFunction=fe?xf:vf,$.map.depthTexture.minFilter=Gn,$.map.depthTexture.magFilter=Gn):($.map.depthTexture.compareFunction=null,$.map.depthTexture.minFilter=Un,$.map.depthTexture.magFilter=Un);$.camera.updateProjectionMatrix()}const he=$.map.isWebGLCubeRenderTarget?6:1;for(let F=0;F<he;F++){if($.map.isWebGLCubeRenderTarget)r.setRenderTarget($.map,F),r.clear();else{F===0&&(r.setRenderTarget($.map),r.clear());const ie=$.getViewport(F);u.set(l.x*ie.x,l.y*ie.y,l.x*ie.z,l.y*ie.w),Y.viewport(u)}if(ne.isPointLight){const ie=$.camera,We=$.matrix,Fe=ne.distance||ie.far;Fe!==ie.far&&(ie.far=Fe,ie.updateProjectionMatrix()),Jo.setFromMatrixPosition(ne.matrixWorld),ie.position.copy(Jo),hd.copy(ie.position),hd.add(LM[F]),ie.up.copy(DM[F]),ie.lookAt(hd),ie.updateMatrixWorld(),We.makeTranslation(-Jo.x,-Jo.y,-Jo.z),a0.multiplyMatrices(ie.projectionMatrix,ie.matrixWorldInverse),$._frustum.setFromProjectionMatrix(a0,ie.coordinateSystem,ie.reversedDepth)}else $.updateMatrices(ne);s=$.getFrustum(),P(k,w,$.camera,ne,this.type)}$.isPointLightShadow!==!0&&this.type===Qo&&b($,w),$.needsUpdate=!1}v=this.type,_.needsUpdate=!1,r.setRenderTarget(I,j,O)};function b(D,k){const w=e.update(C);g.defines.VSM_SAMPLES!==D.blurSamples&&(g.defines.VSM_SAMPLES=D.blurSamples,S.defines.VSM_SAMPLES=D.blurSamples,g.needsUpdate=!0,S.needsUpdate=!0),D.mapPass===null&&(D.mapPass=new Ki(a.x,a.y,{format:xs,type:_r})),g.uniforms.shadow_pass.value=D.map.depthTexture,g.uniforms.resolution.value=D.mapSize,g.uniforms.radius.value=D.radius,r.setRenderTarget(D.mapPass),r.clear(),r.renderBufferDirect(k,null,w,g,C,null),S.uniforms.shadow_pass.value=D.mapPass.texture,S.uniforms.resolution.value=D.mapSize,S.uniforms.radius.value=D.radius,r.setRenderTarget(D.map),r.clear(),r.renderBufferDirect(k,null,w,S,C,null)}function L(D,k,w,I){let j=null;const O=w.isPointLight===!0?D.customDistanceMaterial:D.customDepthMaterial;if(O!==void 0)j=O;else if(j=w.isPointLight===!0?p:f,r.localClippingEnabled&&k.clipShadows===!0&&Array.isArray(k.clippingPlanes)&&k.clippingPlanes.length!==0||k.displacementMap&&k.displacementScale!==0||k.alphaMap&&k.alphaTest>0||k.map&&k.alphaTest>0||k.alphaToCoverage===!0){const Y=j.uuid,le=k.uuid;let ge=m[Y];ge===void 0&&(ge={},m[Y]=ge);let W=ge[le];W===void 0&&(W=j.clone(),ge[le]=W,k.addEventListener("dispose",z)),j=W}if(j.visible=k.visible,j.wireframe=k.wireframe,I===Qo?j.side=k.shadowSide!==null?k.shadowSide:k.side:j.side=k.shadowSide!==null?k.shadowSide:y[k.side],j.alphaMap=k.alphaMap,j.alphaTest=k.alphaToCoverage===!0?.5:k.alphaTest,j.map=k.map,j.clipShadows=k.clipShadows,j.clippingPlanes=k.clippingPlanes,j.clipIntersection=k.clipIntersection,j.displacementMap=k.displacementMap,j.displacementScale=k.displacementScale,j.displacementBias=k.displacementBias,j.wireframeLinewidth=k.wireframeLinewidth,j.linewidth=k.linewidth,w.isPointLight===!0&&j.isMeshDistanceMaterial===!0){const Y=r.properties.get(j);Y.light=w}return j}function P(D,k,w,I,j){if(D.visible===!1)return;if(D.layers.test(k.layers)&&(D.isMesh||D.isLine||D.isPoints)&&(D.castShadow||D.receiveShadow&&j===Qo)&&(!D.frustumCulled||s.intersectsObject(D))){D.modelViewMatrix.multiplyMatrices(w.matrixWorldInverse,D.matrixWorld);const le=e.update(D),ge=D.material;if(Array.isArray(ge)){const W=le.groups;for(let ne=0,$=W.length;ne<$;ne++){const J=W[ne],fe=ge[J.materialIndex];if(fe&&fe.visible){const he=L(D,fe,I,j);D.onBeforeShadow(r,D,k,w,le,he,J),r.renderBufferDirect(w,null,le,he,D,J),D.onAfterShadow(r,D,k,w,le,he,J)}}}else if(ge.visible){const W=L(D,ge,I,j);D.onBeforeShadow(r,D,k,w,le,W,null),r.renderBufferDirect(w,null,le,W,D,null),D.onAfterShadow(r,D,k,w,le,W,null)}}const Y=D.children;for(let le=0,ge=Y.length;le<ge;le++)P(Y[le],k,w,I,j)}function z(D){D.target.removeEventListener("dispose",z);for(const w in m){const I=m[w],j=D.target.uuid;j in I&&(I[j].dispose(),delete I[j])}}}function NM(r,e){function n(){let B=!1;const Ne=new fn;let ve=null;const ee=new fn(0,0,0,0);return{setMask:function(Z){ve!==Z&&!B&&(r.colorMask(Z,Z,Z,Z),ve=Z)},setLocked:function(Z){B=Z},setClear:function(Z,re,we,He,$e){$e===!0&&(Z*=He,re*=He,we*=He),Ne.set(Z,re,we,He),ee.equals(Ne)===!1&&(r.clearColor(Z,re,we,He),ee.copy(Ne))},reset:function(){B=!1,ve=null,ee.set(-1,0,0,0)}}}function s(){let B=!1,Ne=!1,ve=null,ee=null,Z=null;return{setReversed:function(re){if(Ne!==re){const we=e.get("EXT_clip_control");re?we.clipControlEXT(we.LOWER_LEFT_EXT,we.ZERO_TO_ONE_EXT):we.clipControlEXT(we.LOWER_LEFT_EXT,we.NEGATIVE_ONE_TO_ONE_EXT),Ne=re;const He=Z;Z=null,this.setClear(He)}},getReversed:function(){return Ne},setTest:function(re){re?ye(r.DEPTH_TEST):Ge(r.DEPTH_TEST)},setMask:function(re){ve!==re&&!B&&(r.depthMask(re),ve=re)},setFunc:function(re){if(Ne&&(re=uv[re]),ee!==re){switch(re){case _d:r.depthFunc(r.NEVER);break;case vd:r.depthFunc(r.ALWAYS);break;case xd:r.depthFunc(r.LESS);break;case so:r.depthFunc(r.LEQUAL);break;case yd:r.depthFunc(r.EQUAL);break;case Sd:r.depthFunc(r.GEQUAL);break;case Md:r.depthFunc(r.GREATER);break;case Ed:r.depthFunc(r.NOTEQUAL);break;default:r.depthFunc(r.LEQUAL)}ee=re}},setLocked:function(re){B=re},setClear:function(re){Z!==re&&(Z=re,Ne&&(re=1-re),r.clearDepth(re))},reset:function(){B=!1,ve=null,ee=null,Z=null,Ne=!1}}}function a(){let B=!1,Ne=null,ve=null,ee=null,Z=null,re=null,we=null,He=null,$e=null;return{setTest:function(Ke){B||(Ke?ye(r.STENCIL_TEST):Ge(r.STENCIL_TEST))},setMask:function(Ke){Ne!==Ke&&!B&&(r.stencilMask(Ke),Ne=Ke)},setFunc:function(Ke,xe,qe){(ve!==Ke||ee!==xe||Z!==qe)&&(r.stencilFunc(Ke,xe,qe),ve=Ke,ee=xe,Z=qe)},setOp:function(Ke,xe,qe){(re!==Ke||we!==xe||He!==qe)&&(r.stencilOp(Ke,xe,qe),re=Ke,we=xe,He=qe)},setLocked:function(Ke){B=Ke},setClear:function(Ke){$e!==Ke&&(r.clearStencil(Ke),$e=Ke)},reset:function(){B=!1,Ne=null,ve=null,ee=null,Z=null,re=null,we=null,He=null,$e=null}}}const l=new n,u=new s,f=new a,p=new WeakMap,m=new WeakMap;let x={},y={},g={},S=new WeakMap,T=[],C=null,_=!1,v=null,b=null,L=null,P=null,z=null,D=null,k=null,w=new Pt(0,0,0),I=0,j=!1,O=null,Y=null,le=null,ge=null,W=null;const ne=r.getParameter(r.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let $=!1,J=0;const fe=r.getParameter(r.VERSION);fe.indexOf("WebGL")!==-1?(J=parseFloat(/^WebGL (\d)/.exec(fe)[1]),$=J>=1):fe.indexOf("OpenGL ES")!==-1&&(J=parseFloat(/^OpenGL ES (\d)/.exec(fe)[1]),$=J>=2);let he=null,F={};const ie=r.getParameter(r.SCISSOR_BOX),We=r.getParameter(r.VIEWPORT),Fe=new fn().fromArray(ie),Xe=new fn().fromArray(We);function ce(B,Ne,ve,ee){const Z=new Uint8Array(4),re=r.createTexture();r.bindTexture(B,re),r.texParameteri(B,r.TEXTURE_MIN_FILTER,r.NEAREST),r.texParameteri(B,r.TEXTURE_MAG_FILTER,r.NEAREST);for(let we=0;we<ve;we++)B===r.TEXTURE_3D||B===r.TEXTURE_2D_ARRAY?r.texImage3D(Ne,0,r.RGBA,1,1,ee,0,r.RGBA,r.UNSIGNED_BYTE,Z):r.texImage2D(Ne+we,0,r.RGBA,1,1,0,r.RGBA,r.UNSIGNED_BYTE,Z);return re}const Ae={};Ae[r.TEXTURE_2D]=ce(r.TEXTURE_2D,r.TEXTURE_2D,1),Ae[r.TEXTURE_CUBE_MAP]=ce(r.TEXTURE_CUBE_MAP,r.TEXTURE_CUBE_MAP_POSITIVE_X,6),Ae[r.TEXTURE_2D_ARRAY]=ce(r.TEXTURE_2D_ARRAY,r.TEXTURE_2D_ARRAY,1,1),Ae[r.TEXTURE_3D]=ce(r.TEXTURE_3D,r.TEXTURE_3D,1,1),l.setClear(0,0,0,1),u.setClear(1),f.setClear(0),ye(r.DEPTH_TEST),u.setFunc(so),Bt(!1),Gt(om),ye(r.CULL_FACE),Ut(mr);function ye(B){x[B]!==!0&&(r.enable(B),x[B]=!0)}function Ge(B){x[B]!==!1&&(r.disable(B),x[B]=!1)}function nt(B,Ne){return g[B]!==Ne?(r.bindFramebuffer(B,Ne),g[B]=Ne,B===r.DRAW_FRAMEBUFFER&&(g[r.FRAMEBUFFER]=Ne),B===r.FRAMEBUFFER&&(g[r.DRAW_FRAMEBUFFER]=Ne),!0):!1}function lt(B,Ne){let ve=T,ee=!1;if(B){ve=S.get(Ne),ve===void 0&&(ve=[],S.set(Ne,ve));const Z=B.textures;if(ve.length!==Z.length||ve[0]!==r.COLOR_ATTACHMENT0){for(let re=0,we=Z.length;re<we;re++)ve[re]=r.COLOR_ATTACHMENT0+re;ve.length=Z.length,ee=!0}}else ve[0]!==r.BACK&&(ve[0]=r.BACK,ee=!0);ee&&r.drawBuffers(ve)}function Nt(B){return C!==B?(r.useProgram(B),C=B,!0):!1}const pt={[ps]:r.FUNC_ADD,[I_]:r.FUNC_SUBTRACT,[N_]:r.FUNC_REVERSE_SUBTRACT};pt[U_]=r.MIN,pt[F_]=r.MAX;const bt={[O_]:r.ZERO,[k_]:r.ONE,[B_]:r.SRC_COLOR,[md]:r.SRC_ALPHA,[X_]:r.SRC_ALPHA_SATURATE,[G_]:r.DST_COLOR,[H_]:r.DST_ALPHA,[z_]:r.ONE_MINUS_SRC_COLOR,[gd]:r.ONE_MINUS_SRC_ALPHA,[W_]:r.ONE_MINUS_DST_COLOR,[V_]:r.ONE_MINUS_DST_ALPHA,[j_]:r.CONSTANT_COLOR,[Y_]:r.ONE_MINUS_CONSTANT_COLOR,[q_]:r.CONSTANT_ALPHA,[$_]:r.ONE_MINUS_CONSTANT_ALPHA};function Ut(B,Ne,ve,ee,Z,re,we,He,$e,Ke){if(B===mr){_===!0&&(Ge(r.BLEND),_=!1);return}if(_===!1&&(ye(r.BLEND),_=!0),B!==D_){if(B!==v||Ke!==j){if((b!==ps||z!==ps)&&(r.blendEquation(r.FUNC_ADD),b=ps,z=ps),Ke)switch(B){case io:r.blendFuncSeparate(r.ONE,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case am:r.blendFunc(r.ONE,r.ONE);break;case lm:r.blendFuncSeparate(r.ZERO,r.ONE_MINUS_SRC_COLOR,r.ZERO,r.ONE);break;case cm:r.blendFuncSeparate(r.DST_COLOR,r.ONE_MINUS_SRC_ALPHA,r.ZERO,r.ONE);break;default:Ht("WebGLState: Invalid blending: ",B);break}else switch(B){case io:r.blendFuncSeparate(r.SRC_ALPHA,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case am:r.blendFuncSeparate(r.SRC_ALPHA,r.ONE,r.ONE,r.ONE);break;case lm:Ht("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case cm:Ht("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:Ht("WebGLState: Invalid blending: ",B);break}L=null,P=null,D=null,k=null,w.set(0,0,0),I=0,v=B,j=Ke}return}Z=Z||Ne,re=re||ve,we=we||ee,(Ne!==b||Z!==z)&&(r.blendEquationSeparate(pt[Ne],pt[Z]),b=Ne,z=Z),(ve!==L||ee!==P||re!==D||we!==k)&&(r.blendFuncSeparate(bt[ve],bt[ee],bt[re],bt[we]),L=ve,P=ee,D=re,k=we),(He.equals(w)===!1||$e!==I)&&(r.blendColor(He.r,He.g,He.b,$e),w.copy(He),I=$e),v=B,j=!1}function _t(B,Ne){B.side===wi?Ge(r.CULL_FACE):ye(r.CULL_FACE);let ve=B.side===si;Ne&&(ve=!ve),Bt(ve),B.blending===io&&B.transparent===!1?Ut(mr):Ut(B.blending,B.blendEquation,B.blendSrc,B.blendDst,B.blendEquationAlpha,B.blendSrcAlpha,B.blendDstAlpha,B.blendColor,B.blendAlpha,B.premultipliedAlpha),u.setFunc(B.depthFunc),u.setTest(B.depthTest),u.setMask(B.depthWrite),l.setMask(B.colorWrite);const ee=B.stencilWrite;f.setTest(ee),ee&&(f.setMask(B.stencilWriteMask),f.setFunc(B.stencilFunc,B.stencilRef,B.stencilFuncMask),f.setOp(B.stencilFail,B.stencilZFail,B.stencilZPass)),G(B.polygonOffset,B.polygonOffsetFactor,B.polygonOffsetUnits),B.alphaToCoverage===!0?ye(r.SAMPLE_ALPHA_TO_COVERAGE):Ge(r.SAMPLE_ALPHA_TO_COVERAGE)}function Bt(B){O!==B&&(B?r.frontFace(r.CW):r.frontFace(r.CCW),O=B)}function Gt(B){B!==R_?(ye(r.CULL_FACE),B!==Y&&(B===om?r.cullFace(r.BACK):B===P_?r.cullFace(r.FRONT):r.cullFace(r.FRONT_AND_BACK))):Ge(r.CULL_FACE),Y=B}function Zt(B){B!==le&&($&&r.lineWidth(B),le=B)}function G(B,Ne,ve){B?(ye(r.POLYGON_OFFSET_FILL),(ge!==Ne||W!==ve)&&(ge=Ne,W=ve,u.getReversed()&&(Ne=-Ne),r.polygonOffset(Ne,ve))):Ge(r.POLYGON_OFFSET_FILL)}function pe(B){B?ye(r.SCISSOR_TEST):Ge(r.SCISSOR_TEST)}function N(B){B===void 0&&(B=r.TEXTURE0+ne-1),he!==B&&(r.activeTexture(B),he=B)}function dt(B,Ne,ve){ve===void 0&&(he===null?ve=r.TEXTURE0+ne-1:ve=he);let ee=F[ve];ee===void 0&&(ee={type:void 0,texture:void 0},F[ve]=ee),(ee.type!==B||ee.texture!==Ne)&&(he!==ve&&(r.activeTexture(ve),he=ve),r.bindTexture(B,Ne||Ae[B]),ee.type=B,ee.texture=Ne)}function Oe(){const B=F[he];B!==void 0&&B.type!==void 0&&(r.bindTexture(B.type,null),B.type=void 0,B.texture=void 0)}function Ct(){try{r.compressedTexImage2D(...arguments)}catch(B){Ht("WebGLState:",B)}}function R(){try{r.compressedTexImage3D(...arguments)}catch(B){Ht("WebGLState:",B)}}function M(){try{r.texSubImage2D(...arguments)}catch(B){Ht("WebGLState:",B)}}function K(){try{r.texSubImage3D(...arguments)}catch(B){Ht("WebGLState:",B)}}function _e(){try{r.compressedTexSubImage2D(...arguments)}catch(B){Ht("WebGLState:",B)}}function Me(){try{r.compressedTexSubImage3D(...arguments)}catch(B){Ht("WebGLState:",B)}}function be(){try{r.texStorage2D(...arguments)}catch(B){Ht("WebGLState:",B)}}function Le(){try{r.texStorage3D(...arguments)}catch(B){Ht("WebGLState:",B)}}function me(){try{r.texImage2D(...arguments)}catch(B){Ht("WebGLState:",B)}}function Se(){try{r.texImage3D(...arguments)}catch(B){Ht("WebGLState:",B)}}function Be(B){return y[B]!==void 0?y[B]:r.getParameter(B)}function je(B,Ne){y[B]!==Ne&&(r.pixelStorei(B,Ne),y[B]=Ne)}function Ue(B){Fe.equals(B)===!1&&(r.scissor(B.x,B.y,B.z,B.w),Fe.copy(B))}function Ie(B){Xe.equals(B)===!1&&(r.viewport(B.x,B.y,B.z,B.w),Xe.copy(B))}function ft(B,Ne){let ve=m.get(Ne);ve===void 0&&(ve=new WeakMap,m.set(Ne,ve));let ee=ve.get(B);ee===void 0&&(ee=r.getUniformBlockIndex(Ne,B.name),ve.set(B,ee))}function ht(B,Ne){const ee=m.get(Ne).get(B);p.get(Ne)!==ee&&(r.uniformBlockBinding(Ne,ee,B.__bindingPointIndex),p.set(Ne,ee))}function vt(){r.disable(r.BLEND),r.disable(r.CULL_FACE),r.disable(r.DEPTH_TEST),r.disable(r.POLYGON_OFFSET_FILL),r.disable(r.SCISSOR_TEST),r.disable(r.STENCIL_TEST),r.disable(r.SAMPLE_ALPHA_TO_COVERAGE),r.blendEquation(r.FUNC_ADD),r.blendFunc(r.ONE,r.ZERO),r.blendFuncSeparate(r.ONE,r.ZERO,r.ONE,r.ZERO),r.blendColor(0,0,0,0),r.colorMask(!0,!0,!0,!0),r.clearColor(0,0,0,0),r.depthMask(!0),r.depthFunc(r.LESS),u.setReversed(!1),r.clearDepth(1),r.stencilMask(4294967295),r.stencilFunc(r.ALWAYS,0,4294967295),r.stencilOp(r.KEEP,r.KEEP,r.KEEP),r.clearStencil(0),r.cullFace(r.BACK),r.frontFace(r.CCW),r.polygonOffset(0,0),r.activeTexture(r.TEXTURE0),r.bindFramebuffer(r.FRAMEBUFFER,null),r.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),r.bindFramebuffer(r.READ_FRAMEBUFFER,null),r.useProgram(null),r.lineWidth(1),r.scissor(0,0,r.canvas.width,r.canvas.height),r.viewport(0,0,r.canvas.width,r.canvas.height),r.pixelStorei(r.PACK_ALIGNMENT,4),r.pixelStorei(r.UNPACK_ALIGNMENT,4),r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,!1),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,r.BROWSER_DEFAULT_WEBGL),r.pixelStorei(r.PACK_ROW_LENGTH,0),r.pixelStorei(r.PACK_SKIP_PIXELS,0),r.pixelStorei(r.PACK_SKIP_ROWS,0),r.pixelStorei(r.UNPACK_ROW_LENGTH,0),r.pixelStorei(r.UNPACK_IMAGE_HEIGHT,0),r.pixelStorei(r.UNPACK_SKIP_PIXELS,0),r.pixelStorei(r.UNPACK_SKIP_ROWS,0),r.pixelStorei(r.UNPACK_SKIP_IMAGES,0),x={},y={},he=null,F={},g={},S=new WeakMap,T=[],C=null,_=!1,v=null,b=null,L=null,P=null,z=null,D=null,k=null,w=new Pt(0,0,0),I=0,j=!1,O=null,Y=null,le=null,ge=null,W=null,Fe.set(0,0,r.canvas.width,r.canvas.height),Xe.set(0,0,r.canvas.width,r.canvas.height),l.reset(),u.reset(),f.reset()}return{buffers:{color:l,depth:u,stencil:f},enable:ye,disable:Ge,bindFramebuffer:nt,drawBuffers:lt,useProgram:Nt,setBlending:Ut,setMaterial:_t,setFlipSided:Bt,setCullFace:Gt,setLineWidth:Zt,setPolygonOffset:G,setScissorTest:pe,activeTexture:N,bindTexture:dt,unbindTexture:Oe,compressedTexImage2D:Ct,compressedTexImage3D:R,texImage2D:me,texImage3D:Se,pixelStorei:je,getParameter:Be,updateUBOMapping:ft,uniformBlockBinding:ht,texStorage2D:be,texStorage3D:Le,texSubImage2D:M,texSubImage3D:K,compressedTexSubImage2D:_e,compressedTexSubImage3D:Me,scissor:Ue,viewport:Ie,reset:vt}}function UM(r,e,n,s,a,l,u){const f=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,p=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),m=new kt,x=new WeakMap,y=new Set;let g;const S=new WeakMap;let T=!1;try{T=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function C(R,M){return T?new OffscreenCanvas(R,M):Wl("canvas")}function _(R,M,K){let _e=1;const Me=Ct(R);if((Me.width>K||Me.height>K)&&(_e=K/Math.max(Me.width,Me.height)),_e<1)if(typeof HTMLImageElement<"u"&&R instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&R instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&R instanceof ImageBitmap||typeof VideoFrame<"u"&&R instanceof VideoFrame){const be=Math.floor(_e*Me.width),Le=Math.floor(_e*Me.height);g===void 0&&(g=C(be,Le));const me=M?C(be,Le):g;return me.width=be,me.height=Le,me.getContext("2d").drawImage(R,0,0,be,Le),Mt("WebGLRenderer: Texture has been resized from ("+Me.width+"x"+Me.height+") to ("+be+"x"+Le+")."),me}else return"data"in R&&Mt("WebGLRenderer: Image in DataTexture is too big ("+Me.width+"x"+Me.height+")."),R;return R}function v(R){return R.generateMipmaps}function b(R){r.generateMipmap(R)}function L(R){return R.isWebGLCubeRenderTarget?r.TEXTURE_CUBE_MAP:R.isWebGL3DRenderTarget?r.TEXTURE_3D:R.isWebGLArrayRenderTarget||R.isCompressedArrayTexture?r.TEXTURE_2D_ARRAY:r.TEXTURE_2D}function P(R,M,K,_e,Me,be=!1){if(R!==null){if(r[R]!==void 0)return r[R];Mt("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+R+"'")}let Le;_e&&(Le=e.get("EXT_texture_norm16"),Le||Mt("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let me=M;if(M===r.RED&&(K===r.FLOAT&&(me=r.R32F),K===r.HALF_FLOAT&&(me=r.R16F),K===r.UNSIGNED_BYTE&&(me=r.R8),K===r.UNSIGNED_SHORT&&Le&&(me=Le.R16_EXT),K===r.SHORT&&Le&&(me=Le.R16_SNORM_EXT)),M===r.RED_INTEGER&&(K===r.UNSIGNED_BYTE&&(me=r.R8UI),K===r.UNSIGNED_SHORT&&(me=r.R16UI),K===r.UNSIGNED_INT&&(me=r.R32UI),K===r.BYTE&&(me=r.R8I),K===r.SHORT&&(me=r.R16I),K===r.INT&&(me=r.R32I)),M===r.RG&&(K===r.FLOAT&&(me=r.RG32F),K===r.HALF_FLOAT&&(me=r.RG16F),K===r.UNSIGNED_BYTE&&(me=r.RG8),K===r.UNSIGNED_SHORT&&Le&&(me=Le.RG16_EXT),K===r.SHORT&&Le&&(me=Le.RG16_SNORM_EXT)),M===r.RG_INTEGER&&(K===r.UNSIGNED_BYTE&&(me=r.RG8UI),K===r.UNSIGNED_SHORT&&(me=r.RG16UI),K===r.UNSIGNED_INT&&(me=r.RG32UI),K===r.BYTE&&(me=r.RG8I),K===r.SHORT&&(me=r.RG16I),K===r.INT&&(me=r.RG32I)),M===r.RGB_INTEGER&&(K===r.UNSIGNED_BYTE&&(me=r.RGB8UI),K===r.UNSIGNED_SHORT&&(me=r.RGB16UI),K===r.UNSIGNED_INT&&(me=r.RGB32UI),K===r.BYTE&&(me=r.RGB8I),K===r.SHORT&&(me=r.RGB16I),K===r.INT&&(me=r.RGB32I)),M===r.RGBA_INTEGER&&(K===r.UNSIGNED_BYTE&&(me=r.RGBA8UI),K===r.UNSIGNED_SHORT&&(me=r.RGBA16UI),K===r.UNSIGNED_INT&&(me=r.RGBA32UI),K===r.BYTE&&(me=r.RGBA8I),K===r.SHORT&&(me=r.RGBA16I),K===r.INT&&(me=r.RGBA32I)),M===r.RGB&&(K===r.UNSIGNED_SHORT&&Le&&(me=Le.RGB16_EXT),K===r.SHORT&&Le&&(me=Le.RGB16_SNORM_EXT),K===r.UNSIGNED_INT_5_9_9_9_REV&&(me=r.RGB9_E5),K===r.UNSIGNED_INT_10F_11F_11F_REV&&(me=r.R11F_G11F_B10F)),M===r.RGBA){const Se=be?Gl:Ot.getTransfer(Me);K===r.FLOAT&&(me=r.RGBA32F),K===r.HALF_FLOAT&&(me=r.RGBA16F),K===r.UNSIGNED_BYTE&&(me=Se===$t?r.SRGB8_ALPHA8:r.RGBA8),K===r.UNSIGNED_SHORT&&Le&&(me=Le.RGBA16_EXT),K===r.SHORT&&Le&&(me=Le.RGBA16_SNORM_EXT),K===r.UNSIGNED_SHORT_4_4_4_4&&(me=r.RGBA4),K===r.UNSIGNED_SHORT_5_5_5_1&&(me=r.RGB5_A1)}return(me===r.R16F||me===r.R32F||me===r.RG16F||me===r.RG32F||me===r.RGBA16F||me===r.RGBA32F)&&e.get("EXT_color_buffer_float"),me}function z(R,M){let K;return R?M===null||M===Ji||M===ra?K=r.DEPTH24_STENCIL8:M===ji?K=r.DEPTH32F_STENCIL8:M===ia&&(K=r.DEPTH24_STENCIL8,Mt("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):M===null||M===Ji||M===ra?K=r.DEPTH_COMPONENT24:M===ji?K=r.DEPTH_COMPONENT32F:M===ia&&(K=r.DEPTH_COMPONENT16),K}function D(R,M){return v(R)===!0||R.isFramebufferTexture&&R.minFilter!==Un&&R.minFilter!==Gn?Math.log2(Math.max(M.width,M.height))+1:R.mipmaps!==void 0&&R.mipmaps.length>0?R.mipmaps.length:R.isCompressedTexture&&Array.isArray(R.image)?M.mipmaps.length:1}function k(R){const M=R.target;M.removeEventListener("dispose",k),I(M),M.isVideoTexture&&x.delete(M),M.isHTMLTexture&&y.delete(M)}function w(R){const M=R.target;M.removeEventListener("dispose",w),O(M)}function I(R){const M=s.get(R);if(M.__webglInit===void 0)return;const K=R.source,_e=S.get(K);if(_e){const Me=_e[M.__cacheKey];Me.usedTimes--,Me.usedTimes===0&&j(R),Object.keys(_e).length===0&&S.delete(K)}s.remove(R)}function j(R){const M=s.get(R);r.deleteTexture(M.__webglTexture);const K=R.source,_e=S.get(K);delete _e[M.__cacheKey],u.memory.textures--}function O(R){const M=s.get(R);if(R.depthTexture&&(R.depthTexture.dispose(),s.remove(R.depthTexture)),R.isWebGLCubeRenderTarget)for(let _e=0;_e<6;_e++){if(Array.isArray(M.__webglFramebuffer[_e]))for(let Me=0;Me<M.__webglFramebuffer[_e].length;Me++)r.deleteFramebuffer(M.__webglFramebuffer[_e][Me]);else r.deleteFramebuffer(M.__webglFramebuffer[_e]);M.__webglDepthbuffer&&r.deleteRenderbuffer(M.__webglDepthbuffer[_e])}else{if(Array.isArray(M.__webglFramebuffer))for(let _e=0;_e<M.__webglFramebuffer.length;_e++)r.deleteFramebuffer(M.__webglFramebuffer[_e]);else r.deleteFramebuffer(M.__webglFramebuffer);if(M.__webglDepthbuffer&&r.deleteRenderbuffer(M.__webglDepthbuffer),M.__webglMultisampledFramebuffer&&r.deleteFramebuffer(M.__webglMultisampledFramebuffer),M.__webglColorRenderbuffer)for(let _e=0;_e<M.__webglColorRenderbuffer.length;_e++)M.__webglColorRenderbuffer[_e]&&r.deleteRenderbuffer(M.__webglColorRenderbuffer[_e]);M.__webglDepthRenderbuffer&&r.deleteRenderbuffer(M.__webglDepthRenderbuffer)}const K=R.textures;for(let _e=0,Me=K.length;_e<Me;_e++){const be=s.get(K[_e]);be.__webglTexture&&(r.deleteTexture(be.__webglTexture),u.memory.textures--),s.remove(K[_e])}s.remove(R)}let Y=0;function le(){Y=0}function ge(){return Y}function W(R){Y=R}function ne(){const R=Y;return R>=a.maxTextures&&Mt("WebGLTextures: Trying to use "+R+" texture units while this GPU supports only "+a.maxTextures),Y+=1,R}function $(R){const M=[];return M.push(R.wrapS),M.push(R.wrapT),M.push(R.wrapR||0),M.push(R.magFilter),M.push(R.minFilter),M.push(R.anisotropy),M.push(R.internalFormat),M.push(R.format),M.push(R.type),M.push(R.generateMipmaps),M.push(R.premultiplyAlpha),M.push(R.flipY),M.push(R.unpackAlignment),M.push(R.colorSpace),M.join()}function J(R,M){const K=s.get(R);if(R.isVideoTexture&&dt(R),R.isRenderTargetTexture===!1&&R.isExternalTexture!==!0&&R.version>0&&K.__version!==R.version){const _e=R.image;if(_e===null)Mt("WebGLRenderer: Texture marked for update but no image data found.");else if(_e.complete===!1)Mt("WebGLRenderer: Texture marked for update but image is incomplete");else{Ge(K,R,M);return}}else R.isExternalTexture&&(K.__webglTexture=R.sourceTexture?R.sourceTexture:null);n.bindTexture(r.TEXTURE_2D,K.__webglTexture,r.TEXTURE0+M)}function fe(R,M){const K=s.get(R);if(R.isRenderTargetTexture===!1&&R.version>0&&K.__version!==R.version){Ge(K,R,M);return}else R.isExternalTexture&&(K.__webglTexture=R.sourceTexture?R.sourceTexture:null);n.bindTexture(r.TEXTURE_2D_ARRAY,K.__webglTexture,r.TEXTURE0+M)}function he(R,M){const K=s.get(R);if(R.isRenderTargetTexture===!1&&R.version>0&&K.__version!==R.version){Ge(K,R,M);return}n.bindTexture(r.TEXTURE_3D,K.__webglTexture,r.TEXTURE0+M)}function F(R,M){const K=s.get(R);if(R.isCubeDepthTexture!==!0&&R.version>0&&K.__version!==R.version){nt(K,R,M);return}n.bindTexture(r.TEXTURE_CUBE_MAP,K.__webglTexture,r.TEXTURE0+M)}const ie={[wd]:r.REPEAT,[pr]:r.CLAMP_TO_EDGE,[Td]:r.MIRRORED_REPEAT},We={[Un]:r.NEAREST,[J_]:r.NEAREST_MIPMAP_NEAREST,[fl]:r.NEAREST_MIPMAP_LINEAR,[Gn]:r.LINEAR,[Fu]:r.LINEAR_MIPMAP_NEAREST,[gs]:r.LINEAR_MIPMAP_LINEAR},Fe={[tv]:r.NEVER,[ov]:r.ALWAYS,[nv]:r.LESS,[vf]:r.LEQUAL,[iv]:r.EQUAL,[xf]:r.GEQUAL,[rv]:r.GREATER,[sv]:r.NOTEQUAL};function Xe(R,M){if(M.type===ji&&e.has("OES_texture_float_linear")===!1&&(M.magFilter===Gn||M.magFilter===Fu||M.magFilter===fl||M.magFilter===gs||M.minFilter===Gn||M.minFilter===Fu||M.minFilter===fl||M.minFilter===gs)&&Mt("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),r.texParameteri(R,r.TEXTURE_WRAP_S,ie[M.wrapS]),r.texParameteri(R,r.TEXTURE_WRAP_T,ie[M.wrapT]),(R===r.TEXTURE_3D||R===r.TEXTURE_2D_ARRAY)&&r.texParameteri(R,r.TEXTURE_WRAP_R,ie[M.wrapR]),r.texParameteri(R,r.TEXTURE_MAG_FILTER,We[M.magFilter]),r.texParameteri(R,r.TEXTURE_MIN_FILTER,We[M.minFilter]),M.compareFunction&&(r.texParameteri(R,r.TEXTURE_COMPARE_MODE,r.COMPARE_REF_TO_TEXTURE),r.texParameteri(R,r.TEXTURE_COMPARE_FUNC,Fe[M.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(M.magFilter===Un||M.minFilter!==fl&&M.minFilter!==gs||M.type===ji&&e.has("OES_texture_float_linear")===!1)return;if(M.anisotropy>1||s.get(M).__currentAnisotropy){const K=e.get("EXT_texture_filter_anisotropic");r.texParameterf(R,K.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(M.anisotropy,a.getMaxAnisotropy())),s.get(M).__currentAnisotropy=M.anisotropy}}}function ce(R,M){let K=!1;R.__webglInit===void 0&&(R.__webglInit=!0,M.addEventListener("dispose",k));const _e=M.source;let Me=S.get(_e);Me===void 0&&(Me={},S.set(_e,Me));const be=$(M);if(be!==R.__cacheKey){Me[be]===void 0&&(Me[be]={texture:r.createTexture(),usedTimes:0},u.memory.textures++,K=!0),Me[be].usedTimes++;const Le=Me[R.__cacheKey];Le!==void 0&&(Me[R.__cacheKey].usedTimes--,Le.usedTimes===0&&j(M)),R.__cacheKey=be,R.__webglTexture=Me[be].texture}return K}function Ae(R,M,K){return Math.floor(Math.floor(R/K)/M)}function ye(R,M,K,_e){const be=R.updateRanges;if(be.length===0)n.texSubImage2D(r.TEXTURE_2D,0,0,0,M.width,M.height,K,_e,M.data);else{be.sort((je,Ue)=>je.start-Ue.start);let Le=0;for(let je=1;je<be.length;je++){const Ue=be[Le],Ie=be[je],ft=Ue.start+Ue.count,ht=Ae(Ie.start,M.width,4),vt=Ae(Ue.start,M.width,4);Ie.start<=ft+1&&ht===vt&&Ae(Ie.start+Ie.count-1,M.width,4)===ht?Ue.count=Math.max(Ue.count,Ie.start+Ie.count-Ue.start):(++Le,be[Le]=Ie)}be.length=Le+1;const me=n.getParameter(r.UNPACK_ROW_LENGTH),Se=n.getParameter(r.UNPACK_SKIP_PIXELS),Be=n.getParameter(r.UNPACK_SKIP_ROWS);n.pixelStorei(r.UNPACK_ROW_LENGTH,M.width);for(let je=0,Ue=be.length;je<Ue;je++){const Ie=be[je],ft=Math.floor(Ie.start/4),ht=Math.ceil(Ie.count/4),vt=ft%M.width,B=Math.floor(ft/M.width),Ne=ht,ve=1;n.pixelStorei(r.UNPACK_SKIP_PIXELS,vt),n.pixelStorei(r.UNPACK_SKIP_ROWS,B),n.texSubImage2D(r.TEXTURE_2D,0,vt,B,Ne,ve,K,_e,M.data)}R.clearUpdateRanges(),n.pixelStorei(r.UNPACK_ROW_LENGTH,me),n.pixelStorei(r.UNPACK_SKIP_PIXELS,Se),n.pixelStorei(r.UNPACK_SKIP_ROWS,Be)}}function Ge(R,M,K){let _e=r.TEXTURE_2D;(M.isDataArrayTexture||M.isCompressedArrayTexture)&&(_e=r.TEXTURE_2D_ARRAY),M.isData3DTexture&&(_e=r.TEXTURE_3D);const Me=ce(R,M),be=M.source;n.bindTexture(_e,R.__webglTexture,r.TEXTURE0+K);const Le=s.get(be);if(be.version!==Le.__version||Me===!0){if(n.activeTexture(r.TEXTURE0+K),(typeof ImageBitmap<"u"&&M.image instanceof ImageBitmap)===!1){const ve=Ot.getPrimaries(Ot.workingColorSpace),ee=M.colorSpace===jr?null:Ot.getPrimaries(M.colorSpace),Z=M.colorSpace===jr||ve===ee?r.NONE:r.BROWSER_DEFAULT_WEBGL;n.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,M.flipY),n.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),n.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,Z)}n.pixelStorei(r.UNPACK_ALIGNMENT,M.unpackAlignment);let Se=_(M.image,!1,a.maxTextureSize);Se=Oe(M,Se);const Be=l.convert(M.format,M.colorSpace),je=l.convert(M.type);let Ue=P(M.internalFormat,Be,je,M.normalized,M.colorSpace,M.isVideoTexture);Xe(_e,M);let Ie;const ft=M.mipmaps,ht=M.isVideoTexture!==!0,vt=Le.__version===void 0||Me===!0,B=be.dataReady,Ne=D(M,Se);if(M.isDepthTexture)Ue=z(M.format===_s,M.type),vt&&(ht?n.texStorage2D(r.TEXTURE_2D,1,Ue,Se.width,Se.height):n.texImage2D(r.TEXTURE_2D,0,Ue,Se.width,Se.height,0,Be,je,null));else if(M.isDataTexture)if(ft.length>0){ht&&vt&&n.texStorage2D(r.TEXTURE_2D,Ne,Ue,ft[0].width,ft[0].height);for(let ve=0,ee=ft.length;ve<ee;ve++)Ie=ft[ve],ht?B&&n.texSubImage2D(r.TEXTURE_2D,ve,0,0,Ie.width,Ie.height,Be,je,Ie.data):n.texImage2D(r.TEXTURE_2D,ve,Ue,Ie.width,Ie.height,0,Be,je,Ie.data);M.generateMipmaps=!1}else ht?(vt&&n.texStorage2D(r.TEXTURE_2D,Ne,Ue,Se.width,Se.height),B&&ye(M,Se,Be,je)):n.texImage2D(r.TEXTURE_2D,0,Ue,Se.width,Se.height,0,Be,je,Se.data);else if(M.isCompressedTexture)if(M.isCompressedArrayTexture){ht&&vt&&n.texStorage3D(r.TEXTURE_2D_ARRAY,Ne,Ue,ft[0].width,ft[0].height,Se.depth);for(let ve=0,ee=ft.length;ve<ee;ve++)if(Ie=ft[ve],M.format!==Oi)if(Be!==null)if(ht){if(B)if(M.layerUpdates.size>0){const Z=km(Ie.width,Ie.height,M.format,M.type);for(const re of M.layerUpdates){const we=Ie.data.subarray(re*Z/Ie.data.BYTES_PER_ELEMENT,(re+1)*Z/Ie.data.BYTES_PER_ELEMENT);n.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,ve,0,0,re,Ie.width,Ie.height,1,Be,we)}M.clearLayerUpdates()}else n.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,ve,0,0,0,Ie.width,Ie.height,Se.depth,Be,Ie.data)}else n.compressedTexImage3D(r.TEXTURE_2D_ARRAY,ve,Ue,Ie.width,Ie.height,Se.depth,0,Ie.data,0,0);else Mt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else ht?B&&n.texSubImage3D(r.TEXTURE_2D_ARRAY,ve,0,0,0,Ie.width,Ie.height,Se.depth,Be,je,Ie.data):n.texImage3D(r.TEXTURE_2D_ARRAY,ve,Ue,Ie.width,Ie.height,Se.depth,0,Be,je,Ie.data)}else{ht&&vt&&n.texStorage2D(r.TEXTURE_2D,Ne,Ue,ft[0].width,ft[0].height);for(let ve=0,ee=ft.length;ve<ee;ve++)Ie=ft[ve],M.format!==Oi?Be!==null?ht?B&&n.compressedTexSubImage2D(r.TEXTURE_2D,ve,0,0,Ie.width,Ie.height,Be,Ie.data):n.compressedTexImage2D(r.TEXTURE_2D,ve,Ue,Ie.width,Ie.height,0,Ie.data):Mt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):ht?B&&n.texSubImage2D(r.TEXTURE_2D,ve,0,0,Ie.width,Ie.height,Be,je,Ie.data):n.texImage2D(r.TEXTURE_2D,ve,Ue,Ie.width,Ie.height,0,Be,je,Ie.data)}else if(M.isDataArrayTexture)if(ht){if(vt&&n.texStorage3D(r.TEXTURE_2D_ARRAY,Ne,Ue,Se.width,Se.height,Se.depth),B)if(M.layerUpdates.size>0){const ve=km(Se.width,Se.height,M.format,M.type);for(const ee of M.layerUpdates){const Z=Se.data.subarray(ee*ve/Se.data.BYTES_PER_ELEMENT,(ee+1)*ve/Se.data.BYTES_PER_ELEMENT);n.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,ee,Se.width,Se.height,1,Be,je,Z)}M.clearLayerUpdates()}else n.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,0,Se.width,Se.height,Se.depth,Be,je,Se.data)}else n.texImage3D(r.TEXTURE_2D_ARRAY,0,Ue,Se.width,Se.height,Se.depth,0,Be,je,Se.data);else if(M.isData3DTexture)ht?(vt&&n.texStorage3D(r.TEXTURE_3D,Ne,Ue,Se.width,Se.height,Se.depth),B&&n.texSubImage3D(r.TEXTURE_3D,0,0,0,0,Se.width,Se.height,Se.depth,Be,je,Se.data)):n.texImage3D(r.TEXTURE_3D,0,Ue,Se.width,Se.height,Se.depth,0,Be,je,Se.data);else if(M.isFramebufferTexture){if(vt)if(ht)n.texStorage2D(r.TEXTURE_2D,Ne,Ue,Se.width,Se.height);else{let ve=Se.width,ee=Se.height;for(let Z=0;Z<Ne;Z++)n.texImage2D(r.TEXTURE_2D,Z,Ue,ve,ee,0,Be,je,null),ve>>=1,ee>>=1}}else if(M.isHTMLTexture){if("texElementImage2D"in r){const ve=r.canvas;if(ve.hasAttribute("layoutsubtree")||ve.setAttribute("layoutsubtree","true"),Se.parentNode!==ve){ve.appendChild(Se),y.add(M),ve.onpaint=He=>{const $e=He.changedElements;for(const Ke of y)$e.includes(Ke.image)&&(Ke.needsUpdate=!0)},ve.requestPaint();return}const ee=0,Z=r.RGBA,re=r.RGBA,we=r.UNSIGNED_BYTE;r.texElementImage2D(r.TEXTURE_2D,ee,Z,re,we,Se),r.texParameteri(r.TEXTURE_2D,r.TEXTURE_MIN_FILTER,r.LINEAR),r.texParameteri(r.TEXTURE_2D,r.TEXTURE_WRAP_S,r.CLAMP_TO_EDGE),r.texParameteri(r.TEXTURE_2D,r.TEXTURE_WRAP_T,r.CLAMP_TO_EDGE)}}else if(ft.length>0){if(ht&&vt){const ve=Ct(ft[0]);n.texStorage2D(r.TEXTURE_2D,Ne,Ue,ve.width,ve.height)}for(let ve=0,ee=ft.length;ve<ee;ve++)Ie=ft[ve],ht?B&&n.texSubImage2D(r.TEXTURE_2D,ve,0,0,Be,je,Ie):n.texImage2D(r.TEXTURE_2D,ve,Ue,Be,je,Ie);M.generateMipmaps=!1}else if(ht){if(vt){const ve=Ct(Se);n.texStorage2D(r.TEXTURE_2D,Ne,Ue,ve.width,ve.height)}B&&n.texSubImage2D(r.TEXTURE_2D,0,0,0,Be,je,Se)}else n.texImage2D(r.TEXTURE_2D,0,Ue,Be,je,Se);v(M)&&b(_e),Le.__version=be.version,M.onUpdate&&M.onUpdate(M)}R.__version=M.version}function nt(R,M,K){if(M.image.length!==6)return;const _e=ce(R,M),Me=M.source;n.bindTexture(r.TEXTURE_CUBE_MAP,R.__webglTexture,r.TEXTURE0+K);const be=s.get(Me);if(Me.version!==be.__version||_e===!0){n.activeTexture(r.TEXTURE0+K);const Le=Ot.getPrimaries(Ot.workingColorSpace),me=M.colorSpace===jr?null:Ot.getPrimaries(M.colorSpace),Se=M.colorSpace===jr||Le===me?r.NONE:r.BROWSER_DEFAULT_WEBGL;n.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,M.flipY),n.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),n.pixelStorei(r.UNPACK_ALIGNMENT,M.unpackAlignment),n.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,Se);const Be=M.isCompressedTexture||M.image[0].isCompressedTexture,je=M.image[0]&&M.image[0].isDataTexture,Ue=[];for(let re=0;re<6;re++)!Be&&!je?Ue[re]=_(M.image[re],!0,a.maxCubemapSize):Ue[re]=je?M.image[re].image:M.image[re],Ue[re]=Oe(M,Ue[re]);const Ie=Ue[0],ft=l.convert(M.format,M.colorSpace),ht=l.convert(M.type),vt=P(M.internalFormat,ft,ht,M.normalized,M.colorSpace),B=M.isVideoTexture!==!0,Ne=be.__version===void 0||_e===!0,ve=Me.dataReady;let ee=D(M,Ie);Xe(r.TEXTURE_CUBE_MAP,M);let Z;if(Be){B&&Ne&&n.texStorage2D(r.TEXTURE_CUBE_MAP,ee,vt,Ie.width,Ie.height);for(let re=0;re<6;re++){Z=Ue[re].mipmaps;for(let we=0;we<Z.length;we++){const He=Z[we];M.format!==Oi?ft!==null?B?ve&&n.compressedTexSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+re,we,0,0,He.width,He.height,ft,He.data):n.compressedTexImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+re,we,vt,He.width,He.height,0,He.data):Mt("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):B?ve&&n.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+re,we,0,0,He.width,He.height,ft,ht,He.data):n.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+re,we,vt,He.width,He.height,0,ft,ht,He.data)}}}else{if(Z=M.mipmaps,B&&Ne){Z.length>0&&ee++;const re=Ct(Ue[0]);n.texStorage2D(r.TEXTURE_CUBE_MAP,ee,vt,re.width,re.height)}for(let re=0;re<6;re++)if(je){B?ve&&n.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+re,0,0,0,Ue[re].width,Ue[re].height,ft,ht,Ue[re].data):n.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+re,0,vt,Ue[re].width,Ue[re].height,0,ft,ht,Ue[re].data);for(let we=0;we<Z.length;we++){const $e=Z[we].image[re].image;B?ve&&n.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+re,we+1,0,0,$e.width,$e.height,ft,ht,$e.data):n.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+re,we+1,vt,$e.width,$e.height,0,ft,ht,$e.data)}}else{B?ve&&n.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+re,0,0,0,ft,ht,Ue[re]):n.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+re,0,vt,ft,ht,Ue[re]);for(let we=0;we<Z.length;we++){const He=Z[we];B?ve&&n.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+re,we+1,0,0,ft,ht,He.image[re]):n.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+re,we+1,vt,ft,ht,He.image[re])}}}v(M)&&b(r.TEXTURE_CUBE_MAP),be.__version=Me.version,M.onUpdate&&M.onUpdate(M)}R.__version=M.version}function lt(R,M,K,_e,Me,be){const Le=l.convert(K.format,K.colorSpace),me=l.convert(K.type),Se=P(K.internalFormat,Le,me,K.normalized,K.colorSpace),Be=s.get(M),je=s.get(K);if(je.__renderTarget=M,!Be.__hasExternalTextures){const Ue=Math.max(1,M.width>>be),Ie=Math.max(1,M.height>>be);Me===r.TEXTURE_3D||Me===r.TEXTURE_2D_ARRAY?n.texImage3D(Me,be,Se,Ue,Ie,M.depth,0,Le,me,null):n.texImage2D(Me,be,Se,Ue,Ie,0,Le,me,null)}n.bindFramebuffer(r.FRAMEBUFFER,R),N(M)?f.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,_e,Me,je.__webglTexture,0,pe(M)):(Me===r.TEXTURE_2D||Me>=r.TEXTURE_CUBE_MAP_POSITIVE_X&&Me<=r.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&r.framebufferTexture2D(r.FRAMEBUFFER,_e,Me,je.__webglTexture,be),n.bindFramebuffer(r.FRAMEBUFFER,null)}function Nt(R,M,K){if(r.bindRenderbuffer(r.RENDERBUFFER,R),M.depthBuffer){const _e=M.depthTexture,Me=_e&&_e.isDepthTexture?_e.type:null,be=z(M.stencilBuffer,Me),Le=M.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT;N(M)?f.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,pe(M),be,M.width,M.height):K?r.renderbufferStorageMultisample(r.RENDERBUFFER,pe(M),be,M.width,M.height):r.renderbufferStorage(r.RENDERBUFFER,be,M.width,M.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,Le,r.RENDERBUFFER,R)}else{const _e=M.textures;for(let Me=0;Me<_e.length;Me++){const be=_e[Me],Le=l.convert(be.format,be.colorSpace),me=l.convert(be.type),Se=P(be.internalFormat,Le,me,be.normalized,be.colorSpace);N(M)?f.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,pe(M),Se,M.width,M.height):K?r.renderbufferStorageMultisample(r.RENDERBUFFER,pe(M),Se,M.width,M.height):r.renderbufferStorage(r.RENDERBUFFER,Se,M.width,M.height)}}r.bindRenderbuffer(r.RENDERBUFFER,null)}function pt(R,M,K){const _e=M.isWebGLCubeRenderTarget===!0;if(n.bindFramebuffer(r.FRAMEBUFFER,R),!(M.depthTexture&&M.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const Me=s.get(M.depthTexture);if(Me.__renderTarget=M,(!Me.__webglTexture||M.depthTexture.image.width!==M.width||M.depthTexture.image.height!==M.height)&&(M.depthTexture.image.width=M.width,M.depthTexture.image.height=M.height,M.depthTexture.needsUpdate=!0),_e){if(Me.__webglInit===void 0&&(Me.__webglInit=!0,M.depthTexture.addEventListener("dispose",k)),Me.__webglTexture===void 0){Me.__webglTexture=r.createTexture(),n.bindTexture(r.TEXTURE_CUBE_MAP,Me.__webglTexture),Xe(r.TEXTURE_CUBE_MAP,M.depthTexture);const Be=l.convert(M.depthTexture.format),je=l.convert(M.depthTexture.type);let Ue;M.depthTexture.format===vr?Ue=r.DEPTH_COMPONENT24:M.depthTexture.format===_s&&(Ue=r.DEPTH24_STENCIL8);for(let Ie=0;Ie<6;Ie++)r.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Ie,0,Ue,M.width,M.height,0,Be,je,null)}}else J(M.depthTexture,0);const be=Me.__webglTexture,Le=pe(M),me=_e?r.TEXTURE_CUBE_MAP_POSITIVE_X+K:r.TEXTURE_2D,Se=M.depthTexture.format===_s?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT;if(M.depthTexture.format===vr)N(M)?f.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,Se,me,be,0,Le):r.framebufferTexture2D(r.FRAMEBUFFER,Se,me,be,0);else if(M.depthTexture.format===_s)N(M)?f.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,Se,me,be,0,Le):r.framebufferTexture2D(r.FRAMEBUFFER,Se,me,be,0);else throw new Error("Unknown depthTexture format")}function bt(R){const M=s.get(R),K=R.isWebGLCubeRenderTarget===!0;if(M.__boundDepthTexture!==R.depthTexture){const _e=R.depthTexture;if(M.__depthDisposeCallback&&M.__depthDisposeCallback(),_e){const Me=()=>{delete M.__boundDepthTexture,delete M.__depthDisposeCallback,_e.removeEventListener("dispose",Me)};_e.addEventListener("dispose",Me),M.__depthDisposeCallback=Me}M.__boundDepthTexture=_e}if(R.depthTexture&&!M.__autoAllocateDepthBuffer)if(K)for(let _e=0;_e<6;_e++)pt(M.__webglFramebuffer[_e],R,_e);else{const _e=R.texture.mipmaps;_e&&_e.length>0?pt(M.__webglFramebuffer[0],R,0):pt(M.__webglFramebuffer,R,0)}else if(K){M.__webglDepthbuffer=[];for(let _e=0;_e<6;_e++)if(n.bindFramebuffer(r.FRAMEBUFFER,M.__webglFramebuffer[_e]),M.__webglDepthbuffer[_e]===void 0)M.__webglDepthbuffer[_e]=r.createRenderbuffer(),Nt(M.__webglDepthbuffer[_e],R,!1);else{const Me=R.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,be=M.__webglDepthbuffer[_e];r.bindRenderbuffer(r.RENDERBUFFER,be),r.framebufferRenderbuffer(r.FRAMEBUFFER,Me,r.RENDERBUFFER,be)}}else{const _e=R.texture.mipmaps;if(_e&&_e.length>0?n.bindFramebuffer(r.FRAMEBUFFER,M.__webglFramebuffer[0]):n.bindFramebuffer(r.FRAMEBUFFER,M.__webglFramebuffer),M.__webglDepthbuffer===void 0)M.__webglDepthbuffer=r.createRenderbuffer(),Nt(M.__webglDepthbuffer,R,!1);else{const Me=R.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,be=M.__webglDepthbuffer;r.bindRenderbuffer(r.RENDERBUFFER,be),r.framebufferRenderbuffer(r.FRAMEBUFFER,Me,r.RENDERBUFFER,be)}}n.bindFramebuffer(r.FRAMEBUFFER,null)}function Ut(R,M,K){const _e=s.get(R);M!==void 0&&lt(_e.__webglFramebuffer,R,R.texture,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,0),K!==void 0&&bt(R)}function _t(R){const M=R.texture,K=s.get(R),_e=s.get(M);R.addEventListener("dispose",w);const Me=R.textures,be=R.isWebGLCubeRenderTarget===!0,Le=Me.length>1;if(Le||(_e.__webglTexture===void 0&&(_e.__webglTexture=r.createTexture()),_e.__version=M.version,u.memory.textures++),be){K.__webglFramebuffer=[];for(let me=0;me<6;me++)if(M.mipmaps&&M.mipmaps.length>0){K.__webglFramebuffer[me]=[];for(let Se=0;Se<M.mipmaps.length;Se++)K.__webglFramebuffer[me][Se]=r.createFramebuffer()}else K.__webglFramebuffer[me]=r.createFramebuffer()}else{if(M.mipmaps&&M.mipmaps.length>0){K.__webglFramebuffer=[];for(let me=0;me<M.mipmaps.length;me++)K.__webglFramebuffer[me]=r.createFramebuffer()}else K.__webglFramebuffer=r.createFramebuffer();if(Le)for(let me=0,Se=Me.length;me<Se;me++){const Be=s.get(Me[me]);Be.__webglTexture===void 0&&(Be.__webglTexture=r.createTexture(),u.memory.textures++)}if(R.samples>0&&N(R)===!1){K.__webglMultisampledFramebuffer=r.createFramebuffer(),K.__webglColorRenderbuffer=[],n.bindFramebuffer(r.FRAMEBUFFER,K.__webglMultisampledFramebuffer);for(let me=0;me<Me.length;me++){const Se=Me[me];K.__webglColorRenderbuffer[me]=r.createRenderbuffer(),r.bindRenderbuffer(r.RENDERBUFFER,K.__webglColorRenderbuffer[me]);const Be=l.convert(Se.format,Se.colorSpace),je=l.convert(Se.type),Ue=P(Se.internalFormat,Be,je,Se.normalized,Se.colorSpace,R.isXRRenderTarget===!0),Ie=pe(R);r.renderbufferStorageMultisample(r.RENDERBUFFER,Ie,Ue,R.width,R.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+me,r.RENDERBUFFER,K.__webglColorRenderbuffer[me])}r.bindRenderbuffer(r.RENDERBUFFER,null),R.depthBuffer&&(K.__webglDepthRenderbuffer=r.createRenderbuffer(),Nt(K.__webglDepthRenderbuffer,R,!0)),n.bindFramebuffer(r.FRAMEBUFFER,null)}}if(be){n.bindTexture(r.TEXTURE_CUBE_MAP,_e.__webglTexture),Xe(r.TEXTURE_CUBE_MAP,M);for(let me=0;me<6;me++)if(M.mipmaps&&M.mipmaps.length>0)for(let Se=0;Se<M.mipmaps.length;Se++)lt(K.__webglFramebuffer[me][Se],R,M,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+me,Se);else lt(K.__webglFramebuffer[me],R,M,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+me,0);v(M)&&b(r.TEXTURE_CUBE_MAP),n.unbindTexture()}else if(Le){for(let me=0,Se=Me.length;me<Se;me++){const Be=Me[me],je=s.get(Be);let Ue=r.TEXTURE_2D;(R.isWebGL3DRenderTarget||R.isWebGLArrayRenderTarget)&&(Ue=R.isWebGL3DRenderTarget?r.TEXTURE_3D:r.TEXTURE_2D_ARRAY),n.bindTexture(Ue,je.__webglTexture),Xe(Ue,Be),lt(K.__webglFramebuffer,R,Be,r.COLOR_ATTACHMENT0+me,Ue,0),v(Be)&&b(Ue)}n.unbindTexture()}else{let me=r.TEXTURE_2D;if((R.isWebGL3DRenderTarget||R.isWebGLArrayRenderTarget)&&(me=R.isWebGL3DRenderTarget?r.TEXTURE_3D:r.TEXTURE_2D_ARRAY),n.bindTexture(me,_e.__webglTexture),Xe(me,M),M.mipmaps&&M.mipmaps.length>0)for(let Se=0;Se<M.mipmaps.length;Se++)lt(K.__webglFramebuffer[Se],R,M,r.COLOR_ATTACHMENT0,me,Se);else lt(K.__webglFramebuffer,R,M,r.COLOR_ATTACHMENT0,me,0);v(M)&&b(me),n.unbindTexture()}R.depthBuffer&&bt(R)}function Bt(R){const M=R.textures;for(let K=0,_e=M.length;K<_e;K++){const Me=M[K];if(v(Me)){const be=L(R),Le=s.get(Me).__webglTexture;n.bindTexture(be,Le),b(be),n.unbindTexture()}}}const Gt=[],Zt=[];function G(R){if(R.samples>0){if(N(R)===!1){const M=R.textures,K=R.width,_e=R.height;let Me=r.COLOR_BUFFER_BIT;const be=R.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,Le=s.get(R),me=M.length>1;if(me)for(let Be=0;Be<M.length;Be++)n.bindFramebuffer(r.FRAMEBUFFER,Le.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+Be,r.RENDERBUFFER,null),n.bindFramebuffer(r.FRAMEBUFFER,Le.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+Be,r.TEXTURE_2D,null,0);n.bindFramebuffer(r.READ_FRAMEBUFFER,Le.__webglMultisampledFramebuffer);const Se=R.texture.mipmaps;Se&&Se.length>0?n.bindFramebuffer(r.DRAW_FRAMEBUFFER,Le.__webglFramebuffer[0]):n.bindFramebuffer(r.DRAW_FRAMEBUFFER,Le.__webglFramebuffer);for(let Be=0;Be<M.length;Be++){if(R.resolveDepthBuffer&&(R.depthBuffer&&(Me|=r.DEPTH_BUFFER_BIT),R.stencilBuffer&&R.resolveStencilBuffer&&(Me|=r.STENCIL_BUFFER_BIT)),me){r.framebufferRenderbuffer(r.READ_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.RENDERBUFFER,Le.__webglColorRenderbuffer[Be]);const je=s.get(M[Be]).__webglTexture;r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,je,0)}r.blitFramebuffer(0,0,K,_e,0,0,K,_e,Me,r.NEAREST),p===!0&&(Gt.length=0,Zt.length=0,Gt.push(r.COLOR_ATTACHMENT0+Be),R.depthBuffer&&R.resolveDepthBuffer===!1&&(Gt.push(be),Zt.push(be),r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,Zt)),r.invalidateFramebuffer(r.READ_FRAMEBUFFER,Gt))}if(n.bindFramebuffer(r.READ_FRAMEBUFFER,null),n.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),me)for(let Be=0;Be<M.length;Be++){n.bindFramebuffer(r.FRAMEBUFFER,Le.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+Be,r.RENDERBUFFER,Le.__webglColorRenderbuffer[Be]);const je=s.get(M[Be]).__webglTexture;n.bindFramebuffer(r.FRAMEBUFFER,Le.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+Be,r.TEXTURE_2D,je,0)}n.bindFramebuffer(r.DRAW_FRAMEBUFFER,Le.__webglMultisampledFramebuffer)}else if(R.depthBuffer&&R.resolveDepthBuffer===!1&&p){const M=R.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT;r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,[M])}}}function pe(R){return Math.min(a.maxSamples,R.samples)}function N(R){const M=s.get(R);return R.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&M.__useRenderToTexture!==!1}function dt(R){const M=u.render.frame;x.get(R)!==M&&(x.set(R,M),R.update())}function Oe(R,M){const K=R.colorSpace,_e=R.format,Me=R.type;return R.isCompressedTexture===!0||R.isVideoTexture===!0||K!==Vl&&K!==jr&&(Ot.getTransfer(K)===$t?(_e!==Oi||Me!==pi)&&Mt("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):Ht("WebGLTextures: Unsupported texture color space:",K)),M}function Ct(R){return typeof HTMLImageElement<"u"&&R instanceof HTMLImageElement?(m.width=R.naturalWidth||R.width,m.height=R.naturalHeight||R.height):typeof VideoFrame<"u"&&R instanceof VideoFrame?(m.width=R.displayWidth,m.height=R.displayHeight):(m.width=R.width,m.height=R.height),m}this.allocateTextureUnit=ne,this.resetTextureUnits=le,this.getTextureUnits=ge,this.setTextureUnits=W,this.setTexture2D=J,this.setTexture2DArray=fe,this.setTexture3D=he,this.setTextureCube=F,this.rebindTextures=Ut,this.setupRenderTarget=_t,this.updateRenderTargetMipmap=Bt,this.updateMultisampleRenderTarget=G,this.setupDepthRenderbuffer=bt,this.setupFrameBufferTexture=lt,this.useMultisampledRTT=N,this.isReversedDepthBuffer=function(){return n.buffers.depth.getReversed()}}function FM(r,e){function n(s,a=jr){let l;const u=Ot.getTransfer(a);if(s===pi)return r.UNSIGNED_BYTE;if(s===hf)return r.UNSIGNED_SHORT_4_4_4_4;if(s===pf)return r.UNSIGNED_SHORT_5_5_5_1;if(s===v0)return r.UNSIGNED_INT_5_9_9_9_REV;if(s===x0)return r.UNSIGNED_INT_10F_11F_11F_REV;if(s===g0)return r.BYTE;if(s===_0)return r.SHORT;if(s===ia)return r.UNSIGNED_SHORT;if(s===ff)return r.INT;if(s===Ji)return r.UNSIGNED_INT;if(s===ji)return r.FLOAT;if(s===_r)return r.HALF_FLOAT;if(s===y0)return r.ALPHA;if(s===S0)return r.RGB;if(s===Oi)return r.RGBA;if(s===vr)return r.DEPTH_COMPONENT;if(s===_s)return r.DEPTH_STENCIL;if(s===M0)return r.RED;if(s===mf)return r.RED_INTEGER;if(s===xs)return r.RG;if(s===gf)return r.RG_INTEGER;if(s===_f)return r.RGBA_INTEGER;if(s===Ul||s===Fl||s===Ol||s===kl)if(u===$t)if(l=e.get("WEBGL_compressed_texture_s3tc_srgb"),l!==null){if(s===Ul)return l.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(s===Fl)return l.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(s===Ol)return l.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(s===kl)return l.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(l=e.get("WEBGL_compressed_texture_s3tc"),l!==null){if(s===Ul)return l.COMPRESSED_RGB_S3TC_DXT1_EXT;if(s===Fl)return l.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(s===Ol)return l.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(s===kl)return l.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(s===Ad||s===bd||s===Cd||s===Rd)if(l=e.get("WEBGL_compressed_texture_pvrtc"),l!==null){if(s===Ad)return l.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(s===bd)return l.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(s===Cd)return l.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(s===Rd)return l.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(s===Pd||s===Ld||s===Dd||s===Id||s===Nd||s===zl||s===Ud)if(l=e.get("WEBGL_compressed_texture_etc"),l!==null){if(s===Pd||s===Ld)return u===$t?l.COMPRESSED_SRGB8_ETC2:l.COMPRESSED_RGB8_ETC2;if(s===Dd)return u===$t?l.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:l.COMPRESSED_RGBA8_ETC2_EAC;if(s===Id)return l.COMPRESSED_R11_EAC;if(s===Nd)return l.COMPRESSED_SIGNED_R11_EAC;if(s===zl)return l.COMPRESSED_RG11_EAC;if(s===Ud)return l.COMPRESSED_SIGNED_RG11_EAC}else return null;if(s===Fd||s===Od||s===kd||s===Bd||s===zd||s===Hd||s===Vd||s===Gd||s===Wd||s===Xd||s===jd||s===Yd||s===qd||s===$d)if(l=e.get("WEBGL_compressed_texture_astc"),l!==null){if(s===Fd)return u===$t?l.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:l.COMPRESSED_RGBA_ASTC_4x4_KHR;if(s===Od)return u===$t?l.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:l.COMPRESSED_RGBA_ASTC_5x4_KHR;if(s===kd)return u===$t?l.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:l.COMPRESSED_RGBA_ASTC_5x5_KHR;if(s===Bd)return u===$t?l.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:l.COMPRESSED_RGBA_ASTC_6x5_KHR;if(s===zd)return u===$t?l.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:l.COMPRESSED_RGBA_ASTC_6x6_KHR;if(s===Hd)return u===$t?l.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:l.COMPRESSED_RGBA_ASTC_8x5_KHR;if(s===Vd)return u===$t?l.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:l.COMPRESSED_RGBA_ASTC_8x6_KHR;if(s===Gd)return u===$t?l.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:l.COMPRESSED_RGBA_ASTC_8x8_KHR;if(s===Wd)return u===$t?l.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:l.COMPRESSED_RGBA_ASTC_10x5_KHR;if(s===Xd)return u===$t?l.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:l.COMPRESSED_RGBA_ASTC_10x6_KHR;if(s===jd)return u===$t?l.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:l.COMPRESSED_RGBA_ASTC_10x8_KHR;if(s===Yd)return u===$t?l.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:l.COMPRESSED_RGBA_ASTC_10x10_KHR;if(s===qd)return u===$t?l.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:l.COMPRESSED_RGBA_ASTC_12x10_KHR;if(s===$d)return u===$t?l.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:l.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(s===Kd||s===Zd||s===Jd)if(l=e.get("EXT_texture_compression_bptc"),l!==null){if(s===Kd)return u===$t?l.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:l.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(s===Zd)return l.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(s===Jd)return l.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(s===Qd||s===ef||s===Hl||s===tf)if(l=e.get("EXT_texture_compression_rgtc"),l!==null){if(s===Qd)return l.COMPRESSED_RED_RGTC1_EXT;if(s===ef)return l.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(s===Hl)return l.COMPRESSED_RED_GREEN_RGTC2_EXT;if(s===tf)return l.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return s===ra?r.UNSIGNED_INT_24_8:r[s]!==void 0?r[s]:null}return{convert:n}}const OM=`
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

}`;class BM{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,n){if(this.texture===null){const s=new P0(e.texture);(e.depthNear!==n.depthNear||e.depthFar!==n.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=s}}getMesh(e){if(this.texture!==null&&this.mesh===null){const n=e.cameras[0].viewport,s=new Qi({vertexShader:OM,fragmentShader:kM,uniforms:{depthColor:{value:this.texture},depthWidth:{value:n.z},depthHeight:{value:n.w}}});this.mesh=new Pe(new xn(20,20),s)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class zM extends ys{constructor(e,n){super();const s=this;let a=null,l=1,u=null,f="local-floor",p=1,m=null,x=null,y=null,g=null,S=null,T=null;const C=typeof XRWebGLBinding<"u",_=new BM,v={},b=n.getContextAttributes();let L=null,P=null;const z=[],D=[],k=new kt;let w=null;const I=new hi;I.viewport=new fn;const j=new hi;j.viewport=new fn;const O=[I,j],Y=new $v;let le=null,ge=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(ce){let Ae=z[ce];return Ae===void 0&&(Ae=new Wu,z[ce]=Ae),Ae.getTargetRaySpace()},this.getControllerGrip=function(ce){let Ae=z[ce];return Ae===void 0&&(Ae=new Wu,z[ce]=Ae),Ae.getGripSpace()},this.getHand=function(ce){let Ae=z[ce];return Ae===void 0&&(Ae=new Wu,z[ce]=Ae),Ae.getHandSpace()};function W(ce){const Ae=D.indexOf(ce.inputSource);if(Ae===-1)return;const ye=z[Ae];ye!==void 0&&(ye.update(ce.inputSource,ce.frame,m||u),ye.dispatchEvent({type:ce.type,data:ce.inputSource}))}function ne(){a.removeEventListener("select",W),a.removeEventListener("selectstart",W),a.removeEventListener("selectend",W),a.removeEventListener("squeeze",W),a.removeEventListener("squeezestart",W),a.removeEventListener("squeezeend",W),a.removeEventListener("end",ne),a.removeEventListener("inputsourceschange",$);for(let ce=0;ce<z.length;ce++){const Ae=D[ce];Ae!==null&&(D[ce]=null,z[ce].disconnect(Ae))}le=null,ge=null,_.reset();for(const ce in v)delete v[ce];e.setRenderTarget(L),S=null,g=null,y=null,a=null,P=null,Xe.stop(),s.isPresenting=!1,e.setPixelRatio(w),e.setSize(k.width,k.height,!1),s.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(ce){l=ce,s.isPresenting===!0&&Mt("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(ce){f=ce,s.isPresenting===!0&&Mt("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return m||u},this.setReferenceSpace=function(ce){m=ce},this.getBaseLayer=function(){return g!==null?g:S},this.getBinding=function(){return y===null&&C&&(y=new XRWebGLBinding(a,n)),y},this.getFrame=function(){return T},this.getSession=function(){return a},this.setSession=async function(ce){if(a=ce,a!==null){if(L=e.getRenderTarget(),a.addEventListener("select",W),a.addEventListener("selectstart",W),a.addEventListener("selectend",W),a.addEventListener("squeeze",W),a.addEventListener("squeezestart",W),a.addEventListener("squeezeend",W),a.addEventListener("end",ne),a.addEventListener("inputsourceschange",$),b.xrCompatible!==!0&&await n.makeXRCompatible(),w=e.getPixelRatio(),e.getSize(k),C&&"createProjectionLayer"in XRWebGLBinding.prototype){let ye=null,Ge=null,nt=null;b.depth&&(nt=b.stencil?n.DEPTH24_STENCIL8:n.DEPTH_COMPONENT24,ye=b.stencil?_s:vr,Ge=b.stencil?ra:Ji);const lt={colorFormat:n.RGBA8,depthFormat:nt,scaleFactor:l};y=this.getBinding(),g=y.createProjectionLayer(lt),a.updateRenderState({layers:[g]}),e.setPixelRatio(1),e.setSize(g.textureWidth,g.textureHeight,!1),P=new Ki(g.textureWidth,g.textureHeight,{format:Oi,type:pi,depthTexture:new ao(g.textureWidth,g.textureHeight,Ge,void 0,void 0,void 0,void 0,void 0,void 0,ye),stencilBuffer:b.stencil,colorSpace:e.outputColorSpace,samples:b.antialias?4:0,resolveDepthBuffer:g.ignoreDepthValues===!1,resolveStencilBuffer:g.ignoreDepthValues===!1})}else{const ye={antialias:b.antialias,alpha:!0,depth:b.depth,stencil:b.stencil,framebufferScaleFactor:l};S=new XRWebGLLayer(a,n,ye),a.updateRenderState({baseLayer:S}),e.setPixelRatio(1),e.setSize(S.framebufferWidth,S.framebufferHeight,!1),P=new Ki(S.framebufferWidth,S.framebufferHeight,{format:Oi,type:pi,colorSpace:e.outputColorSpace,stencilBuffer:b.stencil,resolveDepthBuffer:S.ignoreDepthValues===!1,resolveStencilBuffer:S.ignoreDepthValues===!1})}P.isXRRenderTarget=!0,this.setFoveation(p),m=null,u=await a.requestReferenceSpace(f),Xe.setContext(a),Xe.start(),s.isPresenting=!0,s.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(a!==null)return a.environmentBlendMode},this.getDepthTexture=function(){return _.getDepthTexture()};function $(ce){for(let Ae=0;Ae<ce.removed.length;Ae++){const ye=ce.removed[Ae],Ge=D.indexOf(ye);Ge>=0&&(D[Ge]=null,z[Ge].disconnect(ye))}for(let Ae=0;Ae<ce.added.length;Ae++){const ye=ce.added[Ae];let Ge=D.indexOf(ye);if(Ge===-1){for(let lt=0;lt<z.length;lt++)if(lt>=D.length){D.push(ye),Ge=lt;break}else if(D[lt]===null){D[lt]=ye,Ge=lt;break}if(Ge===-1)break}const nt=z[Ge];nt&&nt.connect(ye)}}const J=new Q,fe=new Q;function he(ce,Ae,ye){J.setFromMatrixPosition(Ae.matrixWorld),fe.setFromMatrixPosition(ye.matrixWorld);const Ge=J.distanceTo(fe),nt=Ae.projectionMatrix.elements,lt=ye.projectionMatrix.elements,Nt=nt[14]/(nt[10]-1),pt=nt[14]/(nt[10]+1),bt=(nt[9]+1)/nt[5],Ut=(nt[9]-1)/nt[5],_t=(nt[8]-1)/nt[0],Bt=(lt[8]+1)/lt[0],Gt=Nt*_t,Zt=Nt*Bt,G=Ge/(-_t+Bt),pe=G*-_t;if(Ae.matrixWorld.decompose(ce.position,ce.quaternion,ce.scale),ce.translateX(pe),ce.translateZ(G),ce.matrixWorld.compose(ce.position,ce.quaternion,ce.scale),ce.matrixWorldInverse.copy(ce.matrixWorld).invert(),nt[10]===-1)ce.projectionMatrix.copy(Ae.projectionMatrix),ce.projectionMatrixInverse.copy(Ae.projectionMatrixInverse);else{const N=Nt+G,dt=pt+G,Oe=Gt-pe,Ct=Zt+(Ge-pe),R=bt*pt/dt*N,M=Ut*pt/dt*N;ce.projectionMatrix.makePerspective(Oe,Ct,R,M,N,dt),ce.projectionMatrixInverse.copy(ce.projectionMatrix).invert()}}function F(ce,Ae){Ae===null?ce.matrixWorld.copy(ce.matrix):ce.matrixWorld.multiplyMatrices(Ae.matrixWorld,ce.matrix),ce.matrixWorldInverse.copy(ce.matrixWorld).invert()}this.updateCamera=function(ce){if(a===null)return;let Ae=ce.near,ye=ce.far;_.texture!==null&&(_.depthNear>0&&(Ae=_.depthNear),_.depthFar>0&&(ye=_.depthFar)),Y.near=j.near=I.near=Ae,Y.far=j.far=I.far=ye,(le!==Y.near||ge!==Y.far)&&(a.updateRenderState({depthNear:Y.near,depthFar:Y.far}),le=Y.near,ge=Y.far),Y.layers.mask=ce.layers.mask|6,I.layers.mask=Y.layers.mask&-5,j.layers.mask=Y.layers.mask&-3;const Ge=ce.parent,nt=Y.cameras;F(Y,Ge);for(let lt=0;lt<nt.length;lt++)F(nt[lt],Ge);nt.length===2?he(Y,I,j):Y.projectionMatrix.copy(I.projectionMatrix),ie(ce,Y,Ge)};function ie(ce,Ae,ye){ye===null?ce.matrix.copy(Ae.matrixWorld):(ce.matrix.copy(ye.matrixWorld),ce.matrix.invert(),ce.matrix.multiply(Ae.matrixWorld)),ce.matrix.decompose(ce.position,ce.quaternion,ce.scale),ce.updateMatrixWorld(!0),ce.projectionMatrix.copy(Ae.projectionMatrix),ce.projectionMatrixInverse.copy(Ae.projectionMatrixInverse),ce.isPerspectiveCamera&&(ce.fov=sf*2*Math.atan(1/ce.projectionMatrix.elements[5]),ce.zoom=1)}this.getCamera=function(){return Y},this.getFoveation=function(){if(!(g===null&&S===null))return p},this.setFoveation=function(ce){p=ce,g!==null&&(g.fixedFoveation=ce),S!==null&&S.fixedFoveation!==void 0&&(S.fixedFoveation=ce)},this.hasDepthSensing=function(){return _.texture!==null},this.getDepthSensingMesh=function(){return _.getMesh(Y)},this.getCameraTexture=function(ce){return v[ce]};let We=null;function Fe(ce,Ae){if(x=Ae.getViewerPose(m||u),T=Ae,x!==null){const ye=x.views;S!==null&&(e.setRenderTargetFramebuffer(P,S.framebuffer),e.setRenderTarget(P));let Ge=!1;ye.length!==Y.cameras.length&&(Y.cameras.length=0,Ge=!0);for(let pt=0;pt<ye.length;pt++){const bt=ye[pt];let Ut=null;if(S!==null)Ut=S.getViewport(bt);else{const Bt=y.getViewSubImage(g,bt);Ut=Bt.viewport,pt===0&&(e.setRenderTargetTextures(P,Bt.colorTexture,Bt.depthStencilTexture),e.setRenderTarget(P))}let _t=O[pt];_t===void 0&&(_t=new hi,_t.layers.enable(pt),_t.viewport=new fn,O[pt]=_t),_t.matrix.fromArray(bt.transform.matrix),_t.matrix.decompose(_t.position,_t.quaternion,_t.scale),_t.projectionMatrix.fromArray(bt.projectionMatrix),_t.projectionMatrixInverse.copy(_t.projectionMatrix).invert(),_t.viewport.set(Ut.x,Ut.y,Ut.width,Ut.height),pt===0&&(Y.matrix.copy(_t.matrix),Y.matrix.decompose(Y.position,Y.quaternion,Y.scale)),Ge===!0&&Y.cameras.push(_t)}const nt=a.enabledFeatures;if(nt&&nt.includes("depth-sensing")&&a.depthUsage=="gpu-optimized"&&C){y=s.getBinding();const pt=y.getDepthInformation(ye[0]);pt&&pt.isValid&&pt.texture&&_.init(pt,a.renderState)}if(nt&&nt.includes("camera-access")&&C){e.state.unbindTexture(),y=s.getBinding();for(let pt=0;pt<ye.length;pt++){const bt=ye[pt].camera;if(bt){let Ut=v[bt];Ut||(Ut=new P0,v[bt]=Ut);const _t=y.getCameraImage(bt);Ut.sourceTexture=_t}}}}for(let ye=0;ye<z.length;ye++){const Ge=D[ye],nt=z[ye];Ge!==null&&nt!==void 0&&nt.update(Ge,Ae,m||u)}We&&We(ce,Ae),Ae.detectedPlanes&&s.dispatchEvent({type:"planesdetected",data:Ae}),T=null}const Xe=new N0;Xe.setAnimationLoop(Fe),this.setAnimationLoop=function(ce){We=ce},this.dispose=function(){}}}const HM=new hn,H0=new At;H0.set(-1,0,0,0,1,0,0,0,1);function VM(r,e){function n(_,v){_.matrixAutoUpdate===!0&&_.updateMatrix(),v.value.copy(_.matrix)}function s(_,v){v.color.getRGB(_.fogColor.value,L0(r)),v.isFog?(_.fogNear.value=v.near,_.fogFar.value=v.far):v.isFogExp2&&(_.fogDensity.value=v.density)}function a(_,v,b,L,P){v.isNodeMaterial?v.uniformsNeedUpdate=!1:v.isMeshBasicMaterial?l(_,v):v.isMeshLambertMaterial?(l(_,v),v.envMap&&(_.envMapIntensity.value=v.envMapIntensity)):v.isMeshToonMaterial?(l(_,v),y(_,v)):v.isMeshPhongMaterial?(l(_,v),x(_,v),v.envMap&&(_.envMapIntensity.value=v.envMapIntensity)):v.isMeshStandardMaterial?(l(_,v),g(_,v),v.isMeshPhysicalMaterial&&S(_,v,P)):v.isMeshMatcapMaterial?(l(_,v),T(_,v)):v.isMeshDepthMaterial?l(_,v):v.isMeshDistanceMaterial?(l(_,v),C(_,v)):v.isMeshNormalMaterial?l(_,v):v.isLineBasicMaterial?(u(_,v),v.isLineDashedMaterial&&f(_,v)):v.isPointsMaterial?p(_,v,b,L):v.isSpriteMaterial?m(_,v):v.isShadowMaterial?(_.color.value.copy(v.color),_.opacity.value=v.opacity):v.isShaderMaterial&&(v.uniformsNeedUpdate=!1)}function l(_,v){_.opacity.value=v.opacity,v.color&&_.diffuse.value.copy(v.color),v.emissive&&_.emissive.value.copy(v.emissive).multiplyScalar(v.emissiveIntensity),v.map&&(_.map.value=v.map,n(v.map,_.mapTransform)),v.alphaMap&&(_.alphaMap.value=v.alphaMap,n(v.alphaMap,_.alphaMapTransform)),v.bumpMap&&(_.bumpMap.value=v.bumpMap,n(v.bumpMap,_.bumpMapTransform),_.bumpScale.value=v.bumpScale,v.side===si&&(_.bumpScale.value*=-1)),v.normalMap&&(_.normalMap.value=v.normalMap,n(v.normalMap,_.normalMapTransform),_.normalScale.value.copy(v.normalScale),v.side===si&&_.normalScale.value.negate()),v.displacementMap&&(_.displacementMap.value=v.displacementMap,n(v.displacementMap,_.displacementMapTransform),_.displacementScale.value=v.displacementScale,_.displacementBias.value=v.displacementBias),v.emissiveMap&&(_.emissiveMap.value=v.emissiveMap,n(v.emissiveMap,_.emissiveMapTransform)),v.specularMap&&(_.specularMap.value=v.specularMap,n(v.specularMap,_.specularMapTransform)),v.alphaTest>0&&(_.alphaTest.value=v.alphaTest);const b=e.get(v),L=b.envMap,P=b.envMapRotation;L&&(_.envMap.value=L,_.envMapRotation.value.setFromMatrix4(HM.makeRotationFromEuler(P)).transpose(),L.isCubeTexture&&L.isRenderTargetTexture===!1&&_.envMapRotation.value.premultiply(H0),_.reflectivity.value=v.reflectivity,_.ior.value=v.ior,_.refractionRatio.value=v.refractionRatio),v.lightMap&&(_.lightMap.value=v.lightMap,_.lightMapIntensity.value=v.lightMapIntensity,n(v.lightMap,_.lightMapTransform)),v.aoMap&&(_.aoMap.value=v.aoMap,_.aoMapIntensity.value=v.aoMapIntensity,n(v.aoMap,_.aoMapTransform))}function u(_,v){_.diffuse.value.copy(v.color),_.opacity.value=v.opacity,v.map&&(_.map.value=v.map,n(v.map,_.mapTransform))}function f(_,v){_.dashSize.value=v.dashSize,_.totalSize.value=v.dashSize+v.gapSize,_.scale.value=v.scale}function p(_,v,b,L){_.diffuse.value.copy(v.color),_.opacity.value=v.opacity,_.size.value=v.size*b,_.scale.value=L*.5,v.map&&(_.map.value=v.map,n(v.map,_.uvTransform)),v.alphaMap&&(_.alphaMap.value=v.alphaMap,n(v.alphaMap,_.alphaMapTransform)),v.alphaTest>0&&(_.alphaTest.value=v.alphaTest)}function m(_,v){_.diffuse.value.copy(v.color),_.opacity.value=v.opacity,_.rotation.value=v.rotation,v.map&&(_.map.value=v.map,n(v.map,_.mapTransform)),v.alphaMap&&(_.alphaMap.value=v.alphaMap,n(v.alphaMap,_.alphaMapTransform)),v.alphaTest>0&&(_.alphaTest.value=v.alphaTest)}function x(_,v){_.specular.value.copy(v.specular),_.shininess.value=Math.max(v.shininess,1e-4)}function y(_,v){v.gradientMap&&(_.gradientMap.value=v.gradientMap)}function g(_,v){_.metalness.value=v.metalness,v.metalnessMap&&(_.metalnessMap.value=v.metalnessMap,n(v.metalnessMap,_.metalnessMapTransform)),_.roughness.value=v.roughness,v.roughnessMap&&(_.roughnessMap.value=v.roughnessMap,n(v.roughnessMap,_.roughnessMapTransform)),v.envMap&&(_.envMapIntensity.value=v.envMapIntensity)}function S(_,v,b){_.ior.value=v.ior,v.sheen>0&&(_.sheenColor.value.copy(v.sheenColor).multiplyScalar(v.sheen),_.sheenRoughness.value=v.sheenRoughness,v.sheenColorMap&&(_.sheenColorMap.value=v.sheenColorMap,n(v.sheenColorMap,_.sheenColorMapTransform)),v.sheenRoughnessMap&&(_.sheenRoughnessMap.value=v.sheenRoughnessMap,n(v.sheenRoughnessMap,_.sheenRoughnessMapTransform))),v.clearcoat>0&&(_.clearcoat.value=v.clearcoat,_.clearcoatRoughness.value=v.clearcoatRoughness,v.clearcoatMap&&(_.clearcoatMap.value=v.clearcoatMap,n(v.clearcoatMap,_.clearcoatMapTransform)),v.clearcoatRoughnessMap&&(_.clearcoatRoughnessMap.value=v.clearcoatRoughnessMap,n(v.clearcoatRoughnessMap,_.clearcoatRoughnessMapTransform)),v.clearcoatNormalMap&&(_.clearcoatNormalMap.value=v.clearcoatNormalMap,n(v.clearcoatNormalMap,_.clearcoatNormalMapTransform),_.clearcoatNormalScale.value.copy(v.clearcoatNormalScale),v.side===si&&_.clearcoatNormalScale.value.negate())),v.dispersion>0&&(_.dispersion.value=v.dispersion),v.iridescence>0&&(_.iridescence.value=v.iridescence,_.iridescenceIOR.value=v.iridescenceIOR,_.iridescenceThicknessMinimum.value=v.iridescenceThicknessRange[0],_.iridescenceThicknessMaximum.value=v.iridescenceThicknessRange[1],v.iridescenceMap&&(_.iridescenceMap.value=v.iridescenceMap,n(v.iridescenceMap,_.iridescenceMapTransform)),v.iridescenceThicknessMap&&(_.iridescenceThicknessMap.value=v.iridescenceThicknessMap,n(v.iridescenceThicknessMap,_.iridescenceThicknessMapTransform))),v.transmission>0&&(_.transmission.value=v.transmission,_.transmissionSamplerMap.value=b.texture,_.transmissionSamplerSize.value.set(b.width,b.height),v.transmissionMap&&(_.transmissionMap.value=v.transmissionMap,n(v.transmissionMap,_.transmissionMapTransform)),_.thickness.value=v.thickness,v.thicknessMap&&(_.thicknessMap.value=v.thicknessMap,n(v.thicknessMap,_.thicknessMapTransform)),_.attenuationDistance.value=v.attenuationDistance,_.attenuationColor.value.copy(v.attenuationColor)),v.anisotropy>0&&(_.anisotropyVector.value.set(v.anisotropy*Math.cos(v.anisotropyRotation),v.anisotropy*Math.sin(v.anisotropyRotation)),v.anisotropyMap&&(_.anisotropyMap.value=v.anisotropyMap,n(v.anisotropyMap,_.anisotropyMapTransform))),_.specularIntensity.value=v.specularIntensity,_.specularColor.value.copy(v.specularColor),v.specularColorMap&&(_.specularColorMap.value=v.specularColorMap,n(v.specularColorMap,_.specularColorMapTransform)),v.specularIntensityMap&&(_.specularIntensityMap.value=v.specularIntensityMap,n(v.specularIntensityMap,_.specularIntensityMapTransform))}function T(_,v){v.matcap&&(_.matcap.value=v.matcap)}function C(_,v){const b=e.get(v).light;_.referencePosition.value.setFromMatrixPosition(b.matrixWorld),_.nearDistance.value=b.shadow.camera.near,_.farDistance.value=b.shadow.camera.far}return{refreshFogUniforms:s,refreshMaterialUniforms:a}}function GM(r,e,n,s){let a={},l={},u=[];const f=r.getParameter(r.MAX_UNIFORM_BUFFER_BINDINGS);function p(b,L){const P=L.program;s.uniformBlockBinding(b,P)}function m(b,L){let P=a[b.id];P===void 0&&(T(b),P=x(b),a[b.id]=P,b.addEventListener("dispose",_));const z=L.program;s.updateUBOMapping(b,z);const D=e.render.frame;l[b.id]!==D&&(g(b),l[b.id]=D)}function x(b){const L=y();b.__bindingPointIndex=L;const P=r.createBuffer(),z=b.__size,D=b.usage;return r.bindBuffer(r.UNIFORM_BUFFER,P),r.bufferData(r.UNIFORM_BUFFER,z,D),r.bindBuffer(r.UNIFORM_BUFFER,null),r.bindBufferBase(r.UNIFORM_BUFFER,L,P),P}function y(){for(let b=0;b<f;b++)if(u.indexOf(b)===-1)return u.push(b),b;return Ht("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function g(b){const L=a[b.id],P=b.uniforms,z=b.__cache;r.bindBuffer(r.UNIFORM_BUFFER,L);for(let D=0,k=P.length;D<k;D++){const w=Array.isArray(P[D])?P[D]:[P[D]];for(let I=0,j=w.length;I<j;I++){const O=w[I];if(S(O,D,I,z)===!0){const Y=O.__offset,le=Array.isArray(O.value)?O.value:[O.value];let ge=0;for(let W=0;W<le.length;W++){const ne=le[W],$=C(ne);typeof ne=="number"||typeof ne=="boolean"?(O.__data[0]=ne,r.bufferSubData(r.UNIFORM_BUFFER,Y+ge,O.__data)):ne.isMatrix3?(O.__data[0]=ne.elements[0],O.__data[1]=ne.elements[1],O.__data[2]=ne.elements[2],O.__data[3]=0,O.__data[4]=ne.elements[3],O.__data[5]=ne.elements[4],O.__data[6]=ne.elements[5],O.__data[7]=0,O.__data[8]=ne.elements[6],O.__data[9]=ne.elements[7],O.__data[10]=ne.elements[8],O.__data[11]=0):ArrayBuffer.isView(ne)?O.__data.set(new ne.constructor(ne.buffer,ne.byteOffset,O.__data.length)):(ne.toArray(O.__data,ge),ge+=$.storage/Float32Array.BYTES_PER_ELEMENT)}r.bufferSubData(r.UNIFORM_BUFFER,Y,O.__data)}}}r.bindBuffer(r.UNIFORM_BUFFER,null)}function S(b,L,P,z){const D=b.value,k=L+"_"+P;if(z[k]===void 0)return typeof D=="number"||typeof D=="boolean"?z[k]=D:ArrayBuffer.isView(D)?z[k]=D.slice():z[k]=D.clone(),!0;{const w=z[k];if(typeof D=="number"||typeof D=="boolean"){if(w!==D)return z[k]=D,!0}else{if(ArrayBuffer.isView(D))return!0;if(w.equals(D)===!1)return w.copy(D),!0}}return!1}function T(b){const L=b.uniforms;let P=0;const z=16;for(let k=0,w=L.length;k<w;k++){const I=Array.isArray(L[k])?L[k]:[L[k]];for(let j=0,O=I.length;j<O;j++){const Y=I[j],le=Array.isArray(Y.value)?Y.value:[Y.value];for(let ge=0,W=le.length;ge<W;ge++){const ne=le[ge],$=C(ne),J=P%z,fe=J%$.boundary,he=J+fe;P+=fe,he!==0&&z-he<$.storage&&(P+=z-he),Y.__data=new Float32Array($.storage/Float32Array.BYTES_PER_ELEMENT),Y.__offset=P,P+=$.storage}}}const D=P%z;return D>0&&(P+=z-D),b.__size=P,b.__cache={},this}function C(b){const L={boundary:0,storage:0};return typeof b=="number"||typeof b=="boolean"?(L.boundary=4,L.storage=4):b.isVector2?(L.boundary=8,L.storage=8):b.isVector3||b.isColor?(L.boundary=16,L.storage=12):b.isVector4?(L.boundary=16,L.storage=16):b.isMatrix3?(L.boundary=48,L.storage=48):b.isMatrix4?(L.boundary=64,L.storage=64):b.isTexture?Mt("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(b)?(L.boundary=16,L.storage=b.byteLength):Mt("WebGLRenderer: Unsupported uniform value type.",b),L}function _(b){const L=b.target;L.removeEventListener("dispose",_);const P=u.indexOf(L.__bindingPointIndex);u.splice(P,1),r.deleteBuffer(a[L.id]),delete a[L.id],delete l[L.id]}function v(){for(const b in a)r.deleteBuffer(a[b]);u=[],a={},l={}}return{bind:p,update:m,dispose:v}}const WM=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let Wi=null;function XM(){return Wi===null&&(Wi=new Lv(WM,16,16,xs,_r),Wi.name="DFG_LUT",Wi.minFilter=Gn,Wi.magFilter=Gn,Wi.wrapS=pr,Wi.wrapT=pr,Wi.generateMipmaps=!1,Wi.needsUpdate=!0),Wi}class jM{constructor(e={}){const{canvas:n=lv(),context:s=null,depth:a=!0,stencil:l=!1,alpha:u=!1,antialias:f=!1,premultipliedAlpha:p=!0,preserveDrawingBuffer:m=!1,powerPreference:x="default",failIfMajorPerformanceCaveat:y=!1,reversedDepthBuffer:g=!1,outputBufferType:S=pi}=e;this.isWebGLRenderer=!0;let T;if(s!==null){if(typeof WebGLRenderingContext<"u"&&s instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");T=s.getContextAttributes().alpha}else T=u;const C=S,_=new Set([_f,gf,mf]),v=new Set([pi,Ji,ia,ra,hf,pf]),b=new Uint32Array(4),L=new Int32Array(4),P=new Q;let z=null,D=null;const k=[],w=[];let I=null;this.domElement=n,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=$i,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const j=this;let O=!1,Y=null;this._outputColorSpace=ri;let le=0,ge=0,W=null,ne=-1,$=null;const J=new fn,fe=new fn;let he=null;const F=new Pt(0);let ie=0,We=n.width,Fe=n.height,Xe=1,ce=null,Ae=null;const ye=new fn(0,0,We,Fe),Ge=new fn(0,0,We,Fe);let nt=!1;const lt=new wf;let Nt=!1,pt=!1;const bt=new hn,Ut=new Q,_t=new fn,Bt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Gt=!1;function Zt(){return W===null?Xe:1}let G=s;function pe(A,q){return n.getContext(A,q)}try{const A={alpha:!0,depth:a,stencil:l,antialias:f,premultipliedAlpha:p,preserveDrawingBuffer:m,powerPreference:x,failIfMajorPerformanceCaveat:y};if("setAttribute"in n&&n.setAttribute("data-engine",`three.js r${uf}`),n.addEventListener("webglcontextlost",re,!1),n.addEventListener("webglcontextrestored",we,!1),n.addEventListener("webglcontextcreationerror",He,!1),G===null){const q="webgl2";if(G=pe(q,A),G===null)throw pe(q)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(A){throw Ht("WebGLRenderer: "+A.message),A}let N,dt,Oe,Ct,R,M,K,_e,Me,be,Le,me,Se,Be,je,Ue,Ie,ft,ht,vt,B,Ne,ve;function ee(){N=new XS(G),N.init(),B=new FM(G,N),dt=new OS(G,N,e,B),Oe=new NM(G,N),dt.reversedDepthBuffer&&g&&Oe.buffers.depth.setReversed(!0),Ct=new qS(G),R=new yM,M=new UM(G,N,Oe,R,dt,B,Ct),K=new WS(j),_e=new Jv(G),Ne=new US(G,_e),Me=new jS(G,_e,Ct,Ne),be=new KS(G,Me,_e,Ne,Ct),ft=new $S(G,dt,M),je=new kS(R),Le=new xM(j,K,N,dt,Ne,je),me=new VM(j,R),Se=new MM,Be=new CM(N),Ie=new NS(j,K,Oe,be,T,p),Ue=new IM(j,be,dt),ve=new GM(G,Ct,dt,Oe),ht=new FS(G,N,Ct),vt=new YS(G,N,Ct),Ct.programs=Le.programs,j.capabilities=dt,j.extensions=N,j.properties=R,j.renderLists=Se,j.shadowMap=Ue,j.state=Oe,j.info=Ct}ee(),C!==pi&&(I=new JS(C,n.width,n.height,a,l));const Z=new zM(j,G);this.xr=Z,this.getContext=function(){return G},this.getContextAttributes=function(){return G.getContextAttributes()},this.forceContextLoss=function(){const A=N.get("WEBGL_lose_context");A&&A.loseContext()},this.forceContextRestore=function(){const A=N.get("WEBGL_lose_context");A&&A.restoreContext()},this.getPixelRatio=function(){return Xe},this.setPixelRatio=function(A){A!==void 0&&(Xe=A,this.setSize(We,Fe,!1))},this.getSize=function(A){return A.set(We,Fe)},this.setSize=function(A,q,ue=!0){if(Z.isPresenting){Mt("WebGLRenderer: Can't change size while VR device is presenting.");return}We=A,Fe=q,n.width=Math.floor(A*Xe),n.height=Math.floor(q*Xe),ue===!0&&(n.style.width=A+"px",n.style.height=q+"px"),I!==null&&I.setSize(n.width,n.height),this.setViewport(0,0,A,q)},this.getDrawingBufferSize=function(A){return A.set(We*Xe,Fe*Xe).floor()},this.setDrawingBufferSize=function(A,q,ue){We=A,Fe=q,Xe=ue,n.width=Math.floor(A*ue),n.height=Math.floor(q*ue),this.setViewport(0,0,A,q)},this.setEffects=function(A){if(C===pi){Ht("THREE.WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(A){for(let q=0;q<A.length;q++)if(A[q].isOutputPass===!0){Mt("THREE.WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}I.setEffects(A||[])},this.getCurrentViewport=function(A){return A.copy(J)},this.getViewport=function(A){return A.copy(ye)},this.setViewport=function(A,q,ue,oe){A.isVector4?ye.set(A.x,A.y,A.z,A.w):ye.set(A,q,ue,oe),Oe.viewport(J.copy(ye).multiplyScalar(Xe).round())},this.getScissor=function(A){return A.copy(Ge)},this.setScissor=function(A,q,ue,oe){A.isVector4?Ge.set(A.x,A.y,A.z,A.w):Ge.set(A,q,ue,oe),Oe.scissor(fe.copy(Ge).multiplyScalar(Xe).round())},this.getScissorTest=function(){return nt},this.setScissorTest=function(A){Oe.setScissorTest(nt=A)},this.setOpaqueSort=function(A){ce=A},this.setTransparentSort=function(A){Ae=A},this.getClearColor=function(A){return A.copy(Ie.getClearColor())},this.setClearColor=function(){Ie.setClearColor(...arguments)},this.getClearAlpha=function(){return Ie.getClearAlpha()},this.setClearAlpha=function(){Ie.setClearAlpha(...arguments)},this.clear=function(A=!0,q=!0,ue=!0){let oe=0;if(A){let se=!1;if(W!==null){const Ve=W.texture.format;se=_.has(Ve)}if(se){const Ve=W.texture.type,Qe=v.has(Ve),ze=Ie.getClearColor(),rt=Ie.getClearAlpha(),ct=ze.r,Et=ze.g,wt=ze.b;Qe?(b[0]=ct,b[1]=Et,b[2]=wt,b[3]=rt,G.clearBufferuiv(G.COLOR,0,b)):(L[0]=ct,L[1]=Et,L[2]=wt,L[3]=rt,G.clearBufferiv(G.COLOR,0,L))}else oe|=G.COLOR_BUFFER_BIT}q&&(oe|=G.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),ue&&(oe|=G.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),oe!==0&&G.clear(oe)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(A){A.setRenderer(this),Y=A},this.dispose=function(){n.removeEventListener("webglcontextlost",re,!1),n.removeEventListener("webglcontextrestored",we,!1),n.removeEventListener("webglcontextcreationerror",He,!1),Ie.dispose(),Se.dispose(),Be.dispose(),R.dispose(),K.dispose(),be.dispose(),Ne.dispose(),ve.dispose(),Le.dispose(),Z.dispose(),Z.removeEventListener("sessionstart",et),Z.removeEventListener("sessionend",xt),Wt.stop()};function re(A){A.preventDefault(),pm("WebGLRenderer: Context Lost."),O=!0}function we(){pm("WebGLRenderer: Context Restored."),O=!1;const A=Ct.autoReset,q=Ue.enabled,ue=Ue.autoUpdate,oe=Ue.needsUpdate,se=Ue.type;ee(),Ct.autoReset=A,Ue.enabled=q,Ue.autoUpdate=ue,Ue.needsUpdate=oe,Ue.type=se}function He(A){Ht("WebGLRenderer: A WebGL context could not be created. Reason: ",A.statusMessage)}function $e(A){const q=A.target;q.removeEventListener("dispose",$e),Ke(q)}function Ke(A){xe(A),R.remove(A)}function xe(A){const q=R.get(A).programs;q!==void 0&&(q.forEach(function(ue){Le.releaseProgram(ue)}),A.isShaderMaterial&&Le.releaseShaderCache(A))}this.renderBufferDirect=function(A,q,ue,oe,se,Ve){q===null&&(q=Bt);const Qe=se.isMesh&&se.matrixWorld.determinant()<0,ze=da(A,q,ue,oe,se);Oe.setMaterial(oe,Qe);let rt=ue.index,ct=1;if(oe.wireframe===!0){if(rt=Me.getWireframeAttribute(ue),rt===void 0)return;ct=2}const Et=ue.drawRange,wt=ue.attributes.position;let ot=Et.start*ct,zt=(Et.start+Et.count)*ct;Ve!==null&&(ot=Math.max(ot,Ve.start*ct),zt=Math.min(zt,(Ve.start+Ve.count)*ct)),rt!==null?(ot=Math.max(ot,0),zt=Math.min(zt,rt.count)):wt!=null&&(ot=Math.max(ot,0),zt=Math.min(zt,wt.count));const Qt=zt-ot;if(Qt<0||Qt===1/0)return;Ne.setup(se,oe,ze,ue,rt);let sn,Yt=ht;if(rt!==null&&(sn=_e.get(rt),Yt=vt,Yt.setIndex(sn)),se.isMesh)oe.wireframe===!0?(Oe.setLineWidth(oe.wireframeLinewidth*Zt()),Yt.setMode(G.LINES)):Yt.setMode(G.TRIANGLES);else if(se.isLine){let gn=oe.linewidth;gn===void 0&&(gn=1),Oe.setLineWidth(gn*Zt()),se.isLineSegments?Yt.setMode(G.LINES):se.isLineLoop?Yt.setMode(G.LINE_LOOP):Yt.setMode(G.LINE_STRIP)}else se.isPoints?Yt.setMode(G.POINTS):se.isSprite&&Yt.setMode(G.TRIANGLES);if(se.isBatchedMesh)if(N.get("WEBGL_multi_draw"))Yt.renderMultiDraw(se._multiDrawStarts,se._multiDrawCounts,se._multiDrawCount);else{const gn=se._multiDrawStarts,Ze=se._multiDrawCounts,Dn=se._multiDrawCount,Lt=rt?_e.get(rt).bytesPerElement:1,$n=R.get(oe).currentProgram.getUniforms();for(let Kn=0;Kn<Dn;Kn++)$n.setValue(G,"_gl_DrawID",Kn),Yt.render(gn[Kn]/Lt,Ze[Kn])}else if(se.isInstancedMesh)Yt.renderInstances(ot,Qt,se.count);else if(ue.isInstancedBufferGeometry){const gn=ue._maxInstanceCount!==void 0?ue._maxInstanceCount:1/0,Ze=Math.min(ue.instanceCount,gn);Yt.renderInstances(ot,Qt,Ze)}else Yt.render(ot,Qt)};function qe(A,q,ue){A.transparent===!0&&A.side===wi&&A.forceSinglePass===!1?(A.side=si,A.needsUpdate=!0,Fn(A,q,ue),A.side=qr,A.needsUpdate=!0,Fn(A,q,ue),A.side=wi):Fn(A,q,ue)}this.compile=function(A,q,ue=null){ue===null&&(ue=A),D=Be.get(ue),D.init(q),w.push(D),ue.traverseVisible(function(se){se.isLight&&se.layers.test(q.layers)&&(D.pushLight(se),se.castShadow&&D.pushShadow(se))}),A!==ue&&A.traverseVisible(function(se){se.isLight&&se.layers.test(q.layers)&&(D.pushLight(se),se.castShadow&&D.pushShadow(se))}),D.setupLights();const oe=new Set;return A.traverse(function(se){if(!(se.isMesh||se.isPoints||se.isLine||se.isSprite))return;const Ve=se.material;if(Ve)if(Array.isArray(Ve))for(let Qe=0;Qe<Ve.length;Qe++){const ze=Ve[Qe];qe(ze,ue,se),oe.add(ze)}else qe(Ve,ue,se),oe.add(Ve)}),D=w.pop(),oe},this.compileAsync=function(A,q,ue=null){const oe=this.compile(A,q,ue);return new Promise(se=>{function Ve(){if(oe.forEach(function(Qe){R.get(Qe).currentProgram.isReady()&&oe.delete(Qe)}),oe.size===0){se(A);return}setTimeout(Ve,10)}N.get("KHR_parallel_shader_compile")!==null?Ve():setTimeout(Ve,10)})};let Te=null;function Ee(A){Te&&Te(A)}function et(){Wt.stop()}function xt(){Wt.start()}const Wt=new N0;Wt.setAnimationLoop(Ee),typeof self<"u"&&Wt.setContext(self),this.setAnimationLoop=function(A){Te=A,Z.setAnimationLoop(A),A===null?Wt.stop():Wt.start()},Z.addEventListener("sessionstart",et),Z.addEventListener("sessionend",xt),this.render=function(A,q){if(q!==void 0&&q.isCamera!==!0){Ht("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(O===!0)return;Y!==null&&Y.renderStart(A,q);const ue=Z.enabled===!0&&Z.isPresenting===!0,oe=I!==null&&(W===null||ue)&&I.begin(j,W);if(A.matrixWorldAutoUpdate===!0&&A.updateMatrixWorld(),q.parent===null&&q.matrixWorldAutoUpdate===!0&&q.updateMatrixWorld(),Z.enabled===!0&&Z.isPresenting===!0&&(I===null||I.isCompositing()===!1)&&(Z.cameraAutoUpdate===!0&&Z.updateCamera(q),q=Z.getCamera()),A.isScene===!0&&A.onBeforeRender(j,A,q,W),D=Be.get(A,w.length),D.init(q),D.state.textureUnits=M.getTextureUnits(),w.push(D),bt.multiplyMatrices(q.projectionMatrix,q.matrixWorldInverse),lt.setFromProjectionMatrix(bt,Yi,q.reversedDepth),pt=this.localClippingEnabled,Nt=je.init(this.clippingPlanes,pt),z=Se.get(A,k.length),z.init(),k.push(z),Z.enabled===!0&&Z.isPresenting===!0){const Qe=j.xr.getDepthSensingMesh();Qe!==null&&Jt(Qe,q,-1/0,j.sortObjects)}Jt(A,q,0,j.sortObjects),z.finish(),j.sortObjects===!0&&z.sort(ce,Ae),Gt=Z.enabled===!1||Z.isPresenting===!1||Z.hasDepthSensing()===!1,Gt&&Ie.addToRenderList(z,A),this.info.render.frame++,Nt===!0&&je.beginShadows();const se=D.state.shadowsArray;if(Ue.render(se,A,q),Nt===!0&&je.endShadows(),this.info.autoReset===!0&&this.info.reset(),(oe&&I.hasRenderPass())===!1){const Qe=z.opaque,ze=z.transmissive;if(D.setupLights(),q.isArrayCamera){const rt=q.cameras;if(ze.length>0)for(let ct=0,Et=rt.length;ct<Et;ct++){const wt=rt[ct];Ln(Qe,ze,A,wt)}Gt&&Ie.render(A);for(let ct=0,Et=rt.length;ct<Et;ct++){const wt=rt[ct];An(z,A,wt,wt.viewport)}}else ze.length>0&&Ln(Qe,ze,A,q),Gt&&Ie.render(A),An(z,A,q)}W!==null&&ge===0&&(M.updateMultisampleRenderTarget(W),M.updateRenderTargetMipmap(W)),oe&&I.end(j),A.isScene===!0&&A.onAfterRender(j,A,q),Ne.resetDefaultState(),ne=-1,$=null,w.pop(),w.length>0?(D=w[w.length-1],M.setTextureUnits(D.state.textureUnits),Nt===!0&&je.setGlobalState(j.clippingPlanes,D.state.camera)):D=null,k.pop(),k.length>0?z=k[k.length-1]:z=null,Y!==null&&Y.renderEnd()};function Jt(A,q,ue,oe){if(A.visible===!1)return;if(A.layers.test(q.layers)){if(A.isGroup)ue=A.renderOrder;else if(A.isLOD)A.autoUpdate===!0&&A.update(q);else if(A.isLightProbeGrid)D.pushLightProbeGrid(A);else if(A.isLight)D.pushLight(A),A.castShadow&&D.pushShadow(A);else if(A.isSprite){if(!A.frustumCulled||lt.intersectsSprite(A)){oe&&_t.setFromMatrixPosition(A.matrixWorld).applyMatrix4(bt);const Qe=be.update(A),ze=A.material;ze.visible&&z.push(A,Qe,ze,ue,_t.z,null)}}else if((A.isMesh||A.isLine||A.isPoints)&&(!A.frustumCulled||lt.intersectsObject(A))){const Qe=be.update(A),ze=A.material;if(oe&&(A.boundingSphere!==void 0?(A.boundingSphere===null&&A.computeBoundingSphere(),_t.copy(A.boundingSphere.center)):(Qe.boundingSphere===null&&Qe.computeBoundingSphere(),_t.copy(Qe.boundingSphere.center)),_t.applyMatrix4(A.matrixWorld).applyMatrix4(bt)),Array.isArray(ze)){const rt=Qe.groups;for(let ct=0,Et=rt.length;ct<Et;ct++){const wt=rt[ct],ot=ze[wt.materialIndex];ot&&ot.visible&&z.push(A,Qe,ot,ue,_t.z,wt)}}else ze.visible&&z.push(A,Qe,ze,ue,_t.z,null)}}const Ve=A.children;for(let Qe=0,ze=Ve.length;Qe<ze;Qe++)Jt(Ve[Qe],q,ue,oe)}function An(A,q,ue,oe){const{opaque:se,transmissive:Ve,transparent:Qe}=A;D.setupLightsView(ue),Nt===!0&&je.setGlobalState(j.clippingPlanes,ue),oe&&Oe.viewport(J.copy(oe)),se.length>0&&oi(se,q,ue),Ve.length>0&&oi(Ve,q,ue),Qe.length>0&&oi(Qe,q,ue),Oe.buffers.depth.setTest(!0),Oe.buffers.depth.setMask(!0),Oe.buffers.color.setMask(!0),Oe.setPolygonOffset(!1)}function Ln(A,q,ue,oe){if((ue.isScene===!0?ue.overrideMaterial:null)!==null)return;if(D.state.transmissionRenderTarget[oe.id]===void 0){const ot=N.has("EXT_color_buffer_half_float")||N.has("EXT_color_buffer_float");D.state.transmissionRenderTarget[oe.id]=new Ki(1,1,{generateMipmaps:!0,type:ot?_r:pi,minFilter:gs,samples:Math.max(4,dt.samples),stencilBuffer:l,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Ot.workingColorSpace})}const Ve=D.state.transmissionRenderTarget[oe.id],Qe=oe.viewport||J;Ve.setSize(Qe.z*j.transmissionResolutionScale,Qe.w*j.transmissionResolutionScale);const ze=j.getRenderTarget(),rt=j.getActiveCubeFace(),ct=j.getActiveMipmapLevel();j.setRenderTarget(Ve),j.getClearColor(F),ie=j.getClearAlpha(),ie<1&&j.setClearColor(16777215,.5),j.clear(),Gt&&Ie.render(ue);const Et=j.toneMapping;j.toneMapping=$i;const wt=oe.viewport;if(oe.viewport!==void 0&&(oe.viewport=void 0),D.setupLightsView(oe),Nt===!0&&je.setGlobalState(j.clippingPlanes,oe),oi(A,ue,oe),M.updateMultisampleRenderTarget(Ve),M.updateRenderTargetMipmap(Ve),N.has("WEBGL_multisampled_render_to_texture")===!1){let ot=!1;for(let zt=0,Qt=q.length;zt<Qt;zt++){const sn=q[zt],{object:Yt,geometry:gn,material:Ze,group:Dn}=sn;if(Ze.side===wi&&Yt.layers.test(oe.layers)){const Lt=Ze.side;Ze.side=si,Ze.needsUpdate=!0,an(Yt,ue,oe,gn,Ze,Dn),Ze.side=Lt,Ze.needsUpdate=!0,ot=!0}}ot===!0&&(M.updateMultisampleRenderTarget(Ve),M.updateRenderTargetMipmap(Ve))}j.setRenderTarget(ze,rt,ct),j.setClearColor(F,ie),wt!==void 0&&(oe.viewport=wt),j.toneMapping=Et}function oi(A,q,ue){const oe=q.isScene===!0?q.overrideMaterial:null;for(let se=0,Ve=A.length;se<Ve;se++){const Qe=A[se],{object:ze,geometry:rt,group:ct}=Qe;let Et=Qe.material;Et.allowOverride===!0&&oe!==null&&(Et=oe),ze.layers.test(ue.layers)&&an(ze,q,ue,rt,Et,ct)}}function an(A,q,ue,oe,se,Ve){A.onBeforeRender(j,q,ue,oe,se,Ve),A.modelViewMatrix.multiplyMatrices(ue.matrixWorldInverse,A.matrixWorld),A.normalMatrix.getNormalMatrix(A.modelViewMatrix),se.onBeforeRender(j,q,ue,oe,A,Ve),se.transparent===!0&&se.side===wi&&se.forceSinglePass===!1?(se.side=si,se.needsUpdate=!0,j.renderBufferDirect(ue,q,oe,se,A,Ve),se.side=qr,se.needsUpdate=!0,j.renderBufferDirect(ue,q,oe,se,A,Ve),se.side=wi):j.renderBufferDirect(ue,q,oe,se,A,Ve),A.onAfterRender(j,q,ue,oe,se,Ve)}function Fn(A,q,ue){q.isScene!==!0&&(q=Bt);const oe=R.get(A),se=D.state.lights,Ve=D.state.shadowsArray,Qe=se.state.version,ze=Le.getParameters(A,se.state,Ve,q,ue,D.state.lightProbeGridArray),rt=Le.getProgramCacheKey(ze);let ct=oe.programs;oe.environment=A.isMeshStandardMaterial||A.isMeshLambertMaterial||A.isMeshPhongMaterial?q.environment:null,oe.fog=q.fog;const Et=A.isMeshStandardMaterial||A.isMeshLambertMaterial&&!A.envMap||A.isMeshPhongMaterial&&!A.envMap;oe.envMap=K.get(A.envMap||oe.environment,Et),oe.envMapRotation=oe.environment!==null&&A.envMap===null?q.environmentRotation:A.envMapRotation,ct===void 0&&(A.addEventListener("dispose",$e),ct=new Map,oe.programs=ct);let wt=ct.get(rt);if(wt!==void 0){if(oe.currentProgram===wt&&oe.lightsStateVersion===Qe)return xr(A,ze),wt}else ze.uniforms=Le.getUniforms(A),Y!==null&&A.isNodeMaterial&&Y.build(A,ue,ze),A.onBeforeCompile(ze,j),wt=Le.acquireProgram(ze,rt),ct.set(rt,wt),oe.uniforms=ze.uniforms;const ot=oe.uniforms;return(!A.isShaderMaterial&&!A.isRawShaderMaterial||A.clipping===!0)&&(ot.clippingPlanes=je.uniform),xr(A,ze),oe.needsLights=Ql(A),oe.lightsStateVersion=Qe,oe.needsLights&&(ot.ambientLightColor.value=se.state.ambient,ot.lightProbe.value=se.state.probe,ot.directionalLights.value=se.state.directional,ot.directionalLightShadows.value=se.state.directionalShadow,ot.spotLights.value=se.state.spot,ot.spotLightShadows.value=se.state.spotShadow,ot.rectAreaLights.value=se.state.rectArea,ot.ltc_1.value=se.state.rectAreaLTC1,ot.ltc_2.value=se.state.rectAreaLTC2,ot.pointLights.value=se.state.point,ot.pointLightShadows.value=se.state.pointShadow,ot.hemisphereLights.value=se.state.hemi,ot.directionalShadowMatrix.value=se.state.directionalShadowMatrix,ot.spotLightMatrix.value=se.state.spotLightMatrix,ot.spotLightMap.value=se.state.spotLightMap,ot.pointShadowMatrix.value=se.state.pointShadowMatrix),oe.lightProbeGrid=D.state.lightProbeGridArray.length>0,oe.currentProgram=wt,oe.uniformsList=null,wt}function gi(A){if(A.uniformsList===null){const q=A.currentProgram.getUniforms();A.uniformsList=Bl.seqWithValue(q.seq,A.uniforms)}return A.uniformsList}function xr(A,q){const ue=R.get(A);ue.outputColorSpace=q.outputColorSpace,ue.batching=q.batching,ue.batchingColor=q.batchingColor,ue.instancing=q.instancing,ue.instancingColor=q.instancingColor,ue.instancingMorph=q.instancingMorph,ue.skinning=q.skinning,ue.morphTargets=q.morphTargets,ue.morphNormals=q.morphNormals,ue.morphColors=q.morphColors,ue.morphTargetsCount=q.morphTargetsCount,ue.numClippingPlanes=q.numClippingPlanes,ue.numIntersection=q.numClipIntersection,ue.vertexAlphas=q.vertexAlphas,ue.vertexTangents=q.vertexTangents,ue.toneMapping=q.toneMapping}function ua(A,q){if(A.length===0)return null;if(A.length===1)return A[0].texture!==null?A[0]:null;P.setFromMatrixPosition(q.matrixWorld);for(let ue=0,oe=A.length;ue<oe;ue++){const se=A[ue];if(se.texture!==null&&se.boundingBox.containsPoint(P))return se}return null}function da(A,q,ue,oe,se){q.isScene!==!0&&(q=Bt),M.resetTextureUnits();const Ve=q.fog,Qe=oe.isMeshStandardMaterial||oe.isMeshLambertMaterial||oe.isMeshPhongMaterial?q.environment:null,ze=W===null?j.outputColorSpace:W.isXRRenderTarget===!0?W.texture.colorSpace:Ot.workingColorSpace,rt=oe.isMeshStandardMaterial||oe.isMeshLambertMaterial&&!oe.envMap||oe.isMeshPhongMaterial&&!oe.envMap,ct=K.get(oe.envMap||Qe,rt),Et=oe.vertexColors===!0&&!!ue.attributes.color&&ue.attributes.color.itemSize===4,wt=!!ue.attributes.tangent&&(!!oe.normalMap||oe.anisotropy>0),ot=!!ue.morphAttributes.position,zt=!!ue.morphAttributes.normal,Qt=!!ue.morphAttributes.color;let sn=$i;oe.toneMapped&&(W===null||W.isXRRenderTarget===!0)&&(sn=j.toneMapping);const Yt=ue.morphAttributes.position||ue.morphAttributes.normal||ue.morphAttributes.color,gn=Yt!==void 0?Yt.length:0,Ze=R.get(oe),Dn=D.state.lights;if(Nt===!0&&(pt===!0||A!==$)){const qt=A===$&&oe.id===ne;je.setState(oe,A,qt)}let Lt=!1;oe.version===Ze.__version?(Ze.needsLights&&Ze.lightsStateVersion!==Dn.state.version||Ze.outputColorSpace!==ze||se.isBatchedMesh&&Ze.batching===!1||!se.isBatchedMesh&&Ze.batching===!0||se.isBatchedMesh&&Ze.batchingColor===!0&&se.colorTexture===null||se.isBatchedMesh&&Ze.batchingColor===!1&&se.colorTexture!==null||se.isInstancedMesh&&Ze.instancing===!1||!se.isInstancedMesh&&Ze.instancing===!0||se.isSkinnedMesh&&Ze.skinning===!1||!se.isSkinnedMesh&&Ze.skinning===!0||se.isInstancedMesh&&Ze.instancingColor===!0&&se.instanceColor===null||se.isInstancedMesh&&Ze.instancingColor===!1&&se.instanceColor!==null||se.isInstancedMesh&&Ze.instancingMorph===!0&&se.morphTexture===null||se.isInstancedMesh&&Ze.instancingMorph===!1&&se.morphTexture!==null||Ze.envMap!==ct||oe.fog===!0&&Ze.fog!==Ve||Ze.numClippingPlanes!==void 0&&(Ze.numClippingPlanes!==je.numPlanes||Ze.numIntersection!==je.numIntersection)||Ze.vertexAlphas!==Et||Ze.vertexTangents!==wt||Ze.morphTargets!==ot||Ze.morphNormals!==zt||Ze.morphColors!==Qt||Ze.toneMapping!==sn||Ze.morphTargetsCount!==gn||!!Ze.lightProbeGrid!=D.state.lightProbeGridArray.length>0)&&(Lt=!0):(Lt=!0,Ze.__version=oe.version);let $n=Ze.currentProgram;Lt===!0&&($n=Fn(oe,q,se),Y&&oe.isNodeMaterial&&Y.onUpdateProgram(oe,$n,Ze));let Kn=!1,Dt=!1,er=!1;const jt=$n.getUniforms(),tn=Ze.uniforms;if(Oe.useProgram($n.program)&&(Kn=!0,Dt=!0,er=!0),oe.id!==ne&&(ne=oe.id,Dt=!0),Ze.needsLights){const qt=ua(D.state.lightProbeGridArray,se);Ze.lightProbeGrid!==qt&&(Ze.lightProbeGrid=qt,Dt=!0)}if(Kn||$!==A){Oe.buffers.depth.getReversed()&&A.reversedDepth!==!0&&(A._reversedDepth=!0,A.updateProjectionMatrix()),jt.setValue(G,"projectionMatrix",A.projectionMatrix),jt.setValue(G,"viewMatrix",A.matrixWorldInverse);const Ai=jt.map.cameraPosition;Ai!==void 0&&Ai.setValue(G,Ut.setFromMatrixPosition(A.matrixWorld)),dt.logarithmicDepthBuffer&&jt.setValue(G,"logDepthBufFC",2/(Math.log(A.far+1)/Math.LN2)),(oe.isMeshPhongMaterial||oe.isMeshToonMaterial||oe.isMeshLambertMaterial||oe.isMeshBasicMaterial||oe.isMeshStandardMaterial||oe.isShaderMaterial)&&jt.setValue(G,"isOrthographic",A.isOrthographicCamera===!0),$!==A&&($=A,Dt=!0,er=!0)}if(Ze.needsLights&&(Dn.state.directionalShadowMap.length>0&&jt.setValue(G,"directionalShadowMap",Dn.state.directionalShadowMap,M),Dn.state.spotShadowMap.length>0&&jt.setValue(G,"spotShadowMap",Dn.state.spotShadowMap,M),Dn.state.pointShadowMap.length>0&&jt.setValue(G,"pointShadowMap",Dn.state.pointShadowMap,M)),se.isSkinnedMesh){jt.setOptional(G,se,"bindMatrix"),jt.setOptional(G,se,"bindMatrixInverse");const qt=se.skeleton;qt&&(qt.boneTexture===null&&qt.computeBoneTexture(),jt.setValue(G,"boneTexture",qt.boneTexture,M))}se.isBatchedMesh&&(jt.setOptional(G,se,"batchingTexture"),jt.setValue(G,"batchingTexture",se._matricesTexture,M),jt.setOptional(G,se,"batchingIdTexture"),jt.setValue(G,"batchingIdTexture",se._indirectTexture,M),jt.setOptional(G,se,"batchingColorTexture"),se._colorsTexture!==null&&jt.setValue(G,"batchingColorTexture",se._colorsTexture,M));const Ti=ue.morphAttributes;if((Ti.position!==void 0||Ti.normal!==void 0||Ti.color!==void 0)&&ft.update(se,ue,$n),(Dt||Ze.receiveShadow!==se.receiveShadow)&&(Ze.receiveShadow=se.receiveShadow,jt.setValue(G,"receiveShadow",se.receiveShadow)),(oe.isMeshStandardMaterial||oe.isMeshLambertMaterial||oe.isMeshPhongMaterial)&&oe.envMap===null&&q.environment!==null&&(tn.envMapIntensity.value=q.environmentIntensity),tn.dfgLUT!==void 0&&(tn.dfgLUT.value=XM()),Dt){if(jt.setValue(G,"toneMappingExposure",j.toneMappingExposure),Ze.needsLights&&Jl(tn,er),Ve&&oe.fog===!0&&me.refreshFogUniforms(tn,Ve),me.refreshMaterialUniforms(tn,oe,Xe,Fe,D.state.transmissionRenderTarget[A.id]),Ze.needsLights&&Ze.lightProbeGrid){const qt=Ze.lightProbeGrid;tn.probesSH.value=qt.texture,tn.probesMin.value.copy(qt.boundingBox.min),tn.probesMax.value.copy(qt.boundingBox.max),tn.probesResolution.value.copy(qt.resolution)}Bl.upload(G,gi(Ze),tn,M)}if(oe.isShaderMaterial&&oe.uniformsNeedUpdate===!0&&(Bl.upload(G,gi(Ze),tn,M),oe.uniformsNeedUpdate=!1),oe.isSpriteMaterial&&jt.setValue(G,"center",se.center),jt.setValue(G,"modelViewMatrix",se.modelViewMatrix),jt.setValue(G,"normalMatrix",se.normalMatrix),jt.setValue(G,"modelMatrix",se.matrixWorld),oe.uniformsGroups!==void 0){const qt=oe.uniformsGroups;for(let Ai=0,ki=qt.length;Ai<ki;Ai++){const Kr=qt[Ai];ve.update(Kr,$n),ve.bind(Kr,$n)}}return $n}function Jl(A,q){A.ambientLightColor.needsUpdate=q,A.lightProbe.needsUpdate=q,A.directionalLights.needsUpdate=q,A.directionalLightShadows.needsUpdate=q,A.pointLights.needsUpdate=q,A.pointLightShadows.needsUpdate=q,A.spotLights.needsUpdate=q,A.spotLightShadows.needsUpdate=q,A.rectAreaLights.needsUpdate=q,A.hemisphereLights.needsUpdate=q}function Ql(A){return A.isMeshLambertMaterial||A.isMeshToonMaterial||A.isMeshPhongMaterial||A.isMeshStandardMaterial||A.isShadowMaterial||A.isShaderMaterial&&A.lights===!0}this.getActiveCubeFace=function(){return le},this.getActiveMipmapLevel=function(){return ge},this.getRenderTarget=function(){return W},this.setRenderTargetTextures=function(A,q,ue){const oe=R.get(A);oe.__autoAllocateDepthBuffer=A.resolveDepthBuffer===!1,oe.__autoAllocateDepthBuffer===!1&&(oe.__useRenderToTexture=!1),R.get(A.texture).__webglTexture=q,R.get(A.depthTexture).__webglTexture=oe.__autoAllocateDepthBuffer?void 0:ue,oe.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(A,q){const ue=R.get(A);ue.__webglFramebuffer=q,ue.__useDefaultFramebuffer=q===void 0};const ln=G.createFramebuffer();this.setRenderTarget=function(A,q=0,ue=0){W=A,le=q,ge=ue;let oe=null,se=!1,Ve=!1;if(A){const ze=R.get(A);if(ze.__useDefaultFramebuffer!==void 0){Oe.bindFramebuffer(G.FRAMEBUFFER,ze.__webglFramebuffer),J.copy(A.viewport),fe.copy(A.scissor),he=A.scissorTest,Oe.viewport(J),Oe.scissor(fe),Oe.setScissorTest(he),ne=-1;return}else if(ze.__webglFramebuffer===void 0)M.setupRenderTarget(A);else if(ze.__hasExternalTextures)M.rebindTextures(A,R.get(A.texture).__webglTexture,R.get(A.depthTexture).__webglTexture);else if(A.depthBuffer){const Et=A.depthTexture;if(ze.__boundDepthTexture!==Et){if(Et!==null&&R.has(Et)&&(A.width!==Et.image.width||A.height!==Et.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");M.setupDepthRenderbuffer(A)}}const rt=A.texture;(rt.isData3DTexture||rt.isDataArrayTexture||rt.isCompressedArrayTexture)&&(Ve=!0);const ct=R.get(A).__webglFramebuffer;A.isWebGLCubeRenderTarget?(Array.isArray(ct[q])?oe=ct[q][ue]:oe=ct[q],se=!0):A.samples>0&&M.useMultisampledRTT(A)===!1?oe=R.get(A).__webglMultisampledFramebuffer:Array.isArray(ct)?oe=ct[ue]:oe=ct,J.copy(A.viewport),fe.copy(A.scissor),he=A.scissorTest}else J.copy(ye).multiplyScalar(Xe).floor(),fe.copy(Ge).multiplyScalar(Xe).floor(),he=nt;if(ue!==0&&(oe=ln),Oe.bindFramebuffer(G.FRAMEBUFFER,oe)&&Oe.drawBuffers(A,oe),Oe.viewport(J),Oe.scissor(fe),Oe.setScissorTest(he),se){const ze=R.get(A.texture);G.framebufferTexture2D(G.FRAMEBUFFER,G.COLOR_ATTACHMENT0,G.TEXTURE_CUBE_MAP_POSITIVE_X+q,ze.__webglTexture,ue)}else if(Ve){const ze=q;for(let rt=0;rt<A.textures.length;rt++){const ct=R.get(A.textures[rt]);G.framebufferTextureLayer(G.FRAMEBUFFER,G.COLOR_ATTACHMENT0+rt,ct.__webglTexture,ue,ze)}}else if(A!==null&&ue!==0){const ze=R.get(A.texture);G.framebufferTexture2D(G.FRAMEBUFFER,G.COLOR_ATTACHMENT0,G.TEXTURE_2D,ze.__webglTexture,ue)}ne=-1},this.readRenderTargetPixels=function(A,q,ue,oe,se,Ve,Qe,ze=0){if(!(A&&A.isWebGLRenderTarget)){Ht("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let rt=R.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&Qe!==void 0&&(rt=rt[Qe]),rt){Oe.bindFramebuffer(G.FRAMEBUFFER,rt);try{const ct=A.textures[ze],Et=ct.format,wt=ct.type;if(A.textures.length>1&&G.readBuffer(G.COLOR_ATTACHMENT0+ze),!dt.textureFormatReadable(Et)){Ht("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!dt.textureTypeReadable(wt)){Ht("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}q>=0&&q<=A.width-oe&&ue>=0&&ue<=A.height-se&&G.readPixels(q,ue,oe,se,B.convert(Et),B.convert(wt),Ve)}finally{const ct=W!==null?R.get(W).__webglFramebuffer:null;Oe.bindFramebuffer(G.FRAMEBUFFER,ct)}}},this.readRenderTargetPixelsAsync=async function(A,q,ue,oe,se,Ve,Qe,ze=0){if(!(A&&A.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let rt=R.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&Qe!==void 0&&(rt=rt[Qe]),rt)if(q>=0&&q<=A.width-oe&&ue>=0&&ue<=A.height-se){Oe.bindFramebuffer(G.FRAMEBUFFER,rt);const ct=A.textures[ze],Et=ct.format,wt=ct.type;if(A.textures.length>1&&G.readBuffer(G.COLOR_ATTACHMENT0+ze),!dt.textureFormatReadable(Et))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!dt.textureTypeReadable(wt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const ot=G.createBuffer();G.bindBuffer(G.PIXEL_PACK_BUFFER,ot),G.bufferData(G.PIXEL_PACK_BUFFER,Ve.byteLength,G.STREAM_READ),G.readPixels(q,ue,oe,se,B.convert(Et),B.convert(wt),0);const zt=W!==null?R.get(W).__webglFramebuffer:null;Oe.bindFramebuffer(G.FRAMEBUFFER,zt);const Qt=G.fenceSync(G.SYNC_GPU_COMMANDS_COMPLETE,0);return G.flush(),await cv(G,Qt,4),G.bindBuffer(G.PIXEL_PACK_BUFFER,ot),G.getBufferSubData(G.PIXEL_PACK_BUFFER,0,Ve),G.deleteBuffer(ot),G.deleteSync(Qt),Ve}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(A,q=null,ue=0){const oe=Math.pow(2,-ue),se=Math.floor(A.image.width*oe),Ve=Math.floor(A.image.height*oe),Qe=q!==null?q.x:0,ze=q!==null?q.y:0;M.setTexture2D(A,0),G.copyTexSubImage2D(G.TEXTURE_2D,ue,0,0,Qe,ze,se,Ve),Oe.unbindTexture()};const ec=G.createFramebuffer(),ho=G.createFramebuffer();this.copyTextureToTexture=function(A,q,ue=null,oe=null,se=0,Ve=0){let Qe,ze,rt,ct,Et,wt,ot,zt,Qt;const sn=A.isCompressedTexture?A.mipmaps[Ve]:A.image;if(ue!==null)Qe=ue.max.x-ue.min.x,ze=ue.max.y-ue.min.y,rt=ue.isBox3?ue.max.z-ue.min.z:1,ct=ue.min.x,Et=ue.min.y,wt=ue.isBox3?ue.min.z:0;else{const tn=Math.pow(2,-se);Qe=Math.floor(sn.width*tn),ze=Math.floor(sn.height*tn),A.isDataArrayTexture?rt=sn.depth:A.isData3DTexture?rt=Math.floor(sn.depth*tn):rt=1,ct=0,Et=0,wt=0}oe!==null?(ot=oe.x,zt=oe.y,Qt=oe.z):(ot=0,zt=0,Qt=0);const Yt=B.convert(q.format),gn=B.convert(q.type);let Ze;q.isData3DTexture?(M.setTexture3D(q,0),Ze=G.TEXTURE_3D):q.isDataArrayTexture||q.isCompressedArrayTexture?(M.setTexture2DArray(q,0),Ze=G.TEXTURE_2D_ARRAY):(M.setTexture2D(q,0),Ze=G.TEXTURE_2D),Oe.activeTexture(G.TEXTURE0),Oe.pixelStorei(G.UNPACK_FLIP_Y_WEBGL,q.flipY),Oe.pixelStorei(G.UNPACK_PREMULTIPLY_ALPHA_WEBGL,q.premultiplyAlpha),Oe.pixelStorei(G.UNPACK_ALIGNMENT,q.unpackAlignment);const Dn=Oe.getParameter(G.UNPACK_ROW_LENGTH),Lt=Oe.getParameter(G.UNPACK_IMAGE_HEIGHT),$n=Oe.getParameter(G.UNPACK_SKIP_PIXELS),Kn=Oe.getParameter(G.UNPACK_SKIP_ROWS),Dt=Oe.getParameter(G.UNPACK_SKIP_IMAGES);Oe.pixelStorei(G.UNPACK_ROW_LENGTH,sn.width),Oe.pixelStorei(G.UNPACK_IMAGE_HEIGHT,sn.height),Oe.pixelStorei(G.UNPACK_SKIP_PIXELS,ct),Oe.pixelStorei(G.UNPACK_SKIP_ROWS,Et),Oe.pixelStorei(G.UNPACK_SKIP_IMAGES,wt);const er=A.isDataArrayTexture||A.isData3DTexture,jt=q.isDataArrayTexture||q.isData3DTexture;if(A.isDepthTexture){const tn=R.get(A),Ti=R.get(q),qt=R.get(tn.__renderTarget),Ai=R.get(Ti.__renderTarget);Oe.bindFramebuffer(G.READ_FRAMEBUFFER,qt.__webglFramebuffer),Oe.bindFramebuffer(G.DRAW_FRAMEBUFFER,Ai.__webglFramebuffer);for(let ki=0;ki<rt;ki++)er&&(G.framebufferTextureLayer(G.READ_FRAMEBUFFER,G.COLOR_ATTACHMENT0,R.get(A).__webglTexture,se,wt+ki),G.framebufferTextureLayer(G.DRAW_FRAMEBUFFER,G.COLOR_ATTACHMENT0,R.get(q).__webglTexture,Ve,Qt+ki)),G.blitFramebuffer(ct,Et,Qe,ze,ot,zt,Qe,ze,G.DEPTH_BUFFER_BIT,G.NEAREST);Oe.bindFramebuffer(G.READ_FRAMEBUFFER,null),Oe.bindFramebuffer(G.DRAW_FRAMEBUFFER,null)}else if(se!==0||A.isRenderTargetTexture||R.has(A)){const tn=R.get(A),Ti=R.get(q);Oe.bindFramebuffer(G.READ_FRAMEBUFFER,ec),Oe.bindFramebuffer(G.DRAW_FRAMEBUFFER,ho);for(let qt=0;qt<rt;qt++)er?G.framebufferTextureLayer(G.READ_FRAMEBUFFER,G.COLOR_ATTACHMENT0,tn.__webglTexture,se,wt+qt):G.framebufferTexture2D(G.READ_FRAMEBUFFER,G.COLOR_ATTACHMENT0,G.TEXTURE_2D,tn.__webglTexture,se),jt?G.framebufferTextureLayer(G.DRAW_FRAMEBUFFER,G.COLOR_ATTACHMENT0,Ti.__webglTexture,Ve,Qt+qt):G.framebufferTexture2D(G.DRAW_FRAMEBUFFER,G.COLOR_ATTACHMENT0,G.TEXTURE_2D,Ti.__webglTexture,Ve),se!==0?G.blitFramebuffer(ct,Et,Qe,ze,ot,zt,Qe,ze,G.COLOR_BUFFER_BIT,G.NEAREST):jt?G.copyTexSubImage3D(Ze,Ve,ot,zt,Qt+qt,ct,Et,Qe,ze):G.copyTexSubImage2D(Ze,Ve,ot,zt,ct,Et,Qe,ze);Oe.bindFramebuffer(G.READ_FRAMEBUFFER,null),Oe.bindFramebuffer(G.DRAW_FRAMEBUFFER,null)}else jt?A.isDataTexture||A.isData3DTexture?G.texSubImage3D(Ze,Ve,ot,zt,Qt,Qe,ze,rt,Yt,gn,sn.data):q.isCompressedArrayTexture?G.compressedTexSubImage3D(Ze,Ve,ot,zt,Qt,Qe,ze,rt,Yt,sn.data):G.texSubImage3D(Ze,Ve,ot,zt,Qt,Qe,ze,rt,Yt,gn,sn):A.isDataTexture?G.texSubImage2D(G.TEXTURE_2D,Ve,ot,zt,Qe,ze,Yt,gn,sn.data):A.isCompressedTexture?G.compressedTexSubImage2D(G.TEXTURE_2D,Ve,ot,zt,sn.width,sn.height,Yt,sn.data):G.texSubImage2D(G.TEXTURE_2D,Ve,ot,zt,Qe,ze,Yt,gn,sn);Oe.pixelStorei(G.UNPACK_ROW_LENGTH,Dn),Oe.pixelStorei(G.UNPACK_IMAGE_HEIGHT,Lt),Oe.pixelStorei(G.UNPACK_SKIP_PIXELS,$n),Oe.pixelStorei(G.UNPACK_SKIP_ROWS,Kn),Oe.pixelStorei(G.UNPACK_SKIP_IMAGES,Dt),Ve===0&&q.generateMipmaps&&G.generateMipmap(Ze),Oe.unbindTexture()},this.initRenderTarget=function(A){R.get(A).__webglFramebuffer===void 0&&M.setupRenderTarget(A)},this.initTexture=function(A){A.isCubeTexture?M.setTextureCube(A,0):A.isData3DTexture?M.setTexture3D(A,0):A.isDataArrayTexture||A.isCompressedArrayTexture?M.setTexture2DArray(A,0):M.setTexture2D(A,0),Oe.unbindTexture()},this.resetState=function(){le=0,ge=0,W=null,Oe.reset(),Ne.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Yi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const n=this.getContext();n.drawingBufferColorSpace=Ot._getDrawingBufferColorSpace(e),n.unpackColorSpace=Ot._getUnpackColorSpace()}}const Kt=[{id:"seating",label:"Adaptive Seating Clusters",icon:"⬡",accent:"#C4905A",hex:12882010,pos:[-3.8,0,2.8],camPos:[-1.2,2.4,7.2],lookAt:[-3.8,1.1,2.8],desc:"Reconfigurable modular seating in semi-private pods. Ergonomic lounge chairs with movable acoustic partitions let patients choose between solitude and social warmth.",features:["Modular sofa + ottoman clusters","Acoustic privacy wing panels","Wireless charging tabletops","Wheelchair-accessible clearances"],metric:"↓ 35% reported isolation"},{id:"biophilic",label:"Biophilic Micro-Garden",icon:"❧",accent:"#4A8A58",hex:4885080,pos:[3.8,0,2.8],camPos:[1.2,2.4,7.2],lookAt:[3.8,1.4,2.8],desc:"A curated living moss wall, specimen trees, and a recirculating water basin bring measurable stress relief. Natural-spectrum light from clerestory windows completes the biophilic immersion.",features:["4 m × 2.8 m living moss wall","Recirculating water basin","Natural-spectrum clerestory","Terracotta planter clusters"],metric:"↓ 28% cortisol stress markers"},{id:"digital",label:"Digital Wellness Hub",icon:"◈",accent:"#5572C4",hex:5599940,pos:[3.8,0,-2.8],camPos:[1.2,2.4,-6.2],lookAt:[3.8,1.4,-2.8],desc:"Touchless kiosks in organic alcoves deliver real-time queue updates, guided breathing, and ambient nature loops — designed to inform without overwhelming.",features:["Real-time queue status","Guided breathing animations","Nature ambient visuals","Motion-sensing interaction"],metric:"↓ 20% perceived wait time"},{id:"calm",label:"Calm Engagement Zone",icon:"◎",accent:"#8A5898",hex:9066648,pos:[-3.8,0,-2.8],camPos:[-1.2,2.4,-6.2],lookAt:[-3.8,1.1,-2.8],desc:"A low-stimulation alcove for reading, art, and guided audio meditation. Full acoustic dampening and warm amber light create a personal refuge within the waiting space.",features:["Curated book corner","Art & craft station","Guided meditation audio","Full acoustic wall panels"],metric:"↓ 32% anxiety self-reports"}],YM=[{pos:[0,1.7,5.8],lookAt:[0,1.2,0],dur:2.5,zoneIdx:-1},{pos:[-1.2,2,5.5],lookAt:[-3.8,1.1,2.8],dur:2.5,zoneIdx:0},{pos:[-1.8,1.7,3.8],lookAt:[-3.8,1,2.8],dur:4,zoneIdx:0},{pos:[1,1.8,4.2],lookAt:[3.8,1.4,2.8],dur:2.5,zoneIdx:1},{pos:[2,1.7,3.4],lookAt:[4.5,1.2,3],dur:4,zoneIdx:1},{pos:[1,1.8,-.5],lookAt:[3.8,1.4,-2.8],dur:2.5,zoneIdx:2},{pos:[2,1.7,-2.2],lookAt:[3.8,1.5,-3.2],dur:4,zoneIdx:2},{pos:[-1,1.8,-1],lookAt:[-3.8,1.1,-2.8],dur:2.5,zoneIdx:3},{pos:[-2,1.7,-2.5],lookAt:[-3.8,1,-2.8],dur:4,zoneIdx:3},{pos:[0,4.5,8],lookAt:[0,1,0],dur:3,zoneIdx:-1}],yn=[{title:"The Problem",text:"Hospital waiting rooms cause stress, anxiety, and discomfort. Patients often spend hours in sterile, noisy spaces with harsh fluorescent lighting — worsening their health outcomes before treatment even begins.",sub:"This prototype reimagines the waiting experience using evidence-based design.",cam:null,highlight:null},{title:"Navigate the Space",text:"Drag your mouse (or swipe on mobile / touchpad) to orbit the 3D model around. Try it now!",sub:"You can rotate the view in any direction to explore the architecture.",cam:null,highlight:"viewport",requiredAction:"orbit"},{title:"Zoom In & Out",text:"Scroll your mouse wheel (or pinch on mobile / two-finger swipe on touchpad) to zoom closer or further away from the model. Try it now!",sub:"Try scrolling now to see the space up close.",cam:null,highlight:"viewport",requiredAction:"zoom"},{title:"Zone Navigation",text:"Click any of these zone buttons at the top to fly the camera into that area and read about its design interventions.",sub:"Each zone addresses a specific aspect of patient wellbeing.",cam:null,highlight:"zones",requiredAction:"click_zone"},{title:"⬡ Adaptive Seating Clusters",text:"Reconfigurable modular seating in semi-private pods. Ergonomic lounge chairs with acoustic partitions let patients choose between solitude and social warmth.",sub:"↓ 35% reported isolation",cam:{pos:[-1.2,2.4,7.2],lookAt:[-3.8,1.1,2.8]},highlight:null},{title:"❧ Biophilic Micro-Garden",text:"A living moss wall, specimen trees, and a recirculating water basin bring measurable stress relief. Natural-spectrum light completes the biophilic immersion.",sub:"↓ 28% cortisol stress markers",cam:{pos:[1.2,2.4,7.2],lookAt:[3.8,1.4,2.8]},highlight:null},{title:"◈ Digital Wellness Hub",text:"Touchless kiosks deliver real-time queue updates, guided breathing exercises, and ambient nature loops — designed to inform without overwhelming.",sub:"↓ 20% perceived wait time",cam:{pos:[1.2,2.4,-6.2],lookAt:[3.8,1.4,-2.8]},highlight:null},{title:"◎ Calm Engagement Zone",text:"A low-stimulation alcove with a curated book corner, art & craft station, and guided meditation audio. Full acoustic dampening creates a personal refuge.",sub:"↓ 32% anxiety self-reports",cam:{pos:[-1.2,2.4,-6.2],lookAt:[-3.8,1.1,-2.8]},highlight:null},{title:"Compare: Standard vs Healing",text:"This toggle switches between a typical sterile hospital lighting and the proposed healing environment, so you can visually compare the difference.",sub:"Click it anytime to see what conventional waiting rooms look like.",cam:null,highlight:"comparison",requiredAction:"toggle_comparison"},{title:"Advanced Tools",text:"Open the Tools panel to access: Heatmap overlay, Patient Flow simulation, Guided Tour, Split View comparison, and Material Inspector.",sub:"Each tool reveals a different layer of the design's evidence base.",cam:null,highlight:"tools",requiredAction:"open_tools"},{title:"You're Ready! 🎉",text:"You now know everything you need to explore the Integrated Modular Healing Space. Click around, zoom in, try the tools — make it your own.",sub:"Press H anytime for keyboard shortcuts.",cam:null,highlight:null}];function pd(r,e){var n,s;!r||!r.ambient||(e?(r.ambient.color.setHex(15398143),r.ambient.intensity=.95,r.sun.color.setHex(15791871),r.sun.intensity=.6,r.fillLight.intensity=.15,(n=r.accentLights)==null||n.forEach(a=>{a.intensity=0})):(r.ambient.color.setHex(16774628),r.ambient.intensity=.45,r.sun.color.setHex(16772560),r.sun.intensity=1.05,r.fillLight.intensity=.35,(s=r.accentLights)==null||s.forEach((a,l)=>{a.color.setHex(Kt[l].hex),a.intensity=1.4})))}const ut=(r,e=.78,n=0,s={})=>new Xr({color:r,roughness:e,metalness:n,...s});function Tt(r,e,n){return new uo(r,e,n)}function En(r,e,n,s=12){return new ca(r,e,n,s)}function ta(r,e=10,n=8){return new Tf(r,e,n)}function qM(r,e){const n=new Yv(16774628,.45);r.add(n);const s=new Nm(16772560,1.05);s.position.set(9,14,10),s.castShadow=!0,s.shadow.mapSize.set(2048,2048),s.shadow.camera.near=.5,s.shadow.camera.far=50,s.shadow.camera.left=-14,s.shadow.camera.right=14,s.shadow.camera.top=14,s.shadow.camera.bottom=-14,s.shadow.bias=-.001,r.add(s);const a=new Nm(13164799,.35);a.position.set(14,6,0),r.add(a);const l=[];Kt.forEach(ee=>{const Z=new Dl(ee.hex,1.4,6.5,1.8);Z.position.set(ee.pos[0],2.6,ee.pos[2]),r.add(Z),l.push(Z)}),e.ambient=n,e.sun=s,e.fillLight=a,e.accentLights=l,[[-3.8,3.16,2.8],[3.8,3.16,2.8],[3.8,3.16,-2.8],[-3.8,3.16,-2.8]].forEach(([ee,Z,re])=>{const we=new Pe(new xn(2.2,.3),new Xr({color:16776693,emissive:16776693,emissiveIntensity:1.2,roughness:1}));we.rotation.x=Math.PI/2,we.position.set(ee,Z,re),r.add(we)});const u=[];[[-3.8,2.85,2.8],[3.8,2.85,2.8],[3.8,2.85,-2.8],[-3.8,2.85,-2.8]].forEach(([ee,Z,re])=>{const we=new Pe(En(.012,.012,.5,4),ut(5914672,.9));we.position.set(ee,Z+.25,re),r.add(we);const He=new Pe(new Yl(.2,.28,12,1,!0),ut(13936704,.5,.1,{side:wi}));He.position.set(ee,Z,re),r.add(He);const $e=new Pe(ta(.065,8,6),new Xr({color:16772744,emissive:16763972,emissiveIntensity:2.2}));$e.position.set(ee,Z-.08,re),r.add($e);const Ke=new Dl(16755268,1.2,4.5,2);Ke.position.set(ee,Z-.2,re),r.add(Ke),u.push({pl:Ke,shade:He,phase:Math.random()*Math.PI*2})}),e.pendants=u;const f=ut(13150330,.82,0),p=new Pe(new xn(16,13),f);p.rotation.x=-Math.PI/2,p.receiveShadow=!0,p.userData.material={name:"Travertine Honed Tile",dim:"600×600×20 mm",specs:[["Finish","Honed matte"],["VOC","<0.3 mg/m³"],["Slip rating","R10"],["Thermal mass","2.3 kJ/m²K"]],note:"Locally quarried. Thermal-mass helps passive climate."},r.add(p);const m=[];Kt.forEach(ee=>{const Z=new Pe(new jl(2,32),new Xl({color:ee.hex,transparent:!0,opacity:0,depthWrite:!1,side:wi}));Z.rotation.x=-Math.PI/2,Z.position.set(ee.pos[0],.012,ee.pos[2]),r.add(Z),m.push(Z)}),e.heatmapDiscs=m;for(let ee=-3;ee<=3;ee++){const Z=new Pe(new xn(16,.02),ut(9071178,.9));Z.rotation.x=-Math.PI/2,Z.position.set(0,.001,ee*1.6),r.add(Z);const re=new Pe(new xn(.02,13),ut(9071178,.9));re.rotation.x=-Math.PI/2,re.position.set(ee*2.2,.001,0),r.add(re)}const x=new Pe(new xn(16,13),ut(16117992,.95));x.rotation.x=Math.PI/2,x.position.y=3.2,r.add(x),[[-3.8,0],[0,0],[3.8,0]].forEach(([ee])=>{const Z=new Pe(Tt(.18,.22,12.7),ut(6964264,.75));Z.position.set(ee,3.09,0),Z.userData.material={name:"Solid White Oak Beam",dim:"180×220×13000 mm",specs:[["Grade","FSC-certified European oak"],["Finish","Natural hard-wax oil"],["CO₂ storage","≈ 780 kg/m³"],["Fire class","D-s2,d0"]],note:"Carbon-negative structural expression."},r.add(Z)});const y=ut(15392202,.92),g=ut(14865856,.92),S=new Pe(new xn(16,3.2),y);S.position.set(0,1.6,-6.5),r.add(S);const T=new Pe(new xn(13,3.2),g);T.rotation.y=Math.PI/2,T.position.set(-8,1.6,0),r.add(T);const C=new Pe(new xn(6.5,3.2),g);C.rotation.y=-Math.PI/2,C.position.set(8,1.6,3.25),r.add(C);const _=new Pe(new xn(6.5,.2),g);_.rotation.y=-Math.PI/2,_.position.set(8,3.1,-3.25),r.add(_);const v=document.createElement("canvas");v.width=512,v.height=512;const b=v.getContext("2d"),L=b.createLinearGradient(0,0,0,512);L.addColorStop(0,"#B8DEFF"),L.addColorStop(.55,"#E8D8B8"),L.addColorStop(.62,"#9CB48C"),L.addColorStop(1,"#7A9878"),b.fillStyle=L,b.fillRect(0,0,512,512),b.fillStyle="rgba(90,120,90,0.55)";for(let ee=0;ee<12;ee++){const Z=ee/11*512+Math.sin(ee)*20,re=30+ee%3*12;b.beginPath(),b.arc(Z,320+ee%2*10,re,0,Math.PI*2),b.fill()}const P=new Uv(v);P.colorSpace=ri;const z=new Xl({map:P});e.skyMat=z;const D=new Pe(new xn(10,6),z);D.rotation.y=-Math.PI/2,D.position.set(10.5,1.8,-3.25),r.add(D);const k=new Vv({color:16777215,roughness:.05,metalness:0,transparent:!0,opacity:.12,transmission:.8,ior:1.45,thickness:.02}),w=new Pe(new xn(6.5,3),k);w.rotation.y=-Math.PI/2,w.position.set(7.99,1.5,-3.25),r.add(w);const I=ut(11040840,.55,.1),j=new Pe(Tt(.32,.18,6.5),I);j.position.set(7.9,.09,-3.25),r.add(j);const O=new Pe(Tt(.22,.16,6.5),I);O.position.set(7.93,3,-3.25),r.add(O),[0,-6.5].forEach(ee=>{const Z=new Pe(Tt(.12,3,.14),I);Z.position.set(7.93,1.5,ee),r.add(Z)}),[-1.625,-3.25,-4.875].forEach(ee=>{const Z=new Pe(Tt(.06,2.95,.08),I);Z.position.set(7.93,1.5,ee),r.add(Z)});const Y=new Pe(Tt(.06,.05,6.4),I);Y.position.set(7.93,2.15,-3.25),r.add(Y);const le=new Pe(new xn(4.2,.35),k);le.rotation.y=-Math.PI/2,le.position.set(7.99,2.95,2.2),r.add(le);const ge=new Pe(new xn(5,.6),z);ge.rotation.y=-Math.PI/2,ge.position.set(10.5,2.95,2.2),r.add(ge);const W=ut(11040840,.55,.1);[-1.4,0,1.4].forEach(ee=>{const Z=new Pe(Tt(.03,.4,.05),W);Z.position.set(7.92,2.95,2.2+ee),r.add(Z)});const ne=new Pe(Tt(.14,1.05,9.5),ut(14207144,.88));ne.position.set(0,.525,.5),r.add(ne);const $=new Pe(Tt(.22,.06,9.5),ut(12097632,.5,.15));$.position.set(0,1.08,.5),r.add($);const J=ut(10518624,.72,.05),fe=new Pe(Tt(4,1,.8),J);fe.position.set(0,.5,-6.1),fe.castShadow=!0,r.add(fe);const he=new Pe(Tt(4,1,.05),ut(13150320,.55,.2));he.position.set(0,.5,-5.7),r.add(he);const F=new Pe(Tt(4.2,.06,1),ut(8015920,.45,.3));F.position.set(0,1.03,-6.05),r.add(F);const ie=new Pe(Tt(.5,.32,.03),new Xr({color:1714746,roughness:.4,metalness:.7,emissive:2771562,emissiveIntensity:.4}));ie.position.set(-.6,1.36,-5.92),r.add(ie);const We=ut(13150320,.6,.1);[[0,.06,-6.49,16,.12,.1,0],[-7.99,.06,0,.1,.12,13,0],[7.99,.06,0,.1,.12,13,0]].forEach(([ee,Z,re,we,He,$e])=>{const Ke=new Pe(Tt(we,He,$e),We);Ke.position.set(ee,Z,re),r.add(Ke)});const Fe=[];Fe.push({mesh:p,zoneId:null}),r.traverse(ee=>{var Z,re,we;ee.isMesh&&((we=(re=(Z=ee.userData)==null?void 0:Z.material)==null?void 0:re.name)!=null&&we.includes("Oak Beam"))&&Fe.push({mesh:ee,zoneId:null})});const Xe=ut(12882032,.85),ce=ut(10514512,.88),Ae=ut(5910552,.6,.3),ye=ut(13936768,.82);function Ge(ee,Z,re,we,He="sofa"){const $e=new qi,Ke=He==="chair"?.74:.78,xe=He==="chair"?.82:.88,qe=we*Ke,Te=new Pe(Tt(qe-.06,.08,xe-.16),Ae);Te.position.set(0,.06,0),$e.add(Te);const Ee=new Pe(Tt(qe,.32,xe),Xe);Ee.position.set(0,.26,0),Ee.castShadow=!0,$e.add(Ee);const et=new Pe(Tt(qe,.58,.14),ce);et.position.set(0,.68,-xe/2+.07),et.rotation.x=-.08,$e.add(et),[-qe/2+.07,qe/2-.07].forEach(xt=>{const Wt=new Pe(Tt(.14,.28,xe-.04),ce);Wt.position.set(xt,.56,0),$e.add(Wt)});for(let xt=0;xt<we;xt++){const Wt=-qe/2+Ke/2+xt*Ke+(xt===0?.05:xt===we-1?-.05:0),Jt=new Pe(Tt(Ke-.12,.14,xe-.22),ye);Jt.position.set(Wt,.49,.05),Jt.castShadow=!0,$e.add(Jt);const An=new Pe(Tt(Ke-.16,.34,.14),ye);An.position.set(Wt,.72,-xe/2+.18),An.rotation.x=.12,$e.add(An)}return $e.position.set(ee,0,Z),$e.rotation.y=re,r.add($e),$e.children.forEach(xt=>{xt.isMesh&&Fe.push({mesh:xt,zoneId:"seating"})}),$e}Ge(-3.8,3.35,Math.PI,3,"sofa"),Ge(-4.9,1.55,Math.PI/3.4,1,"chair"),Ge(-2.7,1.55,-Math.PI/3.4,1,"chair");const nt=new Pe(Tt(1.3,.05,.7),ut(8015920,.45,.25));nt.position.set(-3.8,.42,2.6),nt.castShadow=!0,r.add(nt),Fe.push({mesh:nt,zoneId:"seating"});const lt=new Pe(Tt(1.24,.03,.64),Ae);lt.position.set(-3.8,.38,2.6),r.add(lt),[[-.58,-.3],[.58,-.3],[-.58,.3],[.58,.3]].forEach(([ee,Z])=>{const re=new Pe(En(.022,.022,.38,6),Ae);re.position.set(-3.8+ee,.19,2.6+Z),r.add(re)});const Nt=new Pe(En(.09,.07,.18,14),ut(15260868,.7));Nt.position.set(-3.8,.53,2.6),Nt.castShadow=!0,r.add(Nt);const pt=new Pe(En(.006,.006,.34,4),ut(4876858,.7));pt.position.set(-3.8,.76,2.6),r.add(pt);const bt=new Pe(En(.2,.2,.04,14),ut(6963232,.5,.2));bt.position.set(-5.35,.52,3.55),bt.castShadow=!0,r.add(bt),Fe.push({mesh:bt,zoneId:"seating"});const Ut=new Pe(En(.03,.05,.5,8),Ae);Ut.position.set(-5.35,.25,3.55),r.add(Ut);const _t=new Pe(En(.1,.08,.13,12),ut(9071178,.8));_t.position.set(-5.35,.61,3.55),r.add(_t);for(let ee=0;ee<5;ee++){const Z=new Pe(ta(.08,8,6),ut(4880970,.85));Z.position.set(-5.35+Math.cos(ee)*.05,.73+ee*.03,3.55+Math.sin(ee)*.05),Z.scale.set(1,.5,1),r.add(Z)}const Bt=new Pe(En(.32,.32,.34,16),ut(12095600,.88));Bt.position.set(-3.8,.17,1.4),Bt.castShadow=!0,r.add(Bt),Fe.push({mesh:Bt,zoneId:"seating"}),[[.06,1.05,2,-1.9,.55,2.8],[.06,1.05,2,-5.7,.55,2.5]].forEach(([ee,Z,re,we,He,$e])=>{const Ke=new Pe(Tt(ee,Z,re),ut(14733496,.92));Ke.position.set(we,He,$e),Ke.castShadow=!0,Ke.userData.material={name:"Wool-Felt Acoustic Privacy Wing",dim:"2000×1050×60 mm",specs:[["Composition","100% recycled PET + wool felt"],["Acoustic NRC","0.90"],["Fire class","B-s1,d0"],["Colorways","5 naturals"]],note:"Reduces reverberation to < 0.8 s."},r.add(Ke),Fe.push({mesh:Ke,zoneId:"seating"});const xe=new Pe(Tt(ee+.02,.04,re+.02),ut(11571296,.5,.2));xe.position.set(we,He+.545,$e),r.add(xe)});const Gt=[];for(let ee=0;ee<5;ee++)for(let Z=0;Z<5;Z++){const re=(ee+Z)%3,we=[3041850,4033098,4890714][re],He=new Pe(Tt(.52,.52,.08),ut(we,.95));He.position.set(7.96,.38+ee*.55,1+Z*.55),He.rotation.y=-Math.PI/2,He.castShadow=!0,He.userData.material={name:"Preserved Reindeer Moss Panel",dim:"500×500×40 mm",specs:[["Species","Cladonia rangiferina (mixed tones)"],["Maintenance","Zero water · Zero light"],["Acoustic NRC","0.75"],["Air particulate trap","Light PM2.5 capture"]],note:"Biophilic anchor of the space."},r.add(He),Fe.push({mesh:He,zoneId:"biophilic"})}[[2.8,1.8],[4.4,3],[3.2,1.1]].forEach(([ee,Z],re)=>{const we=new Pe(En(.22,.16,.4,10),ut(9066544,.85));we.position.set(ee,.2,Z),we.castShadow=!0,r.add(we),Fe.push({mesh:we,zoneId:"biophilic"});const He=new Pe(En(.05,.07,.7,7),ut(4860942,.9));He.position.set(ee,.75,Z),r.add(He);const $e=new Pe(ta(.45+re*.05,10,8),ut(3043392,.85));$e.position.set(ee,1.32+re*.1,Z),$e.castShadow=!0,r.add($e),Fe.push({mesh:$e,zoneId:"biophilic"});const Ke=new Pe(ta(.3,8,6),ut(4033104,.85));Ke.position.set(ee+.25,1.05+re*.08,Z-.2),r.add(Ke),Gt.push({mesh:$e,baseY:$e.position.y,phase:re*1.2}),Gt.push({mesh:Ke,baseY:Ke.position.y,phase:re*1.2+.5})}),e.plants=Gt;const Zt=new Pe(En(.6,.55,.18,20),ut(8015920,.8));Zt.position.set(5,.09,3.8),Zt.castShadow=!0,r.add(Zt),Fe.push({mesh:Zt,zoneId:"biophilic"});const G=new Pe(new jl(.54,20),new Xr({color:8310752,roughness:.05,metalness:.1,transparent:!0,opacity:.82}));G.rotation.x=-Math.PI/2,G.position.set(5,.19,3.8),r.add(G),e.water=G,Fe.push({mesh:G,zoneId:"biophilic"}),[0,1,2,3,4,5].forEach(ee=>{const Z=ee/6*Math.PI*2,re=new Pe(new ca(.12,.12,.04,8),ut(10522752,.95));re.position.set(5+Math.cos(Z)*.82,.02,3.8+Math.sin(Z)*.82),r.add(re)});const pe=[];[[2.5,-2],[3.8,-3.6],[5.1,-2]].forEach(([ee,Z],re)=>{const we=new Pe(En(.05,.08,1.2,8),ut(11579568,.4,.8));we.position.set(ee,.6,Z),r.add(we);const He=new Pe(En(.18,.18,.04,12),ut(9474192,.4,.7));He.position.set(ee,.02,Z),r.add(He);const $e=new Xr({color:661544,roughness:.05,metalness:.5,emissive:re===1?1717352:1714264,emissiveIntensity:.7}),Ke=new Pe(Tt(.62,.96,.04),$e);Ke.position.set(ee,1.68,Z),Ke.castShadow=!0,r.add(Ke),Fe.push({mesh:Ke,zoneId:"digital"}),pe.push({mesh:Ke,mat:$e,phase:re*1.4});const xe=new Xr({color:4227327,emissive:4227327,emissiveIntensity:1.8}),qe=new Pe(Tt(.62,.04,.02),xe);qe.position.set(ee,1.21,Z+.03),r.add(qe),pe.push({mesh:qe,mat:xe,phase:re*1.4+.3,isBar:!0});const Te=new Dl(4219084,.8,2.5,2);Te.position.set(ee,1.68,Z+.2),r.add(Te),pe.push({pl:Te,phase:re*1.4,isPl:!0})}),e.screens=pe;const N=new qi;N.position.set(-5,0,-6.32);const dt=ut(5912608,.6,.1),Oe=ut(4860952,.8,.1),Ct=new Pe(Tt(3.2,2.4,.02),Oe);Ct.position.set(0,1.2,-.16),Ct.castShadow=!0,N.add(Ct);const R=new Pe(Tt(3.24,.06,.36),dt);R.position.set(0,2.43,0),R.castShadow=!0,N.add(R);const M=new Pe(Tt(3.24,.08,.36),dt);M.position.set(0,.04,0),M.castShadow=!0,N.add(M),[-1.6,1.6].forEach(ee=>{const Z=new Pe(Tt(.06,2.4,.36),dt);Z.position.set(ee,1.2,0),Z.castShadow=!0,N.add(Z)}),[-.53,.53].forEach(ee=>{const Z=new Pe(Tt(.04,2.32,.32),dt);Z.position.set(ee,1.2,-.02),Z.castShadow=!0,N.add(Z)});const K=[.45,.85,1.25,1.65,2.05];K.forEach(ee=>{const Z=new Pe(Tt(3.14,.03,.32),dt);Z.position.set(0,ee,-.02),Z.castShadow=!0,N.add(Z)}),r.add(N),N.children.forEach(ee=>{ee.isMesh&&Fe.push({mesh:ee,zoneId:"calm"})});function _e(ee,Z,re,we,He,$e,Ke){const xe=new qi,qe=.04,Te=.04,Ee=ut(2759184,.6,.1),et=new Pe(Tt(He,$e,.01),ut(16117992,.95));et.position.z=qe/2,xe.add(et),Ke.forEach((Ln,oi)=>{const an=He*(.3+Math.random()*.4),Fn=$e*(.3+Math.random()*.4),gi=new Pe(Tt(an,Fn,.002),ut(Ln,.9));gi.position.set((Math.random()-.5)*(He-an),(Math.random()-.5)*($e-Fn),qe/2+.006+oi*.001),xe.add(gi)});const xt=new Pe(Tt(He+Te*2,Te,qe),Ee);xt.position.set(0,$e/2+Te/2,0),xe.add(xt);const Wt=new Pe(Tt(He+Te*2,Te,qe),Ee);Wt.position.set(0,-$e/2-Te/2,0),xe.add(Wt);const Jt=new Pe(Tt(Te,$e,qe),Ee);Jt.position.set(-He/2-Te/2,0,0),xe.add(Jt);const An=new Pe(Tt(Te,$e,qe),Ee);An.position.set(He/2+Te/2,0,0),xe.add(An),xe.position.set(ee,Z,re),xe.rotation.y=we,r.add(xe)}_e(-7.94,1.8,1,Math.PI/2,2,1.2,[4876938,12882032,14207144,2767434]),_e(-1.2,1.7,-6.44,0,1,1.4,[5929032,11040848,14733496]),_e(1.8,1.7,-6.44,0,.9,.9,[13936704,4860942,13150330]);const Me=[12603472,5271744,5283936,12623920,8409232,12611648,4214912,12601480,4229744,3170416,9453632,13672512,4235408,8409152,5263536],be=[.32,.28,.35,.3,.25,.33,.29,.27,.34,.31,.26,.36,.28,.33,.3],Le=[.04,.05,.03,.06,.04,.05,.04,.03,.04,.05,.03,.06,.04,.04,.05];for(let ee=0;ee<4;ee++)for(let Z=0;Z<3;Z++)if(Math.random()>.3){const re=4+Math.floor(Math.random()*9);let He=(Z-1)*1.06-.35+Math.random()*.3;for(let $e=0;$e<re;$e++){const Ke=Math.floor(Math.random()*Me.length),xe=Me[Ke],qe=Le[Ke],Te=be[Ke]+(Math.random()*.04-.02),Ee=.2+(Math.random()*.02-.01),et=new qi,xt=new Pe(Tt(qe,Te,Ee),ut(xe,.88));xt.castShadow=!0,et.add(xt);const Wt=new Pe(Tt(qe+.002,Te-.01,.015),ut(xe,.75,.05));Wt.position.z=Ee/2+.007,et.add(Wt);const Jt=new Pe(Tt(qe-.006,Te-.015,Ee-.015),ut(16117984,.95));Jt.position.x=.002,et.add(Jt);const An=K[ee]+.015+Te/2;let Ln=0;$e>=re-2&&Math.random()>.4&&(Ln=.12+Math.random()*.1,He+=.03),et.position.set(-5+He,An,-6.22+(Math.random()*.02-.01)),et.rotation.z=-Ln,r.add(et),et.children.forEach(oi=>{oi.isMesh&&Fe.push({mesh:oi,zoneId:"calm"})}),He+=qe+.002+(Ln>0?.03:0)}}const me=ut(11036072,.88);[[-4.6,-2.2],[-3.5,-3.2],[-2.5,-2.5]].forEach(([ee,Z])=>{const re=new Pe(En(.32,.3,.12,14),me);re.position.set(ee,.06,Z),re.castShadow=!0,r.add(re),Fe.push({mesh:re,zoneId:"calm"});const we=new Pe(new Af(.31,.01,6,20),ut(9062536,.9));we.rotation.x=Math.PI/2,we.position.set(ee,.12,Z),r.add(we)});const Se=ut(6963744,.55,.1),Be=new Pe(Tt(1.3,.06,.75),Se);Be.position.set(-3.5,.38,-2.9),Be.castShadow=!0,r.add(Be),Fe.push({mesh:Be,zoneId:"calm"}),[[-.55,-.3],[.55,-.3],[-.55,.3],[.55,.3]].forEach(([ee,Z])=>{const re=new Pe(En(.022,.022,.36,5),ut(4860942,.7,.2));re.position.set(-3.5+ee,.18,-2.9+Z),r.add(re)});const je=new Pe(En(.055,.05,.1,10),ut(15261904,.7));je.position.set(-3.5,.46,-2.9),r.add(je);const Ue=ut(9070656,.5,.4),Ie=new Pe(En(.022,.022,1.55,6),Ue);Ie.position.set(-2.2,.78,-1.6),r.add(Ie);const ft=new Pe(En(.15,.15,.04,10),Ue);ft.position.set(-2.2,.02,-1.6),r.add(ft);const ht=new Pe(new Yl(.28,.38,12,1,!0),ut(15255664,.7,0,{side:wi}));ht.position.set(-2.2,1.65,-1.6),ht.castShadow=!0,r.add(ht),Fe.push({mesh:ht,zoneId:"calm"});const vt=new Dl(16755268,1.6,4,2);vt.position.set(-2.2,1.45,-1.6),r.add(vt),e.lampLight=vt;const B=new Pe(new xn(3.8,3),ut(11040848,.98));B.rotation.x=-Math.PI/2,B.position.set(-3.8,.003,2.5),r.add(B);const Ne=new Pe(new xn(4,3.2),ut(9068600,.98));Ne.rotation.x=-Math.PI/2,Ne.position.set(-3.8,.002,2.5),r.add(Ne);const ve=new Pe(new xn(3.4,2.8),ut(5929032,.98));return ve.rotation.x=-Math.PI/2,ve.position.set(3.8,.003,2.5),r.add(ve),Fe}function $M({activeZone:r,isMobile:e,handleZoom:n,handleReset:s,tutorialHighlight:a}){const l=a==="zones";return V.jsxs("div",{style:{position:"absolute",top:e?65:76,left:"50%",transform:"translateX(-50%)",display:"flex",gap:e?5:7,flexWrap:"wrap",justifyContent:"center",zIndex:l?45:10,maxWidth:e?"calc(100% - 32px)":"auto",padding:e?"0 8px":0},children:[Kt.map((u,f)=>{const p=(r==null?void 0:r.id)===u.id;return V.jsx("button",{className:"zbtn",onClick:()=>n(u),style:{padding:e?"6px 12px":"7px 16px",borderRadius:24,border:`1.5px solid ${l?"rgba(196,144,90,0.8)":p?u.accent:"rgba(248,238,216,0.25)"}`,background:p?u.accent:"rgba(18,12,6,0.6)",color:p?"#fff":"rgba(248,238,216,0.78)",fontSize:e?10:11,fontWeight:p?500:400,letterSpacing:"0.04em",cursor:"pointer",backdropFilter:"blur(12px)",fontFamily:"'DM Sans', sans-serif",boxShadow:p?`0 4px 20px ${u.accent}55`:"none",animationDelay:`${f*.06}s`,...l?{animation:"tutorialGlow 2s ease-in-out infinite"}:{}},children:e?u.icon:`${u.icon} ${u.label}`},u.id)}),r&&V.jsxs("button",{className:"zbtn",onClick:s,style:{padding:e?"6px 12px":"7px 16px",borderRadius:24,border:"1.5px solid rgba(248,238,216,0.28)",background:"rgba(18,12,6,0.6)",color:"rgba(248,238,216,0.7)",fontSize:e?10:11,fontWeight:300,cursor:"pointer",backdropFilter:"blur(12px)",fontFamily:"'DM Sans', sans-serif"},children:["↺ ",e?"":"Overview"]})]})}function KM({displayZone:r,activeZone:e,isMobile:n,goToAdjacentZone:s}){return V.jsxs("div",{className:"panel-in",style:{position:"absolute",right:n?12:22,top:n?"auto":"50%",bottom:n?12:"auto",left:n?12:"auto",width:n?"auto":300,maxHeight:n?"50vh":"auto",overflowY:n?"auto":"visible",zIndex:20,background:"rgba(16,10,4,0.95)",borderRadius:n?16:20,padding:n?"20px 18px":"28px 24px",boxShadow:`0 16px 50px rgba(0,0,0,0.55), 0 0 0 1px ${r.accent}44`,backdropFilter:"blur(18px)",border:`1px solid ${r.accent}44`},children:[V.jsxs("div",{style:{display:"inline-flex",alignItems:"center",gap:8,padding:"5px 13px",borderRadius:20,marginBottom:16,background:r.accent+"22",border:`1px solid ${r.accent}66`},children:[V.jsx("span",{style:{fontSize:15},children:r.icon}),V.jsx("span",{style:{fontFamily:"'DM Sans'",fontSize:10,fontWeight:500,color:r.accent,letterSpacing:"0.07em",textTransform:"uppercase"},children:e?"Zone Active":"Hover Preview"})]}),V.jsx("div",{style:{fontFamily:"'Cormorant Garamond', serif",fontSize:21,fontWeight:600,color:"#F8EED8",lineHeight:1.2,marginBottom:12},children:r.label}),V.jsx("div",{style:{fontFamily:"'DM Sans'",fontSize:12,lineHeight:1.8,color:"rgba(248,238,216,0.62)",marginBottom:20},children:r.desc}),V.jsx("div",{style:{fontFamily:"'DM Sans'",fontSize:9,letterSpacing:"0.13em",textTransform:"uppercase",color:"rgba(248,238,216,0.32)",marginBottom:10},children:"Design Interventions"}),r.features.map((a,l)=>V.jsxs("div",{style:{display:"flex",alignItems:"center",gap:9,padding:"7px 0",borderBottom:"1px solid rgba(248,238,216,0.06)",fontFamily:"'DM Sans'",fontSize:12,color:"rgba(248,238,216,0.75)"},children:[V.jsx("span",{style:{color:r.accent,fontSize:9,flexShrink:0,marginTop:1},children:"✦"}),a]},l)),V.jsx("div",{style:{marginTop:18,padding:"10px 16px",borderRadius:12,background:r.accent+"18",border:`1px solid ${r.accent}30`,fontFamily:"'DM Sans'",fontSize:13,fontWeight:500,color:r.accent,letterSpacing:"0.02em"},children:r.metric}),!e&&V.jsx("div",{style:{marginTop:12,fontFamily:"'DM Sans'",fontSize:10,color:"rgba(248,238,216,0.3)",textAlign:"center",letterSpacing:"0.08em"},children:"Click to enter zone →"}),e&&V.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",marginTop:18,paddingTop:14,borderTop:"1px solid rgba(248,238,216,0.08)"},children:[V.jsx("button",{className:"zbtn",onClick:()=>s(-1),style:{padding:"6px 12px",borderRadius:18,border:"1px solid rgba(248,238,216,0.22)",background:"rgba(248,238,216,0.05)",color:"rgba(248,238,216,0.8)",fontSize:11,cursor:"pointer",fontFamily:"'DM Sans'"},children:"← Prev"}),V.jsxs("span",{style:{fontFamily:"'DM Sans'",fontSize:10,color:"rgba(248,238,216,0.4)",letterSpacing:"0.08em"},children:[Kt.findIndex(a=>a.id===e.id)+1," / ",Kt.length]}),V.jsx("button",{className:"zbtn",onClick:()=>s(1),style:{padding:"6px 12px",borderRadius:18,border:`1px solid ${r.accent}66`,background:r.accent+"22",color:r.accent,fontSize:11,cursor:"pointer",fontFamily:"'DM Sans'",fontWeight:500},children:"Next →"})]})]},r.id)}function ZM({loaded:r,welcomePhase:e,setWelcomePhase:n,setShowWelcome:s,setTutorialStep:a,isMobile:l}){return!r||e==="done"?null:V.jsxs(V.Fragment,{children:[V.jsx("div",{style:{position:"absolute",inset:0,background:"rgba(10,6,2,0.65)",backdropFilter:"blur(4px)",zIndex:50,animation:"welcomeFadeIn 0.5s ease forwards"}}),V.jsxs("div",{style:{position:"absolute",top:"50%",left:"50%",transform:"translate(-50%, -50%)",width:l?"calc(100% - 40px)":440,maxWidth:"calc(100vw - 40px)",zIndex:51,background:"rgba(20,14,8,0.97)",borderRadius:22,padding:l?"32px 24px":"40px 36px",border:"1px solid rgba(196,144,90,0.35)",boxShadow:"0 30px 80px rgba(0,0,0,0.7), 0 0 0 1px rgba(248,238,216,0.06)",backdropFilter:"blur(20px)",textAlign:"center",animation:"welcomeSlideUp 0.6s cubic-bezier(.2,.8,.2,1) forwards"},children:[e==="intro"&&V.jsxs(V.Fragment,{children:[V.jsx("div",{style:{fontSize:36,marginBottom:16,filter:"drop-shadow(0 4px 12px rgba(196,144,90,0.3))"},children:"🌿"}),V.jsxs("div",{style:{fontFamily:"'Cormorant Garamond', serif",fontSize:l?22:26,fontWeight:600,color:"#F8EED8",lineHeight:1.2,marginBottom:12},children:["Integrated Modular",V.jsx("br",{}),"Healing Space"]}),V.jsx("div",{style:{fontFamily:"'DM Sans', sans-serif",fontSize:12,lineHeight:1.8,color:"rgba(248,238,216,0.55)",marginBottom:8,maxWidth:340,margin:"0 auto 24px"},children:"Explore a 3D prototype of a hospital waiting environment redesigned around four wellness zones — each backed by evidence-based design interventions that measurably reduce patient stress and anxiety."}),V.jsx("div",{style:{display:"flex",flexWrap:"wrap",justifyContent:"center",gap:8,marginBottom:28},children:Kt.map(u=>V.jsxs("span",{style:{padding:"4px 12px",borderRadius:16,background:u.accent+"18",border:`1px solid ${u.accent}44`,fontFamily:"'DM Sans'",fontSize:10,color:u.accent,letterSpacing:"0.04em"},children:[u.icon," ",u.label]},u.id))}),V.jsx("button",{onClick:()=>n("askNew"),className:"zbtn",style:{padding:"12px 36px",borderRadius:28,border:"none",background:"linear-gradient(135deg, #C4905A, #A07040)",color:"#fff",fontSize:14,fontWeight:500,letterSpacing:"0.06em",cursor:"pointer",fontFamily:"'DM Sans', sans-serif",boxShadow:"0 8px 28px rgba(196,144,90,0.35)"},children:"Start Exploring →"}),V.jsx("div",{style:{marginTop:16,fontFamily:"'DM Sans'",fontSize:10,color:"rgba(248,238,216,0.3)",letterSpacing:"0.08em"},children:"3D Spatial Prototype · Team 142"})]}),e==="askNew"&&V.jsxs(V.Fragment,{children:[V.jsx("div",{style:{fontSize:32,marginBottom:16},children:"👋"}),V.jsx("div",{style:{fontFamily:"'Cormorant Garamond', serif",fontSize:l?20:24,fontWeight:600,color:"#F8EED8",lineHeight:1.2,marginBottom:12},children:"Are you a new user?"}),V.jsx("div",{style:{fontFamily:"'DM Sans', sans-serif",fontSize:12,lineHeight:1.8,color:"rgba(248,238,216,0.55)",maxWidth:340,margin:"0 auto 28px"},children:"If this is your first time, we'll walk you through the space with a quick interactive tutorial covering controls, zones, and tools."}),V.jsxs("div",{style:{display:"flex",gap:12,justifyContent:"center",flexWrap:"wrap"},children:[V.jsx("button",{onClick:()=>{s(!1),n("done"),a(0)},className:"zbtn",style:{padding:"12px 28px",borderRadius:28,border:"none",background:"linear-gradient(135deg, #C4905A, #A07040)",color:"#fff",fontSize:13,fontWeight:500,letterSpacing:"0.06em",cursor:"pointer",fontFamily:"'DM Sans', sans-serif",boxShadow:"0 8px 28px rgba(196,144,90,0.35)"},children:"Yes, show me around"}),V.jsx("button",{onClick:()=>{s(!1),n("done")},className:"zbtn",style:{padding:"12px 28px",borderRadius:28,border:"1px solid rgba(248,238,216,0.25)",background:"rgba(248,238,216,0.06)",color:"rgba(248,238,216,0.8)",fontSize:13,fontWeight:400,letterSpacing:"0.06em",cursor:"pointer",fontFamily:"'DM Sans', sans-serif"},children:"No, I'll explore"})]})]})]})]})}function JM({tutorialStep:r,setTutorialStep:e,handleReset:n,isMobile:s}){return r<0||r>=yn.length?null:V.jsxs(V.Fragment,{children:[yn[r].highlight&&V.jsx("div",{style:{position:"absolute",inset:0,background:"rgba(0,0,0,0.7)",pointerEvents:"none",zIndex:44}}),yn[r].highlight==="viewport"&&V.jsx("div",{style:{position:"absolute",inset:0,border:"3px solid rgba(196,144,90,0.5)",borderRadius:0,pointerEvents:"none",zIndex:45,boxShadow:"inset 0 0 60px rgba(196,144,90,0.15)"}}),V.jsxs("div",{className:"fade-up",style:{position:"absolute",bottom:s?16:32,left:"50%",transform:"translateX(-50%)",width:s?"calc(100% - 24px)":520,maxWidth:"calc(100vw - 24px)",zIndex:46,background:"rgba(16,10,4,0.96)",borderRadius:18,padding:s?"20px 18px":"24px 28px",border:"1px solid rgba(196,144,90,0.35)",boxShadow:"0 20px 60px rgba(0,0,0,0.6)",backdropFilter:"blur(16px)"},children:[V.jsx("div",{style:{display:"flex",gap:3,marginBottom:16},children:yn.map((a,l)=>V.jsx("div",{style:{flex:1,height:3,borderRadius:2,background:l<=r?"#C4905A":"rgba(248,238,216,0.12)",transition:"background 0.3s ease"}},l))}),V.jsxs("div",{style:{fontFamily:"'DM Sans', sans-serif",fontSize:10,letterSpacing:"0.12em",textTransform:"uppercase",color:"rgba(196,144,90,0.8)",marginBottom:8},children:["Step ",r+1," of ",yn.length]}),V.jsx("div",{style:{fontFamily:"'Cormorant Garamond', serif",fontSize:s?18:22,fontWeight:600,color:"#F8EED8",lineHeight:1.2,marginBottom:10},children:yn[r].title}),V.jsx("div",{style:{fontFamily:"'DM Sans', sans-serif",fontSize:12,lineHeight:1.8,color:"rgba(248,238,216,0.65)",marginBottom:8},children:yn[r].text}),yn[r].sub&&V.jsx("div",{style:{fontFamily:"'DM Sans', sans-serif",fontSize:11,fontWeight:500,color:"#C4905A",marginBottom:16,padding:"6px 12px",background:"rgba(196,144,90,0.1)",borderRadius:8,display:"inline-block"},children:yn[r].sub}),V.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",marginTop:8,paddingTop:14,borderTop:"1px solid rgba(248,238,216,0.08)"},children:[V.jsx("div",{style:{display:"flex",gap:10},children:r>0&&V.jsx("button",{onClick:()=>e(a=>a-1),className:"zbtn",style:{padding:"8px 18px",borderRadius:20,border:"1px solid rgba(248,238,216,0.4)",background:"rgba(248,238,216,0.08)",color:"rgba(248,238,216,0.9)",fontSize:13,cursor:"pointer",fontFamily:"'DM Sans'"},children:"← Back"})}),V.jsxs("div",{style:{display:"flex",gap:10},children:[V.jsx("button",{onClick:()=>{e(-1),n()},className:"zbtn",style:{padding:"8px 18px",borderRadius:20,border:"1px solid rgba(248,238,216,0.3)",background:"transparent",color:"rgba(248,238,216,0.8)",fontSize:13,cursor:"pointer",fontFamily:"'DM Sans'"},children:"Skip"}),!yn[r].requiredAction&&V.jsx("button",{onClick:()=>{r>=yn.length-1?(e(-1),n()):e(a=>a+1)},className:"zbtn",style:{padding:"8px 24px",borderRadius:20,border:"none",background:"linear-gradient(135deg, #D4A06A, #B08050)",color:"#fff",fontSize:13,fontWeight:600,cursor:"pointer",fontFamily:"'DM Sans'",boxShadow:"0 4px 14px rgba(196,144,90,0.5)"},children:r>=yn.length-1?"Finish ✓":"Next →"})]})]})]})]})}function QM({isMobile:r,showTools:e,setShowTools:n,heatmapMode:s,setHeatmapMode:a,patientSimActive:l,setPatientSimActive:u,guidedTour:f,setGuidedTour:p,splitScreen:m,setSplitScreen:x,inspectorMode:y,setInspectorMode:g,setInspectedItem:S,circadianTime:T,setCircadianTime:C,comparisonMode:_,onTutorialAction:v,tutorialHighlight:b}){const L=b==="tools";return V.jsxs(V.Fragment,{children:[V.jsxs("button",{onClick:()=>{n(P=>!P),!e&&v&&v("open_tools")},title:e?"Hide tools":"Show tools",className:`tools-fab ${e?"open":""}`,style:{position:"absolute",left:r?14:26,top:"auto",bottom:r?14:26,width:46,height:46,borderRadius:13,border:`1px solid ${L?"rgba(196,144,90,0.8)":e?"rgba(196,144,90,0.6)":"rgba(248,238,216,0.14)"}`,background:e?"linear-gradient(135deg, rgba(196,144,90,0.92), rgba(160,112,80,0.92))":"rgba(18,12,6,0.72)",color:"#F8EED8",cursor:"pointer",backdropFilter:"blur(16px)",boxShadow:e?"0 8px 28px rgba(196,144,90,0.28), inset 0 1px 0 rgba(255,255,255,0.12)":"0 4px 14px rgba(0,0,0,0.3)",zIndex:L?45:25,padding:0,...L?{animation:"tutorialGlow 2s ease-in-out infinite"}:{}},children:[V.jsx("span",{className:"bars",children:V.jsxs("svg",{width:"18",height:"18",viewBox:"0 0 18 18",fill:"none",children:[V.jsx("circle",{cx:"3",cy:"4.5",r:"1.2",fill:"currentColor"}),V.jsx("rect",{x:"6.5",y:"3.8",width:"9",height:"1.4",rx:"0.7",fill:"currentColor"}),V.jsx("circle",{cx:"3",cy:"9",r:"1.2",fill:"currentColor"}),V.jsx("rect",{x:"6.5",y:"8.3",width:"9",height:"1.4",rx:"0.7",fill:"currentColor"}),V.jsx("circle",{cx:"3",cy:"13.5",r:"1.2",fill:"currentColor"}),V.jsx("rect",{x:"6.5",y:"12.8",width:"9",height:"1.4",rx:"0.7",fill:"currentColor"})]})}),V.jsx("span",{className:"cross",children:V.jsx("svg",{width:"16",height:"16",viewBox:"0 0 16 16",fill:"none",children:V.jsx("path",{d:"M3 3 L13 13 M13 3 L3 13",stroke:"currentColor",strokeWidth:"1.6",strokeLinecap:"round"})})})]}),!e&&!r&&V.jsx("div",{style:{position:"absolute",left:80,bottom:34,fontFamily:"'DM Sans', sans-serif",fontSize:10,letterSpacing:"0.1em",textTransform:"uppercase",color:"rgba(248,238,216,0.45)",pointerEvents:"none",animation:"fadeUp 0.5s ease 2s forwards",opacity:0,zIndex:25},children:"Tools"}),e&&V.jsx("div",{className:"dock-in",style:{position:"absolute",left:r?"50%":26,bottom:r?72:84,top:"auto",transform:r?"translateX(-50%)":"none",display:"flex",flexDirection:r?"row":"column",gap:8,zIndex:20,padding:8,background:"rgba(18,12,6,0.75)",borderRadius:14,border:"1px solid rgba(248,238,216,0.12)",backdropFilter:"blur(14px)",flexWrap:"wrap",maxWidth:r?"calc(100% - 24px)":"auto"},children:[{key:"heatmap",label:"Heatmap",icon:"▦",active:s,toggle:()=>a(P=>!P),color:"#E07B4A"},{key:"patients",label:"Patient Flow",icon:"◉",active:l,toggle:()=>u(P=>!P),color:"#4A8A58"},{key:"tour",label:"Guided Tour",icon:"▶",active:f,toggle:()=>{f||x(!1),p(P=>!P)},color:"#5572C4"},{key:"split",label:"Split View",icon:"◫",active:m,toggle:()=>{m||p(!1),x(P=>!P)},color:"#8A5898"},{key:"inspect",label:"Inspect",icon:"⊙",active:y,toggle:()=>{g(P=>!P),y&&S(null)},color:"#C4905A"}].map((P,z)=>V.jsxs("button",{onClick:P.toggle,className:"zbtn dock-item",title:`${P.label}${P.active?" (click to disable)":""}`,style:{animationDelay:`${.06+z*.05}s`,width:r?44:150,height:36,padding:r?0:"0 12px",borderRadius:8,border:`1px solid ${P.active?P.color:"rgba(248,238,216,0.18)"}`,background:P.active?P.color:"rgba(18,12,6,0.4)",color:P.active?"#fff":"rgba(248,238,216,0.8)",fontSize:r?16:11,fontFamily:"'DM Sans', sans-serif",letterSpacing:"0.04em",cursor:"pointer",display:"flex",alignItems:"center",justifyContent:r?"center":"flex-start",gap:8,fontWeight:P.active?500:400},children:[V.jsx("span",{style:{fontSize:14},children:P.icon}),!r&&V.jsx("span",{children:P.label})]},P.key))}),e&&!r&&!m&&V.jsxs("div",{className:"slider-in",style:{position:"absolute",bottom:28,left:"50%",transform:"translateX(-50%)",width:340,padding:"10px 18px",background:"rgba(18,12,6,0.82)",borderRadius:12,border:"1px solid rgba(248,238,216,0.12)",backdropFilter:"blur(14px)",zIndex:15,fontFamily:"'DM Sans', sans-serif"},children:[V.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:6},children:[V.jsx("span",{style:{fontSize:10,letterSpacing:"0.12em",textTransform:"uppercase",color:"rgba(248,238,216,0.5)"},children:"Circadian Light"}),V.jsxs("span",{style:{fontSize:12,color:"#F8EED8",fontVariantNumeric:"tabular-nums"},children:[String(Math.floor(T)).padStart(2,"0"),":",String(Math.floor(T%1*60)).padStart(2,"0")]})]}),V.jsx("input",{type:"range",min:0,max:24,step:.25,value:T,onChange:P=>C(parseFloat(P.target.value)),disabled:_,style:{width:"100%",accentColor:"#C4905A",cursor:_?"not-allowed":"pointer",opacity:_?.4:1}}),V.jsxs("div",{style:{display:"flex",justifyContent:"space-between",fontSize:9,color:"rgba(248,238,216,0.35)",marginTop:2},children:[V.jsx("span",{children:"00"}),V.jsx("span",{children:"06"}),V.jsx("span",{children:"12"}),V.jsx("span",{children:"18"}),V.jsx("span",{children:"24"})]})]})]})}function eE({inspectedItem:r,setInspectedItem:e,isMobile:n}){const[s,a]=St.useState(!1);if(St.useEffect(()=>{r?a(!0):setTimeout(()=>a(!1),250)},[r]),!s&&!r)return null;const l=!!r;return V.jsxs(V.Fragment,{children:[V.jsx("div",{onClick:()=>e(null),style:{position:"absolute",inset:0,background:"rgba(0, 0, 0, 0.45)",backdropFilter:"blur(8px)",zIndex:39,opacity:l?1:0,transition:"opacity 0.25s ease-in-out"}}),V.jsxs("div",{style:{position:"absolute",left:"50%",top:"50%",transform:`translate(-50%, -50%) scale(${l?1:.96})`,opacity:l?1:0,transition:"all 0.3s cubic-bezier(0.16, 1, 0.3, 1)",width:n?"calc(100% - 40px)":480,maxWidth:"100%",maxHeight:"85vh",overflowY:"auto",background:"linear-gradient(160deg, rgba(35,40,45,0.95) 0%, rgba(15,18,22,0.98) 100%)",borderRadius:24,padding:"32px",border:"1px solid rgba(255,255,255,0.1)",boxShadow:"0 30px 60px rgba(0,0,0,0.8), inset 0 1px 0 rgba(255,255,255,0.1)",zIndex:40},children:[V.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"flex-start",marginBottom:24},children:[V.jsxs("div",{children:[V.jsxs("div",{style:{fontSize:10,letterSpacing:"0.2em",textTransform:"uppercase",color:"#A0B0C0",fontWeight:600,display:"flex",alignItems:"center",gap:8},children:[V.jsx("span",{style:{width:8,height:8,borderRadius:"50%",background:"#4ADE80",boxShadow:"0 0 10px rgba(74,222,128,0.5)"}}),"Material Details"]}),V.jsx("div",{style:{fontFamily:"'Cormorant Garamond', serif",fontSize:28,color:"#FFFFFF",marginTop:6,lineHeight:1.1},children:r==null?void 0:r.name})]}),V.jsx("button",{onClick:()=>e(null),onMouseEnter:u=>{u.currentTarget.style.background="rgba(255,255,255,0.15)",u.currentTarget.style.transform="scale(1.05)"},onMouseLeave:u=>{u.currentTarget.style.background="rgba(255,255,255,0.05)",u.currentTarget.style.transform="scale(1)"},style:{border:"1px solid rgba(255,255,255,0.1)",background:"rgba(255,255,255,0.05)",color:"#FFFFFF",borderRadius:"50%",width:36,height:36,fontSize:18,cursor:"pointer",display:"flex",alignItems:"center",justifyContent:"center",transition:"all 0.2s ease"},children:"×"})]}),(r==null?void 0:r.dim)&&V.jsxs("div",{style:{fontSize:13,color:"rgba(255,255,255,0.5)",fontFamily:"'DM Sans', sans-serif",marginBottom:24,paddingBottom:16,borderBottom:"1px solid rgba(255,255,255,0.08)"},children:["Dimensions: ",V.jsx("span",{style:{color:"#E0E0E0",marginLeft:8},children:r.dim})]}),V.jsx("div",{style:{display:"grid",gridTemplateColumns:"1fr 1fr",gap:16,fontFamily:"'DM Sans', sans-serif"},children:r==null?void 0:r.specs.map((u,f)=>V.jsxs("div",{style:{padding:"12px 16px",background:"linear-gradient(180deg, rgba(255,255,255,0.06) 0%, rgba(255,255,255,0.01) 100%)",borderRadius:12,border:"1px solid rgba(255,255,255,0.06)",boxShadow:"0 4px 12px rgba(0,0,0,0.2)"},children:[V.jsx("div",{style:{fontSize:9,letterSpacing:"0.1em",textTransform:"uppercase",color:"rgba(255,255,255,0.4)"},children:u[0]}),V.jsx("div",{style:{fontSize:14,color:"#FFFFFF",marginTop:4,fontWeight:500},children:u[1]})]},f))}),(r==null?void 0:r.note)&&V.jsxs("div",{style:{marginTop:24,padding:"16px 20px",background:"linear-gradient(90deg, rgba(74,222,128,0.1) 0%, rgba(74,222,128,0.01) 100%)",borderLeft:"3px solid #4ADE80",borderRadius:"0 12px 12px 0",fontSize:13,fontStyle:"italic",color:"rgba(255,255,255,0.85)",fontFamily:"'DM Sans', sans-serif",lineHeight:1.5},children:['"',r.note,'"']})]})]})}function tE({isMobile:r,loaded:e,loadingProgress:n,activeZone:s,hovered:a,showHint:l,splitScreen:u,guidedTour:f,tourZoneIndex:p,setGuidedTour:m,comparisonMode:x,idlePrompt:y,showWelcome:g,showHelp:S,tutorialStep:T,inspectorMode:C,patientSimActive:_,occupancy:v,tourRef:b}){return V.jsxs(V.Fragment,{children:[V.jsxs("div",{style:{position:"absolute",top:0,left:0,right:0,padding:r?"16px 16px 50px":"20px 28px 60px",background:"linear-gradient(180deg, rgba(18,12,6,0.82) 0%, transparent 100%)",display:"flex",alignItems:"flex-start",justifyContent:"space-between",pointerEvents:"none"},children:[V.jsxs("div",{className:e?"fade-up":"",style:{opacity:e?1:0,maxWidth:r?"calc(100% - 60px)":"auto"},children:[V.jsx("div",{style:{fontFamily:"'Cormorant Garamond', serif",fontSize:r?18:23,fontWeight:600,color:"#F8EED8",letterSpacing:"-0.01em",lineHeight:1.1},children:"Integrated Modular Healing Space"}),V.jsx("div",{style:{fontFamily:"'DM Sans', sans-serif",fontSize:r?8:10,letterSpacing:"0.16em",textTransform:"uppercase",color:"rgba(248,238,216,0.5)",marginTop:5},children:"3D Spatial Prototype · Hospital Waiting Environment · Team 142"})]}),!r&&V.jsxs("div",{style:{fontFamily:"'DM Sans', sans-serif",fontSize:10,color:"rgba(248,238,216,0.38)",textAlign:"right",lineHeight:1.8,letterSpacing:"0.04em"},children:["300 m² floor plate",V.jsx("br",{}),"Capacity: 40–60 persons",V.jsx("br",{}),"Scale approx. 1:50"]})]}),l&&!s&&!r&&V.jsxs("div",{style:{position:"absolute",bottom:28,left:"50%",transform:"translateX(-50%)",background:"rgba(16,10,4,0.82)",color:"rgba(248,238,216,0.7)",padding:"10px 24px",borderRadius:30,fontFamily:"'DM Sans'",fontSize:11,letterSpacing:"0.05em",backdropFilter:"blur(12px)",border:"1px solid rgba(248,238,216,0.1)",pointerEvents:"none",display:"flex",gap:22},children:[V.jsx("span",{children:"🖱 Drag to orbit"}),V.jsx("span",{children:"⚲ Scroll to zoom"}),V.jsx("span",{children:"Click zones"}),V.jsx("span",{children:"Press H for help"})]}),l&&!s&&r&&V.jsx("div",{style:{position:"absolute",bottom:145,left:"50%",transform:"translateX(-50%)",background:"rgba(16,10,4,0.82)",color:"rgba(248,238,216,0.7)",padding:"10px 20px",borderRadius:30,fontFamily:"'DM Sans'",fontSize:10,letterSpacing:"0.05em",backdropFilter:"blur(12px)",border:"1px solid rgba(248,238,216,0.1)",pointerEvents:"none",textAlign:"center",maxWidth:"calc(100% - 32px)"},children:V.jsx("span",{children:"Swipe to explore · Tap zones · Press ? for help"})}),!r&&V.jsxs("div",{style:{position:"absolute",bottom:28,right:26,fontFamily:"'DM Sans'",fontSize:9,color:"rgba(248,238,216,0.32)",textAlign:"center",lineHeight:1.9,letterSpacing:"0.1em"},children:[V.jsx("div",{style:{fontSize:20,opacity:.35},children:"⊕"}),"N"]}),!r&&V.jsx("div",{style:{position:"absolute",bottom:78,left:"50%",transform:"translateX(-50%)",display:"flex",gap:8,alignItems:"center",pointerEvents:"none"},children:Kt.map(L=>V.jsx("div",{style:{width:(s==null?void 0:s.id)===L.id?20:6,height:6,borderRadius:3,background:(s==null?void 0:s.id)===L.id?L.accent:"rgba(248,238,216,0.22)",transition:"all 0.35s cubic-bezier(.4,0,.2,1)"}},L.id))}),_&&!r&&!u&&V.jsxs("div",{className:"panel-in",style:{position:"absolute",top:150,left:26,width:220,padding:16,background:"rgba(18,12,6,0.9)",borderRadius:12,border:"1px solid rgba(74,138,88,0.4)",backdropFilter:"blur(14px)",zIndex:15,fontFamily:"'DM Sans', sans-serif"},children:[V.jsxs("div",{style:{fontSize:9,letterSpacing:"0.14em",textTransform:"uppercase",color:"rgba(74,138,88,0.9)",marginBottom:10,display:"flex",alignItems:"center",gap:6},children:[V.jsx("span",{style:{width:6,height:6,borderRadius:3,background:"#4A8A58",display:"inline-block",animation:"pulse 1.5s infinite"}}),"Live Occupancy"]}),Kt.map(L=>{const P=v[L.id]||0;return V.jsxs("div",{style:{marginBottom:8},children:[V.jsxs("div",{style:{display:"flex",justifyContent:"space-between",fontSize:11,color:"rgba(248,238,216,0.8)",marginBottom:3},children:[V.jsxs("span",{children:[L.icon," ",L.label.split(" ")[0]]}),V.jsx("span",{style:{color:L.accent,fontWeight:500},children:P})]}),V.jsx("div",{style:{height:4,background:"rgba(248,238,216,0.08)",borderRadius:2,overflow:"hidden"},children:V.jsx("div",{style:{height:"100%",width:`${Math.min(100,P*25)}%`,background:L.accent,transition:"width 0.4s"}})})]},L.id)}),V.jsx("div",{style:{fontSize:9,color:"rgba(248,238,216,0.4)",marginTop:10,paddingTop:8,borderTop:"1px solid rgba(248,238,216,0.08)"},children:"8 simulated patients · stress-adaptive routing"})]}),a&&!s&&!C&&V.jsxs("div",{style:{position:"absolute",top:r?108:120,left:"50%",transform:"translateX(-50%)",padding:"5px 14px",borderRadius:14,background:"rgba(18,12,6,0.78)",border:`1px solid ${a.accent}66`,backdropFilter:"blur(10px)",fontFamily:"'DM Sans', sans-serif",fontSize:11,color:"rgba(248,238,216,0.85)",letterSpacing:"0.04em",display:"flex",alignItems:"center",gap:6,zIndex:12,pointerEvents:"none"},children:[V.jsx("span",{style:{color:a.accent},children:a.icon}),a.label,V.jsx("span",{style:{color:"rgba(248,238,216,0.35)",fontSize:10,marginLeft:4},children:"· click to enter"})]}),C&&V.jsx("div",{style:{position:"absolute",top:r?110:140,left:"50%",transform:"translateX(-50%)",padding:"8px 18px",borderRadius:16,background:"rgba(196,144,90,0.9)",color:"#fff",fontFamily:"'DM Sans'",fontSize:11,letterSpacing:"0.06em",zIndex:14,backdropFilter:"blur(12px)"},children:"⊙ Click a material surface (floor, beam, moss, acoustic panel)"}),u&&V.jsxs(V.Fragment,{children:[V.jsx("div",{style:{position:"absolute",top:r?120:150,left:"25%",transform:"translateX(-50%)",padding:"8px 20px",borderRadius:10,background:"rgba(60,70,85,0.92)",color:"#fff",fontFamily:"'DM Sans'",fontSize:r?10:12,letterSpacing:"0.12em",textTransform:"uppercase",fontWeight:500,zIndex:14,border:"1px solid rgba(255,255,255,0.18)"},children:"⊘ Typical Ward"}),V.jsx("div",{style:{position:"absolute",top:r?120:150,left:"75%",transform:"translateX(-50%)",padding:"8px 20px",borderRadius:10,background:"rgba(74,138,88,0.92)",color:"#fff",fontFamily:"'DM Sans'",fontSize:r?10:12,letterSpacing:"0.12em",textTransform:"uppercase",fontWeight:500,zIndex:14,border:"1px solid rgba(255,255,255,0.22)"},children:"✦ Healing Space"}),V.jsx("div",{style:{position:"absolute",top:0,bottom:0,left:"50%",width:2,background:"rgba(248,238,216,0.4)",zIndex:13}})]}),x&&V.jsxs("div",{style:{position:"absolute",top:r?110:140,left:"50%",transform:"translateX(-50%)",background:"rgba(60,70,85,0.92)",color:"#fff",padding:r?"10px 18px":"12px 26px",borderRadius:14,fontFamily:"'DM Sans', sans-serif",fontSize:r?10:12,letterSpacing:"0.08em",backdropFilter:"blur(12px)",border:"1px solid rgba(255,255,255,0.18)",textAlign:"center",zIndex:15,maxWidth:r?"calc(100% - 32px)":420,boxShadow:"0 10px 30px rgba(0,0,0,0.4)"},children:[V.jsx("div",{style:{fontSize:r?9:10,opacity:.65,textTransform:"uppercase",letterSpacing:"0.14em",marginBottom:3},children:"Baseline Reference"}),V.jsx("div",{style:{fontWeight:500},children:"Typical Hospital Waiting Room · Fluorescent, desaturated, no biophilic elements"})]}),f&&V.jsxs("div",{style:{position:"absolute",bottom:r?80:36,left:"50%",transform:"translateX(-50%)",display:"flex",flexDirection:"column",alignItems:"center",gap:10,zIndex:14,pointerEvents:"auto"},children:[V.jsxs("div",{style:{padding:"8px 20px",borderRadius:16,background:"rgba(16,10,4,0.88)",border:"1px solid rgba(85,114,196,0.5)",backdropFilter:"blur(12px)",display:"flex",alignItems:"center",gap:14,fontFamily:"'DM Sans'",fontSize:11,color:"rgba(248,238,216,0.85)",letterSpacing:"0.05em"},children:[V.jsx("span",{style:{color:"#5572C4"},children:"▶"}),V.jsxs("span",{children:["Guided Tour",p>=0?` · ${Kt[p].label}`:" · Starting"]}),V.jsx("span",{style:{color:"rgba(248,238,216,0.35)",fontSize:10},children:b?`${b.waypointIdx+1}/${b.waypoints.length}`:""}),V.jsx("button",{onClick:()=>m(!1),className:"zbtn",style:{padding:"4px 12px",borderRadius:12,border:"1px solid rgba(248,238,216,0.25)",background:"rgba(248,238,216,0.08)",color:"rgba(248,238,216,0.75)",fontSize:10,cursor:"pointer",fontFamily:"'DM Sans'"},children:"Exit Tour"})]}),V.jsx("div",{style:{display:"flex",gap:4,alignItems:"center"},children:Kt.map((L,P)=>V.jsx("div",{style:{width:p===P?18:6,height:6,borderRadius:3,background:p===P?L.accent:"rgba(248,238,216,0.2)",transition:"all 0.4s ease"}},L.id))})]}),y&&e&&!s&&!g&&!S&&!f&&T<0&&V.jsxs("div",{style:{position:"absolute",bottom:r?160:120,left:"50%",transform:"translateX(-50%)",display:"flex",flexDirection:"column",alignItems:"center",gap:8,pointerEvents:"none",animation:"idleBob 2s ease-in-out infinite",zIndex:12},children:[V.jsx("div",{style:{width:28,height:44,borderRadius:14,border:"2px solid rgba(248,238,216,0.35)",display:"flex",justifyContent:"center",paddingTop:8},children:V.jsx("div",{style:{width:4,height:10,borderRadius:2,background:"rgba(248,238,216,0.6)",animation:"fadeUp 1.2s ease-in-out infinite"}})}),V.jsx("span",{style:{fontFamily:"'DM Sans', sans-serif",fontSize:10,letterSpacing:"0.1em",textTransform:"uppercase",color:"rgba(248,238,216,0.4)"},children:"Scroll to explore"})]}),!e&&n<100&&V.jsxs("div",{style:{position:"absolute",inset:0,background:"#16100A",display:"flex",alignItems:"center",justifyContent:"center",flexDirection:"column",zIndex:100,transition:"opacity 0.5s"},children:[V.jsx("div",{style:{fontFamily:"'Cormorant Garamond', serif",fontSize:r?22:28,color:"#F8EED8",marginBottom:24},children:"Loading Healing Space"}),V.jsx("div",{style:{width:r?220:280,height:4,background:"rgba(248,238,216,0.1)",borderRadius:2,overflow:"hidden"},children:V.jsx("div",{style:{width:`${n}%`,height:"100%",background:"linear-gradient(90deg, #C4905A, #4A8A58, #5572C4, #8A5898)",transition:"width 0.3s ease"}})}),V.jsxs("div",{style:{fontFamily:"'DM Sans', sans-serif",fontSize:12,color:"rgba(248,238,216,0.5)",marginTop:16},children:[n,"%"]})]})]})}function nE({isMobile:r,comparisonMode:e,setComparisonMode:n,showHelp:s,setShowHelp:a,onTutorialAction:l,tutorialHighlight:u}){const f=u==="comparison";return V.jsxs("div",{style:{position:"absolute",top:r?16:90,right:r?16:22,display:"flex",gap:8,zIndex:f?45:30,pointerEvents:"auto"},children:[V.jsx("button",{onClick:()=>{n(!e),l&&l("toggle_comparison")},className:"zbtn",style:{height:40,padding:"0 14px",borderRadius:20,border:`1.5px solid ${f?"rgba(196,144,90,0.8)":e?"#C4905A":"rgba(248,238,216,0.3)"}`,background:e?"#C4905A":"rgba(18,12,6,0.7)",color:e?"#fff":"rgba(248,238,216,0.8)",fontSize:r?10:11,cursor:"pointer",backdropFilter:"blur(12px)",fontFamily:"'DM Sans'",letterSpacing:"0.04em",display:"flex",alignItems:"center",gap:6,...f?{animation:"tutorialGlow 2s ease-in-out infinite"}:{}},title:"Compare to typical waiting room",children:e?"✨ Healing View":"⊘ Standard View"}),V.jsx("button",{onClick:()=>a(!s),className:"zbtn",style:{width:40,height:40,borderRadius:"50%",border:`1.5px solid ${s?"#5572C4":"rgba(248,238,216,0.3)"}`,background:s?"#5572C4":"rgba(18,12,6,0.7)",color:"rgba(248,238,216,0.8)",fontSize:18,cursor:"pointer",backdropFilter:"blur(12px)",display:"flex",alignItems:"center",justifyContent:"center"},title:"Help (press H or ?)",children:"?"})]})}function iE({showHelp:r,setShowHelp:e,isMobile:n,setTutorialStep:s,setWelcomePhase:a}){return r?V.jsxs("div",{className:"fade-up",style:{position:"absolute",top:n?70:90,right:n?16:24,width:280,maxWidth:"calc(100vw - 32px)",background:"linear-gradient(160deg, rgba(22,16,10,0.95) 0%, rgba(12,8,4,0.98) 100%)",borderRadius:20,padding:"24px",border:"1px solid rgba(196,144,90,0.3)",boxShadow:"0 20px 50px rgba(0,0,0,0.7), inset 0 1px 0 rgba(255,255,255,0.05)",backdropFilter:"blur(20px)",zIndex:50,pointerEvents:"auto"},children:[V.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"flex-start",marginBottom:20},children:[V.jsx("div",{style:{fontFamily:"'Cormorant Garamond', serif",fontSize:24,color:"#F8EED8",lineHeight:1.1},children:"Controls & Help"}),V.jsx("button",{onClick:()=>e(!1),onMouseEnter:l=>{l.currentTarget.style.background="rgba(196,144,90,0.15)",l.currentTarget.style.transform="scale(1.1)"},onMouseLeave:l=>{l.currentTarget.style.background="rgba(196,144,90,0.05)",l.currentTarget.style.transform="scale(1)"},style:{border:"1px solid rgba(196,144,90,0.2)",background:"rgba(196,144,90,0.05)",color:"#F8EED8",borderRadius:"50%",width:32,height:32,fontSize:16,cursor:"pointer",display:"flex",alignItems:"center",justifyContent:"center",transition:"all 0.2s ease",marginTop:-4,marginRight:-4},children:"×"})]}),V.jsxs("div",{style:{display:"grid",gridTemplateColumns:"auto 1fr",gap:"12px 14px",fontFamily:"'DM Sans'",fontSize:12,color:"rgba(248,238,216,0.75)"},children:[V.jsx("span",{style:{color:"#8FA8F0",fontWeight:500},children:"🖱 L-Click + Drag"})," ",V.jsx("span",{children:"Orbit camera"}),V.jsx("span",{style:{color:"#8FA8F0",fontWeight:500},children:"🖱 R-Click + Drag"})," ",V.jsx("span",{children:"Pan camera"}),V.jsx("span",{style:{color:"#8FA8F0",fontWeight:500},children:"⚲ Scroll"})," ",V.jsx("span",{children:"Zoom in/out"}),V.jsx("span",{style:{color:"#8FA8F0",fontWeight:500},children:"📱 Pinch/Swipe"})," ",V.jsx("span",{children:"Mobile controls"}),V.jsx("span",{style:{color:"#C4905A",fontWeight:500},children:"⌨️ [ H ] or [ ? ]"})," ",V.jsx("span",{children:"Toggle this help"}),V.jsx("span",{style:{color:"#C4905A",fontWeight:500},children:"⌨️ [ C ]"})," ",V.jsx("span",{children:"Toggle comparison"}),V.jsx("span",{style:{color:"#C4905A",fontWeight:500},children:"⌨️ [ T ]"})," ",V.jsx("span",{children:"Toggle tools panel"})]}),V.jsx("div",{style:{marginTop:24,paddingTop:16,borderTop:"1px solid rgba(248,238,216,0.1)"},children:V.jsxs("button",{onClick:()=>{e(!1),s(0),a("done")},onMouseEnter:l=>{l.currentTarget.style.background="rgba(85,114,196,0.25)"},onMouseLeave:l=>{l.currentTarget.style.background="rgba(85,114,196,0.15)"},style:{padding:"10px 0",width:"100%",borderRadius:10,background:"rgba(85,114,196,0.15)",border:"1px solid rgba(85,114,196,0.4)",color:"#A0B8FF",fontSize:12,fontWeight:500,fontFamily:"'DM Sans'",cursor:"pointer",transition:"all 0.2s ease",display:"flex",alignItems:"center",justifyContent:"center",gap:8},children:[V.jsx("span",{style:{fontSize:10},children:"▶"})," Replay Interactive Tutorial"]})})]}):null}function rE(){var G;const r=St.useRef(null),e=St.useRef({}),[n,s]=St.useState(null),[a,l]=St.useState(!0),[u,f]=St.useState(!1),[p,m]=St.useState(null),[x,y]=St.useState(!1),[g,S]=St.useState(!1),[T,C]=St.useState(0),[_,v]=St.useState(!1),[b,L]=St.useState(!1),[P,z]=St.useState(!1),[D,k]=St.useState(12),[w,I]=St.useState(!1),[j,O]=St.useState(-1),[Y,le]=St.useState(!1),[ge,W]=St.useState(!1),[ne,$]=St.useState(null),[J,fe]=St.useState(!1),[he,F]=St.useState(!1),[ie,We]=St.useState({}),[Fe,Xe]=St.useState(!0),[ce,Ae]=St.useState("intro"),[ye,Ge]=St.useState(-1),[nt,lt]=St.useState(!1),Nt=St.useRef(null),pt=St.useCallback(pe=>{Ge(N=>N>=0&&yn[N].requiredAction===pe?N+1:N)},[]),bt=St.useCallback(pe=>{if((n==null?void 0:n.id)===pe.id){const dt=e.current;dt.isOrbit=!0,dt.tPos&&dt.tLookAt&&(dt.tPos.set(0,7.5,15.5),dt.tLookAt.set(0,1,0)),s(null),m(null);return}const N=e.current;N.isOrbit=!1,N.tPos&&N.tLookAt&&(N.tPos.set(pe.camPos[0],pe.camPos[1],pe.camPos[2]),N.tLookAt.set(pe.lookAt[0],pe.lookAt[1],pe.lookAt[2])),s(pe),l(!1)},[n]),Ut=St.useCallback(()=>{const pe=e.current;pe.isOrbit=!0,pe.tPos&&pe.tLookAt&&(pe.tPos.set(0,7.5,15.5),pe.tLookAt.set(0,1,0)),s(null),m(null)},[]),_t=St.useRef(bt),Bt=St.useRef(Ut);St.useEffect(()=>{_t.current=bt,Bt.current=Ut});const Gt=St.useCallback(pe=>{if(!n)return;const N=Kt.findIndex(Oe=>Oe.id===n.id),dt=Kt[(N+pe+Kt.length)%Kt.length];bt(dt)},[n,bt]);if(St.useEffect(()=>{e.current.heatmapMode=P},[P]),St.useEffect(()=>{e.current.inspectorMode=ge},[ge]),St.useEffect(()=>{e.current.splitScreen=Y},[Y]),St.useEffect(()=>{const pe=e.current.animRefs;pe!=null&&pe.patientGroup&&(pe.patientGroup.visible=J,e.current.patientSimActive=J,J||We({}))},[J]),St.useEffect(()=>{e.current.guidedTour=w,w?(e.current.tour={startTime:0,waypointIdx:0,segmentStart:0,started:!1,fromPos:new Q(0,7.5,15.5),fromLookAt:new Q(0,1,0),waypoints:YM},e.current.isOrbit=!1,s(null)):(e.current.tour=null,Ut())},[w,Ut]),St.useEffect(()=>{const pe=e.current.animRefs;if(!pe||!pe.sun||b)return;const N=D,dt=Math.max(0,Math.min(1,(N-6)/12)),Oe=dt*Math.PI,Ct=-12+dt*24,R=Math.sin(Oe)*14+2,M=10-dt*4;pe.sun.position.set(Ct,R,M);let K,_e,Me,be,Le,me;if(N<6||N>20?(K=2241354,_e=.05,Me=1712176,be=.2,Le=660520,me=.1):N<8?(K=16758904,_e=.6,Me=16767920,be=.35,Le=16754816,me=.8):N<17?(K=16772560,_e=1.05,Me=16774628,be=.45,Le=8965375,me=.6):N<19?(K=16750168,_e=.8,Me=16764048,be=.4,Le=16744280,me=.9):(K=6967440,_e=.25,Me=4866144,be=.28,Le=3813464,me=.3),pe.sun.color.setHex(K),pe.sun.intensity=_e,pe.ambient.color.setHex(Me),pe.ambient.intensity=be,pe.skyMat){const Be=new Pt(Le);Be.lerp(new Pt(16777215),1-Math.min(1,me)),pe.skyMat.color.copy(Be)}const Se=N<7||N>18?1:0;e.current.nightBoost=Se},[D,b]),St.useEffect(()=>{var N,dt,Oe;const pe=e.current.animRefs;!pe||!pe.ambient||(b?(e.current.comparisonMode=!0,pe.ambient.color.setHex(15398143),pe.ambient.intensity=.95,pe.sun.color.setHex(15791871),pe.sun.intensity=.6,pe.fillLight.intensity=.15,(N=pe.accentLights)==null||N.forEach(Ct=>{Ct.intensity=0}),(dt=pe.pendants)==null||dt.forEach(Ct=>{Ct.pl.intensity=0}),e.current.scene&&(e.current.scene.background=new Pt(14212836),e.current.scene.fog&&e.current.scene.fog.color.setHex(14212836))):(e.current.comparisonMode=!1,pe.ambient.color.setHex(16774628),pe.ambient.intensity=.45,pe.sun.color.setHex(16772560),pe.sun.intensity=1.05,pe.fillLight.intensity=.35,(Oe=pe.accentLights)==null||Oe.forEach((Ct,R)=>{Ct.color.setHex(Kt[R].hex),Ct.intensity=1.4}),e.current.scene&&(e.current.scene.background=new Pt(15589576),e.current.scene.fog&&e.current.scene.fog.color.setHex(15589576))))},[b]),St.useEffect(()=>{e.current.tutorialStep=ye},[ye]),St.useEffect(()=>{if(ye<0)return;const pe=yn[ye];if(!pe)return;const N=e.current;pe.cam?(N.isOrbit=!1,N.tPos&&N.tLookAt&&(N.tPos.set(pe.cam.pos[0],pe.cam.pos[1],pe.cam.pos[2]),N.tLookAt.set(pe.cam.lookAt[0],pe.cam.lookAt[1],pe.cam.lookAt[2]))):(ye===0||!pe.cam)&&(N.isOrbit=!0,N.tPos&&N.tLookAt&&(N.tPos.set(0,7.5,15.5),N.tLookAt.set(0,1,0))),pe.highlight==="tools"&&F(!0)},[ye]),St.useEffect(()=>{const pe=()=>{lt(!1),Nt.current&&clearTimeout(Nt.current),Nt.current=setTimeout(()=>lt(!0),5e3)};return pe(),window.addEventListener("mousemove",pe),window.addEventListener("mousedown",pe),window.addEventListener("wheel",pe),window.addEventListener("touchstart",pe),window.addEventListener("keydown",pe),()=>{Nt.current&&clearTimeout(Nt.current),window.removeEventListener("mousemove",pe),window.removeEventListener("mousedown",pe),window.removeEventListener("wheel",pe),window.removeEventListener("touchstart",pe),window.removeEventListener("keydown",pe)}},[]),St.useEffect(()=>{const pe=()=>{v(window.innerWidth<=768||"ontouchstart"in window)};return pe(),window.addEventListener("resize",pe),()=>window.removeEventListener("resize",pe)},[]),St.useEffect(()=>{const pe=r.current;if(!pe)return;const N=e.current;N.animRefs={};try{const xe=document.createElement("canvas");if(!(xe.getContext("webgl")||xe.getContext("experimental-webgl"))){S(!0);return}}catch{S(!0);return}C(10);const dt=window.innerWidth<=768||"ontouchstart"in window;N.renderer=new jM({antialias:!dt,powerPreference:"high-performance"}),N.renderer.setPixelRatio(Math.min(window.devicePixelRatio,dt?1.5:2)),N.renderer.setSize(pe.clientWidth,pe.clientHeight),N.renderer.shadowMap.enabled=!dt,dt||(N.renderer.shadowMap.type=na),N.renderer.toneMapping=df,N.renderer.toneMappingExposure=1.1,N.renderer.outputColorSpace=ri,pe.appendChild(N.renderer.domElement),C(30),N.scene=new Tv,N.scene.background=new Pt(15589576),N.scene.fog=new Mf(15589576,18,30),N.camera=new hi(54,pe.clientWidth/pe.clientHeight,.1,80),N.camera.position.set(0,7.5,15.5),C(50),N.clickables=qM(N.scene,N.animRefs);const Oe=[5929630,13144688,10386120,7383184,13138590,10399344,8036040,13147738],Ct=[],R=new qi;R.visible=!1,N.scene.add(R);for(let xe=0;xe<8;xe++){const qe=new qi,Te=Oe[xe],Ee=new Pe(En(.14,.18,.7,8),ut(Te,.85));Ee.position.y=.35,Ee.castShadow=!0,qe.add(Ee);const et=new Pe(ta(.11,10,8),ut(15253656,.85));et.position.y=.82,et.castShadow=!0,qe.add(et);const xt=-6+Math.random()*12;qe.position.set(xt,0,6.2),R.add(qe),Ct.push({group:qe,state:"entering",target:new Q(0,0,-5),waypoint:null,zoneId:null,dwellEnd:0,speed:.012+Math.random()*.008,stressLevel:.7+Math.random()*.3,bobPhase:Math.random()*Math.PI*2,spawnDelay:xe*600,spawnTime:0})}N.animRefs.patients=Ct,N.animRefs.patientGroup=R,C(70),N.orbit={theta:.38,phi:.58,radius:15.5},N.tOrbit={theta:.38,phi:.58,radius:15.5},N.isOrbit=!0,N.tPos=new Q(0,7.5,15.5),N.tLookAt=new Q(0,1,0),N.cLookAt=new Q(0,1,0);const M=new Kv,K=new kt,_e=(xe,qe)=>{const Te=pe.getBoundingClientRect();K.x=(xe-Te.left)/Te.width*2-1,K.y=-((qe-Te.top)/Te.height)*2+1,M.setFromCamera(K,N.camera);const Ee=M.intersectObjects(N.clickables.map(et=>et.mesh));return Ee.length?N.clickables.find(et=>et.mesh===Ee[0].object):null};let Me=!1,be=!1,Le=0,me=0,Se=0,Be=0;const je=xe=>{Me=!0,be=!1,Le=xe.clientX,me=xe.clientY,l(!1),pe.style.cursor="grabbing"},Ue=xe=>{if(!Me){const Ee=_e(xe.clientX,xe.clientY);m(Ee?Kt.find(et=>et.id===Ee.zoneId):null),pe.style.cursor=Ee?"pointer":N.guidedTour?"default":"grab";return}const qe=xe.clientX-Le,Te=xe.clientY-me;if((Math.abs(qe)>2||Math.abs(Te)>2)&&(be=!0),!N.guidedTour){if(N.isOrbit){if(N.tutorialStep>=0){const Ee=yn[N.tutorialStep];if(Ee.requiredAction==="orbit")Se+=Math.abs(qe)+Math.abs(Te),Se>80&&pt("orbit");else if(Ee.requiredAction)return}if(xe.buttons===2||xe.buttons===1&&(xe.ctrlKey||xe.metaKey)){const Ee=N.tOrbit.radius*.0015,et=Math.sin(N.orbit.theta+Math.PI/2),xt=Math.cos(N.orbit.theta+Math.PI/2),Wt=Math.sin(N.orbit.theta),Jt=Math.cos(N.orbit.theta);N.tLookAt.x-=et*qe*Ee+Wt*Te*Ee,N.tLookAt.z-=xt*qe*Ee+Jt*Te*Ee}else N.tOrbit.theta-=qe*.005,N.tOrbit.phi=Math.max(.01,Math.min(Math.PI/2-.05,N.tOrbit.phi+Te*.005))}}Le=xe.clientX,me=xe.clientY},Ie=()=>{Me=!1,pe.style.cursor="grab"},ft=xe=>{if(N.tutorialStep>=0){const qe=yn[N.tutorialStep];if(qe.requiredAction==="zoom")Be+=Math.abs(xe.deltaY),Be>150&&pt("zoom");else if(qe.requiredAction)return}N.isOrbit&&(N.tOrbit.radius=Math.max(5,Math.min(30,N.tOrbit.radius+xe.deltaY*.015)))},ht=xe=>{var Ee;if(be||N.tutorialStep>=0&&yn[N.tutorialStep].requiredAction)return;const qe=_e(xe.clientX,xe.clientY);if(!qe)return;if(N.inspectorMode&&((Ee=qe.mesh.userData)!=null&&Ee.material)){const et=qe.mesh.userData.material;$(xt=>(xt==null?void 0:xt.name)===et.name?null:et);return}const Te=Kt.find(et=>et.id===qe.zoneId);Te&&_t.current(Te)};let vt=null,B=0;const Ne=xe=>{if(xe.touches.length===1)vt=xe.touches[0],l(!1);else if(xe.touches.length===2){const qe=xe.touches[0].clientX-xe.touches[1].clientX,Te=xe.touches[0].clientY-xe.touches[1].clientY;B=Math.sqrt(qe*qe+Te*Te)}},ve=xe=>{if(xe.touches.length===1&&vt){const qe=xe.touches[0],Te=qe.clientX-vt.clientX,Ee=qe.clientY-vt.clientY;N.tutorialStep>=0&&yn[N.tutorialStep].requiredAction==="orbit"&&(Se+=Math.abs(Te)+Math.abs(Ee),Se>80&&pt("orbit")),N.tOrbit.theta-=Te*.005,N.tOrbit.phi=Math.max(.01,Math.min(Math.PI/2-.05,N.tOrbit.phi+Ee*.005)),vt=qe,xe.preventDefault()}else if(xe.touches.length===2&&B>0){const qe=xe.touches[0].clientX-xe.touches[1].clientX,Te=xe.touches[0].clientY-xe.touches[1].clientY,Ee=Math.sqrt(qe*qe+Te*Te),et=B-Ee;N.tutorialStep>=0&&yn[N.tutorialStep].requiredAction==="zoom"&&(Be+=Math.abs(et),Be>60&&pt("zoom")),N.tOrbit.radius=Math.max(5,Math.min(30,N.tOrbit.radius+et*.02)),B=Ee,xe.preventDefault()}},ee=()=>{vt=null,B=0},Z=xe=>{},re=xe=>{xe.key==="Escape"&&(x?y(!1):ge?(W(!1),$(null)):N.guidedTour?I(!1):n&&Bt.current()),xe.key==="1"&&Kt[0]&&_t.current(Kt[0]),xe.key==="2"&&Kt[1]&&_t.current(Kt[1]),xe.key==="3"&&Kt[2]&&_t.current(Kt[2]),xe.key==="4"&&Kt[3]&&_t.current(Kt[3]),(xe.key==="r"||xe.key==="R")&&Bt.current(),(xe.key==="h"||xe.key==="H"||xe.key==="?")&&y(qe=>!qe),N.isOrbit&&(xe.key==="ArrowLeft"&&(N.tOrbit.theta-=.15),xe.key==="ArrowRight"&&(N.tOrbit.theta+=.15),xe.key==="ArrowUp"&&(N.tOrbit.phi=Math.max(.01,N.tOrbit.phi-.15)),xe.key==="ArrowDown"&&(N.tOrbit.phi=Math.min(Math.PI/2-.05,N.tOrbit.phi+.15)))};let we=0;const He=xe=>{N.frame=requestAnimationFrame(He);const qe=Math.min(.1,xe*.001-we);if(we=xe*.001,N.guidedTour&&N.tour){const Te=N.tour;Te.started||(Te.started=!0,Te.startTime=xe,Te.segmentStart=xe,Te.fromPos.copy(N.camera.position),Te.fromLookAt.copy(N.cLookAt));const Ee=Te.waypoints[Te.waypointIdx],et=(xe-Te.segmentStart)/1e3,xt=Math.min(1,et/Ee.dur),Wt=xt<.5?4*xt*xt*xt:1-Math.pow(-2*xt+2,3)/2,Jt=new Q(Ee.pos[0],Ee.pos[1],Ee.pos[2]),An=new Q(Ee.lookAt[0],Ee.lookAt[1],Ee.lookAt[2]);if(N.camera.position.lerpVectors(Te.fromPos,Jt,Wt),N.cLookAt.lerpVectors(Te.fromLookAt,An,Wt),N.camera.lookAt(N.cLookAt),Ee.zoneIdx!==N._lastTourZone&&(N._lastTourZone=Ee.zoneIdx,O(Ee.zoneIdx),Ee.zoneIdx>=0?s(Kt[Ee.zoneIdx]):s(null)),xt>=1){if(Te.waypointIdx++,Te.waypointIdx>=Te.waypoints.length){I(!1);return}Te.segmentStart=xe,Te.fromPos.copy(N.camera.position),Te.fromLookAt.copy(N.cLookAt)}}else{if(N.isOrbit){const Ee=1-Math.exp(-12*qe);N.orbit.theta+=(N.tOrbit.theta-N.orbit.theta)*Ee,N.orbit.phi+=(N.tOrbit.phi-N.orbit.phi)*Ee,N.orbit.radius+=(N.tOrbit.radius-N.orbit.radius)*Ee;const{theta:et,phi:xt,radius:Wt}=N.orbit;N.tPos.set(N.tLookAt.x+Wt*Math.sin(xt)*Math.sin(et),N.tLookAt.y+Wt*Math.cos(xt),N.tLookAt.z+Wt*Math.sin(xt)*Math.cos(et))}const Te=N.isOrbit?.12:.06;N.camera.position.lerp(N.tPos,Te),N.cLookAt.lerp(N.tLookAt,Te),N.camera.lookAt(N.cLookAt)}if(N.animRefs.pendants&&N.animRefs.pendants.forEach(Te=>{Te.pl.intensity=N.comparisonMode?0:1.1+Math.sin(we*1.1+Te.phase)*.12}),N.animRefs.plants&&N.animRefs.plants.forEach(Te=>{Te.mesh.position.y=Te.baseY+Math.sin(we*.55+Te.phase)*.018,Te.mesh.rotation.z=Math.sin(we*.4+Te.phase)*.025}),N.animRefs.water&&(N.animRefs.water.material.opacity=.75+Math.sin(we*1.8)*.06,N.animRefs.water.material.color.setHSL(.52,.5,.55+Math.sin(we*.9)*.04)),N.animRefs.screens&&N.animRefs.screens.forEach(Te=>{Te.isPl?Te.pl.intensity=.7+Math.sin(we*2.2+Te.phase)*.25:Te.isBar?Te.mat.emissiveIntensity=1.5+Math.sin(we*1.6+Te.phase)*.5:Te.mat&&(Te.mat.emissiveIntensity=.6+Math.sin(we*.8+Te.phase)*.15)}),N.animRefs.lampLight&&(N.animRefs.lampLight.intensity=N.comparisonMode?0:1.5+Math.sin(we*1.3)*.15),N.animRefs.heatmapDiscs&&N.animRefs.heatmapDiscs.forEach((Te,Ee)=>{const et=N.heatmapMode?.22:0;Te.material.opacity=et*(1+Math.sin(we*.9+Ee)*.35),Te.scale.setScalar(1+Math.sin(we*.7+Ee*.8)*.08)}),N.animRefs.patients&&N.patientSimActive){const Te={seating:0,biophilic:0,digital:0,calm:0,reception:0};N.animRefs.patients.forEach(Ee=>{if(Ee.spawnTime||(Ee.spawnTime=xe),xe-Ee.spawnTime<Ee.spawnDelay)return;const et=Ee.group,xt=(an,Fn)=>{if(Math.sign(an.x)===Math.sign(Fn.x)||an.x===0||Fn.x===0)return null;const gi=an.x/(an.x-Fn.x),xr=an.z+(Fn.z-an.z)*gi;return xr>-4.25&&xr<5.25?new Q(an.x>0?.5:-.5,0,5.8):null};!Ee.waypoint&&Ee.state!=="dwelling"&&(Ee.waypoint=xt(et.position,Ee.target));const Wt=Ee.waypoint||Ee.target,Jt=new Q().subVectors(Wt,et.position);Jt.y=0;const An=Jt.length();if(Ee.waypoint&&An<.35&&(Ee.waypoint=null),Ee.state==="dwelling"){if(et.position.y=Math.abs(Math.sin(we*2+Ee.bobPhase))*.02,xe>Ee.dwellEnd)if(Math.random()<.2)Ee.state="leaving",Ee.target.set(-6+Math.random()*12,0,7),Ee.zoneId=null;else{const an=Kt[Math.floor(Math.random()*Kt.length)];Ee.state="walking";const Fn=(Math.random()-.5)*1.5,gi=(Math.random()-.5)*1.5;Ee.target.set(an.pos[0]+Fn,0,an.pos[2]+gi),Ee.waypoint=null,Ee.zoneId=an.id,an.id==="calm"||an.id==="biophilic"?Ee.stressLevel=Math.max(.1,Ee.stressLevel-.25):an.id==="digital"&&(Ee.stressLevel=Math.max(.2,Ee.stressLevel-.1))}Ee.zoneId&&(Te[Ee.zoneId]=(Te[Ee.zoneId]||0)+1)}else An<.25?Ee.state==="leaving"?(Ee.group.position.set(-6+Math.random()*12,0,6.2),Ee.state="entering",Ee.target.set(0,0,-5),Ee.stressLevel=.7+Math.random()*.3):(Ee.state="dwelling",Ee.dwellEnd=xe+3e3+Math.random()*6e3):(Jt.normalize(),et.position.addScaledVector(Jt,Ee.speed*(1+(1-Ee.stressLevel)*.3)),et.rotation.y=Math.atan2(Jt.x,Jt.z),et.position.y=Math.abs(Math.sin(we*8+Ee.bobPhase))*.04);et.children[1].material.color.setHSL(.08+(1-Ee.stressLevel)*.2,.4,.65)}),(!N.lastOccUpdate||xe-N.lastOccUpdate>500)&&(N.lastOccUpdate=xe,We({...Te}))}if(N.splitScreen){const Te=pe.clientWidth,Ee=pe.clientHeight,et=Te/2;N.renderer.setScissorTest(!0);const xt=N.comparisonMode;pd(N.animRefs,!0),N.renderer.setScissor(0,0,et,Ee),N.renderer.setViewport(0,0,et,Ee),N.camera.aspect=et/Ee,N.camera.updateProjectionMatrix(),N.scene.background&&N.scene.background.setHex(14212836),N.renderer.render(N.scene,N.camera),pd(N.animRefs,!1),N.renderer.setScissor(et,0,et,Ee),N.renderer.setViewport(et,0,et,Ee),N.scene.background&&N.scene.background.setHex(15589576),N.renderer.render(N.scene,N.camera),N.renderer.setScissorTest(!1),N.renderer.setViewport(0,0,Te,Ee),N.camera.aspect=Te/Ee,N.camera.updateProjectionMatrix(),pd(N.animRefs,xt),N.scene.background&&N.scene.background.setHex(xt?14212836:15589576)}else N.renderer.render(N.scene,N.camera)};He(0),C(90),setTimeout(()=>{f(!0),C(100)},400),pe.addEventListener("mousedown",je),window.addEventListener("mousemove",Ue),window.addEventListener("mouseup",Ie),pe.addEventListener("click",ht),pe.addEventListener("wheel",ft,{passive:!0}),pe.addEventListener("touchstart",Ne,{passive:!0}),pe.addEventListener("touchmove",ve,{passive:!1}),pe.addEventListener("touchend",ee,{passive:!0}),window.addEventListener("keydown",re),window.addEventListener("keyup",Z);const $e=xe=>xe.preventDefault();pe.addEventListener("contextmenu",$e);const Ke=()=>{N.camera.aspect=pe.clientWidth/pe.clientHeight,N.camera.updateProjectionMatrix(),N.renderer.setSize(pe.clientWidth,pe.clientHeight)};return window.addEventListener("resize",Ke),()=>{cancelAnimationFrame(N.frame),pe.removeEventListener("mousedown",je),pe.removeEventListener("contextmenu",$e),window.removeEventListener("mousemove",Ue),window.removeEventListener("mouseup",Ie),pe.removeEventListener("click",ht),pe.removeEventListener("wheel",ft),pe.removeEventListener("touchstart",Ne),pe.removeEventListener("touchmove",ve),pe.removeEventListener("touchend",ee),window.removeEventListener("keydown",re),window.removeEventListener("keyup",Z),window.removeEventListener("resize",Ke),pe.contains(N.renderer.domElement)&&pe.removeChild(N.renderer.domElement),N.scene&&(N.scene.traverse(xe=>{xe.isMesh&&(xe.geometry&&xe.geometry.dispose(),xe.material&&(Array.isArray(xe.material)?xe.material.forEach(qe=>qe.dispose()):xe.material.dispose()))}),N.scene.clear()),N.renderer.dispose(),N.renderer.forceContextLoss()}},[]),g)return V.jsx("div",{style:{display:"flex",alignItems:"center",justifyContent:"center",width:"100vw",height:"100vh",background:"#16100A",color:"#F8EED8",fontFamily:"'DM Sans', sans-serif",textAlign:"center",padding:40},children:V.jsxs("div",{children:[V.jsx("div",{style:{fontSize:48,marginBottom:20},children:"⚠️"}),V.jsx("h1",{style:{fontSize:24,marginBottom:12},children:"WebGL Not Supported"}),V.jsx("p",{style:{color:"rgba(248,238,216,0.7)",maxWidth:400},children:"Your browser doesn't support WebGL, which is required for this 3D experience. Please try using a modern browser like Chrome, Firefox, or Safari."})]})});const Zt=ye>=0&&((G=yn[ye])==null?void 0:G.highlight)||null;return V.jsxs("div",{style:{position:"relative",width:"100vw",height:"100vh",overflow:"hidden",background:"#16100A"},children:[V.jsx("style",{children:`
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
      `}),V.jsx("div",{ref:r,style:{width:"100%",height:"100%",touchAction:"none"}}),V.jsx(tE,{isMobile:_,loaded:u,loadingProgress:T,activeZone:n,hovered:p,showHint:a,splitScreen:Y,guidedTour:w,tourZoneIndex:j,setGuidedTour:I,comparisonMode:b,idlePrompt:nt,showWelcome:Fe,showHelp:x,tutorialStep:ye,inspectorMode:ge,patientSimActive:J,occupancy:ie,tourRef:e.current.tour}),V.jsx(nE,{isMobile:_,comparisonMode:b,setComparisonMode:L,showHelp:x,setShowHelp:y,onTutorialAction:pt,tutorialHighlight:Zt}),u&&!Fe&&V.jsx($M,{activeZone:n,isMobile:_,handleZoom:pe=>{pt("click_zone"),_t.current(pe)},handleReset:Bt.current,tutorialHighlight:Zt}),u&&!Fe&&ye<0&&n&&!_&&V.jsx(KM,{displayZone:n,activeZone:n,isMobile:_,goToAdjacentZone:Gt}),V.jsx(ZM,{loaded:u,welcomePhase:ce,setWelcomePhase:Ae,setShowWelcome:Xe,setTutorialStep:Ge,isMobile:_}),V.jsx(JM,{tutorialStep:ye,setTutorialStep:Ge,handleReset:Bt.current,isMobile:_}),V.jsx(iE,{showHelp:x,setShowHelp:y,isMobile:_,setTutorialStep:Ge,setWelcomePhase:Ae}),V.jsx(QM,{isMobile:_,showTools:he,setShowTools:F,heatmapMode:P,setHeatmapMode:z,patientSimActive:J,setPatientSimActive:fe,guidedTour:w,setGuidedTour:I,splitScreen:Y,setSplitScreen:le,inspectorMode:ge,setInspectorMode:W,setInspectedItem:$,circadianTime:D,setCircadianTime:k,comparisonMode:b,onTutorialAction:pt,tutorialHighlight:Zt}),V.jsx(eE,{inspectedItem:ne,setInspectedItem:$,isMobile:_})]})}C_.createRoot(document.getElementById("root")).render(V.jsx(rE,{}));
