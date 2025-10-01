/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const so=globalThis,Ds=so.ShadowRoot&&(so.ShadyCSS===void 0||so.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,Ls=Symbol(),ya=new WeakMap;let wa=class{constructor(t,i,o){if(this._$cssResult$=!0,o!==Ls)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=i}get styleSheet(){let t=this.o;const i=this.t;if(Ds&&t===void 0){const o=i!==void 0&&i.length===1;o&&(t=ya.get(i)),t===void 0&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),o&&ya.set(i,t))}return t}toString(){return this.cssText}};const vt=e=>new wa(typeof e=="string"?e:e+"",void 0,Ls),b=(e,...t)=>{const i=e.length===1?e[0]:t.reduce((o,r,s)=>o+(n=>{if(n._$cssResult$===!0)return n.cssText;if(typeof n=="number")return n;throw Error("Value passed to 'css' function must be a 'css' function result: "+n+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(r)+e[s+1],e[0]);return new wa(i,e,Ls)},gc=(e,t)=>{if(Ds)e.adoptedStyleSheets=t.map(i=>i instanceof CSSStyleSheet?i:i.styleSheet);else for(const i of t){const o=document.createElement("style"),r=so.litNonce;r!==void 0&&o.setAttribute("nonce",r),o.textContent=i.cssText,e.appendChild(o)}},xa=Ds?e=>e:e=>e instanceof CSSStyleSheet?(t=>{let i="";for(const o of t.cssRules)i+=o.cssText;return vt(i)})(e):e;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const{is:mc,defineProperty:_c,getOwnPropertyDescriptor:yc,getOwnPropertyNames:wc,getOwnPropertySymbols:xc,getPrototypeOf:$c}=Object,no=globalThis,$a=no.trustedTypes,kc=$a?$a.emptyScript:"",Cc=no.reactiveElementPolyfillSupport,dr=(e,t)=>e,ao={toAttribute(e,t){switch(t){case Boolean:e=e?kc:null;break;case Object:case Array:e=e==null?e:JSON.stringify(e)}return e},fromAttribute(e,t){let i=e;switch(t){case Boolean:i=e!==null;break;case Number:i=e===null?null:Number(e);break;case Object:case Array:try{i=JSON.parse(e)}catch{i=null}}return i}},Ts=(e,t)=>!mc(e,t),ka={attribute:!0,type:String,converter:ao,reflect:!1,hasChanged:Ts};Symbol.metadata??=Symbol("metadata"),no.litPropertyMetadata??=new WeakMap;let ui=class extends HTMLElement{static addInitializer(t){this._$Ei(),(this.l??=[]).push(t)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(t,i=ka){if(i.state&&(i.attribute=!1),this._$Ei(),this.elementProperties.set(t,i),!i.noAccessor){const o=Symbol(),r=this.getPropertyDescriptor(t,o,i);r!==void 0&&_c(this.prototype,t,r)}}static getPropertyDescriptor(t,i,o){const{get:r,set:s}=yc(this.prototype,t)??{get(){return this[i]},set(n){this[i]=n}};return{get(){return r?.call(this)},set(n){const u=r?.call(this);s.call(this,n),this.requestUpdate(t,u,o)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)??ka}static _$Ei(){if(this.hasOwnProperty(dr("elementProperties")))return;const t=$c(this);t.finalize(),t.l!==void 0&&(this.l=[...t.l]),this.elementProperties=new Map(t.elementProperties)}static finalize(){if(this.hasOwnProperty(dr("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(dr("properties"))){const i=this.properties,o=[...wc(i),...xc(i)];for(const r of o)this.createProperty(r,i[r])}const t=this[Symbol.metadata];if(t!==null){const i=litPropertyMetadata.get(t);if(i!==void 0)for(const[o,r]of i)this.elementProperties.set(o,r)}this._$Eh=new Map;for(const[i,o]of this.elementProperties){const r=this._$Eu(i,o);r!==void 0&&this._$Eh.set(r,i)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(t){const i=[];if(Array.isArray(t)){const o=new Set(t.flat(1/0).reverse());for(const r of o)i.unshift(xa(r))}else t!==void 0&&i.push(xa(t));return i}static _$Eu(t,i){const o=i.attribute;return o===!1?void 0:typeof o=="string"?o:typeof t=="string"?t.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){this._$ES=new Promise(t=>this.enableUpdating=t),this._$AL=new Map,this._$E_(),this.requestUpdate(),this.constructor.l?.forEach(t=>t(this))}addController(t){(this._$EO??=new Set).add(t),this.renderRoot!==void 0&&this.isConnected&&t.hostConnected?.()}removeController(t){this._$EO?.delete(t)}_$E_(){const t=new Map,i=this.constructor.elementProperties;for(const o of i.keys())this.hasOwnProperty(o)&&(t.set(o,this[o]),delete this[o]);t.size>0&&(this._$Ep=t)}createRenderRoot(){const t=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return gc(t,this.constructor.elementStyles),t}connectedCallback(){this.renderRoot??=this.createRenderRoot(),this.enableUpdating(!0),this._$EO?.forEach(t=>t.hostConnected?.())}enableUpdating(t){}disconnectedCallback(){this._$EO?.forEach(t=>t.hostDisconnected?.())}attributeChangedCallback(t,i,o){this._$AK(t,o)}_$EC(t,i){const o=this.constructor.elementProperties.get(t),r=this.constructor._$Eu(t,o);if(r!==void 0&&o.reflect===!0){const s=(o.converter?.toAttribute!==void 0?o.converter:ao).toAttribute(i,o.type);this._$Em=t,s==null?this.removeAttribute(r):this.setAttribute(r,s),this._$Em=null}}_$AK(t,i){const o=this.constructor,r=o._$Eh.get(t);if(r!==void 0&&this._$Em!==r){const s=o.getPropertyOptions(r),n=typeof s.converter=="function"?{fromAttribute:s.converter}:s.converter?.fromAttribute!==void 0?s.converter:ao;this._$Em=r,this[r]=n.fromAttribute(i,s.type),this._$Em=null}}requestUpdate(t,i,o){if(t!==void 0){if(o??=this.constructor.getPropertyOptions(t),!(o.hasChanged??Ts)(this[t],i))return;this.P(t,i,o)}this.isUpdatePending===!1&&(this._$ES=this._$ET())}P(t,i,o){this._$AL.has(t)||this._$AL.set(t,i),o.reflect===!0&&this._$Em!==t&&(this._$Ej??=new Set).add(t)}async _$ET(){this.isUpdatePending=!0;try{await this._$ES}catch(i){Promise.reject(i)}const t=this.scheduleUpdate();return t!=null&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??=this.createRenderRoot(),this._$Ep){for(const[r,s]of this._$Ep)this[r]=s;this._$Ep=void 0}const o=this.constructor.elementProperties;if(o.size>0)for(const[r,s]of o)s.wrapped!==!0||this._$AL.has(r)||this[r]===void 0||this.P(r,this[r],s)}let t=!1;const i=this._$AL;try{t=this.shouldUpdate(i),t?(this.willUpdate(i),this._$EO?.forEach(o=>o.hostUpdate?.()),this.update(i)):this._$EU()}catch(o){throw t=!1,this._$EU(),o}t&&this._$AE(i)}willUpdate(t){}_$AE(t){this._$EO?.forEach(i=>i.hostUpdated?.()),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$EU(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(t){return!0}update(t){this._$Ej&&=this._$Ej.forEach(i=>this._$EC(i,this[i])),this._$EU()}updated(t){}firstUpdated(t){}};ui.elementStyles=[],ui.shadowRootOptions={mode:"open"},ui[dr("elementProperties")]=new Map,ui[dr("finalized")]=new Map,Cc?.({ReactiveElement:ui}),(no.reactiveElementVersions??=[]).push("2.0.4");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Vs=globalThis,lo=Vs.trustedTypes,Ca=lo?lo.createPolicy("lit-html",{createHTML:e=>e}):void 0,Ea="$lit$",ft=`lit$${Math.random().toFixed(9).slice(2)}$`,Pa="?"+ft,Ec=`<${Pa}>`,At=document,pr=()=>At.createComment(""),vr=e=>e===null||typeof e!="object"&&typeof e!="function",Ns=Array.isArray,Pc=e=>Ns(e)||typeof e?.[Symbol.iterator]=="function",Bs=`[ 	
\f\r]`,fr=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,Sa=/-->/g,Oa=/>/g,Ut=RegExp(`>|${Bs}(?:([^\\s"'>=/]+)(${Bs}*=${Bs}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),Ia=/'/g,Aa=/"/g,Ua=/^(?:script|style|textarea|title)$/i,za=e=>(t,...i)=>({_$litType$:e,strings:t,values:i}),l=za(1),m=za(2),ue=Symbol.for("lit-noChange"),E=Symbol.for("lit-nothing"),Ma=new WeakMap,zt=At.createTreeWalker(At,129);function Da(e,t){if(!Ns(e)||!e.hasOwnProperty("raw"))throw Error("invalid template strings array");return Ca!==void 0?Ca.createHTML(t):t}const Sc=(e,t)=>{const i=e.length-1,o=[];let r,s=t===2?"<svg>":t===3?"<math>":"",n=fr;for(let u=0;u<i;u++){const c=e[u];let p,f,h=-1,C=0;for(;C<c.length&&(n.lastIndex=C,f=n.exec(c),f!==null);)C=n.lastIndex,n===fr?f[1]==="!--"?n=Sa:f[1]!==void 0?n=Oa:f[2]!==void 0?(Ua.test(f[2])&&(r=RegExp("</"+f[2],"g")),n=Ut):f[3]!==void 0&&(n=Ut):n===Ut?f[0]===">"?(n=r??fr,h=-1):f[1]===void 0?h=-2:(h=n.lastIndex-f[2].length,p=f[1],n=f[3]===void 0?Ut:f[3]==='"'?Aa:Ia):n===Aa||n===Ia?n=Ut:n===Sa||n===Oa?n=fr:(n=Ut,r=void 0);const d=n===Ut&&e[u+1].startsWith("/>")?" ":"";s+=n===fr?c+Ec:h>=0?(o.push(p),c.slice(0,h)+Ea+c.slice(h)+ft+d):c+ft+(h===-2?u:d)}return[Da(e,s+(e[i]||"<?>")+(t===2?"</svg>":t===3?"</math>":"")),o]};let Hs=class fc{constructor({strings:t,_$litType$:i},o){let r;this.parts=[];let s=0,n=0;const u=t.length-1,c=this.parts,[p,f]=Sc(t,i);if(this.el=fc.createElement(p,o),zt.currentNode=this.el.content,i===2||i===3){const h=this.el.content.firstChild;h.replaceWith(...h.childNodes)}for(;(r=zt.nextNode())!==null&&c.length<u;){if(r.nodeType===1){if(r.hasAttributes())for(const h of r.getAttributeNames())if(h.endsWith(Ea)){const C=f[n++],d=r.getAttribute(h).split(ft),y=/([.?@])?(.*)/.exec(C);c.push({type:1,index:s,name:y[2],strings:d,ctor:y[1]==="."?Ic:y[1]==="?"?Ac:y[1]==="@"?Uc:uo}),r.removeAttribute(h)}else h.startsWith(ft)&&(c.push({type:6,index:s}),r.removeAttribute(h));if(Ua.test(r.tagName)){const h=r.textContent.split(ft),C=h.length-1;if(C>0){r.textContent=lo?lo.emptyScript:"";for(let d=0;d<C;d++)r.append(h[d],pr()),zt.nextNode(),c.push({type:2,index:++s});r.append(h[C],pr())}}}else if(r.nodeType===8)if(r.data===Pa)c.push({type:2,index:s});else{let h=-1;for(;(h=r.data.indexOf(ft,h+1))!==-1;)c.push({type:7,index:s}),h+=ft.length-1}s++}}static createElement(t,i){const o=At.createElement("template");return o.innerHTML=t,o}};function ci(e,t,i=e,o){if(t===ue)return t;let r=o!==void 0?i._$Co?.[o]:i._$Cl;const s=vr(t)?void 0:t._$litDirective$;return r?.constructor!==s&&(r?._$AO?.(!1),s===void 0?r=void 0:(r=new s(e),r._$AT(e,i,o)),o!==void 0?(i._$Co??=[])[o]=r:i._$Cl=r),r!==void 0&&(t=ci(e,r._$AS(e,t.values),r,o)),t}let Oc=class{constructor(t,i){this._$AV=[],this._$AN=void 0,this._$AD=t,this._$AM=i}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(t){const{el:{content:i},parts:o}=this._$AD,r=(t?.creationScope??At).importNode(i,!0);zt.currentNode=r;let s=zt.nextNode(),n=0,u=0,c=o[0];for(;c!==void 0;){if(n===c.index){let p;c.type===2?p=new cr(s,s.nextSibling,this,t):c.type===1?p=new c.ctor(s,c.name,c.strings,this,t):c.type===6&&(p=new zc(s,this,t)),this._$AV.push(p),c=o[++u]}n!==c?.index&&(s=zt.nextNode(),n++)}return zt.currentNode=At,r}p(t){let i=0;for(const o of this._$AV)o!==void 0&&(o.strings!==void 0?(o._$AI(t,o,i),i+=o.strings.length-2):o._$AI(t[i])),i++}};class cr{get _$AU(){return this._$AM?._$AU??this._$Cv}constructor(t,i,o,r){this.type=2,this._$AH=E,this._$AN=void 0,this._$AA=t,this._$AB=i,this._$AM=o,this.options=r,this._$Cv=r?.isConnected??!0}get parentNode(){let t=this._$AA.parentNode;const i=this._$AM;return i!==void 0&&t?.nodeType===11&&(t=i.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,i=this){t=ci(this,t,i),vr(t)?t===E||t==null||t===""?(this._$AH!==E&&this._$AR(),this._$AH=E):t!==this._$AH&&t!==ue&&this._(t):t._$litType$!==void 0?this.$(t):t.nodeType!==void 0?this.T(t):Pc(t)?this.k(t):this._(t)}O(t){return this._$AA.parentNode.insertBefore(t,this._$AB)}T(t){this._$AH!==t&&(this._$AR(),this._$AH=this.O(t))}_(t){this._$AH!==E&&vr(this._$AH)?this._$AA.nextSibling.data=t:this.T(At.createTextNode(t)),this._$AH=t}$(t){const{values:i,_$litType$:o}=t,r=typeof o=="number"?this._$AC(t):(o.el===void 0&&(o.el=Hs.createElement(Da(o.h,o.h[0]),this.options)),o);if(this._$AH?._$AD===r)this._$AH.p(i);else{const s=new Oc(r,this),n=s.u(this.options);s.p(i),this.T(n),this._$AH=s}}_$AC(t){let i=Ma.get(t.strings);return i===void 0&&Ma.set(t.strings,i=new Hs(t)),i}k(t){Ns(this._$AH)||(this._$AH=[],this._$AR());const i=this._$AH;let o,r=0;for(const s of t)r===i.length?i.push(o=new cr(this.O(pr()),this.O(pr()),this,this.options)):o=i[r],o._$AI(s),r++;r<i.length&&(this._$AR(o&&o._$AB.nextSibling,r),i.length=r)}_$AR(t=this._$AA.nextSibling,i){for(this._$AP?.(!1,!0,i);t&&t!==this._$AB;){const o=t.nextSibling;t.remove(),t=o}}setConnected(t){this._$AM===void 0&&(this._$Cv=t,this._$AP?.(t))}}let uo=class{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(t,i,o,r,s){this.type=1,this._$AH=E,this._$AN=void 0,this.element=t,this.name=i,this._$AM=r,this.options=s,o.length>2||o[0]!==""||o[1]!==""?(this._$AH=Array(o.length-1).fill(new String),this.strings=o):this._$AH=E}_$AI(t,i=this,o,r){const s=this.strings;let n=!1;if(s===void 0)t=ci(this,t,i,0),n=!vr(t)||t!==this._$AH&&t!==ue,n&&(this._$AH=t);else{const u=t;let c,p;for(t=s[0],c=0;c<s.length-1;c++)p=ci(this,u[o+c],i,c),p===ue&&(p=this._$AH[c]),n||=!vr(p)||p!==this._$AH[c],p===E?t=E:t!==E&&(t+=(p??"")+s[c+1]),this._$AH[c]=p}n&&!r&&this.j(t)}j(t){t===E?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,t??"")}},Ic=class extends uo{constructor(){super(...arguments),this.type=3}j(t){this.element[this.name]=t===E?void 0:t}};class Ac extends uo{constructor(){super(...arguments),this.type=4}j(t){this.element.toggleAttribute(this.name,!!t&&t!==E)}}class Uc extends uo{constructor(t,i,o,r,s){super(t,i,o,r,s),this.type=5}_$AI(t,i=this){if((t=ci(this,t,i,0)??E)===ue)return;const o=this._$AH,r=t===E&&o!==E||t.capture!==o.capture||t.once!==o.once||t.passive!==o.passive,s=t!==E&&(o===E||r);r&&this.element.removeEventListener(this.name,this,o),s&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){typeof this._$AH=="function"?this._$AH.call(this.options?.host??this.element,t):this._$AH.handleEvent(t)}}class zc{constructor(t,i,o){this.element=t,this.type=6,this._$AN=void 0,this._$AM=i,this.options=o}get _$AU(){return this._$AM._$AU}_$AI(t){ci(this,t)}}const Mc={I:cr},Dc=Vs.litHtmlPolyfillSupport;Dc?.(Hs,cr),(Vs.litHtmlVersions??=[]).push("3.2.1");const Lc=(e,t,i)=>{const o=i?.renderBefore??t;let r=o._$litPart$;if(r===void 0){const s=i?.renderBefore??null;o._$litPart$=r=new cr(t.insertBefore(pr(),s),s,void 0,i??{})}return r._$AI(e),r};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */let g=class extends ui{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){const t=super.createRenderRoot();return this.renderOptions.renderBefore??=t.firstChild,t}update(t){const i=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Do=Lc(i,this.renderRoot,this.renderOptions)}connectedCallback(){super.connectedCallback(),this._$Do?.setConnected(!0)}disconnectedCallback(){super.disconnectedCallback(),this._$Do?.setConnected(!1)}render(){return ue}};g._$litElement$=!0,g.finalized=!0,globalThis.litElementHydrateSupport?.({LitElement:g});const Tc=globalThis.litElementPolyfillSupport;Tc?.({LitElement:g}),(globalThis.litElementVersions??=[]).push("4.1.1");var Vc=`.uui-h1,
.uui-h2,
.uui-h3,
.uui-h4,
.uui-h5,
.uui-a,
.uui-p,
.uui-p-lead,
.uui-small,
.uui-quoteblock,
.uui-ul,
.uui-ol,
.uui-text {
  font-family: 'Lato', 'Helvetica Neue', Helvetica, Arial, sans-serif;
  font-size: 14px;
  line-height: 21px;
  -webkit-font-smoothing: antialiased;
}

.uui-text h1,
.uui-h1.uui-h1 {
  font-size: var(--uui-type-h1-size,60px);
  line-height: var(--uui-size-layout-4,66px);
  font-weight: 300;
  margin-left: -5px;
  margin-top: var(--uui-size-layout-1,24px);
  margin-bottom: var(--uui-size-layout-1,24px);
}
.uui-text p + h1,
.uui-text p + .uui-h1 {
  margin-top: var(--uui-size-layout-4,66px);
}
.uui-text h1.--no-top-margin,
.uui-text h1:first-child,
.uui-h1.--no-top-margin,
.uui-h1:first-child {
  margin-top: 0;
}

.uui-text h2,
.uui-h2.uui-h2 {
  font-size: var(--uui-type-h2-size,42px);
  line-height: var(--uui-size-layout-3,42px);
  font-weight: 300;
  margin-left: -3px;
  margin-top: var(--uui-size-layout-1,24px);
  margin-bottom: var(--uui-size-layout-1,24px);
}
.uui-text p + h2,
.uui-text p + .uui-h2 {
  margin-top: var(--uui-size-layout-3,42px);
}
.uui-text h2.--no-top-margin,
.uui-text h2:first-child,
.uui-h2.--no-top-margin,
.uui-h2:first-child {
  margin-top: 0;
}

.uui-text h3,
.uui-h3.uui-h3 {
  font-size: var(--uui-type-h3-size,30px);
  line-height: var(--uui-size-large);
  font-weight: 300;
  margin-left: -2px;
  margin-top: var(--uui-size-layout-1,24px);
  margin-bottom: var(--uui-size-layout-1,24px);
}
.uui-text h3.--no-top-margin,
.uui-text h3:first-child,
.uui-h3.--no-top-margin,
.uui-h3:first-child {
  margin-top: 0;
}

.uui-text h4,
.uui-h4.uui-h4 {
  font-size: var(--uui-type-h4-size,21px);
  line-height: 21px;
  font-weight: 400;
  margin-left: -1px;
  margin-top: var(--uui-size-layout-1,24px);
  margin-bottom: var(--uui-size-layout-1,24px);
}
.uui-text h4.--no-top-margin,
.uui-text h4:first-child,
.uui-h4.--no-top-margin,
.uui-h4:first-child {
  margin-top: 0;
}

.uui-text h5,
.uui-h5.uui-h5 {
  font-size: var(--uui-type-h5-size,14px);
  line-height: inherit;
  font-weight: 700;
  margin-left: 0;
  margin-top: var(--uui-size-layout-1,24px);
  margin-bottom: 0;
}

.uui-text h5.--no-top-margin,
.uui-text h5:first-child,
.uui-h5.--no-top-margin,
.uui-h5:first-child {
  margin-top: 0;
}

.uui-p,
.uui-text p {
  margin-top: var(--uui-size-layout-1,24px);
  margin-bottom: var(--uui-size-layout-1,24px);
}
.uui-p-lead,
.uui-text p.uui-lead {
  font-size: var(--uui-size-6,18px);
  line-height: var(--uui-size-8,24px);
}

.uui-a,
.uui-text a {
  color: var(--uui-color-interactive,#1b264f);
}

.uui-a:link,
.uui-a:active .uui-text a:link,
.uui-text a:active {
  color: var(--uui-color-interactive,#1b264f);
}
.uui-a:hover,
.uui-text a:hover {
  color: var(--uui-color-interactive-emphasis,#3544b1);
}

.uui-small,
.uui-text small {
  display: inline-block;
  font-size: var(--uui-type-small-size,12px);
  line-height: 18px;
}

.uui-quoteblock,
.uui-text blockquote {
  float: right;
  font-size: 14px;
  line-height: inherit;
  font-weight: 700;
  font-style: italic;
  margin-top: 0;
  margin-bottom: var(--uui-size-layout-1,24px);
  margin-right: -0.035em;
  max-width: 16em;
  quotes: '\u201C' '\u201D' '\u2018' '\u2019';
}

.uui-quoteblock:before,
.uui-text blockquote:before {
  content: open-quote;
  margin-left: -0.4em;
  margin-right: 0.08em;
  vertical-align: bottom;
  font-weight: 400;
  font-size: 2em;
}

.uui-quoteblock:after,
.uui-text blockquote:after {
  content: close-quote;
  margin-left: 0.04em;
  margin-right: -0.4em;
  vertical-align: bottom;
  font-weight: 400;
  font-size: 2em;
  margin-bottom: -2px;
  display: inline-block;
}

.uui-ul,
.uui-text ul {
  list-style-type: square;
  padding-left: var(--uui-size-layout-1,24px);
  margin-top: var(--uui-size-layout-1,24px);
  margin-bottom: var(--uui-size-layout-1,24px);
}

.uui-ol,
.uui-text ol {
  padding-left: var(--uui-size-layout-1,24px);
  margin-top: var(--uui-size-layout-1,24px);
  margin-bottom: var(--uui-size-layout-1,24px);
}
`;const hi=vt(Vc);/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Nc={attribute:!0,type:String,converter:ao,reflect:!1,hasChanged:Ts},Bc=(e=Nc,t,i)=>{const{kind:o,metadata:r}=i;let s=globalThis.litPropertyMetadata.get(r);if(s===void 0&&globalThis.litPropertyMetadata.set(r,s=new Map),s.set(i.name,e),o==="accessor"){const{name:n}=i;return{set(u){const c=t.get.call(this);t.set.call(this,u),this.requestUpdate(n,c,e)},init(u){return u!==void 0&&this.P(n,void 0,e),u}}}if(o==="setter"){const{name:n}=i;return function(u){const c=this[n];t.call(this,u),this.requestUpdate(n,c,e)}}throw Error("Unsupported decorator location: "+o)};function a(e){return(t,i)=>typeof i=="object"?Bc(e,t,i):((o,r,s)=>{const n=r.hasOwnProperty(s);return r.constructor.createProperty(s,n?{...o,wrapped:!0}:o),n?Object.getOwnPropertyDescriptor(r,s):void 0})(e,t,i)}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function _(e){return a({...e,state:!0,attribute:!1})}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const js=(e,t,i)=>(i.configurable=!0,i.enumerable=!0,Reflect.decorate&&typeof t!="object"&&Object.defineProperty(e,t,i),i);/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function O(e,t){return(i,o,r)=>{const s=n=>n.renderRoot?.querySelector(e)??null;return js(i,o,{get(){return s(this)}})}}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */let Hc;function jc(e){return(t,i)=>js(t,i,{get(){return(this.renderRoot??(Hc??=document.createDocumentFragment())).querySelectorAll(e)}})}/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function bt(e){return(t,i)=>{const{slot:o,selector:r}=e??{},s="slot"+(o?`[name=${o}]`:":not([name])");return js(t,i,{get(){const n=this.renderRoot?.querySelector(s),u=n?.assignedElements(e)??[];return r===void 0?u:u.filter(c=>c.matches(r))}})}}const Rc=b`
  @keyframes uui-blink {
    0%,
    100% {
      opacity: 0.5;
    }
    50% {
      opacity: 1;
    }
  }
`,Wc=vt("uui-blink 0.9s infinite both"),Fc=b`
  @keyframes pulse {
    0% {
      -webkit-transform: translate(-50%, -50%) scale(0.2);
      transform: translate(-50%, -50%) scale(0.2);
      opacity: 0.9;
    }
    80% {
      -webkit-transform: translate(-50%, -50%) scale(1.2);
      transform: translate(-50%, -50%) scale(1.2);
      opacity: 0;
    }
    100% {
      -webkit-transform: translate(-50%, -50%) scale(2.2);
      transform: translate(-50%, -50%) scale(2.2);
      opacity: 0;
    }
  }
`,Gc=vt("pulse 0.8s ease-in-out infinite both"),qc=b`
  @keyframes uui-horizontal-shake {
    10%,
    90% {
      transform: translateX(-1px);
    }

    20%,
    80% {
      transform: translateX(1px);
    }

    30%,
    50%,
    70% {
      transform: translateX(-2px);
    }

    40%,
    60% {
      transform: translateX(2px);
    }
  }
`,Kc=vt("uui-horizontal-shake 600ms ease backwards");let Rs=class extends Event{constructor(t,i={}){super(t,{...i}),this.detail=i.detail||{}}},qe=class extends Rs{constructor(t,i={}){super(t,{bubbles:!0,...i})}};qe.VALID="valid",qe.INVALID="invalid";let Mt=class extends Rs{constructor(t,i={}){super(t,{bubbles:!0,cancelable:!0,...i})}};Mt.SELECTED="selected",Mt.DESELECTED="deselected";var Yc=Object.defineProperty,Xc=(e,t,i,o)=>{for(var r=void 0,s=e.length-1,n;s>=0;s--)(n=e[s])&&(r=n(t,i,r)||r);return r&&Yc(t,i,r),r};const Zc=e=>{class t extends e{constructor(){super(...arguments),this.active=!1}}return Xc([a({type:Boolean,reflect:!0})],t.prototype,"active"),t};var Qc=Object.defineProperty,La=(e,t,i,o)=>{for(var r=void 0,s=e.length-1,n;s>=0;s--)(n=e[s])&&(r=n(t,i,r)||r);return r&&Qc(t,i,r),r};const Jc=(e,t)=>{class i extends t{constructor(){super(...arguments),this._labelSlotHasContent=!1}connectedCallback(){super.connectedCallback(),this.label||console.warn(this.tagName+" needs a `label`",this)}labelSlotChanged(r){this._labelSlotHasContent=r.target.assignedNodes({flatten:!0}).length>0}renderLabel(){return l`
        ${this._labelSlotHasContent===!1?l`<span class="label">${this.label}</span>`:""}
        <slot
          class="label"
          style=${this._labelSlotHasContent?"":"visibility: hidden"}
          name=${e||""}
          @slotchange=${this.labelSlotChanged}></slot>
      `}}return La([a({type:String})],i.prototype,"label"),La([_()],i.prototype,"_labelSlotHasContent"),i};var eh=Object.defineProperty,th=Object.getOwnPropertyDescriptor,Ta=e=>{throw TypeError(e)},Va=(e,t,i,o)=>{for(var r=o>1?void 0:o?th(t,i):t,s=e.length-1,n;s>=0;s--)(n=e[s])&&(r=(o?n(t,i,r):n(r))||r);return o&&r&&eh(t,i,r),r},Ws=(e,t,i)=>t.has(e)||Ta("Cannot "+i),ie=(e,t,i)=>(Ws(e,t,"read from private field"),i?i.call(e):t.get(e)),co=(e,t,i)=>t.has(e)?Ta("Cannot add the same private member more than once"):t instanceof WeakSet?t.add(e):t.set(e,i),ih=(e,t,i,o)=>(Ws(e,t,"write to private field"),t.set(e,i),i),ho=(e,t,i)=>(Ws(e,t,"access private method"),i);const rh=e=>{var t,i,o,r,s,n,u;class c extends e{constructor(...f){super(...f),co(this,r),this._selectable=!1,this.deselectable=!0,this.selected=!1,co(this,t,this),co(this,i,h=>{h.code!=="Space"&&h.code!=="Enter"||h.composedPath().indexOf(ie(this,t))===0&&ie(this,o).call(this,h)}),co(this,o,h=>{if((this._selectable||this.deselectable&&this.selected)===!1)return;const d=h.composedPath();ie(this,t)===this&&d.some(I=>{const $=I.tagName;return $==="A"||$==="BUTTON"||$==="INPUT"||$==="TEXTAREA"||$==="SELECT"})||d.indexOf(ie(this,t))!==-1&&(h.type==="keydown"&&h.preventDefault(),ho(this,r,s).call(this))}),this.addEventListener("click",ie(this,o)),this.addEventListener("keydown",ie(this,i))}get selectable(){return this._selectable}set selectable(f){const h=this._selectable;h!==f&&(this._selectable=f,ie(this,t)===this&&ie(this,t).setAttribute("tabindex",`${f?"0":"-1"}`),this.requestUpdate("selectable",h))}get selectableTarget(){return ie(this,t)}set selectableTarget(f){const h=ie(this,t);h.removeAttribute("tabindex"),h.removeEventListener("click",ie(this,o)),h.removeEventListener("keydown",ie(this,i)),ih(this,t,f),ie(this,t)===this&&ie(this,t).setAttribute("tabindex",this._selectable?"0":"-1"),f.addEventListener("click",ie(this,o)),f.addEventListener("keydown",ie(this,i))}}return t=new WeakMap,i=new WeakMap,o=new WeakMap,r=new WeakSet,s=function(){this.selectable&&(this.deselectable===!1?ho(this,r,n).call(this):this.selected?ho(this,r,u).call(this):ho(this,r,n).call(this))},n=function(){if(!this.selectable)return;const p=new Mt(Mt.SELECTED);this.dispatchEvent(p),!p.defaultPrevented&&(this.selected=!0)},u=function(){if(!this.deselectable)return;const p=new Mt(Mt.DESELECTED);this.dispatchEvent(p),!p.defaultPrevented&&(this.selected=!1)},Va([a({type:Boolean,reflect:!0})],c.prototype,"selectable",1),Va([a({type:Boolean,reflect:!0})],c.prototype,"selected",2),c};var oh=Object.defineProperty,sh=Object.getOwnPropertyDescriptor,nh=(e,t,i,o)=>{for(var r=sh(t,i),s=e.length-1,n;s>=0;s--)(n=e[s])&&(r=n(t,i,r)||r);return r&&oh(t,i,r),r};const ah=e=>{class t extends e{constructor(){super(...arguments),this._selectOnly=!1}get selectOnly(){return this._selectOnly}set selectOnly(o){const r=this._selectOnly;this._selectOnly=o,this.requestUpdate("selectOnly",r)}}return nh([a({type:Boolean,reflect:!0,attribute:"select-only"})],t.prototype,"selectOnly"),t};var lh=Object.defineProperty,uh=Object.getOwnPropertyDescriptor,Na=e=>{throw TypeError(e)},Dt=(e,t,i,o)=>{for(var r=o>1?void 0:o?uh(t,i):t,s=e.length-1,n;s>=0;s--)(n=e[s])&&(r=(o?n(t,i,r):n(r))||r);return o&&r&&lh(t,i,r),r},Fs=(e,t,i)=>t.has(e)||Na("Cannot "+i),U=(e,t,i)=>(Fs(e,t,"read from private field"),i?i.call(e):t.get(e)),Lt=(e,t,i)=>t.has(e)?Na("Cannot add the same private member more than once"):t instanceof WeakSet?t.add(e):t.set(e,i),Gs=(e,t,i,o)=>(Fs(e,t,"write to private field"),t.set(e,i),i),po=(e,t,i)=>(Fs(e,t,"access private method"),i);const ch=["customError","valueMissing","badInput","typeMismatch","patternMismatch","rangeOverflow","rangeUnderflow","stepMismatch","tooLong","tooShort"],hh=(e,t)=>{var i,o,r,s,n,u,c,p,f;class h extends e{constructor(...d){super(...d),Lt(this,u),this.name="",Lt(this,i,{}),this._pristine=!1,this.required=!1,this.requiredMessage="This field is required",this.error=!1,this.errorMessage="This field is invalid",Lt(this,o,t),Lt(this,r,null),Lt(this,s,[]),Lt(this,n,[]),Lt(this,f,()=>{this.pristine=!1}),this._internals=this.attachInternals(),this.pristine=!0,this.addValidator("valueMissing",()=>this.requiredMessage,()=>this.hasAttribute("required")&&this.hasValue()===!1),this.addValidator("customError",()=>this.errorMessage,()=>this.error),this.addEventListener("blur",()=>{this.pristine=!1,this.checkValidity()})}get value(){return U(this,o)}set value(d){const y=U(this,o);Gs(this,o,d),"ElementInternals"in window&&"setFormValue"in window.ElementInternals.prototype&&this._internals.setFormValue(U(this,o)??null),this.requestUpdate("value",y)}set pristine(d){this._pristine!==d&&(this._pristine=d,d?this.setAttribute("pristine",""):this.removeAttribute("pristine"),po(this,u,p).call(this))}get pristine(){return this._pristine}hasValue(){return this.value!==this.getDefaultValue()}focusFirstInvalidElement(){const d=U(this,n).find(y=>y.validity.valid===!1);d?"focusFirstInvalidElement"in d?d.focusFirstInvalidElement():d.focus():this.focus()}disconnectedCallback(){super.disconnectedCallback(),po(this,u,c).call(this)}addValidator(d,y,I){const $={flagKey:d,getMessageMethod:y,checkMethod:I,weight:ch.indexOf(d)};return U(this,s).push($),U(this,s).sort((V,te)=>V.weight>te.weight?1:te.weight>V.weight?-1:0),$}removeValidator(d){const y=U(this,s).indexOf(d);y!==-1&&U(this,s).splice(y,1)}addFormControlElement(d){U(this,n).push(d),d.addEventListener(qe.INVALID,()=>{this._runValidators()}),d.addEventListener(qe.VALID,()=>{this._runValidators()}),this._pristine===!1&&(d.checkValidity(),this._runValidators())}setCustomValidity(d){this._customValidityObject&&this.removeValidator(this._customValidityObject),d!=null&&d!==""&&(this._customValidityObject=this.addValidator("customError",()=>d,()=>!0)),this._runValidators()}_runValidators(){Gs(this,i,{});let d,y;U(this,s).some($=>$.checkMethod()?(U(this,i)[$.flagKey]=!0,d=$.getMessageMethod(),!0):!1),d||U(this,n).some($=>{let V;for(V in $.validity)if(V!=="valid"&&$.validity[V])return U(this,i)[V]=!0,d=$.validationMessage,y??(y=$),!0;return!1});const I=Object.values(U(this,i)).includes(!0);U(this,i).valid=!I,this._internals.setValidity(U(this,i),d,y??this.getFormElement()??void 0),po(this,u,p).call(this)}updated(d){super.updated(d),this._runValidators()}submit(){U(this,r)?.requestSubmit()}formAssociatedCallback(){po(this,u,c).call(this),Gs(this,r,this._internals.form),U(this,r)&&(U(this,r).hasAttribute("submit-invalid")&&(this.pristine=!1),U(this,r).addEventListener("submit",U(this,f)))}formResetCallback(){this.pristine=!0,this.value=this.getInitialValue()??this.getDefaultValue()}getDefaultValue(){return t}getInitialValue(){return this.getAttribute("value")}checkValidity(){this.pristine=!1,this._runValidators();for(const d in U(this,n))if(U(this,n)[d].checkValidity()===!1)return!1;return this._internals?.checkValidity()}get validity(){return U(this,i)}get validationMessage(){return this._internals?.validationMessage}}return i=new WeakMap,o=new WeakMap,r=new WeakMap,s=new WeakMap,n=new WeakMap,u=new WeakSet,c=function(){U(this,r)&&U(this,r).removeEventListener("submit",U(this,f))},p=function(){this._pristine!==!0&&(U(this,i).valid?this.dispatchEvent(new qe(qe.VALID)):this.dispatchEvent(new qe(qe.INVALID)))},f=new WeakMap,h.formAssociated=!0,Dt([a({type:String})],h.prototype,"name",2),Dt([a()],h.prototype,"value",1),Dt([a({type:Boolean,reflect:!0,attribute:"pristine"})],h.prototype,"pristine",1),Dt([a({type:Boolean,reflect:!0})],h.prototype,"required",2),Dt([a({type:String,attribute:"required-message"})],h.prototype,"requiredMessage",2),Dt([a({type:Boolean,reflect:!0})],h.prototype,"error",2),Dt([a({type:String,attribute:"error-message"})],h.prototype,"errorMessage",2),h};let dh=class{constructor(t,i){this._callback=t,this._timerId=null,this._remaining=null,this._onComplete=()=>{this._remaining=null,this._callback()},this.setDuration(i)}setDuration(t){this._duration=t,this._timerId!==null&&this.restart()}start(){this._timerId===null&&this.resume()}restart(){this._remaining=this._duration,this.resume()}pause(){this._timerId!==null&&(window.clearTimeout(this._timerId),this._timerId=null,this._remaining!==null&&(this._remaining-=Date.now()-this._startTime))}resume(){this._timerId!==null&&window.clearTimeout(this._timerId),this._remaining===null&&(this._remaining=this._duration),this._startTime=Date.now(),this._timerId=window.setTimeout(this._onComplete,this._remaining)}destroy(){this.pause()}};const ph=(e,t,i=`This element has to be present for ${e.nodeName} to work appropriate.`)=>{customElements.get(t)||console.warn(`%c ${e.nodeName} requires ${t} element to be registered!`,"font-weight: bold;",i,e)},vh=(e,t)=>{function i(r){const s=e.getBoundingClientRect(),n=e.ownerDocument.defaultView,u=s.left+n.scrollX,c=s.top+n.scrollY;let p;if("TouchEvent"in window&&r instanceof TouchEvent)p=r.touches[0];else if(r instanceof PointerEvent)p=r;else return;const f=p.pageX-u,h=p.pageY-c;t?.onMove&&t.onMove(f,h)}function o(){document.removeEventListener("pointermove",i),document.removeEventListener("pointerup",o),t?.onStop&&t.onStop()}document.addEventListener("pointermove",i,{passive:!0}),document.addEventListener("pointerup",o),t?.initialEvent&&i(t.initialEvent)},fh=(e,t,i)=>Math.min(Math.max(e,t),i),bh=(e,t,i)=>i+t-e,gh=e=>{const t=Math.round(e).toString(16);return t.length===1?`0${t}`:t},Ba=(e,t,i)=>{let o=e;for(;o!==null;){const r=o instanceof HTMLElement&&o.hasAttribute(t)&&o.getAttribute(t)===i,s=o.querySelector(`[${t}="${i}"]`)!==null;if(r)return o;if(s)return o.querySelector(`[${t}="${i}"]`);o=o.parentElement||o.parentNode||o.host||null}return null};function mh(e){return e?e.assignedNodes({flatten:!0}).length>0:!1}var _h=Object.defineProperty,Ha=e=>{throw TypeError(e)},yh=(e,t,i,o)=>{for(var r=void 0,s=e.length-1,n;s>=0;s--)(n=e[s])&&(r=n(t,i,r)||r);return r&&_h(t,i,r),r},ja=(e,t,i)=>t.has(e)||Ha("Cannot "+i),Ra=(e,t,i)=>(ja(e,t,"read from private field"),t.get(e)),Wa=(e,t,i)=>t.has(e)?Ha("Cannot add the same private member more than once"):t instanceof WeakSet?t.add(e):t.set(e,i),wh=(e,t,i,o)=>(ja(e,t,"write to private field"),t.set(e,i),i);const xh=e=>{var t,i;class o extends e{constructor(...s){super(...s),Wa(this,t,!1),this._togglePopover=()=>{if(!this.popoverContainerElement)return;const n=Ba(this,"id",this.popoverContainerElement);n&&(Ra(this,t)?n.hidePopover():n.showPopover())},Wa(this,i,n=>{requestAnimationFrame(()=>{wh(this,t,n.detail.newState==="open")})}),this.addEventListener("uui-popover-before-toggle",Ra(this,i))}}return t=new WeakMap,i=new WeakMap,yh([a({type:String,attribute:"popovertarget"})],o.prototype,"popoverContainerElement"),o};function $h(e,t){return i=>{if(e.indexOf("-")>0===!1){console.error(`${e} is not a valid custom element name. A custom element name should consist of at least two words separated by a hyphen.`);return}window.customElements.get(e)||window.customElements.define(e,i,t)}}const kh=["default","primary","secondary","outline","placeholder"],Ch=["default","positive","warning","danger","invalid"],Eh=["h1","h2","h3","h4","h5","h6"];function v(e,t){return i=>{if(e.indexOf("-")>0===!1){console.error(`${e} is not a valid custom element name. A custom element name should consist of at least two words separated by a hyphen.`);return}window.customElements.get(e)||window.customElements.define(e,i,t)}}var Ph=Object.getOwnPropertyDescriptor,Sh=(e,t,i,o)=>{for(var r=o>1?void 0:o?Ph(t,i):t,s=e.length-1,n;s>=0;s--)(n=e[s])&&(r=n(r)||r);return r};let di=class extends g{render(){return l`<slot></slot>`}};di.styles=[b`
      :host {
        display: inline-flex;
        align-items: stretch;
      }

      ::slotted(*) {
        --uui-button-border-radius: 0;
        flex-grow: 1;
      }

      ::slotted([look='outline']:not(:first-child)) {
        --uui-button-merge-border-left: 1;
      }
      ::slotted([look='placeholder']:not(:first-child)) {
        --uui-button-merge-border-left: 1;
      }

      ::slotted(*:first-child) {
        --uui-button-border-radius: var(--uui-border-radius,3px) 0 0
          var(--uui-border-radius,3px);
      }
      ::slotted(*:last-child) {
        --uui-button-border-radius: 0 var(--uui-border-radius,3px)
          var(--uui-border-radius,3px) 0;
      }

      ::slotted(*:hover) {
        z-index: 1;
      }
    `],di=Sh([v("uui-button-group")],di);var Oh=Object.getOwnPropertyDescriptor,Ih=(e,t,i,o)=>{for(var r=o>1?void 0:o?Oh(t,i):t,s=e.length-1,n;s>=0;s--)(n=e[s])&&(r=n(r)||r);return r};let vo=class extends di{};vo.styles=[...di.styles,b`
      ::slotted(*) {
        --uui-button-padding-left-factor: 0.5;
        --uui-button-padding-right-factor: 0.5;
      }

      ::slotted(*:first-child) {
        --uui-button-border-radius: 50px 0 0 50px;
        --uui-button-padding-left-factor: 2;
      }
      ::slotted(*:last-child) {
        --uui-button-border-radius: 0 50px 50px 0;
        --uui-button-padding-right-factor: 2;
      }
      ::slotted(*:first-child:last-child) {
        --uui-button-border-radius: 50px 50px 50px 50px;
        --uui-button-padding-left-factor: 2;
        --uui-button-padding-right-factor: 2;
      }

      ::slotted([look='outline']),
      ::slotted([look='placeholder']) {
        --uui-button-padding-left-factor: 1;
        --uui-button-padding-right-factor: 1;
      }

      ::slotted(uui-button[look='outline']:first-child),
      ::slotted(uui-button[look='placeholder']:first-child) {
        --uui-button-border-radius: 50px 0 0 50px;
        --uui-button-padding-left-factor: 1.5;
      }
      ::slotted(uui-button[look='outline']:last-child),
      ::slotted(uui-button[look='placeholder']:last-child) {
        --uui-button-border-radius: 0 50px 50px 0;
        --uui-button-padding-right-factor: 1.5;
      }
      ::slotted(uui-button[look='outline']:first-child:last-child),
      ::slotted(uui-button[look='placeholder']:first-child:last-child) {
        --uui-button-border-radius: 50px 50px 50px 50px;
        --uui-button-padding-left-factor: 1.5;
        --uui-button-padding-right-factor: 1.5;
      }
    `],vo=Ih([v("uui-action-bar")],vo);var Ah=Object.defineProperty,Uh=Object.getOwnPropertyDescriptor,fo=(e,t,i,o)=>{for(var r=o>1?void 0:o?Uh(t,i):t,s=e.length-1,n;s>=0;s--)(n=e[s])&&(r=(o?n(t,i,r):n(r))||r);return o&&r&&Ah(t,i,r),r};let Tt=class extends g{constructor(){super(...arguments),this._avatarArray=[],this.limit=0}firstUpdated(){this._setAvatarArray()}_onSlotChange(){this._setAvatarArray(),this._updateAvatarVisibility()}_setAvatarArray(){this._avatarArray=this._avatarNodes?this._avatarNodes:[]}updated(e){e.has("limit")&&this._updateAvatarVisibility()}_updateAvatarVisibility(){this._avatarArray.forEach((e,t)=>{e.style.display=t<this.limit||this.limit===0?"":"none"})}_isLimitExceeded(){return this.limit!==0&&this._avatarArray.length>this.limit}render(){return l`
      <slot @slotchange=${this._onSlotChange}></slot>
      ${this._isLimitExceeded()?l`<small id="overflow-indication">+${this._avatarArray.length-this.limit}</small>`:""}
    `}};Tt.styles=[b`
      :host {
        display: inline-flex;
        align-items: center;
        padding-left: 3px;
        padding-right: 3px;
      }

      ::slotted(uui-avatar) {
        margin-left: -0.2em;
        margin-right: -0.2em;
        border: 0.1em solid var(--uui-avatar-border-color);
      }

      #overflow-indication {
        margin-left: 6px;
      }
    `],fo([bt({selector:"uui-avatar, [uui-avatar]",flatten:!0})],Tt.prototype,"_avatarNodes",2),fo([_()],Tt.prototype,"_avatarArray",2),fo([a({type:Number,attribute:!0})],Tt.prototype,"limit",2),Tt=fo([v("uui-avatar-group")],Tt);var zh=Object.defineProperty,Mh=Object.getOwnPropertyDescriptor,pi=(e,t,i,o)=>{for(var r=o>1?void 0:o?Mh(t,i):t,s=e.length-1,n;s>=0;s--)(n=e[s])&&(r=(o?n(t,i,r):n(r))||r);return o&&r&&zh(t,i,r),r};let Ke=class extends g{constructor(){super(...arguments),this.overflow=!0,this.imgSrc="",this.imgSrcset="",this._name="",this.initials=""}get name(){return this._name}set name(e){const t=this._name;this._name=e,this.initials=this.createInitials(this._name),this.requestUpdate("title",t)}connectedCallback(){super.connectedCallback(),this.name||console.warn(this.tagName+" needs a `name`",this)}createInitials(e){let t="";if(!e)return t;const i=e.match(/(\w+)/g);return i?.length?(t=i[0].substring(0,1),i.length>1&&(t+=i[i.length-1].substring(0,1)),t.toUpperCase()):t}renderImage(){return l` <img
      src="${this.imgSrc}"
      srcset="${this.imgSrcset}"
      alt="${this.initials}"
      title="${this.name}" />`}render(){return l`
      ${this.imgSrc?this.renderImage():""}
      ${this.imgSrc?"":this.initials}
      <slot></slot>
    `}};Ke.styles=[b`
      :host {
        display: inline-flex;
        align-items: center;
        justify-content: center;
        flex-shrink: 0;
        position: relative;
        overflow: hidden;
        border-radius: 50%;
        font-weight: 700;
        -webkit-font-smoothing: subpixel-antialiased;
        width: calc(2em + 4px);
        height: calc(2em + 4px);
        user-select: none;
        /* box-sizing: border-box; */
        aspect-ratio: 1;
        background-color: var(--uui-palette-spanish-pink,#f5c1bc);
        color: var(--uui-palette-space-cadet,#1b264f);
      }

      :host([overflow]) {
        overflow: unset;
      }

      img {
        object-fit: cover;
        height: 100%;
        width: 100%;
        overflow: hidden;
        border-radius: 50%;
      }
    `],pi([a({type:Boolean,attribute:!0,reflect:!0})],Ke.prototype,"overflow",2),pi([a({type:String,attribute:"img-src"})],Ke.prototype,"imgSrc",2),pi([a({type:String,attribute:"img-srcset"})],Ke.prototype,"imgSrcset",2),pi([a({type:String,reflect:!0})],Ke.prototype,"name",1),pi([_()],Ke.prototype,"initials",2),Ke=pi([v("uui-avatar")],Ke);var Dh=Object.defineProperty,Lh=Object.getOwnPropertyDescriptor,bo=(e,t,i,o)=>{for(var r=o>1?void 0:o?Lh(t,i):t,s=e.length-1,n;s>=0;s--)(n=e[s])&&(r=(o?n(t,i,r):n(r))||r);return o&&r&&Dh(t,i,r),r};let Vt=class extends g{constructor(){super(...arguments),this.color="default",this.look="primary",this.attention=!1}render(){return l` <slot></slot> `}};Vt.styles=[b`
      :host {
        position: var(--uui-badge-position, absolute);
        display: flex;
        justify-content: center;
        align-items: center;

        padding: var(--uui-size-1,3px) var(--uui-size-2,6px);
        inset: var(--uui-badge-inset, -8px -8px auto auto);

        text-align: center;
        font-size: var(--uui-badge-font-size, var(--uui-type-small-size,12px));
        font-weight: 900;
        line-height: 1;

        margin-right: 0;

        min-width: var(--uui-size-8,24px);
        min-height: var(--uui-size-8,24px);
        box-sizing: border-box;

        border-radius: var(--uui-size-4,12px);
        border: 1px solid transparent;
      }

      :host {
        --color: var(--uui-color-default,#1b264f);
        --color-standalone: var(--uui-color-default-standalone,rgb(28, 35, 59));
        --color-contrast: var(--uui-color-default-contrast,#fff);
      }
      :host([color='positive']) {
        --color: var(--uui-color-positive,#0b8152);
        --color-standalone: var(--uui-color-positive-standalone,rgb(10, 115, 73));
        --color-contrast: var(--uui-color-positive-contrast,#fff);
      }
      :host([color='warning']) {
        --color: var(--uui-color-warning,#fbd142);
        --color-standalone: var(--uui-color-warning-standalone,#a17700);
        --color-contrast: var(--uui-color-warning-contrast,#000);
      }
      :host([color='danger']) {
        --color: var(--uui-color-danger,#d42054);
        --color-standalone: var(--uui-color-danger-standalone,rgb(191, 33, 78));
        --color-contrast: var(--uui-color-danger-contrast,white);
      }
      :host([color='invalid']) {
        --color: var(--uui-color-invalid,#d42054);
        --color-standalone: var(--uui-color-invalid-standalone,rgb(191, 33, 78));
        --color-contrast: var(--uui-color-invalid-contrast,white);
      }

      :host {
        background-color: var(--uui-color-surface,#fff);
        color: var(--color-standalone);
        border-color: transparent;
      }
      :host([look='primary']) {
        background-color: var(--color);
        color: var(--color-contrast);
        border-color: transparent;
      }
      :host([look='secondary']) {
        background-color: var(--uui-color-surface-alt,#f3f3f5);
        color: var(--color-standalone);
        border-color: transparent;
      }
      :host([look='outline']) {
        background-color: var(--uui-color-surface,#fff);
        color: var(--color-standalone);
        border-color: var(--color-standalone);
      }
      :host([look='placeholder']) {
        border-style: dashed;
        background-color: var(--uui-color-surface,#fff);
        color: var(--color-standalone);
        border-color: var(--uui-color-border-standalone,#c2c2c2);
      }

      /** TODO: we didn't want to target elements by name, but what else can we do? */
      ::slotted(uui-icon) {
        margin-left: -0.2em;
        margin-right: -0.2em;
      }

      @keyframes --uui-badge-bounce {
        0% {
          transform: translateY(0);
        }
        20% {
          transform: translateY(-6px);
        }
        40% {
          transform: translateY(0);
        }
        55% {
          transform: translateY(-3px);
        }
        70% {
          transform: translateY(0);
        }
        100% {
          transform: translateY(0);
        }
      }
      :host([attention]) {
        animation-duration: 1.4s;
        animation-iteration-count: infinite;
        animation-name: --uui-badge-bounce;
        animation-timing-function: ease;
      }
      @media (prefers-reduced-motion) {
        :host([attention]) {
          animation: none;
        }
      }
    `],bo([a({reflect:!0})],Vt.prototype,"color",2),bo([a({reflect:!0})],Vt.prototype,"look",2),bo([a({type:Boolean,reflect:!0})],Vt.prototype,"attention",2),Vt=bo([v("uui-badge")],Vt);var Th=Object.defineProperty,Vh=(e,t,i,o)=>{for(var r=void 0,s=e.length-1,n;s>=0;s--)(n=e[s])&&(r=n(t,i,r)||r);return r&&Th(t,i,r),r};const br=e=>{class t extends e{constructor(){super(...arguments),this.active=!1}}return Vh([a({type:Boolean,reflect:!0})],t.prototype,"active"),t};var Nh=Object.defineProperty,Fa=(e,t,i,o)=>{for(var r=void 0,s=e.length-1,n;s>=0;s--)(n=e[s])&&(r=n(t,i,r)||r);return r&&Nh(t,i,r),r};const Me=(e,t)=>{class i extends t{constructor(){super(...arguments),this._labelSlotHasContent=!1}connectedCallback(){super.connectedCallback(),this.label||console.warn(this.tagName+" needs a `label`",this)}labelSlotChanged(r){this._labelSlotHasContent=r.target.assignedNodes({flatten:!0}).length>0}renderLabel(){return l`
        ${this._labelSlotHasContent===!1?l`<span class="label">${this.label}</span>`:""}
        <slot
          class="label"
          style=${this._labelSlotHasContent?"":"visibility: hidden"}
          name=${e||""}
          @slotchange=${this.labelSlotChanged}></slot>
      `}}return Fa([a({type:String})],i.prototype,"label"),Fa([_()],i.prototype,"_labelSlotHasContent"),i};let Bh=class extends Event{constructor(t,i={}){super(t,{...i}),this.detail=i.detail||{}}},vi=class extends Bh{constructor(t,i={}){super(t,{bubbles:!0,cancelable:!0,...i})}};vi.SELECTED="selected",vi.DESELECTED="deselected";var Hh=Object.defineProperty,jh=Object.getOwnPropertyDescriptor,Ga=e=>{throw TypeError(e)},qa=(e,t,i,o)=>{for(var r=o>1?void 0:o?jh(t,i):t,s=e.length-1,n;s>=0;s--)(n=e[s])&&(r=(o?n(t,i,r):n(r))||r);return o&&r&&Hh(t,i,r),r},qs=(e,t,i)=>t.has(e)||Ga("Cannot "+i),re=(e,t,i)=>(qs(e,t,"read from private field"),i?i.call(e):t.get(e)),go=(e,t,i)=>t.has(e)?Ga("Cannot add the same private member more than once"):t instanceof WeakSet?t.add(e):t.set(e,i),Rh=(e,t,i,o)=>(qs(e,t,"write to private field"),t.set(e,i),i),mo=(e,t,i)=>(qs(e,t,"access private method"),i);const fi=e=>{var t,i,o,r,s,n,u;class c extends e{constructor(...f){super(...f),go(this,r),this._selectable=!1,this.deselectable=!0,this.selected=!1,go(this,t,this),go(this,i,h=>{h.code!=="Space"&&h.code!=="Enter"||h.composedPath().indexOf(re(this,t))===0&&re(this,o).call(this,h)}),go(this,o,h=>{if((this._selectable||this.deselectable&&this.selected)===!1)return;const d=h.composedPath();re(this,t)===this&&d.some(I=>{const $=I.tagName;return $==="A"||$==="BUTTON"||$==="INPUT"||$==="TEXTAREA"||$==="SELECT"})||d.indexOf(re(this,t))!==-1&&(h.type==="keydown"&&h.preventDefault(),mo(this,r,s).call(this))}),this.addEventListener("click",re(this,o)),this.addEventListener("keydown",re(this,i))}get selectable(){return this._selectable}set selectable(f){const h=this._selectable;h!==f&&(this._selectable=f,re(this,t)===this&&re(this,t).setAttribute("tabindex",`${f?"0":"-1"}`),this.requestUpdate("selectable",h))}get selectableTarget(){return re(this,t)}set selectableTarget(f){const h=re(this,t);h.removeAttribute("tabindex"),h.removeEventListener("click",re(this,o)),h.removeEventListener("keydown",re(this,i)),Rh(this,t,f),re(this,t)===this&&re(this,t).setAttribute("tabindex",this._selectable?"0":"-1"),f.addEventListener("click",re(this,o)),f.addEventListener("keydown",re(this,i))}}return t=new WeakMap,i=new WeakMap,o=new WeakMap,r=new WeakSet,s=function(){this.selectable&&(this.deselectable===!1?mo(this,r,n).call(this):this.selected?mo(this,r,u).call(this):mo(this,r,n).call(this))},n=function(){if(!this.selectable)return;const p=new vi(vi.SELECTED);this.dispatchEvent(p),!p.defaultPrevented&&(this.selected=!0)},u=function(){if(!this.deselectable)return;const p=new vi(vi.DESELECTED);this.dispatchEvent(p),!p.defaultPrevented&&(this.selected=!1)},qa([a({type:Boolean,reflect:!0})],c.prototype,"selectable",1),qa([a({type:Boolean,reflect:!0})],c.prototype,"selected",2),c};var Wh=Object.defineProperty,Fh=Object.getOwnPropertyDescriptor,Gh=(e,t,i,o)=>{for(var r=Fh(t,i),s=e.length-1,n;s>=0;s--)(n=e[s])&&(r=n(t,i,r)||r);return r&&Wh(t,i,r),r};const _o=e=>{class t extends e{constructor(){super(...arguments),this._selectOnly=!1}get selectOnly(){return this._selectOnly}set selectOnly(o){const r=this._selectOnly;this._selectOnly=o,this.requestUpdate("selectOnly",r)}}return Gh([a({type:Boolean,reflect:!0,attribute:"select-only"})],t.prototype,"selectOnly"),t};let Ka=class extends Event{constructor(t,i={}){super(t,{...i}),this.detail=i.detail||{}}},gt=class extends Ka{constructor(t,i={}){super(t,{bubbles:!0,...i})}};gt.VALID="valid",gt.INVALID="invalid";let Ya=class extends Ka{constructor(t,i={}){super(t,{bubbles:!0,cancelable:!0,...i})}};Ya.SELECTED="selected",Ya.DESELECTED="deselected";var qh=Object.defineProperty,Kh=Object.getOwnPropertyDescriptor,Xa=e=>{throw TypeError(e)},Nt=(e,t,i,o)=>{for(var r=o>1?void 0:o?Kh(t,i):t,s=e.length-1,n;s>=0;s--)(n=e[s])&&(r=(o?n(t,i,r):n(r))||r);return o&&r&&qh(t,i,r),r},Ks=(e,t,i)=>t.has(e)||Xa("Cannot "+i),z=(e,t,i)=>(Ks(e,t,"read from private field"),i?i.call(e):t.get(e)),Bt=(e,t,i)=>t.has(e)?Xa("Cannot add the same private member more than once"):t instanceof WeakSet?t.add(e):t.set(e,i),Ys=(e,t,i,o)=>(Ks(e,t,"write to private field"),t.set(e,i),i),yo=(e,t,i)=>(Ks(e,t,"access private method"),i);const Yh=["customError","valueMissing","badInput","typeMismatch","patternMismatch","rangeOverflow","rangeUnderflow","stepMismatch","tooLong","tooShort"],De=(e,t)=>{var i,o,r,s,n,u,c,p,f;class h extends e{constructor(...d){super(...d),Bt(this,u),this.name="",Bt(this,i,{}),this._pristine=!1,this.required=!1,this.requiredMessage="This field is required",this.error=!1,this.errorMessage="This field is invalid",Bt(this,o,t),Bt(this,r,null),Bt(this,s,[]),Bt(this,n,[]),Bt(this,f,()=>{this.pristine=!1}),this._internals=this.attachInternals(),this.pristine=!0,this.addValidator("valueMissing",()=>this.requiredMessage,()=>this.hasAttribute("required")&&this.hasValue()===!1),this.addValidator("customError",()=>this.errorMessage,()=>this.error),this.addEventListener("blur",()=>{this.pristine=!1,this.checkValidity()})}get value(){return z(this,o)}set value(d){const y=z(this,o);Ys(this,o,d),"ElementInternals"in window&&"setFormValue"in window.ElementInternals.prototype&&this._internals.setFormValue(z(this,o)??null),this.requestUpdate("value",y)}set pristine(d){this._pristine!==d&&(this._pristine=d,d?this.setAttribute("pristine",""):this.removeAttribute("pristine"),yo(this,u,p).call(this))}get pristine(){return this._pristine}hasValue(){return this.value!==this.getDefaultValue()}focusFirstInvalidElement(){const d=z(this,n).find(y=>y.validity.valid===!1);d?"focusFirstInvalidElement"in d?d.focusFirstInvalidElement():d.focus():this.focus()}disconnectedCallback(){super.disconnectedCallback(),yo(this,u,c).call(this)}addValidator(d,y,I){const $={flagKey:d,getMessageMethod:y,checkMethod:I,weight:Yh.indexOf(d)};return z(this,s).push($),z(this,s).sort((V,te)=>V.weight>te.weight?1:te.weight>V.weight?-1:0),$}removeValidator(d){const y=z(this,s).indexOf(d);y!==-1&&z(this,s).splice(y,1)}addFormControlElement(d){z(this,n).push(d),d.addEventListener(gt.INVALID,()=>{this._runValidators()}),d.addEventListener(gt.VALID,()=>{this._runValidators()}),this._pristine===!1&&(d.checkValidity(),this._runValidators())}setCustomValidity(d){this._customValidityObject&&this.removeValidator(this._customValidityObject),d!=null&&d!==""&&(this._customValidityObject=this.addValidator("customError",()=>d,()=>!0)),this._runValidators()}_runValidators(){Ys(this,i,{});let d,y;z(this,s).some($=>$.checkMethod()?(z(this,i)[$.flagKey]=!0,d=$.getMessageMethod(),!0):!1),d||z(this,n).some($=>{let V;for(V in $.validity)if(V!=="valid"&&$.validity[V])return z(this,i)[V]=!0,d=$.validationMessage,y??(y=$),!0;return!1});const I=Object.values(z(this,i)).includes(!0);z(this,i).valid=!I,this._internals.setValidity(z(this,i),d,y??this.getFormElement()??void 0),yo(this,u,p).call(this)}updated(d){super.updated(d),this._runValidators()}submit(){z(this,r)?.requestSubmit()}formAssociatedCallback(){yo(this,u,c).call(this),Ys(this,r,this._internals.form),z(this,r)&&(z(this,r).hasAttribute("submit-invalid")&&(this.pristine=!1),z(this,r).addEventListener("submit",z(this,f)))}formResetCallback(){this.pristine=!0,this.value=this.getInitialValue()??this.getDefaultValue()}getDefaultValue(){return t}getInitialValue(){return this.getAttribute("value")}checkValidity(){this.pristine=!1,this._runValidators();for(const d in z(this,n))if(z(this,n)[d].checkValidity()===!1)return!1;return this._internals?.checkValidity()}get validity(){return z(this,i)}get validationMessage(){return this._internals?.validationMessage}}return i=new WeakMap,o=new WeakMap,r=new WeakMap,s=new WeakMap,n=new WeakMap,u=new WeakSet,c=function(){z(this,r)&&z(this,r).removeEventListener("submit",z(this,f))},p=function(){this._pristine!==!0&&(z(this,i).valid?this.dispatchEvent(new gt(gt.VALID)):this.dispatchEvent(new gt(gt.INVALID)))},f=new WeakMap,h.formAssociated=!0,Nt([a({type:String})],h.prototype,"name",2),Nt([a()],h.prototype,"value",1),Nt([a({type:Boolean,reflect:!0,attribute:"pristine"})],h.prototype,"pristine",1),Nt([a({type:Boolean,reflect:!0})],h.prototype,"required",2),Nt([a({type:String,attribute:"required-message"})],h.prototype,"requiredMessage",2),Nt([a({type:Boolean,reflect:!0})],h.prototype,"error",2),Nt([a({type:String,attribute:"error-message"})],h.prototype,"errorMessage",2),h},Xh=(e,t,i)=>{let o=e;for(;o!==null;){const r=o instanceof HTMLElement&&o.hasAttribute(t)&&o.getAttribute(t)===i,s=o.querySelector(`[${t}="${i}"]`)!==null;if(r)return o;if(s)return o.querySelector(`[${t}="${i}"]`);o=o.parentElement||o.parentNode||o.host||null}return null};var Zh=Object.defineProperty,Za=e=>{throw TypeError(e)},Qh=(e,t,i,o)=>{for(var r=void 0,s=e.length-1,n;s>=0;s--)(n=e[s])&&(r=n(t,i,r)||r);return r&&Zh(t,i,r),r},Qa=(e,t,i)=>t.has(e)||Za("Cannot "+i),Ja=(e,t,i)=>(Qa(e,t,"read from private field"),t.get(e)),el=(e,t,i)=>t.has(e)?Za("Cannot add the same private member more than once"):t instanceof WeakSet?t.add(e):t.set(e,i),Jh=(e,t,i,o)=>(Qa(e,t,"write to private field"),t.set(e,i),i);const ed=e=>{var t,i;class o extends e{constructor(...s){super(...s),el(this,t,!1),this._togglePopover=()=>{if(!this.popoverContainerElement)return;const n=Xh(this,"id",this.popoverContainerElement);n&&(Ja(this,t)?n.hidePopover():n.showPopover())},el(this,i,n=>{requestAnimationFrame(()=>{Jh(this,t,n.detail.newState==="open")})}),this.addEventListener("uui-popover-before-toggle",Ja(this,i))}}return t=new WeakMap,i=new WeakMap,Qh([a({type:String,attribute:"popovertarget"})],o.prototype,"popoverContainerElement"),o};class A extends Event{constructor(t,i={}){super(t,{...i}),this.detail=i.detail||{}}}class bi extends A{constructor(t,i={}){super(t,{bubbles:!0,...i})}}bi.VALID="valid",bi.INVALID="invalid";class mt extends A{constructor(t,i={}){super(t,{bubbles:!0,cancelable:!0,...i})}}mt.SELECTED="selected",mt.DESELECTED="deselected";class wo extends A{constructor(t,i={}){super(t,{bubbles:!0,...i})}}wo.CHANGE="change";var td=Object.defineProperty,id=Object.getOwnPropertyDescriptor,tl=e=>{throw TypeError(e)},gi=(e,t,i,o)=>{for(var r=o>1?void 0:o?id(t,i):t,s=e.length-1,n;s>=0;s--)(n=e[s])&&(r=(o?n(t,i,r):n(r))||r);return o&&r&&td(t,i,r),r},rd=(e,t,i)=>t.has(e)||tl("Cannot "+i),od=(e,t,i)=>t.has(e)?tl("Cannot add the same private member more than once"):t instanceof WeakSet?t.add(e):t.set(e,i),sd=(e,t,i)=>(rd(e,t,"access private method"),i),Xs,il;class we extends De(Me("",g),""){constructor(t="checkbox"){super(),od(this,Xs),this._value="",this.labelPosition="right",this._checked=!1,this.indeterminate=!1,this.disabled=!1,this.readonly=!1,this._value===""&&(this._value="on"),this.inputRole=t,this.addEventListener("keydown",sd(this,Xs,il))}get value(){return this._value}set value(t){const i=super.value;this._value=t,"ElementInternals"in window&&"setFormValue"in window.ElementInternals.prototype&&this._internals.setFormValue(this._checked&&this.name!==""?this._value:null),this.requestUpdate("value",i)}get checked(){return this._checked}set checked(t){const i=this._checked;this._checked=t,this._internals.setFormValue(this._checked&&this.name!==""?this._value?this._value:"on":null),this.requestUpdate("checked",i)}getFormElement(){return this._input}hasValue(){return this.checked}formResetCallback(){super.formResetCallback(),this.checked=this.hasAttribute("checked")}firstUpdated(t){super.firstUpdated(t);const i=this.shadowRoot?.querySelector("label");let o=!1;this._input.addEventListener("blur",()=>{o===!1&&this.style.setProperty("--uui-show-focus-outline","1"),o=!1}),i.addEventListener("mousedown",()=>{this.style.setProperty("--uui-show-focus-outline","0"),o=!0}),i.addEventListener("mouseup",()=>{o=!1})}async focus(){await this.updateComplete,this._input.focus()}async click(){await this.updateComplete,this._input.click()}_onInputChange(t){t.stopPropagation(),this.pristine=!1,this.checked=this._input.checked,this.indeterminate=this._input.indeterminate,this.dispatchEvent(new wo(wo.CHANGE))}render(){return l`
      <label>
        <input
          id="input"
          type="checkbox"
          @change="${this._onInputChange}"
          .disabled=${this.disabled||this.readonly}
          .checked=${this.checked}
          .indeterminate=${this.indeterminate}
          aria-checked="${this.checked?"true":"false"}"
          aria-label=${this.label}
          role="${this.inputRole}" />
        ${this.renderCheckbox()} ${this.renderLabel()}
      </label>
    `}}Xs=new WeakSet,il=function(e){e.key=="Enter"&&this.submit()},we.styles=[b`
      :host {
        display: inline-block;
      }

      label {
        position: relative;
        cursor: pointer;
        user-select: none;
        display: flex;
        flex-wrap: nowrap;
        align-items: center;
        justify-items: center;
        gap: var(--uui-size-3,9px);
      }

      :host([readonly]) label {
        cursor: default;
      }

      input {
        position: absolute;
        height: 0px;
        width: 0px;
        opacity: 0;
      }

      :host([label-position='left']) label {
        flex-direction: row-reverse;
      }

      :host([label-position='top']) label {
        gap: var(--uui-size-half-base-unit);
        flex-direction: column-reverse;
      }

      :host([label-position='bottom']) label {
        gap: var(--uui-size-half-base-unit);
        flex-direction: column;
      }

      :host([disabled]) label {
        cursor: not-allowed;
        opacity: 0.5;
      }

      .label {
        display: block;
      }
    `],gi([a({type:String,attribute:"label-position",reflect:!0})],we.prototype,"labelPosition",2),gi([a({type:Boolean})],we.prototype,"checked",1),gi([a({type:Boolean,reflect:!0})],we.prototype,"indeterminate",2),gi([a({type:Boolean,reflect:!0})],we.prototype,"disabled",2),gi([a({type:Boolean,reflect:!0})],we.prototype,"readonly",2),gi([O("#input")],we.prototype,"_input",2);/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const rl=Symbol.for(""),nd=e=>{if(e?.r===rl)return e?._$litStatic$},ol=e=>({_$litStatic$:e,r:rl}),sl=new Map,ad=e=>(t,...i)=>{const o=i.length;let r,s;const n=[],u=[];let c,p=0,f=!1;for(;p<o;){for(c=t[p];p<o&&(s=i[p],(r=nd(s))!==void 0);)c+=r+t[++p],f=!0;p!==o&&u.push(s),n.push(c),p++}if(p===o&&n.push(t[o]),f){const h=n.join("$$lit$$");(t=sl.get(h))===void 0&&(n.raw=n,sl.set(h,t=n)),i=u}return e(t,...i)},nl=ad(l);var ld=Object.defineProperty,ud=Object.getOwnPropertyDescriptor,Ht=(e,t,i,o)=>{for(var r=o>1?void 0:o?ud(t,i):t,s=e.length-1,n;s>=0;s--)(n=e[s])&&(r=(o?n(t,i,r):n(r))||r);return o&&r&&ld(t,i,r),r};function Zs(e){return e?e.assignedNodes({flatten:!0}).length>0:!1}let Le=class extends g{constructor(){super(...arguments),this.headline=null,this._headlineVariantTag="h5",this._headlineSlotHasContent=!1,this._headlineSlotChanged=e=>{this._headlineSlotHasContent=Zs(e.target)},this._headerSlotHasContent=!1,this._headerSlotChanged=e=>{this._headerSlotHasContent=Zs(e.target)},this._headerActionsSlotHasContent=!1,this._headerActionsSlotChanged=e=>{this._headerActionsSlotHasContent=Zs(e.target)}}set headlineVariant(e){this._headlineVariantTag=e}get headlineVariant(){return this._headlineVariantTag}renderHeader(){return nl`<div
      id="header"
      class="uui-text"
      style=${this._headerSlotHasContent||this._headlineSlotHasContent||this._headerActionsSlotHasContent||this.headline!==null?"":"display: none"}>
      <${ol(this._headlineVariantTag)}
        id="headline"
        class="uui-h5"
        style=${this._headlineSlotHasContent||this.headline!==null?"":"display: none"}>
        ${this.headline}
        <slot name="headline" @slotchange=${this._headlineSlotChanged}></slot>
      </${ol(this._headlineVariantTag)}>
      <slot name="header" @slotchange=${this._headerSlotChanged}></slot>
      <slot name="header-actions" @slotchange=${this._headerActionsSlotChanged}></slot>
    </div>`}render(){return nl`
      ${this.renderHeader()}
      <slot></slot>
    `}};Le.styles=[hi,b`
      :host {
        display: block;
        border: var(--uui-box-border-width, 0) solid
          var(--uui-box-border-color, var(--uui-color-divider-standalone,#e9e9eb));
        box-shadow: var(--uui-box-box-shadow, var(--uui-shadow-depth-1,0 1px 3px rgba(0,0,0,0.12) , 0 1px 2px rgba(0,0,0,0.24)));
        border-radius: var(--uui-box-border-radius, var(--uui-border-radius,3px));
        background-color: var(--uui-color-surface,#fff);
      }

      #header {
        display: flex;
        align-items: center;
        column-gap: var(--uui-size-space-5,18px);
        border-bottom: 1px solid var(--uui-color-divider-standalone,#e9e9eb);
        padding: var(
          --uui-box-header-padding,
          var(--uui-size-space-4,12px) var(--uui-size-space-5,18px)
        );
      }

      slot:not([name]) {
        display: block;
        padding: var(--uui-box-default-padding, var(--uui-size-space-5,18px));
      }

      slot[name='header-actions'] {
        display: block;
        margin-left: auto;
      }
    `],Ht([a({type:String})],Le.prototype,"headline",2),Ht([a({attribute:"headline-variant"})],Le.prototype,"headlineVariant",1),Ht([_()],Le.prototype,"_headlineVariantTag",2),Ht([_()],Le.prototype,"_headlineSlotHasContent",2),Ht([_()],Le.prototype,"_headerSlotHasContent",2),Ht([_()],Le.prototype,"_headerActionsSlotHasContent",2),Le=Ht([v("uui-box")],Le);var cd=Object.defineProperty,hd=Object.getOwnPropertyDescriptor,Qs=(e,t,i,o)=>{for(var r=o>1?void 0:o?hd(t,i):t,s=e.length-1,n;s>=0;s--)(n=e[s])&&(r=(o?n(t,i,r):n(r))||r);return o&&r&&cd(t,i,r),r};let jt=class extends g{constructor(){super(...arguments),this.lastItem=!1}connectedCallback(){super.connectedCallback(),this.setAttribute("role","listitem")}renderLinkAndSeparator(){const e=this.href?l`<a id="link" href=${this.href}><slot></slot></a>`:l`<span id="link"><slot></slot></span>`;return l`${e}<span part="separator"></span>`}renderCurrent(){return l`<span id="last-item"><slot></slot></span>`}render(){return l`${this.lastItem?this.renderCurrent():this.renderLinkAndSeparator()}`}};jt.styles=[b`
      :host {
        font-size: var(--uui-type-small-size,12px);
        color: currentColor;
      }

      a,
      a:visited {
        color: currentColor;
      }
      a:hover {
        color: var(--uui-color-interactive-emphasis,#3544b1);
      }
      a:focus {
        color: var(--uui-color-focus,#3879ff);
      }

      [part='separator']::after {
        content: '/';
        speak: never;
        position: relative;
        top: 1px;
        margin: -3px 1px 0;
        color: var(--uui-color-border,#d8d7d9);
      }

      #link,
      #last-item {
        padding: 0 4px;
        max-width: 150px;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
      }
    `],Qs([a()],jt.prototype,"href",2),Qs([a({type:Boolean,attribute:"last-item"})],jt.prototype,"lastItem",2),jt=Qs([v("uui-breadcrumb-item")],jt);var dd=Object.defineProperty,pd=Object.getOwnPropertyDescriptor,al=(e,t,i,o)=>{for(var r=o>1?void 0:o?pd(t,i):t,s=e.length-1,n;s>=0;s--)(n=e[s])&&(r=(o?n(t,i,r):n(r))||r);return o&&r&&dd(t,i,r),r};let gr=class extends g{elementIsBreadcrumbItem(e){return e instanceof jt}connectedCallback(){super.connectedCallback(),this.setAttribute("aria-label","breadcrumb"),this.setAttribute("role","navigation")}handleSlotChange(){if(this.slotNodes.length>0){const e=this.slotNodes[this.slotNodes.length-1];e.setAttribute("aria-current","page"),this.elementIsBreadcrumbItem(e)&&(e.lastItem=!0)}}render(){return l`<ol id="breadcrumbs-list">
      <slot @slotchange=${this.handleSlotChange}></slot>
    </ol>`}};gr.styles=[b`
      :host {
        display: flex;
      }

      #breadcrumbs-list {
        display: flex;
        list-style-type: decimal;
        margin-block-start: 0em;
        margin-block-end: 0em;
        margin-inline-start: 0px;
        margin-inline-end: 0px;
        padding-inline-start: 0px;
      }
    `],al([bt({flatten:!0,selector:"uui-breadcrumb-item, [uui-breadcrumb-item], [role=listitem]"})],gr.prototype,"slotNodes",2),gr=al([v("uui-breadcrumbs")],gr);const vd=b`
  @keyframes uui-blink {
    0%,
    100% {
      opacity: 0.5;
    }
    50% {
      opacity: 1;
    }
  }
`,fd=vt("uui-blink 0.9s infinite both"),bd=b`
  @keyframes pulse {
    0% {
      -webkit-transform: translate(-50%, -50%) scale(0.2);
      transform: translate(-50%, -50%) scale(0.2);
      opacity: 0.9;
    }
    80% {
      -webkit-transform: translate(-50%, -50%) scale(1.2);
      transform: translate(-50%, -50%) scale(1.2);
      opacity: 0;
    }
    100% {
      -webkit-transform: translate(-50%, -50%) scale(2.2);
      transform: translate(-50%, -50%) scale(2.2);
      opacity: 0;
    }
  }
`;vt("pulse 0.8s ease-in-out infinite both");const xo=b`
  @keyframes uui-horizontal-shake {
    10%,
    90% {
      transform: translateX(-1px);
    }

    20%,
    80% {
      transform: translateX(1px);
    }

    30%,
    50%,
    70% {
      transform: translateX(-2px);
    }

    40%,
    60% {
      transform: translateX(2px);
    }
  }
`,$o=vt("uui-horizontal-shake 600ms ease backwards");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Pe={ATTRIBUTE:1,CHILD:2,PROPERTY:3,BOOLEAN_ATTRIBUTE:4},mi=e=>(...t)=>({_$litDirective$:e,values:t});let _i=class{constructor(t){}get _$AU(){return this._$AM._$AU}_$AT(t,i,o){this._$Ct=t,this._$AM=i,this._$Ci=o}_$AS(t,i){return this.update(t,i)}update(t,i){return this.render(...i)}};/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const ll="important",gd=" !"+ll,Ye=mi(class extends _i{constructor(e){if(super(e),e.type!==Pe.ATTRIBUTE||e.name!=="style"||e.strings?.length>2)throw Error("The `styleMap` directive must be used in the `style` attribute and must be the only part in the attribute.")}render(e){return Object.keys(e).reduce((t,i)=>{const o=e[i];return o==null?t:t+`${i=i.includes("-")?i:i.replace(/(?:^(webkit|moz|ms|o)|)(?=[A-Z])/g,"-$&").toLowerCase()}:${o};`},"")}update(e,[t]){const{style:i}=e.element;if(this.ft===void 0)return this.ft=new Set(Object.keys(t)),this.render(t);for(const o of this.ft)t[o]==null&&(this.ft.delete(o),o.includes("-")?i.removeProperty(o):i[o]=null);for(const o in t){const r=t[o];if(r!=null){this.ft.add(o);const s=typeof r=="string"&&r.endsWith(gd);o.includes("-")||s?i.setProperty(o,s?r.slice(0,-11):r,s?ll:""):i[o]=r}}return ue}});/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const w=e=>e??E;class ko extends A{constructor(t,i={}){super(t,{bubbles:!0,composed:!0,...i})}}ko.CLICK="click";var md=Object.defineProperty,_d=Object.getOwnPropertyDescriptor,ul=e=>{throw TypeError(e)},Rt=(e,t,i,o)=>{for(var r=o>1?void 0:o?_d(t,i):t,s=e.length-1,n;s>=0;s--)(n=e[s])&&(r=(o?n(t,i,r):n(r))||r);return o&&r&&md(t,i,r),r},yd=(e,t,i)=>t.has(e)||ul("Cannot "+i),wd=(e,t,i)=>t.has(e)?ul("Cannot add the same private member more than once"):t instanceof WeakSet?t.add(e):t.set(e,i),Co=(e,t,i)=>(yd(e,t,"access private method"),i),yi,Js,cl,hl;let Te=class extends g{constructor(){super(...arguments),wd(this,yi),this._position=0,this.vertical=!1}_onMouseMove(e){this._position=(this.vertical?e.offsetY:e.offsetX)-5}_handleClick(e){e.preventDefault(),e.stopImmediatePropagation(),e.target?.blur?.(),this.dispatchEvent(new ko(ko.CLICK))}render(){return this.href?Co(this,yi,cl).call(this):Co(this,yi,hl).call(this)}};yi=new WeakSet,Js=function(){return l`
      <div
        id="plus"
        style=${Ye({left:this.vertical?"":this._position+"px",top:this.vertical?this._position+"px":""})}>
        <svg
          id="plus-icon"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 512 512">
          <path
            d="M420.592 214.291H296.104V89.804h-83.102v124.487H88.518v83.104h124.484v124.488h83.102V297.395h124.488z" />
        </svg>
      </div>
    `},cl=function(){return l`<a
      id="button-wrapper"
      @mousemove=${this._onMouseMove}
      href=${w(this.href)}
      target=${w(this.target||void 0)}
      rel=${w(this.rel||w(this.target==="_blank"?"noopener noreferrer":void 0))}
      aria-label=${this.label?this.label:"create new element"}>
      ${Co(this,yi,Js).call(this)}
    </a>`},hl=function(){return l`
      <button
        id="button-wrapper"
        @mousemove=${this._onMouseMove}
        @click=${this._handleClick}
        aria-label=${this.label?this.label:"create new element"}>
        ${Co(this,yi,Js).call(this)}
      </button>
    `},Te.styles=[vd,b`
      :host {
        display: flex;
        position: relative;
        z-index: 1;
      }

      :host(:not([vertical])) {
        height: 20px;
        width: 100%;
        margin: -10px 0;
      }

      :host([vertical]) {
        height: 100%;
        width: 20px;
        margin: 0 -10px;
      }

      #button-wrapper {
        display: flex;
        justify-content: center;
        align-items: center;

        position: absolute;
        z-index: 1;
        outline: 0;
        transition: opacity 0.24s;
        display: inline-flex;
        width: 100%;
        border: none;
        height: 100%;
        padding: 0;

        text-decoration: none;
        background: transparent;
        color: currentColor;

        cursor: pointer;
        -webkit-appearance: none;
        -moz-appearance: none;

        opacity: 0;
      }

      :host(:focus) #button-wrapper,
      :host(:focus-within) #button-wrapper,
      :host(:hover) #button-wrapper {
        opacity: 1;
      }

      :host(:focus) #button-wrapper:before,
      :host(:focus-within) #button-wrapper:before,
      :host(:hover) #button-wrapper:before {
        animation: ${fd};
        background-color: var(--uui-color-interactive-emphasis,#3544b1);
        border-color: var(--uui-color-surface,#fff) !important;
      }

      #button-wrapper:before {
        content: '';
        position: absolute;
        right: 0;
        left: 0;
        height: 2px;
        background-color: transparent;
        border-top: 1px solid transparent;
        border-bottom: 1px solid transparent;
        border-radius: 2px;
        pointer-events: none;
        transition:
          background-color 720ms ease-out,
          border-color 240ms;
      }

      :host(:not([vertical])) #button-wrapper:before {
        top: 50%;
        transform: translateY(-50%);
      }

      :host([vertical]) #button-wrapper:before {
        height: 100%;
        width: 2px;
        left: 50%;
        transform: translateX(-50%);
        border-top: none;
        border-bottom: none;
        border-left: 1px solid transparent;
        border-right: 1px solid transparent;
      }

      :host(:not([vertical]):not(:hover)) #plus:not(:focus) {
        left: calc(50% - 2px) !important;
      }

      :host([vertical]:not(:hover)) #plus:not(:focus) {
        top: calc(50% - 2px) !important;
      }

      #plus {
        position: absolute;
        display: flex;
        justify-content: center;
        align-items: center;
        pointer-events: none;
        box-sizing: border-box;
        width: 28px;
        height: 28px;
        border-radius: 3em;
        font-size: 14px;
        border: 2px solid var(--uui-color-interactive-emphasis,#3544b1);
        color: var(--uui-color-interactive-emphasis,#3544b1);
        background-color: var(--uui-color-surface,#fff);

        opacity: 0;
        transform: scale(0);
        transition:
          transform 240ms ease-in,
          opacity 240ms,
          left 100ms linear 150ms,
          top 100ms linear 150ms;
      }
      :host(:focus) #plus,
      :host(:focus-within) #plus,
      :host(:hover) #plus {
        opacity: 1;
        transform: scale(1);
        transition:
          transform 240ms cubic-bezier(0.175, 0.885, 0.32, 1.275),
          opacity 80ms,
          box-shadow 240ms cubic-bezier(0.175, 0.885, 0.32, 1.275);
        box-shadow: 0 0 0 2px var(--uui-color-surface,#fff);
      }

      :host(:not([vertical])) #plus {
        margin-left: -18px;
      }

      :host([vertical]) #plus {
        left: -4px;
        margin-top: -18px;
      }

      #button-wrapper:focus #plus {
        /* TODO: implement focus outline system */
        border: 2px solid var(--uui-color-focus,#3879ff);
        color: var(--uui-color-focus,#3879ff);
      }

      #plus-icon {
        width: 50%;
        fill: currentColor;
      }

      #button-wrapper:active #plus {
        transform: scale(1.1);
      }
    `],Rt([_()],Te.prototype,"_position",2),Rt([a({type:String})],Te.prototype,"label",2),Rt([a({type:Boolean,reflect:!0})],Te.prototype,"vertical",2),Rt([a({type:String})],Te.prototype,"href",2),Rt([a({type:String})],Te.prototype,"target",2),Rt([a({type:String})],Te.prototype,"rel",2),Te=Rt([v("uui-button-inline-create")],Te);class xd{constructor(t,i){this._callback=t,this._timerId=null,this._remaining=null,this._onComplete=()=>{this._remaining=null,this._callback()},this.setDuration(i)}setDuration(t){this._duration=t,this._timerId!==null&&this.restart()}start(){this._timerId===null&&this.resume()}restart(){this._remaining=this._duration,this.resume()}pause(){this._timerId!==null&&(window.clearTimeout(this._timerId),this._timerId=null,this._remaining!==null&&(this._remaining-=Date.now()-this._startTime))}resume(){this._timerId!==null&&window.clearTimeout(this._timerId),this._remaining===null&&(this._remaining=this._duration),this._startTime=Date.now(),this._timerId=window.setTimeout(this._onComplete,this._remaining)}destroy(){this.pause()}}const x=(e,t,i=`This element has to be present for ${e.nodeName} to work appropriate.`)=>{customElements.get(t)||console.warn(`%c ${e.nodeName} requires ${t} element to be registered!`,"font-weight: bold;",i,e)},dl=(e,t)=>{function i(r){const s=e.getBoundingClientRect(),n=e.ownerDocument.defaultView,u=s.left+n.scrollX,c=s.top+n.scrollY;let p;if("TouchEvent"in window&&r instanceof TouchEvent)p=r.touches[0];else if(r instanceof PointerEvent)p=r;else return;const f=p.pageX-u,h=p.pageY-c;t?.onMove&&t.onMove(f,h)}function o(){document.removeEventListener("pointermove",i),document.removeEventListener("pointerup",o),t?.onStop&&t.onStop()}document.addEventListener("pointermove",i,{passive:!0}),document.addEventListener("pointerup",o),t?.initialEvent&&i(t.initialEvent)},M=(e,t,i)=>Math.min(Math.max(e,t),i),pl=(e,t,i)=>i+t-e,$d=(e,t,i)=>{let o=e;for(;o!==null;){const r=o instanceof HTMLElement&&o.hasAttribute(t)&&o.getAttribute(t)===i,s=o.querySelector(`[${t}="${i}"]`)!==null;if(r)return o;if(s)return o.querySelector(`[${t}="${i}"]`);o=o.parentElement||o.parentNode||o.host||null}return null};function kd(e){return e?e.assignedNodes({flatten:!0}).length>0:!1}m`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14"/><path d="M12 5v14"/></svg>`,m`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"><path d="m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3Z" /><path d="M12 9v4" /><path d="M12 17h.01" /></svg>`,m`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"><path d="m21.44 11.05-9.19 9.19a6 6 0 0 1-8.49-8.49l8.57-8.57A4 4 0 1 1 18 8.84l-8.59 8.57a2 2 0 0 1-2.83-2.83l8.49-8.48" /></svg>`,m`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"><rect width="18" height="18" x="3" y="4" rx="2" ry="2" /><line x1="16" x2="16" y1="2" y2="6" /><line x1="8" x2="8" y1="2" y2="6" /><line x1="3" x2="21" y1="10" y2="10" /><path d="M8 14h.01" /><path d="M12 14h.01" /><path d="M16 14h.01" /><path d="M8 18h.01" /><path d="M12 18h.01" /><path d="M16 18h.01" /></svg>`;const Eo=m`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12" /></svg>`;m`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"><rect width="8" height="4" x="8" y="2" rx="1" ry="1" /><path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2" /></svg>`,m`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"><polyline points="16 18 22 12 16 6" /><polyline points="8 6 2 12 8 18" /></svg>`,m`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"><path d="m2 22 1-1h3l9-9" /><path d="M3 21v-3l9-9" /><path d="m15 6 3.4-3.4a2.1 2.1 0 1 1 3 3L18 9l.4.4a2.1 2.1 0 1 1-3 3l-3.8-3.8a2.1 2.1 0 1 1 3-3l.4.4Z" /></svg>`,m`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"><path d="M15.5 2H8.6c-.4 0-.8.2-1.1.5-.3.3-.5.7-.5 1.1v12.8c0 .4.2.8.5 1.1.3.3.7.5 1.1.5h9.8c.4 0 .8-.2 1.1-.5.3-.3.5-.7.5-1.1V6.5L15.5 2z" /><path d="M3 7.6v12.8c0 .4.2.8.5 1.1.3.3.7.5 1.1.5h9.8" /><path d="M15 2v5h5" /></svg>`;const Cd=m`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"><path d="M3 6h18" /><path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6" /><path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2" /><line x1="10" x2="10" y1="11" y2="17" /><line x1="14" x2="14" y1="11" y2="17" /></svg>`;m`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"><path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z" /><polyline points="14 2 14 8 20 8" /></svg>`,m`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" /><polyline points="7 10 12 15 17 10" /><line x1="12" x2="12" y1="15" y2="3" /></svg>`,m`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"><path d="M17 3a2.85 2.83 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5Z" /><path d="m15 5 4 4" /></svg>`,m`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"><path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" /></svg>`,m`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"><path d="M20 20a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.9a2 2 0 0 1-1.69-.9L9.6 3.9A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2Z" /><path d="M2 10h20" /></svg>`,m`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"><polygon points="7.86 2 16.14 2 22 7.86 22 16.14 16.14 22 7.86 22 2 16.14 2 7.86 7.86 2" /><path d="m15 9-6 6" /><path d="m9 9 6 6" /></svg>`,m`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round" ><circle cx="12" cy="12" r="10" /><path d="M12 16v-4" /><path d="M12 8h.01" /></svg>`,m`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71" /><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71" /></svg>`;const Ed=m`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"><rect width="18" height="11" x="3" y="11" rx="2" ry="2" /><path d="M7 11V7a5 5 0 0 1 10 0v4" /></svg>`;m`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"><rect width="4" height="16" x="6" y="4" /><rect width="4" height="16" x="14" y="4" /></svg>`;const Pd=m`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"><rect width="18" height="18" x="3" y="3" rx="2" ry="2" /><circle cx="9" cy="9" r="2" /><path d="m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21" /></svg>`;m`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"><polygon points="5 3 19 12 5 21 5 3" /></svg>`;const en=m`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"><path d="M18 6 6 18" /><path d="m6 6 12 12" /></svg>`;m`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"><circle cx="11" cy="11" r="8" /><path d="m21 21-4.3-4.3" /></svg>`;const Sd=m`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"><path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z" /><circle cx="12" cy="12" r="3" /></svg>`;m`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"><path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z" /><circle cx="12" cy="12" r="3" /></svg>`;const Od=m`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14" /></svg>`;m`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"><path d="M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8" /><path d="M21 3v5h-5" /><path d="M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16" /><path d="M8 16H3v5" /></svg>`;const Id=m`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"><rect width="18" height="11" x="3" y="11" rx="2" ry="2" /><path d="M7 11V7a5 5 0 0 1 9.9-1" /></svg>`,Ad=m`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"><path d="M9.88 9.88a3 3 0 1 0 4.24 4.24" /><path d="M10.73 5.08A10.43 10.43 0 0 1 12 5c7 0 10 7 10 7a13.16 13.16 0 0 1-1.67 2.68" /><path d="M6.61 6.61A13.526 13.526 0 0 0 2 12s3 7 10 7a9.74 9.74 0 0 0 5.39-1.61" /><line x1="2" x2="22" y1="2" y2="22" /></svg>`;m`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"><path d="M15 4V2" /><path d="M15 16v-2" /><path d="M8 9h2" /><path d="M20 9h2" /><path d="M17.8 11.8 19 13" /><path d="M15 9h0" /><path d="M17.8 6.2 19 5" /><path d="m3 21 9-9" /><path d="M12.2 6.2 11 5" /></svg>`;const Ud=m`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10" /><path d="m15 9-6 6" /><path d="m9 9 6 6" /></svg>`;var zd=Object.defineProperty,Md=Object.getOwnPropertyDescriptor,vl=e=>{throw TypeError(e)},Se=(e,t,i,o)=>{for(var r=o>1?void 0:o?Md(t,i):t,s=e.length-1,n;s>=0;s--)(n=e[s])&&(r=(o?n(t,i,r):n(r))||r);return o&&r&&zd(t,i,r),r},fl=(e,t,i)=>t.has(e)||vl("Cannot "+i),Dd=(e,t,i)=>(fl(e,t,"read from private field"),t.get(e)),Ld=(e,t,i)=>t.has(e)?vl("Cannot add the same private member more than once"):t instanceof WeakSet?t.add(e):t.set(e,i),Td=(e,t,i,o)=>(fl(e,t,"write to private field"),t.set(e,i),i),Po;let oe=class extends De(Me("",ed(g))){constructor(){super(),this.type="button",this.disabled=!1,this.look="default",this.color="default",this.compact=!1,this.state=void 0,Ld(this,Po),this.addEventListener("click",this._onHostClick)}getFormElement(){return this._button}async focus(){await this.updateComplete,this._button.focus()}async blur(){await this.updateComplete,this._button.blur()}async click(){await this.updateComplete,this._button.click()}_onHostClick(e){if(this.disabled){e.preventDefault(),e.stopImmediatePropagation();return}if(this._internals?.form)switch(this.type){case"reset":this._internals.form.reset();break;case"button":break;default:this._internals.form.requestSubmit?this._internals.form.requestSubmit():this._internals.form.dispatchEvent(new SubmitEvent("submit"));break}this._togglePopover()}updated(e){super.updated(e),e.has("state")&&(clearTimeout(Dd(this,Po)),(this.state==="success"||this.state==="failed")&&Td(this,Po,setTimeout(()=>this.state=void 0,2e3)))}renderState(){let e;switch(this.state){case"waiting":x(this,"uui-loader-circle"),e=l`<uui-loader-circle id="loader"></uui-loader-circle>`;break;case"success":x(this,"uui-icon"),e=l`<uui-icon
          name="check"
          .fallback=${Eo.strings[0]}></uui-icon>`;break;case"failed":x(this,"uui-icon"),e=l`<uui-icon
          name="wrong"
          .fallback=${Ud.strings[0]}></uui-icon>`;break;default:return E}return l`<div id="state">${e}</div>`}render(){return this.href?l`
          <a
            id="button"
            aria-label=${w(this.label)}
            href=${w(this.disabled?void 0:this.href)}
            target=${w(this.target||void 0)}
            rel=${w(this.rel||w(this.target==="_blank"?"noopener noreferrer":void 0))}>
            ${this.renderState()} ${this.renderLabel()}
            <slot name="extra"></slot>
          </a>
        `:l`
          <button
            id="button"
            ?disabled=${this.disabled}
            aria-label=${w(this.label)}>
            ${this.renderState()} ${this.renderLabel()}
            <slot name="extra"></slot>
          </button>
        `}};Po=new WeakMap,oe.styles=[xo,b`
      :host {
        position: relative;
        display: inline-flex;
        margin-left: calc(var(--uui-button-merge-border-left, 0) * -1px);
        --uui-button-padding-left-factor: 3;
        --uui-button-padding-right-factor: 3;
        --uui-button-padding-top-factor: 1;
        --uui-button-padding-bottom-factor: 1;

        min-height: var(--uui-button-height, var(--uui-size-11,33px));
        max-height: 100%;
        cursor: pointer;

        text-align: center;
        font-size: var(--uui-button-font-size, inherit);
        font-weight: var(--uui-button-font-weight, 500);
        transition:
          background-color 80ms,
          border-color 80ms,
          color 80ms;
      }

      :host([compact]) {
        --uui-button-padding-left-factor: 1;
        --uui-button-padding-right-factor: 1;
        --uui-button-padding-top-factor: 0;
        --uui-button-padding-bottom-factor: 0;
      }

      .label {
        line-height: normal; /** needed to reset 'a > span' */
        transition: opacity 120ms;
        display: flex;
        gap: var(--uui-size-1,3px);
        align-items: center;
      }

      :host([state]:not([state=''])) .label {
        opacity: 0;
      }

      #state {
        position: absolute;
        opacity: 0;
        animation-name: fadeIn;
        animation-delay: 40ms;
        animation-duration: 360ms;
        animation-fill-mode: forwards;
        display: flex;
        justify-content: center;
        width: 100%;
        height: 100%;
        align-items: center;
      }

      #button {
        width: 100%;
        background-color: transparent;
        color: inherit;
        font-size: inherit;
        border-radius: inherit;
        font-family: inherit;
        font-weight: inherit;
        text-align: inherit;
        border: none;
        cursor: inherit;

        display: inline-flex;
        align-items: center;
        justify-content: var(--uui-button-content-align, center);

        /* for anchor tag: */
        text-decoration: none;
        color: currentColor;
        line-height: inherit;

        border-width: var(--uui-button-border-width, 1px);
        border-style: solid;
        border-radius: var(
          --uui-button-border-radius,
          var(--uui-border-radius,3px)
        );
        cursor: pointer;

        padding: calc(var(--uui-size-2,6px) * var(--uui-button-padding-top-factor))
          calc(var(--uui-size-2,6px) * var(--uui-button-padding-right-factor))
          calc(var(--uui-size-2,6px) * var(--uui-button-padding-bottom-factor))
          calc(var(--uui-size-2,6px) * var(--uui-button-padding-left-factor));

        box-shadow: none;

        transition: var(--uui-button-transition, none);
      }

      #button:focus-visible {
        outline: 2px solid var(--color-emphasis);
      }

      button[disabled]:active,
      a:not([href]):active {
        animation: ${$o};
      }

      /* ANIMATIONS */
      @keyframes fadeIn {
        0% {
          opacity: 0;
        }
        100% {
          opacity: 1;
        }
      }

      @keyframes fadeOut {
        0% {
          opacity: 1;
        }
        100% {
          opacity: 0;
        }
      }

      #icon-check,
      #icon-wrong {
        display: grid;
        place-items: center;
        width: 1.5em;
      }

      #loader {
        font-size: 1.5em;
      }
      :host([look]:not([look=''])) #loader {
        color: inherit;
      }

      /* edge case for default color */
      :host(:not([color]):not([look='primary'])),
      :host([color='']:not([look='primary'])),
      :host([color='default']:not([look='primary'])) {
        --uui-button-contrast-hover: var(--uui-color-default-emphasis,#3544b1);
      }

      :host([color='warning'][look='outline']) #button,
      :host([color='warning'][look='placeholder']) #button {
        --uui-button-contrast-hover: var(--color-standalone);
      }

      /** Button color attribute: */
      #button {
        --color: var(--uui-color-default,#1b264f);
        --color-standalone: var(--uui-color-default-standalone,rgb(28, 35, 59));
        --color-emphasis: var(--uui-color-default-emphasis,#3544b1);
        --color-contrast: var(--uui-color-default-contrast,#fff);
      }
      :host([color='positive']) #button {
        --color: var(--uui-color-positive,#0b8152);
        --color-standalone: var(--uui-color-positive-standalone,rgb(10, 115, 73));
        --color-emphasis: var(--uui-color-positive-emphasis,rgb(13, 155, 98));
        --color-contrast: var(--uui-color-positive-contrast,#fff);
      }
      :host([color='warning']) #button {
        --color: var(--uui-color-warning,#fbd142);
        --color-standalone: var(--uui-color-warning-standalone,#a17700);
        --color-emphasis: var(--uui-color-warning-emphasis,rgb(251, 224, 101));
        --color-contrast: var(--uui-color-warning-contrast,#000);
      }
      :host([color='danger']) #button {
        --color: var(--uui-color-danger,#d42054);
        --color-standalone: var(--uui-color-danger-standalone,rgb(191, 33, 78));
        --color-emphasis: var(--uui-color-danger-emphasis,rgb(226, 60, 107));
        --color-contrast: var(--uui-color-danger-contrast,white);
      }
      :host([color='invalid']) #button {
        --color: var(--uui-color-invalid,#d42054);
        --color-standalone: var(--uui-color-invalid-standalone,rgb(191, 33, 78));
        --color-emphasis: var(--uui-color-invalid-emphasis,rgb(226, 60, 107));
        --color-contrast: var(--uui-color-invalid-contrast,white);
      }
      :host([disabled]) #button {
        --color: var(--uui-color-disabled,#f3f3f5);
        --color-standalone: var(--uui-color-disabled-contrast,#c4c4c4);
        --color-emphasis: var(--uui-color-disabled,#f3f3f5);
        --color-contrast: var(--uui-color-disabled-contrast,#c4c4c4);

        cursor: default;
      }

      /** Button look attribute: */
      /* DEFAULT */
      #button {
        background-color: var(--uui-button-background-color, transparent);
        color: var(--uui-button-contrast, var(--color-standalone));
        border-color: var(--uui-button-border-color, transparent);
      }
      :host(:not([disabled]):hover) #button {
        background-color: var(
          --uui-button-background-color-hover,
          var(--uui-color-surface-emphasis,rgb(250, 250, 250))
        );
        color: var(--uui-button-contrast-hover, var(--color-standalone));
        border-color: var(--uui-button-border-color-hover, transparent);
      }
      :host([disabled]) #button {
        background-color: var(
          --uui-button-background-color-disabled,
          transparent
        );
        color: var(--uui-button-contrast-disabled, var(--color-contrast));
        border-color: var(--uui-button-border-color-disabled, transparent);
      }

      /* PRIMARY */
      :host([look='primary']) #button {
        background-color: var(--uui-button-background-color, var(--color));
        color: var(--uui-button-contrast, var(--color-contrast));
        border-color: var(--uui-button-border-color, transparent);

        /* special for primary: */
        font-weight: var(--uui-button-font-weight, 700);
      }

      :host([look='primary']:hover) #button {
        background-color: var(
          --uui-button-background-color-hover,
          var(--color-emphasis)
        );
        color: var(--uui-button-contrast-hover, var(--color-contrast));
        border-color: var(--uui-button-border-color-hover, transparent);
      }

      /* special outline offset tof primary style so you can see the outline */
      :host([look='primary']) #button:focus-visible {
        outline-offset: 2px;
      }

      :host([look='primary'][disabled]) #button {
        background-color: var(
          --uui-button-background-color-disabled,
          var(--color)
        );
        color: var(--uui-button-contrast-disabled, var(--color-contrast));
        border-color: var(--uui-button-border-color-disabled, var(--color));
      }
      /* SECONDARY */
      :host([look='secondary']) #button {
        background-color: var(
          --uui-button-background-color,
          var(--uui-color-surface-alt,#f3f3f5)
        );
        color: var(--uui-button-contrast, var(--color-standalone));
        border-color: var(--uui-button-border-color, transparent);

        /* special for secondary: */
        font-weight: var(--uui-button-font-weight, 700);
      }
      :host([look='secondary']:hover) #button {
        background-color: var(
          --uui-button-background-color-hover,
          var(--uui-color-surface-emphasis,rgb(250, 250, 250))
        );
        color: var(--uui-button-contrast-hover, var(--color-standalone));
        border-color: var(--uui-button-border-color-hover, transparent);
      }
      :host([look='secondary'][disabled]) #button {
        background-color: var(
          --uui-button-background-color-disabled,
          var(--color)
        );
        color: var(--uui-button-contrast-disabled, var(--color-contrast));
        border-color: var(--uui-button-border-color-disabled, var(--color));
      }

      /* OUTLINE */
      :host([look='outline']) #button {
        background-color: var(--uui-button-background-color, transparent);
        color: var(--uui-button-contrast, var(--color-standalone));
        border-color: var(
          --uui-button-border-color,
          var(--uui-color-border-standalone,#c2c2c2)
        );

        /* special for outline: */
        font-weight: var(--uui-button-font-weight, 700);
      }
      :host([look='outline']:not([disabled]):hover) #button {
        background-color: var(--uui-button-background-color-hover, transparent);
        color: var(--uui-button-contrast-hover, var(--color-standalone));
        border-color: var(--uui-button-border-color-hover);
      }
      :host([look='outline'][disabled]) #button {
        background-color: var(
          --uui-button-background-color-disabled,
          transparent
        );
        color: var(--uui-button-contrast-disabled, var(--color-standalone));
        border-color: var(
          --uui-button-border-color-disabled,
          var(--color-standalone)
        );
      }

      /* PLACEHOLDER */
      :host([look='placeholder']) #button {
        border-style: dashed;
        background-color: var(--uui-button-background-color, transparent);
        color: var(--uui-button-contrast, var(--color-standalone));
        border-color: var(
          --uui-button-border-color,
          var(--uui-color-border-standalone,#c2c2c2)
        );
      }
      :host([look='placeholder']:not([disabled]):hover) #button {
        background-color: var(--uui-button-background-color-hover, transparent);
        color: var(--uui-button-contrast-hover, var(--color-standalone));
        border-color: var(--uui-button-border-color-hover);
      }
      :host([look='placeholder'][disabled]) #button {
        background-color: var(
          --uui-button-background-color-disabled,
          var(--color)
        );
        color: var(--uui-button-contrast-disabled, var(--color-standalone));
        border-color: var(
          --uui-button-border-color-disabled,
          var(--color-standalone)
        );
      }
    `],Se([a({type:String,reflect:!0})],oe.prototype,"type",2),Se([a({type:Boolean,reflect:!0})],oe.prototype,"disabled",2),Se([a({reflect:!0})],oe.prototype,"look",2),Se([a({reflect:!0})],oe.prototype,"color",2),Se([a({type:Boolean,reflect:!0})],oe.prototype,"compact",2),Se([a({type:String,reflect:!0})],oe.prototype,"state",2),Se([a({type:String})],oe.prototype,"href",2),Se([a({type:String})],oe.prototype,"target",2),Se([a({type:String})],oe.prototype,"rel",2),Se([O("#button")],oe.prototype,"_button",2),oe=Se([v("uui-button")],oe);class Wt extends A{constructor(){super(...arguments),this.text=null}}Wt.COPIED="copied",Wt.COPYING="copying";var Vd=Object.defineProperty,Nd=Object.getOwnPropertyDescriptor,bl=e=>{throw TypeError(e)},So=(e,t,i,o)=>{for(var r=o>1?void 0:o?Nd(t,i):t,s=e.length-1,n;s>=0;s--)(n=e[s])&&(r=(o?n(t,i,r):n(r))||r);return o&&r&&Vd(t,i,r),r},gl=(e,t,i)=>t.has(e)||bl("Cannot "+i),tn=(e,t,i)=>(gl(e,t,"read from private field"),i?i.call(e):t.get(e)),ml=(e,t,i)=>t.has(e)?bl("Cannot add the same private member more than once"):t instanceof WeakSet?t.add(e):t.set(e,i),Bd=(e,t,i,o)=>(gl(e,t,"write to private field"),t.set(e,i),i),mr,rn;let Ft=class extends oe{constructor(){super(),this.text="",this.copyFrom="",this.animationStateDelay=250,ml(this,mr),ml(this,rn,async()=>{this.state="waiting";let e=this.text;if(this.copyFrom){const i=document.getElementById(this.copyFrom);if(i)"value"in i?e=i.value:e=i.textContent??i.innerText??"";else{console.error(`Element ID ${this.copyFrom} not found to copy from`),this.state="failed";return}}const t=new Wt(Wt.COPYING);t.text=e,this.dispatchEvent(t),t.text!=null&&(e=t.text);try{await navigator.clipboard.writeText(e);const i=new Wt(Wt.COPIED);i.text=e,this.dispatchEvent(i),Bd(this,mr,setTimeout(()=>{this.state="success"},this.animationStateDelay))}catch(i){this.state="failed",console.error("Error copying to clipboard",i)}}),x(this,"uui-icon"),this.addEventListener("click",tn(this,rn))}disconnectedCallback(){super.disconnectedCallback(),tn(this,mr)&&clearTimeout(tn(this,mr))}renderLabel(){return l`
      <slot class="label">
        <uui-icon name="copy"></uui-icon>
      </slot>
    `}};mr=new WeakMap,rn=new WeakMap,Ft.styles=oe.styles,So([a({type:String})],Ft.prototype,"text",2),So([a({type:String,attribute:"copy-from"})],Ft.prototype,"copyFrom",2),So([a({type:Number,attribute:"animation-state-delay"})],Ft.prototype,"animationStateDelay",2),Ft=So([v("uui-button-copy-text")],Ft);class wi extends A{}wi.OPEN="open";var Hd=Object.defineProperty,jd=Object.getOwnPropertyDescriptor,xi=(e,t,i,o)=>{for(var r=o>1?void 0:o?jd(t,i):t,s=e.length-1,n;s>=0;s--)(n=e[s])&&(r=(o?n(t,i,r):n(r))||r);return o&&r&&Hd(t,i,r),r};let Z=class extends _o(fi(g)){constructor(){super(...arguments),this.disabled=!1,this.error=!1}handleOpenClick(e){this.disabled||(e.stopPropagation(),this.dispatchEvent(new wi(wi.OPEN)))}handleOpenKeydown(e){this.disabled||e.key==="Enter"&&(e.preventDefault(),e.stopPropagation(),this.dispatchEvent(new wi(wi.OPEN)))}render(){return l`<slot id="open-part"></slot>
      <div id="select-border"></div>`}};Z.styles=[hi,b`
      :host {
        position: relative;
        display: flex;
        width: 100%;
        justify-content: center;
        box-sizing: border-box;
        box-shadow: var(--uui-shadow-depth-1,0 1px 3px rgba(0,0,0,0.12) , 0 1px 2px rgba(0,0,0,0.24));
        border-radius: var(--uui-border-radius,3px);
        min-height: var(--uui-layout-medium);
        background-color: var(--uui-color-surface,#fff);
        --uui-card-border-width: 3px;
        transition: box-shadow 100ms ease-out;
      }

      :host([selectable]:focus-visible) {
        outline-color: var(--uui-color-focus,#3879ff);
        outline-width: var(--uui-card-border-width);
        outline-style: solid;
        outline-offset: var(--uui-card-border-width);
      }

      :host() * {
        /* TODO: implement globally shared outline style */
        outline-color: var(--uui-color-focus,#3879ff);
      }

      :host([error])::before {
        content: '';
        position: absolute;
        pointer-events: none;
        inset: 0;
        width: 100%;
        height: 100%;
        z-index: 1;
        box-sizing: border-box;
        border: var(--uui-card-border-width) solid var(--uui-color-invalid,#d42054);
        border-radius: var(--uui-border-radius,3px);
      }

      button {
        font-size: inherit;
        font-family: inherit;
        border: 0;
        padding: 0;
        background-color: transparent;
        text-align: left;
        color: var(--uui-color-text,#060606);
      }

      a {
        text-decoration: none;
        color: inherit;
        line-height: initial;
      }

      button:focus,
      a:focus {
        outline-color: var(--uui-color-focus,#3879ff);
        outline-width: var(--uui-card-border-width);
        outline-style: solid;
        outline-offset: var(--uui-card-border-width);
        border-radius: var(--uui-border-radius,3px);
      }

      :host([selectable]) {
        cursor: pointer;
      }
      :host([selectable]) #select-border {
        position: absolute;
        z-index: 2;
        top: -2px;
        left: -2px;
        right: -2px;
        bottom: -2px;
        pointer-events: none;
        opacity: 0;
        transition: opacity 120ms;
      }
      :host([selectable]) #select-border::after {
        content: '';
        position: absolute;
        width: 100%;
        height: 100%;
        box-sizing: border-box;
        border: 2px solid var(--uui-color-selected,#3544b1);
        border-radius: calc(var(--uui-border-radius,3px) + 2px);
        box-shadow:
          0 0 4px 0 var(--uui-color-selected,#3544b1),
          inset 0 0 2px 0 var(--uui-color-selected,#3544b1);
      }
      :host([selected]) #select-border {
        opacity: 1;
      }
      :host([selectable]:not([selected]):hover) #select-border {
        opacity: 0.33;
      }
      :host([selectable][selected]:hover) #select-border {
        opacity: 0.8;
      }

      :host([selectable]:not([selected])) #open-part:hover + #select-border {
        opacity: 0;
      }
      :host([selectable][selected]) #open-part:hover + #select-border {
        opacity: 1;
      }

      :host([selectable]:not([selected]):hover) #select-border::after {
        animation: not-selected--hover 1.2s infinite;
      }
      @keyframes not-selected--hover {
        0%,
        100% {
          opacity: 0.66;
        }
        50% {
          opacity: 1;
        }
      }

      :host([selectable][selected]:hover) #select-border::after {
        animation: selected--hover 1.4s infinite;
      }
      @keyframes selected--hover {
        0%,
        100% {
          opacity: 1;
        }
        50% {
          opacity: 0.66;
        }
      }
      :host([selectable]) #open-part:hover + #select-border::after {
        animation: none;
      }

      :host([select-only]) *,
      :host([select-only]) ::slotted(*) {
        pointer-events: none;
      }

      :host([disabled]) {
        background: var(--uui-color-disabled,#f3f3f5);
        color: var(--uui-color-disabled-contrast,#c4c4c4);
      }
    `],xi([a({type:Boolean,reflect:!0,attribute:"disabled"})],Z.prototype,"disabled",2),xi([a({type:Boolean,reflect:!0})],Z.prototype,"error",2),xi([a({type:String})],Z.prototype,"href",2),xi([a({type:String})],Z.prototype,"target",2),xi([a({type:String})],Z.prototype,"rel",2),Z=xi([v("uui-card")],Z);var Rd=Object.defineProperty,Wd=Object.getOwnPropertyDescriptor,_l=e=>{throw TypeError(e)},Oo=(e,t,i,o)=>{for(var r=o>1?void 0:o?Wd(t,i):t,s=e.length-1,n;s>=0;s--)(n=e[s])&&(r=(o?n(t,i,r):n(r))||r);return o&&r&&Rd(t,i,r),r},Fd=(e,t,i)=>t.has(e)||_l("Cannot "+i),Gd=(e,t,i)=>t.has(e)?_l("Cannot add the same private member more than once"):t instanceof WeakSet?t.add(e):t.set(e,i),_r=(e,t,i)=>(Fd(e,t,"access private method"),i),Gt,yl,wl,xl,on;let qt=class extends Z{constructor(){super(...arguments),Gd(this,Gt),this.name=""}get background(){}set background(e){this.style.backgroundColor=e??""}render(){return l`
      ${_r(this,Gt,xl).call(this)}
      ${this.href?_r(this,Gt,wl).call(this):_r(this,Gt,yl).call(this)}
      <!-- Select border must be right after #open-part -->
      <div id="select-border"></div>

      <slot name="tag"></slot>
      <slot name="actions"></slot>
    `}};Gt=new WeakSet,yl=function(){return l`
      <button
        id="open-part"
        class="uui-text"
        tabindex=${this.disabled?E:"0"}
        @click=${this.handleOpenClick}
        @keydown=${this.handleOpenKeydown}>
        ${_r(this,Gt,on).call(this)}
      </button>
    `},wl=function(){return l`
      <a
        id="open-part"
        class="uui-text"
        tabindex=${this.disabled?E:"0"}
        href=${w(this.disabled?void 0:this.href)}
        target=${w(this.target||void 0)}
        rel=${w(this.rel||w(this.target==="_blank"?"noopener noreferrer":void 0))}>
        ${_r(this,Gt,on).call(this)}
      </a>
    `},xl=function(){return l`<div id="portrait">
      <slot></slot>
    </div> `},on=function(){return l`
      <div id="content">
        <span title="${this.name}" id="name">${this.name}</span>
        <small title="${this.description}">${this.description}<slot name="description"></slot></small>
      </div></div>
    `},qt.styles=[...Z.styles,b`
      :host {
        background-color: var(--uui-color-surface-alt,#f3f3f5);
      }

      slot[name='tag'] {
        position: absolute;
        top: var(--uui-size-4,12px);
        right: var(--uui-size-4,12px);
        display: flex;
        justify-content: right;
        z-index: 2;
      }

      slot[name='actions'] {
        position: absolute;
        top: var(--uui-size-4,12px);
        right: var(--uui-size-4,12px);
        display: flex;
        justify-content: right;
        z-index: 2;
        opacity: 0;
        transition: opacity 120ms;
      }
      :host(:focus) slot[name='actions'],
      :host(:focus-within) slot[name='actions'],
      :host(:hover) slot[name='actions'] {
        opacity: 1;
      }

      #portrait {
        display: flex;
        justify-content: center;
        min-height: 150px;
        max-height: 150px;
        width: 100%;
        margin-bottom: var(--uui-size-layout-2,30px);
      }

      slot:not([name])::slotted(*) {
        align-self: center;
        border-radius: var(--uui-border-radius,3px);
        object-fit: cover;
        max-width: 100%;
        max-height: 100%;
        font-size: var(--uui-size-8,24px);
      }

      #open-part {
        position: absolute;
        z-index: 1;
        inset: 0;
        color: var(--uui-color-interactive,#1b264f);
        border: none;
        cursor: pointer;
        display: flex;
        flex-direction: column;
        justify-content: flex-end;
      }

      :host([disabled]) #open-part {
        pointer-events: none;
        background: var(--uui-color-disabled,#f3f3f5);
        color: var(--uui-color-contrast-disabled);
      }

      #open-part:hover {
        color: var(--uui-color-interactive-emphasis,#3544b1);
      }
      #open-part:hover #name {
        text-decoration: underline;
      }
      #open-part #name,
      #open-part small {
        display: -webkit-box;
        -webkit-line-clamp: 1;
        -webkit-box-orient: vertical;
        overflow: hidden;
        text-overflow: ellipsis;
        overflow-wrap: anywhere;
      }

      :host([image]:not([image=''])) #open-part {
        transition: opacity 0.5s 0.5s;
        opacity: 0;
      }

      #content {
        position: relative;
        display: flex;
        flex-direction: column;
        width: 100%;
        font-family: inherit;
        font-size: var(--uui-type-small-size,12px);
        box-sizing: border-box;
        text-align: left;
        word-break: break-word;
        padding-top: var(--uui-size-space-3,9px);
      }

      #content::before {
        content: '';
        position: absolute;
        inset: 0;
        z-index: -1;
        border-top: 1px solid var(--uui-color-divider,#f6f6f7);
        border-radius: 0 0 var(--uui-border-radius,3px) var(--uui-border-radius,3px);
        background-color: var(--uui-color-surface,#fff);
        pointer-events: none;
        opacity: 0.96;
      }

      :host(:focus) slot[name='actions'],
      :host(:focus-within) slot[name='actions'],
      :host(:hover) slot[name='actions'] {
        opacity: 1;
      }

      :host(
          [image]:not([image='']):hover,
          [image]:not([image='']):focus,
          [image]:not([image='']):focus-within,
          [selected][image]:not([image='']),
          [error][image]:not([image=''])
        )
        #open-part {
        opacity: 1;
        transition-duration: 120ms;
        transition-delay: 0s;
      }

      :host([selectable]) #open-part {
        inset: var(--uui-size-space-3,9px) var(--uui-size-space-4,12px);
      }
      :host(:not([selectable])) #content {
        padding: var(--uui-size-space-3,9px) var(--uui-size-space-4,12px);
      }
      :host([selectable]) #content::before {
        inset: calc(var(--uui-size-space-3,9px) * -1)
          calc(var(--uui-size-space-4,12px) * -1);
        top: 0;
      }
    `],Oo([a({type:String})],qt.prototype,"name",2),Oo([a({type:String})],qt.prototype,"description",2),Oo([a({type:String,attribute:"background"})],qt.prototype,"background",1),qt=Oo([v("uui-card-block-type")],qt);var qd=Object.defineProperty,Kd=Object.getOwnPropertyDescriptor,$l=e=>{throw TypeError(e)},Io=(e,t,i,o)=>{for(var r=o>1?void 0:o?Kd(t,i):t,s=e.length-1,n;s>=0;s--)(n=e[s])&&(r=(o?n(t,i,r):n(r))||r);return o&&r&&qd(t,i,r),r},Yd=(e,t,i)=>t.has(e)||$l("Cannot "+i),Xd=(e,t,i)=>t.has(e)?$l("Cannot add the same private member more than once"):t instanceof WeakSet?t.add(e):t.set(e,i),Ao=(e,t,i)=>(Yd(e,t,"access private method"),i),$i,sn,kl,Cl;let Kt=class extends Z{constructor(){super(...arguments),Xd(this,$i),this.name="",this.detail="",this._iconSlotHasContent=!1,this.fallbackIcon=`<svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    stroke-width="1.75"
    stroke-linecap="round"
    stroke-linejoin="round"
    id="icon">
    <path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z" />
    <path d="M14 2v4a2 2 0 0 0 2 2h4" />
  </svg>`}_onSlotIconChange(e){this._iconSlotHasContent=e.target.assignedNodes({flatten:!0}).length>0}_renderFallbackIcon(){return x(this,"uui-icon"),l`<uui-icon .svg="${this.fallbackIcon}"></uui-icon>`}renderDetail(){return l`<small id="detail"
        >${this.detail}<slot name="detail"></slot></small
      ><slot id="default"></slot>`}render(){return l`
      ${this.href?Ao(this,$i,Cl).call(this):Ao(this,$i,kl).call(this)}
      <!-- Select border must be right after #open-part -->
      <div id="select-border"></div>

      <slot name="tag"></slot>
      <slot name="actions"></slot>
    `}};$i=new WeakSet,sn=function(){return l`
      <span id="content" class="uui-text">
        <span id="item">
          <span id="icon">
            <slot name="icon" @slotchange=${this._onSlotIconChange}></slot>
            ${this._iconSlotHasContent===!1?this._renderFallbackIcon():""}
          </span>
          <div title="${this.name}" id="name">
            ${this.name}<slot name="name"></slot>
          </div>
        </span>
        ${this.renderDetail()}
      </span>
    `},kl=function(){return l`<button
      id="open-part"
      tabindex=${this.disabled?E:0}
      @click=${this.handleOpenClick}
      @keydown=${this.handleOpenKeydown}>
      ${Ao(this,$i,sn).call(this)}
    </button>`},Cl=function(){return l`<a
      id="open-part"
      tabindex=${this.disabled?E:0}
      href=${w(this.disabled?void 0:this.href)}
      target=${w(this.target||void 0)}
      rel=${w(this.rel||w(this.target==="_blank"?"noopener noreferrer":void 0))}>
      ${Ao(this,$i,sn).call(this)}
    </a>`},Kt.styles=[...Z.styles,b`
      :host {
        min-width: 250px;
        flex-direction: column;
        justify-content: space-between;
      }

      slot[name='tag'] {
        position: absolute;
        top: var(--uui-size-4,12px);
        right: var(--uui-size-4,12px);
        display: flex;
        justify-content: right;
      }

      slot[name='actions'] {
        position: absolute;
        top: var(--uui-size-4,12px);
        right: var(--uui-size-4,12px);
        display: flex;
        justify-content: right;

        opacity: 0;
        transition: opacity 120ms;
      }
      :host(:focus) slot[name='actions'],
      :host(:focus-within) slot[name='actions'],
      :host(:hover) slot[name='actions'] {
        opacity: 1;
      }

      slot:not([name]) {
        display: block;
        margin: var(--uui-size-1,3px);
        margin-top: var(--uui-size-3,9px);
      }

      slot:not([name])::slotted(*) {
        font-size: var(--uui-type-small-size,12px);
        line-height: calc(2 * var(--uui-size-3,9px));
      }

      #open-part {
        display: flex;
        position: relative;
        align-items: center;
        cursor: pointer;
        flex-grow: 1;
        padding: var(--uui-size-space-4,12px) var(--uui-size-space-5,18px);
      }

      #open-part #name {
        display: -webkit-box;
        -webkit-line-clamp: 2;
        -webkit-box-orient: vertical;
        overflow: hidden;
        text-overflow: ellipsis;
        overflow-wrap: anywhere;
      }

      #content {
        align-self: stretch;
        display: flex;
        flex-direction: column;
      }

      #item {
        position: relative;
        display: flex;
        align-self: stretch;
        line-height: normal;
        align-items: center;
        margin-top: var(--uui-size-1,3px);
      }

      #icon {
        font-size: 1.2em;
        margin-right: var(--uui-size-1,3px);
      }

      :host([selectable]) #open-part {
        padding: 0;
        margin: var(--uui-size-space-4,12px) var(--uui-size-space-5,18px);
      }

      :host([disabled]) #name {
        pointer-events: none;
      }

      :host(:not([disabled])) #open-part:hover #icon {
        color: var(--uui-color-interactive-emphasis,#3544b1);
      }
      :host(:not([disabled])) #open-part:hover #name {
        text-decoration: underline;
        color: var(--uui-color-interactive-emphasis,#3544b1);
      }
      :host(:not([disabled])) #open-part:hover #detail {
        color: var(--uui-color-interactive-emphasis,#3544b1);
      }
      :host(:not([disabled])) #open-part:hover #default {
        color: var(--uui-color-interactive-emphasis,#3544b1);
      }
    `],Io([a({type:String})],Kt.prototype,"name",2),Io([a({type:String})],Kt.prototype,"detail",2),Io([_()],Kt.prototype,"_iconSlotHasContent",2),Kt=Io([v("uui-card-content-node")],Kt);var Zd=Object.defineProperty,Qd=Object.getOwnPropertyDescriptor,El=e=>{throw TypeError(e)},yr=(e,t,i,o)=>{for(var r=o>1?void 0:o?Qd(t,i):t,s=e.length-1,n;s>=0;s--)(n=e[s])&&(r=(o?n(t,i,r):n(r))||r);return o&&r&&Zd(t,i,r),r},Jd=(e,t,i)=>t.has(e)||El("Cannot "+i),ep=(e,t,i)=>t.has(e)?El("Cannot add the same private member more than once"):t instanceof WeakSet?t.add(e):t.set(e,i),Uo=(e,t,i)=>(Jd(e,t,"access private method"),i),ki,Pl,Sl,nn;let _t=class extends Z{constructor(){super(...arguments),ep(this,ki),this.name="",this.fileExt="",this.hasPreview=!1}connectedCallback(){super.connectedCallback(),x(this,"uui-symbol-folder"),x(this,"uui-symbol-file")}queryPreviews(e){this.hasPreview=e.composedPath()[0].assignedElements({flatten:!0}).length>0}renderMedia(){return this.hasPreview===!0?"":this.fileExt===""?l`<uui-symbol-folder id="entity-symbol"></uui-symbol-folder>`:l`<uui-symbol-file
      id="entity-symbol"
      type="${this.fileExt}"></uui-symbol-file>`}render(){return l` ${this.renderMedia()}
      <slot @slotchange=${this.queryPreviews}></slot>
      ${this.href?Uo(this,ki,Sl).call(this):Uo(this,ki,Pl).call(this)}
      <!-- Select border must be right after .open-part -->
      <div id="select-border"></div>

      <slot name="tag"></slot>
      <slot name="actions"></slot>`}};ki=new WeakSet,Pl=function(){return l`
      <button
        id="open-part"
        tabindex=${this.disabled?E:"0"}
        @click=${this.handleOpenClick}
        @keydown=${this.handleOpenKeydown}>
        ${Uo(this,ki,nn).call(this)}
      </button>
    `},Sl=function(){return l`
      <a
        id="open-part"
        tabindex=${this.disabled?E:"0"}
        href=${w(this.disabled?void 0:this.href)}
        target=${w(this.target||void 0)}
        rel=${w(this.rel||w(this.target==="_blank"?"noopener noreferrer":void 0))}>
        ${Uo(this,ki,nn).call(this)}
      </a>
    `},nn=function(){return l`
      <div id="content" class="uui-text">
        <!--
        TODO: Implement info box when pop-out is ready
        -->
        <span id="name" title="${this.name}">${this.name}</span>
        <small id="detail">${this.detail}<slot name="detail"></slot></small>
      </div>
    `},_t.styles=[...Z.styles,b`
      #entity-symbol {
        align-self: center;
        width: 60%;
        margin-bottom: var(--uui-size-layout-1,24px);
        padding: var(--uui-size-space-6,24px);
      }

      slot[name='tag'] {
        position: absolute;
        top: var(--uui-size-4,12px);
        right: var(--uui-size-4,12px);
        display: flex;
        justify-content: right;
        z-index: 2;
      }

      slot[name='actions'] {
        position: absolute;
        top: var(--uui-size-4,12px);
        right: var(--uui-size-4,12px);
        display: flex;
        justify-content: right;
        z-index: 2;
        opacity: 0;
        transition: opacity 120ms;
      }
      :host(:focus) slot[name='actions'],
      :host(:focus-within) slot[name='actions'],
      :host(:hover) slot[name='actions'] {
        opacity: 1;
      }

      slot:not([name])::slotted(*) {
        align-self: center;
        border-radius: var(--uui-border-radius,3px);
        object-fit: cover;
        width: 100%;
        height: 100%;
        pointer-events: none;
      }

      #open-part {
        position: absolute;
        z-index: 1;
        inset: 0;
        color: var(--uui-color-interactive,#1b264f);
        border: none;
        cursor: pointer;
        display: flex;
        flex-direction: column;
        justify-content: flex-end;
      }

      :host([disabled]) #open-part {
        pointer-events: none;
        color: var(--uui-color-contrast-disabled);
      }

      #open-part:hover {
        color: var(--uui-color-interactive-emphasis,#3544b1);
      }
      #open-part:hover #name {
        text-decoration: underline;
      }

      #open-part #name {
        display: -webkit-box;
        -webkit-line-clamp: 1;
        -webkit-box-orient: vertical;
        overflow: hidden;
        text-overflow: ellipsis;
        overflow-wrap: anywhere;
      }

      :host([image]:not([image=''])) #open-part {
        transition: opacity 0.5s 0.5s;
        opacity: 0;
      }

      #content {
        position: relative;
        display: flex;
        width: 100%;
        align-items: center;
        font-family: inherit;
        box-sizing: border-box;
        text-align: left;
        word-break: break-word;
        padding-top: var(--uui-size-space-3,9px);
      }

      #content::before {
        content: '';
        position: absolute;
        inset: 0;
        z-index: -1;
        border-top: 1px solid var(--uui-color-divider,#f6f6f7);
        border-radius: 0 0 var(--uui-border-radius,3px) var(--uui-border-radius,3px);
        background-color: var(--uui-color-surface,#fff);
        pointer-events: none;
        opacity: 0.96;
      }

      #detail {
        opacity: 0.6;
      }

      :host(
          [image]:not([image='']):hover,
          [image]:not([image='']):focus,
          [image]:not([image='']):focus-within,
          [selected][image]:not([image='']),
          [error][image]:not([image=''])
        )
        #open-part {
        opacity: 1;
        transition-duration: 120ms;
        transition-delay: 0s;
      }

      :host([selectable]) #open-part {
        inset: var(--uui-size-space-3,9px) var(--uui-size-space-4,12px);
      }
      :host(:not([selectable])) #content {
        padding: var(--uui-size-space-3,9px) var(--uui-size-space-4,12px);
      }
      :host([selectable]) #content::before {
        inset: calc(var(--uui-size-space-3,9px) * -1)
          calc(var(--uui-size-space-4,12px) * -1);
        top: 0;
      }

      /*
      #info-icon {
        margin-right: var(--uui-size-2);
        display: flex;
        height: var(--uui-size-8);
      }
      */
    `],yr([a({type:String})],_t.prototype,"name",2),yr([a({type:String})],_t.prototype,"detail",2),yr([a({type:String,attribute:"file-ext"})],_t.prototype,"fileExt",2),yr([_()],_t.prototype,"hasPreview",2),_t=yr([v("uui-card-media")],_t);var tp=Object.defineProperty,ip=Object.getOwnPropertyDescriptor,Ol=e=>{throw TypeError(e)},an=(e,t,i,o)=>{for(var r=o>1?void 0:o?ip(t,i):t,s=e.length-1,n;s>=0;s--)(n=e[s])&&(r=(o?n(t,i,r):n(r))||r);return o&&r&&tp(t,i,r),r},rp=(e,t,i)=>t.has(e)||Ol("Cannot "+i),op=(e,t,i)=>t.has(e)?Ol("Cannot add the same private member more than once"):t instanceof WeakSet?t.add(e):t.set(e,i),zo=(e,t,i)=>(rp(e,t,"access private method"),i),Ci,Il,Al,ln;let Ei=class extends Z{constructor(){super(...arguments),op(this,Ci),this.name="",this._avatarSlotHasContent=!1,this._avatarSlotChanged=e=>{this._avatarSlotHasContent=kd(e.target)}}connectedCallback(){super.connectedCallback(),x(this,"uui-avatar")}render(){return l`
      ${this.href?zo(this,Ci,Al).call(this):zo(this,Ci,Il).call(this)}
      <!-- Select border must be right after #open-part -->
      <div id="select-border"></div>
      <slot name="tag"></slot>
      <slot name="actions"></slot>
    `}};Ci=new WeakSet,Il=function(){return l`<div
      id="open-part"
      tabindex=${this.disabled?E:"0"}
      @click=${this.handleOpenClick}
      @keydown=${this.handleOpenKeydown}>
      ${zo(this,Ci,ln).call(this)}
    </div>`},Al=function(){return l`<a
      id="open-part"
      tabindex=${this.disabled?E:"0"}
      href=${w(this.disabled?void 0:this.href)}
      target=${w(this.target||void 0)}
      rel=${w(this.rel||w(this.target==="_blank"?"noopener noreferrer":void 0))}>
      ${zo(this,Ci,ln).call(this)}
    </a>`},ln=function(){return l`<div id="content">
      ${this._avatarSlotHasContent?E:l`<uui-avatar
            class="avatar"
            name=${this.name}
            size="m"></uui-avatar>`}
      <slot
        name="avatar"
        class="avatar"
        @slotchange=${this._avatarSlotChanged}></slot>
      <span title="${this.name}">${this.name}</span>
      <slot></slot>
    </div>`},Ei.styles=[...Z.styles,b`
      :host {
        min-width: 250px;
      }

      slot:not([name])::slotted(*) {
        font-size: var(--uui-type-small-size,12px);
        line-height: var(--uui-size-6,18px);
      }

      ::slotted(*) {
        text-align: center;
      }

      slot[name='tag'] {
        position: absolute;
        top: 6px;
        right: 6px;
        display: flex;
        justify-content: right;
      }

      slot[name='actions'] {
        position: absolute;
        top: var(--uui-size-space-4,12px);
        right: var(--uui-size-space-4,12px);
        display: flex;
        justify-content: right;

        opacity: 0;
        transition: opacity 120ms;
      }
      :host(:focus) slot[name='actions'],
      :host(:focus-within) slot[name='actions'],
      :host(:hover) slot[name='actions'] {
        opacity: 1;
      }

      #open-part {
        cursor: pointer;
        flex-grow: 1;
        padding: var(--uui-size-space-5,18px) var(--uui-size-space-4,12px);
      }

      :host([disabled]) #open-part {
        pointer-events: none;
      }

      #open-part:hover #content {
        color: var(--uui-color-interactive-emphasis,#3544b1);
      }
      #open-part:hover #content > span {
        text-decoration: underline;
      }

      :host([selectable]) #open-part {
        padding: 0;
        margin: var(--uui-size-space-5,18px) var(--uui-size-space-4,12px);
      }

      #content {
        display: flex;
        flex-direction: column;
        position: relative;
        align-items: center;
        margin: 0 0 3px 0;
        height: 100%;
      }

      #content > span {
        display: -webkit-box;
        -webkit-line-clamp: 2;
        -webkit-box-orient: vertical;
        overflow: hidden;
        text-overflow: ellipsis;
        vertical-align: center;
        margin-top: 3px;
        font-weight: 700;
        overflow-wrap: anywhere;
      }

      .avatar {
        font-size: 1.5em;
        margin-top: var(--uui-size-space-1,3px);
        margin-bottom: var(--uui-size-space-2,6px);
      }
    `],an([a({type:String})],Ei.prototype,"name",2),an([_()],Ei.prototype,"_avatarSlotHasContent",2),Ei=an([v("uui-card-user")],Ei);var sp=Object.defineProperty,np=Object.getOwnPropertyDescriptor,Ul=(e,t,i,o)=>{for(var r=o>1?void 0:o?np(t,i):t,s=e.length-1,n;s>=0;s--)(n=e[s])&&(r=(o?n(t,i,r):n(r))||r);return o&&r&&sp(t,i,r),r};let wr=class extends g{constructor(){super(),this.open=!1,console.error("\xB4uui-caret\xB4 is deprecated, please use \xB4uui-symbol-expand\xB4 or \xB4uui-symbol-sort\xB4")}render(){return l`<svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      stroke-width="3"
      stroke-linecap="round"
      stroke-linejoin="round">
      <path d="m4 9 8 8 8-8"></path>
    </svg>`}};wr.styles=[b`
      :host {
        display: inline-block;
        width: 12px;
        vertical-align: middle;
      }

      svg {
        transform-origin: 50% 50%;
        transition: transform 100ms cubic-bezier(0.1, 0, 0.9, 1);

      :host([open]) svg {
        transform: rotate(180deg);
      }
    `],Ul([a({type:Boolean,reflect:!0})],wr.prototype,"open",2),wr=Ul([v("uui-caret")],wr);var ap=Object.getOwnPropertyDescriptor,lp=(e,t,i,o)=>{for(var r=o>1?void 0:o?ap(t,i):t,s=e.length-1,n;s>=0;s--)(n=e[s])&&(r=n(r)||r);return r};let xr=class extends we{renderCheckbox(){return l`
      <div id="ticker">
        <div id="icon-check">
          ${this.indeterminate?Od:Eo}
        </div>
      </div>
    `}};xr.formAssociated=!0,xr.styles=[...we.styles,xo,b`
      :host {
        --uui-checkbox-size: 18px;
      }

      #ticker {
        position: relative;
        grid-area: 'input';
        display: flex;
        align-items: center;
        justify-content: center;
        flex-shrink: 0;

        box-sizing: border-box;
        width: var(--uui-checkbox-size);
        height: var(--uui-checkbox-size);
        border-radius: var(
          --uui-checkbox-border-radius,
          var(--uui-border-radius,3px)
        );

        color: var(--uui-toggle-color, var(--uui-color-selected-contrast,#fff));
        background-color: var(
          --uui-toggle-background-color,
          var(--uui-color-surface,#fff)
        );
        border: 1px solid
          var(--uui-checkbox-border-color, var(--uui-color-border-standalone,#c2c2c2));
        font-size: calc(var(--uui-checkbox-size) * 0.7);
      }
      label:hover input:not([disabled]) + #ticker {
        border-color: var(
          --uui-checkbox-border-color-hover,
          var(--uui-color-border-emphasis,#a1a1a1)
        );
        background-color: var(
          --uui-checkbox-background-color-hover,
          var(--uui-color-surface-emphasis,rgb(250, 250, 250))
        );
      }
      label:focus #ticker {
        border-color: var(
          --uui-checkbox-border-color-focus,
          var(--uui-color-border-emphasis,#a1a1a1)
        );
        background-color: var(
          --uui-checkbox-background-color-focus,
          var(--uui-color-surface-emphasis,rgb(250, 250, 250))
        );
      }
      input:checked:not([disabled]) + #ticker,
      input:indeterminate:not([disabled]) + #ticker {
        border-color: var(--uui-color-selected,#3544b1);
      }

      label:hover input:checked:not([disabled]) + #ticker,
      label:hover input:indeterminate:not([disabled]) + #ticker {
        border-color: var(--uui-color-selected-emphasis,rgb(70, 86, 200));
      }

      label:focus input:checked + #ticker,
      label:focus input:indeterminate + #ticker {
        border-color: var(--uui-color-selected-emphasis,rgb(70, 86, 200));
      }

      #icon-check {
        position: absolute;
        vertical-align: middle;
        width: 1em;
        height: 1em;
        line-height: 0;
        transition:
          fill 120ms,
          opacity 120ms;
        color: var(--uui-color-selected-contrast,#fff);
        opacity: 0;
      }

      #ticker::before {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        bottom: 0;
        right: 0;
        border-radius: calc(
          var(--uui-checkbox-border-radius, var(--uui-border-radius,3px)) * 0.5
        );
        background-color: var(--uui-color-selected,#3544b1);
        transition:
          transform 120ms ease,
          opacity 120ms,
          background-color 120ms;
        transform: scale(0);
        opacity: 0;
      }
      label:hover input:checked:not([disabled]) + #ticker::before,
      label:hover input:indeterminate:not([disabled]) + #ticker::before {
        background-color: var(--uui-color-selected-emphasis,rgb(70, 86, 200));
      }

      input:checked + #ticker::before,
      input:indeterminate + #ticker::before {
        transform: scale(1);
        opacity: 1;
      }
      input:checked + #ticker #icon-check,
      input:indeterminate + #ticker #icon-check {
        opacity: 1;
      }
      label:focus input:checked + #ticker,
      label:focus input:indeterminate + #ticker {
        background-color: var(--uui-color-selected-emphasis,rgb(70, 86, 200));
      }

      input:focus + #ticker {
        outline: calc(2px * var(--uui-show-focus-outline, 1)) solid
          var(--uui-color-focus,#3879ff);
      }

      :host(:not([disabled], [readonly]))
        label:active
        input:checked
        + #ticker::before {
        /** Stretch when mouse down */
        transform: scale(0.9);
      }

      :host(:not([disabled], [readonly]))
        label:active
        input:indeterminate
        + #ticker::before {
        /** Stretch when mouse down */
        transform: scale(0.9);
      }

      :host(:not([pristine]):invalid) #ticker,
      :host(:not([pristine]):invalid) label:hover #ticker,
      :host(:not([pristine]):invalid) label:hover input:checked:not([disabled]) + #ticker,
      :host(:not([pristine]):invalid) label:hover input:indeterminate:not([disabled]) + #ticker,
      :host(:not([pristine]):invalid) label:focus input:checked + #ticker,
      :host(:not([pristine]):invalid) label:focus input:indeterminate + #ticker,
      /* polyfill support */
      :host(:not([pristine])[internals-invalid]) #ticker,
      :host(:not([pristine])[internals-invalid]) label:hover #ticker,
      :host(:not([pristine])[internals-invalid]) label:hover input:checked:not([disabled]) + #ticker,
      :host(:not([pristine])[internals-invalid]) label:hover input:indeterminate:not([disabled]) + #ticker,
      :host(:not([pristine])[internals-invalid]) label:focus input:checked + #ticker,
      :host(:not([pristine])[internals-invalid]) label:focus input:indeterminate + #ticker {
        border: 1px solid var(--uui-color-invalid-standalone,rgb(191, 33, 78));
      }

      :host([disabled]) #ticker {
        background-color: var(--uui-color-disabled,#f3f3f5);
      }
      :host([disabled]) input:checked + #ticker {
        background-color: var(--uui-color-disabled,#f3f3f5);
      }
      :host([disabled]) input:indeterminate + #ticker {
        background-color: var(--uui-color-disabled,#f3f3f5);
      }
      :host([disabled]) #ticker::before {
        background-color: var(--uui-color-disabled,#f3f3f5);
      }
      :host([disabled]) #ticker #icon-check {
        color: var(--uui-color-disabled-contrast,#c4c4c4);
      }
      :host([disabled]) label:active #ticker {
        animation: ${$o};
      }
      :host([disabled]) input:checked + #ticker #icon-check,
      :host([disabled]) input:indeterminate + #ticker #icon-check {
        color: var(--uui-color-disabled-contrast,#c4c4c4);
      }
    `],xr=lp([v("uui-checkbox")],xr);/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const un=mi(class extends _i{constructor(e){if(super(e),e.type!==Pe.ATTRIBUTE||e.name!=="class"||e.strings?.length>2)throw Error("`classMap()` can only be used in the `class` attribute and must be the only part in the attribute.")}render(e){return" "+Object.keys(e).filter(t=>e[t]).join(" ")+" "}update(e,[t]){if(this.st===void 0){this.st=new Set,e.strings!==void 0&&(this.nt=new Set(e.strings.join(" ").split(/\s/).filter(o=>o!=="")));for(const o in t)t[o]&&!this.nt?.has(o)&&this.st.add(o);return this.render(t)}const i=e.element.classList;for(const o of this.st)o in t||(i.remove(o),this.st.delete(o));for(const o in t){const r=!!t[o];r===this.st.has(o)||this.nt?.has(o)||(r?(i.add(o),this.st.add(o)):(i.remove(o),this.st.delete(o)))}return ue}});var up={grad:.9,turn:360,rad:360/(2*Math.PI)},Xe=function(e){return typeof e=="string"?e.length>0:typeof e=="number"},Y=function(e,t,i){return t===void 0&&(t=0),i===void 0&&(i=Math.pow(10,t)),Math.round(i*e)/i+0},xe=function(e,t,i){return t===void 0&&(t=0),i===void 0&&(i=1),e>i?i:e>t?e:t},zl=function(e){return(e=isFinite(e)?e%360:0)>0?e:e+360},Ml=function(e){return{r:xe(e.r,0,255),g:xe(e.g,0,255),b:xe(e.b,0,255),a:xe(e.a)}},cn=function(e){return{r:Y(e.r),g:Y(e.g),b:Y(e.b),a:Y(e.a,3)}},cp=/^#([0-9a-f]{3,8})$/i,Mo=function(e){var t=e.toString(16);return t.length<2?"0"+t:t},Dl=function(e){var t=e.r,i=e.g,o=e.b,r=e.a,s=Math.max(t,i,o),n=s-Math.min(t,i,o),u=n?s===t?(i-o)/n:s===i?2+(o-t)/n:4+(t-i)/n:0;return{h:60*(u<0?u+6:u),s:s?n/s*100:0,v:s/255*100,a:r}},Ll=function(e){var t=e.h,i=e.s,o=e.v,r=e.a;t=t/360*6,i/=100,o/=100;var s=Math.floor(t),n=o*(1-i),u=o*(1-(t-s)*i),c=o*(1-(1-t+s)*i),p=s%6;return{r:255*[o,u,n,n,c,o][p],g:255*[c,o,o,u,n,n][p],b:255*[n,n,c,o,o,u][p],a:r}},Tl=function(e){return{h:zl(e.h),s:xe(e.s,0,100),l:xe(e.l,0,100),a:xe(e.a)}},Vl=function(e){return{h:Y(e.h),s:Y(e.s),l:Y(e.l),a:Y(e.a,3)}},Nl=function(e){return Ll((i=(t=e).s,{h:t.h,s:(i*=((o=t.l)<50?o:100-o)/100)>0?2*i/(o+i)*100:0,v:o+i,a:t.a}));var t,i,o},$r=function(e){return{h:(t=Dl(e)).h,s:(r=(200-(i=t.s))*(o=t.v)/100)>0&&r<200?i*o/100/(r<=100?r:200-r)*100:0,l:r/2,a:t.a};var t,i,o,r},hp=/^hsla?\(\s*([+-]?\d*\.?\d+)(deg|rad|grad|turn)?\s*,\s*([+-]?\d*\.?\d+)%\s*,\s*([+-]?\d*\.?\d+)%\s*(?:,\s*([+-]?\d*\.?\d+)(%)?\s*)?\)$/i,dp=/^hsla?\(\s*([+-]?\d*\.?\d+)(deg|rad|grad|turn)?\s+([+-]?\d*\.?\d+)%\s+([+-]?\d*\.?\d+)%\s*(?:\/\s*([+-]?\d*\.?\d+)(%)?\s*)?\)$/i,pp=/^rgba?\(\s*([+-]?\d*\.?\d+)(%)?\s*,\s*([+-]?\d*\.?\d+)(%)?\s*,\s*([+-]?\d*\.?\d+)(%)?\s*(?:,\s*([+-]?\d*\.?\d+)(%)?\s*)?\)$/i,vp=/^rgba?\(\s*([+-]?\d*\.?\d+)(%)?\s+([+-]?\d*\.?\d+)(%)?\s+([+-]?\d*\.?\d+)(%)?\s*(?:\/\s*([+-]?\d*\.?\d+)(%)?\s*)?\)$/i,Bl={string:[[function(e){var t=cp.exec(e);return t?(e=t[1]).length<=4?{r:parseInt(e[0]+e[0],16),g:parseInt(e[1]+e[1],16),b:parseInt(e[2]+e[2],16),a:e.length===4?Y(parseInt(e[3]+e[3],16)/255,2):1}:e.length===6||e.length===8?{r:parseInt(e.substr(0,2),16),g:parseInt(e.substr(2,2),16),b:parseInt(e.substr(4,2),16),a:e.length===8?Y(parseInt(e.substr(6,2),16)/255,2):1}:null:null},"hex"],[function(e){var t=pp.exec(e)||vp.exec(e);return t?t[2]!==t[4]||t[4]!==t[6]?null:Ml({r:Number(t[1])/(t[2]?100/255:1),g:Number(t[3])/(t[4]?100/255:1),b:Number(t[5])/(t[6]?100/255:1),a:t[7]===void 0?1:Number(t[7])/(t[8]?100:1)}):null},"rgb"],[function(e){var t=hp.exec(e)||dp.exec(e);if(!t)return null;var i,o,r=Tl({h:(i=t[1],o=t[2],o===void 0&&(o="deg"),Number(i)*(up[o]||1)),s:Number(t[3]),l:Number(t[4]),a:t[5]===void 0?1:Number(t[5])/(t[6]?100:1)});return Nl(r)},"hsl"]],object:[[function(e){var t=e.r,i=e.g,o=e.b,r=e.a,s=r===void 0?1:r;return Xe(t)&&Xe(i)&&Xe(o)?Ml({r:Number(t),g:Number(i),b:Number(o),a:Number(s)}):null},"rgb"],[function(e){var t=e.h,i=e.s,o=e.l,r=e.a,s=r===void 0?1:r;if(!Xe(t)||!Xe(i)||!Xe(o))return null;var n=Tl({h:Number(t),s:Number(i),l:Number(o),a:Number(s)});return Nl(n)},"hsl"],[function(e){var t=e.h,i=e.s,o=e.v,r=e.a,s=r===void 0?1:r;if(!Xe(t)||!Xe(i)||!Xe(o))return null;var n=function(u){return{h:zl(u.h),s:xe(u.s,0,100),v:xe(u.v,0,100),a:xe(u.a)}}({h:Number(t),s:Number(i),v:Number(o),a:Number(s)});return Ll(n)},"hsv"]]},Hl=function(e,t){for(var i=0;i<t.length;i++){var o=t[i][0](e);if(o)return[o,t[i][1]]}return[null,void 0]},fp=function(e){return typeof e=="string"?Hl(e.trim(),Bl.string):typeof e=="object"&&e!==null?Hl(e,Bl.object):[null,void 0]},hn=function(e,t){var i=$r(e);return{h:i.h,s:xe(i.s+100*t,0,100),l:i.l,a:i.a}},dn=function(e){return(299*e.r+587*e.g+114*e.b)/1e3/255},jl=function(e,t){var i=$r(e);return{h:i.h,s:i.s,l:xe(i.l+100*t,0,100),a:i.a}},Rl=function(){function e(t){this.parsed=fp(t)[0],this.rgba=this.parsed||{r:0,g:0,b:0,a:1}}return e.prototype.isValid=function(){return this.parsed!==null},e.prototype.brightness=function(){return Y(dn(this.rgba),2)},e.prototype.isDark=function(){return dn(this.rgba)<.5},e.prototype.isLight=function(){return dn(this.rgba)>=.5},e.prototype.toHex=function(){return t=cn(this.rgba),i=t.r,o=t.g,r=t.b,n=(s=t.a)<1?Mo(Y(255*s)):"","#"+Mo(i)+Mo(o)+Mo(r)+n;var t,i,o,r,s,n},e.prototype.toRgb=function(){return cn(this.rgba)},e.prototype.toRgbString=function(){return t=cn(this.rgba),i=t.r,o=t.g,r=t.b,(s=t.a)<1?"rgba("+i+", "+o+", "+r+", "+s+")":"rgb("+i+", "+o+", "+r+")";var t,i,o,r,s},e.prototype.toHsl=function(){return Vl($r(this.rgba))},e.prototype.toHslString=function(){return t=Vl($r(this.rgba)),i=t.h,o=t.s,r=t.l,(s=t.a)<1?"hsla("+i+", "+o+"%, "+r+"%, "+s+")":"hsl("+i+", "+o+"%, "+r+"%)";var t,i,o,r,s},e.prototype.toHsv=function(){return t=Dl(this.rgba),{h:Y(t.h),s:Y(t.s),v:Y(t.v),a:Y(t.a,3)};var t},e.prototype.invert=function(){return $e({r:255-(t=this.rgba).r,g:255-t.g,b:255-t.b,a:t.a});var t},e.prototype.saturate=function(t){return t===void 0&&(t=.1),$e(hn(this.rgba,t))},e.prototype.desaturate=function(t){return t===void 0&&(t=.1),$e(hn(this.rgba,-t))},e.prototype.grayscale=function(){return $e(hn(this.rgba,-1))},e.prototype.lighten=function(t){return t===void 0&&(t=.1),$e(jl(this.rgba,t))},e.prototype.darken=function(t){return t===void 0&&(t=.1),$e(jl(this.rgba,-t))},e.prototype.rotate=function(t){return t===void 0&&(t=15),this.hue(this.hue()+t)},e.prototype.alpha=function(t){return typeof t=="number"?$e({r:(i=this.rgba).r,g:i.g,b:i.b,a:t}):Y(this.rgba.a,3);var i},e.prototype.hue=function(t){var i=$r(this.rgba);return typeof t=="number"?$e({h:t,s:i.s,l:i.l,a:i.a}):Y(i.h)},e.prototype.isEqual=function(t){return this.toHex()===$e(t).toHex()},e}(),$e=function(e){return e instanceof Rl?e:new Rl(e)};class Do extends A{constructor(t,i={}){super(t,{bubbles:!0,...i})}}Do.CHANGE="change";var bp=Object.defineProperty,gp=Object.getOwnPropertyDescriptor,Ve=(e,t,i,o)=>{for(var r=o>1?void 0:o?gp(t,i):t,s=e.length-1,n;s>=0;s--)(n=e[s])&&(r=(o?n(t,i,r):n(r))||r);return o&&r&&bp(t,i,r),r};let ve=class extends g{constructor(){super(...arguments),this.isDraggingGridHandle=!1,this.disabled=!1,this.readonly=!1,this.hue=0,this.saturation=0,this.lightness=0,this.brightness=0,this.alpha=100,this._value="#000"}get value(){return this._value}set value(e){const t=this._value;this._value=e,this.requestUpdate("value",t);try{const i=$e(e);if(i.isValid()){const{h:o,l:r,a:s}=i.toHsl();o!==0&&(this.hue=o),this.lightness=r,this.brightness=this.getBrightness(r),this.alpha=s*100}}catch(i){console.error("Something went wrong parsing the color string.",i)}}handleGridDrag(e){if(this.disabled||this.readonly)return;const t=this.shadowRoot.querySelector(".color-area"),i=t.querySelector(".color-area__handle"),{width:o,height:r}=t.getBoundingClientRect();i.focus(),e.preventDefault(),e.stopPropagation(),this.isDraggingGridHandle=!0,dl(t,{onMove:(s,n)=>{isNaN(s)||isNaN(n)||(this.saturation=M(s/o*100,0,100),this.brightness=M(100-n/r*100,0,100),this.lightness=this.getLightness(this.brightness),this.syncValues())},onStop:()=>this.isDraggingGridHandle=!1,initialEvent:e})}handleGridKeyDown(e){if(this.disabled)return;const t=e.shiftKey?10:1;e.key==="ArrowLeft"&&(e.preventDefault(),this.saturation=M(this.saturation-t,0,100),this.syncValues()),e.key==="ArrowRight"&&(e.preventDefault(),this.saturation=M(this.saturation+t,0,100),this.syncValues()),e.key==="ArrowUp"&&(e.preventDefault(),this.brightness=M(this.brightness+t,0,100),this.lightness=this.getLightness(this.brightness),this.syncValues()),e.key==="ArrowDown"&&(e.preventDefault(),this.brightness=M(this.brightness-t,0,100),this.lightness=this.getLightness(this.brightness),this.syncValues())}getBrightness(e){return M(-1*(200*e/(this.saturation-200)),0,100)}getLightness(e){return M((200-this.saturation)*e/100*5/10,0,100)}syncValues(){const e=$e({h:this.hue,s:this.saturation,l:this.lightness,a:this.alpha/100});this._value=e.toRgbString(),this.dispatchEvent(new Do(Do.CHANGE))}getHexString(e,t,i,o=100){const r=$e(`hsla(${e}, ${t}%, ${i}%, ${o/100})`);return r.isValid()?r.toHex():""}render(){const e=this.saturation,t=100-this.brightness;return l`
      <div
        part="grid"
        class="color-area"
        style=${Ye({backgroundColor:this.getHexString(this.hue,100,50)})}
        @mousedown=${this.handleGridDrag}
        @touchstart=${this.handleGridDrag}>
        <span
          part="grid-handle"
          class=${un({"color-area__handle":!0,"color-area__handle--dragging":this.isDraggingGridHandle})}
          style=${Ye({top:`${t}%`,left:`${e}%`,backgroundColor:this.getHexString(this.hue,this.saturation,this.lightness,this.alpha)})}
          role="application"
          tabindex=${w(this.disabled?void 0:"0")}
          aria-label="HSB"
          @keydown=${this.handleGridKeyDown}></span>
      </div>
    `}};ve.styles=[b`
      :host {
        display: inline-block;
        width: 280px;
        height: 200px;
      }

      :host([disabled]) {
        cursor: not-allowed;
      }

      :host([disabled]) .color-area {
        user-select: none;
        pointer-events: none;
        opacity: 0.55;
      }

      :host([readonly]) {
        pointer-events: none;
        cursor: default;
      }

      .color-area {
        position: relative;
        height: 100%;
        width: 100%;
        background-image: linear-gradient(
            to bottom,
            rgba(0, 0, 0, 0) 0%,
            rgba(0, 0, 0, 1) 100%
          ),
          linear-gradient(to right, #fff 0%, rgba(255, 255, 255, 0) 100%);
        box-sizing: border-box;
        cursor: crosshair;
        forced-color-adjust: none;
      }
      .color-area__handle {
        position: absolute;
        width: var(--uui-color-area-grid-handle-size, 16px);
        height: var(--uui-color-area-grid-handle-size, 16px);
        border-radius: 50%;
        box-shadow: 0 0 0 1px rgba(0, 0, 0, 0.25);
        border: solid 2px white;
        margin-top: calc(var(--uui-color-area-grid-handle-size, 16px) / -2);
        margin-left: calc(var(--uui-color-area-grid-handle-size, 16px) / -2);
        transition: 150ms transform;
        box-sizing: inherit;
      }
      .color-area__handle--dragging {
        cursor: none;
        transform: scale(1.5);
      }
      .color-area__handle--empty {
        display: none;
      }
    `],Ve([_()],ve.prototype,"isDraggingGridHandle",2),Ve([a({type:Boolean,reflect:!0})],ve.prototype,"disabled",2),Ve([a({type:Boolean,reflect:!0})],ve.prototype,"readonly",2),Ve([a({type:Number})],ve.prototype,"hue",2),Ve([a({type:Number})],ve.prototype,"saturation",2),Ve([a({type:Number})],ve.prototype,"lightness",2),Ve([a({type:Number})],ve.prototype,"brightness",2),Ve([a({type:Number})],ve.prototype,"alpha",2),Ve([a({type:String})],ve.prototype,"value",1),ve=Ve([v("uui-color-area")],ve);/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const{I:mp}=Mc,Wl=e=>e.strings===void 0,Fl=()=>document.createComment(""),kr=(e,t,i)=>{const o=e._$AA.parentNode,r=t===void 0?e._$AB:t._$AA;if(i===void 0){const s=o.insertBefore(Fl(),r),n=o.insertBefore(Fl(),r);i=new mp(s,n,e,e.options)}else{const s=i._$AB.nextSibling,n=i._$AM,u=n!==e;if(u){let c;i._$AQ?.(e),i._$AM=e,i._$AP!==void 0&&(c=e._$AU)!==n._$AU&&i._$AP(c)}if(s!==r||u){let c=i._$AA;for(;c!==s;){const p=c.nextSibling;o.insertBefore(c,r),c=p}}}return i},Yt=(e,t,i=e)=>(e._$AI(t,i),e),_p={},Gl=(e,t=_p)=>e._$AH=t,yp=e=>e._$AH,pn=e=>{e._$AP?.(!1,!0);let t=e._$AA;const i=e._$AB.nextSibling;for(;t!==i;){const o=t.nextSibling;t.remove(),t=o}};/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const wp=mi(class extends _i{constructor(e){if(super(e),e.type!==Pe.PROPERTY&&e.type!==Pe.ATTRIBUTE&&e.type!==Pe.BOOLEAN_ATTRIBUTE)throw Error("The `live` directive is not allowed on child or event bindings");if(!Wl(e))throw Error("`live` bindings can only contain a single expression")}render(e){return e}update(e,[t]){if(t===ue||t===E)return t;const i=e.element,o=e.name;if(e.type===Pe.PROPERTY){if(t===i[o])return ue}else if(e.type===Pe.BOOLEAN_ATTRIBUTE){if(!!t===i.hasAttribute(o))return ue}else if(e.type===Pe.ATTRIBUTE&&i.getAttribute(o)===t+"")return ue;return Gl(e),t}});var xp={grad:.9,turn:360,rad:360/(2*Math.PI)},Ze=function(e){return typeof e=="string"?e.length>0:typeof e=="number"},X=function(e,t,i){return t===void 0&&(t=0),i===void 0&&(i=Math.pow(10,t)),Math.round(i*e)/i+0},ke=function(e,t,i){return t===void 0&&(t=0),i===void 0&&(i=1),e>i?i:e>t?e:t},ql=function(e){return(e=isFinite(e)?e%360:0)>0?e:e+360},Kl=function(e){return{r:ke(e.r,0,255),g:ke(e.g,0,255),b:ke(e.b,0,255),a:ke(e.a)}},vn=function(e){return{r:X(e.r),g:X(e.g),b:X(e.b),a:X(e.a,3)}},$p=/^#([0-9a-f]{3,8})$/i,Lo=function(e){var t=e.toString(16);return t.length<2?"0"+t:t},Yl=function(e){var t=e.r,i=e.g,o=e.b,r=e.a,s=Math.max(t,i,o),n=s-Math.min(t,i,o),u=n?s===t?(i-o)/n:s===i?2+(o-t)/n:4+(t-i)/n:0;return{h:60*(u<0?u+6:u),s:s?n/s*100:0,v:s/255*100,a:r}},Xl=function(e){var t=e.h,i=e.s,o=e.v,r=e.a;t=t/360*6,i/=100,o/=100;var s=Math.floor(t),n=o*(1-i),u=o*(1-(t-s)*i),c=o*(1-(1-t+s)*i),p=s%6;return{r:255*[o,u,n,n,c,o][p],g:255*[c,o,o,u,n,n][p],b:255*[n,n,c,o,o,u][p],a:r}},Zl=function(e){return{h:ql(e.h),s:ke(e.s,0,100),l:ke(e.l,0,100),a:ke(e.a)}},Ql=function(e){return{h:X(e.h),s:X(e.s),l:X(e.l),a:X(e.a,3)}},Jl=function(e){return Xl((i=(t=e).s,{h:t.h,s:(i*=((o=t.l)<50?o:100-o)/100)>0?2*i/(o+i)*100:0,v:o+i,a:t.a}));var t,i,o},Cr=function(e){return{h:(t=Yl(e)).h,s:(r=(200-(i=t.s))*(o=t.v)/100)>0&&r<200?i*o/100/(r<=100?r:200-r)*100:0,l:r/2,a:t.a};var t,i,o,r},kp=/^hsla?\(\s*([+-]?\d*\.?\d+)(deg|rad|grad|turn)?\s*,\s*([+-]?\d*\.?\d+)%\s*,\s*([+-]?\d*\.?\d+)%\s*(?:,\s*([+-]?\d*\.?\d+)(%)?\s*)?\)$/i,Cp=/^hsla?\(\s*([+-]?\d*\.?\d+)(deg|rad|grad|turn)?\s+([+-]?\d*\.?\d+)%\s+([+-]?\d*\.?\d+)%\s*(?:\/\s*([+-]?\d*\.?\d+)(%)?\s*)?\)$/i,Ep=/^rgba?\(\s*([+-]?\d*\.?\d+)(%)?\s*,\s*([+-]?\d*\.?\d+)(%)?\s*,\s*([+-]?\d*\.?\d+)(%)?\s*(?:,\s*([+-]?\d*\.?\d+)(%)?\s*)?\)$/i,Pp=/^rgba?\(\s*([+-]?\d*\.?\d+)(%)?\s+([+-]?\d*\.?\d+)(%)?\s+([+-]?\d*\.?\d+)(%)?\s*(?:\/\s*([+-]?\d*\.?\d+)(%)?\s*)?\)$/i,fn={string:[[function(e){var t=$p.exec(e);return t?(e=t[1]).length<=4?{r:parseInt(e[0]+e[0],16),g:parseInt(e[1]+e[1],16),b:parseInt(e[2]+e[2],16),a:e.length===4?X(parseInt(e[3]+e[3],16)/255,2):1}:e.length===6||e.length===8?{r:parseInt(e.substr(0,2),16),g:parseInt(e.substr(2,2),16),b:parseInt(e.substr(4,2),16),a:e.length===8?X(parseInt(e.substr(6,2),16)/255,2):1}:null:null},"hex"],[function(e){var t=Ep.exec(e)||Pp.exec(e);return t?t[2]!==t[4]||t[4]!==t[6]?null:Kl({r:Number(t[1])/(t[2]?100/255:1),g:Number(t[3])/(t[4]?100/255:1),b:Number(t[5])/(t[6]?100/255:1),a:t[7]===void 0?1:Number(t[7])/(t[8]?100:1)}):null},"rgb"],[function(e){var t=kp.exec(e)||Cp.exec(e);if(!t)return null;var i,o,r=Zl({h:(i=t[1],o=t[2],o===void 0&&(o="deg"),Number(i)*(xp[o]||1)),s:Number(t[3]),l:Number(t[4]),a:t[5]===void 0?1:Number(t[5])/(t[6]?100:1)});return Jl(r)},"hsl"]],object:[[function(e){var t=e.r,i=e.g,o=e.b,r=e.a,s=r===void 0?1:r;return Ze(t)&&Ze(i)&&Ze(o)?Kl({r:Number(t),g:Number(i),b:Number(o),a:Number(s)}):null},"rgb"],[function(e){var t=e.h,i=e.s,o=e.l,r=e.a,s=r===void 0?1:r;if(!Ze(t)||!Ze(i)||!Ze(o))return null;var n=Zl({h:Number(t),s:Number(i),l:Number(o),a:Number(s)});return Jl(n)},"hsl"],[function(e){var t=e.h,i=e.s,o=e.v,r=e.a,s=r===void 0?1:r;if(!Ze(t)||!Ze(i)||!Ze(o))return null;var n=function(u){return{h:ql(u.h),s:ke(u.s,0,100),v:ke(u.v,0,100),a:ke(u.a)}}({h:Number(t),s:Number(i),v:Number(o),a:Number(s)});return Xl(n)},"hsv"]]},eu=function(e,t){for(var i=0;i<t.length;i++){var o=t[i][0](e);if(o)return[o,t[i][1]]}return[null,void 0]},Sp=function(e){return typeof e=="string"?eu(e.trim(),fn.string):typeof e=="object"&&e!==null?eu(e,fn.object):[null,void 0]},bn=function(e,t){var i=Cr(e);return{h:i.h,s:ke(i.s+100*t,0,100),l:i.l,a:i.a}},gn=function(e){return(299*e.r+587*e.g+114*e.b)/1e3/255},tu=function(e,t){var i=Cr(e);return{h:i.h,s:i.s,l:ke(i.l+100*t,0,100),a:i.a}},To=function(){function e(t){this.parsed=Sp(t)[0],this.rgba=this.parsed||{r:0,g:0,b:0,a:1}}return e.prototype.isValid=function(){return this.parsed!==null},e.prototype.brightness=function(){return X(gn(this.rgba),2)},e.prototype.isDark=function(){return gn(this.rgba)<.5},e.prototype.isLight=function(){return gn(this.rgba)>=.5},e.prototype.toHex=function(){return t=vn(this.rgba),i=t.r,o=t.g,r=t.b,n=(s=t.a)<1?Lo(X(255*s)):"","#"+Lo(i)+Lo(o)+Lo(r)+n;var t,i,o,r,s,n},e.prototype.toRgb=function(){return vn(this.rgba)},e.prototype.toRgbString=function(){return t=vn(this.rgba),i=t.r,o=t.g,r=t.b,(s=t.a)<1?"rgba("+i+", "+o+", "+r+", "+s+")":"rgb("+i+", "+o+", "+r+")";var t,i,o,r,s},e.prototype.toHsl=function(){return Ql(Cr(this.rgba))},e.prototype.toHslString=function(){return t=Ql(Cr(this.rgba)),i=t.h,o=t.s,r=t.l,(s=t.a)<1?"hsla("+i+", "+o+"%, "+r+"%, "+s+")":"hsl("+i+", "+o+"%, "+r+"%)";var t,i,o,r,s},e.prototype.toHsv=function(){return t=Yl(this.rgba),{h:X(t.h),s:X(t.s),v:X(t.v),a:X(t.a,3)};var t},e.prototype.invert=function(){return Oe({r:255-(t=this.rgba).r,g:255-t.g,b:255-t.b,a:t.a});var t},e.prototype.saturate=function(t){return t===void 0&&(t=.1),Oe(bn(this.rgba,t))},e.prototype.desaturate=function(t){return t===void 0&&(t=.1),Oe(bn(this.rgba,-t))},e.prototype.grayscale=function(){return Oe(bn(this.rgba,-1))},e.prototype.lighten=function(t){return t===void 0&&(t=.1),Oe(tu(this.rgba,t))},e.prototype.darken=function(t){return t===void 0&&(t=.1),Oe(tu(this.rgba,-t))},e.prototype.rotate=function(t){return t===void 0&&(t=15),this.hue(this.hue()+t)},e.prototype.alpha=function(t){return typeof t=="number"?Oe({r:(i=this.rgba).r,g:i.g,b:i.b,a:t}):X(this.rgba.a,3);var i},e.prototype.hue=function(t){var i=Cr(this.rgba);return typeof t=="number"?Oe({h:t,s:i.s,l:i.l,a:i.a}):X(i.h)},e.prototype.isEqual=function(t){return this.toHex()===Oe(t).toHex()},e}(),Oe=function(e){return e instanceof To?e:new To(e)},iu=[],Op=function(e){e.forEach(function(t){iu.indexOf(t)<0&&(t(To,fn),iu.push(t))})};function Ip(e,t){var i={white:"#ffffff",bisque:"#ffe4c4",blue:"#0000ff",cadetblue:"#5f9ea0",chartreuse:"#7fff00",chocolate:"#d2691e",coral:"#ff7f50",antiquewhite:"#faebd7",aqua:"#00ffff",azure:"#f0ffff",whitesmoke:"#f5f5f5",papayawhip:"#ffefd5",plum:"#dda0dd",blanchedalmond:"#ffebcd",black:"#000000",gold:"#ffd700",goldenrod:"#daa520",gainsboro:"#dcdcdc",cornsilk:"#fff8dc",cornflowerblue:"#6495ed",burlywood:"#deb887",aquamarine:"#7fffd4",beige:"#f5f5dc",crimson:"#dc143c",cyan:"#00ffff",darkblue:"#00008b",darkcyan:"#008b8b",darkgoldenrod:"#b8860b",darkkhaki:"#bdb76b",darkgray:"#a9a9a9",darkgreen:"#006400",darkgrey:"#a9a9a9",peachpuff:"#ffdab9",darkmagenta:"#8b008b",darkred:"#8b0000",darkorchid:"#9932cc",darkorange:"#ff8c00",darkslateblue:"#483d8b",gray:"#808080",darkslategray:"#2f4f4f",darkslategrey:"#2f4f4f",deeppink:"#ff1493",deepskyblue:"#00bfff",wheat:"#f5deb3",firebrick:"#b22222",floralwhite:"#fffaf0",ghostwhite:"#f8f8ff",darkviolet:"#9400d3",magenta:"#ff00ff",green:"#008000",dodgerblue:"#1e90ff",grey:"#808080",honeydew:"#f0fff0",hotpink:"#ff69b4",blueviolet:"#8a2be2",forestgreen:"#228b22",lawngreen:"#7cfc00",indianred:"#cd5c5c",indigo:"#4b0082",fuchsia:"#ff00ff",brown:"#a52a2a",maroon:"#800000",mediumblue:"#0000cd",lightcoral:"#f08080",darkturquoise:"#00ced1",lightcyan:"#e0ffff",ivory:"#fffff0",lightyellow:"#ffffe0",lightsalmon:"#ffa07a",lightseagreen:"#20b2aa",linen:"#faf0e6",mediumaquamarine:"#66cdaa",lemonchiffon:"#fffacd",lime:"#00ff00",khaki:"#f0e68c",mediumseagreen:"#3cb371",limegreen:"#32cd32",mediumspringgreen:"#00fa9a",lightskyblue:"#87cefa",lightblue:"#add8e6",midnightblue:"#191970",lightpink:"#ffb6c1",mistyrose:"#ffe4e1",moccasin:"#ffe4b5",mintcream:"#f5fffa",lightslategray:"#778899",lightslategrey:"#778899",navajowhite:"#ffdead",navy:"#000080",mediumvioletred:"#c71585",powderblue:"#b0e0e6",palegoldenrod:"#eee8aa",oldlace:"#fdf5e6",paleturquoise:"#afeeee",mediumturquoise:"#48d1cc",mediumorchid:"#ba55d3",rebeccapurple:"#663399",lightsteelblue:"#b0c4de",mediumslateblue:"#7b68ee",thistle:"#d8bfd8",tan:"#d2b48c",orchid:"#da70d6",mediumpurple:"#9370db",purple:"#800080",pink:"#ffc0cb",skyblue:"#87ceeb",springgreen:"#00ff7f",palegreen:"#98fb98",red:"#ff0000",yellow:"#ffff00",slateblue:"#6a5acd",lavenderblush:"#fff0f5",peru:"#cd853f",palevioletred:"#db7093",violet:"#ee82ee",teal:"#008080",slategray:"#708090",slategrey:"#708090",aliceblue:"#f0f8ff",darkseagreen:"#8fbc8f",darkolivegreen:"#556b2f",greenyellow:"#adff2f",seagreen:"#2e8b57",seashell:"#fff5ee",tomato:"#ff6347",silver:"#c0c0c0",sienna:"#a0522d",lavender:"#e6e6fa",lightgreen:"#90ee90",orange:"#ffa500",orangered:"#ff4500",steelblue:"#4682b4",royalblue:"#4169e1",turquoise:"#40e0d0",yellowgreen:"#9acd32",salmon:"#fa8072",saddlebrown:"#8b4513",sandybrown:"#f4a460",rosybrown:"#bc8f8f",darksalmon:"#e9967a",lightgoldenrodyellow:"#fafad2",snow:"#fffafa",lightgrey:"#d3d3d3",lightgray:"#d3d3d3",dimgray:"#696969",dimgrey:"#696969",olivedrab:"#6b8e23",olive:"#808000"},o={};for(var r in i)o[i[r]]=r;var s={};e.prototype.toName=function(n){if(!(this.rgba.a||this.rgba.r||this.rgba.g||this.rgba.b))return"transparent";var u,c,p=o[this.toHex()];if(p)return p;if(n?.closest){var f=this.toRgb(),h=1/0,C="black";if(!s.length)for(var d in i)s[d]=new e(i[d]).toRgb();for(var y in i){var I=(u=f,c=s[y],Math.pow(u.r-c.r,2)+Math.pow(u.g-c.g,2)+Math.pow(u.b-c.b,2));I<h&&(h=I,C=y)}return C}},t.string.push([function(n){var u=n.toLowerCase(),c=u==="transparent"?"#0000":i[u];return c?new e(c).toRgb():null},"name"])}class Pi extends A{constructor(t,i={}){super(t,{bubbles:!0,...i})}}Pi.CHANGE="change";var Ap=Object.defineProperty,Up=Object.getOwnPropertyDescriptor,W=(e,t,i,o)=>{for(var r=o>1?void 0:o?Up(t,i):t,s=e.length-1,n;s>=0;s--)(n=e[s])&&(r=(o?n(t,i,r):n(r))||r);return o&&r&&Ap(t,i,r),r};Op([Ip]);const ru="EyeDropper"in window;let N=class extends Me("label",g){constructor(){super(...arguments),this._value="",this.inputValue="",this.hue=0,this.saturation=0,this.lightness=0,this.alpha=0,this._colord=Oe("hsl(0, 0%, 0%)"),this.format="hex",this.name="",this.size="medium",this.noFormatToggle=!1,this.inline=!1,this.disabled=!1,this.opacity=!1,this.readonly=!1,this.uppercase=!1,this.swatches=["#d0021b","#f5a623","#f8e71c","#8b572a","#7ed321","#417505","#bd10e0","#9013fe","#4a90e2","#50e3c2","#b8e986","#000","#444","#888","#ccc","#fff"]}set value(e){this.value!==e&&this.setColor(e),this._value=e}get value(){return this._value}connectedCallback(){super.connectedCallback(),x(this,"uui-icon"),x(this,"uui-icon-registry-essential"),x(this,"uui-input"),x(this,"uui-button"),x(this,"uui-button-group"),x(this,"uui-color-swatches"),x(this,"uui-color-swatch"),x(this,"uui-color-area"),x(this,"uui-color-slider"),x(this,"uui-popover-container")}getFormattedValue(e){const t=this.opacity?`${e}a`:e,i=this._colord.toHex(),o=i.length>7?i.substring(0,i.length-2):i,{r,g:s,b:n}=this._colord.toRgb(),{h:u,s:c,l:p}=this._colord.toHsl(),{v:f}=this._colord.toHsv(),h=this._colord.alpha();switch(t){case"hex":return this.setLetterCase(o);case"hexa":return this.setLetterCase(i);case"rgb":return this.setLetterCase(`rgb(${r}, ${s}, ${n})`);case"rgba":return this.setLetterCase(this._colord.toRgbString());case"hsl":return this.setLetterCase(`hsl(${u}, ${c}%, ${p}%)`);case"hsla":return this.setLetterCase(this._colord.toHslString());case"hsv":return this.setLetterCase(`hsv(${u}, ${c}%, ${p}%)`);case"hsva":return this.setLetterCase(`hsva(${u}, ${c}%, ${f}%, ${h})`);default:return""}}getBrightness(e){return M(-1*(200*e/(this.saturation-200)),0,100)}getLightness(e){return M((200-this.saturation)*e/100*5/10,0,100)}handleFormatToggle(){const e=["hex","rgb","hsl","hsv"],t=(e.indexOf(this.format)+1)%e.length;this.format=e[t],this._syncValues()}handleAlphaChange(e){e.stopPropagation(),this._swatches?.resetSelection();const t=e.target,i={h:this.hue,s:this.saturation,l:this.lightness,a:Math.round(t.value)/100};this.setColor(i)}handleHueChange(e){e.stopPropagation(),this._swatches?.resetSelection();const i={h:e.target.value,s:this.saturation,l:this.lightness,a:this.alpha/100};this.setColor(i)}handleGridChange(e){e.stopPropagation(),this._swatches?.resetSelection();const t=e.target,i={h:this.hue,s:t.saturation,l:t.lightness,a:this.alpha/100};this.setColor(i)}handleInputChange(e){e.stopImmediatePropagation(),this._swatches?.resetSelection(),this.inputValue=this._input.value,this.setColor(this.inputValue)}handleInputKeyDown(e){e.stopImmediatePropagation(),e.key==="Enter"&&(this._swatches?.resetSelection(),this.inputValue=this._input.value,this.setColor(this.inputValue),setTimeout(()=>this._input.select()))}handleColorSwatchChange(e){e.stopImmediatePropagation();const t=e.target;this.setColor(t.value)}handleCopy(){navigator.clipboard.writeText(this._input.value).then(()=>{this._previewButton.classList.add("color-picker__preview-color--copied"),this._previewButton.addEventListener("animationend",()=>{this._previewButton.classList.remove("color-picker__preview-color--copied")})})}handleEyeDropper(){if(!ru)return;new EyeDropper().open().then(t=>this.setColor(t.sRGBHex)).catch(()=>{})}setColor(e){if(e===this.value)return;if(!e)return this.alpha=0,this.inputValue="",this._value=e,this.dispatchEvent(new Pi(Pi.CHANGE)),!0;const t=new To(e),{h:i,s:o,l:r,a:s}=t.toHsl();this.hue=i,this.saturation=o,this.lightness=r,this.alpha=this.opacity?s*100:100;const n=e;return n&&n.h&&(this.hue=n.h),this._colord=t,this._syncValues(),this.dispatchEvent(new Pi(Pi.CHANGE)),!0}setLetterCase(e){return typeof e!="string"?"":this.uppercase?e.toUpperCase():e.toLowerCase()}getHexString(e,t,i,o=100){const r=Oe(`hsla(${e}, ${t}%, ${i}%, ${o/100})`);return r.isValid()?r.toHex():""}_syncValues(){this.inputValue=this.getFormattedValue(this.format),this._value=this.inputValue}_renderColorPicker(){return l`
      <div
        class=${un({"color-picker":!0,"color-picker--inline":this.inline,"color-picker--disabled":this.disabled})}
        aria-disabled=${this.disabled?"true":"false"}>
        <uui-color-area
          .value="${this.value}"
          .hue="${Math.round(this.hue)}"
          ?disabled=${this.disabled}
          ?readonly=${this.readonly}
          @change=${this.handleGridChange}>
        </uui-color-area>
        <div class="color-picker__controls">
          <div class="color-picker__sliders">
            <uui-color-slider
              label="hue"
              class="hue-slider"
              .value=${Math.round(this.hue)}
              ?disabled=${this.disabled}
              ?readonly=${this.readonly}
              @change=${this.handleHueChange}>
            </uui-color-slider>
            ${this.opacity?l`
                  <uui-color-slider
                    label="alpha"
                    class="opacity-slider"
                    .value=${Math.round(this.alpha)}
                    type="opacity"
                    .color=${this.getHexString(this.hue,this.saturation,this.lightness)}
                    ?disabled=${this.disabled}
                    ?readonly=${this.readonly}
                    @change=${this.handleAlphaChange}>
                  </uui-color-slider>
                `:""}
          </div>
          <button
            type="button"
            part="preview"
            class="color-picker__preview color-picker__transparent-bg"
            title="Copy"
            aria-label="Copy"
            style=${Ye({"--preview-color":`hsla(${this.hue}deg, ${this.saturation}%, ${this.lightness}%, ${this.alpha/100})`})}
            @click=${this.handleCopy}></button>
        </div>
        <div class="color-picker__user-input" aria-live="polite">
          <uui-input
            label="label"
            type="text"
            part="input"
            name=${this.name}
            autocomplete="off"
            autocapitalize="off"
            spellcheck="false"
            .value=${wp(this.inputValue)}
            ?disabled=${this.disabled}
            ?readonly=${this.readonly}
            @keydown=${this.handleInputKeyDown}
            @change=${this.handleInputChange}>
          </uui-input>
          <uui-button-group>
            ${this.noFormatToggle?"":l`<uui-button
                  label="Toggle color format"
                  @click=${this.handleFormatToggle}
                  class="color-picker__toggle-format"
                  ?disabled=${this.disabled}
                  compact>
                  <span>${this.format}</span>
                </uui-button>`}
            ${ru?l`<uui-button
                  label="Select a color"
                  ?disabled=${this.disabled||this.readonly}
                  @click=${this.handleEyeDropper}
                  compact>
                  <uui-icon-registry-essential>
                    <uui-icon name="colorpicker"></uui-icon>
                  </uui-icon-registry-essential>
                </uui-button>`:""}
          </uui-button-group>
        </div>
        ${this._renderSwatches()}
      </div>
    `}_renderSwatches(){return this.swatches?l`<uui-color-swatches
      id="swatches"
      class="color-picker__swatches"
      label="Swatches"
      ?disabled=${this.disabled}
      ?readonly=${this.readonly}
      @change=${this.handleColorSwatchChange}>
      ${this.swatches.map(e=>l`<uui-color-swatch label="${e}" .value=${e}>
          </uui-color-swatch>`)}
    </uui-color-swatches>`:E}_renderPreviewButton(){return l`<button
        type="button"
        part="trigger"
        aria-label="${this.label||"Open Color picker"}"
        class=${un({"color-picker__trigger":!0,"color-dropdown__trigger--disabled":this.disabled,"color-dropdown__trigger--small":this.size==="small","color-dropdown__trigger--medium":this.size==="medium","color-dropdown__trigger--large":this.size==="large","color-picker__transparent-bg":!0})}
        style=${Ye({"--preview-color":`hsla(${this.hue}deg, ${this.saturation}%, ${this.lightness}%, ${this.alpha/100})`})}
        ?disabled=${this.disabled}
        aria-haspopup="true"
        aria-expanded="false"
        popovertarget="color-picker-popover"></button>
      <uui-popover-container id="color-picker-popover">
        ${this._renderColorPicker()}
      </uui-popover-container>`}render(){return this.inline?this._renderColorPicker():this._renderPreviewButton()}};N.styles=[b`
      :host {
        --uui-look-outline-border: #ddd;
        --uui-look-outline-border-hover: #aaa;
        font-size: 0.8rem;
        display: block;
        width: var(--uui-color-picker-width, 280px);
      }
      :host > button {
        cursor: pointer;
      }
      uui-popover-container {
        width: inherit;
      }
      .color-picker {
        width: 100%;
        background-color: #fff;
        user-select: none;
        border: solid 1px #e4e4e7;
      }
      .color-picker__user-input {
        display: flex;
        padding: 0 0.75rem 0.75rem 0.75rem;
      }
      .color-picker__user-input uui-button {
        border: var(--uui-input-border-width, 1px) solid
          var(--uui-input-border-color, var(--uui-color-border,#d8d7d9));
        border-left: none;
      }
      .color-picker__preview,
      .color-picker__trigger {
        flex: 0 0 auto;
        display: inline-flex;
        align-items: center;
        justify-content: center;
        position: relative;
        width: 2.25rem;
        height: 2.25rem;
        border: none;
        border-radius: 50%;
        background: none;
      }
      .color-picker__preview {
        cursor: copy;
        margin-left: 0.75rem;
        border-radius: 50%;
      }
      .color-picker__trigger[disabled] {
        cursor: not-allowed;
        opacity: 0.5;
      }
      .color-picker__preview::before,
      .color-picker__trigger::before {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        border-radius: inherit;
        box-shadow: inset 0 0 0 1px rgba(0, 0, 0, 0.2);
        /* We use a custom property in lieu of currentColor because of https://bugs.webkit.org/show_bug.cgi?id=216780 */
        background-color: var(--preview-color);
      }

      .color-dropdown__trigger--empty::before {
        background-color: transparent;
      }

      .color-picker__transparent-bg {
        background-image: linear-gradient(
            45deg,
            var(--uui-palette-grey,#c4c4c4) 25%,
            transparent 25%
          ),
          linear-gradient(45deg, transparent 75%, var(--uui-palette-grey,#c4c4c4) 75%),
          linear-gradient(45deg, transparent 75%, var(--uui-palette-grey,#c4c4c4) 75%),
          linear-gradient(45deg, var(--uui-palette-grey,#c4c4c4) 25%, transparent 25%);
        background-size: 10px 10px;
        background-position:
          0 0,
          0 0,
          -5px -5px,
          5px 5px;
      }

      .color-picker__preview-color--copied {
        animation: pulse 0.75s;
      }

      @keyframes pulse {
        0% {
          box-shadow: 0 0 0 0 var(--uui-palette-space-cadet-light,rgb(38, 53, 110));
        }
        70% {
          box-shadow: 0 0 0 0.5rem transparent;
        }
        100% {
          box-shadow: 0 0 0 0 transparent;
        }
      }

      .color-picker__controls {
        padding: 0.75rem;
        display: flex;
        align-items: center;
      }
      .color-picker__sliders {
        flex: 1 1 auto;
      }

      uui-color-slider:not(:last-of-type) {
        margin-bottom: 1rem;
      }

      .color-picker__toggle-format {
        min-width: 45px;
        --uui-button-font-size: 0.8rem;
      }
      .color-picker__toggle-format > span {
        text-transform: uppercase;
      }

      uui-color-swatches {
        border-top: solid 1px #d4d4d8;
        padding: 0.75rem;
      }

      button[slot='trigger'] {
        border-radius: 50%;
        cursor: pointer;
        width: 36px;
        height: 36px;
      }

      uui-input {
        /*  lower the font size to avoid overflow with hlsa format */
        font-size: 0.85rem;
        box-sizing: content-box;
        flex: 1;
      }

      uui-color-area {
        width: 100%;
      }
    `],W([O('[part="input"]')],N.prototype,"_input",2),W([O(".color-picker__preview")],N.prototype,"_previewButton",2),W([O("#swatches")],N.prototype,"_swatches",2),W([_()],N.prototype,"inputValue",2),W([_()],N.prototype,"hue",2),W([_()],N.prototype,"saturation",2),W([_()],N.prototype,"lightness",2),W([_()],N.prototype,"alpha",2),W([_()],N.prototype,"_colord",2),W([a()],N.prototype,"value",1),W([a()],N.prototype,"format",2),W([a()],N.prototype,"name",2),W([a()],N.prototype,"size",2),W([a({attribute:"no-format-toggle",type:Boolean})],N.prototype,"noFormatToggle",2),W([a({type:Boolean,reflect:!0})],N.prototype,"inline",2),W([a({type:Boolean,reflect:!0})],N.prototype,"disabled",2),W([a({type:Boolean})],N.prototype,"opacity",2),W([a({type:Boolean,reflect:!0})],N.prototype,"readonly",2),W([a({type:Boolean})],N.prototype,"uppercase",2),W([a({attribute:!1})],N.prototype,"swatches",2),N=W([v("uui-color-picker")],N);class Vo extends A{constructor(t,i={}){super(t,{bubbles:!0,...i})}}Vo.CHANGE="change";var zp=Object.defineProperty,Mp=Object.getOwnPropertyDescriptor,Ne=(e,t,i,o)=>{for(var r=o>1?void 0:o?Mp(t,i):t,s=e.length-1,n;s>=0;s--)(n=e[s])&&(r=(o?n(t,i,r):n(r))||r);return o&&r&&zp(t,i,r),r};let fe=class extends Me("label",g){constructor(){super(...arguments),this.type="hue",this.color="",this.min=0,this.max=100,this.precision=1,this.vertical=!1,this.value=0,this.readonly=!1,this.disabled=!1}willUpdate(e){e.has("type")&&(this.type==="hue"?(this.max=360,this.precision=1):this.type==="opacity"&&(this.max=100,this.precision=1))}firstUpdated(){this.container=this.shadowRoot.querySelector("#color-slider"),this.handle=this.container.querySelector("#color-slider__handle")}handleDrag(e){if(this.disabled||this.readonly||!this.container||!this.handle)return;const{width:t,height:i}=this.container.getBoundingClientRect();this.handle.focus(),e.preventDefault(),dl(this.container,{onMove:(o,r)=>{this.vertical?this.value=pl(M(r/i*this.max,this.min,this.max),this.min,this.max):this.value=M(o/t*this.max,this.min,this.max),this.syncValues()},initialEvent:e})}handleClick(e){this.disabled||this.readonly||(this.value=this.getValueFromMousePosition(e),this.syncValues())}handleKeyDown(e){const t=e.shiftKey?10:1;e.key==="ArrowLeft"?(e.preventDefault(),this.value=M(this.value-t,this.min,this.max),this.syncValues()):e.key==="ArrowRight"?(e.preventDefault(),this.value=M(this.value+t,this.min,this.max),this.syncValues()):e.key==="ArrowUp"?(e.preventDefault(),this.value=M(this.value+t,this.min,this.max),this.syncValues()):e.key==="ArrowDown"?(e.preventDefault(),this.value=M(this.value-t,this.min,this.max),this.syncValues()):e.key==="Home"?(e.preventDefault(),this.value=this.min,this.syncValues()):e.key==="End"&&(e.preventDefault(),this.value=this.max,this.syncValues())}getValueFromMousePosition(e){return this.vertical?this.getValueFromYCoordinate(e.clientY):this.getValueFromXCoordinate(e.clientX)}getValueFromTouchPosition(e){return this.vertical?this.getValueFromYCoordinate(e.touches[0].clientY):this.getValueFromXCoordinate(e.touches[0].clientX)}getValueFromXCoordinate(e){const{left:t,width:i}=this.container.getBoundingClientRect();return M(this.roundToPrecision((e-t)/i*this.max),this.min,this.max)}getValueFromYCoordinate(e){const{top:t,height:i}=this.container.getBoundingClientRect();return M(this.roundToPrecision((e-t)/i*this.max),this.min,this.max)}roundToPrecision(e){const t=1/this.precision;return Math.ceil(e*t)/t}syncValues(){this.dispatchEvent(new Vo(Vo.CHANGE))}get cssPropCurrentValue(){return this.value===0?this.vertical?100:0:100/(this.vertical?this.max/pl(this.value,this.min,this.max):this.max/this.value)}render(){return l` <div
        part="slider"
        id="color-slider"
        role="slider"
        aria-label="${this.label}"
        aria-orientation="${this.vertical?"vertical":"horizontal"}"
        aria-valuemin="${Math.round(this.min)}"
        aria-valuemax="${Math.round(this.max)}"
        aria-valuenow="${Math.round(this.value)}"
        @click=${this.handleClick}
        @mousedown=${this.handleDrag}
        @touchstart=${this.handleDrag}
        @keydown=${this.handleKeyDown}>
        ${this.type==="opacity"?l`<div
              id="current-hue"
              style=${Ye({backgroundImage:`linear-gradient(to ${this.vertical?"top":"right"},
            transparent 0%,
            ${this.color} 100%
            )`})}></div>`:""}
        <!-- <slot name="detail"> </slot> -->
        <span
          id="color-slider__handle"
          style="--current-value: ${this.cssPropCurrentValue}%;"
          tabindex=${w(this.disabled?void 0:"0")}>
        </span>
      </div>
      ${Math.round(this.value)}`}};fe.styles=[b`
      :host {
        --uui-slider-height: 15px;
        --uui-slider-handle-size: 17px;
        --uui-slider-background-image: #fff;
        --uui-slider-background-size: 100%;
        --uui-slider-background-position: top left;
        display: block;
      }

      :host([type='hue']) {
        --uui-slider-background-image: linear-gradient(
          to right,
          rgb(255, 0, 0) 0%,
          rgb(255, 255, 0) 17%,
          rgb(0, 255, 0) 33%,
          rgb(0, 255, 255) 50%,
          rgb(0, 0, 255) 67%,
          rgb(255, 0, 255) 83%,
          rgb(255, 0, 0) 100%
        );
      }

      :host([vertical][type='hue']) {
        --uui-slider-background-image: linear-gradient(
          to top,
          rgb(255, 0, 0) 0%,
          rgb(255, 255, 0) 17%,
          rgb(0, 255, 0) 33%,
          rgb(0, 255, 255) 50%,
          rgb(0, 0, 255) 67%,
          rgb(255, 0, 255) 83%,
          rgb(255, 0, 0) 100%
        );
      }

      :host([type='opacity']) {
        --uui-slider-background-image: linear-gradient(
            45deg,
            var(--uui-palette-grey,#c4c4c4) 25%,
            transparent 25%
          ),
          linear-gradient(45deg, transparent 75%, var(--uui-palette-grey,#c4c4c4) 75%),
          linear-gradient(45deg, transparent 75%, var(--uui-palette-grey,#c4c4c4) 75%),
          linear-gradient(45deg, var(--uui-palette-grey,#c4c4c4) 25%, transparent 25%);

        --uui-slider-background-size: 10px 10px;
        --uui-slider-background-position: 0 0, 0 0, -5px -5px, 5px 5px;
      }

      #color-slider {
        position: relative;
        background-image: var(--uui-slider-background-image);
        background-size: var(--uui-slider-background-size);
        background-position: var(--uui-slider-background-position);
        border-radius: 3px;
        box-shadow: inset 0 0 0 1px rgba(0, 0, 0, 0.2);
        width: 100%;
        height: var(--uui-slider-height);
      }

      :host([vertical]) #color-slider {
        width: var(--uui-slider-height);
        height: 300px;
      }

      :host([disabled]) {
        cursor: not-allowed;
      }

      :host([disabled]) #color-slider {
        user-select: none;
        pointer-events: none;
        opacity: 0.55;
      }

      :host([readonly]) {
        cursor: default;
      }

      :host([readonly]) #color-slider {
        pointer-events: none;
      }

      #color-slider__handle {
        position: absolute;
        top: calc(50% - var(--uui-slider-handle-size) / 2);
        width: var(--uui-slider-handle-size);
        height: var(--uui-slider-handle-size);
        background-color: white;
        border-radius: 50%;
        box-shadow: 0 0 0 1px rgba(0, 0, 0, 0.25);
        margin-left: calc(var(--uui-slider-handle-size) / -2);
        left: var(--current-value, 0%);
      }

      :host([vertical]) #color-slider__handle {
        left: unset;
        top: var(--current-value, 100%);
        margin-left: -1px;
        margin-top: calc(var(--uui-slider-handle-size) / -2);
      }

      ::slotted(*:first-child) {
        border-radius: 3px;
        position: absolute;
        top: 0px;
        left: 0px;
        width: 100%;
        height: 100%;
      }

      #current-hue {
        border-radius: 3px;
        position: absolute;
        inset: 0 0 0 0;
      }
    `],Ne([a({reflect:!0})],fe.prototype,"type",2),Ne([a()],fe.prototype,"color",2),Ne([a({type:Number})],fe.prototype,"min",2),Ne([a({type:Number})],fe.prototype,"max",2),Ne([a({type:Number})],fe.prototype,"precision",2),Ne([a({type:Boolean,reflect:!0})],fe.prototype,"vertical",2),Ne([a()],fe.prototype,"value",2),Ne([a({type:Boolean,reflect:!0})],fe.prototype,"readonly",2),Ne([a({type:Boolean,reflect:!0})],fe.prototype,"disabled",2),fe=Ne([v("uui-color-slider")],fe);/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Er=(e,t)=>{const i=e._$AN;if(i===void 0)return!1;for(const o of i)o._$AO?.(t,!1),Er(o,t);return!0},No=e=>{let t,i;do{if((t=e._$AM)===void 0)break;i=t._$AN,i.delete(e),e=t}while(i?.size===0)},ou=e=>{for(let t;t=e._$AM;e=t){let i=t._$AN;if(i===void 0)t._$AN=i=new Set;else if(i.has(e))break;i.add(e),Tp(t)}};function Dp(e){this._$AN!==void 0?(No(this),this._$AM=e,ou(this)):this._$AM=e}function Lp(e,t=!1,i=0){const o=this._$AH,r=this._$AN;if(r!==void 0&&r.size!==0)if(t)if(Array.isArray(o))for(let s=i;s<o.length;s++)Er(o[s],!1),No(o[s]);else o!=null&&(Er(o,!1),No(o));else Er(this,e)}const Tp=e=>{e.type==Pe.CHILD&&(e._$AP??=Lp,e._$AQ??=Dp)};class Vp extends _i{constructor(){super(...arguments),this._$AN=void 0}_$AT(t,i,o){super._$AT(t,i,o),ou(this),this.isConnected=t._$AU}_$AO(t,i=!0){t!==this.isConnected&&(this.isConnected=t,t?this.reconnected?.():this.disconnected?.()),i&&(Er(this,t),No(this))}setValue(t){if(Wl(this._$Ct))this._$Ct._$AI(t,this);else{const i=[...this._$Ct._$AH];i[this._$Ci]=t,this._$Ct._$AI(i,this,0)}}disconnected(){}reconnected(){}}const mn=new WeakMap,Bo=mi(class extends Vp{render(e){return E}update(e,[t]){const i=t!==this.Y;return i&&this.Y!==void 0&&this.rt(void 0),(i||this.lt!==this.ct)&&(this.Y=t,this.ht=e.options?.host,this.rt(this.ct=e.element)),E}rt(e){if(this.isConnected||(e=void 0),typeof this.Y=="function"){const t=this.ht??globalThis;let i=mn.get(t);i===void 0&&(i=new WeakMap,mn.set(t,i)),i.get(this.Y)!==void 0&&this.Y.call(this.ht,void 0),i.set(this.Y,e),e!==void 0&&this.Y.call(this.ht,e)}else this.Y.value=e}get lt(){return typeof this.Y=="function"?mn.get(this.ht??globalThis)?.get(this.Y):this.Y?.value}disconnected(){this.lt===this.ct&&this.rt(void 0)}reconnected(){this.rt(this.ct)}});var Np=Object.defineProperty,Bp=Object.getOwnPropertyDescriptor,su=e=>{throw TypeError(e)},Si=(e,t,i,o)=>{for(var r=o>1?void 0:o?Bp(t,i):t,s=e.length-1,n;s>=0;s--)(n=e[s])&&(r=(o?n(t,i,r):n(r))||r);return o&&r&&Np(t,i,r),r},Hp=(e,t,i)=>t.has(e)||su("Cannot "+i),jp=(e,t,i)=>t.has(e)?su("Cannot add the same private member more than once"):t instanceof WeakSet?t.add(e):t.set(e,i),Rp=(e,t,i)=>(Hp(e,t,"access private method"),i),_n,nu;let Qe=class extends Me("label",fi(br(g))){constructor(){super(),jp(this,_n),this.disabled=!1,this.readonly=!1,this.showLabel=!1,this.addEventListener("click",this._setAriaAttributes)}get value(){return this._value??""}set value(e){const t=this._value;this._value=e,this.requestUpdate("value",t)}get color(){return this._color}set color(e){const t=this._color;this._color=e,this.requestUpdate("color",t)}_setAriaAttributes(){this.selectable&&this.setAttribute("aria-checked",this.selected.toString())}firstUpdated(){this._setAriaAttributes()}willUpdate(e){(e.has("disabled")||e.has("readonly"))&&this.selectable&&(this.selectable=!this.disabled&&!this.readonly,this.deselectable=!this.disabled&&!this.readonly),(e.has("selectable")||e.has("selected"))&&this._setAriaAttributes()}focus(e){this.selectableTarget?.focus(e)}render(){return l`
      <button
        id="swatch"
        ${Bo(Rp(this,_n,nu))}
        aria-label=${this.label}
        ?disabled="${this.disabled}"
        title="${this.label}">
        <div class="color-swatch color-swatch--transparent-bg">
          <div
            class="color-swatch__color"
            style="background-color: var(--uui-swatch-color, ${this.color??this.value})"></div>
          <div
            class="color-swatch__check"
            style="color: var(--uui-swatch-color, ${this.color??this.value})">
            ${Eo}
          </div>
        </div>
        ${this._renderWithLabel()}
      </button>
    `}_renderWithLabel(){return this.showLabel?l`<div class="color-swatch__label">
      <strong>${this.renderLabel()}</strong>
      ${this.value}
    </div>`:E}};_n=new WeakSet,nu=function(e){this.selectableTarget=e||this},Qe.styles=[b`
      :host {
        position: relative;
        display: inline-flex;
        align-items: center;
        justify-content: center;
        box-sizing: border-box;
        transition: box-shadow 100ms ease-out;
        flex-direction: column;
      }

      :host(*),
      * {
        /* TODO: implement globally shared outline style */
        outline-color: var(--uui-color-focus,#3879ff);
        outline-offset: 4px;
      }

      :host(:focus-within:not([disabled])) {
        outline: none;
      }

      :host(:focus:not([disabled])) #swatch {
        outline-color: var(--uui-color-focus,#3879ff);
        outline-width: var(--uui-swatch-border-width, 1px);
        outline-style: solid;
        outline-offset: var(--uui-swatch-border-width, 1px);
      }

      :host([selectable]) #swatch {
        cursor: pointer;
      }

      :host([disabled]) {
        cursor: not-allowed;
        opacity: 0.5;
      }

      :host([readonly]) {
        cursor: default;
      }

      #swatch {
        cursor: inherit;
        outline: none;
        background: none;
        border: none;
        padding: 0;
        margin: 0;
        text-align: left;
        border-radius: 3px;
      }

      :host(:not([selectable])) #swatch:focus {
        outline: none;
      }

      :host([selectable]) #swatch::after {
        content: '';
        position: absolute;
        pointer-events: none;
        inset: calc(var(--uui-swatch-border-width, 1px) * -1);
        width: calc(100% + calc(var(--uui-swatch-border-width, 1px) * 2));
        height: calc(100% + calc(var(--uui-swatch-border-width, 1px) * 2));
        box-sizing: border-box;
        border: var(--uui-swatch-border-width, 2px) solid
          var(--uui-color-selected,#3544b1);
        border-radius: calc(
          var(--uui-border-radius,3px) + var(--uui-swatch-border-width, 1px)
        );
        transition: opacity 100ms ease-out;
        opacity: 0;
      }
      :host([selectable]:not([disabled]):hover) #swatch::after {
        opacity: 0.33;
      }
      :host([selectable][selected]:not([disabled]):hover) #swatch::after {
        opacity: 0.66;
      }
      :host([selectable][selected]:not([disabled])) #swatch::after {
        opacity: 1;
      }

      .color-swatch {
        position: relative;
        width: var(--uui-swatch-size, 25px);
        height: var(--uui-swatch-size, 25px);
        border-radius: 3px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
      }

      :host([show-label]) .color-swatch {
        width: 120px;
        height: 50px;
      }

      .color-swatch.color-swatch--transparent-bg {
        background-image: linear-gradient(
            45deg,
            var(--uui-palette-grey,#c4c4c4) 25%,
            transparent 25%
          ),
          linear-gradient(45deg, transparent 75%, var(--uui-palette-grey,#c4c4c4) 75%),
          linear-gradient(45deg, transparent 75%, var(--uui-palette-grey,#c4c4c4) 75%),
          linear-gradient(45deg, var(--uui-palette-grey,#c4c4c4) 25%, transparent 25%);
        background-size: 10px 10px;
        background-position:
          0 0,
          0 0,
          -5px -5px,
          5px 5px;
      }
      .color-swatch__color {
        width: 100%;
        height: 100%;
        border: 1px solid rgba(0, 0, 0, 0.125);
        border-radius: inherit;
        box-sizing: border-box;
      }

      :host([show-label]) .color-swatch__color {
        border-radius: 3px 3px 0 0;
      }

      .color-swatch__check {
        position: absolute;
        vertical-align: middle;
        width: calc(var(--uui-swatch-size, 25px) / 2);
        height: calc(var(--uui-swatch-size, 25px) / 2);
        line-height: 0;
        filter: invert(1) grayscale(1) contrast(9);
        pointer-events: none;
        opacity: 0;
      }

      :host([selected]) .color-swatch__check {
        opacity: 1;
      }

      slot[name='label']::slotted(*),
      .label {
        font-size: var(--uui-size-4,12px);
      }

      .color-swatch__label {
        max-width: 120px;
        box-sizing: border-box;
        padding: var(--uui-size-space-1,3px) var(--uui-size-space-2,6px);
        line-height: 1.5;
        display: flex;
        flex-direction: column;
        background: white;
        border: 1px solid var(--uui-color-border,#d8d7d9);
        border-radius: 0 0 3px 3px;
        font-size: var(--uui-size-4, 12px);
      }

      .color-swatch__label strong {
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
        box-sizing: border-box;
      }
    `],Si([a()],Qe.prototype,"value",1),Si([a()],Qe.prototype,"color",1),Si([a({type:Boolean,reflect:!0})],Qe.prototype,"disabled",2),Si([a({type:Boolean,reflect:!0})],Qe.prototype,"readonly",2),Si([a({type:Boolean,attribute:"show-label",reflect:!0})],Qe.prototype,"showLabel",2),Qe=Si([v("uui-color-swatch")],Qe);class Oi extends A{constructor(t,i={}){super(t,{bubbles:!0,...i})}}Oi.CHANGE="change";var Wp=Object.defineProperty,Fp=Object.getOwnPropertyDescriptor,Pr=(e,t,i,o)=>{for(var r=o>1?void 0:o?Fp(t,i):t,s=e.length-1,n;s>=0;s--)(n=e[s])&&(r=(o?n(t,i,r):n(r))||r);return o&&r&&Wp(t,i,r),r};let yt=class extends Me("label",g){constructor(){super(),this.value="",this.disabled=!1,this.readonly=!1,this._onSelected=e=>{const t=e.target;this._swatches.includes(t)&&(this._selectedElement&&(this._selectedElement.selected=!1,this._selectedElement.active=!1,this._selectedElement=void 0),this._selectedElement=t,this._activeElement=this._selectedElement,this.value=this._selectedElement.value||"",this.dispatchEvent(new Oi(Oi.CHANGE)))},this._onDeselected=e=>{const t=e.target;this._swatches.includes(t)&&(this._activeElement===t&&(this._activeElement=void 0),this._selectedElement===t&&(this._selectedElement.selected=!1,this._selectedElement.active=!1,this._selectedElement=void 0,this.value="",this.dispatchEvent(new Oi(Oi.CHANGE))))},this.addEventListener(mt.SELECTED,this._onSelected),this.addEventListener(mt.DESELECTED,this._onDeselected)}get _activeElement(){return this.__activeElement}set _activeElement(e){this.__activeElement&&(this.__activeElement.active=!1),e&&(e.active=!0,this.__activeElement=e)}connectedCallback(){super.connectedCallback(),this.setAttribute("role","radiogroup"),this.setAttribute("aria-label",this.label)}willUpdate(e){e.has("label")&&this.setAttribute("aria-label",this.label)}_handleSlotChange(){!this._swatches||this._swatches.length===0||this._swatches.forEach(e=>{e.setAttribute("aria-checked","false"),e.setAttribute("role","radio"),this.disabled?e.setAttribute("disabled",""):e.setAttribute("selectable","selectable"),this.readonly&&e.setAttribute("readonly",""),this.value!==""&&e.value===this.value&&(e.selected=!0,e.setAttribute("aria-checked","true"),this._selectedElement=e,this._activeElement=this._selectedElement)})}resetSelection(){this._swatches.forEach(e=>{e.selected=!1,e.active=!1,e.selectable=!e.disabled}),this._activeElement=void 0,this._selectedElement=void 0,this.value=""}render(){return l`<slot @slotchange=${this._handleSlotChange}></slot>`}};yt.styles=[b`
      :host {
        display: flex;
        flex-wrap: wrap;
        gap: 0.4rem;
      }
    `],Pr([a()],yt.prototype,"value",2),Pr([a({type:Boolean,reflect:!0})],yt.prototype,"disabled",2),Pr([a({type:Boolean,reflect:!0})],yt.prototype,"readonly",2),Pr([bt({selector:"uui-color-swatch"})],yt.prototype,"_swatches",2),yt=Pr([v("uui-color-swatches")],yt);class be extends A{constructor(t,i={}){super(t,{bubbles:!0,...i})}}be.CHANGE="change",be.INNER_SLOT_CHANGE="inner-slot-change";var Gp=Object.defineProperty,qp=Object.getOwnPropertyDescriptor,au=e=>{throw TypeError(e)},wt=(e,t,i,o)=>{for(var r=o>1?void 0:o?qp(t,i):t,s=e.length-1,n;s>=0;s--)(n=e[s])&&(r=(o?n(t,i,r):n(r))||r);return o&&r&&Gp(t,i,r),r},Kp=(e,t,i)=>t.has(e)||au("Cannot "+i),Yp=(e,t,i)=>t.has(e)?au("Cannot add the same private member more than once"):t instanceof WeakSet?t.add(e):t.set(e,i),lu=(e,t,i)=>(Kp(e,t,"access private method"),i),Ho,yn;let Ie=class extends g{constructor(){super(...arguments),Yp(this,Ho),this.displayValue="",this._value="",this._activeElementValue=null,this._onSlotChange=()=>{lu(this,Ho,yn).call(this),this._updateSelection(),this.dispatchEvent(new be(be.INNER_SLOT_CHANGE))},this._onSelected=e=>{this._selectedElement&&(this._selectedElement.selected=!1,this._selectedElement.active=!1,this._selectedElement=void 0),this._selectedElement=e.composedPath()[0],this.value=this._selectedElement.value||"",this.displayValue=this._selectedElement.displayValue||"",this.dispatchEvent(new be(be.CHANGE))},this._onDeselected=e=>{const t=e.composedPath()[0];this._selectedElement===t&&(this.value="",this.displayValue="",this.dispatchEvent(new be(be.CHANGE)))},this._moveIndex=e=>{const t=Math.min(Math.max(this._getActiveIndex+e,0),this._options.length-1);this._goToIndex(t)},this._onKeyDown=e=>{if(!(this._options.length<=0))switch(e.key){case"ArrowUp":e.preventDefault(),e.ctrlKey?this._moveIndex(-10):this._moveIndex(-1);break;case"ArrowDown":e.preventDefault(),e.ctrlKey?this._moveIndex(10):this._moveIndex(1);break;case"Home":{e.preventDefault(),this._goToIndex(0);break}case"Enter":{e.preventDefault(),this._getActiveElement?.click();break}case"End":{e.preventDefault(),this._goToIndex(this._options.length-1);break}}}}get value(){return this._value}set value(e){if(this._value===e)return;const t=this._value;this._value=e,this._updateSelection(),this.requestUpdate("value",t)}get for(){return this._for}set for(e){this._for&&this._for.removeEventListener("keydown",this._onKeyDown),this._for=e,this._for&&this._for.addEventListener("keydown",this._onKeyDown)}connectedCallback(){super.connectedCallback(),this._for||(this._for=this),this.addEventListener(mt.SELECTED,this._onSelected),this.addEventListener(mt.DESELECTED,this._onDeselected)}disconnectedCallback(){super.disconnectedCallback(),document.removeEventListener("keydown",this._onKeyDown),this.removeEventListener(mt.SELECTED,this._onSelected),this.removeEventListener(mt.DESELECTED,this._onDeselected)}_updateSelection(){this.displayValue="";for(const e of this._options)e.value===this._value?(this.displayValue=e.displayValue||"",e.selected=!0):e.selected=!1}get _getActiveIndex(){return this._activeElementValue===null?-1:this._options.findIndex(e=>e.value===this._activeElementValue)}get _getActiveElement(){return this._activeElementValue===null?null:this._options.find(e=>e.value===this._activeElementValue)}_goToIndex(e){if(this._options.length===0)return;e=Math.min(Math.max(e,0),this._options.length-1);const t=this._options[e];this._activeElementValue=t.value,lu(this,Ho,yn).call(this),t&&t.scrollIntoView({behavior:"auto",block:"nearest",inline:"nearest"})}render(){return l` <slot @slotchange=${this._onSlotChange}></slot> `}};Ho=new WeakSet,yn=function(){for(let t=0;t<this._activeOptions.length;t++)this._activeOptions[t].active=!1;const e=this._getActiveElement;e?e.active=!0:this._goToIndex(0)},Ie.styles=[b`
      :host {
        display: flex;
        flex-direction: column;
        box-sizing: border-box;
      }
    `],wt([a()],Ie.prototype,"value",1),wt([a({type:String})],Ie.prototype,"displayValue",2),wt([a({attribute:!1})],Ie.prototype,"for",1),wt([bt({flatten:!0,selector:"uui-combobox-list-option:not([disabled])"})],Ie.prototype,"_options",2),wt([bt({flatten:!0,selector:"uui-combobox-list-option[active]"})],Ie.prototype,"_activeOptions",2),wt([_()],Ie.prototype,"_value",2),wt([_()],Ie.prototype,"_activeElementValue",2),Ie=wt([v("uui-combobox-list")],Ie);var Xp=Object.defineProperty,Zp=Object.getOwnPropertyDescriptor,Ii=(e,t,i,o)=>{for(var r=o>1?void 0:o?Zp(t,i):t,s=e.length-1,n;s>=0;s--)(n=e[s])&&(r=(o?n(t,i,r):n(r))||r);return o&&r&&Xp(t,i,r),r};let Je=class extends fi(br(g)){constructor(){super(),this._disabled=!1,this._displayValue="",this.selectable=!0,this.deselectable=!1}get value(){return this._value?this._value:this.textContent?.trim()||""}set value(e){const t=this._value;this._value=e,this.requestUpdate("value",t)}get displayValue(){return this._displayValue?this._displayValue:this.textContent?.trim()||""}set displayValue(e){const t=this._displayValue;this._displayValue=e,this.requestUpdate("displayValue",t)}get disabled(){return this._disabled}set disabled(e){const t=this._disabled;this._disabled=e,this.selectable=!this._disabled,this.requestUpdate("disabled",t)}render(){return l`<slot></slot>`}};Je.styles=[b`
      :host {
        position: relative;
        cursor: pointer;
        margin: 1px var(--uui-size-2,6px);
        border-radius: var(--uui-border-radius,3px);
        outline: 2px solid transparent;
        outline-offset: -2px;
        padding: var(--uui-size-1,3px);
        padding-left: var(--uui-size-2,6px);
      }

      :host(:first-child) {
        margin-top: 6px;
      }
      :host(:last-child) {
        margin-bottom: 6px;
      }

      :host([selected]):host([active])::after {
        display: block;
        content: '';
        position: absolute;
        inset: 0px;
        outline: var(--uui-color-surface,#fff) solid 2px;
        outline-offset: -4px;
      }
      /*
      :host::before {
        display: block;
        content: '';
        opacity: 0;
        position: absolute;
        inset: 0;
        background-color: var(--uui-color-selected);
      }

      :host(:hover)::before {
        opacity: 0.15;
        border-radius: var(--uui-border-radius);
      } */

      :host(:hover) {
        background-color: var(--uui-color-surface-emphasis,rgb(250, 250, 250));
        color: var(--uui-color-interactive-emphasis,#3544b1);
      }

      :host([disabled]) {
        cursor: auto;
        color: var(--uui-color-disabled-contrast,#c4c4c4);
        background-color: var(--uui-color-disabled,#f3f3f5);
      }

      :host([disabled]:hover) {
        background-color: var(--uui-color-disabled,#f3f3f5);
      }

      :host([active]) {
        outline-color: var(--uui-color-focus,#3879ff);
      }

      :host([selected]) {
        color: var(--uui-color-selected-contrast,#fff);
        background-color: var(--uui-color-selected,#3544b1);
      }

      :host([selected]:hover) {
        color: var(--uui-color-selected-contrast,#fff);
        background-color: var(--uui-color-selected-emphasis,rgb(70, 86, 200));
      }
      :host([selected][disabled]) {
        color: var(--uui-color-disabled-contrast,#c4c4c4);
        background-color: var(--uui-color-disabled,#f3f3f5);
      }
    `],Ii([_()],Je.prototype,"_disabled",2),Ii([_()],Je.prototype,"_displayValue",2),Ii([a({type:String})],Je.prototype,"value",1),Ii([a({type:String,attribute:"display-value"})],Je.prototype,"displayValue",1),Ii([a({type:Boolean,reflect:!0})],Je.prototype,"disabled",1),Je=Ii([v("uui-combobox-list-option")],Je);class ge extends A{constructor(t,i={}){super(t,{bubbles:!0,...i})}}ge.SEARCH="search",ge.CHANGE="change";var Qp=Object.defineProperty,Jp=Object.getOwnPropertyDescriptor,uu=e=>{throw TypeError(e)},ce=(e,t,i,o)=>{for(var r=o>1?void 0:o?Jp(t,i):t,s=e.length-1,n;s>=0;s--)(n=e[s])&&(r=(o?n(t,i,r):n(r))||r);return o&&r&&Qp(t,i,r),r},wn=(e,t,i)=>t.has(e)||uu("Cannot "+i),P=(e,t,i)=>(wn(e,t,"read from private field"),i?i.call(e):t.get(e)),Q=(e,t,i)=>t.has(e)?uu("Cannot add the same private member more than once"):t instanceof WeakSet?t.add(e):t.set(e,i),cu=(e,t,i,o)=>(wn(e,t,"write to private field"),t.set(e,i),i),jo=(e,t,i)=>(wn(e,t,"access private method"),i),he,Ai,Ui,hu,Sr,Ro,Wo,Fo,xn,Go,qo,$n,Ko,zi,kn,Yo,Xo,Cn,Zo;let J=class extends De(g,""){constructor(){super(...arguments),Q(this,Ui),this.closeLabel="Close",this.disabled=!1,this.readonly=!1,Q(this,he),Q(this,Ai),this._displayValue="",this._search="",this._isPhone=!1,this._isOpen=!1,Q(this,Sr,()=>{this._isPhone=P(this,Ai).matches}),Q(this,Wo,()=>requestAnimationFrame(()=>this._input.focus())),Q(this,Fo,()=>requestAnimationFrame(()=>{this.shadowRoot?.activeElement||P(this,zi).call(this)})),Q(this,xn,e=>{e.preventDefault(),e.stopImmediatePropagation(),this.search=e.target.value,this.dispatchEvent(new ge(ge.SEARCH)),P(this,Ko).call(this)}),Q(this,Go,()=>{this.value&&this.value!==P(this,he)?.value&&jo(this,Ui,Ro).call(this)}),Q(this,qo,()=>{this.value=P(this,he)?.value||"",this.search=this.value?this.search:"",P(this,zi).call(this),this.dispatchEvent(new ge(ge.CHANGE))}),Q(this,$n,()=>{this.readonly||(this.open=!this.open)}),Q(this,Ko,()=>{this.open||this.readonly||(this.open=!0)}),Q(this,zi,()=>{this.open&&(this.open=!1,this.search="",this._input.value=this._displayValue,this.dispatchEvent(new ge(ge.SEARCH)))}),Q(this,kn,e=>{this.open===!1&&e.key==="Enter"&&(e.preventDefault(),e.stopImmediatePropagation()),(e.key==="ArrowUp"||e.key==="ArrowDown")&&P(this,Ko).call(this),(e.key==="Escape"||e.key==="Enter")&&P(this,zi).call(this)}),Q(this,Yo,e=>{e.key&&e.key!=="Enter"||(e.preventDefault(),e.stopImmediatePropagation(),this.value="",this.search="",this._input.value=this._displayValue,this._input.focus(),this.dispatchEvent(new ge(ge.SEARCH)),this.dispatchEvent(new ge(ge.CHANGE)))}),Q(this,Xo,()=>l` <uui-input
      slot="trigger"
      id="combobox-input"
      label="combobox-input"
      type="text"
      .value=${this._displayValue}
      autocomplete="off"
      .disabled=${this.disabled}
      .readonly=${this.readonly}
      popovertarget="combobox-popover"
      @click=${P(this,$n)}
      @input=${P(this,xn)}
      @keydown=${P(this,kn)}>
      <slot name="input-prepend" slot="prepend"></slot>
      ${P(this,Cn).call(this)}
      <div id="expand-symbol-wrapper" slot="append">
        <uui-symbol-expand .open=${this._isOpen}></uui-symbol-expand>
      </div>
      <slot name="input-append" slot="append"></slot>
    </uui-input>`),Q(this,Cn,()=>this.disabled||this.readonly?E:this.value||this.search?l`<uui-button
          id="clear-button"
          @click=${P(this,Yo)}
          @keydown=${P(this,Yo)}
          label="clear"
          slot="append"
          compact
          style="height: 100%;">
          <uui-icon name="remove" .fallback=${en.strings[0]}></uui-icon>
        </uui-button>`:""),Q(this,Zo,()=>l`<div id="dropdown">
      <uui-scroll-container tabindex="-1" id="scroll-container">
        <slot @slotchange=${jo(this,Ui,hu)}></slot>
      </uui-scroll-container>
    </div>`)}get value(){return super.value}set value(e){super.value=e,typeof e=="string"&&jo(this,Ui,Ro).call(this)}get search(){return this._search}set search(e){if(this.search===e)return;const t=this._search;this._search=e,this.requestUpdate("search",t)}get open(){return this._isOpen}set open(e){const t=e;this._isOpen=e;const i=this._comboboxPopoverElement;if(i)if(e){const o=this._input.offsetWidth;i.style.setProperty("--popover-width",`${o}px`),i.showPopover()}else i.hidePopover();this.requestUpdate("open",t)}connectedCallback(){super.connectedCallback(),this.addEventListener("blur",P(this,Fo)),this.addEventListener("mousedown",P(this,Wo)),cu(this,Ai,window.matchMedia("(max-width: 600px)")),P(this,Sr).call(this),P(this,Ai).addEventListener("change",P(this,Sr)),x(this,"uui-icon"),x(this,"uui-input"),x(this,"uui-button"),x(this,"uui-combobox-list"),x(this,"uui-scroll-container"),x(this,"uui-popover-container"),x(this,"uui-symbol-expand")}disconnectedCallback(){super.disconnectedCallback(),this.removeEventListener("blur",P(this,Fo)),this.removeEventListener("mousedown",P(this,Wo)),P(this,Ai).removeEventListener("change",P(this,Sr))}getFormElement(){return this._input}async focus(){await this.updateComplete,this._input.focus()}async blur(){await this.updateComplete,this._input.blur()}async click(){await this.updateComplete,this._input.click()}render(){return this._isPhone&&this.open?l` <div id="phone-wrapper">
        <uui-button label="close" look="primary" @click=${P(this,zi)}>
          ${this.closeLabel}
        </uui-button>
        ${P(this,Xo).call(this)} ${P(this,Zo).call(this)}
      </div>`:l`
        ${P(this,Xo).call(this)}
        <uui-popover-container
          id="combobox-popover"
          popover="manual"
          placement="bottom-end">
          ${P(this,Zo).call(this)}
        </uui-popover-container>
      `}};he=new WeakMap,Ai=new WeakMap,Ui=new WeakSet,hu=function(){P(this,he)&&(P(this,he).removeEventListener(be.CHANGE,P(this,qo)),P(this,he).removeEventListener(be.INNER_SLOT_CHANGE,P(this,Go)));const e=this._comboboxListElements?.[0];e&&(cu(this,he,e),P(this,he).for=this,P(this,he).addEventListener(be.CHANGE,P(this,qo)),P(this,he).addEventListener(be.INNER_SLOT_CHANGE,P(this,Go))),this.updateComplete.then(()=>{jo(this,Ui,Ro).call(this)})},Sr=new WeakMap,Ro=function(){P(this,he)&&(P(this,he).value=this.value,requestAnimationFrame(()=>this._displayValue=P(this,he).displayValue||""))},Wo=new WeakMap,Fo=new WeakMap,xn=new WeakMap,Go=new WeakMap,qo=new WeakMap,$n=new WeakMap,Ko=new WeakMap,zi=new WeakMap,kn=new WeakMap,Yo=new WeakMap,Xo=new WeakMap,Cn=new WeakMap,Zo=new WeakMap,J.styles=[b`
      :host {
        display: inline-block;
      }

      #combobox-input {
        width: 100%;
        border-radius: var(--uui-size-1,3px);
      }

      #combobox-popover {
        width: var(--uui-dropdown-width, var(--popover-width, inherit));
      }

      #scroll-container {
        overflow-y: auto;
        width: 100%;
        max-height: var(--uui-combobox-popover-max-height, 500px);
      }
      #expand-symbol-wrapper {
        height: 100%;
        padding-right: var(--uui-size-space-3,9px);
        display: flex;
        justify-content: center;
      }

      #dropdown {
        overflow: hidden;
        z-index: -1;
        background-color: var(
          --uui-combobox-popover-background-color,
          var(--uui-color-surface,#fff)
        );
        border: 1px solid var(--uui-color-border,#d8d7d9);
        border-radius: var(--uui-border-radius,3px);
        width: 100%;
        box-sizing: border-box;
        box-shadow: var(--uui-shadow-depth-3,0 10px 20px rgba(0,0,0,0.19) , 0 6px 6px rgba(0,0,0,0.23));
      }

      :host([disabled]) #caret {
        fill: var(--uui-color-disabled-contrast,#c4c4c4);
      }

      #phone-wrapper {
        position: fixed;
        inset: 0;
        display: flex;
        flex-direction: column;
        z-index: 1;
        font-size: 1.1em;
      }

      #phone-wrapper #dropdown {
        display: flex;
      }

      #phone-wrapper #combobox-input {
        height: var(--uui-size-16,48px);
      }

      #phone-wrapper > uui-button {
        height: var(--uui-size-14,42px);
        width: 100%;
      }

      #phone-wrapper #scroll-container {
        max-height: unset;
      }
    `],ce([a({attribute:"value",reflect:!0})],J.prototype,"value",1),ce([a({type:String})],J.prototype,"search",1),ce([a({type:Boolean})],J.prototype,"open",1),ce([a({type:String})],J.prototype,"closeLabel",2),ce([a({type:Boolean,reflect:!0})],J.prototype,"disabled",2),ce([a({type:Boolean,reflect:!0})],J.prototype,"readonly",2),ce([O("#combobox-input")],J.prototype,"_input",2),ce([O("#combobox-popover")],J.prototype,"_comboboxPopoverElement",2),ce([bt({flatten:!0,selector:"uui-combobox-list"})],J.prototype,"_comboboxListElements",2),ce([_()],J.prototype,"_displayValue",2),ce([_()],J.prototype,"_search",2),ce([_()],J.prototype,"_isPhone",2),ce([_()],J.prototype,"_isOpen",2),J=ce([v("uui-combobox")],J);var ev=Object.defineProperty,tv=Object.getOwnPropertyDescriptor,En=(e,t,i,o)=>{for(var r=o>1?void 0:o?tv(t,i):t,s=e.length-1,n;s>=0;s--)(n=e[s])&&(r=(o?n(t,i,r):n(r))||r);return o&&r&&ev(t,i,r),r};let Mi=class extends g{constructor(){super(...arguments),this.headline=null,this._headlineSlotHasContent=!1,this._headlineSlotChanged=e=>{this._headlineSlotHasContent=e.target.assignedNodes({flatten:!0}).length>0}}renderHeadline(){return l` <h3
      style=${this._headlineSlotHasContent||this.headline!==null?"":"display: none"}>
      ${this.headline}
      <slot name="headline" @slotchange=${this._headlineSlotChanged}></slot>
    </h3>`}renderContent(){return l`<slot></slot>`}renderActions(){return l`<slot id="actions" name="actions"></slot>`}render(){return l`${this.renderHeadline()} ${this.renderContent()}
    ${this.renderActions()} `}};Mi.styles=[b`
      :host {
        display: block;
        padding: var(--uui-size-10,30px) var(--uui-size-14,42px);
        color: var(--uui-color-text,#060606);
      }

      #actions {
        margin-top: var(--uui-size-8,24px);
        display: flex;
        justify-content: end;
        gap: var(--uui-size-4,12px);
      }
    `],En([a({type:String})],Mi.prototype,"headline",2),En([_()],Mi.prototype,"_headlineSlotHasContent",2),Mi=En([v("uui-dialog-layout")],Mi);var iv=Object.getOwnPropertyDescriptor,rv=(e,t,i,o)=>{for(var r=o>1?void 0:o?iv(t,i):t,s=e.length-1,n;s>=0;s--)(n=e[s])&&(r=n(r)||r);return r};let Qo=class extends g{render(){return l`<slot></slot>`}};Qo.styles=[b`
      :host {
        position: relative;
        display: block;
        max-width: 580px;
        color: var(--uui-color-text,#060606);

        background-color: var(
          --uui-dialog-background-color,
          var(--uui-color-surface,#fff)
        );

        box-shadow: var(--uui-shadow-depth-5,0 19px 38px rgba(0,0,0,0.30) , 0 15px 12px rgba(0,0,0,0.22));
        border-radius: var(
          --uui-dialog-border-radius,
          calc(var(--uui-border-radius,3px) * 2)
        );
      }
    `],Qo=rv([v("uui-dialog")],Qo);var ov=Object.defineProperty,sv=Object.getOwnPropertyDescriptor,du=(e,t,i,o)=>{for(var r=o>1?void 0:o?sv(t,i):t,s=e.length-1,n;s>=0;s--)(n=e[s])&&(r=(o?n(t,i,r):n(r))||r);return o&&r&&ov(t,i,r),r};let Or=class extends g{constructor(){super(...arguments),this.error=!1}render(){return l`<svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 512 512"
      id="upload-icon">
      <path
        d=${this.error?"M254.501 38.16c-120.308 0-217.838 97.53-217.838 217.838 0 120.31 97.53 217.838 217.838 217.838 120.31 0 217.838-97.528 217.838-217.838 0-120.308-97.528-217.838-217.838-217.838zm151.667 217.838c0 29.861-8.711 57.708-23.671 81.209L173.293 128.002c23.499-14.961 51.345-23.67 81.208-23.67 83.629.001 151.667 68.037 151.667 151.666zm-303.332 0c0-29.859 8.71-57.707 23.67-81.204l209.201 209.201c-23.498 14.96-51.346 23.671-81.206 23.671-83.632 0-151.665-68.04-151.665-151.668z":"M206.491 364.184h99.013V223.676h92.922L255.997 51.111 113.575 223.676h92.916zM85.043 398.311h341.912v62.578H85.043z"} />
    </svg> `}};Or.styles=[b`
      :host {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
      }

      #upload-icon {
        fill: var(--uui-color-default,#1b264f);
        width: 100px;
        transition: fill 0.3s ease;
        position: relative;
        z-index: 2;
      }

      :host([error]) #upload-icon {
        fill: var(--uui-color-invalid,#d42054);
      }
    `],du([a({type:Boolean,reflect:!0})],Or.prototype,"error",2),Or=du([v("uui-symbol-file-dropzone")],Or);class Di extends A{constructor(t,i={}){super(t,{bubbles:!0,...i})}}Di.CHANGE="change";var nv=Object.defineProperty,av=Object.getOwnPropertyDescriptor,Li=(e,t,i,o)=>{for(var r=o>1?void 0:o?av(t,i):t,s=e.length-1,n;s>=0;s--)(n=e[s])&&(r=(o?n(t,i,r):n(r))||r);return o&&r&&nv(t,i,r),r};let et=class extends Me("",g){constructor(){super(),this._acceptedFileExtensions=[],this._acceptedMimeTypes=[],this._accept="",this.disallowFolderUpload=!1,this.multiple=!1,this.addEventListener("dragenter",this._onDragEnter,!1),this.addEventListener("dragleave",this._onDragLeave,!1),this.addEventListener("dragover",this._onDragOver,!1),this.addEventListener("drop",this._onDrop,!1)}set accept(e){if(e){const i=[],o=[];e.split(",").forEach(r=>{r=r.trim().toLowerCase(),/[a-z]+\/[a-z*]/s.test(r)?i.push(r):o.push(r.replace(/^\./,""))}),this._acceptedMimeTypes=i,this._acceptedFileExtensions=o}else this._acceptedMimeTypes=[],this._acceptedFileExtensions=[];const t=this._accept;this._accept=e,this.requestUpdate("accept",t)}get accept(){return this._accept}browse(){this._input.click()}async _getAllEntries(e){const t=[...e],i=[],o=[];for(const r of t){if(r?.kind!=="file")continue;const s=this._getEntry(r);if(s)if(s.isDirectory){if(!this.disallowFolderUpload&&this.multiple){const n=await this._mkdir(s);i.push(n)}}else{const n=r.getAsFile();if(!n)continue;this._isAccepted(n)&&o.push(n)}}return{files:o,folders:i}}_getEntry(e){let t=null;return"webkitGetAsEntry"in e?t=e.webkitGetAsEntry():"getAsEntry"in e&&(t=e.getAsEntry()),t}async _mkdir(e){const t=e.createReader(),i=[],o=[],r=n=>new Promise((u,c)=>{n.readEntries(async p=>{if(!p.length){u();return}for(const f of p)if(f.isFile){const h=await this._getAsFile(f);this._isAccepted(h)&&o.push(h)}else if(f.isDirectory){const h=await this._mkdir(f);i.push(h)}await r(n),u()},c)});return await r(t),{folderName:e.name,folders:i,files:o}}_isAccepted(e){if(this._acceptedFileExtensions.length===0&&this._acceptedMimeTypes.length===0)return!0;const t=e.type.toLowerCase(),i=e.name.split(".").pop();if(i&&this._acceptedFileExtensions.includes(i.toLowerCase()))return!0;for(const o of this._acceptedMimeTypes){if(t===o)return!0;if(o.endsWith("/*")&&t.startsWith(o.replace("*","")))return!0}return!1}async _getAsFile(e){return new Promise((t,i)=>e.file(t,i))}async _onDrop(e){e.preventDefault(),this._dropzone.classList.remove("hover");const t=e.dataTransfer?.items;if(t){const i=await this._getAllEntries(t);if(this.multiple===!1&&i.files.length&&(i.files=[i.files[0]],i.folders=[]),!i.files.length&&!i.folders.length)return;this.dispatchEvent(new Di(Di.CHANGE,{detail:i}))}}_onDragOver(e){e.preventDefault()}_onDragEnter(e){this._dropzone.classList.add("hover"),e.preventDefault()}_onDragLeave(e){this._dropzone.classList.remove("hover"),e.preventDefault()}_onFileInputChange(){const e=this._input.files?Array.from(this._input.files):[];this.multiple===!1&&e.length>1&&e.splice(1,e.length-1);const t=e.filter(i=>this._isAccepted(i));t.length&&this.dispatchEvent(new Di(Di.CHANGE,{detail:{files:t,folders:[]}}))}render(){return l`
      <div id="dropzone">
        <uui-symbol-file-dropzone id="symbol"></uui-symbol-file-dropzone>
        ${this.renderLabel()}
        <input
          @click=${e=>e.stopImmediatePropagation()}
          id="input"
          type="file"
          accept=${this.accept}
          ?multiple=${this.multiple}
          @change=${this._onFileInputChange}
          aria-label="${this.label}" />
        <slot></slot>
      </div>
    `}};et.styles=[b`
      #dropzone {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        position: relative;
        box-sizing: border-box;
        width: 100%;
        height: 100%;
        padding: var(--uui-size-4,12px);
        border: 3px solid transparent;
        margin: -3px;
        backdrop-filter: blur(2px);
      }
      #dropzone.hover {
        border-color: var(--uui-color-default,#1b264f);
      }
      #dropzone.hover::before {
        content: '';
        position: absolute;
        inset: 0;
        opacity: 0.2;
        border-color: var(--uui-color-default,#1b264f);
        background-color: var(--uui-color-default,#1b264f);
      }
      #symbol {
        color: var(--uui-color-default,#1b264f);
        max-width: 100%;
        max-height: 100%;
      }
      #input {
        position: absolute;
        width: 0px;
        height: 0px;
        opacity: 0;
        display: none;
      }
    `],Li([O("#input")],et.prototype,"_input",2),Li([O("#dropzone")],et.prototype,"_dropzone",2),Li([a({type:String})],et.prototype,"accept",1),Li([a({type:Boolean,reflect:!0,attribute:"disallow-folder-upload"})],et.prototype,"disallowFolderUpload",2),Li([a({type:Boolean})],et.prototype,"multiple",2),et=Li([v("uui-file-dropzone")],et);class lv{static humanFileSize(t,i=!1,o=1){const r=i?1e3:1024;if(Math.abs(t)<r)return t+" B";const s=i?["kB","MB","GB","TB","PB","EB","ZB","YB"]:["KiB","MiB","GiB","TiB","PiB","EiB","ZiB","YiB"];let n=-1;const u=10**o;do t/=r,++n;while(Math.round(Math.abs(t)*u)/u>=r&&n<s.length-1);return t.toFixed(o)+" "+s[n]}}var uv=Object.defineProperty,cv=Object.getOwnPropertyDescriptor,Be=(e,t,i,o)=>{for(var r=o>1?void 0:o?cv(t,i):t,s=e.length-1,n;s>=0;s--)(n=e[s])&&(r=(o?n(t,i,r):n(r))||r);return o&&r&&uv(t,i,r),r};let me=class extends g{constructor(){super(...arguments),this._name="",this._url="",this._extension="",this._src="",this._size=0,this._isDirectory=!1}get file(){return this._file}set file(e){const t=this._file;e instanceof File&&(this._name=e.name.split(".")[0],this._extension=e.name.split(".")[1],this._isDirectory=!1,this._size=e.size,this._isFileAnImage(e)&&(this._isImage=!0,this._getThumbnail(e).then(i=>{this._src=i})),this.requestUpdate("file",t))}connectedCallback(){super.connectedCallback(),x(this,"uui-symbol-file-thumbnail"),x(this,"uui-symbol-folder"),x(this,"uui-symbol-file")}_openSource(){window.open(this._url,"_blank")}_fileTypeTemplate(){return this._isDirectory?l`<uui-symbol-folder id="file-symbol"></uui-symbol-folder>`:this._isImage?l`<uui-symbol-file-thumbnail
        .src=${this._src}
        .alt=${this._name}
        id="file-symbol"></uui-symbol-file-thumbnail>`:l`<uui-symbol-file
      id="file-symbol"
      .type=${this._extension}></uui-symbol-file>`}_renderLongName(){const t=this._name.substring(0,this._name.length-6),i=this._name.substring(this._name.length-6,this._name.length);return l`
      <span
        id="file-name"
        class=${this._url?"has-source":""}
        @click=${()=>this._url?this._openSource():""}
        @keydown=${()=>""}>
        <span id="file-name-start">${t}</span>
        <span id="file-name-end">${i}</span>
      </span>
    `}_isFileAnImage(e){return e?e.type.split("/")[0]==="image":!1}async _getThumbnail(e){return await new Promise(t=>{const i=new FileReader;i.readAsDataURL(e),i.onload=()=>{t(i.result)}})}render(){return l`
      <slot id="actions" name="actions"></slot>
      ${this._fileTypeTemplate()}
      <div id="file-info">
        ${this._renderLongName()}
        <span id="file-size">
          ${this._size&&!this._isDirectory?l`${lv.humanFileSize(this._size,!0)}`:""}
        </span>
      </div>
    `}};me.styles=[b`
      :host {
        position: relative;
        display: grid;
        /* These have to be changed together */
        grid-template-rows: 100px 50px;
        width: 150px;
        height: 150px;
        /* --------------------------------- */
        box-sizing: border-box;
        aspect-ratio: 1;
        color: var(--uui-color-text,#060606);
      }

      :host(:hover) slot[name='actions']::slotted(*) {
        opacity: 1;
      }

      slot[name='actions']::slotted(*) {
        position: absolute;
        top: 8px;
        right: 8px;
        max-width: 100%;
        height: 32px;
        font-size: 13px;
        opacity: 0;
        z-index: 1;
        transition: opacity 150ms;
      }

      #file-symbol {
        aspect-ratio: 1 / 1;
        margin: auto;
        max-width: 100%;
        max-height: 100%;
      }

      #file-info {
        min-width: 0;
        display: flex;
        text-align: center;
        flex-direction: column;
        font-size: 1rem;
      }

      #file-name {
        display: flex;
        justify-content: center;
      }

      #file-name-start {
        overflow: hidden;
        white-space: nowrap;
        text-overflow: ellipsis;
      }

      #file-name-end {
        white-space: nowrap;
      }

      #file-size {
        opacity: 0.6;
      }

      .has-source:hover {
        text-decoration: underline;
        cursor: pointer;
      }
    `],Be([_()],me.prototype,"_name",2),Be([_()],me.prototype,"_url",2),Be([_()],me.prototype,"_extension",2),Be([_()],me.prototype,"_src",2),Be([_()],me.prototype,"_size",2),Be([_()],me.prototype,"_isDirectory",2),Be([_()],me.prototype,"_file",2),Be([_()],me.prototype,"_isImage",2),Be([a({attribute:!1})],me.prototype,"file",1),me=Be([v("uui-file-preview")],me);var hv=Object.defineProperty,dv=Object.getOwnPropertyDescriptor,Jo=(e,t,i,o)=>{for(var r=o>1?void 0:o?dv(t,i):t,s=e.length-1,n;s>=0;s--)(n=e[s])&&(r=(o?n(t,i,r):n(r))||r);return o&&r&&hv(t,i,r),r};let Xt=class extends g{constructor(){super(...arguments),this.description=null,this._labelSlotHasContent=!1,this._labelSlotChanged=e=>{this._labelSlotHasContent=e.target.assignedNodes({flatten:!0}).length>0},this._descriptionSlotHasContent=!1,this._descriptionSlotChanged=e=>{this._descriptionSlotHasContent=e.target.assignedNodes({flatten:!0}).length>0}}connectedCallback(){super.connectedCallback(),x(this,"uui-form-validation-message")}render(){return l`
      <div id="label" style=${this._labelSlotHasContent?"":"display: none"}>
        <slot name="label" @slotchange=${this._labelSlotChanged}></slot>
      </div>
      <div
        id="description"
        style=${this._descriptionSlotHasContent||this.description!==null?"":"display: none"}>
        ${this.description}
        <slot
          name="description"
          @slotchange=${this._descriptionSlotChanged}></slot>
      </div>
      <uui-form-validation-message>
        <slot></slot>
        <slot name="message" slot="message"></slot>
      </uui-form-validation-message>
    `}};Xt.styles=[b`
      :host {
        position: relative;
        display: block;
        margin-top: var(--uui-size-space-5,18px);
        margin-bottom: var(--uui-size-space-5,18px);
      }
      #label {
        margin-top: -5px;
        margin-bottom: 5px;
      }
      #description {
        color: var(--uui-color-disabled-contrast,#c4c4c4);
        font-size: var(--uui-type-small-size,12px);
      }
      #label + #description {
        margin-top: -8px;
        min-height: 8px;
      }
    `],Jo([a({type:String})],Xt.prototype,"description",2),Jo([_()],Xt.prototype,"_labelSlotHasContent",2),Jo([_()],Xt.prototype,"_descriptionSlotHasContent",2),Xt=Jo([v("uui-form-layout-item")],Xt);/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const pu=(e,t,i)=>{const o=new Map;for(let r=t;r<=i;r++)o.set(e[r],r);return o},Pn=mi(class extends _i{constructor(e){if(super(e),e.type!==Pe.CHILD)throw Error("repeat() can only be used in text expressions")}dt(e,t,i){let o;i===void 0?i=t:t!==void 0&&(o=t);const r=[],s=[];let n=0;for(const u of e)r[n]=o?o(u,n):n,s[n]=i(u,n),n++;return{values:s,keys:r}}render(e,t,i){return this.dt(e,t,i).values}update(e,[t,i,o]){const r=yp(e),{values:s,keys:n}=this.dt(t,i,o);if(!Array.isArray(r))return this.ut=n,s;const u=this.ut??=[],c=[];let p,f,h=0,C=r.length-1,d=0,y=s.length-1;for(;h<=C&&d<=y;)if(r[h]===null)h++;else if(r[C]===null)C--;else if(u[h]===n[d])c[d]=Yt(r[h],s[d]),h++,d++;else if(u[C]===n[y])c[y]=Yt(r[C],s[y]),C--,y--;else if(u[h]===n[y])c[y]=Yt(r[h],s[y]),kr(e,c[y+1],r[h]),h++,y--;else if(u[C]===n[d])c[d]=Yt(r[C],s[d]),kr(e,r[h],r[C]),C--,d++;else if(p===void 0&&(p=pu(n,d,y),f=pu(u,h,C)),p.has(u[h]))if(p.has(u[C])){const I=f.get(n[d]),$=I!==void 0?r[I]:null;if($===null){const V=kr(e,r[h]);Yt(V,s[d]),c[d]=V}else c[d]=Yt($,s[d]),kr(e,r[h],$),r[I]=null;d++}else pn(r[C]),C--;else pn(r[h]),h++;for(;d<=y;){const I=kr(e,c[y+1]);Yt(I,s[d]),c[d++]=I}for(;h<=C;){const I=r[h++];I!==null&&pn(I)}return this.ut=n,Gl(e,c),ue}});/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */class Sn extends _i{constructor(t){if(super(t),this.it=E,t.type!==Pe.CHILD)throw Error(this.constructor.directiveName+"() can only be used in child bindings")}render(t){if(t===E||t==null)return this._t=void 0,this.it=t;if(t===ue)return t;if(typeof t!="string")throw Error(this.constructor.directiveName+"() called with a non-string value");if(t===this.it)return this._t;this.it=t;const i=[t];return i.raw=i,this._t={_$litType$:this.constructor.resultType,strings:i,values:[]}}}Sn.directiveName="unsafeHTML",Sn.resultType=1;const es=mi(Sn);var pv=Object.defineProperty,vv=Object.getOwnPropertyDescriptor,vu=(e,t,i,o)=>{for(var r=o>1?void 0:o?vv(t,i):t,s=e.length-1,n;s>=0;s--)(n=e[s])&&(r=(o?n(t,i,r):n(r))||r);return o&&r&&pv(t,i,r),r};let Ir=class extends g{constructor(){super(),this._for=null,this._messages=new Map,this._onControlInvalid=e=>{const t=e.composedPath()[0];t.pristine===!1?this._messages.set(t,t.validationMessage):this._messages.delete(t),this.requestUpdate("_messages")},this._onControlValid=e=>{const t=e.composedPath()[0];this._messages.delete(t),this.requestUpdate("_messages")},this.for===null&&(this.for=this)}get for(){return this._for}set for(e){let t=null;typeof e=="string"?t=this.getRootNode()?.getElementById(e):e instanceof HTMLElement&&(t=e);const i=t??this,o=this._for;o!==i&&(o!==null&&(o.removeEventListener(bi.INVALID,this._onControlInvalid),o.removeEventListener(bi.VALID,this._onControlValid)),this._for=i,this._for.addEventListener(bi.INVALID,this._onControlInvalid),this._for.addEventListener(bi.VALID,this._onControlValid))}render(){return l`
      <slot></slot>
      <div id="messages">
        ${Pn(this._messages,e=>l`<div>${es(e[1])}</div>`)}
        <slot name="message"></slot>
      </div>
    `}};Ir.styles=[b`
      #messages {
        color: var(--uui-color-invalid-standalone,rgb(191, 33, 78));
      }
    `],vu([a({reflect:!1,attribute:!0})],Ir.prototype,"for",1),Ir=vu([v("uui-form-validation-message")],Ir);var fv=Object.getOwnPropertyDescriptor,bv=(e,t,i,o)=>{for(var r=o>1?void 0:o?fv(t,i):t,s=e.length-1,n;s>=0;s--)(n=e[s])&&(r=n(r)||r);return r};let On=class extends g{constructor(){super(...arguments),this._formElement=null}getFormElement(){return this._formElement}_onSlotChanged(e){this._formElement&&(this._formElement.removeEventListener("submit",this._onSubmit),this._formElement.removeEventListener("reset",this._onReset));const t=e.target.assignedNodes({flatten:!0}).filter(i=>i instanceof HTMLFormElement);this._formElement=t.length>0?t[0]:null,this._formElement&&(this._formElement.setAttribute("novalidate",""),this._formElement.addEventListener("submit",this._onSubmit),this._formElement.addEventListener("reset",this._onReset))}_onSubmit(e){if(e.target===null)return;const t=e.target;if(!t.checkValidity()){t.setAttribute("submit-invalid","");return}t.removeAttribute("submit-invalid")}_onReset(e){e.target!==null&&e.target.removeAttribute("submit-invalid")}render(){return l`<slot @slotchange=${this._onSlotChanged}></slot>`}};On=bv([v("uui-form")],On);class Ti extends A{constructor(t,i={}){super(t,{bubbles:!0,composed:!0,...i}),this.icon=null}acceptRequest(t){this.icon=t,this.stopImmediatePropagation()}}Ti.ICON_REQUEST="icon-request";var gv=Object.defineProperty,mv=Object.getOwnPropertyDescriptor,Zt=(e,t,i,o)=>{for(var r=o>1?void 0:o?mv(t,i):t,s=e.length-1,n;s>=0;s--)(n=e[s])&&(r=(o?n(t,i,r):n(r))||r);return o&&r&&gv(t,i,r),r};let He=class extends g{constructor(){super(...arguments),this._name=null,this._retrievedNameIcon=!1,this._nameSvg=null,this.label="",this.svg=null,this.fallback=null,this._useFallback=!1}get name(){return this._name}set name(e){this._name=e,this.shadowRoot&&this.requestIcon()}requestIcon(){if(this._name!==""&&this._name!==null){const e=new Ti(Ti.ICON_REQUEST,{detail:{iconName:this._name}});this.dispatchEvent(e),e.icon!==null?(this._retrievedNameIcon=!0,e.icon.then(t=>{this._useFallback=!1,this._nameSvg=t})):(this._retrievedNameIcon=!1,this._useFallback=!0)}}connectedCallback(){super.connectedCallback(),this._retrievedNameIcon===!1&&this.requestIcon()}disconnectedCallback(){this._retrievedNameIcon=!1}firstUpdated(){this._retrievedNameIcon===!1&&this.requestIcon(),typeof this.label=="string"&&this.label.length>0?(this.setAttribute("role","img"),this.setAttribute("aria-label",this.label),this.removeAttribute("aria-hidden")):(this.removeAttribute("role"),this.removeAttribute("aria-label"),this.setAttribute("aria-hidden","true"))}render(){return this._useFallback===!0?this.fallback===null?l`<slot name="fallback"></slot>`:l`${es(this.fallback)}`:this._nameSvg!==null?l`${es(this._nameSvg)}`:this.svg!==null?l`${es(this.svg)}`:l`<slot></slot>`}};He.styles=[b`
      :host {
        vertical-align: text-bottom;
        display: inline-flex;
        align-items: center;
        justify-content: center;
        width: 1.125em;
        height: 1.125em;
      }

      :host svg,
      ::slotted(svg) {
        color: var(--uui-icon-color, currentColor);
        width: 100%;
      }

      :host-context(div[slot='prepend']) {
        margin-left: var(--uui-size-2, 6px);
      }

      :host-context(div[slot='append']) {
        margin-right: var(--uui-size-2, 6px);
      }
    `],Zt([_()],He.prototype,"_nameSvg",2),Zt([a()],He.prototype,"label",2),Zt([a()],He.prototype,"name",1),Zt([a({attribute:!1})],He.prototype,"svg",2),Zt([a({attribute:!1})],He.prototype,"fallback",2),Zt([_()],He.prototype,"_useFallback",2),He=Zt([v("uui-icon")],He);class In{constructor(t){this.promise=new Promise((i,o)=>{this.resolve=i,this.reject=o}),t&&this.resolve(t)}set svg(t){this.resolve(t)}}class An{constructor(){this.icons={},this._onIconRequest=t=>{const i=this.getIcon(t.detail.iconName);i!==null&&t.acceptRequest(i)}}attach(t){t.addEventListener(Ti.ICON_REQUEST,this._onIconRequest)}detach(t){t.removeEventListener(Ti.ICON_REQUEST,this._onIconRequest)}defineIcon(t,i){if(this.icons[t]){this.icons[t].svg=i;return}this.icons[t]=new In(i)}getIcon(t){return this.icons[t]||this.acceptIcon(t)?this.icons[t].promise:null}provideIcon(t){return this.icons[t]=new In}acceptIcon(t){return!1}getIconNames(){return Object.keys(this.icons)}}var _v=Object.defineProperty,yv=Object.getOwnPropertyDescriptor,fu=(e,t,i,o)=>{for(var r=o>1?void 0:o?yv(t,i):t,s=e.length-1,n;s>=0;s--)(n=e[s])&&(r=(o?n(t,i,r):n(r))||r);return o&&r&&_v(t,i,r),r};let Ar=class extends g{constructor(){super(),this._icons={},this._registry=new An,this._registry.attach(this)}get icons(){return this._icons}set icons(e){this._icons=e,this._registry&&Object.entries(this._icons).forEach(([t,i])=>this._registry.defineIcon(t,i))}get registry(){return this._registry}set registry(e){this.registry&&this.registry.detach(this),e.attach(this),this._registry=e}render(){return l`<slot></slot>`}};fu([a({attribute:!1})],Ar.prototype,"_icons",2),Ar=fu([v("uui-icon-registry")],Ar);const wv=m`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14"/><path d="M12 5v14"/></svg>`,xv=m`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"><path d="m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3Z" /><path d="M12 9v4" /><path d="M12 17h.01" /></svg>`,$v=m`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"><path d="m21.44 11.05-9.19 9.19a6 6 0 0 1-8.49-8.49l8.57-8.57A4 4 0 1 1 18 8.84l-8.59 8.57a2 2 0 0 1-2.83-2.83l8.49-8.48" /></svg>`,kv=m`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"><rect width="18" height="18" x="3" y="4" rx="2" ry="2" /><line x1="16" x2="16" y1="2" y2="6" /><line x1="8" x2="8" y1="2" y2="6" /><line x1="3" x2="21" y1="10" y2="10" /><path d="M8 14h.01" /><path d="M12 14h.01" /><path d="M16 14h.01" /><path d="M8 18h.01" /><path d="M12 18h.01" /><path d="M16 18h.01" /></svg>`,Cv=m`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12" /></svg>`,Ev=m`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"><rect width="8" height="4" x="8" y="2" rx="1" ry="1" /><path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2" /></svg>`,Pv=m`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"><polyline points="16 18 22 12 16 6" /><polyline points="8 6 2 12 8 18" /></svg>`,Sv=m`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"><path d="m2 22 1-1h3l9-9" /><path d="M3 21v-3l9-9" /><path d="m15 6 3.4-3.4a2.1 2.1 0 1 1 3 3L18 9l.4.4a2.1 2.1 0 1 1-3 3l-3.8-3.8a2.1 2.1 0 1 1 3-3l.4.4Z" /></svg>`,Ov=m`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"><path d="M15.5 2H8.6c-.4 0-.8.2-1.1.5-.3.3-.5.7-.5 1.1v12.8c0 .4.2.8.5 1.1.3.3.7.5 1.1.5h9.8c.4 0 .8-.2 1.1-.5.3-.3.5-.7.5-1.1V6.5L15.5 2z" /><path d="M3 7.6v12.8c0 .4.2.8.5 1.1.3.3.7.5 1.1.5h9.8" /><path d="M15 2v5h5" /></svg>`,Iv=m`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"><path d="M3 6h18" /><path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6" /><path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2" /><line x1="10" x2="10" y1="11" y2="17" /><line x1="14" x2="14" y1="11" y2="17" /></svg>`,Av=m`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"><path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z" /><polyline points="14 2 14 8 20 8" /></svg>`,Uv=m`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" /><polyline points="7 10 12 15 17 10" /><line x1="12" x2="12" y1="15" y2="3" /></svg>`,zv=m`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"><path d="M17 3a2.85 2.83 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5Z" /><path d="m15 5 4 4" /></svg>`,Mv=m`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"><path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" /></svg>`,Dv=m`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"><path d="M20 20a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.9a2 2 0 0 1-1.69-.9L9.6 3.9A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2Z" /><path d="M2 10h20" /></svg>`,Lv=m`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"><polygon points="7.86 2 16.14 2 22 7.86 22 16.14 16.14 22 7.86 22 2 16.14 2 7.86 7.86 2" /><path d="m15 9-6 6" /><path d="m9 9 6 6" /></svg>`,Tv=m`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round" ><circle cx="12" cy="12" r="10" /><path d="M12 16v-4" /><path d="M12 8h.01" /></svg>`,Vv=m`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71" /><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71" /></svg>`,Nv=m`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"><rect width="18" height="11" x="3" y="11" rx="2" ry="2" /><path d="M7 11V7a5 5 0 0 1 10 0v4" /></svg>`,Bv=m`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"><rect width="4" height="16" x="6" y="4" /><rect width="4" height="16" x="14" y="4" /></svg>`,Hv=m`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"><rect width="18" height="18" x="3" y="3" rx="2" ry="2" /><circle cx="9" cy="9" r="2" /><path d="m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21" /></svg>`,jv=m`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"><polygon points="5 3 19 12 5 21 5 3" /></svg>`,Rv=m`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"><path d="M18 6 6 18" /><path d="m6 6 12 12" /></svg>`,Wv=m`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"><circle cx="11" cy="11" r="8" /><path d="m21 21-4.3-4.3" /></svg>`,Fv=m`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"><path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z" /><circle cx="12" cy="12" r="3" /></svg>`,Gv=m`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"><path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z" /><circle cx="12" cy="12" r="3" /></svg>`,qv=m`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14" /></svg>`,Kv=m`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"><path d="M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8" /><path d="M21 3v5h-5" /><path d="M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16" /><path d="M8 16H3v5" /></svg>`,Yv=m`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"><rect width="18" height="11" x="3" y="11" rx="2" ry="2" /><path d="M7 11V7a5 5 0 0 1 9.9-1" /></svg>`,Xv=m`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"><path d="M9.88 9.88a3 3 0 1 0 4.24 4.24" /><path d="M10.73 5.08A10.43 10.43 0 0 1 12 5c7 0 10 7 10 7a13.16 13.16 0 0 1-1.67 2.68" /><path d="M6.61 6.61A13.526 13.526 0 0 0 2 12s3 7 10 7a9.74 9.74 0 0 0 5.39-1.61" /><line x1="2" x2="22" y1="2" y2="22" /></svg>`,Zv=m`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"><path d="M15 4V2" /><path d="M15 16v-2" /><path d="M8 9h2" /><path d="M20 9h2" /><path d="M17.8 11.8 19 13" /><path d="M15 9h0" /><path d="M17.8 6.2 19 5" /><path d="m3 21 9-9" /><path d="M12.2 6.2 11 5" /></svg>`,Qv=m`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10" /><path d="m15 9-6 6" /><path d="m9 9 6 6" /></svg>`;class bu extends An{constructor(){super(),this.defineIcon("add",wv.strings[0]),this.defineIcon("alert",xv.strings[0]),this.defineIcon("attachment",$v.strings[0]),this.defineIcon("calendar",kv.strings[0]),this.defineIcon("check",Cv.strings[0]),this.defineIcon("clipboard",Ev.strings[0]),this.defineIcon("code",Pv.strings[0]),this.defineIcon("colorpicker",Sv.strings[0]),this.defineIcon("copy",Ov.strings[0]),this.defineIcon("delete",Iv.strings[0]),this.defineIcon("document",Av.strings[0]),this.defineIcon("download",Uv.strings[0]),this.defineIcon("edit",zv.strings[0]),this.defineIcon("favorite",Mv.strings[0]),this.defineIcon("folder",Dv.strings[0]),this.defineIcon("forbidden",Lv.strings[0]),this.defineIcon("info",Tv.strings[0]),this.defineIcon("link",Vv.strings[0]),this.defineIcon("lock",Nv.strings[0]),this.defineIcon("pause",Bv.strings[0]),this.defineIcon("picture",Hv.strings[0]),this.defineIcon("play",jv.strings[0]),this.defineIcon("remove",Rv.strings[0]),this.defineIcon("search",Wv.strings[0]),this.defineIcon("see",Fv.strings[0]),this.defineIcon("settings",Gv.strings[0]),this.defineIcon("subtract",qv.strings[0]),this.defineIcon("sync",Kv.strings[0]),this.defineIcon("unlock",Yv.strings[0]),this.defineIcon("unsee",Xv.strings[0]),this.defineIcon("wand",Zv.strings[0]),this.defineIcon("wrong",Qv.strings[0])}}var Jv=Object.getOwnPropertyDescriptor,ef=(e,t,i,o)=>{for(var r=o>1?void 0:o?Jv(t,i):t,s=e.length-1,n;s>=0;s--)(n=e[s])&&(r=n(r)||r);return r};let Un=class extends Ar{constructor(){super(),this.registry=new bu}};Un=ef([v("uui-icon-registry-essential")],Un);var tf=Object.defineProperty,rf=Object.getOwnPropertyDescriptor,Vi=(e,t,i,o)=>{for(var r=o>1?void 0:o?rf(t,i):t,s=e.length-1,n;s>=0;s--)(n=e[s])&&(r=(o?n(t,i,r):n(r))||r);return o&&r&&tf(t,i,r),r};let tt=class extends De(g){constructor(){super(),this.accept="",this.multiple=!1,this._files=[],this._updateFileWrappers=e=>{let t=[];for(const i of e)this.multiple?t.push(i):t=[i];this._files=t},this.addEventListener("dragenter",()=>this._setShowDropzone(!0)),this.addEventListener("dragleave",()=>this._setShowDropzone(!1)),this.addEventListener("drop",()=>this._setShowDropzone(!1))}get value(){return super.value}set value(e){if(super.value=e,e instanceof FormData){const t=this.multiple?e.getAll(this.name):[e.get(this.name)];this._updateFileWrappers(t);return}if(e instanceof File){this._updateFileWrappers([e]);return}}connectedCallback(){super.connectedCallback(),x(this,"uui-icon"),x(this,"uui-file-dropzone"),x(this,"uui-button"),x(this,"uui-action-bar"),x(this,"uui-file-preview")}getFormElement(){return this._dropZone}async blur(){await this.updateComplete,this._dropzone.blur()}async focus(){await this.updateComplete,this._dropzone.focus()}async click(){await this.updateComplete,this._dropzone.browse()}_handleClick(e){e.stopImmediatePropagation(),this._dropzone.browse()}async _handleFilesChange(e){const i=e.detail.files.filter(r=>r instanceof File||r.isFile);if(!this.multiple){const r=i[0],n=r instanceof File?r:await this._getFile(r);if(this.value instanceof File){this.value=n;return}if(this.value instanceof FormData){this.value.delete(this.name),this.value.append(this.name,n),this._updateFileWrappers([n]);return}}let o=this.value;if(i.length>0&&!(this.value instanceof FormData)&&(o=new FormData),o instanceof FormData)for(const r of i){const s=r instanceof File;o.append(this.name,s?r:await this._getFile(r))}this.value=o}async _getFile(e){return await new Promise((t,i)=>e.file(t,i))}_removeFile(e){const t=this._files[e];if(this.value instanceof FormData){const o=this.value.getAll(this.name).filter(r=>r!==t);if(o.length===0)this.value="";else{this.value.delete(this.name);for(const r of o)this.value.append(this.name,r)}this._updateFileWrappers(o)}this.value instanceof File&&(this.value="",this._updateFileWrappers([]))}_setShowDropzone(e){e?this._dropZone.style.display="flex":this._dropZone.style.display="none"}_renderFileItem(e,t){return l`<uui-file-preview .file="${e}">
      <uui-action-bar slot="actions">
        <uui-button
          @click=${()=>this._removeFile(t)}
          color="danger"
          label=${`Delete ${e.name}`}>
          <uui-icon name="delete" .fallback=${Cd.strings[0]}></uui-icon>
        </uui-button>
      </uui-action-bar>
    </uui-file-preview>`}_renderFiles(){return l`${Pn(this._files,e=>e.name+e.size,(e,t)=>this._renderFileItem(e,t))}`}render(){return l`
      <uui-file-dropzone
        id="dropzone"
        ?multiple=${this.multiple}
        .accept=${this.accept}
        @change=${this._handleFilesChange}
        label="Drop files here"></uui-file-dropzone>
      <div id="files">
        ${this._renderFiles()}
        ${this._files.length===0||this.multiple?l`<uui-button
              @click=${this._handleClick}
              id="add-button"
              look="placeholder"
              label="Add"></uui-button>`:E}
      </div>
    `}};tt.styles=[b`
      :host {
        width: 100%;
        height: 100%;
        position: relative;
        display: flex;
        box-sizing: border-box;
        border: 1px solid var(--uui-color-border,#d8d7d9);
      }

      #input {
        position: absolute;
        width: 0px;
        height: 0px;
        opacity: 0;
        display: none;
      }

      #files {
        display: grid;
        box-sizing: border-box;
        justify-items: center;
        width: 100%;
        grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
        grid-auto-rows: min-content;
        gap: 16px;
        padding: 16px;
        overflow: auto;
        max-height: 100%;
      }

      #dropzone {
        display: none;
        position: absolute;
        inset: 0px;
        z-index: 10;
        justify-content: center;
        align-items: center;
      }

      #add-button {
        width: 150px;
        height: 150px;
        display: flex;
        padding: 16px;
        box-sizing: border-box;
        justify-content: center;
        align-items: stretch;
      }
    `],Vi([O("#dropzone")],tt.prototype,"_dropzone",2),Vi([O("#dropzone")],tt.prototype,"_dropZone",2),Vi([a({type:String})],tt.prototype,"accept",2),Vi([a({type:Boolean})],tt.prototype,"multiple",2),Vi([_()],tt.prototype,"_files",2),tt=Vi([v("uui-input-file")],tt);class Qt extends A{constructor(t,i={}){super(t,{bubbles:!0,...i})}}Qt.CHANGE="change",Qt.INPUT="input";var of=Object.defineProperty,sf=Object.getOwnPropertyDescriptor,gu=e=>{throw TypeError(e)},ee=(e,t,i,o)=>{for(var r=o>1?void 0:o?sf(t,i):t,s=e.length-1,n;s>=0;s--)(n=e[s])&&(r=(o?n(t,i,r):n(r))||r);return o&&r&&of(t,i,r),r},nf=(e,t,i)=>t.has(e)||gu("Cannot "+i),af=(e,t,i)=>t.has(e)?gu("Cannot add the same private member more than once"):t instanceof WeakSet?t.add(e):t.set(e,i),lf=(e,t,i)=>(nf(e,t,"access private method"),i),zn,mu;let T=class extends De(Me("",g),""){constructor(){super(),af(this,zn),this.minlengthMessage="This field need more characters",this.maxlengthMessage="This field exceeds the allowed amount of characters",this.disabled=!1,this.readonly=!1,this.placeholder="",this.autoWidth=!1,this.inputMode="",this._type="text",this.addEventListener("mousedown",()=>{this.style.setProperty("--uui-show-focus-outline","0")}),this.addEventListener("blur",()=>{this.style.setProperty("--uui-show-focus-outline","")}),this.addEventListener("keydown",lf(this,zn,mu)),this.addValidator("tooShort",()=>this.minlengthMessage,()=>!!this.minlength&&String(this.value).length<this.minlength),this.addValidator("tooLong",()=>this.maxlengthMessage,()=>!!this.maxlength&&String(this.value).length>this.maxlength),this.updateComplete.then(()=>{this.addFormControlElement(this._input)})}get type(){return this._type}set type(e){this._type=e}async blur(){await this.updateComplete,this._input.blur()}async focus(){await this.updateComplete,this._input.focus()}async select(){await this.updateComplete,this._input.select()}getFormElement(){return this.shadowRoot?.querySelector("input")}onInput(e){e.stopPropagation(),this.value=e.target.value,this.dispatchEvent(new Qt(Qt.INPUT))}onChange(e){e.stopPropagation(),this.pristine=!1,this.dispatchEvent(new Qt(Qt.CHANGE))}renderPrepend(){return l`<slot name="prepend"></slot>`}renderAppend(){return l`<slot name="append"></slot>`}render(){return l`
      ${this.renderPrepend()}
      ${this.autoWidth?this.renderInputWithAutoWidth():this.renderInput()}
      ${this.renderAppend()}
    `}renderInputWithAutoWidth(){return l`<div id="control">
      ${this.renderInput()}${this.renderAutoWidthBackground()}
    </div>`}renderInput(){return l`<input
      id="input"
      .type=${this.type}
      .value=${this.value}
      .name=${this.name}
      pattern=${w(this.pattern)}
      min=${w(this.min)}
      max=${w(this.max)}
      step=${w(this.step)}
      spellcheck=${this.spellcheck}
      autocomplete=${w(this.autocomplete)}
      placeholder=${w(this.placeholder)}
      aria-label=${w(this.label)}
      inputmode=${w(this.inputMode)}
      ?disabled=${this.disabled}
      ?autofocus=${this.autofocus}
      ?required=${this.required}
      ?readonly=${this.readonly}
      @input=${this.onInput}
      @change=${this.onChange} />`}renderAutoWidthBackground(){return l` <div id="auto" aria-hidden="true">${this.renderText()}</div>`}renderText(){return l`${this.value.length>0?this.value:this.placeholder}`}};zn=new WeakSet,mu=function(e){this.type!=="color"&&e.key=="Enter"&&this.submit()},T.formAssociated=!0,T.styles=[b`
      :host {
        position: relative;
        display: inline-flex;
        align-items: stretch;
        height: var(--uui-input-height, var(--uui-size-11,33px));
        text-align: left;
        box-sizing: border-box;
        background-color: var(
          --uui-input-background-color,
          var(--uui-color-surface,#fff)
        );
        border: var(--uui-input-border-width, 1px) solid
          var(--uui-input-border-color, var(--uui-color-border,#d8d7d9));
        border-radius: var(--uui-border-radius,3px);

        --uui-button-height: 100%;
        --auto-width-text-margin-right: 0;
        --auto-width-text-margin-left: 0;
      }

      #control {
        position: relative;
        display: flex;
        flex-direction: column;
        align-items: stretch;
        justify-content: center;
        flex-grow: 1;
      }

      #auto {
        border: 0 1px solid transparent;
        visibility: hidden;
        white-space: pre;
        z-index: -1;
        height: 0px;
        padding: 0 var(--uui-size-space-3,9px);
        margin: 0 var(--auto-width-text-margin-right) 0
          var(--auto-width-text-margin-left);
      }

      :host([auto-width]) #input {
        width: 10px;
        min-width: 100%;
      }

      :host(:hover) {
        border-color: var(
          --uui-input-border-color-hover,
          var(--uui-color-border-standalone,#c2c2c2)
        );
      }
      /* TODO: Fix so we dont get double outline when there is focus on things in the slot. */
      :host(:focus-within) {
        border-color: var(
          --uui-input-border-color-focus,
          var(--uui-color-border-emphasis,#a1a1a1)
        );
        outline: calc(2px * var(--uui-show-focus-outline, 1)) solid
          var(--uui-color-focus,#3879ff);
      }
      :host(:focus) {
        border-color: var(
          --uui-input-border-color-focus,
          var(--uui-color-border-emphasis,#a1a1a1)
        );
      }
      :host([disabled]) {
        background-color: var(
          --uui-input-background-color-disabled,
          var(--uui-color-disabled,#f3f3f5)
        );
        border-color: var(
          --uui-input-border-color-disabled,
          var(--uui-color-disabled,#f3f3f5)
        );

        color: var(--uui-color-disabled-contrast,#c4c4c4);
      }
      :host([disabled]) input {
        -webkit-text-fill-color: var(
          --uui-color-disabled-contrast,#c4c4c4
        ); /* required on Safari and IOS */
      }
      :host([readonly]) {
        background-color: var(
          --uui-input-background-color-readonly,
          var(--uui-color-disabled,#f3f3f5)
        );
        border-color: var(
          --uui-input-border-color-readonly,
          var(--uui-color-disabled-standalone,rgb(226, 226, 226))
        );
      }

      :host(:not([pristine]):invalid),
      /* polyfill support */
      :host(:not([pristine])[internals-invalid]) {
        border-color: var(--uui-color-invalid,#d42054);
      }

      input {
        font-family: inherit;
        padding: var(--uui-size-1,3px) var(--uui-size-space-3,9px);
        font-size: inherit;
        color: inherit;
        border-radius: var(--uui-border-radius,3px);
        box-sizing: border-box;
        border: none;
        background: none;
        width: 100%;
        height: inherit;
        text-align: inherit;
        outline: none;
      }

      input[type='password']::-ms-reveal {
        display: none;
      }

      /* TODO: make sure color looks good, or remove it as an option as we want to provide color-picker component */
      input[type='color'] {
        width: 30px;
        padding: 0;
        border: none;
      }

      ::slotted(uui-input),
      ::slotted(uui-input-lock) {
        height: 100%;
        --uui-input-border-width: 0;
      }
    `],ee([a()],T.prototype,"min",2),ee([a({type:Number})],T.prototype,"minlength",2),ee([a({type:String,attribute:"minlength-message"})],T.prototype,"minlengthMessage",2),ee([a()],T.prototype,"max",2),ee([a({type:Number})],T.prototype,"maxlength",2),ee([a({type:String,attribute:"maxlength-message"})],T.prototype,"maxlengthMessage",2),ee([a({type:Number})],T.prototype,"step",2),ee([a({type:Boolean,reflect:!0})],T.prototype,"disabled",2),ee([a({type:Boolean,reflect:!0})],T.prototype,"readonly",2),ee([a()],T.prototype,"placeholder",2),ee([a()],T.prototype,"autocomplete",2),ee([a({type:Boolean,reflect:!0,attribute:"auto-width"})],T.prototype,"autoWidth",2),ee([a({type:String})],T.prototype,"type",1),ee([a({type:String})],T.prototype,"pattern",2),ee([a({type:String})],T.prototype,"inputMode",2),ee([O("#input")],T.prototype,"_input",2),T=ee([v("uui-input")],T);class ts extends A{constructor(t,i={}){super(t,{bubbles:!0,...i})}}ts.LOCK_CHANGE="lock-change";var uf=Object.defineProperty,cf=Object.getOwnPropertyDescriptor,_u=(e,t,i,o)=>{for(var r=o>1?void 0:o?cf(t,i):t,s=e.length-1,n;s>=0;s--)(n=e[s])&&(r=(o?n(t,i,r):n(r))||r);return o&&r&&uf(t,i,r),r};let Ur=class extends T{constructor(){super(),this.locked=!0,this.readonly=!0}connectedCallback(){super.connectedCallback(),x(this,"uui-icon"),x(this,"uui-button")}_onLockToggle(){this.readonly=this.locked=!this.locked,this.pristine=!1,this.dispatchEvent(new ts(ts.LOCK_CHANGE))}renderIcon(){return this.locked===!0?l`<uui-icon name="lock" .fallback=${Ed.strings[0]}></uui-icon>`:l`<uui-icon
          name="unlock"
          .fallback=${Id.strings[0]}></uui-icon>`}renderPrepend(){return l`<uui-button
      .disabled=${this.disabled}
      @click=${this._onLockToggle}
      compact
      id="lock"
      label="${this.locked?"Unlock input":"Lock input"}">
      ${this.renderIcon()}
    </uui-button>`}};Ur.styles=[...T.styles,b`
      #lock {
        height: 100%;

        --uui-button-padding-left-factor: 0.75;
        --uui-button-padding-right-factor: 0.75;
        font-size: 12px;
      }

      :host([locked]) #input {
        cursor: not-allowed;
        opacity: 0.55;
      }
    `],_u([a({type:Boolean,reflect:!0})],Ur.prototype,"locked",2),Ur=_u([v("uui-input-lock")],Ur);var hf=Object.defineProperty,df=Object.getOwnPropertyDescriptor,Mn=(e,t,i,o)=>{for(var r=o>1?void 0:o?df(t,i):t,s=e.length-1,n;s>=0;s--)(n=e[s])&&(r=(o?n(t,i,r):n(r))||r);return o&&r&&hf(t,i,r),r};let Ni=class extends T{constructor(){super(...arguments),this.passwordType="password"}get type(){return this.passwordType}set type(e){this.passwordType=e}_onPasswordToggle(){this.passwordType==="password"?this.passwordType="text":this.passwordType="password"}connectedCallback(){super.connectedCallback(),x(this,"uui-icon"),x(this,"uui-button"),this.hasAttribute("spellcheck")||(this.spellcheck=!1)}renderIcon(){return this.passwordType==="password"?l`<uui-icon name="see" .fallback=${Sd.strings[0]}></uui-icon>`:l`<uui-icon
          name="unsee"
          .fallback=${Ad.strings[0]}></uui-icon>`}renderAppend(){return l`<uui-button
      .disabled=${this.disabled}
      @click=${this._onPasswordToggle}
      compact
      label="${this.passwordType==="password"?"Show password":"Hide password"}"
      id="eye">
      ${this.renderIcon()}
    </uui-button>`}};Ni.styles=[...T.styles,b`
      #eye {
        height: 100%;
        margin-left: -6px;
      }

      #clear:hover {
        color: black;
      }
    `],Mn([_()],Ni.prototype,"passwordType",2),Mn([a()],Ni.prototype,"type",1),Ni=Mn([v("uui-input-password")],Ni);var pf=Object.getOwnPropertyDescriptor,vf=(e,t,i,o)=>{for(var r=o>1?void 0:o?pf(t,i):t,s=e.length-1,n;s>=0;s--)(n=e[s])&&(r=n(r)||r);return r};let is=class extends g{render(){return l`<slot></slot>`}};is.styles=[b`
      :host {
        display: inline-block;
        font-family: inherit;
        font-size: var(--uui-size-4,12px);
        color: var(--uui-color-text,#060606);
      }

      ::slotted(*:first-child)uui-key {
        margin-left: 0px;
      }

      ::slotted(*:last-child)uui-key {
        margin-right: 0px;
      }
    `],is=vf([v("uui-keyboard-shortcut")],is);var ff=Object.getOwnPropertyDescriptor,bf=(e,t,i,o)=>{for(var r=o>1?void 0:o?ff(t,i):t,s=e.length-1,n;s>=0;s--)(n=e[s])&&(r=n(r)||r);return r};let rs=class extends g{render(){return l`<slot></slot>`}};rs.styles=[b`
      :host {
        background: var(--uui-color-surface,#fff);
        border: 1px solid var(--uui-color-border,#d8d7d9);
        font-family: inherit;
        font-size: var(--uui-type-small-size,12px);
        color: var(--uui-color-text,#060606);
        border-radius: 5px;
        margin: 0px 5px;
        padding: 5px 7px;
        box-sizing: border-box;
        user-select: none;
        text-transform: lowercase;
      }
    `],rs=bf([v("uui-key")],rs);var gf=Object.defineProperty,mf=Object.getOwnPropertyDescriptor,os=(e,t,i,o)=>{for(var r=o>1?void 0:o?mf(t,i):t,s=e.length-1,n;s>=0;s--)(n=e[s])&&(r=(o?n(t,i,r):n(r))||r);return o&&r&&gf(t,i,r),r};let Jt=class extends g{constructor(){super(),this.disabled=!1,this.for=null,this.required=!1,this.addEventListener("click",this._onClick)}_onClick(){if(this.disabled)return;const e=this.getForElement();e&&(e.focus(),e.click())}getForElement(){return typeof this.for=="string"?this.getRootNode()?.getElementById(this.for)||null:this.for||null}render(){return l`
      <slot></slot>
      ${this.required?l`<div id="required">*</div>`:""}
    `}};Jt.styles=[b`
      :host {
        font-weight: 700;
      }
      :host([for]) {
        cursor: pointer;
      }
      :host([disabled]) {
        cursor: default;
      }
      #required {
        display: inline;
        color: var(--uui-color-invalid,#d42054);
        font-weight: 900;
      }
    `],os([a({type:Boolean,reflect:!0})],Jt.prototype,"disabled",2),os([a({reflect:!0,attribute:!0})],Jt.prototype,"for",2),os([a({type:Boolean,reflect:!0})],Jt.prototype,"required",2),Jt=os([v("uui-label")],Jt);var _f=Object.defineProperty,yf=Object.getOwnPropertyDescriptor,Dn=(e,t,i,o)=>{for(var r=o>1?void 0:o?yf(t,i):t,s=e.length-1,n;s>=0;s--)(n=e[s])&&(r=(o?n(t,i,r):n(r))||r);return o&&r&&_f(t,i,r),r};let Bi=class extends g{constructor(){super(...arguments),this._progress=0,this._animationDuration=1}get progress(){return this._progress}set progress(e){const t=this._progress;this._progress=M(e,0,100),this.requestUpdate("progress",t)}get animationDuration(){return this._animationDuration}set animationDuration(e){const t=this._animationDuration;this._animationDuration=e>=0?e:1,this.requestUpdate("animationDuration",t)}render(){return l`
      ${this.progress?l`<div
            id="bar"
            style="max-width: ${this.progress.toString()}%;"></div>`:""}
      <div
        id="bar-anim"
        class=${this.progress?"":"animate"}
        style="animation-duration: ${this.animationDuration}s"></div>
      <div id="bar-background"></div>
    `}};Bi.styles=[b`
      :host {
        position: relative;
        display: block;
        width: 100%;
        height: 4px;
        overflow: hidden;
        color: var(--uui-color-default,#1b264f);
      }

      #bar,
      #bar-anim,
      #bar-background {
        position: absolute;
        inset: 0; /* top, left, bottom and right = 0*/
        height: 100%;
      }

      #bar-background,
      #bar {
        background: currentColor;
      }

      #bar {
        transition: max-width 120ms ease;
      }

      #bar-background {
        opacity: 0.3;
      }

      #bar-anim {
        transform: scaleX(0.4);
        animation: bar-loading 1s infinite linear;
        background: linear-gradient(
          -90deg,
          white 0%,
          white 25%,
          transparent 100%
        );
      }

      #bar-anim.animate {
        background: linear-gradient(
          -90deg,
          currentColor 0%,
          currentColor 25%,
          transparent 100%
        );
      }

      @keyframes bar-loading {
        0% {
          transform-origin: -175% 0%;
        }
        100% {
          transform-origin: 175% 0%;
        }
      }
    `],Dn([a({type:Number})],Bi.prototype,"progress",1),Dn([a({type:Number})],Bi.prototype,"animationDuration",1),Bi=Dn([v("uui-loader-bar")],Bi);var wf=Object.defineProperty,xf=Object.getOwnPropertyDescriptor,Ln=(e,t,i,o)=>{for(var r=o>1?void 0:o?xf(t,i):t,s=e.length-1,n;s>=0;s--)(n=e[s])&&(r=(o?n(t,i,r):n(r))||r);return o&&r&&wf(t,i,r),r};let Hi=class extends g{constructor(){super(...arguments),this.progress=0,this.showProgress=!1,this._resizeObserver=new ResizeObserver(()=>this.onResize()),this._isLarge=!1}_circleStyle(){return this.progress?{strokeDasharray:`${this.progress} 100`}:{strokeDasharray:"100 100"}}firstUpdated(){this._resizeObserver.observe(this)}disconnectedCallback(){this._resizeObserver.disconnect()}onResize(){const e=this.clientHeight>=30;this._isLarge!=e&&(this._isLarge=e,this.requestUpdate())}renderProgress(){return this._isLarge&&this.progress&&this.showProgress?l`<span id="progress-display">${this.progress}</span>`:""}render(){return l`
      <svg
        id="spinner"
        class=${this.progress?"":"animate"}
        viewBox="0 0 40 40"
        xmlns="http://www.w3.org/2000/svg">
        <circle id="bg" cx="50%" cy="50%" r="16" />
        <g>
          <circle
            id="circle"
            cx="50%"
            cy="50%"
            r="16"
            style=${Ye(this._circleStyle())} />
        </g>
      </svg>
      ${this.renderProgress()}
    `}};Hi.styles=[b`
      :host {
        vertical-align: middle;
        line-height: 0;
        overflow: hidden;
        display: inline-flex;
        justify-content: center;
        align-items: center;
        position: relative;
        width: 1em;
        height: 1em;
        color: var(--uui-color-default,#1b264f);
      }

      #spinner {
        width: 100%;
        height: 100%;
      }
      #spinner g {
        transform-origin: 50% 50%;
        animation: 18s linear infinite spinner-animation;
      }
      #spinner.animate g {
        animation: 800ms linear infinite spinner-animation;
      }

      @keyframes spinner-animation {
        0% {
          transform: rotate(0deg);
        }
        100% {
          transform: rotate(360deg);
        }
      }

      #spinner.animate #circle {
        animation: 1400ms ease-in infinite circle-animation;
        /** ease-in */
      }

      @keyframes circle-animation {
        0% {
          stroke-dashoffset: -55;
        }
        38% {
          stroke-dashoffset: -88;
        }
        100% {
          stroke-dashoffset: -55;
        }
      }

      svg circle {
        fill: transparent;
        stroke: currentColor;
        stroke-width: 6px;
      }

      #bg {
        opacity: 0.5;
      }

      #circle {
        stroke-linecap: round;
        stroke-dasharray: 0 0;

        transform-origin: 50% 50%;
        transform: rotate(-90deg);
        transition: stroke-dasharray 120ms ease;
      }

      #progress-display {
        position: absolute;
        left: 0;
        top: 50%;
        right: 0;
        stroke: currentColor;
        transform: translateY(-50%);
        font-size: 0.3em;
        font-weight: 700;
        text-align: center;

        /* Center the text */
        padding-top: 0.09em;
      }
    `],Ln([a({type:Number})],Hi.prototype,"progress",2),Ln([a({type:Boolean,reflect:!0,attribute:"show-progress"})],Hi.prototype,"showProgress",2),Hi=Ln([v("uui-loader-circle")],Hi);var $f=Object.getOwnPropertyDescriptor,kf=(e,t,i,o)=>{for(var r=o>1?void 0:o?$f(t,i):t,s=e.length-1,n;s>=0;s--)(n=e[s])&&(r=n(r)||r);return r};let ss=class extends g{render(){return l`
      <div></div>
      <div></div>
      <div></div>
    `}};ss.styles=[b`
      :host {
        color: var(--uui-color-default,#1b264f);
      }

      div {
        display: inline-block;
        width: var(--uui-size-2,6px);
        height: var(--uui-size-2,6px);
        border: 2px solid currentColor;
        border-radius: 100%;
        animation: loaderAnimation 1.4s infinite;
      }

      div:nth-child(1n) {
        animation-delay: 0s;
      }

      div:nth-child(2n) {
        animation-delay: 0.15s;
      }

      div:nth-child(3n) {
        animation-delay: 0.3s;
      }

      @keyframes loaderAnimation {
        0% {
          transform: scale(0.5);
          background-color: currentColor;
        }
        50% {
          transform: scale(1);
          background-color: transparent;
        }
        100% {
          transform: scale(0.5);
          background-color: currentColor;
        }
      }
    `],ss=kf([v("uui-loader")],ss);class it extends A{}it.SHOW_CHILDREN="show-children",it.HIDE_CHILDREN="hide-children",it.CLICK_LABEL="click-label";var Cf=Object.defineProperty,Ef=Object.getOwnPropertyDescriptor,yu=e=>{throw TypeError(e)},Ae=(e,t,i,o)=>{for(var r=o>1?void 0:o?Ef(t,i):t,s=e.length-1,n;s>=0;s--)(n=e[s])&&(r=(o?n(t,i,r):n(r))||r);return o&&r&&Cf(t,i,r),r},Pf=(e,t,i)=>t.has(e)||yu("Cannot "+i),Sf=(e,t,i)=>t.has(e)?yu("Cannot add the same private member more than once"):t instanceof WeakSet?t.add(e):t.set(e,i),wu=(e,t,i)=>(Pf(e,t,"access private method"),i),ns,Tn;let de=class extends _o(fi(br(Me("label",g)))){constructor(){super(...arguments),Sf(this,ns),this.disabled=!1,this.showChildren=!1,this.hasChildren=!1,this.loading=!1,this.caretLabel="Reveal the underlying items",this.iconSlotHasContent=!1,this._labelButtonChanged=e=>{this.selectableTarget=e||this},this._iconSlotChanged=e=>{this.iconSlotHasContent=e.target.assignedNodes({flatten:!0}).length>0},this._onCaretClicked=()=>{const e=this.showChildren?it.HIDE_CHILDREN:it.SHOW_CHILDREN,t=new it(e,{cancelable:!0});this.dispatchEvent(t),!t.defaultPrevented&&(this.showChildren=!this.showChildren)}}connectedCallback(){super.connectedCallback(),this.hasAttribute("role")||this.setAttribute("role","menu"),x(this,"uui-symbol-expand"),x(this,"uui-loader-bar")}async focus(){await this.updateComplete,this.shadowRoot?.querySelector("#label-button")?.focus?.()}_renderLabelInside(){return l` <slot
        name="icon"
        id="icon"
        style=${this.iconSlotHasContent?"":"display: none;"}
        @slotchange=${this._iconSlotChanged}></slot>
      ${this.renderLabel()}
      <slot name="badge" id="badge"> </slot>`}_renderLabelAsAnchor(){return this.disabled?l` <span id="label-button" ${Bo(this._labelButtonChanged)}>
        ${this._renderLabelInside()}
      </span>`:l` <a
      id="label-button"
      ${Bo(this._labelButtonChanged)}
      href=${w(this.href)}
      target=${w(this.target||void 0)}
      rel=${w(this.rel||w(this.target==="_blank"?"noopener noreferrer":void 0))}
      @click=${wu(this,ns,Tn)}
      ?disabled=${this.disabled}
      aria-label="${this.label}">
      ${this._renderLabelInside()}
    </a>`}_renderLabelAsButton(){return l` <button
      id="label-button"
      ${Bo(this._labelButtonChanged)}
      @click=${wu(this,ns,Tn)}
      ?disabled=${this.disabled}
      aria-label="${this.label}">
      ${this._renderLabelInside()}
    </button>`}render(){return l`
      <div id="menu-item" aria-label="menuitem" role="menuitem">
        ${this.hasChildren?l`<button
              id="caret-button"
              aria-label=${this.caretLabel}
              @click=${this._onCaretClicked}>
              <uui-symbol-expand
                aria-hidden="true"
                ?open=${this.showChildren}></uui-symbol-expand>
            </button>`:""}
        ${this.href&&this.selectOnly!==!0&&this.selectable!==!0?this._renderLabelAsAnchor():this._renderLabelAsButton()}

        <div id="label-button-background"></div>
        <slot id="actions-container" name="actions"></slot>
        ${this.loading?l`<uui-loader-bar id="loader"></uui-loader-bar>`:""}
      </div>
      ${this.showChildren?l`<slot></slot>`:""}
    `}};ns=new WeakSet,Tn=function(){if(this.selectOnly)return;const e=new it(it.CLICK_LABEL);this.dispatchEvent(e)},de.styles=[b`
      :host {
        box-sizing: border-box;
        display: block;
        --uui-menu-item-child-indent: calc(var(--uui-menu-item-indent, 0) + 1);
        user-select: none;
        --flat-structure-reversed: calc(
          1 - var(--uui-menu-item-flat-structure, 0)
        );
      }

      #menu-item {
        position: relative;
        padding-left: calc(var(--uui-menu-item-indent, 0) * var(--uui-size-4,12px));
        display: grid;
        grid-template-columns:
          calc(var(--flat-structure-reversed) * var(--uui-size-8,24px))
          1fr;
        grid-template-rows: 1fr;
        white-space: nowrap;
      }

      /** Not active, not selected, not disabled: */
      :host(:not([active], [selected], [disabled], [select-mode='highlight']))
        #menu-item
        #label-button:hover
        ~ #label-button-background,
      :host(:not([active], [selected], [disabled]))
        #menu-item
        #caret-button:hover {
        background-color: var(
          --uui-menu-item-background-color-hover,
          var(--uui-color-surface-emphasis,rgb(250, 250, 250))
        );
      }
      :host(:not([active], [selected], [disabled]))
        #menu-item
        #label-button:hover,
      :host(:not([active], [selected])) #menu-item #caret-button:hover {
        color: var(
          --uui-menu-item-color-hover,
          var(--uui-color-interactive-emphasis,#3544b1)
        );
      }

      /** Active */
      :host([active]) #label-button,
      :host([active]) #caret-button {
        color: var(
          --uui-menu-item-color-active,
          var(--uui-color-current-contrast,#1b264f)
        );
      }
      :host([active]) #label-button-background {
        background-color: var(
          --uui-menu-item-background-color-active,
          var(--uui-color-current,#f5c1bc)
        );
      }
      :host([active]) #label-button:hover ~ #label-button-background,
      :host([active]) #caret-button:hover {
        background-color: var(
          --uui-menu-item-background-color-active-hover,
          var(--uui-color-current-emphasis,rgb(248, 214, 211))
        );
      }

      /** Disabled */
      :host([disabled]) #menu-item {
        background-color: var(
          --uui-menu-item-background-color-disabled,
          var(--uui-color-disabled,#f3f3f5)
        );
      }

      /** Selected */
      :host([selected]:not([select-mode='highlight'], [disabled]))
        #label-button,
      :host([selected]:not([select-mode='highlight'], [disabled]))
        #caret-button {
        color: var(
          --uui-menu-item-color-selected,
          var(--uui-color-selected-contrast,#fff)
        );
      }
      :host([selected]:not([select-mode='highlight'], [disabled]))
        #label-button-background {
        background-color: var(
          --uui-menu-item-background-color-selected,
          var(--uui-color-selected,#3544b1)
        );
      }
      /** Selected, not highlight mode */
      :host([selected]:not([select-mode='highlight'], [disabled]))
        #label-button:hover
        ~ #label-button-background,
      :host([selected]:not([select-mode='highlight'], [disabled]))
        #caret-button:hover {
        background-color: var(
          --uui-menu-item-background-color-selected-hover,
          var(--uui-color-selected-emphasis,rgb(70, 86, 200))
        );
      }

      /** highlight mode, default */
      :host([select-mode='highlight']:not([disabled], [active], [selectable]))
        #menu-item
        #label-button:hover
        ~ #label-button-background {
        border-radius: var(--uui-border-radius,3px);
        background-color: var(
          --uui-menu-item-background-color-highlight,
          var(--uui-color-surface-emphasis,rgb(250, 250, 250))
        );
      }

      /** highlight mode, active */
      :host([select-mode='highlight'][active]:not([disabled]))
        #menu-item
        #label-button-background {
        border-radius: var(--uui-border-radius,3px);
      }

      /** highlight mode, active & selected */
      :host([select-mode='highlight'][active][selected]:not([disabled]))
        #menu-item
        #label-button:hover
        ~ #label-button-background {
        border-radius: var(--uui-border-radius,3px);
        background-color: var(
          --uui-menu-item-background-color-highlight-active-selected,
          var(--uui-color-current-emphasis,rgb(248, 214, 211))
        );
      }

      /** highlight mode, selected */
      :host([select-mode='highlight'][selected]:not([disabled]))
        #menu-item
        #label-button,
      :host([select-mode='highlight'][selected]:not([disabled]))
        #menu-item
        #caret-button {
        color: var(
          --uui-menu-item-color-highlight-selected,
          var(--uui-color-interactive,#1b264f)
        );
      }
      :host([select-mode='highlight'][selectable][selected]:not([disabled]))
        #menu-item
        #label-button:hover {
        color: var(
          --uui-menu-item-background-color-highlight-selectable-selected,
          var(--uui-color-interactive-emphasis,#3544b1)
        );
      }

      /** highlight mode, selected, selectable caret hover */
      :host([selected][selectable][select-mode='highlight']:not([active]))
        #menu-item
        #caret-button:hover {
        border-radius: var(--uui-border-radius,3px);
        background-color: var(
          --uui-menu-item-background-color-highlight-selectable-selected,
          var(--uui-color-surface-emphasis,rgb(250, 250, 250))
        );
        color: var(
          --uui-menu-item-color-highlight-selectable-selected,
          var(--uui-color-interactive-emphasis,#3544b1)
        );
      }

      /** Highlight borders */

      :host([select-mode='highlight']:not([disabled]))
        #menu-item
        #label-button-background::after {
        border-radius: var(--uui-border-radius,3px);
        position: absolute;
        content: '';
        inset: 1px;
        border: 2px solid
          var(--uui-menu-item-border-color-highlight, var(--uui-color-selected,#3544b1));
        opacity: 0;
      }

      :host([select-mode='highlight'][selectable][selected]:not([disabled]))
        #menu-item
        #caret-button:hover::after {
        border-top-left-radius: var(--uui-border-radius,3px);
        border-bottom-left-radius: var(--uui-border-radius,3px);
        position: absolute;
        content: '';
        inset: 1px 0 1px 1px;
        border: 2px solid
          var(--uui-menu-item-border-color-highlight, var(--uui-color-selected,#3544b1));
        border-right: none;
      }

      :host([select-mode='highlight'][selected]:not([disabled]))
        #menu-item
        #label-button-background::after {
        opacity: 1;
      }

      :host([select-mode='highlight'][selectable]:not([disabled]))
        #menu-item
        #label-button:hover
        ~ #label-button-background::after {
        opacity: 0.33;
      }
      :host([select-mode='highlight'][selected]:not([disabled]))
        #menu-item
        #label-button:hover
        ~ #label-button-background::after {
        opacity: 0.66;
      }

      /** Buttons */

      :host([disabled]) #label-button {
        cursor: default;
        opacity: 0.5;
      }

      button {
        display: inline-flex;
        align-items: center;

        font-family: inherit;
        font-size: inherit;

        padding: 0;
        text-align: left;
        border: none;
        color: inherit;
        background-color: transparent;
        cursor: pointer;
        min-height: var(--uui-size-12,36px);
        z-index: 1;
      }

      #label-button {
        position: relative;
        flex-grow: 1;
        grid-column-start: 2;
        white-space: nowrap;
        overflow: hidden;
        padding-right: var(--uui-size-space-3,9px);
        padding-left: calc(
          var(--uui-menu-item-flat-structure) * var(--uui-size-space-3,9px)
        );
        display: inline-flex;
        align-items: center;
        text-decoration: none;
        color: currentColor;
        min-height: var(--uui-size-12,36px);
        z-index: 1;
        font-weight: inherit;
      }

      #label-button .label {
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
      }
      span#label-button {
        pointer-events: none; /* avoid hovering state on this. */
      }

      #caret-button {
        position: relative;
        width: 100%;
        height: 100%;
        display: flex;
        align-items: center;
        justify-content: end;
        padding-inline-end: 3px;
        color: var(--uui-color-interactive,#1b264f);
      }

      #label-button-background {
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        border-radius: var(--uui-menu-item-border-radius, 0px);
      }

      #actions-container {
        opacity: 0;
        width: 0;
        grid-column-start: 3;
        overflow: hidden;
      }
      :host(:not([disabled])) #menu-item:hover #actions-container,
      :host(:not([disabled])) #menu-item:focus #actions-container,
      :host(:not([disabled])) #menu-item:focus-within #actions-container {
        opacity: 1;
        width: auto;
      }

      #loader {
        position: absolute;
        width: 100%;
        bottom: 0;
      }

      #icon {
        display: inline-flex;
        margin-right: var(--uui-size-2,6px);
      }

      #badge {
        font-size: 12px;
        --uui-badge-position: relative;
        --uui-badge-position: auto;
        display: block;
        margin-left: 6px;
      }

      /** Focus styling */

      :host([select-mode='highlight']) #label-button:focus-visible {
        outline: none;
        overflow: initial;
      }

      :host([select-mode='highlight']) #label-button:focus-visible::after {
        content: '';
        border-radius: calc(var(--uui-border-radius,3px) - 1px);
        position: absolute;
        inset: 3px 3px 3px -5px;
        border: 2px solid var(--uui-color-focus,#3879ff);
      }

      :host([select-mode='highlight']) #caret-button:focus-visible {
        outline: none;
        overflow: initial;
      }

      :host([select-mode='highlight']) #caret-button:focus-visible::after {
        content: '';
        position: absolute;
        inset: 3px;
        border-radius: calc(var(--uui-border-radius,3px) - 1px);
        border: 2px solid var(--uui-color-focus,#3879ff);
      }

      /** Slots */

      slot:not([name]) {
        position: relative;
        display: block;
        width: 100%;
      }
      slot:not([name]) {
        --uui-menu-item-indent: var(--uui-menu-item-child-indent);
      }

      slot[name='actions'] {
        display: flex;
        align-items: center;
        --uui-button-height: calc(var(--uui-size-base-unit) * 4);
        margin-right: var(--uui-size-base-unit);
      }
    `],Ae([a({type:Boolean,reflect:!0})],de.prototype,"disabled",2),Ae([a({type:Boolean,reflect:!0,attribute:"show-children"})],de.prototype,"showChildren",2),Ae([a({type:Boolean,attribute:"has-children"})],de.prototype,"hasChildren",2),Ae([a({type:Boolean,attribute:"loading"})],de.prototype,"loading",2),Ae([a({type:String})],de.prototype,"href",2),Ae([a({type:String})],de.prototype,"target",2),Ae([a({type:String})],de.prototype,"rel",2),Ae([a({type:String,attribute:"select-mode",reflect:!0})],de.prototype,"selectMode",2),Ae([a({type:String,attribute:"caret-label"})],de.prototype,"caretLabel",2),Ae([_()],de.prototype,"iconSlotHasContent",2),de=Ae([v("uui-menu-item")],de);var Of=Object.defineProperty,If=Object.getOwnPropertyDescriptor,ji=(e,t,i,o)=>{for(var r=o>1?void 0:o?If(t,i):t,s=e.length-1,n;s>=0;s--)(n=e[s])&&(r=(o?n(t,i,r):n(r))||r);return o&&r&&Of(t,i,r),r};const xu="uui:modal-open",Ri="uui:modal-close",$u="uui:modal-close-end";class _e extends g{constructor(){super(...arguments),this.isOpen=!1,this.isClosing=!1,this.index=0,this.uniqueIndex=0,this._transitionDuration=250,this.open=t=>{t?.preventDefault(),t?.stopImmediatePropagation();const i=new CustomEvent(xu,{cancelable:!0}),o=new CustomEvent("open",{cancelable:!0});this.dispatchEvent(i),this.dispatchEvent(o),!(i.defaultPrevented||o.defaultPrevented)&&this._openModal()},this.close=t=>{t?.preventDefault(),t?.stopImmediatePropagation();const i=new CustomEvent(Ri,{cancelable:!0});this.dispatchEvent(i),!i.defaultPrevented&&this.forceClose()}}get transitionDuration(){return this._transitionDuration}set transitionDuration(t){this._transitionDuration=t,this.style.setProperty("--uui-modal-transition-duration",this._transitionDuration+"ms")}firstUpdated(t){super.firstUpdated(t),this.isClosing||this.open()}_openModal(){this.isOpen=!0,this._dialogElement?.showModal(),this._dialogElement?.addEventListener("cancel",this.close)}forceClose(){this.isClosing=!0,this.isOpen=!1,this._dialogElement?.close(),this.dispatchEvent(new CustomEvent("close-end")),this.dispatchEvent(new CustomEvent($u)),this.remove()}}_e.styles=[b`
      dialog {
        display: block;
        margin: 0;
        padding: 0;
        max-width: unset;
        max-height: unset;
        border: none;
        background: none;
        color: var(--uui-color-text,#060606);
      }
      dialog::backdrop {
        background: none;
        opacity: 0;
      }
      dialog::after {
        content: '';
        position: absolute;
        inset: 0;
        background-color: var(--uui-modal-color-backdrop, rgba(0, 0, 0, 0.5));
        pointer-events: none;
        opacity: 1;
        transition: opacity var(--uui-modal-transition-duration, 250ms);
        z-index: 1;
      }
      :host([index='0']) dialog::after {
        opacity: 0;
      }
    `],ji([O("dialog")],_e.prototype,"_dialogElement",2),ji([a({type:Boolean,reflect:!0,attribute:"is-open"})],_e.prototype,"isOpen",2),ji([a({type:Boolean,reflect:!0,attribute:"is-closing"})],_e.prototype,"isClosing",2),ji([a({type:Number,reflect:!0})],_e.prototype,"index",2),ji([a({type:Number,reflect:!0,attribute:"unique-index"})],_e.prototype,"uniqueIndex",2),ji([a({type:Number,attribute:"transition-duration"})],_e.prototype,"transitionDuration",1);var Af=Object.defineProperty,Uf=Object.getOwnPropertyDescriptor,ku=e=>{throw TypeError(e)},Cu=(e,t,i,o)=>{for(var r=o>1?void 0:o?Uf(t,i):t,s=e.length-1,n;s>=0;s--)(n=e[s])&&(r=(o?n(t,i,r):n(r))||r);return o&&r&&Af(t,i,r),r},zf=(e,t,i)=>t.has(e)||ku("Cannot "+i),Eu=(e,t,i)=>(zf(e,t,"read from private field"),i?i.call(e):t.get(e)),Mf=(e,t,i)=>t.has(e)?ku("Cannot add the same private member more than once"):t instanceof WeakSet?t.add(e):t.set(e,i),as,Vn;let Wi=class extends _e{constructor(){super(...arguments),Mf(this,as),this.size="full"}firstUpdated(e){super.firstUpdated(e),this.style.setProperty("--uui-modal-offset",-Eu(this,as,Vn)+"px")}updated(e){super.updated(e),this.uniqueIndex>10?this.setAttribute("hide",""):this.removeAttribute("hide")}forceClose(){this.isClosing||(this.isClosing=!0,this.style.setProperty("--uui-modal-offset",-Eu(this,as,Vn)+"px"),setTimeout(()=>{super.forceClose()},this.transitionDuration))}render(){return l`<dialog>
      <slot></slot>
    </dialog>`}};as=new WeakSet,Vn=function(){return this._dialogElement?.getBoundingClientRect().width??0},Wi.styles=[..._e.styles,b`
      :host {
        --uui-modal-sidebar-left-gap: 24px;
        --uui-modal-sidebar-background: var(--uui-color-surface,#fff);
      }
      @media (min-width: 600px) {
        :host {
          --uui-modal-sidebar-left-gap: 64px;
        }
      }
      dialog {
        height: 100%;
        width: 100%;
        box-sizing: border-box;
        max-width: calc(100% - var(--uui-modal-sidebar-left-gap));
        margin-left: auto;
        right: var(--uui-modal-offset);
        transition: right var(--uui-modal-transition-duration, 250ms);
        background: var(
          --uui-modal-sidebar-background,
          var(--uui-color-surface,#fff)
        );
      }
      :host([index='0']) dialog {
        box-shadow: var(--uui-shadow-depth-5,0 19px 38px rgba(0,0,0,0.30) , 0 15px 12px rgba(0,0,0,0.22));
      }
      :host(:not([index='0'])) dialog {
        outline: 1px solid rgba(0, 0, 0, 0.1);
      }
      :host([hide]) dialog {
        display: none;
      }
      :host([size='large']) dialog {
        max-width: min(1200px, calc(100% - var(--uui-modal-sidebar-left-gap)));
      }
      :host([size='medium']) dialog {
        max-width: min(800px, calc(100% - var(--uui-modal-sidebar-left-gap)));
      }
      :host([size='small']) dialog {
        max-width: min(500px, calc(100% - var(--uui-modal-sidebar-left-gap)));
      }
    `],Cu([a({reflect:!0})],Wi.prototype,"size",2),Wi=Cu([v("uui-modal-sidebar")],Wi);var Df=Object.defineProperty,Lf=Object.getOwnPropertyDescriptor,Pu=e=>{throw TypeError(e)},Fi=(e,t,i,o)=>{for(var r=o>1?void 0:o?Lf(t,i):t,s=e.length-1,n;s>=0;s--)(n=e[s])&&(r=(o?n(t,i,r):n(r))||r);return o&&r&&Df(t,i,r),r},Su=(e,t,i)=>t.has(e)||Pu("Cannot "+i),zr=(e,t,i)=>(Su(e,t,"read from private field"),i?i.call(e):t.get(e)),Nn=(e,t,i)=>t.has(e)?Pu("Cannot add the same private member more than once"):t instanceof WeakSet?t.add(e):t.set(e,i),ls=(e,t,i)=>(Su(e,t,"access private method"),i),Bn,Gi,qi,Hn,jn;let rt=class extends g{constructor(){super(),Nn(this,qi),this.sidebarGap=64,this.transitionDurationMS=250,Nn(this,Bn,()=>{const e=this._modals??[];if(this._modals=this.modalSlot?.assignedElements({flatten:!0}).filter(o=>o instanceof _e)??[],e.filter(o=>this._modals.indexOf(o)===-1).forEach(o=>o.removeEventListener(Ri,zr(this,Gi))),this._modals.filter(o=>e.indexOf(o)===-1).forEach(o=>o.addEventListener(Ri,zr(this,Gi))),this._sidebars=this._modals.filter(o=>o instanceof Wi),this._modals.length===0){this.removeAttribute("backdrop");return}ls(this,qi,Hn).call(this),ls(this,qi,jn).call(this)}),Nn(this,Gi,e=>{if(e.stopImmediatePropagation(),e.target?.removeEventListener(Ri,zr(this,Gi)),!this._modals||this._modals.length<=1){this.removeAttribute("backdrop");return}ls(this,qi,Hn).call(this),ls(this,qi,jn).call(this)}),this.addEventListener(Ri,zr(this,Gi))}firstUpdated(e){super.firstUpdated(e),this.style.setProperty("--uui-modal-transition-duration",this.transitionDurationMS+"ms")}render(){return l`<slot @slotchange=${zr(this,Bn)}></slot>`}};Bn=new WeakMap,Gi=new WeakMap,qi=new WeakSet,Hn=function(){this.setAttribute("backdrop","");const e=this._modals?.filter(t=>!t.isClosing).reverse()??[];e?.forEach((t,i)=>{t.index=i,t.transitionDuration=this.transitionDurationMS}),e?.forEach(t=>{const i=e?.filter(o=>o.constructor.name===t.constructor.name);t.uniqueIndex=i?.indexOf(t)??0})},jn=function(){requestAnimationFrame(()=>{let e=0;const t=this._sidebars?.filter(i=>!i.isClosing).reverse()??[];for(let i=0;i<t.length;i++){const o=t[i],r=t[i+1],s=e;if(o.updateComplete.then(()=>{o.style.setProperty("--uui-modal-offset",s+"px")}),r?.hasAttribute("hide"))break;const n=o.shadowRoot?.querySelector("dialog")?.getBoundingClientRect().width??0,u=r?.shadowRoot?.querySelector("dialog")?.getBoundingClientRect().width??0,c=n+e+this.sidebarGap-u;e=c>0?c:0}})},rt.styles=b`
    :host {
      position: fixed;
      --uui-modal-color-backdrop: rgba(0, 0, 0, 0.5);
    }
    :host::after {
      content: '';
      position: fixed;
      inset: 0;
      background-color: var(--uui-modal-color-backdrop, rgba(0, 0, 0, 0.5));
      opacity: 0;
      pointer-events: none;
      transition: opacity var(--uui-modal-transition-duration, 250ms);
    }
    :host([backdrop])::after {
      opacity: 1;
    }
  `,Fi([O("slot")],rt.prototype,"modalSlot",2),Fi([_()],rt.prototype,"_modals",2),Fi([_()],rt.prototype,"_sidebars",2),Fi([a({type:Number})],rt.prototype,"sidebarGap",2),Fi([a({type:Number})],rt.prototype,"transitionDurationMS",2),rt=Fi([v("uui-modal-container")],rt);var Tf=Object.getOwnPropertyDescriptor,Vf=(e,t,i,o)=>{for(var r=o>1?void 0:o?Tf(t,i):t,s=e.length-1,n;s>=0;s--)(n=e[s])&&(r=n(r)||r);return r};let us=class extends _e{render(){return l`
      <dialog>
        <slot></slot>
      </dialog>
    `}};us.styles=[..._e.styles,b`
      :host {
        --uui-modal-dialog-background: var(--uui-color-surface,#fff);
      }
      dialog {
        margin: auto;
        max-width: 100%;
        max-height: 100%;
        border-radius: var(
          --uui-modal-dialog-border-radius,
          calc(var(--uui-border-radius,3px) * 4)
        );
        background: var(
          --uui-modal-dialog-background,
          var(--uui-color-surface,#fff)
        );
      }
      :host([index='0']) dialog {
        box-shadow: var(--uui-shadow-depth-5,0 19px 38px rgba(0,0,0,0.30) , 0 15px 12px rgba(0,0,0,0.22));
      }
      :host(:not([index='0'])) dialog {
        outline: 1px solid rgba(0, 0, 0, 0.1);
      }
    `],us=Vf([v("uui-modal-dialog")],us);class xt extends A{constructor(t,i={}){super(t,{bubbles:!0,...i})}}xt.CHANGE="change";var Nf=Object.defineProperty,Bf=Object.getOwnPropertyDescriptor,ot=(e,t,i,o)=>{for(var r=o>1?void 0:o?Bf(t,i):t,s=e.length-1,n;s>=0;s--)(n=e[s])&&(r=(o?n(t,i,r):n(r))||r);return o&&r&&Nf(t,i,r),r};const Hf=45,Rn=(e,t,i)=>Math.min(Math.max(e,t),i),jf=(e,t)=>Array.from({length:t-e+1},(i,o)=>e+o);let Ce=class extends g{constructor(){super(...arguments),this._observer=new ResizeObserver(this._calculateRange.bind(this)),this.label="",this.ariaLabel="",this._total=100,this._range=0,this._visiblePages=[],this._current=1}connectedCallback(){super.connectedCallback(),this.hasAttribute("role")||this.setAttribute("role","navigation"),this._visiblePages=this._generateVisiblePages(this.current),x(this,"uui-button"),x(this,"uui-button-group")}disconnectedCallback(){this._observer.disconnect()}firstUpdated(){this._observer.observe(this._pagesGroup),this.updateLabel(),this._calculateRange()}willUpdate(e){(e.has("current")||e.has("label"))&&this.updateLabel()}updateLabel(){this.ariaLabel=`${this.label||"Pagination navigation"}. Current page: ${this.current}.`}_calculateRange(){const e=this.offsetWidth,t=Array.from(this._navButtons).reduce((r,s)=>r+s.getBoundingClientRect().width,0),o=(e-t)/Hf/2;this._range=Math.max(1,Math.floor(o)),this._visiblePages=this._generateVisiblePages(this.current)}_generateVisiblePages(e){const t=e<this._range?1:e<this.total-this._range?e-this._range:this.total-this._range*2,i=e<=this._range?this._range*2+1:e<this.total-this._range?e+this._range:this.total;return jf(Rn(t,1,this.total),Rn(i,1,this.total))}get total(){return this._total}set total(e){this._total=e,this._visiblePages=this._generateVisiblePages(this._current),this.requestUpdate("total",e)}get current(){return this._current}set current(e){const t=this._current;this._current=Rn(e,1,this.total),this._visiblePages=this._generateVisiblePages(this._current),this.requestUpdate("current",t)}goToNextPage(){this.current++,this.dispatchEvent(new xt(xt.CHANGE))}goToPreviousPage(){this.current--,this.dispatchEvent(new xt(xt.CHANGE))}goToPage(e){this.current=e,this.dispatchEvent(new xt(xt.CHANGE))}focusActivePage(){requestAnimationFrame(()=>{const e=this.renderRoot.querySelector(".active");e&&e.focus()})}renderFirst(){return l`<uui-button
      compact
      look="outline"
      class="nav"
      role="listitem"
      label="Go to first page"
      ?disabled=${this._current===1}
      @click=${()=>this.goToPage(1)}>
      First
    </uui-button>`}renderPrevious(){return l`<uui-button
      compact
      look="outline"
      class="nav"
      role="listitem"
      label="Go to previous page"
      ?disabled=${this._current===1}
      @click=${this.goToPreviousPage}>
      Previous
    </uui-button>`}renderNext(){return l`<uui-button
      compact
      look="outline"
      role="listitem"
      class="nav"
      label="Go to next page"
      ?disabled=${this._current===this.total}
      @click=${this.goToNextPage}>
      Next
    </uui-button>`}renderLast(){return l`
      <uui-button
        compact
        look="outline"
        role="listitem"
        class="nav"
        label="Go to last page"
        ?disabled=${this.total===this._current}
        @click=${()=>this.goToPage(this.total)}>
        Last
      </uui-button>
    `}renderDots(){return l`<uui-button
      compact
      look="outline"
      role="listitem"
      tabindex="-1"
      class="dots"
      label="More pages"
      >...</uui-button
    > `}renderPage(e){return l`<uui-button
      compact
      look="outline"
      role="listitem"
      label="Go to page ${e}"
      class=${"page"+(e===this._current?" active":"")}
      tabindex=${e===this._current?"-1":""}
      @click=${()=>{e!==this._current&&(this.goToPage(e),this.focusActivePage())}}>
      ${e}
    </uui-button>`}renderNavigationLeft(){return l` ${this.renderFirst()} ${this.renderPrevious()}
    ${this._visiblePages.includes(1)?"":this.renderDots()}`}renderNavigationRight(){return l`${this._visiblePages.includes(this.total)?"":this.renderDots()}
    ${this.renderNext()} ${this.renderLast()}`}render(){return l`<uui-button-group role="list" id="pages">
      ${this.renderNavigationLeft()}
      ${this._visiblePages.map(e=>this.renderPage(e))}
      ${this.renderNavigationRight()}
    </uui-button-group>
    `}};Ce.styles=[b`
      uui-button-group {
        width: 100%;
      }

      uui-button {
        --uui-button-border-color: var(--uui-color-border-standalone,#c2c2c2);
        --uui-button-border-color-hover: var(--uui-color-interactive-emphasis,#3544b1);
        --uui-button-border-color-disabled: var(--uui-color-border-standalone,#c2c2c2);
      }

      .page {
        min-width: 36px;
        max-width: 72px;
      }
      .page.active {
        --uui-button-background-color: var(--uui-color-current,#f5c1bc);
      }

      .nav {
        min-width: 72px;
      }

      .dots {
        pointer-events: none;
      }

      .active {
        pointer-events: none;
      }
    `],ot([jc("uui-button.nav")],Ce.prototype,"_navButtons",2),ot([O("#pages")],Ce.prototype,"_pagesGroup",2),ot([a()],Ce.prototype,"label",2),ot([a({reflect:!0,attribute:"aria-label"})],Ce.prototype,"ariaLabel",2),ot([a({type:Number})],Ce.prototype,"total",1),ot([_()],Ce.prototype,"_range",2),ot([_()],Ce.prototype,"_visiblePages",2),ot([a({type:Number})],Ce.prototype,"current",1),Ce=ot([v("uui-pagination")],Ce);class Wn extends A{}Wn.CLOSE="close";var Rf=Object.defineProperty,Wf=Object.getOwnPropertyDescriptor,Mr=(e,t,i,o)=>{for(var r=o>1?void 0:o?Wf(t,i):t,s=e.length-1,n;s>=0;s--)(n=e[s])&&(r=(o?n(t,i,r):n(r))||r);return o&&r&&Rf(t,i,r),r};function cs(e,t,i){return e<t?t:e>i?i:e}let $t=class extends g{constructor(){super(...arguments),this.scrollEventHandler=this._updatePlacement.bind(this),this._open=!1,this._placement="bottom-start",this._currentPlacement=null,this._scrollParents=[],this.margin=0,this._onTriggerSlotChanged=e=>{this._trigger=e.target.assignedElements({flatten:!0})[0]},this._intersectionCallback=e=>{e.forEach(t=>{t.isIntersecting===!1&&(this._startScrollListener(),this._updatePlacement())})},this._onKeyUp=e=>{if(e.key==="Escape"){this._triggerPopoverClose();return}},this._onDocumentClick=e=>{e.composedPath().includes(this)||this._triggerPopoverClose()}}get placement(){return this._placement}set placement(e){const t=this._placement;this._placement=e||"bottom-start",this._currentPlacement=null,this._updatePlacement(),this.requestUpdate("placement",t)}get open(){return this._open}set open(e){const t=this._open;this._open=e,e?this._openPopover():this._closePopover(),this.requestUpdate("open",t)}connectedCallback(){super.connectedCallback(),this._getScrollParents()}disconnectedCallback(){super.disconnectedCallback(),document.removeEventListener("mousedown",this._onDocumentClick),document.removeEventListener("keyup",this._onKeyUp),document.removeEventListener("scroll",this.scrollEventHandler),this.intersectionObserver&&(this.intersectionObserver.disconnect(),delete this.intersectionObserver),this._scrollParents=[]}_openPopover(){this.containerElement&&(this.containerElement.style.opacity="0",document.addEventListener("mousedown",this._onDocumentClick),document.addEventListener("keyup",this._onKeyUp),this._currentPlacement=null,requestAnimationFrame(()=>{this._updatePlacement(),this._createIntersectionObserver(),this.containerElement.style.opacity="1"}))}_closePopover(){this.intersectionObserver&&(this.intersectionObserver.disconnect(),delete this.intersectionObserver),document.removeEventListener("mousedown",this._onDocumentClick),document.removeEventListener("keyup",this._onKeyUp),this._currentPlacement=null}_triggerPopoverClose(){const e=new Wn(Wn.CLOSE,{cancelable:!0});this.dispatchEvent(e),!e.defaultPrevented&&(this.open=!1)}_getScrollParents(){const e=this.shadowRoot.host;let t=getComputedStyle(e);if(t.position==="fixed")return;const i=t.position==="absolute",o=/(auto|scroll)/;let r=e;for(;r=r.parentElement;)if(t=getComputedStyle(r),!(i&&t.position==="static")&&(o.test(t.overflow+t.overflowY+t.overflowX)&&this._scrollParents.push(r),t.position==="fixed"))return;this._scrollParents.push(document.body)}_createIntersectionObserver(){if(this.intersectionObserver)return;const e={root:null,rootMargin:"0px",threshold:1};this.intersectionObserver=new IntersectionObserver(this._intersectionCallback,e),this.intersectionObserver.observe(this.containerElement)}_startScrollListener(){this._scrollParents.forEach(e=>{e.addEventListener("scroll",this.scrollEventHandler)}),document.addEventListener("scroll",this.scrollEventHandler)}_stopScrollListener(){this._scrollParents.forEach(e=>{e.removeEventListener("scroll",this.scrollEventHandler)}),document.removeEventListener("scroll",this.scrollEventHandler)}_updatePlacement(){if(!this.shadowRoot)return;const e=this.containerElement;if(!e)return;const t=this.containerElement?.getBoundingClientRect(),i=this._trigger?.getBoundingClientRect();if(i!=null&&t!=null){const o=this._scrollParents.map(ze=>ze.getBoundingClientRect());this._currentPlacement=this._currentPlacement||this._placement,this._placement!=="auto"&&(this._currentPlacement=this._managePlacementFlip(this._currentPlacement,t,o));let r=this._currentPlacement.indexOf("top")!==-1,s=this._currentPlacement.indexOf("bottom")!==-1,n=this._currentPlacement.indexOf("left")!==-1,u=this._currentPlacement.indexOf("right")!==-1;const c=this._currentPlacement.indexOf("-start")!==-1,p=this._currentPlacement.indexOf("-end")!==-1;let f=.5,h=.5,C=.5,d=.5,y=0,I=0;if(this.placement==="auto"){const ze=this._scrollParents[0],hr=ze.clientWidth,It=ze.clientHeight,ai=i.x-t.width,li=hr-(i.x+i.width)-t.width,Ms=i.y-t.height,io=It-(i.y+i.height)-t.height;let ro=.5,oo=.5;const bc=Math.max(ai,li);let _a=Math.max(Ms,io);io>Ms&&io>this.margin&&(_a+=9999),bc>_a?(ai>li?(ro=0,n=!0):(ro=1,u=!0),y=this.margin):(Ms>io?(oo=0,r=!0):(oo=1,s=!0),I=this.margin),f=ro,h=oo,C=1-ro,d=1-oo}else r&&(d=1,h=0),s&&(d=0,h=1),(r||s)&&(I=this.margin,c&&(C=0,f=0),p&&(C=1,f=1)),n&&(C=1,f=0),u&&(C=0,f=1),(n||u)&&(y=this.margin,c&&(d=0,h=0),p&&(d=1,h=1));const $=-t.width*C+i.width*f-y*(C*2-1),V=-t.height*d+i.height*h-I*(d*2-1);let te=$,pt=V;r||s?(this._scrollParents.forEach((ze,hr)=>{const It=ze===document.body?0:o[hr].x,ai=-i.x+It,li=ze.clientWidth-i.x-i.width+$+It-(t.width-i.width)*(1-f);te=cs(te,ai,li)}),te=cs(te,-t.width,i.width)):(n||u)&&(this._scrollParents.forEach((ze,hr)=>{const It=ze===document.body?0:o[hr].y,ai=-i.y+It,li=ze.clientHeight-i.y-i.height+V+It-(t.height-i.height)*(1-h);pt=cs(pt,ai,li)}),pt=cs(pt,-t.height,i.height)),(this._positionX!==te||this._positionY!==pt)&&(this._positionX=te,this._positionY=pt,$===te&&V===pt&&this._stopScrollListener(),e.style.left=`${this._positionX}px`,e.style.top=`${this._positionY}px`)}}_managePlacementFlip(e,t,i){const r=e.split("-"),s=r[0],n=r[1]||null;let u;return this._scrollParents.some((c,p)=>{const f=c===document.body?0:i[p].x,h=c===document.body?0:i[p].y;return s==="top"&&t.y-2<=h?(u="bottom",!0):s==="bottom"&&t.y+t.height+2>=c.clientHeight+h?(u="top",!0):s==="left"&&t.x-2<=f?(u="right",!0):s==="right"&&t.x+t.width+2>=c.clientWidth+f?(u="left",!0):!1}),u?(this._startScrollListener(),u+(n?`-${n}`:"")):e}render(){return l`
      <slot
        id="trigger"
        name="trigger"
        @slotchange=${this._onTriggerSlotChanged}></slot>
      <div id="container">
        ${this._open?l`<slot name="popover"></slot>`:""}
      </div>
    `}};$t.styles=[b`
      :host {
        position: relative;
        display: inline-block;
        width: 100%;
      }
      #container {
        position: absolute;
        width: 100%;
        z-index: var(--uui-popover-z-index, 1);
      }
      slot[name='popover'] {
        display: block;
      }
      #trigger {
        position: relative;
        width: 100%;
      }

      slot[name='trigger']::slotted(uui-button) {
        --uui-button-border-radius: var(
          --uui-popover-toggle-slot-button-border-radius
        );
        --uui-button-merge-border-left: var(
          --uui-popover-toggle-slot-button-merge-border-left
        );
      }
    `],Mr([O("#container")],$t.prototype,"containerElement",2),Mr([a({type:Number})],$t.prototype,"margin",2),Mr([a({type:String,reflect:!0})],$t.prototype,"placement",1),Mr([a({type:Boolean,reflect:!0})],$t.prototype,"open",1),$t=Mr([v("uui-popover")],$t);var Ff=Object.defineProperty,Gf=Object.getOwnPropertyDescriptor,Ou=e=>{throw TypeError(e)},ei=(e,t,i,o)=>{for(var r=o>1?void 0:o?Gf(t,i):t,s=e.length-1,n;s>=0;s--)(n=e[s])&&(r=(o?n(t,i,r):n(r))||r);return o&&r&&Ff(t,i,r),r},Fn=(e,t,i)=>t.has(e)||Ou("Cannot "+i),H=(e,t,i)=>(Fn(e,t,"read from private field"),t.get(e)),ti=(e,t,i)=>t.has(e)?Ou("Cannot add the same private member more than once"):t instanceof WeakSet?t.add(e):t.set(e,i),qf=(e,t,i,o)=>(Fn(e,t,"write to private field"),t.set(e,i),i),Ki=(e,t,i)=>(Fn(e,t,"access private method"),i),st,Yi,hs,kt,Dr,Gn,Ct,qn,Iu,Kn,Au;let je=class extends g{constructor(){super(...arguments),ti(this,Ct),this.margin=0,this._placement="bottom-start",this._open=!1,this._actualPlacement=this._placement,ti(this,st,null),ti(this,Yi,[]),ti(this,hs,e=>{if(this._open=e.newState==="open",qf(this,st,$d(this,"popovertarget",this.id)),Ki(this,Ct,Au).call(this),H(this,st)?.dispatchEvent(new CustomEvent("uui-popover-before-toggle",{bubbles:!1,composed:!1,detail:{oldState:e.oldState,newState:e.newState}})),!this._open){Ki(this,Ct,Kn).call(this);return}Ki(this,Ct,Iu).call(this),requestAnimationFrame(()=>{H(this,kt).call(this)})}),ti(this,kt,()=>{this._open&&(this._actualPlacement=this._placement,this.style.opacity="0",H(this,Dr).call(this,3))}),ti(this,Dr,e=>{if(H(this,Gn).call(this),e--,H(this,st)===null)return;const t=this._actualPlacement.indexOf("top")!==-1,i=this._actualPlacement.indexOf("bottom")!==-1,o=this._actualPlacement.indexOf("left")!==-1,r=this._actualPlacement.indexOf("right")!==-1,s=this._actualPlacement.indexOf("-start")!==-1,n=this._actualPlacement.indexOf("-end")!==-1,u=H(this,st).getBoundingClientRect(),c=this.getBoundingClientRect();let p=0,f=0;i&&(p=u.top+u.height,s&&(f=u.left),n&&(f=u.left+u.width-c.width),!s&&!n&&(f=u.left+u.width/2-c.width/2)),t&&(p=u.top-c.height,s&&(f=u.left),n&&(f=u.left+u.width-c.width),!s&&!n&&(f=u.left+u.width/2-c.width/2)),o&&(f=u.left-c.width,s&&(p=u.top),n&&(p=u.top+u.height-c.height),!s&&!n&&(p=u.top+u.height/2-c.height/2)),r&&(f=u.left+u.width,s&&(p=u.top),n&&(p=u.top+u.height-c.height),!s&&!n&&(p=u.top+u.height/2-c.height/2));const h=window.innerWidth,C=window.innerHeight,d=Math.min(0,u.top+u.height),y=Math.max(Math.min(p,C-c.height),u.top-c.height);if(Math.max(d,y)!==p&&(t||i)&&e>0){Ki(this,Ct,qn).call(this),H(this,Dr).call(this,e);return}p=Math.max(d,y);const $=Math.min(0,u.left+u.width),V=Math.max(Math.min(f,h-c.width),u.left-c.width),te=Math.max($,V);if(te!==f&&(o||r)&&e>0){Ki(this,Ct,qn).call(this),H(this,Dr).call(this,e);return}f=te,(p+c.height<0||p>C||f+c.width<0||f>h)&&this.hidePopover(),this.style.transform=`translate(${f}px, ${p}px)`,this.style.opacity="1"}),ti(this,Gn,()=>{const e={top:"bottom",bottom:"top",left:"right",right:"left"};let t=this._actualPlacement.split("-")[0];t=e[t]||t,t=t.charAt(0).toUpperCase()+t.slice(1);const i=`padding${t}`;this.style.padding="0",this.style[i]=`${this.margin}px`})}get open(){return this._open}get placement(){return this._placement}set placement(e){this._placement=e,this._actualPlacement=e,H(this,kt).call(this)}connectedCallback(){this.hasAttribute("popover")||this.setAttribute("popover",""),super.connectedCallback(),this.addEventListener("beforetoggle",H(this,hs))}disconnectedCallback(){super.disconnectedCallback(),this.removeEventListener("beforetoggle",H(this,hs)),Ki(this,Ct,Kn).call(this)}render(){return l`<slot></slot>`}};st=new WeakMap,Yi=new WeakMap,hs=new WeakMap,kt=new WeakMap,Dr=new WeakMap,Gn=new WeakMap,Ct=new WeakSet,qn=function(){const[e,t]=this._actualPlacement.split("-"),i=e==="top"?"bottom":e==="bottom"?"top":e==="left"?"right":"left";this._actualPlacement=`${i}-${t}`},Iu=function(){H(this,Yi).forEach(e=>{e.addEventListener("scroll",H(this,kt),{passive:!0})}),document.addEventListener("scroll",H(this,kt),{passive:!0})},Kn=function(){H(this,Yi).forEach(e=>{e.removeEventListener("scroll",H(this,kt))}),document.removeEventListener("scroll",H(this,kt))},Au=function(){if(!H(this,st))return;let e=getComputedStyle(H(this,st));if(e.position==="fixed")return;const t=e.position==="absolute",i=/(auto|scroll)/;let o=H(this,st);for(;o=o.parentElement;)if(e=getComputedStyle(o),!(t&&e.position==="static")&&(i.test(e.overflow+e.overflowY+e.overflowX)&&H(this,Yi).push(o),e.position==="fixed"))return;H(this,Yi).push(document.body)},je.styles=[b`
      :host {
        margin: 0;
        width: fit-content;
        height: fit-content;
        border: none;
        border-radius: 0;
        padding: 0;
        background-color: none;
        background: none;
        overflow: visible;
        color: var(--uui-color-text,#060606);
      }
    `],ei([a({type:Number})],je.prototype,"margin",2),ei([a({type:Boolean})],je.prototype,"open",1),ei([a({type:String,reflect:!0})],je.prototype,"placement",1),ei([_()],je.prototype,"_placement",2),ei([_()],je.prototype,"_open",2),ei([_()],je.prototype,"_actualPlacement",2),je=ei([v("uui-popover-container")],je);var Kf=Object.defineProperty,Yf=Object.getOwnPropertyDescriptor,Uu=(e,t,i,o)=>{for(var r=o>1?void 0:o?Yf(t,i):t,s=e.length-1,n;s>=0;s--)(n=e[s])&&(r=(o?n(t,i,r):n(r))||r);return o&&r&&Kf(t,i,r),r};const Xf=(e,t,i)=>Math.min(Math.max(e,t),i);let Lr=class extends g{constructor(){super(...arguments),this._progress=0}get progress(){return this._progress}set progress(e){const t=this._progress;this._progress=Xf(e,0,100),this.requestUpdate("progress",t)}_getProgressStyle(){return{width:`${this._progress}%`}}render(){return l`
      <div id="bar" style=${Ye(this._getProgressStyle())}></div>
    `}};Lr.styles=[b`
      :host {
        width: 100%;
        height: 4px;
        position: relative;
        overflow: hidden;
        background: var(--uui-color-surface-alt,#f3f3f5);
        border-radius: 100px;
        display: inline-block;
      }

      #bar {
        transition: width 250ms ease;
        background: var(--uui-color-positive,#0b8152);
        height: 100%;
        width: 0%;
      }
    `],Uu([a({type:Number})],Lr.prototype,"progress",1),Lr=Uu([v("uui-progress-bar")],Lr);class Xi extends A{constructor(t,i={}){super(t,{bubbles:!0,...i})}}Xi.CHANGE="change";var Zf=Object.defineProperty,Qf=Object.getOwnPropertyDescriptor,zu=e=>{throw TypeError(e)},Et=(e,t,i,o)=>{for(var r=o>1?void 0:o?Qf(t,i):t,s=e.length-1,n;s>=0;s--)(n=e[s])&&(r=(o?n(t,i,r):n(r))||r);return o&&r&&Zf(t,i,r),r},Jf=(e,t,i)=>t.has(e)||zu("Cannot "+i),eb=(e,t,i)=>t.has(e)?zu("Cannot add the same private member more than once"):t instanceof WeakSet?t.add(e):t.set(e,i),tb=(e,t,i)=>(Jf(e,t,"access private method"),i),Yn,Mu;let Ee=class extends g{constructor(){super(...arguments),eb(this,Yn),this.name="",this.value="",this.label="",this.checked=!1,this.disabled=!1,this.readonly=!1}focus(){this._inputElement.focus()}click(){this._inputElement.click()}uncheck(){this.checked=!1}check(){this.checked=!0}makeFocusable(){this.disabled||this.removeAttribute("tabindex")}makeUnfocusable(){this.disabled||this.setAttribute("tabindex","-1")}render(){return l` <label>
      <input
        id="input"
        type="radio"
        name=${this.name}
        value=${this.value}
        .checked=${this.checked}
        .disabled=${this.disabled||this.readonly}
        @change=${tb(this,Yn,Mu)} />
      <div id="button"></div>
      <div id="label">
        ${this.label?l`<span>${this.label}</span>`:l`<slot></slot>`}
      </div>
    </label>`}};Yn=new WeakSet,Mu=function(e){e.stopPropagation();const t=this._inputElement.checked;this.checked=t,t&&this.focus(),this.dispatchEvent(new Xi(Xi.CHANGE))},Ee.styles=[xo,b`
      :host {
        display: block;
        box-sizing: border-box;
        font-family: inherit;
        color: currentColor;
        --uui-radio-button-size: var(--uui-size-6,18px);
        margin: var(--uui-size-2,6px) 0;
      }

      label {
        position: relative;
        box-sizing: border-box;
        user-select: none;
        display: flex;
        align-items: center;
        cursor: pointer;
        line-height: 18px;
      }

      :host([readonly]) label {
        cursor: default;
      }

      #input {
        width: 0;
        height: 0;
        opacity: 0;
        margin: 0;
      }

      .label {
        margin-top: 2px;
      }

      #button {
        box-sizing: border-box;
        display: inline-block;
        width: var(--uui-radio-button-size, 18px);
        height: var(--uui-radio-button-size, 18px);
        background-color: var(--uui-color-surface,#fff);
        border: 1px solid var(--uui-color-border-standalone,#c2c2c2);
        border-radius: 100%;
        margin-right: calc(var(--uui-size-2,6px) * 2);
        position: relative;
        flex: 0 0 var(--uui-radio-button-size);
      }

      #button::after {
        content: '';
        width: calc(var(--uui-radio-button-size) / 2);
        height: calc(var(--uui-radio-button-size) / 2);
        background-color: var(--uui-color-selected,#3544b1);
        border-radius: 100%;
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%) scale(0);
        transition: all 0.15s ease-in-out;
      }

      :host(:hover) #button {
        border: 1px solid var(--uui-color-border-emphasis,#a1a1a1);
      }

      :host(:focus) {
        outline: none;
      }
      :host(:focus-within) input:focus-visible + #button {
        outline: 2px solid var(--uui-color-focus,#3879ff);
      }

      input:checked ~ #button::after {
        transform: translate(-50%, -50%) scale(1);
      }

      input:checked ~ #button {
        border: 1px solid var(--uui-color-selected,#3544b1);
      }

      input:checked:hover ~ #button {
        border: 1px solid var(--uui-color-selected-emphasis,rgb(70, 86, 200));
      }

      input:checked:hover ~ #button::after {
        background-color: var(--uui-color-selected-emphasis,rgb(70, 86, 200));
      }

      :host([disabled]) label {
        cursor: not-allowed;
        opacity: 0.5;
      }
      :host([disabled]) .label {
        color: var(--uui-color-disabled-contrast,#c4c4c4);
      }

      :host([disabled]) input ~ #button {
        border: 1px solid var(--uui-color-disabled-contrast,#c4c4c4);
      }

      :host([disabled]) input:checked ~ #button {
        border: 1px solid var(--uui-color-disabled-contrast,#c4c4c4);
      }

      :host([disabled]) input:checked ~ #button::after {
        background-color: var(--uui-color-disabled-contrast,#c4c4c4);
      }

      :host([disabled]:active) #button {
        animation: ${$o};
      }

      @media (prefers-reduced-motion) {
        :host([disabled]:active) #button {
          animation: none;
        }

        #button::after {
          transition: none;
        }
      }
    `],Et([O("#input")],Ee.prototype,"_inputElement",2),Et([a({type:String})],Ee.prototype,"name",2),Et([a({type:String})],Ee.prototype,"value",2),Et([a({type:String})],Ee.prototype,"label",2),Et([a({type:Boolean,reflect:!0})],Ee.prototype,"checked",2),Et([a({type:Boolean,reflect:!0})],Ee.prototype,"disabled",2),Et([a({type:Boolean,reflect:!0})],Ee.prototype,"readonly",2),Ee=Et([v("uui-radio")],Ee);class ds extends A{constructor(t,i={}){super(t,{bubbles:!0,...i})}}ds.CHANGE="change";var ib=Object.defineProperty,rb=Object.getOwnPropertyDescriptor,Du=e=>{throw TypeError(e)},Xn=(e,t,i,o)=>{for(var r=o>1?void 0:o?rb(t,i):t,s=e.length-1,n;s>=0;s--)(n=e[s])&&(r=(o?n(t,i,r):n(r))||r);return o&&r&&ib(t,i,r),r},Zn=(e,t,i)=>t.has(e)||Du("Cannot "+i),k=(e,t,i)=>(Zn(e,t,"read from private field"),i?i.call(e):t.get(e)),Pt=(e,t,i)=>t.has(e)?Du("Cannot add the same private member more than once"):t instanceof WeakSet?t.add(e):t.set(e,i),ps=(e,t,i,o)=>(Zn(e,t,"write to private field"),t.set(e,i),i),F=(e,t,i)=>(Zn(e,t,"access private method"),i),q,D,Qn,Jn,vs,fs,ea,B,Lu,ta,ia,ra,oa,ii,Tu,Vu,Tr;const ob="ArrowLeft",sb="ArrowUp",nb="ArrowRight",ab="ArrowDown",lb=" ",ub="Enter";let ri=class extends De(g,""){constructor(){super(),Pt(this,B),this.disabled=!1,this.readonly=!1,Pt(this,q,null),Pt(this,D,[]),Pt(this,Qn,e=>{k(this,D)?.forEach(t=>{t!==e.target?t.makeUnfocusable():t.makeFocusable()})}),Pt(this,Jn,e=>{this.contains(e.relatedTarget)||k(this,q)===null&&k(this,D)?.forEach(t=>{t.makeFocusable()})}),Pt(this,vs,()=>{this.pristine=!1}),Pt(this,fs,e=>{e.target.checked===!0&&(this.value=e.target.value,F(this,B,Tr).call(this))}),Pt(this,ea,e=>{switch(e.key){case ob:case sb:{e.preventDefault(),F(this,B,Tu).call(this);break}case nb:case ab:{e.preventDefault(),F(this,B,Vu).call(this);break}case lb:{k(this,q)===null&&(this.value=F(this,B,ii).call(this,1,!1)?.value,F(this,B,Tr).call(this));break}case ub:this.submit()}}),this.addEventListener("keydown",k(this,ea)),this.addEventListener("focusin",k(this,Qn)),this.addEventListener("focusout",k(this,Jn)),this.updateComplete.then(()=>{F(this,B,ia).call(this,this.value)})}get value(){return super.value}set value(e){super.value=e,F(this,B,ia).call(this,e)}connectedCallback(){super.connectedCallback(),this.hasAttribute("role")||this.setAttribute("role","radiogroup")}updated(e){super.updated(e),e.has("disabled")&&F(this,B,ra).call(this,this.disabled),e.has("readonly")&&F(this,B,oa).call(this,this.readonly),e.has("name")&&F(this,B,ta).call(this,e.get("name"))}async focus(){await this.updateComplete,k(this,q)!==null?k(this,D)[k(this,q)]?.focus():F(this,B,ii).call(this,1,!1)?.focus()}async blur(){await this.updateComplete,k(this,q)!==null?k(this,D)[k(this,q)]?.blur():F(this,B,ii).call(this,1,!1)?.blur()}async click(){await this.updateComplete,k(this,q)!==null?k(this,D)[k(this,q)]?.click():F(this,B,ii).call(this,1,!1)?.click()}getFormElement(){if(k(this,D)&&k(this,q))return k(this,D)[k(this,q)]}render(){return l` <slot @slotchange=${F(this,B,Lu)}></slot> `}};q=new WeakMap,D=new WeakMap,Qn=new WeakMap,Jn=new WeakMap,vs=new WeakMap,fs=new WeakMap,ea=new WeakMap,B=new WeakSet,Lu=function(e){if(e.stopPropagation(),k(this,D)?.forEach(i=>{i.removeEventListener(Xi.CHANGE,k(this,fs)),i.removeEventListener("blur",k(this,vs))}),ps(this,q,null),ps(this,D,e.target.assignedElements({flatten:!0}).filter(i=>i instanceof Ee)),k(this,D).length===0)return;k(this,D).forEach(i=>{i.addEventListener(Xi.CHANGE,k(this,fs)),i.addEventListener("blur",k(this,vs))}),F(this,B,ta).call(this,this.name),this.disabled&&F(this,B,ra).call(this,!0),this.readonly&&F(this,B,oa).call(this,!0);const t=k(this,D).filter(i=>i.checked===!0);if(t.length>1&&(k(this,D).forEach(i=>{i.checked=!1}),this.value="",console.error("There can only be one checked radio among the <"+this.nodeName+"> children",this)),t.length===1){const i=t[0];this.value=i.value,ps(this,q,k(this,D).indexOf(i))}},ta=function(e){k(this,D)?.forEach(t=>t.name=e)},ia=function(e){const t=[];k(this,D).forEach((i,o)=>{i.value===e?(i.checked=!0,i.makeFocusable(),ps(this,q,o)):(i.checked=!1,t.push(i))}),k(this,q)!==null&&t.forEach(i=>i.makeUnfocusable())},ra=function(e){k(this,D)?.forEach(t=>t.disabled=e)},oa=function(e){k(this,D)?.forEach(t=>t.readonly=e)},ii=function(e=1,t=!0){if(!k(this,D)||k(this,D).length===0)return null;const i=k(this,D).length;let o=k(this,q)??0;for(let r=0;r<i+1;r++){if(!t||r>0){const s=k(this,D)[o];if(!s.disabled&&!s.readonly)return s}o=(o+e+i)%i}return null},Tu=function(){this.value=F(this,B,ii).call(this,-1)?.value??"",k(this,D)[k(this,q)??0]?.focus(),F(this,B,Tr).call(this)},Vu=function(){this.value=F(this,B,ii).call(this)?.value??"",k(this,D)[k(this,q)??0]?.focus(),F(this,B,Tr).call(this)},Tr=function(){this.pristine=!1,this.dispatchEvent(new ds(ds.CHANGE))},ri.formAssociated=!0,ri.styles=[b`
      :host {
        display: inline-block;
        padding-right: 3px;
        border: 1px solid transparent;
        border-radius: var(--uui-border-radius,3px);
      }

      :host(:not([pristine]):invalid),
      /* polyfill support */
      :host(:not([pristine])[internals-invalid]) {
        border: 1px solid var(--uui-color-invalid-standalone,rgb(191, 33, 78));
      }
    `],Xn([a({type:Boolean,reflect:!0})],ri.prototype,"disabled",2),Xn([a({type:Boolean,reflect:!0})],ri.prototype,"readonly",2),ri=Xn([v("uui-radio-group")],ri);class Re extends A{constructor(t,i={}){super(t,{bubbles:!0,...i})}}Re.INPUT="input",Re.CHANGE="change";var cb=Object.defineProperty,hb=Object.getOwnPropertyDescriptor,Nu=e=>{throw TypeError(e)},j=(e,t,i,o)=>{for(var r=o>1?void 0:o?hb(t,i):t,s=e.length-1,n;s>=0;s--)(n=e[s])&&(r=(o?n(t,i,r):n(r))||r);return o&&r&&cb(t,i,r),r},Bu=(e,t,i)=>t.has(e)||Nu("Cannot "+i),db=(e,t,i)=>(Bu(e,t,"read from private field"),i?i.call(e):t.get(e)),Hu=(e,t,i)=>t.has(e)?Nu("Cannot add the same private member more than once"):t instanceof WeakSet?t.add(e):t.set(e,i),Zi=(e,t,i)=>(Bu(e,t,"access private method"),i),St,oi,sa;const na={TOP:3,CENTER:2},Vr=18,Qi=3,nt=12,pb=24,aa=e=>{const t=e.toString().indexOf(".");return t>=0?e.toString().length-t-1:0};let L=class extends De(g,""){constructor(){super(),Hu(this,St),this.disabled=!1,this.readonly=!1,this._min=0,this._max=0,this.hideStepValues=!1,this._step=1,this._movement=!1,this.startPoint={mouse:0,low:0,high:0},this._lowInputValue=0,this._highInputValue=0,this._trackWidth=0,this._lowValuePercentStart=0,this._highValuePercentEnd=100,Hu(this,sa,e=>{e.key=="Enter"&&this.submit()}),this._onTouchStart=e=>{if(this.disabled)return;const t=e.composedPath()[0];if(t!==this._outerTrack)if(t===this._innerColor||t===this._innerColorThumb)window.addEventListener("touchend",this._onTouchEnd),window.addEventListener("touchcancel",this._onTouchEnd),window.addEventListener("touchmove",this._onTouchMove),this._movement=!0,this._saveStartPoints(e.touches[0].pageX);else{const i=this._getClickedValue(e.touches[0].pageX),o=Math.abs(this._lowInputValue-i),r=Math.abs(this._highInputValue-i);o<r?this.setValueLow(i):this.setValueHigh(i)}},this._onTouchMove=e=>{this._dragBothValuesByMousePos(e.touches[0].pageX)},this._onTouchEnd=()=>{this._movement=!1,this.onChanged(),window.removeEventListener("touchend",this._onTouchEnd),window.removeEventListener("touchcancel",this._onTouchEnd),window.removeEventListener("touchmove",this._onTouchMove)},this._onMouseDown=e=>{if(this.disabled||this.readonly)return;const t=e.composedPath()[0];if(t!==this._outerTrack)if(t===this._innerColor||t===this._innerColorThumb)window.addEventListener("mouseup",this._onMouseUp),window.addEventListener("mousemove",this._onMouseMove),this._movement=!0,this._saveStartPoints(e.pageX);else{const i=this._getClickedValue(e.pageX),o=Math.abs(this._lowInputValue-i),r=Math.abs(this._highInputValue-i);o<r?this.setValueLow(i):this.setValueHigh(i)}},this._onMouseMove=e=>{e.preventDefault(),this._dragBothValuesByMousePos(e.pageX)},this._onMouseUp=()=>{this._movement=!1,this.onChanged(),window.removeEventListener("mouseup",this._onMouseUp),window.removeEventListener("mousemove",this._onMouseMove)},this.addEventListener("keydown",db(this,sa)),this.addEventListener("mousedown",this._onMouseDown),this.addEventListener("touchstart",this._onTouchStart),window.addEventListener("resize",()=>{this._trackWidth=this._outerTrack?.offsetWidth})}get min(){return this._min}set min(e){this._min=e,Zi(this,St,oi).call(this)}get max(){return this._max}set max(e){this._max=e,Zi(this,St,oi).call(this)}get step(){return this._step}set step(e){this._step=e,Zi(this,St,oi).call(this)}get minGap(){return this._minGap}set minGap(e){this._minGap=e,Zi(this,St,oi).call(this)}get maxGap(){return this._maxGap}set maxGap(e){this._maxGap=e,Zi(this,St,oi).call(this)}get value(){return super.value}set value(e){super.value=e,Zi(this,St,oi).call(this)}setValueLow(e){e=M(e,this.maxGap?this._highInputValue-this.maxGap>this.min?this._highInputValue-this.maxGap:this.min:this.min,this.minGap?this._highInputValue-this.minGap:this._highInputValue-this.step),this.setValue(e,this._highInputValue)}setValueHigh(e){e=M(e,this.minGap?this._lowInputValue+this.minGap:this._lowInputValue+this.step,this.maxGap?this.maxGap+this._lowInputValue<this.max?this.maxGap+this._lowInputValue:this.max:this.max),this.setValue(this._lowInputValue,e)}setValue(e,t,i){if(i){const o=this.startPoint.high-this.startPoint.low;e=M(e,this.min,this.max-o),t=M(t,this.min+o,this.max)}this._inputLow.value=e.toString(),this._inputHigh.value=t.toString(),this.value=`${e},${t}`}getFormElement(){return this._currentFocus?this._currentFocus:this._inputLow}async focus(){await this.updateComplete,this.getFormElement().focus()}async blur(){await this.updateComplete,this.getFormElement().blur()}connectedCallback(){super.connectedCallback(),this.value||(this.value=`${this._min},${this._max}`)}firstUpdated(e){super.updated(e),this._trackWidth=this._outerTrack.offsetWidth,this._runPropertiesChecks()}_runPropertiesChecks(){if(new RegExp(/^-?\d+(\.\d+)?,-?\d+(\.\d+)?$/).test(this.value)||console.error("Range slider (Value error occurred): Bad input"),this._highInputValue===this._lowInputValue&&console.error("Range slider (Value error occurred): Low-end and high-end value should never be equal. Use <uui-slider></uui-slider> instead."),this._lowInputValue>this._highInputValue&&console.error("Range slider (Value error occurred): Low-end value should never be higher than high-end value."),(this._highInputValue>this._max||this._highInputValue<this._min)&&(this.setValueHigh(this._max),console.warn(`Conflict with the high-end value and max value. High-end value has been converted to the max value (${this._max})`)),(this._lowInputValue<this._min||this._lowInputValue>this._max)&&(this.setValueLow(this._min),console.warn(`Conflict with the low-end value and min value. Low-end value has been converted to the min value (${this._min})`)),this._step<=0&&(this._step=1,console.warn("Property step needs a value higher than 0. Converted the step value to 1 (default)")),(this._max-this._min)/this._step%1!==0&&console.error("Conflict with step value and the min and max values. May experience bad side effects"),this._minGap&&this._minGap<this._step&&(this._minGap=void 0,console.warn("Conflict with min-gap and step value. The min-gap needs to be higher than the step value. Removed the min-gap property.")),this._minGap&&this._maxGap&&this._minGap>this._maxGap&&(this._minGap=void 0,this._maxGap=void 0,console.warn("Conflict with min-gap and max-gap. Removed the min-gap and max-gap properties.")),this._minGap&&this._max-this._min<this._minGap&&(this._minGap=void 0,console.warn("Conflict with the min-gap and the total range. Removed the min-gap.")),this._maxGap&&this._highInputValue-this._lowInputValue>this._maxGap&&(this.setValueHigh(this._lowInputValue+this._maxGap),console.warn(`Conflict with value and max-gap. High-end value has been converted to the highest possible value based on the low-end value and the max gap value (${this._highInputValue})`)),this._minGap&&this._highInputValue-this._lowInputValue<this._minGap){const t=this._minGap;this._highInputValue-t<this._min?(this.setValueHigh(this._lowInputValue+t),console.warn(`Conflict with value and min gap. High-end value has been converted to the lowest possible value based on the low-end value and the min gap value (${this._highInputValue}).`)):(this.setValueLow(this._highInputValue-t),console.warn(`Conflict with value and min gap. Low-end value has been converted to the highest possible value based on the high-end value and the min gap value (${this._lowInputValue}).`))}}_updateInnerColor(){const e=this._max-this._min,t=this._lowInputValue-this._min,i=this._highInputValue-this._min,o=t/e*100,r=100-i/e*100;this._lowValuePercentStart=M(o,0,100),this._highValuePercentEnd=M(r,0,100)}_getClickedValue(e){const t=this._outerTrack.getBoundingClientRect().left,r=(e-t-nt)/(this._trackWidth-nt*2)*(this._max-this._min)+this._min;return Math.round(r/this._step)*this._step}_saveStartPoints(e){this.startPoint={mouse:e,low:this._lowInputValue,high:this._highInputValue}}_dragBothValuesByMousePos(e){const t=this._outerTrack.offsetWidth,i=e-this.startPoint.mouse,o=this._max-this._min,r=i/(t+nt*2),s=Math.round(r*o/this._step)*this._step,n=this.startPoint.low+s,u=this.startPoint.high+s;this.setValue(n,u,!0),this.dispatchEvent(new Re(Re.INPUT))}_onLowInput(e){this.disabled&&e.preventDefault(),this.readonly&&e.preventDefault(),this._currentFocus=this._inputLow;const t=Number(e.target.value);this.setValueLow(t),this.dispatchEvent(new Re(Re.INPUT))}_onHighInput(e){this.disabled&&e.preventDefault(),this.readonly&&e.preventDefault(),this._currentFocus=this._inputHigh;const t=Number(e.target.value);this.setValueHigh(t),this.dispatchEvent(new Re(Re.INPUT))}_onLowChange(){this.setValueLow(Number(this._inputLow.value)),this.onChanged()}_onHighChange(){this.setValueHigh(Number(this._inputHigh.value)),this.onChanged()}onChanged(){this.pristine=!1,this.dispatchEvent(new Re(Re.CHANGE))}render(){return l`
      <div id="range-slider">
        ${this._renderNativeInputs()}
        <div id="inner-track">
          <div
            id="inner-color-thumb"
            class="${this._movement?"active":""}"
            style="left: ${this._lowValuePercentStart}%; right: ${this._highValuePercentEnd}%">
            ${this._renderThumbValues()}
            <div class="${this._movement?"color active":"color"}"></div>
          </div>
          ${this._renderSteps()}
        </div>
      </div>
    `}_renderThumbValues(){return l`<div class="thumb-values">
      <span
        ><span
          >${this._lowInputValue.toFixed(aa(this._step))}</span
        ></span
      >
      <span
        ><span
          >${this._highInputValue.toFixed(aa(this._step))}</span
        ></span
      >
    </div>`}_renderSteps(){const e=(this._max-this._min)/this._step,t=(this._trackWidth-nt*2)/e;if(t<pb||e%1!==0)return;let i=0;const o=new Array(e+1).fill(t).map(r=>r*i++);return l`<div class="step-wrapper">
      <svg height="100%" width="100%">
        <rect x="9" y="9" height="${Qi}" rx="2" />
        ${this._renderStepCircles(o)}
      </svg>
      ${this._renderStepValues(e)}
    </div>`}_renderStepValues(e){if(this.hideStepValues||e>20)return;let t=0;const i=new Array(e+1).fill(this._step).map(o=>(this._min+o*t++).toFixed(aa(this._step)));return l`<div class="step-values">
      ${i.map(o=>l`<span><span>${o}</span></span>`)}
    </div>`}_renderStepCircles(e){const t=this._trackWidth/(this._max-this._min);return m`${e.map(i=>{const o=i+nt,r=this._lowInputValue-this._min,s=this._highInputValue-this._min;return o/t>=r&&o/t<=s?m`<circle class="track-step filled" cx="${o}" cy="${Qi*2}" r="4.5" />`:m`<circle class="track-step regular" cx="${o}" cy="${Qi*2}" r="4.5" />`})}`}_renderNativeInputs(){return l` <div class="native-wrapper">
      <input
        id="inputLow"
        class="${this._movement?"focus":""}"
        type="range"
        min=${this._min}
        max=${this._max}
        step=${this._step}
        .value=${this._lowInputValue.toString()}
        aria-label="${this.label} low-end value"
        ?disabled="${this.disabled||this.readonly}"
        @input=${this._onLowInput}
        @change=${this._onLowChange} />
      <input
        id="inputHigh"
        class="${this._movement?"focus":""}"
        type="range"
        min="${this._min}"
        max="${this._max}"
        step="${this._step}"
        .value=${this._highInputValue.toString()}
        aria-label="${this.label} high-end value"
        ?disabled="${this.disabled||this.readonly}"
        @input=${this._onHighInput}
        @change=${this._onHighChange} />
    </div>`}};St=new WeakSet,oi=function(){const e=this.value.split(",");let t=Number(e[0])||0,i=Number(e[1])||0;i=M(i,this._min,this._max),t=this._min+Math.round((t-this._min)/this._step)*this._step,i=this._min+Math.round((i-this._min)/this._step)*this._step,this._lowInputValue=M(t,this._min,this._minGap?i-this._minGap:i-this._step),this._highInputValue=M(i,this._minGap?this._lowInputValue+this._minGap:this._lowInputValue+this._step,Math.min(this._maxGap?t+this._maxGap:this._max,this._max)),this._updateInnerColor(),this.requestUpdate()},sa=new WeakMap,L.formAssociated=!0,L.styles=[b`
      :host {
        --color-interactive: var(--uui-color-selected,#3544b1);
        --color-hover: var(--uui-color-selected-emphasis,rgb(70, 86, 200));
        --color-focus: var(--uui-color-focus,#3879ff);
        min-height: 30px;
      }

      :host([error]) {
        --color-interactive: var(--uui-color-invalid-standalone,rgb(191, 33, 78));
        --color-hover: var(--uui-color-invalid,#d42054);
      }

      #range-slider {
        min-height: 30px;
        box-sizing: border-box;
        position: relative;
        display: flex;
        align-items: center;
      }

      /** Track */

      #inner-track {
        user-select: none;
        background-color: var(--uui-color-border-standalone,#c2c2c2);
        position: absolute;
        height: 3px;
        left: ${nt}px; /* Match TRACK_MARGIN */
        right: ${nt}px; /* Match TRACK_MARGIN */
      }

      :host(:not([disabled]):hover) #inner-track,
      :host(:not([disabled]):active) #inner-track {
        background-color: var(--uui-color-border-emphasis,#a1a1a1);
      }

      #inner-color-thumb {
        margin: -9px 0 0;
        position: absolute;
        display: flex;
        flex-direction: column;
        justify-content: center;
        height: ${Vr}px;
        cursor: grab;
        user-select: none;
        z-index: ${na.CENTER};
      }

      :host([disabled]) #inner-color-thumb,
      :host([readonly]) #inner-color-thumb {
        cursor: default;
      }

      /** Colored part of track */

      :host([disabled]) #range-slider #inner-color-thumb .color {
        background-color: var(--uui-palette-mine-grey,#3e3e3e) !important;
      }

      #inner-color-thumb:focus .color {
        background-color: var(--color-focus);
      }

      #inner-color-thumb:hover .color,
      #inner-color-thumb .color.active {
        background-color: var(--color-hover);
      }

      :host(:not([readonly])) #inner-color-thumb:hover .color {
        height: ${Qi*2}px;
        background-color: var(--color-hover);
        transform: translateY(-${Qi/2}px);
      }

      .color {
        user-select: none;
        position: absolute;
        inset-inline: 0;
        height: ${Qi}px;
        top: 50%;
        transform: translateY(0);
        background-color: var(--color-interactive);
        transition: height 60ms;
      }

      :host([error]) .color {
        background-color: var(--uui-color-invalid-standalone,rgb(191, 33, 78));
      }
      :host([error]) #inner-color-thumb:hover ~ .color,
      :host([error]) #inner-color-thumb:focus ~ .color {
        background-color: var(--uui-color-invalid-emphasis,rgb(226, 60, 107));
      }

      /** Steps */
      .step-wrapper {
        margin: 0 ${-1*nt}px;
        height: 11px;
        position: absolute;
        left: 0;
        right: 0;
        top: -10px;
      }

      /** Step circles */
      .track-step {
        fill: var(--uui-color-border,#d8d7d9);
      }

      :host(:not([disabled]):hover) #inner-track .track-step.regular,
      :host(:not([disabled]):active) #inner-track .track-step.regular {
        fill: var(--uui-color-border-emphasis,#a1a1a1);
      }

      :host .track-step.filled {
        fill: var(--color-interactive);
      }

      :host([error]) .track-step.filled {
        fill: var(--uui-color-invalid-emphasis,rgb(226, 60, 107));
      }

      :host #inner-color-thumb.active ~ .step-wrapper .track-step.filled,
      :host #inner-color-thumb:hover ~ .step-wrapper .track-step.filled {
        fill: var(--color-hover);
      }

      :host([disabled]) #range-slider .track-step.filled {
        fill: var(--uui-palette-mine-grey,#3e3e3e) !important;
      }

      /** Step values */

      .step-values {
        box-sizing: border-box;
        margin: 0 ${nt}px; /* Match TRACK_MARGIN */
        display: flex;
        justify-content: space-between;
        font-size: var(--uui-type-small-size,12px);
      }

      .step-values > span {
        position: relative;
        color: var(--uui-color-disabled-contrast,#c4c4c4);
      }

      .step-values > span > span {
        position: absolute;
        transform: translateX(-50%);
      }

      /** Input */

      .native-wrapper {
        position: relative;
        width: 100%;
        inset-inline: 0px;
        margin: -22px 5px 0 1px;
      }

      input {
        -webkit-appearance: none;
        -moz-appearance: none;
        appearance: none;
        pointer-events: none;
        position: absolute;
        cursor: pointer;
        background-color: transparent;
        inset-inline: 0;
        width: 100%;
        border-radius: 20px;
      }

      input:focus-within {
        outline: none;
      }

      /** Thumb values */
      .thumb-values {
        box-sizing: border-box;
        display: flex;
        justify-content: space-between;
        color: var(--color-interactive);
        font-weight: bold;
        transition: 120ms opacity;
        opacity: 0;
      }

      .thumb-values > span {
        width: 0;
      }

      .thumb-values > span > span {
        bottom: 15px;
        position: absolute;
        transform: translateX(-50%);
      }

      :host([disabled]) .thumb-values {
        color: var(--uui-palette-mine-grey,#3e3e3e);
      }

      :host([readonly]) .thumb-values {
        opacity: 1;
      }

      #range-slider:hover .thumb-values {
        opacity: 1;
      }

      /** Native thumbs */
      /** Chrome */
      input::-webkit-slider-thumb {
        -webkit-appearance: none;
        pointer-events: all;
        cursor: grab;
        position: relative;
        z-index: ${na.TOP};
        width: ${Vr}px;
        height: ${Vr}px;
        border-radius: 24px;
        border: none;
        background-color: var(--color-interactive);
        overflow: visible;
        box-shadow:
          inset 0 0 0 2px var(--color-interactive),
          inset 0 0 0 4px var(--uui-color-surface,#fff);
      }

      :host([disabled]) input::-webkit-slider-thumb,
      :host([readonly]) input::-webkit-slider-thumb {
        cursor: default;
      }

      input:focus-within::-webkit-slider-thumb,
      input.focus::-webkit-slider-thumb {
        background-color: var(--color-focus);
        box-shadow:
          inset 0 0 0 2px var(--color-focus),
          inset 0 0 0 4px var(--uui-color-surface,#fff),
          0 0 0 2px var(--color-focus);
      }
      input::-webkit-slider-thumb:hover {
        background-color: var(--color-hover);
        box-shadow:
          inset 0 0 0 2px var(--color-hover),
          inset 0 0 0 4px var(--uui-color-surface,#fff);
      }

      :host([disabled]) #range-slider input::-webkit-slider-thumb {
        background-color: var(--uui-palette-mine-grey,#3e3e3e);
        box-shadow:
          inset 0 0 0 2px var(--uui-palette-mine-grey,#3e3e3e),
          inset 0 0 0 4px var(--uui-color-surface,#fff);
      }

      /** Mozilla */

      input::-moz-range-thumb {
        -moz-appearance: none;
        pointer-events: all;
        cursor: grab;
        position: relative;
        z-index: ${na.TOP};
        width: ${Vr}px;
        height: ${Vr}px;
        border-radius: 24px;
        border: none;
        background-color: var(--color-interactive);
        overflow: visible;
        box-shadow:
          inset 0 0 0 2px var(--color-interactive),
          inset 0 0 0 4px var(--uui-color-surface,#fff);
      }
      :host([disabled]) input::-moz-range-thumb,
      :host([readonly]) input::-moz-range-thumb {
        cursor: default;
      }

      input:focus-within::-moz-range-thumb,
      input.focus::-moz-range-thumb {
        background-color: var(--color-focus);
        box-shadow:
          inset 0 0 0 2px var(--color-focus),
          inset 0 0 0 4px var(--uui-color-surface,#fff),
          0 0 0 2px var(--color-focus);
      }
      input::-moz-range-thumb:hover {
        background-color: var(--color-hover);
        box-shadow:
          inset 0 0 0 2px var(--color-hover),
          inset 0 0 0 4px var(--uui-color-surface,#fff);
      }

      :host([disabled]) #range-slider input::-moz-range-thumb {
        background-color: var(--uui-palette-mine-grey,#3e3e3e);
        box-shadow:
          inset 0 0 0 2px var(--uui-palette-mine-grey,#3e3e3e),
          inset 0 0 0 4px var(--uui-color-surface,#fff);
      }
    `],j([a({type:String})],L.prototype,"label",2),j([a({type:Boolean,reflect:!0})],L.prototype,"disabled",2),j([a({type:Boolean,reflect:!0})],L.prototype,"readonly",2),j([a({type:Number})],L.prototype,"min",1),j([a({type:Number})],L.prototype,"max",1),j([a({type:Boolean,attribute:"hide-step-values"})],L.prototype,"hideStepValues",2),j([a({type:Number})],L.prototype,"step",1),j([a({type:Number,attribute:"min-gap"})],L.prototype,"minGap",1),j([a({type:Number,attribute:"max-gap"})],L.prototype,"maxGap",1),j([a({type:String})],L.prototype,"value",1),j([_()],L.prototype,"_movement",2),j([_()],L.prototype,"_lowInputValue",2),j([_()],L.prototype,"_highInputValue",2),j([_()],L.prototype,"_trackWidth",2),j([_()],L.prototype,"_lowValuePercentStart",2),j([_()],L.prototype,"_highValuePercentEnd",2),j([O("#range-slider")],L.prototype,"_outerTrack",2),j([O("#inputLow")],L.prototype,"_inputLow",2),j([O("#inputHigh")],L.prototype,"_inputHigh",2),j([O(".color")],L.prototype,"_innerColor",2),j([O("#inner-color-thumb")],L.prototype,"_innerColorThumb",2),L=j([v("uui-range-slider")],L);var vb=Object.getOwnPropertyDescriptor,fb=(e,t,i,o)=>{for(var r=o>1?void 0:o?vb(t,i):t,s=e.length-1,n;s>=0;s--)(n=e[s])&&(r=n(r)||r);return r};let bs=class extends g{render(){return l`<slot></slot>`}};bs.styles=[b`
      :host {
        display: block;
      }

      ::slotted(*:not(:first-child)) {
        margin-top: 1px;
      }
      ::slotted(*:not(:first-child))::before {
        content: '';
        position: absolute;
        top: -1px;
        left: 0;
        right: 0;
        border-top: 1px solid var(--uui-color-border,#d8d7d9);
      }
    `],bs=fb([v("uui-ref-list")],bs);class Ji extends A{}Ji.OPEN="open";var bb=Object.defineProperty,gb=Object.getOwnPropertyDescriptor,gs=(e,t,i,o)=>{for(var r=o>1?void 0:o?gb(t,i):t,s=e.length-1,n;s>=0;s--)(n=e[s])&&(r=(o?n(t,i,r):n(r))||r);return o&&r&&bb(t,i,r),r};let at=class extends _o(fi(g)){constructor(){super(...arguments),this.disabled=!1,this.readonly=!1,this.error=!1}handleOpenClick(e){e.stopPropagation(),this.dispatchEvent(new Ji(Ji.OPEN))}handleOpenKeydown(e){e.key!==" "&&e.key!=="Enter"||(e.preventDefault(),e.stopPropagation(),this.dispatchEvent(new Ji(Ji.OPEN)))}};at.styles=[b`
      :host {
        position: relative;
        display: flex;
        justify-content: space-between;
        align-items: center;
        width: 100%;

        box-sizing: border-box;
        border-radius: var(--uui-border-radius,3px);
        background-color: var(--uui-color-surface,#fff);
        --uui-card-before-opacity: 0;
        transition: --uui-card-before-opacity 120ms;
      }

      :host([selectable]:focus-visible) {
        outline-color: var(--uui-color-focus,#3879ff);
        outline-width: var(--uui-card-border-width);
        outline-style: solid;
        outline-offset: var(--uui-card-border-width);
      }

      :host([error]) {
        border: 2px solid var(--uui-color-invalid,#d42054);
        box-shadow:
          0 0 4px 0 var(--uui-color-invalid,#d42054),
          inset 0 0 2px 0 var(--uui-color-invalid,#d42054);
      }

      :host([standalone]) {
        border: 1px solid var(--uui-color-border,#d8d7d9);
      }

      :host([selectable]) {
        cursor: pointer;
      }
      :host([selectable]) #select-border {
        position: absolute;
        z-index: 2;
        top: -2px;
        left: -2px;
        right: -2px;
        bottom: -2px;
        pointer-events: none;
        opacity: 0;
        transition: opacity 120ms;
      }
      :host([selectable]) #select-border::after {
        content: '';
        position: absolute;
        width: 100%;
        height: 100%;
        box-sizing: border-box;
        border: 2px solid var(--uui-color-selected,#3544b1);
        border-radius: calc(var(--uui-border-radius,3px) + 2px);
        box-shadow:
          0 0 4px 0 var(--uui-color-selected,#3544b1),
          inset 0 0 2px 0 var(--uui-color-selected,#3544b1);
      }
      :host([selected]) #select-border {
        opacity: 1;
      }
      :host([selectable]:not([selected]):hover) #select-border {
        opacity: 0.33;
      }
      :host([selectable][selected]:hover) #select-border {
        opacity: 0.8;
      }

      :host([selectable]:not([selected])) #open-part:hover + #select-border {
        opacity: 0;
      }
      :host([selectable][selected]) #open-part:hover + #select-border {
        opacity: 1;
      }

      :host([selectable]:not([selected]):hover) #select-border::after {
        animation: not-selected--hover 1.2s infinite;
      }
      @keyframes not-selected--hover {
        0%,
        100% {
          opacity: 0.66;
        }
        50% {
          opacity: 1;
        }
      }

      :host([selectable][selected]:hover) #select-border::after {
        animation: selected--hover 1.4s infinite;
      }
      @keyframes selected--hover {
        0%,
        100% {
          opacity: 1;
        }
        50% {
          opacity: 0.66;
        }
      }
      :host([selectable]) #open-part:hover + #select-border::after {
        animation: none;
      }

      :host([select-only]) *,
      :host([select-only]) ::slotted(*) {
        pointer-events: none;
      }

      button {
        font-size: inherit;
        font-family: inherit;
        border: 0;
        padding: 0;
        background-color: transparent;
        text-align: left;
        color: var(--uui-color-text,#060606);
      }
      a {
        text-decoration: none;
        color: inherit;
      }

      button:focus,
      a:focus {
        outline-color: var(--uui-color-focus,#3879ff);
        outline-width: var(--uui-card-border-width);
        outline-style: solid;
        outline-offset: var(--uui-card-border-width);
        border-radius: var(--uui-border-radius,3px);
      }

      slot[name='actions'] {
        display: flex;
        align-items: center;
        --uui-button-height: calc(var(--uui-size-2,6px) * 4);
        margin-right: var(--uui-size-2,6px);
      }
      #tag-container {
        margin: calc(var(--uui-size-2,6px));
      }
      #actions-container {
        margin: calc(var(--uui-size-2,6px));
        opacity: 0;
        transition: opacity 120ms;
      }
      :host(:hover) #actions-container,
      :host(:focus) #actions-container,
      :host(:focus-within) #actions-container {
        opacity: 1;
      }

      :host([standalone]:not([disabled]):hover) {
        border-color: var(--uui-color-border-emphasis,#a1a1a1);
      }

      :host([disabled]) #open-part {
        cursor: default;
      }

      :host([standalone][disabled]) {
        border-color: var(--uui-color-disabled-standalone,rgb(226, 226, 226));
      }

      slot[name='tag'] {
        display: flex;
        justify-content: flex-end;
        align-items: center;
      }
    `],gs([a({type:Boolean,reflect:!0})],at.prototype,"disabled",2),gs([a({type:Boolean,reflect:!0})],at.prototype,"readonly",2),gs([a({type:Boolean,reflect:!0})],at.prototype,"error",2),at=gs([v("uui-ref")],at);var mb=Object.defineProperty,_b=Object.getOwnPropertyDescriptor,ju=e=>{throw TypeError(e)},si=(e,t,i,o)=>{for(var r=o>1?void 0:o?_b(t,i):t,s=e.length-1,n;s>=0;s--)(n=e[s])&&(r=(o?n(t,i,r):n(r))||r);return o&&r&&mb(t,i,r),r},yb=(e,t,i)=>t.has(e)||ju("Cannot "+i),wb=(e,t,i)=>t.has(e)?ju("Cannot add the same private member more than once"):t instanceof WeakSet?t.add(e):t.set(e,i),Ot=(e,t,i)=>(yb(e,t,"access private method"),i),We,Ru,Wu,ms,Fu,Gu,qu;let R=class extends at{constructor(){super(...arguments),wb(this,We),this.name="",this.detail="",this._iconSlotHasContent=!1,this.fallbackIcon=`<svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    stroke-width="1.75"
    stroke-linecap="round"
    stroke-linejoin="round"
    id="icon">
    <path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z" />
    <path d="M14 2v4a2 2 0 0 0 2 2h4" />
  </svg>`}connectedCallback(){super.connectedCallback(),x(this,"uui-icon")}renderDetail(){return l`<small id="detail"
      >${this.detail}<slot name="detail"></slot
    ></small>`}render(){return l`
      ${Ot(this,We,qu).call(this)}
      <!-- Select border must be right after #open-part -->
      <div id="select-border"></div>

      <slot></slot>
      <slot name="tag" id="tag-container"></slot>
      <slot name="actions" id="actions-container"></slot>
    `}};We=new WeakSet,Ru=function(e){this._iconSlotHasContent=e.target.assignedNodes({flatten:!0}).length>0},Wu=function(){return l`<uui-icon .svg="${this.fallbackIcon}"></uui-icon>`},ms=function(){return l`
      <span id="content" class="uui-text">
        <span id="icon">
          <slot name="icon" @slotchange=${Ot(this,We,Ru)}></slot>
          ${this._iconSlotHasContent===!1?Ot(this,We,Wu).call(this):""}
        </span>
        <div id="info">
          <div id="name">${this.name}<slot name="name"></slot></div>
          ${this.renderDetail()}
        </div>
      </span>
    `},Fu=function(){return l`<a
      id="open-part"
      class="uui-text"
      tabindex=${this.disabled?E:"0"}
      href=${w(this.disabled?void 0:this.href)}
      target=${w(this.target||void 0)}
      rel=${w(this.rel||w(this.target==="_blank"?"noopener noreferrer":void 0))}>
      ${Ot(this,We,ms).call(this)}
    </a>`},Gu=function(){return l`
      <button
        type="button"
        id="open-part"
        class="uui-text"
        tabindex="0"
        @click=${this.handleOpenClick}
        @keydown=${this.handleOpenKeydown}
        ?disabled=${this.disabled}>
        ${Ot(this,We,ms).call(this)}
      </button>
    `},qu=function(){return this.readonly?l`${Ot(this,We,ms).call(this)}`:this.href?Ot(this,We,Fu).call(this):Ot(this,We,Gu).call(this)},R.styles=[...at.styles,b`
      :host {
        min-width: 250px;
        padding: 1px;
      }

      #content {
        display: flex;
        align-items: center;
        justify-content: center;
        line-height: 1.2em;
        padding: calc(var(--uui-size-2,6px));
      }

      #open-part {
        color: inherit;
        text-decoration: none;
        cursor: pointer;
        display: flex;
        flex-grow: 1;
      }

      #icon {
        font-size: 1.2em;
        margin-right: var(--uui-size-1,3px);
        display: flex;
        align-items: center;
        justify-content: center;
      }

      #info {
        display: flex;
        flex-direction: column;
        align-items: start;
        justify-content: center;
        height: 100%;
        padding-left: var(--uui-size-2,6px);
      }

      #detail {
        opacity: 0.6;
      }

      :host([selectable]) #open-part {
        flex-grow: 0;
        padding: 0;
        margin: calc(var(--uui-size-2,6px));

        #content {
          padding: 0;
        }
      }

      :host(:not([disabled])) #open-part:hover #icon {
        color: var(--uui-color-interactive-emphasis,#3544b1);
      }
      :host(:not([disabled])) #open-part:hover #name {
        text-decoration: underline;
        color: var(--uui-color-interactive-emphasis,#3544b1);
      }
      :host(:not([disabled])) #open-part:hover #detail {
        color: var(--uui-color-interactive-emphasis,#3544b1);
      }

      :host([disabled]) #icon {
        color: var(--uui-color-disabled-contrast,#c4c4c4);
      }
      :host([disabled]) #name {
        color: var(--uui-color-disabled-contrast,#c4c4c4);
      }
      :host([disabled]) #detail {
        color: var(--uui-color-disabled-contrast,#c4c4c4);
      }
    `],si([a({type:String})],R.prototype,"name",2),si([a({type:String})],R.prototype,"detail",2),si([a({type:String})],R.prototype,"href",2),si([a({type:String})],R.prototype,"target",2),si([a({type:String})],R.prototype,"rel",2),si([_()],R.prototype,"_iconSlotHasContent",2),R=si([v("uui-ref-node")],R);var xb=Object.defineProperty,$b=Object.getOwnPropertyDescriptor,Ku=(e,t,i,o)=>{for(var r=o>1?void 0:o?$b(t,i):t,s=e.length-1,n;s>=0;s--)(n=e[s])&&(r=(o?n(t,i,r):n(r))||r);return o&&r&&xb(t,i,r),r};let Nr=class extends R{constructor(){super(...arguments),this.fallbackIcon='<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M142.212 397.267l106.052-48.024L398.479 199.03l-26.405-26.442-90.519 90.517-15.843-15.891 90.484-90.486-16.204-16.217-150.246 150.243-47.534 106.513zm74.904-100.739l23.285-23.283 3.353 22.221 22.008 3.124-23.283 23.313-46.176 20.991 20.813-46.366zm257.6-173.71L416.188 64.3l-49.755 49.785 58.504 58.503 49.779-49.77zM357.357 300.227h82.826v116.445H68.929V300.227h88.719v-30.648H38.288v177.733h432.537V269.578H357.357v30.649z"></path></svg>',this.alias=""}renderDetail(){const e=[];return this.alias!==""&&e.push(this.alias),this.detail!==""&&e.push(this.detail),l`<small id="detail"
      >${e.join(" | ")}<slot name="detail"></slot
    ></small>`}};Nr.styles=[...R.styles],Ku([a({type:String})],Nr.prototype,"alias",2),Nr=Ku([v("uui-ref-node-data-type")],Nr);var kb=Object.defineProperty,Cb=Object.getOwnPropertyDescriptor,Yu=(e,t,i,o)=>{for(var r=o>1?void 0:o?Cb(t,i):t,s=e.length-1,n;s>=0;s--)(n=e[s])&&(r=(o?n(t,i,r):n(r))||r);return o&&r&&kb(t,i,r),r};let Br=class extends R{constructor(){super(...arguments),this.fallbackIcon='<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M49.035 60.434h413.93v33.592H49.035zm0 82.005h86.578v86.577H49.035zm163.677 0h86.576v86.577h-86.576zm163.676 0h86.576v86.577h-86.576zM49.035 282.984h413.93v33.593H49.035zm0 82.006h86.578v86.576H49.035zm163.677 0h86.576v86.576h-86.576zm163.676 0h86.576v86.576h-86.576z"></path></svg>',this.alias=""}renderDetail(){const e=[];return this.alias!==""&&e.push(this.alias),this.detail!==""&&e.push(this.detail),l`<small id="detail"
      >${e.join(" | ")}<slot name="detail"></slot
    ></small>`}};Br.styles=[...R.styles],Yu([a({type:String})],Br.prototype,"alias",2),Br=Yu([v("uui-ref-node-document-type")],Br);var Eb=Object.getOwnPropertyDescriptor,Pb=(e,t,i,o)=>{for(var r=o>1?void 0:o?Eb(t,i):t,s=e.length-1,n;s>=0;s--)(n=e[s])&&(r=n(r)||r);return r};let _s=class extends R{constructor(){super(...arguments),this.fallbackIcon='<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M444.72 215.28H67.28c-11.04 0-20-8.96-20-20V64.896c0-11.04 8.96-20 20-20h377.44c11.04 0 20 8.96 20 20V195.28c0 11.056-8.96 20-20 20zm-357.44-40h337.44V84.896H87.28v90.384zm185.504 215.696c0-6.848.704-13.504 1.936-20H87.28v-90.384h337.44v12.496a108.098 108.098 0 0140 31.36v-63.856c0-11.04-8.96-20-20-20H67.28c-11.04 0-20 8.96-20 20v130.384c0 11.04 8.96 20 20 20h207.44c-1.232-6.496-1.936-13.152-1.936-20zm107.552-76.128c-41.968 0-76.112 34.16-76.112 76.128s34.144 76.128 76.112 76.128 76.128-34.16 76.128-76.128-34.144-76.128-76.128-76.128zm46.016 80.464a7.293 7.293 0 01-7.296 7.296h-27.072v27.088a7.293 7.293 0 01-7.296 7.296H376a7.293 7.293 0 01-7.296-7.296v-27.088h-27.072a7.293 7.293 0 01-7.296-7.296v-8.672a7.293 7.293 0 017.296-7.296h27.072v-27.088A7.293 7.293 0 01376 344.96h8.688a7.293 7.293 0 017.296 7.296v27.088h27.072a7.293 7.293 0 017.296 7.296v8.672z"></path></svg>'}};_s.styles=[...R.styles],_s=Pb([v("uui-ref-node-form")],_s);var Sb=Object.defineProperty,Ob=Object.getOwnPropertyDescriptor,Xu=(e,t,i,o)=>{for(var r=o>1?void 0:o?Ob(t,i):t,s=e.length-1,n;s>=0;s--)(n=e[s])&&(r=(o?n(t,i,r):n(r))||r);return o&&r&&Sb(t,i,r),r};let Hr=class extends R{constructor(){super(...arguments),this.fallbackIcon='<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M331.135 98.375c3.677 14.798 4.045 16.031 3.702 31.225-.138 5.855-3.5 32.936-2.586 41.242.751 6.851 2.46 7.395 5.162 13.041 4.705 9.824 3.13 23.376 1.325 33.282-.988 5.42-3.076 13.136-6.248 17.561-3.497 4.876-10.498 4.913-13.592 10.602-4.459 8.195-1.941 19.692-4.752 28.54-3.193 10.033-11.325 10.738-11.938 23.867 3.986.562 7.962 1.134 11.938 1.703 3.99 8.484 11.297 25.552 18.759 30.688 6.25 1.705 12.505 3.411 18.752 5.113 21.907 8.982 46.251 19.732 68.204 28.987 19.991 8.434 43.927 11.439 51.151 32.396 0 14.229 1.343 47.849.976 66.497H36.514c-.367-18.648.974-52.268.974-66.497 7.226-20.957 31.16-23.963 51.151-32.396 21.953-9.255 46.297-20.005 68.201-28.987 6.25-1.702 12.506-3.408 18.754-5.113 7.461-5.136 14.77-22.203 18.76-30.688l8.877-2.158c-2.017-11.206-8.954-12.078-11.845-20.01a91882.59 91882.59 0 00-3.408-35.806c.055.563-8.163-1.497-9.238-2.171-11.58-7.256-11.816-36.723-12.931-48.978-.508-5.603 7.283-10.193 5.118-20.465-12.69-60.138 5.486-88.282 34.229-97.614 19.95-8.083 57.198-23.074 91.941-1.703l8.621 7.991 13.952 2.405c7 4.041 11.465 17.446 11.465 17.446z"></path></svg>',this.groupName=""}renderDetail(){const e=[];return this.detail!==""&&e.push(this.detail),this.groupName!==""&&e.push(this.groupName),l`<small id="detail"
      >${e.join(" | ")}<slot name="detail"></slot
    ></small>`}};Hr.styles=[...R.styles],Xu([a({type:String,attribute:"group-name"})],Hr.prototype,"groupName",2),Hr=Xu([v("uui-ref-node-member")],Hr);var Ib=Object.defineProperty,Ab=Object.getOwnPropertyDescriptor,la=(e,t,i,o)=>{for(var r=o>1?void 0:o?Ab(t,i):t,s=e.length-1,n;s>=0;s--)(n=e[s])&&(r=(o?n(t,i,r):n(r))||r);return o&&r&&Ib(t,i,r),r};let er=class extends R{constructor(){super(...arguments),this.fallbackIcon='<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M161.08 106.29l-70.073 40.452 165.498 95.545 70.076-40.453L161.08 106.29zm259.851 41.077L255.435 51.815l-63.578 36.709 165.499 95.542 63.575-36.699zm-150.11 122.19V459.43l164.966-95.238V174.32l-164.966 95.237zM75.082 364.191l164.959 95.234V268.32L75.082 173.09v191.101z"></path></svg>',this.version="",this.author=""}renderDetail(){const e=[];return this.detail!==""&&e.push(this.detail),this.version!==""&&e.push(this.version),this.author!==""&&e.push(this.author),l`<small id="detail"
      >${e.join(" | ")}<slot name="detail"></slot
    ></small>`}};er.styles=[...R.styles],la([a({type:String})],er.prototype,"version",2),la([a({type:String})],er.prototype,"author",2),er=la([v("uui-ref-node-package")],er);var Ub=Object.defineProperty,zb=Object.getOwnPropertyDescriptor,Zu=(e,t,i,o)=>{for(var r=o>1?void 0:o?zb(t,i):t,s=e.length-1,n;s>=0;s--)(n=e[s])&&(r=(o?n(t,i,r):n(r))||r);return o&&r&&Ub(t,i,r),r};let jr=class extends R{constructor(){super(...arguments),this.fallbackIcon='<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M331.135 98.375c3.677 14.798 4.045 16.031 3.702 31.225-.138 5.855-3.5 32.936-2.586 41.242.751 6.851 2.46 7.395 5.162 13.041 4.705 9.824 3.13 23.376 1.325 33.282-.988 5.42-3.076 13.136-6.248 17.561-3.497 4.876-10.498 4.913-13.592 10.602-4.459 8.195-1.941 19.692-4.752 28.54-3.193 10.033-11.325 10.738-11.938 23.867 3.986.562 7.962 1.134 11.938 1.703 3.99 8.484 11.297 25.552 18.759 30.688 6.25 1.705 12.505 3.411 18.752 5.113 21.907 8.982 46.251 19.732 68.204 28.987 19.991 8.434 43.927 11.439 51.151 32.396 0 14.229 1.343 47.849.976 66.497H36.514c-.367-18.648.974-52.268.974-66.497 7.226-20.957 31.16-23.963 51.151-32.396 21.953-9.255 46.297-20.005 68.201-28.987 6.25-1.702 12.506-3.408 18.754-5.113 7.461-5.136 14.77-22.203 18.76-30.688l8.877-2.158c-2.017-11.206-8.954-12.078-11.845-20.01a91882.59 91882.59 0 00-3.408-35.806c.055.563-8.163-1.497-9.238-2.171-11.58-7.256-11.816-36.723-12.931-48.978-.508-5.603 7.283-10.193 5.118-20.465-12.69-60.138 5.486-88.282 34.229-97.614 19.95-8.083 57.198-23.074 91.941-1.703l8.621 7.991 13.952 2.405c7 4.041 11.465 17.446 11.465 17.446z"></path></svg>',this.groupName=""}renderDetail(){const e=[];return this.detail!==""&&e.push(this.detail),this.groupName!==""&&e.push(this.groupName),l`<small id="detail"
      >${e.join(" | ")}<slot name="detail"></slot
    ></small>`}};jr.styles=[...R.styles],Zu([a({type:String,attribute:"group-name"})],jr.prototype,"groupName",2),jr=Zu([v("uui-ref-node-user")],jr);var Mb=Object.defineProperty,Db=Object.getOwnPropertyDescriptor,Qu=(e,t,i,o)=>{for(var r=o>1?void 0:o?Db(t,i):t,s=e.length-1,n;s>=0;s--)(n=e[s])&&(r=(o?n(t,i,r):n(r))||r);return o&&r&&Mb(t,i,r),r};let Rr=class extends g{constructor(){super(...arguments),this.enforceScroll=!1}connectedCallback(){super.connectedCallback(),this.hasAttribute("tabindex")||this.setAttribute("tabindex","0")}render(){return l`<slot></slot>`}};Rr.styles=[b`
      :host {
        display: block;
        scrollbar-width: thin;
        scrollbar-color: var(--uui-color-disabled-contrast,#c4c4c4)
          var(--uui-color-surface,#fff);
        overflow-y: auto;
      }

      :host([enforce-scroll]) {
        overflow-y: scroll;
      }

      :host::-webkit-scrollbar {
        width: 6px;
        height: 6px; /* needed for horizontal scrollbar */
      }

      :host::-webkit-scrollbar-track {
        background: var(--uui-color-surface,#fff);
        border-radius: 3px;
      }
      :host::-webkit-scrollbar-thumb {
        background-color: var(--uui-color-disabled-contrast,#c4c4c4);
        border-radius: 3px;
      }
    `],Qu([a({type:Boolean,reflect:!0,attribute:"enforce-scroll"})],Rr.prototype,"enforceScroll",2),Rr=Qu([v("uui-scroll-container")],Rr);class ys extends A{constructor(t,i={}){super(t,{bubbles:!0,...i})}}ys.CHANGE="change";var Lb=Object.defineProperty,Tb=Object.getOwnPropertyDescriptor,Ue=(e,t,i,o)=>{for(var r=o>1?void 0:o?Tb(t,i):t,s=e.length-1,n;s>=0;s--)(n=e[s])&&(r=(o?n(t,i,r):n(r))||r);return o&&r&&Lb(t,i,r),r};let pe=class extends De(g,""){constructor(){super(),this.placeholder="",this.disabled=!1,this.readonly=!1,this.error=!1,this.options=[],this._groups=[],this.disabledGroups="",this._disabledGroups=[],this._values=[],this.addEventListener("mousedown",()=>{this.style.setProperty("--uui-show-focus-outline","0")}),this.addEventListener("blur",()=>{this.style.setProperty("--uui-show-focus-outline","")})}async focus(){await this.updateComplete,this._input.focus()}async blur(){await this.updateComplete,this._input.blur()}async click(){await this.updateComplete,this._input.click()}getFormElement(){return this._input}connectedCallback(){super.connectedCallback(),this.label||console.warn(this.tagName+" needs a `label`",this)}_createDisabledGroups(){this.disabledGroups.length!==0&&(this._disabledGroups=this.disabledGroups.split(","))}_extractGroups(){this.options.length!==0&&(this._groups=Array.from(new Set(this.options.filter(e=>e.group).map(e=>e.group))))}willUpdate(e){if(e.has("options")){this._extractGroups(),this._values=this.options.map(i=>i.value);const t=this.options.find(i=>i.selected);this.value=t?t.value:""}e.has("value")&&(this.value=this._values.includes(this.value)?this.value:""),e.has("disabledGroups")&&this._createDisabledGroups()}setValue(e){e.stopPropagation();const t=e.target;e.target&&(this.value=t.value),this.dispatchEvent(new ys(ys.CHANGE,{bubbles:!0,composed:!1}))}_renderOption(e,t,i,o){return l`<option
      value="${t}"
      ?selected=${i}
      ?disabled=${o}>
      ${e}
    </option>`}_renderGrouped(){return this._groups.length===0?E:l`
      ${this._groups.map(e=>l`<optgroup
            label=${e}
            ?disabled=${this._disabledGroups.some(t=>t.toLowerCase()===e.toLowerCase())}>
            ${this.options.map(t=>t.group===e?this._renderOption(t.name,t.value,t.selected,t.disabled):"")}
          </optgroup>`)}
    `}_getDisplayValue(){return this.options.find(e=>e.value===this.value)?.name||this.value}render(){return this.readonly?l`<span>${this._getDisplayValue()}</span>`:l` <select
      id="native"
      aria-label=${this.label}
      @change=${this.setValue}
      ?disabled=${this.disabled}
      .name=${this.name}
      .value=${this.value}>
      <option disabled selected value="" hidden>${this.placeholder}</option>
      ${this._renderGrouped()}
      ${this.options.filter(e=>!e.group).map(e=>this._renderOption(e.name,e.value,e.selected,e.disabled))}
    </select>`}};pe.styles=[b`
      :host {
        display: inline-block;
        position: relative;
        font-family: inherit;
      }

      #native {
        display: inline-block;
        font-family: inherit;
        font-size: var(--uui-select-font-size, inherit);
        height: var(--uui-select-height, var(--uui-size-11,33px));
        padding: var(--uui-select-padding-y, var(--uui-size-1,3px))
          var(--uui-select-padding-x, var(--uui-size-2,6px));
        color: var(--uui-select-text-color, var(--uui-color-text,#060606));
        box-sizing: border-box;
        border-radius: var(--uui-border-radius,3px);
        border: 1px solid
          var(--uui-select-border-color, var(--uui-color-border,#d8d7d9));
        transition: all 150ms ease;
        width: 100%;
        background-color: var(
          --uui-select-background-color,
          var(--uui-color-surface,#fff)
        );
      }

      #native:focus {
        outline: calc(2px * var(--uui-show-focus-outline, 1)) solid
          var(--uui-select-outline-color, var(--uui-color-focus,#3879ff));
      }

      #native[disabled] {
        cursor: not-allowed;
        background-color: var(
          --uui-select-disabled-background-color,
          var(--uui-color-disabled,#f3f3f5)
        );
      }

      #native:hover {
        border: 1px solid
          var(--uui-select-border-color-hover, var(--uui-color-border-emphasis,#a1a1a1));
      }

      option:checked {
        background: var(
          --uui-select-selected-option-background-color,
          var(--uui-color-selected,#3544b1)
        );
        color: var(
          --uui-select-selected-option-color,
          var(--uui-color-selected-contrast,#fff)
        );
      }

      #caret {
        position: absolute;
        right: 12px;
        top: 50%;
        transform: translateY(-50%);
      }

      :host([error]) #native {
        border: 1px solid var(--uui-color-invalid-standalone,rgb(191, 33, 78));
      }

      :host([error]) #native[disabled] {
        border: 1px solid var(--uui-color-invalid-standalone,rgb(191, 33, 78));
      }
    `],Ue([a({type:String})],pe.prototype,"label",2),Ue([a()],pe.prototype,"placeholder",2),Ue([a({type:Boolean,reflect:!0})],pe.prototype,"disabled",2),Ue([a({type:Boolean,reflect:!0})],pe.prototype,"readonly",2),Ue([a({type:Boolean,reflect:!0})],pe.prototype,"error",2),Ue([a({type:Array,attribute:!1})],pe.prototype,"options",2),Ue([_()],pe.prototype,"_groups",2),Ue([a()],pe.prototype,"disabledGroups",2),Ue([_()],pe.prototype,"_disabledGroups",2),Ue([O("#native")],pe.prototype,"_input",2),pe=Ue([v("uui-select")],pe);const Vb=b`
  input[type='range'] {
    left: 0;
    position: absolute;
    top: 0;
    height: 100%;
    width: 100%;
    z-index: 2;

    height: 100%;
    -webkit-appearance: none;
    margin: 0px;
    padding: 0px;
    border: 0 none;
    background: transparent;
    color: transparent;
    overflow: visible;
    border: none;
  }
  input[type='range']:focus {
    outline: none;
  }
  input[type='range']::-webkit-slider-runnable-track {
    width: 100%;
    height: 100%;
    -webkit-appearance: none;
    margin: 0px;
    padding: 0px;
    border: none;
    background: transparent;
    color: transparent;
    overflow: visible;
    order: none;
  }

  input[type='range']:focus::-webkit-slider-runnable-track {
    background: transparent;
    border: none;
  }

  input[type='range']::-moz-range-track {
    width: 100%;
    height: 100%;
    -moz-appearance: none;
    margin: 0px;
    padding: 0px;
    border: 0 none;
    background: transparent;
    color: transparent;
    overflow: visible;
  }

  input[type='range']::-ms-track {
    width: 100%;
    height: 100%;
    -webkit-appearance: none;
    margin: 0px;
    padding: 0px;
    border: 0 none;
    background: transparent;
    color: transparent;
    overflow: visible;
  }
  input[type='range']::-ms-fill-lower,
  input[type='range']::-ms-fill-upper {
    background: transparent;
    border: 0 none;
  }

  input[type='range']::-ms-tooltip {
    display: none;
  }

  input[type='range']::-moz-range-thumb {
    width: 18px;
    height: 18px;
    border-radius: 12px;
    border: 0 none;
    background: transparent;
    cursor: pointer;
  }

  input[type='range']::-webkit-slider-thumb {
    width: 18px;
    height: 18px;
    border-radius: 12px;
    border: 0 none;
    background: transparent;
    cursor: pointer;
    -webkit-appearance: none;
  }

  input[type='range']::-ms-thumb {
    width: 18px;
    height: 18px;
    border-radius: 12px;
    border: 0 none;
    background: transparent;
    cursor: pointer;
  }

  input[type='range']:focus::-ms-fill-lower {
    background: transparent;
  }
  input[type='range']:focus::-ms-fill-upper {
    background: transparent;
  }
`;class ni extends A{constructor(t,i={}){super(t,{bubbles:!0,...i})}}ni.INPUT="input",ni.CHANGE="change";var Nb=Object.defineProperty,Bb=Object.getOwnPropertyDescriptor,Ju=e=>{throw TypeError(e)},ne=(e,t,i,o)=>{for(var r=o>1?void 0:o?Bb(t,i):t,s=e.length-1,n;s>=0;s--)(n=e[s])&&(r=(o?n(t,i,r):n(r))||r);return o&&r&&Nb(t,i,r),r},ua=(e,t,i)=>t.has(e)||Ju("Cannot "+i),ec=(e,t,i)=>(ua(e,t,"read from private field"),i?i.call(e):t.get(e)),ca=(e,t,i)=>t.has(e)?Ju("Cannot add the same private member more than once"):t instanceof WeakSet?t.add(e):t.set(e,i),tc=(e,t,i,o)=>(ua(e,t,"write to private field"),t.set(e,i),i),Hb=(e,t,i)=>(ua(e,t,"access private method"),i),ws,xs,ha,ic;const Wr=12,rc=24,jb=(e,t,i)=>Array.from({length:(t-e)/i+1},(o,r)=>e+r*i),Rb=e=>{const t=e.toString().indexOf(".");return t>=0?e.toString().length-t-1:0};let K=class extends De(g,""){constructor(){super(),ca(this,ha),ca(this,ws,0),this.hideStepValues=!1,this.hideValueLabel=!1,this.min=0,this.max=100,ca(this,xs,1),this.disabled=!1,this.readonly=!1,this._stepWidth=0,this.onWindowResize=()=>{this._stepWidth=this._calculateStepWidth()},this._steps=[],this._sliderPosition="0%",this.addEventListener("mousedown",()=>{this.style.setProperty("--uui-show-focus-outline","0")}),this.addEventListener("blur",()=>{this.style.setProperty("--uui-show-focus-outline","")}),this.addEventListener("keydown",Hb(this,ha,ic))}get step(){return ec(this,xs)}set step(e){tc(this,xs,e),tc(this,ws,(e.toString().split(".")[1]||[]).length)}get value(){return super.value}set value(e){if(e instanceof File)return;const t=super.value;let i=e?parseFloat(e):0;i=Math.min(Math.max(i,this.min),this.max),this.step>0&&(i=Math.round(i/this.step)*this.step),super.value=i.toFixed(ec(this,ws)).toString(),this._calculateSliderPosition(),this.requestUpdate("value",t)}async focus(){await this.updateComplete,this._input.focus()}async blur(){await this.updateComplete,this._input.blur()}async click(){await this.updateComplete,this._input.click()}getFormElement(){return this._input}connectedCallback(){super.connectedCallback(),window.addEventListener("resize",this.onWindowResize),this.label||console.warn(this.tagName+" needs a `label`",this)}disconnectedCallback(){window.removeEventListener("resize",this.onWindowResize),super.disconnectedCallback()}firstUpdated(){this._calculateSliderPosition(),this._updateSteps()}updated(e){super.updated(e),(e.get("max")||e.get("min")||e.get("step"))&&(this.value=this.value,this._updateSteps())}_updateSteps(){this._steps=jb(this.min,this.max,this.step),this._stepWidth=this._calculateStepWidth()}_calculateStepWidth(){return(this._track.getBoundingClientRect().width-Wr*2)/(this._steps.length-1)}_calculateSliderPosition(){const e=(parseFloat(super.value||"0")-this.min)/(this.max-this.min);this._sliderPosition=`${Math.floor(e*1e5)/1e3}%`}_onInput(e){e.stopPropagation(),this.value=this._input.value,this.dispatchEvent(new ni(ni.INPUT))}_onChange(e){e.stopPropagation(),this.pristine=!1,this.dispatchEvent(new ni(ni.CHANGE))}renderTrackSteps(){return m`
  ${this._steps.map(e=>{if(this._stepWidth>=rc){const t=Math.round(Wr+this._stepWidth*this._steps.indexOf(e));return m`<circle class="track-step" cx="${t}" cy="50%" r="4.5" />`}return m``})}
`}renderStepValues(){return this.hideStepValues?E:l`<div id="step-values">
      ${this._steps.map(e=>l` <span
            ><span>
              ${this._steps.length<=20&&this._stepWidth>=rc?e.toFixed(Rb(this.step)):E}
            </span></span
          >`)}
    </div>`}render(){return l`
      <input
        id="input"
        type="range"
        min="${this.min}"
        max="${this.max}"
        .value="${this.value}"
        aria-label="${this.label}"
        step="${+this.step}"
        ?disabled=${this.disabled||this.readonly}
        ?readonly=${this.readonly}
        @input=${this._onInput}
        @change=${this._onChange} />
      <div id="track" aria-hidden="true">
        <svg height="100%" width="100%">
          <rect x="9" y="9" height="3" rx="2" />
          ${this.renderTrackSteps()}
        </svg>

        <div id="track-inner" aria-hidden="true">
          <div id="thumb" style=${Ye({left:this._sliderPosition})}>
            ${this.hideValueLabel?null:l`<div id="thumb-label">${this.value}</div>`}
          </div>
        </div>
      </div>
      ${this.renderStepValues()}
    `}};ws=new WeakMap,xs=new WeakMap,ha=new WeakSet,ic=function(e){e.key=="Enter"&&this.submit()},K.formAssociated=!0,K.styles=[bd,Vb,b`
      :host {
        display: inline-block;
        width: 100%;
        position: relative;
        min-height: 30px;
        user-select: none;
      }

      input {
        box-sizing: border-box;
        height: 18px;
      }

      #track {
        position: relative;
        height: 18px;
        width: 100%;
        display: flex;
      }

      #track svg {
        height: 21px;
        border-radius: 10px;
        background-color: var(--uui-color-surface,#fff);
      }
      #track svg rect {
        width: calc(100% - 18px);
        fill: var(--uui-color-border-standalone,#c2c2c2);
      }
      input:hover ~ #track svg rect {
        fill: var(--uui-color-border-emphasis,#a1a1a1);
      }

      input:focus ~ #track #thumb {
        outline: calc(2px * var(--uui-show-focus-outline, 1)) solid
          var(--uui-color-focus,#3879ff);
      }

      .track-step {
        fill: var(--uui-color-border,#d8d7d9);
      }

      input:hover ~ #track svg .track-step {
        fill: var(--uui-color-border-emphasis,#a1a1a1);
      }

      #track-inner {
        position: absolute;
        left: ${Wr}px; /* Match TRACK_MARGIN */
        right: ${Wr}px; /* Match TRACK_MARGIN */
      }

      #thumb {
        position: absolute;
        display: flex;
        align-items: center;
        justify-content: center;
        top: 2px;
        bottom: 0;
        left: 0;
        height: 17px;
        width: 17px;
        margin-left: -8px;
        margin-right: -8px;
        border-radius: 50%;
        box-sizing: border-box;

        background-color: var(--uui-color-surface,#fff);
        border: 2px solid var(--uui-color-selected,#3544b1);
      }
      :host([disabled]) #thumb {
        background-color: var(--uui-color-disabled,#f3f3f5);
        border-color: var(--uui-color-disabled-standalone,rgb(226, 226, 226));
      }

      #thumb:after {
        content: '';
        height: 9px;
        width: 9px;
        border-radius: 50%;
        background-color: var(--uui-color-selected,#3544b1);
      }

      :host([disabled]) #thumb:after {
        background-color: var(--uui-color-disabled,#f3f3f5);
      }

      #thumb-label {
        position: absolute;
        box-sizing: border-box;
        font-weight: 700;
        bottom: 15px;
        left: 50%;
        width: 40px;
        margin-left: -20px;
        text-align: center;
        opacity: 0;
        transition: 120ms opacity;
        color: var(--uui-color-selected,#3544b1);
      }

      input:focus ~ #track #thumb-label,
      input:hover ~ #track #thumb-label {
        opacity: 1;
      }

      #step-values {
        margin: 0 ${Wr}px; /* Match TRACK_MARGIN */
        margin-top: 6px;
        display: flex;
        align-items: flex-end;
        box-sizing: border-box;
      }

      #step-values > span {
        flex-basis: 0;
        flex-grow: 1;
        color: var(--uui-color-disabled-contrast,#c4c4c4);
      }

      #step-values > span > span {
        transform: translateX(-50%);
        display: inline-block;
        text-align: center;
        font-size: var(--uui-type-small-size,12px);
      }

      #step-values > span:last-child {
        width: 0;
        flex-grow: 0;
      }

      :host(:not([pristine]):invalid) #thumb {
        border-color: var(--uui-color-invalid-standalone,rgb(191, 33, 78));
      }
      :host(:not([pristine]):invalid) #thumb:after {
        background-color: var(--uui-color-invalid,#d42054);
      }

      // readonly
      :host([readonly]) #thumb {
        background-color: var(--uui-color-disabled,#f3f3f5);
        border-color: var(--uui-color-disabled-standalone,rgb(226, 226, 226));
      }

      :host([readonly]) #thumb-label {
        opacity: 1;
      }
    `],ne([a({type:Boolean,attribute:"hide-step-values"})],K.prototype,"hideStepValues",2),ne([a({type:Boolean,attribute:"hide-value-label"})],K.prototype,"hideValueLabel",2),ne([a({type:Number})],K.prototype,"min",2),ne([a({type:Number})],K.prototype,"max",2),ne([a({type:Number})],K.prototype,"step",1),ne([a({type:String})],K.prototype,"value",1),ne([a({type:Boolean,reflect:!0})],K.prototype,"disabled",2),ne([a({type:Boolean,reflect:!0})],K.prototype,"readonly",2),ne([a({type:String})],K.prototype,"label",2),ne([O("#input")],K.prototype,"_input",2),ne([O("#track")],K.prototype,"_track",2),ne([_()],K.prototype,"_stepWidth",2),ne([_()],K.prototype,"_steps",2),ne([_()],K.prototype,"_sliderPosition",2),K=ne([v("uui-slider")],K);var Wb=Object.defineProperty,Fb=Object.getOwnPropertyDescriptor,oc=(e,t,i,o)=>{for(var r=o>1?void 0:o?Fb(t,i):t,s=e.length-1,n;s>=0;s--)(n=e[s])&&(r=(o?n(t,i,r):n(r))||r);return o&&r&&Wb(t,i,r),r};let Fr=class extends g{constructor(){super(...arguments),this.open=!1}render(){return l`<svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      stroke-width="3"
      stroke-linecap="round"
      stroke-linejoin="round">
      <path d="m4 9 8 8 8-8"></path>
    </svg>`}};Fr.styles=[b`
      :host {
        display: inline-flex;
        width: 12px;
        vertical-align: middle;
      }

      svg {
        transform: rotate(-90deg);
        transform-origin: 50% 50%;
        transition: transform 100ms cubic-bezier(0.1, 0, 0.9, 1);
        width: 100%;
        height: 100%;
      }

      :host([open]) svg {
        transform: rotate(0deg);
      }
    `],oc([a({type:Boolean,reflect:!0})],Fr.prototype,"open",2),Fr=oc([v("uui-symbol-expand")],Fr);var Gb=Object.defineProperty,qb=Object.getOwnPropertyDescriptor,da=(e,t,i,o)=>{for(var r=o>1?void 0:o?qb(t,i):t,s=e.length-1,n;s>=0;s--)(n=e[s])&&(r=(o?n(t,i,r):n(r))||r);return o&&r&&Gb(t,i,r),r};let tr=class extends g{constructor(){super(...arguments),this.src="",this.alt=""}connectedCallback(){super.connectedCallback(),x(this,"uui-icon")}render(){return this.src?l`<img src=${this.src} alt=${this.alt} />`:l`<uui-icon
          name="picture"
          .fallback=${Pd.strings[0]}></uui-icon>`}};tr.styles=[b`
      :host {
        display: block;
        width: 100%;
        height: 100%;
      }

      img {
        object-fit: contain;
        height: 100%;
        width: 100%;
      }

      uui-icon {
        width: 100%;
        height: 100%;
        max-width: 100%;
        display: flex;
        max-height: 100%;
        justify-content: center;
        color: var(--uui-color-surface,#fff);
        background: var(--uui-color-surface-alt,#f3f3f5);
      }
    `],da([a({type:String})],tr.prototype,"src",2),da([a({type:String})],tr.prototype,"alt",2),tr=da([v("uui-symbol-file-thumbnail")],tr);var Kb=Object.defineProperty,Yb=Object.getOwnPropertyDescriptor,sc=(e,t,i,o)=>{for(var r=o>1?void 0:o?Yb(t,i):t,s=e.length-1,n;s>=0;s--)(n=e[s])&&(r=(o?n(t,i,r):n(r))||r);return o&&r&&Kb(t,i,r),r};let Gr=class extends g{constructor(){super(...arguments),this.type=""}render(){return l`
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        stroke-width="0.6"
        stroke-linecap="round"
        stroke-linejoin="round"
        id="icon">
        <path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z" />
        <path d="M14 2v4a2 2 0 0 0 2 2h4" />
      </svg>

      ${this.type?l`<small id="file-type" class="uui-small"
            >${this.type.toUpperCase()}</small
          >`:""}
    `}};Gr.styles=[hi,b`
      :host {
        position: relative;
        display: block;
        box-sizing: border-box;
      }

      #file-type {
        position: absolute;
        bottom: 20%;
        left: 12%;
        margin-left: calc(var(--uui-size-3,9px) * -1);
        padding: 0px var(--uui-size-3,9px);
        font-weight: 700;
        background-color: var(--uui-color-surface-alt,#f3f3f5);
        max-width: 100%;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
        border-radius: var(--uui-border-radius,3px);
      }

      #icon {
        width: 100%;
        color: var(--uui-color-border-standalone,#c2c2c2);
      }
    `],sc([a({type:String})],Gr.prototype,"type",2),Gr=sc([v("uui-symbol-file")],Gr);var Xb=Object.getOwnPropertyDescriptor,Zb=(e,t,i,o)=>{for(var r=o>1?void 0:o?Xb(t,i):t,s=e.length-1,n;s>=0;s--)(n=e[s])&&(r=n(r)||r);return r};let $s=class extends g{render(){return l`<svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      stroke-width="0.6"
      stroke-linecap="round"
      stroke-linejoin="round"
      id="icon">
      <path
        d="M20 20a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.9a2 2 0 0 1-1.69-.9L9.6 3.9A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2Z" />
    </svg>`}};$s.styles=[b`
      :host {
        display: block;
        position: relative;
        box-sizing: border-box;
      }

      #icon {
        width: 100%;
        color: var(--uui-color-border-standalone,#c2c2c2);
      }
    `],$s=Zb([v("uui-symbol-folder")],$s);var Qb=Object.defineProperty,Jb=Object.getOwnPropertyDescriptor,nc=(e,t,i,o)=>{for(var r=o>1?void 0:o?Jb(t,i):t,s=e.length-1,n;s>=0;s--)(n=e[s])&&(r=(o?n(t,i,r):n(r))||r);return o&&r&&Qb(t,i,r),r};let qr=class extends g{constructor(){super(...arguments),this.open=!1}render(){return m`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
      ${this.open===!0?m`<path d="M457.915 242.222H269.053l-.004-78.416c0-33.277-12.63-63.824-33.538-86.175-20.82-22.357-50.579-36.756-83.391-36.731-32.814-.024-62.57 14.375-83.391 36.731-20.915 22.351-33.541 52.897-33.547 86.175v103.859H96.19v-13.476l-35.656-35.656H96.19v-54.728c0-17.765 6.717-33.406 17.084-44.502 10.463-11.09 23.927-17.37 38.845-17.394 14.916.024 28.375 6.304 38.837 17.394 10.375 11.096 17.092 26.738 17.087 44.502v78.416h-26.189c-9.159 0-16.582 7.426-16.582 16.585v194.53c0 9.158 7.423 16.583 16.582 16.583h276.06c9.164 0 16.587-7.425 16.587-16.583v-194.53c.001-9.159-7.422-16.584-16.586-16.584z"></path>`:m`<path d="M404.84 246.573h-22.084l-.002-73.603c0-36.675-13.921-70.311-36.917-94.892-22.91-24.584-55.547-40.367-91.539-40.336-36.003-.031-68.643 15.752-91.55 40.336-23.001 24.582-36.918 58.217-36.925 94.892v73.603h-22.082c-9.16 0-16.585 7.421-16.585 16.583v194.531c0 9.158 7.425 16.585 16.585 16.585H404.84c9.162 0 16.586-7.427 16.586-16.585V263.156c0-9.161-7.424-16.583-16.586-16.583zm-218.013-73.602c0-21.167 8.012-39.893 20.468-53.219 12.552-13.316 28.896-20.982 47.003-21.007 18.095.025 34.438 7.685 46.987 21.007 12.455 13.326 20.467 32.052 20.467 53.219v73.603H186.827v-73.603z"></path>`}
    </svg>`}};qr.styles=[b`
      :host {
        display: inline-block;
        vertical-align: middle;
        width: 1em;
      }

      svg {
        fill: currentColor;
      }
    `],nc([a({type:Boolean,reflect:!0})],qr.prototype,"open",2),qr=nc([v("uui-symbol-lock")],qr);var eg=Object.getOwnPropertyDescriptor,tg=(e,t,i,o)=>{for(var r=o>1?void 0:o?eg(t,i):t,s=e.length-1,n;s>=0;s--)(n=e[s])&&(r=n(r)||r);return r};let ks=class extends g{render(){return m`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">
      <circle cx="17" cy="50" r="9"></circle>
      <circle cx="50" cy="50" r="9"></circle>
      <circle cx="83" cy="50" r="9"></circle>
    </svg>`}};ks.styles=[b`
      :host {
        display: inline-block;
        vertical-align: bottom;
        width: 1.15em;
        height: 1.15em;
      }

      svg {
        fill: currentColor;
      }
    `],ks=tg([v("uui-symbol-more")],ks);var ig=Object.defineProperty,rg=Object.getOwnPropertyDescriptor,ac=(e,t,i,o)=>{for(var r=o>1?void 0:o?rg(t,i):t,s=e.length-1,n;s>=0;s--)(n=e[s])&&(r=(o?n(t,i,r):n(r))||r);return o&&r&&ig(t,i,r),r};let Kr=class extends br(g){constructor(){super(...arguments),this.descending=!1}render(){return l` <svg
        id="up"
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        stroke-width="3"
        stroke-linecap="round"
        stroke-linejoin="round">
        <path d="m4 9 8 8 8-8"></path>
      </svg>
      <svg
        id="down"
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        stroke-width="3"
        stroke-linecap="round"
        stroke-linejoin="round">
        <path d="m4 9 8 8 8-8"></path>
      </svg>`}};Kr.styles=[b`
      :host {
        position: relative;
        display: inline-block;
        width: 0.9em;
        height: 1em;
        //vertical-align: middle;
        pointer-events: none;
      }

      svg {
        position: absolute;
        left: 0;
        top: 50%;
        width: 0.9em;
        transform-origin: 50% 50%;
        transition:
          transform 120ms ease-in-out,
          opacity 120ms,
          margin-top 240ms;
        opacity: 0;
        margin-top: -8em;
      }

      #up {
        transform: rotate(180deg);
        margin-top: -1.05em;
      }
      #down {
        margin-top: -0.55em;
      }
      :host([active]) #up {
        margin-top: calc(-0.8em - (0.25em * var(--uui-symbol-sort-hover, 0)));
      }
      :host([active]) #down {
        margin-top: calc(-0.8em + (0.25em * var(--uui-symbol-sort-hover, 0)));
      }

      :host(:hover) {
        --uui-symbol-sort-hover: 1;
      }
      :host(:not([active])) #up,
      :host(:not([active])) #down {
        opacity: calc(0.25 * var(--uui-symbol-sort-hover, 0));
      }

      :host([active]:not([descending])) #down {
        opacity: 1;
      }
      :host([active]:not([descending])) #up {
        opacity: calc(0.25 * var(--uui-symbol-sort-hover, 0));
      }

      :host([active][descending]) #up {
        opacity: 1;
      }
      :host([active][descending]) #down {
        opacity: calc(0.25 * var(--uui-symbol-sort-hover, 0));
      }
    `],ac([a({type:Boolean,reflect:!0})],Kr.prototype,"descending",2),Kr=ac([v("uui-symbol-sort")],Kr);var og=Object.getOwnPropertyDescriptor,sg=(e,t,i,o)=>{for(var r=o>1?void 0:o?og(t,i):t,s=e.length-1,n;s>=0;s--)(n=e[s])&&(r=n(r)||r);return r};let Cs=class extends g{connectedCallback(){super.connectedCallback(),this.setAttribute("role","table")}render(){return l`<slot></slot>`}};Cs.styles=[b`
      :host {
        display: table;
        width: 100%;
        border-radius: var(--uui-border-radius,3px);
        background-color: var(--uui-color-surface,#fff);
        cursor: default;
      }
    `],Cs=sg([v("uui-table")],Cs);var ng=Object.defineProperty,ag=Object.getOwnPropertyDescriptor,Es=(e,t,i,o)=>{for(var r=o>1?void 0:o?ag(t,i):t,s=e.length-1,n;s>=0;s--)(n=e[s])&&(r=(o?n(t,i,r):n(r))||r);return o&&r&&ng(t,i,r),r};let lt=class extends g{constructor(){super(...arguments),this.disableChildInteraction=!1,this.noPadding=!1,this.clipText=!1,this._observer=new ResizeObserver(()=>{this._detectOverflow()})}_detectOverflow(){this.scrollWidth>this.clientWidth?this.setAttribute("title",this.innerText):this.removeAttribute("title")}connectedCallback(){super.connectedCallback(),this.setAttribute("role","cell")}disconnectedCallback(){super.disconnectedCallback(),this._observer.disconnect()}updated(e){super.updated(e),e.has("clipText")&&(this.clipText?(this._detectOverflow(),this._observer.observe(this)):this._observer.disconnect())}render(){return l` <slot @slotchange=${this._detectOverflow}></slot>`}};lt.styles=[b`
      :host {
        position: relative;
        display: table-cell;
        height: var(--uui-table-cell-height, var(--uui-size-12,36px));
        padding: var(
          --uui-table-cell-padding,
          var(--uui-size-3,9px) var(--uui-size-5,15px)
        );
        border-top: 1px solid var(--uui-color-border,#d8d7d9);
        vertical-align: middle;
      }

      :host([clip-text]) {
        max-width: 0;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
        box-sizing: border-box;
      }

      :host([disable-child-interaction]) ::slotted(*) {
        pointer-events: none;
      }

      :host([disable-child-interaction])::after {
        content: '';
        position: absolute;
        inset: 0;
      }

      :host([no-padding]) {
        padding: 0;
      }
    `],Es([a({type:Boolean,reflect:!0,attribute:"disable-child-interaction"})],lt.prototype,"disableChildInteraction",2),Es([a({type:Boolean,reflect:!0,attribute:"no-padding"})],lt.prototype,"noPadding",2),Es([a({type:Boolean,reflect:!0,attribute:"clip-text"})],lt.prototype,"clipText",2),lt=Es([v("uui-table-cell")],lt);var lg=Object.getOwnPropertyDescriptor,ug=(e,t,i,o)=>{for(var r=o>1?void 0:o?lg(t,i):t,s=e.length-1,n;s>=0;s--)(n=e[s])&&(r=n(r)||r);return r};let Ps=class extends g{};Ps.styles=[b`
      :host {
        display: table-column;
      }
    `],Ps=ug([v("uui-table-column")],Ps);var cg=Object.getOwnPropertyDescriptor,hg=(e,t,i,o)=>{for(var r=o>1?void 0:o?cg(t,i):t,s=e.length-1,n;s>=0;s--)(n=e[s])&&(r=n(r)||r);return r};let Ss=class extends lt{connectedCallback(){super.connectedCallback(),this.setAttribute("role","columnheader")}};Ss.styles=[...lt.styles,b`
      :host {
        border-top: none;
      }
    `],Ss=hg([v("uui-table-head-cell")],Ss);var dg=Object.getOwnPropertyDescriptor,pg=(e,t,i,o)=>{for(var r=o>1?void 0:o?dg(t,i):t,s=e.length-1,n;s>=0;s--)(n=e[s])&&(r=n(r)||r);return r};let Os=class extends g{connectedCallback(){super.connectedCallback(),this.setAttribute("role","row")}render(){return l`<slot></slot>`}};Os.styles=[b`
      :host {
        display: table-header-group;
        font-weight: bold;
      }
    `],Os=pg([v("uui-table-head")],Os);var vg=Object.defineProperty,fg=Object.getOwnPropertyDescriptor,lc=(e,t,i,o)=>{for(var r=o>1?void 0:o?fg(t,i):t,s=e.length-1,n;s>=0;s--)(n=e[s])&&(r=(o?n(t,i,r):n(r))||r);return o&&r&&vg(t,i,r),r};let Yr=class extends _o(fi(g)){constructor(){super();let e=!1;this.addEventListener("blur",()=>{e===!1&&this.style.setProperty("--uui-show-focus-outline","1"),e=!1}),this.addEventListener("mousedown",()=>{this.style.setProperty("--uui-show-focus-outline","0"),e=!0}),this.addEventListener("mouseup",()=>{e=!1})}connectedCallback(){super.connectedCallback(),this.setAttribute("role","row")}updated(e){e.has("selectOnly")&&this.updateChildSelectOnly()}updateChildSelectOnly(){this.slotCellNodes&&this.slotCellNodes.forEach(e=>{e.disableChildInteraction!==void 0&&(e.disableChildInteraction=this.selectOnly)})}render(){return l` <slot @slotchanged=${this.updateChildSelectOnly}></slot> `}};Yr.styles=[b`
      :host {
        display: table-row;
        position: relative;
        outline-offset: -3px;
      }

      :host([selectable]) {
        cursor: pointer;
      }

      :host(:focus) {
        outline: calc(2px * var(--uui-show-focus-outline, 1)) solid
          var(--uui-color-focus,#3879ff);
      }
      :host([selected]) {
        outline: 2px solid
          var(--uui-table-row-color-selected, var(--uui-color-selected,#3544b1));
      }
      :host([selected]:focus) {
        outline-color: var(--uui-color-focus,#3879ff);
      }
    `],lc([bt({flatten:!0,selector:"uui-table-cell, [uui-table-cell], [role=cell]"})],Yr.prototype,"slotCellNodes",2),Yr=lc([v("uui-table-row")],Yr);var bg=Object.defineProperty,gg=Object.getOwnPropertyDescriptor,ir=(e,t,i,o)=>{for(var r=o>1?void 0:o?gg(t,i):t,s=e.length-1,n;s>=0;s--)(n=e[s])&&(r=(o?n(t,i,r):n(r))||r);return o&&r&&bg(t,i,r),r};let ut=class extends br(Me("",g)){constructor(){super(),this.disabled=!1,this.orientation="horizontal",this.addEventListener("click",this.onHostClick)}onHostClick(e){this.disabled&&(e.preventDefault(),e.stopImmediatePropagation())}render(){return this.href?l`
          <a
            id="button"
            href=${w(this.disabled?void 0:this.href)}
            target=${w(this.target||void 0)}
            rel=${w(this.rel||w(this.target==="_blank"?"noopener noreferrer":void 0))}
            role="tab">
            <slot name="icon"></slot>
            ${this.renderLabel()}
            <slot name="extra"></slot>
          </a>
        `:l`
          <button
            type="button"
            id="button"
            ?disabled=${this.disabled}
            role="tab">
            <slot name="icon"></slot>
            ${this.renderLabel()}
            <slot name="extra"></slot>
          </button>
        `}};ut.styles=[b`
      :host {
        color: var(--uui-tab-text, var(--uui-color-interactive,#1b264f));
        font-family: inherit;
        width: fit-content;
      }

      #button {
        position: relative;
        box-sizing: border-box;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        width: 100%;
        height: 100%;
        min-height: var(--uui-size-12,36px);
        min-width: 70px;
        padding: var(--uui-size-3,9px)
          var(--uui-tab-padding-horizontal, var(--uui-size-5,15px));
        border: none;
        font-size: inherit;
        background: none;
        color: inherit;
        cursor: pointer;
        font-family: inherit;

        /* for anchor tag: */
        text-decoration: none;
        line-height: normal;
      }

      :host([orientation='vertical']) #button {
        min-height: var(--uui-size-14,42px);
        padding: var(--uui-size-2,6px)
          var(--uui-tab-padding-horizontal, var(--uui-size-5,15px));
      }

      :host(:not([disabled])) #button:hover {
        color: var(--uui-tab-text-hover, var(--uui-color-default-emphasis,#3544b1));
      }

      :host(:not([disabled])) #button:active {
        box-shadow:
          inset 0 2px 4px rgba(0, 0, 0, 0.15),
          0 1px 2px rgba(0, 0, 0, 0.05);
      }

      :host([active]) {
        color: var(--uui-tab-text-active, unset);
      }

      :host([disabled]) #button {
        color: var(--uui-color-disabled-contrast,#c4c4c4);
        cursor: default;
      }

      #button::before {
        content: '';
        position: absolute;
        background-color: var(--uui-color-current,#f5c1bc);
        opacity: 0;
      }
      :host([active]) #button::before {
        opacity: 1;
      }

      /* HORIZONTAL */
      :host([orientation='horizontal']) #button::before {
        left: auto;
        right: auto;
        border-radius: var(--uui-border-radius,3px) var(--uui-border-radius,3px) 0 0;
        height: 0px;
        width: calc(100% - 14px);
        bottom: 0;
        transition:
          opacity linear 120ms,
          height ease-in-out 120ms;
      }
      :host([active][orientation='horizontal']) #button::before {
        height: 4px;
      }

      /* VERTICAL */
      :host([orientation='vertical']) #button::before {
        top: auto;
        bottom: auto;
        border-radius: 0 var(--uui-border-radius,3px) var(--uui-border-radius,3px) 0;
        height: calc(100% - 12px);
        width: 0px;
        left: 0;
        transition:
          opacity linear 120ms,
          width ease-in-out 120ms;
      }
      :host([active][orientation='vertical']) #button::before {
        width: 4px;
      }

      #button:hover::before {
        background-color: var(--uui-color-current-emphasis,rgb(248, 214, 211));
      }
      :host([disabled]) #button::before {
        background-color: var(--uui-color-disabled-standalone,rgb(226, 226, 226));
      }

      slot[name='icon']::slotted(*) {
        font-size: 20px;
        margin-bottom: var(--uui-size-2,6px);
      }

      slot.label {
        /* TODO: Find a better selector */
        text-align: center;
        display: flex;
        width: 100%;
        flex-direction: column;
      }

      :host([orientation='vertical']) slot.label {
        text-align: left;
      }
    `],ir([a({type:Boolean,reflect:!0})],ut.prototype,"disabled",2),ir([a({type:String})],ut.prototype,"href",2),ir([a({type:String})],ut.prototype,"target",2),ir([a({type:String})],ut.prototype,"rel",2),ir([a({type:String,reflect:!0})],ut.prototype,"orientation",2),ut=ir([v("uui-tab")],ut);var mg=Object.defineProperty,_g=Object.getOwnPropertyDescriptor,uc=e=>{throw TypeError(e)},rr=(e,t,i,o)=>{for(var r=o>1?void 0:o?_g(t,i):t,s=e.length-1,n;s>=0;s--)(n=e[s])&&(r=(o?n(t,i,r):n(r))||r);return o&&r&&mg(t,i,r),r},pa=(e,t,i)=>t.has(e)||uc("Cannot "+i),S=(e,t,i)=>(pa(e,t,"read from private field"),i?i.call(e):t.get(e)),Fe=(e,t,i)=>t.has(e)?uc("Cannot add the same private member more than once"):t instanceof WeakSet?t.add(e):t.set(e,i),Xr=(e,t,i,o)=>(pa(e,t,"write to private field"),t.set(e,i),i),ye=(e,t,i)=>(pa(e,t,"access private method"),i),Is,Ge,ct,or,sr,As,Zr,Qr,ae,cc,hc,va,dc,nr,Us,pc,fa,ba;let ht=class extends g{constructor(){super(...arguments),Fe(this,ae),Fe(this,Is,0),this.dropdownContentDirection="vertical",Fe(this,Ge,[]),Fe(this,ct,[]),Fe(this,or,new Map),Fe(this,sr,[]),Fe(this,As,new ResizeObserver(ye(this,ae,hc).bind(this))),Fe(this,Zr,[]),Fe(this,Qr,!1),Fe(this,nr,e=>{const t=e.currentTarget;if(ye(this,ae,ba).call(this,t)){t.active=!0;const i=S(this,or).get(t);i&&(i.active=!0),[...S(this,Ge),...S(this,ct)].filter(s=>s!==t&&s!==i).forEach(s=>{ye(this,ae,ba).call(this,s)&&(s.active=!1)}),S(this,ct).some(s=>s.active&&s!==i)?this._moreButtonElement.classList.add("active-inside"):this._moreButtonElement.classList.remove("active-inside")}})}connectedCallback(){super.connectedCallback(),ye(this,ae,cc).call(this)}disconnectedCallback(){super.disconnectedCallback(),S(this,As).unobserve(this),ye(this,ae,va).call(this)}render(){return l`
      <div id="main">
        <div id="grid" role="tablist">
          <slot @slotchange=${ye(this,ae,dc)}></slot>
        </div>
        <uui-button
          popovertarget="popover-container"
          style="display: none"
          id="more-button"
          label="More"
          compact>
          <uui-symbol-more></uui-symbol-more>
        </uui-button>
      </div>
      <uui-popover-container
        id="popover-container"
        popover
        placement="bottom-end">
        <div id="hidden-tabs-container" role="tablist">
          ${Pn(S(this,ct),e=>l`${e}`)}
        </div>
      </uui-popover-container>
    `}};Is=new WeakMap,Ge=new WeakMap,ct=new WeakMap,or=new WeakMap,sr=new WeakMap,As=new WeakMap,Zr=new WeakMap,Qr=new WeakMap,ae=new WeakSet,cc=async function(){x(this,"uui-button"),x(this,"uui-popover-container"),x(this,"uui-symbol-more"),await this.updateComplete,S(this,As).observe(this._mainElement)},hc=function(e){const t=Number.parseFloat(this.style.getPropertyValue("--uui-tab-group-gap"));(Number.isNaN(t)?0:t)!==S(this,Is)?ye(this,ae,Us).call(this):ye(this,ae,fa).call(this,e[0].contentBoxSize[0].inlineSize)},va=function(){S(this,Ge).forEach(e=>{e.removeEventListener("click",S(this,nr)),S(this,Zr).forEach(t=>t.disconnect())}),S(this,Zr).length=0,S(this,sr).length=0},dc=function(){ye(this,ae,va).call(this),ye(this,ae,pc).call(this),S(this,Ge).forEach(e=>{e.addEventListener("click",S(this,nr));const t=new ResizeObserver(ye(this,ae,Us).bind(this));t.observe(e),S(this,Zr).push(t)})},nr=new WeakMap,Us=async function(){if(S(this,Qr))return;Xr(this,Qr,!0),requestAnimationFrame(()=>{Xr(this,Qr,!1)}),await this.updateComplete;const e=Number.parseFloat(this.style.getPropertyValue("--uui-tab-group-gap")),t=Number.isNaN(e)?0:e;Xr(this,Is,t);let i=0;for(let r=0;r<S(this,Ge).length;r++)S(this,Ge)[r].style.display="",i+=S(this,Ge)[r].offsetWidth,S(this,sr)[r]=i,i+=t;const o=2;this._mainElement.style.width=i-t+o+"px",ye(this,ae,fa).call(this,this._mainElement.offsetWidth)},pc=function(){Xr(this,Ge,this._slottedNodes?this._slottedNodes:[]),ye(this,ae,Us).call(this)},fa=function(e){const t=this._moreButtonElement.offsetWidth,i=e-(t||0);S(this,ct).forEach(s=>{s.removeEventListener("click",S(this,nr))}),Xr(this,ct,[]),S(this,or).clear();let o=!1;const r=S(this,sr).length;for(let s=0;s<r;s++){const n=S(this,sr)[s],u=S(this,Ge)[s];if(n<=(s===r-1?e:i))u.style.display="";else{const c=u.cloneNode(!0);c.addEventListener("click",S(this,nr)),c.classList.add("hidden-tab"),c.style.display="",c.orientation=this.dropdownContentDirection,S(this,or).set(c,u),S(this,or).set(u,c),S(this,ct).push(c),u.style.display="none",u.active&&(o=!0)}}S(this,ct).length===0?(this._moreButtonElement.style.display="none",this._popoverContainerElement.hidePopover()):this._moreButtonElement.style.display="",o?this._moreButtonElement.classList.add("active-inside"):this._moreButtonElement.classList.remove("active-inside"),this.requestUpdate()},ba=function(e){return typeof e=="object"&&"active"in e&&typeof e.active=="boolean"},ht.styles=[b`
      :host {
        min-width: 0;
        display: flex;
        height: 100%;
      }

      #main {
        display: flex;
        justify-content: space-between;
        overflow: hidden;
      }

      #grid {
        width: 1fr;
        display: flex;
        height: 100%;
        min-height: 48px;
        overflow: hidden;
        text-wrap: nowrap;
        color: var(--uui-tab-text);
        gap: var(--uui-tab-group-gap, 0);
      }

      #popover-container {
        --uui-tab-text: var(--uui-tab-group-dropdown-tab-text, unset);
        --uui-tab-text-hover: var(
          --uui-tab-group-dropdown-tab-text-hover,
          unset
        );
        --uui-tab-text-active: var(
          --uui-tab-group-dropdown-tab-text-active,
          unset
        );
      }

      ::slotted(*:not(:last-of-type)) {
        border-right: 1px solid var(--uui-tab-divider, none);
      }

      .hidden-tab {
        width: 100%;
      }

      #hidden-tabs-container {
        width: fit-content;
        display: flex;
        flex-direction: column;
        background-color: var(
          --uui-tab-group-dropdown-background,
          var(--uui-color-surface,#fff)
        );
        border-radius: var(--uui-border-radius,3px);
        box-shadow: var(--uui-shadow-depth-3,0 10px 20px rgba(0,0,0,0.19) , 0 6px 6px rgba(0,0,0,0.23));
        overflow: hidden;
      }
      :host([dropdown-direction='horizontal']) #hidden-tabs-container {
        flex-direction: row;
      }

      #more-button {
        position: relative;

        --uui-button-contrast: var(--uui-tab-text);
        --uui-button-contrast-hover: var(--uui-tab-text-hover);
        --uui-button-background-color: transparent;
        --uui-button-background-color-hover: transparent;
      }
      #more-button::before {
        content: '';
        position: absolute;
        bottom: 0;
        width: 100%;
        background-color: var(--uui-color-current,#f5c1bc);
        height: 0px;
        border-radius: 3px 3px 0 0;
        opacity: 0;
        transition:
          opacity ease-in 120ms,
          height ease-in 120ms;
      }
      #more-button.active-inside::before {
        opacity: 1;
        height: 4px;
        transition:
          opacity 120ms,
          height ease-out 120ms;
      }
    `],rr([O("#more-button")],ht.prototype,"_moreButtonElement",2),rr([O("#popover-container")],ht.prototype,"_popoverContainerElement",2),rr([O("#main")],ht.prototype,"_mainElement",2),rr([bt({flatten:!0,selector:"uui-tab, [uui-tab], [role=tab]"})],ht.prototype,"_slottedNodes",2),rr([a({type:String,reflect:!0,attribute:"dropdown-content-direction"})],ht.prototype,"dropdownContentDirection",2),ht=rr([v("uui-tab-group")],ht);class yg extends A{}class wg extends A{}var xg=Object.defineProperty,$g=Object.getOwnPropertyDescriptor,ga=(e,t,i,o)=>{for(var r=o>1?void 0:o?$g(t,i):t,s=e.length-1,n;s>=0;s--)(n=e[s])&&(r=(o?n(t,i,r):n(r))||r);return o&&r&&xg(t,i,r),r};let ar=class extends g{constructor(){super(...arguments),this.color="default",this.look="primary"}render(){return l`<slot></slot>`}};ar.styles=[b`
      :host {
        display: inline-block;
        font-size: var(--uui-tag-font-size, var(--uui-type-small-size,12px));
        font-weight: 700;
        line-height: 1;
        padding: var(
          --uui-tag-padding,
          var(--uui-size-space-1,3px) calc(var(--uui-size-space-1,3px) + 0.5em)
        );
        border-radius: 100px;
        user-select: none;
        border-radius: var(--uui-tag-border-radius, var(--uui-size-4,12px));
        border: 1px solid var(--uui-tag-border-color, transparent);
      }

      slot {
        display: block;
        align-content: center;
        margin: 2px;
      }

      :host {
        --color: var(--uui-color-default,#1b264f);
        --color-standalone: var(--uui-color-default-standalone,rgb(28, 35, 59));
        --color-contrast: var(--uui-color-default-contrast,#fff);
      }
      :host([color='positive']) {
        --color: var(--uui-color-positive,#0b8152);
        --color-standalone: var(--uui-color-positive-standalone,rgb(10, 115, 73));
        --color-contrast: var(--uui-color-positive-contrast,#fff);
      }
      :host([color='warning']) {
        --color: var(--uui-color-warning,#fbd142);
        --color-standalone: var(--uui-color-warning-standalone,#a17700);
        --color-contrast: var(--uui-color-warning-contrast,#000);
      }
      :host([color='danger']) {
        --color: var(--uui-color-danger,#d42054);
        --color-standalone: var(--uui-color-danger-standalone,rgb(191, 33, 78));
        --color-contrast: var(--uui-color-danger-contrast,white);
      }
      :host([color='invalid']) {
        --color: var(--uui-color-invalid,#d42054);
        --color-standalone: var(--uui-color-invalid-standalone,rgb(191, 33, 78));
        --color-contrast: var(--uui-color-invalid-contrast,white);
      }

      :host {
        background-color: var(--uui-color-surface,#fff);
        color: var(--color-standalone);
        border-color: transparent;
      }
      :host([look='primary']) {
        background-color: var(--color);
        color: var(--color-contrast);
        border-color: transparent;
      }
      :host([look='secondary']) {
        background-color: var(--uui-color-surface-alt,#f3f3f5);
        color: var(--color-standalone);
        border-color: transparent;
      }
      :host([look='outline']) {
        background-color: transparent;
        color: var(--color-standalone);
        border-color: var(--color-standalone);
      }
      :host([look='placeholder']) {
        border-style: dashed;
        background-color: transparent;
        color: var(--color-standalone);
        border-color: var(--uui-color-border-standalone,#c2c2c2);
      }
    `],ga([a({reflect:!0})],ar.prototype,"color",2),ga([a({reflect:!0})],ar.prototype,"look",2),ar=ga([v("uui-tag")],ar);class Jr extends A{constructor(t,i={}){super(t,{bubbles:!0,...i})}}Jr.CHANGE="change",Jr.INPUT="input";var kg=Object.defineProperty,Cg=Object.getOwnPropertyDescriptor,se=(e,t,i,o)=>{for(var r=o>1?void 0:o?Cg(t,i):t,s=e.length-1,n;s>=0;s--)(n=e[s])&&(r=(o?n(t,i,r):n(r))||r);return o&&r&&kg(t,i,r),r};let G=class extends De(g,""){constructor(){super(),this.placeholder="",this.disabled=!1,this.readonly=!1,this.name="",this.error=!1,this.minlengthMessage="This field need more characters",this.maxlengthMessage="This field exceeds the allowed amount of characters",this.autoHeight=!1,this.addEventListener("mousedown",()=>{this.style.setProperty("--uui-show-focus-outline","0")}),this.addEventListener("blur",()=>{this.style.setProperty("--uui-show-focus-outline","")}),this.addValidator("tooShort",()=>this.minlengthMessage,()=>!!this.minlength&&this.value.length<this.minlength),this.addValidator("tooLong",()=>this.maxlengthMessage,()=>!!this.maxlength&&this.value.length>this.maxlength)}connectedCallback(){super.connectedCallback(),this.label||console.warn(this.tagName+" needs a `label`",this),this.autoHeight&&requestAnimationFrame(()=>{this.autoUpdateHeight()})}async focus(){await this.updateComplete,this._textarea.focus()}async blur(){await this.updateComplete,this._textarea.blur()}async click(){await this.updateComplete,this._textarea.click()}getFormElement(){return this._textarea}onInput(e){this.value=e.target.value,this.autoHeight&&this.autoUpdateHeight()}onChange(e){e.stopPropagation(),this.pristine=!1,this.dispatchEvent(new Jr(Jr.CHANGE))}autoUpdateHeight(){const e=this.shadowRoot.host,t=this._textarea,i=e.scrollTop,o=getComputedStyle(e).height;e.style.display="block",e.style.height=o,t.style.height="auto",t.scrollHeight+2>t.clientHeight?t.style.height=t.scrollHeight+2+"px":t.scrollHeight+2<t.clientHeight&&t.style.removeProperty("height"),e.style.removeProperty("display"),e.style.removeProperty("height"),e.scrollTop=i}render(){return l`
      <textarea
        id="textarea"
        rows=${w(this.rows)}
        cols=${w(this.cols)}
        .value=${this.value}
        .name=${this.name}
        wrap=${w(this.wrap)}
        placeholder=${this.placeholder}
        aria-label=${this.label}
        .disabled=${this.disabled}
        ?readonly=${this.readonly}
        @input=${this.onInput}
        @change=${this.onChange}>
      </textarea>
    `}};G.formAssociated=!0,G.styles=[b`
      :host {
        position: relative;
      }
      :host([error]) textarea,
      :host([error]) textarea[disabled] {
        border: 1px solid var(--uui-color-invalid,#d42054) !important;
      }
      :host(:not([pristine]):invalid) textarea,
      /* polyfill support */
      :host(:not([pristine])[internals-invalid]) textarea {
        border-color: var(--uui-color-invalid,#d42054);
      }
      :host([auto-height]) textarea {
        resize: none;
      }

      .label {
        display: inline-block;
        margin-bottom: var(--uui-size-1,3px);
        font-weight: bold;
      }

      textarea[readonly] {
        border-color: var(
          --uui-textarea-border-color-readonly,
          var(--uui-color-disabled-standalone,rgb(226, 226, 226))
        );
        background-color: var(
          --uui-textarea-background-color-readonly,
          var(--uui-color-disabled,#f3f3f5)
        );
      }
      textarea[disabled] {
        cursor: not-allowed;
        background-color: var(
          --uui-textarea-background-color-disabled,
          var(--uui-color-disabled,#f3f3f5)
        );
        border-color: var(
          --uui-textarea-border-color-disabled,
          var(--uui-color-disabled,#f3f3f5)
        );

        color: var(--uui-color-disabled-contrast,#c4c4c4);
      }

      textarea {
        color: var(--uui-color-text,#060606);
        font-family: inherit;
        line-height: var(--uui-size-6,18px);
        box-sizing: border-box;
        min-width: 100%;
        max-width: 100%;
        font-size: inherit;
        padding: var(--uui-size-2,6px);
        border: 1px solid
          var(--uui-textarea-border-color, var(--uui-color-border,#d8d7d9)); /** Note: Specified border size is needed and hardcoded in autoUpdateHeight() */
        border-radius: var(--uui-border-radius,3px);
        outline: none;
        min-height: var(--uui-textarea-min-height);
        max-height: var(--uui-textarea-max-height);
        background-color: var(
          --uui-textarea-background-color,
          var(--uui-color-surface,#fff)
        );
      }
      :host(:hover)
        textarea:not([readonly]):not([disabled])
        :host(:focus-within)
        textarea,
      :host(:focus) textarea {
        border-color: var(
          --uui-textarea-border-color,
          var(--uui-color-border-emphasis,#a1a1a1)
        );
      }
      textarea:focus {
        outline: calc(2px * var(--uui-show-focus-outline, 1)) solid
          var(--uui-color-focus,#3879ff);
      }
    `],se([a()],G.prototype,"placeholder",2),se([a({type:Boolean,reflect:!0})],G.prototype,"disabled",2),se([a({type:Boolean,reflect:!0})],G.prototype,"readonly",2),se([a({type:String})],G.prototype,"name",2),se([a({type:Boolean,reflect:!0})],G.prototype,"error",2),se([a({type:Number})],G.prototype,"minlength",2),se([a({type:String,attribute:"minlength-message"})],G.prototype,"minlengthMessage",2),se([a({type:Number})],G.prototype,"maxlength",2),se([a({type:String,attribute:"maxlength-message"})],G.prototype,"maxlengthMessage",2),se([O("#textarea")],G.prototype,"_textarea",2),se([a({type:Boolean,attribute:"auto-height",reflect:!0})],G.prototype,"autoHeight",2),se([a({type:String})],G.prototype,"label",2),se([a({type:Number})],G.prototype,"rows",2),se([a({type:Number})],G.prototype,"cols",2),se([a({type:String})],G.prototype,"wrap",2),G=se([v("uui-textarea")],G);class le extends A{}le.OPENING="opening",le.OPENED="opened",le.CLOSING="closing",le.CLOSED="closed";var Eg=Object.defineProperty,Pg=Object.getOwnPropertyDescriptor,lr=(e,t,i,o)=>{for(var r=o>1?void 0:o?Pg(t,i):t,s=e.length-1,n;s>=0;s--)(n=e[s])&&(r=(o?n(t,i,r):n(r))||r);return o&&r&&Eg(t,i,r),r};let dt=class extends g{constructor(){super(),this.color="",this._autoClose=null,this._onOpenTimerComplete=()=>{this._open&&(this.open=!1)},this._timer=null,this._pauseTimer=!1,this.isOpen=!1,this._open=!1,this._animate=!1,this._requestAnimationUpdate=0,this.addEventListener("keyup",e=>{e.key==="Escape"&&(this.open=!1)})}get autoClose(){return this._autoClose}set autoClose(e){this._autoClose=e,e!==null?(this._timer===null?this._timer=new xd(this._onOpenTimerComplete,e):this._timer.setDuration(e),this._pauseTimer===!1&&this.isOpen===!0&&this._animate===!1&&this._timer.start()):(this._timer?.destroy(),this._timer=null)}pauseAutoClose(){this._pauseTimer=!0,this._timer!==null&&this._timer.pause()}resumeAutoClose(){this._pauseTimer=!1,this._timer!==null&&this.isOpen===!0&&this._animate===!1&&this._timer.restart()}get open(){return this._open}set open(e){e===!0?this._makeOpen():this._makeClose()}connectedCallback(){super.connectedCallback(),x(this,"uui-button"),x(this,"uui-icon")}_getAnimationDuration(){return parseInt(getComputedStyle(this).getPropertyValue("--uui-toast-notification-animation-duration"),10)||480}_makeOpen(){this._open!==!0&&(this._open=!0,this.updateComplete.then(()=>{this._open===!0&&(cancelAnimationFrame(this._requestAnimationUpdate),this._requestAnimationUpdate=requestAnimationFrame(()=>{clearTimeout(this._animationTimeout),this.isOpen=!0,this.setAttribute("is-open",""),this.style.height=this._toastEl.getBoundingClientRect().height+"px",this._animate=!0,this.dispatchEvent(new le(le.OPENING)),this._animationTimeout=window.setTimeout(()=>{this.isOpen===!0&&(this.style.height="auto",this._animate=!1,this._pauseTimer===!1&&this._timer?.start(),this.dispatchEvent(new le(le.OPENED)))},this._getAnimationDuration())}))}))}_makeClose(){if(this._open===!1)return;const e=new le(le.CLOSING,{cancelable:!0});this.dispatchEvent(e),e.defaultPrevented!==!0&&(this._open=!1,this._timer?.pause(),cancelAnimationFrame(this._requestAnimationUpdate),this.isOpen===!0&&(this._requestAnimationUpdate=requestAnimationFrame(()=>{clearTimeout(this._animationTimeout),this.isOpen=!1,this.removeAttribute("is-open"),this.style.height=this._toastEl.getBoundingClientRect().height+"px",this._animate=!0,requestAnimationFrame(()=>{this.style.height="0"}),this._animationTimeout=window.setTimeout(()=>{this.isOpen===!1&&(this._animate=!1,this.dispatchEvent(new le(le.CLOSED)),this.parentNode&&this.parentNode.removeChild(this))},this._getAnimationDuration())})))}render(){return l`
      <div id="toast" class=${this._animate?"animate":""}>
        <div>
          <div id="close">
            <uui-button
              .label=${"close"}
              .color=${this.color}
              .look=${this.color?"primary":"default"}
              @click=${()=>this.open=!1}>
              <uui-icon
                name="remove"
                .fallback=${en.strings[0]}></uui-icon>
            </uui-button>
          </div>
          <slot></slot>
        </div>
      </div>
    `}};dt.styles=[hi,b`
      :host {
        --uui-toast-notification-margin: var(--uui-size-space-2,6px);

        position: relative;
        display: block;
        width: 100%;
        max-width: 400px;
        margin: 0 var(--uui-toast-notification-margin);
        box-sizing: border-box;

        height: 0;
        pointer-events: none;

        transition: height
          var(--uui-toast-notification-animation-duration, 480ms) ease-in-out;
      }
      :host([is-open]) {
        pointer-events: all;
        transition-timing-function: cubic-bezier(
          0.19,
          1,
          0.22,
          1
        ); /* easeOutExpo */
      }

      #toast {
        position: relative;
        display: block;
        padding: calc(var(--uui-toast-notification-margin) * 0.5) 0;
        width: 100%;
        max-width: 400px;
      }
      #toast.animate {
        position: absolute;
      }

      #toast > div {
        position: relative;
        display: block;

        box-sizing: border-box;
        box-shadow: var(--uui-shadow-depth-1,0 1px 3px rgba(0,0,0,0.12) , 0 1px 2px rgba(0,0,0,0.24));
        background-color: var(--uui-color-surface,#fff);
        padding: var(--uui-size-layout-1,24px);
        padding-right: var(--uui-size-layout-1,24px);
        padding-left: var(--uui-size-layout-3,42px);
        border-radius: calc(var(--uui-border-radius,3px) * 2);

        opacity: 0;
        transition: opacity
          var(--uui-toast-notification-animation-duration, 480ms);
      }
      :host([is-open]) #toast > div {
        opacity: 1;
      }

      #close {
        float: right;
        margin-top: -6px;
        margin-left: var(--uui-size-space-1,3px);
        margin-bottom: -4px;
      }

      #close > uui-button {
        --uui-button-border-radius: 50px 50px 50px 50px;
        --uui-button-padding-left-factor: 1.5;
        --uui-button-padding-right-factor: 1.5;
      }

      :host #toast > div {
        background-color: var(--uui-color-surface,#fff);
        color: var(--uui-color-text,#060606);
        border-color: var(--uui-color-surface,#fff);
      }
      :host([color='default']) #toast > div {
        background-color: var(--uui-color-default,#1b264f);
        color: var(--uui-color-default-contrast,#fff);
        border-color: var(--uui-color-default-standalone,rgb(28, 35, 59));
      }
      :host([color='positive']) #toast > div {
        background-color: var(--uui-color-positive,#0b8152);
        color: var(--uui-color-positive-contrast,#fff);
        border-color: var(--uui-color-positive-standalone,rgb(10, 115, 73));
      }
      :host([color='warning']) #toast > div {
        background-color: var(--uui-color-warning,#fbd142);
        color: var(--uui-color-warning-contrast,#000);
        border-color: var(--uui-color-warning-standalone,#a17700);
      }
      :host([color='danger']) #toast > div {
        background-color: var(--uui-color-danger,#d42054);
        color: var(--uui-color-danger-contrast,white);
        border-color: var(--uui-color-danger-standalone,rgb(191, 33, 78));
      }
      :host([color='invalid']) #toast > div {
        background-color: var(--uui-color-invalid,#d42054);
        color: var(--uui-color-invalid-contrast,white);
        border-color: var(--uui-color-invalid-standalone,rgb(191, 33, 78));
      }
    `],lr([a({reflect:!0})],dt.prototype,"color",2),lr([a({type:Number})],dt.prototype,"autoClose",1),lr([O("#toast")],dt.prototype,"_toastEl",2),lr([_()],dt.prototype,"_animate",2),lr([a({type:Boolean,reflect:!0})],dt.prototype,"open",1),dt=lr([v("uui-toast-notification")],dt);var Sg=Object.defineProperty,Og=Object.getOwnPropertyDescriptor,vc=(e,t,i,o)=>{for(var r=o>1?void 0:o?Og(t,i):t,s=e.length-1,n;s>=0;s--)(n=e[s])&&(r=(o?n(t,i,r):n(r))||r);return o&&r&&Sg(t,i,r),r};let eo=class extends g{constructor(){super(...arguments),this._autoClose=null,this._autoClosePause=!1,this.pauseAutoClose=()=>{this._autoClosePause=!0,this._toasts?.forEach(e=>e.pauseAutoClose())},this.resumeAutoClose=()=>{this.matches(":focus-within:not(:focus)")===!1&&(this._autoClosePause=!1,this._toasts?.forEach(e=>e.resumeAutoClose()))},this.onToastClosed=e=>{this.removeToast(e.target)},this._toasts=[],this.onSlotChanged=e=>{const t=[...this._toasts];this._toasts=e.target.assignedElements({flatten:!0}).filter(r=>r.nodeName==="UUI-TOAST-NOTIFICATION"),t.filter(r=>this._toasts.indexOf(r)===-1).forEach(r=>{r.removeEventListener(le.CLOSED,this.onToastClosed),r.removeEventListener("mouseenter",this.pauseAutoClose),r.removeEventListener("mouseleave",this.resumeAutoClose),r.removeEventListener("focus",this.pauseAutoClose),r.removeEventListener("blur",this.resumeAutoClose)}),this._toasts.filter(r=>t.indexOf(r)===-1).forEach(r=>{r.addEventListener(le.CLOSED,this.onToastClosed),r.addEventListener("mouseenter",this.pauseAutoClose),r.addEventListener("mouseleave",this.resumeAutoClose),r.addEventListener("focus",this.pauseAutoClose),r.addEventListener("blur",this.resumeAutoClose),this._autoClose&&(r.autoClose=this._autoClose),this._autoClosePause===!0&&r.pauseAutoClose(),r.open=!0})}}get autoClose(){return this._autoClose}set autoClose(e){this._autoClose=e,this._toasts?.forEach(t=>t.autoClose=e)}removeToast(e){if(!e)e=this._toasts[this._toasts.length-1];else if(this._toasts.indexOf(e)===-1){console.warn("Toast-notification",e,"could not be removed as it is not a child of this toast-notification-container",this);return}this.removeChild(e)}closeToast(e){let t=e;t||(t=this._toasts[this._toasts.length-1]),t.open=!1}render(){return l` <slot @slotchange=${this.onSlotChanged}></slot> `}};eo.styles=[b`
      :host {
        position: absolute;
        overflow: hidden;
        max-width: 100%;
        height: 100%;

        pointer-events: none;
        box-sizing: border-box;
      }

      slot {
        display: flex;
        flex-direction: column;
        align-items: end;

        height: 100%;
        box-sizing: border-box;

        padding-top: var(--uui-size-space-1,3px);
        padding-bottom: var(--uui-size-space-1,3px);
      }
      :host([bottom-up]) slot {
        justify-content: end;
      }
      :host([left-align]) slot {
        align-items: start;
      }
    `],vc([a({type:Number,reflect:!0,attribute:"auto-close"})],eo.prototype,"_autoClose",2),eo=vc([v("uui-toast-notification-container")],eo);var Ig=Object.defineProperty,Ag=Object.getOwnPropertyDescriptor,ma=(e,t,i,o)=>{for(var r=o>1?void 0:o?Ag(t,i):t,s=e.length-1,n;s>=0;s--)(n=e[s])&&(r=(o?n(t,i,r):n(r))||r);return o&&r&&Ig(t,i,r),r};let ur=class extends g{constructor(){super(...arguments),this.headline="",this._headlineSlotHasContent=!1,this._headlineSlotChanged=e=>{this._headlineSlotHasContent=e.target.assignedNodes({flatten:!0}).length>0}}render(){return l`
      <div id="message" class="uui-text">
        <h5
          style=${this._headlineSlotHasContent||this.headline&&this.headline!==""?"":"display: none"}>
          ${this.headline}
          <slot name="headline" @slotchange=${this._headlineSlotChanged}></slot>
        </h5>
        <slot></slot>
        <slot id="actions" name="actions"></slot>
      </div>
    `}};ur.styles=[hi,b`
      #message {
        margin-bottom: calc(var(--uui-size-space-1,3px) * -1);
      }
      #message::after {
        content: '';
        display: block;
        clear: both;
      }
      #actions {
        /*
        display: flex;
        width: 100%;
        justify-content: flex-end;
        */
        display: block;
        float: right;

        margin-top: var(--uui-size-space-4,12px);
        margin-bottom: calc(var(--uui-size-space-2,6px) * -1);
      }
    `],ma([a({type:String})],ur.prototype,"headline",2),ma([_()],ur.prototype,"_headlineSlotHasContent",2),ur=ma([v("uui-toast-notification-layout")],ur);var Ug=Object.getOwnPropertyDescriptor,zg=(e,t,i,o)=>{for(var r=o>1?void 0:o?Ug(t,i):t,s=e.length-1,n;s>=0;s--)(n=e[s])&&(r=n(r)||r);return r};let to=class extends we{constructor(){super("switch")}renderCheckbox(){return l`
      <div id="toggle">
        <div id="icon-checked">${Eo}</div>
        <div id="icon-unchecked">${en}</div>
      </div>
    `}};to.formAssociated=!0,to.styles=[...we.styles,xo,b`
      :host {
        --uui-toggle-size: 18px;
        --uui-toggle-switch-width: calc(2 * var(--uui-toggle-size));
      }

      #toggle {
        position: relative;
        grid-area: 'input';
        display: flex;
        align-items: center;

        flex-shrink: 0;

        width: var(--uui-toggle-switch-width);
        height: var(--uui-toggle-size);
        border-radius: 100px;

        background-color: var(
          --uui-toggle-background-color,
          var(--uui-color-border,#d8d7d9)
        );
        border: 1px solid
          var(--uui-toggle-border-color, var(--uui-color-border-standalone,#c2c2c2));
        font-size: calc(var(--uui-toggle-size) * 0.6);
      }

      label:hover input:not([disabled]) ~ #toggle {
        border-color: var(
          --uui-toggle-border-color-hover,
          var(--uui-color-border-emphasis,#a1a1a1)
        );
        background-color: var(
          --uui-toggle-background-color-hover,
          var(--uui-color-border,#d8d7d9)
        );
      }

      label:focus #toggle {
        border-color: var(
          --uui-toggle-border-color-focus,
          var(--uui-color-focus,#3879ff)
        );
        background-color: var(
          --uui-toggle-background-color-focus,
          var(--uui-color-surface-emphasis,rgb(250, 250, 250))
        );
      }

      input:checked ~ #toggle {
        background-color: var(--uui-color-selected,#3544b1);
      }

      label:hover input:checked:not([disabled]) ~ #toggle {
        background-color: var(--uui-color-selected-emphasis,rgb(70, 86, 200));
      }

      label:focus input:checked ~ #toggle {
        background-color: var(--uui-color-selected-emphasis,rgb(70, 86, 200));
      }

      #icon-checked,
      #icon-unchecked {
        position: absolute;
        vertical-align: middle;
        width: 1em;
        height: 1em;
        line-height: 0;
        transition: color 120ms;
      }

      #icon-checked {
        margin-left: -0.5em;
        left: calc(var(--uui-toggle-size) * 0.5);
        color: var(--uui-color-interactive,#1b264f);
      }

      #icon-unchecked {
        margin-right: -0.5em;
        right: calc(var(--uui-toggle-size) * 0.5);
        color: var(--uui-color-interactive,#1b264f);
      }

      input:checked ~ #toggle #icon-checked {
        color: var(--uui-color-selected-contrast,#fff);
      }

      #toggle::after {
        content: '';
        position: absolute;
        top: 2px;
        left: 2px;
        width: calc(var(--uui-toggle-size) - 4px);
        height: calc(var(--uui-toggle-size) - 4px);
        border-radius: 100px;
        background-color: var(--uui-color-selected-contrast,#fff);
        transition:
          width 120ms ease,
          left 120ms ease,
          transform 120ms ease,
          background-color 120ms;
      }

      input:checked ~ #toggle::after {
        left: calc(100% - 2px);
        transform: translateX(-100%);
      }

      input:focus ~ #toggle {
        outline: calc(2px * var(--uui-show-focus-outline, 1)) solid
          var(--uui-color-focus,#3879ff);
      }

      :host(:not([disabled], [readonly])) label:active #toggle::after {
        /** Stretch when mouse down */
        width: calc(1.06 * var(--uui-toggle-size));
      }

      :host([disabled]) #toggle {
        background-color: var(--uui-color-disabled-standalone,rgb(226, 226, 226));
      }
      :host([disabled]) input:checked ~ #toggle {
        background-color: var(--uui-color-disabled-contrast,#c4c4c4);
      }
      :host([disabled]) #toggle::after {
        background-color: var(--uui-color-disabled,#f3f3f5);
      }
      :host([disabled]) #toggle #icon-unchecked {
        color: var(--uui-color-disabled-contrast,#c4c4c4);
      }
      :host([disabled]) label:active #toggle {
        animation: ${$o};
      }
      :host([disabled]) input:checked #toggle #icon-checked {
        color: var(--uui-color-disabled-contrast,#c4c4c4);
      }

      :host(:not([pristine]):invalid) #toggle,
      :host(:not([pristine]):invalid) label:hover #toggle,
      /* polyfill support */
      :host(:not([pristine])[internals-invalid]) #toggle,
      :host(:not([pristine])[internals-invalid]) label:hover #toggle {
        border: 1px solid var(--uui-color-invalid-standalone,rgb(191, 33, 78));
      }
    `],to=zg([v("uui-toggle")],to);var Mg=Object.getOwnPropertyDescriptor,Dg=(e,t,i,o)=>{for(var r=o>1?void 0:o?Mg(t,i):t,s=e.length-1,n;s>=0;s--)(n=e[s])&&(r=n(r)||r);return r};let zs=class extends g{render(){return l`<slot></slot>`}};zs.styles=[b`
      :host(:not(:focus-within)) {
        position: absolute !important;
        width: 1px !important;
        height: 1px !important;
        clip: rect(0 0 0 0) !important;
        clip-path: inset(50%) !important;
        border: none !important;
        overflow: hidden !important;
        white-space: nowrap !important;
        padding: 0 !important;
      }
    `],zs=Dg([v("uui-visually-hidden")],zs);export{Zc as ActiveMixin,Jc as LabelMixin,xh as PopoverTargetMixin,ah as SelectOnlyMixin,rh as SelectableMixin,dh as Timer,vo as UUIActionBarElement,Ke as UUIAvatarElement,Tt as UUIAvatarGroupElement,Vt as UUIBadgeElement,Wc as UUIBlinkAnimationValue,Rc as UUIBlinkKeyframes,we as UUIBooleanInputElement,wo as UUIBooleanInputEvent,Le as UUIBoxElement,jt as UUIBreadcrumbItemElement,gr as UUIBreadcrumbsElement,Ft as UUIButtonCopyTextElement,oe as UUIButtonElement,di as UUIButtonGroupElement,Te as UUIButtonInlineCreateElement,ko as UUIButtonInlineCreateEvent,qt as UUICardBlockTypeElement,Kt as UUICardContentNodeElement,Z as UUICardElement,wi as UUICardEvent,_t as UUICardMediaElement,Ei as UUICardUserElement,wr as UUICaretElement,xr as UUICheckboxElement,ve as UUIColorAreaElement,Do as UUIColorAreaEvent,Pi as UUIColorPickerChangeEvent,N as UUIColorPickerElement,fe as UUIColorSliderElement,Vo as UUIColorSliderEvent,Qe as UUIColorSwatchElement,yt as UUIColorSwatchesElement,Oi as UUIColorSwatchesEvent,J as UUIComboboxElement,ge as UUIComboboxEvent,Ie as UUIComboboxListElement,be as UUIComboboxListEvent,Je as UUIComboboxListOptionElement,Wt as UUICopyTextEvent,Qo as UUIDialogElement,Mi as UUIDialogLayoutElement,Rs as UUIEvent,et as UUIFileDropzoneElement,Di as UUIFileDropzoneEvent,me as UUIFilePreviewElement,qe as UUIFormControlEvent,hh as UUIFormControlMixin,On as UUIFormElement,Xt as UUIFormLayoutItemElement,Ir as UUIFormValidationMessageElement,Gc as UUIHorizontalPulseAnimationValue,Fc as UUIHorizontalPulseKeyframes,Kc as UUIHorizontalShakeAnimationValue,qc as UUIHorizontalShakeKeyframes,He as UUIIconElement,In as UUIIconHost,An as UUIIconRegistry,Ar as UUIIconRegistryElement,bu as UUIIconRegistryEssential,Un as UUIIconRegistryEssentialElement,Ti as UUIIconRequestEvent,T as UUIInputElement,Qt as UUIInputEvent,tt as UUIInputFileElement,Ur as UUIInputLockElement,ts as UUIInputLockEvent,Ni as UUIInputPasswordElement,Ch as UUIInterfaceColorValues,Eh as UUIInterfaceHeadingValues,kh as UUIInterfaceLookValues,rs as UUIKeyElement,is as UUIKeyboardShortcutElement,Jt as UUILabelElement,Bi as UUILoaderBarElement,Hi as UUILoaderCircleElement,ss as UUILoaderElement,de as UUIMenuItemElement,it as UUIMenuItemEvent,$u as UUIModalCloseEndEvent,Ri as UUIModalCloseEvent,rt as UUIModalContainerElement,us as UUIModalDialogElement,_e as UUIModalElement,xu as UUIModalOpenEvent,Wi as UUIModalSidebarElement,Ce as UUIPaginationElement,xt as UUIPaginationEvent,je as UUIPopoverContainerElement,$t as UUIPopoverElement,Lr as UUIProgressBarElement,Ee as UUIRadioElement,Xi as UUIRadioEvent,ri as UUIRadioGroupElement,ds as UUIRadioGroupEvent,L as UUIRangeSliderElement,at as UUIRefElement,Ji as UUIRefEvent,bs as UUIRefListElement,Nr as UUIRefNodeDataTypeElement,Br as UUIRefNodeDocumentTypeElement,R as UUIRefNodeElement,_s as UUIRefNodeFormElement,Hr as UUIRefNodeMemberElement,er as UUIRefNodePackageElement,jr as UUIRefNodeUserElement,Rr as UUIScrollContainerElement,pe as UUISelectElement,ys as UUISelectEvent,Mt as UUISelectableEvent,K as UUISliderElement,ni as UUISliderEvent,Fr as UUISymbolExpandElement,Or as UUISymbolFileDropzoneElement,Gr as UUISymbolFileElement,tr as UUISymbolFileThumbnailElement,$s as UUISymbolFolderElement,qr as UUISymbolLockElement,ks as UUISymbolMoreElement,Kr as UUISymbolSortElement,ut as UUITabElement,yg as UUITabEvent,ht as UUITabGroupElement,wg as UUITabGroupEvent,lt as UUITableCellElement,Ps as UUITableColumnElement,Cs as UUITableElement,Ss as UUITableHeadCellElement,Os as UUITableHeadElement,Yr as UUITableRowElement,ar as UUITagElement,hi as UUITextStyles,G as UUITextareaElement,Jr as UUITextareaEvent,eo as UUIToastNotificationContainerElement,dt as UUIToastNotificationElement,le as UUIToastNotificationEvent,ur as UUIToastNotificationLayoutElement,to as UUIToggleElement,zs as UUIVisuallyHiddenElement,fh as clamp,$h as defineElement,ph as demandCustomElement,vh as drag,Ba as findAncestorByAttributeValue,bh as reverseNumberInRange,mh as slotHasContent,gh as toHex};
