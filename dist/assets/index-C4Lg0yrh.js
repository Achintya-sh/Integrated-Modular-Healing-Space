(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))r(a);new MutationObserver(a=>{for(const c of a)if(c.type==="childList")for(const u of c.addedNodes)u.tagName==="LINK"&&u.rel==="modulepreload"&&r(u)}).observe(document,{childList:!0,subtree:!0});function n(a){const c={};return a.integrity&&(c.integrity=a.integrity),a.referrerPolicy&&(c.referrerPolicy=a.referrerPolicy),a.crossOrigin==="use-credentials"?c.credentials="include":a.crossOrigin==="anonymous"?c.credentials="omit":c.credentials="same-origin",c}function r(a){if(a.ep)return;a.ep=!0;const c=n(a);fetch(a.href,c)}})();var Cu={exports:{}},Xo={},Ru={exports:{}},At={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var $p;function x_(){if($p)return At;$p=1;var s=Symbol.for("react.element"),e=Symbol.for("react.portal"),n=Symbol.for("react.fragment"),r=Symbol.for("react.strict_mode"),a=Symbol.for("react.profiler"),c=Symbol.for("react.provider"),u=Symbol.for("react.context"),d=Symbol.for("react.forward_ref"),p=Symbol.for("react.suspense"),m=Symbol.for("react.memo"),x=Symbol.for("react.lazy"),S=Symbol.iterator;function _(O){return O===null||typeof O!="object"?null:(O=S&&O[S]||O["@@iterator"],typeof O=="function"?O:null)}var y={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},T=Object.assign,R={};function g(O,ie,Be){this.props=O,this.context=ie,this.refs=R,this.updater=Be||y}g.prototype.isReactComponent={},g.prototype.setState=function(O,ie){if(typeof O!="object"&&typeof O!="function"&&O!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,O,ie,"setState")},g.prototype.forceUpdate=function(O){this.updater.enqueueForceUpdate(this,O,"forceUpdate")};function v(){}v.prototype=g.prototype;function b(O,ie,Be){this.props=O,this.context=ie,this.refs=R,this.updater=Be||y}var I=b.prototype=new v;I.constructor=b,T(I,g.prototype),I.isPureReactComponent=!0;var P=Array.isArray,H=Object.prototype.hasOwnProperty,L={current:null},z={key:!0,ref:!0,__self:!0,__source:!0};function w(O,ie,Be){var Ge,ze={},re=null,Ee=null;if(ie!=null)for(Ge in ie.ref!==void 0&&(Ee=ie.ref),ie.key!==void 0&&(re=""+ie.key),ie)H.call(ie,Ge)&&!z.hasOwnProperty(Ge)&&(ze[Ge]=ie[Ge]);var U=arguments.length-2;if(U===1)ze.children=Be;else if(1<U){for(var N=Array(U),Ue=0;Ue<U;Ue++)N[Ue]=arguments[Ue+2];ze.children=N}if(O&&O.defaultProps)for(Ge in U=O.defaultProps,U)ze[Ge]===void 0&&(ze[Ge]=U[Ge]);return{$$typeof:s,type:O,key:re,ref:Ee,props:ze,_owner:L.current}}function D(O,ie){return{$$typeof:s,type:O.type,key:ie,ref:O.ref,props:O.props,_owner:O._owner}}function j(O){return typeof O=="object"&&O!==null&&O.$$typeof===s}function k(O){var ie={"=":"=0",":":"=2"};return"$"+O.replace(/[=:]/g,function(Be){return ie[Be]})}var q=/\/+/g;function de(O,ie){return typeof O=="object"&&O!==null&&O.key!=null?k(""+O.key):ie.toString(36)}function ve(O,ie,Be,Ge,ze){var re=typeof O;(re==="undefined"||re==="boolean")&&(O=null);var Ee=!1;if(O===null)Ee=!0;else switch(re){case"string":case"number":Ee=!0;break;case"object":switch(O.$$typeof){case s:case e:Ee=!0}}if(Ee)return Ee=O,ze=ze(Ee),O=Ge===""?"."+de(Ee,0):Ge,P(ze)?(Be="",O!=null&&(Be=O.replace(q,"$&/")+"/"),ve(ze,ie,Be,"",function(Ue){return Ue})):ze!=null&&(j(ze)&&(ze=D(ze,Be+(!ze.key||Ee&&Ee.key===ze.key?"":(""+ze.key).replace(q,"$&/")+"/")+O)),ie.push(ze)),1;if(Ee=0,Ge=Ge===""?".":Ge+":",P(O))for(var U=0;U<O.length;U++){re=O[U];var N=Ge+de(re,U);Ee+=ve(re,ie,Be,N,ze)}else if(N=_(O),typeof N=="function")for(O=N.call(O),U=0;!(re=O.next()).done;)re=re.value,N=Ge+de(re,U++),Ee+=ve(re,ie,Be,N,ze);else if(re==="object")throw ie=String(O),Error("Objects are not valid as a React child (found: "+(ie==="[object Object]"?"object with keys {"+Object.keys(O).join(", ")+"}":ie)+"). If you meant to render a collection of children, use an array instead.");return Ee}function W(O,ie,Be){if(O==null)return O;var Ge=[],ze=0;return ve(O,Ge,"","",function(re){return ie.call(Be,re,ze++)}),Ge}function ne(O){if(O._status===-1){var ie=O._result;ie=ie(),ie.then(function(Be){(O._status===0||O._status===-1)&&(O._status=1,O._result=Be)},function(Be){(O._status===0||O._status===-1)&&(O._status=2,O._result=Be)}),O._status===-1&&(O._status=0,O._result=ie)}if(O._status===1)return O._result.default;throw O._result}var Z={current:null},J={transition:null},_e={ReactCurrentDispatcher:Z,ReactCurrentBatchConfig:J,ReactCurrentOwner:L};function xe(){throw Error("act(...) is not supported in production builds of React.")}return At.Children={map:W,forEach:function(O,ie,Be){W(O,function(){ie.apply(this,arguments)},Be)},count:function(O){var ie=0;return W(O,function(){ie++}),ie},toArray:function(O){return W(O,function(ie){return ie})||[]},only:function(O){if(!j(O))throw Error("React.Children.only expected to receive a single React element child.");return O}},At.Component=g,At.Fragment=n,At.Profiler=a,At.PureComponent=b,At.StrictMode=r,At.Suspense=p,At.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=_e,At.act=xe,At.cloneElement=function(O,ie,Be){if(O==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+O+".");var Ge=T({},O.props),ze=O.key,re=O.ref,Ee=O._owner;if(ie!=null){if(ie.ref!==void 0&&(re=ie.ref,Ee=L.current),ie.key!==void 0&&(ze=""+ie.key),O.type&&O.type.defaultProps)var U=O.type.defaultProps;for(N in ie)H.call(ie,N)&&!z.hasOwnProperty(N)&&(Ge[N]=ie[N]===void 0&&U!==void 0?U[N]:ie[N])}var N=arguments.length-2;if(N===1)Ge.children=Be;else if(1<N){U=Array(N);for(var Ue=0;Ue<N;Ue++)U[Ue]=arguments[Ue+2];Ge.children=U}return{$$typeof:s,type:O.type,key:ze,ref:re,props:Ge,_owner:Ee}},At.createContext=function(O){return O={$$typeof:u,_currentValue:O,_currentValue2:O,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},O.Provider={$$typeof:c,_context:O},O.Consumer=O},At.createElement=w,At.createFactory=function(O){var ie=w.bind(null,O);return ie.type=O,ie},At.createRef=function(){return{current:null}},At.forwardRef=function(O){return{$$typeof:d,render:O}},At.isValidElement=j,At.lazy=function(O){return{$$typeof:x,_payload:{_status:-1,_result:O},_init:ne}},At.memo=function(O,ie){return{$$typeof:m,type:O,compare:ie===void 0?null:ie}},At.startTransition=function(O){var ie=J.transition;J.transition={};try{O()}finally{J.transition=ie}},At.unstable_act=xe,At.useCallback=function(O,ie){return Z.current.useCallback(O,ie)},At.useContext=function(O){return Z.current.useContext(O)},At.useDebugValue=function(){},At.useDeferredValue=function(O){return Z.current.useDeferredValue(O)},At.useEffect=function(O,ie){return Z.current.useEffect(O,ie)},At.useId=function(){return Z.current.useId()},At.useImperativeHandle=function(O,ie,Be){return Z.current.useImperativeHandle(O,ie,Be)},At.useInsertionEffect=function(O,ie){return Z.current.useInsertionEffect(O,ie)},At.useLayoutEffect=function(O,ie){return Z.current.useLayoutEffect(O,ie)},At.useMemo=function(O,ie){return Z.current.useMemo(O,ie)},At.useReducer=function(O,ie,Be){return Z.current.useReducer(O,ie,Be)},At.useRef=function(O){return Z.current.useRef(O)},At.useState=function(O){return Z.current.useState(O)},At.useSyncExternalStore=function(O,ie,Be){return Z.current.useSyncExternalStore(O,ie,Be)},At.useTransition=function(){return Z.current.useTransition()},At.version="18.3.1",At}var Zp;function ld(){return Zp||(Zp=1,Ru.exports=x_()),Ru.exports}/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Jp;function S_(){if(Jp)return Xo;Jp=1;var s=ld(),e=Symbol.for("react.element"),n=Symbol.for("react.fragment"),r=Object.prototype.hasOwnProperty,a=s.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,c={key:!0,ref:!0,__self:!0,__source:!0};function u(d,p,m){var x,S={},_=null,y=null;m!==void 0&&(_=""+m),p.key!==void 0&&(_=""+p.key),p.ref!==void 0&&(y=p.ref);for(x in p)r.call(p,x)&&!c.hasOwnProperty(x)&&(S[x]=p[x]);if(d&&d.defaultProps)for(x in p=d.defaultProps,p)S[x]===void 0&&(S[x]=p[x]);return{$$typeof:e,type:d,key:_,ref:y,props:S,_owner:a.current}}return Xo.Fragment=n,Xo.jsx=u,Xo.jsxs=u,Xo}var Qp;function y_(){return Qp||(Qp=1,Cu.exports=S_()),Cu.exports}var ae=y_(),ul={},Pu={exports:{}},qn={},Lu={exports:{}},Du={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var em;function M_(){return em||(em=1,(function(s){function e(J,_e){var xe=J.length;J.push(_e);e:for(;0<xe;){var O=xe-1>>>1,ie=J[O];if(0<a(ie,_e))J[O]=_e,J[xe]=ie,xe=O;else break e}}function n(J){return J.length===0?null:J[0]}function r(J){if(J.length===0)return null;var _e=J[0],xe=J.pop();if(xe!==_e){J[0]=xe;e:for(var O=0,ie=J.length,Be=ie>>>1;O<Be;){var Ge=2*(O+1)-1,ze=J[Ge],re=Ge+1,Ee=J[re];if(0>a(ze,xe))re<ie&&0>a(Ee,ze)?(J[O]=Ee,J[re]=xe,O=re):(J[O]=ze,J[Ge]=xe,O=Ge);else if(re<ie&&0>a(Ee,xe))J[O]=Ee,J[re]=xe,O=re;else break e}}return _e}function a(J,_e){var xe=J.sortIndex-_e.sortIndex;return xe!==0?xe:J.id-_e.id}if(typeof performance=="object"&&typeof performance.now=="function"){var c=performance;s.unstable_now=function(){return c.now()}}else{var u=Date,d=u.now();s.unstable_now=function(){return u.now()-d}}var p=[],m=[],x=1,S=null,_=3,y=!1,T=!1,R=!1,g=typeof setTimeout=="function"?setTimeout:null,v=typeof clearTimeout=="function"?clearTimeout:null,b=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function I(J){for(var _e=n(m);_e!==null;){if(_e.callback===null)r(m);else if(_e.startTime<=J)r(m),_e.sortIndex=_e.expirationTime,e(p,_e);else break;_e=n(m)}}function P(J){if(R=!1,I(J),!T)if(n(p)!==null)T=!0,ne(H);else{var _e=n(m);_e!==null&&Z(P,_e.startTime-J)}}function H(J,_e){T=!1,R&&(R=!1,v(w),w=-1),y=!0;var xe=_;try{for(I(_e),S=n(p);S!==null&&(!(S.expirationTime>_e)||J&&!k());){var O=S.callback;if(typeof O=="function"){S.callback=null,_=S.priorityLevel;var ie=O(S.expirationTime<=_e);_e=s.unstable_now(),typeof ie=="function"?S.callback=ie:S===n(p)&&r(p),I(_e)}else r(p);S=n(p)}if(S!==null)var Be=!0;else{var Ge=n(m);Ge!==null&&Z(P,Ge.startTime-_e),Be=!1}return Be}finally{S=null,_=xe,y=!1}}var L=!1,z=null,w=-1,D=5,j=-1;function k(){return!(s.unstable_now()-j<D)}function q(){if(z!==null){var J=s.unstable_now();j=J;var _e=!0;try{_e=z(!0,J)}finally{_e?de():(L=!1,z=null)}}else L=!1}var de;if(typeof b=="function")de=function(){b(q)};else if(typeof MessageChannel<"u"){var ve=new MessageChannel,W=ve.port2;ve.port1.onmessage=q,de=function(){W.postMessage(null)}}else de=function(){g(q,0)};function ne(J){z=J,L||(L=!0,de())}function Z(J,_e){w=g(function(){J(s.unstable_now())},_e)}s.unstable_IdlePriority=5,s.unstable_ImmediatePriority=1,s.unstable_LowPriority=4,s.unstable_NormalPriority=3,s.unstable_Profiling=null,s.unstable_UserBlockingPriority=2,s.unstable_cancelCallback=function(J){J.callback=null},s.unstable_continueExecution=function(){T||y||(T=!0,ne(H))},s.unstable_forceFrameRate=function(J){0>J||125<J?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):D=0<J?Math.floor(1e3/J):5},s.unstable_getCurrentPriorityLevel=function(){return _},s.unstable_getFirstCallbackNode=function(){return n(p)},s.unstable_next=function(J){switch(_){case 1:case 2:case 3:var _e=3;break;default:_e=_}var xe=_;_=_e;try{return J()}finally{_=xe}},s.unstable_pauseExecution=function(){},s.unstable_requestPaint=function(){},s.unstable_runWithPriority=function(J,_e){switch(J){case 1:case 2:case 3:case 4:case 5:break;default:J=3}var xe=_;_=J;try{return _e()}finally{_=xe}},s.unstable_scheduleCallback=function(J,_e,xe){var O=s.unstable_now();switch(typeof xe=="object"&&xe!==null?(xe=xe.delay,xe=typeof xe=="number"&&0<xe?O+xe:O):xe=O,J){case 1:var ie=-1;break;case 2:ie=250;break;case 5:ie=1073741823;break;case 4:ie=1e4;break;default:ie=5e3}return ie=xe+ie,J={id:x++,callback:_e,priorityLevel:J,startTime:xe,expirationTime:ie,sortIndex:-1},xe>O?(J.sortIndex=xe,e(m,J),n(p)===null&&J===n(m)&&(R?(v(w),w=-1):R=!0,Z(P,xe-O))):(J.sortIndex=ie,e(p,J),T||y||(T=!0,ne(H))),J},s.unstable_shouldYield=k,s.unstable_wrapCallback=function(J){var _e=_;return function(){var xe=_;_=_e;try{return J.apply(this,arguments)}finally{_=xe}}}})(Du)),Du}var tm;function E_(){return tm||(tm=1,Lu.exports=M_()),Lu.exports}/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var nm;function w_(){if(nm)return qn;nm=1;var s=ld(),e=E_();function n(t){for(var i="https://reactjs.org/docs/error-decoder.html?invariant="+t,o=1;o<arguments.length;o++)i+="&args[]="+encodeURIComponent(arguments[o]);return"Minified React error #"+t+"; visit "+i+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var r=new Set,a={};function c(t,i){u(t,i),u(t+"Capture",i)}function u(t,i){for(a[t]=i,t=0;t<i.length;t++)r.add(i[t])}var d=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),p=Object.prototype.hasOwnProperty,m=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,x={},S={};function _(t){return p.call(S,t)?!0:p.call(x,t)?!1:m.test(t)?S[t]=!0:(x[t]=!0,!1)}function y(t,i,o,l){if(o!==null&&o.type===0)return!1;switch(typeof i){case"function":case"symbol":return!0;case"boolean":return l?!1:o!==null?!o.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function T(t,i,o,l){if(i===null||typeof i>"u"||y(t,i,o,l))return!0;if(l)return!1;if(o!==null)switch(o.type){case 3:return!i;case 4:return i===!1;case 5:return isNaN(i);case 6:return isNaN(i)||1>i}return!1}function R(t,i,o,l,f,h,E){this.acceptsBooleans=i===2||i===3||i===4,this.attributeName=l,this.attributeNamespace=f,this.mustUseProperty=o,this.propertyName=t,this.type=i,this.sanitizeURL=h,this.removeEmptyString=E}var g={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){g[t]=new R(t,0,!1,t,null,!1,!1)}),[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var i=t[0];g[i]=new R(i,1,!1,t[1],null,!1,!1)}),["contentEditable","draggable","spellCheck","value"].forEach(function(t){g[t]=new R(t,2,!1,t.toLowerCase(),null,!1,!1)}),["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){g[t]=new R(t,2,!1,t,null,!1,!1)}),"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){g[t]=new R(t,3,!1,t.toLowerCase(),null,!1,!1)}),["checked","multiple","muted","selected"].forEach(function(t){g[t]=new R(t,3,!0,t,null,!1,!1)}),["capture","download"].forEach(function(t){g[t]=new R(t,4,!1,t,null,!1,!1)}),["cols","rows","size","span"].forEach(function(t){g[t]=new R(t,6,!1,t,null,!1,!1)}),["rowSpan","start"].forEach(function(t){g[t]=new R(t,5,!1,t.toLowerCase(),null,!1,!1)});var v=/[\-:]([a-z])/g;function b(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var i=t.replace(v,b);g[i]=new R(i,1,!1,t,null,!1,!1)}),"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var i=t.replace(v,b);g[i]=new R(i,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)}),["xml:base","xml:lang","xml:space"].forEach(function(t){var i=t.replace(v,b);g[i]=new R(i,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)}),["tabIndex","crossOrigin"].forEach(function(t){g[t]=new R(t,1,!1,t.toLowerCase(),null,!1,!1)}),g.xlinkHref=new R("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1),["src","href","action","formAction"].forEach(function(t){g[t]=new R(t,1,!1,t.toLowerCase(),null,!0,!0)});function I(t,i,o,l){var f=g.hasOwnProperty(i)?g[i]:null;(f!==null?f.type!==0:l||!(2<i.length)||i[0]!=="o"&&i[0]!=="O"||i[1]!=="n"&&i[1]!=="N")&&(T(i,o,f,l)&&(o=null),l||f===null?_(i)&&(o===null?t.removeAttribute(i):t.setAttribute(i,""+o)):f.mustUseProperty?t[f.propertyName]=o===null?f.type===3?!1:"":o:(i=f.attributeName,l=f.attributeNamespace,o===null?t.removeAttribute(i):(f=f.type,o=f===3||f===4&&o===!0?"":""+o,l?t.setAttributeNS(l,i,o):t.setAttribute(i,o))))}var P=s.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,H=Symbol.for("react.element"),L=Symbol.for("react.portal"),z=Symbol.for("react.fragment"),w=Symbol.for("react.strict_mode"),D=Symbol.for("react.profiler"),j=Symbol.for("react.provider"),k=Symbol.for("react.context"),q=Symbol.for("react.forward_ref"),de=Symbol.for("react.suspense"),ve=Symbol.for("react.suspense_list"),W=Symbol.for("react.memo"),ne=Symbol.for("react.lazy"),Z=Symbol.for("react.offscreen"),J=Symbol.iterator;function _e(t){return t===null||typeof t!="object"?null:(t=J&&t[J]||t["@@iterator"],typeof t=="function"?t:null)}var xe=Object.assign,O;function ie(t){if(O===void 0)try{throw Error()}catch(o){var i=o.stack.trim().match(/\n( *(at )?)/);O=i&&i[1]||""}return`
`+O+t}var Be=!1;function Ge(t,i){if(!t||Be)return"";Be=!0;var o=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(i)if(i=function(){throw Error()},Object.defineProperty(i.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(i,[])}catch(ge){var l=ge}Reflect.construct(t,[],i)}else{try{i.call()}catch(ge){l=ge}t.call(i.prototype)}else{try{throw Error()}catch(ge){l=ge}t()}}catch(ge){if(ge&&l&&typeof ge.stack=="string"){for(var f=ge.stack.split(`
`),h=l.stack.split(`
`),E=f.length-1,F=h.length-1;1<=E&&0<=F&&f[E]!==h[F];)F--;for(;1<=E&&0<=F;E--,F--)if(f[E]!==h[F]){if(E!==1||F!==1)do if(E--,F--,0>F||f[E]!==h[F]){var V=`
`+f[E].replace(" at new "," at ");return t.displayName&&V.includes("<anonymous>")&&(V=V.replace("<anonymous>",t.displayName)),V}while(1<=E&&0<=F);break}}}finally{Be=!1,Error.prepareStackTrace=o}return(t=t?t.displayName||t.name:"")?ie(t):""}function ze(t){switch(t.tag){case 5:return ie(t.type);case 16:return ie("Lazy");case 13:return ie("Suspense");case 19:return ie("SuspenseList");case 0:case 2:case 15:return t=Ge(t.type,!1),t;case 11:return t=Ge(t.type.render,!1),t;case 1:return t=Ge(t.type,!0),t;default:return""}}function re(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case z:return"Fragment";case L:return"Portal";case D:return"Profiler";case w:return"StrictMode";case de:return"Suspense";case ve:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case k:return(t.displayName||"Context")+".Consumer";case j:return(t._context.displayName||"Context")+".Provider";case q:var i=t.render;return t=t.displayName,t||(t=i.displayName||i.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case W:return i=t.displayName||null,i!==null?i:re(t.type)||"Memo";case ne:i=t._payload,t=t._init;try{return re(t(i))}catch{}}return null}function Ee(t){var i=t.type;switch(t.tag){case 24:return"Cache";case 9:return(i.displayName||"Context")+".Consumer";case 10:return(i._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=i.render,t=t.displayName||t.name||"",i.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return i;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return re(i);case 8:return i===w?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof i=="function")return i.displayName||i.name||null;if(typeof i=="string")return i}return null}function U(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function N(t){var i=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(i==="checkbox"||i==="radio")}function Ue(t){var i=N(t)?"checked":"value",o=Object.getOwnPropertyDescriptor(t.constructor.prototype,i),l=""+t[i];if(!t.hasOwnProperty(i)&&typeof o<"u"&&typeof o.get=="function"&&typeof o.set=="function"){var f=o.get,h=o.set;return Object.defineProperty(t,i,{configurable:!0,get:function(){return f.call(this)},set:function(E){l=""+E,h.call(this,E)}}),Object.defineProperty(t,i,{enumerable:o.enumerable}),{getValue:function(){return l},setValue:function(E){l=""+E},stopTracking:function(){t._valueTracker=null,delete t[i]}}}}function Ke(t){t._valueTracker||(t._valueTracker=Ue(t))}function gt(t){if(!t)return!1;var i=t._valueTracker;if(!i)return!0;var o=i.getValue(),l="";return t&&(l=N(t)?t.checked?"true":"false":t.value),t=l,t!==o?(i.setValue(t),!0):!1}function at(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function xt(t,i){var o=i.checked;return xe({},i,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:o??t._wrapperState.initialChecked})}function vt(t,i){var o=i.defaultValue==null?"":i.defaultValue,l=i.checked!=null?i.checked:i.defaultChecked;o=U(i.value!=null?i.value:o),t._wrapperState={initialChecked:l,initialValue:o,controlled:i.type==="checkbox"||i.type==="radio"?i.checked!=null:i.value!=null}}function ot(t,i){i=i.checked,i!=null&&I(t,"checked",i,!1)}function bt(t,i){ot(t,i);var o=U(i.value),l=i.type;if(o!=null)l==="number"?(o===0&&t.value===""||t.value!=o)&&(t.value=""+o):t.value!==""+o&&(t.value=""+o);else if(l==="submit"||l==="reset"){t.removeAttribute("value");return}i.hasOwnProperty("value")?Ft(t,i.type,o):i.hasOwnProperty("defaultValue")&&Ft(t,i.type,U(i.defaultValue)),i.checked==null&&i.defaultChecked!=null&&(t.defaultChecked=!!i.defaultChecked)}function St(t,i,o){if(i.hasOwnProperty("value")||i.hasOwnProperty("defaultValue")){var l=i.type;if(!(l!=="submit"&&l!=="reset"||i.value!==void 0&&i.value!==null))return;i=""+t._wrapperState.initialValue,o||i===t.value||(t.value=i),t.defaultValue=i}o=t.name,o!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,o!==""&&(t.name=o)}function Ft(t,i,o){(i!=="number"||at(t.ownerDocument)!==t)&&(o==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+o&&(t.defaultValue=""+o))}var G=Array.isArray;function Pt(t,i,o,l){if(t=t.options,i){i={};for(var f=0;f<o.length;f++)i["$"+o[f]]=!0;for(o=0;o<t.length;o++)f=i.hasOwnProperty("$"+t[o].value),t[o].selected!==f&&(t[o].selected=f),f&&l&&(t[o].defaultSelected=!0)}else{for(o=""+U(o),i=null,f=0;f<t.length;f++){if(t[f].value===o){t[f].selected=!0,l&&(t[f].defaultSelected=!0);return}i!==null||t[f].disabled||(i=t[f])}i!==null&&(i.selected=!0)}}function ft(t,i){if(i.dangerouslySetInnerHTML!=null)throw Error(n(91));return xe({},i,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function wt(t,i){var o=i.value;if(o==null){if(o=i.children,i=i.defaultValue,o!=null){if(i!=null)throw Error(n(92));if(G(o)){if(1<o.length)throw Error(n(93));o=o[0]}i=o}i==null&&(i=""),o=i}t._wrapperState={initialValue:U(o)}}function Fe(t,i){var o=U(i.value),l=U(i.defaultValue);o!=null&&(o=""+o,o!==t.value&&(t.value=o),i.defaultValue==null&&t.defaultValue!==o&&(t.defaultValue=o)),l!=null&&(t.defaultValue=""+l)}function Bt(t){var i=t.textContent;i===t._wrapperState.initialValue&&i!==""&&i!==null&&(t.value=i)}function C(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function M(t,i){return t==null||t==="http://www.w3.org/1999/xhtml"?C(i):t==="http://www.w3.org/2000/svg"&&i==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var Q,ye=(function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(i,o,l,f){MSApp.execUnsafeLocalFunction(function(){return t(i,o,l,f)})}:t})(function(t,i){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=i;else{for(Q=Q||document.createElement("div"),Q.innerHTML="<svg>"+i.valueOf().toString()+"</svg>",i=Q.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;i.firstChild;)t.appendChild(i.firstChild)}});function we(t,i){if(i){var o=t.firstChild;if(o&&o===t.lastChild&&o.nodeType===3){o.nodeValue=i;return}}t.textContent=i}var Ce={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Ie=["Webkit","ms","Moz","O"];Object.keys(Ce).forEach(function(t){Ie.forEach(function(i){i=i+t.charAt(0).toUpperCase()+t.substring(1),Ce[i]=Ce[t]})});function he(t,i,o){return i==null||typeof i=="boolean"||i===""?"":o||typeof i!="number"||i===0||Ce.hasOwnProperty(t)&&Ce[t]?(""+i).trim():i+"px"}function Me(t,i){t=t.style;for(var o in i)if(i.hasOwnProperty(o)){var l=o.indexOf("--")===0,f=he(o,i[o],l);o==="float"&&(o="cssFloat"),l?t.setProperty(o,f):t[o]=f}}var He=xe({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function pe(t,i){if(i){if(He[t]&&(i.children!=null||i.dangerouslySetInnerHTML!=null))throw Error(n(137,t));if(i.dangerouslySetInnerHTML!=null){if(i.children!=null)throw Error(n(60));if(typeof i.dangerouslySetInnerHTML!="object"||!("__html"in i.dangerouslySetInnerHTML))throw Error(n(61))}if(i.style!=null&&typeof i.style!="object")throw Error(n(62))}}function X(t,i){if(t.indexOf("-")===-1)return typeof i.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var ee=null;function Le(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var Ve=null,lt=null,B=null;function Te(t){if(t=Po(t)){if(typeof Ve!="function")throw Error(n(280));var i=t.stateNode;i&&(i=Ta(i),Ve(t.stateNode,t.type,i))}}function Se(t){lt?B?B.push(t):B=[t]:lt=t}function ue(){if(lt){var t=lt,i=B;if(B=lt=null,Te(t),i)for(t=0;t<i.length;t++)Te(i[t])}}function $(t,i){return t(i)}function se(){}var Re=!1;function Xe(t,i,o){if(Re)return t(i,o);Re=!0;try{return $(t,i,o)}finally{Re=!1,(lt!==null||B!==null)&&(se(),ue())}}function st(t,i){var o=t.stateNode;if(o===null)return null;var l=Ta(o);if(l===null)return null;o=l[i];e:switch(i){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(l=!l.disabled)||(t=t.type,l=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!l;break e;default:t=!1}if(t)return null;if(o&&typeof o!="function")throw Error(n(231,i,typeof o));return o}var Je=!1;if(d)try{var Wt={};Object.defineProperty(Wt,"passive",{get:function(){Je=!0}}),window.addEventListener("test",Wt,Wt),window.removeEventListener("test",Wt,Wt)}catch{Je=!1}function Qt(t,i,o,l,f,h,E,F,V){var ge=Array.prototype.slice.call(arguments,3);try{i.apply(o,ge)}catch(be){this.onError(be)}}var bn=!1,Ri=null,mi=!1,Mn=null,On={onError:function(t){bn=!0,Ri=t}};function ji(t,i,o,l,f,h,E,F,V){bn=!1,Ri=null,Qt.apply(On,arguments)}function dr(t,i,o,l,f,h,E,F,V){if(ji.apply(this,arguments),bn){if(bn){var ge=Ri;bn=!1,Ri=null}else throw Error(n(198));mi||(mi=!0,Mn=ge)}}function Pi(t){var i=t,o=t;if(t.alternate)for(;i.return;)i=i.return;else{t=i;do i=t,(i.flags&4098)!==0&&(o=i.return),t=i.return;while(t)}return i.tag===3?o:null}function Gr(t){if(t.tag===13){var i=t.memoizedState;if(i===null&&(t=t.alternate,t!==null&&(i=t.memoizedState)),i!==null)return i.dehydrated}return null}function co(t){if(Pi(t)!==t)throw Error(n(188))}function gs(t){var i=t.alternate;if(!i){if(i=Pi(t),i===null)throw Error(n(188));return i!==t?null:t}for(var o=t,l=i;;){var f=o.return;if(f===null)break;var h=f.alternate;if(h===null){if(l=f.return,l!==null){o=l;continue}break}if(f.child===h.child){for(h=f.child;h;){if(h===o)return co(f),t;if(h===l)return co(f),i;h=h.sibling}throw Error(n(188))}if(o.return!==l.return)o=f,l=h;else{for(var E=!1,F=f.child;F;){if(F===o){E=!0,o=f,l=h;break}if(F===l){E=!0,l=f,o=h;break}F=F.sibling}if(!E){for(F=h.child;F;){if(F===o){E=!0,o=h,l=f;break}if(F===l){E=!0,l=h,o=f;break}F=F.sibling}if(!E)throw Error(n(189))}}if(o.alternate!==l)throw Error(n(190))}if(o.tag!==3)throw Error(n(188));return o.stateNode.current===o?t:i}function uo(t){return t=gs(t),t!==null?fo(t):null}function fo(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var i=fo(t);if(i!==null)return i;t=t.sibling}return null}var ca=e.unstable_scheduleCallback,ua=e.unstable_cancelCallback,Zl=e.unstable_shouldYield,Jl=e.unstable_requestPaint,en=e.unstable_now,Ql=e.unstable_getCurrentPriorityLevel,ho=e.unstable_ImmediatePriority,A=e.unstable_UserBlockingPriority,K=e.unstable_NormalPriority,me=e.unstable_LowPriority,ce=e.unstable_IdlePriority,le=null,ke=null;function qe(t){if(ke&&typeof ke.onCommitFiberRoot=="function")try{ke.onCommitFiberRoot(le,t,void 0,(t.current.flags&128)===128)}catch{}}var Oe=Math.clz32?Math.clz32:pt,Qe=Math.log,rt=Math.LN2;function pt(t){return t>>>=0,t===0?32:31-(Qe(t)/rt|0)|0}var mt=64,nt=4194304;function Nt(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function Xt(t,i){var o=t.pendingLanes;if(o===0)return 0;var l=0,f=t.suspendedLanes,h=t.pingedLanes,E=o&268435455;if(E!==0){var F=E&~f;F!==0?l=Nt(F):(h&=E,h!==0&&(l=Nt(h)))}else E=o&~f,E!==0?l=Nt(E):h!==0&&(l=Nt(h));if(l===0)return 0;if(i!==0&&i!==l&&(i&f)===0&&(f=l&-l,h=i&-i,f>=h||f===16&&(h&4194240)!==0))return i;if((l&4)!==0&&(l|=o&16),i=t.entangledLanes,i!==0)for(t=t.entanglements,i&=l;0<i;)o=31-Oe(i),f=1<<o,l|=t[o],i&=~f;return l}function Zt(t,i){switch(t){case 1:case 2:case 4:return i+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return i+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Ht(t,i){for(var o=t.suspendedLanes,l=t.pingedLanes,f=t.expirationTimes,h=t.pendingLanes;0<h;){var E=31-Oe(h),F=1<<E,V=f[E];V===-1?((F&o)===0||(F&l)!==0)&&(f[E]=Zt(F,i)):V<=i&&(t.expiredLanes|=F),h&=~F}}function cn(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function je(){var t=mt;return mt<<=1,(mt&4194240)===0&&(mt=64),t}function En(t){for(var i=[],o=0;31>o;o++)i.push(t);return i}function Et(t,i,o){t.pendingLanes|=i,i!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,i=31-Oe(i),t[i]=o}function Hn(t,i){var o=t.pendingLanes&~i;t.pendingLanes=i,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=i,t.mutableReadLanes&=i,t.entangledLanes&=i,i=t.entanglements;var l=t.eventTimes;for(t=t.expirationTimes;0<o;){var f=31-Oe(o),h=1<<f;i[f]=0,l[f]=-1,t[f]=-1,o&=~h}}function Vn(t,i){var o=t.entangledLanes|=i;for(t=t.entanglements;o;){var l=31-Oe(o),f=1<<l;f&i|t[l]&i&&(t[l]|=i),o&=~f}}var Tt=0;function Yi(t){return t&=-t,1<t?4<t?(t&268435455)!==0?16:536870912:4:1}var zt,Yt,gi,Vt,_i,Li=!1,Wr=[],hr=null,pr=null,mr=null,po=new Map,mo=new Map,gr=[],H0="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Id(t,i){switch(t){case"focusin":case"focusout":hr=null;break;case"dragenter":case"dragleave":pr=null;break;case"mouseover":case"mouseout":mr=null;break;case"pointerover":case"pointerout":po.delete(i.pointerId);break;case"gotpointercapture":case"lostpointercapture":mo.delete(i.pointerId)}}function go(t,i,o,l,f,h){return t===null||t.nativeEvent!==h?(t={blockedOn:i,domEventName:o,eventSystemFlags:l,nativeEvent:h,targetContainers:[f]},i!==null&&(i=Po(i),i!==null&&Yt(i)),t):(t.eventSystemFlags|=l,i=t.targetContainers,f!==null&&i.indexOf(f)===-1&&i.push(f),t)}function V0(t,i,o,l,f){switch(i){case"focusin":return hr=go(hr,t,i,o,l,f),!0;case"dragenter":return pr=go(pr,t,i,o,l,f),!0;case"mouseover":return mr=go(mr,t,i,o,l,f),!0;case"pointerover":var h=f.pointerId;return po.set(h,go(po.get(h)||null,t,i,o,l,f)),!0;case"gotpointercapture":return h=f.pointerId,mo.set(h,go(mo.get(h)||null,t,i,o,l,f)),!0}return!1}function Nd(t){var i=Xr(t.target);if(i!==null){var o=Pi(i);if(o!==null){if(i=o.tag,i===13){if(i=Gr(o),i!==null){t.blockedOn=i,_i(t.priority,function(){gi(o)});return}}else if(i===3&&o.stateNode.current.memoizedState.isDehydrated){t.blockedOn=o.tag===3?o.stateNode.containerInfo:null;return}}}t.blockedOn=null}function fa(t){if(t.blockedOn!==null)return!1;for(var i=t.targetContainers;0<i.length;){var o=tc(t.domEventName,t.eventSystemFlags,i[0],t.nativeEvent);if(o===null){o=t.nativeEvent;var l=new o.constructor(o.type,o);ee=l,o.target.dispatchEvent(l),ee=null}else return i=Po(o),i!==null&&Yt(i),t.blockedOn=o,!1;i.shift()}return!0}function Ud(t,i,o){fa(t)&&o.delete(i)}function G0(){Li=!1,hr!==null&&fa(hr)&&(hr=null),pr!==null&&fa(pr)&&(pr=null),mr!==null&&fa(mr)&&(mr=null),po.forEach(Ud),mo.forEach(Ud)}function _o(t,i){t.blockedOn===i&&(t.blockedOn=null,Li||(Li=!0,e.unstable_scheduleCallback(e.unstable_NormalPriority,G0)))}function vo(t){function i(f){return _o(f,t)}if(0<Wr.length){_o(Wr[0],t);for(var o=1;o<Wr.length;o++){var l=Wr[o];l.blockedOn===t&&(l.blockedOn=null)}}for(hr!==null&&_o(hr,t),pr!==null&&_o(pr,t),mr!==null&&_o(mr,t),po.forEach(i),mo.forEach(i),o=0;o<gr.length;o++)l=gr[o],l.blockedOn===t&&(l.blockedOn=null);for(;0<gr.length&&(o=gr[0],o.blockedOn===null);)Nd(o),o.blockedOn===null&&gr.shift()}var _s=P.ReactCurrentBatchConfig,da=!0;function W0(t,i,o,l){var f=Tt,h=_s.transition;_s.transition=null;try{Tt=1,ec(t,i,o,l)}finally{Tt=f,_s.transition=h}}function X0(t,i,o,l){var f=Tt,h=_s.transition;_s.transition=null;try{Tt=4,ec(t,i,o,l)}finally{Tt=f,_s.transition=h}}function ec(t,i,o,l){if(da){var f=tc(t,i,o,l);if(f===null)vc(t,i,l,ha,o),Id(t,l);else if(V0(f,t,i,o,l))l.stopPropagation();else if(Id(t,l),i&4&&-1<H0.indexOf(t)){for(;f!==null;){var h=Po(f);if(h!==null&&zt(h),h=tc(t,i,o,l),h===null&&vc(t,i,l,ha,o),h===f)break;f=h}f!==null&&l.stopPropagation()}else vc(t,i,l,null,o)}}var ha=null;function tc(t,i,o,l){if(ha=null,t=Le(l),t=Xr(t),t!==null)if(i=Pi(t),i===null)t=null;else if(o=i.tag,o===13){if(t=Gr(i),t!==null)return t;t=null}else if(o===3){if(i.stateNode.current.memoizedState.isDehydrated)return i.tag===3?i.stateNode.containerInfo:null;t=null}else i!==t&&(t=null);return ha=t,null}function Fd(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(Ql()){case ho:return 1;case A:return 4;case K:case me:return 16;case ce:return 536870912;default:return 16}default:return 16}}var _r=null,nc=null,pa=null;function Od(){if(pa)return pa;var t,i=nc,o=i.length,l,f="value"in _r?_r.value:_r.textContent,h=f.length;for(t=0;t<o&&i[t]===f[t];t++);var E=o-t;for(l=1;l<=E&&i[o-l]===f[h-l];l++);return pa=f.slice(t,1<l?1-l:void 0)}function ma(t){var i=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&i===13&&(t=13)):t=i,t===10&&(t=13),32<=t||t===13?t:0}function ga(){return!0}function kd(){return!1}function Jn(t){function i(o,l,f,h,E){this._reactName=o,this._targetInst=f,this.type=l,this.nativeEvent=h,this.target=E,this.currentTarget=null;for(var F in t)t.hasOwnProperty(F)&&(o=t[F],this[F]=o?o(h):h[F]);return this.isDefaultPrevented=(h.defaultPrevented!=null?h.defaultPrevented:h.returnValue===!1)?ga:kd,this.isPropagationStopped=kd,this}return xe(i.prototype,{preventDefault:function(){this.defaultPrevented=!0;var o=this.nativeEvent;o&&(o.preventDefault?o.preventDefault():typeof o.returnValue!="unknown"&&(o.returnValue=!1),this.isDefaultPrevented=ga)},stopPropagation:function(){var o=this.nativeEvent;o&&(o.stopPropagation?o.stopPropagation():typeof o.cancelBubble!="unknown"&&(o.cancelBubble=!0),this.isPropagationStopped=ga)},persist:function(){},isPersistent:ga}),i}var vs={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},ic=Jn(vs),xo=xe({},vs,{view:0,detail:0}),j0=Jn(xo),rc,sc,So,_a=xe({},xo,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:ac,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==So&&(So&&t.type==="mousemove"?(rc=t.screenX-So.screenX,sc=t.screenY-So.screenY):sc=rc=0,So=t),rc)},movementY:function(t){return"movementY"in t?t.movementY:sc}}),Bd=Jn(_a),Y0=xe({},_a,{dataTransfer:0}),q0=Jn(Y0),K0=xe({},xo,{relatedTarget:0}),oc=Jn(K0),$0=xe({},vs,{animationName:0,elapsedTime:0,pseudoElement:0}),Z0=Jn($0),J0=xe({},vs,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),Q0=Jn(J0),eg=xe({},vs,{data:0}),zd=Jn(eg),tg={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},ng={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},ig={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function rg(t){var i=this.nativeEvent;return i.getModifierState?i.getModifierState(t):(t=ig[t])?!!i[t]:!1}function ac(){return rg}var sg=xe({},xo,{key:function(t){if(t.key){var i=tg[t.key]||t.key;if(i!=="Unidentified")return i}return t.type==="keypress"?(t=ma(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?ng[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:ac,charCode:function(t){return t.type==="keypress"?ma(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?ma(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),og=Jn(sg),ag=xe({},_a,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Hd=Jn(ag),lg=xe({},xo,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:ac}),cg=Jn(lg),ug=xe({},vs,{propertyName:0,elapsedTime:0,pseudoElement:0}),fg=Jn(ug),dg=xe({},_a,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),hg=Jn(dg),pg=[9,13,27,32],lc=d&&"CompositionEvent"in window,yo=null;d&&"documentMode"in document&&(yo=document.documentMode);var mg=d&&"TextEvent"in window&&!yo,Vd=d&&(!lc||yo&&8<yo&&11>=yo),Gd=" ",Wd=!1;function Xd(t,i){switch(t){case"keyup":return pg.indexOf(i.keyCode)!==-1;case"keydown":return i.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function jd(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var xs=!1;function gg(t,i){switch(t){case"compositionend":return jd(i);case"keypress":return i.which!==32?null:(Wd=!0,Gd);case"textInput":return t=i.data,t===Gd&&Wd?null:t;default:return null}}function _g(t,i){if(xs)return t==="compositionend"||!lc&&Xd(t,i)?(t=Od(),pa=nc=_r=null,xs=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(i.ctrlKey||i.altKey||i.metaKey)||i.ctrlKey&&i.altKey){if(i.char&&1<i.char.length)return i.char;if(i.which)return String.fromCharCode(i.which)}return null;case"compositionend":return Vd&&i.locale!=="ko"?null:i.data;default:return null}}var vg={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Yd(t){var i=t&&t.nodeName&&t.nodeName.toLowerCase();return i==="input"?!!vg[t.type]:i==="textarea"}function qd(t,i,o,l){Se(l),i=Ma(i,"onChange"),0<i.length&&(o=new ic("onChange","change",null,o,l),t.push({event:o,listeners:i}))}var Mo=null,Eo=null;function xg(t){dh(t,0)}function va(t){var i=ws(t);if(gt(i))return t}function Sg(t,i){if(t==="change")return i}var Kd=!1;if(d){var cc;if(d){var uc="oninput"in document;if(!uc){var $d=document.createElement("div");$d.setAttribute("oninput","return;"),uc=typeof $d.oninput=="function"}cc=uc}else cc=!1;Kd=cc&&(!document.documentMode||9<document.documentMode)}function Zd(){Mo&&(Mo.detachEvent("onpropertychange",Jd),Eo=Mo=null)}function Jd(t){if(t.propertyName==="value"&&va(Eo)){var i=[];qd(i,Eo,t,Le(t)),Xe(xg,i)}}function yg(t,i,o){t==="focusin"?(Zd(),Mo=i,Eo=o,Mo.attachEvent("onpropertychange",Jd)):t==="focusout"&&Zd()}function Mg(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return va(Eo)}function Eg(t,i){if(t==="click")return va(i)}function wg(t,i){if(t==="input"||t==="change")return va(i)}function Tg(t,i){return t===i&&(t!==0||1/t===1/i)||t!==t&&i!==i}var vi=typeof Object.is=="function"?Object.is:Tg;function wo(t,i){if(vi(t,i))return!0;if(typeof t!="object"||t===null||typeof i!="object"||i===null)return!1;var o=Object.keys(t),l=Object.keys(i);if(o.length!==l.length)return!1;for(l=0;l<o.length;l++){var f=o[l];if(!p.call(i,f)||!vi(t[f],i[f]))return!1}return!0}function Qd(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function eh(t,i){var o=Qd(t);t=0;for(var l;o;){if(o.nodeType===3){if(l=t+o.textContent.length,t<=i&&l>=i)return{node:o,offset:i-t};t=l}e:{for(;o;){if(o.nextSibling){o=o.nextSibling;break e}o=o.parentNode}o=void 0}o=Qd(o)}}function th(t,i){return t&&i?t===i?!0:t&&t.nodeType===3?!1:i&&i.nodeType===3?th(t,i.parentNode):"contains"in t?t.contains(i):t.compareDocumentPosition?!!(t.compareDocumentPosition(i)&16):!1:!1}function nh(){for(var t=window,i=at();i instanceof t.HTMLIFrameElement;){try{var o=typeof i.contentWindow.location.href=="string"}catch{o=!1}if(o)t=i.contentWindow;else break;i=at(t.document)}return i}function fc(t){var i=t&&t.nodeName&&t.nodeName.toLowerCase();return i&&(i==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||i==="textarea"||t.contentEditable==="true")}function Ag(t){var i=nh(),o=t.focusedElem,l=t.selectionRange;if(i!==o&&o&&o.ownerDocument&&th(o.ownerDocument.documentElement,o)){if(l!==null&&fc(o)){if(i=l.start,t=l.end,t===void 0&&(t=i),"selectionStart"in o)o.selectionStart=i,o.selectionEnd=Math.min(t,o.value.length);else if(t=(i=o.ownerDocument||document)&&i.defaultView||window,t.getSelection){t=t.getSelection();var f=o.textContent.length,h=Math.min(l.start,f);l=l.end===void 0?h:Math.min(l.end,f),!t.extend&&h>l&&(f=l,l=h,h=f),f=eh(o,h);var E=eh(o,l);f&&E&&(t.rangeCount!==1||t.anchorNode!==f.node||t.anchorOffset!==f.offset||t.focusNode!==E.node||t.focusOffset!==E.offset)&&(i=i.createRange(),i.setStart(f.node,f.offset),t.removeAllRanges(),h>l?(t.addRange(i),t.extend(E.node,E.offset)):(i.setEnd(E.node,E.offset),t.addRange(i)))}}for(i=[],t=o;t=t.parentNode;)t.nodeType===1&&i.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof o.focus=="function"&&o.focus(),o=0;o<i.length;o++)t=i[o],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var bg=d&&"documentMode"in document&&11>=document.documentMode,Ss=null,dc=null,To=null,hc=!1;function ih(t,i,o){var l=o.window===o?o.document:o.nodeType===9?o:o.ownerDocument;hc||Ss==null||Ss!==at(l)||(l=Ss,"selectionStart"in l&&fc(l)?l={start:l.selectionStart,end:l.selectionEnd}:(l=(l.ownerDocument&&l.ownerDocument.defaultView||window).getSelection(),l={anchorNode:l.anchorNode,anchorOffset:l.anchorOffset,focusNode:l.focusNode,focusOffset:l.focusOffset}),To&&wo(To,l)||(To=l,l=Ma(dc,"onSelect"),0<l.length&&(i=new ic("onSelect","select",null,i,o),t.push({event:i,listeners:l}),i.target=Ss)))}function xa(t,i){var o={};return o[t.toLowerCase()]=i.toLowerCase(),o["Webkit"+t]="webkit"+i,o["Moz"+t]="moz"+i,o}var ys={animationend:xa("Animation","AnimationEnd"),animationiteration:xa("Animation","AnimationIteration"),animationstart:xa("Animation","AnimationStart"),transitionend:xa("Transition","TransitionEnd")},pc={},rh={};d&&(rh=document.createElement("div").style,"AnimationEvent"in window||(delete ys.animationend.animation,delete ys.animationiteration.animation,delete ys.animationstart.animation),"TransitionEvent"in window||delete ys.transitionend.transition);function Sa(t){if(pc[t])return pc[t];if(!ys[t])return t;var i=ys[t],o;for(o in i)if(i.hasOwnProperty(o)&&o in rh)return pc[t]=i[o];return t}var sh=Sa("animationend"),oh=Sa("animationiteration"),ah=Sa("animationstart"),lh=Sa("transitionend"),ch=new Map,uh="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function vr(t,i){ch.set(t,i),c(i,[t])}for(var mc=0;mc<uh.length;mc++){var gc=uh[mc],Cg=gc.toLowerCase(),Rg=gc[0].toUpperCase()+gc.slice(1);vr(Cg,"on"+Rg)}vr(sh,"onAnimationEnd"),vr(oh,"onAnimationIteration"),vr(ah,"onAnimationStart"),vr("dblclick","onDoubleClick"),vr("focusin","onFocus"),vr("focusout","onBlur"),vr(lh,"onTransitionEnd"),u("onMouseEnter",["mouseout","mouseover"]),u("onMouseLeave",["mouseout","mouseover"]),u("onPointerEnter",["pointerout","pointerover"]),u("onPointerLeave",["pointerout","pointerover"]),c("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),c("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),c("onBeforeInput",["compositionend","keypress","textInput","paste"]),c("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),c("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),c("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Ao="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Pg=new Set("cancel close invalid load scroll toggle".split(" ").concat(Ao));function fh(t,i,o){var l=t.type||"unknown-event";t.currentTarget=o,dr(l,i,void 0,t),t.currentTarget=null}function dh(t,i){i=(i&4)!==0;for(var o=0;o<t.length;o++){var l=t[o],f=l.event;l=l.listeners;e:{var h=void 0;if(i)for(var E=l.length-1;0<=E;E--){var F=l[E],V=F.instance,ge=F.currentTarget;if(F=F.listener,V!==h&&f.isPropagationStopped())break e;fh(f,F,ge),h=V}else for(E=0;E<l.length;E++){if(F=l[E],V=F.instance,ge=F.currentTarget,F=F.listener,V!==h&&f.isPropagationStopped())break e;fh(f,F,ge),h=V}}}if(mi)throw t=Mn,mi=!1,Mn=null,t}function qt(t,i){var o=i[wc];o===void 0&&(o=i[wc]=new Set);var l=t+"__bubble";o.has(l)||(hh(i,t,2,!1),o.add(l))}function _c(t,i,o){var l=0;i&&(l|=4),hh(o,t,l,i)}var ya="_reactListening"+Math.random().toString(36).slice(2);function bo(t){if(!t[ya]){t[ya]=!0,r.forEach(function(o){o!=="selectionchange"&&(Pg.has(o)||_c(o,!1,t),_c(o,!0,t))});var i=t.nodeType===9?t:t.ownerDocument;i===null||i[ya]||(i[ya]=!0,_c("selectionchange",!1,i))}}function hh(t,i,o,l){switch(Fd(i)){case 1:var f=W0;break;case 4:f=X0;break;default:f=ec}o=f.bind(null,i,o,t),f=void 0,!Je||i!=="touchstart"&&i!=="touchmove"&&i!=="wheel"||(f=!0),l?f!==void 0?t.addEventListener(i,o,{capture:!0,passive:f}):t.addEventListener(i,o,!0):f!==void 0?t.addEventListener(i,o,{passive:f}):t.addEventListener(i,o,!1)}function vc(t,i,o,l,f){var h=l;if((i&1)===0&&(i&2)===0&&l!==null)e:for(;;){if(l===null)return;var E=l.tag;if(E===3||E===4){var F=l.stateNode.containerInfo;if(F===f||F.nodeType===8&&F.parentNode===f)break;if(E===4)for(E=l.return;E!==null;){var V=E.tag;if((V===3||V===4)&&(V=E.stateNode.containerInfo,V===f||V.nodeType===8&&V.parentNode===f))return;E=E.return}for(;F!==null;){if(E=Xr(F),E===null)return;if(V=E.tag,V===5||V===6){l=h=E;continue e}F=F.parentNode}}l=l.return}Xe(function(){var ge=h,be=Le(o),Pe=[];e:{var Ae=ch.get(t);if(Ae!==void 0){var Ye=ic,Ze=t;switch(t){case"keypress":if(ma(o)===0)break e;case"keydown":case"keyup":Ye=og;break;case"focusin":Ze="focus",Ye=oc;break;case"focusout":Ze="blur",Ye=oc;break;case"beforeblur":case"afterblur":Ye=oc;break;case"click":if(o.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":Ye=Bd;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":Ye=q0;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":Ye=cg;break;case sh:case oh:case ah:Ye=Z0;break;case lh:Ye=fg;break;case"scroll":Ye=j0;break;case"wheel":Ye=hg;break;case"copy":case"cut":case"paste":Ye=Q0;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":Ye=Hd}var et=(i&4)!==0,an=!et&&t==="scroll",oe=et?Ae!==null?Ae+"Capture":null:Ae;et=[];for(var Y=ge,fe;Y!==null;){fe=Y;var Ne=fe.stateNode;if(fe.tag===5&&Ne!==null&&(fe=Ne,oe!==null&&(Ne=st(Y,oe),Ne!=null&&et.push(Co(Y,Ne,fe)))),an)break;Y=Y.return}0<et.length&&(Ae=new Ye(Ae,Ze,null,o,be),Pe.push({event:Ae,listeners:et}))}}if((i&7)===0){e:{if(Ae=t==="mouseover"||t==="pointerover",Ye=t==="mouseout"||t==="pointerout",Ae&&o!==ee&&(Ze=o.relatedTarget||o.fromElement)&&(Xr(Ze)||Ze[qi]))break e;if((Ye||Ae)&&(Ae=be.window===be?be:(Ae=be.ownerDocument)?Ae.defaultView||Ae.parentWindow:window,Ye?(Ze=o.relatedTarget||o.toElement,Ye=ge,Ze=Ze?Xr(Ze):null,Ze!==null&&(an=Pi(Ze),Ze!==an||Ze.tag!==5&&Ze.tag!==6)&&(Ze=null)):(Ye=null,Ze=ge),Ye!==Ze)){if(et=Bd,Ne="onMouseLeave",oe="onMouseEnter",Y="mouse",(t==="pointerout"||t==="pointerover")&&(et=Hd,Ne="onPointerLeave",oe="onPointerEnter",Y="pointer"),an=Ye==null?Ae:ws(Ye),fe=Ze==null?Ae:ws(Ze),Ae=new et(Ne,Y+"leave",Ye,o,be),Ae.target=an,Ae.relatedTarget=fe,Ne=null,Xr(be)===ge&&(et=new et(oe,Y+"enter",Ze,o,be),et.target=fe,et.relatedTarget=an,Ne=et),an=Ne,Ye&&Ze)t:{for(et=Ye,oe=Ze,Y=0,fe=et;fe;fe=Ms(fe))Y++;for(fe=0,Ne=oe;Ne;Ne=Ms(Ne))fe++;for(;0<Y-fe;)et=Ms(et),Y--;for(;0<fe-Y;)oe=Ms(oe),fe--;for(;Y--;){if(et===oe||oe!==null&&et===oe.alternate)break t;et=Ms(et),oe=Ms(oe)}et=null}else et=null;Ye!==null&&ph(Pe,Ae,Ye,et,!1),Ze!==null&&an!==null&&ph(Pe,an,Ze,et,!0)}}e:{if(Ae=ge?ws(ge):window,Ye=Ae.nodeName&&Ae.nodeName.toLowerCase(),Ye==="select"||Ye==="input"&&Ae.type==="file")var it=Sg;else if(Yd(Ae))if(Kd)it=wg;else{it=Mg;var ct=yg}else(Ye=Ae.nodeName)&&Ye.toLowerCase()==="input"&&(Ae.type==="checkbox"||Ae.type==="radio")&&(it=Eg);if(it&&(it=it(t,ge))){qd(Pe,it,o,be);break e}ct&&ct(t,Ae,ge),t==="focusout"&&(ct=Ae._wrapperState)&&ct.controlled&&Ae.type==="number"&&Ft(Ae,"number",Ae.value)}switch(ct=ge?ws(ge):window,t){case"focusin":(Yd(ct)||ct.contentEditable==="true")&&(Ss=ct,dc=ge,To=null);break;case"focusout":To=dc=Ss=null;break;case"mousedown":hc=!0;break;case"contextmenu":case"mouseup":case"dragend":hc=!1,ih(Pe,o,be);break;case"selectionchange":if(bg)break;case"keydown":case"keyup":ih(Pe,o,be)}var ut;if(lc)e:{switch(t){case"compositionstart":var dt="onCompositionStart";break e;case"compositionend":dt="onCompositionEnd";break e;case"compositionupdate":dt="onCompositionUpdate";break e}dt=void 0}else xs?Xd(t,o)&&(dt="onCompositionEnd"):t==="keydown"&&o.keyCode===229&&(dt="onCompositionStart");dt&&(Vd&&o.locale!=="ko"&&(xs||dt!=="onCompositionStart"?dt==="onCompositionEnd"&&xs&&(ut=Od()):(_r=be,nc="value"in _r?_r.value:_r.textContent,xs=!0)),ct=Ma(ge,dt),0<ct.length&&(dt=new zd(dt,t,null,o,be),Pe.push({event:dt,listeners:ct}),ut?dt.data=ut:(ut=jd(o),ut!==null&&(dt.data=ut)))),(ut=mg?gg(t,o):_g(t,o))&&(ge=Ma(ge,"onBeforeInput"),0<ge.length&&(be=new zd("onBeforeInput","beforeinput",null,o,be),Pe.push({event:be,listeners:ge}),be.data=ut))}dh(Pe,i)})}function Co(t,i,o){return{instance:t,listener:i,currentTarget:o}}function Ma(t,i){for(var o=i+"Capture",l=[];t!==null;){var f=t,h=f.stateNode;f.tag===5&&h!==null&&(f=h,h=st(t,o),h!=null&&l.unshift(Co(t,h,f)),h=st(t,i),h!=null&&l.push(Co(t,h,f))),t=t.return}return l}function Ms(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function ph(t,i,o,l,f){for(var h=i._reactName,E=[];o!==null&&o!==l;){var F=o,V=F.alternate,ge=F.stateNode;if(V!==null&&V===l)break;F.tag===5&&ge!==null&&(F=ge,f?(V=st(o,h),V!=null&&E.unshift(Co(o,V,F))):f||(V=st(o,h),V!=null&&E.push(Co(o,V,F)))),o=o.return}E.length!==0&&t.push({event:i,listeners:E})}var Lg=/\r\n?/g,Dg=/\u0000|\uFFFD/g;function mh(t){return(typeof t=="string"?t:""+t).replace(Lg,`
`).replace(Dg,"")}function Ea(t,i,o){if(i=mh(i),mh(t)!==i&&o)throw Error(n(425))}function wa(){}var xc=null,Sc=null;function yc(t,i){return t==="textarea"||t==="noscript"||typeof i.children=="string"||typeof i.children=="number"||typeof i.dangerouslySetInnerHTML=="object"&&i.dangerouslySetInnerHTML!==null&&i.dangerouslySetInnerHTML.__html!=null}var Mc=typeof setTimeout=="function"?setTimeout:void 0,Ig=typeof clearTimeout=="function"?clearTimeout:void 0,gh=typeof Promise=="function"?Promise:void 0,Ng=typeof queueMicrotask=="function"?queueMicrotask:typeof gh<"u"?function(t){return gh.resolve(null).then(t).catch(Ug)}:Mc;function Ug(t){setTimeout(function(){throw t})}function Ec(t,i){var o=i,l=0;do{var f=o.nextSibling;if(t.removeChild(o),f&&f.nodeType===8)if(o=f.data,o==="/$"){if(l===0){t.removeChild(f),vo(i);return}l--}else o!=="$"&&o!=="$?"&&o!=="$!"||l++;o=f}while(o);vo(i)}function xr(t){for(;t!=null;t=t.nextSibling){var i=t.nodeType;if(i===1||i===3)break;if(i===8){if(i=t.data,i==="$"||i==="$!"||i==="$?")break;if(i==="/$")return null}}return t}function _h(t){t=t.previousSibling;for(var i=0;t;){if(t.nodeType===8){var o=t.data;if(o==="$"||o==="$!"||o==="$?"){if(i===0)return t;i--}else o==="/$"&&i++}t=t.previousSibling}return null}var Es=Math.random().toString(36).slice(2),Di="__reactFiber$"+Es,Ro="__reactProps$"+Es,qi="__reactContainer$"+Es,wc="__reactEvents$"+Es,Fg="__reactListeners$"+Es,Og="__reactHandles$"+Es;function Xr(t){var i=t[Di];if(i)return i;for(var o=t.parentNode;o;){if(i=o[qi]||o[Di]){if(o=i.alternate,i.child!==null||o!==null&&o.child!==null)for(t=_h(t);t!==null;){if(o=t[Di])return o;t=_h(t)}return i}t=o,o=t.parentNode}return null}function Po(t){return t=t[Di]||t[qi],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function ws(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(n(33))}function Ta(t){return t[Ro]||null}var Tc=[],Ts=-1;function Sr(t){return{current:t}}function Kt(t){0>Ts||(t.current=Tc[Ts],Tc[Ts]=null,Ts--)}function jt(t,i){Ts++,Tc[Ts]=t.current,t.current=i}var yr={},Cn=Sr(yr),Gn=Sr(!1),jr=yr;function As(t,i){var o=t.type.contextTypes;if(!o)return yr;var l=t.stateNode;if(l&&l.__reactInternalMemoizedUnmaskedChildContext===i)return l.__reactInternalMemoizedMaskedChildContext;var f={},h;for(h in o)f[h]=i[h];return l&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=i,t.__reactInternalMemoizedMaskedChildContext=f),f}function Wn(t){return t=t.childContextTypes,t!=null}function Aa(){Kt(Gn),Kt(Cn)}function vh(t,i,o){if(Cn.current!==yr)throw Error(n(168));jt(Cn,i),jt(Gn,o)}function xh(t,i,o){var l=t.stateNode;if(i=i.childContextTypes,typeof l.getChildContext!="function")return o;l=l.getChildContext();for(var f in l)if(!(f in i))throw Error(n(108,Ee(t)||"Unknown",f));return xe({},o,l)}function ba(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||yr,jr=Cn.current,jt(Cn,t),jt(Gn,Gn.current),!0}function Sh(t,i,o){var l=t.stateNode;if(!l)throw Error(n(169));o?(t=xh(t,i,jr),l.__reactInternalMemoizedMergedChildContext=t,Kt(Gn),Kt(Cn),jt(Cn,t)):Kt(Gn),jt(Gn,o)}var Ki=null,Ca=!1,Ac=!1;function yh(t){Ki===null?Ki=[t]:Ki.push(t)}function kg(t){Ca=!0,yh(t)}function Mr(){if(!Ac&&Ki!==null){Ac=!0;var t=0,i=Tt;try{var o=Ki;for(Tt=1;t<o.length;t++){var l=o[t];do l=l(!0);while(l!==null)}Ki=null,Ca=!1}catch(f){throw Ki!==null&&(Ki=Ki.slice(t+1)),ca(ho,Mr),f}finally{Tt=i,Ac=!1}}return null}var bs=[],Cs=0,Ra=null,Pa=0,ai=[],li=0,Yr=null,$i=1,Zi="";function qr(t,i){bs[Cs++]=Pa,bs[Cs++]=Ra,Ra=t,Pa=i}function Mh(t,i,o){ai[li++]=$i,ai[li++]=Zi,ai[li++]=Yr,Yr=t;var l=$i;t=Zi;var f=32-Oe(l)-1;l&=~(1<<f),o+=1;var h=32-Oe(i)+f;if(30<h){var E=f-f%5;h=(l&(1<<E)-1).toString(32),l>>=E,f-=E,$i=1<<32-Oe(i)+f|o<<f|l,Zi=h+t}else $i=1<<h|o<<f|l,Zi=t}function bc(t){t.return!==null&&(qr(t,1),Mh(t,1,0))}function Cc(t){for(;t===Ra;)Ra=bs[--Cs],bs[Cs]=null,Pa=bs[--Cs],bs[Cs]=null;for(;t===Yr;)Yr=ai[--li],ai[li]=null,Zi=ai[--li],ai[li]=null,$i=ai[--li],ai[li]=null}var Qn=null,ei=null,Jt=!1,xi=null;function Eh(t,i){var o=di(5,null,null,0);o.elementType="DELETED",o.stateNode=i,o.return=t,i=t.deletions,i===null?(t.deletions=[o],t.flags|=16):i.push(o)}function wh(t,i){switch(t.tag){case 5:var o=t.type;return i=i.nodeType!==1||o.toLowerCase()!==i.nodeName.toLowerCase()?null:i,i!==null?(t.stateNode=i,Qn=t,ei=xr(i.firstChild),!0):!1;case 6:return i=t.pendingProps===""||i.nodeType!==3?null:i,i!==null?(t.stateNode=i,Qn=t,ei=null,!0):!1;case 13:return i=i.nodeType!==8?null:i,i!==null?(o=Yr!==null?{id:$i,overflow:Zi}:null,t.memoizedState={dehydrated:i,treeContext:o,retryLane:1073741824},o=di(18,null,null,0),o.stateNode=i,o.return=t,t.child=o,Qn=t,ei=null,!0):!1;default:return!1}}function Rc(t){return(t.mode&1)!==0&&(t.flags&128)===0}function Pc(t){if(Jt){var i=ei;if(i){var o=i;if(!wh(t,i)){if(Rc(t))throw Error(n(418));i=xr(o.nextSibling);var l=Qn;i&&wh(t,i)?Eh(l,o):(t.flags=t.flags&-4097|2,Jt=!1,Qn=t)}}else{if(Rc(t))throw Error(n(418));t.flags=t.flags&-4097|2,Jt=!1,Qn=t}}}function Th(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;Qn=t}function La(t){if(t!==Qn)return!1;if(!Jt)return Th(t),Jt=!0,!1;var i;if((i=t.tag!==3)&&!(i=t.tag!==5)&&(i=t.type,i=i!=="head"&&i!=="body"&&!yc(t.type,t.memoizedProps)),i&&(i=ei)){if(Rc(t))throw Ah(),Error(n(418));for(;i;)Eh(t,i),i=xr(i.nextSibling)}if(Th(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(n(317));e:{for(t=t.nextSibling,i=0;t;){if(t.nodeType===8){var o=t.data;if(o==="/$"){if(i===0){ei=xr(t.nextSibling);break e}i--}else o!=="$"&&o!=="$!"&&o!=="$?"||i++}t=t.nextSibling}ei=null}}else ei=Qn?xr(t.stateNode.nextSibling):null;return!0}function Ah(){for(var t=ei;t;)t=xr(t.nextSibling)}function Rs(){ei=Qn=null,Jt=!1}function Lc(t){xi===null?xi=[t]:xi.push(t)}var Bg=P.ReactCurrentBatchConfig;function Lo(t,i,o){if(t=o.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(o._owner){if(o=o._owner,o){if(o.tag!==1)throw Error(n(309));var l=o.stateNode}if(!l)throw Error(n(147,t));var f=l,h=""+t;return i!==null&&i.ref!==null&&typeof i.ref=="function"&&i.ref._stringRef===h?i.ref:(i=function(E){var F=f.refs;E===null?delete F[h]:F[h]=E},i._stringRef=h,i)}if(typeof t!="string")throw Error(n(284));if(!o._owner)throw Error(n(290,t))}return t}function Da(t,i){throw t=Object.prototype.toString.call(i),Error(n(31,t==="[object Object]"?"object with keys {"+Object.keys(i).join(", ")+"}":t))}function bh(t){var i=t._init;return i(t._payload)}function Ch(t){function i(oe,Y){if(t){var fe=oe.deletions;fe===null?(oe.deletions=[Y],oe.flags|=16):fe.push(Y)}}function o(oe,Y){if(!t)return null;for(;Y!==null;)i(oe,Y),Y=Y.sibling;return null}function l(oe,Y){for(oe=new Map;Y!==null;)Y.key!==null?oe.set(Y.key,Y):oe.set(Y.index,Y),Y=Y.sibling;return oe}function f(oe,Y){return oe=Pr(oe,Y),oe.index=0,oe.sibling=null,oe}function h(oe,Y,fe){return oe.index=fe,t?(fe=oe.alternate,fe!==null?(fe=fe.index,fe<Y?(oe.flags|=2,Y):fe):(oe.flags|=2,Y)):(oe.flags|=1048576,Y)}function E(oe){return t&&oe.alternate===null&&(oe.flags|=2),oe}function F(oe,Y,fe,Ne){return Y===null||Y.tag!==6?(Y=Mu(fe,oe.mode,Ne),Y.return=oe,Y):(Y=f(Y,fe),Y.return=oe,Y)}function V(oe,Y,fe,Ne){var it=fe.type;return it===z?be(oe,Y,fe.props.children,Ne,fe.key):Y!==null&&(Y.elementType===it||typeof it=="object"&&it!==null&&it.$$typeof===ne&&bh(it)===Y.type)?(Ne=f(Y,fe.props),Ne.ref=Lo(oe,Y,fe),Ne.return=oe,Ne):(Ne=nl(fe.type,fe.key,fe.props,null,oe.mode,Ne),Ne.ref=Lo(oe,Y,fe),Ne.return=oe,Ne)}function ge(oe,Y,fe,Ne){return Y===null||Y.tag!==4||Y.stateNode.containerInfo!==fe.containerInfo||Y.stateNode.implementation!==fe.implementation?(Y=Eu(fe,oe.mode,Ne),Y.return=oe,Y):(Y=f(Y,fe.children||[]),Y.return=oe,Y)}function be(oe,Y,fe,Ne,it){return Y===null||Y.tag!==7?(Y=ns(fe,oe.mode,Ne,it),Y.return=oe,Y):(Y=f(Y,fe),Y.return=oe,Y)}function Pe(oe,Y,fe){if(typeof Y=="string"&&Y!==""||typeof Y=="number")return Y=Mu(""+Y,oe.mode,fe),Y.return=oe,Y;if(typeof Y=="object"&&Y!==null){switch(Y.$$typeof){case H:return fe=nl(Y.type,Y.key,Y.props,null,oe.mode,fe),fe.ref=Lo(oe,null,Y),fe.return=oe,fe;case L:return Y=Eu(Y,oe.mode,fe),Y.return=oe,Y;case ne:var Ne=Y._init;return Pe(oe,Ne(Y._payload),fe)}if(G(Y)||_e(Y))return Y=ns(Y,oe.mode,fe,null),Y.return=oe,Y;Da(oe,Y)}return null}function Ae(oe,Y,fe,Ne){var it=Y!==null?Y.key:null;if(typeof fe=="string"&&fe!==""||typeof fe=="number")return it!==null?null:F(oe,Y,""+fe,Ne);if(typeof fe=="object"&&fe!==null){switch(fe.$$typeof){case H:return fe.key===it?V(oe,Y,fe,Ne):null;case L:return fe.key===it?ge(oe,Y,fe,Ne):null;case ne:return it=fe._init,Ae(oe,Y,it(fe._payload),Ne)}if(G(fe)||_e(fe))return it!==null?null:be(oe,Y,fe,Ne,null);Da(oe,fe)}return null}function Ye(oe,Y,fe,Ne,it){if(typeof Ne=="string"&&Ne!==""||typeof Ne=="number")return oe=oe.get(fe)||null,F(Y,oe,""+Ne,it);if(typeof Ne=="object"&&Ne!==null){switch(Ne.$$typeof){case H:return oe=oe.get(Ne.key===null?fe:Ne.key)||null,V(Y,oe,Ne,it);case L:return oe=oe.get(Ne.key===null?fe:Ne.key)||null,ge(Y,oe,Ne,it);case ne:var ct=Ne._init;return Ye(oe,Y,fe,ct(Ne._payload),it)}if(G(Ne)||_e(Ne))return oe=oe.get(fe)||null,be(Y,oe,Ne,it,null);Da(Y,Ne)}return null}function Ze(oe,Y,fe,Ne){for(var it=null,ct=null,ut=Y,dt=Y=0,Sn=null;ut!==null&&dt<fe.length;dt++){ut.index>dt?(Sn=ut,ut=null):Sn=ut.sibling;var kt=Ae(oe,ut,fe[dt],Ne);if(kt===null){ut===null&&(ut=Sn);break}t&&ut&&kt.alternate===null&&i(oe,ut),Y=h(kt,Y,dt),ct===null?it=kt:ct.sibling=kt,ct=kt,ut=Sn}if(dt===fe.length)return o(oe,ut),Jt&&qr(oe,dt),it;if(ut===null){for(;dt<fe.length;dt++)ut=Pe(oe,fe[dt],Ne),ut!==null&&(Y=h(ut,Y,dt),ct===null?it=ut:ct.sibling=ut,ct=ut);return Jt&&qr(oe,dt),it}for(ut=l(oe,ut);dt<fe.length;dt++)Sn=Ye(ut,oe,dt,fe[dt],Ne),Sn!==null&&(t&&Sn.alternate!==null&&ut.delete(Sn.key===null?dt:Sn.key),Y=h(Sn,Y,dt),ct===null?it=Sn:ct.sibling=Sn,ct=Sn);return t&&ut.forEach(function(Lr){return i(oe,Lr)}),Jt&&qr(oe,dt),it}function et(oe,Y,fe,Ne){var it=_e(fe);if(typeof it!="function")throw Error(n(150));if(fe=it.call(fe),fe==null)throw Error(n(151));for(var ct=it=null,ut=Y,dt=Y=0,Sn=null,kt=fe.next();ut!==null&&!kt.done;dt++,kt=fe.next()){ut.index>dt?(Sn=ut,ut=null):Sn=ut.sibling;var Lr=Ae(oe,ut,kt.value,Ne);if(Lr===null){ut===null&&(ut=Sn);break}t&&ut&&Lr.alternate===null&&i(oe,ut),Y=h(Lr,Y,dt),ct===null?it=Lr:ct.sibling=Lr,ct=Lr,ut=Sn}if(kt.done)return o(oe,ut),Jt&&qr(oe,dt),it;if(ut===null){for(;!kt.done;dt++,kt=fe.next())kt=Pe(oe,kt.value,Ne),kt!==null&&(Y=h(kt,Y,dt),ct===null?it=kt:ct.sibling=kt,ct=kt);return Jt&&qr(oe,dt),it}for(ut=l(oe,ut);!kt.done;dt++,kt=fe.next())kt=Ye(ut,oe,dt,kt.value,Ne),kt!==null&&(t&&kt.alternate!==null&&ut.delete(kt.key===null?dt:kt.key),Y=h(kt,Y,dt),ct===null?it=kt:ct.sibling=kt,ct=kt);return t&&ut.forEach(function(v_){return i(oe,v_)}),Jt&&qr(oe,dt),it}function an(oe,Y,fe,Ne){if(typeof fe=="object"&&fe!==null&&fe.type===z&&fe.key===null&&(fe=fe.props.children),typeof fe=="object"&&fe!==null){switch(fe.$$typeof){case H:e:{for(var it=fe.key,ct=Y;ct!==null;){if(ct.key===it){if(it=fe.type,it===z){if(ct.tag===7){o(oe,ct.sibling),Y=f(ct,fe.props.children),Y.return=oe,oe=Y;break e}}else if(ct.elementType===it||typeof it=="object"&&it!==null&&it.$$typeof===ne&&bh(it)===ct.type){o(oe,ct.sibling),Y=f(ct,fe.props),Y.ref=Lo(oe,ct,fe),Y.return=oe,oe=Y;break e}o(oe,ct);break}else i(oe,ct);ct=ct.sibling}fe.type===z?(Y=ns(fe.props.children,oe.mode,Ne,fe.key),Y.return=oe,oe=Y):(Ne=nl(fe.type,fe.key,fe.props,null,oe.mode,Ne),Ne.ref=Lo(oe,Y,fe),Ne.return=oe,oe=Ne)}return E(oe);case L:e:{for(ct=fe.key;Y!==null;){if(Y.key===ct)if(Y.tag===4&&Y.stateNode.containerInfo===fe.containerInfo&&Y.stateNode.implementation===fe.implementation){o(oe,Y.sibling),Y=f(Y,fe.children||[]),Y.return=oe,oe=Y;break e}else{o(oe,Y);break}else i(oe,Y);Y=Y.sibling}Y=Eu(fe,oe.mode,Ne),Y.return=oe,oe=Y}return E(oe);case ne:return ct=fe._init,an(oe,Y,ct(fe._payload),Ne)}if(G(fe))return Ze(oe,Y,fe,Ne);if(_e(fe))return et(oe,Y,fe,Ne);Da(oe,fe)}return typeof fe=="string"&&fe!==""||typeof fe=="number"?(fe=""+fe,Y!==null&&Y.tag===6?(o(oe,Y.sibling),Y=f(Y,fe),Y.return=oe,oe=Y):(o(oe,Y),Y=Mu(fe,oe.mode,Ne),Y.return=oe,oe=Y),E(oe)):o(oe,Y)}return an}var Ps=Ch(!0),Rh=Ch(!1),Ia=Sr(null),Na=null,Ls=null,Dc=null;function Ic(){Dc=Ls=Na=null}function Nc(t){var i=Ia.current;Kt(Ia),t._currentValue=i}function Uc(t,i,o){for(;t!==null;){var l=t.alternate;if((t.childLanes&i)!==i?(t.childLanes|=i,l!==null&&(l.childLanes|=i)):l!==null&&(l.childLanes&i)!==i&&(l.childLanes|=i),t===o)break;t=t.return}}function Ds(t,i){Na=t,Dc=Ls=null,t=t.dependencies,t!==null&&t.firstContext!==null&&((t.lanes&i)!==0&&(Xn=!0),t.firstContext=null)}function ci(t){var i=t._currentValue;if(Dc!==t)if(t={context:t,memoizedValue:i,next:null},Ls===null){if(Na===null)throw Error(n(308));Ls=t,Na.dependencies={lanes:0,firstContext:t}}else Ls=Ls.next=t;return i}var Kr=null;function Fc(t){Kr===null?Kr=[t]:Kr.push(t)}function Ph(t,i,o,l){var f=i.interleaved;return f===null?(o.next=o,Fc(i)):(o.next=f.next,f.next=o),i.interleaved=o,Ji(t,l)}function Ji(t,i){t.lanes|=i;var o=t.alternate;for(o!==null&&(o.lanes|=i),o=t,t=t.return;t!==null;)t.childLanes|=i,o=t.alternate,o!==null&&(o.childLanes|=i),o=t,t=t.return;return o.tag===3?o.stateNode:null}var Er=!1;function Oc(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Lh(t,i){t=t.updateQueue,i.updateQueue===t&&(i.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function Qi(t,i){return{eventTime:t,lane:i,tag:0,payload:null,callback:null,next:null}}function wr(t,i,o){var l=t.updateQueue;if(l===null)return null;if(l=l.shared,(Ot&2)!==0){var f=l.pending;return f===null?i.next=i:(i.next=f.next,f.next=i),l.pending=i,Ji(t,o)}return f=l.interleaved,f===null?(i.next=i,Fc(l)):(i.next=f.next,f.next=i),l.interleaved=i,Ji(t,o)}function Ua(t,i,o){if(i=i.updateQueue,i!==null&&(i=i.shared,(o&4194240)!==0)){var l=i.lanes;l&=t.pendingLanes,o|=l,i.lanes=o,Vn(t,o)}}function Dh(t,i){var o=t.updateQueue,l=t.alternate;if(l!==null&&(l=l.updateQueue,o===l)){var f=null,h=null;if(o=o.firstBaseUpdate,o!==null){do{var E={eventTime:o.eventTime,lane:o.lane,tag:o.tag,payload:o.payload,callback:o.callback,next:null};h===null?f=h=E:h=h.next=E,o=o.next}while(o!==null);h===null?f=h=i:h=h.next=i}else f=h=i;o={baseState:l.baseState,firstBaseUpdate:f,lastBaseUpdate:h,shared:l.shared,effects:l.effects},t.updateQueue=o;return}t=o.lastBaseUpdate,t===null?o.firstBaseUpdate=i:t.next=i,o.lastBaseUpdate=i}function Fa(t,i,o,l){var f=t.updateQueue;Er=!1;var h=f.firstBaseUpdate,E=f.lastBaseUpdate,F=f.shared.pending;if(F!==null){f.shared.pending=null;var V=F,ge=V.next;V.next=null,E===null?h=ge:E.next=ge,E=V;var be=t.alternate;be!==null&&(be=be.updateQueue,F=be.lastBaseUpdate,F!==E&&(F===null?be.firstBaseUpdate=ge:F.next=ge,be.lastBaseUpdate=V))}if(h!==null){var Pe=f.baseState;E=0,be=ge=V=null,F=h;do{var Ae=F.lane,Ye=F.eventTime;if((l&Ae)===Ae){be!==null&&(be=be.next={eventTime:Ye,lane:0,tag:F.tag,payload:F.payload,callback:F.callback,next:null});e:{var Ze=t,et=F;switch(Ae=i,Ye=o,et.tag){case 1:if(Ze=et.payload,typeof Ze=="function"){Pe=Ze.call(Ye,Pe,Ae);break e}Pe=Ze;break e;case 3:Ze.flags=Ze.flags&-65537|128;case 0:if(Ze=et.payload,Ae=typeof Ze=="function"?Ze.call(Ye,Pe,Ae):Ze,Ae==null)break e;Pe=xe({},Pe,Ae);break e;case 2:Er=!0}}F.callback!==null&&F.lane!==0&&(t.flags|=64,Ae=f.effects,Ae===null?f.effects=[F]:Ae.push(F))}else Ye={eventTime:Ye,lane:Ae,tag:F.tag,payload:F.payload,callback:F.callback,next:null},be===null?(ge=be=Ye,V=Pe):be=be.next=Ye,E|=Ae;if(F=F.next,F===null){if(F=f.shared.pending,F===null)break;Ae=F,F=Ae.next,Ae.next=null,f.lastBaseUpdate=Ae,f.shared.pending=null}}while(!0);if(be===null&&(V=Pe),f.baseState=V,f.firstBaseUpdate=ge,f.lastBaseUpdate=be,i=f.shared.interleaved,i!==null){f=i;do E|=f.lane,f=f.next;while(f!==i)}else h===null&&(f.shared.lanes=0);Jr|=E,t.lanes=E,t.memoizedState=Pe}}function Ih(t,i,o){if(t=i.effects,i.effects=null,t!==null)for(i=0;i<t.length;i++){var l=t[i],f=l.callback;if(f!==null){if(l.callback=null,l=o,typeof f!="function")throw Error(n(191,f));f.call(l)}}}var Do={},Ii=Sr(Do),Io=Sr(Do),No=Sr(Do);function $r(t){if(t===Do)throw Error(n(174));return t}function kc(t,i){switch(jt(No,i),jt(Io,t),jt(Ii,Do),t=i.nodeType,t){case 9:case 11:i=(i=i.documentElement)?i.namespaceURI:M(null,"");break;default:t=t===8?i.parentNode:i,i=t.namespaceURI||null,t=t.tagName,i=M(i,t)}Kt(Ii),jt(Ii,i)}function Is(){Kt(Ii),Kt(Io),Kt(No)}function Nh(t){$r(No.current);var i=$r(Ii.current),o=M(i,t.type);i!==o&&(jt(Io,t),jt(Ii,o))}function Bc(t){Io.current===t&&(Kt(Ii),Kt(Io))}var tn=Sr(0);function Oa(t){for(var i=t;i!==null;){if(i.tag===13){var o=i.memoizedState;if(o!==null&&(o=o.dehydrated,o===null||o.data==="$?"||o.data==="$!"))return i}else if(i.tag===19&&i.memoizedProps.revealOrder!==void 0){if((i.flags&128)!==0)return i}else if(i.child!==null){i.child.return=i,i=i.child;continue}if(i===t)break;for(;i.sibling===null;){if(i.return===null||i.return===t)return null;i=i.return}i.sibling.return=i.return,i=i.sibling}return null}var zc=[];function Hc(){for(var t=0;t<zc.length;t++)zc[t]._workInProgressVersionPrimary=null;zc.length=0}var ka=P.ReactCurrentDispatcher,Vc=P.ReactCurrentBatchConfig,Zr=0,nn=null,pn=null,vn=null,Ba=!1,Uo=!1,Fo=0,zg=0;function Rn(){throw Error(n(321))}function Gc(t,i){if(i===null)return!1;for(var o=0;o<i.length&&o<t.length;o++)if(!vi(t[o],i[o]))return!1;return!0}function Wc(t,i,o,l,f,h){if(Zr=h,nn=i,i.memoizedState=null,i.updateQueue=null,i.lanes=0,ka.current=t===null||t.memoizedState===null?Wg:Xg,t=o(l,f),Uo){h=0;do{if(Uo=!1,Fo=0,25<=h)throw Error(n(301));h+=1,vn=pn=null,i.updateQueue=null,ka.current=jg,t=o(l,f)}while(Uo)}if(ka.current=Va,i=pn!==null&&pn.next!==null,Zr=0,vn=pn=nn=null,Ba=!1,i)throw Error(n(300));return t}function Xc(){var t=Fo!==0;return Fo=0,t}function Ni(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return vn===null?nn.memoizedState=vn=t:vn=vn.next=t,vn}function ui(){if(pn===null){var t=nn.alternate;t=t!==null?t.memoizedState:null}else t=pn.next;var i=vn===null?nn.memoizedState:vn.next;if(i!==null)vn=i,pn=t;else{if(t===null)throw Error(n(310));pn=t,t={memoizedState:pn.memoizedState,baseState:pn.baseState,baseQueue:pn.baseQueue,queue:pn.queue,next:null},vn===null?nn.memoizedState=vn=t:vn=vn.next=t}return vn}function Oo(t,i){return typeof i=="function"?i(t):i}function jc(t){var i=ui(),o=i.queue;if(o===null)throw Error(n(311));o.lastRenderedReducer=t;var l=pn,f=l.baseQueue,h=o.pending;if(h!==null){if(f!==null){var E=f.next;f.next=h.next,h.next=E}l.baseQueue=f=h,o.pending=null}if(f!==null){h=f.next,l=l.baseState;var F=E=null,V=null,ge=h;do{var be=ge.lane;if((Zr&be)===be)V!==null&&(V=V.next={lane:0,action:ge.action,hasEagerState:ge.hasEagerState,eagerState:ge.eagerState,next:null}),l=ge.hasEagerState?ge.eagerState:t(l,ge.action);else{var Pe={lane:be,action:ge.action,hasEagerState:ge.hasEagerState,eagerState:ge.eagerState,next:null};V===null?(F=V=Pe,E=l):V=V.next=Pe,nn.lanes|=be,Jr|=be}ge=ge.next}while(ge!==null&&ge!==h);V===null?E=l:V.next=F,vi(l,i.memoizedState)||(Xn=!0),i.memoizedState=l,i.baseState=E,i.baseQueue=V,o.lastRenderedState=l}if(t=o.interleaved,t!==null){f=t;do h=f.lane,nn.lanes|=h,Jr|=h,f=f.next;while(f!==t)}else f===null&&(o.lanes=0);return[i.memoizedState,o.dispatch]}function Yc(t){var i=ui(),o=i.queue;if(o===null)throw Error(n(311));o.lastRenderedReducer=t;var l=o.dispatch,f=o.pending,h=i.memoizedState;if(f!==null){o.pending=null;var E=f=f.next;do h=t(h,E.action),E=E.next;while(E!==f);vi(h,i.memoizedState)||(Xn=!0),i.memoizedState=h,i.baseQueue===null&&(i.baseState=h),o.lastRenderedState=h}return[h,l]}function Uh(){}function Fh(t,i){var o=nn,l=ui(),f=i(),h=!vi(l.memoizedState,f);if(h&&(l.memoizedState=f,Xn=!0),l=l.queue,qc(Bh.bind(null,o,l,t),[t]),l.getSnapshot!==i||h||vn!==null&&vn.memoizedState.tag&1){if(o.flags|=2048,ko(9,kh.bind(null,o,l,f,i),void 0,null),xn===null)throw Error(n(349));(Zr&30)!==0||Oh(o,i,f)}return f}function Oh(t,i,o){t.flags|=16384,t={getSnapshot:i,value:o},i=nn.updateQueue,i===null?(i={lastEffect:null,stores:null},nn.updateQueue=i,i.stores=[t]):(o=i.stores,o===null?i.stores=[t]:o.push(t))}function kh(t,i,o,l){i.value=o,i.getSnapshot=l,zh(i)&&Hh(t)}function Bh(t,i,o){return o(function(){zh(i)&&Hh(t)})}function zh(t){var i=t.getSnapshot;t=t.value;try{var o=i();return!vi(t,o)}catch{return!0}}function Hh(t){var i=Ji(t,1);i!==null&&Ei(i,t,1,-1)}function Vh(t){var i=Ni();return typeof t=="function"&&(t=t()),i.memoizedState=i.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Oo,lastRenderedState:t},i.queue=t,t=t.dispatch=Gg.bind(null,nn,t),[i.memoizedState,t]}function ko(t,i,o,l){return t={tag:t,create:i,destroy:o,deps:l,next:null},i=nn.updateQueue,i===null?(i={lastEffect:null,stores:null},nn.updateQueue=i,i.lastEffect=t.next=t):(o=i.lastEffect,o===null?i.lastEffect=t.next=t:(l=o.next,o.next=t,t.next=l,i.lastEffect=t)),t}function Gh(){return ui().memoizedState}function za(t,i,o,l){var f=Ni();nn.flags|=t,f.memoizedState=ko(1|i,o,void 0,l===void 0?null:l)}function Ha(t,i,o,l){var f=ui();l=l===void 0?null:l;var h=void 0;if(pn!==null){var E=pn.memoizedState;if(h=E.destroy,l!==null&&Gc(l,E.deps)){f.memoizedState=ko(i,o,h,l);return}}nn.flags|=t,f.memoizedState=ko(1|i,o,h,l)}function Wh(t,i){return za(8390656,8,t,i)}function qc(t,i){return Ha(2048,8,t,i)}function Xh(t,i){return Ha(4,2,t,i)}function jh(t,i){return Ha(4,4,t,i)}function Yh(t,i){if(typeof i=="function")return t=t(),i(t),function(){i(null)};if(i!=null)return t=t(),i.current=t,function(){i.current=null}}function qh(t,i,o){return o=o!=null?o.concat([t]):null,Ha(4,4,Yh.bind(null,i,t),o)}function Kc(){}function Kh(t,i){var o=ui();i=i===void 0?null:i;var l=o.memoizedState;return l!==null&&i!==null&&Gc(i,l[1])?l[0]:(o.memoizedState=[t,i],t)}function $h(t,i){var o=ui();i=i===void 0?null:i;var l=o.memoizedState;return l!==null&&i!==null&&Gc(i,l[1])?l[0]:(t=t(),o.memoizedState=[t,i],t)}function Zh(t,i,o){return(Zr&21)===0?(t.baseState&&(t.baseState=!1,Xn=!0),t.memoizedState=o):(vi(o,i)||(o=je(),nn.lanes|=o,Jr|=o,t.baseState=!0),i)}function Hg(t,i){var o=Tt;Tt=o!==0&&4>o?o:4,t(!0);var l=Vc.transition;Vc.transition={};try{t(!1),i()}finally{Tt=o,Vc.transition=l}}function Jh(){return ui().memoizedState}function Vg(t,i,o){var l=Cr(t);if(o={lane:l,action:o,hasEagerState:!1,eagerState:null,next:null},Qh(t))ep(i,o);else if(o=Ph(t,i,o,l),o!==null){var f=Bn();Ei(o,t,l,f),tp(o,i,l)}}function Gg(t,i,o){var l=Cr(t),f={lane:l,action:o,hasEagerState:!1,eagerState:null,next:null};if(Qh(t))ep(i,f);else{var h=t.alternate;if(t.lanes===0&&(h===null||h.lanes===0)&&(h=i.lastRenderedReducer,h!==null))try{var E=i.lastRenderedState,F=h(E,o);if(f.hasEagerState=!0,f.eagerState=F,vi(F,E)){var V=i.interleaved;V===null?(f.next=f,Fc(i)):(f.next=V.next,V.next=f),i.interleaved=f;return}}catch{}finally{}o=Ph(t,i,f,l),o!==null&&(f=Bn(),Ei(o,t,l,f),tp(o,i,l))}}function Qh(t){var i=t.alternate;return t===nn||i!==null&&i===nn}function ep(t,i){Uo=Ba=!0;var o=t.pending;o===null?i.next=i:(i.next=o.next,o.next=i),t.pending=i}function tp(t,i,o){if((o&4194240)!==0){var l=i.lanes;l&=t.pendingLanes,o|=l,i.lanes=o,Vn(t,o)}}var Va={readContext:ci,useCallback:Rn,useContext:Rn,useEffect:Rn,useImperativeHandle:Rn,useInsertionEffect:Rn,useLayoutEffect:Rn,useMemo:Rn,useReducer:Rn,useRef:Rn,useState:Rn,useDebugValue:Rn,useDeferredValue:Rn,useTransition:Rn,useMutableSource:Rn,useSyncExternalStore:Rn,useId:Rn,unstable_isNewReconciler:!1},Wg={readContext:ci,useCallback:function(t,i){return Ni().memoizedState=[t,i===void 0?null:i],t},useContext:ci,useEffect:Wh,useImperativeHandle:function(t,i,o){return o=o!=null?o.concat([t]):null,za(4194308,4,Yh.bind(null,i,t),o)},useLayoutEffect:function(t,i){return za(4194308,4,t,i)},useInsertionEffect:function(t,i){return za(4,2,t,i)},useMemo:function(t,i){var o=Ni();return i=i===void 0?null:i,t=t(),o.memoizedState=[t,i],t},useReducer:function(t,i,o){var l=Ni();return i=o!==void 0?o(i):i,l.memoizedState=l.baseState=i,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:i},l.queue=t,t=t.dispatch=Vg.bind(null,nn,t),[l.memoizedState,t]},useRef:function(t){var i=Ni();return t={current:t},i.memoizedState=t},useState:Vh,useDebugValue:Kc,useDeferredValue:function(t){return Ni().memoizedState=t},useTransition:function(){var t=Vh(!1),i=t[0];return t=Hg.bind(null,t[1]),Ni().memoizedState=t,[i,t]},useMutableSource:function(){},useSyncExternalStore:function(t,i,o){var l=nn,f=Ni();if(Jt){if(o===void 0)throw Error(n(407));o=o()}else{if(o=i(),xn===null)throw Error(n(349));(Zr&30)!==0||Oh(l,i,o)}f.memoizedState=o;var h={value:o,getSnapshot:i};return f.queue=h,Wh(Bh.bind(null,l,h,t),[t]),l.flags|=2048,ko(9,kh.bind(null,l,h,o,i),void 0,null),o},useId:function(){var t=Ni(),i=xn.identifierPrefix;if(Jt){var o=Zi,l=$i;o=(l&~(1<<32-Oe(l)-1)).toString(32)+o,i=":"+i+"R"+o,o=Fo++,0<o&&(i+="H"+o.toString(32)),i+=":"}else o=zg++,i=":"+i+"r"+o.toString(32)+":";return t.memoizedState=i},unstable_isNewReconciler:!1},Xg={readContext:ci,useCallback:Kh,useContext:ci,useEffect:qc,useImperativeHandle:qh,useInsertionEffect:Xh,useLayoutEffect:jh,useMemo:$h,useReducer:jc,useRef:Gh,useState:function(){return jc(Oo)},useDebugValue:Kc,useDeferredValue:function(t){var i=ui();return Zh(i,pn.memoizedState,t)},useTransition:function(){var t=jc(Oo)[0],i=ui().memoizedState;return[t,i]},useMutableSource:Uh,useSyncExternalStore:Fh,useId:Jh,unstable_isNewReconciler:!1},jg={readContext:ci,useCallback:Kh,useContext:ci,useEffect:qc,useImperativeHandle:qh,useInsertionEffect:Xh,useLayoutEffect:jh,useMemo:$h,useReducer:Yc,useRef:Gh,useState:function(){return Yc(Oo)},useDebugValue:Kc,useDeferredValue:function(t){var i=ui();return pn===null?i.memoizedState=t:Zh(i,pn.memoizedState,t)},useTransition:function(){var t=Yc(Oo)[0],i=ui().memoizedState;return[t,i]},useMutableSource:Uh,useSyncExternalStore:Fh,useId:Jh,unstable_isNewReconciler:!1};function Si(t,i){if(t&&t.defaultProps){i=xe({},i),t=t.defaultProps;for(var o in t)i[o]===void 0&&(i[o]=t[o]);return i}return i}function $c(t,i,o,l){i=t.memoizedState,o=o(l,i),o=o==null?i:xe({},i,o),t.memoizedState=o,t.lanes===0&&(t.updateQueue.baseState=o)}var Ga={isMounted:function(t){return(t=t._reactInternals)?Pi(t)===t:!1},enqueueSetState:function(t,i,o){t=t._reactInternals;var l=Bn(),f=Cr(t),h=Qi(l,f);h.payload=i,o!=null&&(h.callback=o),i=wr(t,h,f),i!==null&&(Ei(i,t,f,l),Ua(i,t,f))},enqueueReplaceState:function(t,i,o){t=t._reactInternals;var l=Bn(),f=Cr(t),h=Qi(l,f);h.tag=1,h.payload=i,o!=null&&(h.callback=o),i=wr(t,h,f),i!==null&&(Ei(i,t,f,l),Ua(i,t,f))},enqueueForceUpdate:function(t,i){t=t._reactInternals;var o=Bn(),l=Cr(t),f=Qi(o,l);f.tag=2,i!=null&&(f.callback=i),i=wr(t,f,l),i!==null&&(Ei(i,t,l,o),Ua(i,t,l))}};function np(t,i,o,l,f,h,E){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(l,h,E):i.prototype&&i.prototype.isPureReactComponent?!wo(o,l)||!wo(f,h):!0}function ip(t,i,o){var l=!1,f=yr,h=i.contextType;return typeof h=="object"&&h!==null?h=ci(h):(f=Wn(i)?jr:Cn.current,l=i.contextTypes,h=(l=l!=null)?As(t,f):yr),i=new i(o,h),t.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,i.updater=Ga,t.stateNode=i,i._reactInternals=t,l&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=f,t.__reactInternalMemoizedMaskedChildContext=h),i}function rp(t,i,o,l){t=i.state,typeof i.componentWillReceiveProps=="function"&&i.componentWillReceiveProps(o,l),typeof i.UNSAFE_componentWillReceiveProps=="function"&&i.UNSAFE_componentWillReceiveProps(o,l),i.state!==t&&Ga.enqueueReplaceState(i,i.state,null)}function Zc(t,i,o,l){var f=t.stateNode;f.props=o,f.state=t.memoizedState,f.refs={},Oc(t);var h=i.contextType;typeof h=="object"&&h!==null?f.context=ci(h):(h=Wn(i)?jr:Cn.current,f.context=As(t,h)),f.state=t.memoizedState,h=i.getDerivedStateFromProps,typeof h=="function"&&($c(t,i,h,o),f.state=t.memoizedState),typeof i.getDerivedStateFromProps=="function"||typeof f.getSnapshotBeforeUpdate=="function"||typeof f.UNSAFE_componentWillMount!="function"&&typeof f.componentWillMount!="function"||(i=f.state,typeof f.componentWillMount=="function"&&f.componentWillMount(),typeof f.UNSAFE_componentWillMount=="function"&&f.UNSAFE_componentWillMount(),i!==f.state&&Ga.enqueueReplaceState(f,f.state,null),Fa(t,o,f,l),f.state=t.memoizedState),typeof f.componentDidMount=="function"&&(t.flags|=4194308)}function Ns(t,i){try{var o="",l=i;do o+=ze(l),l=l.return;while(l);var f=o}catch(h){f=`
Error generating stack: `+h.message+`
`+h.stack}return{value:t,source:i,stack:f,digest:null}}function Jc(t,i,o){return{value:t,source:null,stack:o??null,digest:i??null}}function Qc(t,i){try{console.error(i.value)}catch(o){setTimeout(function(){throw o})}}var Yg=typeof WeakMap=="function"?WeakMap:Map;function sp(t,i,o){o=Qi(-1,o),o.tag=3,o.payload={element:null};var l=i.value;return o.callback=function(){$a||($a=!0,pu=l),Qc(t,i)},o}function op(t,i,o){o=Qi(-1,o),o.tag=3;var l=t.type.getDerivedStateFromError;if(typeof l=="function"){var f=i.value;o.payload=function(){return l(f)},o.callback=function(){Qc(t,i)}}var h=t.stateNode;return h!==null&&typeof h.componentDidCatch=="function"&&(o.callback=function(){Qc(t,i),typeof l!="function"&&(Ar===null?Ar=new Set([this]):Ar.add(this));var E=i.stack;this.componentDidCatch(i.value,{componentStack:E!==null?E:""})}),o}function ap(t,i,o){var l=t.pingCache;if(l===null){l=t.pingCache=new Yg;var f=new Set;l.set(i,f)}else f=l.get(i),f===void 0&&(f=new Set,l.set(i,f));f.has(o)||(f.add(o),t=a_.bind(null,t,i,o),i.then(t,t))}function lp(t){do{var i;if((i=t.tag===13)&&(i=t.memoizedState,i=i!==null?i.dehydrated!==null:!0),i)return t;t=t.return}while(t!==null);return null}function cp(t,i,o,l,f){return(t.mode&1)===0?(t===i?t.flags|=65536:(t.flags|=128,o.flags|=131072,o.flags&=-52805,o.tag===1&&(o.alternate===null?o.tag=17:(i=Qi(-1,1),i.tag=2,wr(o,i,1))),o.lanes|=1),t):(t.flags|=65536,t.lanes=f,t)}var qg=P.ReactCurrentOwner,Xn=!1;function kn(t,i,o,l){i.child=t===null?Rh(i,null,o,l):Ps(i,t.child,o,l)}function up(t,i,o,l,f){o=o.render;var h=i.ref;return Ds(i,f),l=Wc(t,i,o,l,h,f),o=Xc(),t!==null&&!Xn?(i.updateQueue=t.updateQueue,i.flags&=-2053,t.lanes&=~f,er(t,i,f)):(Jt&&o&&bc(i),i.flags|=1,kn(t,i,l,f),i.child)}function fp(t,i,o,l,f){if(t===null){var h=o.type;return typeof h=="function"&&!yu(h)&&h.defaultProps===void 0&&o.compare===null&&o.defaultProps===void 0?(i.tag=15,i.type=h,dp(t,i,h,l,f)):(t=nl(o.type,null,l,i,i.mode,f),t.ref=i.ref,t.return=i,i.child=t)}if(h=t.child,(t.lanes&f)===0){var E=h.memoizedProps;if(o=o.compare,o=o!==null?o:wo,o(E,l)&&t.ref===i.ref)return er(t,i,f)}return i.flags|=1,t=Pr(h,l),t.ref=i.ref,t.return=i,i.child=t}function dp(t,i,o,l,f){if(t!==null){var h=t.memoizedProps;if(wo(h,l)&&t.ref===i.ref)if(Xn=!1,i.pendingProps=l=h,(t.lanes&f)!==0)(t.flags&131072)!==0&&(Xn=!0);else return i.lanes=t.lanes,er(t,i,f)}return eu(t,i,o,l,f)}function hp(t,i,o){var l=i.pendingProps,f=l.children,h=t!==null?t.memoizedState:null;if(l.mode==="hidden")if((i.mode&1)===0)i.memoizedState={baseLanes:0,cachePool:null,transitions:null},jt(Fs,ti),ti|=o;else{if((o&1073741824)===0)return t=h!==null?h.baseLanes|o:o,i.lanes=i.childLanes=1073741824,i.memoizedState={baseLanes:t,cachePool:null,transitions:null},i.updateQueue=null,jt(Fs,ti),ti|=t,null;i.memoizedState={baseLanes:0,cachePool:null,transitions:null},l=h!==null?h.baseLanes:o,jt(Fs,ti),ti|=l}else h!==null?(l=h.baseLanes|o,i.memoizedState=null):l=o,jt(Fs,ti),ti|=l;return kn(t,i,f,o),i.child}function pp(t,i){var o=i.ref;(t===null&&o!==null||t!==null&&t.ref!==o)&&(i.flags|=512,i.flags|=2097152)}function eu(t,i,o,l,f){var h=Wn(o)?jr:Cn.current;return h=As(i,h),Ds(i,f),o=Wc(t,i,o,l,h,f),l=Xc(),t!==null&&!Xn?(i.updateQueue=t.updateQueue,i.flags&=-2053,t.lanes&=~f,er(t,i,f)):(Jt&&l&&bc(i),i.flags|=1,kn(t,i,o,f),i.child)}function mp(t,i,o,l,f){if(Wn(o)){var h=!0;ba(i)}else h=!1;if(Ds(i,f),i.stateNode===null)Xa(t,i),ip(i,o,l),Zc(i,o,l,f),l=!0;else if(t===null){var E=i.stateNode,F=i.memoizedProps;E.props=F;var V=E.context,ge=o.contextType;typeof ge=="object"&&ge!==null?ge=ci(ge):(ge=Wn(o)?jr:Cn.current,ge=As(i,ge));var be=o.getDerivedStateFromProps,Pe=typeof be=="function"||typeof E.getSnapshotBeforeUpdate=="function";Pe||typeof E.UNSAFE_componentWillReceiveProps!="function"&&typeof E.componentWillReceiveProps!="function"||(F!==l||V!==ge)&&rp(i,E,l,ge),Er=!1;var Ae=i.memoizedState;E.state=Ae,Fa(i,l,E,f),V=i.memoizedState,F!==l||Ae!==V||Gn.current||Er?(typeof be=="function"&&($c(i,o,be,l),V=i.memoizedState),(F=Er||np(i,o,F,l,Ae,V,ge))?(Pe||typeof E.UNSAFE_componentWillMount!="function"&&typeof E.componentWillMount!="function"||(typeof E.componentWillMount=="function"&&E.componentWillMount(),typeof E.UNSAFE_componentWillMount=="function"&&E.UNSAFE_componentWillMount()),typeof E.componentDidMount=="function"&&(i.flags|=4194308)):(typeof E.componentDidMount=="function"&&(i.flags|=4194308),i.memoizedProps=l,i.memoizedState=V),E.props=l,E.state=V,E.context=ge,l=F):(typeof E.componentDidMount=="function"&&(i.flags|=4194308),l=!1)}else{E=i.stateNode,Lh(t,i),F=i.memoizedProps,ge=i.type===i.elementType?F:Si(i.type,F),E.props=ge,Pe=i.pendingProps,Ae=E.context,V=o.contextType,typeof V=="object"&&V!==null?V=ci(V):(V=Wn(o)?jr:Cn.current,V=As(i,V));var Ye=o.getDerivedStateFromProps;(be=typeof Ye=="function"||typeof E.getSnapshotBeforeUpdate=="function")||typeof E.UNSAFE_componentWillReceiveProps!="function"&&typeof E.componentWillReceiveProps!="function"||(F!==Pe||Ae!==V)&&rp(i,E,l,V),Er=!1,Ae=i.memoizedState,E.state=Ae,Fa(i,l,E,f);var Ze=i.memoizedState;F!==Pe||Ae!==Ze||Gn.current||Er?(typeof Ye=="function"&&($c(i,o,Ye,l),Ze=i.memoizedState),(ge=Er||np(i,o,ge,l,Ae,Ze,V)||!1)?(be||typeof E.UNSAFE_componentWillUpdate!="function"&&typeof E.componentWillUpdate!="function"||(typeof E.componentWillUpdate=="function"&&E.componentWillUpdate(l,Ze,V),typeof E.UNSAFE_componentWillUpdate=="function"&&E.UNSAFE_componentWillUpdate(l,Ze,V)),typeof E.componentDidUpdate=="function"&&(i.flags|=4),typeof E.getSnapshotBeforeUpdate=="function"&&(i.flags|=1024)):(typeof E.componentDidUpdate!="function"||F===t.memoizedProps&&Ae===t.memoizedState||(i.flags|=4),typeof E.getSnapshotBeforeUpdate!="function"||F===t.memoizedProps&&Ae===t.memoizedState||(i.flags|=1024),i.memoizedProps=l,i.memoizedState=Ze),E.props=l,E.state=Ze,E.context=V,l=ge):(typeof E.componentDidUpdate!="function"||F===t.memoizedProps&&Ae===t.memoizedState||(i.flags|=4),typeof E.getSnapshotBeforeUpdate!="function"||F===t.memoizedProps&&Ae===t.memoizedState||(i.flags|=1024),l=!1)}return tu(t,i,o,l,h,f)}function tu(t,i,o,l,f,h){pp(t,i);var E=(i.flags&128)!==0;if(!l&&!E)return f&&Sh(i,o,!1),er(t,i,h);l=i.stateNode,qg.current=i;var F=E&&typeof o.getDerivedStateFromError!="function"?null:l.render();return i.flags|=1,t!==null&&E?(i.child=Ps(i,t.child,null,h),i.child=Ps(i,null,F,h)):kn(t,i,F,h),i.memoizedState=l.state,f&&Sh(i,o,!0),i.child}function gp(t){var i=t.stateNode;i.pendingContext?vh(t,i.pendingContext,i.pendingContext!==i.context):i.context&&vh(t,i.context,!1),kc(t,i.containerInfo)}function _p(t,i,o,l,f){return Rs(),Lc(f),i.flags|=256,kn(t,i,o,l),i.child}var nu={dehydrated:null,treeContext:null,retryLane:0};function iu(t){return{baseLanes:t,cachePool:null,transitions:null}}function vp(t,i,o){var l=i.pendingProps,f=tn.current,h=!1,E=(i.flags&128)!==0,F;if((F=E)||(F=t!==null&&t.memoizedState===null?!1:(f&2)!==0),F?(h=!0,i.flags&=-129):(t===null||t.memoizedState!==null)&&(f|=1),jt(tn,f&1),t===null)return Pc(i),t=i.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?((i.mode&1)===0?i.lanes=1:t.data==="$!"?i.lanes=8:i.lanes=1073741824,null):(E=l.children,t=l.fallback,h?(l=i.mode,h=i.child,E={mode:"hidden",children:E},(l&1)===0&&h!==null?(h.childLanes=0,h.pendingProps=E):h=il(E,l,0,null),t=ns(t,l,o,null),h.return=i,t.return=i,h.sibling=t,i.child=h,i.child.memoizedState=iu(o),i.memoizedState=nu,t):ru(i,E));if(f=t.memoizedState,f!==null&&(F=f.dehydrated,F!==null))return Kg(t,i,E,l,F,f,o);if(h){h=l.fallback,E=i.mode,f=t.child,F=f.sibling;var V={mode:"hidden",children:l.children};return(E&1)===0&&i.child!==f?(l=i.child,l.childLanes=0,l.pendingProps=V,i.deletions=null):(l=Pr(f,V),l.subtreeFlags=f.subtreeFlags&14680064),F!==null?h=Pr(F,h):(h=ns(h,E,o,null),h.flags|=2),h.return=i,l.return=i,l.sibling=h,i.child=l,l=h,h=i.child,E=t.child.memoizedState,E=E===null?iu(o):{baseLanes:E.baseLanes|o,cachePool:null,transitions:E.transitions},h.memoizedState=E,h.childLanes=t.childLanes&~o,i.memoizedState=nu,l}return h=t.child,t=h.sibling,l=Pr(h,{mode:"visible",children:l.children}),(i.mode&1)===0&&(l.lanes=o),l.return=i,l.sibling=null,t!==null&&(o=i.deletions,o===null?(i.deletions=[t],i.flags|=16):o.push(t)),i.child=l,i.memoizedState=null,l}function ru(t,i){return i=il({mode:"visible",children:i},t.mode,0,null),i.return=t,t.child=i}function Wa(t,i,o,l){return l!==null&&Lc(l),Ps(i,t.child,null,o),t=ru(i,i.pendingProps.children),t.flags|=2,i.memoizedState=null,t}function Kg(t,i,o,l,f,h,E){if(o)return i.flags&256?(i.flags&=-257,l=Jc(Error(n(422))),Wa(t,i,E,l)):i.memoizedState!==null?(i.child=t.child,i.flags|=128,null):(h=l.fallback,f=i.mode,l=il({mode:"visible",children:l.children},f,0,null),h=ns(h,f,E,null),h.flags|=2,l.return=i,h.return=i,l.sibling=h,i.child=l,(i.mode&1)!==0&&Ps(i,t.child,null,E),i.child.memoizedState=iu(E),i.memoizedState=nu,h);if((i.mode&1)===0)return Wa(t,i,E,null);if(f.data==="$!"){if(l=f.nextSibling&&f.nextSibling.dataset,l)var F=l.dgst;return l=F,h=Error(n(419)),l=Jc(h,l,void 0),Wa(t,i,E,l)}if(F=(E&t.childLanes)!==0,Xn||F){if(l=xn,l!==null){switch(E&-E){case 4:f=2;break;case 16:f=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:f=32;break;case 536870912:f=268435456;break;default:f=0}f=(f&(l.suspendedLanes|E))!==0?0:f,f!==0&&f!==h.retryLane&&(h.retryLane=f,Ji(t,f),Ei(l,t,f,-1))}return Su(),l=Jc(Error(n(421))),Wa(t,i,E,l)}return f.data==="$?"?(i.flags|=128,i.child=t.child,i=l_.bind(null,t),f._reactRetry=i,null):(t=h.treeContext,ei=xr(f.nextSibling),Qn=i,Jt=!0,xi=null,t!==null&&(ai[li++]=$i,ai[li++]=Zi,ai[li++]=Yr,$i=t.id,Zi=t.overflow,Yr=i),i=ru(i,l.children),i.flags|=4096,i)}function xp(t,i,o){t.lanes|=i;var l=t.alternate;l!==null&&(l.lanes|=i),Uc(t.return,i,o)}function su(t,i,o,l,f){var h=t.memoizedState;h===null?t.memoizedState={isBackwards:i,rendering:null,renderingStartTime:0,last:l,tail:o,tailMode:f}:(h.isBackwards=i,h.rendering=null,h.renderingStartTime=0,h.last=l,h.tail=o,h.tailMode=f)}function Sp(t,i,o){var l=i.pendingProps,f=l.revealOrder,h=l.tail;if(kn(t,i,l.children,o),l=tn.current,(l&2)!==0)l=l&1|2,i.flags|=128;else{if(t!==null&&(t.flags&128)!==0)e:for(t=i.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&xp(t,o,i);else if(t.tag===19)xp(t,o,i);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===i)break e;for(;t.sibling===null;){if(t.return===null||t.return===i)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}l&=1}if(jt(tn,l),(i.mode&1)===0)i.memoizedState=null;else switch(f){case"forwards":for(o=i.child,f=null;o!==null;)t=o.alternate,t!==null&&Oa(t)===null&&(f=o),o=o.sibling;o=f,o===null?(f=i.child,i.child=null):(f=o.sibling,o.sibling=null),su(i,!1,f,o,h);break;case"backwards":for(o=null,f=i.child,i.child=null;f!==null;){if(t=f.alternate,t!==null&&Oa(t)===null){i.child=f;break}t=f.sibling,f.sibling=o,o=f,f=t}su(i,!0,o,null,h);break;case"together":su(i,!1,null,null,void 0);break;default:i.memoizedState=null}return i.child}function Xa(t,i){(i.mode&1)===0&&t!==null&&(t.alternate=null,i.alternate=null,i.flags|=2)}function er(t,i,o){if(t!==null&&(i.dependencies=t.dependencies),Jr|=i.lanes,(o&i.childLanes)===0)return null;if(t!==null&&i.child!==t.child)throw Error(n(153));if(i.child!==null){for(t=i.child,o=Pr(t,t.pendingProps),i.child=o,o.return=i;t.sibling!==null;)t=t.sibling,o=o.sibling=Pr(t,t.pendingProps),o.return=i;o.sibling=null}return i.child}function $g(t,i,o){switch(i.tag){case 3:gp(i),Rs();break;case 5:Nh(i);break;case 1:Wn(i.type)&&ba(i);break;case 4:kc(i,i.stateNode.containerInfo);break;case 10:var l=i.type._context,f=i.memoizedProps.value;jt(Ia,l._currentValue),l._currentValue=f;break;case 13:if(l=i.memoizedState,l!==null)return l.dehydrated!==null?(jt(tn,tn.current&1),i.flags|=128,null):(o&i.child.childLanes)!==0?vp(t,i,o):(jt(tn,tn.current&1),t=er(t,i,o),t!==null?t.sibling:null);jt(tn,tn.current&1);break;case 19:if(l=(o&i.childLanes)!==0,(t.flags&128)!==0){if(l)return Sp(t,i,o);i.flags|=128}if(f=i.memoizedState,f!==null&&(f.rendering=null,f.tail=null,f.lastEffect=null),jt(tn,tn.current),l)break;return null;case 22:case 23:return i.lanes=0,hp(t,i,o)}return er(t,i,o)}var yp,ou,Mp,Ep;yp=function(t,i){for(var o=i.child;o!==null;){if(o.tag===5||o.tag===6)t.appendChild(o.stateNode);else if(o.tag!==4&&o.child!==null){o.child.return=o,o=o.child;continue}if(o===i)break;for(;o.sibling===null;){if(o.return===null||o.return===i)return;o=o.return}o.sibling.return=o.return,o=o.sibling}},ou=function(){},Mp=function(t,i,o,l){var f=t.memoizedProps;if(f!==l){t=i.stateNode,$r(Ii.current);var h=null;switch(o){case"input":f=xt(t,f),l=xt(t,l),h=[];break;case"select":f=xe({},f,{value:void 0}),l=xe({},l,{value:void 0}),h=[];break;case"textarea":f=ft(t,f),l=ft(t,l),h=[];break;default:typeof f.onClick!="function"&&typeof l.onClick=="function"&&(t.onclick=wa)}pe(o,l);var E;o=null;for(ge in f)if(!l.hasOwnProperty(ge)&&f.hasOwnProperty(ge)&&f[ge]!=null)if(ge==="style"){var F=f[ge];for(E in F)F.hasOwnProperty(E)&&(o||(o={}),o[E]="")}else ge!=="dangerouslySetInnerHTML"&&ge!=="children"&&ge!=="suppressContentEditableWarning"&&ge!=="suppressHydrationWarning"&&ge!=="autoFocus"&&(a.hasOwnProperty(ge)?h||(h=[]):(h=h||[]).push(ge,null));for(ge in l){var V=l[ge];if(F=f!=null?f[ge]:void 0,l.hasOwnProperty(ge)&&V!==F&&(V!=null||F!=null))if(ge==="style")if(F){for(E in F)!F.hasOwnProperty(E)||V&&V.hasOwnProperty(E)||(o||(o={}),o[E]="");for(E in V)V.hasOwnProperty(E)&&F[E]!==V[E]&&(o||(o={}),o[E]=V[E])}else o||(h||(h=[]),h.push(ge,o)),o=V;else ge==="dangerouslySetInnerHTML"?(V=V?V.__html:void 0,F=F?F.__html:void 0,V!=null&&F!==V&&(h=h||[]).push(ge,V)):ge==="children"?typeof V!="string"&&typeof V!="number"||(h=h||[]).push(ge,""+V):ge!=="suppressContentEditableWarning"&&ge!=="suppressHydrationWarning"&&(a.hasOwnProperty(ge)?(V!=null&&ge==="onScroll"&&qt("scroll",t),h||F===V||(h=[])):(h=h||[]).push(ge,V))}o&&(h=h||[]).push("style",o);var ge=h;(i.updateQueue=ge)&&(i.flags|=4)}},Ep=function(t,i,o,l){o!==l&&(i.flags|=4)};function Bo(t,i){if(!Jt)switch(t.tailMode){case"hidden":i=t.tail;for(var o=null;i!==null;)i.alternate!==null&&(o=i),i=i.sibling;o===null?t.tail=null:o.sibling=null;break;case"collapsed":o=t.tail;for(var l=null;o!==null;)o.alternate!==null&&(l=o),o=o.sibling;l===null?i||t.tail===null?t.tail=null:t.tail.sibling=null:l.sibling=null}}function Pn(t){var i=t.alternate!==null&&t.alternate.child===t.child,o=0,l=0;if(i)for(var f=t.child;f!==null;)o|=f.lanes|f.childLanes,l|=f.subtreeFlags&14680064,l|=f.flags&14680064,f.return=t,f=f.sibling;else for(f=t.child;f!==null;)o|=f.lanes|f.childLanes,l|=f.subtreeFlags,l|=f.flags,f.return=t,f=f.sibling;return t.subtreeFlags|=l,t.childLanes=o,i}function Zg(t,i,o){var l=i.pendingProps;switch(Cc(i),i.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Pn(i),null;case 1:return Wn(i.type)&&Aa(),Pn(i),null;case 3:return l=i.stateNode,Is(),Kt(Gn),Kt(Cn),Hc(),l.pendingContext&&(l.context=l.pendingContext,l.pendingContext=null),(t===null||t.child===null)&&(La(i)?i.flags|=4:t===null||t.memoizedState.isDehydrated&&(i.flags&256)===0||(i.flags|=1024,xi!==null&&(_u(xi),xi=null))),ou(t,i),Pn(i),null;case 5:Bc(i);var f=$r(No.current);if(o=i.type,t!==null&&i.stateNode!=null)Mp(t,i,o,l,f),t.ref!==i.ref&&(i.flags|=512,i.flags|=2097152);else{if(!l){if(i.stateNode===null)throw Error(n(166));return Pn(i),null}if(t=$r(Ii.current),La(i)){l=i.stateNode,o=i.type;var h=i.memoizedProps;switch(l[Di]=i,l[Ro]=h,t=(i.mode&1)!==0,o){case"dialog":qt("cancel",l),qt("close",l);break;case"iframe":case"object":case"embed":qt("load",l);break;case"video":case"audio":for(f=0;f<Ao.length;f++)qt(Ao[f],l);break;case"source":qt("error",l);break;case"img":case"image":case"link":qt("error",l),qt("load",l);break;case"details":qt("toggle",l);break;case"input":vt(l,h),qt("invalid",l);break;case"select":l._wrapperState={wasMultiple:!!h.multiple},qt("invalid",l);break;case"textarea":wt(l,h),qt("invalid",l)}pe(o,h),f=null;for(var E in h)if(h.hasOwnProperty(E)){var F=h[E];E==="children"?typeof F=="string"?l.textContent!==F&&(h.suppressHydrationWarning!==!0&&Ea(l.textContent,F,t),f=["children",F]):typeof F=="number"&&l.textContent!==""+F&&(h.suppressHydrationWarning!==!0&&Ea(l.textContent,F,t),f=["children",""+F]):a.hasOwnProperty(E)&&F!=null&&E==="onScroll"&&qt("scroll",l)}switch(o){case"input":Ke(l),St(l,h,!0);break;case"textarea":Ke(l),Bt(l);break;case"select":case"option":break;default:typeof h.onClick=="function"&&(l.onclick=wa)}l=f,i.updateQueue=l,l!==null&&(i.flags|=4)}else{E=f.nodeType===9?f:f.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=C(o)),t==="http://www.w3.org/1999/xhtml"?o==="script"?(t=E.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof l.is=="string"?t=E.createElement(o,{is:l.is}):(t=E.createElement(o),o==="select"&&(E=t,l.multiple?E.multiple=!0:l.size&&(E.size=l.size))):t=E.createElementNS(t,o),t[Di]=i,t[Ro]=l,yp(t,i,!1,!1),i.stateNode=t;e:{switch(E=X(o,l),o){case"dialog":qt("cancel",t),qt("close",t),f=l;break;case"iframe":case"object":case"embed":qt("load",t),f=l;break;case"video":case"audio":for(f=0;f<Ao.length;f++)qt(Ao[f],t);f=l;break;case"source":qt("error",t),f=l;break;case"img":case"image":case"link":qt("error",t),qt("load",t),f=l;break;case"details":qt("toggle",t),f=l;break;case"input":vt(t,l),f=xt(t,l),qt("invalid",t);break;case"option":f=l;break;case"select":t._wrapperState={wasMultiple:!!l.multiple},f=xe({},l,{value:void 0}),qt("invalid",t);break;case"textarea":wt(t,l),f=ft(t,l),qt("invalid",t);break;default:f=l}pe(o,f),F=f;for(h in F)if(F.hasOwnProperty(h)){var V=F[h];h==="style"?Me(t,V):h==="dangerouslySetInnerHTML"?(V=V?V.__html:void 0,V!=null&&ye(t,V)):h==="children"?typeof V=="string"?(o!=="textarea"||V!=="")&&we(t,V):typeof V=="number"&&we(t,""+V):h!=="suppressContentEditableWarning"&&h!=="suppressHydrationWarning"&&h!=="autoFocus"&&(a.hasOwnProperty(h)?V!=null&&h==="onScroll"&&qt("scroll",t):V!=null&&I(t,h,V,E))}switch(o){case"input":Ke(t),St(t,l,!1);break;case"textarea":Ke(t),Bt(t);break;case"option":l.value!=null&&t.setAttribute("value",""+U(l.value));break;case"select":t.multiple=!!l.multiple,h=l.value,h!=null?Pt(t,!!l.multiple,h,!1):l.defaultValue!=null&&Pt(t,!!l.multiple,l.defaultValue,!0);break;default:typeof f.onClick=="function"&&(t.onclick=wa)}switch(o){case"button":case"input":case"select":case"textarea":l=!!l.autoFocus;break e;case"img":l=!0;break e;default:l=!1}}l&&(i.flags|=4)}i.ref!==null&&(i.flags|=512,i.flags|=2097152)}return Pn(i),null;case 6:if(t&&i.stateNode!=null)Ep(t,i,t.memoizedProps,l);else{if(typeof l!="string"&&i.stateNode===null)throw Error(n(166));if(o=$r(No.current),$r(Ii.current),La(i)){if(l=i.stateNode,o=i.memoizedProps,l[Di]=i,(h=l.nodeValue!==o)&&(t=Qn,t!==null))switch(t.tag){case 3:Ea(l.nodeValue,o,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&Ea(l.nodeValue,o,(t.mode&1)!==0)}h&&(i.flags|=4)}else l=(o.nodeType===9?o:o.ownerDocument).createTextNode(l),l[Di]=i,i.stateNode=l}return Pn(i),null;case 13:if(Kt(tn),l=i.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(Jt&&ei!==null&&(i.mode&1)!==0&&(i.flags&128)===0)Ah(),Rs(),i.flags|=98560,h=!1;else if(h=La(i),l!==null&&l.dehydrated!==null){if(t===null){if(!h)throw Error(n(318));if(h=i.memoizedState,h=h!==null?h.dehydrated:null,!h)throw Error(n(317));h[Di]=i}else Rs(),(i.flags&128)===0&&(i.memoizedState=null),i.flags|=4;Pn(i),h=!1}else xi!==null&&(_u(xi),xi=null),h=!0;if(!h)return i.flags&65536?i:null}return(i.flags&128)!==0?(i.lanes=o,i):(l=l!==null,l!==(t!==null&&t.memoizedState!==null)&&l&&(i.child.flags|=8192,(i.mode&1)!==0&&(t===null||(tn.current&1)!==0?mn===0&&(mn=3):Su())),i.updateQueue!==null&&(i.flags|=4),Pn(i),null);case 4:return Is(),ou(t,i),t===null&&bo(i.stateNode.containerInfo),Pn(i),null;case 10:return Nc(i.type._context),Pn(i),null;case 17:return Wn(i.type)&&Aa(),Pn(i),null;case 19:if(Kt(tn),h=i.memoizedState,h===null)return Pn(i),null;if(l=(i.flags&128)!==0,E=h.rendering,E===null)if(l)Bo(h,!1);else{if(mn!==0||t!==null&&(t.flags&128)!==0)for(t=i.child;t!==null;){if(E=Oa(t),E!==null){for(i.flags|=128,Bo(h,!1),l=E.updateQueue,l!==null&&(i.updateQueue=l,i.flags|=4),i.subtreeFlags=0,l=o,o=i.child;o!==null;)h=o,t=l,h.flags&=14680066,E=h.alternate,E===null?(h.childLanes=0,h.lanes=t,h.child=null,h.subtreeFlags=0,h.memoizedProps=null,h.memoizedState=null,h.updateQueue=null,h.dependencies=null,h.stateNode=null):(h.childLanes=E.childLanes,h.lanes=E.lanes,h.child=E.child,h.subtreeFlags=0,h.deletions=null,h.memoizedProps=E.memoizedProps,h.memoizedState=E.memoizedState,h.updateQueue=E.updateQueue,h.type=E.type,t=E.dependencies,h.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),o=o.sibling;return jt(tn,tn.current&1|2),i.child}t=t.sibling}h.tail!==null&&en()>Os&&(i.flags|=128,l=!0,Bo(h,!1),i.lanes=4194304)}else{if(!l)if(t=Oa(E),t!==null){if(i.flags|=128,l=!0,o=t.updateQueue,o!==null&&(i.updateQueue=o,i.flags|=4),Bo(h,!0),h.tail===null&&h.tailMode==="hidden"&&!E.alternate&&!Jt)return Pn(i),null}else 2*en()-h.renderingStartTime>Os&&o!==1073741824&&(i.flags|=128,l=!0,Bo(h,!1),i.lanes=4194304);h.isBackwards?(E.sibling=i.child,i.child=E):(o=h.last,o!==null?o.sibling=E:i.child=E,h.last=E)}return h.tail!==null?(i=h.tail,h.rendering=i,h.tail=i.sibling,h.renderingStartTime=en(),i.sibling=null,o=tn.current,jt(tn,l?o&1|2:o&1),i):(Pn(i),null);case 22:case 23:return xu(),l=i.memoizedState!==null,t!==null&&t.memoizedState!==null!==l&&(i.flags|=8192),l&&(i.mode&1)!==0?(ti&1073741824)!==0&&(Pn(i),i.subtreeFlags&6&&(i.flags|=8192)):Pn(i),null;case 24:return null;case 25:return null}throw Error(n(156,i.tag))}function Jg(t,i){switch(Cc(i),i.tag){case 1:return Wn(i.type)&&Aa(),t=i.flags,t&65536?(i.flags=t&-65537|128,i):null;case 3:return Is(),Kt(Gn),Kt(Cn),Hc(),t=i.flags,(t&65536)!==0&&(t&128)===0?(i.flags=t&-65537|128,i):null;case 5:return Bc(i),null;case 13:if(Kt(tn),t=i.memoizedState,t!==null&&t.dehydrated!==null){if(i.alternate===null)throw Error(n(340));Rs()}return t=i.flags,t&65536?(i.flags=t&-65537|128,i):null;case 19:return Kt(tn),null;case 4:return Is(),null;case 10:return Nc(i.type._context),null;case 22:case 23:return xu(),null;case 24:return null;default:return null}}var ja=!1,Ln=!1,Qg=typeof WeakSet=="function"?WeakSet:Set,$e=null;function Us(t,i){var o=t.ref;if(o!==null)if(typeof o=="function")try{o(null)}catch(l){rn(t,i,l)}else o.current=null}function au(t,i,o){try{o()}catch(l){rn(t,i,l)}}var wp=!1;function e_(t,i){if(xc=da,t=nh(),fc(t)){if("selectionStart"in t)var o={start:t.selectionStart,end:t.selectionEnd};else e:{o=(o=t.ownerDocument)&&o.defaultView||window;var l=o.getSelection&&o.getSelection();if(l&&l.rangeCount!==0){o=l.anchorNode;var f=l.anchorOffset,h=l.focusNode;l=l.focusOffset;try{o.nodeType,h.nodeType}catch{o=null;break e}var E=0,F=-1,V=-1,ge=0,be=0,Pe=t,Ae=null;t:for(;;){for(var Ye;Pe!==o||f!==0&&Pe.nodeType!==3||(F=E+f),Pe!==h||l!==0&&Pe.nodeType!==3||(V=E+l),Pe.nodeType===3&&(E+=Pe.nodeValue.length),(Ye=Pe.firstChild)!==null;)Ae=Pe,Pe=Ye;for(;;){if(Pe===t)break t;if(Ae===o&&++ge===f&&(F=E),Ae===h&&++be===l&&(V=E),(Ye=Pe.nextSibling)!==null)break;Pe=Ae,Ae=Pe.parentNode}Pe=Ye}o=F===-1||V===-1?null:{start:F,end:V}}else o=null}o=o||{start:0,end:0}}else o=null;for(Sc={focusedElem:t,selectionRange:o},da=!1,$e=i;$e!==null;)if(i=$e,t=i.child,(i.subtreeFlags&1028)!==0&&t!==null)t.return=i,$e=t;else for(;$e!==null;){i=$e;try{var Ze=i.alternate;if((i.flags&1024)!==0)switch(i.tag){case 0:case 11:case 15:break;case 1:if(Ze!==null){var et=Ze.memoizedProps,an=Ze.memoizedState,oe=i.stateNode,Y=oe.getSnapshotBeforeUpdate(i.elementType===i.type?et:Si(i.type,et),an);oe.__reactInternalSnapshotBeforeUpdate=Y}break;case 3:var fe=i.stateNode.containerInfo;fe.nodeType===1?fe.textContent="":fe.nodeType===9&&fe.documentElement&&fe.removeChild(fe.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(n(163))}}catch(Ne){rn(i,i.return,Ne)}if(t=i.sibling,t!==null){t.return=i.return,$e=t;break}$e=i.return}return Ze=wp,wp=!1,Ze}function zo(t,i,o){var l=i.updateQueue;if(l=l!==null?l.lastEffect:null,l!==null){var f=l=l.next;do{if((f.tag&t)===t){var h=f.destroy;f.destroy=void 0,h!==void 0&&au(i,o,h)}f=f.next}while(f!==l)}}function Ya(t,i){if(i=i.updateQueue,i=i!==null?i.lastEffect:null,i!==null){var o=i=i.next;do{if((o.tag&t)===t){var l=o.create;o.destroy=l()}o=o.next}while(o!==i)}}function lu(t){var i=t.ref;if(i!==null){var o=t.stateNode;switch(t.tag){case 5:t=o;break;default:t=o}typeof i=="function"?i(t):i.current=t}}function Tp(t){var i=t.alternate;i!==null&&(t.alternate=null,Tp(i)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(i=t.stateNode,i!==null&&(delete i[Di],delete i[Ro],delete i[wc],delete i[Fg],delete i[Og])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function Ap(t){return t.tag===5||t.tag===3||t.tag===4}function bp(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||Ap(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function cu(t,i,o){var l=t.tag;if(l===5||l===6)t=t.stateNode,i?o.nodeType===8?o.parentNode.insertBefore(t,i):o.insertBefore(t,i):(o.nodeType===8?(i=o.parentNode,i.insertBefore(t,o)):(i=o,i.appendChild(t)),o=o._reactRootContainer,o!=null||i.onclick!==null||(i.onclick=wa));else if(l!==4&&(t=t.child,t!==null))for(cu(t,i,o),t=t.sibling;t!==null;)cu(t,i,o),t=t.sibling}function uu(t,i,o){var l=t.tag;if(l===5||l===6)t=t.stateNode,i?o.insertBefore(t,i):o.appendChild(t);else if(l!==4&&(t=t.child,t!==null))for(uu(t,i,o),t=t.sibling;t!==null;)uu(t,i,o),t=t.sibling}var wn=null,yi=!1;function Tr(t,i,o){for(o=o.child;o!==null;)Cp(t,i,o),o=o.sibling}function Cp(t,i,o){if(ke&&typeof ke.onCommitFiberUnmount=="function")try{ke.onCommitFiberUnmount(le,o)}catch{}switch(o.tag){case 5:Ln||Us(o,i);case 6:var l=wn,f=yi;wn=null,Tr(t,i,o),wn=l,yi=f,wn!==null&&(yi?(t=wn,o=o.stateNode,t.nodeType===8?t.parentNode.removeChild(o):t.removeChild(o)):wn.removeChild(o.stateNode));break;case 18:wn!==null&&(yi?(t=wn,o=o.stateNode,t.nodeType===8?Ec(t.parentNode,o):t.nodeType===1&&Ec(t,o),vo(t)):Ec(wn,o.stateNode));break;case 4:l=wn,f=yi,wn=o.stateNode.containerInfo,yi=!0,Tr(t,i,o),wn=l,yi=f;break;case 0:case 11:case 14:case 15:if(!Ln&&(l=o.updateQueue,l!==null&&(l=l.lastEffect,l!==null))){f=l=l.next;do{var h=f,E=h.destroy;h=h.tag,E!==void 0&&((h&2)!==0||(h&4)!==0)&&au(o,i,E),f=f.next}while(f!==l)}Tr(t,i,o);break;case 1:if(!Ln&&(Us(o,i),l=o.stateNode,typeof l.componentWillUnmount=="function"))try{l.props=o.memoizedProps,l.state=o.memoizedState,l.componentWillUnmount()}catch(F){rn(o,i,F)}Tr(t,i,o);break;case 21:Tr(t,i,o);break;case 22:o.mode&1?(Ln=(l=Ln)||o.memoizedState!==null,Tr(t,i,o),Ln=l):Tr(t,i,o);break;default:Tr(t,i,o)}}function Rp(t){var i=t.updateQueue;if(i!==null){t.updateQueue=null;var o=t.stateNode;o===null&&(o=t.stateNode=new Qg),i.forEach(function(l){var f=c_.bind(null,t,l);o.has(l)||(o.add(l),l.then(f,f))})}}function Mi(t,i){var o=i.deletions;if(o!==null)for(var l=0;l<o.length;l++){var f=o[l];try{var h=t,E=i,F=E;e:for(;F!==null;){switch(F.tag){case 5:wn=F.stateNode,yi=!1;break e;case 3:wn=F.stateNode.containerInfo,yi=!0;break e;case 4:wn=F.stateNode.containerInfo,yi=!0;break e}F=F.return}if(wn===null)throw Error(n(160));Cp(h,E,f),wn=null,yi=!1;var V=f.alternate;V!==null&&(V.return=null),f.return=null}catch(ge){rn(f,i,ge)}}if(i.subtreeFlags&12854)for(i=i.child;i!==null;)Pp(i,t),i=i.sibling}function Pp(t,i){var o=t.alternate,l=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(Mi(i,t),Ui(t),l&4){try{zo(3,t,t.return),Ya(3,t)}catch(et){rn(t,t.return,et)}try{zo(5,t,t.return)}catch(et){rn(t,t.return,et)}}break;case 1:Mi(i,t),Ui(t),l&512&&o!==null&&Us(o,o.return);break;case 5:if(Mi(i,t),Ui(t),l&512&&o!==null&&Us(o,o.return),t.flags&32){var f=t.stateNode;try{we(f,"")}catch(et){rn(t,t.return,et)}}if(l&4&&(f=t.stateNode,f!=null)){var h=t.memoizedProps,E=o!==null?o.memoizedProps:h,F=t.type,V=t.updateQueue;if(t.updateQueue=null,V!==null)try{F==="input"&&h.type==="radio"&&h.name!=null&&ot(f,h),X(F,E);var ge=X(F,h);for(E=0;E<V.length;E+=2){var be=V[E],Pe=V[E+1];be==="style"?Me(f,Pe):be==="dangerouslySetInnerHTML"?ye(f,Pe):be==="children"?we(f,Pe):I(f,be,Pe,ge)}switch(F){case"input":bt(f,h);break;case"textarea":Fe(f,h);break;case"select":var Ae=f._wrapperState.wasMultiple;f._wrapperState.wasMultiple=!!h.multiple;var Ye=h.value;Ye!=null?Pt(f,!!h.multiple,Ye,!1):Ae!==!!h.multiple&&(h.defaultValue!=null?Pt(f,!!h.multiple,h.defaultValue,!0):Pt(f,!!h.multiple,h.multiple?[]:"",!1))}f[Ro]=h}catch(et){rn(t,t.return,et)}}break;case 6:if(Mi(i,t),Ui(t),l&4){if(t.stateNode===null)throw Error(n(162));f=t.stateNode,h=t.memoizedProps;try{f.nodeValue=h}catch(et){rn(t,t.return,et)}}break;case 3:if(Mi(i,t),Ui(t),l&4&&o!==null&&o.memoizedState.isDehydrated)try{vo(i.containerInfo)}catch(et){rn(t,t.return,et)}break;case 4:Mi(i,t),Ui(t);break;case 13:Mi(i,t),Ui(t),f=t.child,f.flags&8192&&(h=f.memoizedState!==null,f.stateNode.isHidden=h,!h||f.alternate!==null&&f.alternate.memoizedState!==null||(hu=en())),l&4&&Rp(t);break;case 22:if(be=o!==null&&o.memoizedState!==null,t.mode&1?(Ln=(ge=Ln)||be,Mi(i,t),Ln=ge):Mi(i,t),Ui(t),l&8192){if(ge=t.memoizedState!==null,(t.stateNode.isHidden=ge)&&!be&&(t.mode&1)!==0)for($e=t,be=t.child;be!==null;){for(Pe=$e=be;$e!==null;){switch(Ae=$e,Ye=Ae.child,Ae.tag){case 0:case 11:case 14:case 15:zo(4,Ae,Ae.return);break;case 1:Us(Ae,Ae.return);var Ze=Ae.stateNode;if(typeof Ze.componentWillUnmount=="function"){l=Ae,o=Ae.return;try{i=l,Ze.props=i.memoizedProps,Ze.state=i.memoizedState,Ze.componentWillUnmount()}catch(et){rn(l,o,et)}}break;case 5:Us(Ae,Ae.return);break;case 22:if(Ae.memoizedState!==null){Ip(Pe);continue}}Ye!==null?(Ye.return=Ae,$e=Ye):Ip(Pe)}be=be.sibling}e:for(be=null,Pe=t;;){if(Pe.tag===5){if(be===null){be=Pe;try{f=Pe.stateNode,ge?(h=f.style,typeof h.setProperty=="function"?h.setProperty("display","none","important"):h.display="none"):(F=Pe.stateNode,V=Pe.memoizedProps.style,E=V!=null&&V.hasOwnProperty("display")?V.display:null,F.style.display=he("display",E))}catch(et){rn(t,t.return,et)}}}else if(Pe.tag===6){if(be===null)try{Pe.stateNode.nodeValue=ge?"":Pe.memoizedProps}catch(et){rn(t,t.return,et)}}else if((Pe.tag!==22&&Pe.tag!==23||Pe.memoizedState===null||Pe===t)&&Pe.child!==null){Pe.child.return=Pe,Pe=Pe.child;continue}if(Pe===t)break e;for(;Pe.sibling===null;){if(Pe.return===null||Pe.return===t)break e;be===Pe&&(be=null),Pe=Pe.return}be===Pe&&(be=null),Pe.sibling.return=Pe.return,Pe=Pe.sibling}}break;case 19:Mi(i,t),Ui(t),l&4&&Rp(t);break;case 21:break;default:Mi(i,t),Ui(t)}}function Ui(t){var i=t.flags;if(i&2){try{e:{for(var o=t.return;o!==null;){if(Ap(o)){var l=o;break e}o=o.return}throw Error(n(160))}switch(l.tag){case 5:var f=l.stateNode;l.flags&32&&(we(f,""),l.flags&=-33);var h=bp(t);uu(t,h,f);break;case 3:case 4:var E=l.stateNode.containerInfo,F=bp(t);cu(t,F,E);break;default:throw Error(n(161))}}catch(V){rn(t,t.return,V)}t.flags&=-3}i&4096&&(t.flags&=-4097)}function t_(t,i,o){$e=t,Lp(t)}function Lp(t,i,o){for(var l=(t.mode&1)!==0;$e!==null;){var f=$e,h=f.child;if(f.tag===22&&l){var E=f.memoizedState!==null||ja;if(!E){var F=f.alternate,V=F!==null&&F.memoizedState!==null||Ln;F=ja;var ge=Ln;if(ja=E,(Ln=V)&&!ge)for($e=f;$e!==null;)E=$e,V=E.child,E.tag===22&&E.memoizedState!==null?Np(f):V!==null?(V.return=E,$e=V):Np(f);for(;h!==null;)$e=h,Lp(h),h=h.sibling;$e=f,ja=F,Ln=ge}Dp(t)}else(f.subtreeFlags&8772)!==0&&h!==null?(h.return=f,$e=h):Dp(t)}}function Dp(t){for(;$e!==null;){var i=$e;if((i.flags&8772)!==0){var o=i.alternate;try{if((i.flags&8772)!==0)switch(i.tag){case 0:case 11:case 15:Ln||Ya(5,i);break;case 1:var l=i.stateNode;if(i.flags&4&&!Ln)if(o===null)l.componentDidMount();else{var f=i.elementType===i.type?o.memoizedProps:Si(i.type,o.memoizedProps);l.componentDidUpdate(f,o.memoizedState,l.__reactInternalSnapshotBeforeUpdate)}var h=i.updateQueue;h!==null&&Ih(i,h,l);break;case 3:var E=i.updateQueue;if(E!==null){if(o=null,i.child!==null)switch(i.child.tag){case 5:o=i.child.stateNode;break;case 1:o=i.child.stateNode}Ih(i,E,o)}break;case 5:var F=i.stateNode;if(o===null&&i.flags&4){o=F;var V=i.memoizedProps;switch(i.type){case"button":case"input":case"select":case"textarea":V.autoFocus&&o.focus();break;case"img":V.src&&(o.src=V.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(i.memoizedState===null){var ge=i.alternate;if(ge!==null){var be=ge.memoizedState;if(be!==null){var Pe=be.dehydrated;Pe!==null&&vo(Pe)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(n(163))}Ln||i.flags&512&&lu(i)}catch(Ae){rn(i,i.return,Ae)}}if(i===t){$e=null;break}if(o=i.sibling,o!==null){o.return=i.return,$e=o;break}$e=i.return}}function Ip(t){for(;$e!==null;){var i=$e;if(i===t){$e=null;break}var o=i.sibling;if(o!==null){o.return=i.return,$e=o;break}$e=i.return}}function Np(t){for(;$e!==null;){var i=$e;try{switch(i.tag){case 0:case 11:case 15:var o=i.return;try{Ya(4,i)}catch(V){rn(i,o,V)}break;case 1:var l=i.stateNode;if(typeof l.componentDidMount=="function"){var f=i.return;try{l.componentDidMount()}catch(V){rn(i,f,V)}}var h=i.return;try{lu(i)}catch(V){rn(i,h,V)}break;case 5:var E=i.return;try{lu(i)}catch(V){rn(i,E,V)}}}catch(V){rn(i,i.return,V)}if(i===t){$e=null;break}var F=i.sibling;if(F!==null){F.return=i.return,$e=F;break}$e=i.return}}var n_=Math.ceil,qa=P.ReactCurrentDispatcher,fu=P.ReactCurrentOwner,fi=P.ReactCurrentBatchConfig,Ot=0,xn=null,un=null,Tn=0,ti=0,Fs=Sr(0),mn=0,Ho=null,Jr=0,Ka=0,du=0,Vo=null,jn=null,hu=0,Os=1/0,tr=null,$a=!1,pu=null,Ar=null,Za=!1,br=null,Ja=0,Go=0,mu=null,Qa=-1,el=0;function Bn(){return(Ot&6)!==0?en():Qa!==-1?Qa:Qa=en()}function Cr(t){return(t.mode&1)===0?1:(Ot&2)!==0&&Tn!==0?Tn&-Tn:Bg.transition!==null?(el===0&&(el=je()),el):(t=Tt,t!==0||(t=window.event,t=t===void 0?16:Fd(t.type)),t)}function Ei(t,i,o,l){if(50<Go)throw Go=0,mu=null,Error(n(185));Et(t,o,l),((Ot&2)===0||t!==xn)&&(t===xn&&((Ot&2)===0&&(Ka|=o),mn===4&&Rr(t,Tn)),Yn(t,l),o===1&&Ot===0&&(i.mode&1)===0&&(Os=en()+500,Ca&&Mr()))}function Yn(t,i){var o=t.callbackNode;Ht(t,i);var l=Xt(t,t===xn?Tn:0);if(l===0)o!==null&&ua(o),t.callbackNode=null,t.callbackPriority=0;else if(i=l&-l,t.callbackPriority!==i){if(o!=null&&ua(o),i===1)t.tag===0?kg(Fp.bind(null,t)):yh(Fp.bind(null,t)),Ng(function(){(Ot&6)===0&&Mr()}),o=null;else{switch(Yi(l)){case 1:o=ho;break;case 4:o=A;break;case 16:o=K;break;case 536870912:o=ce;break;default:o=K}o=Wp(o,Up.bind(null,t))}t.callbackPriority=i,t.callbackNode=o}}function Up(t,i){if(Qa=-1,el=0,(Ot&6)!==0)throw Error(n(327));var o=t.callbackNode;if(ks()&&t.callbackNode!==o)return null;var l=Xt(t,t===xn?Tn:0);if(l===0)return null;if((l&30)!==0||(l&t.expiredLanes)!==0||i)i=tl(t,l);else{i=l;var f=Ot;Ot|=2;var h=kp();(xn!==t||Tn!==i)&&(tr=null,Os=en()+500,es(t,i));do try{s_();break}catch(F){Op(t,F)}while(!0);Ic(),qa.current=h,Ot=f,un!==null?i=0:(xn=null,Tn=0,i=mn)}if(i!==0){if(i===2&&(f=cn(t),f!==0&&(l=f,i=gu(t,f))),i===1)throw o=Ho,es(t,0),Rr(t,l),Yn(t,en()),o;if(i===6)Rr(t,l);else{if(f=t.current.alternate,(l&30)===0&&!i_(f)&&(i=tl(t,l),i===2&&(h=cn(t),h!==0&&(l=h,i=gu(t,h))),i===1))throw o=Ho,es(t,0),Rr(t,l),Yn(t,en()),o;switch(t.finishedWork=f,t.finishedLanes=l,i){case 0:case 1:throw Error(n(345));case 2:ts(t,jn,tr);break;case 3:if(Rr(t,l),(l&130023424)===l&&(i=hu+500-en(),10<i)){if(Xt(t,0)!==0)break;if(f=t.suspendedLanes,(f&l)!==l){Bn(),t.pingedLanes|=t.suspendedLanes&f;break}t.timeoutHandle=Mc(ts.bind(null,t,jn,tr),i);break}ts(t,jn,tr);break;case 4:if(Rr(t,l),(l&4194240)===l)break;for(i=t.eventTimes,f=-1;0<l;){var E=31-Oe(l);h=1<<E,E=i[E],E>f&&(f=E),l&=~h}if(l=f,l=en()-l,l=(120>l?120:480>l?480:1080>l?1080:1920>l?1920:3e3>l?3e3:4320>l?4320:1960*n_(l/1960))-l,10<l){t.timeoutHandle=Mc(ts.bind(null,t,jn,tr),l);break}ts(t,jn,tr);break;case 5:ts(t,jn,tr);break;default:throw Error(n(329))}}}return Yn(t,en()),t.callbackNode===o?Up.bind(null,t):null}function gu(t,i){var o=Vo;return t.current.memoizedState.isDehydrated&&(es(t,i).flags|=256),t=tl(t,i),t!==2&&(i=jn,jn=o,i!==null&&_u(i)),t}function _u(t){jn===null?jn=t:jn.push.apply(jn,t)}function i_(t){for(var i=t;;){if(i.flags&16384){var o=i.updateQueue;if(o!==null&&(o=o.stores,o!==null))for(var l=0;l<o.length;l++){var f=o[l],h=f.getSnapshot;f=f.value;try{if(!vi(h(),f))return!1}catch{return!1}}}if(o=i.child,i.subtreeFlags&16384&&o!==null)o.return=i,i=o;else{if(i===t)break;for(;i.sibling===null;){if(i.return===null||i.return===t)return!0;i=i.return}i.sibling.return=i.return,i=i.sibling}}return!0}function Rr(t,i){for(i&=~du,i&=~Ka,t.suspendedLanes|=i,t.pingedLanes&=~i,t=t.expirationTimes;0<i;){var o=31-Oe(i),l=1<<o;t[o]=-1,i&=~l}}function Fp(t){if((Ot&6)!==0)throw Error(n(327));ks();var i=Xt(t,0);if((i&1)===0)return Yn(t,en()),null;var o=tl(t,i);if(t.tag!==0&&o===2){var l=cn(t);l!==0&&(i=l,o=gu(t,l))}if(o===1)throw o=Ho,es(t,0),Rr(t,i),Yn(t,en()),o;if(o===6)throw Error(n(345));return t.finishedWork=t.current.alternate,t.finishedLanes=i,ts(t,jn,tr),Yn(t,en()),null}function vu(t,i){var o=Ot;Ot|=1;try{return t(i)}finally{Ot=o,Ot===0&&(Os=en()+500,Ca&&Mr())}}function Qr(t){br!==null&&br.tag===0&&(Ot&6)===0&&ks();var i=Ot;Ot|=1;var o=fi.transition,l=Tt;try{if(fi.transition=null,Tt=1,t)return t()}finally{Tt=l,fi.transition=o,Ot=i,(Ot&6)===0&&Mr()}}function xu(){ti=Fs.current,Kt(Fs)}function es(t,i){t.finishedWork=null,t.finishedLanes=0;var o=t.timeoutHandle;if(o!==-1&&(t.timeoutHandle=-1,Ig(o)),un!==null)for(o=un.return;o!==null;){var l=o;switch(Cc(l),l.tag){case 1:l=l.type.childContextTypes,l!=null&&Aa();break;case 3:Is(),Kt(Gn),Kt(Cn),Hc();break;case 5:Bc(l);break;case 4:Is();break;case 13:Kt(tn);break;case 19:Kt(tn);break;case 10:Nc(l.type._context);break;case 22:case 23:xu()}o=o.return}if(xn=t,un=t=Pr(t.current,null),Tn=ti=i,mn=0,Ho=null,du=Ka=Jr=0,jn=Vo=null,Kr!==null){for(i=0;i<Kr.length;i++)if(o=Kr[i],l=o.interleaved,l!==null){o.interleaved=null;var f=l.next,h=o.pending;if(h!==null){var E=h.next;h.next=f,l.next=E}o.pending=l}Kr=null}return t}function Op(t,i){do{var o=un;try{if(Ic(),ka.current=Va,Ba){for(var l=nn.memoizedState;l!==null;){var f=l.queue;f!==null&&(f.pending=null),l=l.next}Ba=!1}if(Zr=0,vn=pn=nn=null,Uo=!1,Fo=0,fu.current=null,o===null||o.return===null){mn=1,Ho=i,un=null;break}e:{var h=t,E=o.return,F=o,V=i;if(i=Tn,F.flags|=32768,V!==null&&typeof V=="object"&&typeof V.then=="function"){var ge=V,be=F,Pe=be.tag;if((be.mode&1)===0&&(Pe===0||Pe===11||Pe===15)){var Ae=be.alternate;Ae?(be.updateQueue=Ae.updateQueue,be.memoizedState=Ae.memoizedState,be.lanes=Ae.lanes):(be.updateQueue=null,be.memoizedState=null)}var Ye=lp(E);if(Ye!==null){Ye.flags&=-257,cp(Ye,E,F,h,i),Ye.mode&1&&ap(h,ge,i),i=Ye,V=ge;var Ze=i.updateQueue;if(Ze===null){var et=new Set;et.add(V),i.updateQueue=et}else Ze.add(V);break e}else{if((i&1)===0){ap(h,ge,i),Su();break e}V=Error(n(426))}}else if(Jt&&F.mode&1){var an=lp(E);if(an!==null){(an.flags&65536)===0&&(an.flags|=256),cp(an,E,F,h,i),Lc(Ns(V,F));break e}}h=V=Ns(V,F),mn!==4&&(mn=2),Vo===null?Vo=[h]:Vo.push(h),h=E;do{switch(h.tag){case 3:h.flags|=65536,i&=-i,h.lanes|=i;var oe=sp(h,V,i);Dh(h,oe);break e;case 1:F=V;var Y=h.type,fe=h.stateNode;if((h.flags&128)===0&&(typeof Y.getDerivedStateFromError=="function"||fe!==null&&typeof fe.componentDidCatch=="function"&&(Ar===null||!Ar.has(fe)))){h.flags|=65536,i&=-i,h.lanes|=i;var Ne=op(h,F,i);Dh(h,Ne);break e}}h=h.return}while(h!==null)}zp(o)}catch(it){i=it,un===o&&o!==null&&(un=o=o.return);continue}break}while(!0)}function kp(){var t=qa.current;return qa.current=Va,t===null?Va:t}function Su(){(mn===0||mn===3||mn===2)&&(mn=4),xn===null||(Jr&268435455)===0&&(Ka&268435455)===0||Rr(xn,Tn)}function tl(t,i){var o=Ot;Ot|=2;var l=kp();(xn!==t||Tn!==i)&&(tr=null,es(t,i));do try{r_();break}catch(f){Op(t,f)}while(!0);if(Ic(),Ot=o,qa.current=l,un!==null)throw Error(n(261));return xn=null,Tn=0,mn}function r_(){for(;un!==null;)Bp(un)}function s_(){for(;un!==null&&!Zl();)Bp(un)}function Bp(t){var i=Gp(t.alternate,t,ti);t.memoizedProps=t.pendingProps,i===null?zp(t):un=i,fu.current=null}function zp(t){var i=t;do{var o=i.alternate;if(t=i.return,(i.flags&32768)===0){if(o=Zg(o,i,ti),o!==null){un=o;return}}else{if(o=Jg(o,i),o!==null){o.flags&=32767,un=o;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{mn=6,un=null;return}}if(i=i.sibling,i!==null){un=i;return}un=i=t}while(i!==null);mn===0&&(mn=5)}function ts(t,i,o){var l=Tt,f=fi.transition;try{fi.transition=null,Tt=1,o_(t,i,o,l)}finally{fi.transition=f,Tt=l}return null}function o_(t,i,o,l){do ks();while(br!==null);if((Ot&6)!==0)throw Error(n(327));o=t.finishedWork;var f=t.finishedLanes;if(o===null)return null;if(t.finishedWork=null,t.finishedLanes=0,o===t.current)throw Error(n(177));t.callbackNode=null,t.callbackPriority=0;var h=o.lanes|o.childLanes;if(Hn(t,h),t===xn&&(un=xn=null,Tn=0),(o.subtreeFlags&2064)===0&&(o.flags&2064)===0||Za||(Za=!0,Wp(K,function(){return ks(),null})),h=(o.flags&15990)!==0,(o.subtreeFlags&15990)!==0||h){h=fi.transition,fi.transition=null;var E=Tt;Tt=1;var F=Ot;Ot|=4,fu.current=null,e_(t,o),Pp(o,t),Ag(Sc),da=!!xc,Sc=xc=null,t.current=o,t_(o),Jl(),Ot=F,Tt=E,fi.transition=h}else t.current=o;if(Za&&(Za=!1,br=t,Ja=f),h=t.pendingLanes,h===0&&(Ar=null),qe(o.stateNode),Yn(t,en()),i!==null)for(l=t.onRecoverableError,o=0;o<i.length;o++)f=i[o],l(f.value,{componentStack:f.stack,digest:f.digest});if($a)throw $a=!1,t=pu,pu=null,t;return(Ja&1)!==0&&t.tag!==0&&ks(),h=t.pendingLanes,(h&1)!==0?t===mu?Go++:(Go=0,mu=t):Go=0,Mr(),null}function ks(){if(br!==null){var t=Yi(Ja),i=fi.transition,o=Tt;try{if(fi.transition=null,Tt=16>t?16:t,br===null)var l=!1;else{if(t=br,br=null,Ja=0,(Ot&6)!==0)throw Error(n(331));var f=Ot;for(Ot|=4,$e=t.current;$e!==null;){var h=$e,E=h.child;if(($e.flags&16)!==0){var F=h.deletions;if(F!==null){for(var V=0;V<F.length;V++){var ge=F[V];for($e=ge;$e!==null;){var be=$e;switch(be.tag){case 0:case 11:case 15:zo(8,be,h)}var Pe=be.child;if(Pe!==null)Pe.return=be,$e=Pe;else for(;$e!==null;){be=$e;var Ae=be.sibling,Ye=be.return;if(Tp(be),be===ge){$e=null;break}if(Ae!==null){Ae.return=Ye,$e=Ae;break}$e=Ye}}}var Ze=h.alternate;if(Ze!==null){var et=Ze.child;if(et!==null){Ze.child=null;do{var an=et.sibling;et.sibling=null,et=an}while(et!==null)}}$e=h}}if((h.subtreeFlags&2064)!==0&&E!==null)E.return=h,$e=E;else e:for(;$e!==null;){if(h=$e,(h.flags&2048)!==0)switch(h.tag){case 0:case 11:case 15:zo(9,h,h.return)}var oe=h.sibling;if(oe!==null){oe.return=h.return,$e=oe;break e}$e=h.return}}var Y=t.current;for($e=Y;$e!==null;){E=$e;var fe=E.child;if((E.subtreeFlags&2064)!==0&&fe!==null)fe.return=E,$e=fe;else e:for(E=Y;$e!==null;){if(F=$e,(F.flags&2048)!==0)try{switch(F.tag){case 0:case 11:case 15:Ya(9,F)}}catch(it){rn(F,F.return,it)}if(F===E){$e=null;break e}var Ne=F.sibling;if(Ne!==null){Ne.return=F.return,$e=Ne;break e}$e=F.return}}if(Ot=f,Mr(),ke&&typeof ke.onPostCommitFiberRoot=="function")try{ke.onPostCommitFiberRoot(le,t)}catch{}l=!0}return l}finally{Tt=o,fi.transition=i}}return!1}function Hp(t,i,o){i=Ns(o,i),i=sp(t,i,1),t=wr(t,i,1),i=Bn(),t!==null&&(Et(t,1,i),Yn(t,i))}function rn(t,i,o){if(t.tag===3)Hp(t,t,o);else for(;i!==null;){if(i.tag===3){Hp(i,t,o);break}else if(i.tag===1){var l=i.stateNode;if(typeof i.type.getDerivedStateFromError=="function"||typeof l.componentDidCatch=="function"&&(Ar===null||!Ar.has(l))){t=Ns(o,t),t=op(i,t,1),i=wr(i,t,1),t=Bn(),i!==null&&(Et(i,1,t),Yn(i,t));break}}i=i.return}}function a_(t,i,o){var l=t.pingCache;l!==null&&l.delete(i),i=Bn(),t.pingedLanes|=t.suspendedLanes&o,xn===t&&(Tn&o)===o&&(mn===4||mn===3&&(Tn&130023424)===Tn&&500>en()-hu?es(t,0):du|=o),Yn(t,i)}function Vp(t,i){i===0&&((t.mode&1)===0?i=1:(i=nt,nt<<=1,(nt&130023424)===0&&(nt=4194304)));var o=Bn();t=Ji(t,i),t!==null&&(Et(t,i,o),Yn(t,o))}function l_(t){var i=t.memoizedState,o=0;i!==null&&(o=i.retryLane),Vp(t,o)}function c_(t,i){var o=0;switch(t.tag){case 13:var l=t.stateNode,f=t.memoizedState;f!==null&&(o=f.retryLane);break;case 19:l=t.stateNode;break;default:throw Error(n(314))}l!==null&&l.delete(i),Vp(t,o)}var Gp;Gp=function(t,i,o){if(t!==null)if(t.memoizedProps!==i.pendingProps||Gn.current)Xn=!0;else{if((t.lanes&o)===0&&(i.flags&128)===0)return Xn=!1,$g(t,i,o);Xn=(t.flags&131072)!==0}else Xn=!1,Jt&&(i.flags&1048576)!==0&&Mh(i,Pa,i.index);switch(i.lanes=0,i.tag){case 2:var l=i.type;Xa(t,i),t=i.pendingProps;var f=As(i,Cn.current);Ds(i,o),f=Wc(null,i,l,t,f,o);var h=Xc();return i.flags|=1,typeof f=="object"&&f!==null&&typeof f.render=="function"&&f.$$typeof===void 0?(i.tag=1,i.memoizedState=null,i.updateQueue=null,Wn(l)?(h=!0,ba(i)):h=!1,i.memoizedState=f.state!==null&&f.state!==void 0?f.state:null,Oc(i),f.updater=Ga,i.stateNode=f,f._reactInternals=i,Zc(i,l,t,o),i=tu(null,i,l,!0,h,o)):(i.tag=0,Jt&&h&&bc(i),kn(null,i,f,o),i=i.child),i;case 16:l=i.elementType;e:{switch(Xa(t,i),t=i.pendingProps,f=l._init,l=f(l._payload),i.type=l,f=i.tag=f_(l),t=Si(l,t),f){case 0:i=eu(null,i,l,t,o);break e;case 1:i=mp(null,i,l,t,o);break e;case 11:i=up(null,i,l,t,o);break e;case 14:i=fp(null,i,l,Si(l.type,t),o);break e}throw Error(n(306,l,""))}return i;case 0:return l=i.type,f=i.pendingProps,f=i.elementType===l?f:Si(l,f),eu(t,i,l,f,o);case 1:return l=i.type,f=i.pendingProps,f=i.elementType===l?f:Si(l,f),mp(t,i,l,f,o);case 3:e:{if(gp(i),t===null)throw Error(n(387));l=i.pendingProps,h=i.memoizedState,f=h.element,Lh(t,i),Fa(i,l,null,o);var E=i.memoizedState;if(l=E.element,h.isDehydrated)if(h={element:l,isDehydrated:!1,cache:E.cache,pendingSuspenseBoundaries:E.pendingSuspenseBoundaries,transitions:E.transitions},i.updateQueue.baseState=h,i.memoizedState=h,i.flags&256){f=Ns(Error(n(423)),i),i=_p(t,i,l,o,f);break e}else if(l!==f){f=Ns(Error(n(424)),i),i=_p(t,i,l,o,f);break e}else for(ei=xr(i.stateNode.containerInfo.firstChild),Qn=i,Jt=!0,xi=null,o=Rh(i,null,l,o),i.child=o;o;)o.flags=o.flags&-3|4096,o=o.sibling;else{if(Rs(),l===f){i=er(t,i,o);break e}kn(t,i,l,o)}i=i.child}return i;case 5:return Nh(i),t===null&&Pc(i),l=i.type,f=i.pendingProps,h=t!==null?t.memoizedProps:null,E=f.children,yc(l,f)?E=null:h!==null&&yc(l,h)&&(i.flags|=32),pp(t,i),kn(t,i,E,o),i.child;case 6:return t===null&&Pc(i),null;case 13:return vp(t,i,o);case 4:return kc(i,i.stateNode.containerInfo),l=i.pendingProps,t===null?i.child=Ps(i,null,l,o):kn(t,i,l,o),i.child;case 11:return l=i.type,f=i.pendingProps,f=i.elementType===l?f:Si(l,f),up(t,i,l,f,o);case 7:return kn(t,i,i.pendingProps,o),i.child;case 8:return kn(t,i,i.pendingProps.children,o),i.child;case 12:return kn(t,i,i.pendingProps.children,o),i.child;case 10:e:{if(l=i.type._context,f=i.pendingProps,h=i.memoizedProps,E=f.value,jt(Ia,l._currentValue),l._currentValue=E,h!==null)if(vi(h.value,E)){if(h.children===f.children&&!Gn.current){i=er(t,i,o);break e}}else for(h=i.child,h!==null&&(h.return=i);h!==null;){var F=h.dependencies;if(F!==null){E=h.child;for(var V=F.firstContext;V!==null;){if(V.context===l){if(h.tag===1){V=Qi(-1,o&-o),V.tag=2;var ge=h.updateQueue;if(ge!==null){ge=ge.shared;var be=ge.pending;be===null?V.next=V:(V.next=be.next,be.next=V),ge.pending=V}}h.lanes|=o,V=h.alternate,V!==null&&(V.lanes|=o),Uc(h.return,o,i),F.lanes|=o;break}V=V.next}}else if(h.tag===10)E=h.type===i.type?null:h.child;else if(h.tag===18){if(E=h.return,E===null)throw Error(n(341));E.lanes|=o,F=E.alternate,F!==null&&(F.lanes|=o),Uc(E,o,i),E=h.sibling}else E=h.child;if(E!==null)E.return=h;else for(E=h;E!==null;){if(E===i){E=null;break}if(h=E.sibling,h!==null){h.return=E.return,E=h;break}E=E.return}h=E}kn(t,i,f.children,o),i=i.child}return i;case 9:return f=i.type,l=i.pendingProps.children,Ds(i,o),f=ci(f),l=l(f),i.flags|=1,kn(t,i,l,o),i.child;case 14:return l=i.type,f=Si(l,i.pendingProps),f=Si(l.type,f),fp(t,i,l,f,o);case 15:return dp(t,i,i.type,i.pendingProps,o);case 17:return l=i.type,f=i.pendingProps,f=i.elementType===l?f:Si(l,f),Xa(t,i),i.tag=1,Wn(l)?(t=!0,ba(i)):t=!1,Ds(i,o),ip(i,l,f),Zc(i,l,f,o),tu(null,i,l,!0,t,o);case 19:return Sp(t,i,o);case 22:return hp(t,i,o)}throw Error(n(156,i.tag))};function Wp(t,i){return ca(t,i)}function u_(t,i,o,l){this.tag=t,this.key=o,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=i,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=l,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function di(t,i,o,l){return new u_(t,i,o,l)}function yu(t){return t=t.prototype,!(!t||!t.isReactComponent)}function f_(t){if(typeof t=="function")return yu(t)?1:0;if(t!=null){if(t=t.$$typeof,t===q)return 11;if(t===W)return 14}return 2}function Pr(t,i){var o=t.alternate;return o===null?(o=di(t.tag,i,t.key,t.mode),o.elementType=t.elementType,o.type=t.type,o.stateNode=t.stateNode,o.alternate=t,t.alternate=o):(o.pendingProps=i,o.type=t.type,o.flags=0,o.subtreeFlags=0,o.deletions=null),o.flags=t.flags&14680064,o.childLanes=t.childLanes,o.lanes=t.lanes,o.child=t.child,o.memoizedProps=t.memoizedProps,o.memoizedState=t.memoizedState,o.updateQueue=t.updateQueue,i=t.dependencies,o.dependencies=i===null?null:{lanes:i.lanes,firstContext:i.firstContext},o.sibling=t.sibling,o.index=t.index,o.ref=t.ref,o}function nl(t,i,o,l,f,h){var E=2;if(l=t,typeof t=="function")yu(t)&&(E=1);else if(typeof t=="string")E=5;else e:switch(t){case z:return ns(o.children,f,h,i);case w:E=8,f|=8;break;case D:return t=di(12,o,i,f|2),t.elementType=D,t.lanes=h,t;case de:return t=di(13,o,i,f),t.elementType=de,t.lanes=h,t;case ve:return t=di(19,o,i,f),t.elementType=ve,t.lanes=h,t;case Z:return il(o,f,h,i);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case j:E=10;break e;case k:E=9;break e;case q:E=11;break e;case W:E=14;break e;case ne:E=16,l=null;break e}throw Error(n(130,t==null?t:typeof t,""))}return i=di(E,o,i,f),i.elementType=t,i.type=l,i.lanes=h,i}function ns(t,i,o,l){return t=di(7,t,l,i),t.lanes=o,t}function il(t,i,o,l){return t=di(22,t,l,i),t.elementType=Z,t.lanes=o,t.stateNode={isHidden:!1},t}function Mu(t,i,o){return t=di(6,t,null,i),t.lanes=o,t}function Eu(t,i,o){return i=di(4,t.children!==null?t.children:[],t.key,i),i.lanes=o,i.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},i}function d_(t,i,o,l,f){this.tag=i,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=En(0),this.expirationTimes=En(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=En(0),this.identifierPrefix=l,this.onRecoverableError=f,this.mutableSourceEagerHydrationData=null}function wu(t,i,o,l,f,h,E,F,V){return t=new d_(t,i,o,F,V),i===1?(i=1,h===!0&&(i|=8)):i=0,h=di(3,null,null,i),t.current=h,h.stateNode=t,h.memoizedState={element:l,isDehydrated:o,cache:null,transitions:null,pendingSuspenseBoundaries:null},Oc(h),t}function h_(t,i,o){var l=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:L,key:l==null?null:""+l,children:t,containerInfo:i,implementation:o}}function Xp(t){if(!t)return yr;t=t._reactInternals;e:{if(Pi(t)!==t||t.tag!==1)throw Error(n(170));var i=t;do{switch(i.tag){case 3:i=i.stateNode.context;break e;case 1:if(Wn(i.type)){i=i.stateNode.__reactInternalMemoizedMergedChildContext;break e}}i=i.return}while(i!==null);throw Error(n(171))}if(t.tag===1){var o=t.type;if(Wn(o))return xh(t,o,i)}return i}function jp(t,i,o,l,f,h,E,F,V){return t=wu(o,l,!0,t,f,h,E,F,V),t.context=Xp(null),o=t.current,l=Bn(),f=Cr(o),h=Qi(l,f),h.callback=i??null,wr(o,h,f),t.current.lanes=f,Et(t,f,l),Yn(t,l),t}function rl(t,i,o,l){var f=i.current,h=Bn(),E=Cr(f);return o=Xp(o),i.context===null?i.context=o:i.pendingContext=o,i=Qi(h,E),i.payload={element:t},l=l===void 0?null:l,l!==null&&(i.callback=l),t=wr(f,i,E),t!==null&&(Ei(t,f,E,h),Ua(t,f,E)),E}function sl(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function Yp(t,i){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var o=t.retryLane;t.retryLane=o!==0&&o<i?o:i}}function Tu(t,i){Yp(t,i),(t=t.alternate)&&Yp(t,i)}function p_(){return null}var qp=typeof reportError=="function"?reportError:function(t){console.error(t)};function Au(t){this._internalRoot=t}ol.prototype.render=Au.prototype.render=function(t){var i=this._internalRoot;if(i===null)throw Error(n(409));rl(t,i,null,null)},ol.prototype.unmount=Au.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var i=t.containerInfo;Qr(function(){rl(null,t,null,null)}),i[qi]=null}};function ol(t){this._internalRoot=t}ol.prototype.unstable_scheduleHydration=function(t){if(t){var i=Vt();t={blockedOn:null,target:t,priority:i};for(var o=0;o<gr.length&&i!==0&&i<gr[o].priority;o++);gr.splice(o,0,t),o===0&&Nd(t)}};function bu(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function al(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function Kp(){}function m_(t,i,o,l,f){if(f){if(typeof l=="function"){var h=l;l=function(){var ge=sl(E);h.call(ge)}}var E=jp(i,l,t,0,null,!1,!1,"",Kp);return t._reactRootContainer=E,t[qi]=E.current,bo(t.nodeType===8?t.parentNode:t),Qr(),E}for(;f=t.lastChild;)t.removeChild(f);if(typeof l=="function"){var F=l;l=function(){var ge=sl(V);F.call(ge)}}var V=wu(t,0,!1,null,null,!1,!1,"",Kp);return t._reactRootContainer=V,t[qi]=V.current,bo(t.nodeType===8?t.parentNode:t),Qr(function(){rl(i,V,o,l)}),V}function ll(t,i,o,l,f){var h=o._reactRootContainer;if(h){var E=h;if(typeof f=="function"){var F=f;f=function(){var V=sl(E);F.call(V)}}rl(i,E,t,f)}else E=m_(o,i,t,f,l);return sl(E)}zt=function(t){switch(t.tag){case 3:var i=t.stateNode;if(i.current.memoizedState.isDehydrated){var o=Nt(i.pendingLanes);o!==0&&(Vn(i,o|1),Yn(i,en()),(Ot&6)===0&&(Os=en()+500,Mr()))}break;case 13:Qr(function(){var l=Ji(t,1);if(l!==null){var f=Bn();Ei(l,t,1,f)}}),Tu(t,1)}},Yt=function(t){if(t.tag===13){var i=Ji(t,134217728);if(i!==null){var o=Bn();Ei(i,t,134217728,o)}Tu(t,134217728)}},gi=function(t){if(t.tag===13){var i=Cr(t),o=Ji(t,i);if(o!==null){var l=Bn();Ei(o,t,i,l)}Tu(t,i)}},Vt=function(){return Tt},_i=function(t,i){var o=Tt;try{return Tt=t,i()}finally{Tt=o}},Ve=function(t,i,o){switch(i){case"input":if(bt(t,o),i=o.name,o.type==="radio"&&i!=null){for(o=t;o.parentNode;)o=o.parentNode;for(o=o.querySelectorAll("input[name="+JSON.stringify(""+i)+'][type="radio"]'),i=0;i<o.length;i++){var l=o[i];if(l!==t&&l.form===t.form){var f=Ta(l);if(!f)throw Error(n(90));gt(l),bt(l,f)}}}break;case"textarea":Fe(t,o);break;case"select":i=o.value,i!=null&&Pt(t,!!o.multiple,i,!1)}},$=vu,se=Qr;var g_={usingClientEntryPoint:!1,Events:[Po,ws,Ta,Se,ue,vu]},Wo={findFiberByHostInstance:Xr,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},__={bundleType:Wo.bundleType,version:Wo.version,rendererPackageName:Wo.rendererPackageName,rendererConfig:Wo.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:P.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=uo(t),t===null?null:t.stateNode},findFiberByHostInstance:Wo.findFiberByHostInstance||p_,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var cl=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!cl.isDisabled&&cl.supportsFiber)try{le=cl.inject(__),ke=cl}catch{}}return qn.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=g_,qn.createPortal=function(t,i){var o=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!bu(i))throw Error(n(200));return h_(t,i,null,o)},qn.createRoot=function(t,i){if(!bu(t))throw Error(n(299));var o=!1,l="",f=qp;return i!=null&&(i.unstable_strictMode===!0&&(o=!0),i.identifierPrefix!==void 0&&(l=i.identifierPrefix),i.onRecoverableError!==void 0&&(f=i.onRecoverableError)),i=wu(t,1,!1,null,null,o,!1,l,f),t[qi]=i.current,bo(t.nodeType===8?t.parentNode:t),new Au(i)},qn.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var i=t._reactInternals;if(i===void 0)throw typeof t.render=="function"?Error(n(188)):(t=Object.keys(t).join(","),Error(n(268,t)));return t=uo(i),t=t===null?null:t.stateNode,t},qn.flushSync=function(t){return Qr(t)},qn.hydrate=function(t,i,o){if(!al(i))throw Error(n(200));return ll(null,t,i,!0,o)},qn.hydrateRoot=function(t,i,o){if(!bu(t))throw Error(n(405));var l=o!=null&&o.hydratedSources||null,f=!1,h="",E=qp;if(o!=null&&(o.unstable_strictMode===!0&&(f=!0),o.identifierPrefix!==void 0&&(h=o.identifierPrefix),o.onRecoverableError!==void 0&&(E=o.onRecoverableError)),i=jp(i,null,t,1,o??null,f,!1,h,E),t[qi]=i.current,bo(t),l)for(t=0;t<l.length;t++)o=l[t],f=o._getVersion,f=f(o._source),i.mutableSourceEagerHydrationData==null?i.mutableSourceEagerHydrationData=[o,f]:i.mutableSourceEagerHydrationData.push(o,f);return new ol(i)},qn.render=function(t,i,o){if(!al(i))throw Error(n(200));return ll(null,t,i,!1,o)},qn.unmountComponentAtNode=function(t){if(!al(t))throw Error(n(40));return t._reactRootContainer?(Qr(function(){ll(null,null,t,!1,function(){t._reactRootContainer=null,t[qi]=null})}),!0):!1},qn.unstable_batchedUpdates=vu,qn.unstable_renderSubtreeIntoContainer=function(t,i,o,l){if(!al(o))throw Error(n(200));if(t==null||t._reactInternals===void 0)throw Error(n(38));return ll(t,i,o,!1,l)},qn.version="18.3.1-next-f1338f8080-20240426",qn}var im;function T_(){if(im)return Pu.exports;im=1;function s(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(s)}catch(e){console.error(e)}}return s(),Pu.exports=w_(),Pu.exports}var rm;function A_(){if(rm)return ul;rm=1;var s=T_();return ul.createRoot=s.createRoot,ul.hydrateRoot=s.hydrateRoot,ul}var b_=A_(),Lt=ld();/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const cd="184",C_=0,sm=1,R_=2,ta=1,P_=2,Qo=3,Hr=0,Zn=1,pi=2,lr=0,eo=1,om=2,am=3,lm=4,L_=5,ls=100,D_=101,I_=102,N_=103,U_=104,F_=200,O_=201,k_=202,B_=203,mf=204,gf=205,z_=206,H_=207,V_=208,G_=209,W_=210,X_=211,j_=212,Y_=213,q_=214,_f=0,vf=1,xf=2,no=3,Sf=4,yf=5,Mf=6,Ef=7,a0=0,K_=1,$_=2,Hi=0,l0=1,c0=2,u0=3,ud=4,f0=5,d0=6,h0=7,p0=300,hs=301,io=302,Iu=303,Nu=304,ql=306,wf=1e3,ar=1001,Tf=1002,An=1003,Z_=1004,fl=1005,Nn=1006,Uu=1007,us=1008,si=1009,m0=1010,g0=1011,na=1012,fd=1013,Wi=1014,Bi=1015,ur=1016,dd=1017,hd=1018,ia=1020,_0=35902,v0=35899,x0=1021,S0=1022,Ci=1023,fr=1026,fs=1027,y0=1028,pd=1029,ps=1030,md=1031,gd=1033,Nl=33776,Ul=33777,Fl=33778,Ol=33779,Af=35840,bf=35841,Cf=35842,Rf=35843,Pf=36196,Lf=37492,Df=37496,If=37488,Nf=37489,Bl=37490,Uf=37491,Ff=37808,Of=37809,kf=37810,Bf=37811,zf=37812,Hf=37813,Vf=37814,Gf=37815,Wf=37816,Xf=37817,jf=37818,Yf=37819,qf=37820,Kf=37821,$f=36492,Zf=36494,Jf=36495,Qf=36283,ed=36284,zl=36285,td=36286,J_=3200,nd=0,Q_=1,Br="",$n="srgb",Hl="srgb-linear",Vl="linear",Gt="srgb",Bs=7680,cm=519,ev=512,tv=513,nv=514,_d=515,iv=516,rv=517,vd=518,sv=519,um=35044,fm="300 es",zi=2e3,ra=2001;function ov(s){for(let e=s.length-1;e>=0;--e)if(s[e]>=65535)return!0;return!1}function Gl(s){return document.createElementNS("http://www.w3.org/1999/xhtml",s)}function av(){const s=Gl("canvas");return s.style.display="block",s}const dm={};function hm(...s){const e="THREE."+s.shift();console.log(e,...s)}function M0(s){const e=s[0];if(typeof e=="string"&&e.startsWith("TSL:")){const n=s[1];n&&n.isStackTrace?s[0]+=" "+n.getLocation():s[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return s}function ht(...s){s=M0(s);const e="THREE."+s.shift();{const n=s[0];n&&n.isStackTrace?console.warn(n.getError(e)):console.warn(e,...s)}}function Ut(...s){s=M0(s);const e="THREE."+s.shift();{const n=s[0];n&&n.isStackTrace?console.error(n.getError(e)):console.error(e,...s)}}function id(...s){const e=s.join(" ");e in dm||(dm[e]=!0,ht(...s))}function lv(s,e,n){return new Promise(function(r,a){function c(){switch(s.clientWaitSync(e,s.SYNC_FLUSH_COMMANDS_BIT,0)){case s.WAIT_FAILED:a();break;case s.TIMEOUT_EXPIRED:setTimeout(c,n);break;default:r()}}setTimeout(c,n)})}const cv={[_f]:vf,[xf]:Mf,[Sf]:Ef,[no]:yf,[vf]:_f,[Mf]:xf,[Ef]:Sf,[yf]:no};class ms{addEventListener(e,n){this._listeners===void 0&&(this._listeners={});const r=this._listeners;r[e]===void 0&&(r[e]=[]),r[e].indexOf(n)===-1&&r[e].push(n)}hasEventListener(e,n){const r=this._listeners;return r===void 0?!1:r[e]!==void 0&&r[e].indexOf(n)!==-1}removeEventListener(e,n){const r=this._listeners;if(r===void 0)return;const a=r[e];if(a!==void 0){const c=a.indexOf(n);c!==-1&&a.splice(c,1)}}dispatchEvent(e){const n=this._listeners;if(n===void 0)return;const r=n[e.type];if(r!==void 0){e.target=this;const a=r.slice(0);for(let c=0,u=a.length;c<u;c++)a[c].call(this,e);e.target=null}}}const Dn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Fu=Math.PI/180,rd=180/Math.PI;function sa(){const s=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0,r=Math.random()*4294967295|0;return(Dn[s&255]+Dn[s>>8&255]+Dn[s>>16&255]+Dn[s>>24&255]+"-"+Dn[e&255]+Dn[e>>8&255]+"-"+Dn[e>>16&15|64]+Dn[e>>24&255]+"-"+Dn[n&63|128]+Dn[n>>8&255]+"-"+Dn[n>>16&255]+Dn[n>>24&255]+Dn[r&255]+Dn[r>>8&255]+Dn[r>>16&255]+Dn[r>>24&255]).toLowerCase()}function Rt(s,e,n){return Math.max(e,Math.min(n,s))}function uv(s,e){return(s%e+e)%e}function Ou(s,e,n){return(1-n)*s+n*e}function jo(s,e){switch(e.constructor){case Float32Array:return s;case Uint32Array:return s/4294967295;case Uint16Array:return s/65535;case Uint8Array:return s/255;case Int32Array:return Math.max(s/2147483647,-1);case Int16Array:return Math.max(s/32767,-1);case Int8Array:return Math.max(s/127,-1);default:throw new Error("Invalid component type.")}}function Kn(s,e){switch(e.constructor){case Float32Array:return s;case Uint32Array:return Math.round(s*4294967295);case Uint16Array:return Math.round(s*65535);case Uint8Array:return Math.round(s*255);case Int32Array:return Math.round(s*2147483647);case Int16Array:return Math.round(s*32767);case Int8Array:return Math.round(s*127);default:throw new Error("Invalid component type.")}}const Cd=class Cd{constructor(e=0,n=0){this.x=e,this.y=n}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,n){return this.x=e,this.y=n,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const n=this.x,r=this.y,a=e.elements;return this.x=a[0]*n+a[3]*r+a[6],this.y=a[1]*n+a[4]*r+a[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,n){return this.x=Rt(this.x,e.x,n.x),this.y=Rt(this.y,e.y,n.y),this}clampScalar(e,n){return this.x=Rt(this.x,e,n),this.y=Rt(this.y,e,n),this}clampLength(e,n){const r=this.length();return this.divideScalar(r||1).multiplyScalar(Rt(r,e,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const r=this.dot(e)/n;return Math.acos(Rt(r,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,r=this.y-e.y;return n*n+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this}lerpVectors(e,n,r){return this.x=e.x+(n.x-e.x)*r,this.y=e.y+(n.y-e.y)*r,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this}rotateAround(e,n){const r=Math.cos(n),a=Math.sin(n),c=this.x-e.x,u=this.y-e.y;return this.x=c*r-u*a+e.x,this.y=c*a+u*r+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};Cd.prototype.isVector2=!0;let It=Cd;class oo{constructor(e=0,n=0,r=0,a=1){this.isQuaternion=!0,this._x=e,this._y=n,this._z=r,this._w=a}static slerpFlat(e,n,r,a,c,u,d){let p=r[a+0],m=r[a+1],x=r[a+2],S=r[a+3],_=c[u+0],y=c[u+1],T=c[u+2],R=c[u+3];if(S!==R||p!==_||m!==y||x!==T){let g=p*_+m*y+x*T+S*R;g<0&&(_=-_,y=-y,T=-T,R=-R,g=-g);let v=1-d;if(g<.9995){const b=Math.acos(g),I=Math.sin(b);v=Math.sin(v*b)/I,d=Math.sin(d*b)/I,p=p*v+_*d,m=m*v+y*d,x=x*v+T*d,S=S*v+R*d}else{p=p*v+_*d,m=m*v+y*d,x=x*v+T*d,S=S*v+R*d;const b=1/Math.sqrt(p*p+m*m+x*x+S*S);p*=b,m*=b,x*=b,S*=b}}e[n]=p,e[n+1]=m,e[n+2]=x,e[n+3]=S}static multiplyQuaternionsFlat(e,n,r,a,c,u){const d=r[a],p=r[a+1],m=r[a+2],x=r[a+3],S=c[u],_=c[u+1],y=c[u+2],T=c[u+3];return e[n]=d*T+x*S+p*y-m*_,e[n+1]=p*T+x*_+m*S-d*y,e[n+2]=m*T+x*y+d*_-p*S,e[n+3]=x*T-d*S-p*_-m*y,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,n,r,a){return this._x=e,this._y=n,this._z=r,this._w=a,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,n=!0){const r=e._x,a=e._y,c=e._z,u=e._order,d=Math.cos,p=Math.sin,m=d(r/2),x=d(a/2),S=d(c/2),_=p(r/2),y=p(a/2),T=p(c/2);switch(u){case"XYZ":this._x=_*x*S+m*y*T,this._y=m*y*S-_*x*T,this._z=m*x*T+_*y*S,this._w=m*x*S-_*y*T;break;case"YXZ":this._x=_*x*S+m*y*T,this._y=m*y*S-_*x*T,this._z=m*x*T-_*y*S,this._w=m*x*S+_*y*T;break;case"ZXY":this._x=_*x*S-m*y*T,this._y=m*y*S+_*x*T,this._z=m*x*T+_*y*S,this._w=m*x*S-_*y*T;break;case"ZYX":this._x=_*x*S-m*y*T,this._y=m*y*S+_*x*T,this._z=m*x*T-_*y*S,this._w=m*x*S+_*y*T;break;case"YZX":this._x=_*x*S+m*y*T,this._y=m*y*S+_*x*T,this._z=m*x*T-_*y*S,this._w=m*x*S-_*y*T;break;case"XZY":this._x=_*x*S-m*y*T,this._y=m*y*S-_*x*T,this._z=m*x*T+_*y*S,this._w=m*x*S+_*y*T;break;default:ht("Quaternion: .setFromEuler() encountered an unknown order: "+u)}return n===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,n){const r=n/2,a=Math.sin(r);return this._x=e.x*a,this._y=e.y*a,this._z=e.z*a,this._w=Math.cos(r),this._onChangeCallback(),this}setFromRotationMatrix(e){const n=e.elements,r=n[0],a=n[4],c=n[8],u=n[1],d=n[5],p=n[9],m=n[2],x=n[6],S=n[10],_=r+d+S;if(_>0){const y=.5/Math.sqrt(_+1);this._w=.25/y,this._x=(x-p)*y,this._y=(c-m)*y,this._z=(u-a)*y}else if(r>d&&r>S){const y=2*Math.sqrt(1+r-d-S);this._w=(x-p)/y,this._x=.25*y,this._y=(a+u)/y,this._z=(c+m)/y}else if(d>S){const y=2*Math.sqrt(1+d-r-S);this._w=(c-m)/y,this._x=(a+u)/y,this._y=.25*y,this._z=(p+x)/y}else{const y=2*Math.sqrt(1+S-r-d);this._w=(u-a)/y,this._x=(c+m)/y,this._y=(p+x)/y,this._z=.25*y}return this._onChangeCallback(),this}setFromUnitVectors(e,n){let r=e.dot(n)+1;return r<1e-8?(r=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=r):(this._x=0,this._y=-e.z,this._z=e.y,this._w=r)):(this._x=e.y*n.z-e.z*n.y,this._y=e.z*n.x-e.x*n.z,this._z=e.x*n.y-e.y*n.x,this._w=r),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Rt(this.dot(e),-1,1)))}rotateTowards(e,n){const r=this.angleTo(e);if(r===0)return this;const a=Math.min(1,n/r);return this.slerp(e,a),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,n){const r=e._x,a=e._y,c=e._z,u=e._w,d=n._x,p=n._y,m=n._z,x=n._w;return this._x=r*x+u*d+a*m-c*p,this._y=a*x+u*p+c*d-r*m,this._z=c*x+u*m+r*p-a*d,this._w=u*x-r*d-a*p-c*m,this._onChangeCallback(),this}slerp(e,n){let r=e._x,a=e._y,c=e._z,u=e._w,d=this.dot(e);d<0&&(r=-r,a=-a,c=-c,u=-u,d=-d);let p=1-n;if(d<.9995){const m=Math.acos(d),x=Math.sin(m);p=Math.sin(p*m)/x,n=Math.sin(n*m)/x,this._x=this._x*p+r*n,this._y=this._y*p+a*n,this._z=this._z*p+c*n,this._w=this._w*p+u*n,this._onChangeCallback()}else this._x=this._x*p+r*n,this._y=this._y*p+a*n,this._z=this._z*p+c*n,this._w=this._w*p+u*n,this.normalize();return this}slerpQuaternions(e,n,r){return this.copy(e).slerp(n,r)}random(){const e=2*Math.PI*Math.random(),n=2*Math.PI*Math.random(),r=Math.random(),a=Math.sqrt(1-r),c=Math.sqrt(r);return this.set(a*Math.sin(e),a*Math.cos(e),c*Math.sin(n),c*Math.cos(n))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,n=0){return this._x=e[n],this._y=e[n+1],this._z=e[n+2],this._w=e[n+3],this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._w,e}fromBufferAttribute(e,n){return this._x=e.getX(n),this._y=e.getY(n),this._z=e.getZ(n),this._w=e.getW(n),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}const Rd=class Rd{constructor(e=0,n=0,r=0){this.x=e,this.y=n,this.z=r}set(e,n,r){return r===void 0&&(r=this.z),this.x=e,this.y=n,this.z=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,n){return this.x=e.x*n.x,this.y=e.y*n.y,this.z=e.z*n.z,this}applyEuler(e){return this.applyQuaternion(pm.setFromEuler(e))}applyAxisAngle(e,n){return this.applyQuaternion(pm.setFromAxisAngle(e,n))}applyMatrix3(e){const n=this.x,r=this.y,a=this.z,c=e.elements;return this.x=c[0]*n+c[3]*r+c[6]*a,this.y=c[1]*n+c[4]*r+c[7]*a,this.z=c[2]*n+c[5]*r+c[8]*a,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const n=this.x,r=this.y,a=this.z,c=e.elements,u=1/(c[3]*n+c[7]*r+c[11]*a+c[15]);return this.x=(c[0]*n+c[4]*r+c[8]*a+c[12])*u,this.y=(c[1]*n+c[5]*r+c[9]*a+c[13])*u,this.z=(c[2]*n+c[6]*r+c[10]*a+c[14])*u,this}applyQuaternion(e){const n=this.x,r=this.y,a=this.z,c=e.x,u=e.y,d=e.z,p=e.w,m=2*(u*a-d*r),x=2*(d*n-c*a),S=2*(c*r-u*n);return this.x=n+p*m+u*S-d*x,this.y=r+p*x+d*m-c*S,this.z=a+p*S+c*x-u*m,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const n=this.x,r=this.y,a=this.z,c=e.elements;return this.x=c[0]*n+c[4]*r+c[8]*a,this.y=c[1]*n+c[5]*r+c[9]*a,this.z=c[2]*n+c[6]*r+c[10]*a,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,n){return this.x=Rt(this.x,e.x,n.x),this.y=Rt(this.y,e.y,n.y),this.z=Rt(this.z,e.z,n.z),this}clampScalar(e,n){return this.x=Rt(this.x,e,n),this.y=Rt(this.y,e,n),this.z=Rt(this.z,e,n),this}clampLength(e,n){const r=this.length();return this.divideScalar(r||1).multiplyScalar(Rt(r,e,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this}lerpVectors(e,n,r){return this.x=e.x+(n.x-e.x)*r,this.y=e.y+(n.y-e.y)*r,this.z=e.z+(n.z-e.z)*r,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,n){const r=e.x,a=e.y,c=e.z,u=n.x,d=n.y,p=n.z;return this.x=a*p-c*d,this.y=c*u-r*p,this.z=r*d-a*u,this}projectOnVector(e){const n=e.lengthSq();if(n===0)return this.set(0,0,0);const r=e.dot(this)/n;return this.copy(e).multiplyScalar(r)}projectOnPlane(e){return ku.copy(this).projectOnVector(e),this.sub(ku)}reflect(e){return this.sub(ku.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const r=this.dot(e)/n;return Math.acos(Rt(r,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,r=this.y-e.y,a=this.z-e.z;return n*n+r*r+a*a}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,n,r){const a=Math.sin(n)*e;return this.x=a*Math.sin(r),this.y=Math.cos(n)*e,this.z=a*Math.cos(r),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,n,r){return this.x=e*Math.sin(n),this.y=r,this.z=e*Math.cos(n),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this}setFromMatrixScale(e){const n=this.setFromMatrixColumn(e,0).length(),r=this.setFromMatrixColumn(e,1).length(),a=this.setFromMatrixColumn(e,2).length();return this.x=n,this.y=r,this.z=a,this}setFromMatrixColumn(e,n){return this.fromArray(e.elements,n*4)}setFromMatrix3Column(e,n){return this.fromArray(e.elements,n*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,n=Math.random()*2-1,r=Math.sqrt(1-n*n);return this.x=r*Math.cos(e),this.y=n,this.z=r*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};Rd.prototype.isVector3=!0;let te=Rd;const ku=new te,pm=new oo,Pd=class Pd{constructor(e,n,r,a,c,u,d,p,m){this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,n,r,a,c,u,d,p,m)}set(e,n,r,a,c,u,d,p,m){const x=this.elements;return x[0]=e,x[1]=a,x[2]=d,x[3]=n,x[4]=c,x[5]=p,x[6]=r,x[7]=u,x[8]=m,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const n=this.elements,r=e.elements;return n[0]=r[0],n[1]=r[1],n[2]=r[2],n[3]=r[3],n[4]=r[4],n[5]=r[5],n[6]=r[6],n[7]=r[7],n[8]=r[8],this}extractBasis(e,n,r){return e.setFromMatrix3Column(this,0),n.setFromMatrix3Column(this,1),r.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const n=e.elements;return this.set(n[0],n[4],n[8],n[1],n[5],n[9],n[2],n[6],n[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const r=e.elements,a=n.elements,c=this.elements,u=r[0],d=r[3],p=r[6],m=r[1],x=r[4],S=r[7],_=r[2],y=r[5],T=r[8],R=a[0],g=a[3],v=a[6],b=a[1],I=a[4],P=a[7],H=a[2],L=a[5],z=a[8];return c[0]=u*R+d*b+p*H,c[3]=u*g+d*I+p*L,c[6]=u*v+d*P+p*z,c[1]=m*R+x*b+S*H,c[4]=m*g+x*I+S*L,c[7]=m*v+x*P+S*z,c[2]=_*R+y*b+T*H,c[5]=_*g+y*I+T*L,c[8]=_*v+y*P+T*z,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[3]*=e,n[6]*=e,n[1]*=e,n[4]*=e,n[7]*=e,n[2]*=e,n[5]*=e,n[8]*=e,this}determinant(){const e=this.elements,n=e[0],r=e[1],a=e[2],c=e[3],u=e[4],d=e[5],p=e[6],m=e[7],x=e[8];return n*u*x-n*d*m-r*c*x+r*d*p+a*c*m-a*u*p}invert(){const e=this.elements,n=e[0],r=e[1],a=e[2],c=e[3],u=e[4],d=e[5],p=e[6],m=e[7],x=e[8],S=x*u-d*m,_=d*p-x*c,y=m*c-u*p,T=n*S+r*_+a*y;if(T===0)return this.set(0,0,0,0,0,0,0,0,0);const R=1/T;return e[0]=S*R,e[1]=(a*m-x*r)*R,e[2]=(d*r-a*u)*R,e[3]=_*R,e[4]=(x*n-a*p)*R,e[5]=(a*c-d*n)*R,e[6]=y*R,e[7]=(r*p-m*n)*R,e[8]=(u*n-r*c)*R,this}transpose(){let e;const n=this.elements;return e=n[1],n[1]=n[3],n[3]=e,e=n[2],n[2]=n[6],n[6]=e,e=n[5],n[5]=n[7],n[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const n=this.elements;return e[0]=n[0],e[1]=n[3],e[2]=n[6],e[3]=n[1],e[4]=n[4],e[5]=n[7],e[6]=n[2],e[7]=n[5],e[8]=n[8],this}setUvTransform(e,n,r,a,c,u,d){const p=Math.cos(c),m=Math.sin(c);return this.set(r*p,r*m,-r*(p*u+m*d)+u+e,-a*m,a*p,-a*(-m*u+p*d)+d+n,0,0,1),this}scale(e,n){return this.premultiply(Bu.makeScale(e,n)),this}rotate(e){return this.premultiply(Bu.makeRotation(-e)),this}translate(e,n){return this.premultiply(Bu.makeTranslation(e,n)),this}makeTranslation(e,n){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,n,0,0,1),this}makeRotation(e){const n=Math.cos(e),r=Math.sin(e);return this.set(n,-r,0,r,n,0,0,0,1),this}makeScale(e,n){return this.set(e,0,0,0,n,0,0,0,1),this}equals(e){const n=this.elements,r=e.elements;for(let a=0;a<9;a++)if(n[a]!==r[a])return!1;return!0}fromArray(e,n=0){for(let r=0;r<9;r++)this.elements[r]=e[r+n];return this}toArray(e=[],n=0){const r=this.elements;return e[n]=r[0],e[n+1]=r[1],e[n+2]=r[2],e[n+3]=r[3],e[n+4]=r[4],e[n+5]=r[5],e[n+6]=r[6],e[n+7]=r[7],e[n+8]=r[8],e}clone(){return new this.constructor().fromArray(this.elements)}};Pd.prototype.isMatrix3=!0;let _t=Pd;const Bu=new _t,mm=new _t().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),gm=new _t().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function fv(){const s={enabled:!0,workingColorSpace:Hl,spaces:{},convert:function(a,c,u){return this.enabled===!1||c===u||!c||!u||(this.spaces[c].transfer===Gt&&(a.r=cr(a.r),a.g=cr(a.g),a.b=cr(a.b)),this.spaces[c].primaries!==this.spaces[u].primaries&&(a.applyMatrix3(this.spaces[c].toXYZ),a.applyMatrix3(this.spaces[u].fromXYZ)),this.spaces[u].transfer===Gt&&(a.r=to(a.r),a.g=to(a.g),a.b=to(a.b))),a},workingToColorSpace:function(a,c){return this.convert(a,this.workingColorSpace,c)},colorSpaceToWorking:function(a,c){return this.convert(a,c,this.workingColorSpace)},getPrimaries:function(a){return this.spaces[a].primaries},getTransfer:function(a){return a===Br?Vl:this.spaces[a].transfer},getToneMappingMode:function(a){return this.spaces[a].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(a,c=this.workingColorSpace){return a.fromArray(this.spaces[c].luminanceCoefficients)},define:function(a){Object.assign(this.spaces,a)},_getMatrix:function(a,c,u){return a.copy(this.spaces[c].toXYZ).multiply(this.spaces[u].fromXYZ)},_getDrawingBufferColorSpace:function(a){return this.spaces[a].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(a=this.workingColorSpace){return this.spaces[a].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(a,c){return id("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),s.workingToColorSpace(a,c)},toWorkingColorSpace:function(a,c){return id("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),s.colorSpaceToWorking(a,c)}},e=[.64,.33,.3,.6,.15,.06],n=[.2126,.7152,.0722],r=[.3127,.329];return s.define({[Hl]:{primaries:e,whitePoint:r,transfer:Vl,toXYZ:mm,fromXYZ:gm,luminanceCoefficients:n,workingColorSpaceConfig:{unpackColorSpace:$n},outputColorSpaceConfig:{drawingBufferColorSpace:$n}},[$n]:{primaries:e,whitePoint:r,transfer:Gt,toXYZ:mm,fromXYZ:gm,luminanceCoefficients:n,outputColorSpaceConfig:{drawingBufferColorSpace:$n}}}),s}const Dt=fv();function cr(s){return s<.04045?s*.0773993808:Math.pow(s*.9478672986+.0521327014,2.4)}function to(s){return s<.0031308?s*12.92:1.055*Math.pow(s,.41666)-.055}let zs;class dv{static getDataURL(e,n="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let r;if(e instanceof HTMLCanvasElement)r=e;else{zs===void 0&&(zs=Gl("canvas")),zs.width=e.width,zs.height=e.height;const a=zs.getContext("2d");e instanceof ImageData?a.putImageData(e,0,0):a.drawImage(e,0,0,e.width,e.height),r=zs}return r.toDataURL(n)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const n=Gl("canvas");n.width=e.width,n.height=e.height;const r=n.getContext("2d");r.drawImage(e,0,0,e.width,e.height);const a=r.getImageData(0,0,e.width,e.height),c=a.data;for(let u=0;u<c.length;u++)c[u]=cr(c[u]/255)*255;return r.putImageData(a,0,0),n}else if(e.data){const n=e.data.slice(0);for(let r=0;r<n.length;r++)n instanceof Uint8Array||n instanceof Uint8ClampedArray?n[r]=Math.floor(cr(n[r]/255)*255):n[r]=cr(n[r]);return{data:n,width:e.width,height:e.height}}else return ht("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let hv=0;class xd{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:hv++}),this.uuid=sa(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const n=this.data;return typeof HTMLVideoElement<"u"&&n instanceof HTMLVideoElement?e.set(n.videoWidth,n.videoHeight,0):typeof VideoFrame<"u"&&n instanceof VideoFrame?e.set(n.displayWidth,n.displayHeight,0):n!==null?e.set(n.width,n.height,n.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const r={uuid:this.uuid,url:""},a=this.data;if(a!==null){let c;if(Array.isArray(a)){c=[];for(let u=0,d=a.length;u<d;u++)a[u].isDataTexture?c.push(zu(a[u].image)):c.push(zu(a[u]))}else c=zu(a);r.url=c}return n||(e.images[this.uuid]=r),r}}function zu(s){return typeof HTMLImageElement<"u"&&s instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&s instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&s instanceof ImageBitmap?dv.getDataURL(s):s.data?{data:Array.from(s.data),width:s.width,height:s.height,type:s.data.constructor.name}:(ht("Texture: Unable to serialize Texture."),{})}let pv=0;const Hu=new te;class Un extends ms{constructor(e=Un.DEFAULT_IMAGE,n=Un.DEFAULT_MAPPING,r=ar,a=ar,c=Nn,u=us,d=Ci,p=si,m=Un.DEFAULT_ANISOTROPY,x=Br){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:pv++}),this.uuid=sa(),this.name="",this.source=new xd(e),this.mipmaps=[],this.mapping=n,this.channel=0,this.wrapS=r,this.wrapT=a,this.magFilter=c,this.minFilter=u,this.anisotropy=m,this.format=d,this.internalFormat=null,this.type=p,this.offset=new It(0,0),this.repeat=new It(1,1),this.center=new It(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new _t,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=x,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(Hu).x}get height(){return this.source.getSize(Hu).y}get depth(){return this.source.getSize(Hu).z}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,n){this.updateRanges.push({start:e,count:n})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.normalized=e.normalized,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const n in e){const r=e[n];if(r===void 0){ht(`Texture.setValues(): parameter '${n}' has value of undefined.`);continue}const a=this[n];if(a===void 0){ht(`Texture.setValues(): property '${n}' does not exist.`);continue}a&&r&&a.isVector2&&r.isVector2||a&&r&&a.isVector3&&r.isVector3||a&&r&&a.isMatrix3&&r.isMatrix3?a.copy(r):this[n]=r}}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const r={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(r.userData=this.userData),n||(e.textures[this.uuid]=r),r}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==p0)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case wf:e.x=e.x-Math.floor(e.x);break;case ar:e.x=e.x<0?0:1;break;case Tf:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case wf:e.y=e.y-Math.floor(e.y);break;case ar:e.y=e.y<0?0:1;break;case Tf:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}Un.DEFAULT_IMAGE=null;Un.DEFAULT_MAPPING=p0;Un.DEFAULT_ANISOTROPY=1;const Ld=class Ld{constructor(e=0,n=0,r=0,a=1){this.x=e,this.y=n,this.z=r,this.w=a}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,n,r,a){return this.x=e,this.y=n,this.z=r,this.w=a,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;case 3:this.w=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this.w=e.w+n.w,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this.w+=e.w*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this.w=e.w-n.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const n=this.x,r=this.y,a=this.z,c=this.w,u=e.elements;return this.x=u[0]*n+u[4]*r+u[8]*a+u[12]*c,this.y=u[1]*n+u[5]*r+u[9]*a+u[13]*c,this.z=u[2]*n+u[6]*r+u[10]*a+u[14]*c,this.w=u[3]*n+u[7]*r+u[11]*a+u[15]*c,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const n=Math.sqrt(1-e.w*e.w);return n<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/n,this.y=e.y/n,this.z=e.z/n),this}setAxisAngleFromRotationMatrix(e){let n,r,a,c;const p=e.elements,m=p[0],x=p[4],S=p[8],_=p[1],y=p[5],T=p[9],R=p[2],g=p[6],v=p[10];if(Math.abs(x-_)<.01&&Math.abs(S-R)<.01&&Math.abs(T-g)<.01){if(Math.abs(x+_)<.1&&Math.abs(S+R)<.1&&Math.abs(T+g)<.1&&Math.abs(m+y+v-3)<.1)return this.set(1,0,0,0),this;n=Math.PI;const I=(m+1)/2,P=(y+1)/2,H=(v+1)/2,L=(x+_)/4,z=(S+R)/4,w=(T+g)/4;return I>P&&I>H?I<.01?(r=0,a=.707106781,c=.707106781):(r=Math.sqrt(I),a=L/r,c=z/r):P>H?P<.01?(r=.707106781,a=0,c=.707106781):(a=Math.sqrt(P),r=L/a,c=w/a):H<.01?(r=.707106781,a=.707106781,c=0):(c=Math.sqrt(H),r=z/c,a=w/c),this.set(r,a,c,n),this}let b=Math.sqrt((g-T)*(g-T)+(S-R)*(S-R)+(_-x)*(_-x));return Math.abs(b)<.001&&(b=1),this.x=(g-T)/b,this.y=(S-R)/b,this.z=(_-x)/b,this.w=Math.acos((m+y+v-1)/2),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this.w=n[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,n){return this.x=Rt(this.x,e.x,n.x),this.y=Rt(this.y,e.y,n.y),this.z=Rt(this.z,e.z,n.z),this.w=Rt(this.w,e.w,n.w),this}clampScalar(e,n){return this.x=Rt(this.x,e,n),this.y=Rt(this.y,e,n),this.z=Rt(this.z,e,n),this.w=Rt(this.w,e,n),this}clampLength(e,n){const r=this.length();return this.divideScalar(r||1).multiplyScalar(Rt(r,e,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this.w+=(e.w-this.w)*n,this}lerpVectors(e,n,r){return this.x=e.x+(n.x-e.x)*r,this.y=e.y+(n.y-e.y)*r,this.z=e.z+(n.z-e.z)*r,this.w=e.w+(n.w-e.w)*r,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this.w=e[n+3],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e[n+3]=this.w,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this.w=e.getW(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};Ld.prototype.isVector4=!0;let sn=Ld;class mv extends ms{constructor(e=1,n=1,r={}){super(),r=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Nn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},r),this.isRenderTarget=!0,this.width=e,this.height=n,this.depth=r.depth,this.scissor=new sn(0,0,e,n),this.scissorTest=!1,this.viewport=new sn(0,0,e,n),this.textures=[];const a={width:e,height:n,depth:r.depth},c=new Un(a),u=r.count;for(let d=0;d<u;d++)this.textures[d]=c.clone(),this.textures[d].isRenderTargetTexture=!0,this.textures[d].renderTarget=this;this._setTextureOptions(r),this.depthBuffer=r.depthBuffer,this.stencilBuffer=r.stencilBuffer,this.resolveDepthBuffer=r.resolveDepthBuffer,this.resolveStencilBuffer=r.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=r.depthTexture,this.samples=r.samples,this.multiview=r.multiview}_setTextureOptions(e={}){const n={minFilter:Nn,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(n.mapping=e.mapping),e.wrapS!==void 0&&(n.wrapS=e.wrapS),e.wrapT!==void 0&&(n.wrapT=e.wrapT),e.wrapR!==void 0&&(n.wrapR=e.wrapR),e.magFilter!==void 0&&(n.magFilter=e.magFilter),e.minFilter!==void 0&&(n.minFilter=e.minFilter),e.format!==void 0&&(n.format=e.format),e.type!==void 0&&(n.type=e.type),e.anisotropy!==void 0&&(n.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(n.colorSpace=e.colorSpace),e.flipY!==void 0&&(n.flipY=e.flipY),e.generateMipmaps!==void 0&&(n.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(n.internalFormat=e.internalFormat);for(let r=0;r<this.textures.length;r++)this.textures[r].setValues(n)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,n,r=1){if(this.width!==e||this.height!==n||this.depth!==r){this.width=e,this.height=n,this.depth=r;for(let a=0,c=this.textures.length;a<c;a++)this.textures[a].image.width=e,this.textures[a].image.height=n,this.textures[a].image.depth=r,this.textures[a].isData3DTexture!==!0&&(this.textures[a].isArrayTexture=this.textures[a].image.depth>1);this.dispose()}this.viewport.set(0,0,e,n),this.scissor.set(0,0,e,n)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let n=0,r=e.textures.length;n<r;n++){this.textures[n]=e.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0,this.textures[n].renderTarget=this;const a=Object.assign({},e.textures[n].image);this.textures[n].source=new xd(a)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this.multiview=e.multiview,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Vi extends mv{constructor(e=1,n=1,r={}){super(e,n,r),this.isWebGLRenderTarget=!0}}class E0 extends Un{constructor(e=null,n=1,r=1,a=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:n,height:r,depth:a},this.magFilter=An,this.minFilter=An,this.wrapR=ar,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class gv extends Un{constructor(e=null,n=1,r=1,a=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:n,height:r,depth:a},this.magFilter=An,this.minFilter=An,this.wrapR=ar,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const Yl=class Yl{constructor(e,n,r,a,c,u,d,p,m,x,S,_,y,T,R,g){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,n,r,a,c,u,d,p,m,x,S,_,y,T,R,g)}set(e,n,r,a,c,u,d,p,m,x,S,_,y,T,R,g){const v=this.elements;return v[0]=e,v[4]=n,v[8]=r,v[12]=a,v[1]=c,v[5]=u,v[9]=d,v[13]=p,v[2]=m,v[6]=x,v[10]=S,v[14]=_,v[3]=y,v[7]=T,v[11]=R,v[15]=g,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Yl().fromArray(this.elements)}copy(e){const n=this.elements,r=e.elements;return n[0]=r[0],n[1]=r[1],n[2]=r[2],n[3]=r[3],n[4]=r[4],n[5]=r[5],n[6]=r[6],n[7]=r[7],n[8]=r[8],n[9]=r[9],n[10]=r[10],n[11]=r[11],n[12]=r[12],n[13]=r[13],n[14]=r[14],n[15]=r[15],this}copyPosition(e){const n=this.elements,r=e.elements;return n[12]=r[12],n[13]=r[13],n[14]=r[14],this}setFromMatrix3(e){const n=e.elements;return this.set(n[0],n[3],n[6],0,n[1],n[4],n[7],0,n[2],n[5],n[8],0,0,0,0,1),this}extractBasis(e,n,r){return this.determinant()===0?(e.set(1,0,0),n.set(0,1,0),r.set(0,0,1),this):(e.setFromMatrixColumn(this,0),n.setFromMatrixColumn(this,1),r.setFromMatrixColumn(this,2),this)}makeBasis(e,n,r){return this.set(e.x,n.x,r.x,0,e.y,n.y,r.y,0,e.z,n.z,r.z,0,0,0,0,1),this}extractRotation(e){if(e.determinant()===0)return this.identity();const n=this.elements,r=e.elements,a=1/Hs.setFromMatrixColumn(e,0).length(),c=1/Hs.setFromMatrixColumn(e,1).length(),u=1/Hs.setFromMatrixColumn(e,2).length();return n[0]=r[0]*a,n[1]=r[1]*a,n[2]=r[2]*a,n[3]=0,n[4]=r[4]*c,n[5]=r[5]*c,n[6]=r[6]*c,n[7]=0,n[8]=r[8]*u,n[9]=r[9]*u,n[10]=r[10]*u,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromEuler(e){const n=this.elements,r=e.x,a=e.y,c=e.z,u=Math.cos(r),d=Math.sin(r),p=Math.cos(a),m=Math.sin(a),x=Math.cos(c),S=Math.sin(c);if(e.order==="XYZ"){const _=u*x,y=u*S,T=d*x,R=d*S;n[0]=p*x,n[4]=-p*S,n[8]=m,n[1]=y+T*m,n[5]=_-R*m,n[9]=-d*p,n[2]=R-_*m,n[6]=T+y*m,n[10]=u*p}else if(e.order==="YXZ"){const _=p*x,y=p*S,T=m*x,R=m*S;n[0]=_+R*d,n[4]=T*d-y,n[8]=u*m,n[1]=u*S,n[5]=u*x,n[9]=-d,n[2]=y*d-T,n[6]=R+_*d,n[10]=u*p}else if(e.order==="ZXY"){const _=p*x,y=p*S,T=m*x,R=m*S;n[0]=_-R*d,n[4]=-u*S,n[8]=T+y*d,n[1]=y+T*d,n[5]=u*x,n[9]=R-_*d,n[2]=-u*m,n[6]=d,n[10]=u*p}else if(e.order==="ZYX"){const _=u*x,y=u*S,T=d*x,R=d*S;n[0]=p*x,n[4]=T*m-y,n[8]=_*m+R,n[1]=p*S,n[5]=R*m+_,n[9]=y*m-T,n[2]=-m,n[6]=d*p,n[10]=u*p}else if(e.order==="YZX"){const _=u*p,y=u*m,T=d*p,R=d*m;n[0]=p*x,n[4]=R-_*S,n[8]=T*S+y,n[1]=S,n[5]=u*x,n[9]=-d*x,n[2]=-m*x,n[6]=y*S+T,n[10]=_-R*S}else if(e.order==="XZY"){const _=u*p,y=u*m,T=d*p,R=d*m;n[0]=p*x,n[4]=-S,n[8]=m*x,n[1]=_*S+R,n[5]=u*x,n[9]=y*S-T,n[2]=T*S-y,n[6]=d*x,n[10]=R*S+_}return n[3]=0,n[7]=0,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromQuaternion(e){return this.compose(_v,e,vv)}lookAt(e,n,r){const a=this.elements;return ni.subVectors(e,n),ni.lengthSq()===0&&(ni.z=1),ni.normalize(),Dr.crossVectors(r,ni),Dr.lengthSq()===0&&(Math.abs(r.z)===1?ni.x+=1e-4:ni.z+=1e-4,ni.normalize(),Dr.crossVectors(r,ni)),Dr.normalize(),dl.crossVectors(ni,Dr),a[0]=Dr.x,a[4]=dl.x,a[8]=ni.x,a[1]=Dr.y,a[5]=dl.y,a[9]=ni.y,a[2]=Dr.z,a[6]=dl.z,a[10]=ni.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const r=e.elements,a=n.elements,c=this.elements,u=r[0],d=r[4],p=r[8],m=r[12],x=r[1],S=r[5],_=r[9],y=r[13],T=r[2],R=r[6],g=r[10],v=r[14],b=r[3],I=r[7],P=r[11],H=r[15],L=a[0],z=a[4],w=a[8],D=a[12],j=a[1],k=a[5],q=a[9],de=a[13],ve=a[2],W=a[6],ne=a[10],Z=a[14],J=a[3],_e=a[7],xe=a[11],O=a[15];return c[0]=u*L+d*j+p*ve+m*J,c[4]=u*z+d*k+p*W+m*_e,c[8]=u*w+d*q+p*ne+m*xe,c[12]=u*D+d*de+p*Z+m*O,c[1]=x*L+S*j+_*ve+y*J,c[5]=x*z+S*k+_*W+y*_e,c[9]=x*w+S*q+_*ne+y*xe,c[13]=x*D+S*de+_*Z+y*O,c[2]=T*L+R*j+g*ve+v*J,c[6]=T*z+R*k+g*W+v*_e,c[10]=T*w+R*q+g*ne+v*xe,c[14]=T*D+R*de+g*Z+v*O,c[3]=b*L+I*j+P*ve+H*J,c[7]=b*z+I*k+P*W+H*_e,c[11]=b*w+I*q+P*ne+H*xe,c[15]=b*D+I*de+P*Z+H*O,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[4]*=e,n[8]*=e,n[12]*=e,n[1]*=e,n[5]*=e,n[9]*=e,n[13]*=e,n[2]*=e,n[6]*=e,n[10]*=e,n[14]*=e,n[3]*=e,n[7]*=e,n[11]*=e,n[15]*=e,this}determinant(){const e=this.elements,n=e[0],r=e[4],a=e[8],c=e[12],u=e[1],d=e[5],p=e[9],m=e[13],x=e[2],S=e[6],_=e[10],y=e[14],T=e[3],R=e[7],g=e[11],v=e[15],b=p*y-m*_,I=d*y-m*S,P=d*_-p*S,H=u*y-m*x,L=u*_-p*x,z=u*S-d*x;return n*(R*b-g*I+v*P)-r*(T*b-g*H+v*L)+a*(T*I-R*H+v*z)-c*(T*P-R*L+g*z)}transpose(){const e=this.elements;let n;return n=e[1],e[1]=e[4],e[4]=n,n=e[2],e[2]=e[8],e[8]=n,n=e[6],e[6]=e[9],e[9]=n,n=e[3],e[3]=e[12],e[12]=n,n=e[7],e[7]=e[13],e[13]=n,n=e[11],e[11]=e[14],e[14]=n,this}setPosition(e,n,r){const a=this.elements;return e.isVector3?(a[12]=e.x,a[13]=e.y,a[14]=e.z):(a[12]=e,a[13]=n,a[14]=r),this}invert(){const e=this.elements,n=e[0],r=e[1],a=e[2],c=e[3],u=e[4],d=e[5],p=e[6],m=e[7],x=e[8],S=e[9],_=e[10],y=e[11],T=e[12],R=e[13],g=e[14],v=e[15],b=n*d-r*u,I=n*p-a*u,P=n*m-c*u,H=r*p-a*d,L=r*m-c*d,z=a*m-c*p,w=x*R-S*T,D=x*g-_*T,j=x*v-y*T,k=S*g-_*R,q=S*v-y*R,de=_*v-y*g,ve=b*de-I*q+P*k+H*j-L*D+z*w;if(ve===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const W=1/ve;return e[0]=(d*de-p*q+m*k)*W,e[1]=(a*q-r*de-c*k)*W,e[2]=(R*z-g*L+v*H)*W,e[3]=(_*L-S*z-y*H)*W,e[4]=(p*j-u*de-m*D)*W,e[5]=(n*de-a*j+c*D)*W,e[6]=(g*P-T*z-v*I)*W,e[7]=(x*z-_*P+y*I)*W,e[8]=(u*q-d*j+m*w)*W,e[9]=(r*j-n*q-c*w)*W,e[10]=(T*L-R*P+v*b)*W,e[11]=(S*P-x*L-y*b)*W,e[12]=(d*D-u*k-p*w)*W,e[13]=(n*k-r*D+a*w)*W,e[14]=(R*I-T*H-g*b)*W,e[15]=(x*H-S*I+_*b)*W,this}scale(e){const n=this.elements,r=e.x,a=e.y,c=e.z;return n[0]*=r,n[4]*=a,n[8]*=c,n[1]*=r,n[5]*=a,n[9]*=c,n[2]*=r,n[6]*=a,n[10]*=c,n[3]*=r,n[7]*=a,n[11]*=c,this}getMaxScaleOnAxis(){const e=this.elements,n=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],r=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],a=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(n,r,a))}makeTranslation(e,n,r){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,n,0,0,1,r,0,0,0,1),this}makeRotationX(e){const n=Math.cos(e),r=Math.sin(e);return this.set(1,0,0,0,0,n,-r,0,0,r,n,0,0,0,0,1),this}makeRotationY(e){const n=Math.cos(e),r=Math.sin(e);return this.set(n,0,r,0,0,1,0,0,-r,0,n,0,0,0,0,1),this}makeRotationZ(e){const n=Math.cos(e),r=Math.sin(e);return this.set(n,-r,0,0,r,n,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,n){const r=Math.cos(n),a=Math.sin(n),c=1-r,u=e.x,d=e.y,p=e.z,m=c*u,x=c*d;return this.set(m*u+r,m*d-a*p,m*p+a*d,0,m*d+a*p,x*d+r,x*p-a*u,0,m*p-a*d,x*p+a*u,c*p*p+r,0,0,0,0,1),this}makeScale(e,n,r){return this.set(e,0,0,0,0,n,0,0,0,0,r,0,0,0,0,1),this}makeShear(e,n,r,a,c,u){return this.set(1,r,c,0,e,1,u,0,n,a,1,0,0,0,0,1),this}compose(e,n,r){const a=this.elements,c=n._x,u=n._y,d=n._z,p=n._w,m=c+c,x=u+u,S=d+d,_=c*m,y=c*x,T=c*S,R=u*x,g=u*S,v=d*S,b=p*m,I=p*x,P=p*S,H=r.x,L=r.y,z=r.z;return a[0]=(1-(R+v))*H,a[1]=(y+P)*H,a[2]=(T-I)*H,a[3]=0,a[4]=(y-P)*L,a[5]=(1-(_+v))*L,a[6]=(g+b)*L,a[7]=0,a[8]=(T+I)*z,a[9]=(g-b)*z,a[10]=(1-(_+R))*z,a[11]=0,a[12]=e.x,a[13]=e.y,a[14]=e.z,a[15]=1,this}decompose(e,n,r){const a=this.elements;e.x=a[12],e.y=a[13],e.z=a[14];const c=this.determinant();if(c===0)return r.set(1,1,1),n.identity(),this;let u=Hs.set(a[0],a[1],a[2]).length();const d=Hs.set(a[4],a[5],a[6]).length(),p=Hs.set(a[8],a[9],a[10]).length();c<0&&(u=-u),wi.copy(this);const m=1/u,x=1/d,S=1/p;return wi.elements[0]*=m,wi.elements[1]*=m,wi.elements[2]*=m,wi.elements[4]*=x,wi.elements[5]*=x,wi.elements[6]*=x,wi.elements[8]*=S,wi.elements[9]*=S,wi.elements[10]*=S,n.setFromRotationMatrix(wi),r.x=u,r.y=d,r.z=p,this}makePerspective(e,n,r,a,c,u,d=zi,p=!1){const m=this.elements,x=2*c/(n-e),S=2*c/(r-a),_=(n+e)/(n-e),y=(r+a)/(r-a);let T,R;if(p)T=c/(u-c),R=u*c/(u-c);else if(d===zi)T=-(u+c)/(u-c),R=-2*u*c/(u-c);else if(d===ra)T=-u/(u-c),R=-u*c/(u-c);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+d);return m[0]=x,m[4]=0,m[8]=_,m[12]=0,m[1]=0,m[5]=S,m[9]=y,m[13]=0,m[2]=0,m[6]=0,m[10]=T,m[14]=R,m[3]=0,m[7]=0,m[11]=-1,m[15]=0,this}makeOrthographic(e,n,r,a,c,u,d=zi,p=!1){const m=this.elements,x=2/(n-e),S=2/(r-a),_=-(n+e)/(n-e),y=-(r+a)/(r-a);let T,R;if(p)T=1/(u-c),R=u/(u-c);else if(d===zi)T=-2/(u-c),R=-(u+c)/(u-c);else if(d===ra)T=-1/(u-c),R=-c/(u-c);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+d);return m[0]=x,m[4]=0,m[8]=0,m[12]=_,m[1]=0,m[5]=S,m[9]=0,m[13]=y,m[2]=0,m[6]=0,m[10]=T,m[14]=R,m[3]=0,m[7]=0,m[11]=0,m[15]=1,this}equals(e){const n=this.elements,r=e.elements;for(let a=0;a<16;a++)if(n[a]!==r[a])return!1;return!0}fromArray(e,n=0){for(let r=0;r<16;r++)this.elements[r]=e[r+n];return this}toArray(e=[],n=0){const r=this.elements;return e[n]=r[0],e[n+1]=r[1],e[n+2]=r[2],e[n+3]=r[3],e[n+4]=r[4],e[n+5]=r[5],e[n+6]=r[6],e[n+7]=r[7],e[n+8]=r[8],e[n+9]=r[9],e[n+10]=r[10],e[n+11]=r[11],e[n+12]=r[12],e[n+13]=r[13],e[n+14]=r[14],e[n+15]=r[15],e}};Yl.prototype.isMatrix4=!0;let on=Yl;const Hs=new te,wi=new on,_v=new te(0,0,0),vv=new te(1,1,1),Dr=new te,dl=new te,ni=new te,_m=new on,vm=new oo;class Vr{constructor(e=0,n=0,r=0,a=Vr.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=n,this._z=r,this._order=a}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,n,r,a=this._order){return this._x=e,this._y=n,this._z=r,this._order=a,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,n=this._order,r=!0){const a=e.elements,c=a[0],u=a[4],d=a[8],p=a[1],m=a[5],x=a[9],S=a[2],_=a[6],y=a[10];switch(n){case"XYZ":this._y=Math.asin(Rt(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(-x,y),this._z=Math.atan2(-u,c)):(this._x=Math.atan2(_,m),this._z=0);break;case"YXZ":this._x=Math.asin(-Rt(x,-1,1)),Math.abs(x)<.9999999?(this._y=Math.atan2(d,y),this._z=Math.atan2(p,m)):(this._y=Math.atan2(-S,c),this._z=0);break;case"ZXY":this._x=Math.asin(Rt(_,-1,1)),Math.abs(_)<.9999999?(this._y=Math.atan2(-S,y),this._z=Math.atan2(-u,m)):(this._y=0,this._z=Math.atan2(p,c));break;case"ZYX":this._y=Math.asin(-Rt(S,-1,1)),Math.abs(S)<.9999999?(this._x=Math.atan2(_,y),this._z=Math.atan2(p,c)):(this._x=0,this._z=Math.atan2(-u,m));break;case"YZX":this._z=Math.asin(Rt(p,-1,1)),Math.abs(p)<.9999999?(this._x=Math.atan2(-x,m),this._y=Math.atan2(-S,c)):(this._x=0,this._y=Math.atan2(d,y));break;case"XZY":this._z=Math.asin(-Rt(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(_,m),this._y=Math.atan2(d,c)):(this._x=Math.atan2(-x,y),this._y=0);break;default:ht("Euler: .setFromRotationMatrix() encountered an unknown order: "+n)}return this._order=n,r===!0&&this._onChangeCallback(),this}setFromQuaternion(e,n,r){return _m.makeRotationFromQuaternion(e),this.setFromRotationMatrix(_m,n,r)}setFromVector3(e,n=this._order){return this.set(e.x,e.y,e.z,n)}reorder(e){return vm.setFromEuler(this),this.setFromQuaternion(vm,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Vr.DEFAULT_ORDER="XYZ";class Sd{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let xv=0;const xm=new te,Vs=new oo,nr=new on,hl=new te,Yo=new te,Sv=new te,yv=new oo,Sm=new te(1,0,0),ym=new te(0,1,0),Mm=new te(0,0,1),Em={type:"added"},Mv={type:"removed"},Gs={type:"childadded",child:null},Vu={type:"childremoved",child:null};class Fn extends ms{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:xv++}),this.uuid=sa(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Fn.DEFAULT_UP.clone();const e=new te,n=new Vr,r=new oo,a=new te(1,1,1);function c(){r.setFromEuler(n,!1)}function u(){n.setFromQuaternion(r,void 0,!1)}n._onChange(c),r._onChange(u),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:n},quaternion:{configurable:!0,enumerable:!0,value:r},scale:{configurable:!0,enumerable:!0,value:a},modelViewMatrix:{value:new on},normalMatrix:{value:new _t}}),this.matrix=new on,this.matrixWorld=new on,this.matrixAutoUpdate=Fn.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Fn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Sd,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,n){this.quaternion.setFromAxisAngle(e,n)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,n){return Vs.setFromAxisAngle(e,n),this.quaternion.multiply(Vs),this}rotateOnWorldAxis(e,n){return Vs.setFromAxisAngle(e,n),this.quaternion.premultiply(Vs),this}rotateX(e){return this.rotateOnAxis(Sm,e)}rotateY(e){return this.rotateOnAxis(ym,e)}rotateZ(e){return this.rotateOnAxis(Mm,e)}translateOnAxis(e,n){return xm.copy(e).applyQuaternion(this.quaternion),this.position.add(xm.multiplyScalar(n)),this}translateX(e){return this.translateOnAxis(Sm,e)}translateY(e){return this.translateOnAxis(ym,e)}translateZ(e){return this.translateOnAxis(Mm,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(nr.copy(this.matrixWorld).invert())}lookAt(e,n,r){e.isVector3?hl.copy(e):hl.set(e,n,r);const a=this.parent;this.updateWorldMatrix(!0,!1),Yo.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?nr.lookAt(Yo,hl,this.up):nr.lookAt(hl,Yo,this.up),this.quaternion.setFromRotationMatrix(nr),a&&(nr.extractRotation(a.matrixWorld),Vs.setFromRotationMatrix(nr),this.quaternion.premultiply(Vs.invert()))}add(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.add(arguments[n]);return this}return e===this?(Ut("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Em),Gs.child=e,this.dispatchEvent(Gs),Gs.child=null):Ut("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let r=0;r<arguments.length;r++)this.remove(arguments[r]);return this}const n=this.children.indexOf(e);return n!==-1&&(e.parent=null,this.children.splice(n,1),e.dispatchEvent(Mv),Vu.child=e,this.dispatchEvent(Vu),Vu.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),nr.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),nr.multiply(e.parent.matrixWorld)),e.applyMatrix4(nr),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Em),Gs.child=e,this.dispatchEvent(Gs),Gs.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,n){if(this[e]===n)return this;for(let r=0,a=this.children.length;r<a;r++){const u=this.children[r].getObjectByProperty(e,n);if(u!==void 0)return u}}getObjectsByProperty(e,n,r=[]){this[e]===n&&r.push(this);const a=this.children;for(let c=0,u=a.length;c<u;c++)a[c].getObjectsByProperty(e,n,r);return r}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Yo,e,Sv),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Yo,yv,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const n=this.matrixWorld.elements;return e.set(n[8],n[9],n[10]).normalize()}raycast(){}traverse(e){e(this);const n=this.children;for(let r=0,a=n.length;r<a;r++)n[r].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const n=this.children;for(let r=0,a=n.length;r<a;r++)n[r].traverseVisible(e)}traverseAncestors(e){const n=this.parent;n!==null&&(e(n),n.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);const e=this.pivot;if(e!==null){const n=e.x,r=e.y,a=e.z,c=this.matrix.elements;c[12]+=n-c[0]*n-c[4]*r-c[8]*a,c[13]+=r-c[1]*n-c[5]*r-c[9]*a,c[14]+=a-c[2]*n-c[6]*r-c[10]*a}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const n=this.children;for(let r=0,a=n.length;r<a;r++)n[r].updateMatrixWorld(e)}updateWorldMatrix(e,n){const r=this.parent;if(e===!0&&r!==null&&r.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),n===!0){const a=this.children;for(let c=0,u=a.length;c<u;c++)a[c].updateWorldMatrix(!1,!0)}}toJSON(e){const n=e===void 0||typeof e=="string",r={};n&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},r.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const a={};a.uuid=this.uuid,a.type=this.type,this.name!==""&&(a.name=this.name),this.castShadow===!0&&(a.castShadow=!0),this.receiveShadow===!0&&(a.receiveShadow=!0),this.visible===!1&&(a.visible=!1),this.frustumCulled===!1&&(a.frustumCulled=!1),this.renderOrder!==0&&(a.renderOrder=this.renderOrder),this.static!==!1&&(a.static=this.static),Object.keys(this.userData).length>0&&(a.userData=this.userData),a.layers=this.layers.mask,a.matrix=this.matrix.toArray(),a.up=this.up.toArray(),this.pivot!==null&&(a.pivot=this.pivot.toArray()),this.matrixAutoUpdate===!1&&(a.matrixAutoUpdate=!1),this.morphTargetDictionary!==void 0&&(a.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(a.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(a.type="InstancedMesh",a.count=this.count,a.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(a.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(a.type="BatchedMesh",a.perObjectFrustumCulled=this.perObjectFrustumCulled,a.sortObjects=this.sortObjects,a.drawRanges=this._drawRanges,a.reservedRanges=this._reservedRanges,a.geometryInfo=this._geometryInfo.map(d=>({...d,boundingBox:d.boundingBox?d.boundingBox.toJSON():void 0,boundingSphere:d.boundingSphere?d.boundingSphere.toJSON():void 0})),a.instanceInfo=this._instanceInfo.map(d=>({...d})),a.availableInstanceIds=this._availableInstanceIds.slice(),a.availableGeometryIds=this._availableGeometryIds.slice(),a.nextIndexStart=this._nextIndexStart,a.nextVertexStart=this._nextVertexStart,a.geometryCount=this._geometryCount,a.maxInstanceCount=this._maxInstanceCount,a.maxVertexCount=this._maxVertexCount,a.maxIndexCount=this._maxIndexCount,a.geometryInitialized=this._geometryInitialized,a.matricesTexture=this._matricesTexture.toJSON(e),a.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(a.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(a.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(a.boundingBox=this.boundingBox.toJSON()));function c(d,p){return d[p.uuid]===void 0&&(d[p.uuid]=p.toJSON(e)),p.uuid}if(this.isScene)this.background&&(this.background.isColor?a.background=this.background.toJSON():this.background.isTexture&&(a.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(a.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){a.geometry=c(e.geometries,this.geometry);const d=this.geometry.parameters;if(d!==void 0&&d.shapes!==void 0){const p=d.shapes;if(Array.isArray(p))for(let m=0,x=p.length;m<x;m++){const S=p[m];c(e.shapes,S)}else c(e.shapes,p)}}if(this.isSkinnedMesh&&(a.bindMode=this.bindMode,a.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(c(e.skeletons,this.skeleton),a.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const d=[];for(let p=0,m=this.material.length;p<m;p++)d.push(c(e.materials,this.material[p]));a.material=d}else a.material=c(e.materials,this.material);if(this.children.length>0){a.children=[];for(let d=0;d<this.children.length;d++)a.children.push(this.children[d].toJSON(e).object)}if(this.animations.length>0){a.animations=[];for(let d=0;d<this.animations.length;d++){const p=this.animations[d];a.animations.push(c(e.animations,p))}}if(n){const d=u(e.geometries),p=u(e.materials),m=u(e.textures),x=u(e.images),S=u(e.shapes),_=u(e.skeletons),y=u(e.animations),T=u(e.nodes);d.length>0&&(r.geometries=d),p.length>0&&(r.materials=p),m.length>0&&(r.textures=m),x.length>0&&(r.images=x),S.length>0&&(r.shapes=S),_.length>0&&(r.skeletons=_),y.length>0&&(r.animations=y),T.length>0&&(r.nodes=T)}return r.object=a,r;function u(d){const p=[];for(const m in d){const x=d[m];delete x.metadata,p.push(x)}return p}}clone(e){return new this.constructor().copy(this,e)}copy(e,n=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.pivot=e.pivot!==null?e.pivot.clone():null,this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),n===!0)for(let r=0;r<e.children.length;r++){const a=e.children[r];this.add(a.clone())}return this}}Fn.DEFAULT_UP=new te(0,1,0);Fn.DEFAULT_MATRIX_AUTO_UPDATE=!0;Fn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;class ds extends Fn{constructor(){super(),this.isGroup=!0,this.type="Group"}}const Ev={type:"move"};class Gu{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new ds,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new ds,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new te,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new te),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new ds,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new te,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new te,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const n=this._hand;if(n)for(const r of e.hand.values())this._getHandJoint(n,r)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,n,r){let a=null,c=null,u=null;const d=this._targetRay,p=this._grip,m=this._hand;if(e&&n.session.visibilityState!=="visible-blurred"){if(m&&e.hand){u=!0;for(const R of e.hand.values()){const g=n.getJointPose(R,r),v=this._getHandJoint(m,R);g!==null&&(v.matrix.fromArray(g.transform.matrix),v.matrix.decompose(v.position,v.rotation,v.scale),v.matrixWorldNeedsUpdate=!0,v.jointRadius=g.radius),v.visible=g!==null}const x=m.joints["index-finger-tip"],S=m.joints["thumb-tip"],_=x.position.distanceTo(S.position),y=.02,T=.005;m.inputState.pinching&&_>y+T?(m.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!m.inputState.pinching&&_<=y-T&&(m.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else p!==null&&e.gripSpace&&(c=n.getPose(e.gripSpace,r),c!==null&&(p.matrix.fromArray(c.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,c.linearVelocity?(p.hasLinearVelocity=!0,p.linearVelocity.copy(c.linearVelocity)):p.hasLinearVelocity=!1,c.angularVelocity?(p.hasAngularVelocity=!0,p.angularVelocity.copy(c.angularVelocity)):p.hasAngularVelocity=!1,p.eventsEnabled&&p.dispatchEvent({type:"gripUpdated",data:e,target:this})));d!==null&&(a=n.getPose(e.targetRaySpace,r),a===null&&c!==null&&(a=c),a!==null&&(d.matrix.fromArray(a.transform.matrix),d.matrix.decompose(d.position,d.rotation,d.scale),d.matrixWorldNeedsUpdate=!0,a.linearVelocity?(d.hasLinearVelocity=!0,d.linearVelocity.copy(a.linearVelocity)):d.hasLinearVelocity=!1,a.angularVelocity?(d.hasAngularVelocity=!0,d.angularVelocity.copy(a.angularVelocity)):d.hasAngularVelocity=!1,this.dispatchEvent(Ev)))}return d!==null&&(d.visible=a!==null),p!==null&&(p.visible=c!==null),m!==null&&(m.visible=u!==null),this}_getHandJoint(e,n){if(e.joints[n.jointName]===void 0){const r=new ds;r.matrixAutoUpdate=!1,r.visible=!1,e.joints[n.jointName]=r,e.add(r)}return e.joints[n.jointName]}}const w0={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Ir={h:0,s:0,l:0},pl={h:0,s:0,l:0};function Wu(s,e,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?s+(e-s)*6*n:n<1/2?e:n<2/3?s+(e-s)*6*(2/3-n):s}class Mt{constructor(e,n,r){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,n,r)}set(e,n,r){if(n===void 0&&r===void 0){const a=e;a&&a.isColor?this.copy(a):typeof a=="number"?this.setHex(a):typeof a=="string"&&this.setStyle(a)}else this.setRGB(e,n,r);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,n=$n){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Dt.colorSpaceToWorking(this,n),this}setRGB(e,n,r,a=Dt.workingColorSpace){return this.r=e,this.g=n,this.b=r,Dt.colorSpaceToWorking(this,a),this}setHSL(e,n,r,a=Dt.workingColorSpace){if(e=uv(e,1),n=Rt(n,0,1),r=Rt(r,0,1),n===0)this.r=this.g=this.b=r;else{const c=r<=.5?r*(1+n):r+n-r*n,u=2*r-c;this.r=Wu(u,c,e+1/3),this.g=Wu(u,c,e),this.b=Wu(u,c,e-1/3)}return Dt.colorSpaceToWorking(this,a),this}setStyle(e,n=$n){function r(c){c!==void 0&&parseFloat(c)<1&&ht("Color: Alpha component of "+e+" will be ignored.")}let a;if(a=/^(\w+)\(([^\)]*)\)/.exec(e)){let c;const u=a[1],d=a[2];switch(u){case"rgb":case"rgba":if(c=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(d))return r(c[4]),this.setRGB(Math.min(255,parseInt(c[1],10))/255,Math.min(255,parseInt(c[2],10))/255,Math.min(255,parseInt(c[3],10))/255,n);if(c=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(d))return r(c[4]),this.setRGB(Math.min(100,parseInt(c[1],10))/100,Math.min(100,parseInt(c[2],10))/100,Math.min(100,parseInt(c[3],10))/100,n);break;case"hsl":case"hsla":if(c=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(d))return r(c[4]),this.setHSL(parseFloat(c[1])/360,parseFloat(c[2])/100,parseFloat(c[3])/100,n);break;default:ht("Color: Unknown color model "+e)}}else if(a=/^\#([A-Fa-f\d]+)$/.exec(e)){const c=a[1],u=c.length;if(u===3)return this.setRGB(parseInt(c.charAt(0),16)/15,parseInt(c.charAt(1),16)/15,parseInt(c.charAt(2),16)/15,n);if(u===6)return this.setHex(parseInt(c,16),n);ht("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,n);return this}setColorName(e,n=$n){const r=w0[e.toLowerCase()];return r!==void 0?this.setHex(r,n):ht("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=cr(e.r),this.g=cr(e.g),this.b=cr(e.b),this}copyLinearToSRGB(e){return this.r=to(e.r),this.g=to(e.g),this.b=to(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=$n){return Dt.workingToColorSpace(In.copy(this),e),Math.round(Rt(In.r*255,0,255))*65536+Math.round(Rt(In.g*255,0,255))*256+Math.round(Rt(In.b*255,0,255))}getHexString(e=$n){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,n=Dt.workingColorSpace){Dt.workingToColorSpace(In.copy(this),n);const r=In.r,a=In.g,c=In.b,u=Math.max(r,a,c),d=Math.min(r,a,c);let p,m;const x=(d+u)/2;if(d===u)p=0,m=0;else{const S=u-d;switch(m=x<=.5?S/(u+d):S/(2-u-d),u){case r:p=(a-c)/S+(a<c?6:0);break;case a:p=(c-r)/S+2;break;case c:p=(r-a)/S+4;break}p/=6}return e.h=p,e.s=m,e.l=x,e}getRGB(e,n=Dt.workingColorSpace){return Dt.workingToColorSpace(In.copy(this),n),e.r=In.r,e.g=In.g,e.b=In.b,e}getStyle(e=$n){Dt.workingToColorSpace(In.copy(this),e);const n=In.r,r=In.g,a=In.b;return e!==$n?`color(${e} ${n.toFixed(3)} ${r.toFixed(3)} ${a.toFixed(3)})`:`rgb(${Math.round(n*255)},${Math.round(r*255)},${Math.round(a*255)})`}offsetHSL(e,n,r){return this.getHSL(Ir),this.setHSL(Ir.h+e,Ir.s+n,Ir.l+r)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,n){return this.r=e.r+n.r,this.g=e.g+n.g,this.b=e.b+n.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,n){return this.r+=(e.r-this.r)*n,this.g+=(e.g-this.g)*n,this.b+=(e.b-this.b)*n,this}lerpColors(e,n,r){return this.r=e.r+(n.r-e.r)*r,this.g=e.g+(n.g-e.g)*r,this.b=e.b+(n.b-e.b)*r,this}lerpHSL(e,n){this.getHSL(Ir),e.getHSL(pl);const r=Ou(Ir.h,pl.h,n),a=Ou(Ir.s,pl.s,n),c=Ou(Ir.l,pl.l,n);return this.setHSL(r,a,c),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const n=this.r,r=this.g,a=this.b,c=e.elements;return this.r=c[0]*n+c[3]*r+c[6]*a,this.g=c[1]*n+c[4]*r+c[7]*a,this.b=c[2]*n+c[5]*r+c[8]*a,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,n=0){return this.r=e[n],this.g=e[n+1],this.b=e[n+2],this}toArray(e=[],n=0){return e[n]=this.r,e[n+1]=this.g,e[n+2]=this.b,e}fromBufferAttribute(e,n){return this.r=e.getX(n),this.g=e.getY(n),this.b=e.getZ(n),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const In=new Mt;Mt.NAMES=w0;class yd{constructor(e,n=1,r=1e3){this.isFog=!0,this.name="",this.color=new Mt(e),this.near=n,this.far=r}clone(){return new yd(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}}class wv extends Fn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Vr,this.environmentIntensity=1,this.environmentRotation=new Vr,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,n){return super.copy(e,n),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const n=super.toJSON(e);return this.fog!==null&&(n.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(n.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(n.object.backgroundIntensity=this.backgroundIntensity),n.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(n.object.environmentIntensity=this.environmentIntensity),n.object.environmentRotation=this.environmentRotation.toArray(),n}}const Ti=new te,ir=new te,Xu=new te,rr=new te,Ws=new te,Xs=new te,wm=new te,ju=new te,Yu=new te,qu=new te,Ku=new sn,$u=new sn,Zu=new sn;class bi{constructor(e=new te,n=new te,r=new te){this.a=e,this.b=n,this.c=r}static getNormal(e,n,r,a){a.subVectors(r,n),Ti.subVectors(e,n),a.cross(Ti);const c=a.lengthSq();return c>0?a.multiplyScalar(1/Math.sqrt(c)):a.set(0,0,0)}static getBarycoord(e,n,r,a,c){Ti.subVectors(a,n),ir.subVectors(r,n),Xu.subVectors(e,n);const u=Ti.dot(Ti),d=Ti.dot(ir),p=Ti.dot(Xu),m=ir.dot(ir),x=ir.dot(Xu),S=u*m-d*d;if(S===0)return c.set(0,0,0),null;const _=1/S,y=(m*p-d*x)*_,T=(u*x-d*p)*_;return c.set(1-y-T,T,y)}static containsPoint(e,n,r,a){return this.getBarycoord(e,n,r,a,rr)===null?!1:rr.x>=0&&rr.y>=0&&rr.x+rr.y<=1}static getInterpolation(e,n,r,a,c,u,d,p){return this.getBarycoord(e,n,r,a,rr)===null?(p.x=0,p.y=0,"z"in p&&(p.z=0),"w"in p&&(p.w=0),null):(p.setScalar(0),p.addScaledVector(c,rr.x),p.addScaledVector(u,rr.y),p.addScaledVector(d,rr.z),p)}static getInterpolatedAttribute(e,n,r,a,c,u){return Ku.setScalar(0),$u.setScalar(0),Zu.setScalar(0),Ku.fromBufferAttribute(e,n),$u.fromBufferAttribute(e,r),Zu.fromBufferAttribute(e,a),u.setScalar(0),u.addScaledVector(Ku,c.x),u.addScaledVector($u,c.y),u.addScaledVector(Zu,c.z),u}static isFrontFacing(e,n,r,a){return Ti.subVectors(r,n),ir.subVectors(e,n),Ti.cross(ir).dot(a)<0}set(e,n,r){return this.a.copy(e),this.b.copy(n),this.c.copy(r),this}setFromPointsAndIndices(e,n,r,a){return this.a.copy(e[n]),this.b.copy(e[r]),this.c.copy(e[a]),this}setFromAttributeAndIndices(e,n,r,a){return this.a.fromBufferAttribute(e,n),this.b.fromBufferAttribute(e,r),this.c.fromBufferAttribute(e,a),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Ti.subVectors(this.c,this.b),ir.subVectors(this.a,this.b),Ti.cross(ir).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return bi.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,n){return bi.getBarycoord(e,this.a,this.b,this.c,n)}getInterpolation(e,n,r,a,c){return bi.getInterpolation(e,this.a,this.b,this.c,n,r,a,c)}containsPoint(e){return bi.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return bi.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,n){const r=this.a,a=this.b,c=this.c;let u,d;Ws.subVectors(a,r),Xs.subVectors(c,r),ju.subVectors(e,r);const p=Ws.dot(ju),m=Xs.dot(ju);if(p<=0&&m<=0)return n.copy(r);Yu.subVectors(e,a);const x=Ws.dot(Yu),S=Xs.dot(Yu);if(x>=0&&S<=x)return n.copy(a);const _=p*S-x*m;if(_<=0&&p>=0&&x<=0)return u=p/(p-x),n.copy(r).addScaledVector(Ws,u);qu.subVectors(e,c);const y=Ws.dot(qu),T=Xs.dot(qu);if(T>=0&&y<=T)return n.copy(c);const R=y*m-p*T;if(R<=0&&m>=0&&T<=0)return d=m/(m-T),n.copy(r).addScaledVector(Xs,d);const g=x*T-y*S;if(g<=0&&S-x>=0&&y-T>=0)return wm.subVectors(c,a),d=(S-x)/(S-x+(y-T)),n.copy(a).addScaledVector(wm,d);const v=1/(g+R+_);return u=R*v,d=_*v,n.copy(r).addScaledVector(Ws,u).addScaledVector(Xs,d)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}class oa{constructor(e=new te(1/0,1/0,1/0),n=new te(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=n}set(e,n){return this.min.copy(e),this.max.copy(n),this}setFromArray(e){this.makeEmpty();for(let n=0,r=e.length;n<r;n+=3)this.expandByPoint(Ai.fromArray(e,n));return this}setFromBufferAttribute(e){this.makeEmpty();for(let n=0,r=e.count;n<r;n++)this.expandByPoint(Ai.fromBufferAttribute(e,n));return this}setFromPoints(e){this.makeEmpty();for(let n=0,r=e.length;n<r;n++)this.expandByPoint(e[n]);return this}setFromCenterAndSize(e,n){const r=Ai.copy(n).multiplyScalar(.5);return this.min.copy(e).sub(r),this.max.copy(e).add(r),this}setFromObject(e,n=!1){return this.makeEmpty(),this.expandByObject(e,n)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,n=!1){e.updateWorldMatrix(!1,!1);const r=e.geometry;if(r!==void 0){const c=r.getAttribute("position");if(n===!0&&c!==void 0&&e.isInstancedMesh!==!0)for(let u=0,d=c.count;u<d;u++)e.isMesh===!0?e.getVertexPosition(u,Ai):Ai.fromBufferAttribute(c,u),Ai.applyMatrix4(e.matrixWorld),this.expandByPoint(Ai);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),ml.copy(e.boundingBox)):(r.boundingBox===null&&r.computeBoundingBox(),ml.copy(r.boundingBox)),ml.applyMatrix4(e.matrixWorld),this.union(ml)}const a=e.children;for(let c=0,u=a.length;c<u;c++)this.expandByObject(a[c],n);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,n){return n.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Ai),Ai.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let n,r;return e.normal.x>0?(n=e.normal.x*this.min.x,r=e.normal.x*this.max.x):(n=e.normal.x*this.max.x,r=e.normal.x*this.min.x),e.normal.y>0?(n+=e.normal.y*this.min.y,r+=e.normal.y*this.max.y):(n+=e.normal.y*this.max.y,r+=e.normal.y*this.min.y),e.normal.z>0?(n+=e.normal.z*this.min.z,r+=e.normal.z*this.max.z):(n+=e.normal.z*this.max.z,r+=e.normal.z*this.min.z),n<=-e.constant&&r>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(qo),gl.subVectors(this.max,qo),js.subVectors(e.a,qo),Ys.subVectors(e.b,qo),qs.subVectors(e.c,qo),Nr.subVectors(Ys,js),Ur.subVectors(qs,Ys),is.subVectors(js,qs);let n=[0,-Nr.z,Nr.y,0,-Ur.z,Ur.y,0,-is.z,is.y,Nr.z,0,-Nr.x,Ur.z,0,-Ur.x,is.z,0,-is.x,-Nr.y,Nr.x,0,-Ur.y,Ur.x,0,-is.y,is.x,0];return!Ju(n,js,Ys,qs,gl)||(n=[1,0,0,0,1,0,0,0,1],!Ju(n,js,Ys,qs,gl))?!1:(_l.crossVectors(Nr,Ur),n=[_l.x,_l.y,_l.z],Ju(n,js,Ys,qs,gl))}clampPoint(e,n){return n.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Ai).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Ai).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(sr[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),sr[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),sr[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),sr[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),sr[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),sr[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),sr[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),sr[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(sr),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const sr=[new te,new te,new te,new te,new te,new te,new te,new te],Ai=new te,ml=new oa,js=new te,Ys=new te,qs=new te,Nr=new te,Ur=new te,is=new te,qo=new te,gl=new te,_l=new te,rs=new te;function Ju(s,e,n,r,a){for(let c=0,u=s.length-3;c<=u;c+=3){rs.fromArray(s,c);const d=a.x*Math.abs(rs.x)+a.y*Math.abs(rs.y)+a.z*Math.abs(rs.z),p=e.dot(rs),m=n.dot(rs),x=r.dot(rs);if(Math.max(-Math.max(p,m,x),Math.min(p,m,x))>d)return!1}return!0}const fn=new te,vl=new It;let Tv=0;class Gi extends ms{constructor(e,n,r=!1){if(super(),Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:Tv++}),this.name="",this.array=e,this.itemSize=n,this.count=e!==void 0?e.length/n:0,this.normalized=r,this.usage=um,this.updateRanges=[],this.gpuType=Bi,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,n){this.updateRanges.push({start:e,count:n})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,n,r){e*=this.itemSize,r*=n.itemSize;for(let a=0,c=this.itemSize;a<c;a++)this.array[e+a]=n.array[r+a];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let n=0,r=this.count;n<r;n++)vl.fromBufferAttribute(this,n),vl.applyMatrix3(e),this.setXY(n,vl.x,vl.y);else if(this.itemSize===3)for(let n=0,r=this.count;n<r;n++)fn.fromBufferAttribute(this,n),fn.applyMatrix3(e),this.setXYZ(n,fn.x,fn.y,fn.z);return this}applyMatrix4(e){for(let n=0,r=this.count;n<r;n++)fn.fromBufferAttribute(this,n),fn.applyMatrix4(e),this.setXYZ(n,fn.x,fn.y,fn.z);return this}applyNormalMatrix(e){for(let n=0,r=this.count;n<r;n++)fn.fromBufferAttribute(this,n),fn.applyNormalMatrix(e),this.setXYZ(n,fn.x,fn.y,fn.z);return this}transformDirection(e){for(let n=0,r=this.count;n<r;n++)fn.fromBufferAttribute(this,n),fn.transformDirection(e),this.setXYZ(n,fn.x,fn.y,fn.z);return this}set(e,n=0){return this.array.set(e,n),this}getComponent(e,n){let r=this.array[e*this.itemSize+n];return this.normalized&&(r=jo(r,this.array)),r}setComponent(e,n,r){return this.normalized&&(r=Kn(r,this.array)),this.array[e*this.itemSize+n]=r,this}getX(e){let n=this.array[e*this.itemSize];return this.normalized&&(n=jo(n,this.array)),n}setX(e,n){return this.normalized&&(n=Kn(n,this.array)),this.array[e*this.itemSize]=n,this}getY(e){let n=this.array[e*this.itemSize+1];return this.normalized&&(n=jo(n,this.array)),n}setY(e,n){return this.normalized&&(n=Kn(n,this.array)),this.array[e*this.itemSize+1]=n,this}getZ(e){let n=this.array[e*this.itemSize+2];return this.normalized&&(n=jo(n,this.array)),n}setZ(e,n){return this.normalized&&(n=Kn(n,this.array)),this.array[e*this.itemSize+2]=n,this}getW(e){let n=this.array[e*this.itemSize+3];return this.normalized&&(n=jo(n,this.array)),n}setW(e,n){return this.normalized&&(n=Kn(n,this.array)),this.array[e*this.itemSize+3]=n,this}setXY(e,n,r){return e*=this.itemSize,this.normalized&&(n=Kn(n,this.array),r=Kn(r,this.array)),this.array[e+0]=n,this.array[e+1]=r,this}setXYZ(e,n,r,a){return e*=this.itemSize,this.normalized&&(n=Kn(n,this.array),r=Kn(r,this.array),a=Kn(a,this.array)),this.array[e+0]=n,this.array[e+1]=r,this.array[e+2]=a,this}setXYZW(e,n,r,a,c){return e*=this.itemSize,this.normalized&&(n=Kn(n,this.array),r=Kn(r,this.array),a=Kn(a,this.array),c=Kn(c,this.array)),this.array[e+0]=n,this.array[e+1]=r,this.array[e+2]=a,this.array[e+3]=c,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==um&&(e.usage=this.usage),e}dispose(){this.dispatchEvent({type:"dispose"})}}class T0 extends Gi{constructor(e,n,r){super(new Uint16Array(e),n,r)}}class A0 extends Gi{constructor(e,n,r){super(new Uint32Array(e),n,r)}}class ln extends Gi{constructor(e,n,r){super(new Float32Array(e),n,r)}}const Av=new oa,Ko=new te,Qu=new te;class Md{constructor(e=new te,n=-1){this.isSphere=!0,this.center=e,this.radius=n}set(e,n){return this.center.copy(e),this.radius=n,this}setFromPoints(e,n){const r=this.center;n!==void 0?r.copy(n):Av.setFromPoints(e).getCenter(r);let a=0;for(let c=0,u=e.length;c<u;c++)a=Math.max(a,r.distanceToSquared(e[c]));return this.radius=Math.sqrt(a),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const n=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=n*n}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,n){const r=this.center.distanceToSquared(e);return n.copy(e),r>this.radius*this.radius&&(n.sub(this.center).normalize(),n.multiplyScalar(this.radius).add(this.center)),n}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Ko.subVectors(e,this.center);const n=Ko.lengthSq();if(n>this.radius*this.radius){const r=Math.sqrt(n),a=(r-this.radius)*.5;this.center.addScaledVector(Ko,a/r),this.radius+=a}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Qu.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Ko.copy(e.center).add(Qu)),this.expandByPoint(Ko.copy(e.center).sub(Qu))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}let bv=0;const hi=new on,ef=new Fn,Ks=new te,ii=new oa,$o=new oa,yn=new te;class oi extends ms{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:bv++}),this.uuid=sa(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(ov(e)?A0:T0)(e,1):this.index=e,this}setIndirect(e,n=0){return this.indirect=e,this.indirectOffset=n,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,n){return this.attributes[e]=n,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,n,r=0){this.groups.push({start:e,count:n,materialIndex:r})}clearGroups(){this.groups=[]}setDrawRange(e,n){this.drawRange.start=e,this.drawRange.count=n}applyMatrix4(e){const n=this.attributes.position;n!==void 0&&(n.applyMatrix4(e),n.needsUpdate=!0);const r=this.attributes.normal;if(r!==void 0){const c=new _t().getNormalMatrix(e);r.applyNormalMatrix(c),r.needsUpdate=!0}const a=this.attributes.tangent;return a!==void 0&&(a.transformDirection(e),a.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return hi.makeRotationFromQuaternion(e),this.applyMatrix4(hi),this}rotateX(e){return hi.makeRotationX(e),this.applyMatrix4(hi),this}rotateY(e){return hi.makeRotationY(e),this.applyMatrix4(hi),this}rotateZ(e){return hi.makeRotationZ(e),this.applyMatrix4(hi),this}translate(e,n,r){return hi.makeTranslation(e,n,r),this.applyMatrix4(hi),this}scale(e,n,r){return hi.makeScale(e,n,r),this.applyMatrix4(hi),this}lookAt(e){return ef.lookAt(e),ef.updateMatrix(),this.applyMatrix4(ef.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Ks).negate(),this.translate(Ks.x,Ks.y,Ks.z),this}setFromPoints(e){const n=this.getAttribute("position");if(n===void 0){const r=[];for(let a=0,c=e.length;a<c;a++){const u=e[a];r.push(u.x,u.y,u.z||0)}this.setAttribute("position",new ln(r,3))}else{const r=Math.min(e.length,n.count);for(let a=0;a<r;a++){const c=e[a];n.setXYZ(a,c.x,c.y,c.z||0)}e.length>n.count&&ht("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),n.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new oa);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Ut("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new te(-1/0,-1/0,-1/0),new te(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),n)for(let r=0,a=n.length;r<a;r++){const c=n[r];ii.setFromBufferAttribute(c),this.morphTargetsRelative?(yn.addVectors(this.boundingBox.min,ii.min),this.boundingBox.expandByPoint(yn),yn.addVectors(this.boundingBox.max,ii.max),this.boundingBox.expandByPoint(yn)):(this.boundingBox.expandByPoint(ii.min),this.boundingBox.expandByPoint(ii.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&Ut('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Md);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Ut("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new te,1/0);return}if(e){const r=this.boundingSphere.center;if(ii.setFromBufferAttribute(e),n)for(let c=0,u=n.length;c<u;c++){const d=n[c];$o.setFromBufferAttribute(d),this.morphTargetsRelative?(yn.addVectors(ii.min,$o.min),ii.expandByPoint(yn),yn.addVectors(ii.max,$o.max),ii.expandByPoint(yn)):(ii.expandByPoint($o.min),ii.expandByPoint($o.max))}ii.getCenter(r);let a=0;for(let c=0,u=e.count;c<u;c++)yn.fromBufferAttribute(e,c),a=Math.max(a,r.distanceToSquared(yn));if(n)for(let c=0,u=n.length;c<u;c++){const d=n[c],p=this.morphTargetsRelative;for(let m=0,x=d.count;m<x;m++)yn.fromBufferAttribute(d,m),p&&(Ks.fromBufferAttribute(e,m),yn.add(Ks)),a=Math.max(a,r.distanceToSquared(yn))}this.boundingSphere.radius=Math.sqrt(a),isNaN(this.boundingSphere.radius)&&Ut('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,n=this.attributes;if(e===null||n.position===void 0||n.normal===void 0||n.uv===void 0){Ut("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const r=n.position,a=n.normal,c=n.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Gi(new Float32Array(4*r.count),4));const u=this.getAttribute("tangent"),d=[],p=[];for(let w=0;w<r.count;w++)d[w]=new te,p[w]=new te;const m=new te,x=new te,S=new te,_=new It,y=new It,T=new It,R=new te,g=new te;function v(w,D,j){m.fromBufferAttribute(r,w),x.fromBufferAttribute(r,D),S.fromBufferAttribute(r,j),_.fromBufferAttribute(c,w),y.fromBufferAttribute(c,D),T.fromBufferAttribute(c,j),x.sub(m),S.sub(m),y.sub(_),T.sub(_);const k=1/(y.x*T.y-T.x*y.y);isFinite(k)&&(R.copy(x).multiplyScalar(T.y).addScaledVector(S,-y.y).multiplyScalar(k),g.copy(S).multiplyScalar(y.x).addScaledVector(x,-T.x).multiplyScalar(k),d[w].add(R),d[D].add(R),d[j].add(R),p[w].add(g),p[D].add(g),p[j].add(g))}let b=this.groups;b.length===0&&(b=[{start:0,count:e.count}]);for(let w=0,D=b.length;w<D;++w){const j=b[w],k=j.start,q=j.count;for(let de=k,ve=k+q;de<ve;de+=3)v(e.getX(de+0),e.getX(de+1),e.getX(de+2))}const I=new te,P=new te,H=new te,L=new te;function z(w){H.fromBufferAttribute(a,w),L.copy(H);const D=d[w];I.copy(D),I.sub(H.multiplyScalar(H.dot(D))).normalize(),P.crossVectors(L,D);const k=P.dot(p[w])<0?-1:1;u.setXYZW(w,I.x,I.y,I.z,k)}for(let w=0,D=b.length;w<D;++w){const j=b[w],k=j.start,q=j.count;for(let de=k,ve=k+q;de<ve;de+=3)z(e.getX(de+0)),z(e.getX(de+1)),z(e.getX(de+2))}}computeVertexNormals(){const e=this.index,n=this.getAttribute("position");if(n!==void 0){let r=this.getAttribute("normal");if(r===void 0)r=new Gi(new Float32Array(n.count*3),3),this.setAttribute("normal",r);else for(let _=0,y=r.count;_<y;_++)r.setXYZ(_,0,0,0);const a=new te,c=new te,u=new te,d=new te,p=new te,m=new te,x=new te,S=new te;if(e)for(let _=0,y=e.count;_<y;_+=3){const T=e.getX(_+0),R=e.getX(_+1),g=e.getX(_+2);a.fromBufferAttribute(n,T),c.fromBufferAttribute(n,R),u.fromBufferAttribute(n,g),x.subVectors(u,c),S.subVectors(a,c),x.cross(S),d.fromBufferAttribute(r,T),p.fromBufferAttribute(r,R),m.fromBufferAttribute(r,g),d.add(x),p.add(x),m.add(x),r.setXYZ(T,d.x,d.y,d.z),r.setXYZ(R,p.x,p.y,p.z),r.setXYZ(g,m.x,m.y,m.z)}else for(let _=0,y=n.count;_<y;_+=3)a.fromBufferAttribute(n,_+0),c.fromBufferAttribute(n,_+1),u.fromBufferAttribute(n,_+2),x.subVectors(u,c),S.subVectors(a,c),x.cross(S),r.setXYZ(_+0,x.x,x.y,x.z),r.setXYZ(_+1,x.x,x.y,x.z),r.setXYZ(_+2,x.x,x.y,x.z);this.normalizeNormals(),r.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let n=0,r=e.count;n<r;n++)yn.fromBufferAttribute(e,n),yn.normalize(),e.setXYZ(n,yn.x,yn.y,yn.z)}toNonIndexed(){function e(d,p){const m=d.array,x=d.itemSize,S=d.normalized,_=new m.constructor(p.length*x);let y=0,T=0;for(let R=0,g=p.length;R<g;R++){d.isInterleavedBufferAttribute?y=p[R]*d.data.stride+d.offset:y=p[R]*x;for(let v=0;v<x;v++)_[T++]=m[y++]}return new Gi(_,x,S)}if(this.index===null)return ht("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const n=new oi,r=this.index.array,a=this.attributes;for(const d in a){const p=a[d],m=e(p,r);n.setAttribute(d,m)}const c=this.morphAttributes;for(const d in c){const p=[],m=c[d];for(let x=0,S=m.length;x<S;x++){const _=m[x],y=e(_,r);p.push(y)}n.morphAttributes[d]=p}n.morphTargetsRelative=this.morphTargetsRelative;const u=this.groups;for(let d=0,p=u.length;d<p;d++){const m=u[d];n.addGroup(m.start,m.count,m.materialIndex)}return n}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const p=this.parameters;for(const m in p)p[m]!==void 0&&(e[m]=p[m]);return e}e.data={attributes:{}};const n=this.index;n!==null&&(e.data.index={type:n.array.constructor.name,array:Array.prototype.slice.call(n.array)});const r=this.attributes;for(const p in r){const m=r[p];e.data.attributes[p]=m.toJSON(e.data)}const a={};let c=!1;for(const p in this.morphAttributes){const m=this.morphAttributes[p],x=[];for(let S=0,_=m.length;S<_;S++){const y=m[S];x.push(y.toJSON(e.data))}x.length>0&&(a[p]=x,c=!0)}c&&(e.data.morphAttributes=a,e.data.morphTargetsRelative=this.morphTargetsRelative);const u=this.groups;u.length>0&&(e.data.groups=JSON.parse(JSON.stringify(u)));const d=this.boundingSphere;return d!==null&&(e.data.boundingSphere=d.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const n={};this.name=e.name;const r=e.index;r!==null&&this.setIndex(r.clone());const a=e.attributes;for(const m in a){const x=a[m];this.setAttribute(m,x.clone(n))}const c=e.morphAttributes;for(const m in c){const x=[],S=c[m];for(let _=0,y=S.length;_<y;_++)x.push(S[_].clone(n));this.morphAttributes[m]=x}this.morphTargetsRelative=e.morphTargetsRelative;const u=e.groups;for(let m=0,x=u.length;m<x;m++){const S=u[m];this.addGroup(S.start,S.count,S.materialIndex)}const d=e.boundingBox;d!==null&&(this.boundingBox=d.clone());const p=e.boundingSphere;return p!==null&&(this.boundingSphere=p.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}let Cv=0;class aa extends ms{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Cv++}),this.uuid=sa(),this.name="",this.type="Material",this.blending=eo,this.side=Hr,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=mf,this.blendDst=gf,this.blendEquation=ls,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Mt(0,0,0),this.blendAlpha=0,this.depthFunc=no,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=cm,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Bs,this.stencilZFail=Bs,this.stencilZPass=Bs,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const n in e){const r=e[n];if(r===void 0){ht(`Material: parameter '${n}' has value of undefined.`);continue}const a=this[n];if(a===void 0){ht(`Material: '${n}' is not a property of THREE.${this.type}.`);continue}a&&a.isColor?a.set(r):a&&a.isVector3&&r&&r.isVector3?a.copy(r):this[n]=r}}toJSON(e){const n=e===void 0||typeof e=="string";n&&(e={textures:{},images:{}});const r={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.color&&this.color.isColor&&(r.color=this.color.getHex()),this.roughness!==void 0&&(r.roughness=this.roughness),this.metalness!==void 0&&(r.metalness=this.metalness),this.sheen!==void 0&&(r.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(r.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(r.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(r.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(r.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(r.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(r.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(r.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(r.shininess=this.shininess),this.clearcoat!==void 0&&(r.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(r.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(r.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(r.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(r.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,r.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(r.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(r.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(r.dispersion=this.dispersion),this.iridescence!==void 0&&(r.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(r.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(r.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(r.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(r.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(r.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(r.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(r.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(r.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(r.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(r.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(r.lightMap=this.lightMap.toJSON(e).uuid,r.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(r.aoMap=this.aoMap.toJSON(e).uuid,r.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(r.bumpMap=this.bumpMap.toJSON(e).uuid,r.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(r.normalMap=this.normalMap.toJSON(e).uuid,r.normalMapType=this.normalMapType,r.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(r.displacementMap=this.displacementMap.toJSON(e).uuid,r.displacementScale=this.displacementScale,r.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(r.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(r.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(r.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(r.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(r.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(r.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(r.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(r.combine=this.combine)),this.envMapRotation!==void 0&&(r.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(r.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(r.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(r.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(r.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(r.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(r.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(r.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(r.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(r.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(r.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(r.size=this.size),this.shadowSide!==null&&(r.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(r.sizeAttenuation=this.sizeAttenuation),this.blending!==eo&&(r.blending=this.blending),this.side!==Hr&&(r.side=this.side),this.vertexColors===!0&&(r.vertexColors=!0),this.opacity<1&&(r.opacity=this.opacity),this.transparent===!0&&(r.transparent=!0),this.blendSrc!==mf&&(r.blendSrc=this.blendSrc),this.blendDst!==gf&&(r.blendDst=this.blendDst),this.blendEquation!==ls&&(r.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(r.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(r.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(r.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(r.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(r.blendAlpha=this.blendAlpha),this.depthFunc!==no&&(r.depthFunc=this.depthFunc),this.depthTest===!1&&(r.depthTest=this.depthTest),this.depthWrite===!1&&(r.depthWrite=this.depthWrite),this.colorWrite===!1&&(r.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(r.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==cm&&(r.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(r.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(r.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Bs&&(r.stencilFail=this.stencilFail),this.stencilZFail!==Bs&&(r.stencilZFail=this.stencilZFail),this.stencilZPass!==Bs&&(r.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(r.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(r.rotation=this.rotation),this.polygonOffset===!0&&(r.polygonOffset=!0),this.polygonOffsetFactor!==0&&(r.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(r.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(r.linewidth=this.linewidth),this.dashSize!==void 0&&(r.dashSize=this.dashSize),this.gapSize!==void 0&&(r.gapSize=this.gapSize),this.scale!==void 0&&(r.scale=this.scale),this.dithering===!0&&(r.dithering=!0),this.alphaTest>0&&(r.alphaTest=this.alphaTest),this.alphaHash===!0&&(r.alphaHash=!0),this.alphaToCoverage===!0&&(r.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(r.premultipliedAlpha=!0),this.forceSinglePass===!0&&(r.forceSinglePass=!0),this.allowOverride===!1&&(r.allowOverride=!1),this.wireframe===!0&&(r.wireframe=!0),this.wireframeLinewidth>1&&(r.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(r.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(r.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(r.flatShading=!0),this.visible===!1&&(r.visible=!1),this.toneMapped===!1&&(r.toneMapped=!1),this.fog===!1&&(r.fog=!1),Object.keys(this.userData).length>0&&(r.userData=this.userData);function a(c){const u=[];for(const d in c){const p=c[d];delete p.metadata,u.push(p)}return u}if(n){const c=a(e.textures),u=a(e.images);c.length>0&&(r.textures=c),u.length>0&&(r.images=u)}return r}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const n=e.clippingPlanes;let r=null;if(n!==null){const a=n.length;r=new Array(a);for(let c=0;c!==a;++c)r[c]=n[c].clone()}return this.clippingPlanes=r,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}const or=new te,tf=new te,xl=new te,Fr=new te,nf=new te,Sl=new te,rf=new te;class b0{constructor(e=new te,n=new te(0,0,-1)){this.origin=e,this.direction=n}set(e,n){return this.origin.copy(e),this.direction.copy(n),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,n){return n.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,or)),this}closestPointToPoint(e,n){n.subVectors(e,this.origin);const r=n.dot(this.direction);return r<0?n.copy(this.origin):n.copy(this.origin).addScaledVector(this.direction,r)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const n=or.subVectors(e,this.origin).dot(this.direction);return n<0?this.origin.distanceToSquared(e):(or.copy(this.origin).addScaledVector(this.direction,n),or.distanceToSquared(e))}distanceSqToSegment(e,n,r,a){tf.copy(e).add(n).multiplyScalar(.5),xl.copy(n).sub(e).normalize(),Fr.copy(this.origin).sub(tf);const c=e.distanceTo(n)*.5,u=-this.direction.dot(xl),d=Fr.dot(this.direction),p=-Fr.dot(xl),m=Fr.lengthSq(),x=Math.abs(1-u*u);let S,_,y,T;if(x>0)if(S=u*p-d,_=u*d-p,T=c*x,S>=0)if(_>=-T)if(_<=T){const R=1/x;S*=R,_*=R,y=S*(S+u*_+2*d)+_*(u*S+_+2*p)+m}else _=c,S=Math.max(0,-(u*_+d)),y=-S*S+_*(_+2*p)+m;else _=-c,S=Math.max(0,-(u*_+d)),y=-S*S+_*(_+2*p)+m;else _<=-T?(S=Math.max(0,-(-u*c+d)),_=S>0?-c:Math.min(Math.max(-c,-p),c),y=-S*S+_*(_+2*p)+m):_<=T?(S=0,_=Math.min(Math.max(-c,-p),c),y=_*(_+2*p)+m):(S=Math.max(0,-(u*c+d)),_=S>0?c:Math.min(Math.max(-c,-p),c),y=-S*S+_*(_+2*p)+m);else _=u>0?-c:c,S=Math.max(0,-(u*_+d)),y=-S*S+_*(_+2*p)+m;return r&&r.copy(this.origin).addScaledVector(this.direction,S),a&&a.copy(tf).addScaledVector(xl,_),y}intersectSphere(e,n){or.subVectors(e.center,this.origin);const r=or.dot(this.direction),a=or.dot(or)-r*r,c=e.radius*e.radius;if(a>c)return null;const u=Math.sqrt(c-a),d=r-u,p=r+u;return p<0?null:d<0?this.at(p,n):this.at(d,n)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const n=e.normal.dot(this.direction);if(n===0)return e.distanceToPoint(this.origin)===0?0:null;const r=-(this.origin.dot(e.normal)+e.constant)/n;return r>=0?r:null}intersectPlane(e,n){const r=this.distanceToPlane(e);return r===null?null:this.at(r,n)}intersectsPlane(e){const n=e.distanceToPoint(this.origin);return n===0||e.normal.dot(this.direction)*n<0}intersectBox(e,n){let r,a,c,u,d,p;const m=1/this.direction.x,x=1/this.direction.y,S=1/this.direction.z,_=this.origin;return m>=0?(r=(e.min.x-_.x)*m,a=(e.max.x-_.x)*m):(r=(e.max.x-_.x)*m,a=(e.min.x-_.x)*m),x>=0?(c=(e.min.y-_.y)*x,u=(e.max.y-_.y)*x):(c=(e.max.y-_.y)*x,u=(e.min.y-_.y)*x),r>u||c>a||((c>r||isNaN(r))&&(r=c),(u<a||isNaN(a))&&(a=u),S>=0?(d=(e.min.z-_.z)*S,p=(e.max.z-_.z)*S):(d=(e.max.z-_.z)*S,p=(e.min.z-_.z)*S),r>p||d>a)||((d>r||r!==r)&&(r=d),(p<a||a!==a)&&(a=p),a<0)?null:this.at(r>=0?r:a,n)}intersectsBox(e){return this.intersectBox(e,or)!==null}intersectTriangle(e,n,r,a,c){nf.subVectors(n,e),Sl.subVectors(r,e),rf.crossVectors(nf,Sl);let u=this.direction.dot(rf),d;if(u>0){if(a)return null;d=1}else if(u<0)d=-1,u=-u;else return null;Fr.subVectors(this.origin,e);const p=d*this.direction.dot(Sl.crossVectors(Fr,Sl));if(p<0)return null;const m=d*this.direction.dot(nf.cross(Fr));if(m<0||p+m>u)return null;const x=-d*Fr.dot(rf);return x<0?null:this.at(x/u,c)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Wl extends aa{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Mt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Vr,this.combine=a0,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Tm=new on,ss=new b0,yl=new Md,Am=new te,Ml=new te,El=new te,wl=new te,sf=new te,Tl=new te,bm=new te,Al=new te;class De extends Fn{constructor(e=new oi,n=new Wl){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=n,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const n=this.geometry.morphAttributes,r=Object.keys(n);if(r.length>0){const a=n[r[0]];if(a!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let c=0,u=a.length;c<u;c++){const d=a[c].name||String(c);this.morphTargetInfluences.push(0),this.morphTargetDictionary[d]=c}}}}getVertexPosition(e,n){const r=this.geometry,a=r.attributes.position,c=r.morphAttributes.position,u=r.morphTargetsRelative;n.fromBufferAttribute(a,e);const d=this.morphTargetInfluences;if(c&&d){Tl.set(0,0,0);for(let p=0,m=c.length;p<m;p++){const x=d[p],S=c[p];x!==0&&(sf.fromBufferAttribute(S,e),u?Tl.addScaledVector(sf,x):Tl.addScaledVector(sf.sub(n),x))}n.add(Tl)}return n}raycast(e,n){const r=this.geometry,a=this.material,c=this.matrixWorld;a!==void 0&&(r.boundingSphere===null&&r.computeBoundingSphere(),yl.copy(r.boundingSphere),yl.applyMatrix4(c),ss.copy(e.ray).recast(e.near),!(yl.containsPoint(ss.origin)===!1&&(ss.intersectSphere(yl,Am)===null||ss.origin.distanceToSquared(Am)>(e.far-e.near)**2))&&(Tm.copy(c).invert(),ss.copy(e.ray).applyMatrix4(Tm),!(r.boundingBox!==null&&ss.intersectsBox(r.boundingBox)===!1)&&this._computeIntersections(e,n,ss)))}_computeIntersections(e,n,r){let a;const c=this.geometry,u=this.material,d=c.index,p=c.attributes.position,m=c.attributes.uv,x=c.attributes.uv1,S=c.attributes.normal,_=c.groups,y=c.drawRange;if(d!==null)if(Array.isArray(u))for(let T=0,R=_.length;T<R;T++){const g=_[T],v=u[g.materialIndex],b=Math.max(g.start,y.start),I=Math.min(d.count,Math.min(g.start+g.count,y.start+y.count));for(let P=b,H=I;P<H;P+=3){const L=d.getX(P),z=d.getX(P+1),w=d.getX(P+2);a=bl(this,v,e,r,m,x,S,L,z,w),a&&(a.faceIndex=Math.floor(P/3),a.face.materialIndex=g.materialIndex,n.push(a))}}else{const T=Math.max(0,y.start),R=Math.min(d.count,y.start+y.count);for(let g=T,v=R;g<v;g+=3){const b=d.getX(g),I=d.getX(g+1),P=d.getX(g+2);a=bl(this,u,e,r,m,x,S,b,I,P),a&&(a.faceIndex=Math.floor(g/3),n.push(a))}}else if(p!==void 0)if(Array.isArray(u))for(let T=0,R=_.length;T<R;T++){const g=_[T],v=u[g.materialIndex],b=Math.max(g.start,y.start),I=Math.min(p.count,Math.min(g.start+g.count,y.start+y.count));for(let P=b,H=I;P<H;P+=3){const L=P,z=P+1,w=P+2;a=bl(this,v,e,r,m,x,S,L,z,w),a&&(a.faceIndex=Math.floor(P/3),a.face.materialIndex=g.materialIndex,n.push(a))}}else{const T=Math.max(0,y.start),R=Math.min(p.count,y.start+y.count);for(let g=T,v=R;g<v;g+=3){const b=g,I=g+1,P=g+2;a=bl(this,u,e,r,m,x,S,b,I,P),a&&(a.faceIndex=Math.floor(g/3),n.push(a))}}}}function Rv(s,e,n,r,a,c,u,d){let p;if(e.side===Zn?p=r.intersectTriangle(u,c,a,!0,d):p=r.intersectTriangle(a,c,u,e.side===Hr,d),p===null)return null;Al.copy(d),Al.applyMatrix4(s.matrixWorld);const m=n.ray.origin.distanceTo(Al);return m<n.near||m>n.far?null:{distance:m,point:Al.clone(),object:s}}function bl(s,e,n,r,a,c,u,d,p,m){s.getVertexPosition(d,Ml),s.getVertexPosition(p,El),s.getVertexPosition(m,wl);const x=Rv(s,e,n,r,Ml,El,wl,bm);if(x){const S=new te;bi.getBarycoord(bm,Ml,El,wl,S),a&&(x.uv=bi.getInterpolatedAttribute(a,d,p,m,S,new It)),c&&(x.uv1=bi.getInterpolatedAttribute(c,d,p,m,S,new It)),u&&(x.normal=bi.getInterpolatedAttribute(u,d,p,m,S,new te),x.normal.dot(r.direction)>0&&x.normal.multiplyScalar(-1));const _={a:d,b:p,c:m,normal:new te,materialIndex:0};bi.getNormal(Ml,El,wl,_.normal),x.face=_,x.barycoord=S}return x}class Pv extends Un{constructor(e=null,n=1,r=1,a,c,u,d,p,m=An,x=An,S,_){super(null,u,d,p,m,x,a,c,S,_),this.isDataTexture=!0,this.image={data:e,width:n,height:r},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const of=new te,Lv=new te,Dv=new _t;class as{constructor(e=new te(1,0,0),n=0){this.isPlane=!0,this.normal=e,this.constant=n}set(e,n){return this.normal.copy(e),this.constant=n,this}setComponents(e,n,r,a){return this.normal.set(e,n,r),this.constant=a,this}setFromNormalAndCoplanarPoint(e,n){return this.normal.copy(e),this.constant=-n.dot(this.normal),this}setFromCoplanarPoints(e,n,r){const a=of.subVectors(r,n).cross(Lv.subVectors(e,n)).normalize();return this.setFromNormalAndCoplanarPoint(a,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,n){return n.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,n,r=!0){const a=e.delta(of),c=this.normal.dot(a);if(c===0)return this.distanceToPoint(e.start)===0?n.copy(e.start):null;const u=-(e.start.dot(this.normal)+this.constant)/c;return r===!0&&(u<0||u>1)?null:n.copy(e.start).addScaledVector(a,u)}intersectsLine(e){const n=this.distanceToPoint(e.start),r=this.distanceToPoint(e.end);return n<0&&r>0||r<0&&n>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,n){const r=n||Dv.getNormalMatrix(e),a=this.coplanarPoint(of).applyMatrix4(e),c=this.normal.applyMatrix3(r).normalize();return this.constant=-a.dot(c),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const os=new Md,Iv=new It(.5,.5),Cl=new te;class Ed{constructor(e=new as,n=new as,r=new as,a=new as,c=new as,u=new as){this.planes=[e,n,r,a,c,u]}set(e,n,r,a,c,u){const d=this.planes;return d[0].copy(e),d[1].copy(n),d[2].copy(r),d[3].copy(a),d[4].copy(c),d[5].copy(u),this}copy(e){const n=this.planes;for(let r=0;r<6;r++)n[r].copy(e.planes[r]);return this}setFromProjectionMatrix(e,n=zi,r=!1){const a=this.planes,c=e.elements,u=c[0],d=c[1],p=c[2],m=c[3],x=c[4],S=c[5],_=c[6],y=c[7],T=c[8],R=c[9],g=c[10],v=c[11],b=c[12],I=c[13],P=c[14],H=c[15];if(a[0].setComponents(m-u,y-x,v-T,H-b).normalize(),a[1].setComponents(m+u,y+x,v+T,H+b).normalize(),a[2].setComponents(m+d,y+S,v+R,H+I).normalize(),a[3].setComponents(m-d,y-S,v-R,H-I).normalize(),r)a[4].setComponents(p,_,g,P).normalize(),a[5].setComponents(m-p,y-_,v-g,H-P).normalize();else if(a[4].setComponents(m-p,y-_,v-g,H-P).normalize(),n===zi)a[5].setComponents(m+p,y+_,v+g,H+P).normalize();else if(n===ra)a[5].setComponents(p,_,g,P).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+n);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),os.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const n=e.geometry;n.boundingSphere===null&&n.computeBoundingSphere(),os.copy(n.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(os)}intersectsSprite(e){os.center.set(0,0,0);const n=Iv.distanceTo(e.center);return os.radius=.7071067811865476+n,os.applyMatrix4(e.matrixWorld),this.intersectsSphere(os)}intersectsSphere(e){const n=this.planes,r=e.center,a=-e.radius;for(let c=0;c<6;c++)if(n[c].distanceToPoint(r)<a)return!1;return!0}intersectsBox(e){const n=this.planes;for(let r=0;r<6;r++){const a=n[r];if(Cl.x=a.normal.x>0?e.max.x:e.min.x,Cl.y=a.normal.y>0?e.max.y:e.min.y,Cl.z=a.normal.z>0?e.max.z:e.min.z,a.distanceToPoint(Cl)<0)return!1}return!0}containsPoint(e){const n=this.planes;for(let r=0;r<6;r++)if(n[r].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class C0 extends Un{constructor(e=[],n=hs,r,a,c,u,d,p,m,x){super(e,n,r,a,c,u,d,p,m,x),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class Nv extends Un{constructor(e,n,r,a,c,u,d,p,m){super(e,n,r,a,c,u,d,p,m),this.isCanvasTexture=!0,this.needsUpdate=!0}}class ro extends Un{constructor(e,n,r=Wi,a,c,u,d=An,p=An,m,x=fr,S=1){if(x!==fr&&x!==fs)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const _={width:e,height:n,depth:S};super(_,a,c,u,d,p,x,r,m),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new xd(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const n=super.toJSON(e);return this.compareFunction!==null&&(n.compareFunction=this.compareFunction),n}}class Uv extends ro{constructor(e,n=Wi,r=hs,a,c,u=An,d=An,p,m=fr){const x={width:e,height:e,depth:1},S=[x,x,x,x,x,x];super(e,e,n,r,a,c,u,d,p,m),this.image=S,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}}class R0 extends Un{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}class ao extends oi{constructor(e=1,n=1,r=1,a=1,c=1,u=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:n,depth:r,widthSegments:a,heightSegments:c,depthSegments:u};const d=this;a=Math.floor(a),c=Math.floor(c),u=Math.floor(u);const p=[],m=[],x=[],S=[];let _=0,y=0;T("z","y","x",-1,-1,r,n,e,u,c,0),T("z","y","x",1,-1,r,n,-e,u,c,1),T("x","z","y",1,1,e,r,n,a,u,2),T("x","z","y",1,-1,e,r,-n,a,u,3),T("x","y","z",1,-1,e,n,r,a,c,4),T("x","y","z",-1,-1,e,n,-r,a,c,5),this.setIndex(p),this.setAttribute("position",new ln(m,3)),this.setAttribute("normal",new ln(x,3)),this.setAttribute("uv",new ln(S,2));function T(R,g,v,b,I,P,H,L,z,w,D){const j=P/z,k=H/w,q=P/2,de=H/2,ve=L/2,W=z+1,ne=w+1;let Z=0,J=0;const _e=new te;for(let xe=0;xe<ne;xe++){const O=xe*k-de;for(let ie=0;ie<W;ie++){const Be=ie*j-q;_e[R]=Be*b,_e[g]=O*I,_e[v]=ve,m.push(_e.x,_e.y,_e.z),_e[R]=0,_e[g]=0,_e[v]=L>0?1:-1,x.push(_e.x,_e.y,_e.z),S.push(ie/z),S.push(1-xe/w),Z+=1}}for(let xe=0;xe<w;xe++)for(let O=0;O<z;O++){const ie=_+O+W*xe,Be=_+O+W*(xe+1),Ge=_+(O+1)+W*(xe+1),ze=_+(O+1)+W*xe;p.push(ie,Be,ze),p.push(Be,Ge,ze),J+=6}d.addGroup(y,J,D),y+=J,_+=Z}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ao(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}class Xl extends oi{constructor(e=1,n=32,r=0,a=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:e,segments:n,thetaStart:r,thetaLength:a},n=Math.max(3,n);const c=[],u=[],d=[],p=[],m=new te,x=new It;u.push(0,0,0),d.push(0,0,1),p.push(.5,.5);for(let S=0,_=3;S<=n;S++,_+=3){const y=r+S/n*a;m.x=e*Math.cos(y),m.y=e*Math.sin(y),u.push(m.x,m.y,m.z),d.push(0,0,1),x.x=(u[_]/e+1)/2,x.y=(u[_+1]/e+1)/2,p.push(x.x,x.y)}for(let S=1;S<=n;S++)c.push(S,S+1,0);this.setIndex(c),this.setAttribute("position",new ln(u,3)),this.setAttribute("normal",new ln(d,3)),this.setAttribute("uv",new ln(p,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Xl(e.radius,e.segments,e.thetaStart,e.thetaLength)}}class la extends oi{constructor(e=1,n=1,r=1,a=32,c=1,u=!1,d=0,p=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:n,height:r,radialSegments:a,heightSegments:c,openEnded:u,thetaStart:d,thetaLength:p};const m=this;a=Math.floor(a),c=Math.floor(c);const x=[],S=[],_=[],y=[];let T=0;const R=[],g=r/2;let v=0;b(),u===!1&&(e>0&&I(!0),n>0&&I(!1)),this.setIndex(x),this.setAttribute("position",new ln(S,3)),this.setAttribute("normal",new ln(_,3)),this.setAttribute("uv",new ln(y,2));function b(){const P=new te,H=new te;let L=0;const z=(n-e)/r;for(let w=0;w<=c;w++){const D=[],j=w/c,k=j*(n-e)+e;for(let q=0;q<=a;q++){const de=q/a,ve=de*p+d,W=Math.sin(ve),ne=Math.cos(ve);H.x=k*W,H.y=-j*r+g,H.z=k*ne,S.push(H.x,H.y,H.z),P.set(W,z,ne).normalize(),_.push(P.x,P.y,P.z),y.push(de,1-j),D.push(T++)}R.push(D)}for(let w=0;w<a;w++)for(let D=0;D<c;D++){const j=R[D][w],k=R[D+1][w],q=R[D+1][w+1],de=R[D][w+1];(e>0||D!==0)&&(x.push(j,k,de),L+=3),(n>0||D!==c-1)&&(x.push(k,q,de),L+=3)}m.addGroup(v,L,0),v+=L}function I(P){const H=T,L=new It,z=new te;let w=0;const D=P===!0?e:n,j=P===!0?1:-1;for(let q=1;q<=a;q++)S.push(0,g*j,0),_.push(0,j,0),y.push(.5,.5),T++;const k=T;for(let q=0;q<=a;q++){const ve=q/a*p+d,W=Math.cos(ve),ne=Math.sin(ve);z.x=D*ne,z.y=g*j,z.z=D*W,S.push(z.x,z.y,z.z),_.push(0,j,0),L.x=W*.5+.5,L.y=ne*.5*j+.5,y.push(L.x,L.y),T++}for(let q=0;q<a;q++){const de=H+q,ve=k+q;P===!0?x.push(ve,ve+1,de):x.push(ve+1,ve,de),w+=3}m.addGroup(v,w,P===!0?1:2),v+=w}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new la(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class jl extends la{constructor(e=1,n=1,r=32,a=1,c=!1,u=0,d=Math.PI*2){super(0,e,n,r,a,c,u,d),this.type="ConeGeometry",this.parameters={radius:e,height:n,radialSegments:r,heightSegments:a,openEnded:c,thetaStart:u,thetaLength:d}}static fromJSON(e){return new jl(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class hn extends oi{constructor(e=1,n=1,r=1,a=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:n,widthSegments:r,heightSegments:a};const c=e/2,u=n/2,d=Math.floor(r),p=Math.floor(a),m=d+1,x=p+1,S=e/d,_=n/p,y=[],T=[],R=[],g=[];for(let v=0;v<x;v++){const b=v*_-u;for(let I=0;I<m;I++){const P=I*S-c;T.push(P,-b,0),R.push(0,0,1),g.push(I/d),g.push(1-v/p)}}for(let v=0;v<p;v++)for(let b=0;b<d;b++){const I=b+m*v,P=b+m*(v+1),H=b+1+m*(v+1),L=b+1+m*v;y.push(I,P,L),y.push(P,H,L)}this.setIndex(y),this.setAttribute("position",new ln(T,3)),this.setAttribute("normal",new ln(R,3)),this.setAttribute("uv",new ln(g,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new hn(e.width,e.height,e.widthSegments,e.heightSegments)}}class wd extends oi{constructor(e=1,n=32,r=16,a=0,c=Math.PI*2,u=0,d=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:n,heightSegments:r,phiStart:a,phiLength:c,thetaStart:u,thetaLength:d},n=Math.max(3,Math.floor(n)),r=Math.max(2,Math.floor(r));const p=Math.min(u+d,Math.PI);let m=0;const x=[],S=new te,_=new te,y=[],T=[],R=[],g=[];for(let v=0;v<=r;v++){const b=[],I=v/r;let P=0;v===0&&u===0?P=.5/n:v===r&&p===Math.PI&&(P=-.5/n);for(let H=0;H<=n;H++){const L=H/n;S.x=-e*Math.cos(a+L*c)*Math.sin(u+I*d),S.y=e*Math.cos(u+I*d),S.z=e*Math.sin(a+L*c)*Math.sin(u+I*d),T.push(S.x,S.y,S.z),_.copy(S).normalize(),R.push(_.x,_.y,_.z),g.push(L+P,1-I),b.push(m++)}x.push(b)}for(let v=0;v<r;v++)for(let b=0;b<n;b++){const I=x[v][b+1],P=x[v][b],H=x[v+1][b],L=x[v+1][b+1];(v!==0||u>0)&&y.push(I,P,L),(v!==r-1||p<Math.PI)&&y.push(P,H,L)}this.setIndex(y),this.setAttribute("position",new ln(T,3)),this.setAttribute("normal",new ln(R,3)),this.setAttribute("uv",new ln(g,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new wd(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class Td extends oi{constructor(e=1,n=.4,r=12,a=48,c=Math.PI*2,u=0,d=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:n,radialSegments:r,tubularSegments:a,arc:c,thetaStart:u,thetaLength:d},r=Math.floor(r),a=Math.floor(a);const p=[],m=[],x=[],S=[],_=new te,y=new te,T=new te;for(let R=0;R<=r;R++){const g=u+R/r*d;for(let v=0;v<=a;v++){const b=v/a*c;y.x=(e+n*Math.cos(g))*Math.cos(b),y.y=(e+n*Math.cos(g))*Math.sin(b),y.z=n*Math.sin(g),m.push(y.x,y.y,y.z),_.x=e*Math.cos(b),_.y=e*Math.sin(b),T.subVectors(y,_).normalize(),x.push(T.x,T.y,T.z),S.push(v/a),S.push(R/r)}}for(let R=1;R<=r;R++)for(let g=1;g<=a;g++){const v=(a+1)*R+g-1,b=(a+1)*(R-1)+g-1,I=(a+1)*(R-1)+g,P=(a+1)*R+g;p.push(v,b,P),p.push(b,I,P)}this.setIndex(p),this.setAttribute("position",new ln(m,3)),this.setAttribute("normal",new ln(x,3)),this.setAttribute("uv",new ln(S,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Td(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc)}}function so(s){const e={};for(const n in s){e[n]={};for(const r in s[n]){const a=s[n][r];if(Cm(a))a.isRenderTargetTexture?(ht("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[n][r]=null):e[n][r]=a.clone();else if(Array.isArray(a))if(Cm(a[0])){const c=[];for(let u=0,d=a.length;u<d;u++)c[u]=a[u].clone();e[n][r]=c}else e[n][r]=a.slice();else e[n][r]=a}}return e}function zn(s){const e={};for(let n=0;n<s.length;n++){const r=so(s[n]);for(const a in r)e[a]=r[a]}return e}function Cm(s){return s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)}function Fv(s){const e=[];for(let n=0;n<s.length;n++)e.push(s[n].clone());return e}function P0(s){const e=s.getRenderTarget();return e===null?s.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:Dt.workingColorSpace}const Ov={clone:so,merge:zn};var kv=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Bv=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Xi extends aa{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=kv,this.fragmentShader=Bv,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=so(e.uniforms),this.uniformsGroups=Fv(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){const n=super.toJSON(e);n.glslVersion=this.glslVersion,n.uniforms={};for(const a in this.uniforms){const u=this.uniforms[a].value;u&&u.isTexture?n.uniforms[a]={type:"t",value:u.toJSON(e).uuid}:u&&u.isColor?n.uniforms[a]={type:"c",value:u.getHex()}:u&&u.isVector2?n.uniforms[a]={type:"v2",value:u.toArray()}:u&&u.isVector3?n.uniforms[a]={type:"v3",value:u.toArray()}:u&&u.isVector4?n.uniforms[a]={type:"v4",value:u.toArray()}:u&&u.isMatrix3?n.uniforms[a]={type:"m3",value:u.toArray()}:u&&u.isMatrix4?n.uniforms[a]={type:"m4",value:u.toArray()}:n.uniforms[a]={value:u}}Object.keys(this.defines).length>0&&(n.defines=this.defines),n.vertexShader=this.vertexShader,n.fragmentShader=this.fragmentShader,n.lights=this.lights,n.clipping=this.clipping;const r={};for(const a in this.extensions)this.extensions[a]===!0&&(r[a]=!0);return Object.keys(r).length>0&&(n.extensions=r),n}}class zv extends Xi{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class kr extends aa{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new Mt(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Mt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=nd,this.normalScale=new It(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Vr,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class Hv extends kr{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new It(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return Rt(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(n){this.ior=(1+.4*n)/(1-.4*n)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new Mt(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new Mt(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new Mt(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get dispersion(){return this._dispersion}set dispersion(e){this._dispersion>0!=e>0&&this.version++,this._dispersion=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.dispersion=e.dispersion,this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}}class Vv extends aa{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=J_,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class Gv extends aa{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}class Ad extends Fn{constructor(e,n=1){super(),this.isLight=!0,this.type="Light",this.color=new Mt(e),this.intensity=n}dispose(){this.dispatchEvent({type:"dispose"})}copy(e,n){return super.copy(e,n),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const n=super.toJSON(e);return n.object.color=this.color.getHex(),n.object.intensity=this.intensity,n}}const af=new on,Rm=new te,Pm=new te;class L0{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new It(512,512),this.mapType=si,this.map=null,this.mapPass=null,this.matrix=new on,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Ed,this._frameExtents=new It(1,1),this._viewportCount=1,this._viewports=[new sn(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const n=this.camera,r=this.matrix;Rm.setFromMatrixPosition(e.matrixWorld),n.position.copy(Rm),Pm.setFromMatrixPosition(e.target.matrixWorld),n.lookAt(Pm),n.updateMatrixWorld(),af.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(af,n.coordinateSystem,n.reversedDepth),n.coordinateSystem===ra||n.reversedDepth?r.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):r.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),r.multiply(af)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this.biasNode=e.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}const Rl=new te,Pl=new oo,Fi=new te;class D0 extends Fn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new on,this.projectionMatrix=new on,this.projectionMatrixInverse=new on,this.coordinateSystem=zi,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,n){return super.copy(e,n),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(Rl,Pl,Fi),Fi.x===1&&Fi.y===1&&Fi.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Rl,Pl,Fi.set(1,1,1)).invert()}updateWorldMatrix(e,n){super.updateWorldMatrix(e,n),this.matrixWorld.decompose(Rl,Pl,Fi),Fi.x===1&&Fi.y===1&&Fi.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Rl,Pl,Fi.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}}const Or=new te,Lm=new It,Dm=new It;class ri extends D0{constructor(e=50,n=1,r=.1,a=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=r,this.far=a,this.focus=10,this.aspect=n,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const n=.5*this.getFilmHeight()/e;this.fov=rd*2*Math.atan(n),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Fu*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return rd*2*Math.atan(Math.tan(Fu*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,n,r){Or.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Or.x,Or.y).multiplyScalar(-e/Or.z),Or.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),r.set(Or.x,Or.y).multiplyScalar(-e/Or.z)}getViewSize(e,n){return this.getViewBounds(e,Lm,Dm),n.subVectors(Dm,Lm)}setViewOffset(e,n,r,a,c,u){this.aspect=e/n,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=r,this.view.offsetY=a,this.view.width=c,this.view.height=u,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let n=e*Math.tan(Fu*.5*this.fov)/this.zoom,r=2*n,a=this.aspect*r,c=-.5*a;const u=this.view;if(this.view!==null&&this.view.enabled){const p=u.fullWidth,m=u.fullHeight;c+=u.offsetX*a/p,n-=u.offsetY*r/m,a*=u.width/p,r*=u.height/m}const d=this.filmOffset;d!==0&&(c+=e*d/this.getFilmWidth()),this.projectionMatrix.makePerspective(c,c+a,n,n-r,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.fov=this.fov,n.object.zoom=this.zoom,n.object.near=this.near,n.object.far=this.far,n.object.focus=this.focus,n.object.aspect=this.aspect,this.view!==null&&(n.object.view=Object.assign({},this.view)),n.object.filmGauge=this.filmGauge,n.object.filmOffset=this.filmOffset,n}}class Wv extends L0{constructor(){super(new ri(90,1,.5,500)),this.isPointLightShadow=!0}}class Ll extends Ad{constructor(e,n,r=0,a=2){super(e,n),this.isPointLight=!0,this.type="PointLight",this.distance=r,this.decay=a,this.shadow=new Wv}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){super.dispose(),this.shadow.dispose()}copy(e,n){return super.copy(e,n),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}toJSON(e){const n=super.toJSON(e);return n.object.distance=this.distance,n.object.decay=this.decay,n.object.shadow=this.shadow.toJSON(),n}}class bd extends D0{constructor(e=-1,n=1,r=1,a=-1,c=.1,u=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=n,this.top=r,this.bottom=a,this.near=c,this.far=u,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,n,r,a,c,u){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=r,this.view.offsetY=a,this.view.width=c,this.view.height=u,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),n=(this.top-this.bottom)/(2*this.zoom),r=(this.right+this.left)/2,a=(this.top+this.bottom)/2;let c=r-e,u=r+e,d=a+n,p=a-n;if(this.view!==null&&this.view.enabled){const m=(this.right-this.left)/this.view.fullWidth/this.zoom,x=(this.top-this.bottom)/this.view.fullHeight/this.zoom;c+=m*this.view.offsetX,u=c+m*this.view.width,d-=x*this.view.offsetY,p=d-x*this.view.height}this.projectionMatrix.makeOrthographic(c,u,d,p,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.zoom=this.zoom,n.object.left=this.left,n.object.right=this.right,n.object.top=this.top,n.object.bottom=this.bottom,n.object.near=this.near,n.object.far=this.far,this.view!==null&&(n.object.view=Object.assign({},this.view)),n}}class Xv extends L0{constructor(){super(new bd(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class Im extends Ad{constructor(e,n){super(e,n),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Fn.DEFAULT_UP),this.updateMatrix(),this.target=new Fn,this.shadow=new Xv}dispose(){super.dispose(),this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}toJSON(e){const n=super.toJSON(e);return n.object.shadow=this.shadow.toJSON(),n.object.target=this.target.uuid,n}}class jv extends Ad{constructor(e,n){super(e,n),this.isAmbientLight=!0,this.type="AmbientLight"}}const $s=-90,Zs=1;class Yv extends Fn{constructor(e,n,r){super(),this.type="CubeCamera",this.renderTarget=r,this.coordinateSystem=null,this.activeMipmapLevel=0;const a=new ri($s,Zs,e,n);a.layers=this.layers,this.add(a);const c=new ri($s,Zs,e,n);c.layers=this.layers,this.add(c);const u=new ri($s,Zs,e,n);u.layers=this.layers,this.add(u);const d=new ri($s,Zs,e,n);d.layers=this.layers,this.add(d);const p=new ri($s,Zs,e,n);p.layers=this.layers,this.add(p);const m=new ri($s,Zs,e,n);m.layers=this.layers,this.add(m)}updateCoordinateSystem(){const e=this.coordinateSystem,n=this.children.concat(),[r,a,c,u,d,p]=n;for(const m of n)this.remove(m);if(e===zi)r.up.set(0,1,0),r.lookAt(1,0,0),a.up.set(0,1,0),a.lookAt(-1,0,0),c.up.set(0,0,-1),c.lookAt(0,1,0),u.up.set(0,0,1),u.lookAt(0,-1,0),d.up.set(0,1,0),d.lookAt(0,0,1),p.up.set(0,1,0),p.lookAt(0,0,-1);else if(e===ra)r.up.set(0,-1,0),r.lookAt(-1,0,0),a.up.set(0,-1,0),a.lookAt(1,0,0),c.up.set(0,0,1),c.lookAt(0,1,0),u.up.set(0,0,-1),u.lookAt(0,-1,0),d.up.set(0,-1,0),d.lookAt(0,0,1),p.up.set(0,-1,0),p.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const m of n)this.add(m),m.updateMatrixWorld()}update(e,n){this.parent===null&&this.updateMatrixWorld();const{renderTarget:r,activeMipmapLevel:a}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[c,u,d,p,m,x]=this.children,S=e.getRenderTarget(),_=e.getActiveCubeFace(),y=e.getActiveMipmapLevel(),T=e.xr.enabled;e.xr.enabled=!1;const R=r.texture.generateMipmaps;r.texture.generateMipmaps=!1;let g=!1;e.isWebGLRenderer===!0?g=e.state.buffers.depth.getReversed():g=e.reversedDepthBuffer,e.setRenderTarget(r,0,a),g&&e.autoClear===!1&&e.clearDepth(),e.render(n,c),e.setRenderTarget(r,1,a),g&&e.autoClear===!1&&e.clearDepth(),e.render(n,u),e.setRenderTarget(r,2,a),g&&e.autoClear===!1&&e.clearDepth(),e.render(n,d),e.setRenderTarget(r,3,a),g&&e.autoClear===!1&&e.clearDepth(),e.render(n,p),e.setRenderTarget(r,4,a),g&&e.autoClear===!1&&e.clearDepth(),e.render(n,m),r.texture.generateMipmaps=R,e.setRenderTarget(r,5,a),g&&e.autoClear===!1&&e.clearDepth(),e.render(n,x),e.setRenderTarget(S,_,y),e.xr.enabled=T,r.texture.needsPMREMUpdate=!0}}class qv extends ri{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}const Nm=new on;class Kv{constructor(e,n,r=0,a=1/0){this.ray=new b0(e,n),this.near=r,this.far=a,this.camera=null,this.layers=new Sd,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,n){this.ray.set(e,n)}setFromCamera(e,n){n.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(n.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(n).sub(this.ray.origin).normalize(),this.camera=n):n.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(n.near+n.far)/(n.near-n.far)).unproject(n),this.ray.direction.set(0,0,-1).transformDirection(n.matrixWorld),this.camera=n):Ut("Raycaster: Unsupported camera type: "+n.type)}setFromXRController(e){return Nm.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(Nm),this}intersectObject(e,n=!0,r=[]){return sd(e,this,r,n),r.sort(Um),r}intersectObjects(e,n=!0,r=[]){for(let a=0,c=e.length;a<c;a++)sd(e[a],this,r,n);return r.sort(Um),r}}function Um(s,e){return s.distance-e.distance}function sd(s,e,n,r){let a=!0;if(s.layers.test(e.layers)&&s.raycast(e,n)===!1&&(a=!1),a===!0&&r===!0){const c=s.children;for(let u=0,d=c.length;u<d;u++)sd(c[u],e,n,!0)}}const Dd=class Dd{constructor(e,n,r,a){this.elements=[1,0,0,1],e!==void 0&&this.set(e,n,r,a)}identity(){return this.set(1,0,0,1),this}fromArray(e,n=0){for(let r=0;r<4;r++)this.elements[r]=e[r+n];return this}set(e,n,r,a){const c=this.elements;return c[0]=e,c[2]=n,c[1]=r,c[3]=a,this}};Dd.prototype.isMatrix2=!0;let Fm=Dd;function Om(s,e,n,r){const a=$v(r);switch(n){case x0:return s*e;case y0:return s*e/a.components*a.byteLength;case pd:return s*e/a.components*a.byteLength;case ps:return s*e*2/a.components*a.byteLength;case md:return s*e*2/a.components*a.byteLength;case S0:return s*e*3/a.components*a.byteLength;case Ci:return s*e*4/a.components*a.byteLength;case gd:return s*e*4/a.components*a.byteLength;case Nl:case Ul:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*8;case Fl:case Ol:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case bf:case Rf:return Math.max(s,16)*Math.max(e,8)/4;case Af:case Cf:return Math.max(s,8)*Math.max(e,8)/2;case Pf:case Lf:case If:case Nf:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*8;case Df:case Bl:case Uf:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case Ff:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case Of:return Math.floor((s+4)/5)*Math.floor((e+3)/4)*16;case kf:return Math.floor((s+4)/5)*Math.floor((e+4)/5)*16;case Bf:return Math.floor((s+5)/6)*Math.floor((e+4)/5)*16;case zf:return Math.floor((s+5)/6)*Math.floor((e+5)/6)*16;case Hf:return Math.floor((s+7)/8)*Math.floor((e+4)/5)*16;case Vf:return Math.floor((s+7)/8)*Math.floor((e+5)/6)*16;case Gf:return Math.floor((s+7)/8)*Math.floor((e+7)/8)*16;case Wf:return Math.floor((s+9)/10)*Math.floor((e+4)/5)*16;case Xf:return Math.floor((s+9)/10)*Math.floor((e+5)/6)*16;case jf:return Math.floor((s+9)/10)*Math.floor((e+7)/8)*16;case Yf:return Math.floor((s+9)/10)*Math.floor((e+9)/10)*16;case qf:return Math.floor((s+11)/12)*Math.floor((e+9)/10)*16;case Kf:return Math.floor((s+11)/12)*Math.floor((e+11)/12)*16;case $f:case Zf:case Jf:return Math.ceil(s/4)*Math.ceil(e/4)*16;case Qf:case ed:return Math.ceil(s/4)*Math.ceil(e/4)*8;case zl:case td:return Math.ceil(s/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${n} format.`)}function $v(s){switch(s){case si:case m0:return{byteLength:1,components:1};case na:case g0:case ur:return{byteLength:2,components:1};case dd:case hd:return{byteLength:2,components:4};case Wi:case fd:case Bi:return{byteLength:4,components:1};case _0:case v0:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${s}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:cd}}));typeof window<"u"&&(window.__THREE__?ht("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=cd);/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function I0(){let s=null,e=!1,n=null,r=null;function a(c,u){n(c,u),r=s.requestAnimationFrame(a)}return{start:function(){e!==!0&&n!==null&&s!==null&&(r=s.requestAnimationFrame(a),e=!0)},stop:function(){s!==null&&s.cancelAnimationFrame(r),e=!1},setAnimationLoop:function(c){n=c},setContext:function(c){s=c}}}function Zv(s){const e=new WeakMap;function n(d,p){const m=d.array,x=d.usage,S=m.byteLength,_=s.createBuffer();s.bindBuffer(p,_),s.bufferData(p,m,x),d.onUploadCallback();let y;if(m instanceof Float32Array)y=s.FLOAT;else if(typeof Float16Array<"u"&&m instanceof Float16Array)y=s.HALF_FLOAT;else if(m instanceof Uint16Array)d.isFloat16BufferAttribute?y=s.HALF_FLOAT:y=s.UNSIGNED_SHORT;else if(m instanceof Int16Array)y=s.SHORT;else if(m instanceof Uint32Array)y=s.UNSIGNED_INT;else if(m instanceof Int32Array)y=s.INT;else if(m instanceof Int8Array)y=s.BYTE;else if(m instanceof Uint8Array)y=s.UNSIGNED_BYTE;else if(m instanceof Uint8ClampedArray)y=s.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+m);return{buffer:_,type:y,bytesPerElement:m.BYTES_PER_ELEMENT,version:d.version,size:S}}function r(d,p,m){const x=p.array,S=p.updateRanges;if(s.bindBuffer(m,d),S.length===0)s.bufferSubData(m,0,x);else{S.sort((y,T)=>y.start-T.start);let _=0;for(let y=1;y<S.length;y++){const T=S[_],R=S[y];R.start<=T.start+T.count+1?T.count=Math.max(T.count,R.start+R.count-T.start):(++_,S[_]=R)}S.length=_+1;for(let y=0,T=S.length;y<T;y++){const R=S[y];s.bufferSubData(m,R.start*x.BYTES_PER_ELEMENT,x,R.start,R.count)}p.clearUpdateRanges()}p.onUploadCallback()}function a(d){return d.isInterleavedBufferAttribute&&(d=d.data),e.get(d)}function c(d){d.isInterleavedBufferAttribute&&(d=d.data);const p=e.get(d);p&&(s.deleteBuffer(p.buffer),e.delete(d))}function u(d,p){if(d.isInterleavedBufferAttribute&&(d=d.data),d.isGLBufferAttribute){const x=e.get(d);(!x||x.version<d.version)&&e.set(d,{buffer:d.buffer,type:d.type,bytesPerElement:d.elementSize,version:d.version});return}const m=e.get(d);if(m===void 0)e.set(d,n(d,p));else if(m.version<d.version){if(m.size!==d.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");r(m.buffer,d,p),m.version=d.version}}return{get:a,remove:c,update:u}}var Jv=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Qv=`#ifdef USE_ALPHAHASH
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
#endif`,ex=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,tx=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,nx=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,ix=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,rx=`#ifdef USE_AOMAP
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
#endif`,sx=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,ox=`#ifdef USE_BATCHING
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
#endif`,ax=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,lx=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,cx=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,ux=`float G_BlinnPhong_Implicit( ) {
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
#endif`,dx=`#ifdef USE_BUMPMAP
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
#endif`,hx=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,px=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,mx=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,gx=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,_x=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,vx=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,xx=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
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
#endif`,yx=`#define PI 3.141592653589793
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
} // validated`,Mx=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,Ex=`vec3 transformedNormal = objectNormal;
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
#endif`,wx=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Tx=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Ax=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,bx=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Cx="gl_FragColor = linearToOutputTexel( gl_FragColor );",Rx=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Px=`#ifdef USE_ENVMAP
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
#endif`,Lx=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,Dx=`#ifdef USE_ENVMAP
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
#endif`,Ix=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Nx=`#ifdef USE_ENVMAP
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
#endif`,Ux=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Fx=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Ox=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,kx=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Bx=`#ifdef USE_GRADIENTMAP
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
}`,zx=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Hx=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Vx=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Gx=`uniform bool receiveShadow;
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
#include <lightprobes_pars_fragment>`,Wx=`#ifdef USE_ENVMAP
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
#endif`,Xx=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,jx=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Yx=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,qx=`varying vec3 vViewPosition;
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
#endif`,$x=`uniform sampler2D dfgLUT;
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
}`,Zx=`
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
#endif`,Jx=`#if defined( RE_IndirectDiffuse )
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
#endif`,Qx=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,eS=`#ifdef USE_LIGHT_PROBES_GRID
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
#endif`,tS=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,nS=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,iS=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,rS=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,sS=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,oS=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,aS=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,lS=`#if defined( USE_POINTS_UV )
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
#endif`,cS=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,uS=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,fS=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,dS=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,hS=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,pS=`#ifdef USE_MORPHTARGETS
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
#endif`,mS=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,gS=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,_S=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,vS=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,xS=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,SS=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,yS=`#ifdef USE_NORMALMAP
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
#endif`,MS=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,ES=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,wS=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,TS=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,AS=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,bS=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,CS=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,RS=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,PS=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,LS=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,DS=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,IS=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,NS=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,US=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,FS=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,OS=`float getShadowMask() {
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
}`,kS=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,BS=`#ifdef USE_SKINNING
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
#endif`,zS=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,HS=`#ifdef USE_SKINNING
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
#endif`,VS=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,GS=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,WS=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,XS=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,jS=`#ifdef USE_TRANSMISSION
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
#endif`,YS=`#ifdef USE_TRANSMISSION
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
#endif`,qS=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,$S=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,ZS=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const JS=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,QS=`uniform sampler2D t2D;
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
}`,ey=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,ty=`#ifdef ENVMAP_TYPE_CUBE
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
}`,ny=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,iy=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,ry=`#include <common>
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
}`,sy=`#if DEPTH_PACKING == 3200
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
}`,oy=`#define DISTANCE
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
}`,ay=`#define DISTANCE
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
}`,ly=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,cy=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,uy=`uniform float scale;
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
}`,dy=`#include <common>
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
}`,hy=`uniform vec3 diffuse;
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
}`,py=`#define LAMBERT
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
}`,my=`#define LAMBERT
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
}`,gy=`#define MATCAP
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
}`,_y=`#define MATCAP
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
}`,vy=`#define NORMAL
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
}`,xy=`#define NORMAL
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
}`,Sy=`#define PHONG
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
}`,yy=`#define PHONG
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
}`,My=`#define STANDARD
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
}`,Ey=`#define STANDARD
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
}`,wy=`#define TOON
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
}`,Ty=`#define TOON
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
}`,Ay=`uniform float size;
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
}`,by=`uniform vec3 diffuse;
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
}`,Cy=`#include <common>
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
}`,Ry=`uniform vec3 color;
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
}`,Py=`uniform float rotation;
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
}`,Ly=`uniform vec3 diffuse;
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
}`,yt={alphahash_fragment:Jv,alphahash_pars_fragment:Qv,alphamap_fragment:ex,alphamap_pars_fragment:tx,alphatest_fragment:nx,alphatest_pars_fragment:ix,aomap_fragment:rx,aomap_pars_fragment:sx,batching_pars_vertex:ox,batching_vertex:ax,begin_vertex:lx,beginnormal_vertex:cx,bsdfs:ux,iridescence_fragment:fx,bumpmap_pars_fragment:dx,clipping_planes_fragment:hx,clipping_planes_pars_fragment:px,clipping_planes_pars_vertex:mx,clipping_planes_vertex:gx,color_fragment:_x,color_pars_fragment:vx,color_pars_vertex:xx,color_vertex:Sx,common:yx,cube_uv_reflection_fragment:Mx,defaultnormal_vertex:Ex,displacementmap_pars_vertex:wx,displacementmap_vertex:Tx,emissivemap_fragment:Ax,emissivemap_pars_fragment:bx,colorspace_fragment:Cx,colorspace_pars_fragment:Rx,envmap_fragment:Px,envmap_common_pars_fragment:Lx,envmap_pars_fragment:Dx,envmap_pars_vertex:Ix,envmap_physical_pars_fragment:Wx,envmap_vertex:Nx,fog_vertex:Ux,fog_pars_vertex:Fx,fog_fragment:Ox,fog_pars_fragment:kx,gradientmap_pars_fragment:Bx,lightmap_pars_fragment:zx,lights_lambert_fragment:Hx,lights_lambert_pars_fragment:Vx,lights_pars_begin:Gx,lights_toon_fragment:Xx,lights_toon_pars_fragment:jx,lights_phong_fragment:Yx,lights_phong_pars_fragment:qx,lights_physical_fragment:Kx,lights_physical_pars_fragment:$x,lights_fragment_begin:Zx,lights_fragment_maps:Jx,lights_fragment_end:Qx,lightprobes_pars_fragment:eS,logdepthbuf_fragment:tS,logdepthbuf_pars_fragment:nS,logdepthbuf_pars_vertex:iS,logdepthbuf_vertex:rS,map_fragment:sS,map_pars_fragment:oS,map_particle_fragment:aS,map_particle_pars_fragment:lS,metalnessmap_fragment:cS,metalnessmap_pars_fragment:uS,morphinstance_vertex:fS,morphcolor_vertex:dS,morphnormal_vertex:hS,morphtarget_pars_vertex:pS,morphtarget_vertex:mS,normal_fragment_begin:gS,normal_fragment_maps:_S,normal_pars_fragment:vS,normal_pars_vertex:xS,normal_vertex:SS,normalmap_pars_fragment:yS,clearcoat_normal_fragment_begin:MS,clearcoat_normal_fragment_maps:ES,clearcoat_pars_fragment:wS,iridescence_pars_fragment:TS,opaque_fragment:AS,packing:bS,premultiplied_alpha_fragment:CS,project_vertex:RS,dithering_fragment:PS,dithering_pars_fragment:LS,roughnessmap_fragment:DS,roughnessmap_pars_fragment:IS,shadowmap_pars_fragment:NS,shadowmap_pars_vertex:US,shadowmap_vertex:FS,shadowmask_pars_fragment:OS,skinbase_vertex:kS,skinning_pars_vertex:BS,skinning_vertex:zS,skinnormal_vertex:HS,specularmap_fragment:VS,specularmap_pars_fragment:GS,tonemapping_fragment:WS,tonemapping_pars_fragment:XS,transmission_fragment:jS,transmission_pars_fragment:YS,uv_pars_fragment:qS,uv_pars_vertex:KS,uv_vertex:$S,worldpos_vertex:ZS,background_vert:JS,background_frag:QS,backgroundCube_vert:ey,backgroundCube_frag:ty,cube_vert:ny,cube_frag:iy,depth_vert:ry,depth_frag:sy,distance_vert:oy,distance_frag:ay,equirect_vert:ly,equirect_frag:cy,linedashed_vert:uy,linedashed_frag:fy,meshbasic_vert:dy,meshbasic_frag:hy,meshlambert_vert:py,meshlambert_frag:my,meshmatcap_vert:gy,meshmatcap_frag:_y,meshnormal_vert:vy,meshnormal_frag:xy,meshphong_vert:Sy,meshphong_frag:yy,meshphysical_vert:My,meshphysical_frag:Ey,meshtoon_vert:wy,meshtoon_frag:Ty,points_vert:Ay,points_frag:by,shadow_vert:Cy,shadow_frag:Ry,sprite_vert:Py,sprite_frag:Ly},We={common:{diffuse:{value:new Mt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new _t},alphaMap:{value:null},alphaMapTransform:{value:new _t},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new _t}},envmap:{envMap:{value:null},envMapRotation:{value:new _t},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new _t}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new _t}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new _t},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new _t},normalScale:{value:new It(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new _t},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new _t}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new _t}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new _t}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Mt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new te},probesMax:{value:new te},probesResolution:{value:new te}},points:{diffuse:{value:new Mt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new _t},alphaTest:{value:0},uvTransform:{value:new _t}},sprite:{diffuse:{value:new Mt(16777215)},opacity:{value:1},center:{value:new It(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new _t},alphaMap:{value:null},alphaMapTransform:{value:new _t},alphaTest:{value:0}}},ki={basic:{uniforms:zn([We.common,We.specularmap,We.envmap,We.aomap,We.lightmap,We.fog]),vertexShader:yt.meshbasic_vert,fragmentShader:yt.meshbasic_frag},lambert:{uniforms:zn([We.common,We.specularmap,We.envmap,We.aomap,We.lightmap,We.emissivemap,We.bumpmap,We.normalmap,We.displacementmap,We.fog,We.lights,{emissive:{value:new Mt(0)},envMapIntensity:{value:1}}]),vertexShader:yt.meshlambert_vert,fragmentShader:yt.meshlambert_frag},phong:{uniforms:zn([We.common,We.specularmap,We.envmap,We.aomap,We.lightmap,We.emissivemap,We.bumpmap,We.normalmap,We.displacementmap,We.fog,We.lights,{emissive:{value:new Mt(0)},specular:{value:new Mt(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:yt.meshphong_vert,fragmentShader:yt.meshphong_frag},standard:{uniforms:zn([We.common,We.envmap,We.aomap,We.lightmap,We.emissivemap,We.bumpmap,We.normalmap,We.displacementmap,We.roughnessmap,We.metalnessmap,We.fog,We.lights,{emissive:{value:new Mt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:yt.meshphysical_vert,fragmentShader:yt.meshphysical_frag},toon:{uniforms:zn([We.common,We.aomap,We.lightmap,We.emissivemap,We.bumpmap,We.normalmap,We.displacementmap,We.gradientmap,We.fog,We.lights,{emissive:{value:new Mt(0)}}]),vertexShader:yt.meshtoon_vert,fragmentShader:yt.meshtoon_frag},matcap:{uniforms:zn([We.common,We.bumpmap,We.normalmap,We.displacementmap,We.fog,{matcap:{value:null}}]),vertexShader:yt.meshmatcap_vert,fragmentShader:yt.meshmatcap_frag},points:{uniforms:zn([We.points,We.fog]),vertexShader:yt.points_vert,fragmentShader:yt.points_frag},dashed:{uniforms:zn([We.common,We.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:yt.linedashed_vert,fragmentShader:yt.linedashed_frag},depth:{uniforms:zn([We.common,We.displacementmap]),vertexShader:yt.depth_vert,fragmentShader:yt.depth_frag},normal:{uniforms:zn([We.common,We.bumpmap,We.normalmap,We.displacementmap,{opacity:{value:1}}]),vertexShader:yt.meshnormal_vert,fragmentShader:yt.meshnormal_frag},sprite:{uniforms:zn([We.sprite,We.fog]),vertexShader:yt.sprite_vert,fragmentShader:yt.sprite_frag},background:{uniforms:{uvTransform:{value:new _t},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:yt.background_vert,fragmentShader:yt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new _t}},vertexShader:yt.backgroundCube_vert,fragmentShader:yt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:yt.cube_vert,fragmentShader:yt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:yt.equirect_vert,fragmentShader:yt.equirect_frag},distance:{uniforms:zn([We.common,We.displacementmap,{referencePosition:{value:new te},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:yt.distance_vert,fragmentShader:yt.distance_frag},shadow:{uniforms:zn([We.lights,We.fog,{color:{value:new Mt(0)},opacity:{value:1}}]),vertexShader:yt.shadow_vert,fragmentShader:yt.shadow_frag}};ki.physical={uniforms:zn([ki.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new _t},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new _t},clearcoatNormalScale:{value:new It(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new _t},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new _t},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new _t},sheen:{value:0},sheenColor:{value:new Mt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new _t},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new _t},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new _t},transmissionSamplerSize:{value:new It},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new _t},attenuationDistance:{value:0},attenuationColor:{value:new Mt(0)},specularColor:{value:new Mt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new _t},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new _t},anisotropyVector:{value:new It},anisotropyMap:{value:null},anisotropyMapTransform:{value:new _t}}]),vertexShader:yt.meshphysical_vert,fragmentShader:yt.meshphysical_frag};const Dl={r:0,b:0,g:0},Dy=new on,N0=new _t;N0.set(-1,0,0,0,1,0,0,0,1);function Iy(s,e,n,r,a,c){const u=new Mt(0);let d=a===!0?0:1,p,m,x=null,S=0,_=null;function y(b){let I=b.isScene===!0?b.background:null;if(I&&I.isTexture){const P=b.backgroundBlurriness>0;I=e.get(I,P)}return I}function T(b){let I=!1;const P=y(b);P===null?g(u,d):P&&P.isColor&&(g(P,1),I=!0);const H=s.xr.getEnvironmentBlendMode();H==="additive"?n.buffers.color.setClear(0,0,0,1,c):H==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,c),(s.autoClear||I)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),s.clear(s.autoClearColor,s.autoClearDepth,s.autoClearStencil))}function R(b,I){const P=y(I);P&&(P.isCubeTexture||P.mapping===ql)?(m===void 0&&(m=new De(new ao(1,1,1),new Xi({name:"BackgroundCubeMaterial",uniforms:so(ki.backgroundCube.uniforms),vertexShader:ki.backgroundCube.vertexShader,fragmentShader:ki.backgroundCube.fragmentShader,side:Zn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),m.geometry.deleteAttribute("normal"),m.geometry.deleteAttribute("uv"),m.onBeforeRender=function(H,L,z){this.matrixWorld.copyPosition(z.matrixWorld)},Object.defineProperty(m.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(m)),m.material.uniforms.envMap.value=P,m.material.uniforms.backgroundBlurriness.value=I.backgroundBlurriness,m.material.uniforms.backgroundIntensity.value=I.backgroundIntensity,m.material.uniforms.backgroundRotation.value.setFromMatrix4(Dy.makeRotationFromEuler(I.backgroundRotation)).transpose(),P.isCubeTexture&&P.isRenderTargetTexture===!1&&m.material.uniforms.backgroundRotation.value.premultiply(N0),m.material.toneMapped=Dt.getTransfer(P.colorSpace)!==Gt,(x!==P||S!==P.version||_!==s.toneMapping)&&(m.material.needsUpdate=!0,x=P,S=P.version,_=s.toneMapping),m.layers.enableAll(),b.unshift(m,m.geometry,m.material,0,0,null)):P&&P.isTexture&&(p===void 0&&(p=new De(new hn(2,2),new Xi({name:"BackgroundMaterial",uniforms:so(ki.background.uniforms),vertexShader:ki.background.vertexShader,fragmentShader:ki.background.fragmentShader,side:Hr,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),p.geometry.deleteAttribute("normal"),Object.defineProperty(p.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(p)),p.material.uniforms.t2D.value=P,p.material.uniforms.backgroundIntensity.value=I.backgroundIntensity,p.material.toneMapped=Dt.getTransfer(P.colorSpace)!==Gt,P.matrixAutoUpdate===!0&&P.updateMatrix(),p.material.uniforms.uvTransform.value.copy(P.matrix),(x!==P||S!==P.version||_!==s.toneMapping)&&(p.material.needsUpdate=!0,x=P,S=P.version,_=s.toneMapping),p.layers.enableAll(),b.unshift(p,p.geometry,p.material,0,0,null))}function g(b,I){b.getRGB(Dl,P0(s)),n.buffers.color.setClear(Dl.r,Dl.g,Dl.b,I,c)}function v(){m!==void 0&&(m.geometry.dispose(),m.material.dispose(),m=void 0),p!==void 0&&(p.geometry.dispose(),p.material.dispose(),p=void 0)}return{getClearColor:function(){return u},setClearColor:function(b,I=1){u.set(b),d=I,g(u,d)},getClearAlpha:function(){return d},setClearAlpha:function(b){d=b,g(u,d)},render:T,addToRenderList:R,dispose:v}}function Ny(s,e){const n=s.getParameter(s.MAX_VERTEX_ATTRIBS),r={},a=_(null);let c=a,u=!1;function d(k,q,de,ve,W){let ne=!1;const Z=S(k,ve,de,q);c!==Z&&(c=Z,m(c.object)),ne=y(k,ve,de,W),ne&&T(k,ve,de,W),W!==null&&e.update(W,s.ELEMENT_ARRAY_BUFFER),(ne||u)&&(u=!1,P(k,q,de,ve),W!==null&&s.bindBuffer(s.ELEMENT_ARRAY_BUFFER,e.get(W).buffer))}function p(){return s.createVertexArray()}function m(k){return s.bindVertexArray(k)}function x(k){return s.deleteVertexArray(k)}function S(k,q,de,ve){const W=ve.wireframe===!0;let ne=r[q.id];ne===void 0&&(ne={},r[q.id]=ne);const Z=k.isInstancedMesh===!0?k.id:0;let J=ne[Z];J===void 0&&(J={},ne[Z]=J);let _e=J[de.id];_e===void 0&&(_e={},J[de.id]=_e);let xe=_e[W];return xe===void 0&&(xe=_(p()),_e[W]=xe),xe}function _(k){const q=[],de=[],ve=[];for(let W=0;W<n;W++)q[W]=0,de[W]=0,ve[W]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:q,enabledAttributes:de,attributeDivisors:ve,object:k,attributes:{},index:null}}function y(k,q,de,ve){const W=c.attributes,ne=q.attributes;let Z=0;const J=de.getAttributes();for(const _e in J)if(J[_e].location>=0){const O=W[_e];let ie=ne[_e];if(ie===void 0&&(_e==="instanceMatrix"&&k.instanceMatrix&&(ie=k.instanceMatrix),_e==="instanceColor"&&k.instanceColor&&(ie=k.instanceColor)),O===void 0||O.attribute!==ie||ie&&O.data!==ie.data)return!0;Z++}return c.attributesNum!==Z||c.index!==ve}function T(k,q,de,ve){const W={},ne=q.attributes;let Z=0;const J=de.getAttributes();for(const _e in J)if(J[_e].location>=0){let O=ne[_e];O===void 0&&(_e==="instanceMatrix"&&k.instanceMatrix&&(O=k.instanceMatrix),_e==="instanceColor"&&k.instanceColor&&(O=k.instanceColor));const ie={};ie.attribute=O,O&&O.data&&(ie.data=O.data),W[_e]=ie,Z++}c.attributes=W,c.attributesNum=Z,c.index=ve}function R(){const k=c.newAttributes;for(let q=0,de=k.length;q<de;q++)k[q]=0}function g(k){v(k,0)}function v(k,q){const de=c.newAttributes,ve=c.enabledAttributes,W=c.attributeDivisors;de[k]=1,ve[k]===0&&(s.enableVertexAttribArray(k),ve[k]=1),W[k]!==q&&(s.vertexAttribDivisor(k,q),W[k]=q)}function b(){const k=c.newAttributes,q=c.enabledAttributes;for(let de=0,ve=q.length;de<ve;de++)q[de]!==k[de]&&(s.disableVertexAttribArray(de),q[de]=0)}function I(k,q,de,ve,W,ne,Z){Z===!0?s.vertexAttribIPointer(k,q,de,W,ne):s.vertexAttribPointer(k,q,de,ve,W,ne)}function P(k,q,de,ve){R();const W=ve.attributes,ne=de.getAttributes(),Z=q.defaultAttributeValues;for(const J in ne){const _e=ne[J];if(_e.location>=0){let xe=W[J];if(xe===void 0&&(J==="instanceMatrix"&&k.instanceMatrix&&(xe=k.instanceMatrix),J==="instanceColor"&&k.instanceColor&&(xe=k.instanceColor)),xe!==void 0){const O=xe.normalized,ie=xe.itemSize,Be=e.get(xe);if(Be===void 0)continue;const Ge=Be.buffer,ze=Be.type,re=Be.bytesPerElement,Ee=ze===s.INT||ze===s.UNSIGNED_INT||xe.gpuType===fd;if(xe.isInterleavedBufferAttribute){const U=xe.data,N=U.stride,Ue=xe.offset;if(U.isInstancedInterleavedBuffer){for(let Ke=0;Ke<_e.locationSize;Ke++)v(_e.location+Ke,U.meshPerAttribute);k.isInstancedMesh!==!0&&ve._maxInstanceCount===void 0&&(ve._maxInstanceCount=U.meshPerAttribute*U.count)}else for(let Ke=0;Ke<_e.locationSize;Ke++)g(_e.location+Ke);s.bindBuffer(s.ARRAY_BUFFER,Ge);for(let Ke=0;Ke<_e.locationSize;Ke++)I(_e.location+Ke,ie/_e.locationSize,ze,O,N*re,(Ue+ie/_e.locationSize*Ke)*re,Ee)}else{if(xe.isInstancedBufferAttribute){for(let U=0;U<_e.locationSize;U++)v(_e.location+U,xe.meshPerAttribute);k.isInstancedMesh!==!0&&ve._maxInstanceCount===void 0&&(ve._maxInstanceCount=xe.meshPerAttribute*xe.count)}else for(let U=0;U<_e.locationSize;U++)g(_e.location+U);s.bindBuffer(s.ARRAY_BUFFER,Ge);for(let U=0;U<_e.locationSize;U++)I(_e.location+U,ie/_e.locationSize,ze,O,ie*re,ie/_e.locationSize*U*re,Ee)}}else if(Z!==void 0){const O=Z[J];if(O!==void 0)switch(O.length){case 2:s.vertexAttrib2fv(_e.location,O);break;case 3:s.vertexAttrib3fv(_e.location,O);break;case 4:s.vertexAttrib4fv(_e.location,O);break;default:s.vertexAttrib1fv(_e.location,O)}}}}b()}function H(){D();for(const k in r){const q=r[k];for(const de in q){const ve=q[de];for(const W in ve){const ne=ve[W];for(const Z in ne)x(ne[Z].object),delete ne[Z];delete ve[W]}}delete r[k]}}function L(k){if(r[k.id]===void 0)return;const q=r[k.id];for(const de in q){const ve=q[de];for(const W in ve){const ne=ve[W];for(const Z in ne)x(ne[Z].object),delete ne[Z];delete ve[W]}}delete r[k.id]}function z(k){for(const q in r){const de=r[q];for(const ve in de){const W=de[ve];if(W[k.id]===void 0)continue;const ne=W[k.id];for(const Z in ne)x(ne[Z].object),delete ne[Z];delete W[k.id]}}}function w(k){for(const q in r){const de=r[q],ve=k.isInstancedMesh===!0?k.id:0,W=de[ve];if(W!==void 0){for(const ne in W){const Z=W[ne];for(const J in Z)x(Z[J].object),delete Z[J];delete W[ne]}delete de[ve],Object.keys(de).length===0&&delete r[q]}}}function D(){j(),u=!0,c!==a&&(c=a,m(c.object))}function j(){a.geometry=null,a.program=null,a.wireframe=!1}return{setup:d,reset:D,resetDefaultState:j,dispose:H,releaseStatesOfGeometry:L,releaseStatesOfObject:w,releaseStatesOfProgram:z,initAttributes:R,enableAttribute:g,disableUnusedAttributes:b}}function Uy(s,e,n){let r;function a(p){r=p}function c(p,m){s.drawArrays(r,p,m),n.update(m,r,1)}function u(p,m,x){x!==0&&(s.drawArraysInstanced(r,p,m,x),n.update(m,r,x))}function d(p,m,x){if(x===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(r,p,0,m,0,x);let _=0;for(let y=0;y<x;y++)_+=m[y];n.update(_,r,1)}this.setMode=a,this.render=c,this.renderInstances=u,this.renderMultiDraw=d}function Fy(s,e,n,r){let a;function c(){if(a!==void 0)return a;if(e.has("EXT_texture_filter_anisotropic")===!0){const z=e.get("EXT_texture_filter_anisotropic");a=s.getParameter(z.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else a=0;return a}function u(z){return!(z!==Ci&&r.convert(z)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_FORMAT))}function d(z){const w=z===ur&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(z!==si&&r.convert(z)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_TYPE)&&z!==Bi&&!w)}function p(z){if(z==="highp"){if(s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.HIGH_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.HIGH_FLOAT).precision>0)return"highp";z="mediump"}return z==="mediump"&&s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.MEDIUM_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let m=n.precision!==void 0?n.precision:"highp";const x=p(m);x!==m&&(ht("WebGLRenderer:",m,"not supported, using",x,"instead."),m=x);const S=n.logarithmicDepthBuffer===!0,_=n.reversedDepthBuffer===!0&&e.has("EXT_clip_control");n.reversedDepthBuffer===!0&&_===!1&&ht("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");const y=s.getParameter(s.MAX_TEXTURE_IMAGE_UNITS),T=s.getParameter(s.MAX_VERTEX_TEXTURE_IMAGE_UNITS),R=s.getParameter(s.MAX_TEXTURE_SIZE),g=s.getParameter(s.MAX_CUBE_MAP_TEXTURE_SIZE),v=s.getParameter(s.MAX_VERTEX_ATTRIBS),b=s.getParameter(s.MAX_VERTEX_UNIFORM_VECTORS),I=s.getParameter(s.MAX_VARYING_VECTORS),P=s.getParameter(s.MAX_FRAGMENT_UNIFORM_VECTORS),H=s.getParameter(s.MAX_SAMPLES),L=s.getParameter(s.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:c,getMaxPrecision:p,textureFormatReadable:u,textureTypeReadable:d,precision:m,logarithmicDepthBuffer:S,reversedDepthBuffer:_,maxTextures:y,maxVertexTextures:T,maxTextureSize:R,maxCubemapSize:g,maxAttributes:v,maxVertexUniforms:b,maxVaryings:I,maxFragmentUniforms:P,maxSamples:H,samples:L}}function Oy(s){const e=this;let n=null,r=0,a=!1,c=!1;const u=new as,d=new _t,p={value:null,needsUpdate:!1};this.uniform=p,this.numPlanes=0,this.numIntersection=0,this.init=function(S,_){const y=S.length!==0||_||r!==0||a;return a=_,r=S.length,y},this.beginShadows=function(){c=!0,x(null)},this.endShadows=function(){c=!1},this.setGlobalState=function(S,_){n=x(S,_,0)},this.setState=function(S,_,y){const T=S.clippingPlanes,R=S.clipIntersection,g=S.clipShadows,v=s.get(S);if(!a||T===null||T.length===0||c&&!g)c?x(null):m();else{const b=c?0:r,I=b*4;let P=v.clippingState||null;p.value=P,P=x(T,_,I,y);for(let H=0;H!==I;++H)P[H]=n[H];v.clippingState=P,this.numIntersection=R?this.numPlanes:0,this.numPlanes+=b}};function m(){p.value!==n&&(p.value=n,p.needsUpdate=r>0),e.numPlanes=r,e.numIntersection=0}function x(S,_,y,T){const R=S!==null?S.length:0;let g=null;if(R!==0){if(g=p.value,T!==!0||g===null){const v=y+R*4,b=_.matrixWorldInverse;d.getNormalMatrix(b),(g===null||g.length<v)&&(g=new Float32Array(v));for(let I=0,P=y;I!==R;++I,P+=4)u.copy(S[I]).applyMatrix4(b,d),u.normal.toArray(g,P),g[P+3]=u.constant}p.value=g,p.needsUpdate=!0}return e.numPlanes=R,e.numIntersection=0,g}}const zr=4,km=[.125,.215,.35,.446,.526,.582],cs=20,ky=256,Zo=new bd,Bm=new Mt;let lf=null,cf=0,uf=0,ff=!1;const By=new te;class zm{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._sigmas=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,n=0,r=.1,a=100,c={}){const{size:u=256,position:d=By}=c;lf=this._renderer.getRenderTarget(),cf=this._renderer.getActiveCubeFace(),uf=this._renderer.getActiveMipmapLevel(),ff=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(u);const p=this._allocateTargets();return p.depthBuffer=!0,this._sceneToCubeUV(e,r,a,p,d),n>0&&this._blur(p,0,0,n),this._applyPMREM(p),this._cleanup(p),p}fromEquirectangular(e,n=null){return this._fromTexture(e,n)}fromCubemap(e,n=null){return this._fromTexture(e,n)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Gm(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Vm(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(lf,cf,uf),this._renderer.xr.enabled=ff,e.scissorTest=!1,Js(e,0,0,e.width,e.height)}_fromTexture(e,n){e.mapping===hs||e.mapping===io?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),lf=this._renderer.getRenderTarget(),cf=this._renderer.getActiveCubeFace(),uf=this._renderer.getActiveMipmapLevel(),ff=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const r=n||this._allocateTargets();return this._textureToCubeUV(e,r),this._applyPMREM(r),this._cleanup(r),r}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),n=4*this._cubeSize,r={magFilter:Nn,minFilter:Nn,generateMipmaps:!1,type:ur,format:Ci,colorSpace:Hl,depthBuffer:!1},a=Hm(e,n,r);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==n){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Hm(e,n,r);const{_lodMax:c}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods,sigmas:this._sigmas}=zy(c)),this._blurMaterial=Vy(c,e,n),this._ggxMaterial=Hy(c,e,n)}return a}_compileMaterial(e){const n=new De(new oi,e);this._renderer.compile(n,Zo)}_sceneToCubeUV(e,n,r,a,c){const p=new ri(90,1,n,r),m=[1,-1,1,1,1,1],x=[1,1,1,-1,-1,-1],S=this._renderer,_=S.autoClear,y=S.toneMapping;S.getClearColor(Bm),S.toneMapping=Hi,S.autoClear=!1,S.state.buffers.depth.getReversed()&&(S.setRenderTarget(a),S.clearDepth(),S.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new De(new ao,new Wl({name:"PMREM.Background",side:Zn,depthWrite:!1,depthTest:!1})));const R=this._backgroundBox,g=R.material;let v=!1;const b=e.background;b?b.isColor&&(g.color.copy(b),e.background=null,v=!0):(g.color.copy(Bm),v=!0);for(let I=0;I<6;I++){const P=I%3;P===0?(p.up.set(0,m[I],0),p.position.set(c.x,c.y,c.z),p.lookAt(c.x+x[I],c.y,c.z)):P===1?(p.up.set(0,0,m[I]),p.position.set(c.x,c.y,c.z),p.lookAt(c.x,c.y+x[I],c.z)):(p.up.set(0,m[I],0),p.position.set(c.x,c.y,c.z),p.lookAt(c.x,c.y,c.z+x[I]));const H=this._cubeSize;Js(a,P*H,I>2?H:0,H,H),S.setRenderTarget(a),v&&S.render(R,p),S.render(e,p)}S.toneMapping=y,S.autoClear=_,e.background=b}_textureToCubeUV(e,n){const r=this._renderer,a=e.mapping===hs||e.mapping===io;a?(this._cubemapMaterial===null&&(this._cubemapMaterial=Gm()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Vm());const c=a?this._cubemapMaterial:this._equirectMaterial,u=this._lodMeshes[0];u.material=c;const d=c.uniforms;d.envMap.value=e;const p=this._cubeSize;Js(n,0,0,3*p,2*p),r.setRenderTarget(n),r.render(u,Zo)}_applyPMREM(e){const n=this._renderer,r=n.autoClear;n.autoClear=!1;const a=this._lodMeshes.length;for(let c=1;c<a;c++)this._applyGGXFilter(e,c-1,c);n.autoClear=r}_applyGGXFilter(e,n,r){const a=this._renderer,c=this._pingPongRenderTarget,u=this._ggxMaterial,d=this._lodMeshes[r];d.material=u;const p=u.uniforms,m=r/(this._lodMeshes.length-1),x=n/(this._lodMeshes.length-1),S=Math.sqrt(m*m-x*x),_=0+m*1.25,y=S*_,{_lodMax:T}=this,R=this._sizeLods[r],g=3*R*(r>T-zr?r-T+zr:0),v=4*(this._cubeSize-R);p.envMap.value=e.texture,p.roughness.value=y,p.mipInt.value=T-n,Js(c,g,v,3*R,2*R),a.setRenderTarget(c),a.render(d,Zo),p.envMap.value=c.texture,p.roughness.value=0,p.mipInt.value=T-r,Js(e,g,v,3*R,2*R),a.setRenderTarget(e),a.render(d,Zo)}_blur(e,n,r,a,c){const u=this._pingPongRenderTarget;this._halfBlur(e,u,n,r,a,"latitudinal",c),this._halfBlur(u,e,r,r,a,"longitudinal",c)}_halfBlur(e,n,r,a,c,u,d){const p=this._renderer,m=this._blurMaterial;u!=="latitudinal"&&u!=="longitudinal"&&Ut("blur direction must be either latitudinal or longitudinal!");const x=3,S=this._lodMeshes[a];S.material=m;const _=m.uniforms,y=this._sizeLods[r]-1,T=isFinite(c)?Math.PI/(2*y):2*Math.PI/(2*cs-1),R=c/T,g=isFinite(c)?1+Math.floor(x*R):cs;g>cs&&ht(`sigmaRadians, ${c}, is too large and will clip, as it requested ${g} samples when the maximum is set to ${cs}`);const v=[];let b=0;for(let z=0;z<cs;++z){const w=z/R,D=Math.exp(-w*w/2);v.push(D),z===0?b+=D:z<g&&(b+=2*D)}for(let z=0;z<v.length;z++)v[z]=v[z]/b;_.envMap.value=e.texture,_.samples.value=g,_.weights.value=v,_.latitudinal.value=u==="latitudinal",d&&(_.poleAxis.value=d);const{_lodMax:I}=this;_.dTheta.value=T,_.mipInt.value=I-r;const P=this._sizeLods[a],H=3*P*(a>I-zr?a-I+zr:0),L=4*(this._cubeSize-P);Js(n,H,L,3*P,2*P),p.setRenderTarget(n),p.render(S,Zo)}}function zy(s){const e=[],n=[],r=[];let a=s;const c=s-zr+1+km.length;for(let u=0;u<c;u++){const d=Math.pow(2,a);e.push(d);let p=1/d;u>s-zr?p=km[u-s+zr-1]:u===0&&(p=0),n.push(p);const m=1/(d-2),x=-m,S=1+m,_=[x,x,S,x,S,S,x,x,S,S,x,S],y=6,T=6,R=3,g=2,v=1,b=new Float32Array(R*T*y),I=new Float32Array(g*T*y),P=new Float32Array(v*T*y);for(let L=0;L<y;L++){const z=L%3*2/3-1,w=L>2?0:-1,D=[z,w,0,z+2/3,w,0,z+2/3,w+1,0,z,w,0,z+2/3,w+1,0,z,w+1,0];b.set(D,R*T*L),I.set(_,g*T*L);const j=[L,L,L,L,L,L];P.set(j,v*T*L)}const H=new oi;H.setAttribute("position",new Gi(b,R)),H.setAttribute("uv",new Gi(I,g)),H.setAttribute("faceIndex",new Gi(P,v)),r.push(new De(H,null)),a>zr&&a--}return{lodMeshes:r,sizeLods:e,sigmas:n}}function Hm(s,e,n){const r=new Vi(s,e,n);return r.texture.mapping=ql,r.texture.name="PMREM.cubeUv",r.scissorTest=!0,r}function Js(s,e,n,r,a){s.viewport.set(e,n,r,a),s.scissor.set(e,n,r,a)}function Hy(s,e,n){return new Xi({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:ky,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${s}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:Kl(),fragmentShader:`

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
		`,blending:lr,depthTest:!1,depthWrite:!1})}function Vy(s,e,n){const r=new Float32Array(cs),a=new te(0,1,0);return new Xi({name:"SphericalGaussianBlur",defines:{n:cs,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${s}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:r},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:a}},vertexShader:Kl(),fragmentShader:`

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
		`,blending:lr,depthTest:!1,depthWrite:!1})}function Vm(){return new Xi({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Kl(),fragmentShader:`

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
		`,blending:lr,depthTest:!1,depthWrite:!1})}function Gm(){return new Xi({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Kl(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:lr,depthTest:!1,depthWrite:!1})}function Kl(){return`

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
	`}class U0 extends Vi{constructor(e=1,n={}){super(e,e,n),this.isWebGLCubeRenderTarget=!0;const r={width:e,height:e,depth:1},a=[r,r,r,r,r,r];this.texture=new C0(a),this._setTextureOptions(n),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,n){this.texture.type=n.type,this.texture.colorSpace=n.colorSpace,this.texture.generateMipmaps=n.generateMipmaps,this.texture.minFilter=n.minFilter,this.texture.magFilter=n.magFilter;const r={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},a=new ao(5,5,5),c=new Xi({name:"CubemapFromEquirect",uniforms:so(r.uniforms),vertexShader:r.vertexShader,fragmentShader:r.fragmentShader,side:Zn,blending:lr});c.uniforms.tEquirect.value=n;const u=new De(a,c),d=n.minFilter;return n.minFilter===us&&(n.minFilter=Nn),new Yv(1,10,this).update(e,u),n.minFilter=d,u.geometry.dispose(),u.material.dispose(),this}clear(e,n=!0,r=!0,a=!0){const c=e.getRenderTarget();for(let u=0;u<6;u++)e.setRenderTarget(this,u),e.clear(n,r,a);e.setRenderTarget(c)}}function Gy(s){let e=new WeakMap,n=new WeakMap,r=null;function a(_,y=!1){return _==null?null:y?u(_):c(_)}function c(_){if(_&&_.isTexture){const y=_.mapping;if(y===Iu||y===Nu)if(e.has(_)){const T=e.get(_).texture;return d(T,_.mapping)}else{const T=_.image;if(T&&T.height>0){const R=new U0(T.height);return R.fromEquirectangularTexture(s,_),e.set(_,R),_.addEventListener("dispose",m),d(R.texture,_.mapping)}else return null}}return _}function u(_){if(_&&_.isTexture){const y=_.mapping,T=y===Iu||y===Nu,R=y===hs||y===io;if(T||R){let g=n.get(_);const v=g!==void 0?g.texture.pmremVersion:0;if(_.isRenderTargetTexture&&_.pmremVersion!==v)return r===null&&(r=new zm(s)),g=T?r.fromEquirectangular(_,g):r.fromCubemap(_,g),g.texture.pmremVersion=_.pmremVersion,n.set(_,g),g.texture;if(g!==void 0)return g.texture;{const b=_.image;return T&&b&&b.height>0||R&&b&&p(b)?(r===null&&(r=new zm(s)),g=T?r.fromEquirectangular(_):r.fromCubemap(_),g.texture.pmremVersion=_.pmremVersion,n.set(_,g),_.addEventListener("dispose",x),g.texture):null}}}return _}function d(_,y){return y===Iu?_.mapping=hs:y===Nu&&(_.mapping=io),_}function p(_){let y=0;const T=6;for(let R=0;R<T;R++)_[R]!==void 0&&y++;return y===T}function m(_){const y=_.target;y.removeEventListener("dispose",m);const T=e.get(y);T!==void 0&&(e.delete(y),T.dispose())}function x(_){const y=_.target;y.removeEventListener("dispose",x);const T=n.get(y);T!==void 0&&(n.delete(y),T.dispose())}function S(){e=new WeakMap,n=new WeakMap,r!==null&&(r.dispose(),r=null)}return{get:a,dispose:S}}function Wy(s){const e={};function n(r){if(e[r]!==void 0)return e[r];const a=s.getExtension(r);return e[r]=a,a}return{has:function(r){return n(r)!==null},init:function(){n("EXT_color_buffer_float"),n("WEBGL_clip_cull_distance"),n("OES_texture_float_linear"),n("EXT_color_buffer_half_float"),n("WEBGL_multisampled_render_to_texture"),n("WEBGL_render_shared_exponent")},get:function(r){const a=n(r);return a===null&&id("WebGLRenderer: "+r+" extension not supported."),a}}}function Xy(s,e,n,r){const a={},c=new WeakMap;function u(S){const _=S.target;_.index!==null&&e.remove(_.index);for(const T in _.attributes)e.remove(_.attributes[T]);_.removeEventListener("dispose",u),delete a[_.id];const y=c.get(_);y&&(e.remove(y),c.delete(_)),r.releaseStatesOfGeometry(_),_.isInstancedBufferGeometry===!0&&delete _._maxInstanceCount,n.memory.geometries--}function d(S,_){return a[_.id]===!0||(_.addEventListener("dispose",u),a[_.id]=!0,n.memory.geometries++),_}function p(S){const _=S.attributes;for(const y in _)e.update(_[y],s.ARRAY_BUFFER)}function m(S){const _=[],y=S.index,T=S.attributes.position;let R=0;if(T===void 0)return;if(y!==null){const b=y.array;R=y.version;for(let I=0,P=b.length;I<P;I+=3){const H=b[I+0],L=b[I+1],z=b[I+2];_.push(H,L,L,z,z,H)}}else{const b=T.array;R=T.version;for(let I=0,P=b.length/3-1;I<P;I+=3){const H=I+0,L=I+1,z=I+2;_.push(H,L,L,z,z,H)}}const g=new(T.count>=65535?A0:T0)(_,1);g.version=R;const v=c.get(S);v&&e.remove(v),c.set(S,g)}function x(S){const _=c.get(S);if(_){const y=S.index;y!==null&&_.version<y.version&&m(S)}else m(S);return c.get(S)}return{get:d,update:p,getWireframeAttribute:x}}function jy(s,e,n){let r;function a(S){r=S}let c,u;function d(S){c=S.type,u=S.bytesPerElement}function p(S,_){s.drawElements(r,_,c,S*u),n.update(_,r,1)}function m(S,_,y){y!==0&&(s.drawElementsInstanced(r,_,c,S*u,y),n.update(_,r,y))}function x(S,_,y){if(y===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(r,_,0,c,S,0,y);let R=0;for(let g=0;g<y;g++)R+=_[g];n.update(R,r,1)}this.setMode=a,this.setIndex=d,this.render=p,this.renderInstances=m,this.renderMultiDraw=x}function Yy(s){const e={geometries:0,textures:0},n={frame:0,calls:0,triangles:0,points:0,lines:0};function r(c,u,d){switch(n.calls++,u){case s.TRIANGLES:n.triangles+=d*(c/3);break;case s.LINES:n.lines+=d*(c/2);break;case s.LINE_STRIP:n.lines+=d*(c-1);break;case s.LINE_LOOP:n.lines+=d*c;break;case s.POINTS:n.points+=d*c;break;default:Ut("WebGLInfo: Unknown draw mode:",u);break}}function a(){n.calls=0,n.triangles=0,n.points=0,n.lines=0}return{memory:e,render:n,programs:null,autoReset:!0,reset:a,update:r}}function qy(s,e,n){const r=new WeakMap,a=new sn;function c(u,d,p){const m=u.morphTargetInfluences,x=d.morphAttributes.position||d.morphAttributes.normal||d.morphAttributes.color,S=x!==void 0?x.length:0;let _=r.get(d);if(_===void 0||_.count!==S){let j=function(){w.dispose(),r.delete(d),d.removeEventListener("dispose",j)};var y=j;_!==void 0&&_.texture.dispose();const T=d.morphAttributes.position!==void 0,R=d.morphAttributes.normal!==void 0,g=d.morphAttributes.color!==void 0,v=d.morphAttributes.position||[],b=d.morphAttributes.normal||[],I=d.morphAttributes.color||[];let P=0;T===!0&&(P=1),R===!0&&(P=2),g===!0&&(P=3);let H=d.attributes.position.count*P,L=1;H>e.maxTextureSize&&(L=Math.ceil(H/e.maxTextureSize),H=e.maxTextureSize);const z=new Float32Array(H*L*4*S),w=new E0(z,H,L,S);w.type=Bi,w.needsUpdate=!0;const D=P*4;for(let k=0;k<S;k++){const q=v[k],de=b[k],ve=I[k],W=H*L*4*k;for(let ne=0;ne<q.count;ne++){const Z=ne*D;T===!0&&(a.fromBufferAttribute(q,ne),z[W+Z+0]=a.x,z[W+Z+1]=a.y,z[W+Z+2]=a.z,z[W+Z+3]=0),R===!0&&(a.fromBufferAttribute(de,ne),z[W+Z+4]=a.x,z[W+Z+5]=a.y,z[W+Z+6]=a.z,z[W+Z+7]=0),g===!0&&(a.fromBufferAttribute(ve,ne),z[W+Z+8]=a.x,z[W+Z+9]=a.y,z[W+Z+10]=a.z,z[W+Z+11]=ve.itemSize===4?a.w:1)}}_={count:S,texture:w,size:new It(H,L)},r.set(d,_),d.addEventListener("dispose",j)}if(u.isInstancedMesh===!0&&u.morphTexture!==null)p.getUniforms().setValue(s,"morphTexture",u.morphTexture,n);else{let T=0;for(let g=0;g<m.length;g++)T+=m[g];const R=d.morphTargetsRelative?1:1-T;p.getUniforms().setValue(s,"morphTargetBaseInfluence",R),p.getUniforms().setValue(s,"morphTargetInfluences",m)}p.getUniforms().setValue(s,"morphTargetsTexture",_.texture,n),p.getUniforms().setValue(s,"morphTargetsTextureSize",_.size)}return{update:c}}function Ky(s,e,n,r,a){let c=new WeakMap;function u(m){const x=a.render.frame,S=m.geometry,_=e.get(m,S);if(c.get(_)!==x&&(e.update(_),c.set(_,x)),m.isInstancedMesh&&(m.hasEventListener("dispose",p)===!1&&m.addEventListener("dispose",p),c.get(m)!==x&&(n.update(m.instanceMatrix,s.ARRAY_BUFFER),m.instanceColor!==null&&n.update(m.instanceColor,s.ARRAY_BUFFER),c.set(m,x))),m.isSkinnedMesh){const y=m.skeleton;c.get(y)!==x&&(y.update(),c.set(y,x))}return _}function d(){c=new WeakMap}function p(m){const x=m.target;x.removeEventListener("dispose",p),r.releaseStatesOfObject(x),n.remove(x.instanceMatrix),x.instanceColor!==null&&n.remove(x.instanceColor)}return{update:u,dispose:d}}const $y={[l0]:"LINEAR_TONE_MAPPING",[c0]:"REINHARD_TONE_MAPPING",[u0]:"CINEON_TONE_MAPPING",[ud]:"ACES_FILMIC_TONE_MAPPING",[d0]:"AGX_TONE_MAPPING",[h0]:"NEUTRAL_TONE_MAPPING",[f0]:"CUSTOM_TONE_MAPPING"};function Zy(s,e,n,r,a){const c=new Vi(e,n,{type:s,depthBuffer:r,stencilBuffer:a,depthTexture:r?new ro(e,n):void 0}),u=new Vi(e,n,{type:ur,depthBuffer:!1,stencilBuffer:!1}),d=new oi;d.setAttribute("position",new ln([-1,3,0,-1,-1,0,3,-1,0],3)),d.setAttribute("uv",new ln([0,2,0,0,2,0],2));const p=new zv({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),m=new De(d,p),x=new bd(-1,1,1,-1,0,1);let S=null,_=null,y=!1,T,R=null,g=[],v=!1;this.setSize=function(b,I){c.setSize(b,I),u.setSize(b,I);for(let P=0;P<g.length;P++){const H=g[P];H.setSize&&H.setSize(b,I)}},this.setEffects=function(b){g=b,v=g.length>0&&g[0].isRenderPass===!0;const I=c.width,P=c.height;for(let H=0;H<g.length;H++){const L=g[H];L.setSize&&L.setSize(I,P)}},this.begin=function(b,I){if(y||b.toneMapping===Hi&&g.length===0)return!1;if(R=I,I!==null){const P=I.width,H=I.height;(c.width!==P||c.height!==H)&&this.setSize(P,H)}return v===!1&&b.setRenderTarget(c),T=b.toneMapping,b.toneMapping=Hi,!0},this.hasRenderPass=function(){return v},this.end=function(b,I){b.toneMapping=T,y=!0;let P=c,H=u;for(let L=0;L<g.length;L++){const z=g[L];if(z.enabled!==!1&&(z.render(b,H,P,I),z.needsSwap!==!1)){const w=P;P=H,H=w}}if(S!==b.outputColorSpace||_!==b.toneMapping){S=b.outputColorSpace,_=b.toneMapping,p.defines={},Dt.getTransfer(S)===Gt&&(p.defines.SRGB_TRANSFER="");const L=$y[_];L&&(p.defines[L]=""),p.needsUpdate=!0}p.uniforms.tDiffuse.value=P.texture,b.setRenderTarget(R),b.render(m,x),R=null,y=!1},this.isCompositing=function(){return y},this.dispose=function(){c.depthTexture&&c.depthTexture.dispose(),c.dispose(),u.dispose(),d.dispose(),p.dispose()}}const F0=new Un,od=new ro(1,1),O0=new E0,k0=new gv,B0=new C0,Wm=[],Xm=[],jm=new Float32Array(16),Ym=new Float32Array(9),qm=new Float32Array(4);function lo(s,e,n){const r=s[0];if(r<=0||r>0)return s;const a=e*n;let c=Wm[a];if(c===void 0&&(c=new Float32Array(a),Wm[a]=c),e!==0){r.toArray(c,0);for(let u=1,d=0;u!==e;++u)d+=n,s[u].toArray(c,d)}return c}function gn(s,e){if(s.length!==e.length)return!1;for(let n=0,r=s.length;n<r;n++)if(s[n]!==e[n])return!1;return!0}function _n(s,e){for(let n=0,r=e.length;n<r;n++)s[n]=e[n]}function $l(s,e){let n=Xm[e];n===void 0&&(n=new Int32Array(e),Xm[e]=n);for(let r=0;r!==e;++r)n[r]=s.allocateTextureUnit();return n}function Jy(s,e){const n=this.cache;n[0]!==e&&(s.uniform1f(this.addr,e),n[0]=e)}function Qy(s,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(s.uniform2f(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(gn(n,e))return;s.uniform2fv(this.addr,e),_n(n,e)}}function eM(s,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(s.uniform3f(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else if(e.r!==void 0)(n[0]!==e.r||n[1]!==e.g||n[2]!==e.b)&&(s.uniform3f(this.addr,e.r,e.g,e.b),n[0]=e.r,n[1]=e.g,n[2]=e.b);else{if(gn(n,e))return;s.uniform3fv(this.addr,e),_n(n,e)}}function tM(s,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(s.uniform4f(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(gn(n,e))return;s.uniform4fv(this.addr,e),_n(n,e)}}function nM(s,e){const n=this.cache,r=e.elements;if(r===void 0){if(gn(n,e))return;s.uniformMatrix2fv(this.addr,!1,e),_n(n,e)}else{if(gn(n,r))return;qm.set(r),s.uniformMatrix2fv(this.addr,!1,qm),_n(n,r)}}function iM(s,e){const n=this.cache,r=e.elements;if(r===void 0){if(gn(n,e))return;s.uniformMatrix3fv(this.addr,!1,e),_n(n,e)}else{if(gn(n,r))return;Ym.set(r),s.uniformMatrix3fv(this.addr,!1,Ym),_n(n,r)}}function rM(s,e){const n=this.cache,r=e.elements;if(r===void 0){if(gn(n,e))return;s.uniformMatrix4fv(this.addr,!1,e),_n(n,e)}else{if(gn(n,r))return;jm.set(r),s.uniformMatrix4fv(this.addr,!1,jm),_n(n,r)}}function sM(s,e){const n=this.cache;n[0]!==e&&(s.uniform1i(this.addr,e),n[0]=e)}function oM(s,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(s.uniform2i(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(gn(n,e))return;s.uniform2iv(this.addr,e),_n(n,e)}}function aM(s,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(s.uniform3i(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(gn(n,e))return;s.uniform3iv(this.addr,e),_n(n,e)}}function lM(s,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(s.uniform4i(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(gn(n,e))return;s.uniform4iv(this.addr,e),_n(n,e)}}function cM(s,e){const n=this.cache;n[0]!==e&&(s.uniform1ui(this.addr,e),n[0]=e)}function uM(s,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(s.uniform2ui(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(gn(n,e))return;s.uniform2uiv(this.addr,e),_n(n,e)}}function fM(s,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(s.uniform3ui(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(gn(n,e))return;s.uniform3uiv(this.addr,e),_n(n,e)}}function dM(s,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(s.uniform4ui(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(gn(n,e))return;s.uniform4uiv(this.addr,e),_n(n,e)}}function hM(s,e,n){const r=this.cache,a=n.allocateTextureUnit();r[0]!==a&&(s.uniform1i(this.addr,a),r[0]=a);let c;this.type===s.SAMPLER_2D_SHADOW?(od.compareFunction=n.isReversedDepthBuffer()?vd:_d,c=od):c=F0,n.setTexture2D(e||c,a)}function pM(s,e,n){const r=this.cache,a=n.allocateTextureUnit();r[0]!==a&&(s.uniform1i(this.addr,a),r[0]=a),n.setTexture3D(e||k0,a)}function mM(s,e,n){const r=this.cache,a=n.allocateTextureUnit();r[0]!==a&&(s.uniform1i(this.addr,a),r[0]=a),n.setTextureCube(e||B0,a)}function gM(s,e,n){const r=this.cache,a=n.allocateTextureUnit();r[0]!==a&&(s.uniform1i(this.addr,a),r[0]=a),n.setTexture2DArray(e||O0,a)}function _M(s){switch(s){case 5126:return Jy;case 35664:return Qy;case 35665:return eM;case 35666:return tM;case 35674:return nM;case 35675:return iM;case 35676:return rM;case 5124:case 35670:return sM;case 35667:case 35671:return oM;case 35668:case 35672:return aM;case 35669:case 35673:return lM;case 5125:return cM;case 36294:return uM;case 36295:return fM;case 36296:return dM;case 35678:case 36198:case 36298:case 36306:case 35682:return hM;case 35679:case 36299:case 36307:return pM;case 35680:case 36300:case 36308:case 36293:return mM;case 36289:case 36303:case 36311:case 36292:return gM}}function vM(s,e){s.uniform1fv(this.addr,e)}function xM(s,e){const n=lo(e,this.size,2);s.uniform2fv(this.addr,n)}function SM(s,e){const n=lo(e,this.size,3);s.uniform3fv(this.addr,n)}function yM(s,e){const n=lo(e,this.size,4);s.uniform4fv(this.addr,n)}function MM(s,e){const n=lo(e,this.size,4);s.uniformMatrix2fv(this.addr,!1,n)}function EM(s,e){const n=lo(e,this.size,9);s.uniformMatrix3fv(this.addr,!1,n)}function wM(s,e){const n=lo(e,this.size,16);s.uniformMatrix4fv(this.addr,!1,n)}function TM(s,e){s.uniform1iv(this.addr,e)}function AM(s,e){s.uniform2iv(this.addr,e)}function bM(s,e){s.uniform3iv(this.addr,e)}function CM(s,e){s.uniform4iv(this.addr,e)}function RM(s,e){s.uniform1uiv(this.addr,e)}function PM(s,e){s.uniform2uiv(this.addr,e)}function LM(s,e){s.uniform3uiv(this.addr,e)}function DM(s,e){s.uniform4uiv(this.addr,e)}function IM(s,e,n){const r=this.cache,a=e.length,c=$l(n,a);gn(r,c)||(s.uniform1iv(this.addr,c),_n(r,c));let u;this.type===s.SAMPLER_2D_SHADOW?u=od:u=F0;for(let d=0;d!==a;++d)n.setTexture2D(e[d]||u,c[d])}function NM(s,e,n){const r=this.cache,a=e.length,c=$l(n,a);gn(r,c)||(s.uniform1iv(this.addr,c),_n(r,c));for(let u=0;u!==a;++u)n.setTexture3D(e[u]||k0,c[u])}function UM(s,e,n){const r=this.cache,a=e.length,c=$l(n,a);gn(r,c)||(s.uniform1iv(this.addr,c),_n(r,c));for(let u=0;u!==a;++u)n.setTextureCube(e[u]||B0,c[u])}function FM(s,e,n){const r=this.cache,a=e.length,c=$l(n,a);gn(r,c)||(s.uniform1iv(this.addr,c),_n(r,c));for(let u=0;u!==a;++u)n.setTexture2DArray(e[u]||O0,c[u])}function OM(s){switch(s){case 5126:return vM;case 35664:return xM;case 35665:return SM;case 35666:return yM;case 35674:return MM;case 35675:return EM;case 35676:return wM;case 5124:case 35670:return TM;case 35667:case 35671:return AM;case 35668:case 35672:return bM;case 35669:case 35673:return CM;case 5125:return RM;case 36294:return PM;case 36295:return LM;case 36296:return DM;case 35678:case 36198:case 36298:case 36306:case 35682:return IM;case 35679:case 36299:case 36307:return NM;case 35680:case 36300:case 36308:case 36293:return UM;case 36289:case 36303:case 36311:case 36292:return FM}}class kM{constructor(e,n,r){this.id=e,this.addr=r,this.cache=[],this.type=n.type,this.setValue=_M(n.type)}}class BM{constructor(e,n,r){this.id=e,this.addr=r,this.cache=[],this.type=n.type,this.size=n.size,this.setValue=OM(n.type)}}class zM{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,n,r){const a=this.seq;for(let c=0,u=a.length;c!==u;++c){const d=a[c];d.setValue(e,n[d.id],r)}}}const df=/(\w+)(\])?(\[|\.)?/g;function Km(s,e){s.seq.push(e),s.map[e.id]=e}function HM(s,e,n){const r=s.name,a=r.length;for(df.lastIndex=0;;){const c=df.exec(r),u=df.lastIndex;let d=c[1];const p=c[2]==="]",m=c[3];if(p&&(d=d|0),m===void 0||m==="["&&u+2===a){Km(n,m===void 0?new kM(d,s,e):new BM(d,s,e));break}else{let S=n.map[d];S===void 0&&(S=new zM(d),Km(n,S)),n=S}}}class kl{constructor(e,n){this.seq=[],this.map={};const r=e.getProgramParameter(n,e.ACTIVE_UNIFORMS);for(let u=0;u<r;++u){const d=e.getActiveUniform(n,u),p=e.getUniformLocation(n,d.name);HM(d,p,this)}const a=[],c=[];for(const u of this.seq)u.type===e.SAMPLER_2D_SHADOW||u.type===e.SAMPLER_CUBE_SHADOW||u.type===e.SAMPLER_2D_ARRAY_SHADOW?a.push(u):c.push(u);a.length>0&&(this.seq=a.concat(c))}setValue(e,n,r,a){const c=this.map[n];c!==void 0&&c.setValue(e,r,a)}setOptional(e,n,r){const a=n[r];a!==void 0&&this.setValue(e,r,a)}static upload(e,n,r,a){for(let c=0,u=n.length;c!==u;++c){const d=n[c],p=r[d.id];p.needsUpdate!==!1&&d.setValue(e,p.value,a)}}static seqWithValue(e,n){const r=[];for(let a=0,c=e.length;a!==c;++a){const u=e[a];u.id in n&&r.push(u)}return r}}function $m(s,e,n){const r=s.createShader(e);return s.shaderSource(r,n),s.compileShader(r),r}const VM=37297;let GM=0;function WM(s,e){const n=s.split(`
`),r=[],a=Math.max(e-6,0),c=Math.min(e+6,n.length);for(let u=a;u<c;u++){const d=u+1;r.push(`${d===e?">":" "} ${d}: ${n[u]}`)}return r.join(`
`)}const Zm=new _t;function XM(s){Dt._getMatrix(Zm,Dt.workingColorSpace,s);const e=`mat3( ${Zm.elements.map(n=>n.toFixed(4))} )`;switch(Dt.getTransfer(s)){case Vl:return[e,"LinearTransferOETF"];case Gt:return[e,"sRGBTransferOETF"];default:return ht("WebGLProgram: Unsupported color space: ",s),[e,"LinearTransferOETF"]}}function Jm(s,e,n){const r=s.getShaderParameter(e,s.COMPILE_STATUS),c=(s.getShaderInfoLog(e)||"").trim();if(r&&c==="")return"";const u=/ERROR: 0:(\d+)/.exec(c);if(u){const d=parseInt(u[1]);return n.toUpperCase()+`

`+c+`

`+WM(s.getShaderSource(e),d)}else return c}function jM(s,e){const n=XM(e);return[`vec4 ${s}( vec4 value ) {`,`	return ${n[1]}( vec4( value.rgb * ${n[0]}, value.a ) );`,"}"].join(`
`)}const YM={[l0]:"Linear",[c0]:"Reinhard",[u0]:"Cineon",[ud]:"ACESFilmic",[d0]:"AgX",[h0]:"Neutral",[f0]:"Custom"};function qM(s,e){const n=YM[e];return n===void 0?(ht("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+s+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+s+"( vec3 color ) { return "+n+"ToneMapping( color ); }"}const Il=new te;function KM(){Dt.getLuminanceCoefficients(Il);const s=Il.x.toFixed(4),e=Il.y.toFixed(4),n=Il.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${s}, ${e}, ${n} );`,"	return dot( weights, rgb );","}"].join(`
`)}function $M(s){return[s.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",s.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(ea).join(`
`)}function ZM(s){const e=[];for(const n in s){const r=s[n];r!==!1&&e.push("#define "+n+" "+r)}return e.join(`
`)}function JM(s,e){const n={},r=s.getProgramParameter(e,s.ACTIVE_ATTRIBUTES);for(let a=0;a<r;a++){const c=s.getActiveAttrib(e,a),u=c.name;let d=1;c.type===s.FLOAT_MAT2&&(d=2),c.type===s.FLOAT_MAT3&&(d=3),c.type===s.FLOAT_MAT4&&(d=4),n[u]={type:c.type,location:s.getAttribLocation(e,u),locationSize:d}}return n}function ea(s){return s!==""}function Qm(s,e){const n=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return s.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,n).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function e0(s,e){return s.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const QM=/^[ \t]*#include +<([\w\d./]+)>/gm;function ad(s){return s.replace(QM,t1)}const e1=new Map;function t1(s,e){let n=yt[e];if(n===void 0){const r=e1.get(e);if(r!==void 0)n=yt[r],ht('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,r);else throw new Error("Can not resolve #include <"+e+">")}return ad(n)}const n1=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function t0(s){return s.replace(n1,i1)}function i1(s,e,n,r){let a="";for(let c=parseInt(e);c<parseInt(n);c++)a+=r.replace(/\[\s*i\s*\]/g,"[ "+c+" ]").replace(/UNROLLED_LOOP_INDEX/g,c);return a}function n0(s){let e=`precision ${s.precision} float;
	precision ${s.precision} int;
	precision ${s.precision} sampler2D;
	precision ${s.precision} samplerCube;
	precision ${s.precision} sampler3D;
	precision ${s.precision} sampler2DArray;
	precision ${s.precision} sampler2DShadow;
	precision ${s.precision} samplerCubeShadow;
	precision ${s.precision} sampler2DArrayShadow;
	precision ${s.precision} isampler2D;
	precision ${s.precision} isampler3D;
	precision ${s.precision} isamplerCube;
	precision ${s.precision} isampler2DArray;
	precision ${s.precision} usampler2D;
	precision ${s.precision} usampler3D;
	precision ${s.precision} usamplerCube;
	precision ${s.precision} usampler2DArray;
	`;return s.precision==="highp"?e+=`
#define HIGH_PRECISION`:s.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:s.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}const r1={[ta]:"SHADOWMAP_TYPE_PCF",[Qo]:"SHADOWMAP_TYPE_VSM"};function s1(s){return r1[s.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const o1={[hs]:"ENVMAP_TYPE_CUBE",[io]:"ENVMAP_TYPE_CUBE",[ql]:"ENVMAP_TYPE_CUBE_UV"};function a1(s){return s.envMap===!1?"ENVMAP_TYPE_CUBE":o1[s.envMapMode]||"ENVMAP_TYPE_CUBE"}const l1={[io]:"ENVMAP_MODE_REFRACTION"};function c1(s){return s.envMap===!1?"ENVMAP_MODE_REFLECTION":l1[s.envMapMode]||"ENVMAP_MODE_REFLECTION"}const u1={[a0]:"ENVMAP_BLENDING_MULTIPLY",[K_]:"ENVMAP_BLENDING_MIX",[$_]:"ENVMAP_BLENDING_ADD"};function f1(s){return s.envMap===!1?"ENVMAP_BLENDING_NONE":u1[s.combine]||"ENVMAP_BLENDING_NONE"}function d1(s){const e=s.envMapCubeUVHeight;if(e===null)return null;const n=Math.log2(e)-2,r=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,n),112)),texelHeight:r,maxMip:n}}function h1(s,e,n,r){const a=s.getContext(),c=n.defines;let u=n.vertexShader,d=n.fragmentShader;const p=s1(n),m=a1(n),x=c1(n),S=f1(n),_=d1(n),y=$M(n),T=ZM(c),R=a.createProgram();let g,v,b=n.glslVersion?"#version "+n.glslVersion+`
`:"";n.isRawShaderMaterial?(g=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,T].filter(ea).join(`
`),g.length>0&&(g+=`
`),v=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,T].filter(ea).join(`
`),v.length>0&&(v+=`
`)):(g=[n0(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,T,n.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",n.batching?"#define USE_BATCHING":"",n.batchingColor?"#define USE_BATCHING_COLOR":"",n.instancing?"#define USE_INSTANCING":"",n.instancingColor?"#define USE_INSTANCING_COLOR":"",n.instancingMorph?"#define USE_INSTANCING_MORPH":"",n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.map?"#define USE_MAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+x:"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.displacementMap?"#define USE_DISPLACEMENTMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.mapUv?"#define MAP_UV "+n.mapUv:"",n.alphaMapUv?"#define ALPHAMAP_UV "+n.alphaMapUv:"",n.lightMapUv?"#define LIGHTMAP_UV "+n.lightMapUv:"",n.aoMapUv?"#define AOMAP_UV "+n.aoMapUv:"",n.emissiveMapUv?"#define EMISSIVEMAP_UV "+n.emissiveMapUv:"",n.bumpMapUv?"#define BUMPMAP_UV "+n.bumpMapUv:"",n.normalMapUv?"#define NORMALMAP_UV "+n.normalMapUv:"",n.displacementMapUv?"#define DISPLACEMENTMAP_UV "+n.displacementMapUv:"",n.metalnessMapUv?"#define METALNESSMAP_UV "+n.metalnessMapUv:"",n.roughnessMapUv?"#define ROUGHNESSMAP_UV "+n.roughnessMapUv:"",n.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+n.anisotropyMapUv:"",n.clearcoatMapUv?"#define CLEARCOATMAP_UV "+n.clearcoatMapUv:"",n.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+n.clearcoatNormalMapUv:"",n.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+n.clearcoatRoughnessMapUv:"",n.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+n.iridescenceMapUv:"",n.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+n.iridescenceThicknessMapUv:"",n.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+n.sheenColorMapUv:"",n.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+n.sheenRoughnessMapUv:"",n.specularMapUv?"#define SPECULARMAP_UV "+n.specularMapUv:"",n.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+n.specularColorMapUv:"",n.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+n.specularIntensityMapUv:"",n.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+n.transmissionMapUv:"",n.thicknessMapUv?"#define THICKNESSMAP_UV "+n.thicknessMapUv:"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexNormals?"#define HAS_NORMAL":"",n.vertexColors?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.flatShading?"#define FLAT_SHADED":"",n.skinning?"#define USE_SKINNING":"",n.morphTargets?"#define USE_MORPHTARGETS":"",n.morphNormals&&n.flatShading===!1?"#define USE_MORPHNORMALS":"",n.morphColors?"#define USE_MORPHCOLORS":"",n.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+n.morphTextureStride:"",n.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+n.morphTargetsCount:"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+p:"",n.sizeAttenuation?"#define USE_SIZEATTENUATION":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",n.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(ea).join(`
`),v=[n0(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,T,n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",n.map?"#define USE_MAP":"",n.matcap?"#define USE_MATCAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+m:"",n.envMap?"#define "+x:"",n.envMap?"#define "+S:"",_?"#define CUBEUV_TEXEL_WIDTH "+_.texelWidth:"",_?"#define CUBEUV_TEXEL_HEIGHT "+_.texelHeight:"",_?"#define CUBEUV_MAX_MIP "+_.maxMip+".0":"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoat?"#define USE_CLEARCOAT":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.dispersion?"#define USE_DISPERSION":"",n.iridescence?"#define USE_IRIDESCENCE":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaTest?"#define USE_ALPHATEST":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.sheen?"#define USE_SHEEN":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors||n.instancingColor?"#define USE_COLOR":"",n.vertexAlphas||n.batchingColor?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.gradientMap?"#define USE_GRADIENTMAP":"",n.flatShading?"#define FLAT_SHADED":"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+p:"",n.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",n.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",n.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",n.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",n.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",n.toneMapping!==Hi?"#define TONE_MAPPING":"",n.toneMapping!==Hi?yt.tonemapping_pars_fragment:"",n.toneMapping!==Hi?qM("toneMapping",n.toneMapping):"",n.dithering?"#define DITHERING":"",n.opaque?"#define OPAQUE":"",yt.colorspace_pars_fragment,jM("linearToOutputTexel",n.outputColorSpace),KM(),n.useDepthPacking?"#define DEPTH_PACKING "+n.depthPacking:"",`
`].filter(ea).join(`
`)),u=ad(u),u=Qm(u,n),u=e0(u,n),d=ad(d),d=Qm(d,n),d=e0(d,n),u=t0(u),d=t0(d),n.isRawShaderMaterial!==!0&&(b=`#version 300 es
`,g=[y,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+g,v=["#define varying in",n.glslVersion===fm?"":"layout(location = 0) out highp vec4 pc_fragColor;",n.glslVersion===fm?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+v);const I=b+g+u,P=b+v+d,H=$m(a,a.VERTEX_SHADER,I),L=$m(a,a.FRAGMENT_SHADER,P);a.attachShader(R,H),a.attachShader(R,L),n.index0AttributeName!==void 0?a.bindAttribLocation(R,0,n.index0AttributeName):n.morphTargets===!0&&a.bindAttribLocation(R,0,"position"),a.linkProgram(R);function z(k){if(s.debug.checkShaderErrors){const q=a.getProgramInfoLog(R)||"",de=a.getShaderInfoLog(H)||"",ve=a.getShaderInfoLog(L)||"",W=q.trim(),ne=de.trim(),Z=ve.trim();let J=!0,_e=!0;if(a.getProgramParameter(R,a.LINK_STATUS)===!1)if(J=!1,typeof s.debug.onShaderError=="function")s.debug.onShaderError(a,R,H,L);else{const xe=Jm(a,H,"vertex"),O=Jm(a,L,"fragment");Ut("THREE.WebGLProgram: Shader Error "+a.getError()+" - VALIDATE_STATUS "+a.getProgramParameter(R,a.VALIDATE_STATUS)+`

Material Name: `+k.name+`
Material Type: `+k.type+`

Program Info Log: `+W+`
`+xe+`
`+O)}else W!==""?ht("WebGLProgram: Program Info Log:",W):(ne===""||Z==="")&&(_e=!1);_e&&(k.diagnostics={runnable:J,programLog:W,vertexShader:{log:ne,prefix:g},fragmentShader:{log:Z,prefix:v}})}a.deleteShader(H),a.deleteShader(L),w=new kl(a,R),D=JM(a,R)}let w;this.getUniforms=function(){return w===void 0&&z(this),w};let D;this.getAttributes=function(){return D===void 0&&z(this),D};let j=n.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return j===!1&&(j=a.getProgramParameter(R,VM)),j},this.destroy=function(){r.releaseStatesOfProgram(this),a.deleteProgram(R),this.program=void 0},this.type=n.shaderType,this.name=n.shaderName,this.id=GM++,this.cacheKey=e,this.usedTimes=1,this.program=R,this.vertexShader=H,this.fragmentShader=L,this}let p1=0;class m1{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const n=e.vertexShader,r=e.fragmentShader,a=this._getShaderStage(n),c=this._getShaderStage(r),u=this._getShaderCacheForMaterial(e);return u.has(a)===!1&&(u.add(a),a.usedTimes++),u.has(c)===!1&&(u.add(c),c.usedTimes++),this}remove(e){const n=this.materialCache.get(e);for(const r of n)r.usedTimes--,r.usedTimes===0&&this.shaderCache.delete(r.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const n=this.materialCache;let r=n.get(e);return r===void 0&&(r=new Set,n.set(e,r)),r}_getShaderStage(e){const n=this.shaderCache;let r=n.get(e);return r===void 0&&(r=new g1(e),n.set(e,r)),r}}class g1{constructor(e){this.id=p1++,this.code=e,this.usedTimes=0}}function _1(s){return s===ps||s===Bl||s===zl}function v1(s,e,n,r,a,c){const u=new Sd,d=new m1,p=new Set,m=[],x=new Map,S=r.logarithmicDepthBuffer;let _=r.precision;const y={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function T(w){return p.add(w),w===0?"uv":`uv${w}`}function R(w,D,j,k,q,de){const ve=k.fog,W=q.geometry,ne=w.isMeshStandardMaterial||w.isMeshLambertMaterial||w.isMeshPhongMaterial?k.environment:null,Z=w.isMeshStandardMaterial||w.isMeshLambertMaterial&&!w.envMap||w.isMeshPhongMaterial&&!w.envMap,J=e.get(w.envMap||ne,Z),_e=J&&J.mapping===ql?J.image.height:null,xe=y[w.type];w.precision!==null&&(_=r.getMaxPrecision(w.precision),_!==w.precision&&ht("WebGLProgram.getParameters:",w.precision,"not supported, using",_,"instead."));const O=W.morphAttributes.position||W.morphAttributes.normal||W.morphAttributes.color,ie=O!==void 0?O.length:0;let Be=0;W.morphAttributes.position!==void 0&&(Be=1),W.morphAttributes.normal!==void 0&&(Be=2),W.morphAttributes.color!==void 0&&(Be=3);let Ge,ze,re,Ee;if(xe){const Xe=ki[xe];Ge=Xe.vertexShader,ze=Xe.fragmentShader}else Ge=w.vertexShader,ze=w.fragmentShader,d.update(w),re=d.getVertexShaderID(w),Ee=d.getFragmentShaderID(w);const U=s.getRenderTarget(),N=s.state.buffers.depth.getReversed(),Ue=q.isInstancedMesh===!0,Ke=q.isBatchedMesh===!0,gt=!!w.map,at=!!w.matcap,xt=!!J,vt=!!w.aoMap,ot=!!w.lightMap,bt=!!w.bumpMap,St=!!w.normalMap,Ft=!!w.displacementMap,G=!!w.emissiveMap,Pt=!!w.metalnessMap,ft=!!w.roughnessMap,wt=w.anisotropy>0,Fe=w.clearcoat>0,Bt=w.dispersion>0,C=w.iridescence>0,M=w.sheen>0,Q=w.transmission>0,ye=wt&&!!w.anisotropyMap,we=Fe&&!!w.clearcoatMap,Ce=Fe&&!!w.clearcoatNormalMap,Ie=Fe&&!!w.clearcoatRoughnessMap,he=C&&!!w.iridescenceMap,Me=C&&!!w.iridescenceThicknessMap,He=M&&!!w.sheenColorMap,pe=M&&!!w.sheenRoughnessMap,X=!!w.specularMap,ee=!!w.specularColorMap,Le=!!w.specularIntensityMap,Ve=Q&&!!w.transmissionMap,lt=Q&&!!w.thicknessMap,B=!!w.gradientMap,Te=!!w.alphaMap,Se=w.alphaTest>0,ue=!!w.alphaHash,$=!!w.extensions;let se=Hi;w.toneMapped&&(U===null||U.isXRRenderTarget===!0)&&(se=s.toneMapping);const Re={shaderID:xe,shaderType:w.type,shaderName:w.name,vertexShader:Ge,fragmentShader:ze,defines:w.defines,customVertexShaderID:re,customFragmentShaderID:Ee,isRawShaderMaterial:w.isRawShaderMaterial===!0,glslVersion:w.glslVersion,precision:_,batching:Ke,batchingColor:Ke&&q._colorsTexture!==null,instancing:Ue,instancingColor:Ue&&q.instanceColor!==null,instancingMorph:Ue&&q.morphTexture!==null,outputColorSpace:U===null?s.outputColorSpace:U.isXRRenderTarget===!0?U.texture.colorSpace:Dt.workingColorSpace,alphaToCoverage:!!w.alphaToCoverage,map:gt,matcap:at,envMap:xt,envMapMode:xt&&J.mapping,envMapCubeUVHeight:_e,aoMap:vt,lightMap:ot,bumpMap:bt,normalMap:St,displacementMap:Ft,emissiveMap:G,normalMapObjectSpace:St&&w.normalMapType===Q_,normalMapTangentSpace:St&&w.normalMapType===nd,packedNormalMap:St&&w.normalMapType===nd&&_1(w.normalMap.format),metalnessMap:Pt,roughnessMap:ft,anisotropy:wt,anisotropyMap:ye,clearcoat:Fe,clearcoatMap:we,clearcoatNormalMap:Ce,clearcoatRoughnessMap:Ie,dispersion:Bt,iridescence:C,iridescenceMap:he,iridescenceThicknessMap:Me,sheen:M,sheenColorMap:He,sheenRoughnessMap:pe,specularMap:X,specularColorMap:ee,specularIntensityMap:Le,transmission:Q,transmissionMap:Ve,thicknessMap:lt,gradientMap:B,opaque:w.transparent===!1&&w.blending===eo&&w.alphaToCoverage===!1,alphaMap:Te,alphaTest:Se,alphaHash:ue,combine:w.combine,mapUv:gt&&T(w.map.channel),aoMapUv:vt&&T(w.aoMap.channel),lightMapUv:ot&&T(w.lightMap.channel),bumpMapUv:bt&&T(w.bumpMap.channel),normalMapUv:St&&T(w.normalMap.channel),displacementMapUv:Ft&&T(w.displacementMap.channel),emissiveMapUv:G&&T(w.emissiveMap.channel),metalnessMapUv:Pt&&T(w.metalnessMap.channel),roughnessMapUv:ft&&T(w.roughnessMap.channel),anisotropyMapUv:ye&&T(w.anisotropyMap.channel),clearcoatMapUv:we&&T(w.clearcoatMap.channel),clearcoatNormalMapUv:Ce&&T(w.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Ie&&T(w.clearcoatRoughnessMap.channel),iridescenceMapUv:he&&T(w.iridescenceMap.channel),iridescenceThicknessMapUv:Me&&T(w.iridescenceThicknessMap.channel),sheenColorMapUv:He&&T(w.sheenColorMap.channel),sheenRoughnessMapUv:pe&&T(w.sheenRoughnessMap.channel),specularMapUv:X&&T(w.specularMap.channel),specularColorMapUv:ee&&T(w.specularColorMap.channel),specularIntensityMapUv:Le&&T(w.specularIntensityMap.channel),transmissionMapUv:Ve&&T(w.transmissionMap.channel),thicknessMapUv:lt&&T(w.thicknessMap.channel),alphaMapUv:Te&&T(w.alphaMap.channel),vertexTangents:!!W.attributes.tangent&&(St||wt),vertexNormals:!!W.attributes.normal,vertexColors:w.vertexColors,vertexAlphas:w.vertexColors===!0&&!!W.attributes.color&&W.attributes.color.itemSize===4,pointsUvs:q.isPoints===!0&&!!W.attributes.uv&&(gt||Te),fog:!!ve,useFog:w.fog===!0,fogExp2:!!ve&&ve.isFogExp2,flatShading:w.wireframe===!1&&(w.flatShading===!0||W.attributes.normal===void 0&&St===!1&&(w.isMeshLambertMaterial||w.isMeshPhongMaterial||w.isMeshStandardMaterial||w.isMeshPhysicalMaterial)),sizeAttenuation:w.sizeAttenuation===!0,logarithmicDepthBuffer:S,reversedDepthBuffer:N,skinning:q.isSkinnedMesh===!0,morphTargets:W.morphAttributes.position!==void 0,morphNormals:W.morphAttributes.normal!==void 0,morphColors:W.morphAttributes.color!==void 0,morphTargetsCount:ie,morphTextureStride:Be,numDirLights:D.directional.length,numPointLights:D.point.length,numSpotLights:D.spot.length,numSpotLightMaps:D.spotLightMap.length,numRectAreaLights:D.rectArea.length,numHemiLights:D.hemi.length,numDirLightShadows:D.directionalShadowMap.length,numPointLightShadows:D.pointShadowMap.length,numSpotLightShadows:D.spotShadowMap.length,numSpotLightShadowsWithMaps:D.numSpotLightShadowsWithMaps,numLightProbes:D.numLightProbes,numLightProbeGrids:de.length,numClippingPlanes:c.numPlanes,numClipIntersection:c.numIntersection,dithering:w.dithering,shadowMapEnabled:s.shadowMap.enabled&&j.length>0,shadowMapType:s.shadowMap.type,toneMapping:se,decodeVideoTexture:gt&&w.map.isVideoTexture===!0&&Dt.getTransfer(w.map.colorSpace)===Gt,decodeVideoTextureEmissive:G&&w.emissiveMap.isVideoTexture===!0&&Dt.getTransfer(w.emissiveMap.colorSpace)===Gt,premultipliedAlpha:w.premultipliedAlpha,doubleSided:w.side===pi,flipSided:w.side===Zn,useDepthPacking:w.depthPacking>=0,depthPacking:w.depthPacking||0,index0AttributeName:w.index0AttributeName,extensionClipCullDistance:$&&w.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:($&&w.extensions.multiDraw===!0||Ke)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:w.customProgramCacheKey()};return Re.vertexUv1s=p.has(1),Re.vertexUv2s=p.has(2),Re.vertexUv3s=p.has(3),p.clear(),Re}function g(w){const D=[];if(w.shaderID?D.push(w.shaderID):(D.push(w.customVertexShaderID),D.push(w.customFragmentShaderID)),w.defines!==void 0)for(const j in w.defines)D.push(j),D.push(w.defines[j]);return w.isRawShaderMaterial===!1&&(v(D,w),b(D,w),D.push(s.outputColorSpace)),D.push(w.customProgramCacheKey),D.join()}function v(w,D){w.push(D.precision),w.push(D.outputColorSpace),w.push(D.envMapMode),w.push(D.envMapCubeUVHeight),w.push(D.mapUv),w.push(D.alphaMapUv),w.push(D.lightMapUv),w.push(D.aoMapUv),w.push(D.bumpMapUv),w.push(D.normalMapUv),w.push(D.displacementMapUv),w.push(D.emissiveMapUv),w.push(D.metalnessMapUv),w.push(D.roughnessMapUv),w.push(D.anisotropyMapUv),w.push(D.clearcoatMapUv),w.push(D.clearcoatNormalMapUv),w.push(D.clearcoatRoughnessMapUv),w.push(D.iridescenceMapUv),w.push(D.iridescenceThicknessMapUv),w.push(D.sheenColorMapUv),w.push(D.sheenRoughnessMapUv),w.push(D.specularMapUv),w.push(D.specularColorMapUv),w.push(D.specularIntensityMapUv),w.push(D.transmissionMapUv),w.push(D.thicknessMapUv),w.push(D.combine),w.push(D.fogExp2),w.push(D.sizeAttenuation),w.push(D.morphTargetsCount),w.push(D.morphAttributeCount),w.push(D.numDirLights),w.push(D.numPointLights),w.push(D.numSpotLights),w.push(D.numSpotLightMaps),w.push(D.numHemiLights),w.push(D.numRectAreaLights),w.push(D.numDirLightShadows),w.push(D.numPointLightShadows),w.push(D.numSpotLightShadows),w.push(D.numSpotLightShadowsWithMaps),w.push(D.numLightProbes),w.push(D.shadowMapType),w.push(D.toneMapping),w.push(D.numClippingPlanes),w.push(D.numClipIntersection),w.push(D.depthPacking)}function b(w,D){u.disableAll(),D.instancing&&u.enable(0),D.instancingColor&&u.enable(1),D.instancingMorph&&u.enable(2),D.matcap&&u.enable(3),D.envMap&&u.enable(4),D.normalMapObjectSpace&&u.enable(5),D.normalMapTangentSpace&&u.enable(6),D.clearcoat&&u.enable(7),D.iridescence&&u.enable(8),D.alphaTest&&u.enable(9),D.vertexColors&&u.enable(10),D.vertexAlphas&&u.enable(11),D.vertexUv1s&&u.enable(12),D.vertexUv2s&&u.enable(13),D.vertexUv3s&&u.enable(14),D.vertexTangents&&u.enable(15),D.anisotropy&&u.enable(16),D.alphaHash&&u.enable(17),D.batching&&u.enable(18),D.dispersion&&u.enable(19),D.batchingColor&&u.enable(20),D.gradientMap&&u.enable(21),D.packedNormalMap&&u.enable(22),D.vertexNormals&&u.enable(23),w.push(u.mask),u.disableAll(),D.fog&&u.enable(0),D.useFog&&u.enable(1),D.flatShading&&u.enable(2),D.logarithmicDepthBuffer&&u.enable(3),D.reversedDepthBuffer&&u.enable(4),D.skinning&&u.enable(5),D.morphTargets&&u.enable(6),D.morphNormals&&u.enable(7),D.morphColors&&u.enable(8),D.premultipliedAlpha&&u.enable(9),D.shadowMapEnabled&&u.enable(10),D.doubleSided&&u.enable(11),D.flipSided&&u.enable(12),D.useDepthPacking&&u.enable(13),D.dithering&&u.enable(14),D.transmission&&u.enable(15),D.sheen&&u.enable(16),D.opaque&&u.enable(17),D.pointsUvs&&u.enable(18),D.decodeVideoTexture&&u.enable(19),D.decodeVideoTextureEmissive&&u.enable(20),D.alphaToCoverage&&u.enable(21),D.numLightProbeGrids>0&&u.enable(22),w.push(u.mask)}function I(w){const D=y[w.type];let j;if(D){const k=ki[D];j=Ov.clone(k.uniforms)}else j=w.uniforms;return j}function P(w,D){let j=x.get(D);return j!==void 0?++j.usedTimes:(j=new h1(s,D,w,a),m.push(j),x.set(D,j)),j}function H(w){if(--w.usedTimes===0){const D=m.indexOf(w);m[D]=m[m.length-1],m.pop(),x.delete(w.cacheKey),w.destroy()}}function L(w){d.remove(w)}function z(){d.dispose()}return{getParameters:R,getProgramCacheKey:g,getUniforms:I,acquireProgram:P,releaseProgram:H,releaseShaderCache:L,programs:m,dispose:z}}function x1(){let s=new WeakMap;function e(u){return s.has(u)}function n(u){let d=s.get(u);return d===void 0&&(d={},s.set(u,d)),d}function r(u){s.delete(u)}function a(u,d,p){s.get(u)[d]=p}function c(){s=new WeakMap}return{has:e,get:n,remove:r,update:a,dispose:c}}function S1(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.material.id!==e.material.id?s.material.id-e.material.id:s.materialVariant!==e.materialVariant?s.materialVariant-e.materialVariant:s.z!==e.z?s.z-e.z:s.id-e.id}function i0(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.z!==e.z?e.z-s.z:s.id-e.id}function r0(){const s=[];let e=0;const n=[],r=[],a=[];function c(){e=0,n.length=0,r.length=0,a.length=0}function u(_){let y=0;return _.isInstancedMesh&&(y+=2),_.isSkinnedMesh&&(y+=1),y}function d(_,y,T,R,g,v){let b=s[e];return b===void 0?(b={id:_.id,object:_,geometry:y,material:T,materialVariant:u(_),groupOrder:R,renderOrder:_.renderOrder,z:g,group:v},s[e]=b):(b.id=_.id,b.object=_,b.geometry=y,b.material=T,b.materialVariant=u(_),b.groupOrder=R,b.renderOrder=_.renderOrder,b.z=g,b.group=v),e++,b}function p(_,y,T,R,g,v){const b=d(_,y,T,R,g,v);T.transmission>0?r.push(b):T.transparent===!0?a.push(b):n.push(b)}function m(_,y,T,R,g,v){const b=d(_,y,T,R,g,v);T.transmission>0?r.unshift(b):T.transparent===!0?a.unshift(b):n.unshift(b)}function x(_,y){n.length>1&&n.sort(_||S1),r.length>1&&r.sort(y||i0),a.length>1&&a.sort(y||i0)}function S(){for(let _=e,y=s.length;_<y;_++){const T=s[_];if(T.id===null)break;T.id=null,T.object=null,T.geometry=null,T.material=null,T.group=null}}return{opaque:n,transmissive:r,transparent:a,init:c,push:p,unshift:m,finish:S,sort:x}}function y1(){let s=new WeakMap;function e(r,a){const c=s.get(r);let u;return c===void 0?(u=new r0,s.set(r,[u])):a>=c.length?(u=new r0,c.push(u)):u=c[a],u}function n(){s=new WeakMap}return{get:e,dispose:n}}function M1(){const s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let n;switch(e.type){case"DirectionalLight":n={direction:new te,color:new Mt};break;case"SpotLight":n={position:new te,direction:new te,color:new Mt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":n={position:new te,color:new Mt,distance:0,decay:0};break;case"HemisphereLight":n={direction:new te,skyColor:new Mt,groundColor:new Mt};break;case"RectAreaLight":n={color:new Mt,position:new te,halfWidth:new te,halfHeight:new te};break}return s[e.id]=n,n}}}function E1(){const s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let n;switch(e.type){case"DirectionalLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new It};break;case"SpotLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new It};break;case"PointLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new It,shadowCameraNear:1,shadowCameraFar:1e3};break}return s[e.id]=n,n}}}let w1=0;function T1(s,e){return(e.castShadow?2:0)-(s.castShadow?2:0)+(e.map?1:0)-(s.map?1:0)}function A1(s){const e=new M1,n=E1(),r={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let m=0;m<9;m++)r.probe.push(new te);const a=new te,c=new on,u=new on;function d(m){let x=0,S=0,_=0;for(let D=0;D<9;D++)r.probe[D].set(0,0,0);let y=0,T=0,R=0,g=0,v=0,b=0,I=0,P=0,H=0,L=0,z=0;m.sort(T1);for(let D=0,j=m.length;D<j;D++){const k=m[D],q=k.color,de=k.intensity,ve=k.distance;let W=null;if(k.shadow&&k.shadow.map&&(k.shadow.map.texture.format===ps?W=k.shadow.map.texture:W=k.shadow.map.depthTexture||k.shadow.map.texture),k.isAmbientLight)x+=q.r*de,S+=q.g*de,_+=q.b*de;else if(k.isLightProbe){for(let ne=0;ne<9;ne++)r.probe[ne].addScaledVector(k.sh.coefficients[ne],de);z++}else if(k.isDirectionalLight){const ne=e.get(k);if(ne.color.copy(k.color).multiplyScalar(k.intensity),k.castShadow){const Z=k.shadow,J=n.get(k);J.shadowIntensity=Z.intensity,J.shadowBias=Z.bias,J.shadowNormalBias=Z.normalBias,J.shadowRadius=Z.radius,J.shadowMapSize=Z.mapSize,r.directionalShadow[y]=J,r.directionalShadowMap[y]=W,r.directionalShadowMatrix[y]=k.shadow.matrix,b++}r.directional[y]=ne,y++}else if(k.isSpotLight){const ne=e.get(k);ne.position.setFromMatrixPosition(k.matrixWorld),ne.color.copy(q).multiplyScalar(de),ne.distance=ve,ne.coneCos=Math.cos(k.angle),ne.penumbraCos=Math.cos(k.angle*(1-k.penumbra)),ne.decay=k.decay,r.spot[R]=ne;const Z=k.shadow;if(k.map&&(r.spotLightMap[H]=k.map,H++,Z.updateMatrices(k),k.castShadow&&L++),r.spotLightMatrix[R]=Z.matrix,k.castShadow){const J=n.get(k);J.shadowIntensity=Z.intensity,J.shadowBias=Z.bias,J.shadowNormalBias=Z.normalBias,J.shadowRadius=Z.radius,J.shadowMapSize=Z.mapSize,r.spotShadow[R]=J,r.spotShadowMap[R]=W,P++}R++}else if(k.isRectAreaLight){const ne=e.get(k);ne.color.copy(q).multiplyScalar(de),ne.halfWidth.set(k.width*.5,0,0),ne.halfHeight.set(0,k.height*.5,0),r.rectArea[g]=ne,g++}else if(k.isPointLight){const ne=e.get(k);if(ne.color.copy(k.color).multiplyScalar(k.intensity),ne.distance=k.distance,ne.decay=k.decay,k.castShadow){const Z=k.shadow,J=n.get(k);J.shadowIntensity=Z.intensity,J.shadowBias=Z.bias,J.shadowNormalBias=Z.normalBias,J.shadowRadius=Z.radius,J.shadowMapSize=Z.mapSize,J.shadowCameraNear=Z.camera.near,J.shadowCameraFar=Z.camera.far,r.pointShadow[T]=J,r.pointShadowMap[T]=W,r.pointShadowMatrix[T]=k.shadow.matrix,I++}r.point[T]=ne,T++}else if(k.isHemisphereLight){const ne=e.get(k);ne.skyColor.copy(k.color).multiplyScalar(de),ne.groundColor.copy(k.groundColor).multiplyScalar(de),r.hemi[v]=ne,v++}}g>0&&(s.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=We.LTC_FLOAT_1,r.rectAreaLTC2=We.LTC_FLOAT_2):(r.rectAreaLTC1=We.LTC_HALF_1,r.rectAreaLTC2=We.LTC_HALF_2)),r.ambient[0]=x,r.ambient[1]=S,r.ambient[2]=_;const w=r.hash;(w.directionalLength!==y||w.pointLength!==T||w.spotLength!==R||w.rectAreaLength!==g||w.hemiLength!==v||w.numDirectionalShadows!==b||w.numPointShadows!==I||w.numSpotShadows!==P||w.numSpotMaps!==H||w.numLightProbes!==z)&&(r.directional.length=y,r.spot.length=R,r.rectArea.length=g,r.point.length=T,r.hemi.length=v,r.directionalShadow.length=b,r.directionalShadowMap.length=b,r.pointShadow.length=I,r.pointShadowMap.length=I,r.spotShadow.length=P,r.spotShadowMap.length=P,r.directionalShadowMatrix.length=b,r.pointShadowMatrix.length=I,r.spotLightMatrix.length=P+H-L,r.spotLightMap.length=H,r.numSpotLightShadowsWithMaps=L,r.numLightProbes=z,w.directionalLength=y,w.pointLength=T,w.spotLength=R,w.rectAreaLength=g,w.hemiLength=v,w.numDirectionalShadows=b,w.numPointShadows=I,w.numSpotShadows=P,w.numSpotMaps=H,w.numLightProbes=z,r.version=w1++)}function p(m,x){let S=0,_=0,y=0,T=0,R=0;const g=x.matrixWorldInverse;for(let v=0,b=m.length;v<b;v++){const I=m[v];if(I.isDirectionalLight){const P=r.directional[S];P.direction.setFromMatrixPosition(I.matrixWorld),a.setFromMatrixPosition(I.target.matrixWorld),P.direction.sub(a),P.direction.transformDirection(g),S++}else if(I.isSpotLight){const P=r.spot[y];P.position.setFromMatrixPosition(I.matrixWorld),P.position.applyMatrix4(g),P.direction.setFromMatrixPosition(I.matrixWorld),a.setFromMatrixPosition(I.target.matrixWorld),P.direction.sub(a),P.direction.transformDirection(g),y++}else if(I.isRectAreaLight){const P=r.rectArea[T];P.position.setFromMatrixPosition(I.matrixWorld),P.position.applyMatrix4(g),u.identity(),c.copy(I.matrixWorld),c.premultiply(g),u.extractRotation(c),P.halfWidth.set(I.width*.5,0,0),P.halfHeight.set(0,I.height*.5,0),P.halfWidth.applyMatrix4(u),P.halfHeight.applyMatrix4(u),T++}else if(I.isPointLight){const P=r.point[_];P.position.setFromMatrixPosition(I.matrixWorld),P.position.applyMatrix4(g),_++}else if(I.isHemisphereLight){const P=r.hemi[R];P.direction.setFromMatrixPosition(I.matrixWorld),P.direction.transformDirection(g),R++}}}return{setup:d,setupView:p,state:r}}function s0(s){const e=new A1(s),n=[],r=[],a=[];function c(_){S.camera=_,n.length=0,r.length=0,a.length=0}function u(_){n.push(_)}function d(_){r.push(_)}function p(_){a.push(_)}function m(){e.setup(n)}function x(_){e.setupView(n,_)}const S={lightsArray:n,shadowsArray:r,lightProbeGridArray:a,camera:null,lights:e,transmissionRenderTarget:{},textureUnits:0};return{init:c,state:S,setupLights:m,setupLightsView:x,pushLight:u,pushShadow:d,pushLightProbeGrid:p}}function b1(s){let e=new WeakMap;function n(a,c=0){const u=e.get(a);let d;return u===void 0?(d=new s0(s),e.set(a,[d])):c>=u.length?(d=new s0(s),u.push(d)):d=u[c],d}function r(){e=new WeakMap}return{get:n,dispose:r}}const C1=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,R1=`uniform sampler2D shadow_pass;
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
}`,P1=[new te(1,0,0),new te(-1,0,0),new te(0,1,0),new te(0,-1,0),new te(0,0,1),new te(0,0,-1)],L1=[new te(0,-1,0),new te(0,-1,0),new te(0,0,1),new te(0,0,-1),new te(0,-1,0),new te(0,-1,0)],o0=new on,Jo=new te,hf=new te;function D1(s,e,n){let r=new Ed;const a=new It,c=new It,u=new sn,d=new Vv,p=new Gv,m={},x=n.maxTextureSize,S={[Hr]:Zn,[Zn]:Hr,[pi]:pi},_=new Xi({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new It},radius:{value:4}},vertexShader:C1,fragmentShader:R1}),y=_.clone();y.defines.HORIZONTAL_PASS=1;const T=new oi;T.setAttribute("position",new Gi(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const R=new De(T,_),g=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=ta;let v=this.type;this.render=function(L,z,w){if(g.enabled===!1||g.autoUpdate===!1&&g.needsUpdate===!1||L.length===0)return;this.type===P_&&(ht("WebGLShadowMap: PCFSoftShadowMap has been deprecated. Using PCFShadowMap instead."),this.type=ta);const D=s.getRenderTarget(),j=s.getActiveCubeFace(),k=s.getActiveMipmapLevel(),q=s.state;q.setBlending(lr),q.buffers.depth.getReversed()===!0?q.buffers.color.setClear(0,0,0,0):q.buffers.color.setClear(1,1,1,1),q.buffers.depth.setTest(!0),q.setScissorTest(!1);const de=v!==this.type;de&&z.traverse(function(ve){ve.material&&(Array.isArray(ve.material)?ve.material.forEach(W=>W.needsUpdate=!0):ve.material.needsUpdate=!0)});for(let ve=0,W=L.length;ve<W;ve++){const ne=L[ve],Z=ne.shadow;if(Z===void 0){ht("WebGLShadowMap:",ne,"has no shadow.");continue}if(Z.autoUpdate===!1&&Z.needsUpdate===!1)continue;a.copy(Z.mapSize);const J=Z.getFrameExtents();a.multiply(J),c.copy(Z.mapSize),(a.x>x||a.y>x)&&(a.x>x&&(c.x=Math.floor(x/J.x),a.x=c.x*J.x,Z.mapSize.x=c.x),a.y>x&&(c.y=Math.floor(x/J.y),a.y=c.y*J.y,Z.mapSize.y=c.y));const _e=s.state.buffers.depth.getReversed();if(Z.camera._reversedDepth=_e,Z.map===null||de===!0){if(Z.map!==null&&(Z.map.depthTexture!==null&&(Z.map.depthTexture.dispose(),Z.map.depthTexture=null),Z.map.dispose()),this.type===Qo){if(ne.isPointLight){ht("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}Z.map=new Vi(a.x,a.y,{format:ps,type:ur,minFilter:Nn,magFilter:Nn,generateMipmaps:!1}),Z.map.texture.name=ne.name+".shadowMap",Z.map.depthTexture=new ro(a.x,a.y,Bi),Z.map.depthTexture.name=ne.name+".shadowMapDepth",Z.map.depthTexture.format=fr,Z.map.depthTexture.compareFunction=null,Z.map.depthTexture.minFilter=An,Z.map.depthTexture.magFilter=An}else ne.isPointLight?(Z.map=new U0(a.x),Z.map.depthTexture=new Uv(a.x,Wi)):(Z.map=new Vi(a.x,a.y),Z.map.depthTexture=new ro(a.x,a.y,Wi)),Z.map.depthTexture.name=ne.name+".shadowMap",Z.map.depthTexture.format=fr,this.type===ta?(Z.map.depthTexture.compareFunction=_e?vd:_d,Z.map.depthTexture.minFilter=Nn,Z.map.depthTexture.magFilter=Nn):(Z.map.depthTexture.compareFunction=null,Z.map.depthTexture.minFilter=An,Z.map.depthTexture.magFilter=An);Z.camera.updateProjectionMatrix()}const xe=Z.map.isWebGLCubeRenderTarget?6:1;for(let O=0;O<xe;O++){if(Z.map.isWebGLCubeRenderTarget)s.setRenderTarget(Z.map,O),s.clear();else{O===0&&(s.setRenderTarget(Z.map),s.clear());const ie=Z.getViewport(O);u.set(c.x*ie.x,c.y*ie.y,c.x*ie.z,c.y*ie.w),q.viewport(u)}if(ne.isPointLight){const ie=Z.camera,Be=Z.matrix,Ge=ne.distance||ie.far;Ge!==ie.far&&(ie.far=Ge,ie.updateProjectionMatrix()),Jo.setFromMatrixPosition(ne.matrixWorld),ie.position.copy(Jo),hf.copy(ie.position),hf.add(P1[O]),ie.up.copy(L1[O]),ie.lookAt(hf),ie.updateMatrixWorld(),Be.makeTranslation(-Jo.x,-Jo.y,-Jo.z),o0.multiplyMatrices(ie.projectionMatrix,ie.matrixWorldInverse),Z._frustum.setFromProjectionMatrix(o0,ie.coordinateSystem,ie.reversedDepth)}else Z.updateMatrices(ne);r=Z.getFrustum(),P(z,w,Z.camera,ne,this.type)}Z.isPointLightShadow!==!0&&this.type===Qo&&b(Z,w),Z.needsUpdate=!1}v=this.type,g.needsUpdate=!1,s.setRenderTarget(D,j,k)};function b(L,z){const w=e.update(R);_.defines.VSM_SAMPLES!==L.blurSamples&&(_.defines.VSM_SAMPLES=L.blurSamples,y.defines.VSM_SAMPLES=L.blurSamples,_.needsUpdate=!0,y.needsUpdate=!0),L.mapPass===null&&(L.mapPass=new Vi(a.x,a.y,{format:ps,type:ur})),_.uniforms.shadow_pass.value=L.map.depthTexture,_.uniforms.resolution.value=L.mapSize,_.uniforms.radius.value=L.radius,s.setRenderTarget(L.mapPass),s.clear(),s.renderBufferDirect(z,null,w,_,R,null),y.uniforms.shadow_pass.value=L.mapPass.texture,y.uniforms.resolution.value=L.mapSize,y.uniforms.radius.value=L.radius,s.setRenderTarget(L.map),s.clear(),s.renderBufferDirect(z,null,w,y,R,null)}function I(L,z,w,D){let j=null;const k=w.isPointLight===!0?L.customDistanceMaterial:L.customDepthMaterial;if(k!==void 0)j=k;else if(j=w.isPointLight===!0?p:d,s.localClippingEnabled&&z.clipShadows===!0&&Array.isArray(z.clippingPlanes)&&z.clippingPlanes.length!==0||z.displacementMap&&z.displacementScale!==0||z.alphaMap&&z.alphaTest>0||z.map&&z.alphaTest>0||z.alphaToCoverage===!0){const q=j.uuid,de=z.uuid;let ve=m[q];ve===void 0&&(ve={},m[q]=ve);let W=ve[de];W===void 0&&(W=j.clone(),ve[de]=W,z.addEventListener("dispose",H)),j=W}if(j.visible=z.visible,j.wireframe=z.wireframe,D===Qo?j.side=z.shadowSide!==null?z.shadowSide:z.side:j.side=z.shadowSide!==null?z.shadowSide:S[z.side],j.alphaMap=z.alphaMap,j.alphaTest=z.alphaToCoverage===!0?.5:z.alphaTest,j.map=z.map,j.clipShadows=z.clipShadows,j.clippingPlanes=z.clippingPlanes,j.clipIntersection=z.clipIntersection,j.displacementMap=z.displacementMap,j.displacementScale=z.displacementScale,j.displacementBias=z.displacementBias,j.wireframeLinewidth=z.wireframeLinewidth,j.linewidth=z.linewidth,w.isPointLight===!0&&j.isMeshDistanceMaterial===!0){const q=s.properties.get(j);q.light=w}return j}function P(L,z,w,D,j){if(L.visible===!1)return;if(L.layers.test(z.layers)&&(L.isMesh||L.isLine||L.isPoints)&&(L.castShadow||L.receiveShadow&&j===Qo)&&(!L.frustumCulled||r.intersectsObject(L))){L.modelViewMatrix.multiplyMatrices(w.matrixWorldInverse,L.matrixWorld);const de=e.update(L),ve=L.material;if(Array.isArray(ve)){const W=de.groups;for(let ne=0,Z=W.length;ne<Z;ne++){const J=W[ne],_e=ve[J.materialIndex];if(_e&&_e.visible){const xe=I(L,_e,D,j);L.onBeforeShadow(s,L,z,w,de,xe,J),s.renderBufferDirect(w,null,de,xe,L,J),L.onAfterShadow(s,L,z,w,de,xe,J)}}}else if(ve.visible){const W=I(L,ve,D,j);L.onBeforeShadow(s,L,z,w,de,W,null),s.renderBufferDirect(w,null,de,W,L,null),L.onAfterShadow(s,L,z,w,de,W,null)}}const q=L.children;for(let de=0,ve=q.length;de<ve;de++)P(q[de],z,w,D,j)}function H(L){L.target.removeEventListener("dispose",H);for(const w in m){const D=m[w],j=L.target.uuid;j in D&&(D[j].dispose(),delete D[j])}}}function I1(s,e){function n(){let B=!1;const Te=new sn;let Se=null;const ue=new sn(0,0,0,0);return{setMask:function($){Se!==$&&!B&&(s.colorMask($,$,$,$),Se=$)},setLocked:function($){B=$},setClear:function($,se,Re,Xe,st){st===!0&&($*=Xe,se*=Xe,Re*=Xe),Te.set($,se,Re,Xe),ue.equals(Te)===!1&&(s.clearColor($,se,Re,Xe),ue.copy(Te))},reset:function(){B=!1,Se=null,ue.set(-1,0,0,0)}}}function r(){let B=!1,Te=!1,Se=null,ue=null,$=null;return{setReversed:function(se){if(Te!==se){const Re=e.get("EXT_clip_control");se?Re.clipControlEXT(Re.LOWER_LEFT_EXT,Re.ZERO_TO_ONE_EXT):Re.clipControlEXT(Re.LOWER_LEFT_EXT,Re.NEGATIVE_ONE_TO_ONE_EXT),Te=se;const Xe=$;$=null,this.setClear(Xe)}},getReversed:function(){return Te},setTest:function(se){se?U(s.DEPTH_TEST):N(s.DEPTH_TEST)},setMask:function(se){Se!==se&&!B&&(s.depthMask(se),Se=se)},setFunc:function(se){if(Te&&(se=cv[se]),ue!==se){switch(se){case _f:s.depthFunc(s.NEVER);break;case vf:s.depthFunc(s.ALWAYS);break;case xf:s.depthFunc(s.LESS);break;case no:s.depthFunc(s.LEQUAL);break;case Sf:s.depthFunc(s.EQUAL);break;case yf:s.depthFunc(s.GEQUAL);break;case Mf:s.depthFunc(s.GREATER);break;case Ef:s.depthFunc(s.NOTEQUAL);break;default:s.depthFunc(s.LEQUAL)}ue=se}},setLocked:function(se){B=se},setClear:function(se){$!==se&&($=se,Te&&(se=1-se),s.clearDepth(se))},reset:function(){B=!1,Se=null,ue=null,$=null,Te=!1}}}function a(){let B=!1,Te=null,Se=null,ue=null,$=null,se=null,Re=null,Xe=null,st=null;return{setTest:function(Je){B||(Je?U(s.STENCIL_TEST):N(s.STENCIL_TEST))},setMask:function(Je){Te!==Je&&!B&&(s.stencilMask(Je),Te=Je)},setFunc:function(Je,Wt,Qt){(Se!==Je||ue!==Wt||$!==Qt)&&(s.stencilFunc(Je,Wt,Qt),Se=Je,ue=Wt,$=Qt)},setOp:function(Je,Wt,Qt){(se!==Je||Re!==Wt||Xe!==Qt)&&(s.stencilOp(Je,Wt,Qt),se=Je,Re=Wt,Xe=Qt)},setLocked:function(Je){B=Je},setClear:function(Je){st!==Je&&(s.clearStencil(Je),st=Je)},reset:function(){B=!1,Te=null,Se=null,ue=null,$=null,se=null,Re=null,Xe=null,st=null}}}const c=new n,u=new r,d=new a,p=new WeakMap,m=new WeakMap;let x={},S={},_={},y=new WeakMap,T=[],R=null,g=!1,v=null,b=null,I=null,P=null,H=null,L=null,z=null,w=new Mt(0,0,0),D=0,j=!1,k=null,q=null,de=null,ve=null,W=null;const ne=s.getParameter(s.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let Z=!1,J=0;const _e=s.getParameter(s.VERSION);_e.indexOf("WebGL")!==-1?(J=parseFloat(/^WebGL (\d)/.exec(_e)[1]),Z=J>=1):_e.indexOf("OpenGL ES")!==-1&&(J=parseFloat(/^OpenGL ES (\d)/.exec(_e)[1]),Z=J>=2);let xe=null,O={};const ie=s.getParameter(s.SCISSOR_BOX),Be=s.getParameter(s.VIEWPORT),Ge=new sn().fromArray(ie),ze=new sn().fromArray(Be);function re(B,Te,Se,ue){const $=new Uint8Array(4),se=s.createTexture();s.bindTexture(B,se),s.texParameteri(B,s.TEXTURE_MIN_FILTER,s.NEAREST),s.texParameteri(B,s.TEXTURE_MAG_FILTER,s.NEAREST);for(let Re=0;Re<Se;Re++)B===s.TEXTURE_3D||B===s.TEXTURE_2D_ARRAY?s.texImage3D(Te,0,s.RGBA,1,1,ue,0,s.RGBA,s.UNSIGNED_BYTE,$):s.texImage2D(Te+Re,0,s.RGBA,1,1,0,s.RGBA,s.UNSIGNED_BYTE,$);return se}const Ee={};Ee[s.TEXTURE_2D]=re(s.TEXTURE_2D,s.TEXTURE_2D,1),Ee[s.TEXTURE_CUBE_MAP]=re(s.TEXTURE_CUBE_MAP,s.TEXTURE_CUBE_MAP_POSITIVE_X,6),Ee[s.TEXTURE_2D_ARRAY]=re(s.TEXTURE_2D_ARRAY,s.TEXTURE_2D_ARRAY,1,1),Ee[s.TEXTURE_3D]=re(s.TEXTURE_3D,s.TEXTURE_3D,1,1),c.setClear(0,0,0,1),u.setClear(1),d.setClear(0),U(s.DEPTH_TEST),u.setFunc(no),bt(!1),St(sm),U(s.CULL_FACE),vt(lr);function U(B){x[B]!==!0&&(s.enable(B),x[B]=!0)}function N(B){x[B]!==!1&&(s.disable(B),x[B]=!1)}function Ue(B,Te){return _[B]!==Te?(s.bindFramebuffer(B,Te),_[B]=Te,B===s.DRAW_FRAMEBUFFER&&(_[s.FRAMEBUFFER]=Te),B===s.FRAMEBUFFER&&(_[s.DRAW_FRAMEBUFFER]=Te),!0):!1}function Ke(B,Te){let Se=T,ue=!1;if(B){Se=y.get(Te),Se===void 0&&(Se=[],y.set(Te,Se));const $=B.textures;if(Se.length!==$.length||Se[0]!==s.COLOR_ATTACHMENT0){for(let se=0,Re=$.length;se<Re;se++)Se[se]=s.COLOR_ATTACHMENT0+se;Se.length=$.length,ue=!0}}else Se[0]!==s.BACK&&(Se[0]=s.BACK,ue=!0);ue&&s.drawBuffers(Se)}function gt(B){return R!==B?(s.useProgram(B),R=B,!0):!1}const at={[ls]:s.FUNC_ADD,[D_]:s.FUNC_SUBTRACT,[I_]:s.FUNC_REVERSE_SUBTRACT};at[N_]=s.MIN,at[U_]=s.MAX;const xt={[F_]:s.ZERO,[O_]:s.ONE,[k_]:s.SRC_COLOR,[mf]:s.SRC_ALPHA,[W_]:s.SRC_ALPHA_SATURATE,[V_]:s.DST_COLOR,[z_]:s.DST_ALPHA,[B_]:s.ONE_MINUS_SRC_COLOR,[gf]:s.ONE_MINUS_SRC_ALPHA,[G_]:s.ONE_MINUS_DST_COLOR,[H_]:s.ONE_MINUS_DST_ALPHA,[X_]:s.CONSTANT_COLOR,[j_]:s.ONE_MINUS_CONSTANT_COLOR,[Y_]:s.CONSTANT_ALPHA,[q_]:s.ONE_MINUS_CONSTANT_ALPHA};function vt(B,Te,Se,ue,$,se,Re,Xe,st,Je){if(B===lr){g===!0&&(N(s.BLEND),g=!1);return}if(g===!1&&(U(s.BLEND),g=!0),B!==L_){if(B!==v||Je!==j){if((b!==ls||H!==ls)&&(s.blendEquation(s.FUNC_ADD),b=ls,H=ls),Je)switch(B){case eo:s.blendFuncSeparate(s.ONE,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case om:s.blendFunc(s.ONE,s.ONE);break;case am:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case lm:s.blendFuncSeparate(s.DST_COLOR,s.ONE_MINUS_SRC_ALPHA,s.ZERO,s.ONE);break;default:Ut("WebGLState: Invalid blending: ",B);break}else switch(B){case eo:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case om:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE,s.ONE,s.ONE);break;case am:Ut("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case lm:Ut("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:Ut("WebGLState: Invalid blending: ",B);break}I=null,P=null,L=null,z=null,w.set(0,0,0),D=0,v=B,j=Je}return}$=$||Te,se=se||Se,Re=Re||ue,(Te!==b||$!==H)&&(s.blendEquationSeparate(at[Te],at[$]),b=Te,H=$),(Se!==I||ue!==P||se!==L||Re!==z)&&(s.blendFuncSeparate(xt[Se],xt[ue],xt[se],xt[Re]),I=Se,P=ue,L=se,z=Re),(Xe.equals(w)===!1||st!==D)&&(s.blendColor(Xe.r,Xe.g,Xe.b,st),w.copy(Xe),D=st),v=B,j=!1}function ot(B,Te){B.side===pi?N(s.CULL_FACE):U(s.CULL_FACE);let Se=B.side===Zn;Te&&(Se=!Se),bt(Se),B.blending===eo&&B.transparent===!1?vt(lr):vt(B.blending,B.blendEquation,B.blendSrc,B.blendDst,B.blendEquationAlpha,B.blendSrcAlpha,B.blendDstAlpha,B.blendColor,B.blendAlpha,B.premultipliedAlpha),u.setFunc(B.depthFunc),u.setTest(B.depthTest),u.setMask(B.depthWrite),c.setMask(B.colorWrite);const ue=B.stencilWrite;d.setTest(ue),ue&&(d.setMask(B.stencilWriteMask),d.setFunc(B.stencilFunc,B.stencilRef,B.stencilFuncMask),d.setOp(B.stencilFail,B.stencilZFail,B.stencilZPass)),G(B.polygonOffset,B.polygonOffsetFactor,B.polygonOffsetUnits),B.alphaToCoverage===!0?U(s.SAMPLE_ALPHA_TO_COVERAGE):N(s.SAMPLE_ALPHA_TO_COVERAGE)}function bt(B){k!==B&&(B?s.frontFace(s.CW):s.frontFace(s.CCW),k=B)}function St(B){B!==C_?(U(s.CULL_FACE),B!==q&&(B===sm?s.cullFace(s.BACK):B===R_?s.cullFace(s.FRONT):s.cullFace(s.FRONT_AND_BACK))):N(s.CULL_FACE),q=B}function Ft(B){B!==de&&(Z&&s.lineWidth(B),de=B)}function G(B,Te,Se){B?(U(s.POLYGON_OFFSET_FILL),(ve!==Te||W!==Se)&&(ve=Te,W=Se,u.getReversed()&&(Te=-Te),s.polygonOffset(Te,Se))):N(s.POLYGON_OFFSET_FILL)}function Pt(B){B?U(s.SCISSOR_TEST):N(s.SCISSOR_TEST)}function ft(B){B===void 0&&(B=s.TEXTURE0+ne-1),xe!==B&&(s.activeTexture(B),xe=B)}function wt(B,Te,Se){Se===void 0&&(xe===null?Se=s.TEXTURE0+ne-1:Se=xe);let ue=O[Se];ue===void 0&&(ue={type:void 0,texture:void 0},O[Se]=ue),(ue.type!==B||ue.texture!==Te)&&(xe!==Se&&(s.activeTexture(Se),xe=Se),s.bindTexture(B,Te||Ee[B]),ue.type=B,ue.texture=Te)}function Fe(){const B=O[xe];B!==void 0&&B.type!==void 0&&(s.bindTexture(B.type,null),B.type=void 0,B.texture=void 0)}function Bt(){try{s.compressedTexImage2D(...arguments)}catch(B){Ut("WebGLState:",B)}}function C(){try{s.compressedTexImage3D(...arguments)}catch(B){Ut("WebGLState:",B)}}function M(){try{s.texSubImage2D(...arguments)}catch(B){Ut("WebGLState:",B)}}function Q(){try{s.texSubImage3D(...arguments)}catch(B){Ut("WebGLState:",B)}}function ye(){try{s.compressedTexSubImage2D(...arguments)}catch(B){Ut("WebGLState:",B)}}function we(){try{s.compressedTexSubImage3D(...arguments)}catch(B){Ut("WebGLState:",B)}}function Ce(){try{s.texStorage2D(...arguments)}catch(B){Ut("WebGLState:",B)}}function Ie(){try{s.texStorage3D(...arguments)}catch(B){Ut("WebGLState:",B)}}function he(){try{s.texImage2D(...arguments)}catch(B){Ut("WebGLState:",B)}}function Me(){try{s.texImage3D(...arguments)}catch(B){Ut("WebGLState:",B)}}function He(B){return S[B]!==void 0?S[B]:s.getParameter(B)}function pe(B,Te){S[B]!==Te&&(s.pixelStorei(B,Te),S[B]=Te)}function X(B){Ge.equals(B)===!1&&(s.scissor(B.x,B.y,B.z,B.w),Ge.copy(B))}function ee(B){ze.equals(B)===!1&&(s.viewport(B.x,B.y,B.z,B.w),ze.copy(B))}function Le(B,Te){let Se=m.get(Te);Se===void 0&&(Se=new WeakMap,m.set(Te,Se));let ue=Se.get(B);ue===void 0&&(ue=s.getUniformBlockIndex(Te,B.name),Se.set(B,ue))}function Ve(B,Te){const ue=m.get(Te).get(B);p.get(Te)!==ue&&(s.uniformBlockBinding(Te,ue,B.__bindingPointIndex),p.set(Te,ue))}function lt(){s.disable(s.BLEND),s.disable(s.CULL_FACE),s.disable(s.DEPTH_TEST),s.disable(s.POLYGON_OFFSET_FILL),s.disable(s.SCISSOR_TEST),s.disable(s.STENCIL_TEST),s.disable(s.SAMPLE_ALPHA_TO_COVERAGE),s.blendEquation(s.FUNC_ADD),s.blendFunc(s.ONE,s.ZERO),s.blendFuncSeparate(s.ONE,s.ZERO,s.ONE,s.ZERO),s.blendColor(0,0,0,0),s.colorMask(!0,!0,!0,!0),s.clearColor(0,0,0,0),s.depthMask(!0),s.depthFunc(s.LESS),u.setReversed(!1),s.clearDepth(1),s.stencilMask(4294967295),s.stencilFunc(s.ALWAYS,0,4294967295),s.stencilOp(s.KEEP,s.KEEP,s.KEEP),s.clearStencil(0),s.cullFace(s.BACK),s.frontFace(s.CCW),s.polygonOffset(0,0),s.activeTexture(s.TEXTURE0),s.bindFramebuffer(s.FRAMEBUFFER,null),s.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),s.bindFramebuffer(s.READ_FRAMEBUFFER,null),s.useProgram(null),s.lineWidth(1),s.scissor(0,0,s.canvas.width,s.canvas.height),s.viewport(0,0,s.canvas.width,s.canvas.height),s.pixelStorei(s.PACK_ALIGNMENT,4),s.pixelStorei(s.UNPACK_ALIGNMENT,4),s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,!1),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,s.BROWSER_DEFAULT_WEBGL),s.pixelStorei(s.PACK_ROW_LENGTH,0),s.pixelStorei(s.PACK_SKIP_PIXELS,0),s.pixelStorei(s.PACK_SKIP_ROWS,0),s.pixelStorei(s.UNPACK_ROW_LENGTH,0),s.pixelStorei(s.UNPACK_IMAGE_HEIGHT,0),s.pixelStorei(s.UNPACK_SKIP_PIXELS,0),s.pixelStorei(s.UNPACK_SKIP_ROWS,0),s.pixelStorei(s.UNPACK_SKIP_IMAGES,0),x={},S={},xe=null,O={},_={},y=new WeakMap,T=[],R=null,g=!1,v=null,b=null,I=null,P=null,H=null,L=null,z=null,w=new Mt(0,0,0),D=0,j=!1,k=null,q=null,de=null,ve=null,W=null,Ge.set(0,0,s.canvas.width,s.canvas.height),ze.set(0,0,s.canvas.width,s.canvas.height),c.reset(),u.reset(),d.reset()}return{buffers:{color:c,depth:u,stencil:d},enable:U,disable:N,bindFramebuffer:Ue,drawBuffers:Ke,useProgram:gt,setBlending:vt,setMaterial:ot,setFlipSided:bt,setCullFace:St,setLineWidth:Ft,setPolygonOffset:G,setScissorTest:Pt,activeTexture:ft,bindTexture:wt,unbindTexture:Fe,compressedTexImage2D:Bt,compressedTexImage3D:C,texImage2D:he,texImage3D:Me,pixelStorei:pe,getParameter:He,updateUBOMapping:Le,uniformBlockBinding:Ve,texStorage2D:Ce,texStorage3D:Ie,texSubImage2D:M,texSubImage3D:Q,compressedTexSubImage2D:ye,compressedTexSubImage3D:we,scissor:X,viewport:ee,reset:lt}}function N1(s,e,n,r,a,c,u){const d=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,p=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),m=new It,x=new WeakMap,S=new Set;let _;const y=new WeakMap;let T=!1;try{T=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function R(C,M){return T?new OffscreenCanvas(C,M):Gl("canvas")}function g(C,M,Q){let ye=1;const we=Bt(C);if((we.width>Q||we.height>Q)&&(ye=Q/Math.max(we.width,we.height)),ye<1)if(typeof HTMLImageElement<"u"&&C instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&C instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&C instanceof ImageBitmap||typeof VideoFrame<"u"&&C instanceof VideoFrame){const Ce=Math.floor(ye*we.width),Ie=Math.floor(ye*we.height);_===void 0&&(_=R(Ce,Ie));const he=M?R(Ce,Ie):_;return he.width=Ce,he.height=Ie,he.getContext("2d").drawImage(C,0,0,Ce,Ie),ht("WebGLRenderer: Texture has been resized from ("+we.width+"x"+we.height+") to ("+Ce+"x"+Ie+")."),he}else return"data"in C&&ht("WebGLRenderer: Image in DataTexture is too big ("+we.width+"x"+we.height+")."),C;return C}function v(C){return C.generateMipmaps}function b(C){s.generateMipmap(C)}function I(C){return C.isWebGLCubeRenderTarget?s.TEXTURE_CUBE_MAP:C.isWebGL3DRenderTarget?s.TEXTURE_3D:C.isWebGLArrayRenderTarget||C.isCompressedArrayTexture?s.TEXTURE_2D_ARRAY:s.TEXTURE_2D}function P(C,M,Q,ye,we,Ce=!1){if(C!==null){if(s[C]!==void 0)return s[C];ht("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+C+"'")}let Ie;ye&&(Ie=e.get("EXT_texture_norm16"),Ie||ht("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let he=M;if(M===s.RED&&(Q===s.FLOAT&&(he=s.R32F),Q===s.HALF_FLOAT&&(he=s.R16F),Q===s.UNSIGNED_BYTE&&(he=s.R8),Q===s.UNSIGNED_SHORT&&Ie&&(he=Ie.R16_EXT),Q===s.SHORT&&Ie&&(he=Ie.R16_SNORM_EXT)),M===s.RED_INTEGER&&(Q===s.UNSIGNED_BYTE&&(he=s.R8UI),Q===s.UNSIGNED_SHORT&&(he=s.R16UI),Q===s.UNSIGNED_INT&&(he=s.R32UI),Q===s.BYTE&&(he=s.R8I),Q===s.SHORT&&(he=s.R16I),Q===s.INT&&(he=s.R32I)),M===s.RG&&(Q===s.FLOAT&&(he=s.RG32F),Q===s.HALF_FLOAT&&(he=s.RG16F),Q===s.UNSIGNED_BYTE&&(he=s.RG8),Q===s.UNSIGNED_SHORT&&Ie&&(he=Ie.RG16_EXT),Q===s.SHORT&&Ie&&(he=Ie.RG16_SNORM_EXT)),M===s.RG_INTEGER&&(Q===s.UNSIGNED_BYTE&&(he=s.RG8UI),Q===s.UNSIGNED_SHORT&&(he=s.RG16UI),Q===s.UNSIGNED_INT&&(he=s.RG32UI),Q===s.BYTE&&(he=s.RG8I),Q===s.SHORT&&(he=s.RG16I),Q===s.INT&&(he=s.RG32I)),M===s.RGB_INTEGER&&(Q===s.UNSIGNED_BYTE&&(he=s.RGB8UI),Q===s.UNSIGNED_SHORT&&(he=s.RGB16UI),Q===s.UNSIGNED_INT&&(he=s.RGB32UI),Q===s.BYTE&&(he=s.RGB8I),Q===s.SHORT&&(he=s.RGB16I),Q===s.INT&&(he=s.RGB32I)),M===s.RGBA_INTEGER&&(Q===s.UNSIGNED_BYTE&&(he=s.RGBA8UI),Q===s.UNSIGNED_SHORT&&(he=s.RGBA16UI),Q===s.UNSIGNED_INT&&(he=s.RGBA32UI),Q===s.BYTE&&(he=s.RGBA8I),Q===s.SHORT&&(he=s.RGBA16I),Q===s.INT&&(he=s.RGBA32I)),M===s.RGB&&(Q===s.UNSIGNED_SHORT&&Ie&&(he=Ie.RGB16_EXT),Q===s.SHORT&&Ie&&(he=Ie.RGB16_SNORM_EXT),Q===s.UNSIGNED_INT_5_9_9_9_REV&&(he=s.RGB9_E5),Q===s.UNSIGNED_INT_10F_11F_11F_REV&&(he=s.R11F_G11F_B10F)),M===s.RGBA){const Me=Ce?Vl:Dt.getTransfer(we);Q===s.FLOAT&&(he=s.RGBA32F),Q===s.HALF_FLOAT&&(he=s.RGBA16F),Q===s.UNSIGNED_BYTE&&(he=Me===Gt?s.SRGB8_ALPHA8:s.RGBA8),Q===s.UNSIGNED_SHORT&&Ie&&(he=Ie.RGBA16_EXT),Q===s.SHORT&&Ie&&(he=Ie.RGBA16_SNORM_EXT),Q===s.UNSIGNED_SHORT_4_4_4_4&&(he=s.RGBA4),Q===s.UNSIGNED_SHORT_5_5_5_1&&(he=s.RGB5_A1)}return(he===s.R16F||he===s.R32F||he===s.RG16F||he===s.RG32F||he===s.RGBA16F||he===s.RGBA32F)&&e.get("EXT_color_buffer_float"),he}function H(C,M){let Q;return C?M===null||M===Wi||M===ia?Q=s.DEPTH24_STENCIL8:M===Bi?Q=s.DEPTH32F_STENCIL8:M===na&&(Q=s.DEPTH24_STENCIL8,ht("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):M===null||M===Wi||M===ia?Q=s.DEPTH_COMPONENT24:M===Bi?Q=s.DEPTH_COMPONENT32F:M===na&&(Q=s.DEPTH_COMPONENT16),Q}function L(C,M){return v(C)===!0||C.isFramebufferTexture&&C.minFilter!==An&&C.minFilter!==Nn?Math.log2(Math.max(M.width,M.height))+1:C.mipmaps!==void 0&&C.mipmaps.length>0?C.mipmaps.length:C.isCompressedTexture&&Array.isArray(C.image)?M.mipmaps.length:1}function z(C){const M=C.target;M.removeEventListener("dispose",z),D(M),M.isVideoTexture&&x.delete(M),M.isHTMLTexture&&S.delete(M)}function w(C){const M=C.target;M.removeEventListener("dispose",w),k(M)}function D(C){const M=r.get(C);if(M.__webglInit===void 0)return;const Q=C.source,ye=y.get(Q);if(ye){const we=ye[M.__cacheKey];we.usedTimes--,we.usedTimes===0&&j(C),Object.keys(ye).length===0&&y.delete(Q)}r.remove(C)}function j(C){const M=r.get(C);s.deleteTexture(M.__webglTexture);const Q=C.source,ye=y.get(Q);delete ye[M.__cacheKey],u.memory.textures--}function k(C){const M=r.get(C);if(C.depthTexture&&(C.depthTexture.dispose(),r.remove(C.depthTexture)),C.isWebGLCubeRenderTarget)for(let ye=0;ye<6;ye++){if(Array.isArray(M.__webglFramebuffer[ye]))for(let we=0;we<M.__webglFramebuffer[ye].length;we++)s.deleteFramebuffer(M.__webglFramebuffer[ye][we]);else s.deleteFramebuffer(M.__webglFramebuffer[ye]);M.__webglDepthbuffer&&s.deleteRenderbuffer(M.__webglDepthbuffer[ye])}else{if(Array.isArray(M.__webglFramebuffer))for(let ye=0;ye<M.__webglFramebuffer.length;ye++)s.deleteFramebuffer(M.__webglFramebuffer[ye]);else s.deleteFramebuffer(M.__webglFramebuffer);if(M.__webglDepthbuffer&&s.deleteRenderbuffer(M.__webglDepthbuffer),M.__webglMultisampledFramebuffer&&s.deleteFramebuffer(M.__webglMultisampledFramebuffer),M.__webglColorRenderbuffer)for(let ye=0;ye<M.__webglColorRenderbuffer.length;ye++)M.__webglColorRenderbuffer[ye]&&s.deleteRenderbuffer(M.__webglColorRenderbuffer[ye]);M.__webglDepthRenderbuffer&&s.deleteRenderbuffer(M.__webglDepthRenderbuffer)}const Q=C.textures;for(let ye=0,we=Q.length;ye<we;ye++){const Ce=r.get(Q[ye]);Ce.__webglTexture&&(s.deleteTexture(Ce.__webglTexture),u.memory.textures--),r.remove(Q[ye])}r.remove(C)}let q=0;function de(){q=0}function ve(){return q}function W(C){q=C}function ne(){const C=q;return C>=a.maxTextures&&ht("WebGLTextures: Trying to use "+C+" texture units while this GPU supports only "+a.maxTextures),q+=1,C}function Z(C){const M=[];return M.push(C.wrapS),M.push(C.wrapT),M.push(C.wrapR||0),M.push(C.magFilter),M.push(C.minFilter),M.push(C.anisotropy),M.push(C.internalFormat),M.push(C.format),M.push(C.type),M.push(C.generateMipmaps),M.push(C.premultiplyAlpha),M.push(C.flipY),M.push(C.unpackAlignment),M.push(C.colorSpace),M.join()}function J(C,M){const Q=r.get(C);if(C.isVideoTexture&&wt(C),C.isRenderTargetTexture===!1&&C.isExternalTexture!==!0&&C.version>0&&Q.__version!==C.version){const ye=C.image;if(ye===null)ht("WebGLRenderer: Texture marked for update but no image data found.");else if(ye.complete===!1)ht("WebGLRenderer: Texture marked for update but image is incomplete");else{N(Q,C,M);return}}else C.isExternalTexture&&(Q.__webglTexture=C.sourceTexture?C.sourceTexture:null);n.bindTexture(s.TEXTURE_2D,Q.__webglTexture,s.TEXTURE0+M)}function _e(C,M){const Q=r.get(C);if(C.isRenderTargetTexture===!1&&C.version>0&&Q.__version!==C.version){N(Q,C,M);return}else C.isExternalTexture&&(Q.__webglTexture=C.sourceTexture?C.sourceTexture:null);n.bindTexture(s.TEXTURE_2D_ARRAY,Q.__webglTexture,s.TEXTURE0+M)}function xe(C,M){const Q=r.get(C);if(C.isRenderTargetTexture===!1&&C.version>0&&Q.__version!==C.version){N(Q,C,M);return}n.bindTexture(s.TEXTURE_3D,Q.__webglTexture,s.TEXTURE0+M)}function O(C,M){const Q=r.get(C);if(C.isCubeDepthTexture!==!0&&C.version>0&&Q.__version!==C.version){Ue(Q,C,M);return}n.bindTexture(s.TEXTURE_CUBE_MAP,Q.__webglTexture,s.TEXTURE0+M)}const ie={[wf]:s.REPEAT,[ar]:s.CLAMP_TO_EDGE,[Tf]:s.MIRRORED_REPEAT},Be={[An]:s.NEAREST,[Z_]:s.NEAREST_MIPMAP_NEAREST,[fl]:s.NEAREST_MIPMAP_LINEAR,[Nn]:s.LINEAR,[Uu]:s.LINEAR_MIPMAP_NEAREST,[us]:s.LINEAR_MIPMAP_LINEAR},Ge={[ev]:s.NEVER,[sv]:s.ALWAYS,[tv]:s.LESS,[_d]:s.LEQUAL,[nv]:s.EQUAL,[vd]:s.GEQUAL,[iv]:s.GREATER,[rv]:s.NOTEQUAL};function ze(C,M){if(M.type===Bi&&e.has("OES_texture_float_linear")===!1&&(M.magFilter===Nn||M.magFilter===Uu||M.magFilter===fl||M.magFilter===us||M.minFilter===Nn||M.minFilter===Uu||M.minFilter===fl||M.minFilter===us)&&ht("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),s.texParameteri(C,s.TEXTURE_WRAP_S,ie[M.wrapS]),s.texParameteri(C,s.TEXTURE_WRAP_T,ie[M.wrapT]),(C===s.TEXTURE_3D||C===s.TEXTURE_2D_ARRAY)&&s.texParameteri(C,s.TEXTURE_WRAP_R,ie[M.wrapR]),s.texParameteri(C,s.TEXTURE_MAG_FILTER,Be[M.magFilter]),s.texParameteri(C,s.TEXTURE_MIN_FILTER,Be[M.minFilter]),M.compareFunction&&(s.texParameteri(C,s.TEXTURE_COMPARE_MODE,s.COMPARE_REF_TO_TEXTURE),s.texParameteri(C,s.TEXTURE_COMPARE_FUNC,Ge[M.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(M.magFilter===An||M.minFilter!==fl&&M.minFilter!==us||M.type===Bi&&e.has("OES_texture_float_linear")===!1)return;if(M.anisotropy>1||r.get(M).__currentAnisotropy){const Q=e.get("EXT_texture_filter_anisotropic");s.texParameterf(C,Q.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(M.anisotropy,a.getMaxAnisotropy())),r.get(M).__currentAnisotropy=M.anisotropy}}}function re(C,M){let Q=!1;C.__webglInit===void 0&&(C.__webglInit=!0,M.addEventListener("dispose",z));const ye=M.source;let we=y.get(ye);we===void 0&&(we={},y.set(ye,we));const Ce=Z(M);if(Ce!==C.__cacheKey){we[Ce]===void 0&&(we[Ce]={texture:s.createTexture(),usedTimes:0},u.memory.textures++,Q=!0),we[Ce].usedTimes++;const Ie=we[C.__cacheKey];Ie!==void 0&&(we[C.__cacheKey].usedTimes--,Ie.usedTimes===0&&j(M)),C.__cacheKey=Ce,C.__webglTexture=we[Ce].texture}return Q}function Ee(C,M,Q){return Math.floor(Math.floor(C/Q)/M)}function U(C,M,Q,ye){const Ce=C.updateRanges;if(Ce.length===0)n.texSubImage2D(s.TEXTURE_2D,0,0,0,M.width,M.height,Q,ye,M.data);else{Ce.sort((pe,X)=>pe.start-X.start);let Ie=0;for(let pe=1;pe<Ce.length;pe++){const X=Ce[Ie],ee=Ce[pe],Le=X.start+X.count,Ve=Ee(ee.start,M.width,4),lt=Ee(X.start,M.width,4);ee.start<=Le+1&&Ve===lt&&Ee(ee.start+ee.count-1,M.width,4)===Ve?X.count=Math.max(X.count,ee.start+ee.count-X.start):(++Ie,Ce[Ie]=ee)}Ce.length=Ie+1;const he=n.getParameter(s.UNPACK_ROW_LENGTH),Me=n.getParameter(s.UNPACK_SKIP_PIXELS),He=n.getParameter(s.UNPACK_SKIP_ROWS);n.pixelStorei(s.UNPACK_ROW_LENGTH,M.width);for(let pe=0,X=Ce.length;pe<X;pe++){const ee=Ce[pe],Le=Math.floor(ee.start/4),Ve=Math.ceil(ee.count/4),lt=Le%M.width,B=Math.floor(Le/M.width),Te=Ve,Se=1;n.pixelStorei(s.UNPACK_SKIP_PIXELS,lt),n.pixelStorei(s.UNPACK_SKIP_ROWS,B),n.texSubImage2D(s.TEXTURE_2D,0,lt,B,Te,Se,Q,ye,M.data)}C.clearUpdateRanges(),n.pixelStorei(s.UNPACK_ROW_LENGTH,he),n.pixelStorei(s.UNPACK_SKIP_PIXELS,Me),n.pixelStorei(s.UNPACK_SKIP_ROWS,He)}}function N(C,M,Q){let ye=s.TEXTURE_2D;(M.isDataArrayTexture||M.isCompressedArrayTexture)&&(ye=s.TEXTURE_2D_ARRAY),M.isData3DTexture&&(ye=s.TEXTURE_3D);const we=re(C,M),Ce=M.source;n.bindTexture(ye,C.__webglTexture,s.TEXTURE0+Q);const Ie=r.get(Ce);if(Ce.version!==Ie.__version||we===!0){if(n.activeTexture(s.TEXTURE0+Q),(typeof ImageBitmap<"u"&&M.image instanceof ImageBitmap)===!1){const Se=Dt.getPrimaries(Dt.workingColorSpace),ue=M.colorSpace===Br?null:Dt.getPrimaries(M.colorSpace),$=M.colorSpace===Br||Se===ue?s.NONE:s.BROWSER_DEFAULT_WEBGL;n.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,M.flipY),n.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),n.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,$)}n.pixelStorei(s.UNPACK_ALIGNMENT,M.unpackAlignment);let Me=g(M.image,!1,a.maxTextureSize);Me=Fe(M,Me);const He=c.convert(M.format,M.colorSpace),pe=c.convert(M.type);let X=P(M.internalFormat,He,pe,M.normalized,M.colorSpace,M.isVideoTexture);ze(ye,M);let ee;const Le=M.mipmaps,Ve=M.isVideoTexture!==!0,lt=Ie.__version===void 0||we===!0,B=Ce.dataReady,Te=L(M,Me);if(M.isDepthTexture)X=H(M.format===fs,M.type),lt&&(Ve?n.texStorage2D(s.TEXTURE_2D,1,X,Me.width,Me.height):n.texImage2D(s.TEXTURE_2D,0,X,Me.width,Me.height,0,He,pe,null));else if(M.isDataTexture)if(Le.length>0){Ve&&lt&&n.texStorage2D(s.TEXTURE_2D,Te,X,Le[0].width,Le[0].height);for(let Se=0,ue=Le.length;Se<ue;Se++)ee=Le[Se],Ve?B&&n.texSubImage2D(s.TEXTURE_2D,Se,0,0,ee.width,ee.height,He,pe,ee.data):n.texImage2D(s.TEXTURE_2D,Se,X,ee.width,ee.height,0,He,pe,ee.data);M.generateMipmaps=!1}else Ve?(lt&&n.texStorage2D(s.TEXTURE_2D,Te,X,Me.width,Me.height),B&&U(M,Me,He,pe)):n.texImage2D(s.TEXTURE_2D,0,X,Me.width,Me.height,0,He,pe,Me.data);else if(M.isCompressedTexture)if(M.isCompressedArrayTexture){Ve&&lt&&n.texStorage3D(s.TEXTURE_2D_ARRAY,Te,X,Le[0].width,Le[0].height,Me.depth);for(let Se=0,ue=Le.length;Se<ue;Se++)if(ee=Le[Se],M.format!==Ci)if(He!==null)if(Ve){if(B)if(M.layerUpdates.size>0){const $=Om(ee.width,ee.height,M.format,M.type);for(const se of M.layerUpdates){const Re=ee.data.subarray(se*$/ee.data.BYTES_PER_ELEMENT,(se+1)*$/ee.data.BYTES_PER_ELEMENT);n.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,Se,0,0,se,ee.width,ee.height,1,He,Re)}M.clearLayerUpdates()}else n.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,Se,0,0,0,ee.width,ee.height,Me.depth,He,ee.data)}else n.compressedTexImage3D(s.TEXTURE_2D_ARRAY,Se,X,ee.width,ee.height,Me.depth,0,ee.data,0,0);else ht("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Ve?B&&n.texSubImage3D(s.TEXTURE_2D_ARRAY,Se,0,0,0,ee.width,ee.height,Me.depth,He,pe,ee.data):n.texImage3D(s.TEXTURE_2D_ARRAY,Se,X,ee.width,ee.height,Me.depth,0,He,pe,ee.data)}else{Ve&&lt&&n.texStorage2D(s.TEXTURE_2D,Te,X,Le[0].width,Le[0].height);for(let Se=0,ue=Le.length;Se<ue;Se++)ee=Le[Se],M.format!==Ci?He!==null?Ve?B&&n.compressedTexSubImage2D(s.TEXTURE_2D,Se,0,0,ee.width,ee.height,He,ee.data):n.compressedTexImage2D(s.TEXTURE_2D,Se,X,ee.width,ee.height,0,ee.data):ht("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Ve?B&&n.texSubImage2D(s.TEXTURE_2D,Se,0,0,ee.width,ee.height,He,pe,ee.data):n.texImage2D(s.TEXTURE_2D,Se,X,ee.width,ee.height,0,He,pe,ee.data)}else if(M.isDataArrayTexture)if(Ve){if(lt&&n.texStorage3D(s.TEXTURE_2D_ARRAY,Te,X,Me.width,Me.height,Me.depth),B)if(M.layerUpdates.size>0){const Se=Om(Me.width,Me.height,M.format,M.type);for(const ue of M.layerUpdates){const $=Me.data.subarray(ue*Se/Me.data.BYTES_PER_ELEMENT,(ue+1)*Se/Me.data.BYTES_PER_ELEMENT);n.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,ue,Me.width,Me.height,1,He,pe,$)}M.clearLayerUpdates()}else n.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,0,Me.width,Me.height,Me.depth,He,pe,Me.data)}else n.texImage3D(s.TEXTURE_2D_ARRAY,0,X,Me.width,Me.height,Me.depth,0,He,pe,Me.data);else if(M.isData3DTexture)Ve?(lt&&n.texStorage3D(s.TEXTURE_3D,Te,X,Me.width,Me.height,Me.depth),B&&n.texSubImage3D(s.TEXTURE_3D,0,0,0,0,Me.width,Me.height,Me.depth,He,pe,Me.data)):n.texImage3D(s.TEXTURE_3D,0,X,Me.width,Me.height,Me.depth,0,He,pe,Me.data);else if(M.isFramebufferTexture){if(lt)if(Ve)n.texStorage2D(s.TEXTURE_2D,Te,X,Me.width,Me.height);else{let Se=Me.width,ue=Me.height;for(let $=0;$<Te;$++)n.texImage2D(s.TEXTURE_2D,$,X,Se,ue,0,He,pe,null),Se>>=1,ue>>=1}}else if(M.isHTMLTexture){if("texElementImage2D"in s){const Se=s.canvas;if(Se.hasAttribute("layoutsubtree")||Se.setAttribute("layoutsubtree","true"),Me.parentNode!==Se){Se.appendChild(Me),S.add(M),Se.onpaint=Xe=>{const st=Xe.changedElements;for(const Je of S)st.includes(Je.image)&&(Je.needsUpdate=!0)},Se.requestPaint();return}const ue=0,$=s.RGBA,se=s.RGBA,Re=s.UNSIGNED_BYTE;s.texElementImage2D(s.TEXTURE_2D,ue,$,se,Re,Me),s.texParameteri(s.TEXTURE_2D,s.TEXTURE_MIN_FILTER,s.LINEAR),s.texParameteri(s.TEXTURE_2D,s.TEXTURE_WRAP_S,s.CLAMP_TO_EDGE),s.texParameteri(s.TEXTURE_2D,s.TEXTURE_WRAP_T,s.CLAMP_TO_EDGE)}}else if(Le.length>0){if(Ve&&lt){const Se=Bt(Le[0]);n.texStorage2D(s.TEXTURE_2D,Te,X,Se.width,Se.height)}for(let Se=0,ue=Le.length;Se<ue;Se++)ee=Le[Se],Ve?B&&n.texSubImage2D(s.TEXTURE_2D,Se,0,0,He,pe,ee):n.texImage2D(s.TEXTURE_2D,Se,X,He,pe,ee);M.generateMipmaps=!1}else if(Ve){if(lt){const Se=Bt(Me);n.texStorage2D(s.TEXTURE_2D,Te,X,Se.width,Se.height)}B&&n.texSubImage2D(s.TEXTURE_2D,0,0,0,He,pe,Me)}else n.texImage2D(s.TEXTURE_2D,0,X,He,pe,Me);v(M)&&b(ye),Ie.__version=Ce.version,M.onUpdate&&M.onUpdate(M)}C.__version=M.version}function Ue(C,M,Q){if(M.image.length!==6)return;const ye=re(C,M),we=M.source;n.bindTexture(s.TEXTURE_CUBE_MAP,C.__webglTexture,s.TEXTURE0+Q);const Ce=r.get(we);if(we.version!==Ce.__version||ye===!0){n.activeTexture(s.TEXTURE0+Q);const Ie=Dt.getPrimaries(Dt.workingColorSpace),he=M.colorSpace===Br?null:Dt.getPrimaries(M.colorSpace),Me=M.colorSpace===Br||Ie===he?s.NONE:s.BROWSER_DEFAULT_WEBGL;n.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,M.flipY),n.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),n.pixelStorei(s.UNPACK_ALIGNMENT,M.unpackAlignment),n.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,Me);const He=M.isCompressedTexture||M.image[0].isCompressedTexture,pe=M.image[0]&&M.image[0].isDataTexture,X=[];for(let se=0;se<6;se++)!He&&!pe?X[se]=g(M.image[se],!0,a.maxCubemapSize):X[se]=pe?M.image[se].image:M.image[se],X[se]=Fe(M,X[se]);const ee=X[0],Le=c.convert(M.format,M.colorSpace),Ve=c.convert(M.type),lt=P(M.internalFormat,Le,Ve,M.normalized,M.colorSpace),B=M.isVideoTexture!==!0,Te=Ce.__version===void 0||ye===!0,Se=we.dataReady;let ue=L(M,ee);ze(s.TEXTURE_CUBE_MAP,M);let $;if(He){B&&Te&&n.texStorage2D(s.TEXTURE_CUBE_MAP,ue,lt,ee.width,ee.height);for(let se=0;se<6;se++){$=X[se].mipmaps;for(let Re=0;Re<$.length;Re++){const Xe=$[Re];M.format!==Ci?Le!==null?B?Se&&n.compressedTexSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+se,Re,0,0,Xe.width,Xe.height,Le,Xe.data):n.compressedTexImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+se,Re,lt,Xe.width,Xe.height,0,Xe.data):ht("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):B?Se&&n.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+se,Re,0,0,Xe.width,Xe.height,Le,Ve,Xe.data):n.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+se,Re,lt,Xe.width,Xe.height,0,Le,Ve,Xe.data)}}}else{if($=M.mipmaps,B&&Te){$.length>0&&ue++;const se=Bt(X[0]);n.texStorage2D(s.TEXTURE_CUBE_MAP,ue,lt,se.width,se.height)}for(let se=0;se<6;se++)if(pe){B?Se&&n.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+se,0,0,0,X[se].width,X[se].height,Le,Ve,X[se].data):n.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+se,0,lt,X[se].width,X[se].height,0,Le,Ve,X[se].data);for(let Re=0;Re<$.length;Re++){const st=$[Re].image[se].image;B?Se&&n.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+se,Re+1,0,0,st.width,st.height,Le,Ve,st.data):n.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+se,Re+1,lt,st.width,st.height,0,Le,Ve,st.data)}}else{B?Se&&n.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+se,0,0,0,Le,Ve,X[se]):n.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+se,0,lt,Le,Ve,X[se]);for(let Re=0;Re<$.length;Re++){const Xe=$[Re];B?Se&&n.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+se,Re+1,0,0,Le,Ve,Xe.image[se]):n.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+se,Re+1,lt,Le,Ve,Xe.image[se])}}}v(M)&&b(s.TEXTURE_CUBE_MAP),Ce.__version=we.version,M.onUpdate&&M.onUpdate(M)}C.__version=M.version}function Ke(C,M,Q,ye,we,Ce){const Ie=c.convert(Q.format,Q.colorSpace),he=c.convert(Q.type),Me=P(Q.internalFormat,Ie,he,Q.normalized,Q.colorSpace),He=r.get(M),pe=r.get(Q);if(pe.__renderTarget=M,!He.__hasExternalTextures){const X=Math.max(1,M.width>>Ce),ee=Math.max(1,M.height>>Ce);we===s.TEXTURE_3D||we===s.TEXTURE_2D_ARRAY?n.texImage3D(we,Ce,Me,X,ee,M.depth,0,Ie,he,null):n.texImage2D(we,Ce,Me,X,ee,0,Ie,he,null)}n.bindFramebuffer(s.FRAMEBUFFER,C),ft(M)?d.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,ye,we,pe.__webglTexture,0,Pt(M)):(we===s.TEXTURE_2D||we>=s.TEXTURE_CUBE_MAP_POSITIVE_X&&we<=s.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&s.framebufferTexture2D(s.FRAMEBUFFER,ye,we,pe.__webglTexture,Ce),n.bindFramebuffer(s.FRAMEBUFFER,null)}function gt(C,M,Q){if(s.bindRenderbuffer(s.RENDERBUFFER,C),M.depthBuffer){const ye=M.depthTexture,we=ye&&ye.isDepthTexture?ye.type:null,Ce=H(M.stencilBuffer,we),Ie=M.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;ft(M)?d.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,Pt(M),Ce,M.width,M.height):Q?s.renderbufferStorageMultisample(s.RENDERBUFFER,Pt(M),Ce,M.width,M.height):s.renderbufferStorage(s.RENDERBUFFER,Ce,M.width,M.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,Ie,s.RENDERBUFFER,C)}else{const ye=M.textures;for(let we=0;we<ye.length;we++){const Ce=ye[we],Ie=c.convert(Ce.format,Ce.colorSpace),he=c.convert(Ce.type),Me=P(Ce.internalFormat,Ie,he,Ce.normalized,Ce.colorSpace);ft(M)?d.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,Pt(M),Me,M.width,M.height):Q?s.renderbufferStorageMultisample(s.RENDERBUFFER,Pt(M),Me,M.width,M.height):s.renderbufferStorage(s.RENDERBUFFER,Me,M.width,M.height)}}s.bindRenderbuffer(s.RENDERBUFFER,null)}function at(C,M,Q){const ye=M.isWebGLCubeRenderTarget===!0;if(n.bindFramebuffer(s.FRAMEBUFFER,C),!(M.depthTexture&&M.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const we=r.get(M.depthTexture);if(we.__renderTarget=M,(!we.__webglTexture||M.depthTexture.image.width!==M.width||M.depthTexture.image.height!==M.height)&&(M.depthTexture.image.width=M.width,M.depthTexture.image.height=M.height,M.depthTexture.needsUpdate=!0),ye){if(we.__webglInit===void 0&&(we.__webglInit=!0,M.depthTexture.addEventListener("dispose",z)),we.__webglTexture===void 0){we.__webglTexture=s.createTexture(),n.bindTexture(s.TEXTURE_CUBE_MAP,we.__webglTexture),ze(s.TEXTURE_CUBE_MAP,M.depthTexture);const He=c.convert(M.depthTexture.format),pe=c.convert(M.depthTexture.type);let X;M.depthTexture.format===fr?X=s.DEPTH_COMPONENT24:M.depthTexture.format===fs&&(X=s.DEPTH24_STENCIL8);for(let ee=0;ee<6;ee++)s.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ee,0,X,M.width,M.height,0,He,pe,null)}}else J(M.depthTexture,0);const Ce=we.__webglTexture,Ie=Pt(M),he=ye?s.TEXTURE_CUBE_MAP_POSITIVE_X+Q:s.TEXTURE_2D,Me=M.depthTexture.format===fs?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;if(M.depthTexture.format===fr)ft(M)?d.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,Me,he,Ce,0,Ie):s.framebufferTexture2D(s.FRAMEBUFFER,Me,he,Ce,0);else if(M.depthTexture.format===fs)ft(M)?d.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,Me,he,Ce,0,Ie):s.framebufferTexture2D(s.FRAMEBUFFER,Me,he,Ce,0);else throw new Error("Unknown depthTexture format")}function xt(C){const M=r.get(C),Q=C.isWebGLCubeRenderTarget===!0;if(M.__boundDepthTexture!==C.depthTexture){const ye=C.depthTexture;if(M.__depthDisposeCallback&&M.__depthDisposeCallback(),ye){const we=()=>{delete M.__boundDepthTexture,delete M.__depthDisposeCallback,ye.removeEventListener("dispose",we)};ye.addEventListener("dispose",we),M.__depthDisposeCallback=we}M.__boundDepthTexture=ye}if(C.depthTexture&&!M.__autoAllocateDepthBuffer)if(Q)for(let ye=0;ye<6;ye++)at(M.__webglFramebuffer[ye],C,ye);else{const ye=C.texture.mipmaps;ye&&ye.length>0?at(M.__webglFramebuffer[0],C,0):at(M.__webglFramebuffer,C,0)}else if(Q){M.__webglDepthbuffer=[];for(let ye=0;ye<6;ye++)if(n.bindFramebuffer(s.FRAMEBUFFER,M.__webglFramebuffer[ye]),M.__webglDepthbuffer[ye]===void 0)M.__webglDepthbuffer[ye]=s.createRenderbuffer(),gt(M.__webglDepthbuffer[ye],C,!1);else{const we=C.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,Ce=M.__webglDepthbuffer[ye];s.bindRenderbuffer(s.RENDERBUFFER,Ce),s.framebufferRenderbuffer(s.FRAMEBUFFER,we,s.RENDERBUFFER,Ce)}}else{const ye=C.texture.mipmaps;if(ye&&ye.length>0?n.bindFramebuffer(s.FRAMEBUFFER,M.__webglFramebuffer[0]):n.bindFramebuffer(s.FRAMEBUFFER,M.__webglFramebuffer),M.__webglDepthbuffer===void 0)M.__webglDepthbuffer=s.createRenderbuffer(),gt(M.__webglDepthbuffer,C,!1);else{const we=C.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,Ce=M.__webglDepthbuffer;s.bindRenderbuffer(s.RENDERBUFFER,Ce),s.framebufferRenderbuffer(s.FRAMEBUFFER,we,s.RENDERBUFFER,Ce)}}n.bindFramebuffer(s.FRAMEBUFFER,null)}function vt(C,M,Q){const ye=r.get(C);M!==void 0&&Ke(ye.__webglFramebuffer,C,C.texture,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,0),Q!==void 0&&xt(C)}function ot(C){const M=C.texture,Q=r.get(C),ye=r.get(M);C.addEventListener("dispose",w);const we=C.textures,Ce=C.isWebGLCubeRenderTarget===!0,Ie=we.length>1;if(Ie||(ye.__webglTexture===void 0&&(ye.__webglTexture=s.createTexture()),ye.__version=M.version,u.memory.textures++),Ce){Q.__webglFramebuffer=[];for(let he=0;he<6;he++)if(M.mipmaps&&M.mipmaps.length>0){Q.__webglFramebuffer[he]=[];for(let Me=0;Me<M.mipmaps.length;Me++)Q.__webglFramebuffer[he][Me]=s.createFramebuffer()}else Q.__webglFramebuffer[he]=s.createFramebuffer()}else{if(M.mipmaps&&M.mipmaps.length>0){Q.__webglFramebuffer=[];for(let he=0;he<M.mipmaps.length;he++)Q.__webglFramebuffer[he]=s.createFramebuffer()}else Q.__webglFramebuffer=s.createFramebuffer();if(Ie)for(let he=0,Me=we.length;he<Me;he++){const He=r.get(we[he]);He.__webglTexture===void 0&&(He.__webglTexture=s.createTexture(),u.memory.textures++)}if(C.samples>0&&ft(C)===!1){Q.__webglMultisampledFramebuffer=s.createFramebuffer(),Q.__webglColorRenderbuffer=[],n.bindFramebuffer(s.FRAMEBUFFER,Q.__webglMultisampledFramebuffer);for(let he=0;he<we.length;he++){const Me=we[he];Q.__webglColorRenderbuffer[he]=s.createRenderbuffer(),s.bindRenderbuffer(s.RENDERBUFFER,Q.__webglColorRenderbuffer[he]);const He=c.convert(Me.format,Me.colorSpace),pe=c.convert(Me.type),X=P(Me.internalFormat,He,pe,Me.normalized,Me.colorSpace,C.isXRRenderTarget===!0),ee=Pt(C);s.renderbufferStorageMultisample(s.RENDERBUFFER,ee,X,C.width,C.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+he,s.RENDERBUFFER,Q.__webglColorRenderbuffer[he])}s.bindRenderbuffer(s.RENDERBUFFER,null),C.depthBuffer&&(Q.__webglDepthRenderbuffer=s.createRenderbuffer(),gt(Q.__webglDepthRenderbuffer,C,!0)),n.bindFramebuffer(s.FRAMEBUFFER,null)}}if(Ce){n.bindTexture(s.TEXTURE_CUBE_MAP,ye.__webglTexture),ze(s.TEXTURE_CUBE_MAP,M);for(let he=0;he<6;he++)if(M.mipmaps&&M.mipmaps.length>0)for(let Me=0;Me<M.mipmaps.length;Me++)Ke(Q.__webglFramebuffer[he][Me],C,M,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+he,Me);else Ke(Q.__webglFramebuffer[he],C,M,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+he,0);v(M)&&b(s.TEXTURE_CUBE_MAP),n.unbindTexture()}else if(Ie){for(let he=0,Me=we.length;he<Me;he++){const He=we[he],pe=r.get(He);let X=s.TEXTURE_2D;(C.isWebGL3DRenderTarget||C.isWebGLArrayRenderTarget)&&(X=C.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),n.bindTexture(X,pe.__webglTexture),ze(X,He),Ke(Q.__webglFramebuffer,C,He,s.COLOR_ATTACHMENT0+he,X,0),v(He)&&b(X)}n.unbindTexture()}else{let he=s.TEXTURE_2D;if((C.isWebGL3DRenderTarget||C.isWebGLArrayRenderTarget)&&(he=C.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),n.bindTexture(he,ye.__webglTexture),ze(he,M),M.mipmaps&&M.mipmaps.length>0)for(let Me=0;Me<M.mipmaps.length;Me++)Ke(Q.__webglFramebuffer[Me],C,M,s.COLOR_ATTACHMENT0,he,Me);else Ke(Q.__webglFramebuffer,C,M,s.COLOR_ATTACHMENT0,he,0);v(M)&&b(he),n.unbindTexture()}C.depthBuffer&&xt(C)}function bt(C){const M=C.textures;for(let Q=0,ye=M.length;Q<ye;Q++){const we=M[Q];if(v(we)){const Ce=I(C),Ie=r.get(we).__webglTexture;n.bindTexture(Ce,Ie),b(Ce),n.unbindTexture()}}}const St=[],Ft=[];function G(C){if(C.samples>0){if(ft(C)===!1){const M=C.textures,Q=C.width,ye=C.height;let we=s.COLOR_BUFFER_BIT;const Ce=C.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,Ie=r.get(C),he=M.length>1;if(he)for(let He=0;He<M.length;He++)n.bindFramebuffer(s.FRAMEBUFFER,Ie.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+He,s.RENDERBUFFER,null),n.bindFramebuffer(s.FRAMEBUFFER,Ie.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+He,s.TEXTURE_2D,null,0);n.bindFramebuffer(s.READ_FRAMEBUFFER,Ie.__webglMultisampledFramebuffer);const Me=C.texture.mipmaps;Me&&Me.length>0?n.bindFramebuffer(s.DRAW_FRAMEBUFFER,Ie.__webglFramebuffer[0]):n.bindFramebuffer(s.DRAW_FRAMEBUFFER,Ie.__webglFramebuffer);for(let He=0;He<M.length;He++){if(C.resolveDepthBuffer&&(C.depthBuffer&&(we|=s.DEPTH_BUFFER_BIT),C.stencilBuffer&&C.resolveStencilBuffer&&(we|=s.STENCIL_BUFFER_BIT)),he){s.framebufferRenderbuffer(s.READ_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.RENDERBUFFER,Ie.__webglColorRenderbuffer[He]);const pe=r.get(M[He]).__webglTexture;s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,pe,0)}s.blitFramebuffer(0,0,Q,ye,0,0,Q,ye,we,s.NEAREST),p===!0&&(St.length=0,Ft.length=0,St.push(s.COLOR_ATTACHMENT0+He),C.depthBuffer&&C.resolveDepthBuffer===!1&&(St.push(Ce),Ft.push(Ce),s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,Ft)),s.invalidateFramebuffer(s.READ_FRAMEBUFFER,St))}if(n.bindFramebuffer(s.READ_FRAMEBUFFER,null),n.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),he)for(let He=0;He<M.length;He++){n.bindFramebuffer(s.FRAMEBUFFER,Ie.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+He,s.RENDERBUFFER,Ie.__webglColorRenderbuffer[He]);const pe=r.get(M[He]).__webglTexture;n.bindFramebuffer(s.FRAMEBUFFER,Ie.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+He,s.TEXTURE_2D,pe,0)}n.bindFramebuffer(s.DRAW_FRAMEBUFFER,Ie.__webglMultisampledFramebuffer)}else if(C.depthBuffer&&C.resolveDepthBuffer===!1&&p){const M=C.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,[M])}}}function Pt(C){return Math.min(a.maxSamples,C.samples)}function ft(C){const M=r.get(C);return C.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&M.__useRenderToTexture!==!1}function wt(C){const M=u.render.frame;x.get(C)!==M&&(x.set(C,M),C.update())}function Fe(C,M){const Q=C.colorSpace,ye=C.format,we=C.type;return C.isCompressedTexture===!0||C.isVideoTexture===!0||Q!==Hl&&Q!==Br&&(Dt.getTransfer(Q)===Gt?(ye!==Ci||we!==si)&&ht("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):Ut("WebGLTextures: Unsupported texture color space:",Q)),M}function Bt(C){return typeof HTMLImageElement<"u"&&C instanceof HTMLImageElement?(m.width=C.naturalWidth||C.width,m.height=C.naturalHeight||C.height):typeof VideoFrame<"u"&&C instanceof VideoFrame?(m.width=C.displayWidth,m.height=C.displayHeight):(m.width=C.width,m.height=C.height),m}this.allocateTextureUnit=ne,this.resetTextureUnits=de,this.getTextureUnits=ve,this.setTextureUnits=W,this.setTexture2D=J,this.setTexture2DArray=_e,this.setTexture3D=xe,this.setTextureCube=O,this.rebindTextures=vt,this.setupRenderTarget=ot,this.updateRenderTargetMipmap=bt,this.updateMultisampleRenderTarget=G,this.setupDepthRenderbuffer=xt,this.setupFrameBufferTexture=Ke,this.useMultisampledRTT=ft,this.isReversedDepthBuffer=function(){return n.buffers.depth.getReversed()}}function U1(s,e){function n(r,a=Br){let c;const u=Dt.getTransfer(a);if(r===si)return s.UNSIGNED_BYTE;if(r===dd)return s.UNSIGNED_SHORT_4_4_4_4;if(r===hd)return s.UNSIGNED_SHORT_5_5_5_1;if(r===_0)return s.UNSIGNED_INT_5_9_9_9_REV;if(r===v0)return s.UNSIGNED_INT_10F_11F_11F_REV;if(r===m0)return s.BYTE;if(r===g0)return s.SHORT;if(r===na)return s.UNSIGNED_SHORT;if(r===fd)return s.INT;if(r===Wi)return s.UNSIGNED_INT;if(r===Bi)return s.FLOAT;if(r===ur)return s.HALF_FLOAT;if(r===x0)return s.ALPHA;if(r===S0)return s.RGB;if(r===Ci)return s.RGBA;if(r===fr)return s.DEPTH_COMPONENT;if(r===fs)return s.DEPTH_STENCIL;if(r===y0)return s.RED;if(r===pd)return s.RED_INTEGER;if(r===ps)return s.RG;if(r===md)return s.RG_INTEGER;if(r===gd)return s.RGBA_INTEGER;if(r===Nl||r===Ul||r===Fl||r===Ol)if(u===Gt)if(c=e.get("WEBGL_compressed_texture_s3tc_srgb"),c!==null){if(r===Nl)return c.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(r===Ul)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(r===Fl)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(r===Ol)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(c=e.get("WEBGL_compressed_texture_s3tc"),c!==null){if(r===Nl)return c.COMPRESSED_RGB_S3TC_DXT1_EXT;if(r===Ul)return c.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(r===Fl)return c.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(r===Ol)return c.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(r===Af||r===bf||r===Cf||r===Rf)if(c=e.get("WEBGL_compressed_texture_pvrtc"),c!==null){if(r===Af)return c.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(r===bf)return c.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(r===Cf)return c.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(r===Rf)return c.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(r===Pf||r===Lf||r===Df||r===If||r===Nf||r===Bl||r===Uf)if(c=e.get("WEBGL_compressed_texture_etc"),c!==null){if(r===Pf||r===Lf)return u===Gt?c.COMPRESSED_SRGB8_ETC2:c.COMPRESSED_RGB8_ETC2;if(r===Df)return u===Gt?c.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:c.COMPRESSED_RGBA8_ETC2_EAC;if(r===If)return c.COMPRESSED_R11_EAC;if(r===Nf)return c.COMPRESSED_SIGNED_R11_EAC;if(r===Bl)return c.COMPRESSED_RG11_EAC;if(r===Uf)return c.COMPRESSED_SIGNED_RG11_EAC}else return null;if(r===Ff||r===Of||r===kf||r===Bf||r===zf||r===Hf||r===Vf||r===Gf||r===Wf||r===Xf||r===jf||r===Yf||r===qf||r===Kf)if(c=e.get("WEBGL_compressed_texture_astc"),c!==null){if(r===Ff)return u===Gt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:c.COMPRESSED_RGBA_ASTC_4x4_KHR;if(r===Of)return u===Gt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:c.COMPRESSED_RGBA_ASTC_5x4_KHR;if(r===kf)return u===Gt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:c.COMPRESSED_RGBA_ASTC_5x5_KHR;if(r===Bf)return u===Gt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:c.COMPRESSED_RGBA_ASTC_6x5_KHR;if(r===zf)return u===Gt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:c.COMPRESSED_RGBA_ASTC_6x6_KHR;if(r===Hf)return u===Gt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:c.COMPRESSED_RGBA_ASTC_8x5_KHR;if(r===Vf)return u===Gt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:c.COMPRESSED_RGBA_ASTC_8x6_KHR;if(r===Gf)return u===Gt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:c.COMPRESSED_RGBA_ASTC_8x8_KHR;if(r===Wf)return u===Gt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:c.COMPRESSED_RGBA_ASTC_10x5_KHR;if(r===Xf)return u===Gt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:c.COMPRESSED_RGBA_ASTC_10x6_KHR;if(r===jf)return u===Gt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:c.COMPRESSED_RGBA_ASTC_10x8_KHR;if(r===Yf)return u===Gt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:c.COMPRESSED_RGBA_ASTC_10x10_KHR;if(r===qf)return u===Gt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:c.COMPRESSED_RGBA_ASTC_12x10_KHR;if(r===Kf)return u===Gt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:c.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(r===$f||r===Zf||r===Jf)if(c=e.get("EXT_texture_compression_bptc"),c!==null){if(r===$f)return u===Gt?c.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:c.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(r===Zf)return c.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(r===Jf)return c.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(r===Qf||r===ed||r===zl||r===td)if(c=e.get("EXT_texture_compression_rgtc"),c!==null){if(r===Qf)return c.COMPRESSED_RED_RGTC1_EXT;if(r===ed)return c.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(r===zl)return c.COMPRESSED_RED_GREEN_RGTC2_EXT;if(r===td)return c.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return r===ia?s.UNSIGNED_INT_24_8:s[r]!==void 0?s[r]:null}return{convert:n}}const F1=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,O1=`
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

}`;class k1{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,n){if(this.texture===null){const r=new R0(e.texture);(e.depthNear!==n.depthNear||e.depthFar!==n.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=r}}getMesh(e){if(this.texture!==null&&this.mesh===null){const n=e.cameras[0].viewport,r=new Xi({vertexShader:F1,fragmentShader:O1,uniforms:{depthColor:{value:this.texture},depthWidth:{value:n.z},depthHeight:{value:n.w}}});this.mesh=new De(new hn(20,20),r)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class B1 extends ms{constructor(e,n){super();const r=this;let a=null,c=1,u=null,d="local-floor",p=1,m=null,x=null,S=null,_=null,y=null,T=null;const R=typeof XRWebGLBinding<"u",g=new k1,v={},b=n.getContextAttributes();let I=null,P=null;const H=[],L=[],z=new It;let w=null;const D=new ri;D.viewport=new sn;const j=new ri;j.viewport=new sn;const k=[D,j],q=new qv;let de=null,ve=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(re){let Ee=H[re];return Ee===void 0&&(Ee=new Gu,H[re]=Ee),Ee.getTargetRaySpace()},this.getControllerGrip=function(re){let Ee=H[re];return Ee===void 0&&(Ee=new Gu,H[re]=Ee),Ee.getGripSpace()},this.getHand=function(re){let Ee=H[re];return Ee===void 0&&(Ee=new Gu,H[re]=Ee),Ee.getHandSpace()};function W(re){const Ee=L.indexOf(re.inputSource);if(Ee===-1)return;const U=H[Ee];U!==void 0&&(U.update(re.inputSource,re.frame,m||u),U.dispatchEvent({type:re.type,data:re.inputSource}))}function ne(){a.removeEventListener("select",W),a.removeEventListener("selectstart",W),a.removeEventListener("selectend",W),a.removeEventListener("squeeze",W),a.removeEventListener("squeezestart",W),a.removeEventListener("squeezeend",W),a.removeEventListener("end",ne),a.removeEventListener("inputsourceschange",Z);for(let re=0;re<H.length;re++){const Ee=L[re];Ee!==null&&(L[re]=null,H[re].disconnect(Ee))}de=null,ve=null,g.reset();for(const re in v)delete v[re];e.setRenderTarget(I),y=null,_=null,S=null,a=null,P=null,ze.stop(),r.isPresenting=!1,e.setPixelRatio(w),e.setSize(z.width,z.height,!1),r.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(re){c=re,r.isPresenting===!0&&ht("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(re){d=re,r.isPresenting===!0&&ht("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return m||u},this.setReferenceSpace=function(re){m=re},this.getBaseLayer=function(){return _!==null?_:y},this.getBinding=function(){return S===null&&R&&(S=new XRWebGLBinding(a,n)),S},this.getFrame=function(){return T},this.getSession=function(){return a},this.setSession=async function(re){if(a=re,a!==null){if(I=e.getRenderTarget(),a.addEventListener("select",W),a.addEventListener("selectstart",W),a.addEventListener("selectend",W),a.addEventListener("squeeze",W),a.addEventListener("squeezestart",W),a.addEventListener("squeezeend",W),a.addEventListener("end",ne),a.addEventListener("inputsourceschange",Z),b.xrCompatible!==!0&&await n.makeXRCompatible(),w=e.getPixelRatio(),e.getSize(z),R&&"createProjectionLayer"in XRWebGLBinding.prototype){let U=null,N=null,Ue=null;b.depth&&(Ue=b.stencil?n.DEPTH24_STENCIL8:n.DEPTH_COMPONENT24,U=b.stencil?fs:fr,N=b.stencil?ia:Wi);const Ke={colorFormat:n.RGBA8,depthFormat:Ue,scaleFactor:c};S=this.getBinding(),_=S.createProjectionLayer(Ke),a.updateRenderState({layers:[_]}),e.setPixelRatio(1),e.setSize(_.textureWidth,_.textureHeight,!1),P=new Vi(_.textureWidth,_.textureHeight,{format:Ci,type:si,depthTexture:new ro(_.textureWidth,_.textureHeight,N,void 0,void 0,void 0,void 0,void 0,void 0,U),stencilBuffer:b.stencil,colorSpace:e.outputColorSpace,samples:b.antialias?4:0,resolveDepthBuffer:_.ignoreDepthValues===!1,resolveStencilBuffer:_.ignoreDepthValues===!1})}else{const U={antialias:b.antialias,alpha:!0,depth:b.depth,stencil:b.stencil,framebufferScaleFactor:c};y=new XRWebGLLayer(a,n,U),a.updateRenderState({baseLayer:y}),e.setPixelRatio(1),e.setSize(y.framebufferWidth,y.framebufferHeight,!1),P=new Vi(y.framebufferWidth,y.framebufferHeight,{format:Ci,type:si,colorSpace:e.outputColorSpace,stencilBuffer:b.stencil,resolveDepthBuffer:y.ignoreDepthValues===!1,resolveStencilBuffer:y.ignoreDepthValues===!1})}P.isXRRenderTarget=!0,this.setFoveation(p),m=null,u=await a.requestReferenceSpace(d),ze.setContext(a),ze.start(),r.isPresenting=!0,r.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(a!==null)return a.environmentBlendMode},this.getDepthTexture=function(){return g.getDepthTexture()};function Z(re){for(let Ee=0;Ee<re.removed.length;Ee++){const U=re.removed[Ee],N=L.indexOf(U);N>=0&&(L[N]=null,H[N].disconnect(U))}for(let Ee=0;Ee<re.added.length;Ee++){const U=re.added[Ee];let N=L.indexOf(U);if(N===-1){for(let Ke=0;Ke<H.length;Ke++)if(Ke>=L.length){L.push(U),N=Ke;break}else if(L[Ke]===null){L[Ke]=U,N=Ke;break}if(N===-1)break}const Ue=H[N];Ue&&Ue.connect(U)}}const J=new te,_e=new te;function xe(re,Ee,U){J.setFromMatrixPosition(Ee.matrixWorld),_e.setFromMatrixPosition(U.matrixWorld);const N=J.distanceTo(_e),Ue=Ee.projectionMatrix.elements,Ke=U.projectionMatrix.elements,gt=Ue[14]/(Ue[10]-1),at=Ue[14]/(Ue[10]+1),xt=(Ue[9]+1)/Ue[5],vt=(Ue[9]-1)/Ue[5],ot=(Ue[8]-1)/Ue[0],bt=(Ke[8]+1)/Ke[0],St=gt*ot,Ft=gt*bt,G=N/(-ot+bt),Pt=G*-ot;if(Ee.matrixWorld.decompose(re.position,re.quaternion,re.scale),re.translateX(Pt),re.translateZ(G),re.matrixWorld.compose(re.position,re.quaternion,re.scale),re.matrixWorldInverse.copy(re.matrixWorld).invert(),Ue[10]===-1)re.projectionMatrix.copy(Ee.projectionMatrix),re.projectionMatrixInverse.copy(Ee.projectionMatrixInverse);else{const ft=gt+G,wt=at+G,Fe=St-Pt,Bt=Ft+(N-Pt),C=xt*at/wt*ft,M=vt*at/wt*ft;re.projectionMatrix.makePerspective(Fe,Bt,C,M,ft,wt),re.projectionMatrixInverse.copy(re.projectionMatrix).invert()}}function O(re,Ee){Ee===null?re.matrixWorld.copy(re.matrix):re.matrixWorld.multiplyMatrices(Ee.matrixWorld,re.matrix),re.matrixWorldInverse.copy(re.matrixWorld).invert()}this.updateCamera=function(re){if(a===null)return;let Ee=re.near,U=re.far;g.texture!==null&&(g.depthNear>0&&(Ee=g.depthNear),g.depthFar>0&&(U=g.depthFar)),q.near=j.near=D.near=Ee,q.far=j.far=D.far=U,(de!==q.near||ve!==q.far)&&(a.updateRenderState({depthNear:q.near,depthFar:q.far}),de=q.near,ve=q.far),q.layers.mask=re.layers.mask|6,D.layers.mask=q.layers.mask&-5,j.layers.mask=q.layers.mask&-3;const N=re.parent,Ue=q.cameras;O(q,N);for(let Ke=0;Ke<Ue.length;Ke++)O(Ue[Ke],N);Ue.length===2?xe(q,D,j):q.projectionMatrix.copy(D.projectionMatrix),ie(re,q,N)};function ie(re,Ee,U){U===null?re.matrix.copy(Ee.matrixWorld):(re.matrix.copy(U.matrixWorld),re.matrix.invert(),re.matrix.multiply(Ee.matrixWorld)),re.matrix.decompose(re.position,re.quaternion,re.scale),re.updateMatrixWorld(!0),re.projectionMatrix.copy(Ee.projectionMatrix),re.projectionMatrixInverse.copy(Ee.projectionMatrixInverse),re.isPerspectiveCamera&&(re.fov=rd*2*Math.atan(1/re.projectionMatrix.elements[5]),re.zoom=1)}this.getCamera=function(){return q},this.getFoveation=function(){if(!(_===null&&y===null))return p},this.setFoveation=function(re){p=re,_!==null&&(_.fixedFoveation=re),y!==null&&y.fixedFoveation!==void 0&&(y.fixedFoveation=re)},this.hasDepthSensing=function(){return g.texture!==null},this.getDepthSensingMesh=function(){return g.getMesh(q)},this.getCameraTexture=function(re){return v[re]};let Be=null;function Ge(re,Ee){if(x=Ee.getViewerPose(m||u),T=Ee,x!==null){const U=x.views;y!==null&&(e.setRenderTargetFramebuffer(P,y.framebuffer),e.setRenderTarget(P));let N=!1;U.length!==q.cameras.length&&(q.cameras.length=0,N=!0);for(let at=0;at<U.length;at++){const xt=U[at];let vt=null;if(y!==null)vt=y.getViewport(xt);else{const bt=S.getViewSubImage(_,xt);vt=bt.viewport,at===0&&(e.setRenderTargetTextures(P,bt.colorTexture,bt.depthStencilTexture),e.setRenderTarget(P))}let ot=k[at];ot===void 0&&(ot=new ri,ot.layers.enable(at),ot.viewport=new sn,k[at]=ot),ot.matrix.fromArray(xt.transform.matrix),ot.matrix.decompose(ot.position,ot.quaternion,ot.scale),ot.projectionMatrix.fromArray(xt.projectionMatrix),ot.projectionMatrixInverse.copy(ot.projectionMatrix).invert(),ot.viewport.set(vt.x,vt.y,vt.width,vt.height),at===0&&(q.matrix.copy(ot.matrix),q.matrix.decompose(q.position,q.quaternion,q.scale)),N===!0&&q.cameras.push(ot)}const Ue=a.enabledFeatures;if(Ue&&Ue.includes("depth-sensing")&&a.depthUsage=="gpu-optimized"&&R){S=r.getBinding();const at=S.getDepthInformation(U[0]);at&&at.isValid&&at.texture&&g.init(at,a.renderState)}if(Ue&&Ue.includes("camera-access")&&R){e.state.unbindTexture(),S=r.getBinding();for(let at=0;at<U.length;at++){const xt=U[at].camera;if(xt){let vt=v[xt];vt||(vt=new R0,v[xt]=vt);const ot=S.getCameraImage(xt);vt.sourceTexture=ot}}}}for(let U=0;U<H.length;U++){const N=L[U],Ue=H[U];N!==null&&Ue!==void 0&&Ue.update(N,Ee,m||u)}Be&&Be(re,Ee),Ee.detectedPlanes&&r.dispatchEvent({type:"planesdetected",data:Ee}),T=null}const ze=new I0;ze.setAnimationLoop(Ge),this.setAnimationLoop=function(re){Be=re},this.dispose=function(){}}}const z1=new on,z0=new _t;z0.set(-1,0,0,0,1,0,0,0,1);function H1(s,e){function n(g,v){g.matrixAutoUpdate===!0&&g.updateMatrix(),v.value.copy(g.matrix)}function r(g,v){v.color.getRGB(g.fogColor.value,P0(s)),v.isFog?(g.fogNear.value=v.near,g.fogFar.value=v.far):v.isFogExp2&&(g.fogDensity.value=v.density)}function a(g,v,b,I,P){v.isNodeMaterial?v.uniformsNeedUpdate=!1:v.isMeshBasicMaterial?c(g,v):v.isMeshLambertMaterial?(c(g,v),v.envMap&&(g.envMapIntensity.value=v.envMapIntensity)):v.isMeshToonMaterial?(c(g,v),S(g,v)):v.isMeshPhongMaterial?(c(g,v),x(g,v),v.envMap&&(g.envMapIntensity.value=v.envMapIntensity)):v.isMeshStandardMaterial?(c(g,v),_(g,v),v.isMeshPhysicalMaterial&&y(g,v,P)):v.isMeshMatcapMaterial?(c(g,v),T(g,v)):v.isMeshDepthMaterial?c(g,v):v.isMeshDistanceMaterial?(c(g,v),R(g,v)):v.isMeshNormalMaterial?c(g,v):v.isLineBasicMaterial?(u(g,v),v.isLineDashedMaterial&&d(g,v)):v.isPointsMaterial?p(g,v,b,I):v.isSpriteMaterial?m(g,v):v.isShadowMaterial?(g.color.value.copy(v.color),g.opacity.value=v.opacity):v.isShaderMaterial&&(v.uniformsNeedUpdate=!1)}function c(g,v){g.opacity.value=v.opacity,v.color&&g.diffuse.value.copy(v.color),v.emissive&&g.emissive.value.copy(v.emissive).multiplyScalar(v.emissiveIntensity),v.map&&(g.map.value=v.map,n(v.map,g.mapTransform)),v.alphaMap&&(g.alphaMap.value=v.alphaMap,n(v.alphaMap,g.alphaMapTransform)),v.bumpMap&&(g.bumpMap.value=v.bumpMap,n(v.bumpMap,g.bumpMapTransform),g.bumpScale.value=v.bumpScale,v.side===Zn&&(g.bumpScale.value*=-1)),v.normalMap&&(g.normalMap.value=v.normalMap,n(v.normalMap,g.normalMapTransform),g.normalScale.value.copy(v.normalScale),v.side===Zn&&g.normalScale.value.negate()),v.displacementMap&&(g.displacementMap.value=v.displacementMap,n(v.displacementMap,g.displacementMapTransform),g.displacementScale.value=v.displacementScale,g.displacementBias.value=v.displacementBias),v.emissiveMap&&(g.emissiveMap.value=v.emissiveMap,n(v.emissiveMap,g.emissiveMapTransform)),v.specularMap&&(g.specularMap.value=v.specularMap,n(v.specularMap,g.specularMapTransform)),v.alphaTest>0&&(g.alphaTest.value=v.alphaTest);const b=e.get(v),I=b.envMap,P=b.envMapRotation;I&&(g.envMap.value=I,g.envMapRotation.value.setFromMatrix4(z1.makeRotationFromEuler(P)).transpose(),I.isCubeTexture&&I.isRenderTargetTexture===!1&&g.envMapRotation.value.premultiply(z0),g.reflectivity.value=v.reflectivity,g.ior.value=v.ior,g.refractionRatio.value=v.refractionRatio),v.lightMap&&(g.lightMap.value=v.lightMap,g.lightMapIntensity.value=v.lightMapIntensity,n(v.lightMap,g.lightMapTransform)),v.aoMap&&(g.aoMap.value=v.aoMap,g.aoMapIntensity.value=v.aoMapIntensity,n(v.aoMap,g.aoMapTransform))}function u(g,v){g.diffuse.value.copy(v.color),g.opacity.value=v.opacity,v.map&&(g.map.value=v.map,n(v.map,g.mapTransform))}function d(g,v){g.dashSize.value=v.dashSize,g.totalSize.value=v.dashSize+v.gapSize,g.scale.value=v.scale}function p(g,v,b,I){g.diffuse.value.copy(v.color),g.opacity.value=v.opacity,g.size.value=v.size*b,g.scale.value=I*.5,v.map&&(g.map.value=v.map,n(v.map,g.uvTransform)),v.alphaMap&&(g.alphaMap.value=v.alphaMap,n(v.alphaMap,g.alphaMapTransform)),v.alphaTest>0&&(g.alphaTest.value=v.alphaTest)}function m(g,v){g.diffuse.value.copy(v.color),g.opacity.value=v.opacity,g.rotation.value=v.rotation,v.map&&(g.map.value=v.map,n(v.map,g.mapTransform)),v.alphaMap&&(g.alphaMap.value=v.alphaMap,n(v.alphaMap,g.alphaMapTransform)),v.alphaTest>0&&(g.alphaTest.value=v.alphaTest)}function x(g,v){g.specular.value.copy(v.specular),g.shininess.value=Math.max(v.shininess,1e-4)}function S(g,v){v.gradientMap&&(g.gradientMap.value=v.gradientMap)}function _(g,v){g.metalness.value=v.metalness,v.metalnessMap&&(g.metalnessMap.value=v.metalnessMap,n(v.metalnessMap,g.metalnessMapTransform)),g.roughness.value=v.roughness,v.roughnessMap&&(g.roughnessMap.value=v.roughnessMap,n(v.roughnessMap,g.roughnessMapTransform)),v.envMap&&(g.envMapIntensity.value=v.envMapIntensity)}function y(g,v,b){g.ior.value=v.ior,v.sheen>0&&(g.sheenColor.value.copy(v.sheenColor).multiplyScalar(v.sheen),g.sheenRoughness.value=v.sheenRoughness,v.sheenColorMap&&(g.sheenColorMap.value=v.sheenColorMap,n(v.sheenColorMap,g.sheenColorMapTransform)),v.sheenRoughnessMap&&(g.sheenRoughnessMap.value=v.sheenRoughnessMap,n(v.sheenRoughnessMap,g.sheenRoughnessMapTransform))),v.clearcoat>0&&(g.clearcoat.value=v.clearcoat,g.clearcoatRoughness.value=v.clearcoatRoughness,v.clearcoatMap&&(g.clearcoatMap.value=v.clearcoatMap,n(v.clearcoatMap,g.clearcoatMapTransform)),v.clearcoatRoughnessMap&&(g.clearcoatRoughnessMap.value=v.clearcoatRoughnessMap,n(v.clearcoatRoughnessMap,g.clearcoatRoughnessMapTransform)),v.clearcoatNormalMap&&(g.clearcoatNormalMap.value=v.clearcoatNormalMap,n(v.clearcoatNormalMap,g.clearcoatNormalMapTransform),g.clearcoatNormalScale.value.copy(v.clearcoatNormalScale),v.side===Zn&&g.clearcoatNormalScale.value.negate())),v.dispersion>0&&(g.dispersion.value=v.dispersion),v.iridescence>0&&(g.iridescence.value=v.iridescence,g.iridescenceIOR.value=v.iridescenceIOR,g.iridescenceThicknessMinimum.value=v.iridescenceThicknessRange[0],g.iridescenceThicknessMaximum.value=v.iridescenceThicknessRange[1],v.iridescenceMap&&(g.iridescenceMap.value=v.iridescenceMap,n(v.iridescenceMap,g.iridescenceMapTransform)),v.iridescenceThicknessMap&&(g.iridescenceThicknessMap.value=v.iridescenceThicknessMap,n(v.iridescenceThicknessMap,g.iridescenceThicknessMapTransform))),v.transmission>0&&(g.transmission.value=v.transmission,g.transmissionSamplerMap.value=b.texture,g.transmissionSamplerSize.value.set(b.width,b.height),v.transmissionMap&&(g.transmissionMap.value=v.transmissionMap,n(v.transmissionMap,g.transmissionMapTransform)),g.thickness.value=v.thickness,v.thicknessMap&&(g.thicknessMap.value=v.thicknessMap,n(v.thicknessMap,g.thicknessMapTransform)),g.attenuationDistance.value=v.attenuationDistance,g.attenuationColor.value.copy(v.attenuationColor)),v.anisotropy>0&&(g.anisotropyVector.value.set(v.anisotropy*Math.cos(v.anisotropyRotation),v.anisotropy*Math.sin(v.anisotropyRotation)),v.anisotropyMap&&(g.anisotropyMap.value=v.anisotropyMap,n(v.anisotropyMap,g.anisotropyMapTransform))),g.specularIntensity.value=v.specularIntensity,g.specularColor.value.copy(v.specularColor),v.specularColorMap&&(g.specularColorMap.value=v.specularColorMap,n(v.specularColorMap,g.specularColorMapTransform)),v.specularIntensityMap&&(g.specularIntensityMap.value=v.specularIntensityMap,n(v.specularIntensityMap,g.specularIntensityMapTransform))}function T(g,v){v.matcap&&(g.matcap.value=v.matcap)}function R(g,v){const b=e.get(v).light;g.referencePosition.value.setFromMatrixPosition(b.matrixWorld),g.nearDistance.value=b.shadow.camera.near,g.farDistance.value=b.shadow.camera.far}return{refreshFogUniforms:r,refreshMaterialUniforms:a}}function V1(s,e,n,r){let a={},c={},u=[];const d=s.getParameter(s.MAX_UNIFORM_BUFFER_BINDINGS);function p(b,I){const P=I.program;r.uniformBlockBinding(b,P)}function m(b,I){let P=a[b.id];P===void 0&&(T(b),P=x(b),a[b.id]=P,b.addEventListener("dispose",g));const H=I.program;r.updateUBOMapping(b,H);const L=e.render.frame;c[b.id]!==L&&(_(b),c[b.id]=L)}function x(b){const I=S();b.__bindingPointIndex=I;const P=s.createBuffer(),H=b.__size,L=b.usage;return s.bindBuffer(s.UNIFORM_BUFFER,P),s.bufferData(s.UNIFORM_BUFFER,H,L),s.bindBuffer(s.UNIFORM_BUFFER,null),s.bindBufferBase(s.UNIFORM_BUFFER,I,P),P}function S(){for(let b=0;b<d;b++)if(u.indexOf(b)===-1)return u.push(b),b;return Ut("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function _(b){const I=a[b.id],P=b.uniforms,H=b.__cache;s.bindBuffer(s.UNIFORM_BUFFER,I);for(let L=0,z=P.length;L<z;L++){const w=Array.isArray(P[L])?P[L]:[P[L]];for(let D=0,j=w.length;D<j;D++){const k=w[D];if(y(k,L,D,H)===!0){const q=k.__offset,de=Array.isArray(k.value)?k.value:[k.value];let ve=0;for(let W=0;W<de.length;W++){const ne=de[W],Z=R(ne);typeof ne=="number"||typeof ne=="boolean"?(k.__data[0]=ne,s.bufferSubData(s.UNIFORM_BUFFER,q+ve,k.__data)):ne.isMatrix3?(k.__data[0]=ne.elements[0],k.__data[1]=ne.elements[1],k.__data[2]=ne.elements[2],k.__data[3]=0,k.__data[4]=ne.elements[3],k.__data[5]=ne.elements[4],k.__data[6]=ne.elements[5],k.__data[7]=0,k.__data[8]=ne.elements[6],k.__data[9]=ne.elements[7],k.__data[10]=ne.elements[8],k.__data[11]=0):ArrayBuffer.isView(ne)?k.__data.set(new ne.constructor(ne.buffer,ne.byteOffset,k.__data.length)):(ne.toArray(k.__data,ve),ve+=Z.storage/Float32Array.BYTES_PER_ELEMENT)}s.bufferSubData(s.UNIFORM_BUFFER,q,k.__data)}}}s.bindBuffer(s.UNIFORM_BUFFER,null)}function y(b,I,P,H){const L=b.value,z=I+"_"+P;if(H[z]===void 0)return typeof L=="number"||typeof L=="boolean"?H[z]=L:ArrayBuffer.isView(L)?H[z]=L.slice():H[z]=L.clone(),!0;{const w=H[z];if(typeof L=="number"||typeof L=="boolean"){if(w!==L)return H[z]=L,!0}else{if(ArrayBuffer.isView(L))return!0;if(w.equals(L)===!1)return w.copy(L),!0}}return!1}function T(b){const I=b.uniforms;let P=0;const H=16;for(let z=0,w=I.length;z<w;z++){const D=Array.isArray(I[z])?I[z]:[I[z]];for(let j=0,k=D.length;j<k;j++){const q=D[j],de=Array.isArray(q.value)?q.value:[q.value];for(let ve=0,W=de.length;ve<W;ve++){const ne=de[ve],Z=R(ne),J=P%H,_e=J%Z.boundary,xe=J+_e;P+=_e,xe!==0&&H-xe<Z.storage&&(P+=H-xe),q.__data=new Float32Array(Z.storage/Float32Array.BYTES_PER_ELEMENT),q.__offset=P,P+=Z.storage}}}const L=P%H;return L>0&&(P+=H-L),b.__size=P,b.__cache={},this}function R(b){const I={boundary:0,storage:0};return typeof b=="number"||typeof b=="boolean"?(I.boundary=4,I.storage=4):b.isVector2?(I.boundary=8,I.storage=8):b.isVector3||b.isColor?(I.boundary=16,I.storage=12):b.isVector4?(I.boundary=16,I.storage=16):b.isMatrix3?(I.boundary=48,I.storage=48):b.isMatrix4?(I.boundary=64,I.storage=64):b.isTexture?ht("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(b)?(I.boundary=16,I.storage=b.byteLength):ht("WebGLRenderer: Unsupported uniform value type.",b),I}function g(b){const I=b.target;I.removeEventListener("dispose",g);const P=u.indexOf(I.__bindingPointIndex);u.splice(P,1),s.deleteBuffer(a[I.id]),delete a[I.id],delete c[I.id]}function v(){for(const b in a)s.deleteBuffer(a[b]);u=[],a={},c={}}return{bind:p,update:m,dispose:v}}const G1=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let Oi=null;function W1(){return Oi===null&&(Oi=new Pv(G1,16,16,ps,ur),Oi.name="DFG_LUT",Oi.minFilter=Nn,Oi.magFilter=Nn,Oi.wrapS=ar,Oi.wrapT=ar,Oi.generateMipmaps=!1,Oi.needsUpdate=!0),Oi}class X1{constructor(e={}){const{canvas:n=av(),context:r=null,depth:a=!0,stencil:c=!1,alpha:u=!1,antialias:d=!1,premultipliedAlpha:p=!0,preserveDrawingBuffer:m=!1,powerPreference:x="default",failIfMajorPerformanceCaveat:S=!1,reversedDepthBuffer:_=!1,outputBufferType:y=si}=e;this.isWebGLRenderer=!0;let T;if(r!==null){if(typeof WebGLRenderingContext<"u"&&r instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");T=r.getContextAttributes().alpha}else T=u;const R=y,g=new Set([gd,md,pd]),v=new Set([si,Wi,na,ia,dd,hd]),b=new Uint32Array(4),I=new Int32Array(4),P=new te;let H=null,L=null;const z=[],w=[];let D=null;this.domElement=n,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Hi,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const j=this;let k=!1,q=null;this._outputColorSpace=$n;let de=0,ve=0,W=null,ne=-1,Z=null;const J=new sn,_e=new sn;let xe=null;const O=new Mt(0);let ie=0,Be=n.width,Ge=n.height,ze=1,re=null,Ee=null;const U=new sn(0,0,Be,Ge),N=new sn(0,0,Be,Ge);let Ue=!1;const Ke=new Ed;let gt=!1,at=!1;const xt=new on,vt=new te,ot=new sn,bt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let St=!1;function Ft(){return W===null?ze:1}let G=r;function Pt(A,K){return n.getContext(A,K)}try{const A={alpha:!0,depth:a,stencil:c,antialias:d,premultipliedAlpha:p,preserveDrawingBuffer:m,powerPreference:x,failIfMajorPerformanceCaveat:S};if("setAttribute"in n&&n.setAttribute("data-engine",`three.js r${cd}`),n.addEventListener("webglcontextlost",se,!1),n.addEventListener("webglcontextrestored",Re,!1),n.addEventListener("webglcontextcreationerror",Xe,!1),G===null){const K="webgl2";if(G=Pt(K,A),G===null)throw Pt(K)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(A){throw Ut("WebGLRenderer: "+A.message),A}let ft,wt,Fe,Bt,C,M,Q,ye,we,Ce,Ie,he,Me,He,pe,X,ee,Le,Ve,lt,B,Te,Se;function ue(){ft=new Wy(G),ft.init(),B=new U1(G,ft),wt=new Fy(G,ft,e,B),Fe=new I1(G,ft),wt.reversedDepthBuffer&&_&&Fe.buffers.depth.setReversed(!0),Bt=new Yy(G),C=new x1,M=new N1(G,ft,Fe,C,wt,B,Bt),Q=new Gy(j),ye=new Zv(G),Te=new Ny(G,ye),we=new Xy(G,ye,Bt,Te),Ce=new Ky(G,we,ye,Te,Bt),Le=new qy(G,wt,M),pe=new Oy(C),Ie=new v1(j,Q,ft,wt,Te,pe),he=new H1(j,C),Me=new y1,He=new b1(ft),ee=new Iy(j,Q,Fe,Ce,T,p),X=new D1(j,Ce,wt),Se=new V1(G,Bt,wt,Fe),Ve=new Uy(G,ft,Bt),lt=new jy(G,ft,Bt),Bt.programs=Ie.programs,j.capabilities=wt,j.extensions=ft,j.properties=C,j.renderLists=Me,j.shadowMap=X,j.state=Fe,j.info=Bt}ue(),R!==si&&(D=new Zy(R,n.width,n.height,a,c));const $=new B1(j,G);this.xr=$,this.getContext=function(){return G},this.getContextAttributes=function(){return G.getContextAttributes()},this.forceContextLoss=function(){const A=ft.get("WEBGL_lose_context");A&&A.loseContext()},this.forceContextRestore=function(){const A=ft.get("WEBGL_lose_context");A&&A.restoreContext()},this.getPixelRatio=function(){return ze},this.setPixelRatio=function(A){A!==void 0&&(ze=A,this.setSize(Be,Ge,!1))},this.getSize=function(A){return A.set(Be,Ge)},this.setSize=function(A,K,me=!0){if($.isPresenting){ht("WebGLRenderer: Can't change size while VR device is presenting.");return}Be=A,Ge=K,n.width=Math.floor(A*ze),n.height=Math.floor(K*ze),me===!0&&(n.style.width=A+"px",n.style.height=K+"px"),D!==null&&D.setSize(n.width,n.height),this.setViewport(0,0,A,K)},this.getDrawingBufferSize=function(A){return A.set(Be*ze,Ge*ze).floor()},this.setDrawingBufferSize=function(A,K,me){Be=A,Ge=K,ze=me,n.width=Math.floor(A*me),n.height=Math.floor(K*me),this.setViewport(0,0,A,K)},this.setEffects=function(A){if(R===si){Ut("THREE.WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(A){for(let K=0;K<A.length;K++)if(A[K].isOutputPass===!0){ht("THREE.WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}D.setEffects(A||[])},this.getCurrentViewport=function(A){return A.copy(J)},this.getViewport=function(A){return A.copy(U)},this.setViewport=function(A,K,me,ce){A.isVector4?U.set(A.x,A.y,A.z,A.w):U.set(A,K,me,ce),Fe.viewport(J.copy(U).multiplyScalar(ze).round())},this.getScissor=function(A){return A.copy(N)},this.setScissor=function(A,K,me,ce){A.isVector4?N.set(A.x,A.y,A.z,A.w):N.set(A,K,me,ce),Fe.scissor(_e.copy(N).multiplyScalar(ze).round())},this.getScissorTest=function(){return Ue},this.setScissorTest=function(A){Fe.setScissorTest(Ue=A)},this.setOpaqueSort=function(A){re=A},this.setTransparentSort=function(A){Ee=A},this.getClearColor=function(A){return A.copy(ee.getClearColor())},this.setClearColor=function(){ee.setClearColor(...arguments)},this.getClearAlpha=function(){return ee.getClearAlpha()},this.setClearAlpha=function(){ee.setClearAlpha(...arguments)},this.clear=function(A=!0,K=!0,me=!0){let ce=0;if(A){let le=!1;if(W!==null){const ke=W.texture.format;le=g.has(ke)}if(le){const ke=W.texture.type,qe=v.has(ke),Oe=ee.getClearColor(),Qe=ee.getClearAlpha(),rt=Oe.r,pt=Oe.g,mt=Oe.b;qe?(b[0]=rt,b[1]=pt,b[2]=mt,b[3]=Qe,G.clearBufferuiv(G.COLOR,0,b)):(I[0]=rt,I[1]=pt,I[2]=mt,I[3]=Qe,G.clearBufferiv(G.COLOR,0,I))}else ce|=G.COLOR_BUFFER_BIT}K&&(ce|=G.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),me&&(ce|=G.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),ce!==0&&G.clear(ce)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(A){A.setRenderer(this),q=A},this.dispose=function(){n.removeEventListener("webglcontextlost",se,!1),n.removeEventListener("webglcontextrestored",Re,!1),n.removeEventListener("webglcontextcreationerror",Xe,!1),ee.dispose(),Me.dispose(),He.dispose(),C.dispose(),Q.dispose(),Ce.dispose(),Te.dispose(),Se.dispose(),Ie.dispose(),$.dispose(),$.removeEventListener("sessionstart",mi),$.removeEventListener("sessionend",Mn),On.stop()};function se(A){A.preventDefault(),hm("WebGLRenderer: Context Lost."),k=!0}function Re(){hm("WebGLRenderer: Context Restored."),k=!1;const A=Bt.autoReset,K=X.enabled,me=X.autoUpdate,ce=X.needsUpdate,le=X.type;ue(),Bt.autoReset=A,X.enabled=K,X.autoUpdate=me,X.needsUpdate=ce,X.type=le}function Xe(A){Ut("WebGLRenderer: A WebGL context could not be created. Reason: ",A.statusMessage)}function st(A){const K=A.target;K.removeEventListener("dispose",st),Je(K)}function Je(A){Wt(A),C.remove(A)}function Wt(A){const K=C.get(A).programs;K!==void 0&&(K.forEach(function(me){Ie.releaseProgram(me)}),A.isShaderMaterial&&Ie.releaseShaderCache(A))}this.renderBufferDirect=function(A,K,me,ce,le,ke){K===null&&(K=bt);const qe=le.isMesh&&le.matrixWorld.determinant()<0,Oe=ua(A,K,me,ce,le);Fe.setMaterial(ce,qe);let Qe=me.index,rt=1;if(ce.wireframe===!0){if(Qe=we.getWireframeAttribute(me),Qe===void 0)return;rt=2}const pt=me.drawRange,mt=me.attributes.position;let nt=pt.start*rt,Nt=(pt.start+pt.count)*rt;ke!==null&&(nt=Math.max(nt,ke.start*rt),Nt=Math.min(Nt,(ke.start+ke.count)*rt)),Qe!==null?(nt=Math.max(nt,0),Nt=Math.min(Nt,Qe.count)):mt!=null&&(nt=Math.max(nt,0),Nt=Math.min(Nt,mt.count));const Xt=Nt-nt;if(Xt<0||Xt===1/0)return;Te.setup(le,ce,Oe,me,Qe);let Zt,Ht=Ve;if(Qe!==null&&(Zt=ye.get(Qe),Ht=lt,Ht.setIndex(Zt)),le.isMesh)ce.wireframe===!0?(Fe.setLineWidth(ce.wireframeLinewidth*Ft()),Ht.setMode(G.LINES)):Ht.setMode(G.TRIANGLES);else if(le.isLine){let cn=ce.linewidth;cn===void 0&&(cn=1),Fe.setLineWidth(cn*Ft()),le.isLineSegments?Ht.setMode(G.LINES):le.isLineLoop?Ht.setMode(G.LINE_LOOP):Ht.setMode(G.LINE_STRIP)}else le.isPoints?Ht.setMode(G.POINTS):le.isSprite&&Ht.setMode(G.TRIANGLES);if(le.isBatchedMesh)if(ft.get("WEBGL_multi_draw"))Ht.renderMultiDraw(le._multiDrawStarts,le._multiDrawCounts,le._multiDrawCount);else{const cn=le._multiDrawStarts,je=le._multiDrawCounts,En=le._multiDrawCount,Et=Qe?ye.get(Qe).bytesPerElement:1,Hn=C.get(ce).currentProgram.getUniforms();for(let Vn=0;Vn<En;Vn++)Hn.setValue(G,"_gl_DrawID",Vn),Ht.render(cn[Vn]/Et,je[Vn])}else if(le.isInstancedMesh)Ht.renderInstances(nt,Xt,le.count);else if(me.isInstancedBufferGeometry){const cn=me._maxInstanceCount!==void 0?me._maxInstanceCount:1/0,je=Math.min(me.instanceCount,cn);Ht.renderInstances(nt,Xt,je)}else Ht.render(nt,Xt)};function Qt(A,K,me){A.transparent===!0&&A.side===pi&&A.forceSinglePass===!1?(A.side=Zn,A.needsUpdate=!0,gs(A,K,me),A.side=Hr,A.needsUpdate=!0,gs(A,K,me),A.side=pi):gs(A,K,me)}this.compile=function(A,K,me=null){me===null&&(me=A),L=He.get(me),L.init(K),w.push(L),me.traverseVisible(function(le){le.isLight&&le.layers.test(K.layers)&&(L.pushLight(le),le.castShadow&&L.pushShadow(le))}),A!==me&&A.traverseVisible(function(le){le.isLight&&le.layers.test(K.layers)&&(L.pushLight(le),le.castShadow&&L.pushShadow(le))}),L.setupLights();const ce=new Set;return A.traverse(function(le){if(!(le.isMesh||le.isPoints||le.isLine||le.isSprite))return;const ke=le.material;if(ke)if(Array.isArray(ke))for(let qe=0;qe<ke.length;qe++){const Oe=ke[qe];Qt(Oe,me,le),ce.add(Oe)}else Qt(ke,me,le),ce.add(ke)}),L=w.pop(),ce},this.compileAsync=function(A,K,me=null){const ce=this.compile(A,K,me);return new Promise(le=>{function ke(){if(ce.forEach(function(qe){C.get(qe).currentProgram.isReady()&&ce.delete(qe)}),ce.size===0){le(A);return}setTimeout(ke,10)}ft.get("KHR_parallel_shader_compile")!==null?ke():setTimeout(ke,10)})};let bn=null;function Ri(A){bn&&bn(A)}function mi(){On.stop()}function Mn(){On.start()}const On=new I0;On.setAnimationLoop(Ri),typeof self<"u"&&On.setContext(self),this.setAnimationLoop=function(A){bn=A,$.setAnimationLoop(A),A===null?On.stop():On.start()},$.addEventListener("sessionstart",mi),$.addEventListener("sessionend",Mn),this.render=function(A,K){if(K!==void 0&&K.isCamera!==!0){Ut("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(k===!0)return;q!==null&&q.renderStart(A,K);const me=$.enabled===!0&&$.isPresenting===!0,ce=D!==null&&(W===null||me)&&D.begin(j,W);if(A.matrixWorldAutoUpdate===!0&&A.updateMatrixWorld(),K.parent===null&&K.matrixWorldAutoUpdate===!0&&K.updateMatrixWorld(),$.enabled===!0&&$.isPresenting===!0&&(D===null||D.isCompositing()===!1)&&($.cameraAutoUpdate===!0&&$.updateCamera(K),K=$.getCamera()),A.isScene===!0&&A.onBeforeRender(j,A,K,W),L=He.get(A,w.length),L.init(K),L.state.textureUnits=M.getTextureUnits(),w.push(L),xt.multiplyMatrices(K.projectionMatrix,K.matrixWorldInverse),Ke.setFromProjectionMatrix(xt,zi,K.reversedDepth),at=this.localClippingEnabled,gt=pe.init(this.clippingPlanes,at),H=Me.get(A,z.length),H.init(),z.push(H),$.enabled===!0&&$.isPresenting===!0){const qe=j.xr.getDepthSensingMesh();qe!==null&&ji(qe,K,-1/0,j.sortObjects)}ji(A,K,0,j.sortObjects),H.finish(),j.sortObjects===!0&&H.sort(re,Ee),St=$.enabled===!1||$.isPresenting===!1||$.hasDepthSensing()===!1,St&&ee.addToRenderList(H,A),this.info.render.frame++,gt===!0&&pe.beginShadows();const le=L.state.shadowsArray;if(X.render(le,A,K),gt===!0&&pe.endShadows(),this.info.autoReset===!0&&this.info.reset(),(ce&&D.hasRenderPass())===!1){const qe=H.opaque,Oe=H.transmissive;if(L.setupLights(),K.isArrayCamera){const Qe=K.cameras;if(Oe.length>0)for(let rt=0,pt=Qe.length;rt<pt;rt++){const mt=Qe[rt];Pi(qe,Oe,A,mt)}St&&ee.render(A);for(let rt=0,pt=Qe.length;rt<pt;rt++){const mt=Qe[rt];dr(H,A,mt,mt.viewport)}}else Oe.length>0&&Pi(qe,Oe,A,K),St&&ee.render(A),dr(H,A,K)}W!==null&&ve===0&&(M.updateMultisampleRenderTarget(W),M.updateRenderTargetMipmap(W)),ce&&D.end(j),A.isScene===!0&&A.onAfterRender(j,A,K),Te.resetDefaultState(),ne=-1,Z=null,w.pop(),w.length>0?(L=w[w.length-1],M.setTextureUnits(L.state.textureUnits),gt===!0&&pe.setGlobalState(j.clippingPlanes,L.state.camera)):L=null,z.pop(),z.length>0?H=z[z.length-1]:H=null,q!==null&&q.renderEnd()};function ji(A,K,me,ce){if(A.visible===!1)return;if(A.layers.test(K.layers)){if(A.isGroup)me=A.renderOrder;else if(A.isLOD)A.autoUpdate===!0&&A.update(K);else if(A.isLightProbeGrid)L.pushLightProbeGrid(A);else if(A.isLight)L.pushLight(A),A.castShadow&&L.pushShadow(A);else if(A.isSprite){if(!A.frustumCulled||Ke.intersectsSprite(A)){ce&&ot.setFromMatrixPosition(A.matrixWorld).applyMatrix4(xt);const qe=Ce.update(A),Oe=A.material;Oe.visible&&H.push(A,qe,Oe,me,ot.z,null)}}else if((A.isMesh||A.isLine||A.isPoints)&&(!A.frustumCulled||Ke.intersectsObject(A))){const qe=Ce.update(A),Oe=A.material;if(ce&&(A.boundingSphere!==void 0?(A.boundingSphere===null&&A.computeBoundingSphere(),ot.copy(A.boundingSphere.center)):(qe.boundingSphere===null&&qe.computeBoundingSphere(),ot.copy(qe.boundingSphere.center)),ot.applyMatrix4(A.matrixWorld).applyMatrix4(xt)),Array.isArray(Oe)){const Qe=qe.groups;for(let rt=0,pt=Qe.length;rt<pt;rt++){const mt=Qe[rt],nt=Oe[mt.materialIndex];nt&&nt.visible&&H.push(A,qe,nt,me,ot.z,mt)}}else Oe.visible&&H.push(A,qe,Oe,me,ot.z,null)}}const ke=A.children;for(let qe=0,Oe=ke.length;qe<Oe;qe++)ji(ke[qe],K,me,ce)}function dr(A,K,me,ce){const{opaque:le,transmissive:ke,transparent:qe}=A;L.setupLightsView(me),gt===!0&&pe.setGlobalState(j.clippingPlanes,me),ce&&Fe.viewport(J.copy(ce)),le.length>0&&Gr(le,K,me),ke.length>0&&Gr(ke,K,me),qe.length>0&&Gr(qe,K,me),Fe.buffers.depth.setTest(!0),Fe.buffers.depth.setMask(!0),Fe.buffers.color.setMask(!0),Fe.setPolygonOffset(!1)}function Pi(A,K,me,ce){if((me.isScene===!0?me.overrideMaterial:null)!==null)return;if(L.state.transmissionRenderTarget[ce.id]===void 0){const nt=ft.has("EXT_color_buffer_half_float")||ft.has("EXT_color_buffer_float");L.state.transmissionRenderTarget[ce.id]=new Vi(1,1,{generateMipmaps:!0,type:nt?ur:si,minFilter:us,samples:Math.max(4,wt.samples),stencilBuffer:c,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Dt.workingColorSpace})}const ke=L.state.transmissionRenderTarget[ce.id],qe=ce.viewport||J;ke.setSize(qe.z*j.transmissionResolutionScale,qe.w*j.transmissionResolutionScale);const Oe=j.getRenderTarget(),Qe=j.getActiveCubeFace(),rt=j.getActiveMipmapLevel();j.setRenderTarget(ke),j.getClearColor(O),ie=j.getClearAlpha(),ie<1&&j.setClearColor(16777215,.5),j.clear(),St&&ee.render(me);const pt=j.toneMapping;j.toneMapping=Hi;const mt=ce.viewport;if(ce.viewport!==void 0&&(ce.viewport=void 0),L.setupLightsView(ce),gt===!0&&pe.setGlobalState(j.clippingPlanes,ce),Gr(A,me,ce),M.updateMultisampleRenderTarget(ke),M.updateRenderTargetMipmap(ke),ft.has("WEBGL_multisampled_render_to_texture")===!1){let nt=!1;for(let Nt=0,Xt=K.length;Nt<Xt;Nt++){const Zt=K[Nt],{object:Ht,geometry:cn,material:je,group:En}=Zt;if(je.side===pi&&Ht.layers.test(ce.layers)){const Et=je.side;je.side=Zn,je.needsUpdate=!0,co(Ht,me,ce,cn,je,En),je.side=Et,je.needsUpdate=!0,nt=!0}}nt===!0&&(M.updateMultisampleRenderTarget(ke),M.updateRenderTargetMipmap(ke))}j.setRenderTarget(Oe,Qe,rt),j.setClearColor(O,ie),mt!==void 0&&(ce.viewport=mt),j.toneMapping=pt}function Gr(A,K,me){const ce=K.isScene===!0?K.overrideMaterial:null;for(let le=0,ke=A.length;le<ke;le++){const qe=A[le],{object:Oe,geometry:Qe,group:rt}=qe;let pt=qe.material;pt.allowOverride===!0&&ce!==null&&(pt=ce),Oe.layers.test(me.layers)&&co(Oe,K,me,Qe,pt,rt)}}function co(A,K,me,ce,le,ke){A.onBeforeRender(j,K,me,ce,le,ke),A.modelViewMatrix.multiplyMatrices(me.matrixWorldInverse,A.matrixWorld),A.normalMatrix.getNormalMatrix(A.modelViewMatrix),le.onBeforeRender(j,K,me,ce,A,ke),le.transparent===!0&&le.side===pi&&le.forceSinglePass===!1?(le.side=Zn,le.needsUpdate=!0,j.renderBufferDirect(me,K,ce,le,A,ke),le.side=Hr,le.needsUpdate=!0,j.renderBufferDirect(me,K,ce,le,A,ke),le.side=pi):j.renderBufferDirect(me,K,ce,le,A,ke),A.onAfterRender(j,K,me,ce,le,ke)}function gs(A,K,me){K.isScene!==!0&&(K=bt);const ce=C.get(A),le=L.state.lights,ke=L.state.shadowsArray,qe=le.state.version,Oe=Ie.getParameters(A,le.state,ke,K,me,L.state.lightProbeGridArray),Qe=Ie.getProgramCacheKey(Oe);let rt=ce.programs;ce.environment=A.isMeshStandardMaterial||A.isMeshLambertMaterial||A.isMeshPhongMaterial?K.environment:null,ce.fog=K.fog;const pt=A.isMeshStandardMaterial||A.isMeshLambertMaterial&&!A.envMap||A.isMeshPhongMaterial&&!A.envMap;ce.envMap=Q.get(A.envMap||ce.environment,pt),ce.envMapRotation=ce.environment!==null&&A.envMap===null?K.environmentRotation:A.envMapRotation,rt===void 0&&(A.addEventListener("dispose",st),rt=new Map,ce.programs=rt);let mt=rt.get(Qe);if(mt!==void 0){if(ce.currentProgram===mt&&ce.lightsStateVersion===qe)return fo(A,Oe),mt}else Oe.uniforms=Ie.getUniforms(A),q!==null&&A.isNodeMaterial&&q.build(A,me,Oe),A.onBeforeCompile(Oe,j),mt=Ie.acquireProgram(Oe,Qe),rt.set(Qe,mt),ce.uniforms=Oe.uniforms;const nt=ce.uniforms;return(!A.isShaderMaterial&&!A.isRawShaderMaterial||A.clipping===!0)&&(nt.clippingPlanes=pe.uniform),fo(A,Oe),ce.needsLights=Jl(A),ce.lightsStateVersion=qe,ce.needsLights&&(nt.ambientLightColor.value=le.state.ambient,nt.lightProbe.value=le.state.probe,nt.directionalLights.value=le.state.directional,nt.directionalLightShadows.value=le.state.directionalShadow,nt.spotLights.value=le.state.spot,nt.spotLightShadows.value=le.state.spotShadow,nt.rectAreaLights.value=le.state.rectArea,nt.ltc_1.value=le.state.rectAreaLTC1,nt.ltc_2.value=le.state.rectAreaLTC2,nt.pointLights.value=le.state.point,nt.pointLightShadows.value=le.state.pointShadow,nt.hemisphereLights.value=le.state.hemi,nt.directionalShadowMatrix.value=le.state.directionalShadowMatrix,nt.spotLightMatrix.value=le.state.spotLightMatrix,nt.spotLightMap.value=le.state.spotLightMap,nt.pointShadowMatrix.value=le.state.pointShadowMatrix),ce.lightProbeGrid=L.state.lightProbeGridArray.length>0,ce.currentProgram=mt,ce.uniformsList=null,mt}function uo(A){if(A.uniformsList===null){const K=A.currentProgram.getUniforms();A.uniformsList=kl.seqWithValue(K.seq,A.uniforms)}return A.uniformsList}function fo(A,K){const me=C.get(A);me.outputColorSpace=K.outputColorSpace,me.batching=K.batching,me.batchingColor=K.batchingColor,me.instancing=K.instancing,me.instancingColor=K.instancingColor,me.instancingMorph=K.instancingMorph,me.skinning=K.skinning,me.morphTargets=K.morphTargets,me.morphNormals=K.morphNormals,me.morphColors=K.morphColors,me.morphTargetsCount=K.morphTargetsCount,me.numClippingPlanes=K.numClippingPlanes,me.numIntersection=K.numClipIntersection,me.vertexAlphas=K.vertexAlphas,me.vertexTangents=K.vertexTangents,me.toneMapping=K.toneMapping}function ca(A,K){if(A.length===0)return null;if(A.length===1)return A[0].texture!==null?A[0]:null;P.setFromMatrixPosition(K.matrixWorld);for(let me=0,ce=A.length;me<ce;me++){const le=A[me];if(le.texture!==null&&le.boundingBox.containsPoint(P))return le}return null}function ua(A,K,me,ce,le){K.isScene!==!0&&(K=bt),M.resetTextureUnits();const ke=K.fog,qe=ce.isMeshStandardMaterial||ce.isMeshLambertMaterial||ce.isMeshPhongMaterial?K.environment:null,Oe=W===null?j.outputColorSpace:W.isXRRenderTarget===!0?W.texture.colorSpace:Dt.workingColorSpace,Qe=ce.isMeshStandardMaterial||ce.isMeshLambertMaterial&&!ce.envMap||ce.isMeshPhongMaterial&&!ce.envMap,rt=Q.get(ce.envMap||qe,Qe),pt=ce.vertexColors===!0&&!!me.attributes.color&&me.attributes.color.itemSize===4,mt=!!me.attributes.tangent&&(!!ce.normalMap||ce.anisotropy>0),nt=!!me.morphAttributes.position,Nt=!!me.morphAttributes.normal,Xt=!!me.morphAttributes.color;let Zt=Hi;ce.toneMapped&&(W===null||W.isXRRenderTarget===!0)&&(Zt=j.toneMapping);const Ht=me.morphAttributes.position||me.morphAttributes.normal||me.morphAttributes.color,cn=Ht!==void 0?Ht.length:0,je=C.get(ce),En=L.state.lights;if(gt===!0&&(at===!0||A!==Z)){const Vt=A===Z&&ce.id===ne;pe.setState(ce,A,Vt)}let Et=!1;ce.version===je.__version?(je.needsLights&&je.lightsStateVersion!==En.state.version||je.outputColorSpace!==Oe||le.isBatchedMesh&&je.batching===!1||!le.isBatchedMesh&&je.batching===!0||le.isBatchedMesh&&je.batchingColor===!0&&le.colorTexture===null||le.isBatchedMesh&&je.batchingColor===!1&&le.colorTexture!==null||le.isInstancedMesh&&je.instancing===!1||!le.isInstancedMesh&&je.instancing===!0||le.isSkinnedMesh&&je.skinning===!1||!le.isSkinnedMesh&&je.skinning===!0||le.isInstancedMesh&&je.instancingColor===!0&&le.instanceColor===null||le.isInstancedMesh&&je.instancingColor===!1&&le.instanceColor!==null||le.isInstancedMesh&&je.instancingMorph===!0&&le.morphTexture===null||le.isInstancedMesh&&je.instancingMorph===!1&&le.morphTexture!==null||je.envMap!==rt||ce.fog===!0&&je.fog!==ke||je.numClippingPlanes!==void 0&&(je.numClippingPlanes!==pe.numPlanes||je.numIntersection!==pe.numIntersection)||je.vertexAlphas!==pt||je.vertexTangents!==mt||je.morphTargets!==nt||je.morphNormals!==Nt||je.morphColors!==Xt||je.toneMapping!==Zt||je.morphTargetsCount!==cn||!!je.lightProbeGrid!=L.state.lightProbeGridArray.length>0)&&(Et=!0):(Et=!0,je.__version=ce.version);let Hn=je.currentProgram;Et===!0&&(Hn=gs(ce,K,le),q&&ce.isNodeMaterial&&q.onUpdateProgram(ce,Hn,je));let Vn=!1,Tt=!1,Yi=!1;const zt=Hn.getUniforms(),Yt=je.uniforms;if(Fe.useProgram(Hn.program)&&(Vn=!0,Tt=!0,Yi=!0),ce.id!==ne&&(ne=ce.id,Tt=!0),je.needsLights){const Vt=ca(L.state.lightProbeGridArray,le);je.lightProbeGrid!==Vt&&(je.lightProbeGrid=Vt,Tt=!0)}if(Vn||Z!==A){Fe.buffers.depth.getReversed()&&A.reversedDepth!==!0&&(A._reversedDepth=!0,A.updateProjectionMatrix()),zt.setValue(G,"projectionMatrix",A.projectionMatrix),zt.setValue(G,"viewMatrix",A.matrixWorldInverse);const _i=zt.map.cameraPosition;_i!==void 0&&_i.setValue(G,vt.setFromMatrixPosition(A.matrixWorld)),wt.logarithmicDepthBuffer&&zt.setValue(G,"logDepthBufFC",2/(Math.log(A.far+1)/Math.LN2)),(ce.isMeshPhongMaterial||ce.isMeshToonMaterial||ce.isMeshLambertMaterial||ce.isMeshBasicMaterial||ce.isMeshStandardMaterial||ce.isShaderMaterial)&&zt.setValue(G,"isOrthographic",A.isOrthographicCamera===!0),Z!==A&&(Z=A,Tt=!0,Yi=!0)}if(je.needsLights&&(En.state.directionalShadowMap.length>0&&zt.setValue(G,"directionalShadowMap",En.state.directionalShadowMap,M),En.state.spotShadowMap.length>0&&zt.setValue(G,"spotShadowMap",En.state.spotShadowMap,M),En.state.pointShadowMap.length>0&&zt.setValue(G,"pointShadowMap",En.state.pointShadowMap,M)),le.isSkinnedMesh){zt.setOptional(G,le,"bindMatrix"),zt.setOptional(G,le,"bindMatrixInverse");const Vt=le.skeleton;Vt&&(Vt.boneTexture===null&&Vt.computeBoneTexture(),zt.setValue(G,"boneTexture",Vt.boneTexture,M))}le.isBatchedMesh&&(zt.setOptional(G,le,"batchingTexture"),zt.setValue(G,"batchingTexture",le._matricesTexture,M),zt.setOptional(G,le,"batchingIdTexture"),zt.setValue(G,"batchingIdTexture",le._indirectTexture,M),zt.setOptional(G,le,"batchingColorTexture"),le._colorsTexture!==null&&zt.setValue(G,"batchingColorTexture",le._colorsTexture,M));const gi=me.morphAttributes;if((gi.position!==void 0||gi.normal!==void 0||gi.color!==void 0)&&Le.update(le,me,Hn),(Tt||je.receiveShadow!==le.receiveShadow)&&(je.receiveShadow=le.receiveShadow,zt.setValue(G,"receiveShadow",le.receiveShadow)),(ce.isMeshStandardMaterial||ce.isMeshLambertMaterial||ce.isMeshPhongMaterial)&&ce.envMap===null&&K.environment!==null&&(Yt.envMapIntensity.value=K.environmentIntensity),Yt.dfgLUT!==void 0&&(Yt.dfgLUT.value=W1()),Tt){if(zt.setValue(G,"toneMappingExposure",j.toneMappingExposure),je.needsLights&&Zl(Yt,Yi),ke&&ce.fog===!0&&he.refreshFogUniforms(Yt,ke),he.refreshMaterialUniforms(Yt,ce,ze,Ge,L.state.transmissionRenderTarget[A.id]),je.needsLights&&je.lightProbeGrid){const Vt=je.lightProbeGrid;Yt.probesSH.value=Vt.texture,Yt.probesMin.value.copy(Vt.boundingBox.min),Yt.probesMax.value.copy(Vt.boundingBox.max),Yt.probesResolution.value.copy(Vt.resolution)}kl.upload(G,uo(je),Yt,M)}if(ce.isShaderMaterial&&ce.uniformsNeedUpdate===!0&&(kl.upload(G,uo(je),Yt,M),ce.uniformsNeedUpdate=!1),ce.isSpriteMaterial&&zt.setValue(G,"center",le.center),zt.setValue(G,"modelViewMatrix",le.modelViewMatrix),zt.setValue(G,"normalMatrix",le.normalMatrix),zt.setValue(G,"modelMatrix",le.matrixWorld),ce.uniformsGroups!==void 0){const Vt=ce.uniformsGroups;for(let _i=0,Li=Vt.length;_i<Li;_i++){const Wr=Vt[_i];Se.update(Wr,Hn),Se.bind(Wr,Hn)}}return Hn}function Zl(A,K){A.ambientLightColor.needsUpdate=K,A.lightProbe.needsUpdate=K,A.directionalLights.needsUpdate=K,A.directionalLightShadows.needsUpdate=K,A.pointLights.needsUpdate=K,A.pointLightShadows.needsUpdate=K,A.spotLights.needsUpdate=K,A.spotLightShadows.needsUpdate=K,A.rectAreaLights.needsUpdate=K,A.hemisphereLights.needsUpdate=K}function Jl(A){return A.isMeshLambertMaterial||A.isMeshToonMaterial||A.isMeshPhongMaterial||A.isMeshStandardMaterial||A.isShadowMaterial||A.isShaderMaterial&&A.lights===!0}this.getActiveCubeFace=function(){return de},this.getActiveMipmapLevel=function(){return ve},this.getRenderTarget=function(){return W},this.setRenderTargetTextures=function(A,K,me){const ce=C.get(A);ce.__autoAllocateDepthBuffer=A.resolveDepthBuffer===!1,ce.__autoAllocateDepthBuffer===!1&&(ce.__useRenderToTexture=!1),C.get(A.texture).__webglTexture=K,C.get(A.depthTexture).__webglTexture=ce.__autoAllocateDepthBuffer?void 0:me,ce.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(A,K){const me=C.get(A);me.__webglFramebuffer=K,me.__useDefaultFramebuffer=K===void 0};const en=G.createFramebuffer();this.setRenderTarget=function(A,K=0,me=0){W=A,de=K,ve=me;let ce=null,le=!1,ke=!1;if(A){const Oe=C.get(A);if(Oe.__useDefaultFramebuffer!==void 0){Fe.bindFramebuffer(G.FRAMEBUFFER,Oe.__webglFramebuffer),J.copy(A.viewport),_e.copy(A.scissor),xe=A.scissorTest,Fe.viewport(J),Fe.scissor(_e),Fe.setScissorTest(xe),ne=-1;return}else if(Oe.__webglFramebuffer===void 0)M.setupRenderTarget(A);else if(Oe.__hasExternalTextures)M.rebindTextures(A,C.get(A.texture).__webglTexture,C.get(A.depthTexture).__webglTexture);else if(A.depthBuffer){const pt=A.depthTexture;if(Oe.__boundDepthTexture!==pt){if(pt!==null&&C.has(pt)&&(A.width!==pt.image.width||A.height!==pt.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");M.setupDepthRenderbuffer(A)}}const Qe=A.texture;(Qe.isData3DTexture||Qe.isDataArrayTexture||Qe.isCompressedArrayTexture)&&(ke=!0);const rt=C.get(A).__webglFramebuffer;A.isWebGLCubeRenderTarget?(Array.isArray(rt[K])?ce=rt[K][me]:ce=rt[K],le=!0):A.samples>0&&M.useMultisampledRTT(A)===!1?ce=C.get(A).__webglMultisampledFramebuffer:Array.isArray(rt)?ce=rt[me]:ce=rt,J.copy(A.viewport),_e.copy(A.scissor),xe=A.scissorTest}else J.copy(U).multiplyScalar(ze).floor(),_e.copy(N).multiplyScalar(ze).floor(),xe=Ue;if(me!==0&&(ce=en),Fe.bindFramebuffer(G.FRAMEBUFFER,ce)&&Fe.drawBuffers(A,ce),Fe.viewport(J),Fe.scissor(_e),Fe.setScissorTest(xe),le){const Oe=C.get(A.texture);G.framebufferTexture2D(G.FRAMEBUFFER,G.COLOR_ATTACHMENT0,G.TEXTURE_CUBE_MAP_POSITIVE_X+K,Oe.__webglTexture,me)}else if(ke){const Oe=K;for(let Qe=0;Qe<A.textures.length;Qe++){const rt=C.get(A.textures[Qe]);G.framebufferTextureLayer(G.FRAMEBUFFER,G.COLOR_ATTACHMENT0+Qe,rt.__webglTexture,me,Oe)}}else if(A!==null&&me!==0){const Oe=C.get(A.texture);G.framebufferTexture2D(G.FRAMEBUFFER,G.COLOR_ATTACHMENT0,G.TEXTURE_2D,Oe.__webglTexture,me)}ne=-1},this.readRenderTargetPixels=function(A,K,me,ce,le,ke,qe,Oe=0){if(!(A&&A.isWebGLRenderTarget)){Ut("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Qe=C.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&qe!==void 0&&(Qe=Qe[qe]),Qe){Fe.bindFramebuffer(G.FRAMEBUFFER,Qe);try{const rt=A.textures[Oe],pt=rt.format,mt=rt.type;if(A.textures.length>1&&G.readBuffer(G.COLOR_ATTACHMENT0+Oe),!wt.textureFormatReadable(pt)){Ut("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!wt.textureTypeReadable(mt)){Ut("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}K>=0&&K<=A.width-ce&&me>=0&&me<=A.height-le&&G.readPixels(K,me,ce,le,B.convert(pt),B.convert(mt),ke)}finally{const rt=W!==null?C.get(W).__webglFramebuffer:null;Fe.bindFramebuffer(G.FRAMEBUFFER,rt)}}},this.readRenderTargetPixelsAsync=async function(A,K,me,ce,le,ke,qe,Oe=0){if(!(A&&A.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Qe=C.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&qe!==void 0&&(Qe=Qe[qe]),Qe)if(K>=0&&K<=A.width-ce&&me>=0&&me<=A.height-le){Fe.bindFramebuffer(G.FRAMEBUFFER,Qe);const rt=A.textures[Oe],pt=rt.format,mt=rt.type;if(A.textures.length>1&&G.readBuffer(G.COLOR_ATTACHMENT0+Oe),!wt.textureFormatReadable(pt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!wt.textureTypeReadable(mt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const nt=G.createBuffer();G.bindBuffer(G.PIXEL_PACK_BUFFER,nt),G.bufferData(G.PIXEL_PACK_BUFFER,ke.byteLength,G.STREAM_READ),G.readPixels(K,me,ce,le,B.convert(pt),B.convert(mt),0);const Nt=W!==null?C.get(W).__webglFramebuffer:null;Fe.bindFramebuffer(G.FRAMEBUFFER,Nt);const Xt=G.fenceSync(G.SYNC_GPU_COMMANDS_COMPLETE,0);return G.flush(),await lv(G,Xt,4),G.bindBuffer(G.PIXEL_PACK_BUFFER,nt),G.getBufferSubData(G.PIXEL_PACK_BUFFER,0,ke),G.deleteBuffer(nt),G.deleteSync(Xt),ke}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(A,K=null,me=0){const ce=Math.pow(2,-me),le=Math.floor(A.image.width*ce),ke=Math.floor(A.image.height*ce),qe=K!==null?K.x:0,Oe=K!==null?K.y:0;M.setTexture2D(A,0),G.copyTexSubImage2D(G.TEXTURE_2D,me,0,0,qe,Oe,le,ke),Fe.unbindTexture()};const Ql=G.createFramebuffer(),ho=G.createFramebuffer();this.copyTextureToTexture=function(A,K,me=null,ce=null,le=0,ke=0){let qe,Oe,Qe,rt,pt,mt,nt,Nt,Xt;const Zt=A.isCompressedTexture?A.mipmaps[ke]:A.image;if(me!==null)qe=me.max.x-me.min.x,Oe=me.max.y-me.min.y,Qe=me.isBox3?me.max.z-me.min.z:1,rt=me.min.x,pt=me.min.y,mt=me.isBox3?me.min.z:0;else{const Yt=Math.pow(2,-le);qe=Math.floor(Zt.width*Yt),Oe=Math.floor(Zt.height*Yt),A.isDataArrayTexture?Qe=Zt.depth:A.isData3DTexture?Qe=Math.floor(Zt.depth*Yt):Qe=1,rt=0,pt=0,mt=0}ce!==null?(nt=ce.x,Nt=ce.y,Xt=ce.z):(nt=0,Nt=0,Xt=0);const Ht=B.convert(K.format),cn=B.convert(K.type);let je;K.isData3DTexture?(M.setTexture3D(K,0),je=G.TEXTURE_3D):K.isDataArrayTexture||K.isCompressedArrayTexture?(M.setTexture2DArray(K,0),je=G.TEXTURE_2D_ARRAY):(M.setTexture2D(K,0),je=G.TEXTURE_2D),Fe.activeTexture(G.TEXTURE0),Fe.pixelStorei(G.UNPACK_FLIP_Y_WEBGL,K.flipY),Fe.pixelStorei(G.UNPACK_PREMULTIPLY_ALPHA_WEBGL,K.premultiplyAlpha),Fe.pixelStorei(G.UNPACK_ALIGNMENT,K.unpackAlignment);const En=Fe.getParameter(G.UNPACK_ROW_LENGTH),Et=Fe.getParameter(G.UNPACK_IMAGE_HEIGHT),Hn=Fe.getParameter(G.UNPACK_SKIP_PIXELS),Vn=Fe.getParameter(G.UNPACK_SKIP_ROWS),Tt=Fe.getParameter(G.UNPACK_SKIP_IMAGES);Fe.pixelStorei(G.UNPACK_ROW_LENGTH,Zt.width),Fe.pixelStorei(G.UNPACK_IMAGE_HEIGHT,Zt.height),Fe.pixelStorei(G.UNPACK_SKIP_PIXELS,rt),Fe.pixelStorei(G.UNPACK_SKIP_ROWS,pt),Fe.pixelStorei(G.UNPACK_SKIP_IMAGES,mt);const Yi=A.isDataArrayTexture||A.isData3DTexture,zt=K.isDataArrayTexture||K.isData3DTexture;if(A.isDepthTexture){const Yt=C.get(A),gi=C.get(K),Vt=C.get(Yt.__renderTarget),_i=C.get(gi.__renderTarget);Fe.bindFramebuffer(G.READ_FRAMEBUFFER,Vt.__webglFramebuffer),Fe.bindFramebuffer(G.DRAW_FRAMEBUFFER,_i.__webglFramebuffer);for(let Li=0;Li<Qe;Li++)Yi&&(G.framebufferTextureLayer(G.READ_FRAMEBUFFER,G.COLOR_ATTACHMENT0,C.get(A).__webglTexture,le,mt+Li),G.framebufferTextureLayer(G.DRAW_FRAMEBUFFER,G.COLOR_ATTACHMENT0,C.get(K).__webglTexture,ke,Xt+Li)),G.blitFramebuffer(rt,pt,qe,Oe,nt,Nt,qe,Oe,G.DEPTH_BUFFER_BIT,G.NEAREST);Fe.bindFramebuffer(G.READ_FRAMEBUFFER,null),Fe.bindFramebuffer(G.DRAW_FRAMEBUFFER,null)}else if(le!==0||A.isRenderTargetTexture||C.has(A)){const Yt=C.get(A),gi=C.get(K);Fe.bindFramebuffer(G.READ_FRAMEBUFFER,Ql),Fe.bindFramebuffer(G.DRAW_FRAMEBUFFER,ho);for(let Vt=0;Vt<Qe;Vt++)Yi?G.framebufferTextureLayer(G.READ_FRAMEBUFFER,G.COLOR_ATTACHMENT0,Yt.__webglTexture,le,mt+Vt):G.framebufferTexture2D(G.READ_FRAMEBUFFER,G.COLOR_ATTACHMENT0,G.TEXTURE_2D,Yt.__webglTexture,le),zt?G.framebufferTextureLayer(G.DRAW_FRAMEBUFFER,G.COLOR_ATTACHMENT0,gi.__webglTexture,ke,Xt+Vt):G.framebufferTexture2D(G.DRAW_FRAMEBUFFER,G.COLOR_ATTACHMENT0,G.TEXTURE_2D,gi.__webglTexture,ke),le!==0?G.blitFramebuffer(rt,pt,qe,Oe,nt,Nt,qe,Oe,G.COLOR_BUFFER_BIT,G.NEAREST):zt?G.copyTexSubImage3D(je,ke,nt,Nt,Xt+Vt,rt,pt,qe,Oe):G.copyTexSubImage2D(je,ke,nt,Nt,rt,pt,qe,Oe);Fe.bindFramebuffer(G.READ_FRAMEBUFFER,null),Fe.bindFramebuffer(G.DRAW_FRAMEBUFFER,null)}else zt?A.isDataTexture||A.isData3DTexture?G.texSubImage3D(je,ke,nt,Nt,Xt,qe,Oe,Qe,Ht,cn,Zt.data):K.isCompressedArrayTexture?G.compressedTexSubImage3D(je,ke,nt,Nt,Xt,qe,Oe,Qe,Ht,Zt.data):G.texSubImage3D(je,ke,nt,Nt,Xt,qe,Oe,Qe,Ht,cn,Zt):A.isDataTexture?G.texSubImage2D(G.TEXTURE_2D,ke,nt,Nt,qe,Oe,Ht,cn,Zt.data):A.isCompressedTexture?G.compressedTexSubImage2D(G.TEXTURE_2D,ke,nt,Nt,Zt.width,Zt.height,Ht,Zt.data):G.texSubImage2D(G.TEXTURE_2D,ke,nt,Nt,qe,Oe,Ht,cn,Zt);Fe.pixelStorei(G.UNPACK_ROW_LENGTH,En),Fe.pixelStorei(G.UNPACK_IMAGE_HEIGHT,Et),Fe.pixelStorei(G.UNPACK_SKIP_PIXELS,Hn),Fe.pixelStorei(G.UNPACK_SKIP_ROWS,Vn),Fe.pixelStorei(G.UNPACK_SKIP_IMAGES,Tt),ke===0&&K.generateMipmaps&&G.generateMipmap(je),Fe.unbindTexture()},this.initRenderTarget=function(A){C.get(A).__webglFramebuffer===void 0&&M.setupRenderTarget(A)},this.initTexture=function(A){A.isCubeTexture?M.setTextureCube(A,0):A.isData3DTexture?M.setTexture3D(A,0):A.isDataArrayTexture||A.isCompressedArrayTexture?M.setTexture2DArray(A,0):M.setTexture2D(A,0),Fe.unbindTexture()},this.resetState=function(){de=0,ve=0,W=null,Fe.reset(),Te.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return zi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const n=this.getContext();n.drawingBufferColorSpace=Dt._getDrawingBufferColorSpace(e),n.unpackColorSpace=Dt._getUnpackColorSpace()}}const $t=[{id:"seating",label:"Adaptive Seating Clusters",icon:"⬡",accent:"#C4905A",hex:12882010,pos:[-3.8,0,2.8],camPos:[-1.2,2.4,7.2],lookAt:[-3.8,1.1,2.8],desc:"Reconfigurable modular seating in semi-private pods. Ergonomic lounge chairs with movable acoustic partitions let patients choose between solitude and social warmth.",features:["Modular sofa + ottoman clusters","Acoustic privacy wing panels","Wireless charging tabletops","Wheelchair-accessible clearances"],metric:"↓ 35% reported isolation"},{id:"biophilic",label:"Biophilic Micro-Garden",icon:"❧",accent:"#4A8A58",hex:4885080,pos:[3.8,0,2.8],camPos:[1.2,2.4,7.2],lookAt:[3.8,1.4,2.8],desc:"A curated living moss wall, specimen trees, and a recirculating water basin bring measurable stress relief. Natural-spectrum light from clerestory windows completes the biophilic immersion.",features:["4 m × 2.8 m living moss wall","Recirculating water basin","Natural-spectrum clerestory","Terracotta planter clusters"],metric:"↓ 28% cortisol stress markers"},{id:"digital",label:"Digital Wellness Hub",icon:"◈",accent:"#5572C4",hex:5599940,pos:[3.8,0,-2.8],camPos:[1.2,2.4,-6.2],lookAt:[3.8,1.4,-2.8],desc:"Touchless kiosks in organic alcoves deliver real-time queue updates, guided breathing, and ambient nature loops — designed to inform without overwhelming.",features:["Real-time queue status","Guided breathing animations","Nature ambient visuals","Motion-sensing interaction"],metric:"↓ 20% perceived wait time"},{id:"calm",label:"Calm Engagement Zone",icon:"◎",accent:"#8A5898",hex:9066648,pos:[-3.8,0,-2.8],camPos:[-1.2,2.4,-6.2],lookAt:[-3.8,1.1,-2.8],desc:"A low-stimulation alcove for reading, art, and guided audio meditation. Full acoustic dampening and warm amber light create a personal refuge within the waiting space.",features:["Curated book corner","Art & craft station","Guided meditation audio","Full acoustic wall panels"],metric:"↓ 32% anxiety self-reports"}];function pf(s,e){var n,r;!s||!s.ambient||(e?(s.ambient.color.setHex(15398143),s.ambient.intensity=.95,s.sun.color.setHex(15791871),s.sun.intensity=.6,s.fillLight.intensity=.15,(n=s.accentLights)==null||n.forEach(a=>{a.intensity=0})):(s.ambient.color.setHex(16774628),s.ambient.intensity=.45,s.sun.color.setHex(16772560),s.sun.intensity=1.05,s.fillLight.intensity=.35,(r=s.accentLights)==null||r.forEach((a,c)=>{a.color.setHex($t[c].hex),a.intensity=1.4})))}const tt=(s,e=.78,n=0,r={})=>new kr({color:s,roughness:e,metalness:n,...r});function Ct(s,e,n){return new ao(s,e,n)}function dn(s,e,n,r=12){return new la(s,e,n,r)}function Qs(s,e=10,n=8){return new wd(s,e,n)}function j1(s,e){const n=new jv(16774628,.45);s.add(n);const r=new Im(16772560,1.05);r.position.set(9,14,10),r.castShadow=!0,r.shadow.mapSize.set(2048,2048),r.shadow.camera.near=.5,r.shadow.camera.far=50,r.shadow.camera.left=-14,r.shadow.camera.right=14,r.shadow.camera.top=14,r.shadow.camera.bottom=-14,r.shadow.bias=-.001,s.add(r);const a=new Im(13164799,.35);a.position.set(14,6,0),s.add(a);const c=[];$t.forEach(ue=>{const $=new Ll(ue.hex,1.4,6.5,1.8);$.position.set(ue.pos[0],2.6,ue.pos[2]),s.add($),c.push($)}),e.ambient=n,e.sun=r,e.fillLight=a,e.accentLights=c,[[-3.8,3.16,2.8],[3.8,3.16,2.8],[3.8,3.16,-2.8],[-3.8,3.16,-2.8]].forEach(([ue,$,se])=>{const Re=new De(new hn(2.2,.3),new kr({color:16776693,emissive:16776693,emissiveIntensity:1.2,roughness:1}));Re.rotation.x=Math.PI/2,Re.position.set(ue,$,se),s.add(Re)});const u=[];[[-3.8,2.85,2.8],[3.8,2.85,2.8],[3.8,2.85,-2.8],[-3.8,2.85,-2.8]].forEach(([ue,$,se])=>{const Re=new De(dn(.012,.012,.5,4),tt(5914672,.9));Re.position.set(ue,$+.25,se),s.add(Re);const Xe=new De(new jl(.2,.28,12,1,!0),tt(13936704,.5,.1,{side:pi}));Xe.position.set(ue,$,se),s.add(Xe);const st=new De(Qs(.065,8,6),new kr({color:16772744,emissive:16763972,emissiveIntensity:2.2}));st.position.set(ue,$-.08,se),s.add(st);const Je=new Ll(16755268,1.2,4.5,2);Je.position.set(ue,$-.2,se),s.add(Je),u.push({pl:Je,shade:Xe,phase:Math.random()*Math.PI*2})}),e.pendants=u;const d=tt(13150330,.82,0),p=new De(new hn(16,13),d);p.rotation.x=-Math.PI/2,p.receiveShadow=!0,p.userData.material={name:"Travertine Honed Tile",dim:"600×600×20 mm",specs:[["Finish","Honed matte"],["VOC","<0.3 mg/m³"],["Slip rating","R10"],["Thermal mass","2.3 kJ/m²K"]],note:"Locally quarried. Thermal-mass helps passive climate."},s.add(p);const m=[];$t.forEach(ue=>{const $=new De(new Xl(2,32),new Wl({color:ue.hex,transparent:!0,opacity:0,depthWrite:!1,side:pi}));$.rotation.x=-Math.PI/2,$.position.set(ue.pos[0],.012,ue.pos[2]),s.add($),m.push($)}),e.heatmapDiscs=m;for(let ue=-3;ue<=3;ue++){const $=new De(new hn(16,.02),tt(9071178,.9));$.rotation.x=-Math.PI/2,$.position.set(0,.001,ue*1.6),s.add($);const se=new De(new hn(.02,13),tt(9071178,.9));se.rotation.x=-Math.PI/2,se.position.set(ue*2.2,.001,0),s.add(se)}const x=new De(new hn(16,13),tt(16117992,.95));x.rotation.x=Math.PI/2,x.position.y=3.2,s.add(x),[[-3.8,0],[0,0],[3.8,0]].forEach(([ue])=>{const $=new De(Ct(.18,.22,12.7),tt(6964264,.75));$.position.set(ue,3.09,0),$.userData.material={name:"Solid White Oak Beam",dim:"180×220×13000 mm",specs:[["Grade","FSC-certified European oak"],["Finish","Natural hard-wax oil"],["CO₂ storage","≈ 780 kg/m³"],["Fire class","D-s2,d0"]],note:"Carbon-negative structural expression."},s.add($)});const S=tt(15392202,.92),_=tt(14865856,.92),y=new De(new hn(16,3.2),S);y.position.set(0,1.6,-6.5),s.add(y);const T=new De(new hn(13,3.2),_);T.rotation.y=Math.PI/2,T.position.set(-8,1.6,0),s.add(T);const R=new De(new hn(6.5,3.2),_);R.rotation.y=-Math.PI/2,R.position.set(8,1.6,3.25),s.add(R);const g=new De(new hn(6.5,.2),_);g.rotation.y=-Math.PI/2,g.position.set(8,3.1,-3.25),s.add(g);const v=document.createElement("canvas");v.width=512,v.height=512;const b=v.getContext("2d"),I=b.createLinearGradient(0,0,0,512);I.addColorStop(0,"#B8DEFF"),I.addColorStop(.55,"#E8D8B8"),I.addColorStop(.62,"#9CB48C"),I.addColorStop(1,"#7A9878"),b.fillStyle=I,b.fillRect(0,0,512,512),b.fillStyle="rgba(90,120,90,0.55)";for(let ue=0;ue<12;ue++){const $=ue/11*512+Math.sin(ue)*20,se=30+ue%3*12;b.beginPath(),b.arc($,320+ue%2*10,se,0,Math.PI*2),b.fill()}const P=new Nv(v);P.colorSpace=$n;const H=new Wl({map:P});e.skyMat=H;const L=new De(new hn(10,6),H);L.rotation.y=-Math.PI/2,L.position.set(10.5,1.8,-3.25),s.add(L);const z=new Hv({color:16777215,roughness:.05,metalness:0,transparent:!0,opacity:.12,transmission:.8,ior:1.45,thickness:.02}),w=new De(new hn(6.5,3),z);w.rotation.y=-Math.PI/2,w.position.set(7.99,1.5,-3.25),s.add(w);const D=tt(11040840,.55,.1),j=new De(Ct(.32,.18,6.5),D);j.position.set(7.9,.09,-3.25),s.add(j);const k=new De(Ct(.22,.16,6.5),D);k.position.set(7.93,3,-3.25),s.add(k),[0,-6.5].forEach(ue=>{const $=new De(Ct(.12,3,.14),D);$.position.set(7.93,1.5,ue),s.add($)}),[-1.625,-3.25,-4.875].forEach(ue=>{const $=new De(Ct(.06,2.95,.08),D);$.position.set(7.93,1.5,ue),s.add($)});const q=new De(Ct(.06,.05,6.4),D);q.position.set(7.93,2.15,-3.25),s.add(q);const de=new De(new hn(4.2,.35),z);de.rotation.y=-Math.PI/2,de.position.set(7.99,2.95,2.2),s.add(de);const ve=new De(new hn(5,.6),H);ve.rotation.y=-Math.PI/2,ve.position.set(10.5,2.95,2.2),s.add(ve);const W=tt(11040840,.55,.1);[-1.4,0,1.4].forEach(ue=>{const $=new De(Ct(.03,.4,.05),W);$.position.set(7.92,2.95,2.2+ue),s.add($)});const ne=new De(Ct(.14,1.05,9.5),tt(14207144,.88));ne.position.set(0,.525,.5),s.add(ne);const Z=new De(Ct(.22,.06,9.5),tt(12097632,.5,.15));Z.position.set(0,1.08,.5),s.add(Z);const J=new De(dn(.22,.18,.28,10),tt(9067064,.85));J.position.set(0,1.22,1.2),s.add(J);const _e=new De(Qs(.3,9,7),tt(3831880,.8));_e.position.set(0,1.62,1.2),s.add(_e);const xe=tt(10518624,.72,.05),O=new De(Ct(4,1,.8),xe);O.position.set(0,.5,-6.1),O.castShadow=!0,s.add(O);const ie=new De(Ct(4,1,.05),tt(13150320,.55,.2));ie.position.set(0,.5,-5.7),s.add(ie);const Be=new De(Ct(4.2,.06,1),tt(8015920,.45,.3));Be.position.set(0,1.03,-6.05),s.add(Be);const Ge=new De(Ct(.5,.32,.03),new kr({color:1714746,roughness:.4,metalness:.7,emissive:2771562,emissiveIntensity:.4}));Ge.position.set(-.6,1.36,-5.92),s.add(Ge);const ze=tt(13150320,.6,.1);[[0,.06,-6.49,16,.12,.1,0],[-7.99,.06,0,.1,.12,13,0],[7.99,.06,0,.1,.12,13,0]].forEach(([ue,$,se,Re,Xe,st])=>{const Je=new De(Ct(Re,Xe,st),ze);Je.position.set(ue,$,se),s.add(Je)});const re=[];re.push({mesh:p,zoneId:null}),s.traverse(ue=>{var $,se,Re;ue.isMesh&&((Re=(se=($=ue.userData)==null?void 0:$.material)==null?void 0:se.name)!=null&&Re.includes("Oak Beam"))&&re.push({mesh:ue,zoneId:null})});const Ee=tt(12882032,.85),U=tt(10514512,.88),N=tt(5910552,.6,.3),Ue=tt(13936768,.82);function Ke(ue,$,se,Re,Xe="sofa"){const st=new ds,Je=Xe==="chair"?.74:.78,Wt=Xe==="chair"?.82:.88,Qt=Re*Je,bn=new De(Ct(Qt-.06,.08,Wt-.16),N);bn.position.set(0,.06,0),st.add(bn);const Ri=new De(Ct(Qt,.32,Wt),Ee);Ri.position.set(0,.26,0),Ri.castShadow=!0,st.add(Ri);const mi=new De(Ct(Qt,.58,.14),U);mi.position.set(0,.68,-Wt/2+.07),mi.rotation.x=-.08,st.add(mi),[-Qt/2+.07,Qt/2-.07].forEach(Mn=>{const On=new De(Ct(.14,.28,Wt-.04),U);On.position.set(Mn,.56,0),st.add(On)});for(let Mn=0;Mn<Re;Mn++){const On=-Qt/2+Je/2+Mn*Je+(Mn===0?.05:Mn===Re-1?-.05:0),ji=new De(Ct(Je-.12,.14,Wt-.22),Ue);ji.position.set(On,.49,.05),ji.castShadow=!0,st.add(ji);const dr=new De(Ct(Je-.16,.34,.14),Ue);dr.position.set(On,.72,-Wt/2+.18),dr.rotation.x=.12,st.add(dr)}return st.position.set(ue,0,$),st.rotation.y=se,s.add(st),st.children.forEach(Mn=>{Mn.isMesh&&re.push({mesh:Mn,zoneId:"seating"})}),st}Ke(-3.8,3.35,Math.PI,3,"sofa"),Ke(-4.9,1.55,Math.PI/3.4,1,"chair"),Ke(-2.7,1.55,-Math.PI/3.4,1,"chair");const gt=new De(Ct(1.3,.05,.7),tt(8015920,.45,.25));gt.position.set(-3.8,.42,2.6),gt.castShadow=!0,s.add(gt),re.push({mesh:gt,zoneId:"seating"});const at=new De(Ct(1.24,.03,.64),N);at.position.set(-3.8,.38,2.6),s.add(at),[[-.58,-.3],[.58,-.3],[-.58,.3],[.58,.3]].forEach(([ue,$])=>{const se=new De(dn(.022,.022,.38,6),N);se.position.set(-3.8+ue,.19,2.6+$),s.add(se)});const xt=new De(dn(.09,.07,.18,14),tt(15260868,.7));xt.position.set(-3.8,.53,2.6),xt.castShadow=!0,s.add(xt);const vt=new De(dn(.006,.006,.34,4),tt(4876858,.7));vt.position.set(-3.8,.76,2.6),s.add(vt);const ot=new De(dn(.2,.2,.04,14),tt(6963232,.5,.2));ot.position.set(-5.35,.52,3.55),ot.castShadow=!0,s.add(ot),re.push({mesh:ot,zoneId:"seating"});const bt=new De(dn(.03,.05,.5,8),N);bt.position.set(-5.35,.25,3.55),s.add(bt);const St=new De(dn(.1,.08,.13,12),tt(9071178,.8));St.position.set(-5.35,.61,3.55),s.add(St);for(let ue=0;ue<5;ue++){const $=new De(Qs(.08,8,6),tt(4880970,.85));$.position.set(-5.35+Math.cos(ue)*.05,.73+ue*.03,3.55+Math.sin(ue)*.05),$.scale.set(1,.5,1),s.add($)}const Ft=new De(dn(.32,.32,.34,16),tt(12095600,.88));Ft.position.set(-3.8,.17,1.4),Ft.castShadow=!0,s.add(Ft),re.push({mesh:Ft,zoneId:"seating"}),[[.06,1.05,2,-1.9,.55,2.8],[.06,1.05,2,-5.7,.55,2.5]].forEach(([ue,$,se,Re,Xe,st])=>{const Je=new De(Ct(ue,$,se),tt(14733496,.92));Je.position.set(Re,Xe,st),Je.castShadow=!0,Je.userData.material={name:"Wool-Felt Acoustic Privacy Wing",dim:"2000×1050×60 mm",specs:[["Composition","100% recycled PET + wool felt"],["Acoustic NRC","0.90"],["Fire class","B-s1,d0"],["Colorways","5 naturals"]],note:"Reduces reverberation to < 0.8 s."},s.add(Je),re.push({mesh:Je,zoneId:"seating"});const Wt=new De(Ct(ue+.02,.04,se+.02),tt(11571296,.5,.2));Wt.position.set(Re,Xe+.545,st),s.add(Wt)});const G=[];for(let ue=0;ue<5;ue++)for(let $=0;$<5;$++){const se=(ue+$)%3,Re=[3041850,4033098,4890714][se],Xe=new De(Ct(.52,.52,.08),tt(Re,.95));Xe.position.set(7.96,.38+ue*.55,1+$*.55),Xe.rotation.y=-Math.PI/2,Xe.castShadow=!0,Xe.userData.material={name:"Preserved Reindeer Moss Panel",dim:"500×500×40 mm",specs:[["Species","Cladonia rangiferina (mixed tones)"],["Maintenance","Zero water · Zero light"],["Acoustic NRC","0.75"],["Air particulate trap","Light PM2.5 capture"]],note:"Biophilic anchor of the space."},s.add(Xe),re.push({mesh:Xe,zoneId:"biophilic"})}const Pt=new De(Ct(.06,3,2.88),tt(6965280,.6,.2));Pt.position.set(7.94,1.4,2.4),Pt.rotation.y=-Math.PI/2,s.add(Pt),[[2.8,1.8],[4.4,3],[3.2,1.1]].forEach(([ue,$],se)=>{const Re=new De(dn(.22,.16,.4,10),tt(9066544,.85));Re.position.set(ue,.2,$),Re.castShadow=!0,s.add(Re),re.push({mesh:Re,zoneId:"biophilic"});const Xe=new De(dn(.05,.07,.7,7),tt(4860942,.9));Xe.position.set(ue,.75,$),s.add(Xe);const st=new De(Qs(.45+se*.05,10,8),tt(3043392,.85));st.position.set(ue,1.32+se*.1,$),st.castShadow=!0,s.add(st),re.push({mesh:st,zoneId:"biophilic"});const Je=new De(Qs(.3,8,6),tt(4033104,.85));Je.position.set(ue+.25,1.05+se*.08,$-.2),s.add(Je),G.push({mesh:st,baseY:st.position.y,phase:se*1.2}),G.push({mesh:Je,baseY:Je.position.y,phase:se*1.2+.5})}),e.plants=G;const ft=new De(dn(.6,.55,.18,20),tt(8015920,.8));ft.position.set(5,.09,3.8),ft.castShadow=!0,s.add(ft),re.push({mesh:ft,zoneId:"biophilic"});const wt=new De(new Xl(.54,20),new kr({color:8310752,roughness:.05,metalness:.1,transparent:!0,opacity:.82}));wt.rotation.x=-Math.PI/2,wt.position.set(5,.19,3.8),s.add(wt),e.water=wt,re.push({mesh:wt,zoneId:"biophilic"}),[0,1,2,3,4,5].forEach(ue=>{const $=ue/6*Math.PI*2,se=new De(new la(.12,.12,.04,8),tt(10522752,.95));se.position.set(5+Math.cos($)*.82,.02,3.8+Math.sin($)*.82),s.add(se)});const Fe=[];[[2.5,-2],[3.8,-3.6],[5.1,-2]].forEach(([ue,$],se)=>{const Re=new De(dn(.05,.08,1.2,8),tt(11579568,.4,.8));Re.position.set(ue,.6,$),s.add(Re);const Xe=new De(dn(.18,.18,.04,12),tt(9474192,.4,.7));Xe.position.set(ue,.02,$),s.add(Xe);const st=new kr({color:661544,roughness:.05,metalness:.5,emissive:se===1?1717352:1714264,emissiveIntensity:.7}),Je=new De(Ct(.62,.96,.04),st);Je.position.set(ue,1.68,$),Je.castShadow=!0,s.add(Je),re.push({mesh:Je,zoneId:"digital"}),Fe.push({mesh:Je,mat:st,phase:se*1.4});const Wt=new kr({color:4227327,emissive:4227327,emissiveIntensity:1.8}),Qt=new De(Ct(.62,.04,.02),Wt);Qt.position.set(ue,1.21,$+.03),s.add(Qt),Fe.push({mesh:Qt,mat:Wt,phase:se*1.4+.3,isBar:!0});const bn=new Ll(4219084,.8,2.5,2);bn.position.set(ue,1.68,$+.2),s.add(bn),Fe.push({pl:bn,phase:se*1.4,isPl:!0})}),e.screens=Fe;const Bt=new De(Ct(4.2,2.8,.06),tt(1712176,.8));Bt.position.set(3.8,1.4,-6.47),s.add(Bt);const C=tt(6963744,.72),M=new De(Ct(3.2,1.9,.34),C);M.position.set(-3.8,.95,-6.33),M.castShadow=!0,s.add(M),re.push({mesh:M,zoneId:"calm"}),[.28,.92,1.56].forEach(ue=>{const $=new De(Ct(3.12,.05,.3),tt(9066544,.65));$.position.set(-3.8,ue,-6.18),s.add($)}),[12603472,5271744,5283936,12623920,8409232,12611648,4214912,12601480,4229744].forEach((ue,$)=>{const se=new De(Ct(.08+$%3*.02,.46+$%2*.1,.22),tt(ue,.9));se.position.set(-4.8+$*.36,1.12,-6.16),se.rotation.y=($%3-1)*.06,se.castShadow=!0,s.add(se),re.push({mesh:se,zoneId:"calm"})});const ye=tt(11036072,.88);[[-4.6,-2.2],[-3.5,-3.2],[-2.5,-2.5]].forEach(([ue,$])=>{const se=new De(dn(.32,.3,.12,14),ye);se.position.set(ue,.06,$),se.castShadow=!0,s.add(se),re.push({mesh:se,zoneId:"calm"});const Re=new De(new Td(.31,.01,6,20),tt(9062536,.9));Re.rotation.x=Math.PI/2,Re.position.set(ue,.12,$),s.add(Re)});const we=tt(6963744,.55,.1),Ce=new De(Ct(1.3,.06,.75),we);Ce.position.set(-3.5,.38,-2.9),Ce.castShadow=!0,s.add(Ce),re.push({mesh:Ce,zoneId:"calm"}),[[-.55,-.3],[.55,-.3],[-.55,.3],[.55,.3]].forEach(([ue,$])=>{const se=new De(dn(.022,.022,.36,5),tt(4860942,.7,.2));se.position.set(-3.5+ue,.18,-2.9+$),s.add(se)});const Ie=new De(dn(.055,.05,.1,10),tt(15261904,.7));Ie.position.set(-3.5,.46,-2.9),s.add(Ie);const he=tt(9070656,.5,.4),Me=new De(dn(.022,.022,1.55,6),he);Me.position.set(-2.2,.78,-1.6),s.add(Me);const He=new De(dn(.15,.15,.04,10),he);He.position.set(-2.2,.02,-1.6),s.add(He);const pe=new De(new jl(.28,.38,12,1,!0),tt(15255664,.7,0,{side:pi}));pe.position.set(-2.2,1.65,-1.6),pe.castShadow=!0,s.add(pe),re.push({mesh:pe,zoneId:"calm"});const X=new Ll(16755268,1.6,4,2);X.position.set(-2.2,1.45,-1.6),s.add(X),e.lampLight=X;const ee=new De(Ct(2.2,2,.06),tt(14207144,.95));ee.position.set(-4.8,1.6,-6.44),s.add(ee);const Le=new De(Ct(2,1.8,.04),tt(13154456,.98));Le.position.set(-4.8,1.6,-6.42),s.add(Le);const Ve=new De(Ct(.06,1.8,2),tt(14207144,.95));Ve.position.set(-7.95,1.6,-3.5),s.add(Ve);const lt=new De(Ct(.04,1.6,1.8),tt(13154456,.98));lt.position.set(-7.93,1.6,-3.5),s.add(lt);const B=new De(new hn(3.8,3),tt(11040848,.98));B.rotation.x=-Math.PI/2,B.position.set(-3.8,.003,2.5),s.add(B);const Te=new De(new hn(4,3.2),tt(9068600,.98));Te.rotation.x=-Math.PI/2,Te.position.set(-3.8,.002,2.5),s.add(Te);const Se=new De(new hn(3.4,2.8),tt(5929032,.98));return Se.rotation.x=-Math.PI/2,Se.position.set(3.8,.003,2.5),s.add(Se),re}function Y1(){const s=Lt.useRef(null),e=Lt.useRef({}),[n,r]=Lt.useState(null),[a,c]=Lt.useState(!0),[u,d]=Lt.useState(!1),[p,m]=Lt.useState(null),[x,S]=Lt.useState(!1),[_,y]=Lt.useState(!1),[T,R]=Lt.useState(0),[g,v]=Lt.useState(!1),[b,I]=Lt.useState(!1),[P,H]=Lt.useState(!1),[L,z]=Lt.useState(12),[w,D]=Lt.useState(!1),[j,k]=Lt.useState(!1),[q,de]=Lt.useState(!1),[ve,W]=Lt.useState(null),[ne,Z]=Lt.useState(!1),[J,_e]=Lt.useState(!1),[xe,O]=Lt.useState({}),ie=Lt.useCallback(U=>{if((n==null?void 0:n.id)===U.id){const Ue=e.current;Ue.isOrbit=!0,Ue.tPos&&Ue.tLookAt&&(Ue.tPos.set(0,7.5,15.5),Ue.tLookAt.set(0,1,0)),r(null),m(null);return}const N=e.current;N.isOrbit=!1,N.tPos&&N.tLookAt&&(N.tPos.set(U.camPos[0],U.camPos[1],U.camPos[2]),N.tLookAt.set(U.lookAt[0],U.lookAt[1],U.lookAt[2])),r(U),c(!1)},[n]),Be=Lt.useCallback(()=>{const U=e.current;U.isOrbit=!0,U.tPos&&U.tLookAt&&(U.tPos.set(0,7.5,15.5),U.tLookAt.set(0,1,0)),r(null),m(null)},[]),Ge=Lt.useRef(ie),ze=Lt.useRef(Be);Lt.useEffect(()=>{Ge.current=ie,ze.current=Be});const re=Lt.useCallback(U=>{if(!n)return;const N=$t.findIndex(Ke=>Ke.id===n.id),Ue=$t[(N+U+$t.length)%$t.length];ie(Ue)},[n,ie]);Lt.useEffect(()=>{e.current.heatmapMode=P},[P]),Lt.useEffect(()=>{e.current.inspectorMode=q},[q]),Lt.useEffect(()=>{e.current.splitScreen=j},[j]),Lt.useEffect(()=>{const U=e.current.animRefs;U!=null&&U.patientGroup&&(U.patientGroup.visible=ne,e.current.patientSimActive=ne,ne||O({}))},[ne]),Lt.useEffect(()=>{e.current.firstPersonMode=w,w?(e.current.fp={pos:new te(0,1.6,5.8),yaw:0,pitch:-.05,keys:{},bobPhase:0},e.current.isOrbit=!1,r(null)):Be()},[w,Be]),Lt.useEffect(()=>{const U=e.current.animRefs;if(!U||!U.sun||b)return;const N=L,Ue=Math.max(0,Math.min(1,(N-6)/12)),Ke=Ue*Math.PI,gt=-12+Ue*24,at=Math.sin(Ke)*14+2,xt=10-Ue*4;U.sun.position.set(gt,at,xt);let vt,ot,bt,St,Ft,G;if(N<6||N>20?(vt=2241354,ot=.05,bt=1712176,St=.2,Ft=660520,G=.1):N<8?(vt=16758904,ot=.6,bt=16767920,St=.35,Ft=16754816,G=.8):N<17?(vt=16772560,ot=1.05,bt=16774628,St=.45,Ft=8965375,G=.6):N<19?(vt=16750168,ot=.8,bt=16764048,St=.4,Ft=16744280,G=.9):(vt=6967440,ot=.25,bt=4866144,St=.28,Ft=3813464,G=.3),U.sun.color.setHex(vt),U.sun.intensity=ot,U.ambient.color.setHex(bt),U.ambient.intensity=St,U.skyMat){const ft=new Mt(Ft);ft.lerp(new Mt(16777215),1-Math.min(1,G)),U.skyMat.color.copy(ft)}const Pt=N<7||N>18?1:0;e.current.nightBoost=Pt},[L,b]),Lt.useEffect(()=>{var N,Ue,Ke;const U=e.current.animRefs;!U||!U.ambient||(b?(e.current.comparisonMode=!0,U.ambient.color.setHex(15398143),U.ambient.intensity=.95,U.sun.color.setHex(15791871),U.sun.intensity=.6,U.fillLight.intensity=.15,(N=U.accentLights)==null||N.forEach(gt=>{gt.intensity=0}),(Ue=U.pendants)==null||Ue.forEach(gt=>{gt.pl.intensity=0}),e.current.scene&&(e.current.scene.background=new Mt(14212836),e.current.scene.fog&&e.current.scene.fog.color.setHex(14212836))):(e.current.comparisonMode=!1,U.ambient.color.setHex(16774628),U.ambient.intensity=.45,U.sun.color.setHex(16772560),U.sun.intensity=1.05,U.fillLight.intensity=.35,(Ke=U.accentLights)==null||Ke.forEach((gt,at)=>{gt.color.setHex($t[at].hex),gt.intensity=1.4}),e.current.scene&&(e.current.scene.background=new Mt(15589576),e.current.scene.fog&&e.current.scene.fog.color.setHex(15589576))))},[b]),Lt.useEffect(()=>{const U=()=>{v(window.innerWidth<=768||"ontouchstart"in window)};return U(),window.addEventListener("resize",U),()=>window.removeEventListener("resize",U)},[]),Lt.useEffect(()=>{const U=s.current;if(!U)return;const N=e.current;N.animRefs={};try{const pe=document.createElement("canvas");if(!(pe.getContext("webgl")||pe.getContext("experimental-webgl"))){y(!0);return}}catch{y(!0);return}R(10);const Ue=window.innerWidth<=768||"ontouchstart"in window;N.renderer=new X1({antialias:!Ue,powerPreference:"high-performance"}),N.renderer.setPixelRatio(Math.min(window.devicePixelRatio,Ue?1.5:2)),N.renderer.setSize(U.clientWidth,U.clientHeight),N.renderer.shadowMap.enabled=!Ue,Ue||(N.renderer.shadowMap.type=ta),N.renderer.toneMapping=ud,N.renderer.toneMappingExposure=1.1,N.renderer.outputColorSpace=$n,U.appendChild(N.renderer.domElement),R(30),N.scene=new wv,N.scene.background=new Mt(15589576),N.scene.fog=new yd(15589576,18,30),N.camera=new ri(54,U.clientWidth/U.clientHeight,.1,80),N.camera.position.set(0,7.5,15.5),R(50),N.clickables=j1(N.scene,N.animRefs);const Ke=[5929630,13144688,10386120,7383184,13138590,10399344,8036040,13147738],gt=[],at=new ds;at.visible=!1,N.scene.add(at);for(let pe=0;pe<8;pe++){const X=new ds,ee=Ke[pe],Le=new De(dn(.14,.18,.7,8),tt(ee,.85));Le.position.y=.35,Le.castShadow=!0,X.add(Le);const Ve=new De(Qs(.11,10,8),tt(15253656,.85));Ve.position.y=.82,Ve.castShadow=!0,X.add(Ve);const lt=-6+Math.random()*12;X.position.set(lt,0,6.2),at.add(X),gt.push({group:X,state:"entering",target:new te(0,0,-5),waypoint:null,zoneId:null,dwellEnd:0,speed:.012+Math.random()*.008,stressLevel:.7+Math.random()*.3,bobPhase:Math.random()*Math.PI*2,spawnDelay:pe*600,spawnTime:0})}N.animRefs.patients=gt,N.animRefs.patientGroup=at,R(70),N.orbit={theta:.38,phi:.58,radius:15.5},N.isOrbit=!0,N.tPos=new te(0,7.5,15.5),N.tLookAt=new te(0,1,0),N.cLookAt=new te(0,1,0);const xt=new Kv,vt=new It,ot=(pe,X)=>{const ee=U.getBoundingClientRect();vt.x=(pe-ee.left)/ee.width*2-1,vt.y=-((X-ee.top)/ee.height)*2+1,xt.setFromCamera(vt,N.camera);const Le=xt.intersectObjects(N.clickables.map(Ve=>Ve.mesh));return Le.length?N.clickables.find(Ve=>Ve.mesh===Le[0].object):null};let bt=!1,St=!1,Ft=0,G=0;const Pt=pe=>{bt=!0,St=!1,Ft=pe.clientX,G=pe.clientY,c(!1),U.style.cursor="grabbing"},ft=pe=>{if(!bt){const Le=ot(pe.clientX,pe.clientY);m(Le?$t.find(Ve=>Ve.id===Le.zoneId):null),U.style.cursor=Le?"pointer":N.firstPersonMode?"crosshair":"grab";return}const X=pe.clientX-Ft,ee=pe.clientY-G;(Math.abs(X)>2||Math.abs(ee)>2)&&(St=!0),N.firstPersonMode&&N.fp?(N.fp.yaw-=X*.004,N.fp.pitch=Math.max(-.9,Math.min(.9,N.fp.pitch-ee*.004))):N.isOrbit&&(N.orbit.theta-=X*.005,N.orbit.phi=Math.max(.18,Math.min(1.35,N.orbit.phi+ee*.005))),Ft=pe.clientX,G=pe.clientY},wt=()=>{bt=!1,U.style.cursor="grab"},Fe=pe=>{N.isOrbit&&(N.orbit.radius=Math.max(8,Math.min(20,N.orbit.radius+pe.deltaY*.013)))},Bt=pe=>{var Le;if(St)return;const X=ot(pe.clientX,pe.clientY);if(!X)return;if(N.inspectorMode&&((Le=X.mesh.userData)!=null&&Le.material)){const Ve=X.mesh.userData.material;W(lt=>(lt==null?void 0:lt.name)===Ve.name?null:Ve);return}const ee=$t.find(Ve=>Ve.id===X.zoneId);ee&&Ge.current(ee)};let C=null,M=0;const Q=pe=>{if(pe.touches.length===1)C=pe.touches[0],c(!1);else if(pe.touches.length===2){const X=pe.touches[0].clientX-pe.touches[1].clientX,ee=pe.touches[0].clientY-pe.touches[1].clientY;M=Math.sqrt(X*X+ee*ee)}},ye=pe=>{if(pe.touches.length===1&&C){const X=pe.touches[0];N.orbit.theta-=(X.clientX-C.clientX)*.005,N.orbit.phi=Math.max(.18,Math.min(1.35,N.orbit.phi+(X.clientY-C.clientY)*.005)),C=X,pe.preventDefault()}else if(pe.touches.length===2&&M>0){const X=pe.touches[0].clientX-pe.touches[1].clientX,ee=pe.touches[0].clientY-pe.touches[1].clientY,Le=Math.sqrt(X*X+ee*ee),Ve=M-Le;N.orbit.radius=Math.max(8,Math.min(20,N.orbit.radius+Ve*.02)),M=Le,pe.preventDefault()}},we=()=>{C=null,M=0},Ce=pe=>{N.firstPersonMode&&N.fp&&(N.fp.keys[pe.key.toLowerCase()]=!1,pe.key==="Shift"&&(N.fp.keys.shift=!1))},Ie=pe=>{N.firstPersonMode&&N.fp&&(N.fp.keys[pe.key.toLowerCase()]=!0,pe.key==="Shift"&&(N.fp.keys.shift=!0)),pe.key==="Escape"&&(x?S(!1):q?(de(!1),W(null)):N.firstPersonMode?D(!1):n&&ze.current()),pe.key==="1"&&$t[0]&&Ge.current($t[0]),pe.key==="2"&&$t[1]&&Ge.current($t[1]),pe.key==="3"&&$t[2]&&Ge.current($t[2]),pe.key==="4"&&$t[3]&&Ge.current($t[3]),(pe.key==="r"||pe.key==="R")&&ze.current(),(pe.key==="h"||pe.key==="H"||pe.key==="?")&&S(X=>!X),N.isOrbit&&(pe.key==="ArrowLeft"&&(N.orbit.theta-=.1),pe.key==="ArrowRight"&&(N.orbit.theta+=.1),pe.key==="ArrowUp"&&(N.orbit.phi=Math.max(.18,N.orbit.phi-.1)),pe.key==="ArrowDown"&&(N.orbit.phi=Math.min(1.35,N.orbit.phi+.1)))};let he=0;const Me=pe=>{if(N.frame=requestAnimationFrame(Me),he=pe*.001,N.firstPersonMode&&N.fp){const X=N.fp,ee=X.keys.shift,Le=ee?.15:.07,Ve=new te(-Math.sin(X.yaw),0,-Math.cos(X.yaw)),lt=new te(-Math.cos(X.yaw),0,Math.sin(X.yaw)),B=X.pos.x;X.pos.z;let Te=!1;(X.keys.w||X.keys.arrowup)&&(X.pos.addScaledVector(Ve,Le),Te=!0),(X.keys.s||X.keys.arrowdown)&&(X.pos.addScaledVector(Ve,-Le),Te=!0),(X.keys.a||X.keys.arrowleft)&&(X.pos.addScaledVector(lt,-Le),Te=!0),(X.keys.d||X.keys.arrowright)&&(X.pos.addScaledVector(lt,Le),Te=!0),X.pos.x=Math.max(-7.3,Math.min(7.3,X.pos.x)),X.pos.z=Math.max(-5.8,Math.min(6.1,X.pos.z)),X.pos.z>-4.25&&X.pos.z<5.25&&(B<-.25&&X.pos.x>-.25?X.pos.x=-.25:B>.25&&X.pos.x<.25?X.pos.x=.25:Math.abs(X.pos.x)<.25&&(X.pos.x=B<0?-.25:.25)),X.pos.z<-5.3&&Math.abs(X.pos.x)<2.2&&(X.pos.z=-5.3),Te&&(X.bobPhase+=ee?.28:.18);const Se=Te?Math.sin(X.bobPhase)*.035:0,ue=Te?Math.cos(X.bobPhase*.5)*.015:0;X.pos.y=1.62+Se,N.camera.position.copy(X.pos),N.camera.position.x+=ue;const $=X.pos.clone().add(new te(-Math.sin(X.yaw)*Math.cos(X.pitch),Math.sin(X.pitch),-Math.cos(X.yaw)*Math.cos(X.pitch)));N.cLookAt.copy($),N.camera.lookAt(N.cLookAt)}else{if(N.isOrbit){const{theta:ee,phi:Le,radius:Ve}=N.orbit;N.tPos.set(Ve*Math.sin(Le)*Math.sin(ee),Ve*Math.cos(Le),Ve*Math.sin(Le)*Math.cos(ee)),N.tLookAt.set(0,1,0)}const X=N.isOrbit?.08:.06;N.camera.position.lerp(N.tPos,X),N.cLookAt.lerp(N.tLookAt,X),N.camera.lookAt(N.cLookAt)}if(N.animRefs.pendants&&N.animRefs.pendants.forEach(X=>{X.pl.intensity=N.comparisonMode?0:1.1+Math.sin(he*1.1+X.phase)*.12}),N.animRefs.plants&&N.animRefs.plants.forEach(X=>{X.mesh.position.y=X.baseY+Math.sin(he*.55+X.phase)*.018,X.mesh.rotation.z=Math.sin(he*.4+X.phase)*.025}),N.animRefs.water&&(N.animRefs.water.material.opacity=.75+Math.sin(he*1.8)*.06,N.animRefs.water.material.color.setHSL(.52,.5,.55+Math.sin(he*.9)*.04)),N.animRefs.screens&&N.animRefs.screens.forEach(X=>{X.isPl?X.pl.intensity=.7+Math.sin(he*2.2+X.phase)*.25:X.isBar?X.mat.emissiveIntensity=1.5+Math.sin(he*1.6+X.phase)*.5:X.mat&&(X.mat.emissiveIntensity=.6+Math.sin(he*.8+X.phase)*.15)}),N.animRefs.lampLight&&(N.animRefs.lampLight.intensity=N.comparisonMode?0:1.5+Math.sin(he*1.3)*.15),N.animRefs.heatmapDiscs&&N.animRefs.heatmapDiscs.forEach((X,ee)=>{const Le=N.heatmapMode?.22:0;X.material.opacity=Le*(1+Math.sin(he*.9+ee)*.35),X.scale.setScalar(1+Math.sin(he*.7+ee*.8)*.08)}),N.animRefs.patients&&N.patientSimActive){const X={seating:0,biophilic:0,digital:0,calm:0,reception:0};N.animRefs.patients.forEach(ee=>{if(ee.spawnTime||(ee.spawnTime=pe),pe-ee.spawnTime<ee.spawnDelay)return;const Le=ee.group,Ve=($,se)=>{if(Math.sign($.x)===Math.sign(se.x)||$.x===0||se.x===0)return null;const Re=$.x/($.x-se.x),Xe=$.z+(se.z-$.z)*Re;return Xe>-4.25&&Xe<5.25?new te($.x>0?.5:-.5,0,5.8):null};!ee.waypoint&&ee.state!=="dwelling"&&(ee.waypoint=Ve(Le.position,ee.target));const lt=ee.waypoint||ee.target,B=new te().subVectors(lt,Le.position);B.y=0;const Te=B.length();if(ee.waypoint&&Te<.35&&(ee.waypoint=null),ee.state==="dwelling"){if(Le.position.y=Math.abs(Math.sin(he*2+ee.bobPhase))*.02,pe>ee.dwellEnd)if(Math.random()<.2)ee.state="leaving",ee.target.set(-6+Math.random()*12,0,7),ee.zoneId=null;else{const $=$t[Math.floor(Math.random()*$t.length)];ee.state="walking";const se=(Math.random()-.5)*1.5,Re=(Math.random()-.5)*1.5;ee.target.set($.pos[0]+se,0,$.pos[2]+Re),ee.waypoint=null,ee.zoneId=$.id,$.id==="calm"||$.id==="biophilic"?ee.stressLevel=Math.max(.1,ee.stressLevel-.25):$.id==="digital"&&(ee.stressLevel=Math.max(.2,ee.stressLevel-.1))}ee.zoneId&&(X[ee.zoneId]=(X[ee.zoneId]||0)+1)}else Te<.25?ee.state==="leaving"?(ee.group.position.set(-6+Math.random()*12,0,6.2),ee.state="entering",ee.target.set(0,0,-5),ee.stressLevel=.7+Math.random()*.3):(ee.state="dwelling",ee.dwellEnd=pe+3e3+Math.random()*6e3):(B.normalize(),Le.position.addScaledVector(B,ee.speed*(1+(1-ee.stressLevel)*.3)),Le.rotation.y=Math.atan2(B.x,B.z),Le.position.y=Math.abs(Math.sin(he*8+ee.bobPhase))*.04);Le.children[1].material.color.setHSL(.08+(1-ee.stressLevel)*.2,.4,.65)}),(!N.lastOccUpdate||pe-N.lastOccUpdate>500)&&(N.lastOccUpdate=pe,O({...X}))}if(N.splitScreen){const X=U.clientWidth,ee=U.clientHeight,Le=X/2;N.renderer.setScissorTest(!0);const Ve=N.comparisonMode;pf(N.animRefs,!0),N.renderer.setScissor(0,0,Le,ee),N.renderer.setViewport(0,0,Le,ee),N.camera.aspect=Le/ee,N.camera.updateProjectionMatrix(),N.scene.background&&N.scene.background.setHex(14212836),N.renderer.render(N.scene,N.camera),pf(N.animRefs,!1),N.renderer.setScissor(Le,0,Le,ee),N.renderer.setViewport(Le,0,Le,ee),N.scene.background&&N.scene.background.setHex(15589576),N.renderer.render(N.scene,N.camera),N.renderer.setScissorTest(!1),N.renderer.setViewport(0,0,X,ee),N.camera.aspect=X/ee,N.camera.updateProjectionMatrix(),pf(N.animRefs,Ve),N.scene.background&&N.scene.background.setHex(Ve?14212836:15589576)}else N.renderer.render(N.scene,N.camera)};Me(0),R(90),setTimeout(()=>{d(!0),R(100)},400),U.addEventListener("mousedown",Pt),window.addEventListener("mousemove",ft),window.addEventListener("mouseup",wt),U.addEventListener("click",Bt),U.addEventListener("wheel",Fe,{passive:!0}),U.addEventListener("touchstart",Q,{passive:!0}),U.addEventListener("touchmove",ye,{passive:!1}),U.addEventListener("touchend",we,{passive:!0}),window.addEventListener("keydown",Ie),window.addEventListener("keyup",Ce);const He=()=>{N.camera.aspect=U.clientWidth/U.clientHeight,N.camera.updateProjectionMatrix(),N.renderer.setSize(U.clientWidth,U.clientHeight)};return window.addEventListener("resize",He),()=>{cancelAnimationFrame(N.frame),U.removeEventListener("mousedown",Pt),window.removeEventListener("mousemove",ft),window.removeEventListener("mouseup",wt),U.removeEventListener("click",Bt),U.removeEventListener("wheel",Fe),U.removeEventListener("touchstart",Q),U.removeEventListener("touchmove",ye),U.removeEventListener("touchend",we),window.removeEventListener("keydown",Ie),window.removeEventListener("keyup",Ce),window.removeEventListener("resize",He),U.contains(N.renderer.domElement)&&U.removeChild(N.renderer.domElement),N.renderer.dispose()}},[]);const Ee=n;return _?ae.jsx("div",{style:{display:"flex",alignItems:"center",justifyContent:"center",width:"100vw",height:"100vh",background:"#16100A",color:"#F8EED8",fontFamily:"'DM Sans', sans-serif",textAlign:"center",padding:40},children:ae.jsxs("div",{children:[ae.jsx("div",{style:{fontSize:48,marginBottom:20},children:"⚠️"}),ae.jsx("h1",{style:{fontSize:24,marginBottom:12},children:"WebGL Not Supported"}),ae.jsx("p",{style:{color:"rgba(248,238,216,0.7)",maxWidth:400},children:"Your browser doesn't support WebGL, which is required for this 3D experience. Please try using a modern browser like Chrome, Firefox, or Safari."})]})}):ae.jsxs("div",{style:{position:"relative",width:"100vw",height:"100vh",overflow:"hidden",background:"#16100A"},children:[ae.jsx("style",{children:`
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
          0%, 100% { opacity: 1; transform: scale(1); }
          50% { opacity: 0.6; transform: scale(0.8); }
        }
        .panel-in { animation: panelIn 0.38s cubic-bezier(.34,1.48,.64,1) forwards; }
        .fade-up  { animation: fadeUp 0.55s ease forwards; }

        @keyframes dockSlideIn {
          from { opacity: 0; transform: translateY(14px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        @keyframes dockItemIn {
          from { opacity: 0; transform: translateX(-10px); }
          to   { opacity: 1; transform: translateX(0); }
        }
        @keyframes sliderIn {
          from { opacity: 0; transform: translateX(-50%) translateY(12px); }
          to   { opacity: 1; transform: translateX(-50%) translateY(0); }
        }
        .dock-in { animation: dockSlideIn 0.42s cubic-bezier(.2,.8,.2,1) forwards; }
        .dock-item { animation: dockItemIn 0.4s cubic-bezier(.2,.8,.2,1) backwards; }
        .slider-in { animation: sliderIn 0.4s cubic-bezier(.2,.8,.2,1) forwards; }

        .tools-fab {
          position: relative;
          transition: background 0.3s ease, border-color 0.3s ease, box-shadow 0.3s ease;
        }
        .tools-fab::before {
          content: ""; position: absolute; inset: -6px;
          border-radius: 16px;
          background: radial-gradient(circle, rgba(196,144,90,0.35), transparent 70%);
          opacity: 0; transition: opacity 0.4s ease;
          pointer-events: none;
        }
        .tools-fab.open::before { opacity: 1; }
        .tools-fab .bars, .tools-fab .cross {
          position: absolute; inset: 0;
          display: flex; align-items: center; justify-content: center;
          transition: opacity 0.28s ease, transform 0.35s cubic-bezier(.34,1.3,.64,1);
        }
        .tools-fab .bars { opacity: 1; transform: rotate(0deg); }
        .tools-fab.open .bars { opacity: 0; transform: rotate(-90deg); }
        .tools-fab .cross { opacity: 0; transform: rotate(90deg); }
        .tools-fab.open .cross { opacity: 1; transform: rotate(0deg); }
        ::-webkit-scrollbar { width: 4px; } ::-webkit-scrollbar-thumb { background: rgba(245,236,216,0.2); border-radius:2px; }

        @media (max-width: 768px) {
          .panel-in { animation: fadeUp 0.35s ease forwards; }
        }
      `}),ae.jsx("div",{ref:s,style:{position:"absolute",inset:0}}),ae.jsx("div",{style:{position:"absolute",inset:0,background:"radial-gradient(ellipse 75% 75% at center, transparent 40%, rgba(18,12,6,0.55) 100%)",pointerEvents:"none"}}),ae.jsxs("div",{style:{position:"absolute",top:0,left:0,right:0,padding:g?"16px 16px 50px":"20px 28px 60px",background:"linear-gradient(180deg, rgba(18,12,6,0.82) 0%, transparent 100%)",display:"flex",alignItems:"flex-start",justifyContent:"space-between",pointerEvents:"none"},children:[ae.jsxs("div",{className:u?"fade-up":"",style:{opacity:u?1:0,maxWidth:g?"calc(100% - 60px)":"auto"},children:[ae.jsx("div",{style:{fontFamily:"'Cormorant Garamond', serif",fontSize:g?18:23,fontWeight:600,color:"#F8EED8",letterSpacing:"-0.01em",lineHeight:1.1},children:"Integrated Modular Healing Space"}),ae.jsx("div",{style:{fontFamily:"'DM Sans', sans-serif",fontSize:g?8:10,letterSpacing:"0.16em",textTransform:"uppercase",color:"rgba(248,238,216,0.5)",marginTop:5},children:"3D Spatial Prototype · Hospital Waiting Environment · Team 142"})]}),!g&&ae.jsxs("div",{style:{fontFamily:"'DM Sans', sans-serif",fontSize:10,color:"rgba(248,238,216,0.38)",textAlign:"right",lineHeight:1.8,letterSpacing:"0.04em"},children:["300 m² floor plate",ae.jsx("br",{}),"Capacity: 40–60 persons",ae.jsx("br",{}),"Scale approx. 1:50"]})]}),ae.jsxs("div",{style:{position:"absolute",top:g?65:76,left:"50%",transform:"translateX(-50%)",display:"flex",gap:g?5:7,flexWrap:"wrap",justifyContent:"center",zIndex:10,maxWidth:g?"calc(100% - 32px)":"auto",padding:g?"0 8px":0},children:[$t.map((U,N)=>{const Ue=(n==null?void 0:n.id)===U.id;return ae.jsx("button",{className:"zbtn",onClick:()=>ie(U),style:{padding:g?"6px 12px":"7px 16px",borderRadius:24,border:`1.5px solid ${Ue?U.accent:"rgba(248,238,216,0.25)"}`,background:Ue?U.accent:"rgba(18,12,6,0.6)",color:Ue?"#fff":"rgba(248,238,216,0.78)",fontSize:g?10:11,fontWeight:Ue?500:400,letterSpacing:"0.04em",cursor:"pointer",backdropFilter:"blur(12px)",fontFamily:"'DM Sans', sans-serif",boxShadow:Ue?`0 4px 20px ${U.accent}55`:"none",animationDelay:`${N*.06}s`},children:g?U.icon:`${U.icon} ${U.label}`},U.id)}),n&&ae.jsxs("button",{className:"zbtn",onClick:Be,style:{padding:g?"6px 12px":"7px 16px",borderRadius:24,border:"1.5px solid rgba(248,238,216,0.28)",background:"rgba(18,12,6,0.6)",color:"rgba(248,238,216,0.7)",fontSize:g?10:11,fontWeight:300,cursor:"pointer",backdropFilter:"blur(12px)",fontFamily:"'DM Sans', sans-serif"},children:["↺ ",g?"":"Overview"]})]}),Ee&&ae.jsxs("div",{className:"panel-in",style:{position:"absolute",right:g?12:22,top:g?"auto":"50%",bottom:g?12:"auto",left:g?12:"auto",width:g?"auto":300,maxHeight:g?"50vh":"auto",overflowY:g?"auto":"visible",zIndex:20,background:"rgba(16,10,4,0.95)",borderRadius:g?16:20,padding:g?"20px 18px":"28px 24px",boxShadow:`0 16px 50px rgba(0,0,0,0.55), 0 0 0 1px ${Ee.accent}44`,backdropFilter:"blur(18px)",border:`1px solid ${Ee.accent}44`},children:[ae.jsxs("div",{style:{display:"inline-flex",alignItems:"center",gap:8,padding:"5px 13px",borderRadius:20,marginBottom:16,background:Ee.accent+"22",border:`1px solid ${Ee.accent}66`},children:[ae.jsx("span",{style:{fontSize:15},children:Ee.icon}),ae.jsx("span",{style:{fontFamily:"'DM Sans'",fontSize:10,fontWeight:500,color:Ee.accent,letterSpacing:"0.07em",textTransform:"uppercase"},children:n?"Zone Active":"Hover Preview"})]}),ae.jsx("div",{style:{fontFamily:"'Cormorant Garamond', serif",fontSize:21,fontWeight:600,color:"#F8EED8",lineHeight:1.2,marginBottom:12},children:Ee.label}),ae.jsx("div",{style:{fontFamily:"'DM Sans'",fontSize:12,lineHeight:1.8,color:"rgba(248,238,216,0.62)",marginBottom:20},children:Ee.desc}),ae.jsx("div",{style:{fontFamily:"'DM Sans'",fontSize:9,letterSpacing:"0.13em",textTransform:"uppercase",color:"rgba(248,238,216,0.32)",marginBottom:10},children:"Design Interventions"}),Ee.features.map((U,N)=>ae.jsxs("div",{style:{display:"flex",alignItems:"center",gap:9,padding:"7px 0",borderBottom:"1px solid rgba(248,238,216,0.06)",fontFamily:"'DM Sans'",fontSize:12,color:"rgba(248,238,216,0.75)"},children:[ae.jsx("span",{style:{color:Ee.accent,fontSize:9,flexShrink:0,marginTop:1},children:"✦"}),U]},N)),ae.jsx("div",{style:{marginTop:18,padding:"10px 16px",borderRadius:12,background:Ee.accent+"18",border:`1px solid ${Ee.accent}30`,fontFamily:"'DM Sans'",fontSize:13,fontWeight:500,color:Ee.accent,letterSpacing:"0.02em"},children:Ee.metric}),!n&&ae.jsx("div",{style:{marginTop:12,fontFamily:"'DM Sans'",fontSize:10,color:"rgba(248,238,216,0.3)",textAlign:"center",letterSpacing:"0.08em"},children:"Click to enter zone →"}),n&&ae.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",marginTop:18,paddingTop:14,borderTop:"1px solid rgba(248,238,216,0.08)"},children:[ae.jsx("button",{className:"zbtn",onClick:()=>re(-1),style:{padding:"6px 12px",borderRadius:18,border:"1px solid rgba(248,238,216,0.22)",background:"rgba(248,238,216,0.05)",color:"rgba(248,238,216,0.8)",fontSize:11,cursor:"pointer",fontFamily:"'DM Sans'"},children:"← Prev"}),ae.jsxs("span",{style:{fontFamily:"'DM Sans'",fontSize:10,color:"rgba(248,238,216,0.4)",letterSpacing:"0.08em"},children:[$t.findIndex(U=>U.id===n.id)+1," / ",$t.length]}),ae.jsx("button",{className:"zbtn",onClick:()=>re(1),style:{padding:"6px 12px",borderRadius:18,border:`1px solid ${Ee.accent}66`,background:Ee.accent+"22",color:Ee.accent,fontSize:11,cursor:"pointer",fontFamily:"'DM Sans'",fontWeight:500},children:"Next →"})]})]},Ee.id),a&&!n&&!g&&ae.jsxs("div",{style:{position:"absolute",bottom:28,left:"50%",transform:"translateX(-50%)",background:"rgba(16,10,4,0.82)",color:"rgba(248,238,216,0.7)",padding:"10px 24px",borderRadius:30,fontFamily:"'DM Sans'",fontSize:11,letterSpacing:"0.05em",backdropFilter:"blur(12px)",border:"1px solid rgba(248,238,216,0.1)",pointerEvents:"none",display:"flex",gap:22},children:[ae.jsx("span",{children:"🖱 Drag to orbit"}),ae.jsx("span",{children:"⚲ Scroll to zoom"}),ae.jsx("span",{children:"Click zones"}),ae.jsx("span",{children:"Press H for help"})]}),a&&!n&&g&&ae.jsx("div",{style:{position:"absolute",bottom:145,left:"50%",transform:"translateX(-50%)",background:"rgba(16,10,4,0.82)",color:"rgba(248,238,216,0.7)",padding:"10px 20px",borderRadius:30,fontFamily:"'DM Sans'",fontSize:10,letterSpacing:"0.05em",backdropFilter:"blur(12px)",border:"1px solid rgba(248,238,216,0.1)",pointerEvents:"none",textAlign:"center",maxWidth:"calc(100% - 32px)"},children:ae.jsx("span",{children:"Swipe to explore · Tap zones · Press ? for help"})}),!g&&ae.jsxs("div",{style:{position:"absolute",bottom:28,right:26,fontFamily:"'DM Sans'",fontSize:9,color:"rgba(248,238,216,0.32)",textAlign:"center",lineHeight:1.9,letterSpacing:"0.1em"},children:[ae.jsx("div",{style:{fontSize:20,opacity:.35},children:"⊕"}),"N"]}),!g&&ae.jsx("div",{style:{position:"absolute",bottom:78,left:"50%",transform:"translateX(-50%)",display:"flex",gap:8,alignItems:"center",pointerEvents:"none"},children:$t.map(U=>ae.jsx("div",{style:{width:(n==null?void 0:n.id)===U.id?20:6,height:6,borderRadius:3,background:(n==null?void 0:n.id)===U.id?U.accent:"rgba(248,238,216,0.22)",transition:"all 0.35s cubic-bezier(.4,0,.2,1)"}},U.id))}),ae.jsxs("div",{style:{position:"absolute",top:g?16:90,right:g?16:22,display:"flex",gap:8,zIndex:30,pointerEvents:"auto"},children:[ae.jsx("button",{onClick:()=>I(!b),className:"zbtn",style:{height:40,padding:"0 14px",borderRadius:20,border:`1.5px solid ${b?"#C4905A":"rgba(248,238,216,0.3)"}`,background:b?"#C4905A":"rgba(18,12,6,0.7)",color:b?"#fff":"rgba(248,238,216,0.8)",fontSize:g?10:11,cursor:"pointer",backdropFilter:"blur(12px)",fontFamily:"'DM Sans'",letterSpacing:"0.04em",display:"flex",alignItems:"center",gap:6},title:"Compare to typical waiting room",children:b?"✨ Healing":"⊘ Typical"}),ae.jsx("button",{onClick:()=>S(!x),className:"zbtn",style:{width:40,height:40,borderRadius:"50%",border:`1.5px solid ${x?"#5572C4":"rgba(248,238,216,0.3)"}`,background:x?"#5572C4":"rgba(18,12,6,0.7)",color:"rgba(248,238,216,0.8)",fontSize:18,cursor:"pointer",backdropFilter:"blur(12px)",display:"flex",alignItems:"center",justifyContent:"center"},title:"Help (press H or ?)",children:"?"})]}),ae.jsxs("button",{onClick:()=>_e(U=>!U),title:J?"Hide tools":"Show tools",className:`tools-fab ${J?"open":""}`,style:{position:"absolute",left:g?14:26,top:"auto",bottom:g?14:26,width:46,height:46,borderRadius:13,border:`1px solid ${J?"rgba(196,144,90,0.6)":"rgba(248,238,216,0.14)"}`,background:J?"linear-gradient(135deg, rgba(196,144,90,0.92), rgba(160,112,80,0.92))":"rgba(18,12,6,0.72)",color:"#F8EED8",cursor:"pointer",backdropFilter:"blur(16px)",boxShadow:J?"0 8px 28px rgba(196,144,90,0.28), inset 0 1px 0 rgba(255,255,255,0.12)":"0 4px 14px rgba(0,0,0,0.3)",zIndex:25,padding:0},children:[ae.jsx("span",{className:"bars",children:ae.jsxs("svg",{width:"18",height:"18",viewBox:"0 0 18 18",fill:"none",children:[ae.jsx("circle",{cx:"3",cy:"4.5",r:"1.2",fill:"currentColor"}),ae.jsx("rect",{x:"6.5",y:"3.8",width:"9",height:"1.4",rx:"0.7",fill:"currentColor"}),ae.jsx("circle",{cx:"3",cy:"9",r:"1.2",fill:"currentColor"}),ae.jsx("rect",{x:"6.5",y:"8.3",width:"9",height:"1.4",rx:"0.7",fill:"currentColor"}),ae.jsx("circle",{cx:"3",cy:"13.5",r:"1.2",fill:"currentColor"}),ae.jsx("rect",{x:"6.5",y:"12.8",width:"9",height:"1.4",rx:"0.7",fill:"currentColor"})]})}),ae.jsx("span",{className:"cross",children:ae.jsx("svg",{width:"16",height:"16",viewBox:"0 0 16 16",fill:"none",children:ae.jsx("path",{d:"M3 3 L13 13 M13 3 L3 13",stroke:"currentColor",strokeWidth:"1.6",strokeLinecap:"round"})})})]}),J&&ae.jsx("div",{className:"dock-in",style:{position:"absolute",left:g?"50%":26,bottom:g?72:84,top:"auto",transform:g?"translateX(-50%)":"none",display:"flex",flexDirection:g?"row":"column",gap:8,zIndex:20,padding:8,background:"rgba(18,12,6,0.75)",borderRadius:14,border:"1px solid rgba(248,238,216,0.12)",backdropFilter:"blur(14px)",flexWrap:"wrap",maxWidth:g?"calc(100% - 24px)":"auto"},children:[{key:"heatmap",label:"Heatmap",icon:"▦",active:P,toggle:()=>H(U=>!U),color:"#E07B4A"},{key:"patients",label:"Patient Flow",icon:"◉",active:ne,toggle:()=>Z(U=>!U),color:"#4A8A58"},{key:"fp",label:"1st Person",icon:"◐",active:w,toggle:()=>{w||(k(!1),_e(!1)),D(U=>!U)},color:"#5572C4"},{key:"split",label:"Split View",icon:"◫",active:j,toggle:()=>{j||D(!1),k(U=>!U)},color:"#8A5898"},{key:"inspect",label:"Inspect",icon:"⊙",active:q,toggle:()=>{de(U=>!U),q&&W(null)},color:"#C4905A"}].map((U,N)=>ae.jsxs("button",{onClick:U.toggle,className:"zbtn dock-item",title:`${U.label}${U.active?" (click to disable)":""}`,style:{animationDelay:`${.06+N*.05}s`,width:g?44:150,height:36,padding:g?0:"0 12px",borderRadius:8,border:`1px solid ${U.active?U.color:"rgba(248,238,216,0.18)"}`,background:U.active?U.color:"rgba(18,12,6,0.4)",color:U.active?"#fff":"rgba(248,238,216,0.8)",fontSize:g?16:11,fontFamily:"'DM Sans', sans-serif",letterSpacing:"0.04em",cursor:"pointer",display:"flex",alignItems:"center",justifyContent:g?"center":"flex-start",gap:8,fontWeight:U.active?500:400},children:[ae.jsx("span",{style:{fontSize:14},children:U.icon}),!g&&ae.jsx("span",{children:U.label})]},U.key))}),J&&!g&&!j&&ae.jsxs("div",{className:"slider-in",style:{position:"absolute",bottom:28,left:"50%",transform:"translateX(-50%)",width:340,padding:"10px 18px",background:"rgba(18,12,6,0.82)",borderRadius:12,border:"1px solid rgba(248,238,216,0.12)",backdropFilter:"blur(14px)",zIndex:15,fontFamily:"'DM Sans', sans-serif"},children:[ae.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:6},children:[ae.jsx("span",{style:{fontSize:10,letterSpacing:"0.12em",textTransform:"uppercase",color:"rgba(248,238,216,0.5)"},children:"Circadian Light"}),ae.jsxs("span",{style:{fontSize:12,color:"#F8EED8",fontVariantNumeric:"tabular-nums"},children:[String(Math.floor(L)).padStart(2,"0"),":",String(Math.floor(L%1*60)).padStart(2,"0")]})]}),ae.jsx("input",{type:"range",min:0,max:24,step:.25,value:L,onChange:U=>z(parseFloat(U.target.value)),disabled:b,style:{width:"100%",accentColor:"#C4905A",cursor:b?"not-allowed":"pointer",opacity:b?.4:1}}),ae.jsxs("div",{style:{display:"flex",justifyContent:"space-between",fontSize:9,color:"rgba(248,238,216,0.35)",marginTop:2},children:[ae.jsx("span",{children:"00"}),ae.jsx("span",{children:"06"}),ae.jsx("span",{children:"12"}),ae.jsx("span",{children:"18"}),ae.jsx("span",{children:"24"})]})]}),ne&&!g&&!j&&ae.jsxs("div",{className:"panel-in",style:{position:"absolute",top:150,left:26,width:220,padding:16,background:"rgba(18,12,6,0.9)",borderRadius:12,border:"1px solid rgba(74,138,88,0.4)",backdropFilter:"blur(14px)",zIndex:15,fontFamily:"'DM Sans', sans-serif"},children:[ae.jsxs("div",{style:{fontSize:9,letterSpacing:"0.14em",textTransform:"uppercase",color:"rgba(74,138,88,0.9)",marginBottom:10,display:"flex",alignItems:"center",gap:6},children:[ae.jsx("span",{style:{width:6,height:6,borderRadius:3,background:"#4A8A58",display:"inline-block",animation:"pulse 1.5s infinite"}}),"Live Occupancy"]}),$t.map(U=>{const N=xe[U.id]||0;return ae.jsxs("div",{style:{marginBottom:8},children:[ae.jsxs("div",{style:{display:"flex",justifyContent:"space-between",fontSize:11,color:"rgba(248,238,216,0.8)",marginBottom:3},children:[ae.jsxs("span",{children:[U.icon," ",U.label.split(" ")[0]]}),ae.jsx("span",{style:{color:U.accent,fontWeight:500},children:N})]}),ae.jsx("div",{style:{height:4,background:"rgba(248,238,216,0.08)",borderRadius:2,overflow:"hidden"},children:ae.jsx("div",{style:{height:"100%",width:`${Math.min(100,N*25)}%`,background:U.accent,transition:"width 0.4s"}})})]},U.id)}),ae.jsx("div",{style:{fontSize:9,color:"rgba(248,238,216,0.4)",marginTop:10,paddingTop:8,borderTop:"1px solid rgba(248,238,216,0.08)"},children:"8 simulated patients · stress-adaptive routing"})]}),p&&!n&&!q&&ae.jsxs("div",{style:{position:"absolute",top:g?108:120,left:"50%",transform:"translateX(-50%)",padding:"5px 14px",borderRadius:14,background:"rgba(18,12,6,0.78)",border:`1px solid ${p.accent}66`,backdropFilter:"blur(10px)",fontFamily:"'DM Sans', sans-serif",fontSize:11,color:"rgba(248,238,216,0.85)",letterSpacing:"0.04em",display:"flex",alignItems:"center",gap:6,zIndex:12,pointerEvents:"none"},children:[ae.jsx("span",{style:{color:p.accent},children:p.icon}),p.label,ae.jsx("span",{style:{color:"rgba(248,238,216,0.35)",fontSize:10,marginLeft:4},children:"· click to enter"})]}),ve&&ae.jsx("div",{onClick:()=>W(null),style:{position:"absolute",inset:0,background:"rgba(10,6,2,0.55)",backdropFilter:"blur(2px)",zIndex:39,animation:"fadeUp 0.2s ease forwards"}}),ve&&ae.jsxs("div",{className:"panel-in",style:{position:"absolute",left:"50%",top:"50%",transform:"translate(-50%, -50%)",width:g?"calc(100% - 32px)":420,maxWidth:"calc(100vw - 32px)",maxHeight:"75vh",overflowY:"auto",background:"rgba(24,18,10,0.97)",borderRadius:16,padding:"22px 24px",border:"1px solid rgba(196,144,90,0.55)",boxShadow:"0 20px 60px rgba(0,0,0,0.7)",backdropFilter:"blur(18px)",zIndex:40},children:[ae.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"flex-start",marginBottom:8},children:[ae.jsxs("div",{children:[ae.jsx("div",{style:{fontSize:9,letterSpacing:"0.14em",textTransform:"uppercase",color:"#C4905A"},children:"Material · Sample"}),ae.jsx("div",{style:{fontFamily:"'Cormorant Garamond', serif",fontSize:22,color:"#F8EED8",marginTop:2},children:ve.name})]}),ae.jsx("button",{onClick:()=>W(null),style:{border:"none",background:"rgba(248,238,216,0.1)",color:"rgba(248,238,216,0.7)",borderRadius:8,width:28,height:28,fontSize:14,cursor:"pointer"},children:"×"})]}),ae.jsx("div",{style:{fontSize:11,color:"rgba(248,238,216,0.55)",fontFamily:"'DM Sans', sans-serif",marginBottom:16},children:ve.dim}),ae.jsx("div",{style:{display:"grid",gridTemplateColumns:"1fr 1fr",gap:10,fontFamily:"'DM Sans', sans-serif"},children:ve.specs.map((U,N)=>ae.jsxs("div",{style:{padding:"8px 10px",background:"rgba(248,238,216,0.04)",borderRadius:8,border:"1px solid rgba(248,238,216,0.08)"},children:[ae.jsx("div",{style:{fontSize:8,letterSpacing:"0.1em",textTransform:"uppercase",color:"rgba(248,238,216,0.45)"},children:U[0]}),ae.jsx("div",{style:{fontSize:12,color:"#F8EED8",marginTop:2},children:U[1]})]},N))}),ae.jsx("div",{style:{marginTop:14,padding:10,background:"rgba(196,144,90,0.12)",borderRadius:8,fontSize:11,fontStyle:"italic",color:"rgba(248,238,216,0.75)",fontFamily:"'DM Sans'"},children:ve.note})]}),q&&!ve&&ae.jsx("div",{style:{position:"absolute",top:g?110:140,left:"50%",transform:"translateX(-50%)",padding:"8px 18px",borderRadius:16,background:"rgba(196,144,90,0.9)",color:"#fff",fontFamily:"'DM Sans'",fontSize:11,letterSpacing:"0.06em",zIndex:14,backdropFilter:"blur(12px)"},children:"⊙ Click a material surface (floor, beam, moss, acoustic panel)"}),j&&ae.jsxs(ae.Fragment,{children:[ae.jsx("div",{style:{position:"absolute",top:g?120:150,left:"25%",transform:"translateX(-50%)",padding:"8px 20px",borderRadius:10,background:"rgba(60,70,85,0.92)",color:"#fff",fontFamily:"'DM Sans'",fontSize:g?10:12,letterSpacing:"0.12em",textTransform:"uppercase",fontWeight:500,zIndex:14,border:"1px solid rgba(255,255,255,0.18)"},children:"⊘ Typical Ward"}),ae.jsx("div",{style:{position:"absolute",top:g?120:150,left:"75%",transform:"translateX(-50%)",padding:"8px 20px",borderRadius:10,background:"rgba(74,138,88,0.92)",color:"#fff",fontFamily:"'DM Sans'",fontSize:g?10:12,letterSpacing:"0.12em",textTransform:"uppercase",fontWeight:500,zIndex:14,border:"1px solid rgba(255,255,255,0.22)"},children:"✦ Healing Space"}),ae.jsx("div",{style:{position:"absolute",top:0,bottom:0,left:"50%",width:2,background:"rgba(248,238,216,0.4)",zIndex:13}})]}),w&&ae.jsxs(ae.Fragment,{children:[ae.jsx("div",{style:{position:"absolute",top:"50%",left:"50%",transform:"translate(-50%, -50%)",width:6,height:6,borderRadius:3,background:"rgba(255,255,255,0.55)",boxShadow:"0 0 0 1px rgba(0,0,0,0.3)",zIndex:14,pointerEvents:"none"}}),ae.jsxs("div",{style:{position:"absolute",bottom:g?80:110,left:"50%",transform:"translateX(-50%)",padding:"8px 20px",borderRadius:16,background:"rgba(85,114,196,0.9)",color:"#fff",fontFamily:"'DM Sans'",fontSize:11,letterSpacing:"0.06em",zIndex:14,backdropFilter:"blur(12px)",display:"flex",gap:18},children:[ae.jsx("span",{children:"WASD · Move"}),ae.jsx("span",{children:"Shift · Run"}),ae.jsx("span",{children:"Drag · Look"}),ae.jsx("span",{children:"ESC · Exit"})]})]}),x&&ae.jsxs(ae.Fragment,{children:[ae.jsx("div",{onClick:()=>S(!1),style:{position:"absolute",inset:0,background:"rgba(10,6,2,0.5)",backdropFilter:"blur(2px)",zIndex:24}}),ae.jsxs("div",{className:"panel-in",style:{position:"absolute",top:"50%",left:"50%",transform:"translate(-50%, -50%)",width:g?"calc(100% - 32px)":360,maxWidth:"calc(100vw - 32px)",maxHeight:"75vh",overflowY:"auto",zIndex:25,background:"rgba(16,10,4,0.97)",borderRadius:16,padding:g?"20px":"24px",border:"1px solid rgba(248,238,216,0.2)",backdropFilter:"blur(18px)",boxShadow:"0 20px 60px rgba(0,0,0,0.7)"},children:[ae.jsx("h3",{style:{fontFamily:"'Cormorant Garamond', serif",fontSize:20,color:"#F8EED8",marginBottom:16},children:g?"Touch Controls":"Keyboard Shortcuts"}),!g&&ae.jsxs("div",{style:{fontFamily:"'DM Sans', sans-serif",fontSize:12,color:"rgba(248,238,216,0.7)",lineHeight:2},children:[ae.jsxs("div",{style:{display:"flex",justifyContent:"space-between",marginBottom:8},children:[ae.jsx("span",{style:{color:"rgba(248,238,216,0.5)"},children:"1, 2, 3, 4"}),ae.jsx("span",{children:"Toggle zones"})]}),ae.jsxs("div",{style:{display:"flex",justifyContent:"space-between",marginBottom:8},children:[ae.jsx("span",{style:{color:"rgba(248,238,216,0.5)"},children:"R"}),ae.jsx("span",{children:"Reset to overview"})]}),ae.jsxs("div",{style:{display:"flex",justifyContent:"space-between",marginBottom:8},children:[ae.jsx("span",{style:{color:"rgba(248,238,216,0.5)"},children:"ESC"}),ae.jsx("span",{children:"Close panels / Exit modes"})]}),ae.jsxs("div",{style:{display:"flex",justifyContent:"space-between",marginBottom:8},children:[ae.jsx("span",{style:{color:"rgba(248,238,216,0.5)"},children:"H or ?"}),ae.jsx("span",{children:"Toggle help"})]}),ae.jsxs("div",{style:{display:"flex",justifyContent:"space-between",marginBottom:8},children:[ae.jsx("span",{style:{color:"rgba(248,238,216,0.5)"},children:"Arrow keys"}),ae.jsx("span",{children:"Orbit camera"})]})]}),ae.jsxs("div",{style:{marginTop:g?0:20,paddingTop:g?0:16,borderTop:g?"none":"1px solid rgba(248,238,216,0.1)"},children:[!g&&ae.jsx("h4",{style:{fontFamily:"'DM Sans', sans-serif",fontSize:10,letterSpacing:"0.1em",textTransform:"uppercase",color:"rgba(248,238,216,0.4)",marginBottom:10},children:"Mouse Controls"}),ae.jsxs("div",{style:{fontFamily:"'DM Sans', sans-serif",fontSize:12,color:"rgba(248,238,216,0.7)",lineHeight:2},children:[ae.jsxs("div",{style:{display:"flex",justifyContent:"space-between",marginBottom:8},children:[ae.jsx("span",{style:{color:"rgba(248,238,216,0.5)"},children:g?"Swipe":"Drag"}),ae.jsx("span",{children:"Orbit view"})]}),ae.jsxs("div",{style:{display:"flex",justifyContent:"space-between",marginBottom:8},children:[ae.jsx("span",{style:{color:"rgba(248,238,216,0.5)"},children:g?"Pinch":"Scroll"}),ae.jsx("span",{children:"Zoom in/out"})]}),ae.jsxs("div",{style:{display:"flex",justifyContent:"space-between",marginBottom:8},children:[ae.jsx("span",{style:{color:"rgba(248,238,216,0.5)"},children:g?"Tap":"Click"}),ae.jsx("span",{children:"Focus on zone"})]}),ae.jsxs("div",{style:{display:"flex",justifyContent:"space-between"},children:[ae.jsx("span",{style:{color:"rgba(248,238,216,0.5)"},children:g?"Tap icons":"Use buttons"}),ae.jsx("span",{children:"Zone navigation"})]})]})]})]})]}),b&&ae.jsxs("div",{style:{position:"absolute",top:g?110:140,left:"50%",transform:"translateX(-50%)",background:"rgba(60,70,85,0.92)",color:"#fff",padding:g?"10px 18px":"12px 26px",borderRadius:14,fontFamily:"'DM Sans', sans-serif",fontSize:g?10:12,letterSpacing:"0.08em",backdropFilter:"blur(12px)",border:"1px solid rgba(255,255,255,0.18)",textAlign:"center",zIndex:15,maxWidth:g?"calc(100% - 32px)":420,boxShadow:"0 10px 30px rgba(0,0,0,0.4)"},children:[ae.jsx("div",{style:{fontSize:g?9:10,opacity:.65,textTransform:"uppercase",letterSpacing:"0.14em",marginBottom:3},children:"Baseline Reference"}),ae.jsx("div",{style:{fontWeight:500},children:"Typical Hospital Waiting Room · Fluorescent, desaturated, no biophilic elements"})]}),!u&&T<100&&ae.jsxs("div",{style:{position:"absolute",inset:0,background:"#16100A",display:"flex",alignItems:"center",justifyContent:"center",flexDirection:"column",zIndex:100,transition:"opacity 0.5s"},children:[ae.jsx("div",{style:{fontFamily:"'Cormorant Garamond', serif",fontSize:g?22:28,color:"#F8EED8",marginBottom:24},children:"Loading Healing Space"}),ae.jsx("div",{style:{width:g?220:280,height:4,background:"rgba(248,238,216,0.1)",borderRadius:2,overflow:"hidden"},children:ae.jsx("div",{style:{width:`${T}%`,height:"100%",background:"linear-gradient(90deg, #C4905A, #4A8A58, #5572C4, #8A5898)",transition:"width 0.3s ease"}})}),ae.jsxs("div",{style:{fontFamily:"'DM Sans', sans-serif",fontSize:12,color:"rgba(248,238,216,0.5)",marginTop:16},children:[T,"%"]})]})]})}b_.createRoot(document.getElementById("root")).render(ae.jsx(Y1,{}));
